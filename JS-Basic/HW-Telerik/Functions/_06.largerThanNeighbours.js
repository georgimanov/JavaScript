/*Write a function that checks if the element at given position
in given array of integers is bigger than its two neighbours
(when such exist).
 */

(function(){
    'use strict'

    var arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    console.log("Numbers is bigger than neighbours: " + biggerThanNeighbours(arrayOfNumbers, 8));

    function biggerThanNeighbours ( array, index){
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