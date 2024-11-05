document.addEventListener("DOMContentLoaded", function () {
  var nutphai = document.querySelector(".phai");
  var nuttrai = document.querySelector(".trai");
  var dsslide = document.querySelectorAll("._1slide");
  var vitri = 0;
  console.log(nutphai);
  console.log(nuttrai);
  nutphai.addEventListener("click", function () {
    if (vitri < dsslide.length - 1) {
      dsslide[vitri].classList.remove("hienra");
      dsslide[vitri + 1].classList.add("hienra");
      vitri++;
    } else {
      dsslide[dsslide.length - 1].classList.remove("hienra");
      dsslide[0].classList.add("hienra");
      vitri = 0;
    }
  });

  nuttrai.addEventListener("click", function () {
    if (vitri > 0) {
      dsslide[vitri].classList.remove("hienra");
      dsslide[vitri - 1].classList.add("hienra");
      vitri--;
    } else {
      dsslide[0].classList.remove("hienra");
      dsslide[dsslide.length - 1].classList.add("hienra");
      vitri = dsslide.length - 1;
    }
  });

  // auto chuyển động slide
  function autoSlide() {
    if (vitri < dsslide.length - 1) {
      dsslide[vitri].classList.remove("hienra");
      dsslide[vitri + 1].classList.add("hienra");
      vitri++;
    } else {
      dsslide[dsslide.length - 1].classList.remove("hienra");
      dsslide[0].classList.add("hienra");
      vitri = 0;
    }
  }

  // gọi autoSlide mỗi 3s
  setInterval(autoSlide, 3000);
});
