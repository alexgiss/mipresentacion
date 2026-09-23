# Alexis Juvencio Gómez Yoza — Portfolio / Currículum

Página personal hecha con **React + Vite + Tailwind CSS**, con el mismo diseño de la referencia
original (fondo oscuro slate + acentos cyan), reenfocada como presentación profesional:
perfil, experiencia, logros, tecnologías, educación e idiomas.

## Ejecutar

```bash
npm install
npm run dev      # http://127.0.0.1:5173
```

Build y vista de producción:

```bash
npm run build                    # genera dist/
npm run preview -- --port 4173   # http://127.0.0.1:4173
```

## Secciones

| Sección | Contenido |
|---|---|
| Inicio | Foto, nombre, cargo, datos de contacto, tecnologías y tarjeta `developer.ts` |
| Sobre mí | Perfil profesional + métricas (4 años, +25%, 99,9%, 85%) + 4 áreas |
| Experiencia | Línea de tiempo con los 3 puestos + resultados destacados |
| Tecnologías | Especialidades, lenguajes, frameworks, datos/cloud/devops e IA |
| Educación | Título, idiomas y acceso al currículum |
| Contacto | Email, teléfono y LinkedIn |

## Currículum

**`public/cv.html`** → se abre en `http://127.0.0.1:5173/cv.html`
(enlace "Currículum" en la barra de navegación, la portada, la sección de Educación y el footer).
Tiene botón **"Guardar como PDF / Imprimir"** (o `Ctrl + P`) con estilos de impresión A4.

## Personalizar

Todo el contenido editable está en **`src/data.js`**:

- `profile` → nombre, cargo, ubicación, teléfono, email, LinkedIn, textos de portada y footer
- `heroChips`, `heroTech` → chips de contacto y pills de tecnologías de la portada
- `aboutTexts`, `stats`, `aboutCards`, `workWith` → sección "Sobre mí"
- `experience` → puestos, periodos y logros de cada uno
- `highlights` → tarjetas de resultados destacados
- `skillGroups` y `aiTools` → parrilla de habilidades y herramientas IA
- `education`, `languages` → sección de Educación

El CV completo se edita en **`public/cv.html`** (HTML independiente, sin dependencias).

La foto está en `public/perfil.jpg` (componente `src/components/Avatar.jsx` muestra las
iniciales `AG` si la imagen falta).

> Nota: `dev.log`, `dev.err`, `preview.log`, `preview.err` son archivos de salida de los
> servidores; puedes borrarlos sin problema.
