// Write a function "coolCities" which takes an array of city Objects like such:
// var cities = [
//   { name: 'Los Angeles', temperature: 60.0},
//   { name: 'Atlanta', temperature: 52.0 },
//   { name: 'Detroit', temperature: 48.0 },
//   { name: 'New York', temperature: 80.0 }
// ];
// and returns a new array containing only those cities whose temperature is
// cooler than 70 degrees.
function coolCities (cityArr1) {
    let arrayToReturn = []
    for (let i = 0; i < cityArr1.length; i++) {
        if (cityArr1[i].temperature < 70.0) {
            arrayToReturn.push(cityArr1[i])
        }
    }
    return arrayToReturn
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "cityNames" which takes an array of city objects like the
// above problem and returns an array of the cities names.
function cityNames (cityArr2) {
    let arrayToReturn = []
    for (let i = 0; i < cityArr2.length; i++) {
            arrayToReturn.push(cityArr2[i].name)
    }
    return arrayToReturn
}