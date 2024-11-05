// Lấy tất cả các liên kết trong menu
const menuLinks = document.querySelectorAll("#Khung_Menu_3 a");

// Function để cuộn mượt mà đến phần mục tiêu
function scrollToSection(event) {
  event.preventDefault();

  // Lấy giá trị của data-target
  const target = event.target.getAttribute("data-target");
  const section = document.getElementById(target);

  // Kiểm tra nếu phần mục tiêu tồn tại
  if (section) {
    section.scrollIntoView({ behavior: "smooth" }); // Cuộn mượt mà đến phần mục tiêu
  }
}

// Thêm sự kiện click cho tất cả các liên kết trong menu
menuLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});
