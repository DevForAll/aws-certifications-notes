/* Motor del simulador CLF-C02.
 * URL: index.html?banco=<ruta .js relativa a simulador/>
 *      [&modo=estudio] [&solo=id1,id2] [&resultado=<id de resultados/>]
 * El banco define window.BANCO (formato en CLAUDE.md). Funciona con doble clic (file://) y en GitHub Pages.
 */
(function () {
  'use strict';

  var DOMINIOS = {
    1: 'Conceptos de la nube',
    2: 'Seguridad y cumplimiento',
    3: 'Tecnología y servicios',
    4: 'Facturación, precios y soporte'
  };
  var LETRAS = 'ABCDEFGH';

  var app = document.getElementById('app');
  var nav = document.getElementById('nav');
  var timerEl = document.getElementById('timer');
  var progressEl = document.getElementById('progress');

  var params = new URLSearchParams(location.search);
  var bancoParam = params.get('banco');
  var soloParam = params.get('solo');
  var resultadoParam = params.get('resultado');

  var B = null;        // banco
  var Q = [];          // preguntas en juego (todas o el subconjunto de «solo»)
  var S = null;        // estado del intento
  var modo = 'examen';
  var tick = null;

  // ── utilidades ──────────────────────────────────────────────
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function range(n) { var a = []; for (var i = 0; i < n; i++) a.push(i); return a; }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function mmss(seg) {
    seg = Math.max(0, Math.round(seg));
    var h = Math.floor(seg / 3600), m = Math.floor((seg % 3600) / 60), s = seg % 60;
    return (h ? h + ':' + pad(m) : m) + ':' + pad(s);
  }
  function hoy() { var d = new Date(); return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function ahoraLocal() {
    var d = new Date();
    return hoy() + 'T' + pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds());
  }
  function correctas(q) {
    var r = [];
    q.opciones.forEach(function (o, i) { if (o.correcta) r.push(i); });
    return r;
  }
  function mismoConjunto(a, b) {
    if (a.length !== b.length) return false;
    var x = a.slice().sort(), y = b.slice().sort();
    for (var i = 0; i < x.length; i++) if (x[i] !== y[i]) return false;
    return true;
  }
  function umbral() { return B.tipo === 'leccion' ? 80 : 75; }
  function minutosLimite() { return B.minutos || Math.ceil(Q.length * 1.4); }
  function bancoRaiz() { return bancoParam.replace(/^(\.\.\/)+/, ''); }
  function store(fn) { try { return fn(); } catch (e) { return null; } }
  function clave() { return 'aws-sim:' + B.id + ':' + modo + (soloParam ? ':solo:' + soloParam : ''); }

  function cargarScript(src) {
    return new Promise(function (ok, fail) {
      var s = document.createElement('script');
      s.src = src;
      s.onload = ok;
      s.onerror = function () { fail(new Error('No se pudo cargar ' + src)); };
      document.head.appendChild(s);
    });
  }

  function mostrarError(msg) {
    nav.hidden = true;
    app.innerHTML = '<div class="card error"><h1>No se pudo abrir la práctica</h1><p class="muted">' + esc(msg) +
      '</p><p class="muted" style="margin-top:.6rem">Ábrela desde el <a href="../index.html">portal</a> o con ' +
      '<code>simulador/index.html?banco=../ruta/al/banco.js</code>.</p></div>';
  }

  // ── tema ────────────────────────────────────────────────────
  document.getElementById('theme').addEventListener('click', function () {
    var root = document.documentElement;
    var dark = root.getAttribute('data-theme') === 'dark';
    root.setAttribute('data-theme', dark ? 'light' : 'dark');
    store(function () { localStorage.setItem('aws-theme', dark ? 'light' : 'dark'); });
  });

  // ── estado ──────────────────────────────────────────────────
  function nuevoEstado() {
    var opc = {};
    Q.forEach(function (q, qi) { opc[qi] = shuffle(range(q.opciones.length)); });
    return {
      bancoId: B.id, modo: modo, orden: shuffle(range(Q.length)), opc: opc,
      resp: {}, marcadas: {}, comprobadas: {}, actual: 0, seg: 0, inicio: ahoraLocal()
    };
  }
  function guardar() { if (S) store(function () { localStorage.setItem(clave(), JSON.stringify(S)); }); }
  function leerGuardado() {
    var raw = store(function () { return localStorage.getItem(clave()); });
    if (!raw) return null;
    try {
      var st = JSON.parse(raw);
      return st && st.orden && st.orden.length === Q.length ? st : null;
    } catch (e) { return null; }
  }
  function borrarGuardado() { store(function () { localStorage.removeItem(clave()); }); }
  function respondidas() {
    var n = 0;
    for (var k in S.resp) if (S.resp[k] && S.resp[k].length) n++;
    return n;
  }

  // ── cronómetro ──────────────────────────────────────────────
  function iniciarReloj() {
    detenerReloj();
    timerEl.hidden = false;
    pintarReloj();
    tick = setInterval(function () {
      S.seg++;
      pintarReloj();
      guardar();
      if (modo === 'examen' && S.seg >= minutosLimite() * 60) enviar('tiempo');
    }, 1000);
  }
  function detenerReloj() { if (tick) clearInterval(tick); tick = null; }
  function pintarReloj() {
    if (modo === 'examen') {
      var resta = minutosLimite() * 60 - S.seg;
      timerEl.textContent = '⏱ ' + mmss(resta);
      timerEl.classList.toggle('low', resta <= 300);
    } else {
      timerEl.textContent = '⏱ ' + mmss(S.seg);
      timerEl.classList.remove('low');
    }
  }
  function pintarProgreso() {
    progressEl.style.width = (S ? Math.round(respondidas() / Q.length * 100) : 0) + '%';
  }

  // ── pantalla de inicio ──────────────────────────────────────
  function pantallaInicio() {
    detenerReloj();
    timerEl.hidden = true;
    nav.hidden = true;
    S = null;
    pintarProgreso();
    var tipo = { leccion: 'Práctica de lección', 'simulacro-modulo': 'Simulacro de módulo', 'simulacro-completo': 'Simulacro completo' }[B.tipo] || 'Práctica';
    var html = '<div class="card"><p class="muted">' + esc(tipo) + '</p><h1>' + esc(B.titulo) + '</h1>';
    if (soloParam) {
      html += '<p class="muted">Reintento de <strong>' + Q.length + ' preguntas falladas</strong> en modo estudio ' +
        '(feedback inmediato, sin límite de tiempo).</p>';
    } else {
      html += '<p class="muted"><strong>' + Q.length + ' preguntas</strong> · <strong>' + minutosLimite() + ' min</strong> en modo examen · ' +
        'umbral del plan: <strong>' + umbral() + ' %</strong></p>';
    }
    html += '</div>';

    var guardados = [];
    ['examen', 'estudio'].forEach(function (m) {
      if (soloParam && m === 'examen') return;
      var prev = modo; modo = m;
      var st = leerGuardado();
      modo = prev;
      if (st) guardados.push({ modo: m, st: st });
    });
    guardados.forEach(function (g) {
      var n = 0; for (var k in g.st.resp) if (g.st.resp[k] && g.st.resp[k].length) n++;
      var detalle = g.modo === 'examen'
        ? 'quedan ' + mmss(minutosLimite() * 60 - g.st.seg)
        : 'llevas ' + mmss(g.st.seg);
      html += '<div class="card"><h2 style="margin-top:0">Intento en curso (modo ' + g.modo + ')</h2>' +
        '<p class="muted">' + n + ' de ' + Q.length + ' respondidas · ' + detalle + '. El cronómetro estaba detenido.</p>' +
        '<div class="row" style="margin-top:.8rem"><button class="btn primary" data-continuar="' + g.modo + '">Continuar</button>' +
        '<button class="btn" data-descartar="' + g.modo + '">Descartar y empezar de nuevo</button></div></div>';
    });

    html += '<div class="card"><div class="row">';
    if (!soloParam) {
      html += '<button class="btn primary" data-empezar="examen">Empezar modo examen</button>';
    }
    html += soloParam ? '<button class="btn primary" data-empezar="estudio">Empezar reintento</button></div>'
      : '<button class="btn" data-empezar="estudio">Modo estudio</button></div>';
    if (!soloParam) {
      html += '<p class="muted" style="margin-top:.8rem"><strong>Modo examen:</strong> sin pistas ni feedback, «Marcar para revisión», ' +
        'pantalla de revisión antes de enviar y envío automático al acabarse el tiempo. Si cierras la página, ' +
        'el intento queda guardado y el cronómetro se detiene.<br><strong>Modo estudio:</strong> feedback inmediato; ' +
        'solo para repasar, nunca en el primer intento.</p>';
    }
    html += '</div>';
    app.innerHTML = html;

    app.querySelectorAll('[data-empezar]').forEach(function (b) {
      b.onclick = function () {
        modo = b.getAttribute('data-empezar');
        if (leerGuardado() && !confirm('Hay un intento en curso en modo ' + modo + '. ¿Descartarlo y empezar de nuevo?')) return;
        S = nuevoEstado(); guardar(); arrancar();
      };
    });
    app.querySelectorAll('[data-continuar]').forEach(function (b) {
      b.onclick = function () { modo = b.getAttribute('data-continuar'); S = leerGuardado(); arrancar(); };
    });
    app.querySelectorAll('[data-descartar]').forEach(function (b) {
      b.onclick = function () { modo = b.getAttribute('data-descartar'); borrarGuardado(); pantallaInicio(); };
    });
  }

  function arrancar() { iniciarReloj(); pantallaPregunta(S.actual); }

  // ── pregunta ────────────────────────────────────────────────
  function pantallaPregunta(i) {
    S.actual = i; guardar();
    var qi = S.orden[i], q = Q[qi];
    var ok = correctas(q), multi = ok.length > 1;
    var elegidas = S.resp[qi] || [];
    var comprobada = modo === 'estudio' && S.comprobadas[qi];

    var html = '<div class="card"><div class="q-meta"><span>Pregunta ' + (i + 1) + ' de ' + Q.length + '</span>' +
      (S.marcadas[qi] ? '<span class="flag">⚑ Marcada para revisión</span>' : '') + '</div>' +
      '<p class="stem">' + esc(q.enunciado) + '</p>' +
      (multi ? '<p class="choose">(Elija ' + ok.length + '.)</p>' : '') + '<div role="group">';
    S.opc[qi].forEach(function (oi, pos) {
      var o = q.opciones[oi], sel = elegidas.indexOf(oi) >= 0, cls = 'opt';
      if (comprobada) { cls += ' static' + (o.correcta ? ' ok' : sel ? ' bad' : ''); } else if (sel) cls += ' sel';
      html += '<label class="' + cls + '"><input type="' + (multi ? 'checkbox' : 'radio') + '" name="opt" value="' + oi + '"' +
        (sel ? ' checked' : '') + (comprobada ? ' disabled' : '') + '>' +
        '<span><span class="letter">' + LETRAS[pos] + '.</span> ' + esc(o.texto) +
        (comprobada && (o.correcta || sel) && o.porque ? '<span class="why">' + esc(o.porque) + '</span>' : '') + '</span></label>';
    });
    html += '</div>';
    if (comprobada) {
      var acierto = mismoConjunto(elegidas, ok);
      html += '<p style="margin-top:.6rem"><span class="badge ' + (acierto ? 'ok">Correcta' : 'bad">Incorrecta') + '</span></p>' +
        (q.explicacion ? '<div class="explain">' + esc(q.explicacion) + '</div>' : '');
    }
    html += '<p class="muted" id="aviso" style="margin-top:.4rem"></p></div>';
    app.innerHTML = html;
    window.scrollTo(0, 0);

    app.querySelectorAll('input[name="opt"]').forEach(function (inp) {
      inp.onchange = function () { elegir(qi, +inp.value, multi, ok.length, inp); };
    });
    pintarNav(i, qi);
    pintarProgreso();
  }

  function elegir(qi, oi, multi, n, inp) {
    var cur = (S.resp[qi] || []).slice();
    if (!multi) cur = [oi];
    else if (inp.checked) {
      if (cur.length >= n) {
        inp.checked = false;
        document.getElementById('aviso').textContent = 'Elija solo ' + n + '. Desmarque una opción para cambiarla.';
        return;
      }
      cur.push(oi);
    } else cur = cur.filter(function (x) { return x !== oi; });
    S.resp[qi] = cur;
    guardar();
    app.querySelectorAll('.opt').forEach(function (lab) {
      lab.classList.toggle('sel', lab.querySelector('input').checked);
    });
    document.getElementById('aviso').textContent = '';
    pintarProgreso();
  }

  function pintarNav(i, qi) {
    nav.hidden = false;
    var ultima = i === Q.length - 1;
    var html = '<div class="row"><button class="btn" id="b-prev"' + (i === 0 ? ' disabled' : '') + '>← Anterior</button>';
    if (modo === 'examen') {
      html += '<button class="btn' + (S.marcadas[qi] ? ' marked' : '') + '" id="b-mark">⚑ ' + (S.marcadas[qi] ? 'Desmarcar' : 'Marcar') + '</button>' +
        '<span class="spacer"></span>' +
        (ultima ? '' : '<button class="btn" id="b-next">Siguiente →</button>') +
        '<button class="btn primary" id="b-rev">Revisar y enviar</button>';
    } else {
      html += '<span class="spacer"></span>';
      if (!S.comprobadas[qi]) html += '<button class="btn primary" id="b-check">Comprobar</button>';
      html += ultima ? '<button class="btn' + (S.comprobadas[qi] ? ' primary' : '') + '" id="b-fin">Ver resultado</button>'
        : '<button class="btn' + (S.comprobadas[qi] ? ' primary' : '') + '" id="b-next">Siguiente →</button>';
    }
    html += '</div>';
    nav.innerHTML = html;
    bind('b-prev', function () { pantallaPregunta(i - 1); });
    bind('b-next', function () { pantallaPregunta(i + 1); });
    bind('b-mark', function () { S.marcadas[qi] = !S.marcadas[qi]; if (!S.marcadas[qi]) delete S.marcadas[qi]; pantallaPregunta(i); });
    bind('b-rev', pantallaRevision);
    bind('b-check', function () {
      if (!(S.resp[qi] && S.resp[qi].length)) { document.getElementById('aviso').textContent = 'Elija una respuesta antes de comprobar.'; return; }
      S.comprobadas[qi] = true; pantallaPregunta(i);
    });
    bind('b-fin', function () {
      var faltan = Q.length - respondidas();
      if (faltan && !confirm('Hay ' + faltan + ' sin responder. ¿Ver el resultado igual?')) return;
      enviar('usuario');
    });
  }
  function bind(id, fn) { var el = document.getElementById(id); if (el) el.onclick = fn; }

  // ── revisión antes de enviar (modo examen) ──────────────────
  function pantallaRevision() {
    var resp = respondidas(), marc = Object.keys(S.marcadas).length;
    var html = '<div class="card"><h1>Revisión</h1><p class="muted">' + resp + ' respondidas · ' + (Q.length - resp) +
      ' sin responder · ' + marc + ' marcadas. Toca un número para ir a esa pregunta.</p><div class="grid">';
    for (var i = 0; i < Q.length; i++) {
      var qi = S.orden[i];
      var cls = 'tile' + (S.resp[qi] && S.resp[qi].length ? ' answered' : '') + (S.marcadas[qi] ? ' marked' : '');
      html += '<button class="' + cls + '" data-ir="' + i + '" aria-label="Pregunta ' + (i + 1) + '">' + (i + 1) + '</button>';
    }
    html += '</div><div class="legend"><span>▢ Sin responder</span><span>■ Respondida</span><span style="color:var(--mark)">⚑ Marcada</span></div></div>';
    app.innerHTML = html;
    window.scrollTo(0, 0);
    app.querySelectorAll('[data-ir]').forEach(function (b) { b.onclick = function () { pantallaPregunta(+b.getAttribute('data-ir')); }; });
    nav.hidden = false;
    var primeraMarcada = -1;
    for (var j = 0; j < Q.length; j++) if (S.marcadas[S.orden[j]]) { primeraMarcada = j; break; }
    nav.innerHTML = '<div class="row"><button class="btn" id="b-back">← Volver a la pregunta</button>' +
      (primeraMarcada >= 0 ? '<button class="btn marked" id="b-marked">Ir a marcadas</button>' : '') +
      '<span class="spacer"></span><button class="btn danger" id="b-send">Enviar examen</button></div>';
    bind('b-back', function () { pantallaPregunta(S.actual); });
    bind('b-marked', function () { pantallaPregunta(primeraMarcada); });
    bind('b-send', function () {
      var faltan = Q.length - respondidas();
      var msg = faltan ? 'Quedan ' + faltan + ' sin responder (cuentan como incorrectas). ¿Enviar el examen?' : '¿Enviar el examen? No podrás cambiar respuestas.';
      if (confirm(msg)) enviar('usuario');
    });
  }

  // ── envío y resultado ───────────────────────────────────────
  function calcularResultado(enviado) {
    var porDom = {}, aciertos = 0, preguntas = [];
    Q.forEach(function (q, qi) {
      var eleg = (S.resp[qi] || []).slice().sort(function (a, b) { return a - b; });
      var ok = correctas(q), acierto = mismoConjunto(eleg, ok);
      if (acierto) aciertos++;
      var d = String(q.dominio || 0);
      porDom[d] = porDom[d] || { total: 0, aciertos: 0 };
      porDom[d].total++; if (acierto) porDom[d].aciertos++;
      preguntas.push({ id: q.id, dominio: q.dominio, elegidas: eleg, correctas: ok, acierto: acierto, marcada: !!S.marcadas[qi] });
    });
    return {
      version: 1, banco: bancoRaiz(), bancoId: B.id, titulo: B.titulo, tipo: B.tipo, modo: modo,
      solo: soloParam ? soloParam.split(',') : undefined,
      inicio: S.inicio, fecha: ahoraLocal(), enviado: enviado,
      segundosUsados: S.seg, segundosLimite: modo === 'examen' ? minutosLimite() * 60 : null,
      total: Q.length, aciertos: aciertos, porcentaje: Math.round(aciertos / Q.length * 1000) / 10,
      umbral: umbral(), porDominio: porDom, preguntas: preguntas
    };
  }

  function enviar(enviado) {
    detenerReloj();
    var r = calcularResultado(enviado);
    borrarGuardado();
    S = null;
    if (enviado === 'tiempo') alert('Se acabó el tiempo. El examen se envió automáticamente.');
    pantallaResultado(r, false, true);
  }

  function pantallaResultado(r, revision, recienEnviado) {
    detenerReloj();
    nav.hidden = true;
    timerEl.hidden = true;
    progressEl.style.width = '100%';
    var pasa = r.porcentaje >= r.umbral;
    var falladas = r.preguntas.filter(function (p) { return !p.acierto; });
    var html = '<div class="card"><p class="muted">' + (revision ? 'Revisión de un intento guardado · ' : '') +
      'Modo ' + esc(r.modo) + ' · ' + esc(r.fecha.replace('T', ' ')) + '</p><h1>' + esc(r.titulo) + '</h1>' +
      '<p class="score ' + (pasa ? 'pass' : 'fail') + '">' + r.porcentaje + ' %</p>' +
      '<p class="muted">' + r.aciertos + ' de ' + r.total + ' correctas · tiempo ' + mmss(r.segundosUsados) +
      (r.segundosLimite ? ' de ' + mmss(r.segundosLimite) : '') + (r.enviado === 'tiempo' ? ' · <strong>enviado por tiempo</strong>' : '') + '</p>' +
      '<p class="muted" style="margin-top:.4rem">Umbral del plan: ' + r.umbral + ' %. ' +
      (pasa ? '✓ Superado.' : '✗ Por debajo: haz «Reintentar falladas» en modo estudio; estas preguntas entran al calentamiento.') + '</p>';
    html += '<h2>Por dominio</h2>';
    Object.keys(r.porDominio).sort().forEach(function (d) {
      var x = r.porDominio[d], pct = Math.round(x.aciertos / x.total * 100);
      html += '<div class="dom">' + d + '. ' + esc(DOMINIOS[d] || 'Sin dominio') + ' — ' + x.aciertos + '/' + x.total + ' (' + pct + ' %)' +
        '<div class="bar"><div style="width:' + pct + '%"></div></div></div>';
    });
    html += '<div class="row" style="margin-top:1rem">';
    if (!revision && r.modo === 'examen') {
      html += '<button class="btn" id="b-save">Descargar de nuevo</button><button class="btn" id="b-copy">Copiar resultado</button>';
    }
    if (falladas.length) html += '<button class="btn" id="b-retry">Reintentar falladas (' + falladas.length + ')</button>';
    html += '<button class="btn" id="b-again">Nuevo intento</button><a class="btn" href="../index.html" style="text-decoration:none">Portal</a></div>' +
      '<p class="muted" id="save-msg" style="margin-top:.6rem"></p><div id="copy-box"></div></div>';

    var primero = [], resto = [];
    r.preguntas.forEach(function (p, n) { (!p.acierto || p.marcada ? primero : resto).push({ p: p, n: n }); });
    html += seccionPreguntas('Falladas y marcadas (' + primero.length + ')', primero);
    html += seccionPreguntas('Acertadas (' + resto.length + ')', resto);
    app.innerHTML = html;
    window.scrollTo(0, 0);

    var json = JSON.stringify(r, null, 2);
    var nombre = 'aws-resultado-' + r.fecha.slice(0, 10) + '-' + r.bancoId + '.json';
    function descargar() {
      var a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([json], { type: 'application/json' }));
      a.download = nombre;
      document.body.appendChild(a); a.click(); a.remove();
      document.getElementById('save-msg').innerHTML = 'Guardado en Descargas como <strong>' + esc(nombre) +
        '</strong>. Escribe «listo» en el chat.';
    }
    bind('b-save', descargar);
    // Al enviar un examen el resultado se descarga solo: el estudiante solo escribe «listo».
    if (recienEnviado && r.modo === 'examen') descargar();
    bind('b-copy', function () {
      var mostrar = function () {
        document.getElementById('copy-box').innerHTML = '<textarea readonly id="copy-ta"></textarea>';
        var ta = document.getElementById('copy-ta'); ta.value = json; ta.focus(); ta.select();
        document.getElementById('save-msg').textContent = 'Selecciona el texto y cópialo a mano.';
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(json).then(function () {
          document.getElementById('save-msg').textContent = 'Resultado copiado. Pégalo en el chat.';
        }, mostrar);
      } else mostrar();
    });
    bind('b-retry', function () {
      var ids = falladas.map(function (p) { return p.id; }).join(',');
      location.href = '?banco=' + encodeURIComponent(bancoParam) + '&solo=' + encodeURIComponent(ids);
    });
    bind('b-again', function () {
      location.href = '?banco=' + encodeURIComponent(bancoParam) + (r.solo ? '&solo=' + encodeURIComponent(r.solo.join(',')) : '');
    });
  }

  function seccionPreguntas(titulo, items) {
    if (!items.length) return '';
    var porId = {};
    B.preguntas.forEach(function (q) { porId[q.id] = q; });
    var html = '<details open><summary><h2 style="display:inline">' + esc(titulo) + '</h2></summary>';
    items.forEach(function (it) {
      var p = it.p, q = porId[p.id];
      if (!q) { html += '<div class="card"><p class="muted">La pregunta ' + esc(p.id) + ' ya no está en el banco.</p></div>'; return; }
      var multi = p.correctas.length > 1;
      html += '<div class="card"><div class="q-meta"><span>' + esc(p.id) + ' · Dominio ' + esc(q.dominio) + (q.tarea ? ' · Tarea ' + esc(q.tarea) : '') + '</span><span>' +
        '<span class="badge ' + (p.acierto ? 'ok">Correcta' : 'bad">' + (p.elegidas.length ? 'Fallada' : 'Sin responder')) + '</span>' +
        (p.marcada ? ' <span class="badge mk">⚑ Marcada</span>' : '') + '</span></div>' +
        '<p class="stem">' + esc(q.enunciado) + '</p>' + (multi ? '<p class="choose">(Elija ' + p.correctas.length + '.)</p>' : '');
      q.opciones.forEach(function (o, oi) {
        var sel = p.elegidas.indexOf(oi) >= 0;
        var cls = 'opt static' + (o.correcta ? ' ok' : sel ? ' bad' : '');
        html += '<div class="' + cls + '"><span class="letter">' + (o.correcta ? '✓' : sel ? '✗' : '·') + '</span><span>' + esc(o.texto) +
          (sel ? ' <em class="muted">(tu respuesta)</em>' : '') + (o.porque ? '<span class="why">' + esc(o.porque) + '</span>' : '') + '</span></div>';
      });
      if (q.explicacion) html += '<div class="explain">' + esc(q.explicacion) + '</div>';
      html += '</div>';
    });
    return html + '</details>';
  }

  // ── teclado ─────────────────────────────────────────────────
  document.addEventListener('keydown', function (e) {
    if (!S || e.ctrlKey || e.metaKey || e.altKey || (e.target || {}).tagName === 'TEXTAREA') return;
    if (!app.querySelector('input[name="opt"]')) return;
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'ArrowDown') e.preventDefault();
    var k = e.key.toLowerCase(), idx = LETRAS.toLowerCase().indexOf(k);
    if (idx < 0 && /^[1-8]$/.test(k)) idx = +k - 1;
    var inputs = app.querySelectorAll('input[name="opt"]');
    if (idx >= 0 && idx < inputs.length && !inputs[idx].disabled) {
      inputs[idx].checked = inputs[idx].type === 'radio' ? true : !inputs[idx].checked;
      inputs[idx].dispatchEvent(new Event('change'));
    } else if (e.key === 'ArrowRight' && S.actual < Q.length - 1) pantallaPregunta(S.actual + 1);
    else if (e.key === 'ArrowLeft' && S.actual > 0) pantallaPregunta(S.actual - 1);
  });

  // ── arranque ────────────────────────────────────────────────
  function validar(b) {
    if (!b || !b.id || !Array.isArray(b.preguntas) || !b.preguntas.length) return 'El banco no define window.BANCO con id y preguntas.';
    for (var i = 0; i < b.preguntas.length; i++) {
      var q = b.preguntas[i];
      if (!q.id || !q.enunciado || !Array.isArray(q.opciones) || q.opciones.length < 2) return 'Pregunta ' + (i + 1) + ' mal formada.';
      if (!correctas(q).length) return 'La pregunta ' + q.id + ' no tiene opción correcta.';
    }
    return null;
  }

  if (!bancoParam) { mostrarError('Falta el parámetro «banco» en la dirección.'); return; }
  cargarScript(bancoParam).then(function () {
    B = window.BANCO;
    var err = validar(B);
    if (err) throw new Error(err);
    document.title = B.titulo + ' — Simulador CLF-C02';
    document.getElementById('h-title').textContent = B.titulo;
    if (params.get('modo') === 'estudio' || soloParam) modo = 'estudio';
    if (soloParam) {
      var ids = soloParam.split(',');
      Q = B.preguntas.filter(function (q) { return ids.indexOf(q.id) >= 0; });
      if (!Q.length) throw new Error('Ninguna de las preguntas indicadas está en el banco.');
    } else Q = B.preguntas.slice();

    if (resultadoParam) {
      return cargarScript('../contenido.js').then(function () {
        var lista = (window.CONTENIDO && window.CONTENIDO.resultados) || [];
        var r = lista.filter(function (x) { return x.id === resultadoParam; })[0];
        if (!r) throw new Error('No se encontró el resultado «' + resultadoParam + '» en contenido.js.');
        pantallaResultado(r, true);
      });
    }
    pantallaInicio();
  }).catch(function (e) { mostrarError(e.message); });
})();
