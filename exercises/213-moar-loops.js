// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Complete the removeZAnimals function as described below:

function removeZAnimals () {
    // 1) declare an array with some strings
    const animals = ["alligator", "zebra", "crocodile", "giraffe"]
  
    // create an empty array (we will fill this with strings from the previous array)
    let animalsWithoutZ = []
  
    // 2) loop through "animals"
    // 3) add every item in "animals" to "animalsWithoutZ" unless the animal name
    //    contains the letter "z"
    //    HINT: remember you can search within a string
    // 4) return "animalsWithoutZ"
    for (let a = 0; a < animals.length; a++) {
      if (animals[a].indexOf('z') === -1) {
        animalsWithoutZ.push(animals[a])
      }
    }
    return animalsWithoutZ
  }
  
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // Write a function "removeAnyWordWithZ" that takes 1 argument: an array of strings
  // It should return a new array that has all of the items in the passed-in array minus
  // any words that contain the letter 'z' or 'Z' (case-insensitive)
  function removeAnyWordWithZ (theArray) {
    let noZWords = []
    for (let i = 0; i < theArray.length; i++) {
      if (theArray[i].indexOf('z') === -1) {
        if (theArray[i].indexOf('Z') === -1) {
        noZWords.push(theArray[i])
        }
      }
    }
    return noZWords
  }
  
  
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // Write a function "removeWordsWithChar" that takes 2 arguments:
  // 1) an array of strings
  // 2) a string of length 1 (ie: a single character)
  // It should return a new array that has all of the items in the first argument
  // except those that contain a character in the second argument (case-insensitive).
  //
  // Examples:
  // removeWordsWithChar(['aaa', 'bbb', 'ccc'], 'b') --> ['aaa', 'ccc']
  // removeWordsWithChar(['pizza', 'beer', 'cheese'], 'E') --> ['pizza']
  function removeWordsWithChar (anArray, oneChar) {
    let withoutChar = new Array ()
    let oneCharUp = oneChar.toUpperCase()

    for (let i = 0; i < anArray.length; i++) {
      let arrayAtI = anArray[i]
      let stringAtI = arrayAtI.toString()
      let stringAtIUp = stringAtI.toUpperCase()
      if (stringAtIUp.indexOf(oneCharUp) === -1) {
          withoutChar.push(anArray[i])
      }
    }
    return withoutChar
  }

