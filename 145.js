if (self.CavalryLogger) {
    CavalryLogger.start_js(["iEESj"]);
}

__d("ChannelConnectionEvents", [], (function(a, b, c, d, e, f) {
    a = "chat-connection/connected";
    f.CONNECTED = a;
    b = "chat-connection/reconnecting";
    f.RECONNECTING = b;
    c = "chat-connection/shutdown";
    f.SHUTDOWN = c;
    d = "chat-connection/mute";
    f.MUTE_WARNING = d;
    e = "chat-connection/unmute";
    f.UNMUTE_WARNING = e
}
), null);
__d("ChannelConnection", ["Arbiter", "ArbiterMixin", "ChannelConnectionEvents", "ChannelConstants", "ChannelManager", "Run", "SystemEvents", "Visibility", "clearTimeout", "emptyFunction", "mixin", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f) {
    var g = null
      , h = null
      , i = null
      , j = null
      , k = 0;
    a.__comet_ssr_is_server_env_DO_NOT_USE !== !0 && a.__is_archon !== !0 && b("ChannelManager").startChannelManager();
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.CONNECTED = b("ChannelConnectionEvents").CONNECTED,
            d.RECONNECTING = b("ChannelConnectionEvents").RECONNECTING,
            d.SHUTDOWN = b("ChannelConnectionEvents").SHUTDOWN,
            d.MUTE_WARNING = "chat-connection/mute",
            d.UNMUTE_WARNING = "chat-connection/unmute",
            d.unmuteWarning = n,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.disconnected = function() {
            return j === l.SHUTDOWN || j === l.RECONNECTING && !h && k > 1
        }
        ;
        d.isShutdown = function() {
            return j === l.SHUTDOWN
        }
        ;
        d.reconnect = function(a) {
            a === void 0 && (a = !1);
            if (b("ChannelManager").state === "ping" || b("ChannelManager").state === "pull" || b("ChannelManager").isShutdown())
                return;
            l.inform(l.RECONNECTING, 0);
            a ? (g !== null && (b("clearTimeout")(g),
            g = null),
            b("ChannelManager").enterState("ping!")) : g || (g = b("setTimeoutAcrossTransitions")(function() {
                b("ChannelManager").enterState("ping!"),
                g = null
            }, b("ChannelConstants").CHANNEL_MANUAL_RECONNECT_DEFER_MSEC));
            b("ChannelManager").resetDelay()
        }
        ;
        d.mockAfterLoad = function() {
            r(),
            s()
        }
        ;
        return c
    }(b("mixin")(b("ArbiterMixin")));
    var l = new c();
    b("Run").onBeforeUnload(b("emptyFunction"), !1);
    function m() {
        h && (b("clearTimeout")(h),
        h = null)
    }
    function n() {
        m(),
        l.inform(l.UNMUTE_WARNING)
    }
    function o(a) {
        m(),
        h = b("setTimeoutAcrossTransitions")(n, a),
        l.inform(l.MUTE_WARNING)
    }
    function p() {
        i && (b("clearTimeout")(i),
        i = null)
    }
    function q(a, c) {
        p();
        if (a === b("ChannelConstants").ON_ENTER_STATE && (c.nextState || c.state) === "pull") {
            if (j !== l.CONNECTED) {
                var d = !j;
                j = l.CONNECTED;
                k = 0;
                l.inform(l.CONNECTED, {
                    init: d
                })
            }
        } else
            a === b("ChannelConstants").ON_ENTER_STATE && ((c.nextState || c.state) === "ping" || !c.nextState && c.state === "idle") ? i = b("setTimeoutAcrossTransitions")(function() {
                var b = null;
                c.state === "idle" && !c.nextState || (b = c.delay || 0);
                j = l.RECONNECTING;
                c.state === "idle" && k++;
                k > 1 ? l.inform(l.RECONNECTING, b) : !c.nextState && c.state === "idle" && q(a, c)
            }, 500) : a === b("ChannelConstants").ON_SHUTDOWN && (j = l.SHUTDOWN,
            k = 0,
            l.inform(l.SHUTDOWN, c.reason))
    }
    function r() {
        b("ChannelManager").isShutdown() ? q(b("ChannelConstants").ON_SHUTDOWN, b("ChannelManager")._shutdownHint) : q(b("ChannelConstants").ON_ENTER_STATE, {
            state: b("ChannelManager").state,
            nextState: b("ChannelManager").nextState,
            delay: 0
        }),
        b("Visibility").addListener(b("Visibility").VISIBLE, l.reconnect)
    }
    b("Run").onAfterLoad(r);
    function s() {
        b("Arbiter").subscribe([b("ChannelConstants").ON_ENTER_STATE, b("ChannelConstants").ON_SHUTDOWN], q),
        b("Arbiter").subscribe(b("ChannelConstants").ATTEMPT_RECONNECT, function() {
            l.disconnected() && l.reconnect()
        }),
        b("SystemEvents").subscribe(b("SystemEvents").TIME_TRAVEL, function() {
            l.reconnect(),
            o(b("ChannelConstants").MUTE_WARNING_TIME_MSEC)
        }),
        b("Run").onBeforeUnload(p, !1)
    }
    b("Run").onAfterLoad(s);
    d = l;
    e.exports = d
}
), 3);
__d("ZenonDeviceInfoUtils", ["UserAgentData"], (function(a, b, c, d, e, f) {
    "use strict";
    f.getDeviceSoftwareInfo = a;
    function a() {
        var a = b("UserAgentData").browserName
          , c = b("UserAgentData").platformName;
        window.navigator.userAgent.toLowerCase().includes("mobile") && (c += " Mobile",
        a === "Chrome" && (a = "Mobile " + a));
        window.external && window.external.pinPage && (a === "Chrome" && (a += " Edge"));
        return {
            browser: a,
            browser_version: b("UserAgentData").browserFullVersion,
            device: b("UserAgentData").deviceName,
            os: c,
            os_version: b("UserAgentData").platformFullVersion,
            screen_height: window.screen.availHeight,
            screen_width: window.screen.availWidth,
            user_agent: window.navigator.userAgent
        }
    }
}
), null);
__d("multiway_ApprovalStatus", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        DENIED: 0,
        APPROVED: 1
    });
    e.exports = a
}
), null);
__d("multiway_Capability", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        SUPPORT_AUDIO_DEPRECATED: 0,
        SUPPORT_VIDEO_DEPRECATED: 1,
        SUPPORT_EXPERIMENTS_IN_JOIN_RESPONSE: 2,
        SUPPORT_NEW_PARTICIPANT_STATES: 3,
        SUPPORT_SDP_RENEGOTIATION: 4,
        SUPPORT_MWPP: 5,
        REQUIRE_FULL_SDP_IN_SMU: 6,
        SUPPORT_PRECONNECT: 7,
        SUPPORT_MWPP_DEESCALATION: 8,
        SUPPORT_PARTICIPANT_STATE_UNCALLABLE: 9,
        SUPPORT_MULTIPLE_VIDEO_STREAMS: 10
    });
    e.exports = a
}
), null);
__d("multiway_DeviceStatus", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        OK: 0,
        NOT_SUPPORTED: 1,
        IN_ANOTHER_CALL: 10
    });
    e.exports = a
}
), null);
__d("multiway_DismissReason", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        CALL_ENDED: 0,
        ANSWERED_ON_ANOTHER_DEVICE: 1,
        IN_ANOTHER_CALL: 2,
        CONNECTION_DROPPED: 3,
        REJECTED_ON_ANOTHER_DEVICE: 4,
        REMOVED_BY_PARTICIPANT: 5,
        REJECTED_BY_CALLEE: 6,
        INTERNAL_ERROR: 7,
        CALL_ENDED_BY_PRODUCT: 9,
        JOIN_APPROVAL_DENIED: 10,
        JOIN_APPROVAL_TIMEDOUT: 11,
        UNSUPPORTED_VERSION: 12,
        LIVE_NOT_ACKED: 13,
        TX_ACK_TIMEDOUT: 14
    });
    e.exports = a
}
), null);
__d("multiway_EndpointServiceType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        UNKNOWN: 0,
        COMPOSITING_SERVICE: 1
    });
    e.exports = a
}
), null);
__d("multiway_HangupReason", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        IGNORE_CALL: 0,
        HANGUP_CALL: 1,
        NO_ANSWER_TIMEOUT: 2,
        CLIENT_ERROR: 3,
        IN_ANOTHER_CALL: 4,
        CLIENT_INTERRUPTED: 5,
        SESSION_MIGRATED: 6
    });
    e.exports = a
}
), null);
__d("multiway_MediaPauseStatus", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        NotPaused: 0,
        Paused: 1
    });
    e.exports = a
}
), null);
__d("multiway_MessageType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        JOIN: 0,
        SERVER_MEDIA_UPDATE: 1,
        HANGUP: 2,
        ICE_CANDIDATE: 3,
        RING: 4,
        DISMISS: 5,
        CONFERENCE_STATE: 6,
        ADD_PARTICIPANTS: 7,
        SUBSCRIPTION: 8,
        CLIENT_MEDIA_UPDATE: 9,
        DATA_MESSAGE: 10,
        REMOVE_PARTICIPANTS: 11,
        PING: 18,
        P2P_PROTOCOL: 19,
        UPDATE: 20,
        NOTIFY: 21,
        CONNECT: 22,
        CLIENT_EVENT: 23,
        UNSUBSCRIBE: 25,
        APPROVAL: 26
    });
    e.exports = a
}
), null);
__d("multiway_ParticipantCallState", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        UNKNOWN: 0,
        DISCONNECTED: 1,
        NO_ANSWER: 2,
        REJECTED: 3,
        UNREACHABLE: 4,
        CONNECTION_DROPPED: 5,
        CONTACTING: 6,
        RINGING: 7,
        CONNECTING: 8,
        CONNECTED: 9,
        PARTICIPANT_LIMIT_REACHED: 10,
        IN_ANOTHER_CALL: 11,
        RING_TYPE_UNSUPPORTED: 12,
        PENDING_APPROVAL: 13,
        APPROVED: 14,
        FAILED_APPROVAL: 15,
        HANGUP_IN_WAITING_ROOM: 16,
        UNCALLABLE: 17
    });
    e.exports = a
}
), null);
__d("multiway_RingType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        GROUP_AUDIO_CALL: 0,
        PEER_VIDEO_CALL: 1,
        PEER_AUDIO_CALL: 2,
        GROUP_VIDEO_CALL: 3,
        LIVE_STREAM: 4,
        PEER_ESCALATED_VIDEO_CALL: 5,
        PEER_ESCALATED_AUDIO_CALL: 6
    });
    e.exports = a
}
), null);
__d("multiway_RtcResponseStatusCode", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        OK: 200,
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        NOT_FOUND: 404,
        METHOD_NOT_ALLOWED: 406,
        CONFLICT: 409,
        CONDITIONAL_REQUEST_FAILED: 412,
        SERVER_INTERNAL_ERROR: 500,
        SERVICE_UNAVAILABLE: 503
    });
    e.exports = a
}
), null);
__d("multiway_RtcResponseSubCode", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        UNKNOWN: 1e3,
        EXCEEDED_MAX_ALLOWED_PARTICIPANTS: 1001,
        MEMBERSHIP_CHECK_FAIL: 1002,
        CONFERENCE_THROTTLED: 1003,
        ENDPOINT_THROTTLED: 1004,
        UNSUPPORTED_REQUEST_TYPE: 2e3,
        CLIENT_REQUEST_UNACCEPTABLE: 2001,
        CLIENT_RESPONSE_UNACCEPTABLE: 2002,
        RING_RESPONSE_BODY_NOT_SET: 2004,
        SERVER_MEDIA_UPDATE_RESPONSE_BODY_NOT_SET: 2005,
        INVALID_SDP: 2006,
        INVALID_CONFERENCE_NAME: 2007,
        SERVER_INFO_CONFERENCE_NAME_MISMATCH: 2008,
        INVALID_USER_ID: 2009,
        INCORRECT_VERSION_RANGE: 2010,
        SENDER_ID_MISMATCH: 2011,
        RECIPIENT_NOT_SPECIFIED: 2012,
        FIELD_NOT_ALLOWED: 2013,
        USERS_NOT_SPECIFIED: 2015,
        REQUEST_UNACCEPTABLE_FOR_ENDPOINT_STATE: 2016,
        INVALID_CALL_ID: 2017,
        SESSION_DESCRIPTION_ID_MISMATCH: 2018,
        EMPTY_CLIENT_MEDIA_UPDATES: 2019,
        INVALID_SERVER_INFO_DATA: 2020,
        INCORRECT_STATE_VERSION: 2021,
        MISMATCHED_STATE_FOR_VERSION: 2022,
        INVALID_STATE_VERSION: 2023,
        NO_RESOLVER_FOUND: 2024,
        MISSING_APPROVERLIST: 2025,
        FULL_SDP_REQUIRED_IN_APPROVED_STATE: 2026,
        INVALID_BROADCAST_ID: 2027,
        INVALID_ENDPOINT_CONFIG: 2028,
        MISSING_BODY_ENDPOINT: 2101,
        MISSING_BODY_HEADER: 2102,
        MISSING_BODY_BODY: 2103,
        MISSING_BODY_PARAMS: 2104,
        MISSING_BODY_REMOVE_PARTICIPANTS_REQUEST: 2105,
        MISSING_BODY_DATA_MESSAGE_REQUEST: 2106,
        MISSING_BODY_CLIENT_MEDIA_UPDATE_REQUEST: 2107,
        MISSING_BODY_ADD_PARTICIPANTS_REQUEST: 2108,
        MISSING_BODY_SUBSCRIPTION_REQUEST: 2110,
        MISSING_BODY_JOIN_REQUEST: 2111,
        MISSING_BODY_HANGUP_REQUEST: 2112,
        MISSING_BODY_ICE_CANDIDATE_REQUEST: 2113,
        MISSING_BODY_P2P_MESSAGE_REQUEST: 2114,
        MISSING_BODY_UPDATE_REQUEST: 2115,
        MISSING_BODY_CLIENT_EVENT_REQUEST: 2116,
        MISSING_BODY_CONNECT_REQUEST: 2117,
        MISSING_BODY_UNSUBSCRIBE_REQUEST: 2118,
        MISSING_BODY_APPROVAL_REQUEST: 2119,
        MISSING_BODY_GENERIC: 2199,
        REQUESTOR_NOT_MEMBER_CONFERENCE: 3002,
        NOT_BROADCAST_OWNER: 3003,
        GUEST_NOT_INVITED: 3004,
        GUEST_DISCONNECTED: 3005,
        GUEST_INVITATION_EXPIRED: 3006,
        SHOULD_USE_NEW_SIGNALING_PATH: 3007,
        PARTICIPANT_IN_PENDING_APPROVAL_STATE: 3008,
        BROADCAST_ALREADY_STOPPED: 4002,
        FAILED_TO_GENERATE_SDP_ANSWER: 4003,
        FAILED_GENERATE_SESSION_DESCRIPTION: 4004,
        SDP_SESSION_ID_MISMATCH: 4005,
        MEDIA_ENDPOINT_GONE: 4007,
        MEDIA_ENDPOINT_ALREADY_EXISTS: 4008,
        MEDIA_ENDPOINT_EXISTS_DIFFERENT_SESSION_ID: 4009,
        LEGACY_MESSENGER_SENDER_UNSET: 4010,
        FAILED_TO_SET_TRANSPORT_INFO: 4011,
        NON_PRIMARY_MULTIWAY_SERVER: 4012,
        FAILED_TO_GET_REMOTE_DESCRIPTION: 4013,
        LOCAL_DESCRIPTION_NOT_SET: 4014,
        INVALID_SDP_TYPE: 4015,
        CLIENT_MEDIA_UPDATE_WITHOUT_REMOTE_SDP_INFO: 4016,
        SDP_UNSET_ON_P2P_ANSWER: 4017,
        MISSING_ICE_CANDIDATE_PAYLOAD: 4018,
        P2P_PROTOCOL_UNSET: 4019,
        CREATE_ACK_FOR_INVALID_MESSAGE_TYPE: 4020,
        LEGACY_CLIENT_CANNOT_JOIN_SFU_MODE: 4021,
        CONNECT_UNSUPPORTED_IN_SFU_MODE: 4022,
        CONNECT_UNSUPPORTED_FOR_JOINED_ENDPOINTS: 4023,
        RESOLVE_STATE_API_ERROR: 4024,
        EXTERNAL_RESOLUTION_ERROR: 4025,
        INTERNAL_RESOLUTION_ERROR: 4026,
        RESOLUTION_DISABLED: 4027,
        BROADCAST_ID_MISSING: 4028,
        SDP_UNSET_ON_P2P_OFFER: 4029,
        CONFERENCE_NOT_FOUND: 5001,
        CONFERENCE_IS_TERMINATING: 5002,
        CONFERENCE_IS_TERMINATED: 5003,
        CONFERENCE_NAME_EMPTY: 5004,
        NONCE_EMPTY: 5005,
        NONCE_MISMATCH: 5006,
        CONFERENCE_HAS_GONE: 5007,
        PARTICIPANT_HAS_GONE: 5008,
        MEDIA_SERVER_NOT_FOUND: 5009,
        MEDIA_CODECS_UNSUPPORTED_BY_CONFERENCE: 6001,
        CONFERENCE_INCAPABLE_RENEGOTIATION: 6002,
        REJECTING_CMU_WHEN_SMU_PENDING: 6003,
        PARTICIPANT_NOT_SUBSCRIBED_TO_TOPIC: 6004,
        PARTICIPANT_ALREADY_IN_WAITING_ROOM: 6005,
        PARTICIPANT_NOT_IN_PENDING_APPROVAL: 6006,
        USER_NOT_APPROVER_FOR_TARGET_USER: 6007,
        OK: 9e3
    });
    e.exports = a
}
), null);
__d("ZenonMWMessageTypes", ["$InternalEnum", "multiway_ApprovalStatus", "multiway_Capability", "fbwebrtc_ClientStack", "multiway_DeviceStatus", "multiway_DismissReason", "multiway_EndpointServiceType", "multiway_HangupReason", "multiway_MediaPauseStatus", "multiway_ParticipantCallState", "multiway_RingType", "multiway_RtcResponseStatusCode", "multiway_RtcResponseSubCode", "multiway_MessageType", "multiway_VideoQuality", "multiway_ClientEventType"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("$InternalEnum")({
        DEFAULT_AUDIO: 0,
        DEFAULT_VIDEO: 1,
        SCREEN_AUDIO: 2,
        SCREEN_VIDEO: 3
    });
    e.exports = {
        ZenonMWApprovalStatus: b("multiway_ApprovalStatus"),
        ZenonMWCapability: b("multiway_Capability"),
        ZenonMWClientEventType: b("multiway_ClientEventType"),
        ZenonMWClientStack: b("fbwebrtc_ClientStack"),
        ZenonMWDeviceStatus: b("multiway_DeviceStatus"),
        ZenonMWDismissReason: b("multiway_DismissReason"),
        ZenonMWEndpointServiceType: b("multiway_EndpointServiceType"),
        ZenonMWHangupReason: b("multiway_HangupReason"),
        ZenonMWMediaPauseStatus: b("multiway_MediaPauseStatus"),
        ZenonMWParticipantCallState: b("multiway_ParticipantCallState"),
        ZenonMWResponseStatusCode: b("multiway_RtcResponseStatusCode"),
        ZenonMWResponseSubCode: b("multiway_RtcResponseSubCode"),
        ZenonMWRingType: b("multiway_RingType"),
        ZenonMWSignalingPayloadType: b("multiway_MessageType"),
        ZenonMWTrackLabel: a,
        ZenonMWVideoQuality: b("multiway_VideoQuality")
    }
}
), null);
__d("ZenonMediaError", ["$InternalEnum"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("$InternalEnum").Mirrored(["IceDisconnected", "IceFailure", "SetLocalSdpFailed", "SetRemoteSdpFailed", "UnknownError"]);
    f.ZenonMediaError = a
}
), null);
__d("ZenonDismissReason", ["FBLogger", "ZenonCallsModelTypes", "ZenonIncomingRingSDKTypes", "ZenonMediaError", "ZenonMWMessageTypes", "$InternalEnum"], (function(a, b, c, d, e, f) {
    "use strict";
    f.endCallToDismissReason = a;
    f.dismissToEndCallReason = c;
    f.dismissReasonToCancelReason = d;
    f.mediaErrorToDismissReason = e;
    f.mwDismissToDmissReason = h;
    var g = b("$InternalEnum")({
        IgnoreCall: 0,
        HangupCall: 1,
        InAnotherCall: 2,
        AcceptAfterHangUp: 3,
        NoAnswerTimeout: 4,
        IncomingTimeout: 5,
        OtherInstanceHandled: 6,
        SignalingMessageFailed: 7,
        ConnectionDropped: 8,
        ClientInterrupted: 9,
        WebRTCError: 10,
        ClientError: 11,
        NoPermission: 12,
        OtherNotCapable: 13,
        NoUIShown: 14,
        VersionUnsupported: 15,
        CallerNotVisible: 16,
        CarrierBlocked: 17,
        OtherCarrierBlocked: 18,
        ClientEncryptionError: 19,
        MicrophonePermissionDenied: 20,
        CameraPermissionDenied: 21,
        SessionMigrated: 22,
        RingMuted: 23,
        JoinApprovalDenied: 24,
        RejectedByCallee: 25,
        CallEndedByProduct: 26,
        CallEnded: 27,
        AnsweredOnAnotherDevice: 28,
        RejectedOnAnotherDevice: 29,
        CallCollision: 30,
        MaxAllowedParticipantsReached: 31,
        UnexpectedEndOfCall: 32
    });
    f.ZenonDismissReason = g;
    function a(a) {
        switch (a) {
        case b("ZenonCallsModelTypes").ZenonEndCallReason.CallEndAcceptAfterHangUp:
            return g.AcceptAfterHangUp;
        case b("ZenonCallsModelTypes").ZenonEndCallReason.CallerNotVisible:
            return g.CallerNotVisible;
        case b("ZenonCallsModelTypes").ZenonEndCallReason.CarrierBlocked:
            return g.CarrierBlocked;
        case b("ZenonCallsModelTypes").ZenonEndCallReason.ClientEncryptionError:
            return g.ClientEncryptionError;
        case b("ZenonCallsModelTypes").ZenonEndCallReason.ClientError:
            return g.ClientError;
        case b("ZenonCallsModelTypes").ZenonEndCallReason.ClientInterrupted:
            return g.ClientInterrupted;
        case b("ZenonCallsModelTypes").ZenonEndCallReason.ConnectionDropped:
            return g.ConnectionDropped;
        case b("ZenonCallsModelTypes").ZenonEndCallReason.HangupCall:
            return g.HangupCall;
        case b("ZenonCallsModelTypes").ZenonEndCallReason.IgnoreCall:
            return g.IgnoreCall;
        case b("ZenonCallsModelTypes").ZenonEndCallReason.InAnotherCall:
            return g.InAnotherCall;
        case b("ZenonCallsModelTypes").ZenonEndCallReason.InactiveTimeout:
            return g.CallEnded;
        case b("ZenonCallsModelTypes").ZenonEndCallReason.IncomingTimeout:
            return g.IncomingTimeout;
        case b("ZenonCallsModelTypes").ZenonEndCallReason.MaxAllowedParticipantsReached:
            return g.MaxAllowedParticipantsReached;
        case b("ZenonCallsModelTypes").ZenonEndCallReason.NoAnswerTimeout:
            return g.NoAnswerTimeout;
        case b("ZenonCallsModelTypes").ZenonEndCallReason.NoPermission:
            return g.NoPermission;
        case b("ZenonCallsModelTypes").ZenonEndCallReason.NoUIShown:
            return g.NoUIShown;
        case b("ZenonCallsModelTypes").ZenonEndCallReason.OtherCarrierBlocked:
            return g.OtherCarrierBlocked;
        case b("ZenonCallsModelTypes").ZenonEndCallReason.OtherInstanceHandled:
            return g.OtherInstanceHandled;
        case b("ZenonCallsModelTypes").ZenonEndCallReason.OtherNotCapable:
            return g.OtherNotCapable;
        case b("ZenonCallsModelTypes").ZenonEndCallReason.SignalingMessageFailed:
            return g.SignalingMessageFailed;
        case b("ZenonCallsModelTypes").ZenonEndCallReason.UnexpectedEndOfCall:
            return g.UnexpectedEndOfCall;
        case b("ZenonCallsModelTypes").ZenonEndCallReason.Unknown:
            return g.CallEnded;
        case b("ZenonCallsModelTypes").ZenonEndCallReason.VersionUnsupported:
            return g.VersionUnsupported;
        case b("ZenonCallsModelTypes").ZenonEndCallReason.WebRTCError:
            return g.WebRTCError;
        case b("ZenonCallsModelTypes").ZenonEndCallReason.MicrophonePermissionDenied:
            return g.MicrophonePermissionDenied;
        case b("ZenonCallsModelTypes").ZenonEndCallReason.CameraPermissionDenied:
            return g.CameraPermissionDenied;
        case b("ZenonCallsModelTypes").ZenonEndCallReason.SessionMigrated:
            return g.SessionMigrated;
        case b("ZenonCallsModelTypes").ZenonEndCallReason.RingMuted:
            return g.RingMuted
        }
    }
    function c(a) {
        switch (a) {
        case g.CallEnded:
        case g.CallEndedByProduct:
        case g.HangupCall:
            return b("ZenonCallsModelTypes").ZenonEndCallReason.HangupCall;
        case g.IgnoreCall:
        case g.JoinApprovalDenied:
        case g.RejectedByCallee:
            return b("ZenonCallsModelTypes").ZenonEndCallReason.IgnoreCall;
        case g.InAnotherCall:
            return b("ZenonCallsModelTypes").ZenonEndCallReason.InAnotherCall;
        case g.AcceptAfterHangUp:
            return b("ZenonCallsModelTypes").ZenonEndCallReason.CallEndAcceptAfterHangUp;
        case g.NoAnswerTimeout:
            return b("ZenonCallsModelTypes").ZenonEndCallReason.NoAnswerTimeout;
        case g.IncomingTimeout:
            return b("ZenonCallsModelTypes").ZenonEndCallReason.IncomingTimeout;
        case g.AnsweredOnAnotherDevice:
        case g.CallCollision:
        case g.RejectedOnAnotherDevice:
        case g.OtherInstanceHandled:
            return b("ZenonCallsModelTypes").ZenonEndCallReason.OtherInstanceHandled;
        case g.SignalingMessageFailed:
            return b("ZenonCallsModelTypes").ZenonEndCallReason.SignalingMessageFailed;
        case g.ConnectionDropped:
            return b("ZenonCallsModelTypes").ZenonEndCallReason.ConnectionDropped;
        case g.ClientInterrupted:
            return b("ZenonCallsModelTypes").ZenonEndCallReason.ClientInterrupted;
        case g.WebRTCError:
            return b("ZenonCallsModelTypes").ZenonEndCallReason.WebRTCError;
        case g.ClientError:
            return b("ZenonCallsModelTypes").ZenonEndCallReason.ClientError;
        case g.NoPermission:
            return b("ZenonCallsModelTypes").ZenonEndCallReason.NoPermission;
        case g.OtherNotCapable:
            return b("ZenonCallsModelTypes").ZenonEndCallReason.OtherNotCapable;
        case g.NoUIShown:
            return b("ZenonCallsModelTypes").ZenonEndCallReason.NoUIShown;
        case g.VersionUnsupported:
            return b("ZenonCallsModelTypes").ZenonEndCallReason.VersionUnsupported;
        case g.CallerNotVisible:
            return b("ZenonCallsModelTypes").ZenonEndCallReason.CallerNotVisible;
        case g.CarrierBlocked:
            return b("ZenonCallsModelTypes").ZenonEndCallReason.CarrierBlocked;
        case g.OtherCarrierBlocked:
            return b("ZenonCallsModelTypes").ZenonEndCallReason.OtherCarrierBlocked;
        case g.ClientEncryptionError:
            return b("ZenonCallsModelTypes").ZenonEndCallReason.ClientEncryptionError;
        case g.UnexpectedEndOfCall:
            return b("ZenonCallsModelTypes").ZenonEndCallReason.UnexpectedEndOfCall;
        case g.MaxAllowedParticipantsReached:
            return b("ZenonCallsModelTypes").ZenonEndCallReason.MaxAllowedParticipantsReached;
        case g.MicrophonePermissionDenied:
            return b("ZenonCallsModelTypes").ZenonEndCallReason.MicrophonePermissionDenied;
        case g.CameraPermissionDenied:
            return b("ZenonCallsModelTypes").ZenonEndCallReason.CameraPermissionDenied;
        case g.SessionMigrated:
            return b("ZenonCallsModelTypes").ZenonEndCallReason.SessionMigrated;
        case g.RingMuted:
            return b("ZenonCallsModelTypes").ZenonEndCallReason.RingMuted
        }
        b("FBLogger")("rtc_www").mustfix("Unknown dismiss reason: %s", a);
        return b("ZenonCallsModelTypes").ZenonEndCallReason.Unknown
    }
    function d(a) {
        switch (a) {
        case g.OtherInstanceHandled:
        case g.AnsweredOnAnotherDevice:
        case g.RejectedOnAnotherDevice:
            return b("ZenonIncomingRingSDKTypes").ZenonCancelReason.OtherDismiss;
        default:
            return b("ZenonIncomingRingSDKTypes").ZenonCancelReason.Hangup
        }
    }
    function e(a) {
        switch (a) {
        case b("ZenonMediaError").ZenonMediaError.IceDisconnected:
            return g.ConnectionDropped;
        case b("ZenonMediaError").ZenonMediaError.IceFailure:
        case b("ZenonMediaError").ZenonMediaError.SetLocalSdpFailed:
        case b("ZenonMediaError").ZenonMediaError.SetRemoteSdpFailed:
            return g.WebRTCError;
        case b("ZenonMediaError").ZenonMediaError.UnknownError:
            return g.ClientError
        }
    }
    function h(a) {
        return i[a]
    }
    var i = Object.freeze((a = {},
    a[(c = b("ZenonMWMessageTypes")).ZenonMWDismissReason.CALL_ENDED] = g.CallEnded,
    a[c.ZenonMWDismissReason.ANSWERED_ON_ANOTHER_DEVICE] = g.AnsweredOnAnotherDevice,
    a[c.ZenonMWDismissReason.IN_ANOTHER_CALL] = g.InAnotherCall,
    a[c.ZenonMWDismissReason.CONNECTION_DROPPED] = g.ConnectionDropped,
    a[c.ZenonMWDismissReason.REJECTED_ON_ANOTHER_DEVICE] = g.RejectedOnAnotherDevice,
    a[c.ZenonMWDismissReason.REJECTED_BY_CALLEE] = g.RejectedByCallee,
    a[c.ZenonMWDismissReason.CALL_ENDED_BY_PRODUCT] = g.CallEndedByProduct,
    a[c.ZenonMWDismissReason.INTERNAL_ERROR] = g.ClientError,
    a[c.ZenonMWDismissReason.REMOVED_BY_PARTICIPANT] = g.HangupCall,
    a))
}
), null);
__d("ZenonVCSTypes", ["$InternalEnum"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("$InternalEnum")({
        DIRECT_VIDEO: "direct_video",
        ESCALATED: "escalated",
        ESCALATION_DECLINED: "escalation_declined",
        MWS: "mws",
        VOIP: "voip"
    });
    f.ZenonCallType = a;
    c = b("$InternalEnum")({
        LL_BASIC: 1,
        LL_DEBUG: 2,
        LL_INFO: 4,
        LL_NIL: 0,
        LL_VERBOSE: 5,
        LL_WARNING: 3
    });
    f.ZenonUploadLogLevel = c
}
), null);
__d("ZenonCallSummary", ["regeneratorRuntime", "ChannelClientID", "FBRTCExperiment", "FBRTCLocalUploadLogLevel", "SiteData", "WebPerformanceDeviceInfo", "ZenonCallSummaryStore", "ZenonCallSummaryUploader", "ZenonDeviceInfoHelper", "ZenonDeviceInfoUtils", "ZenonDismissReason", "ZenonVCSTypes", "gkx", "performanceNow", "uuid"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = {
        PRESSED_ANSWER: "p_a"
    };
    function i(a) {
        var c = b("FBRTCExperiment").gen("rtweb_zenon_platform");
        c = c.getBool("use_zenon_platform", !1, !1);
        var d = b("FBRTCExperiment").gen("rpweb_zenon_platform_workplace");
        d = d.getBool("use_zenon_platform_wp", !1, !1);
        c = c || d;
        if ((a === "mw" || a === "mw++") && c)
            return "ZenonPlatform";
        d = b("gkx")("1341692");
        a = b("gkx")("1680228");
        return !d && !a ? "ZenonScotch" : "Old Codebase"
    }
    var j = 19
      , k = 24
      , l = {
        CALL_CONNECTED: "connected",
        CALL_ENDED: "ended",
        CALL_STARTED: "started",
        NETWORK_READY: "network_ready",
        PROC_JOIN_RESPONSE: "p_jresp",
        RECV_ANSWER: "r_a",
        RECV_ANSWER_ACK: "r_aack",
        RECV_JOIN_RESPONSE: "r_jresp",
        RECV_OFFER: "r_o",
        RECV_OFFER_ACK: "r_oack",
        RECV_OK: "r_ok",
        RECV_PRANSWER: "r_pr",
        RECV_RETRIED_ANSWER: "r_a2",
        RECV_RETRIED_ANSWER_ACK: "r_aack2",
        RECV_RETRIED_OFFER: "r_o2",
        RECV_RETRIED_OFFER_ACK: "r_oack2",
        RECV_RING_REQUEST: "r_rreq",
        SENT_ANSWER: "s_a",
        SENT_ANSWER_ACK: "s_aack",
        SENT_JOIN_REQUEST: "s_jreq",
        SENT_OFFER: "s_o",
        SENT_OFFER_ACK: "s_oack",
        SENT_OK: "s_ok",
        SENT_PRANSWER: "s_pr",
        SENT_RETRIED_ANSWER: "s_a2",
        SENT_RETRIED_ANSWER_ACK: "s_aack2",
        SENT_RETRIED_OFFER: "s_o2",
        SENT_RETRIED_OFFER_ACK: "s_oack2",
        SENT_RING_RESPONSE: "s_rresp"
    }
      , m = {
        BATTERY_END: "battery_end",
        BATTERY_START: "battery_start",
        DESKTOP_DEVICE_CLASS: "desktop_device_class",
        DEVICE_INFO: "device_info",
        INITIATED_BY_APP_ID: "initiated_by_app_id",
        INITIATED_BY_PAGE_ID: "initiated_by_page_id",
        MAX_CONCURRENT_CONNECTED_PARTICIPANTS: "max_concurrent_connected_participants",
        PEER_IS_MOBILE: "peer_is_mobile",
        RATING: "rating5",
        RATING_SHOWN: "rating_shown",
        SURVEY_CHOICE: "survey_choice",
        SURVEY_DETAILS: "survey_details",
        SURVEY_SHOWN: "survey_shown",
        YEAR_CLASS: "year_class"
    };
    a = function() {
        function a(a) {
            var c = a.callID
              , d = a.callTrigger
              , e = a.isCaller
              , f = a.isVideo
              , h = a.localCallID
              , j = a.peerID
              , l = a.protocol;
            a = a.uploadLogLevel;
            this.$25 = 0;
            this.$26 = 0;
            this.$31 = {};
            this.$32 = {};
            this.$33 = {};
            this.$34 = {};
            this.$35 = !1;
            this.$37 = 0;
            this.$38 = !1;
            this.$39 = {};
            this.$40 = {};
            this.$41 = {};
            this.$42 = {};
            this.$48 = {
                CoreAudioMetrics: {},
                DebugAudioMetrics: {
                    NetworkReceive: {}
                },
                extraInfo: {},
                receiver: {},
                sender: {},
                video: {}
            };
            this.$50 = {};
            this.$51 = {};
            this.$52 = "sfu";
            this.$54 = {};
            this.$1 = j;
            this.$2 = c;
            this.localCallID = (j = h) != null ? j : b("uuid")();
            this.$3 = b("ChannelClientID").getID();
            this.$5 = e;
            this.$4 = k;
            this.$8 = i(l);
            this.$6 = (c = a) != null ? c : b("FBRTCLocalUploadLogLevel").getLocalUploadLogLevel();
            this.$7 = d;
            this.$28 = new Date().valueOf();
            this.$9 = l !== "p2p" ? "mws" : l;
            this.$21 = null;
            this.$20 = null;
            this.$36 = this.$1 === "MW_PEER_ID";
            this.$16 = b("SiteData").push_phase;
            this.$9 === "p2p" ? this.setCallType(f ? b("ZenonVCSTypes").ZenonCallType.DIRECT_VIDEO : b("ZenonVCSTypes").ZenonCallType.VOIP) : this.setCallType(b("ZenonVCSTypes").ZenonCallType.MWS);
            this.$30 = (g || (g = b("performanceNow")))();
            this.$29 = 0;
            this.$27 = this.$30;
            this.$53 = 0;
            this.$54[m.DEVICE_INFO] = b("ZenonDeviceInfoUtils").getDeviceSoftwareInfo();
            this.updateBatteryStart();
            this.$56();
            this.$57()
        }
        a.$58 = function(a) {
            try {
                return JSON.parse(a)
            } catch (a) {
                return null
            }
        }
        ;
        a.fromJsonString = function(c) {
            var d;
            c = this.$58(c);
            if (c == null)
                return null;
            if (c.version < j)
                return null;
            if (!Object.prototype.hasOwnProperty.call(c, "peerID") || !Object.prototype.hasOwnProperty.call(c, "callID") || !Object.prototype.hasOwnProperty.call(c, "isCaller") || !Object.prototype.hasOwnProperty.call(c, "startTime") || !Object.prototype.hasOwnProperty.call(c, "trigger") || !Object.prototype.hasOwnProperty.call(c, "signalingTime") || !Object.prototype.hasOwnProperty.call(c, "lastUpdatedTime") || !Object.prototype.hasOwnProperty.call(c, "lastSerializedTime"))
                return null;
            var e = c.activeConn === "p2p" ? c.activeConn : "mw";
            e = new a({
                callID: c.callID,
                isCaller: c.isCaller,
                isVideo: c.callType === b("ZenonVCSTypes").ZenonCallType.DIRECT_VIDEO,
                localCallID: c.localCallID,
                peerID: c.peerID,
                protocol: e
            });
            e.$3 = c.deviceID;
            e.$4 = c.version;
            e.$6 = c.uploadLogLevel;
            e.$28 = c.startTime;
            e.$7 = c.trigger;
            e.$52 = c.mediaMode;
            e.$36 = c.isUsingMultiway;
            e.$35 = c.hasOfferInRingRequest;
            e.$37 = (d = c.renegotiationCmuRequestSent) != null ? d : 0;
            e.$8 = c.clientVersion;
            e.$31 = c.signalingTime;
            e.$17 = c.endCallReason;
            e.$18 = c.endCallSubreason;
            e.$19 = c.isRemoteEnded;
            e.$25 = c.lastUpdatedTime;
            e.$26 = c.lastSerializedTime;
            e.$11 = c.joinWithSID;
            e.$21 = (d = c.endIsConnected) != null ? d : null;
            e.$20 = (d = c.pcIsConnected) != null ? d : null;
            e.$38 = c.hasAnswerInJoinResponse;
            c.conferenceName != null && (e.$10 = c.conferenceName);
            c.escP2PCallID != null && (e.$12 = c.escP2PCallID);
            c.activeConn != null && (e.$9 = c.activeConn);
            c.serverInfoData != null && (e.$14 = c.serverInfoData);
            c.localVideoDuration != null && (e.$43 = c.localVideoDuration);
            c.remoteVideoDuration != null && (e.$44 = c.remoteVideoDuration);
            c.unsetOnRetrieve != null && (e.$24 = c.unsetOnRetrieve);
            c.openCount != null && (e.$53 = c.openCount);
            c.extraInfo && (e.$54 = c.extraInfo);
            c.gen0IceSentCount && (e.$39 = c.gen0IceSentCount);
            c.gen0IceReceivedCount && (e.$40 = c.gen0IceReceivedCount);
            c.iceConnections && (e.$50 = c.iceConnections);
            c.iceSentCount && (e.$41 = c.iceSentCount);
            c.iceReceivedCount && (e.$42 = c.iceReceivedCount);
            c.pcConnectionStates && (e.$51 = c.pcConnectionStates);
            c.accumulatedCallTime != null && (e.$29 = c.accumulatedCallTime);
            c.escStateTimes && (e.$32 = c.escStateTimes);
            c.applicationEventTime && (e.$33 = c.applicationEventTime);
            c.videoEscTimes && (e.$34 = c.videoEscTimes);
            c.mediaStats && (e.$48 = c.mediaStats);
            c.connectionType !== void 0 && (e.$22 = c.connectionType);
            c.deviceCharged != null && (e.$55 = c.deviceCharged);
            c.videoReceivedCodec !== null && (e.$45 = c.videoReceivedCodec);
            c.videoSentCodec !== null && (e.$46 = c.videoSentCodec);
            c.audioSentCodec !== null && (e.$47 = c.audioSentCodec);
            c.relayIP !== null && c.relayIP !== void 0 && (e.$23 = c.relayIP);
            c.startReach != null && (e.$49 = c.startReach);
            c.sdpFormat != null && (e.$15 = c.sdpFormat);
            return e
        }
        ;
        var c = a.prototype;
        c.toJsonString = function() {
            var a;
            this.$26 = new Date().valueOf();
            a = {
                accumulatedCallTime: this.$59(),
                activeConn: (a = this.$9) != null ? a : "p2p",
                applicationEventTime: this.$33,
                audioSentCodec: this.$47,
                callID: this.$2,
                callType: this.$13,
                clientVersion: this.$8,
                conferenceName: this.$10,
                connectionType: this.$22,
                deviceCharged: this.$55,
                deviceID: this.$3,
                endCallReason: this.$17,
                endCallSubreason: this.$18,
                endIsConnected: this.$21,
                escP2PCallID: this.$12,
                escStateTimes: this.$32,
                extraInfo: this.$54,
                gen0IceReceivedCount: this.$40,
                gen0IceSentCount: this.$39,
                hasAnswerInJoinResponse: this.$38,
                hasOfferInRingRequest: this.$35,
                iceConnections: this.$50,
                iceReceivedCount: this.$42,
                iceSentCount: this.$41,
                isCaller: this.$5,
                isRemoteEnded: this.$19,
                isUsingMultiway: this.$36,
                joinWithSID: this.$11,
                lastSerializedTime: this.$26,
                lastUpdatedTime: this.$25,
                localCallID: this.localCallID,
                localVideoDuration: this.$43,
                mediaMode: this.$52,
                mediaStats: this.$48,
                pcConnectionStates: this.$51,
                pcIsConnected: this.$20,
                peerID: this.$1,
                relayIP: this.$23,
                remoteVideoDuration: this.$44,
                renegotiationCmuRequestSent: this.$37,
                sdpFormat: this.$15,
                serverInfoData: this.$14,
                signalingTime: this.$31,
                startReach: this.$49,
                startTime: this.$28,
                trigger: this.$7,
                unsetOnRetrieve: this.$24,
                uploadLogLevel: this.$6,
                version: this.$4,
                videoEscTimes: this.$34,
                videoReceivedCodec: this.$45,
                videoSentCodec: this.$46
            };
            return JSON.stringify(a)
        }
        ;
        c.unsetEndCallFields = function() {
            this.$17 = null,
            this.$18 = null,
            this.$19 = null,
            delete this.$31[l.CALL_ENDED],
            this.$30 = 0,
            this.$24 = null
        }
        ;
        c.isNull = function() {
            return this.$1 === "0" && this.$2 === "0" && !this.$5 && this.$7 === "NULL_SUMMARY"
        }
        ;
        c.getExtraInfo = function() {
            return this.$54
        }
        ;
        c.getLastUpdatedTime = function() {
            return this.$25
        }
        ;
        c.getDeviceID = function() {
            return this.$3
        }
        ;
        c.setDeviceID = function(a) {
            this.$3 = a
        }
        ;
        c.getSdpFormat = function() {
            return this.$15
        }
        ;
        c.setSdpFormat = function(a) {
            this.$15 = a
        }
        ;
        c.getLoggingArgs = function() {
            var a;
            return {
                call_id: this.$2,
                conf_name: (a = this.$10) != null ? a : "",
                peer_id: isNaN(this.$1) ? null : this.$1,
                serv_info: (a = this.$14) != null ? a : "",
                web_device_id: this.$3
            }
        }
        ;
        c.getDeviceCharged = function() {
            return this.$55
        }
        ;
        c.setDeviceCharged = function(a) {
            this.$55 !== !0 && (this.$55 = a)
        }
        ;
        c.save = function(a) {
            a.storeCallSummary(this.$1, this.$2, this),
            this.$27 = (g || (g = b("performanceNow")))()
        }
        ;
        c.onCallAccepted = function(a) {
            this.$33[h.PRESSED_ANSWER] = this.$59(),
            this.$7 = a,
            this.$57()
        }
        ;
        c.onCallJoinRequest = function(a) {
            this.$35 = a,
            this.$36 = this.$1 === "MW_PEER_ID",
            this.$57()
        }
        ;
        c.onCallConnected = function(a) {
            this.$60(l.CALL_CONNECTED),
            this.$52 = a,
            this.$57()
        }
        ;
        c.onCallEscalated = function(a) {
            this.$52 === "p2p" && a === "sfu" ? this.$52 = "p2p_sfu_escalated" : this.$52 = a,
            this.$37 = this.$59(),
            this.$57()
        }
        ;
        c.onCallEnded = function(a, b, c, d) {
            this.$24 = c,
            this.$17 = a,
            this.$18 = d,
            this.$19 = b,
            this.$60(l.CALL_ENDED),
            this.$21 === null && (this.$21 = this.$20),
            this.$57()
        }
        ;
        c.setPCIsConnected = function(a) {
            this.$20 !== a && (this.$20 = a,
            this.$51[this.$59()] = a)
        }
        ;
        c.onInviteResponded = function() {
            var a = this.$9 === "p2p" ? l.SENT_OFFER_ACK : l.SENT_RING_RESPONSE;
            this.$60(a);
            this.$57()
        }
        ;
        c.onInviteReceived = function() {
            var a = this.$9 === "p2p" ? l.RECV_OFFER : l.RECV_RING_REQUEST;
            this.$60(a);
            this.$57()
        }
        ;
        c.onInviteSent = function() {
            this.$60(l.SENT_JOIN_REQUEST),
            this.$57()
        }
        ;
        c.onInviteResponseReceived = function() {
            this.$60(l.RECV_JOIN_RESPONSE),
            this.$57()
        }
        ;
        c.onInviteResponseProcessed = function() {
            this.$60(l.PROC_JOIN_RESPONSE),
            this.$57()
        }
        ;
        c.onMediaConnected = function() {
            this.$60(l.NETWORK_READY),
            this.$57()
        }
        ;
        c.setIsPeerMobile = function(a) {
            this.$54[m.PEER_IS_MOBILE] = a ? "1" : "0",
            this.$57()
        }
        ;
        c.setCallType = function(a) {
            this.$13 = a,
            this.$57()
        }
        ;
        c.setConferenceName = function(a) {
            this.$10 = a,
            this.$57()
        }
        ;
        c.setConnectionType = function(a) {
            this.$22 = a,
            this.$57()
        }
        ;
        c.setInitByPageID = function(a) {
            this.$54[m.INITIATED_BY_PAGE_ID] = a,
            this.$57()
        }
        ;
        c.setInitByAppID = function(a) {
            a != null && (this.$54[m.INITIATED_BY_APP_ID] = a,
            this.$57())
        }
        ;
        c.setJoinWithSID = function(a) {
            this.$11 = a,
            this.$57()
        }
        ;
        c.setMediaStats = function(a) {
            this.$48 = a;
            this.$39 && (this.$48.sender.ice_g0 = this.$39);
            this.$41 && (this.$48.sender.ice = this.$41);
            this.$40 && (this.$48.receiver.ice_g0 = this.$40);
            this.$42 && (this.$48.receiver.ice = this.$42);
            a = a.extraInfo;
            var b = a.localIceCandidate;
            a = a.remoteIceCandidate;
            if (b) {
                (this.$49 == null || this.$49 === "") && (this.$49 = b.networkType);
                if (a) {
                    var c = b.candidateType;
                    b = b.protocol;
                    var d = a.candidateType;
                    a = a.protocol;
                    if (c != null && b != null && d != null && a != null) {
                        c = "l:" + c + "-" + b + ";r:" + d + "-" + a;
                        this.$50[c] == null && (this.$50[c] = this.$59())
                    }
                }
            }
            this.updateBatteryEnd();
            this.$57()
        }
        ;
        c.setServerInfoData = function(a) {
            this.$14 = a,
            this.$57()
        }
        ;
        c.setRating = function(a) {
            this.$54[m.RATING] = a,
            this.$57()
        }
        ;
        c.setFeedback = function(a) {
            this.$54[m.SURVEY_DETAILS] = a,
            this.$57()
        }
        ;
        c.setSurveyChoice = function(a) {
            this.$54[m.SURVEY_CHOICE] = a,
            this.$57()
        }
        ;
        c.setMaxConnectedParticipants = function(a) {
            this.$54[m.MAX_CONCURRENT_CONNECTED_PARTICIPANTS] = a,
            this.$57()
        }
        ;
        c.setHasAnswerInJoinResponse = function(a) {
            this.$38 = a,
            this.$57()
        }
        ;
        c.$60 = function(a) {
            if (this.$31[a] != null)
                return;
            this.$31[a] = this.$59()
        }
        ;
        c.$59 = function() {
            var a = (g || (g = b("performanceNow")))() - this.$30;
            return Math.floor(this.$29 + a)
        }
        ;
        c.$57 = function() {
            this.$25 = new Date().valueOf()
        }
        ;
        c.$56 = function() {
            var a = b("WebPerformanceDeviceInfo").getMobileYearClass();
            a != null && a > 0 ? this.$54[m.YEAR_CLASS] = a : this.$54[m.DESKTOP_DEVICE_CLASS] = b("WebPerformanceDeviceInfo").getDeviceLevel()
        }
        ;
        c.updateBatteryStart = function() {
            var a, c, d;
            return b("regeneratorRuntime").async(function(e) {
                while (1)
                    switch (e.prev = e.next) {
                    case 0:
                        e.next = 2;
                        return b("regeneratorRuntime").awrap(b("ZenonDeviceInfoHelper").getBatteryStats());
                    case 2:
                        a = e.sent,
                        c = a.level,
                        d = a.placeholder,
                        d !== !0 && (this.$54[m.BATTERY_START] = c);
                    case 6:
                    case "end":
                        return e.stop()
                    }
            }, null, this)
        }
        ;
        c.updateBatteryEnd = function() {
            var a, c, d, e;
            return b("regeneratorRuntime").async(function(f) {
                while (1)
                    switch (f.prev = f.next) {
                    case 0:
                        f.next = 2;
                        return b("regeneratorRuntime").awrap(b("ZenonDeviceInfoHelper").getBatteryStats());
                    case 2:
                        a = f.sent,
                        c = a.level,
                        d = a.placeholder,
                        e = a.wasCharged,
                        d !== !0 && (this.$54[m.BATTERY_END] = c,
                        this.setDeviceCharged(e));
                    case 7:
                    case "end":
                        return f.stop()
                    }
            }, null, this)
        }
        ;
        c.toString = function() {
            var a = {
                core_metrics: this.$61(),
                time_series: null
            };
            return JSON.stringify(a)
        }
        ;
        c.$61 = function() {
            return {
                CoreAudioMetrics: this.$48.CoreAudioMetrics,
                DebugAudioMetrics: this.$48.DebugAudioMetrics,
                active_conn: this.$9,
                answer_in_join_resp: this.$38,
                app_event_times: this.$33,
                call_type: this.$13,
                caller: this.$5,
                client_version: this.$8,
                conf_name: this.$10,
                conn: this.$62(),
                device_charged: this.$55,
                end: this.$63(),
                esc_p2p_call_id: this.$12,
                esc_state_times: this.$32,
                is_using_multiway: this.$36,
                join_with_sid: this.$11,
                log_level: this.$64(b("ZenonVCSTypes").ZenonUploadLogLevel.cast(this.$6)),
                offer_in_ring_req: this.$35,
                open_count: this.$53,
                peer_id: isNaN(this.$1) ? null : this.$1,
                perf: this.$65(),
                push_phase: this.$16,
                receiver: this.$48.receiver,
                sdp_reneg_times: [{
                    crs: this.$37
                }],
                sender: this.$48.sender,
                serv_info: this.$14,
                signaling: this.$66(),
                ver: this.$4,
                vid_esc_times: this.$34,
                video: this.$48.video
            }
        }
        ;
        c.$64 = function(a) {
            if (a == null)
                return "";
            switch (a) {
            case b("ZenonVCSTypes").ZenonUploadLogLevel.LL_BASIC:
                return "basic";
            case b("ZenonVCSTypes").ZenonUploadLogLevel.LL_DEBUG:
                return "debug";
            case b("ZenonVCSTypes").ZenonUploadLogLevel.LL_WARNING:
                return "warning";
            case b("ZenonVCSTypes").ZenonUploadLogLevel.LL_INFO:
                return "info";
            case b("ZenonVCSTypes").ZenonUploadLogLevel.LL_VERBOSE:
                return "verbose";
            default:
                return ""
            }
        }
        ;
        c.$62 = function() {
            var a = {}
              , b = this.$48.sender
              , c = b.avgrtt
              , d = b.maxrtt;
            b = b.minrtt;
            c != null && (a.avgrtt = c,
            a.maxrtt = d,
            a.minrtt = b);
            this.$23 != null && (a.relay_ip = this.$23);
            this.$49 != null && this.$49 !== "" && (a.start_reach = this.$49);
            var e = {};
            Object.entries(this.$50).forEach(function(a) {
                var b = a[0];
                a = a[1];
                typeof a === "number" && (e[a] = b)
            });
            a.types = e;
            a.ctd = this.$51;
            return a
        }
        ;
        c.$66 = function() {
            var a = {
                start_time: this.$28,
                time_from_start: this.$31
            };
            this.$7 != null && (a.trigger = this.$7);
            var b = this.$67();
            b > 0 && (a.duration = b);
            return a
        }
        ;
        c.$67 = function(a) {
            var b = this.$31[l.CALL_CONNECTED] || this.$31[l.NETWORK_READY];
            if (!b)
                return 0;
            a = this.$31[l.CALL_ENDED] || !(a == null ? void 0 : a.assumeOngoing) && this.$29 || this.$59();
            return Math.max(0, a - b)
        }
        ;
        c.$63 = function() {
            var a, c = {};
            this.$17 != null && (c.end_call_reason_string = b("ZenonDismissReason").dismissToEndCallReason(this.$17),
            this.$18 !== null && (c.end_call_subreason_string = this.$18),
            c.remote_ended = this.$19,
            c.end_ctd = this.$21);
            this.$22 != null && (c.conn_type = this.$22);
            a = (a = this.$48.extraInfo) != null ? a : {};
            a = a.localIceCandidate;
            a && a.networkType !== "" && (c.reach = a.networkType);
            return c
        }
        ;
        c.$65 = function() {
            var a, b, c = this.$67();
            if (c <= 0)
                return;
            a = (a = (a = this.$48.video.receiver) == null ? void 0 : a.tdt) != null ? a : 0;
            b = (b = (b = this.$48.video.sender) == null ? void 0 : b.tet) != null ? b : 0;
            a = a + b;
            b = Math.round(100 * (a / c));
            return {
                cpu: {
                    proc: {
                        avg: b
                    }
                }
            }
        }
        ;
        c.uploadLog = function() {
            b("ZenonCallSummaryUploader").logCallSummary({
                callID: this.$2,
                callSummary: this,
                peerID: this.$1
            })
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("ZenonGenericCallSummaryStore", ["CacheStorage", "areEqual", "setTimeout"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = 2e3, i = 3;
    a = function() {
        function a(a, c, d) {
            this.$1 = a,
            this.$2 = new (b("CacheStorage"))(c,d)
        }
        var c = a.prototype;
        c.getCallSummaries = function() {
            return this.$2.get(this.$1) || {}
        }
        ;
        c.removeCallSummaries = function(a) {
            this.mutateCallSummaries(function(b) {
                a.forEach(function(a) {
                    var c = a.callID;
                    a = a.peerID;
                    b[a] && b[a][c] && (delete b[a][c],
                    Object.entries(b[a]).length === 0 && delete b[a])
                });
                return b
            })
        }
        ;
        c.mutateCallSummaries = function(a, c, d) {
            var e = this;
            c === void 0 && (c = i);
            d === void 0 && (d = !1);
            var f = this.getCallSummaries()
              , j = this.getCallSummaries();
            f = a(f);
            var k = this.getCallSummaries();
            (g || (g = b("areEqual")))(j, k) ? this.$2.set(this.$1, f) : c > 0 && (d ? b("setTimeout")(function() {
                e.mutateCallSummaries(a, c - 1, !0)
            }, h) : this.mutateCallSummaries(a, c - 1, !0))
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("ZenonCallSummaryStore", ["FBLogger", "ZenonCallSummary", "ZenonGenericCallSummaryStore"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = "localstorage"
      , h = "RTC_CALL_SUMMARY_"
      , i = "summary";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.call(this, i, g, h) || this
        }
        var d = c.prototype;
        d.retrieveCallSummary = function(a, c) {
            var d = this.getCallSummaries();
            d = d[a] ? d[a][c] : null;
            if (d)
                return b("ZenonCallSummary").fromJsonString(d.__d);
            else
                return null
        }
        ;
        d.storeCallSummary = function(a, c, d) {
            if (d.isNull()) {
                b("FBLogger")("rtweb").mustfix("Storing invalid ZenonCallSummary!");
                return
            }
            this.mutateCallSummaries(function(b) {
                b[a] || (b[a] = {});
                b[a][c] = {
                    __d: d.toJsonString(),
                    __t: Date.now(),
                    __z: !0
                };
                return b
            })
        }
        ;
        return c
    }(b("ZenonGenericCallSummaryStore"));
    c = new a();
    f.ZenonCallSummaryStoreInstance = c
}
), null);
__d("ZenonCallSummaryUploader", ["MarauderLogger", "ZenonCallSummary", "ZenonCallSummaryStore"], (function(a, b, c, d, e, f) {
    "use strict";
    f.getLoggableSummaries = k;
    f.logCallSummaries = a;
    f.logCallSummary = c;
    var g = 3 * 60 * 1e3
      , h = "rtc_client_call_summary"
      , i = "webrtc";
    function j(a) {
        var c = a.callID
          , d = a.callSummary;
        a = a.peerID;
        a = isNaN(a) ? null : a;
        c = babelHelpers["extends"]({
            call_id: c,
            channel_session_id: d.getDeviceID(),
            content: d.toString(),
            local_call_id: d.localCallID,
            peer_id: a,
            tag: "endcallstats"
        }, d.getExtraInfo());
        b("MarauderLogger").log(h, i, c, void 0, void 0, void 0, void 0, "vital")
    }
    function k() {
        var a = b("ZenonCallSummaryStore").ZenonCallSummaryStoreInstance.getCallSummaries()
          , c = [];
        for (var d in a)
            for (var e in a[d]) {
                var f = a[d][e];
                if (f.__z) {
                    var h = f.__t;
                    if (Date.now() - h > g) {
                        h = b("ZenonCallSummary").fromJsonString(f.__d);
                        h && c.push({
                            callID: e,
                            callSummary: h,
                            peerID: d
                        })
                    }
                }
            }
        return c
    }
    function a() {
        var a = k()
          , c = [];
        a.forEach(function(a) {
            var b = a.callID
              , d = a.callSummary;
            a = a.peerID;
            j({
                callID: b,
                callSummary: d,
                peerID: a
            });
            c.push({
                callID: b,
                peerID: a
            })
        });
        b("ZenonCallSummaryStore").ZenonCallSummaryStoreInstance.removeCallSummaries(c)
    }
    function c(a) {
        var c = a.callID
          , d = a.callSummary;
        a = a.peerID;
        j({
            callID: c,
            callSummary: d,
            peerID: a
        });
        b("ZenonCallSummaryStore").ZenonCallSummaryStoreInstance.removeCallSummaries([{
            callID: c,
            peerID: a
        }])
    }
}
), null);
__d("FBRTCCallSummaryUploader", ["Banzai", "FBRTCCallSummary", "FBRTCCallSummaryStore", "ZenonCallSummaryUploader", "requireCond", "cr:1645710"], (function(a, b, c, d, e, f) {
    f.init = a;
    function a() {
        var a = b("FBRTCCallSummaryStore").getInstance();
        b("Banzai").subscribe(b("Banzai").SEND, function() {
            b("ZenonCallSummaryUploader").logCallSummaries(),
            b("cr:1645710") == null ? void 0 : b("cr:1645710").logCallSummaries(),
            b("FBRTCCallSummary").logSavedSummaries(a)
        })
    }
}
), null);
__d("ZenonUserActionLogger", ["FBRTCConsoleLogger", "RtcWebUserActionsDebugFalcoEvent", "RtcWebUserActionsFalcoEvent", "ZenonSDESKeyDetector", "gkx", "unrecoverableViolation"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = new Map()
      , h = window.location.hostname.search("facebook") !== -1 ? "facebook" : window.location.hostname.search("messenger") !== -1 ? "messenger_dot_com" : null
      , i = h === "facebook" && b("gkx")("708253") ? "Comet" : h === "messenger_dot_com" && b("gkx")("1105821") ? "ZenonOnMercury" : void 0
      , j = {
        logCheckpoint: function(a) {
            j.logEvent(babelHelpers["extends"]({}, a, {
                event: "checkpoint"
            }))
        },
        logClick: function(a) {
            j.logEvent(babelHelpers["extends"]({}, a, {
                event: "tap"
            }))
        },
        logError: function(a) {
            j.logEvent(babelHelpers["extends"]({}, a, {
                event: "error"
            }))
        },
        logEvent: function(a) {
            var c;
            if (b("ZenonSDESKeyDetector")(a))
                throw b("unrecoverableViolation")("ZenonUserActionLogger event contains SDES crypto key! This log entry must be removed!", "rtc_www");
            c = babelHelpers["extends"]({}, a, {
                codebase_version: i,
                page: (c = a.page) != null ? c : h
            });
            var d = babelHelpers["extends"]({}, c, {
                client_time: Date.now().toString()
            });
            b("RtcWebUserActionsDebugFalcoEvent").log(function() {
                return d
            });
            b("RtcWebUserActionsFalcoEvent").log(function() {
                return d
            });
            b("FBRTCConsoleLogger").getInstance().getLogHistory().log((a = a.event) != null ? a : "null", JSON.stringify(c))
        },
        logImpression: function(a) {
            j.logEvent(babelHelpers["extends"]({}, a, {
                event: "impression"
            }))
        },
        logPreCallClick: function(a) {
            j.logEvent(babelHelpers["extends"]({}, a, {
                event: "tap"
            }))
        },
        logPreCallImpression: function(a) {
            j.logEvent(babelHelpers["extends"]({}, a, {
                event: "impression"
            }))
        },
        startTimer: function(a) {
            var b = Date.now();
            g = g.set(a, b);
            j.logCheckpoint({
                checkpoint: a + "_timerStart"
            })
        },
        stopTimer: function(a) {
            var b = a.checkpointName === void 0 ? a.timerName : a.checkpointName
              , c = a.event || {}
              , d = function(a) {
                var b = g.get(a);
                if (b != null) {
                    g["delete"](a);
                    return parseInt(Date.now() - b, 10)
                }
                return null
            };
            d = d(a.timerName);
            j.logCheckpoint(babelHelpers["extends"]({}, c, {
                checkpoint: b + "_timerEnd",
                event_time_elapsed: d == null ? void 0 : d.toString()
            }));
            return parseInt(d, 10)
        }
    };
    e.exports = j
}
), null);
__d("MNCommerceActionTypes", ["keyMirrorRecursive"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        RECEIPT: {
            LOADED: null,
            LOAD_ERROR: null,
            RELOAD: null
        },
        SHIPMENT: {
            LOADED: null,
            LOAD_ERROR: null,
            RELOAD: null
        },
        DIALOG: {
            SHOW: null,
            HIDE: null
        },
        RETAIL_ITEM: {
            LOADED: null,
            LOAD_ERROR: null,
            RELOAD: null
        },
        PROMOTION_STATE: {
            LOADED: null,
            LOAD_ERROR: null,
            RELOAD: null
        },
        TRANSACTION_INVOICE: {
            LOADED: null,
            LOAD_ERROR: null,
            RELOAD: null
        },
        BOT_REVIEW_STATE: {
            LOADED: null,
            LOAD_ERROR: null,
            RELOAD: null
        }
    };
    c = b("keyMirrorRecursive")(a);
    d = c;
    e.exports = d
}
), null);
__d("MNCommerceDialogStateStore", ["FluxStore", "MessengerDispatcher", "MNCommerceActionTypes"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c;
            c = a.call(this, b("MessengerDispatcher")) || this;
            c.$MNCommerceDialogStateStore1 = null;
            c.$MNCommerceDialogStateStore2 = null;
            return c
        }
        var d = c.prototype;
        d.__onDispatch = function(a) {
            var c = a.type;
            switch (c) {
            case b("MNCommerceActionTypes").DIALOG.SHOW:
                this.$MNCommerceDialogStateStore1 = a.dialogContainer;
                this.$MNCommerceDialogStateStore2 = a.state;
                this.__emitChange();
                break;
            case b("MNCommerceActionTypes").DIALOG.HIDE:
                this.$MNCommerceDialogStateStore1 = null;
                this.$MNCommerceDialogStateStore2 = null;
                this.__emitChange();
                break
            }
        }
        ;
        d.getDialogContainer = function() {
            return this.$MNCommerceDialogStateStore1
        }
        ;
        d.getState = function() {
            return this.$MNCommerceDialogStateStore2
        }
        ;
        return c
    }(b("FluxStore"));
    a.__moduleID = e.id;
    c = new a();
    e.exports = c
}
), null);
__d("MNCommerceDialogContainer.react", ["MNCommerceDialogStateStore", "PureStoreBasedStateMixin", "React", "createReactClass_DEPRECATED"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = b("createReactClass_DEPRECATED")({
        displayName: "MNCommerceDialogContainer",
        mixins: [b("PureStoreBasedStateMixin")(b("MNCommerceDialogStateStore"))],
        statics: {
            calculateState: function() {
                var a = b("MNCommerceDialogStateStore").getDialogContainer();
                return {
                    dialogContainer: a
                }
            }
        },
        render: function() {
            var a = this.state.dialogContainer;
            return !a ? null : g.jsx(a, {})
        }
    });
    c = a;
    e.exports = c
}
), null);
__d("P2PDialogStore", ["EventEmitter", "P2PActionConstants", "P2PDispatcher"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {};
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c;
            c = a.call(this) || this;
            b("P2PDispatcher").register(c.onEventDispatched.bind(babelHelpers.assertThisInitialized(c)));
            g = {
                dialogClass: null,
                dialogProps: null
            };
            return c
        }
        var d = c.prototype;
        d.getState = function() {
            return g
        }
        ;
        d.onEventDispatched = function(a) {
            var c = a.type;
            a = a.data;
            switch (c) {
            case b("P2PActionConstants").DIALOG_SHOWN:
                g.dialogClass = a.dialogClass;
                g.dialogProps = a.dialogProps;
                this.emit("change");
                break;
            case b("P2PActionConstants").DIALOG_CLOSED:
                g.dialogClass = null;
                g.dialogProps = null;
                this.emit("change");
                break
            }
        }
        ;
        return c
    }(b("EventEmitter"));
    c = new a();
    e.exports = c
}
), null);
__d("P2PDialogContainer.react", ["P2PDialogStore", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.state = b("P2PDialogStore").getState(),
            d.onDialogStoreChange = function() {
                d.setState(b("P2PDialogStore").getState())
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            this.dialogStoreSub = b("P2PDialogStore").addListener("change", this.onDialogStoreChange)
        }
        ;
        d.componentWillUnmount = function() {
            this.dialogStoreSub && (this.dialogStoreSub.remove(),
            this.dialogStoreSub = null)
        }
        ;
        d.render = function() {
            if (!this.state.dialogClass)
                return null;
            var a = this.state.dialogClass;
            return g.createElement(a, babelHelpers["extends"]({}, this.state.dialogProps, {
                key: "dialog"
            }))
        }
        ;
        return c
    }(g.Component);
    e.exports = a
}
), null);
__d("PagesPlatformActionConstants", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({
        BOOKING_REQUEST_ACCEPT_ERROR: "booking_request_accept_error",
        BOOKING_REQUEST_ACCEPT_INITIATED: "booking_request_accept_initiated",
        BOOKING_REQUEST_ACCEPTED: "booking_request_accepted",
        BOOKING_REQUEST_CREATED: "booking_request_created",
        BOOKING_REQUEST_DECLINE_ERROR: "booking_request_decline_error",
        BOOKING_REQUEST_DECLINE_INITIATED: "booking_request_decline_initiated",
        BOOKING_REQUEST_DECLINED: "booking_request_declined",
        BOOKING_REQUEST_RESCHEDULE_INITIATED: "booking_request_reschedule_initiated",
        BOOKING_REQUEST_RESCHEULED: "booking_request_reschedule",
        DIALOG_CLOSED: "dialog_closed",
        DIALOG_SHOWN: "dialog_shown",
        NEW_TIME_CHOSEN: "new_time_chosen"
    });
    b = a;
    e.exports = b
}
), null);
__d("PagesPlatformRequestDispatcher", ["Dispatcher_DEPRECATED"], (function(a, b, c, d, e, f) {
    "use strict";
    a = new (b("Dispatcher_DEPRECATED"))();
    e.exports = a
}
), null);
__d("PagesPlatformDialogStore", ["EventEmitter", "PagesPlatformActionConstants", "PagesPlatformRequestDispatcher"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {};
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c;
            c = a.call(this) || this;
            b("PagesPlatformRequestDispatcher").register(c.onEventDispatched.bind(babelHelpers.assertThisInitialized(c)));
            g = {
                dialogClass: null,
                dialogProps: null
            };
            return c
        }
        var d = c.prototype;
        d.getState = function() {
            return g
        }
        ;
        d.onEventDispatched = function(a) {
            var c = a.type;
            a = a.data;
            switch (c) {
            case b("PagesPlatformActionConstants").DIALOG_SHOWN:
                g.dialogClass = a.dialogClass;
                g.dialogProps = a.dialogProps;
                this.emit("change");
                break;
            case b("PagesPlatformActionConstants").DIALOG_CLOSED:
                g.dialogClass = null;
                g.dialogProps = null;
                this.emit("change");
                break
            }
        }
        ;
        return c
    }(b("EventEmitter"));
    c = new a();
    e.exports = c
}
), null);
__d("PagesPlatformDialogContainer.react", ["PagesPlatformDialogStore", "PureStoreBasedStateMixin", "React", "createReactClass_DEPRECATED"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = b("createReactClass_DEPRECATED")({
        displayName: "PagesPlatformDialogContainer",
        mixins: [b("PureStoreBasedStateMixin")(b("PagesPlatformDialogStore"))],
        statics: {
            calculateState: function() {
                return b("PagesPlatformDialogStore").getState()
            }
        },
        render: function() {
            if (!this.state.dialogClass)
                return null;
            var a = this.state.dialogClass;
            return g.createElement(a, babelHelpers["extends"]({}, this.state.dialogProps, {
                key: "dialog"
            }))
        }
    });
    c = a;
    e.exports = c
}
), null);
__d("FBPaymentsDialogStore", ["FBPaymentsDialogActions", "FBPaymentsDispatcher", "FluxStore"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c;
            c = a.call(this, b("FBPaymentsDispatcher")) || this;
            c.$FBPaymentsDialogStore1 = {
                dialogClass: null,
                dialogProps: null
            };
            return c
        }
        var d = c.prototype;
        d.__onDispatch = function(a) {
            var c = a.type;
            a = a.data;
            switch (c) {
            case b("FBPaymentsDialogActions").types.SHOW_DIALOG:
                this.$FBPaymentsDialogStore1 = {
                    dialogClass: a.dialogClass,
                    dialogProps: a.dialogProps
                };
                this.__emitChange();
                break;
            case b("FBPaymentsDialogActions").types.HIDE_DIALOG:
                this.$FBPaymentsDialogStore1 = {
                    dialogClass: null,
                    dialogProps: null
                };
                this.__emitChange();
                break
            }
        }
        ;
        d.getState = function() {
            return this.$FBPaymentsDialogStore1
        }
        ;
        return c
    }(b("FluxStore"));
    a.__moduleID = e.id;
    c = new a();
    e.exports = c
}
), null);
__d("FBPaymentsDialogContainer.react", ["FBPaymentsDialogStore", "FBPaymentsDispatcher", "FluxContainer", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        c.calculateState = function() {
            return b("FBPaymentsDialogStore").getState()
        }
        ;
        c.getStores = function() {
            return [b("FBPaymentsDialogStore")]
        }
        ;
        var d = c.prototype;
        d.UNSAFE_componentWillMount = function() {
            b("FBPaymentsDispatcher").explicitlyRegisterStore(b("FBPaymentsDialogStore"))
        }
        ;
        d.render = function() {
            if (!this.state.dialogClass)
                return null;
            var a = this.state.dialogClass;
            return g.createElement(a, babelHelpers["extends"]({}, this.state.dialogProps, {
                key: "dialog"
            }))
        }
        ;
        return c
    }(g.Component);
    c = b("FluxContainer").create(a);
    e.exports = c
}
), null);
__d("RTCWebUserActionsDebugTypedLoggerLite", ["generateLiteTypedLogger"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("generateLiteTypedLogger")("logger:RTCWebUserActionsDebugLoggerConfig")
}
), null);
__d("RTCWebUserActionsTypedLoggerLite", ["generateLiteTypedLogger"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("generateLiteTypedLogger")("logger:RTCWebUserActionsLoggerConfig")
}
), null);
__d("SyncProtocolConstants", [], (function(a, b, c, d, e, f) {
    a = "IRIS_CURSOR_LIMIT";
    f.IRIS_CURSOR_LIMIT = a;
    b = "SNAPSHOT_FAILURE";
    f.SNAPSHOT_FAILURE = b
}
), null);
