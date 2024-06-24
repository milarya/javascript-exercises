const fibonacci = function(number) {
    if (+number < 0) {
        return 'OOPS';
    }
    if (+number === 0) {
        return 0;
    }
    let fibArray = [1, 1]
    for (let i = 2; i < +number; i++) {
        fibArray.push(fibArray[i-2] + fibArray[i-1]);
    }
    return fibArray[+number-1];
};

// Do not edit below this line
module.exports = fibonacci;
