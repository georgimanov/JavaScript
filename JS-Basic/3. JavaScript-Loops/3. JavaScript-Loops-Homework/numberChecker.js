function printNumbers(n) {
    var arr = new Array();
    for (var i = 0 ; i <= n; i++){
        if ( !(i % 4 === 0) && !(i % 5 ===0) ){
            arr.push(i.toString());
        }
    }
    return n > 0 ? console.log(arr.join(", ")) : console.log("no");
}

printNumbers(20);
printNumbers(-5);
printNumbers(13);