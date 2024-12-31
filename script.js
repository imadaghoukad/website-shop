const cartCountElement = document.querySelector('.cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        let currentCount = parseInt(cartCountElement.textContent);
        currentCount++;
        cartCountElement.textContent = currentCount;
    });
});