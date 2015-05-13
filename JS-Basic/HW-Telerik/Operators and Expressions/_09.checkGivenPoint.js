/*Write an expression that checks for given point (x, y)
    if it is within the circle K( (1,1), 3)
        and
    out of the rectangle R(top=1, left=-1, width=6, height=2).
 */

var x = 1;
var y = 2;
var radius = 3;
var centerOfCircle = 1;

console.log("Point[x=" + x +", y=" + y+ "] is inside circle K[{1,1},3]: " + isPointIncideCircle(x, y, radius, centerOfCircle) );
console.log("Point[x=" + x +", y=" + y+ "] is inside rectangle (top=1, left=-1, width=6, height=2): " + isPointIncideRectangle(1, -1, 6, 2, x, y) );


function isPointIncideCircle(x, y, r, c) {
    return (Math.pow(x - c, 2) + Math.pow(y - c, 2)) <= Math.pow(r, 2);
}

function isPointIncideRectangle(rectY, rectX, widht, height, pointX, pointY){
    if( rectY < pointY || (rectY - height) > pointY ){
        return false;
    }

    if( rectX > pointY || (rectX + widht) < pointX ){
        return false;
    }

    return true;
}