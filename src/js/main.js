const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const formValues = Object.fromEntries(formData);

  const emailInput = contactForm.querySelector("#email");

  const nameValue = formValues.name.trim();
  const emailValue = formValues.email.trim();
  const messageValue = formValues.message.trim();

  console.log(formValues);

  if (nameValue === "") {
    console.log("El nombre es obligatorio.");
  } else if (nameValue.length < 3) {
    console.log("El nombre debe tener al menos 3 caracteres.");
  }

  if (emailValue === "") {
    console.log("El email es obligatorio.");
  }

  if (emailValue !== "" && !emailInput.validity.valid) {
    console.log("Introduce un email válido.");
  }

  if (formValues.treatment === "") {
    console.log("Selecciona un tratamiento.");
  }

  if (messageValue === "") {
    console.log("El mensaje es obligatorio.");
  } else if (messageValue.length < 10) {
    console.log("El mensaje debe tener al menos 10 caracteres.");
  }
});
