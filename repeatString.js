const repeatString = function (string, num) {
    if (num < 0 ) {
        return 'ERROR' // for number below 0
    }
    let repeatedString = '' // create a new string variable
    for (i = 0; i < num; i++) { // repeat code 'num' of times
        repeatedString += string // combine inputted sting to a new variable 
    }
    return repeatedString; //return into repeated string
};




// Do not edit below this line
module.exports = repeatString;
