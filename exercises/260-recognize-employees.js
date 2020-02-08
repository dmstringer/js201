// Write a function "recognizeEmployees" that takes two arguments:
// 1) an array of names of people to be recognized
// 2) an array of employees of the month
// Return an array telling everyone that they did a great job, except employees
// of the month did an outstanding job.
//
// Examples:
// recognizeEmployees(['Susan', 'Anthony', 'Bill'], ['Bill'])
// > ['Great job, Susan!', 'Great job, Anthony!', 'Outstanding job, Bill!']
//
// recognizeEmployees(['Susan', 'Anthony', 'Bill'], ['Bill', 'Susan'])
// > ['Outstanding job, Susan!', 'Great job, Anthony!', 'Outstanding job, Bill!']
//
// recognizeEmployees(['Susan', 'Anthony', 'Bill'], ['Jennifer', 'Dylan'])
// > ['Great job, Susan!', 'Great job, Anthony!', 'Great job, Bill!']
//
// Hint: What is the best data structure for the employees of the month list?
function recognizeEmployees (arrNames, arrEmpMonth) {

    function checkEmp (empName) {
        
    }

    let arrayToReturn = arrNames.map(checkEmp)

    //for (let i = 0; i < arrNames.length; i++) {
    //    for (let j = 0; j < arrEmpMonth.length; j++) {
    //        if (arrNames[i] === arrEmpMonth[j]) {
    //            arrayToReturn[i] = 'Outstanding job, ' + arrNames[i] + '!'
    //            break
    //        } else {
    //            arrayToReturn[i] = 'Great job, ' + arrNames[i] + '!'
    //            break
    //        }
    //    }
    //}

    console.log(arrayToReturn)
    return arrayToReturn
}