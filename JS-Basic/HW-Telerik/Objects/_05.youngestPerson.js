(function(){
    'use strict'

    var people = [
        { firstname : 'Gosho', lastname: 'Petrov', age: 32 },
        { firstname : 'Tosho', lastname: 'Petrov', age: 29 },
        { firstname : 'Yana', lastname: 'Petrova', age: 31 },
        { firstname : 'Bay', lastname: 'Ivan', age: 81}];

    var youngest = people[0];
    for (var i = 0; i < people.length; i += 1){
        if (people[i].age <= youngest.age) {
            youngest = people[i];
        }
    }

    console.log(youngest);

})();