// Write a function "longLongVowels" which is given a string, and returns a
// version of that string extending any long vowels to 5 characters.
//
// Examples:
// > longLongVowels('Good')
// 'Goooood'
// > longLongVowels('Cheese')
// 'Cheeeeese'
// > longLongVowels('Man')
// 'Man'
function longLongVowels (aStr) {
    let strToReturn = ''
    for (let i = 0; i < aStr.length; i++) {
        if (aStr.charAt(i) === 'a' || 'e' || 'i' || 'o' || 'u' || 'A' || 'E' || 'I' || 'O' || 'U') {
            if (aStr.charAt(i) === aStr.charAt(i+1)) {
                for (let j = 0; j < 5; j++) {
                    strToReturn = strToReturn + aStr.charAt(i)
                }
                i++
            } else {
                strToReturn = strToReturn + aStr.charAt(i)
            }
        } else {
            strToReturn = strToReturn + aStr.charAt(i)
        }
    }
    return strToReturn
}