const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector("#primary-navigation");
const navLinks = document.querySelectorAll(".nav-list a");
const faqQuestions = document.querySelectorAll(".faq-question");
const contactForm = document.querySelector(".contact-form");

if (navToggle && navList) {
  navToggle.addEventListener("click", function () {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";

    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navToggle.setAttribute(
      "aria-label",
      isOpen ? "Abrir menú de navegación" : "Cerrar menú de navegación",
    );
    navToggle.classList.toggle("is-open", !isOpen);
    navList.classList.toggle("is-open", !isOpen);
  });

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Abrir menú de navegación");
      navToggle.classList.remove("is-open");
      navList.classList.remove("is-open");
    });
  });
}

faqQuestions.forEach(function (question) {
  question.addEventListener("click", function () {
    const currentItem = question.closest(".faq-item");
    const isOpen = question.getAttribute("aria-expanded") === "true";

    faqQuestions.forEach(function (otherQuestion) {
      const otherItem = otherQuestion.closest(".faq-item");

      otherQuestion.setAttribute("aria-expanded", "false");
      otherItem.classList.remove("is-open");
    });

    question.setAttribute("aria-expanded", String(!isOpen));
    currentItem.classList.toggle("is-open", !isOpen);
  });
});

if (contactForm) {
  const successMessage = contactForm.querySelector(".form-success");
  const formFields = contactForm.querySelectorAll("[aria-describedby]");

  formFields.forEach(function (field) {
    field.addEventListener("input", function () {
      clearFieldError(field);
      successMessage.textContent = "";
    });

    field.addEventListener("change", function () {
      clearFieldError(field);
      successMessage.textContent = "";
    });
  });

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const formValues = Object.fromEntries(formData);

    const nameInput = contactForm.querySelector("#name");
    const emailInput = contactForm.querySelector("#email");
    const treatmentSelect = contactForm.querySelector("#treatment");
    const messageTextarea = contactForm.querySelector("#message");

    const nameValue = formValues.name.trim();
    const emailValue = formValues.email.trim();
    const messageValue = formValues.message.trim();

    let isValid = true;

    clearFieldError(nameInput);
    clearFieldError(emailInput);
    clearFieldError(treatmentSelect);
    clearFieldError(messageTextarea);
    successMessage.textContent = "";

    if (nameValue === "") {
      showFieldError(nameInput, "El nombre es obligatorio.");
      isValid = false;
    } else if (nameValue.length < 3) {
      showFieldError(nameInput, "El nombre debe tener al menos 3 caracteres.");
      isValid = false;
    }

    if (emailValue === "") {
      showFieldError(emailInput, "El email es obligatorio.");
      isValid = false;
    } else if (!emailInput.validity.valid) {
      showFieldError(emailInput, "Introduce un email válido.");
      isValid = false;
    }

    if (formValues.treatment === "") {
      showFieldError(treatmentSelect, "Selecciona un tratamiento.");
      isValid = false;
    }

    if (messageValue === "") {
      showFieldError(messageTextarea, "El mensaje es obligatorio.");
      isValid = false;
    } else if (messageValue.length < 10) {
      showFieldError(messageTextarea, "El mensaje debe tener al menos 10 caracteres.");
      isValid = false;
    }

    if (isValid) {
      successMessage.textContent =
        "Solicitud enviada correctamente. Nos pondremos en contacto contigo pronto.";
      contactForm.reset();
    }
  });
}

function showFieldError(field, message) {
  const errorElementId = field.getAttribute("aria-describedby");
  const errorElement = document.querySelector(`#${errorElementId}`);

  field.setAttribute("aria-invalid", "true");
  errorElement.textContent = message;
}

function clearFieldError(field) {
  const errorElementId = field.getAttribute("aria-describedby");
  const errorElement = document.querySelector(`#${errorElementId}`);

  field.removeAttribute("aria-invalid");
  errorElement.textContent = "";
}
