// Write a function "makeSquare" which is given a size and returns a square of
// that size using asterisks.
// Example:
// makeSquare(5)
// *****
// *****
// *****
// *****
// *****

function makeSquare (aSize) {
    let strToReturn = ''
    if (aSize > 1) {
        for (let i = 0; i < aSize; i++) {
            for (let j = 0; j < aSize; j++) {
                strToReturn = strToReturn + '*'   
            }
            if (i < (aSize - 1)) {
                strToReturn = strToReturn + '\n'
            }
        }
    } else {
        if (aSize === 1) {
            return '*'
        } else {
            return ''
        }
    }
    return strToReturn
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBox" which is given a width and height and returns a
// hollow box of those dimensions.
// Example:
// makeBox(6, 4)
// ******
// *    *
// *    *
// ******

function makeBox (width, height) {
    let strToReturn = ''
    if (width === 0 && height === 0) {
        return ''
    } else if (width === 1 && height === 1) {
        return '*'
    } else {
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                if (i === 0 || i === (height - 1)) {
                    strToReturn = strToReturn + '*'
                } else if (j === 0 || j === (width - 1)  ) {
                    strToReturn = strToReturn + '*'
                } else {
                    strToReturn = strToReturn + ' '
                }
            }
            if (i < (height - 1)) {
                strToReturn = strToReturn + '\n'
            }
        }
    }
    return strToReturn
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBanner" which is given some text and returns a banner
// with a border surrounding the text. The border should stretch to the length
// of the text.
// Example:
// makeBanner('Welcome to DigitalCrafts')
// ****************************
// * Welcome to DigitalCrafts *
// ****************************

function makeBanner (someText) {
    let strToReturn = ''
    let someTextLen = 0
    if (someText === '') {
        someTextLen = 0
    } else {
        someTextLen = someText.length
    }
    for (let i = 0; i < 3; i++) {
        if (i === 0 || i === 2) {
            //write the top and bottom
            for (let i = 0; i < (someTextLen + 4); i++) {
                strToReturn = strToReturn + '*'
            }
        } else {
            //write the middle with text
            strToReturn = '* ' + someText + ' *'
        }
        if (i < 2) {
            strToReturn = strToReturn + '\n'
        }
    }
    return strToReturn
}