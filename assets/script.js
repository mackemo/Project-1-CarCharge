const searchInput = document.querySelector(`#city`);
const formEl = document.getElementById('submit');
const searchButton = document.querySelector('#search-button');
const resultsDiv = document.getElementById("results");
const apiKey = `GSR7zoBZ7gl3FAdkEk2rHsu7C85lXVHL`;

function geocodeCity(city) {
    const geoUrl = `https://api.tomtom.com/search/2/geocode/${city}.json?key=${apiKey}`;

    fetch(geoUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (geoResults) {
            console.log(geoResults);
            const latitude = geoResults.results[0].position.lat;
            const longitude = geoResults.results[0].position.lon;
            apiCall(latitude, longitude);
            apiCall1(latitude, longitude);
        })
}

formEl.addEventListener("submit", function (event) {
    event.preventDefault();
    const city = searchInput.value;
    geocodeCity(city);
});

// function for OpenCharge API
function apiCall1(lat, lon) {
    const baseUrl = `https://api.openchargemap.io/v3/poi/?output=json&countrycode=US&stateorprovince=TN&maxresults=20?key=789f86d1-a5b2-4530-8ca0-fa64aebcc952&latitude=${lat}&longitude=${lon}`
    
    fetch(baseUrl).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data)
        // Local Storage
        localStorage.setItem('locationData', JSON.stringify(data));
        window.location.href = "data.html"
    });

} 

// function for TomTom API
function apiCall(lat, lon) {
    const apiUrl = `https://api.tomtom.com/traffic/services/4/flowSegmentData/absolute/10/json?key=${apiKey}&point=${lat},${lon}&unit=mph`

    fetch(apiUrl).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data)
        // Local Storage
        localStorage.setItem('userData', JSON.stringify(data));
    });
}
