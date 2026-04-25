## [Lección 1: Introducción a AWS Cloud Practitioner Essentials]

### **Resumen Ejecutivo**
AWS nació de la necesidad de Amazon.com de estandarizar su infraestructura interna para manejar el crecimiento masivo a principios de los 2000. Lo que comenzó como herramientas de eficiencia interna evolucionó en 2006 en una plataforma pública que permite a cualquier empresa "alquilar" recursos de TI. La computación en la nube se define formalmente como la **entrega bajo demanda de potencia de cómputo, bases de datos, almacenamiento y otros recursos de TI a través de Internet con un modelo de precios de pago por uso.**

---

### **Conceptos Clave**

*   **Modelo Cliente-Servidor (Medium):** Arquitectura básica donde un *cliente* (usuario/navegador) solicita un servicio y un *servidor* (instancia EC2) valida y responde. 
*   **Entrega Bajo Demanda (High):** Los recursos están disponibles exactamente cuando se necesitan. No hay que esperar semanas por hardware físico; se **aprovisionan** en minutos.
*   **Aprovisionamiento (Low):** El proceso de asignar y poner a disposición recursos de TI para su uso inmediato.
*   **Pago por Uso (Pay-as-you-go) (High):** Modelo financiero donde se eliminan los gastos de capital (CapEx) iniciales por gastos variables (OpEx). Solo pagas por lo que consumes y dejas de pagar al **desaprovisionar**.
*   **Infraestructura Global (Medium):** AWS atiende a más de **1,000,000 de clientes** activos y ofrece una plataforma con más de **300 servicios** integrados.
*   **Centros de Datos (Medium):** Edificios diseñados para albergar los servidores y servicios de AWS. Cuentan con sistemas redundantes de energía, refrigeración y alta seguridad para garantizar la continuidad.
*   **Administración Remota (Low):** La gestión a través de un navegador web permite administrar la infraestructura desde cualquier lugar del mundo con conexión a Internet.
*   **Tipos de Implementación (High):**
    *   **Nube (Cloud-based):** Todo se ejecuta en la nube. Ideal para startups o nuevas aplicaciones.
    *   **On-premises (Private Cloud):** Recursos desplegados localmente usando virtualización. Se busca por latencia o seguridad estricta, pero carece de la elasticidad total de AWS.
    *   **Híbrida:** Conecta infraestructura local con recursos de la nube. Común en migraciones o empresas con requisitos regulatorios específicos.

---

### **Puntos Críticos (Keywords del Examen)**

*   **Elasticidad:** Capacidad de ajustar los recursos (subir o bajar) automáticamente según la demanda real.
*   **Agilidad:** Reducción drástica del tiempo necesario para disponer de recursos de TI para los desarrolladores (de semanas a minutos).
*   **Economías de Escala:** AWS puede lograr precios más bajos debido a que la agregación de miles de clientes permite comprar hardware a menor costo.
*   **Eliminación de "Guessing Capacity":** Ya no es necesario predecir cuántos servidores necesitarás para el próximo año; escala según sea necesario.
*   **Despliegue Global en Minutos:** Capacidad de lanzar aplicaciones en múltiples regiones del mundo con unos pocos clics.

---

### **Trampas de Examen**

*   **¿Híbrido o Multinube?:** AWS considera las implementaciones multinube (usar AWS y Azure, por ejemplo) como un tipo de estrategia **híbrida**.
*   **Bajo Demanda vs. Reservado:** No confundas la "entrega bajo demanda" (disponibilidad inmediata) con el "modelo de precios bajo demanda" (precio estándar sin compromiso).
*   **On-premises vs. AWS:** En el examen, "On-premises" suele ser el escenario de "dolor" (costos fijos, mantenimiento manual, desperdicio de recursos) frente a la solución de AWS.
*   **Infraestructura como Servicio (IaaS):** Aunque la lección no lo nombra directamente, EC2 y S3 son ejemplos fundamentales de IaaS que el examen espera que reconozcas como la base del cloud computing.
