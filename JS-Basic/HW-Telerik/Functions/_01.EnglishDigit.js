var a = 512;
var b = 1024;
var c = 12309;

console.log(lastDigitToText(a));
console.log(lastDigitToText(b));
console.log(lastDigitToText(c));


function lastDigitToText (number) {
    var digit = number % 10;

    var result = "";

    switch (digit) {
        case 0: result = "";
            break;
        case 1: result = "one";
            break;
        case 2: result = "two";
            break;
        case 3: result = "three";
            break;
        case 4: result = "four";
            break;
        case 5: result = "five";
            break;
        case 6: result = "six";
            break;
        case 7: result = "seven";
            break;
        case 8: result = "eight";
            break;
        case 9: result = "nine";
            break;
        default : result = ""; break;
    }

    return result;
}
