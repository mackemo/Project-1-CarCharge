const openchargeUrl = "https://api.openchargemap.io/v3/poi/?output=json&countrycode=US&maxresults=100?key=789f86d1-a5b2-4530-8ca0-fa64aebcc952";

const text = document.querySelector(`#text`)
const submit = document.querySelector('.submit')
const div1 = document.querySelector('.div1')

function apiCall(param) {
    
    const apiKey = `5QiZt17KAHd8oXISNHxv9rnkoERwRGlP`
    const apiUrl = `https://api.tomtom.com/map/1/tile/basic/main/0/0/0.png?view=Unified&key=${apiKey}`
}

div1.addEventListener('submit', function(event) {
    event.preventDefault();
    const textValue = text.value
    apiCall(textValue)
})