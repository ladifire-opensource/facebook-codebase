__d("CometMenuItemBase.react", ["BaseFocusRing.react", 
    "CometMenuContext", "CometMenuFocusGroup", 
    "CometMenuItemBaseRoleContext", 
    "CometMenuItemHighlightContext", "CometNonBreakingSpace.react", "CometPressable.react", 
    "CometPressableOverlay.react", "CometTextWithIcon.react", 
    "React", "TetraText.react", "TetraTextPairing.react", "mergeRefs", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React"), i = {
        aux: {
            marginStart: "ozuftl9m"
        },
        content: {
            alignItems: "bp9cbjyn",
            display: "j83agx80",
            flexDirection: "btwxx1t3",
            flexGrow: "buofh1pr",
            justifyContent: "i1fnvgqd",
            minWidth: "hpfvmrgz"
        },
        disabled: {
            cursor: "rj84mg9z"
        },
        listItem: {
            alignItems: "bp9cbjyn",
            appearance: "dwo3fsh8",
            boxSizing: "rq0escxv",
            cursor: "nhd2j8a9",
            display: "j83agx80",
            flexDirection: "btwxx1t3",
            flexShrink: "pfnyh3mw",
            marginTop: "kvgmc6g5",
            marginEnd: "oi9244e8",
            marginBottom: "oygrvhab",
            marginStart: "h676nmdw",
            paddingTop: "pybr56ya",
            paddingEnd: "dflh9lhu",
            paddingBottom: "f10w8fjw",
            paddingStart: "scb9dxdr",
            position: "l9j0dhe7",
            textAlign: "i1ao9s8h",
            zIndex: "du4w35lb"
        },
        listItemAlignedCenter: {
            alignItems: "bp9cbjyn"
        },
        listItemWithIcon: {
            paddingTop: "cxgpxx05",
            paddingEnd: "dflh9lhu",
            paddingBottom: "sj5x9vvc",
            paddingStart: "scb9dxdr"
        }
    };
    function a(a, c) {
        var d = a.alignCenter;
        d = d === void 0 ? !1 : d;
        var e = a.aux
          , f = a.badge
          , j = a.bodyColor
          , k = a.bodyText
          , l = a.disabled
          , m = l === void 0 ? !1 : l;
        l = a.download;
        var n = a.href
          , o = a.iconNode
          , p = a.id
          , q = a.onClick
          , r = a.onHoverIn
          , s = a.onHoverOut
          , t = a.onPressIn
          , u = a.passthroughProps
          , v = a.preventClosingMenuOnSelect;
        v = v === void 0 ? !1 : v;
        var w = a.preventLocalNavigation
          , x = a.primaryColor
          , y = a.primaryText
          , z = a.role
          , A = a.routeTarget
          , B = a.secondaryColor
          , C = a.secondaryText
          , D = a.target
          , E = a.testid;
        E = a.visuallyFocused;
        var F = E === void 0 ? !1 : E;
        E = babelHelpers.objectWithoutPropertiesLoose(a, ["alignCenter", "aux", "badge", "bodyColor", "bodyText", "disabled", "download", "href", "iconNode", "id", "onClick", "onHoverIn", "onHoverOut", "onPressIn", "passthroughProps", "preventClosingMenuOnSelect", "preventLocalNavigation", "primaryColor", "primaryText", "role", "routeTarget", "secondaryColor", "secondaryText", "target", "testid", "visuallyFocused"]);
        var G = h.useRef(null);
        a = h.useContext(b("CometMenuContext"));
        var H = v !== !0 && a ? a.onClose : null;
        v = n != null || A != null || D != null ? {
            download: l,
            passthroughProps: u,
            preventLocalNavigation: w,
            routeTarget: A,
            target: D,
            url: n
        } : void 0;
        a = h.useCallback(function(a) {
            H != null && H(),
            q && q(a)
        }, [q, H]);
        l = h.useContext(b("CometMenuItemBaseRoleContext"));
        A = (w = (u = z) != null ? u : l) != null ? w : void 0;
        var I = h.useRef(F);
        h.useEffect(function() {
            var a = G.current;
            !I.current && F && a != null && a.scrollIntoView({
                block: "nearest"
            })
        }, [F]);
        D = h.useMemo(function() {
            return b("mergeRefs")(c, G)
        }, [c]);
        var J = f != null ? typeof f === "number" ? h.jsxs(h.Fragment, {
            children: [y, h.jsx(b("CometNonBreakingSpace.react"), {
                size: .5
            }), h.jsx(b("TetraText.react"), {
                color: m ? "disabled" : x,
                type: "body4",
                children: f
            })]
        }) : h.jsx(b("CometTextWithIcon.react"), {
            iconAfter: f,
            children: y
        }) : y;
        return h.jsx(b("CometMenuFocusGroup").FocusItem, {
            children: h.jsx(b("CometPressable.react"), babelHelpers["extends"]({}, E, {
                disabled: m,
                display: "inline",
                id: p,
                linkProps: v,
                onHoverIn: r,
                onHoverOut: s,
                onPress: a,
                onPressIn: t,
                overlayDisabled: !0,
                ref: D,
                role: A,
                testid: void 0,
                xstyle: [i.listItem, d && i.listItemAlignedCenter, o != null && i.listItemWithIcon, m && i.disabled, F && b("BaseFocusRing.react").focusRingXStyle],
                children: function(a) {
                    var c = a.focused
                      , d = a.focusVisible
                      , f = a.hovered;
                    a = a.pressed;
                    return h.jsxs(b("CometMenuItemHighlightContext").Provider, {
                        value: c && d || f,
                        children: [o, h.jsxs("div", {
                            className: (g || (g = b("stylex")))(i.content),
                            children: [h.jsx(b("TetraTextPairing.react"), {
                                body: k,
                                bodyColor: j,
                                headline: J,
                                headlineColor: m ? "disabled" : x,
                                level: 4,
                                meta: C,
                                metaColor: B,
                                reduceEmphasis: !0
                            }), e != null && h.jsx("div", {
                                className: (g || (g = b("stylex")))(i.aux),
                                children: e
                            })]
                        }), h.jsx(b("CometPressableOverlay.react"), {
                            focusVisible: d || F,
                            hovered: f,
                            pressed: a,
                            radius: 4
                        })]
                    })
                }
            }))
        })
    }
    c = h.forwardRef(a);
    e.exports = c
}
), null);