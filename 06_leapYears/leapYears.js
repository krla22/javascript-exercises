const leapYears = function(inputYear) {
    if (!Number.isInteger(inputYear)) return "Error: NaN";
    if (inputYear <= 0) return "Error: Not a year";
    if (inputYear <= 100) return "Error: Too early";
    if ((inputYear % 100 == 0 ) && (inputYear % 4 !== 0)) return "This is not a leap year!";
    if ((inputYear % 400 == 0) || (inputYear % 4 == 0)){
        return "This is a leap year!";
    } else return "Not a leap year!";
};
console.log(leapYears(400));


// Do not edit below this line
module.exports = leapYears;
