if (self.CavalryLogger) {
    CavalryLogger.start_js(["j0wOE"]);
}

__d("BaseAsyncLoader", ["KeyedCallbackManager", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f) {
    var g = {};
    function h(a, c, d) {
        var e = new (b("KeyedCallbackManager"))()
          , f = !1
          , g = [];
        function h() {
            if (!g.length || f)
                return;
            f = !0;
            b("setTimeoutAcrossTransitions")(j, 0)
        }
        function i(a) {
            f = !1,
            a.forEach(e.unsubscribe.bind(e)),
            h()
        }
        function j() {
            var b = {}
              , c = [];
            g = g.filter(function(a) {
                var d = e.getUnavailableResources(a);
                if (d.length) {
                    d.forEach(function(a) {
                        b[a] = !0
                    });
                    c.push(a);
                    return !0
                }
                return !1
            });
            var h = Object.keys(b);
            h.length ? d(a, h, c, k.bind(null, c), l.bind(null, c)) : f = !1
        }
        function k(a, b) {
            b = b.payload[c] || b.payload;
            e.addResourcesAndExecute(b);
            i(a)
        }
        function l(a) {
            i(a)
        }
        return {
            get: function(a, b) {
                a = e.executeOrEnqueue(a, b);
                b = e.getUnavailableResources(a);
                b.length && (g.push(a),
                h())
            },
            getCachedKeys: function() {
                return Object.keys(e.getAllResources())
            },
            getNow: function(a) {
                return e.getResource(a) || null
            },
            set: function(a) {
                e.addResourcesAndExecute(a)
            }
        }
    }
    function a(a, b) {
        throw new Error("BaseAsyncLoader can't be instantiated")
    }
    Object.assign(a.prototype, {
        _getLoader: function() {
            g[this._endpoint] || (g[this._endpoint] = h(this._endpoint, this._type, this.send));
            return g[this._endpoint]
        },
        get: function(a, b) {
            return this._getLoader().get(a, b)
        },
        getCachedKeys: function() {
            return this._getLoader().getCachedKeys()
        },
        getNow: function(a) {
            return this._getLoader().getNow(a)
        },
        reset: function() {
            g[this._endpoint] = null
        },
        set: function(a) {
            this._getLoader().set(a)
        }
    });
    e.exports = a
}
), null);
__d("AjaxLoader", ["AsyncRequest", "BaseAsyncLoader", "LogHistory"], (function(a, b, c, d, e, f) {
    var g = b("LogHistory").getInstance("ajax_loader");
    function a(a, b) {
        this._endpoint = a,
        this._type = b
    }
    Object.assign(a.prototype, b("BaseAsyncLoader").prototype);
    a.prototype.send = function(a, c, d, e, f) {
        new (b("AsyncRequest"))().setURI(a).setData({
            ids: c
        }).setMethod("POST").setReadOnly(!0).setAllowCrossPageTransition(!0).setHandler(function(a) {
            e(a)
        }).setTimeoutHandler(10 * 1e3, function(a) {
            f(),
            g.error("fetch_timeout", "{}")
        }).setErrorHandler(function(a) {
            f(),
            g.error("fetch_error", JSON.stringify({
                error_type: a.errorSummary,
                error_text: a.errorDescription
            }))
        }).send()
    }
    ;
    e.exports = a
}
), null);
__d("ChatSidebarActionTypes", ["keyMirror"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("keyMirror")({
        AFTER_DOM_LOAD: null,
        INIT: null,
        LOADED: null,
        SET_ENABLED: null,
        SHOW: null
    });
    e.exports = a
}
), null);
__d("ChatSidebarPresencePrivacyActions", ["keyMirror"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("keyMirror")({
        PRIVACY_CHANGED: null,
        USER_PRESENCE_CHANGED: null
    });
    e.exports = a
}
), null);
__d("ChatSidebarRecentCallsActions", ["keyMirror"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("keyMirror")({
        RECENT_CALLS_UPDATED: null
    });
    c = a;
    e.exports = c
}
), null);
__d("ChatSidebarActions", ["ChatDispatcher", "ChatSidebarActionTypes", "ChatSidebarPresencePrivacyActions", "ChatSidebarRecentCallsActions"], (function(a, b, c, d, e, f) {
    "use strict";
    f.init = a;
    f.afterDomLoad = c;
    f.loaded = d;
    f.disable = e;
    f.enable = g;
    f.show = h;
    f.userPresenceChanged = i;
    f.privacyChanged = j;
    f.recentCallsUpdated = k;
    function a() {
        b("ChatDispatcher").dispatch({
            type: b("ChatSidebarActionTypes").INIT
        })
    }
    function c() {
        b("ChatDispatcher").dispatch({
            type: b("ChatSidebarActionTypes").AFTER_DOM_LOAD
        })
    }
    function d() {
        b("ChatDispatcher").dispatch({
            type: b("ChatSidebarActionTypes").LOADED
        })
    }
    function e() {
        b("ChatDispatcher").dispatch({
            type: b("ChatSidebarActionTypes").SET_ENABLED,
            enabled: !1,
            sidebarType: "buddylist"
        })
    }
    function g(a) {
        b("ChatDispatcher").dispatch({
            type: b("ChatSidebarActionTypes").SET_ENABLED,
            enabled: !0,
            sidebarType: a
        })
    }
    function h(a) {
        b("ChatDispatcher").dispatch({
            type: b("ChatSidebarActionTypes").SHOW,
            sidebarType: a
        })
    }
    function i() {
        b("ChatDispatcher").dispatch({
            type: b("ChatSidebarPresencePrivacyActions").USER_PRESENCE_CHANGED
        })
    }
    function j() {
        b("ChatDispatcher").dispatch({
            type: b("ChatSidebarPresencePrivacyActions").PRIVACY_CHANGED
        })
    }
    function k(a) {
        b("ChatDispatcher").dispatch({
            type: b("ChatSidebarRecentCallsActions").RECENT_CALLS_UPDATED,
            calls: a
        })
    }
}
), null);
__d("ChatSidebarDropdownConstants", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        SOUND: "sound",
        ADVANCED_SETTINGS: "advanced_settings",
        BLOCK_SETTINGS: "block_settings",
        TURN_OFF_DIALOG: "turn_off_dialog",
        CLOSE_ALL_TABS: "close_all_tabs",
        LOWER_ALL_TABS: "lower_all_tabs",
        TOGGLE_DISCOVER_BOTS: "toggle_discover_bots",
        SIDEBAR: "sidebar",
        HIDE_GROUPS: "hide_groups",
        ONLINE: "online",
        VIDEOCALL_ON: "videoon",
        VIDEOCALL_OFF: "videooff",
        PAUSE: "pause",
        SHOW_APPS: "show_apps",
        HIDE_APPS: "hide_apps",
        HIDE_MARKETPLACE: "hide_marketplace",
        SHOW_TICKER: "show_ticker",
        HIDE_TICKER: "hide_ticker",
        HIDE_ADMINED_PAGES: "hide_admined_pages",
        HIDE_BUSINESSES: "hide_businesses",
        EMOJI_SETTINGS: "emoji_settings",
        TURN_OFF_CHAT_TABS: "turn_off_chat_tabs",
        SOLID_REACTION: "solid_reaction"
    });
    e.exports = a
}
), null);
__d("FBRTCDispatcher", ["Dispatcher_DEPRECATED"], (function(a, b, c, d, e, f) {
    "use strict";
    a = new (b("Dispatcher_DEPRECATED"))();
    e.exports = a
}
), null);
__d("FBRTCStore", ["FBRTCDispatcher", "FluxStore"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.call(this, b("FBRTCDispatcher")) || this
        }
        var d = c.prototype;
        d.__emitChange = function() {
            this.__emitter.emit(this.__changeEvent)
        }
        ;
        return c
    }(b("FluxStore"));
    e.exports = a;
    a.__moduleID = e.id
}
), null);
__d("FBRTCCallBlockingStore", ["Arbiter", "AsyncRequest", "Bootloader", "ChannelConstants", "FBRTCDispatcher", "FBRTCStore", "clearTimeout", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = !1
      , h = 0
      , i = null
      , j = "call_block_setting_changed";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.init = function(a) {
            this.$FBRTCCallBlockingStore1(a),
            b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("videocall_block_setting"), this.$FBRTCCallBlockingStore2.bind(this))
        }
        ;
        d.__onDispatch = function(a) {
            if (a.type !== j)
                return;
            this.$FBRTCCallBlockingStore1(a.data)
        }
        ;
        d.$FBRTCCallBlockingStore1 = function(a) {
            switch (a) {
            case 0:
                g = !1;
                this.$FBRTCCallBlockingStore3();
                break;
            case -1:
                g = !0;
                this.$FBRTCCallBlockingStore3();
                break;
            default:
                g = !0,
                this.$FBRTCCallBlockingStore4(a)
            }
            this.__emitChange()
        }
        ;
        d.$FBRTCCallBlockingStore4 = function(a) {
            i === null && (i = b("setTimeoutAcrossTransitions")(this.turnOnVideoCalling.bind(this), a * 1e3))
        }
        ;
        d.getBlockingStatus = function() {
            return g
        }
        ;
        d.turnOnVideoCalling = function() {
            new (b("AsyncRequest"))("/ajax/chat/settings.php").setHandler(this.$FBRTCCallBlockingStore5.bind(this)).setData({
                call_blocked_until: 0
            }).send()
        }
        ;
        d.turnOffVideoCalling = function(a) {
            h = a,
            new (b("AsyncRequest"))("/ajax/chat/settings.php").setHandler(this.$FBRTCCallBlockingStore6.bind(this)).setData({
                call_blocked_until: a
            }).send()
        }
        ;
        d.$FBRTCCallBlockingStore3 = function() {
            i && (b("clearTimeout")(i),
            i = null)
        }
        ;
        d.$FBRTCCallBlockingStore5 = function() {
            b("FBRTCDispatcher").dispatch({
                type: j,
                data: 0
            }),
            b("Bootloader").loadModules(["RTWebUserActionLogger"], function(a) {
                a.logCheckpoint({
                    checkpoint: "rtc_enabled"
                })
            }, "FBRTCCallBlockingStore")
        }
        ;
        d.$FBRTCCallBlockingStore6 = function() {
            b("FBRTCDispatcher").dispatch({
                type: j,
                data: h
            }),
            b("Bootloader").loadModules(["RTWebUserActionLogger"], function(a) {
                a.logCheckpoint({
                    checkpoint: h === -1 ? "rtc_disabled_permanently" : "rtc_disabled_temporarily"
                })
            }, "FBRTCCallBlockingStore")
        }
        ;
        d.$FBRTCCallBlockingStore2 = function(a, c) {
            b("FBRTCDispatcher").dispatch({
                type: j,
                data: c.obj.value
            })
        }
        ;
        return c
    }(b("FBRTCStore"));
    c = new a();
    e.exports = c
}
), null);
__d("ChatOptions", ["Arbiter", "ArbiterMixin", "Bootloader", "ChannelConstants", "ChatSidebarActions", "ChatSidebarDropdownConstants", "FBRTCCallBlockingStore", "PresenceUtil", "mixin", "ChatOptionsInitialData"], (function(a, b, c, d, e, f) {
    var g = {};
    (function() {
        var a = b("ChatOptionsInitialData");
        for (var c in a) {
            var d = a[c];
            switch (c) {
            case "call_blocked_until":
                b("FBRTCCallBlockingStore").init(d);
                break;
            case b("ChatSidebarDropdownConstants").TURN_OFF_CHAT_TABS:
                d !== -1 && (g[c] = !!d);
                break;
            default:
                g[c] = !!d
            }
        }
    }
    )();
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.getSetting = function(a) {
            return g[a]
        }
        ;
        d.setSetting = function(a, c, d) {
            if (a === "sidebar_mode") {
                b("Bootloader").loadModules(["ChatSidebarVisibility"], function(a) {
                    return a.shouldShowSidebarIgnoreEnabled(null, function(a, d) {
                        c ? b("ChatSidebarActions").enable(a ? "sidebar" : "buddylist") : b("ChatSidebarActions").disable()
                    })
                }, "ChatOptions");
                return
            }
            if (this.getSetting(a) == c)
                return;
            g[a] = !!c;
            b("Arbiter").inform("chat/option-changed", {
                name: a,
                value: c
            })
        }
        ;
        return c
    }(b("mixin")(b("ArbiterMixin")));
    b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("setting"), function(a, c) {
        a = c.obj;
        if (a.window_id === b("PresenceUtil").getSessionID())
            return;
        h.setSetting(a.setting, !!a.value, "channel")
    });
    var h = new a();
    c = h;
    e.exports = c
}
), null);
__d("ChatSidebarPreloadStore", ["InitialChatFriendsList"], (function(a, b, c, d, e, f) {
    "use strict";
    f.onLoaded = a;
    function a(a) {
        a({
            buddies: (a = b("InitialChatFriendsList")).list,
            groups: a.groups,
            shortProfiles: a.shortProfiles,
            nearby: a.nearby,
            adminedPages: a.adminedPages,
            marketplaceThreads: a.marketplaceThreads,
            pageListModule: a.pageListModule,
            pymmList: b("InitialChatFriendsList").pymmList || {},
            recentPageList: b("InitialChatFriendsList").recentPageList,
            profiles: []
        })
    }
}
), null);
__d("XChatUserInfoAllAsyncController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/chat/user_info_all/", {
        viewer: {
            type: "Int",
            required: !0
        }
    })
}
), null);
__d("ShortProfilesBootstrapper", ["Promise", "AsyncRequest", "BanzaiODS", "CurrentUser", "XChatUserInfoAllAsyncController"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = 5
      , h = 1e4
      , i = b("XChatUserInfoAllAsyncController").getURIBuilder().setInt("viewer", b("CurrentUser").getID()).getURI();
    a = function() {
        function a(a) {
            var c = this;
            this.$1 = a;
            this.$2 = new (b("Promise"))(function(a, b) {
                c.$3 = a,
                c.$4 = b
            }
            );
            this.$5 = !1;
            this.$6 = null;
            this.$7 = 0;
            this.$8 = 0;
            this.$9 = 0;
            this.$10 = !1;
            this.$11 = !1
        }
        var c = a.prototype;
        c.fetchAll = function() {
            var a = this;
            this.$12();
            if (this.$5 || this.$6)
                return this.$2;
            if (this.$7 >= g) {
                this.$13();
                return this.$2
            }
            this.$7++;
            this.$14();
            this.$6 = new (b("AsyncRequest"))(i).setHandler(function(b) {
                a.$6 = null,
                a.$5 = !0,
                a.$15(),
                a.$1(b.payload),
                a.$3()
            }).setErrorHandler(function() {
                a.$6 = null,
                a.$8++,
                a.$16()
            }).setTimeoutHandler(h, function() {
                a.$6 = null,
                a.$9++,
                a.$17(),
                a.fetchAll()
            }).setAllowCrossPageTransition(!0);
            this.$6.send();
            return this.$2
        }
        ;
        c.isBootstrapped = function() {
            return this.$5
        }
        ;
        c.isBootstrapping = function() {
            return !!this.$6
        }
        ;
        c.getAttemptCount = function() {
            return this.$7
        }
        ;
        c.getErrorCount = function() {
            return this.$8
        }
        ;
        c.getTimeoutCount = function() {
            return this.$9
        }
        ;
        c.$12 = function() {
            this.$10 || (b("BanzaiODS").bumpEntityKey(3303, "chat.web", "typeahead.bootstrap.starts"),
            this.$10 = !0)
        }
        ;
        c.$14 = function() {
            b("BanzaiODS").bumpEntityKey(3303, "chat.web", "typeahead.bootstrap.attempts")
        }
        ;
        c.$15 = function() {
            b("BanzaiODS").bumpEntityKey(3303, "chat.web", "typeahead.bootstrap.successes"),
            this.$7 > 1 && b("BanzaiODS").bumpEntityKey(3303, "chat.web", "typeahead.bootstrap.successes_after_retries")
        }
        ;
        c.$16 = function() {
            b("BanzaiODS").bumpEntityKey(3303, "chat.web", "typeahead.bootstrap.errors")
        }
        ;
        c.$17 = function() {
            b("BanzaiODS").bumpEntityKey(3303, "chat.web", "typeahead.bootstrap.timeouts")
        }
        ;
        c.$13 = function() {
            this.$11 || (b("BanzaiODS").bumpEntityKey(3303, "chat.web", "typeahead.bootstrap.giveups"),
            this.$11 = !0,
            this.$4())
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("XChatUserInfoAsyncController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/chat/user_info/", {
        ids: {
            type: "IntVector",
            defaultValue: []
        }
    })
}
), null);
__d("ShortProfiles", ["AjaxLoader", "CurrentUser", "ShortProfilesBootstrapper", "URI", "XChatUserInfoAsyncController", "emptyFunction"], (function(a, b, c, d, e, f) {
    "use strict";
    f.get = a;
    f.getMulti = c;
    f.getNow = j;
    f.getMultiNow = d;
    f.getCachedProfileIDs = e;
    f.hasAll = k;
    f.fetchAll = l;
    f.set = m;
    f.setMulti = n;
    var g, h = null, i = new (b("AjaxLoader"))(b("XChatUserInfoAsyncController").getURIBuilder().getURI().toString(),"profiles");
    function a(a, b) {
        this.getMulti([a], function(c) {
            return b(c[a], a)
        })
    }
    function c(a, c) {
        i.get(a, c || b("emptyFunction"))
    }
    function j(a) {
        return i.getNow(a) || null
    }
    function d(a) {
        var b = {};
        a.forEach(function(a) {
            return b[a] = j(a)
        });
        return b
    }
    function e() {
        return i.getCachedKeys()
    }
    function k() {
        return !!h && h.isBootstrapped()
    }
    function l() {
        h || (h = new (b("ShortProfilesBootstrapper"))(function(a) {
            i.set(a)
        }
        ));
        return h.fetchAll()
    }
    function m(a, b) {
        var c = {};
        c[a] = b;
        this.setMulti(c)
    }
    function n(a) {
        if (b("CurrentUser").isWorkUser()) {
            var c = {};
            Object.keys(a).forEach(function(d) {
                var e = a[d];
                (e.type !== "fb4c" || !e.uri) && (c[d] = e);
                var f = new (g || (g = b("URI")))(e.uri).setDomain("").setProtocol("").toString();
                c[d] = babelHelpers["extends"]({}, e, {
                    uri: f
                })
            });
            a = c
        }
        i.set(a)
    }
}
), null);
__d("ChatSortUsers", ["ShortProfiles", "TokenizeUtil"], (function(a, b, c, d, e, f) {
    var g = {};
    function h(a) {
        if (g[a])
            return g[a];
        var c = (b("ShortProfiles").getNow(a) || {}).name;
        return c ? g[a] = b("TokenizeUtil").flatten(c) : "~"
    }
    a = {
        sortAlphabetical: function(a, b) {
            a = h(a);
            b = h(b);
            return a !== b ? a < b ? -1 : 1 : 0
        }
    };
    e.exports = a
}
), null);
__d("PresenceOrderedList", ["ChatSidebarPreloadStore", "ChatSortUsers", "PresencePrivacy", "PresenceStatus"], (function(a, b, c, d, e, f) {
    function g(a) {
        return a.map(function(a) {
            var b = a.slice(0, -2);
            a = Number(a.slice(-1));
            return [b, a]
        })
    }
    function h(a, c) {
        var d = [];
        a.forEach(function(a) {
            var e = a[0];
            a = a[1];
            if (d.length >= c)
                return;
            if (b("PresencePrivacy").getFriendVisibility(e) == b("PresencePrivacy").BLACKLISTED)
                return;
            a == b("PresenceStatus").get(e) && d.push(e)
        });
        return d
    }
    a = function() {
        function a() {
            this.$1 = null
        }
        var c = a.prototype;
        c.getSorted = function(a, c) {
            var d = this;
            if (this.$1) {
                c(h(this.$1, a));
                return
            }
            b("ChatSidebarPreloadStore").onLoaded(function(b) {
                b = b.buddies;
                d.$1 = g(b);
                c(h(d.$1, a))
            })
        }
        ;
        c.getAvailableSorted = function(a) {
            var c = b("PresenceStatus").getOnlineIDs();
            a && (c = c.filter(function(b) {
                return a && a.indexOf(b) === -1
            }));
            return c.sort(b("ChatSortUsers").sortAlphabetical)
        }
        ;
        c.getAllSorted = function(a) {
            var c = []
              , d = this.$1 || [];
            b("PresenceStatus").getAllIDs().concat(d.map(function(a) {
                return a[0]
            })).forEach(function(a) {
                return c.indexOf(a) === -1 && c.push(a)
            });
            a && (c = c.filter(function(b) {
                return a && a.indexOf(b) === -1
            }));
            return c.sort(b("ChatSortUsers").sortAlphabetical)
        }
        ;
        return a
    }();
    c = new a();
    e.exports = c
}
), null);
__d("PresenceStatusStore", ["ChatDispatcher", "FluxStore", "PresenceStatus", "PresenceStatusActionTypes"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.call(this, b("ChatDispatcher")) || this
        }
        var d = c.prototype;
        d.__onDispatch = function(a) {
            a = a.type;
            switch (a) {
            case b("PresenceStatusActionTypes").AVAILABILITY_CHANGED:
                this.__emitChange();
                break;
            default:
                break
            }
        }
        ;
        d.get = function(a) {
            return b("PresenceStatus").get(a)
        }
        ;
        d.getIsPlaying = function(a) {
            return b("PresenceStatus").isPlayingCanvasGameUser(a)
        }
        ;
        return c
    }(b("FluxStore"));
    a.__moduleID = e.id;
    c = new a();
    e.exports = c
}
), null);
__d("ChatProfileStore", ["ChatSidebarPreloadStore"], (function(a, b, c, d, e, f) {
    "use strict";
    f.init = a;
    f.get = c;
    var g = {};
    function a() {
        b("ChatSidebarPreloadStore").onLoaded(function(a) {
            var b = a.profiles
              , c = a.nearby;
            return b.filter(function(a) {
                return !c || c.indexOf(a.id) === -1
            }).forEach(function(a) {
                var b = new Date();
                b = a.birthdate && b.getDate() === a.birthdate.day && b.getMonth() + 1 === a.birthdate.month;
                var c = a.profile_picture && a.profile_picture.uri ? a.profile_picture.uri : null;
                g[a.id] = {
                    id: a.id,
                    is_birthday: b,
                    thumbSrc: c,
                    name: a.name,
                    is_messenger_only: !!a.is_messenger_only
                }
            })
        })
    }
    function c(a) {
        return g[a]
    }
}
), null);
__d("ChatSidebarParticipantTooltipBuilder", ["fbt", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.buildParticipantsTooltip = a;
    b("React");
    var h = 10;
    f.MAX_NUM_PARTICIPANTS_TO_RENDER = h;
    var i = "\n";
    function a(a, b) {
        var c = []
          , d = Math.min(h, a.length);
        a = a.slice(0, d);
        a.forEach(function(a) {
            a = a.name;
            a && c.push(a)
        });
        d < b && c.push(g._("v\u00e0 {num} ng\u01b0\u1eddi kh\u00e1c...", [g._param("num", b - d)]));
        return c.join(i)
    }
}
), null);
__d("OrderedFriendsList", ["AvailableListConstants", "ChatProfileStore", "ChatSidebarParticipantTooltipBuilder", "ChatSidebarPreloadStore", "CurrentUser", "MercuryIDs", "PresenceStatus", "SearchableEntry", "ShortProfiles", "createArrayFromMixed", "isValidUniqueID"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = null
      , h = {}
      , i = []
      , j = {};
    function k(a) {
        a = String(a);
        return b("MercuryIDs").isValid(a) ? a : b("MercuryIDs").getParticipantIDFromUserID(a)
    }
    function l(a, c) {
        a = b("createArrayFromMixed")(a);
        c(a.filter(function(a) {
            a = b("ShortProfiles").getNow(a);
            return !a || o(a) || a.is_nonfriend_messenger_contact
        }))
    }
    function m(a) {
        g = [];
        var c = 0;
        a.forEach(function(a) {
            var d = a.slice(0, -2);
            a = a.slice(-1);
            b("PresenceStatus").get(d) == a && (g[c] = d,
            h[d] = c++)
        })
    }
    function n(a) {
        var c = 0;
        a.forEach(function(a) {
            var d = a.slice(0, -2);
            a = a.slice(-1);
            a == b("AvailableListConstants").ACTIVE && (i[c] = d,
            j[d] = c++)
        })
    }
    function o(a) {
        return a.type === "friend" || b("CurrentUser").isWorkUser() && a.type === "fb4c"
    }
    var p = {
        contains: function(a) {
            return a in h
        },
        getList: function(a) {
            if (g && g.length) {
                l(g, a);
                return
            }
            b("ChatSidebarPreloadStore").onLoaded(function(b) {
                b = b.buddies;
                m(b);
                l(g, a)
            })
        },
        getSearchableEntries: function(a, c, d) {
            p.getList(function(e) {
                b("ChatSidebarPreloadStore").onLoaded(function(f) {
                    var g = f.groups
                      , h = f.recentPageList;
                    b("ShortProfiles").getMulti(e.slice(0, a), function(a) {
                        var b = [];
                        for (var e in a)
                            b.push(p.normalizeProfileEntry(a[e], e));
                        a = c ? g.map(p.normalizeThreadEntry) : [];
                        var f = h.map(p.normalizePageEntry);
                        d(b.concat(a, f).filter(function(a) {
                            return !!a
                        }).sort(function(a, b) {
                            return a.getOrder() - b.getOrder()
                        }))
                    })
                })
            })
        },
        normalizePageEntry: function(a, c) {
            var d = a.searchTokens || []
              , e = a.name
              , f = null;
            return new (b("SearchableEntry"))({
                uniqueID: a.id || c,
                keywordString: d.join(" "),
                order: c,
                photo: a.imgSrc,
                title: e,
                subtitle: f,
                type: "page",
                uri: a.uri,
                auxiliaryData: {
                    isVerified: a.isVerified
                }
            })
        },
        normalizeProfileEntry: function(a, c) {
            var d = a.searchTokens || []
              , e = a.name
              , f = null;
            return new (b("SearchableEntry"))({
                uniqueID: a.id || c,
                keywordString: d.join(" "),
                order: p.getRank(a.id || c),
                photo: a.thumbSrc,
                title: e,
                subtitle: f,
                type: a.type,
                uri: a.uri,
                auxiliaryData: {
                    isMessengerUser: a.is_messenger_user
                }
            })
        },
        normalizeThreadEntry: function(a, c) {
            var d = a.mercury_thread
              , e = a.participants_to_render.map(function(a) {
                return babelHelpers["extends"]({}, a, {
                    id: k(a.id)
                })
            });
            d.participants = d.participants.map(k);
            var f = a.text
              , g = null;
            f || (f = d.name);
            var h = b("ChatSidebarParticipantTooltipBuilder").buildParticipantsTooltip(e, d.participants.length - 1)
              , i = e.map(function(a) {
                return a.name
            }).join(", ");
            !f ? f = i : g = i;
            i = a.uid;
            return !f || !b("isValidUniqueID")(i) ? null : new (b("SearchableEntry"))({
                uniqueID: i,
                order: c,
                photo: d.image_src,
                title: f,
                subtitle: g,
                type: "thread",
                auxiliaryData: {
                    participantsToRender: e,
                    tooltipContent: h,
                    thread: d
                }
            })
        },
        getRank: function(a) {
            return a in h ? h[a] : g ? g.length : 0
        },
        getActiveList: function(a) {
            if (i.length > 0) {
                a(i);
                return
            }
            p.getList(function(b) {
                return a(b)
            })
        },
        getActiveRank: function(a) {
            return a in j ? j[a] : p.getRank(a)
        }
    };
    (function() {
        b("ChatSidebarPreloadStore").onLoaded(function(a) {
            var c = a.buddies;
            a = a.shortProfiles;
            b("ShortProfiles").setMulti(a);
            n(c);
            m(c)
        }),
        b("ChatProfileStore").init()
    }
    )();
    e.exports = p
}
), null);
__d("MeetupExperiments", ["RTWebIncomingRingConfiguration", "gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    f.dwebLaunchGkEnabled = a;
    f.sendCreatorNotifications = c;
    f.supportJoinerWaitingLobby = d;
    f.supportLinkCreation = e;
    function a() {
        return b("gkx")("1397101")
    }
    function c() {
        return !b("gkx")("1224637")
    }
    function d() {
        return b("gkx")("1456547")
    }
    function e() {
        return b("RTWebIncomingRingConfiguration").isSupportedClientForProtocol("mw") && b("gkx")("1545140")
    }
}
), null);
__d("MercuryBootloadOnInteraction.react", ["React", "createCancelableFunction", "promiseDone"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.state = {
                Component: null
            },
            d.$2 = function(a) {
                a = d.state.interactionType === "click" ? "click" : a.type;
                d.setState({
                    interactionType: a
                }, function() {
                    b("promiseDone")(d.props.loader.load(), function(a) {
                        d.props.takeOverRender ? d.props.takeOverRender(function() {
                            return d.$1(a)
                        }) : d.$1(a)
                    })
                })
            }
            ,
            d.$3 = function(a) {
                d.setState({
                    Component: a
                })
            }
            ,
            d.$4 = function(a) {
                d.state.interactionType !== "click" && d.setState({
                    interactionType: void 0
                })
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            this.$1 = b("createCancelableFunction")(this.$3)
        }
        ;
        d.componentWillUnmount = function() {
            this.$1.cancel()
        }
        ;
        d.render = function() {
            var a = {
                onFocus: this.$2,
                onMouseOver: this.$2,
                onClick: this.$2,
                onBlur: this.$4
            };
            if (!this.state.Component)
                return g.cloneElement(this.props.placeholder, a);
            a = this.state.Component;
            var b = {};
            switch (this.state.interactionType) {
            case "focus":
                b.autoFocus = !0;
                break;
            case "click":
                b.clicked = !0;
                break
            }
            return g.cloneElement(this.props.component, babelHelpers["extends"]({}, b, {
                LazyLoadedComponent: a
            }))
        }
        ;
        return c
    }(g.PureComponent);
    e.exports = a
}
), null);
__d("SRXUIBadge.react", ["cx", "invariant", "React", "joinClasses"], (function(a, b, c, d, e, f, g, h) {
    var i = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.isInt = function(a) {
            return parseInt(a, 10) === a
        }
        ;
        d.render = function() {
            var a = this.props.count
              , c = this.props.maxcount;
            c == null && (c = 20);
            this.isInt(a) || h(0, 186);
            this.isInt(c) || h(0, 187);
            var d = "_5ugh _5ugf _51lp" + (a > c ? " _51lr" : "") + (a === 0 ? " hidden_elem" : "");
            return i.jsx("span", {
                className: b("joinClasses")(this.props.className, d),
                children: a > c ? c : a
            })
        }
        ;
        return c
    }(i.Component);
    e.exports = a
}
), null);
__d("FantaConst", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.getCookieIDs = a;
    b = 2;
    f.DEFAULT_ALLOWED_RAISED_TABS = b;
    c = 10;
    f.DEFAULT_MESSAGE_COUNT = c;
    var g = {
        PERSONAL_COOKIE_ID: "t3",
        PERSONAL_FOCUS_COOKIE_ID: "lm3",
        PERSONAL_TIME_COOKIE_ID: "utc3",
        WORK_COOKIE_ID: "t3w",
        WORK_FOCUS_COOKIE_ID: "lm3w",
        WORK_TIME_COOKIE_ID: "utc3w"
    };
    f.cookieIDs = g;
    function a() {
        return [g.PERSONAL_COOKIE_ID, g.PERSONAL_FOCUS_COOKIE_ID, g.PERSONAL_TIME_COOKIE_ID, g.WORK_COOKIE_ID, g.WORK_FOCUS_COOKIE_ID, g.WORK_TIME_COOKIE_ID]
    }
}
), null);
__d("Dcode", [], (function(a, b, c, d, e, f) {
    var g, h = {}, i = {
        _: "%",
        A: "%2",
        B: "000",
        C: "%7d",
        D: "%7b%22",
        E: "%2c%22",
        F: "%22%3a",
        G: "%2c%22ut%22%3a1",
        H: "%2c%22bls%22%3a",
        I: "%2c%22n%22%3a%22%",
        J: "%22%3a%7b%22i%22%3a0%7d",
        K: "%2c%22pt%22%3a0%2c%22vis%22%3a",
        L: "%2c%22ch%22%3a%7b%22h%22%3a%22",
        M: "%7b%22v%22%3a2%2c%22time%22%3a1",
        N: ".channel%22%2c%22sub%22%3a%5b",
        O: "%2c%22sb%22%3a1%2c%22t%22%3a%5b",
        P: "%2c%22ud%22%3a100%2c%22lc%22%3a0",
        Q: "%5d%2c%22f%22%3anull%2c%22uct%22%3a",
        R: ".channel%22%2c%22sub%22%3a%5b1%5d",
        S: "%22%2c%22m%22%3a0%7d%2c%7b%22i%22%3a",
        T: "%2c%22blc%22%3a1%2c%22snd%22%3a1%2c%22ct%22%3a",
        U: "%2c%22blc%22%3a0%2c%22snd%22%3a1%2c%22ct%22%3a",
        V: "%2c%22blc%22%3a0%2c%22snd%22%3a0%2c%22ct%22%3a",
        W: "%2c%22s%22%3a0%2c%22blo%22%3a0%7d%2c%22bl%22%3a%7b%22ac%22%3a",
        X: "%2c%22ri%22%3a0%7d%2c%22state%22%3a%7b%22p%22%3a0%2c%22ut%22%3a1",
        Y: "%2c%22pt%22%3a0%2c%22vis%22%3a1%2c%22bls%22%3a0%2c%22blc%22%3a0%2c%22snd%22%3a1%2c%22ct%22%3a",
        Z: "%2c%22sb%22%3a1%2c%22t%22%3a%5b%5d%2c%22f%22%3anull%2c%22uct%22%3a0%2c%22s%22%3a0%2c%22blo%22%3a0%7d%2c%22bl%22%3a%7b%22ac%22%3a"
    };
    (function() {
        var a = [];
        for (var b in i)
            h[i[b]] = b,
            a.push(i[b]);
        a.reverse();
        g = new RegExp(a.join("|"),"g")
    }
    )();
    a = {
        encode: function(a) {
            return encodeURIComponent(a).replace(/([_A-Z])|%../g, function(a, b) {
                return b ? "%" + b.charCodeAt(0).toString(16) : a
            }).toLowerCase().replace(g, function(a) {
                return h[a]
            })
        },
        decode: function(a) {
            return decodeURIComponent(a.replace(/[_A-Z]/g, function(a) {
                return i[a]
            }))
        }
    };
    e.exports = a
}
), null);
__d("PresenceCookieManager", ["Cookie", "CurrentUser", "Dcode", "ErrorUtils", "PresenceInitialData", "PresenceUtil", "WebStorage"], (function(a, b, c, d, e, f) {
    f.register = a;
    f.store = c;
    f.clear = d;
    f.getSubCookie = z;
    var g, h, i = b("PresenceInitialData").cookieVersion, j = "presence", k = {}, l = null, m = null;
    function n(a) {
        var c = b("Cookie").get(j) || "";
        if (c.length === 0)
            return null;
        return c[0] !== a ? null : c.substring(1)
    }
    function o(a, c) {
        b("Cookie").set(j, a + c)
    }
    function p() {
        return !(b("PresenceInitialData").useWebStorage || !1) ? null : (g || (g = b("WebStorage"))).getSessionStorage()
    }
    function q() {
        var a = p();
        a = a != null ? a.getItem(j) : null;
        return a != null ? a.substring(1) : null
    }
    function r(a) {
        var b = p();
        if (b == null)
            return !1;
        b.setItem(j, "E" + a);
        return !0
    }
    function s() {
        var a = q();
        return a != null ? a : n("E")
    }
    function t(a) {
        a = a.state;
        if (a == null)
            return "";
        var c = n("S") || ""
          , d = b("CurrentUser").isWorkUser() ? "w" : "f";
        a = b("CurrentUser").isWorkUser() ? a.t3w : a.t3;
        a = a != null ? a.length > 0 : !1;
        var e = c.indexOf(d) !== -1;
        e && !a && (c = c.replace(d, ""));
        !e && a && (c += d);
        return c
    }
    function u(a, b) {
        var c = r(a);
        c ? o("S", b) : o("E", a)
    }
    function v() {
        try {
            var a = s();
            l !== a && (l = a,
            m = null,
            a && (a = b("Dcode").decode(a),
            m = JSON.parse(a)));
            if (m) {
                if (m.user && m.user !== b("CurrentUser").getID())
                    return null;
                return m.v !== i ? null : m
            }
        } catch (a) {}
        return null
    }
    function w() {
        return {
            v: i,
            time: x(),
            user: b("CurrentUser").getID()
        }
    }
    function x() {
        return parseInt(Date.now() / 1e3, 10)
    }
    function y(a) {
        var c = b("Dcode").encode(JSON.stringify(a));
        b("PresenceUtil").hasUserCookie() && u(c, t(a))
    }
    function a(a, b) {
        k[a] = b
    }
    function c() {
        var a = v();
        if (a && a.v && i < a.v)
            return;
        var c = w();
        for (var d in k)
            c[d] = (h || (h = b("ErrorUtils"))).applyWithGuard(k[d], k, [a && a[d]], function(a) {
                a.presence_subcookie = d
            });
        y(c)
    }
    function d() {
        var a = z("state");
        b("Cookie").clear(j);
        var c = (g || (g = b("WebStorage"))).getSessionStorage();
        c != null && c.removeItem(j);
        if (a) {
            c = w();
            c.state = a;
            y(c)
        }
    }
    function z(a) {
        var b = v();
        return !b ? null : b[a]
    }
}
), null);
__d("PresenceState", ["ErrorUtils", "FantaConst", "PresenceCookieManager", "PresenceInitialData", "debounceAcrossTransitions", "setIntervalAcrossTransitions"], (function(a, b, c, d, e, f) {
    "use strict";
    f.verifyNumber = u;
    f.doSync = a;
    f.registerStateStorer = c;
    f.registerStateLoader = d;
    f.get = e;
    f.getInitial = A;
    f.shouldSuppress = B;
    var g, h = b("PresenceInitialData").cookiePollInterval || 2e3, i = b("PresenceInitialData").shouldSuppress || !1, j = [], k = [], l = null, m = null, n = 0, o = null, p = 0, q = ["sb2", "tr", "tw", "at", "wml"].concat(b("FantaConst").getCookieIDs());
    function r() {
        return b("PresenceCookieManager").getSubCookie("state")
    }
    function s() {
        n = Date.now(),
        b("PresenceCookieManager").store(),
        w(m)
    }
    var t = b("debounceAcrossTransitions")(s, 0);
    function u(a) {
        (a == void 0 || isNaN(a) || a == Number.POSITIVE_INFINITY || a == Number.NEGATIVE_INFINITY) && (a = 0);
        return a
    }
    function v(a) {
        var c = {};
        a && q.forEach(function(b) {
            a && a[b] && (c[b] = a[b])
        });
        c.ut = n;
        for (var d = 0, e = j.length; d < e; d++)
            (g || (g = b("ErrorUtils"))).applyWithGuard(j[d], null, [c]);
        m = c;
        return m
    }
    function w(a) {
        p++;
        n = u(a && a.ut);
        l || (l = b("setIntervalAcrossTransitions")(z, h));
        m = a;
        o === null && (o = a);
        for (var c = 0, d = k.length; c < d; c++)
            (g || (g = b("ErrorUtils"))).applyWithGuard(k[c], null, [a]);
        p--
    }
    function x(a) {
        return a && a.ut && n < a.ut ? !0 : !1
    }
    function y() {
        var a = r();
        x(a) && (m = a);
        return m
    }
    function z() {
        var a = r();
        x(a) && w(a)
    }
    b("PresenceCookieManager").register("state", v);
    (function() {
        var a = y();
        if (a)
            w(a);
        else {
            w(v());
            return
        }
    }
    )();
    function a(a) {
        if (p)
            return;
        a ? s() : t()
    }
    function c(a) {
        j.push(a)
    }
    function d(a) {
        k.push(a)
    }
    function e() {
        return y()
    }
    function A() {
        return o
    }
    function B() {
        return i
    }
}
), null);
__d("WorkForeignEntityInfo.bs", ["CurrentUser", "WorkForeignEntityType"], (function(a, b, c, d, e, f) {
    "use strict";
    function g(a) {
        if (!(a == null) && a.type !== b("WorkForeignEntityType").NOT_FOREIGN)
            return a.type === b("WorkForeignEntityType").LIMITED;
        else
            return !0
    }
    function h(a) {
        if (b("CurrentUser").isWorkUser())
            return g(a.work_foreign_entity_info);
        else
            return !1
    }
    function a(a) {
        if (b("CurrentUser").isWorkUser())
            return g(a.workForeignEntityInfo);
        else
            return !1
    }
    function c(a) {
        if (b("CurrentUser").isWorkUser())
            return a.every(function(a, b, c) {
                if (a == null)
                    return !0;
                else
                    return h(a)
            });
        else
            return !1
    }
    f.isNotForeign = g;
    f.isCoworker = h;
    f.isContactCoworker = a;
    f.areAllCoworkers = c
}
), null);
__d("WorkChatAvailabilityStatusLoader", ["Promise", "Bootloader", "nullthrows"], (function(a, b, c, d, e, f) {
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
        b("nullthrows")(this._store, "Status store is not loaded");
        return this._store
    }
    function c() {
        b("nullthrows")(this._actions, "Status actions is not loaded");
        return this._actions
    }
    function d() {
        return this._store != null && this._actions != null
    }
    function e() {
        var a = this;
        this._promise || (this._promise = new (b("Promise"))(function(c) {
            b("Bootloader").loadModules(["WorkChatAvailabilityStatusActions", "WorkChatAvailabilityStatusStore"], function(b, d) {
                a._store = d,
                a._actions = b,
                c({
                    store: d,
                    actions: b
                })
            }, "WorkChatAvailabilityStatusLoader")
        }
        ));
        return this._promise
    }
}
), null);
__d("MercuryParticipantListRenderer", ["fbt", "MercuryIDs"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a() {
            var a = this;
            this.$6 = function(c) {
                var d = a.$5;
                if (d != null) {
                    var e = b("MercuryIDs").getUserIDFromParticipantID(c.id);
                    if (e != null && d[e] != null && d[e] != void 0)
                        return d[e]
                }
                return a.$2 ? c.short_name : c.name
            }
            ;
            this.$1 = !1;
            this.$2 = !1;
            this.$3 = !1;
            this.$4 = 0;
            this.$5 = null
        }
        var c = a.prototype;
        c.renderParticipantList = function(a) {
            a = a.map(this.$6);
            switch (a.length) {
            case 0:
                return h(this.$1);
            case 1:
                return i(a);
            case 2:
                return this.$3 ? k(a) : j(a);
            case 3:
                return this.$3 ? m(a) : l(a);
            default:
                return this.$3 ? o(a, this.$4) : n(a, this.$4)
            }
        }
        ;
        c.setIsNewThread = function(a) {
            this.$1 = a;
            return this
        }
        ;
        c.setNameRenderer = function(a) {
            this.$6 = a;
            return this
        }
        ;
        c.setUseShortName = function(a) {
            this.$2 = a;
            return this
        }
        ;
        c.setNickname = function(a) {
            this.$5 = a;
            return this
        }
        ;
        c.setUseAndSeparator = function(a) {
            this.$3 = a;
            return this
        }
        ;
        c.setTotalParticipantCount = function(a) {
            this.$4 = a;
            return this
        }
        ;
        return a
    }();
    e.exports = a;
    function h(a) {
        if (a)
            return g._("Tin nh\u1eafn m\u1edbi");
        else
            return g._("Kh\u00f4ng c\u00f3 ng\u01b0\u1eddi tham gia n\u00e0o")
    }
    function i(a) {
        return a[0]
    }
    function j(a) {
        return g._("{participant1}, {participant2}", [g._param("participant1", a[0]), g._param("participant2", a[1])])
    }
    function k(a) {
        return g._("{participant1} v\u00e0 {participant2}", [g._param("participant1", a[0]), g._param("participant2", a[1])])
    }
    function l(a) {
        return g._("{participant1}, {participant2}, {participant3}", [g._param("participant1", a[0]), g._param("participant2", a[1]), g._param("participant3", a[2])])
    }
    function m(a) {
        return g._("{participant1}, {participant2} v\u00e0 {participant3}", [g._param("participant1", a[0]), g._param("participant2", a[1]), g._param("participant3", a[2])])
    }
    function n(a, b) {
        return g._("{participant1}, {participant2}, {participant3}, {others_link}", [g._param("participant1", a[0]), g._param("participant2", a[1]), g._param("participant3", a[2]), g._param("others_link", p((b || a.length) - 3))])
    }
    function o(a, b) {
        return g._("{participant1}, {participant2} v\u00e0 {others_link}", [g._param("participant1", a[0]), g._param("participant2", a[1]), g._param("others_link", p((b || a.length) - 2))])
    }
    function p(a) {
        if (a > 1)
            return g._({
                "*": "{others_count} ng\u01b0\u1eddi kh\u00e1c"
            }, [g._param("others_count", a, [0])]);
        else
            return g._("1 ng\u01b0\u1eddi kh\u00e1c")
    }
}
), null);
__d("SRLink.react", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        var c = b.prototype;
        c.render = function() {
            return g.jsx("a", babelHelpers["extends"]({}, this.props, {
                children: this.props.children
            }))
        }
        ;
        return b
    }(g.Component);
    e.exports = a
}
), null);
__d("XWorkSaveGroupPurposeController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/work/group_creation/dialog/save_purpose/", {
        purpose: {
            type: "String",
            required: !0
        },
        ref: {
            type: "String",
            required: !0
        },
        name: {
            type: "String"
        },
        community: {
            type: "FBID"
        },
        coworkers_to_invite: {
            type: "IntVector",
            defaultValue: []
        },
        back_disallowed: {
            type: "Bool",
            defaultValue: !1
        }
    })
}
), null);
__d("SplitImage.react", ["cx", "Image.react", "React", "joinClasses"], (function(a, b, c, d, e, f, g) {
    var h = b("React");
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props.size
              , c = this.props.srcs
              , d = this.props.border
              , e = this.props.className
              , f = this.props.halfView;
            if (c.length === 0)
                return null;
            var g = null;
            c.length === 1 ? g = this.$1(c[0], a) : c.length === 2 ? g = this.$2(c, a, d) : g = this.$3(c, a, d, f);
            return h.jsx("div", {
                className: b("joinClasses")(e, "_55lt"),
                style: {
                    width: a,
                    height: a
                },
                children: g
            })
        }
        ;
        d.$1 = function(a, c) {
            return h.jsx(b("Image.react"), {
                src: a,
                width: c,
                height: c,
                alt: ""
            })
        }
        ;
        d.$2 = function(a, c, d) {
            var e = Math.floor(c / 2)
              , f = -Math.floor(e / 2);
            d = "_55lu" + (d ? " _57xo" : "");
            return h.jsxs("div", {
                children: [h.jsx("div", {
                    className: "_55lu",
                    style: {
                        width: e
                    },
                    children: h.jsx(b("Image.react"), {
                        src: a[0],
                        width: c,
                        height: c,
                        style: {
                            marginLeft: f
                        },
                        alt: ""
                    })
                }), h.jsx("div", {
                    className: d,
                    style: {
                        width: e
                    },
                    children: h.jsx(b("Image.react"), {
                        src: a[1],
                        width: c,
                        height: c,
                        style: {
                            marginLeft: f
                        },
                        alt: ""
                    })
                })]
            })
        }
        ;
        d.$3 = function(a, c, d, e) {
            e = e === !0 ? Math.floor(c / 3 * 1.5) + 1 : Math.floor(c / 3 * 2);
            var f = -Math.floor((c - e) / 2)
              , g = Math.floor(c / 2)
              , i = c - e
              , j = -Math.floor((g - i) / 2)
              , k = "_55lu" + (d ? " _57pl" : "");
            d = "_55lu" + (d ? " _57pm" : "");
            return h.jsxs("div", {
                children: [h.jsx("div", {
                    className: k,
                    style: {
                        width: e
                    },
                    children: h.jsx(b("Image.react"), {
                        src: a[0],
                        width: c,
                        height: c,
                        style: {
                            marginLeft: f
                        },
                        alt: ""
                    })
                }), h.jsx("div", {
                    className: d,
                    style: {
                        width: i,
                        height: g
                    },
                    children: h.jsx(b("Image.react"), {
                        src: a[1],
                        width: g,
                        height: g,
                        style: {
                            marginLeft: j
                        },
                        alt: ""
                    })
                }), h.jsx("div", {
                    className: "_55lu",
                    style: {
                        width: i,
                        height: g
                    },
                    children: h.jsx(b("Image.react"), {
                        src: a[2],
                        width: g,
                        height: g,
                        style: {
                            marginLeft: j
                        },
                        alt: ""
                    })
                })]
            })
        }
        ;
        return c
    }(h.Component);
    e.exports = a
}
), null);
