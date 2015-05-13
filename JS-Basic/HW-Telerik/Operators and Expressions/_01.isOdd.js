var num = 11;

console.log(isOdd(num));
console.log(isOdd(num + 1));

function isOdd( number ){
    if ( number % 2 ==  0) {
        return true;
    }

    return false;
}
