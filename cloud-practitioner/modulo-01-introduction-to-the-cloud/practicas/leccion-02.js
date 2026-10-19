window.BANCO = {
  "id": "m01-l02",
  "titulo": "M1 L2 — ¿Qué es la computación en la nube?",
  "tipo": "leccion",
  "modulo": 1,
  "leccion": "2",
  "preguntas": [
    {
      "id": "m01-l02-q01",
      "dominio": 3,
      "tarea": "3.1",
      "enunciado": "Una aseguradora tiene aplicaciones heredadas (legacy) en su centro de datos que no puede migrar en los próximos dos años. Quiere construir sus aplicaciones nuevas en AWS y que estas se comuniquen con los sistemas heredados. ¿Qué modelo de implementación describe esta arquitectura?",
      "opciones": [
        { "texto": "Implementación híbrida", "correcta": true, "porque": "Conecta la infraestructura on-premises (los sistemas heredados) con recursos en la nube." },
        { "texto": "Implementación en la nube", "correcta": false, "porque": "Exigiría que todas las partes de la aplicación corran en la nube; aquí una parte sigue en el centro de datos." },
        { "texto": "Implementación on-premises", "correcta": false, "porque": "Dejaría todo en el centro de datos propio, sin usar AWS para lo nuevo." },
        { "texto": "Implementación multinube", "correcta": false, "porque": "Multinube es usar varios proveedores de nube; además no es uno de los modelos de implementación de la guía de AWS." }
      ],
      "explicacion": "«Legacy que se queda» + «lo nuevo en AWS» + «se comunican» = híbrida."
    },
    {
      "id": "m01-l02-q02",
      "dominio": 3,
      "tarea": "3.1",
      "enunciado": "Una startup de pagos digitales acaba de constituirse y no tiene servidores ni centro de datos. Quiere construir todos los componentes de su producto con servicios de AWS desde el primer día. ¿Qué modelo de implementación debe usar?",
      "opciones": [
        { "texto": "Implementación en la nube (cloud-native)", "correcta": true, "porque": "Todas las partes de la aplicación se ejecutan en la nube; es el caso típico de una empresa nueva." },
        { "texto": "Implementación híbrida", "correcta": false, "porque": "Requiere infraestructura on-premises para conectar con la nube, y la startup no tiene ninguna." },
        { "texto": "Implementación on-premises", "correcta": false, "porque": "Obligaría a comprar servidores propios, justo lo que quiere evitar." },
        { "texto": "Nube privada", "correcta": false, "porque": "Nube privada es otro nombre del modelo on-premises: recursos en instalaciones propias." }
      ],
      "explicacion": "«Empresa nueva, sin infraestructura» → modelo de nube."
    },
    {
      "id": "m01-l02-q03",
      "dominio": 1,
      "tarea": "1.1",
      "enunciado": "El gerente de TI de una distribuidora explica por qué su centro de datos propio le resulta caro: compró servidores pensando en el pico de diciembre y el resto del año la mitad está apagada. ¿Qué desventaja del modelo on-premises describe?",
      "opciones": [
        { "texto": "Hay que comprar la capacidad por adelantado y se paga aunque quede ociosa", "correcta": true, "porque": "En on-premises la capacidad es fija: se compra para el pico y el resto del tiempo se desperdicia." },
        { "texto": "No permite usar virtualización", "correcta": false, "porque": "On-premises sí puede usar virtualización; por eso también se llama nube privada." },
        { "texto": "Los datos siempre quedan menos protegidos que en la nube", "correcta": false, "porque": "La seguridad depende de cómo se gestione; no es la desventaja que describe el escenario." },
        { "texto": "No se puede acceder a los servidores por la red", "correcta": false, "porque": "Los servidores on-premises sí se acceden por la red; el problema es de capacidad y costo." }
      ],
      "explicacion": "Capacidad fija comprada para el pico = pagar capacidad ociosa. La nube permite dejar de adivinar la capacidad."
    },
    {
      "id": "m01-l02-q04",
      "dominio": 3,
      "tarea": "3.1",
      "enunciado": "Un banco evalúa qué modelo de implementación adoptar. ¿Qué situaciones son razones típicas para elegir un modelo híbrido?",
      "opciones": [
        { "texto": "Una regulación le exige mantener ciertos datos de clientes en sus propias instalaciones", "correcta": true, "porque": "Los requisitos regulatorios son una razón clásica para dejar una parte on-premises y conectarla con la nube." },
        { "texto": "Tiene aplicaciones heredadas que es más conveniente mantener on-premises por ahora", "correcta": true, "porque": "Las aplicaciones legacy difíciles de migrar son el otro motivo típico de la híbrida." },
        { "texto": "Quiere cerrar por completo su centro de datos este año", "correcta": false, "porque": "Cerrar el centro de datos y llevar todo a AWS es el modelo de nube." },
        { "texto": "Quiere usar AWS y otro proveedor de nube pública al mismo tiempo", "correcta": false, "porque": "Eso es multinube, no híbrida; la híbrida combina on-premises con la nube." },
        { "texto": "No tiene ninguna infraestructura propia", "correcta": false, "porque": "Sin infraestructura propia no hay nada que conectar: correspondería el modelo de nube." }
      ],
      "explicacion": "Gatillos de híbrida: «regulación» y «legacy»."
    },
    {
      "id": "m01-l02-q05",
      "dominio": 1,
      "tarea": "1.1",
      "enunciado": "Una desarrolladora de una agencia de viajes necesita un servidor para probar una nueva función. En la empresa anterior pedía hardware y esperaba seis semanas; en AWS lo tiene funcionando en tres minutos. ¿Qué característica de la computación en la nube lo permite?",
      "opciones": [
        { "texto": "El aprovisionamiento de recursos bajo demanda", "correcta": true, "porque": "Bajo demanda = pedir recursos de TI cuando se necesitan y tenerlos en minutos." },
        { "texto": "Las economías de escala", "correcta": false, "porque": "Explican por qué los precios son bajos, no la rapidez para obtener un servidor." },
        { "texto": "El pago anticipado de la capacidad máxima", "correcta": false, "porque": "La nube elimina el pago anticipado; no es lo que acelera el aprovisionamiento." },
        { "texto": "La implementación on-premises", "correcta": false, "porque": "On-premises es justamente el escenario de esperar semanas por hardware." }
      ],
      "explicacion": "«En minutos», «sin esperar hardware» → bajo demanda."
    },
    {
      "id": "m01-l02-q06",
      "dominio": 1,
      "tarea": "1.4",
      "enunciado": "El área de finanzas de una cadena de gimnasios clasifica sus gastos de TI después de migrar a AWS. ¿Cuál de estos gastos es un gasto operativo variable (OpEx)?",
      "opciones": [
        { "texto": "La factura mensual de AWS, que sube o baja según las horas de cómputo usadas", "correcta": true, "porque": "Varía con el consumo: es el gasto variable que trae la nube." },
        { "texto": "La compra de servidores para los próximos cinco años", "correcta": false, "porque": "Es una gran inversión inicial: gasto de capital (CapEx)." },
        { "texto": "La construcción de una sala de servidores con aire acondicionado", "correcta": false, "porque": "Inversión en infraestructura física: CapEx." },
        { "texto": "La compra de licencias perpetuas para todos los servidores", "correcta": false, "porque": "Pago único y anticipado: CapEx." }
      ],
      "explicacion": "OpEx = varía con el uso. La nube cambia CapEx por gasto variable."
    },
    {
      "id": "m01-l02-q07",
      "dominio": 2,
      "tarea": "2.1",
      "enunciado": "Una empresa de software contable ejecuta su aplicación en instancias de Amazon EC2. Una auditoría detecta que el sistema operativo de las instancias no tiene los últimos parches de seguridad. ¿Quién es responsable de aplicarlos?",
      "opciones": [
        { "texto": "El cliente, porque en EC2 (IaaS) gestiona el sistema operativo invitado", "correcta": true, "porque": "En IaaS el cliente controla y parchea el sistema operativo: seguridad EN la nube." },
        { "texto": "AWS, porque EC2 es un servicio administrado", "correcta": false, "porque": "AWS gestiona el hardware y la virtualización, no el sistema operativo que el cliente instala en EC2." },
        { "texto": "AWS y el cliente por partes iguales, cada uno la mitad de los parches", "correcta": false, "porque": "La responsabilidad se divide por capas, no por cantidad de parches; el SO es del cliente." },
        { "texto": "El proveedor del sistema operativo, de forma automática", "correcta": false, "porque": "El fabricante publica los parches, pero aplicarlos en EC2 es tarea del cliente." }
      ],
      "explicacion": "EC2 = IaaS → el SO es del cliente. AWS protege el hardware y las instalaciones (seguridad DE la nube)."
    },
    {
      "id": "m01-l02-q08",
      "dominio": 3,
      "tarea": "3.3",
      "enunciado": "Un equipo pequeño de desarrolladores web quiere subir el código de su aplicación y que AWS se encargue automáticamente del aprovisionamiento de capacidad, el balanceo de carga, el escalado y el monitoreo de salud. No quiere administrar servidores. ¿Qué servicio cumple este requisito con la menor carga operativa?",
      "opciones": [
        { "texto": "AWS Elastic Beanstalk", "correcta": true, "porque": "Es PaaS: subes el código y AWS arma y gestiona el entorno completo." },
        { "texto": "Amazon EC2", "correcta": false, "porque": "Es IaaS: el equipo tendría que configurar y administrar los servidores." },
        { "texto": "AWS CloudFormation", "correcta": false, "porque": "Es infraestructura como código: describe recursos en plantillas, pero no gestiona la aplicación por ti." },
        { "texto": "AWS Outposts", "correcta": false, "porque": "Lleva hardware de AWS al centro de datos del cliente; no resuelve el despliegue de la aplicación." }
      ],
      "explicacion": "«Solo subir el código» + «sin administrar servidores» → Elastic Beanstalk (PaaS)."
    },
    {
      "id": "m01-l02-q09",
      "dominio": 3,
      "tarea": "3.3",
      "enunciado": "Un consultor prepara una capacitación y clasifica los servicios de AWS por modelo de servicio. Para Amazon EC2, el cliente elige el sistema operativo, lo configura y controla la red de sus servidores virtuales. ¿Qué modelo de servicio describe mejor a Amazon EC2?",
      "opciones": [
        { "texto": "Infraestructura como servicio (IaaS)", "correcta": true, "porque": "Da servidores virtuales, red y almacenamiento; el cliente gestiona el SO hacia arriba." },
        { "texto": "Plataforma como servicio (PaaS)", "correcta": false, "porque": "En PaaS el proveedor gestiona también el SO; el cliente solo pone su código." },
        { "texto": "Software como servicio (SaaS)", "correcta": false, "porque": "SaaS es una aplicación terminada que solo se usa." },
        { "texto": "Función como servicio (FaaS)", "correcta": false, "porque": "FaaS ejecuta funciones sin gestionar servidores (como AWS Lambda); en EC2 sí se gestionan." }
      ],
      "explicacion": "Control del sistema operativo = IaaS = EC2."
    },
    {
      "id": "m01-l02-q10",
      "dominio": 3,
      "tarea": "3.1",
      "enunciado": "Una planta de manufactura necesita ejecutar servicios de AWS dentro de su propio centro de datos, porque sus sistemas de control requieren latencia muy baja con las máquinas de la planta. ¿Qué servicio de AWS cumple este requisito?",
      "opciones": [
        { "texto": "AWS Outposts", "correcta": true, "porque": "Instala hardware y servicios administrados por AWS en las instalaciones del cliente." },
        { "texto": "AWS Direct Connect", "correcta": false, "porque": "Es una conexión de red dedicada hacia AWS; los servicios seguirían corriendo en una Región, lejos de la planta." },
        { "texto": "AWS Site-to-Site VPN", "correcta": false, "porque": "Cifra la conexión entre la red local y AWS, pero no lleva servicios de AWS al sitio." },
        { "texto": "AWS Elastic Beanstalk", "correcta": false, "porque": "Despliega aplicaciones en la nube de AWS, no en el centro de datos del cliente." }
      ],
      "explicacion": "«Servicios de AWS dentro de su centro de datos» → AWS Outposts."
    },
    {
      "id": "m01-l02-q11",
      "dominio": 3,
      "tarea": "3.1",
      "enunciado": "Una empresa mediana quiere conectar su centro de datos con su entorno en AWS para una arquitectura híbrida. Necesita que la conexión esté cifrada, que se pueda configurar rápido y al menor costo, y acepta que el tráfico viaje por Internet. ¿Qué opción cumple estos requisitos?",
      "opciones": [
        { "texto": "AWS Site-to-Site VPN", "correcta": true, "porque": "Crea un túnel cifrado por Internet; es rápido de configurar y la opción de menor costo." },
        { "texto": "AWS Direct Connect", "correcta": false, "porque": "Es una línea privada dedicada: más cara y tarda semanas en instalarse." },
        { "texto": "AWS Outposts", "correcta": false, "porque": "Lleva hardware de AWS al centro de datos; no es la forma económica de conectar dos redes." },
        { "texto": "Amazon EC2", "correcta": false, "porque": "Es un servicio de cómputo, no de conectividad entre redes." }
      ],
      "explicacion": "«Cifrado por Internet» + «rápido» + «bajo costo» → Site-to-Site VPN. «Dedicada, sin Internet público, latencia constante» → Direct Connect."
    },
    {
      "id": "m01-l02-q12",
      "dominio": 1,
      "tarea": "1.1",
      "enunciado": "En la inducción de una empresa de telecomunicaciones, el instructor pide identificar las características que forman la definición de computación en la nube según AWS. ¿Cuáles son?",
      "opciones": [
        { "texto": "Entrega bajo demanda de recursos de TI", "correcta": true, "porque": "Es la primera parte de la definición: recursos cuando se necesitan." },
        { "texto": "Acceso a los recursos a través de Internet", "correcta": true, "porque": "Los recursos se entregan y administran por la red." },
        { "texto": "Precios de pago por uso", "correcta": true, "porque": "Se paga solo lo que se consume." },
        { "texto": "Contrato mínimo de un año para usar cualquier servicio", "correcta": false, "porque": "No hay permanencia mínima obligatoria; los compromisos son opcionales y sirven para obtener descuentos." },
        { "texto": "Hardware dedicado exclusivo para cada cliente", "correcta": false, "porque": "La nube comparte infraestructura entre clientes de forma aislada; el hardware dedicado es una opción, no parte de la definición." },
        { "texto": "Pago anticipado de la capacidad máxima prevista", "correcta": false, "porque": "Es el modelo on-premises que la nube elimina." }
      ],
      "explicacion": "Definición textual: «on-demand delivery of IT resources over the Internet with pay-as-you-go pricing»."
    },
    {
      "id": "m01-l02-q13",
      "dominio": 3,
      "tarea": "3.1",
      "enunciado": "Una empresa de marketing no tiene centro de datos. Usa AWS para su sitio web y otro proveedor de nube pública para su correo corporativo. Un consultor afirma que tiene una «implementación híbrida». ¿Qué afirmación es correcta?",
      "opciones": [
        { "texto": "No es híbrida: la implementación híbrida conecta infraestructura on-premises con la nube, y esta empresa no tiene on-premises", "correcta": true, "porque": "Usar dos nubes públicas es multinube; sin infraestructura propia no hay híbrida." },
        { "texto": "Es híbrida porque combina dos proveedores de nube", "correcta": false, "porque": "Combinar proveedores de nube es multinube, no híbrida." },
        { "texto": "Es on-premises porque el correo no está en AWS", "correcta": false, "porque": "On-premises significa instalaciones propias; el correo está en otra nube pública." },
        { "texto": "Es una nube privada porque cada proveedor le asigna recursos aislados", "correcta": false, "porque": "La nube privada es la infraestructura en instalaciones propias, no recursos aislados en una nube pública." }
      ],
      "explicacion": "Trampa clásica: híbrida = on-premises + nube. Dos nubes públicas = multinube."
    },
    {
      "id": "m01-l02-q14",
      "dominio": 3,
      "tarea": "3.1",
      "enunciado": "Los documentos de TI de un laboratorio dicen «usamos una nube privada». En la revisión, el auditor encuentra que todos los servidores están en el edificio del laboratorio y que usan virtualización y herramientas de gestión de recursos, sin conexión a ningún proveedor de nube. ¿Qué modelo de implementación es?",
      "opciones": [
        { "texto": "On-premises", "correcta": true, "porque": "On-premises también se llama nube privada: recursos propios con virtualización y gestión de recursos." },
        { "texto": "Implementación en la nube", "correcta": false, "porque": "No usa ningún proveedor de nube: nada corre en la nube pública." },
        { "texto": "Implementación híbrida", "correcta": false, "porque": "No hay conexión con ningún proveedor de nube que combinar." },
        { "texto": "Software como servicio (SaaS)", "correcta": false, "porque": "SaaS es un modelo de servicio, no de implementación, y aquí el laboratorio gestiona todo." }
      ],
      "explicacion": "«Nube privada» + «sus propias instalaciones» + «virtualización» → on-premises."
    },
    {
      "id": "m01-l02-q15",
      "dominio": 1,
      "tarea": "1.1",
      "enunciado": "Una consultora tiene ingenieros en Perú, Chile y Colombia que trabajan desde casa. Necesitan crear y administrar servidores sin ir a una oficina ni a un centro de datos. ¿Qué característica de la nube lo hace posible?",
      "opciones": [
        { "texto": "Los recursos se acceden y administran a través de Internet, con la consola, la línea de comandos o la API", "correcta": true, "porque": "La nube entrega los recursos por Internet: se administran desde cualquier lugar con permisos." },
        { "texto": "Cada ingeniero recibe un servidor físico en su casa", "correcta": false, "porque": "En la nube no se envía hardware; los recursos están en los centros de datos de AWS." },
        { "texto": "Los centros de datos de AWS abren al público para visitas técnicas", "correcta": false, "porque": "El acceso físico a los centros de datos de AWS está muy restringido; no es necesario para administrar recursos." },
        { "texto": "Los servidores en la nube funcionan sin conexión de red", "correcta": false, "porque": "Al contrario: se usan y administran por la red." }
      ],
      "explicacion": "«Desde cualquier lugar» → a través de Internet (consola, CLI, API)."
    },
    {
      "id": "m01-l02-q16",
      "dominio": 4,
      "tarea": "4.1",
      "enunciado": "Un equipo de QA deja encendidos diez servidores virtuales de AWS durante el fin de semana, aunque nadie los usa. El lunes el jefe de finanzas pregunta por el costo. ¿Qué es correcto?",
      "opciones": [
        { "texto": "Se cobran las horas que estuvieron en ejecución; apagarlos o eliminarlos al terminar evita ese gasto", "correcta": true, "porque": "Pago por uso: se paga mientras el recurso está aprovisionado y en ejecución, aunque nadie lo use." },
        { "texto": "No se cobra nada porque no hubo usuarios conectados", "correcta": false, "porque": "Se cobra el recurso aprovisionado, no la cantidad de usuarios." },
        { "texto": "AWS los apaga automáticamente los fines de semana", "correcta": false, "porque": "AWS no apaga recursos por su cuenta; eso lo configura el cliente." },
        { "texto": "Se cobra una tarifa fija mensual sin importar si están encendidos", "correcta": false, "porque": "No hay tarifa fija: el costo depende del tiempo de uso." }
      ],
      "explicacion": "Pagas lo que tienes encendido. Apagar entornos de prueba cuando no se usan es la forma más simple de ahorrar."
    },
    {
      "id": "m01-l02-q17",
      "dominio": 3,
      "tarea": "3.3",
      "enunciado": "Una empresa de agricultura instala sensores de humedad en sus campos. Cada sensor envía sus lecturas a una aplicación que corre en Amazon EC2, y la aplicación responde con una confirmación. En el modelo cliente-servidor, ¿qué papel cumple cada sensor?",
      "opciones": [
        { "texto": "Cliente, porque inicia la solicitud", "correcta": true, "porque": "El cliente es quien envía la solicitud; el servidor la valida y responde." },
        { "texto": "Servidor, porque genera los datos", "correcta": false, "porque": "Generar datos no lo hace servidor: el servidor es quien recibe y responde las solicitudes." },
        { "texto": "Respuesta, porque contiene la lectura", "correcta": false, "porque": "La respuesta es lo que devuelve el servidor (la confirmación), no el dispositivo." },
        { "texto": "Centro de datos, porque almacena la información", "correcta": false, "porque": "El sensor no almacena ni procesa solicitudes de otros." }
      ],
      "explicacion": "Quien pide = cliente (aunque no sea una persona). Quien responde = servidor (aquí, EC2)."
    },
    {
      "id": "m01-l02-q18",
      "dominio": 1,
      "tarea": "1.1",
      "enunciado": "Una tienda en línea con servidores propios compró poca capacidad para ahorrar. Durante el Cyber Day la web se volvió lenta y muchos clientes abandonaron sus compras. ¿Qué problema describe y qué lo evita en la nube?",
      "opciones": [
        { "texto": "Subaprovisionamiento; en la nube se agregan recursos cuando sube la demanda y se quitan cuando baja", "correcta": true, "porque": "Comprar de menos degrada la experiencia; la nube permite escalar según la demanda real." },
        { "texto": "Sobreaprovisionamiento; en la nube se compran más servidores por adelantado", "correcta": false, "porque": "Sobreaprovisionar es comprar de más; además, la nube evita las compras anticipadas." },
        { "texto": "Falta de seguridad; en la nube los datos se cifran automáticamente", "correcta": false, "porque": "El escenario es de capacidad, no de seguridad." },
        { "texto": "Exceso de latencia por la distancia; en la nube se cambia de proveedor de Internet", "correcta": false, "porque": "La lentitud se debe a falta de capacidad, no a la distancia." }
      ],
      "explicacion": "De menos = clientes perdidos; de más = dinero desperdiciado. En la nube se deja de adivinar la capacidad."
    },
    {
      "id": "m01-l02-q19",
      "dominio": 2,
      "tarea": "2.1",
      "enunciado": "Una cadena de farmacias migra todas sus aplicaciones desde su centro de datos a AWS. ¿Qué tareas deja de realizar la empresa porque pasan a ser responsabilidad de AWS?",
      "opciones": [
        { "texto": "Mantener la energía y la refrigeración del centro de datos", "correcta": true, "porque": "Las instalaciones físicas son de AWS: seguridad DE la nube." },
        { "texto": "Reemplazar el hardware físico de los servidores cuando falla", "correcta": true, "porque": "El hardware que sostiene los servicios lo gestiona AWS." },
        { "texto": "Decidir qué empleados tienen acceso a sus datos", "correcta": false, "porque": "Los permisos de acceso son siempre del cliente: seguridad EN la nube." },
        { "texto": "Proteger y clasificar los datos de sus clientes", "correcta": false, "porque": "Los datos son siempre responsabilidad del cliente." },
        { "texto": "Configurar su propia aplicación", "correcta": false, "porque": "La aplicación y su configuración siguen siendo del cliente." }
      ],
      "explicacion": "AWS se encarga de lo físico (instalaciones, hardware). El cliente conserva sus datos, accesos y aplicaciones."
    },
    {
      "id": "m01-l02-q20",
      "dominio": 1,
      "tarea": "1.4",
      "enunciado": "Una ticketera necesita diez veces más capacidad solo durante los tres días de preventa de los grandes conciertos del año. Hoy tiene un centro de datos dimensionado para ese pico, que está casi vacío el resto del tiempo. ¿Qué enfoque es el más rentable?",
      "opciones": [
        { "texto": "Usar recursos bajo demanda en AWS para los picos y pagar solo durante esos días", "correcta": true, "porque": "Pago por uso: la capacidad extra se paga solo mientras se usa." },
        { "texto": "Ampliar el centro de datos para soportar un pico aún mayor el próximo año", "correcta": false, "porque": "Aumenta la capacidad ociosa y la inversión inicial (CapEx)." },
        { "texto": "Comprar servidores nuevos y venderlos después de cada preventa", "correcta": false, "porque": "Es costoso y lento; sigue siendo CapEx con trabajo operativo extra." },
        { "texto": "Mantener el centro de datos actual y limitar la cantidad de compradores", "correcta": false, "porque": "Pierde ventas y no reduce el costo de la capacidad ociosa." }
      ],
      "explicacion": "Picos cortos y previsibles + capacidad ociosa el resto del año → recursos bajo demanda en la nube."
    }
  ]
};
