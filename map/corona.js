var data = null;

let request = new XMLHttpRequest();
request.withCredentials = true;

// xhr.addEventListener("readystatechange", function () {
// 	if (this.readyState === this.DONE) {
// 		console.log(this.responseText);
// 	}
// });

// request.open("GET", "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=Canada");
request.open("GET", "https://covid-193.p.rapidapi.com/statistics");
request.responseType = 'json';
request.setRequestHeader("x-rapidapi-host", "covid-193.p.rapidapi.com");
request.setRequestHeader("x-rapidapi-key", "0f7a7ada68msh267bc5e330be523p1a6bd2jsn584183b3a9ee");

request.send();

request.onload = function() {
    if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
            let response = request.response;
            console.log(response);

        } else {
            alert('Une erreur est survenue');
        }
    }
}

// var data = null;

// var xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function() {
//     if (this.readyState === this.DONE) {
//         console.log(this.responseText);
//     }
// });

// xhr.open("GET", "https://covid-193.p.rapidapi.com/statistics");
// xhr.setRequestHeader("x-rapidapi-host", "covid-193.p.rapidapi.com");
// xhr.setRequestHeader("x-rapidapi-key", "0f7a7ada68msh267bc5e330be523p1a6bd2jsn584183b3a9ee");

// xhr.send(data);


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