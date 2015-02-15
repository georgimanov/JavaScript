function compareChars(a, b) {

    var equal = false;

    if (a.length == b.length){
        for ( var i = 0; i< a.length; i++){
           if(a[i] == b[i]){
               equal=true;
           } else {
               equal = false;
               break;
           }

       }

    }
    if (equal){
        return console.log("Equal");
    } else {
        return console.log("Not Equal");
    }
}

compareChars(['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'] , ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']);
compareChars(['3', '5', 'g', 'd'],['5', '3', 'g', 'd']);
compareChars(['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'],['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']);