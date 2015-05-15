// a * x ^ 2 + b * x + c = 0;

var a = 1;
var b = -7;
var c = 12;

console.log( findRoots(a, b, c));

function findRoots (a, b, c) {
    var result = "";

    var d = b * b - 4 * a * c;
    if ( d == 0 )
    {
        result = "x1 = x2 = "+ (- b /2*a);
    }
    else if ( d < 0 )
    {
        result = "Equation has no real corners!";
    }
    else
    {
        result = "x1 = " + (-b + Math.sqrt(d)) / 2 * a ;
        result += "\nx2 = " + (-b - Math.sqrt(d)) / 2 * a;
    }

    return result;
}