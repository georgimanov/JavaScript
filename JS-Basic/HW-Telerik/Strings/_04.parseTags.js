/**
 Example:
 We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>.
 We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else.

 The expected result:
 We are LiVinG in a YELLOW SUBMARINE. We dOn'T have anything else.
 */

(function(){
    'use strict';
    var tags = ['mixcase', 'upcase', 'lowcase'];
    var text = "We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else.";

    console.log(text);

    for (var index = 0; index< tags.length; index += 1){
        var pairIndexes = getStartEnd(text, tags[index]);
        for(var i = 0; i < pairIndexes.length; i+=2){
            text = text.replace(text, applyTag(text, tags[index], pairIndexes[i],pairIndexes[i + 1]).join(""));
        }
    }

    text = text.replace(/<\s*upcase\s*>/gi, '');
    text = text.replace(/<\s*lowcase\s*>/gi, '');
    text = text.replace(/<\s*mixcase\s*>/gi, '');
    text = text.replace(/<\s*\/upcase\s*>/gi, '');
    text = text.replace(/<\s*\/lowcase\s*>/gi, '');
    text = text.replace(/<\s*\/mixcase\s*>/gi, '');

    console.log(text);

    function applyTag(text, tag, indexStart, indexEnd){
        var i,
            len,
            result = [];
        for( i = 0, len = text.length; i <= len; i+=1){

            if (i >= indexStart && i <= indexEnd){
                if(tag == 'upcase'){
                    result.push(text[i].toUpperCase());
                } else if ( tag == 'lowcase'){
                    result.push(text[i].toLowerCase());
                } else if (tag == 'mixcase'){
                    if(i % 2 == 0){
                        result.push(text[i].toUpperCase());
                    } else {
                        result.push(text[i].toLowerCase());
                    }
                }
            } else {
                result.push(text[i]);
            }
        }

        return result;
    }

    function getStartEnd(text, tagName) {
        var openTag = "<" + tagName + ">";
        var closeTag = "</" + tagName + ">";
        var result;
        var arr = [];

        var regExOpen = new RegExp(openTag, "gi");

        while( (result = regExOpen.exec(text)) ){
            arr.push(result.index + openTag.length);
            arr.push(text.substring(result.index + openTag.length).indexOf(closeTag) + result.index + openTag.length - 1);
        }

        return arr;
    }
})();