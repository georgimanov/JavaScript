function findMaxSequence(arr) {
    var bestPosition = 0;
    var bestLength = 0;
    var length = 0;
    var printArr = [];

    for (var i = 0; i < arr.length-1; i++){
        for ( var j = i + 1; j < arr.length; j++ ){
            if(arr[i] === arr[j]){
                length++;
                if (length >= bestLength ){
                    bestPosition = i;
                    bestLength = length;
                }
            } else {
                break;
            }
        }
        length = 0;
    }
    for ( var a = 0; a <= bestLength; a++ ){
        printArr.push(arr[bestPosition + a]);
    }
    console.log(printArr);
}

findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
findMaxSequence(['happy']);
findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']);
