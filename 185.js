if (self.CavalryLogger) {
    CavalryLogger.start_js(["Jvgnc"]);
}

__d("GroupsBlueMallWebFunnelDefinition", ["CurrentUser", "WebFunnelLogger"], (function(a, b, c, d, e, f) {
    "use strict";
    f.log = a;
    function a(a, c) {
        new (b("WebFunnelLogger"))("GroupsBlueMallWebFunnelDefinition").setAction(a).setSessionKey(b("CurrentUser").getID() + "-" + c).log()
    }
}
), null);
__d("PopoverMenuDynamicIcon", ["csx", "Button", "CSS", "DOM", "DOMQuery"], (function(a, b, c, d, e, f, g) {
    a = function() {
        "use strict";
        function a(a) {
            this._popoverMenu = a
        }
        var c = a.prototype;
        c.enable = function() {
            this._setMenuSubscription = this._popoverMenu.subscribe("setMenu", this._onSetMenu.bind(this))
        }
        ;
        c.disable = function() {
            this._popoverMenu.unsubscribe(this._setMenuSubscription),
            this._setMenuSubscription = null,
            this._removeChangeSubscription()
        }
        ;
        c._onSetMenu = function() {
            this._removeChangeSubscription(),
            this._menu = this._popoverMenu.getMenu(),
            this._changeSubscription = this._menu.subscribe("change", function(a, c) {
                a = c.item;
                c[0] && (a = c[0].item);
                if (!a)
                    return;
                c = a.getIcon();
                c = c ? c.cloneNode(!0) : null;
                a = this._popoverMenu.getTriggerElem();
                var d = b("DOMQuery").scry(a, "._-xe")[0];
                if (d && d.firstChild) {
                    b("DOM").replace(d.firstChild, c);
                    b("CSS").conditionClass(d, "hidden_elem", c == null);
                    return
                }
                d = b("DOMQuery").scry(a, "span._55pe")[0];
                if (d) {
                    var e = d.firstChild;
                    (!e || !b("CSS").hasClass(e, "img")) && b("DOM").prependContent(d, c)
                } else
                    b("Button").setIcon(a, c)
            }
            .bind(this))
        }
        ;
        c._removeChangeSubscription = function() {
            this._changeSubscription && (this._menu.unsubscribe(this._changeSubscription),
            this._changeSubscription = null)
        }
        ;
        return a
    }();
    Object.assign(a.prototype, {
        _setMenuSubscription: null,
        _changeSubscription: null
    });
    e.exports = a
}
), null);
__d("PopoverMenuDynamicTooltip", ["csx", "DOMQuery", "Tooltip"], (function(a, b, c, d, e, f, g) {
    a = function() {
        "use strict";
        function a(a) {
            this._popoverMenu = a,
            this._setMenuSubscription = null,
            this._changeSubscription = null
        }
        var c = a.prototype;
        c.enable = function() {
            this._setMenuSubscription = this._popoverMenu.subscribe("setMenu", this._onSetMenu.bind(this))
        }
        ;
        c.disable = function() {
            this._popoverMenu.unsubscribe(this._setMenuSubscription),
            this._setMenuSubscription = null,
            this._removeChangeSubscription()
        }
        ;
        c._onSetMenu = function() {
            this._removeChangeSubscription(),
            this._menu = this._popoverMenu.getMenu(),
            this._changeSubscription = this._menu.subscribe("change", function(a, c) {
                a = c.item;
                c[0] && (a = c[0].item);
                if (!a)
                    return;
                c = a.getLabel();
                c = c ? c.toString() : null;
                if (!c)
                    return;
                a = this._popoverMenu.getTriggerElem();
                a = b("DOMQuery").scry(a, "span._55pe")[0];
                if (a && a.nodeName) {
                    a = a.parentNode;
                    a && b("Tooltip").set(a, c)
                }
            }
            .bind(this))
        }
        ;
        c._removeChangeSubscription = function() {
            this._changeSubscription && (this._menu.unsubscribe(this._changeSubscription),
            this._changeSubscription = null)
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("StickyPermalink", ["Arbiter", "FIGEntityPageLayout", "Run", "SubscriptionsHandler"], (function(a, b, c, d, e, f) {
    f.init = a;
    function a(a) {
        b("FIGEntityPageLayout").register(a);
        var c = new (b("SubscriptionsHandler"))();
        c.addSubscriptions(b("Arbiter").subscribe("ufi/inputHeightChanged", b("FIGEntityPageLayout").update), b("Arbiter").subscribe("ufi/changed", b("FIGEntityPageLayout").update), b("Run").onLeave(function() {
            c && c.release(),
            c = null
        }))
    }
}
), null);
__d("XUISubNavigationDynamicShortcuts", ["cx", "CSS", "Event", "Run", "SubscriptionsHandler", "ViewportBounds", "clamp", "getViewportDimensions", "throttle"], (function(a, b, c, d, e, f, g) {
    var h = "_2u38"
      , i = 32
      , j = 20;
    a = function() {
        a.init = function(b, c, d) {
            b = new a(b,c,d);
            return b
        }
        ;
        function a(a, c, d) {
            var e = this;
            this.$6 = function() {
                var a = b("getViewportDimensions")().height - b("ViewportBounds").getTop() - b("ViewportBounds").getBottom()
                  , c = e.$3.offsetHeight - e.$5 * i;
                a = b("clamp")(Math.floor((a - c) / i), 0, e.$1);
                if (a === e.$5)
                    return;
                c = e.$7(e.$5);
                c && (b("CSS").removeClass(e.$2, c),
                b("CSS").removeClass(e.$2, h));
                c = e.$7(a);
                c && (b("CSS").addClass(e.$2, c),
                b("CSS").addClass(e.$2, h));
                e.$5 = a
            }
            ;
            this.$1 = Math.min(d || j, j);
            this.$2 = a;
            this.$3 = c;
            this.$5 = 0;
            this.$4 = new (b("SubscriptionsHandler"))();
            this.$4 && this.$4.addSubscriptions(b("ViewportBounds").subscribe("change", this.$6), b("Event").listen(window, "resize", b("throttle")(this.$6)), b("Run").onLeave(this.destroy.bind(this)));
            this.$6()
        }
        var c = a.prototype;
        c.destroy = function() {
            this.$4 && this.$4.release(),
            this.$4 = null
        }
        ;
        c.$7 = function(a) {
            switch (a) {
            case 1:
                return "_1twe";
            case 2:
                return "_1twf";
            case 3:
                return "_1twg";
            case 4:
                return "_1tw-";
            case 5:
                return "_1tw_";
            case 6:
                return "_2u39";
            case 7:
                return "_2u3a";
            case 8:
                return "_2u3b";
            case 9:
                return "_2u3c";
            case 10:
                return "_2u3d";
            case 11:
                return "_5k9l";
            case 12:
                return "_5k9m";
            case 13:
                return "_5k9n";
            case 14:
                return "_5k9o";
            case 15:
                return "_5k9p";
            case 16:
                return "_5k9q";
            case 17:
                return "_5k9r";
            case 18:
                return "_5k9u";
            case 19:
                return "_5k9v";
            case 20:
                return "_5k9w";
            default:
                return null
            }
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("LiveVideoIndicatorContainerServerCallable.react", ["DateConsts", "FBJSON", "LiveVideoIndicatorContainer.react", "React", "SubscriptionsHandler", "clearInterval", "setInterval"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = 3 * b("DateConsts").MS_PER_SEC;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.state = {
                showElapsedTime: !1,
                viewerCount: c.props.viewerCount
            },
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            var a = this;
            this.subscriptions = new (b("SubscriptionsHandler"))();
            this.subscriptions.addSubscriptions(this.props.videoPlayerController.addListener("VideoWithLiveBroadcast/viewCountChange", function(c) {
                c = c.getAttribute("data-store");
                c = c ? b("FBJSON").parse(c).viewerCount : null;
                a.setState({
                    viewerCount: c
                })
            }), this.props.videoPlayerController.addListener("unifiedCVC/update", function(b) {
                a.setState({
                    viewerCount: b.c
                })
            }));
            this.props.showTimePop && this.props.broadcastCreationTime && this.subscriptions.addSubscriptions(this.props.videoPlayerController.addListener("beginPlayback", function() {
                a.setState({
                    showElapsedTime: !0
                });
                var c = b("setInterval")(function() {
                    a.setState({
                        showElapsedTime: !1
                    }),
                    b("clearInterval")(c)
                }, h)
            }))
        }
        ;
        d.componentWillUnmount = function() {
            this.subscriptions.release()
        }
        ;
        d.render = function() {
            return g.jsx(b("LiveVideoIndicatorContainer.react"), {
                inline: this.props.inline,
                inBeeper: this.props.inBeeper,
                isAudio: this.props.isAudio,
                isBreakingNews: this.props.isBreakingNews,
                isLive: this.props.isLive,
                isPremiere: this.props.isPremiere,
                isPreview: this.props.isPreview,
                isRehearsal: this.props.isRehearsal,
                pageCount: this.props.pageCount,
                playerID: this.props.videoPlayerController.getVideoPlayerID(),
                showElapsedTime: this.state.showElapsedTime,
                startTime: this.props.broadcastCreationTime,
                textOverride: this.props.textOverride,
                viewerCount: this.state.viewerCount
            })
        }
        ;
        return c
    }(g.Component);
    e.exports = a
}
), null);
/**
 * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
 */
__d("rxjs-observable-0.0.7", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {}
      , h = {
        exports: g
    };
    function i() {
        Object.defineProperty(g, "__esModule", {
            value: !0
        });
        function a(a) {
            var b;
            a = a.Symbol;
            typeof a === "function" ? a.observable ? b = a.observable : (b = a("observable"),
            a.observable = b) : b = "@@observable";
            return b
        }
        g.getSymbolObservable = a;
        g.observable = a(typeof window === "undefined" ? {} : window)
    }
    var j = !1;
    function k() {
        j || (j = !0,
        i());
        return h.exports
    }
    var l = {}
      , m = {
        exports: l
    };
    function n() {
        Object.defineProperty(l, "__esModule", {
            value: !0
        });
        function a() {}
        l.noop = a
    }
    var o = !1;
    function p() {
        o || (o = !0,
        n());
        return m.exports
    }
    var q = {}
      , r = {
        exports: q
    };
    function aa() {
        Object.defineProperty(q, "__esModule", {
            value: !0
        });
        var a = p();
        function b() {
            var a = [];
            for (var b = 0; b < arguments.length; b++)
                a[b] = arguments[b];
            return c(a)
        }
        q.pipe = b;
        function c(b) {
            if (!b)
                return a.noop;
            return b.length === 1 ? b[0] : function(a) {
                return b.reduce(function(a, b) {
                    return b(a)
                }, a)
            }
        }
        q.pipeFromArray = c
    }
    var s = !1;
    function ba() {
        s || (s = !0,
        aa());
        return r.exports
    }
    var t = {}
      , ca = {
        exports: t
    };
    function da() {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        function a(a) {
            setTimeout(function() {
                throw a
            })
        }
        t.hostReportError = a
    }
    var u = !1;
    function v() {
        u || (u = !0,
        da());
        return ca.exports
    }
    var w = {}
      , ea = {
        exports: w
    };
    function fa() {
        Object.defineProperty(w, "__esModule", {
            value: !0
        });
        var a = v();
        w.empty = {
            closed: !0,
            next: function(a) {},
            error: function(b) {
                a.hostReportError(b)
            },
            complete: function() {}
        }
    }
    var x = !1;
    function y() {
        x || (x = !0,
        fa());
        return ea.exports
    }
    var z = {}
      , ga = {
        exports: z
    };
    function ha() {
        Object.defineProperty(z, "__esModule", {
            value: !0
        }),
        z.errorObject = {
            e: {}
        }
    }
    var A = !1;
    function B() {
        A || (A = !0,
        ha());
        return ga.exports
    }
    var C = {}
      , ia = {
        exports: C
    };
    function ja() {
        Object.defineProperty(C, "__esModule", {
            value: !0
        }),
        C.isArray = Array.isArray || function(a) {
            return a && typeof a.length === "number"
        }
    }
    var D = !1;
    function ka() {
        D || (D = !0,
        ja());
        return ia.exports
    }
    var E = {}
      , la = {
        exports: E
    };
    function ma() {
        Object.defineProperty(E, "__esModule", {
            value: !0
        });
        function a(a) {
            return typeof a === "function"
        }
        E.isFunction = a
    }
    var F = !1;
    function G() {
        F || (F = !0,
        ma());
        return la.exports
    }
    var H = {}
      , na = {
        exports: H
    };
    function oa() {
        Object.defineProperty(H, "__esModule", {
            value: !0
        });
        function a(a) {
            return a != null && typeof a === "object"
        }
        H.isObject = a
    }
    var I = !1;
    function pa() {
        I || (I = !0,
        oa());
        return na.exports
    }
    var J = {}
      , qa = {
        exports: J
    };
    function ra() {
        Object.defineProperty(J, "__esModule", {
            value: !0
        });
        var a = B(), b;
        function c() {
            try {
                return b.apply(this, arguments)
            } catch (b) {
                a.errorObject.e = b;
                return a.errorObject
            }
        }
        function d(a) {
            b = a;
            return c
        }
        J.tryCatch = d
    }
    var K = !1;
    function sa() {
        K || (K = !0,
        ra());
        return qa.exports
    }
    var L = {}
      , ta = {
        exports: L
    };
    function ua() {
        Object.defineProperty(L, "__esModule", {
            value: !0
        });
        function a(a) {
            Error.call(this);
            this.message = a ? a.length + " errors occurred during unsubscription:\n" + a.map(function(a, b) {
                return b + 1 + ") " + a.toString()
            }).join("\n  ") : "";
            this.name = "UnsubscriptionError";
            this.errors = a;
            return this
        }
        a.prototype = Object.create(Error.prototype);
        L.UnsubscriptionError = a
    }
    var M = !1;
    function va() {
        M || (M = !0,
        ua());
        return ta.exports
    }
    var N = {}
      , wa = {
        exports: N
    };
    function xa() {
        Object.defineProperty(N, "__esModule", {
            value: !0
        });
        var a = B()
          , b = ka()
          , c = G()
          , d = pa()
          , e = sa()
          , f = va()
          , g = function() {
            function g(a) {
                this.closed = !1,
                this._parent = null,
                this._parents = null,
                this._subscriptions = null,
                a && (this._unsubscribe = a)
            }
            g.prototype.unsubscribe = function() {
                var g = !1, i;
                if (this.closed)
                    return;
                var j = this
                  , k = j._parent
                  , l = j._parents
                  , m = j._unsubscribe;
                j = j._subscriptions;
                this.closed = !0;
                this._parent = null;
                this._parents = null;
                this._subscriptions = null;
                var n = -1
                  , o = l ? l.length : 0;
                while (k)
                    k.remove(this),
                    k = ++n < o && l[n] || null;
                if (c.isFunction(m)) {
                    k = e.tryCatch(m).call(this);
                    k === a.errorObject && (g = !0,
                    i = i || (a.errorObject.e instanceof f.UnsubscriptionError ? h(a.errorObject.e.errors) : [a.errorObject.e]))
                }
                if (b.isArray(j)) {
                    n = -1;
                    o = j.length;
                    while (++n < o) {
                        l = j[n];
                        if (d.isObject(l)) {
                            k = e.tryCatch(l.unsubscribe).call(l);
                            if (k === a.errorObject) {
                                g = !0;
                                i = i || [];
                                m = a.errorObject.e;
                                m instanceof f.UnsubscriptionError ? i = i.concat(h(m.errors)) : i.push(m)
                            }
                        }
                    }
                }
                if (g)
                    throw new f.UnsubscriptionError(i)
            }
            ;
            g.prototype.add = function(a) {
                if (!a || a === g.EMPTY)
                    return g.EMPTY;
                if (a === this)
                    return this;
                var b = a;
                switch (typeof a) {
                case "function":
                    b = new g(a);
                case "object":
                    if (b.closed || typeof b.unsubscribe !== "function")
                        return b;
                    else if (this.closed) {
                        b.unsubscribe();
                        return b
                    } else if (typeof b._addParent !== "function") {
                        var c = b;
                        b = new g();
                        b._subscriptions = [c]
                    }
                    break;
                default:
                    throw new Error("unrecognized teardown " + a + " added to Subscription.")
                }
                c = this._subscriptions || (this._subscriptions = []);
                c.push(b);
                b._addParent(this);
                return b
            }
            ;
            g.prototype.remove = function(a) {
                var b = this._subscriptions;
                if (b) {
                    a = b.indexOf(a);
                    a !== -1 && b.splice(a, 1)
                }
            }
            ;
            g.prototype._addParent = function(a) {
                var b = this
                  , c = b._parent;
                b = b._parents;
                !c || c === a ? this._parent = a : !b ? this._parents = [a] : b.indexOf(a) === -1 && b.push(a)
            }
            ;
            g.EMPTY = function(a) {
                a.closed = !0;
                return a
            }(new g());
            return g
        }();
        N.Subscription = g;
        function h(a) {
            return a.reduce(function(a, b) {
                return a.concat(b instanceof f.UnsubscriptionError ? b.errors : b)
            }, [])
        }
    }
    var O = !1;
    function P() {
        O || (O = !0,
        xa());
        return wa.exports
    }
    var Q = {}
      , ya = {
        exports: Q
    };
    function za() {
        Object.defineProperty(Q, "__esModule", {
            value: !0
        }),
        Q.rxSubscriber = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("rxSubscriber") : "@@rxSubscriber",
        Q.$$rxSubscriber = Q.rxSubscriber
    }
    var R = !1;
    function S() {
        R || (R = !0,
        za());
        return ya.exports
    }
    var T = {}
      , Aa = {
        exports: T
    };
    function Ba() {
        var a = this && this.__extends || function() {
            var a = function(b, c) {
                a = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        b.hasOwnProperty(c) && (a[c] = b[c])
                }
                ;
                return a(b, c)
            };
            return function(b, c) {
                a(b, c);
                function d() {
                    this.constructor = b
                }
                b.prototype = c === null ? Object.create(c) : (d.prototype = c.prototype,
                new d())
            }
        }();
        Object.defineProperty(T, "__esModule", {
            value: !0
        });
        var b = y()
          , c = P()
          , d = S()
          , e = v()
          , f = G()
          , g = function(e) {
            a(c, e);
            function c(a, c, f) {
                var g = e.call(this) || this;
                g.syncErrorValue = null;
                g.syncErrorThrown = !1;
                g.syncErrorThrowable = !1;
                g.isStopped = !1;
                g._parentSubscription = null;
                switch (arguments.length) {
                case 0:
                    g.destination = b.empty;
                    break;
                case 1:
                    if (!a) {
                        g.destination = b.empty;
                        break
                    }
                    if (typeof a === "object") {
                        if (i(a)) {
                            var j = a[d.rxSubscriber]();
                            g.syncErrorThrowable = j.syncErrorThrowable;
                            g.destination = j;
                            j.add(g)
                        } else
                            g.syncErrorThrowable = !0,
                            g.destination = new h(g,a);
                        break
                    }
                default:
                    g.syncErrorThrowable = !0;
                    g.destination = new h(g,a,c,f);
                    break
                }
                return g
            }
            c.prototype[d.rxSubscriber] = function() {
                return this
            }
            ;
            c.prototype.next = function(a) {
                this.isStopped || this._next(a)
            }
            ;
            c.prototype.error = function(a) {
                this.isStopped || (this.isStopped = !0,
                this._error(a))
            }
            ;
            c.prototype.complete = function() {
                this.isStopped || (this.isStopped = !0,
                this._complete())
            }
            ;
            c.prototype.unsubscribe = function() {
                if (this.closed)
                    return;
                this.isStopped = !0;
                e.prototype.unsubscribe.call(this)
            }
            ;
            c.prototype._next = function(a) {
                this.destination.next(a)
            }
            ;
            c.prototype._error = function(a) {
                this.destination.error(a),
                this.unsubscribe()
            }
            ;
            c.prototype._complete = function() {
                this.destination.complete(),
                this.unsubscribe()
            }
            ;
            c.prototype._addParentTeardownLogic = function(a) {
                a !== this && (this._parentSubscription = this.add(a))
            }
            ;
            c.prototype._unsubscribeParentSubscription = function() {
                this._parentSubscription !== null && this._parentSubscription.unsubscribe()
            }
            ;
            c.prototype._unsubscribeAndRecycle = function() {
                var a = this
                  , b = a._parent;
                a = a._parents;
                this._parent = null;
                this._parents = null;
                this.unsubscribe();
                this.closed = !1;
                this.isStopped = !1;
                this._parent = b;
                this._parents = a;
                return this
            }
            ;
            return c
        }(c.Subscription);
        T.Subscriber = g;
        var h = function(d) {
            a(c, d);
            function c(a, c, e, g) {
                var h = d.call(this) || this;
                h._parentSubscriber = a;
                var i;
                a = h;
                f.isFunction(c) ? i = c : c && (i = c.next,
                e = c.error,
                g = c.complete,
                c !== b.empty && (a = Object.create(c),
                f.isFunction(a.unsubscribe) && h.add(a.unsubscribe.bind(a)),
                a.unsubscribe = h.unsubscribe.bind(h)));
                h._context = a;
                h._next = i;
                h._error = e;
                h._complete = g;
                return h
            }
            c.prototype.next = function(a) {
                !this.isStopped && this._next && this.__tryOrUnsub(this._next, a)
            }
            ;
            c.prototype.error = function(a) {
                if (!this.isStopped) {
                    var b = this._parentSubscriber;
                    this._error ? (this.__tryOrUnsub(this._error, a),
                    this.unsubscribe()) : !b.syncErrorThrowable ? (this.unsubscribe(),
                    e.hostReportError(a)) : (e.hostReportError(a),
                    this.unsubscribe())
                }
            }
            ;
            c.prototype.complete = function() {
                var a = this;
                if (!this.isStopped) {
                    if (this._complete) {
                        var b = function() {
                            return a._complete.call(a._context)
                        };
                        this.__tryOrUnsub(b)
                    }
                    this.unsubscribe()
                }
            }
            ;
            c.prototype.__tryOrUnsub = function(a, b) {
                try {
                    a.call(this._context, b)
                } catch (a) {
                    this.unsubscribe(),
                    e.hostReportError(a)
                }
            }
            ;
            c.prototype.__tryOrSetError = function(a, b, c) {
                throw new Error("bad call")
            }
            ;
            c.prototype._unsubscribe = function() {
                var a = this._parentSubscriber;
                this._context = null;
                this._parentSubscriber = null;
                a.unsubscribe()
            }
            ;
            return c
        }(g);
        function i(a) {
            return a instanceof g || "syncErrorThrowable"in a && a[d.rxSubscriber]
        }
    }
    var U = !1;
    function Ca() {
        U || (U = !0,
        Ba());
        return Aa.exports
    }
    var V = {}
      , Da = {
        exports: V
    };
    function Ea() {
        Object.defineProperty(V, "__esModule", {
            value: !0
        });
        var a = y()
          , b = Ca()
          , c = S();
        function d(d, e, f) {
            if (d) {
                if (d instanceof b.Subscriber)
                    return d;
                if (d[c.rxSubscriber])
                    return d[c.rxSubscriber]()
            }
            return !d && !e && !f ? new b.Subscriber(a.empty) : new b.Subscriber(d,e,f)
        }
        V.toSubscriber = d
    }
    var W = !1;
    function Fa() {
        W || (W = !0,
        Ea());
        return Da.exports
    }
    var X = {}
      , Ga = {
        exports: X
    };
    function Ha() {
        Object.defineProperty(X, "__esModule", {
            value: !0
        });
        var a = k()
          , b = ba()
          , c = Fa()
          , d = function() {
            function d(a) {
                this._isScalar = !1,
                a && (this._subscribe = a)
            }
            d.prototype.lift = function(a) {
                var b = new d();
                b.source = this;
                b.operator = a;
                return b
            }
            ;
            d.prototype.subscribe = function(a, b, d) {
                var e = this.operator;
                a = c.toSubscriber(a, b, d);
                e ? e.call(a, this.source) : a.add(this.source || this._trySubscribe(a));
                return a
            }
            ;
            d.prototype._trySubscribe = function(a) {
                try {
                    return this._subscribe(a)
                } catch (b) {
                    a.error(b)
                }
            }
            ;
            d.prototype.forEach = function(a, b) {
                var c = this;
                b = e(b);
                return new b(function(b, d) {
                    var e;
                    e = c.subscribe(function(b) {
                        try {
                            a(b)
                        } catch (a) {
                            d(a),
                            e && e.unsubscribe()
                        }
                    }, d, b)
                }
                )
            }
            ;
            d.prototype._subscribe = function(a) {
                var b = this.source;
                return b && b.subscribe(a)
            }
            ;
            d.prototype[a.observable] = function() {
                return this
            }
            ;
            d.prototype.pipe = function() {
                var a = [];
                for (var c = 0; c < arguments.length; c++)
                    a[c] = arguments[c];
                return a.length === 0 ? this : b.pipeFromArray(a)(this)
            }
            ;
            d.prototype.toPromise = function(a) {
                var b = this;
                a = e(a);
                return new a(function(a, c) {
                    var d;
                    b.subscribe(function(a) {
                        return d = a
                    }, function(a) {
                        return c(a)
                    }, function() {
                        return a(d)
                    })
                }
                )
            }
            ;
            return d
        }();
        X.Observable = d;
        function e(a) {
            a || (a = Promise);
            if (!a)
                throw new Error("no Promise impl found");
            return a
        }
    }
    var Y = !1;
    function Ia() {
        Y || (Y = !0,
        Ha());
        return Ga.exports
    }
    var Z = {}
      , Ja = {
        exports: Z
    };
    function Ka() {
        Object.defineProperty(Z, "__esModule", {
            value: !0
        });
        var a = Ia();
        Z.Observable = a.Observable;
        a = P();
        Z.Subscription = a.Subscription
    }
    var $ = !1;
    function La() {
        $ || ($ = !0,
        Ka());
        return Ja.exports
    }
    function a(a) {
        switch (a) {
        case void 0:
            return La()
        }
    }
    e.exports = a
}
), null);
/**
 * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
 */
__d("undux-fb-5.0.1", ["rxjs-observable-0.0.7", "react-0.0.0"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a) {
        return a && typeof a === "object" && "default"in a ? a["default"] : a
    }
    var g = a(b("rxjs-observable-0.0.7"))
      , h = a(b("react-0.0.0"))
      , i = {}
      , j = {
        exports: i
    };
    function k() {
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var a = g()
          , b = "__ALL__"
          , c = "[undux] Error: Cyclical dependency detected. This may cause a stack overflow unless you fix it. \nThe culprit is the following sequence of .set calls, called from one or more of your Undux Effects: ";
        c = function() {
            function c(a) {
                a === void 0 && (a = !1),
                this.isDevMode = a,
                this.state = {
                    callChain: new Set(),
                    observables: new Map(),
                    observers: new Map()
                }
            }
            c.prototype.emit = function(a, c) {
                if (this.isDevMode)
                    if (this.state.callChain.has(a))
                        return this;
                    else
                        this.state.callChain.add(a);
                this.hasChannel(a) && this.emitOnChannel(a, c);
                this.hasChannel(b) && this.emitOnChannel(b, c);
                this.isDevMode && this.state.callChain.clear();
                return this
            }
            ;
            c.prototype.on = function(a) {
                return this.createChannel(a)
            }
            ;
            c.prototype.all = function() {
                return this.createChannel(b)
            }
            ;
            c.prototype.createChannel = function(b) {
                var c = this;
                this.state.observers.has(b) || this.state.observers.set(b, []);
                this.state.observables.has(b) || this.state.observables.set(b, []);
                var d = new a.Observable(function(a) {
                    c.state.observers.get(b).push(a);
                    return function() {
                        return c.deleteChannel(b, d)
                    }
                }
                );
                this.state.observables.get(b).push(d);
                return d
            }
            ;
            c.prototype.deleteChannel = function(a, b) {
                if (!this.state.observables.has(a))
                    return;
                var c = this.state.observables.get(a);
                b = c.indexOf(b);
                if (b < 0)
                    return;
                c.splice(b, 1);
                c.length || (this.state.observables["delete"](a),
                this.state.observers["delete"](a))
            }
            ;
            c.prototype.emitOnChannel = function(a, b) {
                this.state.observers.get(a).forEach(function(a) {
                    return a.next(b)
                })
            }
            ;
            c.prototype.hasChannel = function(a) {
                return this.state.observables.has(a)
            }
            ;
            return c
        }();
        i.Emitter = c
    }
    var l = !1;
    function m() {
        l || (l = !0,
        k());
        return j.exports
    }
    var n = {}
      , o = {
        exports: n
    };
    function p() {
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        function a(a, c) {
            return b(a) && b(c) ? a.equals(c) : a === c
        }
        n.equals = a;
        function b(a) {
            return !!a && typeof a === "object" && ("@@__IMMUTABLE_ITERABLE__@@"in a || "@@__IMMUTABLE_RECORD__@@"in a)
        }
        n.isImmutable = b;
        function c(a) {
            return a.displayName || a.name || "Component"
        }
        n.getDisplayName = c;
        function d(a) {
            return Object.keys(a)
        }
        n.keys = d;
        function e(a, b) {
            var c = {};
            d(a).forEach(function(d) {
                return c[d] = b(a[d], d)
            });
            return c
        }
        n.mapValues = e;
        function f(a, b) {
            return d(a).some(function(c) {
                return b(a[c], c)
            })
        }
        n.some = f
    }
    var q = !1;
    function r() {
        q || (q = !0,
        p());
        return o.exports
    }
    var s = {}
      , t = {
        exports: s
    };
    function u() {
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        function a(a) {
            a.onAll().subscribe(function(a) {
                var b = a.key;
                b = a.previousValue;
                b = a.value
            });
            return a
        }
        s.withLogger = a
    }
    var v = !1;
    function w() {
        v || (v = !0,
        u());
        return t.exports
    }
    var x = {}
      , y = {
        exports: x
    };
    function z() {
        Object.defineProperty(x, "__esModule", {
            value: !0
        });
        function a(a) {
            var b = window.__REDUX_DEVTOOLS_EXTENSION__;
            if (!b)
                return a;
            var c = b.connect()
              , d = !1
              , e = function(b) {
                var c = a.getState();
                for (var e in b)
                    e in c && (d = !0,
                    a.set(e)(b[e]),
                    d = !1)
            };
            c.subscribe(function(b) {
                switch (b.type) {
                case "START":
                    c.send(null, a.getState());
                    return;
                case "DISPATCH":
                    if (!b.state)
                        return;
                    switch (b.payload.type) {
                    case "JUMP_TO_ACTION":
                    case "JUMP_TO_STATE":
                        e(JSON.parse(b.state));
                        return
                    }
                    return
                }
            });
            a.onAll().subscribe(function(b) {
                b = b.key;
                if (d)
                    return;
                c.send(b, a.getState())
            });
            return a
        }
        x.withReduxDevtools = a
    }
    var A = !1;
    function B() {
        A || (A = !0,
        z());
        return y.exports
    }
    var C = {}
      , D = {
        exports: C
    };
    function E() {
        Object.defineProperty(C, "__esModule", {
            value: !0
        });
        var a = $();
        function b(b) {
            return a.connectAs({
                store: b
            })
        }
        C.connect = b
    }
    var F = !1;
    function G() {
        F || (F = !0,
        E());
        return D.exports
    }
    var H = {}
      , I = {
        exports: H
    };
    function J() {
        var a = this && this.__extends || function() {
            var a = function(b, c) {
                a = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        b.hasOwnProperty(c) && (a[c] = b[c])
                }
                ;
                return a(b, c)
            };
            return function(b, c) {
                a(b, c);
                function d() {
                    this.constructor = b
                }
                b.prototype = c === null ? Object.create(c) : (d.prototype = c.prototype,
                new d())
            }
        }()
          , b = this && this.__assign || function() {
            b = Object.assign || function(a) {
                for (var b, c = 1, d = arguments.length; c < d; c++) {
                    b = arguments[c];
                    for (var e in b)
                        Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e])
                }
                return a
            }
            ;
            return b.apply(this, arguments)
        }
        ;
        Object.defineProperty(H, "__esModule", {
            value: !0
        });
        var c = h()
          , d = r();
        function e(e) {
            return function(f) {
                var g;
                return g = function(g) {
                    a(h, g);
                    function h() {
                        var a = g !== null && g.apply(this, arguments) || this;
                        a.state = {
                            stores: d.mapValues(e, function(a) {
                                return a.getCurrentSnapshot()
                            }),
                            subscriptions: d.keys(e).map(function(b) {
                                return e[b].onAll().subscribe(function(c) {
                                    var f = c.previousValue;
                                    c = c.value;
                                    if (d.equals(f, c))
                                        return !1;
                                    a.setState(function(a) {
                                        return {
                                            stores: Object.assign({}, a.stores, (a = {},
                                            a[b] = e[b].getCurrentSnapshot(),
                                            a))
                                        }
                                    })
                                })
                            })
                        };
                        return a
                    }
                    h.prototype.componentWillUnmount = function() {
                        this.state.subscriptions.forEach(function(a) {
                            return a.unsubscribe()
                        })
                    }
                    ;
                    h.prototype.shouldComponentUpdate = function(a, b) {
                        var c = this;
                        return d.some(b.stores, function(a, b) {
                            return a !== c.state.stores[b]
                        }) || Object.keys(a).some(function(b) {
                            return a[b] !== c.props[b]
                        })
                    }
                    ;
                    h.prototype.render = function() {
                        return c.createElement(f, b({}, this.props, this.state.stores))
                    }
                    ;
                    return h
                }(c.Component),
                g.displayName = "withStore(" + d.getDisplayName(f) + ")",
                g
            }
        }
        H.connectAs = e
    }
    var K = !1;
    function L() {
        K || (K = !0,
        J());
        return I.exports
    }
    var M = {}
      , N = {
        exports: M
    };
    function O() {
        var a = this && this.__extends || function() {
            var a = function(b, c) {
                a = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        b.hasOwnProperty(c) && (a[c] = b[c])
                }
                ;
                return a(b, c)
            };
            return function(b, c) {
                a(b, c);
                function d() {
                    this.constructor = b
                }
                b.prototype = c === null ? Object.create(c) : (d.prototype = c.prototype,
                new d())
            }
        }()
          , b = this && this.__assign || function() {
            b = Object.assign || function(a) {
                for (var b, c = 1, d = arguments.length; c < d; c++) {
                    b = arguments[c];
                    for (var e in b)
                        Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e])
                }
                return a
            }
            ;
            return b.apply(this, arguments)
        }
        ;
        Object.defineProperty(M, "__esModule", {
            value: !0
        });
        var c = h()
          , d = $()
          , e = r();
        function f(f, h) {
            var i = c.createContext({
                __MISSING_PROVIDER__: !0
            })
              , j = function(e) {
                a(b, e);
                function b(a) {
                    var b = e.call(this, a) || this
                      , c = a.initialState || f;
                    b.storeDefinition = d.createStore(c);
                    c = a.effects || h;
                    c && c(b.storeDefinition);
                    b.state = {
                        storeSnapshot: b.storeDefinition.getCurrentSnapshot()
                    };
                    b.subscription = b.storeDefinition.onAll().subscribe(function() {
                        return b.setState({
                            storeSnapshot: b.storeDefinition.getCurrentSnapshot()
                        })
                    });
                    return b
                }
                b.prototype.componentWillUnmount = function() {
                    this.subscription.unsubscribe(),
                    this.storeDefinition.storeSnapshot = null,
                    this.storeDefinition = null
                }
                ;
                b.prototype.render = function() {
                    return c.createElement(i.Provider, {
                        value: this.state.storeSnapshot
                    }, this.props.children)
                }
                ;
                return b
            }(c.Component)
              , k = function(a) {
                return c.createElement(i.Consumer, null, function(b) {
                    if (!g(b))
                        throw Error('[Undux] Component "' + a.displayName + '" does not seem to be nested in an Undux <Container>. To fix this error, be sure to render the component in the <Container>...</Container> component that you got back from calling createConnectedStore().');
                    return a.children(b)
                })
            };
            function l(a) {
                var d = e.getDisplayName(a)
                  , f = function(e) {
                    return c.createElement(k, {
                        displayName: d
                    }, function(d) {
                        return c.createElement(a, b({
                            store: d
                        }, e))
                    })
                };
                f.displayName = "withStore(" + d + ")";
                return f
            }
            return {
                Container: j,
                useStore: function() {
                    return c.useContext(i)
                },
                withStore: l
            }
        }
        M.createConnectedStore = f;
        function g(a) {
            return !("__MISSING_PROVIDER__"in a)
        }
    }
    var P = !1;
    function Q() {
        P || (P = !0,
        O());
        return N.exports
    }
    var R = {}
      , S = {
        exports: R
    };
    function T() {
        var a = this && this.__extends || function() {
            var a = function(b, c) {
                a = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(a, b) {
                    a.__proto__ = b
                }
                || function(a, b) {
                    for (var c in b)
                        b.hasOwnProperty(c) && (a[c] = b[c])
                }
                ;
                return a(b, c)
            };
            return function(b, c) {
                a(b, c);
                function d() {
                    this.constructor = b
                }
                b.prototype = c === null ? Object.create(c) : (d.prototype = c.prototype,
                new d())
            }
        }()
          , b = this && this.__assign || function() {
            b = Object.assign || function(a) {
                for (var b, c = 1, d = arguments.length; c < d; c++) {
                    b = arguments[c];
                    for (var e in b)
                        Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e])
                }
                return a
            }
            ;
            return b.apply(this, arguments)
        }
        ;
        Object.defineProperty(R, "__esModule", {
            value: !0
        });
        var c = h()
          , d = $()
          , e = r();
        function f(f, h) {
            var i = c.createContext({
                __MISSING_PROVIDER__: !0
            })
              , j = function(g) {
                a(b, g);
                function b(a) {
                    var b = g.call(this, a) || this
                      , c = a.initialStates || f;
                    c = e.mapValues(c, function(a) {
                        return d.createStore(a)
                    });
                    a = a.effects || h;
                    a && a(c);
                    b.state = {
                        storeDefinitions: c,
                        storeSnapshots: e.mapValues(c, function(a) {
                            return a.getCurrentSnapshot()
                        }),
                        subscriptions: e.mapValues(c, function(a, c) {
                            return a.onAll().subscribe(function() {
                                return b.setState(function(b) {
                                    return {
                                        storeSnapshots: Object.assign({}, b.storeSnapshots, (b = {},
                                        b[c] = a.getCurrentSnapshot(),
                                        b))
                                    }
                                })
                            })
                        })
                    };
                    return b
                }
                b.prototype.componentWillUnmount = function() {
                    e.mapValues(this.state.subscriptions, function(a) {
                        return a.unsubscribe()
                    }),
                    this.state.storeSnapshots,
                    e.mapValues(this.state.storeSnapshots, function(a) {
                        return a.state = null
                    }),
                    e.mapValues(this.state.storeSnapshots, function(a) {
                        return a.storeDefinition = null
                    }),
                    e.mapValues(this.state.storeDefinitions, function(a) {
                        return a.storeSnapshot = null
                    })
                }
                ;
                b.prototype.render = function() {
                    return c.createElement(i.Provider, {
                        value: this.state.storeSnapshots
                    }, this.props.children)
                }
                ;
                return b
            }(c.Component)
              , k = function(a) {
                return c.createElement(i.Consumer, null, function(b) {
                    if (!g(b))
                        throw Error('[Undux] Component "' + a.displayName + '" does not seem to be nested in an Undux <Container>. To fix this error, be sure to render the component in the <Container>...</Container> component that you got back from calling createConnectedStoreAs().');
                    return a.children(b)
                })
            };
            function l(a) {
                var d = e.getDisplayName(a)
                  , f = function(e) {
                    return c.createElement(k, {
                        displayName: d
                    }, function(d) {
                        return c.createElement(a, b({}, d, e))
                    })
                };
                f.displayName = "withStores(" + d + ")";
                return f
            }
            return {
                Container: j,
                useStores: function() {
                    return c.useContext(i)
                },
                withStores: l
            }
        }
        R.createConnectedStoreAs = f;
        function g(a) {
            return !("__MISSING_PROVIDER__"in a)
        }
    }
    var U = !1;
    function V() {
        U || (U = !0,
        T());
        return S.exports
    }
    var W = {}
      , aa = {
        exports: W
    };
    function ba() {
        Object.defineProperty(W, "__esModule", {
            value: !0
        });
        var a = G();
        W.connect = a.connect;
        a = L();
        W.connectAs = a.connectAs;
        a = Q();
        W.createConnectedStore = a.createConnectedStore;
        a = V();
        W.createConnectedStoreAs = a.createConnectedStoreAs
    }
    var X = !1;
    function ca() {
        X || (X = !0,
        ba());
        return aa.exports
    }
    var Y = {}
      , da = {
        exports: Y
    };
    function ea() {
        function a(a) {
            for (var b in a)
                Y.hasOwnProperty(b) || (Y[b] = a[b])
        }
        Object.defineProperty(Y, "__esModule", {
            value: !0
        });
        var b = m()
          , c = r()
          , d = function() {
            function a(a, b) {
                this.state = a,
                this.storeDefinition = b
            }
            a.prototype.get = function(a) {
                return this.state[a]
            }
            ;
            a.prototype.set = function(a) {
                return this.storeDefinition.set(a)
            }
            ;
            a.prototype.setFrom_EXPERIMENTAL = function(a) {
                return this.storeDefinition.setFrom_EXPERIMENTAL(a)
            }
            ;
            a.prototype.on = function(a) {
                return this.storeDefinition.on(a)
            }
            ;
            a.prototype.onAll = function() {
                return this.storeDefinition.onAll()
            }
            ;
            a.prototype.getState = function() {
                return Object.freeze(this.state)
            }
            ;
            return a
        }();
        Y.StoreSnapshot = d;
        var e = {
            isDevMode: !1
        }
          , f = function() {
            function a(a, e) {
                var f = this;
                this.alls = new b.Emitter(e.isDevMode);
                this.emitter = new b.Emitter(e.isDevMode);
                this.storeSnapshot = new d(a,this);
                this.setters = c.mapValues(a, function(a, b) {
                    return function(a) {
                        var c, e = f.storeSnapshot.get(b);
                        f.storeSnapshot = new d(Object.assign({}, f.storeSnapshot.getState(), (c = {},
                        c[b] = a,
                        c)),f);
                        f.emitter.emit(b, a);
                        f.alls.emit(b, {
                            key: b,
                            previousValue: e,
                            value: a
                        })
                    }
                })
            }
            a.prototype.on = function(a) {
                return this.emitter.on(a)
            }
            ;
            a.prototype.onAll = function() {
                return this.alls.all()
            }
            ;
            a.prototype.get = function(a) {
                return this.storeSnapshot.get(a)
            }
            ;
            a.prototype.set = function(a) {
                return this.setters[a]
            }
            ;
            a.prototype.setFrom_EXPERIMENTAL = function(a) {
                return a(this.storeSnapshot)
            }
            ;
            a.prototype.getCurrentSnapshot = function() {
                return this.storeSnapshot
            }
            ;
            a.prototype.toStore = function() {
                return this.storeSnapshot
            }
            ;
            a.prototype.getState = function() {
                return this.storeSnapshot.getState()
            }
            ;
            return a
        }();
        Y.StoreDefinition = f;
        function g(a, b) {
            b === void 0 && (b = e);
            return new f(a,b)
        }
        Y.createStore = g;
        a(w());
        a(B());
        a(ca())
    }
    var Z = !1;
    function $() {
        Z || (Z = !0,
        ea());
        return da.exports
    }
    function c(a) {
        switch (a) {
        case void 0:
            return $()
        }
    }
    e.exports = c
}
), null);
__d("undux-fb", ["undux-fb-5.0.1"], (function(a, b, c, d, e, f) {
    e.exports = b("undux-fb-5.0.1")()
}
), null);
__d("undux", ["undux-fb"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a) {
        return b("undux-fb").createStore(a)
    }
    function c(a) {
        return a
    }
    e.exports.connect = (d = b("undux-fb")).connect;
    e.exports.connectAs = d.connectAs;
    e.exports.createConnectedStore = d.createConnectedStore;
    e.exports.createConnectedStoreAs = d.createConnectedStoreAs;
    e.exports.createStore = a;
    e.exports.withLogger = c;
    e.exports.withReduxDevtools = d.withReduxDevtools
}
), null);
__d("XLivingRoomVideoShareDialogController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/living_room/share_dialog/", {
        creation_source: {
            type: "Enum",
            required: !0,
            enumType: 1
        },
        playlist_video_ids: {
            type: "FBIDVector"
        },
        entry_source: {
            type: "Enum",
            required: !0,
            enumType: 1
        },
        video_id: {
            type: "FBID"
        },
        default_to_page: {
            type: "Bool",
            defaultValue: !1
        },
        group_id: {
            type: "FBID"
        },
        living_room_id: {
            type: "FBID"
        },
        open_add_video_dialog_on_load: {
            type: "Bool",
            defaultValue: !1
        }
    })
}
), null);
