window.BANCO = {
  "id": "m01-l01",
  "titulo": "M1 L1 — Introducción a AWS Cloud Practitioner Essentials",
  "tipo": "leccion",
  "modulo": 1,
  "leccion": "1",
  "preguntas": [
    {
      "id": "m01-l01-q01",
      "dominio": 3,
      "tarea": "3.3",
      "enunciado": "Un banco tiene una aplicación móvil. Cuando un usuario toca «Ver saldo», la aplicación envía un pedido a una máquina en la nube, esta comprueba que el usuario tenga permiso y le devuelve el saldo. ¿Qué concepto describe mejor este intercambio?",
      "opciones": [
        { "texto": "Modelo cliente-servidor", "correcta": true, "porque": "El cliente (la app) hace una solicitud y el servidor la valida y responde." },
        { "texto": "Pago por uso", "correcta": false, "porque": "Es un modelo de precios; no describe cómo se comunican la app y la máquina." },
        { "texto": "Elasticidad", "correcta": false, "porque": "Trata de ajustar la capacidad a la demanda, no del intercambio solicitud-respuesta." },
        { "texto": "Implementación híbrida", "correcta": false, "porque": "Es un modelo de implementación (on-premises + nube); el enunciado no habla de un centro de datos propio." }
      ],
      "explicacion": "Gatillo: «solicitud» + «responde» → modelo cliente-servidor."
    },
    {
      "id": "m01-l01-q02",
      "dominio": 3,
      "tarea": "3.3",
      "enunciado": "En la analogía de la cafetería del curso, un consumidor pide un café y el barista lo prepara y se lo entrega. En la nube de AWS, ¿qué representa el barista?",
      "opciones": [
        { "texto": "Un servidor virtual, como una instancia de Amazon EC2", "correcta": true, "porque": "El barista recibe la solicitud, la valida y responde: es el servidor." },
        { "texto": "El cliente que hace la solicitud", "correcta": false, "porque": "El cliente es el consumidor que pide el café." },
        { "texto": "La respuesta que recibe el usuario", "correcta": false, "porque": "La respuesta es el café entregado, no quien lo prepara." },
        { "texto": "El modelo de precios de pago por uso", "correcta": false, "porque": "El pago por uso se ilustra con pagar a los baristas solo por sus horas, no con el barista en sí." }
      ],
      "explicacion": "Cafetería: consumidor = cliente · barista = servidor (EC2) · café = respuesta."
    },
    {
      "id": "m01-l01-q03",
      "dominio": 3,
      "tarea": "3.3",
      "enunciado": "Un equipo de desarrollo explica la arquitectura de su tienda en línea a un gerente que no es técnico. ¿Qué parte inicia siempre la comunicación en el modelo cliente-servidor?",
      "opciones": [
        { "texto": "El cliente, al enviar una solicitud", "correcta": true, "porque": "El intercambio empieza con la solicitud del cliente." },
        { "texto": "El servidor, al enviar datos por iniciativa propia", "correcta": false, "porque": "El servidor responde a solicitudes; no actúa sin que se lo pidan." },
        { "texto": "El centro de datos, al asignar la capacidad", "correcta": false, "porque": "El centro de datos aloja los servidores; no participa en el intercambio." },
        { "texto": "AWS, al enviar la factura del uso", "correcta": false, "porque": "La facturación no forma parte del modelo cliente-servidor." }
      ],
      "explicacion": "Primero la solicitud del cliente, luego la respuesta del servidor."
    },
    {
      "id": "m01-l01-q04",
      "dominio": 3,
      "tarea": "3.3",
      "enunciado": "Una plataforma de cursos en línea recibe miles de solicitudes por minuto en sus servidores. ¿Qué hace el servidor con cada solicitud antes de devolver la respuesta?",
      "opciones": [
        { "texto": "Valida que la solicitud sea legítima y que el solicitante tenga permisos", "correcta": true, "porque": "El servidor responde «con permisos»: primero valida, luego responde." },
        { "texto": "Responde todas las solicitudes sin revisarlas para ganar velocidad", "correcta": false, "porque": "Sin validar, cualquiera podría pedir cualquier cosa; el servidor siempre valida." },
        { "texto": "Reenvía la solicitud al cliente para que la procese él mismo", "correcta": false, "porque": "Procesar la solicitud es el trabajo del servidor, no del cliente." },
        { "texto": "Espera a que el cliente desaprovisione sus recursos", "correcta": false, "porque": "Desaprovisionar no tiene relación con atender una solicitud." }
      ],
      "explicacion": "En la cafetería, el barista verifica el pago y que pueda preparar lo pedido antes de entregarlo."
    },
    {
      "id": "m01-l01-q05",
      "dominio": 1,
      "tarea": "1.4",
      "enunciado": "Una cadena de cafeterías lanza una bebida nueva y, para cubrir la demanda esperada, contrata 10 baristas para todo el día. En las horas flojas varios quedan sin hacer nada, pero igual se les paga. ¿Qué problema de un centro de datos on-premises ilustra esta situación?",
      "opciones": [
        { "texto": "Pagar capacidad ociosa por haber aprovisionado para el pico", "correcta": true, "porque": "Se compra capacidad para el momento de mayor demanda y se paga aunque no se use." },
        { "texto": "Falta de seguridad física en las instalaciones", "correcta": false, "porque": "El ejemplo habla de costo por capacidad sin uso, no de seguridad." },
        { "texto": "Alta latencia para los usuarios lejanos", "correcta": false, "porque": "La latencia es demora de red; no aparece en la situación." },
        { "texto": "Imposibilidad de usar el modelo cliente-servidor", "correcta": false, "porque": "El modelo cliente-servidor funciona igual on-premises y en la nube." }
      ],
      "explicacion": "Gatillo: «capacidad sin usar» o «aprovisionar para el pico» → el dolor del on-premises que la nube elimina."
    },
    {
      "id": "m01-l01-q06",
      "dominio": 1,
      "tarea": "1.1",
      "enunciado": "Una startup de comercio electrónico espera triplicar su tráfico durante una campaña de dos semanas y luego volver a lo normal. Quiere gastar lo mínimo. ¿Qué enfoque de AWS cumple el requisito?",
      "opciones": [
        { "texto": "Aprovisionar recursos adicionales al empezar la campaña y desaprovisionarlos al terminar", "correcta": true, "porque": "Paga la capacidad extra solo durante las dos semanas." },
        { "texto": "Comprar servidores físicos para el pico y mantenerlos todo el año", "correcta": false, "porque": "Es el enfoque on-premises: paga capacidad ociosa el resto del año." },
        { "texto": "Comprometerse por tres años con la capacidad del pico", "correcta": false, "porque": "Paga el pico durante años por una necesidad de dos semanas." },
        { "texto": "Construir un segundo centro de datos para la campaña", "correcta": false, "porque": "Es lento y caro; justo lo que la nube evita." }
      ],
      "explicacion": "Aprovisionar cuando hace falta y desaprovisionar después = solo pagas por lo que usas."
    },
    {
      "id": "m01-l01-q07",
      "dominio": 4,
      "tarea": "4.1",
      "enunciado": "Un equipo de pruebas usa varios servidores en AWS durante una tarde y luego los desaprovisiona. ¿Cuándo deja de pagar por esos recursos?",
      "opciones": [
        { "texto": "Inmediatamente después de desaprovisionarlos", "correcta": true, "porque": "Al desaprovisionar, el cobro se detiene en ese momento." },
        { "texto": "Al final del mes de facturación", "correcta": false, "porque": "El mes es el período de la factura, no del cobro; se paga solo el tiempo usado." },
        { "texto": "Treinta días después de desaprovisionarlos", "correcta": false, "porque": "No hay período de espera: el cobro se detiene al liberar los recursos." },
        { "texto": "Nunca, porque los recursos se pagan por adelantado", "correcta": false, "porque": "En el modelo de pago por uso no hay pagos por adelantado." }
      ],
      "explicacion": "Gatillo: «desaprovisionar» → se deja de pagar de inmediato."
    },
    {
      "id": "m01-l01-q08",
      "dominio": 4,
      "tarea": "4.1",
      "enunciado": "El director financiero de una agencia de marketing pregunta cómo cobra AWS de forma general. ¿Qué afirmación describe el modelo básico de precios de AWS?",
      "opciones": [
        { "texto": "Solo se paga por los recursos que se consumen, sin pagos por adelantado", "correcta": true, "porque": "Es el pago por uso (pay-as-you-go), el primer concepto de AWS del curso." },
        { "texto": "Se paga cada año por adelantado la capacidad máxima prevista", "correcta": false, "porque": "Eso es comprar capacidad como en un centro de datos propio." },
        { "texto": "Se paga una tarifa mensual fija sin importar el consumo", "correcta": false, "porque": "El costo varía según lo que se usa; no es una tarifa fija." },
        { "texto": "Se paga por los servidores físicos que AWS asigna a cada cliente", "correcta": false, "porque": "Se paga por el uso de los recursos, no por hardware físico asignado." }
      ],
      "explicacion": "Gatillos: «solo pagas por lo que usas», «sin pagos por adelantado» → pay-as-you-go."
    },
    {
      "id": "m01-l01-q09",
      "dominio": 1,
      "tarea": "1.1",
      "enunciado": "Una consultora prepara una capacitación interna y necesita la definición correcta de computación en la nube. ¿Cuál debe usar?",
      "opciones": [
        { "texto": "La entrega bajo demanda de recursos de TI a través de Internet con precios de pago por uso", "correcta": true, "porque": "Es la definición que usa AWS: bajo demanda + Internet + pago por uso." },
        { "texto": "El alquiler de un centro de datos dedicado mediante un contrato anual", "correcta": false, "porque": "Falta lo esencial: bajo demanda y pago por uso, sin contratos largos." },
        { "texto": "La compra de servidores que se instalan en las oficinas de la empresa", "correcta": false, "porque": "Describe on-premises, lo contrario de la nube." },
        { "texto": "El uso de software instalado en cada computadora de los empleados", "correcta": false, "porque": "Es software local; no hay recursos entregados por Internet." }
      ],
      "explicacion": "Tres piezas de la definición: bajo demanda · por Internet · pago por uso."
    },
    {
      "id": "m01-l01-q10",
      "dominio": 1,
      "tarea": "1.4",
      "enunciado": "Una clínica renueva sus servidores cada cinco años con una gran compra inicial. Si migra a AWS, ¿cómo cambia la forma de su gasto en TI?",
      "opciones": [
        { "texto": "Pasa de gasto de capital (CapEx) a gasto variable (OpEx)", "correcta": true, "porque": "Deja de comprar por adelantado y paga mes a mes lo que consume." },
        { "texto": "Pasa de gasto variable (OpEx) a gasto de capital (CapEx)", "correcta": false, "porque": "Es al revés: la compra inicial es CapEx y la nube la vuelve gasto variable." },
        { "texto": "Se convierte en un costo fijo mensual igual todos los meses", "correcta": false, "porque": "El gasto varía con el consumo; no es fijo." },
        { "texto": "Desaparece todo costo de TI", "correcta": false, "porque": "Sigue pagando por lo que usa; solo cambia la forma del gasto." }
      ],
      "explicacion": "CapEx = comprar por adelantado (servidores, edificios). OpEx = pagar el consumo. La nube cambia CapEx por OpEx."
    },
    {
      "id": "m01-l01-q11",
      "dominio": 1,
      "tarea": "1.1",
      "enunciado": "Una empresa de logística compara su centro de datos propio con la nube de AWS. ¿Qué ventajas obtiene con AWS?",
      "opciones": [
        { "texto": "No necesita pagar por adelantado por los recursos", "correcta": true, "porque": "En AWS no hay pago inicial: se paga el consumo." },
        { "texto": "Puede aprovisionar más recursos en el momento en que los necesita", "correcta": true, "porque": "Sin restricciones de capacidad: los recursos están disponibles bajo demanda." },
        { "texto": "AWS administra el código de su aplicación", "correcta": false, "porque": "El código y la aplicación siguen siendo de la empresa." },
        { "texto": "Paga un precio fijo sin importar cuánto consuma", "correcta": false, "porque": "El precio depende del consumo (pago por uso)." },
        { "texto": "Debe predecir con un año de anticipación la capacidad que usará", "correcta": false, "porque": "Es justo lo que la nube elimina: ya no hay que adivinar la capacidad." }
      ],
      "explicacion": "Dos ideas de la lección: sin pagos por adelantado y sin restricciones de capacidad."
    },
    {
      "id": "m01-l01-q12",
      "dominio": 1,
      "tarea": "1.1",
      "enunciado": "En la analogía de la cafetería, el dueño pone más baristas los días con mucha clientela y menos los días tranquilos. ¿Qué concepto de la nube representa esta decisión?",
      "opciones": [
        { "texto": "Elasticidad: ajustar la capacidad a la demanda real", "correcta": true, "porque": "La capacidad sube y baja según la demanda, sin quedarse fija." },
        { "texto": "Economías de escala", "correcta": false, "porque": "Explica precios más bajos por comprar a gran escala, no por ajustar personal." },
        { "texto": "Pago por adelantado", "correcta": false, "porque": "Es lo contrario: no se compromete capacidad antes de saber la demanda." },
        { "texto": "Implementación híbrida", "correcta": false, "porque": "Es un modelo de implementación (on-premises + nube), no un ajuste de capacidad." }
      ],
      "explicacion": "Gatillo: «subir y bajar según la demanda» → elasticidad."
    },
    {
      "id": "m01-l01-q13",
      "dominio": 3,
      "tarea": "3.3",
      "enunciado": "La aplicación de un hospital pide a un servidor en la nube las últimas radiografías de un paciente, y el servidor se las envía. En el modelo cliente-servidor, ¿qué son las radiografías recibidas?",
      "opciones": [
        { "texto": "La respuesta", "correcta": true, "porque": "Lo que el servidor devuelve al cliente es la respuesta." },
        { "texto": "La solicitud", "correcta": false, "porque": "La solicitud es el pedido que hace la aplicación." },
        { "texto": "El cliente", "correcta": false, "porque": "El cliente es la aplicación del hospital que hace el pedido." },
        { "texto": "El servidor", "correcta": false, "porque": "El servidor es la máquina en la nube que procesa el pedido." }
      ],
      "explicacion": "Solicitud = el pedido · respuesta = lo que se devuelve (en la cafetería, el café)."
    },
    {
      "id": "m01-l01-q14",
      "dominio": 1,
      "tarea": "1.2",
      "enunciado": "El equipo de operaciones de un periódico digital quiere que los recursos se aprovisionen y desaprovisionen solos según el tráfico, sin que alguien lo haga a mano cada vez. ¿Qué permite AWS para lograrlo?",
      "opciones": [
        { "texto": "Definir la configuración adecuada para que el aprovisionamiento y desaprovisionamiento sean automáticos", "correcta": true, "porque": "Se define la configuración y AWS ajusta los recursos automáticamente." },
        { "texto": "Contratar personal de guardia que agregue servidores de noche", "correcta": false, "porque": "Es trabajo manual, justo lo que se quiere evitar." },
        { "texto": "Comprar servidores de respaldo que estén siempre encendidos", "correcta": false, "porque": "Es pagar capacidad ociosa, el problema del on-premises." },
        { "texto": "Apagar el sitio web en las horas de poco tráfico", "correcta": false, "porque": "Deja sin servicio a los lectores; no ajusta la capacidad." }
      ],
      "explicacion": "La lección lo resume: «solo defines la configuración correcta y se hace automáticamente»."
    },
    {
      "id": "m01-l01-q15",
      "dominio": 3,
      "tarea": "3.3",
      "enunciado": "Una aerolínea revisa su arquitectura. ¿Qué elementos actúan como cliente en el modelo cliente-servidor?",
      "opciones": [
        { "texto": "El navegador web de un pasajero que pide la página de reservas", "correcta": true, "porque": "El navegador hace la solicitud: es el cliente." },
        { "texto": "La aplicación móvil que pide el estado de un vuelo", "correcta": true, "porque": "La app envía la solicitud: es el cliente." },
        { "texto": "La instancia de Amazon EC2 que procesa las reservas", "correcta": false, "porque": "Recibe y responde solicitudes: es el servidor." },
        { "texto": "El centro de datos donde se alojan los servidores", "correcta": false, "porque": "Es la instalación física; no participa como cliente." },
        { "texto": "Los datos del vuelo que se devuelven al pasajero", "correcta": false, "porque": "Es la respuesta, no el cliente." }
      ],
      "explicacion": "Cliente = quien pide (navegador, app). Servidor = quien responde (EC2)."
    },
    {
      "id": "m01-l01-q16",
      "dominio": 1,
      "tarea": "1.1",
      "enunciado": "Una empresa de medios necesita cómputo, bases de datos, almacenamiento, entrega de contenido e IA generativa, y prefiere obtenerlos de un solo proveedor. ¿Qué característica de AWS responde mejor a esta necesidad?",
      "opciones": [
        { "texto": "Ofrece una amplia gama de servicios para casi cualquier necesidad de negocio", "correcta": true, "porque": "AWS se presenta como la nube más completa, con servicios en todas esas categorías." },
        { "texto": "Solo ofrece servidores virtuales que el cliente debe completar con su propio software", "correcta": false, "porque": "AWS ofrece mucho más que servidores: bases de datos, almacenamiento, IA y más." },
        { "texto": "Exige un centro de datos propio para usar sus servicios", "correcta": false, "porque": "No se necesita centro de datos propio para usar AWS." },
        { "texto": "Cobra una tarifa fija por cada categoría de servicio", "correcta": false, "porque": "AWS cobra por uso, no con tarifas fijas por categoría." }
      ],
      "explicacion": "Gatillo: «un solo proveedor para muchas necesidades» → la amplitud de servicios de AWS."
    }
  ]
};
