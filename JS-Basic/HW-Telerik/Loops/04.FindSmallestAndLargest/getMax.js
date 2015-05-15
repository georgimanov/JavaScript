(function documentMaxMin(){
    var maxDocument = "";
    var minDocument = "someLargeTextHere";
    var maxWindow = "";
    var minWindow = "someLargeTextHere";
    var maxNavigator = "";
    var minNavigator = "someLargeTextHere";

    for (var d in document) {
        if (maxDocument.length < String(d).length) {
            maxDocument = d;
        }

        if (minDocument.length > String(d).length) {
            minDocument = d;
        }
    }

    for (var w in window) {
        if (maxWindow.length < String(w).length) {
            maxWindow = w;
        }

        if (minWindow.length > String(w).length) {
            minWindow = w;
        }
    }

    for (var n in navigator) {
        if (maxNavigator.length < String(n).length) {
            maxNavigator = n;
        }

        if (minNavigator.length > String(n).length) {
            minNavigator = n;
        }
    }

    console.log("[Document]Longest: " + maxDocument);
    console.log("[Document]Shortest: " + minDocument);

    console.log("[Window]Longest: " + maxWindow);
    console.log("[Window]Shortest: " + minWindow);

    console.log("[Navigator]Longest: " + maxNavigator);
    console.log("[Navigator]Shortest: " + minNavigator);
})();