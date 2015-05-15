var arr = [1, 5, 213, 3123, 4123, 321, 654, 32];

console.log( getMax(arr) );

function getMax ( arr ) {
    var max = Number.MIN_VALUE;

    for (var i = 0; i < arr.length; i++ ) {
        if ( arr[i] > max ) {
            max = arr[i];
        }
    }

    return max;
}