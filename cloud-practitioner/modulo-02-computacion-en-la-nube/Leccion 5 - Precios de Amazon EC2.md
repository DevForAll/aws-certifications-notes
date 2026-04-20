Este módulo presenta las **cinco opciones de facturación principales de Amazon EC2**, cada una diseñada para diferentes patrones de uso y necesidades empresariales. Las opciones permiten equilibrar **flexibilidad, ahorro de costos y requisitos específicos de cargas de trabajo**. Comprender estas opciones es fundamental para optimizar costos en AWS y es un tema frecuente en el examen AWS Cloud Practitioner.

---

## **Conceptos Clave**

### **🔹 Opciones de facturación de Amazon EC2**

AWS ofrece **cinco modelos de precios** para instancias EC2:

---

#### **1. Bajo demanda (On-Demand)**

- **Definición**: Pagas **solo por el tiempo** que la instancia está en ejecución, sin compromisos a largo plazo ni pagos adelantados.
- **Facturación**: Por **hora** o por **segundo** (dependiendo del tipo de instancia y sistema operativo).
- **Ventajas**:
    - Sin contratos ni compromisos a largo plazo.
    - Sin pagos por adelantado.
    - Autoservicio: puedes iniciar y detener instancias cuando quieras.
    - Flexibilidad total.
- **Casos de uso ideales**:
    - **Cargas de trabajo impredecibles** o con picos variables.
    - **Aplicaciones nuevas** en fase de prueba o experimentación.
    - **Desarrollo y testing**.
    - **Establecer una línea base de uso** antes de comprometerse a otras opciones.
- **Importante**: Es la opción **más cara** si se usa a largo plazo, pero ofrece máxima flexibilidad.

---

#### **2. Savings Plans**

- **Definición**: Compromiso de uso constante medido en **dólares por hora** durante **1 o 3 años**, a cambio de descuentos significativos.
- **Descuento**: Hasta **72%** comparado con precios bajo demanda.
- **Flexibilidad**:
    - Se aplica **independientemente** de:
        - Familia de instancias.
        - Tamaño de instancia.
        - Sistema operativo.
        - Tenencia (dedicada o compartida).
        - Región de AWS.
    - También se aplica a **AWS Fargate** y **AWS Lambda** (servicios de cómputo sin servidor).
- **Casos de uso ideales**:
    - Cargas de trabajo **con uso constante y predecible**.
    - Organizaciones que quieren **flexibilidad** pero también **ahorros**.
- **Importante**: Requiere compromiso de **gasto constante en dólares/hora**, no de tipo de instancia específico.

---

#### **3. Instancias reservadas (Reserved Instances - RI)**

- **Definición**: Compromiso de uso de instancias específicas por **1 o 3 años** a cambio de descuentos.
- **Descuento**: Hasta **75%** comparado con precios bajo demanda.
- **Opciones de pago**:
    1. **Todo por adelantado (All Upfront)**: Pagas el 100% al comprometerte → **Mayor descuento**.
    2. **Pago parcial por adelantado (Partial Upfront)**: Pagas una porción al inicio, el resto mensualmente → **Descuento medio**.
    3. **Sin pago por adelantado (No Upfront)**: No pagas nada al inicio, pagas mensualmente → **Menor descuento** (pero aún mejor que bajo demanda).
- **Casos de uso ideales**:
    - **Cargas de trabajo de estado estable** (steady-state workloads).
    - Uso **predecible y constante** (ej. bases de datos, servidores web siempre activos).
- **Importante**: Requiere compromiso con un **tipo específico de instancia** en una **región específica**.

---

#### **4. Instancias spot (Spot Instances)**

- **Definición**: Aprovechas la **capacidad EC2 sobrante** de AWS con grandes descuentos.
- **Descuento**: Hasta **90%** comparado con precios bajo demanda.
- **Inconveniente crítico**:
    - AWS puede **reclamar (interrumpir) la instancia en cualquier momento** si necesita esa capacidad.
    - Recibes una **advertencia de 2 minutos** antes de la interrupción para guardar trabajo.
- **Casos de uso ideales**:
    - Cargas de trabajo **tolerantes a interrupciones**.
    - Procesamiento por lotes (batch processing).
    - Análisis de datos.
    - Tareas de procesamiento de imágenes o video.
    - Trabajos que pueden **pausarse y reanudarse**.
- **Casos NO recomendados**:
    - Bases de datos críticas.
    - Aplicaciones web en producción que requieren disponibilidad continua.
- **Importante**: **No usar para cargas de trabajo que requieren alta disponibilidad o no toleran interrupciones**.

---

#### **5. Hosts dedicados (Dedicated Hosts)**

- **Definición**: Servidor físico **real y completo** reservado para tu uso exclusivo.
- **Característica clave**: Tú tienes control sobre la **ubicación de instancias** en el servidor físico.
- **Ventajas**:
    - **Aislamiento completo**: Ningún otro cliente de AWS comparte el hardware.
    - **Control sobre recursos**: Decides qué instancias van en qué servidor.
- **Casos de uso ideales**:
    - **Requisitos de cumplimiento regulatorio** (compliance) que exigen aislamiento físico.
    - **Licencias de software específicas** (ej. Windows Server, SQL Server, Oracle) que se basan en servidores físicos.
    - **Cargas de trabajo sensibles a la seguridad** que requieren hardware dedicado.
- **Importante**: Opción **más cara**, pero necesaria para ciertos requisitos de licencias y compliance.

---

#### **6. Instancias dedicadas (Dedicated Instances)**

- **Definición**: Pague por instancias que se ejecutan en hardware dedicado exclusivamente a su cuenta. Esta opción permite aislarse de otros clientes de AWS.
- **Característica clave**: Proporcionan aislamiento sin control sobre el servidor
- **Ventajas**:
    - **Aislamiento fisico**: Ofrecen aislamiento físico de otras cuentas de AWS .
    - **Flexibilidad y Ahorro**: Conservan la flexibilidad y el ahorro de costos de una infraestructura compartida.
- **Casos de uso ideales**:
    - 
- **Importante**: 

---

## **Puntos Críticos para el Examen Cloud Practitioner**

### **⚠️ PROBABILIDAD ALTA**

1. **Opciones de facturación de EC2**:
    - Conocer las **5 opciones**: On-Demand, Savings Plans, Reserved Instances, Spot Instances, Dedicated Hosts.
    - **Pregunta típica**: "¿Qué opción de precios es mejor para cargas de trabajo impredecibles?" → **On-Demand**.
2. **On-Demand (Bajo demanda)**:
    - **Sin compromisos**, pago por **hora/segundo**.
    - Ideal para **cargas de trabajo impredecibles** y **desarrollo/testing**.
    - **Pregunta típica**: "¿Qué opción NO requiere compromiso a largo plazo?" → **On-Demand**.
3. **Savings Plans**:
    - Compromiso de **dólares/hora** por **1 o 3 años**.
    - Descuento de hasta **72%**.
    - Flexibilidad: se aplica independientemente de familia de instancias, región, SO, etc.
    - También aplica a **Fargate** y **Lambda**.
    - **Pregunta típica**: "¿Qué opción ofrece flexibilidad entre regiones y familias de instancias con descuentos?" → **Savings Plans**.
4. **Reserved Instances (Instancias reservadas)**:
    - Compromiso de **1 o 3 años** con un **tipo específico de instancia**.
    - Descuento de hasta **75%**.
    - **Tres opciones de pago**: Todo adelantado, Parcial adelantado, Sin adelanto.
    - Ideal para **cargas de trabajo de estado estable** (steady-state).
    - **Pregunta típica**: "¿Qué opción es mejor para una base de datos que funciona 24/7?" → **Reserved Instances**.
5. **Spot Instances (Instancias spot)**:
    - Descuento de hasta **90%**.
    - **AWS puede interrumpir la instancia** en cualquier momento.
    - Advertencia de **2 minutos** antes de la interrupción.
    - Ideal para cargas de trabajo **tolerantes a interrupciones**.
    - **Pregunta típica**: "¿Qué opción ofrece el mayor descuento pero puede interrumpirse?" → **Spot Instances**.
6. **Dedicated Hosts (Hosts dedicados)**:
    - Servidor físico **completo** para uso exclusivo.
    - Ideal para **cumplimiento regulatorio** y **licencias específicas de software**.
    - **Pregunta típica**: "¿Qué opción es necesaria para licencias de software basadas en servidores físicos?" → **Dedicated Hosts**.
7. **Comparación de descuentos**:
    - **On-Demand**: 0% (precio base).
    - **Savings Plans**: Hasta 72%.
    - **Reserved Instances**: Hasta 75%.
    - **Spot Instances**: Hasta 90% (mayor descuento, pero con interrupciones).

---

### **⚠️ PROBABILIDAD MEDIA**

8. **Opciones de pago de Reserved Instances**:
    - **All Upfront** (todo adelantado): Mayor descuento.
    - **Partial Upfront** (parcial adelantado): Descuento medio.
    - **No Upfront** (sin adelanto): Menor descuento (pero aún mejor que On-Demand).
9. **Aplicabilidad de Savings Plans**:
    - Se aplica a **EC2, Fargate y Lambda**.
    - Independiente de familia de instancias, tamaño, SO, tenencia y región.
10. **Línea base de uso**:
    - Usar **On-Demand** al inicio para **establecer una línea base** de uso promedio.
    - Luego migrar a Savings Plans o Reserved Instances para ahorros.

---

### **⚠️ PROBABILIDAD BAJA**

11. **Facturación por segundo vs por hora**:
    - Depende del tipo de instancia y sistema operativo.
    - No es crítico conocer todos los detalles para Cloud Practitioner.
12. **AWS Fargate y Lambda**:
    - Servicios de cómputo **sin servidor** (serverless) cubiertos más adelante.
    - Savings Plans también aplica a estos servicios.

---

## **Conceptos que Suelen Confundir en el Examen**

### **❌ Confusión 1: "¿Savings Plans y Reserved Instances son lo mismo?"**

- **Respuesta**: **NO**.
    - **Savings Plans**: Compromiso de **dólares/hora**, flexible entre familias de instancias, regiones, SO, etc.
    - **Reserved Instances**: Compromiso de **tipo específico de instancia** en una **región específica**.
    - **Savings Plans es más flexible**, Reserved Instances es más rígido pero puede ofrecer descuentos ligeramente mayores en algunos casos.

### **❌ Confusión 2: "¿Spot Instances son siempre la mejor opción por el descuento del 90%?"**

- **Respuesta**: **NO**.
    - Spot ofrece el mayor descuento, pero **AWS puede interrumpir la instancia en cualquier momento**.
    - **Solo usar para cargas de trabajo tolerantes a interrupciones** (batch processing, análisis de datos).
    - **NO usar** para bases de datos, aplicaciones web críticas o cargas de trabajo que requieren alta disponibilidad.

### **❌ Confusión 3: "¿On-Demand es siempre la opción más cara?"**

- **Respuesta**: **Sí, a largo plazo**.
    - On-Demand es ideal para **cargas de trabajo impredecibles o de corto plazo**.
    - Si tienes uso **predecible y constante**, Savings Plans o Reserved Instances son más económicos.

### **❌ Confusión 4: "¿Dedicated Hosts y Dedicated Instances son lo mismo?"**

- **Respuesta**: **NO** (este concepto no está en la transcripción, pero es importante):
    - **Dedicated Hosts**: Servidor físico completo bajo tu control. Tú decides qué instancias van en él. Necesario para **licencias específicas**.
    - **Dedicated Instances**: Instancias que se ejecutan en hardware dedicado, pero **AWS controla la ubicación**. Más barato que Dedicated Hosts.

### **❌ Confusión 5: "¿Puedo cambiar mi Reserved Instance después de comprarla?"**

- **Respuesta**: **Limitado**.
    - Algunas Reserved Instances son **convertibles** (permiten cambiar tipo de instancia).
    - Otras son **estándar** (no permiten cambios).
    - Esta flexibilidad afecta el descuento.

### **❌ Confusión 6: "¿La advertencia de 2 minutos en Spot Instances garantiza que puedo guardar mi trabajo?"**

- **Respuesta**: **No es una garantía absoluta**.
    - Tienes **2 minutos de advertencia**, pero debes diseñar tus aplicaciones para **guardar estado con frecuencia**.
    - Las aplicaciones deben ser **tolerantes a fallos** y capaces de **reanudar trabajo**.

---

## **📌 Información Adicional Valiosa (Complemento)**

### **✅ Comparación de opciones de precios EC2**

|Opción|Descuento|Compromiso|Flexibilidad|Casos de uso ideales|
|---|---|---|---|---|
|**On-Demand**|0%|No|Máxima|Cargas impredecibles, dev/test|
|**Savings Plans**|Hasta 72%|1-3 años ($/ hora)|Alta|Uso constante, flexibilidad de instancia|
|**Reserved Instances**|Hasta 75%|1-3 años (tipo específico)|Media|Cargas de estado estable, predecibles|
|**Spot Instances**|Hasta 90%|No|Baja (interrupciones)|Procesamiento batch, tolerante a fallos|
|**Dedicated Hosts**|Varía|Varía|Baja|Compliance, licencias específicas|

### **✅ Dedicated Instances vs Dedicated Hosts (complemento importante)**

|Característica|Dedicated Instances|Dedicated Hosts|
|---|---|---|
|**Aislamiento**|Hardware dedicado|Servidor físico completo|
|**Control**|AWS controla ubicación|Tú controlas ubicación|
|**Licencias**|No aplica|Compatible con licencias BYOL|
|**Costo**|Más barato|Más caro|
|**Visibilidad**|No ves el servidor físico|Sí ves sockets, cores, etc.|

### **✅ Reserved Instances - Tipos adicionales**

1. **Standard Reserved Instances**:
    - **No se pueden cambiar** (tipo de instancia, región).
    - **Mayor descuento**.
2. **Convertible Reserved Instances**:
    - **Se pueden cambiar** (tipo de instancia, familia, SO).
    - **Menor descuento** que Standard, pero más flexibilidad.

### **✅ Estrategia de optimización de costos**

1. **Fase inicial**: Usa **On-Demand** para establecer línea base de uso.
2. **Cargas estables identificadas**: Migra a **Reserved Instances** o **Savings Plans**.
3. **Cargas variables adicionales**: Usa **On-Demand**.
4. **Procesamiento batch/análisis**: Usa **Spot Instances**.
5. **Compliance/licencias**: Usa **Dedicated Hosts**.

### **✅ AWS Cost Explorer**

- **Definición**: Herramienta de AWS para visualizar, entender y administrar costos de AWS.
- **Uso**: Ayuda a identificar patrones de uso para elegir la mejor opción de precios.

### **✅ AWS Compute Optimizer**

- **Definición**: Servicio que recomienda recursos óptimos (tipos de instancia) basándose en datos históricos de uso.
- **Uso**: Ayuda a elegir el tipo de instancia correcto para reducir costos y mejorar rendimiento.

---

## **🎯 Palabras Clave que Suelen Aparecer en el Examen**

- **On-Demand** (Bajo demanda)
- **Savings Plans**
- **Reserved Instances** (Instancias reservadas)
- **Spot Instances** (Instancias spot)
- **Dedicated Hosts** (Hosts dedicados)
- **Dedicated Instances** (Instancias dedicadas)
- **All Upfront / Partial Upfront / No Upfront**
- **Cargas de trabajo de estado estable** (steady-state workloads)
- **Cargas tolerantes a interrupciones**
- **Compromiso a largo plazo**
- **Descuento**
- **Flexibilidad**
- **Cumplimiento regulatorio** (compliance)
- **Licencias de software** (BYOL - Bring Your Own License)
- **Capacidad sobrante**
- **Advertencia de 2 minutos**
- **Dólares por hora**
- **Interrupción**
- **Aislamiento físico**

---

## **📊 Tabla Resumen - Cuándo usar cada opción**

|Escenario|Opción recomendada|
|---|---|
|Aplicación nueva, uso impredecible|**On-Demand**|
|Base de datos que funciona 24/7|**Reserved Instances**|
|Procesamiento batch que puede interrumpirse|**Spot Instances**|
|Uso constante, quiero flexibilidad entre regiones|**Savings Plans**|
|Necesito cumplir con licencias de Windows Server|**Dedicated Hosts**|
|Desarrollo y testing|**On-Demand**|
|Análisis de big data tolerante a fallos|**Spot Instances**|
|Servidor web en producción, tráfico predecible|**Reserved Instances o Savings Plans**|

---

