// Write a function "gcd" that returns the Greatest Common Divisor of two numbers
// If no GCD exists, return 1
// Greatest Common Divisor --> https://tinyurl.com/gr84qca
//
// Examples:
// gcd(5, 1) --> 1
// gcd(3, 15) --> 3
// gcd(50, 20) --> 10
function gcd (num1, num2) {
    let divisorsOfNum1 = []
    let divisorsOfNum2 = []
    let comDivs = []
    let grtComDiv = 0

    for (let i = 0; i < num1; i++) {
        if (num1 % (i+1) === 0) {
            divisorsOfNum1.push((i+1))
        }
    }
    console.log(divisorsOfNum1)
    console.log('divisors of num1')
    for (let i = 0; i < num2; i++) {
        if (num2 % (i+1) === 0) {
            divisorsOfNum2.push((i+1))
        }
    }
    console.log(divisorsOfNum2)
    console.log('divisors of num2')
    for (let i = 0; i < divisorsOfNum1.length; i++) {
        for (let i = 0; i < divisorsOfNum2.length; i++) {
            if (divisorsOfNum1[i] === divisorsOfNum2[i]) {
                comDivs.push(divisorsOfNum1[i])
                break
            }
        }
    }
    console.log(comDivs)
    console.log('common divisors')
    for (let i = 0; i < comDivs.length; i++) {
        if (comDivs[i] > grtComDiv) {
            grtComDiv = comDivs[i]
        }
    }
    console.log(grtComDiv)
    console.log(' ')
    return grtComDiv
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "factors" which is given a number and returns an array
// containing all its factors.
// What are factors? --> https://tinyurl.com/gncg62o
//
// Examples:
// factors(1) --> [1]
// factors(12) --> [1, 2, 3, 4, 6, 12]
// factors(42) --> [1, 2, 3, 6, 7, 14, 21, 42]

