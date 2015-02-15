function variablesTypes(a) {
    console.log("My name: " + a[0]);
    console.log("My age: " + a[1]);
    console.log("I am male: " + a[2]);
    console.log("My favorite foods are: " + a[3][0]+","+ a[3][1] + "," + a[3][2]);
    return 1;
}
variablesTypes(['Pesho', 22, true, ['fries', 'banana', 'cake']]);