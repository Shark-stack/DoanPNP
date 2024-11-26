function openModal() {
  document.getElementById("orderModal").style.display = "block";
}

function closeModal() {
  document.getElementById("orderModal").style.display = "none";
}

// Đóng modal khi nhấn ra ngoài
window.onclick = function (event) {
  const modal = document.getElementById("orderModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
