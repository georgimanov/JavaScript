var Shape = (function(){
    function Shape(x, y, color){
        this._x = x;
        this._y = y;
        this._color = color;
    }
    Shape.prototype.toString = function (){
        return "X : " + this._x + ", Y : " + this._y + ", color : " + this._color;
    };
    Shape.prototype.draw = function() {
        return "DRAW";
    };
    return Shape;
}());

var Circle = (function(){
    function Circle(x, y, color,
                  radius){
        Shape.call(this, x, y, color);
        this._radius = radius;
    }
    Circle.prototype = new Shape();

    Circle.prototype.toString = function (){
        return Shape.prototype.toString.call(this) + ", Radius : " + this._radius;
    };
    return Circle;
}());

var Rect = (function(){
    function Rect(x, y, color,
        width, height){
        Shape.call(this, x, y, color);
        this._width = width;
        this._height = height;
    }
    Rect.prototype = new Shape();

    Rect.prototype.toString = function (){
        return Shape.prototype.toString.call(this) + ", W : " + this._width + ", H : " + this._height;
    };
    return Rect;
}());



var sh = new Shape(1, 2, 'black');
var rect = new Rect(3, 4, 'yellow', 15, 20);
var circ = new Circle(5, 6, 'blue', 3,5);

console.log(sh.toString());
console.log(rect.toString());
console.log(circ.toString());
