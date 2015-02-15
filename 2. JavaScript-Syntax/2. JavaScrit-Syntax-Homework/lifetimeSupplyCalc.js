function calcSupply(age, maxAge, amount) { 
    return console.log(((maxAge - age) * amount * 365 + "kg of chocolate would be enough until I am " + maxAge + " years old."));
}

calcSupply(38, 118, 0.5);
calcSupply(20, 87, 2);
calcSupply(16, 102, 1.1);