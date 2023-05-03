const Products = {
    id: 0,
    name: "apple",
    price: "2,99€ per kilo",
    imgSrc: "redApple.jpg",
};

const products = [Products]; // Define an array of products

const productsEl = document.querySelector("#products");

function renderProducts(id) {
    const product = products[id];
        productsEl.innerHTML += `<div class="product ${product.name}">
      <div class="apple">
        <img class="imageTarget" id="imageTarget" src="${product.imgSrc}" alt="${product.name}">
        <p id="appleItem" class="appleItem">${product.name}</p>
        <p id="price" class="price">${product.price}</p>
        <div class="inc-button">
          <button id="down" onclick="down('0', 'quantity')">-</button>
          <input type="text" id="quantity" value="0" />
          <button id="up" onclick="up('10', 'quantity')">+</button>
          <button onclick="addToCart('appleItem', document.getElementById('price'), document.getElementById('quantity'))" id="add">Add</button>
        </div>
      </div>
    </div>`;
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
