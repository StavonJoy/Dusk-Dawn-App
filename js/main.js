// Add body images
// // Add HTML for Darkmode button
// // add HTML for a reset button that removes the added cards
// // Add HTML for an input field for zipcode
// // add container element 'card's for the results to appear in
	// // sunset card
	// // sunrise card
// add cached element references for the container element in JS file
// // add cached element reference for the dark/light button
// // add cached element for go button
// // add cached element for the reset button
// // add event listener for input field
// // add event listener for go button
// // add event listener for dark/light mode button
// write code for API call and console.log
	// The town/city input will return a latitude/longitude
	// use this information to call the 2nd API to return the results
	// perhaps a function?
// Tweak event listeners so that the results will appear in a variable
// add a function to handle appending the sunset card
// add a function to handle appending the sunrise card
// style the cards with sunset/sunrise images respectively 
    // may want to consider displaying the result text over the image
    
// create a function that translates UTC time into the user's local time 


// variables

// cached element references
const testBtn = document.getElementById('test')
const resRise = document.getElementById('resRise')
const resSet = document.getElementById('resSet')
const goBtn = document.getElementById('button-addon1')

// event listeners

// resRise.addEventListener('click',) 
// resSet.addEventListener('click',)

// functions
// const getZip = () => {
//     const zip = document.getElementById('zipcode').value
//     return zip
// }
let latt, long
let longLatt = ""

const getLocation = (longLatt) => {
    fetch(`https://freegeoip.app/json/`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        let latt = data.latitude
        let longt = data.longitude
        longLatt = `lat=${latt}&lng=${longt}`
    })
    .then(sunCatch)
    
}
let sunCatch = (longLatt) => {
    (fetch(`https://api.sunrise-sunset.org/json?${longLatt}`))
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        let rise = data.results.sunrise
        let set = data.results.sunset
        console.log(rise, set)
    })
    .catch((err) => {
        console.log(err)
    })
}


goBtn.addEventListener('click', () => getLocation())

// const getSunrise = () => {
//     fetch("https://api.sunrise-sunset.org/json?lat=41.823872&lng=-71.411987")
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
//         let rise = data.results.sunrise
//         console.log(rise)
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// }
