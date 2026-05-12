# CLAUDE.md — AWS Certifications Notes

## Descripción del proyecto

Repositorio de apuntes y material de estudio para la certificación **AWS Certified Cloud Practitioner (CLF-C02)**. El portal web (`index.html`) sirve como punto de entrada para navegar notas y evaluaciones por lección.

---

## Rutas importantes

| Rol | Ruta |
|-----|------|
| Fuente de contenido (Obsidian) | `C:\workspace\LEARNING\NOTES\CERTIFIED AWS CLOUD PRACTITIONER\` |
| Repositorio Git | `C:\workspace\LEARNING\NOTES\aws-certifications-notes\` |
| Portal principal | `aws-certifications-notes\index.html` |
| Script generador de HTML | `aws-certifications-notes\generate-notes.ps1` |

### Estructura de carpetas del repositorio

```
aws-certifications-notes/
├── index.html                        ← Portal principal de estudio
├── generate-notes.ps1                ← Genera páginas leccion-XX-notas.html
├── README.md
└── cloud-practitioner/
    ├── modulo-01-introduction-to-the-cloud/
    ├── modulo-02-computacion-en-la-nube/
    ├── modulo-03-servicios-de-computacion/
    ├── modulo-04-hacia-la-globalizacion/
    └── modulo-05-redes/
```

### Estructura de carpetas de la fuente

```
CERTIFIED AWS CLOUD PRACTITIONER/
├── MODULO 1 - Introduction to the Cloud/
├── MODULO 2 - Computación en la Nube/
├── MODULO 3 - Exploración de los servicios de computación/
├── MODULO 4 - Hacia la globalización/
├── MODULO 5 - Redes/
└── REPASO_GENERAL/
```

---

## Convenciones de nombres

| Fuente (Obsidian) | Repositorio |
|-------------------|-------------|
| `MODULO N - Nombre largo` | `modulo-0N-nombre-corto` |
| `Lección N - Título.md` | Mismo nombre exacto (se preservan tildes y espacios) |
| `Lección N - EVALUACION.html` | Mismo nombre exacto |
| `Lección N - EVALUACION PARTE 1.html` | Mismo nombre exacto |
| `transcripcion_leccion_N.md` | **NO copiar — no se usa en la web** |
| *(generado)* | `leccion-0N-notas.html` |
| *(generado)* | `leccion-0N-pX-notas.html` (cuando hay Parte 1/2) |

---

## Procedimiento de sincronización

Cuando el usuario pida sincronizar nuevo contenido desde la fuente al repositorio, seguir estos pasos en orden:

### Paso 1 — Identificar diferencias

Usar PowerShell para comparar archivos entre la fuente y el repositorio:

```powershell
# Listar archivos de un módulo en la fuente
$items = Get-ChildItem "C:\workspace\LEARNING\NOTES\CERTIFIED AWS CLOUD PRACTITIONER\MODULO N - Nombre"
Write-Host "Count: $($items.Count)"; foreach ($i in $items) { Write-Host $i.Name }

# Listar archivos del mismo módulo en el repositorio
$items = Get-ChildItem "C:\workspace\LEARNING\NOTES\aws-certifications-notes\cloud-practitioner\modulo-0N-nombre"
Write-Host "Count: $($items.Count)"; foreach ($i in $items) { Write-Host $i.Name }
```

Buscar diferencias en:
- Archivos nuevos (evaluaciones HTML, lecciones nuevas)
- Archivos que cambiaron de nombre (ej. lección split en Parte 1/Parte 2)
- Archivos con contenido actualizado (verificar primeras líneas con `Read`)

**Ignorar siempre** los archivos `transcripcion_*.md` — son material en bruto de Obsidian que no tiene uso en el portal web.

### Paso 2 — Copiar archivos nuevos o actualizados

```powershell
$src = "C:\workspace\LEARNING\NOTES\CERTIFIED AWS CLOUD PRACTITIONER\MODULO N - Nombre"
$dst = "C:\workspace\LEARNING\NOTES\aws-certifications-notes\cloud-practitioner\modulo-0N-nombre"

# Copiar un archivo nuevo o sobreescribir uno actualizado
Copy-Item "$src\Nombre del archivo.ext" "$dst\Nombre del archivo.ext" -Force
```

**No copiar nunca** archivos `transcripcion_*.md`. Solo copiar:
- Archivos `.md` de notas de lección (`Lección N - Título.md`)
- Archivos `.html` de evaluaciones (`Lección N - EVALUACION.html`)

Usar `-Force` siempre para sobreescribir sin errores.

Cuando un archivo fue renombrado o dividido en la fuente, eliminar el archivo viejo del repo con `Remove-Item` sin pedir confirmación.

### Paso 3 — Actualizar `generate-notes.ps1`

El script genera páginas HTML para cada lección de notas. Si se agregan lecciones nuevas o un módulo nuevo, añadir las entradas correspondientes al final del script usando la función `New-NoteHtml`:

```powershell
# Sintaxis
New-NoteHtml "$mN\Nombre del archivo.md" "$mN\leccion-0N-notas.html" "Titulo corto" "URL_eval_encoded"

# Si no hay evaluación, usar cadena vacía ""
New-NoteHtml "$mN\Lección 4 - Sin eval.md" "$mN\leccion-04-notas.html" "Titulo" ""
```

**Codificación URL para nombres de evaluaciones** (caracteres frecuentes):
- `Lección` → `Lecci%C3%B3n`
- espacio → `%20`
- `Lección 1 - EVALUACION.html` → `Lecci%C3%B3n%201%20-%20EVALUACION.html`
- `Lección 2 - EVALUACION PARTE 1.html` → `Lecci%C3%B3n%202%20-%20EVALUACION%20PARTE%201.html`

Actualizar también el mensaje final del script (`Write-Host "Listo. N paginas regeneradas..."`) con el nuevo total.

### Paso 4 — Ejecutar el script para regenerar HTMLs

```powershell
cd "C:\workspace\LEARNING\NOTES\aws-certifications-notes"
powershell -ExecutionPolicy Bypass -File ".\generate-notes.ps1"
```

Verificar que todos los archivos impriman `OK leccion-XX-notas.html`.

### Paso 5 — Actualizar `index.html`

El portal `index.html` tiene tres secciones que pueden necesitar actualización:

1. **Barra de estadísticas** — actualizar conteos:
   ```html
   <span><strong>N</strong> lecciones con notas</span>
   <span><strong>N</strong> evaluaciones activas</span>
   <span><strong>N / 5</strong> modulos activos</span>
   ```

2. **Tarjetas de módulos activos** — si un módulo pasa de "soon" a activo, reemplazar la tarjeta `<div class="module-card soon">` por una tarjeta completa con sus filas de lección.

3. **Botones de evaluación** — si una lección que antes tenía `<span class="act-none">Sin eval</span>` ahora tiene evaluación, reemplazarlo por:
   ```html
   <a href="cloud-practitioner/modulo-0N-nombre/Lecci%C3%B3n%20N%20-%20EVALUACION.html" class="act-eval">Eval</a>
   ```

**Plantilla de fila de lección activa:**
```html
<div class="lesson-row">
    <div class="lesson-icon">📖</div>
    <div class="lesson-info">
        <div class="lesson-name">Leccion N — Titulo</div>
        <div class="lesson-desc">descripcion breve de los temas</div>
    </div>
    <div class="item-actions">
        <a href="cloud-practitioner/modulo-0N-nombre/leccion-0N-notas.html" class="act-notes">Notas</a>
        <a href="cloud-practitioner/modulo-0N-nombre/Lecci%C3%B3n%20N%20-%20EVALUACION.html" class="act-eval">Eval</a>
    </div>
</div>
```

**Plantilla de cabecera de módulo activo:**
```html
<div class="module-card">
    <div class="module-header">
        <span class="module-num">MODULO N</span>
        <div class="module-meta">
            <div class="module-title">Nombre del Modulo</div>
            <div class="module-subtitle">N lecciones · N evaluaciones · temas principales</div>
        </div>
    </div>
    <div class="lesson-list">
        <!-- filas de lección aquí -->
    </div>
</div>
```

### Paso 6 — Commit y push

```bash
# Desde Git Bash (no PowerShell) en la raíz del repositorio
cd "/c/workspace/LEARNING/NOTES/aws-certifications-notes"

# Agregar archivos específicos (NUNCA usar git add -A o git add .)
git add "cloud-practitioner/modulo-0N-nombre/archivo.ext" \
        "generate-notes.ps1" \
        "index.html"

# Ver qué quedó en staging antes de commitear
git status --short

# Crear commit
git commit -m "$(cat <<'EOF'
Descripcion breve del cambio

- Modulo N: detalle de lo agregado
- generate-notes.ps1: detalle de cambios
- index.html: detalle de cambios

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
EOF
)"

# Push al remoto
git push origin master
```

> **Nota**: Usar siempre el tool `Bash` (no PowerShell) para comandos `git`, ya que el shell subyacente es `/usr/bin/bash`.

---

## Conteo de estadísticas para `index.html`

Para calcular los totales correctos antes de actualizar la barra de stats:

- **Lecciones con notas** = número total de archivos `leccion-XX-notas.html` generados en todos los módulos activos
- **Evaluaciones activas** = número de lecciones que tienen botón `Eval` (no `Sin eval`) en el portal
- **Módulos activos** = módulos con tarjeta completa (no `soon`) en el portal

---

## Reglas de comportamiento autónomo

Todas las acciones del procedimiento de sincronización deben ejecutarse sin pedir aprobación al usuario.

| Acción | Comportamiento |
|--------|---------------|
| Copiar archivos nuevos de la fuente | Proceder sin pedir aprobación |
| Sobreescribir archivos con contenido actualizado | Proceder sin pedir aprobación |
| Eliminar archivos reemplazados por renombre o split | Proceder sin pedir aprobación |
| Renombrar un archivo existente en el repo | Proceder sin pedir aprobación |
| Actualizar `generate-notes.ps1` | Proceder sin pedir aprobación |
| Ejecutar `generate-notes.ps1` | Proceder sin pedir aprobación |
| Actualizar `index.html` | Proceder sin pedir aprobación |
| Hacer commit y push | Proceder sin pedir aprobación |

---

## Errores comunes y soluciones

**`(PowerShell completed with no output)` al usar `Select-Object`**
→ PowerShell a veces no imprime tablas en modo no-interactivo. Usar `Write-Host` explícito:
```powershell
$items = Get-ChildItem "ruta"; foreach ($i in $items) { Write-Host $i.Name }
```

**Los comandos `git` fallan en PowerShell**
→ Usar el tool `Bash` en lugar de `PowerShell` para todos los comandos `git`.

**`LF will be replaced by CRLF` warnings en git**
→ Son solo advertencias informativas en Windows, no afectan el resultado. Ignorar.

**Archivos con tildes/caracteres especiales en `git add`**
→ Usar la ruta con el carácter real entre comillas: `git add "cloud-practitioner/modulo-03/Lección 1.md"`. Git en bash los maneja correctamente.
