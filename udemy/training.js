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

// function calculateIMC() {
//     let cut = prompt('Enter your cut in cm');
//     let weight = prompt('Enter your weight in Kg');

//     cut = parseFloat(cut / 100);
//     weight = parseFloat(weight);

//     let iMC = (weight / Math.pow(cut, 2));
//     console.log(iMC);
// }

// let x = 2;

// x > 3 ? console.log('vrai') : console.log('false');

// var calculator;
// do {
//     calculator = prompt(
//         "Que voulez vous faire ? \n" +
//         "1-Addition \n" +
//         "2-Soustraction \n" +
//         "3-Multiplication \n" +
//         "4-Division \n"
//     );
//     calculator = parseInt(calculator);
//     switch (calculator) {
//         case 1:
//             addition();
//             console.log("addition");
//             break;
//         case 2:
//             soustraction();
//             console.log("soustraction");
//             break;
//         case 3:
//             multiplication();
//             console.log("multiplication");
//             break;
//         case 4:
//             division();
//             console.log("division");
//             break;

//         default:
//             console.log("Choix invalide");
//             break;
//     }
// } while (calculator != 1 && calculator != 2 && calculator != 3 && calculator != 4);


// function addition(x, y) {
//     x = prompt('Donner un premier nombre');
//     x = parseFloat(x);

//     y = prompt('Donner un second nombre');
//     y = parseFloat(y);

//     let sum = x + y;

//     alert("La somme est " + sum);
// }


// function soustraction(x, y) {
//     x = prompt('Donner un premier nombre');
//     x = parseFloat(x);

//     y = prompt('Donner un second nombre');
//     y = parseFloat(y);

//     let sum = x - y;

//     alert("Le résultat est " + sum);
// }

// function multiplication(x, y) {
//     x = prompt('Donner un premier nombre');
//     x = parseFloat(x);

//     y = prompt('Donner un second nombre');
//     y = parseFloat(y);

//     let sum = x * y;

//     alert("La résultat est " + sum);
// }


// function division(x, y) {
//     x = prompt('Donner un premier nombre');
//     x = parseFloat(x);

//     y = prompt('Donner un second nombre');
//     y = parseFloat(y);

//     if (y == 0) {
//         alert("Le dividante ne peut pas etre zéro");
//     } else {
//         let sum = x / y;
//         alert("La somme est " + sum);
//     }


// }

// function timer(second) {

//     if (second > 0) {
//         console.log(second);
//         timer(second - 1);
//     } else {
//         console.log(second);
//     }
// }

// timer(12);7


// let sum = 0;

// function sumNumber(number) {
//     sum += number;
//     if (number > 0) {
//         sumNumber(number - 1);
//     }
//     return sum;

// }

// let sumValue = sumNumber(1);
// console.log(sumValue);

// ******************************* LES FONCTIONS FLECHE **********************************************


// let maFonction = () => {
//     console.log('test');
// }

// let maFonction = () => console.log('test');

// maFonction();

// *******************************LE POTENTIEL DE JAVASCRIPT****************************

// let chien = {
//     race: 'shiba',
//     poil: 'cout',
//     aboyer: () => console.log('Je suis un chien qui aboie')
// }

// console.log(chien);
// chien.aboyer();


// ****OBJET SET

// let nombre = [10, 20, 30];
// let monSet = new Set();
// monSet.add('12');

// console.log(monSet.size);


// Objet MAP*********

// let maMap = new Map([
//     ['prenom', 'Mamadou'],
//     ['nom', 'WONE']
// ]);

// console.log(maMap);

// let myMap = new Map();

// myMap.set('Boss', {
//     email: 'boss@tech.com',
//     poste: 'PDG'
// });

// console.log(myMap);

// Objet WEAKSET*********

// function addition(...nombre) {
//     let sum = 0;
//     nombre.forEach(nombre => {
//         // console.log(nombre);
//         sum += nombre;
//     });
//     return sum;
// }


// let sumValue = addition(12, 15, 6, 100);
// console.log(sumValue);

// window.open();
// console.log('boss');

let header = document.createElement('header');
let headerContainer = document.createElement('div');
header.textContent = 'BIENVENU';
header.style.textAlign = 'center';
header.style.padding = '40px';
headerContainer.style.backgroundColor = '#e3b04b';
headerContainer.style.height = '100px';
headerContainer.append(header);
document.body.append(headerContainer);