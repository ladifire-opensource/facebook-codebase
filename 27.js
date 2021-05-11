if (self.CavalryLogger) {
    CavalryLogger.start_js(["T0ebq"]);
}

__d("CookieConsentBlacklistedHrefs", [], (function(a, b, c, d, e, f) {
    e.exports = {
        hrefs: ["/about/basics", "/privacy/explanation", "/ads/settings", "/help/111814505650678", "/help/1561485474074139", "/help/568137493302217", "/help/769828729705201", "/help/cookies", "/policies/cookies", "/policy/cookies"]
    }
}
), null);
__d("DesktopHscrollUnitEventConstants", [], (function(a, b, c, d, e, f) {
    a = "DesktopHScrollUnit/itemInserted";
    f.HSCROLL_ITEM_INSERTED_EVENT = a;
    b = "DesktopHScrollUnit/itemShown";
    f.HSCROLL_ITEM_SHOWN_EVENT = b;
    c = "DesktopHScrollUnit/HideIndividualItem";
    f.HSCROLL_ITEM_HIDE_EVENT = c;
    d = "DesktopHScrollUnit/scrollItemBeforeXout";
    f.HSCROLL_ITEM_SCROLL_BEFORE_XOUT_EVENT = d;
    e = "DesktopHScrollUnit/unhideIndividualItem";
    f.HSCROLL_ITEM_UNHIDE_EVENT = e;
    a = "logLastAdXout";
    f.HSCROLL_LAST_ITEM_NFX_ACTION_TAKEN = a;
    b = "onXoutIndividualItem";
    f.HSCROLL_PAGER_ITEM_HIDE_EVENT = b
}
), null);
__d("EntstreamFeedObject", ["csx", "CSS", "Parent"], (function(a, b, c, d, e, f, g) {
    var h = {
        getRoot: function(a) {
            return b("Parent").bySelector(a, "._5jmm")
        },
        getHscrollOuterRootIfAvailable: function(a) {
            a = a;
            b("CSS").matchesSelector(a, "._170y") && (a = h.getRoot(a.parentNode));
            return a
        }
    };
    e.exports = h
}
), null);
__d("legacy:onload-action", ["PageHooks"], (function(a, b, c, d, e, f) {
    a._domreadyHook = (c = b("PageHooks"))._domreadyHook;
    a._onloadHook = c._onloadHook;
    a.runHook = c.runHook;
    a.runHooks = c.runHooks;
    a.keep_window_set_as_loaded = c.keepWindowSetAsLoaded
}
), 3);
__d("FlipDirection", ["DOM", "Input", "Style"], (function(a, b, c, d, e, f) {
    a = {
        setDirection: function(a, c, d) {
            c === void 0 && (c = 5);
            d === void 0 && (d = !1);
            var e = b("DOM").isNodeOfType(a, "input") && a.type == "text"
              , f = b("DOM").isNodeOfType(a, "textarea");
            if (!(e || f) || a.getAttribute("data-prevent-auto-flip"))
                return;
            e = b("Input").getValue(a);
            f = a.style && a.style.direction;
            if (!f || d) {
                f = 0;
                d = !0;
                for (var g = 0; g < e.length; g++) {
                    var h = e.charCodeAt(g);
                    if (h >= 48) {
                        d && (d = !1,
                        f++);
                        if (h >= 1470 && h <= 1920) {
                            b("Style").set(a, "direction", "rtl");
                            a.setAttribute("dir", "rtl");
                            return
                        }
                        if (f == c) {
                            b("Style").set(a, "direction", "ltr");
                            a.setAttribute("dir", "ltr");
                            return
                        }
                    } else
                        d = !0
                }
            } else
                e.length === 0 && (b("Style").set(a, "direction", ""),
                a.removeAttribute("dir"))
        }
    };
    e.exports = a
}
), null);
__d("FlipDirectionOnKeypress", ["Event", "FlipDirection"], (function(a, b, c, d, e, f) {
    a = function(a) {
        a = a.getTarget();
        b("FlipDirection").setDirection(a)
    }
    ;
    b("Event").listen(document.documentElement, {
        keyup: a,
        input: a
    })
}
), null);
__d("LitestandMessages", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        NEWSFEED_LOAD: "LitestandMessages/NewsFeedLoad",
        LEAVE_HOME: "LitestandMessages/LeaveHome",
        STORIES_REQUESTED: "LitestandMessages/StoriesRequested",
        STORIES_INSERTED: "LitestandMessages/StoriesInserted",
        NEWER_STORIES_REQUESTED: "LitestandMessages/NewerStoriesRequested",
        NEWER_STORIES_INSERTED: "LitestandMessages/NewerStoriesInserted",
        NEW_STORIES_CONTAINER_CREATED: "LitestandMessages/NewStoriesContainer",
        RHC_RELOADED: "LitestandMessages/RHCReloaded",
        STREAM_LOAD_ERROR: "LitestandMessages/StreamLoadError",
        DUPLICATE_CURSOR_ERROR: "LitestandMessages/DuplicateCursorError",
        STREAM_LOAD_RETRY: "LitestandMessages/StreamLoadRetry"
    });
    e.exports = a
}
), null);
__d("Nectar", ["Env", "getContextualParent"], (function(a, b, c, d, e, f) {
    var g;
    function h(a) {
        a.nctr || (a.nctr = {})
    }
    function i(a) {
        if ((g || (g = b("Env"))).module || !a)
            return (g || (g = b("Env"))).module;
        var c = {
            fbpage_fan_confirm: !0,
            photos_snowlift: !0
        }, d;
        while (a && a.getAttribute) {
            var e = a.getAttribute("id");
            if (e != null && e.startsWith("pagelet_"))
                return e;
            !d && c[e] && (d = e);
            a = b("getContextualParent")(a)
        }
        return d
    }
    a = {
        addModuleData: function(a, b) {
            b = i(b);
            b && (h(a),
            a.nctr._mod = b)
        },
        addImpressionID: function(a) {
            (g || (g = b("Env"))).impid && (h(a),
            a.nctr._impid = (g || (g = b("Env"))).impid)
        }
    };
    e.exports = a
}
), null);
__d("AsyncRequestNectarLogging", ["AsyncRequest", "Nectar"], (function(a, b, c, d, e, f) {
    Object.assign(b("AsyncRequest").prototype, {
        setNectarModuleData: function(a) {
            this.method == "POST" && b("Nectar").addModuleData(this.data, a)
        }
    })
}
), null);
__d("onEnclosingPageletDestroy", ["Arbiter", "DOMQuery"], (function(a, b, c, d, e, f) {
    e.exports = a;
    function a(a, c) {
        var d = b("Arbiter").subscribe("pagelet/destroy", function(e, f) {
            b("DOMQuery").contains(f.root, a) && (d.unsubscribe(),
            c())
        });
        return d
    }
}
), null);
__d("UFIReactionsAnimatedKeyframesIcon.react", ["Keyframes.react", "React", "UFIReactionsKeyframesAssets", "UFIReactionTypes"], (function(a, b, c, d, e, f) {
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        c.supportsReaction = function(a) {
            return !!b("UFIReactionsKeyframesAssets").reactions[a]
        }
        ;
        var d = c.prototype;
        d.render = function() {
            var a = this.props
              , c = a.animate
              , d = a.className
              , e = a.maxSize;
            a = a.reactionID;
            var f = b("UFIReactionsKeyframesAssets").initialProgress[a] || 0
              , h = b("UFIReactionsKeyframesAssets").reactions[a];
            return h ? g.jsx(b("Keyframes.react"), {
                projectName: "feedback_reactions",
                assetName: b("UFIReactionTypes").reactions[a].name,
                className: d,
                source: h,
                width: e,
                height: e,
                playing: c,
                initialProgress: f,
                resetOnPause: !0
            }) : g.jsx("div", {
                style: {
                    width: e,
                    height: e
                }
            })
        }
        ;
        return c
    }(g.PureComponent);
    e.exports = a
}
), null);
__d("FbFeedHighlight", ["cx", "CSS", "DOM", "DOMScroll", "JSXDOM"], (function(a, b, c, d, e, f, g) {
    f.highlightAndScrollTo = a;
    f.highlightAndScrollToWithTime = l;
    f.highlightSingle = c;
    f.highlightSingleWithTime = m;
    f.highlight = d;
    f.highlightWithTime = n;
    f.highlightPermanent = o;
    f.scrollTo = p;
    var h = 1e3
      , i = 1e3
      , j = null;
    function k() {
        var a;
        return (a = b("JSXDOM")).div({
            className: "_1usz"
        }, a.div({
            className: "_1us-"
        }), a.div({
            className: "_1us_"
        }), a.div({
            className: "_1ut0"
        }), a.div({
            className: "_1ut1"
        }))
    }
    function a(a) {
        l(a, i, 0)
    }
    function l(a, b, c) {
        n(a, b),
        p(a, c, 0)
    }
    function c(a) {
        m(a, i)
    }
    function m(a, c) {
        var d = k();
        b("DOM").appendContent(a, d);
        setTimeout(function() {
            j && b("DOM").remove(j),
            j = d,
            b("CSS").addClass(a, "_1ut2")
        }, 0);
        setTimeout(function() {
            b("CSS").removeClass(a, "_1ut2"),
            setTimeout(function() {
                b("DOM").remove(d),
                d == j && (j = null)
            }, h + c)
        }, h + c)
    }
    function d(a) {
        n(a, i)
    }
    function n(a, c) {
        var d = o(a);
        setTimeout(function() {
            b("CSS").removeClass(a, "_1ut2"),
            setTimeout(b("DOM").remove.bind(null, d), h + h)
        }, h + c)
    }
    function o(a) {
        var c = k();
        b("DOM").appendContent(a, c);
        setTimeout(function() {
            b("CSS").addClass(a, "_1ut2")
        }, 0);
        return c
    }
    function p(a, c, d) {
        setTimeout(function() {
            b("DOMScroll").scrollTo(a, 750, !1, 0, c)
        }, d)
    }
}
), null);
__d("VisualCompletionGating", ["requireCond", "cr:729414"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("cr:729414");
    e.exports = a
}
), null);
__d("arrayStableSort", [], (function(a, b, c, d, e, f) {
    e.exports = a;
    function a(a, b) {
        return a.map(function(a, b) {
            return {
                data: a,
                index: b
            }
        }).sort(function(a, c) {
            return b(a.data, c.data) || a.index - c.index
        }).map(function(a) {
            return a.data
        })
    }
}
), null);
__d("FbtLogging", ["requireCond", "cr:1094907"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("cr:1094907") == null ? void 0 : b("cr:1094907").logImpression;
    f.logImpression = a
}
), null);
__d("RecaptchaV2Constants", ["keyMirror"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("keyMirror")({
        RESIZE_IFRAME: null,
        CAPTCHA_SOLVED: null,
        GET_ORIGIN: null
    });
    f.RecaptchaV2IFrameMessageTypes = a;
    c = 4;
    f.RECAPTCHAV2_EXTRA_HEIGHT = c;
    d = 78 + c;
    f.RECAPTCHA_V2_INITIAL_HEIGHT = d
}
), null);
__d("getVendorPrefixedEventName", ["fbjs/lib/ExecutionEnvironment"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
        var c = {};
        c[a.toLowerCase()] = b.toLowerCase();
        c["Webkit" + a] = "webkit" + b;
        c["Moz" + a] = "moz" + b;
        c["ms" + a] = "MS" + b;
        c["O" + a] = "o" + b.toLowerCase();
        return c
    }
    var g = {
        animationend: a("Animation", "AnimationEnd"),
        animationiteration: a("Animation", "AnimationIteration"),
        animationstart: a("Animation", "AnimationStart"),
        transitionend: a("Transition", "TransitionEnd")
    }
      , h = {}
      , i = {};
    b("fbjs/lib/ExecutionEnvironment").canUseDOM && (i = document.createElement("div").style,
    "AnimationEvent"in window || (delete g.animationend.animation,
    delete g.animationiteration.animation,
    delete g.animationstart.animation),
    "TransitionEvent"in window || delete g.transitionend.transition);
    function c(a) {
        if (h[a])
            return h[a];
        else if (!g[a])
            return a;
        var b = g[a];
        for (var c in b)
            if (Object.prototype.hasOwnProperty.call(b, c) && c in i)
                return h[a] = b[c];
        return ""
    }
    e.exports = c
}
), null);
__d("ReactTransitionEvents", ["fbjs/lib/ExecutionEnvironment", "getVendorPrefixedEventName"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = [];
    function a() {
        var a = b("getVendorPrefixedEventName")("animationend")
          , c = b("getVendorPrefixedEventName")("transitionend");
        a && g.push(a);
        c && g.push(c)
    }
    b("fbjs/lib/ExecutionEnvironment").canUseDOM && a();
    function h(a, b, c) {
        a.addEventListener(b, c, !1)
    }
    function i(a, b, c) {
        a.removeEventListener(b, c, !1)
    }
    c = {
        addEndEventListener: function(a, b) {
            if (g.length === 0) {
                window.setTimeout(b, 0);
                return
            }
            g.forEach(function(c) {
                h(a, c, b)
            })
        },
        removeEndEventListener: function(a, b) {
            if (g.length === 0)
                return;
            g.forEach(function(c) {
                i(a, c, b)
            })
        }
    };
    e.exports = c
}
), null);
__d("exponentialBackoff", ["MqttEnv"], (function(a, b, c, d, e, f) {
    var g = b("MqttEnv").Env;
    function a(a, b) {
        b === void 0 && (b = null);
        var c = null
          , d = 0;
        function e() {
            for (var e = arguments.length, f = new Array(e), h = 0; h < e; h++)
                f[h] = arguments[h];
            var i = function() {
                a.apply(b, f)
            };
            if (c === null) {
                var j = Math.max(0, Math.pow(2, Math.min(d, 6)) * (1e3 + g.random() * 100) - 2e3);
                c = g.setTimeout(function() {
                    i(),
                    c = null
                }, j)
            }
            d++
        }
        e.reset = function() {
            d = 0,
            c != null && (g.clearTimeout(c),
            c = null)
        }
        ;
        e.isPending = function() {
            return c != null
        }
        ;
        return e
    }
    e.exports = a
}
), null);
__d("ServiceWorkerLoginAndLogout", ["ClientServiceWorkerMessage"], (function(a, b, c, d, e, f) {
    function g(a) {
        new (b("ClientServiceWorkerMessage"))(a,null).sendViaController()
    }
    a = {
        login: function() {
            g("login")
        },
        logout: function() {
            g("logout")
        }
    };
    c = a;
    e.exports = c
}
), null);
__d("DamerauLevenshtein", [], (function(a, b, c, d, e, f) {
    f.DamerauLevenshteinDistance = a;
    function a(a, b) {
        if (a.length === 0)
            return b.length;
        if (b.length === 0)
            return a.length;
        if (a === b)
            return 0;
        var c, d, e = [];
        e[0] = [];
        e[1] = [];
        e[2] = [];
        for (d = 0; d <= b.length; d++)
            e[0][d] = d;
        for (c = 1; c <= a.length; c++)
            for (d = 1; d <= b.length; d++) {
                e[c % 3][0] = c;
                var f = a.charAt(c - 1) === b.charAt(d - 1) ? 0 : 1;
                e[c % 3][d] = Math.min(e[(c - 1) % 3][d] + 1, e[c % 3][d - 1] + 1, e[(c - 1) % 3][d - 1] + f);
                c > 1 && d > 1 && a.charAt(c - 1) == b.charAt(d - 2) && a.charAt(c - 2) == b.charAt(d - 1) && (e[c % 3][d] = Math.min(e[c % 3][d], e[(c - 2) % 3][d - 2] + f))
            }
        return e[a.length % 3][b.length]
    }
}
), null);
