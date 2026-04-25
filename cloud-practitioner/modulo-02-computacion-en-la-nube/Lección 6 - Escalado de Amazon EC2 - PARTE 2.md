# Módulo 2 - Lección 6: Escalado de Amazon EC2 (Parte 2)

## 🎯 Resumen Ejecutivo (Valor de Negocio)
Esta lección profundiza en la **elasticidad** de AWS. El objetivo es que una empresa nunca pague por capacidad que no usa ni pierda clientes por falta de recursos. El servicio estrella es **Amazon EC2 Auto Scaling**, que ajusta la flota de servidores automáticamente basándose en datos reales de **Amazon CloudWatch**.

---

## 💡 Conceptos Clave

### 1. Direcciones del Escalado (Probabilidad: **ALTA**)
| Concepto | Definición Técnica | Analogía de la Cafetería | Dirección |
| :--- | :--- | :--- | :--- |
| **Escalado Horizontal** | Añadir o quitar **más instancias** (nodos) al grupo. | Contratar más baristas idénticos para atender más filas. | **Scale Out** (Añadir) / **Scale In** (Quitar) |
| **Escalado Vertical** | Aumentar la **potencia** (CPU/RAM) de una instancia existente. | Que el barista tome esteroides para ser más rápido (tiene un límite físico). | **Scale Up** (Aumentar) / **Scale Down** (Reducir) |

> **Regla de Oro:** En AWS, el **Escalado Horizontal** es la base de la Alta Disponibilidad (HA).

### 2. Amazon EC2 Auto Scaling
Servicio que automatiza el mantenimiento de la disponibilidad de las aplicaciones.
- **Capacidad Mínima:** Cuántas instancias deben estar vivas siempre (ej. 1 para no morir).
- **Capacidad Deseada:** El número ideal en condiciones normales (ej. 2).
- **Capacidad Máxima:** El tope para proteger el presupuesto (ej. 10).
- **Launch Template:** El "plano" o receta que dice qué AMI, tipo de instancia y Security Group usar al crear nuevas instancias.

### 3. Amazon CloudWatch (El Monitor)
Es el servicio de monitoreo que observa las métricas.
- **Métrica:** El dato (ej. "El CPU está al 80%").
- **Alarma:** El disparador (ej. "¡Si el CPU supera el 80% por 5 min, avísale a Auto Scaling!").

---

## 📊 Tabla Comparativa: Estrategias de Escalado

| Estrategia | ¿Cómo funciona? | Caso de Uso |
| :--- | :--- | :--- |
| **Dynamic Scaling** | Responde a cambios en tiempo real. | Un pico inesperado de tráfico por un tweet viral. |
| **Predictive Scaling** | Usa **Machine Learning** para predecir picos futuros. | Una tienda que sabe que los viernes a las 6 PM siempre hay más tráfico. |
| **Scheduled Scaling** | Basado en una fecha/hora fija. | Ofertas de Black Friday conocidas de antemano. |

---

## 📍 Puntos Críticos (Keywords para el Examen)

*   **Escalado Independiente:** Puedes escalar el Frontend (toma de pedidos) separado del Backend (preparación de café) para no gastar dinero donde no es necesario.
*   **Scale In (Ahorro):** Es igual de importante que el Scale Out. Apagar instancias cuando no hay tráfico es el núcleo del ahorro en la nube.
*   **Cooldown Period:** Tiempo de espera tras una acción de escalado para que el sistema se estabilice antes de tomar otra decisión.

---

## ⚠️ Trampas de Examen (No confundir)

1.  **¿Quién hace qué?:** 
    *   **CloudWatch:** Solo vigila y da la alarma. **NO** crea instancias.
    *   **Auto Scaling:** Es el que ejecuta la acción de crear o destruir instancias.
2.  **S3 vs EC2 Auto Scaling:** S3 NO escala instancias (es almacenamiento). El auto-escalado de cómputo es exclusivo de **EC2 Auto Scaling**.
3.  **Métricas de Escalado:** El uso de CPU y la Latencia son las métricas más comunes para disparar alarmas.
4.  **Tolerancia a Fallos:** Si una instancia falla, Auto Scaling la detecta como "unhealthy" (insalubre), la termina y lanza una nueva automáticamente para mantener la **Capacidad Deseada**.

---

## 📚 Información Adicional (Actualización CLF-C02)
*   **Launch Templates vs Launch Configurations:** AWS recomienda usar **Launch Templates** porque permiten versionamiento y usar múltiples tipos de instancias (Spot + On-Demand) en un mismo grupo.
*   **Elasticity vs Scalability:** La escalabilidad es poder crecer; la elasticidad es hacerlo de forma **automática y bidireccional** (crecer y achicar).
