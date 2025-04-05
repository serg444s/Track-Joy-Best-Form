document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || phone === "" || message === "") {
      Swal.fire({
        icon: "error",
        title: "Errore",
        text: "Tutti i campi sono obbligatori!",
      });
      return;
    }

    // Mostra la finestra modale di conferma
    Swal.fire({
      title: "Conferma l'invio",
      text: "Sei sicuro di voler inviare il messaggio?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Invia",
      cancelButtonText: "Annulla",
    }).then((result) => {
      if (result.isConfirmed) {
        // Invia il modulo solo se confermato
        fetch("https://formspree.io/f/xnnpgkke", {
          method: "POST",
          body: new FormData(document.getElementById("contact-form")),
        })
          .then((response) => {
            if (response.ok) {
              Swal.fire({
                icon: "success",
                title: "Grazie!",
                text: "Il tuo messaggio è stato inviato con successo.",
              }).then(() => {
                document.getElementById("contact-form").reset();
              });
            } else {
              Swal.fire({
                icon: "error",
                title: "Errore",
                text: "Qualcosa è andato storto. Riprova più tardi.",
              });
            }
          })
          .catch(() => {
            Swal.fire({
              icon: "error",
              title: "Errore",
              text: "Impossibile inviare il modulo. Riprova più tardi.",
            });
          });
      }
    });
  });
