## **Resumen General**

Este módulo introduce el espectro de servicios de cómputo en AWS, clasificándolos según el nivel de administración requerido: **servicios no administrados** (como EC2), **servicios administrados** (como ELB, SNS, SQS) y **servicios sin servidor (serverless)**. El enfoque principal es entender que AWS ofrece diferentes niveles de control vs conveniencia, y que la elección depende de las necesidades específicas de la carga de trabajo. Se aplica el **Modelo de Responsabilidad Compartida** para diferenciar las responsabilidades operativas entre AWS y el cliente.

---


![[Pasted image 20260126220226.png]]


---

## **Conceptos Clave**

### **🔴 Probabilidad ALTA de aparecer en el examen:**

- **EC2 (Amazon Elastic Compute Cloud)**
    - Máquinas virtuales que puedes aprovisionar en AWS
    - **Servicio NO administrado**: El cliente es responsable de parches, escalado, administración del SO
    - AWS administra la infraestructura subyacente (hardware, red, centro de datos)
    - Alto grado de control y personalización
- **Servicios Administrados (Managed Services)**
    - AWS asume más responsabilidades operativas
    - El cliente configura el servicio según sus requisitos
    - AWS se encarga de: aprovisionamiento, escalado, mantenimiento, alta disponibilidad
    - Ejemplos mencionados: **ELB, SNS, SQS**
    - No requiere administración de servidores por parte del cliente
- **Computación Sin Servidor (Serverless Computing)**
    - No hay visibilidad ni acceso a la infraestructura subyacente
    - AWS maneja completamente: aprovisionamiento, escalado, alta disponibilidad, mantenimiento
    - El cliente se concentra **exclusivamente en su aplicación/código**
    - No hay gestión de servidores
- **Modelo de Responsabilidad Compartida**
    - **AWS**: Responsable de la seguridad **DE** la nube (infraestructura física, red, hipervisor)
    - **Cliente**: Responsable de la seguridad **EN** la nube (datos, aplicaciones, SO, configuraciones)
    - EC2 es un ejemplo claro de aplicación de este modelo

### **🟡 Probabilidad MEDIA de aparecer en el examen:**

- **Espectro de servicios de AWS**
    - Desde servicios no administrados (máximo control) hasta serverless (máxima conveniencia)
    - Balance entre **personalización** vs **facilidad de uso**
    - La elección depende de las necesidades específicas de la carga de trabajo
- **Analogía de la cafetería** (concepto pedagógico):
    - No administrado = Máquina de expreso personalizable (control total, más trabajo)
    - Administrado = Cafetera de cápsulas (conveniencia, menos personalización)
    - Serverless = Comprar café ya preparado (sin preocuparte del proceso)

### **🟢 Probabilidad BAJA de aparecer en el examen:**

- Detalles específicos de la analogía de la cafetería (es solo ilustrativo)

---

## **Puntos Críticos para el Examen Cloud Practitioner**

### ✅ **Debes saber distinguir:**

1. **Servicio NO administrado (EC2)**
    - Cliente administra: SO, parches, escalado, aplicaciones
    - Mayor control técnico
    - Mayor responsabilidad operativa
2. **Servicio Administrado (ELB, RDS, SNS, SQS)**
    - AWS administra: infraestructura, escalado automático, parches
    - Cliente configura y usa el servicio
    - Balance entre control y conveniencia
3. **Servicio Serverless (Lambda, Fargate)**
    - Sin gestión de infraestructura
    - Cliente solo proporciona código
    - Escalado automático y transparente

### ✅ **Aplicación del Modelo de Responsabilidad Compartida:**

|Servicio|Responsabilidad del Cliente|Responsabilidad de AWS|
|---|---|---|
|**EC2**|SO, parches, apps, datos, configuración de red|Hardware, hipervisor, red física|
|**Servicios Administrados**|Configuración del servicio, datos|Infraestructura, escalado, parches, HA|
|**Serverless**|Código de aplicación, configuración de función|Todo lo demás (infraestructura invisible)|

### ✅ **Criterios de selección de servicio de cómputo:**

- **Necesidad de control** → EC2
- **Balance control/conveniencia** → Servicios administrados
- **Enfoque solo en código** → Serverless

---

## **Conceptos que Suelen Confundir en el Examen**

### ❌ **Confusión #1: "Sin servidor" significa que no hay servidores**

- **INCORRECTO**: Sí hay servidores, pero son invisibles para ti
- **CORRECTO**: "Sin servidor" significa que **no administras** servidores; AWS los gestiona completamente

### ❌ **Confusión #2: EC2 es un servicio administrado**

- **INCORRECTO**: EC2 requiere que administres el SO, parches, escalado
- **CORRECTO**: EC2 es un servicio **NO administrado** desde la perspectiva del cliente

### ❌ **Confusión #3: Los servicios administrados no te dan ningún control**

- **INCORRECTO**: Sí tienes control sobre la configuración del servicio
- **CORRECTO**: Configuras el servicio según tus necesidades, pero AWS administra la infraestructura subyacente

### ❌ **Confusión #4: Todos los servicios de AWS son serverless**

- **INCORRECTO**: AWS ofrece un espectro completo desde no administrado hasta serverless
- **CORRECTO**: Existen diferentes niveles de administración según el servicio

### ❌ **Confusión #5: En el Modelo de Responsabilidad Compartida, AWS es responsable de todo en EC2**

- **INCORRECTO**: El cliente es responsable del SO, aplicaciones, datos y configuraciones
- **CORRECTO**: AWS solo es responsable de la infraestructura física y el hipervisor

---

## **📚 Información Adicional Valiosa para el Examen** _(Complemento no mencionado en la transcripción)_

### **🔹 Ejemplos específicos de servicios serverless en AWS:**

- **AWS Lambda**: Ejecuta código sin aprovisionar servidores
- **AWS Fargate**: Contenedores sin administrar servidores
- **Amazon S3**: Almacenamiento de objetos serverless
- **Amazon DynamoDB**: Base de datos NoSQL serverless

### **🔹 Ventajas de Serverless (frecuentemente evaluadas):**

- **Pago por uso**: Solo pagas por el tiempo de ejecución real
- **Escalado automático**: Se ajusta automáticamente a la demanda
- **Alta disponibilidad integrada**: AWS gestiona la redundancia
- **Menor sobrecarga operativa**: No hay servidores que administrar

### **🔹 Casos de uso típicos por tipo de servicio:**

- **EC2**: Aplicaciones legacy, control total del SO, compliance estricto
- **Servicios Administrados**: Aplicaciones web estándar, APIs, microservicios
- **Serverless**: Procesamiento de eventos, APIs sin estado, cargas de trabajo variables

### **🔹 Términos clave que aparecen textualmente en el examen:**

- "Responsabilidad compartida"
- "Sin servidor" / "Serverless"
- "Servicio administrado" / "Managed service"
- "Alta disponibilidad"
- "Escalado automático"
- "Infraestructura subyacente"

---

## **🎯 Resumen Ultra-Rápido para Repasar:**

**EC2** = Tú administras → **Administrado** = AWS administra infraestructura → **Serverless** = AWS administra TODO excepto tu código