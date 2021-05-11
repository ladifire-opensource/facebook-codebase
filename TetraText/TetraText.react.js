__d("TetraText.react", [
    "BaseHeading.react", 
    "CometDensityModeContext", 
    "React", 
    "TetraLineClamp.react", 
    "TetraTextContext", 
    "TetraTextTypography", 
    "gkx", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React"), i = b("gkx")("1435443"), j = {
        base: {
            maxWidth: "d2edcug0",
            minWidth: "hpfvmrgz",
            wordBreak: "qv66sw1b",
            wordWrap: "c1et5uql"
        },
        block: {
            display: "a8c37x1j",
            "::before": {
                content: "keod5gw0",
                display: "nxhoafnm",
                height: "aigsh9s9"
            },
            "::after": {
                content: "fe6kdd0r",
                display: "mau55g9w",
                height: "c8b282yb"
            }
        },
        fixFontForChrome81: {
            fontFamily: "sx4j0amd"
        },
        heading: {
            maxWidth: "d2edcug0",
            minWidth: "hpfvmrgz"
        }
    }, k = {
        center: {
            textAlign: "oqcyycmt"
        },
        end: {
            textAlign: "ftzlm3b6"
        },
        start: {
            textAlign: "hzawbc8m"
        }
    }, l = {
        blueLink: {
            color: "py34i1dx"
        },
        disabled: {
            color: "erlsw9ld"
        },
        highlight: {
            color: "q66pz984"
        },
        negative: {
            color: "jdix4yx3"
        },
        placeholder: {
            color: "pipptul6"
        },
        positive: {
            color: "g5o1ygfq"
        },
        primary: {
            color: "oo9gr5id"
        },
        primaryButton: {
            color: "bwm1u5wc"
        },
        secondary: {
            color: "m9osqain"
        },
        secondaryOnMedia: {
            color: "av1wybal"
        },
        tertiary: {
            color: "pipptul6"
        },
        white: {
            color: "ljqsnud1"
        }
    }, m = {
        12: {
            fontSize: "sq6gx45u",
            lineHeight: "a3bd9o3v"
        },
        13: {
            fontSize: "e9vueds3",
            lineHeight: "j5wam9gi"
        },
        15: {
            fontSize: "jq4qci2q",
            lineHeight: "a3bd9o3v"
        },
        17: {
            fontSize: "a5q79mjw",
            lineHeight: "g1cxx5fr"
        },
        20: {
            fontSize: "o3w64lxj",
            lineHeight: "b2s5l15y"
        },
        24: {
            fontSize: "o0t2es00",
            lineHeight: "f530mmz5"
        },
        28: {
            fontSize: "m6dqt4wy",
            lineHeight: "h7mekvxk"
        },
        32: {
            fontSize: "mhxlubs3",
            lineHeight: "p5u9llcw"
        }
    }, n = {
        12: {
            fontSize: "sq6gx45u",
            lineHeight: "a3bd9o3v"
        },
        13: {
            fontSize: "sq6gx45u",
            lineHeight: "j5wam9gi"
        },
        15: {
            fontSize: "gfeo3gy3",
            lineHeight: "a3bd9o3v"
        },
        17: {
            fontSize: "jagab5yi",
            lineHeight: "g1cxx5fr"
        },
        20: {
            fontSize: "o3w64lxj",
            lineHeight: "b2s5l15y"
        },
        24: {
            fontSize: "o0t2es00",
            lineHeight: "f530mmz5"
        },
        28: {
            fontSize: "m6dqt4wy",
            lineHeight: "h7mekvxk"
        },
        32: {
            fontSize: "mhxlubs3",
            lineHeight: "p5u9llcw"
        }
    }, o = {
        bold: {
            fontWeight: "hnhda86s"
        },
        medium: {
            fontWeight: "ekzkrbhg"
        },
        normal: {
            fontWeight: "knj5qynh"
        },
        semibold: {
            fontWeight: "lrazzd5p"
        }
    }, p = {
        1: {
            "::before": {
                marginTop: "l2xehx30"
            }
        },
        2: {
            "::before": {
                marginTop: "j0e77wai"
            }
        },
        3: {
            "::before": {
                marginTop: "tia6h79c"
            }
        },
        4: {
            "::before": {
                marginTop: "d9wwppkn"
            }
        },
        5: {
            "::before": {
                marginTop: "d3f4x2em"
            }
        },
        6: {
            "::before": {
                marginTop: "ns63r2gh"
            }
        },
        7: {
            "::before": {
                marginTop: "qg6bub1s"
            }
        },
        8: {
            "::before": {
                marginTop: "embtmqzv"
            }
        },
        9: {
            "::before": {
                marginTop: "misohx42"
            }
        },
        10: {
            "::before": {
                marginTop: "l1jc4y16"
            }
        }
    }, q = {
        1: {
            "::after": {
                marginBottom: "lpavh2a4"
            }
        },
        2: {
            "::after": {
                marginBottom: "l15sfdvx"
            }
        },
        3: {
            "::after": {
                marginBottom: "mdeji52x"
            }
        },
        4: {
            "::after": {
                marginBottom: "iv3no6db"
            }
        },
        5: {
            "::after": {
                marginBottom: "hrzyx87i"
            }
        },
        6: {
            "::after": {
                marginBottom: "rwim8176"
            }
        },
        7: {
            "::after": {
                marginBottom: "h6olsfn3"
            }
        },
        8: {
            "::after": {
                marginBottom: "teo7jy3c"
            }
        },
        9: {
            "::after": {
                marginBottom: "lpmm8iu7"
            }
        },
        10: {
            "::after": {
                marginBottom: "c9ps7pxp"
            }
        }
    }, r = {
        1: {
            paddingBottom: "ojkyduve"
        },
        2: {
            paddingBottom: "r8blr3vg"
        },
        3: {
            paddingBottom: "pby63qed"
        }
    };
    function a(a, c) {
        var d = a.align;
        d = d === void 0 ? "auto" : d;
        var e = a.color
          , f = a.id
          , s = a.isSemanticHeading;
        s = s === void 0 ? !1 : s;
        var t = a.numberOfLines
          , u = a.testid
          , v = a.type;
        u = babelHelpers.objectWithoutPropertiesLoose(a, ["align", "color", "id", "isSemanticHeading", "numberOfLines", "testid", "type"]);
        a = h.useContext(b("TetraTextContext"));
        var w = h.useContext(b("CometDensityModeContext"));
        w = w[0];
        var x = b("TetraTextTypography")[v]
          , y = x.defaultColor;
        y = y === void 0 ? "primary" : y;
        var z = x.fontFamily
          , A = x.fontSize
          , B = x.fontWeight;
        B = B === void 0 ? "normal" : B;
        x = x.offsets;
        x = x === void 0 ? [0, 0] : x;
        var C = x.length === 3 ? x[2] : 0
          , D = e === "white" && (v === "button1" || v === "button2") ? "primaryButton" : (e = e) != null ? e : y;
        e = h.useMemo(function() {
            return {
                color: D,
                type: v
            }
        }, [D, v]);
        y = a !== null;
        a = h.jsx(b("TetraTextContext").Provider, {
            value: e,
            children: h.jsx("span", {
                className: (g || (g = b("stylex")))(j.base, z, i && A >= 20 && B !== "normal" && j.fixFontForChrome81, !y && j.block, !y && p[x[0]], !y && q[t != null ? x[1] + C : x[1]], w ? n[A] : m[A], o[B], l[D], d !== "auto" && k[d]),
                "data-testid": void 0,
                dir: y ? void 0 : "auto",
                id: f,
                ref: c,
                children: t != null ? h.jsx(b("TetraLineClamp.react"), {
                    lines: t,
                    xstyle: C !== 0 && r[C],
                    children: u.children
                }) : u.children
            })
        });
        return s ? h.jsx(b("BaseHeading.react"), {
            xstyle: j.heading,
            children: a
        }) : a
    }
    c = h.forwardRef(a);
    c.displayName = "TetraText";
    d = c;
    e.exports = d
}
), null);