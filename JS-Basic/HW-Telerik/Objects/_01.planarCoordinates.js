(function() {
    'use strict';

    var pointOne = Point(-2, -3);
    var pointTwo = Point(-4, 4);
    var pointThree = Point(0, 0);

    var lineOne = Line(pointOne, pointTwo);
    var lineTwo = Line(pointTwo, pointThree);
    var lineThree = Line(pointThree, pointOne);

    console.log(lineOne.distance());
    console.log(lineTwo.distance());
    console.log(lineThree.distance());
    console.log("Possible triangle: " + triangleCheck(lineOne, lineOne, lineThree));

    function Point(x, y) {
        return {
            X: x,
            Y: y
        }
    }

    function Line(pointOne, pointTwo) {
        return {
            pointOne: pointOne,
            pointTwo: pointTwo,
            distance: function() {
                return Math.sqrt(Math.pow((this.pointTwo.X - this.pointOne.X), 2) + Math.pow((this.pointTwo.Y - this.pointOne.Y), 2));
            }
        }
    }

    function triangleCheck (lineOne, lineTwo, lineThree) {
        var conditionOne = (lineOne.distance() + lineTwo.distance() > lineThree.distance());
        var conditionTwo = (lineTwo.distance() + lineThree.distance() > lineOne.distance());
        var conditionThree = (lineOne.distance() + lineThree.distance() > lineTwo.distance());

        return conditionOne && conditionTwo && conditionThree;
    }
})();