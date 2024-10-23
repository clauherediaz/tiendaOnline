let carrito = []

const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToShoppingCartButtons) => {
    addToShoppingCartButtons.addEventListener('click', addToCartClicked);
});

const containerCartProducts = document.querySelector('.container-cart-products');


function addToCartClicked(event) {
    const button = event.target;
    const product = button.closest('.product');



    const productTitle = product.querySelector('.title').textContent;
    const productPrice = product.querySelector('.price').textContent.replace('$', '');


    let myProduct = {
        id: product.id,
        title: productTitle,
        price: parseInt(productPrice),
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
        ShoppingCartTotal()

    }
    document.getElementById('contador-productos').innerHTML = carrito.length


}

// Inyectando cart

function addProductToShoppingCart(productTitle, productPrice, id) {
    const shoppingCartRow = document.createElement('div');
    const shoppingCartContent =
        `<div class="cart-product">
                    <div class="info-cart-product">
                        <span  id="prod_${id}" class="shopping-cart-quantity"> 1 </span>
                        <p class="title-cart"> ${productTitle} </p>
                        <span class="price-product-cart"> $${productPrice} </span>
                    </div>

                    <ion-icon class="icon-remove" onclick="deleteProduct(${id})" name="trash"></ion-icon>
             </div>`;


    shoppingCartRow.innerHTML = shoppingCartContent;
    containerCartProducts.append(shoppingCartRow);

    ShoppingCartTotal()
}


function deleteProduct(id) {

    let index = carrito.findIndex(product => {
        return product.id == id
    })
    carrito.splice(index, 1)
    const element = document.querySelectorAll('.cart-product')
    element.forEach(item => {
        item.parentNode.removeChild(item)
    })
    carrito.forEach(product => {
        addProductToShoppingCart(product.title, product.price, product.id)
    })
    ShoppingCartTotal()
    document.getElementById('contador-productos').innerHTML = carrito.length


}



// probando sumar total

function ShoppingCartTotal() {
    let total = 0;

    const cartTotal = document.querySelector('.total-pay');



    total = carrito.reduce((total, product) => {
        console.log(product.price)
        console.log(product.quantity)
        console.log(total)

        console.log((parseInt(product.price) * parseInt(product.quantity)))
        return total + (product.price * product.quantity);

    }, 0);


    cartTotal.innerHTML = `$${total}`;

}