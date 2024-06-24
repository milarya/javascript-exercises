const add = function(numA, numB) {
  return numA + numB;
};

const subtract = function(numA, numB) {
  return numA - numB;
};

const sum = function(arr) {
	return arr.reduce((total, item) => (total + item), 0);
};

const multiply = function(arr) {
  return arr.reduce((total, item) => (total * item), 1);
};

const power = function(numA, numB) {
  return numA ** numB;
};

const factorial = function(numA) {
  let factorial = 1;
  for (let i = 1; i <= numA; i++) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
