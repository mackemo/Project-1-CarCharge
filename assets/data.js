const storedData = localStorage.getItem('userData');
const locationData = localStorage.getItem('locationData');

const locaData=JSON.parse(locationData)
// Local Storage
console.log(locaData)
const locationDiv = document.getElementById('location')
// For loop to loop over location results
for (let index = 0; index < locaData.length && index < 4; index++) {
    const locData = locaData[index];
    locationDiv.innerHTML += `<h3>Address ${index + 1}: </h3></h4> ${locData.AddressInfo.AddressLine1}</h4>`;
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
        <h3> Average Current Speed: </h3><h4> ${userData.flowSegmentData.currentSpeed} Mph </h4>
        <h3> Current Travel Time: </h3><h4> ${userData.flowSegmentData.currentTravelTime} sec </h4>
        <h3> Usual Speed: </h3><h4> ${userData.flowSegmentData.freeFlowSpeed} Mph </h4>
        <h3> Usual Travel Time: </h3><h4> ${userData.flowSegmentData.freeFlowTravelTime} sec </h4>
        <h3> Road Closure: </h3><h4> ${userData.flowSegmentData.roadClosure} </h4>
    `;
} else {
    console.log('No user data found in local storage.');
}

// Event Listener for Back Button
const back = document.getElementById('back-button');
back.addEventListener('click', function() {
    location.href = 'index.html';
})