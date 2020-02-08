// Write a function "ticTacToe" which takes a two-dimensional array of size 3x3.
// Each cell in the two dimensional array can be one of 'O', 'X', or null.
// Return 'O' if O makes a winning row.
// Return 'X' if X makes a winning row.
// Return null if there is no winning row on the board.
//
// Examples:
// > ticTacToe([
//   ['O', 'O', 'O'],
//   ['X', null, 'X'],
//   [null, 'X', null]
//   ])
// 'O'
// > ticTacToe([
//   ['O', 'X', 'O'],
//   ['O', 'X', null],
//   [null, 'X', null]
//   ])
// 'X'
// > ticTacToe([
//   ['O', 'X', 'O'],
//   ['O', 'O', null],
//   [null, 'X', 'X']
//   ])
// null
function ticTacToe (theArray) {
    let topRowArr = theArray[0]
    let midRowArr = theArray[1]
    let botRowArr = theArray[2]

    //check top row
    if (topRowArr[0] === topRowArr[1] && topRowArr[0] === topRowArr[2]) {
        return topRowArr[0]
    }
    //check middle row
    if (midRowArr[0] === midRowArr[1] && midRowArr[0] === midRowArr[2]) {
        return midRowArr[0]
    }
    //check bottom row
    if (botRowArr[0] === botRowArr[1] && botRowArr[0] === botRowArr[2]) {
        return botRowArr[0]
    }
    //check left column
    if (topRowArr[0] === midRowArr[0] && topRowArr[0] === botRowArr[0]) {
        return topRowArr[0]
    }
    //check middle column
    if (topRowArr[1] === midRowArr[1] && topRowArr[1] === botRowArr[1]) {
        return topRowArr[1]
    }
    //check right column
    if (topRowArr[2] === midRowArr[2] && topRowArr[2] === botRowArr[2]) {
        return topRowArr[2]
    }
    //check top-left to bottom-right diag
    if (topRowArr[0] === midRowArr[1] && topRowArr[0] === botRowArr[2]) {
        return topRowArr[0]
    }
    //check top-right to bottom-left diag
    if (topRowArr[2] === midRowArr[1] && topRowArr[2] === botRowArr[0]) {
        return topRowArr[2]
    }
    return null
}