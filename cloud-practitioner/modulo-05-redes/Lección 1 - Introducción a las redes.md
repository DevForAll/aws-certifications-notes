## Resumen General

En AWS, la red no es un conjunto de cables físicos, sino una **red definida por software**. El servicio principal es **Amazon VPC**, que permite crear un entorno privado y aislado dentro de la nube de AWS. La analogía de la cafetería nos enseña que no todos los recursos deben ser visibles; algunos (como los cajeros) deben ser públicos para recibir clientes, mientras que otros (como los baristas/bases de datos) deben ser privados para seguridad y eficiencia.

---

## Conceptos Clave (Priorizados por probabilidad en el examen)

### 🔴 PRIORIDAD ALTA: Amazon VPC (Virtual Private Cloud)

- **Definición:** Es una red virtual dedicada a tu cuenta de AWS. Está aislada lógicamente de otras redes virtuales en la nube de AWS.
    
- **Alcance:** Una VPC reside dentro de una **Región** específica.
    
- **Función:** Te da control total sobre tu entorno de red, incluyendo la selección de rangos de direcciones IP, creación de subredes y configuración de tablas de enrutamiento.
    

### 🔴 PRIORIDAD ALTA: Subredes (Subnets)

Las subredes son secciones o sub-divisiones dentro de una VPC que permiten agrupar recursos según sus necesidades de seguridad:

- **Subred Pública:** Tiene acceso directo a Internet a través de una **Internet Gateway**.
    
    - _Ejemplo examen:_ Servidores web o "cajeros" de la cafetería.
        
- **Subred Privada:** No tiene acceso directo a la Internet pública. Se utiliza para recursos que deben estar protegidos.
    
    - _Ejemplo examen:_ Bases de datos o los "baristas" que procesan pedidos.
        

### 🟡 PRIORIDAD MEDIA: Puerta de enlace de Internet (Internet Gateway)

- **Función:** Es el componente que permite la comunicación entre los recursos de tu VPC y la Internet pública. Sin ella, una subred no puede ser "pública".
    

---

## Puntos críticos para el examen Cloud Practitioner

1. **Aislamiento Lógico:** Recuerda que la palabra clave de una VPC es **"lógicamente aislada"**. Aunque compartes hardware físico con otros clientes, tu red es privada.
    
2. **VPC vs. Región:** Una VPC no puede cruzar fronteras de Regiones, pero sí puede tener subredes en diferentes **Zonas de Disponibilidad (AZ)** dentro de esa misma región para mayor redundancia.
    
3. **Seguridad por niveles:** El examen evaluará si comprendes que los datos sensibles (como información de clientes o bases de datos) siempre deben ir en una **subred privada**.
    

---

## Conceptos que suelen confundir en el examen

|**Concepto**|**Lo que el estudiante suele confundir**|**La realidad para el examen**|
|---|---|---|
|**VPC vs. Internet Gateway**|Cree que la VPC da internet por sí sola.|La VPC es el "espacio". La **Internet Gateway** es la "puerta" hacia afuera.|
|**Subred Pública vs. Privada**|Cree que una subred privada no puede hablar con nada.|Puede hablar con otros recursos dentro de la misma VPC, pero no con la Internet pública directamente.|
|**VPC vs. On-premises**|Cree que configurar una VPC es igual de lento que una red física.|Una VPC se aprovisiona en segundos mediante software (API), a diferencia de comprar routers físicos.|

---

## 💡 Información adicional valiosa (Complemento de instructor)

Para complementar lo visto en la transcripción, el examen CLF-C02 suele preguntar por estos dos componentes de seguridad que verás más adelante:

- **Security Groups (Grupos de Seguridad):** Actúan como un firewall virtual para tus **instancias** (nivel de recurso). Controlan quién entra y sale de una instancia EC2 específica.
    
- **Network ACL (NACL):** Actúan como un firewall para la **subred** completa (nivel de red). Es la primera línea de defensa antes de entrar a la subred.
    
- **Peering de VPC:** Si tienes dos VPCs y quieres que se comuniquen de forma privada, usas una conexión de "Peering".
    
