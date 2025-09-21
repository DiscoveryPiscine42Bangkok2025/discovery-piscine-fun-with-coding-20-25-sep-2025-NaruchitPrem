const changeButton = document.getElementById('changeBtn');

function getRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

changeButton.addEventListener('click', function() {

    const randomColor = getRandomHexColor();

    document.body.style.backgroundColor = randomColor;
});
