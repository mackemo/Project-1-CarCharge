const searchInput = document.querySelector(`#lon`, `#lat`)
const formEl = document.getElementById('submit')
const searchButton = document.querySelector('#search-button')
const resultsDiv = document.getElementById("results");
const apiKey = `GSR7zoBZ7gl3FAdkEk2rHsu7C85lXVHL`
const lat = document.getElementById('lat')
const lon = document.getElementById('lon')
const memphis = document.getElementById('memphis')
const nashville = document.getElementById('nashville')
const knoxville = document.getElementById('knoxville')
const chattanooga = document.getElementById('chattanooga')
const originalBrightness = document.body.style.filter;

function apiCall(param1, param2) {
   
    const apiUrl = `https://api.tomtom.com/traffic/services/4/flowSegmentData/absolute/10/json?key=${apiKey}&point=${param1},${param2}`

     fetch(apiUrl).then(function(response){
        console.log(response);
        return response .json(); 
    }).then(function(data){
        console.log(data)
        localStorage.setItem('user', JSON.stringify(data));
  });
}

formEl.addEventListener("submit", function (event) {
    event.preventDefault();
    const longitude = lon.value
    const latitude = lat.value
    apiCall(latitude, longitude) 
    window.location.href = "data.html"
});


memphis.addEventListener("click", function (event) {
    event.preventDefault();
    lon.value = -90.0490
    lat.value = 35.1495

})

nashville.addEventListener("click", function (event) {
    event.preventDefault();
    lon.value = -86.7816
    lat.value = 36.1627

})

knoxville.addEventListener("click", function (event) {
    event.preventDefault();
    lon.value = -83.9207
    lat.value = 35.9606

})

chattanooga.addEventListener("click", function (event) {
    event.preventDefault();
    lon.value = -85.3094
    lat.value = 35.0458

})

