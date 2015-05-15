var a = 10;
var b = 5;

console.log("Before switch a=" + a + ", b=" + b );

if ( a > b ) {
    a ^= b;
    b ^= a;
    a ^= b;
}

console.log("After switch a=" + a + ", b=" + b );

