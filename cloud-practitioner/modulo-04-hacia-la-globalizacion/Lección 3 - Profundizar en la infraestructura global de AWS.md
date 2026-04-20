## Resumen General

Esta lección profundiza en las estrategias para garantizar que las aplicaciones sean **resilientes** (que no fallen) y **rápidas**. Introduce la diferencia crítica entre arquitecturas **Multi-AZ** y **Multi-Región**, y explica cómo las **Ubicaciones de Borde** (Edge Locations) a través de servicios como **Amazon CloudFront** y **Route 53** mejoran la experiencia del usuario global al reducir la latencia.

---

## Conceptos Clave (Priorizados por probabilidad en el examen)

### 🔴 PRIORIDAD ALTA: Arquitecturas de Disponibilidad

AWS evalúa si sabes cómo proteger una aplicación contra diferentes niveles de falla:

- **Multi-AZ (Multi-Availability Zone):** * **Definición:** Desplegar recursos en dos o más Zonas de Disponibilidad dentro de una misma región.
    
    - **Propósito:** Protegerse contra fallas en un centro de datos (incendios, cortes de luz localizados). Garantiza la **Alta Disponibilidad**.
        
- **Multi-Región:**
    
    - **Definición:** Desplegar la aplicación en regiones geográficas distintas (ej. Virginia y Tokio).
        
    - **Propósito:** Recuperación ante desastres (Disaster Recovery) si una región entera sufre una interrupción catastrófica.
        

### 🔴 PRIORIDAD ALTA: Amazon CloudFront y Ubicaciones de Borde

- **Amazon CloudFront:** Es una Red de Entrega de Contenido (CDN). Su función es acelerar la entrega de datos, videos y aplicaciones.
    
- **Ubicaciones de Borde (Edge Locations):** Infraestructura física separada de las Regiones. Es donde CloudFront guarda el contenido en "caché" para estar más cerca del usuario.
    
- **Caso de uso:** "Las imágenes se cargan lento en Latinoamérica". Solución: CloudFront.
    

### 🟡 PRIORIDAD MEDIA: Amazon Route 53

- **Definición:** Servicio de DNS (Sistema de Nombres de Dominio) escalable y de alta disponibilidad.
    
- **Función clave:** Traduce nombres de dominio ([www.tu-cafeteria.com](https://www.google.com/search?q=https://www.tu-cafeteria.com)) en direcciones IP (192.0.2.1).
    
- **Dato de examen:** Route 53 dirige el tráfico de los usuarios hacia las aplicaciones.
    

### 🟡 PRIORIDAD MEDIA: AWS Outposts

- **Definición:** Servicio que permite ejecutar servicios de AWS de forma nativa en el centro de datos físico (on-premises) del cliente.
    
- **Caso de uso:** Necesidad de latencia ultra-baja (milisegundos) o procesamiento de datos local que no puede viajar a la nube.
    

---

## Puntos críticos para el examen Cloud Practitioner

1. **Redundancia vs. Latencia:** * Si el objetivo es que la app **no se caiga**, la respuesta es **Multi-AZ**.
    
    - Si el objetivo es que la app **sea rápida** para usuarios lejanos, la respuesta es **CloudFront/Edge Locations**.
        
2. **Ubicaciones de Borde vs. Zonas de Disponibilidad:** Las ubicaciones de borde **NO** son centros de datos para computación general (EC2); son puntos de paso para acelerar contenido.
    
3. **Conmutación por error (Failover):** Es el proceso automático de cambiar a un recurso de respaldo cuando el principal falla. Multi-AZ facilita esto.
    

---

## Conceptos que suelen confundir en el examen

|**Concepto**|**Lo que el estudiante suele confundir**|**La realidad para el examen**|
|---|---|---|
|**CloudFront vs S3**|Cree que CloudFront almacena los archivos originales.|S3 almacena los archivos; CloudFront los **distribuye** más rápido mediante copias temporales.|
|**Route 53 vs CloudFront**|Cree que Route 53 acelera las imágenes.|Route 53 es el "mapa" (DNS); CloudFront es el "camión de reparto rápido" (CDN).|
|**Outposts vs On-premises tradicional**|Cree que Outposts es solo comprar servidores.|Outposts es **infraestructura de AWS** dentro de tu casa; se gestiona igual que la nube.|

---

## 💡 Información adicional valiosa (Complemento de instructor)

- **AWS Global Accelerator:** Mencionado brevemente en la lección. En el examen, se diferencia de CloudFront porque optimiza la **ruta de red** (usando IPs estáticas) para aplicaciones que no son necesariamente web (como juegos o voz sobre IP), mientras que CloudFront se enfoca en **contenido** (imágenes/video).
    
- **Resiliencia:** Esta es la palabra técnica que AWS usa para describir una arquitectura que puede "recuperarse de interrupciones".
    
- **Puntos de Presencia (PoP):** Es otro nombre técnico que a veces se usa para referirse a las Ubicaciones de Borde.
    

**Términos clave para buscar en las preguntas:** _Failover_, _Caching_, _DNS Resolution_, _Low Latency_, _High Availability_.

---

¿Deseas que profundicemos en algún servicio específico de estos antes de pasar a las preguntas de práctica?