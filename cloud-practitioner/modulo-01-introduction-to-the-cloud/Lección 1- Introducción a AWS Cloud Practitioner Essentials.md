## [Lección 1: Introducción a AWS Cloud Practitioner Essentials]

> Objetivo oficial de la lección: **describir los aspectos fundamentales del modelo cliente-servidor.**
> Idea de negocio que deja: en AWS **solo pagas por lo que usas** y la capacidad se ajusta a la demanda.

### **Resumen Ejecutivo**
AWS nació de la necesidad de Amazon.com de estandarizar su infraestructura interna para manejar el crecimiento masivo a principios de los 2000. Lo que comenzó como herramientas de eficiencia interna evolucionó en 2006 en una plataforma pública que permite a cualquier empresa "alquilar" recursos de TI. La computación en la nube se define formalmente como la **entrega bajo demanda de potencia de cómputo, bases de datos, almacenamiento y otros recursos de TI a través de Internet con un modelo de precios de pago por uso.**

**Por qué le importa a una empresa:** en un centro de datos propio (*on-premises*) la capacidad se compra por adelantado y no se puede «triplicar chasqueando los dedos». En AWS se **aprovisiona** al momento cuando sube la demanda y se **desaprovisiona** cuando baja, y en ese instante se deja de pagar.

---

### **La analogía de la cafetería** (se usa en todo el curso)

| Cafetería | Nube de AWS |
|---|---|
| Cliente que pide un café | **Cliente**: usuario, navegador o aplicación que envía una **solicitud** (*request*) |
| Barista | **Servidor**: en AWS, un servidor virtual (instancia de **Amazon EC2**) |
| El barista valida el pago y si puede preparar lo pedido | El servidor **valida** la solicitud (permisos, que sea legítima) |
| El café entregado | La **respuesta** (*response*): una página, un archivo, el resultado de un análisis |
| Baristas pagados solo por las horas trabajadas | **Pago por uso**: solo pagas los recursos mientras están en uso |
| Contratar 10 baristas todo el día para el lanzamiento de una bebida | **Sobreaprovisionar**: pagar capacidad ociosa en las horas flojas (el problema del *on-premises*) |
| Más baristas los días llenos, menos los días tranquilos | **Elasticidad**: ajustar la capacidad a la demanda real |

---

### **Conceptos Clave**

*   **Modelo Cliente-Servidor (High en esta lección, Medium en el examen):** un *cliente* hace una solicitud; el *servidor*, **con permisos**, la valida y responde. El cliente siempre inicia la conversación. En AWS el servidor típico es una instancia de Amazon EC2 (servidor virtual).
*   **Entrega Bajo Demanda (High):** Los recursos están disponibles exactamente cuando se necesitan. No hay que esperar semanas por hardware físico; se **aprovisionan** en minutos.
*   **Aprovisionar / Desaprovisionar (Medium):** aprovisionar = asignar y dejar listos recursos de TI para usarlos de inmediato. Desaprovisionar = liberarlos; **al desaprovisionar se deja de pagar de inmediato**. Se puede automatizar definiendo la configuración correcta.
*   **Pago por Uso (Pay-as-you-go) (High):** Modelo financiero donde se cambian los gastos de capital iniciales (**CapEx**, *capital expenditure*: comprar servidores, edificios) por gastos variables u operativos (**OpEx**, *operational expenditure*: pagar el consumo mes a mes). **Sin pagos por adelantado** y sin restricciones de capacidad.
*   **Alcance de AWS (Low):** según la lección, AWS es la nube más completa y adoptada del mundo, con **millones de clientes** y **más de 200 servicios** completos (el video de la L2 dice «más de 300») (cómputo, IA generativa, bases de datos, almacenamiento, entrega de contenido…). Las cifras exactas no se preguntan; sí la idea de «amplia gama de servicios».
*   **Centros de Datos (Medium):** Edificios diseñados para albergar los servidores y servicios de AWS. Cuentan con sistemas redundantes de energía, refrigeración y alta seguridad para garantizar la continuidad. Su seguridad física es responsabilidad de AWS (seguridad **DE** la nube).
*   **Administración Remota (Low):** La gestión a través de un navegador web permite administrar la infraestructura desde cualquier lugar del mundo con conexión a Internet.
*   **Tipos de Implementación (High — se ven a fondo en la Lección 2):**
    *   **Nube (Cloud-based):** Todo se ejecuta en la nube. Ideal para startups o nuevas aplicaciones.
    *   **On-premises (Private Cloud):** Recursos desplegados localmente usando virtualización. Se busca por latencia o seguridad estricta, pero carece de la elasticidad total de AWS.
    *   **Híbrida:** Conecta infraestructura local con recursos de la nube. Común en migraciones o empresas con requisitos regulatorios específicos.

---

### **Tabla Comparativa Rápida: On-premises vs. Nube de AWS**

| | On-premises (centro de datos propio) | Nube de AWS |
|---|---|---|
| Pago | Por adelantado (CapEx) | Por uso (OpEx), sin pago inicial |
| Capacidad | Fija; se compra pensando en el pico | Se aprovisiona y desaprovisiona según la demanda |
| Horas flojas | Se paga la capacidad ociosa | Se libera y se deja de pagar |
| Tiempo para tener un servidor | Semanas (comprar, instalar) | Minutos |
| Mantenimiento físico | La empresa | AWS |

---

### **Puntos Críticos (Keywords del Examen)**

*   **«Solo pagas por lo que usas» / «sin pagos por adelantado»** → modelo de pago por uso (*pay-as-you-go*).
*   **«Solicitud y respuesta», «el cliente pide, el servidor responde»** → modelo cliente-servidor.
*   **Elasticidad:** Capacidad de ajustar los recursos (subir o bajar) automáticamente según la demanda real.
*   **Agilidad:** Reducción drástica del tiempo necesario para disponer de recursos de TI para los desarrolladores (de semanas a minutos).
*   **Economías de Escala:** AWS puede lograr precios más bajos debido a que la agregación de miles de clientes permite comprar hardware a menor costo.
*   **Eliminación de "Guessing Capacity":** Ya no es necesario predecir cuántos servidores necesitarás para el próximo año; escala según sea necesario.
*   **Despliegue Global en Minutos:** Capacidad de lanzar aplicaciones en múltiples regiones del mundo con unos pocos clics.

---

### **Trampas de Examen**

*   **Híbrida ≠ multinube:** para AWS, *híbrida* es **on-premises + nube** conectados. Usar AWS y otro proveedor de nube a la vez es **multinube**, no un modelo de implementación de la guía. Si el enunciado habla de «centro de datos propio conectado a AWS», la respuesta es híbrida.
*   **Bajo Demanda vs. Reservado:** No confundas la "entrega bajo demanda" (disponibilidad inmediata) con el "modelo de precios bajo demanda" (precio estándar sin compromiso).
*   **On-premises vs. AWS:** En el examen, "On-premises" suele ser el escenario de "dolor" (costos fijos, mantenimiento manual, desperdicio de recursos) frente a la solución de AWS.
*   **Economías de escala vs. pago por uso:** «precios más bajos porque AWS compra a gran escala» → economías de escala. «No pagar por capacidad ociosa» → pago por uso / dejar de adivinar la capacidad. Las dos bajan costos, pero por motivos distintos.
*   **El servidor no actúa solo:** en el modelo cliente-servidor el servidor **responde** a solicitudes; no envía cosas por iniciativa propia ni el cliente se «sirve solo».
*   **Infraestructura como Servicio (IaaS):** Aunque la lección no lo nombra directamente, EC2 y S3 son ejemplos fundamentales de IaaS que el examen espera que reconozcas como la base del cloud computing.

---

### **Diccionario de Servicios AWS**

| Servicio | Qué es | Palabras gatillo |
|---|---|---|
| **Amazon EC2** (*Elastic Compute Cloud*) | Servidores virtuales en la nube; el «barista» de la analogía | «servidor virtual», «instancia», «capacidad de cómputo redimensionable» |
| **Amazon S3** (*Simple Storage Service*) | Almacenamiento de objetos (archivos) prácticamente ilimitado | «guardar archivos, imágenes, respaldos» |
| **Amazon Bedrock** | Acceso a modelos de IA generativa (*foundation models*) por API, sin administrar infraestructura. La lección menciona la IA generativa entre los servicios de AWS. **Ojo (verificado 2026-10-19):** Bedrock **no figura** en la lista oficial de servicios del CLF-C02; en IA la guía nombra SageMaker AI, Amazon Q, Lex, Comprehend, Rekognition, Polly, Textract, Transcribe y Translate | «IA generativa», «modelos fundacionales», «sin entrenar un modelo propio» |
