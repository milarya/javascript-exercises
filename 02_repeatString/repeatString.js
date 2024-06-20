const repeatString = function(string, repetitions) {
    // check if user input is valid
    if (repetitions < 0) {
        return 'ERROR';
    }
    // calculate the resulting string
    let repeatedString = '';
    for (let i = 0; i < repetitions; i++) {
        repeatedString += string;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
