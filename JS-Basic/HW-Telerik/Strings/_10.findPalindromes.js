(function(){
    'use strict'

    var text = 'Write a program that extracts from a given text all palindromes: ABBA lamal exe';

    var textArr = text.split(" ");

    console.log(findPalindromes(textArr));

    function findPalindromes(arr){
        var palindromes = [];

        for(var index = 0; index < arr.length; index+=1){
            var i = 0,
                halfLen = arr[index].length / 2,
                len = arr[index].length,
                isPalindrome = true;
            for(i; i< halfLen; i+=1){
                if(arr[index][i] != arr[index][len - i - 1]){
                    isPalindrome = false;
                    break;
                }
            }

            if (isPalindrome && arr[index].length > 2){
                palindromes.push(arr[index]);
            }
        }

        return palindromes;
    }
})();