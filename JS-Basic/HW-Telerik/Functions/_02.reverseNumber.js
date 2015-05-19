var a = 256;
var b = 123.45;

console.log(reverseNumber(a));
console.log(reverseNumber(b));

function reverseNumber (number) {
    var str = String(number);
    var output = "";

    for ( var i = 0; i < str.length; i++) {
        output += str[str.length - 1 - i];
    }

    return output;
}