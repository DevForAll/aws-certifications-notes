## Resumen General

Este módulo profundiza en **Amazon VPC** como el bloque fundamental de red. Se centra en cómo segmentar esta red mediante **subredes** y, lo más importante para el examen, cómo conectar esta red privada con el mundo exterior (Internet) o con infraestructuras locales (On-premises) de forma segura.

---

## Lista de Conceptos Clave

### 🔴 Amazon VPC (Virtual Private Cloud) - PRIORIDAD: MUY ALTA

- **Definición:** Es tu propia red privada lógica dentro de AWS.
    
- **Propósito:** Permite definir un rango de direcciones IP privadas para identificar tus recursos (EC2, RDS, ELB).
    
- **Beneficios:** Aumenta la seguridad, ahorra tiempo en configuración comparado con redes físicas y ofrece un entorno de control total.
    

### 🔴 Subredes (Subnets) - PRIORIDAD: ALTA

- **Definición:** Fragmentos o subdivisiones de rangos de direcciones IP dentro de una VPC para agrupar recursos.
    
- **Tipos:**
    
    - **Pública:** Recursos accesibles desde Internet (ej. sitio web, balanceador de carga).
        
    - **Privada:** Recursos protegidos que no requieren acceso directo desde Internet (ej. bases de datos, aplicaciones de RRHH).
        

### 🔴 Internet Gateway (IGW) - PRIORIDAD: ALTA

- **Definición:** Componente de la VPC que permite el flujo de tráfico entre la VPC e Internet.
    
- **Analogía del examen:** La "puerta principal" de una cafetería que permite que los clientes entren y salgan. Sin ella, nadie puede alcanzar los recursos de la VPC desde el exterior.
    

### 🔴 Virtual Private Gateway (VPG) y VPN - PRIORIDAD: ALTA

- **Definición:** Puerta de enlace que permite crear una conexión **VPN cifrada** entre tu red local (on-premises) y tu VPC de AWS.
    
- **Característica clave:** El tráfico viaja a través de la **Internet pública**, por lo que puede haber congestión o variaciones en el rendimiento.
    

### 🔴 AWS Direct Connect - PRIORIDAD: MUY ALTA

- **Definición:** Conexión de **fibra dedicada completamente privada** desde un centro de datos local a AWS.
    
- **Diferenciador para el examen:** Utiliza un **cable físico** (no pasa por la Internet pública).
    
- **Beneficios:** Rendimiento alto y constante, mayor seguridad y ayuda a cumplir con normativas regulatorias que prohíben el uso de Internet para ciertos datos.
    

---

## Puntos críticos para el examen Cloud Practitioner

1. **VPN vs. Direct Connect:** Esta es una pregunta fija.
    
    - Si piden **"bajo costo, configuración rápida, usa Internet"**: es **VPN** (vía Virtual Private Gateway).
        
    - Si piden **"rendimiento consistente, conexión física dedicada, máxima seguridad/cumplimiento"**: es **AWS Direct Connect**.
        
2. **Responsabilidad del Cliente:** El cliente es quien define el rango de IPs y decide qué subred es pública o privada.
    
3. **Seguridad:** Las subredes privadas son el lugar estándar para bases de datos según las mejores prácticas de AWS.
    

---

## Conceptos que suelen confundir en el examen

|**Término**|**Lo que el estudiante cree**|**La realidad para el examen**|
|---|---|---|
|**VPC**|Que es un servicio de almacenamiento.|Es un servicio de **RED** (Networking).|
|**Direct Connect**|Que es una conexión inalámbrica rápida.|Es una conexión **FÍSICA (Cable)** de fibra óptica dedicada.|
|**Internet Gateway**|Que protege contra virus.|No es un antivirus; es solo la "puerta" que permite o deniega la conectividad con la red mundial.|
|**VPN**|Que es la única forma de conectar tu oficina.|Es una forma rápida de conectar tu oficina, pero comparte el ancho de banda con otros usuarios de Internet.|

---

## 💡 Información adicional valiosa (Complemento de instructor)

- **Puntos de presencia de Direct Connect:** En el examen CLF-C02, a veces mencionan que para usar Direct Connect debes estar en una ubicación física de un "socio de AWS". Esto confirma que no es algo que activas con un solo clic como la VPN; requiere logística física.
    
- **Costo de Transferencia:** Recuerda que AWS suele cobrar por los datos que **salen** (egress) de la VPC hacia Internet, pero Direct Connect puede reducir estos costos de transferencia en comparación con Internet estándar para grandes volúmenes de datos.
    
- **VPC Peering:** (Muy común en examen) Si la pregunta menciona conectar **dos VPCs entre sí** de forma privada, la respuesta es **VPC Peering**.
    

---

