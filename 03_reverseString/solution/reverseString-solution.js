const reverseString = function (string) {
  return string.split("").reverse().join("");
};
console.log(reverseString("banana"));
module.exports = reverseString;
