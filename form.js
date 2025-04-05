document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Simple client-side validation
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || phone === "" || message === "") {
      Swal.fire({
        icon: "error",
        title: "Ошибка",
        text: "Все поля обязательны для заполнения!",
      });
      return;
    }

    // Check reCAPTCHA
    const recaptchaResponse = grecaptcha.getResponse();
    if (recaptchaResponse.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Ошибка",
        text: "Пожалуйста, подтвердите, что вы не робот.",
      });
      return;
    }

    // If everything is valid, submit the form
    fetch("https://formspree.io/f/abcxyz123", {
      method: "POST",
      body: new FormData(document.getElementById("contact-form")),
    })
      .then((response) => {
        if (response.ok) {
          Swal.fire({
            icon: "success",
            title: "Спасибо!",
            text: "Ваше сообщение отправлено.",
          }).then(() => {
            document.getElementById("contact-form").reset(); // Reset the form after success
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Ошибка",
            text: "Что-то пошло не так. Попробуйте снова.",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Ошибка",
          text: "Не удалось отправить форму. Попробуйте позже.",
        });
      });
  });
