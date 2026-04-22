Este módulo profundiza en las **estrategias de escalado** en AWS, explicando las diferencias entre escalado horizontal y vertical, y presenta **Amazon EC2 Auto Scaling** como el servicio que automatiza el ajuste dinámico de capacidad. Se enfatiza la importancia de escalar cada componente de forma independiente según su demanda específica, evitando el sobreaprovisionamiento y optimizando costos. Introduce **Amazon CloudWatch** como herramienta esencial para monitorear métricas y tomar decisiones de escalado automático.

---

## Conceptos Clave

### **Tipos de Escalado** (Probabilidad de examen: **ALTA**)

#### **Escalado Horizontal (Scale Out/In)**

- **Definición**: Añadir o quitar **más instancias** al grupo de recursos
- Permite realizar **más trabajo en paralelo**
- **Ejemplo**: Agregar más servidores/instancias EC2 para atender más clientes simultáneamente
- **Ventaja principal**: Mayor disponibilidad y capacidad de procesamiento paralelo
- **Dirección**: Scale Out (añadir instancias) / Scale In (quitar instancias)

#### **Escalado Vertical (Scale Up/Down)**

- **Definición**: Añadir **más potencia** a las máquinas existentes (más CPU, RAM, almacenamiento)
- La **instancia individual** tiene más capacidad
- **Ejemplo**: Cambiar de una instancia t2.micro a t2.large
- **Limitación**: No siempre resuelve el problema (especialmente cuando se necesita procesamiento paralelo)
- **Dirección**: Scale Up (aumentar tamaño) / Scale Down (reducir tamaño)

### **Cuándo Usar Cada Tipo de Escalado** (Probabilidad de examen: **ALTA**)

- **Escalado Horizontal**: Cuando necesitas atender **más solicitudes simultáneas** o procesos paralelos
- **Escalado Vertical**: Cuando una tarea específica necesita **más recursos** pero no necesariamente más instancias
- **AWS favorece el escalado horizontal** para alta disponibilidad y elasticidad

### **Amazon EC2 Auto Scaling** (Probabilidad de examen: **ALTA**)

- **Servicio principal** para escalado automático de instancias EC2
- **Funciones clave**:
    - **Añade instancias** automáticamente cuando aumenta la demanda
    - **Desactiva/termina instancias** cuando la demanda disminuye
    - Mantiene el **número deseado de instancias** en todo momento
    - Opera **basado en métricas** de rendimiento

![[Pasted image 20260422003454.png]]

![[Pasted image 20260422003511.png]]
![[Pasted image 20260422003526.png]]


### **Escalado Independiente de Componentes** (Probabilidad de examen: **MEDIA-ALTA**)

- **Concepto crítico**: Cada componente de la aplicación puede escalarse de forma **independiente**
- **Ventaja**: Evita sobreaprovisionamiento innecesario
- **Ejemplo del módulo**: Frontend (toma de pedidos) puede tener diferente número de instancias que backend (procesamiento)
- Escalar solo lo que realmente necesita más capacidad → **optimización de costos**

### **Amazon CloudWatch** (Probabilidad de examen: **ALTA**)

- **Servicio de monitoreo y observabilidad** de AWS
- **Función principal**: Recopilar y monitorear **métricas** de rendimiento
- **Métricas comunes**:
    - Uso de CPU
    - Latencia de red
    - Métricas de aplicación personalizadas
- Los datos de CloudWatch **determinan cuándo debe ocurrir el escalado**
- Trabaja en conjunto con EC2 Auto Scaling para automatizar decisiones

### **Escalado Basado en Demanda** (Probabilidad de examen: **ALTA**)

- El escalado ocurre **automáticamente** cuando se cumplen condiciones específicas
- **Beneficios**:
    - Siempre tienes la capacidad correcta
    - Pagas solo por lo que necesitas en cada momento
    - No hay capacidad ociosa desperdiciada
- **Proceso**: CloudWatch monitorea → detecta cambios en métricas → Auto Scaling ajusta instancias

### **Optimización de Recursos** (Probabilidad de examen: **MEDIA**)

- **Concepto clave**: "Número deseado de instancias" en cada momento
- No tener instancias **inactivas** cuando no se necesitan
- Capacidad **dinámica** que se ajusta continuamente
- **Resultado**: Eficiencia operativa y reducción de costos

---

## Puntos Críticos para el Examen Cloud Practitioner

### 🎯 **Diferencias Escalado Horizontal vs Vertical**

|Aspecto|Escalado Horizontal|Escalado Vertical|
|---|---|---|
|**Qué cambia**|Número de instancias|Tamaño de la instancia|
|**Capacidad**|Más unidades trabajando en paralelo|Más potencia por unidad|
|**Alta Disponibilidad**|✅ Sí (múltiples instancias)|❌ No (punto único de falla)|
|**Favorecido por AWS**|✅ Sí|Limitado|
|**Términos**|Scale Out/In|Scale Up/Down|

### 🎯 **Componentes de una Arquitectura de Auto Scaling**

1. **Amazon EC2 Auto Scaling**: Servicio que añade/quita instancias
2. **Amazon CloudWatch**: Monitorea métricas y activa escalado
3. **Métricas de escalado**: Criterios que determinan cuándo escalar (CPU, latencia, etc.)
4. **Políticas de escalado**: Reglas que definen cómo y cuándo escalar

### 🎯 **Beneficios del Auto Scaling (para el examen)**

- ✅ **Disponibilidad mejorada**: Siempre hay capacidad suficiente
- ✅ **Optimización de costos**: Elimina capacidad ociosa
- ✅ **Elasticidad automática**: Se ajusta sin intervención manual
- ✅ **Tolerancia a fallos**: Reemplaza instancias no saludables automáticamente

### 🎯 **Métricas Comunes de CloudWatch para Escalado**

- **CPU Utilization** (Uso de CPU) ← **Más común en examen**
- **Network In/Out** (Tráfico de red)
- **Request Count** (Número de solicitudes)
- **Latency** (Latencia/tiempo de respuesta)
- **Custom Metrics** (Métricas personalizadas de aplicación)

### 🎯 **Proceso de Auto Scaling (Flujo Completo)**

1. CloudWatch **monitorea métricas** continuamente
2. Se detecta cambio en la demanda (umbral alcanzado)
3. Auto Scaling **evalúa políticas** configuradas
4. Se **lanzan nuevas instancias** (scale out) o se **terminan** (scale in)
5. Elastic Load Balancer distribuye tráfico entre instancias disponibles
6. CloudWatch continúa monitoreando el nuevo estado

---

## Conceptos que Suelen Confundir en el Examen

### ❌ **Confusión 1: Scale Up vs Scale Out**

- ❌ **INCORRECTO**: "Scale up significa agregar más servidores"
- ✅ **CORRECTO**:
    - **Scale Up** = hacer una instancia más grande (vertical)
    - **Scale Out** = agregar más instancias (horizontal)

### ❌ **Confusión 2: CloudWatch vs Auto Scaling**

- ✅ **CloudWatch**: Servicio de **monitoreo** que recopila métricas
- ✅ **Auto Scaling**: Servicio de **escalado** que añade/quita instancias
- ⚠️ **Trabajan juntos**: CloudWatch provee datos → Auto Scaling toma acción

### ❌ **Confusión 3: Número Deseado vs Mínimo/Máximo**

En configuración de Auto Scaling:

- **Mínimo**: Número mínimo de instancias que siempre deben estar ejecutándose
- **Deseado**: Número ideal de instancias en condiciones normales
- **Máximo**: Límite superior de instancias permitidas
- El Auto Scaling ajusta el número **deseado** dentro del rango mín-máx

### ❌ **Confusión 4: Cuándo escalar qué componente**

- ✅ **Escalar horizontalmente**: Cuando hay más solicitudes/usuarios simultáneos
- ✅ **Escalar verticalmente**: Cuando una tarea específica necesita más memoria/CPU
- ✅ **Escalar independientemente**: Frontend y backend pueden tener diferentes necesidades

### ❌ **Confusión 5: Auto Scaling automático vs manual**

- ✅ **Dynamic Scaling**: Responde automáticamente a cambios en demanda (basado en métricas)
- ✅ **Scheduled Scaling**: Escala en horarios predefinidos
- ✅ **Manual Scaling**: Ajustar manualmente el número de instancias
- El módulo enfatiza el **escalado automático dinámico**

---

## 📚 Información Adicional Valiosa para el Examen

### _(No mencionada explícitamente en la transcripción pero frecuentemente evaluada)_

### **Elastic Load Balancing (ELB)** ⭐ COMPLEMENTO

- **Trabaja con Auto Scaling** para distribuir tráfico
- **Tipos principales**:
    - **Application Load Balancer (ALB)**: Capa 7 (HTTP/HTTPS)
    - **Network Load Balancer (NLB)**: Capa 4 (TCP/UDP)
    - **Gateway Load Balancer (GWLB)**: Para appliances virtuales
- **Beneficio**: Distribuye tráfico automáticamente entre instancias saludables
- **Health Checks**: Verifica que instancias estén funcionando correctamente

### **Componentes de un Auto Scaling Group** ⭐ COMPLEMENTO

1. **Launch Template/Configuration**: Define qué tipo de instancia lanzar
2. **Scaling Policies**: Reglas de cuándo escalar
3. **Desired Capacity**: Número objetivo de instancias
4. **Min/Max Capacity**: Límites de escalado
5. **Health Checks**: Verificación de estado de instancias

### **Tipos de Políticas de Escalado** ⭐ COMPLEMENTO

- **Target Tracking**: Mantiene métrica en valor objetivo (ej: CPU al 50%)
- **Step Scaling**: Escala en pasos según magnitud del cambio
- **Simple Scaling**: Acción única cuando se cruza umbral
- **Predictive Scaling**: Usa machine learning para anticipar demanda

### **Términos Clave para Vocabulario del Examen**

- **Scaling Policy** (Política de escalado)
- **Launch Template** (Plantilla de lanzamiento)
- **Health Check** (Verificación de salud)
- **Cooldown Period** (Período de enfriamiento - tiempo de espera entre escalados)
- **Capacity** (Capacidad)
- **Threshold** (Umbral)
- **Metric** (Métrica)
- **Alarm** (Alarma de CloudWatch)

### **Beneficios Específicos de Auto Scaling** ⭐ COMPLEMENTO

1. **Fault Tolerance**: Reemplaza automáticamente instancias no saludables
2. **Better Availability**: Distribuye instancias en múltiples AZs
3. **Cost Management**: Reduce instancias cuando no se necesitan
4. **Automatic Scaling**: Sin intervención manual necesaria

### **Integración con Otros Servicios AWS** ⭐ COMPLEMENTO

- **CloudWatch Alarms**: Activan políticas de escalado
- **Elastic Load Balancing**: Distribuye tráfico
- **Amazon SNS**: Notificaciones de eventos de escalado
- **AWS Lambda**: Puede desencadenar acciones personalizadas

---

## ✅ Checklist de Preparación

**Debes ser capaz de:**

- [ ]  Explicar la diferencia entre escalado horizontal y vertical
- [ ]  Identificar cuándo usar scale out vs scale up
- [ ]  Describir qué es Amazon EC2 Auto Scaling y su propósito
- [ ]  Explicar el rol de CloudWatch en el auto scaling
- [ ]  Entender por qué escalar componentes independientemente
- [ ]  Identificar métricas comunes para activar escalado
- [ ]  Explicar los beneficios del auto scaling (disponibilidad, costos, elasticidad)
- [ ]  Reconocer que Auto Scaling puede escalar tanto hacia arriba como hacia abajo

---

## 🔗 Conexión con Módulo Anterior

**Conceptos construidos sobre la Parte 1:**

- ✅ **Alta Disponibilidad** → Ahora con auto scaling automático
- ✅ **Múltiples AZs** → Auto Scaling puede desplegar en varias AZs
- ✅ **Redundancia** → Auto Scaling mantiene número deseado de instancias
- ✅ **Elasticidad** → Ahora automatizada con políticas de escalado