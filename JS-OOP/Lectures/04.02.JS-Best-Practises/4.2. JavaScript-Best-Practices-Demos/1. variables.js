function sum(numbers){
  /*
  var count = numbers.length,
	  sum = 0,
	  i,
	  numbersString = numbers.join(" + ") + " = ";
  */
  var count = numbers.length;
  var sum = 0;
  var i;
  var numbersString = numbers.join(" + ") + " = ";

  for(i = 0; i < count; i+=1){
	sum += numbers[i];
  }
  console.log( numbersString + sum);
}

sum([0, 1, 2, 3, 4, 5, 6, 7]);
sum([2, 3, 1, 2, 3, 4, 5, 6]);