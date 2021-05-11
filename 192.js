if (self.CavalryLogger) {
    CavalryLogger.start_js(["9\/Bkq"]);
}

__d("SRTGMSExistingJobsLoadedReducerPlugin", ["LoadObject"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        reduce: function(a, c) {
            a = c.jobs;
            return a.length === 0 ? b("LoadObject").empty() : b("LoadObject").withValue(a)
        }
    };
    c = a;
    e.exports = c
}
), null);
__d("SRTGMSExistingJobsLoadedAction", ["Laminar", "SRTGMSExistingJobsLoadedReducerPlugin", "SRTGMSExistingJobsProvider"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("Laminar").__createAction(function() {
        return [b("Laminar").__createReducer(b("SRTGMSExistingJobsLoadedReducerPlugin"), b("SRTGMSExistingJobsProvider"), {}, "")]
    }, function() {
        return []
    }, "SRTGMSExistingJobsLoadedActionPlugin");
    e.exports = a
}
), null);
__d("SRTGMSExistingJobsProvider", ["Laminar", "SRTGMSExistingJobsProviderPlugin"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("Laminar").__createProvider(b("SRTGMSExistingJobsProviderPlugin"), "SRTGMSExistingJobsProviderPlugin")
}
), null);
__d("SRTGMSExistingJobsUpdateJobReducerPlugin", ["LoadObject"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        reduce: function(a, c) {
            if (a.isLoading() || a.isEmpty())
                return a;
            a = a.getValueEnforcing();
            var d = c.job;
            c = a.findIndex(function(a) {
                return a.id === d.id
            });
            a[c] = d;
            return b("LoadObject").withValue(a)
        }
    };
    c = a;
    e.exports = c
}
), null);
__d("SRTGMSExistingJobsUpdateJobAction", ["Laminar", "SRTGMSExistingJobsUpdateJobReducerPlugin", "SRTGMSExistingJobsProvider"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("Laminar").__createAction(function() {
        return [b("Laminar").__createReducer(b("SRTGMSExistingJobsUpdateJobReducerPlugin"), b("SRTGMSExistingJobsProvider"), {}, "")]
    }, function() {
        return []
    }, "SRTGMSExistingJobsUpdateJobActionPlugin");
    e.exports = a
}
), null);
__d("SRTGMSExistingJobsProviderPlugin", ["LoadObject", "SRTGMSExistingJobsDispatcher"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        b("SRTGMSExistingJobsDispatcher").fetchExistingjobs();
        return b("LoadObject").loading()
    }
    ;
    c = {
        initialState: a()
    };
    d = c;
    e.exports = d
}
), null);
__d("XSRTGMSExistingJobsAsyncController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/ads/support/existing_jobs/", {})
}
), null);
__d("SRTGMSExistingJobsDispatcher", ["AsyncRequest", "SRTGMSExistingJobsLoadedAction", "SRTGMSExistingJobsUpdateJobAction", "XSRTGMSExistingJobsAsyncController"], (function(a, b, c, d, e, f) {
    "use strict";
    f.fetchExistingjobs = a;
    f.dispatchLoadedJobs = c;
    f.dispatchUpdateJob = d;
    function a() {
        var a = b("XSRTGMSExistingJobsAsyncController").getURIBuilder().getURI();
        new (b("AsyncRequest"))().setURI(a).setAllowCrossPageTransition(!0).send()
    }
    function c(a) {
        b("SRTGMSExistingJobsLoadedAction").dispatch({
            jobs: a
        }, {
            line: "31",
            module: "SRTGMSExistingJobsDispatcher.js"
        })
    }
    function d(a) {
        b("SRTGMSExistingJobsUpdateJobAction").dispatch({
            job: a
        }, {
            line: "38",
            module: "SRTGMSExistingJobsDispatcher.js"
        })
    }
}
), null);
__d("AdsHelpTrayTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:AdsHelpTrayLoggerConfig", this.$1, b("Banzai").BASIC, a)
        }
        ;
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:AdsHelpTrayLoggerConfig", this.$1, b("Banzai").VITAL, a)
        }
        ;
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:AdsHelpTrayLoggerConfig", this.$1, {
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
        c.setAdAccountID = function(a) {
            this.$1.ad_account_id = a;
            return this
        }
        ;
        c.setEvent = function(a) {
            this.$1.event = a;
            return this
        }
        ;
        c.setEventData = function(a) {
            this.$1.event_data = b("GeneratedLoggerUtils").serializeMap(a);
            return this
        }
        ;
        c.setException = function(a) {
            this.$1.exception = a;
            return this
        }
        ;
        c.setSessionID = function(a) {
            this.$1.session_id = a;
            return this
        }
        ;
        c.setTool = function(a) {
            this.$1.tool = a;
            return this
        }
        ;
        return a
    }();
    c = {
        ad_account_id: !0,
        event: !0,
        event_data: !0,
        exception: !0,
        session_id: !0,
        tool: !0
    };
    e.exports = a
}
), null);
__d("AdsHelpTrayModalTypes", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({
        CONFIRMATION_REQUEST_UPDATE: "CONFIRMATION_REQUEST_UPDATE",
        CONFIRMATION_REOPEN_CASE: "CONFIRMATION_REOPEN_CASE"
    });
    f.ConfirmationModal = a;
    b = Object.freeze(babelHelpers["extends"]({}, a, {
        MAIN: "MAIN",
        CLOSE_CASE: "CLOSE_CASE",
        REQUEST_UPDATE: "REQUEST_UPDATE",
        REOPEN_CASE: "REOPEN_CASE"
    }));
    f.Modal = b
}
), null);
__d("AdsHelpTrayUILogger", ["AdsAccountStore", "AdsHelpTrayModalTypes", "AdsHelpTrayTypedLogger", "AdsHelpTrayUIProvider", "BusinessUnifiedNavigationLoggingConfig", "URI", "getBusinessCurrentToolType"], (function(a, b, c, d, e, f) {
    "use strict";
    f.logHelpArticleClick = a;
    f.logHelpArticleViewMoreToggle = c;
    f.logNeedHelpClick = d;
    f.logFlytrapClick = e;
    f.logHelpCenterClick = i;
    f.logCancelPageRequestClick = j;
    f.logModalOpen = k;
    f.logModalSubmission = l;
    f.logFooterClick = m;
    f.logBackButtonClick = n;
    f.logHelpTrayOpen = o;
    f.logHelpTrayArticleOpen = p;
    f.logHelpTrayClose = q;
    f.logSearch = r;
    f.logSearchTypeaheadItemOpen = s;
    f.logSearchQuerySuggestionTypeaheadItemClick = t;
    f.logSearchInputChange = u;
    f.logSearchResultOpen = v;
    f.logSearchResults = w;
    f.logResourceClick = x;
    f.logCaseSubmission = y;
    f.logCaseTrackingViewOpen = z;
    f.logCaseTrackingHistoryClick = A;
    f.logHomeContentRender = B;
    var g;
    function h(a, c) {
        var d = new (g || (g = b("URI")))(window.location.href).getQueryData();
        d = b("AdsAccountStore").getSelectedAccountID() || d.act;
        var e = b("getBusinessCurrentToolType")() || b("AdsHelpTrayUIProvider")().bizSitePageTypeFromButton;
        d = new (b("AdsHelpTrayTypedLogger"))().setAdAccountID(d).setEvent(a).setSessionID(b("BusinessUnifiedNavigationLoggingConfig").sessionID).setTool(e);
        c != null && d.setEventData(c);
        d.log()
    }
    function a(a, b) {
        h("help_tray_recommended_article_click", {
            cms_id: a,
            pathname: b
        })
    }
    function c(a) {
        h(a ? "help_tray_recommended_article_view_more_click" : "help_tray_recommended_article_view_more_collapse")
    }
    function d() {
        h("help_tray_need_help_click")
    }
    function e() {
        h("help_tray_feedback_click")
    }
    function i() {
        h("help_center_click")
    }
    function j() {
        h("cancel_page_request_click")
    }
    function k(a, c) {
        c === void 0 && (c = b("AdsHelpTrayUIProvider")().currentContentCaseId);
        var d = "direct_support_modal_open";
        switch (a) {
        case b("AdsHelpTrayModalTypes").Modal.CLOSE_CASE:
            d = "case_tracking_close_case_modal_open";
            break;
        case b("AdsHelpTrayModalTypes").Modal.REQUEST_UPDATE:
            d = "case_tracking_request_update_modal_open";
            break;
        case b("AdsHelpTrayModalTypes").Modal.REOPEN_CASE:
            d = "case_tracking_reopen_case_modal_open";
            break
        }
        h(d, {
            job_id: c
        })
    }
    function l(a) {
        var c = b("AdsHelpTrayUIProvider")().openModalType
          , d = b("AdsHelpTrayUIProvider")().currentContentCaseId
          , e = "case_tracking_close_case_modal_submission";
        switch (c) {
        case b("AdsHelpTrayModalTypes").Modal.CLOSE_CASE:
            e = "case_tracking_close_case_modal_submission";
            break;
        case b("AdsHelpTrayModalTypes").Modal.REQUEST_UPDATE:
            e = "case_tracking_request_update_modal_submission";
            break;
        case b("AdsHelpTrayModalTypes").Modal.REOPEN_CASE:
            e = "case_tracking_reopen_case_modal_submission";
            break
        }
        h(e, babelHelpers["extends"]({}, a, {
            job_id: d
        }))
    }
    function m(a) {
        h("help_tray_footer_click", {
            link: a
        })
    }
    function n(a) {
        h("help_tray_back_button_click", {
            content_type: a
        })
    }
    function o(a) {
        h("help_tray_open", {
            open_source: a
        })
    }
    function p(a) {
        h("help_tray_open", {
            open_source: "cms_article",
            cms_id: a
        })
    }
    function q(a) {
        h("help_tray_close", {
            is_from_button_open: a.toString()
        })
    }
    function r(a) {
        a != null && a !== "" ? h("help_tray_search", {
            search_term: a
        }) : h("help_tray_search_clear")
    }
    function s(a, b, c, d, e) {
        h("help_tray_search_typeahead_item_open", {
            search_term: a || "",
            cms_id: b,
            title: c,
            position: "" + d,
            pathname: e
        })
    }
    function t(a, b, c) {
        h("help_tray_search_query_suggestion_typeahead_item_click", {
            search_term: a,
            suggestion_term: b,
            suggestion_type: c
        })
    }
    function u(a) {
        h("help_tray_search_input_change", {
            search_term: a || ""
        })
    }
    function v(a, c, d, e, f) {
        f === void 0 && (f = b("AdsHelpTrayUIProvider")().currentQuery),
        h("help_tray_search_result_open", {
            search_term: f || "",
            cms_id: a,
            title: c,
            position: "" + d,
            pathname: e
        })
    }
    function w(a, c, d) {
        d === void 0 && (d = b("AdsHelpTrayUIProvider")().currentQuery),
        h(a, {
            search_term: d || "",
            ranked_search_results: c
        })
    }
    function x(a) {
        h("help_tray_resource_click", {
            resource: a
        })
    }
    function y(a, b, c) {
        h("direct_support_modal_submission", {
            case_source: a,
            job_id: b,
            form_failure: c
        })
    }
    function z(a) {
        h("case_tracking_case_view_open", {
            job_id: a
        })
    }
    function A() {
        h("case_tracking_history_click")
    }
    function B() {
        h("help_tray_home_content_rendered", {
            is_help_tray_open: b("AdsHelpTrayUIProvider")().isTrayOpen.toString()
        })
    }
}
), null);
__d("XAdsHelpTraySurveyAsyncController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/ads/ajax/help_tray_survey/", {})
}
), null);
