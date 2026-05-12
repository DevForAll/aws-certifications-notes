## 📝 Resumen Ejecutivo
Elegir la región correcta es la decisión técnica y de negocio más importante al iniciar en AWS. El valor de negocio radica en equilibrar el **cumplimiento legal**, la **experiencia de usuario (latencia)**, la **economía (costos)** y la **capacidad técnica**. AWS otorga al cliente control total sobre la ubicación de sus datos, lo que es fundamental para la soberanía de la información.

---

## 💡 Conceptos Clave (High Probability)

### 1. Los 4 Pilares de Selección (Memorización Obligatoria)
1. **Cumplimiento (Compliance):** Es el factor determinante. Si existen leyes de soberanía de datos (ej. RGPD en Europa), la región debe elegirse para cumplir con ellas.
2. **Latencia (Proximidad):** Elegir la región más cercana a los usuarios finales para reducir el retraso en la red.
3. **Costo:** Los precios de AWS varían por región debido a impuestos y costos de operación locales.
4. **Disponibilidad de servicios:** Algunos servicios nuevos o especializados no están en todas las regiones desde el día 1.
![[Pasted image 20260510234350.png]]

### 2. Aislamiento y Soberanía
- **Independencia:** Cada región está diseñada para estar aislada de las demás para evitar fallas en cascada.
- **Control del Cliente:** AWS **NUNCA** mueve tus datos entre regiones por su cuenta. Tú eres el único responsable de la ubicación y transferencia de tus datos.

---

## 📊 Tabla Comparativa: Criterios de Selección

| Criterio | Prioridad | Gatillo de Examen (Keyword) |
| :--- | :--- | :--- |
| **Cumplimiento** | Máxima | "Leyes", "Regulaciones", "Gobierno", "Soberanía". |
| **Latencia** | Alta | "Velocidad de respuesta", "Cercanía", "UX". |
| **Costo** | Media | "Presupuesto", "TCO", "Región más económica". |
| **Servicios** | Media | "Servicio específico", "Nuevas funcionalidades". |

---

## 🎯 Puntos Críticos para el Examen (Keywords)
- **"Data Residency" / "Sovereignty":** Relacionado directamente con **Cumplimiento**.
- **"User Experience":** Relacionado con **Latencia/Proximidad**.
- **"Customer-selected":** AWS enfatiza que el cliente elige la región, no AWS.
- **"us-east-1" (N. Virginia):** Región histórica donde suelen aparecer primero los servicios.

---

## ⚠️ Trampas de Examen (Distractores)
- **¿Mismo precio en todas partes?:** No. Un error común es creer que AWS cuesta lo mismo globalmente.
- **¿AWS mueve mis datos?:** No. Si el examen dice que AWS replica tus datos a otra región por "seguridad" automáticamente, es **FALSO** (a menos que tú lo configures).
- **AWS GovCloud:** Si mencionan "Agencias Federales de EE.UU." o "ITAR/FedRAMP High", la respuesta es **GovCloud**.

---

## 📖 Diccionario de Servicios AWS (Visualización de Distractores)

| Servicio | Definición Corta | Palabras Gatillo (Keywords) |
| :--- | :--- | :--- |
| **AWS GovCloud** | Regiones aisladas para el gobierno de EE.UU. | Government, Compliance, ITAR. |
| **AWS Local Zones** | Acerca la computación a grandes centros poblados. | Single-digit latency, Localized. |
| **AWS Wavelength** | Servicios de AWS en redes 5G. | 5G, Mobile Edge, Ultra-low latency. |

---

## 🤖 Conexión con IA Generativa y Responsabilidad Compartida
- **IA Generativa (Amazon Bedrock):** Al usar modelos de IA, la elección de la región es crítica. Debes asegurarte de que la región elegida soporte **Amazon Bedrock** y que los datos de entrenamiento cumplan con las leyes de **Soberanía de Datos**.
- **Modelo de Responsabilidad Compartida:** 
    - **AWS es responsable de:** El aislamiento físico y lógico entre regiones (Seguridad **DE** la nube).
    - **El Cliente es responsable de:** La selección de la región que cumpla con sus requisitos legales y la gestión de la transferencia de datos entre ellas (Seguridad **EN** la nube).

> **Nota del Instructor:** Recuerda que la latencia es "tiempo de viaje", no "ancho de banda". El examen se enfoca en la velocidad de respuesta para el usuario final.