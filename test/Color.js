const conteneur = document.getElementById('boxes');
const bodyColor = document.getElementById('body');
const tabColor = ['blue', 'red', 'green', 'black', 'yellow'];

for (const color of tabColor) {
    console.log(color);
    const box = document.createElement('div');
    box.style.backgroundColor = color;
    // box.classList.add = ('box');
    box.className = 'box';
    conteneur.appendChild(box);
    box.addEventListener('click', function click() {
        bodyColor.style.backgroundColor = color;
    })
}