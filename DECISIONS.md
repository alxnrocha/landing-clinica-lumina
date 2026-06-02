# Decisiones Técnicas

Este documento recoge las principales decisiones técnicas que tomé durante el desarrollo de la landing page de Clínica Lumina.

## 1. Objetivo Técnico

El objetivo fue construir una landing page comercial, responsive y mantenible para una clínica ficticia de medicina estética.

El proyecto debía resolver una necesidad concreta:

- presentar servicios de forma clara;
- generar confianza;
- facilitar el contacto;
- funcionar correctamente en distintos tamaños de pantalla;
- mantener un código comprensible y bien organizado.

## 2. Stack Elegida

Usé:

- HTML5 para la estructura;
- CSS3 para el diseño visual y la responsividad;
- JavaScript para las interacciones;
- Git y GitHub para el flujo de trabajo.

La página no requiere framework porque no tiene rutas dinámicas, estado global ni consumo de API. Para este alcance, una implementación estática permite entregar una experiencia más simple, rápida y fácil de revisar.

## 3. Organización del Proyecto

Separé el proyecto por responsabilidades:

```txt
index.html          contenido y estructura principal
src/css/styles.css  diseño, layout y responsive
src/js/main.js      comportamiento e interacciones
src/assets/images/  imágenes del proyecto
screenshots/        capturas para documentación
```

Esta estructura mantiene el proyecto ordenado y facilita localizar cada parte del código.

## 4. HTML Semántico

Organicé la página en bloques semánticos:

- `header`;
- `nav`;
- `main`;
- `section`;
- `article`;
- `footer`.

La estructura de contenido sigue el flujo de una landing page comercial:

1. propuesta de valor;
2. tratamientos;
3. beneficios;
4. información de la clínica;
5. testimonios;
6. preguntas frecuentes;
7. contacto.

## 5. CSS y Sistema Visual

El CSS está organizado por secciones para facilitar el mantenimiento.

Usé variables CSS para definir:

- colores;
- ancho máximo del contenedor;
- espaciado de secciones;
- radio de bordes;
- duración de transiciones.

La dirección visual busca una estética limpia y profesional, adecuada para una clínica estética:

- fondos claros;
- verde oscuro como color principal;
- tarjetas suaves;
- espaciado amplio;
- sección de contacto con composición más premium;
- foco visual claro en elementos interactivos.

## 6. Responsive Design

El diseño se adapta a desktop, tablet y móvil mediante media queries.

Las decisiones principales fueron:

- usar grids flexibles;
- convertir secciones de dos columnas en una columna en pantallas pequeñas;
- compactar espaciados en móvil;
- mantener botones y campos de formulario cómodos para interacción táctil;
- evitar solapamientos de texto o contenido.

## 7. Menú Mobile

El menú móvil se controla con JavaScript.

El botón usa:

- `aria-expanded`;
- `aria-controls`;
- `aria-label`.

Cuando el menú se abre o se cierra, JavaScript actualiza el estado visual y los atributos de accesibilidad. También se cierra el menú al seleccionar un enlace.

## 8. FAQ Accordion

La sección FAQ usa botones para cada pregunta.

Esta decisión permite que la interacción sea accesible por teclado y más clara para tecnologías asistivas.

El comportamiento se controla con:

- `aria-expanded`;
- clase `is-open`;
- JavaScript para abrir una pregunta y cerrar las demás.

## 9. Formulario

El formulario es visual y no envía datos reales.

Usé `novalidate` para controlar los mensajes de validación desde JavaScript y evitar los mensajes nativos del navegador.

La lógica del formulario:

1. intercepta el evento `submit`;
2. evita el envío real con `preventDefault()`;
3. lee los valores con `FormData`;
4. valida campos obligatorios;
5. valida el formato del email usando la validación nativa del input;
6. muestra errores visuales;
7. muestra un mensaje de éxito simulado si todo es válido.

Campos obligatorios:

- nombre;
- email;
- tratamiento de interés;
- mensaje.

El teléfono queda como campo opcional.

## 10. Accesibilidad del Formulario

Cada mensaje de error está conectado con su campo mediante `aria-describedby`.

Cuando un campo tiene error, JavaScript añade:

```html
aria-invalid="true"
```

El mensaje de éxito usa:

```html
aria-live="polite"
```

Esto ayuda a comunicar cambios importantes sin interrumpir la navegación del usuario.

## 11. SEO Básico

Incluí una base mínima de SEO:

- `lang="es"`;
- `title` descriptivo;
- `meta description`;
- jerarquía clara de headings;
- contenido orientado a una clínica local en Madrid.

No añadí datos estructurados ni SEO avanzado porque el objetivo actual es una landing page estática de portfolio.

## 12. Flujo de GitHub

Organicé el desarrollo con un flujo similar al de un entorno profesional:

- issues;
- labels;
- milestones;
- ramas por tarea;
- commits descriptivos;
- pull requests;
- merges controlados.

Esto permite revisar la evolución del proyecto y no solo el resultado final.

## 13. Posibles Mejoras en Producción

Si este proyecto se adaptara a un cliente real, añadiría:

- integración real del formulario con email o CRM;
- política de privacidad y aviso legal;
- analítica;
- optimización avanzada de imágenes;
- datos estructurados para SEO local;
- integración real con sistema de reservas;
- pruebas automatizadas básicas.

## 14. Estado Actual

La landing page está finalizada como proyecto de portfolio frontend.

El proyecto incluye estructura semántica, diseño responsive, interacciones con JavaScript, validación visual de formulario, documentación técnica, capturas desktop y móvil, y deploy público en GitHub Pages.

Las mejoras descritas en la sección anterior quedan fuera del alcance actual porque corresponden a una posible adaptación para un cliente real.
