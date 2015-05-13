var a = 3;
var b = 6;
var h = 4;

console.log('Trapezoid"s area is: '+ calculateTrapezoidArea(a, b, h));

function calculateTrapezoidArea(a, b, h){
    var area = (a + b) * h / 2;

    return area;
}