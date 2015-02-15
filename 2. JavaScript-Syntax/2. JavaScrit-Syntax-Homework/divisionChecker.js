function divisionBy3(value) {
    var sum = 0;

    while ( value != 0) {
        sum += Math.floor(value % 10);
        value = Math.floor(value / 10);
    }
    
    if (sum % 3 === 0) {
        return console.log("the number is divided by 3 without remainder"); 
    }
    else {
        return console.log("the number is not divided by 3 without remainder");
    }
}


divisionBy3(12);
divisionBy3(188);
divisionBy3(591);

