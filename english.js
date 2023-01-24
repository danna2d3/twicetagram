const productList = [];
productList.push({
    name: 'More & More (English Ver.)',
    price: 'More & More (English Ver.)',
    image: 'https://lh3.googleusercontent.com/7CMvKTwzJD1N_IpecIdcziu1T1egtdQpalN4xF11fk3iRfZ8spjuUNtyE8m5mN-05oy-RT3UCOgPPJ4=w544-h544-l90-rj',
    descrip: 'Title',
});
productList.push({
    name: 'I Can’t Stop Me (English Ver.)',
    price: 'I Can’t Stop Me (English Ver.)',
    image: 'https://lh3.googleusercontent.com/R7ED-_31TfmOG0vc-_CTxChUcl4yQaWC32rui_AeoNP-tLuLw8g7jhVag56VNhuNk6McpM4jiURUCHw=w544-h544-l90-rj',
    descrip: 'Title',
});
productList.push({
    name: 'CRY  FOR ME (English Ver.)',
    price: 'CRY  FOR ME (English Ver.)',
    image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/680681ea-76ed-4371-8170-ee2d389a49be/delzd6x-af701cf4-4779-451f-815a-2d66f2566e79.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY4MDY4MWVhLTc2ZWQtNDM3MS04MTcwLWVlMmQzODlhNDliZVwvZGVsemQ2eC1hZjcwMWNmNC00Nzc5LTQ1MWYtODE1YS0yZDY2ZjI1NjZlNzkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hwT6hQPZTOhCqgq_y6S_RWd-jMze6U4zfr-QKpM1BbU',
    descrip: 'Title',
});
productList.push({
    name: 'Formula of Love: O+T=<3',
    price: 'The Feels',
    image: 'https://lh3.googleusercontent.com/lUrFhM76brGznc5g02_XrTtljNci4zJngcg6_MAmtUvMX-AnFAhI9ZZxlLp_kbFqFlxE88_U-z9diO1YgQ=w544-h544-l90-rj',
    descrip: 'Title',
});
productList.push({
    name: 'MOONLIGHT SUNRISE',
    price: 'MOONLIGHT SUNRISE',
    image: 'https://lh3.googleusercontent.com/LAUzE1BJVsLpeZOGSHMhxH88SoymVbaPYyuZlJqOlU8UCfLjE_2UrVz4A28ozAL2OAwlOJYgnMm8kBmx=w544-h544-l90-rj',
    descrip: 'Title',
});
const navEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const titleCloseIcon = document.querySelector(".title-container");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");
const imagen = document.querySelector("#infoImages");
const priceProduct = document.querySelector("#price");
const numberProducts = document.querySelector(".shopping-cart-number");
let contador = 0;


//const mediaQuery = window.matchMedia("(max-width: 640px)");

navEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click",  toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);
titleCloseIcon.addEventListener("click", closeTitleContainer);

function toggleDesktopMenu() {
    const isAsideClose = shoppingCartContainer.classList.contains("inactive");
    const isproductDetailContainer = productDetailContainer.classList.contains("inactive");

    desktopMenu.classList.toggle("inactive");

    if(!isAsideClose){
        shoppingCartContainer.classList.add("inactive");
    }

    if(!isproductDetailContainer){
        productDetailContainer.classList.add("inactive");
    }
// //     // if(!desktopMenu.classList.toggle("inactive")){
// //     //     desktopMenu.classList.remove("inactive");
// //     //  }else{
// //     //     desktopMenu.classList.add("inactive");
// //     //  }

}

function toggleMobileMenu() {
    const isAsideClose = shoppingCartContainer.classList.contains("inactive");

    mobileMenu.classList.toggle("inactive"); //Si esta lo elimina, si no esta lo activa 
    if(!isAsideClose){
        shoppingCartContainer.classList.add("inactive");
    }
    closeProductDetailAside();
}

function toggleCarritoAside(){    
    const isMobileMenuClose =  mobileMenu.classList.contains("inactive");
    const isDesktopMenuClose = desktopMenu.classList.contains("inactive"); 
                                                                          
    const isProductDetailClose = productDetailContainer.classList.contains("inactive");

    shoppingCartContainer.classList.toggle("inactive");
    if(!isMobileMenuClose){ // si esta abierto 
        mobileMenu.classList.add("inactive");
    }

    if(!isDesktopMenuClose){
        desktopMenu.classList.add("inactive")
    }   

    if(!isProductDetailClose){
        productDetailContainer.classList.add("inactive");
    }

    if(!titleCloseIcon){
        titleCloseIcon.classList.add("inactive");
    }
    closeTitleContainer();
}

function openProductDetailAside(event){
    shoppingCartContainer.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    productDetailContainer.classList.remove("inactive");
    desktopMenu.classList.add("inactive");
    imagen.setAttribute("src", event.target.src);
    priceProduct.innerText = event.target.nextElementSibling.innerText;
    numberProducts.innerText = contador += 1;

}

function closeProductDetailAside(){
    productDetailContainer.classList.add("inactive");
}

function closeTitleContainer(){
    titleCloseIcon.classList.add("inactive");
}

function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement("div");
            productCard.classList.add("product-card");

        //product = {name, price, image} -> product.image
        const productImg = document.createElement("img");
            productImg.setAttribute("src", product.image);
            productImg.setAttribute("id", "imagen");
            productImg.addEventListener("click", openProductDetailAside);

        const productInfo = document.createElement("div");
            productInfo.classList.add("product-info");

        const productInfoDiv = document.createElement("div");

        const productInfoPrice = document.createElement("p");
            productInfoPrice.innerText =  product.price;

        const productInfoName = document.createElement("p");
            productInfoName.innerText = product.name;

            productInfoDiv.appendChild(productInfoPrice);
            productInfoDiv.appendChild(productInfoName);

        const productInfofigure = document.createElement("figure");

        const productImgCart = document.createElement("img");
            productImgCart.setAttribute("src", "./149125.png");

        productInfofigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfofigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}
renderProducts(productList);








