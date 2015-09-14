(function(){
    'use strict';

    var text = 'sdabhikagathara@rediffmail.com, "assdsdf" <dsfassdfhsdfarkal@gmail.com>, "rodnsdfald ferdfnson" <rfernsdfson@gmal.com>, "Affdmdol Gondfgale" <gyfanamosl@gmail.com>, "truform techno" <pidfpinfg@truformdftechnoproducts.com>, "NiTsdfeSh ThIdfsKaRe" <nthfsskare@ysahoo.in>, "akasdfsh kasdfstla" <akashkatsdfsa@yahsdfsfoo.in>, "Bisdsdfamal Prakaasdsh" <bimsdaalprakash@live.com>,; "milisdfsfnd ansdfasdfnsftwar" <dfdmilifsd.ensfdfcogndfdfatia@gmail.com>';

    console.log(extractEmails(text));

    function extractEmails (text)
    {
        return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    }
})();