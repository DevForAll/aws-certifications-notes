# Plan de estudio — AWS Certified Cloud Practitioner (CLF-C02)

> Creado: 2026-10-13 · Actualizado: 2026-10-15 (sesiones con Claude Code).
> Objetivo: aprobar el CLF-C02 **en español** antes de fin de 2026, primer paso hacia AWS Solutions Architect.
> Este archivo es el punto de retorno entre sesiones: al empezar, leer «Dónde quedamos»; al cerrar, actualizarlo.

## Dónde quedamos

- **Fecha:** 2026-10-15
- **Hecho:** plan confirmado con la captura del Exam Prep Plan, horario y decisiones (ver §2 y §6).
- **Pendiente del dueño:** confirmar **qué días** de la semana estudia (el calendario asume 5 sesiones/semana).
- **Siguiente (sesión 1, sábado 2026-10-18, 10:00–12:00):**
  1. Migrar `GEMINI.md` → `CLAUDE.md` de estudio (lo hace el agente al abrir la sesión, ~10 min).
  2. Ver *Exam Prep Plan Overview* (15 min) + *Exam Prep Overview* (20 min) en Skill Builder.
  3. Dar el **Official Practice Question Set** (20 preguntas, 30 min) como **línea base honesta** y registrar el puntaje en §8.
  4. Empezar Módulo 1, Lección 1 de Essentials con el método de §5.

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

## 5. Método por sesión (2 h, 10:00–12:00)

Por lección:

1. **Skill Builder:** el dueño ve la lección (video + texto).
2. **Recuerdo activo:** el agente hace 3 preguntas antes de mostrar notas.
3. **Notas** con el formato MODO 1 (resumen, conceptos, tabla comparativa, puntos críticos,
   trampas, diccionario de servicios con palabras gatillo). M1–M5: se parte de la nota existente.
   M6–M13: el dueño pasa transcripción y capturas (o se prueba leerlas con el navegador integrado,
   con sesión iniciada por el dueño).
4. **Práctica de 10–15 preguntas** en español: 70 % de la lección + 30 % de módulos anteriores;
   distractores reales de la misma categoría; ~15 % respuesta múltiple.
5. **Cuaderno de errores** y **registro de puntaje** (§8, §9).

Ritmo estimado: **M1–M5 ≈ 3 lecciones por sesión** (ya hay notas); **M6–M13 ≈ 2 lecciones por sesión**.

**Simulacros:**
- Fin de cada módulo: 20 preguntas.
- Cada 3 módulos: 30 preguntas ponderadas por dominio.
- Fase 3: 3 simulacros completos (65 preguntas / 90 min, cronometrados, en español).
- **Programar el examen** al sacar ≥ 80 % en dos simulacros completos seguidos
  (y ≥ 750 en el Official Practice Exam si se contrata la suscripción).

Reglas que se mantienen del `GEMINI.md`: seguridad DE la nube (AWS) vs EN la nube (cliente);
resaltar opción más barata y plan de soporte mínimo; analogías de la vida real; explicar siglas;
resaltar Service Limits / Quotas; incluir IA generativa y gobernanza.

## 6. Calendario (desde 2026-10-18, 2 h por sesión, asume 5 sesiones/semana)

| Semanas | Fase | Qué |
|---|---|---|
| 18 oct | 0 | Overviews + Official Practice Question Set (línea base) + inicio M1 |
| 19 oct – 4 nov | 1A | Essentials M1–M5 (~11 sesiones) + simulacro acumulado M1–M5 |
| 5 nov – 9 dic | 1B | Essentials M6–M13 (~24 sesiones), simulacro cada 3 módulos; Cloud Quest según módulo |
| 10 – 16 dic | 2 | Domain 1–4 Review (gratis) + práctica de 30 preg. por dominio + simulacros completos 1 y 2 |
| 17 – 21 dic | 3 | Simulacro 3 (+ Official Practice Exam si hay suscripción) → **examen** |
| 22 – 31 dic | — | Colchón para reprogramar |

**Lectura honesta:** con 5 sesiones de 2 h por semana, llegar a diciembre es **justo**, casi sin colchón.
Con 6 sesiones por semana el examen pasa a ~12 dic; con 7, a ~5 dic. Si se pierden más de 4 sesiones,
el examen pasa a la primera quincena de enero de 2027. Mejor eso que presentarse sin llegar al 80 %.

## 7. Suscripción de Skill Builder (decisión del dueño, recomendada)

- **Recomendación:** **1 mes** de suscripción individual (~29 USD/mes; verificar precio antes de pagar)
  activado al **inicio de la Fase 2** (~10 dic), no antes.
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
