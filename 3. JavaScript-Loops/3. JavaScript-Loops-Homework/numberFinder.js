function findMostFreqNum(arr){
    var bestNum = arr[0];
    var bestCounter = 0;
    var counter = 0;

    for (var i = 0; i < arr.length ; i++) {
        for (var j = i ; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                counter++;
                if (counter > bestCounter) {
                    bestNum = arr[i];
                    bestCounter = counter;
                }
            }
        }
        counter = 0;
    }

    console.log(bestNum + " (" + bestCounter+ " times)");
}

findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]);
findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]);
findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);