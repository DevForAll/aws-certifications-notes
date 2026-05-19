# 🎓 Resumen Maestro: Módulos 3 y 4 (Computación y Globalización)
### "Dominando el Cómputo Moderno y la Infraestructura Planetaria de AWS"

## 📝 Resumen Ejecutivo
El éxito en la nube de AWS se basa en dos pilares: **agilidad** (Cómputo) y **alcance** (Globalización). El Módulo 3 enseña cómo pasar de gestionar servidores (EC2) a simplemente ejecutar código (Lambda) o contenedores (Fargate) para eliminar el "trabajo pesado indiferenciado". El Módulo 4 expande este poder globalmente, optimizando la **latencia** y la **alta disponibilidad** mediante Regiones, AZs y Edge Locations. Para el examen, debes saber elegir el servicio que ofrezca la **menor sobrecarga operativa** y el **mejor rendimiento global**.

---

## 💡 Conceptos Clave (Probabilidad de Examen)

### 1. Cómputo Serverless & Contenedores (Módulo 3)
- **AWS Lambda (ALTA):** Ejecuta código basado en **eventos** (S3, DynamoDB). Límite de 15 min. Pago por ejecución.
- **Amazon Fargate (ALTA):** Motor serverless para contenedores. No gestionas instancias EC2 subyacentes.
- **Amazon ECS vs EKS (MEDIA):** ECS es el orquestador nativo (sencillo); EKS es Kubernetes gestionado (estándar de la industria).
- **AWS Elastic Beanstalk (ALTA):** PaaS. Despliegue rápido de apps web (Java, Python, etc.) sin gestionar la infra, pero con control total.

### 2. Infraestructura Especializada (Módulo 3)
- **Amazon Lightsail (MEDIA):** VPS con **precio mensual fijo**. Ideal para blogs/WordPress.
- **AWS Batch (BAJA-MEDIA):** Procesamiento de tareas por lotes a gran escala (Big Data).
- **AWS Outposts (ALTA):** Hardware de AWS en tus instalaciones físicas (**Nube Híbrida**).

### 3. Infraestructura Global (Módulo 4)
- **Zonas de Disponibilidad (AZ) (ALTA):** Uno o más centros de datos. Gatillo: **"High Availability"**.
- **Regiones (ALTA):** Áreas geográficas con 3+ AZs. Gatillo: **"Compliance"** y **"Data Residency"**.
- **Edge Locations (ALTA):** Puntos de presencia para caché. Gatillo: **"CloudFront"** y **"Low Latency"**.

---

## ⚖️ Tabla Comparativa Rápida

| Servicio | Tipo | Gestión | Caso de Uso Ideal |
| :--- | :--- | :--- | :--- |
| **EC2** | IaaS | **Cliente** (Parches/SO) | Apps Legacy, control total. |
| **Lambda** | Serverless | **AWS** (Solo código) | Microservicios, tareas rápidas. |
| **Beanstalk** | PaaS | **Mixta** (Auto-despliegue) | Rapidez de salida al mercado. |
| **Fargate** | Serverless | **AWS** (Contenedores) | Apps modernas en contenedores. |
| **Lightsail** | VPS | **AWS** (Simplificado) | Presupuesto fijo, simplicidad. |
| **Outposts** | Híbrido | **AWS** (HW Local) | Latencia ultra-baja local. |

---

## 🎯 Puntos Críticos (Exam Keywords)
- **"Serverless":** Piensa en Lambda, Fargate o S3. Significa "No administras servidores".
- **"High Availability":** Diseñar arquitectura **Multi-AZ**.
- **"Disaster Recovery":** Diseñar arquitectura **Multi-Región**.
- **"Undifferentiated Heavy Lifting":** Tareas de administración que AWS elimina con servicios gestionados.
- **"Hybrid Cloud":** Palabra clave para **AWS Outposts** o Direct Connect.
- **"Caching":** Gatillo para **Amazon CloudFront** y Edge Locations.

---

## ⚠️ Trampas de Examen (Diferencias Cruciales)
1.  **Lambda vs Batch:** Si la tarea dura más de 15 minutos (ej. renderizado 3D), la respuesta es **Batch**, no Lambda.
2.  **Edge Locations vs AZs:** No puedes lanzar EC2 en una Edge Location; estas solo sirven para caché (CloudFront) o DNS (Route 53).
3.  **Beanstalk vs CloudFormation:** Beanstalk es para **apps web** (código); CloudFormation es para **infraestructura completa** (redes, bases de datos, etc.) usando plantillas.
4.  **Responsabilidad en Outposts:** AWS mantiene el hardware, pero tú eres responsable de la **seguridad física** del rack en tu edificio.
5.  **Route 53 Policies:** No confundas **Latency Routing** (región más rápida) con **Geolocation Routing** (basado en el país del usuario).

---

## 🤖 IA Generativa y Gobernanza (CLF-C02)
- **Amazon Bedrock:** Acceso a modelos de IA (GenAI) vía API. AWS protege el modelo, tú proteges tus datos y prompts.
- **Responsabilidad Compartida en IA:** AWS garantiza la infraestructura y el modelo base; tú garantizas que el uso cumpla con las políticas y que los datos de entrenamiento (si usas fine-tuning) estén seguros.
- **AWS Global Accelerator:** Usa Anycast IPs para dirigir tráfico por la red privada de AWS, ideal para reducir el "lag" en aplicaciones de IA en tiempo real.

---

## 📚 Diccionario de Servicios (Visualización de Distractores)

| Servicio               | Definición Corta                        | Palabra Gatillo (Trigger Word)                    |
| :--------------------- | :-------------------------------------- | :------------------------------------------------ |
| **Amazon CloudFront**  | CDN para entrega rápida de contenido.   | "Cache", "Edge Locations", "Content Delivery".    |
| **Amazon Route 53**    | DNS inteligente y registro de dominios. | "DNS", "Failover", "Routing Policies".            |
| **AWS CloudFormation** | Infraestructura como Código (IaC).      | "Plantillas JSON/YAML", "Replicar infra".         |
| **AWS CDK**            | Define infra usando lenguajes reales.   | "Python/TypeScript", "Sintetizar", "Código real". |
| **Amazon Wavelength**  | Cómputo para redes móviles.             | "5G", "Móvil", "Baja latencia telco".             |
| **AWS Local Zones**    | Acerca el cómputo a grandes ciudades.   | "Latencia de un dígito", "Cerca del usuario".     |
| **Amazon S3**          | Almacenamiento de objetos.              | "Durabilidad", "Estático", "Escalado infinito".   |

---
**Nota Final:** Para los Módulos 3 y 4, la clave es entender que AWS busca quitarte el trabajo aburrido (parchar, cablear, escalar) para que tú solo te enfoques en el valor de negocio. Si una opción menciona "gestión manual", casi nunca es la respuesta correcta en escenarios de modernización.


El modelo no realiza la acción cuando se le indica "selecciona el botón naranja" o "dale click al botón siguiente" estando en una pantalla de donde están preguntas pero lo relaciona a música y me hablan indicandome "siguiente musica" o "sube el volumen". Te comparto los logs 
```

[Wake word] Escuchando 'Jarvis'...
[Contexto] ventana='AWS CLF-C02: Simulador Módulos 3 y 4 - Google Chrome'  proceso='chrome.exe'
[Voz] Jarvis activo — decí el comando...
[Transcripción] Presiona el botón naranja siguiente.
[Intent] siguiente_cancion  entidades={}
[Tool] Siguiente canción.

[Wake word] Escuchando 'Jarvis'...
[Contexto] ventana='AWS CLF-C02: Simulador Módulos 3 y 4 - Google Chrome'  proceso='chrome.exe'
[Voz] Jarvis activo — decí el comando...
[Transcripción] Dale en el botón naranja.
[Intent] Sin match de regex → consultando LLM...
[Intent] click_elemento  entidades={'element': 'botón naranja'}
[Tool] No encontré 'botón naranja' en pantalla.

[Wake word] Escuchando 'Jarvis'...
[Contexto] ventana='AWS CLF-C02: Simulador Módulos 3 y 4 - Google Chrome'  proceso='chrome.exe'
[Voz] Jarvis activo — decí el comando...
[Transcripción] Sube el volumen. Abre. Cierra Google. Pon música. Abre. Cierra Google. Pon música. Abre. Cierra Google. Pon música. Abre. Cierra Google. Pon música. Abre. Cierra Google. Pon música. Abre. Cierra Google. Pon música. Abre. Cierra Google. Pon música. Abre. Cierra Google. Pon música. Abre. Cierra Google. Pon música. Abre. Cierra Google. Pon música. Abre. Cierra Google. Pon música.
[Intent] subir_volumen  entidades={}
[Tool] Volumen subido.

[Wake word] Escuchando 'Jarvis'...
[Contexto] ventana='AWS CLF-C02: Simulador Módulos 3 y 4 - Google Chrome'  proceso='chrome.exe'
[Voz] Jarvis activo — decí el comando...
[Transcripción] Siguiente pestaña. Abre. Sube el volumen. Abre. Sube el volumen. Abre. Sube el volumen. Abre. Sube el volumen. Abre. Sube el volumen. Abre. Sube el volumen. Abre. Sube el volumen. Abre. Sube el volumen. Abre. Sube el volumen. Abre. Sube el volumen. Abre. Sube el volumen. Abre. Sube el volumen. Abre. Sube el volumen. Abre. Sube el volumen. Abre. Sube el volumen. Abre.
[Intent] subir_volumen  entidades={}
[Tool] Volumen subido.

[Wake word] Escuchando 'Jarvis'...
[Contexto] ventana='AWS CLF-C02: Simulador Módulos 3 y 4 - Google Chrome'  proceso='chrome.exe'
[Voz] Jarvis activo — decí el comando...
[Transcripción] Selecciona el botón naranja.
[Intent] Sin match de regex → consultando LLM...
[Intent] click_elemento  entidades={'element': 'botón naranja'}
[Tool] No encontré 'botón naranja' en pantalla.

[Wake word] Escuchando 'Jarvis'...
[Contexto] ventana='AWS CLF-C02: Simulador Módulos 3 y 4 - Google Chrome'  proceso='chrome.exe'
[Voz] Jarvis activo — decí el comando...
[Transcripción] Selecciona el botón naranja.
[Intent] Sin match de regex → consultando LLM...
[Intent] click_elemento  entidades={'element': 'botón naranja'}
[Tool] No encontré 'botón naranja' en pantalla.

```


también le indique que "selecciona la opción AWS ORGANIZATIONS" pero me dijo que no entendio
![[Pasted image 20260516232843.png]]


