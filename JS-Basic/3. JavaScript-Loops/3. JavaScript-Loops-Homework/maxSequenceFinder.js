function findMaxSequence(arr) {
    var bestPosition = 0;
    var bestLength = 0;
    var length = 0;
    var printArr = [];

    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                length++;
                if (length >= bestLength) {
                    bestPosition = i;
                    bestLength = length;
                }
            } else {
                break;
            }
        }
        length = 0;
    }
    for (var a = 0; a <= bestLength; a++) {
        printArr.push(arr[bestPosition + a]);
    }

    if (printArr.length > 1) {
        console.log(printArr);
    }else {
        console.log("no");
    }
}

findMaxSequence([3, 2, 3, 4, 2, 2, 4]);
findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]);
findMaxSequence([3, 2, 1]);