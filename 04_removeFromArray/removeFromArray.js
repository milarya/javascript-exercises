const removeFromArray = function(myArray, ...valuesToRemove) {
    // iterate through all values to remove
    for (let j = 0; j < valuesToRemove.length; j++) {
        // remove one value from entire array
        for (let i = 0; i < myArray.length; i++) {
            if (myArray[i] === valuesToRemove[j]) {
                myArray.splice(i, 1);
                // decrease count by 1 to check current index again
                // because current element was deleted and shifted all
                // other elements
                i--;
            }
        }
    }
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
