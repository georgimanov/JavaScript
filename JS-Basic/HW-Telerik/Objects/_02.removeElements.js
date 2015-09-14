(function () {
   'use strict'

    var arr = [1,2,1,4,1,3,4,1,111,3,2,1, '1'];
    console.log(arr);

    Array.prototype.remove = function (element){
        var i,
            len;
        for (i = 0, len = this.length; i < len; i += 1) {
            if(this[i] === element){
                this.splice(i, 1);
            }
        }
    };

    arr.remove(1); //arr = [2,4,3,4,111,3,2,'1'];
    console.log(arr);
})();
