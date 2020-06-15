const number = document.getElementById('myNum');
let numberValue = 0;
number.innerHTML = numberValue;


function reset() {
    numberValue = 0;
    number.innerHTML = numberValue;
    number.style.color = 'black';
}

function increase() {
    numberValue++;
    number.innerHTML = numberValue;
    if (numberValue === 0) {
        number.style.color = 'black';
    } else if (numberValue < 0) {
        number.style.color = 'red';
    } else {
        number.style.color = 'green';
    }
}

function decrease() {
    numberValue--;
    number.innerHTML = numberValue;
    if (numberValue === 0) {
        number.style.color = 'black';
    } else if (numberValue > 0) {
        number.style.color = 'green';
    } else {
        number.style.color = 'red';
    }
}