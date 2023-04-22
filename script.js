
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


