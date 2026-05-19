## 📝 Resumen Ejecutivo
Para competir globalmente, una aplicación no solo debe estar "en línea", sino que debe ser **resiliente** y **rápida**. El valor de negocio de profundizar en la infraestructura global radica en maximizar la **Alta Disponibilidad** (que la app no falle) y minimizar la **Latencia** (que la app sea rápida en cualquier país). Esto se logra mediante la combinación de arquitecturas Multi-AZ/Región y el uso de la Red de Entrega de Contenido (CDN) de AWS.

![[Pasted image 20260510235226.png]]

---
## 💡 Conceptos Clave (High Probability)

### 1. Estrategias de Disponibilidad y Resiliencia
AWS evalúa tu capacidad para diseñar contra fallas:
- **Multi-AZ (Alta Disponibilidad):** Desplegar en al menos 2 Zonas de Disponibilidad. Protege contra fallas de centros de datos (cortes eléctricos, inundaciones locales).
- **Multi-Región (Recuperación ante Desastres):** Desplegar en áreas geográficas distintas. Protege contra interrupciones regionales catastróficas.

### 2. Amazon CloudFront y Ubicaciones de Borde
- **CloudFront:** Servicio de CDN que acelera la entrega de contenido estático (imágenes/JS) y dinámico (video).
- **Ubicaciones de Borde (Edge Locations):** Puntos de presencia físicos distribuidos por el mundo donde CloudFront guarda copias (**Caché**) de los datos.
- **Relación:** El usuario pide un dato -> CloudFront lo busca en la Edge Location más cercana -> Menor latencia.

### 3. Amazon Route 53 (DNS)
- **Función:** Sistema de nombres de dominio. Traduce `www.ejemplo.com` en una dirección IP.
- **Valor:** Dirige el tráfico de los usuarios hacia el recurso de AWS más cercano o saludable.

---
## 📊 Tabla Comparativa: AZ vs. Edge Location

| Característica | Zona de Disponibilidad (AZ) | Ubicación de Borde (Edge Location) |
| :--- | :--- | :--- |
| **Componente de** | Una Región de AWS | Red Global de AWS (CloudFront) |
| **Uso Principal** | Ejecutar EC2, RDS, VPCs | Almacenamiento en caché (S3, Video) |
| **Protección contra** | Fallas de hardware/centros de datos | Alta latencia de red |

---

## 🎯 Puntos Críticos para el Examen (Keywords)
- **"High Availability":** Siempre busca **Multi-AZ**.
- **"Disaster Recovery":** Siempre busca **Multi-Región**.
- **"Edge Locations" / "Points of Presence (PoP)":** Gatillos para **CloudFront**.
- **"DNS Resolution":** Gatillo para **Route 53**.

---

## ⚠️ Trampas de Examen (Distractores)
- **CloudFront NO es para almacenamiento:** El archivo original está en **S3**; CloudFront solo guarda una copia temporal.
- **Edge Location NO es un centro de datos para EC2:** No puedes lanzar una instancia EC2 directamente en una Edge Location (a menos que uses servicios híbridos específicos).
- **Route 53 vs CloudFront:** Route 53 encuentra la "dirección"; CloudFront entrega el "contenido" rápido.

---
## 📖 Diccionario de Servicios AWS (Visualización de Distractores)

| Servicio | Definición Corta | Palabras Gatillo (Keywords) |
| :--- | :--- | :--- |
| **Amazon CloudFront** | Red de Entrega de Contenido (CDN). | Caching, Low Latency, Edge. |
| **Amazon Route 53** | Servicio de DNS altamente disponible. | Domain, Routing, DNS, Failover. |
| **AWS Outposts** | Ejecuta AWS en centros de datos locales. | Hybrid, On-premises, Local latency. |
| **AWS Global Accelerator** | Mejora la ruta de red global. | Anycast IP, Network path optimization. |

---

## 🤖 Conexión con IA Generativa y Responsabilidad Compartida
- **IA Generativa (Baja Latencia):** Para aplicaciones de chat de IA en tiempo real, usar **CloudFront** para entregar la interfaz web y **Global Accelerator** para optimizar la conexión con el endpoint de inferencia de IA reduce drásticamente el "lag" percibido por el usuario.
- **Modelo de Responsabilidad Compartida:** 
    - **AWS es responsable de:** El mantenimiento físico de las Edge Locations y la replicación de datos entre AZs si el servicio es gestionado (Seguridad **DE** la nube).
    - **El Cliente es responsable de:** Configurar correctamente las políticas de caché en CloudFront y diseñar su arquitectura como Multi-AZ para garantizar la disponibilidad (Seguridad **EN** la nube).

> **Nota del Instructor:** Un error común es pensar que "CloudFront es solo para imágenes". También acelera APIs y contenido dinámico. Si el examen dice "acelerar entrega global", piensa en CloudFront.

