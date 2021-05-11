if (self.CavalryLogger) {
    CavalryLogger.start_js(["ob24q"]);
}

__d("MercuryFilters.re", ["MercuryFilters.bs"], (function(a, b, c, d, e, f) {
    c = (a = b("MercuryFilters.bs")).all;
    f.all = c;
    d = a.unread;
    f.unread = d;
    e = a.groups;
    f.groups = e;
    b = a.named;
    f.named = b;
    c = a.unnamed;
    f.unnamed = c;
    d = a.unsyncedChat;
    f.unsyncedChat = d;
    e = a.getSupportedFilters;
    f.getSupportedFilters = e;
    b = a.isSupportedFilter;
    f.isSupportedFilter = b
}
), null);
__d("FavIcon", ["DOM"], (function(a, b, c, d, e, f) {
    f.isToggledResource = a;
    f.set = c;
    f.setToggleResources = d;
    f.toggle = e;
    f.toggleSet = k;
    var g, h, i;
    function j() {
        var a = b("DOM").scry(document.head, "link");
        a && a.forEach(function(a) {
            (a.rel.indexOf("icon") != -1 || a.rel.indexOf("shortcut icon") != -1) && b("DOM").remove(a)
        })
    }
    function a() {
        return i && g instanceof HTMLLinkElement && g.href === i ? !0 : !1
    }
    function c(a) {
        g && b("DOM").remove(g),
        j(),
        g = b("DOM").create("link", {
            type: "image/x-icon",
            rel: "icon",
            href: a
        }),
        b("DOM").appendContent(b("DOM").find(document, "head"), g)
    }
    function d(a, b) {
        g = document.querySelector('link[rel*=icon][href*=".ico"]'),
        g instanceof HTMLLinkElement && (h = b != null ? b : g.href,
        i = a)
    }
    function e() {
        if (!g || !i)
            return;
        if (g.href === h) {
            this.set(i);
            return
        }
        this.set(h)
    }
    function k(a) {
        if (!g || !i || !h)
            return;
        a = a ? i : h;
        g.href !== a && this.set(a)
    }
}
), null);
__d("WorkGalahadDispatcher", ["ExplicitRegistrationDispatcher"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.dispatch = c.dispatch.bind(babelHelpers.assertThisInitialized(c)),
            b) || babelHelpers.assertThisInitialized(c)
        }
        return b
    }(b("ExplicitRegistrationDispatcher"));
    c = new a({
        strict: !0
    });
    e.exports = c
}
), null);
