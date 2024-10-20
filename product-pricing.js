const priceElement = document.getElementById("product-price");
const sizeSelector = document.getElementById("size-selector");
const inventoryCount = document.getElementById("inventory-count");
const purchaseButton = document.getElementById("Purchase-product");

sizeSelector.addEventListener("change", (event) => {
const selectedPrice = event.target.value;
priceElement.textContent = `$${selectedPrice}`;
});

const stockAvailability = {
    small: { price: 10, stock: 5 },
    medium: { price: 15, stock: 0 }, 
    large: { price: 20, stock: 3 }
};

function updateInventory() {
    const selectedSize = sizeSelector.value;
    const { stock } = stockAvailability[selectedSize];

    if (stock > 0) {
        purchaseButton.disabled = false; 
        inventoryCount.textContent = `Available Stock: ${stock}`; 
    } else {
        purchaseButton.disabled = true; 
        inventoryCount.textContent = "Out of Stock"; 
    }
}
//Updates the price and inventory based on the selcted size 
sizeSelector.addEventListener("change", () => {
    const selectedSize = sizeSelector.value;
    const { price } = stockAvailability[selectedSize];
    
    priceElement.textContent = `$${price}`; 
    updateInventory(); 
});

purchaseButton.addEventListener("click", () => {
    const selectedSize = sizeSelector.value;
    stockAvailability[selectedSize].stock--; 
    updateInventory(); 
});
