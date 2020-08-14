const goBtn = document.getElementById('go')
const sunRise = document.getElementById('sunrise-text')
const sunSet = document.getElementById('sunset-text')
const city = document.getElementById('location')

const render = (rise, set) => {
    sunRise.classList.add('animate__animated', 'animate__bounceInUp');
    sunSet.classList.add('animate__animated', 'animate__bounceInUp');
    sunRise.innerText=`${rise} UTC`
    sunSet.innerText=`${set} UTC`
}

goBtn.addEventListener('click', () => {
    fetch(`https://freegeoip.app/json/`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        let location = data.city
        city.classList.add('animate__animated', 'animate__pulse');
        city.innerText = `Hello to ${location}!`
        let latt = data.latitude
        let longt = data.longitude
        let longLatt = `lat=${latt}&lng=${longt}`
        return fetch(`https://api.sunrise-sunset.org/json?${longLatt}&date=today`)
    })
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        let rise = data.results.sunrise
        let set = data.results.sunset
        render(rise, set)
    })
    .catch((err) => {
        console.log(err)
    })
})
