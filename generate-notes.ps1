$template = @'
<!DOCTYPE html>
<html lang="es" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>__TITLE__ — AWS Cloud Practitioner</title>
  <script src="https://cdn.jsdelivr.net/npm/marked@9/marked.min.js"></script>
  <style>
    :root {
      --navy: #232f3e;
      --orange: #ff9900;
      --page-bg: #f4f6f8;
      --card-bg: #ffffff;
      --text: #16191f;
      --text-muted: #555;
      --h2-bg: #eef1f5;
      --quote-bg: #fff9ee;
      --code-bg: #e4e8ef;
      --row-even: #f5f7fa;
      --row-border: #e4e8ee;
      --btn-notes-bg: #eef1f5;
      --btn-notes-border: #d5dce8;
      --btn-notes-hover: #dde2ea;
    }
    [data-theme="dark"] {
      --page-bg: #151c25;
      --card-bg: #1e2838;
      --text: #e8eaed;
      --text-muted: #9aabb8;
      --h2-bg: #1e2838;
      --quote-bg: #1e2830;
      --code-bg: #283848;
      --row-even: #253545;
      --row-border: #2a3a4a;
      --btn-notes-bg: #283848;
      --btn-notes-border: #364858;
      --btn-notes-hover: #324058;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: Arial, sans-serif; background: var(--page-bg); color: var(--text); transition: background-color 0.25s, color 0.25s; }
    header {
      position: sticky; top: 0; z-index: 100;
      background: var(--navy); padding: 0.7rem 1.2rem;
      display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;
    }
    .btn-back { color: #aab7b8; text-decoration: none; font-size: 0.85rem; white-space: nowrap; }
    .btn-back:hover { color: var(--orange); }
    .header-title { flex: 1; color: white; font-size: 0.9rem; font-weight: 600; min-width: 120px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .btn-eval { background: var(--orange); color: #111; padding: 0.35rem 0.85rem; border-radius: 5px; text-decoration: none; font-size: 0.82rem; font-weight: 700; white-space: nowrap; }
    .btn-eval:hover { background: #e68a00; }
    .btn-no-eval { color: #888; font-size: 0.8rem; white-space: nowrap; font-style: italic; }
    main { max-width: 780px; margin: 0 auto; padding: 1.5rem 1rem 5rem; }
    #md-content h1 { font-size: 1.4rem; color: var(--navy); margin: 1.5rem 0 0.8rem; padding-bottom: 0.4rem; border-bottom: 3px solid var(--orange); }
    [data-theme="dark"] #md-content h1 { color: #c8d8ff; }
    #md-content h2 { font-size: 1.1rem; color: var(--navy); background: var(--h2-bg); padding: 0.5rem 0.85rem; border-radius: 5px; margin: 1.8rem 0 0.7rem; border-left: 4px solid var(--orange); }
    [data-theme="dark"] #md-content h2 { color: #c8d8ff; border-color: var(--orange); }
    #md-content h3 { font-size: 1rem; color: var(--text); margin: 1.2rem 0 0.5rem; font-weight: 700; }
    #md-content h4 { font-size: 0.95rem; color: var(--text-muted); margin: 1rem 0 0.4rem; font-weight: 700; }
    #md-content p { line-height: 1.75; margin-bottom: 0.8rem; }
    #md-content strong { color: var(--navy); }
    [data-theme="dark"] #md-content strong { color: #c8d8ff; }
    #md-content ul, #md-content ol { margin: 0.4rem 0 0.8rem 1.5rem; }
    #md-content li { line-height: 1.75; margin-bottom: 0.25rem; }
    #md-content hr { border: none; border-top: 1px solid var(--row-border); margin: 1.5rem 0; }
    #md-content blockquote { border-left: 4px solid var(--orange); background: var(--quote-bg); padding: 0.8rem 1rem; margin: 1rem 0; border-radius: 0 6px 6px 0; }
    #md-content blockquote p { margin-bottom: 0; }
    #md-content code { background: var(--code-bg); padding: 0.15rem 0.4rem; border-radius: 3px; font-size: 0.87em; }
    #md-content pre { background: #1e2430; color: #e0e6f0; padding: 1rem; border-radius: 6px; overflow-x: auto; margin: 1rem 0; }
    #md-content pre code { background: none; color: inherit; padding: 0; font-size: 0.9em; }
    .table-wrap { overflow-x: auto; margin: 1rem 0; border-radius: 6px; box-shadow: 0 1px 5px rgba(0,0,0,0.09); }
    #md-content table { width: 100%; border-collapse: collapse; font-size: 0.88rem; }
    #md-content th { background: var(--navy); color: white; padding: 0.5rem 0.75rem; text-align: left; font-weight: 600; }
    #md-content td { padding: 0.45rem 0.75rem; border-bottom: 1px solid var(--row-border); vertical-align: top; }
    #md-content tr:nth-child(even) td { background: var(--row-even); }
    .theme-toggle {
      position: fixed; bottom: 1.5rem; right: 1.5rem;
      width: 46px; height: 46px; border-radius: 50%;
      background: var(--orange); color: #111; border: none; cursor: pointer;
      font-size: 1.25rem; box-shadow: 0 3px 12px rgba(0,0,0,0.3);
      z-index: 1000; transition: transform 0.2s, box-shadow 0.2s;
      display: flex; align-items: center; justify-content: center; line-height: 1;
    }
    .theme-toggle:hover { transform: scale(1.1); box-shadow: 0 4px 16px rgba(0,0,0,0.4); }
    @media (max-width: 600px) {
      header { padding: 0.6rem 0.9rem; gap: 0.5rem; }
      .header-title { font-size: 0.8rem; }
      main { padding: 1rem 0.75rem 5rem; }
      #md-content h1 { font-size: 1.15rem; }
      #md-content h2 { font-size: 0.98rem; padding: 0.4rem 0.6rem; }
      #md-content table { font-size: 0.78rem; }
      #md-content th, #md-content td { padding: 0.3rem 0.45rem; }
      .theme-toggle { width: 42px; height: 42px; font-size: 1.1rem; bottom: 1rem; right: 1rem; }
    }
  </style>
</head>
<body>
  <header>
    <a href="../../index.html" class="btn-back">← Portal</a>
    <span class="header-title">__TITLE__</span>
    __QUIZ_BTN__
  </header>
  <main><div id="md-content"></div></main>
  <button id="theme-toggle" class="theme-toggle" title="Cambiar tema">🌙</button>
  <script>
    marked.setOptions({ breaks: true, gfm: true });
    const md = `__MD_CONTENT__`;
    const html = marked.parse(md);
    document.getElementById('md-content').innerHTML =
      html.replace(/<table>/g, '<div class="table-wrap"><table>')
          .replace(/<\/table>/g, '</table></div>');
    (function() {
      var btn = document.getElementById('theme-toggle');
      var root = document.documentElement;
      if (localStorage.getItem('aws-theme') === 'dark') {
        root.setAttribute('data-theme', 'dark');
        btn.textContent = '☀️';
      }
      btn.addEventListener('click', function() {
        var isDark = root.getAttribute('data-theme') === 'dark';
        if (isDark) {
          root.setAttribute('data-theme', 'light');
          btn.textContent = '🌙';
          localStorage.setItem('aws-theme', 'light');
        } else {
          root.setAttribute('data-theme', 'dark');
          btn.textContent = '☀️';
          localStorage.setItem('aws-theme', 'dark');
        }
      });
    })();
  </script>
</body>
</html>
'@

function New-NoteHtml($mdFile, $outFile, $title, $quizEncoded) {
    $content = [System.IO.File]::ReadAllText($mdFile, [System.Text.Encoding]::UTF8)
    $content = [System.Text.RegularExpressions.Regex]::Replace($content, '!\[\[[^\]]*\]\](\r?\n)?', '')
    $content = $content.Replace('\', '\\')
    $content = $content.Replace('`', '\`')
    $content = $content.Replace('${', '\${')
    if ($quizEncoded) {
        $qBtn = '<a href="' + $quizEncoded + '" class="btn-eval">Evaluacion</a>'
    } else {
        $qBtn = '<span class="btn-no-eval">Sin evaluacion aun</span>'
    }
    $html = $template.Replace('__TITLE__', $title).Replace('__QUIZ_BTN__', $qBtn).Replace('__MD_CONTENT__', $content)
    [System.IO.File]::WriteAllText($outFile, $html, [System.Text.UTF8Encoding]::new($false))
    Write-Host "OK  $([System.IO.Path]::GetFileName($outFile))"
}

$m1 = "C:\workspace\LEARNING\NOTES\aws-certifications-notes\cloud-practitioner\modulo-01-introduction-to-the-cloud"
$m2 = "C:\workspace\LEARNING\NOTES\aws-certifications-notes\cloud-practitioner\modulo-02-computacion-en-la-nube"

New-NoteHtml "$m1\Lección 1- Introducción a AWS Cloud Practitioner Essentials.md"                 "$m1\leccion-01-notas.html" "Leccion 1 - Introduccion a AWS"           "Lecci%C3%B3n%201%20-%20EVALUACION.html"
New-NoteHtml "$m1\Lección 2 - Qué es la computación en la nube.md"                               "$m1\leccion-02-notas.html" "Leccion 2 - Computacion en la Nube"       "Lecci%C3%B3n%202%20-%20EVALUACION.html"
New-NoteHtml "$m1\Lección 3 - Beneficios de la nube de AWS.md"                                   "$m1\leccion-03-notas.html" "Leccion 3 - Beneficios de la Nube"        ""
New-NoteHtml "$m1\Lección 4 - Introducción a la infraestructura global de AWS.md"                "$m1\leccion-04-notas.html" "Leccion 4 - Infraestructura Global"       "Lecci%C3%B3n%204%20-%20EVALUACION.html"
New-NoteHtml "$m1\Lección 5 - Modelo de responsabilidad compartida de AWS.md"                    "$m1\leccion-05-notas.html" "Leccion 5 - Responsabilidad Compartida"   "Lecci%C3%B3n%205%20-%20EVALUACION.html"
New-NoteHtml "$m1\Lección 6 - Aplicación de Conceptos de la Nube a Casos de Uso de la Vida Real.md" "$m1\leccion-06-notas.html" "Leccion 6 - Casos de Uso Reales"      "Lecci%C3%B3n%206%20-%20EVALUACION.html"

New-NoteHtml "$m2\Lección 1 - Introducción a Amazon EC2.md"                                      "$m2\leccion-01-notas.html" "Leccion 1 - Introduccion a Amazon EC2"    "Lecci%C3%B3n%201%20-%20EVALUACION.html"
New-NoteHtml "$m2\Lección 2 - Tipos de instancias de Amazon EC2.md"                              "$m2\leccion-02-notas.html" "Leccion 2 - Tipos de Instancias EC2"      "Lecci%C3%B3n%202%20-%20EVALUACION.html"
New-NoteHtml "$m2\Lección 3 - Como aprovisionar recursos de AWS.md"                              "$m2\leccion-03-notas.html" "Leccion 3 - Aprovisionamiento de Recursos" "Lecci%C3%B3n%203%20-%20EVALUACION.html"
New-NoteHtml "$m2\Lección 4 - Demostración, Lanzar una Instancia de EC2.md"                     "$m2\leccion-04-notas.html" "Leccion 4 - Lanzar una Instancia EC2"     "Lecci%C3%B3n%204%20-%20EVALUACION.html"
New-NoteHtml "$m2\Leccion 5 - Precios de Amazon EC2.md"                                          "$m2\leccion-05-notas.html" "Leccion 5 - Precios de Amazon EC2"        "Lecci%C3%B3n%205%20-%20EVALUACION.html"
New-NoteHtml "$m2\Lección 6 - Escalado de Amazon EC2 - PARTE 1.md"                              "$m2\leccion-06-p1-notas.html" "Leccion 6 - Escalado EC2 (Parte 1)"     "Lecci%C3%B3n%206%20-%20EVALUACION%20PARTE%201.html"
New-NoteHtml "$m2\Lección 6 - Escalado de Amazon EC2 - PARTE 2.md"                              "$m2\leccion-06-p2-notas.html" "Leccion 6 - Escalado EC2 (Parte 2)"     "Lecci%C3%B3n%206%20-%20EVALUACION%20PARTE%202.html"
New-NoteHtml "$m2\Lección 7 - Dirección de tráfico con Elastic Load Balancing.md"               "$m2\leccion-07-notas.html" "Leccion 7 - Elastic Load Balancing"       "Lecci%C3%B3n%207%20-%20EVALUACION.html"
New-NoteHtml "$m2\Lección 8 - Mensajeria y Colas.md"                                             "$m2\leccion-08-notas.html" "Leccion 8 - Mensajeria y Colas"           "Lecci%C3%B3n%208%20-%20EVALUACION.html"

$m3 = "C:\workspace\LEARNING\NOTES\aws-certifications-notes\cloud-practitioner\modulo-03-servicios-de-computacion"

New-NoteHtml "$m3\Lección 1 - Introducción a la computación sin servidor.md"                     "$m3\leccion-01-notas.html" "Leccion 1 - Computacion Serverless"       "Lecci%C3%B3n%201%20-%20EVALUACION.html"
New-NoteHtml "$m3\Lección 2 - AWS Lambda - Parte 1.md"                                           "$m3\leccion-02-p1-notas.html" "Leccion 2 - AWS Lambda (Parte 1)"      "Lecci%C3%B3n%202%20-%20EVALUACION%20PARTE%201.html"
New-NoteHtml "$m3\Lección 2 - AWS Lambda - Parte 2.md"                                           "$m3\leccion-02-p2-notas.html" "Leccion 2 - AWS Lambda (Parte 2)"      "Lecci%C3%B3n%202%20-%20EVALUACION%20PARTE%202.html"
New-NoteHtml "$m3\Lección 3 - Contenedores y orquestación en AWS.md"                             "$m3\leccion-03-notas.html" "Leccion 3 - Contenedores y Orquestacion" "Lecci%C3%B3n%203%20-%20EVALUACION.html"
New-NoteHtml "$m3\Lección 4 - Servicios de computación adicionales.md"                           "$m3\leccion-04-notas.html" "Leccion 4 - Servicios de Computacion"    "Lecci%C3%B3n%204%20-%20EVALUACION.html"

$m4 = "C:\workspace\LEARNING\NOTES\aws-certifications-notes\cloud-practitioner\modulo-04-hacia-la-globalizacion"

New-NoteHtml "$m4\Lección 1 - Introducción a la globalización.md"                        "$m4\leccion-01-notas.html" "Leccion 1 - Introduccion a la Globalizacion"      "Lecci%C3%B3n%201%20-%20EVALUACION.html"
New-NoteHtml "$m4\Lección 2 - Elección de las regiones de AWS.md"                        "$m4\leccion-02-notas.html" "Leccion 2 - Eleccion de Regiones de AWS"          "Lecci%C3%B3n%202%20-%20EVALUACION.html"
New-NoteHtml "$m4\Lección 3 - Profundizar en la infraestructura global de AWS.md"        "$m4\leccion-03-notas.html" "Leccion 3 - Infraestructura Global de AWS"         "Lecci%C3%B3n%203%20-%20EVALUACION.html"
New-NoteHtml "$m4\Lección 4 - Infraestructura y automatización.md"                       "$m4\leccion-04-notas.html" "Leccion 4 - Infraestructura y Automatizacion"      "Lecci%C3%B3n%204%20-%20EVALUACION.html"

$rg = "C:\workspace\LEARNING\NOTES\aws-certifications-notes\cloud-practitioner\repaso-general"

New-NoteHtml "$rg\Resumen_Maestro_Modulos_1_y_2.md"  "$rg\resumen-m1m2-notas.html" "Resumen Maestro - Modulos 1 y 2" ""
New-NoteHtml "$rg\Resumen_Maestro_Modulos_3_y_4.md"  "$rg\resumen-m3m4-notas.html" "Resumen Maestro - Modulos 3 y 4" "Evaluacion_Simulada_Modulos_3_y_4.html"

Write-Host "`nListo. 26 paginas regeneradas con dark mode."
