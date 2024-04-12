const searchInput = document.querySelector(`#search`)
const formEl = document.getElementById('submit')
const searchButton = document.querySelector('#search-button')
const resultsDiv = document.getElementById("results");
const apiKey = `GSR7zoBZ7gl3FAdkEk2rHsu7C85lXVHL`

function apiCall(param) {
   
    const apiUrl = `https://api.tomtom.com/traffic/services/4/flowSegmentData/absolute/10/json?key=GSR7zoBZ7gl3FAdkEk2rHsu7C85lXVHL&point=52.41072,4.84239&q=${param}`

    

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
    apiCall(query)
});
