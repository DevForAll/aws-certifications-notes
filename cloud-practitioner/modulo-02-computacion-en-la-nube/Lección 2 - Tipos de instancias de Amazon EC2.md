## Resumen Ejecutivo
Amazon EC2 no es una solución de "talla única". AWS ofrece diversas familias de instancias optimizadas para diferentes recursos (CPU, Memoria, Almacenamiento, Red). La clave del éxito en el examen es saber emparejar un **escenario de negocio** con la **familia de instancia** correcta, equilibrando siempre el rendimiento y el costo.

---

## ☕ Analogía de la Vida Real: La Cafetería de AWS
Imagina que EC2 es una cafetería. Para operar eficientemente, necesitas diferentes máquinas según el pedido:
*   **Máquina de Espresso de alta potencia:** Para shots rápidos y lattes (Optimizada para **Cómputo**).
*   **Máquina de Goteo Clásica:** Para el café básico balanceado (Uso **General**).
*   **Máquina de Vapor:** Para chocolate caliente especializado (Computación **Acelerada**).
*   Si usas la máquina incorrecta para el pedido, desperdicias energía o haces esperar al cliente. En AWS, elegir mal significa **pagar de más** o tener un **rendimiento pobre**.

---

## Conceptos Clave (Definiciones Simples)

### 1. Uso General (General Purpose)
*   **Definición:** Equilibrio perfecto entre cómputo, memoria y red.
*   **Uso:** Servidores web, repositorios de código, microservicios.
*   **Tip de Examen:** Es el **punto de partida recomendado** cuando no conoces el comportamiento de tu carga de trabajo.

### 2. Optimizadas para Cómputo (Compute Optimized)
*   **Definición:** Fuerte presencia de procesadores de alto rendimiento (CPU).
*   **Uso:** Servidores de juegos (Gaming), Computación de Alto Rendimiento (HPC), Modelado Científico, Batch Processing.
*   **Keyword:** "Intensivo en CPU".

### 3. Optimizadas para Memoria (Memory Optimized)
*   **Definición:** Diseñadas para procesar grandes conjuntos de datos directamente en la RAM.
*   **Uso:** Bases de datos de alto rendimiento (SAP HANA), Cachés en memoria (Redis), Análisis de datos en tiempo real.
*   **Keyword:** "Grandes datasets en memoria".

### 4. Computación Acelerada (Accelerated Computing)
*   **Definición:** Utilizan **aceleradores de hardware** (GPUs o FPGAs) en lugar de solo CPUs de software.
*   **Uso:** Renderizado de gráficos, Machine Learning profundo, Cálculos de punto flotante complejos.
*   **Keyword:** "Coprocesadores", "Gráficos", "Pattern matching".

### 5. Optimizadas para Almacenamiento (Storage Optimized)
*   **Definición:** Diseñadas para cargas de trabajo que requieren acceso rápido de lectura/escritura a datos en el **almacenamiento local**.
*   **Uso:** Sistemas de archivos distribuidos, Data warehousing, Bases de datos NoSQL.
*   **Keyword:** "Alto IOPS local", "Baja latencia de almacenamiento".

---

## Puntos Críticos (Keywords del Examen)

| Nivel de Probabilidad | Concepto | Keyword / Acción |
| :--- | :--- | :--- |
| **ALTA (High)** | **Flexibilidad** | Puedes cambiar el tipo o tamaño de instancia en **cualquier momento**. |
| **ALTA (High)** | **Costo vs Rendimiento** | Instancias grandes = Más potencia = Más costo. Busca el balance. |
| **ALTA (High)** | **Uso General** | "Equilibrio", "Punto de partida", "Carga incierta". |
| **MEDIA (Medium)** | **Nomenclatura** | Ej: `t3.micro`. El prefijo (`t`) indica la familia, el sufijo (`micro`) el tamaño. |
| **MEDIA (Medium)** | **Coprocesadores** | Asociar directamente con **Computación Acelerada**. |

---

## Trampas de Examen (Diferencias Cruciales)

*   ❌ **Trampa:** "Si mi aplicación va lenta, siempre debo elegir la instancia más cara/grande".
    *   ✅ **Realidad:** Debes identificar **qué recurso** falta. Si es RAM, ir a una "Memory Optimized", no necesariamente a una más grande de "Uso General".
*   ❌ **Trampa:** Confundir "Storage Optimized" con "S3".
    *   ✅ **Realidad:** Storage Optimized es para alto rendimiento **local** (dentro del servidor). S3 es almacenamiento de objetos externo.
*   ❌ **Trampa:** Creer que estás "atrapado" con la instancia elegida al inicio.
    *   ✅ **Realidad:** Una de las mayores ventajas de la nube es la capacidad de **redimensionar** rápidamente.
*   ❌ **Trampa:** "Computación Acelerada es solo para juegos".
    *   ✅ **Realidad:** Se usa mucho más para **Machine Learning** y análisis de patrones complejos en el entorno AWS.

---

## 📋 Tabla de Referencia Rápida para Casos de Uso

| Familia            | Si el examen dice...                           | Elige...   |
| :----------------- | :--------------------------------------------- | :--------- |
| **Uso General**    | "Servidor web balanceado" / "No sé mi tráfico" | **T3, M5** |
| **Cómputo**        | "Gaming" / "HPC" / "Codificación de video"     | **C5, C6** |
| **Memoria**        | "Base de datos SQL/NoSQL en RAM" / "Big Data"  | **R5, X1** |
| **Acelerada**      | "GPU" / "Machine Learning" / "Renderizado 3D"  | **P3, G4** |
| **Almacenamiento** | "Data Warehouse" / "IOPS masivos locales"      | **I3, D2** |
