
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
            document.getElementById("Mexican").style.display = 'block'
            document.getElementById("Italian").style.display = 'block'
            document.getElementById("Japanese").style.display = 'block'
            document.getElementById("Fast").style.display = 'block'
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

    var product1 = document.getElementById(product).value;
    var price1 = document.getElementById(price).value;
    var quantity1 = document.getElementById(quantity).value;

	var total = price1 * quantity1;

	var newItem = { product: product1, price: price1, quantity: quantity1, total: total };

	var cart = JSON.parse(sessionStorage.getItem("cart")) || [];

	var itemIndex = -1;
	for (var i = 0; i < cart.length; i++) {
		if (cart[i].product === product1) {
			itemIndex = i;
			break;
		}
	}

	if (itemIndex >= 0) {
		cart[itemIndex].quantity += quantity1;
		cart[itemIndex].total += total;
	} else {
		cart.push(newItem);
	}

    sessionStorage.setItem("cart", JSON.stringify(cart));

	refreshCart();
}

function loadCart() {

    var cart = JSON.parse(sessionStorage.getItem("cart")) || [];

    var cartList = document.getElementById("cart-list");

    for (var i = 0; i < cart.length; i++) {
        var item = cart[i];

        var li = document.createElement("li");
        var text = document.createTextNode(item.product + " - $" + item.price + " x " + item.quantity);
        li.appendChild(text);

        cartList.appendChild(li);
    }
}

function refreshCart() {
	var cart = JSON.parse(sessionStorage.getItem("cart")) || [];

	var cartTable = document.getElementById("cart");

	cartTable.innerHTML = "";

	for (var i = 0; i < cart.length; i++) {
		var row = document.createElement("tr");

		var productCell = document.createElement("td");
		var priceCell = document.createElement("td");
		var quantityCell = document.createElement("td");
		var totalCell = document.createElement("td");

		var quantityInput = document.createElement("input");
		quantityInput.type = "number";
		quantityInput.value = cart[i].quantity;
		quantityInput.min = 1;
		quantityInput.addEventListener("change", function() {
			var newQuantity = parseInt(this.value);
			var newTotal = cart[i].price * newQuantity;
			cart[i].quantity = newQuantity;
			cart[i].total = newTotal;
			sessionStorage.setItem("cart", JSON.stringify(cart));
			refreshCart();
		});

		productCell.textContent = cart[i].product;
		priceCell.textContent = cart[i].price;
		totalCell.textContent = cart[i].total;

		row.appendChild(productCell);
		row.appendChild(priceCell);
		row.appendChild(quantityCell);
		row.appendChild(totalCell);

		quantityCell.appendChild(quantityInput);

		cartTable.appendChild(row);
	}
}

window.addEventListener("load", refreshCart);

//FIM DO TESTE

