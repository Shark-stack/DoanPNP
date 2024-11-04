function toggleMenu() {
  const Slide_Menu = document.getElementById("Slide_Menu");
  const Menu_icon = document.getElementById("Menu_icon");

  // Bật/tắt class 'active' cho menu
  Slide_Menu.classList.toggle("active");

  // Thay đổi icon khi mở/đóng menu
  Menu_icon.innerHTML = Slide_Menu.classList.contains("active")
    ? '<i class="fa fa-times"></i>' // Icon đóng (X)
    : '<i class="fa fa-bars"></i>'; // Icon mở (3 gạch)
}

// Sự kiện click vào icon menu
document
  .getElementById("Menu_icon")
  .addEventListener("click", function (event) {
    event.stopPropagation(); // Ngăn không cho sự kiện click kích hoạt cho document
    toggleMenu();
  });

// Sự kiện click ra ngoài menu để đóng menu
document.addEventListener("click", function (event) {
  const Slide_Menu = document.getElementById("Slide_Menu");
  const Menu_icon = document.getElementById("Menu_icon");

  // Kiểm tra nếu click ra ngoài menu và icon
  if (!Slide_Menu.contains(event.target) && !Menu_icon.contains(event.target)) {
    // Nếu menu đang mở (có class 'active'), thì đóng menu
    if (Slide_Menu.classList.contains("active")) {
      Slide_Menu.classList.remove("active");

      // Đổi lại icon về 3 gạch khi menu đóng
      Menu_icon.innerHTML = '<i class="fa fa-bars"></i>';
    }
  }
});
