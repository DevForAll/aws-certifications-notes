> **Cómo estudiar esta lección:** 1) lección en Skill Builder · 2) esta nota (la tabla de abajo es lo más importante) ·
> 3) **Taller** interactivo · 4) **práctica tipo examen**. *Mejorada el 2026-10-19 con la lección y la comprobación del estudiante (1/1).*

### **Resumen General**

Este módulo cubre los **6 beneficios principales de AWS Cloud Computing** que constituyen el núcleo de la propuesta de valor de AWS. Estos conceptos son fundamentales para el examen y aparecen frecuentemente en preguntas sobre por qué las empresas migran a la nube.

---

---

## **🗺️ Los 6 beneficios: nombre oficial, variantes y cómo reconocerlos (High)**

Skill Builder, la comprobación y el examen **no usan siempre las mismas palabras** para el mismo beneficio. Reconócelos por la idea:

| # | Nombre en la lección (Skill Builder) | Otras formas en que aparece | En inglés (guía oficial) | Ejemplo de la lección | Palabras gatillo del escenario |
|---|---|---|---|---|---|
| 1 | **Operar con gastos variables en lugar de gastos fijos** | «Cambiar gastos iniciales por gastos variables», «pagar solo por lo que usa» | *Trade fixed expense for variable expense* | Un centro de datos propio cuesta cientos de miles o millones por adelantado; la factura de AWS varía mes a mes | «sin inversión inicial», «presupuesto fijo», «empezar con poco», «flexibilidad financiera» |
| 2 | **Aprovechar las economías de escala masivas** | «Beneficiarse de economías de escala» | *Benefit from massive economies of scale* | AWS compra hardware en enormes cantidades → precio más bajo → lo traslada al cliente (como comprar al por mayor) | «precios más bajos por el volumen agregado de AWS», «startups acceden a la misma tecnología que grandes empresas» |
| 3 | **Dejar de hacer conjeturas sobre la capacidad** | «Dejar de adivinar la capacidad» | *Stop guessing capacity* | Compraron para 10 millones de usuarios y llegaron 500 000 (sobre); o crecieron más rápido y los clientes sufrieron (sub) | «no sabe cuánta capacidad necesitará», «picos impredecibles», «servidores ociosos», «escalar según la demanda real» |
| 4 | **Aumentar la velocidad y la agilidad** | «Mayor velocidad y agilidad» | *Increase speed and agility* | Crear entornos de prueba, experimentar y borrarlos si no funcionan, sin seguir pagando | «experimentar», «time-to-market», «lanzar más rápido», «probar ideas nuevas» |
| 5 | **Dejar de gastar dinero en la ejecución y el mantenimiento de centros de datos** | «Dejar de gastar en operar centros de datos» | *Stop spending money running and maintaining data centers* | Dejar de montar, apilar y alimentar servidores (*racking, stacking, powering*) para enfocarse en los clientes | «trabajo pesado indiferenciado», «el equipo se enfoca en los clientes», «sin mantener hardware» |
| 6 | **Convertirse en una empresa global en minutos** | «Lograr un alcance global en minutos», «globalizarse en minutos» | *Go global in minutes* | Empresa de EE. UU. que llega a la India desplegando en una **Región** de AWS en la India, en minutos y no meses o años | «expandirse a otro país», «usuarios en otro continente», «baja latencia para clientes internacionales» |

**Cómo decidir en 5 segundos (preguntas de «¿qué beneficio es?»):**

- ¿Habla de **cuándo/cómo se paga** (inicio vs. mes a mes)? → **1**.
- ¿Habla de **por qué el precio es bajo** (volumen de AWS)? → **2**.
- ¿Habla de **no saber cuánto se necesitará** o de ociosidad/falta de servidores? → **3**.
- ¿Habla de **probar, experimentar o lanzar rápido**? → **4**.
- ¿Habla de **personal ocupado en hardware** o en el centro de datos? → **5**.
- ¿Habla de **otro país o región geográfica**? → **6**.

> **Comprobación de Skill Builder (2026-10-19): 1/1.** «Una minorista no puede predecir cuánta capacidad de servidor
> necesitará para lanzar una línea de ropa» → **Dejar de hacer conjeturas sobre la capacidad**. Distractores: centros de
> datos, gastos variables y alcance global. Clave: «predecir capacidad» = beneficio 3, aunque el escenario hable de dinero.

> **Lo que la guía oficial CLF-C02 agrega (tareas 1.1 y 1.4, verificado 2026-10-19):** además de los 6 beneficios,
> la guía pide entender **alta disponibilidad, elasticidad y agilidad** (abajo, en «Conceptos que suelen confundir»), los
> **costos fijos vs. variables**, los **costos asociados al on-premises** (energía, refrigeración, espacio, personal,
> hardware), **BYOL** (*Bring Your Own License*: traer tu propia licencia, p. ej. de Windows Server u Oracle) **vs.
> licencias incluidas** en el precio de AWS, **rightsizing** (ajustar el tamaño del recurso a lo que realmente se usa para
> no pagar de más) y los **beneficios de la automatización**. Se profundizan en módulos posteriores (M2, M11).

> **Herramientas que menciona el video:** «herramientas integradas de facturación y presupuesto» para ahorrar cada mes →
> **AWS Budgets** (alertas cuando el gasto real o previsto supera un umbral) y **AWS Cost Explorer** (analizar tendencias).
> Se ven a fondo en el Módulo 11.

---

## **🔑 Conceptos Clave (Organizados por Prioridad para el Examen)**

### **PRIORIDAD ALTA** ⚡

**1. Pago por uso (Pay-as-you-go) / Cambiar gastos fijos por gastos variables**

- Elimina la necesidad de grandes inversiones iniciales (CAPEX)
- Convierte costos fijos en costos variables basados en consumo real
- Solo pagas por los recursos que realmente utilizas
- Permite comenzar pequeño sin inversión masiva inicial

**2. Economías de escala masiva**

- AWS compra hardware en volumen masivo → precios más bajos
- Esos ahorros se trasladan a los clientes
- Los clientes se benefician del poder de compra de AWS

**3. Dejar de adivinar la capacidad (Stop guessing capacity)**

- **Problema tradicional**: Comprar hardware basado en estimaciones que pueden ser incorrectas
    - Sobrestimación → recursos desperdiciados y dinero perdido
    - Subestimación → experiencia degradada o pérdida de clientes
- **Solución AWS**: Escalamiento rápido (minutos vs semanas/meses)
- Aprovisionar según necesidad actual y escalar según demanda

**4. Aumentar velocidad y agilidad**

- Crear/eliminar entornos de prueba rápidamente
- Experimentar sin compromiso de largo plazo
- Menos tiempo en aprovisionamiento, más tiempo en innovación
- Reducir tiempo de lanzamiento al mercado

**5. Dejar de gastar dinero en ejecutar y mantener centros de datos**

- Eliminar costos de operación y mantenimiento de infraestructura física
- AWS gestiona hardware, energía, refrigeración, seguridad física
- Enfocarse en clientes y aplicaciones, no en infraestructura

**6. Globalizarse en minutos (Go global in minutes)**

- Desplegar aplicaciones en múltiples regiones AWS globalmente
- **Tradicional**: meses/años para expandirse internacionalmente
- **AWS**: minutos para implementar en regiones globales
- AWS gestiona la infraestructura global

---

### **PRIORIDAD MEDIA** 📊

- **CAPEX vs OPEX**:
    - CAPEX (Capital Expenditure): Gastos de capital inicial (hardware, instalaciones)
    - OPEX (Operating Expenditure): Gastos operativos variables (modelo AWS)
- **Escalabilidad**:
    - Capacidad de aumentar/disminuir recursos según demanda
    - Escalamiento vertical y horizontal (concepto complementario)

---

## **🎯 Puntos Críticos para el Examen Cloud Practitioner**

### **Lo que AWS SIEMPRE evalúa:**

1. **Modelo de precios**: Entender que AWS = pago por uso, sin contratos largos ni inversión inicial masiva
2. **Ventajas económicas**:
    - Cambio de CAPEX a OPEX
    - Economías de escala
    - Costos predecibles vs impredecibles
3. **Agilidad empresarial**:
    - Experimentación rápida y económica
    - Tiempo de comercialización reducido (time-to-market)
    - Innovación sin barreras de entrada
4. **Elasticidad vs Escalabilidad** (complemento importante):
    - **Elasticidad**: Capacidad de escalar automáticamente hacia arriba Y hacia abajo
    - **Escalabilidad**: Capacidad de crecer según demanda
5. **Alcance global**:
    - Infraestructura distribuida globalmente
    - Baja latencia para usuarios finales
    - Redundancia y alta disponibilidad

---

## **⚠️ Conceptos que Suelen Confundir en el Examen**

### **1. Elasticidad vs Escalabilidad vs Agilidad**

- **Elasticidad**: Auto-scaling bidireccional (arriba Y abajo automáticamente)
- **Escalabilidad**: Capacidad de crecer (usualmente manual o planificado)
- **Agilidad**: Velocidad para implementar y experimentar

### **2. CAPEX vs OPEX**

- **Error común**: Pensar que AWS reduce costos totales siempre
- **Realidad**: AWS cambia CÓMO gastas (variable vs fijo), no necesariamente reduce el total
- El beneficio es la **flexibilidad financiera**, no siempre el costo más bajo

### **3. "Economías de escala" - De quién son**

- **Error**: Pensar que es MI economía de escala
- **Correcto**: Son las economías de escala de AWS trasladadas al cliente

### **4. "Global en minutos" ≠ "Gratis globalmente"**

- Implementar globalmente es rápido, pero cada región tiene costos
- Transferencia de datos entre regiones tiene costos adicionales

### **5. "Dejar de adivinar capacidad" ≠ "Capacidad infinita instantánea"**

- Aunque AWS es rápido, hay límites de servicio (service quotas) que pueden requerir solicitudes

---

## **📚 Información Adicional Valiosa (Complemento para el Examen)**

### **Otros beneficios de AWS frecuentemente evaluados:**

**7. Alta disponibilidad y tolerancia a fallos** (complemento)

- Infraestructura distribuida en múltiples zonas de disponibilidad
- Diseño para fallos sin impacto en servicio

**8. Seguridad** (complemento)

- Modelo de responsabilidad compartida
- AWS gestiona seguridad "DE" la nube
- Cliente gestiona seguridad "EN" la nube

**9. Confiabilidad** (complemento)

- Capacidad de recuperarse de fallos
- Backups automatizados
- Disaster recovery simplificado

---

## **💡 Palabras Clave que Aparecen Textualmente en Exámenes**

- Pay-as-you-go / Pay for what you use
- Variable expenses vs Fixed expenses
- CAPEX vs OPEX
- Economies of scale
- Stop guessing capacity
- Elasticity
- Agility
- Go global in minutes
- Trade CAPEX for variable expense
- Undifferentiated heavy lifting (trabajo pesado indiferenciado)

---

## **🌎 Casos reales (para fijar la idea)**

- **Netflix — dejar de gastar en centros de datos (5):** al terminar su migración a AWS en 2016 cerró sus últimos centros
  de datos de streaming y concentró a sus ingenieros en el producto.
- **Startup de IA — economías de escala (2) y gastos variables (1):** usa GPU de AWS por horas, una tecnología que
  antes solo podían comprar grandes empresas, sin invertir en hardware propio (patrón típico, no un cliente concreto).
- **Tienda online en Cyber Day — dejar de adivinar la capacidad (3):** escala sus servidores durante el evento y los
  reduce al terminar (patrón típico).
- **App peruana que abre en México — global en minutos (6):** despliega en una Región de AWS cercana a sus nuevos usuarios
  en vez de alquilar un centro de datos allá (patrón típico).

---

## **📖 Diccionario de servicios (de esta lección)**

| Servicio / término | Qué es | Palabras gatillo | ¿Distractor común? |
|---|---|---|---|
| **Región de AWS** | Área geográfica con varios centros de datos de AWS (p. ej., en la India) | «desplegar cerca de los usuarios», «otro país» | Se confunde con Zona de Disponibilidad (se ve en L4) |
| **AWS Budgets** | Alertas cuando el costo o uso real o **previsto** supera el umbral | «alerta», «umbral», «presupuesto» | Con Cost Explorer y Cost and Usage Report |
| **AWS Cost Explorer** | Gráficos para analizar el gasto pasado y su tendencia | «analizar», «tendencias», «visualizar gastos» | Con Budgets (Cost Explorer no alerta) |
| **Escalado** (*scaling*) | Aumentar o reducir recursos según la demanda; **Amazon EC2 Auto Scaling** lo automatiza (Módulo 2) | «ajustar a la demanda», «automáticamente» | — |
