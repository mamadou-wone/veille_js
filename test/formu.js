let nameValue = document.getElementById('nom');
let btnSubmit = document.getElementById('btn');

btnSubmit.addEventListener('submit', function(e) {
    e.preventDefault();
    let msg = "";
    msg += nameValue.nodeValue;
    console.log(msg)
        // if (nameValue.validity.valueMissing !== null) {
        //     console.log(nameValue.value);
        // }

})