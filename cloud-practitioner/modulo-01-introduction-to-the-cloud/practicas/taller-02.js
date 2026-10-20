window.TALLER = {
  "id": "m01-l02-taller",
  "titulo": "M1 L2 — Taller: ¿Qué es la computación en la nube?",
  "modulo": 1,
  "leccion": "2",
  "siguiente": "leccion-02.js",
  "ejercicios": [
    {
      "tipo": "tarjetas",
      "titulo": "Calentamiento: las ideas que no pueden faltar",
      "tarjetas": [
        { "frente": "Definición de computación en la nube (según AWS)", "reverso": "Entrega BAJO DEMANDA de recursos de TI a través de INTERNET con precios de PAGO POR USO." },
        { "frente": "Modelo de implementación «nube»", "reverso": "«Implementación basada en la nube»: todas las partes de la aplicación corren en la nube. Típico de empresas nuevas (cloud-native) o de migrar todo.", "icono": "grupo-cloud" },
        { "frente": "Modelo «on-premises»", "reverso": "«Implementación en las instalaciones», también NUBE PRIVADA: centro de datos propio con virtualización y herramientas de gestión. No ofrece muchos de los beneficios de la nube.", "icono": "grupo-corporate-data-center" },
        { "frente": "Modelo «híbrido»", "reverso": "Infraestructura on-premises CONECTADA con recursos en la nube. Gatillos: legacy, regulación, migración por etapas." },
        { "frente": "CapEx vs. OpEx", "reverso": "CapEx = gasto de capital (gran compra inicial de hardware). OpEx = gasto operativo variable. La nube cambia CapEx por OpEx." },
        { "frente": "IaaS · PaaS · SaaS (de más a menos trabajo tuyo)", "reverso": "IaaS = EC2 (gestionas el SO) · PaaS = Elastic Beanstalk (solo tu código) · SaaS = aplicación lista para usar." },
        { "frente": "Híbrida vs. multinube", "reverso": "Híbrida = on-premises + nube conectados. Multinube = varios proveedores de nube. Multinube NO es un modelo de la guía de AWS." }
      ]
    },
    {
      "tipo": "clasificar",
      "titulo": "¿Qué modelo de implementación es?",
      "instruccion": "Lee cada empresa y elige su modelo con los botones. Para corregir una ya ubicada, tócala.",
      "grupos": [
        { "nombre": "☁️ Nube", "desc": "Todo corre en la nube" },
        { "nombre": "🏢 On-premises", "desc": "Nube privada en el centro de datos propio" },
        { "nombre": "🔗 Híbrida", "desc": "On-premises conectado a la nube" }
      ],
      "items": [
        { "texto": "Una startup de delivery nace sin servidores propios y construye toda su app en AWS.", "grupo": 0, "porque": "Empresa nueva, sin centro de datos: cloud-native = modelo de nube." },
        { "texto": "Un banco deja su sistema central antiguo en su centro de datos por regulación, y su app móvil corre en AWS conectada por Direct Connect.", "grupo": 2, "porque": "Legacy + regulación + conexión entre ambos = híbrida." },
        { "texto": "Una fábrica usa virtualización y herramientas de gestión de recursos en sus propios servidores para dar máquinas virtuales a sus áreas.", "grupo": 1, "porque": "Recursos en sus instalaciones con virtualización = on-premises (nube privada)." },
        { "texto": "Una tienda en línea migró todas sus aplicaciones a AWS y cerró su centro de datos.", "grupo": 0, "porque": "Migrar TODO y cerrar el centro de datos = modelo de nube (como Netflix)." },
        { "texto": "Un hospital guarda las historias clínicas en su sede por ley, pero envía datos anonimizados a AWS para analítica.", "grupo": 2, "porque": "Una parte queda local por ley y otra va a la nube, conectadas = híbrida." },
        { "texto": "Una universidad migra a AWS por etapas: este año el correo y la web, el resto sigue en su centro de datos por ahora.", "grupo": 2, "porque": "Migración gradual con sistemas locales conectados = híbrida durante la transición." },
        { "texto": "Un laboratorio sin conexión externa por política de seguridad corre todo en servidores propios con máquinas virtuales.", "grupo": 1, "porque": "Todo en sus instalaciones, con virtualización = on-premises." },
        { "texto": "Un videojuego móvil lanza servidores en varias Regiones de AWS para jugadores de todo el mundo, sin hardware propio.", "grupo": 0, "porque": "Sin infraestructura propia; toda la aplicación en la nube." },
        { "texto": "Una minera mantiene sus sistemas de control de planta en su sede y conecta su ERP a servicios de AWS por una VPN Site-to-Site.", "grupo": 2, "porque": "Sistemas locales + nube unidos por VPN = híbrida." }
      ],
      "explicacion": "Truco: si el enunciado dice «conectar», «mantener algunos sistemas locales», «legacy» o «regulación» → híbrida. «Sus propias instalaciones con virtualización» → on-premises. «Empresa nueva» o «migrar todo» → nube."
    },
    {
      "tipo": "clasificar",
      "titulo": "¿CapEx u OpEx?",
      "instruccion": "¿Cada gasto es una gran inversión inicial (CapEx) o un gasto variable según el uso (OpEx)?",
      "grupos": [
        { "nombre": "💰 CapEx — gasto de capital", "desc": "Se paga por adelantado, aunque no se use" },
        { "nombre": "🧾 OpEx — gasto operativo variable", "desc": "Se paga según lo que se consume" }
      ],
      "items": [
        { "texto": "Comprar 20 servidores para los próximos 5 años", "grupo": 0, "porque": "Compra grande por adelantado = CapEx." },
        { "texto": "Pagar por las horas que estuvo encendido un servidor virtual de AWS", "grupo": 1, "porque": "Pago por uso = OpEx (gasto variable)." },
        { "texto": "Construir una sala de servidores con aire acondicionado", "grupo": 0, "porque": "Inversión en infraestructura física = CapEx." },
        { "texto": "La factura mensual de AWS, que baja cuando apagas los entornos de prueba", "grupo": 1, "porque": "Varía con el consumo = OpEx." },
        { "texto": "Comprar licencias perpetuas de software para todos los servidores", "grupo": 0, "porque": "Pago único y anticipado = CapEx." },
        { "texto": "Pagar por los GB que guardas cada mes en la nube", "grupo": 1, "porque": "Pagas lo que almacenas, mes a mes = OpEx." }
      ],
      "explicacion": "En el examen, «gasto variable», «sin pagos iniciales» y «pagar solo por lo que se usa» son OpEx: el beneficio que la nube trae. CapEx es lo que se elimina."
    },
    {
      "tipo": "emparejar",
      "titulo": "Une la situación con la idea de la nube",
      "pares": [
        { "izq": "El equipo necesita un servidor para una prueba y lo tiene en 3 minutos.", "der": "Bajo demanda", "porque": "Pedir recursos cuando se necesitan, en minutos." },
        { "izq": "Al apagar el servidor de pruebas, deja de cobrarse en ese momento.", "der": "Pago por uso", "porque": "Solo se paga lo que se consume." },
        { "izq": "Los desarrolladores crean recursos desde su casa con la consola web o la API.", "der": "A través de Internet", "porque": "El acceso a los recursos es por la red." },
        { "izq": "La empresa ya no compra hardware cada 5 años; paga una factura mensual que varía.", "der": "De CapEx a OpEx", "porque": "Se cambia la inversión inicial por gasto variable." },
        { "izq": "Una tienda tenía servidores ociosos el 70 % del año por comprar para el Black Friday.", "der": "Dejar de adivinar la capacidad", "porque": "En la nube se escala con la demanda real y no se paga capacidad ociosa." },
        { "izq": "Una empresa sube su código y AWS arma servidores, balanceo y escalado por ella.", "der": "PaaS (Elastic Beanstalk)", "porque": "Plataforma como servicio: tú pones el código, AWS gestiona el entorno." }
      ],
      "explicacion": "Las tres palabras de la definición (bajo demanda, Internet, pago por uso) son la base de casi todas las preguntas de beneficios."
    },
    {
      "tipo": "ordenar",
      "titulo": "¿Quién gestiona más? Ordena de MÁS a MENOS trabajo para el cliente",
      "pasos": [
        "On-premises: el cliente gestiona todo, desde el edificio y el hardware hasta la aplicación",
        "IaaS (Amazon EC2): AWS da el hardware; el cliente gestiona el sistema operativo, parches y la aplicación",
        "PaaS (AWS Elastic Beanstalk): AWS gestiona además el SO y el entorno; el cliente pone su código",
        "SaaS: el cliente solo usa la aplicación y gestiona sus datos y usuarios"
      ],
      "explicacion": "Mientras más «aaS» subes, menos gestionas tú. Esta escalera es la base del Modelo de Responsabilidad Compartida (L5): en EC2 el parcheo del SO es del cliente — seguridad EN la nube."
    },
    {
      "tipo": "ordenar",
      "titulo": "Repaso de la L1: el modelo cliente-servidor",
      "instruccion": "Ordena lo que pasa cuando abres una app y pides ver tu saldo.",
      "pasos": [
        "El cliente (la app del celular) envía una solicitud",
        "El servidor recibe la solicitud y valida que sea legítima (permisos)",
        "El servidor prepara lo pedido",
        "El servidor devuelve la respuesta y el cliente la muestra"
      ],
      "explicacion": "Como en la cafetería del curso: el cliente pide, el barista (servidor) valida el pago, prepara y entrega. En AWS, el servidor puede ser una instancia de Amazon EC2."
    },
    {
      "tipo": "identificar",
      "titulo": "Lee el diagrama",
      "instruccion": "Cada imagen representa una arquitectura. Elige qué modelo o idea muestra.",
      "rondas": [
        { "visual": "🏢🖥️🖥️  ⇄🔒⇄  ☁️", "pie": "centro de datos propio ⇄ conexión privada ⇄ AWS", "pregunta": "¿Qué modelo de implementación es?", "opciones": ["Híbrida", "Nube", "On-premises", "Multinube"], "correcta": 0, "porque": "Hay infraestructura local CONECTADA a la nube: híbrida." },
        { "visual": "📱💻 → ☁️ (app + base de datos + almacenamiento)", "pie": "la empresa no tiene servidores propios", "pregunta": "¿Qué modelo de implementación es?", "opciones": ["Nube", "Híbrida", "On-premises", "Nube privada"], "correcta": 0, "porque": "Todas las partes corren en la nube: modelo de nube." },
        { "visual": "🏢 [ 🖥️ → VM VM VM ]", "pie": "servidores propios virtualizados, sin conexión a un proveedor", "pregunta": "¿Qué modelo de implementación es?", "opciones": ["On-premises (nube privada)", "Nube", "Híbrida", "SaaS"], "correcta": 0, "porque": "Virtualización en instalaciones propias = on-premises, también llamado nube privada." },
        { "visual": "☁️ AWS  +  ☁️ otro proveedor", "pie": "dos proveedores de nube pública a la vez", "pregunta": "¿Cómo se llama y es un modelo de implementación de la guía de AWS?", "opciones": ["Multinube; no es uno de los 3 modelos de la guía", "Híbrida; sí es un modelo de la guía", "On-premises; sí es un modelo de la guía", "Nube privada; sí es un modelo de la guía"], "correcta": 0, "porque": "Trampa clásica: híbrida exige on-premises + nube. Dos nubes públicas son multinube." },
        { "visual": "📈 demanda   ▬▬▬ capacidad comprada", "pie": "la línea de capacidad queda muy por encima de la demanda casi todo el año", "pregunta": "¿Qué problema muestra y qué lo resuelve?", "opciones": ["Capacidad ociosa; lo resuelve dejar de adivinar la capacidad", "Falta de seguridad; lo resuelve el cifrado", "Latencia alta; lo resuelve otra Región", "Falta de capacidad; lo resuelve comprar más servidores"], "correcta": 0, "porque": "Comprar de más deja servidores sin usar. En la nube se escala con la demanda real." }
      ]
    },
    {
      "tipo": "identificar",
      "titulo": "¿Qué servicio es este ícono?",
      "instruccion": "Íconos oficiales de AWS: los verás en diagramas de arquitectura y en la consola. Reconócelos por su forma y su color de categoría.",
      "rondas": [
        { "icono": "ec2", "pie": "naranja = cómputo", "pregunta": "¿Qué servicio es?", "opciones": ["Amazon EC2", "AWS Elastic Beanstalk", "AWS Outposts", "AWS Direct Connect"], "correcta": 0, "porque": "Amazon EC2: servidores virtuales (IaaS). El chip dentro del cuadro naranja de cómputo." },
        { "icono": "elastic-beanstalk", "pie": "naranja = cómputo", "pregunta": "¿Qué servicio es?", "opciones": ["AWS Elastic Beanstalk", "Amazon EC2", "AWS Site-to-Site VPN", "AWS Outposts"], "correcta": 0, "porque": "AWS Elastic Beanstalk: subes tu código y AWS gestiona el entorno (PaaS)." },
        { "icono": "outposts", "pie": "naranja = cómputo", "pregunta": "¿Qué servicio es?", "opciones": ["AWS Outposts", "AWS Direct Connect", "Amazon EC2", "AWS Elastic Beanstalk"], "correcta": 0, "porque": "AWS Outposts: hardware y servicios de AWS dentro del centro de datos del cliente." },
        { "icono": "direct-connect", "pie": "morado = redes y entrega de contenido", "pregunta": "¿Qué servicio es?", "opciones": ["AWS Direct Connect", "AWS Site-to-Site VPN", "AWS Outposts", "Amazon EC2"], "correcta": 0, "porque": "AWS Direct Connect: línea privada y dedicada entre tu centro de datos y AWS." },
        { "icono": "site-to-site-vpn", "pie": "morado = redes y entrega de contenido", "pregunta": "¿Qué servicio es?", "opciones": ["AWS Site-to-Site VPN", "AWS Direct Connect", "AWS Elastic Beanstalk", "AWS Outposts"], "correcta": 0, "porque": "AWS Site-to-Site VPN: túnel cifrado por Internet; la conexión híbrida más rápida y barata de montar." }
      ],
      "explicacion": "Truco de colores: naranja = cómputo, verde = almacenamiento, fucsia = bases de datos, morado = redes, rojo = seguridad, rosa = gestión e integración de aplicaciones, verde azulado = IA y machine learning."
    },
    {
      "tipo": "ordenar",
      "titulo": "Línea de tiempo: cómo nació AWS",
      "instruccion": "Ordena del más antiguo al más reciente (lo cuenta el video de la lección).",
      "pasos": [
        "Inicios de los 2000: Amazon.com crece y su equipo de TI crea herramientas estandarizadas para escalar",
        "2003: deciden ofrecer a otras empresas cómputo y almacenamiento bajo demanda",
        "Nov 2004: primer servicio público, Amazon SQS (colas de mensajes)",
        "2006: lanzan Amazon S3 (almacenamiento) y Amazon EC2 (cómputo)",
        "Hoy: millones de clientes, desde startups hasta gobiernos"
      ],
      "explicacion": "AWS nació de resolver un problema interno de Amazon: escalar sin invertir por adelantado. Esa idea es la definición misma de la nube."
    }
  ]
};
