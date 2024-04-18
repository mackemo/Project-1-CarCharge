const storedData = localStorage.getItem('userData');
const locationData = localStorage.getItem('locationData')

if (locationData) {

} else {
    console.log('No data found in local storage.');
}

const locaData=JSON.parse(locationData)
console.log(locaData)
const locationDiv = document.getElementById('location')
for (let index = 0; index < locaData.length && index < 4; index++) {
    const locData = locaData[index];
    locationDiv.innerHTML += `<h1>Address ${index + 1}: ${locData.AddressInfo.AddressLine1}</h1>`;
}



if (storedData) {
} else {
    console.log('No data found in local storage.');
}
const userData = JSON.parse(storedData);
console.log(userData)
const resultsDiv = document.getElementById('results');
resultsDiv.innerHTML = `<h1> Average Current Speed: ${userData.flowSegmentData.currentSpeed} Mph</h1>
    <h1>Current Travel Time: ${userData.flowSegmentData.currentTravelTime}</h1>
    <h1> Usual Speed: ${userData.flowSegmentData.freeFlowSpeed} Mph</h1>
    <h1> Usual Travel Time: ${userData.flowSegmentData.freeFlowTravelTime} </h1>
    <h1> Road Closure: ${userData.flowSegmentData.roadClosure}</h1>`
    console.log(userData)