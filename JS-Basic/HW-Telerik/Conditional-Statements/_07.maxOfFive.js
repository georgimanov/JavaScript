var arr = [1, 3, 4, 6, -2 ];

console.log( arr.sort().reverse()[0] );

console.log( getMaxOfArray(arr) );

function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}