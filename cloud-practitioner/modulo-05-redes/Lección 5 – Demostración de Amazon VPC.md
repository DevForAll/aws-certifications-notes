### Resumen General

Una VPC (Virtual Private Cloud) es tu red aislada en la nube. Para que funcione, necesita una estructura jerárquica: la **VPC** contiene **Subredes**, las subredes se reparten en **Zonas de Disponibilidad (AZ)** para ser resilientes, y las **Tablas de Enrutamiento** junto con la **Internet Gateway** dictan quién tiene permiso de salir al mundo exterior.

---

### Conceptos Clave (Prioridad Alta)

- **Bloque CIDR (Rango de IPs):**
    
    - Es el rango de direcciones IP de tu red.
        
    - **Dato de examen:** El tamaño se define con un prefijo (ej. `/16` para redes grandes, `/28` para redes pequeñas). AWS soporta desde `/16` hasta `/28`. Recuerda que el bloque CIDR define el tamaño de tu red.
	
	- **En AWS:** Se ve como `10.0.0.0/16`. El número después de la barra (`/`) indica qué tan grande es el rango.
	    
	    - Un número pequeño (como `/16`) = **Muchos apartamentos** (65,536 IPs).
	    - Un número grande (como `/28`) = **Pocos apartamentos** (16 IPs).
	
	- **Ejemplo:** Imagina que compras un edificio de apartamentos y decides que los números de puerta irán del **101 al 199**. Ese rango (del 101 al 199) es tu **Bloque CIDR**.
        
- **Subredes (Subnets):**
    
    - **Pública:** Tiene acceso a Internet.
        
    - **Privada:** No tiene acceso directo a Internet (ideal para bases de datos).
        
    - **Alta Disponibilidad:** Se logra creando subredes en **al menos dos Zonas de Disponibilidad (AZ)** distintas dentro de la misma Región.
        
- **Internet Gateway (IGW):**
    
    - Es el "módem" o puerta física que conecta tu VPC con Internet. Sin esto, nada es público.
        
- **Tablas de Enrutamiento (Route Tables):**
    
    - Contienen las reglas (rutas) que dicen a dónde debe ir el tráfico.
        
    - **Ruta Local:** Siempre existe y permite que los recursos dentro de la misma VPC se hablen entre sí. No se puede borrar.
        
    - **Ruta a Internet (0.0.0.0/0):** Es la regla que apunta hacia la _Internet Gateway_.
        

---

### Puntos Críticos para el examen Cloud Practitioner

Para que una subred sea realmente **PÚBLICA**, el examen buscará que menciones estos 3 requisitos (si falta uno, es privada):

1. Tener una **Internet Gateway (IGW)** conectada a la VPC.
    
2. Tener una **Tabla de Enrutamiento** con una ruta hacia la IGW (usando `0.0.0.0/0`).
    
3. Tener activada la **Asignación automática de IP pública** para los recursos que lances en ella.
    

---

### Conceptos que suelen confundir en el examen

- **"¿El nombre hace a la subred?":** No. Puedes llamar a una subred "Super-Public-Subnet", pero si no tiene una ruta a una Internet Gateway, sigue siendo una **subred privada**. El nombre es solo una etiqueta (_Tag_).
    
- **VPC vs. Subred:** La VPC es el contenedor regional. La subred reside **dentro de una sola** Zona de Disponibilidad (AZ). No puedes tener una subred que "viva" en dos AZs al mismo tiempo.
    
- **IP Pública vs. Privada:**
    
    - Todos los recursos en una VPC reciben una **IP Privada** automáticamente.
        
    - Solo los recursos que necesitan hablar con Internet (y están en subredes públicas) deben recibir una **IP Pública**.
        

---

### Información Adicional Valiosa (Complemento de Examen)

- **Reserva de IPs de AWS:** AWS reserva **5 direcciones IP** en cada subred para propósitos internos (la .0, .1, .2, .3 y la última de la red). Si creas una subred muy pequeña, ten esto en cuenta.
	- **¿Qué es?** En cada subred que creas, AWS se queda con **5 direcciones IP** para uso propio (administración de la red). No las puedes usar para tus servidores.
	    
	- **Ejemplo:** Si creas una subred con 16 IPs (un `/28`), realmente solo podrás usar **11**, porque AWS "se apropia" de 5 para que la red funcione (el portero, el administrador, el técnico, etc.).
	    
	- **Para el examen:** Siempre son **5 IPs reservadas** por subred.
    
- **Alta Disponibilidad (HA):** Si una pregunta dice "¿Cómo garantizas que tu aplicación siga funcionando si una zona de disponibilidad falla?", la respuesta siempre es: **"Desplegar en múltiples subredes en diferentes Zonas de Disponibilidad"**.
    
- **IPv6:** Aunque el examen se centra en IPv4, recuerda que AWS también soporta IPv6 si se habilita en el bloque CIDR.
	- **IPv4 (El viejo estándar):** Son direcciones como `192.168.1.1`. Se están agotando en el mundo porque hay demasiados dispositivos.
	    
	- **IPv6 (El nuevo estándar):** Son mucho más largas y complejas, como `2001:0db8:85a3:0000:0000:8a2e:0370:7334`.
	    
	- **Dato Clave:** IPv6 se creó porque el mundo se quedó sin direcciones IPv4. AWS soporta ambos, pero para el examen Cloud Practitioner, lo más importante es saber que **IPv6 es opcional** y ayuda a manejar la escala masiva de dispositivos en Internet.
    

---

## Guía de Configuración: "Haciendo una Subred Pública"

Para el examen, es vital saber que **el nombre "Pública" no le da acceso a Internet**. En la demostración, seguimos estos pasos obligatorios:

1. **Crear la VPC:** Definir el bloque CIDR (ej. `10.0.0.0/16`).
    
2. **Crear la Subred:** Dividir el bloque CIDR en trozos más pequeños (ej. `10.0.1.0/24`).
    
3. **Asignar IP Pública:** Habilitar en la configuración de la subred la "Asignación automática de IP pública".
    
4. **Crear e Instalar la Internet Gateway (IGW):** Se crea el recurso y se "adjunta" (attach) a la VPC.
    
5. **Configurar la Tabla de Enrutamiento (Route Table):**
    
    - Crear una tabla nueva.
        
    - Agregar una ruta: Destino `0.0.0.0/0` (esto significa "todo el tráfico de Internet") $\rightarrow$ Target: **Internet Gateway**.
        
6. **Asociar la Subred:** Vincular la subred específica con esa Tabla de Enrutamiento.

---
### ¡Momento de Prueba! (Simulador de Examen)

Basándome en **todo** lo que me has compartido hasta ahora (Conectividad, Seguridad y Configuración de VPC), aquí tienes 3 preguntas nivel examen oficial:

**Pregunta 1:** Un administrador de red desea conectar una oficina local (on-premises) a AWS de forma rápida a través de un túnel cifrado usando la conexión a Internet existente. ¿Qué servicio debería utilizar? 
A) AWS Direct Connect 
B) AWS Site-to-Site VPN 
C) Amazon CloudFront 
D) AWS Gateway Load Balancer

**Respuesta B (AWS Site-to-Site VPN)**

- _Explicación:_ La clave es "rápida" y "conexión a Internet existente". Direct Connect (A) requiere instalar cables físicos, lo cual tarda semanas.



**Pregunta 2:** ¿Cuál es la principal diferencia entre un Grupo de Seguridad (Security Group) y una ACL de Red (NACL)? 
A) Los Security Groups operan a nivel de subred, mientras que las NACLs operan a nivel de instancia. 
B) Los Security Groups son "stateless" (sin estado), mientras que las NACLs son "stateful" (con estado). 
C) Los Security Groups son "stateful" (con estado), mientras que las NACLs son "stateless" (sin estado). 
D) Las NACLs solo permiten tráfico, no pueden denegarlo explícitamente.

**Respuesta C (SGs son Stateful, NACLs son Stateless)**

- _Explicación:_ Esta es la definición técnica que AWS pregunta siempre. Los Security Groups recuerdan el tráfico (Stateful), las NACLs no (Stateless).
    


**Pregunta 3:** Se lanza una instancia EC2 en una subred. La instancia tiene una IP pública asignada y el Grupo de Seguridad permite el tráfico web. Sin embargo, la instancia no puede acceder a Internet. ¿Cuál es la causa más probable? 
A) La instancia no tiene una dirección IPv6. 
B) La tabla de enrutamiento de la subred no tiene una ruta hacia una Internet Gateway. 
C) El usuario no tiene permisos de IAM para navegar por la web. 
D) La instancia debe estar en una subred privada para acceder a Internet.

**Respuesta B (Falta ruta hacia Internet Gateway)**

- _Explicación:_ Aunque tengas IP pública y el portero (Security Group) te deje pasar, si no hay una "carretera" (Ruta) que lleve a la "puerta de la calle" (Internet Gateway), el paquete no sabe a dónde ir.