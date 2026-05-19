# 🎓 AWS CLF-C02: Consolidado Maestro - Módulos 1 y 2
### "De los Fundamentos al Dominio del Cómputo"

Este documento sintetiza el conocimiento de los primeros dos módulos, integrando los conceptos clave de tus notas con los requisitos actualizados del examen **CLF-C02** (incluyendo IA Generativa y Gobernanza).

---

## 🚀 1. El Valor de Negocio (Módulo 1)

### Los 6 Beneficios de la Nube (Crucial)
1.  **De Gastos de Capital (CapEx) a Gastos Operativos (OpEx):** Paga solo por lo que usas (Variable).
2.  **Economías de Escala Masivas:** AWS compra tanto que los precios bajan para todos.
3.  **Dejar de adivinar la capacidad:** Escala según la demanda real (**Elasticidad**).
4.  **Aumentar velocidad y agilidad:** Innova y despliega en minutos, no semanas.
5.  **Adiós al "Mantenimiento Pesado Indiferenciado":** AWS cuida el centro de datos; tú cuidas tu negocio.
6.  **Globalización en minutos:** Despliegue mundial con un clic.

> **💡 Analogía del Examen:** La nube es como el **suministro eléctrico**. No construyes una planta de energía (CapEx); solo enchufas tus equipos y pagas por los kilovatios consumidos (OpEx).

---

## 🌍 2. Infraestructura Global (Módulo 1)

| Componente | Definición | Uso para el Examen |
| :--- | :--- | :--- |
| **Región** | Área geográfica aislada. | Elige por: **Cumplimiento (Leyes)**, **Latencia**, **Precio** y **Servicios disponibles**. |
| **Zona de Disponibilidad (AZ)** | Uno o más centros de datos (min. 3 por región). | Diseña con múltiples AZs para **Alta Disponibilidad** y **Tolerancia a Fallos**. |
| **Edge Location** | Puntos de caché (CloudFront). | Reduce la latencia para usuarios finales (Entrega de contenido). |

---

## 🛡️ 3. Seguridad: El Modelo de Responsabilidad Compartida

AWS utiliza el mantra: **"AWS es responsable DE la nube, el Cliente es responsable EN la nube"**.

| AWS (DE la nube) | Cliente (EN la nube) |
| :--- | :--- |
| Infraestructura Física (Servidores, Red, Energía). | Configuración de **Security Groups** y Firewalls. |
| Gestión de Capas de Virtualización. | Parches del **Sistema Operativo** y Aplicaciones. |
| Seguridad de los Centros de Datos. | **Cifrado de Datos** (Client-side & Server-side). |
| Servicios Globales (S3, DynamoDB, IAM). | Gestión de Identidades y Accesos (**IAM**). |

---

## 💻 4. Cómputo y EC2 (Módulo 2)

### Tipos de Instancias (Nomenclatura: `t3.large`)
*   **General Purpose:** Equilibrio (Web servers, repos).
*   **Compute Optimized:** Procesamiento intensivo (Batch, Media transcoding).
*   **Memory Optimized:** Bases de datos de alto rendimiento, Cache (Redis).
*   **Storage Optimized:** Sistemas de archivos distribuidos, Data Warehousing.
*   **Accelerated Computing:** GPUs para IA/ML y Gráficos.

### Modelos de Precios (Tu arma secreta para ahorrar)
1.  **On-Demand:** Sin compromiso. Ideal para pruebas y picos impredecibles.
2.  **Spot:** Capacidad sobrante con hasta 90% de descuento. **Riesgo:** Aviso de terminación de 2 min. (Ideal para Batch).
3.  **Savings Plans:** Compromiso de gasto ($/hora) por 1-3 años. Cubre **EC2, Fargate y Lambda**.
4.  **Reserved Instances:** Compromiso de capacidad por 1-3 años.
5.  **Dedicated Hosts:** Servidor físico exclusivo. Necesario para **Licencias (BYOL)** y cumplimiento estricto.

---

## ⚖️ 5. Escalado y Mensajería (Módulo 2)

*   **Vertical (Up/Down):** Cambiar el tamaño de la instancia (más CPU/RAM). *Límite físico.*
*   **Horizontal (Out/In):** Añadir o quitar más instancias. *Escalado infinito.*
*   **Elastic Load Balancing (ELB):** El "policía de tráfico" que reparte la carga entre instancias.
*   **SQS (Simple Queue Service):** Mensajería para desacoplar sistemas (evita que un fallo en un componente tire todo el sistema).
*   **SNS (Simple Notification Service):** Envío de notificaciones (Email, SMS, HTTP) estilo Pub/Sub.

---

## 🔥 6. CONTENIDO CLF-C02: Lo que debes saber y NO estaba en las notas

Para asegurar tu certificación, memoriza estos conceptos adicionales que AWS ha integrado en la versión actual del examen:

### A. IA Generativa en AWS
*   **Amazon Bedrock:** El servicio más importante para el examen. Permite construir aplicaciones de IA Generativa usando modelos base (FMs) a través de una API. Es **Serverless**.
*   **Amazon SageMaker:** Plataforma completa para construir, entrenar y desplegar modelos de ML propios.

### B. Pilares del Well-Architected Framework (6 Pilares)
1.  **Excelencia Operativa:** Ejecutar y monitorear sistemas.
2.  **Seguridad:** Proteger datos y sistemas.
3.  **Fiabilidad (Reliability):** Recuperarse de fallos.
4.  **Rendimiento:** Usar recursos de forma eficiente.
5.  **Optimización de Costos:** Evitar gastos innecesarios.
6.  **Sostenibilidad:** Minimizar el impacto ambiental (Nuevo en CLF-C02).

### C. Gobernanza y Gestión de Cuentas
*   **AWS Organizations:** Centraliza la facturación (**Consolidated Billing**) y permite aplicar políticas de control (**SCPs**) a múltiples cuentas.
*   **AWS Control Tower:** La forma más fácil de configurar y gobernar un entorno multi-cuenta seguro (Landing Zones).

---

## ⚠️ Trampas Comunes de Examen
1.  **"¿Cuál es el servicio más barato para X?":** Si la carga es tolerable a interrupciones, la respuesta es **Spot**. Si es constante, es **Savings Plans**.
2.  **"¿Cómo reduzco la latencia global?":** No es solo añadir Regiones, usa **Amazon CloudFront** (Edge Locations) para contenido estático.
3.  **"¿Quién es responsable de parchar el OS en EC2?":** Siempre el **Cliente**. (AWS solo parcha el software de servicios administrados como RDS o Lambda).
4.  **"Soberanía de Datos":** Significa que AWS **NUNCA** moverá tus datos de una Región a otra sin tu permiso explícito.
