## 🎯 Resumen Ejecutivo (Valor de Negocio)
La computación tradicional obliga a las empresas a "adivinar" su capacidad futura, lo que resulta en gastos excesivos (capacidad ociosa) o clientes insatisfechos (falta de recursos). AWS resuelve esto mediante la **Elasticidad**. 
**Analogía de la Cafetería:** Si Anabel (una instancia) toma pedidos y César (otra instancia) prepara café, el éxito del negocio depende de tener suficientes baristas cuando hay fila, pero no pagarles cuando la tienda está vacía. AWS permite añadir "baristas virtuales" (instancias) instantáneamente según la demanda real, optimizando el **ahorro de costos** y la **satisfacción del cliente**.

---
## 💡 Conceptos Clave

| Concepto                           | Definición Técnica                                                                                                                     | Probabilidad |
| :--------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------- | :----------- |
| **Escalabilidad**                  | Capacidad de un sistema para manejar una carga creciente de trabajo.                                                                   | **Alta**     |
| **Elasticidad**                    | Capacidad de ajustar **automáticamente** los recursos (crecer/achicar) según la demanda real para optimizar costos.                    | **Alta**     |
| **Alta Disponibilidad (HA)**       | Garantiza que el sistema esté operativo y accesible la mayor parte del tiempo (Uptime), incluso si fallan componentes.                 | **Alta**     |
| **Tolerancia a Fallos (FT)**       | Capacidad de un sistema de seguir funcionando sin **ninguna** interrupción ni degradación ante un fallo. (Cero tiempo de inactividad). | **Media**    |
| **Punto Único de Falla (SPOF)**    | Un componente que, si falla, detiene todo el sistema (ej: tener un solo "tomador de pedidos").                                         | **Alta**     |
| **Aprovisionamiento Programático** | Uso de código o scripts para crear instancias idénticas de forma rápida y consistente.                                                 | **Media**    |

---
## 📊 Tabla Comparativa: Planificación de Capacidad

| Característica         | Modelo Tradicional (On-Premises)              | Modelo AWS (Nube)                         |
| :--------------------- | :-------------------------------------------- | :---------------------------------------- |
| **Enfoque**            | Planificar para el "Pico Máximo" (Peak).      | Planificar para la "Demanda Exacta".      |
| **Costo**              | Alto CapEx (Inversión inicial en hardware).   | Bajo OpEx (Pago por uso / Pay-as-you-go). |
| **Riesgo**             | Capacidad ociosa (pérdida $) o falta de ella. | Elasticidad total; sin desperdicio.       |
| **Tiempo de Reacción** | Semanas o meses para comprar hardware.        | Minutos o segundos (Automatizado).        |

---

## 📍 Puntos Críticos (Keywords para el Examen)

*   **Diseño para el Fallo (Design for Failure):** Filosofía de AWS que asume que todo puede fallar. La solución es siempre la **Redundancia**.
*   **Múltiples AZs (Zonas de Disponibilidad):** Es una **Mejor Práctica** de arquitectura. Si una AZ falla (por un desastre físico), la otra asume la carga. Esto es lo que permite la **Alta Disponibilidad**.
*   **Scaling Out vs. Scaling In:**
    *   **Scaling Out:** Añadir instancias para manejar el aumento de tráfico.
    *   **Scaling In:** Eliminar instancias cuando el tráfico baja para **ahorrar costos**.
*   **Responsabilidad Compartida:** AWS es responsable de la infraestructura de las AZs (**Seguridad DE la nube**), pero el cliente es responsable de configurar la redundancia y el auto-escalado (**Seguridad EN la nube**).

---

## ⚠️ Trampas de Examen (No confundir)

1.  **Escalabilidad vs. Elasticidad:** 
    *   *Realidad:* La **Escalabilidad** es la infraestructura capaz de crecer; la **Elasticidad** es el proceso automático de crecer y **achicar** según la necesidad del negocio.
2.  **Escalado Vertical vs. Horizontal:**
    *   **Vertical (Scale Up/Down):** Cambiar el tamaño de la instancia (ej. de t3.micro a t3.large). Tiene un límite y causa downtime breve.
    *   **Horizontal (Scale Out/In):** Añadir o quitar más instancias. Es el método preferido para **Alta Disponibilidad**.
3.  **HA vs. Tolerancia a Fallos (FT):**
    *   **HA (Alta Disponibilidad):** Se enfoca en que el servicio esté "arriba". Puede haber una interrupción mínima casi imperceptible. Es balanceado en costo.
    *   **FT (Tolerancia a Fallos):** Se enfoca en **cero interrupción**. Si algo falla, hay otro componente idéntico trabajando en paralelo. Es extremadamente caro.
4.  **SPOF (Single Point of Failure):** Si la pregunta menciona "un solo servidor web" o "una sola base de datos", la respuesta suele estar relacionada con eliminar el SPOF mediante redundancia en múltiples AZs.

---

## 📚 Información Extra (Actualización CLF-C02)
*   **Amazon EC2 Auto Scaling:** Servicio que automatiza la **Elasticidad**. Se asegura de que tengas el número correcto de instancias.
*   **Elastic Load Balancing (ELB):** Distribuye el tráfico entrante entre múltiples instancias en varias AZs, evitando que una sola se sature y mejorando la HA.
*   **Cost-Effectiveness:** La elasticidad es el beneficio #1 para el ahorro de costos en EC2, ya que evita el pago por capacidad ociosa.
