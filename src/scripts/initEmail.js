import emailjs from "@emailjs/browser";

const contactForm = document.getElementById("contact-form");

emailjs.init(import.meta.env.PUBLIC_KEY);

function submitForm(event) {
  event.preventDefault();
  
  const recaptchaResponse = grecaptcha.getResponse();
  if (!recaptchaResponse) {
    alert("Por favor, completa el reCAPTCHA");
    return;
  }

  emailjs
    .sendForm(
      import.meta.env.PUBLIC_EMAIL_SERVICE_ID,
      import.meta.env.PUBLIC_TEMPLATE_ID,
      this,
    )
    .then(
      () => {
        console.log("Email enviado con éxito!");
        alert("Mensaje enviado correctamente!");
        grecaptcha.reset();
        this.reset(); 
      },
      (error) => {
        console.log("Error al enviar el email:", error);
        alert("Error al enviar el mensaje. Por favor, intenta de nuevo.");
      },
    );
}

contactForm.addEventListener("submit", submitForm);
