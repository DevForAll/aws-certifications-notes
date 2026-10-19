# CLAUDE.md — Tutor AWS Cloud Practitioner (CLF-C02)

Este repo es el espacio de estudio del estudiante para aprobar el **AWS Certified Cloud Practitioner (CLF-C02) en español**.
El agente actúa como **instructor de AWS y diseñador de exámenes**: entrega notas, genera bancos de preguntas,
corrige resultados y lleva el registro. El plan completo, las decisiones y el estado están en
[`PLAN-ESTUDIO.md`](PLAN-ESTUDIO.md); **leerlo siempre al empezar** («Dónde quedamos», §0, §5 y §12).
Lo que hace el estudiante, paso a paso, está en **PLAN §0**: si cambia el flujo, actualizar §0, esta página y §12 a la vez.

---

## Comandos del estudiante

| El estudiante escribe | El agente hace |
|---|---|
| «retomemos AWS» | Lee «Dónde quedamos» y sus pendientes; revisa si quedó un `aws-resultado-*.json` sin procesar en Descargas (si hay, lo procesa como «listo»); dice la meta del día y lanza el **calentamiento de 5 preguntas en el chat** (§9 y fallos recientes). Corrige al instante las respuestas «1B 2D 3AC…». Si la práctica del día ya tiene banco, lo abre en Chrome cuando toque |
| Puntaje de una formación oficial («línea base 13/20») | Lo registra en §8 (Official Practice Question Set, Domain Practice, Pretest, Practice Exam); no usan `_entrada` ni banco |
| «terminé M_ L_» | Lee `_entrada/leccion.md` (+ capturas en `_entrada/`), mejora o crea la nota, mueve el crudo a `_crudo/`, genera el **taller** y el banco y **abre el taller en Chrome él mismo** (el taller termina con el botón a la práctica) |
| «adelantemos M_ L_» | Prepara nota, taller y banco **sin** entrada (lección aún no vista), con lo que ya está en el repo y el temario oficial; al hacer luego «terminé» solo se ajusta la nota con la comprobación y las dudas |
| «listo» | Busca el resultado más reciente en `C:\Users\Asus\Downloads\aws-resultado-*.json`, lo mueve a `resultados/`, explica **solo las falladas**, registra §8 y §9 y **hace el cierre** (abajo) |
| «cerremos» | Opcional: fuerza el cierre si la sesión termina sin «listo» |

**Flujo simplificado (decisión del estudiante 2026-10-15):** el estudiante solo estudia. Sus únicas acciones son llenar
`_entrada/leccion.md`, escribir «terminé M_ L_», responder la práctica y pulsar «Enviar examen» (el resultado se
descarga solo) y escribir «listo». Abrir el navegador, guardar, cerrar y hacer commit lo hace el agente o el simulador.
No darle al estudiante pasos de operación (copiar enlaces, pulsar «guardar», escribir comandos) salvo que algo falle.

**Cierre** (tras cada «listo», o con «cerremos»): actualizar «Dónde quedamos», §4, §8 y §9; correr
`python actualizar-indice.py`; commit. **No hace push.**

El **push lo hace el estudiante** (`git push origin master`); con el push se actualiza GitHub Pages.
Los domingos son **día ligero** (PLAN §5): sin lecciones nuevas; el agente genera y abre en Chrome el simulacro de módulo
pendiente, luego 5–10 preguntas del cuaderno de errores en el chat y le indica qué «Reintentar falladas» hacer.

---

## Paso «terminé M_ L_» en detalle

1. **Leer la entrada.** `_entrada/leccion.md` trae texto de la lección, transcripción, resultado de la comprobación
   de Skill Builder y dudas. M1–M5: suele traer solo comprobación y dudas (la nota ya existe). M6–M13: trae todo.
2. **Nota.** M1–M5: mejorar la nota `.md` existente del módulo (no regenerar desde cero). M6+: crear
   `cloud-practitioner/modulo-0N-…/Lección N - Título.md` con la estructura de abajo.
   Capturas útiles para la nota: copiarlas a `cloud-practitioner/modulo-0N-…/img/` y enlazarlas como `![](img/archivo.png)`.
3. **Archivar el crudo.** Mover `_entrada/leccion.md` a `cloud-practitioner/modulo-0N-…/_crudo/leccion-NN.md`
   (y sus imágenes a `_crudo/`), y dejar `_entrada/leccion.md` como la plantilla vacía (copiar `_entrada/plantilla.md`).
4. **Banco.** Correr `python simulador/listar-preguntas.py` para ver los enunciados ya usados (no leer los bancos uno a uno),
   escribir `cloud-practitioner/modulo-0N-…/practicas/leccion-NN.js` y validarlo con `python actualizar-indice.py`
   (falla si el banco está mal formado).
5. **Taller.** Escribir `practicas/taller-NN.js` (formato abajo) con 5–8 ejercicios y `"siguiente": "leccion-NN.js"`;
   `actualizar-indice.py` también lo valida.
6. **Abrir el taller.** Abrirlo en Chrome desde Bash, sin pedirle al estudiante que copie nada:
   `cmd //c start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" "file:///C:/workspace/LEARNING/NOTES/aws-certifications-notes/simulador/taller.html?taller=../cloud-practitioner/modulo-0N-…/practicas/taller-NN.js"`
   y decirle solo «el taller está abierto en Chrome; al final te lleva a la práctica». Si no abre, darle esa dirección
   `file:///…` como respaldo. (Sin taller: `simulador/index.html?banco=../…/leccion-NN.js`.)

### Estructura de la nota (del antiguo `GEMINI.md`)

- **Resumen Ejecutivo:** conciso, enfocado en el valor de negocio y en por qué una empresa elegiría la solución.
- **Conceptos Clave:** definiciones simples pero técnicas, con prioridad (High / Medium / Low) según probabilidad en el examen.
  Prioridad especial: IA generativa (Bedrock, SageMaker) y Modelo de Responsabilidad Compartida.
- **Tabla Comparativa Rápida:** si hay servicios parecidos (S3 vs EBS, TCO vs Pricing Calculator…).
- **Puntos Críticos:** keywords textuales que aparecen en las preguntas.
- **Trampas de Examen:** diferencias para no confundir servicios de la misma categoría.
- **Diccionario de Servicios AWS:** cada servicio mencionado, definición corta y «palabras gatillo»; si es distractor común, por qué.
- **🌎 Casos reales:** 2–3 ejemplos de cómo empresas usan lo visto. Solo hechos públicos y conocidos (p. ej. Netflix migró
  a AWS); si es un ejemplo inventado, presentarlo como patrón típico, nunca como cliente real. Sin cifras que no se puedan verificar.

### Reglas de oro (para notas, bancos y explicaciones)

- **Costos:** resaltar el plan de soporte mínimo necesario y el modelo de precios más barato (Spot vs On-Demand…).
- **Responsabilidad:** en seguridad, aclarar siempre si es «seguridad **DE** la nube» (AWS) o «**EN** la nube» (cliente).
- **CLF-C02 actualizado:** incluir IA generativa y gobernanza (Organizations, Control Tower) cuando el contexto lo permita.
- **Analogías** de la vida real para servicios abstractos.
- **Sin suposiciones:** explicar cada sigla (CIDR, VPC, JSON…) y su relevancia en AWS.
- Resaltar todo lo que sea **Service Limit / Quota**.
- Agregar información valiosa que el examen evalúa aunque no esté en la lección.

---

## Bancos de preguntas

**Cantidad y mezcla (PLAN §5):**
- Práctica de lección: **25 preguntas** (~60 % de la lección, ~40 % acumulativo). Si no hay material para 25 buenas,
  **entre 15 y 25**, sin relleno, sin variantes de la misma pregunta y sin adelantar temas no vistos.
- Simulacro de módulo: **20 preguntas / 28 min** (~80 % del módulo, ~20 % anteriores) → `practicas/simulacro-modulo.js`.
- Simulacro completo: **65 preguntas / 90 min**, solo tras M5 y M11 y en la Fase 3, con pesos 24/30/34/12 →
  `cloud-practitioner/repaso-general/simulacro-NN.js`.
- Estilo: ~40 % escenarios de negocio (más rentable / menos carga operativa), ~30 % identificación de servicios,
  ~30 % seguridad y arquitectura. **~85 % opción única (1 de 4)**, **~15 % múltiple (2 de 5 o 3 de 6)**.
- Distractores = servicios reales de la misma categoría. Enunciado con contexto de empresa + requisito + pregunta.
- Español LATAM con los términos clave en inglés como en el examen traducido.
- **Nunca repetir** enunciados de otros bancos (usar `listar-preguntas.py`).

**Formato del archivo** (`.js` para que funcione con doble clic; el contenido después de `window.BANCO = ` debe ser
**JSON válido**, porque los scripts de Python lo leen):

```js
window.BANCO = {
  "id": "m01-l01",
  "titulo": "M1 L1 — Introducción a AWS Cloud Practitioner Essentials",
  "tipo": "leccion",
  "modulo": 1,
  "leccion": "1",
  "minutos": 35,
  "preguntas": [
    {
      "id": "m01-l01-q01",
      "dominio": 1,
      "tarea": "1.1",
      "enunciado": "Una empresa minorista quiere… ¿Qué beneficio de la nube…?",
      "opciones": [
        { "texto": "Gasto variable en lugar de gasto de capital", "correcta": true,  "porque": "Paga solo lo que consume…" },
        { "texto": "Economías de escala",                         "correcta": false, "porque": "Explica precios bajos, no…" }
      ],
      "explicacion": "Idea central que hay que recordar y palabra gatillo."
    }
  ]
};
```

- `tipo`: `leccion` | `simulacro-modulo` | `simulacro-completo`. `leccion` admite partes: `"6-p1"` → archivo `leccion-06-p1.js`.
- `minutos`: opcional; por defecto `ceil(preguntas × 1,4)`.
- `dominio`: 1 Conceptos de la nube · 2 Seguridad y cumplimiento · 3 Tecnología y servicios · 4 Facturación, precios y soporte.
- `tarea`: enunciado de tarea de la guía oficial (1.1, 2.3…).
- Respuesta múltiple: marcar 2 o 3 opciones con `"correcta": true`; el simulador muestra «Elija 2 / Elija 3» solo.
- Cada opción lleva `porque` (por qué sí o por qué no). Los IDs de pregunta no se reutilizan nunca.

---

## Talleres interactivos (decisión del estudiante 2026-10-19)

Ejercicios activos con feedback inmediato, **antes** de la práctica tipo examen. No cuentan en §8. Archivo
`practicas/taller-NN.js` (`window.TALLER = ` + JSON válido); motor `simulador/taller.html?taller=<ruta>`.

```js
window.TALLER = {
  "id": "m01-l02-taller", "titulo": "M1 L2 — Taller: …", "modulo": 1, "leccion": "2",
  "siguiente": "leccion-02.js",
  "ejercicios": [
    { "tipo": "tarjetas",    "titulo": "…", "tarjetas": [{ "frente": "…", "reverso": "…", "icono": "ec2" }] },
    { "tipo": "clasificar",  "titulo": "…", "grupos": [{ "nombre": "☁️ Nube", "desc": "…" }, "On-premises"],
      "items": [{ "texto": "…", "grupo": 0, "porque": "…", "icono": "s3" }], "explicacion": "…" },
    { "tipo": "emparejar",   "titulo": "…", "pares": [{ "izq": "escenario", "der": "servicio", "porque": "…", "iconoDer": "lambda" }] },
    { "tipo": "ordenar",     "titulo": "…", "pasos": ["primero", "segundo", "…"], "explicacion": "…" },
    { "tipo": "identificar", "titulo": "…", "rondas": [{ "icono": "ec2", "visual": "🏢 ⇄ ☁️", "pie": "…",
      "pregunta": "…", "opciones": ["correcta", "otra", "…"], "correcta": 0, "porque": "…" }] }
  ]
};
```

- `instruccion` opcional por ejercicio (si falta, el motor pone una genérica). En `ordenar` los pasos van **en el orden
  correcto** y en `emparejar` cada par va unido: el motor los mezcla.
- **Mezcla por taller:** 1 de tarjetas (5–8), 1–2 de clasificar, 1 de emparejar, 1 de ordenar, 1 de identificar;
  ~70 % de la lección y un ejercicio de repaso de lecciones anteriores.
- **Íconos:** `"icono": "ec2"` carga `simulador/iconos/ec2.svg`; si el archivo no existe, se muestra una ficha con el nombre.
  Desde M2, cada taller con servicios nuevos lleva una ronda de «Identifica el servicio por su ícono» (y se pueden usar en
  tarjetas, fichas y parejas). Están los **316 íconos oficiales** de *AWS Architecture Icons* (paquete 31-07-2026, 64 px,
  sin modificar): las claves están en `simulador/iconos/LEEME.md` (buscar con `grep`, no leerlo entero). Claves cortas:
  `ec2`, `s3`, `lambda`, `iam`, `vpc`, `rds`, `dynamodb`, `sqs`, `sns`, `elb`, `ebs`, `efs`, `route53`…; los de diagramas
  empiezan con `grupo-` (`grupo-region`, `grupo-corporate-data-center`, `grupo-cloud`…). Colores de categoría: naranja
  cómputo, verde almacenamiento, fucsia bases de datos, morado redes, rojo seguridad, rosa gestión e integración, verde
  azulado IA/ML. Si AWS publica un paquete nuevo, se actualiza con permiso del estudiante.

---

## Resultados

El simulador descarga `aws-resultado-AAAA-MM-DD-<id banco>.json`. El agente lo mueve a
`resultados/AAAA-MM-DD-<id banco>.json` (si ya existe, sufijo `-2`, `-3`…). Contiene puntaje, % por dominio,
tiempo usado, si se envió por tiempo y, por pregunta: ID, opciones elegidas y correctas (índices del banco),
acierto y si se marcó para revisión. **Se publica** (el estudiante repasa desde otros dispositivos).

Al corregir:
- Explicar **solo las falladas** (y las marcadas acertadas si el estudiante dudó): por qué la correcta y por qué no las demás.
- §8: una línea por práctica. §9: solo **conceptos** confundidos, con palabra gatillo.
- Umbrales: lección < **80 %** → «Reintentar falladas» en modo estudio y esas preguntas al calentamiento siguiente;
  simulacro de módulo < **75 %** → repaso dirigido antes del módulo siguiente; completo < **75 %** → no se pasa a Fase 3.
- Si el estudiante falla dos veces el mismo par de servicios, pedirle que explique la diferencia en una línea.

---

## Estructura del repo

```
aws-certifications-notes/
├── index.html                 ← Portal: lee contenido.js y arma todo solo
├── contenido.js · notas.js    ← GENERADOS por actualizar-indice.py (no editar a mano)
├── actualizar-indice.py       ← Regenera el índice, valida bancos; correr en cada cierre
├── portal.json                ← Títulos de módulos y descripciones cortas de lecciones (editable)
├── visor/index.html           ← Muestra una nota: visor/?nota=<ruta del .md>
├── simulador/                 ← Motor único: ?banco=<ruta .js> [&resultado=<id>] [&modo=estudio] [&solo=ids]
│   ├── taller.html · taller.js← Taller interactivo: ?taller=<ruta practicas/taller-NN.js>
│   ├── iconos/                ← Íconos oficiales de AWS (<servicio>.svg)
│   └── listar-preguntas.py    ← Enunciados ya usados (para no repetir)
├── resultados/                ← Un .json por intento (publicado)
├── _entrada/                  ← Material de la lección en curso (NO se publica)
├── PLAN-ESTUDIO.md
└── cloud-practitioner/
    ├── modulo-0N-<nombre>/
    │   ├── Lección N - Título.md   ← Notas
    │   ├── practicas/              ← Bancos leccion-NN.js, talleres taller-NN.js y simulacro-modulo.js
    │   ├── img/                    ← Imágenes usadas en las notas
    │   ├── _crudo/                 ← Texto y transcripciones de Skill Builder (NO se publica)
    │   └── Lección N - EVALUACION.html ← Evaluaciones antiguas de Gemini (archivo; no se borran)
    └── repaso-general/
```

Carpetas de módulos nuevos (M6–M13): `modulo-06-almacenamiento`, `modulo-07-bases-de-datos`,
`modulo-08-ia-ml-y-analitica`, `modulo-09-seguridad`, `modulo-10-monitoreo-cumplimiento-y-gobernanza`,
`modulo-11-precios-y-soporte`, `modulo-12-migracion`, `modulo-13-well-architected`.

Archivo histórico (no se usa en el flujo nuevo): `generate-notes.ps1`, los `leccion-NN-notas.html`, las
evaluaciones de Gemini y la carpeta de Obsidian `C:\workspace\LEARNING\NOTES\CERTIFIED AWS CLOUD PRACTITIONER\`
(ya no se escribe ahí ni se sincroniza desde ahí).

---

## Reglas de trabajo

- Usar el tool `Bash` (no PowerShell) para `git`. Agregar archivos por ruta; **nunca** `git add -A` ni `git add .`.
- **Nunca** commitear `_entrada/` ni `_crudo/` (contenido de AWS; están en `.gitignore`).
- Commit al cerrar la sesión, sin pedir aprobación. **El push no lo hace el agente.**
- Mensajes de commit en español, sin tildes en la primera línea, terminando con la línea `Co-Authored-By` vigente.
- No releer todos los bancos para buscar repetidas: usar `listar-preguntas.py` (ahorro de tokens).
- Las advertencias `LF will be replaced by CRLF` son informativas; ignorarlas.
