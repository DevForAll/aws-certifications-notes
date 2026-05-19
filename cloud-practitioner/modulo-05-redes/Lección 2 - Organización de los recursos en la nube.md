# Módulo 5, Lección 2: Organización de los Recursos en la Nube

## 🚀 Resumen Ejecutivo
El diseño de una red en AWS no se trata solo de conectar servidores; se trata de **aislamiento lógico y control de acceso**. Una empresa elige Amazon VPC para crear un entorno seguro y personalizado donde puede definir quién entra, quién sale y qué recursos son visibles al mundo. La decisión entre usar Internet (VPN) o una línea privada (Direct Connect) es un factor crítico de **negocio** que equilibra costo, velocidad y cumplimiento regulatorio.

---

## 💡 Conceptos Clave

### 🔴 Amazon VPC (Virtual Private Cloud) - **PRIORIDAD: MUY ALTA**
- **Definición:** Tu propia red privada lógica dentro de AWS.
- **Valor de Negocio:** Permite un control total sobre el entorno de red, definiendo rangos de IP, subredes y tablas de ruteo.
- **Keywords:** Red lógica, aislamiento, rango de IPs privadas (CIDR).
![[Pasted image 20260518222646.png]]

### 🔴 Subredes (Subnets) - **PRIORIDAD: ALTA**
- **Definición:** Subdivisiones de una VPC para agrupar recursos.
- **Tipos:**
    - **Pública:** Accesible desde Internet (ej. Servidores Web, ALB).
    - **Privada:** Protegida, sin acceso directo desde el exterior (ej. Bases de Datos, Backend).
- **Keyword:** Segmentación de recursos.
![[Pasted image 20260518222713.png]]

### 🔴 Internet Gateway (IGW) - **PRIORIDAD: ALTA**
- **Definición:** El componente que permite la comunicación entre la VPC e Internet.
- **Analogía:** La **"Puerta Principal"** de una cafetería. Sin ella, los clientes no pueden entrar ni salir.
- **Keyword:** Acceso público, bi-direccional.

### 🔴 Virtual Private Gateway (VPG) - **PRIORIDAD: ALTA**
- **Definición:** Punto de entrada para tráfico privado que NO viene de Internet público, sino de una red aprobada (VPN).
- **Analogía:** Una cafetería dentro de un edificio corporativo donde debes registrarte para entrar.
- **Keyword:** Conexión VPN, cifrado.

### 🔴 AWS Direct Connect (DX) - **PRIORIDAD: MUY ALTA**
- **Definición:** Servicio que establece una conexión de **fibra dedicada física** desde tu On-premise a AWS.
- **Analogía:** Una **"Puerta Mágica Secreta"** que va directo de tu oficina a la cafetería, evitando el tráfico de la calle.
- **Keyword:** Cable físico, conexión dedicada, rendimiento constante, bypass Internet.

---

## 📊 Tabla Comparativa Rápida: Conectividad Híbrida

| Característica | AWS Site-to-Site VPN | AWS Direct Connect |
| :--- | :--- | :--- |
| **Medio de transporte** | Internet Pública | Cable de Fibra Dedicado (Físico) |
| **Costo** | Bajo (Económico) | Alto (Inversión inicial y mensual) |
| **Tiempo de Setup** | Minutos (Rápido) | Semanas (Requiere logística física) |
| **Rendimiento** | Variable (Sujeto a congestión de Internet) | Consistente y de alta velocidad |
| **Seguridad** | Cifrada, pero viaja por red pública | Privada, máxima seguridad/cumplimiento |

---

## ⚡ Puntos Críticos para el Examen (High Probability)

1.  **Diferencia VPN vs DX:** 
    - Si la pregunta dice "bajo costo y rápido": **VPN**. 
    - Si dice "rendimiento consistente o cumplimiento regulatorio": **Direct Connect**.
2.  **Responsabilidad del Cliente:** El usuario es responsable de configurar las subredes y decidir qué es público o privado (Seguridad **EN** la nube).
3.  **Ubicación de Bases de Datos:** Siempre deben ir en **subredes privadas** por mejores prácticas.
4.  **Internet Gateway:** Es un objeto altamente disponible y escalable; solo necesitas uno por VPC para habilitar Internet.

---

## ⚠️ Trampas de Examen

- **Confundir IGW con VPG:** Recuerda: **I**nternet Gateway es para el mundo (**I**nternet), **V**irtual Private Gateway es para tu red **V**irtual privada (VPN).
- **Creer que la VPN es "mala":** No es mala, es solo compartida. Para el examen, su limitación es la variabilidad del rendimiento de Internet.
- **Direct Connect y "la nube":** DX no es una conexión inalámbrica ni satelital; es un **cable físico**.

---

## 📖 Diccionario de Servicios AWS (Visualización de Distractores)

| Servicio | Definición Corta | Palabras Gatillo (Keywords) |
| :--- | :--- | :--- |
| **Amazon VPC** | Red privada virtual. | Aislamiento, Rango IP, Red Lógica. |
| **Internet Gateway** | Conexión a Internet. | Acceso público, Puerta de enlace. |
| **Virtual Private Gateway** | Conexión privada vía VPN. | VPN, Cifrado, On-premises (vía Internet). |
| **AWS Direct Connect** | Línea privada dedicada. | Cable físico, Fibra, Rendimiento consistente. |
| **VPC Peering** | Conexión entre dos VPCs. | Comunicación privada entre VPCs, Sin pasar por Internet. |
| **Route 53** | Servicio de DNS (Mencionado como distractor). | Resolución de nombres, Registro de dominios. |

---

## 💡 Información Adicional Valiosa (Tips de Instructor)
- **Service Quotas:** Por defecto, hay un límite de VPCs por región (normalmente 5). Si necesitas más, debes solicitar un aumento de cuota.
- **Costos de Transferencia:** El tráfico que **entra** a AWS (Ingress) es gratuito. El tráfico que **sale** (Egress) tiene costo. Direct Connect suele ofrecer una tarifa de transferencia de datos más baja que Internet.
- **IA Generativa (Gobernanza):** Aunque no es de red directamente, recuerda que para conectar modelos de IA en una VPC de forma privada (ej. Amazon Bedrock), se utilizan **VPC Endpoints** (Interface Endpoints) para que el tráfico no salga a Internet.
