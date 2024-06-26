document.addEventListener('DOMContentLoaded', () => {
    const decreaseButtons = document.querySelectorAll('.decrease');
    const increaseButtons = document.querySelectorAll('.increase');
    const quantitySpans = document.querySelectorAll('.quantity-number');
    const verzekeringCheckbox = document.getElementById('verzekering');
    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('total');

    const prices = [599, 51, 570, 599, 239, 3159]; 
    const verzekeringPrice = 89.99;

    function updatePrices() {
        let subtotal = 0;
        quantitySpans.forEach((span, index) => {
            subtotal += prices[index] * parseInt(span.textContent);
        });
        const total = subtotal + (verzekeringCheckbox.checked ? verzekeringPrice : 0);
        subtotalElement.textContent = `€ ${subtotal.toFixed(2)}`;
        totalElement.textContent = `€ ${total.toFixed(2)} incl. BTW`;
    }

    decreaseButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            let quantity = parseInt(quantitySpans[index].textContent);
            if (quantity > 1) {
                quantity--;
                quantitySpans[index].textContent = quantity;
                updatePrices();
            }
        });
    });

    increaseButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            let quantity = parseInt(quantitySpans[index].textContent);
            quantity++;
            quantitySpans[index].textContent = quantity;
            updatePrices();
        });
    });

    verzekeringCheckbox.addEventListener('change', () => {
        updatePrices();
    });

    updatePrices();
});

