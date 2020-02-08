// Write a function "cipher" which is given a string, a shift, and returns
// the Caesar cipher of the string.
// Caesar cipher --> http://practicalcryptography.com/ciphers/caesar-cipher/
//
// Examples:
// > cipher('Genius without education is like silver in the mine', 5)
// 'ljsnzx bnymtzy jizhfynts nx qnpj xnqajw ns ymj rnsj'
// > cipher('We hold these truths to be self-evident', 8)
// 'em pwtl bpmam bzcbpa bw jm amtn-mdqlmvb'
function cipher (aStr, offsetNum) {
    let strToReturn = ''
    let newLetter = ''
    let letToNumObj = {'a':'0','b':'1','c':'2','d':'3','e':'4','f':'5','g':'6','h':'7','i':'8','j':'9','k':'10','l':'11','m':'12',
        'n':'13','o':'14','p':'15','q':'16','r':'17','s':'18','t':'19','u':'20','v':'21','w':'22','x':'23','y':'24','z':'25'};
    let letterArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    for (let i = 0; i < aStr.length; i++) {
        let lowCase = aStr.charAt(i).toLowerCase()
        if (letToNumObj[lowCase]) {
            let letToNum = Number(letToNumObj[lowCase])
            if ((letToNum + offsetNum) < 26) {
                newLetter = letterArr[(letToNum + offsetNum)]
            } else {
                newLetter = letterArr[(letToNum + offsetNum) - 26]
            }
            strToReturn = strToReturn + newLetter
        } else {
            strToReturn = strToReturn + aStr.charAt(i)
        }
    }
    return strToReturn
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "decipher" which is given a string, a shift, and returns the
// decoded Caesar cipher message.
//
// Examples:
// > decipher('cvvcem cv fcyp!', 2)
// 'attack at dawn!'
// > decipher('ehz czlod otgpcrpo ty l hzzo', 11)
// 'two roads diverged in a wood'
function decipher (aStr, offsetNum) {
    let strToReturn = ''
    let newLetter = ''
    let letToNumObj = {'a':'0','b':'1','c':'2','d':'3','e':'4','f':'5','g':'6','h':'7','i':'8','j':'9','k':'10','l':'11','m':'12',
        'n':'13','o':'14','p':'15','q':'16','r':'17','s':'18','t':'19','u':'20','v':'21','w':'22','x':'23','y':'24','z':'25'};
    let letterArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    for (let i = 0; i < aStr.length; i++) {
        let lowCase = aStr.charAt(i).toLowerCase()
        if (letToNumObj[lowCase]) {
            let letToNum = Number(letToNumObj[lowCase])
            if ((letToNum - offsetNum) > -1) {
                newLetter = letterArr[(letToNum - offsetNum)]
            } else {
                newLetter = letterArr[(letToNum - offsetNum) + 26]
            }
            strToReturn = strToReturn + newLetter
        } else {
            strToReturn = strToReturn + aStr.charAt(i)
        }
    }
    return strToReturn
}