const menuBtn = document.querySelector(".menu");
const navCloseBtn = document.querySelector(".close");
const mobileNavbar = document.querySelector(".mobile-nav");
let mainImg = document.querySelector(".main-image");
let lightBox = document.querySelector(".lightbox");
let lbCloseBtn = document.querySelector(".close-lb");
let thumbnail = document.querySelectorAll(".thumbnail");
let lbThumbnail = document.querySelectorAll(".thumbnail-lb");
let lbMain = document.querySelector(".main-image-lb");
let cartBtn = document.querySelector(".cart");
let cartDisplay = document.querySelector(".cart-items");
let numToggle = document.querySelector(".number-toggle");
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let quantity = document.querySelector(".quantity");
let addToCart = document.querySelector(".cart-button");
let spanNum = document.querySelector(".cart-num-nav");
let deleteBtn = document.querySelector(".delete");
let amtOnCart = document.querySelector(".amt-on-cart");
let totalText = document.querySelector(".total");

let cartOpen = false;

menuBtn.addEventListener("click",() => {
    mobileNavbar.style.display = "block";
});

navCloseBtn.addEventListener("click", () => {
    mobileNavbar.style.display = "none";
})

mainImg.addEventListener("click", () => {
    lightBox.style.display = "flex";
})

lbCloseBtn.addEventListener("click", () => {
    lightBox.style.display = "none";
})

thumbnail.forEach((item, index) => {
    item.addEventListener("click", () => {
        let imgSrc = thumbnail[index].src;
        mainImg.src = imgSrc;
    })
})

lbThumbnail.forEach((item, index) => {
    item.addEventListener("click", () => {
        let imgSrcLb = lbThumbnail[index].src;
        lbMain.src = imgSrcLb;
    })
})

cartBtn.addEventListener("click", () => {
    if (cartOpen == false) {
        cartDisplay.style.display = "block";
        cartOpen = true;
    }

    else {
        cartDisplay.style.display = "none";
        cartOpen = false;
    }

})

plus.addEventListener("click", () => {
    let currentValue = parseInt(quantity.innerText, 10);
    if(currentValue >= 0){
        quantity.innerText = (currentValue + 1).toString();
    }
})

minus.addEventListener("click", () => {
    let currentValue = parseInt(quantity.innerText, 10);
    if (currentValue > 0) {
        quantity.innerText = (currentValue - 1).toString();
    }
})

addToCart.addEventListener("click", () => {
    let quantityValue = parseInt(quantity.innerText, 10);
    let total = 125 * quantityValue;
    spanNum.innerText = quantityValue.toString();
    amtOnCart.innerText = quantityValue.toString();
    totalText.innerText = `$${total}`
    totalText.style.color = "hsl(220, 13%, 13%)";
    totalText.style.fontWeight = "700";

})

deleteBtn.addEventListener("click", () => {
    cartDisplay.innerText = "Your cart is empty";
    cartDisplay.style.fontWeight = "700";
    cartDisplay.style.color = "hsl(219, 9%, 45%)";
    cartDisplay.style.textAlign = "center";
    spanNum.innerText = "0";
    quantity.innerText = "0";
})