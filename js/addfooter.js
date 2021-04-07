var addFooter = function() {
    document.getElementsByTagName('main')[0].innerHTML += '<footer class="mdl-mega-footer">\
        <div class="mdl-mega-footer--top-section">\
            <div class="mdl-mega-footer--right-section">\
                <a class="mdl-typography--font-light" href="#" onclick="scrollToDiv(\'content\')">\
        Back to Top\
        <i class="material-icons">expand_less</i>\
        </a>\
            </div>\
        </div>\
        <div class="mdl-mega-footer--middle-section">\
            <address class="mdl-typography--font-light address">\
            <p>International ALC of Denmark<br>\
            Tagensvej 188<br>\
            DK-2400 Copenhagen NV<br>\
            Denmark<br>\
            Phone: +45 ## ## ## ##<br>\
            <a href="mailto:contact@international-alc.dk" target="_top">contact@international-alc.dk</a>\
            </p>\
    </address>\
	</footer>'
};