# Plan de estudio — AWS Certified Cloud Practitioner (CLF-C02)

> Creado: 2026-10-13 · Actualizado: 2026-10-15 (sesiones con Claude Code).
> Objetivo: aprobar el CLF-C02 **en español** antes de fin de 2026, primer paso hacia AWS Solutions Architect.
> Este archivo es el punto de retorno entre sesiones: al empezar, leer «Dónde quedamos»; al cerrar, actualizarlo.

## Dónde quedamos

- **Fecha:** 2026-10-15
- **Hecho:** plan confirmado con la captura del Exam Prep Plan, horario, decisiones (§2, §6) y flujo de trabajo por sesión (§5).
  Decisiones del dueño (2026-10-15): **25 preguntas por lección, lo más real posible**, y **simulacro de 20 preguntas al cerrar cada módulo** (§5). Con eso el examen pasa a enero de 2027 salvo que se estudie 7 días por semana (§6).
- **Estado:** el plan **sigue en definición** con el dueño; se revisa punto por punto antes de empezar a estudiar.
- **Agenda de definición (no de estudio):** revisar **punto por punto** con el dueño,
  uno a la vez, cerrar cada uno con una decisión y anotarla en su sección antes de pasar al siguiente:
  1. ✅ Días de estudio (2026-10-15): **7 días por semana**, inicio sáb 17 oct, examen objetivo **mar 22 dic 2026** (§6).
  2. ✅ Diseño del simulador (2026-10-15): envío automático al acabar el tiempo, pausa guardada en el navegador,
     explicación de las 25 (falladas y marcadas primero), **«Guardar resultado» descarga un `.json`** que el agente lee
     (sin copiar y pegar), y **archivo único de entrada** `_entrada/leccion.md` para el material de cada lección (§5).
  3. ✅ Proporciones (2026-10-15): 25 por lección (60/40), **15–25 en lecciones cortas sin relleno**, simulacro de 20
     por módulo, **simulacros de 65 solo tras M5 y M11** → 3 días de colchón antes del examen (§5, §6).
  4. ✅ Reglas de control (2026-10-15): umbrales **80 % lección / 75 % simulacros**, calentamiento de 5 en el chat;
     se mantienen las lecciones partidas entre sesiones y el registro de resultados (§5).
  5. Suscripción de Skill Builder: si se contrata 1 mes y cuándo (§7).
  6. Logística del examen: en línea desde casa o en centro de Lima; cuándo reservar (§10).
  7. Portal web y repo: qué se publica, `CLAUDE.md` nuevo, push por el dueño (§5 «Dónde se guarda»).
  8. Cualquier otro ajuste del dueño al flujo por sesión (§5).
  Al cerrar los 8 puntos, el agente hace las tareas de «Antes de la sesión 1» y se fija el día de inicio real.
- **Antes de la sesión 1 (lo hace el agente, fuera del horario de estudio):**
  1. Reescribir el `CLAUDE.md` del repo: hoy describe la sincronización vieja desde Obsidian con **push autónomo**;
     pasa a ser el tutor de estudio (contenido de `GEMINI.md` + flujo de §5) y **el push lo hace el dueño**.
  2. Construir el **motor del simulador** (`simulador/`, ver §5) y probarlo con un banco de ejemplo,
     en local (doble clic) y en GitHub Pages.
  3. Script `simulador/listar-preguntas.py`: lista los enunciados ya usados para no repetir preguntas
     sin que el agente relea todos los bancos (ahorro de tokens).
  4. Hacer que el portal descubra solo lecciones, prácticas y simuladores.
  5. Crear `_entrada/leccion.md` (plantilla con secciones: texto, transcripción, comprobación, dudas) y agregar
     `_entrada/` y `_crudo/` al `.gitignore`.
- **Siguiente (sesión 1 de estudio: sábado 2026-10-17, 10:00–12:00, si los 8 puntos quedan cerrados antes):**
  1. Ver *Exam Prep Plan Overview* (15 min) + *Exam Prep Overview* (20 min) en Skill Builder.
  2. Dar el **Official Practice Question Set** (20 preguntas, 30 min) como **línea base honesta** y registrar el puntaje en §8.
  3. Empezar Módulo 1, Lección 1 de Essentials con el flujo de §5.

---

## 1. Datos del examen (guía oficial CLF-C02, v1.0)

| Dato | Valor |
|---|---|
| Preguntas | 65 (50 puntúan + 15 no puntuadas, no identificadas) |
| Duración | 90 min |
| Aprobación | 700 / 1000 (escala) |
| Tipos | Opción única (1 de 4) y respuesta múltiple (2+ de 5+) |
| Costo | 100 USD |
| Idioma elegido | Español (LATAM) |
| Versión | CLF-C02 vigente; sin anuncio público de sucesor (búsqueda 2026-10-13) |

| Dominio | Peso |
|---|---|
| 1. Cloud Concepts | 24 % |
| 2. Security and Compliance | 30 % |
| 3. Cloud Technology and Services | 34 % |
| 4. Billing, Pricing, and Support | 12 % |

## 2. Exam Prep Plan (CLF-C02 – Español LATAM) — confirmado 2026-10-15

El plan tiene 19 formaciones. Cuenta del dueño: **Skill Builder gratuito**.

| Formación | Duración | Acceso | Uso en este plan |
|---|---|---|---|
| Exam Prep Plan Overview | 15 min | Gratis | Sesión 1 |
| Exam Prep Overview | 20 min | Gratis | Sesión 1 |
| Official Practice Question Set (20 preg.) | 30 min | Gratis | Sesión 1: línea base. Repetirlo al final solo como repaso (son las mismas preguntas) |
| **AWS Cloud Practitioner Essentials** (13 módulos) | 12 h 45 min | Gratis (en progreso) | Fase 1: base teórica, desde el inicio |
| Domain 1 / 2 / 3 / 4 Review | ~1 h 05 c/u | Gratis | Fase 2: consolidación por dominio |
| Exam Prep Summary | 5 min | Gratis | Cierre |
| AWS Escape Room (demo) | — | Demo gratis (inglés) | Opcional, para variar |
| Domain 1–4 Practice | 40–60 min c/u | Suscripción | Opcional (§7) |
| Domain 1–4 Practice: AWS SimuLearn | 1 h c/u | Suscripción (inglés) | Opcional (§7) |
| **Official Pretest** (65 preg., 90 min, resultado por dominio) | 1 h 30 | Suscripción | Recomendado (§7) |
| **Official Practice Exam** (65 preg., 90 min, puntaje escalado) | 1 h 30 | Suscripción | Recomendado (§7): filtro final |
| Escape Room completo | 5 h | Suscripción | No necesario |

Fuera del plan, pero gratis: **AWS Cloud Quest: Cloud Practitioner** (12 tareas en consola real, inglés, insignia en Credly).

## 3. Laboratorios: no hace falta cuenta de AWS (decisión 2026-10-15)

- El CLF-C02 es conceptual: no pide configurar nada, pide **elegir el servicio correcto ante un escenario**.
  El dueño ya tiene experiencia práctica en AWS.
- La práctica de consola sale de **Cloud Quest: Cloud Practitioner** (gratis, sandbox real, sin riesgo de cobros)
  y de las demostraciones de Essentials (lanzar EC2, VPC, etc.).
- Cuenta propia de AWS: **no ahora**. Se abre cuando empiece la preparación de Solutions Architect Associate,
  donde sí hace falta construir.
- Cloud Quest es **opcional y fuera de las 2 h**: con 25 preguntas por lección no cabe en la sesión. El agente indica qué tarea
  corresponde a cada módulo por si el dueño quiere hacerla en tiempo libre. No es necesario para aprobar.

## 4. Avance en Cloud Practitioner Essentials

**Decisión 2026-10-15: empezar desde el Módulo 1** (el dueño olvidó conceptos teóricos).
Las notas existentes de M1–M5 se **reutilizan y mejoran**, no se regeneran desde cero: eso permite ir más rápido en M1–M5.

| Módulo | Material previo | Vuelta 2026 |
|---|---|---|
| 1 Introducción a la nube | ✅ notas + evaluaciones | ⬜ |
| 2 Computación en la nube (EC2, escalado, ELB, colas) | ✅ | ⬜ |
| 3 Servicios de computación (Lambda, contenedores) | ✅ | ⬜ |
| 4 Hacia la globalización | ✅ | ⬜ |
| 5 Redes | ⚠️ L1–L3 con evaluación; L4–L7 solo notas | ⬜ |
| 6 Storage | ❌ | ⬜ |
| 7 Databases | ❌ | ⬜ |
| 8 AI/ML and Data Analytics | ❌ | ⬜ |
| 9 Security | ❌ | ⬜ |
| 10 Monitoring, Compliance, and Governance | ❌ | ⬜ |
| 11 Pricing and Support | ❌ | ⬜ |
| 12 Migrating to the AWS Cloud | ❌ | ⬜ |
| 13 Well-Architected Solutions | ❌ | ⬜ |

**Debilidades ya detectadas** (M3 L5 – EVALUACION.md, may-2026): responsabilidad compartida en EC2;
CloudTrail vs Config vs Artifact; Budgets vs Cost Explorer; plan con TAM; pilares Well-Architected.
Ya están en el cuaderno de errores (§9).

## 5. Flujo de trabajo por sesión (2 h, 10:00–12:00) — definido 2026-10-15

### Apertura (5 min)
1. **Dueño:** abre Claude Code en esta carpeta y escribe «retomemos AWS».
2. **Agente:** lee «Dónde quedamos», dice la meta del día (ej. «M1 L1–L3») y lanza un
   **calentamiento de 5 preguntas** sacadas del cuaderno de errores (§9). Dueño responde «1B 2D 3AC…».

### Ciclo por lección (~65–80 min)

| Paso | Quién | Qué | Tiempo |
|---|---|---|---|
| 1 | Dueño | Ve la lección en Skill Builder (texto + video) y hace su **comprobación de conocimientos** | 15–20 min |
| 2 | Dueño → agente | Escribe «terminé M_ L_» y pasa los datos de la tabla «Qué pasa el dueño» | 2 min |
| 3 | Agente | Entrega la **nota** (M1–M5: la existente mejorada; M6+: nueva). Dueño la lee | 5–10 min |
| 4 | Agente | Genera el **banco de 25 preguntas** de la lección (`practicas/`) y avisa que está listo | 2–3 min |
| 5 | Dueño | Da la práctica en el **simulador** (navegador), con cronómetro, **sin pistas** | ~35 min |
| 6 | Dueño → agente | Pulsa «Guardar resultado» y escribe «listo» en el chat (el agente lee el archivo) | 1 min |
| 7 | Agente | Explica **solo las falladas** (por qué la correcta y por qué no las demás), registra puntaje (§8) y errores (§9) | 10–15 min |

**Qué pasa el dueño en el paso 2:**

| Módulos | Datos |
|---|---|
| M1–M5 | Solo «terminé M_ L_» + resultado de la comprobación de Skill Builder (captura de las que falló) + dudas o algo nuevo que no esté en la nota |
| M6–M13 | Lo anterior **+ texto de la lección** (copiar y pegar la página) **+ transcripción del video** **+ capturas** de diagramas |

**Archivo único de entrada (decisión del dueño 2026-10-15):** nada se pega en el chat; todo lo recolectado de la
lección (texto, transcripción, resultado de la comprobación, dudas) va a **un solo archivo**, `_entrada/leccion.md`,
y las capturas a la carpeta `_entrada/` junto a él. Con «terminé M_ L_», el agente lo lee, mejora o crea la nota
respectiva, mueve el crudo a `cloud-practitioner/modulo-0N-…/_crudo/leccion-NN.md` (con sus imágenes) y deja
`_entrada/leccion.md` vacío para la siguiente lección. `_entrada/` no se publica (`.gitignore`).

Decisión 2026-10-15: **sin preguntas abiertas de recuerdo**. El examen es de opción múltiple; el tiempo va a preguntas tipo examen.
Excepción: si el dueño falla dos veces el mismo par de servicios, el agente pide explicar la diferencia en una línea.

### Práctica de lección: 25 preguntas, lo más real posible (decisión del dueño 2026-10-15)

**Contenido:**
- **25 preguntas por lección**, en español LATAM, términos clave en inglés como en el examen traducido.
- Mezcla: **~60 % de la lección + ~40 % acumulativo** de lecciones y módulos anteriores.
  Si la lección es corta, sube la parte acumulativa en vez de rellenar con preguntas repetidas o triviales
  (las variantes de la misma pregunta inflan el puntaje y dan falsa seguridad).
- **Lecciones cortas o del inicio (decisión 2026-10-15):** si no hay material para 25 preguntas buenas, el banco
  tiene **entre 15 y 25**, con el cronómetro ajustado a 1,4 min por pregunta. Nunca relleno ni adelanto de temas no vistos.
- Por estilo, como el examen: ~40 % escenarios de negocio («¿qué opción es la más rentable o con menos
  carga operativa?»), ~30 % identificación de servicios, ~30 % seguridad y arquitectura.
- **~85 % opción única (1 de 4) y ~15 % respuesta múltiple (2 de 5 o 3 de 6)**, indicando «Elija 2 / Elija 3».
- Distractores = servicios reales de la misma categoría. Enunciados con el largo y el tono del examen
  (contexto de empresa + requisito + pregunta), no definiciones de diccionario.
- Las preguntas no se repiten entre bancos.

**Formato (lo más parecido al examen real):**
- Se da en el **simulador HTML**, no en el chat.
- **Modo examen:** cronómetro de **35 min** (ritmo real: 90 min / 65 preg. ≈ 1,4 min por pregunta), **sin pistas
  ni feedback** mientras se responde, botón «Marcar para revisión», navegación entre preguntas y pantalla
  de revisión antes de enviar, como en Pearson VUE.
- **Fin del tiempo:** se **envía solo**, como en Pearson VUE; lo no respondido cuenta como incorrecto (decisión 2026-10-15).
- **Pausa entre sesiones:** el simulador **guarda respuestas y tiempo en el navegador** (`localStorage`); al cerrar,
  el cronómetro se detiene y al reabrir el mismo banco sigue donde quedó (misma computadora y navegador).
- **Al enviar:** puntaje, % por dominio y explicación de **las 25** (correcta y por qué no las otras), con
  **las falladas y las marcadas para revisión primero**; botón «Reintentar falladas».
- **Resultado sin copiar y pegar (decisión del dueño 2026-10-15):** botón **«Guardar resultado»**, que descarga
  `aws-resultado-AAAA-MM-DD-<banco>.json` a la carpeta Descargas con **todo el intento**: puntaje, % por dominio,
  tiempo usado y, por pregunta, ID, respuesta elegida, correcta, acierto y si se marcó para revisión.
  El agente lo lee de `C:\Users\Asus\Downloads\` y lo mueve a `resultados/`. «Copiar resultado» queda solo como
  respaldo (celular o si la descarga falla).
- Orden de preguntas y de opciones **aleatorio** en cada intento.
- **Modo estudio** (feedback inmediato) solo para repasar después, nunca en el primer intento.

**Motor reutilizable (para no gastar tokens ni tiempo):**
- `simulador/index.html` + `simulador/motor.js`: un único motor que se escribe una vez.
- Cada práctica es solo un archivo de datos: `cloud-practitioner/modulo-0N-…/practicas/leccion-NN.js`
  (preguntas, opciones, correctas, explicación, dominio y enunciado de tarea de la guía). Es `.js` y no `.json`
  porque un `.json` no se puede cargar al abrir el HTML con doble clic (`file://`); el `.js` funciona igual
  **en la computadora y en el celular** desde GitHub Pages (https://devforall.github.io/aws-certifications-notes/,
  verificado activo 2026-10-15). El simulador lo elige por URL (`simulador/?banco=…`).
- El respaldo «Copiar resultado» muestra el texto en un cuadro si el navegador bloquea el portapapeles.
- El mismo motor sirve para los simulacros de 65 preguntas.

### Simulacros
- **Fin de cada módulo: simulacro de 20 preguntas / 28 min** (decisión del dueño 2026-10-15), en modo examen.
  ~80 % del módulo + ~20 % de módulos anteriores. Se da al empezar la sesión siguiente al cierre del módulo.
- **Simulacro completo de 65 preguntas / 90 min** solo **tras M5 y tras M11** (decisión 2026-10-15: se bajó de 4 a 2;
  tras M3 y M8 saldrían desbalanceados porque Seguridad y Facturación llegan en M9 y M11). Pesos por dominio
  (24/30/34/12) sobre lo visto hasta ahí. Ocupa una sesión entera (simulacro + revisión).
- Fase 3: 3 simulacros completos finales, todos los dominios.
- **Programar el examen** al sacar ≥ 80 % en dos simulacros completos seguidos
  (y ≥ 750 en el Official Practice Exam si se contrata la suscripción).

### Reglas de control (agregadas 2026-10-15)
- **Nunca se corta una práctica para «cumplir» la sesión.** Si a las 12:00 la práctica no terminó, se sigue
  al inicio de la sesión siguiente. Las lecciones pueden quedar partidas entre sesiones.
- **Umbrales (decisión 2026-10-15):** más exigentes donde el tema está fresco.
  - Práctica de lección < **80 %**: «Reintentar falladas» en modo estudio (puede ser desde el celular) y esas
    preguntas entran al calentamiento de la sesión siguiente.
  - Simulacro de módulo < **75 %**: repaso dirigido de los temas fallados antes de empezar el módulo siguiente.
  - Simulacro completo < **75 %**: no se avanza a Fase 3; se repasa el dominio más bajo.
- **Calentamiento de apertura:** 5 preguntas **en el chat** (el dueño responde «1B 2D 3AC…» y el agente corrige al
  instante, sin banco ni archivo), sacadas de los fallos más recientes y del cuaderno de errores.
- **Sin repetir preguntas:** antes de generar un banco, el agente corre `listar-preguntas.py` y evita enunciados ya usados.
- **Dónde va cada resultado:** el `.json` descargado se mueve a `resultados/AAAA-MM-DD-<banco>.json`; en §8 va una línea
  por práctica; en §9 solo **conceptos** confundidos (no cada pregunta), para que el cuaderno siga siendo legible.

### Cierre (5 min)
1. **Dueño:** «cerremos».
2. **Agente:** actualiza «Dónde quedamos», el avance (§4), puntajes (§8) y errores (§9); hace commit.
3. **Dueño:** hace `git push origin master` cuando quiera (con el push se actualiza la web).

### Dónde se guarda cada cosa

| Qué | Dónde | ¿Se publica en GitHub? |
|---|---|---|
| Entrada de la lección en curso (texto, transcripción, capturas) | `_entrada/leccion.md` + imágenes en `_entrada/` | No (`.gitignore`) |
| Transcripciones y texto crudo de cada lección ya procesada | `cloud-practitioner/modulo-0N-…/_crudo/` | No (en `.gitignore`: es contenido de AWS) |
| Nota de cada lección | `cloud-practitioner/modulo-0N-…/Lección N - Título.md` (se mejora la existente) | Sí |
| Banco de 25 preguntas de cada lección | `cloud-practitioner/modulo-0N-…/practicas/leccion-NN.js` | Sí |
| Simulacro de 20 de cada módulo | `cloud-practitioner/modulo-0N-…/practicas/simulacro-modulo.js` | Sí |
| Motor del simulador | `simulador/` | Sí |
| Simulacros de 65 preguntas | `cloud-practitioner/repaso-general/simulacro-NN.js` | Sí |
| Resultados de cada intento (todas las respuestas) | `resultados/AAAA-MM-DD-<banco>.json` | Sí |
| Puntajes, cuaderno de errores, «Dónde quedamos» | Este archivo (§8, §9) | Sí |
| Evaluaciones antiguas de Gemini | Donde están; quedan como archivo, no se borran | Sí |
| Carpeta Obsidian `CERTIFIED AWS CLOUD PRACTITIONER` | Queda como archivo histórico; ya no se escribe ahí | — |

**Portal web (GitHub Pages): se mantiene** — el dueño repasa desde fuera de su computadora.
- Se actualiza solo: el portal lista lecciones, notas y prácticas sin editar entradas a mano (mejora previa a la sesión 1).
- Las prácticas se pueden **repetir desde el celular** en modo estudio para repasar.

Ritmo estimado con 25 preguntas: **~1,6 lecciones por sesión** (M1–M5 algo más rápido porque ya hay notas).

Reglas que se mantienen del `GEMINI.md`: seguridad DE la nube (AWS) vs EN la nube (cliente);
resaltar opción más barata y plan de soporte mínimo; analogías de la vida real; explicar siglas;
resaltar Service Limits / Quotas; incluir IA generativa y gobernanza.

## 6. Calendario (desde 2026-10-18, 2 h por sesión, 25 preguntas por lección + simulacro por módulo)

**Carga estimada (recalculada 2026-10-15):**

| Bloque | Sesiones |
|---|---|
| Sesión 0 (overviews + línea base) | 1 |
| ~77 lecciones (M1–M5 ≈ 29; M6–M13 ≈ 48) a ~1,6 por sesión | ~48 |
| 13 simulacros de módulo (20 preg. + revisión ≈ 40 min c/u) | ~4,5 |
| 2 simulacros completos intermedios (tras M5 y M11) | 2 |
| Fases 2 y 3 (Domain Reviews + 3 simulacros finales + repasos) | ~8 |
| **Total** | **~63** |

| Sesiones por semana | Examen aprox. |
|---|---|
| 5 | ~fin de enero 2027 |
| 6 | ~primera quincena de enero 2027 |
| **7 (elegido)** | ~22–28 dic 2026 (sin colchón) |

**Lectura honesta:** con 25 preguntas por lección y simulacro por módulo, «antes de fin de año» **solo se mantiene
estudiando los 7 días**, y sin margen para perder sesiones. Lo realista es **enero de 2027**.
Se llega con ~2 600 preguntas practicadas. Si se pierden sesiones, se corre la fecha; no se recorta la Fase 3.

| Fase | Qué |
|---|---|
| 0 | Sesión 1: Overviews + Official Practice Question Set (línea base) + inicio M1 |
| 1A | Essentials M1–M5 + simulacro de cada módulo + simulacro completo tras M5 |
| 1B | Essentials M6–M13 + simulacro de cada módulo + simulacro completo tras M11 |
| 2 | Domain 1–4 Review (gratis) + simulacros completos finales 1 y 2 |
| 3 | Simulacro 3 (+ Official Pretest / Practice Exam si hay suscripción) → **examen** |

### Calendario fijado (decisión del dueño 2026-10-15: **7 días por semana**, inicio **sábado 2026-10-17**)

| Sesiones | Fechas | Fase |
|---|---|---|
| 1 | sáb 17 oct | Fase 0: overviews + línea base + inicio M1 |
| 2–22 | 18 oct – 7 nov | Fase 1A: M1–M5 (+ simulacros de módulo + completo tras M5) |
| 23–56 | 8 nov – 11 dic | Fase 1B: M6–M13 (+ simulacros de módulo + completo tras M11) |
| 57–63 | 12 – 18 dic | Fases 2 y 3: Domain Reviews + 3 simulacros finales |
| 64–66 | 19 – 21 dic | Colchón de 3 días (recuperar sesiones perdidas o repaso ligero) |
| — | **mar 22 dic 2026** | **Fecha objetivo del examen** |

- Colchón de 3 sesiones (ganado al bajar los simulacros completos de 4 a 2). Si se pierden más de 3, el examen pasa a
  la primera semana de enero de 2027 (evitar 24–25 y 31 dic). No se recorta la Fase 3.
- Hitos de control: si al **7 nov** no está cerrado M5, o al **11 dic** no está cerrado M13, se recalcula la fecha.
- Consecuencia para §10: con este calendario la Fase 2 empieza el 14 dic, demasiado tarde para reservar con
  2–3 semanas. La regla de reserva se redefine en el punto 6.

## 7. Suscripción de Skill Builder (decisión del dueño, recomendada)

- **Recomendación:** **1 mes** de suscripción individual (~29 USD/mes; verificar precio antes de pagar)
  activado al **inicio de la Fase 2**, no antes.
- Qué aporta: **Official Pretest** (diagnóstico por dominio con preguntas oficiales), **Domain Practice 1–4**
  para los dominios débiles y **Official Practice Exam**, el simulacro más fiel al examen real (mismo puntaje escalado).
- Por qué vale la pena: las preguntas generadas por IA nunca igualan el estilo oficial; un examen fallido
  cuesta 100 USD, la suscripción ~29 USD.
- Sin suscripción el plan funciona igual: los simulacros los genera el agente.

## 8. Registro de puntajes

| Fecha | Práctica | Preguntas | Aciertos | % | Temas fallados |
|---|---|---|---|---|---|
| | | | | | |

## 9. Cuaderno de errores (trampas)

| Fecha | Confundí… | Lo correcto | Palabra gatillo |
|---|---|---|---|
| 2026-05 | Config con CloudTrail | CloudTrail = quién hizo qué (API); Config = estado/cambios de configuración | «auditar llamadas API» → CloudTrail |
| 2026-05 | Budgets con Cost Explorer | Budgets = alertas a futuro; Cost Explorer = análisis de tendencias | «alerta al superar» → Budgets |
| 2026-05 | Parcheo SO en EC2 | Lo hace el cliente (IaaS) | «EC2 + sistema operativo» → cliente |
| 2026-05 | Plan con TAM | Solo Enterprise (y Enterprise On-Ramp con pool de TAM) | «TAM dedicado» → Enterprise |
| 2026-05 | Excelencia Operativa vs Fiabilidad | Fiabilidad = recuperarse de fallos, disponibilidad | «recuperación ante fallos» → Reliability |

## 10. Logística del examen (pendiente de decidir)

- **Dónde:** Pearson VUE, **en línea desde casa** (cámara, sala sola, escritorio vacío, prueba técnica previa)
  o **en un centro de evaluación en Lima**. A decidir por el dueño.
- **Cuándo reservar:** al sacar ≥ 80 % en el primer simulacro completo de la Fase 2, reservar con
  **2–3 semanas** de anticipación. Revisar en la página de reserva la política vigente de reprogramación.
- **Cuenta:** se reserva desde la cuenta de AWS Certification (AWS Training & Certification), en **español LATAM**.
- **Documento:** identificación oficial vigente con el mismo nombre que la cuenta de certificación.
- **Costo:** 100 USD. Verificar si hay descuentos vigentes (vouchers de eventos de AWS) antes de pagar.

## 11. Dónde está cada cosa

- Fuente cruda (Obsidian, con imágenes y transcripciones): `C:\workspace\LEARNING\NOTES\CERTIFIED AWS CLOUD PRACTITIONER\`
- Este repo (portal + notas): `C:\workspace\LEARNING\NOTES\aws-certifications-notes\`
- Prompts anteriores: `C:\workspace\LEARNING\NOTES\PROMTS\GENERAR EXAMEN\` y `PROMTS\GEMINI-CLI\ESTUDIO\`
- Instrucciones de tutor (a migrar a CLAUDE.md): `CERTIFIED AWS CLOUD PRACTITIONER\GEMINI.md`
- Recursos y enlaces: `C:\workspace\LEARNING\NOTES\NOTAS-ADICIONALES\AWS CLOUD PRACTITIONER.md`
- Sesiones de estudio: abrir Claude Code en esta carpeta, no en `hub-automations`.

## Fuentes (consultadas 2026-10-13 / 2026-10-15)

- Guía oficial CLF-C02: https://d1.awsstatic.com/training-and-certification/docs-cloud-practitioner/AWS-Certified-Cloud-Practitioner_Exam-Guide.pdf
- Nuevo Cloud Practitioner Essentials (13 módulos, 2025-06-24): https://aws.amazon.com/blogs/training-and-certification/new-aws-cloud-practitioner-essentials/
- Certificación: https://aws.amazon.com/certification/certified-cloud-practitioner/
- Cloud Quest (rol Cloud Practitioner gratis): https://aws.amazon.com/training/digital/aws-cloud-quest/
- Suscripciones de Skill Builder: https://aws.amazon.com/blogs/aws/new-aws-skill-builder-subscriptions
- Lista de formaciones del Exam Prep Plan: capturas del dueño, 2026-10-15
