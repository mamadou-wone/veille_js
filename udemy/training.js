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

// let header = document.createElement('header');
// let headerContainer = document.createElement('div');
// header.textContent = 'BIENVENU';
// header.style.textAlign = 'center';
// header.style.padding = '40px';
// headerContainer.style.backgroundColor = '#e3b04b';
// headerContainer.style.height = '100px';
// headerContainer.append(header);
// document.body.append(headerContainer);

// *************************LES EVENEMENTS***************************************

// let a = document.querySelector('a');
// a.onclick = () => {
//     if (confirm('Voulez vous continuer')) {
//         location.href = 'https://www.udemy.com/';
//     }
// }


// button.onmouseover = () => {
//     document.body.style.backgroundColor = 'orange';

//     button.onmouseout = () => {
//         document.body.style.backgroundColor = 'white';
//     }
// }

// let button = document.querySelector('button');
// button.addEventListener('mouseover', () => {
//     document.body.style.backgroundColor = 'orange';

//     button.addEventListener('mouseout', () => {
//         document.body.style.backgroundColor = 'white';
//     });
// })
// let number = 10;
// let button = document.querySelector('button');
// let secondContainer = document.getElementById('contain');
// let timer;
// button.addEventListener('click', () => {
//     timer = setInterval("decompte()", 1000);
// });

// function stop() {
//     clearTimeout(timer);
// }

// function decompte() {
//     number--;
//     let secondValue = document.createElement('p');
//     secondValue.textContent = number;
//     secondContainer.append(secondValue);
//     if (number === 0) {
//         number = 10;
//         stop();
//         secondValue.textContent = 'stop!';
//     }

// }

// let btn = document.querySelector('button');
// var hiden = false;
// let textContainer = document.getElementById('contain');

// btn.addEventListener('click', () => {
//     switch (hiden) {
//         case true:
//             btn.innerHTML = 'display';
//             hiden = false;
//             textContainer.innerHTML = null;
//             break;
//         case false:
//             btn.innerHTML = 'kosher';
//             hiden = true;
//             textContainer.innerHTML = 'Text Cacher';
//             break;
//         default:
//             hiden = false;
//             break;
//     }
//     console.log(hiden);


// });


// *****************************GENERATEUR DE CITATION********************************

// Tableau de citations
// let citations = [
//     ["La vie est un mystère qu'il faut vivre, et non un problème à résoudre.", "Gandhi"],
//     ["Le plus grand risque est de ne prendre aucun risque.", "Mark Zuckerberg"],
//     ["Méritez votre statut de leader chaque jour.", "Mickael Jordan"],
//     ["Soyez le changement que vous voulez voir dans le monde.", "Gandhi"],
//     ["A chaque fois que vous vous retrouvez du même côté que la majorité, il est temps de prendre du recul, et de réfléchir.", "Mark Twain"],
//     ["Seulement ceux qui prendront le risque d’aller trop loin découvriront jusqu’où on peut aller.", "T.S Elliot"],
//     ["Le succès c’est tomber sept fois, se relever huit.", "Proverbe japonais"],
//     ["Dans vingt ans vous serez plus déçus par les choses que vous n’avez pas faites que par celles que vous avez faites. Alors sortez des sentiers battus. Mettez les voiles. Explorez. Rêvez. Découvrez.", "Mark Twain"],
//     ["Si vous attendez pour agir, tout ce que vous gagnerez, avec le temps, c’est de l’âge.", "Brian Tracy"],
//     ["Quand on concentre son attention sur un seul projet, l’esprit suggère constamment des idées et des améliorations qui lui échapperaient s’il était occupé avec plusieurs projets en même temps.", "P.T. Barnum"],
//     ["Se dédier à faire tout ce que l’on peut pour aider les autres à obtenir ce qu’ils veulent, c’est la clé du succès.", "Brian Sher"],
//     ["Si vous pensez que vous êtes trop petit pour avoir de l’impact, essayez d’aller au lit avec un moustique.", "Anita Roddick"],
//     ["Ne jugez pas chaque jour sur ce que vous récoltez, mais sur les graines que vous semez.", "Robert Louis Stevenson"],
//     ["L’action est la clé fondamentale de tout succès.", "Pablo Picasso"],
//     ["Le succès, c’est se promener d’échecs en échecs tout en restant motivé.", "Winston Churchill"],
//     ["Votre avenir est créé par ce que vous faîtes aujourd’hui, pas demain.", "Robert T. Kiyosaki"],
//     ["Ne vous découragez pas, c’est souvent la dernière clef du trousseau qui ouvre la porte.", "Zig Ziglar"],
//     ["Pour gagner votre vie, apprenez à l’école. Pour gagner une fortune, apprenez par vous-même.", "Brian Tracy"],
//     ["Les gagnants trouvent des moyens, les perdants des excuses…", "F. D. Roosevelt"],
//     ["Vous n’êtes jamais trop vieux pour vous fixer de nouveaux buts, ou rendre vos rêves réalité.", "C.S. Lewis"],
//     ["Un pessimiste voit la difficulté dans chaque opportunité. Un optimiste voit une opportunité dans chaque difficulté.", "Winston Churchill"]
// ];

// function getRand(rand) {
//     return Math.floor(Math.random() * Math.floor(rand));
// }

// let citaionValue = document.getElementById('citation');
// let author = document.getElementById('auteur');
// let newCitaion = document.getElementById('nouveau');
// let citationIndex;

// newCitaion.addEventListener('click', () => {
//     citationIndex = getRand(21);
//     citaionValue.innerHTML = `${citations[citationIndex][0]}`;
//     author.innerHTML = `${citations[citationIndex][1]}`;
// });


// let input = document.getElementById('prix');
// let formulaire = document.getElementById('formulaire');
// let error = document.querySelector('small');

// // error.innerHTML = null;
// error.style.display = "none";

// // Génération d'un nombre aléatoire

// function getRand(rand) {
//     return Math.floor((Math.random() * Math.floor(rand)));
// }


// let nombreAleatoire = getRand(1001);
// let nombreChoisi;
// let coup = 0;
// let instructions = document.getElementById('instructions');


// function verifier(number) {
//     let instruction = document.createElement('div');
//     if (number < nombreAleatoire) {
//         instruction.innerText = 'Plus Grand';
//         instruction.className = 'plus';
//         // instructions.append(instruction);
//         console.log('Plus grand');
//     } else if (number > nombreAleatoire) {
//         console.log('Plus petit');
//         instruction.innerText = 'Plus Petit';
//         instruction.className = 'moins';
//         // instructions.append(instruction);

//     } else {
//         instruction.innerText = 'Bravo Félicitation :)';
//         instruction.className = 'fini';
//         input.disabled = true;
//         // input.style = 'deseabled';
//         console.log('Bravo');
//     }
//     instructions.prepend(instruction);
// }

// // console.log(nombreAleatoire);

// // Vérifiez si le user donne bien un nombre
// input.addEventListener('keyup', () => {
//     if (isNaN(input.value)) {
//         error.style.display = "contents";
//     } else {
//         error.style.display = "none";
//     }

// });

// // Traitement du formulaire

// formulaire.addEventListener('submit', (e) => {
//     e.preventDefault();
//     if (isNaN(input.value) || input.value == '') {
//         input.style.borderColor = "red";
//     } else {
//         input.style.borderColor = "silver";
//         coup++;
//         nombreChoisi = input.value;
//         input.value = '';
//         verifier(nombreChoisi);
//     }
// })

// let price = document.getElementById('prix');
// let formulaire = document.getElementById('formulaire');
// let instruction = document.getElementById('instructions');
// let error = document.querySelector('small');
// let button = document.querySelector('button');

// error.style.display = "none";
// let coup = 0;
// let userNumber;

// function getRand(rand) {
//     return Math.floor(Math.random() * Math.floor(rand));
// }

// let randomNumber = getRand(1001);


// function verify(number) {
//     if (number < randomNumber) {
//         let element = document.createElement('div');
//         element.className = 'plus';
//         element.innerHTML = "C'est Plus";
//         instruction.prepend(element);
//     } else if (number > randomNumber) {
//         let element = document.createElement('div');
//         element.className = 'moins';
//         element.innerHTML = "C'est moins";
//         instruction.prepend(element);
//     } else {
//         let element = document.createElement('div');
//         element.className = 'fini';
//         element.innerHTML = "Bravo Félicitation : )";
//         instruction.prepend(element);
//         price.disabled = true;
//         button.disabled = true;
//     }


// }

// price.addEventListener('keyup', () => {
//     if (isNaN(price.value)) {
//         error.style.display = "contents";
//     } else {
//         error.style.display = "none";
//     }
// });

// formulaire.addEventListener('submit', (e) => {
//     e.preventDefault();
//     if (isNaN(price.value) || price.value == '') {
//         price.style.borderColor = 'red';
//     } else {
//         coup++;
//         price.style.borderColor = 'silver';
//         userNumber = price.value;
//         verify(userNumber);
//         price.value = '';
//     }
// });


// *********************POO JAVASCRIPT******************************************

// function Animal(nbreDePattes, poids) {
//     this.nbreDePattes = nbreDePattes;
//     this.poids = poids;
// }

// Animal.prototype.sePresenter = function() {
//     console.log('Je suis un animal avec ' + ' ' + this.nbreDePattes + ' pattes ' + 'et je peses ' + this.poids);

// }

// function Bird(nbreDePattes, poids, longueurDesAiles) {
//     Animal.call(this, nbreDePattes, poids);
//     this.longueurDesAiles = longueurDesAiles;
// }

// Bird.prototype = Object.create(Animal.prototype);
// Bird.prototype.constructor = Bird;

// function Mammifere(nbreDePattes, poids, typeDePoile) {
//     Animal.call(this, nbreDePattes, poids);
//     this.typeDePoile = typeDePoile;
// }

// Mammifere.prototype = Object.create(Animal.prototype);
// Mammifere.prototype.constructor = Mammifere;




// var cow = new Mammifere(4, '650kg', 'fisé');
// var autruche = new Bird(2, '35kg', 'tres grandes');

// autruche.sePresenter();
// console.log(autruche);
// console.log(cow);

// class Animals {
//     constructor(nbreDePattes, poids) {
//         this.nbreDePattes = nbreDePattes;
//         this.poids = poids;
//     }

//     sePresenter() {
//         console.log('Je suis un animal avec ' + this.nbreDePattes + ' Pattes et je pèse ' + this.poids);
//     }
// }

// class Birds extends Animal {
//     constructor(nbreDePattes, poids, longueurDesAiles) {
//         super(nbreDePattes, poids)
//         this.longueurDesAiles = longueurDesAiles;
//     }
// }

// var horse = new Animals(4, '250kg');
// // horse.sePresenter();

// var chicken = new Bird(4, '3kg', 'court');
// console.log(chicken);
// chicken.sePresenter();

// let dateActuel = new Date();
// console.log(dateActuel.getDay());

// *****************************API*********************************************

// const apiUrl = 'https://blockchain.info/ticker';

// let timer = setInterval("bitcoin()", 5000);

// function bitcoin() {
//     // Création de la requête Ajax
//     let request = new XMLHttpRequest(); //Crée un objet
//     request.open('GET', apiUrl);
//     // TYPE DE RETOUR DE LA REQUTE
//     request.responseType = 'json';
//     request.send(); //On envoie la requete

//     // Des que l'on reçoit un reponse on execute une fonction
//     request.onload = function() {
//         // ON vérifie que tout c bien passé
//         if (request.readyState === XMLHttpRequest.DONE) {
//             if (request.status === 200) {
//                 let response = request.response; //On stock la reponse
//                 let prixEnEuro = response.EUR.last;
//                 document.querySelector('#price_label').textContent = prixEnEuro;
//             } else {
//                 alert('Une erreur s\' produite');
//             }
//         }
//     }
// }

// MA PROPRE REQUETE AJAX I' M SO PROUND OF ME
// const apiUrl = 'https://blockchain.info/ticker';

// setInterval(bitCoinPrice, 1000);

// function bitCoinPrice() {
//     let request = new XMLHttpRequest();

//     request.open('GET', apiUrl);
//     request.responseType = 'json';
//     request.send();

//     request.onload = function() {
//         if (request.readyState === XMLHttpRequest.DONE) {
//             if (request.status === 200) {
//                 let response = request.response;
//                 let priceEnEuro = response.EUR.last;
//                 document.getElementById('price_label').textContent = priceEnEuro;
//             } else {
//                 alert('Une erreur s\'est produite');
//             }
//         }
//     }
//     console.log('Prix Actualisé');
// }

// ENVOYER DES DONNEES VERS UNE API AVEC JS POST
// const apiUrl = 'https://lesoublisdelinfo.com/api.php';

// let request = new XMLHttpRequest();
// request.open('POST', apiUrl);
// // ON Définit le headera à envoyer à l'API
// request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
// request.responseType = 'json';
// request.send('prenom=Mamadou WONE');

// request.onload = function() {
//     if (request.readyState === XMLHttpRequest.DONE) {
//         if (request.status === 200) {
//             let response = request.response;
//             console.log(response);
//         } else {
//             alert('Une erreur s\' est produite');
//         }
//     }
// }

//****************************** */ APPLI METEO****************************************

function getWeather(ville) {
    let apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=d25716d961a86dd8ad7a074fd248ff59&units=metric'

    let request = new XMLHttpRequest();
    request.open('GET', apiUrl);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                let response = request.response;
                document.getElementById('temperature_label').textContent = response.main.temp_max;
                document.getElementById('ville').textContent = response.name;
            } else {
                alert('Une erreur est intervenue !! Veuillez réessayer!')
            }
        }
        console.log('Actualisé');
    }
}

getWeather('Dakar');


let changeCity = document.getElementById('changer');
changeCity.addEventListener('click', () => {
    let newCity = prompt('Changer de ville');
    getWeather(newCity);
});



// let me = new Person('boy');
// let you = new Person('girl');

// if (me.girlFriend === null && me.crushOn(you)) {
//     try {
//         if (me.askGirlOut(you) === 'ok') {
//             me.happy = true;
//         } else {
//             me.cry();
//         }
//     } catch (IAlreadyHaveABoysFriendException) {
//         me.cry();
//     }
// }