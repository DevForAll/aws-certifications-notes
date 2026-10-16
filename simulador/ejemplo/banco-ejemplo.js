window.BANCO = {
  "id": "ejemplo",
  "titulo": "Banco de ejemplo — prueba del simulador",
  "tipo": "leccion",
  "modulo": 0,
  "leccion": "0",
  "minutos": 6,
  "preguntas": [
    {
      "id": "ej-q01",
      "dominio": 1,
      "tarea": "1.3",
      "enunciado": "Una empresa minorista compra servidores cada tres años pensando en el pico de diciembre. El resto del año, el 60 % de la capacidad queda sin usar. ¿Qué beneficio de la nube de AWS resuelve directamente este problema?",
      "opciones": [
        { "texto": "Dejar de adivinar la capacidad", "correcta": true, "porque": "Con la elasticidad se aprovisiona según la demanda real y se libera al bajar." },
        { "texto": "Beneficiarse de economías de escala masivas", "correcta": false, "porque": "Explica por qué AWS cobra menos, no el sobreaprovisionamiento." },
        { "texto": "Globalizarse en minutos", "correcta": false, "porque": "Trata de desplegar en otras regiones, no de ajustar capacidad." },
        { "texto": "Dejar de gastar dinero en mantener centros de datos", "correcta": false, "porque": "Se refiere al trabajo físico (racks, energía), no a la capacidad ociosa." }
      ],
      "explicacion": "Palabra gatillo: «capacidad ociosa» o «picos impredecibles» → dejar de adivinar la capacidad."
    },
    {
      "id": "ej-q02",
      "dominio": 2,
      "tarea": "2.1",
      "enunciado": "Una startup ejecuta su aplicación en instancias de Amazon EC2. Según el modelo de responsabilidad compartida, ¿de qué es responsable la startup?",
      "opciones": [
        { "texto": "Aplicar parches al sistema operativo invitado", "correcta": true, "porque": "En EC2 (IaaS) el sistema operativo es del cliente: seguridad EN la nube." },
        { "texto": "Configurar los grupos de seguridad", "correcta": true, "porque": "Las reglas de firewall de la instancia las define el cliente." },
        { "texto": "Mantener el hardware físico de los hosts", "correcta": false, "porque": "Es seguridad DE la nube: responsabilidad de AWS." },
        { "texto": "Proteger físicamente los centros de datos", "correcta": false, "porque": "Seguridad física: responsabilidad de AWS." },
        { "texto": "Parchear el hipervisor", "correcta": false, "porque": "La capa de virtualización la gestiona AWS." }
      ],
      "explicacion": "EC2 = el cliente gestiona del sistema operativo hacia arriba. Gatillo: «EC2 + sistema operativo» → cliente."
    },
    {
      "id": "ej-q03",
      "dominio": 3,
      "tarea": "3.3",
      "enunciado": "Una empresa necesita ejecutar código en respuesta a la carga de archivos, sin administrar servidores y pagando solo por el tiempo de ejecución. ¿Qué servicio de AWS cumple el requisito con la menor carga operativa?",
      "opciones": [
        { "texto": "AWS Lambda", "correcta": true, "porque": "Sin servidor, basado en eventos y cobrado por milisegundo de ejecución." },
        { "texto": "Amazon EC2", "correcta": false, "porque": "Hay que administrar instancias y se pagan aunque estén ociosas." },
        { "texto": "AWS Elastic Beanstalk", "correcta": false, "porque": "Simplifica el despliegue, pero sigue usando instancias EC2." },
        { "texto": "Amazon Lightsail", "correcta": false, "porque": "Servidores privados virtuales de precio fijo; no es basado en eventos." }
      ],
      "explicacion": "«Sin administrar servidores» + «en respuesta a eventos» → Lambda."
    },
    {
      "id": "ej-q04",
      "dominio": 4,
      "tarea": "4.2",
      "enunciado": "Un equipo de finanzas quiere recibir una alerta por correo cuando el gasto mensual previsto en AWS supere los 500 USD. ¿Qué servicio debe usar?",
      "opciones": [
        { "texto": "AWS Budgets", "correcta": true, "porque": "Define umbrales de costo o uso y envía alertas, incluso sobre el pronóstico." },
        { "texto": "AWS Cost Explorer", "correcta": false, "porque": "Analiza tendencias y pronostica, pero no envía alertas por umbral." },
        { "texto": "AWS Pricing Calculator", "correcta": false, "porque": "Estima costos antes de desplegar; no vigila el gasto real." },
        { "texto": "AWS Cost and Usage Report", "correcta": false, "porque": "Entrega datos detallados de facturación; no alerta." }
      ],
      "explicacion": "Gatillo: «alerta al superar» → Budgets. «Analizar tendencias» → Cost Explorer."
    },
    {
      "id": "ej-q05",
      "dominio": 2,
      "tarea": "2.4",
      "enunciado": "Un auditor necesita saber qué usuario eliminó un bucket de Amazon S3 ayer y desde qué dirección IP. ¿Qué servicio proporciona esta información?",
      "opciones": [
        { "texto": "AWS CloudTrail", "correcta": true, "porque": "Registra las llamadas a la API: quién, qué, cuándo y desde dónde." },
        { "texto": "AWS Config", "correcta": false, "porque": "Registra el estado y los cambios de configuración de los recursos, no la identidad de quien llamó a la API." },
        { "texto": "Amazon CloudWatch", "correcta": false, "porque": "Métricas, registros y alarmas de rendimiento." },
        { "texto": "AWS Artifact", "correcta": false, "porque": "Entrega informes de cumplimiento de AWS (SOC, ISO)." }
      ],
      "explicacion": "Gatillo: «quién hizo qué» o «auditar llamadas a la API» → CloudTrail."
    }
  ]
};
