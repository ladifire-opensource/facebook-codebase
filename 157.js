if (self.CavalryLogger) {
    CavalryLogger.start_js(["tR3js"]);
}

__d("CometLink.react", ["BaseLink.react", "React", "TetraTextContext", "TetraTextTypography", "isCometRouterUrl", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = {
        disabled: {
            color: "erlsw9ld",
            ":hover": {
                textDecoration: "p8dawk7l"
            }
        },
        root: {
            color: "gmql0nx0",
            ":hover": {
                textDecoration: "gpro0wi8"
            }
        }
    }
      , i = {
        blueLink: {
            color: "py34i1dx"
        },
        highlight: {
            color: "q66pz984"
        },
        negative: {
            color: "jdix4yx3"
        },
        positive: {
            color: "g5o1ygfq"
        },
        primary: {
            color: "oo9gr5id"
        },
        secondary: {
            color: "m9osqain"
        },
        tertiary: {
            color: "pipptul6"
        },
        white: {
            color: "ljqsnud1"
        }
    }
      , j = {
        bold: {
            fontWeight: "hnhda86s"
        },
        medium: {
            fontWeight: "ekzkrbhg"
        },
        normal: {
            fontWeight: "b1v8xokw"
        },
        semibold: {
            fontWeight: "lrazzd5p"
        }
    }
      , k = {
        block: {
            display: "a8c37x1j"
        },
        "inline-block": {
            display: "q9uorilb"
        }
    };
    function a(a, c) {
        var d = a.color
          , e = a.disabled;
        e = e === void 0 ? !1 : e;
        var f = a.display;
        f = f === void 0 ? "inline" : f;
        var n = a.fbclid
          , o = a.href
          , p = a.lynxMode
          , q = a.role
          , r = a.target
          , s = a.weight
          , t = a.xstyle;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["color", "disabled", "display", "fbclid", "href", "lynxMode", "role", "target", "weight", "xstyle"]);
        var u = g.useContext(b("TetraTextContext"))
          , v = r === "_blank" || o != null && o !== "#" && !b("isCometRouterUrl")(o);
        d = (d = d) != null ? d : u != null ? l(u.type, v) : "inherit";
        s = (s = s) != null ? s : u != null ? m(u.type, v) : "inherit";
        u = q == null && (o == null || o === "#") ? "button" : q;
        return g.jsx(b("BaseLink.react"), babelHelpers["extends"]({}, a, {
            disabled: e,
            display: "inline",
            fbclid: n,
            href: o,
            lynxMode: p,
            ref: c,
            role: u,
            target: v ? "_blank" : r,
            xstyle: [h.root, d !== "inherit" && i[d], s !== "inherit" && j[s], e && h.disabled, f !== "inline" && k[f], t]
        }))
    }
    function l(a, b) {
        switch (a) {
        case "headline3":
        case "headline4":
        case "body1":
        case "body2":
        case "body3":
        case "body4":
            return b ? "blueLink" : "primary";
        case "meta1":
        case "meta2":
        case "meta3":
        case "meta4":
            return b ? "blueLink" : "inherit";
        default:
            return "inherit"
        }
    }
    function m(a, c) {
        if (!c) {
            c = n(a);
            return b("TetraTextTypography")[c].fontWeight
        }
        return "inherit"
    }
    function n(a) {
        switch (a) {
        case "headline3":
            return "headlineEmphasized3";
        case "headline4":
            return "headlineEmphasized4";
        case "body1":
            return "bodyLink1";
        case "body2":
            return "bodyLink2";
        case "body3":
            return "bodyLink3";
        case "body4":
            return "bodyLink4";
        default:
            return a
        }
    }
    c = g.forwardRef(a);
    e.exports = c
}
), null);
__d("CometProgressIndicator.react", ["CometVisualCompletionAttributes", "FocusWithinHandler.react", "React", "ariaGlimmerProps", "stylex", "useCometLoadingStateTracker"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React"), i = {
        animateDot: {
            animationDuration: "r7fvqmod",
            animationIterationCount: "ee40wjg4",
            animationName: "omtukq3v",
            animationTimingFunction: "q0a5ri7c",
            opacity: "lyadkbl6",
            transform: "d8domg9s"
        },
        animationDelay300: {
            animationDelay: "oeefd0zo"
        },
        animationDelay600: {
            animationDelay: "ftwn7utp"
        },
        hideOutline: {
            outline: "lzcic4wl"
        },
        root: {
            display: "j83agx80",
            flexDirection: "btwxx1t3"
        }
    }, j = {
        "default": {
            borderTopStartRadius: "jk6sbkaj",
            borderTopEndRadius: "kdgqqoy6",
            borderBottomEndRadius: "ihh4hy1g",
            borderBottomStartRadius: "qttc61fc",
            height: "t6na6p9t",
            marginEnd: "kady6ibp",
            marginStart: "dwxx2s2f",
            width: "c9rrlmt1"
        },
        small: {
            borderTopStartRadius: "s8bnoagg",
            borderTopEndRadius: "bn9qtmzc",
            borderBottomEndRadius: "hp05c5td",
            borderBottomStartRadius: "b6jg2yqc",
            height: "mw227v9j",
            marginEnd: "ditlmg2l",
            marginStart: "nvdbi5me",
            width: "loos5mxf"
        }
    }, k = {
        media: {
            backgroundColor: "q2y6ezfg"
        },
        primary: {
            backgroundColor: "rsyf18zc"
        }
    };
    function a(a) {
        var c = a.noLoadingStateTracker
          , d = a.overrideBGColorContext;
        d = d === void 0 ? "primary" : d;
        a = a.size;
        a = a === void 0 ? "default" : a;
        var e = b("useCometLoadingStateTracker")()
          , f = e[0]
          , l = e[1];
        c === !0 && (f = b("CometVisualCompletionAttributes").IGNORE,
        l = null);
        var m = [i.animateDot, j[a], k[d]];
        return h.jsx(b("FocusWithinHandler.react"), {
            children: function(a, c) {
                return h.jsxs("div", babelHelpers["extends"]({
                    className: (g || (g = b("stylex")))(i.root, !c && i.hideOutline),
                    ref: l
                }, b("ariaGlimmerProps"), f, {
                    children: [h.jsx("div", {
                        className: g(m)
                    }), h.jsx("div", {
                        className: g.apply(void 0, m.concat([i.animationDelay300]))
                    }), h.jsx("div", {
                        className: g.apply(void 0, m.concat([i.animationDelay600]))
                    })]
                }))
            }
        })
    }
}
), null);
