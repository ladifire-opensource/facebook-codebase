if (self.CavalryLogger) {
    CavalryLogger.start_js(["0nGQQ"]);
}

__d("BizSuiteEmailMarketingICERoute", ["AdsInterfacesICERoute", "BizSuiteRootICERoute", "immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        return b
    }(b("AdsInterfacesICERoute"));
    a.routeName = "BizSuiteEmailMarketingICERoute";
    a.configName = "BizSuite";
    a.configPath = b("immutable").List(["email_marketing"]);
    a.givenName = "email_marketing";
    a.path = "/latest/email_marketing";
    a.paramDefinitions = {};
    a.queryParamDefinitions = {
        bpn_id: {
            type: "String",
            customType: "String",
            required: !1
        },
        business_id: {
            type: "String",
            customType: "String",
            required: !1
        },
        global_scope_id: {
            type: "String",
            customType: "String",
            required: !1
        },
        asset_id: {
            type: "String",
            customType: "String",
            required: !1
        },
        nav_ref: {
            type: "String",
            customType: "String",
            required: !1
        }
    };
    a.parentRoute = b("BizSuiteRootICERoute");
    a.activeState = {
        routeName: "EMAIL_MARKETING"
    };
    a.forceLoad = !1;
    a.viewModuleName = "BizKitEmailMarketingView.react";
    e.exports = a
}
), null);
__d("adsACOReportingAssetBreakdownSelectors", ["AdsPEAdgroupSelectors", "AdsPECampaignSelectors", "adsCreateAdAccountGKSelector", "adsCreateSelector"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("adsCreateSelector")([b("adsCreateAdAccountGKSelector")._("2qIjolwRq"), b("adsCreateAdAccountGKSelector")._("1Xfw0Kj6A"), b("adsCreateAdAccountGKSelector")._("1tThNyQBP")], function(a, b, c) {
        return (a || b) && !c
    }, {
        name: e.id + ".shouldHideAssetLevelBreakdownEnabledSelector"
    });
    f.shouldHideAssetLevelBreakdownEnabledSelector = a;
    c = b("adsCreateSelector")([b("AdsPEAdgroupSelectors").getSelector], function(a) {
        return function(b) {
            b = a(b).getValue();
            return b
        }
    }, {
        name: e.id + ".getAdgroupSelector"
    });
    f.getAdgroupSelector = c;
    d = b("adsCreateSelector")([b("AdsPECampaignSelectors").getByFieldsSelector], function(a) {
        return function(b) {
            b = a(b, {
                asset_feed_id: null,
                is_dynamic_creative_optimization: null
            }).getValue();
            return (b == null ? void 0 : b.asset_feed_id) != null && (b == null ? void 0 : b.is_dynamic_creative_optimization) === !1
        }
    }, {
        name: e.id + ".getIsCampaignAutoflowSelector"
    });
    f.getIsCampaignAutoflowSelector = d
}
), null);
__d("BusinessInboxJsErrorDebugFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743219");
    c = b("FalcoLoggerInternal").create("business_inbox_js_error_debug", a);
    e.exports = c
}
), null);
