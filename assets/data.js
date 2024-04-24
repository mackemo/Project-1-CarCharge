const storedData = localStorage.getItem('userData');
const locationData = localStorage.getItem('locationData');

const locaData=JSON.parse(locationData)
// Local Storage
console.log(locaData)
const locationDiv = document.getElementById('location')
// For loop to loop over location results
for (let index = 0; index < locaData.length && index < 4; index++) {
    const locData = locaData[index];
    locationDiv.innerHTML += `
    <h3 class="results-content">Address ${index + 1}: </h3></h4> ${locData.AddressInfo.AddressLine1}</h4>`;
}

const town = document.getElementById('town')
town.innerHTML = `<h1> ${locaData[0].AddressInfo.Town} <h1>`

if (storedData) {
// Local Storage
    const userData = JSON.parse(storedData);
    console.log(userData);
    const resultsDiv = document.getElementById('results');
    // displays traffic results
    resultsDiv.innerHTML = `
    <h2 class="title">City Traffic:</h2>
    <h4 class="content">
        <span class="titletwo">Speed:</span>
        <span class="results-content">Average Speed:</span>
        <span class="value">${userData.flowSegmentData.currentSpeed} Mph</span>
        <br>
        <span class="results-content">Usual Speed:</span>
        <span class="value">${userData.flowSegmentData.freeFlowSpeed} Mph</span>
    </h4>
    <br>
    <h4 class="content">
        <span class="titletwo">Time:</span>
        <span class="results-content">Current Travel Time:</span>
        <span class="value">${userData.flowSegmentData.currentTravelTime} sec</span>
        <br>
        <span class="results-content">Usual Travel Time:</span>
        <span class="value">${userData.flowSegmentData.freeFlowTravelTime} sec</span>
    </h4>
    <br>
    <h4 class="content">
        <span class="results-content">Road Closure:</span>
        <span class="value">${userData.flowSegmentData.roadClosure}</span>
    </h4>
`;

} else {
    console.log('No user data found in local storage.');
}

// Event Listener for Back Button
const back = document.getElementById('back-button');
back.addEventListener('click', function() {
    location.href = 'index.html';
})