const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, num ) => sum + num, 0)
};

const multiply = function(arr) {
  return arr.reduce((product, num) => product * num, 1)
};

const power = function(a,b) {
	return Math.pow(a, b)
};

const factorial = function(num) {
	return num === 0 ? 1 : num * factorial(num - 1)
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
