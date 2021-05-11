if (self.CavalryLogger) {
    CavalryLogger.start_js(["gVWvj"]);
}

__d("useBizInboxNuxConfigQuery.graphql", ["relay-runtime"], (function(a, b, c, d, e, f) {
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
                name: "useBizInboxNuxConfigQuery",
                selections: b,
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "useBizInboxNuxConfigQuery",
                selections: b
            },
            params: {
                id: "3400886556626467",
                metadata: {
                    relayPreloadable: !0
                },
                name: "useBizInboxNuxConfigQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    a.params.id != null && b("relay-runtime").PreloadableQueryRegistry.set(a.params.id, a);
    e.exports = a
}
), null);
__d("bizInboxNuxReducer", ["FBImmer"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c) {
        a = b("FBImmer").produce(a, function(a) {
            switch (c.type) {
            case "nux_config.init":
                a.shouldNuxShowMap = c.shouldNuxShowMap;
                break;
            case "nux.view":
                a.viewingNux = c.viewingNux;
                break;
            case "nux.dismiss":
                a.shouldNuxShowMap[c.nuxName] = !1;
                break
            }
        });
        return a
    }
}
), null);
__d("BizInboxNuxDispatcherContext", ["React", "emptyFunction"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext(b("emptyFunction"));
    d = c;
    e.exports = d
}
), null);
__d("BizInboxNuxReducerContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext({
        current: new Map()
    });
    d = c;
    e.exports = d
}
), null);
__d("useBizInboxNuxReducers", ["BizInboxNuxDispatcherContext", "BizInboxNuxReducerContext", "React", "useContextRef"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function h(a) {
        return b("useContextRef")(a, b("BizInboxNuxReducerContext"))
    }
    function a(a) {
        a.forEach(h);
        return g.useContext(b("BizInboxNuxDispatcherContext"))
    }
}
), null);
__d("useBizInboxNuxConfig", ["React", "RelayHooks", "bizInboxNuxReducer", "useBizInboxNuxReducers", "useBizInboxNuxConfigQuery.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React"), i = g !== void 0 ? g : g = b("useBizInboxNuxConfigQuery.graphql");
    function a(a) {
        var c = b("RelayHooks").useLazyLoadQuery(i, {
            page_id: a
        })
          , d = c.biz_inbox_feature_config
          , e = b("useBizInboxNuxReducers")([b("bizInboxNuxReducer")]);
        h.useEffect(function() {
            var a = d == null ? void 0 : d.nux_config;
            if (a == null)
                return;
            var b = {};
            b.pages_inbox_welcome_dialog = Boolean(a == null ? void 0 : a.should_show_page_inbox_welcome_dialog);
            b.page_inbox_unified_thread_list_instagram_nux = Boolean(a == null ? void 0 : a.should_show_page_inbox_unified_thread_list_instagram);
            b.page_inbox_unified_thread_list_nux = Boolean(a == null ? void 0 : a.should_show_page_inbox_unified_thread_list_nux);
            b.business_inbox_product_picker_nux = Boolean(a == null ? void 0 : a.should_show_business_inbox_product_picker_nux);
            b.business_inbox_product_picker_igd_nux = Boolean(a == null ? void 0 : a.should_show_business_inbox_product_picker_igd_nux);
            b.page_inbox_instagram_direct_upsell = Boolean(a == null ? void 0 : a.should_show_page_inbox_instagram_direct_upsell);
            b.bizweb_inbox_upsell_nux = Boolean(a == null ? void 0 : a.should_show_bizweb_inbox_upsell_nux);
            b.page_inbox_saved_reply_upsell_nux = Boolean(a == null ? void 0 : a.should_show_page_inbox_saved_reply_upsell_nux);
            b.www_page_inbox_order_details_nux = Boolean(a == null ? void 0 : a.should_show_www_page_inbox_order_details_nux);
            b.inbox_messenger_guest_chat = Boolean(a == null ? void 0 : a.should_show_inbox_messenger_guest_chat);
            b.page_inbox_instagram_direct_nux = Boolean(a == null ? void 0 : a.should_show_page_inbox_instagram_direct_nux);
            b.www_return_to_send_message_nux = Boolean(a == null ? void 0 : a.should_show_www_return_to_send_message_nux);
            b.business_inbox_covid_automated_response = Boolean(a == null ? void 0 : a.should_show_business_inbox_covid_automated_response);
            b.business_inbox_go_to_home_banner = Boolean(a == null ? void 0 : a.should_show_business_inbox_go_to_home_banner);
            b.www_pages_new_away_toggle_nux = Boolean(a == null ? void 0 : a.should_show_www_pages_new_away_toggle_nux);
            b.leads_center_segmentation_inbox_upsell_nux = Boolean(a == null ? void 0 : a.should_show_leads_center_segmentation_inbox_upsell_nux);
            e({
                shouldNuxShowMap: b,
                type: "nux_config.init"
            });
            return
        }, [d == null ? void 0 : d.nux_config, e, a])
    }
}
), null);
__d("BizInboxNuxConfigUpdater.react", ["useBizInboxNuxConfig"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        b("useBizInboxNuxConfig")(a.pageID);
        return null
    }
}
), null);
__d("BizInboxNuxContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext(Object.freeze({}));
    d = c;
    e.exports = d
}
), null);
__d("bizInboxNuxCombinedReducer", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        return function(b, c) {
            b = b;
            var d = a.current.keys();
            for (var d = d, e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                var g;
                if (e) {
                    if (f >= d.length)
                        break;
                    g = d[f++]
                } else {
                    f = d.next();
                    if (f.done)
                        break;
                    g = f.value
                }
                g = g;
                b = g(b, c)
            }
            return b
        }
    }
}
), null);
__d("BizInboxNuxContextProvider", ["BizInboxNuxContext", "BizInboxNuxDispatcherContext", "BizInboxNuxReducerContext", "React", "bizInboxNuxCombinedReducer"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = {
            pages_inbox_welcome_dialog: !1,
            page_inbox_unified_thread_list_nux: !1,
            page_inbox_unified_thread_list_instagram_nux: !1,
            business_inbox_product_picker_nux: !1,
            business_inbox_product_picker_igd_nux: !1,
            page_inbox_instagram_direct_upsell: !1,
            bizweb_inbox_upsell_nux: !1,
            page_inbox_saved_reply_upsell_nux: !1,
            www_page_inbox_order_details_nux: !1,
            inbox_messenger_guest_chat: !1,
            page_inbox_instagram_direct_nux: !1,
            business_inbox_go_to_home_banner: !1,
            www_return_to_send_message_nux: !1,
            business_inbox_covid_automated_response: !1,
            www_pages_new_away_toggle_nux: !1,
            leads_center_segmentation_inbox_upsell_nux: !1
        };
        c = {
            shouldNuxShowMap: c,
            viewingNux: null
        };
        var d = g.useRef(new Map())
          , e = g.useMemo(function() {
            return b("bizInboxNuxCombinedReducer")(d)
        }, []);
        e = g.useReducer(e, c);
        c = e[0];
        e = e[1];
        return g.jsx(b("BizInboxNuxReducerContext").Provider, {
            value: d,
            children: g.jsx(b("BizInboxNuxContext").Provider, {
                value: c,
                children: g.jsx(b("BizInboxNuxDispatcherContext").Provider, {
                    value: e,
                    children: a.children
                })
            })
        })
    }
}
), null);
