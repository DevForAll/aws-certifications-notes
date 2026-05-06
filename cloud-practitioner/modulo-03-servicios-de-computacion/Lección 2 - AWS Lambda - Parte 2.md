### [Lección 2 - AWS Lambda - Parte 2: Integración y Demostración]

**Resumen Ejecutivo**
Esta lección presenta una demostración práctica de una arquitectura **Serverless Event-Driven** (basada en eventos). Utiliza **Amazon SQS** como un búfer de mensajes para desacoplar el front-end (la toma de pedidos) del back-end (el procesamiento). **AWS Lambda** actúa como el "consumidor" automático que escala bajo demanda para procesar mensajes sin intervención manual ni administración de servidores, permitiendo una arquitectura altamente elástica y rentable (cost-effective).

**Conceptos Clave**
- **Amazon SQS (Simple Queue Service):** Cola de mensajes que permite el **desacoplamiento**. En esta demo, los pedidos de la cafetería se almacenan aquí de forma segura hasta por 14 días.
- **Sondeo Automático (Auto-polling):** Lambda monitorea la cola SQS constantemente. Al detectar un mensaje, se invoca automáticamente, procesa el dato y elimina el mensaje de la cola para evitar duplicidad.
- **IAM Execution Role:** Es la identidad de la función. Lambda **necesita permisos explícitos** para leer de SQS (`sqs:ReceiveMessage`) y escribir registros en CloudWatch (`logs:CreateLogStream`).
- **CloudWatch Logs:** Destino crítico para la observabilidad. Aquí se almacenan los logs de ejecución ("Pedido recibido") para auditoría y resolución de errores.

**Tabla Comparativa Rápida: Desacoplamiento vs. Acoplamiento**

| Característica | Arquitectura Acoplada (Directa) | Arquitectura Desacoplada (SQS + Lambda) |
| :--- | :--- | :--- |
| **Resiliencia** | Si el servidor falla, el pedido se pierde. | Si el procesador falla, el pedido sigue en SQS. |
| **Escalabilidad** | Limitada por la capacidad del receptor. | Lambda escala instantáneamente según el volumen. |
| **Costo** | Se paga por servidores activos 24/7. | Solo se paga por el tiempo de ejecución (ms). |

**Puntos Críticos (Keywords para el Examen)**
- **Desacoplamiento (Decoupling):** Palabra clave técnica para SQS. Permite que los componentes funcionen de forma independiente.
- **Escala a Cero:** Cuando no hay mensajes en SQS, no hay funciones Lambda ejecutándose, lo que significa **cero costo de cómputo**.
- **Blueprint (Plantilla):** AWS ofrece configuraciones predefinidas para integrar servicios comunes (como SQS a Lambda) rápidamente.

**Trampas de Examen**
- **Permisos (IAM):** Una causa común de falla es olvidar que Lambda es "denegado por defecto". Sin el rol de ejecución correcto, no puede "ver" la cola.
- **Persistencia vs. Computación:** Recuerda que SQS **almacena** el mensaje (persistencia) pero no lo **procesa**; Lambda **procesa** el mensaje pero no lo **almacena**.
- **Modelo de Responsabilidad Compartida:**
    - **AWS:** Gestiona la infraestructura, el parcheo del sistema operativo y el escalado del runtime.
    - **Cliente:** Gestiona el **código** de la función, la configuración del **trigger** y la seguridad de los **datos** (vía IAM).

**Actualización CLF-C02: IA Generativa y Gobernanza**
- **IA Generativa (Amazon Bedrock):** En un flujo real, la función Lambda podría enviar el texto del pedido ("Quiero 10 chocolates calientes") a **Amazon Bedrock** para realizar un análisis de sentimiento o para traducir automáticamente pedidos en diferentes idiomas antes de enviarlos al barista.
- **Monitoreo de Costos:** Al usar arquitecturas Serverless, es vital usar **AWS Budgets** para evitar sorpresas si hay un pico inesperado de mensajes que dispare las invocaciones de Lambda.

---

> **Nota del Instructor:** Esta arquitectura representa el pilar de **Eficiencia de Rendimiento** y **Fiabilidad** del Well-Architected Framework. Dominar cómo SQS y Lambda trabajan juntos es fundamental para responder preguntas sobre "Escalabilidad" y "Tolerancia a fallos".
