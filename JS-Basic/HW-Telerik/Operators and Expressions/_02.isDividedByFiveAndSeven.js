console.log(isDividedByFiveAndSeven(35));
console.log(isDividedByFiveAndSeven(7));
console.log(isDividedByFiveAndSeven(5));

function isDividedByFiveAndSeven( number ){
    if ( number % 5 ==  0 && number % 7 ==  0) {
        return true;
    }

    return false;
}
