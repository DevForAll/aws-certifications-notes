## Resumen general

Este módulo presenta servicios de computación de AWS diseñados para casos de uso específicos, complementando a EC2, Lambda y servicios de contenedores. Incluye soluciones para simplificar el despliegue de aplicaciones (Elastic Beanstalk), procesamiento batch (AWS Batch), hosting web simplificado (Lightsail) y computación híbrida (Outposts).

---

## Conceptos clave

### **AWS Elastic Beanstalk** (Probabilidad en examen: **ALTA**)

- **Definición**: Servicio PaaS (Platform as a Service) que facilita el despliegue y gestión de aplicaciones web sin necesidad de gestionar infraestructura manualmente
- **Qué hace**: Automatiza la creación de infraestructura (red, EC2, Auto Scaling, Load Balancers)
- **Qué proporcionas**: Código de aplicación + configuraciones deseadas
- **Beneficios clave**:
    - Implementación rápida y fácil
    - Gestión automática de infraestructura
    - Mantiene visibilidad y control sobre recursos subyacentes
    - Permite guardar y reutilizar configuraciones de entorno
- **Lenguajes soportados**: Java, .NET, PHP, Node.js, Python, Ruby, Go, Docker

### **AWS Batch** (Probabilidad en examen: **MEDIA**)

- **Definición**: Servicio de computación para trabajos batch (procesamiento por lotes) a cualquier escala
- **Casos de uso típicos**:
    - Procesamiento de Big Data
    - Simulaciones científicas
    - Cálculos complejos y análisis
    - Renderizado de imágenes/videos
- **Características**:
    - Gestión automática de infraestructura
    - Escalado automático
    - Distribuye tareas a través de flota de instancias EC2
    - No requiere aprovisionar ni gestionar servidores

### **Amazon Lightsail** (Probabilidad en examen: **MEDIA-ALTA**)

- **Definición**: Servicio simplificado de hosting para aplicaciones web y sitios web con precio predecible
- **Ideal para**: Usuarios que necesitan una solución rápida, fácil y económica
- **Características**:
    - Precio mensual fijo y predecible
    - Interfaz simplificada
    - Menor complejidad que configurar EC2 manualmente
    - Incluye: instancias virtuales, almacenamiento SSD, transferencia de datos, DNS
- **Casos de uso**: Blogs, sitios web simples, aplicaciones empresariales pequeñas, entornos de desarrollo/prueba

### **AWS Outposts** (Probabilidad en examen: **ALTA**)

- **Definición**: Infraestructura de AWS completamente gestionada en tu centro de datos local
- **Concepto clave**: Solución de **nube híbrida**
- **Qué hace**: Extiende servicios de AWS a instalaciones on-premises
- **Beneficios**:
    - Experiencia consistente entre AWS Cloud y on-premises
    - Ejecuta servicios de AWS localmente
    - Baja latencia para aplicaciones locales
    - Cumplimiento de residencia de datos
    - Integración perfecta con infraestructura existente
- **Casos de uso**:
    - Requisitos de baja latencia
    - Regulaciones de residencia de datos
    - Modernización gradual de aplicaciones
    - Procesamiento de datos local con integración cloud

---

## Puntos críticos para el examen Cloud Practitioner

### **Altamente evaluados:**

1. **Elastic Beanstalk = PaaS**: Solo proporcionas código, AWS gestiona infraestructura
    - **Palabra clave en examen**: "desplegar aplicaciones rápidamente sin gestionar infraestructura"
2. **Outposts = Híbrido**: AWS en tu centro de datos
    - **Palabra clave en examen**: "residencia de datos", "baja latencia on-premises", "nube híbrida"
3. **Lightsail = Simplicidad**: Precio predecible, fácil de usar
    - **Palabra clave en examen**: "usuarios nuevos", "proyectos simples", "precio fijo mensual"
4. **AWS Batch = Procesamiento por lotes/batch**
    - **Palabra clave en examen**: "Big Data", "simulaciones", "procesamiento masivo de datos"

### **Diferenciadores importantes:**

- **Elastic Beanstalk**: Mantienes visibilidad/control de recursos (diferente de Lambda que es completamente serverless)
- **Lightsail vs EC2**: Lightsail es más simple, EC2 ofrece más control granular
- **Outposts vs Region/AZ**: Outposts está físicamente en TU ubicación

---

## Conceptos que suelen confundir en el examen

### **1. Elastic Beanstalk vs Lambda**

- **Elastic Beanstalk**:
    - Creas aplicaciones tradicionales (servidor web)
    - Mantiene servidores corriendo continuamente
    - Más control sobre infraestructura subyacente
- **Lambda**:
    - Funciones serverless sin servidores
    - Ejecución basada en eventos
    - Sin gestión de infraestructura

### **2. Outposts vs Direct Connect**

- **Outposts**: Hardware de AWS EN tu centro de datos (infraestructura física)
- **Direct Connect**: Conexión de red privada HACIA AWS (solo conectividad)

### **3. Lightsail vs EC2**

- **Lightsail**: Planes con precio fijo, menos opciones de configuración, ideal para principiantes
- **EC2**: Pago por uso, máxima flexibilidad, miles de configuraciones posibles

### **4. AWS Batch vs Lambda**

- **Batch**: Para trabajos de larga duración, procesamiento pesado, puede durar horas
- **Lambda**: Máximo 15 minutos de ejecución, ideal para tareas cortas

---

## **COMPLEMENTO - Información adicional frecuentemente evaluada**

### **Modelo de responsabilidad compartida:**

- **Elastic Beanstalk**: AWS gestiona plataforma; tú gestionas código y datos
- **Outposts**: AWS gestiona hardware físico en tu ubicación; tú gestionas seguridad física del sitio

### **Casos de uso por servicio (frecuentes en examen):**

|Servicio|Escenario típico en examen|
|---|---|
|**Elastic Beanstalk**|"Desarrollador quiere desplegar app web sin preocuparse por infraestructura"|
|**AWS Batch**|"Empresa farmacéutica necesita ejecutar millones de simulaciones"|
|**Lightsail**|"Startup quiere lanzar blog WordPress rápidamente con presupuesto predecible"|
|**Outposts**|"Hospital necesita procesar datos de pacientes localmente por regulaciones de privacidad"|

### **Precios (concepto general):**

- **Elastic Beanstalk**: Sin costo adicional (pagas solo los recursos AWS que usa)
- **Lightsail**: Precio mensual fijo predecible
- **Batch**: Pagas solo por recursos de cómputo utilizados
- **Outposts**: Requiere inversión inicial significativa (hardware físico)

### **Términos clave para memorizar:**

- **PaaS** (Platform as a Service): Elastic Beanstalk
- **Híbrido**: Outposts
- **Batch/Por lotes**: AWS Batch
- **Simplificado/Predecible**: Lightsail

---

**Nota importante**: En el examen, cuando veas escenarios que mencionan "simplificar gestión", "despliegue rápido de aplicaciones" → piensa en **Elastic Beanstalk**. Si mencionan "datos locales", "regulaciones de residencia" → piensa en **Outposts**.