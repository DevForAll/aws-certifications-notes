# Plan de estudio — AWS Certified Cloud Practitioner (CLF-C02)

> Creado: 2026-10-13 · Actualizado: 2026-10-15 (sesiones con Claude Code).
> Objetivo: aprobar el CLF-C02 **en español** antes de fin de 2026, primer paso hacia AWS Solutions Architect.
> Este archivo es el punto de retorno entre sesiones: al empezar, leer «Dónde quedamos»; al cerrar, actualizarlo.

## Dónde quedamos

- **Fecha:** 2026-10-15
- **Hecho:** plan confirmado con la captura del Exam Prep Plan, horario, decisiones (§2, §6) y flujo de trabajo por sesión (§5).
  Decisión del dueño (2026-10-15): **30 preguntas por lección, lo más real posible** (§5). Con eso el examen pasa a enero de 2027 salvo que se estudie 6–7 días por semana (§6).
- **Pendiente del dueño:** confirmar **qué días** de la semana estudia (define la fecha del examen, ver §6).
- **Antes de la sesión 1 (lo hace el agente, fuera del horario de estudio):**
  1. Migrar `GEMINI.md` → `CLAUDE.md` de estudio.
  2. Construir el **motor del simulador** (`simulador/`, ver §5) y probarlo con un banco de ejemplo.
  3. Hacer que el portal descubra solo lecciones, prácticas y simuladores.
- **Siguiente (sesión 1, sábado 2026-10-18, 10:00–12:00):**
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
- Cloud Quest va como laboratorio de cierre de módulo cuando haya una tarea relacionada (el agente indica cuál).

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

### Ciclo por lección (~70–85 min)

| Paso | Quién | Qué | Tiempo |
|---|---|---|---|
| 1 | Dueño | Ve la lección en Skill Builder (texto + video) y hace su **comprobación de conocimientos** | 15–20 min |
| 2 | Dueño → agente | Escribe «terminé M_ L_» y pasa los datos de la tabla «Qué pasa el dueño» | 2 min |
| 3 | Agente | Entrega la **nota** (M1–M5: la existente mejorada; M6+: nueva). Dueño la lee | 5–10 min |
| 4 | Agente | Genera el **banco de 30 preguntas** de la lección (`practicas/`) y avisa que está listo | 2–3 min |
| 5 | Dueño | Da la práctica en el **simulador** (navegador), con cronómetro, **sin pistas** | ~40 min |
| 6 | Dueño → agente | Pulsa «Copiar resultado para Claude» y lo pega en el chat | 1 min |
| 7 | Agente | Explica **solo las falladas** (por qué la correcta y por qué no las demás), registra puntaje (§8) y errores (§9) | 10–15 min |

**Qué pasa el dueño en el paso 2:**

| Módulos | Datos |
|---|---|
| M1–M5 | Solo «terminé M_ L_» + resultado de la comprobación de Skill Builder (captura de las que falló) + dudas o algo nuevo que no esté en la nota |
| M6–M13 | Lo anterior **+ texto de la lección** (copiar y pegar la página) **+ transcripción del video** **+ capturas** de diagramas. Todo pegado directo en el chat |

Decisión 2026-10-15: **sin preguntas abiertas de recuerdo**. El examen es de opción múltiple; el tiempo va a preguntas tipo examen.
Excepción: si el dueño falla dos veces el mismo par de servicios, el agente pide explicar la diferencia en una línea.

### Práctica de lección: 30 preguntas, lo más real posible (decisión del dueño 2026-10-15)

**Contenido:**
- **30 preguntas por lección**, en español LATAM, términos clave en inglés como en el examen traducido.
- Mezcla: **~60 % de la lección + ~40 % acumulativo** de lecciones y módulos anteriores.
  Si la lección es corta, sube la parte acumulativa en vez de rellenar con preguntas repetidas o triviales
  (las variantes de la misma pregunta inflan el puntaje y dan falsa seguridad).
- Por estilo, como el examen: ~40 % escenarios de negocio («¿qué opción es la más rentable o con menos
  carga operativa?»), ~30 % identificación de servicios, ~30 % seguridad y arquitectura.
- **~85 % opción única (1 de 4) y ~15 % respuesta múltiple (2 de 5 o 3 de 6)**, indicando «Elija 2 / Elija 3».
- Distractores = servicios reales de la misma categoría. Enunciados con el largo y el tono del examen
  (contexto de empresa + requisito + pregunta), no definiciones de diccionario.
- Las preguntas no se repiten entre bancos.

**Formato (lo más parecido al examen real):**
- Se da en el **simulador HTML**, no en el chat.
- **Modo examen:** cronómetro de **42 min** (ritmo real: 90 min / 65 preg. ≈ 1,4 min por pregunta), **sin pistas
  ni feedback** mientras se responde, botón «Marcar para revisión», navegación entre preguntas y pantalla
  de revisión antes de enviar, como en Pearson VUE.
- **Al enviar:** puntaje, % por dominio, explicación de cada pregunta (correcta y por qué no las otras),
  botón «Reintentar falladas» y **«Copiar resultado para Claude»** (puntaje + IDs falladas + respuestas elegidas).
- Orden de preguntas y de opciones **aleatorio** en cada intento.
- **Modo estudio** (feedback inmediato) solo para repasar después, nunca en el primer intento.

**Motor reutilizable (para no gastar tokens ni tiempo):**
- `simulador/index.html` + `simulador/motor.js`: un único motor que se escribe una vez.
- Cada práctica es solo un archivo de datos: `cloud-practitioner/modulo-0N-…/practicas/leccion-NN.json`
  (preguntas, opciones, correctas, explicación, dominio). El simulador lo carga por URL
  (`simulador/?banco=…`), así que **funciona igual en la computadora y en el celular** desde GitHub Pages.
- El mismo motor sirve para los simulacros de 65 preguntas.

### Simulacros grandes
- Con 30 preguntas por lección se **elimina el simulacro de 20 de fin de módulo** (sería redundante).
- **Simulacro completo de 65 preguntas / 90 min** tras M3, M5, M8 y M11, con pesos por dominio
  (24/30/34/12) sobre lo visto hasta ahí.
- Fase 3: 3 simulacros completos finales, todos los dominios.
- **Programar el examen** al sacar ≥ 80 % en dos simulacros completos seguidos
  (y ≥ 750 en el Official Practice Exam si se contrata la suscripción).

### Cierre (5 min)
1. **Dueño:** «cerremos».
2. **Agente:** actualiza «Dónde quedamos», el avance (§4), puntajes (§8) y errores (§9); hace commit.
3. **Dueño:** hace `git push origin master` cuando quiera (con el push se actualiza la web).

### Dónde se guarda cada cosa

| Qué | Dónde | ¿Se publica en GitHub? |
|---|---|---|
| Transcripciones y texto crudo de cada lección | `cloud-practitioner/modulo-0N-…/_crudo/` | No (en `.gitignore`: es contenido de AWS) |
| Nota de cada lección | `cloud-practitioner/modulo-0N-…/Lección N - Título.md` (se mejora la existente) | Sí |
| Banco de 30 preguntas de cada lección | `cloud-practitioner/modulo-0N-…/practicas/leccion-NN.json` | Sí |
| Motor del simulador | `simulador/` | Sí |
| Simulacros de 65 preguntas | `cloud-practitioner/repaso-general/simulacro-NN.json` | Sí |
| Puntajes, cuaderno de errores, «Dónde quedamos» | Este archivo (§8, §9) | Sí |
| Evaluaciones antiguas de Gemini | Donde están; quedan como archivo, no se borran | Sí |
| Carpeta Obsidian `CERTIFIED AWS CLOUD PRACTITIONER` | Queda como archivo histórico; ya no se escribe ahí | — |

**Portal web (GitHub Pages): se mantiene** — el dueño repasa desde fuera de su computadora.
- Se actualiza solo: el portal lista lecciones, notas y prácticas sin editar entradas a mano (mejora previa a la sesión 1).
- Las prácticas se pueden **repetir desde el celular** en modo estudio para repasar.

Ritmo estimado con 30 preguntas: **~1,5 lecciones por sesión** (M1–M5 algo más rápido porque ya hay notas).

Reglas que se mantienen del `GEMINI.md`: seguridad DE la nube (AWS) vs EN la nube (cliente);
resaltar opción más barata y plan de soporte mínimo; analogías de la vida real; explicar siglas;
resaltar Service Limits / Quotas; incluir IA generativa y gobernanza.

## 6. Calendario (desde 2026-10-18, 2 h por sesión, con 30 preguntas por lección)

**Carga estimada:** ~77 lecciones (M1–M5 ≈ 29; M6–M13 ≈ 48) a ~1,5 lecciones por sesión ≈ **50 sesiones**,
+ 4 simulacros de 65 preguntas durante el curso + Fases 2 y 3 (~8 sesiones) ≈ **60 sesiones en total**.

| Sesiones por semana | Fin de Essentials | Examen aprox. |
|---|---|---|
| 5 | ~31 dic | **~mediados de enero 2027** |
| 6 | ~13 dic | ~fin de diciembre (sin colchón) |
| 7 | ~2 dic | ~mediados de diciembre |

**Lectura honesta:** con 30 preguntas por lección, «antes de fin de año» **solo se mantiene estudiando
6–7 días por semana**. Con 5 días, el examen pasa a enero de 2027. A cambio, se llega con ~2 300 preguntas
practicadas. Si se pierden sesiones, se corre la fecha; no se recorta la Fase 3.

| Fase | Qué |
|---|---|
| 0 | Sesión 1: Overviews + Official Practice Question Set (línea base) + inicio M1 |
| 1A | Essentials M1–M5 (~17 sesiones) + simulacro de 65 tras M3 y tras M5 |
| 1B | Essentials M6–M13 (~32 sesiones) + simulacro de 65 tras M8 y tras M11; Cloud Quest según módulo |
| 2 | Domain 1–4 Review (gratis) + simulacros completos finales 1 y 2 |
| 3 | Simulacro 3 (+ Official Pretest / Practice Exam si hay suscripción) → **examen** |

Las fechas exactas se fijan cuando el dueño confirme sus días de estudio.

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

## 10. Dónde está cada cosa

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
