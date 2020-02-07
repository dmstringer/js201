// Write a function "numberJoinerWhile" which is given a start number and an end number.
// It should return a string of the numbers joined together by the "_" character.
// Use a "while" loop to do this.
// Examples:
// numberJoinerWhile(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerWhile(12, 14) --> '12_13_14'
function numberJoinerWhile (startNum, endNum) {
    var joinString = ''
    var i = startNum
    while (i <= endNum) {
        joinString = joinString + i.toString()
        if (i < endNum) {
            joinString = joinString + '_'
        }
        i++
    }
    return joinString
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFor" which does the same thing as "numberJoinerWhile",
// except using a "for" loop internally.
function numberJoinerFor (startNum, endNum){
    var joinString = ''
    for (let i = startNum; i <= endNum; i++) {
        joinString = joinString + i.toString()
        if (i < endNum) {
            joinString = joinString + '_'
        }
    }
    return joinString
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFancy" which does the same thing as "numberJoinerWhile",
// except it takes an optional third argument specifying the separator between the numbers.
// Use either a "while" or a "for" loop (your preference).
// Examples:
// numberJoinerFancy(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerFancy(1, 5, '~') --> 1~2~3~4~5
// numberJoinerFancy(3, 6, '***BANANAS***') --> 1***BANANAS***2***BANANAS***3
function numberJoinerFancy (startNum, endNum, theSep) {
    var joinString = ''
    var i = startNum
    while (i <= endNum) {
        joinString = joinString + i.toString()
        if (i < endNum) {
            if (typeof theSep === 'undefined') {
                joinString = joinString + '_'
            } else {
                joinString = joinString + theSep
            }
        }
        i++
    }
    return joinString
}