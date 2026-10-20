> **Cómo estudiar esta lección (orden recomendado):** 1) mira la lección en Skill Builder · 2) lee esta nota (10 min) ·
> 3) haz el **Taller** interactivo del portal (10 min) · 4) da la **práctica tipo examen** (25 preguntas, 35 min).
> *Preparada por adelantado y ajustada el 2026-10-19 con la lección y tu comprobación (1/1).*

### **Resumen Ejecutivo**

**Computación en la nube** (*cloud computing*) es, con la definición textual de AWS, **la entrega bajo demanda de recursos
de TI a través de Internet con precios de pago por uso**. En vez de comprar, instalar y mantener servidores propios, la
empresa los «alquila» por minutos o segundos y los devuelve cuando ya no los necesita.

La pregunta de negocio de esta lección es **dónde vive la infraestructura**: toda en la nube, toda en el centro de datos
propio o repartida entre ambos. Eso es el **modelo de implementación** (*deployment model*), y el examen lo pregunta con
escenarios: «una empresa tiene X restricción… ¿qué modelo debe usar?».

**Analogía:** tener servidores propios es como **comprar un auto**: pagas todo al inicio, lo mantienes tú y queda parado en
la cochera la mayor parte del día. La nube es como **pedir un taxi por aplicación**: pides cuando lo necesitas, pagas el
trayecto y no te ocupas del mantenimiento. La **híbrida** es tener tu auto para ir al trabajo y pedir taxi para los viajes largos.

---

### **Conceptos Clave**

#### 1. Las 3 palabras de la definición (High)

| Palabra | Qué significa | Cómo aparece en el examen |
|---|---|---|
| **Bajo demanda** (*on-demand*) | Pides recursos cuando los necesitas, en minutos, sin contrato previo | «aprovisionar en minutos», «sin esperar semanas por hardware» |
| **A través de Internet** | Accedes a los servicios por la red (consola web, línea de comandos o API) | «acceso desde cualquier lugar», «sin centro de datos propio» |
| **Pago por uso** (*pay-as-you-go*) | Pagas solo lo que consumes y dejas de pagar al apagar el recurso | «sin pagos iniciales», «gasto variable», «dejar de pagar al desaprovisionar» |

> **TI** = Tecnologías de la Información: servidores, almacenamiento, bases de datos, redes, software. **API** (*Application
> Programming Interface*) = forma en que un programa le pide algo a otro; en AWS **todo** se puede pedir por API, incluso crear servidores.

#### 2. Los 3 modelos de implementación (High — dominio 3, tarea 3.1)

Nombres **en la lección** (Skill Builder en español): **Implementación basada en la nube**, **Implementación en las
instalaciones** y **Implementación híbrida**. En el examen también: «nube», «on-premises» / «nube privada», «híbrida».

| Modelo | Dónde corren las aplicaciones | Cuándo se elige | Palabras gatillo |
|---|---|---|---|
| **Nube** (*cloud-based*, también «todo en la nube») | 100 % en la nube | Aplicaciones nuevas (*cloud-native*) o migrar todo lo existente | «empresa nueva», «sin centro de datos», «migrar todas las aplicaciones», «construir en la nube» |
| **On-premises** (= **nube privada**, *private cloud*) | En el centro de datos propio, con virtualización y herramientas de gestión de recursos | Pocas veces; requisitos muy estrictos y cero dependencia externa | «recursos en sus propias instalaciones», «virtualización local», «nube privada» |
| **Híbrida** (*hybrid*) | Una parte on-premises **conectada** a recursos en la nube | Sistemas antiguos (*legacy*) que conviene dejar on-premises, leyes que obligan a guardar ciertos datos localmente, migración por etapas | «conectar su centro de datos con AWS», «mantener algunas aplicaciones locales», «regulación», «legacy» |

- **On-premises ≠ «sin beneficios de la nube»:** usa **virtualización** (varias máquinas virtuales en un servidor físico),
  así que algo de flexibilidad tiene; pero **no** tiene pago por uso ni capacidad ilimitada: el hardware se compra igual.
- **Híbrida en AWS:** la conexión entre el centro de datos y AWS se hace con **AWS Site-to-Site VPN** (túnel cifrado por
  Internet) o **AWS Direct Connect** (línea privada dedicada). Se ven a fondo en el Módulo 5 (Redes). **AWS Outposts**
  lleva hardware administrado por AWS **dentro** del centro de datos del cliente.

#### 3. Modelos de servicio: IaaS, PaaS y SaaS (Medium — extra que el examen evalúa)

No suele estar en esta lección, pero el examen lo usa (sobre todo junto a la **responsabilidad compartida**, Módulo 1 L5):

| Modelo | Qué te da AWS | Qué gestionas tú | Ejemplo AWS | Analogía (pizza) |
|---|---|---|---|---|
| **IaaS** — Infraestructura como servicio | Servidores, red, almacenamiento | Sistema operativo, parches, aplicación, datos | **Amazon EC2** | Compras la masa y los ingredientes, hornea tú |
| **PaaS** — Plataforma como servicio | Además el SO y el entorno de ejecución | Tu código y tus datos | **AWS Elastic Beanstalk** | Pizza congelada: solo la metes al horno |
| **SaaS** — Software como servicio | La aplicación completa | Solo usarla (y tus datos/usuarios) | Software SaaS de terceros que se compra en **AWS Marketplace**; fuera de AWS: Gmail, Microsoft 365, Salesforce | Pizza a domicilio |

> Regla de oro de responsabilidad: **mientras más «aaS» subes (IaaS → PaaS → SaaS), menos gestionas tú y más AWS.**
> En IaaS (EC2) el **parcheo del sistema operativo es tuyo** — seguridad **EN** la nube. El hardware y los centros de datos
> son siempre de AWS — seguridad **DE** la nube.

#### 4. Por qué la nube cambia la economía (High — se profundiza en la L3)

- **CapEx → OpEx:** de gasto de capital (gran compra inicial de hardware) a **gasto variable** según consumo.
- **Dejar de adivinar la capacidad:** se aprovisiona lo que la demanda pide, ni de más (capacidad ociosa) ni de menos (clientes perdidos).
- Los **6 beneficios** completos están en la nota de la **Lección 3**.

---

### **Lo que agrega el video (contexto y detalles)**

- **Historia de AWS (Low para el examen, útil para entender):** a inicios de los 2000, Amazon.com crecía y su equipo de TI
  creó herramientas estandarizadas para escalar. En **2003** pensaron ofrecer ese conocimiento a otras empresas: alquilar
  cómputo y almacenamiento **bajo demanda**, sin inversión inicial en hardware. **Nov 2004:** primer servicio público,
  **Amazon SQS** (*Simple Queue Service*, colas de mensajes; en la transcripción sale mal escrito). **2006:** **Amazon S3**
  (almacenamiento) y **Amazon EC2** (cómputo). Primero lo usaron startups y desarrolladores; luego grandes empresas y gobiernos.
- **Centro de datos:** edificio o conjunto de edificios que alberga servidores, con energía, refrigeración y seguridad
  **redundantes** (duplicadas para que una falla no detenga la operación). Antes de la nube había dos opciones: centro de
  datos **propio** o **colocation** (alquilar espacio en una instalación compartida, pero el hardware sigue siendo tuyo).
- **Ejemplo de «bajo demanda» del video:** necesitas 2000 TB de almacenamiento → abres una cuenta, subes archivos a
  **Amazon S3** y listo; si los borras, dejas de pagar de inmediato.
- **«A través de Internet»:** desde la casa, el trabajo o cualquier país, con conexión a Internet y el navegador
  (consola de AWS).
- **«Pago por uso»:** desaprovisionas lo que no usas, **sin contratos y sin llamar a un vendedor**.

> **Comprobación de Skill Builder (2026-10-19): 1/1.** ONG con datos confidenciales que **deben quedarse en su país**
> (cumplimiento) + necesidad de **escalar en picos estacionales** → datos en las instalaciones + nube para escalar =
> **Implementación híbrida**. Distractor inventado: «Implementación con cumplimiento de datos» (no existe ese tipo).

---

### **Tabla Comparativa Rápida: On-premises vs. Nube de AWS**

| | On-premises (centro de datos propio) | Nube de AWS |
|---|---|---|
| **Costo inicial** | Muy alto (CapEx: compras hardware) | Cero o muy bajo (OpEx: pagas por uso) |
| **Tiempo para tener un servidor** | Semanas o meses (comprar, recibir, instalar) | Minutos |
| **Mantenimiento físico** | Tuyo: energía, refrigeración, racks, cableado | De AWS |
| **Capacidad** | Fija: la que compraste | Elástica: sube y baja con la demanda |
| **Llegar a otro país** | Abrir o alquilar otro centro de datos | Desplegar en otra **Región** de AWS |

---

### **🌎 Casos reales (para fijar la idea)**

- **Netflix — todo en la nube:** completó en 2016 su migración a AWS y cerró sus últimos centros de datos de streaming.
  Ejemplo clásico de **modelo de nube** y de «dejar de gastar dinero en centros de datos».
- **Banco con sistemas antiguos — híbrida:** el núcleo bancario (*core*) sigue on-premises por regulación, pero la app móvil
  y la analítica corren en AWS, conectadas por **Direct Connect**. Es el patrón más típico de las preguntas de **híbrida**.
- **Startup que nace en la nube — cloud-native:** sin hardware propio desde el día uno; paga por uso mientras valida su
  negocio y escala si crece. En el examen: «empresa nueva sin infraestructura» → **modelo de nube**.

---

### **Puntos Críticos (keywords textuales del examen)**

- **«On-demand delivery of IT resources over the Internet with pay-as-you-go pricing»** = definición de cloud computing.
- **«Connect on-premises infrastructure to the cloud»** / «conectar la infraestructura local con la nube» → **Híbrida**.
- **«Private cloud» / «nube privada»** → **On-premises**.
- **«Cloud-native» / «todas las partes de la aplicación se ejecutan en la nube»** → **Nube**.
- **«Legacy applications» + «regulatory requirements»** → casi siempre **Híbrida**.
- **«Virtualization and resource management tools» en sus instalaciones** → **On-premises**.

---

### **Trampas de Examen**

- **Híbrida ≠ multinube:** para AWS, híbrida es **on-premises + nube conectados**. Usar AWS y otro proveedor a la vez es
  *multinube* y **no** es uno de los modelos de implementación de la guía. Si el enunciado dice «su centro de datos
  conectado a AWS», la respuesta es **híbrida**.
- **On-premises también se llama nube privada:** si una opción dice «nube privada» y el escenario habla de «sus propias
  instalaciones con virtualización», es la correcta, aunque la palabra «nube» confunda.
- **«Migrar» no siempre es «todo en la nube»:** si dice «migrar gradualmente» o «mantener temporalmente algunos sistemas
  locales», es **híbrida** durante la migración.
- **¿Gasto fijo o variable?** En AWS la respuesta es **variable (OpEx)**. «Gasto de capital» es lo que se **elimina**.
- **IaaS no significa que AWS parchee tu sistema operativo:** en EC2 el parcheo del SO es del **cliente**.

---

### **Diccionario de Servicios AWS (de esta lección)**

| Servicio | Qué es (corto) | Palabras gatillo | ¿Distractor común? |
|---|---|---|---|
| **Amazon EC2** (*Elastic Compute Cloud*) | Servidores virtuales en la nube (IaaS) | «servidor virtual», «control del sistema operativo» | Aparece como distractor en preguntas de PaaS/serverless |
| **AWS Elastic Beanstalk** | Sube tu código y AWS arma y gestiona el entorno (PaaS) | «solo subir el código», «sin gestionar infraestructura» | Se confunde con CloudFormation (que es infraestructura como código) |
| **AWS Direct Connect** | Conexión de red **privada y dedicada** entre tu centro de datos y AWS | «conexión dedicada», «no pasa por Internet público», «latencia constante» | Se confunde con Site-to-Site VPN |
| **AWS Site-to-Site VPN** | Túnel **cifrado por Internet** entre tu red y AWS | «rápido de configurar», «cifrado sobre Internet», «bajo costo» | Se confunde con Direct Connect |
| **Amazon SQS** (*Simple Queue Service*) | Colas de mensajes entre componentes; **primer servicio público de AWS (2004)** | «cola», «desacoplar» (Módulo 2) | — |
| **Amazon S3** (*Simple Storage Service*) | Almacenamiento de objetos (archivos) prácticamente ilimitado | «guardar archivos», «2000 TB», «pagar por GB» | Con EBS (Módulo 6) |
| **AWS Outposts** | Hardware y servicios de AWS instalados **en tu propio centro de datos** | «ejecutar servicios de AWS on-premises», «latencia ultrabaja local» | Distractor en preguntas de Local Zones / híbrida |

> **Costo:** para conectar on-premises con AWS, la opción **más barata y rápida** de montar es **Site-to-Site VPN**;
> **Direct Connect** cuesta más y tarda semanas en instalarse, pero da ancho de banda dedicado y latencia constante.
