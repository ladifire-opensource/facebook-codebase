if (self.CavalryLogger) {
    CavalryLogger.start_js(["Zbr41"]);
}

__d("AdsInsightsAccountOverviewLocationDefaultMetrics", [], (function(a, b, c, d, e, f) {
    e.exports = {
        default_location_metrics: "reach",
        static_location_metrics: "num_campaigns"
    }
}
), null);
__d("AdsSettingsDataLoaderFields", [], (function(a, b, c, d, e, f) {
    e.exports = {
        reporting_fields: ["default_account_overview_metrics", "default_account_overview_agegender_metrics", "default_account_overview_time_metrics", "default_account_overview_location_metrics", "default_builtin_column_preset", "default_column_preset", "default_nam_time_range", "column_suggestion_status", "last_used_columns"],
        fields: ["user_settings{default_account_overview_metrics,default_account_overview_agegender_metrics,default_account_overview_time_metrics,default_account_overview_location_metrics,default_builtin_column_preset,default_column_preset,default_nam_time_range,column_suggestion_status,last_used_columns}"]
    }
}
), null);
__d("XBizKitControllerRouteBuilder", ["jsRouteBuilder"], (function(a, b, c, d, e, f) {
    a = b("jsRouteBuilder")("/bizkit/{?*rest}", Object.freeze({}), void 0);
    c = a;
    e.exports = c
}
), null);
__d("AdsAccountOverviewKPITabSelectorProviderPlugin", ["immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("immutable").Record({
        currentMetricIndex: 0,
        initializedKPIChart: !1,
        metrics: [],
        prefetchedAllMetrics: !1
    });
    c = {
        initialState: a()
    };
    d = c;
    e.exports = d
}
), null);
__d("AdsAccountOverviewKPITabSelectorProvider", ["Laminar", "AdsAccountOverviewKPITabSelectorProviderPlugin"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("Laminar").__createProvider(b("AdsAccountOverviewKPITabSelectorProviderPlugin"), "AdsAccountOverviewKPITabSelectorProviderPlugin")
}
), null);
__d("AdsInsightsCreateColumnPresetActionFlux", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = {
        actionType: "ADS_INSIGHTS_CREATE_COLUMN_PRESET"
    }
}
), null);
__d("AdsInsightsCreateColumnPresetSuccessActionFlux", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = {
        actionType: "ADS_INSIGHTS_CREATE_COLUMN_PRESET_SUCCESS"
    }
}
), null);
__d("AdsInsightsDeleteColumnPresetSuccessActionFlux", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = {
        actionType: "ADS_INSIGHTS_DELETE_COLUMN_PRESET_SUCCESS"
    }
}
), null);
__d("AdsMediaPickerToggleAutoCropOptimizationFlowActionFlux", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = {
        actionType: "ADS_MEDIA_PICKER_TOGGLE_AUTO_CROP_OPTIMIZATION_FLOW"
    }
}
), null);
__d("AdsMediaPickerToggleImageNativeCreativeFlowActionFlux", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = {
        actionType: "ADS_MEDIA_PICKER_TOGGLE_IMAGE_NATIVE_CREATIVE_FLOW"
    }
}
), null);
__d("AdsSettingsAdsSettingsLoadErrorAction", ["Laminar"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("Laminar").__createAction(function() {
        return []
    }, function() {
        return []
    }, "ads_settings_load_error");
    e.exports = a
}
), null);
__d("AdsSettingsAdsSettingsLoadErrorActionFlux", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = {
        actionType: "ads_settings_load_error"
    }
}
), null);
__d("AdsAPISettingsFields", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        AD_ACCOUNT: "ad_account",
        AD_OBJECT_EXPORT_FORMAT: "ad_object_export_format",
        AUTO_REVIEW_VIDEO_CAPTION: "auto_review_video_caption",
        COLUMN_PRESETS: "column_presets",
        COLUMN_SUGGESTION_STATUS: "column_suggestion_status",
        DEFAULT_ACCOUNT_OVERVIEW_METRICS: "default_account_overview_metrics",
        DEFAULT_ACCOUNT_OVERVIEW_AGEGENDER_METRICS: "default_account_overview_agegender_metrics",
        DEFAULT_ACCOUNT_OVERVIEW_TIME_METRICS: "default_account_overview_time_metrics",
        DEFAULT_ACCOUNT_OVERVIEW_LOCATION_METRICS: "default_account_overview_location_metrics",
        DEFAULT_BUILTIN_COLUMN_PRESET: "default_builtin_column_preset",
        DEFAULT_COLUMN_PRESET: "default_column_preset",
        DEFAULT_NAM_TIME_RANGE: "default_nam_time_range",
        DRAFT_MODE_ENABLED: "draft_mode_enabled",
        EXPORT_DELETED_ITEMS_WITH_DELIVERY: "export_deleted_items_with_delivery",
        EXPORT_SUMMARY_ROW: "export_summary_row",
        FILTERS: "filters",
        ID: "id",
        LAST_USED_COLUMNS: "last_used_columns",
        LAST_USED_PE_FILTERS: "last_used_pe_filters",
        LAST_USED_WEBSITE_URLS: "last_used_website_urls",
        LAST_AD_ACCOUNT_ATTRIBUTION_SPEC: "last_ad_account_attribution_spec",
        OUTLIER_PREFERENCES: "outlier_preferences",
        SHOULD_DEFAULT_IMAGE_LPP_ADS_TO_SQUARE: "should_default_image_lpp_ads_to_square",
        SHOULD_DEFAULT_IMAGE_DOF_TOGGLE: "should_default_image_dof_toggle",
        SHOULD_DEFAULT_IMAGE_AUTO_CROP: "should_default_image_auto_crop",
        SHOULD_DEFAULT_IMAGE_AUTO_CROP_FOR_TAIL: "should_default_image_auto_crop_for_tail",
        SHOULD_DEFAULT_IMAGE_AUTO_CROP_OPTIMIZATION: "should_default_image_auto_crop_optimization",
        ACF_SHOULD_OPT_OUT_VIDEO_ADJUSTMENTS: "acf_should_opt_out_video_adjustments",
        RB_EXPORT_SUMMARY_ROW: "rb_export_summary_row",
        RB_EXPORT_FORMAT: "rb_export_format",
        RB_EXPORT_RAW_DATA: "rb_export_raw_data",
        SHOW_ARCHIVED_DATA: "show_archived_data",
        USER: "user"
    });
    e.exports = a
}
), null);
__d("AdsAccountOverviewUtils", ["cssVar", "AdsInsightsAccountOverviewLocationDefaultMetrics", "AdsInsightsActionFieldType", "AdsInsightsColumns", "AdsInsightsField", "DateConsts", "PeriodUnit", "performanceNow"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = parseInt("1px", 10), j = 1300, k = parseInt("8px", 10), l = parseInt("10px", 10);
    a = b("AdsInsightsActionFieldType").ACTIONS;
    var m = [(c = b("AdsInsightsField")).REACH, c.SPEND, c.IMPRESSIONS, b("AdsInsightsColumns").makeActionID(a, "link_click")]
      , n = [c.REACH, c.SPEND]
      , o = 2 * b("DateConsts").MS_PER_SEC
      , p = [c.REACH, c.SPEND]
      , q = [b("AdsInsightsAccountOverviewLocationDefaultMetrics").default_location_metrics];
    d = function() {
        return m
    }
    ;
    f.getDefaultMetricsFallback = d;
    e = function() {
        return n
    }
    ;
    f.getDefaultAgeGenderMetricsFallback = e;
    g = function() {
        return p
    }
    ;
    f.getDefaultTimeMetricsFallback = g;
    a = function() {
        return q
    }
    ;
    f.getDefaultLocationMetricsFallback = a;
    c = function(a, c) {
        a = a.measureDateBasedUnit(b("PeriodUnit").day);
        return c.length === 1 && c[0] === b("AdsInsightsField").SPEND && a <= 14
    }
    ;
    f.getShouldShowBarChart = c;
    d = h || (h = b("performanceNow"));
    f.getTooltipViewStartTime = d;
    e = function(a, c, d) {
        d === void 0 && (d = o);
        if (!c)
            return;
        a = Math.round((h || (h = b("performanceNow")))() - a);
        a > d && c(a)
    }
    ;
    f.handleTooltipView = e;
    g = function(a) {
        a = a ? a.columnFlex + k + l : j;
        return a - k * 2 - l - i * 3
    }
    ;
    f.getKPIModuleWidth = g
}
), null);
__d("AdsAccountOverviewKPITabSelectorReducerPlugins", ["AdsAccountOverviewUtils", "AdsAPIAdAccountFields", "AdsAPISettingsFields", "getByPath", "isEmpty"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("AdsAPIAdAccountFields").USER_SETTINGS, i = b("AdsAPISettingsFields").DEFAULT_ACCOUNT_OVERVIEW_METRICS;
    a = {
        reduce: function(a, c) {
            c = b("getByPath")(c.data.accountInfo, [h, i]);
            if (!c || !c.length)
                if (!a.metrics || !a.metrics.length)
                    c = b("AdsAccountOverviewUtils").getDefaultMetricsFallback();
                else
                    return a;
            return a.set("metrics", c)
        }
    };
    f.initData = a;
    c = {
        reduce: function(a, c) {
            if (!(g || (g = b("isEmpty")))(a.metrics))
                return a;
            c = b("getByPath")(c.data.settings, [i]);
            (g || (g = b("isEmpty")))(c) && (c = b("AdsAccountOverviewUtils").getDefaultMetricsFallback());
            return a.set("metrics", c)
        }
    };
    f.adsSettingsLoaded = c;
    d = {
        reduce: function(a, b) {
            return a.set("initializedKPIChart", !0)
        }
    };
    f.loadSuccess = d;
    e = {
        reduce: function(a, b) {
            return a.set("prefetchedAllMetrics", !0)
        }
    };
    f.prefetchedAllMetrics = e;
    a = {
        reduce: function(a, b) {
            return a.set("metrics", b.metrics)
        }
    };
    f.changeMetric = a;
    c = {
        reduce: function(a, b) {
            return a.set("currentMetricIndex", b.newIndex)
        }
    };
    f.switchTab = c
}
), null);
__d("AdsSettingsAdsSettingsLoadedAction", ["Laminar", "AdsAccountOverviewKPITabSelectorReducerPlugins", "AdsAccountOverviewKPITabSelectorProvider"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("Laminar").__createAction(function() {
        return [b("Laminar").__createReducer(b("AdsAccountOverviewKPITabSelectorReducerPlugins").adsSettingsLoaded, b("AdsAccountOverviewKPITabSelectorProvider"), {}, "")]
    }, function() {
        return []
    }, "ads_settings_loaded");
    e.exports = a
}
), null);
__d("AdsSettingsAdsSettingsLoadedActionFlux", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = {
        actionType: "ads_settings_loaded"
    }
}
), null);
__d("AdsSettingsAdsSettingsUpdateActionFlux", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = {
        actionType: "ads_settings_update"
    }
}
), null);
__d("AdsSettingsAdsSettingsUpdateErrorAction", ["Laminar"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("Laminar").__createAction(function() {
        return []
    }, function() {
        return []
    }, "ads_settings_update_error");
    e.exports = a
}
), null);
__d("AdsSettingsAdsSettingsUpdatedAction", ["Laminar"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("Laminar").__createAction(function() {
        return []
    }, function() {
        return []
    }, "ads_settings_updated");
    e.exports = a
}
), null);
__d("AdsSettingsSetShouldDefaultImageLPPAdsToSquareActionFlux", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = {
        actionType: "AdsSettingsSetShouldDefaultImageLPPAdsToSquareActionPlugin"
    }
}
), null);
__d("AdsSettingsDataLoader", ["AdsGraphAPI", "AdsMgmtPreloadingUtils", "AdsSettingsDataLoaderFields", "AdsSettingsDataLoaderPreloader", "GraphAPIFieldUtils", "gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    f.updateSettings = a;
    f.loadSettings = c;
    f.getReportingFields = d;
    function a(a, c) {
        b("gkx")("677898") || Object.prototype.hasOwnProperty.call(c, "default_column_preset") && (c = babelHelpers["extends"]({}, c, {
            default_column_preset_id: c.default_column_preset ? c.default_column_preset.id : 0
        }));
        return b("AdsGraphAPI").get(e.id).adaccount(a).edge("user_settings").post(c)
    }
    function c(a, c) {
        var d = {
            fields: [b("GraphAPIFieldUtils").getFieldWithSubfields("user_settings", c)]
        };
        return b("AdsGraphAPI").get(e.id).adaccount(a).preloadedBy(b("AdsSettingsDataLoaderPreloader").preloader, b("AdsMgmtPreloadingUtils").defaultConfig).get(d).then(function(a) {
            var b = a.user_settings;
            typeof b === "object" && c.forEach(function(a) {
                Object.prototype.hasOwnProperty.call(b, a) || (b[a] = void 0)
            });
            return b || {}
        })
    }
    function d() {
        return b("AdsSettingsDataLoaderFields").reporting_fields
    }
}
), null);
__d("AdsSettingsDataDispatcher", ["AdsSettingsAdsSettingsLoadedAction", "AdsSettingsAdsSettingsLoadErrorAction", "AdsSettingsAdsSettingsUpdatedAction", "AdsSettingsAdsSettingsUpdateErrorAction", "AdsSettingsDataLoader", "promiseDone"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {}
        var c = a.prototype;
        c.loadSettings = function(a, c) {
            b("promiseDone")(b("AdsSettingsDataLoader").loadSettings(a, c), function(c) {
                return b("AdsSettingsAdsSettingsLoadedAction").dispatch({
                    data: {
                        settings: c,
                        accountID: a
                    }
                }, {
                    line: "27",
                    module: "AdsSettingsDataDispatcher.js"
                })
            }, function(d) {
                return b("AdsSettingsAdsSettingsLoadErrorAction").dispatch({
                    data: {
                        accountID: a,
                        apiFields: c
                    }
                }, {
                    line: "31",
                    module: "AdsSettingsDataDispatcher.js"
                })
            })
        }
        ;
        c.updateSettings = function(a, c) {
            b("promiseDone")(b("AdsSettingsDataLoader").updateSettings(a, c), function(d) {
                return b("AdsSettingsAdsSettingsUpdatedAction").dispatch({
                    data: {
                        accountID: a,
                        settings: c
                    }
                }, {
                    line: "41",
                    module: "AdsSettingsDataDispatcher.js"
                })
            }, function(d) {
                return b("AdsSettingsAdsSettingsUpdateErrorAction").dispatch({
                    data: {
                        accountID: a,
                        settings: c
                    }
                }, {
                    line: "45",
                    module: "AdsSettingsDataDispatcher.js"
                })
            })
        }
        ;
        return a
    }();
    c = new a();
    d = c;
    e.exports = d
}
), null);
__d("AdAccountUserSettingsDataManager", ["requireCond", "cr:1264504"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("cr:1264504");
    e.exports = a
}
), null);
__d("BizKitRouteNames", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = {
        AD_CENTER: ["BizKit", ["ad_center"]],
        ALL: ["BizKit", ["all"]],
        APPSTORE: ["BizKit", ["appstore"]],
        AUDIENCES: ["BizKit", ["audiences"]],
        AUTOMATED_RESPONSES: ["BizKit", ["automated_responses"]],
        BUILDER: ["BizKit", ["builder"]],
        BUSINESS_ASSETS: ["BizKit", ["business_assets"]],
        BUSINESS_INFO: ["BizKit", ["business_info"]],
        COMMERCE_EMAIL: ["BizKit", ["commerce_email"]],
        CONTACTS: ["BizKit", ["contacts"]],
        CONTACTS_LIST: ["BizKit", ["contacts_list"]],
        CONTENT: ["BizKit", ["content"]],
        CRM_DESTINATION: ["BizKit", ["crm_destination"]],
        CRM_SETUP: ["BizKit", ["crm_setup"]],
        CUSTOMER: ["BizKit", ["customer"]],
        CUSTOMER_GROUPS_CENTER: ["BizKit", ["customer_groups_center"]],
        CUSTOMER_GROUP_DETAIL: ["BizKit", ["customer_group_detail"]],
        DRAFT_FORMS: ["BizKit", ["draft_forms"]],
        DRAFT_POSTS: ["BizKit", ["draft_posts"]],
        EMAIL_CAMPAIGN: ["BizKit", ["email_campaign"]],
        FACEBOOK: ["BizKit", ["facebook"]],
        FEEDBACK: ["BizKit", ["feedback"]],
        HOME: ["BizKit", ["home"]],
        INBOX: ["BizKit", ["inbox"]],
        INSIGHTS: ["BizKit", ["insights"]],
        INSTAGRAM: ["BizKit", ["instagram"]],
        INSTAGRAM_DIRECT: ["BizKit", ["instagram_direct"]],
        LEADS_CENTER: ["BizKit", ["leads_center"]],
        LEAD_EMAIL: ["BizKit", ["lead_email"]],
        LEAD_FORM: ["BizKit", ["lead_form"]],
        LOYALTY_CUSTOMER_LIST: ["BizKit", ["loyalty_customer_list"]],
        MESSENGER: ["BizKit", ["messenger"]],
        OVERVIEW: ["BizKit", ["overview"]],
        PAGE_ROLES: ["BizKit", ["page_roles"]],
        PEOPLE: ["BizKit", ["people"]],
        PERMISSIONS: ["BizKit", ["permissions"]],
        POSTS: ["BizKit", ["posts"]],
        PRESMA_INSTAGRAM: ["BizKit", ["presma_instagram"]],
        PUBLISHED_FORMS: ["BizKit", ["published_forms"]],
        PUBLISHED_POSTS: ["BizKit", ["published_posts"]],
        RESULTS: ["BizKit", ["results"]],
        ROOT: ["BizKit", ["root"]],
        SCHEDULED_POSTS: ["BizKit", ["scheduled_posts"]],
        SETTINGS: ["BizKit", ["settings"]],
        WEC: ["BizKit", ["wec"]]
    }
}
), null);
__d("BizKitInboxICERoute", ["AdsInterfacesICERoute", "BizKitRootICERoute", "immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        return b
    }(b("AdsInterfacesICERoute"));
    a.routeName = "BizKitInboxICERoute";
    a.configName = "BizKit";
    a.configPath = b("immutable").List(["inbox"]);
    a.givenName = "inbox";
    a.path = "/bizkit/inbox";
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
    a.parentRoute = b("BizKitRootICERoute");
    a.activeState = {
        routeName: "INBOX"
    };
    a.forceLoad = !1;
    a.redirect = ["BizKit", ["all"]];
    a.viewModuleName = "BizKitInboxView.react";
    e.exports = a
}
), null);
__d("BizKitCommerceEmailICERoute", ["AdsInterfacesICERoute", "BizKitInboxICERoute", "immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        return b
    }(b("AdsInterfacesICERoute"));
    a.routeName = "BizKitCommerceEmailICERoute";
    a.configName = "BizKit";
    a.configPath = b("immutable").List(["commerce_email"]);
    a.givenName = "commerce_email";
    a.path = "/bizkit/inbox/commerce_email";
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
    a.parentRoute = b("BizKitInboxICERoute");
    a.activeState = {
        routeName: "COMMERCE_EMAIL"
    };
    a.forceLoad = !1;
    a.viewModuleName = "BizKitInboxView.react";
    e.exports = a
}
), null);
__d("BizKitHomeICERoute", ["AdsInterfacesICERoute", "BizKitRootICERoute", "immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        return b
    }(b("AdsInterfacesICERoute"));
    a.routeName = "BizKitHomeICERoute";
    a.configName = "BizKit";
    a.configPath = b("immutable").List(["home"]);
    a.givenName = "home";
    a.path = "/bizkit/home";
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
        },
        modal: {
            type: "String",
            customType: "String",
            required: !1
        },
        request_product_tour: {
            type: "String",
            customType: "boolean",
            required: !1
        }
    };
    a.parentRoute = b("BizKitRootICERoute");
    a.activeState = {
        routeName: "HOME"
    };
    a.forceLoad = !1;
    a.viewModuleName = "BizKitHomeView.react";
    e.exports = a
}
), null);
__d("adsChooseSelector", ["AdsSelectorNameUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c, d, e, f) {
        var g = function() {
            return a() ? c.apply(void 0, arguments) : d.apply(void 0, arguments)
        };
        g.isGetStoresStatic = !1;
        g.isGetStoresPure = e && c.isGetStoresPure && d.isGetStoresPure;
        g.getStores = function(b) {
            return a() ? c.getStores(b) : d.getStores(b)
        }
        ;
        g.rawSelectFn = function() {
            return a() ? c.rawSelectFn.apply(c, arguments) : d.rawSelectFn.apply(d, arguments)
        }
        ;
        b("AdsSelectorNameUtils").nameSelector(g, f);
        return g
    }
}
), null);
__d("AdsPlacementAssetCustomizationSelectors", ["AdsAdgroupRecordAccessors", "AdsAssetFeedFieldUtils", "AdsAssetFeedUtils", "AdsBrandAwarenessUtils", "AdsCampaignGroupRecordAccessors", "AdsCampaignRecordAccessors", "AdsIsApplicationInCallToAction", "AdsPlacementAPISpecReaderUtils", "AdsPlacementAssetEligibilityUtils", "AdsPlacementAssetTargetingRuleUtils", "AdsPlacementAssetUtils", "AdsPlacementEligibilityInfoUtils", "AdsUEditorAdgroupBulkSelectors", "AdsUEditorAdgroupSelectors", "AdsUEditorCampaignSelectors", "AdsUEditorSelectors", "ApiDynamicCreativeOptimizationTypes", "PlacementAssetCustomizationTypes", "adsChooseSelector", "adsCreateSelector", "adsGetUniformValueSelector", "adsPlacementAPISpecReaderIsActivePublisherPlatform", "adsUEditorAccountSelector", "adsUEditorAdObjectsForSelectedAdgroupsSelector", "adsUEditorBlockListAccountListSelector", "adsUEditorSelectedAdgroupIDsSelector", "adsUEditorSelectedAdgroupsSelector", "areEqual", "gkx", "immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h;
    d = (a = b("adsCreateSelector"))([c = b("adsUEditorAdObjectsForSelectedAdgroupsSelector")], function(a) {
        return b("AdsPlacementAssetUtils").getCustomizationGroupInfoFromAdObjectList(a)
    }, {
        name: e.id + ".candidateAssetGroupSelector_OLD"
    });
    var i = a([c], function(a) {
        return b("AdsPlacementAssetUtils").getCustomizationGroupInfoFromAdObjectList(a)
    }, {
        equal: function(a, c) {
            return (g || (g = b("areEqual")))(a == null ? void 0 : a.assetGroups, c == null ? void 0 : c.assetGroups)
        },
        name: e.id + ".candidateAssetGroupSelector_NEW"
    });
    i = b("adsChooseSelector")(function() {
        return b("gkx")("1491199")
    }, i, d, !0, e.id + ".candidateAssetGroupSelector");
    f.candidateAssetGroupSelector = i;
    d = a([b("adsUEditorAccountSelector"), b("adsUEditorBlockListAccountListSelector"), c], function(a, c, d) {
        d = d.map(function(d) {
            var e, f = d.adgroup, g = d.campaign;
            d = d.campaignGroup;
            var h = d.buying_type;
            d = d.objective;
            e = (e = g.promoted_object) == null ? void 0 : e.object_store_url;
            h = b("AdsPlacementEligibilityInfoUtils").buildEligibilityInformationFromCampaignSpec(g, h, a.capabilities, d, c, e, void 0, !1, a);
            if (b("AdsPlacementAssetEligibilityUtils").isEligibleForPlacementAssetCustomizationPhase2(g, f, h))
                return b("PlacementAssetCustomizationTypes").PAC_PHASE_2;
            return b("AdsPlacementAssetEligibilityUtils").isEligibleForPlacementAssetCustomizationPhase1(g, f, h) ? b("PlacementAssetCustomizationTypes").PAC_PHASE_1 : b("PlacementAssetCustomizationTypes").PAC_NOT_SUPPORTED
        });
        if (d.some(function(a) {
            return a === b("PlacementAssetCustomizationTypes").PAC_NOT_SUPPORTED
        }))
            return b("PlacementAssetCustomizationTypes").PAC_NOT_SUPPORTED;
        d = d.every(function(a) {
            return a === b("PlacementAssetCustomizationTypes").PAC_PHASE_2
        });
        return d ? b("PlacementAssetCustomizationTypes").PAC_PHASE_2 : b("PlacementAssetCustomizationTypes").PAC_PHASE_1
    }, {
        name: e.id + ".adsUEditorAdgroupPlacementAssetCustomizationTypeSelector"
    });
    f.adsUEditorAdgroupPlacementAssetCustomizationTypeSelector = d;
    i = a([c], b("AdsPlacementAssetUtils").getPlacementAPISpecsFromAdObjectList, {
        name: e.id + ".placementAPISpecsSelector"
    });
    d = a([i], function(a) {
        return a.some(function(a) {
            return b("adsPlacementAPISpecReaderIsActivePublisherPlatform")(a, "facebook")
        })
    }, {
        name: e.id + ".hasFacebookPlacementSelector"
    });
    i = a([i], function(a) {
        return a.some(function(a) {
            return b("AdsPlacementAPISpecReaderUtils").isActiveInstagramPosition(a, "stream")
        })
    }, {
        name: e.id + ".hasInstagramStreamPlacementSelector"
    });
    d = a([d, i], function(a, c) {
        return b("AdsPlacementAssetUtils").getPlacementAssetSelectorConfig({
            hasFacebookPlacement: a,
            hasInstagramStreamPlacement: c
        })
    }, {
        name: e.id + ".pacConfigSelector_NEW"
    });
    i = a([c], function(a) {
        return b("AdsPlacementAssetUtils").getPlacementAssetSelectorConfigForAdObjectList(a)
    }, {
        name: e.id + ".pacConfigSelector_OLD"
    });
    d = b("adsChooseSelector")(function() {
        return b("gkx")("1491199")
    }, d, i, !0, e.id + ".pacConfigSelector");
    f.pacConfigSelector = d;
    var j = a([(i = b("adsGetUniformValueSelector"))((d = b("AdsUEditorSelectors")).adgroup.bulkByAccessor((h = b("AdsAdgroupRecordAccessors")).creative.asset_feed_spec.asset_customization_rules.get), null), i(d.adgroup.bulkByAccessor(h.creative.asset_feed_spec.bodies.get), null), i(d.adgroup.bulkByAccessor(h.creative.asset_feed_spec.optimization_type.get), null)], function(a, c, d) {
        if (a == null || c == null)
            return b("immutable").Map();
        var e = b("AdsPlacementAssetTargetingRuleUtils").getDefaultRuleOrRuleWithMostPlacements(a);
        if (e == null)
            return b("immutable").Map();
        var f = b("AdsPlacementAssetUtils").getCustomizedAssetLabelList(a, c, "body_label")
          , g = d === b("ApiDynamicCreativeOptimizationTypes").PLACEMENT;
        return a.reduce(function(a, d) {
            var e;
            if (d.has("image_label"))
                e = "image_label";
            else if (d.has("video_label"))
                e = "video_label";
            else
                return a;
            e = b("AdsPlacementAssetTargetingRuleUtils").getLabelNameFromTargetingRule(d, e);
            if (b("AdsPlacementAssetTargetingRuleUtils").hasLabelFieldInRule(d, "body_label")) {
                d = b("AdsPlacementAssetTargetingRuleUtils").getLabelNameFromTargetingRule(d, "body_label");
                var h = b("AdsAssetFeedFieldUtils").getAssetEntriesForLabel(c, "adlabels", d, "text");
                h = h != null ? h.map(function(a) {
                    return a.fieldValue
                }) : null;
                if (h != null)
                    return a.set(e, {
                        bodies: h,
                        isCustomized: f.includes(d) && g
                    })
            }
            return a
        }, b("immutable").Map())
    }, {
        name: e.id + ".adsUEditorPACBodyAssetInfoByMediaAssetLabel"
    });
    f.adsUEditorPACBodyAssetInfoByMediaAssetLabel = j;
    j = a([i(d.adgroup.bulkByAccessor(h.creative.asset_feed_spec.asset_customization_rules.get), null), i(d.adgroup.bulkByAccessor(h.creative.asset_feed_spec.titles.get), null), i(d.adgroup.bulkByAccessor(h.creative.asset_feed_spec.optimization_type.get), null)], function(a, c, d) {
        if (a == null || c == null)
            return b("immutable").Map();
        var e = b("AdsPlacementAssetTargetingRuleUtils").getDefaultRuleOrRuleWithMostPlacements(a);
        if (e == null)
            return b("immutable").Map();
        var f = b("AdsPlacementAssetUtils").getCustomizedAssetLabelList(a, c, "title_label")
          , g = d === b("ApiDynamicCreativeOptimizationTypes").PLACEMENT;
        return a.reduce(function(a, d) {
            var e;
            if (d.has("image_label"))
                e = "image_label";
            else if (d.has("video_label"))
                e = "video_label";
            else
                return a;
            e = b("AdsPlacementAssetTargetingRuleUtils").getLabelNameFromTargetingRule(d, e);
            if (b("AdsPlacementAssetTargetingRuleUtils").hasLabelFieldInRule(d, "title_label")) {
                d = b("AdsPlacementAssetTargetingRuleUtils").getLabelNameFromTargetingRule(d, "title_label");
                var h = b("AdsAssetFeedFieldUtils").getAssetEntriesForLabel(c, "adlabels", d, "text");
                h = h != null ? h.map(function(a) {
                    return a.fieldValue
                }) : null;
                if (h != null)
                    return a.set(e, {
                        headlines: h,
                        isCustomized: f.includes(d) && g
                    })
            }
            return a
        }, b("immutable").Map())
    }, {
        name: e.id + ".adsUEditorPACHeadlineAssetInfoByMediaAssetLabel"
    });
    f.adsUEditorPACHeadlineAssetInfoByMediaAssetLabel = j;
    var k = b("immutable").Map();
    j = a([c, i(d.adgroup.bulkByAccessor(h.creative.asset_feed_spec.asset_customization_rules.get), null), i(d.adgroup.bulkByAccessor(h.creative.asset_feed_spec.link_urls.get), null), i(d.adgroup.bulkByAccessor(h.creative.asset_feed_spec.ad_formats.get), null), i(d.adgroup.bulkByAccessor(h.creative.asset_feed_spec.optimization_type.get), null)], function(a, c, d, e, f) {
        if (e == null || c == null || d == null)
            return k;
        a = b("AdsPlacementAssetTargetingRuleUtils").getDefaultRuleOrRuleWithMostPlacements(c);
        if (a == null)
            return k;
        var g = b("AdsPlacementAssetUtils").getCustomizedAssetLabelList(c, d, "link_url_label")
          , h = f === b("ApiDynamicCreativeOptimizationTypes").PLACEMENT;
        return c.reduce(function(a, c) {
            var e;
            if (c.has("image_label"))
                e = "image_label";
            else if (c.has("video_label"))
                e = "video_label";
            else if (c.has("carousel_label"))
                e = "carousel_label";
            else
                return a;
            e = b("AdsPlacementAssetTargetingRuleUtils").getLabelNameFromTargetingRule(c, e);
            if (b("AdsPlacementAssetTargetingRuleUtils").hasLabelFieldInRule(c, "link_url_label")) {
                c = b("AdsPlacementAssetTargetingRuleUtils").getLabelNameFromTargetingRule(c, "link_url_label");
                var f = b("AdsAssetFeedFieldUtils").getAssetEntryForLabel(d, c, "website_url").fieldValue
                  , i = b("AdsAssetFeedFieldUtils").getAssetEntryForLabel(d, c, "display_url").fieldValue;
                if (f != null)
                    return a.set(e, {
                        websiteUrl: f,
                        displayUrl: i,
                        isCustomized: g.includes(c) && h
                    })
            }
            return a
        }, k)
    }, {
        name: e.id + ".adsUEditorPACUrlAssetInfoByMediaAssetLabel"
    });
    f.adsUEditorPACUrlAssetInfoByMediaAssetLabel = j;
    c = a([i(d.adgroup.bulkByAccessor(h.creative.asset_feed_spec.asset_customization_rules.get), null), i(d.adgroup.bulkByAccessor(h.creative.asset_feed_spec.images.get), null), i(d.adgroup.bulkByAccessor(h.creative.asset_feed_spec.ad_formats.get), null)], function(a, c, d) {
        if (d == null || d instanceof b("immutable").List && d.get(0) !== "SINGLE_IMAGE" || Array.isArray(d) && d[0] !== "SINGLE_IMAGE")
            return b("immutable").List();
        d = b("AdsPlacementAssetUtils").getCustomizedAssetLabelList(a, c, "image_label");
        return d || b("immutable").List()
    }, {
        name: e.id + ".adsUEditorPACCustomizedImageAssetLabelSelector"
    });
    f.adsUEditorPACCustomizedImageAssetLabelSelector = c;
    j = a([i(d.adgroup.bulkByAccessor(h.creative.asset_feed_spec.asset_customization_rules.get), null), i(d.adgroup.bulkByAccessor(h.creative.asset_feed_spec.videos.get), null), i(d.adgroup.bulkByAccessor(h.creative.asset_feed_spec.ad_formats.get), null)], function(a, c, d) {
        if (d == null || d instanceof b("immutable").List && d.get(0) !== "SINGLE_VIDEO" || Array.isArray(d) && d[0] !== "SINGLE_VIDEO")
            return b("immutable").List();
        d = b("AdsPlacementAssetUtils").getCustomizedAssetLabelList(a, c, "video_label");
        return d || b("immutable").List()
    }, {
        name: e.id + ".adsUEditorPACCustomizedVideoAssetLabelSelector"
    });
    f.adsUEditorPACCustomizedVideoAssetLabelSelector = j;
    c = a([d.campaignGroup.bulkByAccessor(b("AdsCampaignGroupRecordAccessors").buying_type.get), d.campaign.bulkByAccessor(b("AdsCampaignRecordAccessors").optimization_goal.get), d.campaignGroup.bulkByAccessor(b("AdsCampaignGroupRecordAccessors").objective.get), b("AdsUEditorCampaignSelectors").placementSpecs, b("adsUEditorSelectedAdgroupIDsSelector"), d.campaignGroup.bulkByAccessor(b("AdsCampaignGroupRecordAccessors").id.get), d.campaign.bulkByAccessor(b("AdsCampaignRecordAccessors").id.get), b("AdsUEditorAdgroupBulkSelectors").selectorByAdgroupFn(b("AdsAssetFeedUtils").isRegularDCOAdgroupFromRecord)], function(a, b, c, d, e, f, g, h) {
        return {
            allAdgroupsUseDCO: h.getValues().every(function(a) {
                return a
            }),
            bulkBuyingType: a,
            bulkOptimizationGoal: b,
            isMPA: !1,
            objective: c,
            placementSpecs: d,
            videoUploadingAdgroupIDs: e,
            videoUploadingCampaignGroupIDs: f.getValues(),
            videoUploadingCampaignIDs: g.getValues(),
            videoUploadingTabID: 0
        }
    }, {
        name: e.id + ".startUploadVideoBackgroundUploadInfoSelector"
    });
    f.startUploadVideoBackgroundUploadInfoSelector = c;
    j = b("AdsUEditorAdgroupSelectors").adgroups.every(b("AdsIsApplicationInCallToAction").isApplicationInCallToAction);
    f.adsUEditorIsAppDestinationSelector = j;
    c = a([b("adsUEditorSelectedAdgroupsSelector")], function(a) {
        return !a.every(b("AdsBrandAwarenessUtils").isWebsiteLinkEnabled)
    }, {
        name: e.id + ".adsUEditorIsWebsiteLinkDisabledSelector"
    });
    f.adsUEditorIsWebsiteLinkDisabledSelector = c;
    j = a([i(d.adgroup.bulkByAccessor(h.creative.asset_feed_spec.asset_customization_rules.get), null), i(d.adgroup.bulkByAccessor(h.creative.asset_feed_spec.videos.get), null)], function(a, c) {
        a = b("AdsPlacementAssetUtils").getInteractivePollSpecAssetLabelList(a, c, "video_label", "adlabels");
        return a || b("immutable").List()
    }, {
        name: e.id + ".adsUEditorPACInteractivePollVideoAssetLabelSelector"
    });
    f.adsUEditorPACInteractivePollVideoAssetLabelSelector = j
}
), null);
__d("AdsSettingsStore", ["AdAccountUserSettingsDataManager", "AdsDataAtom", "AdsInsightsCreateColumnPresetActionFlux", "AdsInsightsCreateColumnPresetSuccessActionFlux", "AdsInsightsDeleteColumnPresetSuccessActionFlux", "AdsLoadState_LEGACY", "AdsMediaPickerToggleAutoCropOptimizationFlowActionFlux", "AdsMediaPickerToggleImageNativeCreativeFlowActionFlux", "AdsMediaPickerToggleVideoAdjustmentsFlowActionFlux", "AdsSettingsAdsSettingsLoadedActionFlux", "AdsSettingsAdsSettingsLoadErrorActionFlux", "AdsSettingsAdsSettingsUpdateActionFlux", "AdsSettingsSetShouldDefaultImageLPPAdsToSquareActionFlux", "FluxReduceStore", "ImmutableRecordWithV4Types", "immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        saveAsDefaultId: null,
        accountIdToSettingsMap: b("immutable").Map()
    };
    var g = b("ImmutableRecordWithV4Types").Record(a);
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(b) {
            b = a.call(this, b) || this;
            b.$AdsSettingsStore1 = {};
            return b
        }
        var d = c.prototype;
        d.getInitialState = function() {
            return g()
        }
        ;
        d.__getActionTypes = function() {
            return [b("AdsSettingsAdsSettingsLoadedActionFlux").actionType, b("AdsSettingsAdsSettingsUpdateActionFlux").actionType, b("AdsSettingsAdsSettingsLoadErrorActionFlux").actionType, b("AdsInsightsCreateColumnPresetActionFlux").actionType, b("AdsInsightsCreateColumnPresetSuccessActionFlux").actionType, b("AdsInsightsDeleteColumnPresetSuccessActionFlux").actionType, b("AdsSettingsSetShouldDefaultImageLPPAdsToSquareActionFlux").actionType, b("AdsMediaPickerToggleImageNativeCreativeFlowActionFlux").actionType, b("AdsMediaPickerToggleAutoCropOptimizationFlowActionFlux").actionType, b("AdsMediaPickerToggleVideoAdjustmentsFlowActionFlux").actionType]
        }
        ;
        d.reduce = function(a, c) {
            var d;
            c = c.action;
            switch (c.type) {
            case b("AdsSettingsAdsSettingsLoadedActionFlux").actionType:
                return this.$AdsSettingsStore2(a, c.data.accountID, c.data.settings);
            case b("AdsSettingsAdsSettingsUpdateActionFlux").actionType:
                return this.$AdsSettingsStore3(a, c.data.accountID, c.data.settings);
            case b("AdsSettingsAdsSettingsLoadErrorActionFlux").actionType:
                return this.$AdsSettingsStore4(a, c);
            case b("AdsInsightsCreateColumnPresetActionFlux").actionType:
                return this.$AdsSettingsStore5(a, c);
            case b("AdsInsightsCreateColumnPresetSuccessActionFlux").actionType:
                return this.$AdsSettingsStore6(a, c);
            case b("AdsInsightsDeleteColumnPresetSuccessActionFlux").actionType:
                return this.$AdsSettingsStore7(a, c);
            case b("AdsSettingsSetShouldDefaultImageLPPAdsToSquareActionFlux").actionType:
                return this.$AdsSettingsStore3(a, c.accountID, (d = {},
                d.should_default_image_lpp_ads_to_square = c.shouldDefaultSingleLPPAdsToSquare,
                d));
            case b("AdsMediaPickerToggleImageNativeCreativeFlowActionFlux").actionType:
                return this.$AdsSettingsStore3(a, c.accountID, (d = {},
                d.should_default_image_auto_crop = c.isOptIn,
                d.should_default_image_auto_crop_for_tail = c.isOptIn,
                d));
            case b("AdsMediaPickerToggleAutoCropOptimizationFlowActionFlux").actionType:
                return this.$AdsSettingsStore3(a, c.accountID, (d = {},
                d.should_default_image_auto_crop_optimization = c.isAutoCropOptimizationEnabled,
                d));
            case b("AdsMediaPickerToggleVideoAdjustmentsFlowActionFlux").actionType:
                return this.$AdsSettingsStore3(a, c.accountID, (d = {},
                d.acf_should_opt_out_video_adjustments = c.isVideoAdjustmentsDisabled,
                d));
            default:
                return a
            }
        }
        ;
        d.$AdsSettingsStore5 = function(a, b) {
            return b.columnPreset.shouldSaveAsDefault ? a.set("saveAsDefaultId", b.columnPreset.id) : a
        }
        ;
        d.$AdsSettingsStore6 = function(a, b) {
            if (b.oldID && b.oldID === a.get("saveAsDefaultId")) {
                var c = {};
                c.default_builtin_column_preset = void 0;
                c.default_column_preset = {
                    id: b.newID
                };
                a.set("saveAsDefaultId", null);
                return this.$AdsSettingsStore3(a, b.accountID, c)
            }
            return a
        }
        ;
        d.$AdsSettingsStore7 = function(a, b) {
            if (b.id) {
                var c;
                c = (c = {},
                c.default_column_preset = void 0,
                c);
                a.set("saveAsDefaultId", null);
                return this.$AdsSettingsStore3(a, b.accountID, c)
            }
            return a
        }
        ;
        d.$AdsSettingsStore4 = function(a, c) {
            var d = c.data.accountID;
            c = c.data.apiFields;
            var e = b("immutable").Map();
            a.accountIdToSettingsMap.has(d) && (e = a.accountIdToSettingsMap.get(d));
            c.forEach(function(a) {
                e = e.set(a, b("AdsLoadState_LEGACY").ERROR)
            });
            return a.update("accountIdToSettingsMap", function(a) {
                return a.set(d, e)
            })
        }
        ;
        d.$AdsSettingsStore2 = function(a, b, c) {
            var d = this;
            Object.keys(c).forEach(function(a) {
                return d.$AdsSettingsStore8(b, a)
            });
            return this.$AdsSettingsStore9(a, b, c)
        }
        ;
        d.$AdsSettingsStore9 = function(a, c, d) {
            var e = b("immutable").Map();
            a.accountIdToSettingsMap.has(c) && (e = a.accountIdToSettingsMap.get(c));
            Object.keys(d).forEach(function(a) {
                return e = e.set(a, d[a])
            });
            return a.update("accountIdToSettingsMap", function(a) {
                return a.set(c, e)
            })
        }
        ;
        d.$AdsSettingsStore10 = function(a, c) {
            return Object.prototype.hasOwnProperty.call(this.$AdsSettingsStore1, a) && Object.prototype.hasOwnProperty.call(this.$AdsSettingsStore1[a], c) && this.$AdsSettingsStore1[a][c] === b("AdsLoadState_LEGACY").LOADING ? !0 : !1
        }
        ;
        d.$AdsSettingsStore11 = function(a, c) {
            var d = this;
            Object.prototype.hasOwnProperty.call(this.$AdsSettingsStore1, a) || (this.$AdsSettingsStore1[a] = {});
            c.forEach(function(c) {
                d.$AdsSettingsStore1[a][c] = b("AdsLoadState_LEGACY").LOADING
            })
        }
        ;
        d.$AdsSettingsStore8 = function(a, b) {
            if (!Object.prototype.hasOwnProperty.call(this.$AdsSettingsStore1, a))
                return;
            Object.prototype.hasOwnProperty.call(this.$AdsSettingsStore1[a], b) && delete this.$AdsSettingsStore1[a][b]
        }
        ;
        d.$AdsSettingsStore3 = function(a, c, d) {
            b("AdAccountUserSettingsDataManager").updateSettings(c, d);
            return this.$AdsSettingsStore9(a, c, d)
        }
        ;
        d.$AdsSettingsStore12 = function(a, c) {
            var d = this;
            if (!this.getState().accountIdToSettingsMap.has(a)) {
                var e = c.filter(function(b) {
                    return !d.$AdsSettingsStore10(a, b)
                });
                e.length > 0 && (this.$AdsSettingsStore11(a, e),
                b("AdAccountUserSettingsDataManager").loadSettings(a, c));
                return {
                    loadState: b("AdsLoadState_LEGACY").LOADING
                }
            } else {
                var f = this.getState().accountIdToSettingsMap.get(a)
                  , g = [];
                e = !1;
                var h = !1;
                c.forEach(function(c) {
                    !f.has(c) && (!Object.prototype.hasOwnProperty.call(d.$AdsSettingsStore1, a) || !Object.prototype.hasOwnProperty.call(d.$AdsSettingsStore1[a], c)) ? g.push(c) : f.get(c) === b("AdsLoadState_LEGACY").ERROR ? e = !0 : Object.prototype.hasOwnProperty.call(d.$AdsSettingsStore1, a) && d.$AdsSettingsStore1[a][c] === b("AdsLoadState_LEGACY").LOADING && (h = !0)
                });
                if (e)
                    return {
                        loadState: b("AdsLoadState_LEGACY").ERROR
                    };
                if (g.length) {
                    this.$AdsSettingsStore11(a, g);
                    b("AdAccountUserSettingsDataManager").loadSettings(a, g);
                    return {
                        loadState: b("AdsLoadState_LEGACY").LOADING
                    }
                } else if (h)
                    return {
                        loadState: b("AdsLoadState_LEGACY").LOADING
                    };
                var i = {};
                c.forEach(function(a) {
                    i[a] = f.get(a)
                });
                return i
            }
        }
        ;
        d.getByFields = function(a, b) {
            return this.$AdsSettingsStore12(a, Array.from(b))
        }
        ;
        d.getExportSettings = function(a) {
            var b = ["ad_object_export_format", "export_deleted_items_with_delivery", "export_summary_row"];
            return this.$AdsSettingsStore12(a, b)
        }
        ;
        return c
    }(b("FluxReduceStore"));
    c.__moduleID = e.id;
    d = new c(b("AdsDataAtom"));
    e.exports = d
}
), null);
__d("adsUEditorAdgroupIsPoliticalAdSelector", ["AdsAdgroupUtils", "AdsUEditorAdgroupSelectors"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("AdsUEditorAdgroupSelectors").adgroups.every(b("AdsAdgroupUtils").isPoliticalAd);
    c = a;
    e.exports = c
}
), null);
__d("adsUEditorImageSourceCustomizePlacementsAutoCropOptimizationEligibleSelector", ["AdsCampaignGroupRecordAccessors", "AdsUEditorSelectors", "adsCreateAdAccountGKSelector", "adsCreateSelector", "adsGetUniformValueSelector", "adsUEditorAdgroupIsPoliticalAdSelector"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = ["APP_INSTALLS", "LINK_CLICKS", "CONVERSIONS"];
    a = b("adsGetUniformValueSelector")(b("AdsUEditorSelectors").campaignGroup.bulkByAccessor(b("AdsCampaignGroupRecordAccessors").objective.get), null);
    c = b("adsCreateSelector")([a], function(a) {
        return g.includes(a)
    }, {
        name: e.id + ".isObjectiveEligibleSelector"
    });
    d = b("adsCreateSelector")([c, b("adsCreateAdAccountGKSelector")._("1SIbGGMEn"), b("adsCreateAdAccountGKSelector")._("RzWevYTn"), b("adsUEditorAdgroupIsPoliticalAdSelector")], function(a, b, c, d) {
        return (b || c) && a && !d
    }, {
        name: e.id + ".adsUEditorImageSourceCustomizePlacementsAutoCropOptimizationEligibleSelector"
    });
    f = d;
    e.exports = f
}
), null);
__d("AdsImageDimensionUtils", ["AdsImageIDClasses"], (function(a, b, c, d, e, f) {
    "use strict";
    f.getImageDimensionFromImageID = a;
    function a(a, c, d) {
        if (a instanceof b("AdsImageIDClasses").AdsExternalImageID) {
            var e = a.getUrl();
            c = c.get(e);
            return c.mapValue(function(a) {
                return {
                    height: a.height,
                    width: a.width
                }
            })
        }
        e = d(a);
        return e.mapValue(function(a) {
            return {
                height: a.get("height"),
                width: a.get("width")
            }
        })
    }
}
), null);
__d("withAbstractDraggableDataSource", ["cssVar", "cx", "DOMDimensions", "Draggable", "Event", "Keys", "React", "ReactDOM", "Rect", "getScrollPosition", "getViewportDimensions", "joinClasses"], (function(a, b, c, d, e, f, g, h) {
    e.exports = a;
    var i = b("React")
      , j = parseInt("1024px", 10);
    function a(a) {
        return function(c) {
            babelHelpers.inheritsLoose(d, c);
            function d() {
                var a, d;
                for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                    f[g] = arguments[g];
                return (a = d = c.call.apply(c, [this].concat(f)) || this,
                d.state = {
                    dragging: !1,
                    width: null
                },
                d.$1 = null,
                d.$2 = null,
                d.$3 = null,
                d.$4 = function() {
                    var a = d.props.item;
                    a = (a.isMovable ? "_58zo" : "") + (d.state.dragging ? " _58zp" : "") + " _58z_" + (a.isMovable ? "" : " _58-6");
                    return b("joinClasses")(a, "_58-8")
                }
                ,
                d.$6 = function() {
                    if (d.state.dragging)
                        return;
                    var a = b("ReactDOM").findDOMNode(babelHelpers.assertThisInitialized(d));
                    if (a === null)
                        return;
                    d.$2 = b("Event").listen(document, "keydown", function(a) {
                        a.keyCode === b("Keys").ESC && (d.$9(),
                        a.preventDefault())
                    });
                    var c = b("DOMDimensions").getElementDimensions(a);
                    c = c.width;
                    d.setState({
                        dragging: !0,
                        width: c
                    });
                    d.props.onGrab(d.props.item.id, a)
                }
                ,
                d.$7 = function() {
                    var a = b("ReactDOM").findDOMNode(babelHelpers.assertThisInitialized(d))
                      , c = 250;
                    a = a.parentNode;
                    a = new (b("Rect"))(a);
                    var e = b("getViewportDimensions")()
                      , f = b("getScrollPosition")(window)
                      , g = Math.max(e.width, j);
                    g = new (b("Rect"))(f.y,Math.min(g, a.r + c),e.height + f.y,Math.max(0, a.l - c));
                    d.$1 && d.$1.setBoundingBox(g);
                    d.props.onDrag()
                }
                ,
                d.$8 = function() {
                    d.$10(),
                    d.props.onDrop()
                }
                ,
                d.$11 = function(a) {
                    d.$3 = a
                }
                ,
                a) || babelHelpers.assertThisInitialized(d)
            }
            var e = d.prototype;
            e.$5 = function(a) {
                var c = b("ReactDOM").findDOMNode(this);
                a && !this.$1 && this.$3 != null ? this.$1 = new (b("Draggable"))(c).setNamespace("AbstractDraggableList").setUseAbsolute(!0).setGrabHandler(this.$6).setDragHandler(this.$7).setDropHandler(this.$8).addHandle(b("ReactDOM").findDOMNode(this.$3)) : !a && this.$1 && (this.$1.active && this.$9(),
                this.$1.destroy())
            }
            ;
            e.componentDidMount = function() {
                this.$5(this.props.item.isMovable || !1)
            }
            ;
            e.componentWillUnmount = function() {
                this.$5(!1)
            }
            ;
            e.UNSAFE_componentWillReceiveProps = function(a) {
                this.$5(a.item.isMovable || !1)
            }
            ;
            e.$9 = function() {
                this.$1 && this.$1.killDrag(),
                this.$10(),
                this.props.onCancelDrag()
            }
            ;
            e.$10 = function() {
                this.$1 && this.$1.resetPosition(),
                this.setState({
                    dragging: !1,
                    width: null
                }),
                this.$2 && this.$2.remove(),
                delete this.$2
            }
            ;
            e.render = function() {
                return i.jsx(a, babelHelpers["extends"]({}, this.props, this.state, {
                    getRootClassName: this.$4,
                    setRef: this.$11
                }))
            }
            ;
            return d
        }(i.Component)
    }
}
), null);
__d("JobSearchATSLogger", ["JobsActionsTypedLogger", "guid"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, c, d, e) {
            this.$1 = a,
            this.$2 = c,
            this.$3 = d,
            this.$4 = e != null && e !== "" ? e : b("guid")()
        }
        var c = a.prototype;
        c.getWaterfallSessionID = function() {
            return this.$4
        }
        ;
        c.setWaterfallSessionID = function(a) {
            this.$4 = a
        }
        ;
        c.logATSImpression = function(a) {
            this.$5("job_ats_impression", a)
        }
        ;
        c.logApplicationDetailViewImpression = function(a) {
            this.$5("job_application_detail_view_impression", a)
        }
        ;
        c.logMessageBubbleView = function() {
            this.$5("job_application_messenger_bubble_impression")
        }
        ;
        c.logMessageBubbleViewFullApplicationClick = function() {
            this.$5("job_message_bubble_view_full_application_click")
        }
        ;
        c.logMessageBubbleViewJobOpeningClick = function() {
            this.$5("job_message_bubble_view_job_opening_click")
        }
        ;
        c.logATSApplicationImpression = function(a) {
            this.$5("job_ats_application_impression", a)
        }
        ;
        c.logATSCopyPhoneNumberClick = function() {
            this.$5("job_ats_click_copy_phone_number")
        }
        ;
        c.logATSEmailClick = function() {
            this.$5("job_ats_click_email")
        }
        ;
        c.logATSMessageClick = function() {
            this.$5("job_ats_click_message")
        }
        ;
        c.logATSScheduleInterviewButtonImpression = function() {
            this.$5("job_ats_application_schedule_interview_button_impression")
        }
        ;
        c.logATSScheduleInterviewButtonClick = function() {
            this.$5("job_ats_application_schedule_interview_button_click")
        }
        ;
        c.logATSApplicantRowClick = function(a) {
            new (b("JobsActionsTypedLogger"))().setName("job_ats_applicant_row_click").setOverrideEmployerID(this.$1).setOverrideJobID(this.$2).setOverrideApplicationID(a).setWaterfallSessionID(this.$4).log()
        }
        ;
        c.logATSApplicationResumeAttachmentsImpression = function() {
            this.$5("job_ats_application_resume_attachments_impression")
        }
        ;
        c.logATSApplicationResumePhotoClick = function() {
            this.$5("job_ats_application_resume_photo_click")
        }
        ;
        c.logATSApplicationResumeFileClick = function() {
            this.$5("job_ats_application_resume_file_click")
        }
        ;
        c.logATSTableExportClick = function() {
            this.$5("job_ats_table_export_click")
        }
        ;
        c.logATSTableExportQuerySuccess = function() {
            this.$5("job_ats_table_export_query_success")
        }
        ;
        c.logATSTableExportQueryFailure = function() {
            this.$5("job_ats_table_export_query_failure")
        }
        ;
        c.logATSApplicationManagerImpression = function(a) {
            this.$5("job_ats_application_manager_impression", a)
        }
        ;
        c.logATSJobPostManagerImpression = function() {
            this.$5("job_ats_job_post_manager_impression")
        }
        ;
        c.logATSPagerButtonLeftClick = function() {
            this.$5("job_ats_click_pager_button_left")
        }
        ;
        c.logATSPagerButtonRightClick = function() {
            this.$5("job_ats_click_pager_button_right")
        }
        ;
        c.logATSFilterResetClick = function() {
            this.$5("job_ats_click_filter_reset")
        }
        ;
        c.logATSDownloadPDFClick = function() {
            this.$5("job_ats_application_download_pdf_click")
        }
        ;
        c.logJobApplicationATSMarkAsStatusUsed = function(a, c) {
            new (b("JobsActionsTypedLogger"))().setName("job_ats_application_mark_as_used").setOverrideEmployerID(this.$1).setJobApplicationStatus(c).setOverrideJobID(this.$2).setOverrideApplicationID(a).setWaterfallSessionID(this.$4).log()
        }
        ;
        c.logJobATSTableFilter = function(a) {
            new (b("JobsActionsTypedLogger"))().setOverrideEmployerID(this.$1).setName("job_ats_table_filter").setAtsFilter(a).setWaterfallSessionID(this.$4).log()
        }
        ;
        c.logJobATSTableJobOpeningFilter = function(a) {
            new (b("JobsActionsTypedLogger"))().setOverrideEmployerID(this.$1).setOverrideJobID(a).setName("job_ats_table_job_opening_filter").setWaterfallSessionID(this.$4).log()
        }
        ;
        c.logJobATSTableSortingFilterClick = function() {
            new (b("JobsActionsTypedLogger"))().setName("job_ats_application_sorting_filter_click").setWaterfallSessionID(this.$4).log()
        }
        ;
        c.logJobATSTableSortingTypeClick = function(a) {
            new (b("JobsActionsTypedLogger"))().setName("job_ats_application_sorting_filter_option_selected").setWaterfallSessionID(this.$4).setAtsApplicationSortingOrder(a).log()
        }
        ;
        c.logJobApplicationATSQualityFeedbackImpression = function(a) {
            new (b("JobsActionsTypedLogger"))().setName("job_ats_application_quality_feedback_impression").setOverrideEmployerID(this.$1).setOverrideJobID(this.$2).setOverrideApplicationID(a).setWaterfallSessionID(this.$4).log()
        }
        ;
        c.logJobApplicationATSQualityFeedbackButtonClick = function(a) {
            new (b("JobsActionsTypedLogger"))().setName("jobs_creator_feedback_button_click").setOverrideEmployerID(this.$1).setOverrideJobID(this.$2).setOverrideApplicationID(a).setWaterfallSessionID(this.$4).log()
        }
        ;
        c.logJobApplicationATSQualityFeedbackLabel = function(a, c, d) {
            new (b("JobsActionsTypedLogger"))().setName("jobs_creator_feedback_label_click").setOverrideEmployerID(this.$1).setOverrideJobID(this.$2).setOverrideApplicationID(a).setJobApplicationQualityFeedback(c).setWaterfallSessionID(this.$4).setRefererSurface(d).log()
        }
        ;
        c.logJobApplicationATSQualityUpdateFeedbackSuccess = function(a, c, d) {
            new (b("JobsActionsTypedLogger"))().setName("jobs_creator_feedback_received_success").setOverrideEmployerID(this.$1).setOverrideJobID(this.$2).setOverrideApplicationID(a).setJobApplicationQualityFeedback(c).setWaterfallSessionID(this.$4).setRefererSurface(d).log()
        }
        ;
        c.logJobApplicationATSQualityUpdateFeedbackFailure = function(a, c, d) {
            new (b("JobsActionsTypedLogger"))().setName("jobs_creator_feedback_received_failure").setOverrideEmployerID(this.$1).setOverrideJobID(this.$2).setOverrideApplicationID(a).setJobApplicationQualityFeedback(c).setWaterfallSessionID(this.$4).setRefererSurface(d).log()
        }
        ;
        c.logJobsMessengerBannerImpression = function() {
            this.$5("jobs_messenger_banner_impression")
        }
        ;
        c.logJobsUpsellRemindMeLaterClick = function() {
            this.$5("jobs_upsell_remind_me_later_click")
        }
        ;
        c.logMarkAsHiredSurveyImpression = function(a) {
            new (b("JobsActionsTypedLogger"))().setName("job_opening_mark_as_hired_impression").setOverrideEmployerID(this.$1).setOverrideJobID(a).setOverrideApplicationID(this.$3).setWaterfallSessionID(this.$4).log()
        }
        ;
        c.logMarkAsHiredSurveySubmit = function(a, c) {
            new (b("JobsActionsTypedLogger"))().setName("job_opening_mark_as_hired_submit").setOverrideEmployerID(this.$1).setOverrideJobID(a).setCloseReason(c).setOverrideApplicationID(this.$3).setWaterfallSessionID(this.$4).log()
        }
        ;
        c.logJobsMessengerBannerMarkAsClosed = function(a) {
            this.$5("jobs_messenger_banner_mark_as_closed", a)
        }
        ;
        c.logJobsMessengerBannerRenewJobClick = function(a) {
            this.$5("jobs_messenger_banner_renew_job_click", a)
        }
        ;
        c.logJobsViewUploadedResumeButtonClick = function(a) {
            this.$5("jobs_view_uploaded_resume_button_click", a)
        }
        ;
        c.logJobsViewGeneratedResumeButtonClick = function(a) {
            this.$5("jobs_view_generated_resume_button_click", a)
        }
        ;
        c.logJobsViewUploadedResumeButtonImpression = function(a) {
            this.$5("jobs_view_uploaded_resume_button_impression", a)
        }
        ;
        c.logJobsViewGeneratedResumeButtonImpression = function(a) {
            this.$5("jobs_view_generated_resume_button_impression", a)
        }
        ;
        c.$5 = function(a, c) {
            new (b("JobsActionsTypedLogger"))().setName(a).setOverrideEmployerID(this.$1).setOverrideJobID(this.$2).setOverrideApplicationID(this.$3).setRefererSurface(c).setWaterfallSessionID(this.$4).log()
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
