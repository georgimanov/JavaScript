/*
 var str = stringFormat('Hello {0}!', 'Peter');
 //str = 'Hello Peter!';

 var frmt = '{0}, {1}, {0} text {2}';
 var str = stringFormat(frmt, 1, 'Pesho', 'Gosho');
 //str = '1, Pesho, 1 text Gosho'
 */

(function(){
    'use strict';

    var frmt = 'I am playing with some place holders  here {0}, {1}, {0} text {2}';

    console.log(stringFormat(frmt, 1, "pesho", "gosho"));

    function stringFormat(str){
        if (!str.match(/{\d+}/g)){
            return str;
        }

        var placeholders = str.match(/{\d+}/g);

        for(var i = 0, len = placeholders.length; i < len; i+=1){
            var argumentIndex = placeholders[i].substring(1,placeholders.length - 2) | 0;
            str = str.replace(placeholders[i], arguments[1 + argumentIndex]);
        }

        return str;
    }
})();