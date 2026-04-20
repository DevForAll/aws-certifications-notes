# Módulo 1: Lección 4 - Infraestructura Global de AWS

## 📊 Análisis de Probabilidad para el Examen
*   **Alta:** Regiones, Zonas de Disponibilidad (AZs), Alta Disponibilidad (HA), Factores de selección de Región.
*   **Media:** Tolerancia a fallos, Redundancia, Ubicaciones de Borde (Edge Locations).
*   **Baja:** Centros de Datos individuales, Local Zones/Wavelength (conceptos avanzados).

---

## 📝 Resumen Ejecutivo
AWS opera una infraestructura global masiva diseñada para ofrecer la máxima **resiliencia y escalabilidad**. En lugar de depender de un único centro de datos (punto único de fallo), AWS divide su infraestructura en **Regiones** geográficas, que a su vez contienen múltiples **Zonas de Disponibilidad (AZs)** físicamente separadas. Este diseño permite a los usuarios desplegar aplicaciones con **Alta Disponibilidad** y **Tolerancia a Fallos** simplemente distribuyendo recursos entre estas zonas.

---

## 🔑 Conceptos Clave

### 1. Región de AWS (AWS Region)
*   **Definición:** Un área geográfica física en el mundo (ej. Norte de Virginia, España, Querétaro-México).
*   **Aislamiento:** Cada región está completamente aislada de las demás. Los datos no salen de una región a menos que el usuario lo configure explícitamente (**Soberanía de Datos**).
*   **Criterios de Selección (Crucial para el examen):**
    1.  **Cumplimiento (Compliance):** Requisitos legales de residencia de datos.
    2.  **Proximidad (Latencia):** Elegir la región más cercana a los usuarios finales.
    3.  **Disponibilidad de Servicios:** No todos los servicios están en todas las regiones.
    4.  **Precio:** El costo de los servicios varía según la región.

### 2. Zonas de Disponibilidad (Availability Zones - AZs)
*   **Definición:** Uno o más centros de datos discretos con energía, red y conectividad redundantes dentro de una Región.
*   **Separación Física:** Están separadas por **decenas de kilómetros** para evitar que desastres naturales afecten a más de una, pero lo suficientemente cerca para tener una **latencia despreciable** (baja).
*   **Regla de Oro:** Cada Región tiene un **mínimo de 3 AZs**.

### 3. Alta Disponibilidad (HA) vs. Tolerancia a Fallos (FT)
*   **Alta Disponibilidad:** Garantiza que el sistema esté accesible el mayor tiempo posible con un **tiempo de inactividad mínimo**. Se logra usando al menos 2 AZs.
*   **Tolerancia a Fallos:** Capacidad de un sistema para seguir operando **sin interrupción alguna**, incluso si fallan múltiples componentes. Es un nivel superior de resiliencia.

### 4. Ubicaciones de Borde (Edge Locations)
*   **Definición:** Sitios que AWS utiliza para cachear (almacenar temporalmente) contenido cerca de los usuarios finales mediante **Amazon CloudFront**.
*   **Propósito:** Reducir la latencia en la entrega de contenido estático (videos, imágenes).

---

## 🎯 Puntos Críticos (Examen Keywords)
*   **"Physically separated by tens of kilometers":** Describe la distancia entre AZs.
*   **"Data Sovereignty":** El control del usuario sobre en qué región residen sus datos.
*   **"Redundancy":** Duplicar componentes para eliminar puntos únicos de fallo (como la analogía de tener varias cafeterías).
*   **"Low-latency connectivity":** Conexión de alta velocidad entre AZs dentro de una misma región.

---

## ⚠️ Trampas de Examen (Diferencias Cruciales)

1.  **¿Región o AZ?:** Si la pregunta habla de **"Geographic area"**, es una **Región**. Si habla de **"Discrete Data Centers"** o **"Fault isolation"** dentro de una región, es una **AZ**.
2.  **Edge Location vs. AZ:** Las **Edge Locations** NO son centros de datos para ejecutar aplicaciones (instancias EC2); son solo para **caché de contenido** (CloudFront).
3.  **¿Cuántas AZs?:** AWS garantiza un **mínimo de 3 AZs** por región (aunque algunas regiones antiguas o específicas puedan mostrar 2 en documentación desactualizada, para el CLF-C02 la respuesta estándar es 3+).
4.  **Responsabilidad de HA:** AWS proporciona la infraestructura (AZs), pero es **responsabilidad del cliente** configurar sus aplicaciones para que usen múltiples AZs (AWS no lo hace "por arte de magia" para todos los servicios).

---

## 💡 Analogía de la Cafetería (De la Transcripción)
*   **Punto Único de Fallo:** Un empleado derrama un latte sobre la única caja registradora de la tienda -> El negocio se detiene.
*   **Alta Disponibilidad:** Tener varias cafeterías en la misma ciudad -> Si una cierra por un incidente, los clientes van a la otra a pocas cuadras. El negocio sigue generando ingresos.
