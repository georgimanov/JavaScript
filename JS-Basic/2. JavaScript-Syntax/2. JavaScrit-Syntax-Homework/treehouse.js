function treeHouseCompare(a, b) {
    var h = (a / 3) * 2;
    var houseArea = (a * a) + ((a * h ) / 2);
   

    var r = ((b / 3) * 2);
    var treeArea = 0;
    var circleArea = Math.PI * (r * r);
    var rectangleArea = b * (b / 3);
    treeArea = circleArea + rectangleArea;
    
    return (houseArea > treeArea ? console.log("house/" + houseArea.toFixed(2)): console.log("tree/" + treeArea.toFixed(2)));
}
treeHouseCompare(3, 2);
treeHouseCompare(3, 3);
treeHouseCompare(4, 5);
