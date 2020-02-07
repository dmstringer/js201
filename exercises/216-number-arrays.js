// Write a function "max" that takes an array of numbers returns the highest
// number in the array.
function max (anArray) {
    let highNum = 0
    for (let i = 0; i < anArray.length; i++) {
        if (anArray[i] > highNum) {
            highNum = anArray[i]
        }
    }
    return highNum
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "sumNumbers" which is given an array of numbers and returns
// the sum of the numbers.
// Example:
// sumNumbers([1, 4, 8]) --> 13
function sumNumbers (anArr) {
    let numSum = 0
    for (let i = 0; i < anArr.length; i++) {
        numSum = numSum + anArr[i]
    }
    return numSum
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "positives" which is given an array of numbers and
// returns a new array containing only the positive numbers within the given array.
// Examples:
// positives([1, -3, 5, -3, 0]) --> [1, 5]
// positives([1, 2, 3]) --> [1, 2, 3]
// positives([-1, -2, -3]) --> []
function positives (arrNums) {
    let newArr = []
    for (let i = 0; i < arrNums.length; i++) {
        if (arrNums[i] > 0) {
            newArr.push(arrNums[i])
        }
    }
    return newArr
}



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "evens" which takes an array of numbers and returns a new
// array containing only the even numbers in the given array.
// Hint: you may want to re-use your "isEven" function from 01-predicate-functions.js
function evens (arrNums) {
    let newArr = []
    for (let i = 0; i < arrNums.length; i++) {
        if (arrNums[i] % 2 === 0) {
            newArr.push(arrNums[i])
        }
    }
    return newArr
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "odds" which takes an array of numbers and returns a new
// array containing only the odd numbers in the given array.
// Hint: you may want to re-use your "isOdd" function from 01-predicate-functions.js
function odds (arrNums) {
    let newArr = []
    for (let i = 0; i < arrNums.length; i++) {
        if (arrNums[i] % 2 !== 0) {
            newArr.push(arrNums[i])
        }
    }
    return newArr
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "integers" which takes an array of numbers and returns a new
// array containing only the integers in the given array.
// Hint: Do you need a new predicate function for this?
//
// Example:
// integers([3.14, 2.4, 7, 8.1, 2]) --> [7, 2]
function integers (arrNums) {
    let newArr = []
    for (let i = 0; i < arrNums.length; i++) {
        if (Number.isInteger(arrNums[i])) {
            newArr.push(arrNums[i])
        }
    }
    return newArr
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "squareDance" which takes an array of numbers and returns a
// new array containing the result of squaring each of the numbers in the given array.
//
// Example:
// squareDance([1, 2, 3]) --> [1, 4, 9]
function squareDance (arrNums) {
    let newArr = []
    for (let i = 0; i < arrNums.length; i++) {
        let squNum = arrNums[i] * arrNums[i]
        newArr.push(squNum)
    }
    return newArr
}