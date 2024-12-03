let isScrolling = false;

// Hàm kiểm tra khi phần tử vào hoặc ra khỏi viewport
function checkScroll() {
  // Lấy tất cả các phần tử có class 'scrollCard'
  const cards = document.querySelectorAll(".scrollCard");

  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    // Kiểm tra khi phần tử gần xuất hiện trong viewport
    if (rect.top <= windowHeight * 0.8) {
      card.classList.add("visible");
    } else {
      card.classList.remove("visible");
    }
  });
}

// Hàm tối ưu hóa scroll event
function throttleScroll() {
  if (!isScrolling) {
    isScrolling = true;
    requestAnimationFrame(() => {
      checkScroll();
      isScrolling = false;
    });
  }
}

// Gọi hàm kiểm tra cuộn khi người dùng cuộn trang
window.addEventListener("scroll", throttleScroll);

// Gọi hàm lần đầu tiên để khởi tạo trạng thái ban đầu
checkScroll();
