function myFunction(){
	'use strict';   
	console.log("Arguments counter :" + arguments.length);
	for (var i = 0; i < arguments.length; i++) {
		console.log("Argument [" + (i+1) + "] {" + "Value : " + arguments[i] + "; Type : " + typeof arguments[i] + "}" );
	};
	console.log();
};

var func = function(){
    var obj = {};    obj.name = "Pesho";
    return obj;
};

myFunction(1,2,3);
myFunction("Hello", "JS-OOP");
myFunction("JS", true, 12.512313);
myFunction(123, "printFuncName", func().name);
myFunction(this);
myFunction.call(null, 123,"Nakov");
myFunction.apply(null, [123,"Nakov"]);