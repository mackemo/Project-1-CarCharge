const searchBtn = document.getElementById('search-btn');
const apiKey = `GSR7zoBZ7gl3FAdkEk2rHsu7C85lXVHL`;
const city = JSON.parse(localStorage.getItem('search-input')) || [];


const memphis = document.getElementById('memphis')
const nashville = document.getElementById('nashville')
const knoxville = document.getElementById('knoxville')
const chattanooga = document.getElementById('chattanooga')
const resultsDiv = document.getElementById("results");
const originalBrightness = document.body.style.filter;


searchBtn.addEventListener('click', function(e) {
    e.preventDefault();

    let searchInput = document.getElementById('search-input').value;
    city.push(searchInput);
    localStorage.setItem('search-input', JSON.stringify(city));

    searchAPI(city);
    
});

function searchAPI(city) {

    const geoURL = `https://api.tomtom.com/search/2/geocode/${city}.json?key=${apiKey}`;

    fetch(geoURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (geoResults) {
            console.log(geoResults);
            const lat = geoResults.results[0].position.lat;
            const lon = geoResults.results[0].position.lon;
            console.log(lat);
            console.log(lon);

            const tomUrl = `https://api.tomtom.com/traffic/services/4/flowSegmentData/absolute/10/json?key=${apiKey}&unit=mph&point=${lat},${lon}`;

            fetch(tomUrl)
                .then(function (response) {
                    return response.json();
                })
                .then(function (tomData) {
                    console.log(tomData);
                    localStorage.setItem('locationData', JSON.stringify(data));
                    window.location.href = "data.html"
                })

            const ocURL = `https://api.openchargemap.io/v3/poi/?output=json&maxresults=20&key=789f86d1-a5b2-4530-8ca0-fa64aebcc952&latitude=${lat}&longitude=${lon}`;
    
            fetch(ocURL)
                .then(function (response) {
                    return response.json();
                })
                .then(function (ocData) {
                    console.log(ocData);
                    localStorage.setItem('userData', JSON.stringify(data));
                })
        })
}

// Saved coordinated for 4 cities
memphis.addEventListener("click", function (event) {
    event.preventDefault();
    

})

nashville.addEventListener("click", function (event) {
    event.preventDefault();
    l

})

knoxville.addEventListener("click", function (event) {
    event.preventDefault();
    

})

chattanooga.addEventListener("click", function (event) {
    event.preventDefault();
    

})

