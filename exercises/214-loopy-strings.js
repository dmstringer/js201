// TIP: check out these references for Strings and Arrays:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "reverse" that computes the reversal of a string.
//
// Example:
// reverse("skoob") --> "books"
function reverse (aString) {
    let newStr = ''
    for (let i = ((aString.length)-1); i >= 0; i--) {
        newStr = newStr + aString.charAt(i)
    }
    return newStr
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "findLongestWord" that takes a string of words and returns
// the longest word in that string. If there are multiple words with the same
// maximum length return the first longest word.
//
// Example:
// findLongestWord('a book full of dogs') --> 'book'
function findLongestWord (theString) {
    let myArray = theString.split(' ');
    let strToReturn = myArray[0]
    for (let i = 1; i < myArray.length; i++) {
        if (myArray[i].length > strToReturn.length) {
            strToReturn = myArray[i]
        }
    }
    return strToReturn
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "nicer"
// It should clean up the language in its input sentence.
// Forbidden words include heck, darn, dang, and crappy.
//
// Example:
// nicer('mom get the heck in here and bring me a darn sandwich.')
// > 'mom get the in here and bring me a sandwich.'
function nicer (inSent) {
    const badWords = ['heck', 'darn', 'dang', 'crappy']
    let myArray = inSent.split(' ');
    let arrayWordBad = false;
    let strToReturn = '';

    for (let i = 0; i < myArray.length; i++) {
        arrayWordBad = false        
        for (let j = 0; j < 4; j++) {
            if (myArray[i] === badWords[j]) {
                arrayWordBad = true
            }
        }
        if (arrayWordBad === false) {
            if (i < myArray.length - 1) {
                strToReturn = strToReturn + myArray[i] + ' ';
            } else {
                strToReturn = strToReturn + myArray[i];
            }
        }
    }
    return strToReturn
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "capitalizeAll"
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence.
//
// Examples:
// capitalizeAll('hello world') --> 'Hello World'
// capitalizeAll('every day is like sunday') --> 'Every Day Is Like Sunday'
function capitalizeAll (aSent) {
    let myArray = aSent.split(' ');
    let strToReturn = ''
    for (let i = 0; i < myArray.length; i++) {
        let firstChar = myArray[i].charAt(0)
        let firstCharUp = firstChar.toUpperCase()
        let newWord = myArray[i].replace(firstChar, firstCharUp)
        if (i < myArray.length - 1) {
            strToReturn = strToReturn + newWord + ' ';
        } else {
            strToReturn = strToReturn + newWord;
        }
    }
    return strToReturn
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "split" that does the same thing as String.split
// It should take two inputs: (1) a string and (2) a delimiter string
// Do not use the native .split() method for this. Your task is to reverse-engineer
// .split() and write your own.
//
// Examples:
// split('a-b-c', '-') --> ['a', 'b', 'c']
// split('APPLExxBANANAxxCHERRY', 'xx') --> ['APPLE', 'BANANA', 'CHERRY']
// split('xyz', 'r') --> ['xyz']
function split (aString, aDelim) {
    let strLength = aString.length
    let delimLength = aDelim.length
    let arrayToReturn = []
    let numCharIn = 0
    let theSlice = ''
    
    while (numCharIn < strLength) {
        if (aString.indexOf(aDelim,numCharIn) === -1) {
            theSlice = aString.slice(numCharIn, strLength)
        } else {
            theSlice = aString.slice(numCharIn, aString.indexOf(aDelim,numCharIn))
        }
        arrayToReturn.push(theSlice)
        numCharIn = numCharIn + theSlice.length + delimLength

    }
    return arrayToReturn
}