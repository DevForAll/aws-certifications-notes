### **Resumen Ejecutivo**
Amazon Elastic Compute Cloud (EC2) es el servicio fundamental de cómputo de AWS que proporciona capacidad de servidor virtual (instancias) segura y redimensionable en la nube. Permite a las empresas obtener capacidad de cómputo masiva en minutos, eliminando la necesidad de inversiones iniciales en hardware físico (CAPEX) y permitiendo un modelo de gastos operativos (OPEX) basado en el uso real.

---

### **Conceptos Clave**
- **Instancia EC2:** Es el término que AWS utiliza para referirse a un **servidor virtual**. Evita usar "máquina virtual" en el contexto del examen, aunque técnicamente lo sean.
- **Multitenencia (Multi-tenancy):** Concepto donde varias instancias (de diferentes clientes) comparten el mismo hardware físico subyacente.
- **Hipervisor:** Software especializado que se ejecuta en el host físico encargado de repartir los recursos y, lo más importante, **garantizar el aislamiento** total entre instancias. AWS administra el hipervisor por completo.
- **Elasticidad:** La "E" de EC2. Se refiere a la capacidad de redimensionar recursos (hacer la instancia más grande o pequeña en términos de **CPU y RAM**) según la demanda.
- **Escalamiento Vertical:** Aumentar o disminuir la potencia (CPU, Memoria) de una instancia existente cambiando su **Tipo de Instancia** para ajustarse a las necesidades de la aplicación.
- **Modelo de Pago por Uso:** AWS solo cobra por las instancias que están en estado **Running (En ejecución)**. No se cobra por el cómputo de instancias detenidas o terminadas.

---

### **Puntos Críticos (Keywords del Examen)**
- **Agilidad (High):** Reducción del tiempo de aprovisionamiento de semanas/meses (on-premises) a **minutos** (nube).
- **Control Total (High):** El usuario tiene control administrativo absoluto sobre el sistema operativo (Linux/Windows) y el software instalado (bases de datos, apps empresariales, etc.).
- **Responsabilidad Compartida (High):** AWS gestiona la seguridad del host físico, la red física y el hipervisor. El usuario es responsable de parchar el sistema operativo y configurar firewalls (Security Groups).
- **Networking (Medium):** El usuario controla si la instancia es pública (accesible desde internet) o privada.
- **Flexibilidad (Medium):** Capacidad de elegir entre diversos sistemas operativos y configuraciones de software.

---

### **Trampas de Examen (Diferencias Cruciales)**
- **❌ Error:** Creer que "detenido" (Stopped) significa costo cero total.
  - **✅ Realidad:** No pagas por **cómputo** (CPU/RAM), pero sigues pagando por el **almacenamiento EBS** (Amazon Elastic Block Store), que es el disco duro virtual de tu instancia.
- **❌ Error:** Pensar que otros clientes pueden ver tus datos por compartir hardware.
  - **✅ Realidad:** El **Hipervisor** garantiza aislamiento lógico total a pesar de la multitenencia.
- **❌ Error:** Confundir Escalamiento Vertical con Horizontal.
  - **✅ Realidad:** **Vertical** es cambiar el **tamaño/tipo** de una sola instancia (añadir más potencia a la misma máquina). **Horizontal** es añadir **más instancias** idénticas (Auto Scaling).
- **❌ Error:** Creer que debes gestionar el hardware o el hipervisor.
  - **✅ Realidad:** AWS mantiene el hardware y el aislamiento; tú solo administras tu instancia y lo que corre dentro.

---

### **📌 Información Adicional Valiosa (Bonus de Examen)**
- **Control vs. Abstracción:** Si el examen pregunta por un servicio que ofrezca **"Control total a nivel de Sistema Operativo"**, la respuesta es **Amazon EC2**.
- **Familias de Instancias:** Aunque se profundiza después, recuerda que existen instancias optimizadas para: **Uso General, Cómputo, Memoria, Almacenamiento y Cómputo Acelerado**.
- **Modelos de Compra:** On-Demand (flexible), Reserved (ahorro con compromiso), Spot (capacidad sobrante con gran descuento).
