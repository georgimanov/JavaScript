var a = 5;
var b = -4;
var c = 6;

console.log("Max of ["+a+", "+b+", "+c+"] is " + getMaxOfThree(a, b, c));

function getMaxOfThree(a, b, c){

    var max = 0;

    if ( a > b && b > c ){
        max = a;
    }

    if ( b > c && b > a ){
        max = b;
    }

    if ( c > a && c > b ){
        max = c;
    }

    return max;
}