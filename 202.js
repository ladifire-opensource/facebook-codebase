if (self.CavalryLogger) {
    CavalryLogger.start_js(["+pQRf"]);
}

__d("BusinessInboxAppFeatureConfigQuery.graphql", ["relay-runtime"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "page_id"
        }]
          , b = [{
            alias: null,
            args: [{
                kind: "Variable",
                name: "page_id",
                variableName: "page_id"
            }],
            concreteType: "BizInboxFeatureConfigWrapper",
            kind: "LinkedField",
            name: "biz_inbox_feature_config",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                concreteType: "BizInboxNuxConfig",
                kind: "LinkedField",
                name: "nux_config",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "should_show_page_inbox_welcome_dialog",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "should_show_page_inbox_unified_thread_list_instagram",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "should_show_page_inbox_unified_thread_list_nux",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "should_show_business_inbox_product_picker_nux",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "should_show_business_inbox_product_picker_igd_nux",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "should_show_page_inbox_instagram_direct_upsell",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "should_show_bizweb_inbox_upsell_nux",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "should_show_page_inbox_saved_reply_upsell_nux",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "should_show_www_page_inbox_order_details_nux",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "should_show_inbox_messenger_guest_chat",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "should_show_page_inbox_instagram_direct_nux",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "should_show_business_inbox_go_to_home_banner",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "should_show_www_return_to_send_message_nux",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "should_show_business_inbox_covid_automated_response",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "should_show_www_pages_new_away_toggle_nux",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "should_show_leads_center_segmentation_inbox_upsell_nux",
                    storageKey: null
                }],
                storageKey: null
            }],
            storageKey: null
        }];
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "BusinessInboxAppFeatureConfigQuery",
                selections: b,
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "BusinessInboxAppFeatureConfigQuery",
                selections: b
            },
            params: {
                id: "3963260113689003",
                metadata: {
                    relayPreloadable: !0
                },
                name: "BusinessInboxAppFeatureConfigQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    a.params.id != null && b("relay-runtime").PreloadableQueryRegistry.set(a.params.id, a);
    e.exports = a
}
), null);
__d("BusinessInboxHeaderViewRenderViewFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743216");
    c = b("FalcoLoggerInternal").create("business_inbox_header_view_render_view", a);
    e.exports = c
}
), null);
