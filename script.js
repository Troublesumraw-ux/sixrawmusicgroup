document.addEventListener("DOMContentLoaded", () => {
    // Base Price of the Stealth Wall Desk
    const BASE_PRICE = 500; 
    
    // Find the checkout button or a price indicator element to display updates
    const productCard = document.querySelector('.product-customizer')?.parentElement;
    const actionButton = productCard?.querySelector('button, a');
    
    const checkboxes = document.querySelectorAll(".customizer-option");

    function updateCalculatedPrice() {
        let addonTotal = 0;
        
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                addonTotal += parseFloat(checkbox.value);
            }
        });
        
        const finalPrice = BASE_PRICE + addonTotal;
        
        // Dynamically update the text on the button to reflect total price if available
        if (actionButton) {
            actionButton.textContent = `Buy Now - $${finalPrice}`;
        }
    }

    // Attach event listeners to all option inputs
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", updateCalculatedPrice);
    });

    // Initialize display price on load
    updateCalculatedPrice();
});
