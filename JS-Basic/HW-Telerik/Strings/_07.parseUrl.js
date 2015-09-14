(function(){
    'use strict';

    var url = 'http://telerikacademy.com/Courses/Courses/Details/239';
    var arr = url.split('/');
    var protocol = arr[0];
    var server = arr[2];
    var resource = getResources(arr);

    var printJSON = {
        protocol : protocol.substr(0, protocol.length -1),
        server : server,
        resource : resource
    };

    console.log(JSON.stringify(printJSON));

    function getResources (arr) {
        var i,
            len;
        var result = [];
        for (i = 3, len = arr.length; i < len; i+=1){
            result.push(arr[i]);
        }

        return "/" + result.join('/');
    }
})();