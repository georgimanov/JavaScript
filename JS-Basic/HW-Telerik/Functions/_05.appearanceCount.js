(function(){
    'use strict'

    var arrOfNumbers = [1, 2, 4, 6, 23, 5, 7, 123, 4, 2, 2, 4, 2, 3, 5];

    console.log(getMostFrequent(arrOfNumbers));
    console.log("Test passed: " + testOtherFunction(4, getMostFrequent(arrOfNumbers).times));

    function testOtherFunction( expected, received ){
        if ( expected === received) {
            return true;
        }

        return false;
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
})();