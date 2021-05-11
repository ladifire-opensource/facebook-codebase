__d("TetraButton.react", ["BaseRow.react", 
    "BaseRowItem.react", 
    "CometPressable.react", 
    "CometTheme.react", "CometTooltip.react", "React", 
    "TetraIcon.react", "TetraText.react", "gkx", "mergeRefs", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = .96
      , i = 10
      , j = {
        button: {
            borderTop: "gcieejh5",
            borderEnd: "bn081pho",
            borderBottom: "humdl8nn",
            borderStart: "izx4hr6d",
            borderTopStartRadius: "beltcj47",
            borderTopEndRadius: "p86d2i9g",
            borderBottomEndRadius: "aot14ch1",
            borderBottomStartRadius: "kzx2olss",
            boxSizing: "rq0escxv",
            display: "j83agx80",
            flexDirection: "cbu4d94t",
            justifyContent: "taijpn5t",
            overflowX: "ni8dbmo4",
            overflowY: "stjgntxs",
            paddingEnd: "d1544ag0",
            paddingStart: "tw6a2znq",
            position: "l9j0dhe7",
            width: "k4urcfbm"
        },
        content: {
            marginEnd: "c4xchbtz",
            marginStart: "by2jbhx6"
        },
        contentDisabled: {
            opacity: "akz8cqyu"
        },
        disabled: {
            backgroundColor: "c98fg2ug"
        },
        fdsOverrideBlack: {
            backgroundColor: "tqsryivl"
        },
        fdsOverrideCollaborativePostCTA: {
            backgroundColor: "q2y6ezfg",
            mixBlendMode: "br5bkhab"
        },
        fdsOverrideCrisis: {
            backgroundColor: "g9oj0nva"
        },
        fdsOverrideNegative: {
            backgroundColor: "l44iypv3"
        },
        fdsOverridePositive: {
            backgroundColor: "jllm4f4h"
        },
        item: {
            display: "j83agx80",
            marginEnd: "j5wkysh0",
            marginStart: "hytbnt81"
        },
        overlay: {
            backgroundColor: "q2y6ezfg"
        },
        overlayDeemphasized: {
            backgroundColor: "ha302278"
        },
        overlayDeemphasizedOverlayPressed: {
            backgroundColor: "d8lclj6v"
        },
        overlayDisabled: {
            backgroundColor: "gx53z0jk"
        },
        overlayOverlayPressed: {
            backgroundColor: "ayatsz66"
        },
        paddingIconOnly: {
            paddingEnd: "hv4rvrfc",
            paddingStart: "dati1w0a"
        },
        paddingWide: {
            paddingEnd: "tkv8g59h",
            paddingStart: "fl8dtwsd"
        },
        primary: {
            backgroundColor: "s1i5eluu"
        },
        primaryDeemphasized: {
            backgroundColor: "oo1teu6h"
        },
        primaryDeemphasizedOverlayPressed: {
            backgroundColor: "l4sirx1s"
        },
        primaryExperiment: {
            backgroundColor: "synb87wq"
        },
        primaryOverlayPressed: {
            backgroundColor: "ik0dy8ru"
        },
        secondary: {
            backgroundColor: "tdjehn4e"
        },
        secondaryDeemphasized: {
            backgroundColor: "g5ia77u1"
        },
        secondaryDeemphasizedOverlayPressed: {
            backgroundColor: "l4sirx1s"
        },
        secondaryOverlayPressed: {
            backgroundColor: "cohv6imn"
        },
        sizeLarge: {
            height: "qypqp5cg"
        },
        sizeMedium: {
            height: "tv7at329"
        }
    }
      , k = {
        iconColor: "white",
        overlayPressedStyle: j.primaryOverlayPressed,
        textColor: "white",
        ":deemphasized": {
            iconColor: "highlight",
            overlayPressedStyle: j.primaryDeemphasizedOverlayPressed,
            textColor: "highlight"
        },
        ":disabled": {
            iconColor: "disabled",
            textColor: "disabled"
        }
    }
      , l = {
        iconColor: "primary",
        overlayPressedStyle: j.secondaryOverlayPressed,
        textColor: "primary",
        ":deemphasized": {
            iconColor: "highlight",
            overlayPressedStyle: j.secondaryDeemphasizedOverlayPressed,
            textColor: "highlight"
        },
        ":disabled": {
            iconColor: "disabled",
            textColor: "disabled"
        }
    }
      , m = {
        iconColor: "primary",
        overlayPressedStyle: j.overlayOverlayPressed,
        textColor: "primary",
        ":deemphasized": {
            iconColor: "white",
            overlayPressedStyle: j.overlayDeemphasizedOverlayPressed,
            textColor: "white"
        },
        ":disabled": {
            iconColor: "disabled",
            textColor: "disabled"
        }
    };
    function n(a) {
        switch (a) {
        case "fdsOverride_collaborativePostCTA":
        case "secondary":
            return l;
        case "overlay":
            return m;
        case "primary":
        default:
            return k
        }
    }
    function o(a, b) {
        var c = b.disabled;
        b = b.reduceEmphasis;
        a = n(a);
        return (c ? a[":disabled"] : null) || (b ? a[":deemphasized"] : null) || a
    }
    function a(a, c) {
        var d = a.addOnPrimary
          , e = a.addOnSecondary
          , f = a.disabled
          , k = f === void 0 ? !1 : f
          , l = a.icon
          , m = a.label;
        f = a.labelIsHidden;
        var n = f === void 0 ? !1 : f;
        f = a.linkProps;
        var p = a.onFocusIn
          , q = a.onFocusOut
          , r = a.onHoverIn
          , s = a.onHoverOut
          , t = a.onPress
          , u = a.onPressIn
          , v = a.onPressOut
          , w = a.padding
          , x = w === void 0 ? "normal" : w;
        w = a.reduceEmphasis;
        var y = w === void 0 ? !1 : w;
        w = a.size;
        var z = w === void 0 ? "medium" : w;
        w = a.testid;
        w = a.testOnly_pressed;
        w = w === void 0 ? !1 : w;
        var A = a.tooltip
          , B = a.type
          , C = B === void 0 ? "primary" : B;
        B = babelHelpers.objectWithoutPropertiesLoose(a, ["addOnPrimary", "addOnSecondary", "disabled", "icon", "label", "labelIsHidden", "linkProps", "onFocusIn", "onFocusOut", "onHoverIn", "onHoverOut", "onPress", "onPressIn", "onPressOut", "padding", "reduceEmphasis", "size", "testid", "testOnly_pressed", "tooltip", "type"]);
        a = o(C, {
            disabled: k,
            reduceEmphasis: y
        });
        var D = a.iconColor
          , E = a.overlayPressedStyle
          , F = a.textColor
          , G = g.useRef(null);
        a = function(a) {
            if (G.current != null) {
                var b = G.current;
                b.style.transform = "scale(" + Math.max(h, (b.offsetWidth - i) / b.offsetWidth) + ")"
            }
            typeof u === "function" && u(a)
        }
        ;
        var H = function(a) {
            if (G.current != null) {
                var b = G.current;
                b.style.transform = "none"
            }
            typeof v === "function" && v(a)
        }
          , I = function(a) {
            return g.jsxs(b("BaseRow.react"), {
                align: "center",
                verticalAlign: "center",
                xstyle: [j.content, C === "overlay" && k && j.contentDisabled, a],
                children: [d != null ? g.jsx(b("BaseRowItem.react"), {
                    useDeprecatedStyles: !0,
                    xstyle: j.item,
                    children: d
                }) : l != null ? g.jsx(b("BaseRowItem.react"), {
                    useDeprecatedStyles: !0,
                    xstyle: j.item,
                    children: g.jsx(b("TetraIcon.react"), {
                        color: D,
                        icon: l,
                        size: 16
                    })
                }) : null, n ? null : g.jsx(b("BaseRowItem.react"), {
                    useDeprecatedStyles: !0,
                    xstyle: j.item,
                    children: g.jsx(b("TetraText.react"), {
                        color: F,
                        numberOfLines: 1,
                        type: z === "large" ? "button1" : "button2",
                        children: m
                    })
                }), e != null ? g.jsx(b("BaseRowItem.react"), {
                    useDeprecatedStyles: !0,
                    xstyle: j.item,
                    children: e
                }) : null]
            })
        };
        B = g.jsx(b("CometPressable.react"), babelHelpers["extends"]({}, B, {
            disabled: k,
            display: "inline",
            label: m,
            linkProps: f,
            onFocusIn: p,
            onFocusOut: q,
            onHoverIn: r,
            onHoverOut: s,
            onPress: t,
            onPressIn: a,
            onPressOut: H,
            overlayPressedStyle: E,
            ref: b("mergeRefs")(G, c),
            testOnly_pressed: w,
            testid: void 0,
            xstyle: function() {
                return [j.button, b("gkx")("1738831") ? C === "primary" && j.primaryExperiment : C === "primary" && j.primary, C === "primary" && y && j.primaryDeemphasized, C === "secondary" && j.secondary, C === "secondary" && y && j.secondaryDeemphasized, C === "fdsOverride_black" && j.fdsOverrideBlack, C === "fdsOverride_negative" && j.fdsOverrideNegative, C === "fdsOverride_crisis" && j.fdsOverrideCrisis, C === "fdsOverride_positive" && j.fdsOverridePositive, C === "fdsOverride_collaborativePostCTA" && j.fdsOverrideCollaborativePostCTA, C === "overlay" && j.overlay, C === "overlay" && y && j.overlayDeemphasized, l != null && n && j.paddingIconOnly, x === "wide" && j.paddingWide, z === "medium" && j.sizeMedium, z === "large" && j.sizeLarge, k && j.disabled, C === "overlay" && k && j.overlayDisabled]
            },
            children: C === "overlay" ? g.jsx(b("CometTheme.react"), {
                theme: "light",
                children: I
            }) : I()
        }));
        return A != null ? g.jsx(b("CometTooltip.react"), {
            position: "above",
            tooltip: A,
            children: B
        }) : B
    }
    c = g.forwardRef(a);
    e.exports = c
}
), null);