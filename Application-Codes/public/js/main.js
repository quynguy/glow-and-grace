console.log("js loaded");

const addToCartBtn = document.querySelectorAll('.cart-btn');

function addToCart(event) {
    event.preventdefault();

    const button = event.target;
    const productId = button.dataset.productId;
    const productName = button.parentNode.querySelector('.product-name').innerText;
    const productPrice = button.parentNode.querySelector('.product-price').innerText;

    console.log('Added to cart:', { id: productId, name: productName, price: productPrice });

}

addToCartBtn.forEach(button => {
    button.addEventListener('click', addToCart);
});


function productDetails(event) {
    
}