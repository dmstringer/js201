// Write a function "leetspeak" which is given a string, and returns the
// leetspeak equivalent of the string.
// To convert text to its leetspeak version, make the following substitutions:
// A => 4
// E => 3
// G => 6
// I => 1
// O => 0
// S => 5
// T => 7
//
// HINT: What is the best data structure to represent the substitutions?
//
// Examples:
// leetspeak('Leet') --> "l337"
// leetspeak('ORANGE') --> "0r4n63"
function leetspeak (aStr) {
    let strToReturn = ''
    let leetVersions = {
        'A': '4', 
        'E': '3',
        'G': '6',
        'I': '1',
        'O': '0',
        'S': '5',
        'T': '7',
        'a': '4', 
        'e': '3',
        'g': '6',
        'i': '1',
        'o': '0',
        's': '5',
        't': '7'
    }
    for (let i = 0; i < aStr.length; i++) {
        if (leetVersions[aStr.charAt(i)])  {
            strToReturn = strToReturn + leetVersions[aStr.charAt(i)]
        } else {
            strToReturn = strToReturn + aStr[i].toLowerCase()
        }
    }
    return strToReturn
}