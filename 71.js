if (self.CavalryLogger) {
    CavalryLogger.start_js(["fRmyx"]);
}

__d("UFICreatorInfo.react", ["fbt", "HelpLink.react", "Image.react", "React", "URI", "cxMargin"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a, c = this.getCreatorLink();
            switch (this.props.labelType) {
            case "commented":
                a = g._("Ng\u01b0\u1eddi b\u00ecnh lu\u1eadn: {creator}", [g._param("creator", c)]);
                break;
            case "edited_comment":
                a = g._("\u0110\u01b0\u1ee3c ch\u1ec9nh s\u1eeda b\u1edfi {creator}", [g._param("creator", c)]);
                break;
            case "sent_message":
                a = g._("\u0110\u01b0\u1ee3c g\u1eedi b\u1edfi {creator}", [g._param("creator", c)]);
                break;
            case "page_admin_note":
                a = g._("Ghi ch\u00fa c\u1ee7a {creator}", [g._param("creator", c)]);
                break;
            default:
                return i.jsx("span", {})
            }
            return i.jsxs("span", {
                children: [a, i.jsx(b("HelpLink.react"), {
                    tooltip: this.getHelpText()
                })]
            })
        }
        ;
        d.getCreatorLink = function() {
            switch (this.props.creatorType) {
            case "application":
            case "gray_account":
            case "indirect_admin":
                return i.jsx("a", {
                    className: "uiLinkSubtle",
                    "data-hover": "tooltip",
                    "data-tooltip-content": this.getTooltipText(),
                    children: this.props.creatorName
                });
            case "business_admin":
                return i.jsx("a", {
                    className: "uiLinkSubtle",
                    href: this.props.profileURI,
                    children: this.props.creatorName
                });
            case "direct_admin":
                return this.getProfileLinkWithHovercard();
            case "former_admin":
                return i.jsxs("span", {
                    className: "uiLinkSubtle",
                    children: [i.jsx(b("Image.react"), {
                        src: "/images/privacy/cant-see.png",
                        width: 9,
                        height: 9,
                        className: "_3-8_"
                    }), this.getProfileLinkWithHovercard()]
                });
            default:
                return i.jsx("span", {
                    className: "uiLinkSubtle",
                    children: this.props.creatorName
                })
            }
        }
        ;
        d.getTooltipText = function() {
            switch (this.props.creatorType) {
            case "application":
                return this.getApplicationText();
            case "gray_account":
                return this.getGrayAccountText();
            case "indirect_admin":
                return this.getIndirectAdminText()
            }
            return null
        }
        ;
        d.getProfileLinkWithHovercard = function() {
            if (!this.props.profileURI)
                return i.jsx("span", {
                    children: this.props.creatorName
                });
            var a = new (h || (h = b("URI")))("/ajax/hovercard/user.php").setQueryData({
                id: this.props.creatorID
            }).addQueryData({
                type: "page_admin",
                extragetparams: JSON.stringify({
                    directed_target_id: this.props.pageID
                })
            });
            return i.jsx("a", {
                className: "uiLinkSubtle",
                "data-hovercard": a,
                href: this.props.profileURI,
                children: this.props.creatorName
            })
        }
        ;
        d.getApplicationText = function() {
            switch (this.props.labelType) {
            case "commented":
                return g._("B\u00ecnh lu\u1eadn n\u00e0y \u0111\u01b0\u1ee3c th\u1ef1c hi\u1ec7n b\u1edfi ai \u0111\u00f3 \u0111ang s\u1eed d\u1ee5ng {application}.", [g._param("application", this.props.creatorName)]);
            case "edited_comment":
                return g._("B\u00e0i vi\u1ebft n\u00e0y \u0111\u00e3 \u0111\u01b0\u1ee3c ai \u0111\u00f3 s\u1eed d\u1ee5ng {application} ch\u1ec9nh s\u1eeda.", [g._param("application", this.props.creatorName)]);
            case "sent_message":
                return g._("Tin nh\u1eafn n\u00e0y \u0111\u01b0\u1ee3c g\u1eedi b\u1edfi ai \u0111\u00f3 \u0111ang s\u1eed d\u1ee5ng {application}.", [g._param("application", this.props.creatorName)]);
            case "page_admin_note":
                return g._("\u0110\u00e2y l\u00e0 ghi ch\u00fa c\u1ee7a ai \u0111\u00f3 s\u1eed d\u1ee5ng {application}.", [g._param("application", this.props.creatorName)])
            }
            return null
        }
        ;
        d.getIndirectAdminText = function() {
            switch (this.props.labelType) {
            case "commented":
                return g._("B\u00ecnh lu\u1eadn n\u00e0y \u0111\u01b0\u1ee3c th\u1ef1c hi\u1ec7n b\u1edfi ai \u0111\u00f3 t\u1eeb {page}.", [g._param("page", this.props.creatorName)]);
            case "edited_comment":
                return g._("B\u00e0i vi\u1ebft n\u00e0y \u0111\u00e3 \u0111\u01b0\u1ee3c ai \u0111\u00f3 t\u1eeb {page} ch\u1ec9nh s\u1eeda.", [g._param("page", this.props.creatorName)]);
            case "sent_message":
                return g._("Tin nh\u1eafn n\u00e0y \u0111\u01b0\u1ee3c g\u1eedi b\u1edfi ai \u0111\u00f3 t\u1eeb {page}.", [g._param("page", this.props.creatorName)]);
            case "page_admin_note":
                return g._("\u0110\u00e2y l\u00e0 ghi ch\u00fa c\u1ee7a ai \u0111\u00f3 t\u1eeb {page}.", [g._param("page", this.props.creatorName)])
            }
            return null
        }
        ;
        d.getGrayAccountText = function() {
            switch (this.props.labelType) {
            case "commented":
                return g._("B\u00ecnh lu\u1eadn n\u00e0y \u0111\u01b0\u1ee3c th\u1ef1c hi\u1ec7n b\u1edfi ai \u0111\u00f3 kh\u00f4ng c\u00f3 t\u00e0i kho\u1ea3n Facebook c\u00e1 nh\u00e2n.");
            case "edited_comment":
                return g._("B\u00e0i vi\u1ebft n\u00e0y \u0111\u00e3 \u0111\u01b0\u1ee3c ai \u0111\u00f3 kh\u00f4ng c\u00f3 t\u00e0i kho\u1ea3n c\u00e1 nh\u00e2n tr\u00ean Facebook \u0111\u0103ng.");
            case "sent_message":
                return g._("Tin nh\u1eafn n\u00e0y \u0111\u01b0\u1ee3c g\u1eedi b\u1edfi ai \u0111\u00f3 kh\u00f4ng c\u00f3 t\u00e0i kho\u1ea3n Facebook c\u00e1 nh\u00e2n.");
            case "page_admin_note":
                return g._("\u0110\u00e2y l\u00e0 ghi ch\u00fa c\u1ee7a ai \u0111\u00f3 kh\u00f4ng c\u00f3 t\u00e0i kho\u1ea3n Facebook c\u00e1 nh\u00e2n.")
            }
            return null
        }
        ;
        d.getHelpText = function() {
            switch (this.props.labelType) {
            case "commented":
                return g._("Ch\u1ec9 nh\u1eefng ng\u01b0\u1eddi qu\u1ea3n l\u00fd Trang n\u00e0y m\u1edbi bi\u1ebft ai \u0111\u00e3 b\u00ecnh lu\u1eadn.");
            case "edited_comment":
                return g._("Ch\u1ec9 nh\u1eefng ng\u01b0\u1eddi qu\u1ea3n l\u00fd Trang n\u00e0y m\u1edbi c\u00f3 th\u1ec3 bi\u1ebft ai \u0111\u00e3 ch\u1ec9nh s\u1eeda b\u00ecnh lu\u1eadn");
            case "sent_message":
                return g._("Ch\u1ec9 nh\u1eefng ng\u01b0\u1eddi qu\u1ea3n l\u00fd Trang n\u00e0y m\u1edbi bi\u1ebft ai \u0111\u00e3 g\u1eedi tin nh\u1eafn.");
            case "page_admin_note":
                return g._("Ch\u1ec9 nh\u1eefng ng\u01b0\u1eddi qu\u1ea3n l\u00fd Trang n\u00e0y c\u00f3 th\u1ec3 xem ng\u01b0\u1eddi \u0111\u00e3 t\u1ea1o ghi ch\u00fa")
            }
            return null
        }
        ;
        return c
    }(i.Component);
    e.exports = a
}
), null);
__d("EntstreamFeedObjectTracking", ["csx", "CSS", "DOM", "EntstreamFeedObject", "Focus", "ge"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.register = a;
    f.hideAllFromActor = c;
    f.unhideAllFromActor = d;
    f.getRoot = e;
    var h = new Map();
    function a(a) {
        var c = this.getRoot(a.nodeID);
        if (!c)
            return;
        var d = b("DOM").scry(c, "._5v9_")
          , e = d && d.length ? d : [c];
        a.actorIDs.forEach(function(a) {
            var b = [].concat(h.get(a) || []);
            b.push.apply(b, e);
            h.set(a, b)
        })
    }
    function c(a) {
        var c = this.getRoot(a.nodeID);
        (h.get(a.actorID) || []).forEach(function(a) {
            if (a === c)
                return;
            b("CSS").hide(a)
        })
    }
    function d(a) {
        var c = this.getRoot(a.nodeID);
        (h.get(a.actorID) || []).forEach(function(a) {
            b("CSS").show(a)
        });
        c && b("Focus").setWithoutOutline(c)
    }
    function e(a) {
        a = b("ge")(a);
        return a ? b("EntstreamFeedObject").getRoot(a) : null
    }
}
), null);
__d("FeedTrackingAsync", ["Arbiter", "Run", "collectDataAttributes"], (function(a, b, c, d, e, f) {
    f.init = a;
    var g;
    function a() {
        if (g)
            return;
        g = b("Arbiter").subscribe("AsyncRequest/send", function(a, c) {
            a = c.request;
            c = a.getRelativeTo();
            if (c) {
                a = a.getData();
                c = b("collectDataAttributes")(c, ["ft"]);
                c.ft && Object.keys(c.ft).length && Object.assign(a, c)
            }
        });
        b("Run").onLeave(function() {
            g && (g.unsubscribe(),
            g = null)
        })
    }
}
), null);
__d("FbFeedAccessible", ["csx", "fbt", "invariant", "Arbiter", "ARIA", "CSS", "DataAttributeUtils", "DOMQuery", "LitestandMessages", "SubscriptionsHandler", "ge", "getOrCreateDOMID"], (function(a, b, c, d, e, f, g, h, i) {
    f.init = a;
    f._initSubscriptions = c;
    f.informStoryContentInserted = d;
    f.setARIARole = e;
    f.setAriaLabelledBy = g;
    f.setAriaDescribedBy = q;
    f._getStories = r;
    f._onInsertedSubstream = s;
    f._onStoriesRequested = t;
    f._enumerateStories = u;
    f._enumerateSubstream = v;
    f._enumerateStory = w;
    f._processStoriesLoaded = x;
    f._processStoriesRequested = y;
    f._processInsertedSubstream = z;
    f._processStoryContentInserted = A;
    f._addAriaMarkup = B;
    f._registerStoryEnumerationPosition = C;
    f._isStory = D;
    f._filterForElement = E;
    var j = "Accessibility/StoriesRequested", k = "Accessibility/StoriesLoaded", l = "Accessibility/StoryContentInserted", m = "Accessibility/SubstreamInserted", n, o, p = !1;
    function a(a) {
        n = a,
        p || this._initSubscriptions(),
        this._enumerateStories()
    }
    function c() {
        p = !0;
        var a = new (b("SubscriptionsHandler"))();
        a.addSubscriptions((a = b("Arbiter")).subscribe(b("LitestandMessages").STORIES_REQUESTED, this._onStoriesRequested.bind(this)), a.subscribe(b("LitestandMessages").STORIES_INSERTED, this._onInsertedSubstream.bind(this)), a.subscribe(b("LitestandMessages").NEWER_STORIES_INSERTED, this._onInsertedSubstream.bind(this)), a.subscribe(k, this._processStoriesLoaded.bind(this)), a.subscribe(j, this._processStoriesRequested.bind(this)), a.subscribe(l, this._processStoryContentInserted.bind(this)), a.subscribe(m, this._processInsertedSubstream.bind(this)))
    }
    function d(a) {
        b("Arbiter").inform(l, a);
        a = b("ge")(a);
        a && this._addAriaMarkup(a)
    }
    function e(a) {
        a.setAttribute("role", "article")
    }
    function g(a) {
        if (a.getAttribute("aria-labelledby"))
            return;
        var c = this._filterForElement(a, ["._5pbw"]);
        c.length > 0 && a.setAttribute("aria-labelledby", c.map(function(a) {
            return b("getOrCreateDOMID")(a)
        }).join(" "))
    }
    function q(a) {
        if (a.getAttribute("aria-describedby"))
            return;
        var c = this._filterForElement(a, [".timestampContent", "._5pbx"]);
        c.length > 0 && a.setAttribute("aria-describedby", c.map(function(a) {
            return b("getOrCreateDOMID")(a)
        }).join(" "))
    }
    function r(a) {
        return b("DOMQuery").scry(a || n, "._5jmm")
    }
    function s(a, c) {
        c && c.substream_id && b("Arbiter").inform(m, c.substream_id)
    }
    function t() {
        b("Arbiter").inform(j)
    }
    function u() {
        var a = this
          , b = this._getStories(n);
        o = b.length;
        b.forEach(function(b, c) {
            a._enumerateStory(b, c += 1)
        })
    }
    function v(a) {
        var c = this._getStories();
        o = c.length;
        c = this._getStories(b("ge")(a));
        a = c.length || 0;
        for (var d = 0; d < a; d++)
            this._registerStoryEnumerationPosition(c[d], o - a + (d + 1), d + 1)
    }
    function w(a, b) {
        this._isStory(a) || i(0, 4854),
        b > 0 && (a.setAttribute("aria-posinset", "" + b),
        a.setAttribute("aria-setsize", o))
    }
    function x() {
        b("ARIA").notify(h._("\u0110\u00e3 t\u1ea3i th\u00eam tin."))
    }
    function y() {
        b("ARIA").notify(h._("\u0110\u00e3 y\u00eau c\u1ea7u th\u00eam tin."))
    }
    function z(a, b) {
        this._enumerateSubstream(b),
        this._enumerateStories()
    }
    function A(a, c) {
        var d;
        a = b("ge")(c);
        a && (d = JSON.parse(b("DataAttributeUtils").getDataFt(a)),
        this._addAriaMarkup(a));
        if (d && d.ordinal_position) {
            c = d.ordinal_position.split(":");
            var e = c[0];
            c = c[1];
            e = parseInt(e, 10);
            c = parseInt(c, 10);
            this._enumerateStory(a, e);
            c === 1 && b("Arbiter").inform(k)
        }
    }
    function B(a) {
        if (!this._isStory(a))
            return;
        this.setARIARole(a);
        this.setAriaLabelledBy(a);
        this.setAriaDescribedBy(a)
    }
    function C(a, c, d) {
        var e = JSON.parse(b("DataAttributeUtils").getDataFt(a));
        e && (e.ordinal_position = c + ":" + d,
        b("DataAttributeUtils").setDataFt(a, JSON.stringify(e)))
    }
    function D(a) {
        return b("CSS").matchesSelector(a, "._5jmm")
    }
    function E(a, c) {
        return c.map(function(c) {
            return b("DOMQuery").scry(a || document, c)[0]
        }).filter(function(a) {
            return !!a
        })
    }
}
), null);
__d("CubicBezier", [], (function(a, b, c, d, e, f) {
    var g = .005;
    a = function() {
        function a(a, b) {
            this.cx = 3 * a[0],
            this.bx = 3 * (b[0] - a[0]) - this.cx,
            this.ax = 1 - this.cx - this.bx,
            this.cy = 3 * a[1],
            this.by = 3 * (b[1] - a[1]) - this.cy,
            this.ay = 1 - this.cy - this.by
        }
        var b = a.prototype;
        b.sampleCurveX = function(a) {
            return ((this.ax * a + this.bx) * a + this.cx) * a
        }
        ;
        b.solve = function(a) {
            a = this.solveCurveX(a);
            return ((this.ay * a + this.by) * a + this.cy) * a
        }
        ;
        b.solveCurveX = function(a) {
            var b, c, d, e;
            for (d = a,
            c = 0; c < 8; c++) {
                e = this.sampleCurveX(d) - a;
                if (Math.abs(e) < g)
                    return d;
                b = (3 * this.ax * d + 2 * this.bx) * d + this.cx;
                if (Math.abs(b) < 1e-6)
                    break;
                d -= e / b
            }
            b = 0;
            c = 1;
            d = a;
            if (d < b)
                return b;
            if (d > c)
                return c;
            while (b < c) {
                e = this.sampleCurveX(d);
                if (Math.abs(e - a) < g)
                    return d;
                a > e ? b = d : c = d;
                d = (c - b) / 2 + b
            }
            return d
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("GHLSurvey", ["Banzai", "GHLInternalMonitorStore_DO_NOT_USE", "ghlInternalBumpODSKey", "ghlMonitor", "ghlTestUBT"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        return b("ghlTestUBT")(function(a) {
            var c, d = 3;
            b("Banzai").post("search_check", (c = {},
            c[d] = a,
            c))
        })
    }
    ;
    f.survey = a;
    c = function(a, b) {
        a = document.getElementById(a);
        if (a == null)
            return;
        g(a, b)
    }
    ;
    f.monitorID = c;
    var g = function(a, c) {
        if (b("GHLInternalMonitorStore_DO_NOT_USE").has(a)) {
            b("ghlInternalBumpODSKey")("GHLSurvey", "duplicate-b");
            return
        }
        if (c.t === "") {
            b("ghlInternalBumpODSKey")("GHLSurvey", "missing-t");
            return
        }
        b("ghlMonitor")(a, c.s, c.t, c.o)
    };
    f.monitorEl = g
}
), null);
__d("KeyframesLoop", ["Run", "TimeSlice", "emptyFunction", "gkx", "performanceNow", "requestAnimationFramePolyfill"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = 1e3, i = new Set();
    function j(a) {
        var c = (g || (g = b("performanceNow")))();
        a.callback(Math.min(c - (a.previousTime || c), h));
        a.previousTime = c;
        a.framesRemaining -= 1;
        a.framesRemaining <= 0 && a.cancel()
    }
    function k(a) {
        i.size > 0 && (i.forEach(j),
        b("requestAnimationFramePolyfill")(k))
    }
    b("gkx")("708253") || b("Run").onLeave(function() {
        i.forEach(function(a) {
            return a.cancel()
        })
    });
    window.addEventListener("focus", function() {
        i.forEach(function(a) {
            return a.previousTime = (g || (g = b("performanceNow")))() - 16.67
        })
    });
    a = function() {
        function a(a) {
            this.framesRemaining = Infinity,
            this.callback = a,
            this.previousTime = 0
        }
        var c = a.prototype;
        c.start = function(a) {
            a === void 0 && (a = Infinity),
            this.framesRemaining = a,
            this.$1 || (i.size === 0 && b("requestAnimationFramePolyfill")(k),
            i.add(this),
            this.previousTime = (g || (g = b("performanceNow")))(),
            this.$1 = b("TimeSlice").getGuardedContinuation("KeyframesLoop"))
        }
        ;
        c.cancel = function() {
            this.$1 && (this.$1(b("emptyFunction")),
            this.$1 = null,
            i["delete"](this))
        }
        ;
        c.isRunning = function() {
            return !!this.$1
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("KeyframesEnvironment", ["Promise", "KeyframesLoop", "Run", "debounceCore", "promiseDone"], (function(a, b, c, d, e, f) {
    "use strict";
    f.waitForRenderLoopToStabilize = a;
    f.waitForRenderLoopToStabilizeOncePageIsLoaded = c;
    f.whenRenderLoopHasBeenStableOnce = d;
    f.hasRenderLoopBeenStableOnce = e;
    a = 24;
    var g = 1e3 / a
      , h = 325;
    function i(a) {
        a === void 0 && (a = h);
        return new (b("Promise"))(function(c) {
            var d = b("debounceCore")(function(a) {
                a.cancel(),
                c()
            }, a)
              , e = new (b("KeyframesLoop"))(function(a) {
                a > g && d(e)
            }
            );
            d(e)
        }
        )
    }
    var j = new (b("Promise"))(function(a) {
        b("Run").onAfterLoad(function() {
            a()
        })
    }
    );
    function k(a) {
        return j.then(function() {
            return i(a)
        })
    }
    var l = k()
      , m = !1;
    b("promiseDone")(l, function() {
        m = !0
    });
    function a(a) {
        return i(a)
    }
    function c(a) {
        return k(a)
    }
    function d() {
        return l
    }
    function e() {
        return m
    }
}
), null);
__d("XGroupCallController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/groupcall/{?call_context}/", {
        call_context: {
            type: "String",
            required: !0
        },
        call_id: {
            type: "Int"
        },
        users_to_ring: {
            type: "FBIDSet",
            defaultValue: []
        },
        has_video: {
            type: "Bool",
            defaultValue: !0
        },
        initialize_video: {
            type: "Bool",
            defaultValue: !0
        },
        server_info_data: {
            type: "String"
        },
        nonce: {
            type: "String"
        },
        multiway_www_tier: {
            type: "String"
        },
        multiway_core_tier: {
            type: "String"
        },
        locale: {
            type: "String"
        },
        funnel_session_id: {
            type: "String"
        },
        auto_join: {
            type: "Bool",
            defaultValue: !1
        },
        referrer_context: {
            type: "Enum",
            enumType: 1
        }
    })
}
), null);
