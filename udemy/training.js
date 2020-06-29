// function multi(number) {
//     for (let i = 0; i <= 10; i++) {
//         console.log(`${number}` + "*" + `${i}` + "=" + number * i);

//     }
// }

// function sayHi(name) {
//     // alert('Hello ' + name);
//     console.log(name);
// }

// function abracadabra() {
//     let name = prompt('Whatis your name ?');
//     let firtsName = prompt('What is your first name ?');
//     let age = prompt('Enter your age');

//     alert("Sapristi ! On ne m'avait pas prévenu que c'était vous," + `${firtsName}` +
//         " Euh... Je veux dire... Monsieur le grand magicien " + `${name} !` +
//         "Cela fait déjà  " + `${age}` + " ans que vous faites rayonner notre contrée !"
//     );

// }

function calculateIMC() {
    let cut = prompt('Enter your cut in cm');
    let weight = prompt('Enter your weight in Kg');

    cut = parseFloat(cut / 100);
    weight = parseFloat(weight);

    let iMC = (weight / Math.pow(cut, 2));
    console.log(iMC);
}

calculateIMC();