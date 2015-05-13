var number = 37;

console.log("Is number["+number+"] prime? : " + isPrime(number));

function isPrime ( number ){
    for(var i = 2; i < number; i++){
        if ( number % i == 0){
            return false;
        }
    }

    return true;
}