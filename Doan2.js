let currentIndex = 0;
const images = document.querySelector(".slider");
const totalImages = document.querySelectorAll(".slider-image").length;
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

// Hàm chuyển sang ảnh tiếp theo
function nextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  updateSlider();
}

// Hàm quay lại ảnh trước
function prevImage() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateSlider();
}

// Cập nhật vị trí slider
function updateSlider() {
  images.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Tự động chuyển ảnh sau mỗi 3 giây
let autoSlide = setInterval(nextImage, 3000);

// Khi người dùng click vào mũi tên
nextButton.addEventListener("click", () => {
  nextImage();
  clearInterval(autoSlide); // Dừng tự động khi click
  autoSlide = setInterval(nextImage, 3000); // Tự động bật lại
});

prevButton.addEventListener("click", () => {
  prevImage();
  clearInterval(autoSlide); // Dừng tự động khi click
  autoSlide = setInterval(nextImage, 3000); // Tự động bật lại
});
