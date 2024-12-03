document.addEventListener("DOMContentLoaded", function () {
  const Slide = document.querySelector(".slide");
  const nuttrai = document.getElementById("nuttrai");
  const nutphai = document.getElementById("nutphai");
  const indicatorButtons = document.querySelectorAll(
    ".khungvongtron .vongtron"
  );
  let currentSlide = 0;
  const Slideitem = document.querySelectorAll(".slide-item").length;

  function moveToSlide(slideIndex) {
    if (slideIndex >= Slideitem) {
      currentSlide = 0;
    } else if (slideIndex < 0) {
      currentSlide = Slideitem - 1;
    } else {
      currentSlide = slideIndex;
    }

    Slide.style.transform = `translateX(-${currentSlide * 100}%)`;

    indicatorButtons.forEach((button, index) => {
      button.classList.toggle("active", index === currentSlide);
    });
  }

  nutphai.addEventListener("click", function () {
    moveToSlide(currentSlide + 1);
  });

  nuttrai.addEventListener("click", function () {
    moveToSlide(currentSlide - 1);
  });

  indicatorButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      moveToSlide(index);
    });
  });

  setInterval(function () {
    moveToSlide(currentSlide + 1);
  }, 3000);
});
