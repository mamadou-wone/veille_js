let picture = document.getElementById('slider');
// let spanContainer = document.getElementById('spanContainer');
picture.style.backgroundColor = 'white';
let slideNumber = 3;
// picture.innerHTML = slideNumber;

let image = new Image(250, 150);
image.src = "boss.jpg";
picture.appendChild(image);

let nextClick = document.getElementById('next');
// nextClickValue = picture.innerText;

let previousClick = document.getElementById('prev');
// previousClickValue = picture.innerText;



let nextClickInit = 1;
// let nextClickValue = nextClickInit++;
let tabSlider = [];
for (let nextClickValue = 0; nextClickValue < 4; nextClickValue++) {
    tabSlider = nextClickValue;
    console.log(tabSlider);
}

function sliderClick() {

    if (nextClickValue <= slideNumber) {
        switch (nextClickValue) {
            case 1:
                image.src = "boss2.jpg";
                picture.appendChild(image);
                break;
            case 2:
                image.src = "boss3.jpg";
                picture.appendChild(image);
                break;
            case 3:
                image.src = "boss4.jpg";
                picture.appendChild(image);
                break;
        }
        console.log(nextClickValue);
    }
}

function sliderPreviousClick() {
    if (nextClickValue === slideNumber) {
        nextClickValue--;
        switch (nextClickValue) {
            case 2:
                image.src = "boss2.jpg";
                picture.appendChild(image);
                break;
            case 1:
                image.src = "boss3.jpg";
                picture.appendChild(image);
                break;
        }
        console.log(nextClickValue);

    }
}

nextClick.addEventListener('click', function click() {
    sliderClick();
});



previousClick.addEventListener('click', function click() {
    sliderPreviousClick();
})