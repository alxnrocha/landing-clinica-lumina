# Clínica Lumina — Landing Page de Medicina Estética

[![Live Demo](https://img.shields.io/badge/Live_Demo-GitHub_Pages-success?style=flat-square&logo=github&logoColor=white)](https://alxnrocha.github.io/landing-clinica-lumina/)
[![HTML5](https://img.shields.io/badge/HTML5-Semantic_Markup-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Modern_Responsive-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla_ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Accessibility](https://img.shields.io/badge/Accessibility-WCAG_2.1_AA-8A2BE2?style=flat-square)](https://www.w3.org/WAI/standards-guidelines/wcag/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

> **Proyecto 01 del Portafolio Profesional** — Landing page comercial responsiva para clínica de medicina estética de alta gama en Madrid, orientada a la conversión y accesibilidad web.  
> 🔗 **Demo en Vivo en GitHub Pages:** [https://alxnrocha.github.io/landing-clinica-lumina/](https://alxnrocha.github.io/landing-clinica-lumina/)

---

## ✨ Características Principales

### 🚀 Experiencia de Usuario & Frontend
- **Estructura Semántica & Accesibilidad:** Navegación optimizada con etiquetas semánticas HTML5, atributos `aria-expanded`, `aria-controls` y navegación accesible por teclado.
- **Acordeón Interactivo de FAQ:** Módulo expandible accesible sin librerías pesadas para resolver dudas frecuentes de pacientes.
- **Formulario de Valoración con Validación:** Validación frontend en tiempo real de campos obligatorios con retroalimentación visual (`aria-invalid` y `aria-live`).
- **Rendimiento de Carga y Core Web Vitals:** Carga prioritaria del recurso LCP en el Hero y *lazy loading* nativo en imágenes secundarias para evitar saltos de layout (CLS).
- **Diseño Responsive:** Adaptación fluida para dispositivos móviles, tablets y pantallas de escritorio mediante CSS Flexbox y Grid.

---

## 🏛️ Estructura del Proyecto

```text
01-landing-clinica-lumina/
├── index.html                     # Documento HTML5 principal
├── src/
│   ├── assets/                    # Iconos y recursos visuales optimizados
│   ├── css/
│   │   └── styles.css             # Arquitectura CSS y variables de diseño (:root)
│   └── js/
│       └── main.js                # Interacciones DOM y validación de formularios
```

---

## ⚡ Guía de Inicio Rápido

### 1. Clonar el Repositorio
```bash
git clone https://github.com/alxnrocha/landing-clinica-lumina.git
cd landing-clinica-lumina
```

### 2. Ejecutar en Local
Al ser un proyecto desarrollado en Vanilla JavaScript, no requiere instalación de dependencias de Node.js:
- Abra `index.html` directamente en su navegador web, o
- Inicie un servidor local liviano con la extensión **Live Server** de VS Code o ejecutando `npx serve .`.

---

## 🧪 Calidad de Código y Pruebas

- **Estándares Web:** Marcado HTML5 semántico y CSS3 puro validado contra las directrices oficiales del W3C.
- **Accesibilidad (a11y):** Cumplimiento de pautas WCAG 2.1 nivel AA (contraste cromático, navegación integral por teclado y atributos ARIA).
- **Rendimiento:** Carga diferida de imágenes secundarias (*lazy loading*) y prioridad en recurso LCP.

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulte el archivo [LICENSE](./LICENSE) para más detalles.
