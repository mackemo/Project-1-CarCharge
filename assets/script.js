const searchInput = document.querySelector(`#lon`, `#lat`)
const formEl = document.getElementById('submit')
const searchButton = document.querySelector('#search-button')
const resultsDiv = document.getElementById("results");
const apiKey = `GSR7zoBZ7gl3FAdkEk2rHsu7C85lXVHL`
const lat = document.getElementById('lat')
const lon = document.getElementById('lon')

function apiCall(param1, param2) {
   
    const apiUrl = `https://api.tomtom.com/traffic/services/4/flowSegmentData/absolute/10/json?key=${apiKey}&point=${param1},${param2}`

    

    fetch(apiUrl).then(function(response){
        console.log(response);
        return response .json();
    }).then(function(data){
        console.log(data)
    })
}

formEl.addEventListener("submit", function (event) {
    event.preventDefault();
    const query = searchInput.value
    const longitude = lon.value
    const latitude = lat.value
    apiCall(latitude, longitude)
});