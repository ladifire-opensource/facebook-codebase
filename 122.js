if (self.CavalryLogger) {
    CavalryLogger.start_js(["\/EOM5"]);
}

__d("UiFeatureConfirmationConfirmFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744440");
    c = b("FalcoLoggerInternal").create("ui_feature_confirmation_confirm", a);
    e.exports = c
}
), null);
__d("UiFeatureConfirmationDismissFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744441");
    c = b("FalcoLoggerInternal").create("ui_feature_confirmation_dismiss", a);
    e.exports = c
}
), null);
__d("UiFeatureConfirmationFailureActionableFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744443");
    c = b("FalcoLoggerInternal").create("ui_feature_confirmation_failure_actionable", a);
    e.exports = c
}
), null);
__d("UiFeatureConfirmationFailureUnactionableFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744444");
    c = b("FalcoLoggerInternal").create("ui_feature_confirmation_failure_unactionable", a);
    e.exports = c
}
), null);
__d("UiFeatureConfirmationIgLoginFailureFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744445");
    c = b("FalcoLoggerInternal").create("ui_feature_confirmation_ig_login_failure", a);
    e.exports = c
}
), null);
__d("UiFeatureConfirmationIgLoginStartFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744446");
    c = b("FalcoLoggerInternal").create("ui_feature_confirmation_ig_login_start", a);
    e.exports = c
}
), null);
__d("UiFeatureConfirmationIgLoginSuccessFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744447");
    c = b("FalcoLoggerInternal").create("ui_feature_confirmation_ig_login_success", a);
    e.exports = c
}
), null);
__d("UiFeatureConfirmationStartFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744448");
    c = b("FalcoLoggerInternal").create("ui_feature_confirmation_start", a);
    e.exports = c
}
), null);
__d("UiFeatureConfirmationSuccessFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744449");
    c = b("FalcoLoggerInternal").create("ui_feature_confirmation_success", a);
    e.exports = c
}
), null);
__d("UiFeatureConfirmationTryAgainFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744450");
    c = b("FalcoLoggerInternal").create("ui_feature_confirmation_try_again", a);
    e.exports = c
}
), null);
__d("BizKitPermissionDisclosureLoggingUtils", ["PageFamilyOfAppsLinkFalcoEvent", "UiFeatureConfirmationConfirmFalcoEvent", "UiFeatureConfirmationDismissFalcoEvent", "UiFeatureConfirmationFailureActionableFalcoEvent", "UiFeatureConfirmationFailureUnactionableFalcoEvent", "UiFeatureConfirmationIgLoginFailureFalcoEvent", "UiFeatureConfirmationIgLoginStartFalcoEvent", "UiFeatureConfirmationIgLoginSuccessFalcoEvent", "UiFeatureConfirmationStartFalcoEvent", "UiFeatureConfirmationSuccessFalcoEvent", "UiFeatureConfirmationTryAgainFalcoEvent"], (function(a, b, c, d, e, f) {
    "use strict";
    f.logStart = a;
    f.logDismiss = c;
    f.logCustomEvent = d;
    f.logConfirm = e;
    f.logSuccess = g;
    f.logFailureActionable = h;
    f.logFailureUnactionable = i;
    f.logTryAgain = j;
    f.logIGLoginStart = k;
    f.logIGLoginSuccess = l;
    f.logIGLoginFailure = m;
    function a(a) {
        var c = a.pageID
          , d = a.linkedAccountID
          , e = a.entryPoint
          , f = a.isReauthFlow
          , g = a.linkFlowSource;
        b("UiFeatureConfirmationStartFalcoEvent").log(function() {
            return {
                page_id: c,
                linked_account_id: d,
                entry_point: e,
                is_reauth_flow: f,
                link_flow_source: g
            }
        })
    }
    function c(a) {
        var c = a.pageID
          , d = a.linkedAccountID
          , e = a.entryPoint
          , f = a.isReauthFlow
          , g = a.linkFlowSource;
        b("UiFeatureConfirmationDismissFalcoEvent").log(function() {
            return {
                page_id: c,
                linked_account_id: d,
                entry_point: e,
                is_reauth_flow: f,
                link_flow_source: g
            }
        })
    }
    function d(a, c) {
        var d = a.pageID
          , e = a.linkedAccountID
          , f = a.isReauthFlow
          , g = a.linkFlowSource;
        b("PageFamilyOfAppsLinkFalcoEvent").log(function() {
            return {
                event: c,
                page_id: d,
                linked_account_id: e,
                is_reauth_flow: f,
                flow_source: g
            }
        })
    }
    function e(a) {
        var c = a.pageID
          , d = a.linkedAccountID
          , e = a.entryPoint
          , f = a.isReauthFlow
          , g = a.linkFlowSource;
        b("UiFeatureConfirmationConfirmFalcoEvent").log(function() {
            return {
                page_id: c,
                linked_account_id: d,
                entry_point: e,
                is_reauth_flow: f,
                link_flow_source: g
            }
        })
    }
    function g(a) {
        var c = a.pageID
          , d = a.linkedAccountID
          , e = a.entryPoint
          , f = a.isReauthFlow
          , g = a.linkFlowSource;
        b("UiFeatureConfirmationSuccessFalcoEvent").log(function() {
            return {
                page_id: c,
                linked_account_id: d,
                entry_point: e,
                is_reauth_flow: f,
                link_flow_source: g
            }
        })
    }
    function h(a) {
        var c = a.pageID
          , d = a.linkedAccountID
          , e = a.entryPoint
          , f = a.isReauthFlow
          , g = a.linkFlowSource;
        b("UiFeatureConfirmationFailureActionableFalcoEvent").log(function() {
            return {
                page_id: c,
                linked_account_id: d,
                entry_point: e,
                is_reauth_flow: f,
                link_flow_source: g
            }
        })
    }
    function i(a) {
        var c = a.pageID
          , d = a.linkedAccountID
          , e = a.entryPoint
          , f = a.isReauthFlow
          , g = a.linkFlowSource;
        b("UiFeatureConfirmationFailureUnactionableFalcoEvent").log(function() {
            return {
                page_id: c,
                linked_account_id: d,
                entry_point: e,
                is_reauth_flow: f,
                link_flow_source: g
            }
        })
    }
    function j(a) {
        var c = a.pageID
          , d = a.linkedAccountID
          , e = a.entryPoint
          , f = a.isReauthFlow
          , g = a.linkFlowSource;
        b("UiFeatureConfirmationTryAgainFalcoEvent").log(function() {
            return {
                page_id: c,
                linked_account_id: d,
                entry_point: e,
                is_reauth_flow: f,
                link_flow_source: g
            }
        })
    }
    function k(a) {
        var c = a.pageID
          , d = a.linkedAccountID
          , e = a.entryPoint
          , f = a.isReauthFlow
          , g = a.linkFlowSource;
        b("UiFeatureConfirmationIgLoginStartFalcoEvent").log(function() {
            return {
                page_id: c,
                linked_account_id: d,
                entry_point: e,
                is_reauth_flow: f,
                link_flow_source: g
            }
        })
    }
    function l(a) {
        var c = a.pageID
          , d = a.linkedAccountID
          , e = a.entryPoint
          , f = a.isReauthFlow
          , g = a.linkFlowSource;
        b("UiFeatureConfirmationIgLoginSuccessFalcoEvent").log(function() {
            return {
                page_id: c,
                linked_account_id: d,
                entry_point: e,
                is_reauth_flow: f,
                link_flow_source: g
            }
        })
    }
    function m(a) {
        var c = a.pageID
          , d = a.linkedAccountID
          , e = a.entryPoint
          , f = a.isReauthFlow
          , g = a.linkFlowSource;
        b("UiFeatureConfirmationIgLoginFailureFalcoEvent").log(function() {
            return {
                page_id: c,
                linked_account_id: d,
                entry_point: e,
                is_reauth_flow: f,
                link_flow_source: g
            }
        })
    }
}
), null);
