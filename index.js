let total = 0;

function addItem() {
    const itemInput = document.getElementById("item");
    const priceInput = document.getElementById("price");
    const item = itemInput.value;
    const price = parseFloat(priceInput.value);

    if (isNaN(price) || price <= 0) {
        alert("Por favor, insira um preço válido.");
        return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = `${item}: R$${price.toFixed(2)}`;
    document.getElementById("shoppingList").appendChild(listItem);

    total += price;
    document.getElementById("total").textContent = total.toFixed(2);

    itemInput.value = "";
    priceInput.value = "";
}