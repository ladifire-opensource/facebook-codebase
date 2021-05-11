if (self.CavalryLogger) {
    CavalryLogger.start_js(["w16Bq"]);
}

__d("RoyalBluebar", ["cx", "Arbiter", "BigPipe", "CSS", "Event", "QuicklingFetchStreamConfig", "Run", "SubscriptionsHandler", "clearTimeout", "ge", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g) {
    f._getSubscriptionHandler = a;
    f.fixOnScroll = c;
    f.informOnClick = d;
    f.stopAnimatingAfterDD = e;
    f.startTransitionAnimation = g;
    f.stopTransitionAnimation = n;
    var h = null
      , i = !1
      , j = b("QuicklingFetchStreamConfig")
      , k = j.experimentName
      , l = k !== "off" && k !== "none";
    function m() {
        h && h()
    }
    a = null;
    f._subscriptionHandler = a;
    function a() {
        var a = this;
        this._subscriptionHandler || (this._subscriptionHandler = new (b("SubscriptionsHandler"))(),
        b("Run").onUnload(function() {
            a._subscriptionHandler.release(),
            a._subscriptionHandler = null
        }));
        return this._subscriptionHandler
    }
    function c(a) {
        this._getSubscriptionHandler().addSubscriptions(b("Arbiter").subscribe("bluebarFixedBehaviorController/isfixed", function(c, d) {
            c = "_50ti";
            var e = "_33rf";
            a.firstChild instanceof Element && b("CSS").conditionClass(a.firstChild, c, d);
            a.firstChild instanceof Element && b("CSS").conditionClass(a.firstChild, e, !d);
            b("Arbiter").inform("reflow")
        }))
    }
    function d(a) {
        this._getSubscriptionHandler().addSubscriptions(b("Event").listen(a, "click", function(a) {
            b("Arbiter").inform("BlueBar/homeClick", a) === !1 && a.preventDefault()
        }))
    }
    function e() {
        var a = b("Arbiter").subscribeOnce(b("BigPipe").Events.init, function(a, c) {
            c.arbiter.subscribeOnce(b("BigPipe").Events.displayed, m)
        })
          , c = b("Run").onAfterLoad(m);
        h = function() {
            h = null,
            b("Arbiter").unsubscribe(a),
            c.remove(),
            n()
        }
    }
    function g() {
        if (l) {
            h && h();
            var a = b("ge")(j.bluebarTransitionElement);
            a && b("CSS").addClass(a, j.bluebarTransitionClass)
        }
    }
    function n() {
        if (l) {
            var a = j
              , c = b("ge")(a.bluebarTransitionElement);
            if (!c)
                return;
            if (k === "Indeterminate") {
                if (!i) {
                    i = !0;
                    b("CSS").addClass(c, "finishing");
                    var d;
                    h = function() {
                        h = null,
                        i = !1,
                        b("clearTimeout")(d),
                        b("CSS").removeClass(c, "finishing"),
                        b("CSS").removeClass(c, a.bluebarTransitionClass)
                    }
                    ;
                    d = b("setTimeoutAcrossTransitions")(h, 200)
                }
            } else
                b("CSS").removeClass(c, a.bluebarTransitionClass)
        }
    }
}
), null);
__d("AjaxError", [], (function(a, b, c, d, e, f) {
    a = "ar:error";
    f.ERROR = a;
    b = "ar:timeout";
    f.TIMEOUT = b;
    c = "ar:proxy error";
    f.PROXY_ERROR = c;
    d = "ar:transport error";
    f.TRANSPORT_ERROR = d;
    e = "ar:http error";
    f.SERVER_ERROR = e;
    a = "ar:parse error";
    f.PARSE_ERROR = a;
    b = "ar:noservice";
    f.SERVICE_UNAVAILABLE = b
}
), null);
__d("AjaxRequest", ["AjaxError", "ErrorUtils", "Keys", "PHPQuerySerializer", "TimeSlice", "URI", "UserAgent_DEPRECATED", "ZeroRewrites", "clearTimeout", "killswitch", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f) {
    var g, h, i, j = window.XMLHttpRequest && "withCredentials"in new XMLHttpRequest(), k = [];
    function a() {
        var a = k;
        k = [];
        a.forEach(function(a) {
            return a.abort()
        })
    }
    function l(a) {
        a.onJSON = a.onError = a.onSuccess = null,
        b("clearTimeout")(a._timer),
        a.xhr && a.xhr.readyState < 4 && (a.xhr.abort(),
        a.xhr = null),
        k = k.filter(function(b) {
            return b && b != a && b.xhr && b.xhr.readyState < 4
        })
    }
    c = function() {
        function a(a, c, d) {
            this.timeout = 6e4,
            this.streamMode = !0,
            this.prelude = /^for \(;;\);/,
            this.status = null,
            this.$1 = -1,
            this.$2 = null,
            this.$3 = 0,
            this.$4 = null,
            this.json = null,
            this.errorType = null,
            this.errorText = null,
            this.onJSON = null,
            this.onSuccess = null,
            this.onError = null,
            c instanceof (g || (g = b("URI"))) || (c = new (g || (g = b("URI")))(c)),
            this.xhr = b("ZeroRewrites").getTransportBuilderForURI(c)(),
            d && a == "GET" && c.setQueryData(d),
            this.method = a,
            this.uri = c,
            this.xhr.open(a, b("killswitch")("ASYNC_REQUEST_STRINGIFY_URI_BEFORE_PASSING_TO_OPEN_METHOD") ? c : c.toString())
        }
        a.supportsCORS = function() {
            return j
        }
        ;
        var c = a.prototype;
        c.send = function(a) {
            var c = this
              , d = b("TimeSlice").getReusableContinuation("AjaxRequest xhr.onreadystatechange");
            this.xhr.onreadystatechange = function() {
                return c.$5(d)
            }
            ;
            var e = this.timeout;
            e && (this.$2 = b("setTimeoutAcrossTransitions")(function() {
                c.errorType = b("AjaxError").TIMEOUT,
                c.errorText = "timeout",
                c.$4 = Date.now() - c.$3,
                c.onError && c.onError(c),
                l(c)
            }, e));
            k.push(this);
            this.method == "POST" && this.xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            this.$3 = Date.now();
            this.xhr.send(a ? (h || (h = b("PHPQuerySerializer"))).serialize(a) : "")
        }
        ;
        c.abort = function() {
            l(this)
        }
        ;
        c.toString = function() {
            var a = "[AjaxRequest readyState=" + this.xhr.readyState;
            this.errorType && (a += " errorType=" + this.errorType,
            this.errorText && (a += " (" + this.errorText + ")"));
            return a + "]"
        }
        ;
        c.toJSON = function() {
            var a = {};
            this.json && (a.json = this.json);
            this.status && (a.status = this.status);
            this.errorType && (a.errorType = this.errorType,
            a.uri = this.uri);
            this.errorText && (a.errorText = this.errorText);
            this.$4 && (a.time = this.$4);
            return a
        }
        ;
        c.onJSONSafe = function() {
            this.onJSON && this.onJSON(this)
        }
        ;
        c.onSuccessSafe = function() {
            this.onSuccess && this.onSuccess(this)
        }
        ;
        c.onErrorSafe = function() {
            this.onError && this.onError(this)
        }
        ;
        c.$6 = function() {
            var a;
            try {
                this.status = this.xhr.status,
                a = this.xhr.statusText
            } catch (a) {
                this.xhr.readyState >= 4 && (this.errorType = b("AjaxError").TRANSPORT_ERROR,
                this.errorText = a.message);
                return
            }
            var c = this.status;
            if (c == null) {
                this.errorType = b("AjaxError").ERROR;
                this.errorText = "null status code";
                return
            }
            if (c === 0 && !/^(file|ftp)/.test(this.uri.toString()))
                this.errorType = b("AjaxError").TRANSPORT_ERROR;
            else if (c >= 100 && c < 200)
                this.errorType = b("AjaxError").PROXY_ERROR;
            else if (c >= 200 && c < 300)
                return;
            else if (c >= 300 && c < 400)
                this.errorType = b("AjaxError").PROXY_ERROR;
            else if (c >= 400 && c < 500)
                this.errorType = b("AjaxError").SERVER_ERROR;
            else if (c === 503)
                this.errorType = b("AjaxError").SERVICE_UNAVAILABLE;
            else if (c > 500 && c < 600)
                this.errorType = b("AjaxError").PROXY_ERROR;
            else if (c == 1223)
                return;
            else
                c >= 12001 && c <= 12156 ? this.errorType = b("AjaxError").TRANSPORT_ERROR : (a = "unrecognized status code: " + c,
                this.errorType = b("AjaxError").ERROR);
            this.errorText || (this.errorText = a)
        }
        ;
        c.$7 = function() {
            var a, c = this.xhr.readyState;
            try {
                a = this.xhr.responseText || ""
            } catch (a) {
                c >= 4 && (this.errorType = b("AjaxError").ERROR,
                this.errorText = "responseText not available - " + a.message);
                return
            }
            while (this.xhr) {
                var d = this.$1 + 1
                  , e = this.streamMode ? a.indexOf("\n", d) : a.length;
                e < 0 && c == 4 && (e = a.length);
                if (e <= this.$1)
                    break;
                var f = a;
                this.streamMode && (f = a.substr(d, e - d).replace(/^\s*|\s*$/g, ""));
                if (d === 0 && this.prelude) {
                    var g = this.prelude;
                    g.test(f) && (f = f.replace(g, ""))
                }
                this.$1 = e;
                if (f) {
                    try {
                        this.json = JSON.parse(f)
                    } catch (c) {
                        g = a.match(/(<body[\S\s]+?<\/body>)/i);
                        e = g != null && g.length > 0 ? g[0] : null;
                        g = {
                            message: c.message,
                            "char": d,
                            excerpt: (d === 0 && e || f).substr(512)
                        };
                        this.errorType = b("AjaxError").PARSE_ERROR;
                        this.errorText = "parse error - " + JSON.stringify(g);
                        return
                    }
                    (i || (i = b("ErrorUtils"))).applyWithGuard(this.onJSONSafe, this)
                }
            }
        }
        ;
        c.$5 = function(a) {
            var b = this
              , c = this.xhr && this.xhr.readyState || 0;
            this.status == null && c >= 2 && this.$6();
            !this.errorType && this.status != null && ((c === 3 && this.streamMode || c === 4) && a(function() {
                return b.$7()
            }));
            (this.errorType || c === 4) && (this.$4 = Date.now() - this.$3,
            a.last(function() {
                b.errorType ? b.onErrorSafe() : b.onSuccessSafe(),
                l(b)
            }))
        }
        ;
        return a
    }();
    e.exports = c;
    window.addEventListener && b("UserAgent_DEPRECATED").firefox() && window.addEventListener("keydown", function(a) {
        a.keyCode === b("Keys").ESC && a.prevent()
    }, !1);
    window.attachEvent && window.attachEvent("onunload", a)
}
), null);
__d("NotificationBeeperConst", ["keyMirror"], (function(a, b, c, d, e, f) {
    a = 1e4;
    f.IDLE_DELAY = a;
    c = 4e3;
    f.ACTIVE_DELAY_LONG = c;
    d = 1500;
    f.FADE_OUT_LENGTH = d;
    e = b("keyMirror")({
        PENDING: !0,
        RENDERED: !0,
        READY_TO_HIDE: !0,
        FADING_OUT: !0
    });
    f.BeepStates = e
}
), null);
__d("changePageTitle", ["DocumentTitle", "UserAgent_DEPRECATED"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = "";
    function a(a) {
        a === void 0 && (a = "Facebook"),
        b("DocumentTitle").set(a),
        b("UserAgent_DEPRECATED").ie() && (h = a,
        g || (g = window.setInterval(function() {
            var a = h
              , c = b("DocumentTitle").get();
            c !== a && b("DocumentTitle").set(a)
        }, 5e3, !1)))
    }
}
), null);
__d("QuickPipeRequest", ["AjaxPipeRequest", "Arbiter", "Quickling", "QuicklingConfig", "QuicklingFetchStreamConfig", "QuicklingRefreshOverheadUtil", "RoyalBluebar", "URI", "changePageTitle", "goOrReplace", "ifRequired"], (function(a, b, c, d, e, f) {
    var g, h = b("QuicklingConfig").version;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(c, d) {
            var e = {
                version: h
            };
            c = a.call(this, c, d, {
                quickling: e
            }) || this;
            c._processFirstResponse = function(a) {
                var c = a.getPayload();
                b("changePageTitle")(c.title);
                if (!c.isCometResponse) {
                    this._resetScrollOnFirstResponse();
                    a = a.getRequest();
                    a && document.body && (document.body.className = c.body_class || "")
                }
                b("Arbiter").inform("quickling/response")
            }
            ;
            c._isQuickling = !0;
            return c
        }
        var d = c.prototype;
        d._preBootloadFirstResponse = function(a) {
            return !0
        }
        ;
        d._fireDomContentCallback = function() {
            this._request && this._request.cavalry && this._request.cavalry.setTimeStamp("t_domcontent"),
            b("ifRequired")("PageTransitions", function(a) {
                a.transitionComplete()
            }),
            a.prototype._fireDomContentCallback.call(this)
        }
        ;
        d._fireOnloadCallback = function() {
            var b = this._request;
            b != null && b.cavalry && (b.cavalry.setTimeStamp("t_hooks"),
            b.cavalry.setTimeStamp("t_layout"),
            b.cavalry.setTimeStamp("t_onload"));
            a.prototype._fireOnloadCallback.call(this)
        }
        ;
        d.isPageActive = function(a) {
            return b("Quickling").isPageActive(a)
        }
        ;
        d._versionCheck = function(a) {
            if (a.version == h) {
                b("QuicklingRefreshOverheadUtil").onQuicklingVersionMatch();
                return !0
            }
            var c = ["quickling", "ajaxpipe", "ajaxpipe_token", "ajaxpipe_fetch_stream"];
            b("QuicklingRefreshOverheadUtil").onQuicklingRefreshStart();
            b("goOrReplace")(window.location, new (g || (g = b("URI")))(a.uri).removeQueryData(c), !0);
            b("RoyalBluebar").stopTransitionAnimation();
            return !1
        }
        ;
        d._resetScrollOnFirstResponse = function() {
            window.scrollTo(0, 0)
        }
        ;
        d.getSanitizedParameters = function() {
            return ["quickling"]
        }
        ;
        d._getAsyncRequestType = function() {
            return b("QuicklingFetchStreamConfig").experimentName !== "off" ? "useFetchWithIframeFallback" : "useIframeTransport"
        }
        ;
        return c
    }(b("AjaxPipeRequest"));
    e.exports = a
}
), null);
__d("QuicklingAugmenter", ["URI"], (function(a, b, c, d, e, f) {
    var g, h = [];
    a = {
        addHandler: function(a) {
            h.push(a)
        },
        augmentURI: function(a) {
            var c = []
              , d = new (g || (g = b("URI")))(a);
            h.forEach(function(a) {
                var b = a(d);
                if (!b)
                    return d;
                c.push(a);
                d = d.addQueryData(b)
            });
            h = c;
            return d
        }
    };
    e.exports = a
}
), null);
__d("Quickling", ["AjaxPipeRequest", "Arbiter", "BigPipe", "ContextualComponent", "PageEvents", "PageHooks", "PageTransitionsRegistrar", "PHPQuerySerializer", "QuicklingAugmenter", "QuicklingConfig", "QuicklingRefreshOverheadUtil", "QuickPipeRequest", "RoyalBluebar", "Run", "TimerStorage", "URI", "cancelAnimationFrame", "cancelIdleCallback", "clearImmediate", "clearInterval", "clearTimeout", "ge", "isEmpty"], (function(a, b, c, d, e, f) {
    var g, h, i, j = b("QuicklingConfig").sessionLength, k = new RegExp(b("QuicklingConfig").inactivePageRegex), l = 0, m = !1, n = {
        init: function() {
            if (m)
                return;
            m = !0;
            b("Run").onAfterLoad(function() {
                b("PageTransitionsRegistrar").registerHandler(p, 1)
            })
        },
        isActive: function() {
            return m
        },
        isPageActive: function(a) {
            if (a === "#")
                return !1;
            a = new (g || (g = b("URI")))(a);
            if (a.getDomain() && a.getDomain() != new (g || (g = b("URI")))(window.location.href).getDomain())
                return !1;
            if (a.getPath() == "/l.php") {
                var c = a.getQueryData().u;
                if (c) {
                    c = new (g || (g = b("URI")))(unescape(c)).getDomain();
                    if (c && c != new (g || (g = b("URI")))(window.location.href).getDomain())
                        return !1
                }
            }
            c = a.getPath();
            a = a.getQueryData();
            (h || (h = b("isEmpty")))(a) || (c += "?" + (i || (i = b("PHPQuerySerializer"))).serialize(a));
            return Object.keys(a).reduce(function(a, c) {
                return a || b("QuicklingConfig").badRequestKeys.includes(c)
            }, !1) ? !1 : !k.test(c)
        },
        getLoadCount: function() {
            return l
        },
        transitionHandler_DO_NOT_USE: p
    };
    function o() {
        l++;
        return l >= j
    }
    function p(a) {
        b("AjaxPipeRequest").setCurrentRequest(null);
        if (o())
            return !1;
        a = b("QuicklingAugmenter").augmentURI(a);
        if (!n.isPageActive(a))
            return !1;
        b("TimerStorage").clearAll(b("TimerStorage").ANIMATION_FRAME, b("cancelAnimationFrame"));
        b("TimerStorage").clearAll(b("TimerStorage").IDLE_CALLBACK, b("cancelIdleCallback"));
        b("TimerStorage").clearAll(b("TimerStorage").IMMEDIATE, b("clearImmediate"));
        b("TimerStorage").clearAll(b("TimerStorage").INTERVAL, b("clearInterval"));
        b("TimerStorage").clearAll(b("TimerStorage").TIMEOUT, b("clearTimeout"));
        window.ExitTime = Date.now();
        b("QuicklingRefreshOverheadUtil").onQuicklingStart();
        b("Run").__removeHook(b("PageHooks").ONLOAD_HOOK);
        b("Run").__removeHook(b("PageHooks").DOMREADY_HOOK);
        b("Arbiter").inform(b("PageEvents").AJAXPIPE_ONUNLOAD, {
            transition_type: "quickling"
        });
        var c = "content";
        q(c);
        b("RoyalBluebar").startTransitionAnimation();
        c = new (b("QuickPipeRequest"))(c,a).setResetHandler(b("RoyalBluebar").stopTransitionAnimation).setFinallyHandler(b("RoyalBluebar").stopTransitionAnimation).send();
        c.getArbiter().subscribeOnce(b("BigPipe").Events.displayed, b("RoyalBluebar").stopTransitionAnimation);
        a = window.__bodyWrapper;
        a.getCodeUsage && a.clearCodeUsage();
        return b("PageTransitionsRegistrar").DELAY_HISTORY
    }
    function q(a) {
        var c = function() {
            var c = b("ge")(a);
            c = b("ContextualComponent").forNode(c);
            c && c.cleanup();
            b("PageHooks").runHooks("onleavehooks")
        };
        c()
    }
    c = n;
    e.exports = c;
    a.Quickling = n
}
), null);
__d("NotificationSound", ["Sound"], (function(a, b, c, d, e, f) {
    e.exports = a;
    var g = 5e3;
    b("Sound").init(["audio/mpeg"]);
    function a(a) {
        this._soundPath = a,
        this._lastPlayed = 0
    }
    Object.assign(a.prototype, {
        play: function(a) {
            if (!this._soundPath)
                return;
            var c = Date.now();
            if (c - this._lastPlayed < g)
                return;
            this._lastPlayed = c;
            b("Sound").playOnlyIfImmediate(this._soundPath, a, !1)
        }
    })
}
), null);
__d("RangedCallbackManager", ["CallbackManagerController", "arrayStableSort", "createObjectFrom"], (function(a, b, c, d, e, f) {
    a = function() {
        "use strict";
        function a(a, c, d) {
            this.$1 = [],
            this.$2 = !1,
            this.$3 = !1,
            this.$4 = {},
            this.$5 = new (b("CallbackManagerController"))(this.$6.bind(this)),
            this.$7 = a,
            this.$8 = c,
            this.$9 = d
        }
        var c = a.prototype;
        c.executeOrEnqueue = function(a, b, c, d, e) {
            return this.$5.executeOrEnqueue({
                start: a,
                limit: b
            }, c, {
                strict: !!d,
                skipOnStrictHandler: e
            })
        }
        ;
        c.unsubscribe = function(a) {
            this.$5.unsubscribe(a)
        }
        ;
        c.getUnavailableResources = function(a) {
            a = this.$5.getRequest(a);
            var b = [];
            if (a && !this.$2) {
                var c = a.request;
                a = this.$10(a.options);
                c = c.start + c.limit;
                for (var a = a.length; a < c; a++)
                    b.push(a)
            }
            return b
        }
        ;
        c.addResources = function(a) {
            var b = this;
            a.forEach(function(a) {
                b.$4[a] || (b.$4[a] = !0,
                b.$1.push(a),
                b.$3 = null)
            });
            this.resortResources();
            this.$5.runPossibleCallbacks()
        }
        ;
        c.addResourcesWithoutSorting = function(a, c) {
            var d = this.$1.slice(0, c);
            d = d.concat(a);
            d = d.concat(this.$1.slice(c));
            this.$1 = d;
            Object.assign(this.$4, b("createObjectFrom")(a, !0));
            this.$3 = null;
            this.$5.runPossibleCallbacks()
        }
        ;
        c.removeResources = function(a) {
            var b = this;
            a.forEach(function(a) {
                if (b.$4[a]) {
                    b.$4[a] = !1;
                    a = b.$1.indexOf(a);
                    a != -1 && b.$1.splice(a, 1)
                }
            })
        }
        ;
        c.removeAllResources = function() {
            this.$1 = [],
            this.$4 = {}
        }
        ;
        c.resortResources = function() {
            var a = this;
            this.$1 = b("arrayStableSort")(this.$1, function(b, c) {
                return a.$8(a.$7(b), a.$7(c))
            })
        }
        ;
        c.setReachedEndOfArray = function() {
            this.$2 || (this.$2 = !0,
            this.$3 = null,
            this.$5.runPossibleCallbacks())
        }
        ;
        c.hasReachedEndOfArray = function() {
            return this.$2
        }
        ;
        c.forceRunCallbacks = function() {
            this.$5.runPossibleCallbacks({
                force: !0
            })
        }
        ;
        c.setError = function(a) {
            this.$3 !== a && (this.$3 = a,
            this.$5.runPossibleCallbacks())
        }
        ;
        c.getError = function(a, b, c) {
            c = this.$10({
                strict: c
            });
            return a + b > c.length ? this.$3 : null
        }
        ;
        c.hasResource = function(a) {
            return this.$4[a]
        }
        ;
        c.getResourceAtIndex = function(a) {
            return this.$1[a]
        }
        ;
        c.getAllResources = function() {
            return this.$1.concat()
        }
        ;
        c.getCurrentArraySize = function(a) {
            return this.$10(a).length
        }
        ;
        c.$10 = function(a) {
            var b = this.$1;
            if (a && a.strict) {
                a = a.skipOnStrictHandler || this.$9;
                a && (b = b.filter(a))
            }
            return b
        }
        ;
        c.$6 = function(a, b) {
            var c = this.$10(b)
              , d = a.start;
            a = a.start + a.limit;
            b = !!(b && b.force);
            if (!b && !this.$2 && !this.$3 && a > c.length)
                return !1;
            else {
                b = c.slice(d, a);
                d = a > c.length ? this.$3 : null;
                return [b, d]
            }
        }
        ;
        c.getElementsUntil = function(a) {
            var b = [];
            for (var c = 0; c < this.$1.length; c++) {
                var d = this.$7(this.$1[c]);
                if (this.$8(d, a) > 0)
                    break;
                b.push(this.$1[c])
            }
            return b
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("CrossWindowEventEmitter", ["CacheStorage", "EventEmitter", "FBJSON"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(c) {
            var d;
            d = a.call(this) || this;
            d.$CrossWindowEventEmitter2 = c;
            d.$CrossWindowEventEmitter1 = new (b("CacheStorage"))("localstorage",c + ":");
            d.$CrossWindowEventEmitter1.addValueChangeCallback(function(c, e, f) {
                e = c.split(":")[1];
                try {
                    c = b("FBJSON").parse(f)
                } catch (a) {
                    c = void 0
                }
                if (c && c.__v) {
                    (f = a.prototype.emit).call.apply(f, [babelHelpers.assertThisInitialized(d), e].concat(c.__v))
                }
            });
            return d
        }
        var d = c.prototype;
        d.emit = function(b) {
            var c;
            for (var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++)
                e[f - 1] = arguments[f];
            this.emitRemote.apply(this, [b].concat(e));
            (c = a.prototype.emit).call.apply(c, [this, b].concat(e))
        }
        ;
        d.emitRemote = function(a) {
            for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++)
                c[d - 1] = arguments[d];
            this.$CrossWindowEventEmitter1.set(a, c)
        }
        ;
        return c
    }(b("EventEmitter"));
    e.exports = a
}
), null);
__d("XFacebookWorkChatInboxController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/chat/t/{?thread_key}/", {
        entrypoint: {
            type: "String"
        },
        thread_key: {
            type: "String"
        },
        mid: {
            type: "String"
        },
        ref: {
            type: "String"
        },
        ds: {
            type: "Int"
        },
        sender: {
            type: "Bool",
            defaultValue: !1
        },
        hide_header: {
            type: "Bool",
            defaultValue: !1
        },
        last_message_timestamp: {
            type: "Int"
        },
        first_message_timestamp: {
            type: "Int"
        },
        new_room: {
            type: "Exists",
            defaultValue: !1
        }
    })
}
), null);
