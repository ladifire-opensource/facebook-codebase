if (self.CavalryLogger) {
    CavalryLogger.start_js(["is\/7l"]);
}

__d("FBLoadShimmer.react", ["cx", "LoadingMarker.react", "React", "UserAgent", "joinClasses"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a(a) {
        var c = a.className
          , d = a.height
          , e = a.style
          , f = a.width;
        a = a.disableAnimation;
        var g = b("UserAgent").isBrowser("Safari") && b("UserAgent").isPlatform("Mac OS X");
        a = "_1tt" + (a ? " _300z" : "") + (g ? " _72_f" : "");
        g = h.jsx("div", {
            className: b("joinClasses")(c, a),
            style: babelHelpers["extends"]({
                height: d != null ? d + "px" : void 0,
                width: f != null ? f + "px" : void 0
            }, e)
        });
        return h.jsx(b("LoadingMarker.react"), {
            children: g
        })
    }
}
), null);
__d("XUIError.react", ["cx", "React", "ReactDOM", "XUIError", "joinClasses"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = "_1tp7";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            this.props.xuiError != null && b("XUIError").__setReactError(b("ReactDOM").findDOMNode(this), {
                message: this.props.xuiError,
                position: this.props.xuiErrorPosition,
                alignh: this.props.xuiErrorAlignh
            })
        }
        ;
        d.componentDidUpdate = function() {
            this.props.xuiError == null ? b("XUIError").__clearReactError(b("ReactDOM").findDOMNode(this)) : b("XUIError").__setReactError(b("ReactDOM").findDOMNode(this), {
                message: this.props.xuiError,
                position: this.props.xuiErrorPosition,
                alignh: this.props.xuiErrorAlignh
            })
        }
        ;
        d.componentWillUnmount = function() {
            b("XUIError").__clearReactError(b("ReactDOM").findDOMNode(this))
        }
        ;
        d.render = function() {
            var a = h.Children.only(this.props.children);
            this.props.xuiError != null && (a = h.cloneElement(a, {
                className: b("joinClasses")(a.props.className, i)
            }));
            return a
        }
        ;
        return c
    }(h.Component);
    e.exports = a
}
), null);
__d("formatDurationSeconds", ["fbt", "padNumber"], (function(a, b, c, d, e, f, g) {
    e.exports = a;
    function a(a) {
        var c = Math.floor(a / 3600)
          , d = Math.floor(a / 60 % 60);
        a = Math.floor(a % 60);
        if (c)
            return g._("{hours}:{minutes}:{seconds}", [g._param("hours", c), g._param("minutes", b("padNumber")(d, 2)), g._param("seconds", b("padNumber")(a, 2))]);
        else
            return g._("{minutes}:{seconds}", [g._param("minutes", d), g._param("seconds", b("padNumber")(a, 2))])
    }
}
), null);
__d("XUISubNavigationLoader", ["csx", "cx", "AjaxPipeRequest", "CSS", "DOM", "FIGEntityPageLayout", "PageHooks", "PageTransitions", "PageTransitionsRegistrar", "Parent", "Run", "createCancelableFunction"], (function(a, b, c, d, e, f, g, h) {
    f.setLoading = w;
    f.setSelected = x;
    f.cancelRequest = y;
    f.sendRequest = a;
    f.registerHandler = c;
    f.onLeave = d;
    var i = "._3o_h"
      , j = "content_container"
      , k = "_4t7n"
      , l = "._4t7n"
      , m = "_2fvv"
      , n = "_2yap"
      , o = "._2yap"
      , p = "._6ng8"
      , q = "_6ng8"
      , r = null
      , s = []
      , t = []
      , u = null;
    function v(a) {
        for (var c = 0; c < s.length; c++) {
            var d = s[c];
            if (d(a))
                return !0
        }
        b("Run").onLeave(function() {
            b("PageTransitionsRegistrar").removeHandler(v, 6),
            t.forEach(function(a) {
                return a()
            }),
            t = [],
            s = []
        });
        return !1
    }
    function w(a, c) {
        b("CSS").conditionClass(a, k, c)
    }
    function x(a, c) {
        c === void 0 && (c = !1);
        var d = b("Parent").byClass(a, m);
        b("DOM").scry(d, i).forEach(function(a) {
            b("DOM").remove(a)
        });
        b("DOM").scry(d, o).forEach(function(a) {
            b("CSS").removeClass(a, n)
        });
        c && b("DOM").scry(d, p).forEach(function(a) {
            b("CSS").removeClass(a, q)
        });
        b("CSS").addClass(a, n);
        c && b("CSS").addClass(a, q)
    }
    function y(a) {
        r && (r.abort(),
        r = null,
        b("DOM").scry(b("Parent").byClass(a, m), l).forEach(function(a) {
            b("CSS").removeClass(a, k)
        }))
    }
    function a(a, c, d, e) {
        e === void 0 && (e = !1),
        y(d),
        x(d, e),
        w(d, !0),
        b("PageHooks").runHooks("onleavehooks"),
        r = new (b("AjaxPipeRequest"))(j,c).setData(babelHelpers["extends"]({}, a.getQueryData(), {
            path: a.getPath()
        })).setFirstResponseHandler(function() {
            w(d, !1)
        }).setFinallyHandler(function() {
            r = null,
            b("FIGEntityPageLayout").update(),
            b("PageTransitions").transitionComplete(!0)
        }).send()
    }
    function c(a) {
        s.length || b("PageTransitionsRegistrar").registerHandler(v, 6),
        u && u.remove(),
        s.push(a)
    }
    function d(a) {
        !s.length && !u && (u = b("Run").onLeave(function() {
            t.forEach(function(a) {
                return a()
            }),
            t = []
        }));
        a = b("createCancelableFunction")(a);
        t.push(a);
        return {
            remove: function() {
                a.cancel()
            }
        }
    }
}
), null);
__d("EntityPageDirectionalDockingElement", ["DirectionalDockingElement", "EntityPageDockingElementController"], (function(a, b, c, d, e, f) {
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.register = function() {
            b("EntityPageDockingElementController").register(this.__queryDOM.bind(this), this.__updateWithCache.bind(this))
        }
        ;
        return c
    }(b("DirectionalDockingElement"));
    e.exports = a
}
), null);
__d("EntityPageDockingElementController", ["Event", "SubscriptionsHandler", "XUISubNavigationLoader", "queryThenMutateDOM", "throttle"], (function(a, b, c, d, e, f) {
    f.register = a;
    var g = []
      , h = null
      , i = b("throttle")(function() {
        b("queryThenMutateDOM")(function() {
            return g.forEach(function(a) {
                return a.queryDOM()
            })
        }, function() {
            return g.forEach(function(a) {
                return a.updateWithCache()
            })
        }, "EntityPageDockingElementController")
    });
    function a(a, c) {
        h || (h = new (b("SubscriptionsHandler"))(),
        h.addSubscriptions(b("Event").listen(window, "scroll", i), b("Event").listen(window, "resize", i), b("XUISubNavigationLoader").onLeave(function() {
            g = [],
            h && (h.release(),
            h = null)
        })));
        a = {
            queryDOM: a,
            updateWithCache: c
        };
        g.push(a)
    }
}
), null);
__d("getEntityPageDockingElementOffset", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, b, c) {
        var d = c.getRootBoundingClientRect()
          , e = d.height
          , f = d.top;
        d = c.getPlaceholderBoundingClientRect();
        var g = d.top;
        d = a - e;
        c = c.getSections();
        if (c) {
            c = Array.from(c).map(function(a) {
                return g + a.getBoundingClientRect().top - f
            });
            c.sort(function(a, b) {
                return a - b
            });
            for (var h = 0, i = c.length; h < i; h++) {
                var j = c[h] - g;
                if (e - j < a - b) {
                    d = b - j;
                    break
                }
            }
        }
        return d
    }
}
), null);
__d("EntityPageRegion", ["DirectionalDockingElement", "getElementRect", "getEntityPageDockingElementOffset", "memoize", "uniqueID"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, c, d) {
            var e = this;
            this.$9 = function() {
                return b("getElementRect")(e.$1.getPlaceholder())
            }
            ;
            this.$10 = function() {
                return b("getElementRect")(e.$1.getRoot())
            }
            ;
            this.$1 = a;
            this.$2 = b("uniqueID")();
            this.$3 = 0;
            this.$4 = !1;
            this.$5 = d;
            this.$6 = c;
            this.$7 = 0;
            this.$8 = !1;
            this.getPlaceholderBoundingClientRect = b("memoize")(this.$9);
            this.getRootBoundingClientRect = b("memoize")(this.$10)
        }
        var c = a.prototype;
        c.calculateOffset = function(a, c) {
            if (this.$5)
                return this.$5(a, c, this);
            if (this.getRootBoundingClientRect().height + c < a)
                return c;
            else
                return b("getEntityPageDockingElementOffset")(a, c, this)
        }
        ;
        c.getID = function() {
            return this.$2
        }
        ;
        c.getOffset = function() {
            return this.$3
        }
        ;
        c.getTop = function() {
            return this.$7
        }
        ;
        c.getSections = function() {
            var a = this.$6;
            return !a ? null : this.$1.getPlaceholder().querySelectorAll(a)
        }
        ;
        c.setOffset = function(a) {
            if (a === this.$3)
                return;
            this.$3 = a;
            this.$4 = !0
        }
        ;
        c.setTop = function(a) {
            if (a === this.$7)
                return;
            this.$7 = a;
            this.$8 = !0
        }
        ;
        c.update = function() {
            var a = this.$4
              , c = this.$8
              , d = this.$1
              , e = this.$3
              , f = this.$7;
            d instanceof b("DirectionalDockingElement") && c ? a ? d.setOffsetAndTop(e, f) : d.setTop(f) : a && d.setOffset(e);
            this.$4 = !1;
            this.$8 = !1;
            this.getPlaceholderBoundingClientRect = b("memoize")(this.$9);
            this.getRootBoundingClientRect = b("memoize")(this.$10)
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("FIGEntityPageLayout", ["Arbiter", "DirectionalDockingElement", "EntityPageConfig", "EntityPageDirectionalDockingElement", "EntityPageRegion", "Event", "MutationObserver", "ResizeEventHandler", "Run", "SubscriptionsHandler", "ViewportBounds", "XUISubNavigationLoader", "getViewportDimensions", "queryThenMutateDOM", "removeFromArray", "throttle"], (function(a, b, c, d, e, f) {
    "use strict";
    f.update = m;
    f.register = a;
    f.registerAcrossTransitions = c;
    var g = []
      , h = null
      , i = null
      , j = null
      , k = null
      , l = {
        attributes: !1,
        characterData: !0,
        childList: !0,
        subtree: !0
    };
    function m() {
        b("queryThenMutateDOM")(function() {
            var a = b("getViewportDimensions")().height
              , c = b("ViewportBounds").getTop();
            g.sort(function(a, b) {
                return a.getPlaceholderBoundingClientRect().top < b.getPlaceholderBoundingClientRect().top ? -1 : 1
            });
            g.forEach(function(b) {
                var d = b.getRootBoundingClientRect()
                  , e = d.width;
                d = b.getPlaceholderBoundingClientRect();
                var f = d.left
                  , h = d.top
                  , i = c;
                g.forEach(function(a) {
                    var c = a.getRootBoundingClientRect()
                      , d = c.height;
                    c = c.width;
                    var g = a.getPlaceholderBoundingClientRect()
                      , j = g.left;
                    g = g.top;
                    b !== a && g + d <= h && Math.min(f + e, j + c) >= Math.max(f, j) && (i += d + a.getOffset() - a.getTop())
                });
                d = b.calculateOffset(a, i);
                b.setOffset(d);
                b.setTop(i)
            })
        }, function() {
            g.forEach(function(a, b) {
                a.update()
            })
        }, "EntityPageLayout")
    }
    function n() {
        o();
        j || (j = new (b("SubscriptionsHandler"))(),
        j.addSubscriptions(b("Run").onLeave(p)));
        return j
    }
    function o() {
        i || (i = new (b("SubscriptionsHandler"))(),
        i.addSubscriptions(b("ViewportBounds").subscribe("change", m), b("Arbiter").subscribe("footerLoaded", m), b("Event").listen(window, "resize", b("throttle")(m)), b("XUISubNavigationLoader").onLeave(function() {
            i && (i.release(),
            i = null),
            k && (k.disconnect(),
            k = null),
            h && (h = null)
        })));
        return i
    }
    function p() {
        j && (j.release(),
        j = null)
    }
    function q(a, c, d, e, f) {
        var i = new (b("EntityPageRegion"))(d,c ? c.join(",") : null,f);
        g.push(i);
        m();
        e.addSubscriptions(d.subscribe("changedheight", m), b("Event").listen(a, "resize", m));
        b("EntityPageConfig").hasMutationObserver && (k || (h = new (b("ResizeEventHandler"))(m),
        k = new (b("MutationObserver"))(h.handleEvent)),
        k.observe(a, l));
        return function() {
            b("removeFromArray")(g, i),
            g.length === 0 && p()
        }
    }
    function a(a, c, d, e) {
        var f = d ? new d(a) : new (b("DirectionalDockingElement"))(a)
          , g = q(a, c, f, n(), e);
        return {
            remove: function() {
                g(),
                f.destroy()
            }
        }
    }
    function c(a, c, d, e) {
        var f = d ? new d(a) : new (b("EntityPageDirectionalDockingElement"))(a)
          , g = q(a, c, f, o(), e);
        return {
            remove: function() {
                g(),
                f.destroy()
            }
        }
    }
}
), null);
__d("Tahoe", [], (function(a, b, c, d, e, f) {
    var g = null;
    a = {
        get: function() {
            return g
        },
        set: function(a) {
            g = a
        }
    };
    b = a;
    e.exports = b
}
), null);
__d("LayoutColumn.react", ["cx", "React", "joinClasses"], (function(a, b, c, d, e, f, g) {
    var h = b("React");
    function a(a, c) {
        var d = a.className
          , e = a.children;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["className", "children"]);
        return h.jsx("div", babelHelpers["extends"]({
            ref: c
        }, a, {
            className: b("joinClasses")(d, "_4bl7"),
            children: e
        }))
    }
    c = h.forwardRef(a);
    e.exports = c
}
), null);
__d("LayoutFillColumn.react", ["cx", "React", "joinClasses"], (function(a, b, c, d, e, f, g) {
    var h = b("React");
    function a(a, c) {
        var d = a.className
          , e = a.children;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["className", "children"]);
        return h.jsx("div", babelHelpers["extends"]({
            ref: c
        }, a, {
            className: b("joinClasses")(d, "_4bl9"),
            children: e
        }))
    }
    c = h.forwardRef(a);
    e.exports = c
}
), null);
__d("Layout.react", ["cx", "LayoutColumn.react", "LayoutFillColumn.react", "React", "joinClasses"], (function(a, b, c, d, e, f, g) {
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = !1
              , d = !1
              , e = this.props
              , f = e.children
              , g = e.className;
            e = babelHelpers.objectWithoutPropertiesLoose(e, ["children", "className"]);
            h.Children.forEach(f, function(b) {
                if (!b)
                    return;
                b.type === c.FillColumn ? d = !0 : d && (a = !0)
            });
            return h.jsx("div", babelHelpers["extends"]({}, e, {
                className: b("joinClasses")(g, a ? "_5aj7" : "clearfix _ikh"),
                children: f
            }))
        }
        ;
        return c
    }(h.Component);
    e.exports = a;
    a.Column = b("LayoutColumn.react");
    a.FillColumn = b("LayoutFillColumn.react")
}
), null);
__d("isBusinessURI", ["isFacebookURI"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        return b("isFacebookURI")(a) && a.getSubdomain() === "business"
    }
}
), null);
__d("flatMapArray", [], (function(a, b, c, d, e, f) {
    e.exports = a;
    var g = Array.prototype.push;
    function a(a, b) {
        var c = [];
        for (var d = 0; d < a.length; d++) {
            var e = b.call(a, a[d], d);
            if (Array.isArray(e))
                g.apply(c, e);
            else if (e != null)
                throw new TypeError('flatMapArray: Callback must return an array or null, received "' + e.toString() + '" instead')
        }
        return c
    }
}
), null);
__d("XLiveScheduleSubscriptionController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/live_video_schedule/subscription/", {
        video_broadcast_schedule_id: {
            type: "FBID"
        },
        video_id: {
            type: "FBID"
        },
        subscribe: {
            type: "Bool",
            defaultValue: !1
        },
        origin: {
            type: "String"
        },
        suborigin: {
            type: "String"
        }
    })
}
), null);
__d("XVideoHomeShowController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/watch/{?section_id}/", {
        from: {
            type: "String"
        },
        section_id: {
            type: "String"
        },
        query: {
            type: "String"
        },
        video_id: {
            type: "String"
        },
        upstream_player_source: {
            type: "Enum",
            enumType: 1
        },
        start_timestamp_s: {
            type: "Int"
        },
        autoplay_expanded: {
            type: "Bool",
            defaultValue: !1
        }
    })
}
), null);
