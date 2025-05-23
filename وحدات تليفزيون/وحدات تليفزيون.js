
  window.addEventListener("load", function () {
    const loader = document.getElementById("loading-screen");
    loader.style.display = "none";
  });

 const productsList = [
 {
    imgs: ["../image/تليفزيون/وحدة١٢.webp"],
    name: "C01 وحدة تليفزيون",
    price: "1800"
  },
  {
    imgs: ["../image/تليفزيون/وحدة١٤.webp"],
    name: "C02 وحدة تليفزيون",
    price: "1500"
  },
  {
    imgs: ["../image/تليفزيون/وحدة١٦.webp"],
    name: "C03 وحدة تليفزيون",
    price: "1200"
  },
  {
    imgs: ["../image/تليفزيون/وحدة١٧.webp"],
    name: "C04 وحدة تليفزيون",
    price: "2000"
  },

   {
    imgs: ["../image/تليفزيون/وحدة٢٨.webp"],
    name: "C05 وحدة تليفزيون",
    price: "3000"
  },
   {
    imgs: ["../image/تليفزيون/وحدة٢٩.webp"],
    name: "C06 وحدة تليفزيون",
    price: "2800"
  },
  {
    imgs: ["../image/تليفزيون/وحدة٣.webp"],
    name: "C07 وحدة تليفزيون",
    price: "2000"
  },
   
   {
    imgs: ["../image/تليفزيون/وحدة٧.webp"],
    name: "C08 وحدة تليفزيون",
    price: "1500"
  },
   {
    imgs: ["../image/تليفزيون/وحدة٩.webp"],
    name: "C09 وحدة تليفزيون",
    price: "1500"
  },
   {
    imgs: ["../image/تليفزيون/وحدة١٠.webp"],
    name: "C10 وحدة تليفزيون",
    price: "5000"
  },
   {
    imgs: ["../image/تليفزيون/وحدة١١.webp"],
    name: "C11 وحدة تليفزيون",
    price: "1800"
  },
   
   {
    imgs: ["../image/تليفزيون/١٢.webp" ],
    name: "C12 وحدة تليفزيون",
    price: "1800"
  },
   
   {
    imgs: [ "../image/تليفزيون/١٦.webp"],
    name: "C13 وحدة تليفزيون",
    price: "1500"
  },
   
   
   {
    imgs: ["../image/تليفزيون/وحدة١٨.webp"],
    name: "C14 وحدة تليفزيون",
    price: "1500"
  },
   
 
  
   {
    imgs: ["../image/تليفزيون/وحدة٣٠.webp"],
    name: "C15 وحدة تليفزيون",
    price: "2500"
  },
   {
    imgs: ["../image/تليفزيون/وحدة٣١.webp"],
    name: "C16 وحدة تليفزيون",
    price: "2500"
  },
   {
    imgs: ["../image/تليفزيون/وحدة٣٢.webp"],
    name: "C17 وحدة تليفزيون",
    price: "2200"
  },
   {
    imgs: ["../image/تليفزيون/وحدة٣٣.webp"],
    name: "C18 وحدة تليفزيون",
    price: "3000"
  },
   {
    imgs: ["../image/تليفزيون/وحدة٣٤.webp"],
    name: "C19 وحدة تليفزيون",
    price: "3000"
  },
  
  
  
  
  
 /*  طقم ليفينج */
  
  {
    imgs: ["../image/تليفزيون/وحدة٢٥.webp"],
    name: "J001 طقم ليفينج",
    price: "3000"
  } ,
    {
    imgs: ["../image/تليفزيون/وحدة١٩.webp"],
    name: "J002 طقم ليفينج",
    price: "3000"
  },
  {
    imgs: ["../image/تليفزيون/وحدة٤.webp"],
    name: "J003 طقم ليفينج",
    price: "3000"
  }, 
    {
    imgs: ["../image/تليفزيون/وحدة٢٠.webp"],
    name: "J004 طقم ليفينج",
    price: "3000"
  },
   {
    imgs: ["../image/تليفزيون/وحدة٢١.webp"],
    name: "J005 طقم ليفينج",
    price: "3000"
  },
   {
    imgs: ["../image/تليفزيون/وحدة٢٤.webp"],
    name: "J006 طقم ليفينج",
    price: "3000"
  },
   
   {
    imgs: ["../image/تليفزيون/وحدة٢٦.webp"],
    name: "J007 طقم ليفينج",
    price: "3000"
  },
   {
    imgs: ["../image/تليفزيون/وحدة٢٧.webp"],
    name: "J008 طقم ليفينج",
    price: "3000"
  }
];




const sliders = document.querySelectorAll(".slider");

sliders.forEach((slider, index) => {
    if (index >= productsList.length) {
        console.warn(`لم يتم العثور على منتج لهذا السلايدر رقم ${index}`);
        return; // تخطي هذا السلايدر إذا لم يكن هناك منتج مطابق
    }

    const image = slider.querySelector(".slide-image");
    const productNameEl = slider.querySelector(".product-name");
    const productPriceEl = slider.querySelector(".product-price");
    const prevBtn = slider.querySelector(".backward");
    const nextBtn = slider.querySelector(".forward");
    const addToCartBtn = slider.querySelector(".add-to-cart");

    let currentImage = 0;
    const product = productsList[index];

    if (!product || !product.imgs || product.imgs.length === 0) {
        console.error(`خطأ في تحميل بيانات المنتج للسلايدر ${index}`);
        return;
    }

    function showImage() {
        image.src = product.imgs[currentImage];
        productNameEl.textContent = product.name;
        productPriceEl.textContent = product.price + " EGP";
    }

    showImage();

    nextBtn?.addEventListener("click", function () {
        currentImage = (currentImage + 1) % product.imgs.length;
        showImage();
    });

    prevBtn?.addEventListener("click", function () {
        currentImage = (currentImage - 1 + product.imgs.length) % product.imgs.length;
        showImage();
    });

    addToCartBtn?.addEventListener("click", function () {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const productToAdd = {
            name: product.name,
            price: product.price,
            img: product.imgs[currentImage],
            quantity: 1
        };

        function showMessage(btn, msg, color = "#28a745") {
            let existingMessage = btn.parentElement.querySelector('.temp-message');
            if (existingMessage) return;

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

        const exists = cart.some(item => item.name === productToAdd.name);
        if (!exists) {
            cart.push(productToAdd);
            localStorage.setItem("cart", JSON.stringify(cart));
            showMessage(addToCartBtn, "✅ تم إضافة المنتج إلى السلة", "#28a745");
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







function scrollToMid() {
    window.scrollTo({
        top: document.body.scrollHeight / 1.438,
        behavior: "smooth"
    });
}

window.addEventListener("scroll", function () {
    let scrollBtn = document.getElementById("scrollBtn");
    let scrollY = window.scrollY || window.pageYOffset;
    let threshold = document.body.scrollHeight / 1.48; // النقطة التي نحددها

    if (scrollY >= threshold) {
        scrollBtn.classList.add("hidden"); // إخفاء الزر
    } else {
        scrollBtn.classList.remove("hidden"); // إظهاره عند الصعود
    }
});
