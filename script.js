
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

