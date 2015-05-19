/*Write a function that returns
    the index of the first element in array that is larger than its neighbours or
    -1, if there’s no such element.
 */

(function(){
    'use strict'

    var arrayOfNumbersOne = [1, 2, 3, 4, 5, 6, 7, 4, 9, 10];
    var arrayOfNumbersTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    console.log("Index of first numbers that is bigger than neighbours: " + firstLargerThanNeighbours(arrayOfNumbersOne));
    console.log("Index of first numbers that is bigger than neighbours: " + firstLargerThanNeighbours(arrayOfNumbersTwo));

    function firstLargerThanNeighbours( array ) {
        var i,
            len = array.length;

        for( i = 0; i < len; i +=1){
            if (biggerThanNeighbours( array, i) ){
                return i;
            }
        }

        return -1;
    }

    function biggerThanNeighbours ( array, index ) {
        var neighbours = getNeighbours(array, index);
        var number = array[index];

        return number > neighbours.after && number > neighbours.before;
    }

    function getNeighbours (array, index){

        var len = array.length;

        if (index < len - 1 && index > 0) {
            return {
                before : array[index - 1],
                after : array[index + 1]
            }
        }

        return false;
    }
})();