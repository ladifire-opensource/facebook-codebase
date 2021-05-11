if (self.CavalryLogger) {
    CavalryLogger.start_js(["GAheb"]);
}

__d("BizKitRoutePlaceHolderSpinner", ["FlexLayout.react", "GeoSpinner.react", "React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React");
    (g || (g = b("stylex"))).inject(".ff443qle{height:100vh}", 1);
    function a() {
        return h.jsx(b("FlexLayout.react"), {
            align: "center",
            className: "ff443qle",
            justify: "center",
            children: h.jsx(b("GeoSpinner.react"), {})
        })
    }
}
), null);
__d("PagesManagerInboxAwayToggleNUX.react", ["fbt", "React", "XUIAmbientNUX.react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            this.props.onNuxShow()
        }
        ;
        d.render = function() {
            return h.jsx(b("XUIAmbientNUX.react"), {
                contextRef: this.props.contextRef,
                onCloseButtonClick: this.props.onNuxDismiss,
                position: "below",
                shown: !0,
                children: g._("Khi b\u1ea1n kh\u00f4ng th\u1ec3 tr\u1ea3 l\u1eddi tin nh\u1eafn, h\u00e3y cho m\u1ecdi ng\u01b0\u1eddi bi\u1ebft Trang c\u1ee7a b\u1ea1n \u0111ang v\u1eafng m\u1eb7t.")
            })
        }
        ;
        return c
    }(h.PureComponent);
    e.exports = a
}
), null);
