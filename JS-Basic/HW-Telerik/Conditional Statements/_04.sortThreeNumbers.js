/* Sort 3 real values in descending order using nested if statements */

var a = 3;
var b = 1;
var c = 2;

console.log(sortThree(a, b, c));

function sortThree(a, b, c){
    var first = 0;
    var second = 0;
    var third = 0;

    if ( a >= b && a >= c ){
        first = a;
        if ( b >= c){
            second = b;
            third = c;
        } else {
            second = c;
            third = b;
        }
    } else if ( b >= c && b >= a ){
        first = b;
        if ( a >= c){
            second = a;
            third = c;
        } else {
            second = c;
            third = a;
        }
    } else {
        first = c;
        if ( a >= b ){
            second = a;
            third = b;
        } else {
            second = b;
            third = a;
        }
    }

    var arr;
    arr = [first, second, third];

    return arr;
}