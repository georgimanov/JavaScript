'use strict';

function func(value){
    console.log(arguments);
}
func('first');
console.log(func.length);
console.log(func.toString());