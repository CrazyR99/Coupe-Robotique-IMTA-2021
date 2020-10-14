/* 
        window.onscroll = function() {
            scrollToTopEnabledFunction();
        };

        myButtonToTop = document.getElementById("button-to-top");

        function scrollToTopEnabledFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                console.log("mode-flex");
                console.log(myButtonToTop.display);
                myButtonToTop.color = "#333333";
                myButtonToTop.display = 'flex';
            } else {
                console.log("mode-none");
                myButtonToTop.display = 'none';
            }
        }*/

function getScrollHeight() {
	var h = document.documentElement,
		b = document.body,
		sh = 'scrollHeight';
	return h[sh] || b[sh];
}

function getScrollTop() {
	var h = document.documentElement,
		b = document.body,
		st = 'scrollTop';
	return h[st] || b[st];
}

function getScrollPercent() {
	var h = document.documentElement,
		b = document.body,
		st = 'scrollTop',
		sh = 'scrollHeight';
	return parseInt((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100);
}

function getPos(el) {
	// yay readability
	for (var lx = 0, ly = 0; el != null; lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
	return { x: lx, y: ly };
}

var nav_bar = document.getElementById('vertical-nav-bar');
var section_intro = document.getElementById('intro-section');
var section_articles = document.getElementById('articles-section');
var div_nav = document.getElementById('nav-container');
var a_propos_start = document.getElementById('a-propos-start');

window.onscroll = function() {
	if (window.location.pathname.split('/').pop() == 'index.html') {
		(h = document.documentElement), (b = document.body), (st = 'scrollTop'), (sh = 'scrollHeight');
		var scrollTop = getScrollTop();
		var vh = h.clientHeight;
		var numberItems = 2;
		var intro_height = 90 * vh / 100;
		var marginbetween = intro_height / 2 / numberItems;
		var offset = 30;
		if (scrollTop === 0) {
			nav_bar.style.height = '0px';
		} else if (scrollTop < intro_height - 200) {
			nav_bar.style.height = (scrollTop / 2 / numberItems + offset).toString() + 'px';
		} else {
			nav_bar.style.height =
				Math.min(
					marginbetween +
						(scrollTop - intro_height) /
							(getScrollHeight() - 90 * vh / 100 - intro_height) *
							90 *
							vh /
							100 /
							2 /
							numberItems +
						offset,
					90 * vh / 100 / 2
				).toString() + 'px';
		}
	}
};
