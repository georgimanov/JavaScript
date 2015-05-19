var text = "a a das, asd, asd dsa eda asd d dA ad";

console.log(getMostFrequent(extractWords(text)));

function extractWords(text) {
    var regEx = /[a-zA-Z]+/g;
    var match = text.match(regEx);

    return match;
}

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