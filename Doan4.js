// Cập nhật dữ liệu sản phẩm
const products = {
  pizzaA: {
    name: "#1 MARGHERITA",
    desc: "Pizza với sốt cà chua và phô mai.",
    img: "img/pizza1.jpg",
    sizes: { R: "170.000 đ", L: "240.000 đ" },
    price: "240.000 đ",
    crusts: ["Mỏng", "Dày"],
    toppings: [],
  },
  pizzaB: {
    name: "#2 HAWAIIAN",
    desc: "Pizza với sốt cà chua, jambông, thơm và phô mai.",
    img: "img/pizza2.jpg",
    sizes: { R: "170.000 đ", L: "240.000 đ" },
    price: "240.000 đ",
    crusts: ["Mỏng", "Dày"],
    toppings: [],
  },
  pizzaC: {
    name: "#3 TROPICANA SEAFOOD",
    desc: "Pizza hải sản, thơm, xốt ớt chua ngọt và phô mai.",
    img: "img/pizza3.jpg",
    sizes: { R: "170.000 đ", L: "240.000 đ" },
    price: "240.000 đ",
    crusts: ["Mỏng", "Dày"],
    toppings: [],
  },
  pizzaD: {
    name: "#4 BBQ BEEFY",
    desc: "Pizza với thịt ba chỉ bò và ba rọi xông khói, hành tây xào, cà chua nướng, v.v...",
    img: "img/pizza4.jpg",
    sizes: { R: "170.000 đ", L: "250.000 đ" },
    price: "240.000 đ",
    crusts: ["Mỏng", "Dày"],
    toppings: [],
  },
  pizzaE: {
    name: "#5 BBQ CHICKEN",
    desc: "Pizza với thịt gà Mexico, xốt BBQ, ớt chuông xanh, nấm, jambông, v.v...",
    img: "img/pizza5.jpg",
    sizes: { R: "170.000 đ", L: "250.000 đ" },
    price: "240.000 đ",
    crusts: ["Mỏng", "Dày"],
    toppings: [],
  },
};

// Hàm mở modal
function openModal(productId) {
  const product = products[productId];
  if (!product) return;

  // Cập nhật thông tin sản phẩm
  document.querySelector(".nd1m").textContent = `${product.name} (L)`; // Đảm bảo tên sản phẩm là L
  document.querySelector(".nd2m").textContent = product.desc;
  document.querySelector(".a1m").src = product.img;
  document.querySelector(".t1").textContent = product.price;

  // Cập nhật kích thước
  const sizeContainer = document.querySelector(".chon1");
  sizeContainer.innerHTML = ""; // Xóa kích thước cũ
  for (const [size, price] of Object.entries(product.sizes)) {
    sizeContainer.innerHTML += `
        
              <input type="radio" name="size" value="${size}" ${
      size === "L" ? "checked" : ""
    }>
              <p class="nd4m">${size}</p>
              <div class="nd5m">${price}</div>
          
      `;
  }

  // Cập nhật loại đế
  const crustContainer = document.querySelector(".chon2");
  crustContainer.innerHTML = ""; // Xóa loại đế cũ
  product.crusts.forEach((crust) => {
    crustContainer.innerHTML += `
          
              <input type="radio" name="crust" value="${crust}" ${
      crust === "Mỏng" ? "checked" : ""
    }>
              <div class="nd6m">${crust}</div>
          
      `;
  });

  // Cập nhật topping
  const toppingContainer = document.querySelector(".table-container table");
  toppingContainer.innerHTML = ""; // Xóa topping cũ
  product.toppings.forEach((topping) => {
    toppingContainer.innerHTML += `
          <div class="muaphai1">
              <input type="checkbox" name="topping" value="${topping}">
              <div class="nd7m">${topping}</div>
              <div class="nd8m">40.000 đ</div>
          </div>
      `;
  });

  // Hiển thị modal
  const modal = document.getElementById("orderModal");
  modal.style.display = "block";

  // Thêm sự kiện đóng modal khi click ngoài
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });
}

// Hàm đóng modal
function closeModal() {
  document.getElementById("orderModal").style.display = "none";
}
