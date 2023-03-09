const convertToCelsius = function(fah) {
  let fahrenheit = (fah - 32) * (5/9)
  if (fahrenheit % 1 !== 0) return Number(fahrenheit.toFixed(1));
  return fahrenheit;
};

const convertToFahrenheit = function(cel) {
  let celsius = (cel * (9/5))+32
  if (celsius % 1 !== 0) return Number(celsius.toFixed(1));
  return celsius;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
