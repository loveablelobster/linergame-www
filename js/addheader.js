var addHeader = function() {
    document.getElementsByClassName('mdl-layout')[0].innerHTML +=
    '<header class="mdl-layout__header">\
        <div class="mdl-layout__header-row">\
            <span class="mdl-layout-title"><a href="index.html"><img src="images/linergame-logo.png" alt="LinerGame"></a></span>\
        </div>\
    </header>\
    <div class="mdl-layout__drawer">\
        <span class="mdl-layout-title">LinerGame</span>\
        <nav class="mdl-navigation">\
            <a class="mdl-navigation__link" href="index.html">Hjem</a>\
            <a class="mdl-navigation__link" href="about.html">About The Company</a>\
            <a class="mdl-navigation__link" href="the-game.html">About The Game</a>\
            <a class="mdl-navigation__link" href="references.html">References</a>\
            <a class="mdl-navigation__link" href="contact.html">Contact</a>\
            <div class="drawer-separator"></div>\
            <span class="mdl-navigation__link mdl-color-text--cyan-400" href="">Game types</span>\
            <a class="mdl-navigation__link" href="vaerdigrundlag.html">Værdigrundlag</a>\
            <a class="mdl-navigation__link" href="en-dag-i-praksis.html">En dag i praksis</a>\
            <a class="mdl-navigation__link" href="laerer-foraeldre.html">Lærer- og Forældreengagement</a>\
            <a class="mdl-navigation__link" href="vedtaegter.html">Vedtægter</a>\
        </nav>\
    </div>';
}
