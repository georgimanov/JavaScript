var number = 1754;

console.log( isThirdDigitSeven( number ) );

function isThirdDigitSeven(number){
    var newNumber = (number / 100) | 0; //parse int

    return newNumber % 10 == 7;
}