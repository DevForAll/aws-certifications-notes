![[Pasted image 20260121233219.png]]
![[Pasted image 20260121233242.png]]

# 📋 MÓDULO 1 - Lección 5: Modelo de Responsabilidad Compartida de AWS (Master Guide)

## **Resumen Ejecutivo**
AWS y el Cliente operan bajo un acuerdo de seguridad mutua. **AWS** protege la infraestructura física y el software base (**Seguridad "DE" la Nube**), mientras que el **Cliente** protege sus datos, aplicaciones y configuraciones (**Seguridad "EN" la Nube**). Entender dónde termina la responsabilidad de uno y empieza la del otro es la base de casi el 20% de las preguntas de seguridad del examen CLF-C02.

---

## **🔑 Conceptos Clave (Organizados por Prioridad)**

### **PRIORIDAD ALTA: Los Pilares del Modelo** ⚡⚡⚡

**1. El Mantra del Examen (Memorizar Sí o Sí):**
*   **AWS: Security OF the Cloud** (Seguridad **DE** la nube). Infraestructura global, hardware, redes físicas y el hipervisor.
*   **Cliente: Security IN the Cloud** (Seguridad **EN** la nube). Todo lo que el cliente pone "dentro" de AWS: datos, apps, OS e identidades.

**2. La Analogía del Constructor (Contexto Transcripción):**
*   **Constructor (AWS):** Construye paredes fuertes y puertas sólidas. No guarda copias de tus llaves (no hay "puertas traseras").
*   **Propietario (Cliente):** Debe cerrar las puertas con llave al salir. Si el cliente deja la puerta abierta o pierde las llaves, es su responsabilidad. AWS puede notificarte si ve la puerta abierta, pero no entrará a "cerrarla" por ti.

**3. Desplazamiento de Responsabilidad por Modelo de Servicio:**
La carga de trabajo del cliente cambia según lo que use:
*   **IaaS (Ej: EC2):** **Máxima responsabilidad del cliente.** Tú controlas el OS (Guest OS), los parches, el firewall (Security Groups) y las apps.
*   **PaaS (Ej: RDS, Elastic Beanstalk):** **Responsabilidad compartida.** AWS parcha el Sistema Operativo y el motor de DB; tú gestionas los datos y el acceso.
*   **SaaS / Serverless (Ej: S3, Lambda):** **Mínima responsabilidad del cliente.** AWS gestiona casi todo (OS, escalado, parches). Tú solo gestionas **Datos e IAM**.

---

### **PRIORIDAD MEDIA: Servicios y Herramientas** 📊

**4. Matriz de Servicios Específicos:**
| Servicio | ¿Quién parcha el OS? | ¿Quién parcha la App/DB? | ¿Quién gestiona el Firewall? |
| :--- | :--- | :--- | :--- |
| **Amazon EC2** | **Cliente** | **Cliente** | **Cliente** (Security Groups) |
| **Amazon RDS** | **AWS** | **AWS** (Motor DB) | **Cliente** (Reglas de acceso) |
| **AWS Lambda** | **AWS** | **Cliente** (El código) | **AWS** (Infraestructura) |
| **Amazon S3** | **AWS** | **N/A** | **Cliente** (Permisos de Bucket) |

| Servicio       | ¿Quién parcha el OS? | ¿Quién parcha la App/DB? | ¿Quién gestiona el Firewall?     |
| -------------- | -------------------- | ------------------------ | -------------------------------- |
| **Amazon EC2** | **Cliente**          | **Cliente**              | **Cliente** (Security Groups)    |
| **Amazon RDS** | **AWS**              | **AWS** (Motor DB)       | **Cliente** (Reglas de acceso)   |
| **AWS Lambda** | **AWS**              | **Cliente** (El código)  | **AWS** (Infraestructura)        |
| **Amazon S3**  | **AWS**              | **N/A**                  | **Cliente** (Permisos de Bucket) |

**5. La "Prueba" de Seguridad: AWS Artifact:**
*   Es el portal gratuito para descargar los informes de auditoría (ISO, PCI, SOC). 
*   **Uso en examen:** Si preguntan cómo demostrar que los centros de datos de AWS son seguros para una auditoría externa, la respuesta es **AWS Artifact**.

**6. Cifrado de Datos (Decisión y Herramienta):**
*   **Cliente decide:** Qué cifrar y cuándo.
*   **AWS proporciona:** La herramienta (**AWS KMS**). 
*   *Nota:* Aunque AWS dé la herramienta, el cliente es responsable de habilitarla y gestionar las llaves.

---

### **PRIORIDAD BAJA: Categorías de Controles** 📝

**7. Clasificación de Controles:**
*   **Heredados (Inherited):** El cliente los recibe de AWS (Seguridad física, edificios).
*   **Compartidos (Shared):** Ambos participan (Gestión de parches, configuración de red, entrenamiento).
*   **Específicos:** Responsabilidad total del cliente (IAM, clasificación de datos).

---

## **🎯 Puntos Críticos para el Examen (Keywords)**

*   **Guest Operating System:** Palabra clave para **Cliente** (en EC2).
*   **Physical Security / Disposal:** Palabra clave para **AWS** (eliminación física de discos).
*   **Least Privilege (Menor Privilegio):** La mejor práctica del cliente en IAM (solo dar los permisos mínimos necesarios).
*   **Data Residency:** El cliente es responsable de elegir la **Región** correcta para cumplir con leyes locales. AWS no mueve datos entre regiones por sí solo.
*   **No Backdoor (Puerta Trasera):** AWS no tiene acceso a tu sistema operativo (EC2) porque no tiene tus llaves de acceso.

---

## **⚠️ Trampas de Examen (Diferencias Cruciales)**

1.  **⚠️ "AWS configura mis firewalls":** FALSO. AWS proporciona el servicio (Security Group), pero el cliente define las **reglas** de tráfico.
2.  **⚠️ "En RDS, AWS es dueño de mis datos":** FALSO. El cliente siempre es dueño y responsable de sus datos en **cualquier** servicio.
3.  **⚠️ "AWS parcha mi aplicación personalizada":** FALSO. AWS nunca parcha el código del cliente.
4.  **⚠️ "Security OF the Cloud vs IN the Cloud":** Cuidado con la preposición. Si dice **OF** es AWS; si dice **IN** es Cliente.

---

## **💡 Regla de Oro del Instructor**
> **"Si puedes entrar por SSH o RDP al servidor (como en EC2), tú eres responsable del Sistema Operativo. Si el servicio es administrado o sin servidor (como Lambda o S3), AWS es responsable del Sistema Operativo."**

---

## **🛠️ Herramientas de Apoyo (Responsabilidad del Cliente)**
Para que el cliente cumpla con su parte "IN the Cloud", AWS ofrece:
*   **IAM:** Gestión de identidades y MFA.
*   **AWS Trusted Advisor:** Te avisa si tienes configuraciones de seguridad débiles (puertas abiertas).
*   **AWS CloudTrail:** Registra quién hizo qué (auditoría).
*   **AWS WAF / Shield:** Protección contra ataques web y DDoS.
