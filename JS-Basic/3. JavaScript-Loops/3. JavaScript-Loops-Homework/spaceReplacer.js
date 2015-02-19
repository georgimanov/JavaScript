function replaceSpaces(str) {
    var re = new RegExp(" ", 'g');
    return console.log(str.replace(re, ""));
}

replaceSpaces('But you were living in another world tryin\' to get your message through');