const productsList = [
  [
        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRRmrtyDdG-L5znHE5YCnF0ms6pxJxVtOQQEMI4DEuovPiUO3rwntqS20&s=10", name: "انتريه فاخر", price: "3000" },
        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzxKV0LyeblnhCCagyASjT856UJtIJeHLNdA&usqp=CAU", name: "كنبة مريحة", price: "2500" },
        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyeFsqaNfBKl43QuAXEOFjRKSX5_iNYw3P7g&usqp=CAU", name: "كرسي أنيق", price: "1500" },
        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDX0zEQtHapN7Ps0Pg5sMyOHMql4cjZCPz1A&usqp=CAU", name: "طاولة خشبية", price: "2000" },
        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRRmrtyDdG-L5znHE5YCnF0ms6pxJxVtOQQEMI4DEuovPiUO3rwntqS20&s=10", name: "انتريه فار", price: "3000" }
      ],
      [
        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRRmrtyDdG-L5znHE5YCnF0ms6pxJxVtOQQEMI4DEuovPiUO3rwntqS20&s=10", name: "طاولة طعام", price: "3500" },
        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRRmrtyDdG-L5znHE5YCnF0ms6pxJxVtOQQEMI4DEuovPiUO3rwntqS20&s=10", name: "طاولة زجاجية", price: "2800" },
        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRRmrtyDdG-L5znHE5YCnF0ms6pxJxVtOQQEMI4DEuovPiUO3rwntqS20&s=10", name: "طاولة خشبية", price: "2000" },
        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQsC4Q&usqp=CAU", name: "طاولة رخامية", price: "3200" }
      ],
      [
        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRRmrtyDdG-L5znHE5YCnF0ms6pxJxVtOQQEMI4DEuovPiUO3rwntqS20&s=10", name: "كرسي مودرن", price: "1800" },
        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRRmrtyDdG-L5znHE5YCnF0ms6pxJxVtOQQEMI4DEuovPiUO3rwntqS20&s=10", name: "كرسي جلد", price: "2200" },
        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRRmrtyDdG-L5znHE5YCnF0ms6pxJxVtOQQEMI4DEuovPiUO3rwntqS20&s=10", name: "كرسي خشبي", price: "1400" },
        { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFeC5Q&usqp=CAU", name: "كرسي أنيق", price: "2000" }
      ]
];

const sliders = document.querySelectorAll(".slider");

sliders.forEach((slider, index) => {
  const image = slider.querySelector(".slide-image");
  const productNameEl = slider.querySelector(".product-name");
  const productPriceEl = slider.querySelector(".product-price");
  const prevBtn = slider.querySelector(".backward");
  const nextBtn = slider.querySelector(".forward");
  const addToCartBtn = slider.querySelector(".add-to-cart");

  // إنشاء عنصر لعرض رسالة التأكيد
  const messageEl = document.createElement("p");
  messageEl.classList.add("cart-message");
  slider.appendChild(messageEl);

  let currentImage = 0;
  const products = productsList[index];

  function showImage() {
    image.src = products[currentImage].img;
    productNameEl.textContent = products[currentImage].name;
    productPriceEl.textContent = products[currentImage].price + " EGP";
  }

  showImage();

  nextBtn.addEventListener("click", function () {
    currentImage = (currentImage + 1) % products.length;
    showImage();
  });

  prevBtn.addEventListener("click", function () {
    currentImage = (currentImage - 1 + products.length) % products.length;
    showImage();
  });

  addToCartBtn.addEventListener("click", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const product = products[currentImage];

    const exists = cart.some(item => item.name === product.name);
    if (!exists) {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      messageEl.textContent = "✅ تم إضافة المنتج إلى السلة";
      messageEl.style.color = "green";
    } else {
      messageEl.textContent = "⚠️ المنتج موجود بالفعل في السلة.";
      messageEl.style.color = "red";
    }

    // إخفاء الرسالة بعد 3 ثوانٍ
    setTimeout(() => {
      messageEl.textContent = "";
    }, 3000);
  });
});

// التحكم في السحب بالماوس واللمس في السلايدر
const slider = document.querySelector(".slider-container");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});

// دعم السحب باللمس على الهاتف
slider.addEventListener("touchstart", (e) => {
  isDown = true;
  startX = e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("touchend", () => {
  isDown = false;
});

slider.addEventListener("touchmove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.touches[0].pageX - slider.offsetLeft;
  const walk = (x - startX) * 1.5;
  slider.scrollLeft = scrollLeft - walk;
});

// التحكم في السلة الجانبية
const cartButton = document.getElementById("cartButton");
const cartDrawer = document.getElementById("cartDrawer");
const closeCartDrawer = document.getElementById("closeCartDrawer");

cartButton.addEventListener("click", () => {
  cartDrawer.classList.add("open");
  loadCart();
});

closeCartDrawer.addEventListener("click", () => {
  cartDrawer.classList.remove("open");
});

// تحميل السلة من localStorage
function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  displayCartItems(cartItems);
}

// عرض محتويات السلة
function displayCartItems(cartItems) {
  const cartItemsContainer = document.getElementById("cartItemsContainer");
  cartItemsContainer.innerHTML = "";

  let total = 0;
  cartItems.forEach((item, index) => {
    const quantity = item.quantity || 1;
    const itemPrice = parseInt(item.price) * quantity;

    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";

    itemDiv.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div class="cart-item-details">
        <h4>${item.name}</h4>
        <p>سعر الوحدة: ${item.price} جنيه</p>
        <p>الكمية: ${quantity}</p>
      </div>
      <div class="cart-item-actions">
        <button class="plus-btn" data-index="${index}">+</button>
        <button class="min-btn" data-index="${index}">-</button>
        <button class="remove-btn" data-index="${index}">x</button>
      </div>
    `;
    cartItemsContainer.appendChild(itemDiv);

    total += itemPrice;
  });

  document.getElementById("cartTotalPrice").textContent = "Total: " + total + " EGP";
}

// زر حذف الكل
document.getElementById("clearCart").addEventListener("click", () => {
  localStorage.removeItem("cart");
  displayCartItems([]);
});

// زر حجز
document.getElementById("bookNow").addEventListener("click", () => {
  alert("تم إرسال طلب الحجز!");
});

// التعامل مع أزرار (+) و (-) و (x) في السلة
document.getElementById("cartItemsContainer").addEventListener("click", (e) => {
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  if (e.target.classList.contains("plus-btn")) {
    const idx = e.target.getAttribute("data-index");
    cartItems[idx].quantity = (cartItems[idx].quantity || 1) + 1;
    localStorage.setItem("cart", JSON.stringify(cartItems));
    displayCartItems(cartItems);
  } else if (e.target.classList.contains("min-btn")) {
    const idx = e.target.getAttribute("data-index");
    if (cartItems[idx].quantity > 1) {
      cartItems[idx].quantity -= 1;
      localStorage.setItem("cart", JSON.stringify(cartItems));
      displayCartItems(cartItems);
    }
  } else if (e.target.classList.contains("remove-btn")) {
    const idx = e.target.getAttribute("data-index");
    cartItems.splice(idx, 1);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    displayCartItems(cartItems);
  }
});
