/*
 * Write an expression that checks if given print (x,  y) is within a circle K(O, 5).
 */

var x = 1;
var y = 2;
var radius = 5;

console.log("Point[" + x +", " + y+ "] is inside circle K[0,5]: " + isPointIncideCircle(x, y, radius) );

function isPointIncideCircle(x, y, r) {
    return (Math.pow(x, 2) + Math.pow(y, 2)) <= Math.pow(r, 2);
}
