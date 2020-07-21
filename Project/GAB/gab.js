let carte = document.getElementById('infoCarte');

carte.addEventListener('keyup', () => {
    let value = carte.value;
    console.log(value);
    if (value.length === 4) {
        value = value + ' - ';
        console.log(value);

    }
})