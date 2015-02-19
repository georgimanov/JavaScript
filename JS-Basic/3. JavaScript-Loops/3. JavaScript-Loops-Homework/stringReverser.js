function reverseString(arr){
    var str = [];
    for ( var i = arr.length-1; i >= 0; i--){
        str.push(arr[i]);
    }
    console.log(str.join(""));
    return arr;
}

reverseString('sample');
reverseString('softUni');
reverseString('java script');