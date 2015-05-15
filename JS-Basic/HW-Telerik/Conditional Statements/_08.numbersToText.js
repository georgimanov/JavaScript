console.log("0 : " + numberToWords(0) );
console.log("273 : " + numberToWords(273) );
console.log("400 : " + numberToWords(400) );
console.log("501 : " + numberToWords(501) );
console.log("711 : " + numberToWords(711) );
console.log("1000 : " + numberToWords(1000) );

function numberToWords( number ) {
    var result = "";

    if (number == 0)
    {
        result = "zero";
    }
    else if ( number > 0 && number <= 9)
    {
        result = getOnes( number );
    }
    else if ( number >= 10 && number < 20)
    {
        result = getTeens ( number );
    }
    else if ( number >= 20 && number < 100 )
    {
        result = getDoubleDigits( number ) + " " + getOnes (number % 10);
    }
    else if ( number >= 100 && number < 1000 )
    {
        result = getHundreds ( number );

        if ( number % 100 < 10 && number % 100 > 0  )
        {
            result += " and " + getOnes (number % 10);
        }
        else if ( number % 100 < 20 && number % 100 >= 10  )
        {
            result += " and " + getTeens( number % 100);
        }
        else
        {
            result += " " +  getDoubleDigits( number % 100 ) + " " + getOnes (number % 10);
        }
    }
    else
    {
        result = "Input is not in the requested format";
    }

    return result;
}

function getOnes (number) {
    var result = "";

    switch (number) {
        case 0: result = "";
            break;
        case 1: result = "one";
            break;
        case 2: result = "two";
            break;
        case 3: result = "three";
            break;
        case 4: result = "four";
            break;
        case 5: result = "five";
            break;
        case 6: result = "six";
            break;
        case 7: result = "seven";
            break;
        case 8: result = "eight";
            break;
        case 9: result = "nine";
            break;
        default : result = ""; break;
    }

    return result;
}

function getTeens ( number ) {
    var result = "";

    switch ( number ) {
        case 10: result = "ten";
            break;
        case 11: result = "eleven";
            break;
        case 12: result = "twelve";
            break;
        case 13: result = "thirteen";
            break;
        case 14: result = "fourteen";
            break;
        case 15: result = "fifteen";
            break;
        case 16: result = "sixteen";
            break;
        case 17: result = "seventeen";
            break;
        case 18: result = "eighteen";
            break;
        case 19: result = "nineteen";
            break;
        default : result = "";
            break;
    }

    return result;
}

function getDoubleDigits( number ) {
    var result = "";

    switch (Math.floor(number / 10)) {
        case 2: result = "twenty";
            break;
        case 3: result = "thirty";
            break;
        case 4: result = "forty";
            break;
        case 5: result = "fifty";
            break;
        case 6: result = "sixty";
            break;
        case 7: result = "seventy";
            break;
        case 8: result = "eighty";
            break;
        case 9: result = "ninety";
            break;
        default : result = "";
            break
    }

    return result;
}

function getHundreds ( number ) {
    var hundreds = "";

    switch (Math.floor(number / 100)) {
        case 1: hundreds = "one hundred";
            break;
        case 2: hundreds = "two hundred";
            break;
        case 3: hundreds = "three hundred";
            break;
        case 4: hundreds = "four hundred";
            break;
        case 5: hundreds = "five hundred";
            break;
        case 6: hundreds = "six hundred";
            break;
        case 7: hundreds = "seven hundred";
            break;
        case 8: hundreds = "eight hundred";
            break;
        case 9: hundreds = "nine hundred";
            break;
        default : hundreds = "";
            break;
    }

    return hundreds;
}