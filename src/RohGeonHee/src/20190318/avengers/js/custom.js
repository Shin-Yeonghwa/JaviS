! function(e, t, n) {
    var i, a, l, o, s, c = ".language",
        u = e("#menu-line"),
        f = (e("#menu"), e(".menu-active").width()),
        r = 20,
        g = 0,
        h = 40,
        m = "active";

    function d(t) {
        switch (t.which) {
            case 27:
                e(".examples").hasClass(m) && k()
        }
    }

    function p() {
        e(this).hasClass("left") ? e.fn.fullpage.moveSlideLeft() : e.fn.fullpage.moveSlideRight()
    }

    function v() {
        clearTimeout(i), i = setTimeout(w, 350)
    }

    function w() {
        if (f = e(".menu-active").width(), e(n).width() <= 900) {
            h = 22;
            var t = e("#menu").find("a").first();
            S.call(t), g = t.position().left
        } else e(n).width() > 900 && (h = 40, S.call(e("#menu").find("a").first()), g = 0)
    }

    function k() {
        clearTimeout(a), a = setTimeout(function() {
            C(".examples"), e.fn.fullpage.setAllowScrolling(!0)
        }, 300)
    }

    function b(t) {
        C(".examples"), e.fn.fullpage.setAllowScrolling(!1)
    }

    function C(t) {
        e(t).toggleClass(m)
    }

    function y(e) {
        void 0 !== e && (e.preventDefault(), e.stopPropagation()), C(c)
    }

    function x(t) {
        e(c).removeClass(m)
    }

    function S() {
        var t = e(this).parent();
		
        A(t.position().left, t.width())
    }

    function T() {
        A(g, f)
    }

    function A(e, t) {
		//console.log(e +","+t);
        u.stop().animate({
            left: e + h / 2,
            width: t - h
        })
    }

    function D(t) {
        t.preventDefault();
        var n = e(this).attr("href").substr(1);
        e(this).addClass(m).siblings().removeClass(m), e('[data-tab="' + n + '"]').addClass(m).siblings().removeClass(m)
    }
    o = "dist/non-critical.min.css", s = n.document.createElement("link"), n.document.styleSheets, s.rel = "stylesheet", s.href = o, 
		e("#stylesheet-critical").after(s), u.width(f - h).css("left", r), "en" !== (!(l = navigator.language || navigator.userLanguage) || l.indexOf("-") < 0 ? l : l.split("-")[0]) && y(), v(), 
		e("#menu li a").hover(S, T), e(n).on("resize", v), e(t).on("click", ".shell-tab", D).on("click", ".language-current", y).on("click", "html", x).on("touchstart click", ".info-close", k).on("click", ".show-examples", b).keydown(d).on("click", ".my-arrow", p), e.get("routes/github-api.json", function(t) {
        var n = Object.keys(t);
        n.forEach(function(n) {
            e('[data-github="' + n + '"]').find("h4").text(t[n])
        })
    }), n.ga = n.ga || function() {
        (ga.q = ga.q || []).push(arguments)
    }, ga.l = +new Date, ga("create", "UA-94005074-1", "auto"), ga("send", "pageview")
}(jQuery, document, window);