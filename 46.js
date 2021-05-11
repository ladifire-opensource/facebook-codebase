if (self.CavalryLogger) {
    CavalryLogger.start_js(["c7uoT"]);
}

__d("BusinessInboxProductPickerCancelFlowFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743237");
    c = b("FalcoLoggerInternal").create("business_inbox_product_picker_cancel_flow", a);
    e.exports = c
}
), null);
__d("BusinessInboxProductPickerEnterFlowFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743238");
    c = b("FalcoLoggerInternal").create("business_inbox_product_picker_enter_flow", a);
    e.exports = c
}
), null);
__d("BusinessInboxProductPickerExitFlowFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743239");
    c = b("FalcoLoggerInternal").create("business_inbox_product_picker_exit_flow", a);
    e.exports = c
}
), null);
__d("BusinessInboxProductPickerImpressionFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743240");
    c = b("FalcoLoggerInternal").create("business_inbox_product_picker_impression", a);
    e.exports = c
}
), null);
__d("BizInboxProductPickerLogger", ["BIZInboxClientLogger", "BusinessInboxProductPickerCancelFlowFalcoEvent", "BusinessInboxProductPickerEnterFlowFalcoEvent", "BusinessInboxProductPickerExitFlowFalcoEvent", "BusinessInboxProductPickerImpressionFalcoEvent", "CurrentUser"], (function(a, b, c, d, e, f) {
    "use strict";
    f.logProductPickerImpression = a;
    f.logProductPickerEnterFlow = c;
    f.logProductPickerExitFlow = d;
    f.logProductPickerCancelFlow = e;
    function a(a, c, d, e, f) {
        if (a == null || f == null)
            return;
        var g = b("BIZInboxClientLogger").getInboxPlatformAndUserType(f);
        if (g.commType == null || g.userType === "unknown")
            return;
        b("BusinessInboxProductPickerImpressionFalcoEvent").log(function() {
            return {
                event_location: "www_client",
                page_id: a,
                inbox_platform: g.inboxPlatform,
                event_data: {
                    source: "composer"
                },
                ig_account_id: c,
                business_presence_node_id: null,
                logged_in_user_id: b("CurrentUser").getID(),
                logged_in_user_type: g.userType,
                client_timestamp_ms: Date.now(),
                thread_id: e,
                consumer_id: d,
                referrer: window.location.href
            }
        })
    }
    function c(a, c, d, e, f) {
        if (a == null || f == null)
            return;
        var g = b("BIZInboxClientLogger").getInboxPlatformAndUserType(f);
        if (g.commType == null || g.userType === "unknown")
            return;
        b("BusinessInboxProductPickerEnterFlowFalcoEvent").log(function() {
            return {
                event_location: "www_client",
                page_id: a,
                inbox_platform: g.inboxPlatform,
                event_data: {
                    source: "composer"
                },
                ig_account_id: c,
                business_presence_node_id: null,
                logged_in_user_id: b("CurrentUser").getID(),
                logged_in_user_type: g.userType,
                client_timestamp_ms: Date.now(),
                thread_id: e,
                consumer_id: d,
                referrer: window.location.href
            }
        })
    }
    function d(a, c, d, e, f) {
        if (a == null || f == null)
            return;
        var g = b("BIZInboxClientLogger").getInboxPlatformAndUserType(f);
        if (g.commType == null || g.userType === "unknown")
            return;
        b("BusinessInboxProductPickerExitFlowFalcoEvent").log(function() {
            return {
                event_location: "www_client",
                page_id: a,
                inbox_platform: g.inboxPlatform,
                event_data: {
                    source: "composer"
                },
                ig_account_id: c,
                business_presence_node_id: null,
                logged_in_user_id: b("CurrentUser").getID(),
                logged_in_user_type: g.userType,
                client_timestamp_ms: Date.now(),
                thread_id: e,
                consumer_id: d,
                referrer: window.location.href
            }
        })
    }
    function e(a, c, d, e, f) {
        if (a == null || f == null)
            return;
        var g = b("BIZInboxClientLogger").getInboxPlatformAndUserType(f);
        if (g.commType == null || g.userType === "unknown")
            return;
        b("BusinessInboxProductPickerCancelFlowFalcoEvent").log(function() {
            return {
                event_location: "www_client",
                page_id: a,
                inbox_platform: g.inboxPlatform,
                event_data: {
                    source: "composer"
                },
                ig_account_id: c,
                business_presence_node_id: null,
                logged_in_user_id: b("CurrentUser").getID(),
                logged_in_user_type: g.userType,
                client_timestamp_ms: Date.now(),
                thread_id: e,
                consumer_id: d,
                referrer: window.location.href
            }
        })
    }
}
), null);
