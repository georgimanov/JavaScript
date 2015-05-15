var arr = [1, 4, 6, 7, 12, 13, 15, 18, 19, 20, 22, 24];
console.log(arr);
var num = 12;
console.log("Index of ["+num+"] is: " + findIndex(arr, num));

function findIndex(values, target) {
    return binarySearch(values, target, 0, values.length - 1);
}

function binarySearch(values, target, start, end) {
    if (start > end) { return -1; } //does not exist

    var middle = Math.floor((start + end) / 2);
    var value = values[middle];

    if (value > target) { return binarySearch(values, target, start, middle-1); }
    if (value < target) { return binarySearch(values, target, middle+1, end); }
    return middle; //found!
}

