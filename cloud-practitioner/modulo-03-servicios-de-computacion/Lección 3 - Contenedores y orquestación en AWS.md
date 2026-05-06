### [Lección 3 - Contenedores y orquestación en AWS]

**Resumen Ejecutivo**
Los contenedores permiten la **portabilidad** total de aplicaciones al empaquetar código y dependencias en un entorno aislado. AWS elimina la complejidad operativa mediante servicios de **orquestación** (ECS/EKS) y cómputo **Serverless** (Fargate), permitiendo que las empresas se enfoquen en la **Agilidad** y en reducir el "Time-to-Market".

---

### **1. ¿Qué son los Contenedores? (La Analogía del Barco)**
**Analogía:** Imagina un barco de carga. Antiguamente, cargar sacos de grano, barriles y cajas era lento y propenso a errores. El **Contenedor de Envío** estandarizó esto: no importa qué haya dentro, el barco y la grúa saben cómo mover el contenedor. 
- En AWS, el **Contenedor** es esa caja estándar que incluye: Código, Runtime, Herramientas del sistema y Configuración.

![[Pasted image 20260505232106.png]]

- **Beneficios clave para el examen:**
    - **Portabilidad:** Se ejecuta igual en tu laptop, en un servidor on-premise o en AWS.
    - **Velocidad:** Se inician en milisegundos (mucho más rápido que una VM/EC2).
    - **Aislamiento:** Permite microservicios donde cada parte de la app es independiente.

---

### **2. El Ciclo de Vida del Contenedor en AWS**
Para el examen, memoriza este flujo de 3 pasos:
1. **Build (Construir):** Creas la imagen (Docker).
2. **Store (Almacenar):** Guardas la imagen en **Amazon ECR** (Elastic Container Registry).
3. **Run (Ejecutar):** Usas un orquestador (**ECS/EKS**) para lanzarlo en un motor de cómputo (**EC2/Fargate**).

![[Pasted image 20260505232234.png]]

---

### **3. Orquestación: ECS vs EKS (¿Quién manda?)**
La orquestación es el "Director de Orquesta" que decide qué contenedor vive, cuál muere y cómo se comunican.

| Servicio | Keyword de Examen | Caso de Uso |
| :--- | :--- | :--- |
| **Amazon ECS** | "Nativo", "Simplicidad", "Integración AWS". | Aplicaciones que solo viven en AWS y quieren rapidez. |
| **Amazon EKS** | "**Kubernetes**", "Open Source", "Híbrido". | Migraciones desde on-premise o apps que requieren portabilidad total. |

**Dato Extra (Nivel Experto):**
- **ECS** usa "**Task Definitions**" (recetas de configuración).
- **EKS** usa "**Pods**" (la unidad más pequeña de Kubernetes).
- **Hybrid Cloud:** Si la pregunta menciona "ejecutar contenedores en mis propios servidores locales usando la consola de AWS", la respuesta es **ECS Anywhere** o **EKS Anywhere**.

---

### **4. Cómputo: EC2 vs Fargate (¿Quién mantiene el motor?)**

![[Pasted image 20260505232246.png]]

- **Amazon EC2:** Tienes el control. Tú parches el SO. Pagas por la instancia (esté llena de contenedores o no).
- **AWS Fargate:** **Serverless**. No hay servidores que gestionar. Pagas solo por los recursos que consume el contenedor mientras está activo. Es la opción con **menor sobrecarga operativa**.

---

### **5. Modelo de Responsabilidad Compartida**
Crucial para no fallar preguntas de seguridad:

![[Pasted image 20260505232124.png]]

- **Con EC2:** **CLIENTE** es responsable del parcheo del SO de la instancia y la configuración de red.
- **Con Fargate:** **AWS** es responsable del parcheo del SO. El **CLIENTE** solo se encarga de la seguridad de su aplicación y sus datos.

---

### **6. Otros Servicios Relacionados (Probabilidad Media)**
- **AWS App Runner:** Si la pregunta dice "un desarrollador quiere desplegar una aplicación web en contenedores de la forma más sencilla posible **sin aprender orquestación**", la respuesta es App Runner.

---

**Puntos Críticos y Trampas de Examen**
- **¿SQS o Contenedores?** Si la pregunta habla de "desacoplar mensajes", es SQS. Si habla de "empaquetar aplicaciones", son contenedores.
- **¿Fargate o Lambda?** Ambos son serverless. 
    - **Lambda:** Eventos rápidos (<15 min).
    - **Fargate:** Aplicaciones de larga duración (servicios web).
- **Escalabilidad:** Los contenedores permiten una **Elasticidad** mucho más granular que las instancias EC2 solas.

---

> **Nota del Instructor:** Dominar la diferencia entre **ECS**, **EKS** y **Fargate** te asegura al menos 3-4 preguntas del examen. Recuerda: Kubernetes = EKS; Serverless = Fargate.
