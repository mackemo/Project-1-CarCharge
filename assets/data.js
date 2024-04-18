const storedData = localStorage.getItem('userData');

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