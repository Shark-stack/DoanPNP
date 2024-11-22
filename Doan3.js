// Lấy phần tử nút
const backToTopButton = document.getElementById("backtotop");

// Lắng nghe sự kiện cuộn (scroll)
window.addEventListener("scroll", () => {
  // Hiện nút nếu cuộn xuống quá 300px
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

// Thêm sự kiện click cho nút
backToTopButton.addEventListener("click", () => {
  // Cuộn mượt lên đầu trang
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
