/* Taller interactivo CLF-C02: ejercicios activos antes de la práctica tipo examen.
 * URL: taller.html?taller=<ruta .js relativa a simulador/>
 * El archivo define window.TALLER (formato en CLAUDE.md). Funciona con doble clic (file://) y en GitHub Pages.
 * Tipos de ejercicio: tarjetas · clasificar · emparejar · ordenar · identificar.
 * Íconos: un campo "icono": "ec2" busca simulador/iconos/ec2.svg; si no existe, muestra una ficha con el nombre.
 */
(function () {
  'use strict';

  var app = document.getElementById('app');
  var nav = document.getElementById('nav');
  var ptsEl = document.getElementById('pts');
  var progressEl = document.getElementById('progress');
  var params = new URLSearchParams(location.search);
  var tallerParam = params.get('taller');

  var T = null;      // taller
  var R = null;      // resultados guardados: { hechos: {i: {puntos, total}}, mejor: n }
  var cur = 0;       // ejercicio en pantalla
  var sel = null;    // ficha seleccionada (tocar y luego tocar destino)

  var TIPO = {
    tarjetas: { nombre: 'Tarjetas', icono: '🃏', como: 'Toca la tarjeta para girarla. Sé honesto: «La sabía» solo si la dijiste antes de girar.' },
    clasificar: { nombre: 'Clasifica', icono: '🧺', como: 'Lee cada ficha y elige su caja con los botones de abajo. Para corregir una ficha ya ubicada, tócala.' },
    emparejar: { nombre: 'Une las parejas', icono: '🔗', como: 'Toca un elemento de la izquierda y luego su pareja de la derecha.' },
    ordenar: { nombre: 'Ordena', icono: '🔢', como: 'Usa las flechas (o arrastra) hasta dejar los pasos en orden.' },
    identificar: { nombre: 'Identifica', icono: '🔍', como: 'Mira la imagen y elige la respuesta. Tienes feedback al instante.' }
  };

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
  // Mezcla sin dejar el orden original (si hay más de un elemento).
  function mezclar(n) {
    var a = range(n);
    if (n < 2) return a;
    do { shuffle(a); } while (a.every(function (x, i) { return x === i; }));
    return a;
  }
  function store(fn) { try { return fn(); } catch (e) { return null; } }
  function clave() { return 'aws-taller:' + T.id; }
  function guardar() { store(function () { localStorage.setItem(clave(), JSON.stringify(R)); }); }
  function bind(id, fn) { var el = document.getElementById(id); if (el) el.onclick = fn; }
  function aviso(t) { var el = document.getElementById('aviso'); if (el) el.textContent = t || ''; }
  function carpeta() { return tallerParam.replace(/[^/]*$/, ''); }

  function icono(nombre, grande) {
    if (!nombre) return '';
    var cls = 'ico' + (grande ? ' ico-big' : '');
    return '<img class="' + cls + '" src="iconos/' + encodeURIComponent(nombre) + '.svg" alt="" data-ico="' + esc(nombre) + '">';
  }
  // Si falta el .svg, se reemplaza por una ficha con el nombre del servicio.
  function iconosRespaldo() {
    app.querySelectorAll('img[data-ico]').forEach(function (img) {
      img.onerror = function () {
        var d = document.createElement('span');
        d.className = img.className + ' ico-fb';
        d.textContent = img.getAttribute('data-ico').replace(/-/g, ' ');
        img.replaceWith(d);
      };
      if (img.complete && !img.naturalWidth) img.onerror();
    });
  }

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
    app.innerHTML = '<div class="card error"><h1>No se pudo abrir el taller</h1><p class="muted">' + esc(msg) +
      '</p><p class="muted" style="margin-top:.6rem">Ábrelo desde el <a href="../index.html">portal</a>.</p></div>';
  }

  document.getElementById('theme').addEventListener('click', function () {
    var root = document.documentElement, dark = root.getAttribute('data-theme') === 'dark';
    root.setAttribute('data-theme', dark ? 'light' : 'dark');
    store(function () { localStorage.setItem('aws-theme', dark ? 'light' : 'dark'); });
  });

  // ── puntaje ─────────────────────────────────────────────────
  function totales() {
    var p = 0, t = 0;
    for (var k in R.hechos) { p += R.hechos[k].puntos; t += R.hechos[k].total; }
    return { puntos: p, total: t };
  }
  function pintarPuntos() {
    var x = totales();
    ptsEl.hidden = !x.total;
    ptsEl.textContent = '★ ' + x.puntos + ' / ' + x.total;
    progressEl.style.width = Math.round(Object.keys(R.hechos).length / T.ejercicios.length * 100) + '%';
  }
  function terminar(puntos, total) {
    R.hechos[cur] = { puntos: puntos, total: total };
    guardar();
    pintarPuntos();
  }

  // ── inicio ──────────────────────────────────────────────────
  function pantallaInicio() {
    nav.hidden = true;
    var hechos = Object.keys(R.hechos).length;
    var html = '<div class="card"><p class="kicker">Taller interactivo</p><h1>' + esc(T.titulo) + '</h1>' +
      '<p class="muted">' + T.ejercicios.length + ' ejercicios cortos para <strong>activar</strong> lo que acabas de ver antes de la práctica tipo examen. ' +
      'Aquí equivocarse es parte del juego: hay pistas y explicación al instante.</p></div><div class="card"><h2 style="margin-top:0">Ejercicios</h2>';
    T.ejercicios.forEach(function (e, i) {
      var t = TIPO[e.tipo], h = R.hechos[i];
      html += '<div class="res"><span>' + t.icono + ' ' + (i + 1) + '. ' + esc(e.titulo || t.nombre) + '</span><span class="muted">' +
        (h ? '✓ ' + h.puntos + '/' + h.total : t.nombre) + '</span></div>';
    });
    html += '<div class="row" style="margin-top:1rem"><button class="btn primary" id="b-go">' +
      (hechos && hechos < T.ejercicios.length ? 'Continuar' : 'Empezar') + '</button>' +
      (hechos ? '<button class="btn" id="b-reset">Empezar de cero</button>' : '') + '</div></div>';
    app.innerHTML = html;
    bind('b-go', function () {
      var primero = 0;
      while (R.hechos[primero] && primero < T.ejercicios.length - 1) primero++;
      if (hechos === T.ejercicios.length) { R.hechos = {}; guardar(); primero = 0; }
      ejercicio(primero);
    });
    bind('b-reset', function () { R.hechos = {}; guardar(); pintarPuntos(); ejercicio(0); });
  }

  function cabecera(e) {
    var t = TIPO[e.tipo];
    return '<p class="kicker">' + t.icono + ' Ejercicio ' + (cur + 1) + ' de ' + T.ejercicios.length + ' · ' + t.nombre + '</p>' +
      '<h1>' + esc(e.titulo || t.nombre) + '</h1><p class="muted">' + esc(e.instruccion || t.como) + '</p>';
  }

  function ejercicio(i) {
    cur = i; sel = null;
    var e = T.ejercicios[i];
    window.scrollTo(0, 0);
    ({ tarjetas: tarjetas, clasificar: clasificar, emparejar: emparejar, ordenar: ordenar, identificar: identificar })[e.tipo](e);
    iconosRespaldo();
  }

  function navegar(listo, comprobar) {
    nav.hidden = false;
    var ultimo = cur === T.ejercicios.length - 1;
    nav.innerHTML = '<div class="row"><button class="btn" id="b-prev"' + (cur === 0 ? ' disabled' : '') + '>← Anterior</button><span class="spacer"></span>' +
      (comprobar && !listo ? '<button class="btn primary" id="b-check">Comprobar</button>' : '') +
      '<button class="btn' + (listo ? ' primary' : '') + '" id="b-next">' + (ultimo ? 'Ver resultado' : 'Siguiente →') + '</button></div>';
    bind('b-prev', function () { ejercicio(cur - 1); });
    bind('b-next', function () {
      if (!listo && !confirm('Aún no terminas este ejercicio. ¿Pasar al siguiente igual? (no suma puntos)')) return;
      if (ultimo) pantallaFinal(); else ejercicio(cur + 1);
    });
    if (comprobar) bind('b-check', comprobar);
  }

  // ── tarjetas ────────────────────────────────────────────────
  function tarjetas(e) {
    var cola = shuffle(range(e.tarjetas.length)), sabidas = 0, vistas = {};
    function pintar() {
      if (!cola.length) {
        if (!R.hechos[cur]) terminar(sabidas, e.tarjetas.length);
        app.innerHTML = '<div class="card">' + cabecera(e) + '<div class="explain">🎉 Repasaste las ' + e.tarjetas.length +
          ' tarjetas. Supiste <strong>' + sabidas + '</strong> al primer intento.</div></div>';
        navegar(true);
        return;
      }
      var k = cola[0], c = e.tarjetas[k];
      app.innerHTML = '<div class="card">' + cabecera(e) +
        '<p class="muted" style="margin-top:.4rem">Quedan ' + cola.length + ' · sabidas al primer intento: ' + sabidas + '</p>' +
        '<div class="flip" id="flip"><div class="flip-inner" role="button" tabindex="0" aria-label="Girar tarjeta">' +
        '<div class="face front">' + icono(c.icono, true) + '<span>' + esc(c.frente) + '</span><small>toca para girar</small></div>' +
        '<div class="face back-face">' + esc(c.reverso) + '</div></div></div>' +
        '<div class="row" id="rate" style="visibility:hidden"><button class="btn" id="b-no">🔁 Repasar otra vez</button>' +
        '<button class="btn primary" id="b-si">✓ La sabía</button></div></div>';
      var flip = document.getElementById('flip'), inner = flip.firstChild;
      function girar() { flip.classList.toggle('on'); document.getElementById('rate').style.visibility = 'visible'; }
      inner.onclick = girar;
      inner.onkeydown = function (ev) { if (ev.key === ' ' || ev.key === 'Enter') { ev.preventDefault(); girar(); } };
      bind('b-si', function () { if (!vistas[k]) sabidas++; cola.shift(); pintar(); });
      bind('b-no', function () { vistas[k] = true; cola.push(cola.shift()); pintar(); });
      iconosRespaldo();
      navegar(false);
    }
    pintar();
  }

  // ── clasificar ──────────────────────────────────────────────
  function clasificar(e) {
    var orden = shuffle(range(e.items.length)), lugar = {}, revisado = false, intentos = 0, primeros = null;
    function ficha(k, esActual) {
      var it = e.items[k], est = revisado && lugar[k] != null ? (lugar[k] === it.grupo ? ' ok' : ' bad') : '';
      return '<button class="chip' + est + (esActual ? ' sel' : '') + '" draggable="true" data-k="' + k + '"' + (esActual ? ' data-actual' : '') + '>' + icono(it.icono) +
        '<span class="chip-body">' + esc(it.texto) + (revisado && est === ' bad' && it.porque ? '<span class="why">' + esc(it.porque) + '</span>' : '') +
        (revisado && est === ' ok' && it.porque ? '<span class="why">✓ ' + esc(it.porque) + '</span>' : '') + '</span></button>';
    }
    // Una ficha a la vez: la ficha actual (o la que se está moviendo) arriba, con un botón por caja justo debajo.
    function actual() {
      if (sel != null) return sel;
      for (var i = 0; i < orden.length; i++) if (lugar[orden[i]] == null) return orden[i];
      return null;
    }
    function nombreGrupo(g) { return typeof g === 'string' ? g : g.nombre; }
    function pintar() {
      var k = actual(), pendientes = e.items.filter(function (it, x) { return lugar[x] == null; }).length;
      var html = '<div class="card">' + cabecera(e) + '<div class="tray" id="tray">';
      if (k != null) {
        html += '<p class="muted">' + (lugar[k] != null ? 'Moviendo esta ficha (tócala otra vez para soltarla):' :
          'Ficha ' + (e.items.length - pendientes + 1) + ' de ' + e.items.length + ':') + '</p>' + ficha(k, true) +
          '<div class="places">';
        e.grupos.forEach(function (g, gi) { html += '<button class="btn place" data-place="' + gi + '">' + esc(nombreGrupo(g)) + '</button>'; });
        html += '</div>';
      } else if (!revisado) {
        html += '<p class="muted">✓ Ubicaste todas las fichas. Pulsa <strong>Comprobar</strong> (o toca una ficha para moverla).</p>';
      }
      html += '</div><div class="buckets">';
      e.grupos.forEach(function (g, gi) {
        var desc = typeof g === 'string' ? '' : g.desc, n = 0;
        orden.forEach(function (x) { if (lugar[x] === gi) n++; });
        html += '<div class="bucket" data-g="' + gi + '"><div class="bucket-head">' + (typeof g === 'string' ? '' : icono(g.icono)) +
          '<span>' + esc(nombreGrupo(g)) + '</span><span class="hint">' + n + '</span></div>' + (desc ? '<p class="bucket-desc">' + esc(desc) + '</p>' : '');
        orden.forEach(function (x) { if (lugar[x] === gi && x !== sel) html += ficha(x, false); });
        html += '</div>';
      });
      html += '</div><p class="aviso" id="aviso"></p>' + (revisado && primeros != null ? resumen() : '') + '</div>';
      app.innerHTML = html;
      iconosRespaldo();
      enlazar();
      var listo = revisado && todoBien();
      navegar(listo || (revisado && intentos >= 3), listo ? null : comprobar);
    }
    function todoBien() { return e.items.every(function (it, k) { return lugar[k] === it.grupo; }); }
    function resumen() {
      return '<div class="explain">' + (todoBien() ? '🎉 ¡Todo en su lugar! ' : '') + 'Al primer intento acertaste <strong>' + primeros + ' de ' + e.items.length + '</strong>.' +
        (todoBien() ? (e.explicacion ? ' ' + esc(e.explicacion) : '') : ' Las fichas en rojo están en la caja equivocada: lee la pista, tócala y elige la caja correcta.') + '</div>';
    }
    function mover(k, g) {
      if (revisado && lugar[k] != null && lugar[k] === e.items[k].grupo) return;  // las correctas quedan fijas
      lugar[k] = g; sel = null; pintar();
    }
    function enlazar() {
      app.querySelectorAll('.chip').forEach(function (b) {
        var k = +b.getAttribute('data-k');
        b.onclick = function () {
          if (b.hasAttribute('data-actual')) { if (sel === k) { sel = null; pintar(); } return; }
          if (revisado && lugar[k] === e.items[k].grupo) return;  // las correctas quedan fijas
          sel = k; pintar(); window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        b.ondragstart = function (ev) { ev.dataTransfer.setData('text/plain', String(k)); b.classList.add('dragging'); };
        b.ondragend = function () { b.classList.remove('dragging'); };
      });
      app.querySelectorAll('[data-place]').forEach(function (b) {
        b.onclick = function () { var k = actual(); if (k != null) mover(k, +b.getAttribute('data-place')); };
      });
      app.querySelectorAll('.bucket').forEach(function (bk) {
        var g = +bk.getAttribute('data-g');
        bk.ondragover = function (ev) { ev.preventDefault(); bk.classList.add('over'); };
        bk.ondragleave = function () { bk.classList.remove('over'); };
        bk.ondrop = function (ev) { ev.preventDefault(); mover(+ev.dataTransfer.getData('text/plain'), g); };
      });
    }
    function comprobar() {
      var faltan = e.items.filter(function (it, k) { return lugar[k] == null; }).length;
      if (faltan) { aviso('Faltan ' + faltan + ' fichas por ubicar.'); return; }
      revisado = true; intentos++;
      if (primeros == null) {
        primeros = e.items.filter(function (it, k) { return lugar[k] === it.grupo; }).length;
        terminar(primeros, e.items.length);
      }
      pintar();
    }
    pintar();
  }

  // ── emparejar ───────────────────────────────────────────────
  function emparejar(e) {
    var n = e.pares.length, der = mezclar(n), par = {}, revisado = false, primeros = null, selIzq = null;
    // par[i] = índice de la derecha unido a la izquierda i
    function color(i) { return 'var(--g' + (i % 6) + ')'; }
    function pintar() {
      var usado = {};
      for (var a in par) usado[par[a]] = +a;
      var html = '<div class="card">' + cabecera(e) + '<div class="match" style="margin-top:.8rem"><div class="col">';
      for (var i = 0; i < n; i++) {
        var p = e.pares[i], est = revisado && par[i] != null ? (par[i] === i ? ' ok' : ' bad') : '';
        html += '<button class="chip' + est + (selIzq === i ? ' sel' : '') + '" data-i="' + i + '">' +
          '<span class="tag' + (par[i] == null ? ' empty' : '') + '" style="' + (par[i] != null ? 'background:' + color(i) : '') + '">' + (i + 1) + '</span>' +
          icono(p.iconoIzq) + '<span class="chip-body">' + esc(p.izq) +
          (revisado && est && p.porque ? '<span class="why">' + (est === ' ok' ? '✓ ' : '') + esc(est === ' ok' ? p.porque : 'No es esa pareja. Pista: ' + (p.pista || p.porque)) + '</span>' : '') +
          '</span></button>';
      }
      html += '</div><div class="col">';
      der.forEach(function (j) {
        var p = e.pares[j], a = usado[j];
        html += '<button class="chip" data-j="' + j + '"' + (a != null && revisado && par[a] === a ? ' disabled' : '') + '>' +
          '<span class="tag' + (a == null ? ' empty' : '') + '" style="' + (a != null ? 'background:' + color(a) : '') + '">' + (a != null ? a + 1 : '') + '</span>' +
          icono(p.iconoDer) + '<span class="chip-body">' + esc(p.der) + '</span></button>';
      });
      html += '</div></div><p class="aviso" id="aviso"></p>';
      if (revisado) {
        var bien = todoBien();
        html += '<div class="explain">' + (bien ? '🎉 ¡Todas las parejas correctas! ' : '') + 'Al primer intento acertaste <strong>' + primeros + ' de ' + n + '</strong>.' +
          (bien ? (e.explicacion ? ' ' + esc(e.explicacion) : '') : ' Toca una pareja en rojo para deshacerla y vuelve a unir.') + '</div>';
      }
      html += '</div>';
      app.innerHTML = html;
      iconosRespaldo();
      app.querySelectorAll('[data-i]').forEach(function (b) {
        var i = +b.getAttribute('data-i');
        b.onclick = function () {
          if (revisado && par[i] === i) return;
          if (par[i] != null) delete par[i];
          selIzq = i;
          pintar();
        };
      });
      app.querySelectorAll('[data-j]').forEach(function (b) {
        var j = +b.getAttribute('data-j');
        b.onclick = function () {
          if (selIzq == null) { aviso('Primero toca un elemento de la izquierda.'); return; }
          for (var a in par) if (par[a] === j) delete par[a];
          par[selIzq] = j; selIzq = null;
          for (var k = 0; k < n; k++) if (par[k] == null) { selIzq = k; break; }
          pintar();
        };
      });
      navegar(revisado && todoBien(), revisado && todoBien() ? null : comprobar);
    }
    function todoBien() { for (var i = 0; i < n; i++) if (par[i] !== i) return false; return true; }
    function comprobar() {
      if (Object.keys(par).length < n) { aviso('Faltan ' + (n - Object.keys(par).length) + ' parejas.'); return; }
      revisado = true;
      if (primeros == null) {
        primeros = 0; for (var i = 0; i < n; i++) if (par[i] === i) primeros++;
        terminar(primeros, n);
      }
      for (var k = 0; k < n; k++) if (par[k] !== k) { selIzq = null; break; }
      pintar();
    }
    selIzq = 0;
    pintar();
  }

  // ── ordenar ─────────────────────────────────────────────────
  function ordenar(e) {
    var n = e.pasos.length, pos = mezclar(n), revisado = false, primeros = null, arrastrado = null;
    function pintar() {
      var html = '<div class="card">' + cabecera(e) + '<div class="order" style="margin-top:.8rem">';
      pos.forEach(function (k, i) {
        var est = revisado ? (k === i ? ' ok' : ' bad') : '';
        html += '<div class="chip' + est + '" draggable="true" data-p="' + i + '"><span class="num">' + (i + 1) + '</span>' +
          '<span class="chip-body">' + esc(e.pasos[k]) + '</span>' +
          '<button class="mv" data-up="' + i + '" aria-label="Subir"' + (i === 0 ? ' disabled' : '') + '>↑</button>' +
          '<button class="mv" data-dn="' + i + '" aria-label="Bajar"' + (i === n - 1 ? ' disabled' : '') + '>↓</button></div>';
      });
      html += '</div><p class="aviso" id="aviso"></p>';
      if (revisado) {
        var bien = todoBien();
        html += '<div class="explain">' + (bien ? '🎉 ¡Orden correcto! ' : '') + 'Al primer intento tenías <strong>' + primeros + ' de ' + n + '</strong> en su lugar.' +
          (bien ? (e.explicacion ? ' ' + esc(e.explicacion) : '') : ' Los pasos en rojo no están en su posición: muévelos y comprueba otra vez.') + '</div>';
      }
      html += '</div>';
      app.innerHTML = html;
      function cambiar(a, b) { var t = pos[a]; pos[a] = pos[b]; pos[b] = t; revisado = false; pintar(); }
      app.querySelectorAll('[data-up]').forEach(function (b) { b.onclick = function () { var i = +b.getAttribute('data-up'); cambiar(i, i - 1); }; });
      app.querySelectorAll('[data-dn]').forEach(function (b) { b.onclick = function () { var i = +b.getAttribute('data-dn'); cambiar(i, i + 1); }; });
      app.querySelectorAll('[data-p]').forEach(function (d) {
        var i = +d.getAttribute('data-p');
        d.ondragstart = function () { arrastrado = i; d.classList.add('dragging'); };
        d.ondragend = function () { d.classList.remove('dragging'); };
        d.ondragover = function (ev) { ev.preventDefault(); };
        d.ondrop = function (ev) {
          ev.preventDefault();
          if (arrastrado == null || arrastrado === i) return;
          var k = pos.splice(arrastrado, 1)[0]; pos.splice(i, 0, k); arrastrado = null; revisado = false; pintar();
        };
      });
      navegar(revisado && todoBien(), revisado && todoBien() ? null : comprobar);
    }
    function todoBien() { return pos.every(function (k, i) { return k === i; }); }
    function comprobar() {
      revisado = true;
      if (primeros == null) {
        primeros = pos.filter(function (k, i) { return k === i; }).length;
        terminar(primeros, n);
      }
      pintar();
    }
    pintar();
  }

  // ── identificar ─────────────────────────────────────────────
  function identificar(e) {
    var rondas = shuffle(range(e.rondas.length)), r = 0, aciertos = 0, respondida = null, opc = null;
    function pintar() {
      if (r >= rondas.length) {
        if (!R.hechos[cur]) terminar(aciertos, e.rondas.length);
        app.innerHTML = '<div class="card">' + cabecera(e) + '<div class="explain">🎉 Acertaste <strong>' + aciertos + ' de ' + e.rondas.length +
          '</strong>.' + (e.explicacion ? ' ' + esc(e.explicacion) : '') + '</div></div>';
        navegar(true);
        return;
      }
      var q = e.rondas[rondas[r]];
      if (!opc) opc = shuffle(range(q.opciones.length));
      var html = '<div class="card">' + cabecera(e) + '<p class="muted" style="margin-top:.4rem">Ronda ' + (r + 1) + ' de ' + rondas.length + ' · aciertos: ' + aciertos + '</p>' +
        '<div class="visual">' + (q.icono ? icono(q.icono, true) : '') + (q.visual ? '<div>' + esc(q.visual) + '</div>' : '') +
        (q.pie ? '<small>' + esc(q.pie) + '</small>' : '') + '</div>' +
        (q.pregunta ? '<p style="font-weight:600;margin-bottom:.6rem">' + esc(q.pregunta) + '</p>' : '') + '<div class="opts">';
      opc.forEach(function (oi) {
        var o = q.opciones[oi], est = '';
        if (respondida != null) est = oi === q.correcta ? ' ok' : oi === respondida ? ' bad' : '';
        html += '<button class="chip' + est + '" data-o="' + oi + '"' + (respondida != null ? ' disabled' : '') + '>' +
          icono(typeof o === 'string' ? null : o.icono) + '<span class="chip-body">' + esc(typeof o === 'string' ? o : o.texto) + '</span></button>';
      });
      html += '</div>';
      if (respondida != null) {
        html += '<div class="explain">' + (respondida === q.correcta ? '✓ ¡Correcto! ' : '✗ Era la marcada en verde. ') + esc(q.porque || '') + '</div>' +
          '<div class="row" style="margin-top:.8rem"><button class="btn primary" id="b-sig">' + (r === rondas.length - 1 ? 'Terminar' : 'Siguiente ronda →') + '</button></div>';
      }
      html += '</div>';
      app.innerHTML = html;
      iconosRespaldo();
      app.querySelectorAll('[data-o]').forEach(function (b) {
        b.onclick = function () {
          respondida = +b.getAttribute('data-o');
          if (respondida === q.correcta) aciertos++;
          pintar();
        };
      });
      bind('b-sig', function () { r++; respondida = null; opc = null; pintar(); });
      navegar(false);
    }
    pintar();
  }

  // ── final ───────────────────────────────────────────────────
  function pantallaFinal() {
    var x = totales(), pct = x.total ? Math.round(x.puntos / x.total * 100) : 0;
    if (R.mejor == null || pct > R.mejor) { R.mejor = pct; guardar(); }
    var estrellas = pct >= 90 ? 3 : pct >= 70 ? 2 : pct >= 40 ? 1 : 0;
    var html = '<div class="card"><p class="kicker">Taller terminado</p><h1>' + esc(T.titulo) + '</h1>' +
      '<p class="score">' + pct + ' %</p><p class="stars" aria-label="' + estrellas + ' de 3 estrellas">' +
      '★★★'.slice(0, estrellas) + '<span style="opacity:.25">' + '★★★'.slice(estrellas) + '</span></p>' +
      '<p class="muted">' + x.puntos + ' de ' + x.total + ' al primer intento · tu mejor marca: ' + R.mejor + ' %. ' +
      'El taller no cuenta para el plan: sirve para fijar ideas. Lo que cuenta es la práctica tipo examen.</p>';
    T.ejercicios.forEach(function (e, i) {
      var h = R.hechos[i], t = TIPO[e.tipo];
      html += '<div class="res"><span>' + t.icono + ' ' + esc(e.titulo || t.nombre) + '</span><span>' + (h ? h.puntos + '/' + h.total : '<span class="muted">saltado</span>') + '</span></div>';
    });
    html += '<div class="row" style="margin-top:1rem">';
    if (T.siguiente) {
      html += '<a class="btn primary" href="index.html?banco=' + encodeURIComponent(carpeta() + T.siguiente) + '">Ir a la práctica tipo examen →</a>';
    }
    html += '<button class="btn" id="b-again">Repetir taller</button><a class="btn" href="../index.html">Portal</a></div></div>';
    app.innerHTML = html;
    nav.hidden = true;
    progressEl.style.width = '100%';
    bind('b-again', function () { R.hechos = {}; guardar(); pintarPuntos(); ejercicio(0); });
  }

  // ── arranque ────────────────────────────────────────────────
  function validar(t) {
    if (!t || !t.id || !Array.isArray(t.ejercicios) || !t.ejercicios.length) return 'El archivo no define window.TALLER con id y ejercicios.';
    for (var i = 0; i < t.ejercicios.length; i++) if (!TIPO[t.ejercicios[i].tipo]) return 'Ejercicio ' + (i + 1) + ': tipo desconocido «' + t.ejercicios[i].tipo + '».';
    return null;
  }

  if (!tallerParam) { mostrarError('Falta el parámetro «taller» en la dirección.'); return; }
  cargarScript(tallerParam).then(function () {
    T = window.TALLER;
    var err = validar(T);
    if (err) throw new Error(err);
    document.title = T.titulo + ' — Taller CLF-C02';
    document.getElementById('h-title').textContent = T.titulo;
    R = store(function () { return JSON.parse(localStorage.getItem(clave())); }) || { hechos: {}, mejor: null };
    if (!R.hechos) R.hechos = {};
    pintarPuntos();
    pantallaInicio();
  }).catch(function (e) { mostrarError(e.message); });
})();
