function bitChecker(value) {
    var binary = value.toString(2);
    return binary[binary.length - 4] == 1 ? console.log(true) : console.log(false);
}

bitChecker(333);
bitChecker(425);
bitChecker(2567564754);
