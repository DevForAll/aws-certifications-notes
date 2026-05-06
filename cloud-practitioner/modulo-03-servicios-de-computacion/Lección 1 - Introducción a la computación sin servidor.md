## 📊 Análisis de Probabilidad para el Examen
*   **ALTA:** Diferencias entre EC2 (No Administrado), Managed Services (Administrados) y Serverless. Modelo de Responsabilidad Compartida aplicado a cómputo.
*   **MEDIA:** Ventajas de Serverless (Escalabilidad, Alta Disponibilidad, Pago por uso). Concepto de "No administrar infraestructura".
*   **BAJA:** Analogías específicas (Barista vs. Cápsulas), aunque ayudan a memorizar.

---
## 📝 Resumen Ejecutivo (Valor de Negocio)
El objetivo de AWS es ofrecer un **espectro de cómputo** que permita a las empresas equilibrar **Control vs. Conveniencia**. Mientras que EC2 ofrece control total (ideal para apps legacy o personalización extrema), los servicios administrados y **Serverless** eliminan el "trabajo pesado indiferenciado" (administrar servidores, parchar SO), permitiendo que el equipo de desarrollo se enfoque exclusivamente en **innovar y crear código**, reduciendo drásticamente el tiempo de comercialización (Time-to-Market).

---

![[Pasted image 20260126220226.png]]

---
## 🔑 Conceptos Clave

### 1. Servicios No Administrados (Ejemplo: Amazon EC2)
*   **Definición:** Instancias de máquinas virtuales donde el usuario tiene control total.
*   **Responsabilidad:** El cliente gestiona parches de SO, escalado manual/configurado, seguridad de aplicaciones y datos.
*   **Valor:** Máxima flexibilidad y personalización (como una máquina de expreso profesional donde tú controlas cada perilla).

### 2. Servicios Administrados (Ejemplo: ELB, SNS, SQS, RDS)
*   **Definición:** AWS asume más responsabilidades operativas (aprovisionamiento, mantenimiento, alta disponibilidad).
*   **Responsabilidad:** El cliente configura el servicio según sus necesidades; AWS garantiza que funcione.
*   **Valor:** Conveniencia y ahorro de tiempo (como una cafetera de cápsulas: insertas la configuración y obtienes el resultado).

### 3. Computación Sin Servidor (Serverless)
*   **Definición:** No hay visibilidad ni acceso a la infraestructura subyacente.
*   **Responsabilidad:** El cliente solo se preocupa por su **Código o Aplicación**.
*   **Valor:** AWS maneja el escalado automático, la alta disponibilidad y el mantenimiento de forma invisible y transparente.

---
## ⚖️ Tabla Comparativa: Espectro de Administración

| Característica | No Administrado (EC2) | Administrado (ELB/RDS) | Sin Servidor (Lambda/Fargate) |
| :--- | :--- | :--- | :--- |
| **Control** | Máximo (SO, Red, App) | Medio (Configuración) | Mínimo (Solo Código/App) |
| **Mantenimiento** | Alto (Parches, Updates) | Bajo (AWS gestiona HW/SW) | Nulo (Invisible para ti) |
| **Escalado** | Manual o configurado | Automático (por AWS) | Automático y transparente |
| **Analogía** | El Barista (Tú haces todo) | Máquina de Cápsulas | Comprar el café listo |

---
## 🛡️ Modelo de Responsabilidad Compartida en Cómputo

| Capa                | EC2 (No Administrado)   | Serverless / Administrado |
| :------------------ | :---------------------- | :------------------------ |
| **Código/Datos**    | Cliente                 | Cliente                   |
| **Aplicación**      | Cliente                 | Cliente                   |
| **Sist. Operativo** | **Cliente**             | **AWS**                   |
| **Parches/Updates** | **Cliente**             | **AWS**                   |
| **Escalado/HA**     | Cliente (Configuración) | **AWS**                   |
| **Infraestructura** | AWS                     | AWS                       |

---
## 🎯 Puntos Críticos (Keywords para el Examen)
*   **"Undifferentiated Heavy Lifting":** Se refiere a tareas como parchar servidores que no agregan valor al negocio; Serverless elimina esto.
*   **"Invisible Infrastructure":** Característica principal de Serverless.
*   **"Balance Control vs. Convenience":** Es la razón por la cual AWS ofrece tantos servicios de cómputo.

---
## ⚠️ Trampas de Examen (Diferencias Cruciales)
1.  **"Serverless significa que no hay servidores":** **FALSO**. Sí hay servidores, pero AWS los gestiona y el cliente no tiene acceso a ellos.
2.  **"EC2 es un servicio administrado":** **FALSO**. En el examen, EC2 siempre se clasifica como un servicio que requiere administración del cliente (parches, SO).
3.  **"AWS es responsable de los parches en EC2":** **FALSO**. AWS es responsable del hardware y el hipervisor. El cliente es responsable de los parches del SO invitado.

---
## 📚 Información Adicional (Actualización CLF-C02)
*   **AWS Lambda:** El servicio serverless por excelencia para ejecutar código basado en eventos.
*   **AWS Fargate:** Motor serverless para contenedores (Docker), eliminando la necesidad de gestionar instancias de EC2 para ECS o EKS.
*   **Costo:** Serverless suele seguir un modelo de **pago por ejecución/tiempo real**, lo que puede ser más rentable para cargas de trabajo variables que mantener una instancia EC2 encendida 24/7.
