window.TALLER = {
  "id": "m01-l03-taller",
  "titulo": "M1 L3 — Taller: los 6 beneficios de la nube de AWS",
  "modulo": 1,
  "leccion": "3",
  "siguiente": "leccion-03.js",
  "ejercicios": [
    {
      "tipo": "tarjetas",
      "titulo": "Los 6 beneficios: di la idea antes de girar",
      "tarjetas": [
        { "frente": "1. Operar con gastos variables en lugar de gastos fijos", "reverso": "Sin gran inversión inicial: la factura sube y baja con el uso real. Empiezas con poco." },
        { "frente": "2. Aprovechar las economías de escala masivas", "reverso": "AWS compra hardware en enormes volúmenes → precios más bajos que traslada a TODOS sus clientes. Son las economías de AWS, no las tuyas." },
        { "frente": "3. Dejar de hacer conjeturas sobre la capacidad", "reverso": "Escalas según la demanda real, en minutos. Ni servidores ociosos (comprar de más) ni clientes perdidos (comprar de menos)." },
        { "frente": "4. Aumentar la velocidad y la agilidad", "reverso": "Crear entornos en minutos, experimentar, borrar lo que no funciona y lanzar antes (time-to-market)." },
        { "frente": "5. Dejar de gastar dinero en ejecutar y mantener centros de datos", "reverso": "AWS monta, apila y alimenta los servidores; tu equipo se enfoca en los clientes." },
        { "frente": "6. Convertirse en una empresa global en minutos", "reverso": "Desplegar en una Región de AWS de otro país (EE. UU. → India) en minutos, no meses o años.", "icono": "grupo-region" }
      ]
    },
    {
      "tipo": "emparejar",
      "titulo": "Une cada ejemplo de la lección con su beneficio",
      "pares": [
        { "izq": "Compraron servidores para 10 millones de usuarios y al tercer año solo tienen 500 000", "der": "Dejar de hacer conjeturas sobre la capacidad", "porque": "Comprar por proyección deja capacidad ociosa." },
        { "izq": "Una empresa de EE. UU. llega a la India sin construir centros de datos allá", "der": "Convertirse en una empresa global en minutos", "porque": "Despliega en una Región de AWS en la India." },
        { "izq": "Como comprar al por mayor: AWS paga menos por unidad y cobra menos", "der": "Aprovechar las economías de escala masivas", "porque": "El volumen de AWS baja los precios para todos." },
        { "izq": "En vez de cientos de miles de dólares por adelantado, una factura que varía cada mes", "der": "Operar con gastos variables en lugar de gastos fijos", "porque": "Se cambia la inversión fija por gasto variable." },
        { "izq": "Crean un entorno de prueba, el experimento falla y lo borran sin seguir pagando", "der": "Aumentar la velocidad y la agilidad", "porque": "Experimentar rápido y barato acelera la innovación." },
        { "izq": "El equipo deja de montar, apilar y alimentar servidores y atiende a los clientes", "der": "Dejar de gastar dinero en ejecutar y mantener centros de datos", "porque": "AWS se encarga de la infraestructura física." }
      ],
      "explicacion": "Estos son los ejemplos exactos del video: si los recuerdas, reconoces el beneficio aunque el examen cambie las palabras."
    },
    {
      "tipo": "clasificar",
      "titulo": "¿Qué beneficio resuelve cada problema?",
      "instruccion": "Ocho empresas con un problema. Elige el beneficio que lo resuelve.",
      "grupos": [
        { "nombre": "1 · Gastos variables" },
        { "nombre": "2 · Economías de escala" },
        { "nombre": "3 · Capacidad" },
        { "nombre": "4 · Velocidad y agilidad" },
        { "nombre": "5 · Centros de datos" },
        { "nombre": "6 · Global" }
      ],
      "items": [
        { "texto": "Una emprendedora no tiene capital para comprar servidores antes de vender su primer producto.", "grupo": 0, "porque": "Sin inversión inicial: empieza con poco y paga por uso." },
        { "texto": "Una minorista no sabe cuántos servidores necesitará para lanzar una nueva línea de ropa.", "grupo": 2, "porque": "Es la pregunta de tu comprobación: no poder predecir la capacidad." },
        { "texto": "El equipo de TI pasa la semana cambiando discos dañados y revisando el aire acondicionado.", "grupo": 4, "porque": "Mantener hardware es trabajo que AWS asume." },
        { "texto": "Un fabricante chileno quiere atender clientes en Europa con baja latencia el próximo mes.", "grupo": 5, "porque": "Expandirse a otra región geográfica en minutos." },
        { "texto": "Una startup se pregunta cómo AWS puede cobrar menos de lo que le costaría su propio servidor.", "grupo": 1, "porque": "El volumen masivo de AWS reduce el precio por unidad." },
        { "texto": "Un banco quiere probar tres ideas de app en paralelo y descartar las que no funcionen.", "grupo": 3, "porque": "Experimentar rápido y barato = agilidad." },
        { "texto": "Una ticketera tiene servidores ociosos 11 meses al año porque compró para la preventa.", "grupo": 2, "porque": "Comprar para el pico = adivinar la capacidad." },
        { "texto": "El área de finanzas quiere que el gasto de TI acompañe las ventas de temporada.", "grupo": 0, "porque": "Gasto que sube y baja con el uso = gasto variable." }
      ],
      "explicacion": "Pregunta clave: ¿habla de cuándo se paga (1), del precio bajo (2), de no saber cuánto se necesita (3), de probar rápido (4), del hardware (5) o de otro país (6)?"
    },
    {
      "tipo": "identificar",
      "titulo": "Mismo beneficio, otras palabras",
      "instruccion": "La comprobación de Skill Builder y el examen cambian los nombres. ¿A qué beneficio de la lección corresponde cada frase?",
      "rondas": [
        { "visual": "«Cambiar gastos iniciales por gastos variables»", "pregunta": "¿Qué beneficio es?", "opciones": ["Operar con gastos variables en lugar de gastos fijos", "Aprovechar las economías de escala masivas", "Dejar de gastar dinero en centros de datos", "Dejar de hacer conjeturas sobre la capacidad"], "correcta": 0, "porque": "Así lo llamó tu comprobación: es el beneficio 1 con otras palabras." },
        { "visual": "«Lograr un alcance global en minutos»", "pregunta": "¿Qué beneficio es?", "opciones": ["Convertirse en una empresa global en minutos", "Aumentar la velocidad y la agilidad", "Aprovechar las economías de escala masivas", "Dejar de hacer conjeturas sobre la capacidad"], "correcta": 0, "porque": "Otra forma del beneficio 6 (Go global in minutes)." },
        { "visual": "«Stop guessing capacity»", "pregunta": "¿Qué beneficio es?", "opciones": ["Dejar de hacer conjeturas sobre la capacidad", "Aumentar la velocidad y la agilidad", "Operar con gastos variables en lugar de gastos fijos", "Convertirse en una empresa global en minutos"], "correcta": 0, "porque": "Es el nombre en inglés del beneficio 3." },
        { "visual": "«Undifferentiated heavy lifting»", "pie": "«trabajo pesado indiferenciado»", "pregunta": "¿Con qué beneficio se asocia?", "opciones": ["Dejar de gastar dinero en ejecutar y mantener centros de datos", "Aprovechar las economías de escala masivas", "Aumentar la velocidad y la agilidad", "Operar con gastos variables en lugar de gastos fijos"], "correcta": 0, "porque": "Es el trabajo de montar y mantener hardware que no diferencia a tu negocio: AWS lo asume." },
        { "visual": "«Reducir el time-to-market»", "pie": "llegar antes al mercado", "pregunta": "¿Qué beneficio es?", "opciones": ["Aumentar la velocidad y la agilidad", "Convertirse en una empresa global en minutos", "Dejar de hacer conjeturas sobre la capacidad", "Aprovechar las economías de escala masivas"], "correcta": 0, "porque": "Lanzar más rápido es el corazón de la agilidad." }
      ]
    },
    {
      "tipo": "identificar",
      "titulo": "Íconos: las herramientas que nombra la lección",
      "instruccion": "El video menciona «herramientas integradas de facturación y presupuesto» y el escalado. Reconoce sus íconos oficiales.",
      "rondas": [
        { "icono": "budgets", "pie": "verde = administración financiera de la nube", "pregunta": "Alerta cuando el gasto real o previsto supera un umbral. ¿Qué servicio es?", "opciones": ["AWS Budgets", "AWS Cost Explorer", "AWS Cost and Usage Report", "Amazon EC2 Auto Scaling"], "correcta": 0, "porque": "AWS Budgets = alertas. Gatillo: «alerta», «umbral», «previsto»." },
        { "icono": "cost-explorer", "pie": "verde = administración financiera de la nube", "pregunta": "Muestra gráficos del gasto pasado y su tendencia. ¿Qué servicio es?", "opciones": ["AWS Cost Explorer", "AWS Budgets", "AWS Cost and Usage Report", "Amazon EC2"], "correcta": 0, "porque": "Cost Explorer = analizar y visualizar; NO envía alertas (eso es Budgets)." },
        { "icono": "cur", "pie": "verde = administración financiera de la nube", "pregunta": "Entrega el detalle más completo de costos y uso como archivos en Amazon S3. ¿Qué servicio es?", "opciones": ["AWS Cost and Usage Report", "AWS Budgets", "AWS Cost Explorer", "Amazon EC2 Auto Scaling"], "correcta": 0, "porque": "CUR = datos crudos detallados, no alertas. Lo confundiste con Budgets en el calentamiento del 15 oct." },
        { "icono": "ec2-auto-scaling", "pie": "naranja = cómputo", "pregunta": "Agrega o quita servidores según la demanda. ¿Qué servicio es?", "opciones": ["Amazon EC2 Auto Scaling", "AWS Budgets", "Amazon EC2", "AWS Cost Explorer"], "correcta": 0, "porque": "EC2 Auto Scaling hace realidad «dejar de hacer conjeturas sobre la capacidad». Se ve en el Módulo 2." }
      ]
    }
  ]
};
