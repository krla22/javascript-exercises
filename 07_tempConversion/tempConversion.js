let roundedC;
let roundedF;

const convertToCelsius = function(temp) {
  let finalCelsius = (temp - 32) * (5/9);
  let roundedC = finalCelsius.toFixed(1);
  return roundedC;
};

const convertToFahrenheit = function(temp) {
  let finalFahrenheit = (temp * (9/5)) + 32;
  let roundedF = finalFahrenheit.toFixed(1);
  return roundedF;
};

console.log(convertToCelsius(100));
console.log(convertToFahrenheit(0));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
