# [Módulo 5 - Lección 1] Introducción a las Redes en AWS

## Resumen Ejecutivo
La red en AWS es el tejido conectivo que permite la comunicación entre recursos. A diferencia de las redes físicas tradicionales, AWS utiliza **Redes Definidas por Software (SDN)**. El corazón de esta infraestructura es **Amazon VPC**, que permite crear un centro de datos virtual aislado lógicamente en la nube. La estrategia principal es el **Aislamiento y la Segmentación**: no todo debe estar expuesto a Internet; la seguridad se basa en colocar los recursos en el "compartimento" adecuado según su función.

---
## Conceptos Clave (Probabilidad en Examen: 🔴 Alta)

### 1. Amazon VPC (Virtual Private Cloud)
- **Definición:** Red virtual dedicada a tu cuenta. Aislada lógicamente de otros clientes.
- **Alcance:** **REGIONAL**. No cruza regiones (ej. una VPC en N. Virginia no puede tener recursos en Irlanda directamente sin peering).
- **Control:** El usuario define rangos de IP (CIDR), subredes y tablas de ruteo.

### 2. Subredes (Subnets)
Rangos de direcciones IP dentro de la VPC. Se usan para organizar recursos.
- **Subred Pública:** Tiene una ruta a una **Internet Gateway**. Se usa para recursos que interactúan con el público (Servidores Web, Balanceadores de Carga).
- **Subred Privada:** No tiene ruta directa a Internet. Se usa para datos sensibles (Bases de datos, Lógica de aplicación interna).
- **Alcance:** **Zona de Disponibilidad (AZ)**. Cada subred reside en UNA sola AZ.

### 3. Puerta de Enlace de Internet (Internet Gateway - IGW)
- **Función:** El "puente" entre la VPC e Internet.
- **Relevancia:** Es un componente escalable y de alta disponibilidad. Sin una IGW, una VPC es un "búnker" sin salida.

---
## Tabla Comparativa: Subred Pública vs. Subred Privada

| Característica        | Subred Pública                   | Subred Privada            |
| :-------------------- | :------------------------------- | :------------------------ |
| **Acceso a Internet** | Directo (vía Internet Gateway)   | Indirecto o Ninguno       |
| **Recursos Típicos**  | Servidores Web (Cajeros)         | Bases de Datos (Baristas) |
| **Seguridad**         | Mayor exposición                 | Máximo aislamiento        |
| **Requerimiento**     | Debe tener tabla de ruteo al IGW | No tiene ruta al IGW      |

---
## Puntos Críticos (Keywords para el Examen)
- **"Lógicamente Aislada":** Keyword principal para identificar Amazon VPC.
- **"Regional":** Una VPC pertenece a una Región, pero sus subredes se distribuyen en múltiples Zonas de Disponibilidad (AZ) para Alta Disponibilidad.
- **"Software-Defined Networking":** AWS gestiona el hardware, tú gestionas la configuración lógica.
- **Modelo de Responsabilidad Compartida (Redes):**
    - **AWS:** Seguridad **DE** la red (infraestructura física, cables, routers físicos, aislamiento entre clientes).
    - **Cliente:** Seguridad **EN** la red (configuración de VPC, subredes, firewalls - SG/NACL, tablas de ruteo).

---
## Trampas de Examen (Cuidado con esto)
1. **Confundir VPC con Global:** Las VPC son **Regionales**. Si una pregunta menciona recursos en múltiples regiones comunicándose "nativamente" sin configuración extra, es falso.
2. **IGW por defecto:** Una VPC nueva NO tiene una Internet Gateway por defecto. Debes crearla y adjuntarla.
3. **Subred en múltiples AZ:** Una subred **NO** puede cruzar múltiples AZ. Si quieres alta disponibilidad, creas subredes en diferentes AZs.

---
## Diccionario de Servicios AWS (Visualización de Distractores)

| Servicio                    | Definición Corta                        | Palabras Gatillo (Keywords)                              |
| :-------------------------- | :-------------------------------------- | :------------------------------------------------------- |
| **Amazon VPC**              | Red virtual privada en la nube.         | Aislamiento lógico, Regional, SDN.                       |
| **Subnet**                  | Subdivisión de una VPC.                 | AZ-specific, Organización, Pública/Privada.              |
| **Internet Gateway**        | Conexión a la internet pública.         | Entrada/Salida Internet, Público.                        |
| **Virtual Private Gateway** | Conexión VPN a red on-premise.          | VPN, Cifrado, On-premises.                               |
| **Direct Connect**          | Conexión física dedicada (no internet). | Fibra óptica, Línea dedicada, Baja latencia, Costo alto. |
| **Security Group**          | Firewall a nivel de **Instancia**.      | Stateful (Con estado), Nivel de recurso.                 |
| **Network ACL**             | Firewall a nivel de **Subred**.         | Stateless (Sin estado), Nivel de red, Primera línea.     |
| **Route 53**                | Servicio de DNS de AWS.                 | Nombres de dominio, Health checks, Registro.             |
| **CloudFront**              | Red de entrega de contenido (CDN).      | Ubicaciones periféricas (Edge), Latencia, Caché.         |

---
*Nota de Instructor: En el examen CLF-C02, recuerda que la VPC es el fundamento. Si la pregunta menciona "aislamiento", "entorno propio" o "segmentación de red", piensa inmediatamente en VPC.*
