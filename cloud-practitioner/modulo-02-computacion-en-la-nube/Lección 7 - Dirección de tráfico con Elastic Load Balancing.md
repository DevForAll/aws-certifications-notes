Este módulo introduce **Elastic Load Balancing (ELB)** como la solución de AWS para distribuir automáticamente el tráfico de red entre múltiples instancias EC2. ELB elimina la necesidad de gestión manual de tráfico, funciona como un punto único de entrada que dirige solicitudes hacia las instancias disponibles con menor carga, y permite arquitecturas **desacopladas** donde cada capa puede escalar independientemente sin que otras capas necesiten conocer los cambios. Es un servicio regional, completamente administrado por AWS y diseñado para mejorar escalabilidad, disponibilidad y rendimiento.

---

## Conceptos Clave

### **Elastic Load Balancing (ELB)** (Probabilidad de examen: **ALTA**)

#### **Definición y Propósito**

- **Servicio AWS** que distribuye automáticamente el tráfico de red entrante entre múltiples recursos (instancias EC2, contenedores, direcciones IP)
- **Función principal**: Recibir solicitudes y **dirigirlas** hacia instancias disponibles
- **Objetivo**: Mejorar la **escalabilidad** y **disponibilidad** de aplicaciones
- **Completamente administrado**: AWS maneja todo el mantenimiento, actualizaciones, parches y alta disponibilidad

---

![[Pasted image 20260125203117.png]]

---

#### **Características Clave de ELB**

- **Regional**: Opera a nivel de región de AWS (no global, no por AZ individual)
- **Único punto de entrada**: Proporciona una **única URL** para acceder a la aplicación
- **Escalado elástico**: Escala automáticamente hacia arriba y hacia abajo según el tráfico
- **Sin costos adicionales por hora** por el escalado del balanceador mismo
- **Gestiona tráfico interno y externo**: Puede balancear tráfico desde Internet o dentro de AWS

---

![[Pasted image 20260125202955.png]]

---

### **Problema que Resuelve ELB** (Probabilidad de examen: **ALTA**)

#### **Sin Load Balancer**

- ❌ Distribución desigual de tráfico entre instancias
- ❌ Algunas instancias sobrecargadas, otras inactivas
- ❌ Frontend debe conocer todas las IPs de backend
- ❌ Difícil mantener sincronización cuando escalan instancias
- ❌ Acoplamiento fuerte entre capas de la aplicación

#### **Con Load Balancer**

- ✅ Distribución uniforme del tráfico
- ✅ Todas las instancias utilizadas eficientemente
- ✅ Frontend solo conoce la URL del ELB
- ✅ Auto-registro de nuevas instancias
- ✅ Arquitectura desacoplada y flexible

### **Distribución de Tráfico** (Probabilidad de examen: **ALTA**)

- ELB **monitorea en tiempo real** el estado y carga de las instancias
- **Dirige tráfico** a la instancia con **menos solicitudes pendientes**
- Verifica la **salud de las instancias** (health checks)
- Solo envía tráfico a instancias **saludables/disponibles**
- Balanceo automático sin intervención manual

### **Arquitecturas Desacopladas** (Probabilidad de examen: **MEDIA-ALTA**)

- **Concepto crítico**: Cada capa de la aplicación opera como **entidad independiente**
- **Ventaja principal**: Las capas pueden escalar **sin afectar otras capas**
- **Ejemplo del módulo**:
    - Capa frontend (pedidos) ← conecta a → ELB ← conecta a → Capa backend (producción)
    - Backend puede agregar/quitar instancias sin que frontend lo sepa
    - Frontend siempre usa la misma URL del ELB
- **Beneficio**: Simplifica gestión y mejora flexibilidad arquitectónica

### **Integración con Auto Scaling** (Probabilidad de examen: **ALTA**)

- **Funcionamiento conjunto**:
    1. Auto Scaling **lanza nueva instancia** backend
    2. Nueva instancia se **registra automáticamente** con ELB
    3. ELB verifica que la instancia esté **lista** (healthy)
    4. ELB comienza a **enviar tráfico** a la nueva instancia
    5. Frontend **no necesita saber** nada sobre los cambios
- **Resultado**: Escalado completamente automático y transparente

### **Estrategias de Enrutamiento** (Probabilidad de examen: **MEDIA**)

- ELB ofrece **diferentes estrategias** para gestionar tráfico eficientemente
- **Objetivo**: Garantizar rendimiento óptimo de la aplicación
- Puede configurarse según las necesidades específicas de la carga de trabajo
- Distribuye tráfico basándose en diversos algoritmos y métricas

### **Servicio Administrado vs Auto-Administrado** (Probabilidad de examen: **MEDIA-ALTA**)

#### **Balanceadores de Terceros (Auto-administrados)**

- ❌ Usuario debe **administrar** el balanceador
- ❌ Usuario debe **parchear** y **actualizar**
- ❌ Usuario debe manejar **conmutación por error** (failover)
- ❌ Usuario responsable del **mantenimiento**
- ✅ Puede ser usado si ya existe una solución preferida

#### **Elastic Load Balancing (AWS Administrado)**

- ✅ AWS maneja **toda la administración**
- ✅ AWS aplica **parches y actualizaciones** automáticamente
- ✅ AWS gestiona **alta disponibilidad** y failover
- ✅ Usuario solo **configura una vez**
- ✅ **Sin overhead operativo**

### **Alcance Regional de ELB** (Probabilidad de examen: **ALTA**)

- ELB es un servicio **regional** (no global)
- Opera dentro de una **región específica de AWS**
- Puede distribuir tráfico entre **múltiples Zonas de Disponibilidad** dentro de la región
- Proporciona **alta disponibilidad** dentro de la región
- Para aplicaciones multi-región, se necesita un ELB por región

---

## Puntos Críticos para el Examen Cloud Practitioner

### 🎯 **Propósito Principal de ELB**

- **Distribución uniforme** de tráfico entre múltiples recursos
- **Mejora escalabilidad** permitiendo agregar/quitar instancias transparentemente
- **Mejora disponibilidad** enviando tráfico solo a instancias saludables
- **Punto único de entrada** para aplicaciones distribuidas

### 🎯 **Beneficios Clave de ELB (Memorizar para el examen)**

1. ✅ **Altamente disponible**: Distribuido en múltiples AZs
2. ✅ **Completamente administrado**: AWS maneja toda la operación
3. ✅ **Escalado elástico automático**: Se ajusta al tráfico sin costo extra por hora
4. ✅ **Integración con Auto Scaling**: Registro automático de nuevas instancias
5. ✅ **Health Checks**: Solo envía tráfico a instancias saludables
6. ✅ **Desacoplamiento**: Frontend no necesita conocer backend
7. ✅ **Regional**: Alta disponibilidad dentro de la región

### 🎯 **Flujo de Funcionamiento de ELB**

```
Cliente → ELB (URL única) → Health Check → Instancia con menor carga
                                ↓
                        Solo instancias saludables
```

### 🎯 **ELB + Auto Scaling (Arquitectura Completa)**

```
Tráfico Variable → CloudWatch monitorea métricas
                        ↓
            Auto Scaling añade/quita instancias
                        ↓
         Instancias se registran con ELB automáticamente
                        ↓
              ELB distribuye tráfico uniformemente
```

### 🎯 **Arquitectura Desacoplada - Concepto Crítico**

- **Acoplamiento fuerte** (malo):
    - Frontend conoce IPs de todas las instancias backend
    - Cambios en backend requieren actualizar frontend
    - Difícil de escalar y mantener
- **Arquitectura desacoplada** (bueno) con ELB:
    - Frontend solo conoce URL del ELB
    - Backend puede cambiar libremente
    - Escalado independiente de cada capa
    - Mantenimiento simplificado

### 🎯 **ELB es Regional - Implicaciones**

- ✅ Funciona **dentro de una región AWS**
- ✅ Distribuye entre **múltiples AZs** de esa región
- ✅ Alta disponibilidad **regional**
- ❌ NO distribuye entre múltiples regiones (para eso se usa Route 53 o CloudFront)

### 🎯 **Health Checks de ELB**

- ELB **verifica continuamente** el estado de las instancias
- Solo envía tráfico a instancias que **pasan el health check**
- Si una instancia falla el check, ELB **deja de enviarle tráfico**
- Cuando la instancia se recupera, ELB **reanuda el tráfico** automáticamente

---

## Conceptos que Suelen Confundir en el Examen

### ❌ **Confusión 1: ELB vs Route 53**

- ✅ **ELB (Elastic Load Balancing)**:
    - Distribuye tráfico entre **instancias** dentro de una región
    - Opera a nivel de **región**
    - Balanceo de carga de **aplicaciones**
- ✅ **Route 53**:
    - Servicio de **DNS** global
    - Puede dirigir tráfico entre **regiones**
    - Resolución de nombres de dominio

### ❌ **Confusión 2: Alcance de ELB (Regional vs Global vs AZ)**

- ❌ **INCORRECTO**: "ELB es global"
- ❌ **INCORRECTO**: "ELB opera en una sola AZ"
- ✅ **CORRECTO**: "ELB es **regional** y distribuye entre **múltiples AZs** de esa región"

### ❌ **Confusión 3: ELB vs Auto Scaling**

- ✅ **Auto Scaling**: **Añade/quita instancias** según demanda
- ✅ **ELB**: **Distribuye tráfico** entre las instancias existentes
- ⚠️ **Trabajan juntos**: Auto Scaling gestiona cantidad, ELB gestiona distribución

### ❌ **Confusión 4: Tráfico Interno vs Externo**

- ✅ **ELB puede manejar AMBOS**:
    - **Externo (Internet-facing)**: Tráfico desde Internet hacia aplicación
    - **Interno**: Tráfico entre componentes dentro de AWS (ej: frontend → backend)

### ❌ **Confusión 5: Costo de Escalado de ELB**

- ✅ **CORRECTO**: ELB escala automáticamente **sin costos adicionales por hora** por el escalado
- ❌ **INCORRECTO**: Pensar que hay cargos extra cuando ELB escala
- ⚠️ **Nota**: Sí hay cargos por uso (horas de ejecución y datos procesados), pero el escalado automático no añade costos extra

### ❌ **Confusión 6: ¿Quién administra ELB?**

- ✅ **AWS administra**: Parches, actualizaciones, alta disponibilidad, mantenimiento
- ✅ **Usuario configura**: Listeners, health checks, targets, políticas de routing
- ❌ **INCORRECTO**: Pensar que el usuario debe administrar el software del balanceador

---

## 📚 Información Adicional Valiosa para el Examen

### _(No mencionada explícitamente en la transcripción pero frecuentemente evaluada)_

### **Tipos de Load Balancers de AWS** ⭐ COMPLEMENTO CRÍTICO

#### **Application Load Balancer (ALB)**

- **Capa OSI**: Capa 7 (HTTP/HTTPS)
- **Casos de uso**: Aplicaciones web, microservicios, contenedores
- **Características**:
    - Enrutamiento basado en **contenido** (path, host, headers)
    - Soporte para **WebSockets**
    - **Más común para aplicaciones web modernas**

#### **Network Load Balancer (NLB)**

- **Capa OSI**: Capa 4 (TCP/UDP)
- **Casos de uso**: Tráfico TCP/UDP de alto rendimiento
- **Características**:
    - **Latencia ultra baja**
    - Maneja **millones de solicitudes por segundo**
    - IP estática por AZ

#### **Gateway Load Balancer (GWLB)**

- **Capa OSI**: Capa 3 (Network)
- **Casos de uso**: Desplegar y escalar appliances virtuales (firewalls, IDS/IPS)
- **Características**:
    - Para **third-party virtual appliances**
    - Transparente para aplicaciones

#### **Classic Load Balancer (CLB)** - Generación Anterior

- **Capa OSI**: Capas 4 y 7
- **Estado**: Generación anterior, **NO recomendado** para nuevas aplicaciones
- AWS recomienda migrar a ALB o NLB

### **Componentes de ELB** ⭐ COMPLEMENTO

1. **Listeners**: Configuración de puerto y protocolo para solicitudes entrantes
2. **Target Groups**: Grupos de instancias/recursos que reciben tráfico
3. **Health Checks**: Verificaciones de salud de los targets
4. **Rules**: Reglas de enrutamiento (para ALB)
5. **Availability Zones**: AZs donde está habilitado el load balancer

### **Health Checks Detallados** ⭐ COMPLEMENTO

- **Protocolo**: HTTP, HTTPS, TCP
- **Interval**: Frecuencia de verificación (por defecto 30 segundos)
- **Timeout**: Tiempo de espera para respuesta
- **Healthy threshold**: Checks consecutivos exitosos para marcar como healthy
- **Unhealthy threshold**: Checks fallidos consecutivos para marcar como unhealthy

### **Cross-Zone Load Balancing** ⭐ COMPLEMENTO

- **Habilitado**: ELB distribuye tráfico **uniformemente** entre todas las instancias en todas las AZs habilitadas
- **Deshabilitado**: Distribuye solo entre instancias de la misma AZ
- **Recomendado**: Habilitado para mejor distribución

### **Métricas de CloudWatch para ELB** ⭐ COMPLEMENTO

- **RequestCount**: Número de solicitudes procesadas
- **TargetResponseTime**: Tiempo de respuesta de targets
- **HealthyHostCount**: Número de instancias saludables
- **UnHealthyHostCount**: Número de instancias no saludables
- **HTTPCode_Target_2XX_Count**: Respuestas exitosas

### **Casos de Uso Comunes de ELB** ⭐ COMPLEMENTO

1. **Aplicaciones web de alta disponibilidad**
2. **Arquitecturas de microservicios**
3. **Aplicaciones en contenedores** (con ALB)
4. **Aplicaciones que requieren IP estática** (con NLB)
5. **Distribución entre múltiples AZs** para tolerancia a fallos

### **Términos Clave para Vocabulario del Examen**

- **Target**: Destino del tráfico (instancia EC2, contenedor, IP)
- **Target Group**: Grupo de targets
- **Listener**: Proceso que verifica solicitudes de conexión
- **Connection Draining/Deregistration Delay**: Tiempo para completar solicitudes en curso antes de desregistrar instancia
- **Sticky Sessions**: Mantener cliente conectado a la misma instancia
- **Cross-Zone Load Balancing**: Distribución entre AZs

### **Integración de ELB con Otros Servicios** ⭐ COMPLEMENTO

- **Auto Scaling**: Registro automático de instancias
- **CloudWatch**: Monitoreo de métricas
- **Route 53**: Resolución DNS para ELB
- **AWS Certificate Manager (ACM)**: Certificados SSL/TLS
- **AWS WAF**: Protección de aplicaciones web (con ALB)
- **VPC**: Despliegue en subnets específicas

---

## ✅ Checklist de Preparación

**Debes ser capaz de:**

- [ ]  Explicar qué es ELB y su propósito principal
- [ ]  Describir los beneficios de usar ELB
- [ ]  Identificar que ELB es un servicio regional
- [ ]  Explicar cómo ELB mejora disponibilidad y escalabilidad
- [ ]  Entender la integración entre ELB y Auto Scaling
- [ ]  Describir qué es una arquitectura desacoplada y sus ventajas
- [ ]  Reconocer que ELB es completamente administrado por AWS
- [ ]  Identificar que ELB maneja tráfico interno Y externo
- [ ]  Explicar cómo funcionan los health checks
- [ ]  Diferenciar entre los tipos de load balancers (ALB, NLB, GWLB)

---

## 🔗 Conexión con Módulos Anteriores

### **Arquitectura Completa de Alta Disponibilidad y Escalabilidad**

```
┌─────────────────────────────────────────────────────┐
│                   REGIÓN AWS                        │
│  ┌──────────────────────────────────────────────┐  │
│  │         Elastic Load Balancer (ELB)          │  │
│  │         (Punto único de entrada)             │  │
│  └──────────────┬───────────────────────────────┘  │
│                 │                                    │
│      ┌──────────┴──────────┐                       │
│      │                     │                        │
│  ┌───▼────┐           ┌───▼────┐                  │
│  │  AZ-1  │           │  AZ-2  │                   │
│  │        │           │        │                    │
│  │ ┌────┐ │           │ ┌────┐ │                   │
│  │ │EC2 │ │           │ │EC2 │ │                   │
│  │ └────┘ │           │ └────┘ │                   │
│  │ ┌────┐ │           │ ┌────┐ │                   │
│  │ │EC2 │ │           │ │EC2 │ │                   │
│  │ └────┘ │           │ └────┘ │                   │
│  └────────┘           └────────┘                    │
│       ▲                    ▲                        │
│       └────────┬───────────┘                        │
│                │                                     │
│    ┌───────────▼──────────┐                        │
│    │  Auto Scaling Group  │                         │
│    │ (CloudWatch metrics) │                         │
│    └──────────────────────┘                         │
└─────────────────────────────────────────────────────┘
```

**Conceptos integrados:**

- ✅ **Múltiples AZs** (Parte 1) → ELB distribuye entre AZs
- ✅ **Escalado horizontal** (Parte 2) → ELB distribuye a nuevas instancias
- ✅ **Auto Scaling** (Parte 2) → Se integra con ELB automáticamente
- ✅ **CloudWatch** (Parte 2) → Monitorea métricas de ELB y targets
- ✅ **Alta Disponibilidad** (Parte 1) → ELB verifica health de instancias