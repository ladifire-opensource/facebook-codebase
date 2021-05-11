if (self.CavalryLogger) {
    CavalryLogger.start_js(["LHM2k"]);
}

__d("AdBidAdjustmentsPageTypes", [], (function(a, b, c, d, e, f) {
    e.exports = {
        mobileexternal: "mobileexternal",
        mobilefeed: "mobilefeed"
    }
}
), null);
__d("AdsAPIBidInfoFields", [], (function(a, b, c, d, e, f) {
    e.exports = {
        CLICKS: "CLICKS",
        REACH: "REACH",
        SOCIAL: "SOCIAL",
        IMPRESSIONS: "IMPRESSIONS",
        CAMPAIGN_MONTHLY_REACH: "CAMPAIGN_MONTHLY_REACH",
        ACTIONS: "ACTIONS",
        CONVERSION_VALUE: "CONVERSION_VALUE",
        EXPLORE_DEMO_SEGMENT: "EXPLORE_DEMO_SEGMENT",
        MONTHLY_REACH: "MONTHLY_REACH"
    }
}
), null);
__d("AdsAPIAdCampaignFields", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        ACCOUNT_ID: "account_id",
        AD_ASSET_FEED: "adasset_feed",
        AD_CAMPAIGN_GROUP: "adcampaign_group",
        AD_COUNT: "ad_count",
        AD_FORMAT_PLAN: "ad_format_plan",
        AD_KEYWORDS: "ad_keywords",
        AD_LABEL_IDS: "adlabel_ids",
        AD_LABELS: "adlabels",
        AD_RULES: "adrules",
        AD_STRATEGY_ID: "ad_strategy_id",
        ADJUST_LOOKALIKES: "adjust_lookalikes",
        ADSET_SCHEDULE: "adset_schedule",
        ASSET_FEED_ID: "asset_feed_id",
        ASSET_FEED_OPTIMIZATION_TYPE: "asset_feed_optimization_type",
        ATTRIBUTION_SPEC: "attribution_spec",
        ATTRIBUTION_WINDOW_DAYS: "attribution_window_days",
        AUDIENCE_REACHED_PERCENTAGE: "audience_reached_percentage",
        BEST_CREATIVE: "best_creative",
        BID_ADJUSTMENTS: "bid_adjustments",
        BID_AMOUNT: "bid_amount",
        BID_CONSTRAINTS: "bid_constraints",
        BID_INFO: "bid_info",
        BID_STRATEGY: "bid_strategy",
        BID_TYPE: "bid_type",
        BILLING_EVENT: "billing_event",
        BRAND_AUDIENCE: "brand_audience",
        BRAND_AUDIENCE_ID: "brand_audience_id",
        BUDGET_REMAINING: "budget_remaining",
        BUDGET_RESET_PERIOD: "budget_reset_period",
        BUYING_TYPE: "buying_type",
        CAMPAIGN: "campaign",
        CAMPAIGN_CREATION_SOURCE: "campaign_creation_source",
        CAMPAIGN_GROUP_ID: "campaign_group_id",
        CAMPAIGN_GROUP_NAME: "campaign_group_name",
        CAMPAIGN_GROUP_SPEC: "campaign_group_spec",
        CAMPAIGN_ID: "campaign_id",
        CAMPAIGN_SCHEDULE: "campaign_schedule",
        CAMPAIGN_SPEC: "campaign_spec",
        CAMPAIGN_STATUS: "campaign_status",
        CHECKOUT_PAYMENT_IDS: "checkout_payment_ids",
        CONFIGURED_STATUS: "configured_status",
        CONVERSION_PIXEL_ID: "conversion_pixel_id",
        COST_PER: "adset.cost_per",
        CPA: "adset.cpa",
        CPM: "adset.cpm",
        CREATED_TIME: "created_time",
        CREATIVE_SEQUENCE: "creative_sequence",
        DAILY_BUDGET: "daily_budget",
        DAILY_IMPS: "daily_imps",
        DAILY_MIN_SPEND_TARGET: "daily_min_spend_target",
        DAILY_SPEND_CAP: "daily_spend_cap",
        DATE_FORMAT: "date_format",
        DELIVERY_AGE: "delivery_age",
        DELIVERY_GENDER: "delivery_gender",
        DELIVERY_INFO: "delivery_info",
        DELIVERY_INSIGHTS: "delivery_insights",
        DELIVERY_LOCATION: "delivery_location",
        DELIVERY_STATUS: "delivery_status",
        DELIVERY_VIEW_UNSUPPORTED_REASONS: "delivery_view_unsupported_reasons",
        DESTINATION_TYPE: "destination_type",
        DRAFT_ACTION: "draft_action",
        DRAFT_CAMPAIGN_ID: "draft_campaign_id",
        EFFECTIVE_STATUS: "effective_status",
        END_TIME: "end_time",
        ESTIMATED_BUDGET_SPENDING_PERCENTAGE: "estimated_budget_spending_percentage",
        EXECUTION_OPTIONS: "execution_options",
        EXTERNAL_BID: "external_bid",
        FREQUENCY_CAP: "frequency_cap",
        FREQUENCY_CAP_RESET_PERIOD: "frequency_cap_reset_period",
        FREQUENCY_CONTROL_SPECS: "frequency_control_specs",
        FREQUENCY_METRIC: "adset.frequency",
        FULL_FUNNEL_EXPLORATION_MODE: "full_funnel_exploration_mode",
        FULLTEXT_SEARCH: "fulltext_search",
        HAS_ACTIVE_ACO_AUTOFLOW_AD: "has_active_aco_autoflow_ad",
        ID: "id",
        IMPRESSIONS: "adset.impressions",
        INCLUDE_IN_AD_STUDY_CELL_ID: "include_in_ad_study_cell_id",
        INSTAGRAM_ACTOR_ID: "instagram_actor_id",
        INSTANT_CHECKOUT_COMMERCE_ACCOUNT_ID: "instant_checkout_commerce_account_id",
        INSTANT_CHECKOUT_TYPE: "instant_checkout_type",
        IO_NUMBER: "io_number",
        IS_AUTOBID: "is_autobid",
        IS_AVERAGE_PRICE_PACING: "is_average_price_pacing",
        IS_BID_CONSTRAINED: "is_bid_constrained",
        IS_BONUS_MEDIA: "is_bonus_media",
        IS_BUDGET_CONSTRAINED: "is_budget_constrained",
        IS_COLLABORATIVE_ADS: "is_collaborative_ads",
        IS_COST_CONSTRAINED: "is_cost_constrained",
        IS_DRAFT_ONLY: "is_draft_only",
        IS_DYNAMIC_CREATIVE: "is_dynamic_creative",
        IS_DYNAMIC_CREATIVE_ASSET_CUSTOMIZATION: "is_dynamic_creative_asset_customization",
        IS_DYNAMIC_CREATIVE_FORMAT_AUTOMATION: "is_dynamic_creative_format_automation",
        IS_DYNAMIC_CREATIVE_OPTIMIZATION: "is_dynamic_creative_optimization",
        IS_ELIGIBLE_FOR_DYNAMIC_CREATIVE_OPTIMIZATION: "is_eligible_for_dynamic_creative_optimization",
        IS_IN_LEARNING_STAGE: "is_in_learning_stage",
        IS_OPTIMIZATION_GOAL_SET_EXPLICITLY: "is_optimization_goal_set_explicitly",
        IS_SUBOPTIMAL_CBO_CALIBRATION: "is_suboptimal_cbo_calibration",
        IS_UNIFIED_ATTRIBUTION_WINDOW: "is_unified_attribution_window",
        IS_USING_TARGET_CPA: "is_using_target_cpa",
        ISSUES_INFO: "issues_info",
        ITERATIVE_SPLIT_TEST_CONFIG_ID: "iterative_split_test_config_id",
        ITERATIVE_SPLIT_TEST_CONFIGS: "iterative_split_test_configs",
        LEARNING_STAGE_INFO: "learning_stage_info",
        LIFETIME_BUDGET: "lifetime_budget",
        LIFETIME_BUDGET_SPENT: "lifetime_spent",
        LIFETIME_FREQUENCY_CAP: "lifetime_frequency_cap",
        LIFETIME_IMPS: "lifetime_imps",
        LIFETIME_MIN_SPEND_TARGET: "lifetime_min_spend_target",
        LIFETIME_REACH: "lifetime_reach",
        LIFETIME_SPEND_CAP: "lifetime_spend_cap",
        LIFETIME_SPENT: "adset.lifetime_spent",
        LIFETIME_TARGET_SPEND: "lifetime_target_spend",
        LINE_NUMBER: "line_number",
        METRICS_METADATA: "metrics_metadata",
        MIN_VIDEO_VIEW_SECONDS: "min_video_view_seconds",
        MULTI_OPTIMIZATION_GOAL_WEIGHT: "multi_optimization_goal_weight",
        NAME: "name",
        NEGATIVE_KEYWORDS: "negative_keywords",
        NEKO_HAS_MIXED_PROMOTED_OBJECTS: "neko_has_mixed_promoted_objects",
        NEKO_PROMOTED_OBJECT_ID: "neko_promoted_object_id",
        NEKO_PROMOTED_OBJECT_URL: "neko_promoted_object_url",
        OBJECTIVE: "objective",
        OBJECTIVE_FOR_COST: "objective_for_cost",
        OBJECTIVE_FOR_RESULTS: "objective_for_results",
        OPTIMAL_DELIVERY_GROWTH_OPPORTUNITIES: "optimal_delivery_growth_opportunities",
        OPTIMIZATION_GOAL: "optimization_goal",
        OPTIMIZATION_PATH: "optimization_path",
        OPTIMIZATION_SUB_EVENT: "optimization_sub_event",
        PACED_BID_INFO: "paced_bid_info",
        PACING_TYPE: "pacing_type",
        PACKAGE_SELECTOR: "package_selector",
        PLACEMENT: "placement",
        PLACEMENT_PAGETYPE: "adset.placement.page_types",
        PROMOTED_OBJECT: "promoted_object",
        PRORATED_DAILY_BUDGET: "prorated_daily_budget",
        RB_PREDICTION_ID: "rb_prediction_id",
        REACH: "adset.reach",
        RECOMMENDATIONS: "recommendations",
        RECURRING_BUDGET_SEMANTICS: "recurring_budget_semantics",
        REVIEW_FEEDBACK: "review_feedback",
        RF_PREDICTION_ID: "rf_prediction_id",
        SAVED_AUDIENCE: "saved_audience",
        SAVED_AUDIENCE_ID: "saved_audience_id",
        SOURCE_ADSET: "source_adset",
        SOURCE_ADSET_ID: "source_adset_id",
        SPLIT_TEST_CONFIG_SPLITS_INDEX: "split_test_config_splits_index",
        START_TIME: "start_time",
        STATUS: "status",
        STUDY_IDS: "study_ids",
        TAG_IDS: "tag_ids",
        TARGETING: "targeting",
        TARGETING_AGE_MAX: "targeting_age_max",
        TARGETING_AGE_MIN: "targeting_age_min",
        TARGETING_CONTEXTUAL_TARGETING_CATEGORIES: "targeting_contextual_targeting_categories",
        TARGETING_COUNTRIES: "targeting_countries",
        TARGETING_EXPANSION_SPEC: "targeting_expansion_spec",
        TARGETING_GENDERS: "targeting_genders",
        TARGETING_SIGNALS: "targeting_signals",
        TIME_BASED_AD_ROTATION_ID_BLOCKS: "time_based_ad_rotation_id_blocks",
        TIME_BASED_AD_ROTATION_INTERVALS: "time_based_ad_rotation_intervals",
        TIME_START: "time_start",
        TIME_STOP: "time_stop",
        TOP_OBSERVATIONS: "top_observations",
        TOPLINE_ID: "topline_id",
        TUNE_FOR_CATEGORY: "tune_for_category",
        UPDATED_TIME: "updated_time",
        UPSTREAM_EVENTS: "upstream_events",
        USE_ACCELERATED_DELIVERY: "use_accelerated_delivery",
        USE_NEW_APP_CLICK: "use_new_app_click",
        USE_UPSTREAM_EVENT: "use_upstream_event",
        VALID_BID_TYPES: "valid_bid_types",
        VALIDATE_ONLY: "validate_only",
        VIEW_THROUGH_ATTRIBUTION_WINDOW_DAYS: "view_through_attribution_window_days"
    });
    e.exports = a
}
), null);
__d("AdsAPIAdCampaignGroupFields", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        ACCOUNT_ID: "account_id",
        ADSET_BID_AMOUNTS: "adset_bid_amounts",
        ADSET_BUDGETS: "adset_budgets",
        ADSET_COUNT: "adset_count",
        ADVERTISER_INTENT: "advertiser_intent",
        AD_LABELS: "adlabels",
        AD_LABEL_IDS: "adlabel_ids",
        AD_STRATEGY_ID: "ad_strategy_id",
        BID_STRATEGY: "bid_strategy",
        BOOSTED_COMPONENT_CLIENT_APP_ID: "boosted_component_client_app_id",
        BOOSTED_COMPONENT_PRODUCT: "boosted_component_product",
        BOOSTED_OBJECT_ID: "boosted_object_id",
        BOOSTED_PAGE_ID: "boosted_page_id",
        BRAND_CONFIGURATION: "brand_configuration",
        BRAND_LIFT_STUDIES: "brand_lift_studies",
        BUDGET_REBALANCE_FLAG: "budget_rebalance_flag",
        BUDGET_REMAINING: "budget_remaining",
        BUDGET_RESET_PERIOD: "budget_reset_period",
        BUYING_TYPE: "buying_type",
        CAMPAIGN_GROUP_CREATION_SOURCE: "campaign_group_creation_source",
        CAMPAIGN_GROUP_STATUS: "campaign_group_status",
        CAMPAIGN_GROUP_TYPE: "campaign_group_type",
        CAN_CREATE_BRAND_LIFT_STUDY: "can_create_brand_lift_study",
        CAN_USE_SPEND_CAP: "can_use_spend_cap",
        CANCEL_SPLIT_TEST: "cancel_split_test",
        CHECKOUT_NON_DELIVERING: "checkout_non_delivering",
        COLLABORATIVE_ADS_PARTNER_INFO: "collaborative_ads_partner_info",
        CONFIGURED_STATUS: "configured_status",
        COST_PER: "campaign.cost_per",
        CPA: "campaign.cpa",
        CPM: "campaign.cpm",
        CREATED_TIME: "created_time",
        DAILY_BUDGET: "daily_budget",
        DELIVERY_INFO: "delivery_info",
        DELIVERY_STATUS: "delivery_status",
        EFFECTIVE_STATUS: "effective_status",
        EXECUTION_OPTIONS: "execution_options",
        FREQUENCY_METRIC: "campaign.frequency",
        FULLTEXT_SEARCH: "fulltext_search",
        HAS_DYNAMIC_CREATIVE_OPTIMIZATION_ADSETS: "has_dynamic_creative_optimization_adsets",
        ID: "id",
        IMPRESSIONS: "campaign.impressions",
        INCLUDE_IN_AD_STUDY_CELL_ID: "include_in_ad_study_cell_id",
        INCREMENTAL_CONVERSION_OPTIMIZATION_CONFIG: "incremental_conversion_optimization_config",
        IS_AUTOBID: "is_autobid",
        IS_AVERAGE_PRICE_PACING: "is_average_price_pacing",
        IS_COLLABORATIVE_ADS: "is_collaborative_ads",
        IS_DRAFT_ONLY: "is_draft_only",
        IS_JOB_OPENNING_POST: "is_job_openning_post",
        IS_OPTED_INTO_EXPERIMENTS: "is_opted_into_experiments",
        IS_USING_TARGET_CPA: "is_using_target_cpa",
        ISSUES_INFO: "issues_info",
        ITERATIVE_SPLIT_TEST_CONFIGS: "iterative_split_test_configs",
        KPI_TYPE: "kpi_type",
        KPI_CUSTOM_CONVERSION_ID: "kpi_custom_conversion_id",
        LAST_BUDGET_TOGGLING_TIME: "last_budget_toggling_time",
        LIFETIME_BUDGET: "lifetime_budget",
        LIFETIME_SPENT: "campaign.lifetime_spent",
        LIFETIME_BUDGET_SPENT: "lifetime_spent",
        LIFETIME_TARGET_SPEND: "lifetime_target_spend",
        METRICS_METADATA: "metrics_metadata",
        DRAFT_ACTION: "draft_action",
        NAME: "name",
        OBJECTIVE: "objective",
        OBJECTIVE_FOR_COST: "objective_for_cost",
        OBJECTIVE_FOR_RESULTS: "objective_for_results",
        OBJECTIVE_FOR_RESULTS_LABEL: "objective_for_results_label",
        OPTIMAL_DELIVERY_GROWTH_OPPORTUNITIES: "optimal_delivery_growth_opportunities",
        PACING_TYPE: "pacing_type",
        PROMOTED_OBJECT: "promoted_object",
        REACH: "campaign.reach",
        SOURCE_CAMPAIGN: "source_campaign",
        SOURCE_CAMPAIGN_ID: "source_campaign_id",
        SPLIT_TEST_CONFIG: "split_test_config",
        SPLIT_TEST_FREE_FORM_CAMPAIGN_GROUP: "split_test_free_form_campaign_group",
        SPLIT_TEST_STATUS: "split_test_status",
        SPLIT_TEST_WINNER: "split_test_winner",
        SPEND_CAP: "spend_cap",
        START_TIME: "start_time",
        STATUS: "status",
        STOP_TIME: "stop_time",
        STUDY_IDS: "study_ids",
        STUDY_NAME: "study_name",
        TAG_IDS: "tag_ids",
        TODAY_SPENT: "today_spent",
        TOPLINE_ID: "topline_id",
        UPDATED_TIME: "updated_time",
        UPSTREAM_EVENTS: "upstream_events",
        RECOMMENDATIONS: "recommendations",
        SPECIAL_AD_CATEGORY_COUNTRY: "special_ad_category_country",
        SPECIAL_AD_CATEGORIES: "special_ad_categories",
        SPECIAL_AD_CATEGORY: "special_ad_category",
        SMART_PROMOTION_TYPE: "smart_promotion_type",
        VALUE_SPEC_EVENT_FUNNEL: "value_spec_event_funnel",
        YESTERDAY_SPENT: "yesterday_spent"
    });
    e.exports = a
}
), null);
__d("AdsAPIAdKeywordsFields", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        SEARCH_TERMS: "search_terms",
        BRANDS: "brands",
        PRODUCT_NAMES: "product_names",
        PRODUCT_CATEGORIES: "product_categories",
        PRODUCT_CATEGORIES_MEGATAXON: "product_categories_megataxon",
        PRODUCT_CATEGORIES_FREEFORM: "product_categories_freeform",
        BANNED_KEYWORDS: "banned_keywords"
    });
    e.exports = a
}
), null);
__d("AdsAPICatalogBasedTargetingSpecFields", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        GEO_TARGETING_TYPE: "geo_targeting_type"
    });
    e.exports = a
}
), null);
__d("AdsAPIDeliveryInfoFields", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        ACTIVE_ACCELERATED_CAMPAIGN_COUNT: "active_accelerated_campaign_count",
        ACTIVE_DAY_PARTED_CAMPAIGN_COUNT: "active_day_parted_campaign_count",
        ACTIVE_ROTATED_CAMPAIGN_COUNT: "active_rotated_campaign_count",
        ARE_ALL_DAILY_BUDGETS_SPENT: "are_all_daily_budgets_spent",
        COMPLETED_CAMPAIGN_COUNT: "completed_campaign_count",
        CREDIT_NEEDED_ADS_COUNT: "credit_needed_ads_count",
        DELIVERY_INSIGHT: "delivery_insight",
        DELIVERY_INSIGHTS: "delivery_insights",
        ELIGIBLE_FOR_DELIVERY_INSIGHTS: "eligible_for_delivery_insights",
        END_TIME: "end_time",
        HAS_ACCOUNT_HIT_SPEND_LIMIT: "has_account_hit_spend_limit",
        HAS_CAMPAIGN_GROUP_HIT_SPEND_LIMIT: "has_campaign_group_hit_spend_limit",
        HAS_NO_ACTIVE_ADS: "has_no_active_ads",
        HAS_NO_ADS: "has_no_ads",
        INACTIVE_ADS_COUNT: "inactive_ads_count",
        INACTIVE_CAMPAIGN_COUNT: "inactive_campaign_count",
        IS_ADGROUP_PARTIALLY_REJECTED: "is_adgroup_partially_rejected",
        IS_AD_UNECONOMICAL: "is_ad_uneconomical",
        IS_CAMPAIGN_ACCELERATED: "is_campaign_accelerated",
        IS_CAMPAIGN_COMPLETED: "is_campaign_completed",
        IS_CAMPAIGN_DAY_PARTED: "is_campaign_day_parted",
        IS_CAMPAIGN_DISABLED: "is_campaign_disabled",
        IS_CAMPAIGN_GROUP_DISABLED: "is_campaign_group_disabled",
        IS_CAMPAIGN_ROTATED: "is_campaign_rotated",
        IS_CAMPAIGN_SCHEDULED: "is_campaign_scheduled",
        IS_DAILY_BUDGET_SPENT: "is_daily_budget_spent",
        IS_ACCOUNT_CLOSED: "is_account_closed",
        IS_ACCOUNT_DISABLED: "is_account_disabled",
        IS_REACH_AND_FREQUENCY_MISCONFIGURED: "is_reach_and_frequency_misconfigured",
        PENDING_REVIEW_INFO: "pending_review_info",
        REACH_FREQUENCY_CAMPAIGN_UNDERDELIVERY_REASON: "reach_frequency_campaign_underdelivery_reason",
        IS_SPLIT_TEST_ACTIVE: "is_split_test_active",
        IS_SPLIT_TEST_VALID: "is_split_test_valid",
        LIFT_STUDY_TIME_PERIOD: "lift_study_time_period",
        LIMITED_CAMPAIGN_COUNT: "limited_campaign_count",
        LIMITED_CAMPAIGN_IDS: "limited_campaign_ids",
        NEEDS_CREDIT: "needs_credit",
        NEEDS_TAX_NUMBER: "needs_tax_number",
        NON_DELETED_ADS_COUNT: "non_deleted_ads_count",
        NOT_DELIVERING_CAMPAIGN_COUNT: "not_delivering_campaign_count",
        PENDING_ADS_COUNT: "pending_ads_count",
        REJECTED_ADS_COUNT: "rejected_ads_count",
        SCHEDULED_CAMPAIGN_COUNT: "scheduled_campaign_count",
        SIGNAL_DIAGNOSTIC_ISSUE: "signal_diagnostic_issue",
        START_TIME: "start_time",
        STATUS: "status",
        TEXT_PENALTY_LEVEL: "text_penalty_level",
        IS_ADFARM_PENALIZED: "is_adfarm_penalized",
        IS_CLICKBAIT_PENALIZED: "is_clickbait_penalized",
        IS_LQWE_PENALIZED: "is_lqwe_penalized",
        IS_ENGAGEMENT_BAIT_PENALIZED: "is_engagement_bait_penalized",
        IS_SENSATIONALISM_PENALIZED: "is_sensationalism_penalized",
        AD_PENALTY_MAP: "ad_penalty_map"
    });
    e.exports = a
}
), null);
__d("AdsAPIPromotedObjectFields", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        APPLICATION_ID: "application_id",
        PIXEL_ID: "pixel_id",
        CUSTOM_EVENT_TYPE: "custom_event_type",
        OBJECT_STORE_URL: "object_store_url",
        OFFER_ID: "offer_id",
        PAGE_ID: "page_id",
        PRODUCT_CATALOG_ID: "product_catalog_id",
        PRODUCT_ITEM_ID: "product_item_id",
        INSTAGRAM_PROFILE_ID: "instagram_profile_id",
        PRODUCT_SET_ID: "product_set_id",
        PIXEL_RULE: "pixel_rule",
        PIXEL_AGGREGATION_RULE: "pixel_aggregation_rule",
        RETENTION_DAYS: "retention_days",
        PLACE_PAGE_SET_ID: "place_page_set_id",
        RESEARCH_POLL_ID: "research_poll_id",
        DIGITAL_STORE_OBJECT_ID: "digital_store_object_id",
        EVENT_ID: "event_id",
        OFFLINE_CONVERSION_DATA_SET_ID: "offline_conversion_data_set_id",
        CUSTOM_CONVERSION_ID: "custom_conversion_id",
        FUNDRAISER_CAMPAIGN_ID: "fundraiser_campaign_id",
        CUSTOM_EVENT_STR: "custom_event_str",
        OMNICHANNEL_OBJECT: "omnichannel_object"
    });
    e.exports = a
}
), null);
__d("AdsAPISavedAudienceFields", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        ACCOUNT: "account",
        ADCAMPAIGNS: "adcampaigns",
        ADSETS: "adsets",
        APPROXIMATE_COUNT: "approximate_count",
        CREATOR_APP_ID: "creator_app_id",
        DESCRIPTION: "description",
        EXTRA_INFO: "extra_info",
        ID: "id",
        IS_SHARING_AGREEMENT_NEEDED: "is_sharing_agreement_needed",
        NAME: "name",
        RUN_STATUS: "run_status",
        SENTENCE_LINES: "sentence_lines",
        TARGETING: "targeting",
        TIME_CREATED: "time_created",
        TIME_UPDATED: "time_updated",
        EXPIRY_TIME: "expiry_time",
        AUDIENCE_INSIGHTS_FILTERS: "audience_insights_filters",
        PERMISSION_FOR_ACTIONS: "permission_for_actions",
        TARGETING_STATUS: "targeting_status",
        NAME_OR_ID: "name_or_id"
    });
    e.exports = a
}
), null);
__d("AdsAPITargetGeoLocationFields", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        COUNTRY_GROUPS: "country_groups",
        COUNTRIES: "countries",
        REGIONS: "regions",
        CITIES: "cities",
        ZIPS: "zips",
        LOCATION_SET_IDS: "location_set_ids",
        PLACES: "places",
        CUSTOM: "custom_locations",
        MARKET: "geo_markets",
        ELECTORAL_DISTRICTS: "electoral_districts",
        POLITICAL_DISTRICTS: "political_districts",
        TYPES: "location_types",
        LARGE_GEO_AREAS: "large_geo_areas",
        MEDIUM_GEO_AREAS: "medium_geo_areas",
        SMALL_GEO_AREAS: "small_geo_areas",
        METRO_AREAS: "metro_areas",
        SUBCITIES: "subcities",
        NEIGHBORHOODS: "neighborhoods",
        SUBNEIGHBORHOODS: "subneighborhoods",
        LOCATION_CLUSTER_IDS: "location_cluster_ids",
        LOCATION_EXPANSION: "location_expansion"
    });
    e.exports = a
}
), null);
__d("AdsOmnichannelPromotedObjectTypes", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        APP: "app",
        PIXEL: "pixel",
        ONSITE: "onsite"
    });
    e.exports = a
}
), null);
__d("ApiBidAdjustmentsSpecFields", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        AGE_RANGE: "age_range",
        PAGE_TYPES: "page_types",
        USER_GROUPS: "user_groups"
    });
    e.exports = a
}
), null);
__d("AdsAPICampaignPaths", ["AdBidAdjustmentsPageTypes", "AdsAPIAdCampaignFields", "AdsAPIAdCampaignGroupFields", "AdsAPIAdKeywordsFields", "AdsAPIBidInfoFields", "AdsAPICatalogBasedTargetingSpecFields", "AdsAPIDeliveryInfoFields", "AdsAPIPromotedObjectFields", "AdsAPISavedAudienceFields", "AdsAPITargetFields", "AdsAPITargetGeoLocationFields", "AdsOmnichannelPromotedObjectTypes", "ApiBidAdjustmentsSpecFields", "generatePaths"], (function(a, b, c, d, e, f) {
    "use strict";
    a = [{
        pathKeys: [],
        expandsTo: b("AdsAPIAdCampaignFields")
    }, {
        pathKeys: ["CAMPAIGN"],
        expandsTo: b("AdsAPIAdCampaignGroupFields")
    }, {
        pathKeys: ["AD_CAMPAIGN_GROUP"],
        expandsTo: b("AdsAPIAdCampaignGroupFields")
    }, {
        pathKeys: ["BID_ADJUSTMENTS"],
        expandsTo: b("ApiBidAdjustmentsSpecFields")
    }, {
        pathKeys: ["BID_ADJUSTMENTS", "PAGE_TYPES"],
        expandsTo: b("AdBidAdjustmentsPageTypes")
    }, {
        pathKeys: ["BID_INFO"],
        expandsTo: b("AdsAPIBidInfoFields")
    }, {
        pathKeys: ["DELIVERY_INFO"],
        expandsTo: b("AdsAPIDeliveryInfoFields")
    }, {
        pathKeys: ["PROMOTED_OBJECT"],
        expandsTo: b("AdsAPIPromotedObjectFields")
    }, {
        pathKeys: ["PROMOTED_OBJECT", "OMNICHANNEL_OBJECT"],
        expandsTo: b("AdsOmnichannelPromotedObjectTypes")
    }, {
        pathKeys: ["SAVED_AUDIENCE"],
        expandsTo: b("AdsAPISavedAudienceFields")
    }, {
        pathKeys: ["BRAND_AUDIENCE"],
        expandsTo: b("AdsAPISavedAudienceFields")
    }, {
        pathKeys: ["TARGETING"],
        expandsTo: b("AdsAPITargetFields")
    }, {
        pathKeys: ["AD_KEYWORDS"],
        expandsTo: b("AdsAPIAdKeywordsFields")
    }, {
        pathKeys: ["TARGETING", "GEO_LOCATIONS"],
        expandsTo: b("AdsAPITargetGeoLocationFields")
    }, {
        pathKeys: ["TARGETING", "EXCLUDED_GEO_LOCATIONS"],
        expandsTo: b("AdsAPITargetGeoLocationFields")
    }, {
        pathKeys: ["TARGETING", "CATALOG_BASED_TARGETING"],
        expandsTo: b("AdsAPICatalogBasedTargetingSpecFields")
    }];
    c = b("generatePaths")(a);
    d = c;
    e.exports = d
}
), null);
__d("AudienceNetworkUtils", ["AdsAccountUtils", "AdsAPICampaignPaths", "AdsAPIObjectives", "AdsAPIOptimizationGoals", "AdsError", "keyMirror"], (function(a, b, c, d, e, f) {
    "use strict";
    f.supportsANVideoButNoANStatic = a;
    f.pushError = c;
    f.isMobileAppInstallObjective = d;
    f.getDeviceType = e;
    f.canUseFANExclusively = h;
    var g = b("keyMirror")({
        DESKTOP: null,
        MOBILE: null,
        TABLET: null
    });
    f.DEVICE_TYPES = g;
    function a(a) {
        return a === b("AdsAPIObjectives").VIDEO_VIEWS || a === b("AdsAPIObjectives").REACH || a === b("AdsAPIObjectives").BRAND_AWARENESS || a === b("AdsAPIObjectives").POST_ENGAGEMENT
    }
    function c(a, c, d) {
        var e = [];
        e.push(new (b("AdsError"))(a,c,{
            level: b("AdsError").Level.WARN,
            path: b("AdsAPICampaignPaths").TARGETING.PUBLISHER_PLATFORMS,
            cta: d
        }));
        return e
    }
    function d(a) {
        return a === b("AdsAPIObjectives").MOBILE_APP_INSTALLS || a === b("AdsAPIObjectives").APP_INSTALLS
    }
    function e() {
        var a = Math.min(screen.width, window.innerWidth);
        if (a <= 480)
            return g.MOBILE;
        else if (a <= 1200)
            return g.TABLET;
        else
            return g.DESKTOP
    }
    function h(c, d) {
        var e, a = (e = b("AdsAccountUtils")).hasCapabilityFromList(c, "ADS_ALLOW_AUDIENCE_NETWORK_ONLY"), f = e.hasCapabilityFromList(c, "CAN_USE_AUDIENCE_NETWORK_PLACEMENT_EXCLUSIVELY_IN_VIDEO_VIEWS"), g = e.hasCapabilityFromList(c, "CAN_USE_AUDIENCE_NETWORK_PLACEMENT_EXCLUSIVELY_IN_PPE"), i = e.hasCapabilityFromList(c, "CAN_USE_AUDIENCE_NETWORK_PLACEMENT_EXCLUSIVELY_IN_REACH");
        e = e.hasCapabilityFromList(c, "CAN_USE_AUDIENCE_NETWORK_PLACEMENT_EXCLUSIVELY_IN_BAO");
        return a || f && d === b("AdsAPIOptimizationGoals").VIDEO_VIEWS || e && d === b("AdsAPIOptimizationGoals").BRAND_AWARENESS || i && d === b("AdsAPIOptimizationGoals").REACH || g && d === b("AdsAPIOptimizationGoals").POST_ENGAGEMENT
    }
}
), null);
__d("BaseContainerQueryElement.react", ["React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React"), i = {
        root: {
            boxSizing: "rq0escxv",
            flexShrink: "pfnyh3mw",
            position: "l9j0dhe7"
        }
    };
    function a(a, c) {
        var d = a.breakpoint
          , e = a.inverseToContainer;
        e = e === void 0 ? !1 : e;
        var f = a.maxWidth
          , j = a.minWidth
          , k = a.xstyle;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["breakpoint", "inverseToContainer", "maxWidth", "minWidth", "xstyle"]);
        return h.jsx("div", babelHelpers["extends"]({}, a, {
            className: (g || (g = b("stylex")))(i.root, k),
            ref: c,
            style: {
                maxWidth: f,
                minWidth: j,
                width: e ? "calc((" + d + "px - 100%) * 9999)" : "calc((100% - " + (d - .1) + "px) * 9999)"
            }
        }))
    }
    c = h.forwardRef(a);
    e.exports = c
}
), null);
__d("TetraFacepileUnstyled.react", ["ix", "fbt", "BaseContainerQueryElement.react", "CometComponentWithKeyCommands.react", "CometKeys", "CometPressable.react", "CometTooltip.react", "FocusGroup.react", "JSScheduler", "React", "TetraIcon.react", "TetraProfilePhoto.react", "TetraText.react", "fbicon", "focusScopeQueries", "stylex", "useCometUniqueID", "useIntersectionObserver"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i, j = b("React");
    c = b("FocusGroup.react").createFocusGroup(b("focusScopeQueries").tabbableScopeQuery);
    var k = c[0]
      , l = c[1]
      , m = 4
      , n = 6
      , o = -4
      , p = {
        item: {
            position: "l9j0dhe7"
        },
        itemWithActivity: {
            marginStart: "ggphbty4"
        },
        itemWithSpacing: {
            marginStart: "kkf49tns"
        },
        items: {
            display: "j83agx80",
            flexDirection: "btwxx1t3",
            marginTop: "o7xrwllt",
            marginBottom: "quq7zyon",
            overflowX: "ni8dbmo4",
            paddingTop: "jktsbyx5",
            paddingBottom: "osnr6wyh",
            position: "l9j0dhe7"
        },
        overflow24: {
            height: "rgmg9uty",
            width: "b73ngqbp"
        },
        overflow32: {
            height: "k7cz35w2",
            width: "bsnbvmp4"
        },
        overflow40: {
            height: "qypqp5cg",
            width: "q676j6op"
        },
        overflow48: {
            height: "m7zwrmfr",
            width: "tmrshh9y"
        },
        overflowItem: {
            alignItems: "bp9cbjyn",
            borderTopStartRadius: "s45kfl79",
            borderTopEndRadius: "emlxlaya",
            borderBottomEndRadius: "bkmhp75w",
            borderBottomStartRadius: "spb7xbtv",
            display: "j83agx80",
            flexShrink: "pfnyh3mw",
            justifyContent: "taijpn5t",
            pointerEvents: "oqq733wu"
        },
        overflowItemBg: {
            fill: "lw8b5zex"
        },
        overflowItemContainer: {
            bottom: "k01i5q8h",
            display: "j83agx80",
            end: "n7fi1qx3",
            flexDirection: "btwxx1t3",
            pointerEvents: "hzruof5a",
            position: "pmk7jnqg",
            start: "j9ispegn",
            top: "c0p38np4"
        },
        overflowItemOverlay: {
            fill: "lw8b5zex",
            opacity: "b5wmifdl",
            transitionDuration: "c5ndavph",
            transitionProperty: "art1omkt",
            transitionTimingFunction: "ot9fgl3s"
        },
        overflowItemOverlayHovered: {
            fill: "geeicf24",
            opacity: "pedkr2u6",
            transitionDuration: "akwz6i9j"
        },
        overflowItemOverlayPressed: {
            fill: "jchep4xs",
            opacity: "pedkr2u6",
            transitionDuration: "akwz6i9j"
        },
        overflowItemSVG: {
            bottom: "i09qtzwb",
            end: "n7fi1qx3",
            position: "pmk7jnqg",
            start: "j9ispegn",
            top: "kr520xx4"
        },
        overlappingItem: {
            marginStart: "rl04r1d5"
        },
        pressableItem: {
            borderTopStartRadius: "s45kfl79",
            borderTopEndRadius: "emlxlaya",
            borderBottomEndRadius: "bkmhp75w",
            borderBottomStartRadius: "spb7xbtv",
            display: "a8c37x1j"
        },
        root: {
            display: "j83agx80",
            flexDirection: "cbu4d94t"
        },
        rootInline: {
            alignItems: "bp9cbjyn",
            flexDirection: "btwxx1t3"
        },
        text: {
            paddingTop: "pybr56ya"
        },
        textInline: {
            paddingStart: "b3onmgus",
            paddingTop: "jb3vyjys"
        }
    };
    function a(a) {
        a.align;
        var c = a.items
          , d = a.isTextInline;
        d = d === void 0 ? !1 : d;
        var e = a.count
          , f = e === void 0 ? c.length : e;
        e = a.ellipsisTooltip;
        var g = a.linkProps
          , t = a.onPress
          , u = a.overlapping
          , v = u === void 0 ? !1 : u
          , w = a.size;
        u = a.testID;
        u = a.testOnly_pressed;
        var x = u === void 0 ? !1 : u;
        u = a.text;
        a = c.some(function(a) {
            return a.addOn != null
        });
        var y = c.some(function(a) {
            return ((a = a.addOn) == null ? void 0 : a.type) === "activityBadge"
        })
          , z = v ? o : y ? n : m
          , A = Math.min(f, c.length, d ? 3 : Infinity)
          , B = j.useRef(null)
          , C = b("useCometUniqueID")()
          , D = [{
            command: {
                key: b("CometKeys").LEFT
            },
            description: h._("M\u1ee5c tr\u01b0\u1edbc \u0111\u00f3"),
            handler: function() {}
        }, {
            command: {
                key: b("CometKeys").RIGHT
            },
            description: h._("M\u1ee5c ti\u1ebfp theo"),
            handler: function() {}
        }];
        a = j.jsxs("div", {
            className: (i || (i = b("stylex")))(p.items),
            ref: B,
            role: "row",
            children: [c.slice(0, A).map(function(a, c) {
                var d = a.containerComponent
                  , e = a.linkProps
                  , f = a.onPress
                  , g = a.testOnly_pressed;
                a = babelHelpers.objectWithoutPropertiesLoose(a, ["containerComponent", "linkProps", "onPress", "testOnly_pressed"]);
                return j.jsxs(j.Fragment, {
                    children: [j.jsx(b("BaseContainerQueryElement.react"), {
                        breakpoint: (c + 1) * (w + z) - z,
                        inverseToContainer: !0,
                        maxWidth: "100%",
                        minWidth: 0
                    }), j.jsx(q, babelHelpers["extends"]({}, a, {
                        Container: d,
                        FocusItemComponent: l,
                        divClassName: (i || (i = b("stylex")))(p.item, c > 0 && p.itemWithSpacing, c > 0 && y && p.itemWithActivity, c > 0 && v && p.overlappingItem),
                        isOverlapped: v && c > 0,
                        overlapping: v,
                        parentRef: B,
                        pressableProps: f || e ? {
                            display: "inline",
                            linkProps: e,
                            onPress: f,
                            overlayDisabled: v,
                            overlayRadius: w / 2,
                            testOnly_pressed: g,
                            xstyle: p.pressableItem
                        } : null,
                        role: "cell",
                        shape: "circle",
                        size: w
                    }))]
                }, c)
            }), !a && (t || g) && j.jsxs("div", {
                className: (i || (i = b("stylex")))(p.overflowItemContainer),
                children: [c.slice(0, Math.min(c.length, A < f ? A : f)).map(function(a, c) {
                    return c === 0 && f > 1 ? null : j.jsx(b("BaseContainerQueryElement.react"), {
                        breakpoint: (c + 1) * (w + z) - z,
                        maxWidth: c === f - 1 ? "100%" : w + z,
                        minWidth: 0
                    }, "overflowPusher" + c)
                }), j.jsx(s, {
                    FocusItemComponent: l,
                    "aria-label": h._("Li\u00ean k\u1ebft \u0111\u1ec3 xem trang c\u00e1 nh\u00e2n c\u1ee7a m\u1ecdi ng\u01b0\u1eddi"),
                    count: f,
                    ellipsisTooltip: e,
                    linkProps: g,
                    onPress: t,
                    overlayDisabled: !0,
                    parentRef: B,
                    size: w,
                    spacing: z,
                    testid: void 0,
                    xstyle: [p.overflowItem, w === 24 && p.overflow24, w === 32 && p.overflow32, w === 40 && p.overflow40, w === 48 && p.overflow48],
                    children: function(a) {
                        var c = a.hovered;
                        a = a.pressed;
                        return j.jsxs(j.Fragment, {
                            children: [j.jsxs("svg", {
                                className: (i || (i = b("stylex")))(p.overflowItemSVG),
                                height: w,
                                viewBox: "0 0 " + w + " " + w,
                                width: w,
                                children: [v && A > 1 && j.jsxs("mask", {
                                    id: C,
                                    suppressHydrationWarning: !0,
                                    children: [j.jsx("circle", {
                                        cx: w / 2,
                                        cy: w / 2,
                                        fill: "white",
                                        r: w / 2
                                    }), j.jsx("circle", {
                                        cx: -w / 2 + 4,
                                        cy: w / 2,
                                        fill: "black",
                                        r: w / 2 + 2
                                    })]
                                }), j.jsx("circle", babelHelpers["extends"]({
                                    className: i(p.overflowItemBg),
                                    cx: w / 2,
                                    cy: w / 2,
                                    r: w / 2,
                                    suppressHydrationWarning: !0
                                }, v && A > 1 ? {
                                    mask: "url(#" + C + ")"
                                } : null)), j.jsx("circle", babelHelpers["extends"]({
                                    className: i(p.overflowItemOverlay, c && p.overflowItemOverlayHovered, (a || x) && p.overflowItemOverlayPressed),
                                    cx: w / 2,
                                    cy: w / 2,
                                    r: w / 2,
                                    suppressHydrationWarning: !0
                                }, v && A > 1 ? {
                                    mask: "url(#" + C + ")"
                                } : null))]
                            }), j.jsx(b("TetraIcon.react"), {
                                color: "white",
                                icon: r(w)
                            })]
                        })
                    }
                })]
            })]
        });
        return j.jsxs("div", {
            className: i(p.root, d && p.rootInline),
            "data-testid": void 0,
            role: "grid",
            children: [j.jsx(b("CometComponentWithKeyCommands.react"), {
                commandConfigs: D,
                children: j.jsx(k, {
                    orientation: "horizontal",
                    tabScopeQuery: b("focusScopeQueries").tabbableScopeQuery,
                    wrap: !0,
                    children: a
                })
            }), u != null ? j.jsx("div", {
                className: (i || (i = b("stylex")))(p.text, d && p.textInline),
                children: j.jsx(b("TetraText.react"), {
                    color: "secondary",
                    type: "body3",
                    children: u
                })
            }) : null]
        })
    }
    function q(a) {
        var c = a.Container
          , d = a.FocusItemComponent
          , e = a.divClassName;
        a.overlapping;
        var f = a.parentRef
          , g = a.pressableProps;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["Container", "FocusItemComponent", "divClassName", "overlapping", "parentRef", "pressableProps"]);
        var h = j.useState(!1)
          , i = h[0]
          , k = h[1];
        h = j.useCallback(function(a) {
            var c = a.intersectionRatio;
            b("JSScheduler").runWithPriority(b("JSScheduler").priorities.unstable_UserBlocking, function() {
                k(c < .5)
            })
        }, []);
        h = b("useIntersectionObserver")(h, {
            root: function() {
                var a;
                return (a = f.current) != null ? a : null
            },
            threshold: .5
        });
        a = j.jsx(b("TetraProfilePhoto.react"), babelHelpers["extends"]({}, a, {
            overlayDisabled: !0
        }));
        g && (a = j.jsx(b("CometPressable.react"), babelHelpers["extends"]({}, g, {
            disabled: i,
            role: "cell",
            children: a
        })));
        c && (a = j.jsx(c, {
            children: a
        }));
        return j.jsx("div", {
            className: e,
            ref: h,
            role: "cell",
            children: j.jsx(d, {
                disabled: i,
                children: a
            })
        })
    }
    function r(a) {
        switch (a) {
        case 32:
            return b("fbicon")._(g("484386"), 16);
        case 40:
        case 48:
            return b("fbicon")._(g("484388"), 24);
        default:
            return b("fbicon")._(g("484385"), 12)
        }
    }
    function s(a) {
        var c = a.FocusItemComponent;
        a.count;
        var d = a.ellipsisTooltip
          , e = a.parentRef
          , f = a.size
          , g = a.spacing;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["FocusItemComponent", "count", "ellipsisTooltip", "parentRef", "size", "spacing"]);
        var h = j.useState(!1)
          , i = h[0]
          , k = h[1];
        h = j.useState(null);
        var l = h[0]
          , m = h[1];
        h = j.useCallback(function(a) {
            var c = a.intersectionRatio;
            b("JSScheduler").runWithPriority(b("JSScheduler").priorities.unstable_UserBlocking, function() {
                k(c < .5)
            })
        }, []);
        h = b("useIntersectionObserver")(h, {
            root: function() {
                var a;
                return (a = e.current) != null ? a : null
            },
            threshold: .5
        });
        var n = function(a) {
            if (!a)
                return;
            a = e.current;
            if (!a)
                return;
            a = a.getBoundingClientRect();
            a = a.width;
            a = Math.floor((a + g) / (f + g));
            m(a - 1)
        };
        a = j.jsx(b("CometPressable.react"), babelHelpers["extends"]({}, a, {
            ref: h,
            role: "cell"
        }));
        d && (a = j.jsx(b("CometTooltip.react"), {
            align: "middle",
            onVisibilityChange: n,
            position: "below",
            tooltip: l != null ? d(l) : "",
            children: a
        }));
        return j.jsxs(c, {
            disabled: i,
            children: [" ", a, " "]
        })
    }
}
), null);
__d("TetraFacepile.react", ["React", "TetraFacepileUnstyled.react", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        return g.jsx("div", {
            className: "discj3wi dati1w0a d1544ag0",
            children: g.jsx(b("TetraFacepileUnstyled.react"), babelHelpers["extends"]({}, a))
        })
    }
}
), null);
__d("TetraOverlappingFacepileUnstyled.react", ["ix", "fbt", "BaseContainerQueryElement.react", "CometComponentWithKeyCommands.react", "CometKeys", "CometPressable.react", "CometTooltip.react", "FocusGroup.react", "JSScheduler", "React", "TetraIcon.react", "TetraProfilePhoto.react", "TetraText.react", "fbicon", "focusScopeQueries", "stylex", "useCometUniqueID", "useIntersectionObserver"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i, j = b("React");
    c = b("FocusGroup.react").createFocusGroup(b("focusScopeQueries").tabbableScopeQuery);
    var k = c[0]
      , l = c[1]
      , m = -4
      , n = {
        item: {
            marginBottom: "sej5wr8e",
            position: "l9j0dhe7"
        },
        itemWithSpacing: {
            marginStart: "rl04r1d5"
        },
        itemWithoutMargin: {
            position: "l9j0dhe7"
        },
        items: {
            display: "j83agx80",
            flexDirection: "btwxx1t3",
            flexShrink: "pfnyh3mw",
            flexWrap: "lhclo0ds",
            overflowX: "ni8dbmo4",
            overflowY: "stjgntxs",
            position: "l9j0dhe7"
        },
        overflow16: {
            height: "gl3lb2sf",
            width: "hhz5lgdu"
        },
        overflow16Child: {
            alignItems: "bp9cbjyn",
            display: "j83agx80",
            justifyContent: "taijpn5t",
            marginStart: "lq239pai"
        },
        overflow16Frame: {
            marginStart: "ggphbty4",
            overflowX: "ni8dbmo4",
            overflowY: "stjgntxs",
            width: "xthkpp0z"
        },
        overflow24: {
            height: "rgmg9uty",
            width: "b73ngqbp"
        },
        overflow32: {
            height: "k7cz35w2",
            width: "bsnbvmp4"
        },
        overflow36: {
            height: "tv7at329",
            width: "thwo4zme"
        },
        overflow40: {
            height: "qypqp5cg",
            width: "q676j6op"
        },
        overflow48: {
            height: "m7zwrmfr",
            width: "tmrshh9y"
        },
        overflowItem: {
            alignItems: "bp9cbjyn",
            borderTopStartRadius: "s45kfl79",
            borderTopEndRadius: "emlxlaya",
            borderBottomEndRadius: "bkmhp75w",
            borderBottomStartRadius: "spb7xbtv",
            display: "j83agx80",
            flexShrink: "pfnyh3mw",
            justifyContent: "taijpn5t",
            pointerEvents: "oqq733wu"
        },
        overflowItemBg: {
            fill: "lw8b5zex"
        },
        overflowItemContainer: {
            bottom: "i09qtzwb",
            boxSizing: "rq0escxv",
            end: "n7fi1qx3",
            position: "pmk7jnqg",
            start: "j9ispegn",
            top: "kr520xx4",
            display: "j83agx80",
            flexDirection: "btwxx1t3",
            pointerEvents: "hzruof5a"
        },
        overflowItemOverlay: {
            fill: "lw8b5zex",
            opacity: "b5wmifdl",
            transitionDuration: "c5ndavph",
            transitionProperty: "art1omkt",
            transitionTimingFunction: "ot9fgl3s"
        },
        overflowItemOverlayHovered: {
            fill: "geeicf24",
            opacity: "pedkr2u6",
            transitionDuration: "akwz6i9j"
        },
        overflowItemOverlayPressed: {
            fill: "jchep4xs",
            opacity: "pedkr2u6",
            transitionDuration: "akwz6i9j"
        },
        overflowItemSVG: {
            bottom: "i09qtzwb",
            end: "n7fi1qx3",
            position: "pmk7jnqg",
            start: "j9ispegn",
            top: "kr520xx4"
        },
        root: {
            display: "j83agx80",
            flexDirection: "cbu4d94t"
        },
        rootInline: {
            alignItems: "bp9cbjyn",
            flexDirection: "btwxx1t3"
        },
        text: {
            display: "j83agx80",
            flexDirection: "btwxx1t3",
            paddingTop: "pybr56ya"
        },
        textInline: {
            paddingStart: "b3onmgus",
            paddingTop: "jb3vyjys",
            flexBasis: "rj1gh0hx",
            flexGrow: "buofh1pr"
        }
    }
      , o = {
        16: {
            minWidth: "a5nuqjux"
        },
        24: {
            minWidth: "alsk43pb"
        },
        32: {
            minWidth: "gl2wjlmp"
        },
        36: {
            minWidth: "jgsskzai"
        },
        40: {
            minWidth: "rjkj87ba"
        },
        48: {
            minWidth: "nhgh0rzy"
        }
    }
      , p = {
        center: {
            justifyContent: "taijpn5t"
        },
        end: {
            justifyContent: "bkfpd7mw"
        },
        start: {
            justifyContent: "jifvfom9"
        }
    };
    function a(a) {
        var c = a.align;
        c = c === void 0 ? "start" : c;
        var d = a.items
          , e = a.isTextInline;
        e = e === void 0 ? !1 : e;
        var f = a.count
          , g = f === void 0 ? d.length : f;
        f = a.ellipsisTooltip;
        var u = a.linkProps
          , v = a.onPress
          , w = a.size
          , x = a.testID;
        x = a.testOnly_pressed;
        var y = x === void 0 ? !1 : x;
        x = a.text;
        a = a.disableMarginOnItems;
        var z = a === void 0 ? !1 : a
          , A = m
          , B = Math.min(g, d.length, e ? 3 : Infinity)
          , C = j.useRef(null);
        a = [{
            command: {
                key: b("CometKeys").LEFT
            },
            description: h._("M\u1ee5c tr\u01b0\u1edbc \u0111\u00f3"),
            handler: function() {}
        }, {
            command: {
                key: b("CometKeys").RIGHT
            },
            description: h._("M\u1ee5c ti\u1ebfp theo"),
            handler: function() {}
        }];
        d = j.jsxs("div", {
            className: (i || (i = b("stylex")))(n.items),
            ref: C,
            role: "row",
            style: {
                height: w
            },
            children: [d.slice(0, B).map(function(a, c) {
                var d = a.containerComponent
                  , e = a.linkProps
                  , f = a.onPress
                  , g = a.testOnly_pressed;
                a = babelHelpers.objectWithoutPropertiesLoose(a, ["containerComponent", "linkProps", "onPress", "testOnly_pressed"]);
                return j.jsxs(j.Fragment, {
                    children: [j.jsx(b("BaseContainerQueryElement.react"), {
                        breakpoint: (c + 1) * (w + A) - A,
                        inverseToContainer: !0,
                        maxWidth: "100%",
                        minWidth: 0
                    }), j.jsx(q, babelHelpers["extends"]({}, a, {
                        Container: d,
                        FocusItemComponent: l,
                        divClassName: (i || (i = b("stylex")))(z ? n.itemWithoutMargin : n.item, c > 0 && n.itemWithSpacing),
                        isOverlapped: c > 0,
                        linkProps: e,
                        onPress: f,
                        parentRef: C,
                        role: "cell",
                        shape: "circle",
                        size: w,
                        testOnly_pressed: g,
                        testid: void 0
                    }))]
                }, c)
            }), j.jsxs("div", {
                className: i(n.overflowItemContainer),
                children: [d.slice(0, Math.min(d.length, B < g ? B : g)).map(function(a, c) {
                    return c === 0 && g > 1 ? null : j.jsx(b("BaseContainerQueryElement.react"), {
                        breakpoint: (c + 1) * (w + A) - A,
                        maxWidth: c === g - 1 ? "100%" : w + A,
                        minWidth: 0
                    }, "overflowPusher" + c)
                }), j.jsx(s, {
                    FocusItemComponent: l,
                    "aria-label": h._("Li\u00ean k\u1ebft \u0111\u1ec3 xem trang c\u00e1 nh\u00e2n c\u1ee7a m\u1ecdi ng\u01b0\u1eddi"),
                    count: g,
                    ellipsisTooltip: f,
                    linkProps: u,
                    onPress: v,
                    overlayDisabled: !0,
                    parentRef: C,
                    size: w,
                    spacing: A,
                    testid: void 0,
                    xstyle: [n.overflowItem, w === 16 && n.overflow16, w === 24 && n.overflow24, w === 32 && n.overflow32, w === 36 && n.overflow36, w === 40 && n.overflow40, w === 48 && n.overflow48],
                    children: function(a) {
                        var c = a.hovered;
                        a = a.pressed;
                        return j.jsxs(j.Fragment, {
                            children: [j.jsx(t, {
                                hovered: c,
                                isOverlapped: B > 1,
                                pressed: a || y,
                                size: w
                            }), w === 16 ? j.jsx("div", {
                                className: (i || (i = b("stylex")))(n.overflow16Frame),
                                children: j.jsx("div", {
                                    className: (i || (i = b("stylex")))(n.overflow16Child),
                                    children: j.jsx(b("TetraIcon.react"), {
                                        color: "white",
                                        icon: r(w)
                                    })
                                })
                            }) : j.jsx(b("TetraIcon.react"), {
                                color: "white",
                                icon: r(w)
                            })]
                        })
                    }
                })]
            })]
        });
        return j.jsxs("div", {
            className: i(n.root, e && n.rootInline, p[c]),
            "data-testid": void 0,
            role: "grid",
            children: [j.jsx(b("CometComponentWithKeyCommands.react"), {
                commandConfigs: a,
                xstyle: e && B >= 3 && o[w],
                children: j.jsx(k, {
                    orientation: "horizontal",
                    tabScopeQuery: b("focusScopeQueries").tabbableScopeQuery,
                    wrap: !0,
                    children: d
                })
            }), x != null ? j.jsx("div", {
                className: (i || (i = b("stylex")))(n.text, e && n.textInline, p[c]),
                children: j.jsx(b("TetraText.react"), {
                    color: "secondary",
                    type: "body3",
                    children: x
                })
            }) : null]
        })
    }
    function q(a) {
        var c = a.Container
          , d = a.FocusItemComponent
          , e = a.divClassName
          , f = a.parentRef
          , g = babelHelpers.objectWithoutPropertiesLoose(a, ["Container", "FocusItemComponent", "divClassName", "parentRef"]);
        a = j.useState(!1);
        var h = a[0]
          , i = a[1];
        a = j.useCallback(function(a) {
            var c = a.intersectionRatio;
            b("JSScheduler").runWithPriority(b("JSScheduler").priorities.unstable_UserBlocking, function() {
                i(c < .5)
            })
        }, []);
        a = b("useIntersectionObserver")(a, {
            root: function() {
                var a;
                return (a = f.current) != null ? a : null
            },
            threshold: .5
        });
        return j.jsx("div", {
            className: e,
            ref: a,
            role: "cell",
            children: j.jsx(d, {
                disabled: h,
                children: c ? j.jsx(c, {
                    children: function(a) {
                        return j.jsx(b("TetraProfilePhoto.react"), babelHelpers["extends"]({}, g, {
                            overlayDisabled: !0,
                            ref: a
                        }))
                    }
                }) : j.jsx(b("TetraProfilePhoto.react"), babelHelpers["extends"]({}, g, {
                    overlayDisabled: !0
                }))
            })
        })
    }
    function r(a) {
        switch (a) {
        case 36:
        case 32:
            return b("fbicon")._(g("484386"), 16);
        case 40:
        case 48:
            return b("fbicon")._(g("484388"), 24);
        default:
            return b("fbicon")._(g("484385"), 12)
        }
    }
    function s(a) {
        var c = a.FocusItemComponent;
        a.count;
        var d = a.ellipsisTooltip
          , e = a.parentRef
          , f = a.size
          , g = a.spacing;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["FocusItemComponent", "count", "ellipsisTooltip", "parentRef", "size", "spacing"]);
        var h = j.useState(!1)
          , i = h[0]
          , k = h[1];
        h = j.useState(null);
        var l = h[0]
          , m = h[1];
        h = j.useCallback(function(a) {
            var c = a.intersectionRatio;
            b("JSScheduler").runWithPriority(b("JSScheduler").priorities.unstable_UserBlocking, function() {
                k(c < .5)
            })
        }, []);
        h = b("useIntersectionObserver")(h, {
            root: function() {
                var a;
                return (a = e.current) != null ? a : null
            },
            threshold: .5
        });
        var n = function(a) {
            if (!a)
                return;
            a = e.current;
            if (!a)
                return;
            a = a.getBoundingClientRect();
            a = a.width;
            a = Math.floor((a + g) / (f + g));
            m(a - 1)
        };
        a = j.jsx(b("CometPressable.react"), babelHelpers["extends"]({}, a, {
            ref: h,
            role: "cell"
        }));
        d && (a = j.jsx(b("CometTooltip.react"), {
            align: "middle",
            onVisibilityChange: n,
            position: "below",
            tooltip: l != null ? d(l) : "",
            children: a
        }));
        return j.jsxs(c, {
            disabled: i,
            children: [" ", a, " "]
        })
    }
    function t(a) {
        var c = a.hovered
          , d = a.isOverlapped
          , e = a.pressed;
        a = a.size;
        var f = b("useCometUniqueID")();
        return j.jsxs("svg", {
            className: (i || (i = b("stylex")))(n.overflowItemSVG),
            height: a,
            viewBox: "0 0 " + a + " " + a,
            width: a,
            children: [d && j.jsxs("mask", {
                id: f,
                suppressHydrationWarning: !0,
                children: [j.jsx("circle", {
                    cx: a / 2,
                    cy: a / 2,
                    fill: "white",
                    r: a / 2
                }), j.jsx("circle", {
                    cx: -a / 2 + 4,
                    cy: a / 2,
                    fill: "black",
                    r: a / 2 + 2
                })]
            }), j.jsx("circle", babelHelpers["extends"]({
                className: i(n.overflowItemBg),
                cx: a / 2,
                cy: a / 2,
                r: a / 2,
                role: "cell",
                suppressHydrationWarning: !0
            }, d ? {
                mask: "url(#" + f + ")"
            } : null)), j.jsx("circle", babelHelpers["extends"]({
                className: i(n.overflowItemOverlay, c && n.overflowItemOverlayHovered, e && n.overflowItemOverlayPressed),
                cx: a / 2,
                cy: a / 2,
                r: a / 2,
                role: "cell",
                suppressHydrationWarning: !0
            }, d ? {
                mask: "url(#" + f + ")"
            } : null))]
        })
    }
}
), null);
__d("TetraOverlappingFacepile.react", ["React", "TetraOverlappingFacepileUnstyled.react", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        return g.jsx("div", {
            className: "discj3wi dati1w0a d1544ag0",
            children: g.jsx(b("TetraOverlappingFacepileUnstyled.react"), babelHelpers["extends"]({}, a))
        })
    }
}
), null);
__d("TetraContextRow.react", ["CometPressable.react", "CometRow.react", "CometRowItem.react", "React", "TetraFacepile.react", "TetraIcon.react", "TetraOverlappingFacepile.react", "TetraTextPairing.react", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React"), i = {
        addOn: {
            marginStart: "dhix69tm",
            paddingEnd: "hv4rvrfc",
            paddingStart: "dati1w0a"
        },
        content: {
            display: "j83agx80",
            flexDirection: "cbu4d94t",
            paddingBottom: "sj5x9vvc",
            paddingTop: "cxgpxx05"
        },
        overlayPressed: {
            backgroundColor: "sx5rzos5"
        },
        root: {
            appearance: "dwo3fsh8",
            backgroundColor: "g5ia77u1",
            borderTopWidth: "rt8b4zig",
            borderEndWidth: "n8ej3o3l",
            borderBottomWidth: "agehan2d",
            borderStartWidth: "sk4xxmp2",
            boxSizing: "rq0escxv",
            display: "q9uorilb",
            marginTop: "kvgmc6g5",
            marginEnd: "cxmmr5t8",
            marginBottom: "oygrvhab",
            marginStart: "hcukyx3x",
            paddingTop: "jb3vyjys",
            paddingEnd: "rz4wbd8a",
            paddingBottom: "qt6c0cv9",
            paddingStart: "a8nywdso",
            position: "l9j0dhe7",
            textAlign: "i1ao9s8h",
            width: "k4urcfbm"
        }
    };
    function a(a) {
        var c = a.addOn
          , d = a.bodyColor;
        d = d === void 0 ? "primary" : d;
        var e = a.children
          , f = a.disableOverlay;
        f = f === void 0 ? !1 : f;
        var j = a.icon
          , k = a.iconColor
          , l = a.level;
        l = l === void 0 ? 3 : l;
        var m = a.linkProps
          , n = a.meta
          , o = a.onPress
          , p = a.overlayRadius
          , q = a.paddingHorizontal;
        q = q === void 0 ? 16 : q;
        var r = a.pressableRef
          , s = a.testid;
        s = a.testOnly_pressed;
        s = s === void 0 ? !1 : s;
        a = a.verticalAlignment;
        a = a === void 0 ? "start" : a;
        var t;
        if (c != null) {
            if (c.type === "facepile") {
                c.type;
                var u = babelHelpers.objectWithoutPropertiesLoose(c, ["type"]);
                u = h.jsx(b("TetraFacepile.react"), babelHelpers["extends"]({}, u))
            } else {
                c.type;
                c = babelHelpers.objectWithoutPropertiesLoose(c, ["type"]);
                u = h.jsx(b("TetraOverlappingFacepile.react"), babelHelpers["extends"]({}, c))
            }
            t = h.jsx("div", {
                className: (g || (g = b("stylex")))(i.addOn),
                children: u
            })
        }
        u = h.jsxs("div", {
            className: (g || (g = b("stylex")))(i.content),
            children: [h.jsxs(b("CometRow.react"), {
                align: "start",
                paddingHorizontal: q,
                paddingTop: 0,
                verticalAlign: a,
                children: [h.jsx(b("CometRowItem.react"), {
                    children: h.jsx(b("TetraIcon.react"), {
                        color: (c = k) != null ? c : "tertiary",
                        icon: j,
                        size: 20
                    })
                }), h.jsx(b("CometRowItem.react"), {
                    expanding: !0,
                    verticalAlign: "center",
                    children: h.jsx(b("TetraTextPairing.react"), {
                        body: e,
                        bodyColor: d,
                        level: l,
                        meta: n,
                        metaColor: "secondary"
                    })
                })]
            }), t]
        });
        return o != null || m != null ? h.jsx(b("CometPressable.react"), {
            display: "inline",
            linkProps: m,
            onPress: o,
            overlayDisabled: f,
            overlayPressedStyle: i.overlayPressed,
            overlayRadius: p,
            ref: r,
            testOnly_pressed: s,
            testid: void 0,
            xstyle: i.root,
            children: u
        }) : h.jsx("div", {
            className: (g || (g = b("stylex")))(i.root),
            "data-testid": void 0,
            children: u
        })
    }
}
), null);
__d("LWICometLogger", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            this.$2 = new Set([]),
            this.$1 = a
        }
        var b = a.prototype;
        b.subscribe = function(a) {
            this.$2.add(a)
        }
        ;
        b.unsubscribe = function(a) {
            this.$2["delete"](a)
        }
        ;
        b.$4 = function(a) {
            this.$2.forEach(function(b) {
                b(a)
            })
        }
        ;
        b.log = function(a) {
            this.$3 = a,
            this.$4(a),
            this.$1(a)
        }
        ;
        b.getLastLoggedData = function() {
            return this.$3
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("LWICometTypedLoggerLite", ["BoostedComponentTypedLoggerLite", "LWICometLogger"], (function(a, b, c, d, e, f) {
    "use strict";
    f.getLogger = i;
    f.log = a;
    var g = b("BoostedComponentTypedLoggerLite").log, h;
    function i() {
        h == null && (h = new (b("LWICometLogger"))(g));
        return h
    }
    function a(a) {
        i().log(a)
    }
}
), null);
__d("AdsBrandSafetyContentFilterLevelConstants", ["keyMirror"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("keyMirror")({
        FACEBOOK_RELAXED: null,
        FACEBOOK_STANDARD: null,
        FACEBOOK_STRICT: null
    });
    f.ADS_BRAND_SAFETY_CONTENT_FILTER_FACEBOOK_LEVEL = a;
    c = b("keyMirror")({
        AN_RELAXED: null,
        AN_STANDARD: null,
        AN_STRICT: null
    });
    f.ADS_BRAND_SAFETY_CONTENT_FILTER_AN_LEVEL = c;
    d = babelHelpers["extends"]({}, a, c);
    f.ADS_BRAND_SAFETY_CONTENT_FILTER_LEVEL = d
}
), null);
__d("AdsBrandSafetyContentFilterLevel", ["AdsBrandSafetyContentFilterLevelConstants", "flipObject"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;
    d = b("AdsBrandSafetyContentFilterLevelConstants").ADS_BRAND_SAFETY_CONTENT_FILTER_AN_LEVEL;
    f = b("AdsBrandSafetyContentFilterLevelConstants").ADS_BRAND_SAFETY_CONTENT_FILTER_FACEBOOK_LEVEL;
    var h = b("AdsBrandSafetyContentFilterLevelConstants").ADS_BRAND_SAFETY_CONTENT_FILTER_LEVEL
      , i = (g = {},
    g[h.AN_RELAXED] = h.FACEBOOK_RELAXED,
    g[h.AN_STANDARD] = h.FACEBOOK_STANDARD,
    g[h.AN_STRICT] = h.FACEBOOK_STRICT,
    g);
    function a(a) {
        return i[a]
    }
    var j = b("flipObject")(i);
    function c(a) {
        return j[a]
    }
    g = [f.FACEBOOK_RELAXED, f.FACEBOOK_STANDARD, f.FACEBOOK_STRICT];
    b = [d.AN_RELAXED, d.AN_STANDARD, d.AN_STRICT];
    e.exports = {
        ADS_BRAND_SAFETY_CONTENT_FILTER_LEVEL: h,
        ADS_BRAND_SAFETY_CONTENT_FILTER_FACEBOOK_LEVELS: g,
        ADS_BRAND_SAFETY_CONTENT_FILTER_AN_LEVELS: b,
        DEFAULT_ADS_BRAND_SAFETY_CONTENT_FILTER_FACEBOOK_LEVEL: h.FACEBOOK_STANDARD,
        DEFAULT_ADS_BRAND_SAFETY_CONTENT_FILTER_AN_LEVEL: h.AN_STANDARD,
        getFBEquivalentOfANContentFilterLevel: a,
        getANEquivalentOfFBContentFilterLevel: c
    }
}
), null);
