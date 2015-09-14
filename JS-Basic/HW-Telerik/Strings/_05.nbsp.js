(function(){
    'use strict';

    var text = 'Write a function that replaces non breaking white-spaces in a text with &nbsp;';

    while(text.indexOf(' ') > 0){
        text = text.replace(' ', '&nbsp');
    }

    console.log(text);
})();