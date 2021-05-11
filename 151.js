if (self.CavalryLogger) {
    CavalryLogger.start_js(["ThjD1"]);
}

__d("GeoPrivateAccessibleInput.react", ["GeoPrivateMakeComponent", "React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React");
    function a(a, c) {
        var d = a.disabled;
        d = d === void 0 ? !1 : d;
        var e = a.xstyle;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["disabled", "xstyle"]);
        return h.jsx("input", babelHelpers["extends"]({}, a, {
            className: (g || (g = b("stylex")))([i.input, d && i.inputDisabled, e]),
            disabled: d,
            ref: c
        }))
    }
    var i = {
        input: {
            appearance: "e92713mn",
            cursor: "svsqgeze",
            height: "lftrkhxp",
            start: "jeej7n5h",
            marginTop: "qbdq5e12",
            marginEnd: "j90q0chr",
            marginBottom: "rbzcxh88",
            marginStart: "h8e39ki1",
            opacity: "eq4fccyu",
            outline: "qnavoh4n",
            position: "rjrpm8ub",
            top: "pu1cs6ci",
            width: "tds9wb2m",
            zIndex: "i6alm2u7"
        },
        inputDisabled: {
            pointerEvents: "lxm2ky87"
        }
    };
    c = b("GeoPrivateMakeComponent").makeGeoComponent("GeoPrivateAccessibleInput", h.forwardRef(a));
    e.exports = c
}
), null);
__d("GeoPrivateBinaryInputLayout.react", ["FDSPrivateDisabledFocusContext", "GeoPrivateAccessibleInput.react", "GeoPrivateInteractiveFrame.react", "GeoPrivateMakeComponent", "React", "stylex", "useBoolean", "useGeoTheme"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React");
    function a(a, c) {
        var d = a.children
          , e = a["data-testid"];
        e = a.describedBy;
        var f = a.id
          , j = a.checked
          , l = a.isDisabled;
        l = l === void 0 ? !1 : l;
        var n = a.isIconVisible
          , o = a.labelledBy
          , p = a.name
          , q = a.onChange
          , r = a.type;
        a = a.value;
        var s = b("useBoolean")(!1)
          , t = s.value
          , u = s.setTrue;
        s = s.setFalse;
        var v = h.useContext(b("FDSPrivateDisabledFocusContext"))
          , w = h.useCallback(function(a) {
            return q == null ? void 0 : q(a.target.checked, a)
        }, [q]);
        return h.jsx("div", {
            className: (g || (g = b("stylex")))(i.root),
            children: h.jsxs(b("GeoPrivateInteractiveFrame.react"), {
                context: r === "checkbox" ? "control" : "rounded",
                isDisabled: l,
                xstyle: k({
                    isDisabled: l,
                    isActive: t
                }),
                children: [h.jsx(b("GeoPrivateAccessibleInput.react"), {
                    "aria-checked": j,
                    "aria-describedby": e,
                    "aria-disabled": l,
                    "aria-labelledby": o,
                    checked: j,
                    "data-testid": void 0,
                    disabled: l,
                    id: f,
                    name: p,
                    onChange: w,
                    onMouseDown: u,
                    onMouseLeave: s,
                    onMouseUp: s,
                    ref: c,
                    tabIndex: v ? -1 : void 0,
                    type: r,
                    value: a
                }), h.jsx("div", {
                    className: g(m({
                        isVisible: (t = n) != null ? t : j
                    })),
                    children: d
                })]
            })
        })
    }
    var i = {
        root: {
            display: "rxo4gu2c",
            position: "s7wjoji2",
            transform: "juldah21"
        }
    }
      , j = {
        root: {
            boxSizing: "puibpoiz",
            paddingTop: "leumhs8v",
            paddingEnd: "iagzkrdz",
            paddingBottom: "my9zkn4v",
            paddingStart: "it3lqkse",
            justifyContent: "olu7ajlf",
            height: "glti7ijo",
            width: "nwjmkgrz"
        }
    };
    function k(a) {
        var c = a.isDisabled;
        a = a.isActive;
        var d = b("useGeoTheme")();
        d = d.selectInteractiveColorPalette;
        return [j.root, !c && a && d({
            color: "flat",
            isFocused: a
        })]
    }
    var l = {
        root: {
            display: "rwb8dzxj",
            opacity: "hluqg2un",
            transform: "rlkkneih",
            transitionProperty: "b44tucdu"
        },
        iconVisible: {
            opacity: "tjurj83n",
            transform: "juldah21"
        }
    };
    function m(a) {
        a = a.isVisible;
        var c = b("useGeoTheme")();
        c = c.selectTransition;
        return [c({
            duration: "fast",
            timing: "strong"
        }), l.root, a && l.iconVisible]
    }
    c = b("GeoPrivateMakeComponent").makeGeoComponent("GeoPrivateBinaryInputLayout", h.forwardRef(a));
    e.exports = c
}
), null);
__d("VideoUploadRetries", ["EventEmitter", "Random", "fastDeepCopy", "qex", "$InternalEnum"], (function(a, b, c, d, e, f) {
    "use strict";
    f.getActivePolicy = k;
    var g = b("$InternalEnum")({
        PREDICATE: "predicate",
        DELAY_RETRIES: "delay-retries",
        TOTAL_RETRIES: "total-retries",
        TOTAL_TIME: "total-time"
    })
      , h = function() {
        function a(a) {
            this.$1 = 0,
            this.$2 = 0,
            this.$4 = null,
            this.$5 = null,
            this.$3 = Date.now(),
            this.$6 = a,
            this.$7 = new (b("EventEmitter"))()
        }
        var c = a.prototype;
        c.resetDelay = function() {
            this.$1 = 0,
            this.$5 = null
        }
        ;
        c.addListener = function(a, b) {
            return this.$7.addListener(a, b)
        }
        ;
        c.$8 = function() {
            var a = this.$6.backoff_ms
              , c = a.initial;
            c += a.exp_base * Math.pow(a.exp_multiplier, this.$1 - 1);
            c = Math.min(c, a.max);
            c += (b("Random").random() - .5) * a.jitter;
            return Math.round(c)
        }
        ;
        c.getTotalRetryCount = function() {
            return this.$2
        }
        ;
        c.$9 = function() {
            return this.$5 === null
        }
        ;
        c.handleRetry = function(a) {
            this.$4 = a.context;
            this.$5 = this.$10(a.predicate);
            if (this.$9()) {
                this.$1++;
                this.$2++;
                var b = this.$8();
                this.$7.emit("retry-attempted", {
                    since_started_ms: this.$11(),
                    retry_context: this.$4,
                    delay_retry_count: this.$1,
                    total_retry_count: this.$2,
                    backoff_ms: b
                });
                a.retryHandler(b)
            } else
                this.$7.emit("retries-abandoned", {
                    since_started_ms: this.$11(),
                    retry_context: this.$4,
                    delay_retry_count: this.$1,
                    total_retry_count: this.$2,
                    abandon_reason: this.$5
                }),
                a.failureHandler()
        }
        ;
        c.$11 = function() {
            return Date.now() - this.$3
        }
        ;
        c.$10 = function(a) {
            if (a != null && a() === !1)
                return g.PREDICATE;
            a = this.$6.limits;
            if ((a == null ? void 0 : a.delay_retry_count) != null && this.$1 >= a.delay_retry_count)
                return g.DELAY_RETRIES;
            if ((a == null ? void 0 : a.total_retry_count) != null && this.$2 >= a.total_retry_count)
                return g.TOTAL_RETRIES;
            return (a == null ? void 0 : a.total_time_ms) != null && a.total_time_ms <= this.$11() ? g.TOTAL_TIME : null
        }
        ;
        return a
    }()
      , i = {
        backoff_ms: {
            initial: 400,
            jitter: 100,
            exp_base: 100,
            exp_multiplier: 1.5,
            max: 8e3
        },
        limits: {
            total_retry_count: 500,
            total_time_ms: 1e3 * 60 * 60
        }
    }
      , j = null;
    function k(a) {
        a === void 0 && (a = !1);
        if (a || j == null) {
            var c;
            j = b("fastDeepCopy")(i);
            a = function(a, b) {
                a !== null && a !== void 0 && b(a)
            }
            ;
            var d = j.backoff_ms
              , e = j.limits;
            a((c = b("qex"))._("1661399"), function(a) {
                return d.initial = a
            });
            a(c._("1661400"), function(a) {
                return d.jitter = a
            });
            a(c._("1661401"), function(a) {
                return d.exp_base = a
            });
            a(c._("1661402"), function(a) {
                return d.exp_multiplier = a
            });
            a(c._("1661403"), function(a) {
                return d.max = a
            });
            a(c._("1661404"), function(a) {
                return e.total_time_ms = a
            });
            a(c._("1661405"), function(a) {
                return e.delay_retry_count = a
            });
            a(c._("1661406"), function(a) {
                return e.total_retry_count = a
            })
        }
        return j
    }
    a = Object.freeze({
        createState: function(a) {
            return new h((a = a) != null ? a : k())
        }
    });
    f.VideoUploadRetries = a
}
), null);
