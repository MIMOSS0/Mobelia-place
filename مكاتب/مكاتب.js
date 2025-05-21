
  window.addEventListener("load", function () {
    const loader = document.getElementById("loading-screen");
    loader.style.display = "none";
  });

const productsList = [
  {
    imgs: ["../image/مكاتب/مكاتب١.webp"],
    name: "M001 مكتب",
    price: "2500"
  },
  {
    imgs: ["../image/مكاتب/مكاتب٢.webp"],
    name: "M002 مكتب",
    price: "2800"
  },
  {
    imgs: ["../image/مكاتب/مكاتب٣.webp"],
    name: "M003 مكتب",
    price: "2500"
  },
   {
    imgs: ["../image/مكاتب/مكاتب٤.webp"],
    name: "M004 مكتب",
    price: "2000"
  }, 
   {
    imgs: ["../image/مكاتب/مكاتب٥.webp"],
    name: "M005 مكتب",
    price: "2800"
  },
   {
    imgs: ["../image/مكاتب/مكاتب٦.webp"],
    name: "M006 مكتب",
    price: "3000"
  },
   {
    imgs: ["../image/مكاتب/مكاتب٧.webp"],
    name: "M007 مكتب",
    price: "2800"
  },
   {
    imgs: ["../image/مكاتب/مكاتب٨.webp"],
    name: "M008 مكتب",
    price: "3000"
  },
   {
    imgs: ["../image/مكاتب/مكاتب٩.webp"],
    name: "M009 مكتب",
    price: "2800"
  },
   {
    imgs: ["../image/مكاتب/مكاتب١٠.webp"],
    name: "M010 مكتب",
    price: "2500"
  },
   {
    imgs: ["../image/مكاتب/مكاتب١١.webp"],
    name: "M011 مكتب",
    price: "2500"
  },
   {
    imgs: ["../image/مكاتب/مكاتب١٢.webp"],
    name: "M012 مكتب",
    price: "2000"
  },
   {
    imgs: ["../image/مكاتب/مكاتب١٣.webp"],
    name: "M013 مكتب",
    price: "3500"
  },
   {
    imgs: ["../image/مكاتب/مكاتب١٤.webp"],
    name: "M014 مكتب",
    price: "1500"
  },
   {
    imgs: ["../image/مكاتب/مكاتب١٥.webp"],
    name: "M015 مكتب",
    price: "2500"
  },
   {
    imgs: ["../image/مكاتب/مكاتب١٦.webp"],
    name: "M016 مكتب",
    price: "2500"
  },
   {
    imgs: ["../image/مكاتب/مكاتب١٧.webp"],
    name: "M017 مكتب",
    price: "1500"
  },
   {
    imgs: ["../image/مكاتب/مكاتب١٨.webp"],
    name: "M018 مكتب",
    price: "2000"
  },
   {
    imgs: ["../image/مكاتب/مكاتب١٩.webp"],
    name: "M019 مكتب",
    price: "4200"
  },
   {
    imgs: ["../image/مكاتب/مكاتب٢٠.webp"],
    name: "M020 مكتب",
    price: "6500"
  },
   {
    imgs: ["../image/مكاتب/مكاتب٢١.webp"],
    name: "M021 مكتب",
    price: "3000"
  },
   {
    imgs: ["../image/مكاتب/مكاتب٢٢.webp"],
    name: "M022 مكتب",
    price: "4800"
  },
   {
    imgs: ["../image/مكاتب/مكاتب٢٣.webp"],
    name: "M023 مكتب",
    price: "5200"
  },
   {
    imgs: ["../image/مكاتب/مكاتب٢٤.webp"],
    name: "M024 مكتب",
    price: "3000"
  },
   {
    imgs: ["../image/مكاتب/مكاتب٢٥.webp"],
    name: "M025 مكتب",
    price: "3000"
  },
   {
    imgs: ["../image/مكاتب/مكاتب٢٦.webp"],
    name: "M026 مكتب",
    price: "2500"
  },
   {
    imgs: ["../image/مكاتب/مكاتب٢٧.webp"],
    name: "M027 مكتب",
    price: "2500"
  },
   {
    imgs: ["../image/مكاتب/مكاتب٢٨.webp"],
    name: "M028 مكتب",
    price: "2800"
  },
   {
    imgs: ["../image/مكاتب/مكاتب٢٩.webp"],
    name: "M029 مكتب",
    price: "2500"
  }
];




const sliders = document.querySelectorAll(".slider");

sliders.forEach((slider, index) => {
  const image = slider.querySelector(".slide-image");
  const productNameEl = slider.querySelector(".product-name");
  const productPriceEl = slider.querySelector(".product-price");
  
  const addToCartBtn = slider.querySelector(".add-to-cart");

  let currentImage = 0;
  const product = productsList[index]; // لكل نموذج منتج واحد
  const totalImages = product.imgs.length;

  function showImage() {
    image.src = product.imgs[currentImage];
    productNameEl.textContent = product.name;
    productPriceEl.textContent = product.price + " EGP";
  }

  showImage();

  

  addToCartBtn.addEventListener("click", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    // عند الإضافة نستخدم الصورة الحالية المُعرضة
    const productToAdd = {
      name: product.name,
      price: product.price,
      img: product.imgs[currentImage],
      quantity: 1
    };
    function showMessage(btn, msg, color = "#28a745") {
  // التحقق مما إذا كانت رسالة موجودة بالفعل
  let existingMessage = btn.parentElement.querySelector('.temp-message');
  if (existingMessage) return; // إذا وجدت، لا نقوم بإضافة رسالة جديدة

  const messageEl = document.createElement("div");
  messageEl.classList.add("temp-message");
  messageEl.textContent = msg;
  messageEl.style.fontSize = "14px";
  messageEl.style.color = color;
  messageEl.style.marginTop = "5px";
  messageEl.style.textAlign = "center";
  btn.parentElement.appendChild(messageEl);
  
  setTimeout(() => {
    messageEl.remove();
  }, 3000);
}


    // نتحقق من وجود المنتج مسبقاً باستخدام الاسم
    const exists = cart.some(item => item.name === productToAdd.name);
if (!exists) {
  cart.push(productToAdd);
  localStorage.setItem("cart", JSON.stringify(cart));
  showMessage(addToCartBtn, "✅ تم إضافة المنتج إلى السلة ", "#28a745");
} else {
  showMessage(addToCartBtn, "⚠️ المنتج موجود بالفعل في السلة.", "#dc3545");
}


  });
});

// ------------ كود السلة (Cart) ------------

// ------------ كود السلة (Cart) ------------// const cartButton = document.getElementById("cartButton");
const cartDrawer = document.getElementById("cartDrawer");
const closeCartDrawer = document.getElementById("closeCartDrawer");
const bookNowButton = document.getElementById("bookNow");
const confirmOrderButton = document.getElementById("confirmOrder");
const customerInfoDiv = document.getElementById("customerInfo");
const customerName = document.getElementById("customerName");
const customerPhone = document.getElementById("customerPhone");
const customerAddress = document.getElementById("customerAddress");
const overlay = document.getElementById("overlay");

// فتح السلة
cartButton.addEventListener("click", () => {
    cartDrawer.classList.add("open");
    overlay.style.display = "block"; // تفعيل الخلفية الشفافة
    loadCart();
});

// إغلاق السلة بزر X
closeCartDrawer.addEventListener("click", closeCart);

// إغلاق السلة عند الضغط خارجها
overlay.addEventListener("click", closeCart);

// دالة إغلاق السلة وإعادة ضبط النموذج
function closeCart() {
    cartDrawer.classList.remove("open");
    overlay.style.display = "none"; // إزالة الخلفية الشفافة
    customerInfoDiv.style.display = "none";
    bookNowButton.style.display = "block";
    confirmOrderButton.style.display = "none";
}

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

// التعامل مع أزرار (+) و (-) و (x) دون إغلاق السلة
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

// زر حذف الكل
document.getElementById("clearCart").addEventListener("click", () => {
    localStorage.removeItem("cart");
    displayCartItems([]);
});

// زر حجز
bookNowButton.addEventListener("click", () => {
    customerInfoDiv.style.display = "block";
    bookNowButton.style.display = "none";
    confirmOrderButton.style.display = "block";
});

// إظهار رسالة الخطأ بدلاً من alert()
function showError(message) {
    let errorDiv = document.getElementById("errorMessage");

    if (!errorDiv) {
        errorDiv = document.createElement("div");
        errorDiv.id = "errorMessage";
        errorDiv.className = "error-message";
        document.body.appendChild(errorDiv);
    }

    errorDiv.textContent = message;
    errorDiv.style.display = "block";

    setTimeout(() => {
        errorDiv.style.display = "none";
    }, 3000);
}

// تأكيد الطلب
confirmOrderButton.addEventListener("click", () => {
    const name = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("customerPhone").value.trim();
    const address = document.getElementById("customerAddress").value.trim();

    if (!customerName.value || !customerPhone.value || !customerAddress.value) {
        showError("يرجى ملء جميع البيانات قبل تأكيد الطلب!");
        return;
    }

    sendWhatsAppOrder();
});

// إرسال الطلب عبر واتساب
function sendWhatsAppOrder() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    if (cartItems.length === 0) {
        showError("السلة فارغة!");
        return;
    }

let message = " *طلب جديد من المتجر:*\n\n";
    let total = 0;

    cartItems.forEach((item) => {
        const quantity = item.quantity || 1;
        const itemPrice = parseInt(item.price) * quantity;
        total += itemPrice;

        message += ` *${item.name}*\n`;
        message += ` السعر: ${item.price} جنيه\n`;
        message += ` الكمية: ${quantity}\n`;
        message += ` الإجمالي: ${itemPrice} جنيه\n`;
        message += `--------------------------\n`;
    });

    message += `\n *الإجمالي الكلي:* ${total} جنيه\n\n`;
    message += ` *معلومات العميل:*\n`;
    message += ` *الاسم:* ${customerName.value}\n`;
    message += ` *رقم الهاتف:* ${customerPhone.value}\n`;
    message += ` *العنوان:* ${customerAddress.value}\n`;

    const phoneNumber = "201008957009";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");

    localStorage.removeItem("cart");
    displayCartItems([]);
    closeCart();
}

// ------------ كود تفاصيل (Details) مع انيميشن لكل عنصر ------------
document.querySelectorAll("details.t1").forEach(details => {
  const summary = details.querySelector("summary");
  const content = details.querySelector("p");
  content.style.overflow = "hidden";
  content.style.height = "0px";
  content.style.opacity = "0";
  
  const duration = 300;
  
  function animateContent(fromHeight, toHeight, fromOpacity, toOpacity, callback) {
    const startTime = performance.now();
    function animate(currentTime) {
      let elapsed = currentTime - startTime;
      if (elapsed > duration) elapsed = duration;
      const progress = elapsed / duration;
      const currentHeight = fromHeight + (toHeight - fromHeight) * progress;
      const currentOpacity = fromOpacity + (toOpacity - fromOpacity) * progress;
      content.style.height = currentHeight + "px";
      content.style.opacity = currentOpacity;
      if (elapsed < duration) {
        requestAnimationFrame(animate);
      } else {
        if (callback) callback();
      }
    }
    requestAnimationFrame(animate);
  }
  
  summary.addEventListener("click", function(e) {
    e.preventDefault();
    if (details.hasAttribute("open")) {
      const currentHeight = content.scrollHeight;
      animateContent(currentHeight, 0, 1, 0, function(){
        details.removeAttribute("open");
        content.style.height = "0px";
      });
    } else {
      details.setAttribute("open", "");
      content.style.height = "auto";
      const fullHeight = content.scrollHeight;
      content.style.height = "0px";
      animateContent(0, fullHeight, 0, 1, function(){
        content.style.height = "auto";
      });
    }
  });
});



function scrolltoup() {
    window.scrollTo({
        top: document.body.scrollHeight / 0,
        behavior: "smooth"
    });
}
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("details").forEach((detail) => {
        detail.addEventListener("toggle", function () {
            if (this.open) {
                this.animate([{ height: "0px" }, { height: this.scrollHeight + "px" }], { duration: 1000, easing: "ease-out" });
            }            
        });
    });
});
