const openModalBtn = document.querySelector(".menu-open");
const closeModalBtn = document.querySelector(".menu-close");
const body = document.querySelector("body");
const menu = document.querySelector(".menu-nav-list");
const modal = document.querySelector(".modal");

function onOpenModal() {
  body.style.overflow = "hidden";
  menu.addEventListener("click", navigate);
  openModalBtn.classList.add("hidden");
  modal.classList.remove("hidden");
  closeModalBtn.classList.remove("hidden");
}

function onCloseModal() {
  body.style.overflow = "auto";
  menu.removeEventListener("click", navigate);
  openModalBtn.classList.remove("hidden");
  closeModalBtn.classList.add("hidden");
  modal.classList.add("hidden");
}

function navigate(event) {
  if (event.target.nodeName !== "A") {
    return;
  } else {
    onCloseModal();
  }
}

openModalBtn.addEventListener("click", onOpenModal);
closeModalBtn.addEventListener("click", onCloseModal);
