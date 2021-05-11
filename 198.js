if (self.CavalryLogger) {
    CavalryLogger.start_js(["gDafS"]);
}

__d("MessengerView", [], (function(a, b, c, d, e, f) {
    e.exports = {
        DETAIL: {
            COMPOSE: "detail/compose",
            GALLERY: "detail/gallery",
            THREAD: "detail/thread",
            PAYTHREAD: "detail/paythread",
            PAYFRIENDPICKER: "detail/payfriendpicker"
        },
        MASTER: {
            PAYMENT: "master/payment",
            PEOPLE: "master/people",
            RECENT: "master/recent",
            SEE_ALL_GROUPS: "master/sagroups",
            SEE_ALL_PAGES: "master/sapages",
            SEE_ALL_PEOPLE: "master/sapeople",
            SEE_ALL_UNREAD: "master/saunread",
            SEARCH: "master/search",
            SEARCH_MESSAGES: "master/search_messages",
            SUPPORT: "master/support",
            TEAMWORK_SEE_ALL_ANNOUNCEMENT_GROUPS: "master/saannoucegroups"
        }
    }
}
), null);
__d("FBRTCAvailability", ["ChannelConstants", "PresenceStatus"], (function(a, b, c, d, e, f) {
    "use strict";
    f.isCallable = a;
    function a(a) {
        a = b("PresenceStatus").getCapabilities(a);
        var c = b("ChannelConstants").CAPABILITY_VOIP_INTEROP;
        return !!(a & c)
    }
}
), null);
__d("FBRTCCallUIWrapper", ["regeneratorRuntime", "Bootloader", "FBRTCLogger", "QuickPerformanceLogger", "UserAgent", "gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    f.openGroupCallUI = a;
    f.openGroupCallURI = c;
    f.openAsCaller = d;
    f.openAsCallee = e;
    f._shouldFocusCallWindow = k;
    f._shouldCloseCallWindow = l;
    f._openWindow = m;
    f._windowDimension = n;
    f._windowPosition = o;
    f._isSparkBrowser = p;
    var g = b("FBRTCLogger").Trigger
      , h = null
      , i = 0;
    function j() {
        return "Video Call " + i
    }
    function a(a, c, d, e, f, g, i) {
        return b("regeneratorRuntime").async(function(j) {
            while (1)
                switch (j.prev = j.next) {
                case 0:
                    h = this._openWindow("Group Call"),
                    b("Bootloader").loadModules(["FBRTCCallUI"], function(b) {
                        b.openGroupCallUI(a, c, d, e, f, g, h, i)
                    }, "FBRTCCallUIWrapper");
                case 2:
                case "end":
                    return j.stop()
                }
        }, null, this)
    }
    function c(a, c, d, e, f, g, i, j, k) {
        return b("regeneratorRuntime").async(function(l) {
            while (1)
                switch (l.prev = l.next) {
                case 0:
                    h = this._openWindow("Group Call"),
                    b("Bootloader").loadModules(["FBRTCCallUI"], function(b) {
                        b.openGroupCallURI({
                            conferenceName: a,
                            callID: c,
                            hasVideo: d,
                            initializeVideo: e,
                            serverInfoData: i,
                            trigger: j,
                            callSummary: k,
                            callWindow: h,
                            multiwayWwwTier: g,
                            multiwayCoreTier: f
                        })
                    }, "FBRTCCallUIWrapper");
                case 2:
                case "end":
                    return l.stop()
                }
        }, null, this)
    }
    function d(a, c, d, e, f) {
        !h && window.rtcCallChildWindow && (h = window.rtcCallChildWindow,
        window.rtcCallChildWindow = null);
        try {
            if (this._shouldFocusCallWindow(a)) {
                h && h.focus();
                d === g.WORKPLACE_P2P_CALL && b("QuickPerformanceLogger").markerEnd(12451873, 105);
                return
            }
            this._shouldCloseCallWindow() && (h && h.close())
        } catch (a) {
            if (a.name === "SecurityError")
                b("Bootloader").loadModules(["RTWebUserActionLogger"], function(a) {
                    a.logCheckpoint({
                        checkpoint: "call_window_navigated_away"
                    })
                }, "FBRTCCallUIWrapper"),
                h = null,
                i++;
            else {
                d === g.WORKPLACE_P2P_CALL && b("QuickPerformanceLogger").markerEnd(12451873, 3);
                throw a
            }
        }
        h = this._openWindow(j(), {
            isP2P: !0
        });
        b("Bootloader").loadModules(["FBRTCCallUI"], function(b) {
            b.openAsCaller(a, c, d, e, h, f)
        }, "FBRTCCallUIWrapper");
        d === g.WORKPLACE_P2P_CALL && b("QuickPerformanceLogger").markerEnd(12451873, 2)
    }
    function e(a, c, d, e, f) {
        h = this._openWindow(j(), {
            isP2P: !0
        }),
        b("Bootloader").loadModules(["FBRTCCallUI"], function(b) {
            b.openAsCallee(a, c, d, e, h, f)
        }, "FBRTCCallUIWrapper")
    }
    function k(a) {
        return !!h && !h.closed && h.rtcCallInProgessWith === a
    }
    function l() {
        return !!h && !h.closed && !h.rtcCallInProgessWith
    }
    function m(a, c) {
        c = c === void 0 ? {
            isP2P: !1
        } : c;
        c = c.isP2P;
        c = c === void 0 ? !1 : c;
        c = this._windowPosition({
            isP2P: c
        });
        c = ["menubar=no", "location=no", "scrollbars=no", "status=no", "personalbar=no", c.height, c.width, c.top, c.left].join(",");
        this._isSparkBrowser() && (c = "");
        b("gkx")("859726") && b("Bootloader").loadModules(["RTWebUserActionLogger"], function(a) {
            a.logCheckpoint({
                checkpoint: "rtc_www_new_tab"
            })
        }, "FBRTCCallUIWrapper");
        a = b("gkx")("859726") ? window.open("", "_blank") : window.open("", a, c);
        window.callWindow = a;
        return a
    }
    function n(a) {
        a = a.isP2P;
        var b = 960
          , c = 540;
        screen && screen.width > 1280 && (!a ? (b = 1100,
        c = 772) : (b = 1280,
        c = 720));
        return {
            height: c,
            width: b
        }
    }
    function o(a) {
        a = a.isP2P;
        a = a === void 0 ? !1 : a;
        var b, c, d, e;
        a = n({
            isP2P: a
        });
        var f = a.height;
        a = a.width;
        window.innerWidth !== void 0 ? (c = window.innerWidth,
        b = window.innerHeight) : (c = screen.width,
        b = screen.height);
        window.screenLeft !== void 0 ? (d = window.screenLeft,
        e = window.screenTop) : (d = window.screenX,
        e = window.screenY);
        c = Math.floor(c / 2 - a / 2 + d);
        d = Math.floor(b / 2 - f / 2 + e);
        return {
            height: "height=" + f.toString(),
            width: "width=" + a.toString(),
            top: "top=" + d.toString(),
            left: "left=" + c.toString()
        }
    }
    function p() {
        return b("UserAgent").isBrowser("Chrome < 34") && b("UserAgent").isBrowser("Chrome > 33")
    }
}
), null);
__d("RTWebCallTriggerMapping", ["deepFreezeValue"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        chat_sidebar: {
            surface: "chat_sidebar",
            component: "recent_calls"
        },
        chat_sidebar_audio_button: {
            surface: "chat_sidebar",
            component: "audio_button"
        },
        chat_sidebar_video_button: {
            surface: "chat_sidebar",
            component: "video_button"
        },
        chattab_audio_button: {
            surface: "chat_tab",
            component: "audio_button"
        },
        chattab_video_button: {
            surface: "chat_tab",
            component: "video_button"
        },
        messenger_bubble_free_call: {
            surface: "messenger_bubble",
            component: "free_call"
        },
        messenger_group_bubble_free_call: {
            surface: "messenger_bubble",
            component: "free_call"
        },
        messenger_dot_com_missed_call_dialog: {
            surface: "missed_call_dialog",
            component: "start_call_button"
        },
        messenger_dot_com_video_call: {
            surface: "messenger_header",
            component: "video_button"
        },
        messenger_dot_com_audio_call: {
            surface: "messenger_header",
            component: "audio_button"
        },
        timeline_audio: {
            surface: "timeline_top_section",
            component: "audio_button"
        },
        timeline_video: {
            surface: "timeline_top_section",
            component: "video_button"
        },
        messenger_dot_com_work_hovercard: {
            surface: "work_hovercard",
            component: "start_call_button"
        },
        admin_message: {
            surface: "admin_message",
            component: "start_call_button"
        },
        return_call: {
            surface: "missed_call_dialog",
            component: "start_call_button"
        },
        popup_start_call_button: {
            surface: "call_container",
            component: "start_call_button"
        },
        redial_button: {
            surface: "call_container",
            component: "redial"
        },
        web_messenger: {
            surface: "work_profile",
            component: "start_call_button"
        },
        workplace_group_call: {
            surface: "workplace_group_chat",
            component: "start_call_button"
        },
        workplace_p2p_call: {
            surface: "workplace_p2p_chat",
            component: "start_call_button"
        },
        quickdial: {
            surface: "work_profile",
            component: "start_call_button"
        },
        intern_search_meeting_room_unit: {
            surface: "meeting_room_intern_search_card",
            component: "start_call_button"
        },
        meeting_room_map_dialog: {
            surface: "meeting_room_map_dialog",
            component: "start_call_button"
        },
        meeting_room_page_profile: {
            surface: "meeting_room_profile",
            component: "start_call_button"
        }
    };
    b("deepFreezeValue")(a);
    c = a;
    e.exports = c
}
), null);
__d("generateRTCCallID", ["randomInt"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a() {
        return b("randomInt")(0, 4294967294) + 1
    }
}
), null);
__d("FBRTCCore", ["invariant", "Bootloader", "FBLogger", "FBRTCAvailability", "FBRTCCallUIWrapper", "FBRTCLogger", "FBRTCSupport", "QuickPerformanceLogger", "RTWebCallTriggerMapping", "RTWebUserActionLogger", "generateRTCCallID", "setTimeout"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("FBRTCLogger").Trigger
      , i = !1;
    a = {
        startOutgoingCall: function(a, c, d, e, f) {
            e === void 0 && (e = !1);
            f === void 0 && (f = null);
            /\D/.test(a) && g(0, 2478);
            var j = b("generateRTCCallID")()
              , k = b("RTWebCallTriggerMapping")[c];
            (k === null || k === void 0) && b("FBLogger")("rtweb").mustfix("Unexpected or unknown call trigger: %s", c);
            b("RTWebUserActionLogger").logPreCallClick(babelHelpers["extends"]({}, k, {
                callID: j.toString(),
                mediaType: b("RTWebUserActionLogger").getMediaType(d),
                callType: "p2p"
            }));
            if (i)
                return;
            c === h.WORKPLACE_P2P_CALL && (b("QuickPerformanceLogger").markerStart(12451873),
            b("QuickPerformanceLogger").markerAnnotate(12451873, {
                string: {
                    SOURCE: c
                }
            }));
            i = !0;
            b("setTimeout")(function() {
                i = !1
            }, 1e3);
            e && !b("FBRTCSupport").isCollabSupported() ? (b("Bootloader").loadModules(["FBRTCUnsupportedBrowserMessage", "CollabMessengerLogger"], function(b, c) {
                b.showForUnsupportedCollabCall(),
                c.logBrowserNotSupported({
                    peerID: a
                })
            }, "FBRTCCore"),
            c === h.WORKPLACE_P2P_CALL && b("QuickPerformanceLogger").markerEnd(12451873, 3)) : !b("FBRTCSupport").isWebrtcSupported() ? (b("Bootloader").loadModules(["FBRTCUnsupportedBrowserMessage"], function(a) {
                a.showForOutgoingCall(),
                b("RTWebUserActionLogger").logError({
                    callID: j.toString(),
                    callType: "p2p",
                    mediaType: b("RTWebUserActionLogger").getMediaType(d),
                    errorDomain: "unsupported browser"
                })
            }, "FBRTCCore"),
            c === h.WORKPLACE_P2P_CALL && b("QuickPerformanceLogger").markerEnd(12451873, 3)) : b("FBRTCCallUIWrapper").openAsCaller(a, j, c, d, f)
        },
        startGroupCall: function(a) {
            var c = a.conferenceName
              , d = a.hasVideo
              , e = a.serverInfoData
              , f = a.trigger;
            a = a.usersToRing;
            a = a === void 0 ? [] : a;
            if (i)
                return;
            f === h.WORKPLACE_GROUP_CALL && (b("QuickPerformanceLogger").markerStart(12451873),
            b("QuickPerformanceLogger").markerAnnotate(12451873, {
                string: {
                    SOURCE: f
                }
            }));
            i = !0;
            b("setTimeout")(function() {
                i = !1
            }, 1e3);
            if (!b("FBRTCSupport").isGroupCallWebtrcSupported()) {
                b("Bootloader").loadModules(["MessengerRTCUnsupportedBrowserDialogController"], function(a) {
                    b("RTWebUserActionLogger").logError({
                        callType: "mw",
                        conferenceName: c,
                        mediaType: b("RTWebUserActionLogger").getMediaType(!d),
                        errorDomain: "unsupported browser"
                    }),
                    a.render({
                        hasVideo: d,
                        isGroupCall: !0
                    })
                }, "FBRTCCore");
                f === h.WORKPLACE_GROUP_CALL && b("QuickPerformanceLogger").markerEnd(12451873, 3);
                return
            }
            b("FBRTCCallUIWrapper").openGroupCallUI(c, b("generateRTCCallID")(), a, d, d, f, e);
            f === h.WORKPLACE_GROUP_CALL && b("QuickPerformanceLogger").markerEnd(12451873, 2)
        },
        isAvailableForWebrtcCalling: function(a) {
            return b("FBRTCAvailability").isCallable(a)
        }
    };
    e.exports = a
}
), null);
__d("MessengerStateProcessor", ["MercuryIDs", "MercuryThreadIDMap", "MercuryVanityIDMap.bs", "MessengerParticipants.bs", "MessengerURIConstants", "gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        preprocess: function(a) {
            var c = a.activeThreadID;
            if (c) {
                var d = b("MercuryIDs").getUserIDFromThreadID(c)
                  , e = d && b("MessengerParticipants.bs").getNow(b("MercuryIDs").getParticipantIDFromUserID(d));
                if (e && e.type !== "event")
                    a.threadKey = e.vanity || d;
                else if (d && !e) {
                    e = b("MercuryIDs").getParticipantIDFromUserID(d);
                    a.threadKey = b("MercuryVanityIDMap.bs").hasID(e) ? b("MercuryVanityIDMap.bs").getVanity(e) : d
                } else {
                    e = b("MercuryThreadIDMap").get();
                    d = e.getServerIDFromClientIDNow(c);
                    a.threadKey = d || (b("MercuryIDs").isGroupChat(c) && b("gkx")("1235085") ? c : b("MercuryIDs").tokenize(c).value)
                }
            }
            delete a.activeThreadID;
            return a
        },
        postprocess: function(a) {
            var c = b("MercuryThreadIDMap").get(), d = g(a.threadKey), e;
            e = b("MercuryIDs").isValid(d) ? d : c.getClientIDFromServerIDNow(d);
            if (!e) {
                d = b("MessengerParticipants.bs").getIDFromVanityOrFBID(d);
                d && (e = b("MercuryIDs").getThreadIDFromParticipantID(d))
            }
            e && (a.activeThreadID = e,
            a.serverThreadID = c.getServerIDFromClientIDNow(e));
            delete a.threadKey;
            return a
        },
        supportInboxPostprocess: function(a) {
            a.threadKey && (a.activeThreadID = b("MercuryIDs").getThreadIDFromSupportInboxItemID(a.threadKey));
            delete a.threadKey;
            return a
        }
    };
    function g(a) {
        return !a ? null : a.startsWith(b("MessengerURIConstants").GROUP_PREFIX) ? a.substr(b("MessengerURIConstants").GROUP_PREFIX.length) : a
    }
    e.exports = a
}
), null);
__d("MessengerURISerializer", ["CurrentEnvironment", "MercuryFilters.bs", "MercuryIDs", "MessagingTag", "MessengerStateProcessor", "MessengerURIConstants", "MessengerView", "URI", "WWWBase", "gkx", "qex"], (function(a, b, c, d, e, f) {
    "use strict";
    f.serialize = a;
    f.getNonMessengerState = c;
    f.deserialize = d;
    f.updateMasterViewForSearchRefactor = e;
    var g, h = "/?$", i = "/", j = function(a, c) {
        a.setPath(b("CurrentEnvironment").facebookdotcom ? b("MessengerURIConstants").FACEBOOK_PREFIX + c : c)
    }, k = b("qex")._("1097094"), l = function(a, c) {
        var d = a.getPath();
        b("CurrentEnvironment").facebookdotcom && !d.startsWith(b("MessengerURIConstants").FACEBOOK_PREFIX) && (c = b("MessengerURIConstants").FACEBOOK_PREFIX + c);
        a.setPath(a.getPath() + c)
    };
    function a(a) {
        var c = b("gkx")("1289810")
          , d = new (g || (g = b("URI")))(b("WWWBase").uri);
        a = b("MessengerStateProcessor").preprocess(a);
        switch (a.masterView) {
        case b("MessengerView").MASTER.PAYMENT:
            j(d, b("MessengerURIConstants").PAYMENT_PATH);
            break;
        case b("MessengerView").MASTER.PEOPLE:
            j(d, b("MessengerURIConstants").PEOPLE_PATH);
            break;
        case b("MessengerView").MASTER.SEARCH:
            j(d, b("MessengerURIConstants").SEARCH_PATH);
            break;
        case b("MessengerView").MASTER.SEARCH_MESSAGES:
        case b("MessengerView").MASTER.SEE_ALL_GROUPS:
            c && j(d, b("MessengerURIConstants").TEAMWORK_GROUP_VIEW);
            break;
        case b("MessengerView").MASTER.SEE_ALL_PAGES:
        case b("MessengerView").MASTER.SEE_ALL_PEOPLE:
            k ? j(d, b("MessengerURIConstants").SEARCH_PATH) : c && j(d, b("MessengerURIConstants").TEAMWORK_CHAT_VIEW);
            break;
        case b("MessengerView").MASTER.SEE_ALL_UNREAD:
            c && j(d, b("MessengerURIConstants").TEAMWORK_UNREAD_VIEW);
            break;
        case b("MessengerView").MASTER.TEAMWORK_SEE_ALL_ANNOUNCEMENT_GROUPS:
            j(d, b("MessengerURIConstants").TEAMWORK_ANNOUNCEMENT_GROUP_VIEW);
            break
        }
        switch (a.folder) {
        case b("MessagingTag").OTHER:
            j(d, b("MessengerURIConstants").FILTERED_REQUESTS_PATH);
            break;
        case b("MessagingTag").ACTION_ARCHIVED:
            j(d, b("MessengerURIConstants").ARCHIVED_PATH);
            break;
        case b("MessagingTag").PENDING:
            j(d, b("MessengerURIConstants").MESSAGE_REQUESTS_PATH);
            break;
        case b("MessagingTag").MARKETPLACE_FOLDER:
            j(d, b("MessengerURIConstants").FOLDERS_PATH + "/" + a.folderKey);
            break
        }
        a.detailView === b("MessengerView").DETAIL.GALLERY ? j(d, b("MessengerURIConstants").GALLERY_PATH) : a.detailView === b("MessengerView").DETAIL.PAYTHREAD ? (l(d, b("MessengerURIConstants").PAYMENT_PAY_PATH),
        a.threadKey && d.addQueryData("id", a.threadKey)) : a.detailView === b("MessengerView").DETAIL.PAYFRIENDPICKER ? l(d, b("MessengerURIConstants").PAYMENT_PAY_PATH) : a.detailView === b("MessengerView").DETAIL.COMPOSE ? l(d, b("MessengerURIConstants").COMPOSE_SUBPATH) : a.threadKey ? a.masterView === b("MessengerView").MASTER.PAYMENT ? (j(d, b("MessengerURIConstants").THREAD_PREFIX + a.threadKey),
        delete a.extraQueryParams.id,
        delete a.extraQueryParams.a,
        delete a.extraQueryParams.m) : l(d, b("MessengerURIConstants").THREAD_PREFIX + a.threadKey) : a.masterView === b("MessengerView").MASTER.PAYMENT ? (j(d, ""),
        delete a.extraQueryParams.id,
        delete a.extraQueryParams.a,
        delete a.extraQueryParams.m) : l(d, "");
        a.extraQueryParams && d.addQueryData(a.extraQueryParams);
        b("MercuryFilters.bs").isSupportedFilter(a.filter) && d.addQueryData({
            filter: a.filter
        });
        if (a.query != null)
            if (a.masterView === b("MessengerView").MASTER.SEE_ALL_PEOPLE || a.masterView === b("MessengerView").MASTER.SEE_ALL_GROUPS || a.masterView === b("MessengerView").MASTER.SEE_ALL_PAGES)
                d.addQueryData("t", a.seeAllType),
                d.addQueryData("sa", a.query);
            else if (k)
                a.masterView === b("MessengerView").MASTER.SEARCH ? d.addQueryData("q", a.query) : a.masterView === b("MessengerView").MASTER.SEARCH_MESSAGES && d.addQueryData("qa", a.query);
            else {
                d.addQueryData((c = {},
                c[a.masterView === b("MessengerView").MASTER.SEARCH ? "qa" : "q"] = a.query,
                c))
            }
        a.threadIDs && d.addQueryData({
            threadIDs: JSON.stringify(a.threadIDs)
        });
        a.mid && d.addQueryData({
            mid: a.mid
        });
        return d
    }
    function c() {
        return {
            notMessenger: !0,
            filter: b("MercuryFilters.bs").all,
            folder: b("MessagingTag").INBOX,
            masterView: b("MessengerView").MASTER.RECENT
        }
    }
    function d(a) {
        var c = {}
          , d = a.getPath()
          , e = b("gkx")("1300945")
          , f = new RegExp("^" + b("MessengerURIConstants").FACEBOOK_PREFIX + "(/|$)")
          , g = a.getQueryData().story_id != null;
        if (b("CurrentEnvironment").facebookdotcom && !(f.test(d) || e && d == "/" && !g))
            return this.getNonMessengerState();
        f = d.replace(b("MessengerURIConstants").FACEBOOK_PREFIX, "");
        var i;
        e = a.getQueryData();
        g = e.filter;
        d = e.mid;
        a = e.q;
        var j = e.qa
          , l = e.sa
          , o = e.t
          , p = e.threadIDs;
        e = babelHelpers.objectWithoutPropertiesLoose(e, ["filter", "mid", "q", "qa", "sa", "t", "threadIDs"]);
        c.query = j || a;
        c.sa = l;
        c.seeAllType = o;
        if (p)
            try {
                i = JSON.parse(p)
            } catch (a) {}
        i ? c.threadIDs = i.filter(function(a) {
            return b("MercuryIDs").isValidThreadID(a)
        }) : c.threadIDs = null;
        f.match("^" + b("MessengerURIConstants").PEOPLE_PATH) ? c.masterView = b("MessengerView").MASTER.PEOPLE : f.match("^" + b("MessengerURIConstants").PAYMENT_PATH) ? c.masterView = b("MessengerView").MASTER.PAYMENT : f.match("^" + b("MessengerURIConstants").SEARCH_PATH) ? k ? c.masterView = this.updateMasterViewForSearchRefactor(j, l, o) : c.masterView = b("MessengerView").MASTER.SEARCH : f.match("^" + b("MessengerURIConstants").TEAMWORK_GROUP_VIEW) ? c.masterView = b("MessengerView").MASTER.SEE_ALL_GROUPS : f.match("^" + b("MessengerURIConstants").TEAMWORK_CHAT_VIEW) ? c.masterView = b("MessengerView").MASTER.SEE_ALL_PEOPLE : f.match("^" + b("MessengerURIConstants").TEAMWORK_UNREAD_VIEW) ? c.masterView = b("MessengerView").MASTER.SEE_ALL_UNREAD : f.match("^" + b("MessengerURIConstants").TEAMWORK_ANNOUNCEMENT_GROUP_VIEW) ? c.masterView = b("MessengerView").MASTER.TEAMWORK_SEE_ALL_ANNOUNCEMENT_GROUPS : c.masterView = b("MessengerView").MASTER.RECENT;
        f.match("^" + b("MessengerURIConstants").FILTERED_REQUESTS_PATH) ? c.folder = b("MessagingTag").OTHER : f.match("^" + b("MessengerURIConstants").ARCHIVED_PATH) ? c.folder = b("MessagingTag").ACTION_ARCHIVED : f.match("^" + b("MessengerURIConstants").MESSAGE_REQUESTS_PATH) ? c.folder = b("MessagingTag").PENDING : f.match("^" + b("MessengerURIConstants").FOLDERS_PATH) ? c.folder = b("MessagingTag").MARKETPLACE_FOLDER : c.folder = b("MessagingTag").INBOX;
        if (f.match(b("MessengerURIConstants").COMPOSE_SUBPATH + h))
            c.detailView = b("MessengerView").DETAIL.COMPOSE;
        else if (f.match("^" + b("MessengerURIConstants").PAYMENT_PATH + b("MessengerURIConstants").PAYMENT_PAY_PATH))
            e && e.id ? (c.threadKey = e.id,
            c.detailView = b("MessengerView").DETAIL.PAYTHREAD) : c.detailView = b("MessengerView").DETAIL.PAYFRIENDPICKER;
        else {
            a = m(f);
            a && (c.threadKey = a,
            c.detailView = b("MessengerView").DETAIL.THREAD);
            p = n(f);
            p && (c.folderKey = p)
        }
        b("MercuryFilters.bs").isSupportedFilter(g) ? c.filter = g : c.filter = b("MercuryFilters.bs").all;
        c.mid = d;
        c.extraQueryParams = e;
        if (c.masterView === b("MessengerView").MASTER.SUPPORT)
            return b("MessengerStateProcessor").supportInboxPostprocess(c);
        f.match("^" + b("MessengerURIConstants").GALLERY_PATH) && (c.detailView = b("MessengerView").DETAIL.GALLERY);
        return b("MessengerStateProcessor").postprocess(c)
    }
    function e(a, c, d) {
        if (a)
            return b("MessengerView").MASTER.SEARCH_MESSAGES;
        else if (c && d)
            switch (d) {
            case "friend":
            case "non_friend":
                return b("MessengerView").MASTER.SEE_ALL_PEOPLE;
            case "page":
                return b("MessengerView").MASTER.SEE_ALL_PAGES;
            case "thread":
                return b("MessengerView").MASTER.SEE_ALL_GROUPS;
            default:
                return b("MessengerView").MASTER.SEARCH
            }
        else
            return b("MessengerView").MASTER.SEARCH
    }
    function m(a) {
        a = a.match(b("MessengerURIConstants").THREAD_PREFIX + "([^/]+)" + h);
        return a && decodeURIComponent(a[1])
    }
    function n(a) {
        a = a.match(b("MessengerURIConstants").FOLDERS_PATH + i + "([^/]+)" + b("MessengerURIConstants").THREAD_PREFIX + "([^/]+)" + h);
        return a && decodeURIComponent(a[1])
    }
}
), null);
__d("WorkGalahadChatChannelActions", ["MercuryFilters.re", "MessagingTag", "WorkGalahadDispatcher"], (function(a, b, c, d, e, f) {
    "use strict";
    f.changeFolder = a;
    f.changeFilter = c;
    function a(a) {
        b("WorkGalahadDispatcher").dispatch({
            type: "galahad/chat_change_folder",
            folder: a
        })
    }
    function c(a) {
        b("WorkGalahadDispatcher").dispatch({
            type: "galahad/chat_change_filter",
            filter: a
        })
    }
}
), null);
__d("MessengerActions", ["invariant", "Bootloader", "LogHistory", "MercuryIDs", "MessengerDispatcher", "MessengerThreadFetchLoggerUtil", "MessengerURISerializer", "MessengerView", "URI", "WorkGalahadChatChannelActions", "WorkGalahadSettings", "goURI", "keyMirror"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = b("keyMirror")({
        CANCEL_FILE_UPLOAD: null,
        EMPTY_FILES: null,
        LINK_PREVIEW: null,
        LOADED_SHARE_DATA: null,
        LOADING_SHARE_DATA: null,
        REMOVE_SHARE_PREVIEW: null,
        PREPARE_FILES_FOR_SEND: null,
        REPLACE_STATE: null,
        SELECT_THREAD: null,
        UPDATE_MDOT_ME: null,
        UPDATE_THREAD_TAG: null,
        UPLOAD_FILE_FAILED: null,
        UPLOADED_FILE: null
    }), j = b("LogHistory").getInstance("messenger_actions"), k = {
        Types: i,
        changeDetailView: function(a) {
            m(function(b) {
                return b.detailView !== a ? {
                    detailView: a
                } : null
            })
        },
        changeMasterView: function(a) {
            m(function(c) {
                if (c.masterView !== a) {
                    var d = {
                        masterView: a
                    };
                    c.masterView === b("MessengerView").MASTER.SEARCH && (d.query = void 0,
                    b("Bootloader").loadModules(["MessengerContentSearchFunnelLogger", "MessengerContentSearchFunnelLoggerConstants"], function(a, b) {
                        a && a.endFunnel(b.FUNNEL_LOGGER_TAGS.END_WITH_BACK_BUTTON)
                    }, "MessengerActions"));
                    return d
                }
                return null
            })
        },
        selectThread: function(a, c, d) {
            d === void 0 && (d = null);
            if (c === "meeting_room_page") {
                n(a);
                return
            }
            b("MessengerDispatcher").dispatch({
                type: i.SELECT_THREAD,
                threadID: a
            });
            m(function(c) {
                if (c.activeThreadID === a && d == null)
                    return null;
                var e = {
                    query: c.query,
                    activeThreadID: a,
                    detailView: b("MessengerView").DETAIL.THREAD,
                    mid: d
                };
                a && (b("MessengerThreadFetchLoggerUtil").markerStart(a),
                c.query !== void 0 && c.masterView !== b("MessengerView").MASTER.SEARCH && c.masterView !== b("MessengerView").MASTER.SEARCH_MESSAGES && (e.query = void 0,
                b("Bootloader").loadModules(["MessengerContentSearchFunnelLogger", "MessengerContentSearchFunnelLoggerConstants"], function(a, b) {
                    if (!a && !b)
                        return;
                    a.endFunnel(b.FUNNEL_LOGGER_TAGS.END_BY_CHANGING_THREADS)
                }, "MessengerActions")));
                return e
            })
        },
        changeState: function(a) {
            b("MessengerDispatcher").dispatch({
                type: i.REPLACE_STATE,
                nextState: a
            })
        },
        changeMDotMeReferral: function(a, c) {
            a === void 0 && (a = null),
            c === void 0 && (c = null),
            b("MessengerDispatcher").dispatch({
                type: k.Types.UPDATE_MDOT_ME,
                refCode: a,
                refThreadID: c
            })
        },
        changeThreadTag: function(a, c) {
            a === void 0 && (a = null),
            c === void 0 && (c = null),
            b("MessengerDispatcher").dispatch({
                type: k.Types.UPDATE_THREAD_TAG,
                messagingTags: a,
                threadID: c
            })
        },
        changeFolder: function(a, c) {
            b("WorkGalahadSettings").isGalahadEnabled ? b("WorkGalahadChatChannelActions").changeFolder(a) : m(function(b) {
                return b.folder !== a ? c ? {
                    folder: a,
                    folderKey: c
                } : {
                    folder: a
                } : null
            })
        },
        changeFilter: function(a) {
            b("WorkGalahadSettings").isGalahadEnabled ? b("WorkGalahadChatChannelActions").changeFilter(a) : m(function(b) {
                return b.filter !== a ? {
                    filter: a
                } : null
            })
        },
        changeMid: function(a) {
            m(function(b) {
                return b.mid !== a ? {
                    mid: a
                } : null
            })
        },
        changeID: function(a) {
            m(function(b) {
                return b.extraQueryParams.id !== a ? {
                    extraQueryParams: babelHelpers["extends"]({}, b.extraQueryParams, {
                        id: a
                    })
                } : null
            })
        },
        prepareFilesForSend: function(a, c, d) {
            j.debug("Add files from " + d, a);
            if (!a)
                return;
            b("MessengerDispatcher").dispatch({
                type: k.Types.PREPARE_FILES_FOR_SEND,
                threadID: a,
                files: c
            })
        },
        uploadedFile: function(a, c, d) {
            if (!a)
                return;
            b("MessengerDispatcher").dispatch({
                type: k.Types.UPLOADED_FILE,
                threadID: a,
                uploadID: c,
                payload: d
            })
        },
        cancelFileUpload: function(a, c) {
            if (!a)
                return;
            b("MessengerDispatcher").dispatch({
                type: k.Types.CANCEL_FILE_UPLOAD,
                threadID: a,
                uploadID: c
            })
        },
        uploadFileFailed: function(a, c) {
            if (!a)
                return;
            b("MessengerDispatcher").dispatch({
                type: k.Types.UPLOAD_FILE_FAILED,
                threadID: a,
                uploadID: c
            })
        },
        cleanFiles: function(a) {
            j.debug("clean files", a);
            if (!a)
                return;
            b("MessengerDispatcher").dispatch({
                type: k.Types.EMPTY_FILES,
                threadID: a
            })
        },
        loadingPreview: function(a, c) {
            b("MessengerDispatcher").dispatch({
                type: k.Types.LINK_PREVIEW,
                threadID: a,
                match: c
            })
        },
        loadingShareData: function(a) {
            b("MessengerDispatcher").dispatch({
                type: k.Types.LOADING_SHARE_DATA,
                threadID: a
            })
        },
        loadedShareData: function(a, c) {
            b("MessengerDispatcher").dispatch({
                type: k.Types.LOADED_SHARE_DATA,
                threadID: a,
                attachmentData: c
            })
        },
        removeSharePreview: function(a) {
            b("MessengerDispatcher").dispatch({
                type: k.Types.REMOVE_SHARE_PREVIEW,
                threadID: a
            })
        }
    };
    function l(a, b) {
        return a.detailView == null
    }
    function m(a) {
        var c = b("MessengerURISerializer").deserialize(new (h || (h = b("URI")))(window.location.href));
        a = a(c);
        var d = l(c, a);
        a && b("goURI")(b("MessengerURISerializer").serialize(Object.assign(c, a)), !1, d)
    }
    function n(a) {
        !a && g(0, 5146);
        a = b("MercuryIDs").getUserIDFromThreadID(a);
        !a && g(0, 5147);
        var c = new (h || (h = b("URI")))()
          , d = c.getQualifiedURI().getSubdomain();
        c.setDomain("facebook.com").setSubdomain(d).setPath("/" + a).setProtocol("https");
        window.open(c, "_blank")
    }
    e.exports = k
}
), null);
__d("MessengerDialogLayerShrinkOnHide", ["cx", "invariant", "CSSFade", "Layer", "SubscriptionsHandler", "clearTimeout", "setTimeout"], (function(a, b, c, d, e, f, g, h) {
    a = function() {
        function a(a) {
            this._layer = a,
            this._subscriptionsHandler = new (b("SubscriptionsHandler"))()
        }
        var c = a.prototype;
        c.enable = function() {
            this._subscription = this._layer.subscribe("starthide", this._handleStartHide.bind(this))
        }
        ;
        c.disable = function() {
            this._subscription && (this._subscription.unsubscribe(),
            this._subscription = null),
            this._subscriptionsHandler.release()
        }
        ;
        c._handleStartHide = function() {
            var a = !0
              , c = b("Layer").subscribe("show", function() {
                var b;
                (b = c) == null ? void 0 : b.unsubscribe();
                a = !1
            })
              , d = b("setTimeout")(function() {
                var b, d = this;
                (b = c) == null ? void 0 : b.unsubscribe();
                c = null;
                b = function() {
                    d._layer.finishHide()
                }
                ;
                a ? this._animate(b) : b()
            }
            .bind(this), 0);
            this._subscriptionsHandler.addSubscriptions({
                remove: function() {
                    b("clearTimeout")(d)
                }
            });
            return !1
        }
        ;
        c._animate = function(a) {
            var c = this._layer.getRoot();
            c != null || h(0, 70);
            var d = c.getElementsByClassName("_59s7");
            d && d[0] && d[0].classList.add("_2qby");
            b("CSSFade").hide(c, {
                callback: function() {
                    a()
                },
                duration: 200
            })
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("XMessengerDotComSettingsEditController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/settings/edit/", {})
}
), null);
__d("MessengerSettingsActions", ["AsyncRequest", "CurrentEnvironment", "MessengerDesktopNotificationPermissions", "MessengerDesktopNotifications", "MessengerDispatcher", "MessengerURIConstants", "XMessengerDotComSettingsEditController", "keyMirror"], (function(a, b, c, d, e, f) {
    "use strict";
    f.changeSettings = a;
    f.changeDesktopNotifs = c;
    var g = b("keyMirror")({
        CHANGE_SETTINGS: null,
        CHANGE_DESKTOP_NOTIFS: null
    });
    f.Types = g;
    function a(a) {
        var c = b("XMessengerDotComSettingsEditController").getURIBuilder().getURI();
        b("CurrentEnvironment").facebookdotcom && c.setPath(b("MessengerURIConstants").FACEBOOK_PREFIX + c.getPath());
        new (b("AsyncRequest"))().setData({
            settings: a
        }).setURI(c).send();
        b("MessengerDispatcher").dispatch({
            type: g.CHANGE_SETTINGS,
            newSettings: a
        })
    }
    function c(a, c) {
        a && !b("MessengerDesktopNotifications").isGranted() ? b("MessengerDesktopNotifications").requestPermission(function(d) {
            if (d !== b("MessengerDesktopNotificationPermissions").GRANTED) {
                b("MessengerDesktopNotifications").checkPermission() === b("MessengerDesktopNotificationPermissions").DENIED && (c && c());
                return
            }
            b("MessengerDispatcher").dispatch({
                type: g.CHANGE_DESKTOP_NOTIFS,
                desktopNotifsEnabled: a
            })
        }) : b("MessengerDispatcher").dispatch({
            type: g.CHANGE_DESKTOP_NOTIFS,
            desktopNotifsEnabled: a
        })
    }
}
), null);
__d("MessengerButtonReact.bs", ["cx", "bs_curry", "React", "Link.react", "bs_caml_option", "joinClasses", "bs_js_null_undefined"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function i(a, c, d) {
        if (a) {
            d.preventDefault();
            return 0
        } else if (c !== void 0)
            return b("bs_curry")._1(c, d);
        else
            return 0
    }
    function j(a) {
        if (a !== void 0)
            return {
                color: a
            }
    }
    function k(a, c, d, e, f) {
        c = "_3quh _30yy" + (c === 0 ? " _2t_" : "") + (c === 1 ? " _2u0" : "") + (c === 2 ? " _17u4" : "") + (f === 1 ? " _3ay_" : "") + (d ? " _4zab" : "") + (e ? " _fy2" : "");
        if (a !== void 0)
            return b("joinClasses")(c, a);
        else
            return c
    }
    function a(a) {
        var c = a.ariaLabel
          , d = a.ariaHidden
          , e = a.role
          , f = a.tabIndex
          , g = a.target
          , l = a.onClick
          , m = a.disabled
          , n = a.className
          , o = a.color
          , p = a.customColor
          , q = a.label
          , r = a.type
          , s = a.use
          , t = a.href
          , u = a.wrapperClassName;
        a = a.dataTestID;
        var v = m !== void 0 ? m : !1;
        m = p !== void 0 ? p : !1;
        p = s !== void 0 ? s : 0;
        s = u !== void 0 ? u : "";
        u = function(a) {
            return i(v, l, a)
        }
        ;
        n = k(n, r, v, m, p);
        r = j(o);
        if (t !== void 0) {
            m = {
                className: n,
                href: t,
                onClick: u,
                children: q
            };
            d !== void 0 && (m["aria-hidden"] = b("bs_caml_option").valFromOption(d));
            c !== void 0 && (m["aria-label"] = b("bs_caml_option").valFromOption(c));
            e !== void 0 && (m.role = b("bs_caml_option").valFromOption(e));
            r !== void 0 && (m.style = b("bs_caml_option").valFromOption(r));
            f !== void 0 && (m.tabIndex = b("bs_caml_option").valFromOption(f));
            g !== void 0 && (m.target = b("bs_caml_option").valFromOption(g));
            return h.jsx(b("Link.react"), m)
        } else {
            p = b("joinClasses")("_30vt", s);
            o = {
                children: q,
                className: n,
                onClick: u
            };
            d !== void 0 && (o["aria-hidden"] = b("bs_caml_option").valFromOption(d));
            c !== void 0 && (o["aria-label"] = b("bs_caml_option").valFromOption(c));
            e !== void 0 && (o.role = b("bs_caml_option").valFromOption(e));
            r !== void 0 && (o.style = b("bs_caml_option").valFromOption(r));
            f !== void 0 && (o.tabIndex = b("bs_caml_option").valFromOption(f));
            g !== void 0 && (o.target = b("bs_caml_option").valFromOption(g));
            t = h.jsx("button", o);
            m = h.cloneElement(t, {
                "data-testid": b("bs_js_null_undefined").fromOption(a)
            });
            return h.jsx("span", {
                children: m,
                className: p
            })
        }
    }
    c = a;
    f.handleLinkClick = i;
    f.elementStyle = j;
    f.interactionElementClassName = k;
    f.make = c
}
), null);
__d("MessengerButtonReact.re", ["react", "MessengerButtonReact.bs"], (function(a, b, c, d, e, f) {
    var g, h = g || b("react"), i = {
        primary: 0,
        secondary: 1,
        faded: 2
    }, j = {
        "default": 0,
        danger: 1
    };
    (function(a) {
        return null
    }
    );
    a = function(a) {
        a = {
            type: i[a.type],
            ariaHidden: a.ariaHidden,
            ariaLabel: a.ariaLabel,
            className: a.className,
            color: a.color,
            customColor: a.customColor,
            dataTestID: a.dataTestID,
            disabled: a.disabled,
            href: a.href,
            label: a.label,
            onClick: a.onClick,
            role: a.role,
            tabIndex: a.tabIndex,
            target: a.target,
            use: a.use == null ? void 0 : j[a.use],
            wrapperClassName: a.wrapperClassName
        };
        a = h.createElement(b("MessengerButtonReact.bs").make, a);
        return a
    }
    ;
    f.make = a
}
), null);
__d("MessengerBootloadedSecondarySearchLogger", ["Bootloader", "MessengerSecondarySearchFunnelConstants", "gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = []
      , h = ""
      , i = {
        LOCAL_CONTACTS: [],
        ORDERED_GCF_FRIENDLIST: [],
        SHORT_PROFILES: [],
        SUGGESTED_RECIPIENTS: []
    }
      , j = !1
      , k = !1;
    d = (c = b("MessengerSecondarySearchFunnelConstants")).EVENTS;
    var l = d.CLICK_OTHER_THREAD
      , m = d.END
      , n = d.IMPRESSIONS
      , o = d.START
      , p = d.QUERY_CHANGED
      , q = d.RESULT_SELECTED
      , r = d.SOURCE_ENDED
      , s = d.SOURCE_STARTED
      , t = d.TOKEN_REMOVED;
    f = c.END_ACTIONS;
    var u = f.ABANDON
      , v = f.SINGLE_RESULT_SELECTED;
    d = c.SOURCES;
    var w = d.SERVER
      , x = d.SHORT_PROFILES
      , y = d.SUGGESTED_RECIPIENTS
      , z = d.LOCAL_CONTACTS
      , A = d.LOCAL_AND_SERVER
      , B = d.ORDERED_GCF_FRIENDLIST
      , C = c.ENTRY_SURFACES.COMPOSER;
    function D(a) {
        if (i.SUGGESTED_RECIPIENTS.includes(a))
            return y;
        else if (i.ORDERED_GCF_FRIENDLIST.includes(a))
            return B;
        else if (i.SHORT_PROFILES.includes(a))
            return x;
        else if (i.LOCAL_CONTACTS.includes(a))
            return z;
        else
            return w
    }
    function a(a) {
        if (!b("gkx")("678592"))
            return;
        b("Bootloader").loadModules(["MessengerSecondarySearchFunnelLogger"], function(c) {
            switch (a.name) {
            case o:
                if (a.surface === C && k === !0) {
                    c.reenterSearch(a.loggingID);
                    break
                }
                j = !1;
                i = {
                    LOCAL_CONTACTS: [],
                    ORDERED_GCF_FRIENDLIST: [],
                    SHORT_PROFILES: [],
                    SUGGESTED_RECIPIENTS: []
                };
                c.startFunnel(a.client, a.surface, a.surface, null, a.loggingID);
                a.surface === C && (k = !0);
                break;
            case m:
                var d = a.end_reason;
                a.surface === b("MessengerSecondarySearchFunnelConstants").SEARCH_SURFACES.BROADCAST && (d = j ? v : u);
                c.endFunnel(b("MessengerSecondarySearchFunnelConstants").END_REASONS.ACTION, d, a.loggingID, a.threadID, a.isNewThread);
                k = !1;
                break;
            case n:
                d = a.entries.map(function(a) {
                    a.data_source = [D(a.result_fbid)];
                    return a
                });
                g = a.entries.map(function(a) {
                    return a.result_fbid
                });
                c.impressions(a.query, d, A, a.loggingID);
                break;
            case p:
                h = a.query;
                c.queryChanged(a.query, a.loggingID);
                break;
            case q:
                j = !0;
                d = D(a.id);
                var e = g.indexOf(a.id);
                c.resultSelected(a.id, e, a.type, a.query ? a.query : h, d, a.surface, a.loggingID, a.selectionType);
                break;
            case r:
                e = !a.query || a.query === h;
                switch (a.source) {
                case z:
                    i.LOCAL_CONTACTS = a.ids ? a.ids : [];
                    break;
                case y:
                    i.SUGGESTED_RECIPIENTS = a.ids ? a.ids : [];
                    break;
                case x:
                    i.SHORT_PROFILES = a.ids ? a.ids : [];
                    e = !0;
                    break;
                case B:
                    i.ORDERED_GCF_FRIENDLIST = a.ids ? a.ids : [];
                    e = !0;
                    break;
                default:
                    break
                }
                c.sourceEnded(a.query, a.numResults, a.source, a.status, e, a.loggingID);
                break;
            case s:
                c.sourceStarted(a.query, a.source, a.loggingID);
                break;
            case t:
                c.tokenRemoved(a.deletedIDs, a.clearedAll, a.loggingID);
                break;
            case l:
                c.unfocusSearch(a.loggingID);
                break
            }
        }, "MessengerBootloadedSecondarySearchLogger")
    }
    e.exports = {
        logSearchEvent: a
    }
}
), null);
__d("MNPlatformAttributionTags", [], (function(a, b, c, d, e, f) {
    a = "bnp:trigger:";
    f.ATTRIBUTION_TAGS_PREFIX = a;
    b = "customer_chat_plugin";
    f.CUSTOMER_CHAT_PLUGIN = b;
    c = "messengerdotcom";
    f.MESSENGERDOTCOM = c;
    d = "messenger_web";
    f.MESSENGER_WEB = d;
    e = "messenger_web_search";
    f.MESSENGER_WEB_SEARCH = e;
    a = "m_dot_me";
    f.M_DOT_ME = a
}
), null);
__d("MessengerStore", ["MessengerDispatcher", "mixInEventEmitter"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = b("MessengerDispatcher").register(this.__onDispatch.bind(this))
        }
        var c = a.prototype;
        c.getDispatchToken = function() {
            return this.$1
        }
        ;
        c.emitChange = function() {
            this.emit("change")
        }
        ;
        c.destroy = function() {
            b("MessengerDispatcher").unregister(this.$1)
        }
        ;
        return a
    }();
    b("mixInEventEmitter")(a, {
        change: !0
    });
    e.exports = a
}
), null);
__d("MessengerContentSearchFunnelLoggerConstants", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({
        BROWSE_MESSAGE_IN_THREAD: "browse_message_in_thread",
        CHANGE_QUERY: "change_query",
        END_CONTENT_SEARCH: "end_content_search",
        INITIATE_CONTENT_SEARCH: "initiate_content_search",
        LOAD_MORE_THREADS: "load_more_threads",
        NUM_BROWSE_ACTIONS_WITHIN_THREAD: "num_browse_actions_within_thread",
        SELECT_THREAD: "select_thread",
        THREAD_IMPRESSIONS: "thread_impressions",
        LOAD_MESSAGE_IN_THREAD: "load_message_in_thread",
        BROWSE_CONTEXT: "browse_context"
    });
    b = Object.freeze({
        SEARCH_FROM_INTEGRATED_MESSAGE_SEARCH: "search_from_integrated_message_search",
        SEARCH_WITHIN_THREAD: "search_within_thread",
        SEARCH_ALL_THREADS: "search_all_threads"
    });
    c = Object.freeze(babelHelpers["extends"]({}, b, {
        END_WITH_DONE_BUTTON: "end_with_done_button",
        END_WITH_X_BUTTON: "end_with_x_button",
        END_WITH_BACK_BUTTON: "end_with_back_button",
        END_BY_CHANGING_THREADS: "end_by_changing_threads"
    }));
    e.exports = {
        FUNNEL_NAME: "WWW_MESSENGER_CONTENT_SEARCH_FUNNEL",
        FUNNEL_LOGGER_EVENTS: a,
        FUNNEL_LOGGER_TAGS: c,
        ENTRY_SURFACES: b
    }
}
), null);
__d("PromiseUtil", ["Promise", "nullthrows", "promiseDone"], (function(a, b, c, d, e, f) {
    f.allSettled = a;
    f.allSettledInSeries = c;
    f.exponentialBackoff = d;
    f.forEach = e;
    f.forEachError = g;
    f.iterateUntil = h;
    f.pollUntilImpl = i;
    f.pollUntil = j;
    f.rateLimit = k;
    f.rateLimitWithLastResult = l;
    f.repeatUntil = m;
    f.repeatWhileErrorUntil = n;
    f.series = o;
    f.wait = p;
    f.waitAtMost = q;
    f.waitOrElse = r;
    function a(a) {
        var c = b("Promise").all(a);
        return b("Promise").all(a.map(function(a) {
            return b("Promise").resolve(a).then(void 0, function(a) {
                return void 0
            })
        })).then(function() {
            return c
        })
    }
    function c(a) {
        var c = [];
        return a.reduce(function(a, b) {
            return a.then(b).then(function() {
                return void 0
            }, function(a) {
                c.push(a);
                return void 0
            })
        }, b("Promise").resolve()).then(function() {
            if (c.length)
                throw c[0]
        })
    }
    function d(a, b, c) {
        b === void 0 && (b = Math.sqrt(2));
        c === void 0 && (c = 1);
        var d = c;
        c = function() {
            var a = d;
            d *= b;
            return a
        }
        ;
        return k(a, c)
    }
    function e(a, c) {
        return a.then(function(a) {
            return b("Promise").resolve(c(a)).then(function() {
                return a
            })
        })
    }
    function g(a, c) {
        return a.then(void 0, function(a) {
            return b("Promise").resolve(c(a)).then(function() {
                throw a
            })
        })
    }
    function h(a, c) {
        var d = function d(e) {
            return c(e) ? b("Promise").resolve(e) : b("Promise").resolve(a(e)).then(d)
        };
        return d
    }
    function i(a, c) {
        var d, e = new (b("Promise"))(function(b, e) {
            var f = function() {
                try {
                    var c = a();
                    c && b(c.value)
                } catch (a) {
                    e(a)
                }
            };
            d = setInterval(f, 1e3 * c)
        }
        );
        return e["finally"](function() {
            return clearInterval(b("nullthrows")(d))
        })
    }
    function j(a, b) {
        b === void 0 && (b = 1);
        return i(function() {
            var b = a();
            return b ? {
                value: b
            } : void 0
        }, b)
    }
    function k(a, b) {
        var c = []
          , d = void 0
          , e = 0;
        return function() {
            var f = b();
            for (var g = arguments.length, h = new Array(g), i = 0; i < g; i++)
                h[i] = arguments[i];
            c = h;
            d || (d = p(e + f - Date.now() / 1e3).then(function() {
                e = Date.now() / 1e3;
                d = void 0;
                return a.apply(void 0, c)
            }));
            return d
        }
    }
    function l(a, c) {
        var d = !1
          , e = void 0;
        return function() {
            d || (b("promiseDone")(p(c()), function() {
                return d = !1
            }),
            e = a.apply(void 0, arguments),
            d = !0);
            return e
        }
    }
    function m(a, c) {
        var d = function d() {
            return b("Promise").resolve(a()).then(function(a) {
                return c(a) ? b("Promise").resolve(a) : d()
            })
        };
        return d
    }
    function n(a, c, d) {
        var e = function e() {
            return b("Promise").resolve(a()).then(function(a) {
                c(a);
                return b("Promise").resolve(a)
            }, function(a) {
                return d(a) ? e() : b("Promise").reject(a)
            })
        };
        return e
    }
    function o(a, c) {
        c = c;
        return a.reduce(function(a, b) {
            return a.then(b)
        }, b("Promise").resolve(c))
    }
    function p(a) {
        return 0 < a ? new (b("Promise"))(function(b, c) {
            return setTimeout(b, 1e3 * a)
        }
        ) : b("Promise").resolve()
    }
    function q(a, b) {
        return r(a, b, function() {
            throw new Error("Promise timed out")
        })
    }
    function r(a, c, d) {
        var e = !1;
        return b("Promise").race([a.then(function(a) {
            e = !0;
            return a
        }, function(a) {
            e = !0;
            throw a
        }), p(c).then(function() {
            return e ? void 0 : d()
        })])
    }
}
), null);
__d("MessengerSpinnerReact.bs", ["cx", "ix", "fbt", "React", "Image.react", "joinClasses"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = b("React")
      , k = h("86853")
      , l = h("86857")
      , m = h("86854");
    function n(a) {
        var c = a.className
          , d = a.color
          , e = a.size;
        a = a.center;
        var f = c !== void 0 ? c : ""
          , g = d !== void 0 ? d : "blue"
          , h = e !== void 0 ? e : 24;
        c = a !== void 0 ? a : !1;
        var n = function(a) {
            if (h === 24)
                if (g === "blue")
                    return k;
                else
                    return l;
            else
                return m
        };
        d = function(a) {
            return j.jsx(b("Image.react"), {
                className: b("joinClasses")(f, "_3u55 _3qh2"),
                "aria-label": i._("\u0110ang t\u1ea3i..."),
                "aria-busy": !0,
                src: n(0),
                height: h,
                width: h
            })
        }
        ;
        if (c)
            return j.jsx("div", {
                children: d(0),
                className: "_8a6k"
            });
        else
            return d(0)
    }
    function a(a) {
        var b = a.className
          , c = a.color
          , d = a.size;
        a = a.center;
        return n({
            className: b == null ? "" : b,
            color: c == null ? "blue" : c,
            size: d == null ? 24 : d,
            center: a == null ? !1 : a
        })
    }
    c = 32;
    d = 24;
    e = n;
    f.large_size = c;
    f.medium_size = d;
    f.blue_src = k;
    f.grey_src = l;
    f.large_blue_src = m;
    f.make = e;
    f.jsComponent = a
}
), null);
__d("MessengerSpinner.react", ["MessengerSpinnerReact.bs"], (function(a, b, c, d, e, f) {
    e.exports = b("MessengerSpinnerReact.bs").make,
    e.exports.large_size = b("MessengerSpinnerReact.bs").large_size,
    e.exports.medium_size = b("MessengerSpinnerReact.bs").medium_size
}
), null);
__d("ReasonReactCompat.bs", ["ReasonReact.bs"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("ReasonReact.bs").wrapJsForReason;
    c = b("ReasonReact.bs").wrapReasonForJs;
    f.wrapReactForReasonReact = a;
    f.wrapReasonReactForReact = c
}
), null);
__d("Image.bs", ["bs_caml_option", "Image.react", "ReasonReactCompat.bs"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a, c, d, e, f, g, h, i, j, k) {
        var l = {};
        a !== void 0 && (l.className = b("bs_caml_option").valFromOption(a));
        c !== void 0 && (l.alt = b("bs_caml_option").valFromOption(c));
        d !== void 0 && (l["aria-label"] = b("bs_caml_option").valFromOption(d));
        e !== void 0 && (l["aria-busy"] = b("bs_caml_option").valFromOption(e));
        f !== void 0 && (l.src = b("bs_caml_option").valFromOption(f));
        g !== void 0 && (l.height = b("bs_caml_option").valFromOption(g));
        h !== void 0 && (l.title = b("bs_caml_option").valFromOption(h));
        i !== void 0 && (l.width = b("bs_caml_option").valFromOption(i));
        j !== void 0 && (l.style = b("bs_caml_option").valFromOption(j));
        return b("ReasonReactCompat.bs").wrapReactForReasonReact(b("Image.react"), l, k)
    }
    c = {};
    f.make = a;
    f.Jsx3 = c
}
), null);
__d("ImageSourceType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        PROFILE_PICTURE: "profile_picture",
        IMAGE: "image"
    });
    e.exports = a
}
), null);
__d("ImageSourceRequest", ["CurrentUser", "ImageSourceType", "KeyedCallbackManager", "MercuryServerDispatcher"], (function(a, b, c, d, e, f) {
    a = function() {
        "use strict";
        function a() {
            this._request = {
                fbid: null,
                type: null,
                width: null,
                height: null,
                resize_mode: null
            },
            this._callback = null
        }
        var c = a.prototype;
        c.setFBID = function(a) {
            this._request.fbid = a;
            return this
        }
        ;
        c.setType = function(a) {
            if (![b("ImageSourceType").PROFILE_PICTURE, b("ImageSourceType").IMAGE].includes(a))
                throw new TypeError("ImageSourceRequest.setType: invalid type " + a);
            this._request.type = a;
            return this
        }
        ;
        c.setDimensions = function(a, b) {
            this._request.width = a;
            this._request.height = b;
            return this
        }
        ;
        c.setResizeMode = function(a) {
            if (!["p", "s"].includes(a))
                throw new TypeError("ImageSourceRequest.setResizeMode: invalid resize mode " + a);
            this._request.resize_mode = a;
            return this
        }
        ;
        c.setCallback = function(a) {
            this._callback = a;
            return this
        }
        ;
        c.send = function() {
            if (!this._request.fbid || !this._request.width || !this._request.height || !this._request.type || !this._request.resize_mode || !this._callback)
                throw new Error("ImageSourceRequest: You must set all the fields");
            var a = h()
              , c = i(this._request);
            a.executeOrEnqueue(c, this._callback);
            if (a.getUnavailableResourcesFromRequest(c).length === 1) {
                b("MercuryServerDispatcher").trySend("/ajax/image_source.php", {
                    requests: [this._request]
                });
                return !0
            }
            return !1
        }
        ;
        return a
    }();
    var g = null;
    function h() {
        if (g)
            return g;
        var a = new (b("KeyedCallbackManager"))();
        g = a;
        b("MercuryServerDispatcher").registerEndpoints({
            "/ajax/image_source.php": {
                request_user_id: b("CurrentUser").getID(),
                mode: b("MercuryServerDispatcher").BATCH_DEFERRED_MULTI,
                batch_function: function(a, b) {
                    var c;
                    (c = a.requests).push.apply(c, b.requests);
                    return a
                },
                handler: function(b, c) {
                    c = c.getData().requests;
                    for (var d = 0; d < c.length; ++d)
                        a.setResource(i(c[d]), b[d])
                }
            }
        });
        return a
    }
    function i(a) {
        return [a.fbid, a.type, a.width, a.height, a.resize_mode].join("|")
    }
    e.exports = a
}
), null);
__d("PhotoResizeModeConst", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        CONTAIN: "s",
        COVER: "p"
    });
    e.exports = a
}
), null);
__d("MessengerParticipantsImages.bs", ["bs_curry", "bs_js_dict", "MercuryIDs", "bs_caml_option", "MercuryAssert", "ImageSourceType", "ImmutableObject", "bs_js_null_undefined", "ImageSourceRequest", "PhotoResizeModeConst", "MessengerParticipants.bs", "MercuryParticipantsConstants"], (function(a, b, c, d, e, f) {
    "use strict";
    function g(a, c, d) {
        new (b("ImageSourceRequest"))().setFBID(b("bs_js_null_undefined").fromOption(b("bs_caml_option").nullable_to_opt(b("MercuryIDs").getUserIDFromParticipantID(a)))).setType(b("ImageSourceType").PROFILE_PICTURE).setDimensions(c, c).setResizeMode(b("PhotoResizeModeConst").COVER).setCallback(function(c) {
            return b("bs_curry")._2(d, a, c)
        }).send();
        return 0
    }
    function h(a, c, d, e) {
        b("MercuryAssert").allParticipantIDs(a);
        var f = {
            contents: !1
        }
          , h = b("MessengerParticipants.bs").getMulti(a, function(e) {
            var h = {}
              , i = function(d, e) {
                h[d] = e;
                if (!f.contents && a.length === Object.keys(h).length)
                    return b("bs_curry")._1(c, h);
                else
                    return 0
            }
              , j = function(a, c) {
                var d = b("bs_js_dict").get(e, a);
                d !== void 0 && (e[a] = b("ImmutableObject").set(b("bs_caml_option").valFromOption(d), {
                    big_image_src: c.uri
                }));
                return i(a, c.uri)
            };
            Object.keys(e).map(function(a) {
                return a
            }).forEach(function(a) {
                var c = b("bs_js_dict").get(e, a);
                if (c !== void 0) {
                    c = b("bs_caml_option").valFromOption(c);
                    var f = d === b("MercuryParticipantsConstants").BIG_IMAGE_SIZE ? b("bs_caml_option").nullable_to_opt(c.big_image_src) : void 0;
                    if (f !== void 0)
                        return i(c.id, f);
                    else
                        return g(a, d, j)
                } else
                    return g(a, d, j)
            });
            return 0
        });
        return {
            remove: function(a) {
                f.contents = !0;
                if (h == null)
                    return 0;
                else
                    return b("MessengerParticipants.bs").removeCallback(h)
            }
        }
    }
    function i(a, c, d) {
        return h(a, c, b("MercuryParticipantsConstants").BIG_IMAGE_SIZE, 0)
    }
    function a(a, c) {
        return i(a, function(d) {
            return b("bs_curry")._1(c, a.map(function(a) {
                return b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(d, a))
            }))
        }, 0)
    }
    function c(a, c, d) {
        return h(a, function(d) {
            return b("bs_curry")._1(c, a.map(function(a) {
                return b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(d, a))
            }))
        }, d, 0)
    }
    f.getBigImageMultiWithSize = h;
    f.getBigImageMulti = i;
    f.getOrderedBigImageMulti = a;
    f.getOrderedBigImageMultiWithSize = c
}
), null);
__d("MessengerParticipantsImages.re", ["bs_curry", "MessengerParticipantsImages.bs"], (function(a, b, c, d, e, f) {
    a = function(a, c) {
        a = b("bs_curry")._4(b("MessengerParticipantsImages.bs").getBigImageMultiWithSize, a.ids, a.callback, a.size, c);
        return a
    }
    ;
    f.getBigImageMultiWithSize = a;
    c = function(a, c) {
        a = b("bs_curry")._3(b("MessengerParticipantsImages.bs").getBigImageMulti, a.ids, a.callback, c);
        return a
    }
    ;
    f.getBigImageMulti = c;
    d = function(a, c) {
        a = b("bs_curry")._2(b("MessengerParticipantsImages.bs").getOrderedBigImageMulti, a, c);
        return a
    }
    ;
    f.getOrderedBigImageMulti = d;
    e = function(a, c, d) {
        a = b("bs_curry")._3(b("MessengerParticipantsImages.bs").getOrderedBigImageMultiWithSize, a, c, d);
        return a
    }
    ;
    f.getOrderedBigImageMultiWithSize = e
}
), null);
__d("MessengerSearchActions", ["MessengerDispatcher", "MessengerURISerializer", "MessengerView", "URI", "goURI", "keyMirror", "qex"], (function(a, b, c, d, e, f) {
    "use strict";
    f.changeQuery = a;
    f.changeQuerySeeAll = j;
    f.changeQueryAll = k;
    f.searchForMessagesInAThread = c;
    f.loadMoreResults = d;
    f.enterUniversalSearch = e;
    f.enterMessageSearch = l;
    f.enterSeeAllSearch = m;
    f.exitMessageSearch = n;
    f.exitSeeAllSearch = o;
    var g, h = b("keyMirror")({
        ENTER_UNIVERSAL_SEARCH: null,
        ENTER_MESSAGE_SEARCH: null,
        ENTER_SEE_ALL_SEARCH: null,
        EXIT_MESSAGE_SEARCH: null,
        EXIT_SEE_ALL_SEARCH: null,
        LOAD_MORE_RESULTS: null
    });
    f.Types = h;
    var i = b("qex")._("1097094") ? b("MessengerView").MASTER.SEARCH_MESSAGES : b("MessengerView").MASTER.SEARCH;
    function a(a) {
        q(function(b) {
            return b.query !== a ? {
                query: a
            } : null
        })
    }
    function j(a, c) {
        q(function(d) {
            if (d.queryAll !== a)
                switch (c) {
                case "message":
                    return {
                        query: a,
                        masterView: i
                    };
                case "friend":
                case "non_friend":
                    return {
                        query: a,
                        masterView: b("MessengerView").MASTER.SEE_ALL_PEOPLE,
                        seeAllType: c
                    };
                case "page":
                    return {
                        query: a,
                        masterView: b("MessengerView").MASTER.SEE_ALL_PAGES,
                        seeAllType: c
                    };
                case "thread":
                    return {
                        query: a,
                        masterView: b("MessengerView").MASTER.SEE_ALL_GROUPS,
                        seeAllType: c
                    }
                }
            return null
        })
    }
    function k(a) {
        q(function(b) {
            return b.queryAll !== a ? {
                query: a,
                masterView: i
            } : null
        })
    }
    function c(a, b) {
        var c = {
            query: b,
            serverThreadID: a,
            activeThreadID: a,
            masterView: i
        };
        q(function(a) {
            return c
        })
    }
    function d() {
        b("MessengerDispatcher").dispatch({
            type: h.LOAD_MORE_RESULTS
        })
    }
    function e() {
        b("MessengerDispatcher").dispatch({
            type: h.ENTER_UNIVERSAL_SEARCH
        }),
        q(function(a) {
            return {
                masterView: b("MessengerView").MASTER.SEARCH
            }
        })
    }
    function l() {
        b("MessengerDispatcher").dispatch({
            type: h.ENTER_MESSAGE_SEARCH
        })
    }
    function m() {
        b("MessengerDispatcher").dispatch({
            type: h.ENTER_SEE_ALL_SEARCH
        })
    }
    function n() {
        k(""),
        b("MessengerDispatcher").dispatch({
            type: h.EXIT_MESSAGE_SEARCH
        })
    }
    function o() {
        j(null, null),
        b("MessengerDispatcher").dispatch({
            type: h.EXIT_SEE_ALL_SEARCH
        })
    }
    function p(a, b) {
        return a.detailView == null
    }
    function q(a) {
        var c = b("MessengerURISerializer").deserialize(new (g || (g = b("URI")))(window.location.href));
        a = a(c);
        var d = p(c, a);
        a && b("goURI")(b("MessengerURISerializer").serialize(Object.assign(c, a)), !1, d)
    }
}
), null);
__d("MessengerTypeaheadUtils", ["ix", "fbt", "MessengerEnvironment", "ReactDOM", "SearchableEntry", "asset", "gkx", "immutable", "mapObject", "qex"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    f.sortEntries = a;
    f.sortEntriesWithoutPages = c;
    f.sortEntriesWithoutGroupsOrViewer = d;
    f.getEntryOrder = e;
    f.orderEntries = q;
    f.buildSingleSection = r;
    f.buildListSections = s;
    f.buildCustomSection = t;
    f.areSectionsEqual = u;
    f.scrollEntryIntoView = v;
    f.getMessageSearchEntry = w;
    f.isMessageSearchEntry = x;
    var i, j = b("immutable").OrderedMap, k = 500, l = 100, m = "__special_search_entry__", n = ["search", "friend", "fb4c", "message", "thread", "meeting_room_page", "internal_bot_page", "non_friend", "page", "game"], o = ["search", "friend", "fb4c", "message", "thread", "meeting_room_page", "internal_bot_page", "page", "non_friend", "game"], p = (a = {},
    a.search = {
        header: ""
    },
    a.friend = {
        header: h._("Ng\u01b0\u1eddi li\u00ean h\u1ec7")
    },
    a.fb4c = {
        header: h._("\u0110\u1ed3ng nghi\u1ec7p")
    },
    a.message = {
        header: h._("Tin nh\u1eafn")
    },
    a.thread = {
        header: h._("Cu\u1ed9c tr\u00f2 chuy\u1ec7n nh\u00f3m")
    },
    a.page = {
        header: h._("Doanh nghi\u1ec7p")
    },
    a.meeting_room_page = {
        header: h._("Ph\u00f2ng h\u1ecdp")
    },
    a.internal_bot_page = {
        header: h._("Bot")
    },
    a.non_friend = {
        header: h._("Ng\u01b0\u1eddi kh\u00e1c")
    },
    a.game = {
        header: h._("Tr\u00f2 ch\u01a1i")
    },
    a);
    function a(a, c) {
        var d = []
          , e = []
          , f = []
          , g = []
          , h = []
          , i = []
          , j = []
          , k = []
          , l = []
          , m = []
          , n = [];
        a.forEach(function(a) {
            switch (a.getType()) {
            case "friend":
                e.push(a);
                break;
            case "fb4c":
                f.push(a);
                break;
            case "guest":
                g.push(a);
                break;
            case "message":
                h.push(a);
                break;
            case "thread":
                i.push(a);
                break;
            case "page":
            case "commerce_page":
                k.push(a);
                break;
            case "non_friend":
                j.push(a);
                break;
            case "meeting_room_page":
                l.push(a);
                break;
            case "internal_bot_page":
                m.push(a);
                break;
            case "search":
                d.push(a);
                break;
            case "game":
                n.push(a);
                break
            }
        });
        if (b("qex")._("882163")) {
            c = b("qex")._("899030");
            a = c === 2 || c === 3 ? k.slice(0, c) : k;
            return d.concat(e, f, g, h, i, l, m, a, j, n)
        }
        return d.concat(e, f, g, h, i, l, m, j, k, n)
    }
    function c(a) {
        var b = []
          , c = []
          , d = []
          , e = [];
        a.forEach(function(a) {
            switch (a.getType()) {
            case "friend":
                b.push(a);
                break;
            case "fb4c":
                c.push(a);
                break;
            case "thread":
                d.push(a);
                break;
            case "non_friend":
                e.push(a);
                break
            }
        });
        return b.concat(c, d, e)
    }
    function d(a, b) {
        var c = []
          , d = []
          , e = [];
        a.forEach(function(a) {
            if (a.getUniqueID() === b)
                return;
            switch (a.getType()) {
            case "friend":
                c.push(a);
                break;
            case "fb4c":
                d.push(a);
                break;
            case "non_friend":
                e.push(a);
                break
            }
        });
        return c.concat(d, e)
    }
    function e(a, c) {
        if (c == null)
            if (b("qex")._("882163"))
                return o;
            else
                return n;
        else
            return c
    }
    function q(a, b) {
        var c = this
          , d = [];
        this.getEntryOrder(b).filter(function(a) {
            return a !== "search"
        }).concat("search").forEach(function(b) {
            return d.push.apply(d, a.filter(function(a) {
                return c.areSectionsEqual(a.getType(), b)
            }))
        });
        return d
    }
    function r(a) {
        return j([[[""], a]])
    }
    function s(a, c, d) {
        if (!a.length)
            return j();
        d = this.getEntryOrder(c, d);
        var e = (i || (i = b("mapObject")))(p, function(a) {
            return babelHelpers["extends"]({}, a, {
                entries: []
            })
        });
        e.commerce_page = e.page;
        var f = b("qex")._("861958");
        c === "" && f === !0 && (e.friend.header = h._("G\u1ee3i \u00fd"));
        a.forEach(function(a) {
            var b = a.getType();
            e[b] && e[b].entries.push(a)
        });
        return j(d.filter(function(a) {
            return e[a].entries.length
        }).map(function(a) {
            return [[e[a].header, a], e[a].entries]
        }))
    }
    function t(a, b) {
        var c;
        return c = {},
        c[a] = b,
        c
    }
    function u(a, b) {
        return a === "commerce_page" ? b === "commerce_page" || b === "page" : a === b
    }
    function v(a, c) {
        var d = b("ReactDOM").findDOMNode(c)
          , e = c.getScrollTop()
          , f = a.offsetTop - e;
        d = d.offsetHeight - a.offsetHeight;
        a = Math.abs(d - f);
        f >= d && a <= l ? c.scrollToPosition(e + f - d, !0, {
            duration: k
        }) : f < 0 && a <= d + l && c.scrollToPosition(e + f, !0, {
            duration: k
        })
    }
    function w(a) {
        return b("gkx")("860320") || !b("MessengerEnvironment").messengerui || a.length < 2 ? null : new (b("SearchableEntry"))({
            uniqueID: m,
            title: h._("T\u00ecm ki\u1ebfm tin nh\u1eafn cho \"{queryString}\"", [h._param("queryString", a)]),
            photo: g("465522"),
            type: "search"
        })
    }
    function x(a) {
        return a.getUniqueID() === m
    }
}
), null);
__d("MessengerTabIndices", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({
        NEW_MESSAGE_TOKENIZER: 9998,
        GROUP_NAME_INPUT: 9999,
        COMPOSER_INPUT: 1e4
    });
    e.exports = a
}
), null);
__d("MessengerComposeViewHeader.react", ["cx", "fbt", "ImmutableObject", "MessengerButtonReact.re", "MessengerDotComAndInboxM4Check.bs", "MessengerGraphQLTokenizer.react", "MessengerTabIndices", "React", "clearImmediate", "gkx", "immutable", "joinClasses", "prop-types", "setImmediate"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React")
      , j = 320;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.state = {
                tokenizerContext: null,
                excludeGroups: !1,
                excludePages: !1,
                forGroup: !1
            },
            d.$1 = null,
            d.$2 = function() {
                d.$1 = b("setImmediate")(function() {
                    d.refs.tokenizer && d.refs.tokenizer.focusInput()
                })
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            this.$2(),
            this.setState({
                tokenizerContext: this.refs.tokenizerContext
            })
        }
        ;
        d.componentDidUpdate = function(a) {
            this.props.recipients !== a.recipients && this.props.onResize()
        }
        ;
        d.UNSAFE_componentWillReceiveProps = function(a) {
            a.recipients !== this.props.recipients && (a.recipients.size === 0 ? this.setState({
                excludeGroups: !1,
                excludePages: !1,
                forGroup: !1
            }) : a.isWorkUser ? this.setState({
                excludeGroups: !0,
                excludePages: !1,
                forGroup: !0
            }) : this.setState({
                excludeGroups: !0,
                excludePages: !0,
                forGroup: !0
            }))
        }
        ;
        d.componentWillUnmount = function() {
            this.$1 && b("clearImmediate")(this.$1)
        }
        ;
        d.render = function() {
            var a = {
                enableMessageSearch: !1,
                hasHoverState: !0,
                originalEntryIDs: b("immutable").Set(),
                scrollableViewClassName: "_2y8_",
                shouldQueryInternalBot: !0,
                shouldQueryVCEndpoint: !1,
                width: j,
                customResultFilterFn: this.props.isWorkUser ? function(a) {
                    return a.getAuxiliaryData().isWorkUser === !0 && a.getAuxiliaryData().isActiveAccount === !1 ? !1 : !0
                }
                : function() {
                    return !0
                }
            };
            return i.jsxs("div", {
                className: b("joinClasses")("_2y8y" + (b("MessengerDotComAndInboxM4Check.bs").yes ? " _6zw0" : "") + " _5l-3", this.props.className),
                onClick: this.$2,
                role: "presentation",
                children: [i.jsx("div", {
                    className: "_2y8z",
                    ref: b("gkx")("678607") ? "tokenizerContext" : "",
                    children: h._("\u0110\u1ebfn:")
                }), i.jsxs("div", {
                    className: "_66s6",
                    children: [i.jsx(b("MessengerGraphQLTokenizer.react"), babelHelpers["extends"]({
                        autoFocus: !0,
                        className: "_2y8-",
                        context: this.state.tokenizerContext,
                        entries: this.props.recipients,
                        excludeGroups: this.props.excludeGroups || this.state.excludeGroups,
                        excludePages: this.props.excludePages || this.state.excludePages,
                        forGroup: this.state.forGroup,
                        forceHideClearButton: this.props.forceHideClearButton,
                        onAddEntryAttempt: this.props.onAddRecipient,
                        onClear: this.props.onClear,
                        onRemoveEntryAttempt: this.props.onRemoveRecipient,
                        placeholder: h._("Nh\u1eadp t\u00ean m\u1ed9t ng\u01b0\u1eddi ho\u1eb7c m\u1ed9t nh\u00f3m"),
                        ref: "tokenizer",
                        tabIndex: this.props.tabIndex == null ? b("MessengerTabIndices").NEW_MESSAGE_TOKENIZER : this.props.tabIndex,
                        useLayer: !0,
                        viewer: this.props.viewer
                    }, a)), b("gkx")("678607") ? null : i.jsx("div", {
                        ref: "tokenizerContext"
                    })]
                }), this.$3()]
            })
        }
        ;
        d.$3 = function() {
            return this.props.shouldShowCreateGroupButton ? i.jsx(b("MessengerButtonReact.re").make, {
                className: "_6wh5",
                label: h._("T\u1ea1o \u0111o\u1ea1n chat m\u1edbi"),
                dataTestID: "create_new_chat_button",
                onClick: this.props.onCreateGroupButtonClicked,
                role: "button",
                tabIndex: 0,
                type: "primary"
            }) : null
        }
        ;
        return c
    }(i.PureComponent);
    e.exports = a;
    a.propTypes = {
        forceHideClearButton: (c = b("prop-types")).bool.isRequired,
        onAddRecipient: c.func.isRequired,
        onClear: c.func,
        onRemoveRecipient: c.func.isRequired,
        onResize: c.func.isRequired,
        recipients: c.instanceOf(b("immutable").List).isRequired,
        thread: c.instanceOf(b("ImmutableObject")),
        viewer: c.string.isRequired,
        isWorkUser: c.bool.isRequired,
        shouldShowCreateGroupButton: c.bool,
        onCreateGroupButtonClicked: c.func,
        excludePages: c.bool,
        excludeGroups: c.bool,
        tabIndex: c.number
    };
    a.defaultProps = {
        shouldShowCreateGroupButton: !1,
        isWorkUser: !1,
        excludeGroups: !1,
        excludePages: !1
    }
}
), null);
__d("bs_belt_List", ["bs_curry", "bs_belt_Array", "bs_caml_option", "bs_belt_SortArray"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a) {
        if (a)
            return b("bs_caml_option").some(a[0])
    }
    function c(a) {
        if (a)
            return a[0];
        else
            throw new Error("headExn")
    }
    function d(a) {
        if (a)
            return a[1]
    }
    function e(a) {
        if (a)
            return a[1];
        else
            throw new Error("tailExn")
    }
    function g(a, b) {
        return [b, a]
    }
    function h(a, c) {
        if (c < 0)
            return;
        else {
            a = a;
            c = c;
            while (!0) {
                var d = c
                  , e = a;
                if (e)
                    if (d === 0)
                        return b("bs_caml_option").some(e[0]);
                    else {
                        c = d - 1 | 0;
                        a = e[1];
                        continue
                    }
                else
                    return
            }
        }
    }
    function i(a, b) {
        if (b < 0)
            throw new Error("getExn");
        a = a;
        b = b;
        while (!0) {
            var c = b
              , d = a;
            if (d)
                if (c === 0)
                    return d[0];
                else {
                    b = c - 1 | 0;
                    a = d[1];
                    continue
                }
            else
                throw new Error("getExn")
        }
    }
    function j(a, b, c, d) {
        while (!0) {
            var e = d
              , f = c
              , g = b;
            if (g) {
                var h = g[1];
                g = g[0];
                var i = [g, 0];
                if (a(g)) {
                    f[1] = i;
                    c = i;
                    b = h;
                    continue
                } else {
                    e[1] = i;
                    d = i;
                    b = h;
                    continue
                }
            } else
                return 0
        }
    }
    function k(a, b, c) {
        while (!0) {
            var d = c
              , e = b
              , f = a;
            if (f) {
                var g = f[0]
                  , h = [g[0], 0];
                g = [g[1], 0];
                e[1] = h;
                d[1] = g;
                c = g;
                b = h;
                a = f[1];
                continue
            } else
                return 0
        }
    }
    function l(a, b) {
        while (!0) {
            var c = b
              , d = a;
            if (d) {
                var e = [d[0], 0];
                c[1] = e;
                b = e;
                a = d[1];
                continue
            } else
                return c
        }
    }
    function m(a, b, c) {
        while (!0) {
            var d = c
              , e = b;
            if (e) {
                var f = e[1];
                e = e[0];
                if (a(e)) {
                    e = [e, 0];
                    d[1] = e;
                    c = e;
                    b = f;
                    continue
                } else {
                    b = f;
                    continue
                }
            } else
                return 0
        }
    }
    function aa(a, b, c, d) {
        while (!0) {
            var e = d
              , f = c
              , g = b;
            if (g) {
                var h = g[1];
                g = g[0];
                if (a(g, e)) {
                    g = [g, 0];
                    f[1] = g;
                    d = e + 1 | 0;
                    c = g;
                    b = h;
                    continue
                } else {
                    d = e + 1 | 0;
                    b = h;
                    continue
                }
            } else
                return 0
        }
    }
    function ba(a, c, d) {
        while (!0) {
            var e = d
              , f = c;
            if (f) {
                var g = f[1];
                f = a(f[0]);
                if (f !== void 0) {
                    f = [b("bs_caml_option").valFromOption(f), 0];
                    e[1] = f;
                    d = f;
                    c = g;
                    continue
                } else {
                    c = g;
                    continue
                }
            } else
                return 0
        }
    }
    function ca(a, b, c, d) {
        while (!0) {
            var e = c
              , f = a;
            if (f) {
                var g = f[1];
                f = f[0];
                if (d(f[0], b)) {
                    e[1] = g;
                    return !0
                } else {
                    f = [f, 0];
                    e[1] = f;
                    c = f;
                    a = g;
                    continue
                }
            } else
                return !1
        }
    }
    function da(b, c, d, e, a) {
        while (!0) {
            var f = e
              , g = b;
            if (g) {
                var h = g[1];
                g = g[0];
                if (a(g[0], c)) {
                    f[1] = [[c, d], h];
                    return !0
                } else {
                    g = [g, 0];
                    f[1] = g;
                    e = g;
                    b = h;
                    continue
                }
            } else
                return !1
        }
    }
    function ea(a, b, c) {
        while (!0) {
            var d = b
              , e = a;
            if (e) {
                var f = [c(e[0]), 0];
                d[1] = f;
                b = f;
                a = e[1];
                continue
            } else
                return 0
        }
    }
    function fa(a, b, c) {
        while (!0) {
            var d = c
              , e = b
              , f = a;
            if (f && e) {
                var g = [[f[0], e[0]], 0];
                d[1] = g;
                c = g;
                b = e[1];
                a = f[1];
                continue
            } else
                return 0
        }
    }
    function ga(a, b, c, d) {
        while (!0) {
            var e = d
              , f = c
              , g = b;
            if (g && f) {
                var h = [a(g[0], f[0]), 0];
                e[1] = h;
                d = h;
                c = f[1];
                b = g[1];
                continue
            } else
                return 0
        }
    }
    function ha(a, b, c, d) {
        while (!0) {
            var e = d
              , f = c
              , g = b;
            if (f) {
                var h = [a(g, f[0]), 0];
                e[1] = h;
                d = h;
                c = f[1];
                b = g + 1 | 0;
                continue
            } else
                return 0
        }
    }
    function ia(a, b, c) {
        while (!0) {
            var d = c
              , e = b
              , f = a;
            if (f === 0)
                return !0;
            else if (e) {
                var g = [e[0], 0];
                d[1] = g;
                c = g;
                b = e[1];
                a = f - 1 | 0;
                continue
            } else
                return !1
        }
    }
    function ja(a, b, c) {
        while (!0) {
            var d = c
              , e = b
              , f = a;
            if (f === 0)
                return e;
            else if (e) {
                var g = [e[0], 0];
                d[1] = g;
                c = g;
                b = e[1];
                a = f - 1 | 0;
                continue
            } else
                return
        }
    }
    function ka(a, b) {
        if (b < 0)
            return;
        else if (b === 0)
            return 0;
        else if (a) {
            var c = [a[0], 0];
            b = ia(b - 1 | 0, a[1], c);
            if (b)
                return c;
            else
                return
        } else
            return
    }
    function la(a, b) {
        if (b < 0)
            return;
        else {
            a = a;
            b = b;
            while (!0) {
                var c = b
                  , d = a;
                if (c === 0)
                    return d;
                else if (d) {
                    b = c - 1 | 0;
                    a = d[1];
                    continue
                } else
                    return
            }
        }
    }
    function ma(a, b) {
        if (b < 0)
            return;
        else if (b === 0)
            return [0, a];
        else if (a) {
            var c = [a[0], 0];
            b = ja(b - 1 | 0, a[1], c);
            if (b !== void 0)
                return [c, b];
            else
                return
        } else
            return
    }
    function n(a, b) {
        if (a) {
            var c = [a[0], 0];
            l(a[1], c)[1] = b;
            return c
        } else
            return b
    }
    function o(a, b) {
        if (a) {
            var c = [b(a[0]), 0];
            ea(a[1], c, b);
            return c
        } else
            return 0
    }
    function na(a, c) {
        return o(a, b("bs_curry").__1(c))
    }
    function p(a, b, c) {
        if (a && b) {
            var d = [c(a[0], b[0]), 0];
            ga(c, a[1], b[1], d);
            return d
        } else
            return 0
    }
    function oa(a, c, d) {
        return p(a, c, b("bs_curry").__2(d))
    }
    function q(a, b) {
        if (a) {
            var c = [b(0, a[0]), 0];
            ha(b, 1, a[1], c);
            return c
        } else
            return 0
    }
    function pa(a, c) {
        return q(a, b("bs_curry").__2(c))
    }
    function r(a, b) {
        if (a <= 0)
            return 0;
        else {
            var c = [b(0), 0]
              , d = c
              , e = 1;
            while (e < a) {
                var f = [b(e), 0];
                d[1] = f;
                d = f;
                e = e + 1 | 0
            }
            return c
        }
    }
    function qa(a, c) {
        return r(a, b("bs_curry").__1(c))
    }
    function ra(a, b) {
        if (a <= 0)
            return 0;
        else {
            var c = [b, 0]
              , d = c
              , e = 1;
            while (e < a) {
                var f = [b, 0];
                d[1] = f;
                d = f;
                e = e + 1 | 0
            }
            return c
        }
    }
    function s(a) {
        a = a;
        var b = 0;
        while (!0) {
            var c = b
              , d = a;
            if (d) {
                b = c + 1 | 0;
                a = d[1];
                continue
            } else
                return c
        }
    }
    function sa(a, b, c) {
        while (!0) {
            var d = c
              , e = b;
            if (d) {
                a[e] = d[0];
                c = d[1];
                b = e + 1 | 0;
                continue
            } else
                return 0
        }
    }
    function t(a) {
        var b = a;
        a = a.length - 1 | 0;
        var c = 0;
        while (!0) {
            var d = c
              , e = a;
            if (e < 0)
                return d;
            else {
                c = [b[e], d];
                a = e - 1 | 0;
                continue
            }
        }
    }
    function u(a) {
        var b = s(a);
        b = new Array(b);
        sa(b, 0, a);
        return b
    }
    function ta(a) {
        a = u(a);
        b("bs_belt_Array").shuffleInPlace(a);
        return t(a)
    }
    function v(a, b) {
        while (!0) {
            var c = b
              , d = a;
            if (d) {
                b = [d[0], c];
                a = d[1];
                continue
            } else
                return c
        }
    }
    function ua(a) {
        return v(a, 0)
    }
    function va(a, b) {
        while (!0) {
            var c = b
              , d = a;
            if (c) {
                b = c[1];
                a = l(c[0], d);
                continue
            } else {
                d[1] = 0;
                return 0
            }
        }
    }
    function wa(a) {
        while (!0) {
            var b = a;
            if (b) {
                var c = b[0];
                if (c) {
                    var d = [c[0], 0];
                    va(l(c[1], d), b[1]);
                    return d
                } else {
                    a = b[1];
                    continue
                }
            } else
                return 0
        }
    }
    function xa(a) {
        var b = a.length;
        if (b !== 1)
            if (b !== 0) {
                b = a.length;
                var c = a[b - 1 | 0];
                for (var b = b - 2 | 0; b >= 0; --b)
                    c = n(a[b], c);
                return c
            } else
                return 0;
        else
            return a[0]
    }
    function w(a, b) {
        b = b;
        var c = 0;
        a = a;
        while (!0) {
            var d = a
              , e = c;
            if (d) {
                a = d[1];
                c = [b(d[0]), e];
                continue
            } else
                return e
        }
    }
    function ya(a, c) {
        return w(a, b("bs_curry").__1(c))
    }
    function x(a, b) {
        while (!0) {
            var c = a;
            if (c) {
                b(c[0]);
                a = c[1];
                continue
            } else
                return 0
        }
    }
    function za(a, c) {
        return x(a, b("bs_curry").__1(c))
    }
    function y(a, b) {
        a = a;
        var c = 0;
        b = b;
        while (!0) {
            var d = c
              , e = a;
            if (e) {
                b(d, e[0]);
                c = d + 1 | 0;
                a = e[1];
                continue
            } else
                return 0
        }
    }
    function Aa(a, c) {
        return y(a, b("bs_curry").__2(c))
    }
    function z(a, b, c) {
        while (!0) {
            var d = b
              , e = a;
            if (e) {
                b = c(d, e[0]);
                a = e[1];
                continue
            } else
                return d
        }
    }
    function Ba(a, c, d) {
        return z(a, c, b("bs_curry").__2(d))
    }
    function A(a, b, c) {
        if (a)
            return c(A(a[1], b, c), a[0]);
        else
            return b
    }
    function B(a, c, d) {
        var e = s(a);
        if (e < 1e3)
            return A(a, c, d);
        else
            return b("bs_belt_Array").reduceReverseU(u(a), c, d)
    }
    function Ca(a, c, d) {
        return B(a, c, b("bs_curry").__2(d))
    }
    function C(a, b, c) {
        a = a;
        b = b;
        c = c;
        var d = 0;
        while (!0) {
            var e = d
              , f = b
              , g = a;
            if (g) {
                d = e + 1 | 0;
                b = c(f, g[0], e);
                a = g[1];
                continue
            } else
                return f
        }
    }
    function Da(a, c, d) {
        return C(a, c, b("bs_curry").__3(d))
    }
    function D(a, b, c) {
        a = a;
        b = b;
        var d = 0;
        c = c;
        while (!0) {
            var e = d
              , f = b
              , g = a;
            if (g && f) {
                d = [c(g[0], f[0]), e];
                b = f[1];
                a = g[1];
                continue
            } else
                return e
        }
    }
    function Ea(a, c, d) {
        return D(a, c, b("bs_curry").__2(d))
    }
    function E(a, b, c) {
        while (!0) {
            var d = b
              , e = a;
            if (e && d) {
                c(e[0], d[0]);
                b = d[1];
                a = e[1];
                continue
            } else
                return 0
        }
    }
    function Fa(a, c, d) {
        return E(a, c, b("bs_curry").__2(d))
    }
    function F(a, b, c, d) {
        while (!0) {
            var e = c
              , f = b
              , g = a;
            if (g && f) {
                c = d(e, g[0], f[0]);
                b = f[1];
                a = g[1];
                continue
            } else
                return e
        }
    }
    function Ga(a, c, d, e) {
        return F(a, c, d, b("bs_curry").__3(e))
    }
    function G(a, b, c, d) {
        if (a && b)
            return d(G(a[1], b[1], c, d), a[0], b[0]);
        else
            return c
    }
    function H(a, c, d, e) {
        var f = s(a);
        if (f < 1e3)
            return G(a, c, d, e);
        else
            return b("bs_belt_Array").reduceReverse2U(u(a), u(c), d, e)
    }
    function Ha(a, c, d, e) {
        return H(a, c, d, b("bs_curry").__3(e))
    }
    function I(a, b) {
        while (!0) {
            var c = a;
            if (c)
                if (b(c[0])) {
                    a = c[1];
                    continue
                } else
                    return !1;
            else
                return !0
        }
    }
    function Ia(a, c) {
        return I(a, b("bs_curry").__1(c))
    }
    function J(a, b) {
        while (!0) {
            var c = a;
            if (c)
                if (b(c[0]))
                    return !0;
                else {
                    a = c[1];
                    continue
                }
            else
                return !1
        }
    }
    function Ja(a, c) {
        return J(a, b("bs_curry").__1(c))
    }
    function K(a, b, c) {
        while (!0) {
            var d = b
              , e = a;
            if (e && d)
                if (c(e[0], d[0])) {
                    b = d[1];
                    a = e[1];
                    continue
                } else
                    return !1;
            else
                return !0
        }
    }
    function Ka(a, c, d) {
        return K(a, c, b("bs_curry").__2(d))
    }
    function La(a, b) {
        while (!0) {
            var c = b
              , d = a;
            if (d)
                if (c) {
                    b = c[1];
                    a = d[1];
                    continue
                } else
                    return 1;
            else if (c)
                return -1;
            else
                return 0
        }
    }
    function L(a, b, c) {
        while (!0) {
            var d = b
              , e = a;
            if (e)
                if (d) {
                    var f = c(e[0], d[0]);
                    if (f === 0) {
                        b = d[1];
                        a = e[1];
                        continue
                    } else
                        return f
                } else
                    return 1;
            else if (d)
                return -1;
            else
                return 0
        }
    }
    function Ma(a, c, d) {
        return L(a, c, b("bs_curry").__2(d))
    }
    function M(a, b, c) {
        while (!0) {
            var d = b
              , e = a;
            if (e)
                if (d && c(e[0], d[0])) {
                    b = d[1];
                    a = e[1];
                    continue
                } else
                    return !1;
            else if (d)
                return !1;
            else
                return !0
        }
    }
    function Na(a, c, d) {
        return M(a, c, b("bs_curry").__2(d))
    }
    function N(a, b, c) {
        while (!0) {
            var d = b
              , e = a;
            if (e && d)
                if (c(e[0], d[0]))
                    return !0;
                else {
                    b = d[1];
                    a = e[1];
                    continue
                }
            else
                return !1
        }
    }
    function Oa(a, c, d) {
        return N(a, c, b("bs_curry").__2(d))
    }
    function O(b, c, a) {
        while (!0) {
            var d = b;
            if (d)
                if (a(d[0], c))
                    return !0;
                else {
                    b = d[1];
                    continue
                }
            else
                return !1
        }
    }
    function Pa(c, d, a) {
        return O(c, d, b("bs_curry").__2(a))
    }
    function P(c, d, a) {
        while (!0) {
            var e = c;
            if (e) {
                var f = e[0];
                if (a(f[0], d))
                    return b("bs_caml_option").some(f[1]);
                else {
                    c = e[1];
                    continue
                }
            } else
                return
        }
    }
    function Qa(c, d, a) {
        return P(c, d, b("bs_curry").__2(a))
    }
    function Q(b, c, a) {
        while (!0) {
            var d = b;
            if (d)
                if (a(d[0][0], c))
                    return !0;
                else {
                    b = d[1];
                    continue
                }
            else
                return !1
        }
    }
    function Ra(c, d, a) {
        return Q(c, d, b("bs_curry").__2(a))
    }
    function R(b, c, a) {
        if (b) {
            var d = b[1]
              , e = b[0];
            if (a(e[0], c))
                return d;
            else {
                e = [e, 0];
                d = ca(d, c, e, a);
                if (d)
                    return e;
                else
                    return b
            }
        } else
            return 0
    }
    function Sa(c, d, a) {
        return R(c, d, b("bs_curry").__2(a))
    }
    function S(b, c, d, a) {
        if (b) {
            var e = b[1]
              , f = b[0];
            if (a(f[0], c))
                return [[c, d], e];
            else {
                f = [f, 0];
                e = da(e, c, d, f, a);
                if (e)
                    return f;
                else
                    return [[c, d], b]
            }
        } else
            return [[c, d], 0]
    }
    function Ta(c, d, e, a) {
        return S(c, d, e, b("bs_curry").__2(a))
    }
    function T(c, a) {
        c = u(c);
        b("bs_belt_SortArray").stableSortInPlaceByU(c, a);
        return t(c)
    }
    function Ua(c, a) {
        return T(c, b("bs_curry").__2(a))
    }
    function U(a, c) {
        while (!0) {
            var d = a;
            if (d) {
                var e = d[0];
                if (c(e))
                    return b("bs_caml_option").some(e);
                else {
                    a = d[1];
                    continue
                }
            } else
                return
        }
    }
    function Va(a, c) {
        return U(a, b("bs_curry").__1(c))
    }
    function V(a, b) {
        while (!0) {
            var c = a;
            if (c) {
                var d = c[1];
                c = c[0];
                if (b(c)) {
                    c = [c, 0];
                    m(b, d, c);
                    return c
                } else {
                    a = d;
                    continue
                }
            } else
                return 0
        }
    }
    function W(a, c) {
        return V(a, b("bs_curry").__1(c))
    }
    function X(a, b) {
        a = a;
        b = b;
        var c = 0;
        while (!0) {
            var d = c
              , e = a;
            if (e) {
                var f = e[1];
                e = e[0];
                if (b(e, d)) {
                    e = [e, 0];
                    aa(b, f, e, d + 1 | 0);
                    return e
                } else {
                    c = d + 1 | 0;
                    a = f;
                    continue
                }
            } else
                return 0
        }
    }
    function Y(a, c) {
        return X(a, b("bs_curry").__2(c))
    }
    function Z(a, c) {
        while (!0) {
            var d = a;
            if (d) {
                var e = d[1];
                d = c(d[0]);
                if (d !== void 0) {
                    d = [b("bs_caml_option").valFromOption(d), 0];
                    ba(c, e, d);
                    return d
                } else {
                    a = e;
                    continue
                }
            } else
                return 0
        }
    }
    function Wa(a, c) {
        return Z(a, b("bs_curry").__1(c))
    }
    function $(a, b) {
        if (a) {
            var c = a[0]
              , d = [c, 0]
              , e = [c, 0];
            c = b(c);
            j(b, a[1], d, e);
            if (c)
                return [d, e[1]];
            else
                return [d[1], e]
        } else
            return [0, 0]
    }
    function Xa(a, c) {
        return $(a, b("bs_curry").__1(c))
    }
    function Ya(a) {
        if (a) {
            var b = a[0]
              , c = [b[0], 0];
            b = [b[1], 0];
            k(a[1], c, b);
            return [c, b]
        } else
            return [0, 0]
    }
    function Za(a, b) {
        if (a && b) {
            var c = [[a[0], b[0]], 0];
            fa(a[1], b[1], c);
            return c
        } else
            return 0
    }
    var $a = s
      , ab = W
      , bb = Y;
    f.length = s;
    f.size = $a;
    f.head = a;
    f.headExn = c;
    f.tail = d;
    f.tailExn = e;
    f.add = g;
    f.get = h;
    f.getExn = i;
    f.make = ra;
    f.makeByU = r;
    f.makeBy = qa;
    f.shuffle = ta;
    f.drop = la;
    f.take = ka;
    f.splitAt = ma;
    f.concat = n;
    f.concatMany = xa;
    f.reverseConcat = v;
    f.flatten = wa;
    f.mapU = o;
    f.map = na;
    f.zip = Za;
    f.zipByU = p;
    f.zipBy = oa;
    f.mapWithIndexU = q;
    f.mapWithIndex = pa;
    f.fromArray = t;
    f.toArray = u;
    f.reverse = ua;
    f.mapReverseU = w;
    f.mapReverse = ya;
    f.forEachU = x;
    f.forEach = za;
    f.forEachWithIndexU = y;
    f.forEachWithIndex = Aa;
    f.reduceU = z;
    f.reduce = Ba;
    f.reduceWithIndexU = C;
    f.reduceWithIndex = Da;
    f.reduceReverseU = B;
    f.reduceReverse = Ca;
    f.mapReverse2U = D;
    f.mapReverse2 = Ea;
    f.forEach2U = E;
    f.forEach2 = Fa;
    f.reduce2U = F;
    f.reduce2 = Ga;
    f.reduceReverse2U = H;
    f.reduceReverse2 = Ha;
    f.everyU = I;
    f.every = Ia;
    f.someU = J;
    f.some = Ja;
    f.every2U = K;
    f.every2 = Ka;
    f.some2U = N;
    f.some2 = Oa;
    f.cmpByLength = La;
    f.cmpU = L;
    f.cmp = Ma;
    f.eqU = M;
    f.eq = Na;
    f.hasU = O;
    f.has = Pa;
    f.getByU = U;
    f.getBy = Va;
    f.keepU = V;
    f.keep = W;
    f.filter = ab;
    f.keepWithIndexU = X;
    f.keepWithIndex = Y;
    f.filterWithIndex = bb;
    f.keepMapU = Z;
    f.keepMap = Wa;
    f.partitionU = $;
    f.partition = Xa;
    f.unzip = Ya;
    f.getAssocU = P;
    f.getAssoc = Qa;
    f.hasAssocU = Q;
    f.hasAssoc = Ra;
    f.removeAssocU = R;
    f.removeAssoc = Sa;
    f.setAssocU = S;
    f.setAssoc = Ta;
    f.sortU = T;
    f.sort = Ua
}
), null);
__d("MessengerDialogs.bs", ["bs_curry", "bs_belt_List"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {
        contents: 0
    }
      , h = {
        contents: void 0
    };
    function i(a) {
        a = h.contents;
        var c = g.contents;
        if (a !== void 0) {
            a = a;
            if (c)
                return b("bs_curry")._1(a, c);
            else
                return b("bs_curry")._1(a, void 0)
        } else
            return 0
    }
    function a(a) {
        h.contents = a;
        return i(0)
    }
    function c(a) {
        g.contents = [a, g.contents];
        return i(0)
    }
    function d(a, c) {
        if (a !== void 0) {
            var d = a;
            g.contents = b("bs_belt_List").keep(g.contents, function(a) {
                return a !== d
            })
        } else {
            c = g.contents;
            g.contents = c ? c[1] : 0
        }
        return i(0)
    }
    function e(a) {
        g.contents = 0;
        return i(0)
    }
    f.visibleDialogs = g;
    f.setDialogComponentState = h;
    f.updateComponent = i;
    f.addHandler = a;
    f.showDialog = c;
    f.removeDialog = d;
    f.removeAllDialogs = e
}
), null);
__d("MessengerDialog.react", ["cx", "LayerHideOnEscape", "LayerRefocusOnHide", "MessengerDialogLayerShrinkOnHide", "MessengerDialogs.bs", "React", "XUIDialog.react", "createReactClass_DEPRECATED", "joinClasses", "prop-types", "setTimeout"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    c = b("createReactClass_DEPRECATED")({
        displayName: "MessengerDialog",
        propTypes: {
            label: (a = b("prop-types")).node,
            onToggle: a.func,
            repositionOnUpdate: a.bool,
            shown: a.bool,
            type: a.oneOf(["alert", "default"]),
            width: a.number,
            removeDialogOnToggle: a.bool,
            causalElement: a.instanceOf(Element),
            children: a.node,
            useDefaultStyling: a.bool
        },
        getDefaultProps: function() {
            return {
                label: void 0,
                repositionOnUpdate: !1,
                shown: !0,
                type: "alert",
                width: 400,
                removeDialogOnToggle: !0,
                useDefaultStyling: !0
            }
        },
        componentDidUpdate: function() {
            this.props.repositionOnUpdate && b("setTimeout")(function() {
                this.isMounted() && this.refs.dialog && this.refs.dialog.layer && this.refs.dialog.layer.updatePosition()
            }
            .bind(this), 0)
        },
        handleToggle: function(a) {
            this.props.onToggle && this.props.onToggle(a),
            !a && this.props.removeDialogOnToggle && b("MessengerDialogs.bs").removeDialog()
        },
        render: function() {
            var a = this.props
              , c = a.children;
            a = a.useDefaultStyling;
            return h.jsx(b("XUIDialog.react"), babelHelpers["extends"]({
                behaviors: {
                    MessengerDialogLayerShrinkOnHide: b("MessengerDialogLayerShrinkOnHide"),
                    LayerHideOnEscape: b("LayerHideOnEscape"),
                    LayerRefocusOnHide: b("LayerRefocusOnHide")
                }
            }, this.props, {
                onToggle: this.handleToggle,
                className: b("joinClasses")("_4ebx", this.props.className),
                ref: "dialog",
                causalElement: this.props.causalElement,
                children: a ? h.jsx("div", {
                    className: "_4eby" + (this.props.type === "alert" ? " _2c9g" : "") + (this.props.type === "default" ? " _2c9i" : ""),
                    children: c
                }) : c
            }))
        }
    });
    d = c;
    e.exports = d
}
), null);
__d("MessengerDialogBody.react", ["cx", "React", "joinClasses"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            return h.jsx("div", {
                className: b("joinClasses")("_4eb-", this.props.className),
                children: this.props.children
            })
        }
        ;
        return c
    }(h.Component);
    e.exports = a
}
), null);
__d("MessengerDialogButton.react", ["cx", "MessengerButtonReact.re", "React", "joinClasses", "prop-types"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props
              , c = a.action
              , d = a.className;
            a = babelHelpers.objectWithoutPropertiesLoose(a, ["action", "className"]);
            return h.jsx(b("MessengerButtonReact.re").make, babelHelpers["extends"]({
                className: b("joinClasses")(d, "_5ixy" + (c === "button" ? " layerButton" : "") + (c === "cancel" ? " layerCancel" : "") + (c === "confirm" ? " layerConfirm" : ""))
            }, a))
        }
        ;
        return c
    }(h.PureComponent);
    e.exports = a;
    a.propTypes = {
        action: b("prop-types").oneOf(["button", "cancel", "confirm"])
    }
}
), null);
__d("MessengerDialogCancelButton.react", ["fbt", "MessengerDialogButton.react", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            return h.jsx(b("MessengerDialogButton.react"), babelHelpers["extends"]({
                action: "cancel",
                label: g._("H\u1ee7y"),
                type: "secondary"
            }, this.props))
        }
        ;
        return c
    }(h.PureComponent);
    e.exports = a
}
), null);
__d("MessengerDialogFooter.react", ["cx", "LeftRight.react", "React", "joinClasses"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            return h.jsx("div", {
                className: b("joinClasses")("_4eb_", this.props.className),
                children: h.jsxs(b("LeftRight.react"), {
                    children: [h.jsx("div", {
                        className: "_2_d1",
                        children: this.props.leftContent
                    }), h.jsx("div", {
                        children: this.props.children
                    })]
                })
            })
        }
        ;
        return c
    }(h.Component);
    e.exports = a
}
), null);
__d("MessengerMenu.react", ["cx", "Keys", "MenuSeparator.react", "MessengerDotComAndInboxM4Check.bs", "ReactXUIMenu", "joinClasses"], (function(a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
        a.isReactLegacyFactory = {},
        a.type = a
    }
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(c) {
            var d = c.className;
            c = babelHelpers.objectWithoutPropertiesLoose(c, ["className"]);
            return a.call(this, babelHelpers["extends"]({
                className: b("joinClasses")(d, "_2i-c" + (b("MessengerDotComAndInboxM4Check.bs").yes ? " _6_n0" : "") + " _150g")
            }, c)) || this
        }
        var d = c.prototype;
        d.handleKeydown = function(c, d) {
            return c === b("Keys").DOWN || c === b("Keys").UP || c === b("Keys").SPACE ? a.prototype.handleKeydown.call(this, c, d) : !0
        }
        ;
        return c
    }(b("ReactXUIMenu"));
    e.exports = c;
    a(c);
    c.Item = b("ReactXUIMenu").Item;
    c.Separator = b("MenuSeparator.react")
}
), null);
__d("MessengerPopoverMenu.react", ["cx", "ContextualDialogArrow", "ContextualLayerAutoFlip", "ContextualLayerUpdateOnScroll", "PopoverMenu.react", "React", "joinClasses"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.showPopover = function() {
            this.refs.menu && this.refs.menu.showPopover()
        }
        ;
        d.render = function() {
            var a = this.props
              , c = a.children
              , d = a.className
              , e = a.isOpen;
            a = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "className", "isOpen"]);
            c = h.Children.only(c);
            return h.jsx(b("PopoverMenu.react"), babelHelpers["extends"]({
                className: b("joinClasses")(d, !a.disableArrowKeyActivation || e ? "_150g" : ""),
                enableActivationOnEnter: !0,
                layerBehaviors: [b("ContextualLayerAutoFlip"), b("ContextualLayerUpdateOnScroll"), b("ContextualDialogArrow")]
            }, a, {
                ref: "menu",
                children: c
            }))
        }
        ;
        return c
    }(h.PureComponent);
    e.exports = a
}
), null);
__d("MessengerDialogs.re", ["bs_curry", "MessengerDialogs.bs"], (function(a, b, c, d, e, f) {
    a = b("MessengerDialogs.bs").showDialog;
    f.showDialog = a;
    c = function(a, c) {
        a = b("bs_curry")._2(b("MessengerDialogs.bs").removeDialog, a.dialog, c);
        return a
    }
    ;
    f.removeDialog = c;
    d = b("MessengerDialogs.bs").removeAllDialogs;
    f.removeAllDialogs = d
}
), null);
__d("MessengerParticipants.re", ["bs_curry", "MessengerParticipants.bs"], (function(a, b, c, d, e, f) {
    a = function(a, c) {
        a = b("bs_curry")._2(b("MessengerParticipants.bs").get, a, c);
        return a
    }
    ;
    f.get = a;
    c = b("MessengerParticipants.bs").getNow;
    f.getNow = c;
    d = function(a, c) {
        a = b("bs_curry")._2(b("MessengerParticipants.bs").getMulti, a, c);
        return a
    }
    ;
    f.getMulti = d;
    e = function(a, c) {
        a = b("bs_curry")._2(b("MessengerParticipants.bs").getMultiEager, a, c);
        return a
    }
    ;
    f.getMultiEager = e;
    a = function(a, c) {
        a = b("bs_curry")._2(b("MessengerParticipants.bs").getMultiEagerMap, a, c);
        return a
    }
    ;
    f.getMultiEagerMap = a;
    c = b("MessengerParticipants.bs").removeCallback;
    f.removeCallback = c
}
), null);
__d("MessengerSignals.bs", ["EventEmitter"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = new (b("EventEmitter"))()
      , h = "resize";
    function a(a) {
        g.emit(h);
        return 0
    }
    function c(a) {
        return g.addListener(h, a)
    }
    f.emitter = g;
    f.resizeEvent = h;
    f.resize = a;
    f.onResize = c
}
), null);
__d("MessengerReadReceipt.re", ["bs_curry", "MessengerReadReceipt.bs"], (function(a, b, c, d, e, f) {
    a = function(a, c, d) {
        a = b("bs_curry")._3(b("MessengerReadReceipt.bs").getSeenBy, a, c, d);
        return a
    }
    ;
    f.getSeenBy = a;
    c = function(a, c) {
        a = b("bs_curry")._2(b("MessengerReadReceipt.bs").getSeenTimestamps, a, c);
        return a
    }
    ;
    f.getSeenTimestamps = c
}
), null);
__d("MessengerDialogHeaderReact.bs", ["cx", "React", "bs_caml_option", "joinClasses"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function a(a) {
        var c = a.autofocus
          , d = a.id;
        a = a.children;
        c = c !== void 0 ? c : !1;
        a = {
            children: a,
            className: b("joinClasses")("_4ebz", c ? "autofocus" : "")
        };
        d !== void 0 && (a.id = b("bs_caml_option").valFromOption(d));
        return h.jsx("h2", a)
    }
    c = a;
    f.make = c
}
), null);
__d("MessengerDialogHeaderReact.re", ["MessengerDialogHeaderReact.bs"], (function(a, b, c, d, e, f) {
    (function(a) {
        return null
    }
    );
    a = b("MessengerDialogHeaderReact.bs").make;
    f.make = a
}
), null);
__d("MessengerDialogTitleReact.bs", ["cx", "React", "joinClasses"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function a(a) {
        var c = a.autofocus;
        a = a.children;
        c = c !== void 0 ? c : !1;
        return h.jsx("div", {
            children: a,
            className: b("joinClasses")("_19jt", c ? "autofocus" : "")
        })
    }
    c = a;
    f.make = c
}
), null);
__d("MessengerSettingsStore", ["CacheStorage", "MessengerDotComSettingsInitialData", "MessengerSettingsActions", "MessengerStore"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = new (b("CacheStorage"))("localstorage")
      , h = "desktopNotifsEnabled";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c;
            c = a.call(this) || this;
            c.$MessengerSettingsStore1 = babelHelpers["extends"]({}, b("MessengerDotComSettingsInitialData"), {
                desktopNotifsEnabled: c.$MessengerSettingsStore2()
            });
            c.$MessengerSettingsStore1.privacy_section_collapsed = !0;
            return c
        }
        var d = c.prototype;
        d.getSettings = function() {
            return this.$MessengerSettingsStore1
        }
        ;
        d.$MessengerSettingsStore2 = function() {
            return g.get(h, !1)
        }
        ;
        d.$MessengerSettingsStore3 = function(a) {
            g.set(h, a)
        }
        ;
        d.__onDispatch = function(a) {
            switch (a.type) {
            case b("MessengerSettingsActions").Types.CHANGE_SETTINGS:
                this.$MessengerSettingsStore1 = babelHelpers["extends"]({}, this.$MessengerSettingsStore1, a.newSettings);
                this.emitChange();
                break;
            case b("MessengerSettingsActions").Types.CHANGE_DESKTOP_NOTIFS:
                this.$MessengerSettingsStore1 = babelHelpers["extends"]({}, this.$MessengerSettingsStore1, {
                    desktopNotifsEnabled: a.desktopNotifsEnabled
                });
                this.$MessengerSettingsStore3(a.desktopNotifsEnabled);
                this.emitChange();
                break
            }
        }
        ;
        return c
    }(b("MessengerStore"));
    c = new a();
    e.exports = c
}
), null);
__d("WIGPressable.react", ["CometPressable.react", "React"], (function(a, b, c, d, e, f) {
    var g = b("React");
    function a(a, c) {
        return g.jsx(b("CometPressable.react"), babelHelpers["extends"]({}, a, {
            ref: c
        }))
    }
    c = g.forwardRef(a);
    e.exports = c
}
), null);
__d("useWIGLazyDialog", ["useCometLazyDialog"], (function(a, b, c, d, e, f) {
    a = b("useCometLazyDialog");
    c = a;
    e.exports = c
}
), null);
__d("ProfileLink.react", ["Link.react", "React", "URI"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props.hasHovercard !== !1 ? new (g || (g = b("URI")))("/ajax/hovercard/user.php").setQueryData({
                id: this.props.uid
            }) : null;
            return h.jsx(b("Link.react"), babelHelpers["extends"]({}, this.props, {
                "data-hovercard": a,
                href: (a = this.props.href) != null ? a : "/" + this.props.uid,
                tabIndex: (a = this.props.tabIndex) != null ? a : "0",
                children: this.props.children
            }))
        }
        ;
        return c
    }(h.Component);
    e.exports = a
}
), null);
__d("AbstractDialogFitHeight", ["csx", "cx", "CSS", "DOM", "Event", "Style", "SubscriptionsHandler", "Vector", "throttle"], (function(a, b, c, d, e, f, g, h) {
    var i = 450
      , j = 100
      , k = 67
      , l = 67;
    a = function() {
        "use strict";
        function a(a) {
            this.$1 = a
        }
        var c = a.prototype;
        c.enable = function() {
            this.$2 = new (b("SubscriptionsHandler"))(),
            this.$2.addSubscriptions(this.$1.subscribe("beforeshow", this.$3.bind(this)), b("Event").listen(window, "resize", b("throttle")(this.$3.bind(this)))),
            this.$4 = b("DOM").find(this.$1.getRoot(), "._4-i2"),
            b("CSS").addClass(this.$4, "_5pfh"),
            b("CSS").addClass(this.$1.getRoot(), "_3thl"),
            this.$5 = j,
            b("DOM").scry(this.$1.getRoot(), "._4-i0").length && (this.$5 += k),
            b("DOM").scry(this.$1.getRoot(), "._5a8u").length && (this.$5 += l)
        }
        ;
        c.disable = function() {
            this.$2.release(),
            this.$2 = null,
            b("CSS").removeClass(this.$4, "_5pfh"),
            b("CSS").removeClass(this.$1.getRoot(), "_3thl")
        }
        ;
        c.$3 = function() {
            var a = b("Vector").getViewportDimensions().y;
            a = a - this.$5;
            b("Style").set(this.$4, this.getHeightProperty(), Math.max(i, a) + "px");
            this.$1.updatePosition()
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("DialogFitHeight", ["AbstractDialogFitHeight"], (function(a, b, c, d, e, f) {
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        var c = b.prototype;
        c.getHeightProperty = function() {
            return "height"
        }
        ;
        return b
    }(b("AbstractDialogFitHeight"));
    e.exports = a
}
), null);
__d("StoreAndPropBasedStateMixin", ["invariant", "FluxMixinLegacyInstrumentation", "StoreBasedStateMixinHelper", "setImmediate"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        for (var a = arguments.length, c = new Array(a), d = 0; d < a; d++)
            c[d] = arguments[d];
        return b("FluxMixinLegacyInstrumentation").addInstrumentation({
            _callCalculateState: function(a) {
                return this.constructor.calculateState(a)
            },
            getInitialState: function() {
                this._onInitialStateForInstrumentation && this._onInitialStateForInstrumentation();
                return this._callCalculateState(this.props)
            },
            UNSAFE_componentWillMount: function() {
                var a = this;
                this.constructor.calculateState || g(0, 3582);
                this._recalculateStateID = null;
                var d = function() {
                    if (a.isMounted()) {
                        var b = a._collectStoreEmitsForInstrumentation ? a._collectStoreEmitsForInstrumentation() : null
                          , c = a._callCalculateState(a.props)
                          , d = a._getCurrentDispatchForInstrumentation && a._getCurrentDispatchForInstrumentation();
                        a.setState(a._logStoreEmitsForInstrumentation != null ? function() {
                            b != null && a._logStoreEmitsForInstrumentation && a._logStoreEmitsForInstrumentation(b, d);
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
            UNSAFE_componentWillReceiveProps: function(a) {
                var b = this
                  , c = this._callCalculateState(a)
                  , d = this._getCurrentDispatchForInstrumentation && this._getCurrentDispatchForInstrumentation();
                this.setState(this._onReceivePropsForInstrumentation ? function() {
                    b._onReceivePropsForInstrumentation && b._onReceivePropsForInstrumentation(d);
                    return c
                }
                : c)
            },
            componentWillUnmount: function() {
                this._mixin && this._mixin.release(),
                this._mixin = null
            }
        })
    }
    ;
    e.exports = a
}
), null);
__d("AtSignAllowEmptyMentionsStrategy", ["DocumentMentionsRegex"], (function(a, b, c, d, e, f) {
    a = b("DocumentMentionsRegex").PUNCTUATION;
    c = ["@", "\\uff20"].join("");
    d = "[^" + c + a + "\\s]";
    f = "(?:\\.[ |$]| |[" + a + "]|)";
    var g = new RegExp("(?:^|\\s|[(\\/])([" + c + "]((?:" + d + f + "){0,20}))$");
    b = {
        name: "AtSignAllowEmptyMentionsStrategy",
        findMentionableString: function(a) {
            a = g.exec(a);
            if (a !== null) {
                var b = a[2];
                return {
                    matchingString: b,
                    leadOffset: a[1].length
                }
            }
            return null
        }
    };
    a = b;
    e.exports = a
}
), null);
__d("PhotoRendererProjection", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        PERSPECTIVE: "perspective",
        STEREOGRAPHIC: "stereographic",
        CYLINDRICAL: "cylindrical",
        EQUIRECTANGULAR: "equirectangular"
    });
    e.exports = a
}
), null);
__d("MercuryAttachmentSnippetType", ["keyMirror"], (function(a, b, c, d, e, f) {
    a = b("keyMirror")({
        PHOTO: null,
        GIF: null,
        VIDEO: null,
        AUDIO_CLIP: null,
        STICKER: null,
        SHARE: null,
        ERROR: null,
        MIXED: null,
        GIFT: null,
        THIRDPARTYSTICKER: null,
        FILE: null,
        LIKE_STICKER: null
    });
    c = a;
    e.exports = c
}
), null);
__d("MercuryGiftSnippetRenderer", ["fbt"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.renderText = a;
    function a(a, b) {
        return a ? g._("B\u1ea1n \u0111\u00e3 g\u1eedi m\u1ed9t tin nh\u1eafn valentine.") : g._("{name} \u0111\u00e3 g\u1eedi m\u1ed9t tin nh\u1eafn valentine.", [g._param("name", b)])
    }
}
), null);
__d("P2PSnippetStringUtils", ["fbt"], (function(a, b, c, d, e, f, g) {
    f.getRequestCanceledSnippet = a;
    f.getRequestDeclinedSnippet = b;
    f.getRequestSentSnippet = c;
    f.getRequestSnippetByStatus = d;
    f.getTransferCanceledSnippet = e;
    f.getTransferDeclinedSnippet = h;
    f.getTransferSentSnippet = i;
    f.getTransferSnippetByStatus = j;
    function a(a, b, c, d, e) {
        if (a)
            return g._("Y\u00eau c\u1ea7u thanh to\u00e1n {payment request amount} c\u1ee7a b\u1ea1n \u0111\u1ed1i v\u1edbi {receiver's name} \u0111\u00e3 b\u1ecb h\u1ee7y.", [g._param("payment request amount", e), g._param("receiver's name", d)]);
        else if (b)
            return g._("Y\u00eau c\u1ea7u thanh to\u00e1n {payment request amount} c\u1ee7a {requester's name} \u0111\u00e3 b\u1ecb h\u1ee7y.", [g._param("requester's name", c), g._param("payment request amount", e)]);
        else
            return g._("Y\u00eau c\u1ea7u thanh to\u00e1n {payment request amount} c\u1ee7a {requester's name} \u0111\u1ed1i v\u1edbi {receiver's name} \u0111\u00e3 b\u1ecb h\u1ee7y.", [g._param("requester's name", c), g._param("payment request amount", e), g._param("receiver's name", d)])
    }
    function b(a, b, c, d, e) {
        if (a)
            return g._("{receiver's name} \u0111\u00e3 t\u1eeb ch\u1ed1i y\u00eau c\u1ea7u thanh to\u00e1n {payment request amount} c\u1ee7a b\u1ea1n.", [g._param("receiver's name", d), g._param("payment request amount", e)]);
        else if (b)
            return g._("B\u1ea1n \u0111\u00e3 t\u1eeb ch\u1ed1i y\u00eau c\u1ea7u thanh to\u00e0n {payment request amount} c\u1ee7a {requester's name} amount}.", [g._param("requester's name", c), g._param("payment request amount", e)]);
        else
            return g._("{receiver's name} \u0111\u00e3 t\u1eeb ch\u1ed1i y\u00eau c\u1ea7u thanh to\u00e1n {payment request amount} c\u1ee7a {sender's name}.", [g._param("receiver's name", d), g._param("sender's name", c), g._param("payment request amount", e)])
    }
    function c(a, b, c, d, e) {
        if (a)
            return g._("B\u1ea1n \u0111\u00e3 y\u00eau c\u1ea7u {requestee name} thanh to\u00e1n {amount}.", [g._param("amount", e), g._param("requestee name", d)]);
        else if (b)
            return g._("{requester name} \u0111\u00e3 y\u00eau c\u1ea7u b\u1ea1n thanh to\u00e1n {amount}.", [g._param("requester name", c), g._param("amount", e)]);
        else
            return g._("{name} \u0111\u00e3 y\u00eau c\u1ea7u {requestee name} thanh to\u00e1n {amount}.", [g._param("name", c), g._param("amount", e), g._param("requestee name", d)])
    }
    function d(a, b, c, d, e, f) {
        a = a || 1;
        b = [b, c, d, e, f];
        switch (a) {
        case 2:
            return this.getRequestDeclinedSnippet.apply(this, b);
        case 5:
        case 6:
            return this.getRequestCanceledSnippet.apply(this, b)
        }
        return this.getRequestSentSnippet.apply(this, b)
    }
    function e(a, b, c, d, e) {
        if (a)
            return g._("Kho\u1ea3n thanh to\u00e1n {amount} c\u1ee7a b\u1ea1n cho {receiver_name} \u0111\u00e3 b\u1ecb h\u1ee7y.", [g._param("amount", e), g._param("receiver_name", d)]);
        else if (b)
            return g._("Kho\u1ea3n thanh to\u00e1n {amount} c\u1ee7a {sender name} \u0111\u00e3 b\u1ecb h\u1ee7y.", [g._param("sender name", c), g._param("amount", e)]);
        else
            return g._("Kho\u1ea3n thanh to\u00e1n {amount} c\u1ee7a {sender_name} cho {receiver_name} \u0111\u00e3 b\u1ecb h\u1ee7y.", [g._param("sender_name", c), g._param("amount", e), g._param("receiver_name", d)])
    }
    function h(a, b, c, d, e) {
        if (a)
            return g._("{receiver_name} kh\u00f4ng ch\u1ea5p nh\u1eadn kho\u1ea3n thanh to\u00e1n {amount} c\u1ee7a b\u1ea1n.", [g._param("receiver_name", d), g._param("amount", e)]);
        else if (b)
            return g._("B\u1ea1n kh\u00f4ng ch\u1ea5p nh\u1eadn kho\u1ea3n thanh to\u00e1n {amount} c\u1ee7a {sender name}.", [g._param("sender name", c), g._param("amount", e)]);
        else
            return g._("{receiver_name} kh\u00f4ng ch\u1ea5p nh\u1eadn kho\u1ea3n thanh to\u00e1n {amount} c\u1ee7a {sender_name}.", [g._param("receiver_name", d), g._param("sender_name", c), g._param("amount", e)])
    }
    function i(a, b, c, d, e) {
        if (a)
            return g._("B\u1ea1n \u0111\u00e3 g\u1eedi cho {receiver name} {amount}.", [g._param("receiver name", d), g._param("amount", e)]);
        else if (b)
            return g._("{name} \u0111\u00e3 g\u1eedi cho b\u1ea1n {amount}.", [g._param("name", c), g._param("amount", e)]);
        else
            return g._("{sender name} \u0111\u00e3 g\u1eedi cho {receiver name} {amount}.", [g._param("sender name", c), g._param("receiver name", d), g._param("amount", e)])
    }
    function j(a, b, c, d, e, f) {
        b = [b, c, d, e, f];
        c = a || 15;
        switch (c) {
        case 5:
            return this.getTransferDeclinedSnippet.apply(this, b);
        case 3:
        case 10:
        case 11:
        case 12:
        case 16:
            return this.getTransferCanceledSnippet.apply(this, b)
        }
        return this.getTransferSentSnippet.apply(this, b)
    }
}
), null);
__d("MercuryAttachmentSnippetRenderer", ["fbt", "CurrentUser", "MercuryAttachmentSnippetType", "MercuryAudioType", "MercuryGiftSnippetRenderer", "MessengerLightweightActionUtils", "P2PSnippetStringUtils", "StickerConstants"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = {
        getAttachmentSnippetType: function(a) {
            if (this._hasOnlyPhotos(a))
                return b("MercuryAttachmentSnippetType").PHOTO;
            if (this._hasOnlyAnimatedImages(a))
                return b("MercuryAttachmentSnippetType").GIF;
            if (this._hasOnlyVideo(a))
                return b("MercuryAttachmentSnippetType").VIDEO;
            if (this._hasAudioClip(a))
                return b("MercuryAttachmentSnippetType").AUDIO_CLIP;
            if (this._hasLikeSticker(a))
                return b("MercuryAttachmentSnippetType").LIKE_STICKER;
            if (this._hasSticker(a))
                return b("MercuryAttachmentSnippetType").STICKER;
            if (this._hasThirdPartySticker(a))
                return b("MercuryAttachmentSnippetType").THIRDPARTYSTICKER;
            if (this._hasShare(a))
                return b("MercuryAttachmentSnippetType").SHARE;
            if (this._hasGift(a))
                return b("MercuryAttachmentSnippetType").GIFT;
            if (this._hasError(a))
                return b("MercuryAttachmentSnippetType").ERROR;
            return this._hasFile(a) ? b("MercuryAttachmentSnippetType").FILE : b("MercuryAttachmentSnippetType").MIXED
        },
        renderAttachmentSnippetText: function(a, c, d, e) {
            switch (a) {
            case b("MercuryAttachmentSnippetType").PHOTO:
                return this._renderPhotoAttachmentSnippetText(c, d, this._getPhotoAttachments(e));
            case b("MercuryAttachmentSnippetType").GIF:
                return this._renderAnimatedImagesAttachmentSnippetText(c, d, this._getAnimatedImageAttachments(e));
            case b("MercuryAttachmentSnippetType").VIDEO:
                return c ? g._("B\u1ea1n \u0111\u00e3 g\u1eedi m\u1ed9t video.") : g._("{sender name} \u0111\u00e3 g\u1eedi m\u1ed9t video.", [g._param("sender name", d)]);
            case b("MercuryAttachmentSnippetType").AUDIO_CLIP:
                return c ? g._("B\u1ea1n \u0111\u00e3 g\u1eedi tin nh\u1eafn tho\u1ea1i.") : g._("{name} \u0111\u00e3 g\u1eedi m\u1ed9t tin nh\u1eafn b\u1eb1ng gi\u1ecdng n\u00f3i.", [g._param("name", d)]);
            case b("MercuryAttachmentSnippetType").STICKER:
            case b("MercuryAttachmentSnippetType").LIKE_STICKER:
            case b("MercuryAttachmentSnippetType").THIRDPARTYSTICKER:
                return c ? g._("B\u1ea1n \u0111\u00e3 g\u1eedi m\u1ed9t nh\u00e3n d\u00e1n.") : g._("{name} \u0111\u00e3 g\u1eedi m\u1ed9t nh\u00e3n d\u00e1n.", [g._param("name", d)]);
            case b("MercuryAttachmentSnippetType").SHARE:
                if (e && this._hasP2PPayment(e))
                    return this._renderP2PPaymentSnippetText(e[0]);
                if (e && this._hasP2PPaymentRequest(e))
                    return this._renderP2PPaymentRequestSnippetText(e[0]);
                if (e && this._hasBusinessMessage(e))
                    return this._renderBusinessMessageSnippetText(e[0], d);
                if (e && this._hasLocation(e))
                    return c ? g._("B\u1ea1n \u0111\u00e3 g\u1eedi m\u1ed9t v\u1ecb tr\u00ed.") : g._("{sender name} \u0111\u00e3 g\u1eedi m\u1ed9t v\u1ecb tr\u00ed.", [g._param("sender name", d)]);
                if (e && this._hasLiveLocation(e))
                    return c ? g._("B\u1ea1n \u0111\u00e3 g\u1eedi m\u1ed9t v\u1ecb tr\u00ed tr\u1ef1c ti\u1ebfp.") : g._("{sender name} \u0111\u00e3 g\u1eedi m\u1ed9t v\u1ecb tr\u00ed tr\u1ef1c ti\u1ebfp.", [g._param("sender name", d)]);
                if (e && this._hasMontageDirect(e)) {
                    a = e[0];
                    a = (a = a) != null ? (a = a.share) != null ? (a = a.media) != null ? a.source : a : a : a;
                    return c ? a ? g._("B\u1ea1n \u0111\u00e3 g\u1eedi m\u1ed9t video.") : g._("B\u1ea1n \u0111\u00e3 g\u1eedi m\u1ed9t \u1ea3nh.") : a ? g._("H\u00e3y xem video t\u1ea1m th\u1eddi c\u1ee7a {sender name}.", [g._param("sender name", d)]) : g._("H\u00e3y xem \u1ea3nh t\u1ea1m th\u1eddi c\u1ee7a {sender name}.", [g._param("sender name", d)])
                }
                if (e && e.length === 1 && b("MessengerLightweightActionUtils").isLWAAttachment(e[0]))
                    return b("MessengerLightweightActionUtils").getLWASnippetText(e);
                return e && e.length === 1 && this._isGloballyRemovedMessageAttachment(e[0]) ? e[0].share.description : c ? g._("B\u1ea1n \u0111\u00e3 g\u1eedi m\u1ed9t li\u00ean k\u1ebft.") : g._("{sender name} \u0111\u00e3 g\u1eedi li\u00ean k\u1ebft.", [g._param("sender name", d)]);
            case b("MercuryAttachmentSnippetType").GIFT:
                return b("MercuryGiftSnippetRenderer").renderText(c, d);
            case b("MercuryAttachmentSnippetType").FILE:
                return c ? g._("B\u1ea1n \u0111\u00e3 g\u1eedi m\u1ed9t t\u1ec7p \u0111\u00ednh k\u00e8m.") : g._("{sender name} \u0111\u00e3 g\u1eedi m\u1ed9t t\u1ec7p \u0111\u00ednh k\u00e8m.", [g._param("sender name", d)]);
            case b("MercuryAttachmentSnippetType").MIXED:
                return c ? g._("B\u1ea1n \u0111\u00e3 g\u1eedi m\u1ed9t s\u1ed1 t\u1ec7p \u0111\u00ednh k\u00e8m.") : g._("{sender name} \u0111\u00e3 g\u1eedi m\u1ed9t s\u1ed1 file \u0111\u00ednh k\u00e8m.", [g._param("sender name", d)]);
            case b("MercuryAttachmentSnippetType").ERROR:
                return c ? g._("B\u1ea1n \u0111\u00e3 g\u1eedi m\u1ed9t t\u1ec7p \u0111\u00ednh k\u00e8m.") : g._("{sender name} \u0111\u00e3 g\u1eedi m\u1ed9t t\u1ec7p \u0111\u00ednh k\u00e8m.", [g._param("sender name", d)]);
            default:
                return ""
            }
        },
        _isGloballyRemovedMessageAttachment: function(a) {
            return a.share && a.share.style_list && a.share.style_list.includes("globally_deleted_message_placeholder")
        },
        _hasOnlyPhotos: function(a) {
            return this._getPhotoAttachments(a).length === a.length
        },
        _hasThirdPartySticker: function(a) {
            return a.length === 1 && a[0].attach_type === "third_party_sticker"
        },
        _hasOnlyAnimatedImages: function(a) {
            return this._getAnimatedImageAttachments(a).length === a.length
        },
        _hasOnlyVideo: function(a) {
            return a.length === 1 && a[0].attach_type === "video"
        },
        _hasAudioClip: function(a) {
            var c = a[0].metadata && a[0].metadata.type;
            return a.length === 1 && (c === b("MercuryAudioType").AudioClip || c === b("MercuryAudioType").VoiceMessageWithTranscript)
        },
        _hasBusinessMessage: function(a) {
            return this._hasSingleShareAttachmentOfStyle(a, "business_message_items")
        },
        _hasSticker: function(a) {
            return a.length === 1 && a[0].attach_type === "sticker"
        },
        _hasLikeSticker: function(a) {
            if (a.length < 1)
                return !1;
            var c = a[0].metadata && a[0].metadata.stickerID;
            return a.length === 1 && (c == b("StickerConstants").LIKE_STICKER_ID || c == b("StickerConstants").HOT_LIKE_SMALL_STICKER_ID || c == b("StickerConstants").HOT_LIKE_MEDIUM_STICKER_ID || c == b("StickerConstants").HOT_LIKE_LARGE_STICKER_ID)
        },
        _hasLocation: function(a) {
            return this._hasSingleShareAttachmentOfStyle(a, "message_location")
        },
        _hasLiveLocation: function(a) {
            return this._hasSingleShareAttachmentOfStyle(a, "message_live_location")
        },
        _hasMontageDirect: function(a) {
            return this._hasSingleShareAttachmentOfStyle(a, "montage_direct")
        },
        _hasP2PPayment: function(a) {
            return this._hasSingleShareAttachmentOfStyle(a, "orion")
        },
        _hasP2PPaymentRequest: function(a) {
            return this._hasSingleShareAttachmentOfStyle(a, "orion_request")
        },
        _hasSingleShareAttachmentOfStyle: function(a, b) {
            return a.length === 1 && a[0].attach_type === "share" && a[0].share && a[0].share.style_list.indexOf(b) >= 0
        },
        _hasShare: function(a) {
            return a.length === 1 && a[0].attach_type === "share"
        },
        _hasError: function(a) {
            return a.length === 1 && a[0].attach_type === "error"
        },
        _hasGift: function(a) {
            return a.length === 1 && a[0].attach_type === "gift"
        },
        _hasFile: function(a) {
            return a.length === 1 && a[0].attach_type === "file"
        },
        _getPhotoAttachments: function(a) {
            return !a ? [] : a.filter(function(a) {
                return a.attach_type === "photo"
            })
        },
        _getAnimatedImageAttachments: function(a) {
            return !a ? [] : a.filter(function(a) {
                return a.attach_type === "animated_image"
            })
        },
        _renderPhotoAttachmentSnippetText: function(a, b, c) {
            if (c.length === 1)
                if (a)
                    return g._("B\u1ea1n \u0111\u00e3 g\u1eedi m\u1ed9t \u1ea3nh.");
                else
                    return g._("{name} \u0111\u00e3 g\u1eedi m\u1ed9t \u1ea3nh.", [g._param("name", b)]);
            else if (a)
                return g._({
                    "*": "B\u1ea1n \u0111\u00e3 g\u1eedi {num_photos} \u1ea3nh."
                }, [g._param("num_photos", c.length, [0])]);
            else
                return g._({
                    "*": "{name} \u0111\u00e3 g\u1eedi {num_photos} \u1ea3nh."
                }, [g._param("name", b), g._param("num_photos", c.length, [0])])
        },
        _renderAnimatedImagesAttachmentSnippetText: function(a, b, c) {
            if (c.length === 1)
                if (a)
                    return g._("B\u1ea1n \u0111\u00e3 g\u1eedi m\u1ed9t t\u1ec7p GIF.");
                else
                    return g._("{name} \u0111\u00e3 g\u1eedi m\u1ed9t t\u1ec7p GIF.", [g._param("name", b)]);
            else if (a)
                return g._("B\u1ea1n \u0111\u00e3 g\u1eedi {num_animated_images} GIF.", [g._param("num_animated_images", c.length)]);
            else
                return g._("{name} \u0111\u00e3 g\u1eedi {num_animated_images} GIF.", [g._param("name", b), g._param("num_animated_images", c.length)])
        },
        _renderBusinessMessageSnippetText: function(a, b) {
            a = a.share.target;
            a = a && a.message || g._("{sender name} \u0111\u00e3 g\u1eedi m\u1ed9t t\u1ec7p \u0111\u00ednh k\u00e8m.", [g._param("sender name", b)]);
            return a
        },
        _renderP2PPaymentSnippetText: function(a) {
            a = a.share.target;
            return this.renderP2PPaymentSnippetText(b("CurrentUser").getID() === a.sender.id, a.sender.name, a.amountWithSymbol, a.status, b("CurrentUser").getID() === a.receiver.id, a.receiver.name)
        },
        _renderP2PPaymentRequestSnippetText: function(a) {
            a = a.share.target;
            return this.renderP2PPaymentRequestSnippetText(b("CurrentUser").getID() === a.requester.id, a.requester.name, a.amountWithSymbol, a.currentStatus, b("CurrentUser").getID() === a.requestee.id, a.requestee.name)
        },
        renderP2PPaymentSnippetText: function(a, c, d, e, f, g) {
            return b("P2PSnippetStringUtils").getTransferSnippetByStatus(e, a, f || !1, c || "", g || "", d)
        },
        renderP2PPaymentRequestSnippetText: function(a, c, d, e, f, g) {
            return b("P2PSnippetStringUtils").getRequestSnippetByStatus(e, a, f || !1, c || "", g || "", d)
        }
    };
    e.exports = a
}
), null);
__d("PhotosphereMetadata", ["ImmutableRecordWithV4Types"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("ImmutableRecordWithV4Types").Record({
        CroppedAreaImageHeightPixels: 0,
        CroppedAreaImageWidthPixels: 0,
        CroppedAreaLeftPixels: 0,
        CroppedAreaTopPixels: 0,
        FullPanoHeightPixels: 0,
        FullPanoWidthPixels: 0,
        InitialViewHeadingDegrees: 0,
        InitialViewPitchDegrees: 0,
        InitialViewRollDegrees: 0,
        InitialViewVerticalFOVDegrees: 0,
        PoseHeadingDegrees: 0,
        PosePitchDegrees: 0,
        PoseRollDegrees: 0,
        PreProcessCropLeftPixels: 0,
        PreProcessCropRightPixels: 0,
        ProjectionType: "equirectangular",
        RendererProjectionType: "equirectangular"
    });
    f.makePhotosphereMetadata = a
}
), null);
__d("SphericalPhotoUtils", ["PhotoRendererProjection", "PhotosphereMetadata", "SphericalPhotoPartialLimits"], (function(a, b, c, d, e, f) {
    "use strict";
    f.getMetadataFromGraphQLResult = a;
    f.calculatePartialLimits = c;
    f.parseNumber = h;
    f.getThumbnailsFromPhotoEncodings = d;
    f.photosphereMetadataStringToNumber = e;
    var g = b("PhotoRendererProjection").PERSPECTIVE;
    function a(a) {
        return {
            CroppedAreaImageHeightPixels: a.cropped_area_image_height_pixels != null ? a.cropped_area_image_height_pixels.toString() : null,
            CroppedAreaImageWidthPixels: a.cropped_area_image_width_pixels != null ? a.cropped_area_image_width_pixels.toString() : null,
            CroppedAreaLeftPixels: a.cropped_area_left_pixels != null ? a.cropped_area_left_pixels.toString() : null,
            CroppedAreaTopPixels: a.cropped_area_top_pixels != null ? a.cropped_area_top_pixels.toString() : null,
            FullPanoHeightPixels: a.full_pano_height_pixels != null ? a.full_pano_height_pixels.toString() : null,
            FullPanoWidthPixels: a.full_pano_width_pixels != null ? a.full_pano_width_pixels.toString() : null,
            InitialViewHeadingDegrees: a.initial_view_heading_degrees != null ? a.initial_view_heading_degrees.toString() : null,
            InitialViewPitchDegrees: a.initial_view_pitch_degrees != null ? a.initial_view_pitch_degrees.toString() : null,
            InitialViewRollDegrees: a.initial_view_roll_degrees != null ? a.initial_view_roll_degrees.toString() : null,
            InitialViewVerticalFOVDegrees: a.initial_view_vertical_fov_degrees != null ? a.initial_view_vertical_fov_degrees.toString() : null,
            PoseHeadingDegrees: a.pose_heading_degrees != null ? a.pose_heading_degrees.toString() : null,
            PosePitchDegrees: a.pose_pitch_degrees != null ? a.pose_pitch_degrees.toString() : null,
            PoseRollDegrees: a.pose_roll_degrees != null ? a.pose_roll_degrees.toString() : null,
            PreProcessCropLeftPixels: null,
            PreProcessCropRightPixels: null,
            ProjectionType: a.projection_type,
            RendererProjectionType: g
        }
    }
    function c(a) {
        var c = a.FullPanoHeightPixels
          , d = a.FullPanoWidthPixels
          , e = a.CroppedAreaImageWidthPixels
          , f = a.CroppedAreaImageHeightPixels
          , g = a.CroppedAreaLeftPixels;
        a = a.CroppedAreaTopPixels;
        c = h(c);
        d = h(d);
        e = h(e);
        f = h(f);
        g = h(g);
        a = h(a);
        var i, j, k, l;
        if (e !== 0 && e !== d) {
            e = 360 * e / d;
            e < 350 && (i = 180 * (1 - 2 * g / d),
            j = e - i)
        }
        f !== 0 && f !== c && (a !== 0 && (k = 90 * (1 - 2 * a / c)),
        a + f !== c && (l = 180 * (a + f - c / 2) / c));
        g = null;
        d = null;
        e = null;
        a = null;
        k && k < 87.5 && (d = k);
        l && l < 87.5 && (g = l);
        i && (e = i);
        j && (a = j);
        return b("SphericalPhotoPartialLimits").makePartialLimits({
            partialTopDegrees: d,
            partialBottomDegrees: g,
            partialLeftDegrees: e,
            partialRightDegrees: a
        })
    }
    function h(a) {
        return a ? Number(a) : 0
    }
    function d(a) {
        a = a.find(function(a) {
            return a.projection_type === g
        });
        var b = null
          , c = null;
        if (a && a.thumbnails && a.thumbnails.length > 0) {
            a = a.thumbnails;
            b = a[0] ? a[0].uri : null;
            c = a[1] ? a[1].uri : null
        }
        return {
            smallThumbnail: b,
            largeThumbnail: c
        }
    }
    function e(a) {
        var c = {};
        Object.keys(a).forEach(function(b) {
            switch (b) {
            case "ProjectionType":
                c.ProjectionType = a.ProjectionType;
                break;
            case "RendererProjectionType":
                c.RendererProjectionType = a.RendererProjectionType;
                break;
            default:
                c[b] = parseInt(a[b], 10)
            }
        });
        return b("PhotosphereMetadata").makePhotosphereMetadata(c)
    }
}
), null);
