const palindromes = function (string) {
    let sanitizedString = string
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '');
    let reversedString = sanitizedString
        .split('')
        .reverse()
        .join('');
    if (sanitizedString == reversedString) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
