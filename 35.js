if (self.CavalryLogger) {
    CavalryLogger.start_js(["vz+i6"]);
}

__d("ExplicitRegistrationDispatcherUtils", ["emptyFunction", "setImmediate"], (function(a, b, c, d, e, f) {
    "use strict";
    a = !1;
    c = b("emptyFunction");
    e.exports = {
        warn: c,
        inlineRequiresEnabled: a
    }
}
), null);
__d("ExplicitRegistrationDispatcher", ["Dispatcher_DEPRECATED", "ExplicitRegistrationDispatcherUtils", "setImmediate"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b(b) {
            var c;
            b = b.strict;
            c = a.call(this) || this;
            c.$ExplicitRegistrationDispatcher2 = b;
            c.$ExplicitRegistrationDispatcher1 = {};
            return c
        }
        var c = b.prototype;
        c.explicitlyRegisterStore = function(a) {
            a = a.getDispatchToken();
            this.$ExplicitRegistrationDispatcher1[a] = !0;
            return a
        }
        ;
        c.explicitlyRegisterStores = function(a) {
            var b = this;
            return a.map(function(a) {
                return b.explicitlyRegisterStore(a)
            })
        }
        ;
        c.register = function(b, c) {
            var d = this;
            d = this.__genID(c);
            this.$ExplicitRegistrationDispatcher1[d] = !1;
            c = a.prototype.register.call(this, this.$ExplicitRegistrationDispatcher4.bind(this, d, b), d);
            return c
        }
        ;
        c.$ExplicitRegistrationDispatcher4 = function(a, b, c) {
            (this.$ExplicitRegistrationDispatcher1[a] || !this.$ExplicitRegistrationDispatcher2) && this.__invokeCallback(a, b, c)
        }
        ;
        c.unregister = function(b) {
            a.prototype.unregister.call(this, b),
            delete this.$ExplicitRegistrationDispatcher1[b]
        }
        ;
        c.__getMaps = function() {}
        ;
        return b
    }(b("Dispatcher_DEPRECATED"));
    e.exports = a
}
), null);
__d("FluxStoreInstrumentation", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.inject = a;
    f.onEmitChange = b;
    var h = null;
    function a(a) {
        h == null || g(0, 2260),
        h = a
    }
    function b(a) {
        return h ? h.emitChange(a) : null
    }
}
), null);
__d("concatArrays", [], (function(a, b, c, d, e, f) {
    e.exports = a;
    function a(a) {
        var b;
        return (b = []).concat.apply(b, a)
    }
}
), null);
__d("distinctArray", [], (function(a, b, c, d, e, f) {
    e.exports = a;
    function a(a) {
        if (a == null)
            return [];
        if (Array.isArray(a)) {
            var b = a.length;
            if (b <= 200) {
                var c = [];
                for (var d = 0; d < b; d++) {
                    var e = a[d];
                    c.indexOf(e) === -1 && c.push(e)
                }
                return c
            }
        }
        return Array.from(new Set(a).values())
    }
}
), null);
__d("FluxStore", ["invariant", "EventEmitter", "FluxStoreInstrumentation", "concatArrays", "distinctArray", "__debug"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i;
    a = function() {
        function a(a) {
            this.__className = this.constructor.name,
            this.__moduleID = this.constructor.__moduleID,
            this.__changed = !1,
            this.__changeEvent = "change",
            this.__dispatcher = a,
            this.__emitter = new (b("EventEmitter"))(),
            this.$3 = !1,
            this.__registerDispatcherCallback(a)
        }
        var c = a.prototype;
        c.__registerDispatcherCallback = function(a) {
            var b = this;
            this.$2 = a.register(function(a) {
                return b.__invokeOnDispatch(a)
            }, this.__getIDForDispatcher(), this, this.__moduleID)
        }
        ;
        c.addListener = function(a) {
            return this.__emitter.addListener(this.__changeEvent, a)
        }
        ;
        c.getActionTypes = function() {
            if (!this.$1) {
                var a = this.__getActionTypes();
                if (a != null) {
                    var c = this.getDependencyStores();
                    if (c.length > 0) {
                        var d = !1;
                        c = b("concatArrays")(c.map(function(a) {
                            a = a && a.getActionTypes ? a.getActionTypes() : null;
                            a == null && (d = !0);
                            return a
                        }).filter(Boolean));
                        d ? a = null : a = (h || (h = b("distinctArray")))(a.concat(c))
                    }
                }
                this.$1 = a
            }
            return this.$1
        }
        ;
        c.getDispatcher = function() {
            return this.__dispatcher
        }
        ;
        c.getDispatchToken = function() {
            return this.$2
        }
        ;
        c.getDependencyDispatchTokens = function() {
            this.$5 || (this.$5 = this.getDependencyStores().map(function(a) {
                return a && a.getDispatchToken && a.getDispatchToken()
            }));
            return this.$5
        }
        ;
        c.getDependencyStores = function() {
            this.$4 || (this.$4 = (h || (h = b("distinctArray")))(this.__getDependencyStores()));
            return this.$4
        }
        ;
        c.addStoreDependency = function(a) {
            var b = this.__dispatcher.registerDependency;
            b && b(this.getDispatchToken(), a.getDispatchToken())
        }
        ;
        c.hasChanged = function() {
            this.__dispatcher.isDispatching() || g(0, 1147, this.__className);
            return this.__changed
        }
        ;
        c.__setAsUnchanged = function() {
            this.__changed = !1
        }
        ;
        c.__emitChange = function() {
            this.__dispatcher.isDispatching() || g(0, 1148, this.__className);
            if (this.__changed)
                return;
            b("FluxStoreInstrumentation").onEmitChange(this.__moduleID != null ? this.__moduleID : "unknown");
            this.__changed = !0
        }
        ;
        c.__invokeOnDispatch = function(a) {
            this.__changed = !1,
            this.__onDispatch(a),
            this.__inform()
        }
        ;
        c.__inform = function(a) {
            this.$3 = this.__changed || this.$3;
            var b = this.__dispatcher.shouldAllowInforms == null || this.__dispatcher.shouldAllowInforms();
            b && this.$3 && (this.$3 = !1,
            this.__emitter.emit(a || this.__changeEvent))
        }
        ;
        c.__onDispatch = function(a) {
            g(0, 1149, this.__className)
        }
        ;
        c.__getActionTypes = function() {
            return null
        }
        ;
        c.__getDependencyStores = function() {
            return []
        }
        ;
        c.__getIDForDispatcher = function() {
            return this.__className
        }
        ;
        return a
    }();
    a;
    c = a;
    e.exports = c
}
), null);
__d("TokenizeUtil", ["nullthrows"], (function(a, b, c, d, e, f) {
    var g = /[ ]+/g
      , h = /[^ ]+/g
      , i = new RegExp("[^ " + l() + "]+|" + a(),"g")
      , j = new RegExp(a(),"g")
      , k = 1e3;
    function l() {
        return ".,+*?$|#{}()'\\^\\-\\[\\]\\\\\\/!@%\"~=<>_:;\u30fb\u3001\u3002\u3008-\u3011\u3014-\u301f\uff1a-\uff1f\uff01-\uff0f\uff3b-\uff40\uff5b-\uff65\u2e2e\u061f\u066a-\u066c\u061b\u060c\u060d\ufd3e\ufd3f\u1801\u0964\u104a\u104b\u2010-\u2027\u2030-\u205e\xa1-\xb1\xb4-\xb8\xba\xbb\xbf"
    }
    function a() {
        return "[" + l() + "]"
    }
    var m = {}
      , n = {
        a: "\u0430 \xe0 \xe1 \xe2 \xe3 \xe4 \xe5 \u0101",
        b: "\u0431",
        c: "\u0446 \xe7 \u010d",
        d: "\u0434 \xf0 \u010f \u0111",
        e: "\u044d \u0435 \xe8 \xe9 \xea \xeb \u011b \u0113",
        f: "\u0444",
        g: "\u0433 \u011f \u0123",
        h: "\u0445 \u0127",
        i: "\u0438 \xec \xed \xee \xef \u0131 \u012b",
        j: "\u0439",
        k: "\u043a \u0138 \u0137",
        l: "\u043b \u013e \u013a \u0140 \u0142 \u013c",
        m: "\u043c",
        n: "\u043d \xf1 \u0148 \u0149 \u014b \u0146",
        o: "\u043e \xf8 \xf6 \xf5 \xf4 \xf3 \xf2",
        p: "\u043f",
        r: "\u0440 \u0159 \u0155",
        s: "\u0441 \u015f \u0161 \u017f",
        t: "\u0442 \u0165 \u0167 \xfe",
        u: "\u0443 \u044e \xfc \xfb \xfa \xf9 \u016f \u016b",
        v: "\u0432",
        y: "\u044b \xff \xfd",
        z: "\u0437 \u017e",
        ae: "\xe6",
        oe: "\u0153",
        ts: "\u0446",
        ch: "\u0447",
        ij: "\u0133",
        sh: "\u0448",
        ss: "\xdf",
        ya: "\u044f"
    };
    for (var o in n) {
        var p = n[o].split(" ");
        for (var q = 0; q < p.length; q++)
            m[p[q]] = o
    }
    function c(a) {
        return a.replace(j, " ")
    }
    function r(a) {
        a = a.toLowerCase();
        var b = "", c;
        for (var d = a.length; d--; )
            c = a.charAt(d),
            b = (m[c] || c) + b;
        return b.replace(g, " ")
    }
    function s(a, b) {
        b === void 0 && (b = h);
        var c = []
          , d = b.exec(a);
        while (d)
            d = d[0],
            c.push(d),
            d = b.exec(a);
        return c
    }
    function d(a, b) {
        b === void 0 && (b = h);
        var c = {}
          , d = 0;
        return function(e, f) {
            if (!Object.prototype.hasOwnProperty.call(c, e)) {
                d >= k && (c = {},
                d = 0);
                var g = r(e)
                  , h = a(g);
                c[e] = {
                    value: e,
                    flatValue: g,
                    tokens: s(h, b),
                    isPrefixQuery: !!h && h[h.length - 1] != " "
                };
                d++
            }
            f != null && f !== !1 && c[e].sortedTokens === void 0 && (c[e].sortedTokens = c[e].tokens.slice(),
            c[e].sortedTokens.sort(function(a, b) {
                return b.length - a.length
            }));
            return c[e]
        }
    }
    var t = d(c)
      , u = d(function(a) {
        return a
    }, i);
    function f(a, c, d) {
        var e = a == "query" || a == "query_punc"
          , f = a == "aligned"
          , g = a == "query_punc" ? u : t;
        c = g(c, a == "prefix");
        var h = a == "prefix" ? b("nullthrows")(c.sortedTokens) : c.tokens
          , i = g(d).tokens
          , j = {}
          , k = c.isPrefixQuery && (e || f) ? h.length - 1 : null;
        g = function(b, c) {
            for (var d = 0; d < i.length; ++d) {
                var g = i[d];
                if (!j[d] && (g == b || ((e || f) && c === k || a == "prefix") && g.indexOf(b) === 0))
                    return j[d] = !0;
                if (f && !j[d])
                    return !1
            }
            return !1
        }
        ;
        return Boolean(h.length && h.every(g))
    }
    p = {
        flatten: r,
        parse: t,
        parseIncludingPunctuations: u,
        getPunctuation: a,
        makeParse: d,
        isExactMatch: f.bind(null, "exact"),
        isQueryMatch: f.bind(null, "query"),
        isQueryMatchIncludingPunctuations: f.bind(null, "query_punc"),
        isAlignedMatch: f.bind(null, "aligned"),
        isPrefixMatch: f.bind(null, "prefix"),
        tokenize: s
    };
    q = p;
    e.exports = q
}
), null);
__d("requestIdleCallback", ["requireCond", "cr:694370"], (function(a, b, c, d, e, f) {
    a = b("cr:694370");
    e.exports = a
}
), null);
__d("ChatQuietLinks", ["DataStore", "DOM", "Event", "Parent", "UserAgent_DEPRECATED", "getOrCreateDOMID"], (function(a, b, c, d, e, f) {
    var g = {};
    a = {
        silenceLinks: function(a) {
            h(a, this.removeEmptyHrefs.bind(this))
        },
        nukeLinks: function(a) {
            h(a, this.removeAllHrefs.bind(this))
        },
        removeEmptyHrefs: function(a) {
            i(a, function(a) {
                return !a || a === "#"
            })
        },
        removeAllHrefs: function(a) {
            i(a)
        }
    };
    function h(a, c) {
        if (!a)
            return;
        var d = !!b("UserAgent_DEPRECATED").chrome()
          , e = !!b("UserAgent_DEPRECATED").chrome() || b("UserAgent_DEPRECATED").ie() >= 9 || b("UserAgent_DEPRECATED").firefox() >= 4;
        if (g[b("getOrCreateDOMID")(a)])
            return;
        g[b("getOrCreateDOMID")(a)] = !0;
        if (!e)
            return;
        if (!d) {
            c && c(a);
            return
        }
        b("Event").listen(a, "mouseover", function(a) {
            a = b("Parent").byTag(a.getTarget(), "a");
            if (a) {
                var c = a.getAttribute("href");
                j(c) && (b("DataStore").set(a, "stashedHref", a.getAttribute("href")),
                a.removeAttribute("href"))
            }
        });
        b("Event").listen(a, "mouseout", function(a) {
            a = b("Parent").byTag(a.getTarget(), "a");
            var c = a && b("DataStore").remove(a, "stashedHref");
            j(c) && a.setAttribute("href", c)
        });
        b("Event").listen(a, "mousedown", function(a) {
            if (!a.isDefaultRequested())
                return !0;
            a = b("Parent").byTag(a.getTarget(), "a");
            var c = a && b("DataStore").get(a, "stashedHref");
            j(c) && a.setAttribute("href", c)
        })
    }
    function i(a, c) {
        a = b("DOM").scry(a, "a");
        c && (a = a.filter(function(a) {
            return c(a.getAttribute("href"))
        }));
        a.forEach(function(a) {
            a.removeAttribute("href"),
            a.tabIndex || a.setAttribute("tabindex", 0)
        })
    }
    function j(a) {
        return a && a !== "#"
    }
    e.exports = a
}
), null);
__d("MercuryIDs", ["gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {
        isValid: function(a) {
            return a == null || a === "" || typeof a !== "string" ? !1 : /^\w{3,12}:.+/.test(a)
        },
        isValidThreadID: function(a) {
            if (!g.isValid(a))
                return !1;
            a = g.tokenize(a);
            switch (a.type) {
            case "user":
            case "support":
            case "thread":
            case "root":
                return !0;
            default:
                return (a.type === "pending" || a.type === "group") && !b("gkx")("863760") ? !0 : !1
            }
        },
        tokenize: function(a) {
            if (a == null || a === "" || !g.isValid(a))
                throw new Error("bad_id_format " + String(a));
            var b = a.indexOf(":");
            return {
                type: a.substr(0, b),
                value: a.substr(b + 1)
            }
        },
        getUserIDFromParticipantID: function(a) {
            if (!g.isValid(a))
                throw new Error("bad_id_format " + a);
            a = g.tokenize(a);
            var b = a.type;
            a = a.value;
            return b === "fbid" ? a : null
        },
        getParticipantIDFromUserID: function(a) {
            if (isNaN(a))
                throw new Error("Not a user ID: " + a);
            return "fbid:" + a
        },
        getUserIDFromThreadID: function(a) {
            return !this.isCanonical(a) ? null : this.tokenize(a).value
        },
        getThreadIDFromUserID: function(a) {
            return "user:" + a
        },
        getThreadIDFromThreadFBID: function(a) {
            return "thread:" + a
        },
        getThreadIDFromSupportInboxItemID: function(a) {
            return "support:" + a
        },
        getThreadFBIDFromThreadID: function(a) {
            return this.tokenize(a).value
        },
        getThreadKeyfromThreadIDUserID: function(a, b) {
            if (a == null || a === "" || !g.isValid(a))
                throw new Error("bad_id_format " + String(a));
            var c = this.tokenize(a).type;
            a = this.tokenize(a).value;
            if (c !== "user")
                return "g" + a;
            c = "";
            var d = "";
            if (a.length !== b.length)
                a.length > b.length ? (c = a,
                d = b) : (c = b,
                d = a);
            else if (b === a)
                return b + "u" + a;
            else {
                var e = 0;
                while (e < a.length && e < b.length)
                    if (a[e] === b[e])
                        e++;
                    else {
                        a[e] > b[e] ? (c = a,
                        d = b) : (c = b,
                        d = a);
                        break
                    }
            }
            return d + "u" + c
        },
        getThreadIDFromParticipantID: function(a) {
            a = this.getUserIDFromParticipantID(a);
            return a ? this.getThreadIDFromUserID(a) : null
        },
        getParticipantIDFromFromThreadID: function(a) {
            a = this.getUserIDFromThreadID(a);
            return a ? this.getParticipantIDFromUserID(a) : null
        },
        getSupportInboxItemIDFromThreadID: function(a) {
            return this.tokenize(a).value
        },
        isCanonical: function(a) {
            return this.isValid(a) && this.tokenize(a).type === "user"
        },
        isGroupChat: function(a) {
            return this.isValid(a) && this.tokenize(a).type !== "user"
        },
        isLocalThread: function(a) {
            return this.isValid(a) && this.tokenize(a).type === "root"
        }
    };
    e.exports = g
}
), null);
__d("TypedFluxStore", ["FluxStore"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("FluxStore");
    e.exports = a
}
), null);
__d("FluxReduceStore", ["invariant", "TypedFluxStore", "abstractMethod"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(b) {
            b = a.call(this, b) || this;
            b.$FluxReduceStore1 = b.getInitialState();
            return b
        }
        var d = c.prototype;
        d.getState = function() {
            return this.$FluxReduceStore1
        }
        ;
        d.getInitialState = function() {
            return b("abstractMethod")("FluxReduceStore", "getInitialState")
        }
        ;
        d.reduce = function(a, c) {
            return b("abstractMethod")("FluxReduceStore", "reduce")
        }
        ;
        d.areEqual = function(a, b) {
            return a === b
        }
        ;
        d.__invokeOnDispatch = function(a, b) {
            b === void 0 && (b = !0);
            this.__changed = !1;
            var c = this.$FluxReduceStore1;
            a = this.reduce(c, a);
            a !== void 0 || g(0, 2189, this.constructor.name);
            this.areEqual(c, a) || (this.$FluxReduceStore1 = a,
            this.__emitChange());
            b && this.__inform()
        }
        ;
        d.__setState = function(a) {
            this.$FluxReduceStore1 = a
        }
        ;
        return c
    }(b("TypedFluxStore"));
    e.exports = a;
    a.__moduleID = e.id
}
), null);
__d("QE2Logger", ["Banzai"], (function(a, b, c, d, e, f) {
    "use strict";
    f.logExposureForUser = a;
    f.logExposureForEmail = c;
    f.logExposureForDatr = d;
    f.logExposureForOculusLoggedOut = e;
    f.logExposureForPage = i;
    f.logExposureForBusiness = j;
    f.logExposureForGroup = k;
    f.logExposureForPhoneNumber = l;
    f.logExposureForScimCompanyID = m;
    f.logExposureForAnalyticsEntityID = n;
    f.logExposureForAdAccountID = o;
    f.logExposure = p;
    f.__logExposure = q;
    var g = "qe2_log_exposure"
      , h = {};
    function a(a, b) {
        b = (b = b) != null ? b : "";
        q(a, b, 9)
    }
    function c(a, b) {
        q(a, b, 3)
    }
    function d(a) {
        q(a, "", 5)
    }
    function e(a) {
        q(a, "", 31)
    }
    function i(a, b) {
        q(a, b, 7)
    }
    function j(a, b) {
        q(a, b, 17)
    }
    function k(a, b) {
        q(a, b, 25)
    }
    function l(a, b) {
        q(a, b, 8)
    }
    function m(a, b) {
        q(a, b, 22)
    }
    function n(a, b) {
        q(a, b, 27)
    }
    function o(a, b) {
        q(a, b, 0)
    }
    function p(a, b, c) {
        q(a, b, c)
    }
    function q(a, c, d) {
        var e = a + "|" + c;
        if (h[e])
            return;
        a = {
            universeName: a,
            unitID: c,
            unitType: d
        };
        b("Banzai").post(g, a);
        h[e] = !0
    }
}
), null);
__d("isFalsey", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        return a == null || !Boolean(a)
    }
}
), null);
