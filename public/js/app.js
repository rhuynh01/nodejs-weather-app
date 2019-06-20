const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const sunriseTime = document.querySelector('#sunriseTime')
const sunsetTime = document.querySelector('#sunsetTime')

messageOne.textContent = 'Loading...'
messageTwo.textContent = ''

weatherForm.addEventListener("submit", e => {
    e.preventDefault();

    const location = search.value;

    fetch("/weather?address=" + location).then(response => {
        response.json().then(data => {
            // console.log(data)
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
                // sunriseTime.textContent = data.forecast['sunriseTime']
                // sunsetTime.textContent = data.forecast['sunsetTime']
                
            }
        });
    });
});