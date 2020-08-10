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
	// // The town/city input will return a latitude/longitude
	//  //use this information to call the 2nd API to return the results
    // Change time to user's location time
// Tweak event listeners so that the results will appear in a variable
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
// event listeners

// resRise.addEventListener('click', console.log('click')) 
// resSet.addEventListener('click', console.log('click'))

// functions


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
        var date = new Date(rise)
        console.log(date.toString())
    })
    .catch((err) => {
        console.log(err)
    })
})


// // take latitude and longitude from getLocation, and plug into URL for next API call
// // should it be in one function?



