window.TALLER = {
  "id": "m01-l01-taller",
  "titulo": "M1 L1 — Taller: la cafetería y el modelo cliente-servidor",
  "modulo": 1,
  "leccion": "1",
  "siguiente": "leccion-01.js",
  "ejercicios": [
    {
      "tipo": "tarjetas",
      "titulo": "Lo esencial de la Lección 1",
      "tarjetas": [
        { "frente": "Modelo cliente-servidor", "reverso": "El CLIENTE hace una solicitud; el SERVIDOR valida que sea legítima (permisos) y devuelve una RESPUESTA." },
        { "frente": "En la cafetería del curso, ¿quién es el servidor?", "reverso": "El barista. En AWS sería un servidor virtual, por ejemplo una instancia de Amazon EC2.", "icono": "ec2" },
        { "frente": "Pagar solo por lo que usas", "reverso": "Como pagar a los baristas solo por las horas trabajadas: en AWS se paga solo por los recursos consumidos." },
        { "frente": "Aprovisionar / desaprovisionar", "reverso": "Crear recursos cuando sube la demanda y eliminarlos cuando baja. Al desaprovisionar, se deja de pagar de inmediato." },
        { "frente": "¿Por qué no contratar 10 baristas todo el día?", "reverso": "Sobreaprovisionar: en las horas flojas se paga capacidad ociosa. Es el problema típico del centro de datos propio (on-premises)." }
      ]
    },
    {
      "tipo": "emparejar",
      "titulo": "Traduce la cafetería a la nube",
      "pares": [
        { "izq": "☕ El consumidor que pide un café", "der": "Cliente", "porque": "Quien inicia la solicitud es el cliente." },
        { "izq": "🧑‍🍳 El barista que prepara y entrega", "der": "Servidor (p. ej., instancia de EC2)", "porque": "El servidor recibe la solicitud, la valida y responde." },
        { "izq": "🥤 El triple moca entregado", "der": "Respuesta", "porque": "Lo que el servidor devuelve al cliente." },
        { "izq": "💵 Revisar que el cliente pagó", "der": "Validar que la solicitud sea legítima", "porque": "Con permisos, el servidor responde; sin ellos, no." },
        { "izq": "🕐 Pagar al barista solo las horas trabajadas", "der": "Pago por uso", "porque": "En AWS solo se paga lo que se consume." },
        { "izq": "👥 Más baristas los días llenos, menos los tranquilos", "der": "Ajustar la capacidad a la demanda", "porque": "Aprovisionar cuando sube la demanda y desaprovisionar cuando baja." }
      ],
      "explicacion": "La analogía de la cafetería vuelve en todo el curso: si te pierdes con un servicio nuevo, pregúntate quién es el barista y quién el cliente."
    },
    {
      "tipo": "clasificar",
      "titulo": "¿Cliente o servidor?",
      "grupos": [
        { "nombre": "📱 Cliente", "desc": "Hace la solicitud" },
        { "nombre": "🖥️ Servidor", "desc": "Valida y responde" }
      ],
      "items": [
        { "texto": "El navegador web de una persona que busca vuelos", "grupo": 0, "porque": "Inicia la solicitud: es el cliente." },
        { "texto": "La instancia de Amazon EC2 que devuelve los vuelos disponibles", "grupo": 1, "porque": "Recibe la solicitud y responde: es el servidor.", "icono": "ec2" },
        { "texto": "La app del banco en el celular que pide el saldo", "grupo": 0, "porque": "Pide información: cliente." },
        { "texto": "La máquina que entrega las radiografías al médico que las pidió", "grupo": 1, "porque": "Atiende la solicitud: servidor." },
        { "texto": "Un sensor que envía su lectura y espera confirmación", "grupo": 0, "porque": "Aunque no sea una persona, inicia la solicitud: cliente." },
        { "texto": "El servidor virtual que valida permisos antes de responder", "grupo": 1, "porque": "Validar y responder es el papel del servidor." }
      ],
      "explicacion": "Truco: quien PIDE es el cliente (persona, app o dispositivo); quien RESPONDE es el servidor."
    },
    {
      "tipo": "ordenar",
      "titulo": "El lanzamiento del chocolate caliente en la nube",
      "instruccion": "Ordena lo que hace la cafetería (en AWS) para pagar solo lo que usa.",
      "pasos": [
        "Se anuncia la bebida nueva y se espera más demanda",
        "Se aprovisionan más recursos justo cuando llega la demanda",
        "Los clientes son atendidos sin esperas",
        "La demanda baja y se desaprovisionan los recursos extra",
        "Se deja de pagar por esos recursos de inmediato"
      ],
      "explicacion": "En un centro de datos propio no se puede «triplicar la capacidad chasqueando los dedos»; en AWS se aprovisiona y desaprovisiona al ritmo de la demanda."
    }
  ]
};
