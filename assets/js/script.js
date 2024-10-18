let carrito = []

const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToShoppingCartButtons) => {
    addToShoppingCartButtons.addEventListener('click', addToCartClicked);
});

const containerCartProducts = document.querySelector('.container-cart-products');


function addToCartClicked(event) {
    const button = event.target;
    const product = button.closest('.product');

    console.log(product.id)

    const productTitle = product.querySelector('.title').textContent;
    const productPrice = product.querySelector('.price').textContent;

    let myProduct = {
        id: product.id,
        title: productTitle,
        price: productPrice,
        quantity: 1
    }

    //Debo preguntar si el producto ya existe en el carrito
    const productFound = carrito.find(product => product.id == myProduct.id)
    if (productFound == undefined) {

        carrito.push(myProduct)

        addProductToShoppingCart(productTitle, productPrice, myProduct.id);
    } else {
        productFound.quantity += 1

        document.getElementById('prod_' + productFound.id).innerHTML = productFound.quantity

    }

    document.getElementById('contador-productos').innerHTML = carrito.length

}

function addProductToShoppingCart(productTitle, productPrice, id) {
    const shoppingCartRow = document.createElement('div');
    const shoppingCartContent =
        `<div class="cart-product">
                    <div class="info-cart-product">
                        <span  id="prod_${id}" class="shopping-cart-quantity"> 1 </span>
                        <p class="title-cart"> ${productTitle} </p>
                        <span class="price-product-cart"> ${productPrice} </span>
                    </div>

                    <ion-icon class="icon-remove" name="trash"></ion-icon>
             </div>`;


    shoppingCartRow.innerHTML = shoppingCartContent;
    containerCartProducts.append(shoppingCartRow);

    updateShoppingCartTotal()

}

function updateShoppingCartTotal() {
    let total = 0;
    const cartTotal = document.querySelector('.total-pay');
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const shoppingCartPrice = product.querySelector('.price');

        const shoppingCartPriceNumber = Number(shoppingCartPrice.textContent.replace('$', ' '));


    });

}