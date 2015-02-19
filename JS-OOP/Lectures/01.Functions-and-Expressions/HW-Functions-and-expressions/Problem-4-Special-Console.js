var specialConsole = (function () {
    'use strict';

    function writeLine() {
        var stringToPrint = arguments[0];

        if(arguments.length > 1){
            var args = Array.prototype.slice.call(arguments);
            var replacements = args.slice(1, args.length);

            replacements.forEach(function (message, index) {
                stringToPrint = stringToPrint.replace('{' + index + '}', message);
            });

            console.log(stringToPrint);
        } else {
            console.log(arguments[0].toString());
        }
    }

    return {
        writeLine: writeLine,
        writeError: writeLine,
        writeWarning: writeLine
    };
})();

specialConsole.writeLine("Message: hello");
specialConsole.writeLine("Message: {0}", "hello");
specialConsole.writeError("Error: {0}", "A fatal error has occurred.");
specialConsole.writeWarning("Warning: {0}", "You are not allowed to do that!");
