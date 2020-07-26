var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
    if (this.readyState === this.DONE) {
        console.log(this.responseText);
    }
});

xhr.open("GET", "https://billboard-api2.p.rapidapi.com/hot-100?date=2019-05-11&range=1-10");
xhr.setRequestHeader("x-rapidapi-host", "billboard-api2.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "0f7a7ada68msh267bc5e330be523p1a6bd2jsn584183b3a9ee");

xhr.send(data);