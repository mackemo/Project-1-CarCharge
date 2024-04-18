const storedData = localStorage.getItem('userData');
const locationData = localStorage.getItem('locationData')

if (locationData) {

} else {
    console.log('No data found in local storage.');
}

const locaData=JSON.parse(locationData)
console.log(locaData)
const locationDiv = document.getElementById('location')
locationDiv.innerHTML = `<h1> Here are nearby charging stations: ${locationData.[0].AddressInfo.AddressLine1}</h1>`

if (storedData) {
    // console.log('Data retrieved from local storage:', storedData);
} else {
    console.log('No data found in local storage.');
}
const userData = JSON.parse(storedData);
console.log(userData)
const resultsDiv = document.getElementById('results');
resultsDiv.innerHTML = `<h1> Current Speed: ${userData.flowSegmentData.currentSpeed}</h1>
    <h1>Current Travel Time: ${userData.flowSegmentData.currentTravelTime}</h1>
    <h1> Ideal Speed: ${userData.flowSegmentData.freeFlowSpeed}</h1>
    <h1> Ideal Travel Time: ${userData.flowSegmentData.freeFlowTravelTime} </h1>
    <h1> Road Closure: ${userData.flowSegmentData.roadClosure}</h1>`