getInfo = (car) => {
    let urlApi = 'https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/' + car + '?format=json'
    let thioro = new XMLHttpRequest();
    thioro.open('GET', urlApi);
    thioro.responseType = 'json';
    thioro.send();
// Day Of
    thioro.onload = () => {
        if (thioro.readyState === XMLHttpRequest.DONE) {
            console.log(thioro.status);
            if (thioro.status === 200) {
                let response = thioro.response;
                for (let index = 0; index < response.Results.length; index++) {
                    const element = response.Results[index];
                    let tr = document.createElement('tr');
                    let th = document.createElement('th');
                    th.textContent = index;
                    let td = document.createElement('td');
                    td.textContent = element.Model_Name;
                    tr.append(th);
                    tr.append(td);
                    document.querySelector('.tbody').append(tr);
                }
            }
        } else if (response.length === 'undefined') {
            alert("Une erreur est survenue");
        }
    }
}

let form = document.querySelector('form');
let input = document.querySelector('input');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();
    clearTable();
    getInfo(input.value);
    input.value = '';
});


function clearTable() {
    let tbody = document.querySelector('.tbody');
    tbody.textContent = '';
}