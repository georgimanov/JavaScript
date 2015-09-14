(function(){
    'use strict'

    var car = {type:"Fiat", model:500, color:"white"};

    Object.prototype.getAllProperties = function(){
        var keys = [];
        for(var key in this){
            keys.push(key);
        }

        return keys;
    };

    Object.prototype.hasProperty = function(property){
        for(var key in this){
            if (key === property){
                return true;
            }
        }

        return false;
    };

    console.log('List of properties: [' + car.getAllProperties().join(', ') + ']');
    console.log('Has property [model]: ' + car.hasProperty('model'));
    console.log('Has property [pesho]: ' + car.hasProperty('pesho'));
})();