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

/* Su kien form DangNhap */
document.addEventListener("DOMContentLoaded", function () {
  const showLoginForm = document.getElementById("showLoginForm");
  const closeLoginForm = document.getElementById("closeLoginForm");
  const loginForm = document.getElementById("loginForm");

  // Hiển thị form khi nhấn "Đăng Nhập"
  showLoginForm.addEventListener("click", function () {
    loginForm.style.display = "block";
  });

  // Đóng form khi nhấn nút "x"
  closeLoginForm.addEventListener("click", function () {
    loginForm.style.display = "none";
  });

  // Đóng form khi click ra ngoài vùng form
  window.addEventListener("click", function (event) {
    if (event.target === loginForm) {
      loginForm.style.display = "none";
    }
  });
});
