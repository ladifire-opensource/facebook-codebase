if (self.CavalryLogger) {
    CavalryLogger.start_js(["\/mKwv"]);
}

__d("AdsHelpTrayUIProviderPlugin", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        initialState: {
            openModalType: null,
            prevContentType: null,
            isTrayOpen: !1,
            currentContentCaseId: "",
            contentType: "HOME",
            contentHistory: [],
            currentQuery: "",
            recentlyViewed: [],
            isFromHelpButton: !1,
            suggestedQuery: "",
            searchIssueID: "",
            bizSitePageTypeFromButton: null
        }
    };
    b = a;
    e.exports = b
}
), null);
__d("AdsHelpTrayUIProvider", ["Laminar", "AdsHelpTrayUIProviderPlugin"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("Laminar").__createProvider(b("AdsHelpTrayUIProviderPlugin"), "AdsHelpTrayUIProviderPlugin")
}
), null);
__d("AdsHelpTrayLaminarHelper", ["AdsAccountStore", "AsyncRequest", "BizSiteIdentifier.brands", "BusinessUnifiedNavigationLoggingConfig", "SRTGMSExistingJobsDispatcher", "XAdsHelpTrayLogIssuesAsyncController"], (function(a, b, c, d, e, f) {
    "use strict";
    f.logIssues = a;
    f.fetchExistingJobs = c;
    f.getCurrentContentCMSID = d;
    function a(a) {
        a = b("XAdsHelpTrayLogIssuesAsyncController").getURIBuilder().setFBID("ad_account_id", b("AdsAccountStore").getSelectedAccountID()).setFBID("business_id", b("BizSiteIdentifier.brands").getBusinessID()).setEnum("event", a).setString("session_id", b("BusinessUnifiedNavigationLoggingConfig").sessionID).getURI();
        new (b("AsyncRequest"))().setURI(a).send()
    }
    function c(a) {
        (a === "HOME" || a === "SUPPORT_CASE_HISTORY") && b("SRTGMSExistingJobsDispatcher").fetchExistingjobs()
    }
    function d(a) {
        var b = a.length;
        return b ? a[b - 1] : null
    }
}
), null);
__d("AdsHelpTrayToggleModalLoggerPlugin", ["AdsHelpTrayUILogger", "isTruthy"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        log: function(a) {
            a = a.data.openModal;
            b("isTruthy")(a) && b("AdsHelpTrayUILogger").logModalOpen(a)
        }
    };
    c = a;
    e.exports = c
}
), null);
__d("AdsHelpTrayChangeContentTypeDataReducerPlugin", ["AdsHelpTrayLaminarHelper"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        reduce: function(a, c) {
            b("AdsHelpTrayLaminarHelper").fetchExistingJobs(c.data.contentType);
            return babelHelpers["extends"]({}, a, {
                contentType: c.data.contentType
            })
        }
    };
    c = a;
    e.exports = c
}
), null);
__d("AdsHelpTraySetSuggestedQueryDataReducerPlugin", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        reduce: function(a, b) {
            return babelHelpers["extends"]({}, a, {
                suggestedQuery: b.data.suggestedQuery
            })
        }
    };
    b = a;
    e.exports = b
}
), null);
__d("AdsHelpTrayToggleDataReducerPlugin", ["AdsHelpTrayLaminarHelper", "AdsHelpTrayUILogger", "AsyncRequest", "CSS", "XAdsHelpTraySurveyAsyncController"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        reduce: function(a, c) {
            var d = c.data.isTrayOpen
              , e = c.data.isFromHelpButton
              , f = a.contentType
              , g = a.isFromHelpButton
              , h = a.currentQuery
              , i = a.contentHistory
              , j = a.isTrayOpen;
            if (!d) {
                f = "HOME";
                b("AdsHelpTrayUILogger").logHelpTrayClose(g);
                if (g === !0) {
                    var k = b("XAdsHelpTraySurveyAsyncController").getURIBuilder().getURI();
                    new (b("AsyncRequest"))().setURI(k).send();
                    g = !1
                }
                h = "";
                i = [];
                b("AdsHelpTrayLaminarHelper").logIssues("help_tray_close_issues")
            }
            !j && d && (e ? b("AdsHelpTrayUILogger").logHelpTrayOpen("help_button") : b("AdsHelpTrayUILogger").logHelpTrayOpen("other"),
            b("AdsHelpTrayLaminarHelper").logIssues("help_tray_open_issues"));
            j = d;
            g = e;
            e || (f = c.data.contentType);
            b("AdsHelpTrayLaminarHelper").fetchExistingJobs(f);
            document.body && b("CSS").conditionClass(document.body, "has-helptray", j);
            return babelHelpers["extends"]({}, a, {
                bizSitePageTypeFromButton: c.data.pageType,
                contentType: f,
                isFromHelpButton: g,
                currentQuery: h,
                contentHistory: i,
                isTrayOpen: j
            })
        }
    };
    c = a;
    e.exports = c
}
), null);
__d("AdsHelpTrayToggleModalReducerPlugin", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        reduce: function(a, b) {
            b = b.data.openModal;
            return babelHelpers["extends"]({}, a, {
                openModalType: b
            })
        }
    };
    b = a;
    e.exports = b
}
), null);
__d("GeoPrivateFBIconOrImageish.react", ["GeoIcon.react", "Image.react", "React", "TintableIconSource", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React");
    function a(a) {
        var c = a.icon;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["icon"]);
        return c instanceof b("TintableIconSource") ? h.jsx(b("GeoIcon.react"), babelHelpers["extends"]({}, a, {
            icon: c
        })) : h.jsx("div", {
            className: (g || (g = b("stylex")))(i.deprecatedIcon, a.xstyle),
            children: c
        })
    }
    var i = {
        deprecatedIcon: {
            display: "if5qj5rh"
        }
    }
}
), null);
__d("MediaManagerTabsList", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = ["instagram_content", "instagram_content_posts", "instagram_insights", "instagram_insights_activity", "instagram_insights_audience", "instagram_accounts"];
    f.INSTAGRAM_COMMON_TABS = a;
    b = ["instagram_monetization", "instagram_monetization_branded_content"];
    f.INSTAGRAM_MONETIZATION_TABS = b;
    c = ["instagram_calendar_view"];
    f.INSTAGRAM_CALENDAR_VIEW_TABS = c;
    d = [].concat(a, b, c);
    f.ALL_INSTAGRAM_TABS = d
}
), null);
__d("MediaManagerInsightsInstantArticlesCTATabConfig", ["fbt"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = {
        title: g._("K\u00eau g\u1ecdi h\u00e0nh \u0111\u1ed9ng"),
        type: "insights_instant_articles_call_to_action",
        parentTab: "insights",
        tabGroup: "instant_articles",
        hasPageSelector: !0,
        canSelectOnlySinglePage: !0
    };
    b = a;
    e.exports = b
}
), null);
