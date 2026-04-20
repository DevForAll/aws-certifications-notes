## Resumen Ejecutivo
Esta lección detalla el proceso técnico de aprovisionamiento de una instancia **Amazon EC2**. Cubre desde la selección de la imagen base (AMI) hasta la automatización del primer arranque (Bootstrapping). Se incluyen conceptos avanzados de seguridad, tenencia y persistencia de datos fundamentales para el examen CLF-C02.

## Conceptos Clave
- **AMI (Amazon Machine Image):** Plantilla con el sistema operativo (Linux/Windows) y software. Determina el "punto de partida" de la instancia.
- **Instance Type (Tipo de Instancia):** Define el hardware (CPU, RAM). Ejemplo: `t2.micro` (Capa Gratuita).
- **Key Pair (Par de claves):** Clave pública (AWS) y privada (Usuario). Indispensable para SSH/RDP.
- **Security Groups:** Firewall a nivel de instancia. Por defecto, deniega todo el tráfico entrante.
- **EBS (Elastic Block Store):** Disco virtual persistente.
- **User Data (Bootstrapping):** Script que se ejecuta **una sola vez** al inicio para instalar software automáticamente.
- **IAM Role (Instance Profile):** La forma más segura de otorgar permisos a la instancia para acceder a otros servicios de AWS sin usar llaves de acceso.

## Puntos Críticos (Keywords para el examen)
### ⚠️ ALTA PROBABILIDAD
- **User Data:** Automatización de la configuración inicial.
- **Security Group:** Firewall de instancia (Stateful, **stateful** (con estado) se refiere a componentes, aplicaciones o reglas de red que **recuerdan la información, las interacciones o el contexto previo** de una conexión o sesión de usuario).
- **IAM Role:** Siempre preferir Roles sobre llaves de acceso (Access Keys) dentro de EC2.
- **T2.micro:** Instancia estándar de la Capa Gratuita.
- **Public IP vs Elastic IP:** La IP pública es dinámica; la Elastic IP es estática y persistente.

### ⚠️ MEDIA PROBABILIDAD
- **Tenancy (Tenencia):** Shared (Compartido), Dedicated Instance (Hardware dedicado) y Dedicated Host (Control total físico).
- **Termination Protection:** Evita el borrado accidental de la instancia.
- **Delete on Termination:** Atributo de EBS que decide si el disco se borra o sobrevive cuando la instancia es eliminada.

### ⚠️ BAJA PROBABILIDAD
- **Hibernación:** Guarda el estado de la RAM en el EBS raíz para un inicio mucho más rápido.
- **GP3 vs GP2:** Evolución de los discos SSD de propósito general.

## Trampas de Examen
- **¿IAM User o IAM Role?:** AWS te preguntará cómo dar permiso a una EC2 para entrar a S3. La respuesta **SIEMPRE** es **IAM Role**.
- **¿Cada cuánto se ejecuta User Data?:** Solo en el **primer arranque**. No se ejecuta en cada reinicio (Reboot).
- **Seguridad por defecto:** Recuerda que los Security Groups vienen con "Deny All" para tráfico de entrada. Si no abres el puerto 80, tu servidor web no funcionará.
- **Costo de Hibernación:** Mientras la instancia está hibernada, no pagas por cómputo, pero **SÍ sigues pagando** por el almacenamiento del volumen EBS.

## 📌 Información de Experto (Deep Dive)
- **Shared vs Dedicated:** Usa *Dedicated Hosts* si tienes licencias de software por socket físico.
- **Resiliencia de Datos:** Desactivar "Delete on Termination" es una práctica común para bases de datos críticas instaladas en EBS.
- **Bootstrapping vs AMI:** Si la instalación de software vía User Data tarda mucho, es mejor crear una **AMI personalizada** (Golden Image) con todo preinstalado.

---
### Imágenes de Referencia
![[Pasted image 20260417230706.png]]
![[Pasted image 20260417230734.png]]
![[Pasted image 20260417230749.png]]
