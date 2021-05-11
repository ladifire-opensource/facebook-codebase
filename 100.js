if (self.CavalryLogger) {
    CavalryLogger.start_js(["d+jEd"]);
}

__d("CometRouteParams", ["useCurrentRoute"], (function(a, b, c, d, e, f) {
    "use strict";
    f.useRouteParams = a;
    function a() {
        var a;
        return (a = (a = b("useCurrentRoute")()) == null ? void 0 : a.params) != null ? a : {}
    }
}
), null);
__d("getCometEntityKey", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        var b = a.entityKeyConfig;
        return b == null ? null : g(b, a)
    }
    function g(a, b) {
        var c = {};
        for (var d in a)
            c[d] = h(a[d], b);
        return c
    }
    function h(a, b) {
        switch (a.source) {
        case "prop":
            var c = b.rootView.props;
            return c == null ? null : String(c[a.value]);
        case "param":
            return String(b.params[a.value]);
        case "constant":
            return a.value
        }
        return null
    }
}
), null);
__d("CometBase.react", ["BaseView.react"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("BaseView.react")
}
), null);
__d("CometLazyPopoverTrigger.react", ["BasePopoverTrigger.react", "CometPopoverLoadingState.react", "React", "lazyLoadComponent", "useCometPopoverInteractionTracing"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.fallback;
        c = c === void 0 ? g.jsx(b("CometPopoverLoadingState.react"), {
            withArrow: !0
        }) : c;
        var d = a.popoverResource
          , e = a.preloadTrigger
          , f = a.tracePolicy;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["fallback", "popoverResource", "preloadTrigger", "tracePolicy"]);
        var h = g.useMemo(function() {
            return b("lazyLoadComponent")(d)
        }, [d]);
        f = b("useCometPopoverInteractionTracing")(f);
        return g.jsx(b("BasePopoverTrigger.react"), babelHelpers["extends"]({
            fallback: c,
            interactionTracker: f,
            popover: h,
            popoverPreloadResource: d,
            preloadTrigger: e
        }, a))
    }
}
), null);
__d("CometMenuItemHighlightContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext(!1);
    e.exports = c
}
), null);
__d("BaseFocusRing.react", ["FocusWithinHandler.react", "React", "gkx", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React")
      , h = {
        focused: {
            outline: "tr9jja99",
            "@media (-webkit-min-device-pixel-ratio: 0)": {
                outline: "omy9p634"
            }
        },
        newFocused: {
            outline: "bflrbx36"
        },
        unfocused: {
            outline: "lzcic4wl"
        }
    }
      , i = b("gkx")("1721477");
    function a(a) {
        var c = a.children
          , d = a.suppressFocusRing
          , e = d === void 0 ? !1 : d;
        d = a.testOnly;
        var f = i ? h.newFocused : h.focused;
        return g.jsx(b("FocusWithinHandler.react"), {
            testOnly: d,
            children: function(a, b) {
                return c(!e && a && b ? f : h.unfocused)
            }
        })
    }
    a.focusRingXStyle = h.focused
}
), null);
__d("BaseInput.react", ["React", "stylex", "testID"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React"), i = {
        root: {
            WebkitTapHighlightColor: "oajrlxb2",
            boxSizing: "rq0escxv",
            touchAction: "f1sip0of",
            ":disabled": {
                cursor: "hidtqoto"
            }
        }
    };
    function a(a, c) {
        var d = a.onChange
          , e = a.onClick
          , f = a.onValueChange
          , j = a.testid
          , k = a.type
          , l = k === void 0 ? "text" : k;
        k = a.xstyle;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["onChange", "onClick", "onValueChange", "testid", "type", "xstyle"]);
        var m = h.useMemo(function() {
            switch (l) {
            case "switch":
                return "checkbox";
            default:
                return l
            }
        }, [l])
          , n = m === "checkbox" || m === "radio"
          , o = m === "textarea";
        a = Object.assign({}, {
            dir: "auto"
        }, a, b("testID")(j), {
            className: (g || (g = b("stylex")))(i.root, k),
            onChange: function(a) {
                n || f && f(a.target.value),
                d && d(a)
            },
            onClick: function(a) {
                n && (f && f(a.target.checked)),
                e && e(a)
            }
        });
        return o ? h.jsx("textarea", babelHelpers["extends"]({}, a, {
            ref: c
        })) : h.jsx("input", babelHelpers["extends"]({}, a, {
            ref: c,
            type: m
        }))
    }
    c = h.memo(h.forwardRef(a));
    e.exports = c
}
), null);
__d("BaseSwitch.react", ["BaseFocusRing.react", "BaseInput.react", "BaseView.react", "React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = {
        "switch": {
            cursor: "nhd2j8a9",
            height: "datstx6m",
            marginTop: "kvgmc6g5",
            marginEnd: "cxmmr5t8",
            marginBottom: "oygrvhab",
            marginStart: "hcukyx3x",
            opacity: "b5wmifdl",
            outline: "lzcic4wl",
            paddingTop: "jb3vyjys",
            paddingEnd: "rz4wbd8a",
            paddingBottom: "qt6c0cv9",
            paddingStart: "a8nywdso",
            position: "pmk7jnqg",
            start: "j9ispegn",
            top: "kr520xx4",
            width: "k4urcfbm"
        },
        wrapper: {
            position: "l9j0dhe7"
        }
    };
    function a(a, c) {
        var d = a.children
          , e = a.suppressFocusRing
          , f = a.testid
          , i = a.xstyle
          , j = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "suppressFocusRing", "testid", "xstyle"]);
        return g.jsx(b("BaseFocusRing.react"), {
            suppressFocusRing: e,
            children: function(a) {
                return g.jsxs(b("BaseView.react"), {
                    testid: void 0,
                    xstyle: [h.wrapper, a, i],
                    children: [d, g.jsx(b("BaseInput.react"), babelHelpers["extends"]({}, j, {
                        "aria-checked": (a = j.checked) != null ? a : !1,
                        ref: c,
                        role: "switch",
                        type: "checkbox",
                        xstyle: h["switch"]
                    }))]
                })
            }
        })
    }
    c = g.memo(g.forwardRef(a));
    e.exports = c
}
), null);
__d("BaseTextInput.react", ["BaseFocusRing.react", "BaseInput.react", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a, c) {
        var d = a.suppressFocusRing
          , e = a.xstyle
          , f = babelHelpers.objectWithoutPropertiesLoose(a, ["suppressFocusRing", "xstyle"]);
        return g.jsx(b("BaseFocusRing.react"), {
            suppressFocusRing: d,
            children: function(a) {
                return g.jsx(b("BaseInput.react"), babelHelpers["extends"]({}, f, {
                    ref: c,
                    xstyle: [a, e]
                }))
            }
        })
    }
    c = g.memo(g.forwardRef(a));
    e.exports = c
}
), null);
__d("useCometDeferredDialog", ["CometDialogContext", "CometSuspendedDialogImpl.react", "React", "deferredLoadComponent"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a, c) {
        var d = g.useRef(null)
          , e = g.useContext(b("CometDialogContext"))
          , f = g.useCallback(function(d, f) {
            var g = b("deferredLoadComponent")(a);
            e(b("CometSuspendedDialogImpl.react"), {
                dialog: g,
                dialogProps: babelHelpers["extends"]({}, d, {
                    loadImmediately: !0
                }),
                fallback: c
            }, f)
        }, [e, a, c]);
        return [f, d]
    }
}
), null);
__d("useCometPassiveWindowSize", ["ExecutionEnvironment", "React", "removeFromArray"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function h() {
        return b("ExecutionEnvironment").canUseDOM ? {
            innerHeight: window.innerHeight,
            innerWidth: window.innerWidth,
            outerHeight: window.outerHeight,
            outerWidth: window.outerWidth
        } : {
            innerHeight: 0,
            innerWidth: 0,
            outerHeight: 0,
            outerWidth: 0
        }
    }
    function a() {
        var a = g.useRef([])
          , c = g.useState(function() {
            return {
                getCurrent: function() {
                    return h()
                },
                subscribe: function(c) {
                    a.current.push(c);
                    return {
                        remove: function() {
                            b("removeFromArray")(a.current, c)
                        }
                    }
                }
            }
        })
          , d = c[0];
        c[1];
        g.useEffect(function() {
            var b = function() {
                var b = Array.from(a.current);
                b.forEach(function(a) {
                    return a()
                })
            };
            window.addEventListener("resize", b);
            return function() {
                window.removeEventListener("resize", b)
            }
        }, []);
        return d
    }
}
), null);
__d("CometToggle.react", ["BaseSwitch.react", "BaseView.react", "Locale", "React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = b("Locale").isRTL()
      , i = {
        background: {
            bottom: "i09qtzwb",
            boxSizing: "rq0escxv",
            end: "n7fi1qx3",
            position: "pmk7jnqg",
            start: "j9ispegn",
            top: "kr520xx4",
            backgroundColor: "is6700om",
            opacity: "b5wmifdl",
            pointerEvents: "hzruof5a",
            transitionDuration: "f0ai4nzy",
            transitionProperty: "art1omkt",
            transitionTimingFunction: "b4alr923"
        },
        backgroundActive: {
            opacity: "pedkr2u6",
            transitionDuration: "s00z5mgp",
            transitionTimingFunction: "eloblzlw"
        },
        disabled: {
            opacity: "ggwglk7f",
            transitionDuration: "s00z5mgp",
            transitionTimingFunction: "eloblzlw"
        },
        slider: {
            backgroundColor: "q2y6ezfg",
            borderTopStartRadius: "lit7pgxp",
            borderTopEndRadius: "o3c63hce",
            borderBottomEndRadius: "hqlzco19",
            borderBottomStartRadius: "lsl2245n",
            boxShadow: "dsne8k7f",
            height: "rgmg9uty",
            pointerEvents: "hzruof5a",
            position: "pmk7jnqg",
            start: "tkxwya3v",
            top: "bk00n993",
            transitionDuration: "f0ai4nzy",
            transitionProperty: "flx89l3n",
            transitionTimingFunction: "b4alr923",
            width: "b73ngqbp"
        },
        sliderActive: {
            transitionDuration: "s00z5mgp",
            transitionTimingFunction: "eloblzlw"
        },
        sliderActiveLeft: {
            transform: "ebryzltl"
        },
        sliderActiveLeftSmall: {
            transform: "lyjqmpqq"
        },
        sliderActiveRight: {
            transform: "duvxvzcv"
        },
        sliderActiveRightSmall: {
            transform: "kwf64sci"
        },
        sliderSmall: {
            height: "jnigpg78",
            width: "odw8uiq3"
        },
        "switch": {
            backgroundColor: "pwoa4pd7",
            borderTop: "qu0x051f",
            borderEnd: "esr5mh6w",
            borderBottom: "e9989ue4",
            borderStart: "r7d6kgcz",
            borderTopStartRadius: "cmek9o9a",
            borderTopEndRadius: "p7f4f6cj",
            borderBottomEndRadius: "c8oo3d72",
            borderBottomStartRadius: "r15kkdkt",
            boxSizing: "rq0escxv",
            display: "q9uorilb",
            height: "mudddibn",
            marginTop: "kvgmc6g5",
            marginEnd: "cxmmr5t8",
            marginBottom: "enqfppq2",
            marginStart: "hcukyx3x",
            opacity: "pedkr2u6",
            overflowX: "ni8dbmo4",
            overflowY: "stjgntxs",
            paddingTop: "jb3vyjys",
            paddingEnd: "rz4wbd8a",
            paddingBottom: "qt6c0cv9",
            paddingStart: "a8nywdso",
            position: "l9j0dhe7",
            transitionDuration: "f0ai4nzy",
            transitionProperty: "art1omkt",
            transitionTimingFunction: "b4alr923",
            width: "i8j84fko"
        },
        switchSmall: {
            borderTopStartRadius: "lit7pgxp",
            borderTopEndRadius: "o3c63hce",
            borderBottomEndRadius: "hqlzco19",
            borderBottomStartRadius: "lsl2245n",
            height: "rgmg9uty",
            width: "eim337gk"
        }
    };
    function a(a, c) {
        var d, e = a["aria-describedby"], f = a["aria-hidden"], j = a.children, k = a.disabled;
        k = k === void 0 ? !1 : k;
        var l = a.onClick
          , m = a.onValueChange
          , n = a.size;
        n = n === void 0 ? "medium" : n;
        var o = a.tabIndex
          , p = a.testid;
        p = a.value;
        a = n === "small";
        return g.jsxs(b("BaseSwitch.react"), {
            "aria-describedby": e,
            "aria-hidden": f,
            "aria-label": j,
            checked: p,
            disabled: k,
            onClick: l,
            onValueChange: m,
            ref: c,
            tabIndex: o,
            testid: void 0,
            xstyle: [i["switch"], a && i.switchSmall, k && i.disabled],
            children: [g.jsx(b("BaseView.react"), {
                xstyle: [i.background, p && i.backgroundActive]
            }), g.jsx(b("BaseView.react"), {
                xstyle: [i.slider, a && i.sliderSmall, p && i.sliderActive, p && (h ? [i.sliderActiveLeft, a && i.sliderActiveLeftSmall] : [i.sliderActiveRight, a && i.sliderActiveRightSmall])]
            })]
        })
    }
    c = g.forwardRef(a);
    e.exports = c
}
), null);
__d("TetraishSkittleEmoji.react", ["CometEmoji.react", "EmojiRenderer", "React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React"), i = {
        circle: {
            borderTopStartRadius: "s45kfl79",
            borderTopEndRadius: "emlxlaya",
            borderBottomEndRadius: "bkmhp75w",
            borderBottomStartRadius: "spb7xbtv"
        },
        roundedRect: {
            borderTopStartRadius: "ue3kfks5",
            borderTopEndRadius: "pw54ja7n",
            borderBottomEndRadius: "uo3d90p7",
            borderBottomStartRadius: "l82x9zwi"
        },
        skittle: {
            alignItems: "bp9cbjyn",
            borderTopWidth: "rt8b4zig",
            borderEndWidth: "n8ej3o3l",
            borderBottomWidth: "agehan2d",
            borderStartWidth: "sk4xxmp2",
            boxSizing: "rq0escxv",
            display: "pq6dq46d",
            justifyContent: "taijpn5t",
            position: "l9j0dhe7"
        }
    }, j = {
        accent: {
            backgroundColor: "is6700om"
        },
        blue: {
            backgroundColor: "nfl8ryma"
        },
        cherry: {
            backgroundColor: "cvgnql8j"
        },
        grape: {
            backgroundColor: "oxqh0ovx"
        },
        gray: {
            backgroundColor: "tdjehn4e"
        },
        green: {
            backgroundColor: "jllm4f4h"
        },
        lemon: {
            backgroundColor: "tutozmqo"
        },
        lightblue: {
            backgroundColor: "oo1teu6h"
        },
        lime: {
            backgroundColor: "x2my2bqz"
        },
        pink: {
            backgroundColor: "g1i5egrt"
        },
        red: {
            backgroundColor: "l44iypv3"
        },
        seafoam: {
            backgroundColor: "p43b5e0k"
        },
        teal: {
            backgroundColor: "gbrvaats"
        },
        tomato: {
            backgroundColor: "d8rukodm"
        },
        transparent: {
            backgroundColor: "g5ia77u1"
        },
        white: {
            backgroundColor: "q2y6ezfg"
        }
    }, k = {
        24: {
            height: "rgmg9uty",
            width: "b73ngqbp"
        },
        36: {
            height: "tv7at329",
            width: "thwo4zme"
        },
        40: {
            height: "qypqp5cg",
            width: "q676j6op"
        },
        48: {
            height: "m7zwrmfr",
            width: "tmrshh9y"
        },
        56: {
            height: "e5d9fub0",
            width: "oeao4gh3"
        },
        60: {
            height: "cb02d2ww",
            width: "ljni7pan"
        }
    };
    function a(a) {
        var c = a.color
          , d = a.emoji
          , e = a.emojiSize
          , f = a.shape;
        f = f === void 0 ? "circle" : f;
        a = a.size;
        var l = b("EmojiRenderer").parse(d);
        return h.jsx("div", {
            className: (g || (g = b("stylex")))(f === "circle" && i.circle, f === "roundedRect" && i.roundedRect, i.skittle, j[c], k[a]),
            children: h.jsx(b("CometEmoji.react"), {
                emoji: l[0] ? l[0].emoji : [d],
                size: e
            })
        })
    }
}
), null);
__d("TetraishSkittleIcon.react", ["React", "TetraIcon.react", "profilePhotoUtils", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React"), i = {
        circle: {
            borderTopStartRadius: "s45kfl79",
            borderTopEndRadius: "emlxlaya",
            borderBottomEndRadius: "bkmhp75w",
            borderBottomStartRadius: "spb7xbtv"
        },
        iconBadge: {
            alignItems: "bp9cbjyn",
            backgroundColor: "gq3rzrd7",
            borderTopColor: "k7sk2woe",
            borderEndColor: "dw4io9kj",
            borderBottomColor: "jl8xc037",
            borderStartColor: "fz7vqolb",
            borderTopStartRadius: "s45kfl79",
            borderTopEndRadius: "emlxlaya",
            borderBottomEndRadius: "bkmhp75w",
            borderBottomStartRadius: "spb7xbtv",
            borderTopStyle: "goun2846",
            borderEndStyle: "ccm00jje",
            borderBottomStyle: "s44p3ltw",
            borderStartStyle: "mk2mc5f4",
            borderTopWidth: "qxh1up0x",
            borderEndWidth: "qtyiw8t4",
            borderBottomWidth: "tpcyxxvw",
            borderStartWidth: "k0bpgpbk",
            display: "j83agx80",
            justifyContent: "taijpn5t",
            overflowX: "ni8dbmo4",
            overflowY: "stjgntxs",
            paddingTop: "jwdofwj8",
            paddingEnd: "n8tt0mok",
            paddingBottom: "r8blr3vg",
            paddingStart: "hyh9befq",
            position: "pmk7jnqg"
        },
        roundedRect: {
            borderTopStartRadius: "ue3kfks5",
            borderTopEndRadius: "pw54ja7n",
            borderBottomEndRadius: "uo3d90p7",
            borderBottomStartRadius: "l82x9zwi"
        },
        skittle: {
            alignItems: "bp9cbjyn",
            borderTopWidth: "rt8b4zig",
            borderEndWidth: "n8ej3o3l",
            borderBottomWidth: "agehan2d",
            borderStartWidth: "sk4xxmp2",
            boxSizing: "rq0escxv",
            display: "pq6dq46d",
            justifyContent: "taijpn5t",
            position: "l9j0dhe7"
        }
    }, j = {
        accent: {
            backgroundColor: "is6700om"
        },
        blue: {
            backgroundColor: "nfl8ryma"
        },
        cherry: {
            backgroundColor: "cvgnql8j"
        },
        grape: {
            backgroundColor: "oxqh0ovx"
        },
        gray: {
            backgroundColor: "tdjehn4e"
        },
        green: {
            backgroundColor: "jllm4f4h"
        },
        lemon: {
            backgroundColor: "tutozmqo"
        },
        lightblue: {
            backgroundColor: "oo1teu6h"
        },
        lime: {
            backgroundColor: "x2my2bqz"
        },
        pink: {
            backgroundColor: "g1i5egrt"
        },
        red: {
            backgroundColor: "l44iypv3"
        },
        seafoam: {
            backgroundColor: "p43b5e0k"
        },
        teal: {
            backgroundColor: "gbrvaats"
        },
        tomato: {
            backgroundColor: "d8rukodm"
        },
        white: {
            backgroundColor: "q2y6ezfg"
        }
    }, k = {
        36: {
            height: "tv7at329",
            width: "thwo4zme"
        },
        40: {
            height: "qypqp5cg",
            width: "q676j6op"
        },
        48: {
            height: "m7zwrmfr",
            width: "tmrshh9y"
        },
        56: {
            height: "e5d9fub0",
            width: "oeao4gh3"
        },
        60: {
            height: "cb02d2ww",
            width: "ljni7pan"
        }
    }, l = (c = {},
    c[36] = 20,
    c[40] = 24,
    c[48] = 24,
    c[56] = 24,
    c[60] = 24,
    c);
    function m(a) {
        switch (a) {
        case "gray":
            return "primary";
        case "white":
            return "primary";
        case "lightblue":
            return "highlight";
        default:
            return "white"
        }
    }
    function a(a) {
        var c = a.color
          , d = a.disabled;
        d = d === void 0 ? !1 : d;
        var e = a.icon
          , f = a.iconAria
          , n = a.iconBadge
          , o = a.iconBadgeAria
          , p = a.shape;
        p = p === void 0 ? "circle" : p;
        a = a.size;
        return h.jsxs("div", {
            className: (g || (g = b("stylex")))(p === "circle" && i.circle, p === "roundedRect" && i.roundedRect, i.skittle, j[c], k[a]),
            children: [h.jsx(b("TetraIcon.react"), babelHelpers["extends"]({}, f, {
                color: d ? "disabled" : m(c),
                icon: e,
                size: l[a]
            })), n && h.jsx("div", {
                className: (g || (g = b("stylex")))(i.iconBadge),
                style: b("profilePhotoUtils").getBadgePosition(a / 2),
                children: h.jsx(b("TetraIcon.react"), babelHelpers["extends"]({}, o, {
                    color: "white",
                    icon: n,
                    size: 8
                }))
            })]
        })
    }
}
), null);
__d("CometHero.react", ["CometHeroInteractionContext", "CometHeroInteractionIDContext", "React", "useLayoutEffect_SAFE_FOR_SSR"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a) {
        var c = a.description
          , d = g.useContext(b("CometHeroInteractionContext").Context)
          , e = g.useContext(b("CometHeroInteractionIDContext"));
        b("useLayoutEffect_SAFE_FOR_SSR")(function() {
            e != null && d.logCometHero(e, c, d.pageletStack)
        }, [c, d, e]);
        return null
    }
    c = g.memo(a);
    e.exports = c
}
), null);
