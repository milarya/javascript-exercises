const sumAll = function(numberA, numberB) {
    // validates that input is positive number
    if (numberA < 0 || 
        numberB < 0 || 
        typeof numberA != 'number' || 
        typeof numberB != 'number') {
        return 'ERROR';
    }
    // simply add both numbers if they are the same
    if (numberA === numberB) {
        return numberA + numberB;
    } 
    let sum = 0;
    // determine bigger number and difference
    let smallerNumber;
    let biggerNumber;
    if (numberA > numberB) {
        biggerNumber = numberA;
        smallerNumber = numberB;
    } else {
        biggerNumber = numberB
        smallerNumber = numberA;
    }
    const difference = biggerNumber - smallerNumber;
    // addition loop as often as the difference + 1
    for (let i = smallerNumber; i <= biggerNumber; i++) {
        sum = sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
