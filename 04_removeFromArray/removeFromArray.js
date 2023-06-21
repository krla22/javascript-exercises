const numbers = ['1', '2', '3', '4'];
const removeFromArray = function(start, middle, end) {
    const sliced = numbers.slice(start, middle);
    const sliced2 = numbers.slice(end);
    const sliced3 = sliced.concat(sliced2);
    return sliced3;
};
console.log(removeFromArray(0, 2, 3));

// Do not edit below this line
module.exports = removeFromArray;
