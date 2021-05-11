if (self.CavalryLogger) {
    CavalryLogger.start_js(["04x7Y"]);
}

__d("StickersTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:StickersLoggerConfig", this.$1, b("Banzai").BASIC, a)
        }
        ;
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:StickersLoggerConfig", this.$1, b("Banzai").VITAL, a)
        }
        ;
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:StickersLoggerConfig", this.$1, {
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
        c.setEvent = function(a) {
            this.$1.event = a;
            return this
        }
        ;
        c.setNumsearchresults = function(a) {
            this.$1.numsearchresults = a;
            return this
        }
        ;
        c.setPackid = function(a) {
            this.$1.packid = a;
            return this
        }
        ;
        c.setPackids = function(a) {
            this.$1.packids = b("GeneratedLoggerUtils").serializeVector(a);
            return this
        }
        ;
        c.setSearchtoken = function(a) {
            this.$1.searchtoken = a;
            return this
        }
        ;
        c.setStickerid = function(a) {
            this.$1.stickerid = a;
            return this
        }
        ;
        c.setTagid = function(a) {
            this.$1.tagid = a;
            return this
        }
        ;
        c.setTriggeredword = function(a) {
            this.$1.triggeredword = a;
            return this
        }
        ;
        c.setTriggerused = function(a) {
            this.$1.triggerused = a;
            return this
        }
        ;
        return a
    }();
    c = {
        event: !0,
        numsearchresults: !0,
        packid: !0,
        packids: !0,
        searchtoken: !0,
        stickerid: !0,
        tagid: !0,
        triggeredword: !0,
        triggerused: !0
    };
    e.exports = a
}
), null);
__d("ChatTabAddBackPreventedQuery.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "thread_id"
        }]
          , b = [{
            kind: "Variable",
            name: "id",
            variableName: "thread_id"
        }]
          , c = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        }
          , d = {
            alias: null,
            args: null,
            concreteType: "MessengerGroupNonAddableRecipientsConnection",
            kind: "LinkedField",
            name: "non_addable_recipients",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                concreteType: "MessagingParticipant",
                kind: "LinkedField",
                name: "nodes",
                plural: !0,
                selections: [c],
                storageKey: null
            }],
            storageKey: null
        };
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "ChatTabAddBackPreventedQuery",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: "MessageThread",
                    kind: "LinkedField",
                    name: "message_thread",
                    plural: !1,
                    selections: [d],
                    storageKey: null
                }],
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "ChatTabAddBackPreventedQuery",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: "MessageThread",
                    kind: "LinkedField",
                    name: "message_thread",
                    plural: !1,
                    selections: [d, c],
                    storageKey: null
                }]
            },
            params: {
                id: "2780995325249921",
                metadata: {},
                name: "ChatTabAddBackPreventedQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("AbstractBadge.react", ["cx", "invariant", "React", "formatNumber", "joinClasses", "prop-types"], (function(a, b, c, d, e, f, g, h) {
    var i = b("React");
    function j(a) {
        return parseInt(a, 10) === a
    }
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props
              , c = a.count
              , d = a.maxcount
              , e = a.label;
            a = babelHelpers.objectWithoutPropertiesLoose(a, ["count", "maxcount", "label"]);
            j(c) || h(0, 186);
            j(d) || h(0, 187);
            var f = "_51lp" + (c > d ? " _51lr" : "") + (!this.props.allowZero && c === 0 ? " hidden_elem" : "");
            e = e ? i.jsxs("span", {
                className: "accessible_elem",
                "aria-hidden": c ? "false" : "true",
                children: ["\xa0", e]
            }) : null;
            c = b("formatNumber").withMaxLimit(c, d);
            e !== null && (c = i.jsx("span", {
                "aria-hidden": "true",
                children: c
            }));
            return i.jsxs("span", babelHelpers["extends"]({}, a, {
                className: b("joinClasses")(this.props.className, f),
                children: [c, e]
            }))
        }
        ;
        return c
    }(i.PureComponent);
    e.exports = a;
    a.propTypes = {
        className: (c = b("prop-types")).string,
        count: c.number.isRequired,
        maxcount: c.number,
        label: c.string
    };
    a.defaultProps = {
        maxcount: 20
    }
}
), null);
__d("XUIBadge.react", ["cx", "AbstractBadge.react", "React", "joinClasses", "prop-types"], (function(a, b, c, d, e, f, g) {
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props.type;
            a = "_5ugh" + (a === "regular" ? " _5ugf" : "") + (a === "special" ? " _5ugg" : "");
            return h.jsx(b("AbstractBadge.react"), babelHelpers["extends"]({}, this.props, {
                className: b("joinClasses")(this.props.className, a),
                type: null
            }))
        }
        ;
        return c
    }(h.Component);
    e.exports = a;
    a.propTypes = {
        type: b("prop-types").oneOf(["regular", "special"]),
        allowZero: b("prop-types").bool
    };
    a.defaultProps = {
        type: "regular"
    }
}
), null);
__d("DockTabsViewportFantaTabUtils", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.getMinRequiredWidthForFirstFantaTab = a;
    f.getTabCountToFitWidth = b;
    f.getFantaTabModelFromCallbacks = c;
    f.getNumFantaTabsFromModel = d;
    e = 9;
    a = 284;
    var g = a + e;
    function a() {
        return g + 1
    }
    function b(a) {
        return Math.floor(a / g)
    }
    function c(a) {
        if (!a)
            return null;
        a = a.fantaTabModelStateGetter;
        return a ? a() : null
    }
    function d(a) {
        return a ? a.size : 0
    }
}
), null);
__d("DockTabsViewportPinnedConversationTabUtils", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.getRaisedPinnedConvoTabWidth = j;
    f.getLoweredPinnedConvoTabWidth = k;
    f.getPinnedConvoSelectorWidth = a;
    f.getPinnedConvoTabWidth = b;
    f.getMinRequiredWidthForFirstConvoTab = c;
    f.getPinnedConvoTabsStateFromCallbacks = d;
    f.getNumPinnedConvoTabsFromModel = e;
    var g = 496 + 9 + 2
      , h = 210 + 9 + 2
      , i = 52;
    function j() {
        return g
    }
    function k() {
        return h
    }
    function a() {
        return i
    }
    function b(a) {
        return a.getIsRaised() ? j() : k()
    }
    function c() {
        return j() + i
    }
    function d(a) {
        a = a || {};
        a = a.pinnedConvoTabStateGetter;
        return a ? a() : null
    }
    function e(a) {
        return a ? a.getTotalTabCount() : 0
    }
}
), null);
__d("DockTabsViewportCalculator", ["csx", "Arbiter", "DataStore", "Dock", "DockTabsViewportFantaTabUtils", "DockTabsViewportPinnedConversationTabUtils", "DOM", "Event", "FullScreen", "SubscriptionsHandler", "Vector", "ViewportBounds", "ge", "getViewportDimensions", "setImmediate"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.getInstance = a;
    var h = 50;
    c = 35;
    var i = c
      , j = "dock-tab-viewport-inst";
    function k(a) {
        return a ? b("Vector").getElementDimensions(a).x : 0
    }
    var l = function() {
        function a(a) {
            this.$1 = a,
            this.$3 = 0,
            this.$4 = 0,
            this.$5 = null,
            this.$6 = null,
            this.$7 = !1,
            this.$8 = !1,
            this.$9 = !1,
            this.$2 = new (b("SubscriptionsHandler"))(),
            this.$10(),
            this.$11()
        }
        var c = a.prototype;
        c.$10 = function() {
            var a = this
              , c = this.$12.bind(this);
            this.$2.addSubscriptions(b("Event").listen(window, "resize", c), b("Dock").subscribe("resize", c), b("Arbiter").subscribeOnce("sidebar/initialized", c, "new"), b("FullScreen").subscribe("changed", function() {
                b("FullScreen").isFullScreen() ? (a.$7 = !0,
                a.$8 = !1) : (a.$7 = !1,
                a.$8 && (b("setImmediate")(function() {
                    c()
                }),
                a.$8 = !1))
            }))
        }
        ;
        c.registerFantaTabCallbacks = function(a) {
            this.$5 = a
        }
        ;
        c.registerPinnedConvoTabCallbacks = function(a) {
            this.$6 = a
        }
        ;
        c.forceRecalculateFBDockWidth = function() {
            this.$11(),
            this.$13({
                forceRecalculateChatTabs: !1,
                pinnedConvoUpdateData: null
            })
        }
        ;
        c.forceRecalculateChatTabs = function() {
            this.$13({
                forceRecalculateChatTabs: !0,
                pinnedConvoUpdateData: null
            })
        }
        ;
        c.forceRecalculatePinnedConvoTabs = function(a) {
            this.$13({
                forceRecalculateChatTabs: !0,
                pinnedConvoUpdateData: a
            })
        }
        ;
        c.$12 = function() {
            if (b("FullScreen").isFullScreen() || this.$7) {
                this.$8 = !0;
                return
            }
            this.forceRecalculateFBDockWidth()
        }
        ;
        c.$13 = function(a) {
            var b = a.forceRecalculateChatTabs;
            a = a.pinnedConvoUpdateData;
            var c = this.$14()
              , d = c.chatTabAvailableWidth;
            c = c.pinnedConvoTabAvailableWidth;
            this.$15(d, !!b);
            this.$16(c, a)
        }
        ;
        c.$16 = function(a, b) {
            var c = this.$6 || {};
            c = c.onAvailableWidthChanged;
            c && c(a, b)
        }
        ;
        c.$15 = function(a, b) {
            b = this.$5 || {};
            b = b.onAvailableWidthChanged;
            b && b(a)
        }
        ;
        c.$17 = function() {
            var a = b("DockTabsViewportFantaTabUtils").getFantaTabModelFromCallbacks(this.$5);
            return b("DockTabsViewportFantaTabUtils").getNumFantaTabsFromModel(a)
        }
        ;
        c.$18 = function() {
            return b("DockTabsViewportFantaTabUtils").getMinRequiredWidthForFirstFantaTab()
        }
        ;
        c.$14 = function() {
            var a = this.$3
              , c = {
                chatTabAvailableWidth: a,
                pinnedConvoTabAvailableWidth: 0
            }
              , d = {
                chatTabAvailableWidth: 0,
                pinnedConvoTabAvailableWidth: a
            }
              , e = this.$17()
              , f = b("DockTabsViewportPinnedConversationTabUtils").getPinnedConvoTabsStateFromCallbacks(this.$6)
              , g = b("DockTabsViewportPinnedConversationTabUtils").getNumPinnedConvoTabsFromModel(f);
            if (!f || g === 0)
                return c;
            else if (e === 0)
                return d;
            f = this.$18();
            if (a <= f)
                return c;
            g = b("DockTabsViewportPinnedConversationTabUtils").getMinRequiredWidthForFirstConvoTab();
            e = a - f;
            if (e < g)
                return c;
            else
                d = g;
            e = d;
            c = Math.max(f, a - d);
            return {
                chatTabAvailableWidth: c,
                pinnedConvoTabAvailableWidth: e
            }
        }
        ;
        c.$11 = function() {
            this.$3 = this.$19(),
            this.$20("DockTabsViewportCalculator/recalcTotalDock_FOR_TEST_ONLY")
        }
        ;
        c.$21 = function() {
            var a = this.$1;
            if (!a)
                return {
                    buddyListNubWidth: 0,
                    employeeNubsWidth: 0
                };
            var c = k(a)
              , d = k(b("DOM").find(a, "._56ox"))
              , e = k(b("DOM").scry(a, "._56oy")[0]);
            a = k(b("DOM").scry(a, "._ph1")[0]);
            c = Math.max(c - d - e - a, 0);
            return {
                buddyListNubWidth: d,
                employeeNubsWidth: c
            }
        }
        ;
        c.$19 = function() {
            var a = b("getViewportDimensions").withoutScrollbars().width;
            a -= b("ViewportBounds").getLeft() + b("ViewportBounds").getRight();
            a -= h;
            var c = this.$21()
              , d = c.buddyListNubWidth;
            c = c.employeeNubsWidth;
            a -= d;
            this.$4 = Math.max(this.$4, c);
            a -= this.$4;
            a -= i;
            return Math.max(a, 0)
        }
        ;
        c.enableTestInforms_FOR_TEST_ONLY = function() {
            this.$9 = !0
        }
        ;
        c.$20 = function(a) {
            this.$9 && b("Arbiter").inform(a)
        }
        ;
        c.getChatTabAvailableDockWidth_FOR_TEST_ONLY = function() {
            return this.$14().chatTabAvailableWidth
        }
        ;
        c.getPinnedConvoTabAvailableDockWidth_FOR_TEST_ONLY = function() {
            return this.$14().pinnedConvoTabAvailableWidth
        }
        ;
        c.getAvailableTotalWidth_FOR_TEST_ONLY = function() {
            return this.$3
        }
        ;
        return a
    }();
    function a(a) {
        var c = b("ge")("pagelet_dock");
        if (!c || !b("DOM").contains(c, a))
            return null;
        a = b("DataStore").get(c, j);
        if (a instanceof l)
            return a;
        var d = b("DOM").scry(c, ".fbDockWrapperRight .fbDock")[0];
        a = new l(d);
        b("DataStore").set(c, j, a);
        return a
    }
}
), null);
__d("ChatInitialDataTransformer.bs", ["bs_js_dict", "bs_caml_format", "bs_caml_option", "MessengerServerPayloadTransformer.bs"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a) {
        var c = a.viewer
          , d = a.is_page
          , e = []
          , f = []
          , g = {}
          , h = []
          , i = {}
          , j = [];
        a.threads.forEach(function(a) {
            if (a == null)
                return 0;
            else {
                var k, l = (k = b("MessengerServerPayloadTransformer.bs")).getThreadFBID(a), m = k.getOtherUserID(a), n = k.transformThread(c, a, d);
                e.push(n);
                k = k.transformMessages(c, a, d);
                k !== void 0 && k.forEach(function(a) {
                    f.push(a);
                    return 0
                });
                k = b("MessengerServerPayloadTransformer.bs").getMessagePageInfo(a);
                k !== void 0 && (b("bs_caml_option").valFromOption(k).has_previous_page || (l == null ? m == null || j.push({
                    type: "thread",
                    fbid: m
                }) : j.push({
                    type: "thread",
                    fbid: l
                })));
                k = b("MessengerServerPayloadTransformer.bs").transformReadReceipts(c, a);
                if (k !== void 0) {
                    k = b("bs_caml_option").valFromOption(k);
                    l == null || (g[l] = k);
                    m == null || (g[m] = k)
                }
                l = b("MessengerServerPayloadTransformer.bs").transformDeliveryReceipts(a);
                if (l.length !== 0) {
                    m = l[0];
                    if (n.is_canonical) {
                        k = n.other_user_fbid;
                        k == null || h.push({
                            other_user_fbid: k,
                            thread_fbid: null,
                            time: b("bs_caml_format").caml_float_of_string(m.timestamp_precise)
                        })
                    } else {
                        l = n.thread_fbid;
                        l == null || h.push({
                            other_user_fbid: null,
                            thread_fbid: l,
                            time: b("bs_caml_format").caml_float_of_string(m.timestamp_precise)
                        })
                    }
                }
                k = b("MessengerServerPayloadTransformer.bs").transformParticipants(a);
                k.forEach(function(a) {
                    i[a.fbid] = a;
                    return 0
                });
                return 0
            }
        });
        return {
            threads: e,
            actions: f,
            roger: g,
            delivery_receipts: h,
            participants: b("bs_js_dict").values(i),
            end_of_history: j
        }
    }
    f.transform = a
}
), null);
__d("ChatInitialDataTransformerServerCallableWrapper", ["ChatInitialDataTransformer.bs"], (function(a, b, c, d, e, f) {
    "use strict";
    b("ChatInitialDataTransformer.bs");
    a = {};
    e.exports = a
}
), null);
__d("ChatActivity", ["ArbiterMixin", "Event", "MercuryConfig", "PresenceState", "UserActivity", "mixin"], (function(a, b, c, d, e, f) {
    var g = b("MercuryConfig").activity_limit || 6e4
      , h = b("MercuryConfig").idle_limit || 18e5;
    a = b("MercuryConfig").idle_poll_interval || 3e5;
    var i = Date.now()
      , j = !0;
    function k() {
        var a = Date.now();
        return !!(j && a - i < g)
    }
    c = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.isActive = k,
            b) || babelHelpers.assertThisInitialized(c)
        }
        return b
    }(b("mixin")(b("ArbiterMixin")));
    var l = new c();
    function m() {
        var a = i;
        i = Date.now();
        i - a > h && b("PresenceState").doSync();
        l.inform("activity")
    }
    b("Event").listen(window, "focus", function() {
        j = !0,
        m()
    });
    b("Event").listen(window, "blur", function() {
        j = !1
    });
    b("UserActivity").subscribe(function() {
        m()
    });
    function n(a) {
        a = a && a.at && b("PresenceState").verifyNumber(a.at);
        typeof a !== "number" && (a = null);
        return a || 0
    }
    setInterval(function() {
        var a = Date.now()
          , c = n(b("PresenceState").get());
        c = Math.max(i, c);
        a - c > h && l.inform("idle", a - c)
    }, a);
    b("PresenceState").registerStateStorer(function(a) {
        var b = n(a);
        b < i && (a.at = i);
        return a
    });
    d = l;
    e.exports = d
}
), null);
__d("ChatAnimatedGifs", ["URI"], (function(a, b, c, d, e, f) {
    f.shouldHideBody = a;
    f.getRawUrlFromSafeUrl = h;
    var g;
    function a(a) {
        if (!a.has_attachment)
            return !1;
        for (var b = 0; b < a.attachments.length; b++) {
            var c = a.attachments[b];
            if (c.preview_url) {
                c = h(c.preview_url);
                if (a.body == c)
                    return !0
            }
        }
        return !1
    }
    function h(a) {
        return new (g || (g = b("URI")))(a).getQueryData().url
    }
}
), null);
__d("ChatAppActionTypes", ["keyMirror"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("keyMirror")({
        INITIAL_DISPLAY_DONE: null,
        HIDE: null,
        LOAD: null,
        TTI: null,
        UNHIDE: null
    });
    e.exports = a
}
), null);
__d("ChatAppActions", ["ChatAppActionTypes", "ChatDispatcher"], (function(a, b, c, d, e, f) {
    "use strict";
    f.tti = a;
    f.hide = c;
    f.unhide = d;
    f.setInitialDisplayDone = e;
    f.load = g;
    function a() {
        b("ChatDispatcher").dispatch({
            type: b("ChatAppActionTypes").TTI
        })
    }
    function c() {
        b("ChatDispatcher").dispatch({
            type: b("ChatAppActionTypes").HIDE
        })
    }
    function d() {
        b("ChatDispatcher").dispatch({
            type: b("ChatAppActionTypes").UNHIDE
        })
    }
    function e() {
        b("ChatDispatcher").dispatch({
            type: b("ChatAppActionTypes").INITIAL_DISPLAY_DONE
        })
    }
    function g() {
        b("ChatDispatcher").dispatch({
            type: b("ChatAppActionTypes").LOAD
        })
    }
}
), null);
__d("ChatAppStore", ["ChatAppActionTypes", "ChatDispatcher", "FluxStore"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c;
            c = a.call(this, b("ChatDispatcher")) || this;
            c.$ChatAppStore2 = {
                initialDisplayDone: !1,
                isHidden: !1,
                isInitialized: !1,
                isLoaded: !1
            };
            c.$ChatAppStore1 = babelHelpers["extends"]({}, c.$ChatAppStore2);
            return c
        }
        var d = c.prototype;
        d.__onDispatch = function(a) {
            a = a.type;
            this.$ChatAppStore1 = babelHelpers["extends"]({}, this.$ChatAppStore2);
            switch (a) {
            case b("ChatAppActionTypes").INITIAL_DISPLAY_DONE:
                this.$ChatAppStore2.initialDisplayDone = !0;
                this.__emitChange();
                break;
            case b("ChatAppActionTypes").HIDE:
                this.$ChatAppStore2.isHidden = !0;
                this.__emitChange();
                break;
            case b("ChatAppActionTypes").UNHIDE:
                this.$ChatAppStore2.isHidden = !1;
                this.__emitChange();
                break;
            case b("ChatAppActionTypes").TTI:
                this.$ChatAppStore2.isInitialized = this.$ChatAppStore2.isLoaded = !0;
                this.__emitChange();
                break;
            case b("ChatAppActionTypes").LOAD:
                this.$ChatAppStore2.isLoaded = !0;
                this.__emitChange();
                break
            }
        }
        ;
        d.getPreviousState = function() {
            return this.$ChatAppStore1
        }
        ;
        d.getState = function() {
            return this.$ChatAppStore2
        }
        ;
        return c
    }(b("FluxStore"));
    a.__moduleID = e.id;
    c = new a();
    e.exports = c
}
), null);
__d("messengerCustomColorUtils", ["ChatConfig"], (function(a, b, c, d, e, f) {
    "use strict";
    f.customBubbleStyle = a;
    function a(a, c) {
        c = c || {};
        b("ChatConfig").getBool("chat_tab_has_gradients") || (c.backgroundColor = a);
        return c
    }
}
), null);
__d("ChatBubble.react", ["cx", "BootloadedComponent.react", "DOMDimensions", "EmojiOnlyMessage.react", "ErrorBoundary.react", "JSResource", "MercuryConfig", "MercuryMessageBody.react", "MercuryMessageRenderLocations", "MessageReplyPermissions", "MessengerMathUtils", "MessengerSupportedEmojiUtils", "React", "ReactDOM", "createReactClass_DEPRECATED", "joinClasses", "messengerCustomColorUtils", "prop-types"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = 2;
    c = b("createReactClass_DEPRECATED")({
        displayName: "ChatBubble",
        _boxWidth: 0,
        _repliedToMessageRef: null,
        propTypes: {
            attachments: (a = b("prop-types")).node,
            body: a.string,
            className: a.string,
            customColor: a.string,
            customLike: a.object,
            isEmojiLike: a.bool,
            isFromViewer: a.bool,
            maxWidth: a.number.isRequired,
            message: a.object,
            metaRanges: a.array,
            onReplyToMessage: a.func,
            ranges: a.array,
            threadCustomColor: a.string,
            threadID: a.string,
            isForwarded: a.bool
        },
        getInitialState: function() {
            return {
                emojis: void 0,
                bubbleWidth: null
            }
        },
        componentDidMount: function() {
            if (this.props.attachments && !this.props.isEmojiLike)
                return;
            if (!this.props.emojis) {
                var a = this.props.body || "";
                a = b("MessengerSupportedEmojiUtils").getEmojiOnlyContents(a);
                a && a.length && this.setState({
                    emojis: a
                })
            }
            this._restyleBubble(this.props)
        },
        componentDidUpdate: function(a) {
            (a.maxWidth !== this.props.maxWidth || a.body !== this.props.body || !a.attachments && this.props.attachments) && this._restyleBubble(a)
        },
        render: function() {
            var a = this.props
              , c = a.attachments
              , d = a.body;
            d = d === void 0 ? "" : d;
            var e = a.isForwarded
              , f = a.className
              , g = a.maxWidth;
            a = babelHelpers.objectWithoutPropertiesLoose(a, ["attachments", "body", "isForwarded", "className", "maxWidth"]);
            a = Object.assign({}, a);
            delete a.customColor;
            delete a.customLike;
            delete a.isEmojiLike;
            delete a.isFromViewer;
            delete a.message;
            delete a.metaRanges;
            delete a.ranges;
            delete a.threadCustomColor;
            delete a.threadID;
            return h.jsx("div", babelHelpers["extends"]({}, a, {
                className: b("joinClasses")("_5w1r" + (this.state.emojis ? "" : " _3_om") + (this.state.emojis ? " _31xx" : "") + (((a = this.props) == null ? void 0 : (a = a.message) == null ? void 0 : (a = a.replied_to_message) == null ? void 0 : (a = a.message) == null ? void 0 : a.body) && !b("MercuryConfig").SM3BD ? " _1vmy" : ""), f),
                ref: "bubble",
                style: {
                    maxWidth: g,
                    width: this.state.emojis || e ? null : this.state.bubbleWidth,
                    wordWrap: d.length >= 15 ? "break-word" : "inherit"
                },
                children: h.jsxs("div", {
                    className: "_4gx_",
                    ref: "inner",
                    children: [this._renderContent(), c]
                })
            }))
        },
        _renderContent: function() {
            if (!this.props.body || this.props.isEmojiLike)
                return null;
            var a = {}
              , c = null;
            this.state.emojis ? c = h.jsx(b("EmojiOnlyMessage.react"), {
                contents: this.state.emojis
            }) : (c = h.jsx(b("MercuryMessageBody.react"), {
                body: this.props.body,
                ranges: this.props.ranges,
                metaRanges: this.props.metaRanges,
                threadID: this.props.threadID,
                customLike: this.props.customLike,
                threadCustomColor: this.props.threadCustomColor,
                isFromViewer: this.props.isFromViewer,
                renderLocation: b("MercuryMessageRenderLocations").CHAT
            }),
            this.props.customColor && (a = b("messengerCustomColorUtils").customBubbleStyle(this.props.customColor, a)));
            var d = this.props.message && this.props.message.replied_to_message && b("MessageReplyPermissions").bubbleContainsRepliedToMessage(this.props.message.replied_to_message, !!this.state.emojis) ? h.jsx(b("ErrorBoundary.react"), {
                children: h.jsx(b("BootloadedComponent.react"), {
                    bootloadLoader: b("JSResource")("RepliedToMessageContent.react").__setRef("ChatBubble.react"),
                    bootloadPlaceholder: h.jsx("div", {}),
                    isFromViewer: this.props.isFromViewer,
                    isLinkified: !0,
                    isMessengerUI: !1,
                    repliedToMessageData: this.props.message && this.props.message.replied_to_message,
                    threadID: this.props.threadID,
                    ref: this._setRepliedToMessageRef,
                    replyInOneBubble: !0
                })
            }) : null;
            return h.jsxs("div", {
                className: "_1aa6" + (this.state.emojis ? " _31xy" : "") + (this.props.message && this.props.message.isSelected ? " _1yok" : "") + (d ? " _6e7o" : ""),
                ref: "contentWrapper",
                style: a,
                children: [d, d ? "\n" : null, h.jsx("div", {
                    className: "",
                    children: h.jsx("span", {
                        className: "_5yl5",
                        ref: "content",
                        children: c
                    })
                })]
            })
        },
        _restyleBubble: function(a) {
            if (this.props.attachments || this.props.body != null && b("MessengerMathUtils").isMathBlock(this.props.body.trim())) {
                this.setState({
                    bubbleWidth: null
                });
                return
            }
            var c = b("ReactDOM").findDOMNode(this.refs.bubble);
            if (a.maxWidth !== this.props.maxWidth || b("DOMDimensions").getElementDimensions(c).width > this.props.maxWidth) {
                a = this.props.maxWidth;
                this.setState({
                    bubbleWidth: a
                }, this._shrinkBubble);
                return
            }
            this._shrinkBubble()
        },
        _shrinkBubble: function() {
            var a = b("ReactDOM").findDOMNode(this.refs.bubble);
            if (!a)
                return;
            a = b("DOMDimensions").getElementDimensions(a).width;
            var c = b("ReactDOM").findDOMNode(this.refs.content)
              , d = b("DOMDimensions").getElementDimensions(c).width;
            if (this._repliedToMessageRef) {
                var e = b("ReactDOM").findDOMNode(this._repliedToMessageRef);
                e = b("DOMDimensions").getElementDimensions(e).width;
                d = Math.max(e, d)
            }
            e = c ? d + b("DOMDimensions").measureElementBox(b("ReactDOM").findDOMNode(this.refs.contentWrapper) || {}, "width", !0, !1, !1) : 0;
            c = e + i;
            d > 0 && c < this.props.maxWidth && a - c - this.getBoxWidth() > 0 && this.setState({
                bubbleWidth: c
            })
        },
        contentWraps: function() {
            var a = b("ReactDOM").findDOMNode(this.refs.content);
            if (!a)
                return !1;
            var c = a.getClientRects();
            a = b("DOMDimensions").getElementDimensions(a).height;
            return c && c.length > 1 && c[0].height < a
        },
        _setRepliedToMessageRef: function(a) {
            this._repliedToMessageRef = a
        },
        getBoxWidth: function() {
            this._boxWidth || (this._boxWidth = b("DOMDimensions").measureElementBox(b("ReactDOM").findDOMNode(this.refs.bubble) || {}, "width", !0, !0, !1));
            return this._boxWidth
        }
    });
    d = c;
    e.exports = d
}
), null);
__d("ChatCodePasteUtils", ["cx", "BanzaiODS", "ChatBubble.react", "MessengerFormattingUtils", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.containsCodeBlock = a;
    f.getCodeAndMessageBubbles = c;
    var h = b("React")
      , i = /`{3,}/
      , j = 3
      , k = /^\s+/
      , l = /\s+$/;
    function a(a) {
        return !!(a && a.search(i) !== -1)
    }
    function m(a, b) {
        var c = 0;
        if (b - 2 >= 0) {
            c += a[b - 2].trim().length;
            var d = a[b - 2].match(l);
            d && (c += d[0].length)
        }
        b - 1 >= 0 && (c += a[b - 1].length + 2 * j);
        d = a[b].match(k);
        d && (c += d[0].length);
        return c
    }
    function n(a, b, c) {
        if (a)
            return a.map(function(a) {
                return Object.assign(Object.assign({}, a), {
                    offset: a.offset - b
                })
            }).filter(function(a) {
                return 0 <= a.offset && a.offset < c
            });
        else
            return a
    }
    function o(a) {
        return a.length === 1 ? {
            language: "",
            code: a[0]
        } : {
            language: a[0].replace(/[^a-zA-Z]+/g, ""),
            code: a.slice(1).join("\n")
        }
    }
    function p(a) {
        var c = b("MessengerFormattingUtils").getRanges(a).filter(function(a) {
            return a.formatter === b("MessengerFormattingUtils").formatConfigs.blockquote.formatter || a.formatter === b("MessengerFormattingUtils").formatConfigs.blockcode.formatter
        }).sort(function(a, b) {
            return a.offset !== b.offset ? a.offset - b.offset : b.length - a.length
        })
          , d = []
          , e = 0
          , f = 0;
        for (var g = 0; g < c.length; g++) {
            var h = c[g];
            if (h.offset < f)
                continue;
            h.formatter === b("MessengerFormattingUtils").formatConfigs.blockcode.formatter && (d.push(a.substring(e, h.offset)),
            d.push(h.innerText),
            e = h.offset + h.length);
            f = h.offset + h.length
        }
        d.push(a.substring(e));
        return d
    }
    function c(a, c, d, e, f) {
        a = p(a);
        var g = []
          , i = 0;
        for (var j = 0; j < a.length; j += 2) {
            var k = a[j].trim();
            if (k && k.length > 0) {
                i += m(a, j);
                var l = d ? n(d, i, k.length) : d;
                g.push(h.jsx("div", {
                    className: "_1e-x _n4o",
                    children: h.jsx(b("ChatBubble.react"), {
                        body: k,
                        customColor: f || void 0,
                        className: "clearfix _5wdf",
                        maxWidth: c,
                        ranges: l || void 0,
                        threadID: e || void 0
                    })
                }, j))
            }
            if (j + 1 < a.length && a[j + 1]) {
                k = a[j + 1].split("\n");
                l = o(k);
                k = l.language;
                l = l.code;
                b("BanzaiODS").bumpEntityKey(3303, "chat_code_paste", "render_bubble");
                g.push(h.jsx("div", {
                    className: "_1e-x _n4o",
                    children: h.jsx("div", {
                        ref: "bubble",
                        className: "_3_om _4yng _5wdf",
                        children: h.jsx("div", {
                            style: {
                                maxWidth: c
                            },
                            ref: "syntaxTarget" + j,
                            className: "language-" + k,
                            children: l
                        })
                    })
                }, j + 1))
            }
        }
        return g
    }
}
), null);
__d("ChatGroupMembershipDialogBootloader", ["Bootloader", "CurrentUser", "MercuryIDs", "React", "immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    f.bootload = a;
    var g = b("React");
    function a(a, c, d, e) {
        if (!d || !c)
            return;
        b("Bootloader").loadModules(["MessengerDialogs.bs", "MessengerState.bs", "ChatGroupMembershipDialog.react"], function(f, h, i) {
            f.showDialog(function() {
                var j;
                return g.jsx(h.jsComponent, {
                    fbid: (j = e) != null ? j : b("CurrentUser").getID(),
                    children: function(e) {
                        var j = h.thread(e, d);
                        if (j == null || j.participants == null)
                            return null;
                        var k = c.filter(function(a) {
                            return j.participants.includes(a.id)
                        });
                        return g.jsx(i, {
                            blockedIDs: h.blockedIds(e),
                            dialogShown: !0,
                            membershipParticipants: a,
                            onHide: f.removeAllDialogs,
                            participants: k,
                            thread: j,
                            threadID: b("MercuryIDs").getThreadIDFromThreadFBID(j.thread_fbid)
                        })
                    }
                })
            })
        }, "ChatGroupMembershipDialogBootloader")
    }
}
), null);
__d("ChatPrivacyActionController", ["ChatVisibility", "PresencePrivacy"], (function(a, b, c, d, e, f) {
    a = function a(c, d) {
        this._userID = c;
        this._getState = function() {
            return b("ChatVisibility").isOnline() ? b("PresencePrivacy").allows(this._userID) ? a.NORMAL : a.BLOCKED : a.OFFLINE
        }
        ;
        this._togglePrivacy = function() {
            switch (this._getState()) {
            case a.OFFLINE:
                if (b("ChatVisibility").isOnline())
                    break;
                b("ChatVisibility").goOnline(function() {
                    b("PresencePrivacy").allows(this._userID) || this._togglePrivacy()
                }
                .bind(this));
                break;
            case a.BLOCKED:
                b("PresencePrivacy").allow(this._userID);
                break;
            case a.NORMAL:
                b("PresencePrivacy").disallow(this._userID);
                break
            }
        }
        ;
        c = function() {
            d && d(this._getState())
        }
        .bind(this);
        c();
        this._subscribeToken = b("PresencePrivacy").subscribe("privacy-changed", c)
    }
    ;
    a.OFFLINE = "offline";
    a.BLOCKED = "blocked";
    a.NORMAL = "normal";
    Object.assign(a.prototype, {
        togglePrivacy: function() {
            this._togglePrivacy()
        },
        destroy: function() {
            this._subscribeToken && b("PresencePrivacy").unsubscribe(this._subscribeToken)
        }
    });
    e.exports = a
}
), null);
__d("ChatTitleBarBlinker", ["ChatActivity", "DocumentTitle", "MercuryThreadInformer", "MercuryNotificationRenderer", "PresenceState", "gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    d = b("MercuryThreadInformer").get();
    var g = null
      , h = 0
      , i = !1
      , j = 0;
    function k() {
        if (g) {
            g.stop();
            g = null;
            return !0
        }
        return !1
    }
    function l(a) {
        a = a || j;
        h <= a && (h = a,
        (k() || i) && b("PresenceState").doSync())
    }
    f = {
        blink: function(a, c) {
            if (!g && h < c) {
                j = c;
                if (b("gkx")("1263879"))
                    return;
                b("MercuryNotificationRenderer").renderDocumentTitle(a, function(a) {
                    g || (g = b("DocumentTitle").blink(a))
                })
            }
        },
        stopBlinking: function() {
            l()
        },
        blinkingElsewhere: function() {
            i = !0
        }
    };
    function m(a) {
        a = b("PresenceState").verifyNumber(a.sb2);
        return !a || a <= h ? null : a
    }
    function a(a) {
        a = a && m(a);
        a && (h = a,
        k(),
        i = !1)
    }
    function c(a) {
        var b = m(a);
        b || (a.sb2 = h,
        i = !1);
        return a
    }
    b("PresenceState").registerStateStorer(c);
    b("PresenceState").registerStateLoader(a);
    d.subscribe("thread-read-changed", function(a, b) {
        a = 0;
        for (var c in b)
            b[c].mark_as_read && b[c].timestamp >= j && b[c].timestamp > a && (a = b[c].timestamp);
        a && l(a)
    });
    b("ChatActivity").subscribe("activity", function() {
        return l()
    });
    c = b("PresenceState").getInitial();
    c && (h = m(c) || 0);
    e.exports = f
}
), null);
__d("ChatCollapsedLogMessageGroup.react", ["cx", "fbt", "Link.react", "React"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.state = {
                collapsed: !0
            },
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.render = function() {
            var a = this
              , c = h._("Xem ho\u1ea1t \u0111\u1ed9ng m\u1edbi nh\u1ea5t")
              , d = h._("\u1ea8n b\u1edbt ho\u1ea1t \u0111\u1ed9ng");
            return i.jsxs("div", {
                className: "_5w0o",
                children: [i.jsx(b("Link.react"), {
                    className: "_4ea1",
                    onClick: function() {
                        return a.setState({
                            collapsed: !a.state.collapsed
                        })
                    },
                    children: this.state.collapsed ? c : d
                }), this.state.collapsed ? null : i.jsxs("div", {
                    children: [i.jsx("div", {
                        className: "_2zsu"
                    }), this.props.children, i.jsx("div", {
                        className: "_2zsu"
                    })]
                })]
            })
        }
        ;
        return c
    }(i.PureComponent);
    e.exports = a
}
), null);
__d("ChatComposerFlyoutButtonBootLoader.react", ["AutoFocusableLink.react", "JSResource", "LazyComponent.react", "MercuryBootloadOnInteraction.react", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = g.jsx(b("MercuryBootloadOnInteraction.react"), {
            component: g.jsx(b("LazyComponent.react"), babelHelpers["extends"]({}, a, {
                className: a.iconClassName
            })),
            loader: b("JSResource")("MessengerComposerFlyoutButton.react").__setRef("ChatComposerFlyoutButtonBootLoader.react"),
            placeholder: a.renderSVGIcon ? g.jsx(b("AutoFocusableLink.react"), {
                label: "flyout button",
                className: a.iconClassName,
                children: a.renderSVGIcon(!1)
            }) : g.jsx(b("AutoFocusableLink.react"), {
                label: "flyout button",
                className: a.iconClassName
            })
        });
        return a.excludeTag ? c : g.jsxs("li", {
            className: a.interactionClassName,
            children: [" ", c, " "]
        })
    }
}
), null);
__d("ChatDateBreak.react", ["cx", "FBLogger", "React", "formatDate", "joinClasses"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.shouldComponentUpdate = function(a) {
            return this.props.date.getTime() !== a.date.getTime()
        }
        ;
        d.render = function() {
            try {
                var a = b("formatDate")(this.props.date, {
                    future: "g:ia",
                    today: "g:ia",
                    withinWeek: "D g:ia",
                    thisYear: "M jS, g:ia",
                    older: "m/d/Y g:ia"
                });
                return h.jsx("time", {
                    className: b("joinClasses")(this.props.className, "_5w-5"),
                    children: h.jsx("span", {
                        className: "_5w-6",
                        children: a
                    })
                })
            } catch (a) {
                b("FBLogger")("mercury").catching(a).mustfix("incorrect format in datebreak");
                return null
            }
        }
        ;
        return c
    }(h.Component);
    e.exports = a
}
), null);
__d("convertMIGColorToFIGColor", ["cssVar"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = {
        "#0077e5": "#4080ff",
        "#44bec7": "#54C7EC",
        "#ffc300": "#f5c33b",
        "#fa3c4c": "#F35369",
        "#d696bb": "#d696bb",
        "#6699cc": "#7596c8",
        "#13cf13": "#42b72a",
        "#ff7e29": "#F7923B",
        "#e68585": "#e68585",
        "#7646ff": "#8C72CB",
        "#20cef5": "#54C7EC",
        "#67b868": "#A3CE71",
        "#d4a88c": "#cfa588",
        "#ff5ca1": "#EC7EBD",
        "#a695c7": "#AF9CDA"
    };
    function a(a) {
        return a && h[a] || a || ""
    }
}
), null);
__d("ChatMessage.react", ["csx", "cx", "fbt", "requireCond", "BootloadedComponent.react", "ChatAnimatedGifs", "ChatBubble.react", "ChatCodePasteUtils", "ChatConfig", "cr:1290594", "CSS", "CurrentUser", "EmojiLikeUtils", "ImmutableObject", "JSResource", "Locale", "MercuryAttachment", "MercuryDisplayTimeFilterMessageRenderer", "MercuryErrorInfo", "MercuryIDs", "MercuryMessageError.react", "MercuryTimestamp", "MessengerDecorator", "MessengerInnerDecorators.react", "MessengerMessage.bs", "MessengerVideoAutoplayStore", "React", "ReactDOM", "TooltipData", "XUISpinner.react", "convertMIGColorToFIGColor", "gkx", "immutable", "isRTL", "joinClasses", "prop-types", "setImmediate"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.state = {
                isVisible: !1,
                isHighlighted: !1,
                hovered: !1
            },
            c.$3 = function() {
                return c.setState({
                    hovered: !0
                })
            }
            ,
            c.$4 = function() {
                return c.setState({
                    hovered: !1
                })
            }
            ,
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            var a = this;
            b("CSS").conditionClass(b("ReactDOM").findDOMNode(this), "_2cnu", this.isOneLine());
            this.setState({
                isVisible: b("MessengerVideoAutoplayStore").isVisible(this.props.message.thread_id, this.props.message.message_id)
            });
            this.$1 = b("MessengerVideoAutoplayStore").addListener(function(c) {
                c = b("MessengerVideoAutoplayStore").isVisible(a.props.message.thread_id, a.props.message.message_id);
                c !== a.state.isVisible && a.setState({
                    isVisible: c
                })
            })
        }
        ;
        d.componentWillUnmount = function() {
            this.$1 && this.$1.remove()
        }
        ;
        d.isOneLine = function() {
            var a = this.props.message;
            return b("MessengerMessage.bs").isInbound(a) && !this.refs.attachmentsInside && this.refs.bubble && !this.refs.bubble.contentWraps()
        }
        ;
        d.shouldComponentUpdate = function(a, b) {
            var c = a.message !== this.props.message
              , d = !1
              , e = !1
              , f = this.props.thread;
            if (f)
                d = f.custom_like_icon !== a.thread.custom_like_icon,
                e = f.solid_color !== a.thread.solid_color;
            else if (a.thread)
                return !0;
            return c || d || e || b.isVisible !== this.state.isVisible || b.isHighlighted !== this.state.isHighlighted || b.hovered !== this.state.hovered
        }
        ;
        d.render = function() {
            var a = this.props.message
              , c = b("MercuryAttachment").get(a).length > 0
              , d = b("MessengerMessage.bs").isInbound(a)
              , e = b("MercuryIDs").isGroupChat(a.thread_id)
              , f = b("MercuryErrorInfo").hasErrorStatus(a)
              , g = b("ChatConfig").getBool("chat_tab_has_gradients");
            c = "_5wd4" + (d ? " _1nc7" : "") + (d ? "" : " _1nc6") + (c ? " _2_-t" : "") + (d && e ? " _5ysy" : "") + (f ? " _1zcs" : "") + (this.state.isHighlighted && !g ? " _6iuj" : "");
            var h = this.props.isFromViewer
              , i = []
              , k = a
              , l = this.props.thread ? b("convertMIGColorToFIGColor")(this.props.thread.solid_color) : ""
              , m = (d = this.props.thread) == null ? void 0 : d.custom_nickname;
            k && b("MessengerDecorator").getBeforeDecorators().forEach(function(a) {
                a.check(k) && i.push(a.render(k, h, {
                    customColor: l,
                    nicknames: m
                }))
            });
            e = b("MercuryAttachment").get(a).filter(function(a) {
                return !b("MercuryAttachment").isBubblePreferred(a)
            });
            f = this.$2("outside", e);
            return j.jsxs("div", {
                className: b("joinClasses")(this.props.className, c),
                onMouseEnter: this.$3,
                onMouseLeave: this.$4,
                children: [j.jsxs("div", {
                    className: b("joinClasses")("._1dlq", "_h8t"),
                    children: [i, this.$5(f)]
                }), e.some(function(a) {
                    return b("MercuryAttachment").isShareAttachment(a)
                }) ? j.jsx(b("MessengerInnerDecorators.react"), {
                    message: a,
                    isFromViewer: h || !1,
                    hovered: this.state.hovered,
                    onReactionSwap: this.props.onReactionSwap,
                    messageProps: this.props,
                    forGameChat: this.props.forGameChat
                }) : j.jsx("div", {
                    className: "_40qi" + (this.state.isHighlighted && g ? " _6iuj" : "")
                }), this.$6()]
            })
        }
        ;
        d.$5 = function(a) {
            var c = this.props.message
              , d = {}
              , e = b("MessengerMessage.bs").isOutbound(c);
            if (e || this.props.needsTimestampTooltip) {
                var f = i._("{time}", [i._param("time", b("MercuryTimestamp").getPreciseTimestamp(c.timestamp))]);
                Object.assign(d, b("TooltipData").propsFor(f, e ? "right" : "left"))
            }
            if (c.is_filtered_content)
                return j.jsx("div", babelHelpers["extends"]({
                    className: "_5wd9 _5wdc uiBoxYellow clearfix",
                    ref: "inner"
                }, d, {
                    children: b("MercuryDisplayTimeFilterMessageRenderer").renderFilteredContent(c)
                }));
            f = c.body && c.body !== "" ? b("isRTL")(c.body) : b("Locale").isRTL();
            return j.jsxs("div", babelHelpers["extends"]({
                className: "_5wd9" + (f ? " direction_rtl" : "") + (f ? "" : " direction_ltr") + " clearfix",
                ref: "inner"
            }, d, {
                children: [this.$7(!a), a]
            }))
        }
        ;
        d.$6 = function() {
            var a = this.props.message;
            return a.is_filtered_content || !b("MessengerMessage.bs").hasError(a) ? null : j.jsxs("div", {
                className: "_3ry4",
                ref: "undertext",
                children: [j.jsx(b("MercuryMessageError.react"), {
                    className: "_5wda clearfix",
                    message: a,
                    ref: "status"
                }), this.$8()]
            })
        }
        ;
        d.$8 = function() {
            return this.props.message.is_spoof_warning ? j.jsx(b("BootloadedComponent.react"), {
                bootloadPlaceholder: j.jsx("span", {}),
                bootloadLoader: b("JSResource")("MercurySpoofWarning.react").__setRef("ChatMessage.react"),
                authorID: this.props.message.author,
                className: "_5wdb"
            }) : null
        }
        ;
        d.$9 = function() {
            return j.jsx("div", {
                style: {
                    padding: "20px",
                    text_align: "center",
                    background: "white"
                },
                children: j.jsx(b("XUISpinner.react"), {})
            })
        }
        ;
        d.$10 = function(a) {
            a = a.find(function(a) {
                return a.attach_type === "share"
            });
            return this.$11(a)
        }
        ;
        d.$11 = function(a) {
            return !a || !b("gkx")("1068408") ? null : j.jsx(b("cr:1290594"), {
                messageShareID: a.share.share_id
            }, "article-context-trigger")
        }
        ;
        d.$2 = function(a, c) {
            var d = this;
            if (this.props.message.commerce_message_type === "ride_intent")
                return null;
            var e = this.props.message
              , f = this.props.thread ? this.props.thread.custom_like_icon : null
              , g = a == "inside" ? "attachmentsInside" : "attachmentsOutside"
              , h = this.props.thread ? b("convertMIGColorToFIGColor")(this.props.thread.solid_color) : ""
              , i = []
              , k = [];
            a === "outside" && e && b("MessengerDecorator").getAfterDecorators().forEach(function(a) {
                a.check(e, d.props.isFromViewer) && (i.push(a.render(e, d.props.isFromViewer, d.props, d.state.hovered)),
                k.push(a.getAdditionalClassNames()))
            });
            if (c.length > 0) {
                var l = j.jsx(b("MessengerInnerDecorators.react"), {
                    className: "_1z_2",
                    message: e,
                    isFromViewer: this.props.isFromViewer || !1,
                    hovered: this.state.hovered,
                    onReactionSwap: this.props.onReactionSwap,
                    messageProps: this.props,
                    forGameChat: this.props.forGameChat
                })
                  , m = this.$10(c);
                return j.jsx(b("BootloadedComponent.react"), {
                    bootloadPlaceholder: this.$9(),
                    bootloadLoader: b("JSResource")("MercuryAttachments.react").__setRef("ChatMessage.react"),
                    className: b("joinClasses")((a === "outside" ? "_3e7u" : "") + (e.body ? " _16ys" : "") + (h ? " _3al" : "") + " _n4o" + (i ? " _1a6y" : ""), k),
                    attachments: c,
                    customLike: f,
                    customColor: h,
                    forGameChat: this.props.forGameChat,
                    isChat: !0,
                    afterDecorators: i,
                    innerDecorators: l,
                    isVisible: this.state.isVisible,
                    maxWidth: this.props.maxBubbleWidth,
                    message: e,
                    onUnwrap: this.$12,
                    onAttachmentLoad: this.props.onAttachmentLoad,
                    onStickerClick: this.props.onStickerClick,
                    ref: g,
                    articleContextTrigger: m
                })
            }
            return null
        }
        ;
        d.$7 = function(a) {
            var c = this
              , d = this.props
              , e = d.isFromViewer
              , f = d.message;
            d = d.thread;
            var g = f.body
              , h = b("MercuryAttachment").get(f).filter(function(a) {
                return b("MercuryAttachment").isBubblePreferred(a)
            });
            h = this.$2("inside", h);
            var i = []
              , k = []
              , l = f;
            l && (a && b("MessengerDecorator").getAfterDecorators().forEach(function(a) {
                a.check(l, e) && (i.push(a.render(l, e, c.props)),
                k.push(a.getAdditionalClassNames()))
            }),
            b("MessengerDecorator").getBeforeDecorators().forEach(function(a) {
                a.check(l, e) && k.push(a.getAdditionalClassNames())
            }));
            var m = k.join(" ");
            b("ChatAnimatedGifs").shouldHideBody(f) && (g = "");
            var n = f.ranges;
            f.profile_ranges && f.profile_ranges.length && (n = (n || []).concat(f.profile_ranges.map(function(a) {
                return babelHelpers["extends"]({}, a, {
                    url: "/" + a.id
                })
            })));
            var o = b("CurrentUser").isWorkUser() ? !1 : b("ChatCodePasteUtils").containsCodeBlock(g);
            return (g || h) && !b("EmojiLikeUtils").isEmojiLike(f) ? j.jsxs("div", {
                className: b("joinClasses")(m, "_1e-x _n4o"),
                children: [o ? j.jsx(b("BootloadedComponent.react"), {
                    bootloadPlaceholder: j.jsx("div", {
                        style: {
                            height: 22
                        }
                    }),
                    bootloadLoader: b("JSResource")("ChatCodeBubble.react").__setRef("ChatMessage.react"),
                    body: g,
                    maxWidth: this.props.maxBubbleWidth,
                    ranges: n,
                    threadID: f.thread_id,
                    customColor: d && e ? b("convertMIGColorToFIGColor")(d.solid_color) : ""
                }) : j.jsxs("div", {
                    className: "_3_bl",
                    children: [j.jsx("div", {
                        className: "_3_bp"
                    }), j.jsx(b("ChatBubble.react"), {
                        attachments: h,
                        body: g,
                        className: "_5wdf",
                        isEmojiLike: !1,
                        isFromViewer: this.props.isFromViewer,
                        onReplyToMessage: this.props.onReplyToMessage,
                        metaRanges: f.meta_ranges,
                        message: f,
                        maxWidth: this.props.maxBubbleWidth,
                        ranges: n,
                        ref: "bubble",
                        threadID: f.thread_id,
                        customLike: f.customLike,
                        customColor: d && e ? b("convertMIGColorToFIGColor")(d.solid_color) : "",
                        threadCustomColor: d && b("convertMIGColorToFIGColor")(d.solid_color),
                        isForwarded: f.is_forwarded
                    })]
                }), a ? j.jsx(b("MessengerInnerDecorators.react"), {
                    className: "_1z_2",
                    message: f,
                    isFromViewer: this.props.isFromViewer || !1,
                    hovered: this.state.hovered,
                    onReactionSwap: this.props.onReactionSwap,
                    messageProps: this.props,
                    forGameChat: this.props.forGameChat
                }) : null, i]
            }) : null
        }
        ;
        d.highlightMessage = function() {
            var a = this;
            this.setState({
                isHighlighted: !1
            });
            b("setImmediate")(function() {
                return a.setState({
                    isHighlighted: !0
                })
            })
        }
        ;
        return c
    }(j.Component);
    a.propTypes = {
        forGameChat: (c = b("prop-types")).bool.isRequired,
        message: c.object.isRequired,
        maxBubbleWidth: c.number.isRequired,
        onReactionSwap: c.func,
        onAttachmentLoad: c.func,
        onStickerClick: c.func,
        participants: c.instanceOf(b("immutable").Map).isRequired,
        readReceipts: c.instanceOf(b("immutable").OrderedMap).isRequired,
        thread: c.instanceOf(b("ImmutableObject")),
        needsTimestampTooltip: c.bool
    };
    e.exports = a
}
), null);
__d("ChatRemovedMessageTombstoneBubble.react", ["cx", "DOMDimensions", "MessengerInnerDecorators.react", "React", "ReactDOM", "RemovedMessageTombstoneContent", "immutable", "prop-types"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = 4;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$1 = 0,
            d.state = {
                bubbleWidth: null
            },
            d.$3 = function() {
                var a = b("ReactDOM").findDOMNode(d.refs.bubble);
                if (!a)
                    return;
                a = b("DOMDimensions").getElementDimensions(a).width;
                var c = b("ReactDOM").findDOMNode(d.refs.content)
                  , e = b("DOMDimensions").getElementDimensions(c).width;
                c = c ? e + b("DOMDimensions").measureElementBox(b("ReactDOM").findDOMNode(d.refs.contentWrapper) || {}, "width", !0, !1, !1) : 0;
                c = c + i;
                e > 0 && c < d.props.maxBubbleWidth && a - c - d.getBoxWidth() > 0 && d.setState({
                    bubbleWidth: c
                })
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            this.$2(this.props)
        }
        ;
        d.componentDidUpdate = function(a) {
            (a.maxBubbleWidth !== this.props.maxBubbleWidth || a.participants !== this.props.participants) && this.$2(a)
        }
        ;
        d.render = function() {
            var a = this.props
              , c = a.message
              , d = a.maxBubbleWidth;
            a = a.participants;
            a = b("RemovedMessageTombstoneContent").getRemovedMessageTombstoneContent(c, a).toString();
            return h.jsxs("div", {
                className: "_1e-x _n4o",
                children: [h.jsxs("div", {
                    className: "_3_bl",
                    children: [h.jsx("div", {
                        className: "_3_bp"
                    }), h.jsx("div", {
                        ref: "bubble",
                        className: "_3_om _72_y _5wdf",
                        style: {
                            maxWidth: d,
                            width: this.state.bubbleWidth,
                            wordWrap: a.length >= 15 ? "break-word" : "inherit"
                        },
                        children: h.jsx("div", {
                            className: "_72_z" + (this.props.message && this.props.message.isSelected ? " _1yok" : ""),
                            ref: "contentWrapper",
                            children: h.jsx("span", {
                                className: "_5yl5",
                                ref: "content",
                                children: h.jsx("span", {
                                    children: a
                                })
                            })
                        })
                    })]
                }), h.jsx(b("MessengerInnerDecorators.react"), {
                    className: "_1z_2",
                    message: c,
                    isFromViewer: !1,
                    hovered: this.props.hovered,
                    messageProps: this.props,
                    isSavedView: !1
                })]
            })
        }
        ;
        d.$2 = function(a) {
            var c = b("ReactDOM").findDOMNode(this.refs.bubble);
            if (a.maxBubbleWidth !== this.props.maxBubbleWidth || a.participants !== this.props.participants || b("DOMDimensions").getElementDimensions(c).width > this.props.maxBubbleWidth) {
                a = this.props.maxBubbleWidth;
                this.setState({
                    bubbleWidth: a
                }, this.$3);
                return
            }
            this.$3()
        }
        ;
        d.getBoxWidth = function() {
            this.$1 || (this.$1 = b("DOMDimensions").measureElementBox(b("ReactDOM").findDOMNode(this.refs.bubble) || {}, "width", !0, !0, !1));
            return this.$1
        }
        ;
        return c
    }(h.Component);
    e.exports = a;
    a.propTypes = {
        hovered: (c = b("prop-types")).bool.isRequired,
        message: c.object.isRequired,
        maxBubbleWidth: c.number.isRequired,
        participants: c.instanceOf(b("immutable").Map).isRequired
    }
}
), null);
__d("ChatRemovedMessageTombstoneInner.react", ["cx", "fbt", "ChatRemovedMessageTombstoneBubble.react", "Locale", "MercuryTimestamp", "MessengerMessage.bs", "React", "TooltipData", "immutable", "isRTL", "prop-types"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props.message
              , c = {}
              , d = b("MessengerMessage.bs").isOutbound(a);
            if (d || this.props.needsTimestampTooltip) {
                var e = h._("{time}", [h._param("time", b("MercuryTimestamp").getPreciseTimestamp(a.timestamp))]);
                Object.assign(c, b("TooltipData").propsFor(e, d ? "right" : "left"))
            }
            e = a.body && a.body !== "" ? b("isRTL")(a.body) : b("Locale").isRTL();
            return i.jsx("div", babelHelpers["extends"]({
                className: "_5wd9" + (e ? " direction_rtl" : "") + (e ? "" : " direction_ltr") + " clearfix",
                ref: "inner"
            }, c, {
                children: i.jsx(b("ChatRemovedMessageTombstoneBubble.react"), {
                    hovered: this.props.hovered,
                    maxBubbleWidth: this.props.maxBubbleWidth,
                    message: a,
                    participants: this.props.participants
                })
            }))
        }
        ;
        return c
    }(i.Component);
    e.exports = a;
    a.propTypes = {
        hovered: (c = b("prop-types")).bool.isRequired,
        message: c.object.isRequired,
        maxBubbleWidth: c.number.isRequired,
        needsTimestampTooltip: c.bool
    }
}
), null);
__d("ChatRemovedMessageTombstone.react", ["csx", "cx", "ChatRemovedMessageTombstoneInner.react", "MercuryErrorInfo", "MercuryIDs", "MessengerMessage.bs", "React", "immutable", "joinClasses", "prop-types"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.state = {
                hovered: !1
            },
            c.$1 = function() {
                return c.setState({
                    hovered: !0
                })
            }
            ,
            c.$2 = function() {
                return c.setState({
                    hovered: !1
                })
            }
            ,
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props.message
              , c = b("MessengerMessage.bs").isInbound(a)
              , d = b("MercuryIDs").isGroupChat(a.thread_id)
              , e = b("MercuryErrorInfo").hasErrorStatus(a);
            c = "_5wd4" + (c ? " _1nc7" : "") + (c ? "" : " _1nc6") + "" + (c && d ? " _5ysy" : "") + (e ? " _1zcs" : "");
            return i.jsxs("div", {
                className: c,
                onMouseEnter: this.$1,
                onMouseLeave: this.$2,
                children: [i.jsx("div", {
                    className: b("joinClasses")("._1dlq", "_h8t"),
                    children: i.jsx(b("ChatRemovedMessageTombstoneInner.react"), {
                        hovered: this.state.hovered,
                        maxBubbleWidth: this.props.maxBubbleWidth,
                        message: a,
                        needsTimestampTooltip: this.props.needsTimestampTooltip,
                        participants: this.props.participants
                    })
                }), i.jsx("div", {
                    className: "_40qi"
                })]
            })
        }
        ;
        return c
    }(i.Component);
    e.exports = a;
    a.propTypes = {
        message: (c = b("prop-types")).object.isRequired,
        maxBubbleWidth: c.number.isRequired,
        needsTimestampTooltip: c.bool,
        participants: c.instanceOf(b("immutable").Map).isRequired
    }
}
), null);
__d("MessengerHoverCardLink", ["URI"], (function(a, b, c, d, e, f) {
    f.getBaseURI = h;
    f.constructEndpoint = a;
    var g;
    function h() {
        return new (g || (g = b("URI")))("/ajax/hovercard/chat.php")
    }
    function a(a) {
        return new (g || (g = b("URI")))(h()).setQueryData({
            id: a.id,
            type: "chat"
        })
    }
}
), null);
__d("FantaProfilePresence.bs", ["cx", "React", "bs_caml_array", "Link.react", "MercuryIDs", "bs_caml_option", "Image.react", "SplitImage.react", "MessengerHoverCardLink", "WorkChatAvailabilityStatusLoader", "LazyWorkMultiCompanyChatTooltip.react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function i(a) {
        var c = a.images
          , d = a.imageSize
          , e = a.isActive
          , f = a.border
          , g = a.threadHref
          , i = a.tooltip
          , j = a.backgroundColor
          , k = a.showMultiCompany
          , l = a.showDoNotDisturb
          , m = a.isCanonical
          , n = a.threadFBID
          , o = a.participants;
        a = a.onHeaderClick;
        j = j !== void 0 ? j : "";
        k = k !== void 0 ? k : !1;
        l = l !== void 0 ? l : !1;
        var p = c.length > 1;
        if (p) {
            var q = Math.round(d / 3) | 0;
            q = d - q | 0;
            q = h.jsxs("div", {
                children: [h.jsx("div", {
                    children: h.jsx(b("Image.react"), {
                        alt: "",
                        src: b("bs_caml_array").caml_array_get(c, 0),
                        height: q,
                        width: q
                    }),
                    className: "_1gyw"
                }), h.jsx("div", {
                    children: h.jsx(b("Image.react"), {
                        alt: "",
                        src: b("bs_caml_array").caml_array_get(c, 1),
                        height: q,
                        width: q
                    }),
                    className: "_1gyw",
                    style: {
                        borderColor: j
                    }
                })],
                className: "_44yp",
                style: {
                    height: d.toString() + "px",
                    width: d.toString() + "px"
                }
            })
        } else {
            c = {
                size: d,
                srcs: c,
                className: "_1gyw"
            };
            f !== void 0 && (c.border = b("bs_caml_option").valFromOption(f));
            q = h.jsx(b("SplitImage.react"), c)
        }
        f = h.jsx(b("Link.react"), {
            "aria-label": i,
            "data-hover": "tooltip",
            "data-tooltip-content": i,
            "data-tooltip-position": "right",
            className: "_2yg8",
            href: g,
            onClick: a,
            tabIndex: -1,
            children: q
        });
        if (m && n !== void 0) {
            c = b("MessengerHoverCardLink").constructEndpoint({
                id: n
            });
            i = h.cloneElement(f, {
                "data-hovercard": c
            })
        } else
            i = f;
        g = function(a) {
            if (o !== void 0 && n !== void 0) {
                a = b("bs_caml_option").valFromOption(n);
                var c = b("MercuryIDs").getParticipantIDFromUserID(a);
                c = b("bs_caml_option").valFromOption(o).get(c);
                if (!(c == null) && b("WorkChatAvailabilityStatusLoader").isLoaded())
                    return b("WorkChatAvailabilityStatusLoader").getStoreEnforce().getDescriptionWithUserName(c.short_name, a);
                else
                    return
            }
        }
        ;
        if (l) {
            a = h.jsx("div", {
                className: "_466z _76q_",
                style: {
                    backgroundColor: j,
                    borderColor: j
                }
            });
            q = g(0);
            m = q !== void 0 ? h.cloneElement(a, {
                "data-tooltip-content": q,
                "data-hover": "tooltip"
            }) : a
        } else
            m = k ? h.jsx(b("LazyWorkMultiCompanyChatTooltip.react"), {
                children: h.jsx("div", {
                    className: "_4rwy"
                })
            }) : e ? h.jsx("div", {
                className: "_1gyx",
                style: {
                    borderColor: j
                }
            }) : null;
        return h.jsxs("div", {
            children: [i, m],
            "aria-hidden": !0,
            className: "_6--1" + (p ? " _44yq" : ""),
            style: {
                height: d.toString() + "px",
                width: d.toString() + "px"
            }
        })
    }
    function a(a) {
        var c = {
            images: a.images,
            imageSize: a.imageSize,
            isActive: a.isActive,
            threadHref: a.threadHref,
            tooltip: a.tooltip,
            showMultiCompany: a.showMultiCompany,
            isCanonical: a.isCanonical,
            threadFBID: b("bs_caml_option").nullable_to_opt(a.threadFBID),
            participants: b("bs_caml_option").nullable_to_opt(a.participants),
            onHeaderClick: a.onHeaderClick
        }
          , d = b("bs_caml_option").nullable_to_opt(a.border);
        d !== void 0 && (c.border = b("bs_caml_option").valFromOption(d));
        d = b("bs_caml_option").nullable_to_opt(a.backgroundColor);
        d !== void 0 && (c.backgroundColor = b("bs_caml_option").valFromOption(d));
        return i(c)
    }
    c = i;
    f.make = c;
    f.jsComponent = a
}
), null);
__d("ChatMessageGroup.react", ["cx", "fbt", "ChatDateBreak.react", "ChatMessage.react", "ChatRemovedMessageTombstone.react", "CurrentUser", "FantaProfilePresence.bs", "ImmutableObject", "MercuryAttachmentLayoutTypeHelper", "MercuryIDs", "MercuryTimestamp", "MessengerParticipants.bs", "MessengerTextWithEmoticons.react", "QE2Logger", "React", "ReactDOM", "ShortProfiles", "immutable", "isMessengerMessageRemoved", "prop-types"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("FantaProfilePresence.bs").jsComponent
      , j = b("React");
    a = b("immutable").OrderedMap;
    var k = new (b("ImmutableObject"))({
        name: "",
        href: "#"
    });
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.state = {
                participants: {}
            },
            d.$3 = function() {
                return d.props.messages == null ? !1 : d.props.messages.some(function(a) {
                    if (a.attachments != null && a.attachments.length > 0) {
                        a = a.attachments[0];
                        return b("MercuryAttachmentLayoutTypeHelper").isAdminType(a)
                    }
                    return !1
                })
            }
            ,
            d.$5 = function() {
                var a;
                if (d.props.isFromViewer || d.$3())
                    return null;
                var c = d.state.participants[d.props.author] || k
                  , e = c.name
                  , f = c.image_src;
                d.props.persona && (e = d.props.persona.name,
                f = d.props.persona.profile_picture_url);
                e = h._("{name} - {time}", [h._param("name", e), h._param("time", b("MercuryTimestamp").getPreciseTimestamp(d.props.messages.last().timestamp))]);
                var g = b("MercuryIDs").getUserIDFromThreadID(d.props.threadID);
                g = g ? b("ShortProfiles").getNow(g) : null;
                g = g && g.is_messenger_only;
                g = d.props.isOnline && !g;
                a = b("CurrentUser").isWorkUser() && ((a = c) != null ? (a = a.work_foreign_entity_info) != null ? a.type : a : a) === "FOREIGN";
                c = d.props.persona ? null : c.href;
                var l = d.props.thread;
                return j.jsx("div", {
                    className: "_31o4",
                    children: j.jsx(i, {
                        border: !0,
                        imageSize: "28",
                        images: [f],
                        isActive: g,
                        isCanonical: l.is_canonical,
                        showMultiCompany: a,
                        threadFBID: l.thread_fbid,
                        threadHref: c,
                        tooltip: e
                    })
                })
            }
            ,
            d.$6 = function() {
                if (d.props.isCanonical && !d.props.persona || d.props.isFromViewer)
                    return null;
                var a = d.state.participants[d.props.messages.first().author];
                if (!a)
                    return null;
                if (d.props.messages.first().replied_to_message)
                    return null;
                var c = a.short_name;
                if (d.props.thread && d.props.thread.custom_nickname) {
                    a = b("MercuryIDs").getUserIDFromParticipantID(a.id);
                    d.props.thread.custom_nickname[a] && (c = j.jsx(b("MessengerTextWithEmoticons.react"), {
                        renderEmoticons: !0,
                        renderEmoji: !0,
                        text: d.props.thread.custom_nickname[a]
                    }))
                }
                if (d.props.persona) {
                    a = d.state.participants[d.props.messages.first().author];
                    c = a ? h._("{persona name} t\u1eeb {page name}", [h._param("persona name", d.props.persona.name), h._param("page name", a.short_name)]) : d.props.persona.name
                }
                return j.jsx("div", {
                    className: "_4tdx",
                    children: c
                })
            }
            ,
            d.$7 = function() {
                var a = d.props.messages.size
                  , c = [];
                d.props.messages.forEach(function(e, f, g) {
                    var h = e.message_id === d.props.activeMessageID;
                    h && !(f === 0 && d.props.hasDateBreak) && c.push(j.jsx(b("ChatDateBreak.react"), {
                        date: new Date(e.timestamp)
                    }, "db:" + e.message_id));
                    if (b("isMessengerMessageRemoved")(e)) {
                        c.push(j.jsx(b("ChatRemovedMessageTombstone.react"), {
                            maxBubbleWidth: d.props.maxBubbleWidth,
                            message: e,
                            needsTimestampTooltip: !1,
                            participants: b("immutable").Map(d.state.participants),
                            ref: e.message_id
                        }, e.message_id));
                        return
                    }
                    c.push(j.jsx(b("ChatMessage.react"), {
                        forGameChat: !!d.props.forGameChat,
                        isFromViewer: d.props.isFromViewer,
                        maxBubbleWidth: d.props.maxBubbleWidth,
                        message: e,
                        participants: b("immutable").Map(d.state.participants),
                        readReceipts: d.props.readReceipts,
                        ref: e.message_id,
                        nextTimestamp: d.$8(g, a, f),
                        onReactionSwap: d.props.onReactionSwap,
                        onAttachmentLoad: d.props.onAttachmentLoad,
                        onStickerClick: d.props.onStickerClick,
                        thread: d.props.thread,
                        needsTimestampTooltip: !1
                    }, e.message_id))
                });
                return c
            }
            ,
            d.$4 = function() {
                var a = d.props
                  , b = a.messages
                  , c = a.nextTimestamp;
                a = a.readReceipts;
                var e = b.last().timestamp
                  , f = 0;
                a.forEach(function(a) {
                    return a >= e && a < c && ++f === 2 ? !1 : null
                });
                return f === 2
            }
            ,
            d.$8 = function(a, b, c) {
                return c < b - 1 ? a.get(c + 1).timestamp : d.props.nextTimestamp
            }
            ,
            d.getMessageElement = function(a) {
                return b("ReactDOM").findDOMNode(d.refs[a])
            }
            ,
            d.getMessage = function(a) {
                return d.refs[a]
            }
            ,
            d.$2 = function() {
                var a = l(d.props)
                  , c = {}
                  , e = [];
                a.forEach(function(a) {
                    var d = b("MessengerParticipants.bs").getNow(a);
                    c[a] = d;
                    d || e.push(a)
                });
                d.setState({
                    participants: c
                });
                return e.length > 0 ? b("MessengerParticipants.bs").getMulti(e, function(b) {
                    var a = d.state.participants;
                    e.forEach(function(c) {
                        a[c] = b[c]
                    });
                    d.$1 = null;
                    d.setState({
                        participants: a
                    })
                }) : null
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            b("QE2Logger").logExposureForUser("messenger_growth_tombstone"),
            this.$1 = this.$2()
        }
        ;
        d.shouldComponentUpdate = function(a, c) {
            return this.props.isOnline !== a.isOnline || this.props.activeMessageID !== a.activeMessageID || this.props.isFromViewer !== a.isFromViewer || !b("immutable").is(this.props.messages, a.messages) || this.state.participants !== c.participants || !b("immutable").is(this.props.thread, a.thread)
        }
        ;
        d.componentDidUpdate = function(a) {
            var b = this;
            a = l(this.props);
            !this.$1 && !a.every(function(a) {
                return b.state.participants[a]
            }) && (this.$1 = this.$2())
        }
        ;
        d.componentWillUnmount = function() {
            this.$1 && b("MessengerParticipants.bs").removeCallback(this.$1)
        }
        ;
        d.render = function() {
            return j.jsxs("div", {
                className: "_4tdt" + (this.props.isFromViewer ? " _ua0" : "") + (this.props.isFromViewer ? "" : " _ua1") + (this.$3() ? " _73iv" : "") + (this.$4() ? " _3lil" : ""),
                children: [this.$5(), j.jsxs("div", {
                    className: "_ua2",
                    children: [this.$6(), j.jsx("div", {
                        className: "_4tdv",
                        children: this.$7()
                    })]
                })]
            })
        }
        ;
        return c
    }(j.Component);
    c.propTypes = {
        activeMessageID: (d = b("prop-types")).string,
        author: d.string,
        forGameChat: d.bool,
        hasDateBreak: d.bool,
        isCanonical: d.bool,
        isFromViewer: d.bool,
        isPageMessage: d.bool,
        isOnline: d.bool,
        maxBubbleWidth: d.number,
        messages: d.instanceOf(b("immutable").List).isRequired,
        readReceipts: d.instanceOf(a).isRequired,
        onAttachmentLoad: d.func,
        onStickerClick: d.func,
        persona: d.object,
        thread: d.instanceOf(b("ImmutableObject")),
        threadID: d.string
    };
    function l(a) {
        var b = [a.author];
        a.readReceipts.forEach(function(c, d) {
            d !== a.author && b.push(d)
        });
        return b
    }
    e.exports = c
}
), null);
__d("PagesMessageListGreeting.react", ["cx", "FluxContainer", "PagesMessagingMercuryChatTabActions", "PagesMessagingMercuryChatTabStore", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        c.getStores = function() {
            return [b("PagesMessagingMercuryChatTabStore")]
        }
        ;
        c.calculateState = function(a, c) {
            if (c.messageCount > 0)
                return {
                    shouldShowGreeting: !1
                };
            a = b("PagesMessagingMercuryChatTabStore").getStateByThread(c.threadID);
            return {
                greetingContent: a.pagesGreetingContent,
                shouldShowGreeting: a.pagesGreetingShouldShow
            }
        }
        ;
        var d = c.prototype;
        d.componentDidMount = function() {
            b("PagesMessagingMercuryChatTabActions").requestGreetingConfig(this.props.threadID)
        }
        ;
        d.render = function() {
            return !this.state.shouldShowGreeting || !this.state.greetingContent || this.state.greetingContent.trim().length === 0 ? null : h.jsx("div", {
                className: "_4fsh _3-8z",
                children: this.state.greetingContent
            })
        }
        ;
        return c
    }(h.PureComponent);
    c = b("FluxContainer").create(a, {
        withProps: !0
    });
    e.exports = c
}
), null);
__d("ChatMessageList.react", ["cx", "CurrentUser", "MercuryIDs", "MercuryMessageGroup", "MercuryShareAttachmentRenderLocations", "MessengerDomIDs.bs", "MessengerLightweightActionUtils", "MessengerMessage.bs", "MessengerParticipantUtils.bs", "MessengerPresenceProvider.bs", "PagesMessageListGreeting.react", "React", "ReactDOM", "immutable", "nullthrows", "prop-types", "requireCond", "cr:832269"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = 2
      , j = 1e3 * 60 * 60
      , k = 6
      , l = function(a) {
        var b;
        b = (b = a) != null ? (b = b.log_message_data) != null ? b.message_type : b : b;
        switch (b) {
        case "group_poll":
            return (b = a) != null ? (b = b.log_message_data) != null ? (b = b.untypedData) != null ? b.question_id : b : b : b;
        case "instant_game_update":
            return (b = a) != null ? (b = b.log_message_data) != null ? (b = b.untypedData) != null ? b.game_id : b : b : b;
        case "lightweight_event_create":
        case "lightweight_event_update":
        case "lightweight_event_delete":
        case "lightweight_event_update_time":
        case "lightweight_event_update_title":
        case "lightweight_event_update_location":
        case "lightweight_event_notify_before_event":
        case "lightweight_event_notify":
        case "lightweight_event_rsvp":
            return (b = a) != null ? (b = b.log_message_data) != null ? (b = b.untypedData) != null ? b.event_id : b : b : b;
        case "confirm_friend_request":
            b = ((b = a) != null ? (b = b.log_message_data) != null ? (b = b.untypedData) != null ? b.friend_request_subtype : b : b : b) || ((b = a) != null ? (b = b.log_message_data) != null ? (b = b.untypedData) != null ? b.subtype : b : b : b);
            return !b || b.toLowerCase() !== "icebreaker" ? null : o(a);
        case "messenger_icebreaker_vote_cast":
            return o(a);
        default:
            return null
        }
    }
      , m = function(a) {
        return b("MessengerLightweightActionUtils").isLWAMessage(a) ? "lwa" : null
    };
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.state = {
                activeMessageID: null,
                messageGroups: [],
                prevMessages: null,
                newMessagesGroupIndex: Infinity,
                lastReadTimestamp: ((b = d.props.thread) == null ? void 0 : b.last_read_timestamp) || Infinity,
                newMessagesCountForDisplay: 0
            },
            d.$5 = function(a) {
                d.setState(function(b) {
                    return {
                        activeMessageID: b.activeMessageID === a ? null : b.activeMessageID
                    }
                })
            }
            ,
            d.$6 = function(a) {
                d.setState({
                    activeMessageID: a
                })
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        c.getDerivedStateFromProps = function(a, c) {
            if (c.prevMessages !== a.messages)
                if (b("cr:832269") !== null) {
                    var d = c.lastReadTimestamp;
                    c = a.location;
                    var e = a.messages
                      , f = a.thread
                      , g = b("MercuryIDs").getParticipantIDFromUserID(b("CurrentUser").getID());
                    (f == null ? void 0 : f.snippet_sender) === g && (d = Infinity);
                    f = e.slice().reverse().find(function(a) {
                        return a.author === g
                    });
                    f && f.timestamp > d && (d = f.timestamp);
                    f = a.messages.filter(function(a) {
                        return a.timestamp <= d
                    });
                    var h = a.messages.filter(function(a) {
                        return a.timestamp > d
                    });
                    f = b("MercuryMessageGroup").calculateMessageGroups(f, c);
                    c = b("MercuryMessageGroup").calculateMessageGroups(h, c);
                    h = h.filter(function(a) {
                        return a.log_message_type == null
                    }).length;
                    return {
                        messageGroups: [].concat(f, c),
                        prevMessages: e,
                        newMessagesGroupIndex: f.length,
                        newMessagesCountForDisplay: h,
                        lastReadTimestamp: d
                    }
                } else
                    return {
                        messageGroups: b("MercuryMessageGroup").calculateMessageGroups(a.messages, a.location),
                        prevMessages: a.messages
                    };
            else
                return null
        }
        ;
        var d = c.prototype;
        d.render = function() {
            var a = this
              , c = this.props
              , d = c.DateBreak
              , e = c.forGameChat
              , f = c.location
              , g = c.MessageGroup
              , o = c.CollapsedLogMessageGroup
              , t = []
              , u = [];
            c = this.props.thread && this.props.thread.solid_color;
            var v = c ? {
                backgroundColor: c
            } : null
              , w = this.state.activeMessageID
              , x = this.state.messageGroups
              , y = x.length
              , z = this.props.readReceipts;
            c = z.last();
            var A = c ? c.watermark : 0
              , B = b("MercuryIDs").getParticipantIDFromUserID(this.props.viewer)
              , C = {};
            for (var c = this.props.messages.length - 1; c >= 0; c--) {
                var D = this.props.messages[c]
                  , E = l(D) || m(D);
                E && !C[E] && (C[E] = D.message_id)
            }
            var F = function(l) {
                var F = l > 0 ? x[l - 1] : null;
                F = F && F.length > 0 ? F[F.length - 1] : null;
                var H = x[l]
                  , I = H[0]
                  , J = H[H.length - 1]
                  , K = !1;
                b("cr:832269") != null && l > 0 && l === a.state.newMessagesGroupIndex && a.state.newMessagesCountForDisplay > 0 && t.push(h.jsx("div", {
                    ref: "newMessageDivider",
                    children: h.jsx(b("cr:832269"), {
                        newMessagesCount: a.state.newMessagesCountForDisplay
                    })
                }, "new-message-divider"));
                if (!F || I.timestamp - F.timestamp > j) {
                    K = !0;
                    F = h.jsx(d, {
                        date: new Date(I.timestamp),
                        ref: "db:" + I.message_id
                    }, "db:" + I.message_id);
                    u.length === 0 && t.push(F)
                }
                F = m(I);
                if (F && C[F] !== I.message_id) {
                    F = a.$1(I, C);
                    t.push(F);
                    return "continue"
                }
                if (I.action_type == "ma-type:log-message") {
                    F = (E = I) != null ? (E = E.log_message_data) != null ? E.message_type : E : E;
                    var L = (D = I) != null ? (D = D.log_message_data) != null ? (D = D.untypedData) != null ? D.friend_request_subtype : D : D : D
                      , M = F === "parties_presence"
                      , N = F === "instant_game_update"
                      , O = F === "group_poll";
                    L = F === "messenger_icebreaker_vote_cast" || F === "confirm_friend_request" && L && L.toLowerCase() === "icebreaker";
                    var P = ["lightweight_event_create", "lightweight_event_update", "lightweight_event_delete", "lightweight_event_update_time", "lightweight_event_update_title", "lightweight_event_update_location", "lightweight_event_notify_before_event", "lightweight_event_notify", "lightweight_event_rsvp"].includes(F);
                    if ((f === b("MercuryShareAttachmentRenderLocations").CHAT || f === b("MercuryShareAttachmentRenderLocations").MESSENGER) && (I.log_message_type === "log:video-call" || I.log_message_type === "log:phone-call" || F === "messenger_call_log")) {
                        F = a.$2(I, B, x, y, l, z, A, J, C);
                        t.push(F)
                    } else {
                        F = a.$3(I, C);
                        c = I.message_id;
                        !N && !O && !P && !L && u.push(F);
                        if (M)
                            return "continue";
                        (u.length === H.length || N || O || P || L) && (a.$4(u, t, c, v, o),
                        u = []);
                        (N || O || P || L) && t.push(F)
                    }
                    return "continue"
                }
                H = b("immutable").List(H);
                var Q = p(x, y, l, C)
                  , R = !r(z, H, Q)
                  , S = q(A, J)
                  , T = s(a.props.deliveryTimestamp, J)
                  , U = H.first().author
                  , V = b("MessengerMessage.bs").getPersona(J)
                  , W = B === I.author;
                M = W ? 0 : k + i;
                var X = a.props.maxBubbleWidth ? a.props.maxBubbleWidth - M : null;
                t.push(h.jsx(b("MessengerPresenceProvider.bs").jsComponent, {
                    subscribeToIDs: U ? [U] : null,
                    children: function(c) {
                        return h.jsx(g, {
                            activeMessageID: n(w, H),
                            author: U,
                            deliveryTimestamp: T,
                            forGameChat: e,
                            hasDateBreak: K,
                            isCanonical: a.props.isCanonical,
                            isFromViewer: W,
                            isPageMessage: a.props.isPageMessage,
                            isOnline: U ? b("MessengerParticipantUtils.bs").has(c, U) : !1,
                            lastReadTimestamp: S,
                            maxBubbleWidth: X,
                            messages: H,
                            nextTimestamp: Q,
                            onReactionSwap: a.props.onReactionSwap,
                            onAttachmentLoad: a.props.onAttachmentLoad,
                            onMessageDeselect: a.$5,
                            onMessageSelect: a.$6,
                            onStickerClick: a.props.onStickerClick,
                            onReplyToMessage: a.props.onReplyToMessage,
                            pageID: a.props.isPageMessage === !0 ? a.props.viewer : null,
                            persona: V,
                            readReceipts: R ? z : b("immutable").OrderedMap(),
                            ref: function(b) {
                                return a.refs["mg:" + I.message_id] = b
                            },
                            thread: a.props.thread,
                            threadID: a.props.threadID,
                            scrollToRepliedMessage: a.props.scrollToRepliedMessage
                        }, "mg:" + I.message_id)
                    }
                }, "pp:" + I.message_id))
            };
            for (var G = 0; G < y; G++) {
                var H = F(G);
                if (H === "continue")
                    continue
            }
            H = this.props.threadID || this.props.thread && this.props.thread.thread_id || this.props.thread && this.props.thread.thread_fbid;
            F = null;
            f === b("MercuryShareAttachmentRenderLocations").MESSENGER && H && this.props.isPageMessage && (F = h.jsx(b("PagesMessageListGreeting.react"), {
                messageCount: u.length + y,
                threadID: H
            }));
            return h.jsxs("div", {
                id: f === b("MercuryShareAttachmentRenderLocations").MESSENGER ? b("MessengerDomIDs.bs").ids.CONVERSATION : null,
                children: [F, t]
            })
        }
        ;
        d.getMessageElement = function(a, c) {
            if (c === !0) {
                var d = this.refs["db:" + a];
                if (d)
                    return b("ReactDOM").findDOMNode(d)
            }
            d = this.$7(a);
            if (!d)
                return null;
            d = d[0].message_id;
            var e = this.refs["mg:" + d];
            if (!e)
                return null;
            return c === !0 && d === a ? b("ReactDOM").findDOMNode(e) : e.getMessageElement(a)
        }
        ;
        d.getMessageComponent = function(a) {
            var b = this.$7(a);
            if (!b)
                return null;
            b = b[0].message_id;
            b = this.refs["mg:" + b];
            return !b ? null : b.getMessage(a)
        }
        ;
        d.$7 = function(a) {
            return this.state.messageGroups.find(function(b) {
                return b.some(function(b) {
                    return b.message_id === a
                })
            })
        }
        ;
        d.$4 = function(a, b, c, d, e) {
            a.length !== 0 && (a.length > 1 ? b.push(h.jsx(e, {
                style: d,
                children: a
            }, "mg:" + c)) : b.push(h.jsx("div", {
                children: a
            }, "mg:" + c)))
        }
        ;
        d.$2 = function(a, c, d, e, f, g, i, j, k) {
            var l = this, m, n, o = this.props.MessageGroup;
            n = ((n = a) != null ? (n = n.log_message_data) != null ? n.untypedData : n : n) || {};
            m = (m = a) != null ? (m = m.log_message_data) != null ? m.message_type : m : m;
            if (m === "messenger_call_log") {
                m = {
                    message_type: "messenger_call_log",
                    call_capture_attachments: n.call_capture_attachments,
                    caller: b("MercuryIDs").getParticipantIDFromUserID(b("nullthrows")(n.caller_id, "caller id")),
                    callee: b("MercuryIDs").getParticipantIDFromUserID(b("nullthrows")(n.callee_id, "callee id")),
                    server_info_data: n.server_info,
                    thread_id: a.thread_fbid,
                    answered: n.event !== "missed_call",
                    log_message_type: n.video ? "log:video-call" : "log:phone-call",
                    event: n.event,
                    added_participants: null,
                    removed_participants: null,
                    untypedData: null,
                    image: null,
                    name: null
                };
                a = babelHelpers["extends"]({}, a, {
                    log_message_data: m
                })
            }
            n = {
                attach_type: "share",
                share: {
                    style_list: ["rtc_call_log", "fallback"],
                    log_message_body: a.log_message_body,
                    log_message_data: a.log_message_data,
                    log_message_type: a.log_message_type,
                    timestamp: a.timestamp
                }
            };
            m = babelHelpers["extends"]({}, a, {
                attachments: [n],
                body: ""
            });
            var t = b("immutable").List([m])
              , u = p(d, e, f, k)
              , v = !r(g, t, u)
              , w = q(i, j)
              , x = s(this.props.deliveryTimestamp, j)
              , y = t.first().author;
            return h.jsx(b("MessengerPresenceProvider.bs").jsComponent, {
                subscribeToIDs: y ? [y] : null,
                children: function(d) {
                    return h.jsx(o, {
                        author: t.first().author,
                        deliveryTimestamp: x,
                        forGameChat: l.props.forGameChat,
                        isCanonical: l.props.isCanonical,
                        isFromViewer: c === a.author,
                        isOnline: y ? b("MessengerParticipantUtils.bs").has(d, y) : !1,
                        isPageMessage: l.props.isPageMessage,
                        lastReadTimestamp: w,
                        maxBubbleWidth: l.props.maxBubbleWidth,
                        messages: t,
                        nextTimestamp: u,
                        onAttachmentLoad: l.props.onAttachmentLoad,
                        onMessageDeselect: l.$5,
                        onMessageSelect: l.$6,
                        onStickerClick: l.props.onStickerClick,
                        readReceipts: v ? g : b("immutable").OrderedMap(),
                        thread: l.props.thread,
                        threadID: l.props.threadID
                    })
                }
            }, a.message_id)
        }
        ;
        d.$3 = function(a, c) {
            var d = this.props.LogMessage
              , e = l(a);
            c = e ? c[e] : null;
            return a.log_message_type !== "log:error-msg" ? h.jsx(d, {
                className: this.props.location === b("MercuryShareAttachmentRenderLocations").CHAT ? "_5w0o" : null,
                onLogMessageExpanded: this.props.onAttachmentLoad,
                loadMoreMessages: this.props.loadMoreMessages,
                message: a,
                onImageLoad: this.props.onAttachmentLoad,
                viewer: this.props.viewer,
                isPageMessage: this.props.isPageMessage,
                thread: this.props.thread,
                isLastOfType: c === a.message_id
            }, a.message_id) : null
        }
        ;
        d.$1 = function(a, c) {
            c = c[b("nullthrows")(m(a), "other group id first message")];
            var d = this.props.LogMessage;
            return h.jsx(d, {
                className: this.props.location === b("MercuryShareAttachmentRenderLocations").CHAT ? "_5w0o" : null,
                onLogMessageExpanded: this.props.onAttachmentLoad,
                loadMoreMessages: this.props.loadMoreMessages,
                message: a,
                onImageLoad: this.props.onAttachmentLoad,
                viewer: this.props.viewer,
                thread: this.props.thread,
                isLastOfType: c === a.message_id
            }, a.message_id)
        }
        ;
        return c
    }(h.PureComponent);
    e.exports = a;
    a.propTypes = {
        CollapsedLogMessageGroup: (c = b("prop-types")).func.isRequired,
        DateBreak: c.func.isRequired,
        deliveryTimestamp: c.number.isRequired,
        forGameChat: c.bool,
        isCanonical: c.bool,
        isPageMessage: c.bool,
        location: c.string.isRequired,
        LogMessage: c.func.isRequired,
        loadMoreMessages: c.func,
        MessageGroup: c.func.isRequired,
        onAttachmentLoad: c.func,
        onStickerClick: c.func,
        onReplyToMessage: c.func,
        readReceipts: c.instanceOf(b("immutable").OrderedMap).isRequired,
        viewer: c.string.isRequired,
        thread: c.object,
        threadID: c.string,
        scrollToRepliedMessage: c.func
    };
    function n(a, b) {
        return b.find(function(b) {
            return b.message_id === a
        }) ? a : null
    }
    function o(a) {
        return (a = a) != null ? (a = a.log_message_data) != null ? (a = a.untypedData) != null ? a.icebreaker_type : a : a : a
    }
    function p(a, b, c, d) {
        if (c >= b - 1)
            return Infinity;
        var e = a[c + 1][0]
          , f = m(e);
        if (f && d[f] !== e.message_id || ((f = e) != null ? f.action_type : f) == "ma-type:log-message")
            return p(a, b, c + 1, d);
        else
            return e.timestamp
    }
    function q(a, b) {
        return b.timestamp > a ? a : Infinity
    }
    function r(a, b, c) {
        return b.isEmpty() || !a.isEmpty() && (a.last().action < b.first().timestamp || a.first().action >= c)
    }
    function s(a, b) {
        return b.timestamp > a ? a : Infinity
    }
}
), null);
__d("MercuryMessageRendererUtils", ["cx", "invariant", "HovercardLink", "MercuryViewer", "MessengerTextWithEmoticons.react", "React"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    f.getLinkToParticipant = a;
    f.moveCurrentUserToFront = c;
    var i = b("React");
    function a(a, c) {
        var d = a.fbid
          , e = b("HovercardLink").constructEndpoint({
            id: d
        });
        c = c && c.custom_nickname && c.custom_nickname[d];
        c && (c = i.jsx(b("MessengerTextWithEmoticons.react"), {
            renderEmoticons: !0,
            renderEmoji: !0,
            text: c
        }));
        d = c ? c : a.name;
        return a.href ? i.jsx("a", {
            className: "_5wzt",
            href: a.href,
            "data-hovercard": e,
            children: d
        }) : d
    }
    function c(a) {
        a === void 0 && (a = []);
        a || h(0, 2427);
        var c = a.indexOf(b("MercuryViewer").getID());
        if (c > 0) {
            c = a.filter(function(a) {
                return a !== b("MercuryViewer").getID()
            });
            return [b("MercuryViewer").getID()].concat(c)
        }
        return a
    }
}
), null);
__d("MercuryLogMessageRenderer", ["cx", "fbt", "invariant", "ix", "Bootloader", "CurrentUser", "Image.react", "MercuryLogMessageType", "MercuryMessageRendererUtils", "MercuryViewer", "MessengerAdminGroupUtils", "MessengerLightweightActionUtils", "MessengerParticipants.bs", "MessengerState.bs", "MessengerTextWithEmoticons.react", "React", "TooltipLink.react", "UserAgent", "convertMIGColorToFIGColor"], (function(a, b, c, d, e, f, g, h, i, j) {
    "use strict";
    f.renderText = a;
    f.renderIcon = c;
    var k = b("React");
    function a(a, c, d, e) {
        c = c || b("MessengerState.bs").getThreadMetaNow(b("CurrentUser").getID(), a.thread_id);
        if (b("MessengerLightweightActionUtils").isLWAMessage(a)) {
            e(b("MessengerLightweightActionUtils").getCollapsedLWAText(a));
            return
        }
        switch (a.log_message_type) {
        case b("MercuryLogMessageType").SUBSCRIBE:
            var f = a.author;
            a.log_message_data || i(0, 2425);
            var g = a.log_message_data.added_participants;
            g || i(0, 2426);
            f = g.length === 1 && f === g[0];
            g = c && b("MessengerAdminGroupUtils").isWorkFroup(c) && b("MessengerAdminGroupUtils").isWorkSyncedChatThreadMemberSyncMessage(a);
            f || g ? b("Bootloader").loadModules(["MercuryJoinableMessageRenderer"], function(b) {
                b.renderText(a, c, e)
            }, "MercuryLogMessageRenderer") : m(a, e);
            break;
        case b("MercuryLogMessageType").UNSUBSCRIBE:
            b("MessengerAdminGroupUtils").isJoinableThread(c) ? b("MessengerAdminGroupUtils").isGroupChat(c) ? A(a, e) : s(a, e) : r(a, e);
            break;
        case b("MercuryLogMessageType").THREAD_NAME:
            c && b("MessengerAdminGroupUtils").isWorkFroup(c) && b("MessengerAdminGroupUtils").isWorkSyncedChatThreadCreationMessage(a) ? v(a, e) : c && b("MessengerAdminGroupUtils").isJoinableThread(c) ? b("MessengerAdminGroupUtils").isGroupChat(c) ? B(a, c, e) : t(a, c, e) : w(a, c, e);
            break;
        case b("MercuryLogMessageType").THREAD_IMAGE:
            c && b("MessengerAdminGroupUtils").isJoinableThread(c) ? b("MessengerAdminGroupUtils").isGroupChat(c) ? C(a, c, e) : x(a, c, e) : y(a, c, e);
            break;
        case b("MercuryLogMessageType").WALLPAPER:
            z(a, e);
            break;
        case b("MercuryLogMessageType").GENERIC_ADMIN_TEXT:
            var h = b("convertMIGColorToFIGColor")(c && c.solid_color);
            b("Bootloader").loadModules(["MercuryXMATRenderer"], function(b) {
                e(b.renderText(h, a, d))
            }, "MercuryLogMessageRenderer");
            break;
        default:
            b("Bootloader").loadModules(["MercurySpecialLogMessageRenderer"], function(b) {
                b.renderText(a, e)
            }, "MercuryLogMessageRenderer");
            break
        }
    }
    function c(a) {
        return k.jsx(b("Image.react"), {
            className: l(a.log_message_type, a.log_message_data),
            src: j("99239")
        })
    }
    function l(a, c) {
        c = !!(c && c.answered);
        var d = !a || a === b("MercuryLogMessageType").GENERIC_ADMIN_TEXT;
        return "_5wzu" + (a === b("MercuryLogMessageType").SUBSCRIBE ? " _5wzj" : "") + (a === b("MercuryLogMessageType").UNSUBSCRIBE ? " _5wzk" : "") + (a === b("MercuryLogMessageType").THREAD_NAME ? " _5wzl" : "") + (a === b("MercuryLogMessageType").THREAD_IMAGE ? " _5wzm" : "") + (a === b("MercuryLogMessageType").VIDEO_CALL && c ? " _5wzn" : "") + (a === b("MercuryLogMessageType").VIDEO_CALL && !c ? " _5wzo" : "") + (a === b("MercuryLogMessageType").PHONE_CALL && c ? " _5wzp" : "") + (a === b("MercuryLogMessageType").PHONE_CALL && !c ? " _5wzq" : "") + (a === b("MercuryLogMessageType").SERVER_ERROR ? " _5wzr" : "") + (d ? " _2r5l" : "")
    }
    function m(a, c) {
        a.log_message_data || i(0, 1204);
        var d = b("MercuryMessageRendererUtils").moveCurrentUserToFront(a.log_message_data.added_participants);
        d || i(0, 1205);
        switch (d.length) {
        case 1:
            n(a, c, d);
            break;
        case 2:
            o(a, c, d);
            break;
        case 3:
            p(a, c, d);
            break;
        default:
            q(a, c, d);
            break
        }
    }
    function n(a, c, d) {
        var e = [a.author, d[0]];
        b("MessengerParticipants.bs").getMulti(e, function(e) {
            a.author === b("MercuryViewer").getID() ? c(h._("B\u1ea1n \u0111\u00e3 th\u00eam {subscriber1}.", [h._param("subscriber1", b("MercuryMessageRendererUtils").getLinkToParticipant(e[d[0]]))])) : d[0] === b("MercuryViewer").getID() ? c(h._("{actor} \u0111\u00e3 th\u00eam b\u1ea1n.", [h._param("actor", b("MercuryMessageRendererUtils").getLinkToParticipant(e[a.author]))])) : c(h._("{actor} \u0111\u00e3 th\u00eam {subscriber1}.", [h._param("actor", b("MercuryMessageRendererUtils").getLinkToParticipant(e[a.author])), h._param("subscriber1", b("MercuryMessageRendererUtils").getLinkToParticipant(e[d[0]]))]))
        })
    }
    function o(a, c, d) {
        var e = [a.author].concat(d);
        b("MessengerParticipants.bs").getMulti(e, function(e) {
            a.author === b("MercuryViewer").getID() ? c(h._("B\u1ea1n \u0111\u00e3 th\u00eam {subscriber1} v\u00e0 {subscriber2}.", [h._param("subscriber1", b("MercuryMessageRendererUtils").getLinkToParticipant(e[d[0]])), h._param("subscriber2", b("MercuryMessageRendererUtils").getLinkToParticipant(e[d[1]]))])) : d[0] === b("MercuryViewer").getID() ? c(h._("{actor} \u0111\u00e3 th\u00eam b\u1ea1n v\u00e0 {subscriber2}.", [h._param("actor", b("MercuryMessageRendererUtils").getLinkToParticipant(e[a.author])), h._param("subscriber2", b("MercuryMessageRendererUtils").getLinkToParticipant(e[d[1]]))])) : c(h._("{actor} \u0111\u00e3 th\u00eam {subscriber1} v\u00e0 {subscriber2}.", [h._param("actor", b("MercuryMessageRendererUtils").getLinkToParticipant(e[a.author])), h._param("subscriber1", b("MercuryMessageRendererUtils").getLinkToParticipant(e[d[0]])), h._param("subscriber2", b("MercuryMessageRendererUtils").getLinkToParticipant(e[d[1]]))]))
        })
    }
    function p(a, c, d) {
        var e = [a.author].concat(d);
        b("MessengerParticipants.bs").getMulti(e, function(e) {
            if (a.author === b("MercuryViewer").getID())
                c(h._("B\u1ea1n \u0111\u00e3 th\u00eam {subscriber1}, {subscriber2} v\u00e0 {subscriber3}.", [h._param("subscriber1", b("MercuryMessageRendererUtils").getLinkToParticipant(e[d[0]])), h._param("subscriber2", b("MercuryMessageRendererUtils").getLinkToParticipant(e[d[1]])), h._param("subscriber3", b("MercuryMessageRendererUtils").getLinkToParticipant(e[d[2]]))]));
            else if (d[0] === b("MercuryViewer").getID())
                c(h._("{actor} \u0111\u00e3 th\u00eam b\u1ea1n, {subscriber2} v\u00e0 {subscriber3}", [h._param("actor", b("MercuryMessageRendererUtils").getLinkToParticipant(e[a.author])), h._param("subscriber2", b("MercuryMessageRendererUtils").getLinkToParticipant(e[d[1]])), h._param("subscriber3", b("MercuryMessageRendererUtils").getLinkToParticipant(e[d[2]]))]));
            else {
                var f;
                c(h._("{actor} \u0111\u00e3 th\u00eam {subscriber1}, {subscriber2} v\u00e0 {subscriber3}.", [h._param("actor", (f = b("MercuryMessageRendererUtils")).getLinkToParticipant(e[a.author])), h._param("subscriber1", f.getLinkToParticipant(e[d[0]])), h._param("subscriber2", f.getLinkToParticipant(e[d[1]])), h._param("subscriber3", f.getLinkToParticipant(e[d[2]]))]))
            }
        })
    }
    function q(a, c, d) {
        var e = [a.author].concat(d);
        b("MessengerParticipants.bs").getMulti(e, function(e) {
            function f(a) {
                var c = k.jsx("div", {
                    children: a.map(function(a) {
                        return k.jsx("div", {
                            children: a.name
                        })
                    })
                });
                return k.jsx(b("TooltipLink.react"), {
                    alignH: "center",
                    position: "above",
                    tooltip: c,
                    children: h._({
                        "*": "{num} ng\u01b0\u1eddi kh\u00e1c"
                    }, [h._param("num", a.length, [0])])
                })
            }
            var g = d.map(function(a) {
                return e[a]
            });
            a.author === b("MercuryViewer").getID() ? c(h._("B\u1ea1n \u0111\u00e3 th\u00eam {subscriber1}, {subscriber2} v\u00e0 {more_people}.", [h._param("subscriber1", b("MercuryMessageRendererUtils").getLinkToParticipant(g[0])), h._param("subscriber2", b("MercuryMessageRendererUtils").getLinkToParticipant(g[1])), h._param("more_people", f(g.slice(2)))])) : d[0] === b("MercuryViewer").getID() ? c(h._("{actor} \u0111\u00e3 th\u00eam b\u1ea1n, {subscriber2} v\u00e0 {more_people}.", [h._param("actor", b("MercuryMessageRendererUtils").getLinkToParticipant(e[a.author])), h._param("subscriber2", b("MercuryMessageRendererUtils").getLinkToParticipant(g[1])), h._param("more_people", f(g.slice(2)))])) : c(h._("{actor} \u0111\u00e3 th\u00eam {subscriber1}, {subscriber2} v\u00e0 {more_people}.", [h._param("actor", b("MercuryMessageRendererUtils").getLinkToParticipant(e[a.author])), h._param("subscriber1", b("MercuryMessageRendererUtils").getLinkToParticipant(g[0])), h._param("subscriber2", b("MercuryMessageRendererUtils").getLinkToParticipant(g[1])), h._param("more_people", f(g.slice(2)))]))
        })
    }
    function r(a, c) {
        var d = [a.author];
        a.log_message_data || i(0, 2425);
        var e = a.log_message_data.removed_participants;
        e || i(0, 2427);
        var f;
        e.length === 1 && (f = e[0],
        d.push(f));
        b("MessengerParticipants.bs").getMulti(d, function(d) {
            var e = d[a.author];
            d = d[f];
            a.author === b("MercuryViewer").getID() ? !f || f === a.author ? c(h._("B\u1ea1n \u0111\u00e3 r\u1eddi kh\u1ecfi cu\u1ed9c tr\u00f2 chuy\u1ec7n.")) : c(h._("B\u1ea1n \u0111\u00e3 x\u00f3a {name} kh\u1ecfi cu\u1ed9c tr\u00f2 chuy\u1ec7n.", [h._param("name", b("MercuryMessageRendererUtils").getLinkToParticipant(d))])) : !f || f === a.author ? c(h._("{actor} \u0111\u00e3 r\u1eddi kh\u1ecfi cu\u1ed9c tr\u00f2 chuy\u1ec7n.", [h._param("actor", b("MercuryMessageRendererUtils").getLinkToParticipant(e))])) : f === b("MercuryViewer").getID() ? c(h._("{actor} \u0111\u00e3 x\u00f3a b\u1ea1n kh\u1ecfi cu\u1ed9c tr\u00f2 chuy\u1ec7n.", [h._param("actor", b("MercuryMessageRendererUtils").getLinkToParticipant(e))])) : c(h._("{actor} \u0111\u00e3 x\u00f3a {name} kh\u1ecfi cu\u1ed9c tr\u00f2 chuy\u1ec7n.", [h._param("actor", b("MercuryMessageRendererUtils").getLinkToParticipant(e)), h._param("name", b("MercuryMessageRendererUtils").getLinkToParticipant(d))]))
        })
    }
    function s(a, c) {
        var d = [a.author];
        a.log_message_data || i(0, 2425);
        var e = a.log_message_data.removed_participants;
        e || i(0, 2427);
        var f;
        e.length === 1 && (f = e[0],
        d.push(f));
        b("MessengerParticipants.bs").getMulti(d, function(d) {
            var e = d[a.author];
            d = d[f];
            a.author === b("MercuryViewer").getID() ? !f || f === a.author ? c(h._("You left the room.")) : c(h._("You removed {name} from the room.", [h._param("name", b("MercuryMessageRendererUtils").getLinkToParticipant(d))])) : !f || f === a.author ? c(h._("{actor} left the room.", [h._param("actor", b("MercuryMessageRendererUtils").getLinkToParticipant(e))])) : f === b("MercuryViewer").getID() ? c(h._("{actor} removed you from the room.", [h._param("actor", b("MercuryMessageRendererUtils").getLinkToParticipant(e))])) : c(h._("{actor} removed {name} from the room.", [h._param("actor", b("MercuryMessageRendererUtils").getLinkToParticipant(e)), h._param("name", b("MercuryMessageRendererUtils").getLinkToParticipant(d))]))
        })
    }
    function t(a, c, d) {
        a.log_message_data || i(0, 2425);
        var e = a.log_message_data.name
          , f = "_5wzs" + (b("UserAgent").isBrowser("Chrome") ? " _4fbd" : "");
        if (a.author === b("MercuryViewer").getID())
            if (e) {
                var g = k.jsx(b("MessengerTextWithEmoticons.react"), {
                    renderEmoticons: !0,
                    renderEmoji: !0,
                    text: e
                });
                d(h._("B\u1ea1n \u0111\u00e3 \u0111\u1eb7t t\u00ean ph\u00f2ng: {name}.", [h._param("name", k.jsx("span", {
                    className: f,
                    children: g
                }))]))
            } else
                d(h._("B\u1ea1n \u0111\u00e3 g\u1ee1 t\u00ean ph\u00f2ng."));
        else
            b("MessengerParticipants.bs").get(a.author, function(a) {
                a = b("MercuryMessageRendererUtils").getLinkToParticipant(a, c);
                if (e) {
                    var g = k.jsx(b("MessengerTextWithEmoticons.react"), {
                        renderEmoticons: !0,
                        renderEmoji: !0,
                        text: e
                    });
                    d(h._("{actor} \u0111\u00e3 \u0111\u1eb7t t\u00ean ph\u00f2ng: {name}.", [h._param("actor", a), h._param("name", k.jsx("span", {
                        className: f,
                        children: g
                    }))]))
                } else
                    d(h._("{actor} \u0111\u00e3 g\u1ee1 t\u00ean ph\u00f2ng.", [h._param("actor", a)]))
            })
    }
    function u(a, c, d, e, f) {
        a.author === b("MercuryViewer").getID() ? f(h._("B\u1ea1n \u0111\u00e3 \u0111\u1eb7t t\u00ean nh\u00f3m l\u00e0 {thread_name}. Nh\u00f3m c\u1ee7a b\u1ea1n c\u0169ng c\u00f3 tr\u00ean Facebook.", [h._param("thread_name", k.jsx("span", {
            className: e,
            children: k.jsx(b("MessengerTextWithEmoticons.react"), {
                renderEmoticons: !0,
                renderEmoji: !0,
                text: d
            })
        }))])) : b("MessengerParticipants.bs").get(a.author, function(a) {
            a = b("MercuryMessageRendererUtils").getLinkToParticipant(a, c);
            f(h._("{actor} \u0111\u00e3 \u0111\u1eb7t t\u00ean nh\u00f3m l\u00e0 {thread_name}. Nh\u00f3m c\u1ee7a b\u1ea1n c\u0169ng c\u00f3 tr\u00ean Facebook.", [h._param("actor", a), h._param("thread_name", k.jsx("span", {
                className: e,
                children: k.jsx(b("MessengerTextWithEmoticons.react"), {
                    renderEmoticons: !0,
                    renderEmoji: !0,
                    text: d
                })
            }))]))
        })
    }
    function v(a, c) {
        a.log_message_data || i(0, 2425);
        var d = a.log_message_data.name
          , e = "_5wzs" + (b("UserAgent").isBrowser("Chrome") ? " _4fbd" : "");
        if (d) {
            a.source === "source:work:defaultgroupchat:creation" ? c(h._("B\u1ea1n hi\u1ec7n c\u00f3 th\u1ec3 chat v\u1edbi nh\u00f3m n\u00e0y trong Chat tr\u00ean Workplace.")) : c(h._("B\u1ea1n hi\u1ec7n c\u00f3 th\u1ec3 tr\u00f2 chuy\u1ec7n v\u1edbi {name} trong \u1ee9ng d\u1ee5ng Chat tr\u00ean Workplace.", [h._param("name", k.jsx("span", {
                className: e,
                children: k.jsx(b("MessengerTextWithEmoticons.react"), {
                    renderEmoticons: !0,
                    renderEmoji: !0,
                    text: d
                })
            }))]));
            return
        }
    }
    function w(a, c, d) {
        a.log_message_data || i(0, 2425);
        var e = a.log_message_data.name
          , f = "_5wzs" + (b("UserAgent").isBrowser("Chrome") ? " _4fbd" : "");
        if (e && a.tags && a.tags.indexOf("source:messenger_growth:event_upcoming_bump") !== -1)
            d(h._("Nh\u00f3m \u0111\u00e3 \u0111\u01b0\u1ee3c \u0111\u1eb7t t\u00ean l\u00e0 {name}.", [h._param("name", k.jsx("span", {
                className: f,
                children: k.jsx(b("MessengerTextWithEmoticons.react"), {
                    renderEmoticons: !0,
                    renderEmoji: !0,
                    text: e
                })
            }))]));
        else if (e && a.tags && a.tags.indexOf("source:groupsync:naming") !== -1)
            u(a, c, e, f, d);
        else if (a.author === b("MercuryViewer").getID())
            if (e) {
                var g = k.jsx(b("MessengerTextWithEmoticons.react"), {
                    renderEmoticons: !0,
                    renderEmoji: !0,
                    text: e
                });
                d(h._("B\u1ea1n \u0111\u00e3 \u0111\u1eb7t t\u00ean cu\u1ed9c tr\u00f2 chuy\u1ec7n: {name}.", [h._param("name", k.jsx("span", {
                    className: f,
                    children: g
                }))]))
            } else
                d(h._("B\u1ea1n \u0111\u00e3 g\u1ee1 t\u00ean cu\u1ed9c tr\u00f2 chuy\u1ec7n."));
        else
            b("MessengerParticipants.bs").get(a.author, function(a) {
                a = b("MercuryMessageRendererUtils").getLinkToParticipant(a, c);
                if (e) {
                    var g = k.jsx(b("MessengerTextWithEmoticons.react"), {
                        renderEmoticons: !0,
                        renderEmoji: !0,
                        text: e
                    });
                    d(h._("{actor} \u0111\u00e3 \u0111\u1eb7t t\u00ean cu\u1ed9c tr\u00f2 chuy\u1ec7n: {name}.", [h._param("actor", a), h._param("name", k.jsx("span", {
                        className: f,
                        children: g
                    }))]))
                } else
                    d(h._("{actor} \u0111\u00e3 g\u1ee1 t\u00ean cu\u1ed9c tr\u00f2 chuy\u1ec7n.", [h._param("actor", a)]))
            })
    }
    function x(a, c, d) {
        a.author === b("MercuryViewer").getID() ? (a.log_message_data || i(0, 2425),
        a.log_message_data.image ? d(h._("B\u1ea1n \u0111\u00e3 thay \u0111\u1ed5i \u1ea3nh ph\u00f2ng.")) : d(h._("B\u1ea1n \u0111\u00e3 g\u1ee1 \u1ea3nh ph\u00f2ng."))) : b("MessengerParticipants.bs").get(a.author, function(e) {
            e = b("MercuryMessageRendererUtils").getLinkToParticipant(e, c);
            a.log_message_data || i(0, 2425);
            a.log_message_data.image ? d(h._("{actor} \u0111\u00e3 thay \u0111\u1ed5i \u1ea3nh ph\u00f2ng.", [h._param("actor", e)])) : d(h._("{actor} \u0111\u00e3 g\u1ee1 \u1ea3nh ph\u00f2ng.", [h._param("actor", e)]))
        })
    }
    function y(a, c, d) {
        a.tags !== void 0 && a.tags.indexOf("source:messenger_growth:event_upcoming_bump") !== -1 ? d(h._("\u0110\u00e3 \u0111\u1eb7t \u1ea3nh c\u1ee7a cu\u1ed9c tr\u00f2 chuy\u1ec7n.")) : a.author === b("MercuryViewer").getID() ? (a.log_message_data || i(0, 2425),
        a.log_message_data.image ? d(h._("B\u1ea1n \u0111\u00e3 thay \u0111\u1ed5i \u1ea3nh cu\u1ed9c tr\u00f2 chuy\u1ec7n.")) : d(h._("B\u1ea1n \u0111\u00e3 g\u1ee1 \u1ea3nh cu\u1ed9c tr\u00f2 chuy\u1ec7n."))) : b("MessengerParticipants.bs").get(a.author, function(e) {
            e = b("MercuryMessageRendererUtils").getLinkToParticipant(e, c);
            a.log_message_data || i(0, 2425);
            a.log_message_data.image ? d(h._("{actor} \u0111\u00e3 thay \u0111\u1ed5i \u1ea3nh cu\u1ed9c tr\u00f2 chuy\u1ec7n.", [h._param("actor", e)])) : d(h._("{actor} \u0111\u00e3 g\u1ee1 \u1ea3nh cu\u1ed9c tr\u00f2 chuy\u1ec7n.", [h._param("actor", e)]))
        })
    }
    function z(a, c) {
        a.author === b("MercuryViewer").getID() ? c(h._("B\u1ea1n \u0111\u00e3 thay \u0111\u1ed5i h\u00ecnh n\u1ec1n.")) : b("MessengerParticipants.bs").get(a.author, function(a) {
            a = b("MercuryMessageRendererUtils").getLinkToParticipant(a);
            c(h._("{actor} \u0111\u00e3 thay \u0111\u1ed5i h\u00ecnh n\u1ec1n.", [h._param("actor", a)]))
        })
    }
    function A(a, c) {
        var d = [a.author];
        a.log_message_data || i(0, 2425);
        var e = a.log_message_data.removed_participants;
        e || i(0, 2427);
        var f;
        e.length === 1 && (f = e[0],
        d.push(f));
        b("MessengerParticipants.bs").getMulti(d, function(d) {
            var e = d[a.author];
            d = d[f];
            a.author === b("MercuryViewer").getID() ? !f || f === a.author ? c(h._("B\u1ea1n \u0111\u00e3 r\u1eddi kh\u1ecfi cu\u1ed9c tr\u00f2 chuy\u1ec7n.")) : c(h._("B\u1ea1n \u0111\u00e3 x\u00f3a {name} kh\u1ecfi \u0111o\u1ea1n chat.", [h._param("name", b("MercuryMessageRendererUtils").getLinkToParticipant(d))])) : !f || f === a.author ? c(h._("{actor} \u0111\u00e3 r\u1eddi kh\u1ecfi cu\u1ed9c tr\u00f2 chuy\u1ec7n.", [h._param("actor", b("MercuryMessageRendererUtils").getLinkToParticipant(e))])) : f === b("MercuryViewer").getID() ? c(h._("{actor} \u0111\u00e3 x\u00f3a b\u1ea1n kh\u1ecfi \u0111o\u1ea1n chat.", [h._param("actor", b("MercuryMessageRendererUtils").getLinkToParticipant(e))])) : c(h._("{actor} \u0111\u00e3 x\u00f3a {name} kh\u1ecfi \u0111o\u1ea1n chat.", [h._param("actor", b("MercuryMessageRendererUtils").getLinkToParticipant(e)), h._param("name", b("MercuryMessageRendererUtils").getLinkToParticipant(d))]))
        })
    }
    function B(a, c, d) {
        a.log_message_data || i(0, 2425);
        var e = a.log_message_data.name
          , f = "_5wzs" + (b("UserAgent").isBrowser("Chrome") ? " _4fbd" : "");
        if (a.author === b("MercuryViewer").getID())
            if (e) {
                var g = k.jsx(b("MessengerTextWithEmoticons.react"), {
                    renderEmoticons: !0,
                    renderEmoji: !0,
                    text: e
                });
                d(h._("B\u1ea1n \u0111\u00e3 \u0111\u1eb7t t\u00ean cu\u1ed9c tr\u00f2 chuy\u1ec7n l\u00e0: {name}.", [h._param("name", k.jsx("span", {
                    className: f,
                    children: g
                }))]))
            } else
                d(h._("B\u1ea1n \u0111\u00e3 g\u1ee1 t\u00ean \u0111o\u1ea1n chat."));
        else
            b("MessengerParticipants.bs").get(a.author, function(a) {
                a = b("MercuryMessageRendererUtils").getLinkToParticipant(a, c);
                if (e) {
                    var g = k.jsx(b("MessengerTextWithEmoticons.react"), {
                        renderEmoticons: !0,
                        renderEmoji: !0,
                        text: e
                    });
                    d(h._("{actor} \u0111\u00e3 \u0111\u1eb7t t\u00ean cu\u1ed9c tr\u00f2 chuy\u1ec7n l\u00e0: {name}.", [h._param("actor", a), h._param("name", k.jsx("span", {
                        className: f,
                        children: g
                    }))]))
                } else
                    d(h._("{actor} \u0111\u00e3 g\u1ee1 t\u00ean \u0111o\u1ea1n chat.", [h._param("actor", a)]))
            })
    }
    function C(a, c, d) {
        a.author === b("MercuryViewer").getID() ? (a.log_message_data || i(0, 2425),
        a.log_message_data.image ? d(h._("B\u1ea1n \u0111\u00e3 thay \u0111\u1ed5i \u1ea3nh cu\u1ed9c tr\u00f2 chuy\u1ec7n.")) : d(h._("B\u1ea1n \u0111\u00e3 g\u1ee1 \u1ea3nh \u0111o\u1ea1n chat."))) : b("MessengerParticipants.bs").get(a.author, function(e) {
            e = b("MercuryMessageRendererUtils").getLinkToParticipant(e, c);
            a.log_message_data || i(0, 2425);
            a.log_message_data.image ? d(h._("{actor} \u0111\u00e3 thay \u0111\u1ed5i \u1ea3nh cu\u1ed9c tr\u00f2 chuy\u1ec7n.", [h._param("actor", e)])) : d(h._("{actor} \u0111\u00e3 g\u1ee1 \u1ea3nh \u0111o\u1ea1n chat.", [h._param("actor", e)]))
        })
    }
}
), null);
__d("MercuryLogMessage.react", ["cx", "fbt", "DOMDimensions", "MercuryLogMessageRenderer", "MercuryLogMessageType", "React", "ShimButton.react", "cancelAnimationFrame", "emptyFunction", "formatDate", "joinClasses", "prop-types", "requestAnimationFrame"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.state = {
                messageText: null
            },
            c.$1 = !1,
            c.$4 = function() {
                c.$5()
            }
            ,
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            this.$1 = !0,
            this.UNSAFE_componentWillReceiveProps(this.props)
        }
        ;
        d.componentWillUnmount = function() {
            this.$1 = !1,
            this.$2 && b("cancelAnimationFrame")(this.$2)
        }
        ;
        d.$3 = function() {
            return i.jsx(b("ShimButton.react"), {
                form: "link",
                onClick: this.$4,
                children: h._("Hi\u1ec3n th\u1ecb tin nh\u1eafn tr\u01b0\u1edbc \u0111\u00f3.")
            })
        }
        ;
        d.$5 = function() {
            var a = this.props.loadMoreMessages && this.props.loadMoreMessages();
            if (!this.$1)
                return;
            if (a)
                this.setState({
                    messageText: this.$3()
                });
            else {
                a = h._("Kh\u00f4ng th\u1ec3 t\u00ecm \u0111\u01b0\u1ee3c tin nh\u1eafn tr\u01b0\u1edbc \u0111\u00f3.");
                this.setState({
                    messageText: a
                })
            }
        }
        ;
        d.UNSAFE_componentWillReceiveProps = function(a) {
            if (a.message.log_message_type === b("MercuryLogMessageType").SERVER_ERROR)
                return;
            b("MercuryLogMessageRenderer").renderText(a.message, a.thread, a.isLastOfType, function(a) {
                this.$1 && this.setState({
                    messageText: a
                })
            }
            .bind(this))
        }
        ;
        d.shouldComponentUpdate = function(a, b) {
            return this.state.messageText != b.messageText || a.maxWidth !== this.props.maxWidth
        }
        ;
        d.componentDidUpdate = function() {
            this.$6()
        }
        ;
        d.render = function() {
            return i.jsx("div", babelHelpers["extends"]({}, this.props, {
                className: b("joinClasses")(this.props.className, "_5ye6"),
                ref: "wrap",
                style: babelHelpers["extends"]({}, this.props.style, this.$7()),
                title: b("formatDate")(new Date(this.props.message.timestamp), "g:ia"),
                children: i.jsxs("div", {
                    className: "_5ye7",
                    children: [b("MercuryLogMessageRenderer").renderIcon(this.props.message), i.jsx("span", {
                        "data-testid": void 0,
                        children: this.state.messageText
                    })]
                })
            }))
        }
        ;
        d.$7 = function() {
            return this.props.maxWidth ? {
                maxWidth: this.props.maxWidth
            } : null
        }
        ;
        d.$6 = function() {
            var a = this;
            this.$2 && b("cancelAnimationFrame")(this.$2);
            if (!this.$1)
                return;
            this.$2 = b("requestAnimationFrame")(function() {
                a.props.onImageLoad && a.props.onImageLoad(b("DOMDimensions").getElementDimensions(a.refs.wrap).height),
                delete a.$2
            })
        }
        ;
        return c
    }(i.Component);
    e.exports = a;
    a.propTypes = {
        loadMoreMessages: (c = b("prop-types")).func,
        maxWidth: c.number,
        message: c.object.isRequired,
        onImageLoad: c.func,
        thread: c.object,
        isLastOfType: c.bool.isRequired
    };
    a.defaultProps = {
        onImageLoad: b("emptyFunction")
    }
}
), null);
__d("ChatConversation.react", ["ChatCollapsedLogMessageGroup.react", "ChatDateBreak.react", "ChatMessageGroup.react", "ChatMessageList.react", "MercuryIDs", "MercuryLogMessage.react", "MercuryShareAttachmentRenderLocations", "MessengerReadReceipt.bs", "React", "cancelAnimationFrame", "clearTimeout", "immutable", "prop-types", "requestAnimationFrame", "setTimeout"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    b("immutable").OrderedMap;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            var a = this;
            this.$1 = b("requestAnimationFrame")(function() {
                a.$2 = b("setTimeout")(function() {
                    a.props.onMount && a.props.onMount(),
                    delete a.$2
                }, 0),
                delete a.$1
            })
        }
        ;
        d.componentWillUnmount = function() {
            this.$1 && b("cancelAnimationFrame")(this.$1),
            b("clearTimeout")(this.$2)
        }
        ;
        d.render = function() {
            return g.jsxs("div", {
                children: [this.props.contextBanner, g.jsx(b("ChatMessageList.react"), {
                    DateBreak: b("ChatDateBreak.react"),
                    forGameChat: this.props.forGameChat,
                    LogMessage: b("MercuryLogMessage.react"),
                    MessageGroup: b("ChatMessageGroup.react"),
                    deliveryTimestamp: 0,
                    isCanonical: this.props.isCanonical,
                    location: b("MercuryShareAttachmentRenderLocations").CHAT,
                    loadMoreMessages: this.props.loadMoreMessages,
                    maxBubbleWidth: this.props.maxBubbleWidth,
                    CollapsedLogMessageGroup: b("ChatCollapsedLogMessageGroup.react"),
                    messages: this.props.messages,
                    onReactionSwap: this.props.onReactionSwap,
                    onAttachmentLoad: this.props.onAttachmentLoad,
                    onStickerClick: this.props.onStickerClick,
                    readReceipts: this.$3(this.props),
                    ref: "messageList",
                    viewer: this.props.viewer,
                    thread: this.props.thread,
                    threadID: this.props.threadID
                })]
            })
        }
        ;
        d.$3 = function(a) {
            var c = b("MercuryIDs").getParticipantIDFromUserID(a.viewer)
              , d = b("MessengerReadReceipt.bs").getSeenTimestamps(a.readReceipts, a.threadID)
              , e = new Set(a.thread ? a.thread.participants : d.keys());
            e["delete"](c);
            return d.withMutations(function(c) {
                b("immutable").Seq(a.messages).reverse().forEach(function(a) {
                    if (e.size === 0)
                        return !1;
                    if (!e.has(a.author))
                        return null;
                    if (a.action_type === "ma-type:log-message")
                        return;
                    c.update(a.author, function(b) {
                        return !b || b.watermark <= a.timestamp ? {
                            watermark: a.timestamp,
                            action: a.timestamp
                        } : b
                    });
                    e["delete"](a.author);
                    return null
                })
            })
        }
        ;
        d.getMessageList = function() {
            return this.refs.messageList
        }
        ;
        return c
    }(g.Component);
    e.exports = a;
    a.propTypes = {
        contextBanner: (c = b("prop-types")).object,
        forGameChat: c.bool.isRequired,
        isCanonical: c.bool.isRequired,
        loadMoreMessages: c.func,
        maxBubbleWidth: c.number.isRequired,
        onAttachmentLoad: c.func,
        onMount: c.func,
        onStickerClick: c.func,
        thread: c.object,
        threadID: c.string.isRequired,
        viewer: c.string.isRequired
    }
}
), null);
__d("FantaGetMessageActions", ["FantaDispatcher", "FantaTabActions", "MercuryCanonicalGroupThreadManager", "MercuryIDs", "keyMirror", "requireWeak"], (function(a, b, c, d, e, f) {
    "use strict";
    f.addParticipants = a;
    f.onBootloadTypeahead = c;
    f.refreshThread = d;
    f.onGetThreadResponse = e;
    f.onGetThreadPreviewResponse = i;
    f.onParticipantResponse = j;
    f.onShowContextBannerTimer = k;
    f.threadsUpdated = l;
    f.onPrivacyStateChange = m;
    f.onPageNullResponse = n;
    f.onGetThreadHrefResponse = o;
    var g;
    b("requireWeak")("FantaAppStore", function(a) {
        return g = a
    });
    var h = b("keyMirror")({
        ADD_PARTICIPANTS: null,
        CLEAR_PARTICIPANTS: null,
        CLEAR_PREVIEW: null,
        ON_BOOTLOAD_TYPEAHEAD: null,
        ON_GET_PARTICIPANT_RESPONSE: null,
        ON_GET_THREAD_PREVIEW_RESPONSE: null,
        ON_GET_THREAD_RESPONSE: null,
        ON_PAGE_NULL_RESPONSE: null,
        ON_PRIVACY_STATE_CHANGE: null,
        ON_SHOW_CONTEXT_BANNER_TIMER: null,
        ON_GET_THREAD_HREF_RESPONSE: null,
        REFRESH_THREAD: null,
        THREADS_UPDATED: null
    });
    f.Types = h;
    function a(a, c) {
        var d = c.length === 1 && c[0].getInfo().render_type === "thread", e;
        if (d) {
            d = c[0].getInfo().mercury_thread;
            d = b("MercuryIDs").getThreadIDFromThreadFBID(d.thread_fbid);
            b("FantaTabActions").replaceTab(a, d);
            return
        }
        if (c.length === 1) {
            d = c[0].info && c[0].info.uid;
            d && (e = b("MercuryIDs").getThreadIDFromUserID(d))
        } else if (c.length === 0) {
            b("FantaDispatcher").dispatch({
                type: h.CLEAR_PARTICIPANTS,
                tabID: a
            });
            return
        } else {
            var f = b("MercuryCanonicalGroupThreadManager").get();
            d = c.map(function(a) {
                return a.info.uid
            });
            b("FantaDispatcher").dispatch({
                type: h.CLEAR_PREVIEW,
                tabID: a,
                tokens: c
            });
            var i = f.getCanonicalGroupThreadIDForParticipants(Array.from(d), function(d) {
                f.unsubscribe(i);
                if (g) {
                    var e = g.getState();
                    if (!e.tabGroup.tabs.get(a))
                        return
                }
                d && b("FantaDispatcher").dispatch({
                    type: h.ADD_PARTICIPANTS,
                    previewTabID: d,
                    tabID: a,
                    tokens: c
                })
            })
        }
        e && b("FantaDispatcher").dispatch({
            type: h.ADD_PARTICIPANTS,
            previewTabID: e,
            tabID: a,
            tokens: c
        })
    }
    function c(a, c) {
        b("FantaDispatcher").dispatch({
            type: h.ON_BOOTLOAD_TYPEAHEAD,
            tabID: a,
            thread: c
        })
    }
    function d(a) {
        b("FantaDispatcher").dispatch({
            type: h.REFRESH_THREAD,
            threadID: a
        })
    }
    function e(a) {
        b("FantaDispatcher").dispatch({
            type: h.ON_GET_THREAD_RESPONSE,
            thread: a
        })
    }
    function i(a, c) {
        b("FantaDispatcher").dispatch({
            type: h.ON_GET_THREAD_PREVIEW_RESPONSE,
            tabID: a,
            thread: c
        })
    }
    function j(a) {
        b("FantaDispatcher").dispatch({
            type: h.ON_GET_PARTICIPANT_RESPONSE,
            tabID: a
        })
    }
    function k(a) {
        b("FantaDispatcher").dispatch({
            type: h.ON_SHOW_CONTEXT_BANNER_TIMER,
            threadID: a
        })
    }
    function l(a) {
        b("FantaDispatcher").dispatch({
            type: h.THREADS_UPDATED,
            threads: a
        })
    }
    function m(a, c) {
        b("FantaDispatcher").dispatch({
            type: h.ON_PRIVACY_STATE_CHANGE,
            threadID: a,
            privacyState: c
        })
    }
    function n(a, c) {
        b("FantaDispatcher").dispatch({
            type: h.ON_PAGE_NULL_RESPONSE,
            threadID: a,
            nullStateCTA: c
        })
    }
    function o(a, c) {
        b("FantaDispatcher").dispatch({
            type: h.ON_GET_THREAD_HREF_RESPONSE,
            tabID: a,
            href: c
        })
    }
}
), null);
__d("FantaTabSheetActions", ["FantaDispatcher", "LogHistory", "keyMirror"], (function(a, b, c, d, e, f) {
    "use strict";
    f.openSolidReactionSheet = a;
    f.closeSolidReactionSheet = c;
    f.openUserFocusSheet = d;
    f.openBypassFocusSheet = e;
    f.closeUserFocusAndBypassSheet = j;
    f.openAddMoreFriendsSheet = k;
    f.closeAddMoreFriendsSheet = l;
    f.closeAddFriendsSheet = m;
    f.openNameConversationSheet = n;
    f.closeNameConversationSheet = o;
    f.openReadOnlySheet = p;
    f.closeReadOnlySheet = q;
    f.openReadOnlyPermanentSheet = r;
    f.closeReadOnlyPermanentSheet = s;
    f.openEmployeePersonalUserSheet = t;
    f.closeEmployeePersonalUserSheet = u;
    f.openEmployeeWorkUserSheet = v;
    f.closeEmployeeWorkUserSheet = w;
    f.openMentorshipProgramSheet = x;
    f.onIsPageTab = y;
    f.onWorkDoNotDisturbResponse = z;
    f.onMentorshipProgramResponse = A;
    var g = b("keyMirror")({
        CLOSE_ADD_FRIENDS_SHEET: null,
        CLOSE_ADD_MORE_FRIENDS_SHEET: null,
        CLOSE_EMPLOYEE_PERSONAL_USER_SHEET: null,
        CLOSE_EMPLOYEE_WORK_USER_SHEET: null,
        CLOSE_NAME_CONVERSATION_TAB_SHEET: null,
        CLOSE_READ_ONLY_PERMANENT_SHEET: null,
        CLOSE_READ_ONLY_SHEET: null,
        CLOSE_USER_FOCUS_AND_BYPASS_SHEET: null,
        CLOSE_SOLID_REACTION_SHEET: null,
        ON_WORK_DO_NOT_DISTURB_RESPONSE: null,
        ON_MENTORSHIP_PROGRAM_RESPONSE: null,
        ON_IS_PAGE_TAB: null,
        OPEN_ADD_MORE_FRIENDS_SHEET: null,
        OPEN_BYPASS_FOCUS_SHEET: null,
        OPEN_EMPLOYEE_PERSONAL_USER_SHEET: null,
        OPEN_EMPLOYEE_WORK_USER_SHEET: null,
        OPEN_NAME_CONVERSATION_TAB_SHEET: null,
        OPEN_READ_ONLY_PERMANENT_SHEET: null,
        OPEN_READ_ONLY_SHEET: null,
        OPEN_USER_FOCUS_SHEET: null,
        OPEN_MENTORSHIP_PROGRAM_SHEET: null,
        OPEN_SOLID_REACTION_SHEET: null
    });
    f.Types = g;
    var h = b("LogHistory").getInstance("fanta_sheets");
    function i(a) {
        b("FantaDispatcher").dispatch(a),
        h.log(a.type, a.tabID)
    }
    function a(a) {
        i({
            type: g.OPEN_SOLID_REACTION_SHEET,
            tabID: a
        })
    }
    function c(a) {
        i({
            type: g.CLOSE_SOLID_REACTION_SHEET,
            tabID: a
        })
    }
    function d(a) {
        i({
            type: g.OPEN_USER_FOCUS_SHEET,
            tabID: a
        })
    }
    function e(a) {
        i({
            type: g.OPEN_BYPASS_FOCUS_SHEET,
            tabID: a
        })
    }
    function j(a) {
        i({
            type: g.CLOSE_USER_FOCUS_AND_BYPASS_SHEET,
            tabID: a
        })
    }
    function k(a) {
        i({
            type: g.OPEN_ADD_MORE_FRIENDS_SHEET,
            tabID: a
        })
    }
    function l(a) {
        i({
            type: g.CLOSE_ADD_MORE_FRIENDS_SHEET,
            tabID: a
        })
    }
    function m(a) {
        i({
            type: g.CLOSE_ADD_FRIENDS_SHEET,
            tabID: a
        })
    }
    function n(a) {
        i({
            type: g.OPEN_NAME_CONVERSATION_TAB_SHEET,
            tabID: a
        })
    }
    function o(a) {
        i({
            type: g.CLOSE_NAME_CONVERSATION_TAB_SHEET,
            tabID: a
        })
    }
    function p(a) {
        i({
            type: g.OPEN_READ_ONLY_SHEET,
            tabID: a
        })
    }
    function q(a) {
        i({
            type: g.CLOSE_READ_ONLY_SHEET,
            tabID: a
        })
    }
    function r(a) {
        i({
            type: g.OPEN_READ_ONLY_PERMANENT_SHEET,
            tabID: a
        })
    }
    function s(a) {
        i({
            type: g.CLOSE_READ_ONLY_PERMANENT_SHEET,
            tabID: a
        })
    }
    function t(a) {
        i({
            type: g.OPEN_EMPLOYEE_PERSONAL_USER_SHEET,
            tabID: a
        })
    }
    function u(a) {
        i({
            type: g.CLOSE_EMPLOYEE_PERSONAL_USER_SHEET,
            tabID: a
        })
    }
    function v(a) {
        i({
            type: g.OPEN_EMPLOYEE_WORK_USER_SHEET,
            tabID: a
        })
    }
    function w(a) {
        i({
            type: g.CLOSE_EMPLOYEE_WORK_USER_SHEET,
            tabID: a
        })
    }
    function x(a) {
        i({
            type: g.OPEN_MENTORSHIP_PROGRAM_SHEET,
            tabID: a
        })
    }
    function y(a, b) {
        i({
            type: g.ON_IS_PAGE_TAB,
            pageIndicator: b,
            tabID: a
        })
    }
    function z(a, b, c) {
        i({
            type: g.ON_WORK_DO_NOT_DISTURB_RESPONSE,
            tabID: a,
            status: b,
            description: c
        })
    }
    function A(a, b, c) {
        i({
            type: g.ON_MENTORSHIP_PROGRAM_RESPONSE,
            tabID: a,
            groupID: c,
            programName: b
        })
    }
}
), null);
__d("MercurySheetPolicy", ["keyMirror"], (function(a, b, c, d, e, f) {
    "use strict";
    f.canReplaceOpenSheet = a;
    f.getType = c;
    f.isPermanent = d;
    f.isSheetWithInput = e;
    var g = {
        ChatThreadSolidReactionSheet: {
            isPermanent: !1,
            isSheetWithInput: !1
        },
        ChatThreadIsMutedTabSheet: {
            isPermanent: !1,
            isSheetWithInput: !1
        },
        ChatUserFocusSheet: {
            isPermanent: !0,
            isSheetWithInput: !0
        },
        ChatUserFocusBypassSheet: {
            isPermanent: !0,
            isSheetWithInput: !0
        },
        ChatUserBlockedTabSheet: {
            isPermanent: !0,
            isSheetWithInput: !1
        },
        ChatUploadWarningTabSheet: {
            isPermanent: !1,
            isSheetWithInput: !1
        },
        ChatThreadIsMessageBlockedSheet: {
            isPermanent: !0,
            isSheetWithInput: !1
        },
        ChatReadOnlyTabSheet: {
            isPermanent: !1,
            isSheetWithInput: !1
        },
        ChatReadOnlyPermanentTabSheet: {
            isPermanent: !0,
            isSheetWithInput: !1
        },
        ChatOfflineTabSheet: {
            isPermanent: !0,
            isSheetWithInput: !1
        },
        ChatNoRecipientsTabSheet: {
            isPermanent: !0,
            isSheetWithInput: !1
        },
        ChatNewMessagesTabSheet: {
            isPermanent: !0,
            isSheetWithInput: !0
        },
        ChatNameConversationTabSheet: {
            isPermanent: !0,
            isSheetWithInput: !0
        },
        ChatEmployeeAwaySheet: {
            isPermanent: !0,
            isSheetWithInput: !1
        },
        ChatMontageSheet: {
            isPermanent: !1,
            isSheetWithInput: !1
        },
        ChatJoinCallSheet: {
            isPermanent: !0,
            isSheetWithInput: !1
        },
        FantaAddFriendsSheet: {
            isPermanent: !0,
            isSheetWithInput: !0
        },
        FantaAddMoreFriendsSheet: {
            isPermanent: !0,
            isSheetWithInput: !0
        },
        ChatRoomAssociatedObjectSheet: {
            isPermanent: !1,
            isSheetWithInput: !1
        },
        ChatMentorshipProgramSheet: {
            isPermanent: !1,
            isSheetWithInput: !1
        },
        ChatGroupsSyncTabSheet: {
            isPermanent: !0,
            isSheetWithInput: !1
        },
        ChatGroupNameComposerTabSheet: {
            isPermanent: !0,
            isSheetWithInput: !0
        },
        ChatIntegrityLandingScreenSheet: {
            isPermanent: !0,
            isSheetWithInput: !1
        }
    };
    function a(a, b) {
        var c = this.getType(b)
          , d = this.isPermanent(b);
        b = this.isSheetWithInput(b);
        var e = this.getType(a)
          , f = this.isPermanent(a);
        a = this.isSheetWithInput(a);
        if (a)
            return !!(c !== e && b);
        if (f && !d)
            return !1;
        return e === this.sheets.ChatThreadIsMessageBlockedSheet ? !1 : !0
    }
    function c(a) {
        var b = a.getType || a.type && a.type.getType || function() {
            return a
        }
        ;
        b = b.call(a);
        return b
    }
    function d(a) {
        if (typeof a === "string" && g[a])
            return g[a].isPermanent;
        var b = a.isPermanent || a.type && a.type.isPermanent || function() {
            return !1
        }
        ;
        b = b.call(a);
        return b
    }
    function e(a) {
        if (typeof a === "string" && g[a])
            return g[a].isSheetWithInput;
        var b = a.isSheetWithInput || a.type && a.type.isSheetWithInput || function() {
            return !1
        }
        ;
        b = b.call(a);
        return b
    }
    a = b("keyMirror")(g);
    f.sheets = a
}
), null);
__d("FantaComposeViewReducers", ["Bootloader", "FantaGetMessageActions", "FantaTabSheetActions", "MercuryDataSourceWrapper", "MercurySheetPolicy", "MessengerAdminGroupUtils", "ifRequired", "qex", "gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    f.onGetThreadResponse = a;
    f.onBootloadTypeahead = c;
    f.openAddMoreFriends = d;
    f.addParticipants = e;
    var g = b("FantaGetMessageActions").Types
      , h = b("FantaTabSheetActions").Types;
    function a(a, b) {
        switch (b.type) {
        case g.ON_GET_THREAD_RESPONSE:
        case g.ON_GET_THREAD_PREVIEW_RESPONSE:
            var c = b.thread;
            b = b.tabID || c.thread_id;
            a = i(a, c, b)
        }
        return a
    }
    function i(a, c, d) {
        c.participants.length === 0 && (a = j(a, d, c),
        a = l(a, d, b("MercurySheetPolicy").sheets.FantaAddFriendsSheet));
        return a
    }
    function c(a, b) {
        switch (b.type) {
        case g.ON_BOOTLOAD_TYPEAHEAD:
            b = b.thread;
            var c = b.thread_id;
            a = j(a, c, b)
        }
        return a
    }
    function j(a, c, d) {
        var e = a.mercury.tabContents.get(c);
        if (!e || e.typeahead)
            return a;
        b("ifRequired")("ChatTabTypeaheadRenderer", function(f) {
            b("ifRequired")("ContextualTypeaheadView", function(g) {
                b("ifRequired")("ChatTabAddMemberTypeaheadView", function(h) {
                    b("ifRequired")("MercuryTypeahead", function(i) {
                        if (!a.mercury.tabContents.get(c))
                            return;
                        var j = !!(d && d.participants && d.participants.length === 0)
                          , k = !!(d && d.associated_object && d.associated_object.privacy_mode === 0)
                          , l = j ? b("MercuryDataSourceWrapper").chat_typeahead_source : k ? b("MercuryDataSourceWrapper").chat_add_people_froup_source : d.work_associated_group != null && b("gkx")("995147") ? b("MercuryDataSourceWrapper").chat_add_people_restrict_extenal_members : b("qex")._("922586") ? b("MercuryDataSourceWrapper").chat_add_people_source_new : b("MercuryDataSourceWrapper").chat_add_people_source;
                        l.setShowThreads(j);
                        j ? l.setShowDefaultList(b("MessengerAdminGroupUtils").showDefaultListForNewChatTab()) : k || l.setShowDefaultList(b("MessengerAdminGroupUtils").showDefaultListForNewPersonAddChatTab());
                        (k || !j && b("qex")._("922586")) && l.setQueryData({
                            thread_id: d.thread_fbid
                        });
                        j = !j && !k && b("qex")._("922586") ? h : g;
                        k = new i(l,j);
                        k.setViewOption("renderer", f);
                        k.setExcludedParticipantsFromThreadMeta(d);
                        e = e.merge({
                            typeahead: k
                        });
                        a = a.setIn(["mercury", "tabContents", c], e)
                    }, function() {
                        return k(c, d)
                    })
                }, function() {
                    return k(c, d)
                })
            }, function() {
                return k(c, d)
            })
        }, function() {
            return k(c, d)
        });
        return a
    }
    function d(a, c) {
        switch (c.type) {
        case h.OPEN_ADD_MORE_FRIENDS_SHEET:
            var d = c.tabID
              , e = a.mercury.tabContents.get(d).thread;
            if (e) {
                a = j(a, d, e);
                return l(a, c.tabID, b("MercurySheetPolicy").sheets.FantaAddMoreFriendsSheet)
            }
        }
        return a
    }
    function k(a, c) {
        b("Bootloader").loadModules(["ChatTabTypeaheadRenderer", "ContextualTypeaheadView", "ChatTabAddMemberTypeaheadView", "MercuryTypeahead"], function(d, e, f, g) {
            b("FantaGetMessageActions").onBootloadTypeahead(a, c)
        }, "FantaComposeViewReducers")
    }
    function l(a, c, d) {
        var e = a.mercury.tabContents.get(c)
          , f = a.tabGroup.tabs.get(c);
        if (!f || !e)
            return a;
        f = e;
        f = f.openSheet;
        if (f && !b("MercurySheetPolicy").canReplaceOpenSheet(f, d))
            return a;
        e = e.merge({
            openSheet: d
        });
        a = a.setIn(["mercury", "tabContents", c], e);
        return a
    }
    function e(a, c) {
        switch (c.type) {
        case g.ADD_PARTICIPANTS:
            var d = c.tokens;
            c = c.tabID;
            d = d.length === 1 && d[0].getInfo().render_type === "thread";
            if (!d)
                return l(a, c, b("MercurySheetPolicy").sheets.FantaAddFriendsSheet)
        }
        return a
    }
}
), null);
__d("FantaReducersCookie", ["FantaMessageActions", "FantaTabActions", "PresenceState", "throttle"], (function(a, b, c, d, e, f) {
    "use strict";
    f.updateCookie = a;
    f.loadFromData = c;
    var g = b("FantaMessageActions").Types
      , h = b("FantaTabActions").Types
      , i = b("throttle").acrossTransitions(b("PresenceState").doSync, 500);
    function a(a, b) {
        switch (b.type) {
        case g.RECEIVED_NEW_MESSAGE:
        case h.CLOSE_ALL_TABS:
        case h.CLOSE_AND_TAB_NEXT:
        case h.CLOSE_TAB:
        case h.DELETE_TAB:
        case h.MINIMIZE_ALL_TABS:
        case h.MINIMIZE_TAB:
        case h.OPEN_TAB:
        case h.OPEN_TAB_WITH_INTERSTITIAL_DATA:
        case h.REPLACE_TAB:
        case g.ADD_GROUP_PARTICIPANTS_AS_REPLACE_TAB:
        case g.ADD_GROUP_PARTICIPANTS_AS_OPEN_TAB:
        case h.UNMINIMIZE_TAB:
        case h.OPT_IN_OPEN_TAB_WITH_BLOCKEES:
            i();
            return j(a)
        }
        return a
    }
    function c(a, b) {
        switch (b.type) {
        case h.LOAD_FROM_DATA:
            var c = a.tabGroup;
            b = b.tabData;
            c = c.updatedTime;
            c = c >= b.updatedTime || b.updatedTime === void 0 ? c : b.updatedTime;
            return a.mergeIn(["tabGroup"], {
                updatedTime: c
            })
        }
        return a
    }
    function j(a) {
        return a.mergeIn(["tabGroup"], {
            updatedTime: Date.now()
        })
    }
}
), null);
__d("FantaReducersDockCalculator", ["Arbiter", "FantaMessageActions", "FantaTabActions", "setImmediate"], (function(a, b, c, d, e, f) {
    "use strict";
    f.recalculateDock = a;
    var g = b("FantaTabActions").Types
      , h = b("FantaMessageActions").Types
      , i = null;
    function j(a) {
        i = a,
        b("setImmediate")(function() {
            b("Arbiter").inform("FantaReducersDockCalculator/shouldRecalculate")
        })
    }
    function k(a) {
        if (!i || a.size !== i.size)
            j(a);
        else {
            var b = !1;
            a.forEach(function(a) {
                var c = i && i.get(a.id);
                (!c || a.isMinimized !== c.isMinimized) && (b = !0)
            });
            b && j(a)
        }
    }
    function a(a, b) {
        var c = a.tabGroup.tabs;
        switch (b.type) {
        case g.CLOSE_ALL_TABS:
        case g.CLOSE_AND_TAB_NEXT:
        case g.CLOSE_TAB:
        case g.DELETE_TAB:
        case g.MINIMIZE_ALL_TABS:
        case g.MINIMIZE_TAB:
        case g.OPEN_TAB:
        case g.OPEN_TAB_WITH_INTERSTITIAL_DATA:
        case g.UNMINIMIZE_TAB:
        case h.ADD_GROUP_PARTICIPANTS_AS_OPEN_TAB:
            j(c);
            break;
        case g.LOAD_FROM_DATA:
        case h.RECEIVED_NEW_MESSAGE:
            k(c);
            break
        }
        return a
    }
}
), null);
__d("FantaReducersLogging", ["Bootloader", "FantaMessageActions", "FantaTabActions", "FantaTabSheetActions", "gkx", "requestIdleCallback"], (function(a, b, c, d, e, f) {
    "use strict";
    f.logSearchEventsAfterAction = a;
    f.updateVisibleTabs = c;
    var g = b("FantaTabActions").Types
      , h = b("FantaMessageActions").Types
      , i = b("FantaTabSheetActions").Types;
    function a(a, c) {
        if (!b("gkx")("678592"))
            return a;
        switch (c.type) {
        case i.OPEN_ADD_MORE_FRIENDS_SHEET:
        case g.OPEN_TAB:
            if (c.type === g.OPEN_TAB && c.entryPoint !== "compose_link" && c.entryPoint !== "jewel_new_message")
                return a;
            var d = a.mercury.tabContents.get(c.tabID);
            d && b("Bootloader").loadModules(["MessengerSecondarySearchFunnelLogger", "MessengerSecondarySearchFunnelConstants"], function(a, b) {
                var e;
                switch (c.entryPoint) {
                case "compose_link":
                    e = b.ENTRY_SURFACES.SIDEBAR;
                    break;
                case "jewel_new_message":
                    e = b.ENTRY_SURFACES.JEWEL;
                    break;
                default:
                    e = b.ENTRY_SURFACES.EXISTING_TAB
                }
                a.startFunnel(b.CLIENTS.WWW, b.SEARCH_SURFACES.OMNIPICKER, e, c.type === i.OPEN_ADD_MORE_FRIENDS_SHEET ? d.id : null, d.loggingID)
            }, "FantaReducersLogging");
            break
        }
        return a
    }
    function c(a, c) {
        switch (c.type) {
        case g.CLOSE_ALL_TABS:
        case g.CLOSE_AND_TAB_NEXT:
        case g.CLOSE_TAB:
        case g.DELETE_TAB:
        case g.OPEN_TAB:
        case g.OPEN_TAB_WITH_INTERSTITIAL_DATA:
        case h.ADD_GROUP_PARTICIPANTS_AS_OPEN_TAB:
            b("requestIdleCallback")(function() {
                var c = a.tabGroup.allowedRaisedTabs
                  , d = a.tabGroup.getRaisedandUnraisedTabs()
                  , e = d.raisedTabs;
                d = d.unraisedTabs;
                var f = e.count()
                  , g = f + d.count();
                b("Bootloader").loadModules(["FantaTabsVisibleTypedLogger"], function(a) {
                    new a().setAllowedRaisedTabs(c).setOpenTabs(g).setVisibleTabs(f).log()
                }, "FantaReducersLogging")
            })
        }
        return a
    }
}
), null);
__d("FantaAvailableStatus", ["AvailableListConstants", "ChatVisibility", "MercuryIDs", "PresenceStatus", "ShortProfiles"], (function(a, b, c, d, e, f) {
    "use strict";
    f.isAvailable = a;
    f.getStatus = c;
    function a(a, c) {
        var d;
        a = this.getStatus(a, c);
        c = b("MercuryIDs").getUserIDFromThreadID(c);
        c && (d = b("ShortProfiles").getNow(c));
        return a === b("AvailableListConstants").ACTIVE && (d === void 0 || d === null || !d.is_messenger_only)
    }
    function c(a, c) {
        var d = b("AvailableListConstants").OFFLINE;
        c = b("MercuryIDs").getUserIDFromThreadID(c);
        if (c)
            d = b("PresenceStatus").get(c);
        else if (a && a.participants) {
            c = a.participants.map(function(a) {
                return b("MercuryIDs").getUserIDFromParticipantID(a)
            });
            d = b("PresenceStatus").getGroup(c)
        }
        b("ChatVisibility").isOnline() || (d = b("AvailableListConstants").OFFLINE);
        return d
    }
}
), null);
__d("FantaTypeJoinableThread", ["immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        admins: [],
        approvalMode: 0,
        associatedObject: null,
        description: null,
        friendsInParticipants: [],
        imageURL: null,
        isViewerSubscribed: !1,
        isWorkpaceChat: !1,
        joinableMode: {
            mode: 0,
            link: ""
        },
        linkHash: "",
        participants: [],
        threadID: null,
        threadFBID: null,
        threadName: null
    };
    c = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        return b
    }(b("immutable").Record(a));
    e.exports = c
}
), null);
__d("FantaTypeSharePreview", ["immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        isLoading: !1,
        params: null,
        type: null,
        uri: null
    };
    c = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        return b
    }(b("immutable").Record(a));
    e.exports = c
}
), null);
__d("FantaTypeComposer", ["FantaTypeFileUploader", "FantaTypeSharePreview", "immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = 0;
    a = {
        fileUploader: new (b("FantaTypeFileUploader"))(),
        sharePreview: new (b("FantaTypeSharePreview"))(),
        text: "",
        replyingToMessage: null,
        version: g
    };
    c = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.call(this, {
                version: ++g
            }) || this
        }
        return b
    }(b("immutable").Record(a));
    e.exports = c
}
), null);
__d("FantaTypeTabContents", ["ChatPrivacyActionController", "FantaGetMessageActions", "FantaTypeComposer", "MercuryIDs", "emptyFunction", "immutable", "setImmediate"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        composer: new (b("FantaTypeComposer"))(),
        highlightNewMessage: !1,
        id: "",
        isMontageOpen: !1,
        isMultiCompany: null,
        isNewMessageTab: !1,
        isScrolledToBottom: !0,
        joinableInterstitialData: null,
        jumpToMessage: null,
        loggingID: null,
        membershipParticipants: null,
        nullStateCTA: null,
        openSheet: null,
        pageIndicator: null,
        pageIndicatorDescription: null,
        participants: null,
        privacyController: null,
        showContextBanner: !1,
        showUnseenMessages: b("emptyFunction"),
        signatureID: null,
        thread: null,
        threadHref: null,
        threadPreviewID: null,
        threadPreviewRecipients: null,
        timezoneInfo: null,
        typeahead: null,
        uri: null,
        workAvailabilityHumanReadable: null,
        workAvailabilityStatus: null,
        newGroupChatName: null
    };
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(c) {
            var d, e = b("MercuryIDs").getUserIDFromThreadID(c.id);
            e && (d = new (b("ChatPrivacyActionController"))(e,function(a) {
                b("setImmediate")(function() {
                    b("FantaGetMessageActions").onPrivacyStateChange(c.id, a)
                })
            }
            ));
            return a.call(this, babelHelpers["extends"]({
                privacyController: d
            }, c)) || this
        }
        return c
    }(b("immutable").Record(a));
    e.exports = c
}
), null);
__d("FantaReducersMercury", ["Arbiter", "AsyncSignal", "AvailableList", "AvailableListConstants", "Bootloader", "FantaAvailableStatus", "FantaGetMessageActions", "FantaMessageActions", "FantaTabActions", "FantaTabSheetActions", "FantaTypeJoinableThread", "FantaTypeSharePreview", "FantaTypeTabContents", "MercuryIDs", "MercuryThreadIDMap", "TimeSlice", "WebMessengerThreadPermalinks", "getPageIDFromThreadID", "ifRequired", "setImmediate"], (function(a, b, c, d, e, f) {
    "use strict";
    f.openTab = a;
    f.receivedNewMessage = c;
    f.setPageIndicatorDescription = d;
    f.clearPageIndicatorDescription = e;
    f.replaceTab = o;
    f.addParticipants = p;
    f.clearParticipants = q;
    f.focusTab = t;
    f.closeTab = u;
    f.deleteTab = v;
    f.closeAllTabs = x;
    f.focusTabEvents = y;
    f.unminimizeTab = A;
    f.loadFromData = B;
    f.loadUri = D;
    f.setUri = E;
    var g = b("MercuryThreadIDMap").get()
      , h = b("FantaMessageActions").Types
      , i = b("FantaTabActions").Types
      , j = b("FantaGetMessageActions").Types
      , k = 1;
    function l() {
        return Math.floor(Math.random() * 2147483648).toString(16)
    }
    function a(a, c) {
        switch (c.type) {
        case i.OPEN_TAB:
        case i.OPEN_TAB_WITH_INTERSTITIAL_DATA:
        case h.ADD_GROUP_PARTICIPANTS_AS_OPEN_TAB:
            var d = c.tabID
              , e = c.defaultText
              , f = c.defaultPreview;
            b("ifRequired")("FantaTabsReactApp", function(c) {
                !b("MercuryIDs").isValidThreadID(d) ? (a = a.deleteIn(["tabGroup", "tabs", d]),
                s(d)) : z(a, d)
            }, function() {
                return a = m(a, c.tabID)
            });
            a = n(a, d);
            var g = l()
              , j = a.mercury.tabContents.get(d);
            j = j.merge({
                isNewMessageTab: !!c.isNewMessageTab,
                loggingID: k++,
                signatureID: g
            });
            a = a.setIn(["mercury", "tabContents", d], j);
            new (b("AsyncSignal"))("/ajax/chat/opentab_tracking.php",{
                threadID: d,
                userID: b("MercuryIDs").getUserIDFromThreadID(d),
                signatureID: g
            }).send();
            if (c.interstitialData) {
                g = new (b("FantaTypeJoinableThread"))(c.interstitialData);
                j = j.merge({
                    joinableInterstitialData: g
                });
                a = a.setIn(["mercury", "tabContents", d], j)
            }
            e && (a = a.setIn(["mercury", "tabContents", d, "composer", "text"], e));
            f && (a = a.setIn(["mercury", "tabContents", d, "composer", "sharePreview"], new (b("FantaTypeSharePreview"))({
                params: null,
                type: null,
                uri: f
            })));
            b("Arbiter").inform("jewel/hide");
            return a
        }
        return a
    }
    function m(a, c) {
        b("ifRequired")("FantaTabsSlimApp", function(d) {
            !b("MercuryIDs").isValidThreadID(c) ? (a = a.deleteIn(["tabGroup", "tabs", c]),
            s(c)) : z(a, c)
        }, function() {
            z(a, c)
        });
        return a
    }
    function c(a, b) {
        switch (b.type) {
        case h.RECEIVED_NEW_MESSAGE:
            a = n(a, b.tabID)
        }
        return a
    }
    function n(a, c) {
        var d = a.mercury.tabContents.get(c);
        if (!d) {
            var e = b("getPageIDFromThreadID")(c);
            e && b("Bootloader").loadModules(["PagesMercuryChatTabIndicatorHandler"], function(a) {
                var d = b("AvailableListConstants").OFFLINE
                  , f = new a(e,d,function(a) {
                    b("setImmediate")(function() {
                        return b("FantaTabActions").setPageIndicatorDescription(c, a)
                    })
                }
                ,function() {
                    b("setImmediate")(function() {
                        return b("FantaTabActions").clearPageIndicatorDescription(c)
                    })
                }
                );
                b("setImmediate")(function() {
                    b("FantaTabSheetActions").onIsPageTab(c, f)
                });
                f.checkResponsiveness()
            }, "FantaReducersMercury");
            return a.setIn(["mercury", "tabContents", c], new (b("FantaTypeTabContents"))({
                id: c
            }))
        }
        return a
    }
    function d(a, b) {
        switch (b.type) {
        case i.SET_PAGE_INDICATOR_DESCRIPTION:
            var c = b.tabID;
            b = b.description;
            var d = a.mercury.tabContents.get(c);
            if (!d)
                return a;
            d = d.merge({
                pageIndicatorDescription: b || ""
            });
            a = a.setIn(["mercury", "tabContents", c], d)
        }
        return a
    }
    function e(a, b) {
        switch (b.type) {
        case i.CLEAR_PAGE_INDICATOR_DESCRIPTION:
            b = b.tabID;
            var c = a.mercury.tabContents.get(b);
            if (!c)
                return a;
            c = c.merge({
                pageIndicatorDescription: ""
            });
            a = a.setIn(["mercury", "tabContents", b], c)
        }
        return a
    }
    function o(a, b) {
        switch (b.type) {
        case i.REPLACE_TAB:
        case h.ADD_GROUP_PARTICIPANTS_AS_REPLACE_TAB:
            a = r(a, b.newTabID);
            a = n(a, b.newTabID);
            return a
        }
        return a
    }
    function p(a, b) {
        switch (b.type) {
        case j.ADD_PARTICIPANTS:
            var c = b.tabID;
            b = b.previewTabID;
            var d = a.mercury.tabContents.get(c);
            if (!d)
                return a;
            d = d.merge({
                threadPreviewID: b
            });
            a = a.setIn(["mercury", "tabContents", c], d);
            return a
        }
        return a
    }
    function q(a, c) {
        switch (c.type) {
        case j.CLEAR_PARTICIPANTS:
            c = c.tabID;
            var d = a.mercury.tabContents.get(c)
              , e = d ? d.loggingID : null;
            d = d ? d.isNewMessageTab : !1;
            a = a.setIn(["mercury", "tabContents", c], new (b("FantaTypeTabContents"))({
                id: c,
                isNewMessageTab: d,
                loggingID: e
            }))
        }
        return a
    }
    function r(a, c) {
        b("ifRequired")("FantaTabsReactApp", function(d) {
            b("MercuryIDs").isValidThreadID(c) || (a = a.deleteIn(["tabGroup", "tabs", c]),
            s(c))
        }, function() {
            b("ifRequired")("FantaTabsSlimApp", function(d) {
                b("MercuryIDs").isValidThreadID(c) || (a = a.deleteIn(["tabGroup", "tabs", c]),
                s(c))
            })
        });
        return a
    }
    function s(a) {
        g.getClientIDFromServerID(a, function(a) {
            return b("setImmediate")(function() {
                b("MercuryIDs").isValidThreadID(a) && b("FantaTabActions").openTab(a)
            })
        })
    }
    function t(a, b) {
        switch (b.type) {
        case i.FOCUS_TAB:
            z(a, b.tabID)
        }
        return a
    }
    function u(a, b) {
        switch (b.type) {
        case i.CLOSE_TAB:
            b = b.tabID;
            a = w(a, b)
        }
        return a
    }
    function v(a, b) {
        switch (b.type) {
        case i.DELETE_TAB:
            b = b.tabID;
            a = w(a, b);
            a = a.deleteIn(["mercury", "tabContents", b])
        }
        return a
    }
    function w(a, c) {
        b("ifRequired")("MessengerVideoAutoplayActions", function(a) {
            a.deleteThread(c)
        });
        return a
    }
    function x(a, c) {
        switch (c.type) {
        case i.CLOSE_ALL_TABS:
            b("ifRequired")("MessengerVideoAutoplayActions", function(a) {
                a.deleteAllThreads()
            });
            return a
        }
        return a
    }
    function y(a, b) {
        switch (b.type) {
        case i.FOCUS_NEXT_TAB:
        case i.FOCUS_PREVIOUS_TAB:
        case i.CLOSE_AND_TAB_NEXT:
            b = a.tabGroup.focusedTabID;
            b && z(a, b)
        }
        return a
    }
    function z(a, c) {
        var d = b("MercuryIDs").getUserIDFromThreadID(c);
        if (d) {
            var e = function() {
                b("AvailableList").updateForID(d)
            };
            b("TimeSlice").guard(e, "superfluous request to first open DD", {
                propagationType: b("TimeSlice").PropagationType.ORPHAN
            })()
        }
        e = a.mercury.tabContents.get(c);
        if (e) {
            a = e.thread;
            e = e.pageIndicator;
            e && e.notifyPageOnlineStatusChanged(b("FantaAvailableStatus").getStatus(a, c))
        }
    }
    function A(a, b) {
        switch (b.type) {
        case i.UNMINIMIZE_TAB:
            z(a, b.tabID)
        }
        return a
    }
    function B(a, b) {
        switch (b.type) {
        case i.LOAD_FROM_DATA:
            for (var b = a.tabGroup.tabs.keys(), c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                var e;
                if (c) {
                    if (d >= b.length)
                        break;
                    e = b[d++]
                } else {
                    d = b.next();
                    if (d.done)
                        break;
                    e = d.value
                }
                e = e;
                a = n(a, e)
            }
        }
        return a
    }
    function C(a, c) {
        a = a.mercury.tabContents.get(c);
        (!a || !a.uri) && b("WebMessengerThreadPermalinks").getThreadURI(c, function(a) {
            b("setImmediate")(function() {
                return b("FantaTabActions").setPermanentUri(c, a)
            })
        })
    }
    function D(a, b) {
        switch (b.type) {
        case i.OPEN_TAB:
        case i.OPEN_TAB_WITH_INTERSTITIAL_DATA:
        case h.RECEIVED_NEW_MESSAGE:
        case h.ADD_GROUP_PARTICIPANTS_AS_OPEN_TAB:
            C(a, b.tabID);
            break;
        case i.LOAD_FROM_DATA:
            for (var b = a.tabGroup.tabs.keys(), c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                var e;
                if (c) {
                    if (d >= b.length)
                        break;
                    e = b[d++]
                } else {
                    d = b.next();
                    if (d.done)
                        break;
                    e = d.value
                }
                e = e;
                C(n(a, e), e)
            }
        }
        return a
    }
    function E(a, b) {
        switch (b.type) {
        case i.SET_PERMANENT_URI:
            var c = b.tabID;
            b = b.uri;
            var d = a.mercury.tabContents.get(c);
            if (!d)
                return a;
            d = d.merge({
                uri: b
            });
            a = a.setIn(["mercury", "tabContents", c], d)
        }
        return a
    }
}
), null);
__d("MercuryBrowserAlerts", ["ArbiterMixin", "Bootloader", "ChatActivity", "ChatConfig", "ChatOptions", "ChatTitleBarBlinker", "CurrentUser", "Event", "MercuryIDs", "MercuryIgnoredBlockedParticipants.bs", "MercuryThreadInfo", "MercuryViewer", "MessagingTag", "MessengerState.bs", "Sound", "UserActivity"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = 3
      , h = 6e5
      , i = new Map()
      , j = null;
    function k() {
        return !b("UserActivity").isOnTab() && !b("UserActivity").hasBeenInactive()
    }
    function l() {
        i = new Map()
    }
    function m(a) {
        b("ChatOptions").getSetting("sound") && !k() && b("Sound").play([b("ChatConfig").get("sound.notif_ogg_url"), b("ChatConfig").get("sound.notif_mp3_url")], a, !1)
    }
    var n = Object.assign({
        init: function() {
            var a = this;
            b("Event").listen(window, "focus", function() {
                l(),
                window.clearInterval(j)
            });
            b("Event").listen(window, "blur", function() {
                j = window.setInterval(l, h)
            });
            b("CurrentUser").isWorkUser() && (this._availabilityStatusStore = null,
            b("Bootloader").loadModules(["WorkChatAvailabilityStatusStore"], function(b) {
                a._availabilityStatusStore = b
            }, "MercuryBrowserAlerts"))
        },
        messageReceived: function(a) {
            var c = this._availabilityStatusStore && this._availabilityStatusStore.getIsDoNotDisturb(b("MercuryIDs").getUserIDFromParticipantID(b("MercuryViewer").getID()));
            if (c || a.author && b("MercuryViewer").isViewer(a.author) || !a.is_unread || a.folder != b("MessagingTag").INBOX && a.folder != b("MessagingTag").ARCHIVED)
                return;
            var d = a.thread_id
              , e = b("ChatActivity").isActive();
            if (e) {
                var f = !1;
                n.inform("before-alert", {
                    threadID: d,
                    cancelAlert: function() {
                        f = !0
                    }
                })
            }
            b("MessengerState.bs").getThreadMeta(b("CurrentUser").getID(), d, function(c) {
                var h = b("MercuryThreadInfo").isMuted(c)
                  , j = b("MercuryIDs").getUserIDFromParticipantID(b("MercuryViewer").getID());
                if (h)
                    if (!b("MercuryThreadInfo").areMentionsMuted(c)) {
                        if (!a.profile_ranges || !a.profile_ranges.some || !a.profile_ranges.some(function(a) {
                            return a.id === j
                        }))
                            return
                    } else
                        return;
                var k = b("CurrentUser").getID();
                b("MessengerState.bs").compute(k, function(h) {
                    h = h.blocked_ids;
                    if (b("MercuryIgnoredBlockedParticipants.bs").isPresentInGroupThread(k, h, c))
                        return;
                    h = a.timestamp;
                    if (e)
                        f || m(h);
                    else {
                        b("ChatTitleBarBlinker").blink(d, h);
                        var j = i.get(d) || 0;
                        j < g && (i.set(d, j + 1),
                        m(h))
                    }
                    b("ChatTitleBarBlinker").blinkingElsewhere()
                })
            })
        }
    }, b("ArbiterMixin"));
    a = n;
    e.exports = a
}
), null);
__d("FantaReducersMessages", ["CurrentUser", "FantaGetMessageActions", "FantaMessageActions", "FantaTabActions", "FantaTypeComposer", "ImmutableObject", "MercuryBrowserAlerts", "MessengerParticipants.bs"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("FantaMessageActions").Types
      , h = b("FantaTabActions").Types
      , i = b("FantaGetMessageActions").Types;
    function a(a, c) {
        switch (c.type) {
        case g.RECEIVED_NEW_MESSAGE:
            c = c.message;
            b("MercuryBrowserAlerts").messageReceived(c);
            return a
        }
        return a
    }
    function c(a, b) {
        switch (b.type) {
        case g.COMPOSER_TEXT_UPDATE:
            var c = b.composer
              , d = b.message;
            b = b.threadID;
            var e = a.mercury.tabContents.get(b);
            return !e || e && e.composer.version !== c.version ? a : a.mergeIn(["mercury", "tabContents", b, "composer"], {
                text: d
            })
        }
        return a
    }
    function d(a, c) {
        switch (c.type) {
        case g.REPLY_TO_MESSAGE:
            var d = c.message;
            c = c.threadID;
            var e = a.mercury.tabContents.get(c);
            return !e ? a : a.mergeIn(["mercury", "tabContents", c, "composer"], {
                replyingToMessage: new (b("ImmutableObject"))(babelHelpers["extends"]({}, d))
            })
        }
        return a
    }
    function f(a, b) {
        switch (b.type) {
        case g.CANCEL_REPLY_TO_MESSAGE:
            b = b.threadID;
            var c = a.mercury.tabContents.get(b);
            if (!c)
                return a;
            c = null;
            return a.mergeIn(["mercury", "tabContents", b, "composer"], {
                replyingToMessage: c
            })
        }
        return a
    }
    function j(a, c) {
        switch (c.type) {
        case h.CLOSE_TAB:
        case h.CLOSE_AND_TAB_NEXT:
            return !a.mercury.tabContents.get(c.tabID) ? a : a.setIn(["mercury", "tabContents", c.tabID, "composer"], new (b("FantaTypeComposer"))())
        }
        return a
    }
    function k(a, c) {
        switch (c.type) {
        case h.CLOSE_ALL_TABS:
            c = a.mercury.tabContents;
            c.forEach(function(c) {
                c = c.id;
                a = a.setIn(["mercury", "tabContents", c, "composer"], new (b("FantaTypeComposer"))())
            });
            return a
        }
        return a
    }
    function l(a, b) {
        switch (b.type) {
        case h.SCROLL_BOTTOM_CHANGED:
            var c = b.tabID
              , d = b.isScrolledToBottom;
            b = b.showUnseenMessages;
            var e = a.mercury.tabContents.get(c);
            if (!e)
                return a;
            e = e.merge({
                isScrolledToBottom: d,
                showUnseenMessages: b
            });
            a = a.setIn(["mercury", "tabContents", c], e)
        }
        return a
    }
    function m(a, b) {
        switch (b.type) {
        case h.JUMP_TO_MESSAGE:
            var c = b.tabID;
            b = b.mid;
            var d = a.mercury.tabContents.get(c);
            if (!d)
                return a;
            d = d.merge({
                jumpToMessage: b
            });
            a = a.setIn(["mercury", "tabContents", c], d)
        }
        return a
    }
    function n(a, b) {
        switch (b.type) {
        case h.WIPE_JUMP_TO_MESSAGE:
            b = b.tabID;
            var c = a.mercury.tabContents.get(b);
            if (!c)
                return a;
            c = c.merge({
                jumpToMessage: null
            });
            a = a.setIn(["mercury", "tabContents", b], c)
        }
        return a
    }
    function o(a, b) {
        switch (b.type) {
        case h.SHOW_UNSEEN_MESSAGES:
            b = b.tabID;
            b = a.mercury.tabContents.get(b);
            b && b.showUnseenMessages()
        }
        return a
    }
    function p(a, c) {
        switch (c.type) {
        case i.ON_GET_THREAD_RESPONSE:
            c = c.thread;
            var d = c.thread_id
              , e = a.mercury.tabContents.get(d);
            if (!e)
                return a;
            var f = null;
            b("CurrentUser").isWorkUser() && c.participants && (f = c.participants.map(b("MessengerParticipants.bs").getNow, b("MessengerParticipants.bs")).find(function(a) {
                return ((a = a) != null ? (a = a.work_foreign_entity_info) != null ? a.type : a : a) === "FOREIGN"
            }) !== void 0);
            e = e.merge({
                thread: c,
                isMultiCompany: f
            });
            a = a.setIn(["mercury", "tabContents", d], e);
            break
        }
        return a
    }
    function q(a, b) {
        switch (b.type) {
        case h.HIGHLIGHT_NEW_MESSAGE:
            return !a.mercury.tabContents.get(b.tabId) ? a : a.setIn(["mercury", "tabContents", b.tabId, "highlightNewMessage"], !0)
        }
        return a
    }
    function r(a, b) {
        switch (b.type) {
        case h.UNHIGHLIGHT_NEW_MESSAGE:
            return !a.mercury.tabContents.get(b.tabId) ? a : a.setIn(["mercury", "tabContents", b.tabId, "highlightNewMessage"], !1)
        }
        return a
    }
    function s(a, b) {
        switch (b.type) {
        case g.UPDATE_USER_INPUT_REQUESTED:
            return a.setIn(["mercury", "userInputRequest"], {
                isUserInputRequested: b.isUserInputRequested,
                requestNumResults: b.requestNumResults,
                requestType: b.requestType
            })
        }
        return a
    }
    e.exports = {
        cancelReplyToMessage: f,
        closeAllTabs: k,
        closeTab: j,
        composerTextUpdate: c,
        highlightNewMessage: q,
        jumpToMessage: m,
        onGetThreadResponse: p,
        receivedNewMessage: a,
        replyToMessage: d,
        scrollBottomChanged: l,
        showUnseenMessages: o,
        unhighlightNewMessage: r,
        updateUserInputRequested: s,
        wipeJumpToMessage: n
    }
}
), null);
__d("FantaReducersPreLogging", ["Bootloader", "CurrentUser", "FantaMessageActions", "FantaTabActions", "FantaTabSheetActions", "MessengerSecondarySearchFunnelConstants", "MessengerState.bs", "gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    f.logSearchEvents = a;
    var g = b("FantaTabActions").Types
      , h = b("FantaTabSheetActions").Types
      , i = b("FantaMessageActions").Types;
    c = b("MessengerSecondarySearchFunnelConstants").END_ACTIONS;
    var j = c.ABANDON
      , k = c.SEND
      , l = b("MessengerSecondarySearchFunnelConstants").END_REASONS.ACTION;
    function a(a, c) {
        if (!b("gkx")("678592"))
            return a;
        switch (c.type) {
        case g.CLOSE_TAB:
        case g.CLOSE_AND_TAB_NEXT:
        case h.CLOSE_ADD_FRIENDS_SHEET:
        case h.CLOSE_ADD_MORE_FRIENDS_SHEET:
            a = m(a, c.tabID, l, j);
            break;
        case g.CLOSE_ALL_TABS:
            a.mercury.tabContents.forEach(function(b) {
                a = m(a, b.id, l, j)
            });
            break;
        case i.ADD_GROUP_PARTICIPANTS:
            a = m(a, c.threadID, l, k, !0);
            break;
        case i.SEND_HOT_LIKE:
        case i.SEND_MESSAGE:
        case i.SEND_PHOTO:
        case i.SEND_STICKER:
            a = m(a, c.threadID, l, k);
            break
        }
        return a
    }
    function m(a, c, d, e, f) {
        if (!b("gkx")("678592"))
            return a;
        var g = a.mercury.tabContents.get(c)
          , h = g ? g.loggingID : null
          , i = g ? g.threadPreviewID : null;
        h && b("Bootloader").loadModules(["MessengerSecondarySearchFunnelLogger"], function(j) {
            a = a.setIn(["mercury", "tabContents", c], g.merge({
                loggingID: null
            }));
            if (e === k && (f === null || f === void 0)) {
                var l = b("MessengerState.bs").getCurrentlyLoadedMessages(b("CurrentUser").getID(), g.id);
                l = g && l.length === 0
            } else
                l = f;
            j.endFunnel(d, e, h, i ? i.split(":")[1] : c, l)
        }, "FantaReducersPreLogging");
        return a
    }
}
), null);
__d("FantaTypeTab", ["immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        focusCounter: 0,
        id: "",
        isHovered: !1,
        isMinimized: !1,
        showWarningForThreadWithBlockees: !1,
        openCounter: 0,
        entryPoint: "unknown"
    };
    c = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        return b
    }(b("immutable").Record(a));
    e.exports = c
}
), null);
__d("FantaTypeTabGroup", ["FantaConst", "immutable", "qex"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("immutable").OrderedMap({});
    a = b("qex")._("830597") || !1;
    c = {
        allowedRaisedTabs: a ? 1 : b("FantaConst").DEFAULT_ALLOWED_RAISED_TABS,
        focusedTabID: null,
        tabs: b("immutable").Map({}),
        updatedTime: 0
    };
    var h = function(a) {
        return a.openCounter * -1
    }
      , i = function(a) {
        return a.focusCounter * -1
    };
    d = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        var c = b.prototype;
        c.getRaisedandUnraisedTabs = function() {
            if (this.tabs.size === 0 || this.allowedRaisedTabs === 0)
                return {
                    raisedTabs: g,
                    unraisedTabs: g
                };
            if (this.tabs.size === 1 && this.allowedRaisedTabs >= 1)
                return {
                    raisedTabs: this.tabs.toOrderedMap(),
                    unraisedTabs: g
                };
            var a = this.tabs.sortBy(i)
              , b = a.slice(this.allowedRaisedTabs);
            a = a.take(this.allowedRaisedTabs).sortBy(h);
            return {
                raisedTabs: a,
                unraisedTabs: b
            }
        }
        ;
        return b
    }(b("immutable").Record(c));
    e.exports = d
}
), null);
__d("isWebMessengerURI", [], (function(a, b, c, d, e, f) {
    function a(a) {
        return /^(\/messages)/.test(a.getPath())
    }
    e.exports = a
}
), null);
__d("FantaReducersTabs", ["Bootloader", "CurrentUser", "FantaConst", "FantaGetMessageActions", "FantaMessageActions", "FantaTabActions", "FantaTypeTab", "FantaTypeTabGroup", "FBLogger", "LogHistory", "MercuryIDs", "MercuryIgnoredBlockedParticipants.bs", "MessengerState.bs", "PinnedConversationNubsConfig", "TimeSlice", "URI", "MessengerWebStgTypedLoggerLite", "isWebMessengerURI", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    "use strict";
    f.openTab = a;
    f.replaceTab = c;
    f.minimizeTab = d;
    f.unminimizeTab = e;
    f.focusTab = r;
    f.blurTab = s;
    f.receivedNewMessage = t;
    f.onThreadPayloadReceived = w;
    f.closeGroupEntranceWarningDialog = z;
    f.optInOpenTabWithBlockees = A;
    f.minimizAllTabs = B;
    f.closeTab = C;
    f.closeAllTabs = E;
    f.closeAndTabNext = F;
    f.hoveredTab = I;
    f.unhoveredTab = J;
    f.setAllowedRaisedTabs = L;
    f.loadFromData = N;
    f.focusNextTab = O;
    f.focusPreviousTab = Q;
    var g, h, i = b("FantaMessageActions").Types, j = b("FantaTabActions").Types, k = b("FantaGetMessageActions").Types, l = "tab_", m = b("LogHistory").getInstance("fanta_tabs"), n = 1, o = 1, p = 1;
    function q(a, c) {
        Array.isArray(a) && a.length > 0 && (a = a[0]);
        try {
            b("MercuryIDs").isLocalThread(c) ? b("MessengerWebStgTypedLoggerLite") && b("MessengerWebStgTypedLoggerLite").log({
                event_name: "open_chat_tab",
                blue_entry_point: a || "unknown"
            }) : b("MessengerWebStgTypedLoggerLite") && b("MessengerWebStgTypedLoggerLite").log({
                event_name: "open_chat_tab",
                blue_entry_point: a || "unknown",
                other_user_fbid: b("MercuryIDs").getUserIDFromThreadID(c),
                thread_fbid: b("MercuryIDs").isGroupChat(c) ? b("MercuryIDs").getThreadFBIDFromThreadID(c) : null
            })
        } catch (d) {
            b("FBLogger")("messenger_web").warn("fail to log openTab event on blue for %s %s ", a, c)
        }
    }
    function a(a, c) {
        switch (c.type) {
        case j.OPEN_TAB:
        case j.OPEN_TAB_WITH_INTERSTITIAL_DATA:
        case i.ADD_GROUP_PARTICIPANTS_AS_OPEN_TAB:
            m.debug(c.type, JSON.stringify({
                id: c.tabID
            }));
            if (o === 1) {
                var d = (g || (g = b("performanceAbsoluteNow")))();
                b("Bootloader").loadModules(["QuickPerformanceLogger", "MessengerWebQuickLogModule"], function(a, b) {
                    a.markerStart(b.FIRSTCHATTABOPEN_WWW, 0, d)
                }, "FantaReducersTabs")
            }
            var e = c.tabID || l + p++
              , f = c.entryPoint;
            Array.isArray(f) && f.length > 0 && (f = f[0]);
            q(f, e);
            return u(a, e, !0, c.entryPoint)
        }
        return a
    }
    function c(a, b) {
        switch (b.type) {
        case j.REPLACE_TAB:
        case i.ADD_GROUP_PARTICIPANTS_AS_REPLACE_TAB:
            var c = b.tabID
              , d = b.newTabID
              , e = a.tabGroup;
            e = e.tabs;
            e = e.get(c);
            m.debug(b.type, JSON.stringify({
                id: c,
                isExisting: !!e,
                newID: d
            }));
            if (e) {
                q("replace_tab", e.id);
                b = e.id === a.tabGroup.focusedTabID;
                a = a.setIn(["tabGroup", "tabs", d], e.merge({
                    id: d
                })).deleteIn(["tabGroup", "tabs", c]);
                return u(a, d, b, "replace_tab")
            }
            q("replace_tab", d);
            return u(a, d, !1, "replace_tab")
        }
        return a
    }
    function d(a, b) {
        switch (b.type) {
        case j.MINIMIZE_TAB:
            return v(a, b.tabID, !0)
        }
        return a
    }
    function e(a, b) {
        switch (b.type) {
        case j.UNMINIMIZE_TAB:
            a = v(a, b.tabID, !1),
            a = y(a, b.tabID, (b = a.mercury.tabContents.get(b.tabID)) == null ? void 0 : b.thread)
        }
        return a
    }
    function r(a, b) {
        switch (b.type) {
        case j.FOCUS_TAB:
            b = b.tabID;
            return G(a, b)
        }
        return a
    }
    function s(a, b) {
        switch (b.type) {
        case j.BLUR_TAB:
            return H(a, b.tabID)
        }
        return a
    }
    function t(a, c) {
        switch (c.type) {
        case i.RECEIVED_NEW_MESSAGE:
            var d = c.tabID
              , e = a.tabGroup.tabs.get(d);
            m.debug(c.type, JSON.stringify({
                id: d,
                isOpen: !!e
            }));
            if (!e) {
                try {
                    e = JSON.parse((c = c == null ? void 0 : (e = c.message) == null ? void 0 : e.platform_xmd) != null ? c : "{}");
                    e = ((c = e) == null ? void 0 : c.trigger) === "messenger_deeplink_ads" ? "click_to_messenger_ad" : "message_received"
                } catch (a) {
                    e = "message_received"
                }
                q(e, d);
                c = a.tabGroup.focusedTabID;
                a = u(a, d, !1, e);
                var f = a.tabGroup.allowedRaisedTabs;
                e = a.tabGroup.getRaisedandUnraisedTabs();
                var g = e.raisedTabs;
                e = e.unraisedTabs;
                var j = g.count()
                  , k = j + e.count();
                b("TimeSlice").guard(function() {
                    b("Bootloader").loadModules(["FantaTabsVisibleTypedLogger", "ChatOpenTabEventLogger"], function(a, b) {
                        new a().setAllowedRaisedTabs(f).setOpenTabs(k).setVisibleTabs(j).log(),
                        b.logAutoOpen("auto_open_on_received_messages", d)
                    }, "FantaReducersTabs")
                }, "name", {
                    propagationType: b("TimeSlice").PropagationType.ORPHAN
                })();
                g = (h || (h = b("URI"))).getNextURI();
                if (b("isWebMessengerURI")(g))
                    return a = v(a, d, !0);
                else if (c)
                    return G(a, c)
            }
        }
        return a
    }
    function u(a, c, d, e) {
        e === void 0 && (e = "unknown");
        var f = a.tabGroup;
        f = f.tabs;
        f = f.get(c);
        !f ? (f = new (b("FantaTypeTab"))({
            id: c,
            focusCounter: n,
            openCounter: o++,
            entryPoint: e
        }),
        a = a.setIn(["tabGroup", "tabs", c], f)) : f.isMinimized && d && (a = v(a, c, !1));
        d && (a = G(a, c));
        if (x(a, c, (e = a.mercury.tabContents.get(c)) == null ? void 0 : e.thread))
            if (d) {
                a = y(a, c, (f = a.mercury.tabContents.get(c)) == null ? void 0 : f.thread)
            } else
                a = v(a, c, !0);
        return a
    }
    function v(a, b, c) {
        var d = a.tabGroup;
        d = d.tabs.get(b);
        d && (a = a.mergeIn(["tabGroup", "tabs", b], {
            isMinimized: c
        }));
        return a
    }
    function w(a, b) {
        var c, d;
        switch (b.type) {
        case k.ON_GET_THREAD_RESPONSE:
        case k.ON_GET_THREAD_PREVIEW_RESPONSE:
            c = b.tabID || ((c = b.thread) == null ? void 0 : c.thread_id);
            ((d = a.mercury.tabContents.get(c)) == null ? void 0 : d.thread) == null && ((d = a.tabGroup.tabs.get(c)) == null ? void 0 : d.isMinimized) === !1 && (a = y(a, c, b.thread))
        }
        return a
    }
    function x(a, c, d) {
        if (d == null || d.is_canonical || a.blockedWarning.optedInThreadsWithBlockees.get(c) == !0)
            return !1;
        var e = b("CurrentUser").getID();
        a = !1;
        b("MessengerState.bs").compute(e, function(c) {
            c = c.blocked_ids;
            a = b("MercuryIgnoredBlockedParticipants.bs").isPresentInGroupThread(e, c, d)
        });
        return a
    }
    function y(a, b, c) {
        x(a, b, c) && a.tabGroup.tabs.get(b) != null && (a = a.mergeIn(["tabGroup", "tabs", b], {
            showWarningForThreadWithBlockees: !0
        }),
        a = v(a, b, !0));
        return a
    }
    function z(a, b) {
        switch (b.type) {
        case j.CLOSE_GROUP_ENTRANCE_WARNING_DIALOG:
            a.tabGroup.tabs.get(b.tabID) != null && (a = a.mergeIn(["tabGroup", "tabs", b.tabID], {
                showWarningForThreadWithBlockees: !1
            }))
        }
        return a
    }
    function A(a, b) {
        switch (b.type) {
        case j.OPT_IN_OPEN_TAB_WITH_BLOCKEES:
            b = b.tabID;
            a = a.mergeIn(["tabGroup", "tabs", b], {
                showWarningForThreadWithBlockees: !1
            });
            a = a.setIn(["blockedWarning", "optedInThreadsWithBlockees", b], !0);
            a = v(a, b, !1);
            a = G(a, b)
        }
        return a
    }
    function B(a, b) {
        switch (b.type) {
        case j.MINIMIZE_ALL_TABS:
            for (var b = a.tabGroup.tabs.keys(), c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                var e;
                if (c) {
                    if (d >= b.length)
                        break;
                    e = b[d++]
                } else {
                    d = b.next();
                    if (d.done)
                        break;
                    e = d.value
                }
                e = e;
                a = v(a, e, !0)
            }
            return a
        }
        return a
    }
    function C(a, b) {
        switch (b.type) {
        case j.CLOSE_TAB:
        case j.DELETE_TAB:
            var c = b.tabID;
            m.debug(b.type, JSON.stringify({
                id: c
            }));
            return D(a, c)
        }
        return a
    }
    function D(a, b) {
        a = H(a, b);
        return a.deleteIn(["tabGroup", "tabs", b]).deleteIn(["mercury", "tabContents", b])
    }
    function E(a, b) {
        switch (b.type) {
        case j.CLOSE_ALL_TABS:
            m.debug(b.type);
            a = H(a, a.tabGroup.focusedTabID);
            return a.setIn(["tabGroup", "tabs"], a.tabGroup.tabs.clear()).setIn(["mercury", "tabContents"], a.mercury.tabContents.clear())
        }
        return a
    }
    function F(a, b) {
        switch (b.type) {
        case j.CLOSE_AND_TAB_NEXT:
            m.debug(b.type, JSON.stringify({
                id: b.tabID
            }));
            a = D(a, b.tabID);
            return P(a)
        }
        return a
    }
    function G(a, b, c) {
        c === void 0 && (c = !1);
        var d = a.tabGroup;
        d = d.tabs.get(b);
        d && (a = a.mergeIn(["tabGroup", "tabs", b], {
            focusCounter: n++
        }));
        d = c ? null : b;
        a = a.mergeIn(["tabGroup"], {
            focusedTabID: d
        });
        return a
    }
    function H(a, b) {
        return a.tabGroup.focusedTabID === b ? a.mergeIn(["tabGroup"], {
            focusedTabID: null
        }) : a
    }
    function I(a, b) {
        switch (b.type) {
        case j.HOVERED_TAB:
            b = b.tabID;
            return K(a, b, !0)
        }
        return a
    }
    function J(a, b) {
        switch (b.type) {
        case j.UNHOVERED_TAB:
            b = b.tabID;
            return K(a, b, !1)
        }
        return a
    }
    function K(a, b, c) {
        var d = a.tabGroup;
        d = d.tabs.get(b);
        d && (a = a.mergeIn(["tabGroup", "tabs", b], {
            isHovered: c
        }));
        return a
    }
    function L(a, c) {
        switch (c.type) {
        case j.SET_ALLOWED_RAISED_TABS:
            var d = c.allowedRaisedTabs
              , e = a.tabGroup.allowedRaisedTabs;
            if (d !== e) {
                m.debug(c.type, JSON.stringify({
                    count: d
                }));
                b("PinnedConversationNubsConfig").chatTabTypingPriority || (d = Math.max(1, d));
                var f = a.tabGroup.tabs.count()
                  , g = f > d ? d : f;
                c = d > e && f > e;
                e = d < e && f > d;
                (c || e) && b("Bootloader").loadModules(["FantaTabsVisibleTypedLogger"], function(a) {
                    new a().setAllowedRaisedTabs(d).setOpenTabs(f).setVisibleTabs(g).log()
                }, "FantaReducersTabs")
            }
            return M(a, d)
        }
        return a
    }
    function M(a, c) {
        c === void 0 && (c = b("FantaConst").DEFAULT_ALLOWED_RAISED_TABS);
        if (c === a.tabGroup.allowedRaisedTabs)
            return a;
        b("PinnedConversationNubsConfig").chatTabTypingPriority || (c = Math.max(1, c));
        return a.mergeIn(["tabGroup"], {
            allowedRaisedTabs: c
        })
    }
    function N(a, c) {
        switch (c.type) {
        case j.LOAD_FROM_DATA:
            var d = a.tabGroup
              , e = c.tabData
              , f = d.updatedTime;
            if (f >= e.updatedTime || e.updatedTime === void 0)
                return a;
            var g = Date.now();
            if (e.updatedTime > g) {
                m.debug(c.type + "_future_date", JSON.stringify({
                    currentTime: g,
                    updatedTime: f,
                    newerTime: e.updatedTime
                }));
                return a
            }
            a = M(a.set("tabGroup", new (b("FantaTypeTabGroup"))()), d.allowedRaisedTabs);
            var h = [];
            e.tabs.sort(function(a, b) {
                return a.openCounter - b.openCounter
            }).forEach(function(b) {
                h.push(b.id),
                q("fb_header_dock:loaded_from_browser_cookie", b.id),
                a = u(a, b.id, !1, ["fb_header_dock:loaded_from_browser_cookie"]),
                b.isMinimized && (a = v(a, b.id, b.isMinimized))
            });
            Array.isArray(e.tabs) && e.tabs.length > 0 && (b("MessengerWebStgTypedLoggerLite") && b("MessengerWebStgTypedLoggerLite").log({
                event_name: "load_tab_from_cookie",
                extra_data: {
                    tabNumber: e.tabs.length
                }
            }));
            e.tabs.sort(function(a, b) {
                return a.focusCounter - b.focusCounter
            }).forEach(function(b) {
                a = G(a, b.id, !0)
            });
            m.debug(c.type, JSON.stringify({
                updatedTime: f,
                newerTime: e.updatedTime,
                opened: h
            }));
            a = e.focusedTabID ? G(a, e.focusedTabID, !0) : H(a)
        }
        return a
    }
    function O(a, b) {
        switch (b.type) {
        case j.FOCUS_NEXT_TAB:
            return P(a)
        }
        return a
    }
    function P(a) {
        var b = a.tabGroup.focusedTabID
          , c = a.tabGroup.getRaisedandUnraisedTabs();
        c = c.raisedTabs;
        c = c.filter(function(a) {
            return !a.isMinimized
        });
        if (c.count() < 2)
            return a;
        var d = c.skipUntil(function(a) {
            return a.id === b
        }).rest();
        if (d.count() === 0)
            return G(a, c.first().id);
        else
            return G(a, d.first().id)
    }
    function Q(a, b) {
        switch (b.type) {
        case j.FOCUS_PREVIOUS_TAB:
            var c = a.tabGroup.focusedTabID;
            b = a.tabGroup.getRaisedandUnraisedTabs();
            b = b.raisedTabs;
            b = b.filter(function(a) {
                return !a.isMinimized
            });
            if (b.count() < 2)
                return a;
            var d = b.reverse().skipUntil(function(a) {
                return a.id === c
            }).rest();
            if (d.count() === 0)
                return G(a, b.last().id);
            else
                return G(a, d.first().id)
        }
        return a
    }
}
), null);
__d("FantaTypeBlockedWarningState", ["immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        optedInThreadsWithBlockees: b("immutable").Map({})
    };
    c = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        return b
    }(b("immutable").Record(a));
    e.exports = c
}
), null);
__d("FantaTypeMercuryState", ["immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        tabContents: b("immutable").Map({}),
        userInputRequest: {}
    };
    c = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        return b
    }(b("immutable").Record(a));
    e.exports = c
}
), null);
__d("FantaTypeAppState", ["FantaTypeBlockedWarningState", "FantaTypeMercuryState", "FantaTypeTabGroup", "immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        tabGroup: new (b("FantaTypeTabGroup"))(),
        mercury: new (b("FantaTypeMercuryState"))(),
        blockedWarning: new (b("FantaTypeBlockedWarningState"))()
    };
    c = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        return b
    }(b("immutable").Record(a));
    e.exports = c
}
), null);
__d("FantaAppStore", ["FantaComposeViewReducers", "FantaDispatcher", "FantaReducersCookie", "FantaReducersDockCalculator", "FantaReducersLogging", "FantaReducersMercury", "FantaReducersMessages", "FantaReducersPreLogging", "FantaReducersTabs", "FantaTypeAppState", "FluxReduceStore"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = [].concat(Object.values(b("FantaReducersPreLogging")), Object.values(b("FantaReducersTabs")), Object.values(b("FantaReducersMercury")), Object.values(b("FantaReducersMessages")), Object.values(b("FantaReducersDockCalculator")), Object.values(b("FantaReducersCookie")), Object.values(b("FantaComposeViewReducers")), Object.values(b("FantaReducersLogging")));
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.getInitialState = function() {
            return new (b("FantaTypeAppState"))()
        }
        ;
        d.ignoreReducer = function(a) {
            var b = Object.values(a);
            g = g.filter(function(a) {
                return !b.find(function(b) {
                    return b === a
                })
            })
        }
        ;
        d.addReducers = function(a) {
            this.ignoreReducer(a),
            g = g.concat(Object.values(a))
        }
        ;
        d.reduce = function(a, b) {
            return g.reduce(function(a, c) {
                return c(a, b)
            }, a)
        }
        ;
        return c
    }(b("FluxReduceStore"));
    a.__moduleID = e.id;
    c = new a(b("FantaDispatcher"));
    d = c;
    e.exports = d
}
), null);
__d("ChatInput.react", ["AbstractMentionsTextEditor.react", "AutocompleteSearchSource", "AutocompleteStrategy", "BootloadedComponent.react", "Bootloader", "CompositeDraftDecorator", "ContentState", "DocumentCompositeMentionsSource", "DocumentMentionsSource", "DraftModifier", "EditorState", "EmojiFormat.bs", "FantaAppStore", "FantaDispatcher", "JSResource", "MercuryIDs", "MercuryThreadIDMap", "MessengerEmojiSpan.react", "MessengerEmoticonSpan.react", "MessengerMentionsEntityDecorator.react", "MessengerMentionSource", "MessengerParticipants.bs", "MessengerUploadFilesUtil.bs", "MessengerUserInputUtils", "prop-types", "React", "ReactDOM", "TypingDetectorController", "cancelAnimationFrame", "clearImmediate", "createCancelableFunction", "createMessengerMentionDraftEntity", "debounce", "emptyFunction", "getDefaultKeyBinding", "getEntityMatcher", "getProfileRangesForContentState", "getThreadTypeNameFromThreadType", "getVisibleValueForContentStateWithMessengerEmoji", "handleBeforeInputForMessengerEmoji", "handleBeforeInputForMessengerEmoticon", "handleSoftNewlineForMessengerEmoticon", "ifRequired", "insertEmoticonIntoEditorState", "insertMessengerEmojiIntoContentState", "isSoftNewlineEvent", "requestAnimationFrame", "replaceMentionedTextInEditorState", "setImmediate", "gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("MercuryThreadIDMap").get()
      , h = b("React");
    a = b("emptyFunction").thatReturnsNull;
    var i = 1
      , j = "handled"
      , k = 8
      , l = "not-handled";
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(c) {
            var d;
            d = a.call(this, c) || this;
            d.$6 = b("createCancelableFunction")(function(a, c) {
                var e = a.viewer
                  , f = a.thread;
                if (!f)
                    return;
                if (!f.participants)
                    return;
                d.$3 = b("MessengerParticipants.bs").getMulti(f.participants, function(a) {
                    d.setState({
                        mentionCreationForContentStateFn: b("createMessengerMentionDraftEntity"),
                        mentionsSource: c(e, f.participants.map(function(b) {
                            return a[b]
                        }).filter(Boolean), f, b("gkx")("678578"), !1)
                    })
                })
            });
            d.$8 = function() {
                var a = d.$11(d.state.editorState.getCurrentContent());
                d.$2 = b("setImmediate")(function() {
                    d.$2 = null;
                    var c = b("EditorState").set(d.state.editorState, {
                        decorator: a
                    });
                    d.setState({
                        editorState: c
                    })
                })
            }
            ;
            d.onChange = function(a) {
                if (a !== d.state.editorState) {
                    d.setState({
                        editorState: a
                    });
                    if (d.getValueFromEditorState(a) !== d.getValueFromEditorState(d.state.editorState)) {
                        d.$9(a, d.props.composer);
                        a = b("gkx")("964442");
                        var c = b("FantaAppStore").getState().mercury.userInputRequest;
                        if (a && c.isUserInputRequested) {
                            a = new (b("AutocompleteSearchSource"))(d.getValueFromEditorState(d.state.editorState),c.requestNumResults,c.requestType);
                            c = new (b("DocumentMentionsSource"))(b("AutocompleteStrategy"),a);
                            a = new (b("DocumentCompositeMentionsSource"))([c]);
                            d.setState({
                                isUserInputAutocomplete: !0,
                                mentionCreationForContentStateFn: b("MessengerUserInputUtils"),
                                mentionsSource: a
                            })
                        }
                    }
                }
            }
            ;
            d.onReturn = function(a, c) {
                if (b("isSoftNewlineEvent")(a)) {
                    var e = b("handleSoftNewlineForMessengerEmoticon");
                    d.setState({
                        editorState: e(c)
                    });
                    return j
                }
                a.persist();
                d.setState({}, function() {
                    b("MessengerUploadFilesUtil.bs").sendAttchments(d.props.fileUploader, d.props.uploadPhotoFn),
                    d.$12() && (d.props.inputKeyDown && d.props.inputKeyDown(a, d.getValue())),
                    b("Bootloader").loadModules(["M4ComposerTypedLogger", "M4ComposerLoggerEvents"], function(a, b) {
                        new a().setEvent(b.KEYBOARD_SEND).setVC(d.props.viewer).log()
                    }, "ChatInput.react")
                });
                return j
            }
            ;
            d.getValue = function() {
                return d.getValueFromEditorState(d.state.editorState)
            }
            ;
            d.$13 = function(a, b) {
                d.props.onBeforeInput && d.props.onBeforeInput();
                var c = d.$14(a, b);
                a = d.$15(a, b);
                return c || a ? j : l
            }
            ;
            d.$17 = function(a) {
                return d.$16(a)
            }
            ;
            d.$18 = function(a, b) {
                return d.$16(b)
            }
            ;
            d.state = {
                editorState: d.$10(d.props.defaultText)
            };
            d.$20 = function() {
                var a = (d.state.addedMentionsCount || 0) + 1;
                d.setState({
                    addedMentionsCount: a
                })
            }
            ;
            d.$22 = function(a, c) {
                a = (d.state.mentionsTriggeredCount || 0) + 1;
                a = {
                    mentionsTriggeredCount: a
                };
                d.state.mentionsTriggerSource || (a.mentionsTriggerSource = c === i ? b("MessengerMentionSource").ATSIGN : b("MessengerMentionSource").TYPEAHEAD);
                d.setState(a)
            }
            ;
            d.$21 = function(a) {
                d.refs.input.isShowingMentionables() || d.props.onEscape && d.props.onEscape(a)
            }
            ;
            d.state.mentionCreationForContentStateFn = b("createMessengerMentionDraftEntity");
            return d
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            var a = this
              , c = b("gkx")("964442");
            c && b("FantaDispatcher").explicitlyRegisterStore(b("FantaAppStore"));
            this.$4 = b("ReactDOM").findDOMNode(this).getBoundingClientRect().height;
            this.props.resizeFn(this.$4);
            this.setState({
                triggeredWord: this.props.triggeredWord
            });
            this.$5();
            b("Bootloader").loadModules(["createMentionsSearchSourceFromParticipants"], function(b) {
                a.$6(a.props, b)
            }, "ChatInput.react");
            b("Bootloader").loadModules(["FantaMessageActions"], b("emptyFunction"), "ChatInput.react");
            c = this.props;
            var d = c.thread
              , e = c.threadID
              , f = b("ReactDOM").findDOMNode(this.refs.input);
            f && g.getServerIDFromClientID(e, function(c) {
                a.$1 = new (b("TypingDetectorController"))(d,b("MercuryIDs").getUserIDFromThreadID(e),f,"mercury-chat",null,c,a.getValue)
            })
        }
        ;
        d.componentWillUnmount = function() {
            this.$2 && b("clearImmediate")(this.$2),
            this.$7 && b("cancelAnimationFrame")(this.$7),
            this.$6.cancel(),
            this.$7 = null,
            this.$1 && this.$1.destroy(),
            this.$3 && b("MessengerParticipants.bs").removeCallback(this.$3)
        }
        ;
        d.UNSAFE_componentWillReceiveProps = function(a) {
            var c = this;
            this.state.triggeredWord !== a.triggeredWord && this.setState({
                triggeredWord: a.triggeredWord
            }, this.$8);
            (!this.props.thread || !a.thread || m(a, this.props)) && b("Bootloader").loadModules(["createMentionsSearchSourceFromParticipants"], function(b) {
                c.$6(a, b)
            }, "ChatInput.react");
            a.composer.version !== this.props.composer.version && this.resetState()
        }
        ;
        d.componentDidUpdate = function() {
            var a = this;
            this.$5();
            this.$7 = b("requestAnimationFrame")(function() {
                if (!a.$7)
                    return;
                a.$7 = null;
                var c = b("ReactDOM").findDOMNode(a).getBoundingClientRect();
                c = c.height;
                a.$4 !== c && a.props.resizeFn(c);
                a.$4 = c
            });
            this.state.isUserInputAutocomplete && !b("FantaAppStore").getState().mercury.userInputRequest.isUserInputRequested && (this.setState({
                isUserInputAutocomplete: !1
            }),
            b("Bootloader").loadModules(["createMentionsSearchSourceFromParticipants"], function(b) {
                a.$6(a.props, b)
            }, "ChatInput.react"))
        }
        ;
        d.$5 = function() {
            var a = this
              , c = this.props.composer
              , d = this.props.onTextChange;
            this.$9 = d ? b("debounce")(function(b) {
                d(a.getValueFromEditorState(b), c, 200)
            }, 200) : b("emptyFunction")
        }
        ;
        d.$10 = function(a) {
            a = b("ContentState").createFromText(a);
            return b("EditorState").createWithContent(a, this.$11(a))
        }
        ;
        d.resetState = function() {
            this.state.typeaheadReporter && (this.state.typeaheadReporter.sessionEnd(),
            this.state.typeaheadReporter.sessionStart()),
            this.setState({
                editorState: b("EditorState").moveFocusToEnd(this.$10("")),
                triggeredWord: null,
                addedMentionsCount: 0,
                mentionsTriggeredCount: 0,
                mentionsTriggerSource: null
            })
        }
        ;
        d.onSend = function(a) {
            var c = this.getMentions();
            if (a && (c && c.length || this.state.addedMentionsCount || this.state.mentionsTriggeredCount || this.state.mentionsTriggerSource)) {
                var d = this.state
                  , e = d.addedMentionsCount
                  , f = d.mentionsTriggeredCount
                  , g = d.mentionsTriggerSource
                  , h = this.props.thread;
                b("Bootloader").loadModules(["MessengerMentionsTypedLogger", "MessengerMentionsLoggerEvents"], function(d, i) {
                    new d().setEvent(i.MENTION).setGroupSize(h && h.participants && h.participants.length).setNumDelivered(c ? c.length : 0).setNumSelects(e).setNumTriggers(f).setThreadid(h && h.thread_id).setThreadType(b("getThreadTypeNameFromThreadType")(h && h.thread_type)).setOfflineThreadid(a.offline_threading_id).updateExtraData({
                        source: g
                    }).log()
                }, "ChatInput.react")
            }
        }
        ;
        d.$11 = function(a) {
            var c = [{
                strategy: b("getEntityMatcher")(function(a) {
                    return a.getType() === "EMOTICON"
                }, a.getEntity),
                component: b("MessengerEmoticonSpan.react")
            }];
            c.push({
                strategy: b("getEntityMatcher")(function(a) {
                    return a.getType() === "EMOJI"
                }, a.getEntity),
                component: b("MessengerEmojiSpan.react")
            });
            c.push({
                strategy: b("getEntityMatcher")(function(a) {
                    return a.getType() === "MENTION"
                }, a.getEntity),
                component: b("MessengerMentionsEntityDecorator.react")
            });
            return new (b("CompositeDraftDecorator"))(c)
        }
        ;
        d.$12 = function() {
            var a = this.getValue()
              , b = this.props.composer.sharePreview;
            return a && a.trim().length > 0 || !!(b && b.params && b.type)
        }
        ;
        d.handleSend = function() {
            var a = this;
            this.setState({}, function() {
                b("MessengerUploadFilesUtil.bs").sendAttchments(a.props.fileUploader, a.props.uploadPhotoFn),
                a.$12() && (a.props.handleSend && a.props.handleSend(a.getValue())),
                b("Bootloader").loadModules(["M4ComposerTypedLogger", "M4ComposerLoggerEvents"], function(b, c) {
                    new b().setEvent(c.CLICK_SEND).setVC(a.props.viewer).log()
                }, "ChatInput.react")
            })
        }
        ;
        d.getValueFromEditorState = function(a) {
            a = a.getCurrentContent();
            return b("getVisibleValueForContentStateWithMessengerEmoji")(a)
        }
        ;
        d.getMentions = function() {
            var a = this.props.thread;
            return b("getProfileRangesForContentState")(this.state.editorState.getCurrentContent(), a ? a.thread_fbid : null)
        }
        ;
        d.focus = function() {
            this.refs.input && this.refs.input.focus && this.refs.input.focus()
        }
        ;
        d.$14 = function(a, c) {
            a = b("handleBeforeInputForMessengerEmoticon")(c, a);
            if (a === c)
                return !1;
            this.setState({
                editorState: a
            });
            return !0
        }
        ;
        d.$15 = function(a, c) {
            a = b("handleBeforeInputForMessengerEmoji")(c, a);
            if (a === c)
                return !1;
            this.setState({
                editorState: a
            });
            return !0
        }
        ;
        d.$16 = function(a) {
            var c = this
              , d = /^image\//
              , e = a.filter(function(a) {
                return d.test(a.type)
            });
            if (e.length) {
                var f = this.props.composer;
                b("ifRequired")("FantaMessageActions", function(a) {
                    a.prepareFilesForSend(c.props.threadID, e, f)
                }, function() {
                    b("Bootloader").loadModules(["FantaMessageActions"], function(a) {
                        a.prepareFilesForSend(c.props.threadID, e, f)
                    }, "ChatInput.react")
                });
                return !0
            }
            return !1
        }
        ;
        d.insertEmoticon = function(a) {
            a = b("insertEmoticonIntoEditorState")(a, this.state.editorState);
            a !== this.state.editorState && this.setState({
                editorState: a
            })
        }
        ;
        d.insertEmoji = function(a) {
            var c = this.state.editorState;
            a = b("insertMessengerEmojiIntoContentState")(b("EmojiFormat.bs").codeArrayToCodeString(a), c.getCurrentContent(), c.getSelection(), c.getCurrentInlineStyle());
            c = b("EditorState").push(c, a, "insert-characters");
            c !== this.state.editorState && this.setState({
                editorState: b("EditorState").forceSelection(c, a.getSelectionAfter())
            })
        }
        ;
        d.appendText = function(a) {
            var c = this.state.editorState
              , d = c.getSelection()
              , e = c.getCurrentContent();
            e = b("DraftModifier").insertText(e, d, a);
            c = b("EditorState").push(c, e, "insert-characters");
            this.setState({
                editorState: c
            })
        }
        ;
        d.render = function() {
            var a = babelHelpers["extends"]({}, this.props, this.$19());
            return h.jsx(b("AbstractMentionsTextEditor.react"), babelHelpers["extends"]({
                ref: "input"
            }, a, {
                editorState: this.state.editorState,
                onChange: this.onChange,
                handleBeforeInput: this.$13,
                handlePastedFiles: this.$17,
                handleDroppedFiles: this.$18,
                handleReturn: this.onReturn,
                spellCheck: !0,
                stripPastedStyles: !0,
                textAlignment: "left",
                tabIndex: 0
            }))
        }
        ;
        d.$19 = function() {
            return {
                autoHighlight: !0,
                handleContentReturn: this.onReturn,
                maxResults: k,
                mentionResultsProps: {
                    typeaheadView: b("BootloadedComponent.react").create(b("JSResource")("ChatMentionsInputTypeaheadView.react").__setRef("ChatInput.react")),
                    typeaheadViewProps: {},
                    position: "above",
                    autoflip: !0
                },
                mentionResultsComponent: b("BootloadedComponent.react").create(b("JSResource")("MentionsLayer.react").__setRef("ChatInput.react")),
                mentionCreationForContentStateFn: this.state.mentionCreationForContentStateFn,
                mentionsSource: this.state.mentionsSource,
                onAddMention: this.$20,
                onEscape: this.$21,
                onShowMentions: this.$22
            }
        }
        ;
        d.addMention = function(a) {
            a = b("replaceMentionedTextInEditorState")(a, this.state.editorState, 0, b("createMessengerMentionDraftEntity"));
            this.state.mentionsTriggerSource || this.setState({
                mentionsTriggerSource: b("MessengerMentionSource").REPLY
            });
            this.onChange(a);
            this.$20()
        }
        ;
        return c
    }(h.Component);
    c.propTypes = {
        composer: (d = b("prop-types")).object.isRequired,
        defaultText: d.string,
        blockStyleFn: d.func,
        fileUploader: d.object,
        inputKeyDown: d.func,
        handleSend: d.func,
        keyBindingFn: d.func,
        onBeforeInput: d.func,
        onBlur: d.func,
        onEscape: d.func,
        onFocus: d.func,
        onTab: d.func,
        resizeFn: d.func,
        thread: d.object,
        threadID: d.string,
        viewer: d.string
    };
    c.defaultProps = {
        blockStyleFn: a,
        keyBindingFn: b("getDefaultKeyBinding")
    };
    function m(a, b) {
        a = a.thread.participants;
        b = b.thread.participants;
        if (!a || !b)
            return !0;
        a = a.filter(Boolean);
        b = b.filter(Boolean);
        return a.length !== b.length
    }
    e.exports = c
}
), null);
__d("M4IconSend.bs", ["React", "M4IconSVG.bs"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a) {
        var c = a.filled;
        a = a.color;
        c = c !== void 0 ? c : !0;
        a = a !== void 0 ? a : "blue";
        return g.jsx(b("M4IconSVG.bs").make, {
            children: c ? g.jsx("path", {
                d: "M11,8.3L2.6,8.8C2.4,8.8,2.3,8.9,2.3,9l-1.2,4.1c-0.2,0.5,0,1.1,0.4,1.5C1.7,14.9,2,15,2.4,15c0.2,0,0.4,0,0.6-0.1l11.2-5.6 C14.8,9,15.1,8.4,15,7.8c-0.1-0.4-0.4-0.8-0.8-1L3,1.1C2.5,0.9,1.9,1,1.5,1.3C1,1.7,0.9,2.3,1.1,2.9L2.3,7c0,0.1,0.2,0.2,0.3,0.2 L11,7.7c0,0,0.3,0,0.3,0.3S11,8.3,11,8.3z",
                fill: a
            }, "filled") : g.jsxs("g", {
                children: [g.jsx("path", {
                    d: "M2.4,1.6l12,6c0.7,0.4,0.7,1.4,0,1.8l-12,6C1.7,15.8,0.8,15,1,14.2l1.7-5.4c0.1-0.2,0.1-0.4,0-0.6L1,2.8 C0.8,2,1.7,1.2,2.4,1.6z",
                    fill: "none",
                    stroke: a,
                    strokeMiterlimit: "10"
                }, "perimeter"), g.jsx("line", {
                    fill: "none",
                    stroke: a,
                    strokeMiterlimit: "10",
                    x1: "2.8",
                    x2: "14.8",
                    y1: "8.5",
                    y2: "8.5"
                }, "center-line")]
            }, "outline")
        })
    }
    c = a;
    d = a;
    f.make = c;
    f.jsComponent = d
}
), null);
__d("MessengerHotLikeChatSVGIcon.react", ["cssVar", "fbt", "CurrentUser", "React", "uniqueID"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React")
      , j = h._("D\u1ea5u hi\u1ec7u gi\u01a1 ng\u00f3n c\u00e1i");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.state = {
                titleId: b("uniqueID")()
            },
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.render = function() {
            var a;
            a = (a = this.props.color) != null ? a : b("CurrentUser").isWorkUser() ? "#373e4c" : "#0084ff";
            var c = this.props.renderSize;
            c = c != null ? {
                height: c.toString(),
                width: c.toString()
            } : void 0;
            return i.jsxs("svg", babelHelpers["extends"]({
                "aria-labelledby": this.state.titleId,
                preserveAspectRatio: "xMinYMax meet",
                version: "1.1",
                viewBox: "0 0 16 16",
                xmlns: "http://www.w3.org/2000/svg"
            }, c, {
                children: [i.jsx("title", {
                    id: this.state.titleId,
                    children: j
                }), i.jsxs("g", {
                    style: {
                        fill: a
                    },
                    children: [i.jsx("path", {
                        d: "M16,9.1c0-0.8-0.3-1.1-0.6-1.3c0.2-0.3,0.3-0.7,0.3-1.2c0-1-0.8-1.7-2.1-1.7h-3.1c0.1-0.5,0.2-1.3,0.2-1.8 c0-1.1-0.3-2.4-1.2-3C9.3,0.1,9,0,8.7,0C8.1,0,7.7,0.2,7.6,0.4C7.5,0.5,7.5,0.6,7.5,0.7L7.6,3c0,0.2,0,0.4-0.1,0.5L5.7,6.6 c0,0-0.1,0.1-0.1,0.1l0,0l0,0L5.3,6.8C5.1,7,5,7.2,5,7.4v6.1c0,0.2,0.1,0.4,0.2,0.5c0.1,0.1,1,1,2,1h5.2c0.9,0,1.4-0.3,1.8-0.9 c0.3-0.5,0.2-1,0.1-1.4c0.5-0.2,0.9-0.5,1.1-1.2c0.1-0.4,0-0.8-0.2-1C15.6,10.3,16,9.9,16,9.1z"
                    }), i.jsx("path", {
                        d: "M3.3,6H0.7C0.3,6,0,6.3,0,6.7v8.5C0,15.7,0.3,16,0.7,16h2.5C3.7,16,4,15.7,4,15.3V6.7C4,6.3,3.7,6,3.3,6z"
                    })]
                })]
            }))
        }
        ;
        return c
    }(i.Component);
    e.exports = a
}
), null);
__d("ReplyingToMessageFallbackReact.bs", ["cx", "fbt", "React", "ReasonReact.bs", "XUICloseButtonReact.bs"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    function a(a) {
        var c = a.onCancelReplyingToMessage;
        a = a.isChatTab;
        return i.jsxs("div", {
            children: [b("ReasonReact.bs").element(void 0, void 0, b("XUICloseButtonReact.bs").make("_67tv", 1, a ? 1 : 2, c, void 0, [])), h._("\u0110ang tr\u1ea3 l\u1eddi tin nh\u1eafn")],
            className: (a ? "_692o" : "") + " _67tu"
        })
    }
    c = a;
    d = a;
    f.make = c;
    f.jsComponent = d
}
), null);
__d("ChatTabComposer.react", ["cssVar", "csx", "cx", "fbt", "Bootloader", "BootloadOnRender.react", "ChatComposerFlyoutButtonBootLoader.react", "ChatConfig", "ChatPhotoUploader.react", "CSS", "CurrentUser", "CustomColorHighlighting.react", "ErrorBoundary.react", "FantaMessageActions", "FantaTabActions", "JSResource", "Keys", "LazyComponent.react", "Link.react", "M4IconSend.bs", "MercuryBootloadOnInteraction.react", "MercuryConfig", "MercuryIDs", "MercuryShareAttachmentRenderLocations", "MessageRequestUtils", "MessengerCustomColorUtils.bs", "MessengerHotLikeButton.react", "MessengerHotLikeChatSVGIcon.react", "MessengerHotLikeUtils", "MessengerParticipants.bs", "MessengerQuickCamOrigins", "P2PPaymentConfig", "P2PSendMoneyContainerBootloader.react", "React", "ReasonBootloadOnRender.react", "ReasonResource", "ReplyingToMessageFallbackReact.bs", "StickersActions", "TooltipData", "URI", "WorkChatExtensionAvailabilityFetcher", "WorkFileUploadsGating", "XUISpinner.react", "clearImmediate", "convertMIGColorToFIGColor", "emptyFunction", "getPageIDFromThreadID", "gkx", "isWebGLEnabled", "joinClasses", "lazyLoadComponent", "promiseDone", "qex", "requireCond", "setImmediate", "cr:1434076"], (function(a, b, c, d, e, f, g, h, i, j) {
    "use strict";
    var k, l = b("React"), m = b("lazyLoadComponent")(b("JSResource")("M4FantaUnconnectedThreadInfoTextReact").__setRef("ChatTabComposer.react")), n = 77, o = 9, p = 350, q = "#BEC3C9";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.state = {
                inputHeight: 0,
                p2pPaymentConfig: b("P2PPaymentConfig").config,
                stickerFlyoutShown: !1,
                hasWorkChatExtension: !1
            },
            d.$2 = null,
            d.$3 = null,
            d.$4 = null,
            d.$14 = function() {
                b("setImmediate")(function() {
                    return b("FantaMessageActions").cancelReplyToMessage(d.props.threadID || "")
                })
            }
            ,
            d.$12 = function(a, c) {
                a.keyCode === b("Keys").RETURN && (d.refs.emojiButton && d.refs.emojiButton.hideFlyout()),
                d.props.inputKeyDown && d.props.inputKeyDown(a, c)
            }
            ,
            d.$6 = function(a) {
                a = a.target;
                a instanceof Element && (b("CSS").matchesSelector(a, "._1d4_") || b("CSS").matchesSelector(a, "._552h") || b("CSS").matchesSelector(a, "._552n")) && (d.$4 && d.$4.focus())
            }
            ,
            d.$13 = function(a) {
                d.state.stickerFlyoutShown && b("StickersActions").hideStickerFlyout(),
                d.props.onEscape && d.props.onEscape(a)
            }
            ,
            d.$36 = function(a, c) {
                a.platformFBID.toString() !== b("MercuryConfig").MessengerAppID ? d.uploadURL({
                    attribution_app_id: a.platformFBID,
                    errorDialogParams: {
                        body: j._("\u0110\u00e3 x\u1ea3y ra l\u1ed7i khi g\u1eedi t\u1ec7p GIF n\u00e0y. H\u00e3y ch\u1ecdn t\u1ec7p kh\u00e1c v\u00e0 th\u1eed l\u1ea1i."),
                        title: j._("Kh\u00f4ng th\u1ec3 g\u1eedi t\u1ec7p GIF")
                    },
                    external_image_url: a.source.url,
                    preview_url: a.media.preview ? a.media.preview.url : a.media.thumbnail.url,
                    source: a.source
                }) : d.props.stickerButtonProps && d.props.stickerButtonProps.onStickerSelect && d.props.stickerButtonProps.onStickerSelect(a.resultID.toString)
            }
            ,
            d.$34 = function(a) {
                var c = d.$28();
                if (!c)
                    return;
                b("Bootloader").loadModules(["BrowserExtensionsDialog"], function(d) {
                    d.show(new (k || (k = b("URI")))(a.getURI()), a.getUniqueID(), c, b("CurrentUser").getID())
                }, "ChatTabComposer.react")
            }
            ,
            d.$37 = function(a) {
                d.$4 && d.$4.insertEmoji && d.$4.insertEmoji(a)
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.componentDidUpdate = function(a) {
            a.composer.replyingToMessage !== this.props.composer.replyingToMessage && (this.$4 && this.$4.focus())
        }
        ;
        d.render = function() {
            var a = b("gkx")("678580");
            a = this.props.disableInput ? null : l.jsx("ul", {
                className: "_552n" + (a ? " _22v_" : "") + (a ? " _6jv5" : "") + (this.props.isFocused ? " _6wm5" : "") + " _6jv6",
                children: this.$5()
            });
            var c = this.props.composer.get("replyingToMessage");
            return l.jsxs("div", {
                className: "_1d4_",
                onClick: this.$6,
                role: "presentation",
                children: [this.props.thread && b("MessageRequestUtils").shouldShowUnconnectedThreadInfoText(this.props.thread) ? this.$7() : null, this.$8(c), this.$9(), a]
            })
        }
        ;
        d.componentWillUnmount = function() {
            this.$1 && b("clearImmediate")(this.$1)
        }
        ;
        d.componentDidMount = function() {
            var a = this
              , c = b("gkx")("678581");
            b("CurrentUser").isWorkUser() && c && b("promiseDone")(b("WorkChatExtensionAvailabilityFetcher").checkHasChatExtension(), function(b) {
                return a.setState({
                    hasWorkChatExtension: b
                })
            })
        }
        ;
        d.onSend = function(a) {
            this.$4 && this.$4.onSend && this.$4.onSend(a)
        }
        ;
        d.uploadURL = function(a) {
            var b = this.$2 || this.$3;
            if (!b)
                return;
            b.uploadURL(a)
        }
        ;
        d.isUploading = function() {
            return !!(this.$2 && this.$2.isUploading() || this.$3 && this.$3.isUploading())
        }
        ;
        d.getInput = function() {
            return this.$4
        }
        ;
        d.$9 = function() {
            var a = this
              , c = {};
            this.state.inputHeight && (c.minHeight = this.state.inputHeight);
            var d = null;
            this.props.showStructuredMenu && (d = l.jsx("div", {
                className: "_5c6-",
                children: l.jsx(b("MercuryBootloadOnInteraction.react"), {
                    component: l.jsx(b("LazyComponent.react"), {
                        flyoutAlignment: "left",
                        threadID: this.props.threadID,
                        pageID: this.props.pageID,
                        className: "_5c6_"
                    }),
                    loader: b("JSResource")("MessengerBotMenuButton.react").__setRef("ChatTabComposer.react"),
                    placeholder: l.jsx("span", {
                        className: "_5c6_"
                    })
                })
            }));
            var e = "";
            this.props.disableInput ? e = j._("Tr\u00ecnh bi\u00ean so\u1ea1n b\u1ecb t\u1eaft cho cu\u1ed9c tr\u00f2 chuy\u1ec7n n\u00e0y.") : this.props.thread && !this.props.thread.is_canonical ? e = j._("Nh\u1eadp tin nh\u1eafn, \u0040name...") : e = j._("Nh\u1eadp tin nh\u1eafn...");
            return l.jsxs("div", {
                className: "_552h",
                style: c,
                children: [d, l.jsx("div", {
                    className: this.props.showStructuredMenu ? "_4yzj" : "",
                    children: l.jsxs(b("CustomColorHighlighting.react"), {
                        customColor: this.$10(),
                        children: [this.$11(this.props.threadID), l.jsx(b("cr:1434076"), {
                            composer: this.props.composer,
                            defaultText: this.props.defaultText,
                            fileUploader: this.props.fileUploader,
                            inputKeyDown: this.$12,
                            handleSend: this.props.handleSend,
                            onBeforeInput: function() {
                                return a.refs.emojiButton && a.refs.emojiButton.hideFlyout()
                            },
                            onBlur: b("emptyFunction"),
                            onEscape: this.$13,
                            onFocus: this.props.onFocus,
                            onTab: this.props.onTab,
                            readOnly: this.props.disableInput,
                            ref: function(b) {
                                return a.$4 = b
                            },
                            resizeFn: function(b) {
                                b = Math.min(b, n),
                                a.setState({
                                    inputHeight: b
                                })
                            },
                            thread: this.props.thread,
                            threadID: this.props.threadID,
                            onTextChange: this.props.onTextChange,
                            uploadPhotoFn: function(b) {
                                a.$3 && a.$3.uploadFiles([].concat(b))
                            },
                            placeholder: e,
                            viewer: this.props.viewer
                        })]
                    })
                })]
            })
        }
        ;
        d.$7 = function() {
            var a = this.props.thread;
            if (!a)
                return null;
            var c = a.folder
              , d = a.thread_id;
            a = a.other_user_fbid;
            a = b("MessengerParticipants.bs").getNow(b("MercuryIDs").getParticipantIDFromUserID(a));
            return l.jsx(l.Suspense, {
                fallback: l.jsx("div", {}),
                children: l.jsx(m, {
                    folder: c,
                    name: a ? a.short_name : j._("Ng\u01b0\u1eddi d\u00f9ng Facebook").toString(),
                    onDelete: function() {
                        return b("FantaTabActions").closeTab(d)
                    },
                    threadID: d
                })
            })
        }
        ;
        d.$8 = function(a) {
            if (!a)
                return null;
            a = a;
            var c = l.jsx(b("ReplyingToMessageFallbackReact.bs").jsComponent, {
                onCancelReplyingToMessage: this.$14,
                isChatTab: !0
            });
            return l.jsx(b("ErrorBoundary.react"), {
                fallback: function() {
                    return c
                },
                children: l.jsx(b("ReasonBootloadOnRender.react"), {
                    component: l.jsx(b("LazyComponent.react"), {
                        name: this.$15(a),
                        body: a.body,
                        attachments: a.attachments,
                        onCancelReplyingToMessage: this.$14,
                        isChatTab: !0
                    }),
                    loader: b("ReasonResource")(b("JSResource")("ReplyingToMessageReact.bs").__setRef("ChatTabComposer.react")),
                    placeholder: c
                })
            })
        }
        ;
        d.$15 = function(a) {
            a = a.author ? b("MessengerParticipants.bs").getNow(a.author) : null;
            return a && a.short_name
        }
        ;
        d.$11 = function(a) {
            if (!a)
                return null;
            var c = this.props.fileUploader;
            if (!c)
                return null;
            c = c.get("uploadedFiles");
            return c.size == 0 ? null : l.jsx(b("BootloadOnRender.react"), {
                component: l.jsx(b("LazyComponent.react"), {
                    files: c,
                    small: !0,
                    threadID: a,
                    threadCustomColor: this.$10(),
                    onClick: this.$16
                }),
                loader: b("JSResource")("MercuryStageFilePreviewReactComponent").__setRef("ChatTabComposer.react"),
                placeholder: l.jsx(b("XUISpinner.react"), {
                    className: "_2qf"
                })
            })
        }
        ;
        d.$10 = function() {
            var a = this.props.thread;
            return !this.props.isFocused ? q : a && a.footer_color ? b("convertMIGColorToFIGColor")(a.footer_color) : b("MessengerCustomColorUtils.bs").defaultColor()
        }
        ;
        d.$16 = function(a, c) {
            b("FantaMessageActions").cancelFileUpload(a, c)
        }
        ;
        d.$5 = function() {
            var a = this.$17(), c = this.$18(), d = this.$19(), e = this.$20(), f = this.$21(), g = this.$22(), h = this.$23(), i = this.$24(), j = this.$25(), k = this.$26(), l = this.$27(), m;
            b("qex")._("710587") === "frequency" ? m = [e, h, a, d, c, j, f, g, k, i].filter(Boolean).slice(0, o - 1) : m = [a, c, d, e, f, g, h, i, j, k].filter(Boolean).slice(0, o - 1);
            m.push(l);
            return m
        }
        ;
        d.$17 = function() {
            var a = this
              , c = this.props.photoUploaderProps || {};
            return l.jsx("li", {
                className: "_13f-",
                "data-testid": void 0,
                children: l.jsx(b("ChatPhotoUploader.react"), babelHelpers["extends"]({
                    composer: this.props.composer,
                    onMount: function(b) {
                        return a.$3 = b
                    },
                    imagesOnly: !0
                }, c))
            }, "photos")
        }
        ;
        d.$26 = function() {
            if (b("gkx")("994335"))
                return null;
            var a = this.$28();
            return a && this.props.thread && !this.props.thread.is_canonical ? this.$29(a) : null
        }
        ;
        d.$29 = function(a) {
            return l.jsx(b("ChatComposerFlyoutButtonBootLoader.react"), {
                interactionClassName: "_6gd _13f_",
                flyoutProps: {
                    customColor: this.$10(),
                    threadFBID: a
                },
                flyoutAlignment: "left",
                iconClassName: "_6gb _6wm4 _4tjk _6jv7",
                flyoutLoader: b("JSResource")("MessengerGroupPollingCreatePollFlyoutReactComponent").__setRef("ChatTabComposer.react"),
                title: j._("T\u1ea1o cu\u1ed9c th\u0103m d\u00f2 \u00fd ki\u1ebfn"),
                buttonName: "group_poll"
            }, "grouppolling")
        }
        ;
        d.$22 = function() {
            var a = b("gkx")("1498511")
              , c = b("gkx")("678262") && b("isWebGLEnabled")();
            if (b("MercuryIDs").isLocalThread(this.props.threadID))
                return null;
            var d = this.$30();
            return !a && c && d && !this.$31() && !this.props.forGameChat ? this.$32(d) : null
        }
        ;
        d.$32 = function(a) {
            return l.jsx(b("ChatComposerFlyoutButtonBootLoader.react"), {
                interactionClassName: "_6gd _13ga",
                flyoutAlignment: "left",
                iconClassName: "_6gb _6wm4 _4cf0 _6jtp",
                flyoutProps: {
                    threadID: a,
                    customWidth: p
                },
                flyoutLoader: b("JSResource")("MessengerGamesFlyout.react").__setRef("ChatTabComposer.react"),
                title: j._("Ch\u01a1i tr\u00f2 ch\u01a1i"),
                buttonName: "game"
            }, "games")
        }
        ;
        d.$24 = function() {
            return this.$28() && !this.$31() && this.state.hasWorkChatExtension ? this.$33() : null
        }
        ;
        d.$33 = function() {
            return l.jsx(b("ChatComposerFlyoutButtonBootLoader.react"), {
                interactionClassName: "_6gd _13ga",
                flyoutAlignment: "left",
                iconClassName: "_6gb _6wm4 _67ew",
                flyoutProps: {
                    onSelect: this.$34
                },
                flyoutLoader: b("JSResource")("MessengerWorkplaceChatExtensionsPickerWrapper.react").__setRef("ChatTabComposer.react"),
                title: j._("T\u00ecm ti\u1ec7n \u00edch"),
                buttonName: "chat_extension"
            }, "chatextension")
        }
        ;
        d.$23 = function() {
            var a = this;
            if (!b("WorkFileUploadsGating").canUploadFiles)
                return null;
            var c = this.props.fileUploaderProps || {};
            return l.jsx("li", {
                className: "_13gd",
                children: l.jsx(b("ChatPhotoUploader.react"), babelHelpers["extends"]({
                    composer: this.props.composer,
                    onMount: function(b) {
                        return a.$2 = b
                    }
                }, c))
            }, "files")
        }
        ;
        d.$18 = function() {
            var a = this.props.stickerButtonProps;
            return !a ? null : this.$35()
        }
        ;
        d.$35 = function() {
            var a = this.props.stickerButtonProps;
            if (!a)
                return null;
            var c = {
                className: "_5e-r",
                position: "above"
            };
            return l.jsx(b("ChatComposerFlyoutButtonBootLoader.react"), {
                flyoutProps: a,
                dialogProps: c,
                flyoutAlignment: "right",
                interactionClassName: "_6gd _13ge",
                iconClassName: "_6gb _6wm4 _6gf _6jtm",
                flyoutLoader: b("JSResource")("StickersFlyoutWrapper.react").__setRef("ChatTabComposer.react"),
                title: j._("Ch\u1ecdn nh\u00e3n d\u00e1n"),
                buttonName: "sticker"
            }, "sticker")
        }
        ;
        d.$19 = function() {
            var a = {
                getQuery: function() {
                    return null
                },
                onSelect: this.$36
            };
            return l.jsx(b("ChatComposerFlyoutButtonBootLoader.react"), {
                threadID: this.props.threadID,
                interactionClassName: "_6gd _13gf",
                flyoutProps: a,
                flyoutAlignment: "left",
                iconClassName: "_6gb _6wm4 _6gs _6jtq",
                threadFBID: this.$28(),
                flyoutLoader: b("JSResource")("ChatContentSearchFlyoutWrapper.react").__setRef("ChatTabComposer.react"),
                title: j._("Ch\u1ecdn m\u1ed9t gif"),
                buttonName: "gif"
            }, "contentSearch")
        }
        ;
        d.$20 = function() {
            var a = this
              , c = {
                onSelect: this.$37,
                getInput: function() {
                    return a.$4
                }
            };
            return l.jsx(b("ChatComposerFlyoutButtonBootLoader.react"), {
                threadID: this.props.threadID,
                interactionClassName: "_6gd _13gg",
                flyoutAlignment: "left",
                iconClassName: "_6gb _6wm4 _3oxr _6jtr",
                threadFBID: this.$28(),
                flyoutLoader: b("JSResource")("ChatEmojiFlyout.react").__setRef("ChatTabComposer.react"),
                dialogProps: {
                    offsetY: 10
                },
                flyoutProps: c,
                title: j._("Ch\u1ecdn bi\u1ec3u t\u01b0\u1ee3ng c\u1ea3m x\u00fac"),
                buttonName: "emoji"
            }, "emoji")
        }
        ;
        d.$27 = function() {
            return this.$38() ? this.$39() : this.$40()
        }
        ;
        d.$38 = function() {
            var a = this.props.composer
              , b = a.fileUploader.uploadedFiles || {
                size: 0
            }
              , c = a.sharePreview;
            a = a.text && a.text.trim().length > 0;
            return a || b.size > 0 || !!(c && c.params && c.type)
        }
        ;
        d.$39 = function() {
            var a = j._("Nh\u1ea5n Enter \u0111\u1ec3 g\u1eedi");
            return l.jsx("li", {
                className: "_6gd _21u1",
                children: l.jsx(b("Link.react"), babelHelpers["extends"]({
                    label: "send",
                    className: "_6gb _6wm4 _6987"
                }, b("TooltipData").propsFor(a), {
                    onClick: this.props.handleSendClick,
                    children: l.jsx(b("M4IconSend.bs").jsComponent, {
                        filled: !0,
                        color: this.$10()
                    })
                }))
            }, "send")
        }
        ;
        d.$40 = function() {
            var a = this.props.thread
              , c = b("ChatConfig").get("new_dlc") && !this.props.isFocused ? q : this.$10()
              , d = b("MessengerHotLikeChatSVGIcon.react")
              , e = "_6gb _6wm4";
            return l.jsx("li", {
                className: "_6gd _5ep3 _13gi",
                children: l.jsx(b("MessengerHotLikeButton.react"), {
                    className: e,
                    customColor: c,
                    customLike: b("MessengerHotLikeUtils").getCustomEmojiFromThread(a) || void 0,
                    CustomRenderer: d,
                    forGameChat: this.props.forGameChat,
                    location: b("MercuryShareAttachmentRenderLocations").CHAT,
                    renderSize: 16,
                    sendSticker: this.props.stickerButtonProps && this.props.stickerButtonProps.onStickerSelect,
                    sendCustomLike: this.props.onCustomLikeSelect,
                    threadID: this.props.threadID
                })
            }, "like")
        }
        ;
        d.$21 = function() {
            if (!this.props.p2pProps || !this.props.showP2PButton || this.$31() || b("MercuryIDs").isLocalThread(this.props.threadID))
                return null;
            var a = this.props.p2pProps
              , c = b("joinClasses")(a.className, "");
            return l.jsx("li", {
                className: "_6gd _13gj",
                children: l.jsx(b("P2PSendMoneyContainerBootloader.react"), babelHelpers["extends"]({}, a, {
                    className: c,
                    participantIDs: this.props.participantIDs,
                    p2pPaymentConfig: this.state.p2pPaymentConfig,
                    thread: this.props.thread,
                    threadID: this.props.threadID
                }))
            }, "p2p")
        }
        ;
        d.$25 = function() {
            var a = this.props.threadID;
            if (b("MercuryIDs").isLocalThread(this.props.threadID) || !a)
                return null;
            a = {
                className: "_6gb _6wm4 _5yhk _6jtu",
                threadID: a,
                location: b("MessengerQuickCamOrigins").CHAT_TAB,
                viewer: this.props.viewer
            };
            var c = b("gkx")("678582");
            if (!c)
                return null;
            c = l.jsx(b("MercuryBootloadOnInteraction.react"), {
                component: l.jsx(b("LazyComponent.react"), babelHelpers["extends"]({}, a)),
                loader: b("JSResource")("MessengerQuickCamButtonHTML5.react").__setRef("ChatTabComposer.react"),
                placeholder: l.jsx("span", {
                    className: a.className
                })
            });
            return l.jsx("li", {
                className: "_6gd _13gk",
                children: c
            }, "quickcam")
        }
        ;
        d.$31 = function() {
            return !!this.$41()
        }
        ;
        d.$41 = function() {
            return b("getPageIDFromThreadID")(this.props.threadID)
        }
        ;
        d.$28 = function() {
            if (this.props.threadID && !b("MercuryIDs").isLocalThread(this.props.threadID))
                return b("MercuryIDs").getThreadFBIDFromThreadID(this.props.threadID);
            return this.props.thread && this.props.thread.thread_fbid ? this.props.thread.thread_fbid : null
        }
        ;
        d.$30 = function() {
            var a = this.props
              , c = a.threadID;
            a = a.thread;
            return c && b("MercuryIDs").isLocalThread(c) && a && a.thread_fbid ? b("MercuryIDs").getThreadIDFromThreadFBID(a.thread_fbid) : c
        }
        ;
        d.replyToMention = function(a) {
            this.$4 && this.$4.addMention && this.$4.addMention(a)
        }
        ;
        return c
    }(l.PureComponent);
    e.exports = a
}
), null);
__d("ChatTabBlockerComposer.react", ["cx", "fbt", "Bootloader", "MercuryIDs", "MercuryThreadActions", "MessengerParticipants.bs", "React", "XUIButton.react"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("MercuryThreadActions").get()
      , j = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this
              , c = this.$1();
            return j.jsxs("div", {
                className: "_7ubs",
                children: [j.jsx("div", {
                    className: "_7ubt",
                    children: c ? h._("B\u1ea1n \u0111\u00e3 ch\u1eb7n {name} n\u00ean kh\u00f4ng th\u1ec3 nh\u1eafn tin hay g\u1ecdi cho h\u1ecd trong \u0111o\u1ea1n chat. Ngo\u00e0i ra, b\u1ea1n s\u1ebd kh\u00f4ng nh\u1eadn \u0111\u01b0\u1ee3c tin nh\u1eafn hay cu\u1ed9c g\u1ecdi n\u00e0o t\u1eeb ph\u00eda h\u1ecd.", [h._param("name", c)]) : h._("B\u1ea1n \u0111\u00e3 ch\u1eb7n ng\u01b0\u1eddi n\u00e0y n\u00ean hai b\u1ea1n s\u1ebd kh\u00f4ng th\u1ec3 nh\u1eafn tin hay g\u1ecdi cho nhau trong \u0111o\u1ea1n chat n\u00e0y.")
                }), j.jsxs("div", {
                    className: "_7ubu",
                    children: [j.jsx(b("XUIButton.react"), {
                        label: h._("B\u1ecf ch\u1eb7n"),
                        onClick: function() {
                            i.blockMessages(a.props.threadID, "thread_view_blocker_composer")
                        },
                        className: "_7ubv"
                    }), j.jsx(b("XUIButton.react"), {
                        label: h._("C\u00f3 g\u00ec \u0111\u00f3 kh\u00f4ng \u1ed5n"),
                        onClick: function() {
                            a.props.onSomethingWrong && a.props.onSomethingWrong(a.props.threadID, !1, "block_composer")
                        },
                        className: "_7ubv"
                    })]
                })]
            })
        }
        ;
        d.$1 = function() {
            if (!this.props.threadID)
                return null;
            var a = b("MercuryIDs").getParticipantIDFromFromThreadID(this.props.threadID);
            a = b("MessengerParticipants.bs").getNow(a);
            return a == null ? void 0 : a.short_name
        }
        ;
        return c
    }(j.PureComponent);
    e.exports = a
}
), null);
__d("ChatTabSRXUtil", ["CurrentUser", "FantaFRXUtil", "MercuryIDs", "getPageIDFromThreadID"], (function(a, b, c, d, e, f) {
    "use strict";
    f.isSRXEligible = a;
    function a(a, c) {
        return b("MercuryIDs").isCanonical(c) && (!b("getPageIDFromThreadID")(c) || a != null && a.is_canonical_neo_user) && !b("CurrentUser").isWorkUser() && b("FantaFRXUtil").isFRXEligible(a, c)
    }
}
), null);
__d("ChatTabComposerContainer.react", ["cx", "fbt", "Bootloader", "ChatTabBlockerComposer.react", "ChatTabComposer.react", "ChatTabSRXUtil", "FantaFRXUtil", "FantaMessageActions", "FantaTabActions", "FBLogger", "FDSSpinner.react", "JSResource", "Keys", "LogHistory", "MercuryConstants", "MercuryIDs", "MercuryIgnoredBlockedParticipants.bs", "MercuryMessageActions", "MercuryReadOnlyReason", "MercuryShareAttachmentRenderLocations", "MercuryThreadInfo", "MessengerBotMenuDataFetcher", "MessengerState.bs", "MNCommercePageSetting", "P2PGKValues", "PhotosUploadWaterfall", "React", "ReactDOM", "SimpleXUIDialog", "WaterfallIDGenerator", "emptyFunction", "getPageIDFromThreadID", "getThreadTypeNameFromThreadType", "gkx", "lazyLoadComponent", "performanceAbsoluteNow", "setImmediate", "shallowCompare"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i, j = b("React"), k = b("lazyLoadComponent")(b("JSResource")("ChatTabLeftGroupComposer.react").__setRef("ChatTabComposerContainer.react")), l = "right", m = /^\s*$/, n = b("LogHistory").getInstance("chat_tab_view"), o = !1, p = !1, q = 140, r = 90;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.state = {
                showP2PButton: d.$6(),
                pageID: b("getPageIDFromThreadID")(d.props.threadID),
                showStructuredMenu: d.$7(),
                longInput: !1
            },
            d.$9 = function(a) {
                d.$2 = a
            }
            ,
            d.$10 = function(a) {
                d.$3 && d.$3.uploadFiles([].concat(a))
            }
            ,
            d.$11 = function(a) {
                d.$5 = a
            }
            ,
            d.$12 = function(a) {
                d.$3 = a
            }
            ,
            d.onSend = function(a) {
                d.props.forGameChat && b("Bootloader").loadModules(["GamesQuicksilverFunnelLogger"], function(a) {
                    a.logGameChatSendMessage(a.getDefaultFunnelName())
                }, "ChatTabComposerContainer.react");
                if (a && a.profile_ranges && a.profile_ranges.length) {
                    var c = a
                      , e = d.props.thread;
                    b("Bootloader").loadModules(["MessengerMentionsTypedLogger", "MessengerMentionsLoggerEvents"], function(a, d) {
                        new a().setEvent(d.MENTION).setGroupSize(e && e.participants && e.participants.length).setNumDelivered((c.profile_ranges || []).length).setThreadid(e && e.thread_id).setThreadType(b("getThreadTypeNameFromThreadType")(e && e.thread_type)).setOfflineThreadid(c.offline_threading_id).log()
                    }, "ChatTabComposerContainer.react")
                }
                p ? d.$2 && d.$2.onSend && d.$2.onSend(a) : d.refs.composer && d.refs.composer.onSend(a)
            }
            ,
            d.focusInput = function() {
                var a = d.getInput();
                a && a.focus && a.focus()
            }
            ,
            d.$14 = function(a) {
                a = d.getInput();
                a && typeof a.handleSend === "function" && (a && a.handleSend())
            }
            ,
            d.$36 = function(a, c) {
                b("MercuryMessageActions").getForFBID(d.props.viewer).confirmAttachmentPlaceholder(c.upload_id, c),
                d.$30(c)
            }
            ,
            d.$38 = function(a) {
                var c, e;
                switch (a.error) {
                case "size-exceeded":
                    c = h._("File m\u00e0 b\u1ea1n \u0111\u00e3 ch\u1ecdn qu\u00e1 l\u1edbn");
                    e = h._("File b\u1ea1n \u0111\u00e3 ch\u1ecdn qu\u00e1 l\u1edbn. K\u00edch th\u01b0\u1edbc t\u1ed1i \u0111a l\u00e0 25MB.");
                    b("FBLogger")("messenger_upload_file").warn("Uploading file is too large");
                    break;
                case "attachment-limit":
                    c = h._("B\u1ea1n \u0111\u00e3 ch\u1ecdn qu\u00e1 nhi\u1ec1u file.");
                    e = h._("B\u1ea1n c\u00f3 th\u1ec3 g\u1eedi t\u1ed1i \u0111a {max number of files} file.", [h._param("max number of files", b("MercuryConstants").AttachmentMaxLimit)]);
                    b("FBLogger")("messenger_upload_file").warn("Attachment limit reached");
                    break;
                default:
                    c = h._("T\u1ea3i file l\u00ean kh\u00f4ng th\u00e0nh c\u00f4ng"),
                    e = h._("\u0110\u00e3 x\u1ea3y ra l\u1ed7i khi t\u1ea3i file l\u00ean.")
                }
                d.$41(c, e);
                d.$25(a)
            }
            ,
            d.$35 = function(a, c) {
                b("MercuryMessageActions").getForFBID(d.props.viewer).cancelAttachmentPlaceholder(c.upload_id, c),
                d.$29(c)
            }
            ,
            d.$40 = function(a, c) {
                b("MercuryMessageActions").getForFBID(d.props.viewer).cancelAttachmentPlaceholder(c.upload_id, c);
                a = h._("T\u1ea3i file l\u00ean kh\u00f4ng th\u00e0nh c\u00f4ng");
                var e = h._("\u0110\u00e3 x\u1ea3y ra l\u1ed7i khi t\u1ea3i file l\u00ean.");
                c.errorDialogParams && (a = c.errorDialogParams.title || a,
                e = c.errorDialogParams.body || e);
                d.$41(a, e);
                d.$25(c)
            }
            ,
            d.$37 = function(a, c) {
                b("MercuryMessageActions").getForFBID(d.props.viewer).cancelAttachmentPlaceholder(c.upload_id, c);
                a = h._("Kh\u00f4ng t\u1ea3i l\u00ean \u0111\u01b0\u1ee3c");
                var e = h._("Vui l\u00f2ng th\u1eed l\u1ea1i. H\u00e3y \u0111\u1ea3m b\u1ea3o r\u1eb1ng b\u1ea1n \u0111ang t\u1ea3i l\u00ean file h\u1ee3p l\u1ec7.");
                c.errorDialogParams && (a = c.errorDialogParams.title || a,
                e = c.errorDialogParams.body || e);
                d.$41(a, e);
                d.$27 && d.$27(c)
            }
            ,
            d.$39 = function(a, b) {
                d.$31 && d.$31(b)
            }
            ,
            d.$17 = function(a, b) {
                d.$23(a, b)
            }
            ,
            d.$16 = function(a) {
                d.props.onEscape && d.props.onEscape(a)
            }
            ,
            d.$18 = function(a, c) {
                var e = d.props.threadID;
                e && (d.$4 = b("setImmediate")(function() {
                    d.$4 = null,
                    b("FantaMessageActions").composerTextUpdate(e, a, c)
                }));
                d.$8()
            }
            ,
            d.$23 = function(a, c) {
                var e = d.props.threadID;
                a.keyCode === b("Keys").RETURN && !a.shiftKey && (a.preventDefault(),
                d.$13(c));
                if (a.keyCode === b("Keys").DOWN && a.shiftKey && d.hasEmptyInput()) {
                    b("FantaTabActions").minimizeTab(e);
                    return
                }
            }
            ,
            d.$13 = function(a) {
                var b = d.$43();
                b == null || b.length === 0 ? d.$44(a, []) : d.$44(a, b)
            }
            ,
            d.$15 = function(a) {
                var b = d.getInput();
                b && b.insertEmoji(a)
            }
            ,
            d.$24 = function(a, b, c) {
                d.props.onSendHotLike(a.emoji, b, c, d.focusInput)
            }
            ,
            d.$26 = function() {
                d.props.onSendMessage("", d.props.composer, d.onSend)
            }
            ,
            d.$28 = function(a) {
                d.props.onSelectSticker(a, b("emptyFunction"))
            }
            ,
            d.$31 = function(a) {
                d.$45(b("PhotosUploadWaterfall").UPLOAD_START, a),
                d.props.onSendPhoto(a, d.onSend),
                d.$46("submit", a),
                d.focusInput()
            }
            ,
            d.$25 = function(a) {
                d.$45(b("PhotosUploadWaterfall").CLIENT_ERROR, a),
                d.$46("failed", a)
            }
            ,
            d.$27 = function(a) {
                d.$45(b("PhotosUploadWaterfall").CLIENT_ERROR, a),
                d.$46("failed", a)
            }
            ,
            d.$29 = function(a) {
                d.$45(b("PhotosUploadWaterfall").CANCEL_DURING_UPLOAD, a),
                d.$46("canceled", a)
            }
            ,
            d.$30 = function(a) {
                d.$45(b("PhotosUploadWaterfall").ALL_UPLOADS_DONE, a);
                d.$46("completed", a);
                a = a.image_ids.length || a.attachments.length;
                d.$47(a)
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.shouldComponentUpdate = function(a, c) {
            return b("shallowCompare")(this, a, c)
        }
        ;
        d.componentDidMount = function() {
            var a = this
              , c = (i || (i = b("performanceAbsoluteNow")))();
            b("Bootloader").loadModules(["QuickPerformanceLogger", "MessengerWebQuickLogModule"], function(b, d) {
                b.markerPoint(d.FIRSTCHATTABOPEN_WWW, "mount_composer_container", JSON.stringify(a.state), 0, c)
            }, "ChatTabComposerContainer.react");
            this.props.isFocused && !this.props.isNewEmptyLocalThread && this.focusInput();
            this.state.pageID && b("MessengerBotMenuDataFetcher").getHasPageSetting(this.state.pageID, function(b) {
                a.setState({
                    showStructuredMenu: b
                })
            }, function() {
                a.setState({
                    showStructuredMenu: !1
                })
            }, b("MNCommercePageSetting").STRUCTURED_MENU_ENABLED)
        }
        ;
        d.componentDidUpdate = function(a) {
            var b = this.props.thread;
            b = b ? b.thread_id : null;
            b === this.props.threadID && (this.props.fileUploader !== a.fileUploader && this.$8())
        }
        ;
        d.$6 = function() {
            return b("P2PGKValues").P2PVisible && this.props.viewer !== b("MercuryIDs").getUserIDFromThreadID(this.props.threadID)
        }
        ;
        d.$7 = function() {
            var a = b("getPageIDFromThreadID")(this.props.threadID);
            return a === null || a === void 0 ? !1 : b("MessengerBotMenuDataFetcher").getHasPageSetting(a, function() {}, function() {}, b("MNCommercePageSetting").STRUCTURED_MENU_ENABLED)
        }
        ;
        d.render = function() {
            var a = this.props.composer
              , c = this.props
              , d = c.thread;
            c = c.threadID;
            var e = c ? b("MessengerState.bs").isEmptyLocalThread(this.props.viewer, c) : !1;
            return p ? j.jsx(b("ChatTabComposer.react"), {
                composer: a,
                enableDisappearingIcons: o,
                fileUploader: this.props.fileUploader,
                handleSend: this.$13,
                handleSendClick: this.$14,
                inputRef: this.$9,
                isEmptyLocalThread: e,
                isFocused: this.props.isFocused,
                defaultText: a.text,
                onEmojiSelect: this.$15,
                onEscape: this.$16,
                onInputKeyDown: this.$17,
                onTab: this.props.onTab,
                onTextChange: this.$18,
                onUploaderMount: this.$12,
                pageID: this.state.pageID,
                participantIDs: void 0,
                disableInput: this.props.disableInput,
                showP2PButton: this.state.showP2PButton,
                showStructuredMenu: this.state.showStructuredMenu,
                thread: d,
                threadID: c,
                uploadPhotoFn: this.$10,
                viewer: this.props.viewer,
                focusInput: this.focusInput,
                longInput: this.state.longInput,
                ref: this.$11,
                forGameChat: this.props.forGameChat
            }) : this.$19() ? this.$21() ? j.jsx(j.Suspense, {
                fallback: j.jsx(b("FDSSpinner.react"), {
                    center: !0
                }),
                children: j.jsx(k, {})
            }) : j.jsx(b("ChatTabComposer.react"), {
                defaultText: a.text,
                fileUploaderProps: this.$22(),
                handleSendClick: this.$14,
                isEmptyLocalThread: e,
                ref: "composer",
                composer: this.props.composer,
                fileUploader: this.props.fileUploader,
                handleSend: this.$13,
                inputKeyDown: this.$23,
                isFocused: this.props.isFocused,
                onCustomLikeSelect: this.$24,
                onEmojiSelect: this.$15,
                onEscape: this.props.onEscape,
                onFileUploadFail: this.$25,
                onP2PTrigger: this.$26,
                onPhotoUploadFail: this.$27,
                onStickerSelect: this.$28,
                onTab: this.props.onTab,
                onUploadCancel: this.$29,
                onUploadComplete: this.$30,
                onUploadSubmit: this.$31,
                thread: d,
                threadID: c,
                viewer: this.props.viewer,
                disableInput: this.props.disableInput,
                onTextChange: this.$18,
                p2pProps: this.$32(),
                pageID: this.state.pageID,
                participantIDs: void 0,
                photoUploaderProps: this.$33(),
                showP2PButton: this.state.showP2PButton,
                showStructuredMenu: this.state.showStructuredMenu,
                stickerButtonProps: this.$34(),
                forGameChat: this.props.forGameChat
            }) : this.$20(c)
        }
        ;
        d.getInput = function() {
            return p ? this.$2 : this.refs.composer && this.refs.composer.getInput && this.refs.composer.getInput()
        }
        ;
        d.isUploading = function() {
            return this.refs.composer.isUploading()
        }
        ;
        d.$32 = function() {
            return !this.state.showP2PButton ? {} : {
                button: j.jsx("i", {
                    className: "hidden_elem"
                }),
                className: "_6ga _6gb _6wm4 _6jtl",
                flyoutAlignment: l,
                referrer: b("MercuryShareAttachmentRenderLocations").CHAT,
                threadID: this.props.threadID,
                onTrigger: this.$26
            }
        }
        ;
        d.$34 = function() {
            var a = {
                className: "_6gb _6wm4 _6gf _6jtm",
                flyoutAlignment: l,
                threadID: this.props.threadID,
                onStickerSelect: this.$28
            };
            return a
        }
        ;
        d.$33 = function() {
            var a = {
                className: "_6gd",
                customUI: !0,
                imageClassName: "hidden_elem",
                linkClassName: "_6gb _6wm4 _6ge _6jtn",
                threadID: this.props.threadID,
                onLastUploadCancel: this.$35,
                onAllUploadsComplete: this.$36,
                onLastUploadFail: this.$37,
                onUploadError: this.$38,
                onSubmit: this.$39
            };
            return a
        }
        ;
        d.$22 = function() {
            var a = this.$33();
            a.linkClassName = "_6gb _6wm4 _6gg _6jto";
            a.imagesOnly = !1;
            a.onLastUploadFail = this.$40;
            return a
        }
        ;
        d.$41 = function(a, c) {
            b("SimpleXUIDialog").show(c, a)
        }
        ;
        d.$8 = function() {
            if (!this.$5)
                return;
            var a = b("ReactDOM").findDOMNode(this.$5);
            if (!a)
                return;
            a = a.clientHeight;
            !this.state.longInput && a > q ? this.setState({
                longInput: !0
            }) : this.state.longInput && a < r && this.setState({
                longInput: !1
            })
        }
        ;
        d.hasEmptyInput = function() {
            return m.test(this.$42())
        }
        ;
        d.$42 = function() {
            var a = this.getInput();
            return a && a.getValue() || ""
        }
        ;
        d.$44 = function(a, b) {
            this.props.onSendMessage({
                message: a,
                mentions: b
            }, this.props.composer, this.onSend);
            return
        }
        ;
        d.$43 = function() {
            var a = this.getInput();
            return a && a.getMentions ? a.getMentions() : null
        }
        ;
        d.$19 = function() {
            return !b("gkx")("1241489") ? !(b("ChatTabSRXUtil").isSRXEligible(this.props.thread, this.props.threadID) && this.props.blockedIDs && b("MercuryIgnoredBlockedParticipants.bs").qualifiesAs(this.props.viewer, this.props.blockedIDs, this.props.thread)) : b("MercuryThreadInfo").canReply(this.props.thread)
        }
        ;
        d.$20 = function(a) {
            var c;
            if (!b("gkx")("1241489"))
                return j.jsx(b("ChatTabBlockerComposer.react"), {
                    onSomethingWrong: this.props.threadID ? b("FantaFRXUtil").FRXClicked : null,
                    threadID: a,
                    viewer: this.props.viewer
                });
            c = ((c = this.props) == null ? void 0 : (c = c.thread) == null ? void 0 : c.cannot_reply_reason) === "blocked";
            if (c) {
                c = this.props.blockedIDs && b("MercuryIgnoredBlockedParticipants.bs").qualifiesAs(this.props.viewer, this.props.blockedIDs, this.props.thread);
                return c ? j.jsx(b("ChatTabBlockerComposer.react"), {
                    onSomethingWrong: this.props.threadID ? b("FantaFRXUtil").FRXClicked : null,
                    threadID: a,
                    viewer: this.props.viewer
                }) : j.jsx("div", {
                    className: "_8vnr",
                    children: h._("B\u1ea1n kh\u00f4ng th\u1ec3 tr\u1ea3 l\u1eddi cu\u1ed9c tr\u00f2 chuy\u1ec7n n\u00e0y")
                })
            }
            return j.jsx("div", {
                className: "_8vnr",
                children: b("MercuryReadOnlyReason").getReason((c = this.props) == null ? void 0 : (a = c.thread) == null ? void 0 : a.has_email_participant)
            })
        }
        ;
        d.$21 = function() {
            return !1
        }
        ;
        d.$45 = function(a, c) {
            this.$1 == null && (this.$1 = b("WaterfallIDGenerator").generate()),
            b("PhotosUploadWaterfall").sendSignal(babelHelpers["extends"]({
                qn: this.$1,
                step: a,
                uploader: b("PhotosUploadWaterfall").APP_CHAT
            }, c || {}))
        }
        ;
        d.$47 = function(a) {
            if (a === 0)
                return;
            this.$45(b("PhotosUploadWaterfall").POST_PUBLISHED, {
                count: a
            });
            this.$1 = b("WaterfallIDGenerator").generate()
        }
        ;
        d.$46 = function(a, b) {
            n.debug("photo_uploader:" + a, "{}")
        }
        ;
        return c
    }(j.Component);
    e.exports = a
}
), null);
__d("BootloadOnInteraction.react", ["BootloadOnRender.react", "React"], (function(a, b, c, d, e, f) {
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(b) {
            var c;
            c = a.call(this, b) || this;
            c.$1 = function() {
                c.setState({
                    hadUserInteraction: !0
                })
            }
            ;
            c.state = {
                hadUserInteraction: !1
            };
            return c
        }
        var d = c.prototype;
        d.render = function() {
            if (!this.state.hadUserInteraction)
                return g.cloneElement(this.props.placeholder, {
                    onFocus: this.$1,
                    onMouseOver: this.$1,
                    onClick: this.$1
                });
            var a = this.props
              , c = a.loader
              , d = a.component;
            a = a.placeholder;
            return g.jsx(b("BootloadOnRender.react"), {
                placeholder: a,
                loader: c,
                component: d
            })
        }
        ;
        return c
    }(g.Component);
    e.exports = a
}
), null);
__d("M4Icon.bs", ["cssVar", "CurrentUser"], (function(a, b, c, d, e, f, g) {
    "use strict";
    c = {};
    function a(a) {
        if (b("CurrentUser").isWorkUser())
            if (typeof a === "number")
                switch (a) {
                case 0:
                    return "#FFFFFF";
                case 1:
                    return "#BEC3C9";
                case 2:
                    return "#8D949E"
                }
            else
                return "#373e4c";
        else if (typeof a === "number")
            switch (a) {
            case 0:
                return "#FFFFFF";
            case 1:
                return "#bec2c9";
            case 2:
                return "#8D949E"
            }
        else
            return a[0]
    }
    d = 0;
    e = 1;
    f.Style = c;
    f.white = d;
    f.light = e;
    f.getColor = a
}
), null);
__d("M4IconSettings.bs", ["React", "M4IconSVG.bs"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a) {
        var c = a.filled;
        a = a.color;
        c = c !== void 0 ? c : !0;
        a = a !== void 0 ? a : "blue";
        var d = {
            fill: "none",
            stroke: a,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10"
        };
        return g.jsx(b("M4IconSVG.bs").make, {
            children: c ? g.jsx("path", {
                d: "M15.5,8.9V7.1l-2.2-0.5c-0.1-0.5-0.3-0.9-0.6-1.3l1.2-1.9l-1.2-1.2l-1.9,1.2C10.3,3,9.9,2.8,9.4,2.7L8.9,0.5 H7.1L6.6,2.7C6.1,2.8,5.7,3,5.2,3.2L3.3,2.1L2.1,3.3l1.2,1.9C3,5.7,2.8,6.1,2.7,6.6L0.5,7.1v1.7l2.2,0.5c0.1,0.5,0.3,0.9,0.6,1.3 l-1.2,1.9l1.2,1.2l1.9-1.2c0.4,0.2,0.9,0.4,1.3,0.6l0.5,2.2h1.7l0.5-2.2c0.5-0.1,0.9-0.3,1.3-0.6l1.9,1.2l1.2-1.2l-1.2-1.9 c0.2-0.4,0.4-0.9,0.6-1.3L15.5,8.9z M8,11c-1.7,0-3-1.3-3-3c0-1.7,1.3-3,3-3c1.7,0,3,1.3,3,3C11,9.7,9.7,11,8,11z",
                fill: a,
                stroke: a
            }, "all") : g.jsxs("g", {
                children: [g.jsx("path", {
                    style: d,
                    d: "M15.5,8.9V7.1l-2.2-0.5c-0.1-0.5-0.3-0.9-0.6-1.3l1.2-1.9l-1.2-1.2l-1.9,1.2C10.3,3,9.9,2.8,9.4,2.7L8.9,0.5\n          \t\t\tH7.1L6.6,2.7C6.1,2.8,5.7,3,5.2,3.2L3.3,2.1L2.1,3.3l1.2,1.9C3,5.7,2.8,6.1,2.7,6.6L0.5,7.1v1.7l2.2,0.5c0.1,0.5,0.3,0.9,0.6,1.3\n          \t\t\tl-1.2,1.9l1.2,1.2l1.9-1.2c0.4,0.2,0.9,0.4,1.3,0.6l0.5,2.2h1.7l0.5-2.2c0.5-0.1,0.9-0.3,1.3-0.6l1.9,1.2l1.2-1.2l-1.2-1.9\n          \t\t\tc0.2-0.4,0.4-0.9,0.6-1.3L15.5,8.9z"
                }, "outer"), g.jsx("circle", {
                    style: d,
                    cx: "8",
                    cy: "8",
                    r: "2.5"
                }, "inner")]
            }, "filled")
        })
    }
    c = a;
    d = a;
    f.make = c;
    f.jsComponent = d
}
), null);
__d("ChatTabMenuIcon.bs", ["React", "M4Icon.bs", "M4IconSettings.bs"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a) {
        a = a.iconStyle;
        a = b("M4Icon.bs").getColor(a);
        return g.createElement(b("M4IconSettings.bs").make, {
            filled: !0,
            color: a
        })
    }
    c = a;
    d = a;
    f.make = c;
    f.jsComponent = d
}
), null);
__d("ChatTabMenuBootloader.react", ["cx", "fbt", "AutoFocusableLink.react", "BootloadOnInteraction.react", "ChatTabMenuIcon.bs", "ErrorBoundary.react", "JSResource", "LazyComponent.react", "MercuryConfig", "MercuryThreadInfo", "MessageRequestUtils", "React", "getPageIDFromThreadID", "immutable", "isEmpty", "lazyLoadComponent"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i, j = b("React"), k = b("lazyLoadComponent")(b("JSResource")("MessengerReportNUX.react").__setRef("ChatTabMenuBootloader.react"));
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.$1 = function() {
            var a = this.props.thread;
            return !!a && b("MercuryThreadInfo").showSettingsMenu(a) && !(i || (i = b("isEmpty")))(a.participants) && !b("MessageRequestUtils").isMessageRequest(a) && !b("MercuryConfig").ViewerIsReadOnly && !(b("MercuryConfig").ColdOpenBlock && (b("MercuryThreadInfo").isColdOpen(a) || b("MercuryThreadInfo").isEmptyLocalThread(a))) && !(this.props.isPageChat && a.message_count === 0)
        }
        ;
        d.render = function() {
            if (!this.$1())
                return null;
            var a = h._("T\u00f9y ch\u1ecdn");
            return j.jsxs("div", {
                className: "_461_",
                ref: "menu",
                children: [j.jsx(b("BootloadOnInteraction.react"), {
                    component: j.jsx(b("LazyComponent.react"), babelHelpers["extends"]({}, this.props)),
                    loader: b("JSResource")("ChatTabMenu.react").__setRef("ChatTabMenuBootloader.react"),
                    placeholder: j.jsx(b("AutoFocusableLink.react"), {
                        "aria-label": a,
                        role: "button",
                        children: j.jsx(b("ChatTabMenuIcon.bs").jsComponent, {
                            iconStyle: this.props.iconStyle
                        })
                    })
                }), this.$2()]
            })
        }
        ;
        d.$2 = function() {
            var a = this;
            if (!this.props.showMessengerReportNux || this.props.threadID === null)
                return null;
            var c = b("getPageIDFromThreadID")(this.props.threadID);
            return c === null ? null : j.jsx(b("ErrorBoundary.react"), {
                children: j.jsx(j.Suspense, {
                    fallback: null,
                    children: j.jsx(k, {
                        contextRef: function() {
                            return a.refs.menu
                        },
                        pageID: c,
                        pageUnsubscribeStatus: this.props.pageUnsubscribeStatus
                    })
                })
            })
        }
        ;
        return c
    }(j.Component);
    e.exports = a
}
), null);
__d("M4IconCamcorder.bs", ["React", "M4IconSVG.bs"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a) {
        var c = a.filled;
        a = a.color;
        c = c !== void 0 ? c : !0;
        a = a !== void 0 ? a : "blue";
        var d = {
            fill: c ? a : "none",
            stroke: a
        };
        return g.jsxs(b("M4IconSVG.bs").make, {
            children: [g.jsx("path", {
                style: d,
                d: "M9.5,13.5h-7c-1.1,0-2-0.9-2-2v-7c0-1.1,0.9-2,2-2h7c1.1,0,2,0.9,2,2v7C11.5,12.6,10.6,13.5,9.5,13.5z"
            }, "body"), g.jsx("line", {
                stroke: c ? "none" : a,
                x1: "13.5",
                x2: "13.5",
                y1: "5",
                y2: "11"
            }, "focus-ring"), g.jsx("path", {
                style: d,
                d: "M15,3.6l-3.5,3V8v1.4l3.5,3c0.2,0.2,0.5,0,0.5-0.3V8V3.9C15.5,3.6,15.2,3.4,15,3.6z"
            }, "lens")]
        })
    }
    c = a;
    d = a;
    f.make = c;
    f.jsComponent = d
}
), null);
__d("M4IconPhone.bs", ["React", "M4IconSVG.bs"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a) {
        var c = a.filled;
        a = a.color;
        c = c !== void 0 ? c : !0;
        a = a !== void 0 ? a : "blue";
        c = {
            fill: c ? a : "none",
            stroke: a
        };
        return g.jsx(b("M4IconSVG.bs").make, {
            children: g.jsx("path", {
                style: c,
                d: "M8.8,11.6c0.1,0,0.1,0.1,0.2,0.1c0.4,0.2,0.8,0.1,1-0.3c0.1-0.2,0.2-0.4,0.3-0.6c0.2-0.2,0.5-0.6,0.8-0.7 C11.5,10,11.8,10,12,10c0.4,0,0.9,0.4,1.6,0.8c0.7,0.4,1.2,0.8,1.5,1c0.2,0.2,0.3,0.4,0.3,0.6c0,0.4,0,1.2-0.7,1.9 c-1,1.1-2.5,1.6-4.3,1c-1.8-0.6-4.1-1.7-6-3.7s-3.1-4.2-3.7-6s-0.2-3.3,1-4.3c0.7-0.6,1.4-0.7,1.9-0.7c0.2,0,0.5,0.1,0.6,0.3 c0.2,0.3,0.6,0.8,1,1.5C5.7,3.1,6,3.6,6,4c0,0.3,0,0.6-0.1,0.8C5.8,5.1,5.5,5.4,5.2,5.6C5,5.8,4.8,5.9,4.7,6C4.3,6.1,4.1,6.6,4.3,7 c0,0.1,0.1,0.1,0.1,0.2C5.5,9,7,10.5,8.8,11.6z"
            }, "all")
        })
    }
    c = a;
    d = a;
    f.make = c;
    f.jsComponent = d
}
), null);
__d("ChatVideoCallIcon.bs", ["React", "M4Icon.bs", "M4IconPhone.bs", "M4IconCamcorder.bs"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a) {
        var c = a.isAudio;
        a = a.iconStyle;
        a = b("M4Icon.bs").getColor(a);
        if (c)
            return g.createElement(b("M4IconPhone.bs").make, {
                filled: !0,
                color: a
            });
        else
            return g.createElement(b("M4IconCamcorder.bs").make, {
                filled: !0,
                color: a
            })
    }
    c = a;
    d = a;
    f.make = c;
    f.jsComponent = d
}
), null);
__d("ChatVideoCallButtonBootloader.react", ["cx", "AutoFocusableLink.react", "BootloadOnInteraction.react", "ChatVideoCallIcon.bs", "JSResource", "LazyComponent.react", "React", "requireWeak"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.$1 = !1,
            c.state = {
                RTCComponent: null
            },
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            var a = this;
            this.$1 = !0;
            b("requireWeak")("ChatVideoCallButton.react", function(b) {
                a.$1 && a.setState({
                    RTCComponent: b
                })
            })
        }
        ;
        d.componentWillUnmount = function() {
            this.$1 = !1
        }
        ;
        d.render = function() {
            if (this.props.isPageChat || this.props.isBlocked || this.props.threadID === "user:" + this.props.viewer)
                return null;
            var a = this.props
              , c = a.isAudio;
            a = a.iconStyle;
            var d = this.state.RTCComponent;
            return h.jsx("div", {
                className: "_3a61" + (c ? " _461a" : "") + (c ? "" : " _461b"),
                "data-testID": c ? "chatTabVoiceButton" : "chatTabVideoButton",
                children: d ? h.jsx(d, babelHelpers["extends"]({}, this.props)) : h.jsx(b("BootloadOnInteraction.react"), {
                    component: h.jsx(b("LazyComponent.react"), babelHelpers["extends"]({}, this.props)),
                    loader: b("JSResource")("ChatVideoCallButton.react").__setRef("ChatVideoCallButtonBootloader.react"),
                    placeholder: h.jsx(b("AutoFocusableLink.react"), {
                        role: "button",
                        children: h.jsx(b("ChatVideoCallIcon.bs").jsComponent, {
                            isAudio: c,
                            iconStyle: a
                        })
                    })
                })
            }, "rtc" + (c ? "audio" : "video"))
        }
        ;
        return c
    }(h.Component);
    e.exports = a
}
), null);
__d("ChatDetailStack.bs", ["cx", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function a(a) {
        var b = a.topDetail;
        a = a.bottomDetail;
        a = a !== null ? h.jsx("div", {
            children: a,
            className: "_4jeh"
        }) : null;
        return h.jsxs("div", {
            children: [h.jsx("div", {
                children: b,
                className: "_4jeg"
            }), a],
            className: "_2rt2"
        })
    }
    c = a;
    f.make = c
}
), null);
__d("ChatTabMenu.bs", ["MercuryIDs", "bs_caml_option", "ReasonReact.bs", "MessengerState.bs", "bs_js_null_undefined", "getPageIDFromThreadID", "ChatTabMenuBootloader.react"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a, c, d, e, f, g, h, i, j, k, l, m, n, o) {
        var p = a !== void 0 ? b("bs_caml_option").some(b("bs_caml_option").valFromOption(a).thread_id) : void 0;
        if (p !== void 0) {
            var q = b("bs_caml_option").valFromOption(p);
            q = [b("MercuryIDs").isGroupChat(q), b("MessengerState.bs").isNewEmptyLocalThread(c, q), b("bs_caml_option").nullable_to_opt(b("getPageIDFromThreadID")(q)) !== void 0]
        } else
            q = [!1, !0, !1];
        var r = a !== void 0 ? b("bs_caml_option").valFromOption(a).message_count === 0 : !0;
        return b("ReasonReact.bs").wrapJsForReason(b("ChatTabMenuBootloader.react"), {
            autoFocus: !1,
            hasBlockedMessages: h,
            highlightNewMessage: k,
            isEmptyChat: q[1],
            isEmptyConversation: r,
            isFocused: j,
            isGroupChat: q[0],
            isMultiCompany: i,
            isPageChat: q[2],
            membershipParticipants: b("bs_js_null_undefined").fromOption(d),
            pageUnsubscribeStatus: e,
            participantsMap: b("bs_js_null_undefined").fromOption(f),
            showMessengerReportNux: g,
            isNewMessageTab: l,
            thread: b("bs_js_null_undefined").fromOption(a),
            threadID: b("bs_js_null_undefined").fromOption(p),
            uri: m,
            viewer: c,
            iconStyle: n
        }, o)
    }
    f.make = a
}
), null);
__d("ChatThreadName.bs", ["cx", "React", "Link.react", "MercuryIDs", "bs_caml_option", "ReasonReact.bs", "MessengerHoverCardLink", "MercuryThreadTitleReact.bs"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function a(a) {
        var c = a.thread
          , d = a.threadHref
          , e = a.tooltip
          , f = a.viewer
          , g = a.className
          , i = a.isNewMessageTab;
        a = a.onHeaderClick;
        if (c !== void 0) {
            c = b("bs_caml_option").valFromOption(c);
            var j = c.thread_id;
            e = h.jsx(b("Link.react"), {
                "data-hover": "tooltip",
                "data-tooltip-content": e,
                className: g,
                href: d,
                onClick: a,
                children: b("ReasonReact.bs").element(void 0, void 0, b("MercuryThreadTitleReact.bs").make("_1ogo", void 0, c, f, i, void 0, !c.is_canonical, !0, []))
            });
            if (c.is_canonical) {
                g = b("MessengerHoverCardLink").constructEndpoint({
                    id: b("MercuryIDs").getThreadFBIDFromThreadID(j)
                });
                return h.cloneElement(e, {
                    "data-hovercard": g,
                    "data-hover": ""
                })
            } else
                return e
        } else
            return null
    }
    c = a;
    f.make = c
}
), null);
__d("ChatVideoCallButton.bs", ["MercuryIDs", "bs_caml_option", "ReasonReact.bs", "bs_js_null_undefined", "ChatVideoCallButtonBootloader.react"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a, c, d, e, f, g, h, i, j, k) {
        a = a !== void 0 ? a : !0;
        e = e !== void 0 ? e : function(a) {
            return 0
        }
        ;
        f = f !== void 0 ? f : !1;
        j = j !== void 0 ? j : !0;
        if (h !== void 0) {
            var l = b("bs_caml_option").valFromOption(h);
            l = [b("bs_caml_option").some(l.thread_id), b("bs_caml_option").nullable_to_opt(l.rtc_call_data)]
        } else
            l = [void 0, void 0];
        var m = l[1];
        m = m !== void 0 ? b("bs_caml_option").valFromOption(m) : {
            call_state: "NO_ONGOING_CALL",
            server_info_data: null,
            initiator_fbid: null
        };
        l = b("bs_js_null_undefined").fromOption(l[0]);
        var n = b("MercuryIDs").isGroupChat(l);
        return b("ReasonReact.bs").wrapJsForReason(b("ChatVideoCallButtonBootloader.react"), {
            isAudio: a,
            isPageChat: c,
            isBlocked: d,
            isGroupChat: n,
            iconStyle: g,
            onRTCNuxCloseButtonClick: e,
            rtcNuxShown: f,
            threadID: l,
            thread: b("bs_js_null_undefined").fromOption(h),
            viewer: i,
            shown: j,
            rtcCallData: m
        }, k)
    }
    f.make = a
}
), null);
__d("M4IconClose.bs", ["React", "M4IconSVG.bs"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a) {
        a = a.color;
        a = a !== void 0 ? a : "blue";
        return g.createElement(b("M4IconSVG.bs").make, {
            children: g.jsx("g", {
                children: g.jsx("g", {
                    children: g.jsxs("g", {
                        children: [g.jsx("path", {
                            d: "M5.833,778.833 L16.167,789.167"
                        }, "stroke1"), g.jsx("path", {
                            d: "M16.167,778.833 L5.833,789.167"
                        }, "stroke2")],
                        stroke: a,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "1.5",
                        transform: "translate(709.000000, 320.000000)"
                    }, "group"),
                    transform: "translate(-712.000000, -1096.000000)"
                }, "iconName"),
                fill: "none",
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: "1"
            }, "close")
        })
    }
    c = a;
    f.make = c
}
), null);
__d("FantaCloseActionButton.bs", ["cx", "fbt", "bs_curry", "React", "M4Icon.bs", "Link.react", "M4IconClose.bs", "TrackingNodes", "TrackingNodeTypes"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    function a(a) {
        var c = a.iconStyle
          , d = a.onClose;
        a = a.isFocused;
        var e = b("TrackingNodes").getTrackingInfo(b("TrackingNodeTypes").CLOSE_BUTTON);
        c = b("M4Icon.bs").getColor(c);
        a = a ? h._("Nh\u1ea5n Esc \u0111\u1ec3 \u0111\u00f3ng") : h._("\u0110\u00f3ng tab");
        return i.createElement(b("Link.react"), {
            "aria-label": a,
            "data-ft": e,
            "data-hover": "tooltip",
            "data-tooltip-content": a,
            "data-tooltip-position": "above",
            className: "_7jbw _4vu4 button",
            onClick: function(a) {
                a.stopPropagation();
                return b("bs_curry")._1(d, a)
            },
            children: i.jsx("div", {
                children: i.jsx(b("M4IconClose.bs").make, {
                    color: c
                }),
                className: "close"
            })
        })
    }
    c = a;
    f.make = c
}
), null);
__d("ChatMuteIconReact.bs", ["cx", "fbt", "React", "bs_js_dict", "TooltipData", "bs_js_null_undefined"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    function a(a) {
        a = a.isMuted;
        if (a) {
            a = b("TooltipData").propsFor(h._("Cu\u1ed9c tr\u00f2 chuy\u1ec7n n\u00e0y \u0111\u00e3 b\u1ecb t\u1eaft th\u00f4ng b\u00e1o. C\u00e1c tab tr\u00f2 chuy\u1ec7n s\u1ebd kh\u00f4ng b\u1eadt l\u00ean v\u00e0 th\u00f4ng b\u00e1o \u0111\u1ea9y \u0111\u00e3 t\u1eaft."), "above");
            return i.cloneElement(i.jsx("div", {
                children: i.jsx("i", {
                    className: "_7hfn"
                }),
                className: "_3a61"
            }), {
                "data-tooltip-content": b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(a, "data-tooltip-content")),
                "data-hover": b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(a, "data-hover")),
                "data-tooltip-position": b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(a, "data-tooltip-position"))
            })
        } else
            return null
    }
    c = a;
    f.make = c
}
), null);
__d("FantaM4HeaderBottomDetail.bs", ["cx", "fbt", "React", "ChatMuteIconReact.bs"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    function a(a) {
        if (a.isNewMessageTab)
            return null;
        else {
            var c = h._("\u0110ang ho\u1ea1t \u0111\u1ed9ng");
            c = a.isPage || !a.isActive ? null : i.jsx("div", {
                children: c,
                "aria-label": c,
                role: "presentation"
            });
            if (a.isMuted)
                return i.jsxs("div", {
                    children: [c, c !== null && a.isMuted ? i.jsx("span", {
                        children: "\u30fb",
                        "aria-hidden": !0
                    }) : null, i.createElement(b("ChatMuteIconReact.bs").make, {
                        isMuted: a.isMuted
                    })],
                    className: "_69r-"
                });
            else
                return c
        }
    }
    f.make = a
}
), null);
__d("getGroupNameTooltipFromParticipantIDs", ["fbt", "MercuryViewer", "MessengerParticipants.bs"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.getGroupNameTooltipFromParticipantIDsAsync = a;
    f.getGroupNameTooltipFromParticipantIDs = c;
    var h = 10
      , i = "\n";
    function a(a, c) {
        var d = []
          , e = b("MercuryViewer").getID();
        a = a && a.filter(function(a) {
            return a !== e
        });
        if (!a || !a.length) {
            c(null);
            return
        }
        var f = a.length
          , j = f - h;
        j > 1 && (a = a.slice(0, h));
        b("MessengerParticipants.bs").getMulti(a, function(a) {
            for (var b in a) {
                var e = a[b];
                d.push(e.name)
            }
            if (j > 1) {
                e = g._("v\u00e0 th\u00eam {number of hidden chat participants}.", [g._param("number of hidden chat participants", j)]);
                d.push(e)
            }
            c(d.join(i))
        })
    }
    function c(a) {
        var c = []
          , d = b("MercuryViewer").getID();
        a = a && a.filter(function(a) {
            return a !== d
        });
        if (!a || !a.length)
            return null;
        c = a.map(function(a) {
            a = b("MessengerParticipants.bs").getNow(a);
            return a && a.name
        }).filter(function(a) {
            return !!a
        });
        a = a.length - (a.length - c.length) - h;
        if (a > 1) {
            c = c.slice(0, h);
            a = g._("v\u00e0 th\u00eam {number of hidden chat participants}.", [g._param("number of hidden chat participants", a)]);
            c.push(a)
        }
        return c.join(i)
    }
}
), null);
__d("FantaM4Header.bs", ["cx", "fbt", "React", "bs_belt_Set", "bs_belt_Array", "MercuryIDs", "bs_belt_Option", "bs_caml_option", "ChatTabMenu.bs", "ReasonReact.bs", "ParticipantId.bs", "ChatThreadName.bs", "ChatDetailStack.bs", "MercuryThreadInfo", "ChatVideoCallButton.bs", "MessageRequestUtils", "FantaProfilePresence.bs", "MessengerParticipants.bs", "getPageIDFromThreadID", "FantaCloseActionButton.bs", "FantaM4HeaderBottomDetail.bs", "MessengerCustomColorUtils.bs", "MessengerParticipantUtils.bs", "MessengerPresenceProvider.bs", "ChatGroupMembershipDialogBootloader", "getGroupNameTooltipFromParticipantIDs"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    function j(a, c) {
        if (a !== void 0) {
            a = b("bs_caml_option").valFromOption(a).valueSeq().filter(function(a) {
                return !(a.image_src == null)
            }).map(function(a, d, e) {
                d = b("bs_belt_Option").getExn(b("bs_caml_option").nullable_to_opt(a.image_src));
                return [d, a.fbId !== c]
            }).take(4).toArray();
            a = a.length > 3 ? a.filter(function(a) {
                return a[1]
            }) : a;
            return a.slice(0, 3).map(function(a) {
                return a[0]
            })
        } else
            return []
    }
    function k(a, c, d) {
        if (a !== void 0) {
            a = b("bs_caml_option").valFromOption(a);
            var e = a.square_image_src !== null ? a.square_image_src : a.image_src;
            if (e == null) {
                a = b("MercuryIDs").getParticipantIDFromFromThreadID(a.thread_id);
                if (a == null)
                    return j(c, d);
                else {
                    c = b("MessengerParticipants.bs").getNow(a);
                    if (c == null)
                        return [];
                    else {
                        d = c.image_src;
                        if (d == null)
                            return [];
                        else
                            return [d]
                    }
                }
            } else
                return [e]
        } else
            return []
    }
    function l(a) {
        if (a !== void 0) {
            a = b("bs_caml_option").valFromOption(a);
            if (a.is_canonical)
                return "";
            else {
                a = b("getGroupNameTooltipFromParticipantIDs").getGroupNameTooltipFromParticipantIDs(a.participants);
                if (a == null)
                    return "";
                else
                    return a
            }
        } else
            return ""
    }
    function m(a) {
        if (a !== void 0)
            return b("MessageRequestUtils").isMessageRequest(b("bs_caml_option").valFromOption(a));
        else
            return !1
    }
    function n(a) {
        var c = a.hasBlockedMessages
          , d = a.highlightNewMessage
          , e = a.isFocused
          , f = a.isMultiCompany
          , g = a.isDoNotDisturb
          , j = a.membershipParticipants
          , n = a.onClose
          , o = a.focusOnClick
          , p = a.onHeaderToggle
          , q = a.onRTCNuxCloseButtonClick
          , r = a.participants
          , s = a.rtcNuxShown
          , t = a.thread
          , u = a.threadHref
          , v = a.viewer
          , w = a.pageUnsubscribeStatus
          , x = a.pageIndicatorDescription
          , y = a.isNewMessageTab
          , z = a.showMessengerReportNux
          , A = a.uri
          , B = a.isMessengerOnlyUser;
        a = u !== void 0 ? u : "";
        var C = k(t, r, v)
          , D = t !== void 0 ? b("bs_caml_option").nullable_to_opt(b("getPageIDFromThreadID")(b("bs_caml_option").valFromOption(t).thread_id)) : void 0;
        if (t !== void 0) {
            u = b("bs_caml_option").valFromOption(t);
            u = [u.thread_fbid, u.thread_id, u.is_canonical]
        } else
            u = [null, "", !0];
        var E = u[2]
          , F = u[1]
          , G = u[0]
          , H = l(t);
        if (t !== void 0) {
            u = b("bs_caml_option").valFromOption(t).header_color;
            u = u == null ? b("MessengerCustomColorUtils.bs").defaultColor(0) : u
        } else
            u = b("MessengerCustomColorUtils.bs").defaultColor(0);
        if (d)
            if (u !== void 0) {
                var I = u;
                I = [0, I, [I]]
            } else
                I = [1, "", 1];
        else if (u !== void 0 && e) {
            u = u;
            I = [[u], "", [u]]
        } else
            I = [1, "", 1];
        var J = I[1];
        u = I[0];
        var K = "_69pt" + (d ? " _2mgn" : "")
          , L = function(a) {
            if (E)
                return 0;
            else {
                b("ChatGroupMembershipDialogBootloader").bootload(j, r, F);
                a.stopPropagation();
                return 0
            }
        }
          , M = E ? a : ""
          , N = y ? h._("Tin nh\u1eafn m\u1edbi") : i.createElement(b("ChatThreadName.bs").make, {
            thread: t,
            threadHref: M,
            tooltip: H,
            viewer: v,
            className: "_2mgq",
            isNewMessageTab: y,
            onHeaderClick: L
        });
        I = D !== void 0;
        var O = m(t) ? i.jsx("div", {
            children: i.jsx("div", {
                children: i.createElement(b("FantaCloseActionButton.bs").make, {
                    iconStyle: u,
                    onClose: n,
                    isFocused: e
                }),
                className: "_66n5"
            }),
            className: "_69ae"
        }) : t !== void 0 ? y ? i.jsx("div", {
            children: i.jsx("div", {
                children: i.createElement(b("FantaCloseActionButton.bs").make, {
                    iconStyle: u,
                    onClose: n,
                    isFocused: e
                }),
                className: "_66n5"
            }),
            className: "_69ae"
        }) : i.jsxs("div", {
            children: [i.jsx("div", {
                children: b("ReasonReact.bs").element(void 0, void 0, b("ChatVideoCallButton.bs").make(!1, I, c, void 0, void 0, u, t, v, void 0, [])),
                className: "_66n5 _1iti"
            }), i.jsx("div", {
                children: b("ReasonReact.bs").element(void 0, void 0, b("ChatVideoCallButton.bs").make(!0, I, c, q, s, u, t, v, void 0, [])),
                className: "_66n5 _1iti"
            }), i.jsx("div", {
                children: b("ReasonReact.bs").element(void 0, void 0, b("ChatTabMenu.bs").make(t, v, j, w, r, z, c, f, e, d, y, A, u, [])),
                className: "_66n5"
            }), i.jsx("div", {
                children: i.createElement(b("FantaCloseActionButton.bs").make, {
                    iconStyle: u,
                    onClose: n,
                    isFocused: e
                }),
                className: "_66n5"
            })],
            className: "_69ae"
        }) : i.jsx("div", {
            children: i.jsx("div", {
                children: i.createElement(b("FantaCloseActionButton.bs").make, {
                    iconStyle: u,
                    onClose: n,
                    isFocused: e
                }),
                className: "_66n5"
            }),
            className: "_69ae"
        });
        a = b("bs_belt_Option").map(r, function(a) {
            return b("bs_belt_Set").fromArray(b("bs_belt_Array").map(a.toArray(), function(a) {
                return a[0]
            }), b("ParticipantId.bs"))
        });
        I = {
            children: function(a) {
                a = t !== void 0 ? !B && b("MessengerParticipantUtils.bs").findIntersection(v, a, b("bs_caml_option").valFromOption(t)).length !== 0 : !1;
                var c = b("FantaM4HeaderBottomDetail.bs").make({
                    isActive: a,
                    isMuted: b("bs_belt_Option").mapWithDefault(t, !1, function(a) {
                        return b("MercuryThreadInfo").isMuted(a)
                    }),
                    isNewMessageTab: y,
                    isPage: D !== void 0
                });
                return i.jsx("div", {
                    children: i.jsxs("div", {
                        children: [y ? null : i.createElement(b("FantaProfilePresence.bs").make, {
                            images: C,
                            imageSize: 28,
                            isActive: x !== void 0 ? !0 : a,
                            border: !0,
                            threadHref: M,
                            tooltip: H,
                            backgroundColor: J,
                            showMultiCompany: f,
                            showDoNotDisturb: g,
                            isCanonical: E,
                            threadFBID: G == null ? void 0 : b("bs_caml_option").some(G),
                            participants: r,
                            onHeaderClick: L
                        }), i.jsxs("div", {
                            children: [i.createElement(b("ChatDetailStack.bs").make, {
                                topDetail: N,
                                bottomDetail: c
                            }), O],
                            className: "_66n3" + (y ? " _6dtv" : "")
                        })],
                        className: "_66n2",
                        onClick: o
                    }),
                    className: K,
                    style: {
                        backgroundColor: J
                    },
                    onClick: p
                })
            }
        };
        a !== void 0 && (I.subscribeToIDs = b("bs_caml_option").valFromOption(a));
        return i.createElement(b("MessengerPresenceProvider.bs").make, I)
    }
    function a(a) {
        var c;
        return n({
            hasBlockedMessages: a.hasBlockedMessages,
            highlightNewMessage: a.highlightNewMessage,
            isFocused: a.isFocused,
            isMultiCompany: a.isMultiCompany,
            isDoNotDisturb: a.isDoNotDisturb,
            membershipParticipants: (c = b("bs_caml_option")).nullable_to_opt(a.membershipParticipants),
            onClose: a.onClose,
            focusOnClick: a.focusOnClick,
            onHeaderToggle: a.onHeaderToggle,
            onRTCNuxCloseButtonClick: a.onRTCNuxCloseButtonClick,
            participants: c.nullable_to_opt(a.participants),
            rtcNuxShown: a.rtcNuxShown,
            thread: c.nullable_to_opt(a.thread),
            threadHref: a.threadHref,
            viewer: a.viewer,
            pageUnsubscribeStatus: a.pageUnsubscribeStatus,
            pageIndicatorDescription: c.nullable_to_opt(a.pageIndicatorDescription),
            isNewMessageTab: a.isNewMessageTab,
            showMessengerReportNux: a.showMessengerReportNux,
            uri: a.uri,
            isMessengerOnlyUser: a.isMessengerOnlyUser
        })
    }
    c = 28;
    d = n;
    f.profile_image_size = c;
    f.getUpTo3Images = j;
    f.getProfileImages = k;
    f.getTooltip = l;
    f.isThreadMessageRequest = m;
    f.make = d;
    f.jsComponent = a
}
), null);
__d("XGroupCallNuxController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/groupcall/nux/", {
        action: {
            type: "String",
            required: !0
        }
    })
}
), null);
__d("FantaChatHeaderContainer.react", ["cx", "AsyncRequest", "Bootloader", "FantaM4Header.bs", "FantaTabActions", "MercuryIDs", "MercuryIgnoredBlockedParticipants.bs", "React", "ShortProfiles", "XGroupCallNuxController", "immutable", "performanceAbsoluteNow", "prop-types"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$1 = !1,
            d.state = {
                rtcNuxShown: !1
            },
            d.$4 = function(a) {
                d.props.onClose && d.props.onClose(),
                a.preventDefault()
            }
            ,
            d.$5 = function(a) {
                var c = a.target
                  , e = c && c.classList && c.classList.contains("button");
                c = c && (c.tagName === "svg" || c.ownerSVGElement != null);
                if (e || c)
                    return;
                a.stopPropagation();
                b("FantaTabActions").minimizeTab(d.props.threadID)
            }
            ,
            d.$6 = function(a) {
                a.stopPropagation(),
                b("FantaTabActions").minimizeTab(d.props.threadID)
            }
            ,
            d.$3 = function() {
                if (d.state.rtcNuxShown && d.$1) {
                    d.setState({
                        rtcNuxShown: !1
                    });
                    var a = b("XGroupCallNuxController").getURIBuilder().setString("action", "dismiss").getURI();
                    new (b("AsyncRequest"))(a).send()
                }
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.shouldComponentUpdate = function(a, b) {
            var c = this.props
              , d = this.state;
            return c.threadHref !== a.threadHref || c.highlightNewMessage !== a.highlightNewMessage || c.isFocused !== a.isFocused || c.viewer !== a.viewer || c.threadID !== a.threadID || c.isLastGroupTab !== a.isLastGroupTab || c.thread !== a.thread || d.rtcNuxShown !== b.rtcNuxShown || c.customColor !== a.customColor || c.blockedIDs !== a.blockedIDs || !c.membershipParticipants && !!a.membershipParticipants || !!c.membershipParticipants && !!a.membershipParticipants && !c.membershipParticipants.equals(a.membershipParticipants) || !c.participants && !!a.participants || !!c.participants && !!a.participants && !c.participants.equals(a.participants)
        }
        ;
        d.componentDidMount = function() {
            var a = this
              , c = (h || (h = b("performanceAbsoluteNow")))();
            b("Bootloader").loadModules(["QuickPerformanceLogger", "MessengerWebQuickLogModule"], function(b, d) {
                b.markerPoint(d.FIRSTCHATTABOPEN_WWW, "mount_header", JSON.stringify({
                    isNewMessageTab: a.props.isNewMessageTab,
                    hasThread: !!a.props.thread
                }), 0, c)
            }, "FantaChatHeaderContainer.react");
            this.$1 = !0;
            this.$2()
        }
        ;
        d.componentWillUnmount = function() {
            this.$3(),
            this.$1 = !1
        }
        ;
        d.render = function() {
            var a = this.props
              , c = a.blockedIDs
              , d = a.highlightNewMessage
              , e = a.isFocused
              , f = a.isNewMessageTab
              , g = a.membershipParticipants
              , h = a.pageIndicatorDescription
              , j = a.participants
              , k = a.thread
              , l = a.threadHref
              , m = a.threadID
              , n = a.uri;
            a = a.viewer;
            var o = this.state.rtcNuxShown;
            c = !!k && b("MercuryIgnoredBlockedParticipants.bs").qualifiesAs(a, c, k);
            var p = !!k && k.page_unsubscribe_status, q;
            m = b("MercuryIDs").getUserIDFromThreadID(m);
            m && (q = b("ShortProfiles").getNow(m));
            m = q && q.is_messenger_only;
            return i.jsx("div", {
                className: "clearfix titlebar",
                children: i.jsx(b("FantaM4Header.bs").jsComponent, {
                    hasBlockedMessages: c,
                    highlightNewMessage: d,
                    isMessengerOnlyUser: m,
                    isFocused: e,
                    isMultiCompany: this.props.isMultiCompany,
                    isDoNotDisturb: this.props.isDoNotDisturb,
                    isNewMessageTab: !!f,
                    membershipParticipants: g,
                    onClose: this.$4,
                    onHeaderToggle: this.$5,
                    onMinimizeButtonClick: this.$6,
                    onRTCNuxCloseButtonClick: this.$3,
                    pageUnsubscribeStatus: p,
                    pageIndicatorDescription: h,
                    participants: j,
                    rtcNuxShown: o,
                    showMessengerReportNux: !0,
                    thread: k,
                    focusOnClick: this.props.focusOnClick,
                    threadHref: l,
                    uri: n,
                    viewer: a
                })
            })
        }
        ;
        d.$2 = function() {
            var a = this;
            if (this.props.isLastGroupTab) {
                var c = b("XGroupCallNuxController").getURIBuilder().setString("action", "should_show").getURI();
                new (b("AsyncRequest"))(c).setHandler(function(b) {
                    b = b.payload.shouldShow;
                    a.$1 && a.setState({
                        rtcNuxShown: b
                    })
                }).send()
            }
        }
        ;
        return c
    }(i.Component);
    e.exports = a;
    a.propTypes = {
        blockedIDs: (c = b("prop-types")).any,
        customColor: c.string,
        highlightNewMessage: c.bool,
        isFocused: c.bool.isRequired,
        isLastGroupTab: c.bool.isRequired,
        onClose: c.func.isRequired,
        focusOnClick: c.func.isRequired,
        thread: c.object,
        threadID: c.string.isRequired,
        uri: c.string,
        viewer: c.string.isRequired
    }
}
), null);
__d("FantaConversation.react", ["Bootloader", "ChatConversation.react", "CurrentUser", "JSResource", "MercuryIDs", "MessengerHotLikePreviewEvents", "React", "StickersTypedLogger", "SubscriptionsHandler", "emptyFunction", "promiseDone", "prop-types", "shallowArrayEqual"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(c) {
            var d;
            d = a.call(this, c) || this;
            d.$3 = function(a) {
                d.props.threadID === a && d.setState({
                    likePreview: null
                })
            }
            ;
            d.$4 = function() {
                b("promiseDone")(b("JSResource")("FantaTabSheetActions").__setRef("FantaConversation.react").load().then(function(a) {
                    return a.openSolidReactionSheet(d.props.threadID)
                }))
            }
            ;
            d.$5 = function(a, c) {
                if (!a)
                    return;
                new (b("StickersTypedLogger"))().setEvent("click_sticker").setPackid(a).setStickerid(c).log();
                b("Bootloader").loadModules(["StickersPackInTrayQuery", "StickersActions", "StickersStoreController"], function(b, c, e) {
                    b.onIsPackInTray(a, "messages", function(b) {
                        b.in_sticker_tray ? (c.selectTrayPack(a),
                        c.showStickerFlyout(d.props.threadID)) : e.showStore(a)
                    })
                }, "FantaConversation.react")
            }
            ;
            d.state = {
                likePreview: null
            };
            d.$1 = new (b("SubscriptionsHandler"))();
            return d
        }
        var d = c.prototype;
        d.shouldComponentUpdate = function(a, c) {
            var d = this.props
              , e = this.state;
            return !b("shallowArrayEqual")(d.messages, a.messages) || d.threadID !== a.threadID || d.thread !== a.thread || e.likePreview !== c.likePreview
        }
        ;
        d.componentDidMount = function() {
            this.$2()
        }
        ;
        d.componentWillUnmount = function() {
            this.$1.release()
        }
        ;
        d.$2 = function() {
            var a = this, c;
            this.$1.addSubscriptions((c = b("MessengerHotLikePreviewEvents")).addListener(c.START, function(b, c) {
                a.props.threadID === c && a.setState({
                    likePreview: b
                })
            }), c.addListener(c.STOP, this.$3), c.addListener(c.STOP_EMOJI, this.$3), c.addListener(c.REMOVE, this.$3))
        }
        ;
        d.render = function() {
            var a = this
              , c = this.props.messages
              , d = this.props
              , e = d.forGameChat
              , f = d.onLoadMoreMessages
              , h = d.thread;
            d = d.threadID;
            var i = this.state.likePreview
              , j = b("CurrentUser").getID();
            i && (c = [].concat(c, [i]));
            return h ? g.jsx(b("ChatConversation.react"), {
                forGameChat: e,
                isCanonical: b("MercuryIDs").isCanonical(d),
                loadMoreMessages: f,
                maxBubbleWidth: 181 - this.props.scrollbarPadding,
                messages: c,
                onReactionSwap: this.$4,
                onAttachmentLoad: function() {
                    return a.props.onAttachmentLoad()
                },
                onMount: b("emptyFunction"),
                onStickerClick: this.$5,
                readReceipts: this.props.readReceipts,
                ref: "conversation",
                thread: h,
                threadID: d,
                viewer: j
            }) : g.jsx("div", {})
        }
        ;
        d.getMessageList = function() {
            return this.refs.conversation && this.refs.conversation.getMessageList()
        }
        ;
        return c
    }(g.Component);
    e.exports = a;
    a.propTypes = {
        forGameChat: (c = b("prop-types")).bool.isRequired,
        onLoadMoreMessages: c.func.isRequired,
        scrollbarPadding: c.number,
        thread: c.object,
        threadID: c.string.isRequired
    }
}
), null);
__d("M4ThreadFillDetect.bs", ["bs_caml_builtin_exceptions"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a) {
        return a.style
    }
    function c(a, b) {
        a.appendChild(b);
        return 0
    }
    try {
        d = document.createElement("div");
        e = document.createElement("div");
        var g = document.createElement("div")
          , h = document.createElement("div")
          , i = document.createElement("div")
          , j = document.createElement("div")
          , k = document.createElement("div")
          , l = document.createElement("table");
        d.appendChild(e);
        d.appendChild(k);
        e.appendChild(g);
        k.appendChild(l);
        g.appendChild(h);
        h.appendChild(i);
        h.appendChild(j);
        d.style.position = "absolute";
        d.style.marginLeft = "-999px";
        d.style.contain = "layout";
        e.style.height = "200px";
        e.style.display = "flex";
        e.style.visibility = "hidden";
        e.style.flexDirection = "column";
        e.style.position = "relative";
        g.style.flexBasis = "0px";
        g.style.flexGrow = "1";
        g.style.flexShrink = "0";
        g.style.position = "relative";
        h.style.display = "flex";
        h.style.flexDirection = "column";
        h.style.minHeight = "100%";
        i.style.flexGrow = "1";
        j.style.height = "50px";
        k.style.height = "200px";
        k.style.visibility = "hidden";
        k.style.position = "relative";
        l.style.minHeight = "100%";
        e = document.body;
        e.appendChild(d);
        g = i.clientHeight === 150;
        h = l.clientHeight === 200;
        document.body.removeChild(d);
        j = g ? 0 : h ? 1 : 2
    } catch (a) {
        if (a === b("bs_caml_builtin_exceptions").not_found)
            j = 3;
        else
            throw a
    }
    k = j === 2 || j === 1 ? 1 : 0;
    e = k ? "TABLE" : "FLEX";
    f.getStylesheet = a;
    f.appendChild = c;
    f.measuredTechnique = j;
    f.technique = k;
    f.forJS = e
}
), null);
__d("FantaThread.react", ["cx", "M4ThreadFillDetect.bs", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("M4ThreadFillDetect.bs").forJS
      , i = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.setRef = function(a) {
                c.$1 = a,
                typeof c.props.scrollRef === "function" && c.props.scrollRef(a)
            }
            ,
            b) || babelHelpers.assertThisInitialized(c)
        }
        var c = b.prototype;
        c.render = function() {
            var a = this.props
              , b = a.children;
            a = a.spacerContent;
            return i.jsx("div", {
                className: "_1i6a",
                onClick: this.props.onClick,
                children: i.jsx("div", {
                    className: "_4po3" + (h === "FLEX" ? " _4poa" : "") + (h === "TABLE" ? " _4po4" : ""),
                    ref: this.setRef,
                    children: i.jsxs("div", {
                        className: "_4po5",
                        children: [i.jsx("div", {
                            className: "_4po6",
                            children: i.jsx("div", {
                                className: "_4po7",
                                children: a
                            })
                        }), i.jsx("div", {
                            className: "_4po8",
                            children: i.jsx("div", {
                                className: "_4po9",
                                children: b
                            })
                        })]
                    })
                })
            })
        }
        ;
        return b
    }(i.Component);
    e.exports = a
}
), null);
__d("MercuryLastMessageIndicator.react", ["cx", "fbt", "CurrentUser", "MercuryIDs", "MercuryViewer", "MessengerParticipants.bs", "MessengerReadReceipt.bs", "MessengerTextWithEmoticons.react", "React", "TooltipData", "XWorkplaceMarketingDefaultController", "emptyFunction", "formatDate", "immutable", "joinClasses", "prop-types"], (function(a, b, c, d, e, f, g, h) {
    var i = b("React")
      , j = b("immutable").Set
      , k = function(a, c, d) {
        a = b("MessengerReadReceipt.bs").getSeenTimestamp(a, d, c[0]);
        d = a.action * .001;
        return {
            seenTimestamp: d,
            seenByData: null
        }
    }
      , l = function(a, c, d) {
        var e = {};
        for (var f = 0; f < a.length; f++) {
            var g = a[f];
            e[g] = b("MessengerParticipants.bs").getNow(g)
        }
        g = null;
        c && c.custom_nickname && (g = c.custom_nickname);
        f = {};
        var h = Object.keys(e);
        for (var i = 0; i < h.length; i++) {
            var j = h[i], k = e[j], l;
            !k ? l = b("MessengerParticipants.bs").getDefaultName() : (l = k.short_name,
            g && g[k.fbid] && (l = g[k.fbid]));
            f[j] = l
        }
        var m;
        k = !1;
        j = !1;
        n(a, d, c) ? j = !0 : a.length == 1 ? m = " " + f[a[0]] : a.length == 2 ? m = " " + f[a[0]] + ", " + f[a[1]] : a.length == 3 ? m = " " + f[a[0]] + ", " + f[a[1]] + ", " + f[a[2]] : a.length > 3 && (m = " " + f[a[0]] + ", " + f[a[1]] + ", ",
        k = !0);
        return {
            seenTimestamp: null,
            seenByData: {
                seenByAll: j,
                text: m,
                showTooltip: k,
                seenBy: a
            }
        }
    }
      , m = function(a, c, d, e) {
        e = b("MessengerReadReceipt.bs").getSeenBy(a, e, !0);
        if (e.length === 0)
            return {
                seenTimestamp: null,
                seenByData: null
            };
        var f = b("MercuryIDs").getUserIDFromThreadID(d);
        if (f)
            return k(a, e, d);
        else
            return l(e, c)
    }
      , n = function(a, c, d) {
        var e = d ? d.participants.length : 0;
        a = a.length;
        c && c.author != b("MercuryViewer").getID() && (!d || d.participants.indexOf(c.author) > -1) && a++;
        return e > 2 && a >= e - 1
    };
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.state = {
                seenTimestamp: null,
                seenByData: null
            },
            b) || babelHelpers.assertThisInitialized(c)
        }
        c.getDerivedStateFromProps = function(a, b) {
            return m(a.readReceipts, a.thread, a.threadID, a.lastMessage)
        }
        ;
        var d = c.prototype;
        d.shouldComponentUpdate = function(a, b) {
            if (a.thread !== this.props.thread || a.threadID !== this.props.threadID || a.lastMessage !== this.props.lastMessage || a.isTyping !== this.props.isTyping || a.readReceipts !== this.props.readReceipts || b.seenTimestamp !== this.state.seenTimestamp)
                return !0;
            a = this.state.seenByData;
            b = b.seenByData;
            if (!a && !b)
                return !1;
            if (!a || !b)
                return !0;
            if (a.seenByAll !== b.seenByAll || a.showTooltip !== b.showTooltip || a.text !== b.text)
                return !0;
            return !j(a.seenBy).equals(j(b.seenBy)) ? !0 : !1
        }
        ;
        d.componentDidUpdate = function() {
            if (!this.isVisible())
                return;
            this.props.indicatorDidShow && this.props.indicatorDidShow()
        }
        ;
        d.componentWillUnmount = function() {
            this.$1 && this.$1.release()
        }
        ;
        d.$2 = function() {
            return !this.props.lastMessage ? [] : this.props.lastMessage.source_tags || this.props.lastMessage.tags || []
        }
        ;
        d.$3 = function() {
            if (this.props.isTyping)
                return i.jsxs("div", {
                    className: this.$4([]),
                    children: [i.jsx("div", {
                        className: "_510h"
                    }), i.jsx("span", {
                        className: "_510f",
                        ref: "text",
                        children: "\xa0"
                    })]
                });
            var a = this.$2()
              , c = this.state.seenByData
              , d = this.state.seenTimestamp;
            if (c)
                return i.jsxs("div", {
                    className: this.$4(a),
                    children: [i.jsx("div", {
                        className: "_510h"
                    }), i.jsx("span", {
                        className: "_510f",
                        children: this.$5(c)
                    })]
                });
            else if (d)
                return i.jsxs("div", {
                    className: this.$4(a),
                    children: [i.jsx("div", {
                        className: "_510h"
                    }), i.jsx("span", {
                        className: "_510f",
                        ref: "text",
                        children: this.$6(d)
                    })]
                });
            else
                return i.jsx("div", {
                    className: this.$4(a),
                    children: b("CurrentUser").isWorkUser() ? i.jsxs(i.Fragment, {
                        children: [i.jsx("div", {
                            className: "_510h"
                        }), i.jsx("span", {
                            className: "_510f",
                            ref: "text",
                            children: this.$7(a)
                        })]
                    }) : null
                })
        }
        ;
        d.render = function() {
            return i.jsx("div", {
                className: "_4gd0",
                children: this.$3()
            })
        }
        ;
        d.$6 = function(a) {
            var c = Date.now() * .001, d;
            a < c - 518400 ? d = "M j" : a < c - 86400 ? d = "D g:ia" : d = "g:ia";
            return h._("\u0110\u00e3 xem l\u00fac {timestamp}", [h._param("timestamp", b("formatDate")(a, d))])
        }
        ;
        d.$7 = function(a) {
            if (a.includes("source:messenger"))
                return i.jsx("a", {
                    href: "https://www.workplace.com/features/workplace-chat",
                    className: "fcg",
                    target: "_blank",
                    children: h._("\u0110\u01b0\u1ee3c g\u1eedi t\u1eeb Chat tr\u00ean Workplace")
                });
            else if (a.includes("source:mobile")) {
                var c = "/workplace/mobile";
                return i.jsx("a", {
                    href: c,
                    className: "fcg",
                    target: "_blank",
                    children: h._("G\u1eedi t\u1eeb \u0111i\u1ec7n tho\u1ea1i di \u0111\u1ed9ng")
                })
            } else if (a.includes("source:email"))
                return i.jsx("span", {
                    children: h._("G\u1eedi t\u1eeb email")
                });
            else if (a.includes("source:workchat:desktop")) {
                c = b("XWorkplaceMarketingDefaultController").getURIBuilder().setString("path", "chat-app").setString("ref", "last-message-indicator").getURI();
                return i.jsx("a", {
                    href: c,
                    className: "fcg",
                    target: "_blank",
                    children: h._("Sent from the desktop app")
                })
            }
            return null
        }
        ;
        d.$4 = function(a) {
            var c = this.props.lastMessage && this.props.lastMessage.author && b("MercuryViewer").isViewer(this.props.lastMessage.author);
            c = "_510g" + (c ? " _510e" : "");
            var d = null;
            this.props.isTyping ? d = null : this.state.seenByData !== null || this.state.seenTimestamp !== null ? d = "seen" : a.includes("source:messenger") || a.includes("source:mobile") ? d = "sentFromMobile" : a.includes("source:workchat:desktop") ? d = "sentFromDesktop" : a.includes("source:email") && (d = "sentFromEmail");
            return b("joinClasses")(c, d)
        }
        ;
        d.isVisible = function() {
            var a = this.$2();
            return a.includes("source:messenger") || a.includes("source:mobile") || a.includes("source:email") || a.includes("source:workchat:desktop") ? !0 : this.state.seenTimestamp !== null || this.state.seenByData !== null
        }
        ;
        d.$5 = function(a) {
            var c = a.seenByAll;
            if (c)
                return h._("M\u1ecdi ng\u01b0\u1eddi \u0111\u00e3 xem");
            c = a.text;
            if (!c)
                return null;
            c = i.jsx(b("MessengerTextWithEmoticons.react"), {
                renderEmoji: !0,
                renderEmoticons: !0,
                text: c
            });
            var d = a.showTooltip;
            if (!d)
                return h._("{names} \u0111\u00e3 xem", [h._param("names", c)]);
            else {
                d = this.$8(a);
                return h._("{names}{=num more link} \u0111\u00e3 xem", [h._param("names", c), h._param("=num more link", d)])
            }
        }
        ;
        d.$8 = function(a) {
            if (!a.text || !a.showTooltip)
                return null;
            var c = {}
              , d = 0
              , e = null;
            b("MessengerParticipants.bs").getMulti(a.seenBy, function(b) {
                e = a.seenBy.map(function(a) {
                    return b[a].name
                }).join("\r\n"),
                d = Object.keys(b).length - 2
            });
            c = Object.assign({
                "data-tooltip-alignh": "center"
            }, b("TooltipData").propsFor(e, "above"));
            var f = h._({
                "*": "{num} kh\u00e1c"
            }, [h._param("num", d, [0])]);
            return i.jsx("span", babelHelpers["extends"]({
                className: "more"
            }, c, {
                children: f
            }))
        }
        ;
        return c
    }(i.Component);
    e.exports = a;
    a.propTypes = {
        indicatorDidShow: (c = b("prop-types")).func,
        lastMessage: c.object,
        readReceipts: c.any,
        threadID: c.string.isRequired,
        isTyping: c.bool.isRequired
    };
    a.defaultProps = {
        indicatorDidShow: b("emptyFunction")
    }
}
), null);
__d("MercuryQuickReply.react", ["cx", "BootloadedComponent.react", "JSResource", "MercuryIDs", "MessengerQuickCamOrigins", "MessengerQuickReplyUtils", "MessengerUserProfileLocationUtils", "MessengerViewerContactMethodsWebGraphQLQuery", "React", "WebGraphQL", "XUISpinner.react", "promiseDone", "prop-types"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.state = {
                viewerEmail: null,
                viewerPhone: null,
                viewerState: null,
                viewerZipCode: null
            },
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            this.$1(this.props.lastMessage) !== null && this.props.quickReplyDidShow()
        }
        ;
        d.componentDidUpdate = function(a) {
            this.$1(this.props.lastMessage) !== null && this.$1(a.lastMessage) === null && this.props.quickReplyDidShow(),
            this.$2(this.props.lastMessage)
        }
        ;
        d.render = function() {
            var a = this
              , c = this.props.lastMessage
              , d = b("MercuryIDs").getParticipantIDFromUserID(this.props.viewer);
            if (!c || c.author === d)
                return null;
            d = this.$1(c);
            if (Array.isArray(d)) {
                var e = d.every(function(b) {
                    return b.content_type === "user_email" && a.state.viewerEmail === null || b.content_type === "user_phone_number" && a.state.viewerPhone === null || b.content_type === "user_state" && a.state.viewerState === null || b.content_type === "user_zip_code" && a.state.viewerZipCode === null
                });
                if (!e) {
                    e = b("MessengerQuickReplyUtils").localizeTitleIfNecessary(d);
                    return h.jsx("div", {
                        className: "_419m",
                        children: h.jsx(b("BootloadedComponent.react"), {
                            bootloadLoader: b("JSResource")("MessengerBotsQuickReplyButtonList.react").__setRef("MercuryQuickReply.react"),
                            bootloadPlaceholder: h.jsx(b("XUISpinner.react"), {
                                className: "_5h-9"
                            }),
                            isSponsored: c.is_sponsored,
                            messageId: c.message_id,
                            options: e,
                            pageId: b("MercuryIDs").getUserIDFromParticipantID(c.author),
                            threadID: c.thread_id,
                            quickCamOriginLocation: this.props.quickCamOriginLocation,
                            viewer: this.props.viewer,
                            viewerEmail: this.state.viewerEmail,
                            viewerPhone: this.state.viewerPhone,
                            viewerState: this.state.viewerState,
                            viewerZipCode: this.state.viewerZipCode
                        })
                    })
                }
            }
            return null
        }
        ;
        d.$1 = function(a) {
            a = a && a.platform_xmd && JSON.parse(a.platform_xmd);
            return Array.isArray(a && a.quick_replies) ? a && a.quick_replies : null
        }
        ;
        d.$2 = function(a) {
            var c = this;
            a = this.$1(a);
            if (!a || a.length === 0)
                return;
            a.some(function(a) {
                return a.content_type === "user_state" || a.content_type === "user_zip_code"
            }) && (!this.state.viewerState || !this.state.viewerZipCode) && b("promiseDone")(b("MessengerUserProfileLocationUtils").FetchMessengerUserRegionAndPostalCode(), function(a) {
                var b = a == null ? void 0 : a.region;
                a = a == null ? void 0 : a.postal_code;
                c.setState({
                    viewerState: b,
                    viewerZipCode: a
                })
            });
            a.some(function(a) {
                return a.content_type === "user_email" || a.content_type === "user_phone_number"
            }) && b("promiseDone")(b("WebGraphQL").exec(new (b("MessengerViewerContactMethodsWebGraphQLQuery"))({})), function(a) {
                var b;
                b = (b = a) != null ? (b = b.viewer) != null ? (b = b.user) != null ? b.all_phones : b : b : b;
                a = (a = a) != null ? (a = a.viewer) != null ? a.all_emails : a : a;
                var d = b ? b.find(function(a) {
                    return a.is_preferred
                }) : null;
                !d && b && (d = b[0]);
                b = a ? a.find(function(a) {
                    return a.is_primary
                }) : null;
                c.setState({
                    viewerEmail: (a = b) != null ? a.display_email : a,
                    viewerPhone: (b = d) != null ? (b = b.phone_number) != null ? b.universal_number : b : b
                })
            })
        }
        ;
        return c
    }(h.PureComponent);
    e.exports = a;
    a.propTypes = {
        quickReplyDidShow: (c = b("prop-types")).func.isRequired,
        lastMessage: c.object,
        quickCamOriginLocation: c.oneOf(b("MessengerQuickCamOrigins").getValues()).isRequired,
        threadID: c.string.isRequired,
        viewer: c.string.isRequired
    }
}
), null);
__d("MessengerTabsThreadSearchLoader", ["Promise", "Bootloader", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    f.getStoreEnforce = a;
    f.getActionsEnforce = c;
    f.isLoaded = d;
    f.load = e;
    a = null;
    f._store = a;
    c = null;
    f._actions = c;
    d = null;
    f._promise = d;
    function a() {
        b("nullthrows")(this._store, "Tab thread search store is not loaded");
        return this._store
    }
    function c() {
        b("nullthrows")(this._actions, "Tab thread search actions are not loaded");
        return this._actions
    }
    function d() {
        return this._store && this._actions
    }
    function e() {
        var a = this;
        this._promise || (this._promise = new (b("Promise"))(function(c) {
            b("Bootloader").loadModules(["MessengerThreadSearchActions", "MessengerTabsThreadSearchStore"], function(b, d) {
                a._store = d.get(),
                a._actions = b,
                c({
                    store: d,
                    actions: b
                })
            }, "MessengerTabsThreadSearchLoader")
        }
        ));
        return this._promise
    }
}
), null);
__d("FantaConversationScroller.react", ["ix", "csx", "cx", "fbt", "Animation", "Arbiter", "BootloadedComponent.react", "Bootloader", "ChatTypingIndicatorsWrapper.bs", "CurrentUser", "Event", "FantaAppStore", "FantaConversation.react", "FantaMessageActions", "FantaPageGreetingLoader.react", "FantaTabActions", "FantaThread.react", "Image.react", "JSResource", "Link.react", "MercuryAttachment", "MercuryConfig", "MercuryIDs", "MercuryLastMessageIndicator.react", "MercuryQuickReply.react", "MercuryShareAttachmentRenderLocations", "MessengerHotLikePreviewEvents", "MessengerQuickCamOrigins", "MessengerTabsThreadSearchLoader", "MessengerVideoAutoplayActions", "MessengerVideoAutoplayStore", "Parent", "React", "ReactDOM", "Scroll", "ScrollBoundaryContain", "Style", "SubscriptionsHandler", "TimeSlice", "WebMessengerConstants", "WorkBotLandingPageHelper", "XUIButton.react", "XUISpinner.react", "asset", "clearImmediate", "emptyFunction", "getElementPosition", "getPageIDFromThreadID", "gkx", "immutable", "isEventSupported", "joinClasses", "performanceAbsoluteNow", "promiseDone", "prop-types", "setImmediate", "shallowArrayEqual", "shallowEqual", "throttle"], (function(a, b, c, d, e, f, g, h, i, j) {
    "use strict";
    var k, l = b("React"), m = 0, n = 15, o = null, p = 20, q = 1e3;
    function r(a) {
        if (o === null) {
            var c = a.firstElementChild;
            if (c) {
                b("Style").set(a, "overflow", "scroll");
                var d = c.clientWidth;
                b("Style").set(a, "overflow", "hidden");
                c = c.clientWidth;
                o = Math.max(c - d, 0);
                b("Style").set(a, "overflow", "")
            } else
                o = 0
        }
        return o
    }
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(c) {
            var d;
            d = a.call(this, c) || this;
            d.$8 = [];
            d.state = {
                loadingMessages: !d.props.isEmptyLocalThread,
                scrollbarPadding: o === null ? n : o,
                hideLastMessageIndicator: !1,
                searchResults: null
            };
            d.$19 = function(a) {
                a = b("ReactDOM").findDOMNode(d.refs.scrollContainer);
                a && (d.$20(),
                d.$21() && !d.$22() && !d.$2 && !d.props.hasFetchedAll && !(d.state.searchResults && d.state.searchResults.mid) && (d.setState({
                    loadingMessages: !0
                }),
                d.props.onLoadMoreMessages()),
                d.$23(),
                d.$9())
            }
            ;
            d.$15 = function() {
                if (!d.refs || d.state.loadingMessages || !d.props.thread) {
                    d.$8 = [];
                    return
                }
                var a = b("ReactDOM").findDOMNode(d.refs.scrollContainer)
                  , c = b("getPageIDFromThreadID")(d.props.threadID);
                if (!a || !c) {
                    d.$8 = [];
                    return
                }
                var e = 10, f, g;
                try {
                    f = a.getBoundingClientRect(),
                    g = d.refs.conversation ? d.refs.conversation.getMessageList() : null
                } catch (a) {
                    return
                }
                if (!g || !f)
                    return;
                var h = [];
                d.$7.forEach(function(a) {
                    if (!g)
                        return;
                    var i = a.message_id
                      , j = g.getMessageElement(i);
                    if (j) {
                        j = j.getBoundingClientRect();
                        j.top > f.top - e && j.bottom < f.bottom + e && (h.push(i),
                        d.$8.includes(i) || b("Bootloader").loadModules(["MessengerAdsWebLogger", "MNAdsLoggerEventEnum"], function(b, d) {
                            b.log(a.ad_client_token, a.ad_id, d.MESSAGE_SEEN_THREAD, !0, i, c)
                        }, "FantaConversationScroller.react"))
                    }
                }, babelHelpers.assertThisInitialized(d));
                d.$8 = h
            }
            ;
            d.$25 = function() {
                d.$1 = null,
                b("FantaTabActions").scrollBottomChanged(d.props.threadID, d.$5, d.$26)
            }
            ;
            d.$26 = function() {
                d.$27(!1),
                d.$17()
            }
            ;
            d.$29 = function() {
                var a = (k || (k = b("performanceAbsoluteNow")))();
                b("Bootloader").loadModules(["QuickPerformanceLogger", "MessengerWebQuickLogModule"], function(b, c) {
                    return b.markerEnd(c.FIRSTCHATTABOPEN_WWW, "SUCCESS", 0, a)
                }, "FantaConversationScroller.react")
            }
            ;
            d.$32 = function(a) {
                a = b("Parent").byClass(a.target, "._1dlq");
                a || d.props.onFocus && d.props.onFocus()
            }
            ;
            d.$5 = !0;
            return d
        }
        var d = c.prototype;
        d.shouldComponentUpdate = function(a, c) {
            var d = this.props
              , e = this.state;
            return d.hasFetchedAll !== a.hasFetchedAll || d.isFocused !== a.isFocused || !b("shallowArrayEqual")(d.messages, a.messages) || d.showContextBanner !== a.showContextBanner || d.readReceipts !== a.readReceipts || d.thread !== a.thread || d.threadID !== a.threadID || e.loadingMessages !== c.loadingMessages || e.hideLastMessageIndicator !== c.hideLastMessageIndicator || !b("shallowEqual")(e.searchResults, c.searchResults) || d.jumpToMessage !== a.jumpToMessage
        }
        ;
        d.componentDidMount = function() {
            var a = this
              , c = (k || (k = b("performanceAbsoluteNow")))();
            b("Bootloader").loadModules(["QuickPerformanceLogger", "MessengerWebQuickLogModule"], function(b, d) {
                b.markerPoint(d.FIRSTCHATTABOPEN_WWW, "mount_conversation_scroller", JSON.stringify({
                    messageSize: a.props.messages.length,
                    hasThread: !!a.props.thread
                }), 0, c)
            }, "FantaConversationScroller.react");
            this.$6 = new (b("SubscriptionsHandler"))();
            this.$10();
            this.$11();
            this.$12();
            b("MessengerVideoAutoplayActions").updateStore(this.props.threadID, this.$13());
            this.setState({
                scrollbarPadding: r(this.refs.scrollContainer),
                searchResults: this.$14()
            });
            this.$9 = b("throttle")(this.$15, q);
            this.$7 = this.props.messages.filter(function(a) {
                return a.is_sponsored
            });
            this.$9();
            this.$16()
        }
        ;
        d.componentDidUpdate = function(a) {
            this.$12();
            if (this.$2) {
                var c = b("ReactDOM").findDOMNode(this.refs.scrollContainer);
                if (c) {
                    var d = this.$2 || 0;
                    c = c.scrollHeight - d;
                    this.scrollToPosition(c, !1)
                }
                this.$2 = null
            }
            if (!b("shallowArrayEqual")(a.messages, this.props.messages)) {
                b("MessengerVideoAutoplayActions").updateStore(this.props.threadID, this.$13());
                d = a.messages[a.messages.length - 1];
                c = this.props.messages[this.props.messages.length - 1];
                if (d !== c && c && c.author) {
                    a = b("MercuryIDs").getUserIDFromParticipantID(c.author);
                    a === b("CurrentUser").getID() && (this.scrollToBottom(!1),
                    this.$17())
                }
            }
            this.$18();
            this.$9()
        }
        ;
        d.componentWillUnmount = function() {
            this.$1 && b("clearImmediate")(this.$1),
            this.$6.release(),
            b("MessengerTabsThreadSearchLoader").isLoaded() && b("MessengerTabsThreadSearchLoader").getActionsEnforce().updateThreadState(this.props.threadID, null)
        }
        ;
        d.UNSAFE_componentWillReceiveProps = function(a) {
            var c = this.state.loadingMessages && a.messages.length > 0 && !b("shallowArrayEqual")(a.messages, this.props.messages);
            if (c || a.hasFetchedAll || a.showContextBanner) {
                this.setState({
                    loadingMessages: !1
                });
                c = b("ReactDOM").findDOMNode(this.refs.scrollContainer);
                if (c) {
                    var d = c.scrollHeight;
                    c = b("Scroll").getTop(c);
                    this.$2 = d - c
                }
            }
            this.$7 = a.messages.filter(function(a) {
                return a.is_sponsored
            })
        }
        ;
        d.$14 = function() {
            return b("MessengerTabsThreadSearchLoader").isLoaded() ? b("MessengerTabsThreadSearchLoader").getStoreEnforce().getThreadState(this.props.threadID) : null
        }
        ;
        d.$16 = function() {
            var a = this;
            b("MercuryConfig").M3CRE && b("promiseDone")(b("MessengerTabsThreadSearchLoader").load(), function(b) {
                var c = b.store;
                b.actions;
                a.$6.addSubscriptions(c.get().addListener("change", function() {
                    return a.setState({
                        searchResults: a.$14(),
                        loadingMessages: !1
                    })
                }))
            })
        }
        ;
        d.$12 = function(a) {
            var c = this;
            a === void 0 && (a = !1);
            this.$5 && b("TimeSlice").guard(function() {
                c.scrollToBottom(a)
            }, "post load chat animations", {
                propagationType: b("TimeSlice").PropagationType.ORPHAN
            })()
        }
        ;
        d.$23 = function() {
            var a = this.props.threadID
              , c = b("ReactDOM").findDOMNode(this.refs.scrollContainer);
            if (!c)
                return;
            var d;
            try {
                c = c.getBoundingClientRect(),
                d = this.refs.conversation ? this.refs.conversation.getMessageList() : null
            } catch (a) {
                return
            }
            if (!d || !c)
                return;
            var e = []
              , f = b("MessengerVideoAutoplayStore").getMessageIDs(a)
              , g = f || this.$13() || b("immutable").List();
            g.map(function(a) {
                var c = b("MercuryAttachment").getVideoElem(a, d);
                c && e.push([a, c.getBoundingClientRect()])
            });
            e.length && b("MessengerVideoAutoplayActions").onScroll(a, f ? null : g, b("immutable").Map(e), c)
        }
        ;
        d.$13 = function() {
            var a = this.props.messages.filter(function(a) {
                return b("MercuryAttachment").isSingleVideoAttachment(a) || b("MercuryAttachment").isSharedVideoAttachmentMessage(a)
            }).reverse().map(function(a) {
                return a.message_id
            });
            return b("immutable").List(a)
        }
        ;
        d.$24 = function(a, c) {
            var d = this.refs.conversation ? this.refs.conversation.getMessageList() : null;
            if (!d)
                return;
            var e = b("ReactDOM").findDOMNode(this.refs.scrollContainer)
              , f = b("ReactDOM").findDOMNode(this.refs.conversation);
            d = d.getMessageComponent(a);
            a = b("ReactDOM").findDOMNode(d);
            if (!a || !f || !e)
                return;
            f = f.getBoundingClientRect().top;
            a = a.getBoundingClientRect().top;
            a = Math.abs(a - f) - e.getBoundingClientRect().height / 2;
            this.$5 = !1;
            this.scrollToPosition(Math.max(a, 0), !1);
            b("CurrentUser").isWorkUser() && d.highlightMessage();
            var g = c;
            g && b("setImmediate")(function() {
                return g()
            })
        }
        ;
        d.scrollToBottom = function(a) {
            var c = b("ReactDOM").findDOMNode(this.refs.scrollContainer);
            c && this.scrollToPosition(c.scrollHeight, a)
        }
        ;
        d.scrollToPosition = function(a, c) {
            var d = b("ReactDOM").findDOMNode(this.refs.scrollContainer);
            if (!d)
                return;
            this.$4 && this.$4.stop();
            c ? this.$4 = new (b("Animation"))(d).to("scrollTop", a).ease(b("Animation").ease.end).duration(400).go() : b("Scroll").setTop(d, a)
        }
        ;
        d.$22 = function(a) {
            var c = b("ReactDOM").findDOMNode(this.refs.scrollContainer);
            if (!c)
                return !1;
            a = a === 0 ? 0 : a || p;
            return b("Scroll").getTop(c) + c.clientHeight >= c.scrollHeight - a
        }
        ;
        d.$21 = function() {
            var a = b("ReactDOM").findDOMNode(this.refs.scrollContainer);
            return !a ? !1 : b("Scroll").getTop(a) < a.clientHeight
        }
        ;
        d.$17 = function() {
            var a = this.$5;
            this.$22() ? this.$5 = !0 : this.$5 = !1;
            a !== this.$5 && (this.$1 = b("setImmediate")(this.$25))
        }
        ;
        d.$10 = function() {
            var a = this
              , c = b("ReactDOM").findDOMNode(this.refs.scrollContainer);
            if (!c)
                return;
            var d = b("isEventSupported")("mousewheel") ? "mousewheel" : b("isEventSupported")("wheel") ? "wheel" : "DOMMouseScroll"
              , e = function() {
                a.$17()
            }
              , f = function() {
                c.addEventListener(d, e, {
                    passive: !0
                })
            }
              , g = function() {
                c.removeEventListener(d, e, {
                    passive: !0
                })
            };
            this.$6.addSubscriptions(b("Arbiter").subscribe("overflow-applied-to-body", function() {
                return a.$12()
            }), b("Event").listen(c, "mousedown", e), b("Event").listen(c, "mouseup", e), b("Event").listen(c, "mouseenter", f), b("Event").listen(c, "mouseleave", g), {
                cancel: g
            }, b("Event").listen(c, "scroll", b("throttle")(this.$19, 50)));
            f = b("ScrollBoundaryContain").applyToElem(c);
            f && this.$6.addSubscriptions(f)
        }
        ;
        d.$11 = function() {
            var a = this, c;
            this.$6.addSubscriptions((c = b("MessengerHotLikePreviewEvents")).addListener(c.START, function(b, c) {
                a.props.threadID === c && (a.$27(!1),
                window.clearInterval(a.$3),
                a.$3 = window.setInterval(function() {
                    a.$27(!1)
                }, 50))
            }), c.addListener(c.FINISH_ANIMATION, function(b) {
                window.clearInterval(a.$3)
            }), c.addListener(c.FINISH_EMOJI_ANIMATION, function(b) {
                window.clearInterval(a.$3)
            }), c.addListener(c.REMOVE, function(b) {
                a.props.threadID === b && window.clearInterval(a.$3)
            }))
        }
        ;
        d.$28 = function(a) {
            a = a && a.platform_xmd && JSON.parse(a.platform_xmd);
            return a && a.user_input
        }
        ;
        d.$30 = function(a) {
            var c = b("gkx")("964442");
            if (c) {
                c = this.$28(a);
                a = b("FantaAppStore").getState().mercury.userInputRequest.isUserInputRequested;
                c && !a ? b("FantaMessageActions").updateUserInputRequested(!0, c.data.num_results, c.type) : !c && !!a && b("FantaMessageActions").updateUserInputRequested(!1, m, null)
            }
            return
        }
        ;
        d.$31 = function() {
            return b("CurrentUser").isWorkUser() ? b("WorkBotLandingPageHelper").shouldShowBotLandingPageArray(this.props.messages) : this.props.messages.length === 0
        }
        ;
        d.render = function() {
            var a = this
              , c = this.props
              , d = c.forGameChat
              , e = c.hasFetchedAll
              , f = c.isEmptyLocalThread
              , g = c.messages
              , h = c.showContextBanner
              , i = c.thread;
            c = c.threadID;
            var k = b("CurrentUser").getID();
            f = f || e || h;
            e = this.state.loadingMessages || !i ? l.jsx("div", {
                className: "_1xdl",
                children: l.jsx(b("XUISpinner.react"), {
                    background: "light",
                    className: "loading",
                    size: "small"
                })
            }) : null;
            e || (this.$29(),
            this.$29 = b("emptyFunction"));
            h = function() {
                return a.$12()
            }
            ;
            var m = this.$31() ? l.jsx(b("FantaPageGreetingLoader.react"), {
                thread: i,
                threadID: c
            }) : null;
            f = f ? l.jsx(b("BootloadedComponent.react"), {
                bootloadPlaceholder: l.jsx("div", {}),
                bootloadLoader: b("JSResource")("MessengerContextBannerContainer.react").__setRef("FantaConversationScroller.react"),
                isContinuation: !1,
                location: b("MercuryShareAttachmentRenderLocations").CHAT,
                viewer: k,
                thread: i,
                threadID: c
            }) : null;
            var n = l.jsx("div", {
                className: b("joinClasses")("accessible_elem", "_2kwv"),
                children: j._("B\u1eaft \u0111\u1ea7u cu\u1ed9c tr\u00f2 chuy\u1ec7n")
            })
              , o = l.jsx("div", {
                className: b("joinClasses")("accessible_elem", "_2kwv"),
                children: j._("K\u1ebft th\u00fac cu\u1ed9c tr\u00f2 chuy\u1ec7n")
            });
            this.$30(g[g.length - 1]);
            var p = null
              , q = this.state.searchResults;
            if (q && q.messages) {
                var r = j._("T\u1ea3i th\u00eam...");
                p = l.jsxs(l.Fragment, {
                    children: [q.upExhausted ? null : l.jsx("div", {
                        className: "_7fim",
                        children: l.jsx(b("XUIButton.react"), {
                            className: "_41jf",
                            label: r,
                            onClick: function() {
                                return b("MessengerTabsThreadSearchLoader").isLoaded() && b("MessengerTabsThreadSearchLoader").getActionsEnforce().getMoreSearchContext(b("WebMessengerConstants").MORE_SEARCH_CONTEXT_UP, a.props.threadID)
                            },
                            type: "primary",
                            use: "default"
                        })
                    }), l.jsx(b("FantaConversation.react"), {
                        forGameChat: d,
                        onAttachmentLoad: h,
                        scrollbarPadding: this.state.scrollbarPadding,
                        ref: "conversation",
                        messages: q.messages,
                        onLoadMoreMessages: b("MessengerTabsThreadSearchLoader").isLoaded() && b("MessengerTabsThreadSearchLoader").getActionsEnforce().getMoreSearchContext,
                        hasFetchedAll: this.props.hasFetchedAll,
                        isFocused: this.props.isFocused,
                        onFocus: this.props.onFocus,
                        readReceipts: this.props.readReceipts,
                        showContextBanner: this.props.showContextBanner,
                        thread: this.props.thread,
                        threadID: this.props.threadID
                    }), q.downExhausted ? null : l.jsx("div", {
                        className: "_7fim",
                        children: l.jsx(b("XUIButton.react"), {
                            className: "_41jf",
                            label: r,
                            onClick: function() {
                                return b("MessengerTabsThreadSearchLoader").isLoaded() && b("MessengerTabsThreadSearchLoader").getActionsEnforce().getMoreSearchContext(b("WebMessengerConstants").MORE_SEARCH_CONTEXT_DOWN, a.props.threadID)
                            },
                            type: "primary",
                            use: "default"
                        })
                    }), l.jsx(b("ChatTypingIndicatorsWrapper.bs").jsComponent, {
                        threadID: c,
                        indicatorClass: void 0,
                        indicatorsWillShow: b("emptyFunction"),
                        indicatorsDidShow: function() {
                            return a.setState({
                                hideLastMessageIndicator: !0
                            }, function() {
                                a.$12(!0)
                            })
                        },
                        indicatorsDidHide: function() {
                            return a.setState({
                                hideLastMessageIndicator: !1
                            })
                        },
                        rootClassName: void 0,
                        viewer: k
                    })]
                })
            } else
                p = l.jsxs(l.Fragment, {
                    children: [l.jsx(b("FantaConversation.react"), babelHelpers["extends"]({
                        forGameChat: d,
                        onAttachmentLoad: h,
                        scrollbarPadding: this.state.scrollbarPadding,
                        ref: "conversation"
                    }, this.props)), l.jsx(b("MercuryQuickReply.react"), {
                        lastMessage: g.length > 0 ? g[g.length - 1] : void 0,
                        threadID: c,
                        quickReplyDidShow: function() {
                            return a.$12(!0)
                        },
                        viewer: k,
                        quickCamOriginLocation: b("MessengerQuickCamOrigins").CHAT_TAB
                    }), l.jsx(b("ChatTypingIndicatorsWrapper.bs").jsComponent, {
                        threadID: c,
                        indicatorClass: void 0,
                        indicatorsWillShow: b("emptyFunction"),
                        indicatorsDidShow: function() {
                            return a.setState({
                                hideLastMessageIndicator: !0
                            }, function() {
                                a.$12(!0)
                            })
                        },
                        indicatorsDidHide: function() {
                            return a.setState({
                                hideLastMessageIndicator: !1
                            })
                        },
                        rootClassName: void 0,
                        viewer: k
                    }), l.jsx(b("MercuryLastMessageIndicator.react"), {
                        isTyping: this.state.hideLastMessageIndicator,
                        indicatorDidShow: function() {
                            a.$12(!0)
                        },
                        indicatorWillShow: b("emptyFunction"),
                        lastMessage: g.length > 0 ? g[g.length - 1] : null,
                        readReceipts: this.props.readReceipts,
                        thread: i,
                        threadID: c
                    })]
                });
            return l.jsxs(b("FantaThread.react"), {
                onClick: this.$32,
                spacerContent: l.jsxs(l.Fragment, {
                    children: [n, f, m, e]
                }),
                scrollRef: function(b) {
                    a.refs.scrollContainer = b
                },
                children: [p, o, this.$33()]
            })
        }
        ;
        d.$33 = function() {
            var a = this;
            return this.state.searchResults && this.state.searchResults.messages ? l.jsx(b("Link.react"), {
                className: "_2llh",
                onClick: function() {
                    b("MessengerTabsThreadSearchLoader").isLoaded() && b("MessengerTabsThreadSearchLoader").getActionsEnforce().updateThreadState(a.props.threadID, null),
                    a.$5 = !0
                },
                children: l.jsx(b("Image.react"), {
                    className: "_2llt",
                    src: g("415098")
                })
            }) : null
        }
        ;
        d.$18 = function() {
            var a = this
              , c = this.props.jumpToMessage;
            if (!c)
                return;
            this.props.messages.some(function(a) {
                return a.message_id === c
            }) || this.state.searchResults && this.state.searchResults.messages && this.state.searchResults.messages.some(function(a) {
                return a.message_id === c
            }) ? this.$24(c, function() {
                return b("FantaTabActions").wipeJumpToMessage(a.props.threadID)
            }) : b("MessengerTabsThreadSearchLoader").isLoaded() && b("MessengerTabsThreadSearchLoader").getActionsEnforce().updateThreadState(this.props.threadID, c)
        }
        ;
        d.$20 = function() {
            var a = b("ReactDOM").findDOMNode(this.refs.scrollContainer);
            if (!a)
                return;
            var c = b("getElementPosition")(a);
            b("Arbiter").inform("chatScrolled/" + this.props.threadID, {
                scrollTop: b("Scroll").getTop(a),
                top: c.y,
                viewHeight: c.height
            })
        }
        ;
        d.$27 = function(a) {
            var c = b("ReactDOM").findDOMNode(this.refs.scrollContainer);
            c && this.$34(c.scrollHeight, a)
        }
        ;
        d.$34 = function(a, c) {
            var d = b("ReactDOM").findDOMNode(this.refs.scrollContainer);
            this.$4 && this.$4.stop();
            if (!d)
                return;
            c === !0 ? this.$4 = new (b("Animation"))(d).to("scrollTop", a).ease(b("Animation").ease.end).duration(400).go() : b("Scroll").setTop(d, a)
        }
        ;
        return c
    }(l.Component);
    e.exports = a;
    a.propTypes = {
        forGameChat: (c = b("prop-types")).bool.isRequired,
        hasFetchedAll: c.bool.isRequired,
        isEmptyLocalThread: c.bool.isRequired,
        isFocused: c.bool.isRequired,
        onFocus: c.func,
        onLoadMoreMessages: c.func.isRequired,
        showContextBanner: c.bool,
        thread: c.object,
        threadID: c.string.isRequired,
        jumpToMessage: c.string
    }
}
), null);
__d("FantaCookieUtil", ["CurrentUser", "FantaConst", "MercuryIDs", "MessengerState.bs", "MWCount.re"], (function(a, b, c, d, e, f) {
    "use strict";
    f.convertCookieData = a;
    f.createCookieData = c;
    f._shouldDisableForCookie = d;
    f._getCookieKeys = e;
    var g = !0;
    function a(a, c, d) {
        var e = {
            tabs: [],
            focusedTabID: null,
            updatedTime: 0,
            interstitialData: d
        };
        d = [];
        var f = this._getCookieKeys();
        a = a || {};
        a[f.tabs] && (d = a[f.tabs]);
        var h = !1;
        d.forEach(function(a) {
            var d = !b("CurrentUser").isWorkUser() && !c ? !0 : !a.r;
            d || (h = !0);
            e.tabs.push({
                id: a.i,
                isMinimized: d,
                openCounter: a.o,
                focusCounter: a.f
            })
        });
        g && (h ? b("MWCount.re").Blue.Cookie.Lift.some() : b("MWCount.re").Blue.Cookie.Lift.none(),
        d.length == 0 ? b("MWCount.re").Blue.Cookie.Show.none() : d.length == 1 ? b("MWCount.re").Blue.Cookie.Show.one() : b("MWCount.re").Blue.Cookie.Show.many(),
        g = !1);
        if (c)
            for (var d = c.tabs.values(), i = Array.isArray(d), j = 0, d = i ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                var k;
                if (i) {
                    if (j >= d.length)
                        break;
                    k = d[j++]
                } else {
                    j = d.next();
                    if (j.done)
                        break;
                    k = j.value
                }
                k = k;
                b("MessengerState.bs").isEmptyLocalThread(b("CurrentUser").getID(), k.id) && e.tabs.push({
                    id: k.id,
                    isMinimized: k.isMinimized,
                    openCounter: k.openCounter,
                    focusCounter: k.focusCounter
                })
            }
        e.focusedTabID = a[f.focusedTabID];
        e.updatedTime = a[f.updatedTime];
        return e
    }
    function c(a, c) {
        var d = []
          , e = this._getCookieKeys();
        if (c[e.updatedTime] > a.updatedTime)
            return c;
        for (var f = a.tabs.values(), g = Array.isArray(f), h = 0, f = g ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
            var i;
            if (g) {
                if (h >= f.length)
                    break;
                i = f[h++]
            } else {
                h = f.next();
                if (h.done)
                    break;
                i = h.value
            }
            i = i;
            !b("MercuryIDs").isLocalThread(i.id) && !this._shouldDisableForCookie(i.id, i.entryPoint) && d.push({
                i: i.id,
                r: i.isMinimized ? void 0 : 1,
                o: i.openCounter,
                f: i.focusCounter
            })
        }
        c[e.tabs] = d;
        c[e.focusedTabID] = a.focusedTabID;
        c[e.updatedTime] = a.updatedTime;
        return c
    }
    function d(a, c) {
        if (!c.includes("fb_page:user_message_prompt"))
            return !1;
        c = b("MessengerState.bs").getThreadMessagesRangeNow(b("CurrentUser").getID(), a, 0, 1)[0];
        return c === void 0
    }
    function e() {
        var a = b("CurrentUser").isWorkUser();
        return {
            tabs: a ? b("FantaConst").cookieIDs.WORK_COOKIE_ID : b("FantaConst").cookieIDs.PERSONAL_COOKIE_ID,
            focusedTabID: a ? b("FantaConst").cookieIDs.WORK_FOCUS_COOKIE_ID : b("FantaConst").cookieIDs.PERSONAL_FOCUS_COOKIE_ID,
            updatedTime: a ? b("FantaConst").cookieIDs.WORK_TIME_COOKIE_ID : b("FantaConst").cookieIDs.PERSONAL_TIME_COOKIE_ID
        }
    }
}
), null);
__d("FantaDragAndDrop.react", ["Bootloader", "JSResource", "MercuryShareAttachmentRenderLocations", "MessengerEnvironment", "React", "prop-types", "emptyFunction", "ifRequired", "lazyLoadComponent"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = 144
      , i = b("lazyLoadComponent")(b("JSResource")("MercurySharePreview.react").__setRef("FantaDragAndDrop.react"));
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.$1 = function(a) {
                var b = c.props.composer;
                c.$4(function(c) {
                    c.removeSharePreview(a, b)
                })
            }
            ,
            c.$2 = function(a, b) {
                var d = c.props.composer;
                c.$4(function(c) {
                    c.loadedShareData(a, b, d)
                })
            }
            ,
            c.$3 = function(a) {
                var b = c.props.composer;
                c.$4(function(c) {
                    c.loadingShareData(a, b)
                })
            }
            ,
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            b("MessengerEnvironment").messengerui ? b("Bootloader").loadModules(["MessengerActions"], b("emptyFunction"), "FantaDragAndDrop.react") : b("Bootloader").loadModules(["FantaMessageActions"], b("emptyFunction"), "FantaDragAndDrop.react")
        }
        ;
        d.shouldComponentUpdate = function(a) {
            var b = this.props
              , c = b.composer
              , d = a.composer;
            c = c.sharePreview;
            d = d.sharePreview;
            return b.threadID !== a.threadID || !!(!c && d) || !!(c && d && !c.equals(d))
        }
        ;
        d.render = function() {
            var a = this.props
              , c = a.composer;
            a = a.threadID;
            c = c.sharePreview;
            var d = c.share;
            c = c.uri;
            return g.jsx("div", {
                className: "fbNubFlyoutAttachments",
                children: g.jsx("div", {
                    className: "chatAttachmentShelf",
                    children: d || c ? g.jsx(g.Suspense, {
                        fallback: g.jsx("div", {}),
                        children: g.jsx(i, {
                            onClose: this.$1,
                            onLoaded: this.$2,
                            onLoading: this.$3,
                            threadID: a,
                            imageSize: {
                                width: h,
                                height: h
                            },
                            location: b("MercuryShareAttachmentRenderLocations").CHAT_PREVIEW,
                            share: d,
                            uri: c
                        })
                    }) : null
                })
            })
        }
        ;
        d.$4 = function(a) {
            b("MessengerEnvironment").messengerui ? b("ifRequired")("MessengerActions", function(b) {
                a(b)
            }, function() {
                b("Bootloader").loadModules(["MessengerActions"], function(b) {
                    a(b)
                }, "FantaDragAndDrop.react")
            }) : b("ifRequired")("FantaMessageActions", function(b) {
                a(b)
            }, function() {
                b("Bootloader").loadModules(["FantaMessageActions"], function(b) {
                    a(b)
                }, "FantaDragAndDrop.react")
            })
        }
        ;
        return c
    }(g.Component);
    e.exports = a;
    a.propTypes = {
        composer: b("prop-types").object.isRequired,
        threadID: b("prop-types").string.isRequired
    }
}
), null);
__d("FantaMercuryTabOverflowBootloader.react", ["BootloadOnRender.react", "JSResource", "LazyComponent.react", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = b("JSResource")("FantaM4TabOverflow.react").__setRef("FantaMercuryTabOverflowBootloader.react");
            return g.jsx(b("BootloadOnRender.react"), {
                component: g.jsx(b("LazyComponent.react"), {
                    items: this.props.items,
                    tabContents: this.props.tabContents
                }),
                loader: a,
                placeholder: g.jsx("div", {})
            })
        }
        ;
        return c
    }(g.Component);
    e.exports = a
}
), null);
__d("FantaTab.react", ["cx", "CurrentUser", "FantaTabActions", "FocusRegion.react", "JSResource", "LoadingDialog.react", "MercuryIgnoredBlockedParticipants.bs", "MessengerState.bs", "React", "focusScopeQueries", "lazyLoadComponent"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = b("lazyLoadComponent")(b("JSResource")("ChatGroupBlockedEntranceWarning.react").__setRef("FantaTab.react"));
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.$1 = !1,
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props
              , c = a.isFocused
              , d = a.isLastTab
              , e = a.isLastTabOfType
              , f = a.MainComponent
              , g = a.messengerState
              , j = a.MinimizedComponent
              , k = a.nonMinimizedRaisedTabCount
              , l = a.tab
              , m = a.tabContent
              , n = a.messages
              , o = a.forGameChat;
            a = a.hasFetchedAll;
            j = l.isMinimized ? j : f;
            f = l.id + (l.isMinimized ? "-minimized" : "-maximized");
            var p = this.$1 && !l.isMinimized;
            this.$1 = l.isMinimized;
            var q = m == null ? void 0 : m.participants;
            return h.jsx(b("FocusRegion.react").FocusRegion, {
                containFocusQuery: b("focusScopeQueries").tabbableScopeQuery,
                children: h.jsxs("div", {
                    className: "_5qi9 _5qib" + (this.props.isFocused ? " _5qic" : "") + (l.isMinimized ? " _3001" : ""),
                    children: [h.jsx(j, {
                        isFocused: c,
                        isHovered: l.isHovered || p,
                        isLastTab: d,
                        isLastTabOfType: e,
                        messengerState: g,
                        nonMinimizedRaisedTabCount: k,
                        tab: l,
                        tabContent: m,
                        messages: n,
                        forGameChat: o,
                        hasFetchedAll: a
                    }, f), l.showWarningForThreadWithBlockees && m != null && q != null ? h.jsx(h.Suspense, {
                        fallback: h.jsx(b("LoadingDialog.react"), {}),
                        children: h.jsx(i, {
                            allParticipants: Array.from(q.values()),
                            isShown: !0,
                            blockees: b("MercuryIgnoredBlockedParticipants.bs").participantsInGroupThread(b("CurrentUser").getID(), b("MessengerState.bs").blockedIds(g), m.thread).map(function(a) {
                                return q.get(a)
                            }).filter(function(a) {
                                return a != null
                            }),
                            onHide: function() {
                                return b("FantaTabActions").closeGroupEntranceWarningDialog(l.id)
                            },
                            threadID: l.id
                        })
                    }) : null]
                })
            })
        }
        ;
        return c
    }(h.Component);
    e.exports = a
}
), null);
__d("FantaTabGroup.react", ["cx", "CurrentUser", "FantaTab.react", "MessengerState.bs", "React", "prop-types"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.shouldComponentUpdate = function(a) {
            return !this.props.tabGroup.equals(a.tabGroup) || this.props.messengerState !== a.messengerState || !!(!this.props.tabContents && a.tabContents) || !!(this.props.tabContents && a.tabContents && !this.props.tabContents.equals(a.tabContents))
        }
        ;
        d.render = function() {
            var a = this.props
              , c = a.isLastOfTypeChecker
              , d = a.MainComponent
              , e = a.messengerState
              , f = a.MinimizedComponent
              , g = a.OverflowComponent
              , i = a.tabContents;
            a = a.tabGroup;
            var j = a.focusedTabID
              , k = a.getRaisedandUnraisedTabs()
              , l = k.raisedTabs;
            k = k.unraisedTabs;
            var m;
            c && (m = l.findLastKey(function(a) {
                return c(a) && a.id
            }));
            a = a.allowedRaisedTabs === 0 ? null : this.$1(k, g);
            var n = l.filter(function(a) {
                return !a.isMinimized
            }).count();
            return h.jsxs("div", {
                className: "_59v1",
                children: [a, l.map(function(a) {
                    var c = i && i.get(a.id)
                      , g = c && c.threadPreviewID || a.id;
                    return h.jsx(b("FantaTab.react"), {
                        forGameChat: !1,
                        isFocused: a.id === j,
                        isLastTab: a === l.last(),
                        isLastTabOfType: a.id === m,
                        messengerState: e,
                        MainComponent: d,
                        MinimizedComponent: f,
                        nonMinimizedRaisedTabCount: n,
                        tab: a,
                        tabContent: c,
                        messages: b("MessengerState.bs").getCurrentlyLoadedMessages(b("CurrentUser").getID(), g),
                        hasFetchedAll: b("MessengerState.bs").hasLoadedAllMessages(b("CurrentUser").getID(), g)
                    }, a.id)
                }).toArray()]
            })
        }
        ;
        d.$1 = function(a, b) {
            return !a.isEmpty() ? h.jsx("div", {
                className: "_1kws",
                children: h.jsx(b, {
                    items: a,
                    tabContents: this.props.tabContents
                })
            }) : null
        }
        ;
        return c
    }(h.Component);
    e.exports = a;
    a.propTypes = {
        MainComponent: (c = b("prop-types")).func.isRequired,
        messengerState: c.object,
        MinimizedComponent: c.func.isRequired,
        OverflowComponent: c.func.isRequired,
        tabContents: c.object,
        tabGroup: c.object.isRequired
    }
}
), null);
__d("FantaPendingActions.react", ["Bootloader", "BootloadOnRender.react", "FantaTabActions", "JSResource", "LazyComponent.react", "MercuryThreadActions", "MessengerMessageRequestsTypedLogger", "MessageRequestUtils", "MessagingTag", "React", "MercuryIDs", "CurrentUser"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("MercuryThreadActions").get()
      , h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), h = 0; h < e; h++)
                f[h] = arguments[h];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$3 = function() {
                var a = d.props.thread;
                a = !!a && b("MessageRequestUtils").isFiltered(a);
                var c = b("CurrentUser").getID();
                c = b("MercuryIDs").getThreadKeyfromThreadIDUserID(d.props.threadID, c);
                new (b("MessengerMessageRequestsTypedLogger"))().setAction("message_requests_delete_request").setThreadID(b("MercuryIDs").getThreadFBIDFromThreadID(d.props.threadID)).setSurface("thread").setFolderType(a ? "other" : "pending").setThreadKey(c).setEntryPoint(null).log()
            }
            ,
            d.$4 = function(a) {
                var c = d.props.thread;
                c = !!c && b("MessageRequestUtils").isFiltered(c);
                var e = b("CurrentUser").getID();
                e = b("MercuryIDs").getThreadKeyfromThreadIDUserID(d.props.threadID, e);
                a === "hide" && new (b("MessengerMessageRequestsTypedLogger"))().setAction("message_requests_decline_cancel").setThreadID(b("MercuryIDs").getThreadFBIDFromThreadID(d.props.threadID)).setSurface("thread").setFolderType(c ? "other" : "pending").setThreadKey(e).setEntryPoint("inbox_banner").log()
            }
            ,
            d.$1 = function() {
                var a = d.props
                  , c = a.thread
                  , e = a.threadID;
                a = !!c && b("MessageRequestUtils").isFiltered(c);
                var f = b("CurrentUser").getID();
                f = b("MercuryIDs").getThreadKeyfromThreadIDUserID(d.props.threadID, f);
                if (a)
                    b("Bootloader").loadModules(["WebMessengerDeleteThreadDialog"], function(a) {
                        a.show(e, d.$3, d.$4, function() {
                            return b("FantaTabActions").closeTab(e)
                        })
                    }, "FantaPendingActions.react");
                else {
                    var g = b("MercuryIDs").isGroupChat(e);
                    b("Bootloader").loadModules(["WebMessengerDeclineMRDialog"], function(a) {
                        a.show(c.folder, e, function() {
                            return b("FantaTabActions").closeTab(e)
                        }, g)
                    }, "FantaPendingActions.react")
                }
                new (b("MessengerMessageRequestsTypedLogger"))().setAction("message_requests_decline_attempt").setThreadID(b("MercuryIDs").getThreadFBIDFromThreadID(d.props.threadID)).setSurface("thread").setFolderType(a ? "other" : "pending").setThreadKey(f).setEntryPoint(null).log()
            }
            ,
            d.$2 = function() {
                var a = d.props.thread;
                a = !!a && b("MessageRequestUtils").isFiltered(a);
                var c = b("CurrentUser").getID();
                c = b("MercuryIDs").getThreadKeyfromThreadIDUserID(d.props.threadID, c);
                g.changeFolder(d.props.threadID, b("MessagingTag").INBOX);
                new (b("MessengerMessageRequestsTypedLogger"))().setAction("message_requests_accept_request").setThreadID(b("MercuryIDs").getThreadFBIDFromThreadID(d.props.threadID)).setSurface("thread").setFolderType(a ? "other" : "pending").setThreadKey(c).setEntryPoint(null).log()
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props.thread;
            a = !!a && b("MessageRequestUtils").isFiltered(a);
            return h.jsx(b("BootloadOnRender.react"), {
                loader: b("JSResource")("ChatPendingActions.react").__setRef("FantaPendingActions.react"),
                placeholder: h.jsx("div", {
                    style: {
                        height: 27
                    }
                }),
                component: h.jsx(b("LazyComponent.react"), {
                    isFiltered: a,
                    onDeleteClick: this.$1,
                    onReplyClick: this.$2
                })
            })
        }
        ;
        return c
    }(h.PureComponent);
    e.exports = a
}
), null);
__d("FantaTabComposer.react", ["ChatTabComposerContainer.react", "MessengerState.bs", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.$2 = function(a) {
                c.$1 = a
            }
            ,
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            var a = this.props.participants;
            this.props.isFocused && a.length > 0 && !this.props.isEmptyLocalThread && this.focusInput()
        }
        ;
        d.componentDidUpdate = function(a) {
            this.props.isFocused && this.props.isFocused !== a.isFocused && !this.props.isEmptyLocalThread && this.focusInput()
        }
        ;
        d.shouldComponentUpdate = function(a) {
            var b = this.props;
            return !b.composer.equals(a.composer) || b.disableInput !== a.disableInput || !b.fileUploader && !!a.fileUploader || b.fileUploader && !b.fileUploader.equals(a.fileUploader) || b.isEmptyLocalThread !== a.isEmptyLocalThread || b.isFocused !== a.isFocused || b.isNewEmptyLocalThread !== a.isNewEmptyLocalThread || b.threadID !== a.threadID || b.viewer !== a.viewer || b.forGameChat !== a.forGameChat || b.participants.length !== a.participants.length
        }
        ;
        d.render = function() {
            var a = this
              , c = this.props
              , d = c.participants
              , e = c.threadID
              , f = c.viewer
              , h = c.isFocused;
            return d.length === 0 ? g.jsx("div", {}) : g.jsx(b("MessengerState.bs").jsComponent, {
                fbid: f,
                children: function(c) {
                    return g.jsx(b("ChatTabComposerContainer.react"), {
                        blockedIDs: a.props.blockedIDs,
                        composer: a.props.composer,
                        disableInput: a.props.disableInput,
                        fileUploader: a.props.fileUploader,
                        isFocused: h,
                        onEscape: a.props.onEscape,
                        onSelectSticker: a.props.onSelectSticker,
                        onSendHotLike: a.props.onSendHotLike,
                        onSendPhoto: a.props.onSendPhoto,
                        onTab: a.props.onTab,
                        onSendMessage: a.props.onSendMessage,
                        isNewEmptyLocalThread: a.props.isNewEmptyLocalThread,
                        ref: a.$2,
                        thread: b("MessengerState.bs").threads(c)[e],
                        threadID: e,
                        viewer: f,
                        forGameChat: a.props.forGameChat
                    })
                }
            })
        }
        ;
        d.focusInput = function() {
            this.$1 && this.$1.focusInput()
        }
        ;
        d.hasEmptyInput = function() {
            var a = this.$1;
            return !a ? !1 : a.hasEmptyInput()
        }
        ;
        return c
    }(g.Component);
    e.exports = a
}
), null);
__d("FantaTabSheetPlaceholder.react", ["cx", "React", "XUISpinner.react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a() {
        return h.jsx("div", {
            className: "_w_z",
            children: h.jsx(b("XUISpinner.react"), {})
        })
    }
}
), null);
__d("FantaTabSheet.react", ["cx", "BootloadedComponent.react", "FantaTabSheetPlaceholder.react", "JSResource", "LazyComponent.react", "MercuryIDs", "MercurySheetPolicy", "MessengerParticipants.bs", "React", "ReasonBootloadOnRender.react", "ReasonResource", "emptyFunction", "gkx", "lazyLoadComponent", "prop-types"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = (a = b("lazyLoadComponent"))((c = b("JSResource"))("ChatGroupsSyncTabSheet.react").__setRef("FantaTabSheet.react"))
      , j = a(c("ChatGroupNameComposerTabSheet.react").__setRef("FantaTabSheet.react"))
      , k = a(c("ChatIntegrityLandingScreenSheet.react").__setRef("FantaTabSheet.react"))
      , l = a(c("FantaTabSheetChatThreadSolidReaction.react").__setRef("FantaTabSheet.react"));
    d = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.shouldComponentUpdate = function(a) {
            var b = this.props;
            return b.threadID !== a.threadID || !b.tabContent.equals(a.tabContent)
        }
        ;
        d.maybeRenderMontage = function() {
            var a = this.props
              , c = a.threadID;
            a = a.tabContent;
            return a.isMontageOpen && !b("gkx")("1340633") ? h.jsx(b("BootloadedComponent.react"), {
                bootloadLoader: b("JSResource")("ChatMontageSheet.react").__setRef("FantaTabSheet.react"),
                bootloadPlaceholder: h.jsx("div", {}),
                threadID: c,
                onResize: b("emptyFunction")
            }, "Montage") : null
        }
        ;
        d.render = function() {
            var a = this.props
              , c = a.threadID
              , d = a.tabContent
              , e = a.composerComponent
              , f = a.pageUser;
            a = a.isGroupChat;
            var g = d.loggingID, m = d.openSheet, n = d.privacyController, o = d.thread, p = d.typeahead, q, r;
            switch (m) {
            case b("MercurySheetPolicy").sheets.ChatThreadIsMutedTabSheet:
                q = h.jsx(b("BootloadedComponent.react"), {
                    bootloadLoader: b("JSResource")("FantaTabSheetChatThreadIsMuted.react").__setRef("FantaTabSheet.react"),
                    bootloadPlaceholder: h.jsx("div", {}),
                    threadID: c
                }, m);
                break;
            case b("MercurySheetPolicy").sheets.ChatNameConversationTabSheet:
                q = h.jsx(b("BootloadedComponent.react"), {
                    bootloadLoader: b("JSResource")("FantaTabSheetNameConversation.react").__setRef("FantaTabSheet.react"),
                    bootloadPlaceholder: h.jsx(b("FantaTabSheetPlaceholder.react"), {}),
                    thread: o,
                    threadID: c
                }, m);
                break;
            case b("MercurySheetPolicy").sheets.ChatUserBlockedTabSheet:
                r = b("MercuryIDs").getUserIDFromThreadID(c);
                if (r) {
                    var s = b("MessengerParticipants.bs").getNow(b("MercuryIDs").getParticipantIDFromUserID(r));
                    s && n && (q = h.jsx(b("BootloadedComponent.react"), {
                        bootloadLoader: b("JSResource")("ChatUserBlockedTabSheet.react").__setRef("FantaTabSheet.react"),
                        bootloadPlaceholder: h.jsx("div", {}),
                        gender: s.gender,
                        privacyActionController: n,
                        shortName: s.short_name
                    }, m))
                }
                break;
            case b("MercurySheetPolicy").sheets.ChatOfflineTabSheet:
                q = h.jsx(b("BootloadedComponent.react"), {
                    bootloadLoader: b("JSResource")("FantaTabSheetOffline.react").__setRef("FantaTabSheet.react"),
                    bootloadPlaceholder: h.jsx("div", {}),
                    privacyController: n,
                    threadID: c
                }, m);
                break;
            case b("MercurySheetPolicy").sheets.ChatReadOnlyTabSheet:
            case b("MercurySheetPolicy").sheets.ChatReadOnlyPermanentTabSheet:
                q = h.jsx(b("BootloadedComponent.react"), {
                    bootloadLoader: b("JSResource")("FantaTabSheetReadOnly.react").__setRef("FantaTabSheet.react"),
                    bootloadPlaceholder: h.jsx("div", {}),
                    threadID: c
                }, m);
                break;
            case b("MercurySheetPolicy").sheets.FantaAddFriendsSheet:
                q = h.jsx(b("BootloadedComponent.react"), {
                    bootloadLoader: b("JSResource")("FantaTabSheetAddFriends.react").__setRef("FantaTabSheet.react"),
                    bootloadPlaceholder: h.jsx(b("FantaTabSheetPlaceholder.react"), {}),
                    loggingID: g,
                    thread: o,
                    threadID: c,
                    typeahead: p,
                    composerComponent: e,
                    tabContent: d
                }, m);
                break;
            case b("MercurySheetPolicy").sheets.FantaAddMoreFriendsSheet:
                q = h.jsx(b("BootloadedComponent.react"), {
                    bootloadLoader: b("JSResource")("FantaTabSheetAddMoreFriends.react").__setRef("FantaTabSheet.react"),
                    bootloadPlaceholder: h.jsx(b("FantaTabSheetPlaceholder.react"), {}),
                    loggingID: g,
                    thread: o,
                    threadID: c,
                    typeahead: p
                }, m);
                break;
            case b("MercurySheetPolicy").sheets.ChatThreadIsMessageBlockedSheet:
                r = b("MercuryIDs").getUserIDFromThreadID(c);
                if (r) {
                    s = b("MercuryIDs").getParticipantIDFromUserID(r);
                    n = b("MessengerParticipants.bs").getNow(s);
                    n && (q = h.jsx(b("BootloadedComponent.react"), {
                        bootloadLoader: b("JSResource")("FantaTabSheetMessageBlocked.react").__setRef("FantaTabSheet.react"),
                        bootloadPlaceholder: h.jsx("div", {}),
                        isGroupChat: a,
                        pageUser: f,
                        participants: d.participants,
                        shortName: n.short_name,
                        threadID: c
                    }, m))
                }
                break;
            case b("MercurySheetPolicy").sheets.ChatUserFocusSheet:
                q = h.jsx(b("BootloadedComponent.react"), {
                    bootloadLoader: b("JSResource")("ChatUserFocusSheet.react").__setRef("FantaTabSheet.react"),
                    bootloadPlaceholder: h.jsx("div", {}),
                    thread: o,
                    threadID: c
                }, m);
                break;
            case b("MercurySheetPolicy").sheets.ChatUserFocusBypassSheet:
                q = h.jsx(b("BootloadedComponent.react"), {
                    bootloadLoader: b("JSResource")("ChatUserFocusBypassSheet.react").__setRef("FantaTabSheet.react"),
                    bootloadPlaceholder: h.jsx("div", {})
                }, m);
                break;
            case b("MercurySheetPolicy").sheets.ChatUploadWarningTabSheet:
                q = h.jsx(b("BootloadedComponent.react"), {
                    bootloadLoader: b("JSResource")("ChatUploadWarningTabSheet.react").__setRef("FantaTabSheet.react"),
                    bootloadPlaceholder: h.jsx("div", {})
                }, m);
                break;
            case b("MercurySheetPolicy").sheets.ChatNoRecipientsTabSheet:
                b("MercuryIDs").isCanonical(c) || (q = h.jsx(b("BootloadedComponent.react"), {
                    bootloadLoader: b("JSResource")("ChatNoRecipientsTabSheet.react").__setRef("FantaTabSheet.react"),
                    bootloadPlaceholder: h.jsx("div", {})
                }, m));
                break;
            case b("MercurySheetPolicy").sheets.ChatNewMessagesTabSheet:
                q = h.jsx(b("BootloadedComponent.react"), {
                    bootloadLoader: b("JSResource")("FantaNewMessagesTabSheet.react").__setRef("FantaTabSheet.react"),
                    bootloadPlaceholder: h.jsx("div", {}),
                    threadID: c
                }, m);
                break;
            case b("MercurySheetPolicy").sheets.ChatEmployeeAwaySheet:
                q = h.jsx(b("BootloadedComponent.react"), {
                    bootloadLoader: b("JSResource")("ChatEmployeeAwaySheet.react").__setRef("FantaTabSheet.react"),
                    bootloadPlaceholder: h.jsx("div", {})
                }, m);
                break;
            case b("MercurySheetPolicy").sheets.ChatJoinCallSheet:
                if (o) {
                    g = o.rtc_call_data;
                    p = o.thread_fbid;
                    q = h.jsx(b("BootloadedComponent.react"), {
                        bootloadLoader: b("JSResource")("ChatJoinCallSheet.react").__setRef("FantaTabSheet.react"),
                        bootloadPlaceholder: h.jsx("div", {}),
                        rtcCallData: g,
                        threadFBID: p
                    }, m)
                }
                break;
            case b("MercurySheetPolicy").sheets.ChatRoomAssociatedObjectSheet:
                if (o) {
                    r = o.associated_object;
                    q = h.jsx(b("BootloadedComponent.react"), {
                        bootloadLoader: b("JSResource")("ChatRoomAssociatedObjectSheet.react").__setRef("FantaTabSheet.react"),
                        bootloadPlaceholder: h.jsx("div", {}),
                        associatedObject: r
                    }, m)
                }
                break;
            case b("MercurySheetPolicy").sheets.ChatMentorshipProgramSheet:
                o && (q = h.jsx(b("ReasonBootloadOnRender.react"), {
                    component: h.jsx(b("LazyComponent.react"), {
                        thread: o
                    }),
                    loader: b("ReasonResource")(b("JSResource")("MentorshipProgramSheet.bs").__setRef("FantaTabSheet.react")),
                    placeholder: h.jsx("div", {})
                }));
                break;
            case b("MercurySheetPolicy").sheets.ChatThreadSolidReactionSheet:
                q = h.jsx(h.Suspense, {
                    fallback: h.jsx("div", {}),
                    children: h.jsx(l, {
                        threadID: c
                    })
                }, m);
                break;
            case b("MercurySheetPolicy").sheets.ChatGroupsSyncTabSheet:
                o && o.work_associated_group && (q = h.jsx(h.Suspense, {
                    fallback: h.jsx("div", {}),
                    children: h.jsx(i, {
                        group: o.work_associated_group,
                        imageURL: o.image_src,
                        name: o.name
                    })
                }, m));
                break;
            case b("MercurySheetPolicy").sheets.ChatGroupNameComposerTabSheet:
                q = h.jsx(h.Suspense, {
                    fallback: h.jsx("div", {}),
                    children: h.jsx(j, {
                        threadID: c,
                        composerComponent: e
                    })
                }, m);
                break;
            case b("MercurySheetPolicy").sheets.ChatIntegrityLandingScreenSheet:
                f && (q = h.jsx(h.Suspense, {
                    fallback: h.jsx("div", {}),
                    children: h.jsx(k, {
                        pageUser: f,
                        threadID: c
                    })
                }, m));
                break
            }
            s = this.maybeRenderMontage();
            if (q)
                return h.jsx("div", {
                    className: "_1sk5",
                    children: h.jsx("div", {
                        className: "_1sk6",
                        children: q
                    })
                });
            else if (s)
                return s;
            return null
        }
        ;
        return c
    }(h.Component);
    e.exports = d;
    d.propTypes = {
        threadID: b("prop-types").string.isRequired,
        tabContent: b("prop-types").object.isRequired
    }
}
), null);
__d("FantaTabMain.react", ["cx", "fbt", "invariant", "Bootloader", "ChatConfig", "CoworkerThreadContextBanner.react", "CurrentUser", "DragDropTarget", "FantaChatHeaderContainer.react", "FantaConversationScroller.react", "FantaDispatcher", "FantaDragAndDrop.react", "FantaMessageActions", "FantaPendingActions.react", "FantaTabActions", "FantaTabComposer.react", "FantaTabSheet.react", "JSResource", "Keys", "MercuryIDs", "MercurySheetPolicy", "MessageRequestUtils", "MessagingTagConstants", "MessengerBotMenuDataFetcher", "MessengerColors", "MessengerCustomColorUtils.bs", "MessengerParticipants.bs", "MessengerParticipantUtils.bs", "MessengerPresenceProvider.bs", "MessengerState.bs", "MNCommercePageSetting", "Parent", "React", "ReactDOM", "ShortProfiles", "SimpleXUIDialog", "TrackingNodes", "WorkBotLandingPageHelper", "WorkChatAvailabilityStatusLoader", "WorkFileUploadsGating", "XUISpinner.react", "clearTimeout", "convertMIGColorToFIGColor", "getPageIDFromThreadID", "immutable", "joinClasses", "lazyLoadComponent", "performanceAbsoluteNow", "promiseDone", "prop-types", "setTimeout", "throttle"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j, k = b("React"), l = (a = b("lazyLoadComponent"))((c = b("JSResource"))("MarketplaceMessengerContextBanner.react").__setRef("FantaTabMain.react")), m = a(c("ChatJoinableInterstitialPreview.react").__setRef("FantaTabMain.react")), n = a(c("P2PChatThreadBannerContainer.react").__setRef("FantaTabMain.react")), o = a(c("MessengerGameBotPlayButton.react").__setRef("FantaTabMain.react")), p = a(c("FantaPageComposerNullState.react").__setRef("FantaTabMain.react")), q = function(a) {
        a = b("MercuryIDs").getUserIDFromThreadID(a.tab.id);
        return a && b("CurrentUser").isWorkUser() && b("WorkChatAvailabilityStatusLoader").isLoaded() ? b("WorkChatAvailabilityStatusLoader").getStoreEnforce().getIsDoNotDisturb(a) : !1
    };
    d = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$9 = null,
            d.state = {
                closing: !1,
                disableInput: !1,
                isDoNotDisturb: q(d.props)
            },
            d.$23 = function(a) {
                var c = !!b("Parent").byClass(a.target, "fantaTabMain-" + d.props.tab.id);
                a = !!b("Parent").byClass(a.relatedTarget, "fantaTabMain-" + d.props.tab.id);
                if (!c || !a) {
                    if (d.$8) {
                        b("clearTimeout")(d.$8);
                        d.$8 = null;
                        return
                    }
                    b("FantaTabActions").hoveredTab(d.props.tab.id)
                }
            }
            ,
            d.$24 = function(a) {
                var c = !!b("Parent").byClass(a.target, "fantaTabMain-" + d.props.tab.id);
                a = !!b("Parent").byClass(a.relatedTarget, "fantaTabMain-" + d.props.tab.id);
                (!c || !a) && (d.$8 && b("clearTimeout")(d.$8),
                d.$8 = b("setTimeout")(function() {
                    d.$8 = null,
                    b("FantaTabActions").unhoveredTab(d.props.tab.id)
                }, 500))
            }
            ,
            d.$22 = function(a) {
                var c = !!b("Parent").byClass(a.target, "fantaTabMain-" + d.props.tab.id)
                  , e = !!b("Parent").byClass(a.relatedTarget, "fantaTabMain-" + d.props.tab.id);
                (!c || !e) && (!a.relatedTarget || !a.target ? d.$6 = b("setTimeout")(function() {
                    d.$6 = null,
                    d.$25(d.props.tab.id)
                }, 100) : d.$25(d.props.tab.id))
            }
            ,
            d.$21 = function(a) {
                if (d.$6) {
                    b("clearTimeout")(d.$6);
                    d.$6 = null;
                    return
                }
                var c = !!b("Parent").byClass(a.target, "fantaTabMain-" + d.props.tab.id)
                  , e = !!b("Parent").byClass(a.relatedTarget, "fantaTabMain-" + d.props.tab.id);
                a = a.target;
                a && a.classList && (a.classList.contains("_3olu") || a.classList.contains("_61td") || a.classList.contains("_7jbw") || a.classList.contains("_4zs3")) || (!c || !e) && (b("FantaDispatcher").isDispatching() || b("FantaTabActions").focusTab(d.props.tab.id))
            }
            ,
            d.$27 = function(a) {
                b("FantaMessageActions").linkPreview(d.props.tab.id, a)
            }
            ,
            d.$26 = function(a) {
                var c = d.props.tabContent;
                c = c || {};
                c = c.composer;
                var e = d.props.tab.id;
                c && b("FantaMessageActions").prepareFilesForSend(e, a, c)
            }
            ,
            d.$17 = function(a) {
                a.keyCode === b("Keys").ESC && (d.$1(!0),
                a.preventDefault(),
                a.stopPropagation())
            }
            ,
            d.$18 = function(a) {
                a.keyCode === b("Keys").TAB && d.$19(a)
            }
            ,
            d.$19 = function(a) {
                var b = d.props.nonMinimizedRaisedTabCount;
                b > 1 && (a.preventDefault(),
                d.$2(a.ctrlKey, a.shiftKey))
            }
            ,
            d.$1 = function(a) {
                var c = d.props
                  , e = c.tab;
                c = c.tabContent;
                !c || c && c.composer.text.length === 0 && !d.$28() ? (d.$29(),
                a ? b("FantaTabActions").closeAndTabNext(e.id) : b("FantaTabActions").closeTab(e.id)) : d.$30();
                d.$31()
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.UNSAFE_componentWillMount = function() {
            this.$1 = b("throttle")(this.$1, 100),
            this.$2 = b("throttle")(this.$2, 100)
        }
        ;
        d.componentDidMount = function() {
            var a = this
              , c = (j || (j = b("performanceAbsoluteNow")))();
            b("Bootloader").loadModules(["QuickPerformanceLogger", "MessengerWebQuickLogModule"], function(b, d) {
                b.markerPoint(d.FIRSTCHATTABOPEN_WWW, "mount_fanta_main", JSON.stringify({
                    messageSize: a.props.messages ? a.props.messages.length : 0,
                    hasThread: !!a.props.thread
                }), 0, c)
            }, "FantaTabMain.react");
            this.$10();
            this.$11();
            this.$12(this.props.tab.id);
            this.$13();
            this.$14();
            this.$15()
        }
        ;
        d.componentDidUpdate = function(a) {
            this.$11();
            if (b("CurrentUser").isWorkUser() && b("WorkChatAvailabilityStatusLoader").isLoaded() && a.thread !== this.props.thread) {
                var c = b("MercuryIDs").getUserIDFromThreadID(this.props.tab.id);
                a = b("MercuryIDs").getUserIDFromThreadID(a.tab.id);
                var d = b("WorkChatAvailabilityStatusLoader").getStoreEnforce();
                a && d.unsubscribeUser(a, this);
                c && (d.subscribeUser(c, this),
                d.fetchUsers([c]))
            }
        }
        ;
        d.componentWillUnmount = function() {
            this.$3 && this.$3.disable();
            this.$9 && this.$9.remove();
            var a = b("MercuryIDs").getUserIDFromThreadID(this.props.tab.id);
            a && b("WorkChatAvailabilityStatusLoader").isLoaded() && b("WorkChatAvailabilityStatusLoader").getStoreEnforce().unsubscribeUser(a, this)
        }
        ;
        d.shouldComponentUpdate = function(a, b) {
            var c = this.props
              , d = this.state;
            return c.hasFetchedAll !== a.hasFetchedAll || c.isFocused !== a.isFocused || c.isHovered !== a.isHovered || c.isLastGroupTab !== a.isLastGroupTab || !c.tab.equals(a.tab) || !c.tabContent && !!a.tabContent || c.tabContent && !c.tabContent.equals(a.tabContent) || c.thread !== a.thread || c.fbid !== a.fbid || c.blockedIDs !== a.blockedIDs || c.readReceipts !== a.readReceipts || c.ignoredIds !== a.ignoredIds || d.closing !== b.closing || d.disableInput !== b.disableInput || d.isDoNotDisturb !== b.isDoNotDisturb || c.messages && a.messages && (c.messages.length !== a.messages.length || !c.messages.every(function(b, c) {
                return b === a.messages[c]
            }))
        }
        ;
        d.$11 = function() {
            return
        }
        ;
        d.$16 = function() {
            var a = this.props.tabContent && this.props.tabContent.nullStateCTA;
            if (!a)
                return !1;
            if (this.props.thread && this.props.thread.message_count === 0)
                return !0;
            return b("CurrentUser").isWorkUser() ? b("WorkBotLandingPageHelper").shouldShowBotLandingPageArray(this.props.messages) : !1
        }
        ;
        d.render = function() {
            var a = this
              , c = this.props
              , d = c.blockedIDs
              , e = c.forGameChat
              , f = c.hasFetchedAll
              , g = c.isFocused
              , j = c.isHovered
              , q = c.isLastGroupTab
              , r = c.messages
              , s = c.onLoadMoreMessages
              , t = c.onSelectSticker
              , u = c.onSendHotLike
              , v = c.onSendMessage
              , w = c.onSendPhoto
              , x = c.readReceipts
              , y = c.showContextBanner
              , z = c.tab
              , A = c.tabContent
              , B = c.thread
              , C = z.id
              , D = b("CurrentUser").getID();
            c = A && A.composer.fileUploader;
            z = B && b("convertMIGColorToFIGColor")(B.header_color);
            var E = A && A.nullStateCTA
              , F = this.$16()
              , G = B && B.participants || []
              , H = A && A.threadPreviewRecipients || b("immutable").List();
            G = G.length > 0 ? G : H.toArray();
            H = (H = this.props) != null ? (H = H.thread) != null ? H.other_user_fbid : H : H;
            H = H ? b("MessengerParticipants.bs").getNow(b("MercuryIDs").getParticipantIDFromUserID(H)) : null;
            var I = b("getPageIDFromThreadID")(this.props.tab.id)
              , J = b("MessengerState.bs").isEmptyLocalThread(D, C)
              , K = b("MessengerState.bs").isNewEmptyLocalThread(D, C);
            F = B && b("MessageRequestUtils").shouldShowComposerPendingActions(B) ? k.jsx(b("FantaPendingActions.react"), {
                thread: B,
                threadID: C
            }) : F && E ? k.jsx(k.Suspense, {
                fallback: k.jsx("div", {
                    className: "_2xh0",
                    children: k.jsx("div", {
                        className: "_2xh4 _59w_",
                        children: k.jsx(b("XUISpinner.react"), {
                            size: "small"
                        })
                    })
                }),
                children: k.jsx(p, {
                    threadID: C,
                    nullStateCTA: E,
                    pageName: H && H.short_name
                })
            }) : A ? k.jsx("div", {
                className: "fbNubFlyoutFooter" + (this.state.disableInput ? " fbNubFlyoutComposerDisabled" : ""),
                "data-testid": void 0,
                children: k.jsx(b("FantaTabComposer.react"), {
                    blockedIDs: d,
                    composer: A.composer,
                    disableInput: this.state.disableInput,
                    fileUploader: c,
                    forGameChat: e,
                    isEmptyLocalThread: J,
                    isFocused: g,
                    isNewEmptyLocalThread: K,
                    onEscape: this.$17,
                    onKeyDown: this.$17,
                    onKeyPress: this.$18,
                    onSelectSticker: t,
                    onSendHotLike: u,
                    onSendMessage: v,
                    onSendPhoto: w,
                    onTab: this.$19,
                    participants: G,
                    ref: "composer",
                    threadID: C,
                    viewer: D
                })
            }) : null;
            var L;
            E = b("MercuryIDs").getUserIDFromThreadID(C);
            E && (L = b("ShortProfiles").getNow(E));
            var M = L && L.is_messenger_only;
            !A && i(0, 6156);
            H = this.$20();
            c = !1;
            if (C) {
                c = A.isNewMessageTab ? ((B == null ? void 0 : (K = B.participants) == null ? void 0 : K.length) || 0) > 2 : b("MercuryIDs").isGroupChat(C)
            }
            var N;
            t = k.jsx(b("FantaTabSheet.react"), {
                tabContent: A,
                threadID: C,
                composerComponent: this.refs.composer,
                pageUser: H,
                isGroupChat: c
            });
            H && A.openSheet === b("MercurySheetPolicy").sheets.ChatIntegrityLandingScreenSheet && (N = k.jsxs("div", {
                className: "fbNubFlyoutFooter",
                children: [t, F]
            }));
            u = B == null ? void 0 : B.marketplace_thread_data;
            v = u == null ? void 0 : u.for_sale_item;
            w = u == null ? void 0 : u.buyer_fbid;
            G = u == null ? void 0 : u.seller_fbid;
            K = u == null ? void 0 : u.is_seller_eligible_for_shipping;
            var O;
            if (v && w && G) {
                O = k.jsx(k.Suspense, {
                    fallback: k.jsx("div", {}),
                    children: k.jsx(l, {
                        buyerID: w,
                        forSaleItem: v,
                        renderLocation: "chat",
                        sellerID: G,
                        isSellerEligibleForShipping: K,
                        threadFBID: (c = this.props) != null ? (c = c.thread) != null ? c.thread_fbid : c : c
                    })
                })
            }
            u = (H = B) != null ? H.group_thread_subtype : H;
            var P;
            u === 13 && (P = k.jsx(b("CoworkerThreadContextBanner.react"), {}));
            w = B && b("ChatConfig").getBool("chat_tab_has_gradients") ? b("MessengerColors").makeLinearGradient(B.gradient_colors, B.solid_color, b("MessengerCustomColorUtils.bs").defaultColor()) : void 0;
            v = A && A.isMultiCompany;
            G = !!A && !!A.openSheet;
            var Q = A && A.joinableInterstitialData ? k.jsx(k.Suspense, {
                fallback: k.jsx("div", {}),
                children: k.jsx(m, {
                    data: A.joinableInterstitialData,
                    isActive: g,
                    onClose: this.$1
                })
            }) : k.jsxs("div", {
                className: (G ? "_6vu4" : "") + " _6vu5 _6z9d fbNubFlyoutInner _6vu1",
                children: [k.jsx(b("FantaChatHeaderContainer.react"), {
                    blockedIDs: d,
                    composer: A.composer,
                    customColor: z,
                    highlightNewMessage: A && A.highlightNewMessage,
                    isDoNotDisturb: this.state.isDoNotDisturb,
                    isFocused: g,
                    isLastGroupTab: q,
                    isMultiCompany: v,
                    isNewMessageTab: A && A.isNewMessageTab,
                    membershipParticipants: A.membershipParticipants,
                    onClose: this.$1,
                    pageIndicatorDescription: A.pageIndicatorDescription,
                    participants: A.participants,
                    thread: B,
                    threadHref: A && A.threadHref,
                    threadID: C,
                    uri: A.uri,
                    viewer: D,
                    focusOnClick: this.$21
                }), k.jsxs("div", {
                    className: "_1ia _2sz2",
                    ref: function(b) {
                        a.$4 = b
                    },
                    style: w,
                    children: [N ? k.jsx("div", {}) : t, k.jsx(b("FantaConversationScroller.react"), {
                        forGameChat: e,
                        hasFetchedAll: f,
                        isFocused: g,
                        isEmptyLocalThread: J,
                        messages: r,
                        onFocus: function() {
                            return a.refs.composer && a.refs.composer.focusInput()
                        },
                        onLoadMoreMessages: s,
                        readReceipts: x,
                        showContextBanner: y,
                        thread: B,
                        threadID: C,
                        viewer: D,
                        jumpToMessage: A.jumpToMessage
                    }), (B == null ? void 0 : B.is_canonical_neo_user) !== !0 && k.jsx("div", {
                        className: "_2hc2",
                        children: k.jsx(k.Suspense, {
                            fallback: k.jsx("div", {}),
                            children: E ? k.jsx(n, {
                                isVisible: !0,
                                otherUserID: E,
                                threadID: C
                            }) : k.jsx(n, {
                                isVisible: !0,
                                threadID: C
                            })
                        })
                    }), k.jsx("div", {
                        className: "_4g6x",
                        children: k.jsxs("div", {
                            className: "_4g6y",
                            children: [k.jsx("div", {
                                className: "_4g6z _4g71",
                                children: h._("K\u00e9o li\u00ean k\u1ebft\/file v\u00e0o \u0111\u00e2y")
                            }), k.jsx("div", {
                                className: "_4g6z _4g6- _4g6_",
                                children: h._("Th\u1ea3 t\u1ec7p t\u1ea1i \u0111\u00e2y")
                            }), k.jsx("div", {
                                className: "_4g6z _4g6- _4g70",
                                children: h._("Th\u1ea3 li\u00ean k\u1ebft t\u1ea1i \u0111\u00e2y")
                            })]
                        })
                    }), N ? N : I ? k.jsx(k.Suspense, {
                        fallback: k.jsx("div", {}),
                        children: k.jsx(o, {
                            originalElement: F,
                            pageID: I,
                            playLinkClassName: "_2xh6 _2h_r",
                            showGameImage: !0,
                            threadFBID: (K = this.props) != null ? (K = K.thread) != null ? K.thread_fbid : K : K,
                            threadID: C
                        })
                    }) : F, k.jsx(b("FantaDragAndDrop.react"), {
                        composer: A.composer,
                        threadID: C
                    }), O, P]
                })]
            });
            return k.jsx(b("MessengerPresenceProvider.bs").jsComponent, {
                subscribeToIDs: [D],
                children: function(c) {
                    return k.jsx("div", {
                        className: b("joinClasses")((a.state.closing ? "_2suj" : "") + " _3_9e _s0f _50mz _50m_" + (B && !M && b("MessengerParticipantUtils.bs").findIntersection(D, c, B).length > 0 && !a.state.isDoNotDisturb ? " _4-0b" : "") + (a.state.isDoNotDisturb ? " _1oh2" : "") + " fbNub _50-v" + (g ? " focusedTab" : "") + (j ? " hoveredTab" : "") + " opened _27_3", "fantaTabMain-" + C),
                        "data-ft": b("TrackingNodes").getTrackingInfo(b("TrackingNodes").types.CHAT_FLYOUT),
                        onBlur: a.$22,
                        onFocus: a.$21,
                        onKeyDown: a.$17,
                        onKeyPress: a.$18,
                        onMouseEnter: a.$23,
                        onMouseLeave: a.$24,
                        ref: function(b) {
                            return a.$5 = b
                        },
                        children: k.jsx("div", {
                            className: "fbNubFlyout fbDockChatTabFlyout uiContextualLayerParent",
                            role: "complementary",
                            children: k.jsx("div", {
                                className: "fbNubFlyoutOuter",
                                children: Q
                            })
                        })
                    })
                }
            })
        }
        ;
        d.$14 = function() {
            var a = this
              , c = b("MercuryIDs").getUserIDFromThreadID(this.props.tab.id);
            c && b("CurrentUser").isWorkUser() && b("promiseDone")(b("WorkChatAvailabilityStatusLoader").load(), function(b) {
                var d = b.store;
                a.$9 = d.addListener(function() {
                    a.setState({
                        isDoNotDisturb: d.getIsDoNotDisturb(c)
                    })
                })
            })
        }
        ;
        d.$25 = function(a) {
            b("FantaDispatcher").isDispatching() || b("FantaTabActions").blurTab(this.props.tab.id),
            this.$8 && (b("clearTimeout")(this.$8),
            this.$8 = null),
            b("setTimeout")(function() {
                b("FantaTabActions").unhoveredTab(a)
            })
        }
        ;
        d.$15 = function() {
            var a, c = this;
            a = (a = this.props.thread) == null ? void 0 : a.composer_input_disabled;
            if (a != null) {
                this.setState({
                    disableInput: a
                });
                return
            }
            a = b("getPageIDFromThreadID")(this.props.tab.id);
            a && b("MessengerBotMenuDataFetcher").getHasPageSetting(a, function(a) {
                c.setState({
                    disableInput: a
                })
            }, function() {
                c.setState({
                    disableInput: !1
                })
            }, b("MNCommercePageSetting").COMPOSER_INPUT_DISABLED)
        }
        ;
        d.$10 = function() {
            if (b("WorkFileUploadsGating").canUploadFiles && !this.$3) {
                var a = b("ReactDOM").findDOMNode(this.$4);
                if (a) {
                    a = new (b("DragDropTarget"))(a);
                    this.$3 = a;
                    a.setOnFilesDropCallback(this.$26);
                    a.setOnURLDropCallback(this.$27);
                    a.enable()
                }
            }
        }
        ;
        d.$2 = function(a, c) {
            a || (c ? b("FantaTabActions").focusPreviousTab() : b("FantaTabActions").focusNextTab())
        }
        ;
        d.$29 = function() {
            var a = this.props.tab.id;
            b("Bootloader").loadModules(["MessengerShareFilePreviewFunnelLogger"], function(b) {
                return b.endFunnel(a)
            }, "FantaTabMain.react")
        }
        ;
        d.$28 = function() {
            return this.$32() || this.$33()
        }
        ;
        d.$32 = function() {
            var a, b = this.props.tabContent;
            a = ((a = b) != null ? (a = a.composer) != null ? (a = a.fileUploader) != null ? a.uploadedFiles : a : a : a) || {
                size: 0
            };
            b = ((b = b) != null ? (b = b.composer) != null ? (b = b.fileUploader) != null ? b.uploadingFiles : b : b : b) || {
                size: 0
            };
            return a.size > 0 || b.size > 0
        }
        ;
        d.$33 = function() {
            var a = this.props.tabContent;
            a = (a = a) != null ? (a = a.composer) != null ? a.sharePreview : a : a;
            return !!(a && a.params && a.type)
        }
        ;
        d.$20 = function() {
            var a = this.props
              , c = a.tab;
            a = a.tabContent;
            a = a == null ? void 0 : a.participants;
            a && (a = a.toList().toArray());
            var d = b("getPageIDFromThreadID")(c.id);
            return !d || !a || !((c = a) == null ? void 0 : c.length) ? null : a.find(function(a) {
                return a.fbid === d
            })
        }
        ;
        d.$30 = function(a) {
            var c = this
              , d = this.props.tab
              , e = d.id;
            b("FantaTabActions").blurTab(e);
            d = h._("B\u1ea1n c\u00f3 ch\u1eafc b\u1ea1n mu\u1ed1n \u0111\u00f3ng c\u1eeda s\u1ed5 chat n\u00e0y kh\u00f4ng?");
            var f = h._("B\u1ea1n ch\u01b0a g\u1eedi tin nh\u1eafn c\u1ee7a m\u00ecnh.");
            b("SimpleXUIDialog").showConfirm(d, f, function(d) {
                d ? (c.$29(),
                a ? b("FantaTabActions").closeAndTabNext(e) : b("FantaTabActions").closeTab(e)) : b("FantaTabActions").focusTab(e)
            }, {
                autofocusConfirm: !0,
                useReactFocusBehavior: !0
            })
        }
        ;
        d.$13 = function() {
            this.$7 = Math.floor(Date.now() / 1e3)
        }
        ;
        d.$31 = function() {
            var a = this.props
              , c = a.thread
              , d = a.tab
              , e = c ? c.other_user_fbid : null
              , f = Math.floor(Date.now() / 1e3)
              , g = this.$7;
            c && e && c.is_other_recipient_page && b("Bootloader").loadModules(["PagesLogger", "PagesLoggerEventEnum", "PagesLoggerEventTargetEnum", "PagesEventObserver", "PagesEventType"], function(a, b, h, i, j) {
                a.log(e, b.CLICK, h.MESSAGE_FANTA_TAB_CLOSE, "", ["pages_surface_team"], {
                    open_tab_timestamp: g,
                    close_tab_timestamp: f,
                    last_message_timestamp: c.last_message_timestamp,
                    message_count: c.message_count,
                    snippet_sender: c.snippet_sender,
                    participants: c.participants,
                    entrypoint: d.entryPoint
                }),
                i.notify(j.MESSAGES_FANTA_TAB_CLOSE, e, {
                    open_tab_timestamp: g,
                    close_tab_timestamp: f,
                    last_message_timestamp: c.last_message_timestamp,
                    message_count: c.message_count,
                    snippet_sender: c.snippet_sender,
                    participants: c.participants,
                    entrypoint: d.entryPoint
                })
            }, "FantaTabMain.react")
        }
        ;
        d.$12 = function(a) {
            var c = this;
            if (!b("MercuryIDs").isValidThreadID(a))
                return;
            b("Bootloader").loadModules(["GroupChatMessageBlockAlert", "GroupChatMessageIgnoreAlert", "MercuryIgnoredBlockedParticipants.bs", "MercuryThreadActions"], function(d, e, f, g) {
                var h = g.get();
                b("MessengerState.bs").getThreadMeta(b("CurrentUser").getID(), a, function(d) {
                    var g = c.props
                      , i = g.fbid
                      , j = g.ignoredIds;
                    b("MessengerState.bs").compute(i, function(c) {
                        c = c.blocked_ids;
                        c = f.isPresentInGroupThread(i, c, d);
                        var g = b("MessengerParticipantUtils.bs").areParticipantsInGroupThread(i, j, d) && d.folder === "inbox";
                        !c && g && e.show(b("MessengerParticipantUtils.bs").participantsInGroupThread(i, j, d), b("MercuryIDs").getThreadFBIDFromThreadID(a), function() {
                            b("FantaTabActions").focusTab(a)
                        }, function() {
                            b("FantaTabActions").closeTab(a),
                            b("Bootloader").loadModules(["IgnoreMessagesTypedLogger", "IgnoreMessagesLoggingEvent", "IgnoreMessagesPlatforms"], function(c, d, e) {
                                h.changeFolder(a, b("MessagingTagConstants").other),
                                new c().setEvent(d.IGNORE_CONFIRMED).setThreadID(b("MercuryIDs").getThreadFBIDFromThreadID(a)).setPlatform(e.CHAT_TABS).log()
                            }, "FantaTabMain.react")
                        })
                    })
                })
            }, "FantaTabMain.react")
        }
        ;
        return c
    }(k.Component);
    e.exports = d;
    d.propTypes = {
        hasFetchedAll: (f = b("prop-types")).bool.isRequired,
        isFocused: f.bool.isRequired,
        isHovered: f.bool.isRequired,
        isLastGroupTab: f.bool.isRequired,
        onLoadMoreMessages: f.func.isRequired,
        onSelectSticker: f.func.isRequired,
        onSendHotLike: f.func.isRequired,
        onSendMessage: f.func.isRequired,
        onSendPhoto: f.func.isRequired,
        nonMinimizedRaisedTabCount: f.number,
        showContextBanner: f.bool,
        tab: f.object.isRequired,
        tabContent: f.object,
        thread: f.object,
        forGameChat: f.bool.isRequired
    }
}
), null);
__d("FantaTabMainLoader.react", ["Bootloader", "CurrentUser", "FantaAppStore", "FantaGetMessageActions", "FantaMessageActions", "FantaTabMain.react", "MercuryThreadActions", "MessageRequestUtils", "MessagingTag", "MessengerState.bs", "React", "TimeSlice", "emptyFunction", "prop-types", "requestIdleCallback", "setImmediate"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function h(a) {
        return !!a.preview_attachments[0].preview_url
    }
    var i = function(a) {
        b("FantaAppStore").addReducers(a);
        a = b("FantaAppStore").getState();
        a = (a = a) != null ? (a = a.mercury) != null ? a.tabContents : a : a;
        if (a) {
            var c = a.reduce(function(a, b) {
                b = b.thread;
                b && a.push(b);
                return a
            }, []);
            b("setImmediate")(function() {
                return b("FantaGetMessageActions").threadsUpdated(c)
            })
        }
        i = b("emptyFunction")
    };
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$1 = function() {
                var a = d.props.tab;
                b("MessengerState.bs").fetchMoreMessages(b("CurrentUser").getID(), a.id, 0, d.props.messages.length + 10, b("emptyFunction"))
            }
            ,
            d.$2 = function(a, c) {
                var e = d.props.tab;
                b("FantaMessageActions").sendSticker(e.id, a, c)
            }
            ,
            d.$3 = function(a, c, e, f) {
                var g = d.props.tab;
                b("FantaMessageActions").sendHotLike(g.id, a, c, e, f)
            }
            ,
            d.$4 = function(a, c, e) {
                var f = d.props.tabContent.thread
                  , g = d.props.tab;
                f && b("MessageRequestUtils").isMessageRequest(f) && b("MercuryThreadActions").get().changeFolder(f.thread_id, b("MessagingTag").INBOX);
                b("FantaMessageActions").sendMessage(g.id, a, c, e)
            }
            ,
            d.$5 = function(a, c) {
                var e = d.props.tab;
                h(a) ? b("FantaMessageActions").sendGif(e.id, a, c) : b("FantaMessageActions").sendPhoto(e.id, a, c)
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.shouldComponentUpdate = function(a) {
            var b = this.props;
            return b.isFocused !== a.isFocused || b.isHovered !== a.isHovered || b.isLastTabOfType !== a.isLastTabOfType || b.messengerState !== a.messengerState || !b.tab.equals(a.tab) || !b.tabContent.equals(a.tabContent)
        }
        ;
        d.componentDidMount = function() {
            var a = function() {
                b("Bootloader").loadModules(["FantaReducersTabSheets"], i, "FantaTabMainLoader.react")
            };
            b("TimeSlice").guard(function() {
                b("requestIdleCallback")(a)
            }, "additional request not needed for initial display", {
                propagationType: b("TimeSlice").PropagationType.ORPHAN
            })()
        }
        ;
        d.render = function() {
            var a = this.props
              , c = a.isFocused
              , d = a.isHovered
              , e = a.isLastTabOfType
              , f = a.messengerState
              , h = a.nonMinimizedRaisedTabCount
              , i = a.tab
              , j = a.tabContent
              , k = a.forGameChat
              , l = a.messages;
            a = a.hasFetchedAll;
            var m = j.showContextBanner
              , n = j.thread
              , o = j.threadPreviewID;
            o = o ? i.id + "-" + o : i.id;
            return !j ? g.jsx("div", {}, "noContent-" + o) : g.jsx(b("FantaTabMain.react"), {
                blockedIDs: b("MessengerState.bs").blockedIds(f),
                fbid: b("MessengerState.bs").fbid(f),
                forGameChat: k,
                hasFetchedAll: a,
                ignoredIds: b("MessengerState.bs").ignoredIds(f),
                isFocused: c,
                isHovered: d,
                isLastGroupTab: e,
                messages: l,
                onLoadMoreMessages: this.$1,
                onSelectSticker: this.$2,
                onSendHotLike: this.$3,
                onSendMessage: this.$4,
                onSendPhoto: this.$5,
                nonMinimizedRaisedTabCount: h,
                readReceipts: b("MessengerState.bs").readReceiptsPerThread(f),
                showContextBanner: m,
                tab: i,
                tabContent: j,
                thread: n
            }, o)
        }
        ;
        return c
    }(g.Component);
    e.exports = a;
    a.propTypes = {
        isFocused: (c = b("prop-types")).bool.isRequired,
        isHovered: c.bool.isRequired,
        isLastTabOfType: c.bool.isRequired,
        messengerState: c.object,
        nonMinimizedRaisedTabCount: c.number,
        tab: c.object.isRequired,
        tabContent: c.object
    }
}
), null);
__d("XUIBadgeReact.bs", ["ReasonReact.bs", "XUIBadge.react", "bs_js_null_undefined"], (function(a, b, c, d, e, f) {
    "use strict";
    function g(a) {
        if (a !== void 0)
            if (a)
                return "regular";
            else
                return "special"
    }
    function a(a, c, d, e, f) {
        var h;
        return b("ReasonReact.bs").wrapJsForReason(b("XUIBadge.react"), {
            className: (h = b("bs_js_null_undefined")).fromOption(c),
            count: h.fromOption(d),
            maxcount: h.fromOption(e),
            type: h.fromOption(g(a))
        }, f)
    }
    f.stringOfBadgeType = g;
    f.make = a
}
), null);
__d("FantaM4HeaderMinimized.bs", ["cx", "fbt", "bs_curry", "React", "qex", "bs_belt_Set", "setTimeout", "bs_belt_Option", "bs_caml_option", "ReasonReact.bs", "FantaM4Header.bs", "ParticipantId.bs", "XUIBadgeReact.bs", "ChatThreadName.bs", "ChatDetailStack.bs", "MercuryThreadInfo", "FantaProfilePresence.bs", "FantaCloseActionButton.bs", "MessengerCustomColorUtils.bs", "MessengerParticipantUtils.bs", "MessengerPresenceProvider.bs"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    function a(a) {
        var c = a.highlightNewMessage
          , d = a.onClose
          , e = a.onHeaderToggle
          , f = a.participants
          , g = a.thread
          , j = a.viewer
          , k = a.isNewMessageTab
          , l = a.isMessengerOnlyUser
          , m = a.pageIndicatorDescription
          , n = f == null ? void 0 : b("bs_caml_option").some(f);
        a = g == null ? void 0 : b("bs_caml_option").some(g);
        f = i.useReducer(function(a, b) {
            if (b)
                return {
                    highlighted: !1
                };
            else
                return {
                    highlighted: !0
                }
        }, {
            highlighted: !1
        });
        var o = f[1];
        f = f[0];
        var p = i.useRef(c);
        i.useEffect(function() {
            !p.current && c && (b("bs_curry")._1(o, 0),
            b("setTimeout")(function(a) {
                return b("bs_curry")._1(o, 1)
            }, 1e3));
            p.current = c;
            return
        });
        var q = b("FantaM4Header.bs").getProfileImages(a, n, j), r = g == null ? 0 : g.unread_count, s = b("FantaM4Header.bs").getTooltip(a), t;
        if (g == null)
            t = b("MessengerCustomColorUtils.bs").defaultColor(0);
        else {
            var u = g.header_color;
            t = u == null ? b("MessengerCustomColorUtils.bs").defaultColor(0) : u
        }
        u = c && f.highlighted;
        var v, w = 0;
        u ? t !== void 0 ? v = [0, t, "_69pt _2mgn _6d6l"] : w = 1 : t !== void 0 ? v = [2, "", "_69pt _6d6l"] : w = 1;
        w === 1 && (v = [1, "", "_69pt _6d6l"]);
        var x = v[1];
        u = g == null ? [null, !0] : [g.thread_fbid, g.is_canonical];
        var y = u[1]
          , z = u[0];
        t = b("bs_belt_Option").map(a, function(a) {
            return b("bs_belt_Set").fromArray(a.participants, b("ParticipantId.bs"))
        });
        var A = function(a) {
            return 0
        };
        if (k)
            w = null;
        else {
            u = {
                children: function(a) {
                    var c = b("qex")._("967984");
                    return i.createElement(b("FantaProfilePresence.bs").make, {
                        images: q,
                        imageSize: 20,
                        isActive: m == null ? g == null ? !1 : b("MessengerParticipantUtils.bs").areParticipantsInThread(j, a, g) && !l : c,
                        border: !0,
                        threadHref: "",
                        tooltip: s,
                        backgroundColor: x,
                        showMultiCompany: !1,
                        isCanonical: y,
                        threadFBID: z == null ? void 0 : b("bs_caml_option").some(z),
                        participants: n,
                        onHeaderClick: A
                    })
                }
            };
            t !== void 0 && (u.subscribeToIDs = b("bs_caml_option").valFromOption(t));
            w = i.createElement(b("MessengerPresenceProvider.bs").make, u)
        }
        t = k ? h._("Tin nh\u1eafn m\u1edbi") : i.createElement(b("ChatThreadName.bs").make, {
            thread: a,
            threadHref: "",
            tooltip: s,
            viewer: j,
            className: "_2mgq",
            isNewMessageTab: k,
            onHeaderClick: A
        });
        u = r > 0 && !(c && f.highlighted);
        k = b("qex")._("830274");
        f = u ? k ? i.jsx("div", {
            children: i.jsx("div", {
                className: "_7joj"
            }),
            className: "_7joc"
        }) : b("ReasonReact.bs").element(void 0, void 0, b("XUIBadgeReact.bs").make(0, "_429n", r, 99, [])) : null;
        u = b("bs_belt_Option").mapWithDefault(a, !1, function(a) {
            return b("MercuryThreadInfo").isMuted(a)
        });
        return i.jsx("div", {
            children: i.jsxs("div", {
                children: [w, i.jsxs("div", {
                    children: [i.createElement(b("ChatDetailStack.bs").make, {
                        topDetail: t,
                        bottomDetail: null
                    }), i.jsxs("div", {
                        children: [f, u ? i.jsx("div", {
                            children: i.jsx("i", {
                                className: "_7kxx"
                            }),
                            className: "_66n5"
                        }) : null, i.jsx("div", {
                            children: i.createElement(b("FantaCloseActionButton.bs").make, {
                                iconStyle: v[0],
                                onClose: d,
                                isFocused: !1
                            }),
                            className: "_66n5"
                        })],
                        className: "_69ae"
                    })],
                    className: "_66n3"
                })],
                className: "_66n2"
            }),
            className: v[2],
            style: {
                backgroundColor: x
            },
            onClick: e
        })
    }
    c = 20;
    d = 1e3;
    e = a;
    f.small_profile_image_size = c;
    f.blink_threshold_ms = d;
    f.make = e
}
), null);
__d("FantaTabMinimized.react", ["cx", "fbt", "Bootloader", "CurrentUser", "FantaAvailableStatus", "FantaM4HeaderMinimized.bs", "FantaTabActions", "MercuryIDs", "React", "ShortProfiles", "SimpleXUIDialog", "prop-types"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$2 = function(a) {
                a = d.props;
                var c = a.tab;
                a = a.tabContent;
                !a || a && a.composer.text.length === 0 && !d.$4() ? (d.$5(),
                b("FantaTabActions").closeTab(c.id)) : d.$6()
            }
            ,
            d.$3 = function(a) {
                var c = a.target;
                c && c.classList && !c.classList.contains("button") && (a.stopPropagation(),
                b("FantaTabActions").unminimizeTab(d.props.tab.id),
                b("FantaTabActions").focusTab(d.props.tab.id))
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.shouldComponentUpdate = function(a) {
            var b = this.props;
            return !b.tab.equals(a.tab) || !b.tabContent && !!a.tabContent || !!b.tabContent && !b.tabContent.equals(a.tabContent)
        }
        ;
        d.$1 = function() {
            var a = this.props.tabContent
              , c = a && a.thread
              , d = b("CurrentUser").getID()
              , e = a ? b("MercuryIDs").getUserIDFromThreadID(a.id) : null;
            e = e ? b("ShortProfiles").getNow(e) : null;
            e = e && e.is_messenger_only;
            return i.jsx("div", {
                className: "clearfix titlebar",
                children: i.jsx(b("FantaM4HeaderMinimized.bs").make, {
                    highlightNewMessage: a && a.highlightNewMessage,
                    isNewMessageTab: a && a.isNewMessageTab,
                    onClose: this.$2,
                    onHeaderToggle: this.$3,
                    isMessengerOnlyUser: e,
                    pageIndicatorDescription: a && a.pageIndicatorDescription,
                    participants: a && a.participants,
                    thread: c,
                    viewer: d
                })
            })
        }
        ;
        d.render = function() {
            var a = this.props
              , c = a.tab;
            a = a.tabContent;
            c = c.id;
            a = a && !!a.thread && b("FantaAvailableStatus").isAvailable(a.thread, c);
            return i.jsx("div", {
                className: "_4cd8 _50mz _50m_ fbNub _50-v" + (a ? " _4-0b" : "") + " _27_3",
                ref: "root",
                children: this.$1()
            })
        }
        ;
        d.$5 = function() {
            var a = this.props.tab.id;
            b("Bootloader").loadModules(["MessengerShareFilePreviewFunnelLogger"], function(b) {
                return b.endFunnel(a)
            }, "FantaTabMinimized.react")
        }
        ;
        d.$4 = function() {
            return this.$7() || this.$8()
        }
        ;
        d.$7 = function() {
            var a, b = this.props.tabContent;
            a = ((a = b) != null ? (a = a.composer) != null ? (a = a.fileUploader) != null ? a.uploadedFiles : a : a : a) || {
                size: 0
            };
            b = ((b = b) != null ? (b = b.composer) != null ? (b = b.fileUploader) != null ? b.uploadingFiles : b : b : b) || {
                size: 0
            };
            return a.size > 0 || b.size > 0
        }
        ;
        d.$8 = function() {
            var a = this.props.tabContent;
            a = (a = a) != null ? (a = a.composer) != null ? a.sharePreview : a : a;
            return !!(a && a.params && a.type)
        }
        ;
        d.$6 = function() {
            var a = this.props.tab
              , c = h._("B\u1ea1n c\u00f3 ch\u1eafc b\u1ea1n mu\u1ed1n \u0111\u00f3ng c\u1eeda s\u1ed5 chat n\u00e0y kh\u00f4ng?");
            b("FantaTabActions").blurTab(a.id);
            var d = h._("B\u1ea1n ch\u01b0a g\u1eedi tin nh\u1eafn c\u1ee7a m\u00ecnh.");
            b("SimpleXUIDialog").showConfirm(c, d, function(c) {
                c ? b("FantaTabActions").closeTab(a.id) : b("FantaTabActions").focusTab(a.id)
            }, {
                autofocusConfirm: !0,
                useReactFocusBehavior: !0
            })
        }
        ;
        return c
    }(i.Component);
    e.exports = a;
    a.propTypes = {
        tab: b("prop-types").object.isRequired,
        tabContent: b("prop-types").object
    }
}
), null);
__d("FantaMercuryTabsWithMain.react", ["Bootloader", "CurrentUser", "FantaAppStore", "FantaCookieUtil", "FantaMercuryTabOverflowBootloader.react", "FantaTabActions", "FantaTabGroup.react", "FantaTabMainLoader.react", "FantaTabMinimized.react", "FluxContainer", "LazyComponent.react", "LoadOnRender.react", "MercuryIDs", "MessengerState.bs", "PresenceState", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = function(a) {
        b("Bootloader").loadModules(["MessengerReasonDialogContainerReact.bs"], function(b) {
            b = b.jsComponent;
            return a(b)
        }, "FantaMercuryTabsWithMain.react")
    };
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        c.getStores = function() {
            return [b("FantaAppStore")]
        }
        ;
        c.calculateState = function() {
            return {
                tabGroup: b("FantaAppStore").getState().tabGroup,
                tabContents: b("FantaAppStore").getState().mercury.tabContents
            }
        }
        ;
        var d = c.prototype;
        d.componentDidMount = function() {
            this.props.loadDataOnMount && b("FantaTabActions").loadFromData(b("FantaCookieUtil").convertCookieData(b("PresenceState").get()))
        }
        ;
        d.render = function() {
            var a = this;
            return g.jsx(b("MessengerState.bs").jsComponent, {
                fbid: b("CurrentUser").getID(),
                children: function(c) {
                    return [g.jsx(b("FantaTabGroup.react"), {
                        messengerState: c,
                        MainComponent: b("FantaTabMainLoader.react"),
                        MinimizedComponent: b("FantaTabMinimized.react"),
                        OverflowComponent: b("FantaMercuryTabOverflowBootloader.react"),
                        tabGroup: a.state.tabGroup,
                        tabContents: a.state.tabContents,
                        isLastOfTypeChecker: a.$1
                    }, "tabgroup"), g.jsx(b("LoadOnRender.react"), {
                        component: g.jsx(b("LazyComponent.react"), {}),
                        loader: h,
                        placeholder: g.jsx("span", {})
                    }, "dialog")]
                }
            })
        }
        ;
        d.$1 = function(a) {
            return b("MercuryIDs").isGroupChat(a.id)
        }
        ;
        return c
    }(g.PureComponent);
    c = b("FluxContainer").create(a);
    e.exports = c
}
), null);
__d("FantaMercuryThreadEventsBootloaded", ["Bootloader", "CurrentUser", "MercuryThreadInformer", "MercuryViewer", "MessengerState.bs", "MWCount.re", "WorkplaceChatHelper", "gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    f.registerForNewMessage = a;
    f.registerForNewLogMessage = c;
    f.registerForMessagesReceived = d;
    var g = b("MercuryThreadInformer").get()
      , h = 60 * 60 * 1e3;
    function i(a, c, d) {
        var e = b("gkx")("793912") && d.timestamp < Date.now() - h;
        d.author !== b("MercuryViewer").getID() && d.is_unread && !e ? b("MessengerState.bs").getThreadMeta(b("CurrentUser").getID(), c, function(e) {
            b("Bootloader").loadModules(["ChatTabPolicy"], function(b) {
                b.messageIsAllowed(e, d, function() {
                    a(c, d)
                })
            }, "FantaMercuryThreadEventsBootloaded")
        }) : b("MWCount.re").Blue.NewMessage.Reject.old()
    }
    function a(a) {
        g.subscribe("new-message", function(c, d) {
            c = d.threadID;
            d = d.message;
            b("MWCount.re").Blue.NewMessage.Process.newMessage();
            b("WorkplaceChatHelper").suppressChatIfActiveOnDesktop() || i(a, c, d)
        })
    }
    function c(a) {
        g.subscribe("new-log-message", function(c, d) {
            c = d.threadID;
            d = d.message;
            b("MWCount.re").Blue.NewMessage.Process.logMessage();
            !b("WorkplaceChatHelper").suppressChatIfActiveOnDesktop() ? i(a, c, d) : b("MWCount.re").Blue.NewMessage.Reject.old()
        })
    }
    function d(a) {
        g.subscribe("messages-received", function(c, d) {
            b("MWCount.re").Blue.NewMessage.Process.messagesReceived();
            if (!b("WorkplaceChatHelper").suppressChatIfActiveOnDesktop())
                for (var e in d) {
                    c = d[e];
                    for (var f = 0; f < c.length; f++) {
                        var g = c[f];
                        i(a, e, g)
                    }
                }
        })
    }
}
), null);
__d("FantaTabViewportManager", ["Arbiter", "DockTabsViewportCalculator", "DockTabsViewportFantaTabUtils", "FantaTabActions", "ifRequired", "immutable", "isWebMessengerURI", "qex", "setImmediate"], (function(a, b, c, d, e, f) {
    "use strict";
    f.init = a;
    var g = b("qex")._("830597");
    function a(a) {
        var c = b("DockTabsViewportCalculator").getInstance(a);
        if (!c)
            return;
        c.registerFantaTabCallbacks({
            fantaTabModelStateGetter: function() {
                var a = b("immutable").Map({});
                b("ifRequired")("FantaAppStore", function(b) {
                    a = b.getState().tabGroup.tabs
                });
                return a
            },
            onAvailableWidthChanged: function(a) {
                var c = g ? 1 : b("DockTabsViewportFantaTabUtils").getTabCountToFitWidth(a)
                  , d = function() {
                    b("FantaTabActions").setAllowedRaisedTabs(c)
                };
                b("ifRequired")("FantaAppStore", function(a) {
                    a = a.getState().tabGroup.allowedRaisedTabs;
                    c !== a && b("setImmediate")(d)
                }, function() {
                    b("setImmediate")(d)
                })
            }
        });
        b("Arbiter").subscribe("FantaReducersDockCalculator/shouldRecalculate", function() {
            c.forceRecalculateChatTabs()
        });
        c.forceRecalculateFBDockWidth();
        b("Arbiter").subscribe("page_transition", function(a, c) {
            b("isWebMessengerURI")(c.uri) && b("setImmediate")(function() {
                return b("FantaTabActions").minimizeAllTabs()
            })
        })
    }
}
), null);
__d("FantaTabsAppBase", ["Bootloader", "ChatAppActions", "ChatAppStore", "ChatPerfInstrumentation", "CSS", "MWCount.re"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {}
        var c = a.prototype;
        c.init = function(a, c, d) {
            if (this.isInitialized())
                return;
            b("MWCount.re").Blue.load();
            this.$1 = a;
            this.tabsElem = c;
            var e = b("ChatAppStore").addListener(function() {
                var a = b("ChatAppStore").getPreviousState()
                  , c = b("ChatAppStore").getState();
                a.initialDisplayDone === !1 && c.initialDisplayDone === !0 && (b("ChatPerfInstrumentation").logDisplayDone(),
                e.remove())
            });
            b("ChatPerfInstrumentation").init();
            this.$2(d);
            this.initializeFantaData(d.interstitial_data);
            this.initializeFantaUI();
            this.$3();
            b("ChatAppActions").tti();
            b("ChatPerfInstrumentation").logTTI()
        }
        ;
        c.isInitialized = function() {
            return !!b("ChatAppStore").getState().isInitialized
        }
        ;
        c.isHidden = function() {
            var a = b("ChatAppStore").getState();
            return !!(!a.isInitialized || a.isHidden)
        }
        ;
        c.hide = function() {
            if (this.isHidden())
                return;
            b("CSS").hide(this.$1);
            b("ChatAppActions").hide()
        }
        ;
        c.unhide = function() {
            var a = b("ChatAppStore").getState();
            a.isInitialized ? a.isHidden && (b("CSS").show(this.$1),
            d(["Dock"], function(a) {
                a.resizeAllFlyouts()
            }),
            b("ChatAppActions").unhide()) : a.isLoaded || (d(["UIPagelet"], function(a) {
                a.loadFromEndpoint("ChatTabsPagelet", "ChatTabsPagelet"),
                a.loadFromEndpoint("BuddylistPagelet", "BuddylistPagelet")
            }),
            b("ChatAppActions").load())
        }
        ;
        c.initializeFantaData = function(a) {}
        ;
        c.initializeFantaUI = function() {}
        ;
        c.$2 = function(a) {
            d(["MercuryDeliveryState", "MessengerParticipants.bs", "MercuryServerPayloadPreprocessor", "MessengerState.bs", "MercurySyncEnvironment", "P2PSendMoneyDialogStore"], function(c, d, e, f, g, h) {
                c.get(),
                d,
                g.setUp(),
                b("ChatPerfInstrumentation").logInitStores(),
                a.graphql_payload ? b("Bootloader").loadModules(["ChatInitialDataTransformer.bs"], function(b) {
                    var c = a.graphql_payload;
                    b = b.transform(c);
                    b.message_blocked_ids = c.message_blocked_ids;
                    b.message_ignored_ids = c.message_ignored_ids;
                    b.payload_source = c.payload_source;
                    e.get().handleUpdate(b)
                }, "FantaTabsAppBase") : e.get().handleUpdate(a.initial_data)
            })
        }
        ;
        c.$3 = function() {
            d(["HotLikeSound", "ChatOptions"], function(a, c) {
                a.setCheckSoundEnabledFunc(function() {
                    return c.getSetting("sound")
                }),
                b("ChatPerfInstrumentation").logInitSound()
            })
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("FantaTabsReactApp", ["Bootloader", "ChatPerfInstrumentation", "FantaMercuryTabsWithMain.react", "FantaTabsAppBase", "React", "ReactDOM", "UserActivity", "gkx", "setImmediate"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React"), h = 500, i;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var e = c.prototype;
        e.initializeFantaData = function(a) {
            d(["FantaAppStore", "FantaCookieUtil", "FantaGetMessageActions", "FantaTabActions", "MercuryThreadInformer", "PresenceState"], function(c, d, e, f, g, j) {
                f.loadFromData(d.convertCookieData(j.get(), null, a)),
                j.registerStateLoader(function(b) {
                    f.loadFromData(d.convertCookieData(b, c.getState().tabGroup, a))
                }),
                j.registerStateStorer(function(a) {
                    if (!b("UserActivity").isOnTab() && !b("UserActivity").isActive(h))
                        return a;
                    var e = c.getState().tabGroup;
                    if (!i || i && !i.equals(e)) {
                        i = e;
                        return d.createCookieData(e, a)
                    } else
                        return a
                }),
                g.get().subscribe("threads-updated", function(a, c) {
                    Object.keys(c).forEach(function(a) {
                        b("setImmediate")(function() {
                            e.refreshThread(a)
                        })
                    })
                }),
                b("ChatPerfInstrumentation").logInitData()
            })
        }
        ;
        e.initializeFantaUI = function() {
            var a = this;
            b("gkx")("1105821") ? b("Bootloader").loadModules(["ZenonMessageHandler"], function(a) {
                a.init()
            }, "FantaTabsReactApp") : b("Bootloader").loadModules(["FBRTCMessageHandler"], function(a) {
                a.init()
            }, "FantaTabsReactApp");
            d(["FantaAppStore", "FantaMercuryThreadEventsBootloaded", "FantaMessageActions", "FantaTabActions", "FantaTabViewportManager", "MercuryBrowserAlerts"], function(c, d, e, f, g, h) {
                h.init();
                b("ReactDOM").render(a.getViewComponent(), a.tabsElem);
                f = function(a, c) {
                    b("setImmediate")(function() {
                        e.receivedNewMessage(a, c)
                    })
                }
                ;
                d.registerForNewLogMessage(f);
                d.registerForNewMessage(f);
                g.init(a.tabsElem);
                b("ChatPerfInstrumentation").logInitUI();
                h = c.getState().tabGroup.tabs;
                h.toArray().length === 0 && b("ChatPerfInstrumentation").logDisplayDone()
            })
        }
        ;
        e.getViewComponent = function() {
            return g.jsx(b("FantaMercuryTabsWithMain.react"), {
                loadDataOnMount: !1
            })
        }
        ;
        return c
    }(b("FantaTabsAppBase"));
    c = new a();
    e.exports = c
}
), null);
__d("MercuryAudienceRestrictedTypeaheadDataSource", ["CurrentUser", "DataSource", "OrderedFriendsList", "ShortProfiles"], (function(a, b, c, d, e, f) {
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(b) {
            b = b || {};
            b.kanaNormalization = !0;
            b.maxResults = 5;
            b.minQueryLength = 2;
            b = a.call(this, b) || this;
            b.$MercuryAudienceRestrictedTypeaheadDataSource1 = !1;
            b.$MercuryAudienceRestrictedTypeaheadDataSource2 = !1;
            b.$MercuryAudienceRestrictedTypeaheadDataSource3 = {};
            b.$MercuryAudienceRestrictedTypeaheadDataSource4 = !0;
            b.queryCache = {};
            b.localCache = {};
            b.queryIDs = {};
            return b
        }
        var d = c.prototype;
        d.dirty = function() {
            return this
        }
        ;
        d.buildData = function(b) {
            return a.prototype.buildData.call(this, b)
        }
        ;
        d.query = function(b, c, d, e) {
            c = c || b.length === 1;
            return a.prototype.query.call(this, b, c, d, e)
        }
        ;
        d.getQueryData = function(b, c) {
            return babelHelpers["extends"]({}, a.prototype.getQueryData.call(this, b, c))
        }
        ;
        d.setEntry = function(a, b) {
            this.$MercuryAudienceRestrictedTypeaheadDataSource3[a] = b
        }
        ;
        d.getEntry = function(a) {
            return this.$MercuryAudienceRestrictedTypeaheadDataSource3[a] || null
        }
        ;
        d.getCachedShortProfileIDs = function() {
            var a = b("ShortProfiles").getCachedProfileIDs();
            a = a.filter(function(a) {
                var c = b("ShortProfiles").getNow(a);
                return a == b("CurrentUser").getID() || c && (c.type === "friend" || c.type === "fb4c")
            });
            return a
        }
        ;
        d.isBootstrapped = function() {
            return this.$MercuryAudienceRestrictedTypeaheadDataSource1
        }
        ;
        d.isBootstrapping = function() {
            return this.$MercuryAudienceRestrictedTypeaheadDataSource2
        }
        ;
        d.processEntries = function(c, d) {
            c = c && c.map(function(a) {
                a.index == null && (a.render_type === "friend" || a.render_type === "fb4c") && (a.index = b("OrderedFriendsList").getActiveRank(a.uid));
                return a
            });
            return a.prototype.processEntries.call(this, c)
        }
        ;
        d.mergeUids = function(b, c, d, e) {
            var f = this;
            c = c.sort(function(a, b) {
                a = f.getEntry(a);
                b = f.getEntry(b);
                return a && a.index && b && b.index ? a.index - b.index : 0
            });
            return a.prototype.mergeUids.call(this, b, c, d, e)
        }
        ;
        d.setQueryData = function(b, c) {
            return a.prototype.setQueryData.call(this, b)
        }
        ;
        d.respond = function(b, c, d) {
            return a.prototype.respond.call(this, b, c, d)
        }
        ;
        d.setShowThreads = function(a) {
            this.$MercuryAudienceRestrictedTypeaheadDataSource4 = a
        }
        ;
        return c
    }(b("DataSource"));
    e.exports = a
}
), null);
__d("ChatGroupCannotAddBackDialog.react", ["fbt", "FDSButton.react", "FDSModal.react", "FDSModalFooter.react", "FDSModalHeader.react", "FDSSection.react", "FDSText.react", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            return h.jsx(b("FDSModal.react"), {
                isShown: !0,
                onHide: this.props.onHide,
                footer: h.jsx(b("FDSModalFooter.react"), {
                    primaryButton: h.jsx(b("FDSButton.react"), {
                        use: "primary",
                        label: g._("\u0110\u00f3ng"),
                        onClick: this.props.onHide
                    })
                }),
                header: h.jsx(b("FDSModalHeader.react"), {
                    title: g._("{name} left the group", [g._param("name", this.props.name)])
                }),
                width: 410,
                children: h.jsx(b("FDSSection.react"), {
                    children: h.jsx(b("FDSText.react"), {
                        size: "body1",
                        children: g._("{name} can't be added to this group again.", [g._param("name", this.props.name)])
                    })
                })
            })
        }
        ;
        return c
    }(h.Component);
    e.exports = a
}
), null);
__d("ChatTabAddBackPreventedQuery", ["RelayFBEnvironment", "RelayModern", "promiseDone", "ChatTabAddBackPreventedQuery.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    f.fetch = a;
    var g, h = g !== void 0 ? g : g = b("ChatTabAddBackPreventedQuery.graphql");
    function a(a, c) {
        b("promiseDone")(b("RelayModern").fetchQuery(b("RelayFBEnvironment"), h, {
            thread_id: a
        }), function(a) {
            c(a.message_thread.non_addable_recipients.nodes.map(function(a) {
                return a.id
            }))
        })
    }
}
), null);
__d("MercuryTypeaheadDataSource", ["CurrentUser", "DataSource", "OrderedFriendsList", "ShortProfiles"], (function(a, b, c, d, e, f) {
    var g = []
      , h = {}
      , i = {}
      , j = {}
      , k = []
      , l = []
      , m = []
      , n = !1
      , o = !1;
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(c, a);
        function c(b) {
            var c;
            b = b || {};
            b.kanaNormalization = !0;
            c = a.call(this, b) || this;
            c.showDefaultList = b.showDefaultList || !1;
            return c
        }
        var d = c.prototype;
        d.dirty = function() {
            this.$MercuryTypeaheadDataSource1 = g;
            this.localCache = i;
            this.queryCache = h;
            this.queryIDs = j;
            this.defaultList = k;
            this.topEntryIDs = l;
            this.nullStateExclusions = m;
            return this
        }
        ;
        d.bootstrap = function() {
            if (n || o)
                return !1;
            o = !0;
            b("ShortProfiles").fetchAll().then(function() {
                this.updateBootstrapData(),
                o = !1,
                n = !0,
                this.showDefaultList && this.inform("show-default", {
                    impressions: this.defaultList
                })
            }
            .bind(this), function() {}
            .bind(this));
            return !0
        }
        ;
        d.updateBootstrapData = function() {
            var a = this.getCachedShortProfileIDs()
              , c = b("CurrentUser").isWorkUser() ? "fb4c" : "friend";
            a = a.map(function(a) {
                var d = b("ShortProfiles").getNow(a)
                  , e = a == b("CurrentUser").getID() ? c : d.type
                  , f = [d.additionalName, d.alternateName].concat(d.searchTokens || []).join(" ")
                  , g = d.name
                  , h = null;
                return {
                    uid: a,
                    index: b("OrderedFriendsList").getActiveRank(a),
                    text: g,
                    subtext: h,
                    tokens: f,
                    localized_text: d.name,
                    additional_text: d.additionalName,
                    photo: d.thumbSrc,
                    render_type: e,
                    type: "user"
                }
            });
            a.length && this.addEntries(a);
            if (!this.showDefaultList)
                return;
            l = a.sort(function(a, b) {
                return a.index - b.index
            }).map(function(a) {
                return a.uid
            });
            this.defaultList = this.buildData(l.slice(0, 5));
            this.topEntryIDs = l
        }
        ;
        d.updateDefaultList = function(a) {
            var b = this;
            if (!a)
                return;
            this.nullStateExclusions.includes(a) ? this.nullStateExclusions = this.nullStateExclusions.filter(function(b) {
                return b !== a
            }) : this.nullStateExclusions.push(a);
            k = this.topEntryIDs.filter(function(a) {
                return !b.nullStateExclusions.includes(a)
            });
            this.defaultList = this.buildData(k.slice(0, 5))
        }
        ;
        d.query = function(b, c, d, e) {
            c = c || b.length === 1;
            return a.prototype.query.call(this, b, c, d, e)
        }
        ;
        d.getQueryData = function(b, c) {
            return babelHelpers["extends"]({}, a.prototype.getQueryData.call(this, b, c))
        }
        ;
        d.setEntry = function(a, b) {
            this.$MercuryTypeaheadDataSource1[a] = b
        }
        ;
        d.getEntry = function(a) {
            return this.$MercuryTypeaheadDataSource1[a] || null
        }
        ;
        d.getCachedShortProfileIDs = function() {
            var a = b("ShortProfiles").getCachedProfileIDs();
            a = a.filter(function(a) {
                var c = b("ShortProfiles").getNow(a);
                return a == b("CurrentUser").getID() || c.type === "friend" || c.type === "fb4c"
            });
            return a
        }
        ;
        d.isBootstrapped = function() {
            return n
        }
        ;
        d.isBootstrapping = function() {
            return o
        }
        ;
        d.processEntries = function(c, d) {
            c = c.map(function(a) {
                a.index == null && (a.render_type === "friend" || a.render_type === "fb4c") && (a.index = b("OrderedFriendsList").getActiveRank(a.uid));
                return a
            });
            return a.prototype.processEntries.call(this, c)
        }
        ;
        d.mergeUids = function(b, c, d, e) {
            var f = this;
            c = c.sort(function(a, b) {
                return f.getEntry(a).index - f.getEntry(b).index
            });
            return a.prototype.mergeUids.call(this, b, c, d, e)
        }
        ;
        d.setShowDefaultList = function(a) {
            this.showDefaultList = a
        }
        ;
        return c
    }(b("DataSource"));
    e.exports = a
}
), null);
__d("ChatTabTypeaheadDataSource", ["MercuryConfig", "MercuryTypeaheadDataSource"], (function(a, b, c, d, e, f) {
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(c, a);
        function c(c) {
            c = c || {};
            c.maxResults = 5;
            c.showDefaultList = b("MercuryConfig").ChatComposer;
            c = a.call(this, c) || this;
            c.$ChatTabTypeaheadDataSource1 = !0;
            return c
        }
        var d = c.prototype;
        d.buildData = function(b) {
            var c = this
              , d = []
              , e = []
              , f = []
              , g = []
              , h = []
              , i = []
              , j = []
              , k = !this.$ChatTabTypeaheadDataSource1;
            b.forEach(function(b) {
                var i = a.prototype.getEntry.call(c, b);
                switch (i.render_type) {
                case "friend":
                    d.push(b);
                    break;
                case "thread":
                    c.$ChatTabTypeaheadDataSource1 && e.push(b);
                    break;
                case "commerce_page":
                    k || h.push(b);
                    break;
                case "non_friend":
                    f.push(b);
                    break;
                case "fb4c":
                    g.push(b);
                    break;
                case "page":
                    k || h.push(b);
                    break;
                case "internal_bot_page":
                    i = !k || i.can_add_to_group_chat;
                    i && j.push(b);
                    break;
                default:
                    break
                }
            }, this);
            b = i.concat(d, g, e, h, f, j);
            return a.prototype.buildData.call(this, b)
        }
        ;
        d.query = function(b, c, d, e) {
            return a.prototype.query.call(this, b, c, d, e)
        }
        ;
        d.respond = function(b, c, d) {
            return a.prototype.respond.call(this, b, c, d)
        }
        ;
        d.setShowThreads = function(a) {
            this.$ChatTabTypeaheadDataSource1 = a
        }
        ;
        return c
    }(b("MercuryTypeaheadDataSource"));
    e.exports = a
}
), null);
__d("ChatTabTypeaheadAddMemberDataSource", ["fbt", "ChatGroupCannotAddBackDialog.react", "ChatTabAddBackPreventedQuery", "ChatTabTypeaheadDataSource", "DOM", "React", "ReactDOM"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = b("DOM").create("div", {
        id: "ChatTabTypeaheadAddMemberDataSource_dialog"
    })
      , j = !1
      , k = new Map();
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(b) {
            return a.call(this, b) || this
        }
        var d = c.prototype;
        d.setQueryData = function(c, d) {
            c.thread_id && b("ChatTabAddBackPreventedQuery").fetch(c.thread_id, function(a) {
                k.set(c.thread_id, new Set(a))
            });
            return a.prototype.setQueryData.call(this, c, d)
        }
        ;
        d.processResults = function(b, c, d) {
            var e = k.get(this.queryData.thread_id);
            e && c.forEach(function(a, b, c) {
                e.has(a.uid) && (c[b] = babelHelpers["extends"]({}, a, {
                    disabled: !0,
                    subtext: g._("Left the group"),
                    onSelectDisabled: function() {
                        return l(a.text)
                    }
                }))
            });
            a.prototype.processResults.call(this, b, c, d)
        }
        ;
        return c
    }(b("ChatTabTypeaheadDataSource"));
    e.exports = a;
    function l(a) {
        if (j)
            return;
        j = !0;
        b("ReactDOM").render(h.jsx(b("ChatGroupCannotAddBackDialog.react"), {
            name: a,
            onHide: function() {
                b("ReactDOM").unmountComponentAtNode(i),
                j = !1
            }
        }), i)
    }
}
), null);
