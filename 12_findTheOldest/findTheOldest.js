const findTheOldest = function(arr) {
    console.table(arr);
    let foundPersons = arr
        .sort((personA, personB) => {
            let ageA = (personA.yearOfDeath || 2024 ) - personA.yearOfBirth;
            let ageB = (personB.yearOfDeath || 2024) - personB.yearOfBirth;
            return ageA > ageB ? -1 : 1
        })
    console.table(foundPersons);
    return foundPersons[0];
};

// Do not edit below this line
module.exports = findTheOldest;
