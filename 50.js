if (self.CavalryLogger) {
    CavalryLogger.start_js(["GGSpj"]);
}

__d("FullScreen", ["ArbiterMixin", "CSS", "Event", "Keys", "UserAgent", "UserAgent_DEPRECATED", "mixin", "throttle"], (function(a, b, c, d, e, f) {
    var g = {}
      , h = !1;
    function i(a) {
        b("Event").getKeyCode(a) === b("Keys").ESC && a.stopPropagation()
    }
    function j() {
        h || (document.addEventListener("keydown", i, !0),
        h = !0)
    }
    function k() {
        h && (document.removeEventListener("keydown", i, !0),
        h = !1)
    }
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.listenForEvent = function(a) {
            var c = b("throttle")(this.onChange, 0, this);
            g[a.id] || (g[a.id] = !0,
            b("Event").listen(a, {
                webkitfullscreenchange: c,
                mozfullscreenchange: c,
                MSFullscreenChange: c,
                fullscreenchange: c
            }))
        }
        ;
        d.enableFullScreen = function(a) {
            this.listenForEvent(a);
            a = a;
            if (a.webkitRequestFullScreen)
                b("UserAgent_DEPRECATED").chrome() ? a.webkitRequestFullScreen == null ? void 0 : a.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : a.webkitRequestFullScreen == null ? void 0 : a.webkitRequestFullScreen();
            else if (a.mozRequestFullScreen)
                a.mozRequestFullScreen();
            else if (a.msRequestFullscreen)
                j(),
                a.msRequestFullscreen == null ? void 0 : a.msRequestFullscreen();
            else if (a.requestFullScreen)
                a.requestFullScreen == null ? void 0 : a.requestFullScreen();
            else
                return !1;
            return !0
        }
        ;
        d.disableFullScreen = function() {
            var a = document;
            if (a.webkitCancelFullScreen)
                a.webkitCancelFullScreen();
            else if (a.mozCancelFullScreen)
                a.mozCancelFullScreen();
            else if (a.msExitFullscreen)
                a.msExitFullscreen();
            else if (a.cancelFullScreen)
                a.cancelFullScreen();
            else if (a.exitFullScreen)
                a.exitFullScreen();
            else
                return !1;
            return !0
        }
        ;
        d.isFullScreen = function() {
            var a = document;
            return Boolean(a.webkitIsFullScreen || a.fullScreen || a.mozFullScreen || a.msFullscreenElement)
        }
        ;
        d.toggleFullScreen = function(a) {
            if (this.isFullScreen()) {
                this.disableFullScreen();
                return !1
            } else
                return this.enableFullScreen(a)
        }
        ;
        d.onChange = function() {
            var a = this.isFullScreen()
              , c = document.body;
            c && b("CSS").conditionClass(c, "fullScreen", a);
            this.inform("changed");
            a || k()
        }
        ;
        d.isSupportedWithKeyboardInput = function() {
            return this.isSupported() && !b("UserAgent").isBrowser("Safari")
        }
        ;
        d.isSupported = function() {
            var a = document
              , b = a.webkitFullscreenEnabled || a.mozFullScreenEnabled || a.msFullscreenEnabled || a.fullscreenEnabled;
            return Boolean(b || a.webkitCancelFullScreen || a.mozCancelFullScreen || a.msExitFullscreen || a.cancelFullScreen || a.exitFullScreen)
        }
        ;
        return c
    }(b("mixin")(b("ArbiterMixin")));
    c = new a();
    d = b("throttle")(c.onChange, 0, c);
    b("Event").listen(document, {
        webkitfullscreenchange: d,
        mozfullscreenchange: d,
        MSFullscreenChange: d,
        fullscreenchange: d
    });
    f = c;
    e.exports = f
}
), null);
__d("enumerate", [], (function(a, b, c, d, e, f) {
    "use strict";
    b = function(b) {
        return b.FB_enumerate
    }(a);
    e.exports = b
}
), null);
