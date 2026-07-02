# Clínica Lumina

Landing page comercial para una clínica ficticia de medicina estética en Madrid.

Diseñé y desarrollé este proyecto para simular una página real de captación de citas para un negocio local. El objetivo fue construir una experiencia clara, responsive y orientada a conversión, cuidando tanto la presentación visual como la estructura técnica del frontend.

## Vista General

Clínica Lumina presenta servicios estéticos, beneficios, testimonios, preguntas frecuentes y un formulario visual de contacto. La página está pensada para transmitir confianza, explicar la propuesta de valor y facilitar que una persona interesada solicite una primera valoración.

## Funcionalidades

- Hero principal con propuesta de valor y llamadas a la acción.
- Navegación responsive con menú móvil.
- Sección de tratamientos con tarjetas informativas.
- Sección de beneficios orientada a confianza y conversión.
- Bloque sobre la clínica con información comercial.
- Testimonios de pacientes.
- FAQ interactivo tipo accordion.
- Sección de contacto con ubicación, horario y WhatsApp.
- Formulario visual con validación frontend.
- Mensajes de error y éxito en el formulario.
- Diseño responsive para desktop, tablet y móvil.
- Metadatos básicos para SEO.

## Tecnologías

- HTML5
- CSS3
- JavaScript
- Git
- GitHub

## Decisiones de Implementación

El proyecto está construido con HTML, CSS y JavaScript sin dependencias externas. Elegí una stack ligera porque la página no necesita rutas, estado global ni framework de componentes. Esto permite que el código sea fácil de revisar, rápido de cargar y adecuado para una landing page estática.

Las interacciones principales están implementadas con JavaScript:

- apertura y cierre del menú móvil;
- actualización de `aria-expanded` en elementos interactivos;
- FAQ accordion;
- validación visual del formulario;
- prevención del envío real del formulario;
- mensaje de validación para el formulario de demostración.

El formulario no envía datos reales ni está conectado a un backend.

## Accesibilidad

Implementé varias mejoras básicas de accesibilidad:

- navegación principal con `aria-label`;
- botón de menú con `aria-expanded` y `aria-controls`;
- FAQ construido con botones reales;
- relación entre preguntas y respuestas mediante `aria-controls`;
- errores de formulario conectados con `aria-describedby`;
- estado inválido con `aria-invalid`;
- mensaje de éxito con `aria-live`;
- estados de foco visibles para teclado.

Las imágenes incluyen dimensiones explícitas. El hero tiene carga prioritaria y
las imágenes secundarias utilizan lazy loading para reducir saltos de layout y
trabajo innecesario durante la carga inicial.

## Estructura

```txt
01-landing-clinica-lumina/
├── BLUEPRINT.md
├── DECISIONS.md
├── README.md
├── index.html
├── screenshots/
└── src/
    ├── assets/
    │   ├── icons/
    │   └── images/
    ├── css/
    │   └── styles.css
    └── js/
        └── main.js
```

## Cómo Ejecutarlo

No requiere instalación de dependencias.

Opción recomendada:

1. Clonar el repositorio.
2. Abrir la carpeta del proyecto en Visual Studio Code.
3. Ejecutar `index.html` con Live Server.

También puede abrirse directamente el archivo `index.html` en el navegador.

## Screenshots

### Desktop

![Vista desktop de Clínica Lumina](./screenshots/desktop.png?v=20260702-1)

### Mobile

![Vista mobile de Clínica Lumina](./screenshots/mobile.png?v=20260702-1)

## Deploy

Proyecto publicado con GitHub Pages:

[https://alxnrocha.github.io/landing-clinica-lumina/](https://alxnrocha.github.io/landing-clinica-lumina/)

## Documentación Técnica

Las decisiones técnicas principales están documentadas en:

[DECISIONS.md](./DECISIONS.md)

## Estado

Landing page finalizada y publicada como proyecto de portfolio frontend.

## Autor

Alexandre Rocha
