(function () {
    'use strict';

    var target = 'in';
    var text = "We are living in an yellow submarine. We don't have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.";

    console.log(getCountOfSubstring(text, target));

    function getCountOfSubstring( text, value ) {
        var str = text.toLowerCase();
        var regExp = new RegExp(value, "gi");

        return str.match(regExp) ? str.match(regExp).length : 0;
    }
})();


