if (self.CavalryLogger) {
    CavalryLogger.start_js(["hvg3N"]);
}

__d("useCometReportBug", ["fbt", "CometCardedDialogLoadingState.react", "JSResourceForInteraction", "React", "useCometLazyDialog"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React")
      , i = b("JSResourceForInteraction")("CometBugReportingDialog.react").__setRef("useCometReportBug")
      , j = !1;
    function a() {
        var a = b("useCometLazyDialog")(i, function(a) {
            return h.jsx(b("CometCardedDialogLoadingState.react"), {
                onClose: a,
                title: g._("\u0110\u00f3ng g\u00f3p \u00fd ki\u1ebfn cho Facebook"),
                withCloseButton: !0
            })
        })
          , c = a[0];
        a = a[1];
        var d = h.useCallback(function(a, b) {
            a === void 0 && (a = {}),
            j || (c(a, function() {
                b != null && b(),
                j = !1
            }),
            j = !0)
        }, [c]);
        return [d, a]
    }
}
), null);
__d("CometFocusGroupContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext({
        FocusContainer: null,
        FocusItem: null
    });
    e.exports = c
}
), null);
__d("useCometAlertDialog", ["CometCardedDialogLoadingState.react", "React", "requireDeferred", "useCometDeferredDialog"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React")
      , h = b("requireDeferred")("CometAlertDialogImpl.react");
    function a() {
        var a = g.useCallback(function() {
            return g.jsx(b("CometCardedDialogLoadingState.react"), {})
        }, []);
        a = b("useCometDeferredDialog")(h, a);
        var c = a[0];
        a = a[1];
        var d = g.useCallback(function(a, b) {
            b === void 0 && (b = function() {}
            ),
            c(a, b)
        }, [c]);
        return [d, a]
    }
}
), null);
__d("CometUnavailableFeature.react", ["fbt", "CometTooltip.react", "React", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a(a) {
        a = a.children;
        return h.jsx("div", {
            className: "du4w35lb l9j0dhe7 rj84mg9z iyyx5f41 dhp61c6y dp1hu0rb owwhemhu qowsmv63 cebpdrjk bipmatt0 pk4s997a q3lfd5jv k5wvi7nf t1p8iaqh a8s20v7p abs2jz4q a6sixzi8 tojvnm2t",
            children: h.jsxs(b("CometTooltip.react"), {
                position: "above",
                tooltip: g._("Ch\u01b0a t\u1ea3i \u0111\u01b0\u1ee3c"),
                children: [h.jsx("div", {
                    className: "tkr6xdv7 kr520xx4 j9ispegn pmk7jnqg n7fi1qx3 i09qtzwb"
                }), h.jsx("div", {
                    className: "du4w35lb hzruof5a iyyx5f41 dhp61c6y dp1hu0rb owwhemhu qowsmv63 cebpdrjk bipmatt0 pk4s997a q3lfd5jv k5wvi7nf t1p8iaqh a8s20v7p abs2jz4q a6sixzi8 tojvnm2t",
                    children: a
                })]
            })
        })
    }
}
), null);
__d("CometFeatureKillswitch.react", ["CometUnavailableFeature.react", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.children
          , d = a.enableFeature;
        a = a.fallback;
        return d ? c : g.jsx(b("CometUnavailableFeature.react"), {
            children: a
        })
    }
}
), null);
__d("CometProgressSkittleIndeterminate.react", ["CometProgressRingIndeterminate.react", "React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a() {
        return g.jsx("div", {
            className: "spb7xbtv bkmhp75w emlxlaya s45kfl79 l9j0dhe7 taijpn5t pq6dq46d rq0escxv sk4xxmp2 agehan2d n8ej3o3l rt8b4zig bp9cbjyn tdjehn4e thwo4zme tv7at329",
            children: g.jsx(b("CometProgressRingIndeterminate.react"), {
                color: "disabled",
                size: 20
            })
        })
    }
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
__d("getTetraListCellAddOn.react", ["ix", "fbt", "CometToggle.react", "Locale", "React", "TetraButton.react", "TetraIcon.react", "fbicon"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React")
      , j = b("Locale").isRTL()
      , k = function(a, c) {
        var d = a.on
          , e = a.onPress
          , f = a.testOnly_pressed;
        a.type;
        var h = babelHelpers.objectWithoutPropertiesLoose(a, ["on", "onPress", "testOnly_pressed", "type"]);
        return i.jsx(b("TetraIcon.react"), babelHelpers["extends"]({}, h, {
            "aria-checked": e != null ? d : void 0,
            color: c ? "disabled" : d ? "highlight" : "secondary",
            disabled: c,
            hideHoverOverlay: !0,
            icon: a.on ? b("fbicon")._(g("484757"), 20) : b("fbicon")._(g("659288"), 20),
            onPress: e,
            role: e != null ? "checkbox" : void 0,
            testOnly_pressed: f
        }))
    }
      , l = function(a, c) {
        var d = a.on
          , e = a.onPress
          , f = a.testOnly_pressed;
        a.type;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["on", "onPress", "testOnly_pressed", "type"]);
        return i.jsx(b("TetraIcon.react"), babelHelpers["extends"]({}, a, {
            "aria-checked": e != null ? d : void 0,
            color: c ? "disabled" : d ? "highlight" : "secondary",
            disabled: c,
            hideHoverOverlay: !0,
            icon: d ? b("fbicon")._(g("621399"), 20) : b("fbicon")._(g("545517"), 20),
            onPress: e,
            role: e != null ? "radio" : void 0,
            testOnly_pressed: f
        }))
    }
      , m = function(a, c, d) {
        a.text;
        a.type;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["text", "type"]);
        d === 3 ? d = j ? b("fbicon")._(g("492521"), 24) : b("fbicon")._(g("492575"), 24) : d = j ? b("fbicon")._(g("492518"), 20) : b("fbicon")._(g("492572"), 20);
        return i.jsx(b("TetraIcon.react"), babelHelpers["extends"]({}, a, {
            color: c ? "disabled" : "secondary",
            disabled: c,
            icon: d
        }))
    }
      , n = function(a, c, d) {
        a.children;
        d = a.onPress;
        var e = a.open;
        a.type;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "onPress", "open", "type"]);
        return i.jsx(b("TetraIcon.react"), babelHelpers["extends"]({}, a, {
            color: c ? "disabled" : "secondary",
            disabled: c,
            icon: e ? b("fbicon")._(g("505565"), 20) : b("fbicon")._(g("492454"), 20),
            onPress: d
        }))
    }
      , o = function(a, c) {
        var d = a.color
          , e = a.icon
          , f = a.onHoverIn
          , g = a.onHoverOut
          , h = a.onPress
          , j = a.onPressIn
          , k = a.testOnly_pressed;
        a.type;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["color", "icon", "onHoverIn", "onHoverOut", "onPress", "onPressIn", "testOnly_pressed", "type"]);
        d = (d = d) != null ? d : "primary";
        return i.jsx(b("TetraIcon.react"), babelHelpers["extends"]({}, a, {
            color: c ? "disabled" : d,
            disabled: c,
            hideHoverOverlay: !0,
            icon: e,
            onHoverIn: f,
            onHoverOut: g,
            onPress: h,
            onPressIn: j,
            testOnly_pressed: k
        }))
    }
      , p = function(a, c) {
        var d = a.labelIsHidden;
        d = d === void 0 ? !1 : d;
        var e = a.type;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["labelIsHidden", "type"]);
        e = e === "primary-button" ? "primary" : "secondary";
        return i.createElement(b("TetraButton.react"), d ? babelHelpers["extends"]({
            disabled: c,
            labelIsHidden: !0,
            type: e
        }, a) : babelHelpers["extends"]({
            disabled: c,
            type: e
        }, a))
    }
      , q = function(a, c) {
        var d = a.onChange
          , e = a.size;
        a.type;
        var f = a.value;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["onChange", "size", "type", "value"]);
        return i.jsx(b("CometToggle.react"), babelHelpers["extends"]({
            disabled: c,
            onClick: d != null ? d : function() {}
            ,
            size: e,
            tabIndex: -1,
            value: f
        }, a, {
            children: a.disabled === !0 ? h._("\u0110\u00e3 t\u1eaft") : h._("\u0110\u00e3 b\u00e2\u0323t")
        }))
    }
      , r = function(a, c) {
        var d = a.onPress
          , e = a.type;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["onPress", "type"]);
        return i.jsx(b("TetraIcon.react"), babelHelpers["extends"]({}, a, {
            color: c ? "disabled" : "secondary",
            disabled: c,
            icon: e === "more" ? b("fbicon")._(g("484391"), 24) : b("fbicon")._(g("478237"), 16),
            onPress: d
        }))
    };
    a = function(a, b, c) {
        switch (a.type) {
        case "checkbox":
            return k(a, b);
        case "radio":
            return l(a, b);
        case "disclosure":
            return m(a, b, c);
        case "expander":
            return n(a, b, c);
        case "icon":
            return o(a, b);
        case "primary-button":
            return p(a, b);
        case "secondary-button":
            return p(a, b);
        case "switch":
            return q(a, b);
        case "more":
            return r(a, b);
        case "close":
            return r(a, b);
        case "body":
            return a.addOn;
        default:
            a.type
        }
    }
    ;
    f.getSecondaryAddOn = a
}
), null);
__d("TetraListCell.react", ["CometDensityAwarenessContext", "CometDensityModeContext", "CometFocusGroupContext", "CometFocusTableContext", "CometPressable.react", "CometProgressSkittleIndeterminate.react", "CometVisualCompletionAttributes", "MWJewelThreadFacepile.react", "React", "TetraIcon.react", "TetraishSkittleEmoji.react", "TetraishSkittleIcon.react", "TetraProfilePhoto.react", "TetraProfilePhotoForActor.react", "TetraText.react", "TetraTextPairing.react", "getTetraListCellAddOn.react", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React"), i = {
        addOn: {
            alignItems: "bp9cbjyn",
            display: "j83agx80",
            flexDirection: "btwxx1t3"
        },
        addOnWithExpander: {
            marginEnd: "oi9244e8"
        },
        addOnWithIcon: {
            display: "j83agx80"
        },
        addOnWithText: {
            marginStart: "kkf49tns"
        },
        bottomAddOn: {
            display: "j83agx80",
            flexDirection: "cbu4d94t",
            marginEnd: "a9txdygg",
            marginStart: "fnu23jab"
        },
        bottomAddOnInner: {
            maxWidth: "d2edcug0"
        },
        bottomAddOnOverride_threadLabel: {
            flexDirection: "btwxx1t3",
            marginEnd: "cxmmr5t8",
            marginStart: "hcukyx3x",
            paddingTop: "ipjc6fyt"
        },
        bottomAddOnWithFacepile: {
            marginStart: "ocgrx2df"
        },
        bottomDivider: {
            backgroundColor: "pwoa4pd7",
            bottom: "i09qtzwb",
            end: "n7fi1qx3",
            height: "ay7djpcl",
            position: "pmk7jnqg",
            start: "j9ispegn"
        },
        content: {
            alignItems: "gs1a9yip",
            borderStyle: "ow4ym5g4",
            borderWidth: "auili1gw",
            boxSizing: "rq0escxv",
            display: "j83agx80",
            flexDirection: "cbu4d94t",
            flexGrow: "buofh1pr",
            flexShrink: "g5gj957u",
            justifyContent: "i1fnvgqd",
            marginBottom: "oygrvhab",
            marginEnd: "cxmmr5t8",
            marginStart: "hcukyx3x",
            marginTop: "kvgmc6g5",
            minHeight: "tgvbjcpo",
            minWidth: "hpfvmrgz",
            paddingEnd: "rz4wbd8a",
            paddingStart: "a8nywdso",
            position: "l9j0dhe7",
            zIndex: "du4w35lb",
            flexBasis: "rj1gh0hx",
            paddingTop: "pybr56ya",
            paddingBottom: "f10w8fjw"
        },
        contentContainer: {
            borderStyle: "ow4ym5g4",
            borderWidth: "auili1gw",
            boxSizing: "rq0escxv",
            display: "j83agx80",
            flexGrow: "buofh1pr",
            flexShrink: "g5gj957u",
            justifyContent: "i1fnvgqd",
            marginBottom: "oygrvhab",
            marginEnd: "cxmmr5t8",
            marginStart: "hcukyx3x",
            marginTop: "kvgmc6g5",
            minHeight: "tgvbjcpo",
            minWidth: "hpfvmrgz",
            paddingBottom: "qt6c0cv9",
            paddingEnd: "rz4wbd8a",
            paddingStart: "a8nywdso",
            paddingTop: "jb3vyjys",
            zIndex: "du4w35lb",
            alignItems: "bp9cbjyn",
            flexDirection: "btwxx1t3",
            position: "l9j0dhe7"
        },
        contentDense: {
            paddingTop: "cxgpxx05",
            paddingBottom: "sj5x9vvc"
        },
        contentWithMoreSpacing: {
            paddingTop: "discj3wi",
            paddingBottom: "ihqw7lf3"
        },
        contentWithMoreSpacingDense: {
            paddingTop: "pybr56ya",
            paddingBottom: "f10w8fjw"
        },
        disabled: {
            cursor: "rj84mg9z",
            pointerEvents: "hzruof5a"
        },
        listCellMinHeight: {
            minHeight: "nnctdnn4"
        },
        pressable: {
            borderTopStartRadius: "ue3kfks5",
            borderTopEndRadius: "pw54ja7n",
            borderBottomEndRadius: "uo3d90p7",
            borderBottomStartRadius: "l82x9zwi",
            display: "a8c37x1j"
        },
        primaryAddOn: {
            alignSelf: "nqmvxvec",
            display: "j83agx80",
            flexDirection: "cbu4d94t",
            marginEnd: "tvfksri0",
            marginTop: "aov4n071",
            marginBottom: "bi6gxh9e",
            position: "l9j0dhe7"
        },
        primaryAddOnDense: {
            marginTop: "qjjbsfad",
            marginBottom: "w0hvl6rk"
        },
        primaryAddOnDensityAware: {
            "@media (max-height: 700px)": {
                marginEnd: "m6uieof3",
                marginStart: "icc0peqn",
                marginTop: "hx8drtub",
                marginBottom: "j13r6fgp",
                transform: "nddp3pr2"
            }
        },
        responsiveButtons: {
            flexGrow: "buofh1pr",
            paddingBottom: "iuny7tx3",
            paddingTop: "ipjc6fyt"
        },
        responsiveContent: {
            alignItems: "bp9cbjyn",
            flexDirection: "btwxx1t3",
            flexWrap: "lhclo0ds",
            marginBottom: "mysgfdmx",
            marginTop: "hddg9phg"
        },
        responsiveText: {
            boxSizing: "rq0escxv",
            flexBasis: "hkbzh7o3",
            flexGrow: "buofh1pr",
            flexShrink: "g5gj957u",
            maxWidth: "d2edcug0",
            minWidth: "ptc67a42",
            paddingBottom: "iuny7tx3",
            paddingEnd: "hv4rvrfc",
            paddingTop: "ipjc6fyt"
        },
        root: {
            borderStyle: "ow4ym5g4",
            borderWidth: "auili1gw",
            boxSizing: "rq0escxv",
            display: "j83agx80",
            flexGrow: "buofh1pr",
            flexShrink: "g5gj957u",
            justifyContent: "i1fnvgqd",
            marginBottom: "oygrvhab",
            marginEnd: "cxmmr5t8",
            marginStart: "hcukyx3x",
            marginTop: "kvgmc6g5",
            minHeight: "tgvbjcpo",
            minWidth: "hpfvmrgz",
            paddingBottom: "qt6c0cv9",
            paddingTop: "jb3vyjys",
            position: "l9j0dhe7",
            zIndex: "du4w35lb",
            alignItems: "bp9cbjyn",
            flexDirection: "btwxx1t3",
            paddingEnd: "dflh9lhu",
            paddingStart: "scb9dxdr"
        },
        rootWithIncreasedHeight: {
            minHeight: "e170dy2k"
        },
        secondaryAddOn: {
            marginBottom: "n851cfcs",
            marginStart: "ozuftl9m",
            marginTop: "n1l5q3vz",
            position: "l9j0dhe7"
        },
        secondaryAddOnCenter: {
            marginBottom: "bi6gxh9e",
            marginTop: "aov4n071"
        },
        secondaryAddOnSmall: {
            marginBottom: "bi6gxh9e",
            marginStart: "ozuftl9m",
            marginTop: "aov4n071",
            position: "l9j0dhe7"
        },
        selected: {
            backgroundColor: "i224opu6"
        },
        textRight: {
            flexShrink: "pfnyh3mw"
        }
    }, j = {
        center: {
            alignSelf: "o8rfisnq"
        },
        start: {
            alignSelf: "nqmvxvec"
        }
    }, k = {
        center: {
            alignSelf: "o8rfisnq"
        },
        start: {
            alignSelf: "nqmvxvec"
        }
    };
    function a(a, c) {
        var d = a.addOnBottom
          , e = a.addOnPrimary
          , f = a.addOnPrimaryCssSelectionId
          , o = a.addOnPrimaryOverrideVerticalStyle
          , p = a.addOnPrimaryTestId;
        p = a.addOnPrimaryVerticalAlign;
        p = p === void 0 ? "start" : p;
        var q = a.addOnSecondary
          , r = a.addOnSecondaryRef
          , s = a.addOnSecondaryTestId;
        s = a.addOnSecondaryVerticalAlign;
        s = s === void 0 ? "start" : s;
        var t = a.body
          , u = a.bodyColor;
        u = u === void 0 ? "secondary" : u;
        var v = a.bodyLineLimit
          , w = a.contentHorizontalPadding
          , x = a.dataAttributes
          , y = a.disabled;
        y = y === void 0 ? !1 : y;
        var z = a.emphasized;
        z = z === void 0 ? !1 : z;
        var A = a.focusable
          , B = a.hasBottomDivider
          , C = a.headline
          , D = a.headlineAddOn
          , E = a.headlineColor;
        E = E === void 0 ? "primary" : E;
        var F = a.headlineLineLimit
          , G = a.level;
        G = G === void 0 ? 3 : G;
        var H = a.linkProps
          , I = a.meta
          , J = a.metaColor;
        J = J === void 0 ? "tertiary" : J;
        var K = a.metaLineLimit
          , L = a.metaLocation
          , M = a.onFocusChange
          , N = a.onHoverIn
          , O = a.onHoverOut
          , P = a.onPress
          , aa = a.onPressIn
          , ba = a.onPressOut
          , Q = a.paddingHorizontal
          , R = a.role
          , S = a.selected;
        S = S === void 0 ? !1 : S;
        var T = a.size;
        T = T === void 0 ? "default" : T;
        var U = a.testid;
        U = a.testOnly_pressed;
        a = h.useContext(b("CometDensityModeContext"));
        a = a[0];
        var V = h.useContext(b("CometDensityAwarenessContext"))
          , W = C != null && t == null && I == null
          , X = C == null && t != null && I == null
          , Y = C == null && t == null && I != null
          , Z = W && F != null && F === 1 || X && v != null && v === 1 || Y && K != null && K === 1;
        W = W && F != null && F > 1 || X && v != null && v > 1 || Y && K != null && K > 1;
        X = q != null && (q.type === "primary-button" || q.type === "secondary-button" || q.type === "body");
        Y = q != null && q.type === "expander";
        s = X || Y ? "center" : s;
        p = Z ? "center" : p;
        var $ = d != null && d.type === "buttons";
        W = e == null && (W || Z && (X || Y));
        Z = x != null ? Object.keys(x).reduce(function(a, b) {
            a != null && b != null && (a["data-" + b] = x[b]);
            return a
        }, {}) : null;
        o = h.jsxs("div", {
            className: (g || (g = b("stylex")))(i.root, Y && T !== "small" ? i.rootWithIncreasedHeight : null, T !== "small" ? i.listCellMinHeight : null),
            style: w == null ? void 0 : {
                paddingLeft: w,
                paddingRight: w
            },
            children: [e != null ? h.jsx("div", {
                className: (g || (g = b("stylex")))(i.primaryAddOn, o, j[p], a && i.primaryAddOnDense, V === !0 && i.primaryAddOnDensityAware),
                "data-testid": void 0,
                id: f,
                children: h.jsx(l, {
                    addOnPrimary: e,
                    disabled: y
                })
            }) : null, h.jsxs("div", {
                className: g(i.contentContainer),
                children: [h.jsxs("div", {
                    className: g(i.content, a ? i.contentDense : null, W ? i.contentWithMoreSpacing : null, W && a ? i.contentWithMoreSpacingDense : null, $ ? i.responsiveContent : null),
                    children: [h.jsx("div", {
                        className: g($ && i.responsiveText),
                        children: h.jsx(b("TetraTextPairing.react"), {
                            body: t,
                            bodyColor: y ? "disabled" : u,
                            bodyLineLimit: v,
                            headline: C,
                            headlineAddOn: D,
                            headlineColor: y ? "disabled" : E,
                            headlineLineLimit: F,
                            level: G,
                            meta: I,
                            metaColor: y ? "disabled" : J,
                            metaLineLimit: K,
                            metaLocation: L,
                            reduceEmphasis: z === !1
                        })
                    }), d != null && h.jsx("div", {
                        className: (g || (g = b("stylex")))(i.bottomAddOn, d.type === "facepile" ? i.bottomAddOnWithFacepile : null, d.type === "designOverride_InboxThreadLabel_bottomAddOn" ? i.bottomAddOnOverride_threadLabel : null, $ ? i.responsiveButtons : null),
                        children: h.jsx("div", {
                            className: (g || (g = b("stylex")))(i.bottomAddOnInner),
                            children: h.jsx(m, {
                                addOnBottom: d
                            })
                        })
                    })]
                }), q != null ? h.jsx("div", {
                    className: (g || (g = b("stylex")))(T !== "small" && i.secondaryAddOn, T === "small" && i.secondaryAddOnSmall, (X || Y) && i.secondaryAddOnCenter, k[s]),
                    "data-testid": void 0,
                    ref: r,
                    children: h.jsx(n, {
                        addOn: q,
                        disabled: y,
                        level: G
                    })
                }) : null, ((w = B) != null ? w : !1) ? h.jsx("div", {
                    className: (g || (g = b("stylex")))(i.bottomDivider)
                }) : null]
            })]
        });
        p = q != null && q.type === "expander" && q.open === !0 && q.children != null ? q.children : null;
        V = void 0;
        f = void 0;
        if (q != null)
            switch (q.type) {
            case "checkbox":
                f = q.on;
                V = "checkbox";
                break;
            case "radio":
                f = q.on;
                V = "radio";
                break;
            case "switch":
                f = q.value;
                V = "switch";
                break
            }
        e = h.useContext(b("CometFocusGroupContext"));
        W = e.FocusItem;
        a = h.useContext(b("CometFocusTableContext"));
        t = a.FocusCell;
        u = a.FocusRow;
        C = R === "row" && u ? u : (v = W) != null ? v : h.Fragment;
        E = (D = t) != null ? D : h.Fragment;
        return h.jsxs(C, {
            children: [h.jsx("div", babelHelpers["extends"]({}, b("CometVisualCompletionAttributes").IGNORE_DYNAMIC, {
                role: R,
                style: {
                    paddingLeft: (F = Q) != null ? F : 8,
                    paddingRight: (I = Q) != null ? I : 8
                }
            }, Z, {
                children: h.jsx(E, {
                    children: P != null || H != null ? h.jsx(b("CometPressable.react"), {
                        "aria-checked": f,
                        "aria-pressed": S ? !0 : void 0,
                        disabled: y,
                        display: "block",
                        focusable: A,
                        linkProps: H,
                        onFocusChange: M,
                        onHoverIn: N,
                        onHoverOut: O,
                        onPress: P,
                        onPressIn: aa,
                        onPressOut: ba,
                        overlayDisabled: S,
                        ref: c,
                        role: V,
                        testOnly_pressed: U,
                        testid: void 0,
                        xstyle: [i.pressable, S && i.selected, y && i.disabled],
                        children: o
                    }) : h.jsx("div", {
                        className: (g || (g = b("stylex")))(i.pressable, S ? i.selected : null, y ? i.disabled : null),
                        "data-testid": void 0,
                        ref: c,
                        children: o
                    })
                })
            })), p]
        })
    }
    function l(a) {
        var c = a.addOnPrimary;
        a = a.disabled;
        switch (c.type) {
        case "icon":
            c.type;
            var d = babelHelpers.objectWithoutPropertiesLoose(c, ["type"]);
            return h.jsx(b("TetraIcon.react"), babelHelpers["extends"]({}, d, {
                disabled: a
            }));
        case "profile-photo":
            c.type;
            d = babelHelpers.objectWithoutPropertiesLoose(c, ["type"]);
            return h.jsx(b("TetraProfilePhoto.react"), babelHelpers["extends"]({}, d));
        case "profile-photo-for-actor":
            c.type;
            d = babelHelpers.objectWithoutPropertiesLoose(c, ["type"]);
            return h.jsx(b("TetraProfilePhotoForActor.react"), babelHelpers["extends"]({}, d));
        case "contained-icon":
            d = c.color;
            d = d === void 0 ? "gray" : d;
            c.type;
            var e = babelHelpers.objectWithoutPropertiesLoose(c, ["color", "type"]);
            return h.jsx(b("TetraishSkittleIcon.react"), babelHelpers["extends"]({
                color: d
            }, e, {
                disabled: a
            }));
        case "contained-progress-ring-indeterminate":
            return h.jsx(b("CometProgressSkittleIndeterminate.react"), {});
        case "messenger-facepile":
            c.type;
            d = babelHelpers.objectWithoutPropertiesLoose(c, ["type"]);
            return h.jsx(b("MWJewelThreadFacepile.react"), babelHelpers["extends"]({}, d));
        case "group_member_profile_primary_addon":
            return c.component;
        case "save_collection_initial":
            return c.component;
        case "emoji":
            e = c.color;
            a = e === void 0 ? "gray" : e;
            d = c.emoji;
            e = c.emojiSize;
            e = e === void 0 ? 20 : e;
            var f = c.size;
            f = f === void 0 ? 40 : f;
            return h.jsx(b("TetraishSkittleEmoji.react"), {
                color: a,
                emoji: d,
                emojiSize: e,
                size: f
            });
        default:
            c.type;
            return null
        }
    }
    var m = function(a) {
        a = a.addOnBottom;
        switch (a.type) {
        case "buttons":
            return a.component;
        case "facepile":
            return a.facepile;
        case "designOverride_Notifications_bottomAddOn":
            return a.override_component;
        case "designOverride_InboxThreadLabel_bottomAddOn":
            return a.label_component;
        case "designOverride_PageCompletionMeterActions_bottomAddOn":
            return a.actions_component;
        default:
            a.type;
            return null
        }
    }
      , n = function(a) {
        var c = a.addOn
          , d = a.disabled;
        a = a.level;
        var e = b("getTetraListCellAddOn.react").getSecondaryAddOn(c, d, a)
          , f = c.type === "disclosure" && c.text != null ? c.text : null;
        return h.jsxs("div", {
            className: (g || (g = b("stylex")))(i.addOn),
            children: [f != null && h.jsx("div", {
                className: (g || (g = b("stylex")))(i.textRight),
                children: h.jsx(b("TetraText.react"), {
                    color: d ? "disabled" : "secondary",
                    numberOfLines: 1,
                    type: a === 3 ? "body2" : "body3",
                    children: f
                })
            }), h.jsx("div", {
                "aria-label": c.type === "icon" ? c["aria-label"] : void 0,
                className: g(c.type === "expander" ? i.addOnWithExpander : null, f != null ? i.addOnWithText : null, c.type === "icon" ? i.addOnWithIcon : null),
                role: c.type === "icon" && c["aria-label"] != null ? "img" : void 0,
                children: e
            })]
        })
    };
    c = h.forwardRef(a);
    e.exports = c
}
), null);
__d("TetraAccessoryListCell.react", ["React", "TetraListCell.react"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a, c) {
        return g.jsx(b("TetraListCell.react"), babelHelpers["extends"]({}, a, {
            ref: c
        }))
    }
    c = g.forwardRef(a);
    e.exports = c
}
), null);
__d("getComposerUnsavedChangesAlert", ["fbt"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    function a(a) {
        if (Boolean(a))
            return {
                primaryButtonLabel: g._("R\u1eddi kh\u1ecfi"),
                secondaryButtonLabel: g._("Ti\u1ebfp t\u1ee5c ch\u1ec9nh s\u1eeda"),
                title: g._("R\u1eddi kh\u1ecfi trang?"),
                warnMessage: g._("B\u1ea1n ch\u01b0a chia s\u1ebb b\u00e0i vi\u1ebft. B\u1ea1n c\u00f3 ch\u1eafc ch\u1eafn mu\u1ed1n r\u1eddi kh\u1ecfi khi ch\u01b0a \u0111\u0103ng kh\u00f4ng?")
            }
    }
}
), null);
__d("CometPrivacySelectorHelpers", ["fbt", "recoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.getTagExpandedLabel = a;
    f.hasTagExpansion = c;
    f.getSavedCustomTypeSelectedHeading = d;
    function a(a) {
        return a == null ? null : g._("{privacyLabel} (+)", [g._param("privacyLabel", a)])
    }
    function c(a, b) {
        return a === !0 && b !== "NONE"
    }
    function d(a) {
        if (a === "SPECIFIC_FRIENDS")
            return g._("Nh\u1eefng b\u1ea1n s\u1ebd nh\u00ecn th\u1ea5y b\u00e0i vi\u1ebft");
        else if (a === "FRIENDS_EXCEPT")
            return g._("Nh\u1eefng b\u1ea1n kh\u00f4ng nh\u00ecn th\u1ea5y b\u00e0i vi\u1ebft");
        else {
            b("recoverableViolation")("Unsupported saved custom type: " + ((a = a) != null ? a : "null"), "comet_privacy_selector");
            return g._("\u0110\u00e3 ch\u1ecdn")
        }
    }
}
), null);
__d("useCodedErrorDialog", ["SilenceableErrorMessageUtils", "useCometAlertDialog"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function g(a) {
        a = a;
        return a.code != null && a.description != null && a.summary != null ? a : null
    }
    function a(a) {
        var c = b("useCometAlertDialog")()
          , d = c[0];
        c = c[1];
        function e(c) {
            var e = b("SilenceableErrorMessageUtils").getMetadataFromError(c);
            if (b("SilenceableErrorMessageUtils").shouldHideErrorMessage(e))
                return;
            e = g(c);
            e ? d({
                body: e.description,
                title: e.summary
            }) : d({
                body: c.message,
                title: a
            })
        }
        return [e, c]
    }
}
), null);
__d("ColorUtils", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.hexARGBToCSSRGBA = a;
    f.hexRGBAToCSSRGBA = b;
    var g = new RegExp("^[#]{0,1}([\\w]{1,2})?([\\w]{1,2})([\\w]{1,2})([\\w]{1,2})$")
      , h = function(a, b) {
        if (a == null)
            return null;
        a = a.match(g);
        if (a == null)
            return null;
        a = a.slice(1).map(function(a) {
            return parseInt(a.length == 1 ? a + a : a, 16)
        });
        if (a.length == 4) {
            b === "ARGB" && a.push(a.shift());
            return "rgba(" + a[0] + "," + a[1] + "," + a[2] + "," + a[3] / 100 + ")"
        }
        return "rgb(" + a[0] + "," + a[1] + "," + a[2] + ")"
    };
    function a(a) {
        return h(a, "ARGB")
    }
    function b(a) {
        return h(a, "RGBA")
    }
}
), null);
__d("PrivacyMutationSourceIDContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = null;
    d = a.createContext(c);
    e.exports = d
}
), null);
__d("PrivacyMutationToken", ["Base64", "PrivacyMutationSourceIDContext", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    f.usePrivacyMutationToken = a;
    f.getPrivacyMutationTokenFromSourceID = h;
    var g = b("React");
    function a() {
        var a = g.useContext(b("PrivacyMutationSourceIDContext"));
        return g.useMemo(function() {
            return h(a)
        }, [a])
    }
    function h(a) {
        return a == null ? null : b("Base64").encode(JSON.stringify({
            callsite_id: a,
            creation_time: Date.now(),
            type: 0
        }))
    }
}
), null);
__d("XCometStoriesCreateControllerRouteBuilder", ["jsRouteBuilder"], (function(a, b, c, d, e, f) {
    a = b("jsRouteBuilder")("/stories/create/", Object.freeze({}), void 0);
    c = a;
    e.exports = c
}
), null);
__d("useCometHomeChatSettingsQuery$Parameters", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        kind: "PreloadableConcreteRequest",
        params: {
            id: "2630118660439463",
            metadata: {
                relayPreloadable: !0
            },
            name: "useCometHomeChatSettingsQuery",
            operationKind: "query",
            text: null
        }
    };
    e.exports = a
}
), null);
__d("useStoriesIsBucketEmpty_buckets.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: {
            plural: !0
        },
        name: "useStoriesIsBucketEmpty_buckets",
        selections: [{
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        }, {
            alias: null,
            args: null,
            concreteType: "UnifiedStoryBucketToUnifiedStoriesConnection",
            kind: "LinkedField",
            name: "unified_stories",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                concreteType: "UnifiedStoryBucketToUnifiedStoriesEdge",
                kind: "LinkedField",
                name: "edges",
                plural: !0,
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "Story",
                    kind: "LinkedField",
                    name: "node",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "expiration_time",
                        storageKey: null
                    }],
                    storageKey: null
                }],
                storageKey: null
            }],
            storageKey: null
        }],
        type: "StoryBucket",
        abstractKey: "__isStoryBucket"
    };
    e.exports = a
}
), null);
__d("CometIconLogoFlat.react", ["React", "requireCond", "cr:1242743"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        a.color;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["color"]);
        return g.jsx(b("cr:1242743"), babelHelpers["extends"]({}, a, {
            color: "active-tab"
        }))
    }
}
), null);
__d("CometHomeChatSettings.entrypoint", ["JSResourceForInteraction", "useCometHomeChatSettingsQuery$Parameters"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        getPreloadProps: function(a) {
            return {
                queries: {
                    chatSettingsQueryReference: {
                        parameters: b("useCometHomeChatSettingsQuery$Parameters"),
                        variables: {}
                    }
                }
            }
        },
        root: b("JSResourceForInteraction")("CometHomeChatSettings.react").__setRef("CometHomeChatSettings.entrypoint")
    };
    e.exports = a
}
), null);
__d("RoomCollapsedTilePlaceholder.react", ["BaseGlimmer.react", "React", "stylex", "useVisibilityObserver"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        a = a.onVisible;
        a = b("useVisibilityObserver")({
            onVisible: a,
            options: {
                rootMargin: 200
            }
        });
        return g.jsx("div", {
            className: "scb9dxdr qt6c0cv9 dflh9lhu jb3vyjys",
            ref: a,
            children: g.jsx(b("BaseGlimmer.react"), {
                className: "q676j6op f9o22wc5 myj7ivm5 ad2k81qe km676qkl qypqp5cg spb7xbtv bkmhp75w emlxlaya s45kfl79",
                index: 0
            })
        })
    }
}
), null);
__d("RoomsCollapsedTrayHeader.react", ["ix", "fbt", "CometRow.react", "CometRowItem.react", "IconSource", "React", "RoomsGating", "TetraIcon.react", "TetraText.react", "asset", "gkx", "stylex"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i = b("React")
      , j = b("gkx")("708253")
      , k = {
        addOn: {
            paddingEnd: "dflh9lhu"
        }
    };
    function a(a) {
        a = a.addOn;
        var c = new (b("IconSource"))("FB",g("1384648"),24)
          , d = h._("Ph\u00f2ng h\u1ecdp m\u1eb7t")
          , e = j && !b("RoomsGating").shouldShowCameraSproutEntryPoint();
        return i.jsxs(b("CometRow.react"), {
            align: "start",
            paddingHorizontal: j && b("RoomsGating").shouldShowCameraSproutEntryPoint() ? 12 : 16,
            paddingTop: e ? 12 : 16,
            paddingVertical: j && b("RoomsGating").shouldShowCameraSproutEntryPoint() ? 4 : 0,
            spacing: j ? 8 : 0,
            verticalAlign: "center",
            children: [i.jsx(b("CometRowItem.react"), {
                children: e && i.jsx(b("TetraIcon.react"), {
                    icon: c
                })
            }), i.jsx(b("CometRowItem.react"), {
                expanding: !1,
                children: j ? i.jsx(b("TetraText.react"), {
                    isSemanticHeading: !0,
                    type: "headlineEmphasized4",
                    children: d
                }) : i.jsx(b("TetraText.react"), {
                    isSemanticHeading: !0,
                    type: "meta2",
                    children: d
                })
            }), i.jsx(b("CometRowItem.react"), {
                expanding: !0,
                xstyle: b("RoomsGating").shouldShowCameraSproutEntryPoint() && k.addOn,
                children: a
            })]
        })
    }
}
), null);
__d("VideoChatTrayTilePlaceholder.react", ["BaseGlimmer.react", "CometCard.react", "CometColumn.react", "CometColumnItem.react", "CometRow.react", "CometRowItem.react", "React", "stylex", "useVisibilityObserver"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        a = a.onVisible;
        a = b("useVisibilityObserver")({
            onVisible: a,
            options: {
                rootMargin: 200
            }
        });
        return g.jsx("div", {
            className: "k4urcfbm datstx6m pfnyh3mw buofh1pr j83agx80 rq0escxv gs1a9yip",
            ref: a,
            children: g.jsx(b("CometCard.react"), {
                border: "solid",
                children: g.jsxs(b("CometColumn.react"), {
                    children: [g.jsx(b("CometColumnItem.react"), {
                        children: g.jsx(b("CometRow.react"), {
                            align: "center",
                            paddingTop: 12,
                            children: g.jsx(b("CometRowItem.react"), {
                                children: g.jsx(b("BaseGlimmer.react"), {
                                    className: "ljni7pan f9o22wc5 myj7ivm5 ad2k81qe km676qkl cb02d2ww spb7xbtv bkmhp75w emlxlaya s45kfl79",
                                    index: 0
                                })
                            })
                        })
                    }), g.jsx(b("CometColumnItem.react"), {
                        children: g.jsx(b("CometRow.react"), {
                            align: "center",
                            paddingVertical: 12,
                            children: g.jsx(b("CometRowItem.react"), {
                                children: g.jsxs("div", {
                                    className: "r54jmrld cbu4d94t j83agx80 bp9cbjyn",
                                    children: [g.jsx(b("BaseGlimmer.react"), {
                                        className: "la0tivve km676qkl oud54xpy cyypbtt7 mwvzfrdb kxcb68kb kgjeooe1 dwerhba3",
                                        index: 0
                                    }), g.jsx(b("BaseGlimmer.react"), {
                                        className: "f8ljpb73 hcukyx3x myj7ivm5 cxmmr5t8 km676qkl cyypbtt7 mwvzfrdb kxcb68kb kgjeooe1 dwerhba3",
                                        index: 0
                                    })]
                                })
                            })
                        })
                    })]
                })
            })
        })
    }
}
), null);
__d("MWChatOpenNewTab.re", ["MWChatOpenNewTab.bs"], (function(a, b, c, d, e, f) {
    a = function(a) {
        var c = b("MWChatOpenNewTab.bs").useHook(a);
        return function(a) {
            a = c(a == null ? void 0 : a);
            return a
        }
    }
    ;
    f.useHook = a
}
), null);
__d("getMWThreadAddOnPrimary", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, b, c, d, e) {
        if (a.length === 0)
            return null;
        else {
            var f;
            f = a.length === 1 ? {
                alt: (f = b) != null ? f : "",
                shape: "circle",
                size: d,
                source: {
                    uri: (f = a[0]) != null ? f : ""
                },
                type: "profile-photo"
            } : {
                primaryPhoto: {
                    alt: (f = b) != null ? f : "",
                    source: {
                        uri: (f = a[0]) != null ? f : ""
                    }
                },
                secondaryPhoto: {
                    alt: (f = b) != null ? f : "",
                    source: {
                        uri: (b = a[1]) != null ? b : ""
                    }
                },
                size: d,
                type: "messenger-facepile"
            };
            c ? f = babelHelpers["extends"]({}, f, {
                addOn: {
                    type: "availabilityBadge"
                }
            }) : e != null && (f = babelHelpers["extends"]({}, f, {
                addOn: {
                    border: "web-wash",
                    time: e,
                    type: "lastActiveTimeBadge"
                }
            }));
            return f
        }
    }
}
), null);
__d("VideoChatLinksUserActionsTypedLoggerLite", ["generateLiteTypedLogger"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("generateLiteTypedLogger")("logger:VideoChatLinksUserActionsLoggerConfig")
}
), null);
__d("useMWChatNewVideoChat", ["fbt", "CometRelay", "React", "RTWebPreCallContext", "VideoChatLinksUserActionsTypedLoggerLite", "cometPushToast", "promiseDone", "requireDeferred", "uuid"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React")
      , i = b("requireDeferred")("ZenonPreCallHookBuilderHelper");
    function a(a) {
        var c = h.useContext(b("RTWebPreCallContext"))
          , d = b("CometRelay").useRelayEnvironment()
          , e = h.useState(!1)
          , f = e[0]
          , j = e[1];
        e = h.useCallback(function() {
            var e = b("uuid")().toString();
            j(!0);
            b("VideoChatLinksUserActionsTypedLoggerLite").log({
                component: "messenger_inbox_meetup_create_link_button",
                event: "meetup_entry_point_clicked",
                surface: "www_facebook_window"
            });
            i.loadImmediately(function(f) {
                b("promiseDone")(f.createMeetup(c, d, "www_facebook_window", "messenger_inbox_meetup_create_link_button", e), function(d) {
                    d == null ? (j(!1),
                    b("cometPushToast").cometPushErrorToast({
                        message: g._("Kh\u00f4ng t\u1ea1o \u0111\u01b0\u1ee3c \u0111o\u1ea1n Chat video m\u1edbi.")
                    })) : b("promiseDone")(f.joinMeetup(c, d, null, [], !0), function() {
                        j(!1),
                        a != null && a()
                    }, function() {
                        j(!1)
                    })
                }, function() {
                    j(!1),
                    b("cometPushToast").cometPushErrorToast({
                        message: g._("Kh\u00f4ng t\u1ea1o \u0111\u01b0\u1ee3c \u0111o\u1ea1n Chat video m\u1edbi.")
                    })
                })
            })
        }, [a, d, c]);
        return [e, f]
    }
}
), null);
__d("StoriesActorContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = {
        actorID: null
    };
    d = a.createContext(c);
    e.exports = d
}
), null);
__d("StoriesActorProvider.react", ["React", "StoriesActorContext"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.actorID;
        a = a.children;
        var d = g.useMemo(function() {
            return {
                actorID: c
            }
        }, [c]);
        return g.jsx(b("StoriesActorContext").Provider, {
            value: d,
            children: a
        })
    }
}
), null);
__d("StoriesCreateMediaTypeEnum", ["$InternalEnum"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("$InternalEnum")({
        PHOTO: "photo",
        SATP: "satp",
        VIDEO: "video"
    });
    c = a;
    e.exports = c
}
), null);
__d("StoriesCreateMediaUploaderContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = {
        uploader: null
    };
    d = a.createContext(c);
    e.exports = d
}
), null);
__d("useStoriesIsBucketEmpty", ["CometRelay", "React", "useStoriesIsBucketEmpty_buckets.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React"), i = g !== void 0 ? g : g = b("useStoriesIsBucketEmpty_buckets.graphql");
    function a(a) {
        var c = b("CometRelay").useFragment(i, a);
        function d(a, b) {
            if (a == null)
                return !0;
            a = a == null ? void 0 : (a = a.unified_stories) == null ? void 0 : a.edges;
            if (a == null)
                return !0;
            a = a.map(function(a) {
                return a == null ? void 0 : a.node
            });
            if (a != null) {
                a = a.some(function(a) {
                    a = a == null ? void 0 : a.expiration_time;
                    return a == null || a > b
                });
                return !a
            }
            return !0
        }
        return h.useCallback(function(a, b) {
            var e = c == null ? void 0 : c.find(function(b) {
                return (b == null ? void 0 : b.id) === a
            });
            return (b = d(e, (e = b) != null ? e : Date.now() / 1e3)) != null ? b : !0
        }, [c])
    }
}
), null);
__d("useStoriesIsUploading", ["requireCond", "cr:1707300"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c) {
        return b("cr:1707300")(a, c)
    }
}
), null);
__d("StoriesConstants", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        DEFAULT_SUSPENSE_CARD_INDEX: -1
    };
    f.CARD = a;
    b = 2;
    f.NUMBER_OF_BUCKETS_TO_PREFETCH = b;
    c = {
        BANNER_HEIGHT: 42,
        BOTTOM_MARGIN: 25,
        COUNT_PER_PAGINATION_FETCH: 9
    };
    f.NavList = c;
    d = {
        MAX_RATING: 5,
        PADDING_SPACE_PORTION: .04,
        STAR_ICON_SIZE: 32,
        STAR_INLINE_PORTION: .55
    };
    f.RATING_STICKER = d;
    e = {
        NETWORK_ONLY: "network-only",
        STORE_OR_NETWORK: "store-or-network"
    };
    f.RELAY_FETCH_POLICY = e;
    a = {
        INITIAL_ROW_COUNT: 3,
        ITEMS_PER_ROW: 6
    };
    f.TILE_GRID = a;
    b = 9 / 16;
    f.DEFAULT_ASPECT_RATIO = b;
    c = 3e3;
    f.TIMEOUT_FOR_SERVER_TO_FINISH_WORK = c;
    d = 300;
    f.TRANSITION_DURATION_MS = d;
    e = {
        COUNT_PER_PAGINATION_FETCH: 10,
        MAX_REACTIONS_PER_VIEWER: 5
    };
    f.ViewerSheetViewerList = e;
    a = 6;
    f.MAX_TILES_TO_SHOW = a
}
), null);
__d("StoriesEnums", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        BLACK: "black",
        DEFAULT: "default"
    };
    f.BACKGROUND_STYLE = a;
    b = {
        FRIEND_BUCKET: "FRIEND_BUCKET",
        SELF_BUCKET: "SELF_BUCKET",
        UNSELECTED: "UNSELECTED"
    };
    f.EMPTY_BUCKET_TYPES = b;
    c = {
        BL_TR: "BL_TR",
        BOTTOM_TOP: "BOTTOM_TOP",
        BR_TL: "BR_TL",
        LEFT_RIGHT: "LEFT_RIGHT",
        RIGHT_LEFT: "RIGHT_LEFT",
        TL_BR: "TL_BR",
        TOP_BOTTOM: "TOP_BOTTOM",
        TR_BL: "TR_BL"
    };
    f.GRADIENT_DIRECTION = c;
    d = {
        ANGER: "\ud83d\ude21",
        HAHA: "\ud83d\ude06",
        LIKE: "\ud83d\udc4d",
        LOVE: "\u2764\ufe0f",
        SORRY: "\ud83d\ude22",
        SUPPORT: "\ud83e\udd17",
        WOW: "\ud83d\ude2e"
    };
    f.LIGHTWEIGHT_REACTION_UNICODES = d;
    e = {
        NEXT_BUCKET: "next-bucket",
        NEXT_CARD: "next-card",
        PREV_BUCKET: "prev-bucket",
        PREV_CARD: "prev-card",
        STAY_HERE: "stay_here"
    };
    f.NAV_DIRECTIONS = e;
    a = {
        AVAILABLE_WIDTH_RATIO: (240 - 2 * 12) / 240,
        BACKGROUND_COLOR_BLUE: "#79A6FF",
        BACOGROUND_COLOR_SLATE: "#EAEFF2",
        CHILD_PADDING_RATIO: .05,
        DEFAULT_OPTION_WIDTH_RATIO: .5,
        FIVE_OPTION_STAR_RATING: "FIVE_OPTION_STAR_RATING",
        IG_LEFT_TEXT_COLOR: "#13bda6",
        IG_RIGHT_TEXT_COLOR: "#F36B7F",
        IG_TWO_OPTION_COMBINED: "IG_TWO_OPTION_COMBINED",
        MINIMUM_LABEL_WIDTH_RATIO: .31,
        OVERFLOW_CHILD_PADDING_RATIO: 20 / 240,
        TEXT_BIG_HEIGHT_RATIO: 40 / 72,
        TEXT_BIG_MAX_FONT_SIZE_RATIO: 30 / 240,
        TEXT_BIG_MIN_FONT_SIZE_RATIO: 20 / 240,
        TEXT_BIG_RATIO: 40 / 240,
        TEXT_COLOR_GREY: "#5F6673",
        TEXT_ONLY_FONT_SIZE_RATIO: 20 / 240,
        TEXT_SMALL_HEIGHT_RATIO: 25 / 72,
        TEXT_SMALL_MAX_FONT_SIZE_RATIO: 20 / 240,
        TEXT_SMALL_MIN_FONT_SIZE_RATIO: 12 / 240,
        TEXT_SMALL_RATIO: 25 / 240,
        TEXT_WITH_PERCENT_FONT_SIZE_RATIO: 12 / 240,
        TWO_OPTION_COMBINED: "TWO_OPTION_COMBINED",
        VOTE_COUNT_FONT_SIZE_RATIO: 32 / 240,
        VOTE_OPTION_MAX_WIDTH_RATIO: .75
    };
    f.POLL_STICKER = a;
    b = {
        THREE_COLUMN: "THREE_COLUMN",
        TWO_COLUMN: "TWO_COLUMN"
    };
    f.RECTANGULAR_TILE_TYPES = b;
    c = {
        OTHER: "OTHER",
        OWNED_SELF: "OWNED_SELF"
    };
    f.STORIES_BUCKETS_INDEXER_TYPES = c;
    d = {
        DELETE: "DELETE",
        DELETE_STORY_AND_BLOCK_MEMBER: "DELETE_STORY_AND_BLOCK_MEMBER",
        MUTE_CARD_OWNER: "MUTE_CARD_OWNER",
        REPORT_TO_GROUP_ADMINS: "REPORT_TO_GROUP_ADMINS"
    };
    f.STORIES_OPTION_TYPES = d;
    e = {
        ADMINED_ADDITIONAL_PROFILE_STORY: "ADMINED_ADDITIONAL_PROFILE_STORY",
        ARCHIVED_STORY: "ARCHIVED_STORY",
        BIRTHDAY_STORY: "BIRTHDAY_STORY",
        CREW_STORY: "CREW_STORY",
        EVENT_STORY: "EVENT_STORY",
        GOODWILL_GENERATED_STORY: "GOODWILL_GENERATED_STORY",
        GOODWILL_STORY: "GOODWILL_STORY",
        GROUP_STORY: "GROUP_STORY",
        HIGHLIGHTED_STORY: "HIGHLIGHTED_STORY",
        LIVE_STORY: "LIVE_STORY",
        M_GROUP_STORY: "M_GROUP_STORY",
        NULL_STATE_STORY: "NULL_STATE_STORY",
        PAGE_STORY: "PAGE_STORY",
        PROFILE_PLUS_STORY: "PROFILE_PLUS_STORY",
        PROMOTION_STORY: "PROMOTION_STORY",
        SHARED_PAGE_STORY: "SHARED_PAGE_STORY",
        STORY: "STORY",
        TOPIC_STORY: "TOPIC_STORY",
        UNKNOWN: "UNKNOWN",
        WAS_LIVE: "WAS_LIVE"
    };
    f.STORY_CARD_TYPES = e;
    a = {
        PHOTO: "Photo",
        VIDEO: "Video"
    };
    f.STORY_MEDIA_TYPES = a;
    b = {
        EXTERNAL_SONG: "StoryOverlayExternalSong",
        INTERACTIVE_STICKER: "StoryOverlayReactionSticker",
        LINK_STICKER: "StoryOverlayLinkSticker",
        POLL_STICKER: "StoryOverlayPollSticker",
        PRODUCT_STICKER: "StoryOverlayProductSticker",
        RESHARED_CONTENT: "StoryOverlayResharedContent",
        RESHARED_POST: "StoryOverlayResharedPost",
        TAG_STICKER: "StoryOverlayTagSticker"
    };
    f.STORY_OVERLAY_TYPES = b;
    c = {
        ANIMATIONS_INTERVAL_THROTTLE: 300,
        HOLD_DELAY: 1e3
    };
    f.STORY_REACTION_STICKERS_CONSTANTS = c;
    d = {
        LOCATION: "LOCATION",
        PAGE: "PAGE",
        PEOPLE: "PEOPLE",
        PRODUCT: "PRODUCT"
    };
    f.TAG_STICKER_TYPES = d;
    e = {
        DARK_MODE: "dark_mode",
        DARK15: "dark_15",
        DARK30: "dark_30",
        DEFAULT: "default"
    };
    f.VIEWER_THEME = e;
    a = {
        DEFAULT: "default",
        SLIDE_UP: "slide_up"
    };
    f.VIEWERSHEET_ANIMATION = a;
    b = {
        PAGE_TRANSITION: "PAGE_TRANSITION",
        USER: "USER",
        USER_TRANSITION: "USER_TRANSITION"
    };
    f.VIEWERSHEET_STYLE = b;
    c = {
        JUST_VOTED: "JUST_VOTED",
        RESULTS: "RESULTS",
        VOTING: "VOTING"
    };
    f.VOTING_PHASES = c
}
), null);
__d("StoriesLoggerHelper", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.getCameraPostType = a;
    f.getLoggingMediaType = b;
    f.getOwnerType = c;
    function a(a) {
        switch (a) {
        case "PAGE_STORY":
            return "PAGE_STORY";
        case "GROUP_STORY":
            return "GROUP_STORY";
        case "EVENT_STORY":
            return "EVENT_STORY";
        case "BIRTHDAY_STORY":
            return "BIRTHDAY_STORY";
        case "CREW_STORY":
            return "CREW_STORY";
        case "GOODWILL_STORY":
            return "GOODWILL_STORY";
        case "GOODWILL_GENERATED_STORY":
            return "GOODWILL_GENERATED_STORY";
        case "STORY":
            return "STORY";
        case "PROFILE_PLUS_STORY":
            return "PROFILE_PLUS_STORY";
        case "ADMINED_ADDITIONAL_PROFILE_STORY":
            return "ADMINED_ADDITIONAL_PROFILE_STORY"
        }
        return null
    }
    function b(a) {
        var b = "unknown";
        a === "Photo" ? b = "photo" : a === "Video" ? b = "video" : a === "live" && (b = "live");
        return b
    }
    function c(a, b, c, d, e) {
        e === void 0 && (e = !1);
        if (e)
            return "end_card";
        switch (b) {
        case "Page":
            return "page";
        case "Event":
            return "event";
        case "User":
            return c === a ? "self" : d ? "friend" : "followee";
        case "Group":
            return "group";
        case "StoryPromotionOwner":
            return "promotion";
        default:
            return "null"
        }
    }
}
), null);
__d("StoriesLoggingConstants", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        ACTION_SOURCE: {
            ARCHIVE: "archive",
            FACEBOOK_CHAT_TAB: "facebook_chat_tab",
            MESSENGER_DOT_COM: "messenger_dot_com",
            NOTIFICATION: "notification",
            PAGE_PROFILE: "page_profile",
            POST_HEADER: "post_header_actor_photo",
            STORIES_SURFACE: "stories_surface",
            TODAY_IN: "today_in",
            TRAY: "story_tray",
            UNKNOWN: "unknown",
            VIEWER: "viewer"
        },
        ACTION_TYPE: {
            CLOSE_STORY: "close_story",
            DELETE_MEDIA: "delete_media_attempted",
            OPEN_LINK: "open_link",
            OPEN_MEDIA: "open_media",
            OPEN_SEEN_SUMMARY: "open_seen_summary",
            OPEN_STORY: "open_story",
            PAUSE_STORY: "pause_story",
            REACTION_STICKER_INTERACTED: "reaction_sticker_interacted",
            REPLY_ATTEMPT_COMPLETED: "reply_attempt_completed",
            REPLY_SENT_WHEN_SMART_REPLY_SHOWN: "reply_sent_when_smart_reply_shown",
            SEND_REPLY_ATTEMPT: "attempt_to_send_reply",
            SEND_STORY_FAILED: "send_story_failed",
            SEND_STORY_SUCCEEDED: "send_story_succeed",
            SMART_REPLY_IMPRESSION: "smart_reply_impression",
            STORY_MEDIA_VIEW: "story_media_view",
            STORY_NAVIGATION: "story_navigation",
            TRAY_LOAD: "story_tray_load",
            UNPAUSE_STORY: "unpause_story",
            VISIT_PAGE: "fb_stories_visit_page"
        },
        CLOSE_STORY_GESTURE: {
            AUTO_EXIT: "auto_exit",
            BACK_BUTTON_EXIT: "back_button_exit",
            BLUR_BACKGROUND: "blur_background",
            CLOSE_BUTTON_EXIT: "close_button_exit",
            KEYBOARD_EXIT: "keyboard_exit"
        },
        FB_STORIES_IMPRESSION: 75,
        FB_STORIES_TIMESPENT: 76,
        IMPRESSION_DEDUPLICATION_TIME: 6e4,
        NAVIGATION_GESTURE: {
            AUTO_JUMP: "auto_jump",
            NAVIGATE_AWAY: "navigate_away",
            SWIPE_LEFT: "swipe_left",
            SWIPE_RIGHT: "swipe_right",
            TAP_BACKWARD: "tap_backward",
            TAP_FORWARD: "tap_forward",
            VIEWER_SHEET: "viewer_sheet"
        },
        STORY_REPLY_TYPE: {
            TEXT_SUGGESTION: "TextSuggestion"
        },
        STORY_TYPE: {
            EVENT_STORY: "event",
            FOLLOWEE_STORY: "followee",
            FRIEND_STORY: "friend",
            GROUP_STORY: "group",
            MISSING_STORY_DATA: "missingStoryData",
            PAGE_STORY: "page",
            SELF_STORY: "self",
            STORY_PROMOTION: "promotion"
        },
        TIMESPENT_MINIMUM_TIME: 500
    };
    b = a;
    e.exports = b
}
), null);
__d("StoriesGating", ["fbt", "UserAgent", "gkx", "qex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.getBlobImageParams = a;
    f.getCreationDescription = c;
    f.getHScrollRefetchCount = d;
    f.isAddToStoryEnabled = h;
    f.isComet = i;
    f.isCometPrivacySelectorEnabled = e;
    f.isCometStoriesVideoProductionEnabled = j;
    f.isEmployee = k;
    f.isFontRotationEnabled = l;
    f.isFontScalingEnabled = m;
    f.isFriendsAndConnectionsDeprecated = n;
    f.isImageScrollScalingEnabled = o;
    f.isLightweightReactionsViewerSheetEnabled = p;
    f.isOverlayAligningEnabled = q;
    f.isReshareConsumptionEnabled = r;
    f.isStoriesArchiveEnabled = s;
    f.isStoriesArchiveEntrypointEnabled = t;
    f.isSupportReactionEnabled = u;
    f.isTest = v;
    f.shouldEnableOptimisticImprovements = w;
    f.shouldHideCreateAStoryTile = x;
    f.shouldLogStoryMediaView = y;
    f.shouldMockLogging = z;
    f.shouldShowContextualReplies = A;
    f.shouldShowEndCard = B;
    f.shouldShowNavButtonTooltip = C;
    f.shouldUseHScroll = D;
    f.shouldSkipUploadingFragment = E;
    f.shouldSetNavPaneBucketCountByHeight = F;
    f.shouldUseStickerReplies = G;
    f.getPrefetchCountStickerReplies = H;
    f.getPrefetchEmojiCountStickerReplies = I;
    f.getPrefetchGifCountStickerReplies = J;
    f.shouldDeferViewerSheet = K;
    f.getPrefetchAvatarCountStickerReplies = L;
    f.getPaginateAvatarCountStickerReplies = M;
    f.getPaginateStickerCountStickerReplies = N;
    f.shouldUseBlurredImagePreview = O;
    f.shouldEnableWarningScreens = P;
    f.shouldUseNewProgressBar = Q;
    f.shouldAllowImagePrefetch = R;
    f.getInitialTrayBucketCount = S;
    f.shouldUseCombinedTrayViewerQuery = T;
    f.getTotalTrayBucketCount = U;
    f.getApproxBucketCount = V;
    f.shouldUseCometUFIReactionsMenu = W;
    function a() {
        var a = {
            format: "image/jpeg",
            quality: .92
        };
        if (!b("UserAgent").isBrowser("Chrome"))
            return a;
        var c = {
            format: "image/webp",
            quality: .86
        };
        return b("gkx")("1671267") ? c : a
    }
    function c() {
        if (j())
            return g._("Chia s\u1ebb \u1ea3nh, video ho\u1eb7c vi\u1ebft g\u00ec \u0111\u00f3");
        else
            return g._("Chia s\u1ebb \u1ea3nh ho\u1eb7c vi\u1ebft g\u00ec \u0111\u00f3")
    }
    function d() {
        var a;
        return (a = b("qex")._("1519815")) != null ? a : 0
    }
    function h() {
        return i() ? b("gkx")("1705278") : b("gkx")("678359")
    }
    function i() {
        return b("gkx")("708253")
    }
    function e() {
        return b("gkx")("1276925")
    }
    function j() {
        return b("gkx")("1351783")
    }
    function k() {
        return b("gkx")("678680")
    }
    function l() {
        var a;
        return (a = b("qex")._("1579506")) != null ? a : !1
    }
    function m() {
        var a;
        return (a = b("qex")._("1542635")) != null ? a : !1
    }
    function n() {
        return b("gkx")("1234255")
    }
    function o() {
        return b("gkx")("1707088")
    }
    function p() {
        var a;
        return (a = b("qex")._("706596")) != null ? a : !1
    }
    function q() {
        var a;
        return (a = b("qex")._("1615961")) != null ? a : !1
    }
    function r() {
        var a;
        return (a = b("qex")._("1064124")) != null ? a : !1
    }
    function s() {
        return b("gkx")("1220640")
    }
    function t() {
        if (i())
            return b("gkx")("1699353");
        else
            return s()
    }
    function u() {
        var a;
        return (a = b("qex")._("1371343")) != null ? a : !1
    }
    function v() {
        return b("gkx")("709647")
    }
    function w() {
        var a;
        return (a = b("qex")._("1594226")) != null ? a : !1
    }
    function x() {
        var a;
        return (a = b("qex")._("1528879")) != null ? a : !1
    }
    function y() {
        return b("gkx")("1261311")
    }
    function z() {
        return b("gkx")("1260876")
    }
    function A() {
        if (i()) {
            var a;
            return (a = b("qex")._("1701838")) != null ? a : !1
        } else
            return !1
    }
    function B() {
        if (i() && h()) {
            var a;
            return (a = b("qex")._("1588431")) != null ? a : !1
        }
        return !1
    }
    function C() {
        var a;
        return (a = b("qex")._("1148192")) != null ? a : !1
    }
    function D() {
        var a;
        return (a = b("qex")._("1513513")) != null ? a : !1
    }
    function E() {
        var a;
        return (a = b("gkx")("1707301")) != null ? a : !1
    }
    function F() {
        var a;
        return (a = b("qex")._("1653617")) != null ? a : !1
    }
    function G() {
        var a;
        return (a = b("qex")._("1679018")) != null ? a : !1
    }
    function H() {
        var a;
        return (a = b("qex")._("1679393")) != null ? a : 0
    }
    function I() {
        var a;
        return (a = b("qex")._("1685404")) != null ? a : 0
    }
    function J() {
        var a;
        return (a = b("qex")._("1687203")) != null ? a : 0
    }
    function K() {
        var a;
        return (a = b("qex")._("1707143")) != null ? a : !1
    }
    function L() {
        var a;
        return (a = b("qex")._("1695129")) != null ? a : 0
    }
    function M() {
        var a;
        return (a = b("qex")._("1707855")) != null ? a : 0
    }
    function N() {
        var a;
        return (a = b("qex")._("1707856")) != null ? a : 0
    }
    function O() {
        var a;
        return (a = b("qex")._("1707381")) != null ? a : !1
    }
    function P() {
        var a;
        return (a = b("qex")._("1704299")) != null ? a : !1
    }
    function Q() {
        var a;
        return (a = b("qex")._("1726080")) != null ? a : !1
    }
    function R() {
        var a;
        return (a = b("qex")._("1726081")) != null ? a : !0
    }
    function S() {
        var a;
        return (a = b("qex")._("1727843")) != null ? a : 6
    }
    function T() {
        var a;
        return (a = b("qex")._("1727842")) != null ? a : !1
    }
    function U() {
        var a = T()
          , c = b("qex")._("1737957");
        if (a) {
            return (a = c) != null ? a : 9
        } else {
            a = h();
            return ((c = c) != null ? c : 7) + (a ? 0 : 1)
        }
    }
    function V() {
        return b("gkx")("1753833") ? U() : 0
    }
    function W() {
        var a;
        return (a = b("qex")._("1752984")) != null ? a : !1
    }
}
), null);
__d("MeetupExperiments", ["RTWebIncomingRingConfiguration", "gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    f.dwebLaunchGkEnabled = a;
    f.sendCreatorNotifications = c;
    f.supportJoinerWaitingLobby = d;
    f.supportLinkCreation = e;
    function a() {
        return b("gkx")("1397101")
    }
    function c() {
        return !b("gkx")("1224637")
    }
    function d() {
        return b("gkx")("1456547")
    }
    function e() {
        return b("RTWebIncomingRingConfiguration").isSupportedClientForProtocol("mw") && b("gkx")("1545140")
    }
}
), null);
__d("CometTrialParticipationChangeMutation.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "input"
        }]
          , b = [{
            alias: null,
            args: [{
                kind: "Variable",
                name: "data",
                variableName: "input"
            }],
            concreteType: "CometTrialParticipationChangeResponsePayload",
            kind: "LinkedField",
            name: "comet_trial_participation_change",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "client_mutation_id",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "success",
                storageKey: null
            }],
            storageKey: null
        }];
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "CometTrialParticipationChangeMutation",
                selections: b,
                type: "Mutation",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "CometTrialParticipationChangeMutation",
                selections: b
            },
            params: {
                id: "2317726921658975",
                metadata: {},
                name: "CometTrialParticipationChangeMutation",
                operationKind: "mutation",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("CometTrialParticipationChangeMutation", ["CometRelay", "CometTrialParticipationChangeMutation.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    f.commit = a;
    var g, h = g !== void 0 ? g : g = b("CometTrialParticipationChangeMutation.graphql");
    function a(a, c, d, e) {
        return b("CometRelay").commitMutation(a, {
            mutation: h,
            onCompleted: d,
            onError: e,
            variables: {
                input: c
            }
        })
    }
}
), null);
__d("CometOptOutStrings", ["fbt", "CometTrialProgramGating"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.getLabelForPageAdminOptOutUnit = a;
    f.getLabelForGroupAdminOptOutUnit = c;
    f.getCTAForAdminOptOutUnit = d;
    f.getOptOutSettingsMenuItemHeader = e;
    f.getOptOutSettingsMenuItemBody = h;
    function a() {
        switch (b("CometTrialProgramGating").maxOptOutAgeInHours) {
        case 48:
            return g._("N\u1ebfu mu\u1ed1n, b\u1ea1n c\u00f3 th\u1ec3 chuy\u1ec3n sang Facebook.com th\u00f4ng th\u01b0\u1eddng trong 48 gi\u1edd \u0111\u1ec3 qu\u1ea3n l\u00fd Trang.");
        default:
            return g._("N\u1ebfu mu\u1ed1n, b\u1ea1n c\u00f3 th\u1ec3 t\u1ea1m th\u1eddi chuy\u1ec3n sang Facebook.com th\u00f4ng th\u01b0\u1eddng \u0111\u1ec3 qu\u1ea3n l\u00fd Trang.")
        }
    }
    function c() {
        switch (b("CometTrialProgramGating").maxOptOutAgeInHours) {
        case 48:
            return g._("N\u1ebfu mu\u1ed1n, b\u1ea1n c\u00f3 th\u1ec3 chuy\u1ec3n sang Facebook.com th\u00f4ng th\u01b0\u1eddng trong 48 gi\u1edd \u0111\u1ec3 qu\u1ea3n l\u00fd nh\u00f3m.");
        default:
            return g._("N\u1ebfu mu\u1ed1n, b\u1ea1n c\u00f3 th\u1ec3 t\u1ea1m th\u1eddi chuy\u1ec3n sang Facebook.com th\u00f4ng th\u01b0\u1eddng \u0111\u1ec3 qu\u1ea3n l\u00fd nh\u00f3m.")
        }
    }
    function d() {
        return g._("Chuy\u1ec3n ngay")
    }
    function e() {
        switch (b("CometTrialProgramGating").maxOptOutAgeInHours) {
        case 48:
            return g._("Chuy\u1ec3n sang Facebook th\u00f4ng th\u01b0\u1eddng trong 48 gi\u1edd");
        default:
            return g._("T\u1ea1m th\u1eddi chuy\u1ec3n sang Facebook th\u00f4ng th\u01b0\u1eddng")
        }
    }
    function h() {
        switch (b("CometTrialProgramGating").maxOptOutAgeInHours) {
        case 48:
            return g._("K\u1ec3 t\u1eeb th\u00e1ng 9, phi\u00ean b\u1ea3n Facebook th\u00f4ng th\u01b0\u1eddng s\u1ebd ng\u1eebng ho\u1ea1t \u0111\u1ed9ng");
        default:
            return g._("Tr\u1ea3i nghi\u1ec7m Facebook th\u00f4ng th\u01b0\u1eddng s\u1ebd ng\u1eebng ho\u1ea1t \u0111\u1ed9ng t\u1eeb th\u00e1ng 9.")
        }
    }
}
), null);
__d("createCometTriggerOptOutWithSurveyHook", ["Promise", "CometRelay", "JSResourceForInteraction", "React", "promiseDone", "recoverableViolation", "requireDeferred", "useCometLazyDialog"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React")
      , h = b("JSResourceForInteraction")("CometOptOutSurveyDialog.react").__setRef("createCometTriggerOptOutWithSurveyHook")
      , i = b("requireDeferred")("CometDismissFBNuxMutation");
    function j(a, c) {
        return new (b("Promise"))(function(d) {
            i.onReady(function(e) {
                e.commit(a, c, d, function(a) {
                    b("recoverableViolation")("Comet opt out survey failed to dismiss nux: " + a.message, "comet_infra"),
                    d()
                })
            })
        }
        )
    }
    function a(a) {
        var c = a.onOptOut
          , d = a.onOptOutCompleted
          , e = a.onOptOutError;
        return function(a) {
            var f = b("CometRelay").useRelayEnvironment()
              , i = b("useCometLazyDialog")(h)
              , k = i[0];
            return g.useCallback(function() {
                var g = j(f, 7070)["finally"](function() {
                    return c(f, a)
                });
                k({}, function() {
                    b("promiseDone")(g, d, e)
                })
            }, [f, k, a])
        }
    }
}
), null);
__d("useCometTriggerOptOut", ["Promise", "CometTrialParticipationChangeMutation", "createCometTriggerOptOutWithSurveyHook", "recoverableViolation"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("createCometTriggerOptOutWithSurveyHook")({
        onOptOut: function(a, c) {
            return new (b("Promise"))(function(d, e) {
                b("CometTrialParticipationChangeMutation").commit(a, {
                    change_type: "OPT_OUT",
                    source: c
                }, function(a) {
                    ((a = a.comet_trial_participation_change) == null ? void 0 : a.success) === !0 ? d() : e("result.success is not true")
                }, e)
            }
            )
        },
        onOptOutCompleted: function() {
            window.location.reload()
        },
        onOptOutError: function(a) {
            b("recoverableViolation")("Error when trying to opt out of Comet: " + a.toString(), "comet_ui")
        }
    });
    e.exports = a
}
), null);
__d("FundraiserGKUtils", ["gkx", "qex"], (function(a, b, c, d, e, f) {
    "use strict";
    f.canCreateP4CFundraiser = g;
    f.canCreateP4PFundraiser = h;
    f.stripeKYCToCreateP4PFundraiser = a;
    f.canCreateFundraiser = c;
    f.canSeeCometCreationFlow = d;
    f.canSeeCometVoiceSwitcher = e;
    function g() {
        return b("gkx")("1122553")
    }
    function h() {
        return b("gkx")("781430")
    }
    function a() {
        return b("gkx")("1672646")
    }
    function c() {
        return g() || h()
    }
    function d() {
        var a;
        return b("gkx")("708253") && ((a = b("qex")._("1511536")) != null ? a : !1)
    }
    function e() {
        return b("gkx")("708253") && b("gkx")("1578944")
    }
}
), null);
__d("MessengerThreadListLoggerUtil", ["MessagingTag", "QuickPerformanceLogger"], (function(a, b, c, d, e, f) {
    "use strict";
    f.markerStart = a;
    f.markerEnd = c;
    var g = new Map()
      , h = 1;
    function i(a, c) {
        return !a || !a.includes(b("MessagingTag").INBOX.toUpperCase()) ? null : c == null ? 25296905 : 25296906
    }
    function j(a, b, c) {
        return [].concat(a || [], [b, c]).filter(Boolean).join("_")
    }
    function a(a, c, d) {
        var e = i(a, c);
        if (!e)
            return;
        b("QuickPerformanceLogger").markerStart(e, h);
        g.set(j(a, c, d), h);
        h++
    }
    function c(a, c, d, e) {
        var f = i(a, c);
        if (!f)
            return;
        a = j(a, c, d);
        c = g.get(a);
        c != null && (b("QuickPerformanceLogger").markerEnd(f, e, c),
        g["delete"](a))
    }
}
), null);
__d("MessengerThreadlistWebGraphQLQuery", ["WebGraphQLQueryBase"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        b.__getDocID = function() {
            return "3426149104143726"
        }
        ;
        b.getQueryID = function() {
            return "700533614147542"
        }
        ;
        return b
    }(b("WebGraphQLQueryBase"))
}
), null);
__d("MessengerGraphQLThreadlistFetcher.bs", ["Promise", "Utils.bs", "gkx", "bs_js_dict", "BanzaiODS", "bs_caml_array", "WebGraphQL", "bs_caml_format", "bs_caml_option", "CurrentUser", "bs_caml_exceptions", "MercuryServerRequestsConfig", "MessengerThreadListLoggerUtil", "ChatReliabilityInstrumentation", "MessengerServerPayloadTransformer.bs", "MessengerThreadlistWebGraphQLQuery"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {
        contents: !0
    };
    function h(a) {
        b("MessengerThreadListLoggerUtil").markerStart(a.tags, a.timestamp, a.limit);
        return new (b("MessengerThreadlistWebGraphQLQuery"))({
            limit: a.limit,
            before: a.timestamp,
            tags: a.tags,
            isWorkUser: b("CurrentUser").isWorkUser(),
            includeDeliveryReceipts: a.includeDeliveryReceipts,
            includeSeqID: a.includeSeqID,
            onlyPinnedThreads: a.onlyPinnedThreads,
            is_work_teamwork_not_putting_muted_in_unreads: b("gkx")("1105011")
        })
    }
    function i(a, c, d, e) {
        var f = []
          , g = []
          , h = {}
          , i = []
          , j = {}
          , k = {
            contents: void 0
        }
          , l = {
            contents: 0
        }
          , m = [];
        e.forEach(function(e, n) {
            n = b("bs_caml_array").caml_array_get(c, n);
            var o = b("Utils.bs").optionBoolToBool(b("bs_caml_option").nullable_to_opt(n.onlyPinnedThreads))
              , p = []
              , q = []
              , r = []
              , s = e.viewer.pending_threads;
            s == null || (l.contents = s.unseen_count);
            e.viewer.message_threads.nodes.forEach(function(c) {
                if (c == null)
                    return 0;
                else {
                    var e = b("MessengerServerPayloadTransformer.bs").transformThread(a, c, d)
                      , g = b("MessengerServerPayloadTransformer.bs").transformParticipants(c);
                    g.forEach(function(a) {
                        j[a.fbid] = a;
                        return 0
                    });
                    var k;
                    if (e.is_canonical) {
                        g = e.other_user_fbid;
                        g == null ? k = null : (p.push(g),
                        k = g)
                    } else {
                        g = e.thread_fbid;
                        g == null ? k = null : (q.push(g),
                        k = g)
                    }
                    r.push(e.thread_id);
                    f.push(e);
                    if (!(k == null)) {
                        g = b("MessengerServerPayloadTransformer.bs").transformReadReceipts(a, c);
                        g !== void 0 && (h[k] = b("bs_caml_option").valFromOption(g))
                    }
                    if (!(k == null)) {
                        g = b("MessengerServerPayloadTransformer.bs").transformDeliveryReceipts(c);
                        if (g.length !== 0) {
                            c = g[0];
                            e.is_canonical ? i.push({
                                other_user_fbid: k,
                                thread_fbid: null,
                                time: b("bs_caml_format").caml_float_of_string(c.timestamp_precise)
                            }) : i.push({
                                other_user_fbid: null,
                                thread_fbid: k,
                                time: b("bs_caml_format").caml_float_of_string(c.timestamp_precise)
                            })
                        }
                    }
                    if (!(k == null) && o) {
                        m.push(k);
                        return 0
                    } else
                        return 0
                }
            });
            s = e.viewer.message_threads.sync_sequence_id;
            s == null || (k.contents = b("bs_caml_format").caml_int_of_string(s));
            if (o)
                return 0;
            else {
                e = n.timestamp;
                g.push({
                    folder: n.folder,
                    other_user_fbids: p,
                    thread_fbids: q,
                    thread_ids: r,
                    filter: n.filter,
                    limit: e == null ? n.limit : n.limit - 1 | 0
                });
                return 0
            }
        });
        return {
            threads: f,
            ordered_threadlists: g,
            pending_folder_unseen_count: l.contents,
            roger: h,
            delivery_receipts: i,
            participants: b("bs_js_dict").values(j),
            sequence_id: k.contents,
            pinned_thread_ids: m
        }
    }
    var j = b("bs_caml_exceptions").create("MessengerGraphQLThreadlistFetcher.SessionLoggedOut");
    function k(a, c) {
        a.forEach(function(a) {
            b("MessengerThreadListLoggerUtil").markerEnd(a.tags, a.timestamp, a.limit, c);
            return 0
        });
        return 0
    }
    function a(a, c, d, e) {
        if (g.contents) {
            var f = c.map(h);
            return b("Promise").all(b("WebGraphQL").execAll(f, {
                actorID: d ? a : null,
                batchName: "MessengerGraphQLThreadlistFetcher",
                msgrRegion: b("MercuryServerRequestsConfig").msgrRegion,
                allowCrossPageTransition: !0
            }))["catch"](function(a) {
                var d;
                try {
                    d = b("bs_caml_array").caml_array_get(a.errors, 0).should_end_session
                } catch (a) {
                    d = !1
                }
                d && (g.contents = !1);
                b("BanzaiODS").bumpEntityKey(2966, "messenger_webgraphql", e + ".failure");
                k(c, "FAIL");
                b("ChatReliabilityInstrumentation").logERROR("fetch_thread_list_fail");
                return b("Promise").reject(a)
            }).then(function(f) {
                b("BanzaiODS").bumpEntityKey(2966, "messenger_webgraphql", e + ".success");
                k(c, "SUCCESS");
                return i(a, c, d, f)
            })
        } else
            return b("Promise").reject(j)
    }
    f.canMakeRequests = g;
    f._getQuery = h;
    f.transform = i;
    f.SessionLoggedOut = j;
    f.markerEnd = k;
    f.fetchAll = a
}
), null);
__d("MessengerGraphQLThreadlistFetcher.re", ["bs_curry", "MessengerGraphQLThreadlistFetcher.bs"], (function(a, b, c, d, e, f) {
    a = function(a, c, d, e) {
        a = b("bs_curry")._4(b("MessengerGraphQLThreadlistFetcher.bs").fetchAll, a, c, d, e);
        return a
    }
    ;
    f.fetchAll = a
}
), null);
__d("MWMSJewelThreadlistFetcher", ["MercuryServerPayloadPreprocessor", "MessengerGraphQLThreadlistFetcher.re", "MessengerWebGraphQLTypedLogger", "promiseDone"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {
        inbox: !1,
        other: !1,
        pending: !1
    }
      , h = 20;
    f.PAGINATION_COUNT = h;
    var i = function(a, b) {
        return a.map(function(a) {
            var c = [a.folder.toUpperCase()];
            a.filter != null && c.push(a.filter);
            return {
                filter: a.filter,
                folder: a.folder,
                includeDeliveryReceipts: !0,
                includeSeqID: !1,
                isWorkUser: !1,
                limit: b == null ? h : h + 1,
                onlyPinnedThreads: !1,
                tags: c,
                timestamp: b
            }
        })
    };
    f._createParams = i;
    var j = function(a, c) {
        b("promiseDone")(b("MessengerGraphQLThreadlistFetcher.re").fetchAll(a, c, !1, "fetch_threadlist"), function(c) {
            return b("MercuryServerPayloadPreprocessor").getForFBID(a).handleUpdate(babelHelpers["extends"]({}, c, {
                payload_source: "server_fetch_threadlist_info"
            }))
        }, function(a) {
            a = typeof a === "object" && a !== null && a.errors != null ? a.errors : a;
            new (b("MessengerWebGraphQLTypedLogger"))().setErrorMessage(JSON.stringify(a)).setEvent("threadlist_failure").setQueryParams(JSON.stringify(c)).log()
        })
    };
    f._loadItems = j;
    a = function(a, b, c) {
        j(a, i([{
            folder: b
        }], c))
    }
    ;
    f.loadItems = a;
    c = function(a, b, c) {
        g[b] || (g[b] = !0,
        j(a, i([{
            folder: b
        }].concat(c === !0 ? [{
            filter: "unread",
            folder: "pending"
        }] : []), null)))
    }
    ;
    f.preloadItems = c
}
), null);
__d("FBRTCSupport", ["RTCConfig", "UserAgent", "gkx", "qex"], (function(a, b, c, d, e, f) {
    var g = {
        isWebrtcSupported: function() {
            return b("UserAgent").isBrowser("Chrome >= 28") || b("UserAgent").isBrowser("Firefox >= 25") || b("UserAgent").isBrowser("Edge >= 15.15042") && b("gkx")("1341692") && !b("gkx")("1680228") || b("UserAgent").isBrowser("Edge (Chromium Based) >= 74.1") || b("UserAgent").isBrowser("Opera >= 20") || g.isSupportedSafariVersion() && b("gkx")("875718") || b("UserAgent").isBrowser("Oculus Browser >= 6") && b("gkx")("1188589") || this.isUnifiedEnabledForCallsExperimentation()
        },
        isGroupCallWebtrcSupported: function() {
            return b("UserAgent").isBrowser("Chrome >= 28") || b("UserAgent").isBrowser("Edge (Chromium Based) >= 74.1") || b("UserAgent").isBrowser("Opera >= 20") || g.isSupportedSafariVersion() && b("gkx")("875718") || this.isUnifiedEnabledForCallsExperimentation()
        },
        isUnifiedEnabledForCallsExperimentation: function() {
            return b("qex")._("1265876") || !1
        },
        isCollabSupported: function() {
            return g.isWebrtcSupported() && (!!b("RTCConfig").CollabWhitelistedBrowserGK || b("UserAgent").isBrowser("Chrome >= " + 65))
        },
        canUseUnifiedPlan: function(a) {
            var c = b("UserAgent").isBrowser("Chrome >= 73") || b("UserAgent").isBrowser("Safari >= 12.2");
            if (a)
                return c;
            a = b("gkx")("919244") && c;
            return a || b("UserAgent").isBrowser("Mobile Safari >= 12.1.1")
        },
        isSupportedSafariVersion: function() {
            return b("UserAgent").isBrowser("Safari >= 12.1") || b("UserAgent").isBrowser("Mobile Safari >= 12.1")
        },
        isMobileDevice: function() {
            return b("UserAgent").isPlatform("Android") || b("UserAgent").isPlatform("iOS")
        },
        isVideoFilterEffectSupported: function() {
            return !g.isMobileDevice() && (b("UserAgent").isBrowser("Chrome >= 51") || b("UserAgent").isBrowser("Opera >= 36"))
        },
        videoEscalationByUnmuteWorkaround: function() {
            return b("UserAgent").isBrowser("Firefox < 60") || b("UserAgent").isBrowser("Edge")
        },
        isChromiumBased: function() {
            return b("UserAgent").isBrowser("Chrome") || b("UserAgent").isBrowser("Opera") || b("UserAgent").isBrowser("Edge (Chromium Based) >= 74.1")
        }
    };
    e.exports = g
}
), null);
__d("ScotchRTWebLoggingSharedInstance", ["ChannelClientID"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = b("ChannelClientID").getID()
        }
        var c = a.prototype;
        c.getDeviceID = function() {
            return this.$1
        }
        ;
        return a
    }();
    c = new a();
    e.exports = c
}
), null);
__d("ScotchRTWebUserActionLogger", ["CurrentUser", "FBRTCConsoleLogger", "FBRTCSupport", "RtcWebUserActionsDebugFalcoEvent", "RtcWebUserActionsFalcoEvent", "ScotchRTWebLoggingSharedInstance", "ZenonSDESKeyDetector", "immutable", "performanceNow", "unrecoverableViolation"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;
    a = function() {
        function a() {
            this.$1 = {
                callID: void 0,
                callType: void 0,
                mediaType: void 0,
                conferenceName: void 0,
                conferenceState: void 0
            },
            this.$2 = b("immutable").Map(),
            this.$3 = new Set(),
            this.$4 = new Set(),
            this.$5 = b("ScotchRTWebLoggingSharedInstance").getDeviceID(),
            this.$6 = this.$7(),
            this.clearCache()
        }
        var c = a.prototype;
        c.clearCache = function() {
            this.$1 = {
                callID: void 0,
                callType: void 0,
                mediaType: void 0,
                conferenceName: void 0,
                conferenceState: void 0
            }
        }
        ;
        c.logImpression = function(a) {
            this.logEvent(babelHelpers["extends"]({
                eventName: "impression"
            }, a))
        }
        ;
        c.logPreCallImpression = function(a) {
            this.clearCache(),
            this.logImpression(a)
        }
        ;
        c.logPreCallClick = function(a) {
            this.clearCache(),
            this.logClick(a)
        }
        ;
        c.logClick = function(a) {
            this.logEvent(babelHelpers["extends"]({
                eventName: "tap"
            }, a))
        }
        ;
        c.logError = function(a) {
            this.logEvent(babelHelpers["extends"]({
                eventName: "error"
            }, a))
        }
        ;
        c.startTimer = function(a) {
            var c = (g || (g = b("performanceNow")))();
            this.$2 = this.$2.set(a, c);
            this.logCheckpoint({
                checkpoint: a + "_timerStart"
            });
            this.$8(a, {
                startTime: c
            })
        }
        ;
        c.logStopTimer = function(a) {
            var b = a.checkpointName === void 0 ? a.timerName : a.checkpointName
              , c = a.event || {};
            c.timeElapsed = this.$9(a.timerName);
            this.logCheckpoint(babelHelpers["extends"]({
                checkpoint: b + "_timerEnd"
            }, c));
            return c.timeElapsed
        }
        ;
        c.logCheckpoint = function(a, b) {
            this.logEvent(babelHelpers["extends"]({
                eventName: "checkpoint"
            }, a), b)
        }
        ;
        c.$10 = function(a) {
            return a === null || a === void 0
        }
        ;
        c.logEvent = function(a, c) {
            if (b("ZenonSDESKeyDetector")(a))
                throw b("unrecoverableViolation")("ScotchRTWebUserAction event contains SDES crypto key! This log entry must be removed!", "rtc_www");
            var d = this.$1;
            d.callID = this.$10(a.callID) ? d.callID : a.callID;
            d.callType = a.callType || d.callType;
            d.conferenceState = a.conferenceState || d.conferenceState;
            d.conferenceName = this.$10(a.conferenceName) ? d.conferenceName : a.conferenceName;
            d.isCaller = a.isCaller == null ? d.isCaller : a.isCaller;
            d.mediaType = a.mediaType || d.mediaType;
            this.$11(a, d);
            d = this.$12(a, d);
            (c == null ? void 0 : c.noConsole) !== !0 && this.$8(a.eventName, d)
        }
        ;
        c.$12 = function(a, c) {
            var d = {
                call_type: c.callType,
                client_time: Date.now().toString(),
                device_id: this.$5,
                error_domain: a.errorDomain,
                error_type: a.errorType,
                component: a.component,
                conference_state: c.conferenceState,
                event: a.eventName,
                media_type: c.mediaType,
                page: this.$6,
                call_id: c.callID,
                conference_name: c.conferenceName,
                surface: a.surface,
                checkpoint: a.checkpoint,
                event_time_elapsed: (a = a.timeElapsed) == null ? void 0 : a.toString(),
                is_caller: c.isCaller,
                codebase_version: "Scotch"
            };
            b("RtcWebUserActionsFalcoEvent").log(function() {
                return d
            });
            return d
        }
        ;
        c.$11 = function(a, c) {
            var d = {
                call_type: c.callType,
                client_time: Date.now().toString(),
                device_id: this.$5,
                error_domain: a.errorDomain,
                error_type: a.errorType,
                component: a.component,
                conference_state: c.conferenceState,
                event: a.eventName,
                media_type: c.mediaType,
                page: this.$6,
                call_id: c.callID,
                conference_name: c.conferenceName,
                surface: a.surface,
                checkpoint: a.checkpoint,
                event_time_elapsed: (a = a.timeElapsed) == null ? void 0 : a.toString(),
                is_caller: c.isCaller,
                codebase_version: "Scotch"
            };
            b("RtcWebUserActionsDebugFalcoEvent").log(function() {
                return d
            });
            return d
        }
        ;
        c.getCallType = function(a, b) {
            b === void 0 && (b = !1);
            if (a === null || a === void 0)
                return null;
            if (a)
                return "mw";
            else if (b)
                return "escalated";
            else
                return "p2p"
        }
        ;
        c.getAudioVideoComponent = function(a) {
            return a === null || a === void 0 ? null : a ? "audio_button" : "video_button"
        }
        ;
        c.getMediaType = function(a, b) {
            b === void 0 && (b = !1);
            if (b)
                return "escalated";
            else if (a)
                return "audio";
            else
                return "video"
        }
        ;
        c.logErrorOnceforDomain = function(a, b) {
            this.$3.has(a) || (this.$3.add(a),
            this.logError({
                errorDomain: a,
                errorType: b.toString()
            }))
        }
        ;
        c.logCheckpointOnceForDomain = function(a) {
            var b = a.checkpoint;
            this.$4.has(b) || (this.$4.add(b),
            this.logCheckpoint(a))
        }
        ;
        c.clearLoggedDomains = function() {
            this.$3.clear(),
            this.$4.clear()
        }
        ;
        c.getWebLoggerInfoFromStore = function(a) {
            a = a.callInfo;
            var b = a.callID
              , c = a.conferenceName;
            a = a.conferenceState;
            return {
                callID: b,
                conferenceName: c,
                conferenceState: a
            }
        }
        ;
        c.$7 = function() {
            if (b("FBRTCSupport").isMobileDevice())
                return "mweb";
            else if (b("CurrentUser").isWorkUser())
                return "workplace";
            var a = window.location.hostname;
            if (a.search("facebook") !== -1)
                return "facebook";
            else if (a.search("messenger") !== -1)
                return "messenger_dot_com";
            return a
        }
        ;
        c.$9 = function(a) {
            var c = this.$2.get(a);
            if (c) {
                this.$2 = this.$2.remove(a);
                return parseInt((g || (g = b("performanceNow")))() - c, 10)
            }
            return null
        }
        ;
        c.$8 = function(a, c) {
            a = a == null ? "null" : a;
            b("FBRTCConsoleLogger").getInstance().getLogHistory().log(a, JSON.stringify(c))
        }
        ;
        return a
    }();
    c = new a();
    e.exports = c
}
), null);
__d("CallEndReason", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        IGNORE_CALL: "IgnoreCall",
        HANGUP_CALL: "HangupCall",
        IN_ANOTHER_CALL: "InAnotherCall",
        ACCEPT_AFTER_HANGUP: "CallEndAcceptAfterHangUp",
        NO_ANSWER_TIMEOUT: "NoAnswerTimeout",
        INCOMING_TIMEOUT: "IncomingTimeout",
        OTHER_INSTANCE_HANDLED: "OtherInstanceHandled",
        SIGNALING_MESSAGE_FAILED: "SignalingMessageFailed",
        CONNECTION_DROPPED: "ConnectionDropped",
        CLIENT_INTERRUPTED: "ClientInterrupted",
        WEBRTC_ERROR: "WebRTCError",
        CLIENT_ERROR: "ClientError",
        NO_PERMISSION: "NoPermission",
        OTHER_NOT_CAPABLE: "OtherNotCapable",
        NO_UI_ERROR: "NoUIShown",
        UNSUPPORTED_VERSION: "VersionUnsupported",
        CALLER_NOT_VISIBLE: "CallerNotVisible",
        CARRIER_BLOCKED: "CarrierBlocked",
        OTHER_CARRIER_BLOCKED: "OtherCarrierBlocked",
        CLIENT_ENCRYPTION_ERROR: "ClientEncryptionError"
    });
    e.exports = a
}
), null);
__d("WebrtcMessageType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        OFFER: "offer",
        ANSWER: "answer",
        ICE_CANDIDATE: "ice_candidate",
        OK: "ok",
        HANG_UP: "hang_up",
        OTHER_DISMISS: "other_dismiss",
        MESSAGE_ACK: "msg_ack",
        PRANSWER: "pranswer",
        PING: "ping",
        PING_ACK: "ping_ack",
        ICE_RESTART_OFFER: "icerestart_offer",
        ICE_RESTART_ANSWER: "icerestart_answer",
        OFFER_ACK: "offer_ack",
        ANSWER_ACK: "answer_ack",
        SET_VIDEO: "set_video",
        ACK: "ack",
        INVALID: "invalid",
        OFFER_NACK: "offer_nack",
        NACK: "nack",
        VIDEO_REQUEST: "video_request",
        SDP_UPDATE: "sdp_update",
        SWITCH_TO_MULTIWAY: "switch_to_multiway",
        ON_HOLD: "on_hold",
        NEGOTIATE: "negotiate",
        RING: "ring",
        PR_OFFER_ACK: "pr_offer_ack",
        NOTIFY_MEDIA_STATE: "notify_media_state",
        CLIENT_REPORTED_EVENT: "client_reported_event",
        PCRESTART_OFFER: "pcrestart_offer"
    });
    e.exports = a
}
), null);
__d("ZenonP2PMessageTypes", ["WebrtcMessageType", "CallEndReason"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("CallEndReason");
    f.ZenonP2PCallEndReason = a;
    c = b("WebrtcMessageType");
    f.ZenonP2PSignalingPayloadType = c
}
), null);
__d("DocumentTitle", ["Arbiter"], (function(a, b, c, d, e, f) {
    var g = 1500
      , h = null
      , i = !1
      , j = 0
      , k = []
      , l = null
      , m = document.title
      , n = 0;
    function o() {
        k.length > 0 ? !i ? (p(k[j].title),
        j = ++j % k.length) : q() : (clearInterval(h),
        h = null,
        q())
    }
    function p(a) {
        document.title = a,
        i = !0
    }
    function q() {
        r.set(l || m, !0),
        i = !1
    }
    var r = function() {
        function a(a) {
            this.$1 = a
        }
        a.get = function() {
            return m
        }
        ;
        a.set = function(a, c) {
            var d = a.toString();
            document.title = d;
            !c ? (m = d,
            l = null,
            b("Arbiter").inform("update_title", a)) : l = d
        }
        ;
        a.blink = function(b) {
            b = {
                title: b.toString()
            };
            k.push(b);
            h === null && (h = setInterval(o, g));
            return new a(b)
        }
        ;
        var c = a.prototype;
        c.stop = function() {
            var a = k.indexOf(this.$1);
            a >= 0 && (k.splice(a, 1),
            j > a ? j-- : j == a && j == k.length && (j = 0))
        }
        ;
        a.badge = function(c) {
            var d = a.get();
            d = c ? "(" + c + ") " + d : d;
            a.set(d, !0);
            b("Arbiter").inform("update_title_badge", c, "state");
            n = c
        }
        ;
        a.preserveBadgeAndSet = function(c) {
            a.set(c, !1),
            b("Arbiter").inform("update_title", c),
            a.badge(n)
        }
        ;
        return a
    }();
    e.exports = r
}
), null);
__d("StoryAttachmentActorContext_story.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "StoryAttachmentActorContext_story",
        selections: [{
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "actors",
            plural: !0,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "__typename",
                storageKey: null
            }],
            storageKey: null
        }],
        type: "Story",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("CometFeedStoryAttachmentFooterSection_attachment.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [{
            kind: "RootArgument",
            name: "renderLocation"
        }],
        kind: "Fragment",
        metadata: null,
        name: "CometFeedStoryAttachmentFooterSection_attachment",
        selections: [{
            alias: null,
            args: [{
                kind: "Variable",
                name: "location",
                variableName: "renderLocation"
            }, {
                kind: "Literal",
                name: "supported",
                value: ["CometStoryAttachmentFooterVideoPageLikeStrategy", "CometStoryAttachmentFooterVideoProfileFollowStrategy", "CometStoryAttachmentFooterPlaceStrategy", "CometStoryAttachmentFooterFundraiserStrategy", "CometStoryAttachmentFooterFundraiserProfileOverlayStrategy", "CometStoryAttachmentFooterGenericVideoStrategy", "CometStoryAttachmentFooterGenericShareStrategy", "CometStoryAttachmentFooterPhotoStrategy", "CometStoryAttachmentFooterMessagePageStrategy", "CometStoryAttachmentFooterMovieStrategy", "CometStoryAttachmentFooterOwnershipLinkStrategy"]
            }],
            concreteType: null,
            kind: "LinkedField",
            name: "comet_footer_renderer",
            plural: !1,
            selections: [{
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentFooterSection_attachment",
                    fragmentName: "CometStoryAttachmentFooterVideoPageLikeStrategy_attachmentFooter",
                    fragmentPropName: "attachmentFooter",
                    kind: "ModuleImport"
                }],
                type: "CometStoryAttachmentFooterVideoPageLikeStrategy",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentFooterSection_attachment",
                    fragmentName: "CometStoryAttachmentFooterVideoProfileFollowStrategy_attachmentFooter",
                    fragmentPropName: "attachmentFooter",
                    kind: "ModuleImport"
                }],
                type: "CometStoryAttachmentFooterVideoProfileFollowStrategy",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentFooterSection_attachment",
                    fragmentName: "CometStoryAttachmentFooterPlaceStrategy_attachmentFooter",
                    fragmentPropName: "attachmentFooter",
                    kind: "ModuleImport"
                }],
                type: "CometStoryAttachmentFooterPlaceStrategy",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentFooterSection_attachment",
                    fragmentName: "CometStoryAttachmentFooterFundraiserStrategy_attachmentFooter",
                    fragmentPropName: "attachmentFooter",
                    kind: "ModuleImport"
                }],
                type: "CometStoryAttachmentFooterFundraiserStrategy",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentFooterSection_attachment",
                    fragmentName: "CometStoryAttachmentFooterFundraiserProfileOverlayStrategy_attachmentFooter",
                    fragmentPropName: "attachmentFooter",
                    kind: "ModuleImport"
                }],
                type: "CometStoryAttachmentFooterFundraiserProfileOverlayStrategy",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentFooterSection_attachment",
                    fragmentName: "CometStoryAttachmentFooterGenericVideoStrategy_attachmentFooter",
                    fragmentPropName: "attachmentFooter",
                    kind: "ModuleImport"
                }],
                type: "CometStoryAttachmentFooterGenericVideoStrategy",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentFooterSection_attachment",
                    fragmentName: "CometStoryAttachmentFooterGenericShareStrategy_attachmentFooter",
                    fragmentPropName: "attachmentFooter",
                    kind: "ModuleImport"
                }],
                type: "CometStoryAttachmentFooterGenericShareStrategy",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentFooterSection_attachment",
                    fragmentName: "CometStoryAttachmentFooterPhotoStrategy_attachmentFooter",
                    fragmentPropName: "attachmentFooter",
                    kind: "ModuleImport"
                }],
                type: "CometStoryAttachmentFooterPhotoStrategy",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentFooterSection_attachment",
                    fragmentName: "CometStoryAttachmentFooterMessagePageStrategy_attachmentFooter",
                    fragmentPropName: "attachmentFooter",
                    kind: "ModuleImport"
                }],
                type: "CometStoryAttachmentFooterMessagePageStrategy",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentFooterSection_attachment",
                    fragmentName: "CometStoryAttachmentFooterMovieStrategy_attachmentFooter",
                    fragmentPropName: "attachmentFooter",
                    kind: "ModuleImport"
                }],
                type: "CometStoryAttachmentFooterMovieStrategy",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentFooterSection_attachment",
                    fragmentName: "CometStoryAttachmentFooterOwnershipLinkStrategy_attachmentFooter",
                    fragmentPropName: "attachmentFooter",
                    kind: "ModuleImport"
                }],
                type: "CometStoryAttachmentFooterOwnershipLinkStrategy",
                abstractKey: null
            }],
            storageKey: null
        }],
        type: "StoryAttachment",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("CometFeedStoryInfoIconSection_story.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [{
            kind: "RootArgument",
            name: "renderLocation"
        }],
        kind: "Fragment",
        metadata: null,
        name: "CometFeedStoryInfoIconSection_story",
        selections: [{
            alias: null,
            args: [{
                kind: "Variable",
                name: "location",
                variableName: "renderLocation"
            }],
            concreteType: "CometStorySections",
            kind: "LinkedField",
            name: "comet_sections",
            plural: !1,
            selections: [{
                alias: null,
                args: [{
                    kind: "Literal",
                    name: "supported",
                    value: ["CometStoryPoliticalIconStrategy", "CometStoryArticleContextIconStrategy", "CometStoryBrandedContentIconStrategy"]
                }],
                concreteType: null,
                kind: "LinkedField",
                name: "info_icon",
                plural: !1,
                selections: [{
                    kind: "InlineFragment",
                    selections: [{
                        documentName: "CometFeedStoryInfoIconSection_story",
                        fragmentName: "CometFeedStoryPoliticalIconStrategy_infoIcon",
                        fragmentPropName: "infoIcon",
                        kind: "ModuleImport"
                    }],
                    type: "CometStoryPoliticalIconStrategy",
                    abstractKey: null
                }, {
                    kind: "InlineFragment",
                    selections: [{
                        documentName: "CometFeedStoryInfoIconSection_story",
                        fragmentName: "CometFeedStoryArticleContextIconStrategy_infoIcon",
                        fragmentPropName: "infoIcon",
                        kind: "ModuleImport"
                    }],
                    type: "CometStoryArticleContextIconStrategy",
                    abstractKey: null
                }, {
                    kind: "InlineFragment",
                    selections: [{
                        documentName: "CometFeedStoryInfoIconSection_story",
                        fragmentName: "CometFeedStoryBrandedContentIconStrategy_infoIcon",
                        fragmentPropName: "infoIcon",
                        kind: "ModuleImport"
                    }],
                    type: "CometStoryBrandedContentIconStrategy",
                    abstractKey: null
                }],
                storageKey: 'info_icon(supported:["CometStoryPoliticalIconStrategy","CometStoryArticleContextIconStrategy","CometStoryBrandedContentIconStrategy"])'
            }],
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "encrypted_tracking",
            storageKey: null
        }],
        type: "Story",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("StoryAttachmentActorContext", ["CometRelay", "React", "StoryAttachmentActorContext_story.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    f.StoryAttachmentActorContextProvider = a;
    f.useStoryAttachmentActor = c;
    var g, h = b("React"), i = h.createContext(void 0);
    function a(a) {
        var c = b("CometRelay").useFragment(g !== void 0 ? g : g = b("StoryAttachmentActorContext_story.graphql"), a.story);
        c = ((c = c == null ? void 0 : c.actors) != null ? c : [])[0];
        return h.jsx(i.Provider, {
            value: c,
            children: a.children
        })
    }
    function c() {
        return h.useContext(i)
    }
}
), null);
__d("CometFeedAggregatedStoriesContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext({
        hasAggregateParent: !1
    });
    e.exports = c
}
), null);
__d("CometFeedStoryAttachmentFooterSection.react", ["CometFeedMatchRenderer.react", "CometRelay", "CometTrackingNodeProvider.react", "React", "stylex", "useCometUniqueID", "usePageletMatchMetadata", "CometFeedStoryAttachmentFooterSection_attachment.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React"), i = g !== void 0 ? g : g = b("CometFeedStoryAttachmentFooterSection_attachment.graphql");
    function a(a) {
        var c = a.adClientToken
          , d = a.adID
          , e = a.attachment
          , f = a.onMatch_UNSTABLE_DO_NOT_USE;
        a = a.trackingData;
        var g = b("useCometUniqueID")();
        e = b("CometRelay").useFragment(i, e);
        var j = e == null ? void 0 : e.comet_footer_renderer;
        b("usePageletMatchMetadata")("footer", j);
        h.useEffect(function() {
            if (f != null) {
                var a = j != null ? b("CometRelay").ModuleResource.getModuleId(j) : null;
                f((a = a) != null ? a : null)
            }
        }, []);
        return h.jsx(b("CometTrackingNodeProvider.react"), {
            trackingNode: 259,
            children: h.jsx("div", {
                className: "stjgntxs ni8dbmo4",
                "data-testid": void 0,
                children: h.jsx(b("CometFeedMatchRenderer.react"), {
                    match: j,
                    props: {
                        adClientToken: c,
                        adID: d,
                        titleId: g
                    },
                    section: "attachment_footer",
                    trackingData: a
                })
            })
        })
    }
}
), null);
__d("CometFeedStoryInfoIconSection.react", ["CometFeedMatchRenderer.react", "CometRelay", "CometTrackingNodeProvider.react", "React", "CometFeedStoryInfoIconSection_story.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React"), i = g !== void 0 ? g : g = b("CometFeedStoryInfoIconSection_story.graphql");
    function a(a) {
        var c = a.onMatch_UNSTABLE_DO_NOT_USE
          , d = b("CometRelay").useFragment(i, a.story);
        h.useEffect(function() {
            if (c != null) {
                var a;
                a = (d == null ? void 0 : (a = d.comet_sections) == null ? void 0 : a.info_icon) != null ? b("CometRelay").ModuleResource.getModuleId(d == null ? void 0 : (a = d.comet_sections) == null ? void 0 : a.info_icon) : null;
                c((a = a) != null ? a : null)
            }
        }, []);
        return (d == null ? void 0 : (a = d.comet_sections) == null ? void 0 : a.info_icon) == null ? null : h.jsx(b("CometTrackingNodeProvider.react"), {
            trackingNode: 303,
            children: h.jsx(b("CometFeedMatchRenderer.react"), {
                match: d == null ? void 0 : (a = d.comet_sections) == null ? void 0 : a.info_icon,
                section: "info_icon",
                trackingData: d == null ? void 0 : d.encrypted_tracking
            })
        })
    }
    c = a;
    e.exports = c
}
), null);
__d("TrackingNodeTypes", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        HEADLINE: 1,
        USER_NAME: 2,
        ACTOR_PHOTO: 3,
        ACTION_LINKS: 4,
        LIKE_LINK: 5,
        UNLIKE_LINK: 6,
        PARTICIPANT: 7,
        PRONOUN: 8,
        ROBOTEXT: 9,
        TITLE: 10,
        MEDIA_GENERIC: 11,
        PHOTO: 12,
        VIDEO: 13,
        MUSIC: 14,
        ATTACHMENT: 15,
        NAME_LIST: 16,
        SHARE_LINK: 17,
        USER_MESSAGE: 18,
        SUBTITLE: 19,
        DESCRIPTION: 20,
        SOURCE: 21,
        BLINGBOX: 22,
        OTHER: 23,
        VIEW_ALL_COMMENTS: 24,
        COMMENT: 25,
        COMMENT_LINK: 26,
        SMALL_ACTOR_PHOTO: 27,
        SUBSTORY: 28,
        XBUTTON: 29,
        HIDE_LINK: 30,
        REPORT_SPAM_LINK: 31,
        HIDE_ALL_LINK: 32,
        BAD_AGGREGATION_LINK: 33,
        ADD_COMMENT_BOX: 34,
        APP_CALL_TO_ACTION: 35,
        UFI: 36,
        OG_LEFT_SLIDE_PAGER: 37,
        OG_RIGHT_SLIDE_PAGER: 38,
        EXP_CALL_TO_ACTION: 39,
        LARGE_MEDIA_ATTACHMENT: 40,
        FAN_PAGE: 42,
        UNFAN_PAGE: 43,
        SEE_MORE: 44,
        COLLECTION_ROBOTEXT_LINK: 45,
        COLLECTION_ACTION_LINK: 46,
        COLLECTION_TICKER_LINK: 47,
        SPONSORED_LINK: 49,
        PAGE_LINK: 50,
        SOCIAL_CONTEXT: 51,
        SOCIAL_ACTOR_PHOTO: 52,
        OFFERS_CLAIM: 53,
        OFFERS_CLICK: 54,
        DROPDOWN_BUTTON: 55,
        EVENT_VIEW: 56,
        EVENT_RSVP: 57,
        ADS_SHIMMED_LINK: 58,
        COLLECTION_ADD_BUTTON: 59,
        EVENT_INVITE_FRIENDS: 60,
        RHC_AD: 61,
        AD_CREATIVE_TITLE: 62,
        AD_CREATIVE_BODY: 63,
        AD_CREATIVE_IMAGE: 64,
        AD_SOCIAL_SENTENCE: 65,
        APP_NAME: 66,
        GROUP_JOIN: 67,
        PAGE_COVER_PHOTO: 68,
        PAGE_PROFILE_PIC: 69,
        AD_IDENTITY: 70,
        UNHIDE_LINK: 71,
        TRENDING_TOPIC_LINK: 72,
        RELATED_SHARE_ARTICLE: 73,
        OFFERS_USE_NOW: 74,
        RELATED_SHARE_VIDEO: 75,
        RHC_CARD: 76,
        RHC_CARD_HIDE: 77,
        RHC_SIMPLIFICATION: 78,
        RHC_SIMPLIFICATION_HIDE: 79,
        TOPIC_PIVOT_HEADER: 80,
        ADD_FRIEND_BUTTON: 81,
        SNOWLIFT: 82,
        SNOWLIFT_MESSAGE: 83,
        OFFERS_RESEND: 84,
        RHC_LINK_OPEN: 85,
        GENERIC_CALL_TO_ACTION_BUTTON: 86,
        AD_LOGOUT: 87,
        RHC_PHOTO_SLIDER: 88,
        RHC_COMMENT_BUTTON: 89,
        HASHTAG: 90,
        NOTE: 91,
        RELATED_SHARE_ARTICLE_HIDE: 92,
        RELATED_SHARE_VIDEO_HIDE: 93,
        NEKO_PREVIEW: 94,
        OG_COMPOSER_OBJECT: 95,
        INSTALL_ACTION: 96,
        SPONSORED_CONTEXT: 97,
        DIGITAL_GOOD: 98,
        STORY_FOOTER: 99,
        STORY_LOCATION: 100,
        ADD_PHOTO_ACTION: 101,
        ACTION_ICON: 102,
        EGO_FEED_UNIT: 103,
        PLACE_STAR_SURVEY: 104,
        REVIEW_MENU: 105,
        SAVE_ACTION: 106,
        PHOTO_GALLERY: 107,
        SUB_ATTACHMENT: 108,
        FEEDBACK_SECTION: 109,
        ALBUM: 110,
        ALBUM_COLLAGE: 111,
        AVATAR_LIST: 112,
        STORY_LIST: 113,
        MEDIA_CONTROLS: 114,
        ZERO_UPSELL_BUY: 115,
        ZERO_UPSELL_FEED_UNIT: 116,
        RATING: 117,
        PERMALINK_COMMENT: 118,
        LIKE_COUNT: 119,
        RETRY_BUTTON: 120,
        TIMELINE_GIFTS: 121,
        NEARBY_FRIENDS_LIST: 122,
        PRESENCE_UNIT: 123,
        EVENT_INVITE_SENT: 124,
        ATTACHMENT_TITLE: 125,
        HSCROLL_PAGER: 126,
        STORY_MESSAGE: 127,
        STATUS_LINK: 128,
        ADD_MEDIA_LINK: 129,
        ADD_QUESTION_LINK: 130,
        START_Q_AND_A_LINK: 131,
        FEED_STORY_MESSAGE_FLYOUT: 132,
        START_CONVERSATION_LINK: 133,
        ATTACH_LIFE_EVENT_LINK: 134,
        ATTACH_PLACE_LINK: 135,
        COVER_PHOTO_EDIT_LINK: 136,
        SHOW_LIKES: 137,
        ROTATE_LEFT_BUTTON: 138,
        ROTATE_RIGHT_BUTTON: 139,
        TAG_LINK: 140,
        CLOSE_BUTTON: 141,
        PAGER_NEXT: 142,
        PAGER_PREVIOUS: 143,
        FULLSCREEN_BUTTON: 144,
        ACTIONS: 145,
        CURATION_MENU: 146,
        PROFILE_PIC_EDIT_LINK: 147,
        VIEW_ALL_SHARES: 148,
        THUMBNAIL_LINK: 149,
        EDIT_HISTORY: 150,
        ADD_TO_THREAD: 151,
        SIDEBAR: 152,
        HOME_SIDENAV: 153,
        BUDDYLIST_NUB: 154,
        TITLEBAR: 155,
        SEND_BUTTON: 156,
        CONVERSATION: 157,
        CHAT_FLYOUT: 158,
        INPUT: 159,
        EMOTICONS: 160,
        VIDEOCHAT: 161,
        TYPEAHEAD: 162,
        OPTIONS_MENU: 163,
        BOOST_POST_BUTTON: 164,
        TOGGLE_BUTTON: 165,
        CHAT_SIDEBAR_FOOTER: 166,
        GRIPPER: 167,
        BOOKMARK_ITEM: 168,
        BOOKMARKS_SECTION: 169,
        BOOKMARKS_NAV: 170,
        RHC: 171,
        RHC_HEADER: 172,
        SIDE_ADS: 173,
        BUDDY_LIST: 174,
        SHOW_ADS_FEED: 184,
        VIDEO_IN_PLAY_CALL_TO_ACTION_BUTTON: 185,
        VIDEO_ENDSCREEN_CALL_TO_ACTION_BUTTON: 186,
        INLINE_PHOTO_PIVOTS_HIDE: 187,
        VIDEO_CALL_TO_ACTION_ENDSCREEN_REPLAY: 188,
        APP_ATTACHMENT: 189,
        ACTIVITY_LINK: 190,
        SAVE_BUTTON: 191,
        SEE_MORE_PHOTO_PAGE_POST_BUTTON: 192,
        BUY_VIRTUAL_GOOD: 193,
        SAVE_SECONDARY_MENU: 194,
        MPP_INSIGHTS: 195,
        GROUP_CANCEL: 197,
        GROUP_LEAVE: 198,
        MESSAGE_LINK: 199,
        VIDEO_SPONSORSHIP_LABEL: 200,
        MULTI_ATTACHMENT_PAGER_NEXT: 201,
        MULTI_ATTACHMENT_PAGER_PREV: 202,
        WEB_CLICK: 203,
        COMPOSER_POST: 204,
        MULTI_ATTACHMENT_VIDEO: 205,
        VIDEO_CALL_TO_ACTION_PAUSESCREEN_RESUME: 206,
        VOICECHAT: 207,
        PAGE_INVITE_FRIEND: 208,
        SEE_MORE_REDIRECT: 209,
        VIDEO_CALL_TO_ACTION_ATTACHMENT: 210,
        PAGE_POST_SEE_FIRST: 211,
        PAGE_POST_DEFAULT: 212,
        TOPIC_FEED_CUSTOMIZATION_UNIT_SUBMIT: 213,
        TOPIC_FEED_CUSTOMIZATION_UNIT_OPTION: 214,
        LEAD_GEN_OPEN_POPOVER: 215,
        LEAD_GEN_SUBMIT_CLICK: 216,
        LEAD_GEN_PRIVACY_CLICK: 217,
        LEAD_GEN_OFFSITE_CLICK: 218,
        EVENT_YOU_MAY_LIKE_HSCROLL: 219,
        LEAD_GEN_CONTEXT_CARD_CLOSE: 220,
        LEAD_GEN_CONTEXT_CARD_CTA_CLICK: 221,
        FEED_STORY_PLACE_ATTACHMENT: 222,
        PAGE_CALL_TO_ACTION_UNIT: 224,
        TRANSLATION: 225,
        FEED_STORY_ATTACHMENT_MISINFO_WARNING: 226,
        RELATED_LOCAL_NEWS_ATTACHMENT_LINK: 227,
        RELATED_LOCAL_NEWS_ATTACHMENT_SHARE: 228,
        STORY_TIMESTAMP: 229,
        STORY_HEADER: 230,
        SPONSORED_STORY: 231,
        EVENT_CTA_BUTTON: 232,
        RELATED_PAGE_POSTS_ATTACHMENT_CLICK: 233,
        RELATED_PAGE_POSTS_ATTACHMENT_SHARE: 234,
        RELATED_PAGE_POSTS_ATTACHMENT_XOUT: 235,
        RELATED_PAGE_POSTS_UNIT_XOUT: 236,
        CAROUSEL_CARD_STORY: 237,
        OFFERS_DETAILS_POPOVER: 238,
        SPOTLIGHT: 239,
        INSTREAM_CALL_TO_ACTION_BUTTON: 240,
        INSTREAM_CALL_TO_ACTION_ATTACHMENT: 241,
        SEARCH_AD_ATTACHMENT_CLICK: 242,
        SEARCH_AD_CTA_CLICK: 243,
        SEARCH_AD_OFFSITE_CLICK: 244,
        MULTI_SHARE_GRID_EXPERIMENT_CARD_1: 245,
        MULTI_SHARE_GRID_EXPERIMENT_CARD_2: 246,
        MULTI_SHARE_GRID_EXPERIMENT_CARD_3: 247,
        MULTI_SHARE_GRID_EXPERIMENT_CARD_4: 248,
        MULTI_SHARE_GRID_EXPERIMENT_SEE_MORE: 249,
        HOVERCARD: 250,
        INSTANT_GAME_PLAYER: 251,
        POLITICAL_AD_STORY_HEADER_CLICK: 252,
        PHOTO_VOICE: 253,
        PHOTO_TAG: 254,
        ANDROID_PLAYSTORE_WATCH_AND_INSTALL_BUTTON: 255,
        VIDEO_POLLING_IN_CREATIVE_CTA_BUTTON: 256,
        VIDEO_SETTINGS: 257,
        PLAYABLE_CALL_TO_ACTION_BUTTON: 258,
        ATTACHMENT_FOOTER: 259,
        LEAD_GEN_THANK_YOU_PAGE: 260,
        SHOW_MENTIONS_PLUGIN: 261,
        AD_BREAK_FULL_VIDEO_INDICATOR: 262,
        INSTREAM_AD_IMAGE: 263,
        INSTREAM_AD_CONTEXT: 264,
        ATTACHMENT_FOOTER_DISCLAIMER: 265,
        INSTREAM_LONGER_AD_CLICK_WATCH_AND_MORE: 266,
        INSTREAM_POST_ROLL_LONGER_AD_ENDING_SCREEN: 267,
        ACTIVATE_OFFER_CTA_BUTTON: 268,
        STORY: 301,
        PERMALINK_STORY: 302,
        ARTICLE_CONTEXT_TRIGGER: 303,
        LINK: 304,
        ATTACHMENT_FOLLOW: 305,
        SNOWFLAKE_STORY: 306,
        SNOWFLAKE_PHOTO: 307,
        BIRTHDAY_REMINDER: 308,
        FRIEND_REQUEST: 309,
        PYMK_JEWEL: 310,
        BROWSE_RESULT: 311,
        PROFILE_LINK: 312,
        USER_PROFILE_PIC: 313,
        GROUP_MEMBER: 314,
        GROUP_SUGGESTION: 315,
        REACTION_BROWSER: 316,
        GROUP_MEMBER_SUGGESTION: 317,
        PROFILE_NAV_ITEM: 318,
        NOTIFICATION_JEWEL: 319,
        NOTIFICATION_ITEM: 320,
        SNACKS: 321,
        PROFILE_TILE: 322,
        FRIEND_PROFILE_TILE: 323,
        INTRO_PROFILE_TILE: 324,
        SUGGEST_FRIENDS_DIALOG: 325,
        APP_COLLECTION: 326,
        ALL_FRIENDS_COLLECTION: 327,
        MUTUAL_FRIENDS_COLLECTION: 328,
        OUTGOING_FRIEND_REQUESTS: 329,
        INSTANT_ARTICLE_RECIRCULATION_STORY: 330,
        FRIEND_CENTER_PYMK: 331,
        PARTICIPANTS_DIALOG: 332,
        FEED_COMPOSER: 333,
        CONFIRM_FRIEND_REQUEST: 334,
        GENERIC_PROFILE_BROWSER: 335,
        INSTANT_ARTICLE_NATIVE_STORY: 336,
        INSTANT_EXPERIENCE_DOCUMENT: 337,
        LIVE_VIDEO_CONTEXT: 338,
        COMMENT_ACTION: 339,
        ATTACHED_STORY: 340,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_1: 341,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_2: 342,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_3: 343,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_4: 344,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_5: 345,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_6: 346,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_7: 347,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_8: 348,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_9: 349,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_10: 350,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_11: 351,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_12: 352,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_13: 353,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_14: 354,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_15: 355,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_16: 356,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_17: 357,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_18: 358,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_19: 359,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_20: 360,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_21: 361,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_22: 362,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_23: 363,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_24: 364,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_25: 365,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_26: 366,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_27: 367,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_28: 368,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_29: 369,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_30: 370,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_31: 371,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_32: 372,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_33: 373,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_34: 374,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_35: 375,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_36: 376,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_37: 377,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_38: 378,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_39: 379,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_40: 380,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_41: 381,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_42: 382,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_43: 383,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_44: 384,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_45: 385,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_46: 386,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_47: 387,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_48: 388,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_49: 389,
        GHOST_OWL_GENERIC_CALL_TO_ACTION_BUTTON_50: 390,
        AGGREGATED_STORY: 391,
        WORK_GALAHAD_NAV_ITEM: 400,
        WORK_GALAHAD_TAB_HOME: 401,
        WORK_GALAHAD_TAB_NOTIFICATIONS: 402,
        WORK_GALAHAD_TAB_CHATS: 403,
        WORK_GALAHAD_TAB_PROFILE: 404,
        WORK_GALAHAD_LIST_SHORTCUTS: 405,
        WORK_GALAHAD_LIST_GROUPS: 406,
        WORK_GALAHAD_LIST_PEOPLE: 407,
        WORK_GALAHAD_TAB_ADMIN_PANEL: 408,
        WORK_GALAHAD_TAB_RESELLER_CONSOLE: 409,
        HSCROLL_LEFT_ARROW: 410,
        HSCROLL_RIGHT_ARROW: 411,
        GET_SHOWTIMES_CALL_TO_ACTION: 412,
        INTERESTED_CALL_TO_ACTION: 413,
        OTHER_CALL_TO_ACTION: 414,
        WORK_GALAHAD_TAB_DIRECT: 415,
        WORK_GALAHAD_LIST_BOTS: 416,
        INTERACTIVE_POLL_OPTION: 417,
        INTERACTIVE_POLL_BACKGROUND_CARD: 418,
        HSCROLL_PREVIOUS_BUTTON: 419,
        HSCROLL_NEXT_BUTTON: 420,
        WORK_GALAHAD_TAB_MEETING: 421,
        WORK_GALAHAD_LIST_SEE_FIRST_GROUPS: 422,
        AR_ADS_CTA: 423,
        PBIA_PROFILE: 424,
        PRODUCT_TAG: 425,
        WAM_ENTRY_POINT: 426,
        WORK_GALAHAD_TAB_CALL: 427,
        WORK_GALAHAD_TAB_FILES: 428,
        VIEW_PRODUCTS: 429,
        USER_TAG: 430,
        VIDEO_VIEWER_LIST: 431,
        PRODUCT_DETAIL_PAGE: 432,
        SHOPPING_SHEET_BUTTON: 433,
        WORK_TEAMWORK_TAB_SEARCH: 434,
        WORK_TEAMWORK_TAB_EXPLORE: 435,
        WORK_GALAHAD_TAB_TOOLS: 436,
        WORK_GALAHAD_TAB_VC: 437,
        INSTAGRAM_EXPLORE: 438,
        REMINDER_AD_CTA_BUTTON: 439,
        CTC_POST_CLICK_CTA: 440,
        KNOWLEDGE_NOTE: 441,
        WORK_GALAHAD_TAB_TRANSCRIPT: 442,
        WORKPLATFORM_TAB: 443,
        FB_SHOPS_PRODUCT: 444,
        FB_SHOPS_FOOTER: 445,
        WORK_GARDEN_TAB_HOME: 446,
        KNOWLEDGE_COLLECTION: 447
    });
    e.exports = a
}
), null);
__d("TrackingNodes", ["DataAttributeUtils", "TrackingNodeConstants", "TrackingNodeTypes", "encodeTrackingNode"], (function(a, b, c, d, e, f) {
    var g = {
        types: b("TrackingNodeTypes"),
        BASE_CODE_START: (a = b("TrackingNodeConstants")).BASE_CODE_START,
        BASE_CODE_END: a.BASE_CODE_END,
        BASE_CODE_SIZE: a.BASE_CODE_SIZE,
        PREFIX_CODE_START: a.PREFIX_CODE_START,
        PREFIX_CODE_END: a.PREFIX_CODE_END,
        PREFIX_CODE_SIZE: a.PREFIX_CODE_SIZE,
        ENCODE_NUMBER_MAX: a.ENCODE_NUMBER_MAX,
        TN_URL_PARAM: a.TN_URL_PARAM,
        encodeTN: b("encodeTrackingNode"),
        decodeTN: function(a) {
            if (a.length === 0)
                return [0];
            var b = a.charCodeAt(0), c = 1, d, e;
            if (b >= g.PREFIX_CODE_START && b <= g.PREFIX_CODE_END) {
                if (a.length == 1)
                    return [0];
                e = b - g.PREFIX_CODE_START + 1;
                d = a.charCodeAt(1);
                c = 2
            } else
                e = 0,
                d = b;
            if (d < g.BASE_CODE_START || d > g.BASE_CODE_END)
                return [0];
            b = e * g.BASE_CODE_SIZE + (d - g.BASE_CODE_START) + 1;
            if (a.length > c + 2 && a.charAt(c) === "#" && a.charAt(c + 1) >= "0" && a.charAt(c + 1) <= "9" && a.charAt(c + 2) >= "0" && a.charAt(c + 2) <= "9")
                return [c + 3, [b, parseInt(a.charAt(c + 1) + a.charAt(c + 2), 10) + 1]];
            return a.length > c && a.charAt(c) >= "0" && a.charAt(c) <= "9" ? [c + 1, [b, parseInt(a.charAt(c), 10) + 1]] : [c, [b]]
        },
        parseTrackingNodeString: function(a) {
            var b = [];
            while (a.length > 0) {
                var c = g.decodeTN(a);
                if (c.length == 1)
                    return [];
                b.push(c[1]);
                a = a.substring(c[0])
            }
            return b
        },
        getTrackingInfo: function(a, b) {
            return '{"tn":"' + g.encodeTN(a, b) + '"}'
        },
        addDataAttribute: function(a, c, d) {
            if (c === void 0)
                return;
            ["data-ft", "data-gt"].forEach(function(e) {
                var f;
                if (a.getAttribute)
                    f = b("DataAttributeUtils").getDataAttribute(a, e) || "{}";
                else if (a.props)
                    f = a.props[e] || "{}";
                else
                    return;
                var h = g.encodeTN(c, d);
                try {
                    f = JSON.parse(f);
                    if (f.tn && f.tn === h)
                        return;
                    f.tn = h;
                    if (a.setAttribute)
                        a.setAttribute(e, JSON.stringify(f));
                    else if (a.props)
                        a.props[e] = JSON.stringify(f);
                    else
                        return
                } catch (a) {}
            })
        }
    };
    e.exports = g
}
), null);
__d("getAggregatedStoryTrackingNodeIndex", ["TrackingNodes"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("TrackingNodes").parseTrackingNodeString;
    function a(a) {
        a = g(a.join(""));
        var b = 0;
        for (var c = 0; c < a.length; c++)
            if (a[c][0] === 340 && a[c].length > 1) {
                b = a[c][1];
                return b
            }
        return b
    }
}
), null);
__d("useVideoPlayerPortalingPassthroughProps", ["React", "VideoPlayerPortalingPlaceInfoProvider.react", "VideoPlayerViewabilityHooks"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a() {
        var a = b("VideoPlayerPortalingPlaceInfoProvider.react").useVideoPlayerPortalingPlaceInfo()
          , c = a.currentVideoID
          , d = a.thisPlaceID;
        a = b("VideoPlayerViewabilityHooks").useVideoPlayerViewabilityInfo();
        var e = a ? a.positionToViewport : null;
        a = g.useMemo(function() {
            return {
                portableVideoID: c,
                portalingPlaceID: d,
                positionToViewport: e
            }
        }, [c, e]);
        return a
    }
}
), null);
__d("CometWatchAndScrollTriggerContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = {
        isControlShown: !1,
        setIsControlShown: null
    };
    d = a.createContext(c);
    e.exports = d
}
), null);
__d("useWatchAndScrollTrigger", ["CometSetWatchAndScrollVideoContext", "React", "VideoPlayerHooks", "recoverableViolation", "usePlayerOriginRouteTracePolicy", "useVideoPlayerPortalingPassthroughProps"], (function(a, b, c, d, e, f) {
    "use strict";
    f.useWatchAndScrollTrigger = a;
    var g = b("React");
    function a(a, c) {
        var d = b("useVideoPlayerPortalingPassthroughProps")()
          , e = b("usePlayerOriginRouteTracePolicy")()
          , f = b("VideoPlayerHooks").useController()
          , h = g.useContext(b("CometSetWatchAndScrollVideoContext"))
          , i = g.useCallback(function() {
            var g = d.portableVideoID
              , i = d.portalingPlaceID;
            g != null && i != null ? h({
                controller: f,
                portableVideoID: g,
                portalingPlaceID: i,
                routeTracePolicy: e,
                subOrigin: a,
                videoID: c
            }) : b("recoverableViolation")("Could not transition to Watch and Scroll player because portableVideoID was null", "comet_video_player")
        }, [d, h, f, e, a, c]);
        return i
    }
}
), null);
__d("ContentAccessAndControlEventType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        CLICK_BEGIN: "content_access_and_control_click_begin",
        IMPRESSION: "content_access_and_control_impression",
        IS_ELIGIBLE: "content_access_and_control_is_eligible",
        LOAD_OPTION: "content_access_and_control_load_option",
        SERVER_MUTATION_BEGIN: "content_access_and_control_mutation_begin",
        SERVER_MUTATION_FAILURE: "content_access_and_control_mutation_failure",
        SERVER_MUTATION_SUCCESS: "content_access_and_control_mutation_success"
    });
    e.exports = a
}
), null);
__d("XArticleContextMainDialogController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/feed/article_context/dialog/", {
        share_id: {
            type: "String",
            required: !0
        },
        entry_type: {
            type: "Enum",
            required: !0,
            enumType: 1
        },
        trigger_log_id: {
            type: "String"
        },
        ft_msg: {
            type: "String"
        },
        __asyncDialog: {
            type: "Int"
        }
    })
}
), null);
__d("VideoBroadcastStatus", [], (function(a, b, c, d, e, f) {
    e.exports = {
        PREVIEW: "PREVIEW",
        LIVE: "LIVE",
        LIVE_STOPPED: "LIVE_STOPPED",
        VOD_READY: "VOD_READY",
        SEAL_STARTED: "SEAL_STARTED",
        SCHEDULED_PREVIEW: "SCHEDULED_PREVIEW",
        SCHEDULED_LIVE: "SCHEDULED_LIVE",
        SCHEDULED_EXPIRED: "SCHEDULED_EXPIRED",
        SCHEDULED_CANCELED: "SCHEDULED_CANCELED",
        PRE_LIVE: "PRE_LIVE",
        SEAL_FAILED: "SEAL_FAILED"
    }
}
), null);
__d("XCometVideoControllerRouteBuilder", ["jsRouteBuilder"], (function(a, b, c, d, e, f) {
    a = b("jsRouteBuilder")("/{page_token}/videos/{?set}/{story_token}/", Object.freeze({}), void 0);
    c = a;
    e.exports = c
}
), null);
__d("CometFeedStoryMenuQuery$Parameters", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        kind: "PreloadableConcreteRequest",
        params: {
            id: "4011909482158044",
            metadata: {
                relayPreloadable: !0
            },
            name: "CometFeedStoryMenuQuery",
            operationKind: "query",
            text: null
        }
    };
    e.exports = a
}
), null);
__d("CometFeedStoryAudienceSection_story.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [{
            kind: "RootArgument",
            name: "renderLocation"
        }],
        kind: "Fragment",
        metadata: null,
        name: "CometFeedStoryAudienceSection_story",
        selections: [{
            alias: null,
            args: [{
                kind: "Variable",
                name: "location",
                variableName: "renderLocation"
            }],
            concreteType: "CometStorySections",
            kind: "LinkedField",
            name: "comet_sections",
            plural: !1,
            selections: [{
                alias: null,
                args: [{
                    kind: "Literal",
                    name: "supported",
                    value: ["CometFeedStoryPrivacySelectorStrategy", "CometFeedStoryAudienceStrategy"]
                }],
                concreteType: null,
                kind: "LinkedField",
                name: "audience",
                plural: !1,
                selections: [{
                    kind: "InlineFragment",
                    selections: [{
                        documentName: "CometFeedStoryAudienceSection_story",
                        fragmentName: "CometFeedStoryPrivacySelectorStrategy_audience",
                        fragmentPropName: "audience",
                        kind: "ModuleImport"
                    }],
                    type: "CometFeedStoryPrivacySelectorStrategy",
                    abstractKey: null
                }, {
                    kind: "InlineFragment",
                    selections: [{
                        documentName: "CometFeedStoryAudienceSection_story",
                        fragmentName: "CometFeedStoryAudienceStrategy_audience",
                        fragmentPropName: "audience",
                        kind: "ModuleImport"
                    }],
                    type: "CometFeedStoryAudienceStrategy",
                    abstractKey: null
                }],
                storageKey: 'audience(supported:["CometFeedStoryPrivacySelectorStrategy","CometFeedStoryAudienceStrategy"])'
            }],
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "encrypted_tracking",
            storageKey: null
        }],
        type: "Story",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("CometFeedStoryPaidPartnershipLabelSection_story.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [{
            kind: "RootArgument",
            name: "renderLocation"
        }],
        kind: "Fragment",
        metadata: null,
        name: "CometFeedStoryPaidPartnershipLabelSection_story",
        selections: [{
            alias: null,
            args: [{
                kind: "Variable",
                name: "location",
                variableName: "renderLocation"
            }],
            concreteType: "CometStorySections",
            kind: "LinkedField",
            name: "comet_sections",
            plural: !1,
            selections: [{
                alias: null,
                args: [{
                    kind: "Literal",
                    name: "supported",
                    value: ["CometStoryPaidPartnershipLabelStrategy"]
                }],
                concreteType: null,
                kind: "LinkedField",
                name: "paid_partnership_label",
                plural: !1,
                selections: [{
                    kind: "InlineFragment",
                    selections: [{
                        documentName: "CometFeedStoryPaidPartnershipLabelSection_story",
                        fragmentName: "CometFeedStoryPaidPartnershipLabelStrategy_paidPartnershipLabel",
                        fragmentPropName: "paidPartnershipLabel",
                        kind: "ModuleImport"
                    }],
                    type: "CometStoryPaidPartnershipLabelStrategy",
                    abstractKey: null
                }],
                storageKey: 'paid_partnership_label(supported:["CometStoryPaidPartnershipLabelStrategy"])'
            }],
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "encrypted_tracking",
            storageKey: null
        }],
        type: "Story",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("CometFeedStorySponsoredLabelSection_story.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [{
            kind: "RootArgument",
            name: "renderLocation"
        }],
        kind: "Fragment",
        metadata: null,
        name: "CometFeedStorySponsoredLabelSection_story",
        selections: [{
            alias: null,
            args: [{
                kind: "Variable",
                name: "location",
                variableName: "renderLocation"
            }],
            concreteType: "CometStorySections",
            kind: "LinkedField",
            name: "comet_sections",
            plural: !1,
            selections: [{
                alias: null,
                args: [{
                    kind: "Literal",
                    name: "supported",
                    value: ["CometStorySponsoredLabelStrategy", "CometStorySponsoredPoliticalLabelStrategy"]
                }],
                concreteType: null,
                kind: "LinkedField",
                name: "sponsored_label",
                plural: !1,
                selections: [{
                    kind: "InlineFragment",
                    selections: [{
                        documentName: "CometFeedStorySponsoredLabelSection_story",
                        fragmentName: "CometFeedStorySponsoredLabelStrategy_sponsoredLabel",
                        fragmentPropName: "sponsoredLabel",
                        kind: "ModuleImport"
                    }],
                    type: "CometStorySponsoredLabelStrategy",
                    abstractKey: null
                }, {
                    kind: "InlineFragment",
                    selections: [{
                        documentName: "CometFeedStorySponsoredLabelSection_story",
                        fragmentName: "CometFeedStorySponsoredPoliticalLabelStrategy_sponsoredLabel",
                        fragmentPropName: "sponsoredLabel",
                        kind: "ModuleImport"
                    }],
                    type: "CometStorySponsoredPoliticalLabelStrategy",
                    abstractKey: null
                }],
                storageKey: 'sponsored_label(supported:["CometStorySponsoredLabelStrategy","CometStorySponsoredPoliticalLabelStrategy"])'
            }],
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "encrypted_tracking",
            storageKey: null
        }],
        type: "Story",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("ContentAccessAndControlFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743465");
    c = b("FalcoLoggerInternal").create("content_access_and_control", a);
    e.exports = c
}
), null);
__d("CometActivityLogUtils", ["ContentAccessAndControlFalcoEvent", "XCometActivityLogControllerRouteBuilder"], (function(a, b, c, d, e, f) {
    "use strict";
    f.isCategoryKeyArchiveOrTrash = a;
    f.currentActivityLogStore = g;
    f.setCurrentStoreHasNewItems = c;
    f.getStoreKeyForArchive = d;
    f.getStoreKeyForTrash = e;
    f.getStoreKeyForLog = h;
    f.getStoreKeyForManage = i;
    f.getCategoryKeyForArchive = j;
    f.getCategoryKeyForTrash = k;
    f.getCategoryKeyForAll = l;
    f.getCategoryKeyForTimelineReview = m;
    f.getCategoryKeyForTagReview = n;
    f.getCategoryKeyForPhotoReview = o;
    f.getStoryRenderLocationKeyForTimeline = p;
    f.getStoryRenderLocationKeyForHomepage = q;
    f.getActionTypeForHideFromTimeline = r;
    f.maybeLogControl = s;
    f.getPrivacyLoggingSourceFromStoryRenderLocation = t;
    f.onArchivePage = u;
    f.onTrashPage = v;
    function a(a) {
        return a !== j() && a !== k() ? !1 : !0
    }
    function g(a, b) {
        switch (a) {
        case j():
            return b.archiveStore;
        case k():
            return b.trashStore;
        default:
            return b.logStore
        }
    }
    function c(a, c, d, e, f, h) {
        var i = Date.now().toString()
          , j = function() {
            d(babelHelpers["extends"]({}, c, {
                archiveStore: babelHelpers["extends"]({}, c.archiveStore, {
                    hasNewItems: e,
                    lastRefreshTime: i
                })
            }))
        }
          , k = function() {
            d(babelHelpers["extends"]({}, c, {
                trashStore: babelHelpers["extends"]({}, c.trashStore, {
                    hasNewItems: e,
                    lastRefreshTime: i
                })
            }))
        }
          , l = function() {
            d(babelHelpers["extends"]({}, c, {
                logStore: babelHelpers["extends"]({}, c.logStore, {
                    hasNewItems: e,
                    lastRefreshTime: i
                })
            }))
        };
        switch (a) {
        case "ARCHIVE":
            j();
            break;
        case "TRASH":
            k();
            break;
        case "LOG":
            l();
            break;
        case "MANAGE":
            break
        }
        h != null && b("XCometActivityLogControllerRouteBuilder").buildURL({
            lastRefreshTime: g(h, c).lastRefreshTime,
            vanity: f
        })
    }
    function d() {
        return "ARCHIVE"
    }
    function e() {
        return "TRASH"
    }
    function h() {
        return "LOG"
    }
    function i() {
        return "MANAGE"
    }
    function j() {
        return "ARCHIVED"
    }
    function k() {
        return "TRASH"
    }
    function l() {
        return "ALL"
    }
    function m() {
        return "review"
    }
    function n() {
        return "tagreview"
    }
    function o() {
        return "facealerts"
    }
    function p() {
        return "timeline"
    }
    function q() {
        return "homepage_stream"
    }
    function r() {
        return "HIDE_FROM_TIMELINE"
    }
    function s(a, c, d) {
        a != null && (a === p() || a === q()) && b("ContentAccessAndControlFalcoEvent").log(function() {
            return {
                control: d,
                event: c,
                is_access: !1,
                is_bulk: !1,
                is_control: !0,
                surface: t(a)
            }
        })
    }
    function t(a) {
        return a === p() ? "post_chevron_menu_timeline" : "post_chevron_menu_news_feed"
    }
    function u(a) {
        return a === j()
    }
    function v(a) {
        return a === k()
    }
}
), null);
__d("CometFeedAttachmentOverlayContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    f.CometFeedAttachmentOverlayContextProvider = a;
    f.useHasOverlay = c;
    f.useIsOverlayShown = i;
    f.useIsContentVisibleDespiteOverlay = j;
    f.useIsContentVisible = d;
    f.useParentRenderInstructions = e;
    f.useShowOverlay = k;
    f.useMakeContentVisibleDespiteOverlay = l;
    f.useSetOverlayExists = m;
    f.useSetParentRenderInstructions = n;
    var g = b("React")
      , h = g.createContext({
        makeContentVisibleDespiteOverlay: function() {},
        overlaySettings: {
            isContentVisibleDespiteOverlay: null,
            overlayExists: !1,
            overlayShown: !1,
            parentRenderInstructions: "CLIP_TO_MEDIA"
        },
        setOverlayExists: function() {},
        setParentRenderInstructions: function() {},
        showOverlay: function() {}
    });
    function a(a) {
        var b = a.children
          , c = a.overlayExists;
        a = a.overlayShownOverride;
        a = g.useState({
            isContentVisibleDespiteOverlay: null,
            overlayExists: c,
            overlayShown: (a = a) != null ? a : c,
            parentRenderInstructions: "CLIP_TO_MEDIA"
        });
        var d = a[0]
          , e = a[1]
          , f = g.useCallback(function(a) {
            e(function(b) {
                return babelHelpers["extends"]({}, b, {
                    overlayShown: a
                })
            })
        }, [])
          , i = g.useCallback(function(a) {
            e(function(b) {
                return babelHelpers["extends"]({}, b, {
                    isContentVisibleDespiteOverlay: a
                })
            })
        }, [])
          , j = g.useCallback(function(a) {
            e(function(b) {
                return babelHelpers["extends"]({}, b, {
                    overlayExists: a
                })
            })
        }, [])
          , k = g.useCallback(function(a) {
            e(function(b) {
                return babelHelpers["extends"]({}, b, {
                    parentRenderInstructions: a
                })
            })
        }, []);
        c = g.useMemo(function() {
            return {
                makeContentVisibleDespiteOverlay: i,
                overlaySettings: d,
                setOverlayExists: j,
                setParentRenderInstructions: k,
                showOverlay: f
            }
        }, [d, f, i, j, k]);
        return g.jsx(h.Provider, {
            value: c,
            children: b
        })
    }
    function c() {
        var a = g.useContext(h);
        a = a.overlaySettings;
        return a.overlayExists
    }
    function i() {
        var a = g.useContext(h);
        a = a.overlaySettings;
        return a.overlayShown
    }
    function j() {
        var a = g.useContext(h);
        a = a.overlaySettings;
        return a.isContentVisibleDespiteOverlay
    }
    function d() {
        var a = i()
          , b = j();
        return !a ? !0 : b
    }
    function e() {
        var a = g.useContext(h);
        a = a.overlaySettings;
        return a.parentRenderInstructions
    }
    function k() {
        var a = g.useContext(h);
        a = a.showOverlay;
        return a
    }
    function l() {
        var a = g.useContext(h);
        a = a.makeContentVisibleDespiteOverlay;
        return a
    }
    function m() {
        var a = g.useContext(h);
        a = a.setOverlayExists;
        return a
    }
    function n() {
        var a = g.useContext(h);
        a = a.setParentRenderInstructions;
        return a
    }
}
), null);
__d("CometFeedStoryMenu.entrypoint", ["JSResourceForInteraction", "WebPixelRatio", "CometFeedStoryMenuQuery$Parameters"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        getPreloadProps: function(a) {
            var c = a.feedLocation
              , d = a.id
              , e = a.serializedFRTPIdentifiers;
            a = a.storyDebugInfo;
            return {
                queries: {
                    menuQueryReference: {
                        parameters: b("CometFeedStoryMenuQuery$Parameters"),
                        variables: {
                            feed_location: c,
                            id: d,
                            scale: b("WebPixelRatio").get(),
                            serialized_frtp_identifiers: e,
                            story_debug_info: a
                        }
                    }
                }
            }
        },
        root: b("JSResourceForInteraction")("CometFeedStoryMenu.react").__setRef("CometFeedStoryMenu.entrypoint")
    };
    e.exports = a
}
), null);
__d("CometFeedStoryAudienceSection.react", ["CometFeedMatchRenderer.react", "CometRelay", "React", "CometFeedStoryAudienceSection_story.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React");
    function a(a) {
        var c, d = a.privacySelectorRenderLocation;
        a = a.story;
        a = b("CometRelay").useFragment(g !== void 0 ? g : g = b("CometFeedStoryAudienceSection_story.graphql"), a);
        return h.jsx(b("CometFeedMatchRenderer.react"), {
            match: (c = a.comet_sections) == null ? void 0 : c.audience,
            props: {
                privacySelectorRenderLocation: d
            },
            section: "audience",
            trackingData: a == null ? void 0 : a.encrypted_tracking
        })
    }
}
), null);
__d("CometFeedStoryMenuSectionBase.react", ["CometActivityLogUtils", "CometEntryPointPopoverTrigger.react", "CometFeedStoryMenu.entrypoint", "CometStoryRenderLocationContext.react", "CometTrackingNodeProvider.react", "ProfileCometContext", "React", "requireDeferred"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React")
      , h = b("requireDeferred")("ContentAccessAndControlEventType")
      , i = b("requireDeferred")("ContentAccessAndControlFalcoEvent");
    function a(a) {
        var c = a.feedLocation
          , d = a.id
          , e = a.outerWrapperRenderer
          , f = a.popoverPosition
          , j = a.serializedFRTPIdentifiers
          , k = a.storyDebugInfo
          , l = a.triggerChildRenderer;
        a = a.variables;
        var m = g.useContext(b("ProfileCometContext"));
        m = m.isInViewAs;
        var n = g.useContext(b("CometStoryRenderLocationContext.react"));
        if (d == null)
            return null;
        if (c === "GROUP_ADMIN_TO_MEMBER_FEEDBACK")
            return null;
        if (m)
            return null;
        j = g.jsx(b("CometTrackingNodeProvider.react"), {
            trackingNode: 55,
            children: g.jsx(b("CometEntryPointPopoverTrigger.react"), {
                align: "end",
                entryPointParams: {
                    feedLocation: c,
                    id: d,
                    serializedFRTPIdentifiers: j,
                    storyDebugInfo: k
                },
                otherProps: {
                    feedLocation: c,
                    variables: a
                },
                popoverEntryPoint: b("CometFeedStoryMenu.entrypoint"),
                popoverType: "menu",
                position: (m = f) != null ? m : "below",
                preloadTrigger: "button",
                tracePolicy: "comet.feed.story.menu",
                children: function(a, c, e, f, g, j) {
                    return l({
                        contextRef: a,
                        id: d,
                        onHoverInPrerenderer: f,
                        onHoverOutPrerenderer: g,
                        onPress: function() {
                            (n === b("CometActivityLogUtils").getStoryRenderLocationKeyForTimeline() || n === b("CometActivityLogUtils").getStoryRenderLocationKeyForHomepage()) && i.onReady(function(a) {
                                var c = h.getModuleIfRequireable();
                                if (c == null)
                                    return;
                                a.log(function() {
                                    return {
                                        event: c.IMPRESSION,
                                        is_access: !0,
                                        is_bulk: !1,
                                        is_control: !1,
                                        surface: b("CometActivityLogUtils").getPrivacyLoggingSourceFromStoryRenderLocation(n)
                                    }
                                })
                            }),
                            c()
                        },
                        onPressInPrerenderer: j
                    })
                }
            })
        });
        return e != null ? e({
            contents: j
        }) : j
    }
}
), null);
__d("CometFeedStoryMenuSection.react", ["ix", "fbt", "CometFeedStoryMenuSectionBase.react", "React", "TetraIcon.react", "fbicon", "stylex"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i, j = b("React"), k = {
        root: {
            alignSelf: "nqmvxvec",
            display: "j83agx80",
            height: "jnigpg78",
            paddingTop: "cxgpxx05",
            paddingEnd: "dflh9lhu",
            paddingBottom: "sj5x9vvc",
            paddingStart: "scb9dxdr",
            width: "odw8uiq3"
        }
    }, l = j.forwardRef(function(a, c) {
        var d = a.additionalOnPressHandler
          , e = a.onPress;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["additionalOnPressHandler", "onPress"]);
        var f = j.useCallback(function(a) {
            d && d(),
            e && e(a)
        }, [d, e]);
        return j.jsx(b("TetraIcon.react"), babelHelpers["extends"]({}, a, {
            onPress: f,
            ref: c
        }))
    });
    function a(a) {
        var c = a.additionalOnPressHandler
          , d = a.color
          , e = a.xstyle;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["additionalOnPressHandler", "color", "xstyle"]);
        var f = j.useCallback(function(a) {
            var e, f = a.contextRef, i = a.id;
            i = a.onHoverInPrerenderer;
            var k = a.onHoverOutPrerenderer
              , m = a.onPress;
            a = a.onPressInPrerenderer;
            return j.jsx(l, {
                additionalOnPressHandler: c,
                "aria-label": h._("H\u00e0nh \u0111\u1ed9ng v\u1edbi b\u00e0i vi\u1ebft n\u00e0y"),
                color: (e = d) != null ? e : "secondary",
                icon: b("fbicon")._(g("484387"), 20),
                onHoverIn: i,
                onHoverOut: k,
                onPress: m,
                onPressIn: a,
                ref: f,
                testid: void 0
            })
        }, [c, d])
          , m = j.useCallback(function(a) {
            a = a.contents;
            return j.jsx("div", {
                className: (i || (i = b("stylex")))(k.root, e),
                children: a
            })
        }, [e]);
        return j.jsx(b("CometFeedStoryMenuSectionBase.react"), babelHelpers["extends"]({
            outerWrapperRenderer: m,
            triggerChildRenderer: f
        }, a))
    }
}
), null);
__d("CometFeedStoryPaidPartnershipLabelSection.react", ["CometFeedMatchRenderer.react", "CometRelay", "React", "CometFeedStoryPaidPartnershipLabelSection_story.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React");
    function a(a) {
        var c;
        a = b("CometRelay").useFragment(g !== void 0 ? g : g = b("CometFeedStoryPaidPartnershipLabelSection_story.graphql"), a.story);
        return h.jsx(b("CometFeedMatchRenderer.react"), {
            match: a == null ? void 0 : (c = a.comet_sections) == null ? void 0 : c.paid_partnership_label,
            section: "paid_partnership_label",
            trackingData: a == null ? void 0 : a.encrypted_tracking
        })
    }
}
), null);
__d("CometFeedStorySponsoredLabelSection.react", ["CometFeedMatchRenderer.react", "CometRelay", "React", "CometFeedStorySponsoredLabelSection_story.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React");
    function a(a) {
        var c;
        a = b("CometRelay").useFragment(g !== void 0 ? g : g = b("CometFeedStorySponsoredLabelSection_story.graphql"), a.story);
        return h.jsx(b("CometFeedMatchRenderer.react"), {
            match: a == null ? void 0 : (c = a.comet_sections) == null ? void 0 : c.sponsored_label,
            section: "sponsored_label",
            trackingData: a == null ? void 0 : a.encrypted_tracking
        })
    }
}
), null);
__d("useFeedClickEventHandler", ["React", "useStoryClickEventLogger"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a, c) {
        var d = b("useStoryClickEventLogger")();
        return g.useCallback(function(b) {
            a && a(b);
            var e = b.type;
            if (e === "click" || e === "contextmenu" || e === "mousedown" && typeof b.button === "number" && (b.button === 1 || b.button === 2) || e === "keydown" && (b.key === "Enter" || b.key === " ")) {
                e = typeof b.button === "number" ? b.button : 0;
                d(b.timeStamp, e, c)
            }
        }, [a, d, c])
    }
}
), null);
__d("CometTrackingCodeProvider.react", ["CometTrackingCodeContext", "React", "shallowEqual"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a) {
        var c = a.children;
        a = a.trackingCode;
        var d = g.useRef({
            click_tracking_linkshim_cb: "",
            encrypted_click_tracking: "",
            encrypted_tracking: ""
        });
        b("shallowEqual")(d.current, a) || (d.current = a);
        var e = g.useContext(b("CometTrackingCodeContext"));
        a = g.useMemo(function() {
            var a = {
                click_tracking_linkshim_cb: e.click_tracking_linkshim_cb,
                encrypted_click_tracking: e.encrypted_click_tracking,
                encrypted_tracking: e.encrypted_tracking
            };
            for (var b in a)
                d.current[b] && d.current[b] !== "" && (a[b] = [].concat(a[b], [d.current[b]]));
            return a
        }, [e]);
        return g.jsx(b("CometTrackingCodeContext").Provider, {
            value: a,
            children: c
        })
    }
    c = g.memo(a);
    e.exports = c
}
), null);
__d("CometIsInNotificationsContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext(!1);
    e.exports = c
}
), null);
__d("CometUFIVideoPlayerUtils", ["CometUFIVideoPlayerContext", "React", "VideoPlayerHooks", "recoverableViolation", "useCometUFIVideoPlayerStateAndController"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    f = b("React");
    var h = f.useCallback
      , i = f.useContext
      , j = f.useEffect
      , k = f.useMemo
      , l = f.useState
      , m = b("VideoPlayerHooks").useController;
    function a(a) {
        a = a.children;
        var c = l(null)
          , d = k(function() {
            return c
        }, [c]);
        return g.jsx(b("CometUFIVideoPlayerContext").Provider, {
            value: d,
            children: a
        })
    }
    function c(a) {
        var c = a.data
          , d = m();
        a = i(b("CometUFIVideoPlayerContext"));
        a[0];
        var e = a[1];
        j(function() {
            e({
                controller: d,
                data: c
            })
        }, [d, c, e]);
        return null
    }
    function d() {
        var a = b("useCometUFIVideoPlayerStateAndController")();
        return h(function() {
            if (a == null) {
                b("recoverableViolation")("useGetCometUFIVideoPlayerTimestampInteger: Video Player is null, please make sure you are using the provider and extractors in CometUFIVideoPlayerUtils to get the video timestamp correctly", "comet_live_video");
                return null
            }
            var c = a.controller.getPlayheadPosition();
            if (c == null) {
                b("recoverableViolation")("useGetCometUFIVideoPlayerTimestampInteger: Timestamp is null, please make sure you are using the provider and extractors in CometUFIVideoPlayerUtils to get the video timestamp correctly", "comet_live_video");
                return null
            }
            return Math.floor(c)
        }, [a])
    }
    e.exports = {
        CometUFIVideoPlayerStateAndControllerContextProvider: a,
        CometUFIVideoPlayerStateAndControllerExtractor: c,
        useCometUFIVideoPlayerStateAndController: b("useCometUFIVideoPlayerStateAndController"),
        useGetCometUFIVideoPlayerTimestampInteger: d
    }
}
), null);
__d("VideoPlayerInteractionOverlay.react", ["React", "VideoPlayerHooks", "createVideoStateHook", "performanceNow", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i = b("React"), j = {
        hiddenCursor: {
            cursor: "sorcqhzv"
        },
        pointer: {
            cursor: "nhd2j8a9"
        },
        root: {
            bottom: "i09qtzwb",
            boxSizing: "rq0escxv",
            end: "n7fi1qx3",
            position: "pmk7jnqg",
            start: "j9ispegn",
            top: "kr520xx4"
        }
    };
    c = b("createVideoStateHook").createVideoStateHook(null);
    var k = c.setterHook;
    d = c.valueHook;
    function a(a, c) {
        var d = a.children
          , e = a.pressInteraction;
        a = a.xstyle;
        var f = k()
          , l = i.useCallback(function(a) {
            a.preventDefault(),
            f({
                left: a.clientX,
                time: (g || (g = b("performanceNow")))(),
                top: a.clientY
            })
        }, [f])
          , m = e == null ? void 0 : e.handler
          , n = e == null ? void 0 : e.onPressStart
          , o = e == null ? void 0 : e.onMouseEnter;
        e = e == null ? void 0 : e.onMouseLeave;
        var p = b("VideoPlayerHooks").useIsFullscreen()
          , q = b("VideoPlayerHooks").useIsMouseIdle();
        return i.jsx("div", {
            className: (h || (h = b("stylex")))(j.root, !!m && j.pointer, p && q && j.hiddenCursor, a),
            onClick: m,
            onContextMenu: l,
            onMouseEnter: o,
            onMouseLeave: e,
            onPointerDown: n,
            ref: c,
            role: "presentation",
            children: d
        })
    }
    e = i.forwardRef(a);
    f.VideoPlayerInteractionOverlay = e;
    c = d;
    f.useLastRightClick = c
}
), null);
__d("VideoPlayerUserInteractionCounter", ["React", "unrecoverableViolation", "usePrevious"], (function(a, b, c, d, e, f) {
    "use strict";
    f.useVideoPlayerUserInteraction = a;
    f.useVideoPlayerUserInteractionCounter = c;
    var g = b("React");
    function a(a, c, d) {
        var e = g.useRef(a);
        g.useEffect(function() {
            if (a !== e.current)
                throw b("unrecoverableViolation")("User interaction name should not change between renders ('" + e.current + "' -> '" + a + "').", "comet_video_player")
        }, [a]);
        var f = g.useRef(d);
        g.useEffect(function() {
            f.current = d
        }, [d]);
        var h = b("usePrevious")(c)
          , i = g.useRef(!1);
        g.useEffect(function() {
            var a = e.current
              , b = f.current;
            b && ((h === null || c !== h) && (c ? (i.current = !0,
            b({
                name: a,
                type: "started"
            })) : h !== null && (i.current = !1,
            b({
                name: a,
                type: "ended"
            }))))
        }, [c, h]);
        g.useEffect(function() {
            var a = e.current
              , b = f.current;
            return function() {
                b && i.current && b({
                    name: a,
                    type: "ended"
                })
            }
        }, [])
    }
    function c() {
        var a = g.useRef(new Set())
          , b = g.useState(0)
          , c = b[0]
          , d = b[1];
        b = g.useCallback(function(b) {
            var c = a.current;
            b.type === "started" || b.type === "happening" ? (c.add(b.name),
            d(c.size)) : b.type === "ended" && (c["delete"](b.name),
            d(c.size))
        }, []);
        return {
            onUserInteraction: b,
            ongoingInteractionsCount: c
        }
    }
}
), null);
__d("VideoPlayerWithLiveVideoInterruptedOverlay.react", ["fbt", "CometLoadingAnimation.react", "React", "TetraTextPairing.react", "VideoPlayerHooks", "VideoPlayerInteractionOverlay.react", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a() {
        var a = b("VideoPlayerHooks").useStreamInterrupted()
          , c = b("VideoPlayerHooks").useIsLiveRewindActive();
        return !a || c ? null : h.jsx(b("VideoPlayerInteractionOverlay.react").VideoPlayerInteractionOverlay, {
            children: h.jsxs("div", {
                className: "taijpn5t cbu4d94t j83agx80 d6rk862h bp9cbjyn kr520xx4 j9ispegn pmk7jnqg n7fi1qx3 rq0escxv i09qtzwb",
                children: [h.jsx("div", {
                    children: h.jsx(b("TetraTextPairing.react"), {
                        body: g._("\u0110\u00e3 t\u1ea1m d\u1eebng ph\u00e1t. S\u1ebd s\u1edbm ti\u1ebfp t\u1ee5c tr\u1edf l\u1ea1i."),
                        bodyColor: "white",
                        headline: g._("Video tr\u1ef1c ti\u1ebfp b\u1ecb gi\u00e1n \u0111o\u1ea1n"),
                        headlineColor: "white",
                        level: 2,
                        textAlign: "center"
                    })
                }), h.jsx("div", {
                    className: "thwo4zme l9j0dhe7 jei6r52m tv7at329",
                    children: h.jsx(b("CometLoadingAnimation.react"), {
                        size: 36
                    })
                })]
            })
        })
    }
}
), null);
__d("useVideoPlayerControllerSubscription", ["React", "VideoPlayerHooks", "useLayoutEffect_SAFE_FOR_SSR"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = b("VideoPlayerHooks").useController()
          , d = g.useState(function() {
            return a(c, null)
        })
          , e = d[0]
          , f = d[1]
          , h = g.useRef(a);
        b("useLayoutEffect_SAFE_FOR_SSR")(function() {
            h.current = a
        }, [a]);
        g.useEffect(function() {
            f(function(a) {
                return h.current(c, a)
            });
            var a = c.subscribe(function() {
                f(function(a) {
                    return h.current(c, a)
                })
            });
            return function() {
                a.remove()
            }
        }, [c]);
        return e
    }
}
), null);
__d("CometFeedStoryIDContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    f.useCometFeedStoryIDContext = a;
    var g = b("React")
      , h = g.createContext(null);
    f.CometFeedStoryIDContext = h;
    function a() {
        return g.useContext(h)
    }
}
), null);
__d("VideoPlayerTracePolicyContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    f.useVideoPlayerTracePolicy = a;
    var g = b("React");
    c = {
        initialTracePolicy: null,
        routeTracePolicy: null
    };
    var h = g.createContext(c);
    f.VideoPlayerTracePolicyContext = h;
    function a() {
        return g.useContext(h)
    }
}
), null);
__d("usePlayerOriginRouteTracePolicy", ["CometIsInNotificationsContext", "CometRouteRenderType", "React", "useCometRouteTracePolicy", "useParentRoute"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a() {
        var a = g.useContext(b("CometIsInNotificationsContext"))
          , c = b("useCometRouteTracePolicy")()
          , d = b("CometRouteRenderType").useIsPushView()
          , e = b("useParentRoute")()
          , f = c === "comet.videos.tahoe"
          , h = c === "comet.stories.viewer";
        if (d) {
            if (f)
                return "unknown";
            if (h)
                return c
        }
        return a && !f ? c : (d = e == null ? void 0 : e.tracePolicy) != null ? d : c
    }
}
), null);
__d("VideoPlayerViewabilityHooks", ["VideoPlayerHooks"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("VideoPlayerHooks").useVideoPlayerPassiveViewabilityInfo;
    c = b("VideoPlayerHooks").useVideoPlayerViewabilityInfo;
    e.exports = {
        useVideoPlayerPassiveViewabilityInfo: a,
        useVideoPlayerViewabilityInfo: c
    }
}
), null);
__d("PlaybackSpeedExperiments", ["gkx", "qex"], (function(a, b, c, d, e, f) {
    "use strict";
    f.enableWwwPlaybackSpeedControl = a;
    f.enableCometPlaybackSpeedControl = c;
    f.enablePlaybackSpeedLogging = d;
    function g() {
        return b("gkx")("1755152")
    }
    function a() {
        return g() || b("qex")._("1732405")
    }
    function c() {
        return g() || b("qex")._("1732404")
    }
    function d() {
        return g() || b("qex")._("1732387")
    }
}
), null);
__d("XCometPageCreationControllerRouteBuilder", ["jsRouteBuilder"], (function(a, b, c, d, e, f) {
    a = b("jsRouteBuilder")("/pages/creation/", Object.freeze({
        should_lwi_redirect: !1
    }), void 0);
    c = a;
    e.exports = c
}
), null);
__d("XSISketchResultsControllerRouteBuilder", ["jsRouteBuilder"], (function(a, b, c, d, e, f) {
    a = b("jsRouteBuilder")("/sketch_results/", Object.freeze({}), void 0);
    c = a;
    e.exports = c
}
), null);
__d("CometOnBeforeUnloadDialog.react", ["fbt", "CometCardedDialog.react", "CometTrackingNodeProvider.react", "React", "TetraButtonGroup.react", "TetraText.react", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a(a) {
        var c = a.body
          , d = a.cancel
          , e = a.confirm
          , f = a.disabled;
        f = f === void 0 ? !1 : f;
        var i = a.onClose
          , j = a.onCloseButtonPress
          , k = a.primaryAction
          , l = a.secondaryAction;
        a = a.title;
        var m = function() {
            k(),
            i()
        }
          , n = function() {
            l(),
            i()
        };
        return h.jsx(b("CometTrackingNodeProvider.react"), {
            trackingNode: 163,
            children: h.jsxs(b("CometCardedDialog.react"), {
                onClose: function() {
                    j(),
                    i()
                },
                testid: void 0,
                title: a,
                titleHorizontalAlignment: "start",
                withCloseButton: !0,
                children: [h.jsx("div", {
                    className: "l9j0dhe7 dati1w0a f10w8fjw hv4rvrfc pybr56ya",
                    children: h.jsx(b("TetraText.react"), {
                        type: "body3",
                        children: c
                    })
                }), h.jsx("div", {
                    className: "a8nywdso ihqw7lf3 rz4wbd8a jb3vyjys bkfpd7mw btwxx1t3 j83agx80",
                    children: h.jsx(b("TetraButtonGroup.react"), {
                        direction: "backward",
                        paddingHorizontal: 16,
                        primary: {
                            disabled: f,
                            label: (a = e) != null ? a : g._("X\u00e1c nh\u1eadn"),
                            onPress: m,
                            testid: "CometOnBeforeUnloadDialogConfirmButton"
                        },
                        secondary: {
                            disabled: f,
                            label: (c = d) != null ? c : g._("H\u1ee7y"),
                            onPress: n,
                            reduceEmphasis: !0,
                            testid: "CometOnBeforeUnloadDialogCancelButton"
                        }
                    })
                })]
            })
        })
    }
}
), null);
__d("CometLinkTrackingUtils.workplace", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.decorateHrefWithTrackingInfo = a;
    function a(a, b, c) {
        return a
    }
}
), null);
__d("BaseToasterView.react", ["CometToasterStateManager", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = b("CometToasterStateManager").getInstance();
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.state = {
                visibleToasts: []
            },
            b) || babelHelpers.assertThisInitialized(c)
        }
        b.getDerivedStateFromProps = function(a, b) {
            b = b != null ? b.visibleToasts.slice(0, a.maxVisible) : [];
            var c = 0
              , d = a.filterToasts
              , e = a.toasterState
              , f = {}
              , g = d != null ? Object.keys(e).filter(function(a) {
                var b, c = e[a];
                f[a] = c;
                var g = c == null ? void 0 : c.shown;
                b = c == null ? void 0 : (b = c.value) == null ? void 0 : (b = b.type) == null ? void 0 : b.name;
                if (c == null || b == null)
                    return !0;
                if (d.has(b) && !g) {
                    h.expire(a);
                    return !1
                }
            }) : Object.keys(e)
              , i = b.reduce(function(a, b) {
                b != null && a.add(b.id);
                return a
            }, new Set())
              , j = 0;
            while (c < a.maxVisible) {
                var k = b[c]
                  , l = Object.keys(f).length > 0 ? f : a.toasterState;
                if (k != null) {
                    l = Object.prototype.hasOwnProperty.call(l, k.id);
                    if (l) {
                        l = e[k.id];
                        b[c] = {
                            expired: l.expired,
                            id: l.id,
                            toast: l.value
                        };
                        c++;
                        continue
                    } else
                        b[c] = null
                }
                k = null;
                while (k == null && j < g.length) {
                    l = g[j++];
                    var m = i.has(l);
                    m || (k = a.toasterState[l])
                }
                k != null && (b[c] = {
                    expired: k.expired,
                    id: k.id,
                    toast: k.value
                });
                c++
            }
            return {
                visibleToasts: b
            }
        }
        ;
        var c = b.prototype;
        c.render = function() {
            var a = this;
            return g.jsx("ul", {
                className: this.props.className,
                children: this.state.visibleToasts.map(function(b, c) {
                    return b != null ? a.props.children(b.toast, b.id, b.expired, c) : null
                })
            })
        }
        ;
        return b
    }(g.PureComponent);
    e.exports = a;
    a.defaultProps = {
        maxVisible: 1
    }
}
), null);
__d("CometUncaughtError.react", ["fbt", "CometContentArea.react", "NullStateGeneral", "React", "TetraNullState.react", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a() {
        return h.jsx("div", {
            className: "k4urcfbm poy2od1o taijpn5t nznu9b0o j83agx80 bp9cbjyn",
            children: h.jsx(b("CometContentArea.react"), {
                verticalAlign: "middle",
                children: h.jsx(b("TetraNullState.react"), {
                    headline: g._("R\u1ea5t ti\u1ebfc! \u0110\u00e3 x\u1ea3y ra l\u1ed7i :("),
                    icon: b("NullStateGeneral")
                })
            })
        })
    }
}
), null);
__d("TetraContextRowLink.react", ["CometLink.react", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.external;
        c = c === void 0 ? !1 : c;
        var d = a.linkProps
          , e = a.onPress;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["external", "linkProps", "onPress"]);
        d = (d = d) != null ? d : {};
        var f = d.url;
        d = babelHelpers.objectWithoutPropertiesLoose(d, ["url"]);
        d = babelHelpers["extends"]({}, d, {
            href: f
        });
        return g.jsx(b("CometLink.react"), babelHelpers["extends"]({}, a, d, {
            onClick: e,
            target: c ? "_blank" : void 0
        }))
    }
}
), null);
__d("TetraContextRowExternalLink.react", ["React", "TetraContextRowLink.react"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        return g.jsx(b("TetraContextRowLink.react"), babelHelpers["extends"]({}, a, {
            external: !0
        }))
    }
}
), null);
__d("CometToastAnimationInternal.react", ["React", "stylex", "useFadeEffect", "useMergeRefs", "useToasterStateManager", "useVisibilityObserver"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React"), i = 100, j = {
        mount: {
            opacity: "pedkr2u6",
            transform: "g3zh7qmp",
            transitionDuration: "pc15xi3s",
            transitionTimingFunction: "ilcmz9jb"
        },
        root: {
            opacity: "b5wmifdl",
            transform: "f2tghaqp",
            transitionDuration: "s1992sns",
            transitionProperty: "r5qslco7",
            transitionTimingFunction: "nf1dmkjp"
        }
    };
    function a(a) {
        var c = a.children
          , d = a.expired;
        d = d === void 0 ? !1 : d;
        var e = a.id
          , f = a.position;
        a = a.xstyle;
        var k = b("useToasterStateManager")()
          , l = h.Children.only(c);
        c = h.useCallback(function() {
            k.resetTimer(e)
        }, [e, k]);
        var m = h.useCallback(function() {
            k.stopTimer(e)
        }, [e, k])
          , n = h.useCallback(function() {
            k.shown(e)
        }, [e, k])
          , o = h.useCallback(function() {
            k.hidden(e)
        }, [e, k])
          , p = h.useCallback(function(a) {
            l.props.onActionPress != null && l.props.onActionPress(a),
            a.defaultPrevented || k.expire(e)
        }, [l.props, e, k]);
        o = b("useVisibilityObserver")({
            onHidden: o,
            onVisible: n
        });
        n = b("useFadeEffect")(!d);
        d = n[0];
        var q = n[1];
        n = n[2];
        n = b("useMergeRefs")(n, o);
        return d ? h.jsx("li", {
            className: (g || (g = b("stylex")))(j.root, q && j.mount, a),
            onMouseEnter: m,
            onMouseLeave: c,
            ref: n,
            style: {
                bottom: i * f
            },
            children: h.cloneElement(l, {
                onActionPress: p
            })
        }) : null
    }
}
), null);
__d("SketchBase", ["Promise", "regeneratorRuntime", "Alea", "Base64", "md5", "performanceNow", "setTimeout"], (function(a, b, c, d, e, f) {
    "use strict";
    f.createCanvasAndSolveAllPrimitives = a;
    f.encode = c;
    f.getHash = l;
    f.solveAsync = m;
    f.solvePrimitive = n;
    var g, h = 10, i = 16, j = function() {
        return new (b("Promise"))(function(a) {
            b("setTimeout")(a)
        }
        )
    }, k = function() {
        function a(a, c, d) {
            this.seed = a,
            this.rounds = c,
            this.rng = b("Alea")(a),
            this.ctx = d.getContext("2d"),
            this.width = d.width,
            this.height = d.height
        }
        var c = a.prototype;
        c.solveAllRoundsAsync = function(a) {
            var c, d;
            return b("regeneratorRuntime").async(function(e) {
                while (1)
                    switch (e.prev = e.next) {
                    case 0:
                        c = Date.now() + h,
                        d = 0;
                    case 2:
                        if (!(d < this.rounds)) {
                            e.next = 11;
                            break
                        }
                        a(d);
                        if (!(Date.now() > c)) {
                            e.next = 8;
                            break
                        }
                        e.next = 7;
                        return b("regeneratorRuntime").awrap(j());
                    case 7:
                        c = Date.now() + h;
                    case 8:
                        d++;
                        e.next = 2;
                        break;
                    case 11:
                    case "end":
                        return e.stop()
                    }
            }, null, this)
        }
        ;
        c.solveAsync = function() {
            return b("regeneratorRuntime").async(function(a) {
                while (1)
                    switch (a.prev = a.next) {
                    case 0:
                        a.next = 2;
                        return b("regeneratorRuntime").awrap(this.solveAllRoundsAsync(this.pickPrimitiveAndDraw.bind(this)));
                    case 2:
                    case "end":
                        return a.stop()
                    }
            }, null, this)
        }
        ;
        c.solveOnePrimitiveAsync = function(a) {
            return b("regeneratorRuntime").async(function(c) {
                while (1)
                    switch (c.prev = c.next) {
                    case 0:
                        c.next = 2;
                        return b("regeneratorRuntime").awrap(this.solveAllRoundsAsync(this.getDrawFunction(a)));
                    case 2:
                    case "end":
                        return c.stop()
                    }
            }, null, this)
        }
        ;
        c.getDrawFunction = function(a) {
            switch (a) {
            case "text":
                return this.drawText.bind(this);
            case "bezier":
                return this.drawBezier.bind(this);
            case "circle":
                return this.drawCircle.bind(this);
            case "emoji":
                return this.drawEmoji.bind(this);
            default:
                return function() {
                    return void 0
                }
            }
        }
        ;
        c.pickPrimitive = function(a) {
            var b = ["emoji", "circle", "bezier", "text"];
            return b[a % b.length]
        }
        ;
        c.pickPrimitiveAndDraw = function(a) {
            a = this.getDrawFunction(this.pickPrimitive(a));
            a()
        }
        ;
        c.drawText = function() {
            var a = Math.floor(this.rng() * 50 + 100);
            this.ctx.font = a + "px Arial";
            var b = Math.floor(this.rng() * 100).toString()
              , c = Math.floor(this.rng() * this.width / 2);
            a = this.rngRange(a * 2, this.height - a);
            this.ctx.fillStyle = this.makeRadialGradient();
            this.applyShadow();
            this.ctx.fillText(b, c, a)
        }
        ;
        c.drawEmoji = function() {
            var a = Math.floor(this.rng() * 50 + 100);
            this.ctx.font = a + "px Arial";
            var b = "\ud83d\ude03"
              , c = Math.floor(this.rng() * this.width / 2);
            a = this.rngRange(a * 2, this.height - a);
            this.ctx.fillStyle = this.makeRadialGradient();
            this.applyShadow();
            this.ctx.fillText(b, c, a)
        }
        ;
        c.drawBezier = function() {
            this.ctx.beginPath();
            var a = this.rng() * this.width
              , b = this.rng() * this.height
              , c = this.rng() * this.width
              , d = this.rng() * this.height
              , e = this.rng() * this.width
              , f = this.rng() * this.height;
            this.ctx.moveTo(a, b);
            this.ctx.bezierCurveTo(this.rng() * this.width, this.rng() * this.height, this.rng() * this.width, this.rng() * this.height, c, d);
            this.ctx.bezierCurveTo(this.rng() * this.width, this.rng() * this.height, this.rng() * this.width, this.rng() * this.height, e, f);
            this.ctx.bezierCurveTo(this.rng() * this.width, this.rng() * this.height, this.rng() * this.width, this.rng() * this.height, a, b);
            this.ctx.fillStyle = this.makeRadialGradient();
            this.applyShadow();
            this.ctx.fill()
        }
        ;
        c.drawCircle = function() {
            this.ctx.beginPath(),
            this.ctx.arc(this.rng() * this.width, this.rng() * this.height, this.rng() * this.width / 5, 0, 2 * Math.PI),
            this.ctx.fillStyle = this.makeRadialGradient(),
            this.applyShadow(),
            this.ctx.fill(),
            this.ctx.lineWidth = 2,
            this.ctx.strokeStyle = this.makeRadialGradient(),
            this.ctx.stroke()
        }
        ;
        c.makeRadialGradient = function() {
            var a = this.ctx.createRadialGradient(this.rng() * this.width, this.rng() * this.height, 0, this.rng() * this.width, this.rng() * this.height, this.width * 2);
            a.addColorStop(0, this.makeColor());
            a.addColorStop(.5, this.makeColor());
            a.addColorStop(1, this.makeColor());
            return a
        }
        ;
        c.makeColor = function() {
            var a = Math.floor(this.rng() * 255)
              , b = Math.floor(this.rng() * 255)
              , c = Math.floor(this.rng() * 255);
            return "rgb(" + a + "," + b + "," + c + ")"
        }
        ;
        c.applyShadow = function() {
            this.ctx.shadowColor = this.makeColor(),
            this.ctx.shadowBlur = this.rng() * 50,
            this.ctx.shadowOffsetX = this.rng() * 15,
            this.ctx.shadowOffsetY = this.rng() * 15
        }
        ;
        c.rngRange = function(a, b) {
            var c = Math.min(a, b);
            a = Math.max(a, b);
            return this.rng() * (a - c) + c
        }
        ;
        return a
    }();
    function a(a, c, d) {
        var e, f, g, h;
        return b("regeneratorRuntime").async(function(i) {
            while (1)
                switch (i.prev = i.next) {
                case 0:
                    e = document.createElement("canvas");
                    e.width = 200;
                    e.height = 200;
                    e.style.display = "none";
                    f = {
                        hash: "",
                        hash_bezier: "",
                        hash_circle: "",
                        hash_emoji: "",
                        hash_text: "",
                        hash2: "",
                        rounds: d,
                        seed: a,
                        seed2: c,
                        time_taken: 0
                    };
                    document.body && document.body.appendChild(e);
                    i.next = 8;
                    return b("regeneratorRuntime").awrap(m(e, a, d));
                case 8:
                    g = i.sent;
                    i.next = 11;
                    return b("regeneratorRuntime").awrap(m(e, c, d));
                case 11:
                    h = i.sent;
                    f.hash = g.hash;
                    f.hash2 = h.hash;
                    f.time_taken = g.time_taken + h.time_taken;
                    i.next = 17;
                    return b("regeneratorRuntime").awrap(n(e, a, d, "text"));
                case 17:
                    f.hash_text = i.sent;
                    i.next = 20;
                    return b("regeneratorRuntime").awrap(n(e, a, d, "bezier"));
                case 20:
                    f.hash_bezier = i.sent;
                    i.next = 23;
                    return b("regeneratorRuntime").awrap(n(e, a, d, "circle"));
                case 23:
                    f.hash_circle = i.sent;
                    i.next = 26;
                    return b("regeneratorRuntime").awrap(n(e, a, d, "emoji"));
                case 26:
                    f.hash_emoji = i.sent;
                    document.body && document.body.removeChild(e);
                    return i.abrupt("return", f);
                case 29:
                case "end":
                    return i.stop()
                }
        }, null, this)
    }
    function c(a) {
        return b("Base64").encode(JSON.stringify(a))
    }
    function l(a) {
        return new (b("Promise"))(function(c) {
            b("setTimeout")(function() {
                c(b("md5")(a.toDataURL()))
            }, i)
        }
        )
    }
    function m(a, c, d) {
        var e, f, h, i, j, m;
        return b("regeneratorRuntime").async(function(n) {
            while (1)
                switch (n.prev = n.next) {
                case 0:
                    e = new k(c,d,a);
                    e.ctx.clearRect(0, 0, e.width, e.height);
                    f = (g || (g = b("performanceNow")))();
                    n.next = 5;
                    return b("regeneratorRuntime").awrap(e.solveAsync());
                case 5:
                    h = (g || (g = b("performanceNow")))();
                    i = parseInt((h - f) * 1e3, 10);
                    n.next = 9;
                    return b("regeneratorRuntime").awrap(l(a));
                case 9:
                    j = n.sent;
                    m = {
                        hash: j,
                        time_taken: i
                    };
                    return n.abrupt("return", m);
                case 12:
                case "end":
                    return n.stop()
                }
        }, null, this)
    }
    function n(a, c, d, e) {
        var f, g;
        return b("regeneratorRuntime").async(function(h) {
            while (1)
                switch (h.prev = h.next) {
                case 0:
                    f = new k(c,d,a);
                    f.ctx.clearRect(0, 0, f.width, f.height);
                    h.next = 4;
                    return b("regeneratorRuntime").awrap(f.solveOnePrimitiveAsync(e));
                case 4:
                    h.next = 6;
                    return b("regeneratorRuntime").awrap(l(a));
                case 6:
                    g = h.sent;
                    return h.abrupt("return", g);
                case 8:
                case "end":
                    return h.stop()
                }
        }, null, this)
    }
}
), null);
__d("SketchComet", ["regeneratorRuntime", "JSScheduler", "SketchBase", "XSISketchResultsControllerRouteBuilder", "cometAsyncFetch", "recoverableViolation"], (function(a, b, c, d, e, f) {
    "use strict";
    function g(a) {
        b("recoverableViolation")("Sketch." + a + " called unexpectedly. This is not supported in Comet!", "comet_infra")
    }
    var h = {
        createCanvasAndSolve: function(a, c, d) {
            var e, f, g, h;
            return b("regeneratorRuntime").async(function(i) {
                while (1)
                    switch (i.prev = i.next) {
                    case 0:
                        e = document.createElement("canvas");
                        e.width = 200;
                        e.height = 200;
                        e.style.display = "none";
                        document.body && document.body.appendChild(e);
                        i.next = 7;
                        return b("regeneratorRuntime").awrap(b("SketchBase").solveAsync(e, a, d));
                    case 7:
                        f = i.sent;
                        i.next = 10;
                        return b("regeneratorRuntime").awrap(b("SketchBase").solveAsync(e, c, d));
                    case 10:
                        g = i.sent;
                        h = {
                            hash: f.hash,
                            hash2: g.hash,
                            rounds: d,
                            seed: a,
                            seed2: c,
                            time_taken: f.time_taken + g.time_taken
                        };
                        document.body && document.body.removeChild(e);
                        return i.abrupt("return", h);
                    case 14:
                    case "end":
                        return i.stop()
                    }
            }, null, this)
        },
        solveAllPrimitivesAndCallAsyncController: function(a, c, d) {
            var e, f;
            return b("regeneratorRuntime").async(function(g) {
                while (1)
                    switch (g.prev = g.next) {
                    case 0:
                        g.next = 2;
                        return b("regeneratorRuntime").awrap(b("SketchBase").createCanvasAndSolveAllPrimitives(a, c, d));
                    case 2:
                        e = g.sent,
                        b("JSScheduler").scheduleLoggingPriCallback(function() {
                            f = b("SketchBase").encode(e),
                            b("JSScheduler").scheduleLoggingPriCallback(function() {
                                var a = b("XSISketchResultsControllerRouteBuilder").buildURL({});
                                b("cometAsyncFetch")(a, {
                                    data: {
                                        skstamp: f
                                    },
                                    method: "POST",
                                    retryCount: 2
                                })
                            })
                        });
                    case 4:
                    case "end":
                        return g.stop()
                    }
            }, null, this)
        },
        solveAndCallAsyncController: function(a, c, d) {
            return b("regeneratorRuntime").async(function(a) {
                while (1)
                    switch (a.prev = a.next) {
                    case 0:
                        g("solveAndCallAsyncController");
                    case 1:
                    case "end":
                        return a.stop()
                    }
            }, null, this)
        },
        solveAndEncode: function(a, c, d, e) {
            var f, g;
            return b("regeneratorRuntime").async(function(i) {
                while (1)
                    switch (i.prev = i.next) {
                    case 0:
                        i.next = 2;
                        return b("regeneratorRuntime").awrap(h.createCanvasAndSolve(a, c, d));
                    case 2:
                        f = i.sent;
                        g = babelHelpers["extends"]({}, f, {
                            surface: e
                        });
                        return i.abrupt("return", b("SketchBase").encode(g));
                    case 5:
                    case "end":
                        return i.stop()
                    }
            }, null, this)
        },
        solveAndUpdateForm: function(a, c, d, e) {
            return b("regeneratorRuntime").async(function(a) {
                while (1)
                    switch (a.prev = a.next) {
                    case 0:
                        g("solveAndUpdateForm");
                    case 1:
                    case "end":
                        return a.stop()
                    }
            }, null, this)
        },
        solveIntern: function(a, c, d, e) {
            return b("regeneratorRuntime").async(function(a) {
                while (1)
                    switch (a.prev = a.next) {
                    case 0:
                        g("solveIntern");
                    case 1:
                    case "end":
                        return a.stop()
                    }
            }, null, this)
        }
    };
    a = h;
    e.exports = a
}
), null);
__d("EventListenerImplForBlue", ["Event", "TimeSlice", "emptyFunction", "setImmediateAcrossTransitions"], (function(a, b, c, d, e, f) {
    function g(a, c, d, e) {
        var f = b("TimeSlice").guard(d, "EventListener capture " + c);
        if (a.addEventListener) {
            a.addEventListener(c, f, e);
            return {
                remove: function() {
                    a.removeEventListener(c, f, e)
                }
            }
        } else
            return {
                remove: b("emptyFunction")
            }
    }
    a = {
        listen: function(a, c, d) {
            return b("Event").listen(a, c, d)
        },
        capture: function(a, b, c) {
            return g(a, b, c, !0)
        },
        captureWithPassiveFlag: function(a, b, c, d) {
            return g(a, b, c, {
                passive: d,
                capture: !0
            })
        },
        bubbleWithPassiveFlag: function(a, b, c, d) {
            return g(a, b, c, {
                passive: d,
                capture: !1
            })
        },
        registerDefault: function(a, c) {
            var d, e = b("Event").listen(document.documentElement, a, f, b("Event").Priority._BUBBLE);
            function f() {
                g(),
                d = b("Event").listen(document, a, c),
                b("setImmediateAcrossTransitions")(g)
            }
            function g() {
                d && d.remove(),
                d = null
            }
            return {
                remove: function() {
                    g(),
                    e && e.remove(),
                    e = null
                }
            }
        },
        suppress: function(a) {
            b("Event").kill(a)
        }
    };
    c = a;
    e.exports = c
}
), null);
__d("getBrowserGMTOffsetAdjustedForSkew", ["DateConsts", "FBLogger"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        var c, d = (c = b("DateConsts")).MIN_PER_HOUR * c.HOUR_PER_DAY, e = new Date(), f = e.getTimezoneOffset();
        e = e.getTime() / c.MS_PER_SEC;
        var g = 15;
        a = a - e;
        e = Math.round(a / (g * c.SEC_PER_MIN)) * g;
        e != 0 && b("FBLogger")("TimezoneAutoset").info("Adjusting timezone offset for clock skew. Browser offset: %s. Raw skew %s. Rounded skew %s", f, a, e);
        c = Math.round(f + e) % d;
        c > 12 * b("DateConsts").MIN_PER_HOUR ? c -= d : c < -14 * b("DateConsts").MIN_PER_HOUR && (c += d);
        return c
    }
}
), null);
__d("AsyncTypedRequest", ["AsyncRequest"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b(b) {
            b = a.call(this, b) || this;
            b.setReplaceTransportMarkers();
            return b
        }
        var c = b.prototype;
        c.promisePayload = function(b) {
            return a.prototype.promisePayload.call(this, b)
        }
        ;
        c.setPayloadHandler = function(b) {
            a.prototype.setPayloadHandler.call(this, b);
            return this
        }
        ;
        return b
    }(b("AsyncRequest"));
    e.exports = a
}
), null);
__d("CometTopnavItemClickFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743396");
    c = b("FalcoLoggerInternal").create("comet_topnav_item_click", a);
    e.exports = c
}
), null);
__d("CometTopnavItemImpressionFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743397");
    c = b("FalcoLoggerInternal").create("comet_topnav_item_impression", a);
    e.exports = c
}
), null);
__d("PagesIntegrityEventTypedLoggerLite", ["generateLiteTypedLogger"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("generateLiteTypedLogger")("logger:PagesIntegrityEventLoggerConfig")
}
), null);
__d("ErrorDynamicData", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        access_token: null
    };
    b = a;
    e.exports = b
}
), null);
__d("RoomsCreateDialogQuery$Parameters", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        kind: "PreloadableConcreteRequest",
        params: {
            id: "3255523111168620",
            metadata: {
                relayPreloadable: !0
            },
            name: "RoomsCreateDialogQuery",
            operationKind: "query",
            text: null
        }
    };
    e.exports = a
}
), null);
__d("RoomsEditDialogQuery$Parameters", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        kind: "PreloadableConcreteRequest",
        params: {
            id: "3448915931797892",
            metadata: {
                relayPreloadable: !0
            },
            name: "RoomsEditDialogQuery",
            operationKind: "query",
            text: null
        }
    };
    e.exports = a
}
), null);
__d("CometActivityBadge.react", ["fbt", "BaseView.react", "React", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React")
      , i = {
        root: {
            borderTopColor: "np69z8it",
            borderEndColor: "et4y5ytx",
            borderBottomColor: "j7g94pet",
            borderStartColor: "b74d5cxt",
            borderTopStartRadius: "lit7pgxp",
            borderTopEndRadius: "o3c63hce",
            borderBottomEndRadius: "hqlzco19",
            borderBottomStartRadius: "lsl2245n",
            borderTopStyle: "goun2846",
            borderEndStyle: "ccm00jje",
            borderBottomStyle: "s44p3ltw",
            borderStartStyle: "mk2mc5f4",
            borderTopWidth: "qxh1up0x",
            borderEndWidth: "qtyiw8t4",
            borderBottomWidth: "tpcyxxvw",
            borderStartWidth: "k0bpgpbk",
            boxSizing: "cjfnh4rs",
            display: "q9uorilb",
            marginTop: "hop8lmos",
            marginEnd: "nkwizq5d",
            marginBottom: "scwd0bx6",
            marginStart: "roh60bw9"
        }
    }
      , j = {
        8: {
            height: "t6na6p9t",
            width: "c9rrlmt1"
        },
        10: {
            height: "bsodd3zb",
            width: "xthkpp0z"
        },
        12: {
            height: "cyypbtt7",
            width: "fwizqjfa"
        },
        16: {
            height: "gl3lb2sf",
            width: "hhz5lgdu"
        },
        20: {
            height: "jnigpg78",
            width: "odw8uiq3"
        }
    }
      , k = {
        active: {
            backgroundColor: "jllm4f4h"
        }
    };
    function a(a) {
        var c = a.borderColorOverride
          , d = a.label
          , e = a.size;
        a = a.state;
        a = a === void 0 ? "active" : a;
        return a !== "inactive" ? h.jsx(b("BaseView.react"), {
            "aria-label": (d = d) != null ? d : l(a),
            xstyle: [i.root, j[e], k[a], c]
        }) : null
    }
    function l(a) {
        switch (a) {
        case "active":
            return g._("Ho\u1ea1t \u0111\u1ed9ng");
        default:
            return
        }
    }
}
), null);
__d("CometBadgeContainer.react", ["BaseView.react", "CometVisualCompletionAttributes", "React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React")
      , h = {
        badge: {
            bottom: "i09qtzwb",
            display: "j83agx80",
            flexDirection: "cbu4d94t",
            maxWidth: "mb6dcl82",
            position: "pmk7jnqg"
        },
        expanding: {
            display: "a8c37x1j"
        },
        root: {
            display: "q9uorilb"
        }
    }
      , i = {
        center: {
            left: "pzli0o6b",
            transform: "cj5g2342"
        },
        left: {
            start: "j9ispegn"
        },
        right: {
            end: "n7fi1qx3"
        }
    };
    function a(a) {
        var c = a.badge
          , d = a.badgeAlign;
        d = d === void 0 ? "right" : d;
        var e = a.children
          , f = a.expanding;
        f = f === void 0 ? !1 : f;
        a = a.xstyle;
        return g.jsxs(b("BaseView.react"), babelHelpers["extends"]({}, b("CometVisualCompletionAttributes").IGNORE_DYNAMIC, {
            xstyle: [h.root, f && h.expanding, a],
            children: [e, g.jsx(b("BaseView.react"), {
                xstyle: [h.badge, i[d]],
                children: c
            })]
        }))
    }
}
), null);
__d("CometDisabledContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext(!1);
    e.exports = c
}
), null);
__d("CometImageContainer.react", ["BaseView.react", "CometAspectRatioContainer.react", "CometDisabledContext", "React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React")
      , h = {
        disabled: {
            opacity: "ggwglk7f"
        },
        insetBorder: {
            bottom: "i09qtzwb",
            boxShadow: "oaz4zybt",
            end: "n7fi1qx3",
            position: "pmk7jnqg",
            start: "j9ispegn",
            top: "kr520xx4"
        },
        root: {
            backgroundColor: "cwj9ozl2",
            display: "a8c37x1j",
            overflowX: "ni8dbmo4",
            overflowY: "stjgntxs"
        }
    }
      , i = {
        circle: {
            borderTopStartRadius: "s45kfl79",
            borderTopEndRadius: "emlxlaya",
            borderBottomEndRadius: "bkmhp75w",
            borderBottomStartRadius: "spb7xbtv"
        },
        rounded: {
            borderTopStartRadius: "ue3kfks5",
            borderTopEndRadius: "pw54ja7n",
            borderBottomEndRadius: "uo3d90p7",
            borderBottomStartRadius: "l82x9zwi"
        },
        square: {}
    }
      , j = {
        16: {
            height: "gl3lb2sf",
            width: "hhz5lgdu"
        },
        20: {
            height: "jnigpg78",
            width: "odw8uiq3"
        },
        24: {
            height: "rgmg9uty",
            width: "b73ngqbp"
        },
        28: {
            height: "mudddibn",
            width: "ciadx1gn"
        },
        32: {
            height: "k7cz35w2",
            width: "bsnbvmp4"
        },
        36: {
            height: "tv7at329",
            width: "thwo4zme"
        },
        40: {
            height: "qypqp5cg",
            width: "q676j6op"
        },
        44: {
            height: "qu8okrzs",
            width: "eim337gk"
        },
        48: {
            height: "m7zwrmfr",
            width: "tmrshh9y"
        },
        52: {
            height: "pi1r6xr4",
            width: "i8j84fko"
        },
        56: {
            height: "e5d9fub0",
            width: "oeao4gh3"
        },
        60: {
            height: "cb02d2ww",
            width: "ljni7pan"
        },
        64: {
            height: "fbzcu06b",
            width: "nxfmr2wi"
        },
        68: {
            height: "fdipuqhw",
            width: "hg3jlj2n"
        },
        72: {
            height: "rdkrh8wx",
            width: "orwu60u2"
        },
        76: {
            height: "ic2jb53e",
            width: "nv7ma05p"
        },
        80: {
            height: "pioscnbf",
            width: "etr7akla"
        },
        132: {
            height: "ijttq3ge",
            width: "qvlc8xm6"
        },
        144: {
            height: "d77eqvpc",
            width: "qm714nnf"
        },
        160: {
            height: "hjkfelp1",
            width: "cp6p5cpd"
        }
    };
    function a(a) {
        var c = a.aspectRatio;
        c = c === void 0 ? null : c;
        var d = a.children
          , e = a.disabled;
        e = e === void 0 ? !1 : e;
        var f = a.shape;
        f = f === void 0 ? "square" : f;
        var k = a.size;
        k = k === void 0 ? null : k;
        a = a.xstyle;
        var l = g.useContext(b("CometDisabledContext"));
        e = (e = e) != null ? e : l;
        return g.jsx(b("BaseView.react"), {
            xstyle: [h.root, i[f], k != null && j[k], a],
            children: g.jsx(b("BaseView.react"), {
                xstyle: e && h.disabled,
                children: c != null ? g.jsxs(b("CometAspectRatioContainer.react"), {
                    aspectRatio: c,
                    children: [d, g.jsx(b("BaseView.react"), {
                        xstyle: [h.insetBorder, i[f]]
                    })]
                }) : g.jsxs(g.Fragment, {
                    children: [d, g.jsx(b("BaseView.react"), {
                        xstyle: [h.insetBorder, i[f]]
                    })]
                })
            })
        })
    }
}
), null);
__d("CometSplitContainer.react", ["BaseView.react", "React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React")
      , h = {
        aspectRatioContainer: {
            paddingTop: "n1ap2d1u"
        },
        aspectRatioContainerContent: {
            bottom: "i09qtzwb",
            end: "n7fi1qx3",
            position: "pmk7jnqg",
            start: "j9ispegn",
            top: "kr520xx4"
        },
        item: {
            "float": "bzsjyuwj",
            height: "datstx6m",
            width: "k4urcfbm"
        },
        root: {
            overflowX: "ni8dbmo4",
            overflowY: "stjgntxs"
        }
    }
      , i = {
        2: {
            marginTop: "hqeojc4l",
            marginEnd: "o9f14d3k",
            marginBottom: "mkjtxrlb",
            marginStart: "def1xbws"
        },
        4: {
            marginTop: "hop8lmos",
            marginEnd: "nkwizq5d",
            marginBottom: "scwd0bx6",
            marginStart: "roh60bw9"
        }
    }
      , j = {
        0: {
            height: "me31hnl3",
            width: "n99xedck"
        },
        2: {
            height: "sgnw3cpn",
            marginTop: "pcgkmkmd",
            marginEnd: "ditlmg2l",
            marginBottom: "arzshmzb",
            marginStart: "nvdbi5me",
            width: "rvc71w78"
        },
        4: {
            height: "fshvpl7i",
            marginTop: "rs0gx3tq",
            marginEnd: "kady6ibp",
            marginBottom: "dicw6rsg",
            marginStart: "dwxx2s2f",
            width: "gfomwglr"
        }
    }
      , k = {
        0: {
            height: "datstx6m",
            width: "n99xedck"
        },
        2: {
            height: "iq00u8gg",
            marginTop: "pcgkmkmd",
            marginEnd: "ditlmg2l",
            marginBottom: "arzshmzb",
            marginStart: "nvdbi5me",
            width: "rvc71w78"
        },
        4: {
            height: "qeavputo",
            marginTop: "rs0gx3tq",
            marginEnd: "kady6ibp",
            marginBottom: "dicw6rsg",
            marginStart: "dwxx2s2f",
            width: "gfomwglr"
        }
    };
    function a(a) {
        var c = a.children
          , d = a.spacing
          , e = d === void 0 ? 0 : d;
        d = a.xstyle;
        var f = g.Children.count(c);
        return g.jsx(b("BaseView.react"), {
            xstyle: [h.root, i[e], d],
            children: g.jsx(b("BaseView.react"), {
                xstyle: h.aspectRatioContainer,
                children: g.jsx(b("BaseView.react"), {
                    xstyle: h.aspectRatioContainerContent,
                    children: g.Children.map(c, function(a, c) {
                        return c >= 4 ? null : g.jsx(b("BaseView.react"), {
                            xstyle: [h.item, f > 1 && (f === 2 || f === 3 && c === 0 ? k[e] : j[e])],
                            children: a
                        })
                    })
                })
            })
        })
    }
}
), null);
__d("CometSplitImage.react", ["BaseImage.react", "CometDisabledContext", "CometSplitContainer.react", "React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React")
      , h = {
        image: {
            maxWidth: "d2edcug0",
            minHeight: "sn7ne77z",
            objectFit: "bixrwtb6",
            opacity: "pedkr2u6",
            transitionDuration: "s00z5mgp",
            transitionProperty: "art1omkt",
            transitionTimingFunction: "s13u9afw"
        },
        imageDisabled: {
            opacity: "ggwglk7f"
        },
        root: {
            overflowX: "ni8dbmo4",
            overflowY: "stjgntxs"
        }
    };
    function a(a) {
        var c = a.disabled
          , d = a.images
          , e = a.xstyle;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["disabled", "images", "xstyle"]);
        var f = g.useContext(b("CometDisabledContext"));
        return g.jsx(b("CometSplitContainer.react"), babelHelpers["extends"]({}, a, {
            xstyle: [h.root, e],
            children: d.map(function(a, d) {
                var e;
                a = typeof a === "object" ? a : {
                    source: a
                };
                var i = a.alt;
                i = i === void 0 ? void 0 : i;
                var j = a.disabled;
                e = j === void 0 ? (e = c) != null ? e : f : j;
                j = a.source;
                return g.jsx(b("BaseImage.react"), {
                    alt: i,
                    src: j,
                    xstyle: [h.image, e && h.imageDisabled]
                }, j + "-" + d)
            })
        }))
    }
}
), null);
__d("CometSplitProfilePhoto.react", ["CometBadgeContainer.react", "CometImageContainer.react", "CometSplitImage.react", "React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React")
      , h = {
        transparentBackground: {
            backgroundColor: "g5ia77u1"
        }
    };
    function a(a) {
        var c = a.badge
          , d = a.badgeAlign
          , e = a.expanding;
        e = e === void 0 ? !1 : e;
        var f = a.photos
          , i = a.shape;
        i = i === void 0 ? "square" : i;
        var j = a.size;
        a = a.spacing;
        a = a === void 0 ? 2 : a;
        i = g.jsx(b("CometImageContainer.react"), {
            shape: i,
            size: j,
            xstyle: h.transparentBackground,
            children: g.jsx(b("CometSplitImage.react"), {
                images: f,
                spacing: a
            })
        });
        return c != null ? g.jsx(b("CometBadgeContainer.react"), {
            badge: c,
            badgeAlign: d,
            expanding: e,
            children: i
        }) : i
    }
}
), null);
__d("composerFooterAttachmentAreaChecker", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, b) {
        return (a == null ? void 0 : (a = a.footerAttachmentArea) == null ? void 0 : a.activeFooterAttachmentType) !== (b == null ? void 0 : (a = b.footerAttachmentArea) == null ? void 0 : a.activeFooterAttachmentType)
    }
}
), null);
__d("composerFooterAttachmentAreaReducer", ["JSResource"], (function(a, b, c, d, e, f) {
    "use strict";
    f.composerFooterAttachmentAreaReducer = a;
    c = {
        BLOOD_DONATIONS: b("JSResource")("composerFeedBloodDonationsTransform").__setRef("composerFooterAttachmentAreaReducer"),
        ROOM: b("JSResource")("composerVideoMeetupTransform").__setRef("composerFooterAttachmentAreaReducer")
    };
    f.transformerResourceForFooterAttachmentType = c;
    function a(a, b) {
        var c;
        switch (b.type) {
        case "ACTIVATE_FOOTER_ATTACHMENT_TYPE":
            return ((c = a.footerAttachmentArea) == null ? void 0 : c.activeFooterAttachmentType) === b.footerAttachmentType ? a : babelHelpers["extends"]({}, a, {
                footerAttachmentArea: babelHelpers["extends"]({}, a.footerAttachmentArea, {
                    activeFooterAttachmentType: b.footerAttachmentType
                }),
                placeholderTextOverride: b.placeholderTextOverride
            });
        case "REMOVE_FOOTER_ATTACHMENT_TYPE":
            return ((c = a.footerAttachmentArea) == null ? void 0 : c.activeFooterAttachmentType) !== b.footerAttachmentType ? a : babelHelpers["extends"]({}, a, {
                footerAttachmentArea: babelHelpers["extends"]({}, a.footerAttachmentArea, {
                    activeFooterAttachmentType: null
                }),
                placeholderTextOverride: void 0
            });
        case "UPDATE_PLACEHOLDER_TEXT":
            return babelHelpers["extends"]({}, a, {
                placeholderTextOverride: b.placeholderTextOverride
            });
        case "RESET_PLACEHOLDER_TEXT":
            return babelHelpers["extends"]({}, a, {
                placeholderTextOverride: void 0
            })
        }
        return a
    }
}
), null);
__d("composerFooterAttachmentAreaFeedTransform", ["composerFooterAttachmentAreaReducer", "promiseDone"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c, d) {
        var e;
        e = (e = a.footerAttachmentArea) == null ? void 0 : e.activeFooterAttachmentType;
        e = e ? b("composerFooterAttachmentAreaReducer").transformerResourceForFooterAttachmentType[e] : null;
        e ? b("promiseDone")(e.load().then(function(b) {
            return b(a, babelHelpers["extends"]({}, c), d)
        })) : d(c)
    }
}
), null);
__d("composerVideoMeetupReducer", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, b) {
        switch (b.type) {
        case "INITIALIZE_GROUP_ROOM":
            return babelHelpers["extends"]({}, a, {
                videoMeetup: babelHelpers["extends"]({}, a.videoMeetup, {
                    allows_anonymous: b.allows_anonymous,
                    funnel_session_id: b.funnel_session_id,
                    is_group_room: !0,
                    room_emoji: b.room_emoji,
                    room_name: b.room_name,
                    start_date: b.start_date
                })
            });
        case "UPDATE_LINK_INFO":
            var c = b.link_hash
              , d = b.link_id
              , e = b.link_url;
            return babelHelpers["extends"]({}, a, {
                videoMeetup: babelHelpers["extends"]({}, a.videoMeetup, {
                    link_hash: c,
                    link_id: d,
                    link_url: e
                })
            });
        case "UPDATE_ROOM_NAME_AND_EMOJI":
            c = b.room_emoji;
            d = b.room_name;
            return babelHelpers["extends"]({}, a, {
                videoMeetup: babelHelpers["extends"]({}, a.videoMeetup, {
                    room_emoji: c,
                    room_name: d
                })
            });
        case "UPDATE_ROOM_VISIBILITY":
            e = b.allows_anonymous;
            return babelHelpers["extends"]({}, a, {
                videoMeetup: babelHelpers["extends"]({}, a.videoMeetup, {
                    allows_anonymous: e
                })
            });
        case "UPDATE_START_DATE":
            c = b.start_date;
            return babelHelpers["extends"]({}, a, {
                videoMeetup: babelHelpers["extends"]({}, a.videoMeetup, {
                    start_date: c
                })
            });
        case "ATTACH_FEED_ROOM":
            return babelHelpers["extends"]({}, a, {
                videoMeetup: babelHelpers["extends"]({}, a.videoMeetup, {
                    allows_anonymous: b.allows_anonymous,
                    is_feed_room: !0,
                    link_id: b.link_id,
                    room_emoji: b.room_emoji,
                    room_name: b.room_name,
                    start_date: b.start_date
                })
            });
        case "ATTACH_FEED_ROOM_BY_HASH":
            return babelHelpers["extends"]({}, a, {
                videoMeetup: babelHelpers["extends"]({}, a.videoMeetup, {
                    is_feed_room: !0,
                    link_hash: b.link_hash
                })
            });
        case "REMOVE_ATTACHMENT_TYPE":
            return babelHelpers["extends"]({}, a, {
                videoMeetup: void 0
            });
        default:
            return a
        }
    }
}
), null);
__d("composerTrackingTransform", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, b, c) {
        a.tracking != null ? c(babelHelpers["extends"]({}, b, {
            is_tracking_encrypted: !0,
            tracking: a.tracking.encrypted_tracking
        })) : c(b)
    }
}
), null);
__d("RoomsCreateDialog.entrypoint", ["JSResourceForInteraction", "RoomsCreateDialogQuery$Parameters", "WebPixelRatio"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        getPreloadProps: function() {
            return {
                queries: {
                    queryReference: {
                        parameters: b("RoomsCreateDialogQuery$Parameters"),
                        variables: {
                            scale: b("WebPixelRatio").get()
                        }
                    }
                }
            }
        },
        root: b("JSResourceForInteraction")("RoomsCreateDialog.react").__setRef("RoomsCreateDialog.entrypoint")
    };
    e.exports = a
}
), null);
__d("RoomsEditDialog.entrypoint", ["JSResourceForInteraction", "RoomsEditDialogQuery$Parameters"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        getPreloadProps: function(a) {
            a = a.linkHash;
            return {
                queries: {
                    queryReference: {
                        parameters: b("RoomsEditDialogQuery$Parameters"),
                        variables: {
                            linkHash: a
                        }
                    }
                }
            }
        },
        root: b("JSResourceForInteraction")("RoomsEditDialog.react").__setRef("RoomsEditDialog.entrypoint")
    };
    e.exports = a
}
), null);
__d("useRoomsCreateOrEditDialog", ["RoomsCreateDialog.entrypoint", "RoomsEditDialog.entrypoint", "useCometEntryPointDialog", "useMergeRefs"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    Object.freeze({
        COMPOSER_EDIT: "composer_edit",
        CREATE_ROOM: "create_room",
        EID_ROOM: "eid_room",
        HAPPY_HOUR: "happy_hour"
    });
    function a(a) {
        var c, d = a.linkHash;
        a = b("useCometEntryPointDialog")(b("RoomsCreateDialog.entrypoint"), {});
        var e = a[0];
        a = a[1];
        c = b("useCometEntryPointDialog")(b("RoomsEditDialog.entrypoint"), {
            linkHash: (c = d) != null ? c : ""
        });
        var f = c[0];
        c = c[1];
        a = b("useMergeRefs")(a, c);
        c = function(a) {
            var b = a.loggingData
              , c = a.onSave;
            a = a.roomType;
            d == null ? e({
                loggingData: b,
                onSave: c,
                roomType: a
            }, void 0, "comet.rooms.create") : f({
                loggingData: b,
                onSave: c,
                roomType: a
            }, void 0, "comet.rooms.create")
        }
        ;
        return [c, a]
    }
}
), null);
__d("RoomsFacepileWithBadge.react", ["CometActivityBadge.react", "CometSplitProfilePhoto.react", "MWJewelThreadFacepile.react", "React", "TetraProfilePhoto.react", "profilePhotoUtils", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React"), i = {
        activityBadge: {
            borderStyle: "ow4ym5g4",
            borderWidth: "auili1gw",
            boxSizing: "rq0escxv",
            display: "j83agx80",
            flexDirection: "cbu4d94t",
            flexGrow: "buofh1pr",
            flexShrink: "g5gj957u",
            marginBottom: "oygrvhab",
            marginEnd: "cxmmr5t8",
            marginStart: "hcukyx3x",
            marginTop: "kvgmc6g5",
            minHeight: "tgvbjcpo",
            minWidth: "hpfvmrgz",
            position: "l9j0dhe7",
            zIndex: "du4w35lb",
            alignItems: "bp9cbjyn",
            borderTopStartRadius: "s45kfl79",
            borderTopEndRadius: "emlxlaya",
            borderBottomEndRadius: "bkmhp75w",
            borderBottomStartRadius: "spb7xbtv",
            height: "csbtt2a9",
            justifyContent: "taijpn5t",
            overflowX: "ni8dbmo4",
            overflowY: "stjgntxs",
            paddingTop: "fdg1wqfs",
            paddingEnd: "jxrgncrl",
            paddingBottom: "ae35evdt",
            paddingStart: "qnrpqo6b",
            width: "brl5nffy"
        },
        badge: {
            borderTopStartRadius: "s45kfl79",
            borderTopEndRadius: "emlxlaya",
            borderBottomEndRadius: "bkmhp75w",
            borderBottomStartRadius: "spb7xbtv",
            boxShadow: "jcrsxscb",
            position: "pmk7jnqg",
            zIndex: "kavbgo14"
        },
        badgeBorder: {
            borderTopColor: "qp49borb",
            borderEndColor: "k4opz3kq",
            borderBottomColor: "q8ck7bqn",
            borderStartColor: "tezsbrh0"
        },
        smallActivityBadge: {
            borderTop: "iwuwq2lu",
            borderEnd: "g5oefq77",
            borderBottom: "oo8ov1ci",
            borderStart: "ce1xcart",
            boxShadow: "mvk8q8v6",
            height: "p1ueia1e",
            width: "pgctjfs5"
        }
    };
    function j(a) {
        switch (a) {
        case "dialog":
            return 80;
        case "tile":
            return 60;
        case "attachment":
            return 40;
        default:
            a
        }
        return 80
    }
    function a(a) {
        var c = a.container
          , d = a.profileUris
          , e = a.addOn && (a == null ? void 0 : a.addOn)
          , f = a.badge && (a == null ? void 0 : a.badge);
        a = (a = a.shouldShowGradient) != null ? a : !1;
        var l = j(c)
          , m = b("profilePhotoUtils").getBadgePosition(c === "attachment" ? 25 : 100 / 2);
        if (d.length === 0)
            return null;
        if (f) {
            var n = null;
            (f == null ? void 0 : f.type) === "activityBadge" ? n = h.jsx(b("CometActivityBadge.react"), {
                borderColorOverride: a ? i.badgeBorder : void 0,
                size: c === "dialog" ? 16 : 12,
                state: "active"
            }) : n = f == null ? void 0 : f.badge;
            return h.jsx(b("CometSplitProfilePhoto.react"), {
                badge: n,
                badgeAlign: f.badgeAlign,
                expanding: !0,
                photos: d,
                shape: "circle",
                size: l
            })
        }
        if (d.length === 1) {
            return h.jsx(b("TetraProfilePhoto.react"), {
                addOn: (a = e) != null ? a : void 0,
                shape: "circle",
                size: l,
                source: {
                    uri: k(d, 0)
                }
            })
        } else if (d.length > 1)
            return h.jsxs(h.Fragment, {
                children: [h.jsx(b("MWJewelThreadFacepile.react"), {
                    primaryPhoto: {
                        alt: "pic1",
                        source: {
                            uri: k(d, 0)
                        },
                        withBorder: !0
                    },
                    secondaryPhoto: {
                        alt: "pic2",
                        source: {
                            uri: k(d, 1)
                        }
                    },
                    size: l
                }), e && e.type === "activityBadge" && h.jsx("div", {
                    className: (g || (g = b("stylex")))(i.badge),
                    style: babelHelpers["extends"]({}, m),
                    children: h.jsx("div", {
                        className: (g || (g = b("stylex")))(i.activityBadge, c === "attachment" && i.smallActivityBadge),
                        style: {
                            backgroundColor: e.backgroundColor
                        },
                        children: e.icon
                    })
                })]
            });
        return null
    }
    function k(a, b) {
        return b >= a.length ? "" : typeof a[b] === "object" ? a[b].source : a[b]
    }
}
), null);
__d("roomsTimeUtils", ["DateConsts", "formatDate"], (function(a, b, c, d, e, f) {
    "use strict";
    f.getTrayTimestamp = a;
    f.isWithinNDays = g;
    f.isScheduledForLater = c;
    function a(a) {
        var c = a.serverDateTime;
        a = a.startDateTime;
        var d = a.getTime()
          , e = c.getTime();
        if (g(d, e, 0))
            return b("formatDate")(a, "g:i A");
        return c.getFullYear() === a.getFullYear() ? b("formatDate")(a, "M j") : b("formatDate")(a, "M Y")
    }
    function g(a, c, d) {
        c = new Date(c);
        c.setHours(24, 0, 0, 0);
        return a < c.getTime() + d * b("DateConsts").MS_PER_DAY
    }
    function c(a, c) {
        var d = 2 * b("DateConsts").MS_PER_MIN;
        a = a <= c + d;
        return !a
    }
}
), null);
__d("LiveVideoCometBadge_video.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "LiveVideoCometBadge_video",
        selections: [{
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "breaking_status",
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_live_streaming",
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_premiere",
            storageKey: null
        }],
        type: "Video",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("useVideoOriginalDimensionsRelay_video.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "useVideoOriginalDimensionsRelay_video",
        selections: [{
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "original_width",
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "original_height",
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "original_rotation",
            storageKey: null
        }],
        type: "Video",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("VideoPlayerWithLiveVideoIndicator_video.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "VideoPlayerWithLiveVideoIndicator_video",
        selections: [{
            alias: "breakingStatus",
            args: null,
            kind: "ScalarField",
            name: "breaking_status",
            storageKey: null
        }, {
            alias: "videoId",
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        }, {
            alias: "isPremiere",
            args: null,
            kind: "ScalarField",
            name: "is_premiere",
            storageKey: null
        }, {
            alias: "liveViewerCount",
            args: null,
            kind: "ScalarField",
            name: "live_viewer_count_read_only",
            storageKey: null
        }, {
            alias: "rehearsalInfo",
            args: null,
            concreteType: "LiveVideoRehearsalInfo",
            kind: "LinkedField",
            name: "rehearsal_info",
            plural: !1,
            selections: [{
                alias: "typeName",
                args: null,
                kind: "ScalarField",
                name: "__typename",
                storageKey: null
            }],
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_gaming_video",
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "publish_time",
            storageKey: null
        }],
        type: "Video",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("LiveVideoCometBadge.react", ["fbt", "BaseRow.react", "BaseRowItem.react", "CometRelay", "React", "TetraText.react", "stylex", "LiveVideoCometBadge_video.graphql"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h, i, j = b("React"), k = function(a, b, c) {
        if (a)
            return g._("TIN N\u00d3NG TR\u1ef0C TI\u1ebeP");
        return c ? g._("C\u00d4NG CHI\u1ebeU") : b ? g._("TR\u1ef0C TI\u1ebeP") : null
    };
    function a(a) {
        var c = a.pulse;
        c = c === void 0 ? !1 : c;
        var d = a.size;
        d = d === void 0 ? "small" : d;
        a = a.video;
        a = b("CometRelay").useFragment(h !== void 0 ? h : h = b("LiveVideoCometBadge_video.graphql"), a);
        var e = !!a.breaking_status
          , f = !!a.is_live_streaming;
        a = !!a.is_premiere;
        return j.jsx("div", {
            className: (i || (i = b("stylex"))).dedupe({
                "background-color-1": "l44iypv3",
                "border-top-start-radius-1": "jk6sbkaj",
                "border-top-end-radius-1": "kdgqqoy6",
                "border-bottom-end-radius-1": "ihh4hy1g",
                "border-bottom-start-radius-1": "qttc61fc",
                "box-sizing-1": "rq0escxv",
                "display-1": "pq6dq46d",
                "height-1": "datstx6m",
                "margin-top-1": "rs0gx3tq",
                "margin-end-1": "kady6ibp",
                "margin-bottom-1": "dicw6rsg",
                "margin-start-1": "dwxx2s2f"
            }, d === "large" ? {
                "padding-top-1": "l29c1vbm",
                "padding-end-1": "dflh9lhu",
                "padding-bottom-1": "j7796vcc",
                "padding-start-1": "scb9dxdr"
            } : null, d === "small" ? {
                "padding-top-1": "ipjc6fyt",
                "padding-end-1": "ph5uu5jm",
                "padding-bottom-1": "iuny7tx3",
                "padding-start-1": "b3onmgus"
            } : null, c ? {
                "animation-direction-1": "afxn4irw",
                "animation-duration-1": "m8weaby5",
                "animation-iteration-count-1": "ee40wjg4",
                "animation-name-1": "q1gqmpn5",
                "animation-timing-function-1": "jbu8tgem"
            } : null),
            children: j.jsx(b("BaseRow.react"), {
                align: "center",
                verticalAlign: "center",
                children: j.jsx(b("BaseRowItem.react"), {
                    children: j.jsx(b("TetraText.react"), {
                        color: "white",
                        numberOfLines: 1,
                        type: d === "large" ? "bodyLink3" : "bodyLink4",
                        children: k(e, f, a)
                    })
                })
            })
        })
    }
}
), null);
__d("useVideoOriginalDimensionsRelay", ["CometRelay", "computeAspectRatio", "useVideoOriginalDimensionsRelay_video.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g;
    function a(a) {
        a = b("CometRelay").useFragment(g !== void 0 ? g : g = b("useVideoOriginalDimensionsRelay_video.graphql"), a);
        var c = a == null ? void 0 : a.original_rotation;
        c = c === "ROTATE_LEFT" || c === "ROTATE_RIGHT";
        var d = c ? a == null ? void 0 : a.original_height : a == null ? void 0 : a.original_width;
        c = c ? a == null ? void 0 : a.original_width : a == null ? void 0 : a.original_height;
        a = b("computeAspectRatio")(d, c);
        return {
            originalAspectRatio: a,
            originalHeight: c,
            originalWidth: d
        }
    }
}
), null);
__d("GamingVideoBackLink.react", ["ix", "fbt", "CometImage.react", "CometPressable.react", "React", "XCometGamingControllerRouteBuilder", "asset", "stylex"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i, j = b("React"), k = g("370949"), l = b("XCometGamingControllerRouteBuilder").buildURL({});
    function a() {
        var a = h._("\u0110i t\u1edbi Facebook Gaming");
        return j.jsx(b("CometPressable.react"), {
            linkProps: {
                url: l
            },
            children: function(c) {
                c = c.hovered;
                return j.jsxs("div", {
                    className: "btwxx1t3 j83agx80",
                    children: [j.jsx("span", {
                        className: c ? "e4zzj2sf art1omkt dpja2al7 pedkr2u6 pq6dq46d" : "e4zzj2sf art1omkt dpja2al7 qwwmc0zo awjy3rxs pq6dq46d",
                        children: j.jsx(b("CometImage.react"), {
                            alt: h._("\u0110\u00f3ng"),
                            src: k
                        })
                    }), j.jsx("div", {
                        className: (i || (i = b("stylex"))).dedupe(c ? {
                            "color-1": "r8mhfmj7",
                            "display-1": "a8c37x1j",
                            "padding-end-1": "dflh9lhu",
                            "position-1": "l9j0dhe7",
                            "text-decoration-0.1": "oo483o9r",
                            "top-1": "tmxdrx1h"
                        } : {
                            "display-1": "mkhogb32"
                        }),
                        children: a
                    })]
                })
            }
        })
    }
}
), null);
__d("Duration.react", ["React", "ServerTime", "clearTimeout", "setTimeout"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = 500
      , i = 1e3
      , j = 60
      , k = 60;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(b) {
            b = a.call(this, b) || this;
            b.state = {
                duration: 0
            };
            return b
        }
        var d = c.prototype;
        d.UNSAFE_componentWillMount = function() {
            this.$2()
        }
        ;
        d.componentWillUnmount = function() {
            b("clearTimeout")(this.$1)
        }
        ;
        d.$2 = function() {
            var a = this, c;
            this.props.useLocalTime ? c = Date.now() : c = b("ServerTime").getMillis();
            this.setState({
                duration: Math.max(c - this.props.startTime, 0)
            });
            this.$1 = b("setTimeout")(function() {
                return a.$2()
            }, h)
        }
        ;
        d.render = function() {
            var a = Math.floor(this.state.duration / i)
              , b = a % j;
            a = Math.floor(a / j);
            var c = a % k;
            a = Math.floor(a / k);
            var d = "";
            a > 0 && (d = a + ":");
            a = c + ":";
            a.length < 3 && d.length > 0 && (a = "0" + a);
            c = "" + b;
            c.length < 2 && (c = "0" + c);
            return g.jsxs("span", {
                children: [d, a, c]
            })
        }
        ;
        return c
    }(g.Component);
    e.exports = a;
    a.defaultProps = {
        useLocalTime: !1
    }
}
), null);
__d("idx", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, d) {
        try {
            return d(a)
        } catch (a) {
            if (a instanceof TypeError)
                if (b(a))
                    return null;
                else if (c(a))
                    return void 0;
            throw a
        }
    }
    var g;
    function b(a) {
        a = a.message;
        g || (g = i("null"));
        return g.test(a)
    }
    var h;
    function c(a) {
        a = a.message;
        h || (h = i("undefined"));
        return h.test(a)
    }
    function i(a) {
        return new RegExp("^" + a + " | " + a + "$|^[^\\(]* " + a + " ")
    }
}
), null);
__d("intlSummarizeNumber", ["FbtNumberType", "IntlCompactDecimalNumberFormatConfig", "IntlVariations", "intlNumUtils"], (function(a, b, c, d, e, f) {
    var g = 3
      , h = 14
      , i = {
        ROUND: "ROUND",
        TRUNCATE: "TRUNCATE"
    }
      , j = {
        SHORT: "SHORT",
        LONG: "LONG"
    };
    function a(a, c, d, e) {
        d === void 0 && (d = j.SHORT);
        e === void 0 && (e = i.ROUND);
        d = b("IntlCompactDecimalNumberFormatConfig")[d == j.SHORT ? "short_patterns" : "long_patterns"];
        var f = a === 0 ? 0 : Math.floor(Math.log10(Math.abs(a)));
        f > h && (f = h);
        var l = k(a, f, c, e, d)
          , m = l[0]
          , n = l[1];
        l = l[2];
        if (l) {
            f += 1;
            l = k(a, f, c, e, d);
            m = l[0];
            n = l[1];
            l[2]
        }
        e = b("FbtNumberType").getVariation(m) || b("IntlVariations").NUMBER_OTHER;
        l = f.toString();
        l = (d = d) != null ? (d = d[l]) != null ? d[e.toString()] : d : d;
        if (!l || f < g || l.positive_prefix_pattern === "" && l.positive_suffix_pattern === "") {
            e = c === void 0 ? 0 : c;
            return b("intlNumUtils").formatNumberWithThousandDelimiters(a, e)
        }
        return l && l.min_integer_digits === 0 && m === 1 ? l.positive_prefix_pattern + l.positive_suffix_pattern : (l && l.positive_prefix_pattern || "") + b("intlNumUtils").formatNumberWithThousandDelimiters(m, n) + (l && l.positive_suffix_pattern || "")
    }
    function k(a, c, d, e, f) {
        var g = c.toString();
        g = (f = f) != null ? (f = f[g]) != null ? f[b("IntlVariations").NUMBER_OTHER.toString()] : f : f;
        f = g && g.min_integer_digits || c + 1;
        var j = c - f + 1;
        j = Math.abs(a) / Math.pow(10, j);
        var k = d != null;
        d = k ? d : g && g.min_fraction_digits;
        d == null && (d = c > 2 ? 1 : 0);
        g = e == i.TRUNCATE ? b("intlNumUtils").truncateLongNumber(j.toString(), d) : j.toFixed(d);
        e = parseFloat(g) * (a < 0 ? -1 : 1);
        return [e, e % 1 === 0 && !k ? 0 : d, g.length > f + (d > 0 ? d + 1 : 0) + (j >= 0 ? 0 : 1) && c < h]
    }
    e.exports = a
}
), null);
__d("VideoPlayerWithLiveVideoIndicator.react", ["ix", "fbt", "CometImage.react", "CometPlaceholder.react", "CometRelay", "CometRouteRenderType", "Duration.react", "GamingVideoBackLink.react", "deferredLoadComponent", "gkx", "requireDeferred", "React", "TetraText.react", "VideoBroadcastStatus", "VideoPlayerHooks", "asset", "clearTimeout", "intlSummarizeNumber", "setTimeout", "stylex", "unrecoverableViolation", "useVideoPlayerUnifiedCVCProvider", "VideoPlayerWithLiveVideoIndicator_video.graphql"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i, j, k = b("deferredLoadComponent")(b("requireDeferred")("LiveVideoCometNuxForCVC.react")), l = b("React"), m = {
        cvcIndicator: {
            backgroundColor: "swu4x5w2",
            borderTopStartRadius: "jk6sbkaj",
            borderTopEndRadius: "kdgqqoy6",
            borderBottomEndRadius: "ihh4hy1g",
            borderBottomStartRadius: "qttc61fc",
            boxSizing: "rq0escxv",
            display: "pq6dq46d",
            height: "datstx6m",
            marginStart: "ggphbty4",
            paddingTop: "l60d2q6s",
            paddingEnd: "p8fzw8mz",
            paddingBottom: "qt6c0cv9",
            paddingStart: "pcp91wgn"
        },
        cvcIndicatorIcon: {
            bottom: "l2l2r6co",
            display: "pq6dq46d",
            marginEnd: "cgat1ltu",
            position: "l9j0dhe7"
        },
        liveIndicator: {
            borderTopStartRadius: "jk6sbkaj",
            borderTopEndRadius: "kdgqqoy6",
            borderBottomEndRadius: "ihh4hy1g",
            borderBottomStartRadius: "qttc61fc",
            boxSizing: "rq0escxv",
            display: "pq6dq46d",
            height: "datstx6m",
            paddingTop: "l60d2q6s",
            paddingEnd: "p8fzw8mz",
            paddingBottom: "qt6c0cv9",
            paddingStart: "pcp91wgn"
        },
        liveIndicatorAnimation: {
            animationDirection: "afxn4irw",
            animationDuration: "m8weaby5",
            animationIterationCount: "ee40wjg4",
            animationName: "q1gqmpn5",
            animationTimingFunction: "jbu8tgem"
        },
        liveIndicatorBackground: {
            backgroundColor: "l44iypv3"
        },
        liveIndicatorExpanded: {
            display: "pq6dq46d",
            marginStart: "kkf49tns"
        },
        liveRewindIndicatorBackground: {
            backgroundColor: "jjbobbrh"
        },
        positionTop: {
            display: "j83agx80",
            height: "rgmg9uty",
            position: "pmk7jnqg",
            start: "rnx8an3s",
            top: "fcg2cn6m"
        },
        positionTopWithCometNavOverlay: {
            start: "b12hlsfb",
            top: "fgv6swy9"
        },
        positionTopWithCometNavOverlayWorkplace: {
            start: "jjtdzmgn",
            top: "fgv6swy9"
        },
        privacyNux: {
            position: "pmk7jnqg",
            start: "rnx8an3s",
            top: "t4zy2t7z"
        },
        rehearsalIndicator: {
            backgroundColor: "p2o8ms9n"
        }
    };
    function a(a) {
        var c, d, e, f, g, h = (g = b("VideoPlayerHooks")).useIsLive(), r = g.useIsLiveRewindActive(), s = g.useIsFullscreen(), t = b("CometRouteRenderType").useIsMain(), u = g.usePlaying(), v = l.useRef(null), w = (g = a.isActiveLivingRoom) != null ? g : !1;
        g = b("CometRelay").useFragment(i !== void 0 ? i : i = b("VideoPlayerWithLiveVideoIndicator_video.graphql"), a.video);
        c = (c = g == null ? void 0 : g.videoId) != null ? c : "";
        if (g == null || typeof c !== "string" || c === "")
            throw b("unrecoverableViolation")("Null video or bad videoId", "comet_live_video");
        var x = b("useVideoPlayerUnifiedCVCProvider").useVideoPlayerUnifiedCVCData();
        d = l.useState((d = g.liveViewerCount) != null ? d : 0);
        var y = d[0]
          , z = d[1];
        d = l.useState(!1);
        var A = d[0]
          , B = d[1];
        d = l.useState(!1);
        var C = d[0]
          , D = d[1];
        l.useEffect(function() {
            h && x != null && (n(x.bs) ? z(x.c) : (z(0),
            B(!0)));
            if (w && x != null) {
                var a;
                z((a = x.lvc) != null ? a : 0)
            }
        }, [x, h, w]);
        l.useEffect(function() {
            u ? (D(!0),
            v.current = b("setTimeout")(function() {
                D(!1)
            }, 3e3)) : v.current && (D(!1),
            b("clearTimeout")(v.current));
            return function() {
                return b("clearTimeout")(v.current)
            }
        }, [u]);
        d = ((d = g.rehearsalInfo) == null ? void 0 : d.typeName) === "LiveVideoRehearsalInfo";
        e = (e = g.is_gaming_video) != null ? e : !1;
        f = (f = a.includeGamingBackLink) != null ? f : !1;
        f = f && t && e;
        t = !h || A;
        if (t && !w)
            return null;
        e = b("gkx")("1443572");
        return l.jsxs(l.Fragment, {
            children: [l.jsxs("div", {
                className: (j || (j = b("stylex")))(m.positionTop, e ? a.shouldExpand !== !0 && !s && m.positionTopWithCometNavOverlayWorkplace : a.hasCometNavOverlay && !s && m.positionTopWithCometNavOverlay),
                children: [f ? l.jsx(b("GamingVideoBackLink.react"), {}) : null, l.jsx("div", {
                    className: j(m.liveIndicator, r ? null : m.liveIndicatorAnimation, r ? null : m.liveIndicatorBackground, r ? m.liveRewindIndicatorBackground : null, d ? m.rehearsalIndicator : null),
                    "data-testid": void 0,
                    children: l.jsxs(b("TetraText.react"), {
                        color: d ? "primary" : "white",
                        type: "bodyLink4",
                        children: [o(g, w), a.shouldExpand === !0 && C && (g == null ? void 0 : g.publish_time) != null && !r && q(g.publish_time)]
                    })
                }), p(y)]
            }), a.shouldShowPrivacyNux === !0 && l.jsx(b("CometPlaceholder.react"), {
                fallback: null,
                children: l.jsx("div", {
                    className: (j || (j = b("stylex")))(m.privacyNux),
                    children: l.jsx(k, {
                        videoID: c
                    })
                })
            })]
        })
    }
    function n(a) {
        if (a == null)
            return !1;
        switch (a) {
        case b("VideoBroadcastStatus").LIVE:
        case b("VideoBroadcastStatus").LIVE_STOPPED:
        case b("VideoBroadcastStatus").SEAL_STARTED:
            return !0;
        default:
            return !1
        }
    }
    function o(a, b) {
        if ((a == null ? void 0 : a.isPremiere) === !0)
            return h._("C\u00d4NG CHI\u1ebeU");
        if ((a == null ? void 0 : a.breakingStatus) === !0)
            return h._("TIN N\u00d3NG TR\u1ef0C TI\u1ebeP");
        return b ? h._("XEM CHUNG") : h._("TR\u1ef0C TI\u1ebeP")
    }
    function p(a) {
        if (a == null || a === 0)
            return null;
        var c = l.jsx("span", {
            className: (j || (j = b("stylex")))(m.cvcIndicatorIcon),
            children: l.jsx(b("CometImage.react"), {
                alt: "",
                src: g("406916")
            })
        });
        return l.jsxs("div", {
            "aria-label": h._({
                "*": "{number} ng\u01b0\u1eddi \u0111ang xem video n\u00e0y.",
                "_1": "1 ng\u01b0\u1eddi \u0111ang xem video n\u00e0y."
            }, [h._plural(a, "number", b("intlSummarizeNumber")(a))]),
            className: j(m.cvcIndicator),
            "data-testid": void 0,
            role: "img",
            children: [c, l.jsx(b("TetraText.react"), {
                color: "white",
                type: "body4",
                children: b("intlSummarizeNumber")(a)
            })]
        })
    }
    function q(a) {
        return l.jsx("div", {
            className: (j || (j = b("stylex")))(m.liveIndicatorExpanded),
            children: l.jsx(b("Duration.react"), {
                startTime: a * 1e3,
                useLocalTime: !0
            })
        })
    }
}
), null);
__d("generateChainingSessionID", ["Random"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a() {
        return "f" + (b("Random").random() * (1 << 30)).toString(16).replace(".", "")
    }
}
), null);
__d("useCometTahoeChainingDepth", ["React", "generateChainingSessionID"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = g.createContext({
        chainingDepthDispatch: null,
        chainingDepthState: 0,
        chainingSessionID: null
    });
    a = function() {
        var a = 0
          , c = function(a, b) {
            switch (b.type) {
            case "INCREMENT":
                return a + 1;
            default:
                return a
            }
        };
        c = g.useReducer(c, a);
        var d = c[0]
          , e = c[1];
        a = g.useState(function() {
            return b("generateChainingSessionID")()
        });
        var f = a[0];
        a[1];
        return g.useMemo(function() {
            return {
                chainingDepthDispatch: e,
                chainingDepthState: d,
                chainingSessionID: f
            }
        }, [e, d, f])
    }
    ;
    f.useChainingDepth = a;
    c = function() {
        return g.useContext(h)
    }
    ;
    f.useChainingDepthContext = c;
    d = function(a) {
        var b = a.children;
        a = a.value;
        return g.jsx(h.Provider, {
            value: a,
            children: b
        })
    }
    ;
    f.CometTahoeChainingDepthContextProvider = d
}
), null);
__d("CometTahoeTracePolicyContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext(null);
    e.exports = c
}
), null);
__d("VideoPlayerLoggingExternalLogContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext({
        externalLogID: null,
        externalLogType: null
    });
    e.exports = c
}
), null);
__d("CometFeedStoryAttachmentRenderer_attachment.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [{
            kind: "RootArgument",
            name: "renderLocation"
        }],
        kind: "Fragment",
        metadata: null,
        name: "CometFeedStoryAttachmentRenderer_attachment",
        selections: [{
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "style_list",
            storageKey: null
        }, {
            alias: null,
            args: [{
                kind: "Variable",
                name: "render_location",
                variableName: "renderLocation"
            }, {
                kind: "Literal",
                name: "supported",
                value: ["StoryAttachmentEmptyStyleRenderer", "StoryAttachmentQuiltStyleRenderer", "StoryAttachmentQuiltCardsStyleRenderer", "StoryAttachmentBirthdayStyleRenderer", "StoryAttachmentPageRecommendationStyleRenderer", "StoryAttachmentFunFactsStyleRenderer", "StoryAttachmentFunFactsStackStyleRenderer", "StoryAttachmentPageShareStyleRenderer", "StoryAttachmentGametimeStyleRenderer", "StoryAttachmentGoodwillProductSystemCampaignStyleRenderer", "StoryAttachmentGoodwillSharedStyleRenderer", "StoryAttachmentAlbumStyleRenderer", "StoryAttachmentAlbumColumnStyleRenderer", "StoryAttachmentAlbumBannerStyleRenderer", "StoryAttachmentAlbumFrameStyleRenderer", "StoryAttachmentAlbumSaleItemStyleRenderer", "StoryAttachmentCrisisListingStyleRenderer", "StoryAttachmentCrisisMarkSafeStyleRenderer", "StoryAttachmentCrisisShareStyleRenderer", "StoryAttachmentCrisisHubShareStyleRenderer", "StoryAttachmentCrisisDonationStyleRenderer", "StoryAttachmentFundraiserDonateButtonStyleRenderer", "StoryAttachmentFundraiserFBSeedingGiftStyleRenderer", "StoryAttachmentPlaceListStyleRenderer", "StoryAttachmentMapStyleRenderer", "StoryAttachmentAsset3dStyleRenderer", "StoryAttachmentEventStyleRenderer", "StoryAttachmentShopStyleRenderer", "StoryAttachmentGroupStyleRenderer", "StoryAttachmentGroupSellProductItemStyleRenderer", "StoryAttachmentNoteStyleRenderer", "StoryAttachmentKnowledgeNoteStyleRenderer", "StoryAttachmentKnowledgeCollectionStyleRenderer", "StoryAttachmentPhotoStyleRenderer", "StoryAttachmentPhotoSaleItemStyleRenderer", "StoryAttachmentPhotoReviewStyleRenderer", "StoryAttachmentFileUploadStyleRenderer", "StoryAttachmentProfileIntroCardBioStyleRenderer", "StoryAttachmentProfileMediaStyleRenderer", "StoryAttachmentAnimatedImageShareStyleRenderer", "StoryAttachmentImageShareStyleRenderer", "StoryAttachmentAnonymousAuthorInfoStyleRenderer", "StoryAttachmentGroupAnonymousPendingPostDisclaimerStyleRenderer", "StoryAttachmentC4GThreadCreationStyleRenderer", "StoryAttachmentC4GMessageStyleRenderer", "StoryAttachmentAnonymousPostContentStyleRenderer", "StoryAttachmentShareMediumStyleRenderer", "StoryAttachmentSharePortraitStyleRenderer", "StoryAttachmentShareSevereStyleRenderer", "StoryAttachmentShareStyleRenderer", "StoryAttachmentVideoStyleRenderer", "StoryAttachmentFallbackStyleRenderer", "StoryAttachmentLifeEventStyleRenderer", "StoryAttachmentScheduledLiveVideoPostStyleRenderer", "StoryAttachmentLiveVideoScheduleStyleRenderer", "StoryAttachmentLDPAppInstanceStyleRenderer", "StoryAttachmentLiveVideoRehearsalStyleRenderer", "StoryAttachmentMultiShareStyleRenderer", "StoryAttachmentTextPollStyleRenderer", "StoryAttachmentTextPollNonInteractiveStyleRenderer", "StoryAttachmentVisualPollStyleRenderer", "StoryAttachmentListStoryStyleRenderer", "StoryAttachmentGamesInstantPlayStyleRenderer", "StoryAttachmentMeetUpEventStyleRenderer", "StoryAttachmentInstantGamesInteractivePollStyleRenderer", "StoryAttachmentInstantGamesTournamentStyleRenderer", "StoryAttachmentMovieStyleRenderer", "StoryAttachmentAvatarStyleRenderer", "StoryAttachmentVoterRegistrationStyleRenderer", "StoryAttachmentVoteByMailStyleRenderer", "StoryAttachmentCensusStyleRenderer", "StoryAttachmentWorkShiftSwapStyleRenderer", "StoryAttachmentWoodhengeStyleRenderer", "StoryAttachment3DPhotoStyleRenderer", "StoryAttachment360PhotoStyleRenderer", "StoryAttachmentBloodDonationPartnerCTAStyleRenderer", "StoryAttachmentLivingRoomStyleRenderer", "StoryAttachmentUnavailableStyleRenderer", "StoryAttachmentWorkLinkPreviewStyleRenderer", "StoryAttachmentWorkContentStyleRenderer", "StoryAttachmentPhotoLinkShareStyleRenderer", "StoryAttachmentPlayWithFriendsStyleRenderer", "StoryAttachmentSimpleMusicStyleRenderer", "StoryAttachmentQuarantinedVideoStyleRenderer", "WorkStoryAttachmentMajorEventStyleRenderer", "WorkStoryAttachmentChecklistStyleRenderer", "StoryAttachmentWorkVideoMeetupStyleRenderer", "StoryAttachmentVideoMeetupStyleRenderer", "StoryAttachmentVideoMeetupLinkStyleRenderer", "StoryAttachmentChatroomStyleRenderer", "StoryAttachmentSocialLearningPreviewPhotoStyleRenderer", "StoryAttachmentAMAStyleRenderer", "StoryAttachmentAMACardsStyleRenderer", "StoryAttachmentTournamentMatchSetStyleRenderer", "StoryAttachmentSocialLearningUnitCreatedStyleRenderer", "StoryAttachmentSocialLearningUnitCompletedStyleRenderer", "StoryAttachmentGroupQuizStyleRenderer", "StoryAttachmentBreakingNewsShareStyleRenderer", "StoryAttachmentRecruitingResumeReviewStyleRenderer", "StoryAttachmentProfileCommercePostStyleRenderer", "StoryAttachmentCommerceAttachmentStyleRenderer", "StoryAttachmentGroupVoterPledgeDriveStyleRenderer", "StoryAttachmentCommunityQAStyleRenderer", "StoryAttachmentFluShotPledgeStyleRenderer", "StoryAttachmentReportedGroupEventStyleRenderer", "StoryAttachmentGroupApplicationStyleRenderer"]
            }],
            concreteType: null,
            kind: "LinkedField",
            name: "style_type_renderer",
            plural: !1,
            selections: [{
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryEmptyAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentEmptyStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryQuiltAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentQuiltStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryQuiltCardsAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentQuiltCardsStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryBirthdayAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentBirthdayStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryPageRecommendationAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentPageRecommendationStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryFunFactsPromptAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentFunFactsStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryFunFactsStackAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentFunFactsStackStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryPageShareAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentPageShareStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryGametimeAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentGametimeStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryGoodwillProductSystemCampaignAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentGoodwillProductSystemCampaignStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryGoodwillSharedAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentGoodwillSharedStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryAlbumAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentAlbumStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryAlbumColumnAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentAlbumColumnStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryAlbumBannerAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentAlbumBannerStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryAlbumFrameAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentAlbumFrameStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryAlbumSaleItemAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentAlbumSaleItemStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryCrisisListingAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentCrisisListingStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryCrisisMarkSafeAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentCrisisMarkSafeStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryCrisisShareAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentCrisisShareStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryCrisisHubShareAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentCrisisHubShareStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryCrisisDonationAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentCrisisDonationStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryFundraiserDonateButtonAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentFundraiserDonateButtonStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryFundraiserFBSeedingGiftAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentFundraiserFBSeedingGiftStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryPlaceListAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentPlaceListStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryMapAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentMapStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryAsset3DAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentAsset3dStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryEventAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentEventStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryShopAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentShopStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryGroupAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentGroupStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryGroupSellProductItemAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentGroupSellProductItemStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryNoteAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentNoteStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "GeminiFeedStoryKnowledgeNoteAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentKnowledgeNoteStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "GeminiFeedStoryKnowledgeCollectionAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentKnowledgeCollectionStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryPhotoAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentPhotoStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryPhotoSaleItemAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentPhotoSaleItemStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryPhotoReviewPhotoAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentPhotoReviewStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryFileUploadAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentFileUploadStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryProfileIntroCardBioAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentProfileIntroCardBioStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryProfileMediaAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentProfileMediaStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryAnimatedImageAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentAnimatedImageShareStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryImageShareAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentImageShareStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryAnonymousAuthorInfoAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentAnonymousAuthorInfoStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryGroupAnonymousPendingPostDisclaimerAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentGroupAnonymousPendingPostDisclaimerStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryC4GThreadCreationAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentC4GThreadCreationStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryC4GMessageAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentC4GMessageStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryAnonymousPostContentAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentAnonymousPostContentStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryShareMediumAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentShareMediumStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStorySharePortraitAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentSharePortraitStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryShareSevereAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentShareSevereStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryShareAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentShareStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryVideoAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentVideoStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryFallbackAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentFallbackStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryLifeEventAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentLifeEventStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryScheduledLiveVideoPostAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentScheduledLiveVideoPostStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryLiveVideoScheduleAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentLiveVideoScheduleStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryLDPAppInstanceAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentLDPAppInstanceStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryLiveVideoRehearsalAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentLiveVideoRehearsalStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryMultiShareAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentMultiShareStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryTextPollAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentTextPollStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryTextPollNonInteractiveAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentTextPollNonInteractiveStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryVisualPollAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentVisualPollStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryListStoryAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentListStoryStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryGamesInstantPlayAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentGamesInstantPlayStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryMeetUpEventAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentMeetUpEventStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryInstantGamesInteractivePollAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentInstantGamesInteractivePollStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryInstantGamesTournamentAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentInstantGamesTournamentStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryMovieAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentMovieStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryAvatarAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentAvatarStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryVoterRegistrationAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentVoterRegistrationStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryVoteByMailAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentVoteByMailStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryCensusAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentCensusStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryWorkShiftSwapAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentWorkShiftSwapStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryWoodhengeAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentWoodhengeStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStory3DPhotoAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachment3DPhotoStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStory360PhotoAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachment360PhotoStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryBloodDonationPartnerCTAAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentBloodDonationPartnerCTAStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryLivingRoomAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentLivingRoomStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryUnavailableAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentUnavailableStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "GeminiFeedStoryWorkLinkPreviewAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentWorkLinkPreviewStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "GeminiFeedStoryWorkContentAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentWorkContentStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryPhotoLinkShareAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentPhotoLinkShareStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryPlayWithFriendsAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentPlayWithFriendsStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStorySimpleMusicAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentSimpleMusicStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryQuarantinedVideoAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentQuarantinedVideoStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "WorkFeedStoryWorkMajorEventAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "WorkStoryAttachmentMajorEventStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "WorkFeedStoryChecklistAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "WorkStoryAttachmentChecklistStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "GeminiFeedStoryVideoMeetupAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentWorkVideoMeetupStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryVideoMeetupAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentVideoMeetupStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryVideoMeetupLinkAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentVideoMeetupLinkStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryChatroomAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentChatroomStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStorySocialLearningPreviewPhotoAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentSocialLearningPreviewPhotoStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryAMAAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentAMAStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryAMACardsAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentAMACardsStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryTournamentMatchSetAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentTournamentMatchSetStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStorySocialLearningUnitCreatedAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentSocialLearningUnitCreatedStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStorySocialLearningUnitCompletedAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentSocialLearningUnitCompletedStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStorySocialLearningQuizAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentGroupQuizStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryBreakingNewsShareAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentBreakingNewsShareStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryRecruitingResumeReviewAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentRecruitingResumeReviewStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryProfileCommercePostAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentProfileCommercePostStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryCommerceAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentCommerceAttachmentStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryGroupVoterPledgeDriveAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentGroupVoterPledgeDriveStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryCommunityQAAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentCommunityQAStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryFluShotPledgeAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentFluShotPledgeStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryReportedGroupEventAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentReportedGroupEventStyleRenderer",
                abstractKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentRenderer_attachment",
                    fragmentName: "CometFeedStoryGroupApplicationAttachmentStyle_styleTypeRenderer",
                    fragmentPropName: "styleTypeRenderer",
                    kind: "ModuleImport"
                }],
                type: "StoryAttachmentGroupApplicationStyleRenderer",
                abstractKey: null
            }],
            storageKey: null
        }],
        type: "StoryAttachment",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("useIsSATPStory_story.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "useIsSATPStory_story",
        selections: [{
            alias: null,
            args: null,
            concreteType: "TextFormatMetadata",
            kind: "LinkedField",
            name: "text_format_metadata",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "__typename",
                storageKey: null
            }],
            storageKey: null
        }],
        type: "Story",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("CometFeedStoryAttachmentDisclaimerFooterSection_attachment.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [{
            kind: "RootArgument",
            name: "renderLocation"
        }],
        kind: "Fragment",
        metadata: null,
        name: "CometFeedStoryAttachmentDisclaimerFooterSection_attachment",
        selections: [{
            alias: null,
            args: [{
                kind: "Variable",
                name: "location",
                variableName: "renderLocation"
            }, {
                kind: "Literal",
                name: "supported",
                value: ["CometStoryAttachmentDisclaimerFooterDynamicAdContextStrategy"]
            }],
            concreteType: null,
            kind: "LinkedField",
            name: "comet_footer_disclaimer_renderer",
            plural: !1,
            selections: [{
                kind: "InlineFragment",
                selections: [{
                    documentName: "CometFeedStoryAttachmentDisclaimerFooterSection_attachment",
                    fragmentName: "CometStoryAttachmentDisclaimerFooterDynamicAdContextStrategy_attachmentFooterDisclaimer",
                    fragmentPropName: "attachmentFooterDisclaimer",
                    kind: "ModuleImport"
                }],
                type: "CometStoryAttachmentDisclaimerFooterDynamicAdContextStrategy",
                abstractKey: null
            }],
            storageKey: null
        }],
        type: "StoryAttachment",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("CometFeedStoryAttachmentOverlaySection_story.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [{
            kind: "RootArgument",
            name: "renderLocation"
        }],
        kind: "Fragment",
        metadata: null,
        name: "CometFeedStoryAttachmentOverlaySection_story",
        selections: [{
            alias: null,
            args: [{
                kind: "Variable",
                name: "location",
                variableName: "renderLocation"
            }],
            concreteType: "CometStorySections",
            kind: "LinkedField",
            name: "comet_sections",
            plural: !1,
            selections: [{
                alias: null,
                args: [{
                    kind: "Literal",
                    name: "supported",
                    value: ["CometFeedStoryWarningScreenAttachmentStrategy"]
                }],
                concreteType: null,
                kind: "LinkedField",
                name: "attachment_overlay",
                plural: !1,
                selections: [{
                    kind: "InlineFragment",
                    selections: [{
                        documentName: "CometFeedStoryAttachmentOverlaySection_story",
                        fragmentName: "CometFeedStoryWarningScreenAttachmentStrategy_story",
                        fragmentPropName: "story",
                        kind: "ModuleImport"
                    }],
                    type: "CometFeedStoryWarningScreenAttachmentStrategy",
                    abstractKey: null
                }],
                storageKey: 'attachment_overlay(supported:["CometFeedStoryWarningScreenAttachmentStrategy"])'
            }],
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "encrypted_tracking",
            storageKey: null
        }],
        type: "Story",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("CometFeedStoryAttachmentSection_story.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [{
            kind: "RootArgument",
            name: "renderLocation"
        }],
        kind: "Fragment",
        metadata: null,
        name: "CometFeedStoryAttachmentSection_story",
        selections: [{
            alias: null,
            args: [{
                kind: "Variable",
                name: "location",
                variableName: "renderLocation"
            }],
            concreteType: "StoryAttachment",
            kind: "LinkedField",
            name: "attachments",
            plural: !0,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "deduplication_key",
                storageKey: null
            }, {
                args: null,
                kind: "FragmentSpread",
                name: "CometFeedStoryAttachmentRenderer_attachment"
            }, {
                args: null,
                kind: "FragmentSpread",
                name: "CometFeedStoryAttachmentFooterSection_attachment"
            }, {
                args: null,
                kind: "FragmentSpread",
                name: "CometFeedStoryAttachmentDisclaimerFooterSection_attachment"
            }],
            storageKey: null
        }, {
            alias: null,
            args: null,
            concreteType: "SponsoredData",
            kind: "LinkedField",
            name: "sponsored_data",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "ad_id",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "client_token",
                storageKey: null
            }],
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "encrypted_tracking",
            storageKey: null
        }, {
            args: null,
            kind: "FragmentSpread",
            name: "CometFeedStoryInfoIconSection_story"
        }, {
            args: null,
            kind: "FragmentSpread",
            name: "CometFeedStoryAttachmentOverlaySection_story"
        }, {
            args: null,
            kind: "FragmentSpread",
            name: "useIsSATPStory_story"
        }, {
            args: null,
            kind: "FragmentSpread",
            name: "StoryAttachmentActorContext_story"
        }],
        type: "Story",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("CometFeedStoryAttachmentRenderer.react", ["CometFeedMatchRenderer.react", "CometRelay", "React", "RelayHooks", "TetraText.react", "gkx", "stylex", "usePageletMatchMetadata", "CometFeedStoryAttachmentRenderer_attachment.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React"), i = g !== void 0 ? g : g = b("CometFeedStoryAttachmentRenderer_attachment.graphql");
    function a(a) {
        var c, d = b("RelayHooks").useFragment(i, a.attachment), e = a.adClientToken, f = a.adID, g = a.canOverlapWithPreviousAttachment;
        g = g === void 0 ? !1 : g;
        var j = a.onMatch_UNSTABLE_DO_NOT_USE
          , k = a.setHasImagePreview;
        a = a.trackingData;
        var l = d.style_type_renderer;
        c = (c = d.style_list) != null ? c : [];
        c = d.__typename;
        b("usePageletMatchMetadata")("feed_attachment", l);
        h.useEffect(function() {
            if (j != null) {
                var a = l != null ? b("CometRelay").ModuleResource.getModuleId(l) : null;
                j((a = a) != null ? a : null)
            }
        }, []);
        d = h.useState(!1);
        c = d[0];
        var m = d[1];
        d = h.useCallback(function() {
            m(!0)
        }, []);
        return c ? null : h.jsx(b("CometFeedMatchRenderer.react"), {
            match: l,
            onUnsupported: d,
            props: {
                adClientToken: e,
                adID: f,
                canOverlapWithPreviousAttachment: g,
                setHasImagePreview: k
            },
            section: "attachment",
            trackingData: a
        })
    }
}
), null);
__d("useIsSATPStory", ["CometRelay", "useIsSATPStory_story.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g;
    function a(a) {
        a = b("CometRelay").useFragment(g !== void 0 ? g : g = b("useIsSATPStory_story.graphql"), a);
        return (a == null ? void 0 : (a = a.text_format_metadata) == null ? void 0 : a.__typename) != null
    }
}
), null);
__d("CometFeedStoryAttachmentDisclaimerFooterSection.react", ["CometFeedMatchRenderer.react", "CometRelay", "CometTrackingNodeProvider.react", "React", "stylex", "CometFeedStoryAttachmentDisclaimerFooterSection_attachment.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React");
    function a(a) {
        var c = a.adClientToken
          , d = a.adID
          , e = a.attachment;
        a = a.trackingData;
        e = b("CometRelay").useFragment(g !== void 0 ? g : g = b("CometFeedStoryAttachmentDisclaimerFooterSection_attachment.graphql"), e);
        e = e == null ? void 0 : e.comet_footer_disclaimer_renderer;
        return e == null ? null : h.jsx(b("CometTrackingNodeProvider.react"), {
            trackingNode: 265,
            children: h.jsx("div", {
                className: "stjgntxs ni8dbmo4",
                children: h.jsx(b("CometFeedMatchRenderer.react"), {
                    match: e,
                    props: {
                        adClientToken: c,
                        adID: d
                    },
                    section: "attachment_footer_disclaimer",
                    trackingData: a
                })
            })
        })
    }
}
), null);
__d("CometFeedStoryAttachmentOverlaySection.react", ["CometFeedMatchRenderer.react", "CometRelay", "React", "CometFeedStoryAttachmentOverlaySection_story.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React");
    function a(a) {
        var c, d = b("CometRelay").useFragment(g !== void 0 ? g : g = b("CometFeedStoryAttachmentOverlaySection_story.graphql"), a.story);
        a = a.attachmentRenderer;
        return (d == null ? void 0 : (c = d.comet_sections) == null ? void 0 : c.attachment_overlay) == null ? a : h.jsx(b("CometFeedMatchRenderer.react"), {
            match: d == null ? void 0 : (c = d.comet_sections) == null ? void 0 : c.attachment_overlay,
            props: {
                attachmentRenderer: a
            },
            section: "attachment_overlay",
            trackingData: d == null ? void 0 : d.encrypted_tracking
        })
    }
}
), null);
__d("CometFeedStoryFeedLocationContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext();
    e.exports = c
}
), null);
__d("CometFeedStoryAttachmentSection.react", ["CometFeedAggregatedStoriesContext", "CometFeedARIAProperties.react", "CometFeedStoryAttachmentDisclaimerFooterSection.react", "CometFeedStoryAttachmentFooterSection.react", "CometFeedStoryAttachmentOverlaySection.react", "CometFeedStoryAttachmentRenderer.react", "CometFeedStoryFeedLocationContext", "CometFeedStoryInfoIconSection.react", "CometStoryRenderLocationContext.react", "CometTrackingNodeProvider.react", "React", "RelayHooks", "StoryAttachmentActorContext", "gkx", "requireCond", "stylex", "useIsSATPStory", "cr:1621813", "CometFeedStoryAttachmentSection_story.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React"), i = g !== void 0 ? g : g = b("CometFeedStoryAttachmentSection_story.graphql");
    function a(a) {
        var c = b("RelayHooks").useFragment(i, a.story)
          , d = h.useContext(b("CometFeedAggregatedStoriesContext"))
          , e = b("useIsSATPStory")(c)
          , f = b("gkx")("1577562")
          , g = h.useRef(null)
          , j = h.useRef(null)
          , k = h.useRef(null)
          , l = h.useRef(!1)
          , m = h.useContext(b("CometStoryRenderLocationContext.react"))
          , n = m !== "%future added value" ? m : null;
        m = h.useContext(b("CometFeedARIAProperties.react"));
        var o = h.useCallback(function() {
            if (l.current === !1 && g.current != null && j.current != null && k.current != null) {
                var a;
                l.current = !0;
                var c = (a = (a = g.current) == null ? void 0 : a.match) != null ? a : "null"
                  , d = (a = (a = j.current) == null ? void 0 : a.match) != null ? a : "null"
                  , e = (a = (a = k.current) == null ? void 0 : a.match) != null ? a : "null";
                b("cr:1621813") && b("cr:1621813").log(function() {
                    return {
                        attachment_footer_match: d,
                        attachment_style_match: c,
                        info_icon_match: e,
                        render_location: n
                    }
                })
            }
        }, [n])
          , p = h.useCallback(function(a) {
            g.current = {
                match: a
            },
            o()
        }, [o])
          , q = h.useCallback(function(a) {
            j.current = {
                match: a
            },
            o()
        }, [o])
          , r = h.useCallback(function(a) {
            k.current = {
                match: a
            },
            o()
        }, [o])
          , s = c == null ? void 0 : c.attachments;
        if (s == null || s.length === 0)
            return null;
        var t = d.hasAggregateParent ? s.filter(function(a) {
            return !d.suppressedAttachments.includes(a.deduplication_key)
        }) : s
          , u = t.length > 0 && t[0] === s[0]
          , v = u && h.jsx(b("CometFeedStoryInfoIconSection.react"), {
            onMatch_UNSTABLE_DO_NOT_USE: f ? r : void 0,
            story: c
        });
        s = babelHelpers["extends"]({}, m.attachmentTargetProps);
        return h.jsx("div", babelHelpers["extends"]({
            className: "l9j0dhe7",
            ref: m.attachmentTargetRef
        }, s, {
            children: h.jsx(b("CometFeedStoryFeedLocationContext").Provider, {
                displayName: "CometFeedStoryFeedLocationContext",
                value: a.feedLocation,
                children: h.jsx(b("StoryAttachmentActorContext").StoryAttachmentActorContextProvider, {
                    story: c,
                    children: t.map(function(a, d) {
                        var g;
                        return h.jsxs(b("CometTrackingNodeProvider.react"), {
                            trackingNode: 15,
                            children: [h.jsxs("div", {
                                className: "l9j0dhe7",
                                children: [h.jsx(b("CometFeedStoryAttachmentOverlaySection.react"), {
                                    attachmentRenderer: h.jsx("div", {
                                        children: h.jsx(b("CometFeedStoryAttachmentRenderer.react"), {
                                            adClientToken: c == null ? void 0 : (g = c.sponsored_data) == null ? void 0 : g.client_token,
                                            adID: c == null ? void 0 : (g = c.sponsored_data) == null ? void 0 : g.ad_id,
                                            attachment: a,
                                            canOverlapWithPreviousAttachment: d !== 0 || e,
                                            onMatch_UNSTABLE_DO_NOT_USE: f ? p : void 0,
                                            trackingData: c == null ? void 0 : c.encrypted_tracking
                                        })
                                    }),
                                    story: c
                                }), d === 0 ? v : null]
                            }), u ? h.jsxs(h.Fragment, {
                                children: [h.jsx(b("CometFeedStoryAttachmentFooterSection.react"), {
                                    adClientToken: c == null ? void 0 : (g = c.sponsored_data) == null ? void 0 : g.client_token,
                                    adID: c == null ? void 0 : (g = c.sponsored_data) == null ? void 0 : g.ad_id,
                                    attachment: a,
                                    onMatch_UNSTABLE_DO_NOT_USE: f ? q : void 0,
                                    trackingData: c == null ? void 0 : c.encrypted_tracking
                                }), h.jsx(b("CometFeedStoryAttachmentDisclaimerFooterSection.react"), {
                                    adClientToken: c == null ? void 0 : (g = c.sponsored_data) == null ? void 0 : g.client_token,
                                    adID: c == null ? void 0 : (g = c.sponsored_data) == null ? void 0 : g.ad_id,
                                    attachment: a,
                                    trackingData: c == null ? void 0 : c.encrypted_tracking
                                })]
                            }) : null]
                        }, d)
                    })
                })
            })
        }))
    }
}
), null);
__d("CometProfileVerificationBadgePopoverQuery$Parameters", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        kind: "PreloadableConcreteRequest",
        params: {
            id: "3202546623097593",
            metadata: {
                relayPreloadable: !0
            },
            name: "CometProfileVerificationBadgePopoverQuery",
            operationKind: "query",
            text: null
        }
    };
    e.exports = a
}
), null);
__d("BaseContainerQueryElement.react", ["React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React"), i = {
        root: {
            boxSizing: "rq0escxv",
            flexShrink: "pfnyh3mw",
            position: "l9j0dhe7"
        }
    };
    function a(a, c) {
        var d = a.breakpoint
          , e = a.inverseToContainer;
        e = e === void 0 ? !1 : e;
        var f = a.maxWidth
          , j = a.minWidth
          , k = a.xstyle;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["breakpoint", "inverseToContainer", "maxWidth", "minWidth", "xstyle"]);
        return h.jsx("div", babelHelpers["extends"]({}, a, {
            className: (g || (g = b("stylex")))(i.root, k),
            ref: c,
            style: {
                maxWidth: f,
                minWidth: j,
                width: e ? "calc((" + d + "px - 100%) * 9999)" : "calc((100% - " + (d - .1) + "px) * 9999)"
            }
        }))
    }
    c = h.forwardRef(a);
    e.exports = c
}
), null);
__d("TetraOverlappingFacepileUnstyled.react", ["ix", "fbt", "BaseContainerQueryElement.react", "CometComponentWithKeyCommands.react", "CometKeys", "CometPressable.react", "CometTooltip.react", "FocusGroup.react", "JSScheduler", "React", "TetraIcon.react", "TetraProfilePhoto.react", "TetraText.react", "fbicon", "focusScopeQueries", "stylex", "useCometUniqueID", "useIntersectionObserver"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i, j = b("React");
    c = b("FocusGroup.react").createFocusGroup(b("focusScopeQueries").tabbableScopeQuery);
    var k = c[0]
      , l = c[1]
      , m = -4
      , n = {
        item: {
            marginBottom: "sej5wr8e",
            position: "l9j0dhe7"
        },
        itemWithSpacing: {
            marginStart: "rl04r1d5"
        },
        itemWithoutMargin: {
            position: "l9j0dhe7"
        },
        items: {
            display: "j83agx80",
            flexDirection: "btwxx1t3",
            flexShrink: "pfnyh3mw",
            flexWrap: "lhclo0ds",
            overflowX: "ni8dbmo4",
            overflowY: "stjgntxs",
            position: "l9j0dhe7"
        },
        overflow16: {
            height: "gl3lb2sf",
            width: "hhz5lgdu"
        },
        overflow16Child: {
            alignItems: "bp9cbjyn",
            display: "j83agx80",
            justifyContent: "taijpn5t",
            marginStart: "lq239pai"
        },
        overflow16Frame: {
            marginStart: "ggphbty4",
            overflowX: "ni8dbmo4",
            overflowY: "stjgntxs",
            width: "xthkpp0z"
        },
        overflow24: {
            height: "rgmg9uty",
            width: "b73ngqbp"
        },
        overflow32: {
            height: "k7cz35w2",
            width: "bsnbvmp4"
        },
        overflow36: {
            height: "tv7at329",
            width: "thwo4zme"
        },
        overflow40: {
            height: "qypqp5cg",
            width: "q676j6op"
        },
        overflow48: {
            height: "m7zwrmfr",
            width: "tmrshh9y"
        },
        overflowItem: {
            alignItems: "bp9cbjyn",
            borderTopStartRadius: "s45kfl79",
            borderTopEndRadius: "emlxlaya",
            borderBottomEndRadius: "bkmhp75w",
            borderBottomStartRadius: "spb7xbtv",
            display: "j83agx80",
            flexShrink: "pfnyh3mw",
            justifyContent: "taijpn5t",
            pointerEvents: "oqq733wu"
        },
        overflowItemBg: {
            fill: "lw8b5zex"
        },
        overflowItemContainer: {
            bottom: "i09qtzwb",
            boxSizing: "rq0escxv",
            end: "n7fi1qx3",
            position: "pmk7jnqg",
            start: "j9ispegn",
            top: "kr520xx4",
            display: "j83agx80",
            flexDirection: "btwxx1t3",
            pointerEvents: "hzruof5a"
        },
        overflowItemOverlay: {
            fill: "lw8b5zex",
            opacity: "b5wmifdl",
            transitionDuration: "c5ndavph",
            transitionProperty: "art1omkt",
            transitionTimingFunction: "ot9fgl3s"
        },
        overflowItemOverlayHovered: {
            fill: "geeicf24",
            opacity: "pedkr2u6",
            transitionDuration: "akwz6i9j"
        },
        overflowItemOverlayPressed: {
            fill: "jchep4xs",
            opacity: "pedkr2u6",
            transitionDuration: "akwz6i9j"
        },
        overflowItemSVG: {
            bottom: "i09qtzwb",
            end: "n7fi1qx3",
            position: "pmk7jnqg",
            start: "j9ispegn",
            top: "kr520xx4"
        },
        root: {
            display: "j83agx80",
            flexDirection: "cbu4d94t"
        },
        rootInline: {
            alignItems: "bp9cbjyn",
            flexDirection: "btwxx1t3"
        },
        text: {
            display: "j83agx80",
            flexDirection: "btwxx1t3",
            paddingTop: "pybr56ya"
        },
        textInline: {
            paddingStart: "b3onmgus",
            paddingTop: "jb3vyjys",
            flexBasis: "rj1gh0hx",
            flexGrow: "buofh1pr"
        }
    }
      , o = {
        16: {
            minWidth: "a5nuqjux"
        },
        24: {
            minWidth: "alsk43pb"
        },
        32: {
            minWidth: "gl2wjlmp"
        },
        36: {
            minWidth: "jgsskzai"
        },
        40: {
            minWidth: "rjkj87ba"
        },
        48: {
            minWidth: "nhgh0rzy"
        }
    }
      , p = {
        center: {
            justifyContent: "taijpn5t"
        },
        end: {
            justifyContent: "bkfpd7mw"
        },
        start: {
            justifyContent: "jifvfom9"
        }
    };
    function a(a) {
        var c = a.align;
        c = c === void 0 ? "start" : c;
        var d = a.items
          , e = a.isTextInline;
        e = e === void 0 ? !1 : e;
        var f = a.count
          , g = f === void 0 ? d.length : f;
        f = a.ellipsisTooltip;
        var u = a.linkProps
          , v = a.onPress
          , w = a.size
          , x = a.testID;
        x = a.testOnly_pressed;
        var y = x === void 0 ? !1 : x;
        x = a.text;
        a = a.disableMarginOnItems;
        var z = a === void 0 ? !1 : a
          , A = m
          , B = Math.min(g, d.length, e ? 3 : Infinity)
          , C = j.useRef(null);
        a = [{
            command: {
                key: b("CometKeys").LEFT
            },
            description: h._("M\u1ee5c tr\u01b0\u1edbc \u0111\u00f3"),
            handler: function() {}
        }, {
            command: {
                key: b("CometKeys").RIGHT
            },
            description: h._("M\u1ee5c ti\u1ebfp theo"),
            handler: function() {}
        }];
        d = j.jsxs("div", {
            className: (i || (i = b("stylex")))(n.items),
            ref: C,
            role: "row",
            style: {
                height: w
            },
            children: [d.slice(0, B).map(function(a, c) {
                var d = a.containerComponent
                  , e = a.linkProps
                  , f = a.onPress
                  , g = a.testOnly_pressed;
                a = babelHelpers.objectWithoutPropertiesLoose(a, ["containerComponent", "linkProps", "onPress", "testOnly_pressed"]);
                return j.jsxs(j.Fragment, {
                    children: [j.jsx(b("BaseContainerQueryElement.react"), {
                        breakpoint: (c + 1) * (w + A) - A,
                        inverseToContainer: !0,
                        maxWidth: "100%",
                        minWidth: 0
                    }), j.jsx(q, babelHelpers["extends"]({}, a, {
                        Container: d,
                        FocusItemComponent: l,
                        divClassName: (i || (i = b("stylex")))(z ? n.itemWithoutMargin : n.item, c > 0 && n.itemWithSpacing),
                        isOverlapped: c > 0,
                        linkProps: e,
                        onPress: f,
                        parentRef: C,
                        role: "cell",
                        shape: "circle",
                        size: w,
                        testOnly_pressed: g,
                        testid: void 0
                    }))]
                }, c)
            }), j.jsxs("div", {
                className: i(n.overflowItemContainer),
                children: [d.slice(0, Math.min(d.length, B < g ? B : g)).map(function(a, c) {
                    return c === 0 && g > 1 ? null : j.jsx(b("BaseContainerQueryElement.react"), {
                        breakpoint: (c + 1) * (w + A) - A,
                        maxWidth: c === g - 1 ? "100%" : w + A,
                        minWidth: 0
                    }, "overflowPusher" + c)
                }), j.jsx(s, {
                    FocusItemComponent: l,
                    "aria-label": h._("Li\u00ean k\u1ebft \u0111\u1ec3 xem trang c\u00e1 nh\u00e2n c\u1ee7a m\u1ecdi ng\u01b0\u1eddi"),
                    count: g,
                    ellipsisTooltip: f,
                    linkProps: u,
                    onPress: v,
                    overlayDisabled: !0,
                    parentRef: C,
                    size: w,
                    spacing: A,
                    testid: void 0,
                    xstyle: [n.overflowItem, w === 16 && n.overflow16, w === 24 && n.overflow24, w === 32 && n.overflow32, w === 36 && n.overflow36, w === 40 && n.overflow40, w === 48 && n.overflow48],
                    children: function(a) {
                        var c = a.hovered;
                        a = a.pressed;
                        return j.jsxs(j.Fragment, {
                            children: [j.jsx(t, {
                                hovered: c,
                                isOverlapped: B > 1,
                                pressed: a || y,
                                size: w
                            }), w === 16 ? j.jsx("div", {
                                className: (i || (i = b("stylex")))(n.overflow16Frame),
                                children: j.jsx("div", {
                                    className: (i || (i = b("stylex")))(n.overflow16Child),
                                    children: j.jsx(b("TetraIcon.react"), {
                                        color: "white",
                                        icon: r(w)
                                    })
                                })
                            }) : j.jsx(b("TetraIcon.react"), {
                                color: "white",
                                icon: r(w)
                            })]
                        })
                    }
                })]
            })]
        });
        return j.jsxs("div", {
            className: i(n.root, e && n.rootInline, p[c]),
            "data-testid": void 0,
            role: "grid",
            children: [j.jsx(b("CometComponentWithKeyCommands.react"), {
                commandConfigs: a,
                xstyle: e && B >= 3 && o[w],
                children: j.jsx(k, {
                    orientation: "horizontal",
                    tabScopeQuery: b("focusScopeQueries").tabbableScopeQuery,
                    wrap: !0,
                    children: d
                })
            }), x != null ? j.jsx("div", {
                className: (i || (i = b("stylex")))(n.text, e && n.textInline, p[c]),
                children: j.jsx(b("TetraText.react"), {
                    color: "secondary",
                    type: "body3",
                    children: x
                })
            }) : null]
        })
    }
    function q(a) {
        var c = a.Container
          , d = a.FocusItemComponent
          , e = a.divClassName
          , f = a.parentRef
          , g = babelHelpers.objectWithoutPropertiesLoose(a, ["Container", "FocusItemComponent", "divClassName", "parentRef"]);
        a = j.useState(!1);
        var h = a[0]
          , i = a[1];
        a = j.useCallback(function(a) {
            var c = a.intersectionRatio;
            b("JSScheduler").runWithPriority(b("JSScheduler").priorities.unstable_UserBlocking, function() {
                i(c < .5)
            })
        }, []);
        a = b("useIntersectionObserver")(a, {
            root: function() {
                var a;
                return (a = f.current) != null ? a : null
            },
            threshold: .5
        });
        return j.jsx("div", {
            className: e,
            ref: a,
            role: "cell",
            children: j.jsx(d, {
                disabled: h,
                children: c ? j.jsx(c, {
                    children: function(a) {
                        return j.jsx(b("TetraProfilePhoto.react"), babelHelpers["extends"]({}, g, {
                            overlayDisabled: !0,
                            ref: a
                        }))
                    }
                }) : j.jsx(b("TetraProfilePhoto.react"), babelHelpers["extends"]({}, g, {
                    overlayDisabled: !0
                }))
            })
        })
    }
    function r(a) {
        switch (a) {
        case 36:
        case 32:
            return b("fbicon")._(g("484386"), 16);
        case 40:
        case 48:
            return b("fbicon")._(g("484388"), 24);
        default:
            return b("fbicon")._(g("484385"), 12)
        }
    }
    function s(a) {
        var c = a.FocusItemComponent;
        a.count;
        var d = a.ellipsisTooltip
          , e = a.parentRef
          , f = a.size
          , g = a.spacing;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["FocusItemComponent", "count", "ellipsisTooltip", "parentRef", "size", "spacing"]);
        var h = j.useState(!1)
          , i = h[0]
          , k = h[1];
        h = j.useState(null);
        var l = h[0]
          , m = h[1];
        h = j.useCallback(function(a) {
            var c = a.intersectionRatio;
            b("JSScheduler").runWithPriority(b("JSScheduler").priorities.unstable_UserBlocking, function() {
                k(c < .5)
            })
        }, []);
        h = b("useIntersectionObserver")(h, {
            root: function() {
                var a;
                return (a = e.current) != null ? a : null
            },
            threshold: .5
        });
        var n = function(a) {
            if (!a)
                return;
            a = e.current;
            if (!a)
                return;
            a = a.getBoundingClientRect();
            a = a.width;
            a = Math.floor((a + g) / (f + g));
            m(a - 1)
        };
        a = j.jsx(b("CometPressable.react"), babelHelpers["extends"]({}, a, {
            ref: h,
            role: "cell"
        }));
        d && (a = j.jsx(b("CometTooltip.react"), {
            align: "middle",
            onVisibilityChange: n,
            position: "below",
            tooltip: l != null ? d(l) : "",
            children: a
        }));
        return j.jsxs(c, {
            disabled: i,
            children: [" ", a, " "]
        })
    }
    function t(a) {
        var c = a.hovered
          , d = a.isOverlapped
          , e = a.pressed;
        a = a.size;
        var f = b("useCometUniqueID")();
        return j.jsxs("svg", {
            className: (i || (i = b("stylex")))(n.overflowItemSVG),
            height: a,
            viewBox: "0 0 " + a + " " + a,
            width: a,
            children: [d && j.jsxs("mask", {
                id: f,
                suppressHydrationWarning: !0,
                children: [j.jsx("circle", {
                    cx: a / 2,
                    cy: a / 2,
                    fill: "white",
                    r: a / 2
                }), j.jsx("circle", {
                    cx: -a / 2 + 4,
                    cy: a / 2,
                    fill: "black",
                    r: a / 2 + 2
                })]
            }), j.jsx("circle", babelHelpers["extends"]({
                className: i(n.overflowItemBg),
                cx: a / 2,
                cy: a / 2,
                r: a / 2,
                role: "cell",
                suppressHydrationWarning: !0
            }, d ? {
                mask: "url(#" + f + ")"
            } : null)), j.jsx("circle", babelHelpers["extends"]({
                className: i(n.overflowItemOverlay, c && n.overflowItemOverlayHovered, e && n.overflowItemOverlayPressed),
                cx: a / 2,
                cy: a / 2,
                r: a / 2,
                role: "cell",
                suppressHydrationWarning: !0
            }, d ? {
                mask: "url(#" + f + ")"
            } : null))]
        })
    }
}
), null);
__d("actorHovercardContainer", ["ActorHovercard.react", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        return a == null ? null : function(c) {
            return g.jsx(b("ActorHovercard.react"), {
                actorID: a,
                position: "below",
                children: c.children
            })
        }
    }
}
), null);
__d("CometPageVerificationIcon.react", ["ix", "fbt", "CometDarkModeContext", "CometImage.react", "React", "TetraIcon.react", "asset", "fbicon", "stylex"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i = b("React");
    function a(a) {
        var c = a.isInverted
          , d = a.size;
        a = a.verificationBadge;
        var e = i.useContext(b("CometDarkModeContext"));
        e = e.isDarkModeEnabled;
        var f = null
          , j = b("fbicon")._(g("498144"), 12)
          , k = 12;
        d === "large" && (k = 16,
        j = b("fbicon")._(g("498145"), 16));
        if (c === !0)
            f = i.jsx(b("TetraIcon.react"), {
                alt: h._("T\u00e0i kho\u1ea3n \u0111\u00e3 x\u00e1c minh"),
                color: "white",
                icon: j,
                size: k
            });
        else
            switch (a) {
            case "BLUE_VERIFIED":
                d === "large" ? c = e ? g("1510597") : g("1510599") : c = e ? g("1510593") : g("1510595");
                f = i.jsx(b("CometImage.react"), {
                    alt: h._("T\u00e0i kho\u1ea3n \u0111\u00e3 x\u00e1c minh"),
                    height: k,
                    src: c,
                    width: k
                });
                break;
            case "GRAY_VERIFIED":
                f = i.jsx(b("TetraIcon.react"), {
                    alt: h._("T\u00e0i kho\u1ea3n \u0111\u00e3 x\u00e1c minh"),
                    color: "secondary",
                    icon: j,
                    size: k
                });
                break
            }
        return f != null ? i.jsx("span", {
            className: "hrs1iv20 pq6dq46d",
            children: f
        }) : null
    }
}
), null);
__d("CometProfileVerificationBadgePopover.entrypoint", ["JSResource", "CometProfileVerificationBadgePopoverQuery$Parameters"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        getPreloadProps: function(a) {
            a = a.profileID;
            return {
                queries: {
                    queryReference: {
                        parameters: b("CometProfileVerificationBadgePopoverQuery$Parameters"),
                        variables: {
                            profileID: a
                        }
                    }
                }
            }
        },
        root: b("JSResource")("CometProfileVerificationBadgePopover.react").__setRef("CometProfileVerificationBadgePopover.entrypoint")
    };
    e.exports = a
}
), null);
__d("CometProfileVerificationBadge.react", ["fbt", "CometHovercardTrigger.react", "CometPageVerificationIcon.react", "CometPressable.react", "CometProfileVerificationBadgePopover.entrypoint", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a(a) {
        var c = a.profileID;
        a = a.size;
        var d = a === void 0 ? "large" : a;
        return h.jsx(b("CometHovercardTrigger.react"), {
            align: "start",
            display: "inline",
            popoverEntryPoint: b("CometProfileVerificationBadgePopover.entrypoint"),
            popoverProps: {
                profileID: c
            },
            position: "above",
            children: function(a) {
                return h.jsx(b("CometPressable.react"), {
                    "aria-label": g._("\u0110\u00e3 x\u00e1c minh"),
                    cursorDisabled: !0,
                    overlayRadius: "50%",
                    ref: a,
                    children: h.jsx(b("CometPageVerificationIcon.react"), {
                        size: d,
                        verificationBadge: "BLUE_VERIFIED"
                    })
                })
            }
        })
    }
}
), null);
__d("ProfileCometEngagementLoggingContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext({});
    e.exports = c
}
), null);
__d("useProfileEngagementData", ["ProfileCometContext", "ProfileCometEngagementLoggingContext", "ProfileCometSession", "React", "recoverableViolation", "useCurrentRoute"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React")
      , h = "2220391788200892";
    function a(a) {
        var c = g.useContext(b("ProfileCometContext"))
          , d = g.useContext(b("ProfileCometEngagementLoggingContext"));
        c.profileID === "" && b("recoverableViolation")("Tried to use Profile Engagement Logger without passing a profile ID via a ProfileCometContext provider.", "profile_comet");
        var e = b("useCurrentRoute")();
        return babelHelpers["extends"]({
            appid: h,
            profile_id_dummy: c.profileID,
            profile_session_id: b("ProfileCometSession").get(c.profileID, e)
        }, d, a)
    }
}
), null);
__d("useProfileEngagementClickCallback", ["React", "recoverableViolation", "requireDeferred", "useProfileEngagementData"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React")
      , h = b("requireDeferred")("ProfileEngagementTypedLoggerLite");
    function a(a, c) {
        var d = b("useProfileEngagementData")(a);
        d.product_bucket == null && (b("recoverableViolation")("product_bucket is a required field for profile engagement logging", "profile_comet"),
        d = babelHelpers["extends"]({}, d, {
            product_bucket: "unknown"
        }));
        a = g.useCallback(function(a) {
            h.onReady(function(a) {
                a = a.log;
                a(babelHelpers["extends"]({
                    engagement_type: "click"
                }, d))
            }),
            c && c(a)
        }, [c, d]);
        return a
    }
}
), null);
__d("ProfileEngagementTypedLoggerLite", ["generateLiteTypedLogger"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("generateLiteTypedLogger")("logger:ProfileEngagementLoggerConfig")
}
), null);
__d("FeedComposerCometMentionsTypeaheadEntryWithTagSuggestion_data.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: {
            mask: !1
        },
        name: "FeedComposerCometMentionsTypeaheadEntryWithTagSuggestion_data",
        selections: [{
            alias: null,
            args: null,
            concreteType: "User",
            kind: "LinkedField",
            name: "node",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "name",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "id",
                storageKey: null
            }, {
                alias: "photo",
                args: [{
                    kind: "Literal",
                    name: "height",
                    value: 40
                }, {
                    kind: "Literal",
                    name: "width",
                    value: 40
                }],
                concreteType: "Image",
                kind: "LinkedField",
                name: "profile_picture",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "uri",
                    storageKey: null
                }],
                storageKey: "profile_picture(height:40,width:40)"
            }],
            storageKey: null
        }],
        type: "SuggestedWithTagsEdge",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("FeedComposerCometMentionsTypeaheadEntryWithTagTaggedFriend_data.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: {
            mask: !1
        },
        name: "FeedComposerCometMentionsTypeaheadEntryWithTagTaggedFriend_data",
        selections: [{
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "name",
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        }, {
            alias: "photo",
            args: [{
                kind: "Literal",
                name: "height",
                value: 40
            }, {
                kind: "Literal",
                name: "width",
                value: 40
            }],
            concreteType: "Image",
            kind: "LinkedField",
            name: "profile_picture",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "uri",
                storageKey: null
            }],
            storageKey: "profile_picture(height:40,width:40)"
        }],
        type: "Profile",
        abstractKey: "__isProfile"
    };
    e.exports = a
}
), null);
__d("FeedComposerCometMentionsTypeaheadEntryWithTag_data.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: {
            mask: !1
        },
        name: "FeedComposerCometMentionsTypeaheadEntryWithTag_data",
        selections: [{
            alias: null,
            args: null,
            concreteType: "User",
            kind: "LinkedField",
            name: "node",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "name",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "id",
                storageKey: null
            }, {
                alias: "photo",
                args: [{
                    kind: "Literal",
                    name: "height",
                    value: 40
                }, {
                    kind: "Literal",
                    name: "width",
                    value: 40
                }],
                concreteType: "Image",
                kind: "LinkedField",
                name: "profile_picture",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "uri",
                    storageKey: null
                }],
                storageKey: "profile_picture(height:40,width:40)"
            }],
            storageKey: null
        }],
        type: "FriendsEdge",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("FeedComposerCometMentionsTypeaheadEntry_data.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "name",
            storageKey: null
        }, {
            alias: "photo",
            args: [{
                kind: "Literal",
                name: "height",
                value: 40
            }, {
                kind: "Variable",
                name: "scale",
                variableName: "scale"
            }, {
                kind: "Literal",
                name: "width",
                value: 40
            }],
            concreteType: "Image",
            kind: "LinkedField",
            name: "profile_picture",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "uri",
                storageKey: null
            }],
            storageKey: null
        }];
        return {
            argumentDefinitions: [{
                kind: "RootArgument",
                name: "scale"
            }],
            kind: "Fragment",
            metadata: {
                mask: !1
            },
            name: "FeedComposerCometMentionsTypeaheadEntry_data",
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "score",
                storageKey: null
            }, {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "node",
                plural: !1,
                selections: [{
                    kind: "InlineFragment",
                    selections: a,
                    type: "User",
                    abstractKey: null
                }, {
                    kind: "InlineFragment",
                    selections: a,
                    type: "Group",
                    abstractKey: null
                }, {
                    kind: "InlineFragment",
                    selections: a,
                    type: "Event",
                    abstractKey: null
                }, {
                    kind: "InlineFragment",
                    selections: a,
                    type: "Page",
                    abstractKey: null
                }, {
                    kind: "InlineFragment",
                    selections: a,
                    type: "ContextualProfile",
                    abstractKey: "__isContextualProfile"
                }],
                storageKey: null
            }],
            type: "CometComposerTypeaheadResultEntry",
            abstractKey: null
        }
    }();
    e.exports = a
}
), null);
__d("getEditorStateFromContentEditableState", ["ContentState", "EditorState"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c) {
        switch (a.__type) {
        case "plain-text":
            var d = a.hasFocus
              , e = a.selectionOffsets
              , f = a.text;
            f = b("ContentState").createFromText(f.replace(/\n\n$/, "\n"));
            var g = b("EditorState").createWithContent(f);
            if (e) {
                var h, i, j, k = f.getFirstBlock(), l = 0;
                while (k) {
                    var m = k.getKey()
                      , n = k.getLength()
                      , o = l;
                    l += n;
                    l >= e.start && e.start - o >= 0 && (h = {
                        key: m,
                        offset: e.start - o
                    });
                    l >= e.end && e.end - o >= 0 && (i = {
                        key: m,
                        offset: e.end - o
                    });
                    j == null && (i && !h ? j = !0 : h && !i ? j = !1 : i && h && (j = h.offset > i.offset));
                    k = f.getBlockAfter(m)
                }
                if (h && i) {
                    n = g.getSelection().merge({
                        anchorKey: h.key,
                        anchorOffset: h.offset,
                        focusKey: i.key,
                        focusOffset: i.offset,
                        isBackward: !!j
                    });
                    g = b("EditorState").forceSelection(g, n)
                }
            } else
                d && (g = b("EditorState").moveFocusToEnd(g));
            return g;
        case "editor-state-based":
        default:
            return c != null ? b("EditorState").set(a.draftEditorState, {
                decorator: c
            }) : a.draftEditorState
        }
    }
}
), null);
__d("useCometMentionsStrategyResolver", ["JSTracing", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        g.useLayoutEffect(function() {
            a.forEach(function(a) {
                var c = a.dataSource;
                b("JSTracing").clear(function() {
                    return c.bootstrap()
                })
            })
        }, [a]);
        return g.useMemo(function() {
            var b = new Map();
            return function(c) {
                var d = {
                    dataSource: null,
                    searchResult: null
                };
                if (c == null)
                    return d;
                var e = b.get(c);
                if (e != null)
                    return e;
                for (var e = 0; e < a.length; e++) {
                    var f = a[e]
                      , g = f.dataSource;
                    f = f.searchStrategy;
                    f = f.findMentionableString(c);
                    if (f != null) {
                        g = {
                            dataSource: g,
                            searchResult: f
                        };
                        b.set(c, g);
                        return g
                    }
                }
                b.set(c, d);
                return d
            }
        }, [a])
    }
}
), null);
__d("FeedComposerCometMentionsTypeaheadEntry", ["CometRelay", "recoverableViolation", "FeedComposerCometMentionsTypeaheadEntry_data.graphql", "FeedComposerCometMentionsTypeaheadEntryWithTag_data.graphql", "FeedComposerCometMentionsTypeaheadEntryWithTagSuggestion_data.graphql", "FeedComposerCometMentionsTypeaheadEntryWithTagTaggedFriend_data.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i, j;
    g !== void 0 ? g : g = b("FeedComposerCometMentionsTypeaheadEntry_data.graphql");
    h !== void 0 ? h : h = b("FeedComposerCometMentionsTypeaheadEntryWithTag_data.graphql");
    i !== void 0 ? i : i = b("FeedComposerCometMentionsTypeaheadEntryWithTagSuggestion_data.graphql");
    j !== void 0 ? j : j = b("FeedComposerCometMentionsTypeaheadEntryWithTagTaggedFriend_data.graphql");
    a = function() {
        a.fromGraphql = function(b) {
            var c, d, e;
            e = b.data.node;
            if (e == null)
                return null;
            c = (c = e) == null ? void 0 : c.name;
            d = (d = e) == null ? void 0 : d.id;
            e = (e = e) == null ? void 0 : (e = e.photo) == null ? void 0 : e.uri;
            if (c == null || d == null || e == null)
                return null;
            if (b.type === "MENTION_SEARCH_RESULT") {
                var f = b.data.score;
                return f != null ? new a({
                    data: {
                        id: d,
                        name: c,
                        photoURI: e,
                        score: f
                    },
                    type: b.type
                }) : null
            }
            return new a({
                data: {
                    id: d,
                    name: c,
                    photoURI: e
                },
                type: b.type
            })
        }
        ;
        function a(a) {
            this.$1 = a
        }
        var c = a.prototype;
        c.getKey = function() {
            return this.$1.data.id
        }
        ;
        c.getLabel = function() {
            return this.$1.data.name
        }
        ;
        c.getRawData = function() {
            return this.$1
        }
        ;
        c.getPhotoURI = function() {
            return this.$1.data.photoURI
        }
        ;
        c.getScore = function() {
            switch (this.$1.type) {
            case "MENTION_SEARCH_RESULT":
                return this.$1.data.score;
            default:
                b("recoverableViolation")("Attempting to access score when it doesnt exist", "comet_composer");
                return 0
            }
        }
        ;
        c.getType = function() {
            return this.$1.type
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("createCometWithTagStrategy", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        var b = a.minMatchLength;
        return {
            findMentionableString: function(a) {
                return a.length >= b ? {
                    leadOffset: a.length,
                    matchingString: a,
                    replaceableString: a
                } : null
            },
            name: "WithTagStrategy(" + b.toString() + ")"
        }
    }
}
), null);
__d("CometSearchMentionsBaseViewItem.react", ["CometSearchTypeaheadBaseViewItem.react", "React", "emptyFunction"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.onPressEntry
          , d = a.onPressEntryIn;
        a.queryString;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["onPressEntry", "onPressEntryIn", "queryString"]);
        var e = function(a, b) {
            b.preventDefault(),
            c && c(a, b),
            d && d(a, b)
        };
        return g.jsx(b("CometSearchTypeaheadBaseViewItem.react"), babelHelpers["extends"]({}, a, {
            onPressEntry: b("emptyFunction"),
            onPressEntryIn: e
        }))
    }
}
), null);
__d("CometMediaViewerMentionsTypeaheadEmptyState.react", ["fbt", "React", "TetraText.react", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a() {
        return h.jsx("div", {
            className: "taijpn5t tv7at329 j83agx80 bp9cbjyn",
            children: h.jsx(b("TetraText.react"), {
                color: "tertiary",
                type: "body2",
                children: g._("Kh\u00f4ng t\u00ecm th\u1ea5y ng\u01b0\u1eddi n\u00e0o")
            })
        })
    }
}
), null);
__d("CometSearchTypeaheadBaseLayoutMentionsStrategy.react", ["fbt", "CometMediaViewerMentionsTypeaheadEmptyState.react", "CometMentionsA11yContext", "CometSearchTypeaheadBaseProgressGlimmer.react", "CometSearchTypeaheadBaseViewListStrategy.react", "React", "useSearchCometTypeaheadBaseLayoutStrategyARIAProps"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a(a) {
        var c = a.isLoading;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["isLoading"]);
        var d = b("useSearchCometTypeaheadBaseLayoutStrategyARIAProps")({
            activeEntries: a.entries,
            helperText: "",
            highlightedEntry: a.highlightedEntry,
            inputLabel: "",
            isOpened: !0,
            viewLabel: g._("G\u1ee3i \u00fd nh\u1eafc \u0111\u1ebfn")
        })
          , e = d.ariaInputProps;
        d = d.ariaViewProps;
        var f = h.useContext(b("CometMentionsA11yContext"));
        f != null && f(e["aria-activedescendant"], e["aria-controls"]);
        return h.jsxs("div", babelHelpers["extends"]({}, d, {
            children: [h.jsx(b("CometSearchTypeaheadBaseViewListStrategy.react"), babelHelpers["extends"]({}, a)), c ? h.jsx(b("CometSearchTypeaheadBaseProgressGlimmer.react"), {}) : null, !c && a.entries.length === 0 ? h.jsx(b("CometMediaViewerMentionsTypeaheadEmptyState.react"), {}) : null]
        }))
    }
}
), null);
__d("cometSearchTypeaheadBaseContainsMatchBuilder", ["escapeRegex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        a = a.query;
        var c = new RegExp("" + b("escapeRegex")(a),"i");
        return function(a) {
            return c.test((a = a.getLabel()) != null ? a : "")
        }
    }
}
), null);
__d("CometTypeaheadGraphQLBootstrapDataSource", ["CometRelay", "CometSearchTypeaheadBaseDataCacheProvider", "CometSearchTypeaheadBaseInMemoryMapDataCache", "cometSearchTypeaheadBaseContainsMatchBuilder", "cometSearchTypeaheadBaseQueryMatchBuilder", "cometSearchTypeaheadBaseStartsWithMatchBuilder", "promiseDone"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {
        prefix: b("cometSearchTypeaheadBaseStartsWithMatchBuilder"),
        substring: b("cometSearchTypeaheadBaseContainsMatchBuilder"),
        token: b("cometSearchTypeaheadBaseQueryMatchBuilder")
    };
    a = function() {
        function a(a) {
            var c = a.gqlQuery
              , d = a.matchStrategy;
            d = d === void 0 ? "prefix" : d;
            var e = a.normalize
              , f = a.queryVariables;
            a = a.relayEnvironment;
            this.$3 = !1;
            this.$1 = new (b("CometSearchTypeaheadBaseDataCacheProvider"))({
                cache: new (b("CometSearchTypeaheadBaseInMemoryMapDataCache"))(),
                matchBuilder: g[d]
            });
            this.$2 = c;
            this.$4 = e;
            this.$5 = f;
            this.$6 = a
        }
        var c = a.prototype;
        c.isBootstrapped = function() {
            return this.$3
        }
        ;
        c.bootstrap = function() {
            var a = this;
            b("promiseDone")(b("CometRelay").fetchQuery(this.$6, this.$2, this.$5).toPromise().then(this.$4).then(function(b) {
                a.$1.add(b, null),
                a.$3 = !0
            }))
        }
        ;
        c.fetchCache = function(a) {
            var b = a.query;
            b = this.$1.match(b);
            return {
                entries: b,
                params: a
            }
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("CometTypeaheadCompositeDataSource", ["Promise", "cometSearchDataEntryBaseKeyBuilder", "cometSearchTypeaheadBaseDedupEntries"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            var b = a.bootstrapDataSource
              , c = a.limit
              , d = a.networkDataSource;
            a = a.nullstateDataSource;
            this.$1 = b;
            this.$2 = c;
            this.$3 = d;
            this.$4 = a
        }
        var c = a.prototype;
        c.bootstrap = function() {
            this.$1 != null && this.$1.bootstrap(),
            this.$4 != null && this.$4.fetchNetwork({
                query: ""
            })
        }
        ;
        c.fetchCache = function(a) {
            var c = a.query;
            if (this.$4 != null && c === "")
                return this.$4.fetchCache(a);
            if (c === "")
                return {
                    entries: [],
                    params: a
                };
            if (this.$1 == null)
                return this.$3 != null ? this.$3.fetchCache(a) : {
                    entries: [],
                    params: a
                };
            c = this.$1.fetchCache(a);
            var d = c.entries;
            if (d.length >= this.$2 || this.$3 == null)
                return c;
            c = this.$3.fetchCache(a);
            a = c.entries;
            c = c.params;
            a = b("cometSearchTypeaheadBaseDedupEntries")((d = d) != null ? d : [], (d = a) != null ? d : [], b("cometSearchDataEntryBaseKeyBuilder"));
            return {
                entries: a,
                params: c
            }
        }
        ;
        c.fetchNetwork = function(a) {
            var c = a.query;
            if (this.$4 != null && c === "")
                return this.$4.fetchNetwork(a);
            if (c === "")
                return b("Promise").resolve({
                    entries: [],
                    params: a
                });
            c = this.$1;
            if (c == null && this.$3 == null)
                return b("Promise").resolve({
                    entries: [],
                    params: a
                });
            if (c == null)
                return this.$3 != null ? this.$3.fetchNetwork(a) : b("Promise").resolve({
                    entries: [],
                    params: a
                });
            var d = c.fetchCache(a);
            return this.$3 == null ? b("Promise").resolve(d) : this.$3.fetchNetwork(a).then(function(a) {
                var c = d.entries
                  , e = a.entries;
                a = a.params;
                e = b("cometSearchTypeaheadBaseDedupEntries")((c = c) != null ? c : [], (c = e) != null ? c : [], b("cometSearchDataEntryBaseKeyBuilder"));
                return {
                    entries: e,
                    params: a
                }
            })
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("useDeepEqualMemo", ["React", "areEqual"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g;
    c = b("React");
    var h = c.useRef
      , i = c.useEffect;
    function a(a) {
        var c = h(a)
          , d = (g || (g = b("areEqual")))(c.current, a) ? c.current : a;
        i(function() {
            c.current = d
        }, [d]);
        return d
    }
}
), null);
__d("useCometTypeaheadCompositeBootstrapDataSource", ["CometRelay", "CometTypeaheadGraphQLBootstrapDataSource", "React", "cometSearchTypeaheadPayloadDecoratorAddLimit", "useDeepEqualMemo"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.gqlQuery
          , d = a.limit
          , e = a.matchStrategy
          , f = a.normalize
          , h = a.queryVariables
          , i = g.useMemo(function() {
            return b("cometSearchTypeaheadPayloadDecoratorAddLimit")(d)
        }, [d])
          , j = b("CometRelay").useRelayEnvironment();
        a = b("useDeepEqualMemo")(h);
        var k = g.useMemo(function() {
            return new (b("CometTypeaheadGraphQLBootstrapDataSource"))({
                gqlQuery: c,
                matchStrategy: e,
                normalize: f,
                queryVariables: h,
                relayEnvironment: j
            })
        }, [a, j]);
        return g.useMemo(function() {
            return {
                bootstrap: function() {
                    return k.bootstrap()
                },
                fetchCache: function(a) {
                    return i(k.fetchCache(a))
                }
            }
        }, [k, i])
    }
}
), null);
__d("useCometTypeaheadCompositeDataSource", ["CometTypeaheadCompositeDataSource", "React", "cometSearchTypeaheadBaseFetchPayloadDecorate", "cometSearchTypeaheadPayloadDecoratorAddLimit"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.bootstrapDataSource
          , d = a.limit
          , e = a.networkDataSource
          , f = a.nullstateDataSource;
        a = a.payloadDecorators;
        var h = a === void 0 ? [] : a
          , i = g.useCallback(function(a) {
            return b("cometSearchTypeaheadBaseFetchPayloadDecorate")(a, [].concat(h, [b("cometSearchTypeaheadPayloadDecoratorAddLimit")(d)]))
        }, [d, h])
          , j = g.useMemo(function() {
            return new (b("CometTypeaheadCompositeDataSource"))({
                bootstrapDataSource: c,
                limit: d,
                networkDataSource: e,
                nullstateDataSource: f
            })
        }, [c, d, e, f]);
        return g.useMemo(function() {
            return {
                bootstrap: function() {
                    return j.bootstrap()
                },
                fetchCache: function(a) {
                    return i(j.fetchCache(a))
                },
                fetchNetwork: function(a) {
                    return j.fetchNetwork(a).then(function(a) {
                        return i(a)
                    })
                }
            }
        }, [j, i])
    }
}
), null);
__d("CometTypeaheadGraphQLDataSource", ["CometSearchTypeaheadBaseDataProvider", "CometSearchTypeaheadBaseDataProviderQueryVariablesBuilder", "CometSearchTypeaheadBaseNetworkCacheDataSource", "CometSearchTypeaheadBaseQueryDataCacheProvider", "cometSearchCacheEntryBaseKeyBuilder", "cometSearchTypeaheadBaseLabelSuffixBuilder"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            var c = a.gqlQuery
              , d = a.normalize
              , e = a.queryVariablesBuilderFunction;
            a = a.relayEnvironment;
            var f = function() {
                return e
            };
            f = new (b("CometSearchTypeaheadBaseDataProviderQueryVariablesBuilder"))(f);
            c = new (b("CometSearchTypeaheadBaseDataProvider"))({
                query: c,
                queryVariablesBuilder: f,
                relayEnvironment: a
            });
            f = new (b("CometSearchTypeaheadBaseQueryDataCacheProvider"))({
                dedupKeyBuilder: b("cometSearchCacheEntryBaseKeyBuilder"),
                suffixBuilder: b("cometSearchTypeaheadBaseLabelSuffixBuilder")
            });
            this.$1 = new (b("CometSearchTypeaheadBaseNetworkCacheDataSource"))(c,f,{
                normalizeFunc: d
            })
        }
        var c = a.prototype;
        c.fetchCache = function(a) {
            return this.$1.fetchCache(a)
        }
        ;
        c.fetchNetwork = function(a) {
            return this.$1.fetchNetwork(a)
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("useCometTypeaheadGraphQLDataSource", ["CometRelay", "CometTypeaheadGraphQLDataSource", "React", "cometSearchTypeaheadPayloadDecoratorAddLimit", "useDeepEqualMemo"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.gqlQuery
          , d = a.limit
          , e = a.normalize
          , f = a.queryVariablesBuilderFunction
          , h = g.useMemo(function() {
            return b("cometSearchTypeaheadPayloadDecoratorAddLimit")(d)
        }, [d])
          , i = b("CometRelay").useRelayEnvironment();
        a = b("useDeepEqualMemo")(f({
            query: ""
        }));
        var j = g.useMemo(function() {
            return new (b("CometTypeaheadGraphQLDataSource"))({
                gqlQuery: c,
                normalize: e,
                queryVariablesBuilderFunction: f,
                relayEnvironment: i
            })
        }, [a, i]);
        return g.useMemo(function() {
            return {
                fetchCache: function(a) {
                    return h(j.fetchCache(a))
                },
                fetchNetwork: function(a) {
                    return j.fetchNetwork(a).then(function(a) {
                        return h(a)
                    })
                }
            }
        }, [j, h])
    }
}
), null);
__d("getImplicitURLMatches", ["gkx", "URI", "URLMatcher"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("gkx")("1500551"), i = new RegExp("\\s");
    function a(a, c, d) {
        var e = a.getText()
          , f = 0
          , j = b("URLMatcher").match(e);
        while (j != null) {
            var k = e.indexOf(j)
              , l = k + j.length;
            (g || (g = b("URI"))).isValidURI(j) && (d.getLastBlock().getKey() !== a.getKey() || i.test(e.charAt(l)) || !h) && c(f + k, f + l, j);
            f += l;
            e = e.substring(l);
            j = b("URLMatcher").match(e)
        }
    }
    e.exports = a
}
), null);
__d("MWChatFacepile.bs", ["React", "stylex", "bs_caml_option"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React"), i = {
        root: {
            display: "j83agx80",
            position: "l9j0dhe7"
        },
        image: {
            borderTopStartRadius: "s45kfl79",
            borderTopEndRadius: "emlxlaya",
            borderBottomEndRadius: "bkmhp75w",
            borderBottomStartRadius: "spb7xbtv",
            position: "pmk7jnqg"
        },
        leftImage: {
            start: "j9ispegn",
            bottom: "i09qtzwb"
        },
        imageBorder: {
            borderTop: "onbmnuye",
            borderEnd: "ss08itiq",
            borderBottom: "gm9yxfny",
            borderStart: "e3a5340w"
        },
        rightImage: {
            end: "n7fi1qx3",
            top: "kr520xx4"
        },
        dropShadow: {
            boxShadow: "akv41dx8",
            ":hover": {
                boxShadow: "eb3gnj61"
            }
        }
    };
    function a(a) {
        var c = a.borderBetweenImages
          , d = a.children
          , e = a.firstParticipantURI
          , f = a.secondParticipantURI
          , j = a.shadow;
        a = a.size;
        c = c !== void 0 ? c : !0;
        d = d !== void 0 ? b("bs_caml_option").valFromOption(d) : null;
        j = j !== void 0 ? j : !1;
        a = a !== void 0 ? a : 30;
        var k = a / 1.5 | 0;
        k = {
            height: String(k) + "px",
            width: String(k) + "px"
        };
        return h.jsxs("div", {
            children: [h.jsx("img", {
                className: (g || (g = b("stylex")))(j ? i.dropShadow : !1, i.image, i.rightImage),
                style: k,
                alt: "",
                src: f
            }), h.jsx("img", {
                className: g(j ? i.dropShadow : !1, i.image, c ? i.imageBorder : !1, i.leftImage),
                style: k,
                alt: "",
                src: e
            }), d],
            className: g(i.root),
            style: {
                height: String(a) + "px",
                width: String(a) + "px"
            }
        })
    }
    c = a;
    f.styles = i;
    f.make = c
}
), null);
__d("MWChatFacepile.re", ["MWChatFacepile.bs"], (function(a, b, c, d, e, f) {
    (function(a) {
        return null
    }
    );
    a = b("MWChatFacepile.bs").make;
    f.make = a
}
), null);
__d("MWChatProfile.bs", ["React", "stylex", "bs_belt_Option", "BaseGlimmer.react"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React"), i = {
        root: {
            position: "l9j0dhe7"
        },
        img: {
            width: "k4urcfbm",
            height: "datstx6m",
            borderTopStartRadius: "s45kfl79",
            borderTopEndRadius: "emlxlaya",
            borderBottomEndRadius: "bkmhp75w",
            borderBottomStartRadius: "spb7xbtv",
            verticalAlign: "pzggbiyp",
            objectFit: "bixrwtb6"
        },
        activeNow: {
            display: "mkhogb32",
            position: "pmk7jnqg",
            backgroundColor: "jllm4f4h",
            width: "c9rrlmt1",
            height: "t6na6p9t",
            borderTop: "iruzoqzv",
            borderEnd: "n8v90iwk",
            borderBottom: "qx7ju95k",
            borderStart: "m8of71z0",
            bottom: "i09qtzwb",
            end: "n7fi1qx3",
            borderTopStartRadius: "s45kfl79",
            borderTopEndRadius: "emlxlaya",
            borderBottomEndRadius: "bkmhp75w",
            borderBottomStartRadius: "spb7xbtv"
        },
        active: {
            display: "a8c37x1j"
        }
    };
    function a(a) {
        var c = a.size
          , d = a.src
          , e = a.isActiveNow
          , f = a.alt;
        a = a.children;
        e = e !== void 0 ? e : !1;
        f = f !== void 0 ? f : "";
        f = d !== void 0 ? h.jsx("img", {
            className: (g || (g = b("stylex")))(i.img),
            alt: f,
            src: d
        }) : h.jsx(b("BaseGlimmer.react"), {
            className: (g || (g = b("stylex")))(i.img),
            index: 1
        });
        return h.jsxs("div", {
            children: [f, b("bs_belt_Option").getWithDefault(a, null), h.jsx("div", {
                className: (g || (g = b("stylex")))(i.activeNow, e ? i.active : !1)
            })],
            className: g(i.root),
            style: {
                height: String(c) + "px",
                width: String(c) + "px"
            }
        })
    }
    c = a;
    f.styles = i;
    f.make = c
}
), null);
__d("MWChatDeleteMessageEventEmitter", ["BaseEventEmitter"], (function(a, b, c, d, e, f) {
    "use strict";
    f.emit = a;
    f.subscribe = c;
    var g = "deleteMessage"
      , h = new (b("BaseEventEmitter"))();
    function a(a) {
        h.emit(g, a)
    }
    function c(a) {
        var b = h.addListener(g, a);
        return function() {
            return b.remove()
        }
    }
}
), null);
__d("MessengerMessageWebGraphQLQuery", ["WebGraphQLQueryBase"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        b.__getDocID = function() {
            return "2905186442914677"
        }
        ;
        b.getQueryID = function() {
            return "341205296991235"
        }
        ;
        return b
    }(b("WebGraphQLQueryBase"))
}
), null);
__d("MessengerThreadMetadataWebGraphQLQuery", ["WebGraphQLQueryBase"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        b.__getDocID = function() {
            return "1844738185554526"
        }
        ;
        b.getQueryID = function() {
            return "506565903040384"
        }
        ;
        return b
    }(b("WebGraphQLQueryBase"))
}
), null);
__d("MessengerMessageDFFFetcher.bs", ["Promise", "bs_caml_array", "WebGraphQL", "bs_caml_builtin_exceptions", "MessengerMessageTransformer.bs", "MessengerMessageWebGraphQLQuery", "MessengerThreadMetadataWebGraphQLQuery"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a, c, d) {
        return b("Promise").all(b("WebGraphQL").execAll([new (b("MessengerThreadMetadataWebGraphQLQuery"))({
            id: c.thread_id
        }), new (b("MessengerMessageWebGraphQLQuery"))({
            thread_and_message_id: {
                thread_id: c.thread_id,
                message_id: c.message_id
            }
        })], {
            actorID: a,
            batchName: "MessengerMessageDFFFetcher"
        })).then(function(c) {
            var e = b("bs_caml_array").caml_array_get(c, 0);
            c = b("bs_caml_array").caml_array_get(c, 1);
            e = e.message_thread;
            c = c.message;
            if (e == null)
                throw b("bs_caml_builtin_exceptions").not_found;
            else if (c == null)
                throw b("bs_caml_builtin_exceptions").not_found;
            else
                return b("Promise").resolve(b("MessengerMessageTransformer.bs").transformMessage(a, c, {
                    thread_id: null,
                    thread_fbid: e.thread_key.thread_fbid,
                    other_user_fbid: e.thread_key.other_user_id,
                    folder: e.folder.toLowerCase()
                }, d))
        })
    }
    f.fetch_ = a
}
), null);
__d("EmojiLikeConstants", ["EmojiStaticConfig"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("EmojiStaticConfig").sizeMap;
    f.sizeMap = a;
    c = Object.freeze({
        XSMALL: "xsmall",
        SMALL: "small",
        MEDIUM: "medium",
        LARGE: "large"
    });
    f.size = c;
    d = {
        dp16: "xsmall",
        dp32: "small",
        dp64: "medium",
        db64: "medium",
        dp128: "large"
    };
    f.sizeMapTransfer = d;
    e = Object.freeze({
        PICKER: "picker",
        HOT_LIKE: "hot_like"
    });
    f.source = e;
    b = [983040];
    f.FB_THUMBS_UP_EMOJI = b;
    a = "hot_emoji_source";
    f.SOURCE_TAG_PREFIX = a;
    c = "hot_emoji_size";
    f.TAG_PREFIX_NEW = c;
    d = "emoji_like";
    f.TAG_PREFIX_OLD = d;
    e = "\ud83d\udc4d";
    f.THUMBS_UP_EMOJI = e;
    b = [128077];
    f.THUMBS_UP_EMOJI_CODES = b
}
), null);
__d("monitorCodeUse", ["invariant", "BanzaiScuba", "ErrorNormalizeUtils", "ScriptPath", "SiteData", "forEachObject", "gkx", "ReactCurrentOwner"], (function(a, b, c, d, e, f, g) {
    var h;
    function i(a) {
        a = a.type;
        if (typeof a === "string")
            return a;
        return typeof a === "function" ? a.displayName || a.name : null
    }
    function j(a) {
        var b = 1e3
          , c = [];
        while (a && c.length < b)
            c.push(i(a) || ""),
            typeof a.tag === "number" ? a = a["return"] : a = a._currentElement && a._currentElement._owner;
        return c
    }
    function k(a) {
        return Array.isArray(a) ? "[...]" : l(a)
    }
    function l(a) {
        if (a == null)
            return "" + String(a);
        if (Array.isArray(a)) {
            if (a.length > 10) {
                var b = a.slice(0, 5).map(k);
                return "[" + b.join(", ") + ", ...]"
            }
            b = a.map(k);
            return "[" + b.join(", ") + "]"
        }
        if (typeof a === "string")
            return "'" + a + "'";
        if (typeof a === "object") {
            b = Object.keys(a).map(function(a) {
                return a + "=..."
            });
            return "{" + b.join(", ") + "}"
        }
        return String(a)
    }
    function m(a) {
        return a.identifier || ""
    }
    function n(a) {
        var b;
        return ((b = a.script) != null ? b : "") + "  " + ((b = a.line) != null ? b : "") + ":" + ((b = a.column) != null ? b : "")
    }
    var o;
    function a(a, c, d) {
        c === void 0 && (c = {});
        d === void 0 && (d = {});
        a && !/[^a-z0-9_]/.test(a) || g(0, 2789);
        var e = {};
        d.sampleRate != null && (e.sampleRate = d.sampleRate);
        var f = new (b("BanzaiScuba"))("core_monitor",null,e);
        f.addNormal("event", a);
        o === void 0 && (o = b("gkx")("708253"));
        f.addNormal("is_comet", o);
        e = h || (h = b("ReactCurrentOwner"));
        f.addNormVector("owners", j(e.current));
        f.addNormal("uri", window.location.href);
        f.addNormal("script_path", b("ScriptPath").getScriptPath());
        f.addNormal("devserver_username", b("SiteData").devserver_username || "");
        e = !1;
        d.forceIncludeStackTrace && (e = !0);
        if (e)
            try {
                d = new Error(a);
                d.framesToPop = 1;
                e = b("ErrorNormalizeUtils").normalizeError(d).stackFrames;
                a = e.map(m);
                d = e.map(n).join("\n");
                f.addNormVector("stacktrace", a);
                f.addDenorm("stack", d)
            } catch (a) {}
        b("forEachObject")(c, function(a, b, c) {
            typeof a === "string" ? f.addNormal(b, a) : typeof a === "number" && (a | 0) === a ? f.addInteger(b, a) : Array.isArray(a) ? f.addNormVector(b, a.map(l)) : f.addNormal(b, l(a))
        });
        f.post()
    }
    e.exports = a
}
), null);
__d("Dispatcher_DEPRECATED", ["invariant", "FBLogger", "monitorCodeUse"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "ID_";
    a = function() {
        function a() {
            this.$1 = new Map(),
            this.$2 = !1,
            this.$3 = new Map(),
            this.$4 = new Map(),
            this.$5 = 1
        }
        var b = a.prototype;
        b.register = function(a, b) {
            b = this.__genID(b);
            this.$1.set(b, a);
            return b
        }
        ;
        b.unregister = function(a) {
            this.$1.get(a) || g(0, 1331, a),
            this.$1["delete"](a)
        }
        ;
        b.waitFor = function(a) {
            this.$2 || g(0, 1332);
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if (this.$4.get(c)) {
                    this.$3.get(c) || g(0, 2380, c);
                    continue
                }
                this.$1.get(c) || g(0, 2381, c);
                this.$7(c)
            }
        }
        ;
        b.dispatch = function(a) {
            var b = this;
            j(this.$2, this.$6, a);
            this.$8(a);
            try {
                this.$1.forEach(function(a, c) {
                    if (b.$4.get(c))
                        return;
                    b.$7(c)
                })
            } finally {
                this.$9()
            }
        }
        ;
        b.isDispatching = function() {
            return this.$2
        }
        ;
        b.$7 = function(a) {
            this.$4.set(a, !0);
            var b = this.$1.get(a);
            b && this.__invokeCallback(a, b, this.$6);
            this.$3.set(a, !0)
        }
        ;
        b.__invokeCallback = function(a, b, c) {
            b(c)
        }
        ;
        b.$8 = function(a) {
            for (var b = this.$1.keys(), c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                var e;
                if (c) {
                    if (d >= b.length)
                        break;
                    e = b[d++]
                } else {
                    d = b.next();
                    if (d.done)
                        break;
                    e = d.value
                }
                e = e;
                this.$4.set(e, !1);
                this.$3.set(e, !1)
            }
            this.$6 = a;
            this.$2 = !0
        }
        ;
        b.$9 = function() {
            delete this.$6,
            this.$2 = !1
        }
        ;
        b.__genID = function(a) {
            var b = a ? a + "_" : h;
            a = a || b + this.$5++;
            while (this.$1.get(a))
                a = b + this.$5++;
            return a
        }
        ;
        return a
    }();
    e.exports = a;
    function i(a) {
        var b = "<unknown>";
        if (!a)
            return b;
        if (typeof a.type === "string")
            return a.type;
        if (typeof a.actionType === "string")
            return a.actionType;
        if (!a.action)
            return b;
        if (typeof a.action.type === "string")
            return a.action.type;
        return typeof a.action.actionType === "string" ? a.action.actionType : b
    }
    function j(a, c, d) {
        if (a) {
            a = new Error("Cannot dispatch in the middle of a dispatch");
            b("FBLogger")("flux_dispatcher").catching(a).mustfix("Tried to dispatch action %s while already dispatching %s", i(d), i(c));
            throw a
        }
    }
}
), null);
__d("ExplicitRegistrationDispatcherUtils", ["emptyFunction", "setImmediate"], (function(a, b, c, d, e, f) {
    "use strict";
    a = !1;
    c = b("emptyFunction");
    e.exports = {
        warn: c,
        inlineRequiresEnabled: a
    }
}
), null);
__d("ExplicitRegistrationDispatcher", ["Dispatcher_DEPRECATED", "ExplicitRegistrationDispatcherUtils", "setImmediate"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b(b) {
            var c;
            b = b.strict;
            c = a.call(this) || this;
            c.$ExplicitRegistrationDispatcher2 = b;
            c.$ExplicitRegistrationDispatcher1 = {};
            return c
        }
        var c = b.prototype;
        c.explicitlyRegisterStore = function(a) {
            a = a.getDispatchToken();
            this.$ExplicitRegistrationDispatcher1[a] = !0;
            return a
        }
        ;
        c.explicitlyRegisterStores = function(a) {
            var b = this;
            return a.map(function(a) {
                return b.explicitlyRegisterStore(a)
            })
        }
        ;
        c.register = function(b, c) {
            var d = this;
            d = this.__genID(c);
            this.$ExplicitRegistrationDispatcher1[d] = !1;
            c = a.prototype.register.call(this, this.$ExplicitRegistrationDispatcher4.bind(this, d, b), d);
            return c
        }
        ;
        c.$ExplicitRegistrationDispatcher4 = function(a, b, c) {
            (this.$ExplicitRegistrationDispatcher1[a] || !this.$ExplicitRegistrationDispatcher2) && this.__invokeCallback(a, b, c)
        }
        ;
        c.unregister = function(b) {
            a.prototype.unregister.call(this, b),
            delete this.$ExplicitRegistrationDispatcher1[b]
        }
        ;
        c.__getMaps = function() {}
        ;
        return b
    }(b("Dispatcher_DEPRECATED"));
    e.exports = a
}
), null);
__d("mergeHelpers", ["invariant", "FbtResultBase"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 36
      , i = function(a) {
        return typeof a !== "object" || a instanceof Date || a === null || a instanceof b("FbtResultBase")
    }
      , j = {
        MAX_MERGE_DEPTH: h,
        isTerminal: i,
        normalizeMergeArg: function(a) {
            return a == null ? {} : a
        },
        checkMergeArrayArgs: function(a, b) {
            Array.isArray(a) && Array.isArray(b) || g(0, 3714, a, b)
        },
        checkMergeObjectArgs: function(a, b) {
            j.checkMergeObjectArg(a),
            j.checkMergeObjectArg(b)
        },
        checkMergeObjectArg: function(a) {
            !i(a) && !Array.isArray(a) || g(0, 3715, a)
        },
        checkMergeIntoObjectArg: function(a) {
            (!i(a) || typeof a === "function") && !Array.isArray(a) || g(0, 3716, a)
        },
        checkMergeLevel: function(a) {
            a < h || g(0, 3717)
        },
        checkArrayStrategy: function(a) {
            a == null || a in j.ArrayStrategies || g(0, 3718)
        },
        ArrayStrategies: {
            Clobber: "Clobber",
            Concat: "Concat",
            IndexByIndex: "IndexByIndex"
        }
    };
    a = j;
    e.exports = a
}
), null);
__d("BaseScrollableArea.react", ["BaseScrollableAreaContext", "CometVisualCompletionAttributes", "React", "UserAgent", "debounce", "gkx", "resize-observer-polyfill", "stylex", "useVisibilityObserver"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React"), i = {
        baseScroller: {
            display: "j83agx80",
            flexDirection: "cbu4d94t",
            flexGrow: "buofh1pr"
        },
        baseScrollerHorizontal: {
            flexDirection: "btwxx1t3"
        },
        "default": {
            MsOverflowStyle: "o8kakjsu",
            MsScrollChaining: "rpm2j7zs",
            MsScrollRails: "k7i0oixp",
            WebkitOverflowScrolling: "gvuykj2m",
            display: "j83agx80",
            flexDirection: "cbu4d94t",
            overflowX: "ni8dbmo4",
            overflowY: "stjgntxs",
            position: "l9j0dhe7",
            zIndex: "du4w35lb"
        },
        expanding: {
            flexBasis: "d8ncny3e",
            flexGrow: "buofh1pr",
            flexShrink: "g5gj957u",
            minHeight: "tgvbjcpo"
        },
        hideScrollbar: {
            MsOverflowStyle: "q5bimw55",
            scrollbarWidth: "ofs802cu",
            "::-webkit-scrollbar": {
                display: "pohlnb88",
                height: "dkue75c7",
                width: "mb9wzai9"
            }
        },
        horizontalAuto: {
            overflowX: "d76ob5m9",
            overscrollBehaviorX: "qan41l3s"
        },
        perspective: {
            perspective: "l56l04vs",
            perspectiveOrigin: "r57mb794",
            position: "l9j0dhe7",
            transformStyle: "kh7kg01d"
        },
        verticalAuto: {
            overflowY: "eg9m0zos",
            overscrollBehaviorY: "c3g1iek1"
        }
    }, j = {
        base: {
            boxSizing: "rq0escxv",
            display: "mkhogb32",
            opacity: "b5wmifdl",
            paddingTop: "jb3vyjys",
            paddingEnd: "ph5uu5jm",
            paddingBottom: "qt6c0cv9",
            paddingStart: "b3onmgus",
            pointerEvents: "hzruof5a",
            position: "pmk7jnqg",
            right: "kwrap0ej",
            top: "kr520xx4",
            transformOrigin: "enuw37q7",
            transitionDuration: "dpja2al7",
            transitionProperty: "art1omkt",
            transitionTimingFunction: "nw2je8n7",
            width: "hhz5lgdu"
        },
        hovered: {
            opacity: "pedkr2u6",
            transitionDuration: "z1801hqc"
        },
        inner: {
            backgroundColor: "oj68ptkr",
            borderTopStartRadius: "jk6sbkaj",
            borderTopEndRadius: "kdgqqoy6",
            borderBottomEndRadius: "ihh4hy1g",
            borderBottomStartRadius: "qttc61fc",
            height: "datstx6m",
            width: "k4urcfbm"
        }
    }, k = {
        base: {
            backgroundColor: "pwoa4pd7",
            display: "mkhogb32",
            height: "datstx6m",
            opacity: "b5wmifdl",
            position: "pmk7jnqg",
            right: "kwrap0ej",
            top: "kr520xx4",
            transitionDuration: "qgmjvhk0",
            transitionProperty: "art1omkt",
            transitionTimingFunction: "nw2je8n7",
            width: "hhz5lgdu",
            ":hover": {
                opacity: "pyaxyem1"
            }
        }
    }, l = b("gkx")("1708607");
    function a(a, c) {
        var d = a.children
          , e = a.expanding;
        e = e === void 0 ? !1 : e;
        var f = a.hideScrollbar
          , l = f === void 0 ? !1 : f
          , m = a.horizontal;
        f = a.id;
        var n = a.onScroll
          , r = a.onScrollBottom
          , s = a.onScrollTop
          , t = a.style
          , u = a.testid
          , v = a.vertical;
        u = a.xstyle;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "expanding", "hideScrollbar", "horizontal", "id", "onScroll", "onScrollBottom", "onScrollTop", "style", "testid", "vertical", "xstyle"]);
        var w = h.useMemo(function() {
            return !v || l || m || q()
        }, [v, l, m])
          , x = h.useState(!1)
          , y = x[0]
          , z = x[1];
        x = h.useState(!1);
        var A = x[0]
          , B = x[1];
        x = h.useState(!1);
        var C = x[0]
          , D = x[1]
          , E = h.useContext(b("BaseScrollableAreaContext"))
          , F = h.useRef(null)
          , G = h.useRef(null)
          , H = h.useRef(null)
          , I = h.useRef(null)
          , J = h.useRef(null)
          , K = h.useRef(0);
        h.useEffect(function() {
            if (w)
                return;
            var a = F.current
              , c = G.current
              , d = H.current
              , e = I.current;
            if (a == null || c == null || d == null || e == null)
                return;
            var f = 0
              , g = 0
              , h = function() {
                e.style.display = "none";
                d.style.display = "none";
                var a = c.getBoundingClientRect()
                  , b = a.height;
                g = a.top;
                K.current = c.scrollHeight;
                a = K.current;
                a !== c.scrollHeight && (a = c.scrollHeight);
                f = Math.pow(b, 2) / a;
                var h = (b - f) / (a - b);
                d.style.right = "0px";
                e.style.right = "0px";
                d.style.height = a <= b ? "0px" : f + "px";
                e.style.height = a + "px";
                d.style.transform = ["matrix3d(\n          1,0,0,0,\n          0,1,0,0,\n          0,0,1,0,\n          0,0,0,-1)", "scale(" + 1 / h + ")", "translateZ(" + (1 - 1 / h) + "px)", "translateZ(-2px)"].join(" ");
                d.style.display = "block";
                e.style.display = a <= b ? "none" : "block"
            }
              , i = function(a) {
                a.preventDefault();
                var b = a.clientY;
                a = c.clientHeight;
                var d = c.scrollTop;
                D(!0);
                var h = K.current / a;
                a = d / h;
                var i = function(a) {
                    a.preventDefault(),
                    a.stopPropagation(),
                    a.stopImmediatePropagation()
                };
                if (b < g + a || b > g + a + f) {
                    var j = b < g + a ? -20 : 20
                      , k = !0
                      , l = window.setInterval(function() {
                        k && c.scrollTo({
                            top: c.scrollTop + j
                        })
                    }, 16);
                    a = function a(b) {
                        i(b),
                        l && window.clearInterval(l),
                        window.removeEventListener("mouseup", a, !0),
                        e.removeEventListener("mouseenter", m),
                        e.removeEventListener("mouseleave", n)
                    }
                    ;
                    var m = function(a) {
                        k = !0
                    }
                      , n = function(a) {
                        k = !1
                    };
                    window.addEventListener("mouseup", a, !0);
                    e.addEventListener("mouseenter", m);
                    e.addEventListener("mouseleave", n);
                    return
                }
                var o = function(a) {
                    i(a);
                    a = a.clientY - b;
                    c.scrollTo({
                        top: d + a * h
                    })
                };
                a = function a(b) {
                    i(b),
                    D(!1),
                    window.removeEventListener("mousemove", o, !0),
                    window.removeEventListener("mouseup", a, !0)
                }
                ;
                window.addEventListener("mousemove", o, !0);
                window.addEventListener("mouseup", a, !0)
            }
              , j = b("debounce")(h, 100);
            window.addEventListener("resize", j);
            e.addEventListener("mousedown", i);
            var k = new (b("resize-observer-polyfill"))(j);
            k.observe(a);
            return function() {
                window.removeEventListener("resize", j),
                e.removeEventListener("mousedown", i),
                k.disconnect(),
                j.reset()
            }
        }, [w]);
        x = function() {
            z(!0)
        }
        ;
        var L = function() {
            return z(!1)
        }
          , M = function(a) {
            n && n(a),
            B(!0),
            J.current && window.clearTimeout(J.current),
            J.current = window.setTimeout(function() {
                B(!1)
            }, 1e3)
        };
        h.useEffect(function() {
            return function() {
                window.clearTimeout(J.current)
            }
        }, []);
        var N = h.useMemo(function() {
            return {
                getDOMNode: function() {
                    return G.current
                }
            }
        }, []);
        h.useImperativeHandle(c, function() {
            return N
        });
        c = h.useMemo(function() {
            return [].concat(E, [N])
        }, [N, E]);
        return w ? h.jsx(b("BaseScrollableAreaContext").Provider, {
            value: c,
            children: h.jsx("div", babelHelpers["extends"]({}, a, {
                className: (g || (g = b("stylex")))(i["default"], e && i.expanding, l && i.hideScrollbar, m && i.horizontalAuto, v && i.verticalAuto, u),
                "data-testid": void 0,
                id: f,
                onScroll: M,
                ref: G,
                style: t,
                children: h.jsxs("div", {
                    className: g(i.baseScroller, m && !v && i.baseScrollerHorizontal),
                    children: [s ? h.jsx(p, {
                        onVisible: s,
                        scrollerRef: G
                    }) : null, d, r ? h.jsx(o, {
                        onVisible: r,
                        scrollerRef: G
                    }) : null]
                })
            }))
        }) : h.jsx(b("BaseScrollableAreaContext").Provider, {
            value: c,
            children: h.jsxs("div", babelHelpers["extends"]({}, a, {
                className: (g || (g = b("stylex")))(i["default"], i.hideScrollbar, e && i.expanding, i.perspective, m && i.horizontalAuto, v && i.verticalAuto, u),
                "data-testid": void 0,
                id: f,
                onMouseEnter: x,
                onMouseLeave: L,
                onScroll: M,
                ref: G,
                style: t,
                children: [h.jsxs("div", {
                    className: g(i.baseScroller, m && !v && i.baseScrollerHorizontal),
                    ref: F,
                    children: [s ? h.jsx(p, {
                        onVisible: s,
                        scrollerRef: G
                    }) : null, d, r ? h.jsx(o, {
                        onVisible: r,
                        scrollerRef: G
                    }) : null]
                }), h.jsx("div", babelHelpers["extends"]({
                    className: g(k.base)
                }, b("CometVisualCompletionAttributes").IGNORE, {
                    "data-thumb": 1,
                    ref: I
                })), h.jsx("div", babelHelpers["extends"]({
                    className: g(j.base, (y || A || C) && j.hovered)
                }, b("CometVisualCompletionAttributes").IGNORE, {
                    "data-thumb": 1,
                    ref: H,
                    children: h.jsx("div", {
                        className: g(j.inner)
                    })
                }))]
            }))
        })
    }
    var m = {
        main: {
            height: "ay7djpcl",
            opacity: "b5wmifdl",
            pointerEvents: "hzruof5a",
            width: "rfua0xdk"
        },
        top: {
            position: "pmk7jnqg",
            top: "kr520xx4"
        }
    };
    function n(a) {
        var c = a.onVisible
          , d = a.scrollerRef;
        a = a.xstyle;
        var e = h.useMemo(function() {
            return l ? function() {
                return d.current
            }
            : void 0
        }, [d]);
        c = b("useVisibilityObserver")({
            onVisible: c,
            options: {
                root: e
            }
        });
        return h.jsx("div", {
            className: (g || (g = b("stylex")))(m.main, a),
            ref: c
        })
    }
    function o(a) {
        var b = a.onVisible;
        a = a.scrollerRef;
        return h.jsx(n, {
            onVisible: b,
            scrollerRef: a
        })
    }
    function p(a) {
        var b = a.onVisible;
        a = a.scrollerRef;
        return h.jsx(n, {
            onVisible: b,
            scrollerRef: a,
            xstyle: m.top
        })
    }
    function q() {
        return b("UserAgent").isPlatform("iOS") || b("UserAgent").isPlatform("Android") || b("UserAgent").isBrowser("Edge") || b("UserAgent").isBrowser("IE") || b("UserAgent").isBrowser("Firefox < 64")
    }
    c = h.forwardRef(a);
    e.exports = c
}
), null);
__d("CometSeparatorMenuItem.react", ["CometMenuItemBaseRoleContext", "React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React"), i = {
        separator: {
            borderTop: "l6v480f0",
            marginTop: "aahdfvyu",
            marginEnd: "wkznzc2l",
            marginBottom: "tvmbv18p",
            marginStart: "dhix69tm"
        }
    };
    function a(a, c) {
        a = a.xstyle;
        var d = h.useContext(b("CometMenuItemBaseRoleContext"));
        return h.jsx("div", {
            className: (g || (g = b("stylex")))([i.separator, a]),
            ref: c,
            role: d === "menuitem" ? "separator" : "presentation"
        })
    }
    c = h.forwardRef(a);
    e.exports = c
}
), null);
__d("CometMenuBase.react", ["BaseScrollableArea.react", 
    "CometErrorBoundary.react", 
    "CometMenuFocusGroup", 
    "CometMenuItemBaseRoleContext", "CometSeparatorMenuItem.react", "React", "TetraTextPairing.react", "focusScopeQueries", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React"), i = {
        listItem: {
            borderTopStartRadius: "jk6sbkaj",
            borderTopEndRadius: "kdgqqoy6",
            borderBottomEndRadius: "ihh4hy1g",
            borderBottomStartRadius: "qttc61fc",
            display: "j83agx80",
            flexDirection: "btwxx1t3",
            marginTop: "kvgmc6g5",
            marginEnd: "oi9244e8",
            marginBottom: "oygrvhab",
            marginStart: "h676nmdw",
            paddingTop: "pybr56ya",
            paddingEnd: "dflh9lhu",
            paddingBottom: "f10w8fjw",
            paddingStart: "scb9dxdr"
        },
        root: {
            alignItems: "gs1a9yip",
            display: "j83agx80",
            flexDirection: "cbu4d94t",
            paddingTop: "cxgpxx05",
            paddingEnd: "rz4wbd8a",
            paddingBottom: "sj5x9vvc",
            paddingStart: "a8nywdso"
        },
        sizeFull: {
            width: "k4urcfbm"
        },
        sizeNormal: {
            width: "geg40m2u"
        },
        sizeSmall: {
            width: "jbcpqwzg"
        },
        truncate: {
            maxHeight: "ktk59qbb"
        }
    }, j = "menu", k = {
        listbox: "option",
        menu: "menuitem"
    };
    function a(a) {
        var c = a.children
          , d = a.footer
          , e = a.header
          , f = a.role;
        f = f === void 0 ? j : f;
        var l = a.size;
        l = l === void 0 ? "normal" : l;
        a = a.truncate;
        a = a === void 0 ? !1 : a;
        var m = 0
          , n = h.Children.toArray(c).map(function(a) {
            if (a == null)
                return null;
            var c = m++;
            return a.type === b("CometSeparatorMenuItem.react") ? a : h.jsx(b("CometErrorBoundary.react"), {
                children: a
            }, c)
        });
        f = k[f];
        return h.Children.count(c) > 0 ? h.jsx(b("BaseScrollableArea.react"), {
            horizontal: !1,
            vertical: !0,
            xstyle: [i.root, l === "full" && i.sizeFull, l === "normal" && i.sizeNormal, l === "small" && i.sizeSmall, a && i.truncate],
            children: h.jsxs(b("CometMenuItemBaseRoleContext").Provider, {
                value: f,
                children: [e != null ? h.jsxs(h.Fragment, {
                    children: [h.jsx("div", {
                        className: (g || (g = b("stylex")))(i.listItem),
                        role: f,
                        children: h.jsx(b("TetraTextPairing.react"), {
                            headline: e.title,
                            level: 3,
                            meta: e.meta,
                            reduceEmphasis: !0
                        })
                    }), h.jsx(b("CometSeparatorMenuItem.react"), {})]
                }) : null, h.jsx(b("CometMenuFocusGroup").FocusGroup, {
                    orientation: "vertical",
                    preventScrollOnFocus: !1,
                    tabScopeQuery: b("focusScopeQueries").tabbableScopeQuery,
                    wrap: !0,
                    children: n
                }), d != null ? h.jsxs(h.Fragment, {
                    children: [h.jsx(b("CometSeparatorMenuItem.react"), {}), h.jsx("div", {
                        className: (g || (g = b("stylex")))(i.listItem),
                        role: f,
                        children: h.jsx(b("TetraTextPairing.react"), {
                            level: 3,
                            meta: d.text
                        })
                    })]
                }) : null]
            })
        }) : null
    }
}
), null);
__d("CometMenuBaseWithPopover.react", ["CometMenuBase.react", "CometPopover.react", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = "menu";
    function a(a, c) {
        var d = a.children
          , e = a.id
          , f = a.role;
        f = f === void 0 ? h : f;
        var i = a.withArrow
          , j = a.testid;
        j = j === void 0 ? "comet-menu" : j;
        j = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "id", "role", "withArrow", "testid"]);
        return g.Children.count(d) > 0 ? g.jsx(b("CometPopover.react"), {
            id: e,
            ref: c,
            role: f,
            testid: void 0,
            withArrow: i,
            children: g.jsx(b("CometMenuBase.react"), babelHelpers["extends"]({}, j, {
                children: d,
                role: f
            }))
        }) : null
    }
    c = g.memo(g.forwardRef(a));
    e.exports = c
}
), null);
__d("CometMenu.react", ["CometMenuBaseWithPopover.react", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a, c) {
        return g.jsx(b("CometMenuBaseWithPopover.react"), babelHelpers["extends"]({}, a, {
            ref: c
        }))
    }
    c = g.forwardRef(a);
    e.exports = c
}
), null);
__d("NullStateMedia", ["IconSource"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        dark: new (b("IconSource"))("nullStateGlyphs","/images/comet/empty_states_icons/media/null_states_media_dark_mode.svg",112),
        "default": new (b("IconSource"))("nullStateGlyphs","/images/comet/empty_states_icons/media/null_states_media_gray_wash.svg",112)
    };
    e.exports = a
}
), null);
__d("CometNotificationsReceiveSubscription.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "count"
        }
          , b = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "environment"
        }
          , c = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "input"
        }
          , d = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "notif_cache_ids"
        }
          , e = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "refresh_num"
        }
          , f = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "scale"
        }
          , g = [{
            kind: "Variable",
            name: "data",
            variableName: "input"
        }]
          , h = {
            alias: null,
            args: [{
                kind: "Variable",
                name: "environment",
                variableName: "environment"
            }],
            kind: "ScalarField",
            name: "notifications_unseen_count",
            storageKey: null
        }
          , i = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "last_update_timestamp",
            storageKey: null
        }
          , j = {
            kind: "Variable",
            name: "notif_cache_ids",
            variableName: "notif_cache_ids"
        }
          , k = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "seen_state",
            storageKey: null
        }
          , l = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null
        }
          , m = {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "renderer_data",
            plural: !1,
            selections: [l, {
                kind: "InlineFragment",
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "video_id",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "bucket_data",
                    storageKey: null
                }],
                type: "LiveVideoNotificationRendererData",
                abstractKey: null
            }],
            storageKey: null
        }
          , n = {
            alias: null,
            args: [{
                kind: "Literal",
                name: "site",
                value: "comet"
            }],
            kind: "ScalarField",
            name: "url",
            storageKey: 'url(site:"comet")'
        }
          , o = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        }
          , p = [o]
          , q = [{
            kind: "Variable",
            name: "environment_alias_override",
            variableName: "environment"
        }, {
            kind: "Variable",
            name: "first",
            variableName: "count"
        }, j, {
            kind: "Literal",
            name: "notif_query_flags",
            value: ["IS_COMET"]
        }, {
            kind: "Literal",
            name: "source",
            value: "unknown"
        }]
          , r = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "tracking",
            storageKey: null
        }
          , s = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "text",
            storageKey: null
        }
          , t = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "url",
            storageKey: null
        }
          , u = [s]
          , v = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "name",
            storageKey: null
        }
          , w = {
            kind: "Variable",
            name: "scale",
            variableName: "scale"
        }
          , x = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null
        }
          , y = [x]
          , z = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "notif_id",
            storageKey: null
        }
          , A = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "notif_cache_id",
            storageKey: null
        }
          , B = {
            alias: "creation_time",
            args: null,
            concreteType: "CreationTimeWithRelativeText",
            kind: "LinkedField",
            name: "creation_time_with_relative_text",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "timestamp",
                storageKey: null
            }],
            storageKey: null
        }
          , C = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "notif_type",
            storageKey: null
        }
          , D = {
            alias: null,
            args: [{
                kind: "Literal",
                name: "notif_option_set_context",
                value: {
                    client_action_types: ["HIDE", "UNSUB", "TOGGLE_ACTIVE", "OPEN_IN_INSPECTOR", "REPORT_BUG", "OPEN_PCU_REMINDERS_DIALOG"],
                    environment: "MAIN_SURFACE",
                    is_comet: !0,
                    supported_display_styles: [{
                        option_display_styles: ["CHEVRON_MENU_OPTION"],
                        option_set_display_style: "CHEVRON_MENU"
                    }]
                }
            }],
            concreteType: "NotificationOptionSetsConnection",
            kind: "LinkedField",
            name: "notif_option_sets",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                concreteType: "NotificationOptionSetsEdge",
                kind: "LinkedField",
                name: "edges",
                plural: !0,
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "NotifOptionSet",
                    kind: "LinkedField",
                    name: "node",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: "NotifOptionSetOptionsConnection",
                        kind: "LinkedField",
                        name: "notif_options",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "NotifOptionSetOptionsEdge",
                            kind: "LinkedField",
                            name: "edges",
                            plural: !0,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "NotifOption",
                                kind: "LinkedField",
                                name: "node",
                                plural: !1,
                                selections: [o, {
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "notif_option_renderer",
                                    plural: !1,
                                    selections: [l, {
                                        kind: "InlineFragment",
                                        selections: [{
                                            documentName: "CometNotificationsDropdownMenu_notification",
                                            fragmentName: "CometNotificationsDropdownHideMenuItem_notifOptionRenderer",
                                            fragmentPropName: "notifOptionRenderer",
                                            kind: "ModuleImport"
                                        }],
                                        type: "NotifOptionHideRenderer",
                                        abstractKey: null
                                    }, {
                                        kind: "InlineFragment",
                                        selections: [{
                                            documentName: "CometNotificationsDropdownMenu_notification",
                                            fragmentName: "CometNotificationsDropdownDefaultMenuItem_notifOptionRenderer",
                                            fragmentPropName: "notifOptionRenderer",
                                            kind: "ModuleImport"
                                        }],
                                        type: "NotifOptionDefaultRenderer",
                                        abstractKey: null
                                    }, {
                                        kind: "InlineFragment",
                                        selections: [{
                                            documentName: "CometNotificationsDropdownMenu_notification",
                                            fragmentName: "CometNotificationsDropdownDialogMenuItem_notifOptionRenderer",
                                            fragmentPropName: "notifOptionRenderer",
                                            kind: "ModuleImport"
                                        }],
                                        type: "NotifOptionDialogRenderer",
                                        abstractKey: null
                                    }],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }, o],
                    storageKey: null
                }],
                storageKey: null
            }],
            storageKey: 'notif_option_sets(notif_option_set_context:{"client_action_types":["HIDE","UNSUB","TOGGLE_ACTIVE","OPEN_IN_INSPECTOR","REPORT_BUG","OPEN_PCU_REMINDERS_DIALOG"],"environment":"MAIN_SURFACE","is_comet":true,"supported_display_styles":[{"option_display_styles":["CHEVRON_MENU_OPTION"],"option_set_display_style":"CHEVRON_MENU"}]})'
        }
          , E = {
            kind: "InlineFragment",
            selections: [{
                documentName: "CometNotificationsListItemAttachment_notification",
                fragmentName: "CometNotificationsListItemFriendRequestAttachment_notifAttachments",
                fragmentPropName: "notifAttachments",
                kind: "ModuleImport"
            }],
            type: "FriendRequestNotifAttachment",
            abstractKey: null
        }
          , F = {
            kind: "InlineFragment",
            selections: [{
                documentName: "CometNotificationsListItemAttachment_notification",
                fragmentName: "CometNotificationsListItemPageInviteAttachment_notifAttachments",
                fragmentPropName: "notifAttachments",
                kind: "ModuleImport"
            }],
            type: "PageInviteNotifAttachment",
            abstractKey: null
        }
          , G = {
            kind: "InlineFragment",
            selections: [{
                documentName: "CometNotificationsListItemAttachment_notification",
                fragmentName: "CometNotificationsListItemQuickPromotionAttachment_notifAttachments",
                fragmentPropName: "notifAttachments",
                kind: "ModuleImport"
            }],
            type: "QuickPromotionNotifAttachment",
            abstractKey: null
        }
          , H = {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "notif_attachments",
            plural: !0,
            selections: [l, E, F, G],
            storageKey: null
        }
          , I = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "length",
            storageKey: null
        }
          , J = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "offset",
            storageKey: null
        }
          , K = [{
            kind: "Literal",
            name: "delight_surface",
            value: "COMMENT"
        }]
          , L = {
            kind: "InlineFragment",
            selections: p,
            type: "Node",
            abstractKey: "__isNode"
        }
          , M = [o, v]
          , N = {
            alias: null,
            args: null,
            concreteType: "WorkForeignEntityInfo",
            kind: "LinkedField",
            name: "work_foreign_entity_info",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "type",
                storageKey: null
            }],
            storageKey: null
        };
        K = {
            alias: null,
            args: null,
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "body",
            plural: !1,
            selections: [s, {
                alias: null,
                args: null,
                concreteType: "DelightAtRange",
                kind: "LinkedField",
                name: "delight_ranges",
                plural: !0,
                selections: [I, J, {
                    alias: null,
                    args: null,
                    concreteType: "TextDelightCampaign",
                    kind: "LinkedField",
                    name: "campaign",
                    plural: !1,
                    selections: [l, {
                        alias: null,
                        args: K,
                        concreteType: "TextDelightStylePair",
                        kind: "LinkedField",
                        name: "delight_styles",
                        plural: !0,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "style",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "value",
                            storageKey: null
                        }],
                        storageKey: 'delight_styles(delight_surface:"COMMENT")'
                    }, {
                        alias: null,
                        args: K,
                        concreteType: "DelightsAnimation",
                        kind: "LinkedField",
                        name: "delight_asset",
                        plural: !1,
                        selections: [o, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "animation_uri",
                            storageKey: null
                        }],
                        storageKey: 'delight_asset(delight_surface:"COMMENT")'
                    }, o],
                    storageKey: null
                }],
                storageKey: null
            }, {
                alias: null,
                args: null,
                concreteType: "ImageAtRange",
                kind: "LinkedField",
                name: "image_ranges",
                plural: !0,
                selections: [I, J, {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "entity_with_image",
                    plural: !1,
                    selections: [l, {
                        alias: null,
                        args: [w],
                        concreteType: "Image",
                        kind: "LinkedField",
                        name: "image",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "height",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "scale",
                            storageKey: null
                        }, x, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "width",
                            storageKey: null
                        }],
                        storageKey: null
                    }, L],
                    storageKey: null
                }],
                storageKey: null
            }, {
                alias: null,
                args: null,
                concreteType: "InlineStyleAtRange",
                kind: "LinkedField",
                name: "inline_style_ranges",
                plural: !0,
                selections: [I, J, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "inline_style",
                    storageKey: null
                }],
                storageKey: null
            }, {
                alias: null,
                args: null,
                concreteType: "AggregatedEntitiesAtRange",
                kind: "LinkedField",
                name: "aggregated_ranges",
                plural: !0,
                selections: [I, J, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "count",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "sample_entities",
                    plural: !0,
                    selections: [l, {
                        kind: "InlineFragment",
                        selections: M,
                        type: "User",
                        abstractKey: null
                    }, L],
                    storageKey: null
                }],
                storageKey: null
            }, {
                alias: null,
                args: null,
                concreteType: "EntityAtRange",
                kind: "LinkedField",
                name: "ranges",
                plural: !0,
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "entity",
                    plural: !1,
                    selections: [l, {
                        kind: "TypeDiscriminator",
                        abstractKey: "__isEntity"
                    }, n, {
                        alias: "mobileUrl",
                        args: [{
                            kind: "Literal",
                            name: "site",
                            value: "mobile"
                        }],
                        kind: "ScalarField",
                        name: "url",
                        storageKey: 'url(site:"mobile")'
                    }, {
                        kind: "InlineFragment",
                        selections: [o, {
                            kind: "InlineFragment",
                            selections: [{
                                alias: "profile_url",
                                args: null,
                                kind: "ScalarField",
                                name: "url",
                                storageKey: null
                            }],
                            type: "Entity",
                            abstractKey: "__isEntity"
                        }],
                        type: "Actor",
                        abstractKey: "__isActor"
                    }, {
                        kind: "InlineFragment",
                        selections: [{
                            documentName: "CometTextWithEntitiesRelay_textWithEntities",
                            fragmentName: "GroupsCometHashtagsStoryMessageHashtagLink_hashtag",
                            fragmentPropName: "hashtag",
                            kind: "ModuleImport"
                        }],
                        type: "GroupHashtag",
                        abstractKey: null
                    }, {
                        kind: "InlineFragment",
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "category_type",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "verification_status",
                            storageKey: null
                        }, o, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "is_verified",
                            storageKey: null
                        }, {
                            documentName: "CometTextWithEntitiesRelay_textWithEntities",
                            fragmentName: "PagesCometPageLink_page",
                            fragmentPropName: "page",
                            kind: "ModuleImport"
                        }],
                        type: "Page",
                        abstractKey: null
                    }, {
                        kind: "InlineFragment",
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "external_url",
                            storageKey: null
                        }],
                        type: "ExternalUrl",
                        abstractKey: null
                    }, {
                        kind: "InlineFragment",
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "time_index",
                            storageKey: null
                        }],
                        type: "VideoTimeIndex",
                        abstractKey: null
                    }, {
                        kind: "InlineFragment",
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: "LinkedField",
                            name: "web_link",
                            plural: !1,
                            selections: [l, t, {
                                kind: "InlineFragment",
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "fbclid",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "lynx_mode",
                                    storageKey: null
                                }],
                                type: "ExternalWebLink",
                                abstractKey: null
                            }],
                            storageKey: null
                        }],
                        type: "WebLinkable",
                        abstractKey: "__isWebLinkable"
                    }, {
                        kind: "InlineFragment",
                        selections: [N, {
                            alias: null,
                            args: null,
                            concreteType: "WorkUserInfo",
                            kind: "LinkedField",
                            name: "work_info",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "is_active_account",
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        type: "User",
                        abstractKey: null
                    }, {
                        kind: "InlineFragment",
                        selections: [N, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "work_official_status",
                            storageKey: null
                        }],
                        type: "Group",
                        abstractKey: null
                    }, L],
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "entity_is_weak_reference",
                    storageKey: null
                }, I, J],
                storageKey: null
            }, {
                alias: null,
                args: null,
                concreteType: "ColorAtRange",
                kind: "LinkedField",
                name: "color_ranges",
                plural: !0,
                selections: [I, J, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "hex_rgb_color_with_pound_key",
                    storageKey: null
                }],
                storageKey: null
            }],
            storageKey: null
        };
        x = {
            alias: null,
            args: [{
                kind: "Literal",
                name: "height",
                value: 56
            }, w, {
                kind: "Literal",
                name: "width",
                value: 56
            }],
            concreteType: "Image",
            kind: "LinkedField",
            name: "notif_image",
            plural: !1,
            selections: y,
            storageKey: null
        };
        N = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "www_url_should_open_in_blank_target",
            storageKey: null
        };
        L = {
            alias: null,
            args: null,
            concreteType: "GlyphIconData",
            kind: "LinkedField",
            name: "icon_data",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "reaction_type",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "glyph_name",
                storageKey: null
            }],
            storageKey: null
        };
        I = {
            alias: null,
            args: null,
            concreteType: "NotifNavigationEndpoint",
            kind: "LinkedField",
            name: "navigation_endpoint",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                concreteType: "User",
                kind: "LinkedField",
                name: "target_viewer",
                plural: !1,
                selections: M,
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "target_viewer_type",
                storageKey: null
            }],
            storageKey: null
        };
        J = {
            kind: "ClientExtension",
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_hidden",
                storageKey: null
            }]
        };
        return {
            fragment: {
                argumentDefinitions: [a, b, c, d, e, f],
                kind: "Fragment",
                metadata: null,
                name: "CometNotificationsReceiveSubscription",
                selections: [{
                    alias: null,
                    args: g,
                    concreteType: "CometNotificationReceiveSubscribeResponsePayload",
                    kind: "LinkedField",
                    name: "comet_notification_receive_subscribe",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: "Viewer",
                        kind: "LinkedField",
                        name: "viewer",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: "LinkedField",
                            name: "actor",
                            plural: !1,
                            selections: [{
                                args: null,
                                kind: "FragmentSpread",
                                name: "CometToastNotification_actor"
                            }],
                            storageKey: null
                        }, h, i, {
                            args: null,
                            kind: "FragmentSpread",
                            name: "CometRightSideHeaderCards_viewerSideFeed"
                        }, {
                            args: [{
                                kind: "Variable",
                                name: "count",
                                variableName: "count"
                            }, j],
                            kind: "FragmentSpread",
                            name: "CometNotificationsList_viewerConnection"
                        }, {
                            args: null,
                            kind: "FragmentSpread",
                            name: "CometNotificationsList_viewerData"
                        }],
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "Notification",
                        kind: "LinkedField",
                        name: "notification",
                        plural: !1,
                        selections: [k, m, {
                            args: [{
                                kind: "Literal",
                                name: "isToast",
                                value: !0
                            }],
                            kind: "FragmentSpread",
                            name: "CometNotificationsListItem_notification"
                        }],
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "Notification",
                        kind: "LinkedField",
                        name: "aggregated_notification",
                        plural: !1,
                        selections: [n, k, {
                            args: null,
                            kind: "FragmentSpread",
                            name: "CometNotificationsListItem_notification"
                        }],
                        storageKey: null
                    }],
                    storageKey: null
                }],
                type: "Subscription",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: [b, c, f, d, a, e],
                kind: "Operation",
                name: "CometNotificationsReceiveSubscription",
                selections: [{
                    alias: null,
                    args: g,
                    concreteType: "CometNotificationReceiveSubscribeResponsePayload",
                    kind: "LinkedField",
                    name: "comet_notification_receive_subscribe",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: "Viewer",
                        kind: "LinkedField",
                        name: "viewer",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: [{
                                kind: "Literal",
                                name: "environment",
                                value: "COMET"
                            }, {
                                kind: "Literal",
                                name: "query_ego_units",
                                value: !1
                            }, {
                                kind: "Variable",
                                name: "refresh_num",
                                variableName: "refresh_num"
                            }],
                            concreteType: "SideFeedConnection",
                            kind: "LinkedField",
                            name: "side_feed",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "nodes",
                                plural: !0,
                                selections: [l, {
                                    kind: "InlineFragment",
                                    selections: [{
                                        documentName: "CometRightSideHeaderCards_viewerSideFeed",
                                        fragmentName: "PagesCometHomeAdminContainer_pagesPanel",
                                        fragmentPropName: "pagesPanel",
                                        kind: "ModuleImport"
                                    }],
                                    type: "PagesSideFeedUnit",
                                    abstractKey: null
                                }, {
                                    kind: "InlineFragment",
                                    selections: [{
                                        documentName: "CometRightSideHeaderCards_viewerSideFeed",
                                        fragmentName: "FriendingCometHomeInlineRHCContainer_friendsPanel",
                                        fragmentPropName: "friendsPanel",
                                        kind: "ModuleImport"
                                    }],
                                    type: "FriendingRequestsSideFeedUnit",
                                    abstractKey: null
                                }, {
                                    kind: "InlineFragment",
                                    selections: [{
                                        documentName: "CometRightSideHeaderCards_viewerSideFeed",
                                        fragmentName: "CometHomeRemindersContainer_reminderPanel",
                                        fragmentPropName: "reminderPanel",
                                        kind: "ModuleImport"
                                    }],
                                    type: "RemindersSideFeedUnit",
                                    abstractKey: null
                                }, {
                                    kind: "InlineFragment",
                                    selections: [{
                                        documentName: "CometRightSideHeaderCards_viewerSideFeed",
                                        fragmentName: "CometHomeRightSideWidgetContainer_widgetContainer",
                                        fragmentPropName: "widgetContainer",
                                        kind: "ModuleImport"
                                    }],
                                    type: "CometHomeSideFeedWidgetContainer",
                                    abstractKey: null
                                }, {
                                    kind: "InlineFragment",
                                    selections: p,
                                    type: "AdsSideFeedUnitItem",
                                    abstractKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: "LinkedField",
                            name: "actor",
                            plural: !1,
                            selections: [l, {
                                kind: "TypeDiscriminator",
                                abstractKey: "__isActor"
                            }, o],
                            storageKey: null
                        }, h, {
                            alias: null,
                            args: q,
                            concreteType: "ViewerNotificationsPageConnection",
                            kind: "LinkedField",
                            name: "notifications_page",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "ViewerNotificationsPageEdge",
                                kind: "LinkedField",
                                name: "edges",
                                plural: !0,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "node",
                                    plural: !1,
                                    selections: [l, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "row_type",
                                        storageKey: null
                                    }, r, {
                                        kind: "InlineFragment",
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "bucket_type",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "NotifPageBucketHeaderLink",
                                            kind: "LinkedField",
                                            name: "header_link",
                                            plural: !1,
                                            selections: [s, t],
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "TextWithEntities",
                                            kind: "LinkedField",
                                            name: "title",
                                            plural: !1,
                                            selections: u,
                                            storageKey: null
                                        }],
                                        type: "NotifPageBucketHeaderRow",
                                        abstractKey: null
                                    }, {
                                        kind: "InlineFragment",
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "pymk_tracking_signature",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "User",
                                            kind: "LinkedField",
                                            name: "person_you_may_know",
                                            plural: !1,
                                            selections: [o, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "friendship_status",
                                                storageKey: null
                                            }, v, t, {
                                                alias: null,
                                                args: [{
                                                    kind: "Literal",
                                                    name: "height",
                                                    value: 60
                                                }, w, {
                                                    kind: "Literal",
                                                    name: "width",
                                                    value: 60
                                                }],
                                                concreteType: "Image",
                                                kind: "LinkedField",
                                                name: "profile_picture",
                                                plural: !1,
                                                selections: y,
                                                storageKey: null
                                            }, {
                                                kind: "InlineFragment",
                                                selections: [{
                                                    kind: "InlineFragment",
                                                    selections: [{
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "TextWithEntities",
                                                        kind: "LinkedField",
                                                        name: "social_context",
                                                        plural: !1,
                                                        selections: u,
                                                        storageKey: null
                                                    }, {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "User",
                                                        kind: "LinkedField",
                                                        name: "social_context_top_mutual_friends",
                                                        plural: !0,
                                                        selections: [o, v, n, {
                                                            alias: null,
                                                            args: [{
                                                                kind: "Literal",
                                                                name: "height",
                                                                value: 20
                                                            }, w, {
                                                                kind: "Literal",
                                                                name: "width",
                                                                value: 20
                                                            }],
                                                            concreteType: "Image",
                                                            kind: "LinkedField",
                                                            name: "profile_picture",
                                                            plural: !1,
                                                            selections: y,
                                                            storageKey: null
                                                        }],
                                                        storageKey: null
                                                    }],
                                                    type: "User",
                                                    abstractKey: null
                                                }],
                                                type: "FriendNode",
                                                abstractKey: "__isFriendNode"
                                            }],
                                            storageKey: null
                                        }],
                                        type: "NotifPagePYMKRow",
                                        abstractKey: null
                                    }, {
                                        kind: "InlineFragment",
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "Notification",
                                            kind: "LinkedField",
                                            name: "notif",
                                            plural: !1,
                                            selections: [z, o, A, k, B, r],
                                            storageKey: null
                                        }],
                                        type: "NotifPageCachedNotificationRow",
                                        abstractKey: null
                                    }, {
                                        kind: "InlineFragment",
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "Notification",
                                            kind: "LinkedField",
                                            name: "notif",
                                            plural: !1,
                                            selections: [z, k, o, A, r, C, D, H, K, x, n, N, B, L, I, J],
                                            storageKey: null
                                        }],
                                        type: "NotifPageNotificationRow",
                                        abstractKey: null
                                    }, {
                                        kind: "InlineFragment",
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "invalidation_reason",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "Notification",
                                            kind: "LinkedField",
                                            name: "notif",
                                            plural: !1,
                                            selections: [z, C, o],
                                            storageKey: null
                                        }],
                                        type: "NotifPageDebugInvalidationRow",
                                        abstractKey: null
                                    }],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "cursor",
                                    storageKey: null
                                }],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "PageInfo",
                                kind: "LinkedField",
                                name: "page_info",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "end_cursor",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "has_next_page",
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: q,
                            filters: [],
                            handle: "comet_notifications_thin_client",
                            key: "CometNotificationsList_notifications_page",
                            kind: "LinkedHandle",
                            name: "notifications_page"
                        }, i],
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "Notification",
                        kind: "LinkedField",
                        name: "notification",
                        plural: !1,
                        selections: [k, o, z, C, D, {
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: "LinkedField",
                            name: "notif_attachments",
                            plural: !0,
                            selections: [l, E, {
                                kind: "InlineFragment",
                                selections: [{
                                    documentName: "CometNotificationsListItemAttachment_notification",
                                    fragmentName: "CometNotificationsListItemLiveVideoAttachment_attachment",
                                    fragmentPropName: "attachment",
                                    kind: "ModuleImport"
                                }],
                                type: "LiveVideoNotificationAttachment",
                                abstractKey: null
                            }, F, G],
                            storageKey: null
                        }, K, x, n, N, B, L, r, I, m, J],
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "Notification",
                        kind: "LinkedField",
                        name: "aggregated_notification",
                        plural: !1,
                        selections: [n, k, o, z, C, D, H, K, x, n, N, B, L, r, I, J],
                        storageKey: null
                    }],
                    storageKey: null
                }]
            },
            params: {
                id: "3521177667935105",
                metadata: {
                    subscriptionName: "comet_notification_receive_subscribe"
                },
                name: "CometNotificationsReceiveSubscription",
                operationKind: "subscription",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("CometNotificationsReceiveSubscription", ["CometRelay", "CurrentUser", "JSScheduler", "RelayRTIGraphQLSubscriptionTopicProvider", "relay-runtime", "CometNotificationsReceiveSubscription.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    f.subscribeToNotificationUpdates = a;
    var g, h = g !== void 0 ? g : g = b("CometNotificationsReceiveSubscription.graphql");
    f.NotificationsReceiveSubscription = h;
    var i = {};
    function a(a, c, d, e) {
        var f = b("relay-runtime").getRequest(h);
        f = f.params.id;
        f !== null && !i[f] && (i[f] = !0,
        b("RelayRTIGraphQLSubscriptionTopicProvider").registerProvider(f, function(a) {
            return "gqls/comet_notification_receive_subscribe/actor_id_" + b("CurrentUser").getID() + "_environment_" + a.input.environment
        }));
        var g = function(a) {
            var c = a.getRootField("comet_notification_receive_subscribe");
            if (c == null)
                return;
            c = c.getLinkedRecord("notification");
            if (c == null)
                return;
            a = a.get(b("relay-runtime").VIEWER_ID);
            if (a == null)
                return;
            a.setLinkedRecord(c, "new_notification")
        }
          , j = null
          , k = !1;
        b("JSScheduler").scheduleSpeculativeCallback(function() {
            k || (j = b("CometRelay").requestSubscription(a, {
                onCompleted: d,
                onError: e,
                subscription: h,
                updater: g,
                variables: c
            }))
        });
        return {
            dispose: function() {
                j != null && (j.dispose(),
                j = null),
                k = !0
            }
        }
    }
}
), null);
__d("InstantGamesPresenceProperties", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = !1
        }
        var b = a.prototype;
        b.addInstantGamePresence = function() {
            this.$1 = !0
        }
        ;
        b.removeInstantGamePresence = function() {
            this.$1 = !1
        }
        ;
        b.isActiveGamePresence = function() {
            return this.$1
        }
        ;
        return a
    }();
    b = new a();
    c = b;
    e.exports = c
}
), null);
__d("MercuryAttachmentSnippetType", ["keyMirror"], (function(a, b, c, d, e, f) {
    a = b("keyMirror")({
        PHOTO: null,
        GIF: null,
        VIDEO: null,
        AUDIO_CLIP: null,
        STICKER: null,
        SHARE: null,
        ERROR: null,
        MIXED: null,
        GIFT: null,
        THIRDPARTYSTICKER: null,
        FILE: null,
        LIKE_STICKER: null
    });
    c = a;
    e.exports = c
}
), null);
__d("MercuryGiftSnippetRenderer", ["fbt"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.renderText = a;
    function a(a, b) {
        return a ? g._("B\u1ea1n \u0111\u00e3 g\u1eedi m\u1ed9t tin nh\u1eafn valentine.") : g._("{name} \u0111\u00e3 g\u1eedi m\u1ed9t tin nh\u1eafn valentine.", [g._param("name", b)])
    }
}
), null);
__d("MessengerLightweightActionUtils", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.isLWAAttachment = g;
    f.isLWAMessage = a;
    f.getCollapsedLWAText = b;
    f.getLWASnippetText = c;
    function g(a) {
        return !!(a && a.attach_type === "share" && a.share && a.share.target && a.share.target.lwa_type)
    }
    function a(a) {
        a = a == null ? void 0 : a.attachments;
        return !!(a && a.length === 1 && g(a[0]))
    }
    function b(a) {
        return a.attachments[0].share.title
    }
    function c(a) {
        return a[0].share.title
    }
}
), null);
__d("P2PSnippetStringUtils", ["fbt"], (function(a, b, c, d, e, f, g) {
    f.getRequestCanceledSnippet = a;
    f.getRequestDeclinedSnippet = b;
    f.getRequestSentSnippet = c;
    f.getRequestSnippetByStatus = d;
    f.getTransferCanceledSnippet = e;
    f.getTransferDeclinedSnippet = h;
    f.getTransferSentSnippet = i;
    f.getTransferSnippetByStatus = j;
    function a(a, b, c, d, e) {
        if (a)
            return g._("Y\u00eau c\u1ea7u thanh to\u00e1n {payment request amount} c\u1ee7a b\u1ea1n \u0111\u1ed1i v\u1edbi {receiver's name} \u0111\u00e3 b\u1ecb h\u1ee7y.", [g._param("payment request amount", e), g._param("receiver's name", d)]);
        else if (b)
            return g._("Y\u00eau c\u1ea7u thanh to\u00e1n {payment request amount} c\u1ee7a {requester's name} \u0111\u00e3 b\u1ecb h\u1ee7y.", [g._param("requester's name", c), g._param("payment request amount", e)]);
        else
            return g._("Y\u00eau c\u1ea7u thanh to\u00e1n {payment request amount} c\u1ee7a {requester's name} \u0111\u1ed1i v\u1edbi {receiver's name} \u0111\u00e3 b\u1ecb h\u1ee7y.", [g._param("requester's name", c), g._param("payment request amount", e), g._param("receiver's name", d)])
    }
    function b(a, b, c, d, e) {
        if (a)
            return g._("{receiver's name} \u0111\u00e3 t\u1eeb ch\u1ed1i y\u00eau c\u1ea7u thanh to\u00e1n {payment request amount} c\u1ee7a b\u1ea1n.", [g._param("receiver's name", d), g._param("payment request amount", e)]);
        else if (b)
            return g._("B\u1ea1n \u0111\u00e3 t\u1eeb ch\u1ed1i y\u00eau c\u1ea7u thanh to\u00e0n {payment request amount} c\u1ee7a {requester's name} amount}.", [g._param("requester's name", c), g._param("payment request amount", e)]);
        else
            return g._("{receiver's name} \u0111\u00e3 t\u1eeb ch\u1ed1i y\u00eau c\u1ea7u thanh to\u00e1n {payment request amount} c\u1ee7a {sender's name}.", [g._param("receiver's name", d), g._param("sender's name", c), g._param("payment request amount", e)])
    }
    function c(a, b, c, d, e) {
        if (a)
            return g._("B\u1ea1n \u0111\u00e3 y\u00eau c\u1ea7u {requestee name} thanh to\u00e1n {amount}.", [g._param("amount", e), g._param("requestee name", d)]);
        else if (b)
            return g._("{requester name} \u0111\u00e3 y\u00eau c\u1ea7u b\u1ea1n thanh to\u00e1n {amount}.", [g._param("requester name", c), g._param("amount", e)]);
        else
            return g._("{name} \u0111\u00e3 y\u00eau c\u1ea7u {requestee name} thanh to\u00e1n {amount}.", [g._param("name", c), g._param("amount", e), g._param("requestee name", d)])
    }
    function d(a, b, c, d, e, f) {
        a = a || 1;
        b = [b, c, d, e, f];
        switch (a) {
        case 2:
            return this.getRequestDeclinedSnippet.apply(this, b);
        case 5:
        case 6:
            return this.getRequestCanceledSnippet.apply(this, b)
        }
        return this.getRequestSentSnippet.apply(this, b)
    }
    function e(a, b, c, d, e) {
        if (a)
            return g._("Kho\u1ea3n thanh to\u00e1n {amount} c\u1ee7a b\u1ea1n cho {receiver_name} \u0111\u00e3 b\u1ecb h\u1ee7y.", [g._param("amount", e), g._param("receiver_name", d)]);
        else if (b)
            return g._("Kho\u1ea3n thanh to\u00e1n {amount} c\u1ee7a {sender name} \u0111\u00e3 b\u1ecb h\u1ee7y.", [g._param("sender name", c), g._param("amount", e)]);
        else
            return g._("Kho\u1ea3n thanh to\u00e1n {amount} c\u1ee7a {sender_name} cho {receiver_name} \u0111\u00e3 b\u1ecb h\u1ee7y.", [g._param("sender_name", c), g._param("amount", e), g._param("receiver_name", d)])
    }
    function h(a, b, c, d, e) {
        if (a)
            return g._("{receiver_name} kh\u00f4ng ch\u1ea5p nh\u1eadn kho\u1ea3n thanh to\u00e1n {amount} c\u1ee7a b\u1ea1n.", [g._param("receiver_name", d), g._param("amount", e)]);
        else if (b)
            return g._("B\u1ea1n kh\u00f4ng ch\u1ea5p nh\u1eadn kho\u1ea3n thanh to\u00e1n {amount} c\u1ee7a {sender name}.", [g._param("sender name", c), g._param("amount", e)]);
        else
            return g._("{receiver_name} kh\u00f4ng ch\u1ea5p nh\u1eadn kho\u1ea3n thanh to\u00e1n {amount} c\u1ee7a {sender_name}.", [g._param("receiver_name", d), g._param("sender_name", c), g._param("amount", e)])
    }
    function i(a, b, c, d, e) {
        if (a)
            return g._("B\u1ea1n \u0111\u00e3 g\u1eedi cho {receiver name} {amount}.", [g._param("receiver name", d), g._param("amount", e)]);
        else if (b)
            return g._("{name} \u0111\u00e3 g\u1eedi cho b\u1ea1n {amount}.", [g._param("name", c), g._param("amount", e)]);
        else
            return g._("{sender name} \u0111\u00e3 g\u1eedi cho {receiver name} {amount}.", [g._param("sender name", c), g._param("receiver name", d), g._param("amount", e)])
    }
    function j(a, b, c, d, e, f) {
        b = [b, c, d, e, f];
        c = a || 15;
        switch (c) {
        case 5:
            return this.getTransferDeclinedSnippet.apply(this, b);
        case 3:
        case 10:
        case 11:
        case 12:
        case 16:
            return this.getTransferCanceledSnippet.apply(this, b)
        }
        return this.getTransferSentSnippet.apply(this, b)
    }
}
), null);
__d("MercuryAttachmentSnippetRenderer", ["fbt", "CurrentUser", "MercuryAttachmentSnippetType", "MercuryAudioType", "MercuryGiftSnippetRenderer", "MessengerLightweightActionUtils", "P2PSnippetStringUtils", "StickerConstants"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = {
        getAttachmentSnippetType: function(a) {
            if (this._hasOnlyPhotos(a))
                return b("MercuryAttachmentSnippetType").PHOTO;
            if (this._hasOnlyAnimatedImages(a))
                return b("MercuryAttachmentSnippetType").GIF;
            if (this._hasOnlyVideo(a))
                return b("MercuryAttachmentSnippetType").VIDEO;
            if (this._hasAudioClip(a))
                return b("MercuryAttachmentSnippetType").AUDIO_CLIP;
            if (this._hasLikeSticker(a))
                return b("MercuryAttachmentSnippetType").LIKE_STICKER;
            if (this._hasSticker(a))
                return b("MercuryAttachmentSnippetType").STICKER;
            if (this._hasThirdPartySticker(a))
                return b("MercuryAttachmentSnippetType").THIRDPARTYSTICKER;
            if (this._hasShare(a))
                return b("MercuryAttachmentSnippetType").SHARE;
            if (this._hasGift(a))
                return b("MercuryAttachmentSnippetType").GIFT;
            if (this._hasError(a))
                return b("MercuryAttachmentSnippetType").ERROR;
            return this._hasFile(a) ? b("MercuryAttachmentSnippetType").FILE : b("MercuryAttachmentSnippetType").MIXED
        },
        renderAttachmentSnippetText: function(a, c, d, e) {
            switch (a) {
            case b("MercuryAttachmentSnippetType").PHOTO:
                return this._renderPhotoAttachmentSnippetText(c, d, this._getPhotoAttachments(e));
            case b("MercuryAttachmentSnippetType").GIF:
                return this._renderAnimatedImagesAttachmentSnippetText(c, d, this._getAnimatedImageAttachments(e));
            case b("MercuryAttachmentSnippetType").VIDEO:
                return c ? g._("B\u1ea1n \u0111\u00e3 g\u1eedi m\u1ed9t video.") : g._("{sender name} \u0111\u00e3 g\u1eedi m\u1ed9t video.", [g._param("sender name", d)]);
            case b("MercuryAttachmentSnippetType").AUDIO_CLIP:
                return c ? g._("B\u1ea1n \u0111\u00e3 g\u1eedi tin nh\u1eafn tho\u1ea1i.") : g._("{name} \u0111\u00e3 g\u1eedi m\u1ed9t tin nh\u1eafn b\u1eb1ng gi\u1ecdng n\u00f3i.", [g._param("name", d)]);
            case b("MercuryAttachmentSnippetType").STICKER:
            case b("MercuryAttachmentSnippetType").LIKE_STICKER:
            case b("MercuryAttachmentSnippetType").THIRDPARTYSTICKER:
                return c ? g._("B\u1ea1n \u0111\u00e3 g\u1eedi m\u1ed9t nh\u00e3n d\u00e1n.") : g._("{name} \u0111\u00e3 g\u1eedi m\u1ed9t nh\u00e3n d\u00e1n.", [g._param("name", d)]);
            case b("MercuryAttachmentSnippetType").SHARE:
                if (e && this._hasP2PPayment(e))
                    return this._renderP2PPaymentSnippetText(e[0]);
                if (e && this._hasP2PPaymentRequest(e))
                    return this._renderP2PPaymentRequestSnippetText(e[0]);
                if (e && this._hasBusinessMessage(e))
                    return this._renderBusinessMessageSnippetText(e[0], d);
                if (e && this._hasLocation(e))
                    return c ? g._("B\u1ea1n \u0111\u00e3 g\u1eedi m\u1ed9t v\u1ecb tr\u00ed.") : g._("{sender name} \u0111\u00e3 g\u1eedi m\u1ed9t v\u1ecb tr\u00ed.", [g._param("sender name", d)]);
                if (e && this._hasLiveLocation(e))
                    return c ? g._("B\u1ea1n \u0111\u00e3 g\u1eedi m\u1ed9t v\u1ecb tr\u00ed tr\u1ef1c ti\u1ebfp.") : g._("{sender name} \u0111\u00e3 g\u1eedi m\u1ed9t v\u1ecb tr\u00ed tr\u1ef1c ti\u1ebfp.", [g._param("sender name", d)]);
                if (e && this._hasMontageDirect(e)) {
                    a = e[0];
                    a = (a = a) != null ? (a = a.share) != null ? (a = a.media) != null ? a.source : a : a : a;
                    return c ? a ? g._("B\u1ea1n \u0111\u00e3 g\u1eedi m\u1ed9t video.") : g._("B\u1ea1n \u0111\u00e3 g\u1eedi m\u1ed9t \u1ea3nh.") : a ? g._("H\u00e3y xem video t\u1ea1m th\u1eddi c\u1ee7a {sender name}.", [g._param("sender name", d)]) : g._("H\u00e3y xem \u1ea3nh t\u1ea1m th\u1eddi c\u1ee7a {sender name}.", [g._param("sender name", d)])
                }
                if (e && e.length === 1 && b("MessengerLightweightActionUtils").isLWAAttachment(e[0]))
                    return b("MessengerLightweightActionUtils").getLWASnippetText(e);
                return e && e.length === 1 && this._isGloballyRemovedMessageAttachment(e[0]) ? e[0].share.description : c ? g._("B\u1ea1n \u0111\u00e3 g\u1eedi m\u1ed9t li\u00ean k\u1ebft.") : g._("{sender name} \u0111\u00e3 g\u1eedi li\u00ean k\u1ebft.", [g._param("sender name", d)]);
            case b("MercuryAttachmentSnippetType").GIFT:
                return b("MercuryGiftSnippetRenderer").renderText(c, d);
            case b("MercuryAttachmentSnippetType").FILE:
                return c ? g._("B\u1ea1n \u0111\u00e3 g\u1eedi m\u1ed9t t\u1ec7p \u0111\u00ednh k\u00e8m.") : g._("{sender name} \u0111\u00e3 g\u1eedi m\u1ed9t t\u1ec7p \u0111\u00ednh k\u00e8m.", [g._param("sender name", d)]);
            case b("MercuryAttachmentSnippetType").MIXED:
                return c ? g._("B\u1ea1n \u0111\u00e3 g\u1eedi m\u1ed9t s\u1ed1 t\u1ec7p \u0111\u00ednh k\u00e8m.") : g._("{sender name} \u0111\u00e3 g\u1eedi m\u1ed9t s\u1ed1 file \u0111\u00ednh k\u00e8m.", [g._param("sender name", d)]);
            case b("MercuryAttachmentSnippetType").ERROR:
                return c ? g._("B\u1ea1n \u0111\u00e3 g\u1eedi m\u1ed9t t\u1ec7p \u0111\u00ednh k\u00e8m.") : g._("{sender name} \u0111\u00e3 g\u1eedi m\u1ed9t t\u1ec7p \u0111\u00ednh k\u00e8m.", [g._param("sender name", d)]);
            default:
                return ""
            }
        },
        _isGloballyRemovedMessageAttachment: function(a) {
            return a.share && a.share.style_list && a.share.style_list.includes("globally_deleted_message_placeholder")
        },
        _hasOnlyPhotos: function(a) {
            return this._getPhotoAttachments(a).length === a.length
        },
        _hasThirdPartySticker: function(a) {
            return a.length === 1 && a[0].attach_type === "third_party_sticker"
        },
        _hasOnlyAnimatedImages: function(a) {
            return this._getAnimatedImageAttachments(a).length === a.length
        },
        _hasOnlyVideo: function(a) {
            return a.length === 1 && a[0].attach_type === "video"
        },
        _hasAudioClip: function(a) {
            var c = a[0].metadata && a[0].metadata.type;
            return a.length === 1 && (c === b("MercuryAudioType").AudioClip || c === b("MercuryAudioType").VoiceMessageWithTranscript)
        },
        _hasBusinessMessage: function(a) {
            return this._hasSingleShareAttachmentOfStyle(a, "business_message_items")
        },
        _hasSticker: function(a) {
            return a.length === 1 && a[0].attach_type === "sticker"
        },
        _hasLikeSticker: function(a) {
            if (a.length < 1)
                return !1;
            var c = a[0].metadata && a[0].metadata.stickerID;
            return a.length === 1 && (c == b("StickerConstants").LIKE_STICKER_ID || c == b("StickerConstants").HOT_LIKE_SMALL_STICKER_ID || c == b("StickerConstants").HOT_LIKE_MEDIUM_STICKER_ID || c == b("StickerConstants").HOT_LIKE_LARGE_STICKER_ID)
        },
        _hasLocation: function(a) {
            return this._hasSingleShareAttachmentOfStyle(a, "message_location")
        },
        _hasLiveLocation: function(a) {
            return this._hasSingleShareAttachmentOfStyle(a, "message_live_location")
        },
        _hasMontageDirect: function(a) {
            return this._hasSingleShareAttachmentOfStyle(a, "montage_direct")
        },
        _hasP2PPayment: function(a) {
            return this._hasSingleShareAttachmentOfStyle(a, "orion")
        },
        _hasP2PPaymentRequest: function(a) {
            return this._hasSingleShareAttachmentOfStyle(a, "orion_request")
        },
        _hasSingleShareAttachmentOfStyle: function(a, b) {
            return a.length === 1 && a[0].attach_type === "share" && a[0].share && a[0].share.style_list.indexOf(b) >= 0
        },
        _hasShare: function(a) {
            return a.length === 1 && a[0].attach_type === "share"
        },
        _hasError: function(a) {
            return a.length === 1 && a[0].attach_type === "error"
        },
        _hasGift: function(a) {
            return a.length === 1 && a[0].attach_type === "gift"
        },
        _hasFile: function(a) {
            return a.length === 1 && a[0].attach_type === "file"
        },
        _getPhotoAttachments: function(a) {
            return !a ? [] : a.filter(function(a) {
                return a.attach_type === "photo"
            })
        },
        _getAnimatedImageAttachments: function(a) {
            return !a ? [] : a.filter(function(a) {
                return a.attach_type === "animated_image"
            })
        },
        _renderPhotoAttachmentSnippetText: function(a, b, c) {
            if (c.length === 1)
                if (a)
                    return g._("B\u1ea1n \u0111\u00e3 g\u1eedi m\u1ed9t \u1ea3nh.");
                else
                    return g._("{name} \u0111\u00e3 g\u1eedi m\u1ed9t \u1ea3nh.", [g._param("name", b)]);
            else if (a)
                return g._({
                    "*": "B\u1ea1n \u0111\u00e3 g\u1eedi {num_photos} \u1ea3nh."
                }, [g._param("num_photos", c.length, [0])]);
            else
                return g._({
                    "*": "{name} \u0111\u00e3 g\u1eedi {num_photos} \u1ea3nh."
                }, [g._param("name", b), g._param("num_photos", c.length, [0])])
        },
        _renderAnimatedImagesAttachmentSnippetText: function(a, b, c) {
            if (c.length === 1)
                if (a)
                    return g._("B\u1ea1n \u0111\u00e3 g\u1eedi m\u1ed9t t\u1ec7p GIF.");
                else
                    return g._("{name} \u0111\u00e3 g\u1eedi m\u1ed9t t\u1ec7p GIF.", [g._param("name", b)]);
            else if (a)
                return g._("B\u1ea1n \u0111\u00e3 g\u1eedi {num_animated_images} GIF.", [g._param("num_animated_images", c.length)]);
            else
                return g._("{name} \u0111\u00e3 g\u1eedi {num_animated_images} GIF.", [g._param("name", b), g._param("num_animated_images", c.length)])
        },
        _renderBusinessMessageSnippetText: function(a, b) {
            a = a.share.target;
            a = a && a.message || g._("{sender name} \u0111\u00e3 g\u1eedi m\u1ed9t t\u1ec7p \u0111\u00ednh k\u00e8m.", [g._param("sender name", b)]);
            return a
        },
        _renderP2PPaymentSnippetText: function(a) {
            a = a.share.target;
            return this.renderP2PPaymentSnippetText(b("CurrentUser").getID() === a.sender.id, a.sender.name, a.amountWithSymbol, a.status, b("CurrentUser").getID() === a.receiver.id, a.receiver.name)
        },
        _renderP2PPaymentRequestSnippetText: function(a) {
            a = a.share.target;
            return this.renderP2PPaymentRequestSnippetText(b("CurrentUser").getID() === a.requester.id, a.requester.name, a.amountWithSymbol, a.currentStatus, b("CurrentUser").getID() === a.requestee.id, a.requestee.name)
        },
        renderP2PPaymentSnippetText: function(a, c, d, e, f, g) {
            return b("P2PSnippetStringUtils").getTransferSnippetByStatus(e, a, f || !1, c || "", g || "", d)
        },
        renderP2PPaymentRequestSnippetText: function(a, c, d, e, f, g) {
            return b("P2PSnippetStringUtils").getRequestSnippetByStatus(e, a, f || !1, c || "", g || "", d)
        }
    };
    e.exports = a
}
), null);
__d("useMWMSSnippetRenderer_DONT_USE.react", ["fbt", "Actor", "BaseText.react", "CometEmojiTransform", "CometEmoticonTransform", "MercuryAttachmentSnippetRenderer", "MercuryAttachmentSnippetType", "MercuryIDs", "MessengerParticipants.re", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React")
      , i = ["227878347358915", "369239263222822", "369239343222814", "369239383222810"];
    function j(a, c) {
        var d = b("MercuryIDs").getUserIDFromParticipantID(a.id);
        c = c && c[d] || a.short_name;
        return h.jsx(b("BaseText.react"), {
            text: c,
            transforms: [b("CometEmoticonTransform")(), b("CometEmojiTransform")()]
        })
    }
    function k(a, b, c, d, e) {
        return c.id === d ? g._("B\u1ea1n: {last message sent in the thread}", [g._param("last message sent in the thread", a)]) : e ? a : g._("{sender name}: {last message sent in the thread}", [g._param("sender name", j(c, b)), g._param("last message sent in the thread", a)])
    }
    function a(a) {
        var c = b("Actor").useActor();
        c = c[0];
        if (a == null)
            return null;
        c = b("MercuryIDs").getParticipantIDFromUserID(c);
        var d = a.snippet
          , e = a == null ? void 0 : a.snippet_sender;
        e = e != null ? b("MessengerParticipants.re").getNow(e) : null;
        if (e != null)
            if (a.snippet_attachments.length !== 0) {
                var f = a.snippet_attachments
                  , g = b("MercuryAttachmentSnippetRenderer").getAttachmentSnippetType(f);
                g === b("MercuryAttachmentSnippetType").SHARE && d !== "" || (d = b("MercuryAttachmentSnippetRenderer").renderAttachmentSnippetText(g, c === a.snippet_sender, j(e, a.custom_nickname), f));
                (f == null ? void 0 : f.length) === 1 && i.includes((g = f[0]) == null ? void 0 : (f = g.metadata) == null ? void 0 : f.stickerID) && (d = k(h.jsx(b("BaseText.react"), {
                    text: "(Y)",
                    transforms: [b("CometEmoticonTransform")()]
                }), a.custom_nickname, e, c, a.is_canonical))
            } else
                a.snippet != null && a.snippet.toString() !== "" && (d = k(h.jsx(b("BaseText.react"), {
                    text: a.snippet.toString(),
                    transforms: [b("CometEmoticonTransform")(), b("CometEmojiTransform")()]
                }), a.custom_nickname, e, c, a.is_canonical));
        return d
    }
}
), null);
__d("MWMSSnippetRenderer.bs", ["bs_curry", "MWMSCurrentThreadDetails.bs", "useMWMSSnippetRenderer_DONT_USE.react"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("useMWMSSnippetRenderer_DONT_USE.react");
    function a(a) {
        return b("bs_curry")._1(g, b("MWMSCurrentThreadDetails.bs").useHook(0))
    }
    f.useSnippetHook = g;
    f.useHook = a
}
), null);
__d("XCometJobsComposerControllerRouteBuilder", ["jsRouteBuilder"], (function(a, b, c, d, e, f) {
    a = b("jsRouteBuilder")("/jobs_composer/", Object.freeze({
        composer_mode: "new_post",
        source: "web_url"
    }), void 0);
    c = a;
    e.exports = c
}
), null);
__d("XCometOfferCreateControllerRouteBuilder", ["jsRouteBuilder"], (function(a, b, c, d, e, f) {
    a = b("jsRouteBuilder")("/offers/create/", Object.freeze({
        referrer: "unknown"
    }), void 0);
    c = a;
    e.exports = c
}
), null);
__d("PagesCometAdminConsolidatedEntryButtonsContainer_renderer$normalization.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        kind: "SplitOperation",
        metadata: {},
        name: "PagesCometAdminConsolidatedEntryButtonsContainer_renderer$normalization",
        selections: [{
            alias: null,
            args: null,
            concreteType: "Page",
            kind: "LinkedField",
            name: "page",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "id",
                storageKey: null
            }, {
                alias: null,
                args: null,
                concreteType: "ConsolidatedEntryButton",
                kind: "LinkedField",
                name: "consolidated_entry_buttons",
                plural: !0,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "icon",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "label",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "logging_name",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "type",
                    storageKey: null
                }],
                storageKey: null
            }],
            storageKey: null
        }]
    };
    e.exports = a
}
), null);
__d("PagesCometAdminConsolidatedEntryButtonsContainer_renderer.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "PagesCometAdminConsolidatedEntryButtonsContainer_renderer",
        selections: [{
            alias: null,
            args: null,
            concreteType: "Page",
            kind: "LinkedField",
            name: "page",
            plural: !1,
            selections: [{
                args: null,
                kind: "FragmentSpread",
                name: "PagesCometAdminConsolidatedEntryButtons_consolidated_entry_buttons"
            }],
            storageKey: null
        }],
        type: "CometPageConsolidatedEntryButtonsContainerRenderer",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("PagesCometAdminConsolidatedEntryButtons_consolidated_entry_buttons.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "PagesCometAdminConsolidatedEntryButtons_consolidated_entry_buttons",
        selections: [{
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        }, {
            alias: null,
            args: null,
            concreteType: "ConsolidatedEntryButton",
            kind: "LinkedField",
            name: "consolidated_entry_buttons",
            plural: !0,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "icon",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "label",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "logging_name",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "type",
                storageKey: null
            }],
            storageKey: null
        }],
        type: "Page",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("PagesCometAdminConsolidatedEntryButtonsUtils", ["ix", "CometMarketplaceLogger", "JSResource", "XCometEventCreateControllerRouteBuilder", "XCometJobsComposerControllerRouteBuilder", "XCometLiveProducerControllerRouteBuilder", "XCometLWIProductPickerControllerRouteBuilder", "XCometMarketplaceComposerControllerRouteBuilder", "XCometOfferCreateControllerRouteBuilder", "fbicon"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.getButtonIcon = a;
    f.generateButtonUrl = c;
    f.getDialogResource = d;
    f.logClickByButtonType = e;
    var h = b("JSResource")("GroupsCometCreateDialog.react").__setRef("PagesCometAdminConsolidatedEntryButtonsUtils");
    function a(a) {
        switch (a) {
        case "megaphone":
            return b("fbicon")._(g("534261"), 16);
        case "calendar":
            return b("fbicon")._(g("481115"), 16);
        case "camcorder-live":
            return b("fbicon")._(g("480529"), 16);
        case "coupon":
            return b("fbicon")._(g("599972"), 16);
        case "briefcase":
            return b("fbicon")._(g("481904"), 16);
        case "group":
            return b("fbicon")._(g("485088"), 16);
        case "car":
            return b("fbicon")._(g("485025"), 16);
        case "house":
            return b("fbicon")._(g("481925"), 16);
        case "dots-3-horizontal":
            return b("fbicon")._(g("484386"), 16);
        default:
            return b("fbicon")._(g("484386"), 16)
        }
    }
    function c(a) {
        var c = a.acontext
          , d = a.pageID;
        a = a.type;
        if (d == null)
            return null;
        switch (a) {
        case "AD":
            return b("XCometLWIProductPickerControllerRouteBuilder").buildURL({
                entry_point: "WWW_CONSOLIDATE_ENTRY_POINT",
                page_id: d
            });
        case "EVENT":
            return b("XCometEventCreateControllerRouteBuilder").buildURL({
                acontext: c,
                actor_id: d,
                dialog_entry_point: "page_events_tab"
            });
        case "JOB":
            return b("XCometJobsComposerControllerRouteBuilder").buildURL({
                job_opening_create_surface: "PAGE",
                page_id: d,
                referer_mechanism: "page_composer_header",
                source: "page_composer"
            });
        case "LIVE":
            return b("XCometLiveProducerControllerRouteBuilder").buildURL({
                entry_point: "pages_feed",
                target_id: d
            });
        case "OFFER":
            return b("XCometOfferCreateControllerRouteBuilder").buildURL({
                page_id: d,
                referrer: "page_composer"
            });
        case "VEHICLE":
            return b("XCometMarketplaceComposerControllerRouteBuilder").buildURL({
                conversion_source: 3,
                listing_type: "vehicle",
                ref: "page_home_tab",
                seller_page_id: d
            });
        case "REAL_ESTATE":
            return b("XCometMarketplaceComposerControllerRouteBuilder").buildURL({
                listing_type: "rental",
                seller_page_id: d
            });
        default:
            return null
        }
    }
    function d(a) {
        switch (a) {
        case "GROUP":
            return h;
        default:
            return null
        }
    }
    function e(a, c) {
        switch (a) {
        case "VEHICLE":
            b("CometMarketplaceLogger").logClick("verticals_page_create_pill", "page_home_tab", null, {
                otherUserID: c
            });
            return;
        default:
            return
        }
    }
}
), null);
__d("PagesCometAdminConsolidatedEntryButtonsPopover.react", ["ix", "CometContextualLayer.react", "CometLazyDialogTrigger.react", "CometOnOutsideClick.react", "CometPopover.react", "PagesCometAdminConsolidatedEntryButtonsUtils", "React", "TetraCircleButton.react", "TetraList.react", "TetraListCell.react", "emptyFunction", "fbicon", "stylex", "useEventActionLoggerParams"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React")
      , i = 44;
    function a(a) {
        var c = h.useState(!1)
          , d = c[0]
          , e = c[1];
        c = h.useRef();
        var f = function() {
            e(!1)
        }
          , j = function() {
            e(!d)
        }
          , k = b("useEventActionLoggerParams")({
            mechanism: "page_admin_consolidated_entry_buttons_popover",
            surface: "page"
        });
        k[0];
        var l = k[1]
          , m = c.current;
        if (a.consolidatedEntryButtons == null)
            return null;
        var n = a.consolidatedEntryButtons.map(function(c) {
            var d = c.icon
              , e = c.label;
            c = c.type;
            var f = b("PagesCometAdminConsolidatedEntryButtonsUtils").generateButtonUrl({
                acontext: JSON.stringify(l),
                pageID: a.pageID,
                type: c
            });
            d = {
                addOnPrimary: {
                    color: "primary",
                    icon: d,
                    type: "icon"
                },
                headline: e,
                headlineLineLimit: 1,
                key: c,
                level: 4,
                linkProps: {
                    url: f
                },
                onPress: b("emptyFunction")
            };
            f == null && delete d.linkProps;
            return d
        })
          , o = {
            height: n.length * i
        };
        return h.jsxs("div", {
            children: [h.jsx(b("TetraCircleButton.react"), {
                color: "primary",
                icon: b("fbicon")._(g("484386"), 16),
                label: "Label",
                onPress: j,
                ref: c,
                size: 36
            }), d && m != null && h.jsx(b("CometOnOutsideClick.react"), {
                onOutsideClick: f,
                children: function(a) {
                    return h.jsx(b("CometContextualLayer.react"), {
                        align: "end",
                        context_DEPRECATED: m,
                        position: "below",
                        children: h.jsx("div", {
                            className: "aahdfvyu",
                            children: h.jsx(b("CometPopover.react"), {
                                ref: a,
                                children: h.jsx("div", {
                                    className: "e6erh6tl discj3wi",
                                    style: o,
                                    children: h.jsx(b("TetraList.react"), {
                                        items: n,
                                        children: n.map(function(a) {
                                            var c = b("PagesCometAdminConsolidatedEntryButtonsUtils").getDialogResource(a.key);
                                            return c != null ? h.jsx(b("CometLazyDialogTrigger.react"), {
                                                dialogProps: {},
                                                dialogResource: c,
                                                children: function(c, d) {
                                                    return h.jsx(b("TetraListCell.react"), babelHelpers["extends"]({
                                                        ref: d
                                                    }, a, {
                                                        onPress: function() {
                                                            f(),
                                                            c()
                                                        }
                                                    }))
                                                }
                                            }, a.key) : h.jsx(b("TetraListCell.react"), babelHelpers["extends"]({}, a))
                                        })
                                    })
                                })
                            })
                        })
                    })
                }
            })]
        })
    }
}
), null);
__d("PagesCometAdminConsolidatedEntryButtons.react", ["fbt", "CometCard.react", "CometRelay", "PagesCometAdminConsolidatedEntryButtonsPopover.react", "PagesCometAdminConsolidatedEntryButtonsUtils", "React", "TetraText.react", "gkx", "recoverableViolation", "requireCond", "stylex", "cr:1328514", "PagesCometAdminConsolidatedEntryButtons_consolidated_entry_buttons.graphql"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h, i = b("React"), j = b("gkx")("1296384") ? 25 : 20;
    function a(a) {
        a = b("CometRelay").useFragment(h !== void 0 ? h : h = b("PagesCometAdminConsolidatedEntryButtons_consolidated_entry_buttons.graphql"), a.page);
        if (a == null || a.consolidated_entry_buttons == null || a.id == null) {
            b("recoverableViolation")("ConsolidatedEntryButtons menu needs consolidated_entry_buttons and id to render", "pages_consumer_experience_www");
            return null
        }
        var c = a.consolidated_entry_buttons.map(function(a) {
            var c = a.icon
              , d = a.label
              , e = a.logging_name;
            a = a.type;
            return {
                icon: b("PagesCometAdminConsolidatedEntryButtonsUtils").getButtonIcon(c),
                label: d,
                logging_name: e,
                type: a
            }
        });
        if (c.length === 0)
            return null;
        var d = i.jsx("div", {
            className: "dhix69tm oi9244e8",
            children: i.jsx(b("TetraText.react"), {
                type: "button2",
                children: g._("T\u1ea1o")
            })
        });
        a = a.id;
        var e = 0
          , f = 0;
        for (var k = c, l = Array.isArray(k), m = 0, k = l ? k : k[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
            var n;
            if (l) {
                if (m >= k.length)
                    break;
                n = k[m++]
            } else {
                m = k.next();
                if (m.done)
                    break;
                n = m.value
            }
            n = n;
            n.label != null && (f += n.label.length);
            if (f < j)
                e += 1;
            else
                break
        }
        b("gkx")("1296384") || (e = Math.min(e, 4));
        n = c.slice(0, e);
        m = n.length > 0 && a != null ? i.jsx(b("cr:1328514"), {
            consolidatedEntryButtons: n,
            pageID: a
        }) : null;
        l = c.slice(e);
        k = l.length > 0 && a != null ? i.jsx(b("PagesCometAdminConsolidatedEntryButtonsPopover.react"), {
            consolidatedEntryButtons: l,
            pageID: a
        }) : null;
        return i.jsx("div", {
            className: "sjgh65i0",
            children: i.jsx(b("CometCard.react"), {
                background: "white",
                dropShadow: 1,
                children: i.jsxs("div", {
                    className: "k4urcfbm j83agx80 bp9cbjyn",
                    children: [d, m, k]
                })
            })
        })
    }
}
), null);
__d("PagesCometAdminConsolidatedEntryButtonsContainer.react", ["CometErrorBoundary.react", "CometRelay", "PagesCometAdminConsolidatedEntryButtons.react", "React", "recoverableViolation", "PagesCometAdminConsolidatedEntryButtonsContainer_renderer.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React");
    function a(a) {
        a = a.containerRenderer$key;
        a = b("CometRelay").useFragment(g !== void 0 ? g : g = b("PagesCometAdminConsolidatedEntryButtonsContainer_renderer.graphql"), a);
        return a.page == null ? b("recoverableViolation")("ConsolidatedEntryButtons menu needs a page prop", "pages_consumer_experience_www") : h.jsx(b("CometErrorBoundary.react"), {
            fallback: function() {
                return h.jsx("div", {})
            },
            children: h.jsx(b("PagesCometAdminConsolidatedEntryButtons.react"), {
                page: a.page
            })
        })
    }
}
), null);
__d("PagesCometAdminConsolidatedEntryButtonsRow.react", ["CometLazyDialogTrigger.react", "PagesCometAdminConsolidatedEntryButtonsUtils", "React", "TetraPivotLink.react", "stylex", "useEventActionLoggerParams"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = b("useEventActionLoggerParams")({
            mechanism: "page_admin_consolidated_entry_buttons_row",
            surface: "page"
        });
        c[0];
        var d = c[1];
        if (a.consolidatedEntryButtons == null)
            return null;
        c = a.consolidatedEntryButtons.map(function(c) {
            var e = c.icon
              , f = c.label
              , g = c.type;
            c = b("PagesCometAdminConsolidatedEntryButtonsUtils").generateButtonUrl({
                acontext: JSON.stringify(d),
                pageID: a.pageID,
                type: g
            });
            e = {
                image: {
                    icon: e,
                    type: "icon"
                },
                key: g,
                label: f == null ? "" : f,
                linkProps: {
                    url: c
                },
                onPress: function() {
                    b("PagesCometAdminConsolidatedEntryButtonsUtils").logClickByButtonType(g, a.pageID)
                }
            };
            c == null && delete e.linkProps;
            return e
        });
        return g.jsx("div", {
            className: "stjgntxs ni8dbmo4 tr9rh885 sjgh65i0 owycx6da j83agx80 bp9cbjyn",
            children: c.map(function(a) {
                var c = b("PagesCometAdminConsolidatedEntryButtonsUtils").getDialogResource(a.key);
                return c != null ? g.jsx("div", {
                    className: "oi9244e8",
                    children: g.jsx(b("CometLazyDialogTrigger.react"), {
                        dialogProps: {},
                        dialogResource: c,
                        children: function(c, d) {
                            return g.jsx(b("TetraPivotLink.react"), babelHelpers["extends"]({
                                ref: d
                            }, a, {
                                onPress: c
                            }))
                        }
                    }, a.key)
                }, a.key) : g.jsx("div", {
                    className: "oi9244e8",
                    children: g.jsx(b("TetraPivotLink.react"), babelHelpers["extends"]({}, a))
                }, a.key)
            })
        })
    }
}
), null);
__d("MessengerDesktopAppLinks", [], (function(a, b, c, d, e, f) {
    e.exports = {
        macOSX: "https://apps.apple.com/app/messenger/id1480068668",
        windows: "https://www.microsoft.com/p/messenger/9wzdncrf0083"
    }
}
), null);
__d("XCometMarketplaceComposerEditControllerRouteBuilder", ["jsRouteBuilder"], (function(a, b, c, d, e, f) {
    a = b("jsRouteBuilder")("/marketplace/edit/", Object.freeze({
        shipping: !1
    }), void 0);
    c = a;
    e.exports = c
}
), null);
__d("MWChatUpdateMuteSettingMutation.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "input"
        }]
          , b = [{
            alias: null,
            args: [{
                kind: "Variable",
                name: "data",
                variableName: "input"
            }],
            concreteType: "MessengerUpdateMuteSettingResponsePayload",
            kind: "LinkedField",
            name: "messenger_update_mute_setting",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "muted_until",
                storageKey: null
            }],
            storageKey: null
        }];
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "MWChatUpdateMuteSettingMutation",
                selections: b,
                type: "Mutation",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "MWChatUpdateMuteSettingMutation",
                selections: b
            },
            params: {
                id: "2376670165755701",
                metadata: {},
                name: "MWChatUpdateMuteSettingMutation",
                operationKind: "mutation",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("MarketplaceClickFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743922");
    c = b("FalcoLoggerInternal").create("marketplace_click", a);
    e.exports = c
}
), null);
__d("MarketplaceDesktopAdsTypedLoggerLite", ["generateLiteTypedLogger"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("generateLiteTypedLogger")("logger:MarketplaceDesktopAdsLoggerConfig")
}
), null);
__d("MarketplaceErrorDebugTypedLoggerLite", ["generateLiteTypedLogger"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("generateLiteTypedLogger")("logger:MarketplaceErrorDebugLoggerConfig")
}
), null);
__d("MarketplaceImpressionFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743925");
    c = b("FalcoLoggerInternal").create("marketplace_impression", a);
    e.exports = c
}
), null);
__d("MarketplaceModifyFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743927");
    c = b("FalcoLoggerInternal").create("marketplace_modify", a);
    e.exports = c
}
), null);
__d("CometMarketplaceLogger", ["FBLogger", "MarketplaceClickFalcoEvent", "MarketplaceDesktopAdsTypedLoggerLite", "MarketplaceErrorDebugTypedLoggerLite", "MarketplaceImpressionFalcoEvent", "MarketplaceModifyFalcoEvent"], (function(a, b, c, d, e, f) {
    "use strict";
    f.logAdEvent = a;
    f.logClick = c;
    f.logDebug = d;
    f.logModify = e;
    f.logImpression = h;
    var g = "feed_product_item";
    function a(a) {
        var c = a.eventName;
        a = a.extra;
        b("MarketplaceDesktopAdsTypedLoggerLite").logVital({
            event_name: c,
            extra: a
        })
    }
    function c(a, c, d, e) {
        var f = "click"
          , h = a === g;
        h && !(e == null ? void 0 : e.storyType) ? b("FBLogger")("marketplace").mustfix("story_type not set for %s on feed_product_item", f) : h && !(e == null ? void 0 : e.productItemID) && b("FBLogger")("marketplace").mustfix("product_item_id not set for %s on feed_product_item", f);
        b("MarketplaceClickFalcoEvent").log(function() {
            return {
                componentHierarchy: [{
                    component: e == null ? void 0 : e.parentComponent
                }],
                componentID: e == null ? void 0 : e.componentID,
                composerEntrypoint: e == null ? void 0 : e.composerEntrypoint,
                composerMode: e == null ? void 0 : e.composerMode,
                otherUserID: Number(e == null ? void 0 : e.otherUserID),
                productItemID: e == null ? void 0 : e.productItemID,
                referralCode: e == null ? void 0 : e.referralCode,
                referralStoryType: e == null ? void 0 : e.referralStoryType,
                referralSurface: d,
                seoUrl: e == null ? void 0 : e.seoUrl,
                serverSessionID: e == null ? void 0 : e.serverSessionID,
                storyType: e == null ? void 0 : e.storyType,
                surface: c,
                themeID: e == null ? void 0 : e.themeID,
                tracking: e == null ? void 0 : e.tracking,
                uiComponent: a
            }
        })
    }
    function d(a, c, d, e) {
        var f;
        b("MarketplaceErrorDebugTypedLoggerLite").log({
            component_name: (f = e == null ? void 0 : e.componentName) != null ? f : void 0,
            error: (f = e == null ? void 0 : e.error) != null ? f : void 0,
            event: a,
            extra_data: {
                clienttime: Date.now().toString(),
                productID: (f = e == null ? void 0 : e.productItemID) != null ? f : void 0
            },
            referral_surface: d,
            surface: c
        })
    }
    function e(a, c, d, e) {
        b("MarketplaceModifyFalcoEvent").log(function() {
            return babelHelpers["extends"]({}, e, {
                referralSurface: d,
                surface: c,
                uiComponent: a
            })
        })
    }
    function h(a, c, d, e) {
        var f = "impression"
          , h = a === g;
        h && !(e == null ? void 0 : e.storyType) ? b("FBLogger")("marketplace").mustfix("story_type not set for %s on feed_product_item", f) : h && !(e == null ? void 0 : e.productItemID) && b("FBLogger")("marketplace").mustfix("product_item_id not set for %s on feed_product_item", f);
        b("MarketplaceImpressionFalcoEvent").log(function() {
            return {
                componentHierarchy: [{
                    component: e == null ? void 0 : e.parentComponent
                }],
                componentID: e == null ? void 0 : e.componentID,
                otherUserID: Number(e == null ? void 0 : e.otherUserID),
                productItemID: e == null ? void 0 : e.productItemID,
                referralCode: e == null ? void 0 : e.referralCode,
                referralStoryType: e == null ? void 0 : e.referralStoryType,
                referralSurface: d,
                serverSessionID: e == null ? void 0 : e.serverSessionID,
                storyType: e == null ? void 0 : e.storyType,
                surface: c,
                themeID: e == null ? void 0 : e.themeID,
                tracking: e == null ? void 0 : e.tracking,
                uiComponent: a,
                verificationFlowSource: e == null ? void 0 : e.verificationFlowSource,
                verificationHubStatus: e == null ? void 0 : e.verificationHubStatus,
                verificationType: e == null ? void 0 : e.verificationType
            }
        })
    }
}
), null);
__d("CometMarketplaceMeasurementGating", ["gkx", "qex"], (function(a, b, c, d, e, f) {
    "use strict";
    f.shouldShowTxnSurveyOnly = a;
    f.shouldShowInboxOnWWW = c;
    f.shouldShowAllMessagesOnYouFeedCard = d;
    function a() {
        return b("gkx")("1341472")
    }
    function c() {
        return b("qex")._("1581518")
    }
    function d() {
        return b("gkx")("1732317")
    }
}
), null);
__d("createCommitMutation", ["Promise", "requireCond", "cr:819055"], (function(a, b, c, d, e, f) {
    "use strict";
    f.createCommitMutation = a;
    f.createCommitMutationForEnvironment = c;
    f.createCommitMutationWithVariables = d;
    var g = b("cr:819055").commitMutation;
    function h(a, c, d) {
        return new (b("Promise"))(function(b, e) {
            return g(a, babelHelpers["extends"]({}, d, {
                variables: {
                    input: c
                },
                onCompleted: function(a, c) {
                    c && c.length ? e(c) : b(a)
                },
                onError: function(a) {
                    return e([a])
                }
            }))
        }
        )
    }
    function a(a, b) {
        return function(c) {
            return h(a, c, b)
        }
    }
    function c(a) {
        return function(b, c) {
            return h(b, c, a)
        }
    }
    function d(a, b) {
        return function(c) {
            return h(a, c, b(c))
        }
    }
}
), null);
__d("MWChatUpdateMuteSettingMutation", ["CometRelay", "CometRelayEnvironment", "createCommitMutation", "MWChatUpdateMuteSettingMutation.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;
    a = b("createCommitMutation").createCommitMutation(b("CometRelayEnvironment"), {
        mutation: g !== void 0 ? g : g = b("MWChatUpdateMuteSettingMutation.graphql")
    });
    f.commit = a
}
), null);
__d("MessengerMuteUtils.bs", ["fbt", "formatDate", "DateStrings"], (function(a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
        if (a > 0)
            if (a < 86401)
                return;
            else {
                var c = new Date(a * 1e3).getDay()
                  , d = c === new Date().getDay()
                  , e = c === new Date().getDay() + 1;
                if (e)
                    return g._("T\u1eaft \u0111\u1ebfn {time} ng\u00e0y mai", [g._param("time", b("formatDate")(a, "g:ia"))]);
                else if (d)
                    return g._("T\u1eaft \u0111\u1ebfn {time}", [g._param("time", b("formatDate")(a, "g:ia"))]);
                else
                    return g._("T\u1eaft \u0111\u1ebfn {time} {weekday name}", [g._param("time", b("formatDate")(a, "g:ia")), g._param("weekday name", b("DateStrings").getWeekdayName(c))])
            }
        else if (a === -1)
            return g._("T\u1eaft v\u00f4 th\u1eddi h\u1ea1n");
        else
            return
    }
    function c(a, b) {
        if (a)
            if (b)
                return g._("B\u1eadt th\u00f4ng b\u00e1o");
            else
                return g._("T\u1eaft th\u00f4ng b\u00e1o");
        else if (b)
            return g._("B\u1eadt l\u1ea1i cu\u1ed9c tr\u00f2 chuy\u1ec7n");
        else
            return g._("T\u1eaft cu\u1ed9c tr\u00f2 chuy\u1ec7n")
    }
    f.mutedUntilLabel = a;
    f.muteActionLabel = c
}
), null);
__d("MWChatSearchTypeaheadDataEntry", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, b) {
            this.$1 = a,
            this.$3 = b
        }
        var b = a.prototype;
        b.getServerSearchResult = function() {
            return this.$3
        }
        ;
        b.getKey = function() {
            return this.$1.id
        }
        ;
        b.getLabel = function() {
            return this.$1.displayName
        }
        ;
        b.getMetaData = function() {
            return this.$2
        }
        ;
        b.getRawData = function() {
            return this.$1
        }
        ;
        b.getResultType = function() {
            return this.$1.resultType
        }
        ;
        b.getIsInstagramAccount = function() {
            var a;
            return (a = this.$1.isInstagramAccount) != null ? a : !1
        }
        ;
        b.getIsInteropIneligible = function() {
            return this.$1.isInteropEligible === !1
        }
        ;
        b.setMetaData = function(a) {
            this.$2 = a;
            return this
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("MWUIChatThreadHook.bs", ["requireCond", "cr:1441531"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("cr:1441531").useThread;
    f.$MWLSChatThreadHook$OR$MWMSChatThreadHook$requireCond = b("cr:1441531");
    f.useThread = a
}
), null);
__d("MessengerMQTTPresence", ["BanzaiODS", "FBMqttChannel"], (function(a, b, c, d, e, f) {
    "use strict";
    f.subscribe = a;
    f.unsubscribe = c;
    f.sendAdditionalBuddyRequest = d;
    var g = "/orca_presence"
      , h = "mqtt_web.presence"
      , i = "/send_additional_contacts"
      , j = !1;
    function a(a) {
        if (j)
            return;
        j = !0;
        b("FBMqttChannel").subscribe(g, function(c) {
            c = JSON.parse(c);
            c && c.list && (c.list_type && c.list_type === "full" && a.reset(),
            a.setMultiFromMQTT(c.list),
            b("BanzaiODS").bumpEntityKey(3303, h, "buddylist.event"),
            b("BanzaiODS").bumpEntityKey(3303, h, "buddylist.active_buddies", c.list.length))
        })
    }
    function c() {
        j = !1,
        b("FBMqttChannel").unsubscribeAll(g)
    }
    function d(a) {
        b("FBMqttChannel").publish(i, JSON.stringify({
            additional_contacts: [a]
        }))
    }
}
), null);
__d("CometAggregatedEntitiesTooltipRenderer_entities.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: {
            mask: !1
        },
        name: "CometAggregatedEntitiesTooltipRenderer_entities",
        selections: [{
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "count",
            storageKey: null
        }, {
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "sample_entities",
            plural: !0,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "__typename",
                storageKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "id",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "name",
                    storageKey: null
                }],
                type: "User",
                abstractKey: null
            }],
            storageKey: null
        }],
        type: "AggregatedEntitiesAtRange",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("CometImageEntityRenderer_entity.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [{
            kind: "RootArgument",
            name: "scale"
        }],
        kind: "Fragment",
        metadata: {
            mask: !1
        },
        name: "CometImageEntityRenderer_entity",
        selections: [{
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "entity_with_image",
            plural: !1,
            selections: [{
                alias: null,
                args: [{
                    kind: "Variable",
                    name: "scale",
                    variableName: "scale"
                }],
                concreteType: "Image",
                kind: "LinkedField",
                name: "image",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "height",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "scale",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "uri",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "width",
                    storageKey: null
                }],
                storageKey: null
            }],
            storageKey: null
        }],
        type: "ImageAtRange",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("useCometPhotoViewerPlaceholderPassthroughProps_photo.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [{
            kind: "RootArgument",
            name: "scale"
        }],
        kind: "Fragment",
        metadata: null,
        name: "useCometPhotoViewerPlaceholderPassthroughProps_photo",
        selections: [{
            alias: "viewer_image",
            args: [{
                kind: "Literal",
                name: "context",
                value: "comet_media_viewer"
            }, {
                kind: "Literal",
                name: "height",
                value: 1e6
            }, {
                kind: "Variable",
                name: "scale",
                variableName: "scale"
            }, {
                kind: "Literal",
                name: "width",
                value: 1e6
            }],
            concreteType: "Image",
            kind: "LinkedField",
            name: "image",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "height",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "width",
                storageKey: null
            }],
            storageKey: null
        }],
        type: "Photo",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("CometFallbackEffectWorkaround.react", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var b = a.onMount;
        g.useEffect(function() {
            b()
        }, []);
        return null
    }
}
), null);
__d("CometRefineRef", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        return function(b) {
            if (a == null)
                return;
            typeof a === "function" ? a(b) : typeof a === "object" && (a.current = b)
        }
    }
}
), null);
__d("CometFeedUnitLoggingContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext({
        position: null,
        renderLocation: null
    });
    e.exports = c
}
), null);
__d("CometFeedUnitOnFeedUnitErrorContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext(null);
    e.exports = c
}
), null);
__d("CometFeedUnitShouldPropagateErrorContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext(!0);
    e.exports = c
}
), null);
__d("useCommitCountRef", ["React", "useLayoutEffect_SAFE_FOR_SSR"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a() {
        var a = g.useRef(0);
        b("useLayoutEffect_SAFE_FOR_SSR")(function() {
            a.current += 1
        });
        return a
    }
}
), null);
__d("CometFeedMatchRenderer.react", ["BanzaiODS", "CometErrorBoundary.react", "CometFallbackEffectWorkaround.react", "CometFeedUnitLoggingContext", "CometFeedUnitOnFeedUnitErrorContext", "CometFeedUnitShouldPropagateErrorContext", "CometRelay", "FBLogger", "React", "recoverableViolation", "requireDeferred", "useCommitCountRef"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React")
      , h = b("requireDeferred")("CometFeedStoriesStrategyErrorsTypedLoggerLite");
    function a(a) {
        var c = a.match
          , d = a.matchRequired
          , e = d === void 0 ? !1 : d
          , f = a.onUnsupported;
        d = a.preventErrorsFromFailingTheFeedUnit_USE_WITH_CAUTION;
        var i = a.props
          , j = a.section
          , k = a.trackingData
          , l = b("useCommitCountRef")()
          , m = g.useContext(b("CometFeedUnitOnFeedUnitErrorContext"));
        a = g.useContext(b("CometFeedUnitShouldPropagateErrorContext"));
        var n = g.useContext(b("CometFeedUnitLoggingContext"))
          , o = n.position
          , p = n.renderLocation
          , q = c != null ? b("CometRelay").ModuleResource.getModuleId(c) : null
          , r = g.useRef(!1);
        g.useEffect(function() {
            !r.current && q != null && (b("BanzaiODS").bumpFraction(3478, "comet_feed_strategy_errors", q, 0, 1),
            r.current = !0)
        }, [q]);
        n = function() {
            f != null && f(),
            e && b("recoverableViolation")("match required for Comet Feed section " + j + " and none was found", "comet_feed")
        }
        ;
        var s = d != null ? !d : a;
        d = g.useCallback(function(a) {
            q != null && b("BanzaiODS").bumpFraction(3478, "comet_feed_strategy_errors", q, 1, 0);
            h.onReady(function(b) {
                b.log({
                    error_name: a.message,
                    error_propagated_to_feed_unit: m != null && s,
                    is_within_feed_unit: m != null,
                    num_commits_before_error: l.current,
                    position: o,
                    render_location: p !== "%future added value" ? p : null,
                    section: j,
                    strategy: q,
                    tracking_data: k
                })
            });
            if (m == null) {
                var c;
                b("FBLogger")("CometFeedSectionErrorOutsideFeedUnit").info(((c = q) != null ? c : "Unknown Strategy/Attachment Renderer") + " threw a js error outside of CometFeedUnit.");
                throw a
            } else
                s && m(a)
        }, [m, s, l, q, o, p, j, k]);
        return c == null ? g.jsx(b("CometFallbackEffectWorkaround.react"), {
            onMount: n
        }) : g.jsx(b("CometErrorBoundary.react"), {
            context: {
                project: "CometFeedSectionErrorBoundary"
            },
            onError: d,
            children: g.jsx(b("CometFeedUnitShouldPropagateErrorContext").Provider, {
                value: s,
                children: g.jsx(b("CometRelay").MatchContainer, {
                    fallback: g.jsx(b("CometFallbackEffectWorkaround.react"), {
                        onMount: n
                    }),
                    match: c,
                    props: i
                })
            })
        })
    }
}
), null);
__d("CometFeedStoryAttachmentCommandWidget", ["createKeyCommandWidget"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("createKeyCommandWidget")();
    c = a;
    e.exports = c;
    var g = a.useKeyCommands;
    a.useKeyCommands = function(a) {
        g(a, !0)
    }
}
), null);
__d("usePageletMetadata", ["CometHeroInteractionContext", "React", "useLayoutEffect_SAFE_FOR_SSR"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a, c) {
        var d = g.useContext(b("CometHeroInteractionContext").Context);
        b("useLayoutEffect_SAFE_FOR_SSR")(function() {
            d.logMetadata(a, c, d.pageletStack);
            return function() {
                d.logMetadata(a, null, d.pageletStack)
            }
        }, [d, a, c])
    }
}
), null);
__d("usePageletMatchMetadata", ["RelayFBModuleResource", "usePageletMetadata"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c) {
        c = c != null ? b("RelayFBModuleResource").getModuleId(c) : null;
        b("usePageletMetadata")("ddd_" + a, c)
    }
}
), null);
__d("useImpressionLogger", ["CometViewportMarginsContext", "React", "getIntersectionMarginFromViewportMargin", "intersectionObserverEntryIsIntersecting", "useIntersectionObserver"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a, c) {
        var d = g.useContext(b("CometViewportMarginsContext"))
          , e = g.useRef(!1)
          , f = g.useCallback(function(d) {
            d = b("intersectionObserverEntryIsIntersecting")(d);
            if (e.current !== d) {
                e.current = d;
                if (e.current) {
                    var f = new Date();
                    e.current = !0;
                    a.onReady(function(a) {
                        c(a, f)
                    })
                }
            }
        }, [c, a]);
        return b("useIntersectionObserver")(f, {
            root: null,
            rootMargin: b("getIntersectionMarginFromViewportMargin")(d),
            threshold: 0
        })
    }
}
), null);
__d("CometAggregatedEntitiesTooltipRenderer", ["fbt", "CometRelay", "CometTooltip.react", "React", "stylex", "CometAggregatedEntitiesTooltipRenderer_entities.graphql"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h, i = b("React");
    h !== void 0 ? h : h = b("CometAggregatedEntitiesTooltipRenderer_entities.graphql");
    function a(a, c) {
        var d;
        d = (d = c.count) != null ? d : 0;
        c = (c = c.sample_entities) != null ? c : [];
        d = d - c.length;
        var e = d > 0;
        return i.jsx(b("CometTooltip.react"), {
            forceInlineDisplay: !0,
            tooltip: i.jsxs(i.Fragment, {
                children: [c.map(function(a) {
                    if (a.__typename !== "User")
                        return null;
                    var b = a.id;
                    a = a.name;
                    return b != null && a != null ? i.jsx("div", {
                        children: a
                    }, b) : null
                }), e ? i.jsx("div", {
                    children: g._("v\u00e0 {count} ng\u01b0\u1eddi n\u1eefa...", [g._param("count", d)])
                }) : null]
            }),
            children: i.jsx("span", {
                className: "lrazzd5p nhd2j8a9 oo9gr5id",
                children: a
            })
        })
    }
}
), null);
__d("CometImageEntityRenderer", ["CometImage.react", "CometRelay", "React", "stylex", "CometImageEntityRenderer_entity.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React"), i = {
        image: {
            display: "q9uorilb",
            marginEnd: "cgat1ltu",
            verticalAlign: "ljoqfudb"
        }
    };
    g !== void 0 ? g : g = b("CometImageEntityRenderer_entity.graphql");
    function a(a) {
        a === void 0 && (a = {
            imageXStyle: null
        });
        return function(c, d) {
            d = (d = (d = d.entity_with_image) == null ? void 0 : d.image) != null ? d : {};
            var e = d.height
              , f = d.scale
              , g = d.uri;
            d = d.width;
            return e == null || g == null || d == null || f == null ? c : h.jsx(b("CometImage.react"), {
                height: e / f,
                src: g,
                width: d / f,
                xstyle: [i.image, a.imageXStyle]
            })
        }
    }
}
), null);
__d("useCometPhotoViewerPlaceholderPassthroughProps", ["CometRelay", "useCometPhotoViewerPlaceholderPassthroughProps_photo.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g;
    function a(a) {
        var c, d = a.photo, e = a.placeholderImageSrc;
        a = a.productTagReferralCode;
        d = b("CometRelay").useFragment(g !== void 0 ? g : g = b("useCometPhotoViewerPlaceholderPassthroughProps_photo.graphql"), d);
        return {
            origHeight: d == null ? void 0 : (c = d.viewer_image) == null ? void 0 : c.height,
            origSrc: e,
            origWidth: d == null ? void 0 : (c = d.viewer_image) == null ? void 0 : c.width,
            productTagReferralCode: a
        }
    }
}
), null);
__d("PrivacyCheckupCometRemindersMutation.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "input"
        }]
          , b = [{
            kind: "Variable",
            name: "data",
            variableName: "input"
        }]
          , c = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "selected_cadence",
            storageKey: null
        }
          , d = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "cadence_selected_timestamp",
            storageKey: null
        };
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "PrivacyCheckupCometRemindersMutation",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: "PrivacyCheckupReminderCadenceSelectResponsePayload",
                    kind: "LinkedField",
                    name: "privacy_checkup_reminder_cadence_select",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: "PrivacyCheckupReminderSchedule",
                        kind: "LinkedField",
                        name: "reminder_schedule",
                        plural: !1,
                        selections: [c, d],
                        storageKey: null
                    }],
                    storageKey: null
                }],
                type: "Mutation",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "PrivacyCheckupCometRemindersMutation",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: "PrivacyCheckupReminderCadenceSelectResponsePayload",
                    kind: "LinkedField",
                    name: "privacy_checkup_reminder_cadence_select",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: "PrivacyCheckupReminderSchedule",
                        kind: "LinkedField",
                        name: "reminder_schedule",
                        plural: !1,
                        selections: [c, d, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "id",
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    storageKey: null
                }]
            },
            params: {
                id: "3074109822684592",
                metadata: {},
                name: "PrivacyCheckupCometRemindersMutation",
                operationKind: "mutation",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("CometTopNavListDropdown.react", ["ix", "fbt", "CometPopover.react", "CometRow.react", "CometRowItem.react", "Locale", "React", "TetraCircleButton.react", "TetraText.react", "fbicon", "stylex"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i, j = b("React"), k = {
        card: {
            display: "j83agx80",
            flexDirection: "cbu4d94t",
            maxWidth: "h77mwsce",
            minHeight: "dp1hu0rb"
        },
        cardMaxHeight: {
            maxHeight: "h58bhtfz"
        },
        cardWiderWidth: {
            width: "a98sk6w7"
        },
        cardWidth: {
            width: "o36gj0jk"
        },
        heading: {
            alignItems: "bp9cbjyn",
            display: "j83agx80",
            flexShrink: "pfnyh3mw",
            justifyContent: "i1fnvgqd",
            minHeight: "jklb3kyz",
            paddingTop: "pybr56ya",
            paddingEnd: "hv4rvrfc",
            paddingBottom: "e5nlhep0",
            paddingStart: "dati1w0a"
        },
        root: {
            marginEnd: "oi9244e8",
            marginTop: "knvmm38d"
        }
    };
    function a(a) {
        var c = a.children
          , d = a.label;
        a = a.name;
        return j.jsx("div", {
            className: (i || (i = b("stylex")))(k.root),
            children: j.jsx(b("CometPopover.react"), {
                label: d,
                popoverName: a,
                children: c
            })
        })
    }
    a.Card = function(a) {
        var c = a.children
          , d = a.testid;
        d = a.useFullWidth;
        d = d === void 0 ? !1 : d;
        a = a.useMaxHeight;
        return j.jsx("div", {
            className: (i || (i = b("stylex")))(k.card, d === !1 ? k.cardWidth : null, a === !0 ? k.cardMaxHeight : null),
            "data-testid": void 0,
            children: c
        })
    }
    ;
    a.Title = function(a) {
        var c = a.actions;
        c = c === void 0 ? [] : c;
        var d = a.onReturn;
        a = a.title;
        return j.jsxs("div", {
            className: (i || (i = b("stylex")))(k.heading),
            children: [j.jsxs(b("CometRow.react"), {
                paddingHorizontal: 0,
                paddingTop: 0,
                spacingHorizontal: 8,
                children: [d != null ? j.jsx(b("CometRowItem.react"), {
                    children: j.jsx(b("TetraCircleButton.react"), {
                        icon: b("Locale").isRTL() ? b("fbicon")._(g("514454"), 20) : b("fbicon")._(g("512647"), 20),
                        label: h._("Quay l\u1ea1i"),
                        onPress: d,
                        size: 32,
                        type: "deemphasized"
                    })
                }) : null, j.jsx(b("CometRowItem.react"), {
                    verticalAlign: "center",
                    children: j.jsx(b("TetraText.react"), {
                        isSemanticHeading: !0,
                        type: "headlineEmphasized1",
                        children: a
                    })
                })]
            }), j.jsx(b("CometRow.react"), {
                paddingHorizontal: 0,
                paddingTop: 0,
                spacingHorizontal: 8,
                children: c.map(function(a, c) {
                    return j.jsx(b("CometRowItem.react"), {
                        children: a
                    }, c)
                })
            })]
        })
    }
    ;
    a.styles = {
        cardWiderWidth: k.cardWiderWidth,
        cardWidth: k.cardWidth
    }
}
), null);
__d("CometListCellHoverButton.react", ["ix", "fbt", 
    "CometDeferredPopoverTrigger.react",
     "CometLazyPopoverTrigger.react", 
     "FocusWithinHandler.react", "React", 
     "TetraCircleButton.react", "fbicon", "stylex"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i = b("React");
    function a(a) {
        var c = a.hidden
          , d = a.label
          , e = a.onFocusChange
          , f = a.onHoverChange
          , j = a.onMenuStateChange
          , k = a.onPress
          , l = i.useCallback(function(a) {
            j != null && j(a)
        }, [j])
          , m = i.useCallback(function(a, j) {
            return i.jsx("div", {
                className: "ke6wolob rk01pc8j pmk7jnqg mrt03zmi rm21btxo" + (c ? " rfua0xdk stjgntxs ni8dbmo4 ay7djpcl kz676c5b s2gjlfnz svngc6pa" : ""),
                ref: a,
                children: i.jsx(b("FocusWithinHandler.react"), {
                    onFocusChange: e,
                    children: function(a) {
                        return i.jsx("div", {
                            className: a ? "" : "kujm000c spb7xbtv bkmhp75w emlxlaya s45kfl79",
                            children: i.jsx(b("TetraCircleButton.react"), {
                                color: "secondary",
                                icon: b("fbicon")._(g("484387"), 20),
                                label: d != null ? d : h._("Menu"),
                                onHoverIn: f != null ? function() {
                                    return f(!0)
                                }
                                : void 0,
                                onHoverOut: f != null ? function() {
                                    return f(!1)
                                }
                                : void 0,
                                onPress: function() {
                                    k && k(),
                                    j()
                                },
                                size: 36,
                                type: "overlay"
                            })
                        })
                    }
                })
            })
        }, [c, e, d, f, k]);
        l = {
            align: "middle",
            autoAlign: !0,
            onVisibilityChange: l,
            popoverProps: a.popoverProps,
            position: "below"
        };
        if (a.popoverTriggerType === "lazy")
            return i.jsx(b("CometLazyPopoverTrigger.react"), babelHelpers["extends"]({}, l, {
                popoverResource: a.popoverResource,
                children: function(a, b) {
                    return m(a, b)
                }
            }));
        else
            return i.jsx(b("CometDeferredPopoverTrigger.react"), babelHelpers["extends"]({}, l, {
                popoverResource: a.popoverResource,
                children: function(a, b) {
                    return m(a, b)
                }
            }))
    }
}
), null);
__d("CometNotificationsMutationLogger", ["QuickPerformanceLogger"], (function(a, b, c, d, e, f) {
    "use strict";
    f.notificationHideStart = a;
    f.notificationMarkAllAsReadStart = c;
    f.notificationMarkAllAsSeenStart = d;
    f.notificationMarkAsReadStart = e;
    f.notificationMarkAsSeenStart = p;
    f.notificationMarkAsUnreadStart = q;
    f.notificationUnhideStart = r;
    var g = 3473469
      , h = "client_action"
      , i = "status"
      , j = "seen_state"
      , k = 0;
    function l(a, c) {
        var d;
        c === void 0 && (c = null);
        var e = k++;
        b("QuickPerformanceLogger").markerStart(g, e);
        b("QuickPerformanceLogger").markerAnnotate(g, {
            string: (d = {},
            d[h] = a,
            d)
        }, {
            instanceKey: e
        });
        b("QuickPerformanceLogger").markerAnnotate(g, {
            string: (a = {},
            a[i] = "started",
            a)
        }, {
            instanceKey: e
        });
        b("QuickPerformanceLogger").markerAnnotate(g, {
            string: {
                environment: "MAIN_SURFACE"
            }
        }, {
            instanceKey: e
        });
        if (c) {
            b("QuickPerformanceLogger").markerAnnotate(g, {
                string: (d = {},
                d[j] = c,
                d)
            }, {
                instanceKey: e
            })
        }
        return o(e)
    }
    function m(a) {
        var c;
        b("QuickPerformanceLogger").markerAnnotate(g, {
            string: (c = {},
            c[i] = "success",
            c)
        }, {
            instanceKey: a
        });
        b("QuickPerformanceLogger").markerEnd(g, 2, a)
    }
    function n(a, c) {
        b("QuickPerformanceLogger").markerAnnotate(g, {
            string: {
                status: "error"
            }
        }, {
            instanceKey: a
        }),
        b("QuickPerformanceLogger").markerAnnotate(g, {
            string: {
                error_localized_description: c == null ? void 0 : c.message
            }
        }, {
            instanceKey: a
        }),
        b("QuickPerformanceLogger").markerAnnotate(g, {
            string: {
                error_domain: c == null ? void 0 : c.name
            }
        }, {
            instanceKey: a
        }),
        b("QuickPerformanceLogger").markerEnd(g, 87, a)
    }
    function o(a) {
        return {
            logOnError: function(b) {
                return n(a, b)
            },
            logOnSuccess: function() {
                return m(a)
            }
        }
    }
    function a() {
        return l("HIDE")
    }
    function c() {
        return l("MARK_ALL_AS_READ")
    }
    function d() {
        return l("MARK_ALL_AS_SEEN")
    }
    function e(a) {
        return l("MARK_AS_READ", a)
    }
    function p() {
        return l("MARK_AS_SEEN")
    }
    function q(a) {
        return l("MARK_AS_UNREAD", a)
    }
    function r() {
        return l("UNHIDE")
    }
}
), null);
__d("CometNotificationsTimestamp.react", ["CometRelativeTimestamp.react", "React", "TetraText.react"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.date;
        a = a.seenAndRead;
        return a ? g.jsx(b("TetraText.react"), {
            color: "secondary",
            type: "body4",
            children: g.jsx(b("CometRelativeTimestamp.react"), {
                date: c,
                format: "normal"
            })
        }) : g.jsx(b("TetraText.react"), {
            color: "highlight",
            type: "bodyLink4",
            children: g.jsx(b("CometRelativeTimestamp.react"), {
                date: c,
                format: "normal"
            })
        })
    }
}
), null);
__d("PrivacyCheckupCometRemindersMutation", ["CometRelay", "PrivacyCheckupCometRemindersMutation.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    f.commit = a;
    var g, h = g !== void 0 ? g : g = b("PrivacyCheckupCometRemindersMutation.graphql");
    function a(a, c, d, e) {
        return b("CometRelay").commitMutation(a, {
            mutation: h,
            onCompleted: d,
            onError: e,
            variables: {
                input: c
            }
        })
    }
}
), null);
__d("CometMenuFocusGroup", ["fbt", "CometComponentWithKeyCommands.react", "CometKeys", "FocusGroup.react", "React", "focusScopeQueries"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    c = b("FocusGroup.react").createFocusGroup(b("focusScopeQueries").tabbableScopeQuery);
    var i = c[0];
    d = c[1];
    function a(a) {
        var c = [{
            command: {
                key: b("CometKeys").UP
            },
            description: g._("M\u1ee5c tr\u01b0\u1edbc \u0111\u00f3"),
            handler: function() {}
        }, {
            command: {
                key: b("CometKeys").DOWN
            },
            description: g._("M\u1ee5c ti\u1ebfp theo"),
            handler: function() {}
        }];
        return h.jsx(b("CometComponentWithKeyCommands.react"), {
            commandConfigs: c,
            children: h.jsx(i, babelHelpers["extends"]({}, a))
        })
    }
    f = {
        FocusGroup: a,
        FocusItem: d
    };
    e.exports = f
}
), null);





__d("bs_belt_Array", ["bs_curry", "bs_js_math", "bs_caml_option", "bs_caml_primitive"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a, c) {
        if (c >= 0 && c < a.length)
            return b("bs_caml_option").some(a[c])
    }
    function c(a, b) {
        if (!(b >= 0 && b < a.length))
            throw new Error('File "belt_Array.ml", line 25, characters 6-12');
        return a[b]
    }
    function d(a, b, c) {
        if (b >= 0 && b < a.length) {
            a[b] = c;
            return !0
        } else
            return !1
    }
    function e(a, b, c) {
        if (!(b >= 0 && b < a.length))
            throw new Error('File "belt_Array.ml", line 31, characters 4-10');
        a[b] = c;
        return 0
    }
    function g(a, b, c) {
        var d = a[b];
        a[b] = a[c];
        a[c] = d;
        return 0
    }
    function h(a) {
        var c = a.length;
        for (var d = 0, e = c - 1 | 0; d <= e; ++d)
            g(a, d, b("bs_js_math").random_int(d, c));
        return 0
    }
    function i(a) {
        a = a.slice(0);
        h(a);
        return a
    }
    function j(a) {
        var b = a.length;
        a = a;
        var c = 0;
        b = b;
        for (var d = 0, e = (b / 2 | 0) - 1 | 0; d <= e; ++d)
            g(a, c + d | 0, ((c + b | 0) - d | 0) - 1 | 0);
        return 0
    }
    function k(a) {
        var b = a.length
          , c = new Array(b);
        for (var d = 0, e = b - 1 | 0; d <= e; ++d)
            c[d] = a[(b - 1 | 0) - d | 0];
        return c
    }
    function l(a, b) {
        if (a <= 0)
            return [];
        else {
            var c = new Array(a);
            for (var d = 0, a = a - 1 | 0; d <= a; ++d)
                c[d] = b;
            return c
        }
    }
    function m(a, b) {
        if (a <= 0)
            return [];
        else {
            var c = new Array(a);
            for (var d = 0, a = a - 1 | 0; d <= a; ++d)
                c[d] = b(d);
            return c
        }
    }
    function n(a, c) {
        return m(a, b("bs_curry").__1(c))
    }
    function o(a, b) {
        a = m(a, b);
        h(a);
        return a
    }
    function p(a, c) {
        return o(a, b("bs_curry").__1(c))
    }
    function q(a, b) {
        b = b - a | 0;
        if (b < 0)
            return [];
        else {
            var c = new Array(b + 1 | 0);
            for (var d = 0; d <= b; ++d)
                c[d] = a + d | 0;
            return c
        }
    }
    function r(a, b, c) {
        b = b - a | 0;
        if (b < 0 || c <= 0)
            return [];
        else {
            b = (b / c | 0) + 1 | 0;
            var d = new Array(b);
            a = a;
            for (var e = 0, b = b - 1 | 0; e <= b; ++e)
                d[e] = a,
                a = a + c | 0;
            return d
        }
    }
    function s(a, b) {
        var c = a.length
          , d = b.length;
        c = c < d ? c : d;
        d = new Array(c);
        for (var e = 0, c = c - 1 | 0; e <= c; ++e)
            d[e] = [a[e], b[e]];
        return d
    }
    function t(a, b, c) {
        var d = a.length
          , e = b.length;
        d = d < e ? d : e;
        e = new Array(d);
        for (var f = 0, d = d - 1 | 0; f <= d; ++f)
            e[f] = c(a[f], b[f]);
        return e
    }
    function u(a, c, d) {
        return t(a, c, b("bs_curry").__2(d))
    }
    function v(a, b) {
        var c = a.length
          , d = b.length
          , e = new Array(c + d | 0);
        for (var f = 0, g = c - 1 | 0; f <= g; ++f)
            e[f] = a[f];
        for (var a = 0, f = d - 1 | 0; a <= f; ++a)
            e[c + a | 0] = b[a];
        return e
    }
    function w(a) {
        var b = a.length
          , c = 0;
        for (var d = 0, e = b - 1 | 0; d <= e; ++d)
            c = c + a[d].length | 0;
        d = new Array(c);
        c = 0;
        for (var e = 0, b = b - 1 | 0; e <= b; ++e) {
            var f = a[e];
            for (var g = 0, h = f.length - 1 | 0; g <= h; ++g)
                d[c] = f[g],
                c = c + 1 | 0
        }
        return d
    }
    function x(a, c, d) {
        if (d <= 0)
            return [];
        else {
            var e = a.length;
            c = c < 0 ? b("bs_caml_primitive").caml_int_max(e + c | 0, 0) : c;
            e = e - c | 0;
            e = e < d ? e : d;
            if (e <= 0)
                return [];
            else {
                d = new Array(e);
                for (var f = 0, e = e - 1 | 0; f <= e; ++f)
                    d[f] = a[c + f | 0];
                return d
            }
        }
    }
    function y(a, c) {
        var d = a.length;
        c = c < 0 ? b("bs_caml_primitive").caml_int_max(d + c | 0, 0) : c;
        d = d - c | 0;
        var e = new Array(d);
        for (var f = 0, d = d - 1 | 0; f <= d; ++f)
            e[f] = a[c + f | 0];
        return e
    }
    function z(a, c, d, e) {
        if (d > 0) {
            var f = a.length;
            c = c < 0 ? b("bs_caml_primitive").caml_int_max(f + c | 0, 0) : c;
            f = f - c | 0;
            f = f < d ? f : d;
            if (f > 0) {
                for (var d = c, c = (c + f | 0) - 1 | 0; d <= c; ++d)
                    a[d] = e;
                return 0
            } else
                return 0
        } else
            return 0
    }
    function A(a, b, c, d, e) {
        if (d <= b) {
            for (var f = 0, g = e - 1 | 0; f <= g; ++f)
                c[f + d | 0] = a[f + b | 0];
            return 0
        } else {
            for (var f = e - 1 | 0; f >= 0; --f)
                c[f + d | 0] = a[f + b | 0];
            return 0
        }
    }
    function B(a, c, d, e, f) {
        var g = a.length
          , h = d.length;
        c = c < 0 ? b("bs_caml_primitive").caml_int_max(g + c | 0, 0) : c;
        e = e < 0 ? b("bs_caml_primitive").caml_int_max(h + e | 0, 0) : e;
        f = b("bs_caml_primitive").caml_int_min(f, b("bs_caml_primitive").caml_int_min(g - c | 0, h - e | 0));
        if (e <= c) {
            for (var g = 0, h = f - 1 | 0; g <= h; ++g)
                d[g + e | 0] = a[g + c | 0];
            return 0
        } else {
            for (var g = f - 1 | 0; g >= 0; --g)
                d[g + e | 0] = a[g + c | 0];
            return 0
        }
    }
    function C(a, b) {
        for (var c = 0, d = a.length - 1 | 0; c <= d; ++c)
            b(a[c]);
        return 0
    }
    function D(a, c) {
        return C(a, b("bs_curry").__1(c))
    }
    function E(a, b) {
        var c = a.length
          , d = new Array(c);
        for (var e = 0, c = c - 1 | 0; e <= c; ++e)
            d[e] = b(a[e]);
        return d
    }
    function F(a, c) {
        return E(a, b("bs_curry").__1(c))
    }
    function G(a, c) {
        var d = a.length
          , e = 0
          , f = void 0;
        while (f === void 0 && e < d) {
            var g = a[e];
            c(g) && (f = b("bs_caml_option").some(g));
            e = e + 1 | 0
        }
        return f
    }
    function H(a, c) {
        return G(a, b("bs_curry").__1(c))
    }
    function I(a, b) {
        var c = a.length
          , d = 0
          , e = void 0;
        while (e === void 0 && d < c) {
            var f = a[d];
            b(f) && (e = d);
            d = d + 1 | 0
        }
        return e
    }
    function J(a, c) {
        return I(a, b("bs_curry").__1(c))
    }
    function K(a, b) {
        var c = a.length
          , d = new Array(c)
          , e = 0;
        for (var f = 0, c = c - 1 | 0; f <= c; ++f) {
            var g = a[f];
            b(g) && (d[e] = g,
            e = e + 1 | 0)
        }
        d.length = e;
        return d
    }
    function aa(a, c) {
        return K(a, b("bs_curry").__1(c))
    }
    function L(a, b) {
        var c = a.length
          , d = new Array(c)
          , e = 0;
        for (var f = 0, c = c - 1 | 0; f <= c; ++f) {
            var g = a[f];
            b(g, f) && (d[e] = g,
            e = e + 1 | 0)
        }
        d.length = e;
        return d
    }
    function ba(a, c) {
        return L(a, b("bs_curry").__2(c))
    }
    function M(a, c) {
        var d = a.length
          , e = new Array(d)
          , f = 0;
        for (var g = 0, d = d - 1 | 0; g <= d; ++g) {
            var h = a[g];
            h = c(h);
            h !== void 0 && (e[f] = b("bs_caml_option").valFromOption(h),
            f = f + 1 | 0)
        }
        e.length = f;
        return e
    }
    function ca(a, c) {
        return M(a, b("bs_curry").__1(c))
    }
    function N(a, b) {
        for (var c = 0, d = a.length - 1 | 0; c <= d; ++c)
            b(c, a[c]);
        return 0
    }
    function da(a, c) {
        return N(a, b("bs_curry").__2(c))
    }
    function O(a, b) {
        var c = a.length
          , d = new Array(c);
        for (var e = 0, c = c - 1 | 0; e <= c; ++e)
            d[e] = b(e, a[e]);
        return d
    }
    function ea(a, c) {
        return O(a, b("bs_curry").__2(c))
    }
    function P(a, b, c) {
        b = b;
        for (var d = 0, e = a.length - 1 | 0; d <= e; ++d)
            b = c(b, a[d]);
        return b
    }
    function fa(a, c, d) {
        return P(a, c, b("bs_curry").__2(d))
    }
    function Q(a, b, c) {
        b = b;
        for (var d = a.length - 1 | 0; d >= 0; --d)
            b = c(b, a[d]);
        return b
    }
    function ga(a, c, d) {
        return Q(a, c, b("bs_curry").__2(d))
    }
    function R(a, c, d, e) {
        d = d;
        var f = b("bs_caml_primitive").caml_int_min(a.length, c.length);
        for (var f = f - 1 | 0; f >= 0; --f)
            d = e(d, a[f], c[f]);
        return d
    }
    function ha(a, c, d, e) {
        return R(a, c, d, b("bs_curry").__3(e))
    }
    function S(a, b, c) {
        b = b;
        for (var d = 0, e = a.length - 1 | 0; d <= e; ++d)
            b = c(b, a[d], d);
        return b
    }
    function ia(a, c, d) {
        return S(a, c, b("bs_curry").__3(d))
    }
    function T(a, b) {
        var c = a.length;
        a = a;
        var d = 0;
        b = b;
        c = c;
        while (!0) {
            var e = d;
            if (e === c)
                return !0;
            else if (b(a[e])) {
                d = e + 1 | 0;
                continue
            } else
                return !1
        }
    }
    function ja(a, c) {
        return T(a, b("bs_curry").__1(c))
    }
    function U(a, b) {
        var c = a.length;
        a = a;
        var d = 0;
        b = b;
        c = c;
        while (!0) {
            var e = d;
            if (e === c)
                return !1;
            else if (b(a[e]))
                return !0;
            else {
                d = e + 1 | 0;
                continue
            }
        }
    }
    function ka(a, c) {
        return U(a, b("bs_curry").__1(c))
    }
    function V(a, b, c, d, e) {
        while (!0) {
            var f = c;
            if (f === e)
                return !0;
            else if (d(a[f], b[f])) {
                c = f + 1 | 0;
                continue
            } else
                return !1
        }
    }
    function W(a, c, d) {
        return V(a, c, 0, d, b("bs_caml_primitive").caml_int_min(a.length, c.length))
    }
    function la(a, c, d) {
        return W(a, c, b("bs_curry").__2(d))
    }
    function X(a, c, d) {
        var e = a
          , f = c
          , g = 0;
        d = d;
        a = b("bs_caml_primitive").caml_int_min(a.length, c.length);
        while (!0) {
            c = g;
            if (c === a)
                return !1;
            else if (d(e[c], f[c]))
                return !0;
            else {
                g = c + 1 | 0;
                continue
            }
        }
    }
    function ma(a, c, d) {
        return X(a, c, b("bs_curry").__2(d))
    }
    function Y(a, b, c) {
        var d = a.length
          , e = b.length;
        if (d === e)
            return V(a, b, 0, c, d);
        else
            return !1
    }
    function na(a, c, d) {
        return Y(a, c, b("bs_curry").__2(d))
    }
    function Z(a, b, c) {
        var d = a.length
          , e = b.length;
        if (d > e)
            return 1;
        else if (d < e)
            return -1;
        else {
            e = a;
            a = b;
            b = 0;
            c = c;
            d = d;
            while (!0) {
                var f = b;
                if (f === d)
                    return 0;
                else {
                    var g = c(e[f], a[f]);
                    if (g === 0) {
                        b = f + 1 | 0;
                        continue
                    } else
                        return g
                }
            }
        }
    }
    function oa(a, c, d) {
        return Z(a, c, b("bs_curry").__2(d))
    }
    function $(a, b) {
        var c = a.length
          , d = 0
          , e = 0
          , f = new Array(c)
          , g = new Array(c);
        for (var h = 0, c = c - 1 | 0; h <= c; ++h) {
            var i = a[h];
            b(i) ? (f[d] = i,
            d = d + 1 | 0) : (g[e] = i,
            e = e + 1 | 0)
        }
        f.length = d;
        g.length = e;
        return [f, g]
    }
    function pa(a, c) {
        return $(a, b("bs_curry").__1(c))
    }
    function qa(a) {
        var b = a.length
          , c = new Array(b)
          , d = new Array(b);
        for (var e = 0, b = b - 1 | 0; e <= b; ++e) {
            var f = a[e];
            c[e] = f[0];
            d[e] = f[1]
        }
        return [c, d]
    }
    f.get = a;
    f.getExn = c;
    f.set = d;
    f.setExn = e;
    f.shuffleInPlace = h;
    f.shuffle = i;
    f.reverseInPlace = j;
    f.reverse = k;
    f.make = l;
    f.range = q;
    f.rangeBy = r;
    f.makeByU = m;
    f.makeBy = n;
    f.makeByAndShuffleU = o;
    f.makeByAndShuffle = p;
    f.zip = s;
    f.zipByU = t;
    f.zipBy = u;
    f.unzip = qa;
    f.concat = v;
    f.concatMany = w;
    f.slice = x;
    f.sliceToEnd = y;
    f.fill = z;
    f.blit = B;
    f.blitUnsafe = A;
    f.forEachU = C;
    f.forEach = D;
    f.mapU = E;
    f.map = F;
    f.getByU = G;
    f.getBy = H;
    f.getIndexByU = I;
    f.getIndexBy = J;
    f.keepU = K;
    f.keep = aa;
    f.keepWithIndexU = L;
    f.keepWithIndex = ba;
    f.keepMapU = M;
    f.keepMap = ca;
    f.forEachWithIndexU = N;
    f.forEachWithIndex = da;
    f.mapWithIndexU = O;
    f.mapWithIndex = ea;
    f.partitionU = $;
    f.partition = pa;
    f.reduceU = P;
    f.reduce = fa;
    f.reduceReverseU = Q;
    f.reduceReverse = ga;
    f.reduceReverse2U = R;
    f.reduceReverse2 = ha;
    f.reduceWithIndexU = S;
    f.reduceWithIndex = ia;
    f.someU = U;
    f.some = ka;
    f.everyU = T;
    f.every = ja;
    f.every2U = W;
    f.every2 = la;
    f.some2U = X;
    f.some2 = ma;
    f.cmpU = Z;
    f.cmp = oa;
    f.eqU = Y;
    f.eq = na
}
), null);
__d("JsDictReadOnly.bs", ["bs_js_dict"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a) {
        return Object.keys(a)
    }
    function c(a) {
        return a
    }
    d = b("bs_js_dict").get;
    e = b("bs_js_dict").entries;
    b = b("bs_js_dict").values;
    f.from = c;
    f.get = d;
    f.keys = a;
    f.entries = e;
    f.values = b
}
), null);
__d("CometFeedPreferencesDialogNoFavoriteQuery$Parameters", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        kind: "PreloadableConcreteRequest",
        params: {
            id: "3332627043478595",
            metadata: {
                relayPreloadable: !0
            },
            name: "CometFeedPreferencesDialogNoFavoriteQuery",
            operationKind: "query",
            text: null
        }
    };
    e.exports = a
}
), null);
__d("CometFeedPreferencesFollowPageQuery$Parameters", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        kind: "PreloadableConcreteRequest",
        params: {
            id: "2888205111227304",
            metadata: {
                relayPreloadable: !0
            },
            name: "CometFeedPreferencesFollowPageQuery",
            operationKind: "query",
            text: null
        }
    };
    e.exports = a
}
), null);
__d("CometFeedPreferencesSeeFirstPageQuery$Parameters", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        kind: "PreloadableConcreteRequest",
        params: {
            id: "2991945530886125",
            metadata: {
                relayPreloadable: !0
            },
            name: "CometFeedPreferencesSeeFirstPageQuery",
            operationKind: "query",
            text: null
        }
    };
    e.exports = a
}
), null);
__d("CometFeedPreferencesSnoozePageQuery$Parameters", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        kind: "PreloadableConcreteRequest",
        params: {
            id: "2938993009546676",
            metadata: {
                relayPreloadable: !0
            },
            name: "CometFeedPreferencesSnoozePageQuery",
            operationKind: "query",
            text: null
        }
    };
    e.exports = a
}
), null);
__d("CometFeedPreferencesUnfollowPageQuery$Parameters", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        kind: "PreloadableConcreteRequest",
        params: {
            id: "3199092116808007",
            metadata: {
                relayPreloadable: !0
            },
            name: "CometFeedPreferencesUnfollowPageQuery",
            operationKind: "query",
            text: null
        }
    };
    e.exports = a
}
), null);
__d("CometLegalFooter.react", ["ix", "fbt", "CometDeferredPopoverTrigger.react", "CometErrorBoundary.react", "CometLink.react", "CometMiddot.react", "CometPressable.react", "React", "ServerTime", "TetraIcon.react", "TetraText.react", "fbicon", "gkx", "requireDeferred", "stylex"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i = b("React")
      , j = b("requireDeferred")("CometLegalFooterMoreMenu.react")
      , k = new Date(b("ServerTime").getMillis()).getFullYear();
    function a(a) {
        a = a.isPage;
        a = a === void 0 ? !1 : a;
        a = [{
            href: "https://www.facebook.com/legal/terms/information_about_page_insights_data",
            label: h._("Th\u00f4ng tin v\u1ec1 D\u1eef li\u1ec7u Th\u00f4ng tin chi ti\u1ebft Trang"),
            render: a && b("gkx")("1470093")
        }, {
            href: "/privacy/explanation",
            label: h._("Quy\u1ec1n ri\u00eang t\u01b0")
        }, {
            href: "/terms?ref=pf",
            label: h._("Impressum\/\u0110i\u1ec1u kho\u1ea3n\/NetzDG"),
            render: b("gkx")("1539946")
        }, {
            href: "/policies?ref=pf",
            label: h._("\u0110i\u1ec1u kho\u1ea3n"),
            render: !b("gkx")("1539946")
        }, {
            href: "/business/",
            label: h._("Qu\u1ea3ng c\u00e1o")
        }, {
            href: "/help/568137493302217",
            label: i.jsxs(i.Fragment, {
                children: [h._("L\u1ef1a ch\u1ecdn qu\u1ea3ng c\u00e1o"), " ", i.jsx(b("CometErrorBoundary.react"), {
                    children: i.jsx("span", {
                        className: "ormqv51v l9j0dhe7",
                        children: i.jsx(b("TetraIcon.react"), {
                            color: "secondary",
                            icon: b("fbicon")._(g("871692"), 12)
                        })
                    })
                })]
            })
        }, {
            href: "/policies/cookies/",
            label: h._("Cookie")
        }].filter(function(a) {
            return a.render == null || a.render === !0
        });
        return i.jsx("footer", {
            "aria-label": h._("Facebook"),
            role: "contentinfo",
            children: i.jsxs(b("TetraText.react"), {
                color: "secondary",
                type: "meta3",
                children: [i.jsxs("ul", {
                    className: "nc684nl6",
                    children: [a.map(function(a, c) {
                        var d = a.href;
                        a = a.label;
                        return i.jsxs("li", {
                            className: "nc684nl6",
                            children: [i.jsx(b("CometLink.react"), {
                                color: "secondary",
                                href: d,
                                weight: "normal",
                                children: a
                            }), i.jsx(b("CometMiddot.react"), {})]
                        }, c)
                    }), i.jsx(b("CometErrorBoundary.react"), {
                        children: i.jsxs("li", {
                            className: "nc684nl6",
                            children: [i.jsx(b("CometDeferredPopoverTrigger.react"), {
                                align: "middle",
                                autoAlign: !0,
                                popoverProps: {},
                                popoverResource: j,
                                popoverType: "menu",
                                position: "below",
                                children: function(a, c) {
                                    return i.jsx(b("CometPressable.react"), {
                                        display: "inline",
                                        onPress: c,
                                        overlayDisabled: !0,
                                        ref: a,
                                        children: h._("Xem th\u00eam")
                                    })
                                }
                            }), i.jsx(b("CometMiddot.react"), {})]
                        })
                    })]
                }), h._("Facebook \u00a9 {year}", [h._param("year", k)])]
            })
        })
    }
}
), null);
__d("CometFeedPreferencesDialogLoadingState.react", ["fbt", "BaseGlimmer.react", "CometCardedDialog.react", "React", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a(a) {
        return h.jsx("div", {
            className: "r2dqequf k4mk90pw il7rb8sk",
            children: h.jsx(b("CometCardedDialog.react"), babelHelpers["extends"]({
                anchorUntilHeight: 425,
                size: "medium",
                title: g._("T\u00f9y ch\u1ecdn B\u1ea3ng tin"),
                withCloseButton: !0
            }, a, {
                children: h.jsx("div", {
                    className: "ct9ao5hr",
                    children: h.jsxs("div", {
                        className: "lt9micmv ckl02a0p gl4o1x5y aodizinl",
                        children: [h.jsx(b("BaseGlimmer.react"), {
                            className: "p5pk11vy i4qgphn6 hc21y3pz c6w6u7b1 mjfe6jtr h1ci2mql eq70wtua",
                            index: 1
                        }), h.jsx(b("BaseGlimmer.react"), {
                            className: "p5pk11vy i4qgphn6 hc21y3pz c6w6u7b1 mjfe6jtr h1ci2mql pfqjqu37",
                            index: 2
                        })]
                    })
                })
            }))
        })
    }
}
), null);
__d("CometFeedPreferencesFollowPage.entrypoint", ["JSResourceForInteraction", "WebPixelRatio", "CometFeedPreferencesFollowPageQuery$Parameters"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        getPreloadProps: function() {
            return {
                queries: {
                    followPageQueryReference: {
                        parameters: b("CometFeedPreferencesFollowPageQuery$Parameters"),
                        variables: {
                            included_types: ["USER", "PAGE", "GROUP"],
                            num_profiles: 18,
                            profile_picture_scale: b("WebPixelRatio").get(),
                            query_substring: ""
                        }
                    }
                }
            }
        },
        root: b("JSResourceForInteraction")("CometFeedPreferencesFollowPage.react").__setRef("CometFeedPreferencesFollowPage.entrypoint")
    };
    e.exports = a
}
), null);
__d("CometFeedPreferencesSeeFirstPage.entrypoint", ["JSResourceForInteraction", "WebPixelRatio", "CometFeedPreferencesSeeFirstPageQuery$Parameters"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        getPreloadProps: function() {
            return {
                queries: {
                    seeFirstPageQueryReference: {
                        parameters: b("CometFeedPreferencesSeeFirstPageQuery$Parameters"),
                        variables: {
                            included_types: ["USER", "PAGE"],
                            num_profiles: 18,
                            profile_picture_scale: b("WebPixelRatio").get(),
                            query_substring: "",
                            secondary_subscribe_status: null
                        }
                    }
                }
            }
        },
        root: b("JSResourceForInteraction")("CometFeedPreferencesSeeFirstPage.react").__setRef("CometFeedPreferencesSeeFirstPage.entrypoint")
    };
    e.exports = a
}
), null);
__d("CometFeedPreferencesSnoozePage.entrypoint", ["JSResourceForInteraction", "WebPixelRatio", "CometFeedPreferencesSnoozePageQuery$Parameters"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        getPreloadProps: function() {
            return {
                queries: {
                    snoozePageQueryReference: {
                        parameters: b("CometFeedPreferencesSnoozePageQuery$Parameters"),
                        variables: {
                            included_types: null,
                            name: "",
                            num_profiles: 18,
                            profile_picture_scale: b("WebPixelRatio").get()
                        }
                    }
                }
            }
        },
        root: b("JSResourceForInteraction")("CometFeedPreferencesSnoozePage.react").__setRef("CometFeedPreferencesSnoozePage.entrypoint")
    };
    e.exports = a
}
), null);
__d("CometFeedPreferencesUnfollowPage.entrypoint", ["JSResourceForInteraction", "WebPixelRatio", "CometFeedPreferencesUnfollowPageQuery$Parameters"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        getPreloadProps: function() {
            return {
                queries: {
                    unfollowPageQueryReference: {
                        parameters: b("CometFeedPreferencesUnfollowPageQuery$Parameters"),
                        variables: {
                            included_types: ["USER", "PAGE", "GROUP"],
                            num_profiles: 18,
                            profile_picture_scale: b("WebPixelRatio").get(),
                            query_substring: ""
                        }
                    }
                }
            }
        },
        root: b("JSResourceForInteraction")("CometFeedPreferencesUnfollowPage.react").__setRef("CometFeedPreferencesUnfollowPage.entrypoint")
    };
    e.exports = a
}
), null);
__d("CometFeedPreferencesDialogNoFavorite.entrypoint", ["CometFeedPreferencesFollowPage.entrypoint", "CometFeedPreferencesSeeFirstPage.entrypoint", "CometFeedPreferencesSnoozePage.entrypoint", "CometFeedPreferencesUnfollowPage.entrypoint", "JSResourceForInteraction", "CometFeedPreferencesDialogNoFavoriteQuery$Parameters"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = Object.freeze({});
    a = {
        getPreloadProps: function() {
            return {
                entryPoints: {
                    followPageEntryPoint: {
                        entryPoint: b("CometFeedPreferencesFollowPage.entrypoint"),
                        entryPointParams: g
                    },
                    seeFirstPageEntryPoint: {
                        entryPoint: b("CometFeedPreferencesSeeFirstPage.entrypoint"),
                        entryPointParams: g
                    },
                    snoozePageEntryPoint: {
                        entryPoint: b("CometFeedPreferencesSnoozePage.entrypoint"),
                        entryPointParams: g
                    },
                    unfollowPageEntryPoint: {
                        entryPoint: b("CometFeedPreferencesUnfollowPage.entrypoint"),
                        entryPointParams: g
                    }
                },
                queries: {
                    dialogQueryReference: {
                        parameters: b("CometFeedPreferencesDialogNoFavoriteQuery$Parameters"),
                        variables: {}
                    }
                }
            }
        },
        root: b("JSResourceForInteraction")("CometFeedPreferencesDialogNoFavorite.react").__setRef("CometFeedPreferencesDialogNoFavorite.entrypoint")
    };
    e.exports = a
}
), null);
__d("useCometFeedPreferencesDialog", ["CometFeedPreferencesDialogLoadingState.react", "React", "requireCond", "useCometEntryPointDialog", "cr:1212386"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React")
      , h = function(a) {
        return g.jsx(b("CometFeedPreferencesDialogLoadingState.react"), {
            onClose: a
        })
    }
      , i = !1;
    function a() {
        var a = b("useCometEntryPointDialog")(b("cr:1212386"), {}, "button", h)
          , c = a[0];
        a[1];
        a[2];
        a[3];
        a = a[4];
        var d = g.useCallback(function(a) {
            i || (c({}, function() {
                i = !1,
                a != null && a()
            }),
            i = !0)
        }, [c]);
        return [d, a]
    }
}
), null);
/**
 * License: https://www.facebook.com/legal/license/Smm9Lz-9Uuo/
 */
__d("Int64", [], (function(a, b, c, d, e, f) {
    Int64 = function(a, b) {
        this.low_ = a,
        this.high_ = b
    }
    ,
    Int64.IntCache_ = {},
    Int64.fromInt = function(a) {
        if (-128 <= a && a < 128) {
            var b = Int64.IntCache_[a];
            if (b)
                return b
        }
        b = new Int64(a | 0,a < 0 ? -1 : 0);
        -128 <= a && a < 128 && (Int64.IntCache_[a] = b);
        return b
    }
    ,
    Int64.fromNumber = function(a) {
        if (isNaN(a) || !isFinite(a))
            return Int64.ZERO;
        else if (a <= -Int64.TWO_PWR_63_DBL_)
            return Int64.MIN_VALUE;
        else if (a + 1 >= Int64.TWO_PWR_63_DBL_)
            return Int64.MAX_VALUE;
        else if (a < 0)
            return Int64.fromNumber(-a).negate();
        else
            return new Int64(a % Int64.TWO_PWR_32_DBL_ | 0,a / Int64.TWO_PWR_32_DBL_ | 0)
    }
    ,
    Int64.fromBits = function(a, b) {
        return new Int64(a,b)
    }
    ,
    Int64.fromString = function(a, b) {
        if (a.length == 0)
            throw Error("number format error: empty string");
        b = b || 10;
        if (b < 2 || 36 < b)
            throw Error("radix out of range: " + b);
        if (a.charAt(0) == "-")
            return Int64.fromString(a.substring(1), b).negate();
        else if (a.indexOf("-") >= 0)
            throw Error('number format error: interior "-" character: ' + a);
        var c = Int64.fromNumber(Math.pow(b, 8))
          , d = Int64.ZERO;
        for (var e = 0; e < a.length; e += 8) {
            var f = Math.min(8, a.length - e)
              , g = parseInt(a.substring(e, e + f), b);
            if (f < 8) {
                f = Int64.fromNumber(Math.pow(b, f));
                d = d.multiply(f).add(Int64.fromNumber(g))
            } else
                d = d.multiply(c),
                d = d.add(Int64.fromNumber(g))
        }
        return d
    }
    ,
    Int64.TWO_PWR_16_DBL_ = 1 << 16,
    Int64.TWO_PWR_24_DBL_ = 1 << 24,
    Int64.TWO_PWR_32_DBL_ = Int64.TWO_PWR_16_DBL_ * Int64.TWO_PWR_16_DBL_,
    Int64.TWO_PWR_31_DBL_ = Int64.TWO_PWR_32_DBL_ / 2,
    Int64.TWO_PWR_48_DBL_ = Int64.TWO_PWR_32_DBL_ * Int64.TWO_PWR_16_DBL_,
    Int64.TWO_PWR_64_DBL_ = Int64.TWO_PWR_32_DBL_ * Int64.TWO_PWR_32_DBL_,
    Int64.TWO_PWR_63_DBL_ = Int64.TWO_PWR_64_DBL_ / 2,
    Int64.ZERO = Int64.fromInt(0),
    Int64.ONE = Int64.fromInt(1),
    Int64.NEG_ONE = Int64.fromInt(-1),
    Int64.MAX_VALUE = Int64.fromBits(4294967295 | 0, 2147483647 | 0),
    Int64.MIN_VALUE = Int64.fromBits(0, 2147483648 | 0),
    Int64.TWO_PWR_24_ = Int64.fromInt(1 << 24),
    Int64.prototype.toInt = function() {
        return this.low_
    }
    ,
    Int64.prototype.toNumber = function() {
        return this.high_ * Int64.TWO_PWR_32_DBL_ + this.getLowBitsUnsigned()
    }
    ,
    Int64.prototype.toUnsignedBits = function() {
        var a = []
          , b = 31;
        for (var c = 32; c < 64; c++)
            a[c] = this.low_ >> b & 1,
            b -= 1;
        b = 31;
        for (var c = 0; c < 32; c++)
            a[c] = this.high_ >> b & 1,
            b -= 1;
        return a.join("")
    }
    ,
    Int64.prototype.toString = function(a) {
        a = a || 10;
        if (a < 2 || 36 < a)
            throw Error("radix out of range: " + a);
        if (this.isZero())
            return "0";
        if (this.isNegative())
            if (this.equals(Int64.MIN_VALUE)) {
                var b = Int64.fromNumber(a)
                  , c = this.div(b);
                b = c.multiply(b).subtract(this);
                return c.toString(a) + b.toInt().toString(a)
            } else
                return "-" + this.negate().toString(a);
        c = Int64.fromNumber(Math.pow(a, 6));
        b = this;
        var d = "";
        while (!0) {
            var e = b.div(c)
              , f = b.subtract(e.multiply(c)).toInt();
            f = f.toString(a);
            b = e;
            if (b.isZero())
                return f + d;
            else {
                while (f.length < 6)
                    f = "0" + f;
                d = "" + f + d
            }
        }
    }
    ,
    Int64.prototype.getHighBits = function() {
        return this.high_
    }
    ,
    Int64.prototype.getLowBits = function() {
        return this.low_
    }
    ,
    Int64.prototype.getLowBitsUnsigned = function() {
        return this.low_ >= 0 ? this.low_ : Int64.TWO_PWR_32_DBL_ + this.low_
    }
    ,
    Int64.prototype.getNumBitsAbs = function() {
        if (this.isNegative())
            if (this.equals(Int64.MIN_VALUE))
                return 64;
            else
                return this.negate().getNumBitsAbs();
        else {
            var a = this.high_ != 0 ? this.high_ : this.low_;
            for (var b = 31; b > 0; b--)
                if ((a & 1 << b) != 0)
                    break;
            return this.high_ != 0 ? b + 33 : b + 1
        }
    }
    ,
    Int64.prototype.isZero = function() {
        return this.high_ == 0 && this.low_ == 0
    }
    ,
    Int64.prototype.isNegative = function() {
        return this.high_ < 0
    }
    ,
    Int64.prototype.isOdd = function() {
        return (this.low_ & 1) == 1
    }
    ,
    Int64.prototype.equals = function(a) {
        return this.high_ == a.high_ && this.low_ == a.low_
    }
    ,
    Int64.prototype.notEquals = function(a) {
        return this.high_ != a.high_ || this.low_ != a.low_
    }
    ,
    Int64.prototype.lessThan = function(a) {
        return this.compare(a) < 0
    }
    ,
    Int64.prototype.lessThanOrEqual = function(a) {
        return this.compare(a) <= 0
    }
    ,
    Int64.prototype.greaterThan = function(a) {
        return this.compare(a) > 0
    }
    ,
    Int64.prototype.greaterThanOrEqual = function(a) {
        return this.compare(a) >= 0
    }
    ,
    Int64.prototype.compare = function(a) {
        if (this.equals(a))
            return 0;
        var b = this.isNegative()
          , c = a.isNegative();
        if (b && !c)
            return -1;
        if (!b && c)
            return 1;
        if (this.subtract(a).isNegative())
            return -1;
        else
            return 1
    }
    ,
    Int64.prototype.negate = function() {
        if (this.equals(Int64.MIN_VALUE))
            return Int64.MIN_VALUE;
        else
            return this.not().add(Int64.ONE)
    }
    ,
    Int64.prototype.add = function(a) {
        var b = this.high_ >>> 16
          , c = this.high_ & 65535
          , d = this.low_ >>> 16
          , e = this.low_ & 65535
          , f = a.high_ >>> 16
          , g = a.high_ & 65535
          , h = a.low_ >>> 16;
        a = a.low_ & 65535;
        var i = 0
          , j = 0
          , k = 0
          , l = 0;
        l += e + a;
        k += l >>> 16;
        l &= 65535;
        k += d + h;
        j += k >>> 16;
        k &= 65535;
        j += c + g;
        i += j >>> 16;
        j &= 65535;
        i += b + f;
        i &= 65535;
        return Int64.fromBits(k << 16 | l, i << 16 | j)
    }
    ,
    Int64.prototype.subtract = function(a) {
        return this.add(a.negate())
    }
    ,
    Int64.prototype.multiply = function(a) {
        if (this.isZero())
            return Int64.ZERO;
        else if (a.isZero())
            return Int64.ZERO;
        if (this.equals(Int64.MIN_VALUE))
            return a.isOdd() ? Int64.MIN_VALUE : Int64.ZERO;
        else if (a.equals(Int64.MIN_VALUE))
            return this.isOdd() ? Int64.MIN_VALUE : Int64.ZERO;
        if (this.isNegative())
            if (a.isNegative())
                return this.negate().multiply(a.negate());
            else
                return this.negate().multiply(a).negate();
        else if (a.isNegative())
            return this.multiply(a.negate()).negate();
        if (this.lessThan(Int64.TWO_PWR_24_) && a.lessThan(Int64.TWO_PWR_24_))
            return Int64.fromNumber(this.toNumber() * a.toNumber());
        var b = this.high_ >>> 16
          , c = this.high_ & 65535
          , d = this.low_ >>> 16
          , e = this.low_ & 65535
          , f = a.high_ >>> 16
          , g = a.high_ & 65535
          , h = a.low_ >>> 16;
        a = a.low_ & 65535;
        var i = 0
          , j = 0
          , k = 0
          , l = 0;
        l += e * a;
        k += l >>> 16;
        l &= 65535;
        k += d * a;
        j += k >>> 16;
        k &= 65535;
        k += e * h;
        j += k >>> 16;
        k &= 65535;
        j += c * a;
        i += j >>> 16;
        j &= 65535;
        j += d * h;
        i += j >>> 16;
        j &= 65535;
        j += e * g;
        i += j >>> 16;
        j &= 65535;
        i += b * a + c * h + d * g + e * f;
        i &= 65535;
        return Int64.fromBits(k << 16 | l, i << 16 | j)
    }
    ,
    Int64.prototype.div = function(a) {
        if (a.isZero())
            throw Error("division by zero");
        else if (this.isZero())
            return Int64.ZERO;
        if (this.equals(Int64.MIN_VALUE))
            if (a.equals(Int64.ONE) || a.equals(Int64.NEG_ONE))
                return Int64.MIN_VALUE;
            else if (a.equals(Int64.MIN_VALUE))
                return Int64.ONE;
            else {
                var b = this.shiftRight(1);
                b = b.div(a).shiftLeft(1);
                if (b.equals(Int64.ZERO))
                    return a.isNegative() ? Int64.ONE : Int64.NEG_ONE;
                else {
                    var c = this.subtract(a.multiply(b))
                      , d = b.add(c.div(a));
                    return d
                }
            }
        else if (a.equals(Int64.MIN_VALUE))
            return Int64.ZERO;
        if (this.isNegative())
            if (a.isNegative())
                return this.negate().div(a.negate());
            else
                return this.negate().div(a).negate();
        else if (a.isNegative())
            return this.div(a.negate()).negate();
        d = Int64.ZERO;
        var c = this;
        while (c.greaterThanOrEqual(a)) {
            b = Math.max(1, Math.floor(c.toNumber() / a.toNumber()));
            var e = Math.ceil(Math.log(b) / Math.LN2);
            e = e <= 48 ? 1 : Math.pow(2, e - 48);
            var f = Int64.fromNumber(b)
              , g = f.multiply(a);
            while (g.isNegative() || g.greaterThan(c))
                b -= e,
                f = Int64.fromNumber(b),
                g = f.multiply(a);
            f.isZero() && (f = Int64.ONE);
            d = d.add(f);
            c = c.subtract(g)
        }
        return d
    }
    ,
    Int64.prototype.modulo = function(a) {
        return this.subtract(this.div(a).multiply(a))
    }
    ,
    Int64.prototype.not = function() {
        return Int64.fromBits(~this.low_, ~this.high_)
    }
    ,
    Int64.prototype.and = function(a) {
        return Int64.fromBits(this.low_ & a.low_, this.high_ & a.high_)
    }
    ,
    Int64.prototype.or = function(a) {
        return Int64.fromBits(this.low_ | a.low_, this.high_ | a.high_)
    }
    ,
    Int64.prototype.xor = function(a) {
        return Int64.fromBits(this.low_ ^ a.low_, this.high_ ^ a.high_)
    }
    ,
    Int64.prototype.shiftLeft = function(a) {
        a &= 63;
        if (a == 0)
            return this;
        else {
            var b = this.low_;
            if (a < 32) {
                var c = this.high_;
                return Int64.fromBits(b << a, c << a | b >>> 32 - a)
            } else
                return Int64.fromBits(0, b << a - 32)
        }
    }
    ,
    Int64.prototype.shiftRight = function(a) {
        a &= 63;
        if (a == 0)
            return this;
        else {
            var b = this.high_;
            if (a < 32) {
                var c = this.low_;
                return Int64.fromBits(c >>> a | b << 32 - a, b >> a)
            } else
                return Int64.fromBits(b >> a - 32, b >= 0 ? 0 : -1)
        }
    }
    ,
    Int64.prototype.shiftRightUnsigned = function(a) {
        a &= 63;
        if (a == 0)
            return this;
        else {
            var b = this.high_;
            if (a < 32) {
                var c = this.low_;
                return Int64.fromBits(c >>> a | b << 32 - a, b >>> a)
            } else if (a == 32)
                return Int64.fromBits(b, 0);
            else
                return Int64.fromBits(b >>> a - 32, 0)
        }
    }
    ,
    e.exports = Int64
}
), null);
__d("XCometEventCreateControllerRouteBuilder", ["jsRouteBuilder"], (function(a, b, c, d, e, f) {
    a = b("jsRouteBuilder")("/events/create/", Object.freeze({
        default_is_online: !1,
        dialog_entry_point: "others"
    }), void 0);
    c = a;
    e.exports = c
}
), null);
__d("XCometLiveProducerControllerRouteBuilder", ["jsRouteBuilder"], (function(a, b, c, d, e, f) {
    a = b("jsRouteBuilder")("/live/producer/{?videoID}/", Object.freeze({
        is_rehearsal: !1
    }), void 0);
    c = a;
    e.exports = c
}
), null);
__d("XCometMarketplaceComposerControllerRouteBuilder", ["jsRouteBuilder"], (function(a, b, c, d, e, f) {
    a = b("jsRouteBuilder")("/marketplace/create/{listing_type}/", Object.freeze({
        shipping: !1
    }), void 0);
    c = a;
    e.exports = c
}
), null);
__d("ProfileCometLifeEventsComposerDialogQuery$Parameters", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        kind: "PreloadableConcreteRequest",
        params: {
            id: "3222835274431907",
            metadata: {
                relayPreloadable: !0
            },
            name: "ProfileCometLifeEventsComposerDialogQuery",
            operationKind: "query",
            text: null
        }
    };
    e.exports = a
}
), null);
__d("CometFileSelector.react", ["React", "recoverableViolation", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function h(a) {
        return a.map(function(a) {
            if (a.indexOf("/") !== -1 || a[0] === ".")
                return a;
            b("recoverableViolation")('Accept parameter "' + a + '" for CometFileSelector is being interpreted as a file extension since it has no slash (/), but file extensions must start with a period (.)', "profile_comet");
            return "." + a
        }).join(",")
    }
    function a(a) {
        var b = a.accept
          , c = a.children
          , d = a.multiple;
        d = d === void 0 ? !1 : d;
        var e = a.onFilesSelected
          , f = g.useRef(null);
        g.useEffect(function() {
            var a = f.current;
            if (a != null) {
                var b = function(a) {
                    a.stopPropagation()
                };
                a.addEventListener("click", b);
                return function() {
                    a.removeEventListener("click", b)
                }
            }
        });
        a = g.useCallback(function() {
            f.current != null && f.current.click()
        }, []);
        var i = g.useCallback(function(a) {
            e(a.currentTarget.files),
            a.currentTarget.value = ""
        }, [e]);
        return g.jsxs(g.Fragment, {
            children: [g.jsx("input", {
                accept: b != null ? h(b) : void 0,
                className: "mkhogb32",
                multiple: d,
                onChange: i,
                ref: f,
                type: "file"
            }), c(a)]
        })
    }
}
), null);
__d("fileInputAcceptValues", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = ["image/*", "image/heif", "image/heic"];
    f.PHOTO = a;
    b = ["video/*", "video/mp4", "video/x-m4v", "video/x-matroska", ".mkv"];
    f.VIDEO = b;
    c = a.concat(b);
    f.PHOTO_AND_VIDEO = c
}
), null);
__d("CometFeedInlineComposerSprout.react", ["CometImage.react", "CometPressable.react", "CometRefineRef", "React", "TetraText.react", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React"), i = {
        root: {
            alignItems: "bp9cbjyn",
            borderTopStartRadius: "ue3kfks5",
            borderTopEndRadius: "pw54ja7n",
            borderBottomEndRadius: "uo3d90p7",
            borderBottomStartRadius: "l82x9zwi",
            display: "j83agx80",
            flexBasis: "rj1gh0hx",
            flexGrow: "buofh1pr",
            flexShrink: "g5gj957u",
            justifyContent: "taijpn5t",
            minWidth: "idt9hxom",
            paddingTop: "cxgpxx05",
            paddingEnd: "dflh9lhu",
            paddingBottom: "sj5x9vvc",
            paddingStart: "scb9dxdr"
        },
        sprout: {
            alignItems: "bp9cbjyn",
            display: "j83agx80",
            justifyContent: "taijpn5t",
            lineHeight: "dfwzkoeu",
            overflowX: "ni8dbmo4",
            overflowY: "stjgntxs"
        },
        sproutIcon: {
            display: "pq6dq46d",
            flexGrow: "kb5gq1qc",
            flexShrink: "pfnyh3mw",
            marginEnd: "oi9244e8"
        }
    };
    function a(a) {
        var c = a.imageSrc
          , d = a.label
          , e = a.onHoverIn
          , f = a.onHoverOut
          , j = a.onPress
          , k = a.onPressIn
          , l = a.testid;
        l = a.triggerRef;
        return h.jsx(b("CometPressable.react"), {
            display: "block",
            onHoverIn: e,
            onHoverOut: f,
            onPress: j,
            onPressIn: k,
            ref: b("CometRefineRef")(l),
            testid: void 0,
            xstyle: i.root,
            children: h.jsxs("div", {
                className: (g || (g = b("stylex")))(i.sprout),
                children: [h.jsx("span", {
                    className: g(i.sproutIcon),
                    children: h.jsx(b("CometImage.react"), {
                        src: c
                    })
                }), h.jsx(b("TetraText.react"), {
                    color: "secondary",
                    numberOfLines: 1,
                    type: "bodyLink3",
                    children: d
                })]
            })
        })
    }
}
), null);
__d("ProfileCometLifeEventsComposerDialog.entrypoint", ["JSResourceForInteraction", "ProfileCometLifeEventsComposerDialogQuery$Parameters", "WebPixelRatio"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        getPreloadProps: function(a) {
            return {
                queries: {
                    queryReference: {
                        parameters: b("ProfileCometLifeEventsComposerDialogQuery$Parameters"),
                        variables: {
                            scale: b("WebPixelRatio").get()
                        }
                    }
                }
            }
        },
        root: b("JSResourceForInteraction")("ProfileCometLifeEventsComposerDialog.react").__setRef("ProfileCometLifeEventsComposerDialog.entrypoint")
    };
    e.exports = a
}
), null);
__d("ProfileCometLifeEventComposerDialogLoadingState.react", ["fbt", "CometCardedDialogLoadingState.react", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a() {
        return h.jsx(b("CometCardedDialogLoadingState.react"), {
            title: g._("T\u1ea1o s\u1ef1 ki\u1ec7n trong \u0111\u1eddi")
        })
    }
}
), null);
__d("useLifeEventsComposerDialog", ["ProfileCometLifeEventComposerDialogLoadingState.react", "ProfileCometLifeEventsComposerDialog.entrypoint", "React", "useCometEntryPointDialog"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = b("useCometEntryPointDialog")(b("ProfileCometLifeEventsComposerDialog.entrypoint"), {}, "button", function() {
            return g.jsx(b("ProfileCometLifeEventComposerDialogLoadingState.react"), {})
        })
          , d = c[0]
          , e = c[1]
          , f = c[2]
          , h = c[3];
        c = c[4];
        return [g.useCallback(function() {
            d({
                surface: a
            })
        }, [d, a]), e, f, h, c]
    }
}
), null);
__d("focusKeyboardEventPropagation", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.hasFocusKeyboardEventPropagationStopped = a;
    f.stopFocusKeyboardEventPropagation = b;
    function a(a) {
        return a._stopFocusKeyboardPropagation === !0
    }
    function b(a) {
        a._stopFocusKeyboardPropagation = !0
    }
}
), null);
__d("FocusGroup.react", ["FocusManager.react", "Locale", "React", "ReactKeyboardEvent.react", "focusKeyboardEventPropagation", "react", "setElementCanTab"], (function(a, b, c, d, e, f) {
    f.createFocusGroup = a;
    var g, h = b("React"), i = g || (g = b("react")), j = 5;
    function k(a) {
        return a.length === 1
    }
    function l(a, c, d, e) {
        b("focusKeyboardEventPropagation").stopFocusKeyboardEventPropagation(d);
        c = c.DO_NOT_USE_queryFirstNode(a);
        c !== null && (b("setElementCanTab")(c, !0),
        b("FocusManager.react").focusElement(c, e),
        d.preventDefault())
    }
    function m(a, b, c, d, e, f) {
        b = b.onNavigate;
        if (b && d) {
            var g = !1
              , h = n(d, e);
            e = {
                currentIndex: h,
                event: c,
                focusItem: function(a, b) {
                    a = a.scopeRef.current;
                    a && l(b || f, a, c)
                },
                getItem: function(a) {
                    return r(d, a)
                },
                getItemByTag: function(a) {
                    var b = d.length
                      , c = h + 1;
                    while (!0) {
                        if (c === h)
                            return null;
                        if (c > b - 1) {
                            c = 0;
                            continue
                        }
                        var e = d[c];
                        if (e) {
                            var f = e.disabled
                              , g = e.scopeRef
                              , i = e.tag;
                            g = g.current;
                            if (g && f !== !0 && i === a)
                                return e
                        }
                        c++
                    }
                    return null
                },
                preventDefault: function() {
                    g = !0
                },
                type: a
            };
            b(e);
            if (g)
                return !0
        }
        return !1
    }
    function n(a, b) {
        for (var c = 0; c < a.length; c++) {
            var d = a[c];
            if (d && d.scopeRef.current === b)
                return c
        }
        return -1
    }
    function o(a, b, c) {
        var d = a.scopeRef.current;
        if (d === null)
            return null;
        if (c !== null) {
            d = n(c, b);
            b = a.wrap;
            a = s(c, d - 1);
            return !a && b === !0 ? s(c, c.length - 1) : a
        }
        return null
    }
    function p(a, b, c) {
        var d = a.scopeRef.current;
        if (d === null)
            return null;
        if (c.length > 0) {
            d = n(c, b);
            b = a.wrap;
            a = q(c, d + 1);
            return !a && b === !0 ? q(c, 0) : a
        }
        return null
    }
    function q(a, b) {
        var c = a.length;
        if (b > c)
            return null;
        b = b;
        while (b < c) {
            var d = a[b];
            if (d !== null && d.disabled !== !0)
                return d.scopeRef.current;
            b++
        }
        return null
    }
    function r(a, b) {
        b = b;
        while (b >= 0) {
            var c = a[b];
            if (c !== null && c.disabled !== !0)
                return c;
            b--
        }
        return null
    }
    function s(a, b) {
        a = r(a, b);
        return a ? a.scopeRef.current : null
    }
    function t(a) {
        var b = a.altKey
          , c = a.ctrlKey
          , d = a.metaKey;
        a = a.shiftKey;
        return b === !0 || c === !0 || d === !0 || a === !0
    }
    function a(a) {
        var c = i.unstable_Scope
          , d = i.createContext(null)
          , e = i.createContext(null);
        function f(a) {
            var b = a.children
              , e = a.orientation
              , f = a.wrap
              , g = a.tabScopeQuery
              , k = a.allowModifiers
              , l = a.preventScrollOnFocus
              , m = l === void 0 ? !1 : l;
            l = a.pageJumpSize;
            var n = l === void 0 ? j : l
              , o = a.onNavigate
              , p = h.useRef(null);
            l = h.useMemo(function() {
                return {
                    scopeRef: p,
                    orientation: e,
                    wrap: f,
                    tabScopeQuery: g,
                    allowModifiers: k,
                    pageJumpSize: n,
                    preventScrollOnFocus: m,
                    onNavigate: o
                }
            }, [e, f, g, k, n, m, o]);
            return i.jsx(d.Provider, {
                value: l,
                children: i.jsx(c, {
                    ref: p,
                    children: b
                })
            })
        }
        function g(f) {
            var g = f.children
              , j = f.disabled;
            f = f.tag;
            var r = h.useRef(null)
              , u = h.useContext(d);
            b("ReactKeyboardEvent.react").useKeyboard(r, h.useMemo(function() {
                return {
                    onKeyDown: function(c) {
                        if (b("focusKeyboardEventPropagation").hasFocusKeyboardEventPropagationStopped(c))
                            return;
                        var d = r.current;
                        if (d !== null && u !== null) {
                            var f = u.orientation === "vertical" || u.orientation === "both"
                              , g = u.orientation === "horizontal" || u.orientation === "both"
                              , h = u.scopeRef.current
                              , i = c.key
                              , j = u.preventScrollOnFocus;
                            if (i === "Tab" && h !== null) {
                                var v = u.tabScopeQuery;
                                if (v) {
                                    if (u.onNavigate) {
                                        var w = h.getChildContextValues(e);
                                        if (m("TAB", u, c, w, d, v))
                                            return
                                    }
                                    w = document.activeElement;
                                    v = h.DO_NOT_USE_queryAllNodes(v);
                                    if (v !== null)
                                        for (var x = 0; x < v.length; x++) {
                                            var y = v[x];
                                            y !== w ? b("setElementCanTab")(y, !1) : b("setElementCanTab")(y, !0)
                                        }
                                }
                                return
                            }
                            if (t(c)) {
                                y = u.allowModifiers;
                                if (y !== !0)
                                    return
                            }
                            if (h === null)
                                return;
                            w = i;
                            b("Locale").isRTL() && (i === "ArrowRight" ? w = "ArrowLeft" : i === "ArrowLeft" && (w = "ArrowRight"));
                            switch (w) {
                            case "Home":
                                x = h.getChildContextValues(e);
                                if (m("HOME", u, c, x, d, a))
                                    return;
                                v = q(x, 0);
                                if (v) {
                                    l(a, v, c, j);
                                    return
                                }
                                break;
                            case "End":
                                y = h.getChildContextValues(e);
                                if (m("END", u, c, y, d, a))
                                    return;
                                w = s(y, y.length - 1);
                                if (w) {
                                    l(a, w, c, j);
                                    return
                                }
                                break;
                            case "PageUp":
                                x = h.getChildContextValues(e);
                                if (m("PAGE_UP", u, c, x, d, a))
                                    return;
                                v = u.pageJumpSize;
                                y = n(x, d);
                                w = q(x, Math.max(0, y - v));
                                if (w) {
                                    l(a, w, c, j);
                                    return
                                }
                                break;
                            case "PageDown":
                                x = h.getChildContextValues(e);
                                if (m("PAGE_DOWN", u, c, x, d, a))
                                    return;
                                y = u.pageJumpSize;
                                v = n(x, d);
                                w = s(x, Math.min(x.length - 1, v + y));
                                if (w) {
                                    l(a, w, c, j);
                                    return
                                }
                                break;
                            case "ArrowUp":
                                if (f) {
                                    x = h.getChildContextValues(e);
                                    if (m("PREV_ITEM", u, c, x, d, a))
                                        return;
                                    v = c.metaKey || c.ctrlKey ? q(x, 0) : o(u, d, x);
                                    if (v) {
                                        l(a, v, c, j);
                                        return
                                    }
                                }
                                break;
                            case "ArrowDown":
                                if (f) {
                                    y = h.getChildContextValues(e);
                                    if (m("NEXT_ITEM", u, c, y, d, a))
                                        return;
                                    w = c.metaKey || c.ctrlKey ? s(y, y.length - 1) : p(u, d, y);
                                    if (w) {
                                        l(a, w, c, j);
                                        return
                                    }
                                }
                                break;
                            case "ArrowLeft":
                                if (g) {
                                    x = h.getChildContextValues(e);
                                    if (m("PREV_ITEM", u, c, x, d, a))
                                        return;
                                    v = c.metaKey || c.ctrlKey ? q(x, 0) : o(u, d, x);
                                    if (v) {
                                        l(a, v, c, j);
                                        return
                                    }
                                }
                                break;
                            case "ArrowRight":
                                if (g) {
                                    f = h.getChildContextValues(e);
                                    if (m("NEXT_ITEM", u, c, f, d, a))
                                        return;
                                    y = c.metaKey || c.ctrlKey ? s(f, f.length - 1) : p(u, d, f);
                                    y && l(a, y, c, j)
                                }
                                break;
                            default:
                                if (k(i) && u.onNavigate) {
                                    w = h.getChildContextValues(e);
                                    m("PRINT_CHAR", u, c, w, d, a)
                                }
                            }
                        }
                    }
                }
            }, [u]));
            j = {
                scopeRef: r,
                disabled: j,
                tag: f
            };
            return i.jsx(e.Provider, {
                value: j,
                children: i.jsx(c, {
                    ref: r,
                    children: g
                })
            })
        }
        return [f, g]
    }
}
), null);
__d("CometLegalFooterMoreMenu.react", ["fbt", "CometMenu.react", "CometMenuItem.react", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a(a) {
        return h.jsxs(b("CometMenu.react"), {
            withArrow: !0,
            children: [h.jsx(a = b("CometMenuItem.react"), {
                href: "https://www.facebook.com/about/",
                primaryText: g._("Gi\u1edbi thi\u1ec7u")
            }), h.jsx(a, {
                href: "https://www.facebook.com/careers/?ref=pf",
                primaryText: g._("Ngh\u1ec1 nghi\u1ec7p")
            }), h.jsx(a, {
                href: "https://developers.facebook.com/?ref=pf",
                primaryText: g._("Nh\u00e0 ph\u00e1t tri\u1ec3n")
            }), h.jsx(a, {
                href: "https://www.facebook.com/help/?ref=pf",
                primaryText: g._("Tr\u1ee3 gi\u00fap")
            })]
        })
    }
}
), null);
__d("CometMenuItemSelectable.react", ["ix", "CometMenuItemBase.react", "CometMenuItemIcon.react", "CometToggle.react", "React", "TetraIcon.react", "fbicon", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function i(a, c) {
        return !a ? null : c ? h.jsx(b("TetraIcon.react"), {
            color: "highlight",
            icon: b("fbicon")._(g("498146"), 20)
        }) : h.jsx(b("TetraIcon.react"), {
            color: "secondary",
            icon: b("fbicon")._(g("477820"), 20)
        })
    }
    function a(a, c) {
        a.aux;
        var d = a.icon
          , e = a.iconColor
          , f = a.iconStyle
          , g = a.isSelected
          , j = babelHelpers.objectWithoutPropertiesLoose(a, ["aux", "icon", "iconColor", "iconStyle", "isSelected"]);
        if (d)
            return h.jsx(b("CometMenuItemBase.react"), babelHelpers["extends"]({}, j, {
                "aria-checked": g,
                aux: a.aux != null ? a.aux(g) : i(g, !0),
                iconNode: h.jsx(b("CometMenuItemIcon.react"), {
                    icon: d,
                    iconColor: e,
                    use: f
                }),
                ref: c
            }));
        else {
            d = a.aux != null ? a.aux(g) : i(g, !1);
            return h.jsx(b("CometMenuItemBase.react"), babelHelpers["extends"]({}, j, {
                "aria-checked": g,
                aux: d ? h.jsx("div", {
                    className: "irj2b8pg ew0dbk1b",
                    children: d
                }) : void 0,
                ref: c
            }))
        }
    }
    c = h.forwardRef(a);
    e.exports = c
}
), null);
__d("CometTabMenu.react", ["CometMenu.react", "CometMenuItemSelectable.react", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        a = a.menuItems;
        return g.jsx(b("CometMenu.react"), {
            children: a.map(function(a, c) {
                var d = a.badge
                  , e = a.disabled
                  , f = a.icon
                  , h = a.label
                  , i = a.linkProps
                  , j = a.onHoverIn
                  , k = a.onHoverOut
                  , l = a.onPress
                  , m = a.onPressIn;
                a = a.selected;
                return g.jsx(b("CometMenuItemSelectable.react"), {
                    badge: d,
                    disabled: e,
                    href: (d = i == null ? void 0 : i.url) != null ? d : void 0,
                    icon: f,
                    isSelected: (e = a) != null ? e : !1,
                    onClick: l,
                    onHoverIn: j,
                    onHoverOut: k,
                    onPressIn: m,
                    primaryText: h,
                    role: "menuitemradio",
                    routeTarget: i == null ? void 0 : i.routeTarget,
                    target: i == null ? void 0 : i.target,
                    testid: void 0
                }, c)
            })
        })
    }
}
), null);
__d("CometFeedUnitLoadingIndicatorMask.react", ["CometProgressIndicator.react", "React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a() {
        return g.jsx("div", {
            className: "tkr6xdv7 kr520xx4 j9ispegn pmk7jnqg taijpn5t cbu4d94t n7fi1qx3 j83agx80 i09qtzwb ms7hmo2b bp9cbjyn",
            children: g.jsx(b("CometProgressIndicator.react"), {})
        })
    }
}
), null);
__d("QpActionFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744247");
    c = b("FalcoLoggerInternal").create("qp_action", a);
    e.exports = c
}
), null);
__d("QpImpressionFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744249");
    c = b("FalcoLoggerInternal").create("qp_impression", a);
    e.exports = c
}
), null);
__d("WebFunnelLogger", ["invariant", "Banzai"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a) {
            this.$2 = {},
            this.$3 = {},
            this.$4 = "web_funnel_logging",
            this.$5(),
            this.$1.funnel_definition = a
        }
        var c = a.prototype;
        c.log = function() {
            this.$1.funnel_payload = JSON.stringify(this.$2),
            this.$1.action_payload = JSON.stringify(this.$3),
            b("Banzai").post(this.$4, this.$1, b("Banzai").BASIC),
            this.$5()
        }
        ;
        c.logWithEventTime = function(a) {
            this.$1.event_time = a / 1e3,
            this.$6(),
            b("Banzai").post(this.$4, this.$1, b("Banzai").BASIC),
            this.$5()
        }
        ;
        c.logVital = function() {
            this.$6(),
            b("Banzai").post(this.$4, this.$1, b("Banzai").VITAL),
            this.$5()
        }
        ;
        c.logVitalWithEventTime = function(a) {
            this.$1.event_time = a / 1e3,
            this.$6(),
            b("Banzai").post(this.$4, this.$1, b("Banzai").VITAL),
            this.$5()
        }
        ;
        c.$6 = function() {
            this.$1.funnel_payload = JSON.stringify(this.$2),
            this.$1.action_payload = JSON.stringify(this.$3),
            this.$1.action !== null || g(0, 5829),
            this.$1.session_key !== null || g(0, 5830)
        }
        ;
        c.$5 = function() {
            this.$1 = {};
            this.$2 = {};
            this.$3 = {};
            return this
        }
        ;
        c.setAction = function(a) {
            this.$1.action = a;
            return this
        }
        ;
        c.addActionPayload = function(a, b) {
            this.$3[a] = b;
            return this
        }
        ;
        c.setActionTag = function(a) {
            this.$1.action_tag = a;
            return this
        }
        ;
        c.addFunnelPayload = function(a, b) {
            this.$2[a] = b;
            return this
        }
        ;
        c.setFunnelTags = function(a) {
            this.$1.funnel_tags = a;
            return this
        }
        ;
        c.setSecondaryOrder = function(a) {
            this.$1.secondary_order_value = a;
            return this
        }
        ;
        c.setSessionKey = function(a) {
            this.$1.session_key = a;
            return this
        }
        ;
        c.markStart = function() {
            this.$1.session_marker = "start";
            return this
        }
        ;
        c.markEnd = function() {
            this.$1.session_marker = "end";
            return this
        }
        ;
        c.setUserId = function(a) {
            this.$1.user_id = a;
            return this
        }
        ;
        c.setIsEmployee = function(a) {
            this.$1.is_employee = a;
            return this
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("RoomsSelfLobbyMessageTypeEnum", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        DEFAULT: "default",
        GROUP_MESSAGE_ALL_INVITEES: "group_message_all_invitees",
        INDIVIDUALLY_MESSAGE_INVITEES: "individually_message_invitees"
    };
    b = a;
    e.exports = b
}
), null);
__d("RoomsPrivacyJoinPermissionEnum", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        ALL_FRIENDS: "ALL_FRIENDS",
        ANYONE_WHO_CAN_LOAD_THE_LINK: "ANYONE_WHO_CAN_LOAD_THE_LINK",
        INVITED_FRIENDS: "INVITED_FRIENDS"
    };
    b = a;
    e.exports = b
}
), null);
__d("RoomsGating", ["RoomsPrivacyJoinPermissionEnum", "RoomsSelfLobbyMessageTypeEnum", "gkx", "qex"], (function(a, b, c, d, e, f) {
    "use strict";
    f.isInterestedOnSocialNormsEnabled = a;
    f.isNewInviteFlowEnabled = c;
    f.shouldIncreaseAwareness = d;
    f.isSocialNormsTemplateEnable = e;
    f.isMultipleRoomsEnabled = g;
    f.shouldUseNewMultipleRoomsStrings = h;
    f.getSayHiCardType = i;
    f.shouldShowGradientOnRoomsWithParticipants = j;
    f.shouldUseJoinRoomsString = k;
    f.shouldRemoveMessenger = l;
    f.getCreationVariant = m;
    f.isInitiallyVisibleToAllFriends = n;
    f.shouldJoinOnCreate = o;
    f.enableVisibilityToggleOnCreationFlow = p;
    f.getInitialJoinPermission = q;
    f.shouldShowCameraSproutEntryPoint = r;
    f.shouldShowHeaderInCollapsedTray = s;
    f.shouldShowHeaderInExpandedTray = t;
    f.shouldExpandedTrayWhenClickSayHi = u;
    f.shouldShowMessagingInLobby = v;
    f.getSelfLobbyMessageType = w;
    function a() {
        var a;
        return (a = b("gkx")("1499376")) != null ? a : !1
    }
    function c() {
        var a;
        return (a = b("qex")._("1477275")) != null ? a : !1
    }
    function d() {
        var a;
        return (a = b("gkx")("1674709")) != null ? a : !1
    }
    function e() {
        var a;
        return (a = b("gkx")("1585752")) != null ? a : !1
    }
    function g() {
        var a;
        return (a = b("qex")._("1624805")) != null ? a : !1
    }
    function h() {
        var a;
        return (a = b("qex")._("1760068")) != null ? a : !1
    }
    function i() {
        var a;
        return (a = b("qex")._("1738253")) != null ? a : "default"
    }
    function j() {
        var a;
        return (a = b("qex")._("1637280")) != null ? a : !1
    }
    function k() {
        var a;
        return (a = b("gkx")("1653766")) != null ? a : !1
    }
    function l() {
        var a;
        a = (a = b("qex")._("1738253")) != null ? a : "default";
        return a === "normal_card_only_remove_msg_for_no_active_room" || a === "normal_card_video_chat" ? !0 : !1
    }
    function m() {
        var a = b("qex")._("1683236");
        switch (a) {
        case "people_first":
            return "people_first";
        case "template":
            return "template";
        case "post_creation_invite":
            return "post_creation_invite";
        default:
            return "default"
        }
    }
    function n() {
        var a;
        return (a = b("qex")._("1696828")) != null ? a : !1
    }
    function o() {
        var a;
        return (a = b("qex")._("1719634")) != null ? a : !1
    }
    function p() {
        var a;
        return (a = b("qex")._("1696880")) != null ? a : !1
    }
    function q() {
        var a = b("qex")._("1708036");
        switch (a) {
        case "invited_friends":
            return b("RoomsPrivacyJoinPermissionEnum").INVITED_FRIENDS;
        case "all_friends":
            return b("RoomsPrivacyJoinPermissionEnum").ALL_FRIENDS;
        case "anyone_who_can_load_the_link":
            return b("RoomsPrivacyJoinPermissionEnum").ANYONE_WHO_CAN_LOAD_THE_LINK;
        default:
            return b("RoomsPrivacyJoinPermissionEnum").INVITED_FRIENDS
        }
    }
    function r() {
        var a;
        return (a = b("qex")._("1705543")) != null ? a : !1
    }
    function s() {
        var a;
        return (a = b("qex")._("1744668")) != null ? a : !1
    }
    function t() {
        var a;
        return (a = b("qex")._("1750634")) != null ? a : !1
    }
    function u() {
        var a;
        return (a = b("qex")._("1755643")) != null ? a : !1
    }
    function v() {
        var a;
        return (a = b("qex")._("1721774")) != null ? a : !1
    }
    function w() {
        var a = b("qex")._("1721775");
        switch (a) {
        case b("RoomsSelfLobbyMessageTypeEnum").GROUP_MESSAGE_ALL_INVITEES:
            return b("RoomsSelfLobbyMessageTypeEnum").GROUP_MESSAGE_ALL_INVITEES;
        case b("RoomsSelfLobbyMessageTypeEnum").INDIVIDUALLY_MESSAGE_INVITEES:
            return b("RoomsSelfLobbyMessageTypeEnum").INDIVIDUALLY_MESSAGE_INVITEES;
        default:
            return b("RoomsSelfLobbyMessageTypeEnum").DEFAULT
        }
    }
}
), null);
__d("MWMSPreloadThreadForGroup.bs", ["bs_curry", "React", "ifRequired", "CurrentUser", "killswitch", "MWChatThreadId.bs"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a) {
        return g.useCallback(function(a) {
            if (b("killswitch")("MESSENGER_WEB_STOP_PRELOADING_CONVERSATIONS"))
                return 0;
            else {
                b("ifRequired")("MessengerState.bs", function(c) {
                    var d = b("MWChatThreadId.bs").getMercuryID([757211935, a]);
                    b("bs_curry")._4(c.getThreadMeta, b("CurrentUser").getID(), d, function(a) {
                        return 0
                    }, null);
                    b("bs_curry")._7(c.fetchMoreMessages, b("CurrentUser").getID(), d, 0, 10, function(a) {
                        return 0
                    }, null, "mercury");
                    return 0
                }, function(a) {
                    return 0
                });
                return 0
            }
        }, [])
    }
    f.usePreloaderForGroup = a
}
), null);
__d("MWChatOpenTabForGroup.bs", ["bs_block", "React", "BanzaiODS", "MercuryIDs", "MWChatInteraction.bs", "MWChatStateThread.bs", "MessengerWebEvent", "MWChatTabEntryPoints.bs", "MWChatMultitabContext.bs", "MWChatMultitabDispatcher.bs", "MWChatOpenFantaTabForCoB", "MWMSPreloadThreadForGroup.bs", "useMWChatOpenTabTraceProvider", "MessengerWebStgTypedLoggerLite.bs", "useCometFeedNoRoutingNavigationEventLogger"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a, c) {
        var d = a !== void 0 ? a : !1
          , e = g.useContext(b("MWChatMultitabContext.bs").context)
          , f = b("MWChatOpenFantaTabForCoB").useHook()
          , h = b("useMWChatOpenTabTraceProvider")()
          , i = b("useCometFeedNoRoutingNavigationEventLogger")();
        a = b("MWMSPreloadThreadForGroup.bs").usePreloaderForGroup(0);
        var j = g.useCallback(function(a) {
            i(Date.now(), "", "messenger");
            b("BanzaiODS").bumpEntityKey(3185, "mwchat_tab", "open_group");
            b("MWChatTabEntryPoints.bs").tabEntryPoints[a] = c;
            b("MessengerWebStgTypedLoggerLite.bs").log({
                entry_point: c,
                event_name: b("MessengerWebEvent").OPEN_CHAT_TAB,
                other_user_fbid: null,
                thread_fbid: a
            });
            return h(function(c) {
                b("MWChatInteraction.bs").set(b("MWChatStateThread.bs").toString([[757211935, a]]), c);
                if (e !== void 0)
                    return b("MWChatMultitabDispatcher.bs").dispatch(void 0, e, b("bs_block").__(1, [[757211935, a], {
                        preventAutofocus: d
                    }]));
                else
                    return f(b("MercuryIDs").getThreadIDFromThreadFBID(a))
            }, "group", c)
        }, [c, e, i, h, f, d]);
        return [j, a]
    }
    f.useHook = a
}
), null);
__d("MWChatOpenTabForGroup.re", ["bs_curry", "MWChatOpenTabForGroup.bs"], (function(a, b, c, d, e, f) {
    a = function(a, c) {
        a = b("bs_curry")._2(b("MWChatOpenTabForGroup.bs").useHook, a.preventAutofocus, c);
        return a
    }
    ;
    f.useHook = a
}
), null);
__d("useMWChatOpenTabForGroup", ["MWChatOpenTabForGroup.re"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c) {
        return b("MWChatOpenTabForGroup.re").useHook(c != null ? {
            preventAutofocus: c.preventAutofocus_DO_NOT_USE
        } : {}, a)
    }
}
), null);
__d("CometWatchAndScrollCloseButton.react", ["ix", "fbt", "CometPressable.react", "CometSetWatchAndScrollVideoContext", "React", "TetraIcon.react", "fbicon", "qex", "stylex", "useVideoPlayerDefaultControlsVisibility"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i = b("React")
      , j = !!b("qex")._("1766142");
    function a() {
        var a = i.useContext(b("CometSetWatchAndScrollVideoContext"))
          , c = b("useVideoPlayerDefaultControlsVisibility")()
          , d = c.isControlsVisible
          , e = c.onUserInteraction;
        return i.jsx("i", {
            className: "tkr6xdv7 ntk8zc1u pmk7jnqg agsi23a0" + (d ? "" : " kr9hpln1 b5wmifdl"),
            children: i.jsx(b("CometPressable.react"), {
                display: "inline",
                label: h._("\u0110\u00f3ng ch\u1ebf \u0111\u1ed9 Xem v\u00e0 cu\u1ed9n"),
                onPress: function() {
                    a(null),
                    e({
                        name: "exit_watch_and_scroll_video",
                        type: "happened"
                    })
                },
                overlayDisabled: !0,
                children: i.jsx(b("TetraIcon.react"), {
                    color: j ? "primary" : "white",
                    icon: b("fbicon")._(g("478233"), 20)
                })
            })
        })
    }
}
), null);
__d("isMimeTypeForMedia", ["UFICommentFileInputAcceptValues"], (function(a, b, c, d, e, f) {
    "use strict";
    f.isMimeTypeForPhoto = a;
    f.isMimeTypeForVideo = c;
    var g = b("UFICommentFileInputAcceptValues").photos, h = b("UFICommentFileInputAcceptValues").videos, i = {
        "image/gif": "video"
    }, j, k;
    function l(a) {
        return a.split(",").map(function(a) {
            return a.trim()
        }).map(function(a) {
            return a.replace(/\/\*$/, "/")
        })
    }
    function a(a) {
        k == null && (k = l(g));
        var b = i[a];
        return b != null ? b === "photo" : k.some(function(b) {
            return a.startsWith(b)
        })
    }
    function c(a) {
        j == null && (j = l(h));
        var b = i[a];
        return b != null ? b === "video" : j.some(function(b) {
            return a.startsWith(b)
        })
    }
}
), null);
