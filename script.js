
function show(clicked_id) {

    const imageId = clicked_id + '1';

    const isShowing = document.getElementById(imageId).style.display === 'block';

    if (isShowing) {
        document.getElementById(imageId).style.display = 'none';
    } else {
        document.getElementById(imageId)
            .style.display = "block";

        document.getElementById(imageId)
            .style.display = "absolute";
    }
}

function createTextBox() {
    const isShowingText = document.getElementById("text").style.display === 'block';
    const isShowingRedeem = document.getElementById("redeem").style.display === 'block';
    if (isShowingText & isShowingRedeem) {
        document.getElementById("text").style.display = 'none';

        document.getElementById("redeem").style.display = 'none';
    } else {
        document.getElementById("text").style.display = "block";

        document.getElementById("text").style.display = "absolute";

        document.getElementById("redeem").style.display = "block";

        document.getElementById("redeem").style.display = "absolute";

    }
}

function saveOption() {
    var selectOption = document.getElementById("Preferences");
    var selectedOption = selectOption.options[selectOption.selectedIndex].value;
    localStorage.setItem("Preferences", selectedOption);
}

// Load saved option on page load
window.onload = function () {
    var savedOption = localStorage.getItem("Preferences");
    if (savedOption) {
        document.getElementById("Preferences").value = savedOption;
    }
    const body = document.querySelector('#size');
const headers = document.querySelectorAll('header');

// Get saved background color and set it
const savedBackgroundColor = localStorage.getItem('backgroundColor');
if (savedBackgroundColor) {
    body.style.backgroundColor = savedBackgroundColor;
}

// Get saved header color and set it
const savedHeaderColor = localStorage.getItem('headerColor');
if (savedHeaderColor) {
    headers.forEach(header => {
        header.style.color = savedHeaderColor;
    });
}
};

function changeColor() {
    const headers = document.querySelectorAll('header');
    const body = document.querySelector('#size');

    if (body.style.backgroundColor === 'black') {
        body.style.backgroundColor = 'white';
        localStorage.setItem('backgroundColor', 'white');
    } else {
        body.style.backgroundColor = 'black';
        localStorage.setItem('backgroundColor', 'black');
    }

    if (headers[0].style.color === 'white') {
        headers.forEach(header => {
            header.style.color = 'black';
        });
        localStorage.setItem('headerColor', 'black');
    } else {
        headers.forEach(header => {
            header.style.color = 'white';
        });
        localStorage.setItem('headerColor', 'white');
    }
}

//Display do SuperOne.html
// por favor usar switch case em vez de if else
function display(){
    var e = document.getElementById("searchOne");
    switch (e.selectedIndex) {
        case 0:
            document.getElementById("Dairy Products").style.display = 'none'
            document.getElementById("Bakery").style.display = 'none'
            document.getElementById("Meat").style.display = 'none'
            document.getElementById("Fish").style.display = 'none'
            document.getElementById("Vegetables").style.display = 'none'
            document.getElementById("Fruits").style.display = 'none'
            break;
    
        case 1:
            document.getElementById("Dairy Products").style.display = 'block'
            document.getElementById("Bakery").style.display = 'none'
            document.getElementById("Meat").style.display = 'none'
            document.getElementById("Fish").style.display = 'none'
            document.getElementById("Vegetables").style.display = 'none'
            document.getElementById("Fruits").style.display = 'none'
            break;
        case 2:
            document.getElementById("Dairy Products").style.display = 'none'
            document.getElementById("Bakery").style.display = 'block'
            document.getElementById("Meat").style.display = 'none'
            document.getElementById("Fish").style.display = 'none'
            document.getElementById("Vegetables").style.display = 'none'
            document.getElementById("Fruits").style.display = 'none'
            break;
        case 3:
            document.getElementById("Dairy Products").style.display = 'none'
            document.getElementById("Bakery").style.display = 'none'
            document.getElementById("Meat").style.display = 'block'
            document.getElementById("Fish").style.display = 'none'
            document.getElementById("Vegetables").style.display = 'none'
            document.getElementById("Fruits").style.display = 'none'
            break;
        case 4:
            document.getElementById("Dairy Products").style.display = 'none'
            document.getElementById("Bakery").style.display = 'none'
            document.getElementById("Meat").style.display = 'none'
            document.getElementById("Fish").style.display = 'block'
            document.getElementById("Vegetables").style.display = 'none'
            document.getElementById("Fruits").style.display = 'none'
            break;
        case 5:
            document.getElementById("Dairy Products").style.display = 'none'
            document.getElementById("Bakery").style.display = 'none'
            document.getElementById("Meat").style.display = 'none'
            document.getElementById("Fish").style.display = 'none'
            document.getElementById("Vegetables").style.display = 'block'
            document.getElementById("Fruits").style.display = 'none'
            break;
        case 6:
            document.getElementById("Dairy Products").style.display = 'none'
            document.getElementById("Bakery").style.display = 'none'
            document.getElementById("Meat").style.display = 'none'
            document.getElementById("Fish").style.display = 'none'
            document.getElementById("Vegetables").style.display = 'none'
            document.getElementById("Fruits").style.display = 'block'
            break;
    }
}

function displayRes(){
    var e = document.getElementById("search");
    switch (e.selectedIndex) {
        case 0:
            document.getElementById("Mexican").style.display = 'none'
            document.getElementById("Italian").style.display = 'none'
            document.getElementById("Japanese").style.display = 'block'
            document.getElementById("Fast").style.display = 'none'
            break;
    
        case 1:
            document.getElementById("Mexican").style.display = 'block'
            document.getElementById("Italian").style.display = 'none'
            document.getElementById("Japanese").style.display = 'none'
            document.getElementById("Fast").style.display = 'none'
            break;
        case 2:
            document.getElementById("Mexican").style.display = 'none'
            document.getElementById("Italian").style.display = 'block'
            document.getElementById("Japanese").style.display = 'none'
            document.getElementById("Fast").style.display = 'none'
            break;
        case 3:
            document.getElementById("Mexican").style.display = 'none'
            document.getElementById("Italian").style.display = 'none'
            document.getElementById("Japanese").style.display = 'block'
            document.getElementById("Fast").style.display = 'none'
            break;
        case 4:
            document.getElementById("Mexican").style.display = 'none'
            document.getElementById("Italian").style.display = 'none'
            document.getElementById("Japanese").style.display = 'none'
            document.getElementById("Fast").style.display = 'block'
            break;
    }
}

window.onload = function loadPreferences() {
    var savedOption = localStorage.getItem("Preferences");
    if (savedOption) {
        document.getElementById("search").value = savedOption;
    }
    const body = document.querySelector('#size');
const headers = document.querySelectorAll('header');
}

function up(max, id) {
    document.getElementById(id).value = parseInt(document.getElementById(id).value) + 1;
    if (document.getElementById(id).value >= parseInt(max)) {
        document.getElementById(id).value = max;
    }
}
function down(min, id) {
    document.getElementById(id).value = parseInt(document.getElementById(id).value) - 1;
    if (document.getElementById(id).value <= parseInt(min)) {
        document.getElementById(id).value = min;
    }
}

//A TESTAR
//document.querySelector("#addToCart").addEventListener("click", addItem);

function addItem(product, price, quantity) {
	// Get the form inputs
	var product = document.getElementById("product").value;
	var price = document.getElementById("price").value;
	var quantity = document.getElementById("quantity").value;
    console.log(product);

	// Calculate the total
	var total = price * quantity;

	// Create an object for the new item
	var newItem = { product: product, price: price, quantity: quantity, total: total };

	// Get the existing cart data from local storage, or initialize it if it doesn't exist
	var cart = JSON.parse(localStorage.getItem("cart")) || [];

	// Check if the item already exists in the cart
	var itemIndex = -1;
	for (var i = 0; i < cart.length; i++) {
		if (cart[i].product === product) {
			itemIndex = i;
			break;
		}
	}

	if (itemIndex >= 0) {
		// Item already exists in the cart, update the quantity and total
		cart[itemIndex].quantity += quantity;
		cart[itemIndex].total += total;
	} else {
		// Item doesn't exist in the cart, add it to the end
		cart.push(newItem);
	}

	// Save the updated cart data to local storage
	localStorage.setItem("cart", JSON.stringify(cart));

	// Refresh the cart table
	refreshCart();
}

function loadCart() {
    // Retrieve the cart data from localStorage
    var cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Get the ul element to display the cart items
    var cartList = document.getElementById("cart-list");

    // Loop through each item in the cart and display it
    for (var i = 0; i < cart.length; i++) {
        var item = cart[i];

        // Create a new li element to display the item
        var li = document.createElement("li");
        var text = document.createTextNode(item.product + " - $" + item.price + " x " + item.quantity);
        li.appendChild(text);

        // Add the li element to the ul element
        cartList.appendChild(li);
    }
}

function refreshCart() {
	// Get the cart data from local storage
	var cart = JSON.parse(localStorage.getItem("cart")) || [];

	// Get the cart table element
	var cartTable = document.getElementById("cart");

	// Clear the existing rows from the table
	cartTable.innerHTML = "";

	// Create a new row for each item in the cart
	for (var i = 0; i < cart.length; i++) {
		// Create a new row for the item
		var row = document.createElement("tr");

		// Create the cells for the row
		var productCell = document.createElement("td");
		var priceCell = document.createElement("td");
		var quantityCell = document.createElement("td");
		var totalCell = document.createElement("td");

		// Create the input field for the quantity
		var quantityInput = document.createElement("input");
		quantityInput.type = "number";
		quantityInput.value = cart[i].quantity;
		quantityInput.min = 1;
		quantityInput.addEventListener("change", function() {
			// Update the quantity and total when the input field changes
			var newQuantity = parseInt(this.value);
			var newTotal = cart[i].price * newQuantity;
			cart[i].quantity = newQuantity;
			cart[i].total = newTotal;
			localStorage.setItem("cart", JSON.stringify(cart));
			refreshCart();
		});

		// Set the cell values
		productCell.textContent = cart[i].product;
		priceCell.textContent = cart[i].price;
		totalCell.textContent = cart[i].total;

		// Add the cells to the row
		row.appendChild(productCell);
		row.appendChild(priceCell);
		row.appendChild(quantityCell);
		row.appendChild(totalCell);

		// Add the quantity input field to the quantity cell
		quantityCell.appendChild(quantityInput);

		// Add the row to the cart table
		cartTable.appendChild(row);
	}
}

// Call refreshCart when the page is loaded
window.addEventListener("load", refreshCart);

//FIM DO TESTE

