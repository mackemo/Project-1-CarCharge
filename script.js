

























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