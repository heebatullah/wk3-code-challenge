// Array to store shopping list items
let shoppingList = [];

// add item to the list using function addItem
function addItem() {
    const itemInput = document.getElementById('itemInput');
    const item = itemInput.value.trim();

    if (item) {
        shoppingList.push(item);
        renderList();
        itemInput.value = '';
    }
}

// mark item as purchased using togglePurchased function
function togglePurchased(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('purchased');
    }
}

//clear the list using clearList function
function clearList() {
    shoppingList = [];
    renderList();
}

// rendering the list using renderList function
function renderList() {
    const shoppingListContainer = document.getElementById('shoppingList');
    shoppingListContainer.innerHTML = '';

    shoppingList.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        listItem.addEventListener('click', togglePurchased);
        shoppingListContainer.appendChild(listItem);
    });
}

// Attach event listeners
document.getElementById('addItemButton').addEventListener('click', addItem);
document.getElementById('clearListButton').addEventListener('click', clearList);
document.getElementById('itemInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addItem();
    }
});
