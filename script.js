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