(function() {
    'use strict'

    var correct = "((a+b)/5-d)";
    var incorrect = ")(a+b))";

    console.log(expressionHasCorrectBrackets(correct));
    console.log(expressionHasCorrectBrackets(incorrect));

    function expressionHasCorrectBrackets (expression) {
        var brackets = 0,
            i,
            len = expression.length;

        for(i = 0; i < len; i += 1) {
            if ( expression[i] === '(') {
                brackets += 1;
            } else if  ( expression[i] === ')' ){
                brackets -= 1;
            }

            if (brackets < 0){
                return false;
            }
        }

        return brackets === 0 ? true : false;
    }
}
)();