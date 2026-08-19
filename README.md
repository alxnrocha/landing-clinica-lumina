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

## 🌟 Visión General & Propuesta de Valor

**Clínica Lumina** es una solución web comercial y corporativa diseñada para captar y convertir pacientes de tratamientos estéticos no invasivos en Madrid. 

Prioriza una experiencia de usuario rápida y sin fricción, eliminando librerías pesadas en favor de estándares nativos HTML5 y CSS3 modernos, con cumplimiento riguroso de accesibilidad (WCAG 2.1 AA) y tiempos de carga instantáneos.

---

## ✨ Características Principales

- **Estructura Semántica & Accesibilidad:** Navegación optimizada con marcado semántico HTML5, atributos `aria-expanded`, `aria-controls` y navegación accesible por teclado.
- **Acordeón Interactivo de FAQ:** Módulo expandible nativo para resolver dudas frecuentes de pacientes sin dependencias externas.
- **Formulario de Valoración con Validación:** Validación frontend en tiempo real de campos obligatorios con retroalimentación visual (`aria-invalid` y `aria-live`).
- **Rendimiento de Carga y Core Web Vitals:** Carga prioritaria del recurso LCP en el Hero y *lazy loading* nativo en imágenes secundarias.
- **Diseño Responsive:** Adaptación fluida para smartphones, tablets y pantallas de escritorio mediante CSS Flexbox y Grid.

---

## 🏛️ Arquitectura del Proyecto

```text
01-landing-clinica-lumina/
├── index.html                     # Documento HTML5 principal
├── src/
│   ├── assets/                    # Iconos e imágenes optimizadas
│   ├── css/
│   │   └── styles.css             # Arquitectura CSS con variables (:root)
│   └── js/
│       └── main.js                # Interacciones DOM y validación
├── LICENSE
└── README.md
```

---

## 🚀 Instalación y Puesta en Marcha

### Prerrequisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge).

### Pasos

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/alxnrocha/landing-clinica-lumina.git
   cd landing-clinica-lumina
   ```

2. **Ejecutar en modo local:**
   Al estar desarrollado con Vanilla Web Technologies, no requiere instalación de paquetes:
   - Abra el archivo `index.html` directamente en su navegador, o
   - Inicie un servidor local con **Live Server** de VS Code o ejecutando `npx serve .`.

---

## 🛡️ Calidad de Código & Testing

- **Estándares W3C:** HTML5 y CSS3 validados contra directrices oficiales del W3C.
- **Accesibilidad (a11y):** Verificación de contraste cromático, navegación por teclado y lectores de pantalla (WCAG 2.1 AA).
- **Core Web Vitals:** Carga optimizada con puntuación verde en métricas LCP, CLS y FID.

---

## 📄 Licencia

Este proyecto se encuentra bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
