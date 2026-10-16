# Plan de estudio — AWS Certified Cloud Practitioner (CLF-C02)

> Creado: 2026-10-13 · Actualizado: 2026-10-16 (sesiones con Claude Code).
> Objetivo: aprobar el CLF-C02 **en español** antes de fin de 2026, primer paso hacia AWS Solutions Architect.
> Este archivo es el punto de retorno entre sesiones: al empezar, leer «Dónde quedamos»; al cerrar, actualizarlo.
> **¿Qué hago yo exactamente?** → §0 «Tu flujo, paso a paso».

## Dónde quedamos

- **Fecha:** 2026-10-16 (vie). Examen objetivo: **lun 28 dic 2026**, centro Pearson VUE en Lima.
- **Estado:** ✅ plan definido, herramientas listas y **flujo probado de punta a punta** con M1 L1 (noche del 15 oct).
  Tras la prueba, el dueño pidió **simplificar**: él solo estudia y el agente hace toda la operación (§0).
- **Qué quedó de la prueba (M1 L1):**
  - Calentamiento: 2/5 (falló Budgets vs. CUR, EC2 «Elija 2» incompleta y Fiabilidad vs. Excelencia operativa).
  - Nota de M1 L1 **mejorada** y crudo archivado en `modulo-01-…/_crudo/leccion-01.md`.
  - Banco `modulo-01-…/practicas/leccion-01.js` (**16 preguntas**, 23 min): el dueño lo respondió en Chrome vía `file:///`
    (abre bien), pero el **resultado no llegó a Descargas** (el simulador de esa pestaña aún pedía «Guardar resultado»).
    Ese intento **no cuenta**: el banco se da de nuevo el sábado.
- **Pendientes para el agente al retomar:**
  1. Si hay un `aws-resultado-*-m01-l01.json` en Descargas, procesarlo como «listo»; si no, abrir `leccion-01.js` en
     Chrome cuando toque (no hace falta volver a ver la lección M1 L1).
  2. **Primera descarga automática del resultado** sin verificar en Chrome real: confirmarla en esa práctica.
  3. El dueño debe **explicar en una línea Excelencia operativa vs. Fiabilidad** (segundo fallo del par, regla de §5).
     Pedírselo en el calentamiento si no lo hizo.
  4. Las descripciones de M6–M13 en `portal.json` son provisionales: ajustarlas al llegar a cada módulo.
- **Siguiente (sesión 1 de estudio: sáb 2026-10-17, 10:00–12:00):**
  1. «retomemos AWS» → calentamiento de 5 (incluir los 3 fallos de la prueba).
  2. Skill Builder: *Exam Prep Plan Overview* (15 min) + *Exam Prep Overview* (20 min).
  3. **Official Practice Question Set** (20 preguntas, 30 min) como **línea base honesta**; el dueño dice el puntaje en el chat y va a §8.
  4. Práctica de **M1 L1** (banco ya hecho) → «listo».
  5. Seguir con **M1 L2** con el flujo de §0.
- **Historial de la preparación (cerrado 2026-10-15):** agenda de 8 decisiones (días, simulador, proporciones, reglas de
  control, suscripción, logística, portal y domingo ligero), todas registradas en §5–§10 y §12; `CLAUDE.md` de tutor,
  simulador, portal, visor y scripts hechos y probados. 2026-10-15 (noche): prueba con M1 L1 y flujo simplificado.

---

## 0. Tu flujo, paso a paso (lo que haces tú) — vigente desde 2026-10-16

Tu trabajo es **solo estudiar**. Abrir el navegador, guardar resultados, actualizar este plan y hacer commit lo hace
el agente. Solo escribes **tres frases** en el chat: «retomemos AWS», «terminé M_ L_» y «listo».

### A. Al empezar el día (10:00)
1. Abre la app de Claude (pestaña Code) en la carpeta `C:\workspace\LEARNING\NOTES\aws-certifications-notes`.
2. Escribe **`retomemos AWS`**.
3. El agente te dice la meta del día y te pone **5 preguntas** en el chat.
4. Respóndelas en **un solo mensaje**: `1B 2C 3AC 4D 5A`. Si una dice «Elija 2», pon las dos letras juntas (`AC`).
5. Lee la corrección. Si el agente te pide explicar una diferencia en una línea, respóndela.

### B. Por cada lección (se repite 1–2 veces por sesión)
6. En **skillbuilder.aws**, abre *AWS Cloud Practitioner Essentials* → la lección que toca. Lee el texto, mira el video
   y haz la **comprobación de conocimientos** si la tiene.
7. Abre `_entrada\leccion.md` (Bloc de notas o VS Code) y llena:
   - Primera línea: el número, por ejemplo `# Entrada de lección — M1 L2`.
   - **Comprobación:** puntaje y cuáles fallaste.
   - **Dudas:** lo que no quedó claro (o «ninguna»).
   - **M6 a M13, además:** copia y pega el **texto de la lección** y la **transcripción del video**.
   - Capturas (Win + Shift + S): guárdalas en la carpeta `_entrada\`. No hace falta renombrarlas.
   - Guarda con **Ctrl + S**.
8. Escribe en el chat **`terminé M1 L2`** (con el módulo y la lección que hiciste).
9. Espera 2–3 min: el agente mejora la nota, genera la práctica y **te abre la práctica en Chrome**.
10. Lee la nota si quieres (el agente te dice dónde está; también sale en el portal).
11. En Chrome: pulsa **«Empezar modo examen»**, responde sin mirar apuntes (usa «Marcar para revisión» en las dudosas),
    luego **«Revisar y enviar»** → **«Enviar examen»**. El resultado **se descarga solo**.
12. Escribe en el chat **`listo`**.
13. Lee la explicación de **las que fallaste**. El agente registra el puntaje y hace el commit.
14. Si sacaste **menos de 80 %**: en la pantalla de resultado pulsa «Reintentar falladas» (modo estudio). Puede ser
    en ese momento, en el celular o el domingo.

### C. Al terminar el día
15. Nada obligatorio: el agente ya cerró después de tu último «listo». Si te vas sin haber escrito «listo», escribe **`cerremos`**.
16. **Publicar (cuando quieras, opcional):** en una terminal en la carpeta del repo, `git push origin master`.
    En ~1 min la web (https://devforall.github.io/aws-certifications-notes/) muestra notas, prácticas y resultados para el celular.

### D. Domingos (día ligero, sin lecciones nuevas)
17. `retomemos AWS` → el agente te abre el **simulacro de módulo** si un módulo cerró en la semana (20 preguntas, 28 min).
    Lo das igual que el paso 11 y escribes `listo`.
18. Luego, el agente te pone 5–10 preguntas del cuaderno de errores en el chat y te indica qué «Reintentar falladas» hacer.

### E. Formaciones oficiales de Skill Builder (no son lecciones de Essentials)
19. Las das directamente en Skill Builder cuando el plan lo indique (Official Practice Question Set el sáb 17;
    Domain Reviews desde el 17 dic) y **escribes el puntaje en el chat**, por ejemplo «línea base 13/20». No usan `_entrada`.

### F. Fechas en que tú decides o pagas algo
20. **~10 nov**, si el simulacro completo tras M5 sale ≥ 75 %: reservar el examen (100 USD, Pearson VUE Lima, 28 dic) (§10).
21. **17 dic**, al cerrar M13: contratar 1 mes de suscripción de Skill Builder (~29 USD) y **ese mismo día apagar la
    renovación automática** (§7).

### Si algo falla
- **La práctica no se abrió en Chrome:** dilo en el chat; el agente te da una dirección `file:///…` para pegar en la barra de Chrome.
- **El resultado no apareció en Descargas:** en la pantalla de resultado pulsa «Descargar de nuevo» o «Copiar resultado» y pégalo en el chat.
- **Se acabaron las 2 h a mitad de la práctica:** cierra Chrome sin miedo; el intento y el cronómetro quedan guardados.
  Al volver a abrirla, pulsa «Continuar».
- **No pudiste estudiar un día:** no se recupera ese día; el domingo puede usarse como sesión completa (§5).

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
| 1 Introducción a la nube | ✅ notas + evaluaciones | 🔄 L1: nota y banco listos, práctica pendiente |
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

> Versión para el dueño, paso a paso: §0. Esta sección guarda las reglas y el detalle de cada pieza.

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
| 4 | Agente | Genera el **banco** de la lección (`practicas/`) y **abre la práctica en Chrome** él mismo | 2–3 min |
| 5 | Dueño | Da la práctica en el **simulador**, con cronómetro, **sin pistas**, y pulsa «Enviar examen» (el resultado se descarga solo) | ~35 min |
| 6 | Dueño → agente | Escribe «listo» en el chat | — |
| 7 | Agente | Explica **solo las falladas** (por qué la correcta y por qué no las demás), registra puntaje (§8) y errores (§9) y hace el cierre (commit) | 10–15 min |

**Flujo simplificado (decisión del dueño 2026-10-15, tras la prueba con M1 L1):** el dueño solo estudia. Sus acciones
se reducen a llenar `_entrada/leccion.md`, escribir «terminé M_ L_», responder la práctica y escribir «listo».
Abrir el navegador, guardar el resultado, actualizar el plan y hacer commit pasan al agente o al simulador.

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
- **Resultado sin copiar y pegar (decisión del dueño 2026-10-15):** al pulsar «Enviar examen» el simulador **descarga solo**
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
  ~80 % del módulo + ~20 % de módulos anteriores. Se da el **domingo ligero** siguiente al cierre del módulo
  (si el módulo cierra y faltan más de 2 días para el domingo, al empezar la sesión siguiente).
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

### Día ligero: domingos (decisión del dueño 2026-10-15, punto 8)
- Sin lecciones nuevas. Misma hora (10:00), menos de 2 h si se termina antes.
- Contenido, en orden: (1) **simulacro de módulo** pendiente si un módulo cerró en la semana; (2) «Reintentar
  falladas» en modo estudio de las prácticas de la semana; (3) repaso del cuaderno de errores (§9) con 5–10 preguntas
  en el chat.
- Si se perdió una sesión en la semana, el domingo se puede usar para recuperarla (pasa a ser sesión completa).

### Cierre (automático)
1. **Agente**, tras corregir cada práctica («listo»): actualiza «Dónde quedamos», el avance (§4), puntajes (§8) y
   errores (§9), corre `actualizar-indice.py` y hace commit. «cerremos» queda solo para forzar el cierre.
2. **Dueño:** hace `git push origin master` cuando quiera (con el push se actualiza la web).

### Dónde se guarda cada cosa

| Qué | Dónde | ¿Se publica en GitHub? |
|---|---|---|
| Entrada de la lección en curso (texto, transcripción, capturas) | `_entrada/leccion.md` + imágenes en `_entrada/` | No (`.gitignore`) |
| Transcripciones y texto crudo de cada lección ya procesada | `cloud-practitioner/modulo-0N-…/_crudo/` | No (en `.gitignore`: es contenido de AWS) |
| Nota de cada lección | `cloud-practitioner/modulo-0N-…/Lección N - Título.md` (se mejora la existente) | Sí |
| Banco de 15–25 preguntas de cada lección | `cloud-practitioner/modulo-0N-…/practicas/leccion-NN.js` | Sí |
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
- **Decisiones 2026-10-15 (punto 7):** el repo es **público** y se publica **todo lo propio**: notas, bancos,
  simuladores y **resultados de cada intento** (el dueño repasa a otras horas y desde otros dispositivos).
  Solo quedan fuera `_entrada/` y `_crudo/` (texto y transcripciones copiados de Skill Builder: contenido de AWS).
  Las notas se **renderizan en el navegador desde el `.md`** (sin generar HTML); `generate-notes.ps1` y los
  `leccion-NN-notas.html` viejos quedan como archivo. Cómo funciona todo: §12.

Ritmo estimado con 25 preguntas: **~1,6 lecciones por sesión** (M1–M5 algo más rápido porque ya hay notas).

Reglas que se mantienen del `GEMINI.md`: seguridad DE la nube (AWS) vs EN la nube (cliente);
resaltar opción más barata y plan de soporte mínimo; analogías de la vida real; explicar siglas;
resaltar Service Limits / Quotas; incluir IA generativa y gobernanza.

## 6. Calendario (desde 2026-10-17, 2 h por sesión, 25 preguntas por lección + simulacro por módulo)

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

### Calendario fijado (decisiones del dueño 2026-10-15: **7 días por semana** con **domingo ligero**, inicio **sábado 2026-10-17**)

Lunes a sábado: sesión completa. **Domingo: día ligero** (ver §5 «Día ligero»). Las sesiones se cuentan sin domingos.

| Sesiones completas | Fechas | Fase |
|---|---|---|
| 1 | sáb 17 oct | Fase 0: overviews + línea base + inicio M1 |
| 2–21 | 19 oct – 10 nov | Fase 1A: M1–M5 (+ completo tras M5) |
| 22–52 | 11 nov – 16 dic | Fase 1B: M6–M13 (+ completo tras M11) |
| 53–59 | 17 – 24 dic | Fases 2 y 3: Domain Reviews + 3 simulacros finales |
| 60–61 | 25 – 26 dic | Colchón (el 25 es Navidad: en la práctica, ~1 día útil) |
| — | dom 27 dic | Día ligero: repaso del cuaderno de errores, sin preguntas nuevas |
| — | **lun 28 dic 2026** | **Fecha objetivo del examen** (antes era el 22 dic; se corrió por el domingo ligero) |

- Colchón corto (~1–2 sesiones). Si se pierden más, el examen pasa a la primera semana de enero de 2027
  (evitar el 31 dic) usando una reprogramación gratis (§10). No se recorta la Fase 3.
- Hitos de control: si al **10 nov** no está cerrado M5, o al **16 dic** no está cerrado M13, se recalcula la fecha.
- Reserva del examen: tras el simulacro completo de M5 (~10 nov), ver §10.

## 7. Suscripción de Skill Builder — decidido 2026-10-15: **1 mes, un solo pago**

- **Precio:** ~29 USD/mes según fuentes de terceros (búsqueda 2026-10-15); confirmar en la página de AWS antes de pagar.
- **Disparador exacto (no es una fecha):** se activa **el día en que empieza la Fase 2**, es decir, la sesión siguiente
  a cerrar M13 con su simulacro de módulo ≥ 75 %. En el calendario: **jue 17 dic 2026**. Si hay atraso, la activación
  se corre con él; **nunca antes de cerrar M13**.
- **Mismo día de la compra: desactivar la renovación automática** (el acceso suele seguir hasta el fin del periodo
  pagado; confirmarlo en la página al contratar). Esto es lo que evita un segundo cobro.
- **Uso dentro del mes, en orden:**
  1. Primera sesión de Fase 2: **Official Pretest** (65 preg., 90 min) → resultado por dominio.
  2. Sesiones de Fase 2: Domain Review (gratis) + **Domain Practice** solo de los 1–2 dominios más bajos del Pretest.
  3. Fase 3, 3–5 días antes del examen: **Official Practice Exam** como filtro final (meta ≥ 750).
  4. Examen dentro del mismo mes.
- **Margen:** de la activación (17 dic) al examen (28 dic) son ~11 días de un mes de ~30. **Un segundo mes solo si el examen se corre más de
  20 días desde la activación**, y sería el último; no se paga un tercero.
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
| 2026-10-15 | Excelencia Operativa vs Fiabilidad (**2.ª vez**, calentamiento) | Excelencia operativa = operar y mejorar procesos (automatizar, monitorear, cambios pequeños). Fiabilidad = recuperarse de fallos y seguir disponible | «se recupera automáticamente», «caída de una AZ» → Reliability |
| 2026-10-15 | Budgets con Cost and Usage Report (calentamiento) | CUR = informe detallado de datos crudos hacia S3, no alerta. Budgets = alertas por umbral real o previsto | «alerta», «previsto», «umbral» → Budgets |
| 2026-10-15 | «Elija 2» con una sola letra (calentamiento) | En respuesta múltiple no hay puntaje parcial: hay que marcar exactamente las N pedidas | «Elija 2 / Elija 3» → contar las marcadas |

## 10. Logística del examen — decidido 2026-10-15

- **Dónde:** Pearson VUE, **centro de evaluación en Lima** (decisión del dueño): equipo e internet del centro.
  Llevar identificación y llegar ~30 min antes. Elegir el centro al reservar.
- **Cuándo reservar:** **tras el simulacro completo de M5 con ≥ 75 %** (previsto ~mar 10 nov), para el
  **lun 28 dic 2026**: ~7 semanas antes, con cupo asegurado cerca de las fiestas.
- **Reprogramación (según re:Post, búsqueda 2026-10-15; confirmar en la página oficial al reservar):** cambio o
  cancelación **sin costo hasta 24 h antes**, **máximo 2 reprogramaciones** por cita; dentro de las 24 h o si no se
  asiste, se pierde la tarifa.
- **Uso de las reprogramaciones:** si al 16 dic M13 no está cerrado (hito de §6), o el simulacro de M11 sale < 75 %,
  se reprograma en ese momento, nunca a última hora. Con el Official Practice Exam < 750 (3–5 días antes), también.
- **Cuenta:** se reserva desde la cuenta de AWS Certification (AWS Training & Certification), en **español LATAM**.
- **Documento:** identificación oficial vigente con el mismo nombre que la cuenta de certificación.
- **Costo:** 100 USD. Verificar si hay descuentos vigentes (vouchers de eventos de AWS) antes de pagar.

## 11. Dónde está cada cosa

- Fuente cruda antigua (Obsidian, archivo histórico; ya no se escribe ahí): `C:\workspace\LEARNING\NOTES\CERTIFIED AWS CLOUD PRACTITIONER\`
- Material crudo nuevo de cada lección: `cloud-practitioner/modulo-0N-…/_crudo/` (no se publica)
- Este repo (portal + notas): `C:\workspace\LEARNING\NOTES\aws-certifications-notes\`
- Prompts anteriores: `C:\workspace\LEARNING\NOTES\PROMTS\GENERAR EXAMEN\` y `PROMTS\GEMINI-CLI\ESTUDIO\`
- Instrucciones de tutor: migradas a `CLAUDE.md` (el `GEMINI.md` de Obsidian queda como archivo).
- Recursos y enlaces: `C:\workspace\LEARNING\NOTES\NOTAS-ADICIONALES\AWS CLOUD PRACTITIONER.md`
- Sesiones de estudio: abrir Claude Code en esta carpeta, no en `hub-automations`.

## 12. Cómo funciona todo (flujo técnico, definido 2026-10-15)

Este flujo pasa también al `CLAUDE.md` nuevo para que cualquier sesión del agente lo siga igual.

**Piezas del repo**

| Pieza | Qué es |
|---|---|
| `index.html` | Portal. No tiene entradas escritas a mano: lee `contenido.js` y arma la lista de módulos, lecciones, prácticas y resultados |
| `contenido.js` | Índice de todo lo publicable (notas `.md`, bancos `.js`, resultados `.json`). Lo **regenera un script** del agente (`actualizar-indice.py`) en cada cierre |
| `visor/` | Página única que recibe `?nota=<ruta del .md>`, lo convierte a HTML en el navegador (librería Markdown desde CDN) y muestra la nota |
| `simulador/` | Motor único: `?banco=<ruta del .js>` para practicar; `?resultado=<ruta del .json>` para abrir un intento pasado y repasar sus falladas |
| `cloud-practitioner/modulo-0N-…/` | Notas `.md` y `practicas/*.js` de cada módulo |
| `resultados/` | Un `.json` por intento, publicado |
| `_entrada/` · `…/_crudo/` | Material copiado de Skill Builder; **no se publica** |

**Recorrido de una lección**

1. El dueño ve la lección y pega texto, transcripción, comprobación y dudas en `_entrada/leccion.md` (capturas en `_entrada/`).
2. «terminé M_ L_» → el agente lee la entrada, mejora o crea la nota `.md` y mueve el crudo a `_crudo/`.
3. El agente corre `listar-preguntas.py`, genera `practicas/leccion-NN.js` (15–25 preguntas) y abre la práctica en Chrome.
4. El dueño practica en modo examen y pulsa «Enviar examen» → el `.json` se descarga solo → escribe «listo».
5. El agente mueve el `.json` a `resultados/`, explica las falladas y anota §8 y §9.
6. En el mismo paso, el agente actualiza el plan, corre `actualizar-indice.py` y hace commit («cerremos» solo lo fuerza).
7. El dueño hace `git push origin master` → GitHub Pages publica en ~1 min: nota, práctica y resultado
   quedan disponibles desde el celular (repasar la nota, reintentar en modo estudio, revisar el intento).

## Fuentes (consultadas 2026-10-13 / 2026-10-15)

- Guía oficial CLF-C02: https://d1.awsstatic.com/training-and-certification/docs-cloud-practitioner/AWS-Certified-Cloud-Practitioner_Exam-Guide.pdf
- Nuevo Cloud Practitioner Essentials (13 módulos, 2025-06-24): https://aws.amazon.com/blogs/training-and-certification/new-aws-cloud-practitioner-essentials/
- Certificación: https://aws.amazon.com/certification/certified-cloud-practitioner/
- Cloud Quest (rol Cloud Practitioner gratis): https://aws.amazon.com/training/digital/aws-cloud-quest/
- Suscripciones de Skill Builder: https://aws.amazon.com/blogs/aws/new-aws-skill-builder-subscriptions
- Lista de formaciones del Exam Prep Plan: capturas del dueño, 2026-10-15
