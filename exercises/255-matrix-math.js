// Write a function "matrixAdd" which is given two two-dimensional arrays, and
// returns a new two-dimensional array containing their matrix sum.
// Example:
// > matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]])
// [ [ 6, 5 ], [ 3, 4 ] ]
function matrixAdd (arrOne, arrTwo) {

    let arrOneDims1 = arrOne[0]
    let arrOneDims2 = arrOne[1]

    let arrTwoDims1 = arrTwo[0]
    let arrTwoDims2 = arrTwo[1]

    let returnArr = []
    let returnArrDims1 = []
    let returnArrDims2 = []

    returnArrDims1[0] = (arrOneDims1[0] + arrTwoDims1[0])
    returnArrDims1[1] = (arrOneDims1[1] + arrTwoDims1[1])

    returnArrDims2[0] = (arrOneDims2[0] + arrTwoDims2[0])
    returnArrDims2[1] = (arrOneDims2[1] + arrTwoDims2[1])

    returnArr[0] = returnArrDims1

    returnArr[1] = returnArrDims2
    return returnArr

}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "matrixMultiply" which is given two two-dimensional arrays;
// you can assume the matricies are of size 2x2.
// It should return the result of matrix multiplication of the two matricies.
// What is matrix multiplication? https://tinyurl.com/j6jgh2u
//
// Example:
// > matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]])
// [ [22,  8], [27, 10] ]
function matrixMultiply (arrOne, arrTwo) {
    let arrOneDims1 = arrOne[0]
    let arrOneDims2 = arrOne[1]

    let arrTwoDims1 = arrTwo[0]
    let arrTwoDims2 = arrTwo[1]

    let returnArr = []
    let returnArrDims1 = []
    let returnArrDims2 = []

    returnArrDims1[0] = ((arrOneDims1[0] * arrTwoDims1[0]) + (arrOneDims1[1] * arrTwoDims2[0]))
    returnArrDims1[1] = ((arrOneDims1[0] * arrTwoDims1[1]) + (arrOneDims1[1] * arrTwoDims2[1]))

    returnArrDims2[0] = ((arrOneDims2[0] * arrTwoDims1[0]) + (arrOneDims2[1] * arrTwoDims2[0]))
    returnArrDims2[1] = ((arrOneDims2[0] * arrTwoDims1[1]) + (arrOneDims2[1] * arrTwoDims2[1]))

    returnArr[0] = returnArrDims1

    returnArr[1] = returnArrDims2
    return returnArr

}