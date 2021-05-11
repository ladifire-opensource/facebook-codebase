if (self.CavalryLogger) {
    CavalryLogger.start_js(["+0gXQ"]);
}

__d("GeoFlexbox.react", ["React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React"), i = {
        center: {
            alignContent: "a5qkma2g"
        },
        end: {
            alignContent: "s2hdiczs"
        },
        start: {
            alignContent: "i4ogsgoh"
        },
        "space-around": {
            alignContent: "m27kc5ad"
        },
        "space-between": {
            alignContent: "c7mqjpb4"
        },
        stretch: {
            alignContent: "eoe0msth"
        }
    }, j = {
        baseline: {
            alignItems: "b0462v97"
        },
        center: {
            alignItems: "dfy4e4am"
        },
        end: {
            alignItems: "lr5h00f3"
        },
        start: {
            alignItems: "hmx0cwvu"
        },
        stretch: {
            alignItems: "ct5fwkgv"
        }
    }, k = {
        baseline: {
            alignSelf: "jjqvzab5"
        },
        center: {
            alignSelf: "pz2dhob4"
        },
        end: {
            alignSelf: "pacxm3jg"
        },
        start: {
            alignSelf: "hy390ul1"
        },
        stretch: {
            alignSelf: "o60p3xx1"
        }
    }, l = {
        flex: {
            display: "rwb8dzxj"
        },
        "inline-flex": {
            display: "if5qj5rh"
        }
    }, m = {
        0: {
            flexBasis: "do6na4z3"
        },
        auto: {
            flexBasis: "har4n1i8"
        },
        content: {
            flexBasis: "i8mt3hwg"
        }
    }, n = {
        "column-reverse": {
            flexDirection: "rnwxn2hn"
        },
        column: {
            flexDirection: "hv94jbsx"
        },
        "row-reverse": {
            flexDirection: "r0x0icrw"
        },
        row: {
            flexDirection: "diwav8v6"
        }
    }, o = {
        0: {
            flexGrow: "hkvtgs2m"
        },
        1: {
            flexGrow: "yukb02kx"
        },
        2: {
            flexGrow: "s1r6pl27"
        },
        3: {
            flexGrow: "tnhl3ijr"
        },
        4: {
            flexGrow: "f658181g"
        }
    }, p = {
        0: {
            flexShrink: "nlmdo9b9"
        },
        1: {
            flexShrink: "duy2mlcu"
        },
        2: {
            flexShrink: "im4daniy"
        },
        3: {
            flexShrink: "k9uogxhh"
        },
        4: {
            flexShrink: "css1s2sz"
        }
    }, q = {
        nowrap: {
            flexWrap: "apktr6ye"
        },
        wrap: {
            flexWrap: "hts34b0n"
        },
        "wrap-reverse": {
            flexWrap: "jb1jpa2a"
        }
    }, r = {
        start: {
            justifyContent: "mf7q30on"
        },
        end: {
            justifyContent: "anpo5nbh"
        },
        center: {
            justifyContent: "olu7ajlf"
        },
        "space-between": {
            justifyContent: "tnsgtkb9"
        },
        "space-around": {
            justifyContent: "bq0zymvv"
        },
        "space-evenly": {
            justifyContent: "d7fluali"
        }
    }, s = {
        0: {
            order: "nc6m26yz"
        },
        1: {
            order: "k7edamzs"
        },
        2: {
            order: "t2o1w2n7"
        },
        3: {
            order: "rv0b4g7i"
        },
        4: {
            order: "m4vnp20j"
        },
        5: {
            order: "kcbodnvu"
        }
    }, t = {
        resetMinWidthAndHeight: {
            minWidth: "a53abz89",
            minHeight: "rgsc13q7"
        }
    };
    function a(a, c) {
        var d = a.alignContent
          , e = a.alignItems
          , f = a.alignSelf
          , u = a.children
          , v = a["data-testid"];
        v = a.display;
        v = v === void 0 ? "flex" : v;
        var w = a.element;
        w = w === void 0 ? "div" : w;
        var x = a.basis
          , y = a.direction
          , z = a.grow
          , A = a.shrink
          , B = a.wrap
          , C = a.justifyContent
          , D = a.order
          , E = a.style;
        a = a.xstyle;
        a = (g || (g = b("stylex")))([t.resetMinWidthAndHeight, a, d != null && i[d], e != null && j[e], f != null && k[f], v != null && l[v], x != null && m[x], y != null && n[y], z != null && o[z], A != null && p[A], B != null && q[B], C != null && r[C], D != null && s[D]]);
        return h.jsx(w, {
            className: a,
            "data-testid": void 0,
            ref: c,
            style: E,
            children: u
        })
    }
    c = h.forwardRef(a);
    e.exports = c
}
), null);
__d("PagesManagerInboxListHeaderBizWebMessageAdsUpsellNUX.react", ["ix", "fbt", "FlexLayout.react", "GeoButton.react", "GeoCard.react", "GeoCloseButton.react", "GeoFlexbox.react", "GeoIcon.react", "GeoTextPairing.react", "LWICometButtonActionContext", "PagesManagerInboxNUX", "PagesManagerInboxNUXAction", "PagesManagerInboxStore", "React", "fbicon", "geoMargin", "stylex"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i, j = b("React");
    (i || (i = b("stylex"))).inject(".q46jt4gp{padding-top:8px}", 1);
    i.inject(".b0eko5f3{padding-right:8px}", 1, ".b0eko5f3{padding-left:8px}");
    i.inject(".ez8dtbzv{padding-bottom:16px}", 1);
    i.inject(".gt60zsk1{padding-left:16px}", 1, ".gt60zsk1{padding-right:16px}");
    i.inject(".jww9hmy2{background-color:#1877F2}", 1);
    i.inject(".n1tycefo{border-top-left-radius:16px}", 1, ".n1tycefo{border-top-right-radius:16px}");
    i.inject(".hjca6b3d{border-top-right-radius:16px}", 1, ".hjca6b3d{border-top-left-radius:16px}");
    i.inject(".pujv42rp{border-bottom-right-radius:16px}", 1, ".pujv42rp{border-bottom-left-radius:16px}");
    i.inject(".nnnzfr32{border-bottom-left-radius:16px}", 1, ".nnnzfr32{border-bottom-right-radius:16px}");
    i.inject(".bdao358l{box-sizing:border-box}", 1);
    i.inject(".alzwoclg{display:flex}", 1);
    i.inject(".c7y9u1f0{flex-grow:0}", 1);
    i.inject(".jez8cy9q{flex-shrink:0}", 1);
    i.inject(".h7q9eq3y{height:32px}", 1);
    i.inject(".iryl7rsq{width:32px}", 1);
    i.inject(".brz92cos{margin-right:16px}", 1);
    i.inject(".d2hqwtrz{padding-top:4px}", 1);
    i.inject(".fzd7ma4j{padding-right:4px}", 1, ".fzd7ma4j{padding-left:4px}");
    i.inject(".o9wcebwi{padding-bottom:4px}", 1);
    i.inject(".lcfup58g{padding-left:4px}", 1, ".lcfup58g{padding-right:4px}");
    i.inject(".q46jt4gp{padding-top:8px}", 1);
    i.inject(".b0eko5f3{padding-right:8px}", 1, ".b0eko5f3{padding-left:8px}");
    i.inject(".r5g9zsuq{padding-bottom:8px}", 1);
    i.inject(".fwlpnqze{padding-left:8px}", 1, ".fwlpnqze{padding-right:8px}");
    var k = "bizweb_inbox_message_ads_upsell";
    function a(a) {
        var c = a.pageID;
        a = b("PagesManagerInboxStore").shouldShowNUX(k);
        var d = b("PagesManagerInboxNUX")[k];
        a = j.useState(a);
        var e = a[0]
          , f = a[1];
        a = j.useContext(b("LWICometButtonActionContext"));
        a = a.getOpenDialogWithTargetID;
        if (a == null)
            return null;
        var i = a("bizweb_inbox_upsell_banner");
        a = function() {
            b("PagesManagerInboxNUXAction").dismiss(d),
            f(!1)
        }
        ;
        var l = function() {
            i(c, "boosted_cta", "")
        };
        return e ? j.jsx("div", {
            className: "fwlpnqze r5g9zsuq b0eko5f3 q46jt4gp",
            children: j.jsx(b("GeoCard.react"), {
                children: j.jsx("div", {
                    className: "gt60zsk1 ez8dtbzv b0eko5f3 q46jt4gp",
                    children: j.jsxs(b("GeoFlexbox.react"), {
                        direction: "column",
                        children: [j.jsx(b("GeoFlexbox.react"), {
                            alignSelf: "end",
                            children: j.jsx(b("GeoCloseButton.react"), {
                                onClick: a
                            })
                        }), j.jsxs(b("GeoFlexbox.react"), {
                            direction: "row",
                            xstyle: [b("geoMargin").end8, b("geoMargin").bottom12],
                            children: [j.jsx(b("FlexLayout.react"), {
                                align: "center",
                                className: "lcfup58g o9wcebwi fzd7ma4j d2hqwtrz brz92cos iryl7rsq h7q9eq3y jez8cy9q c7y9u1f0 alzwoclg bdao358l nnnzfr32 pujv42rp hjca6b3d n1tycefo jww9hmy2",
                                justify: "center",
                                children: j.jsx(b("GeoIcon.react"), {
                                    color: "inverted",
                                    icon: b("fbicon")._(g("542882"), 16)
                                })
                            }), j.jsx(b("GeoTextPairing.react"), {
                                description: h._("Khi t\u1ea1o qu\u1ea3ng c\u00e1o, b\u1ea1n s\u1ebd thu h\u00fat \u0111\u01b0\u1ee3c nhi\u1ec1u b\u00ecnh lu\u1eadn v\u00e0 tin nh\u1eafn h\u01a1n."),
                                heading: h._("T\u0103ng s\u1ed1 tin nh\u1eafn"),
                                size: "header2"
                            })]
                        }), j.jsx(b("GeoFlexbox.react"), {
                            grow: 1,
                            xstyle: b("geoMargin").end8,
                            children: j.jsx(b("GeoButton.react"), {
                                grow: "fill",
                                label: h._("T\u1ea1o qu\u1ea3ng c\u00e1o"),
                                onClick: l
                            })
                        })]
                    })
                })
            })
        }) : null
    }
}
), null);
