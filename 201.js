if (self.CavalryLogger) {
    CavalryLogger.start_js(["\/ju9B"]);
}

__d("MessagingTag", [], (function(a, b, c, d, e, f) {
    e.exports = {
        ACTION_ARCHIVED: "action:archived",
        INBOX: "inbox",
        MARKETPLACE_FOLDER: "marketplace_folder",
        PENDING: "pending",
        MONTAGE: "montage",
        OTHER: "other",
        EVENT: "event",
        SENT: "sent",
        SPAM: "spam",
        UPDATES: "broadcasts_inbox",
        BCC: "header:bcc",
        FILTERED_CONTENT: "filtered_content",
        FILTERED_CONTENT_BH: "filtered_content_bh",
        FILTERED_CONTENT_ACCOUNT: "filtered_content_account",
        FILTERED_CONTENT_QUASAR: "filtered_content_quasar",
        FILTERED_CONTENT_INVALID_APP: "filtered_content_invalid_app",
        UNAVAILABLE_ATTACHMENT: "unavailable_attachment",
        UNREAD: "unread",
        FLAGGED: "flagged",
        GROUPS: "groups",
        TRANSITIONAL_MAILBOX: "transitional_mailbox",
        ARCHIVED: "archived",
        EMAIL: "email",
        VOICEMAIL: "voicemail",
        SPAM_SPOOFING: "spam:spoofing",
        SPOOF_WARNING: "MTA:spoof_warning",
        SMS_TAG_ROOT: "SMSShortcode:",
        APP_ID_ROOT: "app_id:",
        DOMAIN_AUTH_PASS: "MTA:dmarc:pass",
        DOMAIN_AUTH_FAIL: "MTA:dmarc:fail",
        MTA_SYSTEM_MESSAGE: "MTA:system_message",
        EMAIL_MESSAGE: "source:email",
        MARKETPLACE: "marketplace",
        ROOM: "room",
        PAGES: "pages",
        PAGE_BACKGROUND: "page_background",
        PAGE_FOLLOWUP: "page_followup",
        ONE_CLICK_MESSAGE: "page_one_click_message",
        MESSAGE_REQUEST_AGGREGATION_UNIT: "message_request_aggregation_unit",
        ONE_WAY_MESSAGE: "one_way_message",
        ACTION_COPIED_MESSAGE: "action:copy_message",
        ACTION_COPIED_SELF_MESSAGE: "copy_self_message",
        ACTION_COPIED_ATTACHMENT: "action:copy_attachment",
        ACTION_COPIED_SELF_ATTACHMENT: "copy_self_attachment",
        IRIS_MAPPING: {
            FOLDER_INVALID: null,
            FOLDER_INBOX: "inbox",
            FOLDER_OTHER: "other",
            FOLDER_SPAM: "spam",
            FOLDER_PENDING: "pending",
            FOLDER_MONTAGE: "montage",
            FOLDER_HIDDEN: "hidden",
            FOLDER_DISABLED: "disabled",
            FOLDER_PAGE_BACKGROUND: "page_background",
            FOLDER_PAGE_DONE: "page_done",
            FOLDER_BLOCKED: "blocked"
        }
    }
}
), null);
__d("ChatReliabilityTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:ChatReliabilityLoggerConfig", this.$1, b("Banzai").BASIC, a)
        }
        ;
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:ChatReliabilityLoggerConfig", this.$1, b("Banzai").VITAL, a)
        }
        ;
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:ChatReliabilityLoggerConfig", this.$1, {
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
        c.setEventData = function(a) {
            this.$1.event_data = a;
            return this
        }
        ;
        return a
    }();
    c = {
        event: !0,
        event_data: !0
    };
    e.exports = a
}
), null);
__d("CallbackManagerController", ["ErrorGuard"], (function(a, b, c, d, e, f) {
    var g;
    a = function() {
        function a(a) {
            this.$2 = [],
            this.$1 = [void 0],
            this.$3 = a
        }
        var c = a.prototype;
        c.executeOrEnqueue = function(a, b, c) {
            c = Boolean(c) ? c : {};
            var d = this.$4(b, a, c);
            if (d)
                return 0;
            this.$1.push({
                fn: b,
                request: a,
                options: c
            });
            d = this.$1.length - 1;
            this.$2.push(d);
            return d
        }
        ;
        c.unsubscribe = function(a) {
            delete this.$1[a]
        }
        ;
        c.reset = function() {
            this.$1 = []
        }
        ;
        c.getRequest = function(a) {
            return this.$1[a]
        }
        ;
        c.runPossibleCallbacks = function(a) {
            var b = this
              , c = this.$2;
            this.$2 = [];
            var d = [];
            c.forEach(function(c) {
                var e = b.$1[c];
                if (!e)
                    return;
                e = b.$3(e.request, babelHelpers["extends"]({}, e.options, a));
                e ? d.push({
                    args: e,
                    id: c
                }) : b.$2.push(c)
            });
            d.forEach(function(a) {
                var c = a.args;
                a = a.id;
                var d = b.$1[a];
                if (!d)
                    return;
                delete b.$1[a];
                b.$5(d.fn, c, d.request)
            })
        }
        ;
        c.$4 = function(a, b, c) {
            c = this.$3(b, c);
            c && this.$5(a, c, b);
            return !!c
        }
        ;
        c.$5 = function(a, c, d) {
            d = {
                ids: d
            };
            (g || (g = b("ErrorGuard"))).applyWithGuard(a, d, c)
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("KeyedCallbackManager", ["CallbackManagerController", "FBLogger"], (function(a, b, c, d, e, f) {
    a = function() {
        function a() {
            this.$2 = {},
            this.$1 = new (b("CallbackManagerController"))(this.$3.bind(this))
        }
        var c = a.prototype;
        c.executeOrEnqueue = function(a, c) {
            if (!(a instanceof Array)) {
                var d = a
                  , e = c;
                a = [a];
                c = function(a) {
                    e(a[d])
                }
            }
            a = a.filter(function(a) {
                var c = a !== null && a !== void 0;
                c || b("FBLogger")("KeyedCallbackManager").mustfix("KeyedCallbackManager.executeOrEnqueue: key %s is invalid", JSON.stringify(a));
                return c
            });
            return this.$1.executeOrEnqueue(a, c)
        }
        ;
        c.unsubscribe = function(a) {
            this.$1.unsubscribe(a)
        }
        ;
        c.reset = function() {
            this.$1.reset(),
            this.$2 = {}
        }
        ;
        c.getUnavailableResources = function(a) {
            var b = this;
            a = this.$1.getRequest(a);
            var c = [];
            a && (c = a.request.filter(function(a) {
                return !b.$2[a]
            }));
            return c
        }
        ;
        c.getUnavailableResourcesFromRequest = function(a) {
            a = Array.isArray(a) ? a : [a];
            return a.filter(function(a) {
                if (a !== null && a !== void 0)
                    return !this.$2[a]
            }, this)
        }
        ;
        c.addResourcesAndExecute = function(a) {
            Object.assign(this.$2, a),
            this.$1.runPossibleCallbacks()
        }
        ;
        c.setResource = function(a, b) {
            this.$2[a] = b,
            this.$1.runPossibleCallbacks()
        }
        ;
        c.getResource = function(a) {
            return this.$2[a]
        }
        ;
        c.getAllResources = function() {
            return this.$2
        }
        ;
        c.dumpResources = function() {
            var a = this
              , b = {};
            Object.keys(this.$2).forEach(function(c) {
                var d = a.$2[c];
                typeof d === "object" && (d = babelHelpers["extends"]({}, d));
                b[c] = d
            });
            return b
        }
        ;
        c.$3 = function(a) {
            var b = {};
            for (var c = 0; c < a.length; c++) {
                var d = a[c]
                  , e = this.$2[d];
                if (typeof e === "undefined")
                    return !1;
                b[d] = e
            }
            return [b]
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("ChannelConstants", [], (function(a, b, c, d, e, f) {
    var g = "channel/";
    a = {
        CHANNEL_MANUAL_RECONNECT_DEFER_MSEC: 2e3,
        MUTE_WARNING_TIME_MSEC: 25e3,
        WARNING_COUNTDOWN_THRESHOLD_MSEC: 15e3,
        ON_SHUTDOWN: g + "shutdown",
        ON_INVALID_HISTORY: g + "invalid_history",
        ON_CONFIG: g + "config",
        ON_ENTER_STATE: g + "enter_state",
        ON_EXIT_STATE: g + "exit_state",
        ATTEMPT_RECONNECT: g + "attempt_reconnect",
        RTI_SESSION: g + "new_rti_address",
        CONSOLE_LOG: g + "message:console_log",
        GET_RTI_SESSION_REQUEST: g + "rti_session_request",
        SKYWALKER: g + "skywalker",
        CHANNEL_ESTABLISHED: g + "established",
        OK: "ok",
        ERROR: "error",
        ERROR_MAX: "error_max",
        ERROR_MISSING: "error_missing",
        ERROR_MSG_TYPE: "error_msg_type",
        ERROR_SHUTDOWN: "error_shutdown",
        ERROR_STALE: "error_stale",
        SYS_OWNER: "sys_owner",
        SYS_NONOWNER: "sys_nonowner",
        SYS_ONLINE: "sys_online",
        SYS_OFFLINE: "sys_offline",
        SYS_TIMETRAVEL: "sys_timetravel",
        HINT_AUTH: "shutdown auth",
        HINT_CONN: "shutdown conn",
        HINT_DISABLED: "shutdown disabled",
        HINT_INVALID_STATE: "shutdown invalid state",
        HINT_MAINT: "shutdown maint",
        HINT_UNSUPPORTED: "shutdown unsupported",
        reason_Unknown: 0,
        reason_AsyncError: 1,
        reason_TooLong: 2,
        reason_Refresh: 3,
        reason_RefreshDelay: 4,
        reason_UIRestart: 5,
        reason_NeedSeq: 6,
        reason_PrevFailed: 7,
        reason_IFrameLoadGiveUp: 8,
        reason_IFrameLoadRetry: 9,
        reason_IFrameLoadRetryWorked: 10,
        reason_PageTransitionRetry: 11,
        reason_IFrameLoadMaxSubdomain: 12,
        reason_NoChannelInfo: 13,
        reason_NoChannelHost: 14,
        CAPABILITY_VOIP_INTEROP: 8,
        CAPABILITY_ACTIVE_ON_DESKTOP_APP: 16384,
        CAPABILITY_PLAYING_INSTANT_GAME: 2097152,
        FANTAIL_SERVICE: "WebchatClient",
        SUBSCRIBE: "subscribe",
        UNSUBSCRIBE: "unsubscribe",
        FAKE_DFF: "fake_dff",
        THROTTLED: g + "throttled",
        JUMPSTART: g + "jumpstart",
        ENTITY_PRESENCE_ACTIVE_PING: "entity_presence/active_ping",
        ENTITY_PRESENCE_SKIPPED_PING: "entity_presence/skipped_ping",
        SUBSCRIPTION_STATE: {
            SUBSCRIBE: "s",
            MUTATE_CONTEXT: "m",
            UNSUBSCRIBE: "u"
        },
        DEFAULT_MAX_SUBSCRIPTIONS: 300,
        DEFAULT_EVICTION_BATCH_SIZE: 20,
        DEFAULT_MAX_SUBSCRIPTION_FLUSH_BATCH_SIZE: 300,
        DEFAULT_MAX_CONSECUTIVE_FLUSH_FAILURES: 3,
        getArbiterType: function(a) {
            return g + "message:" + a
        },
        getRTISkywalkerArbiterType: function(a, b) {
            return g + "skywalker:" + a + ":" + b
        }
    };
    e.exports = a
}
), null);
__d("AvailableListConstants", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        ON_AVAILABILITY_CHANGED: "buddylist/availability-changed",
        ON_UPDATE_ERROR: "buddylist/update-error",
        ON_UPDATED: "buddylist/updated",
        ON_CHAT_NOTIFICATION_CHANGED: "chat-notification-changed",
        OFFLINE: 0,
        IDLE: 1,
        ACTIVE: 2,
        MOBILE: 3,
        WEB_STATUS: "webStatus",
        FB_APP_STATUS: "fbAppStatus",
        MESSENGER_STATUS: "messengerStatus",
        OTHER_STATUS: "otherStatus",
        STATUS_ACTIVE: "active",
        STATUS_IDLE: "idle",
        STATUS_OFFLINE: "offline"
    });
    e.exports = a
}
), null);
__d("ChatReliabilityEvents", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        ERROR: "error",
        CHANNEL_DISCONNECT: "channel_disconnect",
        CHANNEL_CONNECT: "channel_connect",
        CHANNEL_INIT: "channel_init",
        CHANNEL_NOCONFIG: "channel_noconfig",
        CHANNEL_HISTORY_INVALID: "channel_history_invalid",
        CHANNEL_STALLED: "channel_stalled",
        MESSAGE_RECEIVED: "msg_received",
        MESSAGE_SEND_START: "msg_send_start",
        THREAD_INFO_ENDPOINT_FATAL: "thread_info_fatal",
        DFF_ENDPOINT_FATAL: "invalidate_global_state_fatal",
        DFF_DELTA_INIT: "dff_initiated_by_delta",
        DFF_HOLE_INIT: "dff_initiated_by_hole",
        FETCHING_MANY_MESSAGES: "fetching_many_messages",
        THREAD_INFO_MISSING: "thread_info_missing",
        SET_THREAD_ID_MAP: "set_thread_id_map",
        DELETE_THREAD: "delete_thread",
        PROCESS_DELTA: "process_delta",
        RTI_SESSION: "chatproxy_rti_session",
        ON_INVALID_HISTORY: "chatproxy_on_invalid_history",
        GET_DEBUG_PRESENCE: "chatproxy_get_debug_presence"
    });
    e.exports = a
}
), null);
__d("ChatReliabilityInstrumentation", ["ChatReliabilityEvents", "ChatReliabilityTypedLogger", "gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    f.logERROR = a;
    f.logCHANNEL_DISCONNECT = c;
    f.logCHANNEL_CONNECT = d;
    f.logCHANNEL_HISTORY_INVALID = e;
    f.logMESSAGE_RECEIVED = h;
    f.logMESSAGE_SEND_START = i;
    f.logCHANNEL_STALLED = j;
    f.logCHANNEL_INIT = k;
    f.logCHANNEL_NOCONFIG = l;
    f.logDFF_DELTA_INIT = m;
    f.logDFF_HOLE_INIT = n;
    f.logFETCHING_MANY_MESSAGES = o;
    f.logPROCESS_DELTA = p;
    f.logTHREAD_INFO_MISSING = q;
    f.logSET_THREAD_ID_MAP = r;
    f.logDELETE_THREAD = s;
    f.logCHATPROXY_EVENT = t;
    var g = function(a, c) {
        if (!b("gkx")("678576"))
            return;
        new (b("ChatReliabilityTypedLogger"))().setEvent(a).setEventData(c).log()
    };
    function a(a) {
        g(b("ChatReliabilityEvents").ERROR, a)
    }
    function c(a) {
        g(b("ChatReliabilityEvents").CHANNEL_DISCONNECT, a)
    }
    function d(a) {
        g(b("ChatReliabilityEvents").CHANNEL_CONNECT, a)
    }
    function e(a) {
        g(b("ChatReliabilityEvents").CHANNEL_HISTORY_INVALID, a)
    }
    function h(a) {
        g(b("ChatReliabilityEvents").MESSAGE_RECEIVED, a)
    }
    function i(a) {
        g(b("ChatReliabilityEvents").MESSAGE_SEND_START, a)
    }
    function j(a) {
        g(b("ChatReliabilityEvents").CHANNEL_STALLED, a)
    }
    function k(a) {
        g(b("ChatReliabilityEvents").CHANNEL_INIT, a)
    }
    function l(a) {
        g(b("ChatReliabilityEvents").CHANNEL_NOCONFIG, a)
    }
    function m(a) {
        g(b("ChatReliabilityEvents").DFF_DELTA_INIT, a)
    }
    function n(a) {
        g(b("ChatReliabilityEvents").DFF_HOLE_INIT, a)
    }
    function o(a) {
        g(b("ChatReliabilityEvents").FETCHING_MANY_MESSAGES, a)
    }
    function p(a) {
        g(b("ChatReliabilityEvents").PROCESS_DELTA, a)
    }
    function q(a) {
        g(b("ChatReliabilityEvents").THREAD_INFO_MISSING, a)
    }
    function r(a) {
        g(b("ChatReliabilityEvents").SET_THREAD_ID_MAP, a)
    }
    function s(a) {
        g(b("ChatReliabilityEvents").DELETE_THREAD, a)
    }
    function t(a) {
        g(a)
    }
}
), null);
__d("LastActiveTimes", ["fbt", "ServerTime"], (function(a, b, c, d, e, f, g) {
    f.update = a;
    f.getShortDisplay = c;
    f.get = d;
    f.getDebugData = e;
    var h = {};
    function i(a) {
        if (!a || a < 0)
            return null;
        a = b("ServerTime").get() / 1e3 - a;
        a = Math.floor(a / 60);
        var c = Math.floor(a / 60)
          , d = Math.floor(c / 24);
        if (a <= 1)
            return g._({
                "*": "{count} ph\u00fat"
            }, [g._param("count", 1, [0])]);
        else if (a < 60)
            return g._({
                "*": "{count} ph\u00fat"
            }, [g._param("count", a, [0])]);
        else if (c < 24)
            return g._({
                "*": "{count} gi\u1edd"
            }, [g._param("count", c, [0])]);
        else if (d < 3)
            return g._({
                "*": "{count}ng\u00e0y"
            }, [g._param("count", d, [0])]);
        else
            return null
    }
    function j(a, b) {
        (!(a in h) || h[a] < b) && (h[a] = b)
    }
    function k(a) {
        if (a in h)
            return h[a];
        else
            return 0
    }
    function a(a) {
        for (var b in a)
            j(b, a[b])
    }
    function c(a) {
        return i(k(a))
    }
    function d(a) {
        return k(a)
    }
    function e() {
        return h
    }
}
), null);
__d("PresenceUtil", ["CurrentUser", "randomInt"], (function(a, b, c, d, e, f) {
    f.getSessionID = a;
    f.hasUserCookie = c;
    var g = b("randomInt")(0, 4294967295) + 1;
    function a() {
        return g
    }
    function c() {
        return b("CurrentUser").isLoggedInNow()
    }
}
), null);
__d("PresencePrivacy", ["Arbiter", "ArbiterMixin", "AsyncRequest", "Bootloader", "ChannelConstants", "CurrentUser", "PresencePrivacyInitialData", "PresenceUtil", "mixin"], (function(a, b, c, d, e, f) {
    var g = "/ajax/chat/privacy/settings.php"
      , h = "/ajax/chat/privacy/online_policy.php"
      , i = "/ajax/chat/privacy/visibility.php"
      , j = "friend_visibility"
      , k = "visibility"
      , l = "online_policy"
      , m = babelHelpers["extends"]({}, (c = b("PresencePrivacyInitialData")).privacyData)
      , n = c.visibility
      , o = babelHelpers["extends"]({}, c.privacyData)
      , p = n
      , q = c.onlinePolicy
      , r = q
      , s = []
      , t = !1;
    d = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.WHITELISTED = 1,
            c.BLACKLISTED = -1,
            c.UNLISTED = 0,
            c.ONLINE = 1,
            c.OFFLINE = 0,
            c.ONLINE_TO_WHITELIST = 0,
            c.ONLINE_TO_BLACKLIST = 1,
            b) || babelHelpers.assertThisInitialized(c)
        }
        var c = b.prototype;
        c.init = function(a, b, c) {}
        ;
        c.setVisibility = function(a) {
            p = n;
            y(a);
            var b = {
                visibility: a
            }
              , c = {
                type: k,
                visibility: a
            };
            b = G(i, b, c);
            B(b, c);
            return a
        }
        ;
        c.getVisibility = function() {
            return n
        }
        ;
        c.setOnlinePolicy = function(a) {
            r = q;
            z(a);
            var b = {
                online_policy: a
            }
              , c = {
                type: l,
                online_policy: a
            };
            b = G(h, b, c);
            B(b, c);
            return a
        }
        ;
        c.getOnlinePolicy = function() {
            return q
        }
        ;
        c.getFriendVisibility = function(a) {
            return m[a] || u.UNLISTED
        }
        ;
        c.getFriendsVisibility = function() {
            return m
        }
        ;
        c.isUserOffline = function() {
            return this.getVisibility() === u.OFFLINE
        }
        ;
        c.allows = function(a) {
            return this.isUserOffline() ? !1 : this.allowsIfViewerIsOnline(a)
        }
        ;
        c.allowsIfViewerIsOnline = function(a) {
            var b = this.getOnlinePolicy();
            return b === u.ONLINE_TO_WHITELIST ? m[a] == u.WHITELISTED : m[a] != u.BLACKLISTED
        }
        ;
        c.getOnlinePolicyStr = function() {
            if (this.isUserOffline())
                return "offline";
            var a = this.getOnlinePolicy();
            if (a === u.ONLINE_TO_WHITELIST)
                return "online_to_whitelist";
            return a === u.ONLINE_TO_BLACKLIST ? "online_to_blacklist" : "unknown"
        }
        ;
        c.setFriendsVisibility = function(a, b) {
            if (a.length > 0) {
                var c = {};
                for (var d = 0; d < a.length; d++) {
                    var e = a[d];
                    o[e] = m[e];
                    c[e] = b
                }
                v(c);
                e = b;
                e == u.UNLISTED && (e = o[a[0]]);
                d = {
                    users: a,
                    setting: b,
                    setting_type: e
                };
                a = {
                    type: j,
                    settings: c
                };
                e = G(g, d, a);
                B(e, a)
            }
            return b
        }
        ;
        c.setFriendVisibilityMap = function(a, b) {
            for (var c in a)
                o[c] = m[c];
            v(a);
            a = {
                type: j,
                settings: a
            };
            B(F(b, a), a)
        }
        ;
        c.allow = function(a) {
            if (this.allows(a))
                throw new Error("allow() should only be called for users that are not already allowed");
            if (this.getVisibility() === u.OFFLINE)
                throw new Error("allow() should only be called when the user is already online");
            var b = this.getOnlinePolicy() === u.ONLINE_TO_WHITELIST ? u.WHITELISTED : u.UNLISTED;
            return this.setFriendsVisibility([a], b)
        }
        ;
        c.disallow = function(a) {
            if (!this.allows(a))
                throw new Error("disallow() should only be called for users that are not already disallowed");
            if (this.getVisibility() === u.OFFLINE)
                throw new Error("disallow() should only be called when the user is already online");
            var b = this.getOnlinePolicy() === u.ONLINE_TO_BLACKLIST ? u.BLACKLISTED : u.UNLISTED;
            return this.setFriendsVisibility([a], b)
        }
        ;
        c.getBlacklist = function() {
            var a = [];
            for (var b in m)
                m[b] === u.BLACKLISTED && a.push(b);
            return a
        }
        ;
        c.getWhitelist = function() {
            var a = [];
            for (var b in m)
                m[b] === u.WHITELISTED && a.push(b);
            return a
        }
        ;
        c.getMapForTest = function() {
            return m
        }
        ;
        c.setMapForTest = function(a) {
            m = a
        }
        ;
        return b
    }(b("mixin")(b("ArbiterMixin")));
    var u = new d();
    function v(a) {
        var c;
        for (c in a) {
            var d = a[c];
            if (c == b("CurrentUser").getID())
                throw new Error("Invalid to set current user's visibility");
            switch (d) {
            case u.WHITELISTED:
            case u.BLACKLISTED:
            case u.UNLISTED:
                break;
            default:
                throw new Error("Invalid state: " + d)
            }
        }
        for (c in a)
            m[c] = a[c];
        u.inform("privacy-changed")
    }
    function w(a, b) {
        var c = {};
        c[a] = b;
        v(c)
    }
    function x(a) {
        b("Bootloader").loadModules(["MessengerMQTTPresenceReporting"], function(b) {
            b.reportChatVisibility(!!a)
        }, "PresencePrivacy")
    }
    function y(a) {
        switch (a) {
        case u.ONLINE:
        case u.OFFLINE:
            break;
        default:
            throw new Error("Invalid visibility: " + a)
        }
        n = a;
        x(a);
        u.inform("privacy-changed");
        u.inform("privacy-user-presence-changed")
    }
    function z(a) {
        switch (a) {
        case u.ONLINE_TO_WHITELIST:
        case u.ONLINE_TO_BLACKLIST:
            break;
        default:
            throw new Error("Invalid default online policy: " + a)
        }
        q = a;
        u.inform("privacy-user-presence-changed");
        u.inform("privacy-changed")
    }
    function A(a, b) {
        t = !0,
        a.send()
    }
    function B(a, b) {
        s.push({
            request: a,
            data: b
        });
        if (!t) {
            a = s.shift();
            A(a.request, a.data)
        }
    }
    function C(a, b) {
        b = a.type;
        if (b === j) {
            u.inform("privacy-availability-changed");
            for (var c in a.settings)
                o[c] = a.settings[c]
        } else
            b === k ? p = a.visibility : b === l && (r = a.online_policy),
            u.inform("privacy-user-presence-response")
    }
    function D(a, b) {
        n !== p && y(p),
        q !== r && z(r),
        Object.assign(m, o),
        u.inform("privacy-changed"),
        s = []
    }
    function E(a) {
        t = !1;
        if (s.length > 0) {
            a = s.shift();
            A(a.request, a.data)
        }
    }
    function F(a, c) {
        if (b("PresenceUtil") != null) {
            var d = a.getData();
            d.window_id = b("PresenceUtil").getSessionID();
            a.setData(d)
        }
        a.setHandler(C.bind(this, c)).setErrorHandler(D.bind(this, c)).setTransportErrorHandler(D.bind(this, c)).setFinallyHandler(E.bind(this)).setAllowCrossPageTransition(!0);
        return a
    }
    function G(a, c, d) {
        return F(new (b("AsyncRequest"))(a).setData(c), d)
    }
    function a(a, c) {
        a = c.obj;
        if (a.viewer_id != b("CurrentUser").getID())
            throw new Error("Viewer got from the channel is not the real viewer");
        if (a.window_id === b("PresenceUtil").getSessionID())
            return;
        var d = a.data;
        if (a.event == "access_control_entry")
            d.target_ids.forEach(function(a) {
                w(a, d.setting),
                o[a] = d.setting
            });
        else {
            if (a.event == "visibility_update") {
                c = d.visibility ? u.ONLINE : u.OFFLINE;
                y(c);
                p = c
            } else
                a.event == "online_policy_update" && (z(d.online_policy),
                r = d.online_policy);
            u.inform("privacy-user-presence-response")
        }
    }
    u.inform("privacy-changed");
    u.inform("privacy-user-presence-changed", "state");
    b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("privacy_changed"), a.bind(this));
    b("Arbiter").subscribe(b("ChannelConstants").ON_CONFIG, function(a, b) {
        a = b.getConfig("visibility", null);
        if (a !== null && typeof a !== "undefined") {
            b = a ? u.ONLINE : u.OFFLINE;
            y(b)
        }
    }
    .bind(this));
    f = u;
    e.exports = f
}
), null);
__d("ChatVisibility", ["Arbiter", "PresencePrivacy"], (function(a, b, c, d, e, f) {
    var g = {
        isOnline: function() {
            return b("PresencePrivacy").getVisibility() === b("PresencePrivacy").ONLINE
        },
        hasBlackbirdEnabled: function() {
            return this.isVisibleToMostFriends() || this.isVisibleToSomeFriends()
        },
        isVisibleToMostFriends: function() {
            return b("PresencePrivacy").getOnlinePolicy() === b("PresencePrivacy").ONLINE_TO_BLACKLIST && b("PresencePrivacy").getBlacklist().length > 0
        },
        isVisibleToSomeFriends: function() {
            return b("PresencePrivacy").getOnlinePolicy() === b("PresencePrivacy").ONLINE_TO_WHITELIST && b("PresencePrivacy").getWhitelist().length > 0
        },
        goOnline: function(a) {
            b("PresencePrivacy").getVisibility() === b("PresencePrivacy").OFFLINE && (b("PresencePrivacy").setVisibility(b("PresencePrivacy").ONLINE),
            b("Arbiter").inform("chat-visibility/go-online")),
            a && a()
        },
        goOffline: function(a) {
            b("PresencePrivacy").getVisibility() === b("PresencePrivacy").ONLINE && (b("PresencePrivacy").setVisibility(b("PresencePrivacy").OFFLINE),
            b("Arbiter").inform("chat-visibility/go-offline")),
            a && a()
        },
        toggleVisibility: function() {
            g.isOnline() ? g.goOffline() : g.goOnline()
        }
    };
    e.exports = g
}
), null);
__d("PresenceConfig", ["PresenceConfigInitialData"], (function(a, b, c, d, e, f) {
    f.get = a;
    var g = Object.assign({}, b("PresenceConfigInitialData"));
    function a(a, b) {
        return a in g ? g[a] : b
    }
}
), null);
__d("PresenceStatus", ["ArbiterMixin", "AvailableListConstants", "AvailableListInitialData", "BanzaiODS", "Bootloader", "ChatVisibility", "CurrentUser", "FBIDCheck", "FBLogger", "LastActiveTimes", "PresenceConfig", "PresencePrivacy", "ServerTime", "createObjectFrom", "debounceAcrossTransitions", "gkx"], (function(a, b, c, d, e, f) {
    b("BanzaiODS").setEntitySample("presence", 1e-4);
    var g = {}
      , h = {}
      , i = {}
      , j = {}
      , k = Object.assign({}, b("ArbiterMixin"))
      , l = b("debounceAcrossTransitions")(function() {
        return k.inform("change")
    }, 0);
    function m(a) {
        var c, d = parseInt(a.topic.match(/\d+$/), 10);
        a = parseInt(JSON.parse(a.payload).lat, 10);
        var e = Date.now() - a * 1e3;
        e = b("PresenceConfig").get("active_cutoff") * 1e3 - e;
        b("LastActiveTimes").update((c = {},
        c[d] = a,
        c));
        k.checkPresence(d);
        k.get(d) === b("AvailableListConstants").ACTIVE && (window.clearTimeout(j[d].timeout),
        j[d].timeout = window.setTimeout(function() {
            k.checkPresence(d)
        }, e))
    }
    function n(a) {
        return /^\d+$/.test(a)
    }
    Object.assign(k, {
        resetPresenceData: function() {
            g = {},
            h = {}
        },
        reset: function() {
            k.resetPresenceData(),
            i = {}
        },
        get: function(a) {
            !n(a) && b("PresenceConfig").get("presence_throw_for_malformed_id") && b("FBLogger")("presence").warn("received malformed id '%s'", a);
            if (a == b("CurrentUser").getID())
                return b("ChatVisibility").isOnline() ? b("AvailableListConstants").ACTIVE : b("AvailableListConstants").OFFLINE;
            n(a) && !b("FBIDCheck").isUser_deprecated(a) && !j[a] && (b("BanzaiODS").bumpEntityKey(3303, "presence", "page_subscribe"),
            j[a] = {},
            b("PresenceConfig").get("presence_page_green_dot_sub") && b("Bootloader").loadModules(["SkywalkerManager"], function(b) {
                return b.subscribe("presence_push/fb/" + a, m)
            }, "PresenceStatus"));
            var c = b("AvailableListConstants").OFFLINE;
            a in g && (c = g[a]);
            b("PresencePrivacy").allows(a) || (c = b("AvailableListConstants").OFFLINE);
            return c
        },
        getCapabilities: function(a) {
            a = h[a];
            return a ? a : 0
        },
        isPlayingCanvasGameUser: function(a) {
            return !!i[a]
        },
        getGroup: function(a) {
            return a.some(function(a) {
                return a == b("CurrentUser").getID() ? !1 : k.get(a) === b("AvailableListConstants").ACTIVE
            }) ? b("AvailableListConstants").ACTIVE : b("AvailableListConstants").OFFLINE
        },
        set: function(a, c, d, e, f, i) {
            if (a == b("CurrentUser").getID())
                return !1;
            var j;
            if (c !== null && c !== void 0) {
                c = c == b("AvailableListConstants").ACTIVE ? b("AvailableListConstants").ACTIVE : b("AvailableListConstants").OFFLINE;
                d = k.get(a);
                j = d != c;
                if ((j || c == b("AvailableListConstants").ACTIVE) && b("FBIDCheck").isUser_deprecated(a)) {
                    b("LastActiveTimes").update((e = {},
                    e[a] = b("ServerTime").get() / 1e3,
                    e))
                }
                g[a] = c
            }
            d = !1;
            f !== void 0 && f !== null && (d = k.getCapabilities(a) != f,
            h[a] = f);
            e = j || d;
            e && !i && l();
            return e
        },
        setPlayingCanvasGameFriends: function(a) {
            if (!b("gkx")("678262"))
                return;
            i = b("createObjectFrom")(a)
        },
        getOnlineIDs: function() {
            var a, c = [];
            for (a in g)
                k.get(a) === b("AvailableListConstants").ACTIVE && c.push(a);
            return c
        },
        getAllIDs: function() {
            return Object.keys(g)
        },
        getOnlineCount: function() {
            return k.getOnlineIDs().length
        },
        getPresenceStats: function() {
            var a = 0
              , c = 0
              , d = 0;
            for (var e in g) {
                a += 1;
                switch (k.get(e)) {
                case b("AvailableListConstants").OFFLINE:
                    c += 1;
                    break;
                case b("AvailableListConstants").ACTIVE:
                    d += 1;
                    break;
                default:
                    break
                }
            }
            return {
                total: a,
                offline: c,
                active: d
            }
        },
        getAllDebugInfo: function() {
            var a = {};
            for (var b in g)
                a[b] = {
                    p: g[b],
                    vc: h[b]
                };
            return a
        },
        setMultiFromMQTT: function(a) {
            var c = {};
            Array.isArray(a) && a.forEach(function(a) {
                a.l && (c[a.u] = a.l),
                k.set(a.u, a.p, !1, "mqtt", a.c, !0)
            });
            b("LastActiveTimes").update(c);
            l()
        },
        setMultiChatproxy: function(a) {
            var c = {};
            for (var d in a) {
                a[d].lat && (c[d] = a[d].lat);
                var e = a[d].p;
                k.set(d, e, !1, "chatproxy", a[d].vc, !0)
            }
            b("LastActiveTimes").update(c);
            l()
        },
        setMultiActive: function(a, c) {
            var d = !1;
            a.forEach(function(a) {
                k.set(a, b("AvailableListConstants").ACTIVE, !1, c, null, !0) && (d = !0)
            });
            d && l()
        },
        checkPresence: function(a) {
            var c = !1
              , d = Math.ceil(Date.now() / 1e3) - b("LastActiveTimes").get(a);
            k.set(a, d < b("PresenceConfig").get("active_cutoff") ? b("AvailableListConstants").ACTIVE : b("AvailableListConstants").OFFLINE, !1, "pylon", null, !0) && (c = !0);
            c && l()
        }
    });
    b("AvailableListInitialData").activeList && b("AvailableListInitialData").activeList.length > 0 && k.setMultiActive(b("AvailableListInitialData").activeList, "available_list_active");
    b("AvailableListInitialData").playingNow && b("AvailableListInitialData").playingNow.length > 0 && k.setPlayingCanvasGameFriends(b("AvailableListInitialData").playingNow);
    b("AvailableListInitialData").lastActiveTimes && Object.keys(b("AvailableListInitialData").lastActiveTimes).length > 0 && b("LastActiveTimes").update(b("AvailableListInitialData").lastActiveTimes);
    a = k;
    e.exports = a
}
), null);
__d("ChatproxyPresence", ["Arbiter", "AvailableListConstants", "AvailableListInitialData", "BanzaiODS", "ChannelConstants", "ChatReliabilityEvents", "ChatReliabilityInstrumentation", "LastActiveTimes", "PresenceStatus", "debounceAcrossTransitions"], (function(a, b, c, d, e, f) {
    a = function() {
        "use strict";
        function a(a) {
            this.$1 = a,
            this.$2 = !1,
            this.$3 = b("AvailableListInitialData").chatNotif,
            this.$4 = !1
        }
        var c = a.prototype;
        c.subscribe = function() {
            var a = this, c, d;
            (c = b("Arbiter")).subscribe((d = b("ChannelConstants")).getArbiterType("chatproxy-presence"), this.updatePresenceInfo.bind(this));
            c.subscribe(d.ON_INVALID_HISTORY, function() {
                b("ChatReliabilityInstrumentation").logCHATPROXY_EVENT(b("ChatReliabilityEvents").ON_INVALID_HISTORY),
                a.$2 = !0
            });
            c.subscribe(d.RTI_SESSION, function(c, d) {
                b("ChatReliabilityInstrumentation").logCHATPROXY_EVENT(b("ChatReliabilityEvents").RTI_SESSION),
                d && (a.$4 = d)
            });
            c.subscribe(d.getArbiterType("get_debug_presence"), function(c, d) {
                b("ChatReliabilityInstrumentation").logCHATPROXY_EVENT(b("ChatReliabilityEvents").GET_DEBUG_PRESENCE);
                c = b("PresenceStatus").getAllDebugInfo();
                d = b("LastActiveTimes").getDebugData();
                for (var e in d) {
                    var f = c[e];
                    f === void 0 && (f = {},
                    c[e] = f);
                    f.l = Math.floor(d[e])
                }
                a.$4.issueRequest("/debug_presence", {}, c, function() {
                    b("BanzaiODS").bumpEntityKey(2966, "ChatproxyPresence", "debug_presence.sucess")
                })
            })
        }
        ;
        c.getRTISession = function() {
            return this.$4
        }
        ;
        c.updatePresenceInfo = function(a, c) {
            this.$2 && (this.$2 = !1,
            b("PresenceStatus").resetPresenceData());
            c = c.obj;
            a = !1;
            c.chatNotif !== void 0 && (a = this.$3 !== c.chatNotif);
            a && (this.$3 = c.chatNotif);
            c.gamers && b("PresenceStatus").setPlayingCanvasGameFriends(c.gamers);
            a && this.$1(b("AvailableListConstants").ON_CHAT_NOTIFICATION_CHANGED, this.$3);
            b("debounceAcrossTransitions")(function() {
                this.$1(b("AvailableListConstants").ON_AVAILABILITY_CHANGED)
            }
            .bind(this), 0)()
        }
        ;
        c.getWebChatNotification = function() {
            return this.$3
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("ChatDispatcher", ["ExplicitRegistrationDispatcher"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        return b
    }(b("ExplicitRegistrationDispatcher"));
    c = new a({
        strict: !1
    });
    e.exports = c
}
), null);
__d("PresenceStatusActionTypes", ["keyMirror"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("keyMirror")({
        AVAILABILITY_CHANGED: null
    });
    e.exports = a
}
), null);
__d("TypingStates", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        INACTIVE: 0,
        TYPING: 1,
        QUITTING: 2
    });
    e.exports = a
}
), null);
__d("AvailableList", ["Arbiter", "ArbiterMixin", "AsyncRequest", "AvailableListConstants", "BanzaiODS", "Bootloader", "ChannelConstants", "ChatConfig", "ChatDispatcher", "ChatproxyPresence", "ChatReliabilityInstrumentation", "ChatVisibility", "CurrentUser", "FBIDCheck", "FBLogger", "LastActiveTimes", "PresencePrivacy", "PresenceStatus", "PresenceStatusActionTypes", "Run", "ServerTime", "TypingStates", "debounceAcrossTransitions", "emptyFunction", "requireWeak"], (function(a, b, c, d, e, f) {
    "use strict";
    b("BanzaiODS").setEntitySample("presence", 1e-4);
    var g = babelHelpers["extends"]({}, b("AvailableListConstants"), b("ArbiterMixin"))
      , h = /\D/;
    g.subscribe([b("AvailableListConstants").ON_AVAILABILITY_CHANGED, b("AvailableListConstants").ON_UPDATE_ERROR], function(a, c) {
        b("Arbiter").inform(a, c)
    });
    b("PresenceStatus").subscribe("change", b("debounceAcrossTransitions")(function() {
        g.inform(b("AvailableListConstants").ON_AVAILABILITY_CHANGED)
    }, 0));
    var i = b("debounceAcrossTransitions")(function() {
        g.inform(b("AvailableListConstants").ON_AVAILABILITY_CHANGED),
        b("ChatDispatcher").dispatch({
            type: b("PresenceStatusActionTypes").AVAILABILITY_CHANGED
        })
    }, 0);
    function j(a, c, d, e, f) {
        if (a === b("CurrentUser").getID())
            return;
        c = b("PresenceStatus").set(a, c, d, e, f);
        if (c) {
            d = b("debounceAcrossTransitions")(function() {
                g.inform(b("AvailableListConstants").ON_AVAILABILITY_CHANGED, a),
                b("ChatDispatcher").dispatch({
                    type: b("PresenceStatusActionTypes").AVAILABILITY_CHANGED,
                    id: a
                })
            }, 0);
            d()
        }
    }
    function k(a) {
        a = a.payload.availability || {};
        for (var b in a)
            j(b && b.toString(), a[b].a, !0, "mercury_tabs", a[b].c)
    }
    function l(a) {
        if (!a || a === "0" || h.test(a)) {
            b("ChatReliabilityInstrumentation").logERROR("bad id for available list: " + a);
            return
        }
        new (b("AsyncRequest"))("/ajax/mercury/tabs_presence.php").setData({
            target_id: a
        }).setHandler(k).setErrorHandler(b("emptyFunction")).setAllowCrossPageTransition(!0).send()
    }
    var m = void 0;
    try {
        m = new (b("ChatproxyPresence"))(function(a) {
            g.inform(a)
        }
        ),
        m.subscribe()
    } catch (a) {
        b("FBLogger")("chat").catching(a).mustfix("Failed to subscribe to chat proxy presence"),
        b("ChatReliabilityInstrumentation").logERROR(a.getMessage())
    }
    Object.assign(g, {
        getChatproxyPresenceObject: function() {
            return m
        },
        get: function(a) {
            return b("PresenceStatus").get(a)
        },
        updateForID: function(a) {
            if (b("ChatConfig").get("presence_page_green_dot_sub") && !b("FBIDCheck").isUser_deprecated(a))
                return;
            l(a);
            b("PresencePrivacy").getVisibility() == b("PresencePrivacy").ONLINE && b("Run").onAfterLoad(function() {
                b("Bootloader").loadModules(["MessengerMQTTPresence"], function(b) {
                    b.sendAdditionalBuddyRequest(a)
                }, "AvailableList")
            })
        },
        getWebChatNotification: function() {
            return m && m.getWebChatNotification()
        },
        isReady: function() {
            return !!m
        },
        set: function(a, b, c, d) {
            j(a, b, !0, c, d)
        }
    });
    b("PresencePrivacy").subscribe(["privacy-changed", "privacy-availability-changed", "privacy-user-presence-response"], i);
    b("requireWeak")("ChannelConnection", function(a) {
        return a.subscribe([a.CONNECTED, a.RECONNECTING, a.SHUTDOWN, a.MUTE_WARNING, a.UNMUTE_WARNING], i)
    });
    b("Bootloader").loadModules(["MercurySyncEventsProxy"], function(a) {
        b("Arbiter").subscribe([a.getArbiterTypeForFBID(b("CurrentUser").getID(), a.Events.TYP)], function(a, c) {
            a = c.obj;
            if (a.st === b("TypingStates").TYPING) {
                c = a.from;
                if (b("ChatVisibility").isOnline()) {
                    b("BanzaiODS").bumpEntityKey(3303, "presence", "stale_presence_check_typing");
                    a = b("PresenceStatus").get(c);
                    if (a != b("AvailableListConstants").ACTIVE) {
                        a = b("LastActiveTimes").get(c) * 1e3;
                        var d = b("ServerTime").get();
                        if (!a)
                            b("BanzaiODS").bumpEntityKey(3303, "presence", "no_detailed_presence_typing");
                        else if (d - a > 5 * 60 * 1e3) {
                            var e = "stale_presence_typing";
                            d = d - a;
                            d < 10 * 60 * 1e3 ? e += "600" : d < 60 * 60 * 1e3 && (e += "3600");
                            b("BanzaiODS").bumpEntityKey(3303, "presence", e)
                        }
                    }
                }
                g.set(c && c.toString(), b("AvailableListConstants").ACTIVE, "channel-typing")
            }
        })
    }, "AvailableList");
    b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("messaging"), function(a, c) {
        if (!b("ChatVisibility").isOnline())
            return;
        a = c.obj;
        if (a.message && a.message.timestamp && a.message.sender_fbid) {
            c = b("ServerTime").get();
            var d = a.message.timestamp;
            if (c - d < 2 * 60 * 1e3) {
                b("BanzaiODS").bumpEntityKey(3303, "presence", "stale_presence_check");
                c = a.message.sender_fbid;
                a = b("PresenceStatus").get(c);
                if (a == b("AvailableListConstants").ACTIVE)
                    return;
                a = b("LastActiveTimes").get(c) * 1e3;
                if (!a)
                    b("BanzaiODS").bumpEntityKey(3303, "presence", "no_detailed_presence");
                else if (d - a > 5 * 60 * 1e3) {
                    c = "stale_presence";
                    d = d - a;
                    d < 10 * 60 * 1e3 ? c += "600" : d < 60 * 60 * 1e3 && (c += "3600");
                    b("BanzaiODS").bumpEntityKey(3303, "presence", c)
                }
            }
        }
    });
    a = g;
    e.exports = a
}
), null);
__d("LoadOnRender.react", ["React", "createCancelableFunction"], (function(a, b, c, d, e, f) {
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(c) {
            var d;
            d = a.call(this, c) || this;
            d.$1 = !1;
            d.$2 = null;
            d.$3 = !0;
            d.$4 = function(a) {
                d.$2 = a,
                d.$1 && d.forceUpdate()
            }
            ;
            d.state = {
                cancelableOnComponentLoad: b("createCancelableFunction")(d.$4)
            };
            c.loader(d.state.cancelableOnComponentLoad);
            return d
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            this.$1 = !0,
            this.$3 && this.$2 != null && this.forceUpdate()
        }
        ;
        d.componentWillUnmount = function() {
            this.$1 = !1,
            this.state.cancelableOnComponentLoad.cancel()
        }
        ;
        d.render = function() {
            var a = this.$2;
            this.$3 = a == null;
            return !a || this.props.forcePlaceholder ? this.props.placeholder : g.cloneElement(this.props.component, {
                LazyLoadedComponent: a
            })
        }
        ;
        return c
    }(g.Component);
    e.exports = a;
    a.defaultProps = {
        forcePlaceholder: !1
    }
}
), null);
__d("BootloadOnRender.react", ["JSResource", "LoadOnRender.react", "React"], (function(a, b, c, d, e, f) {
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$1 = function(a) {
                b("JSResource").loadAll([d.props.loader], a)
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.render = function() {
            return g.jsx(b("LoadOnRender.react"), {
                placeholder: this.props.placeholder,
                loader: this.$1,
                component: this.props.component
            })
        }
        ;
        return c
    }(g.Component);
    e.exports = a
}
), null);
__d("LazyComponent.react", ["React", "isReactClassComponent"], (function(a, b, c, d, e, f) {
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.getComponent = function() {
            return this.$1
        }
        ;
        d.render = function() {
            var a = this
              , c = this.props
              , d = c.LazyLoadedComponent;
            c = babelHelpers.objectWithoutPropertiesLoose(c, ["LazyLoadedComponent"]);
            var e = b("isReactClassComponent")(d) ? function(b) {
                return a.$1 = b
            }
            : null;
            return g.jsx(d, babelHelpers["extends"]({
                ref: e
            }, c))
        }
        ;
        return c
    }(g.Component);
    e.exports = a;
    a.defaultProps = {
        LazyLoadedComponent: function() {
            return null
        }
    }
}
), null);
__d("WorkForeignEntityType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        FOREIGN: "FOREIGN",
        NOT_FOREIGN: "NOT_FOREIGN",
        LIMITED: "LIMITED"
    });
    e.exports = a
}
), null);
__d("onAfterLoadSafe", ["Run", "TimeSlice", "requestIdleCallback"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        return b("TimeSlice").guard(function() {
            return b("Run").onAfterLoad(function() {
                b("requestIdleCallback")(a)
            })
        }, "delayed after load", {
            propagationType: b("TimeSlice").PropagationType.ORPHAN
        })()
    }
}
), null);
__d("WebMessengerThreadPermalinks", ["MercuryIDs", "MessagingTag", "MessengerURIConstants", "URI", "WWWBase", "requireWeak"], (function(a, b, c, d, e, f) {
    "use strict";
    f.getThreadURI = a;
    f.getThreadURIFromServerID = h;
    f.getThreadURIFromUserID = c;
    var g;
    function a(a, c, d) {
        var e = "";
        b("MercuryIDs").isCanonical(a) ? e = b("MercuryIDs").tokenize(a).value : b("requireWeak")("MercuryThreadIDMap", function(b) {
            e = b.get().getServerIDFromClientIDNow(a)
        });
        d = h(e || "", d);
        c && c(d)
    }
    function h(a, c) {
        var d = new (g || (g = b("URI")))(b("WWWBase").uri)
          , e = b("MessengerURIConstants").FACEBOOK_PREFIX;
        if (c)
            switch (c) {
            case b("MessagingTag").OTHER:
                e += "/filtered";
                break;
            case b("MessagingTag").PENDING:
                e += "/requests";
                break;
            case b("MessagingTag").INBOX:
                break;
            default:
                e += "/" + c;
                break
            }
        d.setPath(e + b("MessengerURIConstants").THREAD_PREFIX + a);
        return d.toString()
    }
    function c(a, c) {
        var d = new (g || (g = b("URI")))(b("WWWBase").uri)
          , e = b("MessengerURIConstants").FACEBOOK_PREFIX;
        d.setPath(i(e, c) + "/t/" + a);
        return d.toString()
    }
    function i(a, c) {
        c && c != b("MessagingTag").INBOX && (a += "/" + c);
        return a
    }
}
), null);
