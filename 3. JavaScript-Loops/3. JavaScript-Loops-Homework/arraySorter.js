function sortArray(arr){
 for (var i = 0; i < arr.length-1; i++){
        for ( var j = i + 1; j < arr.length; j++ ){
            if(arr[i] > arr[j]){
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr);

}

sortArray([5, 4, 3, 2, 1]);
sortArray([12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]);
