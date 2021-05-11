if (self.CavalryLogger) {
    CavalryLogger.start_js(["10ZSn"]);
}

__d("CometRouterRouteTopNavTypeContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext("default");
    e.exports = c
}
), null);
__d("useShouldRenderFullTopNav", ["CometRouterRouteTopNavTypeContext", "React", "gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React")
      , h = b("gkx")("1266082");
    function a() {
        var a = g.useContext(b("CometRouterRouteTopNavTypeContext"));
        return a === "default" && h
    }
}
), null);
__d("useShouldShowMessagingEntrypoint", ["ProfilePlusMessaging", "gkx", "useShouldRenderFullTopNav"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a, c) {
        var d = b("useShouldRenderFullTopNav")();
        if (!d || a == null)
            return !1;
        if (!b("gkx")("1673554"))
            return !1;
        if (c !== "JEWEL" && b("ProfilePlusMessaging").shouldRedirectMessagesForAP)
            return !1;
        return c === "JEWEL" && a.routeType === "media_viewer" ? !0 : !Boolean(a.hideChat)
    }
    c = a;
    e.exports = c
}
), null);
__d("CometUnstyledButton_DEPRECATED.react", ["BaseButtonOrLink_DEPRECATED.react", "React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = {
        expanded: {
            display: "a8c37x1j",
            width: "k4urcfbm"
        },
        root: {
            backgroundColor: "g5ia77u1",
            borderTop: "qu0x051f",
            borderEnd: "esr5mh6w",
            borderBottom: "e9989ue4",
            borderStart: "r7d6kgcz",
            color: "gmql0nx0",
            cursor: "nhd2j8a9",
            display: "q9uorilb",
            fontFamily: "ihxqhq3m",
            fontSize: "l94mrbxd",
            lineHeight: "aenfhxwr",
            marginTop: "kvgmc6g5",
            marginEnd: "cxmmr5t8",
            marginBottom: "oygrvhab",
            marginStart: "hcukyx3x",
            paddingTop: "jb3vyjys",
            paddingEnd: "rz4wbd8a",
            paddingBottom: "qt6c0cv9",
            paddingStart: "a8nywdso",
            textAlign: "i1ao9s8h",
            textDecoration: "myohyog2",
            ":hover": {
                color: "ksdfmwjs",
                textDecoration: "gofk2cf1"
            },
            ":active": {
                transform: "lsqurvkf",
                transition: "bj9fd4vl"
            }
        }
    };
    function a(a, c) {
        var d = a.expanded;
        d = d === void 0 ? !1 : d;
        var e = a.xstyle;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["expanded", "xstyle"]);
        return g.jsx(b("BaseButtonOrLink_DEPRECATED.react"), babelHelpers["extends"]({}, a, {
            ref: c,
            xstyle: [h.root, d && h.expanded, e]
        }))
    }
    c = g.forwardRef(a);
    e.exports = c
}
), null);
__d("BaseClickableListItem.react", ["BaseListItem.react", "CometUnstyledButton_DEPRECATED.react", "React", "stylex", "useCometAriaID", "useMergeRefs"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React"), i = {
        auxiliary: {
            alignItems: "bp9cbjyn",
            bottom: "i09qtzwb",
            display: "j83agx80",
            end: "cypi58rs",
            position: "pmk7jnqg",
            top: "kr520xx4"
        },
        button: {
            ":active": {
                transform: "tm8avpzi"
            }
        },
        disabled: {
            backgroundColor: "ha302278",
            bottom: "i09qtzwb",
            end: "n7fi1qx3",
            position: "pmk7jnqg",
            start: "j9ispegn",
            top: "kr520xx4"
        },
        indented: {
            paddingTop: "cxgpxx05",
            paddingEnd: "dflh9lhu",
            paddingBottom: "sj5x9vvc",
            paddingStart: "gm7ombtx"
        },
        listItem: {
            borderTop: "qu0x051f",
            borderEnd: "esr5mh6w",
            borderBottom: "e9989ue4",
            borderStart: "r7d6kgcz",
            borderTopStartRadius: "beltcj47",
            borderTopEndRadius: "p86d2i9g",
            borderBottomEndRadius: "aot14ch1",
            borderBottomStartRadius: "kzx2olss",
            cursor: "nhd2j8a9",
            fontFamily: "ihxqhq3m",
            marginTop: "kvgmc6g5",
            marginEnd: "oi9244e8",
            marginBottom: "oygrvhab",
            marginStart: "h676nmdw",
            textAlign: "hzawbc8m"
        },
        root: {
            position: "l9j0dhe7"
        },
        selected: {
            backgroundColor: "k19f6yf2"
        },
        unindented: {
            paddingTop: "cxgpxx05",
            paddingEnd: "dflh9lhu",
            paddingBottom: "sj5x9vvc",
            paddingStart: "scb9dxdr"
        },
        unselected: {
            ":hover": {
                backgroundColor: "gfay22hk"
            },
            ":active": {
                backgroundColor: "pdl3lqly"
            }
        }
    };
    function a(a, c) {
        var d = a.addon;
        d = d === void 0 ? null : d;
        var e = a.children
          , f = a.indented;
        f = f === void 0 ? !1 : f;
        var j = a.right;
        j = j === void 0 ? null : j;
        var k = a.selected;
        k = k === void 0 ? !1 : k;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["addon", "children", "indented", "right", "selected"]);
        var l = b("useCometAriaID")("aria-labelledby")
          , m = l[0]
          , n = m[0];
        m = m[1];
        l = l[1];
        var o = l[0];
        l = l[1];
        c = b("useMergeRefs")(c, l);
        return h.jsxs("div", {
            className: (g || (g = b("stylex")))(i.root),
            children: [h.jsx(b("CometUnstyledButton_DEPRECATED.react"), babelHelpers["extends"]({}, a, o, {
                expanded: !0,
                ref: c,
                xstyle: i.button,
                children: h.jsx(b("BaseListItem.react"), {
                    addon: d,
                    className: g(i.listItem, f ? i.indented : null, f ? null : i.unindented, k ? i.selected : null, k ? null : i.unselected),
                    children: h.jsx("div", babelHelpers["extends"]({}, n, {
                        ref: m,
                        children: e
                    }))
                })
            })), j != null && h.jsx("div", {
                className: (g || (g = b("stylex")))(i.auxiliary),
                children: j
            }), a.disabled === !0 ? h.jsx("div", {
                className: (g || (g = b("stylex")))(i.disabled, i.listItem)
            }) : null]
        })
    }
    c = h.forwardRef(a);
    e.exports = c
}
), null);
__d("useCometConfirmationDialogComet", ["CometCardedDialogLoadingState.react", "React", "requireDeferred", "useCometDeferredDialog"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = b("requireDeferred")("CometConfirmationDialogImpl.react");
    a = function() {
        var a = g.useCallback(function() {
            return g.jsx(b("CometCardedDialogLoadingState.react"), {})
        }, []);
        a = b("useCometDeferredDialog")(h, a);
        var c = a[0];
        a = a[1];
        var d = g.useCallback(function(a, b, d) {
            d === void 0 && (d = function() {}
            ),
            c(a, function(a) {
                a ? b() : d()
            })
        }, [c]);
        return [d, a]
    }
    ;
    c = a;
    e.exports = c
}
), null);
__d("useCometWindowSize", ["CometThrottle", "React", "useCometPassiveWindowSize"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a() {
        var a = b("useCometPassiveWindowSize")()
          , c = a.getCurrent();
        c = g.useState(c);
        var d = c[0]
          , e = c[1];
        g.useEffect(function() {
            var c = b("CometThrottle")(function() {
                e(a.getCurrent())
            }, 500)
              , d = a.subscribe(c);
            return function() {
                c.cancel(),
                d.remove()
            }
        }, [a]);
        return d
    }
}
), null);
__d("CometBlurredBackgroundImage.react", ["CometBackgroundImage.react", "React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React")
      , h = !0;
    function a(a) {
        a = h ? g.jsx("div", {
            className: "cg1f0npj b6s8h9p6 oqujnh0m",
            children: g.jsx("span", {
                className: "id8f4lua",
                children: g.jsx(b("CometBackgroundImage.react"), babelHelpers["extends"]({}, a))
            })
        }) : null;
        return g.jsx("div", {
            className: "k4urcfbm stjgntxs ni8dbmo4 taijpn5t datstx6m j83agx80 bp9cbjyn",
            children: a
        })
    }
}
), null);
__d("CometInfiniteScrollTrigger.react", ["InteractionTracingMetrics", "JSTracing", "React", "gkx", "mergeRefs", "stylex", "useAfterPaint", "useSuspenseTransition", "useVisibilityObserver"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = c;
    var g, h = b("React");
    function a(a) {
        h.useEffect(a, [a])
    }
    var i = b("gkx")("1678083") ? b("useAfterPaint") : a;
    function c(a) {
        var c = a.children
          , d = a.hasMore
          , e = a.isLoading
          , f = a.onLoadMore
          , j = a.rootMargin;
        a = a.xstyle;
        var k = h.useRef(!1)
          , l = b("useSuspenseTransition")()
          , m = l[0]
          , n = h.useRef(null)
          , o = h.useCallback(function() {
            m(function() {
                b("JSTracing").clear(function() {
                    f(n)
                })
            })
        }, [f, m, n]);
        l = h.useCallback(function() {
            d && !e && k.current && o()
        }, [o, e, d]);
        i(l);
        l = h.useCallback(function() {
            var a = k.current;
            k.current = !0;
            !a && d && !e && o()
        }, [d, e, o]);
        var p = h.useCallback(function() {
            k.current = !1
        }, [])
          , q = h.useCallback(function(a) {
            n.current !== a && (n.current = a,
            a && b("InteractionTracingMetrics").currentInteractionLogger().forEach(function(b) {
                b.vcTracker && b.vcTracker.observeTailLoadLoadingState(a)
            }))
        }, [])
          , r = b("useVisibilityObserver")({
            onHidden: p,
            onVisible: l,
            options: {
                rootMargin: (p = j) != null ? p : 0
            }
        });
        l = h.useMemo(function() {
            return b("mergeRefs")(r, n, q)
        }, [r, n, q]);
        return d || e ? h.jsx("div", {
            className: (g || (g = b("stylex")))(a),
            ref: l,
            children: c
        }) : null
    }
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
__d("TetraUnit.react", ["CometColumn.react", "CometColumnItem.react", "React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = {
        8: {
            paddingBottom: "sj5x9vvc"
        },
        12: {
            paddingBottom: "f10w8fjw"
        },
        16: {
            paddingBottom: "ihqw7lf3"
        },
        20: {
            paddingBottom: "ofv0k9yr"
        }
    }
      , i = {
        primary: {
            backgroundColor: "cwj9ozl2"
        },
        transparent: {
            backgroundColor: "g5ia77u1"
        }
    };
    function a(a, c) {
        var d = a.children
          , e = a.header
          , f = a.paddingBottom;
        f = f === void 0 ? 20 : f;
        var j = a.spacing;
        j = j === void 0 ? 8 : j;
        var k = a.type;
        k = k === void 0 ? "primary" : k;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "header", "paddingBottom", "spacing", "type"]);
        return g.jsxs(b("CometColumn.react"), babelHelpers["extends"]({}, a, {
            ref: c,
            spacing: j,
            xstyle: [h[f], i[k]],
            children: [g.jsx(b("CometColumnItem.react"), {
                children: e
            }), g.jsx(b("CometColumnItem.react"), {
                children: d
            })]
        }))
    }
    c = g.forwardRef(a);
    e.exports = c
}
), null);
__d("ComposerSproutDisplayTypeContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext({
        type: "inline"
    });
    e.exports = c
}
), null);
__d("FeedComposerCometSproutCollapsedButton.react", ["BaseButtonOrLink_DEPRECATED.react", "CometPressable.react", "CometPressableChildrenWithOverlay.react", "CometTooltip.react", "ImageIconSource", "React", "TetraIcon.react", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React"), i = {
        circle: {
            borderTopStartRadius: "s45kfl79",
            borderTopEndRadius: "emlxlaya",
            borderBottomEndRadius: "bkmhp75w",
            borderBottomStartRadius: "spb7xbtv",
            overflowX: "ni8dbmo4",
            overflowY: "stjgntxs"
        },
        icon: {
            alignItems: "bp9cbjyn",
            display: "j83agx80",
            height: "tv7at329",
            justifyContent: "taijpn5t",
            position: "l9j0dhe7",
            width: "thwo4zme"
        },
        inner: {
            height: "datstx6m",
            width: "k4urcfbm"
        },
        outer: {
            height: "tv7at329",
            position: "l9j0dhe7",
            width: "thwo4zme"
        },
        pressable: {
            appearance: "dwo3fsh8",
            backgroundColor: "g5ia77u1",
            borderStyle: "ow4ym5g4",
            borderWidth: "auili1gw",
            boxSizing: "rq0escxv",
            cursor: "nhd2j8a9",
            marginBottom: "oygrvhab",
            marginEnd: "cxmmr5t8",
            marginStart: "hcukyx3x",
            marginTop: "kvgmc6g5",
            paddingBottom: "qt6c0cv9",
            paddingEnd: "rz4wbd8a",
            paddingStart: "a8nywdso",
            paddingTop: "jb3vyjys",
            position: "l9j0dhe7",
            textAlign: "i1ao9s8h",
            zIndex: "du4w35lb"
        },
        pressed: {
            transform: "mtfd0dr2"
        }
    };
    function a(a, c) {
        var d = a.activeColor
          , e = a.isActive
          , f = a.onFocusIn
          , j = a.onFocusOut
          , k = a.onHoverIn
          , l = a.overlayDisabled;
        l = l === void 0 ? !1 : l;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["activeColor", "isActive", "onFocusIn", "onFocusOut", "onHoverIn", "overlayDisabled"]);
        var m = a.disabled
          , n = a.disabledIcon
          , o = a.icon
          , p = a.label
          , q = a.onClick
          , r = a.onHoverOut;
        a = a.testid;
        var s = h.jsx(b("TetraIcon.react"), {
            color: "disabled",
            icon: new (b("ImageIconSource"))(m === !0 && n || o,24,24),
            ref: c
        });
        a = h.jsx(b("CometPressable.react"), {
            "aria-label": p,
            label: p,
            onFocusIn: f,
            onFocusOut: j,
            onHoverIn: k,
            onHoverOut: r,
            onPress: m === !0 ? void 0 : q,
            overlayDisabled: m === !0 || l,
            ref: c,
            testid: void 0,
            xstyle: function(a) {
                a = a.pressed;
                return [i.pressable, a && m !== !0 && i.pressed]
            },
            children: function(a) {
                a = a.overlay;
                return h.jsx("div", {
                    children: h.jsx("div", {
                        className: (g || (g = b("stylex")))(i.outer, i.circle),
                        children: h.jsx(b("CometPressableChildrenWithOverlay.react"), {
                            overlay: a,
                            children: h.jsx("div", {
                                className: g(i.icon, i.inner),
                                children: s
                            })
                        })
                    })
                })
            }
        });
        m === !1 && (a = h.jsx(b("CometTooltip.react"), {
            position: "above",
            tooltip: p,
            children: a
        }));
        e && (a = h.jsx("div", {
            className: (g || (g = b("stylex")))(i.outer, i.circle),
            ref: c,
            style: {
                backgroundColor: d
            },
            children: a
        }));
        return a
    }
    c = h.forwardRef(a);
    e.exports = c
}
), null);
__d("FeedComposerCometSproutExpandedButton.react", ["ix", "ComposerSproutDisplayTypeContext", "ImageIconSource", "React", "TetraAccessoryListCell.react", "fbicon"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a(a) {
        var c = h.useContext(b("ComposerSproutDisplayTypeContext"))
          , d = h.useState(!1)
          , e = d[0]
          , f = d[1];
        if (c.type !== "push_view")
            return null;
        d = a.disabled;
        var i = a.disabledIcon
          , j = a.icon
          , k = a.isActive
          , l = a.label
          , m = a.onClick;
        a = a.opensExternally;
        a = a === void 0 ? !1 : a;
        return h.jsx(b("TetraAccessoryListCell.react"), {
            addOnPrimary: {
                icon: new (b("ImageIconSource"))(d && i || j,24,24),
                type: "icon"
            },
            addOnPrimaryVerticalAlign: "center",
            addOnSecondary: k === !0 ? {
                color: "highlight",
                icon: b("fbicon")._(g("477815"), 24),
                type: "icon"
            } : a && e ? {
                color: "tertiary",
                icon: b("fbicon")._(g("538182"), 16),
                type: "icon"
            } : void 0,
            disabled: d,
            headline: l,
            onHoverIn: function() {
                return f(!0)
            },
            onHoverOut: function() {
                return f(!1)
            },
            onPress: function() {
                c.popPage(),
                m && m()
            },
            paddingHorizontal: 4,
            selected: k === !0
        })
    }
}
), null);
__d("CometComposerLoggerDispatcherContext", ["React", "emptyFunction"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext(b("emptyFunction"));
    e.exports = c
}
), null);
__d("useCometComposerLoggerDispatcher", ["CometComposerLoggerDispatcherContext", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a() {
        return g.useContext(b("CometComposerLoggerDispatcherContext"))
    }
}
), null);
__d("CometComposerIneligibilityContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext(new Set());
    e.exports = c
}
), null);
__d("useComposerPluginIneligibility", ["CometComposerIneligibilityContext", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a() {
        return g.useContext(b("CometComposerIneligibilityContext"))
    }
}
), null);
__d("CometComposerSproutButton.react", ["fbt", "BaseButtonOrLink_DEPRECATED.react", "CometTooltip.react", "ComposerFeatureIntentLoggingDispatcher", "ComposerSproutDisplayTypeContext", "FeedComposerCometSproutCollapsedButton.react", "FeedComposerCometSproutExpandedButton.react", "React", "recoverableViolation", "stylex", "useCometComposerLoggerDispatcher", "useComposerPluginIneligibility"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function a(a, c) {
        var d = a.activeColor
          , e = a.disabled;
        e = e === void 0 ? !1 : e;
        var f = a.disabledIcon
          , i = a.disabledTooltip;
        a.hasData;
        var j = a.icon
          , k = a.isActive;
        k = k === void 0 ? !1 : k;
        var l = a.label
          , m = a.loggingName
          , n = a.onClick
          , o = a.opensExternally
          , p = a.pluginName;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["activeColor", "disabled", "disabledIcon", "disabledTooltip", "hasData", "icon", "isActive", "label", "loggingName", "onClick", "opensExternally", "pluginName"]);
        var q = b("useComposerPluginIneligibility")();
        q = q.has(p) || e;
        e = h.useContext(b("ComposerSproutDisplayTypeContext"));
        var r = e.type !== "push_view"
          , s = b("useCometComposerLoggerDispatcher")();
        h.useEffect(function() {
            r && o === !0 && b("recoverableViolation")("A sprout that opens externally was rendered collapsed, which means we did not have the opportunity to how the secondary icon that indicates a separate experience. This should not occur.", "comet_composer")
        }, [r, o]);
        e = function() {
            if (m.length !== 0) {
                var a = b("ComposerFeatureIntentLoggingDispatcher")(p, m);
                a != null && s({
                    fields: a,
                    type: "COMPOSER_FEATURE_INTENT"
                })
            }
            n && n()
        }
        ;
        a = r ? h.jsx(b("FeedComposerCometSproutCollapsedButton.react"), babelHelpers["extends"]({}, a, {
            activeColor: d,
            disabled: q,
            disabledIcon: f,
            icon: j,
            isActive: k,
            label: l,
            onClick: e,
            ref: c
        })) : h.jsx(b("FeedComposerCometSproutExpandedButton.react"), {
            disabled: q,
            disabledIcon: f,
            icon: j,
            isActive: k,
            label: l,
            onClick: e,
            opensExternally: o
        });
        if (q === !0) {
            return h.jsx("div", {
                className: "k4urcfbm",
                children: h.jsx(b("CometTooltip.react"), {
                    position: "above",
                    tooltip: (d = i) != null ? d : g._("Kh\u00f4ng th\u1ec3 k\u1ebft h\u1ee3p ph\u1ea7n n\u00e0y v\u1edbi nh\u1eefng g\u00ec b\u1ea1n \u0111\u00e3 th\u00eam v\u00e0o b\u00e0i vi\u1ebft."),
                    children: h.jsx("div", {
                        className: "hzruof5a l8rlqa9s bipmatt0 bs8yw60a",
                        children: a
                    })
                })
            })
        }
        return a
    }
    c = h.forwardRef(a);
    e.exports = c
}
), null);
__d("CometComposerAttachmentPluginTypes", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({
        AMA: "AMA",
        ANIMATED_IMAGE: "ANIMATED_IMAGE",
        ASK_FOR_RECOMMENDATIONS: "ASK_FOR_RECOMMENDATIONS",
        CREATE_EVENT: "CREATE_EVENT",
        DOC: "DOC",
        DUMMY: "DUMMY",
        EVENT: "EVENT",
        FILE: "FILE",
        FORMATTED_TEXT: "FORMATTED_TEXT",
        GET_MESSAGES: "GET_MESSAGES",
        GET_WHATSAPP_MESSAGES: "GET_WHATSAPP_MESSAGES",
        GET_SHOWTIMES: "GET_SHOWTIMES",
        GIFT_CARD: "GIFT_CARD",
        GROUP_VOTER_PLEDGE_DRIVE: "GROUP_VOTER_PLEDGE_DRIVE",
        KNOWLEDGE_NOTE: "KNOWLEDGE_NOTE",
        LINK: "LINK",
        LIVE_VIDEO: "LIVE_VIDEO",
        LIVING_ROOM: "LIVING_ROOM",
        LOCAL_ALERT: "LOCAL_ALERT",
        LOCATION: "LOCATION",
        MEDIA: "MEDIA",
        NONPROFIT: "NONPROFIT",
        PHOTO3D: "PHOTO3D",
        POLL: "POLL",
        QUILT: "QUILT",
        SHARE: "SHARE",
        SHIFT_COVER: "SHIFT_COVER",
        VIDEO_MEETUP: "VIDEO_MEETUP",
        VIEW_ONLY_FEED_ATTACHMENT: "VIEW_ONLY_FEED_ATTACHMENT",
        WOODHENGE_SUPPORT: "WOODHENGE_SUPPORT",
        WORK_CHECKLIST: "WORK_CHECKLIST",
        WORK_MULTI_ATTACHMENTS: "WORK_MULTI_ATTACHMENTS",
        WORK_SCHEDULE_LIVE: "WORK_SCHEDULE_LIVE"
    });
    b = a;
    e.exports = b
}
), null);
__d("useNotificationsTrackingString", ["useRoutePassthroughProps"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a() {
        var a = b("useRoutePassthroughProps")();
        return JSON.stringify(a == null ? void 0 : a.notificationTracking)
    }
}
), null);
__d("MessagingThreadType.bs", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = [0, 1];
    b = [0, 2];
    c = [0, 3];
    d = [0, 4];
    e = [0, 5];
    var g = [0, 6]
      , h = [0, 7]
      , i = [0, 8]
      , j = [0, 10]
      , k = [0, 11]
      , l = [0, 13]
      , m = [0, 14];
    f.oneToOne = a;
    f.group = b;
    f.room = c;
    f.montage = d;
    f.marketplace = e;
    f.folder = g;
    f.tincanOneToOne = h;
    f.tincanGroupDisappearing = i;
    f.carrierMessagingOneToOne = j;
    f.carrierMessagingGroup = k;
    f.tincanOneToOneDisappearing = l;
    f.pageFollowUp = m
}
), null);
__d("MWChatThreadId.bs", ["FBID.bs", "bs_caml_obj", "bs_caml_int64", "MercuryIDs", "MessagingThreadType.bs", "unrecoverableViolation"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a) {
        var c = a[0];
        if (c !== 757211935)
            if (c >= -914332868)
                return b("MercuryIDs").getThreadIDFromUserID(a[1]);
            else
                return b("unrecoverableViolation")("Not supported", "messenger_web_product");
        else
            return b("MercuryIDs").getThreadIDFromThreadFBID(a[1])
    }
    function c(a) {
        return a[1]
    }
    function d(a) {
        var c = a[0];
        if (c >= 892012143)
            if (c >= 948354667)
                return "u." + a[1];
            else
                return "p." + a[1];
        else if (c >= 757211935)
            return "g." + a[1];
        else
            return b("unrecoverableViolation")("Not supported", "messenger_web_product")
    }
    function e(a) {
        a = a.split(".");
        var c = a.length, d;
        if (c >= 3)
            d = [void 0, void 0];
        else
            switch (c) {
            case 0:
                d = [void 0, void 0];
                break;
            case 1:
                c = a[0];
                d = [c, void 0];
                break;
            case 2:
                c = a[0];
                a = a[1];
                d = /^[1-9]\d*$/.test(a) ? [c, a] : [void 0, void 0];
                break
            }
        c = d[1];
        a = d[0];
        if (a !== void 0)
            switch (a) {
            case "g":
                if (c !== void 0)
                    return [757211935, b("FBID.bs").ofStringExn(c)];
                else
                    return;
            case "p":
                if (c !== void 0)
                    return [892012143, b("FBID.bs").ofStringExn(c)];
                else
                    return;
            case "u":
                if (c !== void 0)
                    return [948354667, b("FBID.bs").ofStringExn(c)];
                else
                    return;
            default:
                return
            }
    }
    function g(a, c, d) {
        c = b("bs_caml_int64").of_int32(c);
        if (b("bs_caml_int64").eq(c, b("MessagingThreadType.bs").oneToOne))
            if (d)
                return [892012143, a];
            else
                return [948354667, a];
        else if (b("bs_caml_int64").eq(c, b("MessagingThreadType.bs").marketplace) || b("bs_caml_int64").eq(c, b("MessagingThreadType.bs").group))
            return [757211935, a];
        else
            return
    }
    function h(a) {
        switch (a.targetType) {
        case "GROUP":
            return [757211935, a.targetID];
        case "PAGE":
            return [892012143, a.targetID];
        case "USER":
            return [948354667, a.targetID];
        default:
            return b("unrecoverableViolation")("Invalid id", "messenger web product")
        }
    }
    var i = b("bs_caml_obj").caml_equal;
    i = {
        $eq: i,
        eq: i
    };
    function j(a) {
        if (typeof a === "number")
            return !1;
        else
            return a[0] === 892012143
    }
    function k(a) {
        if (typeof a === "number")
            return !1;
        else
            return a[0] === 948354667
    }
    function l(a) {
        if (typeof a === "number")
            return !1;
        else
            return a[0] === -914332869
    }
    f.getMercuryID = a;
    f.getFBID = c;
    f.serializeFuture = d;
    f.deserializeFuture = e;
    f.deserializeThreadlistIdUseOnlyInJewel = g;
    f.fromJs = h;
    f.Operators = i;
    f.isPage = j;
    f.isUser = k;
    f.isSecret = l
}
), null);
__d("MWChatStateThread.bs", ["MWChatThreadId.bs"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a) {
        if (a)
            return "thread:" + b("MWChatThreadId.bs").serializeFuture(a[0]);
        else
            return "search"
    }
    c = a;
    f.toString = a;
    f.toInteractionIDKey = c
}
), null);
__d("MWChatOpenFantaTabForCoB", ["ifRequired", "recoverableViolation"], (function(a, b, c, d, e, f) {
    "use strict";
    f.useHook = a;
    function a() {
        return function(a) {
            return b("ifRequired")("FantaTabActions", function(b) {
                return b.openTab(a, "comet_on_blue")
            }, function() {
                return b("recoverableViolation")("Trying to open a tab but neither MWChat or Fanta chat exist", "messenger_comet")
            })
        }
    }
}
), null);
__d("MWChatMultitabContext.bs", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext(void 0);
    f.context = c
}
), null);
__d("BroadcastChannel.bs", ["bs_caml_option"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a) {
        var c = window.BroadcastChannel;
        if (c == null)
            return;
        else
            return b("bs_caml_option").some(new BroadcastChannel(a))
    }
    f.make = a
}
), null);
__d("MWChatMultitabBroadcast.bs", ["bs_curry", "bs_caml_option", "CurrentUser", "BroadcastChannel.bs"], (function(a, b, c, d, e, f) {
    "use strict";
    d = "ChatHeadsPlus" + b("CurrentUser").getID();
    var g = b("BroadcastChannel.bs").make(d);
    function a(a) {
        if (g !== void 0) {
            b("bs_caml_option").valFromOption(g).postMessage(a);
            return 0
        } else
            return 0
    }
    function c(a) {
        if (g !== void 0) {
            var c = b("bs_caml_option").valFromOption(g)
              , d = function(c) {
                return b("bs_curry")._1(a, c.data)
            };
            c.addEventListener("message", d);
            return function(a) {
                c.removeEventListener("message", d);
                return 0
            }
        } else
            return function(a) {
                return 0
            }
    }
    f.channelName = d;
    f.channel = g;
    f.send = a;
    f.subscribe = c
}
), null);
__d("MWChatMultitabDispatcher.bs", ["bs_curry", "bs_caml_obj", "requireDeferred", "MWChatMultitabBroadcast.bs", "MWChatDeduplicateThreadIds.bs"], (function(a, b, c, d, e, f) {
    "use strict";
    function g(a) {
        a.listeners.forEach(function(a) {
            return b("bs_curry")._1(a, 0)
        });
        return 0
    }
    var h = b("requireDeferred")("MWChatMultitabCookieWriter.bs");
    function a(a, c, d) {
        a = a !== void 0 ? a : !0;
        var e = b("bs_curry")._3(c.reducer, c.state, d, c);
        if (e !== c.state) {
            a && (h.onReady(function(a) {
                return b("bs_curry")._1(a.write, e)
            }),
            b("MWChatMultitabBroadcast.bs").send({
                openTabsState: [],
                chatHeads: e.chatHeads,
                forceCollapsedHeads: e.forceCollapsedHeads,
                notificationTimers: e.notificationTimers
            }));
            c.state = e;
            return g(c)
        } else
            return 0
    }
    function c(a, b) {
        return {
            reducer: a,
            state: b,
            listeners: []
        }
    }
    function d(a, b) {
        a.listeners.push(b);
        return function(c) {
            c = a.listeners.indexOf(b);
            a.listeners.splice(c, 1);
            return 0
        }
    }
    function i(a, c) {
        var d = a.openTabsState.reduce(function(a, b) {
            b = b.threadID;
            if (b)
                return a.concat([b[0]]);
            else
                return a
        }, []);
        d = b("MWChatDeduplicateThreadIds.bs").get(c.chatHeads.concat(d));
        return {
            openTabsState: a.openTabsState,
            chatHeads: d,
            forceCollapsedHeads: c.forceCollapsedHeads,
            notificationTimers: c.notificationTimers
        }
    }
    function e(a) {
        return b("MWChatMultitabBroadcast.bs").subscribe(function(c) {
            if (b("bs_caml_obj").caml_notequal(c, a.state)) {
                a.state = i(a.state, c);
                return g(a)
            } else
                return 0
        })
    }
    function j(a) {
        return a.state
    }
    f._inform = g;
    f.$MWChatMultitabCookieWriter$Deferred = h;
    f.dispatch = a;
    f.make = c;
    f.listen = d;
    f.getNewState = i;
    f.subscribe = e;
    f.state = j
}
), null);
__d("MWChatTabEntryPoints.bs", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {};
    f.tabEntryPoints = a
}
), null);
__d("MWMSPreloadThreadForUser.bs", ["bs_curry", "React", "ifRequired", "CurrentUser", "killswitch", "MWChatThreadId.bs"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a) {
        return g.useCallback(function(a) {
            if (b("killswitch")("MESSENGER_WEB_STOP_PRELOADING_CONVERSATIONS"))
                return 0;
            else {
                b("ifRequired")("MessengerState.bs", function(c) {
                    var d = b("MWChatThreadId.bs").getMercuryID([948354667, a]);
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
    f.usePreloaderForUser = a
}
), null);
__d("MWChatOpenTabForUser.bs", ["bs_block", "React", "BanzaiODS", "MercuryIDs", "MWChatInteraction.bs", "MWChatStateThread.bs", "MessengerWebEvent", "MWChatTabEntryPoints.bs", "MWChatMultitabContext.bs", "MWChatMultitabDispatcher.bs", "MWChatOpenFantaTabForCoB", "MWMSPreloadThreadForUser.bs", "useMWChatOpenTabTraceProvider", "MessengerWebStgTypedLoggerLite.bs", "useCometFeedNoRoutingNavigationEventLogger"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a, c) {
        var d = a !== void 0 ? a : !1
          , e = g.useContext(b("MWChatMultitabContext.bs").context)
          , f = b("useMWChatOpenTabTraceProvider")()
          , h = b("useCometFeedNoRoutingNavigationEventLogger")()
          , i = b("MWChatOpenFantaTabForCoB").useHook();
        a = b("MWMSPreloadThreadForUser.bs").usePreloaderForUser(0);
        var j = g.useCallback(function(a) {
            h(Date.now(), "", "messenger");
            b("BanzaiODS").bumpEntityKey(3185, "mwchat_tab", "open_user");
            b("MWChatTabEntryPoints.bs").tabEntryPoints[a] = c;
            b("MessengerWebStgTypedLoggerLite.bs").log({
                entry_point: c,
                event_name: b("MessengerWebEvent").OPEN_CHAT_TAB,
                other_user_fbid: a,
                thread_fbid: null
            });
            return f(function(c) {
                b("MWChatInteraction.bs").set(b("MWChatStateThread.bs").toString([[948354667, a]]), c);
                if (e !== void 0)
                    return b("MWChatMultitabDispatcher.bs").dispatch(void 0, e, b("bs_block").__(1, [[948354667, a], {
                        preventAutofocus: d
                    }]));
                else
                    return i(b("MercuryIDs").getThreadIDFromUserID(a))
            }, "user", c)
        }, [c, e, h, f, i, d]);
        return [j, a]
    }
    f.useHook = a
}
), null);
__d("MWChatOpenTabForUser.re", ["bs_curry", "MWChatOpenTabForUser.bs"], (function(a, b, c, d, e, f) {
    a = function(a, c) {
        a = b("bs_curry")._2(b("MWChatOpenTabForUser.bs").useHook, a.preventAutofocus, c);
        return a
    }
    ;
    f.useHook = a
}
), null);
__d("useMWChatOpenTabForUser", ["MWChatOpenTabForUser.re"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c) {
        return b("MWChatOpenTabForUser.re").useHook(c != null ? {
            preventAutofocus: c.preventAutofocus_DO_NOT_USE
        } : {}, a)
    }
}
), null);
__d("MWChatMultitabCookieWriter.bs", ["DeferredCookie", "MWChatThreadId.bs", "recoverableViolation"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a) {
        var c = a.chatHeads.map(function(a) {
            return {
                i: b("MWChatThreadId.bs").serializeFuture(a)
            }
        });
        a = a.openTabsState;
        var d;
        if (a.length !== 1)
            d = void 0;
        else {
            a = a[0];
            a = a.threadID;
            d = a ? b("MWChatThreadId.bs").serializeFuture(a[0]) : void 0
        }
        a = JSON.stringify({
            t3: c,
            utc3: Date.now(),
            lm3: d,
            v: 1
        });
        if (a !== void 0) {
            b("DeferredCookie").addToQueue("presence", "C" + a, 0, "", !1, !1, !0);
            return 0
        } else {
            b("recoverableViolation")("Failed to serialize cookie", "messenger_comet");
            return 0
        }
    }
    c = 1;
    f.version = c;
    f.write = a
}
), null);
__d("useStoriesReportBug", ["requireCond", "cr:1083606"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("cr:1083606")
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
__d("PagesTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:PagesLoggerConfig", this.$1, b("Banzai").BASIC, a)
        }
        ;
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:PagesLoggerConfig", this.$1, b("Banzai").VITAL, a)
        }
        ;
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:PagesLoggerConfig", this.$1, {
                signal: !0
            }, a)
        }
        ;
        c.clear = function() {
            this.$1 = {};
            return this
        }
        ;
        c.getData = function() {
            return babelHelpers["extends"]({}, this.$1)
        }
        ;
        c.updateData = function(a) {
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        }
        ;
        c.setConnectionClass = function(a) {
            this.$1.connection_class = a;
            return this
        }
        ;
        c.setEvent = function(a) {
            this.$1.event = a;
            return this
        }
        ;
        c.setEventLocation = function(a) {
            this.$1.event_location = a;
            return this
        }
        ;
        c.setEventTarget = function(a) {
            this.$1.event_target = a;
            return this
        }
        ;
        c.setLogSource = function(a) {
            this.$1.log_source = a;
            return this
        }
        ;
        c.setPageID = function(a) {
            this.$1.page_id = a;
            return this
        }
        ;
        c.setRawClientTime = function(a) {
            this.$1.raw_client_time = a;
            return this
        }
        ;
        c.setSessionid = function(a) {
            this.$1.sessionid = a;
            return this
        }
        ;
        c.setTags = function(a) {
            this.$1.tags = b("GeneratedLoggerUtils").serializeVector(a);
            return this
        }
        ;
        c.updateExtraData = function(a) {
            a = b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));
            b("GeneratedLoggerUtils").checkExtraDataFieldNames(a, g);
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        }
        ;
        c.addToExtraData = function(a, b) {
            var c = {};
            c[a] = b;
            return this.updateExtraData(c)
        }
        ;
        return a
    }();
    var g = {
        connection_class: !0,
        event: !0,
        event_location: !0,
        event_target: !0,
        log_source: !0,
        page_id: !0,
        raw_client_time: !0,
        sessionid: !0,
        tags: !0
    };
    e.exports = a
}
), null);
__d("PagesLogger", ["PagesLoggerEventEnum", "PagesTypedLogger"], (function(a, b, c, d, e, f) {
    var g = "extra_data_"
      , h = {
        log: function(a, c, d, e, f, h) {
            e === void 0 && (e = null);
            f === void 0 && (f = []);
            var i = {}
              , j = h || {};
            Object.keys(j || {}).forEach(function(a) {
                var b = j[a];
                (b instanceof Array || b instanceof Object) && (b = JSON.stringify(b));
                i[g + a] = b
            });
            new (b("PagesTypedLogger"))().setPageID(a).setEvent(c).setEventTarget(d).setEventLocation(e).setLogSource("pages_logger").setTags(f).updateExtraData(i).log()
        },
        registerLogOnClick: function(a, c, d, e, f, g) {
            e === void 0 && (e = null),
            f === void 0 && (f = []),
            g === void 0 && (g = {}),
            a.addEventListener("click", function() {
                h.log(c, b("PagesLoggerEventEnum").CLICK, d, e, f, g)
            })
        }
    };
    e.exports = h
}
), null);
