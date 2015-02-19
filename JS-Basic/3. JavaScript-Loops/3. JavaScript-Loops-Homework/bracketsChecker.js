function checkBrackets(str) {
    var brackets = 0;

    for ( var a = 0; a < str.length; a++){
        if (str[a] === '(') {
            brackets++;
        }
        else if (str[a] === ')') {
            brackets--;
        }

        if (brackets < 0) {
            break;
        }
    }

    if (brackets == 0) {
        return console.log("correct");
    }
    else {
        return console.log("incorrect");
    }
}
checkBrackets('( ( a + b ) / 5 – d )');
checkBrackets(') ( a + b ) )');
checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )');