var arr = [4, 1, 1, 4, 2, 3, 4, 4, 1, 1, 4, 9, 4, 1, 4];

console.log(getMostFrequent(arr));

function getMostFrequent(arr) {
    var element = arr[0];
    var maxFrequency = 1;

    for ( var i = 0; i < arr.length; i++ ) {
        var currentElement = arr[i];
        var currentFrequency = 0;

        for (var j = i; j < arr.length; j++ ) {
            if (currentElement == arr[j]) {
                currentFrequency++;
            }
        }

        if ( currentFrequency > maxFrequency ) {
            maxFrequency = currentFrequency;
            element = currentElement;
        }

    }

    return {
        element : element,
        times : maxFrequency
    }
}