## **Lección: AWS Lambda**

---

## **Resumen General**

AWS Lambda es el servicio de **cómputo sin servidor (serverless)** insignia de AWS. Permite ejecutar código sin aprovisionar ni administrar servidores. Lambda ejecuta código en respuesta a **eventos (disparadores)**, escala automáticamente según la demanda, y cobra solo por el tiempo de cómputo consumido. Es ideal para procesos de corta duración (máximo 15 minutos) basados en eventos, como procesamiento de imágenes, APIs, procesamiento de datos en tiempo real y automatización de tareas.

---

## **Conceptos Clave**

### **🔴 Probabilidad ALTA de aparecer en el examen:**

- **AWS Lambda - Definición**
    - Servicio de **cómputo sin servidor (serverless compute)**
    - Ejecutas código **sin aprovisionar ni administrar servidores**
    - No necesitas preocuparte por clústeres, escalado o mantenimiento de infraestructura
- **Modelo de Ejecución Basado en Eventos (Event-Driven)**
    - El código se ejecuta en respuesta a **disparadores (triggers)**
    - Solo pagas por el tiempo de ejecución real (cuando el código se está ejecutando)
    - Ejemplos de disparadores:
        - Subida de archivos a S3
        - Solicitudes HTTP a través de API Gateway
        - Eventos de DynamoDB Streams
        - Procesamiento de datos en tiempo real
- **Escalado Automático**
    - Lambda escala **automáticamente** según la demanda
    - Puede manejar desde 1 hasta miles de invocaciones simultáneas
    - Sin intervención manual necesaria
- **Alta Disponibilidad Integrada**
    - AWS garantiza la disponibilidad del servicio
    - Redundancia y tolerancia a fallos gestionadas por AWS
- **Límite de Tiempo de Ejecución**
    - **Duración máxima: 15 minutos por ejecución**
    - ⚠️ **CRÍTICO para el examen**: Este límite es fundamental para determinar si Lambda es apropiado
- **No Requiere Administración de Infraestructura**
    - AWS maneja: parches, actualizaciones de seguridad, sistema operativo
    - El cliente solo se enfoca en el código de la aplicación
- **Modelo de Precios (Pay-per-use)**
    - Pagas solo por:
        - Número de solicitudes/invocaciones
        - Tiempo de ejecución (milisegundos)
    - No pagas cuando el código no se está ejecutando

### **🟡 Probabilidad MEDIA de aparecer en el examen:**

- **Lenguajes de Programación Soportados**
    - Lambda admite múltiples lenguajes **de forma nativa**:
        - Java
        - Python
        - Node.js
        - Go
        - Ruby
        - C# (.NET)
    - También permite **entornos de ejecución personalizados** para otros lenguajes
- **Runtime (Entorno de Ejecución)**
    - Proporciona un entorno específico de lenguaje
    - Transmite: eventos de invocación, información de contexto, respuestas
    - Conecta Lambda con la función del usuario
- **Integración con Otros Servicios de AWS**
    - Lambda se integra fácilmente con servicios como:
        - **Amazon S3** (procesamiento de archivos)
        - **Amazon DynamoDB** (procesamiento de streams)
        - **Amazon API Gateway** (APIs RESTful)
        - **Amazon SNS/SQS** (mensajería)
        - **Amazon EventBridge** (orquestación de eventos)
- **Casos de Uso Ideales**
    - Procesos rápidos basados en eventos
    - Manejar solicitudes de sitios web (backends de APIs)
    - Procesamiento de lotes de datos
    - Generación de informes
    - Procesamiento de imágenes/videos (redimensionar, comprimir)
    - Procesamiento de datos en tiempo real (streaming)
    - Automatización de tareas (backups, notificaciones)

### **🟢 Probabilidad BAJA de aparecer en el examen:**

- Detalles de la aplicación clasificadora de cangrejos (ejemplo ilustrativo)
- Dato específico de 7000 especies de cangrejos

---

## **Puntos Críticos para el Examen Cloud Practitioner**

### ✅ **Características Fundamentales de Lambda (memorizar):**

|Característica|Detalle|
|---|---|
|**Tipo de servicio**|Cómputo sin servidor (serverless)|
|**Administración**|AWS administra TODO excepto tu código|
|**Escalado**|Automático y transparente|
|**Modelo de ejecución**|Basado en eventos (event-driven)|
|**Duración máxima**|**15 minutos por ejecución**|
|**Pricing**|Pay-per-use (por invocación + tiempo)|
|**Alta disponibilidad**|Gestionada por AWS automáticamente|

### ✅ **Cuándo USAR Lambda:**

- ✔️ Procesos de **corta duración** (menos de 15 minutos)
- ✔️ Cargas de trabajo **basadas en eventos**
- ✔️ Tráfico **variable o impredecible**
- ✔️ Necesitas **escalado automático instantáneo**
- ✔️ Quieres **minimizar costos operativos**
- ✔️ No quieres administrar servidores

### ✅ **Cuándo NO usar Lambda:**

- ❌ Procesos que toman **más de 15 minutos**
- ❌ Aplicaciones que requieren ejecución **continua 24/7**
- ❌ Necesitas control total del sistema operativo
- ❌ Aplicaciones con requisitos de estado persistente complejo

### ✅ **Modelo de Responsabilidad Compartida en Lambda:**

|AWS (Responsable de)|Cliente (Responsable de)|
|---|---|
|Infraestructura física|Código de la aplicación|
|Sistema operativo|Configuración de la función|
|Parches y seguridad|Gestión de permisos (IAM)|
|Escalado automático|Datos procesados|
|Alta disponibilidad|Monitoreo y logs (CloudWatch)|

### ✅ **Ejemplo de Flujo de Lambda:**

```
1. Evento disparador → (ej: imagen subida a S3)
2. Lambda invoca la función automáticamente
3. Código se ejecuta (ej: clasificar imagen)
4. Resultado enviado → (ej: notificación SNS)
5. Recursos liberados automáticamente
```

---

## **Conceptos que Suelen Confundir en el Examen**

### ❌ **Confusión #1: Lambda puede ejecutarse indefinidamente**

- **INCORRECTO**: Lambda tiene un límite de 15 minutos
- **CORRECTO**: Si necesitas más de 15 minutos, considera EC2, ECS o dividir la tarea

### ❌ **Confusión #2: Lambda siempre es la opción más económica**

- **INCORRECTO**: Para cargas 24/7 constantes, EC2 puede ser más barato
- **CORRECTO**: Lambda es económico para cargas **variables** o **esporádicas**

### ❌ **Confusión #3: Necesitas administrar servidores en Lambda**

- **INCORRECTO**: No hay servidores que administrar (ni ver ni acceder)
- **CORRECTO**: Solo escribes código; AWS administra toda la infraestructura

### ❌ **Confusión #4: Lambda no puede escalar para alta demanda**

- **INCORRECTO**: Lambda escala automáticamente a miles de invocaciones concurrentes
- **CORRECTO**: El escalado es automático y transparente

### ❌ **Confusión #5: Lambda solo soporta Python**

- **INCORRECTO**: Soporta múltiples lenguajes (Java, Python, Node.js, Go, Ruby, C#, etc.)
- **CORRECTO**: Además, puedes crear runtimes personalizados

### ❌ **Confusión #6: Lambda es un servicio administrado como RDS**

- **INCORRECTO**: Lambda es **serverless**, un paso más allá de "administrado"
- **CORRECTO**: En Lambda no hay servidores subyacentes que configurar

### ❌ **Confusión #7: Pagas por Lambda incluso cuando no se usa**

- **INCORRECTO**: Solo pagas por tiempo de ejecución real
- **CORRECTO**: Modelo pay-per-use (por invocación + milisegundos de ejecución)

---

## **📚 Información Adicional Valiosa para el Examen** _(Complemento no mencionado en la transcripción)_

### **🔹 Conceptos Adicionales de Lambda (frecuentemente evaluados):**

- **Lambda Layers (Capas)**
    - Permite compartir código/bibliotecas entre múltiples funciones
    - Reduce el tamaño del paquete de implementación
- **Lambda@Edge**
    - Ejecuta Lambda en ubicaciones de CloudFront (CDN)
    - Para personalización de contenido con baja latencia
- **Concurrencia**
    - Lambda puede ejecutar **1000 invocaciones concurrentes por región** (límite predeterminado)
    - Puede aumentarse mediante solicitud a AWS
- **Cold Start vs Warm Start**
    - **Cold Start**: Primera invocación (inicializa entorno) → ligeramente más lenta
    - **Warm Start**: Invocaciones subsecuentes → más rápidas
    - Importante para aplicaciones sensibles a latencia
- **Integración con IAM**
    - Lambda necesita **roles de IAM** para acceder a otros servicios
    - El rol define qué servicios puede invocar la función

### **🔹 Servicios Comúnmente Integrados con Lambda:**

|Servicio|Uso con Lambda|
|---|---|
|**S3**|Procesar archivos al subirlos|
|**API Gateway**|Crear APIs RESTful serverless|
|**DynamoDB**|Procesar cambios en tablas (Streams)|
|**CloudWatch Events**|Ejecutar funciones en horarios (cron)|
|**SNS/SQS**|Procesamiento asíncrono de mensajes|
|**Kinesis**|Procesar datos en tiempo real|

### **🔹 Comparación: Lambda vs EC2 vs Fargate**

|Característica|Lambda|EC2|Fargate|
|---|---|---|---|
|**Administración**|Sin servidores|Cliente administra|AWS administra|
|**Escalado**|Automático|Manual o Auto Scaling|Automático|
|**Duración**|Máx 15 min|Ilimitado|Ilimitado|
|**Pricing**|Por invocación|Por hora de instancia|Por vCPU/memoria|
|**Caso de uso**|Eventos cortos|Apps persistentes|Contenedores sin servidor|

### **🔹 Términos clave que aparecen textualmente:**

- "Serverless compute" / "Cómputo sin servidor"
- "Event-driven" / "Basado en eventos"
- "Triggers" / "Disparadores"
- "15 minutos" (límite de tiempo)
- "Escalado automático"
- "Pay-per-use" / "Pago por uso"
- "Runtime" / "Entorno de ejecución"
- "Integración con servicios de AWS"

---

## **🎯 Resumen Ultra-Rápido para Repasar:**

**Lambda** = Código sin servidores + Basado en eventos + Máximo 15 minutos + Escalado automático + Pagas solo por uso

**Cuándo usar Lambda**: Procesos cortos, eventos, tráfico variable, sin administración

**Cuándo NO usar Lambda**: Más de 15 minutos, 24/7 constante, control total del SO

---

## **📋 Checklist Mental para Preguntas de Examen:**

Cuando veas una pregunta sobre Lambda, pregúntate:

✓ ¿El proceso toma menos de 15 minutos? → Lambda ✅  
✓ ¿Es basado en eventos? → Lambda ✅  
✓ ¿Quieren evitar administrar servidores? → Lambda ✅  
✓ ¿Tráfico variable/impredecible? → Lambda ✅  
✓ ¿Necesita ejecutarse 24/7? → EC2/Fargate ❌  
✓ ¿Toma más de 15 minutos? → EC2/ECS ❌

---
---
---

## **Lección: AWS Lambda - Creación de una función de AWS - Parte 2**

---

## **Resumen General**

Esta lección demuestra la **integración práctica entre Amazon SQS (Simple Queue Service) y AWS Lambda** para procesar pedidos de forma automática y sin servidor. El flujo incluye: creación de una cola SQS, envío de mensajes (pedidos), configuración de una función Lambda con los **permisos IAM correctos** para leer de SQS y escribir en CloudWatch Logs, y finalmente el procesamiento automático de mensajes. Destaca la importancia de la **seguridad (permisos IAM)** y el **monitoreo con CloudWatch** en arquitecturas serverless.

---

## **Conceptos Clave**

### **🔴 Probabilidad ALTA de aparecer en el examen:**

- **Amazon SQS (Simple Queue Service)**
    - Servicio de **cola de mensajes totalmente administrado**
    - Permite **desacoplar componentes** de aplicaciones
    - Los mensajes se almacenan hasta por **14 días** (tiempo de retención)
    - Tipos de colas:
        - **Estándar**: Máximo rendimiento, orden no garantizado
        - **FIFO**: Orden garantizado (First-In-First-Out)
- **Integración Lambda + SQS**
    - Lambda puede **leer automáticamente** mensajes de una cola SQS
    - Lambda actúa como **consumidor** de mensajes
    - Configuración basada en eventos (event-driven)
    - Lambda procesa mensajes y los **elimina automáticamente** de la cola después del procesamiento exitoso
- **Permisos IAM para Lambda**
    - Lambda **requiere permisos específicos** para funcionar:
        - **Leer mensajes de SQS** (política: `AWSLambdaSQSQueueExecutionRole`)
        - **Escribir logs en CloudWatch Logs**
    - Se utiliza un **Rol de IAM** (execution role) asignado a la función Lambda
    - **Principio de mínimo privilegio**: Solo los permisos necesarios
- **CloudWatch Logs**
    - Servicio para **almacenar y monitorear logs**
    - Lambda escribe automáticamente logs de ejecución en CloudWatch
    - Permite **debugging y troubleshooting** de funciones Lambda
    - Puedes ver:
        - Invocaciones de la función
        - Errores y excepciones
        - Output del código (print/console.log)
- **CloudWatch Metrics (Métricas)**
    - Monitoreo de funciones Lambda:
        - **Invocaciones** (número de ejecuciones)
        - **Duración** (tiempo de ejecución)
        - **Errores**
        - **Throttles** (limitaciones de concurrencia)
    - Visualización gráfica de rendimiento

### **🟡 Probabilidad MEDIA de aparecer en el examen:**

- **Plantillas/Blueprints de Lambda**
    - AWS proporciona **plantillas predefinidas** para casos de uso comunes
    - Ejemplo: Plantilla para procesar mensajes SQS
    - Aceleran el desarrollo con código inicial
- **Runtime de Lambda**
    - Entorno de ejecución específico del lenguaje
    - Debe especificarse al crear la función
    - Ejemplo mencionado: Python (versión específica)
- **Polling de Mensajes en SQS**
    - SQS permite **sondeo manual** para inspeccionar mensajes sin eliminarlos
    - Lambda realiza **sondeo automático** cuando está configurado como disparador
    - Cuando Lambda procesa correctamente, el mensaje se elimina de la cola
- **Desacoplamiento de Aplicaciones**
    - SQS actúa como **buffer** entre componentes
    - Patrón arquitectónico común: **Producer → Queue → Consumer**
    - Ventajas:
        - Tolerancia a fallos
        - Escalabilidad independiente
        - Resiliencia
- **Código Fuente de Lambda**
    - Se puede editar directamente en la consola de AWS
    - Se debe **publicar una nueva versión** después de cambios
    - Soporta múltiples lenguajes de programación

### **🟢 Probabilidad BAJA de aparecer en el examen:**

- Detalles específicos del ejemplo de la cafetería (pedidos de café/chocolate)
- Nombres específicos de variables o funciones del código de demostración
- Proceso de "descomentar líneas" en el editor

---

## **Puntos Críticos para el Examen Cloud Practitioner**

### ✅ **Flujo de Trabajo Lambda + SQS (Arquitectura Event-Driven):**

```
1. Producer (Frontend/App) → Envía mensaje a SQS
2. SQS → Almacena mensaje (hasta 14 días)
3. Lambda → Detecta mensaje automáticamente (polling)
4. Lambda → Procesa mensaje
5. Lambda → Elimina mensaje de SQS (si exitoso)
6. Lambda → Escribe logs en CloudWatch
```

### ✅ **Componentes de Seguridad en Lambda:**

|Componente|Propósito|
|---|---|
|**Rol de IAM (Execution Role)**|Define QUÉ puede hacer la función Lambda|
|**Política de SQS**|Permite a Lambda leer mensajes de la cola|
|**Política de CloudWatch**|Permite a Lambda escribir logs|
|**Principio de mínimo privilegio**|Solo permisos necesarios, nada más|

### ✅ **Amazon SQS - Características Clave:**

|Característica|Detalle|
|---|---|
|**Tipo de servicio**|Cola de mensajes totalmente administrada|
|**Retención**|Hasta **14 días**|
|**Tipos de cola**|Estándar (alta velocidad) y FIFO (orden garantizado)|
|**Escalabilidad**|Automática e ilimitada|
|**Integración**|Fácil con Lambda, EC2, ECS, etc.|
|**Caso de uso**|Desacoplamiento de microservicios|

### ✅ **CloudWatch - Monitoreo y Observabilidad:**

|Servicio|Función|
|---|---|
|**CloudWatch Logs**|Almacena logs de aplicaciones y servicios|
|**CloudWatch Metrics**|Métricas de rendimiento (invocaciones, errores, duración)|
|**CloudWatch Alarms**|Notificaciones basadas en umbrales de métricas|
|**CloudWatch Dashboards**|Visualización de métricas en tiempo real|

### ✅ **Permisos IAM Específicos para Lambda + SQS:**

- **AWSLambdaSQSQueueExecutionRole** (política administrada por AWS):
    - `sqs:ReceiveMessage` - Leer mensajes de la cola
    - `sqs:DeleteMessage` - Eliminar mensajes procesados
    - `sqs:GetQueueAttributes` - Obtener atributos de la cola
    - `logs:CreateLogGroup` - Crear grupos de logs
    - `logs:CreateLogStream` - Crear streams de logs
    - `logs:PutLogEvents` - Escribir eventos de logs

### ✅ **Ventajas del Patrón Lambda + SQS:**

|Ventaja|Explicación|
|---|---|
|**Desacoplamiento**|Producer y consumer no dependen directamente|
|**Escalabilidad**|Cada componente escala independientemente|
|**Resiliencia**|Si Lambda falla, mensajes permanecen en SQS|
|**Sin administración**|Ambos son servicios administrados/serverless|
|**Procesamiento asíncrono**|No bloquea al productor|

---

## **Conceptos que Suelen Confundir en el Examen**

### ❌ **Confusión #1: Lambda debe sondear manualmente SQS**

- **INCORRECTO**: Lambda hace polling automático cuando se configura como disparador
- **CORRECTO**: Lambda detecta y procesa mensajes automáticamente; el sondeo manual es solo para inspección/testing

### ❌ **Confusión #2: Los mensajes desaparecen inmediatamente de SQS al enviarlos**

- **INCORRECTO**: Los mensajes permanecen en la cola hasta que un consumidor los procesa y elimina
- **CORRECTO**: SQS retiene mensajes hasta 14 días o hasta que sean explícitamente eliminados

### ❌ **Confusión #3: Lambda no necesita permisos para acceder a SQS**

- **INCORRECTO**: Lambda SIEMPRE necesita un rol de IAM con permisos específicos
- **CORRECTO**: Se requiere un execution role con políticas para SQS y CloudWatch

### ❌ **Confusión #4: CloudWatch Logs y CloudWatch Metrics son lo mismo**

- **INCORRECTO**: Son servicios relacionados pero diferentes
- **CORRECTO**:
    - **Logs** = Registros textuales de eventos/errores
    - **Metrics** = Datos numéricos de rendimiento (gráficos)

### ❌ **Confusión #5: SQS es solo para Lambda**

- **INCORRECTO**: SQS puede integrarse con cualquier servicio o aplicación
- **CORRECTO**: SQS funciona con EC2, ECS, aplicaciones on-premise, Lambda, etc.

### ❌ **Confusión #6: Si Lambda falla, el mensaje se pierde**

- **INCORRECTO**: Si Lambda falla, el mensaje permanece en la cola para reintentos
- **CORRECTO**: SQS permite reintentos automáticos y Dead Letter Queues (DLQ) para mensajes problemáticos

### ❌ **Confusión #7: Necesitas administrar servidores para SQS**

- **INCORRECTO**: SQS es un servicio **totalmente administrado**
- **CORRECTO**: No hay servidores que aprovisionar, escalar o mantener

---

## **📚 Información Adicional Valiosa para el Examen** _(Complemento no mencionado en la transcripción)_

### **🔹 Amazon SQS - Conceptos Adicionales:**

- **Visibility Timeout**
    - Tiempo durante el cual un mensaje está "invisible" mientras se procesa
    - Previene procesamiento duplicado
    - Por defecto: 30 segundos
- **Dead Letter Queue (DLQ)**
    - Cola para mensajes que fallan repetidamente
    - Permite análisis de mensajes problemáticos
    - Buena práctica para arquitecturas robustas
- **Long Polling vs Short Polling**
    - **Long Polling**: Reduce costo y latencia (recomendado)
    - **Short Polling**: Consulta inmediata pero menos eficiente
- **Pricing de SQS**
    - Pago por solicitud (millón de solicitudes)
    - Primeras 1 millón de solicitudes al mes: GRATIS (Free Tier)

### **🔹 Lambda + SQS - Configuraciones Importantes:**

- **Batch Size**
    - Número de mensajes que Lambda procesa por invocación
    - Rango: 1-10 para SQS estándar, 1-10 para FIFO
    - Optimiza costo/rendimiento
- **Event Source Mapping**
    - Configuración que conecta SQS con Lambda
    - Lambda sondea la cola automáticamente
    - Puedes habilitar/deshabilitar sin eliminar
- **Maximum Concurrency**
    - Límite de funciones Lambda ejecutándose simultáneamente
    - Ayuda a controlar consumo de downstream services

### **🔹 CloudWatch - Capacidades Adicionales:**

- **CloudWatch Alarms**
    - Notificaciones cuando métricas cruzan umbrales
    - Ejemplo: Alertar si Lambda tiene >5% de errores
- **CloudWatch Insights**
    - Análisis y consulta de logs con sintaxis SQL-like
    - Útil para debugging avanzado
- **Retención de Logs**
    - Por defecto: Logs se retienen indefinidamente
    - Recomendado: Configurar retención (ej: 7, 30, 90 días) para control de costos

### **🔹 Comparación: SQS vs SNS vs EventBridge**

|Servicio|Tipo|Patrón|Caso de Uso|
|---|---|---|---|
|**SQS**|Cola|1:1 (un consumidor)|Procesamiento asíncrono, desacoplamiento|
|**SNS**|Pub/Sub|1:N (múltiples suscriptores)|Notificaciones, fanout|
|**EventBridge**|Bus de eventos|Complejo|Arquitecturas basadas en eventos, integraciones SaaS|

### **🔹 Términos Clave que Aparecen Textualmente:**

- "Cola de mensajes" / "Message queue"
- "Desacoplamiento" / "Decoupling"
- "Permisos IAM" / "IAM permissions"
- "Rol de ejecución" / "Execution role"
- "CloudWatch Logs"
- "CloudWatch Metrics"
- "Invocaciones" / "Invocations"
- "Procesamiento de mensajes"
- "14 días" (retención de SQS)
- "Polling" / "Sondeo"

---

## **🎯 Resumen Ultra-Rápido para Repasar:**

**Flujo**: Mensaje → SQS (guarda 14 días) → Lambda (polling automático) → Procesa → Elimina mensaje → Escribe logs en CloudWatch

**Seguridad**: Lambda necesita rol IAM con permisos para SQS + CloudWatch

**Monitoreo**: CloudWatch Logs (registros) + CloudWatch Metrics (gráficos de rendimiento)

**Ventajas**: Desacoplamiento + Escalabilidad + Sin servidores + Resiliencia

---

## **📋 Checklist Mental para Preguntas de Examen:**

Cuando veas una pregunta sobre Lambda + SQS:

✓ ¿Necesitan desacoplar componentes? → **SQS** ✅  
✓ ¿Procesamiento asíncrono? → **Lambda + SQS** ✅  
✓ ¿Lambda necesita acceder a otros servicios? → **Rol IAM** ✅  
✓ ¿Cómo monitorear Lambda? → **CloudWatch Logs/Metrics** ✅  
✓ ¿Mensajes se pierden si Lambda falla? → **NO, permanecen en SQS** ✅  
✓ ¿Necesitan notificar a múltiples destinos? → **SNS, no SQS** ❌

---

## **🏗️ Arquitectura de Referencia (Patrón Común en Examen):**

```
┌─────────────┐      ┌─────────────┐      ┌─────────────┐
│   Frontend  │ ───> │     SQS     │ ───> │   Lambda    │
│  (Producer) │      │   (Queue)   │      │ (Consumer)  │
└─────────────┘      └─────────────┘      └─────────────┘
                                                  │
                                                  │ (Logs)
                                                  ▼
                                          ┌─────────────┐
                                          │  CloudWatch │
                                          │    Logs     │
                                          └─────────────┘
```

**Características**:

- Desacoplado
- Escalable
- Serverless
- Monitoreado

---

Excelente, ahora tengo **tres módulos completos** analizados:

1. ✅ Introducción a la computación sin servidor
2. ✅ AWS Lambda (conceptos fundamentales)
3. ✅ AWS Lambda - Creación de función + Integración SQS + CloudWatch