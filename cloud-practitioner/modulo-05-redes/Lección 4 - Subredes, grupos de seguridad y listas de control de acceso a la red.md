### Resumen General

La seguridad en la red de AWS funciona como una estrategia de "cebolla" (por capas). Mientras que las puertas de enlace controlan el perímetro, dentro de la VPC existen dos filtros críticos: las **Network ACLs (NACL)** que protegen las subredes y los **Security Groups (SG)** que protegen las instancias individuales (como las EC2).

---

### Conceptos Clave

- **Subred Pública:** Tiene una ruta directa a una **Internet Gateway**.
    
- **Subred Privada:** No tiene acceso directo a Internet (suele usarse para bases de datos).
    
- **Network ACL (NACL):**
    
    - Capa de seguridad a nivel de **Subred**.
        
    - Funciona como un "Control de Pasaportes".
        
    - Es **Stateless (Sin estado)**: No recuerda quién entró; debe verificar la lista tanto al entrar como al salir.
        
- **Security Group (SG):**
    
    - Capa de seguridad a nivel de **Instancia** (Host-level).
        
    - Funciona como un "Portero de edificio".
        
    - Es **Stateful (Con estado)**: Si permites que alguien entre, automáticamente se le permite salir (recuerda la conexión).
        

---

### Puntos Críticos para el examen Cloud Practitioner

A continuación, la comparativa técnica que AWS evalúa con mayor frecuencia:

|**Característica**|**Security Group (SG)**|**Network ACL (NACL)**|
|---|---|---|
|**Nivel de protección**|Instancia (EC2)|Subred|
|**Estado (Memory)**|**Stateful** (Con estado)|**Stateless** (Sin estado)|
|**Reglas de Permiso**|Solo reglas de **Permitir** (Allow)|Reglas de **Permitir** y **Denegar** (Allow/Deny)|
|**Orden de reglas**|Se evalúan todas antes de decidir|Se evalúan en orden numérico (de menor a mayor)|
|**Por defecto**|Todo el tráfico entrante está bloqueado|Todo el tráfico está permitido (en la NACL por defecto)|

#### Palabras clave para detectar la respuesta correcta:

- Si el examen dice **"Instancia"** o **"Stateful"** $\rightarrow$ **Security Group**.
    
- Si el examen dice **"Subred"**, **"Stateless"** o **"Permitir y Denegar"** $\rightarrow$ **Network ACL**.
    

---

### Conceptos que suelen confundir en el examen

1. **¿Quién bloquea primero?**
    
    - Al **entrar** a la nube: Primero se verifica la **NACL** (puerta de la subred) y luego el **Security Group** (puerta de la instancia).
        
    - Al **salir**: Primero el **Security Group** y luego la **NACL**.
        
2. **La trampa del "Deny" (Denegar):**
    
    - Los Security Groups **NO** tienen reglas de "Denegar". Si quieres bloquear una dirección IP específica de forma explícita, **debes** usar una **Network ACL**.
        
3. **La naturaleza Stateless de la NACL:**
    
    - Si permites el puerto 80 (HTTP) de entrada en una NACL, también **debes crear manualmente** una regla de salida para que la respuesta pueda volver al usuario. En el Security Group, esto último es automático.
        

---

### Información Adicional Valiosa (Complemento de Examen)

- **Defensa en Profundidad:** Este es un concepto de diseño que AWS evalúa. Significa que no dependes de una sola herramienta, sino de la combinación de NACLs y SGs para maximizar la seguridad.
    
- **Ephemeral Ports (Puertos Efímeros):** Debido a que las NACLs son _stateless_, a menudo necesitas abrir un rango de puertos de salida (generalmente 1024-65535) para que las respuestas lleguen a los clientes. Esto no es necesario en los Security Groups.
    
- **Default SG vs Default NACL:**
    
    - La **NACL por defecto** de una VPC permite **todo** el tráfico de entrada y salida (para no romper nada al inicio).
        
    - El **Security Group por defecto** permite tráfico entrante solo desde otros recursos del mismo grupo y permite todo el tráfico saliente.
        

---
