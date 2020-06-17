let picture = document.getElementById('slider');
let spanContainer = document.getElementById('spanContainer');
picture.style.backgroundColor = 'red';
let slideNumber = 1;
picture.innerHTML = slideNumber;

let nextClick = document.getElementById('next');
let previousClick = document.getElementById('prev');

function Previous() {
    previousSlider = picture.innerText;
    sliderValue = slideNumber--;
    switch (sliderValue) {
        case 1:
            picture.innerHTML = 2;
            break;
        case 2:
            picture.innerHTML = 3;
            break;
        case 3:
            picture.innerHTML = 4;
            break;
    }

}

function Next() {
    sliderValue = slideNumber++;
    switch (sliderValue) {
        case 1:
            picture.innerHTML = 2;
            break;
        case 2:
            picture.innerHTML = 3;
            break;
        case 3:
            picture.innerHTML = 4;
            break;
    }

}

nextClick.addEventListener('click', function click() {
    Next();
    // console.log(sliderValue);
});

previousClick.addEventListener('click', function click() {
    Previous();
})