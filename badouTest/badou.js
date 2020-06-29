let pictureTab = [
    '1.jpg',
    '2.jpg',
    '3.jpg'
]

let image = document.getElementById('picContainer');
let button = document.getElementById('flipper');

let picture = new Image(250, 100);
picture.src = pictureTab[0];
image.appendChild(picture);

let pitureIndex = 0;
button.addEventListener('click', function click() {
    pitureIndex++;
    switch (pitureIndex) {
        case 1:
            picture.src = pictureTab[pitureIndex];
            image.appendChild(picture);
            break;
        case 2:
            picture.src = pictureTab[pitureIndex];
            image.appendChild(picture);
            break;
        default:
            picture.src = pictureTab[0];
            image.appendChild(picture);
            break;
    }

    if (pitureIndex === 3) {
        pitureIndex = 0;
    }
    console.log(pitureIndex);
})