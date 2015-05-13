var number = 5;

console.log("Number [" + number+ "] in binary: " + number.toString(2));
console.log("Find the bit 3rd (counting from 0) of a given integer is 1 or 0\nResult: " +
    (isThirdBitOne(number) == true ? "1" : "0") );

function isThirdBitOne( number ) {
    var moveThreeRight = number >> 3;
    var isOne = moveThreeRight  & 1;

    return isOne == 1;
}