## 📊 Análisis de Probabilidad para el Examen
*   **ALTA:** AWS Lambda como servicio **Serverless**. Modelo de pago por uso (milisegundos + invocaciones). Límite de **15 minutos**.
*   **MEDIA:** Disparadores (Triggers) comunes (S3, SQS, API Gateway). Lenguajes soportados (Python, Node.js, Java).
*   **BAJA:** Detalles sobre las especies de cangrejos (analogía).

---
## 📝 Resumen Ejecutivo (Valor de Negocio)
AWS Lambda es el corazón de la computación **sin servidor (Serverless)**. Su valor principal es permitir que las empresas pasen de "administrar infraestructura" a "escribir lógica de negocio". Al ser **event-driven** (basado en eventos), elimina el costo de tener servidores encendidos ociosos; solo pagas cuando el código se ejecuta. Es la herramienta definitiva para la **agilidad** y la **optimización de costos**.

---

![[Pasted image 20260502215805.png]]

---
## 🔑 Conceptos Clave

### 1. ¿Qué es AWS Lambda?
*   Servicio de cómputo que ejecuta tu código sin que tengas que aprovisionar ni administrar servidores.
*   **Escalado Automático:** AWS escala de 1 a miles de ejecuciones concurrentes instantáneamente.
*   **Alta Disponibilidad:** Integrada por defecto; AWS gestiona la redundancia.

### 2. Disparadores (Triggers)
Lambda no corre "siempre"; corre cuando algo lo despierta:
*   **Amazon S3:** Procesar una imagen apenas se sube.
*   **Amazon SQS:** Procesar mensajes de una cola (desacoplamiento).
*   **Amazon API Gateway:** Responder a una solicitud web (Backend de una App).
*   **Amazon DynamoDB:** Reaccionar a cambios en una base de datos.

### 3. El Límite Crítico: 15 Minutos
*   Una función Lambda puede ejecutarse por un **máximo de 15 minutos**. 
*   *Estrategia de Examen:* Si la tarea toma más de 15 minutos (ej: renderizado de video pesado), la respuesta correcta NO es Lambda, sino **EC2** o **Fargate**.

### 4. Modelo de Precios (Pay-as-you-go)
*   Se factura por: **Número de solicitudes** + **Tiempo de ejecución** (calculado en milisegundos).
*   Si no hay eventos, el costo es **CERO**.

---
## 🛡️ Seguridad y Monitoreo (Indispensable para el Examen)

### Roles de IAM (Execution Role)
Lambda necesita permiso para hablar con otros servicios. 
*   **Ejemplo:** Para leer de una cola SQS y escribir logs, Lambda necesita un **Rol de IAM** con las políticas adecuadas.

### Monitoreo con Amazon CloudWatch
*   **CloudWatch Logs:** Donde Lambda escribe los resultados de su ejecución (útil para debug).
*   **CloudWatch Metrics:** Gráficos que muestran cuántas veces se ejecutó, cuántos errores hubo y cuánto tiempo tardó.

---

## ⚖️ Tabla Comparativa: Lambda vs. EC2

| Característica | AWS Lambda | Amazon EC2 |
| :--- | :--- | :--- |
| **Tipo** | Serverless (Sin servidor) | IaaS (Máquina Virtual) |
| **Gestión** | AWS gestiona el SO y parches | Tú gestionas el SO y parches |
| **Tiempo de Vida** | Efímero (Máx. 15 min) | Persistente (24/7 si quieres) |
| **Escalado** | Automático e invisible | Auto Scaling (tú lo configuras) |
| **Costo** | Por ejecución (milisegundos) | Por hora/segundo de instancia |

---

## ⚠️ Trampas de Examen (Diferencias Cruciales)
1.  **"¿Lambda es bueno para procesos de larga duración?":** **NO**. El límite son 15 minutos.
2.  **"¿Puedo elegir el sistema operativo en Lambda?":** **NO**. Solo eliges el lenguaje (Runtime). Si necesitas elegir el SO (Windows/Linux específico), usa **EC2**.
3.  **"¿Lambda escala manualmente?":** **NO**. El escalado es una de las mayores ventajas automáticas de Lambda.
4.  **"Responsabilidad Compartida":** El cliente es responsable de su **Código** y de la configuración de **Seguridad (Roles IAM)**. AWS es responsable de todo lo demás (parches, hardware, etc.).

---

## 📚 Información Adicional (Actualización CLF-C02)
*   **Lambda@Edge:** Permite ejecutar código Lambda en las Edge Locations de CloudFront para procesar datos más cerca del usuario final.
*   **Cold Start:** Es el ligero retraso que ocurre cuando una función Lambda se ejecuta después de mucho tiempo de inactividad (inicialización del entorno).
