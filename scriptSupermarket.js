const Products = {
    id: 0,
    name: "apple",
    price: "2,99€ ao kilo",
    imgSrc: "redApple.jpg",
}

const productsEl = document.querySelector(".products");

function renderProducts() {
    products.forEach((products) => {
        productsEl.innerHTML += `<div id="Fruits" style="display: none;">
                <div class = apple>
                    <img class = "imageTarget" id="imageTarget" src="redApple.jpg" alt="Red apples">
                    <p id="appleItem" class="appleItem">Apples</p><p id="price" class="price">2,00 €/kg</p>
                    <!-- A TESTAR -->
                    <div class="inc-button">
                        <button id="down" onclick=" down('0', 'quantity')">-</button>
                        <input type="text" id="quantity" value="0" />
                        <button id="up" onclick="up('10', 'quantity')">+</button>
                        <button onclick="addToCart('appleItem', document.getElementById(price), document.getElementById(quantity))"" id="add">Add</button>

                    </div>

                    <!-- FIM DO TESTE -->
                </div>
            </div>`
    });
}

renderProducts();

function displayProducts() {
    const category = document.querySelector("#searchOne").value;
    const productDivs = document.querySelectorAll(".product");

    // hide all product divs
    productDivs.forEach((div) => {
        div.parentNode.style.display = "none";
    });

    // show only product divs with matching category
    const categoryDiv = document.querySelector(`.${category}`);
    if (categoryDiv) {
        categoryDiv.style.display = "block";
    }
}