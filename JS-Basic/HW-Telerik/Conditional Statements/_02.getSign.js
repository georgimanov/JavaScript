var a = 1;
var b = -1;
var c = -1;

console.log(getSingOfProductWithoutCalculation(a, b, c));

function getSingOfProductWithoutCalculation(a, b, c){
    var result = "";

    if ( a > 0 && b > 0 && c > 0 ){ // + + +
        result = "+";
    } else if ( a > 0 && b > 0 && c < 0 ) { // + + -
        result = "-";
    } else if ( a > 0 && b < 0 && c > 0 ) { // + - +
        result = "-";
    } else if ( a < 0 && b > 0 && c > 0 ) { // - + +
        result = "-";
    } else if ( a < 0 && b < 0 && c > 0 ) { // - - +
        result = "+";
    } else if ( a < 0 && b > 0 && c < 0 ) { // - + -
        result = "+";
    } else if ( a > 0 && b < 0 && c < 0 ) { // + - -
        result = "+";
    } else if ( a < 0 && b < 0 && c < 0 ) { // - - -
        result = "-";
    } else if ( a == 0 && b == 0 && c == 0 ) { // 0 0 0
        result = "+0";
    } else if ( a == 0 && b == 0 && c > 0 ) { // 0 0 +
        result = "+";
    } else if ( a == 0 && b > 0 && c == 0 ) { // 0 + 0
        result = "+";
    } else if ( a > 0 && b == 0 && c == 0 ) { // + 0 0
        result = "+";
    } else if ( a == 0 && b > 0 && c > 0 ) { // 0 + +
        result = "+";
    } else if ( a > 0 && b > 0 && c == 0 ) { // + + 0
        result = "+";
    } else if ( a > 0 && b == 0 && c > 0 ) { // + 0 +
        result = "+";
    } else if ( a == 0 && b == 0 && c < 0 ) { // 0 0 -
        result = "-";
    } else if ( a == 0 && b < 0 && c == 0 ) { // 0 - 0
        result = "-";
    } else if ( a < 0 && b == 0 && c == 0 ) { // - 0 0
        result = "-";
    } else if ( a == 0 && b < 0 && c < 0 ) { // 0 - -
        result = "+";
    } else if ( a < 0 && b < 0 && c == 0 ) { // - - 0
        result = "+";
    } else if ( a < 0 && b == 0 && c < 0 ) { // - 0 -
        result = "+";
    } else {
        result = "-";
    }

    return result;
}


