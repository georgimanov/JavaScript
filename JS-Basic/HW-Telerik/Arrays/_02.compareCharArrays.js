var arrOne = "Hello";
var arrTwo = "Hell";

if ( arrOne.length != arrTwo.length ) {
    console.log("The arrays are not identical");
} else {
    for (var i = 0; i < arrOne.length; i++ ) {
        if ( arrOne[i] != arrTwo[i] ){
            console.log("The arrays are not identical");
            break;
        }
    }

    console.log("The arrays are identical");
}