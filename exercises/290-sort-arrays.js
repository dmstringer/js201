// TIP: check out this reference for how to sort arrays:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "alphaSort" that sorts an array of strings alphabetically.
//
// Examples:
// alphaSort(['b', 'a', 'c'])
// > ['a', 'b', 'c']
function alphaSort (theArray) {
    let sortedArray = theArray.sort()
    return sortedArray
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "strLengthSort" that sorts an array of strings by how long
// each string is. Put the shortest strings first.
//
// Examples:
// strLengthSort(['Apple', 'Banana', 'Cherry'])
// > ['Apple', 'Cherry', 'Banana']
function strLengthSort (strArray) {

    function compareStrings (passedStringOne, passedStringTwo) {
        if (passedStringOne.length < passedStringTwo.length) {
            return -1
        } else if (passedStringOne.length > passedStringTwo.length) {
            return 1
        } else {
            return 0
        }
    }

    let sortedArray = strArray.sort(compareStrings)
    return sortedArray

}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "sumSort". Given an array of array of numbers like:
// var arr = [
//   [1, 3, 4],
//   [2, 4, 6, 8],
//   [3, 6]
// ];
//
// Sort the array by the sum of each inner array. For the above example, the
// respective sums for each inner array is 8, 20, and 9.
//
// Example:
// sumSort([
//   [9, 1, 9],
//   [2],
//   [4, 5]
// ])
// > [[2], [4, 5], [9, 1, 9]]
function sumSort (theArrOfArrays) {

    function compareArrays (passedArrayOne, passedArrayTwo) {
        let sumdArrayOne = passedArrayOne.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue
            }, 0)
        let sumdArrayTwo = passedArrayTwo.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue
            }, 0)

        if (sumdArrayOne < sumdArrayTwo) {
            return -1
        } else if (sumdArrayOne > sumdArrayTwo) {
            return 1
        } else {
            return 0
        }
    }

    let sortedArray = theArrOfArrays.sort(compareArrays)
    return sortedArray
}
