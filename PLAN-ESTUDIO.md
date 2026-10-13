# Plan de estudio — AWS Certified Cloud Practitioner (CLF-C02)

> Creado: 2026-10-13 (sesión con Claude Code). Objetivo: aprobar el CLF-C02 antes de fin de 2026,
> primer paso hacia AWS Solutions Architect. Este archivo es el punto de retorno entre sesiones:
> al empezar, leer «Dónde quedamos»; al cerrar, actualizarlo.

## Dónde quedamos

- **Fecha:** 2026-10-13
- **Hecho:** revisión completa del material (Obsidian + este repo + prompts) y plan armado (este archivo).
- **Pendiente del dueño (responder para arrancar):**
  1. ¿Cuántas horas por semana reales? (el calendario asume 6–8 h)
  2. ¿Suscripción a Skill Builder o solo gratis?
  3. Captura del Exam Prep Plan para confirmar sus cursos.
  4. ¿Examen en español o en inglés?
- **Siguiente:**
  1. Migrar `GEMINI.md` → `CLAUDE.md` de estudio (mismo MODO 1 / MODO 2, ajustado al método nuevo).
  2. Diagnóstico de 40 preguntas sobre M1–M5 (ponderado por dominio).
  3. Laboratorio 0: cuenta AWS (capa gratuita) con MFA en root + alerta de AWS Budgets (la crea el dueño; el agente guía).

---

## 1. Datos del examen (guía oficial CLF-C02, v1.0)

| Dato | Valor |
|---|---|
| Preguntas | 65 (50 puntúan + 15 no puntuadas, no identificadas) |
| Duración | 90 min |
| Aprobación | 700 / 1000 (escala) |
| Tipos | Opción única (1 de 4) y respuesta múltiple (2+ de 5+) |
| Costo | 100 USD |
| Versión | CLF-C02 vigente; sin anuncio público de sucesor (búsqueda 2026-10-13) |

| Dominio | Peso |
|---|---|
| 1. Cloud Concepts | 24 % |
| 2. Security and Compliance | 30 % |
| 3. Cloud Technology and Services | 34 % |
| 4. Billing, Pricing, and Support | 12 % |

## 2. Recursos del Exam Prep Plan (por confirmar con captura)

1. **AWS Cloud Practitioner Essentials** — versión nueva de 13 módulos (jun-2025). Base teórica.
2. **AWS Cloud Quest: Cloud Practitioner** — laboratorios gamificados en consola real.
3. **Exam Prep Standard Course (CLF-C02)** — gratis; recorre los 4 dominios.
4. **Official Practice Question Set** — gratis; 20 preguntas formato real.
5. **Enhanced Course / Official Pretest / Practice Exam** — requieren suscripción.

Enlaces en `C:\workspace\LEARNING\NOTES\NOTAS-ADICIONALES\AWS CLOUD PRACTITIONER.md`.

## 3. Avance en Cloud Practitioner Essentials (al 2026-10-13)

| Módulo | Estado |
|---|---|
| 1 Introducción a la nube | ✅ notas + evaluaciones |
| 2 Computación en la nube (EC2, escalado, ELB, colas) | ✅ |
| 3 Servicios de computación (Lambda, contenedores) | ✅ |
| 4 Hacia la globalización | ✅ |
| 5 Redes | ⚠️ L1–L3 con evaluación; L4–L7 solo notas |
| 6 Storage | ❌ |
| 7 Databases | ❌ |
| 8 AI/ML and Data Analytics | ❌ |
| 9 Security | ❌ |
| 10 Monitoring, Compliance, and Governance | ❌ |
| 11 Pricing and Support | ❌ |
| 12 Migrating to the AWS Cloud | ❌ |
| 13 Well-Architected Solutions | ❌ |

Última actividad: 2026-05-22 / 2026-06-12 → ~4 meses sin estudiar.

## 4. Diagnóstico honesto

- ~38 % del curso hecho, pero lo que falta pesa más: Seguridad (30 %) y Facturación (12 %) están
  casi enteros en M9 y M11.
- **Debilidades ya detectadas** (M3 L5 – EVALUACION.md): responsabilidad compartida en EC2;
  CloudTrail vs Config vs Artifact; Budgets vs Cost Explorer; plan con TAM (solo Enterprise);
  pilares Well-Architected (Fiabilidad vs Excelencia Operativa).
- **Fallas del método anterior:** evaluaciones autorreferenciales (IA pregunta solo lo de tus notas);
  30 preguntas por lección cansa; tiempo gastado en el portal HTML que no suma puntos;
  puntajes sin registrar.

## 5. Método nuevo por lección (~60–75 min)

1. **Skill Builder:** ver la lección (video + texto), 15–20 min.
2. **Recuerdo activo:** 3 preguntas en el chat antes de ver las notas, 5 min.
3. **Notas** con el formato MODO 1 (resumen, conceptos, tabla comparativa, puntos críticos,
   trampas, diccionario de servicios con palabras gatillo).
4. **Mini laboratorio** cuando aplique (consola, CloudShell o Cloud Quest), 15–30 min.
5. **Práctica de 10–15 preguntas:** 70 % de la lección + 30 % de módulos anteriores;
   distractores reales de la misma categoría; ~15 % respuesta múltiple.
6. **Cuaderno de errores:** cada fallo → una «trampa» que reaparece en prácticas futuras.
   Puntaje registrado en la tabla de §7.

**Simulacros:**
- Fin de cada módulo: 20 preguntas.
- Cada 3 módulos: 30 preguntas ponderadas por dominio.
- Final: 3 simulacros completos (65 preguntas / 90 min, cronometrados).
- **Programar el examen** al sacar ≥ 80 % en dos simulacros completos seguidos.

Reglas que se mantienen del `GEMINI.md`: seguridad DE la nube (AWS) vs EN la nube (cliente);
resaltar opción más barata y plan de soporte mínimo; analogías de la vida real; explicar siglas;
resaltar Service Limits / Quotas; incluir IA generativa y gobernanza.

## 6. Calendario (asume 6–8 h/semana — ajustar al confirmar horas)

| Semana | Qué |
|---|---|
| 13–19 oct | Diagnóstico M1–M5 (40 preg.) + repaso dirigido + Lab 0 (cuenta, MFA, Budgets) + evals M5 L4–L7 |
| 20–26 oct | M6 Storage (S3, EBS, EFS, Glacier) |
| 27 oct–2 nov | M7 Databases + simulacro acumulado 1 (30 preg.) |
| 3–9 nov | M8 AI/ML y analítica (Bedrock, SageMaker, Athena…) |
| 10–16 nov | M9 Security (IAM, Shield, WAF, GuardDuty, KMS…) — el más pesado |
| 17–23 nov | M10 Monitoreo y gobernanza (CloudTrail, Config, Organizations) + simulacro 2 |
| 24–30 nov | M11 Precios y soporte |
| 1–7 dic | M12 Migración + M13 Well-Architected + Standard Course + Practice Question Set |
| 8–14 dic | Simulacros completos 1 y 2 → programar examen si ≥ 80 % |
| 15–21 dic | Simulacro 3 + **examen** |
| 22–31 dic | Colchón para reprogramar |

Cloud Quest en paralelo los fines de semana. Si no hay ~6 h/semana reales, apuntar a enero.

## 7. Registro de puntajes

| Fecha | Práctica | Preguntas | Aciertos | % | Temas fallados |
|---|---|---|---|---|---|
| | | | | | |

## 8. Cuaderno de errores (trampas)

| Fecha | Confundí… | Lo correcto | Palabra gatillo |
|---|---|---|---|
| 2026-05 | Config con CloudTrail | CloudTrail = quién hizo qué (API); Config = estado/cambios de configuración | «auditar llamadas API» → CloudTrail |
| 2026-05 | Budgets con Cost Explorer | Budgets = alertas a futuro; Cost Explorer = análisis de tendencias | «alerta al superar» → Budgets |
| 2026-05 | Parcheo SO en EC2 | Lo hace el cliente (IaaS) | «EC2 + sistema operativo» → cliente |
| 2026-05 | Plan con TAM | Solo Enterprise (y Enterprise On-Ramp con pool de TAM) | «TAM dedicado» → Enterprise |
| 2026-05 | Excelencia Operativa vs Fiabilidad | Fiabilidad = recuperarse de fallos, disponibilidad | «recuperación ante fallos» → Reliability |

## 9. Dónde está cada cosa

- Fuente cruda (Obsidian, con imágenes y transcripciones): `C:\workspace\LEARNING\NOTES\CERTIFIED AWS CLOUD PRACTITIONER\`
- Este repo (portal + notas): `C:\workspace\LEARNING\NOTES\aws-certifications-notes\`
- Prompts anteriores: `C:\workspace\LEARNING\NOTES\PROMTS\GENERAR EXAMEN\` y `PROMTS\GEMINI-CLI\ESTUDIO\`
- Instrucciones de tutor (a migrar a CLAUDE.md): `CERTIFIED AWS CLOUD PRACTITIONER\GEMINI.md`
- Sesiones de estudio: abrir Claude Code en esta carpeta, no en `hub-automations`.

## Fuentes (consultadas 2026-10-13)

- Guía oficial CLF-C02: https://d1.awsstatic.com/training-and-certification/docs-cloud-practitioner/AWS-Certified-Cloud-Practitioner_Exam-Guide.pdf
- Nuevo Cloud Practitioner Essentials (13 módulos, 2025-06-24): https://aws.amazon.com/blogs/training-and-certification/new-aws-cloud-practitioner-essentials/
- Certificación: https://aws.amazon.com/certification/certified-cloud-practitioner/
- Exam Prep Plan Standard vs Enhanced: https://tutorialsdojo.com/aws-cloud-practitioner-clf-c02-exam-guide/
