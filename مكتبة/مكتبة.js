
  window.addEventListener("load", function () {
    const loader = document.getElementById("loading-screen");
    loader.style.display = "none";
  });




// ------------ كود الـ Slider والمنتجات (لكل نموذج منتج واحد بثلاث صور) ------------
const productsList = [
  {
    imgs: [
      "../image/مكتبة/مكتبة٢٠.jpg",      
    ],
    name: "L001 مكتبة",
    price: "2500"
  },
  {
    imgs: [
      "../image/مكتبة/مكتبة٢.jpg"
      
    ],
    name: "L002 مكتبة",
    price: "1800"
  },
  {
    imgs: [
      "../image/مكتبة/مكتبة٣.jpg"      
    ],
    name: "L003 مكتبة",
    price: "4500"
  },
   {
    imgs: [
      "../image/مكتبة/مكتبة٤.jpg"      
    ],
    name: "L004 مكتبة",
    price: "2500"
  }, 
   {
    imgs: [
      "../image/مكتبة/مكتبة٥.jpg"
    ],
    name: "L005 مكتبة",
    price: "3000"
  },
   {
    imgs: [
      "../image/مكتبة/مكتبة٦.jpg"    
    ],
    name: "L006 مكتبة",
    price: "3000"
  },
   {
    imgs: [
      "../image/مكتبة/مكتبة٧.jpg"      
    ],
    name: "L007 مكتبة",
    price: "2500"
  },
   {
    imgs: [
      "../image/مكتبة/مكتبة٨.jpg"
    ],
    name: "L008 مكتبة",
    price: "3000"
  },
    {
    imgs: [
      "../image/مكتبة/مكتبة٩.jpg",      
    ],
    name: "L009 مكتبة",
    price: "1800"
  },
  {
    imgs: [
      "../image/مكتبة/مكتبة١٠.jpg"
      
    ],
    name: "L010 مكتبة",
    price: "2000"
  },
  {
    imgs: [
      "../image/مكتبة/مكتبة١١.jpg"      
    ],
    name: "L011 مكتبة",
    price: "800"
  },
   {
    imgs: [
      "../image/مكتبة/مكتبة١٢.jpg"      
    ],
    name: "L012 مكتبة",
    price: "2200"
  }, 
   {
    imgs: [
      "../image/مكتبة/مكتبة١٣.jpg"
    ],
    name: "L013 مكتبة",
    price: "3000"
  },
   {
    imgs: [
      "../image/مكتبة/مكتبة١٤.jpg"    
    ],
    name: "L014 مكتبة",
    price: "8500"
  },
   {
    imgs: [
      "../image/مكتبة/مكتبة١٥.jpg"      
    ],
    name: "L015 مكتبة",
    price: "2500"
  },
   {
    imgs: [
      "../image/مكتبة/مكتبة١٦.jpg"
    ],
    name: "L016 مكتبة",
    price: "1200"
  },
    {
    imgs: [
      "../image/مكتبة/مكتبة١٧.jpg"
    ],
    name: "L017 مكتبة",
    price: "2500"
  },
    {
    imgs: [
      "../image/مكتبة/مكتبة١٨.jpg"
    ],
    name: "L018 مكتبة",
    price: "1800"
  },
    {
    imgs: [
      "../image/مكتبة/مكتبة١٩.jpg"
    ],
    name: "L019 مكتبة",
    price: "3000"
  },
   {
    imgs: [
      "../image/مكتبة/مكتبة١.jpg"
    ],
    name: "L020 مكتبة",
    price: "2500"
  }
];

const sliders = document.querySelectorAll(".slider");

sliders.forEach((slider, index) => {
  const image = slider.querySelector(".slide-image");
  const productNameEl = slider.querySelector(".product-name");
  const productPriceEl = slider.querySelector(".product-price");
  const prevBtn = slider.querySelector(".backward");
  const nextBtn = slider.querySelector(".forward"); 
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

    const phoneNumber = "201144504327";
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







