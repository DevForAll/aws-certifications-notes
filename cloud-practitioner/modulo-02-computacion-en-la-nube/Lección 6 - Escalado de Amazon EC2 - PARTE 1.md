Este módulo introduce los conceptos fundamentales de **escalabilidad y elasticidad** en AWS, específicamente aplicados a Amazon EC2. Explica cómo las organizaciones pueden ajustar dinámicamente su capacidad de cómputo según la demanda real, evitando tanto el sobreaprovisionamiento costoso como la falta de capacidad que afecta la experiencia del cliente. Además, establece las bases de **alta disponibilidad** mediante arquitecturas redundantes distribuidas en múltiples Zonas de Disponibilidad.

---

## Conceptos Clave

### **Escalabilidad y Elasticidad** (Probabilidad de examen: **ALTA**)

- **Escalabilidad**: Capacidad de aumentar o disminuir recursos de cómputo según las necesidades del negocio
- **Elasticidad**: Capacidad de ajustar automáticamente los recursos en respuesta a cambios en la demanda
- AWS permite aprovisionar cargas de trabajo según la **demanda exacta** en cada momento
- Beneficio dual: **clientes satisfechos** (siempre hay capacidad disponible) + **ahorros de costos** (no se paga por capacidad ociosa)

### **Planificación de Capacidad** (Probabilidad de examen: **ALTA**)

- **Modelo tradicional (on-premises)**: Planificar para el pico máximo de uso → costoso y con capacidad ociosa la mayor parte del tiempo
- **Modelo AWS**: Aprovisionar según demanda real → pagar solo por lo que se usa
- Problema resuelto: No es necesario "adivinar" la capacidad futura

### **Alta Disponibilidad (High Availability)** (Probabilidad de examen: **ALTA**)

- **Instancias redundantes**: Crear múltiples copias de la misma instancia EC2
- **Sin punto único de falla (Single Point of Failure - SPOF)**: Si una instancia falla, otras continúan operando
- Los clientes **nunca pierden el servicio** gracias a la redundancia

### **Zonas de Disponibilidad (Availability Zones - AZ)** (Probabilidad de examen: **ALTA**)

- **Mejor práctica**: Desplegar instancias EC2 en **múltiples AZs** dentro de una región
- **Beneficio**: Si hay problemas en una AZ, las instancias en otras AZs asumen la carga
- Garantiza continuidad del servicio ante fallos de infraestructura

### **Aprovisionamiento Programático** (Probabilidad de examen: **MEDIA**)

- AWS permite crear instancias mediante métodos programáticos (automatización)
- Facilita la creación rápida de réplicas de instancias
- Permite reemplazar instancias fallidas automáticamente

### **Casos de Uso de EC2** (Probabilidad de examen: **MEDIA**)

- Atender solicitudes web
- Procesamiento y análisis de datos
- Alojar aplicaciones diversas

---

## Puntos Críticos para el Examen Cloud Practitioner

### 🎯 **Diferencia entre Escalabilidad y Elasticidad**

- **Escalabilidad**: Capacidad de crecer (puede ser manual o automática)
- **Elasticidad**: Ajuste **automático** bidireccional (crecer Y reducir) según demanda

### 🎯 **Ventajas de la Nube vs On-Premises**

- **On-premises**: Requiere planificación para capacidad máxima, inversión inicial alta (CapEx), capacidad ociosa
- **AWS**: Pago por uso (OpEx), sin capacidad desperdiciada, escalamiento según demanda real

### 🎯 **Modelo de Pago de AWS**

- **Pay-as-you-go**: Solo pagas por lo que usas
- **Sin costos iniciales**: No hay inversión en hardware
- **Sin compromiso a largo plazo**: Flexibilidad para escalar hacia arriba o hacia abajo

### 🎯 **Alta Disponibilidad - Componentes Clave**

- Redundancia de instancias
- Distribución en múltiples AZs
- Eliminación de puntos únicos de falla
- Conmutación por error automática (failover)

### 🎯 **Zonas de Disponibilidad (Conceptos para Examen)**

- Son **centros de datos aislados** dentro de una región AWS
- Conexión de **baja latencia** entre AZs de la misma región
- **Aislamiento de fallos**: Un problema en una AZ no afecta a otras
- Mínimo **2-3 AZs** por región AWS

---

## Conceptos que Suelen Confundir en el Examen

### ❌ **Confusión 1: Escalabilidad vs Elasticidad**

- ✅ **CORRECTO**: La elasticidad es un tipo específico de escalabilidad que ocurre automáticamente en ambas direcciones
- ❌ **INCORRECTO**: Pensar que son exactamente lo mismo

### ❌ **Confusión 2: Alta Disponibilidad vs Tolerancia a Fallos**

- ✅ **Alta Disponibilidad**: Sistema diseñado para minimizar el tiempo de inactividad (puede haber breves interrupciones)
- ✅ **Tolerancia a Fallos**: Sistema que continúa funcionando sin interrupción incluso cuando un componente falla
- El módulo describe **Alta Disponibilidad** mediante redundancia en múltiples AZs

### ❌ **Confusión 3: Región vs Zona de Disponibilidad**

- ✅ **Región**: Ubicación geográfica con múltiples AZs (ej: us-east-1)
- ✅ **AZ**: Centro de datos individual dentro de una región (ej: us-east-1a, us-east-1b)
- Las instancias se despliegan en **AZs**, no directamente en "regiones"

### ❌ **Confusión 4: Cuándo escalar**

- ✅ **Escalar verticalmente (Scale Up)**: Aumentar el tamaño de una instancia (más CPU, RAM)
- ✅ **Escalar horizontalmente (Scale Out)**: Agregar más instancias
- AWS favorece el **escalamiento horizontal** para alta disponibilidad

---

## 📚 Información Adicional Valiosa para el Examen

### _(No mencionada explícitamente en la transcripción pero frecuentemente evaluada)_

### **Servicios AWS de Escalado Automático**

- **Amazon EC2 Auto Scaling**: Servicio que automáticamente ajusta el número de instancias EC2
- **Elastic Load Balancing (ELB)**: Distribuye tráfico entre múltiples instancias EC2 en múltiples AZs
- Estos servicios trabajan juntos para lograr escalabilidad y alta disponibilidad

### **Métricas Comunes para Escalado**

- Utilización de CPU
- Tráfico de red
- Número de solicitudes
- Métricas personalizadas de CloudWatch

### **Beneficios del Modelo de Nube (6 pilares clave de AWS)**

1. **Trade capital expense for variable expense** (Cambiar CapEx por gasto variable)
2. **Benefit from massive economies of scale** (Economías de escala)
3. **Stop guessing capacity** (Dejar de adivinar capacidad) ← **Mencionado en el módulo**
4. **Increase speed and agility** (Velocidad y agilidad)
5. **Stop spending money on running data centers** (No mantener centros de datos)
6. **Go global in minutes** (Despliegue global rápido)

### **Términos Clave para Vocabulario del Examen**

- **Workload** (Carga de trabajo)
- **Provision** (Aprovisionar)
- **Capacity** (Capacidad)
- **Redundancy** (Redundancia)
- **Failover** (Conmutación por error)
- **Fault tolerance** (Tolerancia a fallos)
- **High availability** (Alta disponibilidad)
- **Resiliency** (Resiliencia)

## ✅ Checklist de Preparación

**Debes ser capaz de:**

- [ ]  Explicar la diferencia entre escalabilidad y elasticidad
- [ ]  Describir por qué la nube es más económica que on-premises para cargas variables
- [ ]  Explicar qué es una Zona de Disponibilidad y por qué usarlas
- [ ]  Identificar los beneficios de desplegar en múltiples AZs
- [ ]  Reconocer qué es un punto único de falla
- [ ]  Entender el modelo de pago por uso de AWS

