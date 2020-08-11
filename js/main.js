// // Add body images
// // Add HTML for Darkmode button
// // add HTML for a reset button that removes the added cards
// // Add HTML for an input field for zipcode
// // add container element 'card's for the results to appear in
	// // sunset card
	// // sunrise card
// // add cached element references for the container element in JS file
// // add cached element reference for the dark/light button
// // add cached element for go button
// // add cached element for the reset button
// // add event listener for input field
// // add event listener for go button
// // add event listener for dark/light mode button
// write code for API call and console.log
	// // The town/city input will return a latitude/longitude
	//  //use this information to call the 2nd API to return the results
    // Change time to user's location time
// //Tweak event listeners so that the results will appear in a variable
// add a function to handle appending the sunset card
// add a function to handle appending the sunrise card
// style the cards with sunset/sunrise images respectively 
    // may want to consider displaying the result text over the image
    
// create a function that translates UTC time into the user's local time 


// variables

// cached element references
const resRise = document.getElementById('remRise')
const resSet = document.getElementById('remSet')
const goBtn = document.getElementById('button-addon1')
const container = document.getElementById('container')

const sunRise = document.getElementById('sunrise-text')
const sunSet = document.getElementById('sunset-text')

// event listeners

resRise.addEventListener('click', console.log('click'), () => {
    sunRise.innerText = ''
})
resSet.addEventListener('click', console.log('click'), remove)

// functions
// const render = (rise, set) => {
//     sunRise.innerHTML=`The sunrise is at ${rise}`
//     sunSet.innerHTML=`The sunset is at ${set}`
// }

const remove = (sunRise, sunSet) => {
    sunRise.innerText = ''
    sunSet.innerText = ''
}
goBtn.addEventListener('click', () => {
    fetch(`https://freegeoip.app/json/`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
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
        sunRise.innerText = `${rise} UTC`
        sunSet.innerText = `${set} UTC`
    })
    .catch((err) => {
        console.log(err)
    })
})

// const date1 = new Date();

// console.log(date1.getTimezoneOffset());










