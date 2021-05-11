if (self.CavalryLogger) {
    CavalryLogger.start_js(["xdHGa"]);
}

__d("P2PReliabilityTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:P2PReliabilityLoggerConfig", this.$1, b("Banzai").BASIC, a)
        }
        ;
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:P2PReliabilityLoggerConfig", this.$1, b("Banzai").VITAL, a)
        }
        ;
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:P2PReliabilityLoggerConfig", this.$1, {
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
        c.setAppBuildNumber = function(a) {
            this.$1.app_build_number = a;
            return this
        }
        ;
        c.setAppID = function(a) {
            this.$1.app_id = a;
            return this
        }
        ;
        c.setAppVersion = function(a) {
            this.$1.app_version = a;
            return this
        }
        ;
        c.setCallID = function(a) {
            this.$1.call_id = a;
            return this
        }
        ;
        c.setClientStackInfo = function(a) {
            this.$1.client_stack_info = a;
            return this
        }
        ;
        c.setDeviceID = function(a) {
            this.$1.device_id = a;
            return this
        }
        ;
        c.setEventName = function(a) {
            this.$1.event_name = a;
            return this
        }
        ;
        c.setExtra = function(a) {
            this.$1.extra = a;
            return this
        }
        ;
        c.setMsgID = function(a) {
            this.$1.msg_id = a;
            return this
        }
        ;
        c.setMsgType = function(a) {
            this.$1.msg_type = a;
            return this
        }
        ;
        c.setProcessingTimeSinceRecvOnWww = function(a) {
            this.$1.processing_time_since_recv_on_www = a;
            return this
        }
        ;
        c.setRawTime = function(a) {
            this.$1.raw_time = a;
            return this
        }
        ;
        c.setReceiverID = function(a) {
            this.$1.receiver_id = a;
            return this
        }
        ;
        c.setResultCode = function(a) {
            this.$1.result_code = a;
            return this
        }
        ;
        c.setSenderID = function(a) {
            this.$1.sender_id = a;
            return this
        }
        ;
        c.setServiceName = function(a) {
            this.$1.service_name = a;
            return this
        }
        ;
        c.setUserCountry = function(a) {
            this.$1.user_country = a;
            return this
        }
        ;
        return a
    }();
    c = {
        app_build_number: !0,
        app_id: !0,
        app_version: !0,
        call_id: !0,
        client_stack_info: !0,
        device_id: !0,
        event_name: !0,
        extra: !0,
        msg_id: !0,
        msg_type: !0,
        processing_time_since_recv_on_www: !0,
        raw_time: !0,
        receiver_id: !0,
        result_code: !0,
        sender_id: !0,
        service_name: !0,
        user_country: !0
    };
    e.exports = a
}
), null);
__d("RTCWebUserActionsDebugTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:RTCWebUserActionsDebugLoggerConfig", this.$1, b("Banzai").BASIC, a)
        }
        ;
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:RTCWebUserActionsDebugLoggerConfig", this.$1, b("Banzai").VITAL, a)
        }
        ;
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:RTCWebUserActionsDebugLoggerConfig", this.$1, {
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
        c.setCallID = function(a) {
            this.$1.call_id = a;
            return this
        }
        ;
        c.setCallTrigger = function(a) {
            this.$1.call_trigger = a;
            return this
        }
        ;
        c.setCallType = function(a) {
            this.$1.call_type = a;
            return this
        }
        ;
        c.setCheckpoint = function(a) {
            this.$1.checkpoint = a;
            return this
        }
        ;
        c.setClientTime = function(a) {
            this.$1.client_time = a;
            return this
        }
        ;
        c.setCodebaseVersion = function(a) {
            this.$1.codebase_version = a;
            return this
        }
        ;
        c.setComponent = function(a) {
            this.$1.component = a;
            return this
        }
        ;
        c.setConferenceName = function(a) {
            this.$1.conference_name = a;
            return this
        }
        ;
        c.setConferenceState = function(a) {
            this.$1.conference_state = a;
            return this
        }
        ;
        c.setDeviceID = function(a) {
            this.$1.device_id = a;
            return this
        }
        ;
        c.setErrorDomain = function(a) {
            this.$1.error_domain = a;
            return this
        }
        ;
        c.setErrorType = function(a) {
            this.$1.error_type = a;
            return this
        }
        ;
        c.setEvent = function(a) {
            this.$1.event = a;
            return this
        }
        ;
        c.setEventTimeElapsed = function(a) {
            this.$1.event_time_elapsed = a;
            return this
        }
        ;
        c.setIsCaller = function(a) {
            this.$1.is_caller = a;
            return this
        }
        ;
        c.setMediaType = function(a) {
            this.$1.media_type = a;
            return this
        }
        ;
        c.setPage = function(a) {
            this.$1.page = a;
            return this
        }
        ;
        c.setPeerID = function(a) {
            this.$1.peer_id = a;
            return this
        }
        ;
        c.setServerInfoData = function(a) {
            this.$1.server_info_data = a;
            return this
        }
        ;
        c.setSurface = function(a) {
            this.$1.surface = a;
            return this
        }
        ;
        return a
    }();
    c = {
        call_id: !0,
        call_trigger: !0,
        call_type: !0,
        checkpoint: !0,
        client_time: !0,
        codebase_version: !0,
        component: !0,
        conference_name: !0,
        conference_state: !0,
        device_id: !0,
        error_domain: !0,
        error_type: !0,
        event: !0,
        event_time_elapsed: !0,
        is_caller: !0,
        media_type: !0,
        page: !0,
        peer_id: !0,
        server_info_data: !0,
        surface: !0
    };
    e.exports = a
}
), null);
__d("FBRTCConsoleLogger", ["nullthrows", "requireCond", "Log", "LogHistory", "cr:1112656"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = null;
    a = function() {
        a.getInstance = function() {
            g || (g = new a());
            return g
        }
        ;
        function a() {
            this.$1 = b("LogHistory").getInstance(a.MODULE_NAME)
        }
        var c = a.prototype;
        c.getLogHistory = function() {
            return this.$1
        }
        ;
        c.log = function(a, b, c, d, e) {
            d === void 0 && (d = "Console");
            e === void 0 && (e = "DEBUG");
            e = " " + JSON.stringify({
                conferenceName: b,
                callID: c
            });
            this.$1.log(d || "Console", a + e);
            return this
        }
        ;
        return a
    }();
    e.exports = a;
    a.MODULE_NAME = "webrtc"
}
), null);
__d("RTWebLoggingSharedInstance", ["ChannelClientID"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = b("ChannelClientID").getID()
        }
        var c = a.prototype;
        c.getDeviceID = function() {
            return this.$1
        }
        ;
        return a
    }();
    c = new a();
    e.exports = c
}
), null);
__d("FBRTCSupport", ["RTCConfig", "UserAgent", "gkx", "qex"], (function(a, b, c, d, e, f) {
    var g = {
        isWebrtcSupported: function() {
            return b("UserAgent").isBrowser("Chrome >= 28") || b("UserAgent").isBrowser("Firefox >= 25") || b("UserAgent").isBrowser("Edge >= 15.15042") && b("gkx")("1341692") && !b("gkx")("1680228") || b("UserAgent").isBrowser("Edge (Chromium Based) >= 74.1") || b("UserAgent").isBrowser("Opera >= 20") || g.isSupportedSafariVersion() && b("gkx")("875718") || b("UserAgent").isBrowser("Oculus Browser >= 6") && b("gkx")("1188589") || this.isUnifiedEnabledForCallsExperimentation()
        },
        isGroupCallWebtrcSupported: function() {
            return b("UserAgent").isBrowser("Chrome >= 28") || b("UserAgent").isBrowser("Edge (Chromium Based) >= 74.1") || b("UserAgent").isBrowser("Opera >= 20") || g.isSupportedSafariVersion() && b("gkx")("875718") || this.isUnifiedEnabledForCallsExperimentation()
        },
        isUnifiedEnabledForCallsExperimentation: function() {
            return b("qex")._("1265876") || !1
        },
        isCollabSupported: function() {
            return g.isWebrtcSupported() && (!!b("RTCConfig").CollabWhitelistedBrowserGK || b("UserAgent").isBrowser("Chrome >= " + 65))
        },
        canUseUnifiedPlan: function(a) {
            var c = b("UserAgent").isBrowser("Chrome >= 73") || b("UserAgent").isBrowser("Safari >= 12.2");
            if (a)
                return c;
            a = b("gkx")("919244") && c;
            return a || b("UserAgent").isBrowser("Mobile Safari >= 12.1.1")
        },
        isSupportedSafariVersion: function() {
            return b("UserAgent").isBrowser("Safari >= 12.1") || b("UserAgent").isBrowser("Mobile Safari >= 12.1")
        },
        isMobileDevice: function() {
            return b("UserAgent").isPlatform("Android") || b("UserAgent").isPlatform("iOS")
        },
        isVideoFilterEffectSupported: function() {
            return !g.isMobileDevice() && (b("UserAgent").isBrowser("Chrome >= 51") || b("UserAgent").isBrowser("Opera >= 36"))
        },
        videoEscalationByUnmuteWorkaround: function() {
            return b("UserAgent").isBrowser("Firefox < 60") || b("UserAgent").isBrowser("Edge")
        },
        isChromiumBased: function() {
            return b("UserAgent").isBrowser("Chrome") || b("UserAgent").isBrowser("Opera") || b("UserAgent").isBrowser("Edge (Chromium Based) >= 74.1")
        }
    };
    e.exports = g
}
), null);
__d("RtcWebUserActionsFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744338");
    c = b("FalcoLoggerInternal").create("rtc_web_user_actions", a);
    e.exports = c
}
), null);
__d("RTWebUserActionLogger", ["CurrentUser", "FBRTCConsoleLogger", "FBRTCSupport", "RtcWebUserActionsDebugFalcoEvent", "RtcWebUserActionsFalcoEvent", "RTWebLoggingSharedInstance", "ZenonSDESKeyDetector", "immutable", "performanceNow", "unrecoverableViolation"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("immutable").Map;
    a = function() {
        function a() {
            this.$2 = h(),
            this.$3 = new Set(),
            this.$4 = new Set(),
            this.$5 = b("RTWebLoggingSharedInstance").getDeviceID(),
            this.$6 = this.$7(),
            this.clearCache()
        }
        var c = a.prototype;
        c.clearCache = function() {
            this.$1 = {
                callID: void 0,
                callType: void 0,
                mediaType: void 0,
                conferenceName: void 0,
                conferenceState: void 0
            }
        }
        ;
        c.logImpression = function(a) {
            this.logEvent(babelHelpers["extends"]({
                eventName: "impression"
            }, a))
        }
        ;
        c.logPreCallImpression = function(a) {
            this.clearCache(),
            this.logImpression(a)
        }
        ;
        c.logPreCallClick = function(a) {
            this.clearCache(),
            this.logClick(a)
        }
        ;
        c.logClick = function(a) {
            this.logEvent(babelHelpers["extends"]({
                eventName: "tap"
            }, a))
        }
        ;
        c.logError = function(a) {
            this.logEvent(babelHelpers["extends"]({
                eventName: "error"
            }, a))
        }
        ;
        c.startTimer = function(a) {
            var c = (g || (g = b("performanceNow")))();
            this.$2 = this.$2.set(a, c);
            this.logCheckpoint({
                checkpoint: a + "_timerStart"
            });
            this.$8(a, {
                startTime: c
            })
        }
        ;
        c.logStopTimer = function(a) {
            var b = a.checkpointName === void 0 ? a.timerName : a.checkpointName
              , c = a.event || {};
            c.timeElapsed = this.$9(a.timerName);
            this.logCheckpoint(babelHelpers["extends"]({
                checkpoint: b + "_timerEnd"
            }, c));
            return c.timeElapsed
        }
        ;
        c.logCheckpoint = function(a) {
            this.logEvent(babelHelpers["extends"]({
                eventName: "checkpoint"
            }, a))
        }
        ;
        c.$10 = function(a) {
            return a === null || a === void 0
        }
        ;
        c.logEvent = function(a) {
            if (b("ZenonSDESKeyDetector")(a))
                throw b("unrecoverableViolation")("RTWebUserActionLogger event contains SDES crypto key! This log entry must be removed!", "rtc_www");
            var c = this.$1;
            c.callID = this.$10(a.callID) ? c.callID : a.callID;
            c.callType = a.callType || c.callType;
            c.conferenceState = a.conferenceState || c.conferenceState;
            c.conferenceName = this.$10(a.conferenceName) ? c.conferenceName : a.conferenceName;
            c.isCaller = a.isCaller == null ? c.isCaller : a.isCaller;
            c.mediaType = a.mediaType || c.mediaType;
            this.$11(a, c);
            c = this.$12(a, c);
            this.$8(a.eventName, c)
        }
        ;
        c.$12 = function(a, c) {
            var d = {
                call_type: c.callType,
                client_time: Date.now().toString(),
                device_id: this.$5,
                error_domain: a.errorDomain,
                error_type: a.errorType,
                component: a.component,
                conference_state: c.conferenceState,
                event: a.eventName,
                media_type: c.mediaType,
                page: this.$6,
                call_id: c.callID,
                conference_name: c.conferenceName,
                surface: a.surface,
                checkpoint: a.checkpoint,
                event_time_elapsed: (a = a.timeElapsed) == null ? void 0 : a.toString(),
                is_caller: c.isCaller,
                codebase_version: "Old Codebase"
            };
            b("RtcWebUserActionsFalcoEvent").log(function() {
                return d
            });
            return d
        }
        ;
        c.$11 = function(a, c) {
            var d = {
                call_type: c.callType,
                client_time: Date.now().toString(),
                device_id: this.$5,
                error_domain: a.errorDomain,
                error_type: a.errorType,
                component: a.component,
                conference_state: c.conferenceState,
                event: a.eventName,
                media_type: c.mediaType,
                page: this.$6,
                call_id: c.callID,
                conference_name: c.conferenceName,
                surface: a.surface,
                checkpoint: a.checkpoint,
                event_time_elapsed: (a = a.timeElapsed) == null ? void 0 : a.toString(),
                is_caller: c.isCaller,
                codebase_version: "Old Codebase"
            };
            b("RtcWebUserActionsDebugFalcoEvent").log(function() {
                return d
            });
            return d
        }
        ;
        c.getCallType = function(a, b) {
            b === void 0 && (b = !1);
            if (a === null || a === void 0)
                return null;
            if (a)
                return "mw";
            else if (b)
                return "escalated";
            else
                return "p2p"
        }
        ;
        c.getAudioVideoComponent = function(a) {
            return a === null || a === void 0 ? null : a ? "audio_button" : "video_button"
        }
        ;
        c.getMediaType = function(a, b) {
            b === void 0 && (b = !1);
            if (b)
                return "escalated";
            else if (a)
                return "audio";
            else
                return "video"
        }
        ;
        c.logErrorOnceforDomain = function(a, b) {
            this.$3.has(a) || (this.$3.add(a),
            this.logError({
                errorDomain: a,
                errorType: b.toString()
            }))
        }
        ;
        c.logCheckpointOnceForDomain = function(a) {
            var b = a.checkpoint;
            this.$4.has(b) || (this.$4.add(b),
            this.logCheckpoint(a))
        }
        ;
        c.clearLoggedDomains = function() {
            this.$3.clear(),
            this.$4.clear()
        }
        ;
        c.getWebLoggerInfoFromStore = function(a) {
            a = a.callInfo;
            var b = a.callID
              , c = a.conferenceName;
            a = a.conferenceState;
            return {
                callID: b,
                conferenceName: c,
                conferenceState: a
            }
        }
        ;
        c.$7 = function() {
            if (b("FBRTCSupport").isMobileDevice())
                return "mweb";
            else if (b("CurrentUser").isWorkUser())
                return "workplace";
            var a = window.location.hostname;
            if (a.search("facebook") !== -1)
                return "facebook";
            else if (a.search("messenger") !== -1)
                return "messenger_dot_com";
            return a
        }
        ;
        c.$9 = function(a) {
            var c = this.$2.get(a);
            if (c) {
                this.$2 = this.$2.remove(a);
                return parseInt((g || (g = b("performanceNow")))() - c, 10)
            }
            return null
        }
        ;
        c.$8 = function(a, c) {
            a = a == null ? "null" : a;
            b("FBRTCConsoleLogger").getInstance().getLogHistory().log(a, JSON.stringify(c))
        }
        ;
        return a
    }();
    c = new a();
    e.exports = c
}
), null);
__d("RtcCallActionFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744335");
    c = b("FalcoLoggerInternal").create("rtc_call_action", a);
    e.exports = c
}
), null);
__d("RtcInfraReliabilityFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744336");
    c = b("FalcoLoggerInternal").create("rtc_infra_reliability", a);
    e.exports = c
}
), null);
__d("FBRTCLogger", ["CurrentUser", "FacebookAppIDs", "FBLogger", "FBRTCConsoleLogger", "FBRTCMessageType", "FBRTCRtcResponseStatusCode", "MarauderLogger", "P2PReliabilityTypedLogger", "RtcCallActionFalcoEvent", "RtcInfraReliabilityFalcoEvent", "RTWebLoggingSharedInstance", "RTWebUserActionLogger", "UserAgentData", "gkx", "pageID", "requireCond", "cr:1440831"], (function(a, b, c, d, e, f) {
    var g = "rtc_client_call_summary"
      , h = "client_error"
      , i = "client_event"
      , j = "info"
      , k = "received_message"
      , l = "send_failed"
      , m = "send_succeeded"
      , n = "sent_message"
      , o = "rtc_tslog"
      , p = "RECEIVED_RESPONSE"
      , q = "RECEIVED_REQUEST"
      , r = "PROCESSING_REQUEST"
      , s = "PROCESSED_REQUEST"
      , t = "PROCESSING_REQUEST_FAILED"
      , u = "PROCESSED_RESPONSE"
      , v = "START_PROCESSING_RESPONSE"
      , w = "SENDING_RESPONSE"
      , x = "RELAY_CONNECTED"
      , y = "SENDING_REQUEST"
      , z = "SENT_REQUEST"
      , A = "SENT_RESPONSE"
      , B = "SEND_REQUEST_FAILED"
      , C = "SEND_RESPONSE_FAILED"
      , D = null;
    a = function() {
        a.getInstance = function() {
            D == null && (D = new a());
            return D
        }
        ;
        a.multiwayMessageTypeName = function(a) {
            switch (a) {
            case b("FBRTCMessageType").JOIN:
                return "JOIN";
            case b("FBRTCMessageType").SERVER_MEDIA_UPDATE:
                return "SERVER_MEDIA_UPDATE";
            case b("FBRTCMessageType").HANGUP:
                return "HANGUP";
            case b("FBRTCMessageType").ICE_CANDIDATE:
                return "ICE_CANDIDATE";
            case b("FBRTCMessageType").RING:
                return "RING";
            case b("FBRTCMessageType").DISMISS:
                return "DISMISS";
            case b("FBRTCMessageType").CONFERENCE_STATE:
                return "CONFERENCE_STATE";
            case b("FBRTCMessageType").ADD_PARTICIPANTS:
                return "ADD_PARTICIPANTS";
            case b("FBRTCMessageType").SUBSCRIPTION:
                return "SUBSCRIPTION";
            case b("FBRTCMessageType").CLIENT_MEDIA_UPDATE:
                return "CLIENT_MEDIA_UPDATE";
            case b("FBRTCMessageType").DATA_MESSAGE:
                return "DATA_MESSAGE";
            case b("FBRTCMessageType").REMOVE_PARTICIPANTS:
                return "REMOVE_PARTICIPANTS";
            case b("FBRTCMessageType").CONNECT:
                return "CONNECT";
            case b("FBRTCMessageType").PING:
                return "PING";
            case b("FBRTCMessageType").P2P_PROTOCOL:
                return "P2P_PROTOCOL";
            case b("FBRTCMessageType").UPDATE:
                return "UPDATE";
            case b("FBRTCMessageType").NOTIFY:
                return "NOTIFY";
            case b("FBRTCMessageType").CLIENT_EVENT:
                return "CLIENT_EVENT";
            case b("FBRTCMessageType").UNSUBSCRIBE:
                return "UNSUBSCRIBE"
            }
            return a.toString()
        }
        ;
        function a() {
            var a;
            this.$2 = JSON.stringify({
                version: 2,
                device: (a = b("UserAgentData")).deviceName,
                os: a.platformName,
                os_version: a.platformFullVersion,
                browser: a.browserName,
                browser_version: a.browserFullVersion
            });
            this.$3 = JSON.stringify({
                version: 2,
                device: a.deviceName,
                os: a.platformName,
                os_version: a.platformFullVersion,
                browser: a.browserName,
                browser_version: a.browserFullVersion,
                msg_source: "web"
            });
            this.$1 = b("RTWebLoggingSharedInstance").getDeviceID();
            this.$4 = b("FacebookAppIDs").MQTT_WEB
        }
        var c = a.prototype;
        c.logToConsole = function(a) {
            this.$5(null, null, "Console", a)
        }
        ;
        c.$6 = function(a) {
            return new (b("P2PReliabilityTypedLogger"))().setExtra(this.$2).setDeviceID(this.$1).setRawTime(Date.now()).setServiceName("WEB_CLIENT").setMsgType(a.toUpperCase()).setAppID(this.$4.toString())
        }
        ;
        c.logMultiwayMessageReceived = function(b, c) {
            var d = a.multiwayMessageTypeName(b.type());
            this.$5(b.conferenceName(), c, "Received MW", d + ", " + b.transactionId(), d === "EXPERIMENT" ? "DEBUG" : "INFO");
            b.isRequest() && this.$7(q, b.conferenceName(), b.serverInfoData(), b.transactionId(), a.multiwayMessageTypeName(b.type()), b.header().retryCount, c ? c.toString() : null)
        }
        ;
        c.$8 = function(b, c, d, e) {
            if (!c.isRequest())
                return;
            this.$7(b, c.conferenceName(), c.serverInfoData(), c.transactionId(), a.multiwayMessageTypeName(c.type()), c.header().retryCount, d ? d.toString() : null, e ? e : null)
        }
        ;
        c.logServerRequestStartProcessing = function(a, b) {
            this.$8(r, a, b)
        }
        ;
        c.logServerRequestDoneProcessing = function(a, b) {
            this.$8(s, a, b)
        }
        ;
        c.logServerRequestFailedProcessing = function(a, b, c) {
            this.$8(t, a, b, c)
        }
        ;
        c.logMultiwayResponseReceived = function(c, d) {
            try {
                var e = c.header.responseStatusCode;
                e === b("FBRTCRtcResponseStatusCode").OK && this.$7(p, c.header.conferenceName, c.header.serverInfoData, c.header.transactionId, a.multiwayMessageTypeName(c.header.type), c.header.retryCount, d)
            } catch (a) {
                this.logErrorWithoutID(a)
            }
        }
        ;
        c.logMultiwayResponseStartProcessing = function(b, c, d) {
            this.$7(v, b.conferenceName, b.serverInfoData, b.transactionId, a.multiwayMessageTypeName(b.type), b.retryCount, c, d)
        }
        ;
        c.logMultiwayResponseProcessed = function(c, d, e) {
            try {
                var f = c.responseStatusCode;
                f === b("FBRTCRtcResponseStatusCode").OK && this.$7(u, c.conferenceName, c.serverInfoData, c.transactionId, a.multiwayMessageTypeName(c.type), c.retryCount, d, e)
            } catch (a) {
                this.logErrorWithoutID(a)
            }
        }
        ;
        c.logMultiwayResponseProcessedFromResponsePayload = function(a, c, d) {
            try {
                var e = a.header.responseStatusCode;
                e === b("FBRTCRtcResponseStatusCode").OK && this.logMultiwayResponseProcessed(a.header, c, d)
            } catch (a) {
                this.logErrorWithoutID(a)
            }
        }
        ;
        c.logSendingMultiwayMessage = function(b) {
            this.$7(b.isRequest() ? y : w, b.conferenceName(), b.serverInfoData(), b.transactionId(), a.multiwayMessageTypeName(b.type()), b.header().retryCount, b.header().clientSessionId)
        }
        ;
        c.logSentMultiwayMessage = function(b) {
            this.$7(b.isRequest() ? z : A, b.conferenceName(), b.serverInfoData(), b.transactionId(), a.multiwayMessageTypeName(b.type()), b.header().retryCount, b.header().clientSessionId)
        }
        ;
        c.logSendMultiwayMessageFailed = function(b) {
            this.$7(b.isRequest() ? B : C, b.conferenceName(), b.serverInfoData(), b.transactionId(), a.multiwayMessageTypeName(b.type()), b.header().retryCount, b.header().clientSessionId)
        }
        ;
        c.logMultiwayRelayConnected = function(a, b, c) {
            this.$7(x, a, b, null, null, null, c)
        }
        ;
        c.$7 = function(a, c, d, e, f, g, h, i) {
            var j = this;
            b("RtcInfraReliabilityFalcoEvent").log(function() {
                return {
                    event_name: a,
                    client_session_id: h,
                    data: {
                        extra_data: i
                    },
                    tc: Date.now(),
                    conference_name: c,
                    server_info_data: d,
                    message_type: f,
                    transaction_id: e,
                    retry_count: g,
                    web_device_id: j.$1,
                    web_app_id: j.$4,
                    version: "0"
                }
            })
        }
        ;
        c.logReceivedMessage = function(a, c, d) {
            var e = c ? c.toString() : null
              , f = {
                call_id: c,
                from: a,
                msg_id: d.msg_id,
                type: d.type
            };
            d.sdp && (f.content = d.sdp);
            d.ack_id && (f.ack_msg_id = d.ack_id);
            var g = d.type || d.msgType;
            this.$6(g).setEventName("CLIENT_RECEIVED_MESSAGE").setCallID(e).setMsgID(d.msg_id).setSenderID(a).setReceiverID(b("CurrentUser").getID()).setExtra(this.$3).log();
            this.$9(k, f);
            this.$5(a, c, "Received P2P", d.type + ", " + d.msg_id)
        }
        ;
        c.logSentMessage = function(a, c, d) {
            var e = c ? c.toString() : null
              , f = {
                call_id: c,
                msg_id: d.msg_id,
                to: a,
                type: d.type
            };
            d.sdp && (f.content = d.sdp);
            d.ack_id && (f.ack_msg_id = d.ack_id);
            this.$6(d.type).setEventName("CLIENT_SENDING_MESSAGE").setCallID(e).setMsgID(d.msg_id).setSenderID(b("CurrentUser").getID()).setReceiverID(a).log();
            this.$9(n, f);
            this.$5(a, c, "Sent", d.type + ", " + d.msg_id)
        }
        ;
        c.logSentMessageSuccess = function(a, c, d, e) {
            var f = {
                call_id: c,
                msg_id: e,
                peer_id: a,
                type: d
            };
            c = c ? c.toString() : null;
            this.$6(d).setEventName("CLIENT_TRANSPORT_SUCCESS").setCallID(c).setMsgID(e.toString()).setSenderID(b("CurrentUser").getID()).setReceiverID(a).log();
            this.$9(m, f)
        }
        ;
        c.logSentMessageFailure = function(a, c, d, e, f) {
            var g = {
                call_id: c,
                error_code: f,
                msg_id: e,
                peer_id: a,
                type: d
            }
              , h = c ? c.toString() : null;
            this.$6(d).setEventName("CLIENT_TRANSPORT_ERROR").setCallID(h).setMsgID(e.toString()).setSenderID(a).setSenderID(b("CurrentUser").getID()).setReceiverID(a).setResultCode(f).log();
            this.$9(l, g);
            this.$5(a, c, "Send Failed", d + ", " + f)
        }
        ;
        c.logCallAction = function(a, c, d, e, f) {
            var g = {
                call_action: d,
                call_id: c,
                content: e,
                peer_id: a
            };
            f && (g.trigger = f);
            b("RtcCallActionFalcoEvent").logImmediately(function() {
                return {
                    action_name: d,
                    call_id: "",
                    audio_output_name: "UNKNOWN",
                    rownum: -1,
                    logging_instance_id: -1,
                    logger_schema_version: -1,
                    caller_id: "",
                    call_type: "UNKNOWN",
                    session_type: "UNKNOWN",
                    seconds_since_call_start: -1,
                    ms_since_epoch: -1,
                    ms_steady: -1,
                    device_orientation: "UNKNOWN",
                    interface_orientation: "UNKNOWN",
                    battery_level: -1,
                    battery_plugged_state: "UNKNOWN",
                    battery_charge_state: "UNKNOWN",
                    battery_mode: "UNKNOWN",
                    camera_facing: "UNKNOWN"
                }
            });
            this.$5(a, c, "CallAction", d + ", " + JSON.stringify(e))
        }
        ;
        c.logEvent = function(a, b, c) {
            var d = {
                call_id: b,
                content: c,
                peer_id: a
            };
            this.$9(i, d);
            this.$5(a, b, "Event", JSON.stringify(c))
        }
        ;
        c.logInfo = function(a, b, c) {
            var d = {
                call_id: b,
                content: c,
                peer_id: a
            };
            this.$9(j, d);
            this.$5(a, b, "Info", JSON.stringify(c))
        }
        ;
        c.logError = function(a, c, d) {
            var e, f = {
                call_id: c,
                content: d,
                peer_id: a
            };
            e = b("FBLogger")("rtweb").addMetadata("RT_WEB", "CALL_ID", "" + ((e = c) != null ? e : "null")).addMetadata("RT_WEB", "PEER_ID", "" + ((e = a) != null ? e : "null"));
            if (typeof d === "string")
                e.warn(d);
            else {
                var g = JSON.stringify(d);
                e.warn((e = g) != null ? e : "Unknown error")
            }
            this.$9(h, f);
            this.$5(a, c, "Error", JSON.stringify(d))
        }
        ;
        c.logErrorWithoutID = function(a) {
            this.logError(null, null, a)
        }
        ;
        c.logEndCallSummary = function(a, c) {
            c === void 0 && (c = !1);
            if (!a)
                return;
            b("RTWebUserActionLogger").logCheckpoint({
                checkpoint: "Attempting to upload CallSummary",
                callID: a.callID
            });
            var d = {
                call_id: a.callID,
                channel_session_id: a.deviceID,
                content: a.toString(),
                local_call_id: a.localCallID,
                peer_id: a.peerID,
                tag: "endcallstats"
            }
              , e = babelHelpers["extends"]({}, d, a.getExtraInfo());
            b("cr:1440831") && b("cr:1440831").logCallSummaryHeartbeat(a, "ecs_logged");
            this.$9(g, e, c);
            this.$5(a.peerID, a.callID, "Call Summary", JSON.stringify(d));
            b("RTWebUserActionLogger").logCheckpoint({
                checkpoint: "Complete uploading CallSummary",
                callID: a.callID
            })
        }
        ;
        c.logTsLogData = function(a, c, d, e, f) {
            f === void 0 && (f = null);
            if (!c || !d || a.streams.length === 0)
                return;
            b("RTWebUserActionLogger").logCheckpoint({
                checkpoint: "Attempting to upload tslog",
                callID: d
            });
            var g = c;
            f && (g = null);
            this.$9(o, {
                call_id: d,
                conf_name: e,
                time_series1: JSON.stringify(a),
                serv_info: f,
                peer_id: g
            }, !0);
            this.$5(c, d, "TSLog Data", JSON.stringify(a));
            b("RTWebUserActionLogger").logCheckpoint({
                checkpoint: "Complete uploading tslog",
                callID: d
            })
        }
        ;
        c.doesContainSensitiveData = function(a) {
            return String(a).indexOf("crypto") > -1
        }
        ;
        c.redactSensitiveData = function(a, b) {
            if (a !== g) {
                a = JSON.stringify(b);
                if (this.doesContainSensitiveData(a))
                    return {
                        redacted: !0
                    }
            }
            return b
        }
        ;
        c.$9 = function(a, c, d) {
            d === void 0 && (d = !1);
            var e = "basic";
            d && (e = b("gkx")("1488912") ? "vital" : "signal");
            c.page_id = b("pageID");
            d = this.redactSensitiveData(a, c);
            b("FBRTCConsoleLogger").getInstance().getLogHistory().log(a, d);
            b("MarauderLogger").log(a, b("FBRTCConsoleLogger").MODULE_NAME, d, void 0, void 0, void 0, void 0, e)
        }
        ;
        c.$5 = function(a, c, d, e, f) {
            f === void 0 && (f = "DEBUG"),
            b("FBRTCConsoleLogger").getInstance().log(this.doesContainSensitiveData(e) ? "redacted" : e, a, c, d, f)
        }
        ;
        return a
    }();
    e.exports = a;
    a.CallAction = Object.freeze({
        ANSWER_CALL: "answer_call",
        AUTO_DISABLE_VIDEO: "auto_disable_video",
        DENIED_PERMISSION: "denied_permission",
        END_CALL: "end_call",
        FAILED_GETTING_URI: "failed_getting_uri",
        OLD_URI: "old_uri",
        OPEN_POPUP: "open_popup",
        POPUP_OPENED: "popup_opened",
        RECEIVED_CALL: "received_call",
        SET_FULLSCREEN_ON: "set_fullscreen_on",
        SET_MUTE: "set_mute",
        SET_SELF_VIEW_ON: "set_self_view_on",
        SET_VIDEO_ON: "set_video_on",
        START_CALL: "start_call",
        START_SKYPE: "start_skype",
        TRY_NEW: "try_new",
        USER_SETTINGS_CHANGED: "user_settings_changed"
    });
    a.Trigger = Object.freeze({
        ADMIN_MESSAGE: "admin_message",
        CHAT_TAB_ICON_TOUR: "chat_tab_icon_tour",
        CHAT_TAB_ICON: "chat_tab_icon",
        CHAT_TAB_VOICE_ICON: "chat_tab_voice_icon",
        MULTIWAY_ADMIN_MESSAGE_JOIN_AUDIO_CALL_BUTTON: "multiway_admin_message_join_audio_call_button",
        MULTIWAY_ADMIN_MESSAGE_JOIN_VIDEO_CALL_BUTTON: "multiway_admin_message_join_video_call_button",
        MULTIWAY_ADMIN_MESSAGE_START_AUDIO_CALL_BUTTON: "multiway_admin_message_start_audio_call_button",
        MULTIWAY_ADMIN_MESSAGE_START_VIDEO_CALL_BUTTON: "multiway_admin_message_start_video_call_button",
        MULTIWAY_CHAT_TAB_SHEET_JOIN_CALL_BUTTON: "multiway_chat_tab_sheet_join_call_button",
        MULTIWAY_POPUP_START_CALL_BUTTON: "multiway_popup_start_call_button",
        MULTIWAY_THREAD_HEADER_AUDIO_BUTTON: "multiway_thread_header_audio_button",
        MULTIWAY_THREAD_HEADER_JOIN_AUDIO_CALL_AUDIO_BUTTON: "multiway_thread_header_join_audio_call_audio_button",
        MULTIWAY_THREAD_HEADER_JOIN_AUDIO_CALL_VIDEO_BUTTON: "multiway_thread_header_join_audio_call_video_button",
        MULTIWAY_THREAD_HEADER_JOIN_VIDEO_CALL_AUDIO_BUTTON: "multiway_thread_header_join_video_call_audio_button",
        MULTIWAY_THREAD_HEADER_JOIN_VIDEO_CALL_VIDEO_BUTTON: "multiway_thread_header_join_video_call_video_button",
        MULTIWAY_THREAD_HEADER_VIDEO_BUTTON: "multiway_thread_header_video_button",
        MULTIWAY_THREAD_LIST_JOIN_CALL_BUTTON: "multiway_thread_list_join_call_button",
        POPUP_CALL_START_BUTTON: "popup_start_call_button",
        REDIAL_BUTTON: "redial_button",
        RESET_CALL: "install_screen_sharing_ext_dialog",
        RETURN_CALL: "return_call",
        SKYPE_DEPRECATION_DIALOG: "skype_deprecation_dialog",
        TIMELINE_PROFILE: "timeline_profile",
        VC_PRECALL_SETUP: "vc_precall_setup",
        WORKPLACE_GROUP_CALL: "workplace_group_call",
        WORKPLACE_P2P_CALL: "workplace_p2p_call",
        UNKNOWN: "unknown",
        WEB_MESSENGER: "web_messenger",
        TEAMWORK_USER_VIDEO_CALL_ITEM: "teamwork_user_video_call_item",
        TEAMWORK_USER_AUDIO_CALL_ITEM: "teamwork_user_audio_call_item"
    });
    a.Key = Object.freeze({
        BATTERY_START: "battery_start",
        BATTERY_END: "battery_end",
        CALL_TYPE: "call_type",
        CONNECTION_EFFECTIVE_TYPE: "conn_effective_type",
        CPU_CORES: "cpu_cores",
        DEVICE_INFO: "device_info",
        DEVICE_MEMORY: "device_memory",
        DEVICE_PIXEL_RATIO: "device_pixel_ratio",
        INITIATED_BY_PAGE_ID: "initiated_by_page_id",
        INITIATED_BY_APP_ID: "initiated_by_app_id",
        PEER_IS_MOBILE: "peer_is_mobile",
        RATING_SHOWN: "rating_shown",
        RATING: "rating5",
        EFFECT_COUNT: "rtc_effect_count",
        EFFECT_TOTAL_DURATION: "rtc_effect_total_duration",
        VIDEO_DURATION_WITH_FILTER: "rtc_video_duration_with_filter_enabled",
        SCREEN_DURATION: "screen_duration",
        SURVEY_CHOICE: "survey_choice",
        SURVEY_DETAILS: "survey_details",
        SURVEY_SHOWN: "survey_shown",
        MEDIA_INPUTS: "media_inputs",
        VIDEO_CAPABILITIES: "video_capabilities",
        CB_ACTIVE: "cb_active",
        YEAR_CLASS: "year_class",
        DESKTOP_DEVICE_CLASS: "desktop_device_class",
        IS_BACKGROUNDED: "is_backgrounded",
        APPLICATION_STATE: "application_state",
        MAX_CONCURRENT_CONNECTED_PARTICIPANTS: "max_concurrent_connected_participants"
    })
}
), null);
__d("MessengerDispatcher", ["Dispatcher_DEPRECATED"], (function(a, b, c, d, e, f) {
    "use strict";
    a = new (b("Dispatcher_DEPRECATED"))();
    e.exports = a
}
), null);
__d("PagesNuxDispatcher", ["ExplicitRegistrationReactDispatcher"], (function(a, b, c, d, e, f) {
    "use strict";
    a = new (b("ExplicitRegistrationReactDispatcher"))({
        strict: !0
    });
    e.exports = a
}
), null);
__d("FluxMixinLegacyInstrumentation", ["FluxContainerInstrumentation"], (function(a, b, c, d, e, f) {
    "use strict";
    f.addInstrumentation = a;
    function g(a) {
        return a.constructor.displayName || a.constructor.name || "FluxMixinLegacy(unknown)"
    }
    var h = {
        _callCalculateState: function() {
            var a = b("FluxContainerInstrumentation").onCalculateStateStart(g(this))
              , c = this._FluxMixinLegacyInstrumentationCalculateStateCaller.apply(this, arguments);
            a && a();
            return c
        },
        UNSAFE_componentWillMount: function() {
            this.constructor._FluxMixinLegacyInstrumentationOnInitCalled || (b("FluxContainerInstrumentation").onInit(this.constructor),
            this.constructor._FluxMixinLegacyInstrumentationOnInitCalled = !0)
        },
        _FluxMixinLegacyInstrumentationEmittedChangeStores: null,
        _getCurrentDispatchForInstrumentation: function() {
            return b("FluxContainerInstrumentation").updateTracking && b("FluxContainerInstrumentation").updateTracking.getCurrentDispatch()
        },
        _onInitialStateForInstrumentation: function() {
            b("FluxContainerInstrumentation").updateTracking && b("FluxContainerInstrumentation").updateTracking.initialState(this, g(this))
        },
        _onReceivePropsForInstrumentation: function(a) {
            b("FluxContainerInstrumentation").updateTracking && b("FluxContainerInstrumentation").updateTracking.receiveProps(this, g(this), a)
        },
        _addStoreEmitForInstrumentation: function(a) {
            b("FluxContainerInstrumentation").updateTracking && b("FluxContainerInstrumentation").updateTracking.shouldRecord() && (this._FluxMixinLegacyInstrumentationEmittedChangeStores = this._FluxMixinLegacyInstrumentationEmittedChangeStores || [],
            b("FluxContainerInstrumentation").addStoreDependencies(this._FluxMixinLegacyInstrumentationEmittedChangeStores, a))
        },
        _collectStoreEmitsForInstrumentation: function() {
            var a = this._FluxMixinLegacyInstrumentationEmittedChangeStores;
            this._FluxMixinLegacyInstrumentationEmittedChangeStores = null;
            return a
        },
        _logStoreEmitsForInstrumentation: function(a, c) {
            b("FluxContainerInstrumentation").updateTracking && b("FluxContainerInstrumentation").updateTracking.storeEmitChange(this, g(this), a || [], c)
        },
        componentDidUpdate: function(a, c) {
            b("FluxContainerInstrumentation").onDidUpdate(this, g(this), a, this.props, c, this.state)
        }
    };
    function a(a) {
        b("FluxContainerInstrumentation").hasInstrumentation() && (a.mixins = a.mixins || [],
        a.mixins.push(h),
        a._FluxMixinLegacyInstrumentationCalculateStateCaller = a._callCalculateState,
        delete a._callCalculateState);
        return a
    }
}
), null);
__d("PureStoreBasedStateMixin", ["invariant", "FluxMixinLegacyInstrumentation", "StoreBasedStateMixinHelper", "setImmediate"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        for (var a = arguments.length, c = new Array(a), d = 0; d < a; d++)
            c[d] = arguments[d];
        return b("FluxMixinLegacyInstrumentation").addInstrumentation({
            _callCalculateState: function() {
                return this.constructor.calculateState()
            },
            getInitialState: function() {
                this._onInitialStateForInstrumentation && this._onInitialStateForInstrumentation();
                return this._callCalculateState()
            },
            UNSAFE_componentWillMount: function() {
                var a = this;
                this.constructor.calculateState || g(0, 2396);
                this._recalculateStateID = null;
                var d = function() {
                    if (a.isMounted()) {
                        var b = a._collectStoreEmitsForInstrumentation ? a._collectStoreEmitsForInstrumentation() : null
                          , c = a._callCalculateState();
                        a.setState(a._logStoreEmitsForInstrumentation != null ? function() {
                            b != null && a._logStoreEmitsForInstrumentation && a._logStoreEmitsForInstrumentation(b);
                            return c
                        }
                        : c)
                    }
                    a._recalculateStateID = null
                };
                this._mixin = new (b("StoreBasedStateMixinHelper"))(c);
                this._mixin.subscribeCallback(function() {
                    a._recalculateStateID === null && (a._recalculateStateID = b("setImmediate")(d))
                }, this._addStoreEmitForInstrumentation)
            },
            componentWillUnmount: function() {
                this._mixin.release(),
                this._mixin = null
            }
        })
    }
    ;
    e.exports = a
}
), null);
__d("FBPaymentsDispatcher", ["ExplicitRegistrationReactDispatcher"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b(b) {
            b = a.call(this, b) || this;
            babelHelpers.assertThisInitialized(b).dispatch = b.dispatch.bind(babelHelpers.assertThisInitialized(b));
            return b
        }
        return b
    }(b("ExplicitRegistrationReactDispatcher"));
    c = new a({
        strict: !1
    });
    e.exports = c
}
), null);
__d("FBPaymentsDialogActions", ["FBPaymentsDispatcher", "keyMirror"], (function(a, b, c, d, e, f) {
    "use strict";
    f.showDialog = a;
    f.hideDialog = c;
    var g = b("keyMirror")({
        SHOW_DIALOG: null,
        HIDE_DIALOG: null
    });
    f.types = g;
    function a(a, c) {
        b("FBPaymentsDispatcher").dispatch({
            type: g.SHOW_DIALOG,
            data: {
                dialogClass: a,
                dialogProps: c
            }
        })
    }
    function c() {
        b("FBPaymentsDispatcher").dispatch({
            type: g.HIDE_DIALOG,
            data: {}
        })
    }
}
), null);
