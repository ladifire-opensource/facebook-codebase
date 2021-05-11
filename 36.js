if (self.CavalryLogger) {
    CavalryLogger.start_js(["K3es8"]);
}

__d("createCometRelayEntryPointEnvironmentProvider", ["CometRelayEnvironmentFactory"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        a === void 0 && (a = b("CometRelayEnvironmentFactory").defaultEnvironment);
        var c = function(c) {
            c = c == null ? void 0 : c.actorID;
            return c == null ? a : b("CometRelayEnvironmentFactory").getForActorID(String(c))
        };
        return {
            getEnvironment: c
        }
    }
}
), null);
__d("useCometRelayEntrypointContextualEnvironmentProvider", ["CometRelay", "React", "createCometRelayEntryPointEnvironmentProvider"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a() {
        var a = b("CometRelay").useRelayEnvironment();
        return g.useMemo(function() {
            return b("createCometRelayEntryPointEnvironmentProvider")(a)
        }, [a])
    }
}
), null);
__d("useCometLoadingStateTracker", ["CometVisualCompletionAttributes", "React", "requireCond", "cr:1075529", "cr:683059"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a() {
        var a = g.useRef(null);
        g.useEffect(function() {
            var c = a.current
              , d = [];
            b("cr:1075529") && c != null && d.concat(b("cr:1075529").trackLoadingState(c));
            b("cr:683059") && c != null && d.push(b("cr:683059").trackLoadingState(c));
            return function() {
                d.forEach(function(a) {
                    a()
                })
            }
        }, []);
        return [b("CometVisualCompletionAttributes").LOADING_STATE, a]
    }
}
), null);
__d("BaseLoadingStateElement.react", ["FocusWithinHandler.react", "React", "ariaGlimmerProps", "joinClasses", "stylex", "useCometLoadingStateTracker", "useMergeRefs"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React"), i = {
        hideOutline: {
            outline: "lzcic4wl"
        }
    }, j = h.createContext(!1);
    function a(a, c) {
        var d = a.children
          , e = a.className_DEPRECATED
          , f = a.style
          , k = a.xstyle;
        a = h.useContext(j);
        var l = b("useCometLoadingStateTracker")()
          , m = l[0];
        l = l[1];
        var n = b("useMergeRefs")(c, l);
        return a ? h.jsx("div", {
            className: b("joinClasses")((g || (g = b("stylex")))(k), e),
            ref: c,
            style: f,
            children: d
        }) : h.jsx(j.Provider, {
            value: !0,
            children: h.jsx(b("FocusWithinHandler.react"), {
                children: function(a, c) {
                    return h.jsx("div", babelHelpers["extends"]({}, b("ariaGlimmerProps"), m, {
                        className: b("joinClasses")((g || (g = b("stylex")))(!c && i.hideOutline, k), e),
                        ref: n,
                        style: f,
                        children: d
                    }))
                }
            })
        })
    }
    c = h.forwardRef(a);
    e.exports = c
}
), null);
__d("BaseGlimmer.react", ["BaseLoadingStateElement.react", "React", "stylex", "useVisibilityObserver"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React")
      , h = 1e3
      , i = 100
      , j = {
        dark: {
            backgroundColor: "pgeiv1et"
        },
        paused: {
            animationPlayState: "sb3519qa"
        },
        root: {
            animationDirection: "afxn4irw",
            animationDuration: "r8dsh44q",
            animationIterationCount: "ee40wjg4",
            animationName: "skuavjfj",
            animationTimingFunction: "ku44ohm1",
            backgroundColor: "g6srhlxm",
            opacity: "lszeityy"
        }
    };
    function a(a) {
        var c = a.children
          , d = a.className
          , e = a.index
          , f = a.theme;
        f = f === void 0 ? "light" : f;
        a = a.xstyle;
        var k = g.useState(!0)
          , l = k[0]
          , m = k[1];
        k = g.useCallback(function(a) {
            a = a.hiddenReason;
            a !== "COMPONENT_UNMOUNTED" && m(!0)
        }, []);
        var n = g.useCallback(function() {
            m(!1)
        }, []);
        k = b("useVisibilityObserver")({
            onHidden: k,
            onVisible: n
        });
        return g.jsx(b("BaseLoadingStateElement.react"), {
            className_DEPRECATED: d,
            ref: k,
            style: {
                animationDelay: h + i * e + "ms"
            },
            xstyle: [j.root, l && j.paused, f === "dark" && j.dark, a],
            children: c
        })
    }
}
), null);
__d("CometCardedDialogLoadingStateGlimmer.react", ["BaseGlimmer.react", "BaseLoadingStateElement.react", "React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React"), i = {
        bodyGlimmer: {
            borderTopStartRadius: "h1ci2mql",
            borderTopEndRadius: "mjfe6jtr",
            borderBottomEndRadius: "c6w6u7b1",
            borderBottomStartRadius: "hc21y3pz",
            height: "i4qgphn6",
            marginBottom: "p5pk11vy"
        },
        bodyGlimmerContainer: {
            paddingTop: "aodizinl",
            paddingEnd: "gl4o1x5y",
            paddingBottom: "ckl02a0p",
            paddingStart: "lt9micmv"
        },
        bodyGlimmerFirst: {
            width: "eq70wtua"
        },
        bodyGlimmerSecond: {
            width: "pfqjqu37"
        },
        header: {
            alignItems: "bp9cbjyn",
            borderBottom: "linmgsc8",
            display: "j83agx80",
            height: "cb02d2ww",
            justifyContent: "taijpn5t",
            textAlign: "oqcyycmt"
        },
        headerGlimmer: {
            borderTopStartRadius: "h1ci2mql",
            borderTopEndRadius: "mjfe6jtr",
            borderBottomEndRadius: "c6w6u7b1",
            borderBottomStartRadius: "hc21y3pz",
            height: "i4qgphn6",
            width: "gjzvkazv"
        }
    };
    function a(a) {
        var c = a.bodyGlimmerContainerXStyle;
        c = c === void 0 ? null : c;
        a = a.withHeader;
        a = a === void 0 ? !1 : a;
        return h.jsxs(b("BaseLoadingStateElement.react"), {
            children: [a && h.jsx("div", {
                className: (g || (g = b("stylex")))(i.header),
                children: h.jsx(b("BaseGlimmer.react"), {
                    className: (g || (g = b("stylex")))(i.headerGlimmer),
                    index: 0
                })
            }), h.jsxs("div", {
                className: (g || (g = b("stylex")))(i.bodyGlimmerContainer, c),
                children: [h.jsx(b("BaseGlimmer.react"), {
                    className: g(i.bodyGlimmer, i.bodyGlimmerFirst),
                    index: 1
                }), h.jsx(b("BaseGlimmer.react"), {
                    className: g(i.bodyGlimmer, i.bodyGlimmerSecond),
                    index: 2
                })]
            })]
        })
    }
}
), null);
__d("CometCardedDialogLoadingState.react", ["CometCardedDialog.react", "CometCardedDialogLoadingStateGlimmer.react", "React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        return g.jsx("div", {
            className: "r2dqequf k4mk90pw il7rb8sk",
            children: g.jsx(b("CometCardedDialog.react"), babelHelpers["extends"]({
                isLoadingState: !0
            }, a, {
                children: g.jsx(b("CometCardedDialogLoadingStateGlimmer.react"), {
                    withHeader: a.title == null
                })
            }))
        })
    }
}
), null);
__d("CometSuspendedDialogImpl.react", ["CometCardedDialogLoadingState.react", "CometPlaceholder.react", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React")
      , h = function(a) {
        return g.jsx(b("CometCardedDialogLoadingState.react"), {
            onClose: a,
            withCloseButton: !0
        })
    };
    function a(a) {
        var c = a.dialog
          , d = a.dialogProps
          , e = a.fallback;
        e = e === void 0 ? h : e;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["dialog", "dialogProps", "fallback"]);
        var f = a.onClose;
        e = e(f);
        return g.jsx(b("CometPlaceholder.react"), {
            fallback: e,
            children: g.jsx(c, babelHelpers["extends"]({}, d, a))
        })
    }
}
), null);
__d("useCometLazyDialog", ["CometDialogContext", "CometSuspendedDialogImpl.react", "React", "lazyLoadComponent"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a, c) {
        var d = g.useRef(null)
          , e = g.useContext(b("CometDialogContext"))
          , f = g.useCallback(function(d, f) {
            var g = b("lazyLoadComponent")(a);
            e(b("CometSuspendedDialogImpl.react"), {
                dialog: g,
                dialogProps: d,
                fallback: c
            }, f)
        }, [e, a, c])
          , h = g.useCallback(function() {
            a.preload()
        }, [a]);
        return [f, d, h]
    }
}
), null);
__d("RTWebPreCallContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext(null);
    e.exports = c
}
), null);
__d("RTWebIncomingRingConfiguration", ["UserAgent", "gkx", "qex"], (function(a, b, c, d, e, f) {
    "use strict";
    f.isSupportedClientForProtocol = a;
    function a(a) {
        if (a === "p2p")
            return b("UserAgent").isBrowser("Chrome >= 49") || b("UserAgent").isBrowser("Firefox >= 52") || b("UserAgent").isBrowser("Edge >= 15.15042") && b("gkx")("1341692") && !b("gkx")("1680228") || b("UserAgent").isBrowser("Edge (Chromium Based) >= 74.1") || b("UserAgent").isBrowser("Opera >= 58") || b("UserAgent").isBrowser("Oculus Browser >= 6") && b("gkx")("1188589");
        else if (a === "mw") {
            return b("UserAgent").isBrowser("Chrome >= 49") || b("UserAgent").isBrowser("Edge (Chromium Based) >= 74.1") || b("UserAgent").isBrowser("Opera >= 58") || b("UserAgent").isBrowser("Firefox >= 52") && ((a = b("qex")._("1688994")) != null ? a : !1) || b("UserAgent").isBrowser("Oculus Browser >= 6") && b("gkx")("1188589")
        }
        return !1
    }
}
), null);
__d("concatMap", [], (function(a, b, c, d, e, f) {
    e.exports = a;
    function a(a, b) {
        var c = -1, d = b.length, e = [], f;
        while (++c < d)
            f = a(b[c], c, b),
            Array.isArray(f) ? Array.prototype.push.apply(e, f) : Array.prototype.push.call(e, f);
        return e
    }
}
), null);
__d("LitestandEllipsis", ["BinarySearch", "DOMQuery", "concatMap", "getElementText", "isTextNode"], (function(a, b, c, d, e, f) {
    var g, h = "\u2026";
    function i(a, b, c) {
        a = a.slice(0, b).join(" ") + h;
        c === 0 && (a = a.trimLeft());
        return a
    }
    function j(a, b, c) {
        a = a.substr(0, b).trimRight() + h;
        c === 0 && (a = a.trimLeft());
        return a
    }
    a = {
        add: function(a, c, d) {
            d = d || a;
            b("DOMQuery").scry(a, "br").forEach(function(a) {
                a.parentNode && a.parentNode.removeChild(a)
            });
            var e = d.offsetHeight || 0;
            if (e <= c)
                return;
            var f = l(a)
              , g = f.length - 1
              , m = c + 1;
            e = function() {
                var a = b("getElementText")(f[g]).split(/[\n\s]/g)
                  , c = b("BinarySearch").greatestLowerBound(function(b) {
                    k(f[g], i(a, b, g));
                    return d.offsetHeight || 0
                }, m, 0, a.length, function(a, b) {
                    return a - b
                });
                if (c > 0) {
                    k(f[g], i(a, c, g));
                    return "break"
                }
                c = b("BinarySearch").greatestLowerBound(function(b) {
                    k(f[g], j(a[0], b, g));
                    return d.offsetHeight || 0
                }, m, 0, a[0].length - h.length - 2, function(a, b) {
                    return a - b
                });
                if (c > -1) {
                    k(f[g], j(a[0], c, g));
                    return "break"
                }
                k(f[g], "");
                g--
            }
            ;
            while (g >= 0) {
                a = e();
                if (a === "break")
                    break
            }
        }
    };
    function k(a, b) {
        g = g || (a.textContent != null ? "textContent" : "innerText"),
        a[g] = b
    }
    function l(a) {
        return b("isTextNode")(a) ? [a] : b("concatMap")(l, Array.from(a.childNodes))
    }
    e.exports = a
}
), null);
__d("isRTL", ["UnicodeBidi", "UnicodeBidiDirection"], (function(a, b, c, d, e, f) {
    e.exports = a;
    function a(a) {
        return b("UnicodeBidi").getDirection(a) === b("UnicodeBidiDirection").RTL
    }
}
), null);
__d("UserActivity", ["requireCond", "cr:1634616"], (function(a, b, c, d, e, f) {
    e.exports = b("cr:1634616")
}
), null);
__d("Middot.react", ["React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React");
    (g || (g = b("stylex"))).inject(".spvqvc9t{clip:rect(0,0,0,0)}", 1);
    g.inject(".qfa2pajt{clip-path:polygon(0 0,0 0,0 0,0 0)}", 1);
    g.inject(".s8sjc6am{position:absolute}", 1);
    function a(a) {
        return h.jsxs("span", babelHelpers["extends"]({}, a, {
            children: [h.jsx("span", {
                className: "s8sjc6am qfa2pajt spvqvc9t",
                children: "\xa0"
            }), h.jsx("span", {
                "aria-hidden": "true",
                children: " \xb7 "
            })]
        }))
    }
}
), null);
__d("isReactClassComponent", [], (function(a, b, c, d, e, f) {
    e.exports = a;
    function a(a) {
        return Boolean(typeof a === "function" && a.prototype && a.prototype.isReactComponent)
    }
}
), null);
__d("UserActivityBlue", ["Arbiter", "Event", "isTruthy"], (function(a, b, c, d, e, f) {
    var g = 5e3
      , h = 500
      , i = -5
      , j = Date.now()
      , k = j
      , l = !1
      , m = Date.now()
      , n = document.hasFocus ? document.hasFocus() : !0
      , o = 0
      , p = Date.now()
      , q = -1
      , r = -1
      , s = {
        EVENT_INTERVAL_MS: h,
        subscribeOnce: function(a) {
            var b = s.subscribe(function(c, d) {
                s.unsubscribe(b),
                a(d)
            });
            return b
        },
        subscribe: function(a) {
            return b("Arbiter").subscribe("useractivity/activity", a)
        },
        unsubscribe: function(a) {
            a.unsubscribe()
        },
        isActive: function(a) {
            return new Date() - j < (b("isTruthy")(a) ? a : g)
        },
        isOnTab: function() {
            return n
        },
        hasBeenInactive: function() {
            return l
        },
        resetActiveStatus: function() {
            n = !0,
            l = !1
        },
        getLastInActiveEnds: function() {
            return m
        },
        getLastActive: function() {
            return j
        },
        setIdleTime: function(a) {
            o = a
        },
        getLastLeaveTime: function() {
            return p
        },
        getLastInformTime: function() {
            return k
        },
        reset: function() {
            j = Date.now(),
            k = j,
            l = !1,
            m = Date.now(),
            n = document.hasFocus ? document.hasFocus() : !0,
            o = 0,
            p = Date.now(),
            q = -1,
            r = -1
        }
    };
    function t(a) {
        v(a, h)
    }
    function u(a) {
        v(a, 0)
    }
    function v(c, d) {
        d === void 0 && (d = 0);
        var e = a.MouseEvent;
        if (e && c instanceof e) {
            if (/^mouse(enter|leave|move|out|over)$/.test(c.type) && c.pageX == q && c.pageY == r)
                return;
            q = c.pageX;
            r = c.pageY
        }
        j = Date.now();
        e = j - k;
        e > d ? (k = j,
        n || (p = j),
        e >= (o || g) && (l = !0,
        m = j),
        b("Arbiter").inform("useractivity/activity", {
            event: c,
            idleness: e,
            last_inform: k
        })) : e < i && (k = j)
    }
    function c(a) {
        n = !0,
        m = Date.now(),
        u(a)
    }
    function d(a) {
        n = !1,
        l = !0,
        p = Date.now()
    }
    b("Event").listen(window, "scroll", t);
    b("Event").listen(window, "focus", c);
    b("Event").listen(window, "blur", d);
    b("Event").listen(document.documentElement, {
        keydown: t,
        mouseover: t,
        mousemove: t,
        click: t
    }, void 0, void 0, {
        passive: !0
    });
    b("Arbiter").subscribe("Event/stop", function(a, b) {
        t(b.event)
    });
    e.exports = s
}
), null);
__d("XQuickPromotionSimpleLoggingController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/qp/action/log/", {
        qp_id: {
            type: "Int",
            required: !0
        },
        qp_action: {
            type: "Enum",
            enumType: 1
        },
        qp_instance_log_data: {
            type: "StringToStringMap",
            defaultValue: {}
        },
        qp_event: {
            type: "String"
        },
        privacy_mutation_token: {
            type: "String"
        }
    })
}
), null);
