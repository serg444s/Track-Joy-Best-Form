let swiper = new Swiper(".gallery-swiper", {
  loop: false,
  pagination: {
    el: ".gallery-pagination",
  },
  slidesPerView: 1,
  spaceBetween: 24,
  navigation: {
    nextEl: ".gallery-right",
    prevEl: ".gallery-left",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  mousewheel: true,
  keyboard: true,
});

let newswiper = new Swiper(".clients-swiper", {
  loop: false,
  pagination: {
    el: ".clients-pagination",
  },
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".clients-right",
    prevEl: ".clients-left",
  },
  scrollbar: {
    el: ".clients-scrollbar",
  },
  mousewheel: true,
  keyboard: true,
});
