(function(){
 'use strict'

    function Person(firstname, lastname, age) {
        if (isNaN(age) || !isFinite(age)) {
            throw new Error('age must be a number');
        }

        if (!(this instanceof  Person)) {
            return new Person(firstname, lastname, age);
        }

        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    Person.prototype.toString = function() {
        return '[' + this.firstname + ' ' + this.lastname + ',' + this.age + ']';
    };

    var people = [
        new Person('Pesho', 'Petrov', 24),
        new Person('Pesho', 'Goshov', 25),
        new Person('Pesho', 'Toshov', 30),
        new Person('Gosho', 'Toshov', 25),
        new Person('Tosho', 'Toshov', 25),
        new Person('Tosho', 'Goshov', 30),
        new Person('Tosho', 'Petrov', 30),
        new Person('Gosho', 'Goshov', 24),
        new Person('Gosho', 'Goshov', 24)
    ];

    function group(arr, prop) {
        var group = [];

        for (var ind in arr) {
            var currProp = arr[ind][prop];
            group[currProp] = group[currProp] || [];
            group[currProp].push(arr[ind]);
        }

        return group;
    }

    function printGroups(prop, arr) {
        console.log(prop);
        for (var key in arr) {
            console.log(arr[key].join('; '));
        }
        console.log();
    }

    var props = ['firstname', 'lastname', 'age'];

    for (var ind in props) {
        var groups = group(people, props[ind]);
        printGroups(props[ind], groups);
    }
}
)();