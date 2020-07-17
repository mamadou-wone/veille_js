function getWeather(ville) {
    const urlApi = 'http://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=d25716d961a86dd8ad7a074fd248ff59&units=metric';
    let request = new XMLHttpRequest();
    request.open('GET', urlApi);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                let response = request.response;
                document.getElementById('temperature_label').textContent = response.main.temp_max;
                document.getElementById('ville').textContent = response.name;
            }
        }
    }
}

getWeather('Dakar');

let changeCity = document.getElementById('changer');
changeCity.addEventListener('click', () => {
    let newCity = prompt('Entrer une nouvelle ville :)');
    getWeather(newCity);
});