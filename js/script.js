const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

prev.classList.add("disable");

const states = document.querySelectorAll(".switch-state .item");
const imgStates = document.querySelectorAll(".switch-state .img");

const swiper = new Swiper(".formslider", {
  autoHeight: true,
  allowTouchMove: false,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});

swiper.on("slideChange", function () {
  console.log('nice')
  imgStates.forEach((state) => state.classList.remove("active"));
  states.forEach((state) => state.classList.remove("active"));
  
  imgStates[swiper.realIndex].classList.add("active");
  states[swiper.realIndex].classList.add("active");

  next.classList.remove("disable");
  prev.classList.remove("disable");

  if (swiper.realIndex === 0) {
    prev.classList.add("disable");
  }
  if (swiper.realIndex === states.length - 1) {
    next.classList.add("disable");
  }
});
