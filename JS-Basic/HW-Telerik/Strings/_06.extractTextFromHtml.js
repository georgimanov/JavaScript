(function(){
    'use strict';

    var text = "<html><head><title>Sample site</title></head><body><div>text<div>more text</div>and more...</div>in body</body></html>";

    console.log(extractText(text));

    function extractText(str){
        if (!str.match(/<?\/?\w+>/g)){
            return str;
        }

        var tags = str.match(/<?\/?\w+>/gi);

        for (var i = 0, len = str.length; i < len; i += 1){
            while( str.indexOf(tags[i]) >= 0 ){
                str = str.replace(tags[i], "");
            }
        }

        return str;
    }
})();