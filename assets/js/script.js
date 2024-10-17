const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToShoppingCartButtons) => {
    addToShoppingCartButtons.addEventListener('click', addToCartClicked);
});

const containerCartProducts = document.querySelector('.container-cart-products');


function addToCartClicked(event) {
    const button = event.target;
    const product = button.closest('.product');

    const productTitle = product.querySelector('.title').textContent;
    const productPrice = product.querySelector('.price').textContent;

    addProductToShoppingCart(productTitle, productPrice);

}

function addProductToShoppingCart(productTitle, productPrice) {
    const shoppingCartRow = document.createElement('div');
    const shoppingCartContent = `<div class="container-cart-products hidden-cart">
                <div class="cart-product">
                    <div class="info-cart-product">
                        <span class="shopping-cart"> 0 </span>
                        <p class="title-cart"> ${productTitle} </p>
                        <span class="price-product-cart"> ${productPrice} </span>
                    </div>

                    <ion-icon class="icon-remove" name="trash"></ion-icon>
                </div>

                <div class="cart-total">
                    <h3>Total:</h3>
                    <span class="total-pay">$6000</span>
                </div>

            </div>`;
    shoppingCartRow.innerHTML = shoppingCartContent;
    containerCartProducts.append(shoppingCartRow);

}