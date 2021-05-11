if (self.CavalryLogger) {
    CavalryLogger.start_js(["Pycgn"]);
}

__d("CometDensityAwarenessContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = !1;
    d = a.createContext(c);
    e.exports = d
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
__d("TetraUnitHeader.react", ["CometBase.react", "CometColumn.react", "CometColumnItem.react", "CometPressable.react", "IconSource", "React", "TetraIcon.react", "TetraText.react", "TetraTextPairing.react", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React"), i = 8, j = {
        action: {
            backgroundColor: "b0kwm4yp",
            borderTop: "gcieejh5",
            borderEnd: "bn081pho",
            borderBottom: "humdl8nn",
            borderStart: "izx4hr6d",
            borderTopStartRadius: "jk6sbkaj",
            borderTopEndRadius: "kdgqqoy6",
            borderBottomEndRadius: "ihh4hy1g",
            borderBottomStartRadius: "qttc61fc",
            display: "q9uorilb",
            marginTop: "kvgmc6g5",
            marginEnd: "cxmmr5t8",
            marginBottom: "oygrvhab",
            marginStart: "hcukyx3x",
            paddingTop: "jb3vyjys",
            paddingEnd: "rz4wbd8a",
            paddingBottom: "qt6c0cv9",
            paddingStart: "a8nywdso",
            position: "l9j0dhe7",
            verticalAlign: "pzggbiyp"
        },
        actionButton: {
            color: "py34i1dx",
            cursor: "nhd2j8a9",
            textDecoration: "owjl8umy"
        },
        actionHidden: {
            opacity: "b5wmifdl"
        },
        hairline: {
            backgroundColor: "pwoa4pd7",
            height: "ay7djpcl",
            marginBottom: "mkjtxrlb"
        },
        root: {
            paddingBottom: "e5nlhep0"
        },
        showActionOnHover: {
            visibility: "kr9hpln1",
            "@media (pointer: coarse)": {
                visibility: "jbb2w91c"
            }
        }
    }, k = {
        8: {
            paddingTop: "cxgpxx05"
        },
        12: {
            paddingTop: "pybr56ya"
        },
        16: {
            paddingTop: "discj3wi"
        },
        20: {
            paddingTop: "aodizinl"
        }
    };
    function a(a) {
        var c = a.action
          , d = a.actionAccessibilityLabel
          , e = a.actionDisabled;
        e = e === void 0 ? !1 : e;
        var f = a.actionHidden;
        f = f === void 0 ? !1 : f;
        var l = a.actionLinkProps
          , m = a.actionRef
          , n = a.actiontestid
          , o = a.actionWrapper
          , p = a.addOn_DEPRECATED
          , q = a.body
          , r = a.bodyColor;
        r = r === void 0 ? "secondary" : r;
        var s = a.disabled
          , t = a.hasTopDivider;
        t = t === void 0 ? !1 : t;
        var u = a.headline
          , v = a.headlineColor;
        v = v === void 0 ? "primary" : v;
        var w = a.iconColor;
        w = w === void 0 ? "primary" : w;
        var x = a.level
          , y = a.linkProps
          , z = a.meta
          , A = a.metaColor;
        A = A === void 0 ? "secondary" : A;
        var B = a.metaLocation
          , C = a.onActionHoverIn
          , D = a.onActionHoverOut
          , E = a.onActionPress
          , F = a.onActionPressIn
          , G = a.onActionPressOut
          , H = a.onPress
          , I = a.onPressIn
          , J = a.onPressOut
          , K = a.paddingHorizontal;
        K = K === void 0 ? 16 : K;
        var L = a.paddingTop;
        L = L === void 0 ? 20 : L;
        var M = a.showActionOnHover;
        M = M === void 0 ? !1 : M;
        var N = a.testOnly_actionPressed
          , O = a.testOnly_pressed;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["action", "actionAccessibilityLabel", "actionDisabled", "actionHidden", "actionLinkProps", "actionRef", "actiontestid", "actionWrapper", "addOn_DEPRECATED", "body", "bodyColor", "disabled", "hasTopDivider", "headline", "headlineColor", "iconColor", "level", "linkProps", "meta", "metaColor", "metaLocation", "onActionHoverIn", "onActionHoverOut", "onActionPress", "onActionPressIn", "onActionPressOut", "onPress", "onPressIn", "onPressOut", "paddingHorizontal", "paddingTop", "showActionOnHover", "testOnly_actionPressed", "testOnly_pressed"]);
        var P = h.useState(!1)
          , Q = P[0];
        P = P[1];
        var R;
        if (c != null) {
            l = {
                "aria-label": d,
                disabled: e,
                linkProps: l,
                onHoverIn: C,
                onHoverOut: D,
                onPress: E,
                onPressIn: F,
                onPressOut: G,
                testOnly_pressed: (d = N) != null ? d : !1,
                testid: n
            };
            c instanceof b("IconSource") ? R = h.jsx(b("TetraIcon.react"), babelHelpers["extends"]({}, l, {
                color: w,
                icon: c,
                ref: m
            })) : R = h.jsx(b("CometPressable.react"), babelHelpers["extends"]({}, l, {
                className_DEPRECATED: "actionChildElement",
                onFocusVisibleChange: P,
                overlayOffset: i,
                overlayRadius: 4,
                ref: m,
                xstyle: [j.actionButton, j.action, f && !Q && j.actionHidden, M && j.showActionOnHover],
                children: h.jsx(b("TetraText.react"), {
                    color: e ? "disabled" : "highlight",
                    numberOfLines: 1,
                    type: x === 2 ? "body2" : "body3",
                    children: c
                })
            }))
        } else
            p != null && (R = h.jsx("div", {
                className: (g || (g = b("stylex")))(j.action),
                children: p
            }));
        if (o != null) {
            C = o.component;
            R = h.jsx(C, babelHelpers["extends"]({}, o.props, {
                children: R
            }))
        }
        E = h.jsx(b("TetraTextPairing.react"), {
            body: q,
            bodyColor: r,
            bodyLineLimit: 3,
            headline: u,
            headlineAddOn: R,
            headlineColor: v,
            headlineLineLimit: 2,
            isSemanticHeading: !0,
            level: x,
            meta: z,
            metaColor: A,
            metaLineLimit: 1,
            metaLocation: (D = B) != null ? D : "below"
        });
        G = h.jsx(b("CometColumn.react"), babelHelpers["extends"]({}, a, {
            paddingHorizontal: t ? 0 : K,
            xstyle: [j.root, k[L]],
            children: h.jsx(b("CometColumnItem.react"), {
                children: H != null ? h.jsx(b("CometPressable.react"), {
                    disabled: s,
                    linkProps: y,
                    onPress: H,
                    onPressIn: I,
                    onPressOut: J,
                    overlayDisabled: !0,
                    ref: m,
                    testOnly_pressed: (F = O) != null ? F : !1,
                    children: E
                }) : E
            })
        }));
        return t ? h.jsxs(b("CometColumn.react"), {
            paddingHorizontal: K,
            children: [h.jsx(b("CometColumnItem.react"), {
                children: h.jsx(b("CometBase.react"), {
                    xstyle: j.hairline
                })
            }), G]
        }) : G
    }
}
), null);
