const menuLinks = document.querySelectorAll("#Khung_Menu_3 a");
const circle = document.getElementById("circle");

// Function to move the circle
function moveCircle(target) {
  const targetLink = document.querySelector(
    `#Khung_Menu_3 a[data-target="${target}"]`
  );
  const targetRect = targetLink.getBoundingClientRect();
  circle.style.opacity = 1;
  circle.style.left = `${
    targetRect.left + targetRect.width / 2 - circle.offsetWidth / 2
  }px`;
}

// Function to scroll to the target section smoothly
function scrollToSection(event) {
  event.preventDefault();
  const target = event.target.getAttribute("data-target");
  const section = document.getElementById(target);
  section.scrollIntoView({ behavior: "smooth" }); // Cuộn mượt mà đến phần mục tiêu
  moveCircle(target);
}

// Add click event to all menu links
menuLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

// Function to hide the circle when scrolling to the top
window.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    circle.style.opacity = 0;
  }
});
