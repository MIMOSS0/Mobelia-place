
  window.addEventListener("load", function () {
    const loader = document.getElementById("loading-screen");
    loader.style.display = "none";
  });



// ------------ كود الـ Slider والمنتجات (لكل نموذج منتج واحد بثلاث صور) ------------
const productsList = [  
  {
    imgs: [
       "../image/سرير/سرير مع كمود/١.webp",      
    ],
    name: "B001 سرير مع كمود",
    price: "10500"
  },  {
    imgs: [
      "../image/سرير/سرير مع كمود/٢.webp",      
    ],
    name: "B002 سرير مع كمود",
    price: "10900"
  },  {
    imgs: [
      "../image/سرير/سرير مع كمود/٣.webp",      
    ],
    name: "B003 سرير مع كمود",
    price: "14000"
  },  {
    imgs: [
      "../image/سرير/سرير مع كمود/٤.webp",      
    ],
    name: "B004 سرير مع كمود",
    price: "9500"
  },  {
    imgs: [
      "../image/سرير/سرير مع كمود/٥.webp",      
    ],
    name: "B005  سرير مع كمود",
    price: "10500"
  },  {
    imgs: [
      "../image/سرير/سرير مع كمود/٦.webp",      
    ],
    name: "B006 سرير مع كمود",
    price: "10000"
  },  {
    imgs: [
      "../image/سرير/سرير مع كمود/٧.webp",      
    ],
    name: "B007 سرير مع كمود",
    price: "11500"
  },  {
    imgs: [
      "../image/سرير/سرير مع كمود/٨.webp",      
    ],
    name: "B008 سرير مع كمود",
    price: "12000"
  },  {
    imgs: [
      "../image/سرير/سرير مع كمود/٩.webp",      
    ],
    name: "B009 سرير مع كمود",
    price: "14600"
  },  {
    imgs: [
      "../image/سرير/سرير مع كمود/١٠.webp",      
    ],
    name: "B010 سرير مع كمود",
    price: "11400"
  },  {
    imgs: [
      "../image/سرير/سرير مع كمود/١١.webp",      
    ],
    name: "B011 سرير مع كمود",
    price: "10200"
  },  {
    imgs: [
      "../image/سرير/سرير مع كمود/١٢.webp",      
    ],
    name: "B012 سرير مع كمود",
    price: "11000"
  },  {
    imgs: [
      "../image/سرير/سرير مع كمود/١٣.webp",      
    ],
    name: "B013 سرير مع كمود",
    price: "10800"
  },  {
    imgs: [
      "../image/سرير/سرير مع كمود/١٤.webp",      
    ],
    name: "B014 سرير مع كمود",
    price: "9700"
  },  {
    imgs: [
      "../image/سرير/سرير مع كمود/١٥.webp",      
    ],
    name: "B015 سرير مع كمود",
    price: "10800"
  },  {
    imgs: [
      "../image/سرير/سرير مع كمود/١٦.webp",      
    ],
    name: "B016 سرير مع كمود",
    price: "12600"
  },  {
    imgs: [
      "../image/سرير/سرير مع كمود/١٧.webp",      
    ],
    name: "B017 سرير مع كمود",
    price: "11000"
  },  {
    imgs: [
      "../image/سرير/سرير مع كمود/١٨.webp",      
    ],
    name: "B018 سرير مع كمود",
    price: "11400"
  },  {
    imgs: [
      "../image/سرير/سرير مع كمود/١٩.webp",      
    ],
    name: "B019 سرير مع كمود",
    price: "11800"
  },  {
    imgs: [
      "../image/سرير/سرير مع كمود/٢٠.webp",      
    ],
    name: "B020 سرير مع كمود",
    price: "12800"
  },
  
  
  
  
  
  
  
  
  
  
  /*   سرير فقط */ 
  
  
  
    {
    imgs: [
      "../image/سرير/سرير فقط/١.webp",      
    ],
    name: "B01 سرير",
    price: "5500"
  },
  {
    imgs: [
      "../image/سرير/سرير فقط/٢.webp",      
    ],
    name: "B02 سرير",
    price: "5900"
  },{
    imgs: [
      "../image/سرير/سرير فقط/٣.webp",      
    ],
    name: "B03 سرير",
    price: "6500"
  },{
    imgs: [
      "../image/سرير/سرير فقط/٤.webp",      
    ],
    name: "B04 سرير",
    price: "5800"
  },{
    imgs: [
      "../image/سرير/سرير فقط/٥.webp",      
    ],
    name: "B05 سرير",
    price: "6000"
  },{
    imgs: [
      "../image/سرير/سرير فقط/٦.webp",      
    ],
    name: "B06 سرير",
    price: "6300"
  },{
    imgs: [
      "../image/سرير/سرير فقط/٧.webp",      
    ],
    name: "B07 سرير",
    price: "7000"
  },{
    imgs: [
      "../image/سرير/سرير فقط/٨.webp",      
    ],
    name: "B08 سرير",
    price: "6100"
  },{
    imgs: [
      "../image/سرير/سرير فقط/٩.webp",      
    ],
    name: "B09 سرير",
    price: "5500"
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





function scrollToMid() {
    window.scrollTo({
        top: document.body.scrollHeight / 1.47,
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
