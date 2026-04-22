# Lección 6: Escalado de Amazon EC2 (Parte 1)

## 🎯 Resumen Ejecutivo (Valor de Negocio)
La computación tradicional obliga a las empresas a "adivinar" su capacidad futura, lo que resulta en gastos excesivos (capacidad ociosa) o clientes insatisfechos (falta de recursos). AWS resuelve esto mediante la **Elasticidad**. 
**Analogía de la Cafetería:** Si Anabel (una instancia) toma pedidos y César (otra instancia) prepara café, el éxito del negocio depende de tener suficientes baristas cuando hay fila, pero no pagarles cuando la tienda está vacía. AWS permite añadir "baristas virtuales" (instancias) instantáneamente según la demanda real, optimizando el **ahorro de costos** y la **satisfacción del cliente**.

---

## 💡 Conceptos Clave

| Concepto | Definición Técnica | Probabilidad |
| :--- | :--- | :--- |
| **Escalabilidad** | Capacidad de un sistema para manejar una carga creciente de trabajo. | **Alta** |
| **Elasticidad** | Capacidad de ajustar **automáticamente** los recursos (crecer o reducir) en respuesta a la demanda. | **Alta** |
| **Alta Disponibilidad (HA)** | Sistema diseñado para operar continuamente sin interrupciones perceptibles, mediante redundancia. | **Alta** |
| **Punto Único de Falla (SPOF)** | Un componente que, si falla, detiene todo el sistema (ej: tener un solo "tomador de pedidos"). | **Alta** |
| **Aprovisionamiento Programático** | Uso de código o scripts para crear instancias idénticas de forma rápida y consistente. | **Media** |

---

## 📊 Tabla Comparativa: Planificación de Capacidad

| Característica | Modelo Tradicional (On-Premises) | Modelo AWS (Nube) |
| :--- | :--- | :--- |
| **Enfoque** | Planificar para el "Pico Máximo" (Peak). | Planificar para la "Demanda Exacta". |
| **Costo** | Alto CapEx (Inversión inicial en hardware). | Bajo OpEx (Pago por uso / Pay-as-you-go). |
| **Riesgo** | Capacidad ociosa (pérdida $) o falta de ella. | Elasticidad total; sin desperdicio. |
| **Tiempo de Reacción** | Semanas o meses para comprar hardware. | Minutos o segundos (Automatizado). |

---

## 📍 Puntos Críticos (Keywords para el Examen)

*   **Redundancia:** No basta con tener una instancia; hay que tener "copias" funcionando simultáneamente para evitar que el negocio se detenga si una falla.
*   **Múltiples AZs (Zonas de Disponibilidad):** Es una **Mejor Práctica** de arquitectura desplegar instancias en distintas AZs. Si una AZ falla (por un desastre físico), la otra asume la carga.
*   **Aislamiento de Fallos:** El uso de AZs separadas garantiza que un problema en un centro de datos no afecte al otro.
*   **Responsabilidad Compartida:** AWS es responsable de la infraestructura de las AZs (**Seguridad DE la nube**), pero el cliente es responsable de configurar la redundancia y el auto-escalado (**Seguridad EN la nube**).

---

## ⚠️ Trampas de Examen (No confundir)

1.  **Escalabilidad vs. Elasticidad:** 
    *   *Trampa:* Decir que son lo mismo. 
    *   *Realidad:* La **Escalabilidad** es la capacidad técnica; la **Elasticidad** es la automatización de esa capacidad según la demanda horaria.
2.  **Escalado Vertical vs. Horizontal:**
    *   **Vertical (Scale Up):** Hacer la instancia "más grande" (más RAM/CPU). Tiene un límite físico.
    *   **Horizontal (Scale Out):** Añadir "más instancias" idénticas. Es el preferido para **Alta Disponibilidad**.
3.  **Región vs. AZ:**
    *   Las instancias se lanzan en una **AZ** específica. La Región es el conjunto geográfico de esas AZs.
4.  **Tolerancia a Fallos vs. Alta Disponibilidad:**
    *   **HA (Alta Disponibilidad):** El sistema sigue arriba (ej: otra Anabel toma pedidos).
    *   **Tolerancia a Fallos:** El sistema no nota ni un milisegundo de interrupción (más caro y complejo).

---

## 📚 Información Extra (Actualización CLF-C02)
*   **Amazon EC2 Auto Scaling:** Es el servicio que implementa la **Elasticidad** de forma automática.
*   **Elastic Load Balancing (ELB):** Es el "maître" que distribuye a los clientes entre los baristas disponibles (Anabel 1 y Anabel 2) para que ninguno se sature.
*   **IA Generativa:** Al entrenar modelos (como en Amazon SageMaker), la **Escalabilidad** es vital porque el entrenamiento consume picos masivos de CPU/GPU que luego no se necesitan para la inferencia simple.
