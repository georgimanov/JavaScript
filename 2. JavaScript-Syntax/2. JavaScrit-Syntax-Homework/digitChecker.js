function checkDigit(a) {
    var digit = Math.floor(a / 100);
    var checkDigit = Math.floor(digit % 10);
    return checkDigit === 3 ? console.log(true) : console.log(false); 
}

checkDigit(1235);
checkDigit(25386);
checkDigit(123456);
