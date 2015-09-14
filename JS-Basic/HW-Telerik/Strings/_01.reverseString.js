(function(){
    'use strict'

    var a = 'sample';

    console.log(reverse(a));

    function reverse (string) {
        var output = "",
            i,
            len = string.length;

        for ( i = 0; i < len; i+=1) {
            output += string[len - 1 - i];
        }

        return output;
    }
})();
