var addHeader = function() {
    document.getElementsByClassName('mdl-layout')[0].innerHTML +=
    '<header class="mdl-layout__header">\
    </header>\
    <div class="mdl-layout__drawer">\
        <span class="mdl-layout-title">Agile Learning Center</span>\
        <nav class="mdl-navigation">\
            <a class="mdl-navigation__link" href="index.html">Hjem</a>\
            <a class="mdl-navigation__link" href="vaerdigrundlag.html">Værdigrundlag</a>\
            <a class="mdl-navigation__link" href="en-dag-i-praksis.html">En dag i praksis</a>\
            <a class="mdl-navigation__link" href="laerer-foraeldre.html">Lærer- og Forældreengagement</a>\
            <a class="mdl-navigation__link" href="vedtaegter.html">Vedtægter</a>\
        </nav>\
    </div>';
}
