## Resumen Ejecutivo
La optimización de costos en AWS no se trata solo de gastar menos, sino de elegir el **modelo de facturación que mejor se adapte al patrón de consumo** de la carga de trabajo. Amazon EC2 ofrece flexibilidad total: desde el pago por uso sin compromiso (On-Demand) hasta ahorros masivos del 90% (Spot) o compromisos a largo plazo (Savings Plans/Reserved Instances). Una estrategia exitosa suele comenzar con On-Demand para descubrir la "línea base" y luego migrar a modelos de ahorro para el uso constante.

---
## Conceptos Clave

### 1. Bajo Demanda (On-Demand)
*   **Definición:** Pagas solo por los segundos o horas que la instancia está "Running".
*   **Valor de Negocio:** Máxima agilidad. Ideal para experimentar, probar nuevas aplicaciones o manejar picos de tráfico impredecibles.
*   **Compromiso:** Cero. Sin pagos por adelantado ni contratos.

### 2. Savings Plans
*   **Definición:** Compromiso de un **gasto constante (ej. $10/hora)** por 1 o 3 años.
*   **Alcance:** Es el más flexible. Aplica a **EC2**, **AWS Fargate** y **AWS Lambda**.
*   **Flexibilidad:** El descuento se aplica sin importar si cambias de familia de instancia, tamaño, sistema operativo o incluso de Región.

### 3. Instancias Reservadas (Reserved Instances - RI)
*   **Definición:** Compromiso de usar un **tipo de instancia específico** en una Región determinada por 1 o 3 años.
*   **Opciones de Pago:**
    *   *All Upfront:* Todo por adelantado (Máximo ahorro).
    *   *Partial Upfront:* Una parte al inicio.
    *   *No Upfront:* Pago mensual (Ahorro menor, pero mejor que On-Demand).
*   **Uso:** Cargas de "Estado Estable" (Steady-state) que nunca se apagan.

### 4. Instancias Spot
*   **Definición:** Compra de capacidad sobrante de AWS.
*   **Riesgo:** AWS puede reclamar la capacidad con un **aviso de solo 2 minutos**.
*   **Valor:** El ahorro más alto posible (hasta 90%). Ideal para procesos que pueden fallar y reanudarse (Batch processing, análisis de datos).

### 5. Hosts Dedicados (Dedicated Hosts)
*   **Definición:** Servidor físico completo asignado exclusivamente a un cliente.
*   **Uso Crítico:** Cumplimiento (Compliance) o licencias de software que se pagan "por socket" o "por core" (ej. Windows Server, SQL Server).
*   **Diferenciador:** Tienes visibilidad total del hardware físico y control sobre los sockets/núcleos.

### 6. Instancias Dedicadas (Dedicated Instances)
*   **Definición:** Instancias que se ejecutan en hardware dedicado a un solo cliente, pero **AWS gestiona el servidor físico**.
*   **Diferencia con Host:** No tienes control sobre dónde se coloca la instancia (sockets/cores), solo garantizas que no compartes el hardware físico con otros clientes (Single-tenant).
*   **Costo:** Más baratas que un Host Dedicado, pero más caras que el hardware compartido.
 
---
## Tabla Comparativa Rápida

| Opción              | Ahorro Máx. | Compromiso        | Flexibilidad | Atributo Diferenciador                                         |
| :------------------ | :---------- | :---------------- | :----------- | :------------------------------------------------------------- |
| **On-Demand**       | 0%          | Ninguno           | Máxima       | Ideal para "descubrir" la línea base de uso.                   |
| **Savings Plans**   | 72%         | 1 o 3 años ($)    | Alta         | Aplica a EC2, Fargate y Lambda.                                |
| **Reserved Inst.**  | 75%         | 1 o 3 años (Tipo) | Media        | Mejor para aplicaciones 24/7 con configuración fija.           |
| **Spot**            | 90%         | Ninguno           | Baja         | El más barato; tolerable a interrupciones.                     |
| **Dedicated Inst.** | Variable    | Variable          | Media        | Hardware dedicado sin control de sockets/núcleos.              |
| **Dedicated Host**  | Variable    | Variable          | Mínima       | Control total sobre el hardware físico (Licencias/Compliance). |

---
## Puntos Críticos (Examen CLF-C02) 🎯

*   **Línea Base (Baseline):** AWS recomienda usar **On-Demand** al principio para entender cuánto cómputo necesitas realmente antes de comprar Reservas o Savings Plans.
*   **Advertencia de Spot:** Memoriza el tiempo: **2 minutos**. Es el tiempo que tienes para guardar estado antes de que AWS termine la instancia Spot.
*   **Savings Plans vs RI:** Savings Plans es un compromiso de **DINERO ($/hora)**, mientras que RI es un compromiso de **CAPACIDAD/TIEMPO** de un recurso específico.
*   **Serverless y Savings Plans:** Es vital saber que Savings Plans cubre **Fargate y Lambda**, no solo EC2. (Probabilidad Alta).
*   **Modelo de Responsabilidad:** Elegir el modelo de precios es responsabilidad del **CLIENTE** (Seguridad/Optimización EN la nube).

---
## Trampas de Examen (Diferencias Cruciales) ⚠️

1.  **Spot NO es para Bases de Datos:** Nunca elijas Spot para una carga de trabajo que no pueda interrumpirse. Si la pregunta menciona "disponibilidad crítica", descarta Spot inmediatamente.
2.  **Dedicated Instance vs Dedicated Host:** 
    *   *Dedicated Instance:* Hardware dedicado, pero AWS decide dónde poner la instancia.
    *   *Dedicated Host:* Hardware dedicado Y tienes visibilidad/control de los sockets/núcleos (necesario para traer tus propias licencias - **BYOL**).
3.  **Convertible RI vs Standard RI:** Si necesitas cambiar la familia de la instancia a mitad del contrato, necesitas una **Convertible RI** (ofrece menos descuento que la Standard).
4.  **Terminación de Instancia Spot:** Si AWS termina la instancia, no se te cobra por la fracción de hora. Si **tú** la terminas, pagas por la hora completa.

---
## Analogía de la Vida Real
*   **On-Demand:** Como un Hotel (pagas por noche, te vas cuando quieres, pero es caro).
*   **Reserved/Savings:** Como un contrato de Alquiler de 1 año (pagas menos mensualmente, pero tienes que quedarte el tiempo pactado).
*   **Spot:** Como un vuelo de "Último minuto" o "Standby" (súper barato, pero si el avión se llena con gente que pagó tarifa completa, te bajan).
*   **Dedicated Host:** Como ser dueño de un edificio entero solo para ti (máximo control y aislamiento).
