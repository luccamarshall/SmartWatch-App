
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
};

//Display do SuperOne.html
function display(){
    var e = document.getElementById("searchOne");
    var index = e.selectedIndex;
    if(index==0){
        document.getElementById("Dairy Products").style.display = 'none'
        document.getElementById("Bakery").style.display = 'none'
        document.getElementById("Meat").style.display = 'none'
        document.getElementById("Fish").style.display = 'none'
        document.getElementById("Vegetables").style.display = 'none'
        document.getElementById("Fruits").style.display = 'none'
    }
    else if(index==1){
        document.getElementById("Dairy Products").style.display = 'block'
        document.getElementById("Bakery").style.display = 'none'
        document.getElementById("Meat").style.display = 'none'
        document.getElementById("Fish").style.display = 'none'
        document.getElementById("Vegetables").style.display = 'none'
        document.getElementById("Fruits").style.display = 'none'
    }
    else if(index==2){
        document.getElementById("Dairy Products").style.display = 'none'
        document.getElementById("Bakery").style.display = 'block'
        document.getElementById("Meat").style.display = 'none'
        document.getElementById("Fish").style.display = 'none'
        document.getElementById("Vegetables").style.display = 'none'
        document.getElementById("Fruits").style.display = 'none'
    }
    else if(index==3){
        document.getElementById("Dairy Products").style.display = 'none'
        document.getElementById("Bakery").style.display = 'none'
        document.getElementById("Meat").style.display = 'block'
        document.getElementById("Fish").style.display = 'none'
        document.getElementById("Vegetables").style.display = 'none'
        document.getElementById("Fruits").style.display = 'none'
    }
    else if(index==4){
        document.getElementById("Dairy Products").style.display = 'none'
        document.getElementById("Bakery").style.display = 'none'
        document.getElementById("Meat").style.display = 'none'
        document.getElementById("Fish").style.display = 'block'
        document.getElementById("Vegetables").style.display = 'none'
        document.getElementById("Fruits").style.display = 'none'
    }
    else if(index==5){
        document.getElementById("Dairy Products").style.display = 'none'
        document.getElementById("Bakery").style.display = 'none'
        document.getElementById("Meat").style.display = 'none'
        document.getElementById("Fish").style.display = 'none'
        document.getElementById("Vegetables").style.display = 'block'
        document.getElementById("Fruits").style.display = 'none'
    }
    else if(index==6){
        document.getElementById("Dairy Products").style.display = 'none'
        document.getElementById("Bakery").style.display = 'none'
        document.getElementById("Meat").style.display = 'none'
        document.getElementById("Fish").style.display = 'none'
        document.getElementById("Vegetables").style.display = 'none'
        document.getElementById("Fruits").style.display = 'block'
    }
}

