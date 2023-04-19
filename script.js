window.onload = () => {

    const buttons = document.querySelectorAll('.app button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent.toLowerCase();
            const fileName = buttonText.replace(/\s+/g, '');
            window.location.href = fileName + '.html';
        });
    });
}


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




