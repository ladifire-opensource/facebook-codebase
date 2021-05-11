if (self.CavalryLogger) {
    CavalryLogger.start_js(["DQtfh"]);
}

__d("AdsPerfInteractionUtil", ["AdsMgmtQPLLogger", "AdsPELoggerUtils", "AdsPerfScenariosGetConfig", "FBLogger", "InteractionTracingMetrics", "PEAppContext", "PEAppLoggerEventCounter", "QuickPerformanceLogger"], (function(a, b, c, d, e, f) {
    "use strict";
    f.annotateInteractionCustomData = a;
    f.annotateBaseInteractionData = c;
    f.markVisibilityEvent = d;
    f.addHeroTracingBaseMetadata = e;
    f.getInstanceKeyForQPL = t;
    f.deleteInstanceKeyForQPL = u;
    f.annotateParallelInteractionCount = v;
    f.resetParallelInteractionCount = w;
    f.shouldStartNewInteraction = x;
    var g = 0
      , h = 1e5
      , i = new Map()
      , j = new Map()
      , k = new Set(["api_request_source", "call_name", "endpoint", "error_code", "error_count", "error_type", "error_subcode", "event_source", "fbtrace_id", "message", "source", "www_request_id", "unified_interface_request_id", "edit_source", "object_level", "item_count", "new_value", "is_edit", "parallel_interaction_count", "current_action_ads_count", "current_action_campaigns_count", "current_action_campaign_groups_count", "is_new_fragment", "is_enabled"]);
    function l(a) {
        for (var c in b("AdsPerfScenariosGetConfig"))
            if (b("AdsPerfScenariosGetConfig")[c].qplEvent === a) {
                var d;
                return (d = b("AdsPerfScenariosGetConfig")[c].name) != null ? d : c
            }
        return null
    }
    function m(a) {
        var c = b("PEAppContext").getEventDataForLogging()
          , d = b("PEAppLoggerEventCounter").get();
        a = a ? l(a) : null;
        var e = ++g;
        a = {
            ad_account_id: c.ad_account_id,
            business_id: c.business_id,
            tracePolicy: a,
            draft_id: c.draft_id,
            sessionId: c.session_id,
            session_event_index: d,
            interaction_index: e,
            interaction_id: c.session_id + "_" + e,
            at_section: c.at_section,
            at_tool: c.at_tool,
            uri: window.location.href,
            referrer: document.referrer,
            current_route: b("AdsPELoggerUtils").getCurrentRouteName(),
            routes: c.routes
        };
        return a
    }
    function n(a) {
        switch (typeof a) {
        case "number":
            return {
                key: "int",
                value: a
            };
        case "string":
            return {
                key: "string",
                value: a
            };
        case "boolean":
            return {
                key: "bool",
                value: a
            }
        }
        return Array.isArray(a) ? {
            key: "string_array",
            value: a.filter(Boolean).map(function(a) {
                return String(a)
            })
        } : null
    }
    function o(a, c) {
        try {
            var d = {
                string: {},
                "int": {},
                bool: {},
                string_array: {}
            };
            for (var e in a) {
                var f = n(a[e]);
                if (f == null || c && !c.has(e)) {
                    a[e] != null && f == null && c && c.has(e) && b("FBLogger")("ads").warn("Ads perf interaction fail to annotate in QPL! annotate key: %s annotate value: %s", e, a[e]);
                    continue
                }
                d[f.key][e] = f.value
            }
            return d
        } catch (a) {
            b("FBLogger")("ads").catching(a).mustfix("Error annotate Ads Manager Interactions QPL event.")
        }
    }
    function p(a, c, d) {
        c = o(babelHelpers["extends"]({}, c, {
            is_log_by_scenario_framework: !0
        }), d);
        c && b("AdsMgmtQPLLogger").markerAnnotate(a, c)
    }
    function a(a, b) {
        p(a, b, k)
    }
    function c(a, b) {
        var c = m(a);
        p(a, babelHelpers["extends"]({}, c, b))
    }
    function d(a) {
        var c = b("PEAppContext").getEventDataForLogging()
          , d = b("PEAppLoggerEventCounter").get();
        b("AdsMgmtQPLLogger").markEvent(270210724, "visibility event", 7, {
            timestamp: b("QuickPerformanceLogger").currentTimestamp(),
            annotations: {
                string: {
                    event: "focus_" + a,
                    sessionId: c.session_id
                },
                "int": {
                    session_event_index: d
                },
                bool: {
                    is_log_by_scenario_framework: !0
                }
            }
        })
    }
    function q() {
        var a = m();
        delete a.interaction_id;
        a.is_log_by_scenario_framework = !1;
        return o(a)
    }
    function r(a) {
        return typeof a === "boolean" ? String(a) : a
    }
    function s(a, c) {
        var d = ["string", "int", "bool"];
        for (var e = 0; e < d.length; e++) {
            var f = d[e];
            for (var g in c[f]) {
                var h = r(c[f][g]);
                b("InteractionTracingMetrics").addMetadata(a, g, h)
            }
        }
        h = function(d) {
            c.string_array[d].forEach(function(c) {
                b("InteractionTracingMetrics").addTag(a, d, c)
            })
        }
        ;
        for (var g in c.string_array)
            h(g)
    }
    function e(a) {
        var b = q();
        b != null && s(a, b)
    }
    function t(a) {
        var b;
        b = (b = i.get(a)) != null ? b : ++h;
        i.set(a, b);
        return b
    }
    function u(a) {
        i["delete"](a)
    }
    function v(a) {
        var c;
        c = (c = j.get(a)) != null ? c : 0;
        j.set(a, ++c);
        b("InteractionTracingMetrics").addMetadata(a, "parallel_interaction_count", c)
    }
    function w(a) {
        a != null && j["delete"](a)
    }
    function x(a) {
        return ((a = b("InteractionTracingMetrics").get(a)) == null ? void 0 : a.completed) != null ? !0 : !1
    }
}
), null);
__d("AdsMgmtGetTimeUtils", ["AdsMgmtProfileTimeCounter", "gkx", "performanceNow"], (function(a, b, c, d, e, f) {
    "use strict";
    f.startTimer = a;
    f.bumpCounter = c;
    var g, h = b("gkx")("1527119");
    function a(a, c) {
        if (h) {
            var d = (g || (g = b("performanceNow")))();
            return function() {
                var e = (g || (g = b("performanceNow")))() - d;
                c.forEach(function(c) {
                    b("AdsMgmtProfileTimeCounter").init(c),
                    b("AdsMgmtProfileTimeCounter").addDuration(c, a, e)
                })
            }
        } else
            return function() {}
    }
    function c(a, c) {
        c.forEach(function(c) {
            b("AdsMgmtProfileTimeCounter").init(c),
            b("AdsMgmtProfileTimeCounter").addDuration(c, a)
        })
    }
}
), null);
__d("IOS14Utils", ["AdAccountModeledReporting", "AdsAPIObjectives", "AdsPromotedObjectTypes", "ads-mobile-platforms", "adsBusinessGK"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = "14.0"
      , h = {
        shouldLimitDeliveryToVersionsBelowIOS14: function(a) {
            var c = a.objective
              , d = a.deviceType;
            a = a.promotedObjectType;
            c = c == b("AdsAPIObjectives").APP_INSTALLS || c == b("AdsAPIObjectives").MOBILE_APP_INSTALLS || c == b("AdsAPIObjectives").CONVERSIONS;
            a = a == b("AdsPromotedObjectTypes").MOBILE_APP;
            d = d == b("ads-mobile-platforms").operatingSystems.IOS || d == "iOS";
            return c && a && d
        },
        shouldChangeDefaultOSSpecForIOS13: function(a) {
            var c = a.account
              , d = a.objective
              , e = a.deviceType;
            a = a.promotedObjectType;
            var f = b("adsBusinessGK")._(c, "1yGtRIW8D")
              , g = h.isIOS14AdAccount(c);
            c = h.shouldLimitDeliveryToVersionsBelowIOS14({
                account: c,
                objective: d,
                promotedObjectType: a,
                deviceType: e
            });
            return c && !g && f
        },
        shouldChangeDefaultOSSpecForIOS14: function(a) {
            var c = b("adsBusinessGK")._(a, "1yGtRIW8D");
            a = h.isIOS14AdAccount(a);
            return a && c
        },
        getRestrictedIOSVersions: function(a, b) {
            b = h.isIOS14AdAccount(b);
            var c = {};
            for (var d in a) {
                var e = parseFloat(d);
                e = b ? e >= parseFloat(g) : e < parseFloat(g);
                e && (c[d] = a[d])
            }
            return c
        },
        isIOS14AdAccount: function(a) {
            return (a == null ? void 0 : a.modeled_reporting_type) === b("AdAccountModeledReporting").IOS14_ACCOUNT
        }
    };
    a = h;
    e.exports = a
}
), null);
__d("BizKitStrings", ["fbt", "BizKitPermissionDisclosureLoggingUtils", "GeoLink.react", "Link.react", "React", "URI", "formatDate"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.getNumberUnread = a;
    f.getFacebookPageLikes = c;
    f.getInstagramFollowers = d;
    f.getInstagramHandle = e;
    f.getHomeHeader = j;
    f.getPermissionDisclosureModalFirstParagraph = k;
    f.getSurveyCardHeader = l;
    f.getUnreadLabel = m;
    f.getUpdatesLabel = n;
    f.getGoToHomeBannerTitle = o;
    f.getGoToHomeBannerDescription = p;
    f.getGoToHomeBannerButton = q;
    f.getLinkConfirmationEducationContent = r;
    f.getLinkConfirmationConfirmSingleAccountIntro = s;
    f.getLinkConfirmationConfirmMultiplaAccountsIntro = t;
    f.getIGCreationTime = u;
    f.getConnectSuccessContent = v;
    f.getPagesComposerUpsell = w;
    f.getPagesComposerUpsellGeneric = x;
    f.getGlobalScopeBusinessAssets = y;
    f.getPageUnavailableHelpCenterText = z;
    f.getExpierationDate = A;
    f.getUpdatesCardCommentAndOthersText = B;
    var h, i = b("React");
    a = g._("Trang ch\u1ee7");
    f.HOME = a;
    c = g._("Li\u00ean k\u1ebft");
    f.SIDEBAR_SECTION_LABEL = c;
    d = g._("Qu\u1ea3n l\u00fd Trang tr\u00ean Facebook");
    f.OPT_OUT = d;
    e = g._("H\u1ec7 th\u1ed1ng s\u1ebd kh\u00f4ng chuy\u1ec3n b\u1ea1n \u0111\u1ebfn \u0111\u00e2y \u0111\u1ec3 qu\u1ea3n l\u00fd Trang n\u1eefa.");
    f.OPT_OUT_DESCRIPTION = e;
    j = g._("Chuy\u1ec3n sang Tr\u00ecnh qu\u1ea3n l\u00fd kinh doanh");
    f.OPT_OUT_AFTER_LAUNCH = j;
    k = g._("B\u1ea1n s\u1ebd kh\u00f4ng \u0111\u01b0\u1ee3c chuy\u1ec3n h\u01b0\u1edbng \u0111\u1ebfn Business Suite n\u1eefa.");
    f.OPT_OUT_DESCRIPTION_AFTER_LAUNCH = k;
    l = g._("Chuy\u1ec3n sang Tr\u00ecnh qu\u1ea3n l\u00fd kinh doanh?");
    f.OPT_OUT_AFTER_LAUNCH_V2 = l;
    m = g._("B\u00e0i vi\u1ebft \u0111\u00e3 l\u00ean l\u1ecbch trong Business Suite s\u1ebd \u0111\u01b0\u1ee3c \u0111\u0103ng nh\u01b0 \u0111\u00e3 \u0111\u1ecbnh. B\u1ea1n ch\u1ec9 c\u00f3 th\u1ec3 xem v\u00e0 qu\u1ea3n l\u00fd nh\u1eefng b\u00e0i vi\u1ebft n\u00e0y trong Business Suite.");
    f.OPT_OUT_DESCRIPTION_AFTER_LAUNCH_V2 = m;
    n = g._("H\u1ee7y");
    f.OPT_OUT_CANCEL_AFTER_LAUNCH = n;
    o = g._("Chuy\u1ec3n");
    f.OPT_OUT_SWITCH_AFTER_LAUNCH = o;
    p = g._("\u0110\u00f3ng g\u00f3p \u00fd ki\u1ebfn");
    f.GIVE_FEEDBACK = p;
    q = g._("B\u1ea3n nh\u00e1p");
    f.DRAFTS = q;
    r = g._("T\u1ea1o b\u00e0i vi\u1ebft");
    f.CREATE_POST = r;
    s = g._("Trang Facebook");
    f.FACEBOOK_PAGE = s;
    t = g._("Trang Facebook, t\u00e0i kho\u1ea3n Instagram");
    f.FACEBOOK_PAGE_INSTAGRAM_ACCOUNT = t;
    u = g._("T\u00e0i kho\u1ea3n Instagram");
    f.INSTAGRAM_ACCOUNT = u;
    v = g._("C\u00f4ng c\u1ee5 kh\u00e1c");
    f.MORE_TOOLS = v;
    w = g._("B\u00e0i vi\u1ebft");
    f.POSTS = w;
    x = g._("\u0110\u00e3 \u0111\u0103ng");
    f.PUBLISHED = x;
    y = g._("Xem t\u1ea5t c\u1ea3");
    f.SEE_ALL = y;
    z = g._("Xem t\u1ea5t c\u1ea3 qu\u1ea3ng c\u00e1o");
    f.SEE_ALL_ADS = z;
    A = g._("Xem t\u1ea5t c\u1ea3 d\u1eef li\u1ec7u ph\u00e2n t\u00edch");
    f.SEE_ALL_ANALYTICS = A;
    B = g._("Xem t\u1ea5t c\u1ea3 th\u00f4ng tin chi ti\u1ebft");
    f.SEE_ALL_INSIGHTS = B;
    a = g._("Xem t\u1ea5t c\u1ea3 b\u00e0i vi\u1ebft");
    f.SEE_ALL_POSTS = a;
    c = g._("\u0110\u00e3 l\u00ean l\u1ecbch");
    f.SCHEDULED = c;
    d = g._("C\u1eadp nh\u1eadt");
    f.UPDATES = d;
    e = g._("B\u1ea1n kh\u00f4ng c\u00f3 th\u00f4ng tin m\u1edbi n\u00e0o.");
    f.NO_UPDATES_BODY = e;
    j = g._("Ho\u1ea1t \u0111\u1ed9ng");
    f.ACTIVITY = j;
    k = g._("S\u1ed1 ng\u01b0\u1eddi ti\u1ebfp c\u1eadn \u0111\u01b0\u1ee3c");
    f.REACH = k;
    l = g._("C\u1ea3m x\u00fac v\u1ec1 b\u00e0i vi\u1ebft");
    f.REACTION = l;
    m = g._("L\u01b0\u1ee3t th\u00edch b\u00e0i vi\u1ebft");
    f.LIKES = m;
    n = g._("B\u00ecnh lu\u1eadn");
    f.COMMENTS = n;
    o = g._("L\u01b0\u1ee3t ph\u1ea3n h\u1ed3i");
    f.RESPONSES = o;
    p = g._("H\u00e0nh \u0111\u1ed9ng");
    f.ACTIONS = p;
    q = g._("\u0110\u00e1nh d\u1ea5u l\u00e0 ch\u01b0a \u0111\u1ecdc");
    f.MARK_AS_UNREAD = q;
    r = g._("\u0110\u00e1nh d\u1ea5u l\u00e0 \u0111\u00e3 \u0111\u1ecdc");
    f.MARK_AS_READ = r;
    s = g._("Kh\u00f4ng c\u00f3 th\u00f4ng b\u00e1o m\u1edbi");
    f.NO_NOTIFICATIONS = s;
    t = g._("Th\u00f4ng b\u00e1o m\u1edbi cho t\u00e0i kho\u1ea3n Instagram v\u00e0 Trang Facebook c\u1ee7a b\u1ea1n s\u1ebd hi\u1ec3n th\u1ecb \u1edf \u0111\u00e2y.");
    f.NO_NOTIFICATIONS_DESCRIPTION = t;
    u = g._("L\u00e0m m\u1edbi");
    f.REFRESH_NOTIFICATIONS = u;
    v = g._("\u0110\u00e3 g\u1eedi m\u1ed9t t\u1ec7p \u0111\u00ednh k\u00e8m");
    f.SENT_AN_ATTACHMENT = v;
    w = g._("G\u1eedi l\u01b0\u1ee3t th\u00edch");
    f.SENT_A_LIKE = w;
    x = g._("S\u1ed1 ng\u01b0\u1eddi ti\u1ebfp c\u1eadn");
    f.INSTAGRAM_REACH = x;
    y = g._("S\u1ed1 ng\u01b0\u1eddi theo d\u00f5i m\u1edbi");
    f.NEW_INSTAGRAM_FOLLOWERS = y;
    z = g._("B\u1ea1n \u0111\u00e3 c\u00f3 t\u00ean trong danh s\u00e1ch ch\u1edd!");
    f.UPSELL_DIALOG_TITLE = z;
    A = g._("Ch\u00fang t\u00f4i s\u1ebd th\u00f4ng b\u00e1o cho b\u1ea1n khi tr\u1ea3i nghi\u1ec7m m\u1edbi s\u1eb5n s\u00e0ng.");
    f.UPSELL_DIALOG_DESCRIPTION = A;
    B = g._("S\u1ed1 t\u00e0i kho\u1ea3n m\u1edbi b\u1eaft \u0111\u1ea7u theo d\u00f5i t\u00e0i kho\u1ea3n Instagram c\u1ee7a b\u1ea1n.");
    f.NEW_INSTAGRAM_FOLLOWERS_METRIC_DEFINITION = B;
    a = g._("Gi\u1edbi thi\u1ec7u c\u00e1ch qu\u1ea3n l\u00fd Trang Facebook v\u00e0 t\u00e0i kho\u1ea3n Instagram \u0111\u01a1n gi\u1ea3n h\u01a1n");
    f.WELCOME_MODAL_EASIER_WAY_TO_MANAGE = a;
    c = g._("Ch\u00e0o m\u1eebng b\u1ea1n \u0111\u1ebfn v\u1edbi Facebook Business");
    f.WELCOME_MODAL_HEADER = c;
    d = g._("B\u1ea1n \u0111\u00e3 c\u00f3 th\u1ec3 qu\u1ea3n l\u00fd doanh nghi\u1ec7p c\u1ee7a m\u00ecnh tr\u00ean Facebook v\u00e0 Instagram, t\u1ea5t c\u1ea3 \u1edf c\u00f9ng m\u1ed9t n\u01a1i");
    f.WELCOME_MODAL_MANAGE_IN_ONE_PLACE = d;
    e = g._("H\u00e3y \u0111\u0103ng l\u00ean Facebook v\u00e0 Instagram c\u00f9ng l\u00fac \u0111\u1ec3 ti\u1ebft ki\u1ec7m th\u1eddi gian v\u00e0 ti\u1ebfp c\u1eadn nhi\u1ec1u ng\u01b0\u1eddi h\u01a1n.");
    f.WELCOME_MODAL_SAVE_TIME = e;
    j = g._("Xem t\u1ea5t c\u1ea3 tin nh\u1eafn, b\u00ecnh lu\u1eadn v\u00e0 ho\u1ea1t \u0111\u1ed9ng tr\u00ean c\u00f9ng m\u1ed9t m\u00e0n h\u00ecnh \u0111\u1ec3 nhanh ch\u00f3ng n\u1eafm \u0111\u01b0\u1ee3c nh\u1eefng \u0111i\u1ec1u c\u1ea7n ch\u00fa \u00fd.");
    f.WELCOME_MODAL_VIEW_MESSAGES = j;
    k = g._("Xem th\u00f4ng tin chi ti\u1ebft v\u1ec1 \u0111\u1ed1i t\u01b0\u1ee3ng tr\u00ean c\u1ea3 Facebook l\u1eabn Instagram \u1edf c\u00f9ng m\u1ed9t n\u01a1i.");
    f.WELCOME_MODAL_GET_INSIGHTS = k;
    l = g._("OK");
    f.OK = l;
    m = g._("X\u00e1c nh\u1eadn quy\u1ec1n truy c\u1eadp");
    f.PERMISSION_DISCLOSURE_MODAL_HEADING = m;
    n = g._("T\u00f9y thu\u1ed9c v\u00e0o vai tr\u00f2 tr\u00ean Trang Facebook, m\u1ecdi ng\u01b0\u1eddi c\u00f3 th\u1ec3 qu\u1ea3n l\u00fd n\u1ed9i dung, h\u1ed9p th\u01b0, c\u00e0i \u0111\u1eb7t, quy\u1ec1n \u0111\u1ed1i v\u1edbi Facebook v\u00e0 Instagram, ch\u1eb3ng h\u1ea1n nh\u01b0:");
    f.PERMISSION_DISCLOSURE_MODAL_SECOND_PARAGRAPH = n;
    o = g._("B\u00e0i vi\u1ebft v\u00e0 tin");
    f.PERMISSION_DISCLOSURE_MODAL_ENTITY_POSTS = o;
    p = g._("Qu\u1ea3ng c\u00e1o v\u00e0 b\u00ecnh lu\u1eadn v\u1ec1 qu\u1ea3ng c\u00e1o");
    f.PERMISSION_DISCLOSURE_MODAL_ENTITY_ADS = p;
    q = g._("Tin nh\u1eafn v\u00e0 b\u00ecnh lu\u1eadn");
    f.PERMISSION_DISCLOSURE_MODAL_ENTITY_MESSAGES = q;
    r = g._("Th\u00f4ng tin li\u00ean h\u1ec7 c\u1ee7a doanh nghi\u1ec7p");
    f.PERMISSION_DISCLOSURE_MODAL_ENTITY_CONTACTS = r;
    s = g._("X\u00e1c nh\u1eadn");
    f.PERMISSION_DISCLOSURE_MODAL_BUTTON_LABEL_CONFIRM = s;
    t = g._("\u0110\u00e3 x\u1ea3y ra l\u1ed7i");
    f.PERMISSION_DISCLOSURE_MODAL_ERROR_HEADER = t;
    u = g._("H\u00e3y th\u1eed l\u1ea1i sau.");
    f.PERMISSION_DISCLOSURE_MODAL_ERROR_MESSAGE = u;
    v = g._("\u0110\u00e3 x\u00e1c nh\u1eadn quy\u1ec1n truy c\u1eadp");
    f.PERMISSION_DISCLOSURE_MODAL_SUCCESS_HEADER = v;
    w = g._("T\u1eeb gi\u1edd, nh\u1eefng ng\u01b0\u1eddi qu\u1ea3n l\u00fd Trang Facebook c\u1ee7a b\u1ea1n c\u00f3 th\u1ec3 qu\u1ea3n l\u00fd n\u1ed9i dung tr\u00ean Instagram.");
    f.PERMISSION_DISCLOSURE_MODAL_SUCCESS_MESSAGE = w;
    x = g._("Th\u1eed l\u1ea1i");
    f.PERMISSION_DISCLOSURE_MODAL_BUTTON_LABEL_TRY_AGAIN = x;
    y = g._("B\u1ea1n c\u00f3 th\u1ec3 d\u00e0nh v\u00e0i ph\u00fat \u0111\u1ec3 tr\u1ea3 l\u1eddi m\u1ed9t cu\u1ed9c kh\u1ea3o s\u00e1t ng\u1eafn kh\u00f4ng?");
    f.SURVEY_CARD_CONTENT = y;
    z = g._("B\u1eaft \u0111\u1ea7u kh\u1ea3o s\u00e1t");
    f.SURVEY_CARD_BUTTON = z;
    A = g._("Chia s\u1ebb l\u00ean Facebook v\u00e0 Instagram");
    f.HOME_PRODUCT_TOUR_CREATE_POST_HEADING = A;
    B = g._("T\u1ea1o, l\u00ean l\u1ecbch v\u00e0 \u0111\u0103ng b\u00e0i vi\u1ebft cho Trang Facebook v\u00e0 t\u00e0i kho\u1ea3n Instagram c\u00f9ng l\u00fac.");
    f.HOME_PRODUCT_TOUR_CREATE_POST_CONTENT = B;
    a = g._("Xem c\u00e1c ho\u1ea1t \u0111\u1ed9ng quan tr\u1ecdng nh\u1ea5t");
    f.HOME_PRODUCT_TOUR_UPDATES_CARD_HEADING = a;
    c = g._("C\u1eadp nh\u1eadt nh\u1eefng n\u1ed9i dung quan tr\u1ecdng nh\u1ea5t c\u1ea7n ch\u00fa \u00fd, bao g\u1ed3m tin nh\u1eafn, b\u00ecnh lu\u1eadn, v.v.");
    f.HOME_PRODUCT_TOUR_UPDATES_CARD_CONTENT = c;
    d = g._("Ch\u1ecdn t\u00e0i kho\u1ea3n b\u1ea1n mu\u1ed1n truy c\u1eadp");
    f.HOME_PRODUCT_TOUR_GLOBAL_SCOPE_SELECTOR_HEADING = d;
    e = g._("Ch\u1ecdn t\u00e0i kho\u1ea3n kinh doanh ho\u1eb7c t\u00e0i kho\u1ea3n c\u00e1 nh\u00e2n \u0111\u1ec3 qu\u1ea3n l\u00fd Trang Facebook v\u00e0 t\u00e0i kho\u1ea3n Instagram li\u00ean k\u1ebft v\u1edbi t\u00e0i kho\u1ea3n \u0111\u00f3.");
    f.HOME_PRODUCT_TOUR_GLOBAL_SCOPE_SELECTOR_CONTENT = e;
    j = g._("Ch\u1ecdn Trang Facebook\/t\u00e0i kho\u1ea3n Instagram b\u1ea1n mu\u1ed1n s\u1eed d\u1ee5ng");
    f.HOME_PRODUCT_TOUR_PRESENCE_SELECTOR_HEADING = j;
    k = g._("Ch\u1ecdn trong danh s\u00e1ch c\u00e1c Trang Facebook v\u00e0 t\u00e0i kho\u1ea3n Instagram m\u00e0 b\u1ea1n qu\u1ea3n l\u00fd.");
    f.HOME_PRODUCT_TOUR_PRESENCE_SELECTOR_CONTENT = k;
    l = g._("Kh\u00e1m ph\u00e1 th\u00eam c\u00e1c c\u00f4ng c\u1ee5 v\u00e0 t\u00f9y ch\u1ecdn c\u00e0i \u0111\u1eb7t");
    f.HOME_PRODUCT_TOUR_MORE_TOOLS_HEADING = l;
    m = g._("T\u00ecm th\u00eam c\u00e1c c\u00f4ng c\u1ee5, truy c\u1eadp v\u00e0o ph\u1ea7n c\u00e0i \u0111\u1eb7t v\u00e0 xem Trang Facebook c\u1ee7a b\u1ea1n.");
    f.HOME_PRODUCT_TOUR_MORE_TOOLS_CONTENT = m;
    n = g._("T\u00e0i kho\u1ea3n kinh doanh");
    f.GLOBAL_SCOPE_SELECTOR_BUSINESS_ACCOUNTS_HEADER = n;
    o = g._("T\u00e0i kho\u1ea3n c\u1ee7a b\u1ea1n");
    f.GLOBAL_SCOPE_SELECTOR_PERSONAL_SCOPE_HEADER = o;
    p = g._("C\u1ea3m \u01a1n b\u1ea1n \u0111\u00e3 d\u00e0nh th\u1eddi gian xem n\u1ed9i dung m\u1edbi. \u0110\u1ec3 t\u00ecm hi\u1ec3u th\u00eam, h\u00e3y truy c\u1eadp v\u00e0o {Link to the BizWeb Help Center}.", [g._param("Link to the BizWeb Help Center", i.jsx(b("GeoLink.react"), {
        href: new (h || (h = b("URI")))("/business/help/205614130852988").setSubdomain("www"),
        target: "_blank",
        children: g._("Trung t\u00e2m tr\u1ee3 gi\u00fap")
    }))]);
    f.HOME_PRODUCT_TOUR_THANKS_FOR_TAKING = p;
    q = g._("H\u00e3y xem c\u00e1c t\u00ednh n\u0103ng gi\u00fap b\u1ea1n qu\u1ea3n l\u00fd Trang Facebook v\u00e0 t\u00e0i kho\u1ea3n Instagram d\u1ec5 d\u00e0ng h\u01a1n.");
    f.INBOX_ACQUISITION_FIRST_TIME_MODAL_CONTENT = q;
    r = g._("C\u00e1c c\u00e1ch kh\u00e1c \u0111\u1ec3 qu\u1ea3n l\u00fd Facebook v\u00e0 Instagram");
    f.INBOX_ACQUISITION_RETURNING_USER_MODAL_HEADER = r;
    s = g._("B\u1ea1n c\u00f3 th\u1ec3 chia s\u1ebb ho\u1eb7c l\u00ean l\u1ecbch \u0111\u0103ng b\u00e0i vi\u1ebft, xem l\u1ea1i nh\u1eefng n\u1ed9i dung c\u1ea7n ch\u00fa \u00fd, c\u0169ng nh\u01b0 xem c\u00e1c qu\u1ea3ng c\u00e1o v\u00e0 b\u00e0i vi\u1ebft g\u1ea7n \u0111\u00e2y tr\u00ean Trang ch\u1ee7.");
    f.INBOX_ACQUISITION_RETURNING_USER_MODAL_CONTENT = s;
    t = g._("\u0110i \u0111\u1ebfn Trang ch\u1ee7");
    f.INBOX_ACQUISITION_RETURNING_USER_GO_TO_HOME = t;
    u = g._("Qu\u1ea3ng c\u00e1o");
    f.PROMOTE_BUTTON = u;
    v = g._("Ti\u1ebfp t\u1ee5c");
    f.SURVEY_CONTINUE_BUTTON = v;
    w = g._("Xong");
    f.SURVEY_DONE_BUTTON = w;
    x = g._("Kh\u1ea3o s\u00e1t");
    f.SURVEY_DIALOG_HEADING = x;
    y = g._("Kh\u00f4ng c\u00f3 Trang n\u00e0o \u0111\u1ec3 hi\u1ec3n th\u1ecb");
    f.NO_PAGE_NULL_STATE_TITLE = y;
    z = g._("B\u1ea1n c\u00f3 th\u1ec3 \u0111i \u0111\u1ebfn ph\u1ea7n C\u00e0i \u0111\u1eb7t cho doanh nghi\u1ec7p \u0111\u1ec3 t\u1ea1o Trang m\u1edbi ho\u1eb7c th\u00eam Trang hi\u1ec7n t\u1ea1i v\u00e0o doanh nghi\u1ec7p c\u1ee7a m\u00ecnh.");
    f.NO_PAGE_NULL_STATE_DESCRIPTION = z;
    A = g._("\u0110i \u0111\u1ebfn ph\u1ea7n C\u00e0i \u0111\u1eb7t cho doanh nghi\u1ec7p");
    f.GO_TO_BUSINESS_SETTINGS_BUTTON_LABEL = A;
    function a(a) {
        return a > 20 ? g._("H\u01a1n 20 tin nh\u1eafn ch\u01b0a \u0111\u1ecdc") : g._("{number} tin nh\u1eafn ch\u01b0a \u0111\u1ecdc", [g._param("number", a)])
    }
    function c(a, b) {
        return g._({
            "*": "Trang Facebook \u00b7 {number} l\u01b0\u1ee3t th\u00edch Trang",
            "_1": "Trang Facebook \u00b7 1 l\u01b0\u1ee3t th\u00edch Trang"
        }, [g._plural(a, "number", b)])
    }
    function d(a, b) {
        return g._({
            "*": "T\u00e0i kho\u1ea3n Instagram \u00b7 {number} ng\u01b0\u1eddi theo d\u00f5i",
            "_1": "T\u00e0i kho\u1ea3n Instagram \u00b7 1 ng\u01b0\u1eddi theo d\u00f5i"
        }, [g._plural(a, "number", b)])
    }
    function e(a) {
        return g._("\u0040{username}", [g._param("username", a)])
    }
    function j(a, b) {
        if (a == 0 && b == 0)
            return g._("Sau \u0111\u00e2y l\u00e0 t\u00ecnh h\u00ecnh ho\u1ea1t \u0111\u1ed9ng c\u1ee7a doanh nghi\u1ec7p b\u1ea1n h\u00f4m nay.");
        else if (a == 0)
            return b > 20 ? g._({
                "*": "B\u1ea1n c\u00f3 h\u01a1n 20 th\u00f4ng tin m\u1edbi c\u1ea7n xem x\u00e9t."
            }, [g._plural(b)]) : g._({
                "*": "B\u1ea1n c\u00f3 {updates} th\u00f4ng tin m\u1edbi c\u1ea7n xem x\u00e9t.",
                "_1": "B\u1ea1n c\u00f3 1 th\u00f4ng tin m\u1edbi c\u1ea7n xem x\u00e9t."
            }, [g._plural(b, "updates")]);
        else if (b == 0)
            return a > 20 ? g._({
                "*": "B\u1ea1n c\u00f3 h\u01a1n 20 th\u00f4ng b\u00e1o c\u1ea7n xem x\u00e9t."
            }, [g._plural(a)]) : g._({
                "*": "B\u1ea1n c\u00f3 {alerts} th\u00f4ng b\u00e1o c\u1ea7n xem x\u00e9t.",
                "_1": "B\u1ea1n c\u00f3 1 th\u00f4ng b\u00e1o c\u1ea7n xem x\u00e9t."
            }, [g._plural(a, "alerts")]);
        else {
            if (a > 20 && b > 20)
                return g._({
                    "*": {
                        "*": "B\u1ea1n c\u00f3 h\u01a1n 20 th\u00f4ng b\u00e1o v\u00e0 h\u01a1n 20 th\u00f4ng tin m\u1edbi c\u1ea7n xem x\u00e9t."
                    },
                    "_1": {
                        "*": "B\u1ea1n c\u00f3 h\u01a1n 20 th\u00f4ng b\u00e1o v\u00e0 h\u01a1n 20 th\u00f4ng tin m\u1edbi c\u1ea7n xem x\u00e9t."
                    }
                }, [g._plural(a), g._plural(b)]);
            else if (a > 20)
                return g._({
                    "*": {
                        "*": "B\u1ea1n c\u00f3 h\u01a1n 20 th\u00f4ng b\u00e1o v\u00e0 {updates} th\u00f4ng tin m\u1edbi c\u1ea7n xem x\u00e9t.",
                        "_1": "B\u1ea1n c\u00f3 h\u01a1n 20 th\u00f4ng b\u00e1o v\u00e0 h\u01a1n 1 th\u00f4ng tin m\u1edbi c\u1ea7n xem x\u00e9t."
                    },
                    "_1": {
                        "*": "B\u1ea1n c\u00f3 h\u01a1n 20 th\u00f4ng b\u00e1o v\u00e0 {updates} th\u00f4ng tin m\u1edbi c\u1ea7n xem x\u00e9t.",
                        "_1": "B\u1ea1n c\u00f3 h\u01a1n 20 th\u00f4ng b\u00e1o v\u00e0 1 th\u00f4ng tin m\u1edbi c\u1ea7n xem x\u00e9t."
                    }
                }, [g._plural(a), g._plural(b, "updates")]);
            else if (b > 20)
                return g._({
                    "*": {
                        "*": "B\u1ea1n c\u00f3 {alerts} th\u00f4ng b\u00e1o v\u00e0 h\u01a1n 20 th\u00f4ng tin m\u1edbi c\u1ea7n xem x\u00e9t."
                    },
                    "_1": {
                        "*": "B\u1ea1n c\u00f3 1 th\u00f4ng b\u00e1o v\u00e0 h\u01a1n 20 th\u00f4ng tin m\u1edbi c\u1ea7n xem x\u00e9t."
                    }
                }, [g._plural(a, "alerts"), g._plural(b)]);
            return g._({
                "*": {
                    "*": "B\u1ea1n c\u00f3 {alerts} th\u00f4ng b\u00e1o v\u00e0 {updates} th\u00f4ng tin m\u1edbi c\u1ea7n xem x\u00e9t.",
                    "_1": "B\u1ea1n c\u00f3 {alerts} th\u00f4ng b\u00e1o v\u00e0 1 th\u00f4ng tin m\u1edbi c\u1ea7n xem x\u00e9t."
                },
                "_1": {
                    "*": "B\u1ea1n c\u00f3 1 th\u00f4ng b\u00e1o v\u00e0 {updates} th\u00f4ng tin m\u1edbi c\u1ea7n xem x\u00e9t.",
                    "_1": "B\u1ea1n c\u00f3 1 th\u00f4ng b\u00e1o v\u00e0 1 th\u00f4ng tin m\u1edbi c\u1ea7n xem x\u00e9t."
                }
            }, [g._plural(a, "alerts"), g._plural(b, "updates")])
        }
    }
    function k(a, c, d) {
        return g._("\u0110\u1ec3 t\u1eadn d\u1ee5ng t\u1ed1i \u0111a m\u1ecdi t\u00ednh n\u0103ng, \u0111\u1ed9i ng\u0169 qu\u1ea3n tr\u1ecb Trang Facebook {Facebook page name} c\u0169ng c\u1ea7n c\u00f3 quy\u1ec1n truy c\u1eadp nh\u1eb1m qu\u1ea3n l\u00fd n\u1ed9i dung tr\u00ean t\u00e0i kho\u1ea3n Instagram {Instagram account name}. {=Learn More}", [g._param("Facebook page name", i.jsx("strong", {
            children: a
        })), g._param("Instagram account name", i.jsxs("strong", {
            children: ["@", c]
        })), g._param("=Learn More", i.jsx(b("GeoLink.react"), {
            href: new (h || (h = b("URI")))("/help/2546917405323366").setSubdomain("www"),
            target: "_blank",
            onClick: function() {
                b("BizKitPermissionDisclosureLoggingUtils").logCustomEvent(d, "UI_FEATURE_CONFIRMATION_LEARN_MORE")
            },
            children: g._("T\u00ecm hi\u1ec3u th\u00eam")
        }))])
    }
    function l(a) {
        return g._("{user name} \u01a1i, ch\u00fang t\u00f4i \u0111ang xin \u00fd ki\u1ebfn c\u1ee7a m\u1ed9t s\u1ed1 ng\u01b0\u1eddi", [g._param("user name", a)])
    }
    function m(a) {
        return g._("{numUnread} m\u1ee5c ch\u01b0a \u0111\u1ecdc", [g._param("numUnread", a)])
    }
    function n(a) {
        return g._("{updatesCount} th\u00f4ng tin m\u1edbi", [g._param("updatesCount", a)])
    }
    function o() {
        return g._("Ch\u00e0o m\u1eebng b\u1ea1n \u0111\u1ebfn v\u1edbi Facebook Business Suite")
    }
    function p() {
        return g._("\u0110\u1ec3 t\u1ea1o b\u00e0i vi\u1ebft, h\u00e3y t\u00ecm th\u00eam n\u1ed9i dung \u0111\u00e1ng ch\u00fa \u00fd, \u0111\u1ed3ng th\u1eddi \u0111i \u0111\u1ebfn Trang ch\u1ee7 \u0111\u1ec3 xem qu\u1ea3ng c\u00e1o v\u00e0 b\u00e0i vi\u1ebft g\u1ea7n \u0111\u00e2y.")
    }
    function q() {
        return g._("Truy c\u1eadp trang ch\u1ee7")
    }
    B = g._("X\u00e1c nh\u1eadn k\u1ebft n\u1ed1i c\u1ee7a b\u1ea1n \u0111\u1ec3 t\u1eadn h\u01b0\u1edfng nhi\u1ec1u t\u00ednh n\u0103ng h\u01a1n");
    f.LINK_CONFIRMATION_EDUCATION_TITLE = B;
    function r(a) {
        return g._("\u0110\u1ec3 ti\u1ebfp c\u1eadn c\u1ed9ng \u0111\u1ed3ng hi\u1ec7u qu\u1ea3 h\u01a1n, h\u00e3y x\u00e1c nh\u1eadn k\u1ebft n\u1ed1i gi\u1eefa {pageName} {=Facebook Page} v\u00e0 Instagram.", [g._param("pageName", i.jsx("strong", {
            children: a
        })), g._param("=Facebook Page", i.jsx("strong", {
            children: g._("Trang Facebook")
        }))])
    }
    a = g._("X\u00e1c nh\u1eadn k\u1ebft n\u1ed1i Trang Facebook v\u1edbi Instagram");
    f.LINK_CONFIRMATION_CONFIRM_TITLE = a;
    function s(a, c, d) {
        return g._("M\u1ed9t qu\u1ea3n tr\u1ecb vi\u00ean ho\u1eb7c bi\u00ean t\u1eadp vi\u00ean c\u1ee7a Trang \u0111\u00e3 k\u1ebft n\u1ed1i {pageName} v\u1edbi {igName} v\u00e0o {igConnectTime}.", [g._param("pageName", i.jsx("strong", {
            children: a
        })), g._param("igName", i.jsx("strong", {
            children: "@" + c
        })), g._param("igConnectTime", b("formatDate")(d, "M j, Y"))])
    }
    c = g._("\u0110\u0103ng nh\u1eadp v\u00e0o Instagram \u0111\u1ec3 x\u00e1c nh\u1eadn k\u1ebft n\u1ed1i n\u00e0y v\u00e0 s\u1eed d\u1ee5ng t\u1ea5t c\u1ea3 t\u00ednh n\u0103ng tr\u00ean Facebook c\u0169ng nh\u01b0 Instagram. B\u1ea1n c\u0169ng c\u00f3 th\u1ec3 ng\u1eaft k\u1ebft n\u1ed1i t\u00e0i kho\u1ea3n.");
    f.LINK_CONFIRMATION_CONFIRM_SINGLE_ACCOUNT_CONTENT = c;
    function t(a) {
        return g._("Tr\u01b0\u1edbc \u0111\u00f3, qu\u1ea3n tr\u1ecb vi\u00ean ho\u1eb7c bi\u00ean t\u1eadp vi\u00ean c\u1ee7a Trang \u0111\u00e3 k\u1ebft n\u1ed1i {pageName} v\u1edbi 2 t\u00e0i kho\u1ea3n Instagram. \u0110\u1ec3 s\u1eed d\u1ee5ng t\u1ea5t c\u1ea3 t\u00ednh n\u0103ng tr\u00ean Facebook v\u00e0 Instagram, h\u00e3y ch\u1ecdn m\u1ed9t t\u00e0i kho\u1ea3n \u0111\u1ec3 k\u1ebft n\u1ed1i r\u1ed3i \u0111\u0103ng nh\u1eadp \u0111\u1ec3 x\u00e1c nh\u1eadn k\u1ebft n\u1ed1i \u0111\u00f3.", [g._param("pageName", i.jsx("strong", {
            children: a
        }))])
    }
    d = g._("T\u00e0i kho\u1ea3n Instagram c\u00f2n l\u1ea1i s\u1ebd b\u1ecb ng\u1eaft k\u1ebft n\u1ed1i kh\u1ecfi Trang c\u1ee7a b\u1ea1n.");
    f.LINK_CONFIRMATION_CONFIRM_MULTIPLE_ACCOUNTS_CONTENT = d;
    function u(a) {
        return g._("\u0110\u00e3 k\u1ebft n\u1ed1i v\u00e0o {igConnectTime}", [g._param("igConnectTime", b("formatDate")(a, "M j, Y"))])
    }
    e = g._("Ng\u1eaft k\u1ebft n\u1ed1i t\u00e0i kho\u1ea3n Instagram?");
    f.CONFIRM_DISCONNECT_SINGLE_ACCOUNT_TITLE = e;
    j = g._("Ng\u1eaft k\u1ebft n\u1ed1i c\u1ea3 hai t\u00e0i kho\u1ea3n Instagram?");
    f.CONFIRM_DISCONNECT_MULTIPLE_ACCOUNTS_TITLE = j;
    k = g._("N\u1ebfu b\u1ea1n ng\u1eaft k\u1ebft n\u1ed1i t\u00e0i kho\u1ea3n Instagram th\u00ec h\u1ec7 th\u1ed1ng s\u1ebd g\u1ee1 ph\u1ea7n l\u1edbn th\u00f4ng tin \u0111\u00e3 chia s\u1ebb kh\u1ecfi n\u1ec1n t\u1ea3ng c\u00f2n l\u1ea1i. V\u00ed d\u1ee5: th\u00f4ng tin chi ti\u1ebft v\u1ec1 qu\u1ea3ng c\u00e1o, b\u00ecnh lu\u1eadn v\u00e0 tin nh\u1eafn trong H\u1ed9p th\u01b0 s\u1ebd b\u1ecb g\u1ee1 kh\u1ecfi Facebook.");
    f.CONFIRM_DISCONNECT_SINGLE_ACCOUNT_INTRO = k;
    l = g._("N\u1ebfu b\u1ea1n ng\u1eaft k\u1ebft n\u1ed1i c\u1ea3 hai t\u00e0i kho\u1ea3n Instagram th\u00ec h\u1ec7 th\u1ed1ng s\u1ebd g\u1ee1 ph\u1ea7n l\u1edbn th\u00f4ng tin \u0111\u00e3 chia s\u1ebb kh\u1ecfi n\u1ec1n t\u1ea3ng c\u00f2n l\u1ea1i. V\u00ed d\u1ee5: th\u00f4ng tin chi ti\u1ebft v\u1ec1 qu\u1ea3ng c\u00e1o, b\u00ecnh lu\u1eadn v\u00e0 tin nh\u1eafn trong H\u1ed9p th\u01b0 s\u1ebd b\u1ecb g\u1ee1 kh\u1ecfi Facebook.");
    f.CONFIRM_DISCONNECT_MULTIPLE_ACCOUNT_INTRO = l;
    m = g._("M\u1ecdi ng\u01b0\u1eddi v\u1eabn nh\u00ecn th\u1ea5y m\u1ecdi b\u00e0i vi\u1ebft \u0111\u00e3 chia s\u1ebb v\u00e0 th\u00f4ng tin doanh nghi\u1ec7p \u0111\u00e3 \u0111\u1ed3ng b\u1ed9 tr\u01b0\u1edbc \u0111\u00f3.");
    f.CONFIMR_DISCONNECT_CONTENT = m;
    n = g._("\u0110\u00e3 ng\u1eaft k\u1ebft n\u1ed1i t\u00e0i kho\u1ea3n");
    f.DISCONNECT_SINGLE_ACCOUNT_SUCCESS_TITLE = n;
    o = g._("\u0110\u00e3 ng\u1eaft k\u1ebft n\u1ed1i t\u00e0i kho\u1ea3n");
    f.DISCONNECT_MULTIPLE_ACCOUNTS_SUCCESS_TITLE = o;
    p = g._("B\u1ea1n c\u00f3 th\u1ec3 k\u1ebft n\u1ed1i Trang c\u1ee7a m\u00ecnh v\u1edbi t\u00e0i kho\u1ea3n Instagram b\u1ea5t c\u1ee9 l\u00fac n\u00e0o trong ph\u1ea7n C\u00e0i \u0111\u1eb7t Trang.");
    f.DISCONNECT_CONTENT = p;
    q = g._("\u0110\u00e3 x\u00e1c nh\u1eadn k\u1ebft n\u1ed1i");
    f.CONNECT_SUCCESS_TITLE = q;
    function v(a, b) {
        return g._("\u0110\u00e3 x\u00e1c nh\u1eadn k\u1ebft n\u1ed1i gi\u1eefa {page name} v\u00e0 {IG username}.", [g._param("page name", i.jsx("strong", {
            children: a
        })), g._param("IG username", i.jsx("strong", {
            children: "@" + b
        }))])
    }
    r = g._("K\u1ebft n\u1ed1i kh\u00f4ng th\u00e0nh c\u00f4ng");
    f.CONNECT_FAILURE_TITLE = r;
    s = g._("Ng\u1eaft k\u1ebft n\u1ed1i kh\u00f4ng th\u00e0nh c\u00f4ng");
    f.DISCONNECT_FAILURE_TITLE = s;
    t = g._("\u0110\u00e3 x\u1ea3y ra l\u1ed7i. Vui l\u00f2ng th\u1eed l\u1ea1i.");
    f.CONNECT_FAILURE_GENERAL_ERROR = t;
    u = g._("X\u00e1c nh\u1eadn k\u1ebft n\u1ed1i");
    f.CONFIRM_CONNECT_BUTTON = u;
    v = g._("Ng\u1eaft k\u1ebft n\u1ed1i t\u00e0i kho\u1ea3n");
    f.DISCONNECT_BUTTON = v;
    w = g._("Ng\u1eaft k\u1ebft n\u1ed1i c\u1ea3 hai t\u00e0i kho\u1ea3n");
    f.DISCONNECT_MULTIPLE_ACCOUNTS_BUTTON = w;
    x = g._("T\u00f9y theo vai tr\u00f2 tr\u00ean Trang Facebook, nh\u1eefng ng\u01b0\u1eddi h\u1ed7 tr\u1ee3 b\u1ea1n qu\u1ea3n l\u00fd Trang c\u00f3 th\u1ec3 \u0111\u01b0\u1ee3c ph\u00e9p qu\u1ea3n l\u00fd n\u1ed9i dung tr\u00ean c\u1ea3 Facebook l\u1eabn Instagram, ch\u1eb3ng h\u1ea1n nh\u01b0:");
    f.PERMISSION_INTRO = x;
    y = g._("{=Things People Can Help Manage}", [g._param("=Things People Can Help Manage", i.jsx("strong", {
        children: g._("N\u1ed9i dung m\u1ecdi ng\u01b0\u1eddi c\u00f3 th\u1ec3 h\u1ed7 tr\u1ee3 qu\u1ea3n l\u00fd")
    }))]);
    f.DROPDOWN_MENU_TITLE = y;
    z = g._("N\u1ed9i dung, qu\u1ea3ng c\u00e1o v\u00e0 th\u00f4ng tin chi ti\u1ebft");
    f.CONTENT_ADS_INSIGHTS_PERMISSION = z;
    A = g._("C\u00e0i \u0111\u1eb7t v\u00e0 quy\u1ec1n");
    f.SETTING_PERMISSION = A;
    B = g._("Tin nh\u1eafn v\u00e0 b\u00ecnh lu\u1eadn");
    f.MESSAGES_COMMENTS = B;
    a = g._("Qu\u1ea3n l\u00fd t\u00e0i kho\u1ea3n \u0111\u00e3 k\u1ebft n\u1ed1i");
    f.PERMISSION_MANAGE_TITLE = a;
    c = g._("B\u00e0i vi\u1ebft v\u00e0 tin");
    f.POSTS_AND_STORIES = c;
    d = g._("Th\u00f4ng tin v\u1ec1 kh\u00e1ch h\u00e0ng v\u00e0 doanh nghi\u1ec7p");
    f.CUSTOMER_AND_BUSINESS_INFO = d;
    e = g._("Qu\u1ea3ng c\u00e1o v\u00e0 khuy\u1ebfn m\u00e3i");
    f.ADS_AND_PROMOTIONS = e;
    j = g._("B\u00ecnh lu\u1eadn v\u00e0 ph\u1ea3n h\u1ed3i");
    f.COMMENTS_AND_REPLIES = j;
    k = g._("D\u1eef li\u1ec7u v\u1ec1 t\u01b0\u01a1ng t\u00e1c c\u1ee7a \u0111\u1ed1i t\u01b0\u1ee3ng");
    f.AUDIENCE_ENGAGEMENT_DATA = k;
    l = g._("Quy\u1ec1n truy c\u1eadp c\u1ee7a nh\u1eefng ng\u01b0\u1eddi kh\u00e1c");
    f.ACCESS = l;
    m = g._("Tin nh\u1eafn v\u00e0 c\u00e2u tr\u1ea3 l\u1eddi");
    f.MESSAGES_AND_RESPONSES = m;
    n = g._("{=Don't know the password?}", [g._param("=Don't know the password?", i.jsx("strong", {
        children: g._("B\u1ea1n kh\u00f4ng bi\u1ebft m\u1eadt kh\u1ea9u?")
    }))]);
    f.PASSWORD_TITLE = n;
    o = g._("N\u1ebfu l\u00e0 ng\u01b0\u1eddi t\u1ea1o t\u00e0i kho\u1ea3n Instagram n\u00e0y, b\u1ea1n c\u00f3 th\u1ec3 nh\u1ea5n v\u00e0o X\u00e1c nh\u1eadn k\u1ebft n\u1ed1i r\u1ed3i nh\u1ea5n v\u00e0o Qu\u00ean m\u1eadt kh\u1ea9u? \u0111\u1ec3 \u0111\u1eb7t l\u1ea1i m\u1eadt kh\u1ea9u.");
    f.PASSWORD_EXPLANATION_ONE = o;
    p = g._("N\u1ebfu ng\u01b0\u1eddi kh\u00e1c t\u1ea1o t\u00e0i kho\u1ea3n Instagram n\u00e0y, h\u00e3y nh\u1edd h\u1ecd x\u00e1c nh\u1eadn k\u1ebft n\u1ed1i (n\u1ebfu h\u1ecd c\u0169ng qu\u1ea3n l\u00fd Trang).");
    f.PASSWORD_EXPLANATION_TWO = p;
    q = g._("\u0110\u1ec3 k\u1ebft n\u1ed1i t\u00e0i kho\u1ea3n Instagram, b\u1ea1n ph\u1ea3i l\u00e0 qu\u1ea3n tr\u1ecb vi\u00ean c\u1ee7a doanh nghi\u1ec7p s\u1edf h\u1eefu Trang li\u00ean k\u1ebft trong Tr\u00ecnh qu\u1ea3n l\u00fd kinh doanh.");
    f.NOT_BUSINESS_ADMIN_ERROR = q;
    r = g._("T\u00ean ng\u01b0\u1eddi d\u00f9ng m\u00e0 b\u1ea1n nh\u1eadp kh\u00f4ng ph\u1ea3i l\u00e0 c\u1ee7a t\u00e0i kho\u1ea3n Instagram \u0111\u00e3 k\u1ebft n\u1ed1i v\u1edbi Trang Facebook n\u00e0y. H\u00e3y ki\u1ec3m tra l\u1ea1i.");
    f.NOT_MATCH_IG_USER = r;
    s = g._("T\u00ecm hi\u1ec3u th\u00eam");
    f.LEARN_MORE = s;
    function w(a) {
        return g._("B\u1ea1n c\u00f3 th\u1ec3 l\u00ean l\u1ecbch v\u00e0 \u0111\u0103ng b\u00e0i vi\u1ebft tr\u00ean Facebook c\u0169ng nh\u01b0 Instagram theo tr\u1ea3i nghi\u1ec7m m\u1edbi d\u00e0nh cho doanh nghi\u1ec7p. {=Try Now}", [g._param("=Try Now", i.jsx(b("Link.react"), {
            onClick: a,
            children: g._("Th\u1eed ngay")
        }))])
    }
    function x(a) {
        return g._("B\u1ea1n c\u00f3 th\u1ec3 l\u00ean l\u1ecbch \u0111\u0103ng b\u00e0i vi\u1ebft v\u00e0 l\u00e0m nhi\u1ec1u vi\u1ec7c kh\u00e1c {=here.}", [g._param("=here.", i.jsx(b("Link.react"), {
            onClick: a,
            children: g._("t\u1ea1i \u0111\u00e2y.")
        }))])
    }
    t = g._("\u0110\u00e3 x\u1ea3y ra l\u1ed7i");
    f.ACTIVITIES_ERROR_TITLE = t;
    u = g._("\u0110\u00e3 x\u1ea3y ra l\u1ed7i khi t\u1ea3i Ho\u1ea1t \u0111\u1ed9ng. Vui l\u00f2ng l\u00e0m m\u1edbi \u0111\u1ec3 th\u1eed l\u1ea1i.");
    f.ACTIVITIES_ERROR_MESSAGE = u;
    v = g._("Ch\u00fang t\u00f4i s\u1ebd th\u00f4ng b\u00e1o cho b\u1ea1n khi c\u00f3 th\u1ec3 b\u1eaft \u0111\u1ea7u kh\u00e1m ph\u00e1 tr\u1ea3i nghi\u1ec7m m\u1edbi. T\u1eeb gi\u1edd \u0111\u1ebfn l\u00fac \u0111\u00f3, b\u1ea1n c\u00f3 th\u1ec3 t\u00ecm th\u1ea5y t\u00ednh n\u0103ng l\u00ean l\u1ecbch \u0111\u0103ng b\u00e0i vi\u1ebft v\u00e0 c\u00e1c l\u1ef1a ch\u1ecdn kh\u00e1c trong C\u00f4ng c\u1ee5 \u0111\u0103ng.");
    f.COMPOSER_UPSELL_DIALOG_DESCRIPTION = v;
    w = g._("\u0110i \u0111\u1ebfn C\u00f4ng c\u1ee5 \u0111\u0103ng");
    f.COMPOSER_UPSELL_DIALOG_CTA = w;
    x = g._("Trung t\u00e2m tr\u1ee3 gi\u00fap");
    f.HELP_CENTER = x;
    function y(a) {
        return g._({
            "*": "{number} t\u00e0i s\u1ea3n doanh nghi\u1ec7p",
            "_1": "1 t\u00e0i s\u1ea3n doanh nghi\u1ec7p"
        }, [g._plural(a, "number")])
    }
    y = g._("Facebook Business Suite");
    f.FACEBOOK_BUSINESS_SUITE = y;
    z = g._("C\u00e1ch qu\u1ea3n l\u00fd Facebook v\u00e0 Instagram t\u1ed1t h\u01a1n - t\u1ea5t c\u1ea3 \u1edf m\u1ed9t n\u01a1i.");
    f.WELCOME_MODAL_SUBHEADING = z;
    A = g._("Chia s\u1ebb v\u1edbi nhi\u1ec1u ng\u01b0\u1eddi h\u01a1n");
    f.WELCOME_MODAL_SHARE_HEADING = A;
    B = g._("L\u00ean l\u1ecbch, \u0111\u0103ng v\u00e0 qu\u1ea3n l\u00fd b\u00e0i vi\u1ebft tr\u00ean c\u1ea3 Facebook l\u1eabn Instagram.");
    f.WELCOME_MODAL_SHARE_MESSAGE = B;
    a = g._("Lu\u00f4n c\u1eadp nh\u1eadt");
    f.WELCOME_MODAL_STAY_UP_TO_DATE_HEADING = a;
    c = g._("Xem to\u00e0n b\u1ed9 tin nh\u1eafn v\u00e0 th\u00f4ng b\u00e1o tr\u00ean c\u1ea3 Facebook l\u1eabn Instagram.");
    f.WELCOME_MODAL_STAY_UP_TO_DATE_MESSAGE = c;
    d = g._("Xem hi\u1ec7u qu\u1ea3");
    f.WELCOME_MODAL_SEE_WHATS_WORKING_HEADING = d;
    e = g._("Xem th\u00f4ng tin chi ti\u1ebft cho Facebook v\u00e0 Instagram \u0111\u1ec3 bi\u1ebft hi\u1ec7u qu\u1ea3 ho\u1ea1t \u0111\u1ed9ng c\u1ee7a b\u1ea1n tr\u00ean t\u1eebng n\u1ec1n t\u1ea3ng n\u00e0y.");
    f.WELCOME_MODAL_SEE_WHATS_WORKING_MESSAGE = e;
    j = g._("Gi\u1edbi thi\u1ec7u v\u1ec1 Facebook Business Suite");
    f.INTRODUCING_FBS_HEADER = j;
    k = g._("V\u1edbi Business Suite, b\u1ea1n c\u00f3 th\u1ec3 qu\u1ea3n l\u00fd doanh nghi\u1ec7p tr\u00ean c\u1ea3 Facebook v\u00e0 Instagram \u1edf c\u00f9ng m\u1ed9t n\u01a1i. H\u00e3y t\u1ea1o Trang Facebook cho doanh nghi\u1ec7p c\u1ee7a b\u1ea1n (n\u1ebfu ch\u01b0a c\u00f3) \u0111\u1ec3 \u0111\u0103ng nh\u1eadp nh\u00e9.");
    f.PAGE_UNAVAILABLE_DESCRIPTION = k;
    l = g._("T\u1ea1o Trang Facebook");
    f.PAGE_UNAVAILABLE_CREATE_PAGE_CTA = l;
    function z(a) {
        return g._("B\u1ea1n c\u00f3 th\u1ec3 t\u00ecm hi\u1ec3u th\u00eam v\u1ec1 Facebook Business Suite trong {=Help Center}.", [g._param("=Help Center", i.jsx(b("GeoLink.react"), {
            href: new (h || (h = b("URI")))("/business/help/205614130852988").setSubdomain("www"),
            onClick: a,
            target: "_blank",
            children: g._("Trung t\u00e2m tr\u1ee3 gi\u00fap")
        }))])
    }
    m = g._("V\u1edbi Facebook Business Suite, b\u1ea1n c\u00f3 th\u1ec3 \u0111\u0103ng l\u00ean c\u1ea3 Facebook l\u1eabn Instagram c\u00f9ng m\u1ed9t l\u00fac, xem nhanh th\u00f4ng tin m\u1edbi v\u00e0 th\u00f4ng tin chi ti\u1ebft \u1edf c\u00f9ng m\u1ed9t n\u01a1i. Trong nh\u1eefng th\u00e1ng s\u1eafp t\u1edbi, C\u00f4ng c\u1ee5 \u0111\u0103ng tr\u00ean Trang s\u1ebd kh\u00f4ng h\u1ed7 tr\u1ee3 b\u00e0i vi\u1ebft \u0111\u00e3 \u0111\u0103ng, \u0111\u00e3 l\u00ean l\u1ecbch v\u00e0 \u0111\u00e3 h\u1ebft h\u1ea1n n\u1eefa.");
    f.PUBLISHING_TOOLS_UPSELL_BODY_BRANDED = m;
    n = g._("L\u00ean l\u1ecbch, \u0111\u0103ng v\u00e0 qu\u1ea3n l\u00fd b\u00e0i vi\u1ebft tr\u00ean c\u1ea3 Facebook l\u1eabn Instagram.");
    f.PUBLISHING_TOOLS_UPSELL_SHARE_VALUE_BRANDED = n;
    o = g._("Xem to\u00e0n b\u1ed9 tin nh\u1eafn v\u00e0 th\u00f4ng b\u00e1o tr\u00ean c\u1ea3 Facebook l\u1eabn Instagram.");
    f.PUBLISHING_TOOLS_UPSELL_UPDATE_VALUE_BRANDED = o;
    p = g._("Xem th\u00f4ng tin chi ti\u1ebft cho Facebook v\u00e0 Instagram \u0111\u1ec3 bi\u1ebft hi\u1ec7u qu\u1ea3 ho\u1ea1t \u0111\u1ed9ng c\u1ee7a b\u1ea1n tr\u00ean t\u1eebng n\u1ec1n t\u1ea3ng n\u00e0y.");
    f.PUBLISHING_TOOLS_UPSELL_ANALYSIS_VALUE_BRANDED = p;
    q = g._("B\u1ea1n c\u00f3 c\u00e2u h\u1ecfi v\u1ec1 Business Suite \u01b0? H\u00e3y truy c\u1eadp v\u00e0o {Link to the BizWeb Help Center} \u0111\u1ec3 t\u00ecm hi\u1ec3u th\u00eam", [g._param("Link to the BizWeb Help Center", i.jsx(b("GeoLink.react"), {
        href: new h("/business/help/205614130852988").setSubdomain("www"),
        target: "_blank",
        children: g._("Trung t\u00e2m tr\u1ee3 gi\u00fap")
    }))]);
    f.PUBLISHING_TOOLS_UPSELL_FOOTER_BRANDED = q;
    r = g._("Xem Business Suite c\u00f3 g\u00ec m\u1edbi");
    f.HOME_UPSELL_TITLE = r;
    s = g._("B\u1ea1n c\u00f3 th\u1ec3 t\u1ea1o, l\u00ean l\u1ecbch \u0111\u0103ng b\u00e0i tr\u00ean Facebook v\u00e0 Instagram c\u00f9ng m\u1ed9t l\u00fac, xem th\u00f4ng tin chi ti\u1ebft v\u00e0 l\u00e0m nhi\u1ec1u vi\u1ec7c kh\u00e1c. H\u00e3y \u0111i \u0111\u1ebfn Trang ch\u1ee7 \u0111\u1ec3 d\u1ea1o quanh m\u1ed9t v\u00f2ng nh\u00e9.");
    f.HOME_UPSELL_CONTENT = s;
    t = g._("Ch\u01b0a c\u00f3 t\u00ean");
    f.LEAD_ROW_NO_NAME = t;
    u = g._("Ch\u01b0a cung c\u1ea5p email ho\u1eb7c s\u1ed1 \u0111i\u1ec7n tho\u1ea1i");
    f.LEAD_ROW_NO_PHONE_OR_EMAIL = u;
    function A(a) {
        return g._("Expires on {date}", [g._param("date", a)])
    }
    function B(a) {
        return g._({
            "*": "v\u00e0 {number} ng\u01b0\u1eddi kh\u00e1c",
            "_1": "v\u00e0 1 ng\u01b0\u1eddi kh\u00e1c"
        }, [g._plural(a, "number", a)])
    }
}
), null);
__d("GeoPrivateMediaItemGroupContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = {
        hasStroke: !1,
        ratio: void 0,
        size: void 0
    };
    d = a.createContext(c);
    f = d;
    e.exports = f
}
), null);
__d("MediaManagerContentPostsTabRoute", ["RelayRouteLite"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        return b
    }(b("RelayRouteLite"));
    e.exports = a;
    a.routeName = "MediaManagerContentPostsTabRoute";
    a.path = "/creatorstudio/content_posts";
    a.paramDefinitions = {
        content_table: {
            type: "String",
            required: !1
        },
        edit_video_id: {
            type: "FBID",
            required: !1
        },
        edit_video_owner_id: {
            type: "FBID",
            required: !1
        },
        edit_video_composer_tab: {
            type: "String",
            required: !1
        },
        reference: {
            type: "String",
            required: !1
        }
    }
}
), null);
