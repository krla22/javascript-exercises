const repeatString = function(heyWord, numberRepeat) {
    let connectedHey = '';
    for (let i = 0; i < numberRepeat; i++){
        connectedHey += heyWord;
    }
    return connectedHey;
};
console.log(repeatString("hey", 3));

// Do not edit below this line
module.exports = repeatString;
