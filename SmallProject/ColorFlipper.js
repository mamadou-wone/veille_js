Color = ['blue', 'red', 'green', 'black', 'pink', 'yellow'];

function getRand(rand) {
    return Math.floor(Math.random() * Math.floor(rand));
}

function getRandValue() {
    let bodyColor = document.getElementById('body');
    bodyColor.style.backgroundColor = Color[getRand(6)];
}