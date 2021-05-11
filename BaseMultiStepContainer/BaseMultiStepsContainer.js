__d("BaseMultiStepContainer.react", ["FocusRegion.react", "Locale", "React", "emptyFunction", "focusScopeQueries", "recoverableViolation", "stylex", "useDebounced", "useDynamicCallbackDANGEROUS", "useResizeObserver"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React"), i = b("Locale").isRTL(), j = function(a) {
        return b("FocusRegion.react").FocusRegion != null ? h.jsx(b("FocusRegion.react").FocusRegion, babelHelpers["extends"]({}, a)) : a.children
    };
    function a(a, c) {
        var d = a.align
          , e = d === void 0 ? "top" : d;
        d = a.children;
        var f = a.fitContentWidth
          , k = f === void 0 ? !1 : f;
        f = a.onPageChange;
        a = f === void 0 ? b("emptyFunction") : f;
        f = h.useState([]);
        var l = f[0]
          , m = f[1];
        f = h.useState(!1);
        var n = f[0]
          , o = f[1];
        f = h.useState(0);
        var p = f[0]
          , q = f[1];
        f = h.useState(void 0);
        var r = f[0]
          , s = f[1];
        f = h.useState(void 0);
        var t = f[0]
          , u = f[1]
          , v = h.useCallback(function(a, b) {
            s(a),
            k && u(b)
        }, [k]);
        f = h.useCallback(function(a) {
            return v(a.height, a.width)
        }, [v]);
        var w = b("useResizeObserver")(f)
          , x = h.useCallback(function(a) {
            a != null && v(a.clientHeight, a.clientWidth),
            w(a)
        }, [w, v]);
        f = b("useDebounced")(function(a) {
            window.requestAnimationFrame(function() {
                o(!0),
                q(function(b) {
                    m(function(c) {
                        return c.slice(0, b).concat(a)
                    });
                    return b + 1
                })
            })
        }, 350, !0);
        var y = h.useCallback(function(a, c) {
            window.requestAnimationFrame(function() {
                var d = l.indexOf(a)
                  , e = c == null ? void 0 : c.index;
                if (e != null && e > d) {
                    b("recoverableViolation")("Attempting to return to page with index " + e + ", which does not  exist. Please provide an index less than " + d + " and greater than or equal to 0.", "BaseMultiStepContainer");
                    return
                }
                e = (e = e) != null ? e : d;
                if (e < 0) {
                    b("recoverableViolation")("Attempting to close a page that does not exist anymore.", "BaseMultiStepContainer");
                    return
                }
                o(!0);
                q(e)
            })
        }, [l])
          , z = b("useDynamicCallbackDANGEROUS")(a);
        h.useEffect(function() {
            z && z(p)
        }, [z, p]);
        a = h.useCallback(function() {
            return o(!1)
        }, []);
        var A = h.useCallback(function(a) {
            a.currentTarget.scrollLeft = 0,
            a.currentTarget.scrollTop = 0
        }, []);
        return h.jsx(j, {
            autoRestoreFocus: !0,
            recoverFocusQuery: b("focusScopeQueries").headerFirstTabbableSecondScopeQuery,
            children: h.jsx("div", {
                className: "dbpd2lw6 l9j0dhe7 stjgntxs ni8dbmo4 lzcic4wl idiwt2bm" + (n ? " b7h9ocf4 s48hqc9n ms05siws h3qk65th" : ""),
                "data-testid": void 0,
                onScroll: A,
                onTransitionEnd: a,
                ref: c,
                style: {
                    height: r,
                    width: t
                },
                children: [h.jsx("div", {
                    "aria-hidden": p !== 0 ? !0 : void 0,
                    className: (g || (g = b("stylex"))).dedupe(e === "bottom" ? {
                        "bottom-1": "i09qtzwb"
                    } : {}, e === "top" ? {
                        "top-1": "kr520xx4"
                    } : null, {
                        "opacity-1": "b5wmifdl",
                        "transition-duration-1": "ms05siws",
                        "transition-property-1": "pnx7fd3z",
                        "transition-timing-function-1": "b7h9ocf4"
                    }, r != null ? {
                        "position-1": "pmk7jnqg",
                        "start-1": "j9ispegn"
                    } : null, !n && p !== 0 ? {
                        "visibility-1": "kr9hpln1"
                    } : null, p === 0 ? {
                        "opacity-1": "pedkr2u6"
                    } : null, k ? null : {
                        "width-1": "k4urcfbm"
                    }),
                    ref: p === 0 ? x : null,
                    style: {
                        transform: "translateX(" + (i ? 1 : -1) * p + "00%) translateZ(1px)"
                    },
                    children: h.jsx(j, {
                        autoFocusQuery: b("focusScopeQueries").headerFirstTabbableSecondScopeQuery,
                        containFocusQuery: b("focusScopeQueries").tabbableScopeQuery,
                        disabled: p !== 0,
                        children: d(f)
                    })
                }, 0)].concat(l.map(function(a, c) {
                    return h.jsx("div", {
                        "aria-hidden": p !== c + 1 ? !0 : void 0,
                        className: (g || (g = b("stylex"))).dedupe(e === "bottom" ? {
                            "bottom-1": "i09qtzwb"
                        } : {}, e === "top" ? {
                            "top-1": "kr520xx4"
                        } : null, {
                            "opacity-1": "b5wmifdl",
                            "transition-duration-1": "ms05siws",
                            "transition-property-1": "pnx7fd3z",
                            "transition-timing-function-1": "b7h9ocf4"
                        }, {
                            "position-1": "pmk7jnqg",
                            "start-1": "j9ispegn"
                        }, !n && p !== c + 1 ? {
                            "visibility-1": "kr9hpln1"
                        } : null, p === c + 1 ? {
                            "opacity-1": "pedkr2u6"
                        } : null, k ? null : {
                            "width-1": "k4urcfbm"
                        }),
                        ref: p === c + 1 ? x : null,
                        style: {
                            transform: "translateX(" + (i ? 1 : -1) * (p - c - 1) + "00%) translateZ(1px)"
                        },
                        children: h.jsx(j, {
                            autoFocusQuery: b("focusScopeQueries").headerFirstTabbableSecondScopeQuery,
                            containFocusQuery: b("focusScopeQueries").tabbableScopeQuery,
                            disabled: p !== c + 1,
                            children: h.jsx(a, {
                                onReturn: function(b) {
                                    return y(a, b)
                                }
                            })
                        })
                    }, c + 1)
                }), [h.jsx("div", {
                    "aria-hidden": !0,
                    className: "b7h9ocf4 pnx7fd3z ms05siws b5wmifdl j9ispegn pmk7jnqg" + (k !== !0 ? " k4urcfbm" : ""),
                    style: {
                        transform: "translateX(" + (i ? 1 : -1) * (p - l.length - 1) + "00%) translateZ(1px)"
                    }
                }, l.length + 1)])
            })
        })
    }
    c = h.forwardRef(a);
    e.exports = c
}
), null);