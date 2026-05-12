## 📝 Resumen Ejecutivo
La globalización en AWS permite que una aplicación crezca de un mercado local a una audiencia mundial de forma rápida y eficiente. El valor de negocio radica en la **reducción de la latencia** (mejor experiencia de usuario), el **cumplimiento normativo** (soberanía de datos) y la **eficiencia operativa** mediante la automatización. AWS proporciona la infraestructura necesaria para que una empresa escale sin la necesidad de construir centros de datos físicos en cada país.

---
## 💡 Conceptos Clave (High/Medium Probability)

### 1. Factores de Selección de Regiones (Alta Probabilidad)
AWS no selecciona regiones al azar; tú como cliente debes elegir la región ideal basándote en cuatro pilares:
- **Cumplimiento de datos (Compliance):** Requisito legal de que los datos no salgan de un territorio (Soberanía de Datos). **(Punto Crítico)**.
- **Latencia:** Cercanía física a los usuarios finales para minimizar el retardo.
- **Costo:** Los precios varían por región debido a impuestos y costos operativos locales (ej. N. Virginia suele ser más económica).
- **Disponibilidad de servicios:** No todos los servicios nuevos están disponibles en todas las regiones simultáneamente.

### 2. Ubicaciones de Borde (Edge Locations) (Alta Probabilidad)
Son la infraestructura física detrás de **Amazon CloudFront**.
- **Función:** Entrega de contenido con baja latencia mediante el uso de **Caché**.
- **Analogía:** Si la Región es la "Cafetería Principal", las Ubicaciones de Borde son "Carritos de Café" en aeropuertos o mercados que solo sirven lo más pedido rápidamente.

### 3. Infraestructura como Código (IaC) (Media Probabilidad)
Uso de archivos de texto (código) para definir y desplegar recursos de AWS.
- **AWS CloudFormation:** El servicio que permite crear plantillas (templates) para asegurar que el entorno de "Pruebas" sea idéntico al de "Producción" en cualquier parte del mundo.
- **Valor:** Consistencia y velocidad de despliegue.

---
## 📊 Tabla Comparativa Rápida: Infraestructura Global

| Característica | Región de AWS | Ubicación de Borde (Edge Location) |
| :--- | :--- | :--- |
| **Tamaño** | Grande (Múltiples centros de datos/AZs) | Pequeño (Puntos de Presencia - PoP) |
| **Propósito** | Alojamiento de servicios y datos | Almacenamiento en caché de contenido |
| **Cantidad** | Decenas (ej. 30+) | Cientos (ej. 400+) |
| **Uso Principal** | Ejecutar aplicaciones y DBs | Reducir latencia de entrega (CloudFront) |

---
## 🎯 Puntos Críticos para el Examen (Keywords)
- **"Caching" / "Low Latency":** Gatillo automático para **Edge Locations** o **CloudFront**.
- **"Consistency" / "Automation" / "Templates":** Gatillo automático para **CloudFormation**.
- **"Data Residency" / "Compliance":** Motivo principal para elegir una **Región** específica.
- **"Point of Presence (PoP)":** Sinónimo técnico de Ubicaciones de Borde.

---
## ⚠️ Trampas de Examen (Distractores)
- **Región vs. AZ:** Recuerda que una **Región** es un área geográfica; una **Zona de Disponibilidad (AZ)** es un grupo de centros de datos dentro de esa región. No son lo mismo.
- **CloudFormation vs. Elastic Beanstalk:** CloudFormation "modela" infraestructura (IaC); Beanstalk "despliega" aplicaciones (PaaS) encargándose de la infraestructura automáticamente.
- **Ubicaciones de Borde NO son para cómputo pesado:** No se usan para ejecutar bases de datos complejas, sino para entregar contenido estático/dinámico pre-almacenado.

---
## 📖 Diccionario de Servicios AWS (Visualización de Distractores)

| Servicio                   | Definición Corta                               | Palabras Gatillo (Keywords)                 |
| :------------------------- | :--------------------------------------------- | :------------------------------------------ |
| **Amazon CloudFront**      | Red de entrega de contenido (CDN) global.      | CDN, Edge, Caching, Latency.                |
| **AWS CloudFormation**     | Servicio de Infraestructura como Código (IaC). | Templates, JSON/YAML, Automation.           |
| **AWS Global Accelerator** | Optimiza la ruta de red hacia aplicaciones.    | IP Estática, Anycast, Network optimization. |
| **AWS Organizations**      | Gestión centralizada de múltiples cuentas.     | Billing, Governance, SCPs.                  |

---
## 🤖 Conexión con IA Generativa y Responsabilidad Compartida
- **IA Generativa:** CloudFormation es vital para desplegar clústeres de inferencia de IA de manera consistente en múltiples regiones para estar cerca de los usuarios finales.
- **Modelo de Responsabilidad Compartida:** 
    - **AWS es responsable de:** La seguridad física de las Regiones y Ubicaciones de Borde (Seguridad **DE** la nube).
    - **El Cliente es responsable de:** Seleccionar la Región que cumpla con las leyes de su país (Soberanía de Datos) y configurar correctamente CloudFront/CloudFormation (Seguridad **EN** la nube).

> **Nota del Instructor:** AWS nunca moverá tus datos de una región a otra sin tu consentimiento explícito. Este es un punto muy preguntado sobre soberanía de datos.