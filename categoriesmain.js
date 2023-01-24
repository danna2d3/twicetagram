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








