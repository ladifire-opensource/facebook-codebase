if (self.CavalryLogger) {
    CavalryLogger.start_js(["CcPCL"]);
}

__d("ComposedEntityMutabilityToName", [], (function(a, b, c, d, e, f) {
    e.exports = {
        0: "MUTABLE",
        1: "IMMUTABLE",
        2: "SEGMENTED"
    }
}
), null);
__d("ComposedEntityTypeToName", [], (function(a, b, c, d, e, f) {
    e.exports = {
        0: "MENTION",
        1: "LINK",
        2: "IMAGE",
        3: "VIDEO",
        4: "EMOTICON",
        5: "TOKEN",
        6: "HASHTAG",
        7: "IMPLICIT_LINK",
        8: "EMBED",
        9: "EMOJI",
        10: "MATH",
        11: "HIGHLIGHT",
        12: "DELIGHT",
        13: "TEMPLATE_VARIABLE",
        14: "ASSISTANT_TYPEAHEAD"
    }
}
), null);
__d("MessagingThreadEventTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:MessagingThreadEventLoggerConfig", this.$1, b("Banzai").BASIC, a)
        }
        ;
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:MessagingThreadEventLoggerConfig", this.$1, b("Banzai").VITAL, a)
        }
        ;
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:MessagingThreadEventLoggerConfig", this.$1, {
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
        c.setActiveTimeMs = function(a) {
            this.$1.active_time_ms = a;
            return this
        }
        ;
        c.setClientEventTimeMs = function(a) {
            this.$1.client_event_time_ms = a;
            return this
        }
        ;
        c.setEvent = function(a) {
            this.$1.event = a;
            return this
        }
        ;
        c.setPageData = function(a) {
            this.$1.page_data = b("GeneratedLoggerUtils").serializeMap(a);
            return this
        }
        ;
        c.setPageID = function(a) {
            this.$1.page_id = a;
            return this
        }
        ;
        c.setScriptPath = function(a) {
            this.$1.script_path = a;
            return this
        }
        ;
        c.setSource = function(a) {
            this.$1.source = a;
            return this
        }
        ;
        c.setThreadID = function(a) {
            this.$1.thread_id = a;
            return this
        }
        ;
        return a
    }();
    c = {
        active_time_ms: !0,
        client_event_time_ms: !0,
        event: !0,
        page_data: !0,
        page_id: !0,
        script_path: !0,
        source: !0,
        thread_id: !0
    };
    e.exports = a
}
), null);
__d("MessengerBotsWebTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:MessengerBotsWebLoggerConfig", this.$1, b("Banzai").BASIC, a)
        }
        ;
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:MessengerBotsWebLoggerConfig", this.$1, b("Banzai").VITAL, a)
        }
        ;
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:MessengerBotsWebLoggerConfig", this.$1, {
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
        c.setCount = function(a) {
            this.$1.count = a;
            return this
        }
        ;
        c.setEvent = function(a) {
            this.$1.event = a;
            return this
        }
        ;
        c.setIndex = function(a) {
            this.$1.index = a;
            return this
        }
        ;
        c.setPageID = function(a) {
            this.$1.page_id = a;
            return this
        }
        ;
        c.setPayload = function(a) {
            this.$1.payload = a;
            return this
        }
        ;
        c.setQrContentType = function(a) {
            this.$1.qr_content_type = a;
            return this
        }
        ;
        c.setTitle = function(a) {
            this.$1.title = a;
            return this
        }
        ;
        c.setTitles = function(a) {
            this.$1.titles = b("GeneratedLoggerUtils").serializeVector(a);
            return this
        }
        ;
        c.setType = function(a) {
            this.$1.type = a;
            return this
        }
        ;
        c.setURL = function(a) {
            this.$1.url = a;
            return this
        }
        ;
        return a
    }();
    c = {
        count: !0,
        event: !0,
        index: !0,
        page_id: !0,
        payload: !0,
        qr_content_type: !0,
        title: !0,
        titles: !0,
        type: !0,
        url: !0
    };
    e.exports = a
}
), null);
__d("MessengerProfileLinkTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:MessengerProfileLinkLoggerConfig", this.$1, b("Banzai").BASIC, a)
        }
        ;
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:MessengerProfileLinkLoggerConfig", this.$1, b("Banzai").VITAL, a)
        }
        ;
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:MessengerProfileLinkLoggerConfig", this.$1, {
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
        c.setAction = function(a) {
            this.$1.action = a;
            return this
        }
        ;
        c.setDomain = function(a) {
            this.$1.domain = a;
            return this
        }
        ;
        c.setLinkLocation = function(a) {
            this.$1.link_location = a;
            return this
        }
        ;
        c.setTargetID = function(a) {
            this.$1.target_id = a;
            return this
        }
        ;
        return a
    }();
    c = {
        action: !0,
        domain: !0,
        link_location: !0,
        target_id: !0
    };
    e.exports = a
}
), null);
__d("WorkChatSuggestionsTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:WorkChatSuggestionsLoggerConfig", this.$1, b("Banzai").BASIC, a)
        }
        ;
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:WorkChatSuggestionsLoggerConfig", this.$1, b("Banzai").VITAL, a)
        }
        ;
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:WorkChatSuggestionsLoggerConfig", this.$1, {
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
        c.setAppID = function(a) {
            this.$1.app_id = a;
            return this
        }
        ;
        c.setMessageID = function(a) {
            this.$1.message_id = a;
            return this
        }
        ;
        c.setSuggestionType = function(a) {
            this.$1.suggestion_type = a;
            return this
        }
        ;
        c.setThreadID = function(a) {
            this.$1.thread_id = a;
            return this
        }
        ;
        return a
    }();
    c = {
        app_id: !0,
        message_id: !0,
        suggestion_type: !0,
        thread_id: !0
    };
    e.exports = a
}
), null);
__d("MessengerBusinessPersistentMenuUpdateSubscription.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "input"
        }]
          , b = [{
            alias: null,
            args: [{
                kind: "Variable",
                name: "data",
                variableName: "input"
            }],
            concreteType: "MessengerBusinessPersistentMenuResult",
            kind: "LinkedField",
            name: "messenger_business_persistent_menu_update_subscribe",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                concreteType: "MessengerNonNestedCTAShareData",
                kind: "LinkedField",
                name: "menu_items",
                plural: !0,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "action_link",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "action_type",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "id",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "is_disabled",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "is_mutable_by_server",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "logging_token",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "page_id",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "title",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "fallback_url",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "messenger_extensions",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "webview_height_ratio",
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
                name: "MessengerBusinessPersistentMenuUpdateSubscription",
                selections: b,
                type: "Subscription",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "MessengerBusinessPersistentMenuUpdateSubscription",
                selections: b
            },
            params: {
                id: "2907290672616359",
                metadata: {
                    subscriptionName: "messenger_business_persistent_menu_update_subscribe"
                },
                name: "MessengerBusinessPersistentMenuUpdateSubscription",
                operationKind: "subscription",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("MessengerBusinessPersistentMenuUpdateSubscriptionHandlerCustomUserSettingGKQuery.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "pageID"
        }]
          , b = [{
            kind: "Variable",
            name: "id",
            variableName: "pageID"
        }]
          , c = {
            kind: "InlineFragment",
            selections: [{
                alias: null,
                args: [{
                    kind: "Literal",
                    name: "gk_name",
                    value: "custom_user_settings"
                }],
                concreteType: "EntGKCheck",
                kind: "LinkedField",
                name: "gk_check",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "passes_gk",
                    storageKey: null
                }],
                storageKey: 'gk_check(gk_name:"custom_user_settings")'
            }],
            type: "Page",
            abstractKey: null
        };
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "MessengerBusinessPersistentMenuUpdateSubscriptionHandlerCustomUserSettingGKQuery",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "node",
                    plural: !1,
                    selections: [c],
                    storageKey: null
                }],
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "MessengerBusinessPersistentMenuUpdateSubscriptionHandlerCustomUserSettingGKQuery",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "node",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "__typename",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    }, c],
                    storageKey: null
                }]
            },
            params: {
                id: "2587770514615695",
                metadata: {},
                name: "MessengerBusinessPersistentMenuUpdateSubscriptionHandlerCustomUserSettingGKQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("StickersPackInTrayQuery.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "stickerInterface"
        }]
          , b = [{
            alias: null,
            args: null,
            concreteType: "Viewer",
            kind: "LinkedField",
            name: "viewer",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                concreteType: "StickerStore",
                kind: "LinkedField",
                name: "sticker_store",
                plural: !1,
                selections: [{
                    alias: null,
                    args: [{
                        kind: "Literal",
                        name: "first",
                        value: 1e4
                    }, {
                        kind: "Variable",
                        name: "interface",
                        variableName: "stickerInterface"
                    }],
                    concreteType: "PacksInTrayConnection",
                    kind: "LinkedField",
                    name: "tray_packs",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: "PacksInTrayEdge",
                        kind: "LinkedField",
                        name: "edges",
                        plural: !0,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "StickerPack",
                            kind: "LinkedField",
                            name: "node",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "id",
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
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
                name: "StickersPackInTrayQuery",
                selections: b,
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "StickersPackInTrayQuery",
                selections: b
            },
            params: {
                id: "2650439741646983",
                metadata: {},
                name: "StickersPackInTrayQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("StickersStoreDialogPackDetailQuery.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "packID"
        }
          , b = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "previewWidth"
        }
          , c = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "profileSize"
        }
          , d = [{
            kind: "Variable",
            name: "id",
            variableName: "packID"
        }]
          , e = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_ghost_pack",
            storageKey: null
        }
          , f = [{
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null
        }];
        return {
            fragment: {
                argumentDefinitions: [a, b, c],
                kind: "Fragment",
                metadata: null,
                name: "StickersStoreDialogPackDetailQuery",
                selections: [{
                    alias: null,
                    args: d,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "node",
                    plural: !1,
                    selections: [{
                        kind: "InlineFragment",
                        selections: [e, {
                            args: [{
                                kind: "Variable",
                                name: "packID",
                                variableName: "packID"
                            }, {
                                kind: "Variable",
                                name: "previewWidth",
                                variableName: "previewWidth"
                            }, {
                                kind: "Variable",
                                name: "profileSize",
                                variableName: "profileSize"
                            }],
                            kind: "FragmentSpread",
                            name: "StickersStoreDetailView_stickerPack"
                        }],
                        type: "StickerPack",
                        abstractKey: null
                    }],
                    storageKey: null
                }],
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: [a, c, b],
                kind: "Operation",
                name: "StickersStoreDialogPackDetailQuery",
                selections: [{
                    alias: null,
                    args: d,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "node",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "__typename",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    }, {
                        kind: "InlineFragment",
                        selections: [e, {
                            alias: null,
                            args: null,
                            concreteType: "Image",
                            kind: "LinkedField",
                            name: "profile_image",
                            plural: !1,
                            selections: f,
                            storageKey: null
                        }, {
                            alias: null,
                            args: [{
                                kind: "Literal",
                                name: "height",
                                value: 100
                            }],
                            concreteType: "Image",
                            kind: "LinkedField",
                            name: "preview_image",
                            plural: !1,
                            selections: f,
                            storageKey: "preview_image(height:100)"
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "name",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "artist",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "description",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "copyrights",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "can_download",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "in_sticker_tray",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "is_purchased",
                            storageKey: null
                        }],
                        type: "StickerPack",
                        abstractKey: null
                    }],
                    storageKey: null
                }]
            },
            params: {
                id: "2696647197015163",
                metadata: {},
                name: "StickersStoreDialogPackDetailQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("StickersStoreDialogStoreQuery.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "count"
        }, {
            defaultValue: null,
            kind: "LocalArgument",
            name: "size"
        }]
          , b = [{
            kind: "Variable",
            name: "first",
            variableName: "count"
        }]
          , c = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        }
          , d = [{
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null
        }]
          , e = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null
        };
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "StickersStoreDialogStoreQuery",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "Viewer",
                    kind: "LinkedField",
                    name: "viewer",
                    plural: !1,
                    selections: [{
                        args: [{
                            kind: "Variable",
                            name: "count",
                            variableName: "count"
                        }, {
                            kind: "Variable",
                            name: "size",
                            variableName: "size"
                        }],
                        kind: "FragmentSpread",
                        name: "StickersStoreView_packList"
                    }],
                    storageKey: null
                }],
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "StickersStoreDialogStoreQuery",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "Viewer",
                    kind: "LinkedField",
                    name: "viewer",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: "StickerStore",
                        kind: "LinkedField",
                        name: "sticker_store",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: b,
                            concreteType: "AvailableStickerPacksConnection",
                            kind: "LinkedField",
                            name: "available_packs",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "AvailableStickerPacksEdge",
                                kind: "LinkedField",
                                name: "edges",
                                plural: !0,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "StickerPack",
                                    kind: "LinkedField",
                                    name: "node",
                                    plural: !1,
                                    selections: [c, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "is_composer_capable",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "is_messenger_capable",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "Image",
                                        kind: "LinkedField",
                                        name: "thumbnail_image",
                                        plural: !1,
                                        selections: d,
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: [{
                                            kind: "Literal",
                                            name: "first",
                                            value: 8
                                        }],
                                        concreteType: "StickersInPackConnection",
                                        kind: "LinkedField",
                                        name: "stickers",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "StickersInPackEdge",
                                            kind: "LinkedField",
                                            name: "edges",
                                            plural: !0,
                                            selections: [{
                                                alias: null,
                                                args: null,
                                                concreteType: "Sticker",
                                                kind: "LinkedField",
                                                name: "node",
                                                plural: !1,
                                                selections: [{
                                                    alias: null,
                                                    args: [{
                                                        kind: "Variable",
                                                        name: "height",
                                                        variableName: "size"
                                                    }, {
                                                        kind: "Variable",
                                                        name: "width",
                                                        variableName: "size"
                                                    }],
                                                    concreteType: "Image",
                                                    kind: "LinkedField",
                                                    name: "image",
                                                    plural: !1,
                                                    selections: d,
                                                    storageKey: null
                                                }, c],
                                                storageKey: null
                                            }],
                                            storageKey: null
                                        }],
                                        storageKey: "stickers(first:8)"
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "name",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "artist",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "can_download",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "in_sticker_tray",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "is_purchased",
                                        storageKey: null
                                    }, e],
                                    storageKey: null
                                }, e, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "cursor",
                                    storageKey: null
                                }],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "PageInfo",
                                kind: "LinkedField",
                                name: "page_info",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "end_cursor",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "has_next_page",
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: b,
                            filters: null,
                            handle: "connection",
                            key: "StickersStoreView_available_packs",
                            kind: "LinkedHandle",
                            name: "available_packs"
                        }],
                        storageKey: null
                    }],
                    storageKey: null
                }]
            },
            params: {
                id: "2424375857610449",
                metadata: {},
                name: "StickersStoreDialogStoreQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("wrapNullableForReact", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        if (a != null)
            return a;
        else
            return void 0
    }
}
), null);
__d("MercuryAudioPlayer", ["DOM", "Event"], (function(a, b, c, d, e, f) {
    var g = 200;
    function h() {
        var a = b("DOM").create("audio")
          , c = !1;
        try {
            a.canPlayType && (a.canPlayType("video/mp4;").replace(/^no$/, "") && (c = !0))
        } finally {
            return c
        }
    }
    var i = function() {
        this.interval = null,
        this.arbiterInstance = null,
        this.audio = b("DOM").create("audio"),
        b("Event").listen(this.audio, "playing", function() {
            this.informAttachment("playing", this.audio.currentTime),
            this.interval = window.setInterval(function() {
                this.informAttachment("playing", this.audio.currentTime)
            }
            .bind(this), g)
        }
        .bind(this)),
        b("Event").listen(this.audio, "ended", function() {
            window.clearInterval(this.interval),
            this.informAttachment("finished")
        }
        .bind(this))
    };
    Object.assign(i.prototype, {
        setAudio: function(a, b) {
            this.audio.setAttribute("src", a),
            this.arbiterInstance = b
        },
        informAttachment: function(a, b) {
            this.arbiterInstance && this.arbiterInstance.inform(a, b)
        },
        play: function() {
            this.audio.play(),
            this.informAttachment("played")
        },
        resume: function() {
            this.audio.play(),
            this.informAttachment("played")
        },
        pause: function() {
            this.audio.pause(),
            window.clearInterval(this.interval),
            this.informAttachment("paused")
        },
        getType: function() {
            return "html5"
        }
    });
    function j() {
        return h() ? new i() : !1
    }
    var k = null
      , l = null
      , m = 0;
    function a(a, b) {
        this.src = a;
        this.arbiterInstance = b;
        this.audio_id = ++m;
        k !== null || (k = j());
        if (!k)
            return !1
    }
    Object.assign(a.prototype, {
        getType: function() {
            if (!k)
                return !1;
            else
                return k.getType()
        },
        play: function(a) {
            a && l == this.audio_id ? k.resume() : (this.pause(),
            l = this.audio_id,
            k.setAudio(this.src, this.arbiterInstance),
            k.play())
        },
        pause: function() {
            k.pause()
        }
    });
    e.exports = a
}
), null);
__d("MercuryAttachmentAudioClip.react", ["cssVar", "cx", "fbt", "Arbiter", "ArbiterMixin", "CurrentUser", "LeftRight.react", "Link.react", "MercuryAudioPlayer", "MercuryShareAttachmentRenderLocations", "React", "SubscriptionsHandler", "createReactClass_DEPRECATED", "joinClasses", "prop-types", "shield"], (function(a, b, c, d, e, f, g, h, i) {
    var j = b("React")
      , k = "MercuryAttachmentAudioClip/play"
      , l = "progress-bar";
    c = b("createReactClass_DEPRECATED")({
        displayName: "AudioClip",
        mixins: [b("ArbiterMixin")],
        propTypes: {
            customColor: (a = b("prop-types")).string,
            duration: a.number,
            isChat: a.bool,
            isFromViewer: a.bool,
            location: a.oneOf(b("MercuryShareAttachmentRenderLocations").getValues()),
            onAttachmentLoad: a.func,
            rootClassName: a.string,
            showHelp: a.bool,
            src: a.string.isRequired,
            width: a.number
        },
        getInitialState: function() {
            this.logged = !1;
            return {
                time: 0,
                playing: !1,
                started: !1,
                duration: this.props.duration,
                audioPlayer: new (b("MercuryAudioPlayer"))(this.props.src,this)
            }
        },
        componentDidMount: function() {
            this.props.onAttachmentLoad && this.props.onAttachmentLoad(),
            this._subscriptionsHandler = new (b("SubscriptionsHandler"))(),
            this._subscriptionsHandler.addSubscriptions(this.subscribe("playing", this.updateTime), this.subscribe("played", b("shield")(this.setState, this, {
                playing: !0,
                started: !0
            })), this.subscribe("paused", b("shield")(this.setState, this, {
                playing: !1
            })), this.subscribe("finished", b("shield")(this.setState, this, {
                playing: !1,
                started: !1,
                time: this.props.duration
            })), b("Arbiter").subscribe(k, function(a, b) {
                this.props.src != b && this.setState({
                    time: 0
                })
            }
            .bind(this)))
        },
        componentWillUnmount: function() {
            this._subscriptionsHandler && this._subscriptionsHandler.release()
        },
        updateTime: function(a, b) {
            this.setState({
                time: b
            })
        },
        play: function() {
            this.state.playing ? this.state.audioPlayer.pause() : (this.state.audioPlayer.play(this.state.started),
            b("Arbiter").inform(k, this.props.src),
            this.logged || (this.logged = !0))
        },
        _formatSeconds: function(a) {
            if (a) {
                a = Math.round(a);
                var b = a % 60;
                b < 10 && (b = "0" + b);
                a = Math.floor(a / 60);
                return a + ":" + b
            } else
                return null
        },
        _renderPlayer: function(a, c, d) {
            var e = this.props.isFromViewer
              , f = this.props.isChat
              , g = b("CurrentUser").isWorkUser()
              , h = d === l
              , k = f && e && !h
              , m = this.props.location === b("MercuryShareAttachmentRenderLocations").MESSENGER;
            g = g ? "#373e4c" : "#4080ff";
            g = d || g;
            a = {
                width: a
            };
            k && (a.backgroundColor = g);
            k = d && d !== l && !f ? {
                color: d
            } : {};
            g = {};
            h && (g["aria-hidden"] = !0);
            return j.jsxs(b("Link.react"), babelHelpers["extends"]({
                "aria-label": i._("Tin nh\u1eafn tho\u1ea1i"),
                className: "_1miz _2e-1" + (m ? "" : " _3_om") + (e && f ? " _3e5f" : ""),
                role: "button",
                style: a,
                onClick: this.play
            }, g, {
                children: [j.jsx("span", {
                    className: "_1mi- _2e-2",
                    children: j.jsx("i", {
                        className: "_1mi_ _2e-3"
                    })
                }), j.jsx("span", {
                    style: k,
                    className: "_1mj0 _2e-4 _3oh-",
                    children: c
                }), j.jsx("div", {
                    className: "_1mj1 _2e-5"
                })]
            }))
        },
        render: function() {
            var a = this.state.time
              , c = this.state.playing
              , d = this._formatSeconds(this.state.duration)
              , e = this.props.location === b("MercuryShareAttachmentRenderLocations").MESSENGER
              , f = this.props.width || 170;
            if (e) {
                var g = this.props.duration;
                g > 10 ? f = 240 : g > 5 ? f = 200 : g > 2 ? f = 160 : f = 120
            }
            g = null;
            var h = Math.ceil(a * (f + 2) / this.state.duration);
            e && (h = Math.ceil(a * (f + 24) / this.state.duration));
            if (this.state.audioPlayer && this.state.audioPlayer.getType()) {
                var k = this._renderPlayer(f, d, this.props.customColor);
                f = this._renderPlayer(f, d, l);
                c = "_1mj2 _2e-6" + (c && a !== 0 ? " _1mj3" : "") + (c && a === 0 ? " _4g4x" : "");
                g = j.jsxs("div", {
                    className: c,
                    children: [k, j.jsx("div", {
                        className: "_1mj4 _2e-7",
                        style: {
                            width: h
                        },
                        children: f
                    })]
                })
            } else
                g = j.jsx("div", {
                    className: "_1mj2",
                    children: j.jsx("div", {
                        className: "_1miz",
                        children: j.jsxs(b("LeftRight.react"), {
                            children: [j.jsxs("a", {
                                className: "_1mj5",
                                href: this.props.src,
                                children: [j.jsx("span", {
                                    className: "_3qi6",
                                    children: j.jsx("i", {
                                        className: "_1mj6"
                                    })
                                }), j.jsx("span", {
                                    className: "_1mj7",
                                    children: i._("Tin nh\u1eafn tho\u1ea1i")
                                }), j.jsx("span", {
                                    className: "_1mj8",
                                    children: d
                                })]
                            }), j.jsx("a", {
                                href: this.props.src,
                                className: "_1mj9",
                                children: j.jsx("i", {
                                    className: "_1mja"
                                })
                            })]
                        })
                    })
                });
            return j.jsx("div", {
                className: b("joinClasses")("_1mjb" + (e ? " _454y" : ""), this.props.rootClassName),
                children: g
            })
        }
    });
    e.exports = c
}
), null);
__d("PhotoResizeMath", [], (function(a, b, c, d, e, f) {
    a = {
        getScaledPhotoDimensions: function(a, b, c, d, e) {
            var f = a / b
              , g = c / d;
            if (c && d && e === "stretch")
                return {
                    width: c,
                    height: d
                };
            if (!c && d || e === "contain" !== f >= g)
                return {
                    width: d * f,
                    height: d
                };
            return c ? {
                width: c,
                height: c / f
            } : {
                width: a,
                height: b
            }
        }
    };
    e.exports = a
}
), null);
__d("PixelzFocus", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {
        search: function(a, b) {
            var c = 0
              , d = a.length - 1;
            while (c <= d) {
                var e = c + Math.floor((d - c) / 2)
                  , f = a[e];
                if (f > b)
                    d = e - 1;
                else if (f < b)
                    c = e + 1;
                else
                    return e
            }
            return Math.min(c, d)
        },
        forceSpecificPoint: function(a, b, c) {
            var d = 1e-9;
            d = g.search(a, b - c - d) + 1;
            b = g.search(a, b + c);
            return a.slice(d, b + 1)
        },
        findBiggestSets: function(a, b) {
            var c = []
              , d = -1;
            for (var e = 0; e < a.length; ++e) {
                var f = a[e]
                  , h = e;
                f = g.search(a, f + b);
                var i = f - h;
                i > d && (c = []);
                i >= d && (d = i,
                c.push({
                    low: h,
                    high: f
                }))
            }
            return c
        },
        getBestSet: function(a, b, c) {
            var d = -1
              , e = null;
            for (var f = 0; f < b.length; ++f) {
                var g = b[f]
                  , h = a[g.low]
                  , i = a[g.high]
                  , j = h + (i - h) / 2;
                h = Math.min(h - (j - c), j + c - i);
                h > d && (d = h,
                e = g)
            }
            return e
        },
        getFocusFromSet: function(a, b) {
            var c = a[b.low];
            a = a[b.high];
            return c + (a - c) / 2
        },
        clampFocus: function(a, b) {
            var c = b / 2;
            b = 1 - b / 2;
            if (a < c)
                return c;
            return a > b ? b : a
        },
        convertFromCenterToCSS: function(a, b) {
            return Math.abs(1 - b) < 1e-5 ? 0 : (a - b / 2) / (1 - b)
        },
        convertFromCSSToCenter: function(a, b) {
            return a * (1 - b) + b / 2
        },
        getVisible: function(a, b) {
            return a < b ? a / b : b / a
        },
        getHidden: function(a, b) {
            return 1 - g.getVisible(a, b)
        },
        focusHorizontally: function(a, b) {
            return a < b
        },
        convertVectorFromCenterToCSS: function(a, b, c) {
            var d = g.focusHorizontally(b, c), e;
            d ? e = a.x / 100 : e = a.x / 100;
            a = g.convertFromCenterToCSS(e, g.getVisible(b, c));
            if (d)
                return {
                    x: a,
                    y: 0
                };
            else
                return {
                    x: 0,
                    y: a
                }
        },
        getCropRect: function(a, b, c) {
            var d = g.focusHorizontally(b, c);
            b = g.getVisible(b, c);
            if (d) {
                c = (1 - b) * a.x;
                return {
                    left: c,
                    top: 0,
                    width: b,
                    height: 1
                }
            } else {
                d = (1 - b) * a.y;
                return {
                    left: 0,
                    top: d,
                    width: 1,
                    height: b
                }
            }
        }
    };
    e.exports = g
}
), null);
__d("loadImage", ["Promise"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, b) {
        var c = new Image();
        c.onload = function() {
            b(c.width, c.height, c)
        }
        ;
        c.src = a
    }
    a.loadImagePromise = function(a) {
        return new (b("Promise"))(function(b, c) {
            var d = new Image();
            d.onerror = c;
            d.onload = function() {
                return b(d)
            }
            ;
            d.src = a
        }
        )
    }
}
), null);
__d("Pixelz.react", ["cx", "PhotoResizeMath", "PixelzFocus", "React", "createReactClass_DEPRECATED", "joinClasses", "loadImage", "prop-types"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    c = b("createReactClass_DEPRECATED")({
        displayName: "Pixelz",
        propTypes: {
            width: (a = b("prop-types")).number,
            height: a.number,
            resizeMode: a.oneOf(["contain", "cover", "stretch"]),
            alt: a.string,
            letterbox: a.bool,
            borderRadius: a.number,
            insetBorderColor: a.string,
            animated: a.bool,
            upscale: a.bool,
            cropRect: function(a, b, c) {
                a = a[b];
                b = "Invalid prop `" + b + "` supplied to `" + c + "`, expected a rectangle with values normalized between 0 and 1.";
                if (a.left < 0 || a.top < 0 || a.width < 0 || a.height < 0 || a.left + a.width > 1 || a.top + a.height > 1)
                    return new Error(b)
            },
            focus: function(a, b, c) {
                a = a[b];
                b = "Invalid prop `" + b + "` supplied to `" + c + "`, expected either a {x, y, type} vector where type is `css` or `center` or an array of {x, y} vectors. All the vectors have with values normalized between 0 and 1.";
                if (Array.isArray(a)) {
                    for (var c = 0; c < a.length; ++c)
                        if (!(a[c].x >= 0 && a[c].x <= 1) || !(a[c].y >= 0 && a[c].y <= 1))
                            return new Error(b)
                } else {
                    a.type || (a.type = "css");
                    if (!(a.x >= 0 && a.x <= 1) || !(a.y >= 0 && a.y <= 1) || !["center", "css"].includes(a.type))
                        return new Error(b)
                }
            }
        },
        getDefaultProps: function() {
            return {
                resizeMode: "cover",
                alt: "",
                letterbox: !0,
                upscale: !0,
                cropRect: {
                    width: 1,
                    height: 1,
                    top: 0,
                    left: 0
                },
                focus: {
                    x: .5,
                    y: .5,
                    type: "css"
                }
            }
        },
        getInitialState: function() {
            return {
                srcDimensions: {}
            }
        },
        getSrcDimensions: function() {
            var a = this.props.src
              , c = this.state.srcDimensions[a];
            if (c)
                return c;
            b("loadImage")(a, function(b, c) {
                var d = {};
                d[a] = {
                    width: b,
                    height: c
                };
                this.isMounted() && this.setState({
                    srcDimensions: d
                })
            }
            .bind(this));
            return null
        },
        getCropSrcDimensions: function() {
            var a = this.getSrcDimensions();
            return {
                width: a.width * this.props.cropRect.width,
                height: a.height * this.props.cropRect.height
            }
        },
        getUpscaleCropDimensions: function() {
            var a = this.getCropSrcDimensions();
            return b("PhotoResizeMath").getScaledPhotoDimensions(a.width, a.height, this.props.width, this.props.height, this.props.resizeMode)
        },
        getCropDimensions: function() {
            var a = this.getUpscaleCropDimensions()
              , b = this.getCropSrcDimensions();
            return !this.props.upscale ? {
                width: Math.min(a.width, b.width),
                height: Math.min(a.height, b.height)
            } : a
        },
        getCropAspectRatio: function() {
            var a = this.getCropDimensions();
            return a.width / a.height
        },
        getContainerDimensions: function() {
            return this.props.letterbox && this.props.width && this.props.height ? {
                width: this.props.width,
                height: this.props.height
            } : this.getCropDimensions()
        },
        getContainerAspectRatio: function() {
            var a = this.getContainerDimensions();
            return a.width / a.height
        },
        getContainerPosition: function() {
            return {
                left: 0,
                top: 0
            }
        },
        getFocus: function() {
            var a = this.props.focus;
            if (!Array.isArray(a) && a.type === "css")
                return {
                    x: a.x,
                    y: a.y
                };
            var c = this.getContainerAspectRatio()
              , d = this.getCropAspectRatio()
              , e = b("PixelzFocus").getVisible(c, d)
              , f = b("PixelzFocus").focusHorizontally(c, d);
            if (!Array.isArray(a))
                c = b("PixelzFocus").convertFromCenterToCSS(f ? a.x : a.y, e);
            else {
                d = a.map(function(a) {
                    return f ? a.x : a.y
                });
                d.sort();
                a = b("PixelzFocus").findBiggestSets(d, e);
                a = b("PixelzFocus").getBestSet(d, a, e);
                c = b("PixelzFocus").getFocusFromSet(d, a)
            }
            return {
                x: f ? c : .5,
                y: f ? .5 : c
            }
        },
        getCropPosition: function() {
            var a = this.getCropDimensions()
              , b = this.getContainerDimensions()
              , c = this.getFocus();
            return {
                left: c.x * (b.width - a.width),
                top: c.y * (b.height - a.height)
            }
        },
        getScaleDimensions: function() {
            var a = this.getCropDimensions();
            return {
                width: a.width / this.props.cropRect.width,
                height: a.height / this.props.cropRect.height
            }
        },
        getScalePosition: function() {
            var a = this.getScaleDimensions();
            return {
                left: -a.width * this.props.cropRect.left,
                top: -a.height * this.props.cropRect.top
            }
        },
        getClipCropRectangle: function() {
            var a = this.getContainerDimensions()
              , b = this.getCropDimensions()
              , c = this.getContainerPosition()
              , d = this.getCropPosition()
              , e = Math.max(c.left, d.left)
              , f = Math.max(c.top, d.top)
              , g = Math.min(c.top + a.height, d.top + b.height);
            c = Math.min(c.left + a.width, d.left + b.width);
            return {
                left: e,
                top: f,
                width: c - e,
                height: g - f
            }
        },
        getClipCropPosition: function() {
            var a = this.getClipCropRectangle();
            return {
                left: a.left,
                top: a.top
            }
        },
        getClipCropDimensions: function() {
            var a = this.getClipCropRectangle();
            return {
                width: a.width,
                height: a.height
            }
        },
        getClipScalePosition: function() {
            var a = this.getScalePosition()
              , b = this.getClipCropPosition()
              , c = this.getCropPosition();
            return {
                left: a.left + (c.left - b.left),
                top: a.top + (c.top - b.top)
            }
        },
        getClipScaleDimensions: function() {
            return this.getScaleDimensions()
        },
        areDimensionsEqual: function(a, b) {
            return a.width === b.width && a.height === b.height
        },
        shouldAddAllNodesAndStyles: function() {
            return this.props.animated
        },
        hasCrop: function() {
            if (this.shouldAddAllNodesAndStyles())
                return !0;
            var a = this.getContainerDimensions()
              , b = this.getClipCropDimensions()
              , c = this.getClipScaleDimensions();
            return this.areDimensionsEqual(a, b) || this.areDimensionsEqual(b, c) ? !1 : !0
        },
        hasContainer: function() {
            if (this.shouldAddAllNodesAndStyles() || this.hasInsetBorder())
                return !0;
            var a = this.getContainerDimensions()
              , b = this.getClipScaleDimensions();
            return this.areDimensionsEqual(a, b) ? !1 : !0
        },
        hasInsetBorder: function() {
            return this.shouldAddAllNodesAndStyles() || this.props.insetBorderColor
        },
        applyPositionStyle: function(a, b) {
            (this.shouldAddAllNodesAndStyles() || b.left) && (a.left = Math.round(b.left)),
            (this.shouldAddAllNodesAndStyles() || b.top) && (a.top = Math.round(b.top))
        },
        applyDimensionsStyle: function(a, b) {
            a.width = Math.round(b.width),
            a.height = Math.round(b.height)
        },
        applyBorderRadiusStyle: function(a) {
            (this.shouldAddAllNodesAndStyles() || this.props.borderRadius) && (a.borderRadius = this.props.borderRadius || 0)
        },
        getScaleStyle: function() {
            var a = {}
              , b = this.getClipCropDimensions()
              , c = this.getClipScaleDimensions();
            this.shouldAddAllNodesAndStyles() || !this.areDimensionsEqual(b, c) ? this.applyPositionStyle(a, this.getClipScalePosition()) : this.applyPositionStyle(a, this.getClipCropPosition());
            this.applyDimensionsStyle(a, this.getClipScaleDimensions());
            this.applyBorderRadiusStyle(a);
            return a
        },
        getCropStyle: function() {
            var a = {};
            this.applyPositionStyle(a, this.getClipCropPosition());
            this.applyDimensionsStyle(a, this.getClipCropDimensions());
            this.applyBorderRadiusStyle(a);
            return a
        },
        getInsetBorderStyle: function() {
            var a = {
                borderColor: this.props.insetBorderColor || "transparent"
            };
            this.applyPositionStyle(a, this.getClipCropPosition());
            this.applyDimensionsStyle(a, this.getClipCropDimensions());
            this.applyBorderRadiusStyle(a);
            return a
        },
        getContainerStyle: function() {
            var a = {};
            this.applyDimensionsStyle(a, this.getContainerDimensions());
            this.applyBorderRadiusStyle(a);
            return a
        },
        getScale: function() {
            var a = this.getScaleStyle()
              , c = a.width
              , d = a.height;
            a = babelHelpers["extends"]({}, a);
            delete a.width;
            delete a.height;
            return h.jsx("img", babelHelpers["extends"]({}, this.props, {
                alt: this.props.alt,
                className: b("joinClasses")(this.props.className, "_56wb" + (this.shouldAddAllNodesAndStyles() ? " _56t5" : "")),
                src: this.props.src,
                style: babelHelpers["extends"]({}, this.props.style || {}, a),
                width: c,
                height: d
            }))
        },
        getCrop: function() {
            var a = this.getScale();
            return !this.hasCrop() ? a : h.jsx("div", {
                className: "_56ma" + (this.shouldAddAllNodesAndStyles() ? " _56t5" : ""),
                style: this.getCropStyle(),
                children: a
            })
        },
        getInsetBorder: function() {
            return !this.hasInsetBorder() ? null : h.jsx("div", {
                className: "_56lv" + (this.shouldAddAllNodesAndStyles() ? " _56t5" : ""),
                style: this.getInsetBorderStyle()
            })
        },
        getContainer: function() {
            var a = this.getCrop();
            if (!this.hasContainer())
                return a;
            var b = this.getInsetBorder();
            return h.jsxs("div", {
                className: "_56jj" + (this.shouldAddAllNodesAndStyles() ? " _56t5" : ""),
                "data-skipchecker": null,
                style: this.getContainerStyle(),
                children: [a, b]
            })
        },
        render: function() {
            var a = this.getSrcDimensions();
            return !a ? h.jsx("span", {
                "data-skipchecker": null
            }) : this.getContainer()
        }
    });
    e.exports = c
}
), null);
__d("FBRTCCallabilityActions", ["keyMirror"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("keyMirror")({
        CALLABILITY_FETCHED: null,
        CALLABILITY_FETCH_ERROR: null
    });
    a = function() {
        function a(a) {
            this.$1 = a
        }
        var b = a.prototype;
        b.callabilityFetched = function(a, b) {
            this.$1.dispatch({
                type: g.CALLABILITY_FETCHED,
                userID: a,
                callability: b
            })
        }
        ;
        b.callabilityFetchError = function(a) {
            this.$1.dispatch({
                type: g.CALLABILITY_FETCH_ERROR,
                userID: a
            })
        }
        ;
        return a
    }();
    e.exports = a;
    a.Types = g
}
), null);
__d("XRTCCallabilityController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/rtc/callability/", {
        user_id: {
            type: "FBID",
            required: !0
        }
    })
}
), null);
__d("FBRTCCallabilityDataManager", ["AsyncRequest", "FBRTCCallabilityActions", "TimeSlice", "XRTCCallabilityController"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            this.$1 = new (b("FBRTCCallabilityActions"))(a)
        }
        var c = a.prototype;
        c.fetchCallability = function(a) {
            var c = this;
            b("TimeSlice").guard(function() {
                var d = b("XRTCCallabilityController").getURIBuilder().setFBID("user_id", a).getURI()
                  , e = c.$2.bind(c, a)
                  , f = c.$3.bind(c, a);
                new (b("AsyncRequest"))().setURI(d).setHandler(e).setErrorHandler(f).setAllowCrossPageTransition(!0).send()
            }, "Chat Tab RTC Callability Check", {
                propagationType: b("TimeSlice").PropagationType.ORPHAN
            })()
        }
        ;
        c.$2 = function(a, b) {
            this.$1.callabilityFetched(a, b.payload)
        }
        ;
        c.$3 = function(a, b) {
            this.$1.callabilityFetchError(a)
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("RTCCallabilityStore", ["fbt", "Cache", "FBRTCCallabilityActions", "FBRTCCallabilityDataManager", "FluxStore", "MercuryThreadInfo"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = .5
      , i = 5;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(c) {
            var d;
            d = a.call(this, c) || this;
            d.$RTCCallabilityStore2 = new (b("FBRTCCallabilityDataManager"))(c);
            d.$RTCCallabilityStore1 = new (b("Cache"))();
            return d
        }
        var d = c.prototype;
        d.__onDispatch = function(a) {
            var c = a.type;
            switch (c) {
            case b("FBRTCCallabilityActions").Types.CALLABILITY_FETCHED:
                c = a.userID;
                var d = a.callability;
                this.$RTCCallabilityStore1.set(c, {
                    callable: d.is_callable,
                    isBlocked: d.is_blocked
                }, null, d.is_callable ? i : h);
                this.__emitChange();
                break;
            case b("FBRTCCallabilityActions").Types.CALLABILITY_FETCH_ERROR:
                this.$RTCCallabilityStore1.set(a.userID, {
                    callable: !1,
                    isBlocked: !1
                }, null, h);
                this.__emitChange();
                break
            }
        }
        ;
        d.isCallable = function(a, b) {
            b = b ? b.message_count > 0 && b.folder === "inbox" : !1;
            a = this.fetchUserFromCache(a);
            return a && a.callable || b
        }
        ;
        d.isBlocked = function(a, c) {
            c = c ? b("MercuryThreadInfo").canReply(c) : !0;
            a = this.fetchUserFromCache(a);
            return a && a.isBlocked || !c
        }
        ;
        d.fetchUserFromCache = function(a) {
            this.$RTCCallabilityStore1.has(a) || (this.$RTCCallabilityStore2.fetchCallability(a),
            this.$RTCCallabilityStore1.set(a, {
                callable: !1,
                isBlocked: !1
            }, null, h));
            return this.$RTCCallabilityStore1.get(a)
        }
        ;
        d.callButtonTooltip = function(a, b, c, d) {
            c === void 0 && (c = !0);
            return this.isBlocked(a, d) || c || this.isCallable(a) ? g._("B\u1eaft \u0111\u1ea7u chat video v\u1edbi {shortname}", [g._param("shortname", b)]) : g._("{shortname} hi\u1ec7n kh\u00f4ng th\u1ec3 th\u1ef1c hi\u1ec7n cu\u1ed9c g\u1ecdi video", [g._param("shortname", b)])
        }
        ;
        d.voiceCallButtonTooltip = function(a, b, c, d) {
            c === void 0 && (c = !0);
            return this.isBlocked(a, d) || c || this.isCallable(a) ? g._("B\u1eaft \u0111\u1ea7u cu\u1ed9c g\u1ecdi tho\u1ea1i v\u1edbi {shortname}", [g._param("shortname", b)]) : g._("{shortname} hi\u1ec7n kh\u00f4ng th\u1ec3 th\u1ef1c hi\u1ec7n cu\u1ed9c g\u1ecdi tho\u1ea1i", [g._param("shortname", b)])
        }
        ;
        return c
    }(b("FluxStore"));
    e.exports = a;
    a.__moduleID = e.id
}
), null);
__d("RepliedToMessageContent.react", ["ix", "cx", "fbt", "Bootloader", "CurrentUser", "FantaTabActions", "FBLogger", "Image.react", "JSResource", "LineClamp.react", "MessengerMathUtils", "MessengerTextWithEntities.react", "React", "RepliedToMessageStatusForGraphQL", "asset", "lazyLoadComponent"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$4 = function() {
                d.$5();
                if (d.props.repliedToMessageData.status !== b("RepliedToMessageStatusForGraphQL").VALID)
                    return;
                var a = d.props.threadID;
                d.props.isMessengerUI ? d.props.scrollToRepliedMessage && d.props.scrollToRepliedMessage(d.props.repliedToMessageData.message.message_id) : a !== null && a !== void 0 && b("FantaTabActions").jumpToMessage(a, d.props.repliedToMessageData.message.message_id)
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props
              , c = a.isFromViewer
              , d = a.isMessengerUI;
            a = a.repliedToMessageData;
            var e = a.status === b("RepliedToMessageStatusForGraphQL").VALID;
            if (e && !a.message) {
                b("FBLogger")("message_replies").mustfix("invalid message reply: Status is Valid but replied_to_message is missing");
                return null
            }
            e = e ? a.message.body : this.$1(a);
            var f = null;
            !e && a.message.attachments && (f = this.$2(a.message.attachments, c, d),
            e = this.$3(a.message.attachments));
            c = null;
            a = e != null && b("MessengerMathUtils").isMathBlock(e);
            if (a && e != null) {
                a = b("MessengerMathUtils").getMathBlockInner(e);
                var g = b("lazyLoadComponent")(b("JSResource")("MessengerMath.react").__setRef("RepliedToMessageContent.react"));
                c = j.jsx(j.Suspense, {
                    fallback: j.jsx("div", {
                        children: e
                    }),
                    children: j.jsx(g, {
                        body: a,
                        fallbackBody: e,
                        stripDelimiters: !0,
                        className: "_1e4d"
                    })
                })
            } else
                c = j.jsx(b("MessengerTextWithEntities.react"), {
                    renderEmoji: !0,
                    renderEmoticons: !0,
                    text: e
                });
            g = j.jsx(b("LineClamp.react"), {
                className: "_4k7e",
                lines: 2,
                fitHeightToShorterText: !0,
                children: c
            });
            if (!this.props.replyInOneBubble)
                return j.jsxs("div", {
                    className: (!!f && d ? "_6e7n" : "") + (!!f && !d ? " _6e6m" : ""),
                    children: [g, f]
                });
            a = j.jsxs("blockquote", {
                className: "_pye" + (!!f && d ? " _6e7n" : "") + (!!f && !d ? " _6e6m" : ""),
                children: [j.jsx("div", {
                    className: "_pyf"
                }), g, f]
            });
            return !this.props.isLinkified ? a : j.jsx("a", {
                className: "_6e6n",
                href: "#",
                onClick: this.$4,
                children: a
            })
        }
        ;
        d.$1 = function(a) {
            switch (a.status) {
            case b("RepliedToMessageStatusForGraphQL").DELETED:
                return b("CurrentUser").isWorkUser() ? i._("Tin nh\u1eafn n\u00e0y \u0111\u00e3 b\u1ecb x\u00f3a").toString() : i._("\u0110\u00e3 g\u1ee1 tin nh\u1eafn").toString();
            case b("RepliedToMessageStatusForGraphQL").TEMPORARILY_UNAVAILABLE:
            default:
                return i._("Tin nh\u1eafn t\u1ea1m th\u1eddi kh\u00f4ng hi\u1ec3n th\u1ecb").toString()
            }
        }
        ;
        d.$2 = function(a, c, d) {
            d = d ? "_6e6o" : "_6e6y";
            if (a.length === 1 && a[0].attach_type)
                switch (a[0].attach_type) {
                case "photo":
                case "sticker":
                case "third_party_sticker":
                case "animated_image":
                    return !this.props.replyInOneBubble ? j.jsx(b("Image.react"), {
                        className: d,
                        src: g("602383")
                    }) : c === !0 ? j.jsx(b("Image.react"), {
                        className: d,
                        src: g("544881")
                    }) : j.jsx(b("Image.react"), {
                        className: d,
                        src: g("596859")
                    });
                case "video":
                    return !this.props.replyInOneBubble ? j.jsx(b("Image.react"), {
                        className: d,
                        src: g("602399")
                    }) : c === !0 ? j.jsx(b("Image.react"), {
                        className: d,
                        src: g("504242")
                    }) : j.jsx(b("Image.react"), {
                        className: d,
                        src: g("596875")
                    });
                default:
                    return !this.props.replyInOneBubble ? j.jsx(b("Image.react"), {
                        className: d,
                        src: g("562396")
                    }) : c === !0 ? j.jsx(b("Image.react"), {
                        className: d,
                        src: g("555222")
                    }) : j.jsx(b("Image.react"), {
                        className: d,
                        src: g("596853")
                    })
                }
            else if (a.length > 1)
                return !this.props.replyInOneBubble ? j.jsx(b("Image.react"), {
                    className: d,
                    src: g("602390")
                }) : c === !0 ? j.jsx(b("Image.react"), {
                    className: d,
                    src: g("504171")
                }) : j.jsx(b("Image.react"), {
                    className: d,
                    src: g("596866")
                });
            else
                return null
        }
        ;
        d.$3 = function(a) {
            var b = a.length;
            if (b === 1 && a[0].attach_type)
                switch (a[0].attach_type) {
                case "photo":
                    return i._("\u1ea2nh").toString();
                case "video":
                    return i._("Video").toString();
                case "sticker":
                case "third_party_sticker":
                    return i._("Nh\u00e3n d\u00e1n").toString();
                case "animated_image":
                    return i._("T\u1ec7p GIF").toString();
                default:
                    return i._("T\u1ec7p \u0111\u00ednh k\u00e8m").toString()
                }
            else if (b > 1)
                return i._({
                    "*": "{number of attachments} t\u1ec7p \u0111\u00ednh k\u00e8m"
                }, [i._param("number of attachments", b), i._plural(b)]).toString();
            else
                return null
        }
        ;
        d.$5 = function() {
            b("Bootloader").loadModules(["MessageReplyTypedLogger", "MessageReplyEvent"], function(a, c) {
                a = new a();
                a.setEvent(c.SCROLL_TO_ORIGINAL_MESSAGE).setIsWorkplace(b("CurrentUser").isWorkUser()).log()
            }, "RepliedToMessageContent.react")
        }
        ;
        return c
    }(j.Component);
    e.exports = a
}
), null);
__d("ChatFlyoutPlaceholder.react", ["React", "XUISpinner.react"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React")
      , h = {
        padding: "30px",
        textAlign: "center"
    };
    function a() {
        return g.jsx("div", {
            style: h,
            children: g.jsx(b("XUISpinner.react"), {
                size: "large"
            })
        })
    }
}
), null);
__d("MessengerSharedPhotoReact.bs", ["cx", "fbt", "bs_curry", "React", "Link.react", "CssBackgroundImage.react"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React")
      , j = {
        height: "100%"
    };
    function a(a) {
        var c = a.className
          , d = a.fbid
          , e = a.onClick
          , f = a.uri;
        a = a.isSpherical;
        var g = function(a) {
            a.preventDefault();
            return b("bs_curry")._1(e, d)
        }
          , k = h._("\u1ea3nh");
        if (f !== void 0) {
            f = f;
            a = a ? i.jsx("div", {
                className: "_3603 _64ks"
            }) : null;
            return i.jsx(b("Link.react"), {
                "aria-label": k,
                className: c,
                href: f,
                onClick: g,
                children: i.jsx(b("CssBackgroundImage.react"), {
                    className: c,
                    imageURI: f,
                    backgroundPosition: "center",
                    style: j,
                    children: a
                })
            })
        } else
            return i.jsx(b("Link.react"), {
                "aria-label": k,
                className: c,
                onClick: g,
                role: "button"
            })
    }
    c = a;
    f.style100pct = j;
    f.make = c
}
), null);
__d("MessengerSharedPhotoReact.re", ["MessengerSharedPhotoReact.bs"], (function(a, b, c, d, e, f) {
    (function(a) {
        return null
    }
    );
    a = b("MessengerSharedPhotoReact.bs").make;
    f.make = a
}
), null);
__d("ChatPhotoViewFooterHScroll.react", ["cx", "Animation", "MessengerSharedPhotoReact.re", "React", "SphericalPhotoUtils", "prop-types"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = 200
      , j = 74
      , k = 140
      , l = 30;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.$1 = null,
            c.state = {
                currentPhoto: "",
                prevScrollLeft: 0,
                scrollLeft: 0
            },
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            this.props.width && this.props.updateNumberInOneBatch(this.$2(this.props.width)),
            this.$1 = new (b("Animation"))(this.refs.childContainer).to("scrollLeft", 0).duration(i).go()
        }
        ;
        d.UNSAFE_componentWillReceiveProps = function(a) {
            if (a.photoID != this.state.currentPhoto || this.props.sharedPhotos.length !== a.sharedPhotos.length) {
                var b = a.width ? (a.width - j) / 2 - k : 0
                  , c = a.sharedPhotos.findIndex(function(b) {
                    return b.node.id === a.photoID
                });
                this.setState({
                    currentPhoto: a.photoID,
                    prevScrollLeft: this.state.scrollLeft,
                    scrollLeft: c * j - b
                })
            }
            a.width != this.props.width && this.props.updateNumberInOneBatch(this.$2(a.width))
        }
        ;
        d.componentDidUpdate = function() {
            this.$1 && this.$1.from("scrollLeft", this.state.prevScrollLeft).to("scrollLeft", this.state.scrollLeft).duration(i).go()
        }
        ;
        d.componentWillUnmount = function() {
            this.$1 && this.$1.stop()
        }
        ;
        d.shouldComponentUpdate = function(a, b) {
            return a.photoID != this.state.currentPhoto || a.sharedPhotos.length !== this.props.sharedPhotos.length ? !0 : !1
        }
        ;
        d.render = function() {
            var a = this
              , c = this.props.sharedPhotos;
            c = c.map(function(c) {
                var d, e = c.node.photo_encodings ? c.node.photo_encodings.length !== 0 : !1;
                d = (d = c) != null ? (d = d.node) != null ? (d = d.image1) != null ? d.uri : d : d : d;
                if (e) {
                    var f = b("SphericalPhotoUtils").getThumbnailsFromPhotoEncodings(c.node.photo_encodings);
                    f = f.smallThumbnail;
                    d = f || d
                }
                return !d ? null : h.jsx("div", {
                    className: "_1oyb",
                    children: h.jsx(b("MessengerSharedPhotoReact.re").make, {
                        className: "_1oyc" + (a.state.currentPhoto !== c.node.id ? " _1oyd" : ""),
                        fbid: c.node.legacy_attachment_id,
                        onClick: a.props.onScroll,
                        uri: d,
                        isSpherical: e
                    })
                }, c.node.legacy_attachment_id)
            });
            return h.jsx("div", {
                className: "_1oye",
                children: h.jsx("div", {
                    className: "_1oyf",
                    ref: "childContainer",
                    children: h.jsx("div", {
                        className: "_1oyh",
                        ref: "scrollable",
                        children: c
                    })
                })
            })
        }
        ;
        d.$2 = function(a) {
            return a ? Math.ceil((a - k * 2) / j) : l
        }
        ;
        return c
    }(h.Component);
    e.exports = a;
    a.propTypes = {
        onScroll: (c = b("prop-types")).func,
        photoID: c.string,
        sharedPhotos: c.array,
        updateNumberInOneBatch: c.func,
        width: c.number
    }
}
), null);
__d("XForwardingNUXSeenController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/chat/forwarding_nux_seen/", {})
}
), null);
__d("MessagingForwardingButtonNUX.react", ["AsyncRequest", "ChatConfig", "React", "XForwardingNUXSeenController", "XUIAmbientNUX.react", "prop-types"], (function(a, b, c, d, e, f) {
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.state = {
                showNUX: !b("ChatConfig").get("seen_forwarding_nux")
            },
            d.$1 = function() {
                if (!d.state.showNUX)
                    return;
                b("ChatConfig").set("seen_forwarding_nux", !0);
                new (b("AsyncRequest"))(b("XForwardingNUXSeenController").getURIBuilder().getURI()).send();
                d.setState({
                    showNUX: !1
                })
            }
            ,
            d.close = function() {
                d.$1()
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.render = function() {
            return g.jsx(b("XUIAmbientNUX.react"), {
                contextRef: this.props.contextRef,
                onCloseButtonClick: this.$1,
                position: "left",
                width: "auto",
                shown: this.state.showNUX,
                children: this.props.children
            })
        }
        ;
        return c
    }(g.Component);
    e.exports = a;
    a.propTypes = {
        contextRef: b("prop-types").func.isRequired
    }
}
), null);
__d("MessengerPhotoViewCloseLinkReact.bs", ["cx", "fbt", "bs_curry", "React", "TooltipLink.react"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    function a(a) {
        var c = a.onClick;
        a = i.jsx("span", {
            children: h._("Nh\u1ea5n Esc \u0111\u1ec3 \u0111\u00f3ng")
        });
        return i.jsx(b("TooltipLink.react"), {
            children: i.jsx("div", {
                className: "_387s"
            }),
            className: "_51ok _50-m _51an",
            onClick: function(a) {
                return b("bs_curry")._1(c, 0)
            },
            tooltip: a
        })
    }
    c = a;
    f.make = c
}
), null);
__d("MessengerPhotoViewCloseLinkReact.re", ["MessengerPhotoViewCloseLinkReact.bs"], (function(a, b, c, d, e, f) {
    (function(a) {
        return null
    }
    );
    a = b("MessengerPhotoViewCloseLinkReact.bs").make;
    f.make = a
}
), null);
__d("SpotlightViewerBottomBarLink", ["cx", "Link.react", "React"], (function(a, b, c, d, e, f, g) {
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props.className || "_4_8j _4_8k";
            return h.jsx(b("Link.react"), babelHelpers["extends"]({}, this.props, {
                className: a,
                children: this.props.children
            }))
        }
        ;
        return c
    }(h.Component);
    e.exports = a
}
), null);
__d("ChatPhotoViewHeader.react", ["cx", "fbt", "CurrentUser", "MessagingForwardingButtonNUX.react", "MessengerPhotoViewCloseLinkReact.re", "React", "SpotlightViewerBottomBarLink", "prop-types"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.$3 = function() {
                c.$2(),
                c.props.showForwardDialog && c.props.showForwardDialog()
            }
            ,
            c.$4 = function() {
                c.$2(),
                c.props.showShareDialog && c.props.showShareDialog()
            }
            ,
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.render = function() {
            return i.jsxs("div", {
                className: "_51an _50-m _3h_t _5l-3",
                role: "banner",
                children: [this.$1(), i.jsx(b("MessengerPhotoViewCloseLinkReact.re").make, {
                    onClick: this.props.onClose
                })]
            })
        }
        ;
        d.$2 = function() {
            this.refs.forwardNUX && this.refs.forwardNUX.close()
        }
        ;
        d.$1 = function() {
            var a = this, c, d, e;
            this.props.disableForward || (c = i.jsxs(b("SpotlightViewerBottomBarLink"), {
                className: "_3h_u",
                onClick: this.$3,
                ref: "forwardButton",
                children: [i.jsx("div", {
                    className: "_3h_v _3h_w"
                }), h._("Chuy\u1ec3n ti\u1ebfp")]
            }),
            d = i.jsx(b("MessagingForwardingButtonNUX.react"), {
                contextRef: function() {
                    return a.refs.forwardButton
                },
                ref: "forwardNUX",
                children: h._("G\u1eedi h\u00ecnh \u1ea3nh n\u00e0y cho ng\u01b0\u1eddi kh\u00e1c b\u1eb1ng tin nh\u1eafn ri\u00eang.")
            }));
            this.props.enableShareToFB && (e = i.jsxs("div", {
                className: "_3h_u",
                onClick: this.$4,
                ref: "shareButton",
                role: "button",
                tabIndex: "0",
                children: [i.jsx("div", {
                    className: "_3tth _3h_w"
                }), this.$5()]
            }));
            return i.jsxs("div", {
                ref: "buttons",
                children: [i.jsxs(b("SpotlightViewerBottomBarLink"), {
                    className: "_3h_u",
                    rel: "async",
                    ajaxify: this.props.url,
                    ref: "downloadButton",
                    children: [i.jsx("div", {
                        className: "_3h_x _3h_w"
                    }), h._("T\u1ea3i xu\u1ed1ng")]
                }), c, d, e, i.jsxs("div", {
                    className: "_3h_u",
                    onClick: this.props.openInfo,
                    ref: "moreInfo",
                    role: "link",
                    tabIndex: "0",
                    children: [i.jsx("div", {
                        className: "_3h_y _3h_w"
                    }), h._("Th\u00f4ng tin")]
                })]
            }, "buttonsContainer")
        }
        ;
        d.$5 = function() {
            if (b("CurrentUser").isWorkUser())
                return h._("Chia s\u1ebb l\u00ean Workplace");
            else
                return h._("Chia s\u1ebb l\u00ean Facebook")
        }
        ;
        return c
    }(i.PureComponent);
    e.exports = a;
    a.propTypes = {
        disableForward: (c = b("prop-types")).bool,
        enableShareToFB: c.bool,
        onClose: c.func,
        openInfo: c.func,
        showForwardDialog: c.func,
        showShareDialog: c.func,
        url: c.object
    }
}
), null);
__d("ChatSpeakingSticker.react", ["React", "ReactDOM", "prop-types"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$1 = function() {
                var a = b("ReactDOM").findDOMNode(d.refs.stickerVideo);
                a.play()
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.render = function() {
            return g.jsx("div", {
                onClick: this.$1,
                role: "presentation",
                children: g.jsx("video", {
                    height: this.props.videoSize.height,
                    ref: "stickerVideo",
                    width: this.props.videoSize.width,
                    children: g.jsx("source", {
                        src: this.props.videoURI
                    })
                })
            })
        }
        ;
        return c
    }(g.PureComponent);
    e.exports = a;
    a.propTypes = {
        videoURI: (c = b("prop-types")).string.isRequired,
        videoSize: c.shape({
            height: c.number,
            width: c.number
        }).isRequired
    }
}
), null);
__d("EmojiSticker.react", ["cx", "Image.react", "React", "joinClasses", "prop-types"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            this.props.onAttachmentLoad && this.props.onAttachmentLoad()
        }
        ;
        d.render = function() {
            var a = this.props.emojiImage ? this.props.emojiImage : h.jsx(b("Image.react"), {
                src: this.props.sourceURI
            });
            return h.jsx("div", {
                "aria-label": this.props.emoji,
                className: b("joinClasses")(this.props.className, "_383m"),
                tabIndex: "0",
                children: a
            })
        }
        ;
        return c
    }(h.Component);
    e.exports = a;
    a.propTypes = {
        emoji: (c = b("prop-types")).string,
        emojiImage: c.any,
        onAttachmentLoad: c.func,
        sourceURI: c.string.isRequired
    }
}
), null);
__d("MercuryShareAttachmentReactShape", ["React", "prop-types"], (function(a, b, c, d, e, f) {
    "use strict";
    b("React");
    c = (a = b("prop-types")).shape({
        share_id: a.string,
        description: a.string,
        media: a.shape({
            image: a.string,
            image_size: a.shape({
                height: a.number,
                width: a.number
            }),
            duration: a.number,
            playable: a.bool,
            source: a.string
        }),
        source: a.string,
        style_list: a.arrayOf(a.string),
        subattachments: a.array,
        target: a.object,
        title: a.string,
        properties: a.object,
        uri: a.string,
        action_links: a.array,
        messaging_attribution: a.shape({
            attribution_type: a.string,
            attribution_id: a.string,
            name: a.string,
            icon_url: a.string
        }),
        messenger_ctas: a.arrayOf(a.shape({
            id: a.string,
            page_id: a.string,
            action_title: a.string,
            action_url: a.string,
            action_open_type: a.number,
            is_high_confidence: a.bool,
            is_mutable_by_server: a.bool,
            user_confirmation: a.bool,
            native_url: a.string,
            is_disabled: a.bool,
            nested_ctas: a.array,
            webview_metadata: a.object
        }))
    }).isRequired;
    d = c;
    e.exports = d
}
), null);
__d("MercuryAnimatedShareSnippet.react", ["cx", "fbt", "ix", "Image.react", "React", "prop-types"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props.isViewerSender ? h._("B\u1ea1n \u0111\u00e3 g\u1eedi m\u1ed9t t\u1ec7p GIF.") : h._("{sender name} \u0111\u00e3 g\u1eedi m\u1ed9t t\u1ec7p GIF.", [h._param("sender name", this.props.senderName)]);
            return j.jsxs("span", {
                className: "uiIconText _3l6h",
                children: [j.jsx(b("Image.react"), {
                    src: i("81849")
                }), a]
            })
        }
        ;
        return c
    }(j.Component);
    e.exports = a;
    a.propTypes = {
        isViewerSender: (c = b("prop-types")).bool,
        senderName: c.oneOfType([c.string, c.object])
    }
}
), null);
__d("MercuryCrisisListingShareSnippet.react", ["fbt", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        var c = b.prototype;
        c.render = function() {
            return h.jsx("span", {
                children: this.props.isViewerSender ? g._("B\u1ea1n \u0111\u00e3 chia s\u1ebb m\u1ed9t b\u00e0i vi\u1ebft.") : g._("{sender_name} \u0111\u00e3 chia s\u1ebb m\u1ed9t b\u00e0i vi\u1ebft.", [g._param("sender_name", this.props.senderName)])
            })
        }
        ;
        return b
    }(h.Component);
    e.exports = a
}
), null);
__d("MercuryFallbackShareAttachmentSnippet.react", ["cx", "fbt", "ix", "Image.react", "React", "prop-types"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a;
            this.props.isViewerSender ? a = h._("B\u1ea1n \u0111\u00e3 g\u1eedi m\u1ed9t li\u00ean k\u1ebft.") : a = h._("{sender name} \u0111\u00e3 g\u1eedi li\u00ean k\u1ebft.", [h._param("sender name", this.props.senderName)]);
            return j.jsxs("span", {
                className: "uiIconText _3l6h",
                children: [j.jsx(b("Image.react"), {
                    src: i("86988")
                }), a]
            })
        }
        ;
        return c
    }(j.Component);
    e.exports = a;
    a.propTypes = {
        isViewerSender: (c = b("prop-types")).bool,
        senderName: c.oneOfType([c.string, c.object])
    }
}
), null);
__d("MercuryFormProgressShareAttachmentSnippet.react", ["fbt", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        var c = b.prototype;
        c.$1 = function() {
            var a;
            return (a = this.props) != null ? (a = a.attachment) != null ? (a = a.target) != null ? a.progress : a : a : a
        }
        ;
        c.render = function() {
            var a = this.$1(), b;
            a === null ? b = g._("\u0110\u00e3 g\u1eedi m\u1ed9t m\u1eabu.") : this.props.isViewerSender ? a === 100 ? b = g._("{sender name} \u0111\u00e3 g\u1eedi m\u1ed9t m\u1eabu.", [g._param("sender name", this.props.senderName)]) : b = g._("B\u1ea1n \u0111\u00e3 g\u1eedi m\u1ed9t m\u1eabu.") : a === 100 ? b = g._("B\u1ea1n \u0111\u00e3 g\u1eedi m\u1ed9t m\u1eabu.") : b = g._("{sender name} \u0111\u00e3 g\u1eedi m\u1ed9t m\u1eabu.", [g._param("sender name", this.props.senderName)]);
            return h.jsx("span", {
                children: b
            })
        }
        ;
        return b
    }(h.Component);
    e.exports = a
}
), null);
__d("MercuryFundraiserShareSnippet.react", ["cx", "fbt", "ix", "Image.react", "React", "prop-types"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props.isViewerSender ? h._("B\u1ea1n \u0111\u00e3 chia s\u1ebb m\u1ed9t chi\u1ebfn d\u1ecbch g\u00e2y qu\u1ef9") : h._("{sender name} \u0111\u00e3 chia s\u1ebb m\u1ed9t chi\u1ebfn d\u1ecbch g\u00e2y qu\u1ef9", [h._param("sender name", this.props.senderName)]);
            return j.jsxs("span", {
                className: "uiIconText _3l6h",
                children: [j.jsx(b("Image.react"), {
                    src: i("40052")
                }), a]
            })
        }
        ;
        return c
    }(j.Component);
    e.exports = a;
    a.propTypes = {
        isViewerSender: (c = b("prop-types")).bool,
        senderName: c.oneOfType([c.string, c.object])
    }
}
), null);
__d("MercuryInstantGameShareSnippet.react", ["cx", "fbt", "React"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        var c = b.prototype;
        c.render = function() {
            var a, b = this.props.isViewerSender ? h._("B\u1ea1n \u0111\u00e3 chia s\u1ebb m\u1ed9t tr\u00f2 ch\u01a1i.") : h._("{sender name} \u0111\u00e3 chia s\u1ebb m\u1ed9t tr\u00f2 ch\u01a1i v\u1edbi b\u1ea1n", [h._param("sender name", this.props.senderName)]), c = this.props.attachment;
            a = (a = c) != null ? (a = a.style_list) != null ? a[0] : a : a;
            if (a === "instant_games_custom_update") {
                c = (a = c) != null ? a.title : a;
                c && (b = c)
            }
            return i.jsx("span", {
                className: "uiIconText _3l6h",
                children: b
            })
        }
        ;
        return b
    }(i.Component);
    e.exports = a
}
), null);
__d("MercuryLeadFormUserInfoShareAttachmentSnippet.react", ["ix", "cx", "fbt", "Image.react", "React", "asset"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props.isViewerSender ? i._("B\u1ea1n \u0111\u00e3 g\u1eedi m\u1ed9t m\u1eabu.") : i._("{sender name} \u0111\u00e3 g\u1eedi m\u1eabu c\u1ee7a b\u1ea1n.", [i._param("sender name", this.props.senderName)]);
            return j.jsxs("span", {
                className: "uiIconText _3l6h",
                children: [j.jsx(b("Image.react"), {
                    src: g("404223")
                }), a]
            })
        }
        ;
        return c
    }(j.Component);
    e.exports = a
}
), null);
__d("MercuryMBirthdayReminderShareAttachmentSnippet.react", ["MercuryShareAttachmentReactShape", "React", "prop-types"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        var c = b.prototype;
        c.render = function() {
            var a = this.props.attachment.title.split(" ")[0];
            return g.jsx("span", {
                children: "Wish " + a + " a happy birthday."
            })
        }
        ;
        return b
    }(g.Component);
    e.exports = a;
    a.propTypes = {
        attachment: b("prop-types").object
    }
}
), null);
__d("MercuryMessageLiveLocationShareAttachmentSnippet.react", ["cx", "fbt", "ix", "Image.react", "React", "prop-types"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a;
            this.props.isViewerSender ? a = h._("B\u1ea1n \u0111\u00e3 g\u1eedi m\u1ed9t v\u1ecb tr\u00ed tr\u1ef1c ti\u1ebfp.") : a = h._("{sender name} \u0111\u00e3 g\u1eedi m\u1ed9t v\u1ecb tr\u00ed tr\u1ef1c ti\u1ebfp.", [h._param("sender name", this.props.senderName)]);
            return j.jsxs("span", {
                className: this.props.className,
                children: [j.jsx("span", {
                    className: "_j0r"
                }), j.jsxs("span", {
                    className: "uiIconText _3l6h",
                    children: [j.jsx(b("Image.react"), {
                        src: i("87068")
                    }), a]
                })]
            })
        }
        ;
        return c
    }(j.Component);
    e.exports = a;
    a.propTypes = {
        isViewerSender: (c = b("prop-types")).bool,
        senderName: c.oneOfType([c.string, c.object])
    }
}
), null);
__d("MercuryMessageLocationShareAttachmentSnippet.react", ["cx", "fbt", "ix", "Image.react", "React"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a;
            this.props.isViewerSender ? a = h._("B\u1ea1n \u0111\u00e3 g\u1eedi m\u1ed9t v\u1ecb tr\u00ed.") : a = h._("{sender name} \u0111\u00e3 g\u1eedi m\u1ed9t v\u1ecb tr\u00ed.", [h._param("sender name", this.props.senderName)]);
            return j.jsxs("span", {
                className: "uiIconText _3l6h",
                children: [j.jsx(b("Image.react"), {
                    src: i("87068")
                }), a]
            })
        }
        ;
        return c
    }(j.Component);
    e.exports = a
}
), null);
__d("MercuryMessengerInviteShareAttachmentSnippet.react", ["cx", "MercuryShareAttachmentReactShape", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        var c = b.prototype;
        c.render = function() {
            return h.jsx("span", {
                className: "_3l6h",
                children: this.props.attachment.title
            })
        }
        ;
        return b
    }(h.Component);
    e.exports = a;
    a.propTypes = {
        attachment: b("MercuryShareAttachmentReactShape")
    }
}
), null);
__d("MercuryMontageDirectShareSnippet.react", ["cx", "fbt", "React", "prop-types"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        var c = b.prototype;
        c.render = function() {
            var a;
            a = (a = this.props) != null ? (a = a.attachment) != null ? (a = a.media) != null ? a.source : a : a : a;
            var b;
            this.props.isViewerSender ? b = a ? h._("B\u1ea1n \u0111\u00e3 g\u1eedi m\u1ed9t video.") : h._("B\u1ea1n \u0111\u00e3 g\u1eedi m\u1ed9t \u1ea3nh.") : b = a ? h._("{sender name} \u0111\u00e3 g\u1eedi m\u1ed9t video.", [h._param("sender name", this.props.senderName)]) : h._("{sender name} \u0111\u00e3 g\u1eedi m\u1ed9t \u1ea3nh.", [h._param("sender name", this.props.senderName)]);
            return i.jsx("span", {
                className: "uiIconText _3l6h",
                children: b
            })
        }
        ;
        return b
    }(i.Component);
    e.exports = a;
    a.propTypes = {
        isViewerSender: (c = b("prop-types")).bool,
        senderName: c.oneOfType([c.string, c.object]),
        attachment: c.object
    }
}
), null);
__d("MercuryMusicIntegrationAttachmentSnippet.react", ["fbt", "MercuryFallbackShareAttachmentSnippet.react", "React", "prop-types"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a, c = this.props.attachment.target;
            if (!c)
                return h.jsx(b("MercuryFallbackShareAttachmentSnippet.react"), babelHelpers["extends"]({}, this.props));
            var d = c.title;
            c = c.app_name;
            this.props.isViewerSender ? a = g._("B\u1ea1n \u0111\u00e3 chia s\u1ebb \"{music title}\" t\u1eeb {music servvice}.", [g._param("music title", d), g._param("music servvice", c)]) : a = g._("{sender name} \u0111\u00e3 chia s\u1ebb \"{music title}\" t\u1eeb {music servvice}.", [g._param("sender name", this.props.senderName), g._param("music title", d), g._param("music servvice", c)]);
            return h.jsx("span", {
                children: a
            })
        }
        ;
        return c
    }(h.PureComponent);
    e.exports = a;
    a.propTypes = {
        attachment: (c = b("prop-types")).object,
        isViewerSender: c.bool,
        senderName: c.oneOfType([c.string, c.object])
    }
}
), null);
__d("MercuryPaymentPlatformMCOMSnippet.react", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        var c = b.prototype;
        c.render = function() {
            return null
        }
        ;
        return b
    }(a.Component);
    e.exports = c
}
), null);
__d("MercuryPaymentPlatformSnippet.react", ["cx", "ix", "Image.react", "MercuryShareAttachmentReactShape", "React", "prop-types"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a;
            a = (a = this.props) != null ? (a = a.attachment) != null ? (a = a.target) != null ? (a = a.payment_snippet) != null ? a.text : a : a : a : a;
            return !a ? null : i.jsxs("span", {
                className: "uiIconText _3l6h",
                children: [i.jsx(b("Image.react"), {
                    src: h("86988")
                }), a]
            })
        }
        ;
        return c
    }(i.Component);
    e.exports = a;
    a.propTypes = {
        attachment: b("MercuryShareAttachmentReactShape"),
        isSenderViewer: (c = b("prop-types")).bool,
        senderName: c.oneOfType([c.string, c.object])
    }
}
), null);
__d("MercuryPhotoShareSnippet.react", ["cx", "fbt", "ix", "Image.react", "React", "prop-types"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props.isViewerSender ? h._("B\u1ea1n \u0111\u00e3 g\u1eedi m\u1ed9t \u1ea3nh.") : h._("{sender name} \u0111\u00e3 g\u1eedi m\u1ed9t \u1ea3nh.", [h._param("sender name", this.props.senderName)]);
            return j.jsxs("span", {
                className: "uiIconText _3l6h",
                children: [j.jsx(b("Image.react"), {
                    src: i("81849")
                }), a]
            })
        }
        ;
        return c
    }(j.Component);
    e.exports = a;
    a.propTypes = {
        isViewerSender: (c = b("prop-types")).bool,
        senderName: c.oneOfType([c.string, c.object])
    }
}
), null);
__d("MercuryPromotionShareAttachmentSnippet.react", ["cx", "fbt", "ix", "Image.react", "React"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a, c = this.props.attachment, d = c && c.target, e;
            a = (a = c) != null ? (a = a.style_list) != null ? a[0] : a : a;
            this.props.isViewerSender != null ? e = h._("B\u1ea1n \u0111\u00e3 g\u1eedi t\u1ec7p \u0111\u00ednh k\u00e8m.") : e = h._("{sender name} \u0111\u00e3 g\u1eedi m\u1ed9t t\u1ec7p \u0111\u00ednh k\u00e8m.", [h._param("sender name", this.props.senderName)]);
            a === "instant_games_leaderboard_update" && (e = c.title);
            c = (a = d == null ? void 0 : d.message) != null ? a : e;
            return j.jsxs("span", {
                className: "uiIconText _3l6h",
                children: [j.jsx(b("Image.react"), {
                    src: i("86988")
                }), c]
            })
        }
        ;
        return c
    }(j.Component);
    e.exports = a
}
), null);
__d("MercurySaleGroupProductItemShareSnippet.react", ["cx", "fbt", "ix", "Image.react", "React", "prop-types"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props.isViewerSender ? h._("B\u1ea1n \u0111\u00e3 g\u1eedi m\u1ed9t m\u1eb7t h\u00e0ng \u0111\u1ec3 b\u00e1n.") : h._("{sender name} \u0111\u00e3 g\u1eedi m\u1ed9t m\u1eb7t h\u00e0ng \u0111\u1ec3 b\u00e1n.", [h._param("sender name", this.props.senderName)]);
            return j.jsxs("span", {
                className: "uiIconText _3l6h",
                children: [j.jsx(b("Image.react"), {
                    src: i("86988")
                }), a]
            })
        }
        ;
        return c
    }(j.Component);
    e.exports = a;
    a.propTypes = {
        isViewerSender: (c = b("prop-types")).bool,
        senderName: c.oneOfType([c.string, c.object])
    }
}
), null);
__d("MercuryVideoShareSnippet.react", ["cx", "fbt", "ix", "Image.react", "React", "prop-types"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props.isViewerSender ? h._("B\u1ea1n \u0111\u00e3 g\u1eedi m\u1ed9t video.") : h._("{sender name} \u0111\u00e3 g\u1eedi m\u1ed9t video.", [h._param("sender name", this.props.senderName)]);
            return j.jsxs("span", {
                className: "uiIconText _3l6h",
                children: [j.jsx(b("Image.react"), {
                    src: i("82423")
                }), a]
            })
        }
        ;
        return c
    }(j.Component);
    e.exports = a;
    a.propTypes = {
        isViewerSender: (c = b("prop-types")).bool,
        senderName: c.oneOfType([c.string, c.object])
    }
}
), null);
__d("MercuryWECAttachmentSnippet.react", ["cx", "fbt", "ix", "Image.react", "MercuryShareAttachmentReactShape", "React", "prop-types"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            if (this.props.attachment.subattachments.length === 0 || this.props.attachment.subattachments[0].target === null || this.props.attachment.subattachments[0].target === void 0)
                return null;
            var a = this.props.attachment.subattachments[0].target.attach_type;
            if (a == "photo") {
                a = this.props.isViewerSender ? h._({
                    "*": "B\u1ea1n \u0111\u00e3 g\u1eedi {number} \u1ea3nh.",
                    "_1": "B\u1ea1n \u0111\u00e3 g\u1eedi 1 \u1ea3nh."
                }, [h._plural(this.props.attachment.subattachments.length, "number", this.props.attachment.subattachments.length === 1 ? "a" : this.props.attachment.subattachments.length.toString())]) : h._({
                    "*": "{sender name} \u0111\u00e3 g\u1eedi {number} b\u1ee9c \u1ea3nh.",
                    "_1": "{sender name} \u0111\u00e3 g\u1eedi 1 b\u1ee9c \u1ea3nh."
                }, [h._param("sender name", this.props.senderName), h._plural(this.props.attachment.subattachments.length, "number", this.props.attachment.subattachments.length === 1 ? "a" : this.props.attachment.subattachments.length.toString())]);
                return j.jsxs("span", {
                    className: "uiIconText _3l6h",
                    children: [j.jsx(b("Image.react"), {
                        src: i("81849")
                    }), a]
                })
            }
            return null
        }
        ;
        return c
    }(j.Component);
    e.exports = a;
    a.propTypes = {
        isViewerSender: (c = b("prop-types")).bool,
        senderName: c.oneOfType([c.string, c.object]),
        attachment: b("MercuryShareAttachmentReactShape")
    }
}
), null);
__d("MessengerLightweightActionSnippet.react", ["cx", "MercuryShareAttachmentReactShape", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        var c = b.prototype;
        c.render = function() {
            return h.jsx("span", {
                className: "_3l6h",
                children: this.props.attachment.title
            })
        }
        ;
        return b
    }(h.PureComponent);
    e.exports = a;
    a.propTypes = {
        attachment: b("MercuryShareAttachmentReactShape")
    }
}
), null);
__d("MessengerMomentsAppSnippet.react", ["cx", "ix", "Image.react", "MercuryShareAttachmentReactShape", "React"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props.attachment;
            return !a || !a.target ? null : i.jsxs("span", {
                className: "uiIconText _3l6h",
                children: [i.jsx(b("Image.react"), {
                    src: h("86988")
                }), a.target.snippet]
            })
        }
        ;
        return c
    }(i.Component);
    e.exports = a;
    a.propTypes = {
        attachment: b("MercuryShareAttachmentReactShape")
    }
}
), null);
__d("NeoKidInitiateFriendingMercuryShareAttachmentSnippet.react", ["fbt", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        var c = b.prototype;
        c.render = function() {
            var a = this.props.isViewerSender ? g._("B\u1ea1n v\u1eeba g\u1eedi m\u1ed9t l\u1eddi m\u1eddi th\u00eam ng\u01b0\u1eddi li\u00ean h\u1ec7.") : g._("{sender name} \u0111\u00e3 g\u1eedi y\u00eau c\u1ea7u th\u00eam ng\u01b0\u1eddi li\u00ean h\u1ec7.", [g._param("sender name", this.props.senderName)]);
            return h.jsx("span", {
                children: a
            })
        }
        ;
        return b
    }(h.Component);
    e.exports = a
}
), null);
__d("P2PMercuryAttachmentSnippetRendererBase.react", ["cx", "ix", "Image.react", "React", "prop-types"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            return i.jsxs("span", {
                className: "uiIconText _3l6h _3_io",
                children: [i.jsx(b("Image.react"), {
                    height: 12,
                    src: h("94348"),
                    width: 12
                }), this.props.text]
            })
        }
        ;
        return c
    }(i.Component);
    e.exports = a;
    a.propTypes = {
        text: b("prop-types").node
    }
}
), null);
__d("P2PMercuryAttachmentSnippet.react", ["CurrentUser", "MercuryAttachmentSnippetRenderer", "P2PMercuryAttachmentSnippetRendererBase.react", "React", "prop-types"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = b("MercuryAttachmentSnippetRenderer").renderP2PPaymentSnippetText(b("CurrentUser").getID() === this.props.sender.id, this.props.sender.name, this.props.amountWithSymbol, this.props.status, b("CurrentUser").getID() === this.props.receiver.id, this.props.receiver.name);
            return g.jsx(b("P2PMercuryAttachmentSnippetRendererBase.react"), {
                text: a
            })
        }
        ;
        return c
    }(g.Component);
    a.propTypes = {
        amountWithSymbol: (c = b("prop-types")).string,
        receiver: c.object,
        sender: c.object,
        status: c.number
    };
    a.defaultProps = {
        sender: {},
        receiver: {}
    };
    e.exports = a
}
), null);
__d("P2PMercuryShareAttachmentSnippet.react", ["MercuryShareAttachmentReactShape", "P2PMercuryAttachmentSnippet.react", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props.attachment ? this.props.attachment.target : {};
            return g.jsx(b("P2PMercuryAttachmentSnippet.react"), babelHelpers["extends"]({}, a))
        }
        ;
        return c
    }(g.Component);
    e.exports = a;
    a.propTypes = {
        attachment: b("MercuryShareAttachmentReactShape")
    }
}
), null);
__d("P2PPaymentRequestMercuryAttachmentSnippet.react", ["CurrentUser", "MercuryAttachmentSnippetRenderer", "P2PMercuryAttachmentSnippetRendererBase.react", "React", "prop-types"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = b("MercuryAttachmentSnippetRenderer").renderP2PPaymentRequestSnippetText(b("CurrentUser").getID() === this.props.requester.id, this.props.requester.name, this.props.formattedAmount, this.props.status, b("CurrentUser").getID() === this.props.requestee.id, this.props.requestee.name);
            return g.jsx(b("P2PMercuryAttachmentSnippetRendererBase.react"), {
                text: a
            })
        }
        ;
        return c
    }(g.Component);
    e.exports = a;
    a.propTypes = {
        formattedAmount: (c = b("prop-types")).string.isRequired,
        requestee: c.object.isRequired,
        requester: c.object.isRequired,
        status: c.number.isRequired
    }
}
), null);
__d("P2PPaymentRequestMercuryShareAttachmentSnippet.react", ["P2PMercuryAttachmentSnippetRendererBase.react", "P2PPaymentRequestMercuryAttachmentSnippet.react", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props.attachment
              , c = a.target;
            return !c ? g.jsx(b("P2PMercuryAttachmentSnippetRendererBase.react"), {
                text: a.title
            }) : g.jsx(b("P2PPaymentRequestMercuryAttachmentSnippet.react"), {
                formattedAmount: c.amountWithSymbol,
                requestee: c.requestee,
                requester: c.requester,
                status: c.currentStatus
            })
        }
        ;
        return c
    }(g.Component);
    e.exports = a
}
), null);
__d("ServicesGenericAdminTextAttachmentSnippet.react", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        return g.jsx("span", {})
    }
}
), null);
__d("MercuryShareStyleMap", ["cx", "CurrentUser", "JSResource", "MercuryShareAttachmentRenderLocations", "emptyFunction", "gkx", "requireCond", "cr:1030824", "MercuryFallbackShareAttachmentSnippet.react", "P2PMercuryShareAttachmentSnippet.react", "P2PPaymentRequestMercuryShareAttachmentSnippet.react", "MercuryPhotoShareSnippet.react", "NeoKidInitiateFriendingMercuryShareAttachmentSnippet.react", "MercuryInstantGameShareSnippet.react", "MercuryPromotionShareAttachmentSnippet.react", "MessengerMomentsAppSnippet.react", "MercuryVideoShareSnippet.react", "MercuryMessageLocationShareAttachmentSnippet.react", "MercuryMessageLiveLocationShareAttachmentSnippet.react", "MercuryAnimatedShareSnippet.react", "MercurySaleGroupProductItemShareSnippet.react", "MercuryPaymentPlatformMCOMSnippet.react", "MercuryPaymentPlatformSnippet.react", "MercuryMusicIntegrationAttachmentSnippet.react", "MercuryFundraiserShareSnippet.react", "MercuryCrisisListingShareSnippet.react", "MercuryMessengerInviteShareAttachmentSnippet.react", "MessengerLightweightActionSnippet.react", "MercuryLeadFormUserInfoShareAttachmentSnippet.react", "MercuryWECAttachmentSnippet.react", "MercuryMBirthdayReminderShareAttachmentSnippet.react", "MercuryFormProgressShareAttachmentSnippet.react", "ServicesGenericAdminTextAttachmentSnippet.react", "MercuryMontageDirectShareSnippet.react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.getStyleFactory = a;
    f._getStyleMapEntry = c;
    var h = new Map();
    h.set("fallback", {
        componentName: "MercuryFallbackShareAttachment.react",
        componentLoader: b("JSResource")("MercuryFallbackShareAttachment.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("MercuryFallbackShareAttachmentSnippet.react")
        },
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d"]])
    });
    b("CurrentUser").isWorkUser() ? h.set("event", {
        componentName: "MercuryWorkEventShareAttachment.react",
        componentLoader: b("JSResource")("MercuryWorkEventShareAttachment.react").__setRef("MercuryShareStyleMap")
    }) : h.set("event", {
        componentName: "MercuryEventShareAttachment.react",
        componentLoader: b("JSResource")("MercuryEventShareAttachment.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("MercuryFallbackShareAttachmentSnippet.react")
        }
    });
    d = {
        componentName: "P2PMercuryShareAttachmentContainer.react",
        componentLoader: b("JSResource")("P2PMercuryShareAttachmentContainer.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("P2PMercuryShareAttachmentSnippet.react")
        },
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d _3-50"]])
    };
    h.set("event_attendance_confirmation", {
        componentName: "MercuryEventAttendanceConfirmationAttachment.react",
        componentLoader: b("JSResource")("MercuryEventAttendanceConfirmationAttachment.react").__setRef("MercuryShareStyleMap"),
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d _7jp4"]]),
        getSnippetComponent: function() {
            return b("MercuryFallbackShareAttachmentSnippet.react")
        }
    });
    h.set("orion", d);
    if (b("gkx")("678645")) {
        e = {
            componentName: "P2PServerDrivenMercuryShareAttachmentContainer.react",
            componentLoader: b("JSResource")("P2PServerDrivenMercuryShareAttachmentContainer.react").__setRef("MercuryShareStyleMap"),
            getSnippetComponent: function() {
                return b("MercuryFallbackShareAttachmentSnippet.react")
            },
            cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d _3-50"]])
        };
        h.set("PAYMENT_BUBBLE_VIEW", e);
        h.set("p2p_server_bubble", e)
    }
    h.set("orion_request", {
        componentName: "P2PPaymentRequestMercuryShareAttachmentContainer.react",
        componentLoader: b("JSResource")("P2PPaymentRequestMercuryShareAttachmentContainer.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("P2PPaymentRequestMercuryShareAttachmentSnippet.react")
        },
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d _3-50"]])
    });
    h.set("insights_chart", {
        componentName: "MercuryImageShareAttachment.react",
        componentLoader: b("JSResource")("MercuryImageShareAttachment.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("MercuryPhotoShareSnippet.react")
        },
        unwrapInStory: b("emptyFunction").thatReturnsTrue
    });
    h.set("retail_receipt", {
        componentName: "MNCommerceReceiptMercuryShareAttachment.react",
        componentLoader: b("JSResource")("MNCommerceReceiptMercuryShareAttachment.react").__setRef("MercuryShareStyleMap"),
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d _205d"]])
    });
    h.set("neo_draw_and_guess_game_request", {
        componentName: "NeoDrawAndGuessRequestMercuryShareAttachment.react",
        componentLoader: b("JSResource")("NeoDrawAndGuessRequestMercuryShareAttachment.react").__setRef("MercuryShareStyleMap"),
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_205d _4p_r _5i_d"]])
    });
    h.set("NEO_INVITATION", {
        componentName: "NeoInvitationMercuryShareAttachment.react",
        componentLoader: b("JSResource")("NeoInvitationMercuryShareAttachment.react").__setRef("MercuryShareStyleMap")
    });
    h.set("parent_approved_plain_text_bot_message", {
        componentName: "ParentApprovedPlainTextBotMessageMercuryShareAttachment.react",
        componentLoader: b("JSResource")("ParentApprovedPlainTextBotMessageMercuryShareAttachment.react").__setRef("MercuryShareStyleMap")
    });
    h.set("NEO_KID_INITIATE_FRIENDING", {
        componentName: "NeoKidInitiateFriendingMercuryShareAttachment.react",
        componentLoader: b("JSResource")("NeoKidInitiateFriendingMercuryShareAttachment.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("NeoKidInitiateFriendingMercuryShareAttachmentSnippet.react")
        }
    });
    h.set("retail_cancellation", {
        componentName: "MNCommerceCancelationMercuryShareAttachment.react",
        componentLoader: b("JSResource")("MNCommerceCancelationMercuryShareAttachment.react").__setRef("MercuryShareStyleMap"),
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d _205d"]])
    });
    h.set("retail_shipment", {
        componentName: "MNCommerceRetailShipmentShareAttachment.react",
        componentLoader: b("JSResource")("MNCommerceRetailShipmentShareAttachment.react").__setRef("MercuryShareStyleMap"),
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d _205d"]])
    });
    h.set("retail_shipment_tracking_event", {
        componentName: "MNCommerceShipmentTrackingEventShareAttachment.react",
        componentLoader: b("JSResource")("MNCommerceShipmentTrackingEventShareAttachment.react").__setRef("MercuryShareStyleMap"),
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d _205d"]])
    });
    h.set("retail_now_in_stock", {
        componentName: "MNCommerceProductSubscriptionMercuryShareAttachment.react",
        componentLoader: b("JSResource")("MNCommerceProductSubscriptionMercuryShareAttachment.react").__setRef("MercuryShareStyleMap"),
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d _205d"]])
    });
    h.set("retail_promotion", {
        componentName: "MNCommercePromotionMercuryShareAttachment.react",
        componentLoader: b("JSResource")("MNCommercePromotionMercuryShareAttachment.react").__setRef("MercuryShareStyleMap"),
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d _205d _28rg"]])
    });
    b("gkx")("678262") && (h.set("instant_games_share_message", {
        componentName: "MessengerGamesShareAttachment.react",
        componentLoader: b("JSResource")("MessengerGamesShareContainer.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("MercuryInstantGameShareSnippet.react")
        },
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d _4niv _205d _28rg"]])
    }),
    h.set("instant_games_share_score_message", {
        componentName: "MessengerGamesScoreShareContainer.react",
        componentLoader: b("JSResource")("MessengerGamesScoreShareContainer.react").__setRef("MercuryShareStyleMap"),
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d _4niv _205d _28rg"]])
    }),
    h.set("instant_games_custom_update", {
        componentName: "MessengerGamesScoreShareContainer.react",
        componentLoader: b("JSResource")("MessengerGamesScoreShareContainer.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("MercuryInstantGameShareSnippet.react")
        },
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d _4niv _205d _28rg"]])
    }));
    h.set("games_service_player_invite_message", {
        componentName: "GamesServiceGameRequestAttachment.react",
        componentLoader: b("JSResource")("GamesServiceGameRequestAttachment.react").__setRef("MercuryShareStyleMap")
    });
    h.set("mobile_game_thread_share", {
        componentName: "MessengerMobileGameThreadShareMessage.react",
        componentLoader: b("JSResource")("MessengerMobileGameThreadShareMessage.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("MercuryInstantGameShareSnippet.react")
        }
    });
    h.set("retail_item", {
        componentName: "MNCommercePromotionMercuryShareAttachment.react",
        componentLoader: b("JSResource")("MNCommercePromotionMercuryShareAttachment.react").__setRef("MercuryShareStyleMap"),
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d _205d _28rg"]])
    });
    h.set("business_message_items", {
        componentName: "MNCommercePromotionMercuryShareAttachment.react",
        componentLoader: b("JSResource")("MNCommercePromotionMercuryShareAttachment.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("MercuryPromotionShareAttachmentSnippet.react")
        },
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d _205d _28rg"]])
    });
    h.set("in_thread_multiphoto_carousel", {
        componentName: "InThreadMultiphotoCarouselItemShareAttachment.react",
        componentLoader: b("JSResource")("InThreadMultiphotoCarouselItemShareAttachment.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("MercuryPromotionShareAttachmentSnippet.react")
        },
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d _205d _28rg"]]),
        overrideWidthInHScroll: 240
    });
    h.set("messenger_platform_media_attachment", {
        componentName: "MNCommercePromotionMercuryShareAttachment.react",
        componentLoader: b("JSResource")("MNCommercePromotionMercuryShareAttachment.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("MercuryPromotionShareAttachmentSnippet.react")
        },
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_205d _28rg _4jj7"]])
    });
    h.set("h_scroll", {
        componentName: "MNCommerceHScrollMessageAttachment.react",
        componentLoader: b("JSResource")("MNCommerceHScrollMessageAttachment.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("MercuryPromotionShareAttachmentSnippet.react")
        },
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d _205d _8ka"]])
    });
    h.set("messenger_platform_compact_item", {
        componentName: "MessengerPlatformVerticalListItemAttachment.react",
        componentLoader: b("JSResource")("MessengerPlatformVerticalListItemAttachment.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("MercuryPromotionShareAttachmentSnippet.react")
        },
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_205d _28rg"]])
    });
    h.set("messenger_platform_cover_item", {
        componentName: "MessengerPlatformVerticalListItemAttachment.react",
        componentLoader: b("JSResource")("MessengerPlatformVerticalListItemAttachment.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("MercuryPromotionShareAttachmentSnippet.react")
        },
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_205d _28rg"]])
    });
    h.set("messenger_platform_button_list", {
        componentName: "MNCommercePromotionMercuryShareAttachment.react",
        componentLoader: b("JSResource")("MNCommercePromotionMercuryShareAttachment.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("MercuryPromotionShareAttachmentSnippet.react")
        },
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_205d _28rg"]])
    });
    h.set("vertical_attachment_list", {
        componentName: "MessengerPlatformVerticalListAttachment.react",
        componentLoader: b("JSResource")("MessengerPlatformVerticalListAttachment.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("MercuryPromotionShareAttachmentSnippet.react")
        },
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_205d _5i_d _28rg"]])
    });
    h.set("ride_ordered", {
        componentName: "MercuryFallbackShareAttachment.react",
        componentLoader: b("JSResource")("MercuryFallbackShareAttachment.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("MercuryFallbackShareAttachmentSnippet.react")
        },
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d"]])
    });
    h.set("living_room", {
        componentName: "MercuryLivingRoomShareAttachment.react",
        componentLoader: b("JSResource")("MercuryLivingRoomShareAttachment.react").__setRef("MercuryShareStyleMap"),
        unwrapInStory: b("emptyFunction").thatReturnsTrue
    });
    h.set("ride_receipt", {
        componentName: "MercuryFallbackShareAttachment.react",
        componentLoader: b("JSResource")("MercuryFallbackShareAttachment.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("MercuryFallbackShareAttachmentSnippet.react")
        },
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d"]])
    });
    h.set("airline_update", {
        componentName: "MNAirlineUpdateMercuryAttachment.react",
        componentLoader: b("JSResource")("MNAirlineUpdateMercuryAttachment.react").__setRef("MercuryShareStyleMap"),
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d _205d _8kb"]])
    });
    h.set("airline_itinerary", {
        componentName: "MNAirlineItineraryMercuryAttachment.react",
        componentLoader: b("JSResource")("MNAirlineItineraryMercuryAttachment.react").__setRef("MercuryShareStyleMap"),
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d _205d _8kb"]])
    });
    h.set("airline_checkin_reminder", {
        componentName: "MNAirlineCheckInMercuryAttachment.react",
        componentLoader: b("JSResource")("MNAirlineCheckInMercuryAttachment.react").__setRef("MercuryShareStyleMap"),
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d _205d _8kb"]])
    });
    h.set("airline_boarding_pass", {
        componentName: "MNAirlineBoardingPassMercuryAttachment.react",
        componentLoader: b("JSResource")("MNAirlineBoardingPassMercuryAttachment.react").__setRef("MercuryShareStyleMap"),
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d _205d _8kb"]])
    });
    g = {
        componentName: "MessengerMomentsAppShareAttachment.react",
        componentLoader: b("JSResource")("MessengerMomentsAppShareAttachment.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("MessengerMomentsAppSnippet.react")
        },
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d"]])
    };
    h.set("moments_app_invitation", g);
    h.set("moments_app_photo_request", g);
    h.set("genie_message", {
        componentName: "GenieMessageShareAttachment.react",
        componentLoader: b("JSResource")("GenieMessageShareAttachment.react").__setRef("MercuryShareStyleMap"),
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_2wrf"]]),
        getSnippetComponent: function() {
            return b("MercuryFallbackShareAttachmentSnippet.react")
        }
    });
    h.set("movie_bot_movie_list", {
        componentName: "MovieBotMovieListShareAttachment.react",
        componentLoader: b("JSResource")("MovieBotMovieListShareAttachment.react").__setRef("MercuryShareStyleMap"),
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d"]])
    });
    h.set("movie_bot_movie_showtime_list", {
        componentName: "MovieBotMovieShowtimeListShareAttachment.react",
        componentLoader: b("JSResource")("MovieBotMovieShowtimeListShareAttachment.react").__setRef("MercuryShareStyleMap"),
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d"]])
    });
    h.set("share_large_image", {
        componentName: "MercuryShareLargeImageAttachment.react",
        componentLoader: b("JSResource")("MercuryShareLargeImageAttachment.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("MercuryPhotoShareSnippet.react")
        },
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d"]]),
        unwrapInStory: b("emptyFunction").thatReturnsTrue
    });
    b("CurrentUser").isWorkUser() ? h.set("image_share", {
        componentName: "MercuryImageShareAttachment.react",
        componentLoader: b("JSResource")("MercuryImageShareAttachment.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("MercuryPhotoShareSnippet.react")
        }
    }) : h.set("image_share", {
        componentName: "MercuryImageShareAttachment.react",
        componentLoader: b("JSResource")("MercuryImageShareAttachment.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("MercuryPhotoShareSnippet.react")
        },
        unwrapInStory: b("emptyFunction").thatReturnsTrue
    });
    b("CurrentUser").isWorkUser() ? (h.set("photo_link_share", {
        componentName: "MercuryImageShareAttachment.react",
        componentLoader: b("JSResource")("MercuryImageShareAttachment.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("MercuryPhotoShareSnippet.react")
        }
    }),
    h.set("video", {
        componentName: "MercuryStoryShareAttachment.react",
        componentLoader: b("JSResource")("MercuryStoryShareAttachment.react").__setRef("MercuryShareStyleMap")
    })) : h.set("video", {
        componentName: "MercuryVideoShareAttachment.react",
        componentLoader: b("JSResource")("MercuryVideoShareAttachment.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("MercuryVideoShareSnippet.react")
        },
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_3duc"]]),
        unwrapInStory: b("emptyFunction").thatReturnsTrue
    });
    h.set("message_location", {
        componentName: "MercuryMessageLocationShareAttachment.react",
        componentLoader: b("JSResource")("MercuryMessageLocationShareAttachment.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("MercuryMessageLocationShareAttachmentSnippet.react")
        },
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d"]])
    });
    h.set("message_live_location", {
        componentName: "MercuryMessageLiveLocationShareAttachment.react",
        componentLoader: b("JSResource")("MercuryMessageLiveLocationShareAttachment.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("MercuryMessageLiveLocationShareAttachmentSnippet.react")
        },
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d"]])
    });
    h.set("animated_image_share", {
        componentName: "MercuryAnimatedShareAttachment.react",
        componentLoader: b("JSResource")("MercuryAnimatedShareAttachment.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("MercuryAnimatedShareSnippet.react")
        },
        unwrapInStory: b("emptyFunction").thatReturnsFalse
    });
    h.set("group_sell_product_item", {
        componentName: "MercurySaleGroupProductItemShareAttachment.react",
        componentLoader: b("JSResource")("MercurySaleGroupProductItemShareAttachment.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("MercurySaleGroupProductItemShareSnippet.react")
        },
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d"]]),
        unwrapInStory: b("emptyFunction").thatReturnsTrue
    });
    h.set("commerce_attachment", {
        componentName: "MercurySaleGroupProductItemShareAttachment.react",
        componentLoader: b("JSResource")("MercurySaleGroupProductItemShareAttachment.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("MercurySaleGroupProductItemShareSnippet.react")
        },
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d"]]),
        unwrapInStory: b("emptyFunction").thatReturnsTrue
    });
    h.set("commerce_product_item", {
        componentName: "MercuryCommerceProductItemShareAttachment.react",
        componentLoader: b("JSResource")("MercuryCommerceProductItemShareAttachment.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("MercuryFallbackShareAttachmentSnippet.react")
        },
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d"]]),
        unwrapInStory: b("emptyFunction").thatReturnsTrue
    });
    h.set("payment_platform_redesigned", {
        componentName: "MercuryPaymentPlatformMCOMAttachment.react",
        componentLoader: b("JSResource")("MercuryPaymentPlatformMCOMAttachment.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("MercuryPaymentPlatformMCOMSnippet.react")
        },
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d _9bjq _9bjr"], [b("MercuryShareAttachmentRenderLocations").CHAT, "_9bjq _9bjs"]])
    });
    h.set("payment_platform", {
        componentName: "MercuryPaymentPlatformShareAttachment.react",
        componentLoader: b("JSResource")("MercuryPaymentPlatformShareAttachment.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("MercuryPaymentPlatformSnippet.react")
        },
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d"]])
    });
    h.set("financial_bill_payment_request", {
        componentName: "MNBillPaymentRequestMercuryShareAttachment.react",
        componentLoader: b("JSResource")("MNBillPaymentRequestMercuryShareAttachment.react").__setRef("MercuryShareStyleMap"),
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d _205d"]])
    });
    h.set("music_aggregation", {
        componentName: "MercuryMusicAttachment.react",
        componentLoader: b("JSResource")("MercuryMusicAttachment.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("MercuryMusicIntegrationAttachmentSnippet.react")
        },
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d _4p_r"]])
    });
    h.set("video_share_youtube", {
        componentName: "MercuryVideoShareYoutubeAttachment.react",
        componentLoader: b("JSResource")("MercuryVideoShareYoutubeAttachment.react").__setRef("MercuryShareStyleMap"),
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d"]])
    });
    h.set("rtc_call_log", {
        componentName: "MercuryRTCShareAttachment.react",
        componentLoader: b("JSResource")("MercuryRTCShareAttachment.react").__setRef("MercuryShareStyleMap")
    });
    h.set("fundraiser_person_for_person", {
        componentName: "MercuryFundraiserAttachment.react",
        componentLoader: b("JSResource")("MercuryFundraiserAttachment.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("MercuryFundraiserShareSnippet.react")
        }
    });
    h.set("fundraiser_person_to_charity", {
        componentName: "MercuryFundraiserAttachment.react",
        componentLoader: b("JSResource")("MercuryFundraiserAttachment.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("MercuryFundraiserShareSnippet.react")
        }
    });
    h.set("crisis_listing", {
        componentName: "MercuryCrisisListingAttachment.react",
        componentLoader: b("JSResource")("MercuryCrisisListingAttachment.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("MercuryCrisisListingShareSnippet.react")
        }
    });
    h.set("messenger_team_bot_share", {
        componentName: "MessengerTeamBotShareAttachment.react",
        componentLoader: b("JSResource")("MessengerTeamBotShareAttachment.react").__setRef("MercuryShareStyleMap")
    });
    h.set("messenger_invite", {
        componentName: "MercuryMessengerInviteShareAttachment.react",
        componentLoader: b("JSResource")("MercuryMessengerInviteShareAttachment.react").__setRef("MercuryShareStyleMap"),
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_3thf"]]),
        getSnippetComponent: function() {
            return b("MercuryMessengerInviteShareAttachmentSnippet.react")
        },
        unwrapInStory: b("emptyFunction").thatReturnsTrue
    });
    h.set("high_school_community_invite", {
        componentName: "MercuryHighSchoolCommunityInviteAttachment.react",
        componentLoader: b("JSResource")("MercuryHighSchoolCommunityInviteAttachment.react").__setRef("MercuryShareStyleMap"),
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_3y64"]]),
        unwrapInStory: b("emptyFunction").thatReturnsTrue
    });
    h.set("pages_platform_booking_message", {
        componentName: "PagesPlatformBookingMessageAttachment.react",
        componentLoader: b("JSResource")("PagesPlatformBookingMessageAttachment.react").__setRef("MercuryShareStyleMap"),
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d _3fk6"]]),
        unwrapInStory: b("emptyFunction").thatReturnsTrue
    });
    h.set("friend_request", {
        componentName: "MercuryMessengerFriendRequestAttachment.react",
        componentLoader: b("JSResource")("MercuryMessengerFriendRequestAttachment.react").__setRef("MercuryShareStyleMap"),
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d"]]),
        unwrapInStory: b("emptyFunction").thatReturnsTrue
    });
    h.set("cultural_moment_holiday_card", {
        componentName: "MercuryCulturalMomentHolidayCardAttachment.react",
        componentLoader: b("JSResource")("MercuryCulturalMomentHolidayCardAttachment.react").__setRef("MercuryShareStyleMap"),
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_3duc"]]),
        unwrapInStory: b("emptyFunction").thatReturnsTrue
    });
    h.set("pages_platform_lead_gen", {
        componentName: "PagesPlatformLeadGenMercuryShareAttachmentContainer.react",
        componentLoader: b("JSResource")("PagesPlatformLeadGenMercuryShareAttachmentContainer.react").__setRef("MercuryShareStyleMap"),
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_b4_"]]),
        unwrapInStory: b("emptyFunction").thatReturnsTrue
    });
    h.set("lightweight_action", {
        componentName: "MessengerLightweightActionAttachment.react",
        componentLoader: b("JSResource")("MessengerLightweightActionAttachment.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("MessengerLightweightActionSnippet.react")
        },
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d"]])
    });
    h.set("job_search_job_application", {
        componentName: "JobApplicationMessageBubbleWrapperContainer.react",
        componentLoader: b("JSResource")("JobApplicationMessageBubbleWrapperContainer.react").__setRef("MercuryShareStyleMap"),
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d _1zrz"]]),
        unwrapInStory: b("emptyFunction").thatReturnsTrue
    });
    h.set("page_messenger_attachment", {
        componentName: "PageMessengerShareAttachment.react",
        componentLoader: b("JSResource")("PageMessengerShareAttachment.react").__setRef("MercuryShareStyleMap")
    });
    h.set("lead_form_user_info", {
        componentName: "MercuryLeadFormUserInfoShareAttachment.react",
        componentLoader: b("JSResource")("MercuryLeadFormUserInfoShareAttachment.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("MercuryLeadFormUserInfoShareAttachmentSnippet.react")
        }
    });
    h.set("ICE_BREAKER", {
        componentName: "MercuryIceBreakerMessageShareAttachment.react",
        componentLoader: b("JSResource")("MercuryIceBreakerMessageShareAttachment.react").__setRef("MercuryShareStyleMap")
    });
    h.set("wec_message", {
        componentName: "MercuryWECMessageAttachment.react",
        componentLoader: b("JSResource")("MercuryWECMessageAttachment.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("MercuryWECAttachmentSnippet.react")
        }
    });
    h.set("m_birthday_reminder", {
        componentName: "MercuryMBirthdayReminderShareAttachment.react",
        componentLoader: b("JSResource")("MercuryMBirthdayReminderShareAttachment.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("MercuryMBirthdayReminderShareAttachmentSnippet.react")
        }
    });
    h.set("personal_reminder", {
        componentName: "MercuryMPersonalReminderShareAttachment.react",
        componentLoader: b("JSResource")("MercuryMPersonalReminderShareAttachment.react").__setRef("MercuryShareStyleMap")
    });
    h.set("personal_reminder_list", {
        componentName: "MercuryMPersonalRemindersListShareAttachment.react",
        componentLoader: b("JSResource")("MercuryMPersonalRemindersListShareAttachment.react").__setRef("MercuryShareStyleMap")
    });
    h.set("article_message", {
        componentName: "MercuryArticleMessageShareAttachment.react",
        componentLoader: b("JSResource")("MercuryArticleMessageShareAttachment.react").__setRef("MercuryShareStyleMap"),
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d"]])
    });
    h.set("messenger_form_progress_attachment", {
        componentName: "MercuryFormProgressShareAttachment.react",
        componentLoader: b("JSResource")("MercuryFormProgressShareAttachment.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("MercuryFormProgressShareAttachmentSnippet.react")
        },
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d"]])
    });
    h.set("services_generic_admin_text", {
        componentName: "ServicesGenericAdminTextAttachment.react",
        componentLoader: b("JSResource")("ServicesGenericAdminTextAttachment.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("ServicesGenericAdminTextAttachmentSnippet.react")
        }
    });
    h.set("fbpay_offer", {
        componentName: "MecuryMessageOfferShareAttachment.react",
        componentLoader: b("JSResource")("MecuryMessageOfferShareAttachment.react").__setRef("MercuryShareStyleMap")
    });
    h.set("application_share_referral", {
        componentName: "MecuryMessageShareReferralAttachment.react",
        componentLoader: b("JSResource")("MecuryMessageShareReferralAttachment.react").__setRef("MercuryShareStyleMap")
    });
    b("CurrentUser").isWorkUser() && h.set("joinable_call", {
        componentName: "WorkChatCallAttachment.react",
        componentLoader: b("JSResource")("WorkChatCallAttachment.react").__setRef("MercuryShareStyleMap")
    });
    b("CurrentUser").isWorkUser() && h.set("workplace_approvals", {
        componentName: "WorkChatApprovalHeaderAttachment.react",
        componentLoader: b("JSResource")("WorkChatApprovalHeaderAttachment.react").__setRef("MercuryShareStyleMap")
    });
    b("CurrentUser").isWorkUser() && (b("gkx")("1237084") ? h.set("attached_story", {
        componentName: "WorkChatStoryShareAttachment.react",
        componentLoader: b("JSResource")("WorkChatStoryShareAttachment.react").__setRef("MercuryShareStyleMap")
    }) : h.set("attached_story", {
        componentName: "MercuryStoryShareAttachment.react",
        componentLoader: b("JSResource")("MercuryStoryShareAttachment.react").__setRef("MercuryShareStyleMap")
    }));
    b("CurrentUser").isWorkUser() && h.set("avatar", {
        componentName: "MercuryAvatarShareAttachment.react",
        componentLoader: b("JSResource")("MercuryAvatarShareAttachment.react").__setRef("MercuryShareStyleMap")
    });
    b("CurrentUser").isWorkUser() && h.set("unavailable", {
        componentName: "MercuryUnavailableShareAttachment.react",
        componentLoader: b("JSResource")("MercuryUnavailableShareAttachment.react").__setRef("MercuryShareStyleMap")
    });
    h.set("montage_direct", {
        componentName: "MontageDirectAttachment.react",
        componentLoader: b("JSResource")("MontageDirectAttachment.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("MercuryMontageDirectShareSnippet.react")
        },
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_1ti9"]])
    });
    h.set("mentorship_curriculum_step", {
        componentName: "MentorshipCurriculumStepShareAttachment.react",
        componentLoader: b("JSResource")("MentorshipCurriculumStepShareAttachment.react").__setRef("MercuryShareStyleMap")
    });
    h.set("marketplace_generic_admin_text", {
        componentName: "MarketplaceGenericAdminTextAttachment.react",
        componentLoader: b("JSResource")("MarketplaceGenericAdminTextAttachment.react").__setRef("MercuryShareStyleMap")
    });
    h.set("mentorship_discussion_topic_set", {
        componentName: "MentorshipDiscussionTopicSetAttachment.react",
        componentLoader: b("JSResource")("MentorshipDiscussionTopicSetAttachment.react").__setRef("MercuryShareStyleMap")
    });
    h.set("mentorship_h_scroll", {
        componentName: "MentorshipHScrollAttachment.react",
        componentLoader: b("JSResource")("MentorshipHScrollAttachment.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("MercuryPromotionShareAttachmentSnippet.react")
        },
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d _7qm8 _7qmd"]])
    });
    h.set("mentorship_xma", {
        componentName: "MentorshipGenericXMAShareAttachment.react",
        componentLoader: b("JSResource")("MentorshipGenericXMAShareAttachment.react").__setRef("MercuryShareStyleMap")
    });
    b("gkx")("1462436") && h.set("rooms_speakeasy_xma", {
        componentName: "MercuryRTCRoomsRingbackAttachment.react",
        componentLoader: b("JSResource")("MercuryRTCRoomsRingbackAttachment.react").__setRef("MercuryShareStyleMap")
    });
    b("CurrentUser").isWorkUser() && b("gkx")("990297") && h.set("file_upload", {
        componentName: "MercuryWorkContentAppShareAttachment.react",
        componentLoader: b("JSResource")("MercuryWorkContentAppShareAttachment.react").__setRef("MercuryShareStyleMap")
    });
    b("cr:1030824") !== null && h.set("montage_share", b("cr:1030824"));
    h.set("shop_product_item", {
        componentName: "MercuryShopProductItemShareAttachment.react",
        componentLoader: b("JSResource")("MercuryShopProductItemShareAttachment.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("MercuryFallbackShareAttachmentSnippet.react")
        },
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d _99al"]]),
        unwrapInStory: b("emptyFunction").thatReturnsTrue,
        overrideWidthInHScroll: 242
    });
    h.set("shop_order_updates", {
        componentName: "MercuryShopOrderUpdatesAttachment.react",
        componentLoader: b("JSResource")("MercuryShopOrderUpdatesAttachment.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("MercuryFallbackShareAttachmentSnippet.react")
        },
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d _9ehl"]]),
        unwrapInStory: b("emptyFunction").thatReturnsTrue
    });
    h.set("shop_order_updates_collapsed", {
        componentName: "MercuryShopOrderUpdatesCollapsedAttachment.react",
        componentLoader: b("JSResource")("MercuryShopOrderUpdatesCollapsedAttachment.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("MercuryFallbackShareAttachmentSnippet.react")
        },
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d _9ezf"]]),
        unwrapInStory: b("emptyFunction").thatReturnsTrue
    });
    b("gkx")("1711579") && h.set("messenger_generic_template", {
        componentName: "GenericXmaTemplateAttachment.react",
        componentLoader: b("JSResource")("GenericXmaTemplateAttachment.react").__setRef("MercuryShareStyleMap"),
        getSnippetComponent: function() {
            return b("MercuryFallbackShareAttachmentSnippet.react")
        },
        cx: new Map([[b("MercuryShareAttachmentRenderLocations").MESSENGER, "_5i_d _9h8l"]]),
        unwrapInStory: b("emptyFunction").thatReturnsTrue,
        overrideWidthInHScroll: 242
    });
    function a(a) {
        if (!a || !a.style_list)
            return null;
        if (a.style_list[0] === "attached_story") {
            var b = a.subattachments
              , c = b && b.length ? b[0].style_list : []
              , d = c.length ? this._getStyleMapEntry(c) : null
              , e = b[0];
            if (Array.isArray(c) && c.find(function(a) {
                return a === "video"
            })) {
                c = {
                    video_title: a.title,
                    description: a.description,
                    source: a.source
                };
                e = Object.assign({}, b[0], c)
            }
            if (d && d.unwrapInStory && d.unwrapInStory())
                return {
                    attachment: e,
                    factory: d
                }
        }
        b = this._getStyleMapEntry(a.style_list);
        a.style_list[0] === "payment_platform" && a.target.should_show_new_xma && (b = this._getStyleMapEntry(["payment_platform_redesigned", "fallback"]));
        return !b ? null : {
            attachment: a,
            factory: b
        }
    }
    function c(a) {
        for (var b = 0; b < a.length; b++) {
            var c = h.get(a[b]);
            if (c)
                return c
        }
        return null
    }
}
), null);
__d("MessengerErrorBoundary.react", ["cx", "fbt", "ChatReliabilityInstrumentation", "ErrorBoundary.react", "LogHistory", "React", "joinClasses"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React")
      , j = b("LogHistory").getInstance("messenger_error_boundary")
      , k = function(a) {
        return h._({
            "conversation list": "Kh\u00f4ng th\u1ec3 hi\u1ec3n th\u1ecb danh s\u00e1ch cu\u1ed9c tr\u00f2 chuy\u1ec7n.",
            "conversation": "Kh\u00f4ng th\u1ec3 hi\u1ec3n th\u1ecb cu\u1ed9c tr\u00f2 chuy\u1ec7n.",
            "composer": "Kh\u00f4ng th\u1ec3 hi\u1ec3n th\u1ecb tr\u00ecnh bi\u00ean so\u1ea1n.",
            "conversation information": "Kh\u00f4ng th\u1ec3 hi\u1ec3n th\u1ecb th\u00f4ng tin v\u1ec1 cu\u1ed9c tr\u00f2 chuy\u1ec7n.",
            "attachment": "Kh\u00f4ng th\u1ec3 hi\u1ec3n th\u1ecb t\u1ec7p \u0111\u00ednh k\u00e8m.",
            "pinned conversation list": "Kh\u00f4ng th\u1ec3 hi\u1ec3n th\u1ecb danh s\u00e1ch cu\u1ed9c tr\u00f2 chuy\u1ec7n \u0111\u00e3 ghim.",
            "video": "Kh\u00f4ng th\u1ec3 hi\u1ec3n th\u1ecb video."
        }, [h._enum(a, {
            "conversation list": "conversation list",
            conversation: "conversation",
            composer: "composer",
            "conversation information": "conversation information",
            attachment: "attachment",
            "pinned conversation list": "pinned conversation list",
            video: "video"
        })])
    }
      , l = function(a, c) {
        return function() {
            return i.jsx("div", {
                className: b("joinClasses")("_5jpt", c),
                children: a
            })
        }
    };
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$1 = function(a, c) {
                var e = "React error in " + c + " got " + a.message;
                j.error(e, JSON.stringify(a));
                b("ChatReliabilityInstrumentation").logERROR(e);
                d.props.onHandleError && d.props.onHandleError(a, c)
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props
              , c = a.className;
            a = a.component;
            return i.jsx(b("ErrorBoundary.react"), {
                fallback: l(k(a), c),
                onError: this.$1,
                children: this.props.children
            })
        }
        ;
        return c
    }(i.Component);
    e.exports = a
}
), null);
__d("MercuryShareAttachment.react", ["cx", "BootloadedComponent.react", "DOM", "Event", "FlexLayout.react", "MercuryShareAttachmentReactShape", "MercuryShareAttachmentRenderLocations", "MercuryShareStyleMap", "MessengerErrorBoundary.react", "React", "ReactDOM", "WorkChatRedesignedMessageListCheck.re", "emptyFunction", "joinClasses", "prop-types"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$3 = function(a) {
                d.$1(a),
                b("DOM").scry(b("ReactDOM").findDOMNode(babelHelpers.assertThisInitialized(d)), "img").forEach(function(a) {
                    var c = b("Event").listen(a, "load", function() {
                        d.$1(a.height),
                        c.remove()
                    })
                })
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            this.$1()
        }
        ;
        d.$2 = function(a, c) {
            this.props.location === b("MercuryShareAttachmentRenderLocations").MESSENGER && !this.props.isSubattachment && (c = b("joinClasses")((b("WorkChatRedesignedMessageListCheck.re").enabled ? "" : "_52mr") + " _2poz _ui9", "_4skb", c));
            return h.jsxs("div", {
                className: c,
                children: [a, this.props.afterDecorators != null && this.props.afterDecorators.length > 1 ? h.jsx(b("FlexLayout.react"), {
                    align: "center",
                    className: "_7moe",
                    children: this.props.afterDecorators
                }) : this.props.afterDecorators]
            })
        }
        ;
        d.render = function() {
            var a = b("MercuryShareStyleMap").getStyleFactory(this.props.attachment);
            if (!a)
                return null;
            var c = a.attachment;
            a = a.factory;
            return this.$2(h.jsx(b("MessengerErrorBoundary.react"), babelHelpers["extends"]({}, this.props, {
                component: "attachment",
                children: h.createElement(b("BootloadedComponent.react"), babelHelpers["extends"]({}, this.props, {
                    attachment: c,
                    bootloadLoader: a.componentLoader,
                    bootloadPlaceholder: h.jsx("div", {}),
                    key: (c = this) != null ? (c = c.props) != null ? (c = c.attachment) != null ? c.share_id : c : c : c,
                    module: a.componentName,
                    onComponentLoad: this.$3
                }))
            })), a.cx && a.cx.get(this.props.location))
        }
        ;
        d.$1 = function(a) {
            this.props.onComponentLoaded(a)
        }
        ;
        return c
    }(h.Component);
    e.exports = a;
    a.propTypes = {
        attachment: b("MercuryShareAttachmentReactShape"),
        isFromViewer: (c = b("prop-types")).bool,
        isPageMessage: c.bool,
        isSponsored: c.bool,
        isSubattachment: c.bool,
        isVisible: c.bool,
        location: c.oneOf(b("MercuryShareAttachmentRenderLocations").getValues()),
        messageID: c.string,
        onComponentLoaded: c.func.isRequired,
        onSelect: c.func,
        pageID: c.string,
        threadID: c.string.isRequired,
        afterDecorators: c.array,
        timestamp: c.number,
        author: c.string,
        thread: c.object
    };
    a.defaultProps = {
        onComponentLoaded: b("emptyFunction")
    }
}
), null);
__d("MessengerErrorAttachment.react", ["cx", "fbt", "CurrentUser", "React"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props.attachment.error_msg || h._("Kh\u00f4ng th\u1ec3 t\u1ea3i t\u1ec7p \u0111\u00ednh k\u00e8m n\u00e0y.");
            return i.jsx("div", {
                className: "_1o12 _52mr",
                children: i.jsxs("div", {
                    className: "_1o13",
                    children: [a, this.$1()]
                })
            })
        }
        ;
        d.$1 = function() {
            return !this.props.attachment.error_msg && b("CurrentUser").isEmployee() && b("CurrentUser").hasWorkUser() && !b("CurrentUser").isWorkUser() ? i.jsx("div", {
                children: h._("T\u1ec7p \u0111\u00ednh k\u00e8m c\u00f3 th\u1ec3 d\u00e0nh cho t\u00e0i kho\u1ea3n \u0040workplace c\u1ee7a b\u1ea1n.")
            }) : null
        }
        ;
        return c
    }(i.PureComponent);
    e.exports = a
}
), null);
__d("MessengerFileAttachment.bs", ["cx", "React", "Link.react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function a(a) {
        a = a.attachment;
        var c = a.name;
        c = c == null ? null : c;
        a = a.url;
        if (a == null)
            return null;
        else
            return h.jsxs(b("Link.react"), {
                className: "_4pcn _2uf4",
                href: a.toString(),
                target: "_blank",
                children: [h.jsx("div", {
                    className: "_2uf5"
                }), c]
            })
    }
    c = a;
    f.make = c
}
), null);
__d("MessengerFileAttachment.re", ["MessengerFileAttachment.bs"], (function(a, b, c, d, e, f) {
    (function(a) {
        return null
    }
    );
    a = b("MessengerFileAttachment.bs").make;
    f.make = a
}
), null);
__d("MessengerFromViewerUtils", ["CurrentUser", "MercuryIDs"], (function(a, b, c, d, e, f) {
    "use strict";
    f.isFromViewer = a;
    function a(a) {
        return a.author === b("MercuryIDs").getParticipantIDFromUserID(b("CurrentUser").getID())
    }
}
), null);
__d("MessengerHotLikePreview.react", ["cx", "Animation", "ChatConfig", "CurrentUser", "EmojiLikeConstants", "HotLikeSound", "MercuryShareAttachmentRenderLocations", "MessengerDotComAndInboxM4Check.bs", "MessengerHotLikeIconSVGM4React.bs", "MessengerHotLikePreviewEvents", "MessengerHotLikeSVGReact.re", "MessengerHotLikeUtils", "MessengerSupportedEmojiUtils", "React", "ReactDOM", "StickerConstants", "SubscriptionsHandler", "gkx", "prop-types"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("MessengerHotLikeIconSVGM4React.bs").makeWithGradient
      , i = b("MessengerHotLikeSVGReact.re").make
      , j = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$5 = function() {
                d.$6 = new (b("Animation"))(b("ReactDOM").findDOMNode(babelHelpers.assertThisInitialized(d))),
                (!b("ChatConfig").getBool("chat_tab_has_gradients") || d.props.location === b("MercuryShareAttachmentRenderLocations").MESSENGER) && (d.$7(-2, 2, 150, 1e3),
                d.$7(-4, 4, 100, 1e3),
                d.$7(-10, 10, 75, 1e3)),
                d.$6.go()
            }
            ,
            d.$2 = function(a, c) {
                var e = c ? b("MessengerHotLikePreviewEvents").FINISH_EMOJI_ANIMATION : b("MessengerHotLikePreviewEvents").FINISH_ANIMATION;
                if (d.$8)
                    return;
                d.$8 = !0;
                c = Date.now() - d.props.since;
                var f = null;
                d.props.customLike && (f = b("MessengerHotLikeUtils").getEmojiSizeForTime(c));
                var g = b("MessengerHotLikeUtils").getStickerIDForTime(c);
                b("HotLikeSound").snap(g);
                c = b("MessengerHotLikeUtils").getMetadataForHotLike(f || g);
                d.$6.stop();
                var h = 30
                  , i = -10;
                (g === b("StickerConstants").HOT_LIKE_SMALL_STICKER_ID || b("ChatConfig").getBool("chat_tab_has_gradients")) && (h = 0,
                i = 0);
                d.$4.stop().to("width", c.width * 1.2).to("height", c.height * 1.2).to("rotateZ", h).duration(100).checkpoint().to("width", c.width * .9).to("height", c.height * .9).to("rotateZ", i).duration(100).checkpoint().to("width", c.width).to("height", c.height).to("rotateZ", 0).duration(100).ondone(function() {
                    d.props.forGameChat || b("MessengerHotLikePreviewEvents").emit(e, a, g, f)
                }).go()
            }
            ,
            d.$3 = function(a) {
                b("HotLikeSound").pop(),
                d.$4.stop().to("width", 0).to("height", 0).duration(100).ondone(function() {
                    b("MessengerHotLikePreviewEvents").emit(b("MessengerHotLikePreviewEvents").REMOVE, a)
                }).go()
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            var a;
            this.$1 = new (b("SubscriptionsHandler"))();
            this.$1.addSubscriptions((a = b("MessengerHotLikePreviewEvents")).addListener(a.STOP, this.$2), a.addListener(a.STOP_EMOJI, this.$2), a.addListener(a.POP, this.$3));
            b("HotLikeSound").start();
            this.$4 = new (b("Animation"))(b("ReactDOM").findDOMNode(this)).to("width", 80).to("height", 80).duration(3e3).go();
            this.$5()
        }
        ;
        d.componentWillUnmount = function() {
            this.$1 && this.$1.release()
        }
        ;
        d.render = function() {
            if (this.props.customLike) {
                var a = this.props.customLike
                  , c = b("MessengerSupportedEmojiUtils").getNewEmojiData(a.emoji, b("EmojiLikeConstants").size.LARGE);
                c = c ? c.url : this.props.customLike.large;
                a.uri && (c = a.uri);
                return j.jsx("div", {
                    className: "_4a9g _383m",
                    style: {
                        backgroundImage: "url(" + c + ")"
                    }
                })
            }
            a = (b("gkx")("1072568") || !b("CurrentUser").isWorkUser()) && this.props.thread != null ? j.jsx(h, {
                thread: this.props.thread
            }) : j.jsx(i, {
                color: this.props.customColor
            });
            return j.jsx("div", {
                className: "_4a9g _576q",
                children: a
            })
        }
        ;
        d.$7 = function(a, b, c, d) {
            d = Math.floor(d / c);
            var e;
            for (var f = 0; f < d; f++)
                e = f % 2 ? a : b,
                this.$6.to("rotateZ", e).duration(c).checkpoint()
        }
        ;
        return c
    }(j.Component);
    a.propTypes = {
        customLike: b("prop-types").object,
        forGameChat: b("prop-types").bool,
        since: b("prop-types").number
    };
    e.exports = a
}
), null);
__d("ChatSpeakingStickerReact.bs", ["ReasonReact.bs", "ChatSpeakingSticker.react"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a, c, d) {
        return b("ReasonReact.bs").wrapJsForReason(b("ChatSpeakingSticker.react"), {
            videoURI: a,
            videoSize: c
        }, d)
    }
    f.make = a
}
), null);
__d("MercuryAttachmentPayload.bs", ["bs_caml_option"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a, c, d) {
        c = c !== void 0 ? b("bs_caml_option").valFromOption(c) : null;
        return {
            app_attribution: null,
            attach_type: a,
            blurred_image_uri: null,
            deduplication_key: null,
            description: null,
            icon_type: null,
            key: c,
            large_preview_height: null,
            large_preview_width: null,
            large_preview_url: null,
            media: null,
            metadata: null,
            message_file_fbid: null,
            name: null,
            photo_encodings: null,
            preview_height: null,
            preview_uploading: null,
            preview_url: null,
            preview_width: null,
            rel: null,
            share: null,
            source: null,
            target: null,
            thumbnail_url: null,
            upload_id: null,
            uri: null,
            url: d,
            video_title: null
        }
    }
    f.create = a
}
), null);
__d("MessagesViewerSetID", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        MESSAGES: "messages",
        MESSAGES_VIEW_ALL_IN_THREAD: "messages:view_all_in_thread"
    });
    e.exports = a
}
), null);
__d("MessagesViewer", ["AsyncRequest", "DOM", "PhotoStore", "React", "ReactDOM", "ge"], (function(a, b, c, d, e, f) {
    var g = b("React");
    a = {
        renderSpotlight: function(a, c, d, e) {
            var f = a.setID;
            f || (f = "messages");
            h(g.jsx(d, {
                actorid: a.actorid,
                dimensions: [a.dimensions],
                disablepaging: a.disablePaging,
                disableForward: a.disableForward,
                forwardDialogComponent: e,
                open: !0,
                photoid: a.fbid,
                reverse: !1,
                rootClassName: a.rootClassName,
                setid: f,
                snapToPhoto: a.snapToPhoto,
                thumbsrc: a.src
            }));
            if (!b("PhotoStore").hasBeenCreated(f) && a.endpoint) {
                d = new (b("AsyncRequest"))(a.endpoint);
                c && d.setRelativeTo(c);
                d.send()
            }
        },
        renderVideo: function(a) {
            h(a)
        }
    };
    function h(a) {
        var c = b("ge")("messages_viewer");
        c || (c = b("DOM").create("div", {
            id: "messages_viewer"
        }),
        document.body.appendChild(c));
        b("ReactDOM").render(a, c, function() {
            this.subscribeOnce("close", function() {
                b("ReactDOM").unmountComponentAtNode(c)
            })
        })
    }
    e.exports = a
}
), null);
__d("MessengerAttachmentViewer", ["Bootloader", "MessagesViewer", "React", "Run", "emptyFunction"], (function(a, b, c, d, e, f) {
    "use strict";
    f.renderVideo = a;
    f.bootstrapWithConfig = c;
    f.preload = d;
    var g = b("React");
    function a(a) {
        b("Bootloader").loadModules(["MessagingVideoViewer.react", "MessengerForwardAttachmentDialogReact.bs"], function(c, d) {
            d = d.jsComponent;
            b("MessagesViewer").renderVideo(g.jsx(c, babelHelpers["extends"]({}, a, {
                forwardDialogComponent: d
            })))
        }, "MessengerAttachmentViewer")
    }
    function c(a, c) {
        b("Bootloader").loadModules(["SpotlightMessagesViewer", "MessengerForwardAttachmentDialogReact.bs"], function(d, e) {
            e = e.jsComponent;
            b("MessagesViewer").renderSpotlight(a, c, d, e)
        }, "MessengerAttachmentViewer")
    }
    function d() {
        b("Run").onAfterLoad(function() {
            b("Bootloader").loadModules(["MessagingVideoViewer.react", "SpotlightMessagesViewer", "MessengerForwardAttachmentDialogReact.bs"], b("emptyFunction"), "MessengerAttachmentViewer")
        })
    }
}
), null);
__d("MessengerBusinessHideImageBootloaded.react", ["cx", "CssBackgroundImage.react", "ErrorBoundary.react", "JSResource", "React", "lazyLoadComponent"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = b("lazyLoadComponent")(b("JSResource")("MessengerBusinessHideImage.react").__setRef("MessengerBusinessHideImageBootloaded.react"));
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            return h.jsx(b("ErrorBoundary.react"), {
                children: h.jsx(h.Suspense, {
                    fallback: h.jsx(b("CssBackgroundImage.react"), {
                        backgroundPosition: "center",
                        imageURI: this.props.thumbnail,
                        className: "_3v3t"
                    }),
                    children: h.jsx(i, {
                        fbid: this.props.fbid,
                        renderSmall: this.props.renderSmall
                    })
                })
            })
        }
        ;
        return c
    }(h.Component);
    e.exports = a
}
), null);
__d("MessengerBusinessHideImageReact.bs", ["ReasonReact.bs", "bs_js_null_undefined", "MessengerBusinessHideImageBootloaded.react"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a, c, d, e) {
        return b("ReasonReact.bs").wrapJsForReason(b("MessengerBusinessHideImageBootloaded.react"), {
            fbid: b("bs_js_null_undefined").fromOption(a),
            renderSmall: d,
            thumbnail: b("bs_js_null_undefined").fromOption(c)
        }, e)
    }
    f.make = a
}
), null);
__d("SphericalPhotoViewerInMessengerThreadBootloaded.react", ["cx", "BootloadedComponent.react", "CssBackgroundImage.react", "JSResource", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            if (this.props.photoEncodings && this.props.thumbnail) {
                var a = this.props.photoEncodings.find(function(a) {
                    return a.projection_type === "perspective"
                })
                  , c = null
                  , d = null;
                if (a && a.thumbnails && a.thumbnails.length > 0) {
                    a = a.thumbnails;
                    c = a[0] ? a[0].uri : null;
                    d = a[1] ? a[1].uri : null
                }
                if (this.props.useRenderer && this.props.width && this.props.height && this.props.fbid) {
                    a = d || c || this.props.thumbnail;
                    return h.jsx(b("BootloadedComponent.react"), {
                        bootloadLoader: b("JSResource")("SphericalPhotoViewerInMessengerThreadWrapper.react").__setRef("SphericalPhotoViewerInMessengerThreadBootloaded.react"),
                        bootloadPlaceholder: h.jsx(b("CssBackgroundImage.react"), {
                            backgroundPosition: "center",
                            imageURI: a,
                            className: "_3v3t"
                        }),
                        height: this.props.height,
                        width: this.props.width,
                        fbid: this.props.fbid,
                        thumbnail: a,
                        photoEncodings: this.props.photoEncodings,
                        isVisible: this.props.isVisible,
                        onClickHandler: this.props.onClickHandler
                    })
                } else {
                    a = c || d || this.props.thumbnail;
                    return h.jsx(b("BootloadedComponent.react"), {
                        bootloadLoader: b("JSResource")("SphericalPhotoMessengerThumbnail.react").__setRef("SphericalPhotoViewerInMessengerThreadBootloaded.react"),
                        bootloadPlaceholder: h.jsx(b("CssBackgroundImage.react"), {
                            backgroundPosition: "center",
                            imageURI: a,
                            className: "_3v3t"
                        }),
                        photoEncodings: this.props.photoEncodings,
                        thumbnail: a
                    })
                }
            }
            return null
        }
        ;
        return c
    }(h.Component);
    e.exports = a
}
), null);
__d("MessengerSphericalPhotoReact.bs", ["Utils.bs", "ReasonReact.bs", "bs_js_null_undefined", "SphericalPhotoViewerInMessengerThreadBootloaded.react"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a, c, d, e, f, g, h, i, j) {
        var k;
        return b("ReasonReact.bs").wrapJsForReason(b("SphericalPhotoViewerInMessengerThreadBootloaded.react"), {
            height: (k = b("bs_js_null_undefined")).fromOption(a),
            width: k.fromOption(c),
            fbid: k.fromOption(d),
            thumbnail: k.fromOption(e),
            photoEncodings: k.fromOption(f),
            isVisible: b("Utils.bs").optionBoolToBool(g),
            onClickHandler: h,
            useRenderer: i
        }, j)
    }
    f.make = a
}
), null);
__d("MessengerPhotoReact.bs", ["cx", "fbt", "bs_curry", "Image.bs", "React", "Utils.bs", "gkx", "bs_caml_array", "cssURL", "Link.react", "bs_caml_option", "ReasonReact.bs", "joinClasses", "bs_caml_primitive", "MercurySourceType", "MercuryAttachmentType", "MessengerSpinnerReact.bs", "MessengerSourceContext.bs", "bs_caml_builtin_exceptions", "MessengerSurfaceQuickChat.bs", "MessengerSphericalPhotoReact.bs", "MessengerBusinessHideImageReact.bs"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    function j(a, c) {
        var d = a.metadata;
        if (d == null)
            return null;
        else if (a.attach_type === b("MercuryAttachmentType").VIDEO)
            if (c && !(d.large_preview == null))
                return d.large_preview;
            else
                return d.inbox_preview;
        else if (c)
            return a.large_preview_url;
        else
            return a.preview_url
    }
    function k(a) {
        if (a == null)
            return [null, null];
        else
            return [a.width, a.height]
    }
    function l(a) {
        var c = window.screen.width > 1800;
        if (b("Utils.bs").isTruthy(a.preview_uploading)) {
            var d = function(a, b) {
                if (a == null)
                    return b;
                else
                    return a
            };
            if (c && !(a.large_preview_url == null))
                return {
                    width: d(a.large_preview_width, 480),
                    height: d(a.large_preview_height, 480),
                    src: a.large_preview_url,
                    renderLargePreview: c
                };
            else
                return {
                    width: d(a.preview_width, 280),
                    height: d(a.preview_height, 280),
                    src: a.preview_url,
                    renderLargePreview: c
                }
        } else {
            d = j(a, c);
            var e = !(d == null)
              , f = a.metadata;
            if (e && !(f == null)) {
                e = c && !(f.large_size == null) ? f.large_size : f.inbox_size;
                f = k(e);
                return {
                    width: f[0],
                    height: f[1],
                    src: d,
                    renderLargePreview: c
                }
            }
            if (a.preview_url == null) {
                e = a.media;
                if (e == null)
                    return;
                else if (!(e.playable == null) && !(e.animated_image == null)) {
                    f = k(e.animated_image_size);
                    return {
                        width: f[0],
                        height: f[1],
                        src: e.animated_image,
                        renderLargePreview: c
                    }
                } else {
                    d = k(e.image_size);
                    return {
                        width: d[0],
                        height: d[1],
                        src: e.image,
                        renderLargePreview: c
                    }
                }
            } else if (c && !(a.large_preview_url == null))
                return {
                    width: a.large_preview_width,
                    height: a.large_preview_height,
                    src: a.large_preview_url,
                    renderLargePreview: c
                };
            else
                return {
                    width: a.preview_width,
                    height: a.preview_height,
                    src: a.preview_url,
                    renderLargePreview: c
                }
        }
    }
    function m(a) {
        var c = function(a) {
            return "" + (String(a) + "")
        };
        if (b("Utils.bs").isTruthy(a.preview_uploading))
            return c(a.preview_url == null ? 280 : 0);
        else {
            var d = function(a) {
                var b = a[1];
                a = a[0];
                if (!(a == null) && !(b == null))
                    return [a, b]
            }
              , e = function(a) {
                if (a !== void 0) {
                    a = a;
                    return d([a.width, a.height])
                }
            };
            e = a.media == null ? d([a.preview_width, a.preview_height]) : e(l(a));
            if (e !== void 0) {
                a = e;
                return c(b("bs_caml_primitive").caml_float_min(a[1] * b("bs_caml_primitive").caml_float_min(1, 450 / a[0]), 450))
            } else
                return
        }
    }
    function n(a, b) {
        if (b > 480)
            return [a * 480 / b, 480];
        else
            return [a, b]
    }
    function o(a) {
        var c = a.metadata
          , d = a.isAnimated
          , e = a.className
          , f = a.attachment;
        a = a.isSingle;
        var g = i.useContext(b("MessengerSourceContext.bs").context);
        g = g === b("MercurySourceType").MESSENGER_ROOM_INCALL_CHAT || g === b("MercurySourceType").WORK_ROOM_INCALL_CHAT;
        var h = b("MessengerSurfaceQuickChat.bs").useIsQuickChatSurface(0);
        b("Utils.bs").isTruthy(f.preview_uploading);
        var j = c.src;
        if (j == null || !a)
            return null;
        else {
            a = c.renderLargePreview ? window.screen.height * .7 : window.screen.height * .65;
            c = h || g ? {
                maxHeight: "" + (String(a) + ""),
                maxWidth: "160px",
                width: "100%"
            } : {
                maxHeight: "" + (String(a) + ""),
                maxWidth: "100%",
                width: "100%"
            };
            var k;
            if (h || g)
                k = {
                    maxWidth: "160px"
                };
            else {
                a = f.preview_width;
                h = f.preview_height;
                g = b("gkx")("1709618");
                if (a == null)
                    k = c;
                else {
                    f = 0;
                    if (h == null || !g)
                        f = 1;
                    else {
                        h = n(a, h);
                        k = {
                            height: b("bs_caml_array").caml_array_get(h, 1).toString() + "px",
                            maxHeight: 480..toString() + "px",
                            maxWidth: "100%",
                            width: b("bs_caml_array").caml_array_get(h, 0).toString() + "px"
                        }
                    }
                    f === 1 && (k = g ? c : {
                        maxWidth: "100%",
                        width: a.toString() + "px"
                    })
                }
            }
            return i.jsx("div", {
                children: b("ReasonReact.bs").element(void 0, void 0, b("Image.bs").make(b("joinClasses")(e, d ? "" : "_5pf5"), "", void 0, void 0, j, void 0, void 0, void 0, b("bs_caml_option").some(c), [])),
                style: k
            })
        }
    }
    function a(a) {
        var c = a.className
          , d = a.attachment
          , e = a.isSingle
          , f = a.isVisible
          , g = a.onAttachmentLoad
          , j = a.onClick;
        a = a.children;
        c = c !== void 0 ? c : "";
        i.useEffect(function() {
            g !== void 0 && b("bs_curry")._1(g, 0);
            return
        }, []);
        var k = l(d);
        if (k !== void 0) {
            k = k;
            var n = d.attach_type === b("MercuryAttachmentType").ANIMATED_IMAGE
              , p = !(d.app_attribution == null)
              , q = d.photo_encodings;
            q = q == null ? !1 : q.length !== 0;
            var r = d.blurred_image_uri;
            r = !(r == null);
            if ((!n || !e) && !q) {
                var s = k.src;
                s = s == null ? void 0 : b("cssURL")(s);
                var t = e ? m(d) : void 0;
                s = [s, t]
            } else
                s = [void 0, void 0];
            t = {};
            var u = s[0];
            u !== void 0 && (t.backgroundImage = b("bs_caml_option").valFromOption(u));
            u = s[1];
            u !== void 0 && (t.minHeight = b("bs_caml_option").valFromOption(u));
            s = t;
            u = b("Utils.bs").isTruthy(d.preview_uploading) ? i.jsx("span", {
                children: i.createElement(b("MessengerSpinnerReact.bs").make, {}),
                className: "_7atr"
            }) : null;
            t = n ? b("MercuryAttachmentType").ANIMATED_IMAGE : void 0;
            var v = function(a) {
                if (j !== void 0)
                    return b("bs_curry")._1(j, d);
                else
                    return 0
            }
              , w = function(a) {
                a.preventDefault();
                return v(0)
            };
            if (q) {
                var x = k.src, y = d.metadata, z;
                if (y == null)
                    z = void 0;
                else {
                    y = y.fbid;
                    z = y == null ? void 0 : b("bs_caml_option").some(y)
                }
                y = d.photo_encodings;
                z = b("ReasonReact.bs").element(void 0, void 0, b("MessengerSphericalPhotoReact.bs").make(400, 400, z, x == null ? void 0 : b("bs_caml_option").some(x), y == null ? void 0 : b("bs_caml_option").some(y), f, v, e, []))
            } else if (r) {
                x = d.metadata;
                if (x == null)
                    y = void 0;
                else {
                    f = x.fbid;
                    y = f == null ? void 0 : b("bs_caml_option").some(f)
                }
                x = k.src;
                z = b("ReasonReact.bs").element(void 0, void 0, b("MessengerBusinessHideImageReact.bs").make(y, x == null ? void 0 : b("bs_caml_option").some(x), !1, []))
            } else
                z = i.createElement(o, {
                    metadata: k,
                    isAnimated: e && n,
                    className: (p ? "_mxz" : "") + (e && !p ? " _52mr" : "") + (e && !p ? " _1byr" : ""),
                    attachment: d,
                    isSingle: e
                });
            if (r)
                f = null;
            else {
                y = {
                    "aria-label": h._("M\u1edf \u1ea3nh"),
                    className: "_4tsl",
                    children: a
                };
                x = b("bs_caml_option").nullable_to_opt(k.src);
                x !== void 0 && (y.href = b("bs_caml_option").valFromOption(x));
                f = i.createElement(b("Link.react"), y)
            }
            return i.cloneElement(i.jsxs("div", {
                children: [i.jsx("div", {
                    className: q && !e ? "_64ks" : ""
                }), f, z, u],
                className: b("joinClasses")(c, "_4tsk" + (p ? " _mxz" : "") + (e && !p ? " _52mr" : "") + (e && !p ? " _1byr" : "") + (b("Utils.bs").isTruthy(d.preview_uploading) && k.src == null ? " _3etv" : "") + (q && !e ? " _3603" : "")),
                role: "presentation",
                style: s,
                onClick: w
            }), {
                "data-testid": t
            })
        } else
            return null
    }
    c = 280;
    d = 480;
    e = 1800;
    g = 450;
    var p = o;
    a = a;
    f.preview_thumbnail_size = c;
    f.preview_large_size = d;
    f.large_window_width = e;
    f.max_photo_width = g;
    f.getSrcFromAttachment = j;
    f.sizeToWidthHeight = k;
    f.extractPreviewMetadata = l;
    f.getMinHeightForAttachment = m;
    f.computeDimensions = n;
    f.getImageFromMetadata = p;
    f.make = a
}
), null);
__d("MessengerSharedMediaActions", ["MessengerFluxReduceDispatcher", "keyMirror"], (function(a, b, c, d, e, f) {
    "use strict";
    f.currentLoaded = a;
    f.deletePhotos = c;
    f.loadCurrent = d;
    f.loadMorePrevious = e;
    f.loadMoreLatest = i;
    f.previousLoaded = j;
    f.latestLoaded = k;
    var g = b("keyMirror")({
        CURRENT_LOADED: null,
        DELETE_PHOTOS: null,
        LATEST_LOADED: null,
        LOAD_CURRENT: null,
        LOAD_MORE_LATEST: null,
        LOAD_MORE_PREVIOUS: null,
        PREVIOUS_LOADED: null
    });
    f.Types = g;
    var h = "MessengerSharedMedia";
    f.Namespace = h;
    function a(a) {
        b("MessengerFluxReduceDispatcher").dispatch({
            type: g.CURRENT_LOADED,
            namespace: h,
            data: a
        })
    }
    function c(a, c) {
        b("MessengerFluxReduceDispatcher").dispatch({
            type: g.DELETE_PHOTOS,
            namespace: h,
            threadFBID: a,
            photoFBIDs: c
        })
    }
    function d(a, c) {
        b("MessengerFluxReduceDispatcher").dispatch({
            type: g.LOAD_CURRENT,
            namespace: h,
            threadFBID: a,
            photoID: c
        })
    }
    function e(a, c, d) {
        b("MessengerFluxReduceDispatcher").dispatch({
            type: g.LOAD_MORE_PREVIOUS,
            namespace: h,
            threadFBID: a,
            afterCursor: c,
            first: d
        })
    }
    function i(a, c, d) {
        b("MessengerFluxReduceDispatcher").dispatch({
            type: g.LOAD_MORE_LATEST,
            namespace: h,
            threadFBID: a,
            beforeCursor: c,
            last: d
        })
    }
    function j(a) {
        b("MessengerFluxReduceDispatcher").dispatch({
            type: g.PREVIOUS_LOADED,
            namespace: h,
            data: a
        })
    }
    function k(a) {
        b("MessengerFluxReduceDispatcher").dispatch({
            type: g.LATEST_LOADED,
            namespace: h,
            data: a
        })
    }
}
), null);
__d("MessengerThreadSharedMediaAfterWebGraphQLQuery", ["WebGraphQLQueryBase"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        b.__getDocID = function() {
            return "1668947383157276"
        }
        ;
        b.getQueryID = function() {
            return "515216185516880"
        }
        ;
        return b
    }(b("WebGraphQLQueryBase"))
}
), null);
__d("MessengerThreadSharedMediaBeforeWebGraphQLQuery", ["WebGraphQLQueryBase"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        b.__getDocID = function() {
            return "1712143858865110"
        }
        ;
        b.getQueryID = function() {
            return "1694317194012102"
        }
        ;
        return b
    }(b("WebGraphQLQueryBase"))
}
), null);
__d("MessengerThreadSharedMediaFindWebGraphQLQuery", ["WebGraphQLQueryBase"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        b.__getDocID = function() {
            return "1933185426727404"
        }
        ;
        b.getQueryID = function() {
            return "237087923629184"
        }
        ;
        return b
    }(b("WebGraphQLQueryBase"))
}
), null);
__d("MessengerSharedMediaReducer", ["MessengerSharedMediaActions", "MessengerThreadSharedMediaHelper"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("MessengerSharedMediaActions").Types;
    function a(a, c) {
        switch (c.type) {
        case g.LOAD_CURRENT:
            var d = a.get("sharedMedia").get(c.threadFBID);
            if (d) {
                d = d.edges.find(function(a) {
                    return a.node.legacy_attachment_id === c.photoID
                });
                if (d)
                    return a
            }
            d = a.get("isLoading").get(c.threadFBID);
            if (!!d && d.curr)
                return a;
            d = l(a, c.threadFBID, "curr", !0);
            b("MessengerThreadSharedMediaHelper").search(c.threadFBID, c.photoID, function(a) {
                return b("MessengerSharedMediaActions").currentLoaded(a)
            });
            return d
        }
        return a
    }
    function c(a, c) {
        switch (c.type) {
        case g.LOAD_MORE_PREVIOUS:
            var d = a.get("isLoading").get(c.threadFBID);
            if (!!d && d.prev)
                return a;
            d = l(a, c.threadFBID, "prev", !0);
            if (d === null)
                return a;
            b("MessengerThreadSharedMediaHelper").loadMorePrevious(c.threadFBID, c.afterCursor, c.first, function(a) {
                return b("MessengerSharedMediaActions").previousLoaded(a)
            });
            return d
        }
        return a
    }
    function d(a, c) {
        switch (c.type) {
        case g.LOAD_MORE_LATEST:
            var d = a.get("isLoading").get(c.threadFBID);
            if (!!d && d.latest)
                return a;
            d = l(a, c.threadFBID, "latest", !0);
            if (d === null)
                return a;
            b("MessengerThreadSharedMediaHelper").loadMoreLatest(c.threadFBID, c.beforeCursor, c.last, function(a) {
                return b("MessengerSharedMediaActions").latestLoaded(a)
            });
            return d
        }
        return a
    }
    function f(a, c) {
        var d;
        switch (c.type) {
        case g.CURRENT_LOADED:
            c = c.data;
            var e = Object.keys(c)[0];
            c = (c = c[e]) != null ? c.message_shared_media : c;
            d = (d = c) != null ? (d = d.edges) != null ? d.length : d : d;
            var f = l(a, e, "curr", !1);
            if (d !== 0 && c) {
                d = k(a.get("sharedMedia").get(e), c, 0);
                d = a.get("sharedMedia").set(e, d);
                f = f.set("sharedMedia", d);
                d = c.edges[0];
                b("MessengerThreadSharedMediaHelper").loadMorePrevious(e, d.cursor, 10, function(a) {
                    return b("MessengerSharedMediaActions").previousLoaded(a)
                });
                b("MessengerThreadSharedMediaHelper").loadMoreLatest(e, d.cursor, 10, function(a) {
                    return b("MessengerSharedMediaActions").latestLoaded(a)
                })
            }
            return f
        }
        return a
    }
    function h(a, b) {
        switch (b.type) {
        case g.PREVIOUS_LOADED:
            b = b.data;
            var c = Object.keys(b)[0];
            b = b[c].message_shared_media;
            var d = l(a, c, "prev", !1);
            b = k(a.get("sharedMedia").get(c), b, 1);
            c = a.get("sharedMedia").set(c, b);
            d = d.set("sharedMedia", c);
            return d
        }
        return a
    }
    function i(a, b) {
        switch (b.type) {
        case g.LATEST_LOADED:
            b = b.data;
            var c = Object.keys(b)[0];
            b = b[c].message_shared_media;
            var d = l(a, c, "latest", !1);
            b = k(a.get("sharedMedia").get(c), b, -1);
            c = a.get("sharedMedia").set(c, b);
            d = d.set("sharedMedia", c);
            return d
        }
        return a
    }
    function j(a, b) {
        switch (b.type) {
        case g.DELETE_PHOTOS:
            var c = b.threadFBID;
            b = b.photoFBIDs;
            var d = a.get("sharedMedia").get(c);
            if (!d || !d.edges)
                break;
            var e = new Set(b.map(function(a) {
                return a.toString()
            }));
            d.edges = d.edges.filter(function(a) {
                return !e.has(a.node.legacy_attachment_id)
            });
            b = a.get("sharedMedia").set(c, d);
            c = a.set("sharedMedia", b);
            return c
        }
        return a
    }
    function k(a, b, c) {
        var d = {};
        d.count = b.count;
        if (c === 1 && a) {
            var e = a.edges;
            d.has_previous_page = a.has_previous_page;
            d.has_next_page = b.page_info.has_next_page;
            b.edges.length > 0 ? d.edges = e.concat(b.edges) : d.edges = e
        } else if (c === -1 && a) {
            e = a.edges;
            d.has_previous_page = b.page_info.has_previous_page;
            d.has_next_page = a.has_next_page;
            b.edges.length > 0 ? d.edges = b.edges.concat(e) : d.edges = e
        } else
            d.has_previous_page = b.page_info.has_previous_page,
            d.has_next_page = b.page_info.has_next_page,
            b.edges.length > 0 && (d.edges = b.edges);
        return d
    }
    function l(a, b, c, d) {
        var e = a.get("isLoading").get(b);
        e === void 0 ? (e = {},
        e[c] = d) : e[c] = d;
        c = a.set("isLoading", a.get("isLoading").set(b, e));
        return c
    }
    f = {
        currentLoaded: f,
        deletePhotos: j,
        latestLoaded: i,
        loadCurrent: a,
        loadMoreLatest: d,
        loadMorePrevious: c,
        previousLoaded: h
    };
    j = f;
    e.exports = j
}
), null);
__d("MessengerSharedMediaState", ["immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        sharedMedia: b("immutable").Map({}),
        isLoading: b("immutable").Map({})
    };
    c = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        return b
    }(b("immutable").Record(a));
    e.exports = c
}
), null);
__d("MessengerSharedMediaStore", ["FluxReduceStore", "MessengerFluxReduceDispatcher", "MessengerSharedMediaActions", "MessengerSharedMediaReducer", "MessengerSharedMediaState"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = Object.keys(b("MessengerSharedMediaReducer"));
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.getInitialState = function() {
            return new (b("MessengerSharedMediaState"))()
        }
        ;
        d.reduce = function(a, c) {
            if (c.namespace !== b("MessengerSharedMediaActions").Namespace)
                return a;
            g.forEach(function(d) {
                a = b("MessengerSharedMediaReducer")[d](a, c)
            });
            return a
        }
        ;
        return c
    }(b("FluxReduceStore"));
    a.__moduleID = e.id;
    c = new a(b("MessengerFluxReduceDispatcher"));
    e.exports = c
}
), null);
__d("MessengerSharedPhotosAlbumViewPhotoReact.bs", ["fbt", "bs_curry", "React", "cssURL", "bs_belt_Option", "bs_caml_option"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = h.forwardRef(function(a, c) {
        var d = a.className
          , e = a.fbid
          , f = a.onClick
          , i = a.uri;
        a = a.children;
        c = c;
        a = {
            children: a,
            "aria-label": g._("H\u00ecnh \u1ea3nh"),
            className: d,
            style: {
                backgroundImage: b("cssURL")(i)
            },
            href: "#",
            onClick: function(a) {
                return b("bs_curry")._1(f, e)
            }
        };
        d = b("bs_belt_Option").map(c == null ? void 0 : b("bs_caml_option").some(c), function(a) {
            return a
        });
        d !== void 0 && (a.ref = b("bs_caml_option").valFromOption(d));
        return h.jsx("a", a)
    });
    f.make = a
}
), null);
__d("MessengerSharedPhotosAlbumViewVScrollReact.bs", ["cx", "FBID.bs", "bs_curry", "React", "bs_string", "ReactDOM", "Animation", "bs_caml_array", "bs_caml_option", "setInterval", "clearInterval", "bs_caml_builtin_exceptions", "MessengerSharedMediaActions", "MessengerSharedPhotosAlbumViewPhotoReact.bs"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function i(a) {
        if (a !== void 0) {
            a = b("bs_caml_option").valFromOption(a);
            return (a.scrollTop + a.clientHeight | 0) >= (a.scrollHeight - 20 | 0)
        } else
            throw b("bs_caml_builtin_exceptions").not_found
    }
    function j(a) {
        if (a !== void 0)
            return b("bs_caml_option").valFromOption(a).scrollTop <= 20;
        else
            throw b("bs_caml_builtin_exceptions").not_found
    }
    function k(a) {
        if (a !== void 0)
            return b("bs_caml_option").valFromOption(a).clientHeight;
        else
            throw b("bs_caml_builtin_exceptions").not_found
    }
    function l(a, c) {
        if (a !== void 0) {
            new (b("Animation"))(b("bs_caml_option").valFromOption(a)).to("scrollTop", c).duration(200).go();
            return 0
        } else
            return 0
    }
    function m(a) {
        var c = a.child;
        if (c !== void 0)
            return l(a.childContainer, b("ReactDOM").findDOMNode(b("bs_caml_option").valFromOption(c)).offsetTop - 70 | 0);
        else
            return 0
    }
    function n(a) {
        a = a.interval;
        if (a !== void 0) {
            b("clearInterval")(b("bs_caml_option").valFromOption(a));
            return 0
        } else
            return 0
    }
    function a(a) {
        var c = a.isLoading
          , d = a.onClick
          , e = a.sharedPhotos
          , f = a.threadID
          , g = a.totalCount
          , l = a.viewedPhoto
          , o = h.useRef({
            interval: void 0,
            childContainer: void 0,
            child: void 0,
            scrollable: void 0
        })
          , p = function(a) {
            a = e.length;
            if (i(o.current.childContainer))
                if (a < g && !c.prev) {
                    b("MessengerSharedMediaActions").loadMorePrevious(f, b("bs_caml_array").caml_array_get(e, e.length - 1 | 0).cursor, 48);
                    return 0
                } else
                    return 0;
            else if (j(o.current.childContainer) && !c.latest) {
                b("MessengerSharedMediaActions").loadMoreLatest(f, b("bs_caml_array").caml_array_get(e, 0).cursor, 48);
                return 0
            } else
                return 0
        }
          , q = function(a) {
            a = e.length;
            if (a < 48) {
                b("MessengerSharedMediaActions").loadMorePrevious(f, b("bs_caml_array").caml_array_get(e, e.length - 1 | 0).cursor, 48);
                return 0
            } else
                return 0
        }
          , r = function(a) {
            var c = a.childContainer;
            c = c !== void 0 ? (b("bs_caml_option").valFromOption(c).addEventListener("scroll", p),
            function(c) {
                c = a.childContainer;
                if (c !== void 0)
                    return b("bs_caml_option").valFromOption(c).removeEventListener("scroll", p);
                else
                    return 0
            }
            ) : function(a) {
                return 0
            }
            ;
            q(0);
            var d = function(c) {
                if (k(a.scrollable) > 0) {
                    m(a);
                    c = a.interval;
                    if (c !== void 0) {
                        b("clearInterval")(b("bs_caml_option").valFromOption(c));
                        a.interval = void 0;
                        return 0
                    } else
                        return 0
                } else
                    return 0
            };
            a.interval = b("bs_caml_option").some(b("setInterval")(d, 200));
            return c
        };
        a = function(a) {
            o.current.childContainer = a == null ? void 0 : b("bs_caml_option").some(a);
            return 0
        }
        ;
        var s = function(a) {
            o.current.scrollable = a == null ? void 0 : b("bs_caml_option").some(a);
            return 0
        }
          , t = function(a) {
            o.current.child = a == null ? void 0 : b("bs_caml_option").some(a);
            return 0
        };
        h.useEffect(function() {
            var a = r(o.current);
            return function(c) {
                n(o.current);
                return b("bs_curry")._1(a, 0)
            }
        }, []);
        return h.jsx("div", {
            children: h.jsx("div", {
                children: e.map(function(a) {
                    a = a.node;
                    var c = a.photo_encodings;
                    c = c == null ? !1 : c.length !== 0;
                    var e = a.photo_encodings, f, g = 0;
                    if (c && !(e == null)) {
                        e = e.find(function(a) {
                            return a.projection_type === "perspective"
                        });
                        if (e !== void 0) {
                            e = e.thumbnails;
                            if (e.length !== 0)
                                f = e[0].uri;
                            else {
                                e = a.image1;
                                f = e == null ? void 0 : e.uri
                            }
                        } else {
                            e = a.image1;
                            f = e == null ? void 0 : e.uri
                        }
                    } else
                        g = 1;
                    if (g === 1) {
                        e = a.image1;
                        f = e == null ? void 0 : e.uri
                    }
                    if (f !== void 0) {
                        g = {
                            className: "_3bly" + (c ? " _3603" : ""),
                            fbid: b("FBID.bs").ofStringExn(a.legacy_attachment_id),
                            onClick: d,
                            uri: f,
                            children: h.jsx("div", {
                                className: c ? "_64ks" : ""
                            }, b("bs_string").concat("_", [a.legacy_attachment_id, ["spherical_gradient", 0]]))
                        };
                        e = a.legacy_attachment_id === l ? t : void 0;
                        e !== void 0 && (g.ref = b("bs_caml_option").valFromOption(e));
                        return h.jsx(b("MessengerSharedPhotosAlbumViewPhotoReact.bs").make, g, a.legacy_attachment_id)
                    } else
                        return null
                }),
                ref: s,
                className: "_3xoa"
            }),
            ref: a,
            className: "_3xo8",
            onScroll: p
        })
    }
    c = 200;
    d = 48;
    e = 6;
    g = 20;
    var o = 70
      , p = a;
    a = a;
    f.animationDuration = c;
    f.imagesToLoad = d;
    f.photosPerRow = e;
    f.scrollToEdgeTolerance = g;
    f.headerHeight = o;
    f.isScrolledToBottom = i;
    f.isScrolledToTop = j;
    f.getScrollHeight = k;
    f.scrollTo = l;
    f.autoScrollWhenLoaded = m;
    f.willUnmount = n;
    f.make = p;
    f.jsComponent = a
}
), null);
__d("MessengerSharedPhotosAlbumView.react", ["cx", "fbt", "MessengerPhotoViewCloseLinkReact.re", "MessengerSharedPhotosAlbumViewVScrollReact.bs", "React", "ShimButton.react", "prop-types"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.$2 = function() {
                c.props.onClick(c.props.viewedPhoto)
            }
            ,
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.render = function() {
            return i.jsxs("div", {
                className: "_3bl- _5l-3",
                ref: "window",
                children: [this.$1(), i.jsx(b("MessengerSharedPhotosAlbumViewVScrollReact.bs").jsComponent, {
                    isLoading: this.props.isLoading,
                    onClick: this.props.onClick,
                    sharedPhotos: this.props.sharedPhotos,
                    threadID: this.props.threadID,
                    totalCount: this.props.totalCount,
                    viewedPhoto: this.props.viewedPhoto
                })]
            })
        }
        ;
        d.$1 = function() {
            return i.jsxs("div", {
                className: "_3bm0 _5l-3",
                ref: "header",
                children: [i.jsxs(b("ShimButton.react"), {
                    className: "_3bm2",
                    onClick: this.$2,
                    children: [i.jsx("div", {
                        className: "_3bm3"
                    }), h._("Quay l\u1ea1i \u1ea3nh")]
                }), i.jsx("div", {
                    className: "_3bm4",
                    children: h._("\u1ea2nh \u0111\u00e3 chia s\u1ebb")
                }), i.jsx(b("MessengerPhotoViewCloseLinkReact.re").make, {
                    onClick: this.props.onCloseSharedPhotos
                })]
            })
        }
        ;
        return c
    }(i.Component);
    e.exports = a;
    a.propTypes = {
        onClick: (c = b("prop-types")).func.isRequired,
        onCloseSharedPhotos: c.func.isRequired,
        sharedPhotos: c.arrayOf(c.object).isRequired,
        totalCount: c.number.isRequired,
        viewedPhoto: c.string.isRequired,
        threadID: c.string.isRequired,
        isLoading: c.object.isRequired
    }
}
), null);
__d("MessengerSharedPhotosAlbumViewContainer.react", ["FluxContainer", "MessengerSharedMediaStore", "MessengerSharedPhotosAlbumView.react", "React", "prop-types"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.state = {
                edges: [],
                count: 0,
                isLoading: {}
            },
            b) || babelHelpers.assertThisInitialized(c)
        }
        c.getStores = function() {
            return [b("MessengerSharedMediaStore")]
        }
        ;
        c.calculateState = function(a, c) {
            a = b("MessengerSharedMediaStore").getState();
            var d = a.sharedMedia;
            return {
                edges: d.get(c.threadID).edges,
                count: d.get(c.threadID).count,
                isLoading: a.isLoading.get(c.threadID)
            }
        }
        ;
        var d = c.prototype;
        d.render = function() {
            return this.state.edges.length === 0 ? null : g.jsx(b("MessengerSharedPhotosAlbumView.react"), {
                onClick: this.props.onClick,
                onCloseSharedPhotos: this.props.onCloseSharedPhotos,
                sharedPhotos: this.state.edges,
                totalCount: this.state.count,
                viewedPhoto: this.props.viewedPhoto,
                threadID: this.props.threadID,
                isLoading: this.state.isLoading
            })
        }
        ;
        return c
    }(g.PureComponent);
    a.propTypes = {
        onClick: (c = b("prop-types")).func.isRequired,
        onCloseSharedPhotos: c.func.isRequired,
        viewedPhoto: c.string.isRequired,
        threadID: c.string
    };
    d = b("FluxContainer").create(a, {
        withProps: !0
    });
    e.exports = d
}
), null);
__d("MessageShareType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        IMAGE: "image",
        PLATFORM_SHARE_CTA: "platform_share_CTA"
    });
    e.exports = a
}
), null);
__d("MessengerAttributionTagsStore", ["MessengerActions", "MessengerStore"], (function(a, b, c, d, e, f) {
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b;
            b = a.call(this) || this;
            b.$MessengerAttributionTagsStore1 = {
                messagingTags: null,
                threadID: null
            };
            return b
        }
        var d = c.prototype;
        d.getState = function() {
            return this.$MessengerAttributionTagsStore1
        }
        ;
        d.__onDispatch = function(a) {
            switch (a.type) {
            case b("MessengerActions").Types.UPDATE_THREAD_TAG:
                this.$MessengerAttributionTagsStore1.messagingTags = a.messagingTags;
                this.$MessengerAttributionTagsStore1.threadID = a.threadID;
                this.emitChange();
                break;
            case b("MessengerActions").Types.SELECT_THREAD:
                this.$MessengerAttributionTagsStore1.messagingTags = null;
                this.$MessengerAttributionTagsStore1.threadID = null;
                this.emitChange();
                break
            }
        }
        ;
        return c
    }(b("MessengerStore"));
    c = new a();
    e.exports = c
}
), null);
__d("MNPlatformTagsDataManager", ["MessengerActions", "MessengerAttributionTagsStore", "MessengerDiscoveryEntryPointsLoggingHelper", "MNPlatformAttributionTags"], (function(a, b, c, d, e, f) {
    "use strict";
    f.getTags = a;
    f.updateThreadTabAfterSelectThread = c;
    f.hasThreadTags = d;
    f.getThreadTags = e;
    function a(a) {
        a === void 0 && (a = null);
        var c = null
          , d = null;
        switch (a) {
        case "source:pages:message_shortlink":
            c = b("MNPlatformAttributionTags").M_DOT_ME;
            d = b("MessengerDiscoveryEntryPointsLoggingHelper").getEntryPointsLoggingTagStr(["mdotme"]);
            break;
        case "source:messenger:web":
            c = b("MNPlatformAttributionTags").MESSENGER_WEB;
            break;
        case "source:messenger:web_search":
            c = b("MNPlatformAttributionTags").MESSENGER_WEB_SEARCH;
            d = b("MessengerDiscoveryEntryPointsLoggingHelper").getEntryPointsLoggingTagStr(["messengerdotcom:web_search"]);
            break;
        case "source:discovery:customer_chat_plugin":
            c = b("MNPlatformAttributionTags").CUSTOMER_CHAT_PLUGIN;
            break;
        case "source:pages:page_plugin_message":
            c = b("MessengerDiscoveryEntryPointsLoggingHelper").getEntryPointsLoggingTagStr(["messengerdotcom:pages_plugin"]);
            break;
        default:
            c = "";
            break
        }
        a = [c];
        d !== null && a.push(d);
        return a
    }
    function c(a, c) {
        a === void 0 && (a = null);
        c === void 0 && (c = null);
        a = this.getTags(a);
        b("MessengerActions").changeThreadTag(a, c)
    }
    function d(a) {
        var c = b("MessengerAttributionTagsStore").getState();
        return !!(c.messagingTags && a && c.threadID && c.threadID.toString() === a)
    }
    function e() {
        var a = b("MessengerAttributionTagsStore").getState();
        return a.messagingTags
    }
}
), null);
__d("MessengerGraphQLTypeaheadAdapter", ["fbt", "MercuryIDs", "SearchableEntry", "WorkForeignEntityType"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.convertWorkChatProfileToEntry = a;
    f.convertProfileToEntry = c;
    f.convertIGMessagingUserToEntry = d;
    f.convertPageToEntry = e;
    f.convertGameToEntry = k;
    f.convertMessageToEntry = l;
    f.convertGroupToEntry = m;
    f.convertMSQGroupToEntry = n;
    f.getValidatedMatchesRanges = o;
    f.getParticipantsText = p;
    function h(a) {
        return b("MercuryIDs").isValid(a) ? a : b("MercuryIDs").getParticipantIDFromUserID(a)
    }
    function i(a) {
        var b = a.scim_company_user && a.scim_company_user.company_title;
        a = a.is_viewer_coworker ? null : a.work_info && a.work_info.work_community && a.work_info.work_community.name;
        if (a && b)
            return a + " \u2022 " + b;
        else if (a)
            return a;
        else if (b)
            return b;
        return null
    }
    function j(a, b) {
        var c = null;
        a.members && a.members.edges && a.members.edges.length > 0 ? c = a.members.edges.map(function(a) {
            return a.node.name
        }).join(", ") : a.is_work_user ? c = i(a) : b && a.is_viewer_friend === !1 && (c = b);
        return c
    }
    function a(a, c) {
        var d;
        if (!a || !a.id || !a.name)
            return null;
        var e = "non_friend";
        d = a.is_viewer_coworker || ((d = a.work_foreign_entity_info) != null ? d.type : d) === "NOT_FOREIGN";
        a.is_work_user && d && (e = "fb4c");
        return new (b("SearchableEntry"))({
            uniqueID: a.id,
            title: a.name,
            type: e,
            subtitle: c,
            photo: a.profile_picture && a.profile_picture.uri,
            auxiliaryData: {
                isWorkUser: a.is_work_user,
                workForeignEntityInfo: a.work_foreign_entity_info
            },
            order: -a.viewer_affinity
        })
    }
    function c(a, c) {
        var d, e;
        if (!a || !a.id || !a.name)
            return null;
        var f = "non_friend";
        e = a.is_viewer_coworker || ((e = a.work_foreign_entity_info) != null ? e.type : e) === "NOT_FOREIGN";
        d = ((d = a.work_foreign_entity_info) != null ? d.type : d) === "LIMITED";
        a.is_work_user && d ? f = "guest" : a.is_work_user && e ? f = "fb4c" : (a.is_viewer_friend || a.messenger_contact.is_on_viewer_contact_list || e && a.viewer_affinity > 0) && (f = "friend");
        d = j(a, c);
        return new (b("SearchableEntry"))({
            uniqueID: a.id,
            title: a.name,
            type: f,
            subtitle: d,
            photo: a.profile_picture && a.profile_picture.uri,
            uri: a.url,
            auxiliaryData: {
                isMemorializedUser: a.is_memorialized,
                isMessengerUser: a.is_messenger_user,
                isWorkUser: a.is_work_user,
                isVerified: a.is_verified,
                isActiveAccount: a.work_info && a.work_info.is_active_account,
                workForeignEntityInfo: a.work_foreign_entity_info,
                alias: a.username
            },
            order: -a.viewer_affinity
        })
    }
    function d(a) {
        return new (b("SearchableEntry"))({
            uniqueID: a.id,
            title: a.name,
            type: "friend",
            subtitle: "Instagram",
            photo: a.profile_picture && a.profile_picture.uri,
            uri: null,
            auxiliaryData: {},
            order: 0
        })
    }
    function e(a, c) {
        if (!a || !a.id || !a.name)
            return null;
        return a.instant_game_info ? this.convertGameToEntry(a, c) : new (b("SearchableEntry"))({
            uniqueID: a.id,
            title: a.name,
            type: c,
            photo: a.profile_picture && a.profile_picture.uri,
            uri: a.url,
            auxiliaryData: {
                isMessengerUser: a.is_messenger_user,
                isWorkUser: a.is_work_user,
                canViewerMessage: a.can_viewer_message,
                isVerified: a.is_verified,
                canViewerAddToGroupChat: a.can_viewer_add_to_group_chat
            },
            order: 0
        })
    }
    function k(a, c) {
        return !a || !a.id || !a.name || !a.instant_game_info ? null : new (b("SearchableEntry"))({
            uniqueID: a.id,
            title: a.name,
            type: "game",
            photo: a.instant_game_info && a.instant_game_info.icon_uri,
            uri: a.instant_game_info && a.instant_game_info.game_uri,
            order: 0
        })
    }
    function l(a) {
        var c, d;
        c = a == null ? void 0 : (c = a.message_thread) == null ? void 0 : c.thread;
        d = a == null ? void 0 : (d = a.matched_message) == null ? void 0 : d.message;
        var e = a == null ? void 0 : a.thread_id
          , f = a == null ? void 0 : a.matched_message;
        a = Number(a == null ? void 0 : (a = a.message_thread) == null ? void 0 : a.approx_count);
        if (c == null || d == null || e == null || f == null || a == null)
            return null;
        var i = "message:" + e
          , j = d.snippet
          , k = g._("{number of messages} tin nh\u1eafn kh\u1edbp", [g._param("number of messages", a)]);
        k = a > 1 ? k : j;
        j = d.timestamp;
        typeof j === "number" && a === 1 ? j *= 1e3 : j = void 0;
        a = a == 1 ? (d = f) != null ? (d = d.search_result_context) != null ? d.match_ranges : d : d : null;
        f = {
            matchRanges: a,
            timestamp: j,
            thread_id: e,
            messageResultType: "1on1Conversation"
        };
        d = "";
        a = null;
        if (c.image !== void 0) {
            c.thread_name && (d = c.thread_name);
            c.image && (a = c.image.uri);
            if (c.all_participants && c.all_participants.nodes && c.all_participants.count) {
                if (d == "") {
                    j = c.all_participants.count;
                    var l = c.all_participants.nodes.map(function(a) {
                        return a.messaging_actor.name
                    }).filter(Boolean);
                    d = p(!0, l, j)
                }
                l = c.all_participants.nodes.map(function(a) {
                    a = h(a.messaging_actor.id);
                    return {
                        id: a
                    }
                });
                f = babelHelpers["extends"]({}, f, {
                    messageResultType: "groupConversation",
                    participantsToRender: l,
                    thread: {
                        thread_id: e,
                        image_src: a,
                        participants: l.map(function(a) {
                            return a.id
                        })
                    }
                })
            }
        } else if (c.all_participants && c.all_participants.nodes[0] && c.all_participants.nodes[0].messaging_actor) {
            j = c.all_participants.nodes[0].messaging_actor;
            j.name && (d = j.name);
            j.profile_picture && (a = j.profile_picture.uri);
            typeof j.is_memorialized === "boolean" && (f.isMemorializedUser = j.is_memorialized);
            typeof j.is_messenger_user === "boolean" && (f.isMessengerUser = j.is_messenger_user);
            typeof j.is_work_user === "boolean" && (f.isWorkUser = j.is_work_user);
            typeof j.is_verified === "boolean" && (j.__typename === "User" || j.__typename === "Page" ? f.isVerified = j.is_verified : f.isVerified = !1);
            typeof j.username === "string" && (f.alias = j.username);
            j.work_foreign_entity_info && (f.workForeignEntityInfo = j.work_foreign_entity_info)
        }
        return new (b("SearchableEntry"))({
            uniqueID: i,
            title: d,
            subtitle: k,
            type: "message",
            photo: a,
            uri: null,
            order: 0,
            auxiliaryData: f
        })
    }
    function m(a, c) {
        var d;
        if (!a || !a.thread_key || !a.is_group_thread)
            return null;
        var e = a.thread_key.thread_fbid;
        if (!e)
            return null;
        var f = a.image && a.image.uri;
        d = a == null ? void 0 : (d = a.other_participants) == null ? void 0 : d.edges;
        if (d == null)
            return null;
        d = d.map(function(a) {
            return a.node.messaging_actor.name
        });
        d = p(!1, d, a.other_participants.count);
        var g = a.name
          , i = null;
        !g ? g = d : i = d;
        if (!g)
            return null;
        d = {};
        d.thread = {
            thread_id: e,
            other_user_fbid: null,
            image_src: f,
            participants: a.other_participants.edges.map(function(a) {
                return h(a.node.messaging_actor.id)
            })
        };
        d.participantsToRender = a.other_participants.edges.map(function(a) {
            return {
                id: h(a.node.messaging_actor.id),
                is_messenger_user: a.node.messaging_actor.is_messenger_user,
                is_coworker: a.node.messaging_actor.is_viewer_coworker
            }
        });
        return new (b("SearchableEntry"))({
            uniqueID: e,
            order: c,
            photo: f,
            title: g,
            subtitle: i,
            type: "thread",
            auxiliaryData: d
        })
    }
    function n(a, c, d) {
        var e, f;
        if (!a || !a.thread_key)
            return null;
        e = a == null ? void 0 : (e = a.thread_key) == null ? void 0 : e.thread_fbid;
        if (!e)
            return null;
        var g = a.image && a.image.uri;
        f = a == null ? void 0 : (f = a.all_participants) == null ? void 0 : f.edges;
        if (f == null)
            return null;
        f = f.filter(function(a) {
            return a.node.id !== d
        });
        var i = f.map(function(a) {
            return a.node.messaging_actor.name
        });
        i = p(!0, i, a.all_participants.count);
        a = a.thread_name;
        var j = null;
        !a ? a = i : j = i;
        if (!a)
            return null;
        i = {};
        i.thread = {
            thread_id: e,
            other_user_fbid: null,
            image_src: g,
            participants: f.map(function(a) {
                return h(a.node.messaging_actor.id)
            })
        };
        i.participantsToRender = f.map(function(a) {
            return {
                id: h(a.node.messaging_actor.id),
                is_messenger_user: a.node.messaging_actor.is_messenger_user,
                is_coworker: a.node.messaging_actor.is_viewer_coworker
            }
        });
        return new (b("SearchableEntry"))({
            uniqueID: e,
            order: c,
            photo: g,
            title: a,
            subtitle: j,
            type: "thread",
            auxiliaryData: i
        })
    }
    function o(a, b) {
        if (!Array.isArray(a))
            return [];
        a = [].concat(a).filter(function(a) {
            var c = a.length;
            a = a.offset;
            if (typeof c !== "number" || typeof a !== "number")
                return;
            return c > 0 && a >= 0 && a + c <= b.length
        }).sort(function(a, b) {
            return a.offset - b.offset
        });
        var c = [];
        a.forEach(function(a, b) {
            if (b != 0) {
                b = c[c.length - 1];
                b = b.offset + b.length;
                if (a.offset < b)
                    return
            }
            c.push(a)
        });
        return c
    }
    function p(a, b, c, d) {
        d === void 0 && (d = 3);
        if (a === null || c == null)
            return b.join(", ");
        var e = 1;
        a || (c += e);
        var f = b.length <= d;
        a = a && b.length === c;
        if (f && a)
            return b.slice(0, -1).join(", ");
        f = b.slice(0, d);
        a = c - e - f.length;
        return a < 1 ? f.join(", ") : g._("{name of the first n participants} v\u00e0 {number of other participants} ng\u01b0\u1eddi kh\u00e1c", [g._param("name of the first n participants", f.join(", ")), g._param("number of other participants", a)])
    }
}
), null);
__d("MessengerNewGroupParticipantSuggestionQueryWebGraphQLQuery", ["WebGraphQLQueryBase"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        b.__getDocID = function() {
            return "2339215389425518"
        }
        ;
        b.getQueryID = function() {
            return "339708329890231"
        }
        ;
        return b
    }(b("WebGraphQLQueryBase"))
}
), null);
__d("MessengerNewGroupParticipantSuggestionLocalCacheManager", ["AsyncRequest", "MercurySingletonProvider", "MessengerGraphQLTypeaheadAdapter", "MessengerNewGroupParticipantSuggestionQueryWebGraphQLQuery", "SearchSourceCallbackManager", "TokenizeUtil", "emptyFunction", "immutable", "promiseDone"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = function() {
        function a(a, c) {
            this.entriesPromise = null,
            this.orderedFriendEntries = null,
            this.alreadyParticipatingIDs = null,
            this.shouldRefetch = !1,
            this.cursor = null,
            this.threadFBID = a,
            this.alreadyParticipatingIDs = c,
            this.callbackManager = new (b("SearchSourceCallbackManager"))({
                parseFn: b("TokenizeUtil").parse,
                matchFn: b("TokenizeUtil").isQueryMatch,
                indexFn: null
            })
        }
        var c = a.prototype;
        c.onEntriesLoaded = function(a) {
            var c = this;
            if (this.orderedFriendEntries !== null && !this.shouldRefetch) {
                a(this.orderedFriendEntries);
                return
            }
            if (this.entriesPromise === null || this.shouldRefetch) {
                var d = this.alreadyParticipatingIDs ? this.alreadyParticipatingIDs.toArray() : null;
                d = b("MessengerNewGroupParticipantSuggestionQueryWebGraphQLQuery").getURI({
                    original_participant_ids: d,
                    count: 50
                });
                this.entriesPromise = new (b("AsyncRequest"))(d).setAllowCrossPageTransition(!0).exec().then(function(a) {
                    return a.getPayload().data
                }).then(function(a) {
                    var d = a.viewer.messenger_contextual_ranked_users.edges.map(function(a) {
                        return b("MessengerGraphQLTypeaheadAdapter").convertProfileToEntry(a.node)
                    }).filter(function(a) {
                        return a !== null
                    });
                    c.callbackManager.addLocalEntries(d);
                    c.orderedFriendEntries = d;
                    d = (d = a) != null ? (d = d.viewer) != null ? (d = d.messenger_contextual_ranked_users) != null ? (d = d.page_info) != null ? d.has_next_page : d : d : d : d;
                    d && (c.cursor = a.viewer.messenger_contextual_ranked_users.page_info.end_cursor)
                })
            }
            this.entriesPromise && b("promiseDone")(this.entriesPromise, function() {
                a(c.orderedFriendEntries),
                c.loadMoreFriends(),
                c.shouldRefetch = !1
            }, b("emptyFunction"))
        }
        ;
        c.loadMoreFriends = function() {
            var a = this;
            if (this.cursor == null)
                return;
            var c = this.cursor;
            this.cursor = null;
            b("promiseDone")(new (b("AsyncRequest"))(b("MessengerNewGroupParticipantSuggestionQueryWebGraphQLQuery").getLegacyURI({
                cursor: c
            })).setAllowCrossPageTransition(!0).exec().then(function(a) {
                return a.getPayload()
            }), function(c) {
                a.callbackManager.addLocalEntries(c.viewer.messenger_contextual_ranked_users.edges.map(function(a) {
                    return b("MessengerGraphQLTypeaheadAdapter").convertProfileToEntry(a.node)
                }).filter(function(a) {
                    return a !== null
                }))
            })
        }
        ;
        c.search = function(a, b) {
            var c = this;
            this.onEntriesLoaded(function() {
                c.callbackManager.search(a, function(c) {
                    b(c, a)
                })
            })
        }
        ;
        c.participantsSame = function(a) {
            return this.twoIDsListEquals(this.alreadyParticipatingIDs, a)
        }
        ;
        c.twoIDsListEquals = function(a, b) {
            return a ? b.size !== a.size ? !1 : b.isSuperset(a) : b.size == 0
        }
        ;
        c.setRefetchAndRefreshData = function(a) {
            this.shouldRefetch = !0,
            this.alreadyParticipatingIDs = a
        }
        ;
        c.isBootstrapped = function(a) {
            return this.orderedFriendEntries !== null && this.participantsSame(a)
        }
        ;
        return a
    }();
    a = function() {
        a.get = function() {
            return h.get()
        }
        ;
        function a() {
            this.threadFBIDToCacheMap = new Map()
        }
        var b = a.prototype;
        b.onEntriesLoaded = function(a, b, c) {
            var d = this.threadFBIDToCacheMap.get(a);
            !d ? (d = new g(a,b),
            this.threadFBIDToCacheMap.set(a, d)) : d.participantsSame(b) || d.setRefetchAndRefreshData(b);
            d.onEntriesLoaded(c)
        }
        ;
        b.search = function(a, b, c, d) {
            var e = this.threadFBIDToCacheMap.get(a);
            !e ? (e = new g(a,b),
            this.threadFBIDToCacheMap.set(a, e)) : e.participantsSame(b) || e.setRefetchAndRefreshData(b);
            e.search(c, d)
        }
        ;
        b.isBootstrapped = function(a, b) {
            if (!a)
                return !1;
            a = this.threadFBIDToCacheMap.get(a);
            return a ? a.isBootstrapped(b) : !1
        }
        ;
        return a
    }();
    e.exports = a;
    var h = new (b("MercurySingletonProvider"))(a)
}
), null);
__d("MessengerPaymentFriendsQueryWebGraphQLQuery", ["WebGraphQLQueryBase"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        b.__getDocID = function() {
            return "1959479940789272"
        }
        ;
        b.getQueryID = function() {
            return "2171073576453933"
        }
        ;
        return b
    }(b("WebGraphQLQueryBase"))
}
), null);
__d("MessengerPaymentFriendsLocalCache", ["AsyncRequest", "MessengerGraphQLTypeaheadAdapter", "MessengerPaymentFriendsQueryWebGraphQLQuery", "SearchSourceCallbackManager", "TokenizeUtil", "emptyFunction", "promiseDone"], (function(a, b, c, d, e, f) {
    "use strict";
    f.onEntriesLoaded = j;
    f.search = a;
    f.isBootstrapped = c;
    var g = new (b("SearchSourceCallbackManager"))({
        parseFn: b("TokenizeUtil").parse,
        matchFn: b("TokenizeUtil").isQueryMatch,
        indexFn: null
    })
      , h = null
      , i = null;
    function j(a) {
        if (i) {
            a(i);
            return
        }
        if (!h) {
            var c = b("MessengerPaymentFriendsQueryWebGraphQLQuery").getURI({
                first: 50
            });
            h = new (b("AsyncRequest"))(c).setAllowCrossPageTransition(!0).exec().then(function(a) {
                return a.getPayload()
            }).then(function(a) {
                var c = a.data.viewer.all_friends.edges.map(function(a) {
                    return b("MessengerGraphQLTypeaheadAdapter").convertProfileToEntry(a.node)
                }).filter(function(a) {
                    return a !== null
                });
                g.addLocalEntries(c);
                i = c;
                a.data.viewer.all_friends.page_info.end_cursor
            })
        }
        b("promiseDone")(h, function() {
            a(i)
        }, b("emptyFunction"))
    }
    function a(a, b) {
        j(function() {
            g.search(a, function(c) {
                b(c, a)
            })
        })
    }
    function c() {
        return i !== null
    }
}
), null);
__d("MessengerRoomWithAssocObjectAudienceWebGraphQLQuery", ["WebGraphQLQueryBase"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        b.__getDocID = function() {
            return "2046569042080039"
        }
        ;
        b.getQueryID = function() {
            return "2118248735074331"
        }
        ;
        return b
    }(b("WebGraphQLQueryBase"))
}
), null);
__d("MessengerRoomWithAssocObjectAudienceLocalCacheManager", ["AsyncRequest", "MercurySingletonProvider", "MessengerGraphQLTypeaheadAdapter", "MessengerRoomWithAssocObjectAudienceWebGraphQLQuery", "SearchSourceCallbackManager", "TokenizeUtil", "emptyFunction", "promiseDone"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = function() {
        function a(a) {
            this.entriesPromise = null,
            this.audienceEntries = null,
            this.threadFBID = a,
            this.callbackManager = new (b("SearchSourceCallbackManager"))({
                parseFn: b("TokenizeUtil").parse,
                matchFn: b("TokenizeUtil").isQueryMatch,
                indexFn: null
            })
        }
        var c = a.prototype;
        c.onEntriesLoaded = function(a) {
            var c = this;
            if (this.audienceEntries !== null) {
                a(this.audienceEntries, !0);
                return
            }
            if (this.entriesPromise === null) {
                var d = b("MessengerRoomWithAssocObjectAudienceWebGraphQLQuery").getURI({
                    thread_fbid: this.threadFBID,
                    first: 30
                });
                this.entriesPromise = new (b("AsyncRequest"))(d).setAllowCrossPageTransition(!0).exec().then(function(a) {
                    return a.getPayload()
                }).then(function(a) {
                    a = a.data.message_thread.messaging_audience_list.edges.map(function(a) {
                        return b("MessengerGraphQLTypeaheadAdapter").convertProfileToEntry(a.node)
                    }).filter(function(a) {
                        return a !== null
                    });
                    c.callbackManager.addLocalEntries(a);
                    c.audienceEntries = a
                })
            }
            this.entriesPromise && b("promiseDone")(this.entriesPromise, function() {
                a(c.audienceEntries, !0)
            }, b("emptyFunction"))
        }
        ;
        c.search = function(a, b) {
            var c = this;
            this.onEntriesLoaded(function() {
                c.callbackManager.search(a, function(c) {
                    b(c, a)
                })
            })
        }
        ;
        c.isBootstrapped = function() {
            return this.audienceEntries !== null
        }
        ;
        return a
    }();
    a = function() {
        a.get = function() {
            return h.get()
        }
        ;
        function a() {
            this.threadFBIDToCacheMap = new Map()
        }
        var b = a.prototype;
        b.onEntriesLoaded = function(a, b) {
            var c = this.threadFBIDToCacheMap.get(a);
            c || (c = new g(a),
            this.threadFBIDToCacheMap.set(a, c));
            c.onEntriesLoaded(b)
        }
        ;
        b.search = function(a, b, c) {
            var d = this.threadFBIDToCacheMap.get(a);
            d || (d = new g(a),
            this.threadFBIDToCacheMap.set(a, d));
            d.search(b, c)
        }
        ;
        b.isBootstrapped = function(a) {
            if (!a)
                return !1;
            a = this.threadFBIDToCacheMap.get(a);
            return a ? a.isBootstrapped() : !1
        }
        ;
        return a
    }();
    e.exports = a;
    var h = new (b("MercurySingletonProvider"))(a)
}
), null);
__d("MessengerSearchQueryWebGraphQLQuery", ["WebGraphQLQueryBase"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        b.__getDocID = function() {
            return "2268911786543136"
        }
        ;
        b.getQueryID = function() {
            return "604329370331165"
        }
        ;
        return b
    }(b("WebGraphQLQueryBase"))
}
), null);
__d("MessengerSearchSeeAllQueryWebGraphQLQuery", ["WebGraphQLQueryBase"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        b.__getDocID = function() {
            return "2778926592129629"
        }
        ;
        b.getQueryID = function() {
            return "509156833039109"
        }
        ;
        return b
    }(b("WebGraphQLQueryBase"))
}
), null);
__d("MessengerGroupSearchResultsQueryWebGraphQLQuery", ["WebGraphQLQueryBase"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        b.__getDocID = function() {
            return "2950938174931326"
        }
        ;
        b.getQueryID = function() {
            return "666334973823993"
        }
        ;
        return b
    }(b("WebGraphQLQueryBase"))
}
), null);
__d("MessengerMessageSearchResultsQueryWebGraphQLQuery", ["WebGraphQLQueryBase"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        b.__getDocID = function() {
            return "2706854202719826"
        }
        ;
        b.getQueryID = function() {
            return "332444434106998"
        }
        ;
        return b
    }(b("WebGraphQLQueryBase"))
}
), null);
__d("MessengerPageSearchResultsQueryWebGraphQLQuery", ["WebGraphQLQueryBase"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        b.__getDocID = function() {
            return "2230378867058421"
        }
        ;
        b.getQueryID = function() {
            return "419711615545533"
        }
        ;
        return b
    }(b("WebGraphQLQueryBase"))
}
), null);
__d("MessengerProfileSearchResultsQueryWebGraphQLQuery", ["WebGraphQLQueryBase"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        b.__getDocID = function() {
            return "2530922320303835"
        }
        ;
        b.getQueryID = function() {
            return "1187203711467179"
        }
        ;
        return b
    }(b("WebGraphQLQueryBase"))
}
), null);
__d("MessengerRoomAudienceSearchResultsQueryWebGraphQLQuery", ["WebGraphQLQueryBase"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        b.__getDocID = function() {
            return "2239687859487185"
        }
        ;
        b.getQueryID = function() {
            return "398906294161848"
        }
        ;
        return b
    }(b("WebGraphQLQueryBase"))
}
), null);
__d("MessengerSearchWebGraphQLFetcherUtils", ["CurrentUser", "MessengerGroupSearchResultsQueryWebGraphQLQuery", "MessengerMessageSearchResultsQueryWebGraphQLQuery", "MessengerPageSearchResultsQueryWebGraphQLQuery", "MessengerProfileSearchResultsQueryWebGraphQLQuery", "MessengerRoomAudienceSearchResultsQueryWebGraphQLQuery", "gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    f.formSearchRequests = a;
    f.formMSQMessageSearchRequest = c;
    function a(a, c, d) {
        var e = {
            profiles: [],
            pages: [],
            rooms: [],
            messages: []
        }
          , f = b("CurrentUser").isWorkUser() && b("gkx")("903262") ? "workchat" : "web_messenger_composer";
        a.forEach(function(a) {
            switch (a) {
            case "users":
                a = Math.floor(Math.random() * 65536);
                e.profiles.push(new (b("MessengerProfileSearchResultsQueryWebGraphQLQuery"))({
                    search_query: c,
                    result_limit: d.userLimit,
                    can_viewer_send_money: d.canViewerSendMoneyFilter,
                    session: a.toString(),
                    exclude_ids: d.localEntryIDs,
                    context: f
                }));
                break;
            case "groups":
                e.profiles.push(new (b("MessengerGroupSearchResultsQueryWebGraphQLQuery"))({
                    search_query: c,
                    result_limit: d.groupLimit,
                    exclude_ids: d.localEntryIDs,
                    context: f
                }));
                break;
            case "messages":
                e.messages.push(new (b("MessengerMessageSearchResultsQueryWebGraphQLQuery"))({
                    search_query: c,
                    result_limit: d.messageLimit,
                    exclude_ids: [],
                    context: f
                }));
                break;
            case "pages":
                e.pages.push(new (b("MessengerPageSearchResultsQueryWebGraphQLQuery"))({
                    search_query: c,
                    result_limit: d.pageLimit,
                    messenger_commerce: !0,
                    include_games: !0,
                    internal_bot: !1,
                    vc_endpoint: !1,
                    context: f
                }));
                d.shouldQueryInternalBot === !0 && e.pages.push(new (b("MessengerPageSearchResultsQueryWebGraphQLQuery"))({
                    search_query: c,
                    result_limit: d.pageLimit,
                    messenger_commerce: !1,
                    include_games: !1,
                    internal_bot: !0,
                    vc_endpoint: !1,
                    context: f
                }));
                d.shouldQueryVCEndpoint === !0 && e.pages.push(new (b("MessengerPageSearchResultsQueryWebGraphQLQuery"))({
                    search_query: c,
                    result_limit: d.pageLimit,
                    messenger_commerce: !1,
                    include_games: !1,
                    internal_bot: !1,
                    vc_endpoint: !0,
                    context: f
                }));
                break;
            case "rooms":
                d.threadFBID != null && e.rooms.push(new (b("MessengerRoomAudienceSearchResultsQueryWebGraphQLQuery"))({
                    search_query: c,
                    result_limit: d.userLimit,
                    thread_fbid: d.threadFBID
                }))
            }
        });
        return e
    }
    function c(a, c) {
        var d = [];
        d.push(new (b("MessengerMessageSearchResultsQueryWebGraphQLQuery"))({
            search_query: a,
            result_limit: c,
            exclude_ids: [],
            context: "web_messenger_composer"
        }));
        return d
    }
}
), null);
__d("MessengerUniversalSearchFunnelLoggerConstants", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        END: "end",
        IMPRESSIONS: "impressions",
        QUERY_CHANGED: "query_changed",
        REENTERED: "reentered",
        RESULT_SELECTED: "result_selected",
        SOURCE_ENDED: "source_ended",
        SOURCE_STARTED: "source_started",
        START: "start"
    };
    b = {
        FIRST: "first",
        SEE_ALL: "see_all"
    };
    c = {
        USER_CONTACT: "user_contact",
        USER_NON_CONTACT: "user_non_contact",
        GROUP: "group",
        PAGE: "page",
        GAME: "game",
        TINCAN: "tincan",
        COWORKER: "coworker",
        MESSAGE: "message",
        OTHER: "other"
    };
    d = {
        MESSENGER_DOT_COM: "messenger_dot_com",
        WWW: "www"
    };
    f = Object.freeze({
        INBOX: "inbox",
        SIDEBAR: "sidebar"
    });
    var g = {
        NULL_STATE: "null_state",
        TYPEAHEAD: "typeahead"
    }
      , h = {
        LOCAL: "local",
        SERVER: "server",
        SERVER_XCONTROLLER: "server_xcontroller",
        LOCAL_AND_SERVER: "local_and_server",
        SERVER_USERS_GROUPS: "server_users_groups",
        SERVER_PAGES: "server_pages",
        SERVER_ROOMS: "server_rooms"
    }
      , i = {
        FAILED: "failed",
        FINISHED: "finished"
    }
      , j = {
        LOCAL: "local",
        SERVER: "server"
    }
      , k = {
        END_ACTION: "end_action"
    }
      , l = Object.freeze({
        ABANDON: "abandon",
        RESULT_SELECTED: "result_selected",
        MESSAGE_SEARCH: "message_search",
        ENTER_INTEGRATED_MESSAGE_SEARCH: "enter_integrated_message_search",
        SEND: "send",
        CALL: "call"
    });
    e.exports = {
        NAME: "MESSENGER_UNIVERSAL_SEARCH_FUNNEL",
        TYPE: "UNIVERSAL",
        END_ACTIONS: l,
        END_REASONS: k,
        ENTRY_SURFACES: f,
        EVENTS: a,
        INTERFACES: d,
        QUERY_PROGRESS: i,
        RESULT_PAGES: b,
        RESULT_SURFACES: g,
        RESULT_TYPES: c,
        SOURCES: h,
        UI_SECTIONS: j
    }
}
), null);
__d("MessengerSearchWebGraphQLFetcher", ["Promise", "Bootloader", "CurrentUser", "MercuryConfig", "MessengerBootloadedSecondarySearchLogger", "MessengerGraphQLTypeaheadAdapter", "MessengerSearchQueryWebGraphQLQuery", "MessengerSearchSeeAllQueryWebGraphQLQuery", "MessengerSearchWebGraphQLFetcherUtils", "MessengerSecondarySearchFunnelConstants", "MessengerUniversalSearchFunnelLoggerConstants", "PromiseUtil", "WebGraphQL", "compactArray", "gkx", "requireCond", "cr:998965"], (function(a, b, c, d, e, f) {
    var g = b("MessengerUniversalSearchFunnelLoggerConstants").TYPE
      , h = b("MessengerSecondarySearchFunnelConstants").SEARCH_SURFACES.OMNIPICKER
      , i = b("MercuryConfig").SearchMorePeople ? b("MercuryConfig").SearchMorePeople : 2
      , j = 5
      , k = 3;
    a = function() {
        function a(a, b) {
            this.$1 = 0,
            this.$2 = 0,
            this.$3 = 0,
            this.$4 = 0,
            this.$5 = 0,
            this.$7 = "",
            this.$1 = 0,
            this.$2 = 0,
            this.$5 = 0,
            this.$6 = a,
            this.$7 = b
        }
        var c = a.prototype;
        c.fetchEntries = function(a, c, d, e, f) {
            var g = this;
            c = b("MessengerSearchWebGraphQLFetcherUtils").formSearchRequests(c, a, d);
            var h = c.pages
              , i = c.profiles
              , j = c.rooms
              , k = c.messages;
            if (h.length > 0) {
                this.$8("pages", a);
                this.$2 = 0;
                d = b("PromiseUtil").exponentialBackoff(function() {
                    return b("Promise").all(b("WebGraphQL").execAll(h))
                });
                b("PromiseUtil").repeatWhileErrorUntil(d, function(b) {
                    return g.$9(b, a, e)
                }, function(b) {
                    return g.$10(b, a, f)
                })()
            }
            if (i.length > 0) {
                this.$8("users_groups", a);
                this.$1 = 0;
                c = b("PromiseUtil").exponentialBackoff(function() {
                    return b("Promise").all(b("WebGraphQL").execAll(i))
                });
                b("PromiseUtil").repeatWhileErrorUntil(c, function(b) {
                    g.$11(b, a, e)
                }, function(b) {
                    return g.$12(b, a, f)
                })()
            }
            if (j.length > 0) {
                this.$8("rooms", a);
                this.$5 = 0;
                d = b("PromiseUtil").exponentialBackoff(function() {
                    return b("Promise").all(b("WebGraphQL").execAll(j))
                });
                b("PromiseUtil").repeatWhileErrorUntil(d, function(b) {
                    g.$13(b, a, e)
                }, function(b) {
                    return g.$14(b, a, f)
                })()
            }
            c = b("gkx")("975043");
            if (k.length > 0 && c) {
                this.$8("messages", a);
                this.$3 = 0;
                d = b("PromiseUtil").exponentialBackoff(function() {
                    return b("Promise").all(b("WebGraphQL").execAll(k))
                });
                b("PromiseUtil").repeatWhileErrorUntil(d, function(b) {
                    g.$15(b, a, e)
                }, function(b) {
                    return g.$16(b, a, f)
                })()
            }
        }
        ;
        c.fetchMSQEntries = function(a, c, d, e, f, g, h) {
            var i = this;
            if (c > 0) {
                this.$3 = 0;
                var j = b("MessengerSearchWebGraphQLFetcherUtils").formMSQMessageSearchRequest(a, c);
                this.$8("messages", a);
                c = b("PromiseUtil").exponentialBackoff(function() {
                    return b("Promise").all(b("WebGraphQL").execAll(j))
                });
                b("PromiseUtil").repeatWhileErrorUntil(c, function(b) {
                    i.$15(b, a, g)
                }, function(b) {
                    return i.$16(b, a, h)
                })()
            }
            this.$4 = 0;
            var k = [];
            k.push(new (b("MessengerSearchQueryWebGraphQLQuery"))({
                query: a,
                num_users: d,
                num_groups: e,
                num_pages: f
            }));
            c = b("PromiseUtil").exponentialBackoff(function() {
                return b("Promise").all(b("WebGraphQL").execAll(k))
            });
            b("PromiseUtil").repeatWhileErrorUntil(c, function(b) {
                return i.$17(b, a, g)
            }, function(b) {
                return i.$18(b, a, h)
            })()
        }
        ;
        c.fetchMSSAQEntries = function(a, c, d, e, f, g) {
            var h = this;
            g === void 0 && (g = []);
            this.$4 = 0;
            var i = [];
            switch (c) {
            case "friend":
            case "non_friend":
                i.push(new (b("MessengerSearchSeeAllQueryWebGraphQLQuery"))({
                    query: a,
                    exclude_ids: g,
                    supported_types: [{
                        result_type: "USER",
                        limit: d
                    }]
                }));
                break;
            case "thread":
                i.push(new (b("MessengerSearchSeeAllQueryWebGraphQLQuery"))({
                    query: a,
                    exclude_ids: g,
                    supported_types: [{
                        result_type: "GROUP",
                        limit: d
                    }]
                }));
                break;
            case "page":
                i.push(new (b("MessengerSearchSeeAllQueryWebGraphQLQuery"))({
                    query: a,
                    exclude_ids: g,
                    supported_types: [{
                        result_type: "PAGE",
                        limit: d
                    }]
                }));
                break
            }
            c = b("PromiseUtil").exponentialBackoff(function() {
                return b("Promise").all(b("WebGraphQL").execAll(i))
            });
            b("PromiseUtil").repeatWhileErrorUntil(c, function(b) {
                return h.$17(b, a, e)
            }, function(b) {
                return h.$18(b, a, f)
            })()
        }
        ;
        c.$17 = function(a, c, d) {
            var e = this;
            if (this.$6() !== c)
                return;
            a = a[0];
            a = a == null ? void 0 : (a = a.messenger_search) == null ? void 0 : (a = a.result_modules) == null ? void 0 : (a = a.nodes) == null ? void 0 : (a = a[0]) == null ? void 0 : (a = a.search_results) == null ? void 0 : a.edges;
            var f = []
              , g = 0;
            a != null && a.forEach(function(a) {
                if (a.node && a.node.__typename) {
                    var c = a.node.__typename;
                    if (c === "User") {
                        var d = b("MessengerGraphQLTypeaheadAdapter").convertProfileToEntry(a.node, null);
                        d && f.push(d)
                    } else if (c === "InstagramMessagingUser")
                        f.push(b("MessengerGraphQLTypeaheadAdapter").convertIGMessagingUserToEntry(a.node));
                    else if (c === "NeoApprovedUser") {
                        d = b("MessengerGraphQLTypeaheadAdapter").convertProfileToEntry(a.node, null);
                        d && f.push(d)
                    } else if (c === "MessengerViewerGroupThread") {
                        d = b("CurrentUser").getID();
                        d = b("MessengerGraphQLTypeaheadAdapter").convertMSQGroupToEntry(a.node, g, d);
                        d && f.push(d);
                        g++
                    } else if (c === "Page") {
                        d = b("MessengerGraphQLTypeaheadAdapter").convertPageToEntry(a.node, e.$19(a.node));
                        d && f.push(d)
                    }
                }
            });
            d(f, "singleServerQuery");
            this.$20("single_server_query", c, f)
        }
        ;
        c.fetchWorkChatSingleQueryEntries = function(a, c, d, e) {
            var f = this;
            if (b("cr:998965") == null)
                return;
            var g = [];
            g.push(b("cr:998965").formSearchRequests(a, c));
            c = b("PromiseUtil").exponentialBackoff(function() {
                return b("Promise").all(b("WebGraphQL").execAll(g))
            });
            b("PromiseUtil").repeatWhileErrorUntil(c, function(b) {
                return f.$21(b, a, d)
            }, function(b) {
                return f.$22(b, a, e)
            })()
        }
        ;
        c.$21 = function(a, c, d) {
            var e, f = this;
            a = a[0];
            if (this.$6() !== c)
                return;
            e = a == null ? void 0 : (e = a.entities_named) == null ? void 0 : e.user_group_results;
            var g = []
              , h = !1;
            h = !0;
            if (e != null && (e == null ? void 0 : e.edges) != null && (e == null ? void 0 : e.edges.length) > 0) {
                e = e.edges;
                e.map(function(a, c) {
                    var d = a.node;
                    if (d != null && d.is_group_thread != null) {
                        c = b("MessengerGraphQLTypeaheadAdapter").convertGroupToEntry(d, c);
                        c && g.push(c)
                    } else {
                        c = b("MessengerGraphQLTypeaheadAdapter").convertWorkChatProfileToEntry(d, h ? a.subtext : null);
                        c && g.push(c)
                    }
                })
            }
            e = a == null ? void 0 : (e = a.entities_named) == null ? void 0 : e.bot_results;
            if (e != null && (e == null ? void 0 : e.edges) != null && (e == null ? void 0 : e.edges.length) > 0) {
                e = e == null ? void 0 : e.edges;
                e.map(function(a, c) {
                    c = b("MessengerGraphQLTypeaheadAdapter").convertPageToEntry(a.node, f.$19(a.node));
                    c && g.push(c)
                })
            }
            a = a == null ? void 0 : (e = a.entities_named) == null ? void 0 : e.vc_results;
            if (a != null && (a == null ? void 0 : a.edges) != null && (a == null ? void 0 : a.edges.length) > 0) {
                e = a == null ? void 0 : a.edges;
                e.map(function(a, c) {
                    c = b("MessengerGraphQLTypeaheadAdapter").convertPageToEntry(a.node, f.$19(a.node));
                    c && g.push(c)
                })
            }
            d(g, "singleServerQuery");
            this.$20("wc_single_server_query", c, g)
        }
        ;
        c.$15 = function(a, c, d) {
            a = a[0];
            if (this.$6() !== c)
                return;
            a = a == null ? void 0 : (a = a.entities_named) == null ? void 0 : (a = a.search_results) == null ? void 0 : a.edges;
            var e = [];
            a != null && a.forEach(function(a) {
                a = b("MessengerGraphQLTypeaheadAdapter").convertMessageToEntry(a.node);
                a && e.push(a)
            });
            d(e, "messages");
            this.$20("messages", c, e)
        }
        ;
        c.$13 = function(a, c, d) {
            if (this.$6() !== c)
                return;
            a = (a = a[0]) != null ? (a = a.message_thread) != null ? (a = a.messaging_audience_list) != null ? a.nodes : a : a : a;
            if (a) {
                a = b("compactArray")(a.map(function(a) {
                    return b("MessengerGraphQLTypeaheadAdapter").convertProfileToEntry(a)
                }));
                d(a, "usersGroups");
                this.$20("rooms", c, a)
            }
        }
        ;
        c.$11 = function(a, c, d) {
            if (this.$6() !== c)
                return;
            var e = []
              , f = []
              , g = !1;
            g = !0;
            for (var h = 0; h < a.length; h++) {
                var i = a[h];
                i = (i = i) != null ? (i = i.entities_named) != null ? (i = i.search_results) != null ? i.edges : i : i : i;
                i && i.length > 0 && i[0].node && (i[0].node.is_group_thread != null ? e = i.map(function(a, c) {
                    return b("MessengerGraphQLTypeaheadAdapter").convertGroupToEntry(a.node, c)
                }) : i[0].node.is_messenger_user != null && (f = i.map(function(a, c) {
                    return b("MessengerGraphQLTypeaheadAdapter").convertProfileToEntry(a.node, g === !0 ? a.subtext : null)
                }),
                f = this.$23(b("compactArray")(f))))
            }
            i = b("compactArray")(f.concat(e));
            d(i, "usersGroups");
            this.$20("users_groups", c, i)
        }
        ;
        c.$23 = function(a) {
            var b = []
              , c = []
              , d = []
              , e = [];
            for (var f = 0; f < a.length; f++) {
                var g = a[f];
                if (!g)
                    continue;
                g.getType() === "friend" && b.length < j ? b.push(g) : g.getType() === "non_friend" && e.length < i ? e.push(g) : g.getType() === "fb4c" && c.length < 8 ? c.push(g) : g.getType() === "guest" && d.length < 6 && d.push(g)
            }
            return b.concat(c, d, e)
        }
        ;
        c.$9 = function(a, c, d) {
            var e = this;
            if (this.$6() !== c)
                return;
            var f = [];
            for (var g = 0; g < a.length; g++) {
                var h = a[g];
                h = (h = h) != null ? (h = h.entities_named) != null ? (h = h.search_results) != null ? h.edges : h : h : h;
                h = h ? h.map(function(a) {
                    a = a.node;
                    return b("MessengerGraphQLTypeaheadAdapter").convertPageToEntry(a, e.$19(a))
                }) : [];
                f = f.concat(b("compactArray")(h.slice(0, 5)))
            }
            d(f, "pages");
            this.$20("pages", c, f)
        }
        ;
        c.$19 = function(a) {
            if (!a || !a.category_type)
                return "page";
            if (a.category_type === "WORKPLACE_BOT")
                return "internal_bot_page";
            else if (a.category_type === "MEETING_ROOM")
                return "meeting_room_page";
            return "page"
        }
        ;
        c.$12 = function(a, b, c) {
            if (b === this.$6()) {
                if (this.$1 < k) {
                    this.$1 += 1;
                    return !0
                }
                c(a, "usersGroups")
            }
            return !1
        }
        ;
        c.$10 = function(a, b, c) {
            if (b === this.$6()) {
                if (this.$2 < k) {
                    this.$2 += 1;
                    return !0
                }
                c(a, "pages")
            }
            return !1
        }
        ;
        c.$16 = function(a, b, c) {
            if (b === this.$6()) {
                if (this.$3 < k) {
                    this.$3 += 1;
                    return !0
                }
                c(a, "messages")
            }
            return !1
        }
        ;
        c.$14 = function(a, b, c) {
            if (b === this.$6()) {
                if (this.$5 < k) {
                    this.$5 += 1;
                    return !0
                }
                c(a, "rooms")
            }
            return !1
        }
        ;
        c.$18 = function(a, b, c) {
            if (b === this.$6()) {
                if (this.$4 < k) {
                    this.$4 += 1;
                    return !0
                }
                c(a, "singleServerQuery")
            }
            return !1
        }
        ;
        c.$22 = function(a, b, c) {
            if (b === this.$6()) {
                if (this.$4 < k) {
                    this.$4 += 1;
                    return !0
                }
                c(a, "singleServerQuery")
            }
            return !1
        }
        ;
        c.$24 = function(a) {
            var c = "";
            switch (a) {
            case "users_groups":
                c = b("MessengerUniversalSearchFunnelLoggerConstants").SOURCES.SERVER_USERS_GROUPS;
                break;
            case "pages":
                c = b("MessengerUniversalSearchFunnelLoggerConstants").SOURCES.SERVER_PAGES;
                break;
            case "rooms":
                c = b("MessengerUniversalSearchFunnelLoggerConstants").SOURCES.SERVER_ROOMS;
                break;
            default:
                c = ""
            }
            return c
        }
        ;
        c.$8 = function(a, c) {
            var d = this;
            if (this.$7 === g)
                b("Bootloader").loadModules(["MessengerUniversalSearchFunnelLogger"], function(e) {
                    var b = d.$24(a);
                    e.logSourceStarted(c, b)
                }, "MessengerSearchWebGraphQLFetcher");
            else if (this.$7 === h) {
                var e = this.$24(a);
                b("MessengerBootloadedSecondarySearchLogger").logSearchEvent({
                    name: b("MessengerSecondarySearchFunnelConstants").EVENTS.SOURCE_STARTED,
                    query: c,
                    source: e,
                    loggingID: b("MessengerSecondarySearchFunnelConstants").LOGGING_IDS.M_APP_COMPOSER
                })
            }
        }
        ;
        c.$20 = function(a, c, d) {
            var e = this;
            if (this.$7 === g)
                b("Bootloader").loadModules(["MessengerUniversalSearchFunnelLogger"], function(g) {
                    var f = e.$24(a);
                    g.logSourceEnded(c, f, d.length, b("MessengerUniversalSearchFunnelLoggerConstants").QUERY_PROGRESS.FINISHED, e.$6() === c)
                }, "MessengerSearchWebGraphQLFetcher"),
                b("Bootloader").loadModules(["WorkChatSearchFunnelLogger"], function(b) {
                    b.logImpressions(c, a, d)
                }, "MessengerSearchWebGraphQLFetcher");
            else if (this.$7 === h) {
                var f = this.$24(a);
                b("MessengerBootloadedSecondarySearchLogger").logSearchEvent({
                    name: b("MessengerSecondarySearchFunnelConstants").EVENTS.SOURCE_ENDED,
                    query: c,
                    source: f,
                    ids: d.map(function(a) {
                        return a.getUniqueID()
                    }),
                    status: b("MessengerSecondarySearchFunnelConstants").SOURCE_STATUSES.FINISHED,
                    loggingID: b("MessengerSecondarySearchFunnelConstants").LOGGING_IDS.M_APP_COMPOSER
                })
            }
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("MessengerFriendsWebGraphQLQuery", ["WebGraphQLQueryBase"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        b.__getDocID = function() {
            return "1720594534660350"
        }
        ;
        b.getQueryID = function() {
            return "1852062858177546"
        }
        ;
        return b
    }(b("WebGraphQLQueryBase"))
}
), null);
__d("TopMessengerFriendsAndGroupsWebGraphQLQuery", ["WebGraphQLQueryBase"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        b.__getDocID = function() {
            return "1978892428852690"
        }
        ;
        b.getQueryID = function() {
            return "127838424757019"
        }
        ;
        return b
    }(b("WebGraphQLQueryBase"))
}
), null);
__d("MessengerTypeaheadLocalCache", ["AsyncRequest", "FBLogger", "MessengerConfig", "MessengerFriendsWebGraphQLQuery", "MessengerGraphQLTypeaheadAdapter", "SearchSourceCallbackManager", "TokenizeUtil", "TopMessengerFriendsAndGroupsWebGraphQLQuery", "promiseDone"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = new (b("SearchSourceCallbackManager"))({
        parseFn: b("TokenizeUtil").parse,
        matchFn: b("TokenizeUtil").isQueryMatch,
        indexFn: null
    })
      , h = null
      , i = null
      , j = null
      , k = null;
    function l() {
        if (b("MessengerConfig").BootstrapTypeaheadFromBuddylist || !j)
            return;
        var a = j;
        j = null;
        b("promiseDone")(new (b("AsyncRequest"))(b("MessengerFriendsWebGraphQLQuery").getLegacyURI({
            cursor: a
        })).setAllowCrossPageTransition(!0).exec().then(function(a) {
            return a.getPayload()
        }), function(a) {
            g.addLocalEntries(a.viewer.all_friends.edges.map(function(a) {
                return b("MessengerGraphQLTypeaheadAdapter").convertProfileToEntry(a.node)
            }).filter(function(a) {
                return a !== null
            }))
        }, function(a) {
            b("FBLogger")("messenger_search").warn("Error while fetching more friends: " + a.errorDescription)
        })
    }
    var m = {
        onEntriesLoaded: function(a) {
            if (h !== null && i !== null) {
                a(h, i, !1);
                return
            }
            k === null && (k = m.fetchEntriesFromServer());
            b("promiseDone")(k, function() {
                a(h, i, !0),
                l()
            }, function(a) {
                b("FBLogger")("messenger_search").warn("Error while fetching entries: " + a.errorDescription)
            })
        },
        fetchEntriesFromServer: function() {
            var a = b("MessengerConfig").BootstrapTypeaheadFromBuddylist;
            a = b("TopMessengerFriendsAndGroupsWebGraphQLQuery").getLegacyURI({
                use_buddylist: a,
                first: 100
            });
            a = new (b("AsyncRequest"))(a).setAllowCrossPageTransition(!0).exec().then(function(a) {
                return a.getPayload()
            }).then(function(a) {
                return m.handlePayload(a)
            });
            return a
        },
        handlePayload: function(a) {
            var c = b("MessengerConfig").BootstrapTypeaheadFromBuddylist
              , d = (c ? a.viewer.chat_buddylist : a.viewer.all_friends.edges).map(function(a) {
                return b("MessengerGraphQLTypeaheadAdapter").convertProfileToEntry(c ? a.represented_profile : a.node)
            }).filter(function(a) {
                if (a === null)
                    return !1;
                a = a.getAuxiliaryData();
                a = a && a.isMemorializedUser;
                return !a
            })
              , e = a.viewer.message_threads.edges.map(function(a, c) {
                return b("MessengerGraphQLTypeaheadAdapter").convertGroupToEntry(a.node, c)
            }).filter(function(a) {
                return a !== null
            });
            g.addLocalEntries(d);
            g.addLocalEntries(e);
            h = d;
            i = e;
            a.viewer.all_friends && a.viewer.all_friends.page_info && a.viewer.all_friends.page_info.has_next_page && (j = a.viewer.all_friends.page_info.end_cursor)
        },
        search: function(a, b) {
            m.onEntriesLoaded(function() {
                g.search(a, function(c) {
                    b(c, a)
                })
            })
        },
        isBootstrapped: function() {
            return h !== null && i !== null
        }
    };
    a = m;
    e.exports = a
}
), null);
__d("MessengerContactAdapters", ["ImmutableObject", "immutable"], (function(a, b, c, d, e, f) {
    f.fromSearchableEntry = a;
    f.fromMercuryParticipant = c;
    function a(a) {
        var c = a.getType()
          , d = {
            alias: null,
            isMessengerUser: null,
            isWorkUser: null,
            isVerified: null,
            workForeignEntityInfo: null,
            participants: null,
            photo: a.getPhoto(),
            subtitle: a.getSubtitle(),
            thread: null,
            title: a.getTitle(),
            type: c,
            uid: a.getUniqueID(),
            timestamp: null,
            matchRanges: null
        };
        d.photo || (d.photo = null);
        var e = a.getAuxiliaryData();
        if (e) {
            c == "message" && (d.uid = e.thread_id);
            e.timestamp && (d.timestamp = e.timestamp);
            c === "message" && e.matchRanges != null && (d.matchRanges = e.matchRanges);
            a = c === "message" && e.messageResultType === "groupConversation";
            c === "thread" || a ? (d.thread = new (b("ImmutableObject"))(e.thread),
            d.participants = b("immutable").Map().withMutations(function(a) {
                e.participantsToRender.forEach(function(b) {
                    a.set(b.id, b)
                })
            })) : (d.isMessengerUser = e.isMessengerUser,
            d.isWorkUser = e.isWorkUser,
            d.isVerified = e.isVerified,
            d.workForeignEntityInfo = e.workForeignEntityInfo,
            d.alias = e.alias)
        }
        return new (b("ImmutableObject"))(d)
    }
    function c(a) {
        return new (b("ImmutableObject"))({
            alias: a.alias,
            uid: a.id,
            photo: a.image_src,
            title: a.name,
            subtitle: a.title ? a.title : "",
            type: a.type,
            isMessengerUser: a.is_messenger_user,
            isWorkUser: a.is_work_user,
            isVerified: a.is_verified,
            isCoworker: a.is_coworker,
            href: a.href,
            timezone: a.timezone,
            workForeignEntityInfo: a.work_foreign_entity_info
        })
    }
}
), null);
__d("MercuryThreadTimestampReact.bs", ["cx", "React", "formatDate", "joinClasses"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function a(a) {
        var c = a.time
          , d = a.title
          , e = a.text;
        a = a.className;
        a = a !== void 0 ? a : "";
        if (c !== void 0) {
            c = c;
            var f = new Date(c);
            d = d !== void 0 ? d : f.toLocaleDateString();
            e = e !== void 0 ? e : b("formatDate")(f, "g:ia");
            return h.cloneElement(h.jsxs(h.Fragment, {
                children: [h.jsx("span", {
                    children: d,
                    className: "accessible_elem"
                }), h.jsx("abbr", {
                    children: e,
                    "aria-hidden": !0,
                    className: b("joinClasses")(a, "timestamp"),
                    title: d
                })]
            }), {
                "data-utime": c / 1e3
            })
        } else
            return h.jsx("abbr", {})
    }
    c = a;
    f.make = c
}
), null);
__d("MessengerContactActions.bs", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        ADD_OWNER: "ADD_OWNER",
        MESSAGE: "MESSAGE",
        PROFILE: "PROFILE",
        REMOVE: "REMOVE",
        REMOVE_OWNER: "REMOVE_OWNER",
        SELECT: "SELECT",
        REPORT_GROUP_CHAT_USER: "REPORT_GROUP_CHAT_USER"
    };
    f.actions = a
}
), null);
__d("MessengerProfileImageWrapperReact.bs", ["cx", "cssVar", "React", "gkx", "bs_caml_option", "CurrentUser", "TooltipData", "joinClasses", "MessagingThreadType", "getViewportDimensions", "MessengerDotComAndInboxM4Check.bs", "LazyWorkMultiCompanyChatTooltip.react"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    function a(a) {
        var c = a.ariaHidden
          , d = a.customBadge
          , e = a.useRectBorder
          , f = a.isMessengerUser
          , g = a.isPartiesUser
          , h = a.threadColor
          , j = a.threadType
          , k = a.tooltipContent
          , l = a.size
          , m = a.isMultiCompany
          , n = a.className
          , o = a.showBadge;
        a = a.children;
        n = n !== void 0 ? n : "";
        var p = function(a) {
            if (d !== void 0)
                return i.jsx("div", {
                    children: i.jsx("div", {
                        children: b("bs_caml_option").valFromOption(d),
                        className: "_2pon _67in"
                    }),
                    className: "_4ld_ _2pom"
                });
            else {
                if (f === void 0 && g === void 0 && m === void 0)
                    return null;
                if (o)
                    if (g !== void 0)
                        if (b("CurrentUser").isWorkUser())
                            return null;
                        else
                            return i.jsx("div", {
                                children: i.jsx("div", {
                                    className: "_2pon _2poo"
                                }),
                                className: "_4ld_ _2pom"
                            });
                    else if (m !== void 0)
                        if (b("CurrentUser").isWorkUser()) {
                            a = m;
                            var c = l !== void 0 ? l > 45 : !1;
                            return i.jsx("div", {
                                children: i.jsx(b("LazyWorkMultiCompanyChatTooltip.react"), {
                                    children: i.jsx("div", {
                                        className: (a && !c ? "_4rwy" : "") + (a && c ? " _2zb5" : "")
                                    })
                                }),
                                className: "_4ld_ _2pom" + (c ? "" : " _91qq")
                            })
                        } else
                            return null;
                    else if (b("CurrentUser").isWorkUser())
                        return null;
                    else {
                        a = f;
                        return i.jsx("div", {
                            children: i.jsx("div", {
                                className: "_2pon" + (a ? " _2poo" : "") + (a ? "" : " _2pop")
                            }),
                            className: "_4ld_ _2pom"
                        })
                    }
                else
                    return null
            }
        }
          , q = l !== void 0 ? "" + (String(l) + "px") : "auto";
        j = j !== void 0 ? j === b("MessagingThreadType").ROOM : !1;
        var r;
        if (k !== void 0) {
            var s = k;
            if (s === "")
                r = {};
            else {
                var t = b("getViewportDimensions")().width
                  , u = parseInt("700px".replace("px", ""), 10);
                t = t <= u ? "above" : "left";
                r = Object.assign({}, b("TooltipData").propsFor(s, t))
            }
        } else
            r = {};
        u = k !== void 0 && k !== "" ? 0 : void 0;
        s = j ? {
            background: h !== void 0 ? h : "#0084ff",
            height: q,
            width: q
        } : {
            height: q,
            width: q
        };
        t = e !== void 0 && e ? !0 : !1;
        k = {
            children: a,
            className: (t ? "" : "_4ld-") + (t ? " _94ns" : "") + (b("MessengerDotComAndInboxM4Check.bs").yes ? " _7q1r" : "") + (b("gkx")("1425119") ? " _93x9" : "") + (j ? " _180i" : ""),
            style: s
        };
        u !== void 0 && (k.tabIndex = b("bs_caml_option").valFromOption(u));
        h = {
            children: [i.jsx("div", k), p(0)],
            className: b("joinClasses")("_4ldz", n),
            style: {
                height: q,
                width: q
            }
        };
        c !== void 0 && (h["aria-hidden"] = b("bs_caml_option").valFromOption(c));
        return i.cloneElement(i.jsxs("div", h), r)
    }
    c = a;
    d = a;
    f.make = c;
    f.jsComponent = d
}
), null);
__d("MessengerProfileImageWrapperReact.re", ["MessengerProfileImageWrapperReact.bs"], (function(a, b, c, d, e, f) {
    (function(a) {
        return null
    }
    );
    a = b("MessengerProfileImageWrapperReact.bs").make;
    f.make = a;
    (function(a) {
        return null
    }
    );
    c = b("MessengerProfileImageWrapperReact.bs").jsComponent;
    f.jsComponent = c
}
), null);
__d("MessengerContactImage.react", ["Image.react", "MessengerProfileImageWrapperReact.re", "React"], (function(a, b, c, d, e, f) {
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a;
            return g.jsx("div", {
                className: this.props.className,
                children: g.jsx(b("MessengerProfileImageWrapperReact.re").jsComponent, {
                    isMessengerUser: (a = this.props.isMessengerUser) != null ? a : void 0,
                    isPartiesUser: (a = this.props.isPartiesUser) != null ? a : void 0,
                    size: this.props.size,
                    customBadge: this.props.customBadge,
                    showBadge: !1,
                    children: g.jsx(b("Image.react"), {
                        alt: "",
                        height: this.props.size,
                        src: this.props.src,
                        width: this.props.size
                    })
                })
            })
        }
        ;
        return c
    }(g.PureComponent);
    e.exports = a
}
), null);
__d("MessengerContactImageReact.bs", ["Image.bs", "React", "bs_belt_Option", "bs_caml_option", "ReasonReact.bs", "bs_js_null_undefined", "MessengerContactImage.react", "MessengerProfileImageWrapperReact.bs"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a) {
        var c = a.className
          , d = a.customBadge
          , e = a.isMessengerUser
          , f = a.isPartiesUser
          , h = a.size
          , i = a.src;
        a = a.isMultiCompany;
        a = a !== void 0 ? a : !1;
        a = {
            ariaHidden: !0,
            size: h,
            isMultiCompany: a,
            showBadge: a,
            children: b("ReasonReact.bs").element(void 0, void 0, b("Image.bs").make(void 0, "", void 0, void 0, i, h, void 0, h, void 0, []))
        };
        d !== void 0 && (a.customBadge = b("bs_caml_option").valFromOption(d));
        e !== void 0 && (a.isMessengerUser = b("bs_caml_option").valFromOption(e));
        f !== void 0 && (a.isPartiesUser = b("bs_caml_option").valFromOption(f));
        return g.jsx("div", {
            children: g.createElement(b("MessengerProfileImageWrapperReact.bs").make, a),
            className: b("bs_belt_Option").getWithDefault(c, "")
        })
    }
    function c(a, c, d, e, f, g, h, i) {
        var j;
        return b("ReasonReact.bs").wrapJsForReason(b("MessengerContactImage.react"), {
            className: (j = b("bs_js_null_undefined")).fromOption(a),
            customBadge: j.fromOption(c),
            isMessengerUser: j.fromOption(d),
            isPartiesUser: j.fromOption(e),
            size: f,
            src: j.fromOption(g),
            isMultiCompany: j.fromOption(h)
        }, i)
    }
    d = {
        make: c
    };
    e = b("bs_belt_Option").getWithDefault;
    c = a;
    a = a;
    f.$pipe$question = e;
    f.make = c;
    f.jsComponent = a;
    f.StraightJSComponent = d
}
), null);
__d("MessengerLocalTimeReact.bs", ["cx", "fbt", "React", "joinClasses", "MercuryThreadTimestampReact.bs"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    function a(a) {
        var c = a.className;
        a = a.participantTimeZone;
        if (a !== void 0) {
            a = a - new Date().getTimezoneOffset() * -60;
            if (a === 0)
                return null;
            else {
                a = new Date(Date.now() + a * 1e3);
                var d = a.getHours();
                d = d < 6 || d > 22;
                c = b("joinClasses")("_10rk", c);
                return i.jsx("span", {
                    children: i.jsxs("span", {
                        children: ["(", i.jsx(b("MercuryThreadTimestampReact.bs").make, {
                            time: a.getTime()
                        }), " ", h._("gi\u1edd \u0111\u1ecba ph\u01b0\u01a1ng"), ")"],
                        className: d ? "_2f3x" : ""
                    }),
                    className: c
                })
            }
        } else
            return null
    }
    c = 22;
    d = 6;
    e = a;
    f.nightStartHour = c;
    f.nightEndHour = d;
    f.make = e
}
), null);
__d("MercuryParticipantsImage.react", ["cssVar", "MessengerParticipantsImages.re", "React", "SplitImage.react", "filterNulls", "gkx", "requireCond", "cr:1425118"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function i(a) {
        var c = a.className
          , d = a.halfView
          , e = a.participants
          , f = a.partiesProfileImages;
        a = a.size;
        var g = h.useState([])
          , i = g[0]
          , j = g[1];
        h.useLayoutEffect(function() {
            var a, c = !0;
            e != null && e.length ? a = b("MessengerParticipantsImages.re").getOrderedBigImageMulti(b("filterNulls")(e), function(a) {
                if (!c)
                    return;
                a = f ? a.concat(f) : a;
                j(b("filterNulls")(a))
            }) : j([]);
            return function() {
                c = !1,
                a && a.remove()
            }
        }, [e, f]);
        if (b("gkx")("1425119")) {
            if (b("cr:1425118") != null && i.length > 1)
                return h.jsx(b("cr:1425118"), {
                    participantImages: i,
                    size: a
                });
            if (i.length > 0)
                return h.jsx("div", {
                    style: {
                        backgroundColor: "rgba(0, 0, 0, 0.05)"
                    },
                    children: h.jsx(b("SplitImage.react"), {
                        border: !0,
                        className: c || "",
                        halfView: d,
                        srcs: i,
                        size: Number(a)
                    }, e ? e.join("-") : "")
                })
        }
        return i.length > 0 ? h.jsx(b("SplitImage.react"), {
            border: !0,
            className: c || "",
            halfView: d,
            srcs: i,
            size: Number(a)
        }, e ? e.join("-") : "") : null
    }
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        var c = b.prototype;
        c.render = function() {
            return h.jsx(i, babelHelpers["extends"]({}, this.props))
        }
        ;
        return b
    }(h.Component);
    e.exports = a
}
), null);
__d("MercuryThreadImage.react", ["cssVar", "cx", "MercuryIDs", "MercuryParticipantsConstants", "MercuryParticipantsImage.react", "Pixelz.react", "React", "gkx"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React")
      , j = i.useMemo;
    function a(a) {
        var c, d = a.thread, e = a.size || b("MercuryParticipantsConstants").BIG_IMAGE_SIZE, f = (c = d.square_image_src) != null ? c : d.image_src, g = b("MercuryIDs").isCanonical(d.thread_id), h = b("MercuryIDs").getParticipantIDFromUserID(a.viewer);
        c = j(function() {
            var a = [];
            d.participants && (d.participants.length === 1 && d.participants[0] === h ? a = [].concat(d.participants) : (a = d.participants.filter(function(a) {
                return a !== h
            }),
            g || (a = a.slice(0, 3))));
            return a
        }, [d.participants, h, g]);
        var k = j(function() {
            return f != null && f !== "" && a.useBackground === !0 ? i.jsx("div", {
                style: {
                    height: e,
                    backgroundImage: "url(" + f + ")",
                    backgroundColor: b("gkx")("1425119") ? "rgba(0, 0, 0, 0.05)" : void 0,
                    backgroundPosition: "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: e
                }
            }) : i.jsx(b("Pixelz.react"), {
                alt: "",
                height: e,
                resizeMode: "cover",
                src: f,
                width: e
            })
        }, [f, a.useBackground, e]);
        if (f != null && f !== "")
            return k;
        if (d.thread_type === 3) {
            k = {};
            k.height = e + "px";
            k.width = e + "px";
            d.solid_color != null && d.solid_color !== "" && (k.background = d.solid_color);
            return i.jsx("span", {
                className: "_asv _asw",
                style: k,
                children: d.name[0]
            })
        }
        return i.jsx(b("MercuryParticipantsImage.react"), {
            className: a.className,
            halfView: a.halfView,
            participants: c,
            size: e
        })
    }
    e.exports = a
}
), null);
__d("MercuryThreadImageReact.bs", ["ReasonReact.bs", "bs_js_null_undefined", "MercuryThreadImage.react"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a, c, d, e, f) {
        return b("ReasonReact.bs").wrapJsForReason(b("MercuryThreadImage.react"), {
            size: b("bs_js_null_undefined").fromOption(a),
            thread: c,
            useBackground: b("bs_js_null_undefined").fromOption(d),
            viewer: e
        }, f)
    }
    f.make = a
}
), null);
__d("OptionType.bs", ["bs_curry", "bs_caml_option"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a, c, d) {
        if (a !== void 0)
            if (c !== void 0)
                return b("bs_curry")._2(d, b("bs_caml_option").valFromOption(a), b("bs_caml_option").valFromOption(c));
            else
                return !1;
        else
            return c === void 0
    }
    function c(a, c) {
        if (a !== void 0)
            if (c !== void 0)
                return b("bs_caml_option").valFromOption(a) === b("bs_caml_option").valFromOption(c);
            else
                return !1;
        else
            return c === void 0
    }
    f.equals = a;
    f.equalsReference = c
}
), null);
__d("MessengerThreadImageReact.bs", ["cx", "React", "MercuryIDs", "OptionType.bs", "bs_caml_option", "ReasonReact.bs", "WorkForeignEntityInfo.bs", "MercuryThreadImageReact.bs", "MessengerProfileImageWrapperReact.bs"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function i(a, c) {
        var d = a.other_user_fbid
          , e = c.size;
        a = b("MercuryIDs").isCanonical(a.thread_id);
        if (d == null || !(a && e !== 0))
            return !1;
        else {
            a = b("MercuryIDs").getParticipantIDFromUserID(d);
            e = c.get(a);
            if (!(e == null) && !(e == null))
                return e.is_messenger_user;
            else
                return !1
        }
    }
    function a(a) {
        var c = a.className
          , d = a.isPresenceForWork
          , e = a.isDoNotDisturb
          , f = a.useRectBorder
          , g = a.showBadge
          , j = a.size
          , k = a.participants
          , l = a.thread;
        a = a.viewer;
        d = d !== void 0 ? d : !1;
        e = e !== void 0 ? e : !1;
        f = f !== void 0 ? f : !1;
        g = g !== void 0 ? g : !1;
        var m = !b("WorkForeignEntityInfo.bs").areAllCoworkers(k);
        e = m ? void 0 : e ? b("bs_caml_option").some(h.jsx("div", {
            className: "_466z"
        })) : d ? b("bs_caml_option").some(h.jsx("div", {
            className: "_4670"
        })) : void 0;
        d = {
            useRectBorder: f,
            isMessengerUser: i(l, k),
            isMultiCompany: m,
            showBadge: g && b("MercuryIDs").isCanonical(l.thread_id) || m,
            children: b("ReasonReact.bs").element(void 0, void 0, b("MercuryThreadImageReact.bs").make(j, l, !0, a, []))
        };
        e !== void 0 && (d.customBadge = b("bs_caml_option").valFromOption(e));
        f = b("bs_caml_option").nullable_to_opt(l.solid_color);
        f !== void 0 && (d.threadColor = b("bs_caml_option").valFromOption(f));
        k = b("bs_caml_option").nullable_to_opt(l.thread_type);
        k !== void 0 && (d.threadType = b("bs_caml_option").valFromOption(k));
        j !== void 0 && (d.size = b("bs_caml_option").valFromOption(j));
        g = {
            children: h.createElement(b("MessengerProfileImageWrapperReact.bs").make, d)
        };
        c !== void 0 && (g.className = b("bs_caml_option").valFromOption(c));
        return h.jsx("div", g)
    }
    var j = h.memo(a, function(a, c) {
        if (a.className === c.className && a.showBadge === c.showBadge && b("OptionType.bs").equalsReference(a.size, c.size) && i(a.thread, a.participants) === i(c.thread, c.participants) && b("WorkForeignEntityInfo.bs").areAllCoworkers(a.participants) === b("WorkForeignEntityInfo.bs").areAllCoworkers(c.participants) && a.isPresenceForWork === c.isPresenceForWork && a.isDoNotDisturb === c.isDoNotDisturb && a.useRectBorder === c.useRectBorder && a.thread === c.thread)
            return a.viewer === c.viewer;
        else
            return !1
    });
    function c(a) {
        var c = {
            participants: a.participants,
            thread: a.thread,
            viewer: a.viewer
        };
        a.className !== void 0 && (c.className = b("bs_caml_option").valFromOption(a.className));
        a.isPresenceForWork !== void 0 && (c.isPresenceForWork = b("bs_caml_option").valFromOption(a.isPresenceForWork));
        a.isDoNotDisturb !== void 0 && (c.isDoNotDisturb = b("bs_caml_option").valFromOption(a.isDoNotDisturb));
        a.useRectBorder !== void 0 && (c.useRectBorder = b("bs_caml_option").valFromOption(a.useRectBorder));
        a.showBadge !== void 0 && (c.showBadge = b("bs_caml_option").valFromOption(a.showBadge));
        a.size !== void 0 && (c.size = b("bs_caml_option").valFromOption(a.size));
        return h.createElement(j, c)
    }
    f.getIsMessengerUser = i;
    f.make = j;
    f.jsComponent = c
}
), null);
__d("VideoCallWebDriverIDs", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        ACCEPT_ESCALATION_CALL_BUTTON: "acceptEscalationButton",
        ADD_GROUP_MEMBERS_BUTTON: "addGroupMembersButton",
        VIEW_CALL_MEMBERS_BUTTON: "viewCallMembersButton",
        ANSWER_CALL_BUTTON: "answerCallButton",
        DOMINANT_SPEAKER_SWITCH_BUTTON: "dominantSpeakerSwitchButton",
        END_CALL_BUTTON: "endCallButton",
        ESCALATE_CALL_BUTTON: "escalateCallButton",
        FULL_SCREEN_BUTTON: "fullScreenButton",
        GRID_SWITCH_BUTTON: "gridSwitchButton",
        COWATCH_BUTTON: "cowatchButton",
        COWATCH_END_SESSION_BUTTON: "cowatchEndSessionButton",
        COWATCH_SIDE_PANEL: "cowatchSidePanel",
        COWATCH_SIDE_PANEL_TABS: "cowatchSidePanelTabs",
        COWATCH_SIDE_PANEL_TABS_SUGGESTED: "cowatchSidePanelTabsSuggested",
        COWATCH_SIDE_PANEL_TABS_TV_AND_MOVIES: "cowatchSidePanelTabsTvAndMovies",
        COWATCH_SIDE_PANEL_TABS_WATCHED: "cowatchSidePanelTabsWatched",
        COWATCH_SIDE_PANEL_SEARCH_UI: "cowatchSidePanelSearchUI",
        COWATCH_SIDE_PANEL_VIDEO_THUMBNAIL: "cowatchSidePanelVideoThumbnail",
        COWATCH_SIDE_PANEL_GRID_ITEM: "cowatchSidePanelGridItem",
        COWATCH_ROOT_CONTAINER: "cowatchRootContainer",
        COWATCH_VIDEO_PLAYER: "cowatchVideoPlayer",
        COWATCH_COMPOSER_DIALOG_CANCEL_BUTTON: "cowatchComposerDialogCancelButton",
        COWATCH_CHICLET_VIDEO: "cowatchChicletVideo",
        COWATCH_CHICLET_FALLBACK_IMAGE: "cowatchChicletFallbackImage",
        COWATCH_VIDEO_ACTION_BAR_VISIBLE: "cowatchVideoActionBarVisible",
        COWATCH_VIDEO_ACTION_BAR_HIDDEN: "cowatchVideoActionBarHidden",
        COWATCH_VIDEO_DESCRIPTION: "cowatchVideoDescription",
        COWATCH_ROOT_CONTAINER_CONTENT: "cowatchRootContainerContent",
        COWATCH_VIDEO_PRIMARY_TEXT: "cowatchVideoPrimaryText",
        COWATCH_VIDEO_SECONDARY_TEXT: "cowatchVideoSecondaryText",
        COWATCH_VIDEO_COUNTDOWN_TIMER: "cowatchVideoCountdownTimer",
        COWATCH_VIDEO_DEFAULT_CONTROLS: "cowatchVideoDefaultControls",
        IGNORE_CALL_BUTTON: "ignoreCallButton",
        INCALL_VIDEO_CONTAINER: "incallVideoContainer",
        REDIAL_BUTTON: "rediallButton",
        REJECT_CALL_BUTTON: "rejectCallButton",
        REMOTE_VIEW_THUMBNAIL: "remoteViewThumbnail",
        RTC_APP_VIEW_START_CALL_BUTTON: "RTCAppViewStartCallButton",
        RTC_INCALL_VIDEO: "RTCIncallVideo",
        RTC_PICKER_DIALOG_CALL_BUTTON: "RTCPickerDialogCallButton",
        RTC_PICKER_DIALOG_CANCEL_BUTTON: "RTCPickerDialogCancelButton",
        RTC_PICKER_DIALOG_CONTACT_LIST_ITEM: "RTCPickerDialogContactListItem",
        RTC_PICKER_DIALOG_RING_BUTTON: "RTCPickerDialogRingButton",
        STAR_RATING_VIEW: "starRatingView",
        STAR_RATING_NOT_NOW_BUTTON: "starRatingNotNowButton",
        START_VIDEO_CALL: "startVideoCall",
        START_VOICE_CALL: "startVoiceCall",
        TOGGLE_AUDIO_BUTTON: "toggleAudioButton",
        TOGGLE_VIDEO_BUTTON: "toggleVideoButton",
        TOGGLE_CHAT_BUTTON: "toggleChatButton",
        TOGGLE_CAMERA_BUTTON: "toggleCameraButton",
        CLOSE_CHAT_BUTTON: "closeChatButton",
        SETTINGS_BUTTON: "settingsButton",
        SAVE_SETTINGS_BUTTON: "saveSettingsButton",
        CLOSE_CALL_WINDOW_BUTTON: "closeCallWindowButton",
        CHAT_TAB_VIDEO_BUTTON: "chatTabVideoButton",
        CHAT_TAB_VOICE_BUTTON: "chatTabVoiceButton",
        PROFILE_DROPDOWN_MENU: "profileDropdownMenu",
        RTC_CALL_ACTION_LINK: "RTCCallActionLink",
        STAR_RATING_SUBMIT_BUTTON: "submitStarRatingButton",
        DECLINE_ESCALATION_CALL_BUTTON: "declineEscalationButton",
        VIDEO_LAYOUT_SWITCH_BUTTON: "videoLayoutSwitchButton",
        HEADER_VIEW: "headerView",
        POPOUT_SCREEN_CONTENT: "popoutScreenContent",
        CREATE_VIDEO_CHAT_LINK_BUTTON: "createVideoChatLinkButton",
        CALL_TIMER: "callTimer",
        CALL_CONTROLS: "CallControls",
        FOOTER_VIEW: "footerView",
        CONTENT_VIEW: "contentView",
        CHAT_PANEL: "chatPanel",
        POPOVER_MENU_BUTTON: "show-menu-button",
        VIDEO_CALL_PEER_TAG: "video-call-peerTag",
        UPGRADE_BROWSER: "upgrade-browser",
        SELF_VIEW_ROOT: "SelfView",
        RTC_SELF_VIEW: "RTCSelfView",
        SELF_VIEW_CAMERA_VIDEO: "SelfViewCameraVideo",
        SELF_VIEW_SCREEN_TILE: "SelfViewScreenTile",
        SELF_VIEW_SCREEN_VIDEO: "SelfViewScreenVideo",
        SELF_VIEW_SCREEN_BUTTON: "SelfViewScreenButton",
        SELF_VIEW_DARKEN_OVERLAY: "SelfViewDarkenOverlay",
        ADD_PARTICIPANTS_DIALOG_CANCEL_BUTTON: "AddParticipantsDialogCancelButton",
        ADD_PARTICIPANTS_DIALOG_RING_BUTTON: "AddParticipantsDialogRingButton",
        VIEW_PARTICIPANTS_DIALOG_CLOSE_BUTTON: "ViewParticipantsDialogCloseButton",
        VIEW_PARTICIPANTS_DIALOG_PEOPLE_TAB_BUTTON: "view_participants_dialog_people_tab_button",
        VIEW_PARTICIPANTS_DIALOG_SETTINGS_TAB_BUTTON: "view_participants_dialog_settings_tab_button",
        VIEW_PARTICIPANTS_DIALOG_SETTINGS_END_CALL_BUTTON: "view_participants_dialog_settings_end_call_button",
        REMOVE_GUEST_DIALOG_CANCEL_BUTTON: "RemoveGuestDialogCancelButton",
        REMOVE_GUEST_DIALOG_CONFIRM_BUTTON: "RemoveGuestDialogConfirmButton",
        REMOVE_GUEST_DIALOG_ONE_GUEST_LINK: "RemoveGuestDialogOneGuestLink",
        REMOVE_GUEST_DIALOG_ALL_GUESTS_LINK: "RemoveGuestDialogAllGuestsLink",
        TRANSITION_ESCALATIONS_DIALOG_CANCEL_BUTTON: "TransitionsEscalationsDialogCancelButton",
        TRANSITION_ESCALATIONS_DIALOG_CONFIRM_BUTTON: "TransitionsEscalationsDialogConfirmButton",
        TRANSITION_ESCALATIONS_DIALOG_X_BUTTON: "TransitionsEscalationsDialogXButton",
        BLOCK_CALLS_PERMANENT: "BlockCallsPermanent",
        BLOCK_CALLS_ONE_HOUR: "BlockCallsOneHour",
        BLOCK_CALLS_EIGHT_AM: "BlockCallsEightAm",
        BLOCK_CALLS_BUTTON: "BlockCallsButton",
        MEETUP_LINK_LOCK_UNLOCK: "meetup_lock_unlock",
        LOCK_ROOM_DIALOG_CLOSE_BUTTON: "lock_room_dialog_close_button",
        LOCK_ROOM_DIALOG_CANCEL_BUTTON: "lock_room_dialog_cancel_button",
        LOCK_ROOM_DIALOG_CONFIRM_BUTTON: "lock_room_dialog_confirm_button",
        LEAVE_ROOM_DIALOG_CANCEL_BUTTON: "leave_room_dialog_cancel_button",
        LEAVE_ROOM_DIALOG_CONFIRM_BUTTON: "leave_room_dialog_confirm_button",
        LOCK_SCREEN_SHARING_CLOSE_BUTTON: "lock_screen_sharing_close_button",
        LOCK_SCREEN_SHARING_CANCEL_BUTTON: "lock_screen_sharing_cancel_button",
        LOCK_SCREEN_SHARING_CONFIRM_BUTTON: "lock_screen_sharing_confirm_button",
        STATS_OVERLAY_ELEMENT: "stats_overlay_element",
        AUDIO_STATS_OVERLAY_ELEMENT: "audio_stats_overlay_element",
        VIDEO_OUTGOING_BITRATE: "video_outgoing_bitrate",
        AUDIO_OUTGOING_BITRATE: "audio_outgoing_bitrate",
        VIDEO_INCOMING_BITRATE: "video_incoming_bitrate",
        AUDIO_INCOMING_BITRATE: "audio_incoming_bitrate",
        AUDIO_INCOMING_PACKETS: "audio_incoming_packets",
        VIDEO_INCOMING_PACKETS: "video_incoming_packets",
        AUDIO_INCOMING_LEVEL: "audio_incoming_level",
        ACCEPT_JOIN_REQUEST_BUTTON: "ACCEPT_JOIN_REQUEST_BUTTON",
        DECLINE_JOIN_REQUEST_BUTTON: "DECLINE_JOIN_REQUEST_BUTTON",
        MOBILE_CONFIRM_DIALOG_OK: "mobile_confirm_dialog_ok"
    });
    e.exports = a
}
), null);
__d("MessengerContactListRowReact.bs", ["cx", "ix", "fbt", "FBID.bs", "bs_block", "bs_curry", "React", "Utils.bs", "gkx", "bs_caml_obj", "Link.react", "MercuryIDs", "Badge.react", "bs_caml_option", "CurrentUser", "Image.react", "ReasonReact.bs", "TooltipData", "joinClasses", "MessengerState.bs", "PresenceStatus", "ImageBlock.react", "MercuryTimestamp", "bs_js_null_undefined", "WorkForeignEntityInfo.bs", "AvailableListConstants", "MercuryParticipantTypes", "MessengerContactActions.bs", "MessengerLocalTimeReact.bs", "MessengerAdminGroupUtils", "MessengerThreadImageReact.bs", "MessengerContactImageReact.bs", "MercuryThreadTimestampReact.bs", "MessengerDotComAndInboxM4Check.bs", "MessengerTextWithEntities.react", "MessengerGraphQLTypeaheadAdapter", "MercuryIgnoredBlockedParticipants.bs", "WorkUserEmojiWithTooltipBootloader.react", "VideoCallWebDriverIDs"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = b("React");
    function k(a, c) {
        if (a !== void 0)
            return b("bs_caml_option").valFromOption(a).contains(c);
        else
            return !1
    }
    function l(a, c, d) {
        var e = d.thread, f = d.participants, g = d.type === b("MercuryParticipantTypes").THREAD || d.type === b("MercuryParticipantTypes").MESSAGE, h = d.photo, i, k, l;
        c !== void 0 ? f == null || !g ? i = 1 : (k = b("bs_caml_option").valFromOption(c),
        l = f,
        i = 2) : e == null || f == null || !g ? i = 1 : (k = e,
        l = f,
        i = 2);
        switch (i) {
        case 1:
            if (h == null)
                return j.jsx("div", {
                    className: "_5l39" + (b("MessengerDotComAndInboxM4Check.bs").yes ? " _85_s" : "")
                });
            else {
                c = !b("WorkForeignEntityInfo.bs").isContactCoworker(d);
                g = {
                    className: "_5l39" + (b("MessengerDotComAndInboxM4Check.bs").yes ? " _85_s" : "") + " _5rmm",
                    size: 32,
                    src: h,
                    isMultiCompany: c
                };
                e = b("bs_caml_option").nullable_to_opt(d.isMessengerUser);
                e !== void 0 && (g.isMessengerUser = b("bs_caml_option").valFromOption(e));
                return j.createElement(b("MessengerContactImageReact.bs").make, g)
            }
        case 2:
            return j.jsx(b("MessengerThreadImageReact.bs").make, {
                className: "_5l39" + (b("MessengerDotComAndInboxM4Check.bs").yes ? " _85_s" : ""),
                size: 32,
                participants: l,
                thread: k,
                viewer: a
            })
        }
    }
    function m(a) {
        var c = a.type === b("MercuryParticipantTypes").PAGE;
        a = b("WorkForeignEntityInfo.bs").isContactCoworker(a);
        if (c && a)
            return j.jsx(b("Badge.react"), {
                size: "medium",
                type: "bot"
            });
        else
            return null
    }
    function n(a) {
        a = a.isVerified;
        a = a == null ? !1 : a;
        if (a)
            return j.jsx(b("Badge.react"), {
                size: "medium",
                type: "verified"
            });
        else
            return null
    }
    function o(a, b) {
        var c = []
          , d = {
            contents: 0
        };
        b.forEach(function(b) {
            var e = b.offset;
            b = b.offset + b.length | 0;
            if (d.contents < e) {
                var f = a.substring(d.contents, e);
                c.push(f)
            }
            f = j.jsx("span", {
                children: a.substring(e, b),
                className: "_7u0a"
            });
            c.push(f);
            d.contents = b;
            return 0
        });
        b = a.substring(d.contents, a.length);
        c.push(b);
        return c
    }
    function p(a) {
        var c = b("CurrentUser").isWorkUser()
          , d = b("gkx")("1222861")
          , e = b("MercuryIDs").isValid(a.uid)
          , f = a.type;
        if (c && d)
            if (e)
                if (f == null || f !== b("MercuryParticipantTypes").USER)
                    c = void 0;
                else
                    try {
                        c = b("bs_caml_option").nullable_to_opt(b("MercuryIDs").getUserIDFromParticipantID(a.uid))
                    } catch (a) {
                        c = void 0
                    }
            else
                c = f == null || f !== b("MercuryParticipantTypes").USER ? void 0 : b("FBID.bs").ofString(a.uid);
        else
            c = void 0;
        if (c !== void 0)
            return j.createElement(b("WorkUserEmojiWithTooltipBootloader.react"), {
                userID: b("bs_caml_option").valFromOption(c),
                withSpace: !0
            });
        else
            return null
    }
    function q(a, c) {
        return j.jsxs("div", {
            children: [j.jsx(b("MessengerTextWithEntities.react"), {
                renderEmoji: !0,
                renderEmoticons: !0,
                text: a.title
            }), p(a), m(a), n(a)],
            className: (c ? "" : "_3q34") + (c ? " _9d22" : "")
        })
    }
    function r(a, c) {
        var d = a.subtitle;
        if (!(d == null) && d !== "") {
            var e = b("MessengerGraphQLTypeaheadAdapter").getValidatedMatchesRanges(a.matchRanges, d);
            d = o(d, e);
            e = b("bs_caml_obj").caml_equal(a.type, b("MercuryParticipantTypes").MESSAGE);
            var f = a.timestamp;
            if (e && !(f == null)) {
                e = f;
                return j.jsxs("div", {
                    children: [q(a, c), j.jsxs("div", {
                        children: [j.jsx("span", {
                            children: d,
                            className: "_3q35 _7s4c"
                        }), j.jsx("span", {
                            children: "\xb7",
                            className: "_7s4d"
                        }), j.createElement(b("MercuryThreadTimestampReact.bs").make, {
                            time: e,
                            title: b("MercuryTimestamp").getAbsoluteTimestamp(e),
                            text: b("MercuryTimestamp").getRelativeTimestamp(e),
                            className: "_7s4e"
                        })],
                        className: "_5l-3"
                    })]
                })
            } else
                f = 2;
            if (f === 2)
                return j.jsxs("div", {
                    children: [q(a, c), j.jsx("div", {
                        children: d,
                        className: (c ? "" : "_3q35") + (c ? " _9d23" : "")
                    })]
                })
        }
        e = {
            className: "_5ywd"
        };
        f = b("bs_caml_option").nullable_to_opt(a.timezone);
        f !== void 0 && (e.participantTimeZone = b("bs_caml_option").valFromOption(f));
        return j.jsxs("div", {
            children: [a.title, j.createElement(b("MessengerLocalTimeReact.bs").make, e), p(a), m(a), n(a)],
            className: (c ? "" : "_8slc") + (c ? " _8sld" : "")
        })
    }
    function s(a, c, d, e) {
        if (b("gkx")("818495")) {
            var f = {
                contents: !1
            }
              , g = b("FBID.bs").ofString(a.uid);
            if (g !== void 0 && e !== void 0) {
                var h = b("bs_caml_option").valFromOption(e);
                b("MessengerState.bs").compute(d, function(a) {
                    f.contents = b("MercuryIgnoredBlockedParticipants.bs").qualifiesAs(d, a.blocked_ids, h);
                    return 0
                })
            }
            if (f.contents)
                return j.jsxs("div", {
                    children: [q(a, c), j.jsx("div", {
                        children: i._("Blocked"),
                        className: (c ? "" : "_3q35") + (c ? " _9d23" : "")
                    })]
                });
            else
                return r(a, c)
        } else
            return r(a, c)
    }
    function t(a) {
        var c = a.subtitle;
        if (!(c == null) && c !== "")
            return j.jsxs("div", {
                children: [c, j.jsx("span", {
                    children: j.jsx(b("MessengerTextWithEntities.react"), {
                        renderEmoji: !0,
                        renderEmoticons: !0,
                        text: a.title.substring(c.length + 3 | 0, a.title.length)
                    }),
                    className: "_7l-p"
                })],
                className: "_364g"
            });
        c = {
            className: "_5ywd"
        };
        var d = b("bs_caml_option").nullable_to_opt(a.timezone);
        d !== void 0 && (c.participantTimeZone = b("bs_caml_option").valFromOption(d));
        return j.jsxs("div", {
            children: [a.title.substring(3, a.title.length), j.createElement(b("MessengerLocalTimeReact.bs").make, c)],
            className: "_364g _7l-p"
        })
    }
    function u(a, c) {
        var d = c.type;
        if (a !== void 0 && a && !(d == null || !(d === b("MercuryParticipantTypes").FRIEND || d === b("MercuryParticipantTypes").USER))) {
            a = b("MercuryIDs").getUserIDFromParticipantID(c.uid);
            if (a == null)
                return !1;
            else
                return b("PresenceStatus").get(a) === b("AvailableListConstants").ACTIVE
        } else
            return !1
    }
    function v(a) {
        return j.jsx("span", {
            children: i._("\u0110\u00e3 th\u00eam"),
            className: "_5rh4" + (a ? " _9aea" : "")
        })
    }
    var w = j.jsx("span", {
        children: i._("\u0110\u00e3 m\u1eddi"),
        className: "_5rh4"
    })
      , x = j.jsx(b("Image.react"), {
        className: "_1kqm",
        src: h("86852")
    });
    function y(a, c) {
        c.state.thisRef.contents = a == null ? void 0 : b("bs_caml_option").some(a);
        return 0
    }
    function z(a) {
        a = a.state;
        var c = a.isHighlighted
          , d = a.onScrollIntoView
          , e = a.thisRef.contents;
        if (c !== void 0 && c && d !== void 0 && e !== void 0) {
            c = b("bs_caml_option").valFromOption(e);
            b("bs_curry")._1(d, c);
            e = a.onRenderHighlight;
            if (e !== void 0)
                return b("bs_curry")._1(e, c);
            else
                return 0
        } else
            return 0
    }
    function A(a) {
        var c = a.newSelf
          , d = c.state.isHighlighted;
        a = a.oldSelf.state.onScrollIntoView;
        var e = c.state.thisRef.contents;
        if (d !== void 0 && d && a !== void 0 && e !== void 0) {
            d = b("bs_caml_option").valFromOption(e);
            b("bs_curry")._1(a, d);
            e = c.state.onRenderHighlight;
            if (e !== void 0)
                return b("bs_curry")._1(e, d);
            else
                return 0
        } else
            return 0
    }
    function a(a) {
        var c = b("ReasonReact.bs").reducerComponent("MessengerContactListRowReact")
          , d = function(a, d, e, f, g, h, m, n, o, p, q, r, B, C, D, E, F, G, H, I, J, K, L, M) {
            var N = E !== void 0 ? E : ""
              , O = function(a) {
                if (h !== void 0)
                    return 0;
                else {
                    a.stopPropagation();
                    a.preventDefault();
                    return 0
                }
            }
              , P = function(a, c) {
                if (a === b("MessengerContactActions.bs").actions.SELECT)
                    if (f !== void 0)
                        return b("bs_caml_option").valFromOption(f)(d, c);
                    else
                        return 0;
                else if (g !== void 0)
                    return b("bs_curry")._2(g, a, d);
                else
                    return 0
            }
              , Q = function(a) {
                a = p === !0;
                if (a && e !== void 0)
                    return b("bs_curry")._1(e, d);
                else
                    return 0
            }
              , R = function(a) {
                a.stopPropagation();
                return P(b("MessengerContactActions.bs").actions.SELECT, a)
            }
              , S = function(a) {
                var c = a.send;
                a = a.state;
                if (F !== void 0) {
                    var d = b("bs_caml_option").valFromOption(F).get(a.contact.uid);
                    d = d == null ? [null, !0] : [d, !0]
                } else
                    d = [null, !1];
                if (k(D, a.contact.uid))
                    return v(L);
                else if (k(q, a.contact.uid))
                    return w;
                else if (k(G, a.contact.uid))
                    return x;
                else if (d[1])
                    return d[0];
                else if (u(H, a.contact))
                    return j.jsx("div", {
                        className: "_jg2"
                    });
                else {
                    d = b("bs_js_null_undefined").fromOption(m);
                    var e = a.contact.thread;
                    e = I !== void 0 ? b("MessengerAdminGroupUtils").isAdminRequired(b("bs_caml_option").valFromOption(I)) : e == null ? !1 : b("MessengerAdminGroupUtils").isAdminRequired(e);
                    var f = a.contact.thread, g, l = 0, n;
                    I !== void 0 ? (n = b("bs_caml_option").valFromOption(I),
                    l = 1) : f == null ? g = !1 : (n = f,
                    l = 1);
                    if (l === 1) {
                        f = b("MercuryIDs").isValid(a.contact.uid);
                        l = f ? b("bs_caml_option").nullable_to_opt(b("MercuryIDs").getUserIDFromParticipantID(a.contact.uid)) : b("FBID.bs").ofString(a.contact.uid);
                        f = l !== void 0 ? b("MessengerAdminGroupUtils").isAdmin(d, b("bs_caml_option").valFromOption(l)) : !1;
                        g = b("MessengerAdminGroupUtils").isOwner(f, n)
                    }
                    l = g ? j.jsx("span", {
                        children: i._("Qu\u1ea3n tr\u1ecb vi\u00ean"),
                        className: "_5qsj"
                    }) : null;
                    if (h !== void 0)
                        return j.jsxs("div", {
                            children: [l, j.createElement(b("bs_caml_option").valFromOption(h), {
                                className: "_rwo",
                                admins: d,
                                contact: a.contact,
                                extrasEnabled: o,
                                isAdminRequired: e,
                                isOpen: a.isActionsOpen,
                                onAction: P,
                                onToggle: function(a) {
                                    return b("bs_curry")._1(c, [a])
                                },
                                viewer: K
                            })]
                        });
                    else
                        return l
                }
            };
            return {
                debugName: c.debugName,
                reactClassInternal: c.reactClassInternal,
                handedOffState: c.handedOffState,
                getDerivedStateFromProps: function(c) {
                    if (d === c.rawContact)
                        return c;
                    else
                        return {
                            contact: b("bs_curry")._1(a, d),
                            isActionsOpen: c.isActionsOpen,
                            thisRef: c.thisRef,
                            rawContact: d,
                            isHighlighted: c.isHighlighted,
                            onScrollIntoView: c.onScrollIntoView,
                            onRenderHighlight: c.onRenderHighlight
                        }
                },
                didMount: z,
                didUpdate: A,
                willUnmount: c.willUnmount,
                shouldUpdate: c.shouldUpdate,
                render: function(a) {
                    var c = a.state
                      , d = b("joinClasses")(N, "_5l37" + (b("Utils.bs").optionBoolToBool(r) ? " _1k1p" : "") + (c.isActionsOpen ? " _rwn" : ""))
                      , e = J !== void 0 ? b("TooltipData").propsFor(J, "left") : {}
                      , f = b("VideoCallWebDriverIDs").RTC_PICKER_DIALOG_CONTACT_LIST_ITEM
                      , g = c.contact.type === b("MercuryParticipantTypes").ASSISTANT_TYPEAHEAD;
                    g = g ? t(c.contact) : s(c.contact, L, K, I);
                    g = j.createElement(b("Link.react"), {
                        onClick: R,
                        onMouseDown: O,
                        onMouseEnter: Q,
                        tabIndex: 0,
                        children: j.jsxs(b("ImageBlock.react"), {
                            contentClassName: "_5l38",
                            spacing: "medium",
                            children: [l(K, I, c.contact), g, S(a)]
                        })
                    });
                    g = j.cloneElement(g, {
                        "data-testid": f + c.contact.uid
                    });
                    if (n === !0)
                        return j.jsx("li", {
                            children: g,
                            ref: b("bs_curry")._1(a.handle, y),
                            className: d
                        });
                    else
                        return j.cloneElement(j.jsx("li", {
                            children: g,
                            ref: b("bs_curry")._1(a.handle, y),
                            className: d,
                            role: "option"
                        }), e)
                },
                initialState: function(c) {
                    return {
                        contact: b("bs_curry")._1(a, d),
                        isActionsOpen: !1,
                        thisRef: {
                            contents: void 0
                        },
                        rawContact: d,
                        isHighlighted: r,
                        onScrollIntoView: C,
                        onRenderHighlight: B
                    }
                },
                retainedProps: c.retainedProps,
                reducer: function(a, c) {
                    return b("bs_block").__(0, [{
                        contact: c.contact,
                        isActionsOpen: a[0],
                        thisRef: c.thisRef,
                        rawContact: c.rawContact,
                        isHighlighted: c.isHighlighted,
                        onScrollIntoView: c.onScrollIntoView,
                        onRenderHighlight: c.onRenderHighlight
                    }])
                },
                jsElementWrapped: c.jsElementWrapped
            }
        };
        a = b("ReasonReact.bs").wrapReasonForJs(c, function(a) {
            var c;
            return d(a.contactAdapter, a.rawContact, (c = b("bs_caml_option")).nullable_to_opt(a.onHighlight), c.nullable_to_opt(a.onSelect), c.nullable_to_opt(a.onAction), c.nullable_to_opt(a.actionsClass), c.nullable_to_opt(a.admins), c.nullable_to_opt(a.disableRole), a.extraActionsEnabled, c.nullable_to_opt(a.hasHoverState), c.nullable_to_opt(a.invitedEntryIDs), c.nullable_to_opt(a.isHighlighted), c.nullable_to_opt(a.onRenderHighlight), c.nullable_to_opt(a.onScrollIntoView), c.nullable_to_opt(a.originalEntryIDs), c.nullable_to_opt(a.rowClassName), c.nullable_to_opt(a.rowElements), c.nullable_to_opt(a.selectedEntryIDs), c.nullable_to_opt(a.showPresence), c.nullable_to_opt(a.thread), c.nullable_to_opt(a.tooltipContent), a.viewer, a.useDarkTheme, [])
        });
        return [a, d]
    }
    c = 32;
    d = 3;
    f.videoCallWebDriverIDs = b("VideoCallWebDriverIDs");
    f.imageSize = c;
    f.assistantTypeaheadPrefixLength = d;
    f.idsContain = k;
    f.renderContactImage = l;
    f.renderBotBadge = m;
    f.renderVerifiedBadge = n;
    f.renderSnippet = o;
    f.renderMaybeEmojiStatus = p;
    f.renderContactTitle = q;
    f.renderRegularContact = r;
    f.renderContactText = s;
    f.renderAssistantTypeaheadText = t;
    f.getPresenceStatus = u;
    f.isOriginal = v;
    f.isInvited = w;
    f.isSelected = x;
    f.setThisRef = y;
    f.didMount = z;
    f.didUpdate = A;
    f.createMake = a
}
), null);
__d("MessengerContactList.react", ["cx", "fbt", "MessengerContactListRowReact.bs", "ImageBlock.react", "ImmutableObject", "Link.react", "MercuryIDs", "MessengerDotComAndInboxM4Check.bs", "MessengerSearchActions", "MessengerSpinner.react", "MessengerState.bs", "MessengerTypeaheadUtils", "React", "prop-types", "gkx", "immutable", "joinClasses"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    a = b("MessengerContactListRowReact.bs").createMake();
    var i = a[0];
    a[1];
    var j = b("React")
      , k = b("gkx")("818495");
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$1 = function(a, c) {
                var e = c[0];
                c = c[1];
                var f = d.props.rowComponent || i;
                return j.jsxs("div", {
                    className: "_29hk",
                    children: [d.$5(e, c, (c = d.props.useDarkTheme) != null ? c : !1), j.jsx("ul", {
                        id: d.props.controlleeID,
                        role: d.props.disableRole ? void 0 : "listbox",
                        className: "_29hl",
                        children: a.map(function(a, c) {
                            c = c === 0 ? b("joinClasses")(d.props.rowClassName, "_3h3c") : d.props.rowClassName;
                            var e = a.id || a.getUniqueID()
                              , g = d.props.thread;
                            if (k && e && !g) {
                                var h = b("MercuryIDs").getThreadIDFromUserID(e);
                                g = b("MessengerState.bs").getThreadMetaNow(d.props.viewer, h);
                                g || b("MessengerState.bs").getThreadMeta(d.props.viewer, h, function(a) {
                                    g = a
                                })
                            }
                            return j.jsx(f, {
                                actionsClass: d.props.actionsClass,
                                admins: d.props.admins,
                                contactAdapter: d.props.contactAdapter,
                                disableRole: d.props.disableRole,
                                extraActionsEnabled: !!d.props.extraActionsEnabled,
                                hasHoverState: d.props.hasHoverState,
                                invitedEntryIDs: d.props.invitedEntryIDs,
                                isHighlighted: d.props.highlightedEntry && d.props.highlightedEntry.getUniqueID() === a.getUniqueID(),
                                onAction: d.props.onAction,
                                onHighlight: d.props.onHighlight,
                                onRenderHighlight: d.props.onRenderHighlight,
                                onScrollIntoView: d.props.onScrollIntoView,
                                onSelect: d.props.onSelect,
                                originalEntryIDs: d.props.originalEntryIDs,
                                rawContact: a,
                                rowClassName: c,
                                rowElements: d.props.rowElements,
                                selectedEntryIDs: d.props.selectedEntryIDs,
                                showPresence: d.props.showPresence,
                                thread: g,
                                tooltipContent: a.getAuxiliaryData && a.getAuxiliaryData().tooltipContent,
                                useDarkTheme: (h = d.props.useDarkTheme) != null ? h : !1,
                                viewer: d.props.viewer
                            }, e)
                        })
                    })]
                }, e)
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.render = function() {
            return j.jsxs("div", {
                className: this.props.className,
                children: [this.props.listSections.map(this.$1).toArray(), this.props.showLoadMore ? this.$2() : this.$3(), this.$4()]
            })
        }
        ;
        d.$5 = function(a, c, d) {
            var e = this;
            if (!a)
                return null;
            d = b("MessengerDotComAndInboxM4Check.bs").yes ? "_225b _6ybl" + (d ? " _8slb" : "") : "_225b" + (d ? " _8slb" : "");
            return this.props.showSeeAll ? j.jsxs("div", {
                className: d,
                children: [a, j.jsx("a", {
                    className: "_87n7",
                    onMouseDown: function(a) {
                        e.props.onSeeAllSelect && c !== null && e.props.onSeeAllSelect(c, a)
                    },
                    children: h._("Xem t\u1ea5t c\u1ea3")
                })]
            }) : j.jsx("div", {
                className: d,
                children: a
            })
        }
        ;
        d.$2 = function() {
            return this.props.isLoading ? this.$3() : j.jsx("div", {
                className: "_8a02",
                children: j.jsx(b("Link.react"), {
                    href: "#",
                    onClick: b("MessengerSearchActions").loadMoreResults,
                    tabIndex: -1,
                    children: h._("T\u1ea3i th\u00eam")
                })
            })
        }
        ;
        d.$3 = function() {
            return !this.props.isLoading ? null : j.jsxs(b("ImageBlock.react"), {
                className: "_225c" + (this.props.useDarkTheme ? " _8tm0" : ""),
                spacing: "medium",
                children: [j.jsx(b("MessengerSpinner.react"), {
                    className: "_2i59",
                    color: "grey"
                }), j.jsx("div", {
                    className: "_4g0h" + (this.props.useDarkTheme ? " _8tm1" : ""),
                    children: h._("\u0110ang t\u00ecm ki\u1ebfm...")
                })]
            })
        }
        ;
        d.$4 = function() {
            if (this.props.queryString && this.props.queryString.length > 0 && !this.props.isLoading) {
                var a = this.props.listSections.filter(function(a) {
                    return a.length != 1 || !b("MessengerTypeaheadUtils").isMessageSearchEntry(a[0])
                }).size;
                if (a < 1)
                    if (b("MessengerDotComAndInboxM4Check.bs").yes)
                        return j.jsxs("div", {
                            className: "_8b0j",
                            children: [j.jsx("span", {
                                className: "_8b0k",
                                children: this.props.seeAllType ? h._("Kh\u00f4ng t\u00ecm th\u1ea5y {seeAllType} n\u00e0o", [h._param("seeAllType", this.props.seeAllType)]) : h._("Kh\u00f4ng t\u00ecm th\u1ea5y k\u1ebft qu\u1ea3")
                            }), j.jsx("span", {
                                className: "_8b0l",
                                children: h._("Ch\u00fang t\u00f4i kh\u00f4ng t\u00ecm \u0111\u01b0\u1ee3c k\u1ebft qu\u1ea3 n\u00e0o cho \"{query}\". H\u00e3y th\u1eed ki\u1ec3m tra ch\u00ednh t\u1ea3 ho\u1eb7c d\u00f9ng t\u1eeb ho\u00e0n ch\u1ec9nh.", [h._param("query", this.props.queryString)])
                            })]
                        });
                    else
                        return j.jsx("div", {
                            className: "_3xcx" + (this.props.useDarkTheme ? " _8tm2" : ""),
                            children: h._("Kh\u00f4ng t\u00ecm th\u1ea5y k\u1ebft qu\u1ea3 n\u00e0o")
                        })
            }
            return null
        }
        ;
        return c
    }(j.PureComponent);
    e.exports = c;
    c.propTypes = {
        actionsClass: (d = b("prop-types")).func,
        admins: d.object,
        controlleeID: d.string,
        contactAdapter: d.func.isRequired,
        disableRole: d.bool,
        extraActionsEnabled: d.bool,
        hasHoverState: d.bool,
        highlightedEntry: d.object,
        invitedEntryIDs: d.instanceOf((f = b("immutable")).Set),
        isLoading: d.bool,
        listSections: d.instanceOf(f.OrderedMap).isRequired,
        onAction: d.func,
        onHighlight: d.func,
        onRenderHighlight: d.func,
        onScrollIntoView: d.func,
        onSeeAllSelect: d.func,
        onSelect: d.func,
        originalEntryIDs: d.instanceOf(f.Set),
        queryString: d.string,
        rowClassName: d.string,
        rowElements: d.instanceOf(f.Map),
        selectedEntryIDs: d.instanceOf(f.Set),
        showLoadMore: d.bool,
        showPresence: d.bool,
        thread: d.instanceOf(b("ImmutableObject")),
        useDarkTheme: d.bool,
        viewer: d.string.isRequired
    }
}
), null);
__d("MessengerGraphQLTypeaheadHighlighter", ["Keys", "MessengerTypeaheadUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    f.getNextHighlightedEntry = a;
    function a(a, c, d, e) {
        var f = [];
        b("MessengerTypeaheadUtils").getEntryOrder(d).forEach(function(a) {
            return f.push.apply(f, c.filter(function(c) {
                return b("MessengerTypeaheadUtils").areSectionsEqual(c.getType(), a)
            }))
        });
        if (!e) {
            if (f.length === 0)
                return null;
            if (a === b("Keys").DOWN) {
                d = f[0];
                return d.getType() === "search" && f.length > 1 ? f[1] : d
            }
            return a === b("Keys").UP ? f[f.length - 1] : null
        }
        var g = e.getUniqueID();
        d = f.findIndex(function(a) {
            return a.getUniqueID() === g
        });
        if (d === -1)
            return null;
        a === b("Keys").DOWN ? (d += 1,
        d >= f.length && (d = 0)) : a === b("Keys").UP && (d -= 1,
        d < 0 && (d = f.length - 1));
        return f[d]
    }
}
), null);
__d("MessengerTypeaheadResultView.react", ["cx", "Bootloader", "Keys", "MessengerContactAdapters", "MessengerContactList.react", "MessengerGraphQLTypeaheadHighlighter", "MessengerSecondarySearchFunnelConstants", "MessengerTypeaheadUtils", "React", "SearchableEntry", "immutable", "joinClasses", "prop-types", "qex", "wrapNullableForReact"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = 50;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$1 = null,
            d.onKeyDown = function(a, c) {
                if (a === b("Keys").RETURN) {
                    d.props.onSelectHighlighted(c);
                    return
                }
                if (!d.$1)
                    return;
                c = b("MessengerGraphQLTypeaheadHighlighter").getNextHighlightedEntry(a, d.$1, d.props.queryString, d.props.highlightedEntry);
                d.props.onNextHighlighted(c)
            }
            ,
            d.$3 = function(a) {
                d.props.onNextHighlighted(a)
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.UNSAFE_componentWillMount = function() {
            this.$1 = this.$2(this.props)
        }
        ;
        d.componentDidMount = function() {
            var a = this;
            this.props.onMount(this.onKeyDown, function() {
                return a.$1
            })
        }
        ;
        d.UNSAFE_componentWillUpdate = function(a) {
            this.$1 = this.$2(a)
        }
        ;
        d.componentWillUnmount = function() {
            this.props.onUnmount()
        }
        ;
        d.render = function() {
            var a = this.$1;
            if (!a)
                return null;
            var c = ["search", "friend", "fb4c", "message", "thread", "page", "non_friend", "meeting_room_page", "internal_bot_page", "game"];
            a = b("MessengerTypeaheadUtils").buildListSections(a, this.props.queryString, c);
            c = !1;
            this.props.isTokenizer !== null && (c = b("qex")._("1063079") && !this.props.isTokenizer && this.props.queryString.length > 1);
            return h.jsx(b("MessengerContactList.react"), {
                controlleeID: this.props.controlleeID,
                className: b("joinClasses")(this.props.className, "_4p-s"),
                contactAdapter: b("MessengerContactAdapters").fromSearchableEntry,
                hasHoverState: this.props.hasHoverState,
                highlightedEntry: b("wrapNullableForReact")(this.props.highlightedEntry),
                isLoading: !1,
                listSections: a,
                onHighlight: this.$3,
                onScrollIntoView: this.props.onScrollIntoView,
                onSeeAllSelect: this.props.onSeeAllSelect,
                onSelect: this.props.onSelect,
                originalEntryIDs: this.props.originalEntryIDs,
                queryString: this.props.queryString,
                selectedEntryIDs: this.props.selectedEntryIDs,
                showPresence: !1,
                showSeeAll: (a = c) != null ? a : !1,
                viewer: this.props.viewer,
                rowComponent: this.props.rowComponent,
                useDarkTheme: (c = this.props.useDarkTheme) != null ? c : !1
            })
        }
        ;
        d.$2 = function(a) {
            var c = a.localEntries
              , d = {};
            c.forEach(function(a) {
                d[a.getUniqueID()] = !0
            });
            var e = b("MessengerTypeaheadUtils").sortEntries(this.$4(a, d), a.queryString)
              , f = null;
            f = c.concat(e).filter(function(b) {
                return !a.selectedEntryIDs.contains(b.getUniqueID())
            }).slice(0, i);
            this.$5(a.queryString, f, a.localEntryIDs);
            return f
        }
        ;
        d.$4 = function(a, b) {
            var c = a.customResultFilterFn || function() {
                return !0
            }
            ;
            return a.serverResults.filter(function(a) {
                return a && !b[a.getUniqueID()] && c(a)
            })
        }
        ;
        d.$5 = function(a, c, d) {
            this.props.isTokenizer ? b("Bootloader").loadModules(["MessengerBootloadedSecondarySearchLogger", "MessengerSearchLoggerUtil"], function(d, e) {
                var f = c.map(function(a) {
                    return {
                        result_fbid: a.getUniqueID(),
                        result_type: e.getLoggingTypeFromMercuryType(a.getType())
                    }
                });
                d.logSearchEvent({
                    name: b("MessengerSecondarySearchFunnelConstants").EVENTS.IMPRESSIONS,
                    query: a,
                    entries: f,
                    loggingID: b("MessengerSecondarySearchFunnelConstants").LOGGING_IDS.M_APP_COMPOSER
                })
            }, "MessengerTypeaheadResultView.react") : b("Bootloader").loadModules(["MessengerSearchLoggerUtil", "MessengerUniversalSearchFunnelLogger", "MessengerUniversalSearchFunnelLoggerConstants"], function(e, f, g) {
                var h = b("immutable").OrderedMap();
                c.forEach(function(a) {
                    var b = a.getUniqueID()
                      , c = b.split(":").pop();
                    a = {
                        result_fbid: c,
                        result_type: e.getLoggingTypeFromMercuryType(a.getType()),
                        rank_section: g.SOURCES.LOCAL_AND_SERVER,
                        data_source: [d.includes(c) ? g.SOURCES.LOCAL : g.SOURCES.LOCAL_AND_SERVER]
                    };
                    h = h.set(b, a)
                });
                f.logImpressions(h, a, g.RESULT_SURFACES.TYPEAHEAD, g.SOURCES.LOCAL_AND_SERVER)
            }, "MessengerTypeaheadResultView.react")
        }
        ;
        return c
    }(h.Component);
    e.exports = a;
    a.propTypes = {
        controlleeID: (c = b("prop-types")).string.isRequired,
        canViewerSendMoneyFilter: c.bool,
        className: c.string.isRequired,
        localEntries: c.arrayOf(c.instanceOf(b("SearchableEntry"))).isRequired,
        localEntryIDs: c.arrayOf(c.string.isRequired).isRequired,
        hasHoverState: c.bool.isRequired,
        highlightedEntry: c.object,
        onMount: c.func.isRequired,
        onNextHighlighted: c.func.isRequired,
        onScrollIntoView: c.func.isRequired,
        onSeeAllSelect: c.func,
        onSelect: c.func.isRequired,
        onSelectHighlighted: c.func.isRequired,
        onUnmount: c.func.isRequired,
        originalEntryIDs: c.instanceOf(b("immutable").Set).isRequired,
        queryString: c.string.isRequired,
        selectedEntryIDs: c.instanceOf(b("immutable").Set).isRequired,
        serverResults: c.arrayOf(c.instanceOf(b("SearchableEntry"))).isRequired,
        shouldQueryInternalBot: c.bool.isRequired,
        shouldQueryPages: c.bool.isRequired,
        shouldQueryVCEndpoint: c.bool.isRequired,
        viewer: c.string.isRequired,
        forGroup: c.bool,
        rowComponent: c.func,
        customResultFilterFn: c.func,
        useDarkTheme: c.bool
    };
    a.defaultProps = {
        controlleeID: "",
        className: "",
        customResultFilterFn: function() {
            return !0
        }
    }
}
), null);
__d("MessengerTypeaheadTopFriendsView.react", ["cx", "Keys", "MessengerContactAdapters", "MessengerContactList.react", "MessengerGraphQLTypeaheadHighlighter", "MessengerTypeaheadUtils", "React", "immutable", "joinClasses", "prop-types", "wrapNullableForReact"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.onKeyDown = function(a, c) {
                if (a === b("Keys").RETURN) {
                    d.props.onSelectHighlighted(c);
                    return
                }
                c = b("MessengerGraphQLTypeaheadHighlighter").getNextHighlightedEntry(a, d.props.entries.toArray(), d.props.queryString, d.props.highlightedEntry);
                d.props.onNextHighlighted(c)
            }
            ,
            d.$1 = function(a) {
                d.props.onNextHighlighted(a)
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.UNSAFE_componentWillMount = function() {
            this.props.hasHoverState && (this.props.entries.size > 0 && this.props.onNextHighlighted(this.props.entries.first()))
        }
        ;
        d.componentDidMount = function() {
            var a = this;
            this.props.onMount(this.onKeyDown, function() {
                return a.props.entries.toArray()
            })
        }
        ;
        d.componentWillUnmount = function() {
            this.props.onUnmount()
        }
        ;
        d.render = function() {
            var a;
            return h.jsx(b("MessengerContactList.react"), {
                controlleeID: this.props.controlleeID,
                className: b("joinClasses")(this.props.className, "_4p-s"),
                contactAdapter: b("MessengerContactAdapters").fromSearchableEntry,
                hasHoverState: this.props.hasHoverState,
                highlightedEntry: b("wrapNullableForReact")(this.props.highlightedEntry),
                isLoading: !!this.props.queryString,
                listSections: b("MessengerTypeaheadUtils").buildListSections(this.props.entries.toArray(), this.props.queryString),
                onHighlight: this.$1,
                onScrollIntoView: this.props.onScrollIntoView,
                onSelect: this.props.onSelect,
                originalEntryIDs: this.props.originalEntryIDs,
                queryString: this.props.queryString,
                selectedEntryIDs: this.props.selectedEntryIDs,
                showPresence: !1,
                viewer: this.props.viewer,
                rowComponent: this.props.rowComponent,
                useDarkTheme: (a = this.props.useDarkTheme) != null ? a : !1
            })
        }
        ;
        return c
    }(h.Component);
    e.exports = a;
    a.propTypes = {
        controlleeID: (c = b("prop-types")).string.isRequired,
        className: c.string.isRequired,
        entries: c.instanceOf(b("immutable").List).isRequired,
        hasHoverState: c.bool.isRequired,
        highlightedEntry: c.object,
        onNextHighlighted: c.func.isRequired,
        onMount: c.func.isRequired,
        onScrollIntoView: c.func.isRequired,
        onSelect: c.func.isRequired,
        onSelectHighlighted: c.func.isRequired,
        onUnmount: c.func.isRequired,
        originalEntryIDs: c.instanceOf(b("immutable").Set).isRequired,
        queryString: c.string.isRequired,
        selectedEntryIDs: c.instanceOf(b("immutable").Set).isRequired,
        viewer: c.string.isRequired,
        rowComponent: c.func,
        useDarkTheme: c.bool
    };
    a.defaultProps = {
        controlleeID: "",
        className: ""
    }
}
), null);
__d("MessengerGraphQLTypeaheadView.react", ["cx", "fbt", "Bootloader", "CurrentUser", "ImageBlock.react", "MercuryConfig", "MessengerBootloadedSecondarySearchLogger", "MessengerNewGroupParticipantSuggestionLocalCacheManager", "MessengerPaymentFriendsLocalCache", "MessengerRoomWithAssocObjectAudienceLocalCacheManager", "MessengerSearchWebGraphQLFetcher", "MessengerSecondarySearchFunnelConstants", "MessengerSpinner.react", "MessengerTypeaheadLocalCache", "MessengerTypeaheadResultView.react", "MessengerTypeaheadTopFriendsView.react", "MessengerTypeaheadUtils", "MessengerUniversalSearchFunnelLoggerConstants", "React", "createCancelableFunction", "debounce", "gkx", "immutable", "prop-types"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React")
      , j = b("MessengerSecondarySearchFunnelConstants").SEARCH_SURFACES.OMNIPICKER
      , k = b("MessengerUniversalSearchFunnelLoggerConstants").TYPE
      , l = 8
      , m = 10;
    a = 100;
    var n = 3
      , o = 10
      , p = 8
      , q = 5;
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.state = {
                localEntries: b("immutable").List(),
                queryCompleteStatus: {
                    usersGroups: !1,
                    pages: !1
                },
                serverResults: [],
                highlightedEntry: null
            },
            d.$1 = null,
            d.$2 = null,
            d.$3 = null,
            d.$4 = null,
            d.$5 = !0,
            d.$6 = b("MessengerRoomWithAssocObjectAudienceLocalCacheManager").get(),
            d.$7 = b("MessengerNewGroupParticipantSuggestionLocalCacheManager").get(),
            d.$8 = !1,
            d.$9 = null,
            d.$10 = 0,
            d.$13 = function(a, c, e, f, g, h) {
                if (d.props.queryString.length < 2)
                    return;
                d.$5 && d.setState({
                    serverResults: []
                });
                c = d.state.localEntries.toArray().filter(function(a) {
                    return a.getType() !== "search"
                }).map(function(a) {
                    return a.getUniqueID()
                });
                var i = [];
                e || i.push("groups");
                f || i.push("pages");
                d.props.enableMessageSearch && i.push("messages");
                g === null ? i.push("users") : i.push("rooms");
                h = {
                    userLimit: m,
                    messageLimit: n,
                    groupLimit: b("MercuryConfig").MaxThreadResults,
                    pageLimit: 5,
                    getQueryString: d.$12,
                    canViewerSendMoneyFilter: h,
                    localEntryIDs: c,
                    threadFBID: g,
                    shouldQueryInternalBot: d.props.shouldQueryInternalBot,
                    shouldQueryVCEndpoint: d.props.shouldQueryVCEndpoint
                };
                c = b("CurrentUser").isWorkUser() && b("gkx")("991794");
                !b("CurrentUser").isWorkUser() && d.$9 !== null ? d.$9.fetchMSQEntries(a, d.props.isTokenizer ? 0 : h.messageLimit, o, e ? 0 : p, f ? 0 : q, d.$29, d.$30) : c && d.$9 != null ? d.$9.fetchWorkChatSingleQueryEntries(a, h, d.$29, d.$30) : d.$9 !== null && d.$9.fetchEntries(a, i, h, d.$29, d.$30)
            }
            ,
            d.$29 = function(a, b) {
                if (d.$5) {
                    d.setState(function(c) {
                        return {
                            serverResults: c.serverResults.concat(a),
                            queryCompleteStatus: b === "singleServerQuery" ? Object.assign({}, c.queryCompleteStatus, {
                                usersGroups: !0
                            }, {
                                pages: !0
                            }) : Object.assign({}, c.queryCompleteStatus, (c = {},
                            c[b] = !0,
                            c))
                        }
                    });
                    return
                }
            }
            ,
            d.$30 = function(a, b) {
                d.setState(function(a) {
                    return {
                        queryCompleteStatus: Object.assign({}, a.queryCompleteStatus, (a = {},
                        a[b] = !0,
                        a))
                    }
                })
            }
            ,
            d.$12 = function() {
                return d.props.queryString
            }
            ,
            d.$20 = function(a, b) {
                d.$3 = a,
                d.$4 = b,
                d.$14()
            }
            ,
            d.$23 = function() {
                d.$3 = null,
                d.$4 = null
            }
            ,
            d.$21 = function(a) {
                d.setState({
                    highlightedEntry: a
                })
            }
            ,
            d.$22 = function(a) {
                d.state.highlightedEntry && d.props.onSelect(d.state.highlightedEntry, a)
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            var a = this;
            this.$10 = l;
            this.$11();
            var c = this.props.isTokenizer ? j : k;
            this.$9 = new (b("MessengerSearchWebGraphQLFetcher"))(function() {
                return a.$12()
            }
            ,c);
            this.$2 = b("debounce")(this.$13, 150, this, !0)
        }
        ;
        d.componentDidUpdate = function(a) {
            this.props !== a && (this.props.queryString !== a.queryString && this.$14())
        }
        ;
        d.$14 = function() {
            this.setState({
                highlightedEntry: null
            })
        }
        ;
        d.UNSAFE_componentWillReceiveProps = function(a) {
            var c = this;
            if (!a.queryString)
                this.setState({
                    highlightedEntry: null
                }),
                this.$11();
            else if (a.queryString !== this.props.queryString) {
                this.$8 = !0;
                this.setState({
                    queryCompleteStatus: {
                        userGroupQueryFinished: !1,
                        pagesQueryFinished: !1
                    },
                    serverResults: []
                });
                var d = a.roomAssociatedObject && a.roomAssociatedObject.privacy_mode;
                this.$2 && this.$2(a.queryString, b("MercuryConfig").MaxThreadResults, a.excludeGroups, a.excludePages, d === 0 ? a.threadFBID : null, a.canViewerSendMoneyFilter);
                if (d === 0) {
                    this.$15(a);
                    return
                }
                if (this.props.canViewerSendMoneyFilter) {
                    this.$16(a);
                    return
                }
                if (this.props.includeExistingParticipantIDs) {
                    this.$17(a);
                    return
                }
                b("MessengerTypeaheadLocalCache").search(a.queryString, function(d, e) {
                    if (c.$5 && e === a.queryString) {
                        d = b("MessengerTypeaheadUtils").sortEntries(d, e).slice(0, c.props.maxEntries);
                        var f = c.props.enableMessageSearch ? b("MessengerTypeaheadUtils").getMessageSearchEntry(e) : null;
                        f && d.unshift(f);
                        f = b("immutable").List(d).filter(function(a) {
                            if (c.props.excludeGroups && a.getType() === "thread")
                                return !1;
                            return c.props.excludePages && a.getType() === "page" ? !1 : !0
                        });
                        c.$18(f, e);
                        c.$19(f, e);
                        c.setState({
                            localEntries: f
                        })
                    }
                })
            }
        }
        ;
        d.shouldComponentUpdate = function(a, b) {
            return a.queryString !== this.props.queryString || a.isFocused !== this.props.isFocused || a.excludeGroups !== this.props.excludeGroups || a.excludePages !== this.props.excludePages || b.localEntries !== this.state.localEntries || b.queryCompleteStatus !== this.state.queryCompleteStatus || b.highlightedEntry !== this.state.highlightedEntry
        }
        ;
        d.componentWillUnmount = function() {
            this.$1 && this.$1.cancel(),
            this.$2 && this.$2.reset(),
            this.$5 = !1
        }
        ;
        d.render = function() {
            if (!this.props.isFocused && !this.props.queryString || !b("MessengerTypeaheadLocalCache").isBootstrapped() && !this.$6.isBootstrapped(this.props.threadFBID) && !b("MessengerPaymentFriendsLocalCache").isBootstrapped() && !this.$7.isBootstrapped(this.props.threadFBID, this.props.originalEntryIDs))
                if (b("gkx")("678607"))
                    return i.jsxs(b("ImageBlock.react"), {
                        className: "_225c",
                        spacing: "medium",
                        children: [i.jsx(b("MessengerSpinner.react"), {
                            className: "_2i59",
                            color: "grey"
                        }), i.jsx("div", {
                            className: "_4g0h",
                            children: h._("\u0110ang t\u00ecm ki\u1ebfm...")
                        })]
                    });
                else
                    return null;
            if (!this.props.queryString) {
                var a;
                return i.jsx(b("MessengerTypeaheadTopFriendsView.react"), {
                    className: this.props.typeaheadViewClassName,
                    entries: this.state.localEntries,
                    hasHoverState: this.props.hasHoverState,
                    highlightedEntry: this.state.highlightedEntry,
                    onMount: this.$20,
                    onNextHighlighted: this.$21,
                    onScrollIntoView: this.props.onScrollIntoView,
                    onSelect: this.props.onSelect,
                    onSelectHighlighted: this.$22,
                    onUnmount: this.$23,
                    originalEntryIDs: this.props.originalEntryIDs,
                    queryString: this.props.queryString,
                    selectedEntryIDs: this.props.selectedEntryIDs,
                    viewer: this.props.viewer,
                    rowComponent: this.props.rowComponent,
                    useDarkTheme: (a = this.props.useDarkTheme) != null ? a : !1
                })
            }
            a = this.state.queryCompleteStatus.usersGroups && (this.props.excludePages || this.state.queryCompleteStatus.pages);
            var c = !b("gkx")("1053071") && this.props.queryString.length < 2;
            return i.jsxs("div", {
                children: [this.state.queryCompleteStatus.usersGroups || c ? this.$24() : this.$25(), this.state.queryCompleteStatus.usersGroups && !a ? this.$26() : null]
            })
        }
        ;
        d.$25 = function() {
            var a = this.state.localEntries.slice(0, this.$10);
            return i.jsx(b("MessengerTypeaheadTopFriendsView.react"), {
                className: this.props.typeaheadViewClassName,
                entries: this.$27(a, this.props.queryString),
                hasHoverState: this.props.hasHoverState,
                highlightedEntry: this.state.highlightedEntry,
                onNextHighlighted: this.$21,
                onMount: this.$20,
                onScrollIntoView: this.props.onScrollIntoView,
                onSelect: this.props.onSelect,
                onSelectHighlighted: this.$22,
                onUnmount: this.$23,
                originalEntryIDs: this.props.originalEntryIDs,
                queryString: this.props.queryString,
                selectedEntryIDs: this.props.selectedEntryIDs,
                viewer: this.props.viewer,
                rowComponent: this.props.rowComponent,
                useDarkTheme: (a = this.props.useDarkTheme) != null ? a : !1
            })
        }
        ;
        d.$26 = function() {
            return i.jsxs(b("ImageBlock.react"), {
                className: "_225c",
                spacing: "medium",
                children: [i.jsx(b("MessengerSpinner.react"), {
                    className: "_2i59",
                    color: "grey"
                }), i.jsx("div", {
                    className: "_4g0h",
                    children: h._("\u0110ang t\u00ecm ki\u1ebfm...")
                })]
            })
        }
        ;
        d.$24 = function(a) {
            var c = this.$28()
              , d = this.state.localEntries.slice(0, this.$10);
            return i.jsx(b("MessengerTypeaheadResultView.react"), babelHelpers["extends"]({}, a, {
                className: this.props.typeaheadViewClassName,
                hasHoverState: this.props.hasHoverState,
                highlightedEntry: this.state.highlightedEntry,
                isTokenizer: this.props.isTokenizer,
                localEntries: d.toArray(),
                onMount: this.$20,
                onNextHighlighted: this.$21,
                onScrollIntoView: this.props.onScrollIntoView,
                onSeeAllSelect: this.props.onSeeAllSelect,
                onSelect: this.props.onSelect,
                onSelectHighlighted: this.$22,
                onUnmount: this.$23,
                originalEntryIDs: this.props.originalEntryIDs,
                selectedEntryIDs: this.props.selectedEntryIDs,
                serverResults: this.state.serverResults,
                viewer: this.props.viewer,
                rowComponent: this.props.rowComponent,
                useDarkTheme: (a = this.props.useDarkTheme) != null ? a : !1
            }, c))
        }
        ;
        d.$27 = function(a, b) {
            var c = this;
            b = a.filter(function(a) {
                return !c.props.selectedEntryIDs.contains(a.getUniqueID())
            });
            return b
        }
        ;
        d.onKeyDown = function(a, b) {
            this.$3 && this.$3(a, b)
        }
        ;
        d.$15 = function(a) {
            var c = this;
            this.$6.search(a.threadFBID, a.queryString, function(d, e) {
                if (c.$5 && e === a.queryString) {
                    d = b("MessengerTypeaheadUtils").sortEntries(d, e).slice(0, c.props.maxEntries);
                    c.setState({
                        localEntries: b("immutable").List(d)
                    })
                }
            })
        }
        ;
        d.$31 = function() {
            var a = this;
            this.setState({
                localEntries: b("immutable").List()
            });
            this.$1 = b("createCancelableFunction")(function(c) {
                c = c.slice(0, 30);
                a.setState({
                    localEntries: b("immutable").List(c)
                })
            });
            this.$6.onEntriesLoaded(this.props.threadFBID, function(b) {
                a.$1 && a.$1(b),
                a.$1 = null
            })
        }
        ;
        d.$17 = function(a) {
            var c = this;
            this.$7.search(a.threadFBID, a.originalEntryIDs, a.queryString, function(d, e) {
                if (c.$5 && e === a.queryString) {
                    d = b("MessengerTypeaheadUtils").sortEntries(d, e).slice(0, c.props.maxEntries);
                    c.setState({
                        localEntries: b("immutable").List(d)
                    })
                }
            })
        }
        ;
        d.$32 = function() {
            var a = this;
            this.setState({
                localEntries: b("immutable").List()
            });
            this.$1 = b("createCancelableFunction")(function(c) {
                a.setState({
                    localEntries: b("immutable").List(c.slice(0, 50))
                })
            });
            this.$7.onEntriesLoaded(this.props.threadFBID, this.props.originalEntryIDs, function(b) {
                a.$1 && a.$1(b),
                a.$1 = null
            })
        }
        ;
        d.$16 = function(a) {
            var c = this;
            b("MessengerPaymentFriendsLocalCache").search(a.queryString, function(d, e) {
                if (c.$5 && e === a.queryString) {
                    d = b("MessengerTypeaheadUtils").sortEntries(d, e).slice(0, c.props.maxEntries);
                    c.setState({
                        localEntries: b("immutable").List(d)
                    })
                }
            })
        }
        ;
        d.$33 = function() {
            var a = this;
            this.setState({
                localEntries: b("immutable").List()
            });
            this.$1 = b("createCancelableFunction")(function(c) {
                a.setState({
                    localEntries: b("immutable").List(c)
                })
            });
            b("MessengerPaymentFriendsLocalCache").onEntriesLoaded(function(b) {
                a.$1 && a.$1(b),
                a.$1 = null
            })
        }
        ;
        d.$11 = function() {
            var a = this
              , c = this.props.roomAssociatedObject && this.props.roomAssociatedObject.privacy_mode;
            if (c === 0) {
                this.$31();
                return
            }
            if (this.props.canViewerSendMoneyFilter) {
                this.$33();
                return
            }
            if (this.props.includeExistingParticipantIDs) {
                this.$32();
                return
            }
            this.setState({
                localEntries: b("immutable").List()
            });
            this.$1 = b("createCancelableFunction")(function(c, d, e) {
                c = c.slice(0, 50);
                a.props.excludeGroups || (c = c.concat(d));
                if (!e || !a.props.queryString) {
                    d = a.props.enableMessageSearch ? b("MessengerTypeaheadUtils").getMessageSearchEntry(a.props.queryString) : null;
                    d && c.unshift(d);
                    a.props.queryString === "" && a.$34(c);
                    a.setState({
                        localEntries: b("immutable").List(c)
                    })
                }
            });
            b("MessengerTypeaheadLocalCache").onEntriesLoaded(function(b, c, d) {
                a.$1 && a.$1(b, c, d),
                a.$1 = null
            })
        }
        ;
        d.$28 = function() {
            var a = this.props.canViewerSendMoneyFilter
              , c = this.state.localEntries.toArray();
            c = c.filter(function(a) {
                return a.getType() !== "search"
            }).map(function(a) {
                return a.getUniqueID()
            });
            var d = b("MercuryConfig").MaxThreadResults
              , e = this.props.roomAssociatedObject && this.props.roomAssociatedObject.privacy_mode;
            e = e === 0;
            var f = !this.props.excludeGroups && this.props.queryString && this.props.queryString.length > 1 && !e
              , g = !this.props.excludeGroups && c.length > 0 && !e
              , h = !this.props.excludeGroups && (!g || b("CurrentUser").isEmployee()) && !e
              , i = !1
              , j = !this.props.excludePages && !e
              , k = this.props.shouldQueryVCEndpoint && (b("CurrentUser").isEmployee() || b("CurrentUser").isWorkUser()) && !e
              , l = this.props.shouldQueryInternalBot && b("CurrentUser").isEmployee() && b("CurrentUser").isWorkUser() && !e
              , m = e
              , n = this.props.threadFBID;
            return {
                queryString: this.props.queryString,
                canViewerSendMoneyFilter: a,
                localEntryIDs: c,
                maxThreadResults: d,
                shouldQueryGroups: i,
                shouldQueryPages: j,
                shouldQueryThreadName: f,
                shouldQueryParticipantIDs: g,
                shouldQueryParticipantNames: h,
                shouldQueryVCEndpoint: k,
                shouldQueryInternalBot: l,
                shouldQueryRoomsAudience: e,
                shouldSkipQueryUsers: m,
                threadFBID: n,
                customResultFilterFn: this.props.customResultFilterFn,
                forGroup: this.props.forGroup
            }
        }
        ;
        d.$19 = function(a, c) {
            var d = this;
            this.props.isTokenizer ? b("Bootloader").loadModules(["MessengerSearchLoggerUtil"], function(e) {
                if (d.props.queryString === c) {
                    var f = a.map(function(a) {
                        return {
                            result_fbid: a.getUniqueID(),
                            result_type: e.getLoggingTypeFromMercuryType(a.getType())
                        }
                    });
                    b("MessengerBootloadedSecondarySearchLogger").logSearchEvent({
                        name: b("MessengerSecondarySearchFunnelConstants").EVENTS.IMPRESSIONS,
                        query: "",
                        loggingID: b("MessengerSecondarySearchFunnelConstants").LOGGING_IDS.M_APP_COMPOSER,
                        entries: f
                    })
                }
            }, "MessengerGraphQLTypeaheadView.react") : b("Bootloader").loadModules(["MessengerUniversalSearchFunnelLogger", "MessengerSearchLoggerUtil"], function(e, f) {
                if (d.props.queryString === c) {
                    var g = b("immutable").OrderedMap();
                    a.forEach(function(a) {
                        var c = a.getUniqueID();
                        a = {
                            result_fbid: c,
                            result_type: f.getLoggingTypeFromMercuryType(a.getType()),
                            rank_section: b("MessengerUniversalSearchFunnelLoggerConstants").SOURCES.LOCAL,
                            data_source: [b("MessengerUniversalSearchFunnelLoggerConstants").SOURCES.LOCAL]
                        };
                        g = g.set(c, a)
                    });
                    e.logImpressions(g, c)
                }
            }, "MessengerGraphQLTypeaheadView.react")
        }
        ;
        d.$34 = function(a) {
            b("Bootloader").loadModules(["MessengerUniversalSearchFunnelLogger"], function(b) {
                b.logNullStateImpressions(a, a.length)
            }, "MessengerGraphQLTypeaheadView.react")
        }
        ;
        d.$18 = function(a, c) {
            var d = this;
            if (this.props.isTokenizer) {
                var e;
                b("MessengerBootloadedSecondarySearchLogger").logSearchEvent({
                    name: (e = b("MessengerSecondarySearchFunnelConstants")).EVENTS.SOURCE_ENDED,
                    query: c,
                    ids: a.map(function(a) {
                        return a.getUniqueID()
                    }),
                    source: e.SOURCES.LOCAL_CONTACTS,
                    numResults: a.size,
                    status: e.SOURCE_STATUSES.FINISHED,
                    loggingID: e.LOGGING_IDS.M_APP_COMPOSER
                })
            } else
                b("Bootloader").loadModules(["MessengerUniversalSearchFunnelLogger", "MessengerSearchLoggerUtil"], function(e, f) {
                    var g = a;
                    if (d.props.queryString === c) {
                        var h = b("immutable").OrderedMap();
                        g.forEach(function(a) {
                            var c = a.getUniqueID();
                            a = {
                                result_fbid: c,
                                result_type: f.getLoggingTypeFromMercuryType(a.getType()),
                                rank_section: b("MessengerUniversalSearchFunnelLoggerConstants").SOURCES.LOCAL,
                                data_source: [b("MessengerUniversalSearchFunnelLoggerConstants").SOURCES.LOCAL]
                            };
                            h = h.set(c, a)
                        });
                        e.logImpressions(h, c)
                    }
                }, "MessengerGraphQLTypeaheadView.react")
        }
        ;
        return c
    }(i.Component);
    e.exports = c;
    c.propTypes = {
        includeExistingParticipantIDs: (d = b("prop-types")).bool,
        canViewerSendMoneyFilter: d.bool,
        enableMessageSearch: d.bool.isRequired,
        excludeGroups: d.bool.isRequired,
        excludePages: d.bool.isRequired,
        forGroup: d.bool,
        isFocused: d.bool.isRequired,
        hasHoverState: d.bool.isRequired,
        maxEntries: d.number.isRequired,
        onScrollIntoView: d.func.isRequired,
        onSeeAllSelect: d.func,
        onSelect: d.func.isRequired,
        originalEntryIDs: d.instanceOf(b("immutable").Set).isRequired,
        queryString: d.string.isRequired,
        roomAssociatedObject: d.object,
        selectedEntryIDs: d.instanceOf(b("immutable").Set).isRequired,
        shouldQueryInternalBot: d.bool.isRequired,
        shouldQueryVCEndpoint: d.bool.isRequired,
        threadFBID: d.string,
        typeaheadViewClassName: d.string.isRequired,
        viewer: d.string.isRequired,
        rowComponent: d.func,
        customResultFilterFn: d.func,
        useDarkTheme: d.bool
    };
    c.defaultProps = {
        maxEntries: a,
        typeaheadViewClassName: ""
    }
}
), null);
__d("MessengerScrollableArea.react", ["cx", "React", "ReactDOM", "ScrollableArea.react", "Style", "UserAgent", "clearImmediate", "gkx", "joinClasses", "setImmediate", "throttle"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = 20
      , j = b("gkx")("1094116");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(c) {
            var d;
            d = a.call(this, c) || this;
            d.$1 = !1;
            d.$2 = null;
            d.$5 = function() {
                if (d.$1) {
                    var a;
                    d.props.onScroll && (a = d.props).onScroll.apply(a, arguments)
                }
            }
            ;
            d.$6 = function() {
                if (!b("UserAgent").isBrowser("IE"))
                    return;
                if (j)
                    return;
                if (!d.refs || !d.$4.current)
                    return;
                var a = d.$4.current.refs.wrap
                  , c = d.$4.current.refs.body;
                if (!c || !a)
                    return;
                c = b("ReactDOM").findDOMNode(c);
                a = b("ReactDOM").findDOMNode(a);
                a = a.offsetWidth - a.clientWidth;
                a > 0 && b("Style").set(c, "margin-right", -a + "px")
            }
            ;
            d.$3 = b("throttle")(d.$5, 50);
            d.$4 = h.createRef();
            return d
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            this.$2 = b("setImmediate")(this.$6),
            this.$1 = !0
        }
        ;
        d.componentWillUnmount = function() {
            b("clearImmediate")(this.$2),
            this.$1 = !1
        }
        ;
        d.render = function() {
            var a = this.props.needsFastScrollHandler ? this.$5 : this.$3;
            return h.jsx(b("ScrollableArea.react"), {
                className: b("joinClasses")("_5f0v", this.props.className),
                height: this.props.height,
                onClick: this.props.onClick,
                onScroll: a,
                persistent: !0,
                ref: this.$4,
                shadow: !1,
                tabIndex: this.props.tabIndex,
                width: this.props.width,
                children: this.props.children
            })
        }
        ;
        d.getArea = function() {
            if (this.$4.current)
                return this.$4.current.getArea()
        }
        ;
        d.scrollToBottom = function(a) {
            var b = this.getArea();
            b && this.scrollToPosition(b.getScrollHeight(), !!a)
        }
        ;
        d.scrollToTop = function(a) {
            var b = this.getArea();
            b && b.scrollToTop(!!a)
        }
        ;
        d.scrollToPosition = function(a, b, c) {
            b === void 0 && (b = !1);
            c === void 0 && (c = {});
            var d = this.getArea();
            if (!d)
                return;
            d.setScrollTop(a, b, c)
        }
        ;
        d.isScrolledToBottom = function() {
            return this.isScrolledToBottomWithHeight(0)
        }
        ;
        d.isScrolledToBottomWithHeight = function(a) {
            var b = this.getArea();
            return !b ? !1 : b.getScrollTop() + b.getClientHeight() + a >= b.getScrollHeight() - i
        }
        ;
        d.isScrolledToTop = function() {
            var a = this.getArea();
            return !a ? !0 : a.getScrollTop() <= i
        }
        ;
        d.getScrollTop = function() {
            var a = this.getArea();
            return !a ? 0 : a.getScrollTop()
        }
        ;
        return c
    }(h.Component);
    e.exports = a
}
), null);
__d("MessengerGraphQLSearchTypeahead.react", ["ix", "fbt", "cx", "Bootloader", "BootloadOnRender.react", "ContextualLayer.react", "CurrentUser", "Event", "Image.react", "JSResource", "Keys", "LazyComponent.react", "MercuryIDs", "MercuryThreadIDMap", "MessengerContentSearchFunnelLoggerConstants", "MessengerSearchActions", "MessengerUniversalSearchFunnelLoggerConstants", "gkx", "immutable", "MercuryVanityIDMap.bs", "MessengerDotComAndInboxM4Check.bs", "MessengerGraphQLTypeaheadView.react", "MessengerScrollableArea.react", "MessengerSpinner.react", "MessengerState.bs", "MessengerTypeaheadUtils", "MNPlatformTagsDataManager", "React", "createReactClass_DEPRECATED", "ReactDOM", "ReactLayeredComponentMixin_DEPRECATED", "asset", "clearImmediate", "emptyFunction", "joinClasses", "qex", "prop-types", "setImmediate"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = b("MercuryThreadIDMap").get()
      , k = b("React")
      , l = 30
      , m = 100;
    c = b("createReactClass_DEPRECATED")({
        displayName: "MessengerGraphQLSearchTypeahead",
        mixins: [b("ReactLayeredComponentMixin_DEPRECATED")],
        _input: null,
        _timer: null,
        _view: null,
        propTypes: {
            includeExistingParticipantIDs: (a = b("prop-types")).bool,
            canViewerSendMoneyFilter: a.bool,
            className: a.string.isRequired,
            context: a.object,
            enableMessageSearch: a.bool.isRequired,
            excludeGroups: a.bool.isRequired,
            excludePages: a.bool.isRequired,
            customResultFilterFn: a.func,
            forGroup: a.bool,
            hasHoverState: a.bool.isRequired,
            hideClearButton: a.bool.isRequired,
            isMessageSearchMode: a.bool,
            isFacebookChat: a.bool.isRequired,
            isFocused: a.bool.isRequired,
            isTokenizer: a.bool.isRequired,
            onBackspace: a.func.isRequired,
            onBlur: a.func.isRequired,
            onChange: a.func.isRequired,
            onClear: a.func.isRequired,
            onClick: a.func.isRequired,
            onFocus: a.func.isRequired,
            onScrollIntoView: a.func.isRequired,
            onSelect: a.func.isRequired,
            originalEntryIDs: a.instanceOf(b("immutable").Set).isRequired,
            placeholder: a.string.isRequired,
            queryString: a.string,
            roomAssociatedObject: a.object,
            scrollableViewClassName: a.string.isRequired,
            selectedEntryIDs: a.instanceOf(b("immutable").Set).isRequired,
            shouldQueryInternalBot: a.bool.isRequired,
            shouldQueryVCEndpoint: a.bool.isRequired,
            tabIndex: a.number,
            threadFBID: a.string,
            typeaheadViewClassName: a.string.isRequired,
            useLayer: a.bool.isRequired,
            viewer: a.string.isRequired,
            width: a.number,
            rowComponent: a.func,
            searchInputPortalRef: a.instanceOf(HTMLDivElement),
            useDarkTheme: a.bool
        },
        refs_scrollable: null,
        getInitialState: function() {
            return {
                gameID: null
            }
        },
        getDefaultProps: function() {
            var a;
            return {
                includeExistingParticipantIDs: !1,
                canViewerSendMoneyFilter: !1,
                isFacebookChat: !1,
                isTokenizer: !1,
                onBackspace: a = b("emptyFunction"),
                onChange: a,
                onClear: a,
                onClick: a,
                onScrollIntoView: a,
                originalEntryIDs: b("immutable").Set(),
                placeholder: "",
                scrollableViewClassName: "",
                selectedEntryIDs: b("immutable").Set(),
                typeaheadViewClassName: "",
                useLayer: !1,
                useDarkTheme: !1
            }
        },
        componentDidMount: function() {
            this._timer = b("setImmediate")(this._syncInputWidth)
        },
        componentDidUpdate: function() {
            b("clearImmediate")(this._timer),
            this._timer = b("setImmediate")(this._syncInputWidth)
        },
        componentWillUnmount: function() {
            b("clearImmediate")(this._timer)
        },
        renderLayers: function() {
            var a = this;
            if (!this.props.useLayer)
                return {};
            var c = null
              , d = null;
            this.props.context ? c = this.props.context : d = function() {
                return a._input
            }
            ;
            return {
                typeaheadView: k.jsx(b("ContextualLayer.react"), {
                    context: c,
                    contextRef: d,
                    position: "below",
                    shown: (this.props.queryString || b("gkx")("678607")) && this.props.isFocused,
                    shouldSetARIAProperties: !1,
                    children: this._renderView()
                })
            }
        },
        render: function() {
            var a = this.props.useLayer ? null : this._renderView();
            return k.jsxs("div", {
                className: (this.props.isTokenizer ? "" : "_1nq2") + (b("MessengerDotComAndInboxM4Check.bs").yes ? " _7vup" : "") + (this.props.isTokenizer ? " _3mkz" : ""),
                children: [k.jsxs("span", {
                    className: b("joinClasses")(this.props.className, "_58ah" + (this.props.isMessageSearchMode ? " _1a03" : "")),
                    onChange: this.props.onChange,
                    onSelect: b("emptyFunction"),
                    tabIndex: null,
                    children: [this._renderInput(), a]
                }), k.jsx(b("Image.react"), {
                    onMouseDown: this._onClear,
                    className: (this.props.hideClearButton ? "hidden_elem" : "") + " _2xme",
                    src: g("489953")
                }), k.jsx("span", {
                    ref: "textSizeProxy",
                    className: "_58-3",
                    "aria-hidden": "true",
                    children: this.props.queryString || this.props.placeholder
                }), this._renderGame()]
            })
        },
        focusInput: function() {
            this._input && this._input.focus()
        },
        _onClear: function() {
            this.props.isMessageSearchMode && this._logClearContentSearch(),
            this.props.onClear()
        },
        _syncInputWidth: function() {
            if (!this.props.isTokenizer)
                return;
            var a = b("ReactDOM").findDOMNode(this.refs.textSizeProxy);
            a = a ? a.offsetWidth : 0;
            if (a === 0)
                return;
            this._input && (this._input.style.width = a + "px")
        },
        _renderInput: function() {
            var a = this
              , c = b("CurrentUser").isWorkUser() && this.props.searchInputPortalRef != null ? this.props.searchInputPortalRef : null
              , d = b("CurrentUser").isWorkUser() && this.props.isMessageSearchMode ? k.jsx(b("Image.react"), {
                onMouseDown: this._onClear,
                className: (this.props.hideClearButton ? "hidden_elem" : "") + " _8tx7",
                src: g("489953")
            }) : null;
            d = k.jsxs(k.Fragment, {
                children: [k.jsx("label", {
                    className: "_58ak",
                    children: k.jsx("input", {
                        autoComplete: "off",
                        className: "_58al _7tpc" + (this.props.useDarkTheme ? " _8tnl" : ""),
                        onBlur: this._handleBlur,
                        onClick: this.props.onClick,
                        onChange: function() {},
                        onFocus: function(b) {
                            return a.props.onFocus()
                        },
                        onKeyDown: function(b) {
                            return a._handleKeyDown(b)
                        },
                        placeholder: this.props.placeholder,
                        ref: function(b) {
                            return a._input = b
                        },
                        spellCheck: !1,
                        tabIndex: this.props.tabIndex,
                        type: "text",
                        value: this.props.queryString,
                        "aria-label": b("CurrentUser").isWorkUser() ? h._("T\u00ecm ki\u1ebfm trong Workchat") : h._("T\u00ecm ki\u1ebfm tr\u00ean Messenger")
                    })
                }), d]
            });
            if (c != null)
                return b("ReactDOM").createPortal(d, c);
            else
                return d
        },
        _renderGame: function() {
            return !this.state.gameID ? null : k.jsx(b("BootloadOnRender.react"), {
                loader: b("JSResource")("MessengerGamesQuicksilverPlayerContainer.react").__setRef("MessengerGraphQLSearchTypeahead.react"),
                placeholder: k.jsx(b("MessengerSpinner.react"), {}),
                component: k.jsx(b("LazyComponent.react"), {
                    initialContextType: "SOLO",
                    initialContextSourceID: null,
                    initialGameID: this.state.gameID,
                    onHide: this._handleHideGame,
                    initialSource: "messenger_search",
                    sourceID: null
                })
            })
        },
        _renderView: function() {
            var a = this;
            if (!this.props.isFocused)
                return null;
            if (!this.props.queryString) {
                var c = b("gkx")("678607") ? !1 : this.props.isTokenizer && !this.props.forGroup;
                if (c)
                    return null
            }
            c = this.props.isTokenizer ? l : m;
            c = k.jsx(b("MessengerGraphQLTypeaheadView.react"), {
                includeExistingParticipantIDs: this.props.includeExistingParticipantIDs,
                canViewerSendMoneyFilter: this.props.canViewerSendMoneyFilter,
                enableMessageSearch: this.props.enableMessageSearch,
                excludeGroups: this.props.excludeGroups,
                excludePages: this.props.excludePages,
                customResultFilterFn: this.props.customResultFilterFn,
                forGroup: this.props.forGroup,
                isFocused: this.props.isFocused,
                isTokenizer: this.props.isTokenizer,
                hasHoverState: this.props.hasHoverState,
                maxEntries: c,
                onScrollIntoView: this._handleScrollIntoView,
                onSeeAllSelect: this._handleSeeAllSelect,
                onSelect: this._handleSelect,
                originalEntryIDs: this.props.originalEntryIDs,
                queryString: this.props.queryString,
                ref: function(b) {
                    return a._view = b
                },
                roomAssociatedObject: this.props.roomAssociatedObject,
                shouldQueryInternalBot: this.props.shouldQueryInternalBot,
                shouldQueryVCEndpoint: this.props.shouldQueryVCEndpoint,
                selectedEntryIDs: this.props.selectedEntryIDs,
                threadFBID: this.props.threadFBID,
                typeaheadViewClassName: this.props.typeaheadViewClassName,
                viewer: this.props.viewer,
                rowComponent: this.props.rowComponent,
                useDarkTheme: (c = this.props.useDarkTheme) != null ? c : !1
            });
            if (this.props.isTokenizer)
                return k.jsx(b("MessengerScrollableArea.react"), {
                    className: this.props.scrollableViewClassName,
                    ref: function(b) {
                        return a.refs_scrollable = b
                    },
                    width: this.props.width,
                    children: c
                });
            else
                return c
        },
        _handleScrollIntoView: function(a) {
            if (!a)
                return;
            if (!this.props.isTokenizer) {
                this.props.onScrollIntoView(a);
                return
            }
            this.refs_scrollable && b("MessengerTypeaheadUtils").scrollEntryIntoView(a, this.refs_scrollable)
        },
        _getThreadID: function(a, c) {
            b("MessengerState.bs").getThreadMeta(b("CurrentUser").getID(), b("MercuryIDs").getThreadIDFromUserID(a), function(a) {
                return c(a.thread_id)
            })
        },
        _handleSeeAllSelect: function(a, c) {
            c && c.preventDefault();
            if (b("qex")._("1097094")) {
                c = this.props.queryString;
                a === "message" ? (this._endSearchFunnelStartContentSearchFunnel(c, "search", !0),
                b("MessengerSearchActions").changeQueryAll(c),
                b("MessengerSearchActions").enterMessageSearch()) : (b("MessengerSearchActions").changeQuerySeeAll(c, a),
                b("MessengerSearchActions").enterSeeAllSearch())
            }
        },
        _handleSelect: function(a, c) {
            c && c.preventDefault();
            c = this.props.queryString;
            var d = a.getType()
              , e = a.getUniqueID().split(":").pop()
              , f = a.getAuxiliaryData().alias;
            if (f) {
                var g = b("MercuryIDs").getParticipantIDFromUserID(e);
                b("MercuryVanityIDMap.bs").set(f, g)
            }
            switch (d) {
            case "game":
                this.setState({
                    gameID: e
                });
                return;
            case "search":
                b("qex")._("1097094") && b("MessengerSearchActions").enterMessageSearch();
                this._endSearchFunnelStartContentSearchFunnel(c, d);
                b("MessengerSearchActions").changeQueryAll(c);
                return;
            case "message":
                this._updateToThread(e, a);
                this._endSearchFunnelStartContentSearchFunnel(c, d);
                break;
            default:
                this._updateToThread(e, a)
            }
            b("MNPlatformTagsDataManager").updateThreadTabAfterSelectThread("source:messenger:web_search", e)
        },
        _updateToThread: function(a, b) {
            var c = this
              , d = function(a) {
                return c.props.onSelect(a, b.getType(), b)
            };
            b.getType() === "thread" || b.getAuxiliaryData().messageResultType === "groupConversation" ? j.getClientIDFromServerID(a, d) : this._getThreadID(a, d)
        },
        _handleHideGame: function() {
            this.setState({
                gameID: null
            })
        },
        _handleKeyDown: function(a) {
            var c = a.keyCode;
            c === b("Keys").DOWN || c === b("Keys").UP || c === b("Keys").RETURN ? this.props.isMessageSearchMode && c === b("Keys").RETURN ? this.props.queryString !== "" && b("MessengerSearchActions").changeQueryAll(this.props.queryString) : this._view && this._view.onKeyDown && this._view.onKeyDown(c, a) : c === b("Keys").BACKSPACE ? this.props.onBackspace(a) : c === b("Keys").ESC && (this._input && this._input.blur())
        },
        _handleBlur: function() {
            var a = this
              , c = null
              , d = b("Event").listen(window, "blur", function() {
                d.remove(),
                b("clearImmediate")(c)
            });
            c = b("setImmediate")(function() {
                d.remove(),
                a.props.onBlur()
            })
        },
        _logClearContentSearch: function() {
            b("Bootloader").loadModules(["MessengerContentSearchFunnelLogger"], function(a) {
                return a && a.endFunnel(b("MessengerContentSearchFunnelLoggerConstants").FUNNEL_LOGGER_TAGS.END_WITH_X_BUTTON)
            }, "MessengerGraphQLSearchTypeahead.react")
        },
        _endSearchFunnelStartContentSearchFunnel: function(a, c, d) {
            var e = this;
            d === void 0 && (d = !1);
            !d && c !== "search" ? (b("Bootloader").loadModules(["MessengerUniversalSearchFunnelLogger"], function(a) {
                a.logResultSelected(e.state.query, e.props.threadFBID || "", c, b("MessengerUniversalSearchFunnelLoggerConstants").RESULT_SURFACES.TYPEAHEAD, b("MessengerUniversalSearchFunnelLoggerConstants").RESULT_PAGES.FIRST)
            }, "MessengerGraphQLSearchTypeahead.react"),
            b("Bootloader").loadModules(["MessengerUniversalSearchFunnelLogger"], function(a) {
                return a.endFunnel((a = b("MessengerUniversalSearchFunnelLoggerConstants")).END_REASONS.END_ACTION, a.END_ACTIONS.ENTER_INTEGRATED_MESSAGE_SEARCH, null, a.ENTRY_SURFACES.INBOX, a.RESULT_PAGES.FIRST)
            }, "MessengerGraphQLSearchTypeahead.react")) : (!d && c === "search" || d && c === "message") && (b("Bootloader").loadModules(["MessengerUniversalSearchFunnelLogger"], function(a) {
                a.logResultSelected(e.state.query, e.props.threadFBID || "", "message", b("MessengerUniversalSearchFunnelLoggerConstants").RESULT_SURFACES.TYPEAHEAD, b("MessengerUniversalSearchFunnelLoggerConstants").RESULT_PAGES.SEE_ALL)
            }, "MessengerGraphQLSearchTypeahead.react"),
            b("Bootloader").loadModules(["MessengerUniversalSearchFunnelLogger"], function(a) {
                return a.endFunnel((a = b("MessengerUniversalSearchFunnelLoggerConstants")).END_REASONS.END_ACTION, a.END_ACTIONS.MESSAGE_SEARCH, null, a.ENTRY_SURFACES.INBOX, a.RESULT_PAGES.SEE_ALL)
            }, "MessengerGraphQLSearchTypeahead.react"));
            b("Bootloader").loadModules(["MessengerContentSearchFunnelLogger"], function(d) {
                return d.startFunnel(a, c === "search" ? b("MessengerContentSearchFunnelLoggerConstants").ENTRY_SURFACES.SEARCH_ALL_THREADS : b("MessengerContentSearchFunnelLoggerConstants").ENTRY_SURFACES.SEARCH_FROM_INTEGRATED_MESSAGE_SEARCH)
            }, "MessengerGraphQLSearchTypeahead.react")
        }
    });
    d = c;
    e.exports = d
}
), null);
__d("MessengerTokenizerToken.react", ["cx", "Keys", "React", "joinClasses"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = 100;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$2 = function(a) {
                a.keyCode === b("Keys").BACKSPACE && (a.preventDefault(),
                d.props.onRemove && d.props.entry != void 0 && d.props.onRemove(d.props.entry))
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.render = function() {
            return h.jsx("span", {
                className: b("joinClasses")(this.props.className, "_14-8"),
                label: null,
                onClick: this.$1,
                onKeyDown: this.$2,
                role: "option",
                tabIndex: this.props.index + i,
                children: h.jsx("span", {
                    "aria-label": this.props.label,
                    title: this.props.label,
                    className: "_14-9",
                    children: this.props.label
                })
            })
        }
        ;
        d.$1 = function(a) {
            a.stopPropagation()
        }
        ;
        return c
    }(h.Component);
    e.exports = a
}
), null);
__d("MessengerGraphQLTokenizer.react", ["cx", "invariant", "MessengerBootloadedSecondarySearchLogger", "MessengerGraphQLSearchTypeahead.react", "MessengerSecondarySearchFunnelConstants", "MessengerTokenizerToken.react", "React", "immutable", "joinClasses", "prop-types", "setImmediate"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$1 = !0,
            d.state = {
                focused: d.props.autoFocus,
                queryString: ""
            },
            d.focusInput = function() {
                d.refs.typeahead && d.refs.typeahead.focusInput()
            }
            ,
            d.$4 = function() {
                if (!d.$1)
                    return;
                d.setState({
                    focused: !1
                })
            }
            ,
            d.$8 = function() {
                if (!d.$1)
                    return;
                d.setState({
                    focused: !0
                })
            }
            ,
            d.$5 = function(a) {
                if (d.state.queryString || d.props.entries.size === 0)
                    return;
                d.$10(d.props.entries.last());
                a.preventDefault();
                b("setImmediate")(d.focusInput)
            }
            ,
            d.$6 = function(a) {
                if (!d.$1)
                    return;
                a.target instanceof HTMLInputElement || h(0, 1185);
                a = a.target.value;
                b("MessengerBootloadedSecondarySearchLogger").logSearchEvent({
                    name: b("MessengerSecondarySearchFunnelConstants").EVENTS.QUERY_CHANGED,
                    query: a,
                    loggingID: b("MessengerSecondarySearchFunnelConstants").LOGGING_IDS.M_APP_COMPOSER
                });
                d.setState({
                    queryString: a
                })
            }
            ,
            d.$7 = function() {
                if (!d.$1)
                    return;
                b("MessengerBootloadedSecondarySearchLogger").logSearchEvent({
                    name: b("MessengerSecondarySearchFunnelConstants").EVENTS.QUERY_CHANGED,
                    query: null,
                    loggingID: b("MessengerSecondarySearchFunnelConstants").LOGGING_IDS.M_APP_COMPOSER
                });
                d.setState({
                    queryString: ""
                });
                d.props.onClear && d.props.onClear()
            }
            ,
            d.$9 = function(a, c, e) {
                if (!d.$1)
                    return;
                a = d.props.entries;
                var f = e.getUniqueID();
                if (d.props.originalEntryIDs.contains(f))
                    return;
                else if (a.some(function(a) {
                    return a.getUniqueID() === f
                })) {
                    d.$10(e);
                    return
                }
                d.props.onAddEntryAttempt(e);
                b("MessengerBootloadedSecondarySearchLogger").logSearchEvent({
                    name: b("MessengerSecondarySearchFunnelConstants").EVENTS.QUERY_CHANGED,
                    query: "",
                    loggingID: b("MessengerSecondarySearchFunnelConstants").LOGGING_IDS.M_APP_COMPOSER
                });
                d.setState({
                    queryString: ""
                })
            }
            ,
            d.$10 = function(a) {
                d.props.onRemoveEntryAttempt(a)
            }
            ,
            d.$3 = function(a) {
                d.focusInput()
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            this.$1 = !0,
            this.props.autoFocus && b("setImmediate")(this.focusInput)
        }
        ;
        d.componentWillUnmount = function() {
            this.$1 = !1
        }
        ;
        d.render = function() {
            var a = this
              , c = this.props.entries.map(function(b, c) {
                return a.$2(b, c)
            })
              , d = c.size > 0 ? "" : this.props.placeholder
              , e = this.props.forceHideClearButton || this.state.queryString === "" && this.props.entries.isEmpty();
            return i.jsxs("div", {
                children: [i.jsx("div", {
                    className: b("joinClasses")(this.props.className, "_14-7" + (this.props.useDarkTheme ? " _8tnm" : "")),
                    children: i.jsxs("div", {
                        className: b("joinClasses")("_58-2", "clearfix"),
                        onClick: this.$3,
                        children: [c, i.jsx(b("MessengerGraphQLSearchTypeahead.react"), {
                            includeExistingParticipantIDs: this.props.includeExistingParticipantIDs,
                            canViewerSendMoneyFilter: this.props.canViewerSendMoneyFilter,
                            className: "_58-0",
                            context: this.props.context,
                            enableMessageSearch: this.props.enableMessageSearch,
                            excludeGroups: this.props.excludeGroups,
                            excludePages: this.props.excludePages,
                            customResultFilterFn: this.props.customResultFilterFn,
                            forGroup: this.props.forGroup,
                            hasHoverState: this.props.hasHoverState,
                            hideClearButton: e,
                            isFacebookChat: !1,
                            isFocused: this.state.focused,
                            isTokenizer: !0,
                            onBlur: this.$4,
                            onBackspace: this.$5,
                            onChange: this.$6,
                            onClear: this.$7,
                            onFocus: this.$8,
                            onSelect: this.$9,
                            originalEntryIDs: this.props.originalEntryIDs,
                            placeholder: d,
                            queryString: this.state.queryString,
                            ref: "typeahead",
                            roomAssociatedObject: this.props.roomAssociatedObject,
                            selectedEntryIDs: b("immutable").Seq(this.props.entries).map(function(a) {
                                return a.getUniqueID()
                            }).toSet(),
                            scrollableViewClassName: this.props.scrollableViewClassName,
                            shouldQueryInternalBot: this.props.shouldQueryInternalBot,
                            shouldQueryVCEndpoint: this.props.shouldQueryVCEndpoint,
                            tabIndex: this.props.tabIndex,
                            threadFBID: this.props.threadFBID,
                            useLayer: this.props.useLayer,
                            viewer: this.props.viewer,
                            width: this.props.width,
                            useDarkTheme: (c = this.props.useDarkTheme) != null ? c : !1
                        })]
                    })
                }), (this.state.queryString === "" || !!this.props.alwaysShowDefaultEntriesOnBlur) && !this.state.focused ? this.props.defaultEntries : null]
            })
        }
        ;
        d.$2 = function(a, c) {
            return i.jsx(b("MessengerTokenizerToken.react"), {
                className: "_2ei6",
                label: a.getTitle(),
                entry: a,
                index: c,
                onRemove: this.$10
            }, a.getUniqueID())
        }
        ;
        return c
    }(i.PureComponent);
    e.exports = a;
    a.propTypes = {
        alwaysShowDefaultEntriesOnBlur: (c = b("prop-types")).bool,
        autoFocus: c.bool.isRequired,
        canViewerSendMoneyFilter: c.bool,
        includeExistingParticipantIDs: c.bool,
        className: c.string.isRequired,
        context: c.object,
        defaultEntries: c.element,
        enableMessageSearch: c.bool.isRequired,
        entries: c.instanceOf(b("immutable").List).isRequired,
        excludeGroups: c.bool.isRequired,
        excludePages: c.bool.isRequired,
        forGroup: c.bool,
        forceHideClearButton: c.bool,
        hasHoverState: c.bool.isRequired,
        customResultFilterFn: c.func,
        onAddEntryAttempt: c.func.isRequired,
        onClear: c.func,
        onRemoveEntryAttempt: c.func.isRequired,
        originalEntryIDs: c.instanceOf(b("immutable").Set).isRequired,
        placeholder: c.node.isRequired,
        roomAssociatedObject: c.object,
        scrollableViewClassName: c.string.isRequired,
        shouldQueryInternalBot: c.bool.isRequired,
        shouldQueryVCEndpoint: c.bool.isRequired,
        tabIndex: c.number,
        threadFBID: c.string,
        useLayer: c.bool.isRequired,
        viewer: c.string.isRequired,
        width: c.number.isRequired,
        useDarkTheme: c.bool
    }
}
), null);
__d("MessengerComposeViewHeaderReact.bs", ["ReasonReact.bs", "bs_js_null_undefined", "MessengerComposeViewHeader.react"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a, c, d, e, f, g, h, i, j, k, l) {
        return b("ReasonReact.bs").wrapJsForReason(b("MessengerComposeViewHeader.react"), {
            className: b("bs_js_null_undefined").fromOption(a),
            forceHideClearButton: c,
            onClear: b("bs_js_null_undefined").fromOption(d),
            onAddRecipient: e,
            onRemoveRecipient: f,
            onResize: g,
            recipients: h,
            viewer: i,
            isWorkUser: j,
            tabIndex: b("bs_js_null_undefined").fromOption(k)
        }, l)
    }
    f.make = a
}
), null);
__d("MessengerDialogBodyReact.bs", ["cx", "React", "bs_caml_option", "joinClasses"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function i(a) {
        var c = a.className;
        a = a.children;
        c = c !== void 0 ? c : "";
        return h.jsx("div", {
            children: a,
            className: b("joinClasses")("_4eb-", c)
        })
    }
    function a(a) {
        var c = {
            children: a.children
        };
        a = b("bs_caml_option").nullable_to_opt(a.className);
        a !== void 0 && (c.className = b("bs_caml_option").valFromOption(a));
        return i(c)
    }
    c = i;
    f.make = c;
    f.jsComponent = a
}
), null);
__d("MessengerDialogReact.bs", ["ReasonReact.bs", "bs_js_null_undefined", "MessengerDialog.react", "MessengerDialogButton.react", "MessengerDialogFooter.react", "MessengerDialogCancelButton.react"], (function(a, b, c, d, e, f) {
    "use strict";
    function g(a) {
        if (a !== void 0)
            switch (a) {
            case 0:
                return "cancel";
            case 1:
                return "button";
            case 2:
                return "confirm"
            }
    }
    function h(a) {
        if (a !== void 0)
            if (a)
                return "secondary";
            else
                return "primary"
    }
    function a(a, c, d, e, f, g, h, i, j, k, l) {
        var m;
        return b("ReasonReact.bs").wrapJsForReason(b("MessengerDialog.react"), {
            className: (m = b("bs_js_null_undefined")).fromOption(a),
            label: m.fromOption(c),
            onToggle: m.fromOption(d),
            repositionOnUpdate: m.fromOption(e),
            shown: m.fromOption(f),
            titleID: m.fromOption(g),
            type: m.fromOption(h),
            width: m.fromOption(i),
            removeDialogOnToggle: m.fromOption(j),
            causalElement: m.fromOption(k)
        }, l)
    }
    a = {
        make: a
    };
    var i = {};
    function c(a, c, d) {
        return b("ReasonReact.bs").wrapJsForReason(b("MessengerDialogFooter.react"), {
            className: b("bs_js_null_undefined").fromOption(a),
            leftContent: b("bs_js_null_undefined").fromOption(c)
        }, d)
    }
    c = {
        make: c
    };
    var j = {};
    function d(a, c) {
        return b("ReasonReact.bs").wrapJsForReason(b("MessengerDialogCancelButton.react"), {
            onClick: b("bs_js_null_undefined").fromOption(a)
        }, c)
    }
    d = {
        make: d
    };
    var k = {};
    function e(a, c, d, e, f, i, j, k, l, m) {
        var n;
        return b("ReasonReact.bs").wrapJsForReason(b("MessengerDialogButton.react"), {
            action: (n = b("bs_js_null_undefined")).fromOption(g(a)),
            label: n.fromOption(c),
            disabled: n.fromOption(d),
            use: n.fromOption(e),
            onClick: n.fromOption(f),
            type: n.fromOption(h(i)),
            className: n.fromOption(j),
            leftContent: n.fromOption(k),
            ariaLabel: n.fromOption(l)
        }, m)
    }
    e = {
        make: e
    };
    var l = {}
      , m = {}
      , n = 0
      , o = 0
      , p = 0;
    f.stringOfButtonAction = g;
    f.stringOfButtonType = h;
    f.Dialog = a;
    f.Dialog2 = i;
    f.Header = n;
    f.Title = o;
    f.Footer = c;
    f.Footer2 = j;
    f.CancelButton = d;
    f.CancelButtonJsx3 = k;
    f.Button = e;
    f.ButtonJsx3 = l;
    f.Body = p;
    f.Body2 = m
}
), null);
__d("XMessagingForwardAttachmentController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/mercury/attachments/forward/", {})
}
), null);
__d("XMessengerPlatformShareCTAController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/messages/platform/share/", {})
}
), null);
__d("MessengerForwardAttachmentDialogReact.bs", ["ix", "cx", "fbt", "bs_block", "bs_curry", "Image.bs", "React", "immutable", "bs_caml_option", "CurrentUser", "fbglyph", "ReasonReact.bs", "AsyncRequest", "MercuryLocalIDs", "MessageShareType", "MessengerDialogs.bs", "MessengerDialogReact.bs", "MessengerSpinnerReact.bs", "MessengerDialogBodyReact.bs", "MessengerDialogTitleReact.bs", "MessengerDialogHeaderReact.bs", "MessengerComposeViewHeaderReact.bs", "XMessengerPlatformShareCTAController", "XMessagingForwardAttachmentController"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = b("React")
      , k = i._("G\u1eedi")
      , l = b("ReasonReact.bs").reducerComponent("MessengerForwardAttachmentDialogReact");
    function m(a, c, d) {
        new (b("AsyncRequest"))(a.getURIBuilder().getURI()).setMethod("POST").setHandler(d).setData(c).send();
        return 0
    }
    function n(a, c, d, e, f, h, n) {
        var o = function(a) {
            if (a)
                return 0;
            else {
                b("MessengerDialogs.bs").removeDialog(void 0, 0);
                return b("bs_curry")._1(c, 0)
            }
        }
          , p = function(c, e) {
            var f = e.send;
            c = function(a) {
                if (a.payload.success)
                    return b("bs_curry")._1(f, 2);
                else
                    return b("bs_curry")._1(f, b("bs_block").__(2, [b("bs_caml_option").nullable_to_opt(a.payload.error)]))
            }
            ;
            var g = {};
            e.state.recipients.forEach(function(c, a, d) {
                g[String(b("MercuryLocalIDs").generateOfflineThreadingID(void 0))] = c.getUniqueID();
                return !0
            });
            var i = 0;
            h !== void 0 && d !== void 0 && b("bs_caml_option").valFromOption(h) === b("MessageShareType").PLATFORM_SHARE_CTA ? m(b("XMessengerPlatformShareCTAController"), {
                cta_id: a,
                message_id: b("bs_caml_option").valFromOption(d),
                recipient_map: g
            }, c) : i = 1;
            i === 1 && m(b("XMessagingForwardAttachmentController"), {
                attachment_id: a,
                recipient_map: g
            }, c);
            return b("bs_curry")._1(e.send, 1)
        };
        return {
            debugName: l.debugName,
            reactClassInternal: l.reactClassInternal,
            handedOffState: l.handedOffState,
            getDerivedStateFromProps: l.getDerivedStateFromProps,
            didMount: l.didMount,
            didUpdate: l.didUpdate,
            willUnmount: l.willUnmount,
            shouldUpdate: l.shouldUpdate,
            render: function(a) {
                var c = a.state
                  , d = c.sending
                  , h = c.sendError;
                if (d)
                    d = j.jsxs("div", {
                        children: [j.createElement(b("MessengerSpinnerReact.bs").make, {}), j.jsx("span", {
                            children: i._("\u0110ang g\u1eedi"),
                            className: "_1e1n _3-99"
                        })]
                    });
                else if (h !== void 0) {
                    var l = g("141787");
                    d = j.jsxs("div", {
                        children: [b("ReasonReact.bs").element(void 0, void 0, b("Image.bs").make(void 0, void 0, void 0, void 0, l, void 0, void 0, void 0, void 0, [])), j.jsx("span", {
                            children: h,
                            className: "_3-99"
                        })],
                        className: "_1e1n"
                    })
                } else
                    d = null;
                l = c.recipients.isEmpty() || c.sending;
                return b("ReasonReact.bs").element(void 0, void 0, b("MessengerDialogReact.bs").Dialog.make(void 0, void 0, o, void 0, e, void 0, void 0, 560, void 0, void 0, [j.createElement(b("MessengerDialogHeaderReact.bs").make, {
                    children: j.createElement(b("MessengerDialogTitleReact.bs").make, {
                        children: f
                    })
                }), j.createElement(b("MessengerDialogBodyReact.bs").make, {
                    children: b("ReasonReact.bs").element(void 0, void 0, b("MessengerComposeViewHeaderReact.bs").make("_1e1o", !1, function(c) {
                        return b("bs_curry")._1(a.send, 0)
                    }, function(c) {
                        return b("bs_curry")._1(a.send, b("bs_block").__(0, [c]))
                    }, function(c) {
                        return b("bs_curry")._1(a.send, b("bs_block").__(1, [c]))
                    }, function(a) {
                        return 0
                    }, c.recipients, b("CurrentUser").getID(), b("CurrentUser").isWorkUser(), 0, []))
                }), b("ReasonReact.bs").element(void 0, void 0, b("MessengerDialogReact.bs").Footer.make(void 0, b("bs_caml_option").some(d), [b("ReasonReact.bs").element(void 0, void 0, b("MessengerDialogReact.bs").CancelButton.make(void 0, [])), b("ReasonReact.bs").element(void 0, void 0, b("MessengerDialogReact.bs").Button.make(2, k, l, void 0, b("bs_curry")._1(a.handle, p), 0, void 0, void 0, l ? i._("N\u00fat g\u1eedi \u0111\u00e3 v\u00f4 hi\u1ec7u h\u00f3a") : k, []))]))]))
            },
            initialState: function(a) {
                return {
                    recipients: b("immutable").List([]),
                    sendError: void 0,
                    sending: !1
                }
            },
            retainedProps: l.retainedProps,
            reducer: function(a) {
                if (typeof a === "number")
                    switch (a) {
                    case 0:
                        return function(a) {
                            return b("bs_block").__(0, [{
                                recipients: b("immutable").List([]),
                                sendError: a.sendError,
                                sending: a.sending
                            }])
                        }
                        ;
                    case 1:
                        return function(a) {
                            return b("bs_block").__(0, [{
                                recipients: a.recipients,
                                sendError: void 0,
                                sending: !0
                            }])
                        }
                        ;
                    case 2:
                        b("bs_curry")._1(c, 0);
                        return function(a) {
                            return b("bs_block").__(0, [{
                                recipients: b("immutable").List([]),
                                sendError: void 0,
                                sending: !1
                            }])
                        }
                    }
                else
                    switch (a.tag | 0) {
                    case 0:
                        var d = a[0];
                        return function(a) {
                            return b("bs_block").__(0, [{
                                recipients: a.recipients.push(d),
                                sendError: a.sendError,
                                sending: a.sending
                            }])
                        }
                        ;
                    case 1:
                        var e = a[0];
                        return function(a) {
                            return b("bs_block").__(0, [{
                                recipients: a.recipients.filter(function(a) {
                                    return a !== e
                                }),
                                sendError: a.sendError,
                                sending: a.sending
                            }])
                        }
                        ;
                    case 2:
                        var f = a[0];
                        return function(a) {
                            return b("bs_block").__(0, [{
                                recipients: a.recipients,
                                sendError: f,
                                sending: !1
                            }])
                        }
                    }
            },
            jsElementWrapped: l.jsElementWrapped
        }
    }
    a = b("ReasonReact.bs").wrapReasonForJs(l, function(a) {
        return n(a.attachmentID, a.onClose, b("bs_caml_option").nullable_to_opt(a.messageID), a.shown, a.title, b("bs_caml_option").nullable_to_opt(a.shareType), [])
    });
    f.sendButtonLabel = k;
    f.component = l;
    f.sendData = m;
    f.make = n;
    f.jsComponent = a
}
), null);
__d("MessengerPhotoViewBottomBarReact.bs", ["cx", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function a(a) {
        a = a.children;
        return h.jsx("div", {
            children: a,
            className: "_51an _50-m _16zz"
        })
    }
    c = a;
    f.make = c
}
), null);
__d("MessengerPhotoViewBottomBarReact.re", ["MessengerPhotoViewBottomBarReact.bs"], (function(a, b, c, d, e, f) {
    (function(a) {
        return null
    }
    );
    a = b("MessengerPhotoViewBottomBarReact.bs").make;
    f.make = a
}
), null);
__d("MessengerPhotoViewHScroll.react", ["cx", "Animation", "MessengerSharedPhotoReact.re", "React", "SphericalPhotoUtils"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = 200
      , j = 80;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.$1 = null,
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            this.$2()
        }
        ;
        d.componentDidUpdate = function() {
            this.$2()
        }
        ;
        d.componentWillUnmount = function() {
            this.$1 && this.$1.stop(),
            this.$1 = null
        }
        ;
        d.render = function() {
            var a = this
              , c = this.props.sharedPhotos;
            c = c.reduce(function(c, d) {
                var e = d.node.image1 === null ? d.node.image : d.node.image1
                  , f = d.node.photo_encodings ? d.node.photo_encodings.length !== 0 : !1;
                if (e) {
                    e = e.uri;
                    if (f) {
                        var g = b("SphericalPhotoUtils").getThumbnailsFromPhotoEncodings(d.node.photo_encodings);
                        g = g.smallThumbnail;
                        e = g || e
                    }
                    c.push(h.jsx("div", {
                        className: "_4dy9",
                        children: h.jsx(b("MessengerSharedPhotoReact.re").make, {
                            className: "_42rl" + (a.props.photoID !== d.node.legacy_attachment_id ? " _q1a" : ""),
                            fbid: d.node.legacy_attachment_id,
                            onClick: a.props.onScroll,
                            uri: e,
                            isSpherical: f
                        })
                    }, d.node.legacy_attachment_id))
                }
                return c
            }, []);
            var d = (this.props.width - j) / 2;
            return h.jsx("div", {
                className: (this.props.blurSupported ? "" : "_99ro") + " _463g",
                children: h.jsx("div", {
                    className: "_463h",
                    ref: "childContainer",
                    children: h.jsx("div", {
                        className: "_463j",
                        style: {
                            paddingLeft: d,
                            paddingRight: d
                        },
                        ref: "scrollable",
                        children: c
                    })
                })
            })
        }
        ;
        d.$2 = function() {
            var a = this
              , c = this.refs.childContainer ? this.refs.childContainer.scrollLeft : 0
              , d = this.props.sharedPhotos.findIndex(function(b) {
                return b.node.legacy_attachment_id === a.props.photoID
            });
            d = d * j;
            this.$1 || (this.$1 = new (b("Animation"))(this.refs.childContainer));
            this.$1.from("scrollLeft", c).to("scrollLeft", d).duration(i).go()
        }
        ;
        return c
    }(h.PureComponent);
    e.exports = a
}
), null);
__d("MessengerPhotoViewHeader.react", ["cx", "fbt", "MessagingForwardingButtonNUX.react", "MessengerPhotoViewCloseLinkReact.re", "React", "SpotlightViewerBottomBarLink", "emptyFunction"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.$3 = function() {
                c.refs.forwardNUX && c.refs.forwardNUX.close(),
                c.props.showForwardDialog && c.props.showForwardDialog()
            }
            ,
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.render = function() {
            return i.jsxs("div", {
                className: "_51an _50-m _3c1i _5l-3",
                role: "banner",
                children: [this.$1(), this.$2()]
            })
        }
        ;
        d.$2 = function() {
            var a;
            return i.jsx(b("MessengerPhotoViewCloseLinkReact.re").make, {
                onClick: (a = this.props.onClose) != null ? a : b("emptyFunction")
            })
        }
        ;
        d.$1 = function() {
            var a = this, c, d;
            this.props.disableForward !== !0 && (c = i.jsxs(b("SpotlightViewerBottomBarLink"), {
                className: "_3c1o",
                onClick: this.$3,
                ref: "forwardButton",
                children: [i.jsx("div", {
                    className: "_2msr _3oo2"
                }), h._("Chuy\u1ec3n ti\u1ebfp")]
            }),
            d = i.jsx(b("MessagingForwardingButtonNUX.react"), {
                contextRef: function() {
                    return a.refs.forwardButton
                },
                ref: "forwardNUX",
                children: h._("G\u1eedi h\u00ecnh \u1ea3nh n\u00e0y cho ng\u01b0\u1eddi kh\u00e1c b\u1eb1ng tin nh\u1eafn ri\u00eang.")
            }));
            return i.jsxs("div", {
                ref: "buttons",
                className: "_99rn",
                children: [i.jsxs(b("SpotlightViewerBottomBarLink"), {
                    ajaxify: this.props.url,
                    className: "_3c1o",
                    rel: "async",
                    children: [i.jsx("div", {
                        className: "_3ooo _2msr"
                    }), h._("T\u1ea3i xu\u1ed1ng")]
                }), c, d, i.jsxs(b("SpotlightViewerBottomBarLink"), {
                    className: "_3c1o",
                    href: "#",
                    onClick: this.props.openInfo,
                    ref: "moreInfo",
                    children: [i.jsx("div", {
                        className: "_3c1k _2msr"
                    }), h._("Th\u00f4ng tin")]
                })]
            }, "buttonsContainer")
        }
        ;
        return c
    }(i.PureComponent);
    e.exports = a
}
), null);
__d("XMessagingVideoAttachmentController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/mercury/attachments/video/", {
        video_id: {
            type: "String",
            required: !0
        },
        video_container_id: {
            type: "String",
            required: !0
        },
        width: {
            type: "Int",
            required: !0
        },
        height: {
            type: "Int",
            required: !0
        },
        start_muted: {
            type: "Bool",
            defaultValue: !1
        },
        no_fullscreen: {
            type: "Bool",
            defaultValue: !1
        },
        load_player_controller: {
            type: "Bool",
            defaultValue: !1
        },
        hide_controls_on_finish: {
            type: "Bool",
            defaultValue: !1
        },
        hide_url_menu_option: {
            type: "Bool",
            defaultValue: !1
        },
        is_share: {
            type: "Bool",
            defaultValue: !1
        },
        render_play_button: {
            type: "Bool",
            defaultValue: !1
        },
        start_timestamp: {
            type: "Int",
            defaultValue: 0
        },
        native_thumbnail: {
            type: "Bool",
            defaultValue: !1
        }
    })
}
), null);
__d("MessengerVideoPlayer.react", ["cx", "ActorURI", "AsyncRequest", "BackgroundImage.react", "Event", "FullScreen", "MessengerSpinner.react", "React", "ShimButton.react", "SpotlightMercurySharedMediaViewer.react", "SubscriptionsHandler", "Vector", "VideoPlayerReasonTransitionHelper", "XMessagingVideoAttachmentController", "cssURL", "getFullScreenElement", "guid", "joinClasses", "prop-types", "setImmediate"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = "_ox1"
      , j = "_27db";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(c) {
            var d, e;
            e = a.call(this, c) || this;
            e.$2 = !0;
            e.$3 = [];
            e.$4 = -1;
            e.$5 = !1;
            e.$6 = !1;
            e.state = {
                playerAPI: null,
                forcePause: !!((d = e.props.videoData) == null ? void 0 : d.disableAutoplay),
                loaded: !1
            };
            e.$10 = function(a) {
                if (e.isVideoControlClicked(a)) {
                    a.preventDefault();
                    a.stopPropagation();
                    return
                }
                if (!e.isVideoClicked(a))
                    return;
                a.preventDefault();
                e.props.isOnStage ? (a.stopPropagation(),
                e.isState("playing") ? e.pause("user_initiated") : e.play("user_initiated")) : (e.pause("user_initiated"),
                e.props.onClick && e.props.onClick())
            }
            ;
            e.$11 = function(a) {
                if (!e.isRightClick(a))
                    return;
                a.stopPropagation();
                a.preventDefault();
                b("setImmediate")(function() {
                    e.props.onSelect && e.props.onSelect()
                })
            }
            ;
            e.$8 = function() {
                if (!e.$2 || e.state.forcePause)
                    return;
                e.$6 && (e.play(new (b("VideoPlayerReasonTransitionHelper"))("page_visibility_initiated")),
                e.$6 = !1)
            }
            ;
            e.$7 = function() {
                if (!e.$2 || e.state.forcePause || !(e.state.playerAPI && e.state.playerAPI.isMuted()))
                    return;
                e.$6 = !!e.state.playerAPI && e.state.playerAPI.isState("playing");
                e.pause()
            }
            ;
            e.$1 = b("guid")();
            e.$2 = !((d = c.videoData) == null ? void 0 : d.disableAutoplay);
            e.props.isInThread && (e.listeners = new (b("SubscriptionsHandler"))(),
            e.listeners.addSubscriptions(b("Event").listen(window, "blur", e.$7), b("Event").listen(window, "focus", e.$8)));
            return e
        }
        var d = c.prototype;
        d.shouldComponentUpdate = function(a) {
            var c = document.getElementById(this.$1.toString())
              , d = b("FullScreen").isFullScreen();
            if (c != null && d && c.children[0].children[0] === b("getFullScreenElement")())
                return !1;
            d = !!(a.stageDimensions && a.stageDimensions !== this.props.stageDimensions);
            d && (this.$4 = this.getCurrentTimePosition(),
            this.$5 = !this.isState("playing"));
            return !this.props.videoData || a.videoData.id !== this.props.videoData.id || d
        }
        ;
        d.UNSAFE_componentWillReceiveProps = function(a) {
            if (!this.$2)
                return;
            this.props.isInThread && a.isVisible !== this.props.isVisible && (a.isVisible && !this.state.forcePause ? this.play(new (b("VideoPlayerReasonTransitionHelper"))("video_visibility_initiated")) : this.pause())
        }
        ;
        d.componentDidMount = function() {
            this.props.videoData && this.$9()
        }
        ;
        d.componentDidUpdate = function() {
            this.$3.forEach(function(a) {
                return a.abandon()
            }),
            this.$3 = [],
            this.props.videoData && this.$9()
        }
        ;
        d.componentWillUnmount = function() {
            this.pause("unloaded"),
            this.seek(0),
            this.$3.forEach(function(a) {
                return a.abandon()
            }),
            this.listeners && this.listeners.release(),
            this.state.playerAPI && this.state.playerAPI.detachRootNode(),
            this.state.playerAPI && this.state.playerAPI.destroy && this.state.playerAPI.destroy()
        }
        ;
        d.isVideoLoaded = function() {
            var a = !!this.state.playerAPI;
            !a;
            return this.isState("fallback") ? !1 : a
        }
        ;
        d.isVideoClicked = function(a) {
            return a.target instanceof HTMLElement ? a.target.classList.contains(i) : !1
        }
        ;
        d.isVideoControlClicked = function(a) {
            var b = document.getElementsByClassName(j);
            for (var c = 0; c < b.length; c++) {
                var d = a.target;
                if (b[c].contains(d))
                    return !0
            }
            return !1
        }
        ;
        d.isRightClick = function(a) {
            a = a || window.event;
            return a.button === 2
        }
        ;
        d.play = function(a) {
            if (!this.isVideoLoaded())
                return;
            this.state.playerAPI && this.state.playerAPI.play(a)
        }
        ;
        d.pause = function(a) {
            if (!this.isVideoLoaded())
                return;
            this.state.playerAPI && this.state.playerAPI.pause(a)
        }
        ;
        d.seek = function(a) {
            if (!this.isVideoLoaded())
                return;
            this.state.playerAPI && this.state.playerAPI.seek(a)
        }
        ;
        d.getCurrentTimePosition = function() {
            return this.isVideoLoaded() && this.state.playerAPI ? this.state.playerAPI.getCurrentTimePosition() : -1
        }
        ;
        d.render = function() {
            var a = this.props.videoData
              , c = h.jsx("div", {
                ref: "placeholder",
                children: h.jsx(b("MessengerSpinner.react"), {
                    color: "blue",
                    size: b("MessengerSpinner.react").large_size
                })
            })
              , d = {};
            if (a && a.url) {
                var e = a.original_dimensions;
                d.backgroundImage = this.state.loaded ? b("cssURL")(a.url) : "none";
                c = h.jsx("div", {
                    ref: "placeholder",
                    children: h.jsx(b("BackgroundImage.react"), {
                        className: this.props.className,
                        width: e.x,
                        height: e.y,
                        loadingIndicatorStyle: "large",
                        backgroundSize: "cover",
                        ref: "placeholder",
                        style: d,
                        src: a.url
                    })
                })
            }
            return h.jsx(b("ShimButton.react"), {
                className: b("joinClasses")(this.props.className, "_4-od"),
                id: this.$1,
                onClick: this.$10,
                onMouseDown: this.$11,
                style: d,
                children: c
            })
        }
        ;
        d.$9 = function() {
            var a = this
              , c = this.props.videoData;
            if (c) {
                var d = c.original_dimensions;
                this.props.stageDimensions && (d = b("SpotlightMercurySharedMediaViewer.react").getImageDimensionsForStage(new (b("Vector"))(c.original_dimensions.x,c.original_dimensions.y), this.props.stageDimensions));
                d = b("XMessagingVideoAttachmentController").getURIBuilder().setString("video_id", c.legacy_attachment_id).setString("video_container_id", this.$1).setInt("width", d.x).setInt("height", d.y).setInt("start_timestamp", this.$4 > 0 ? Math.round(this.$4) : 0).setBool("start_muted", c.start_muted).setBool("no_fullscreen", c.no_fullscreen).setBool("load_player_controller", !0).setBool("hide_controls_on_finish", c.hide_controls_on_finish).setBool("native_thumbnail", c.disableAutoplay).setBool("hide_url_menu_option", Boolean(c.hide_url_menu_option)).setBool("is_share", c.is_share).setBool("render_play_button", this.props.isInThread).getURI();
                c = this.props.attachment;
                c && c.metadata && c.metadata.pageid && (d = b("ActorURI").create(d, c.metadata.pageid));
                var e = new (b("AsyncRequest"))();
                this.$3.push(e);
                e.setMethod("GET").setStatusElement(this.refs.placeholder).setURI(d).setRelativeTo(this).setReadOnly(!0).setHandler(function(b) {
                    a.$3 = a.$3.filter(function(a) {
                        return a !== e
                    })
                }).send()
            }
        }
        ;
        d.$12 = function() {
            this.props.isVisible && this.isState("finished") ? (this.seek(0),
            this.play("loop_initiated")) : this.props.isVisible && this.isState("paused") && !this.$6 ? this.setState({
                forcePause: !0
            }) : this.isState("playing") && this.setState({
                forcePause: !1
            })
        }
        ;
        d.onVideoLoaded = function() {
            var a = this;
            if (!this.$2)
                return;
            this.state.playerAPI && this.state.playerAPI.addListener("stateChange", function() {
                return a.$12()
            });
            this.props.isVisible && !this.$5 && !this.state.forcePause ? this.play("autoplay_initiated") : this.pause();
            this.$4 = -1;
            this.$5 = !1
        }
        ;
        d.isState = function(a) {
            return !!(this.state.playerAPI && this.state.playerAPI.isState(a))
        }
        ;
        return c
    }(h.Component);
    e.exports = a;
    a.propTypes = {
        attachment: (c = b("prop-types")).object,
        className: c.string,
        isInThread: c.bool,
        isVisible: c.bool,
        isOnStage: c.bool,
        stageDimensions: c.instanceOf(b("Vector")),
        videoData: c.object,
        onClick: c.func,
        onSelect: c.func
    };
    a.invokeVideoLoaded = function(a, b, c) {
        a.$2 = c,
        b.setAllowCrossPageTransition(!0),
        b.isState("loading") ? a.stateChangeListener = b.addListener("stateChange", function() {
            if (!b.isState("loading")) {
                if (a.state && a.state.playerAPI)
                    return;
                a.setState({
                    playerAPI: b
                }, a.onVideoLoaded);
                a.stateChangeListener && a.stateChangeListener.remove()
            }
        }) : a.setState({
            playerAPI: b,
            loaded: !0
        }, a.onVideoLoaded)
    }
}
), null);
__d("MessagingForwardAttachmentDialog.react", ["BootloadOnRender.react", "JSResource", "LazyComponent.react", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            return g.jsx(b("BootloadOnRender.react"), {
                component: g.jsx(b("LazyComponent.react"), babelHelpers["extends"]({}, this.props)),
                loader: b("JSResource")("MessagingForwardAttachmentDialogImpl.react").__setRef("MessagingForwardAttachmentDialog.react"),
                placeholder: g.jsx("div", {})
            })
        }
        ;
        return c
    }(g.PureComponent);
    e.exports = a
}
), null);
__d("SpotlightMessagesViewerPagers.react", ["cx", "fbt", "LeftRight.react", "Link.react", "React"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i = b("React");
    function a(a) {
        return i.jsxs(b("LeftRight.react"), {
            children: [i.jsx(b("Link.react"), {
                "aria-disabled": a.disablePrevArrow,
                "aria-label": h._("Tr\u01b0\u1edbc"),
                className: "_322u" + (a.disablePrevArrow ? "" : " _2bbb") + " _50-m",
                children: i.jsx("div", {
                    className: (a.disablePrevArrow ? "" : "_4ksl") + (a.disablePrevArrow ? "" : " _4ksm")
                })
            }), i.jsx(b("Link.react"), {
                "aria-disabled": a.disableNextArrow,
                "aria-label": h._("Ti\u1ebfp"),
                className: "_322u" + (a.disableNextArrow ? "" : " _2bbc") + " _50-m",
                children: i.jsx("div", {
                    className: (a.disableNextArrow ? "" : "_4ksl") + (a.disableNextArrow ? "" : " _4kso")
                })
            })]
        })
    }
}
), null);
__d("XMessagingPhotoDownloadController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/mercury/attachments/photo/", {
        photo_id: {
            type: "String",
            required: !0
        }
    })
}
), null);
__d("XMessagingShareAttachmentDialogController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/mercury/attachments/share/dialog/", {
        __asyncDialog: {
            type: "Int"
        },
        privacy_mutation_token: {
            type: "String"
        }
    })
}
), null);
__d("SpotlightMercurySharedMediaViewer.react", ["csx", "cx", "fbt", "invariant", "ActorURI", "AsyncDialog", "AsyncRequest", "BootloadedComponent.react", "ChatPhotoViewFooterHScroll.react", "ChatPhotoViewHeader.react", "Event", "FunnelLogger", "JSResource", "KeyEventController", "MessagingForwardAttachmentDialog.react", "MessengerThreadSharedMediaHelper", "MessengerVideoPlayer.react", "Parent", "PhotoUtils", "React", "SpotlightMessagesViewerPagers.react", "SpotlightViewer", "SpotlightViewerImage", "SpotlightViewport", "SubscriptionsHandler", "Vector", "XMessagingPhotoDownloadController", "XMessagingShareAttachmentDialogController", "lazyLoadComponent", "prop-types"], (function(a, b, c, d, e, f, g, h, i, j) {
    "use strict";
    var k = b("React")
      , l = 88
      , m = 30
      , n = "WWW_MESSENGER_SHARE_TO_FB_FUNNEL"
      , o = "_4-og";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$1 = void 0,
            d.$2 = [],
            d.state = {
                hasPrevPage: !1,
                hasNextPage: !1,
                firstPhotoLoaded: !1,
                isLoading: !1,
                mediaData: [],
                numberInOneBatch: m,
                photoData: null,
                showForward: !1,
                showInfo: !1,
                stageDimensions: new (b("Vector"))()
            },
            d.$11 = function() {
                return !d.state.photoData ? null : k.jsx(b("ChatPhotoViewFooterHScroll.react"), {
                    onScroll: d.$18,
                    photoID: d.state.photoData.node.id,
                    sharedPhotos: d.state.mediaData,
                    updateNumberInOneBatch: d.$19,
                    width: d.state.stageDimensions.x
                })
            }
            ,
            d.$19 = function(a) {
                d.setState({
                    numberInOneBatch: a
                })
            }
            ,
            d.$18 = function(a) {
                if (!d.state.mediaData || d.state.isLoading)
                    return;
                var b = d.state.mediaData.findIndex(function(b) {
                    return b.node.legacy_attachment_id === a
                });
                if (b < 0)
                    return;
                var c = d.state.mediaData[b];
                d.setState({
                    photoData: c
                });
                d.$22(b)
            }
            ,
            d.$5 = function(a, c) {
                if (d.state.photoData == null || d.state.isLoading)
                    return;
                if (c && !!b("Parent").bySelector(c.target, "._170l"))
                    return;
                c && c.target instanceof HTMLElement && c.target.className === o && d.$10();
                c = d.state.mediaData.findIndex(function(a) {
                    d.state.photoData != null || j(0, 1033);
                    return a.node.legacy_attachment_id === d.state.photoData.node.legacy_attachment_id
                });
                if (c < 0 || c === d.state.mediaData.length - 1 && !d.state.hasNextPage && a)
                    return;
                if (c === 0 && !a) {
                    d.setState({
                        isLoading: !0
                    }, function() {
                        return d.$7(d.state.photoData, 1, function(b) {
                            if (b === 0)
                                return;
                            d.$5(a)
                        })
                    });
                    return
                }
                var e = a ? d.state.mediaData[c + 1] : d.state.mediaData[c - 1];
                d.setState({
                    photoData: e
                });
                d.$22(c)
            }
            ,
            d.$10 = function() {
                if (d.props.photoID === null)
                    return;
                d.setState({
                    photoData: null
                });
                d.props.onClosePhotoView()
            }
            ,
            d.$16 = function() {
                d.setState({
                    showForward: !0
                })
            }
            ,
            d.$20 = function() {
                d.setState({
                    showForward: !1
                })
            }
            ,
            d.$15 = function() {
                d.setState({
                    showInfo: !0
                })
            }
            ,
            d.$21 = function() {
                d.setState({
                    showInfo: !1
                })
            }
            ,
            d.$17 = function() {
                d.setState({
                    showForward: !1,
                    showInfo: !1
                });
                b("FunnelLogger").appendAction(n, "click");
                var a = d.state.photoData;
                if (!d.$14() || !(a && a.node))
                    return;
                a = a.node.legacy_attachment_id;
                var c = b("XMessagingShareAttachmentDialogController").getURIBuilder().getURI();
                c = new (b("AsyncRequest"))(c).setData({
                    attachment_id: a
                }).setMethod("POST");
                b("AsyncDialog").send(c)
            }
            ,
            d.$23 = function(a, b, c) {
                var e = Object.keys(a)[0];
                a = a[e].message_shared_media;
                e = a.page_info;
                var f = a.edges.length;
                if (f !== 0) {
                    var g = d.state.mediaData;
                    switch (b) {
                    case 0:
                        d.setState({
                            photoData: a.edges[0],
                            mediaData: [a.edges[0]],
                            firstPhotoLoaded: !0
                        });
                        break;
                    case 1:
                        g = g.concat(a.edges);
                        d.setState({
                            hasNextPage: e.has_next_page,
                            mediaData: g
                        });
                        break;
                    case -1:
                        g = a.edges;
                        g = g.concat(d.state.mediaData);
                        d.setState({
                            mediaData: g,
                            hasPrevPage: e.has_previous_page
                        });
                        break
                    }
                }
                d.setState({
                    isLoading: !1
                });
                c(f)
            }
            ,
            d.$3 = function() {
                var a = new (b("Vector"))(b("Vector").getViewportDimensions().x,b("Vector").getViewportDimensions().y - l);
                return a
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.getDefaultProps = function() {
            return {
                enableShareToFB: !1
            }
        }
        ;
        d.componentDidMount = function() {
            var a = this;
            this.setState({
                isLoading: !0,
                stageDimensions: this.$3()
            }, function() {
                return a.$4(a.props.photoID)
            });
            this.$1 = new (b("SubscriptionsHandler"))();
            this.$1.addSubscriptions(b("Event").listen(window, "resize", function() {
                a.setState({
                    stageDimensions: a.$3()
                })
            }), b("KeyEventController").registerKey("LEFT", function() {
                a.$5(!1);
                return !1
            }), b("KeyEventController").registerKey("RIGHT", function() {
                a.$5(!0);
                return !1
            }));
            this.props.enableShareToFB && b("FunnelLogger").startFunnel(n)
        }
        ;
        d.UNSAFE_componentWillUpdate = function(a, b) {
            var c = this;
            b.firstPhotoLoaded !== this.state.firstPhotoLoaded && this.setState({
                isLoading: !0
            }, function() {
                c.$6(b.photoData, b.numberInOneBatch, function() {}),
                c.$7(b.photoData, b.numberInOneBatch, function() {})
            });
            b.numberInOneBatch != this.state.numberInOneBatch && !b.isLoading && this.setState({
                isLoading: !0
            }, function() {
                return c.$6(b.mediaData[b.mediaData.length - 1], b.numberInOneBatch, function() {})
            })
        }
        ;
        d.componentWillUnmount = function() {
            this.$1 && this.$1.release(),
            this.$1 = null,
            this.$2.forEach(function(a) {
                return a.abandon()
            })
        }
        ;
        d.render = function() {
            var a = this
              , c = this.$8()
              , d = this.state.stageDimensions
              , e = this.state.isLoading || this.props.useloadingindicator && !this.state.photoData;
            if (this.state.photoData == null)
                return null;
            var f = this.state.mediaData.findIndex(function(b) {
                a.state.photoData != null || j(0, 1033);
                return b.node.id === a.state.photoData.node.id
            });
            f = k.jsxs("div", {
                children: [this.$9(), this.props.disablepaging ? null : k.jsx(b("SpotlightMessagesViewerPagers.react"), {
                    disablePrevArrow: f <= 0 && !this.state.hasPrevPage,
                    disableNextArrow: !this.state.hasNextPage && f >= this.state.mediaData.length - 1
                })]
            });
            return k.jsxs("span", {
                children: [k.jsxs(b("SpotlightViewer"), {
                    className: "_53vs",
                    onHide: this.$10,
                    open: this.props.photoID !== null,
                    ref: "spotlightViewer",
                    rootClassName: this.props.rootClassName,
                    children: [k.jsx(b("SpotlightViewport"), {
                        active: !1,
                        fadeInNOut: !0,
                        media: c,
                        onClick: this.$5,
                        ref: "viewport",
                        showLoadingIndicator: e,
                        stageDimensions: d,
                        useWidth: !0,
                        children: f
                    }), this.$11()]
                }), this.$12(), this.$13()]
            })
        }
        ;
        d.$9 = function() {
            if (!this.state.photoData)
                return null;
            var a = this.state.photoData;
            a = a.node.legacy_attachment_id;
            a = b("XMessagingPhotoDownloadController").getURIBuilder().setString("photo_id", a).getURI();
            this.props.actorid && (a = b("ActorURI").create(a, this.props.actorid));
            return k.jsx(b("ChatPhotoViewHeader.react"), {
                disableForward: this.props.disableForward,
                enableShareToFB: this.$14(),
                onClose: this.$10,
                openInfo: this.$15,
                ref: "photoviewheader",
                showForwardDialog: this.$16,
                showShareDialog: this.$17,
                url: a
            })
        }
        ;
        d.$12 = function() {
            if (!this.state.photoData || !this.state.showForward)
                return null;
            var a = i._("Chuy\u1ec3n ti\u1ebfp qua nhi\u1ec1u tin nh\u1eafn ri\u00eang");
            return k.jsx(b("MessagingForwardAttachmentDialog.react"), {
                attachmentID: this.state.photoData.node.legacy_attachment_id,
                onClose: this.$20,
                shown: this.state.showForward,
                title: a
            })
        }
        ;
        d.$13 = function() {
            return this.state.showInfo ? k.jsx(k.Suspense, {
                fallback: k.jsx("div", {}),
                children: k.jsx(p, {
                    closeInfo: this.$21,
                    infoOpen: this.state.showInfo,
                    photoID: this.state.photoData.node.id
                })
            }) : k.jsx("xhp", {})
        }
        ;
        d.$14 = function() {
            var a = this.state.photoData;
            return !a ? !1 : !!this.props.enableShareToFB && a.node.__typename === "MessageImage" && a.node.image1.uri.indexOf(".gif") < 0
        }
        ;
        d.$22 = function(a) {
            var b = this
              , c = this.state.numberInOneBatch
              , d = this.state.mediaData;
            a <= c / 2 ? this.setState({
                isLoading: !0
            }, function() {
                return b.$7(d[0], c, function() {})
            }) : a >= d.length - c / 2 && this.state.hasNextPage && this.setState({
                isLoading: !0
            }, function() {
                return b.$6(d[d.length - 1], c, function() {})
            })
        }
        ;
        d.$4 = function(a) {
            var c = this;
            a = b("MessengerThreadSharedMediaHelper").search(this.props.threadID, String(a), function(a) {
                return c.$23(a, 0, function() {})
            });
            this.$2.push(a)
        }
        ;
        d.$6 = function(a, c, d) {
            var e = this;
            a = b("MessengerThreadSharedMediaHelper").loadMorePrevious(this.props.threadID, a.cursor, c || 1, function(a) {
                return e.$23(a, 1, d)
            });
            this.$2.push(a)
        }
        ;
        d.$7 = function(a, c, d) {
            var e = this;
            a = a ? a.cursor : null;
            a = b("MessengerThreadSharedMediaHelper").loadMoreLatest(this.props.threadID, a, c || 1, function(a) {
                return e.$23(a, -1, d)
            });
            this.$2.push(a)
        }
        ;
        d.$8 = function() {
            if (this.state.photoData && this.state.photoData.node) {
                var a = this.state.photoData.node;
                if (a.__typename && a.__typename === "MessageVideo")
                    return this.$24();
                var d = this.state.stageDimensions
                  , e = this.$25(a, d);
                if (!e)
                    return null;
                if (a.photo_encodings && a.photo_encodings.length !== 0)
                    return this.$26(a.legacy_attachment_id, e, a.photo_encodings, d);
                a = c.getImageDimensionsForStage(new (b("Vector"))(e.width,e.height), d);
                return this.$27(e, a)
            } else
                return null
        }
        ;
        d.$24 = function() {
            return this.state.photoData ? k.jsx(b("MessengerVideoPlayer.react"), {
                isOnStage: !0,
                isVisible: !0,
                videoData: this.state.photoData.node,
                stageDimensions: this.state.stageDimensions
            }) : null
        }
        ;
        d.$27 = function(a, c) {
            return k.jsx(b("SpotlightViewerImage"), {
                dimensions: c,
                ref: "image",
                src: a.uri
            })
        }
        ;
        d.$26 = function(a, c, d, e) {
            return k.jsx(b("BootloadedComponent.react"), {
                bootloadLoader: b("JSResource")("SpotlightViewerSphericalPhoto.react").__setRef("SpotlightMercurySharedMediaViewer.react"),
                bootloadPlaceholder: k.jsx("div", {}),
                height: e.y,
                width: e.x,
                fbid: a,
                thumbnail: c.uri,
                photoEncodings: d,
                stageDimensions: this.state.stageDimensions
            })
        }
        ;
        d.$25 = function(a, c) {
            var d = null;
            a = b("PhotoUtils").getImagesFromData(a);
            a = a.sort(function(a, b) {
                return a.width == null ? b.width == null ? 0 : 1 : b.width == null ? -1 : b.width - a.width
            });
            window.devicePixelRatio && window.devicePixelRatio > 1 && (c = new (b("Vector"))(c.x * window.devicePixelRatio,c.y * window.devicePixelRatio));
            for (var e = 0; e < a.length; e++)
                (!d || a[e].width >= c.x || a[e].height >= c.y) && (d = a[e]);
            return d
        }
        ;
        return c
    }(k.Component);
    e.exports = a;
    a.propTypes = {
        disableForward: (c = b("prop-types")).bool,
        enableShareToFB: c.bool,
        onClosePhotoView: c.func,
        photoID: c.string,
        rootClassName: c.string,
        threadID: c.string
    };
    a.getImageDimensionsForStage = function(a, c) {
        var d = a.x;
        a = a.y;
        var e = c.x;
        c = c.y;
        var f = d / a
          , g = e / c;
        d >= e || a >= c ? g < f ? (d = e,
        a = Math.round(e / f)) : g > f ? (d = Math.round(c * f),
        a = c) : (d = e,
        a = c) : f < g ? d = Math.round(a * f) : a = Math.round(d / f);
        return new (b("Vector"))(d,a)
    }
    ;
    var p = b("lazyLoadComponent")(b("JSResource")("MessengerPhotoInfoDialogContainer.react").__setRef("SpotlightMercurySharedMediaViewer.react"))
}
), null);
__d("SpotlightMessengerSharedMediaViewer.react", ["csx", "cx", "fbt", "invariant", "ActorURI", "BootloadedComponent.react", "Event", "JSResource", "KeyEventController", "MessengerForwardAttachmentDialogReact.bs", "MessengerPhotoViewBottomBarReact.re", "MessengerPhotoViewHeader.react", "MessengerPhotoViewHScroll.react", "MessengerSharedMediaActions", "MessengerVideoPlayer.react", "Parent", "PhotoUtils", "React", "ScriptPath", "SpotlightMessagesViewerPagers.react", "SpotlightViewer", "SpotlightViewerImage", "SpotlightViewport", "SubscriptionsHandler", "Tooltip.react", "Vector", "XMessagingPhotoDownloadController", "lazyLoadComponent", "prop-types"], (function(a, b, c, d, e, f, g, h, i, j) {
    "use strict";
    var k = b("React")
      , l = 88
      , m = 80
      , n = 30
      , o = "_4-og"
      , p = function() {
        var a = document.createElement("a");
        a.style.cssText = "backdrop-filter:blur(2px);";
        return !!a.style.length
    }();
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$1 = void 0,
            d.$2 = [],
            d.state = {
                photoData: null,
                showForward: !1,
                showInfo: !1,
                stageDimensions: new (b("Vector"))()
            },
            d.$14 = function(a) {
                if (!d.props.sharedMedia)
                    return;
                var b = d.props.sharedMedia.findIndex(function(b) {
                    return b.node.legacy_attachment_id === a
                });
                if (b < 0)
                    return;
                var c = d.props.sharedMedia[b];
                d.setState({
                    photoData: c
                });
                d.$17(b)
            }
            ,
            d.$4 = function(a, c) {
                if (d.state.photoData == null)
                    return;
                var e = d.state.photoData;
                if (c && !!b("Parent").bySelector(c.target, "._170l"))
                    return;
                c && c.target instanceof HTMLElement && c.target.className === o && d.$7();
                c = d.props.sharedMedia.findIndex(function(a) {
                    return a.node.legacy_attachment_id === e.node.legacy_attachment_id
                });
                if (c < 0 || c === d.props.sharedMedia.length - 1 && !d.props.hasNextPage && a)
                    return;
                if (c === 0 && !a) {
                    b("MessengerSharedMediaActions").loadMoreLatest(d.props.threadID, d.props.sharedMedia[0].cursor, n);
                    return
                }
                a = a ? d.props.sharedMedia[c + 1] : d.props.sharedMedia[c - 1];
                d.setState({
                    photoData: a
                });
                d.$17(c)
            }
            ,
            d.$7 = function() {
                if (d.props.photoID === null)
                    return;
                b("ScriptPath").closeOverlayView("spotlight_media_view");
                d.setState({
                    photoData: null
                });
                d.props.onClosePhotoView()
            }
            ,
            d.$12 = function() {
                d.setState({
                    showForward: !0
                })
            }
            ,
            d.$15 = function() {
                d.setState({
                    showForward: !1
                })
            }
            ,
            d.$11 = function() {
                d.setState({
                    showInfo: !0
                })
            }
            ,
            d.$16 = function() {
                d.setState({
                    showInfo: !1
                })
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            var a = this
              , c = this.props.sharedMedia.find(function(b) {
                return b.node.legacy_attachment_id === a.props.photoID
            });
            this.setState({
                photoData: c,
                stageDimensions: this.$3()
            });
            this.$1 = new (b("SubscriptionsHandler"))();
            this.$1.addSubscriptions(b("Event").listen(window, "resize", function() {
                a.setState({
                    stageDimensions: a.$3()
                })
            }), b("KeyEventController").registerKey("LEFT", function() {
                a.$4(!1);
                return !1
            }), b("KeyEventController").registerKey("RIGHT", function() {
                a.$4(!0);
                return !1
            }));
            b("ScriptPath").openOverlayView("spotlight_media_view", {
                photoID: this.props.photoID,
                threadID: this.props.threadID
            })
        }
        ;
        d.componentWillUnmount = function() {
            this.$1 && this.$1.release(),
            this.$1 = null,
            this.$2.forEach(function(a) {
                return a.abandon()
            })
        }
        ;
        d.render = function() {
            var a = this
              , c = this.$5()
              , d = this.state.stageDimensions
              , e = this.props.useloadingindicator && !this.state.photoData;
            if (this.state.photoData == null)
                return null;
            var f = this.props.sharedMedia.findIndex(function(b) {
                a.state.photoData != null || j(0, 1033);
                return b.node.id === a.state.photoData.node.id
            });
            f = k.jsxs("div", {
                children: [this.$6(), this.props.disablepaging ? null : k.jsx(b("SpotlightMessagesViewerPagers.react"), {
                    disablePrevArrow: f <= 0 && !this.props.hasPrevPage,
                    disableNextArrow: !this.props.hasNextPage && f >= this.props.sharedMedia.length - 1
                })]
            });
            return k.jsxs("span", {
                children: [k.jsxs(b("SpotlightViewer"), {
                    className: "_53vs",
                    onHide: this.$7,
                    open: this.props.photoID !== null,
                    ref: "spotlightViewer",
                    rootClassName: this.props.rootClassName,
                    wash: p ? "blur" : "dark",
                    children: [k.jsx(b("SpotlightViewport"), {
                        active: !1,
                        fadeInNOut: !0,
                        media: c,
                        onClick: this.$4,
                        ref: "viewport",
                        showLoadingIndicator: e,
                        stageDimensions: d,
                        useWidth: !0,
                        className: "_9ahm" + (p ? " _99rm" : ""),
                        children: f
                    }), this.$8()]
                }), this.$9(), this.$10()]
            })
        }
        ;
        d.$6 = function() {
            if (!this.state.photoData)
                return null;
            var a = this.state.photoData.node.legacy_attachment_id;
            a = b("XMessagingPhotoDownloadController").getURIBuilder().setString("photo_id", a).getURI();
            this.props.actorid && (a = b("ActorURI").create(a, this.props.actorid));
            return k.jsx(b("MessengerPhotoViewHeader.react"), {
                disableForward: this.props.disableForward,
                onClose: this.$7,
                openInfo: this.$11,
                photoID: this.props.photoID,
                ref: "photoviewheader",
                showForwardDialog: this.$12,
                url: a
            })
        }
        ;
        d.$13 = function(a) {
            return a ? Math.ceil(a / m) : n
        }
        ;
        d.$8 = function() {
            var a = this;
            if (!this.state.photoData)
                return null;
            var c = this.state.photoData
              , d = k.jsx("button", {
                className: "_2n5b",
                onClick: function() {
                    return a.props.openAlbum(c.node.legacy_attachment_id)
                },
                type: "button",
                children: k.jsx(b("Tooltip.react"), {
                    tooltip: "View Gallery",
                    children: k.jsx("div", {
                        "aria-label": i._("Th\u01b0 vi\u1ec7n \u1ea3nh to\u00e0n m\u00e0n h\u00ecnh"),
                        className: "_3por"
                    })
                })
            });
            return k.jsxs(b("MessengerPhotoViewBottomBarReact.re").make, {
                children: [k.jsx(b("MessengerPhotoViewHScroll.react"), {
                    onScroll: this.$14,
                    photoID: c.node.legacy_attachment_id,
                    sharedPhotos: this.props.sharedMedia,
                    width: this.state.stageDimensions.x,
                    blurSupported: p
                }), d]
            })
        }
        ;
        d.$9 = function() {
            if (!this.state.photoData || this.props.disableForward)
                return null;
            var a = i._("Chuy\u1ec3n ti\u1ebfp qua nhi\u1ec1u tin nh\u1eafn ri\u00eang");
            return k.jsx(b("MessengerForwardAttachmentDialogReact.bs").jsComponent, {
                attachmentID: this.state.photoData.node.legacy_attachment_id,
                onClose: this.$15,
                shown: this.state.showForward,
                title: a
            })
        }
        ;
        d.$10 = function() {
            return this.state.showInfo ? k.jsx(k.Suspense, {
                fallback: k.jsx("div", {}),
                children: k.jsx(q, {
                    closeInfo: this.$16,
                    infoOpen: this.state.showInfo,
                    photoID: this.state.photoData.node.id
                })
            }) : null
        }
        ;
        d.$17 = function(a) {
            var c = this.$13(this.state.stageDimensions.x)
              , d = this.props.sharedMedia;
            a <= c / 2 ? (b("MessengerSharedMediaActions").loadMoreLatest(this.props.threadID, d[0].cursor, c),
            d.length < c && this.props.hasNextPage && b("MessengerSharedMediaActions").loadMorePrevious(this.props.threadID, d[d.length - 1].cursor, c)) : a >= d.length - c / 2 && this.props.hasNextPage && b("MessengerSharedMediaActions").loadMorePrevious(this.props.threadID, d[d.length - 1].cursor, c)
        }
        ;
        d.$3 = function() {
            var a = new (b("Vector"))(b("Vector").getViewportDimensions().x,b("Vector").getViewportDimensions().y - l);
            return a
        }
        ;
        d.$5 = function() {
            if (this.state.photoData && this.state.photoData.node) {
                var a = this.state.photoData.node;
                if (a.__typename && a.__typename === "MessageVideo")
                    return this.$18();
                var d = this.state.stageDimensions
                  , e = this.$19(a, d);
                if (!e)
                    return null;
                if (a.photo_encodings && a.photo_encodings.length !== 0)
                    return this.$20(a.legacy_attachment_id, e, a.photo_encodings, d);
                a = c.getImageDimensionsForStage(new (b("Vector"))(e.width,e.height), d);
                return this.$21(e, a)
            } else
                return null
        }
        ;
        d.$18 = function() {
            return this.state.photoData ? k.jsx(b("MessengerVideoPlayer.react"), {
                isVisible: !0,
                isOnStage: !0,
                videoData: this.state.photoData.node,
                stageDimensions: this.state.stageDimensions
            }) : null
        }
        ;
        d.$21 = function(a, c) {
            return k.jsx(b("SpotlightViewerImage"), {
                dimensions: c,
                ref: "image",
                src: a.uri
            })
        }
        ;
        d.$20 = function(a, c, d, e) {
            return k.jsx(b("BootloadedComponent.react"), {
                bootloadLoader: b("JSResource")("SpotlightViewerSphericalPhoto.react").__setRef("SpotlightMessengerSharedMediaViewer.react"),
                bootloadPlaceholder: k.jsx("div", {}),
                height: e.y,
                width: e.x,
                fbid: a,
                thumbnail: c.uri,
                photoEncodings: d,
                stageDimensions: this.state.stageDimensions
            })
        }
        ;
        d.$19 = function(a, c) {
            c = b("PhotoUtils").getImagesFromData(a);
            return c[c.length - 1]
        }
        ;
        return c
    }(k.Component);
    e.exports = a;
    a.propTypes = {
        disableForward: (c = b("prop-types")).bool,
        hasPrevPage: c.bool,
        hasNextPage: c.bool,
        onClosePhotoView: c.func,
        openAlbum: c.func,
        photoID: c.string,
        rootClassName: c.string,
        threadID: c.string,
        sharedMedia: c.arrayOf(c.object)
    };
    a.getImageDimensionsForStage = function(a, c) {
        var d = a.x;
        a = a.y;
        var e = c.x;
        c = c.y;
        var f = d / a
          , g = e / c;
        d >= e || a >= c ? g < f ? (d = e,
        a = Math.round(e / f)) : g > f ? (d = Math.round(c * f),
        a = c) : (d = e,
        a = c) : f < g ? d = Math.round(a * f) : a = Math.round(d / f);
        return new (b("Vector"))(d,a)
    }
    ;
    var q = b("lazyLoadComponent")(b("JSResource")("MessengerPhotoInfoDialogContainer.react").__setRef("SpotlightMessengerSharedMediaViewer.react"))
}
), null);
__d("SpotlightMessengerSharedMediaViewerContainer.react", ["FluxContainer", "MessengerSharedMediaActions", "MessengerSharedMediaStore", "React", "SpotlightMessengerSharedMediaViewer.react"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        c.getStores = function() {
            return [b("MessengerSharedMediaStore")]
        }
        ;
        c.calculateState = function(a, c) {
            a = b("MessengerSharedMediaStore").getState();
            var d = a.sharedMedia.get(c.threadID);
            a = a.isLoading.get(c.threadID);
            return {
                sharedMedia: d,
                isLoading: a
            }
        }
        ;
        var d = c.prototype;
        d.componentDidMount = function() {
            b("MessengerSharedMediaActions").loadCurrent(this.props.threadID, this.props.photoID)
        }
        ;
        d.render = function() {
            var a = this;
            if (!this.state.sharedMedia)
                return null;
            var c = this.state.sharedMedia && this.state.sharedMedia.edges.find(function(b) {
                return b.node.legacy_attachment_id === a.props.photoID
            });
            return !c ? null : g.jsx(b("SpotlightMessengerSharedMediaViewer.react"), {
                disableForward: this.props.disableForward,
                hasPrevPage: this.state.sharedMedia && this.state.sharedMedia.has_previous_page,
                hasNextPage: this.state.sharedMedia && this.state.sharedMedia.has_next_page,
                onClosePhotoView: this.props.onClosePhotoView,
                openAlbum: this.props.openAlbum,
                photoID: this.props.photoID,
                rootClassName: this.props.rootClassName,
                sharedMedia: this.state.sharedMedia && this.state.sharedMedia.edges,
                threadID: this.props.threadID
            })
        }
        ;
        return c
    }(g.PureComponent);
    c = b("FluxContainer").create(a, {
        withProps: !0
    });
    e.exports = c
}
), null);
__d("MessengerThreadSharedPhotos.react", ["cx", "MessengerSharedPhotosAlbumViewContainer.react", "React", "SpotlightMessengerSharedMediaViewerContainer.react", "SpotlightViewer", "prop-types"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.state = {
                photoView: c.props.findFBID,
                albumView: ""
            },
            c.$3 = function(a) {
                c.setState({
                    albumView: a,
                    photoView: ""
                })
            }
            ,
            c.$4 = function() {
                c.setState({
                    albumView: ""
                })
            }
            ,
            c.$5 = function(a) {
                c.setState({
                    albumView: "",
                    photoView: a
                })
            }
            ,
            c.$6 = function() {
                c.setState({
                    photoView: ""
                })
            }
            ,
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.componentDidUpdate = function() {
            !this.state.photoView && !this.state.albumView && this.props.onCloseSharedPhotos()
        }
        ;
        d.render = function() {
            var a = this.state.photoView ? this.$1() : null
              , b = this.state.albumView ? this.$2() : null;
            return h.jsxs("div", {
                children: [b, a]
            })
        }
        ;
        d.$1 = function() {
            return h.jsx(b("SpotlightMessengerSharedMediaViewerContainer.react"), {
                disableForward: !1,
                onClosePhotoView: this.$6,
                openAlbum: this.$3,
                photoID: this.state.photoView,
                rootClassName: "",
                threadID: this.props.threadFBID
            })
        }
        ;
        d.$2 = function() {
            return h.jsx(b("SpotlightViewer"), {
                className: "_3ode",
                onHide: this.$4,
                open: !0,
                ref: "spotlightViewer",
                children: h.jsx(b("MessengerSharedPhotosAlbumViewContainer.react"), {
                    onClick: this.$5,
                    onCloseSharedPhotos: this.props.onCloseSharedPhotos,
                    threadID: this.props.threadFBID,
                    viewedPhoto: this.state.albumView
                })
            })
        }
        ;
        return c
    }(h.Component);
    e.exports = a;
    a.propTypes = {
        findFBID: b("prop-types").string,
        onCloseSharedPhotos: b("prop-types").func,
        threadFBID: b("prop-types").string
    }
}
), null);
__d("MessengerThreadSharedPhotosReact.bs", ["ReasonReact.bs", "MessengerThreadSharedPhotos.react"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a, c, d, e) {
        return b("ReasonReact.bs").wrapJsForReason(b("MessengerThreadSharedPhotos.react"), {
            findFBID: a,
            onCloseSharedPhotos: c,
            threadFBID: d
        }, e)
    }
    f.make = a
}
), null);
__d("MessengerVideoPlayerReact.bs", ["ReasonReact.bs", "bs_js_null_undefined", "MessengerVideoPlayer.react"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a, c, d, e, f, g, h, i, j, k) {
        var l;
        return b("ReasonReact.bs").wrapJsForReason(b("MessengerVideoPlayer.react"), {
            attachment: (l = b("bs_js_null_undefined")).fromOption(a),
            className: l.fromOption(c),
            isInThread: l.fromOption(d),
            isVisible: l.fromOption(e),
            isOnStage: l.fromOption(f),
            stageDimensions: l.fromOption(g),
            videoData: h,
            onClick: l.fromOption(i),
            onSelect: l.fromOption(j)
        }, k)
    }
    f.make = a
}
), null);
__d("MessengerVideoReact.bs", ["cx", "ix", "bs_curry", "Image.bs", "React", "bs_caml_option", "ReasonReact.bs", "joinClasses", "MessengerPhotoReact.bs", "MessengerVideoPlayerReact.bs"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    function j(a) {
        a = a.metadata;
        if (!(a == null) && !(a.fbid == null)) {
            var b = window.screen.width > 1800 && !(a.large_size == null) && !(a.large_preview == null)
              , c = a.fbid
              , d = b ? a.large_size : a.inbox_size;
            d = d == null ? {
                x: 0,
                y: 0
            } : {
                x: d.width,
                y: d.height
            };
            b = b ? a.large_preview : a.inbox_preview;
            return {
                legacy_attachment_id: c,
                original_dimensions: d,
                start_muted: !0,
                hide_controls_on_finish: !0,
                url: b,
                is_share: !1
            }
        }
        return {
            legacy_attachment_id: null,
            original_dimensions: null,
            start_muted: !0,
            hide_controls_on_finish: !0,
            url: null,
            is_share: !1
        }
    }
    function k(a) {
        var b = a % 60;
        return String(a / 60 | 0) + (":" + ((b < 10 ? "0" : "") + String(b)))
    }
    function a(a) {
        var c = a.className
          , d = a.attachment
          , e = a.isSingle
          , f = a.onAttachmentLoad
          , g = a.isVisible
          , l = a.onClick
          , m = a.onSelect
          , n = c !== void 0 ? c : "";
        a = function(a) {
            a = d.metadata;
            var c = d.media;
            c = a == null ? c == null ? void 0 : b("bs_caml_option").nullable_to_opt(c.duration) : b("bs_caml_option").nullable_to_opt(a.duration);
            if (c !== void 0)
                return k(c);
            else
                return null
        }
        ;
        var o = function(a) {
            if (l !== void 0)
                return b("bs_curry")._1(l, d);
            else
                return 0
        };
        c = function(a) {
            var c = a.legacy_attachment_id;
            if (c == null)
                return;
            else
                return b("bs_caml_option").some(b("ReasonReact.bs").element(void 0, void 0, b("MessengerVideoPlayerReact.bs").make(b("bs_caml_option").some(d), b("joinClasses")(n, "_ccq", "_4tsk", "_3o67", e ? "_52mr" : "", e ? "_1byr" : ""), !0, g, void 0, void 0, a, o, m, [])))
        }
        ;
        var p = j(d);
        c = c(p);
        if (c !== void 0)
            return b("bs_caml_option").valFromOption(c);
        else {
            p = {
                className: b("joinClasses")(n, "_ccq"),
                attachment: d,
                isSingle: e,
                children: [b("ReasonReact.bs").element(void 0, void 0, b("Image.bs").make("_ccr", void 0, void 0, void 0, h("27983"), void 0, void 0, void 0, void 0, [])), i.jsx("span", {
                    children: a(0),
                    className: "_ccs"
                })]
            };
            f !== void 0 && (p.onAttachmentLoad = b("bs_caml_option").valFromOption(f));
            l !== void 0 && (p.onClick = b("bs_caml_option").valFromOption(l));
            return i.createElement(b("MessengerPhotoReact.bs").make, p)
        }
    }
    c = 1800;
    d = a;
    f.large_window_width = c;
    f.constructVideoData = j;
    f.formatDuration = k;
    f.make = d
}
), null);
__d("MessengerXMATextBlock.react", ["cx", "LineClamp.react", "React", "ShimButton.react", "joinClasses", "prop-types"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = 26;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.$1 = function() {
                c.props.url != null && c.props.url != "" && window.open(c.props.url)
            }
            ,
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.render = function() {
            if (!this.props)
                return h.jsx("div", {
                    className: "__6j"
                });
            var a = this.props.width != null ? {
                maxWidth: this.props.width - i,
                textAlign: "left"
            } : {
                textAlign: "left"
            }
              , c = {
                textDecoration: "none"
            };
            return h.jsx("div", {
                className: b("joinClasses")(this.props.className, "__6j _43kk _6ude"),
                style: a,
                children: h.jsxs(b("ShimButton.react"), {
                    form: "link",
                    onClick: this.$1,
                    style: c,
                    children: [this.renderTitle(), this.renderDescription(), this.renderSource()]
                })
            })
        }
        ;
        d.renderTitle = function() {
            return this.props.title == null ? null : h.jsx("div", {
                className: "__6k",
                children: h.jsx(b("LineClamp.react"), {
                    lines: 2,
                    lineHeight: 16,
                    children: this.props.title
                })
            })
        }
        ;
        d.renderDescription = function() {
            if (this.props.description == null)
                return null;
            var a = this.props.width != null ? {
                maxWidth: this.props.width - i
            } : {};
            return h.jsx("div", {
                className: "__6l",
                style: a,
                children: h.jsx(b("LineClamp.react"), {
                    lines: 2,
                    lineHeight: 15,
                    children: this.props.description
                })
            })
        }
        ;
        d.renderSource = function() {
            return this.props.source == null ? null : h.jsx("div", {
                className: "__6m",
                children: h.jsx(b("LineClamp.react"), {
                    lines: 1,
                    lineHeight: 14,
                    children: this.props.source
                })
            })
        }
        ;
        return c
    }(h.Component);
    e.exports = a;
    a.propTypes = {
        className: (c = b("prop-types")).string,
        description: c.string,
        source: c.string,
        title: c.string,
        url: c.string,
        width: c.number,
        isFromViewer: c.bool,
        attachment: c.object
    }
}
), null);
__d("MessengerXMATextBlockReact.bs", ["ReasonReact.bs", "bs_js_null_undefined", "MessengerXMATextBlock.react"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a, c, d, e, f, g, h, i, j, k) {
        var l;
        return b("ReasonReact.bs").wrapJsForReason(b("MessengerXMATextBlock.react"), {
            className: (l = b("bs_js_null_undefined")).fromOption(a),
            description: l.fromOption(c),
            source: l.fromOption(d),
            title: l.fromOption(e),
            url: l.fromOption(f),
            width: l.fromOption(g),
            threadID: l.fromOption(h),
            isFromViewer: l.fromOption(i),
            attachment: l.fromOption(j)
        }, k)
    }
    f.make = a
}
), null);
__d("MessengerVideoXMAReact.bs", ["cx", "React", "bs_caml_option", "ReasonReact.bs", "joinClasses", "MessengerVideoPlayerReact.bs", "MessengerXMATextBlockReact.bs"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function i(a) {
        if (a == null)
            return null;
        else {
            var b = a.width > a.height ? a.width : a.height
              , c = window.screen.width > 1800 ? 640 : 450;
            if (b <= c)
                return {
                    x: a.width,
                    y: a.height
                };
            else {
                c = c / b;
                b = a.width * c | 0;
                a = a.height * c | 0;
                return {
                    x: b,
                    y: a
                }
            }
        }
    }
    function j(a) {
        var b = a.media;
        a = a.target;
        if (b == null || a == null || b.image_size == null || a.video_id == null)
            return;
        else {
            var c = b.image_size;
            return {
                legacy_attachment_id: a.video_id,
                original_dimensions: i(c),
                start_muted: !0,
                hide_controls_on_finish: !0,
                url: b.image,
                is_share: !0
            }
        }
    }
    function a(a) {
        var c = a.className
          , d = a.attachment
          , e = a.isVisible
          , f = a.onSelect
          , g = a.threadID
          , i = a.isFromViewer
          , k = c !== void 0 ? c : "";
        a = function(a) {
            if (a !== void 0)
                return b("ReasonReact.bs").element(void 0, void 0, b("MessengerVideoPlayerReact.bs").make(b("bs_caml_option").some(d), b("joinClasses")(k, "_ccq", "_4tsk", "_3o67", "_52mr", "_1byr"), !0, e, void 0, void 0, b("bs_caml_option").valFromOption(a), void 0, f, []));
            else
                return null
        }
        ;
        c = function(a) {
            var c;
            return b("ReasonReact.bs").element(void 0, void 0, b("MessengerXMATextBlockReact.bs").make("_2f5n _4br2 _29ew _3dug", (c = b("bs_caml_option")).nullable_to_opt(d.description), c.nullable_to_opt(d.source), c.nullable_to_opt(d.video_title), c.nullable_to_opt(d.uri), a !== void 0 ? b("bs_caml_option").valFromOption(a).x : void 0, g, i, b("bs_caml_option").some(d), []))
        }
        ;
        var l = j(d);
        a = a(l);
        return h.jsxs("div", {
            children: [a, c(l !== void 0 ? b("bs_caml_option").nullable_to_opt(b("bs_caml_option").valFromOption(l).original_dimensions) : void 0)],
            className: "_3duc"
        })
    }
    c = 640;
    d = 450;
    e = 1800;
    g = a;
    f.large_preview_dim = c;
    f.thumbinail_inbox_dim = d;
    f.large_window_width = e;
    f.adjustSize = i;
    f.constructVideoData = j;
    f.make = g
}
), null);
__d("MessengerPhotosGroupReact.bs", ["cx", "URI", "bs_block", "bs_curry", "React", "Utils.bs", "ActorURI", "bs_belt_Array", "LogHistory", "MercuryIDs", "bs_belt_Option", "bs_caml_option", "ReasonReact.bs", "joinClasses", "bs_caml_primitive", "bs_js_null_undefined", "MessagesViewerSetID", "MessengerPhotoReact.bs", "MessengerVideoReact.bs", "MercuryAttachmentType", "getPageIDFromThreadID", "MessengerVideoXMAReact.bs", "bs_caml_builtin_exceptions", "ChatSpeakingStickerReact.bs", "MercuryAttachmentPayload.bs", "MessengerAttachmentViewer", "MessengerThreadSharedPhotosReact.bs"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = b("React"), j = "empty-spacer";
    a = b("LogHistory").getInstance("messenger_photo_group");
    var k = b("ReasonReact.bs").reducerComponent("MessengerPhotosGroup");
    function l(a, c, d, e, f, g, l, m, n, o, p, q, r, s) {
        var t = d !== void 0 ? d : ""
          , u = function(a) {
            a = a.length;
            var c = a === 2 || a === 4;
            return b("joinClasses")(t, "_2n8h", a === 1 ? "_2n8i" : "", c ? "_4ksk" : "", a > 1 && !c ? "_2n8k" : "", "_5fk1")
        }
          , v = function(a) {
            if (m !== void 0) {
                a = b("bs_caml_option").valFromOption(m);
                var c = a.thread_fbid;
                if (!(c == null) && b("bs_caml_primitive").caml_string_compare(c, "") !== 0)
                    return c;
                else
                    return b("MercuryIDs").getThreadFBIDFromThreadID(a.thread_id)
            } else
                return null
        }
          , w = function(a, c) {
            var d = v(0);
            c = c.metadata;
            c = c == null ? null : c.fbid;
            return b("ReasonReact.bs").element(void 0, void 0, b("MessengerThreadSharedPhotosReact.bs").make(c, function(c) {
                return b("bs_curry")._1(a.send, 0)
            }, d, []))
        }
          , x = function(d, k, m, s) {
            var t = k.deduplication_key
              , u = k.metadata;
            if (t == null)
                if (u == null) {
                    var w = k.upload_id;
                    w = w == null ? "" : w
                } else {
                    u = u.fbid;
                    w = u == null ? "" : u
                }
            else
                w = t;
            var x;
            if (m || f === !0)
                if (k.large_preview_url == null)
                    x = void 0;
                else {
                    var y = k.large_preview_url;
                    x = function(a) {
                        return window.open(y)
                    }
                }
            else {
                var z = k.metadata;
                u = 0;
                z == null || z.fbid == null ? u = 1 : x = k.app_attribution == null ? function(a) {
                    return b("bs_curry")._1(d.send, [a])
                }
                : function(c) {
                    var d = z;
                    c = c;
                    if (b("Utils.bs").isTruthy(c.preview_uploading))
                        return 0;
                    else if (c.attach_type === b("MercuryAttachmentType").VIDEO) {
                        var f = d.dimensions;
                        f = f == null ? {
                            x: null,
                            y: null
                        } : {
                            x: f.width,
                            y: f.height
                        };
                        var i = c.url;
                        b("MessengerAttachmentViewer").renderVideo({
                            pageID: b("bs_js_null_undefined").fromOption(p),
                            rootClassName: "_1j1h",
                            videoID: d.fbid,
                            videoSize: f,
                            videoURI: i == null ? new (h || (h = b("URI")))("") : i
                        });
                        return 0
                    } else if (c.attach_type === b("MercuryAttachmentType").PHOTO || c.attach_type === b("MercuryAttachmentType").THIRDPARTYSTICKER || c.attach_type === b("MercuryAttachmentType").ANIMATED_IMAGE) {
                        f = a.length === 1;
                        i = c.url;
                        i = i == null ? new (h || (h = b("URI")))("") : i;
                        if (g !== !0 && c.attach_type === b("MercuryAttachmentType").PHOTO && e !== void 0) {
                            var j = v(0)
                              , k = e === 1;
                            j = new (h || (h = b("URI")))("/ajax/messaging/attachments/sharedphotos.php").setQueryData({
                                thread_id: j,
                                image_id: d.fbid
                            });
                            j = p !== void 0 ? new (b("ActorURI").create)(j,b("bs_caml_option").valFromOption(p)) : j;
                            j = [b("MessagesViewerSetID").MESSAGES_VIEW_ALL_IN_THREAD, j, k]
                        } else
                            j = [null, i, f];
                        b("MessengerAttachmentViewer").bootstrapWithConfig({
                            actorid: b("bs_js_null_undefined").fromOption(p),
                            dimensions: d.dimensions,
                            disableForward: p !== void 0,
                            disablePaging: j[2],
                            endpoint: j[1],
                            fbid: d.fbid,
                            rootClassName: "_1j1h",
                            setID: j[0],
                            snapToPhoto: !0,
                            src: c.preview_url
                        });
                        return 0
                    } else if (c.uri == null)
                        return 0;
                    else
                        return window.open(c.uri)
                }
                ;
                if (u === 1)
                    if (k.uri == null)
                        x = void 0;
                    else {
                        var A = k.uri;
                        x = function(a) {
                            return window.open(A)
                        }
                    }
            }
            t = b("bs_belt_Option").getWithDefault(c, k.attach_type);
            if (t === b("MercuryAttachmentType").PHOTO || t === b("MercuryAttachmentType").ANIMATED_IMAGE || t === b("MercuryAttachmentType").THIRDPARTYSTICKER) {
                m = {
                    attachment: k,
                    isSingle: s,
                    children: []
                };
                l !== void 0 && (m.isVisible = b("bs_caml_option").valFromOption(l));
                n !== void 0 && (m.onAttachmentLoad = b("bs_caml_option").valFromOption(n));
                x !== void 0 && (m.onClick = b("bs_caml_option").valFromOption(x));
                return i.jsx(b("MessengerPhotoReact.bs").make, m, w)
            } else if (t === b("MercuryAttachmentType").VIDEO) {
                u = k.metadata;
                if (!(u == null) && b("Utils.bs").isTruthy(u.render_as_sticker)) {
                    m = u.dimensions;
                    u = m == null ? {
                        height: null,
                        width: null
                    } : {
                        height: m.height,
                        width: m.width
                    };
                    m = k.url;
                    m = m == null ? new (h || (h = b("URI")))("") : m;
                    return b("ReasonReact.bs").element(void 0, void 0, b("ChatSpeakingStickerReact.bs").make(m, u, []))
                }
                if (g === !0) {
                    m = {
                        attachment: k
                    };
                    l !== void 0 && (m.isVisible = b("bs_caml_option").valFromOption(l));
                    o !== void 0 && (m.onSelect = b("bs_caml_option").valFromOption(o));
                    q !== void 0 && (m.threadID = b("bs_caml_option").valFromOption(q));
                    r !== void 0 && (m.isFromViewer = b("bs_caml_option").valFromOption(r));
                    return i.jsx(b("MessengerVideoXMAReact.bs").make, m, w)
                } else {
                    u = {
                        attachment: k,
                        isSingle: s
                    };
                    n !== void 0 && (u.onAttachmentLoad = b("bs_caml_option").valFromOption(n));
                    l !== void 0 && (u.isVisible = b("bs_caml_option").valFromOption(l));
                    x !== void 0 && (u.onClick = b("bs_caml_option").valFromOption(x));
                    o !== void 0 && (u.onSelect = b("bs_caml_option").valFromOption(o));
                    return i.jsx(b("MessengerVideoReact.bs").make, u, w)
                }
            } else if (t === j) {
                m = {
                    className: "_4tsk _4rf-"
                };
                s = b("bs_caml_option").nullable_to_opt(k.key);
                s !== void 0 && (m.key = b("bs_caml_option").valFromOption(s));
                return i.jsx("div", m)
            } else
                throw [b("bs_caml_builtin_exceptions").invalid_argument, t + " is not handled by MessengerPhotosGroup"]
        }
          , y = function(c, a, d) {
            if (a.length !== 1) {
                var e = a.length === 2 || a.length === 4 ? 2 : 3
                  , f = []
                  , g = {
                    contents: 0
                }
                  , k = a.length;
                while (g.contents < k) {
                    var l = b("bs_caml_primitive").caml_int_min(e, k - g.contents | 0);
                    l = b("bs_belt_Array").makeBy(e, function(f) {
                        return function(i) {
                            if (i < f)
                                return x(c, a[g.contents + i | 0], d, !1);
                            else {
                                i = "ghost" + String(e - i | 0);
                                i = b("MercuryAttachmentPayload.bs").create(j, b("bs_caml_option").some(i), new (h || (h = b("URI")))(""));
                                return x(c, i, d, !1)
                            }
                        }
                    }(l));
                    f.push(i.jsx("div", {
                        children: l,
                        className: "_2n8g"
                    }, String(g.contents)));
                    g.contents = g.contents + e | 0
                }
                return f
            } else {
                l = a[0];
                return x(c, l, d, !0)
            }
        };
        return {
            debugName: k.debugName,
            reactClassInternal: k.reactClassInternal,
            handedOffState: k.handedOffState,
            getDerivedStateFromProps: k.getDerivedStateFromProps,
            didMount: function(a) {
                b("MessengerAttachmentViewer").preload();
                return 0
            },
            didUpdate: k.didUpdate,
            willUnmount: k.willUnmount,
            shouldUpdate: k.shouldUpdate,
            render: function(c) {
                var d = m !== void 0 ? !(b("getPageIDFromThreadID")(b("bs_caml_option").valFromOption(m).thread_id) == null) : !1;
                d = y(c, a, d);
                var e = c.state.findID;
                c = e !== void 0 ? w(c, b("bs_caml_option").valFromOption(e)) : null;
                return i.jsxs("div", {
                    children: [c, d],
                    className: u(a),
                    tabIndex: 0
                })
            },
            initialState: function(a) {
                return {
                    findID: void 0
                }
            },
            retainedProps: k.retainedProps,
            reducer: function(a, c) {
                if (a)
                    return b("bs_block").__(0, [{
                        findID: b("bs_caml_option").some(a[0])
                    }]);
                else
                    return b("bs_block").__(0, [{
                        findID: void 0
                    }])
            },
            jsElementWrapped: k.jsElementWrapped
        }
    }
    c = b("ReasonReact.bs").wrapReasonForJs(k, function(a) {
        var c;
        return l(a.attachments, (c = b("bs_caml_option")).nullable_to_opt(a.attachType), c.nullable_to_opt(a.className), c.nullable_to_opt(a.count), c.nullable_to_opt(a.isPageMessage), c.nullable_to_opt(a.isXMA), c.nullable_to_opt(a.isVisible), c.nullable_to_opt(a.message), c.nullable_to_opt(a.onAttachmentLoad), c.nullable_to_opt(a.onSelect), c.nullable_to_opt(a.pageID), c.nullable_to_opt(a.threadID), c.nullable_to_opt(a.isFromViewer), [])
    });
    d = b("bs_belt_Option").getWithDefault;
    f.$pipe$question = d;
    f.empty_spacer_type = j;
    f.history = a;
    f.component = k;
    f.make = l;
    f.jsComponent = c
}
), null);
__d("MessengerPhotosGroup.react", ["MessengerPhotosGroupReact.bs"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("MessengerPhotosGroupReact.bs").jsComponent;
    e.exports = a
}
), null);
__d("MessengerStickerUtils", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.isStickerAttachment = g;
    f.isStickerMessage = h;
    f.isStickerMessageGroup = a;
    function g(a) {
        return !!(a && a.attach_type === "sticker")
    }
    function h(a) {
        var b = a.attachments;
        return !!(a.is_like_preview || a.sticker_id || b && b.length === 1 && g(b[0]))
    }
    function a(a) {
        return a.size === 1 && h(a.first())
    }
}
), null);
__d("MercuryShareAttachmentRenderLocations.bs", [], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a) {
        if (a !== void 0)
            return a === 1;
        else
            return !1
    }
    function b(a) {
        switch (a) {
        case 0:
            return "chat";
        case 1:
            return "chat_preview";
        case 2:
            return "messenger";
        case 3:
            return "pages_inbox"
        }
    }
    f.isPreview = a;
    f.getValue = b
}
), null);
__d("MessengerVoiceClipAttachmentReact.bs", ["cx", "cssVar", "React", "ReactStyle.bs", "bs_caml_option", "MessengerColors", "MessengerCustomColorUtils.bs", "MessengerDotComAndInboxM4Check.bs", "MercuryAttachmentAudioClip.react", "WorkChatRedesignedMessageListCheck.bs", "MercuryShareAttachmentRenderLocations.bs"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    function a(a) {
        var c = a.attachment
          , d = a.customColor
          , e = a.message;
        a = a.thread;
        var f = c.metadata, g;
        if (f == null)
            g = 0;
        else {
            f = f.duration;
            g = f == null ? 0 : f / 1e3
        }
        f = c.app_attribution !== null;
        var h = d !== void 0;
        e = "audio:" + e.message_id;
        c = c.url;
        var j;
        if (c == null)
            j = null;
        else {
            c = {
                src: c.toString(),
                duration: g,
                location: b("MercuryShareAttachmentRenderLocations.bs").getValue(2),
                rootClassName: "_3czg" + (f ? " _4yjw" : "") + " _2poz _ui9",
                showHelp: !1,
                width: 200
            };
            d !== void 0 && (c.customColor = b("bs_caml_option").valFromOption(d));
            j = i.jsx(b("MercuryAttachmentAudioClip.react"), c, e)
        }
        return i.jsx("div", {
            children: j,
            className: (b("WorkChatRedesignedMessageListCheck.bs").enabled ? "" : "_hh7") + (b("MessengerDotComAndInboxM4Check.bs").yes ? " _6ybn" : "") + (b("WorkChatRedesignedMessageListCheck.bs").enabled ? "" : " _s1-") + (h ? " _5sxi" : "") + (f ? "" : " _52mr") + (f ? " _mxz" : "") + " _1fz8" + (f ? " _1-wa" : "") + " _1nqp",
            style: d !== void 0 ? b("MessengerDotComAndInboxM4Check.bs").yes ? b("ReactStyle.bs").unsafeAddProp(b("MessengerColors").makeLinearGradient(a.gradient_colors, a.solid_color, b("MessengerCustomColorUtils.bs").defaultColor(0)), "backgroundAttachment", "fixed") : {
                backgroundColor: d
            } : b("WorkChatRedesignedMessageListCheck.bs").enabled ? {
                backgroundColor: "#ece9e7"
            } : {}
        })
    }
    c = a;
    f.make = c
}
), null);
__d("MessengerVoiceClipAttachmentReact.re", ["MessengerVoiceClipAttachmentReact.bs"], (function(a, b, c, d, e, f) {
    (function(a) {
        return null
    }
    );
    a = b("MessengerVoiceClipAttachmentReact.bs").make;
    f.make = a
}
), null);
__d("StickerUtils", [], (function(a, b, c, d, e, f) {
    a = {
        getScaledDimensions: function(a, b, c) {
            var d = b > a ? b : a;
            if (d === 0)
                return {
                    height: 0,
                    width: 0
                };
            c = c / d;
            return {
                height: Math.round(a * c),
                width: Math.round(b * c)
            }
        },
        capitalizeWords: function(a) {
            a = a.split(" ");
            for (var b = 0; b < a.length; b++) {
                var c = a[b].charAt(0).toUpperCase();
                a[b] = c + a[b].substr(1)
            }
            return a.join(" ")
        }
    };
    b = a;
    e.exports = b
}
), null);
__d("XStickerInTrayController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/stickers/in_tray/", {
        pack_id: {
            type: "Int",
            required: !0
        }
    })
}
), null);
__d("StickersPackInTrayQuery", ["Promise", "AsyncRequest", "RelayFBEnvironment", "RelayModern", "XStickerInTrayController", "StickersPackInTrayQuery.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("RelayModern").fetchQuery;
    b("RelayModern").graphql;
    var i = g !== void 0 ? g : g = b("StickersPackInTrayQuery.graphql");
    a = {
        onIsPackInTray: function(a, c, d) {
            return h(b("RelayFBEnvironment"), i, {
                stickerInterface: c
            }).then(function(c) {
                c = c && c.length > 0 ? c[0] : null;
                var e = c == null ? void 0 : (c = c.sticker_store) == null ? void 0 : (c = c.tray_packs) == null ? void 0 : c.edges;
                if (e)
                    return new (b("Promise"))(function(b, c) {
                        return b({
                            in_sticker_tray: e.filter(function(b) {
                                return b.node.id === a
                            }).length > 0
                        })
                    }
                    ).then(d);
                var f = b("XStickerInTrayController").getURIBuilder().setInt("pack_id", a).getURI();
                return new (b("Promise"))(function(a, c) {
                    return new (b("AsyncRequest"))(f).setHandler(function(b) {
                        return a(b.getPayload())
                    }).setAllowCrossPageTransition(!0).send()
                }
                ).then(d)
            })
        }
    };
    e.exports = a
}
), null);
__d("StickersStateStore", ["FluxReduceStore", "StickersActions", "StickersConfig", "StickersDispatcher", "immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.getInitialState = function() {
            return b("immutable").Map({
                customPack: null,
                customPackLoaded: !1,
                customPackNuxContent: null,
                recentStickers: [],
                recentStickersLoaded: !1,
                showFlyout: !1,
                storePackID: null,
                threadID: null,
                trayLoaded: !1,
                trayPackID: null
            })
        }
        ;
        d.reduce = function(a, c) {
            var d = c;
            c = b("StickersActions").Types;
            switch (d.type) {
            case c.ADD_RECENT_STICKER:
                var e = [d.sticker];
                a.get("recentStickers").forEach(function(a) {
                    if (a.id === d.sticker.id)
                        return;
                    e.push(a)
                });
                return a.set("recentStickers", e.splice(0, b("StickersConfig").max_mru_stickers));
            case c.HIDE_FLYOUT:
                return a.set("showFlyout", !1);
            case c.LOAD_CUSTOM_STICKER_PACK:
                return a.set("customPack", d.pack).set("customPackLoaded", !0).set("customPackNuxContent", d.nuxContent);
            case c.LOAD_RECENT_STICKERS:
                return a.set("recentStickersLoaded", !0).set("recentStickers", d.stickers);
            case c.SELECT_STORE_PACK:
                return a.set("storePackID", d.packID);
            case c.SELECT_TRAY_PACK:
                return a.set("trayPackID", d.packID).set("trayLoaded", !0);
            case c.SHOW_FLYOUT:
                return a.set("showFlyout", !0).set("threadID", d.threadID);
            case c.TRAY_LOADED:
                return a.set("trayLoaded", !0);
            default:
                return a
            }
        }
        ;
        return c
    }(b("FluxReduceStore"));
    a.__moduleID = e.id;
    c = new a(b("StickersDispatcher"));
    e.exports = c
}
), null);
__d("StickersStoreDialog.react", ["cx", "DialogFitHeight", "FDSSpinner.react", "JSResource", "LayerAutoFocus", "LayerFadeOnHide", "LayerHideOnEscape", "LayerRefocusOnHide", "PureStoreBasedStateMixin", "React", "RelayFBEnvironment", "RelayModern", "StickersActions", "StickersDispatcher", "StickersStateStore", "XUIDialog.react", "XUIDialogBody.react", "createReactClass_DEPRECATED", "lazyLoadComponent", "prop-types", "requireDeferred", "isSocialPlugin", "requestAnimationFrame", "StickersStoreDialogStoreQuery.graphql", "StickersStoreDialogPackDetailQuery.graphql"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = b("React"), k = b("requireDeferred")("StickerStoreFalcoEvent"), l = b("lazyLoadComponent")(b("JSResource")("StickersStoreView.react").__setRef("StickersStoreDialog.react")), m = b("lazyLoadComponent")(b("JSResource")("StickersStoreDetailView.react").__setRef("StickersStoreDialog.react")), n = 688, o = 320;
    a = window.devicePixelRatio || 1;
    var p = Math.ceil(40 * (window.devicePixelRatio || 1))
      , q = Math.ceil(88 * a)
      , r = Math.ceil(608 * a);
    c = b("createReactClass_DEPRECATED")({
        displayName: "StickersStoreDialog",
        mixins: [b("PureStoreBasedStateMixin")(b("StickersStateStore"))],
        propTypes: {
            isComposer: b("prop-types").bool,
            onToggle: b("prop-types").func.isRequired,
            shown: b("prop-types").bool.isRequired,
            causalElement: b("prop-types").instanceOf(Element)
        },
        getDefaultProps: function() {
            return {
                isComposer: !1
            }
        },
        statics: {
            calculateState: function() {
                return {
                    packID: b("StickersStateStore").getState().get("storePackID")
                }
            }
        },
        UNSAFE_componentWillMount: function() {
            b("StickersDispatcher").explicitlyRegisterStores([b("StickersStateStore")])
        },
        shouldComponentUpdate: function(a) {
            return !!a.shown
        },
        componentDidUpdate: function(a) {
            !a.shown && this.props.shown ? this._logOpen() : a.shown && !this.props.shown && this._logClose()
        },
        _logOpen: function() {
            k.onReady(function(a) {
                a.log(function() {
                    return {
                        event: "open_store"
                    }
                })
            })
        },
        _logClose: function() {
            k.onReady(function(a) {
                a.log(function() {
                    return {
                        event: "close_store"
                    }
                })
            })
        },
        _renderLoadingStore: function() {
            return j.jsx("div", {
                className: "_5r5e",
                children: j.jsx(b("FDSSpinner.react"), {
                    size: "large"
                })
            })
        },
        _renderStoreView: function() {
            var a = this;
            return j.jsx(b("RelayModern").QueryRenderer, {
                environment: b("RelayFBEnvironment"),
                query: h !== void 0 ? h : h = b("StickersStoreDialogStoreQuery.graphql"),
                variables: {
                    count: 20,
                    size: p
                },
                render: function(b) {
                    var c = b.error;
                    b = b.props;
                    if (c)
                        return null;
                    else if (b) {
                        c = a._getDialogWidth();
                        return j.jsx(j.Suspense, {
                            fallback: a._renderLoadingStore(),
                            children: j.jsx(l, {
                                dialogWidth: c,
                                isComposer: a.props.isComposer,
                                packList: b.viewer,
                                shown: a.props.shown
                            })
                        })
                    }
                    return a._renderLoadingStore()
                }
            })
        },
        _renderStoreDetailView: function(a) {
            var c = this;
            return j.jsx(b("RelayModern").QueryRenderer, {
                environment: b("RelayFBEnvironment"),
                query: i !== void 0 ? i : i = b("StickersStoreDialogPackDetailQuery.graphql"),
                variables: {
                    packID: a,
                    profileSize: q,
                    previewWidth: r
                },
                render: function(a) {
                    var d = a.error;
                    a = a.props;
                    if (d)
                        return null;
                    else if (a) {
                        d = a.node;
                        if (d.is_ghost_pack) {
                            b("StickersActions").selectStorePack(null);
                            return null
                        }
                        d = c._getDialogWidth();
                        return j.jsx(j.Suspense, {
                            fallback: c._renderLoadingStore(),
                            children: j.jsx(m, {
                                dialogWidth: d,
                                shown: c.props.shown,
                                stickerPack: a.node
                            })
                        })
                    }
                    return c._renderLoadingStore()
                }
            })
        },
        _onToggle: function(a) {
            var c = this;
            b("requestAnimationFrame")(function() {
                return c.props.onToggle(a, c.props.causalElement)
            })
        },
        _getDialogWidth: function() {
            return b("isSocialPlugin")() && document.body.offsetWidth < n ? o : n
        },
        render: function() {
            var a = this._getDialogWidth()
              , c = this.state.packID;
            return j.jsx(b("XUIDialog.react"), {
                behaviors: {
                    DialogFitHeight: b("DialogFitHeight"),
                    LayerAutoFocus: b("LayerAutoFocus"),
                    LayerFadeOnHide: b("LayerFadeOnHide"),
                    LayerRefocusOnHide: b("LayerRefocusOnHide"),
                    LayerHideOnEscape: b("LayerHideOnEscape")
                },
                onToggle: this._onToggle,
                shown: this.props.shown,
                label: "Stickers Store Dialog",
                width: a,
                causalElement: this.props.causalElement,
                children: j.jsxs(b("XUIDialogBody.react"), {
                    className: "_5rq- autofocus",
                    children: [j.jsx("div", {
                        className: c != null ? "_7vw3" : "",
                        children: this._renderStoreView()
                    }), c != null ? this._renderStoreDetailView(c) : null]
                })
            })
        }
    });
    d = c;
    e.exports = d
}
), null);
__d("StickersStoreController", ["DOM", "React", "ReactDOM", "StickersActions", "StickersStoreDialog.react"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = null
      , i = function(a, c) {
        h || (h = b("DOM").create("div"),
        b("DOM").appendContent(document.body, h)),
        b("ReactDOM").render(g.jsx(b("StickersStoreDialog.react"), {
            isComposer: a,
            onToggle: k,
            causalElement: c === null ? void 0 : c,
            shown: !0
        }), h)
    }
      , j = function() {
        if (!h)
            return;
        b("ReactDOM").render(g.jsx(b("StickersStoreDialog.react"), {
            shown: !1,
            onToggle: k
        }), h)
    }
      , k = function(a, b) {
        a ? i(!1, b) : j()
    };
    a = {
        showStore: function(a, c, d) {
            b("StickersActions").selectStorePack(a),
            i(!!c, d)
        }
    };
    e.exports = a
}
), null);
__d("isRetina", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        return (window.devicePixelRatio || 1) > 1
    }
    ;
    e.exports = a
}
), null);
__d("MessengerAttachmentRenderer", ["cx", "CurrentUser", "EmojiSticker.react", "JSResource", "MercuryAttachment", "MercuryAudioType", "MercuryIDs", "MercuryShareAttachment.react", "MercuryShareAttachmentRenderLocations", "MessengerErrorAttachment.react", "MessengerFileAttachment.re", "MessengerFromViewerUtils", "MessengerHotLikePreview.react", "MessengerHotLikeUtils", "MessengerPhotosGroup.react", "MessengerStickerUtils", "MessengerSupportedEmojiUtils", "MessengerVoiceClipAttachmentReact.re", "React", "Sticker.react", "StickerConstants", "StickersActions", "StickersPackInTrayQuery", "StickersStoreController", "StickerUtils", "lazyLoadComponent", "XStickerAssetController", "isRetina"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("MessengerFileAttachment.re").make
      , i = b("MessengerVoiceClipAttachmentReact.re").make
      , j = b("React")
      , k = b("lazyLoadComponent")(b("JSResource")("WorkChatFileAttachment.react").__setRef("MessengerAttachmentRenderer"))
      , l = 700
      , m = "sticker:"
      , n = "share:"
      , o = "_1c_u"
      , p = "_3o6m"
      , q = function(a) {
        return a === Object(a)
    };
    a = {
        getAttachmentsInsideBubble: function(a, c) {
            var d = this
              , e = b("MercuryAttachment").get(a).filter(q).filter(function(a) {
                return !d.attachmentShouldAppearOutsideBubble(a)
            });
            return this._getAttachmentComponents(e, a, c)
        },
        getAttachmentsOutsideBubble: function(a, c, d, e, f) {
            var g = this
              , h = b("MercuryAttachment").get(a).filter(q).filter(function(a) {
                return g.attachmentShouldAppearOutsideBubble(a)
            });
            return this._getAttachmentComponents(h, a, c, d, e, f)
        },
        _getAttachmentComponents: function(a, c, d, e, f, g) {
            var h = this
              , i = this._getPhotosGroup(a.filter(b("MercuryAttachment").isPhotoGroupAttachment), c, d, e);
            a = a.filter(function(a) {
                return !b("MercuryAttachment").isPhotoGroupAttachment(a)
            }).map(function(a) {
                return h._getAttachmentComponent(a, c, d, e, f, g)
            });
            i && a.push(i);
            return a
        },
        _getAttachmentComponent: function(a, c, d, e, f, g) {
            var h = e && e.customColor
              , i = e && e.onUnwrap
              , j = e && e.isVisible
              , k = e && e.isFromViewer
              , l = e && e.isPageMessage;
            e = e && e.onSelect;
            if (b("MessengerStickerUtils").isStickerAttachment(a))
                return this._getStickerComponent(a, c, h, i, g);
            if (this.isEmojiLikeAttachment(a))
                return this._getEmojiLikeAttachment(a, c, i);
            if (this.isVoiceClip(a))
                return this._getVoiceClip(a, c, h, i, g);
            if (this.isFileAttachment(a))
                return this._getFileComponent(a, c);
            if (this.isP2P(a) || this.isShareAttachment(a))
                return this._getShareAttachment(a, c, d, j, k, l, e, f, g);
            return this.isErrorAttachment(a) ? this._getErrorAttachment(a, c) : null
        },
        _getStickerComponent: function(a, c, d, e, f) {
            if (c.is_like_preview)
                return j.jsx(b("MessengerHotLikePreview.react"), {
                    customColor: d,
                    customLike: c.customLike,
                    since: c.like_preview_since,
                    thread: f,
                    location: b("MercuryShareAttachmentRenderLocations").MESSENGER
                }, "hlp:" + c.like_preview_since);
            e = a.metadata;
            if (!e) {
                e = b("MessengerHotLikeUtils").getMetadataForHotLike(c.sticker_id);
                if (!e) {
                    e = {};
                    a = b("StickerUtils").getScaledDimensions(b("StickerConstants").THREAD_SIZE, b("StickerConstants").THREAD_SIZE, b("StickerConstants").THREAD_SIZE);
                    var g = a.height;
                    a = a.width;
                    e.height = g;
                    e.width = a
                }
                e.stickerID = c.sticker_id
            }
            g = b("XStickerAssetController").getURIBuilder().setInt("sticker_id", e.stickerID);
            a = null;
            var h = null;
            b("isRetina")() ? (a = e.paddedSpriteURI2x,
            h = e.spriteURI2x) : (a = e.paddedSpriteURI,
            h = e.spriteURI);
            var i = e.stickerID.toString();
            d = j.jsx(b("Sticker.react"), {
                accessibilityLabel: e.accessibilityLabel,
                className: "_2poz _ui9",
                animationTrigger: "hover",
                customColor: (d = d) != null ? d : void 0,
                frameCount: e.frameCount || 1,
                frameRate: e.frameRate || b("StickerConstants").DEFAULT_FRAME_RATE,
                framesPerCol: e.framesPerCol || 1,
                framesPerRow: e.framesPerRow || 1,
                onStickerClick: function(d, a) {
                    if (d == null)
                        return;
                    b("StickersPackInTrayQuery").onIsPackInTray(d, "messages", function(a) {
                        a.in_sticker_tray ? (b("StickersActions").selectTrayPack(d),
                        b("StickersActions").showStickerFlyout(c.thread_id)) : b("StickersStoreController").showStore(d)
                    })
                },
                packID: e.packID && e.packID.toString(),
                paddedSpriteURI: a,
                sourceHeight: e.height,
                sourceURI: g.setEnum("image_type", "BestEffortImage").getURI().toString(),
                sourceWidth: e.width,
                spriteURI: h,
                stickerID: i,
                testID: "sticker",
                thread: f
            }, m + c.message_id);
            return d
        },
        _getEmojiLikeAttachment: function(a, c, d) {
            d = b("MessengerSupportedEmojiUtils").transferSize(a.size);
            d = b("MessengerSupportedEmojiUtils").getHotLikeEmojiData(c.body, d) || b("MessengerSupportedEmojiUtils").getHotLikeEmojiDataTransition(c.body, d);
            if (!d)
                return this._getErrorAttachment(a, c);
            a = d.emoji;
            d = j.jsx(b("EmojiSticker.react"), {
                className: "_2poz _ui9",
                emoji: c.body,
                emojiImage: a,
                sourceURI: ""
            }, m + c.message_id);
            return d
        },
        _getShareAttachment: function(a, c, d, e, f, g, h, i, k) {
            var m, o, p = null;
            c && c.platform_xmd && (p = JSON.parse(c.platform_xmd));
            o = (o = a) != null ? (o = o.share) != null ? (o = o.messenger_ctas) != null ? (o = o[0]) != null ? o.page_id : o : o : o : o;
            m = (m = a) != null ? (m = m.share) != null ? (m = m.target) != null ? (m = m.items) != null ? (m = m[0]) != null ? (m = m.call_to_actions) != null ? (m = m[0]) != null ? m.page_id : m : m : m : m : m : m : m;
            o = o || m;
            m = o ? b("MercuryIDs").getParticipantIDFromUserID(o) : c.author;
            return j.jsx(b("MercuryShareAttachment.react"), {
                attachment: a.share,
                isFromViewer: f,
                isPageMessage: g,
                isSponsored: c.is_sponsored,
                isVisible: !!e,
                location: b("MercuryShareAttachmentRenderLocations").MESSENGER,
                maxWidth: l,
                messageID: c.message_id,
                mnMessageType: p && p.template_type,
                onComponentLoaded: d,
                onSelect: h,
                pageID: m,
                threadID: c.thread_id,
                afterDecorators: i,
                timestamp: c.timestamp,
                author: c.author,
                thread: k
            }, n + c.message_id)
        },
        _getVoiceClip: function(a, c, d, e, f) {
            d = b("MessengerFromViewerUtils").isFromViewer(c) ? d || void 0 : void 0;
            return j.jsx(i, {
                thread: f,
                attachment: a,
                customColor: d,
                message: c
            }, "audio:" + c.message_id)
        },
        _getErrorAttachment: function(a, c) {
            return j.jsx(b("MessengerErrorAttachment.react"), {
                attachment: a
            }, "error:" + c.message_id)
        },
        _getPhotosGroup: function(a, c, d, e) {
            if (!a.length)
                return null;
            var f = e && e.onUnwrap
              , g = e && e.isVisible
              , h = e && e.onSelect
              , i = e && e.isPageMessage;
            e = e && e.pageID;
            return j.jsx(b("MessengerPhotosGroup.react"), {
                attachments: a,
                className: "_2poz _52mr _ui9",
                count: a.length,
                isPageMessage: i,
                isVisible: !!g,
                message: c,
                onSelect: h,
                onUnwrap: function() {
                    f && f()
                },
                pageID: e,
                onAttachmentLoad: d
            }, "photos:" + c.message_id)
        },
        getVideoElem: function(a, b) {
            b = b.getMessageElement(a);
            if (!b)
                return null;
            a = b.getElementsByClassName(o);
            return a && a.length ? a[0] : b
        },
        getSphericalPhotoElem: function(a, b) {
            b = b.getMessageElement(a);
            if (!b)
                return null;
            a = b.getElementsByClassName(p);
            return a && a.length ? a[0] : b
        },
        _rendersWithoutAttribution: function(a) {
            return a.length != 1 || !b("MercuryAttachment").hasAttribution(a[0])
        },
        _getFileComponent: function(a, c) {
            return b("CurrentUser").isWorkUser() ? j.jsx(j.Suspense, {
                fallback: null,
                children: j.jsx(k, {
                    attachment: a,
                    message: c
                })
            }, "file:" + a.url) : j.jsx(h, {
                attachment: a
            }, "file:" + a.url)
        },
        attachmentShouldAppearOutsideBubble: function(a) {
            return b("MessengerStickerUtils").isStickerAttachment(a) || b("MercuryAttachment").isPhotoGroupAttachment(a) || this.isShareAttachment(a) || this.isP2P(a) || this.isVoiceClip(a) || this.isErrorAttachment(a) || this.isEmojiLikeAttachment(a) || this.isWorkFileAttachment(a)
        },
        isPhotosGroupAttachment: function(a) {
            a = a.props.attachments;
            return !!a && a.length > 1 && a.some(function(a) {
                return !!a && b("MercuryAttachment").isPhotoGroupAttachment(a)
            })
        },
        isRenderedShareAttachment: function(a) {
            return !!(a.key && a.key.startsWith(n))
        },
        isFileAttachment: function(a) {
            return a.attach_type === "file"
        },
        isShareAttachment: function(a) {
            return !!(this._isStoryBased(a) && !this.isP2P(a) && (a.share.style_list.indexOf("share") > -1 || a.share.style_list.indexOf("fallback") > -1))
        },
        isSharedVideoAttachment: function(a) {
            a = a.attach_type === "share" && a.share && a.share.subattachments && a.share.subattachments[0];
            return !!(a && a.target && a.target.video_id)
        },
        isP2P: function(a) {
            return !!(this._isStoryBased(a) && a.share.style_list.indexOf("orion") > -1)
        },
        _isStoryBased: function(a) {
            return !!(a.attach_type === "share" && a.share && a.share.style_list)
        },
        isEmojiLikeAttachment: function(a) {
            return a.attach_type === "emoji_like"
        },
        isWorkFileAttachment: function(a) {
            return this.isFileAttachment(a) && b("CurrentUser").isWorkUser()
        },
        isVoiceClip: function(a) {
            a = a.metadata;
            return !!a && (!!a.isAudio || a.type === b("MercuryAudioType").AudioClip || a.type === b("MercuryAudioType").VoiceMessageWithTranscript)
        },
        isVoiceClipAttachment: function(a) {
            var c = this;
            a = b("MercuryAttachment").get(a).filter(q).filter(function(a) {
                return c.isVoiceClip(a)
            });
            return !!a.length
        },
        isP2PAttachment: function(a) {
            var c = this;
            a = b("MercuryAttachment").get(a).filter(function(a) {
                return q(a) && c.isP2P(a)
            });
            return !!a.length
        },
        isSingleVideoAttachment: function(a) {
            a = b("MercuryAttachment").get(a).filter(q).filter(function(a) {
                return b("MercuryAttachment").isVideoAttachment(a)
            });
            return a.length === 1
        },
        isSharedVideoAttachmentMessage: function(a) {
            var c = this;
            a = b("MercuryAttachment").get(a).filter(q).filter(function(a) {
                return c.isSharedVideoAttachment(a) || c.isGenieSharedVideoAttachment(a)
            });
            return a.length === 1
        },
        isGenieSharedVideoAttachment: function(a) {
            return !!(a.attach_type === "share" && a.share && a.share.style_list.indexOf("genie_message") > -1 && a.share.target && a.share.target.attachment && this.isSharedVideoAttachment(a.share.target.attachment))
        },
        isSingleSphericalPhotoAttachment: function(a) {
            a = b("MercuryAttachment").get(a).filter(q);
            if (a.length !== 1)
                return !1;
            a = a.filter(function(a) {
                return a.photo_encodings && a.photo_encodings.length !== 0
            }).length === 1;
            return a
        },
        isErrorAttachment: function(a) {
            return a.attach_type === "error"
        }
    };
    e.exports = a
}
), null);
__d("MessengerCodePasteUtils", ["cx", "BanzaiODS", "MessengerBubble.react", "MessengerFormattingUtils", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.containsCodeBlock = a;
    f.getCodeAndMessageBubbles = c;
    var h = b("React")
      , i = /`{3,}/
      , j = 3
      , k = /^\s+/
      , l = /\s+$/;
    function a(a) {
        return !!(a != null && a.search(i) !== -1)
    }
    function m(a, b) {
        var c = 0;
        if (b - 2 >= 0) {
            c += a[b - 2].trim().length;
            var d = a[b - 2].match(l);
            d && (c += d[0].length)
        }
        b - 1 >= 0 && (c += a[b - 1].length + 2 * j);
        d = a[b].match(k);
        d && (c += d[0].length);
        return c
    }
    function n(a, b, c) {
        if (a)
            return a.map(function(a) {
                return Object.assign(Object.assign({}, a), {
                    offset: a.offset - b
                })
            }).filter(function(a) {
                return 0 <= a.offset && a.offset < c
            });
        else
            return a
    }
    function o(a) {
        a = a.split("\n");
        return a.length === 1 ? {
            language: "",
            code: a[0]
        } : {
            language: a[0].replace(/[^a-zA-Z]+/g, ""),
            code: a.slice(1).join("\n")
        }
    }
    function p(a) {
        var c = b("MessengerFormattingUtils").getRanges(a).filter(function(a) {
            return a.formatter === b("MessengerFormattingUtils").formatConfigs.blockquote.formatter || a.formatter === b("MessengerFormattingUtils").formatConfigs.blockcode.formatter
        }).sort(function(a, b) {
            return a.offset !== b.offset ? a.offset - b.offset : b.length - a.length
        })
          , d = []
          , e = 0
          , f = 0;
        for (var g = 0; g < c.length; g++) {
            var h = c[g];
            if (h.offset < f)
                continue;
            h.formatter === b("MessengerFormattingUtils").formatConfigs.blockcode.formatter && (d.push(a.substring(e, h.offset)),
            d.push(h.innerText),
            e = h.offset + h.length);
            f = h.offset + h.length
        }
        d.push(a.substring(e));
        return d
    }
    function c(a, c, d, e, f, g) {
        a = p(a);
        var i = []
          , j = 0;
        for (var k = 0; k < a.length; k += 2) {
            var l = a[k].trim();
            if (l && l.length > 0) {
                j += m(a, k);
                var q = c ? n(c, j, l.length) : c;
                i.push(h.jsx(b("MessengerBubble.react"), {
                    body: l,
                    customColor: e != null ? e : void 0,
                    className: "clearfix _3058 _ui9",
                    isFromViewer: f,
                    ranges: q,
                    threadID: d,
                    thread: g
                }, k))
            }
            if (k + 1 < a.length && a[k + 1]) {
                l = o(a[k + 1]);
                q = l.code;
                b("BanzaiODS").bumpEntityKey(3303, "messenger_code_paste", "render_bubble");
                i.push(h.jsx("div", {
                    className: "_3058 _wu0 _52mr",
                    children: q
                }, k + 1))
            }
        }
        return i
    }
}
), null);
__d("shouldNotRenderSegoe", ["MessengerConfig", "UserAgent"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = new RegExp("[\u0530-\u05f4\u10a0-\u10ff]")
      , h = b("UserAgent").isBrowser("Chrome") && b("UserAgent").isPlatform("Windows 10");
    function a(a) {
        return !b("MessengerConfig").SegoeUIDisabled && h && g.test(a)
    }
}
), null);
__d("MessengerBubble.react", ["cx", "requireCond", "EmojiOnlyMessage.react", "FlexLayout.react", "MercuryIDs", "MercuryMessageBody.react", "MercuryMessageRenderLocations", "MessageReplyPermissions", "MessengerActions", "MessengerCodeBubble.re", "MessengerColors", "MessengerContactActions.re", "MessengerCustomColorUtils.bs", "MessengerDecorator", "MessengerDotComAndInboxM4Check.bs", "MessengerEnvironment", "cr:1398876", "MessengerSupportedEmojiUtils", "React", "RepliedToMessageContent.react", "cr:1398877", "WorkChatRedesignedMessageListCheck.re", "gkx", "goURI", "immutable", "joinClasses", "prop-types", "shouldNotRenderSegoe"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("MessengerCodeBubble.re").make
      , i = b("MessengerContactActions.re").actions
      , j = b("React")
      , k = 0;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.state = {
                emojis: void 0
            },
            d.$2 = function(a, c, e) {
                switch (a) {
                case i.MESSAGE:
                    d.$3(c, e);
                    break;
                case i.PROFILE:
                    a = b("MercuryIDs").getParticipantIDFromUserID(c.id);
                    a = d.props.participants && d.props.participants.get(a);
                    if (a && a.href) {
                        var f = b("MessengerEnvironment").messengerdotcom;
                        f ? window.open(a.href) : b("goURI")(a.href)
                    } else
                        d.$3(c, e);
                    break
                }
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            if (!this.props.emojis) {
                var a = this.props.body || "";
                a = b("MessengerSupportedEmojiUtils").getEmojiOnlyContents(a);
                a && a.length && this.setState({
                    emojis: a
                })
            }
        }
        ;
        d.$1 = function() {
            if (this.props.message != null && this.props.message.thread_id != null && this.props.message.tags != null && this.props.message.attachments != null && this.props.message.attachments.length > 0) {
                var a, b, c = this.props.message;
                a = (a = c.attachments[0].share) == null ? void 0 : (a = a.target) == null ? void 0 : a.sender_wec_number;
                b = (b = c.attachments[0].share) == null ? void 0 : (b = b.target) == null ? void 0 : b.sender_wec_number_formated;
                var d = c.thread_id.replace("user:", "")
                  , e = c.tags[k] !== "source:wa_callback"
                  , f = this.props.participants != null && this.props.participants.last() != null && this.props.participants.last().wec_group_participant_count == null;
                c = (c = c.attachments[0].share) == null ? void 0 : (c = c.target) == null ? void 0 : c.sender_wec_name;
                if (e || d === a || !this.props.wecFirstMessage || f)
                    return null;
                if (a != null && c != null)
                    if (a === c)
                        return j.jsx("div", {
                            className: "_7ox8",
                            children: b
                        });
                    else
                        return j.jsxs("div", {
                            className: "_7ox8",
                            children: [b, "  ~", c]
                        })
            }
            return null
        }
        ;
        d.render = function() {
            var a = this
              , c = !1
              , d = null;
            this.state.emojis ? d = j.jsx(b("EmojiOnlyMessage.react"), {
                contents: this.state.emojis
            }) : (c = !0,
            d = j.jsx(b("MercuryMessageBody.react"), {
                ref: this.props.bodyRef,
                body: this.props.body,
                className: "_3oh-" + (b("shouldNotRenderSegoe")(this.props.body || "") ? " _2por" : "") + " _58nk",
                threadCustomColor: this.props.threadCustomColor,
                isFromViewer: this.props.isFromViewer,
                ranges: this.props.ranges,
                metaRanges: this.props.metaRanges,
                plainText: this.props.plainText,
                threadID: this.props.threadID,
                customLike: this.props.customLike,
                onContactSelect: this.$2,
                renderLocation: b("MercuryMessageRenderLocations").MESSENGER
            }));
            var e = []
              , f = []
              , g = this.props.message
              , i = !!this.props.isFromViewer;
            g && !this.props.excludeAfterDecorators && (b("MessengerDecorator").getAfterDecorators().forEach(function(b) {
                b.check(g, i) && (e.push(b.render(g, i, a.props)),
                f.push(b.getAdditionalClassNames()))
            }),
            b("MessengerDecorator").getBeforeDecorators().forEach(function(a) {
                a.check(g, i) && f.push(a.getAdditionalClassNames())
            }));
            var k = f.join(" ")
              , l = null;
            this.props.body && (this.props.containsCode ? l = j.jsx(h, {
                body: this.props.body,
                className: this.props.className,
                customColor: this.props.customColor,
                isFromViewer: this.props.isFromViewer === !0,
                ranges: this.props.ranges || [],
                threadID: this.props.threadID || "",
                thread: this.props.thread
            }) : this.props.is_forwarded && b("gkx")("974812") ? l = j.jsxs("blockquote", {
                className: "_8720",
                children: [j.jsx("div", {
                    className: "_8721"
                }), d]
            }) : l = j.jsxs("div", {
                className: "_aok" + (b("MessengerDotComAndInboxM4Check.bs").yes ? " _7i2m" : "") + (b("WorkChatRedesignedMessageListCheck.re").enabled ? " _7w6-" : ""),
                tabIndex: 0,
                children: [d, this.props.attachments]
            }));
            var m = this.props.repliedToMessage && b("MessageReplyPermissions").bubbleContainsRepliedToMessage(this.props.repliedToMessage, !!(!this.props.containsCode && this.state.emojis)) ? j.jsx(b("RepliedToMessageContent.react"), {
                isFromViewer: this.props.isFromViewer,
                isLinkified: !0,
                isMessengerUI: !0,
                repliedToMessageData: this.props.repliedToMessage,
                scrollToRepliedMessage: this.props.scrollToRepliedMessage,
                replyInOneBubble: !0
            }) : null
              , n = this.props.tooltip || {}
              , o = this.props.isFromViewer && !this.state.emojis && !this.props.containsCode
              , p = b("MessengerDotComAndInboxM4Check.bs").yes && this.props.thread && o ? babelHelpers["extends"]({
                backgroundAttachment: "fixed"
            }, b("MessengerColors").makeLinearGradient(this.props.thread.gradient_colors, this.props.thread.solid_color, b("MessengerCustomColorUtils.bs").defaultColor())) : {};
            return j.jsxs("div", babelHelpers["extends"]({}, b("WorkChatRedesignedMessageListCheck.re").enabled ? {} : n, {
                style: p,
                className: b("joinClasses")(k, this.props.className, (this.props.containsCode ? "" : "_hh7") + (b("MessengerDotComAndInboxM4Check.bs") && !this.props.containsCode ? " _6ybn" : "") + (this.props.containsCode ? " _4qoc" : "") + (!this.props.isFromViewer && this.props.containsCode ? " _65sp" : "") + (this.props.isFromViewer && this.props.containsCode ? " _65sq" : "") + (this.props.containsCode ? "" : " _s1-") + (!this.props.containsCode && !this.props.notBubblish ? " _52mr" : "") + (!this.props.containsCode && this.props.isP2PAttachment ? " _4z55" : "") + (!this.props.containsCode && !!this.state.emojis ? " _2f5r" : "") + (!this.props.containsCode && !!this.state.emojis ? " _581a" : "") + (o ? " _43by" : "") + (b("MessengerDotComAndInboxM4Check.bs").yes && o ? " _6ybp" : "") + (!this.props.containsCode && c ? " _3oh-" : "") + (m ? " _6uum" : "") + (this.props.is_forwarded ? " _8722" : "")),
                children: [g == null || this.props.isPageMessage || this.props.isSavedView ? null : b("cr:1398877") != null ? j.jsx(b("cr:1398877"), {
                    message: g,
                    hovered: this.props.isHovered,
                    messageProps: {
                        isFromViewer: this.props.isFromViewer === !0,
                        onReplyToMessage: this.props.onReplyToMessage,
                        handleToggleOriginal: this.props.handleToggleOriginal,
                        hasFormatting: this.props.hasFormatting,
                        isShowingOriginal: this.props.plainText
                    }
                }) : b("cr:1398876") != null && j.jsx(b("cr:1398876"), {
                    className: "_1z_2",
                    message: g,
                    isFromViewer: !!this.props.isFromViewer,
                    hovered: this.props.isHovered,
                    onReactionSwap: this.props.onReactionSwap,
                    onReplyToMessage: this.props.onReplyToMessage,
                    messageProps: babelHelpers["extends"]({}, this.props, {
                        handleToggleOriginal: this.props.handleToggleOriginal,
                        hasFormatting: this.props.hasFormatting,
                        isShowingOriginal: this.props.plainText
                    }),
                    isSavedView: this.props.isSavedView
                }), m, this.$1(), l, l ? null : d, l ? null : this.props.attachments, e.length > 1 ? j.jsx(b("FlexLayout.react"), {
                    align: "center",
                    className: "_7moe",
                    children: e
                }) : e]
            }))
        }
        ;
        d.$3 = function(a, c) {
            c && c.preventDefault();
            c = b("MercuryIDs").getThreadIDFromUserID(a.id);
            c && b("MessengerActions").selectThread(c)
        }
        ;
        return c
    }(j.PureComponent);
    a.propTypes = {
        attachments: (c = b("prop-types")).instanceOf(b("immutable").List),
        body: c.string,
        customColor: c.string,
        customLike: c.object,
        excludeAfterDecorators: c.bool,
        isFromViewer: c.bool,
        message: c.object,
        metaRanges: c.array,
        notBubblish: c.bool,
        onUnwrap: c.func,
        participants: c.object,
        plainText: c.bool,
        ranges: c.array,
        threadID: c.string,
        threadCustomColor: c.string,
        onReactionSwap: c.func,
        onReplyToMessage: c.func,
        isHovered: c.bool,
        handleToggleOriginal: c.func,
        hasFormatting: c.func,
        isPageMessage: c.bool,
        isSavedView: c.bool,
        repliedToMessage: c.object,
        scrollToRepliedMessage: c.func,
        thread: c.object,
        wecFirstMessage: c.bool,
        is_forwarded: c.bool
    };
    e.exports = a
}
), null);
__d("MessengerCodeBubble.bs", ["React", "bs_caml_option", "MessengerCodePasteUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a) {
        var c = a.body
          , d = a.className
          , e = a.customColor
          , f = a.isFromViewer
          , h = a.ranges
          , i = a.threadID;
        a = a.thread;
        c = b("MessengerCodePasteUtils").getCodeAndMessageBubbles(c, h, i, e, f, a);
        h = {
            children: c
        };
        d !== void 0 && (h.className = b("bs_caml_option").valFromOption(d));
        return g.jsx("div", h)
    }
    c = a;
    f.make = c
}
), null);
__d("MessengerCodeBubble.re", ["MessengerCodeBubble.bs"], (function(a, b, c, d, e, f) {
    (function(a) {
        return null
    }
    );
    a = b("MessengerCodeBubble.bs").make;
    f.make = a
}
), null);
__d("ComposedEntityMutability", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        MUTABLE: 0,
        IMMUTABLE: 1,
        SEGMENTED: 2
    });
    e.exports = a
}
), null);
__d("MessengerConstants", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = "new";
    f.NEW_THREAD_KEY = a;
    b = {
        HEIGHT: 604,
        WIDTH: 405
    };
    f.BROWSER_EXTENSIONS_DIALOG_DIMENSIONS = b
}
), null);
__d("MessengerEditorStateManager", ["CacheStorage", "ComposedEntityMutability", "ComposedEntityMutabilityToName", "ComposedEntityTypeToName", "CurrentUser", "DraftEntityInstance", "EditorState", "FBLogger", "LogHistory", "MessengerConstants", "SelectionState", "decodeBlocks", "encodeBlocks", "mapObject"], (function(a, b, c, d, e, f) {
    "use strict";
    f.get = a;
    f.set = c;
    f._getKey = d;
    f._logWriteError = e;
    f._switchToMemoryStore = n;
    f._getEmptyEditorState = o;
    var g, h = b("ComposedEntityMutability").IMMUTABLE, i = b("LogHistory").getInstance("messenger_editor_state_manager"), j = new (b("CacheStorage"))("localstorage","msgdraft:"), k = new (b("CacheStorage"))("memory"), l = !1, m;
    function a(a) {
        if (a == null)
            return this._getEmptyEditorState();
        if (a === b("MessengerConstants").NEW_THREAD_KEY)
            return m || this._getEmptyEditorState();
        var c = j.get(this._getKey(a), !1);
        l && (c ? (k.set(a, c),
        j.remove(this._getKey(a))) : c = k.get(a, !1));
        if (!c)
            return this._getEmptyEditorState();
        a = c.encodedBlocks;
        var d = (g || (g = b("mapObject")))(a.entityMap, function(a, c) {
            return new (b("DraftEntityInstance"))({
                type: b("ComposedEntityTypeToName")[a.type],
                mutability: b("ComposedEntityMutabilityToName")[h],
                data: a.data
            })
        });
        a = b("decodeBlocks")(a.blocks, d);
        d = b("EditorState").createWithContent(a);
        return b("EditorState").acceptSelection(d, new (b("SelectionState"))(c.selection))
    }
    function c(a, c) {
        if (a === b("MessengerConstants").NEW_THREAD_KEY) {
            m = c;
            return
        }
        var d = b("encodeBlocks")(c.getCurrentContent());
        c = c.getSelection();
        var e = c.toJS()
          , f = l ? k : j;
        f = f.set(this._getKey(a), {
            encodedBlocks: d,
            selection: e
        });
        f || (this._logWriteError(a),
        this._switchToMemoryStore(a, d, c))
    }
    function d(a) {
        return b("CurrentUser").getID() + ":" + a
    }
    function e(a) {
        var c = j.getLastSetExceptionMessage()
          , d = j.getStorageKeyCount();
        b("FBLogger")("messenger_dot_com").warn("Fail to write to MessengerEditorState %s  %s", c, d);
        i.debug("set_editor_state_fail", JSON.stringify({
            threadID: a,
            error: c,
            keysCount: d
        }))
    }
    function n(a, c, d) {
        if (!l) {
            b("FBLogger")("messenger_dot_com").warn("Switching to MemoryStorage");
            i.debug("Switching to memoryStorage");
            l = !0;
            d = d.toJS();
            k.set(a, {
                encodedBlocks: c,
                selection: d
            })
        }
    }
    function o() {
        var a = b("EditorState").createEmpty();
        return b("EditorState").forceSelection(a, a.getSelection())
    }
}
), null);
__d("MessengerLoggerUtils", ["MercuryIDs", "MessagingThreadEventTypedLogger", "ScriptPath", "pageID"], (function(a, b, c, d, e, f) {
    f.logThreadChangeEvent = a;
    f.log = c;
    function a(a, b, c, d) {
        c.activeThreadID && a && this.log({
            activeThreadID: c.activeThreadID,
            event: "inactive",
            clientEventTimeMs: b,
            activeTimeMs: b - a
        }),
        d.activeThreadID && this.log({
            activeThreadID: d.activeThreadID,
            event: "active",
            clientEventTimeMs: b,
            activeTimeMs: 0
        })
    }
    function c(a) {
        var c = b("MercuryIDs").tokenize(a.activeThreadID.toString())
          , d = b("ScriptPath").getPageInfo();
        new (b("MessagingThreadEventTypedLogger"))().setEvent(a.event).setClientEventTimeMs(a.clientEventTimeMs).setActiveTimeMs(a.activeTimeMs).setPageID(b("pageID")).setPageData(d ? d.extraData : {}).setThreadID(c.value).setSource("messenger").log()
    }
}
), null);
__d("MessengerURIStore", ["LogHistory", "MessengerActions", "MessengerLoggerUtils", "MessengerStore"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("LogHistory").getInstance("messenger_uri_store");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b;
            b = a.call(this) || this;
            b.$MessengerURIStore1 = {
                activeThreadID: null,
                folderKey: null,
                detailView: null,
                filter: null,
                folder: null,
                masterView: null,
                query: null,
                mid: null,
                sa: null,
                seeAllType: null,
                serverThreadID: null,
                extraQueryParams: null
            };
            b.$MessengerURIStore2 = babelHelpers["extends"]({}, b.$MessengerURIStore1);
            b.$MessengerURIStore4 = b.$MessengerURIStore3 = null;
            return b
        }
        var d = c.prototype;
        d.getState = function() {
            return this.$MessengerURIStore1
        }
        ;
        d.getPrevState = function() {
            return this.$MessengerURIStore2
        }
        ;
        d.__onDispatch = function(a) {
            switch (a.type) {
            case b("MessengerActions").Types.REPLACE_STATE:
                this.$MessengerURIStore2 = this.$MessengerURIStore1;
                this.$MessengerURIStore4 = this.$MessengerURIStore3;
                this.$MessengerURIStore1 = babelHelpers["extends"]({
                    activeThreadID: null,
                    folderKey: null,
                    detailView: null,
                    filter: null,
                    folder: null,
                    masterView: null,
                    query: null,
                    mid: null,
                    sa: null,
                    seeAllType: null,
                    serverThreadID: null,
                    extraQueryParams: null,
                    threadsIDs: null
                }, a.nextState);
                a = Date.now();
                this.$MessengerURIStore3 = a;
                g.debug("replace_state", JSON.stringify({
                    previousThreadID: this.$MessengerURIStore2.activeThreadID,
                    nextThreadID: this.$MessengerURIStore1.activeThreadID
                }));
                b("MessengerLoggerUtils").logThreadChangeEvent(this.$MessengerURIStore4, a, this.$MessengerURIStore2, this.$MessengerURIStore1);
                this.emitChange();
                break
            }
        }
        ;
        return c
    }(b("MessengerStore"));
    c = new a();
    e.exports = c
}
), null);
__d("MessengerURLUploader", ["Event", "MessengerActions", "SubscriptionsHandler", "URLMatcher", "debounce", "requireCond", "cr:988286"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, c, d) {
            var e = this;
            this.handleInputValueChange = function(a) {
                a = e.$1();
                a = b("URLMatcher").match(a) || (b("cr:988286") != null ? b("cr:988286").matchTaskNumber(a) || b("cr:988286").matchDiffNumber(a) : null);
                a && (e.$3 !== a && (e.$3 = a,
                b("MessengerActions").loadingPreview(e.$5, a)))
            }
            ;
            this.$1 = a;
            this.$4 = new (b("SubscriptionsHandler"))();
            this.$5 = d;
            this.$2 = b("debounce")(this.handleInputValueChange, 200);
            this.initInput(c)
        }
        var c = a.prototype;
        c.getMatchedURL = function() {
            return this.$3
        }
        ;
        c.initInput = function(a) {
            this.$4.addSubscriptions(b("Event").listen(a, "keyup", this.$2), b("Event").listen(a, "paste", this.$2))
        }
        ;
        c.setThreadID = function(a) {
            this.$5 = a
        }
        ;
        c.clearShareData = function() {
            this.$3 = null
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("MessengerThreadSearchActions", ["MessengerDispatcher", "keyMirror"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("keyMirror")({
        CHANGE_RESULT_INDEX: null,
        GET_MORE_CONTEXT: null,
        GET_MORE_THREADS: null,
        UPDATE_THREAD_STATE: null,
        SCROLL_TO_MESSAGE: null
    });
    a = {
        Types: g,
        selectPrevious: function() {
            b("MessengerDispatcher").dispatch({
                type: g.CHANGE_RESULT_INDEX,
                delta: 1
            })
        },
        selectNext: function() {
            b("MessengerDispatcher").dispatch({
                type: g.CHANGE_RESULT_INDEX,
                delta: -1
            })
        },
        getMoreSearchContext: function(a, c) {
            b("MessengerDispatcher").dispatch({
                type: g.GET_MORE_CONTEXT,
                direction: a,
                threadID: c
            })
        },
        updateThreadState: function(a, c) {
            b("MessengerDispatcher").dispatch({
                type: g.UPDATE_THREAD_STATE,
                threadID: a,
                mid: c
            })
        },
        loadMoreThreads: function() {
            b("MessengerDispatcher").dispatch({
                type: g.GET_MORE_THREADS
            })
        },
        scrollToMessage: function(a) {
            b("MessengerDispatcher").dispatch({
                type: g.SCROLL_TO_MESSAGE,
                messageID: a
            })
        }
    };
    e.exports = a
}
), null);
__d("DebouncedMentionsTextEditor.react", ["AbstractMentionsTextEditor.react", "clearImmediate", "debounce", "setImmediate"], (function(a, b, c, d, e, f) {
    var g = new RegExp(/@[^ ]*$/gm);
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(c) {
            var d;
            d = a.call(this, c) || this;
            d.__maybeSearch = function() {
                var a = d.props.editorState
                  , c = a.getSelection();
                if (c.getHasFocus() && c.isCollapsed()) {
                    var e = a.getCurrentContent();
                    a = d.props;
                    var f = a.mentionsSource
                      , h = a.assistantTypeaheadSource;
                    (f || h) && (d.$DebouncedMentionsTextEditor1 && b("clearImmediate")(d.$DebouncedMentionsTextEditor1),
                    d.$DebouncedMentionsTextEditor1 = b("setImmediate")(function() {
                        if (f) {
                            var a = e.getBlockForKey(c.getAnchorKey()).getText().slice(0, c.getAnchorOffset());
                            g.lastIndex = 0;
                            var b = g.test(a);
                            f.search(e, c, function(a, c) {
                                d.__onShowMentions(a, c, null, b)
                            })
                        }
                        h && h.search(e, c, d.__onShowMentions)
                    }))
                }
            }
            ;
            d.__debouncedSearch = b("debounce")(d.__maybeSearch, 50);
            return d
        }
        var d = c.prototype;
        d.componentDidUpdate = function(a) {
            this.props.editorState !== a.editorState && this.__debouncedSearch()
        }
        ;
        d.componentWillUnmount = function() {
            this.$DebouncedMentionsTextEditor1 && b("clearImmediate")(this.$DebouncedMentionsTextEditor1),
            a.prototype.componentWillUnmount.call(this)
        }
        ;
        return c
    }(b("AbstractMentionsTextEditor.react"));
    e.exports = a
}
), null);
__d("MessengerBootloadedLogMessage.react", ["cx", "BootloadOnRender.react", "JSResource", "LazyComponent.react", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            return h.jsx(b("BootloadOnRender.react"), {
                component: h.jsx(b("LazyComponent.react"), babelHelpers["extends"]({}, this.props)),
                loader: b("JSResource")("MessengerLogMessage.react").__setRef("MessengerBootloadedLogMessage.react"),
                placeholder: h.jsx("div", {
                    className: "_497p",
                    children: "..."
                })
            })
        }
        ;
        return c
    }(h.PureComponent);
    e.exports = a
}
), null);
__d("MessengerCollapsedLogMessageGroup.react", ["cx", "fbt", "Link.react", "React", "WorkChatRedesignedMessageListCheck.re"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.state = {
                collapsed: !0
            },
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.render = function() {
            var a = this
              , c = h._("Xem ho\u1ea1t \u0111\u1ed9ng m\u1edbi nh\u1ea5t")
              , d = h._("\u1ea8n b\u1edbt ho\u1ea1t \u0111\u1ed9ng");
            return i.jsxs("div", {
                className: "_497p" + (b("WorkChatRedesignedMessageListCheck.re").enabled ? " _7w5v" : ""),
                children: [i.jsx(b("Link.react"), {
                    className: "_4ea1",
                    onClick: function() {
                        return a.setState(function(a) {
                            return {
                                collapsed: !a.collapsed
                            }
                        })
                    },
                    children: this.state.collapsed ? c : d
                }), this.state.collapsed ? null : i.jsxs("div", {
                    children: [i.jsx("div", {
                        className: "_4ea2"
                    }), this.props.children, i.jsx("div", {
                        className: "_4ea2"
                    })]
                })]
            })
        }
        ;
        return c
    }(i.PureComponent);
    e.exports = a
}
), null);
__d("AdPageMessageTypeEnum", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        AD_ADMIN_TEXT: "ad_admin_text",
        AD_TEXT: "ad_text",
        AD_BUBBLE: "ad_bubble"
    });
    e.exports = a
}
), null);
__d("MNAdsLogMessageUtils", ["AdPageMessageTypeEnum", "MercuryConfig", "MessagingTag"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("MercuryConfig").LOG_INTERVAL_MS || 6e4;
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.isLoggedWithinInterval = function(a) {
            return this.$1[a] && this.$1[a] - Date.now() < g ? !0 : !1
        }
        ;
        c.setLoggingTime = function(a) {
            this.$1[a] = Date.now()
        }
        ;
        c.logAdsThreadListImpression = function(a) {
            switch (a.folder) {
            case b("MessagingTag").INBOX:
                this.logWithThreadMetaData(a, "messenger_ads_message_seen_inbox");
                break;
            case b("MessagingTag").PENDING:
                this.logWithThreadMetaData(a, "messenger_ads_message_seen_request");
                break;
            default:
                return
            }
        }
        ;
        c.logWithThreadMetaData = function(a, c) {
            if (a.last_message_type !== b("AdPageMessageTypeEnum").NON_AD)
                return
        }
        ;
        return a
    }();
    c = new a();
    e.exports = c
}
), null);
__d("MercuryShareAttachmentSnippet.react", ["MercuryShareStyleMap", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = b("MercuryShareStyleMap").getStyleFactory(this.props.attachment);
            if (a && a.factory && !!a.factory.getSnippetComponent) {
                var c = a.factory.getSnippetComponent();
                return g.jsx(c, babelHelpers["extends"]({}, this.props, {
                    attachment: a.attachment
                }))
            }
            return null
        }
        ;
        return c
    }(g.Component);
    e.exports = a
}
), null);
__d("MercuryAttachmentSnippet.react", ["cx", "fbt", "ix", "EmoticonsList", "Image.react", "MercuryAttachment", "MercuryAttachmentSnippetRenderer", "MercuryAttachmentSnippetType", "MercuryIDs", "MercuryShareAttachmentSnippet.react", "MessengerParticipants.re", "MessengerTextWithEmoticons.react", "React", "joinClasses"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    e.exports = a;
    var j = b("React");
    function a(a) {
        var c = a.thread;
        a = a.viewer;
        var d = c.snippet_sender
          , e = j.useState(function() {
            return d != null ? b("MessengerParticipants.re").getNow(d) : null
        })
          , f = e[0]
          , g = e[1]
          , l = c.snippet_attachments
          , m = k(d, a);
        j.useEffect(function() {
            if (d == null)
                return;
            var a = b("MessengerParticipants.re").get(d, function(a) {
                return g(a)
            });
            return function() {
                a && b("MessengerParticipants.re").removeCallback(a)
            }
        }, [c, a, f, d]);
        e = A();
        a = b("MercuryAttachmentSnippetRenderer").getAttachmentSnippetType(l);
        switch (a) {
        case b("MercuryAttachmentSnippetType").PHOTO:
            return n(e);
        case b("MercuryAttachmentSnippetType").GIF:
            return p(e);
        case b("MercuryAttachmentSnippetType").VIDEO:
            return q(e);
        case b("MercuryAttachmentSnippetType").AUDIO_CLIP:
            return r(e);
        case b("MercuryAttachmentSnippetType").LIKE_STICKER:
            return t(e);
        case b("MercuryAttachmentSnippetType").STICKER:
            return u(e);
        case b("MercuryAttachmentSnippetType").SHARE:
            return v(e);
        case b("MercuryAttachmentSnippetType").GIFT:
            return w(e);
        case b("MercuryAttachmentSnippetType").FILE:
            return o(e);
        case b("MercuryAttachmentSnippetType").ERROR:
            return z(e);
        case b("MercuryAttachmentSnippetType").THIRDPARTYSTICKER:
            return s(e);
        default:
            return x(e)
        }
        function n(a) {
            return y(b("MercuryAttachmentSnippetRenderer").renderAttachmentSnippetText(b("MercuryAttachmentSnippetType").PHOTO, m, a, l))
        }
        function o(a) {
            return y(b("MercuryAttachmentSnippetRenderer").renderAttachmentSnippetText(b("MercuryAttachmentSnippetType").FILE, m, a, l))
        }
        function p(a) {
            return y(b("MercuryAttachmentSnippetRenderer").renderAttachmentSnippetText(b("MercuryAttachmentSnippetType").GIF, m, a, l))
        }
        function q(a) {
            return y(b("MercuryAttachmentSnippetRenderer").renderAttachmentSnippetText(b("MercuryAttachmentSnippetType").VIDEO, m, a))
        }
        function r(a) {
            return y(b("MercuryAttachmentSnippetRenderer").renderAttachmentSnippetText(b("MercuryAttachmentSnippetType").AUDIO_CLIP, m, a))
        }
        function s(a) {
            return j.jsx("span", {
                children: b("MercuryAttachmentSnippetRenderer").renderAttachmentSnippetText(b("MercuryAttachmentSnippetType").THIRDPARTYSTICKER, m, a)
            })
        }
        function t(a) {
            var d = j.jsx(b("MessengerTextWithEmoticons.react"), {
                renderEmoticons: !0,
                text: b("EmoticonsList").symbols.like
            });
            if (m)
                return j.jsx("span", {
                    children: h._("B\u1ea1n: {conversation_snippet}", [h._param("conversation_snippet", d)])
                });
            else
                return c.is_canonical ? j.jsx("span", {
                    children: h._("{conversation_snippet}", [h._param("conversation_snippet", d)])
                }) : j.jsx("span", {
                    children: h._("{sender name}: {conversation_snippet}", [h._param("sender name", a), h._param("conversation_snippet", d)])
                })
        }
        function u(a) {
            return j.jsx("span", {
                children: b("MercuryAttachmentSnippetRenderer").renderAttachmentSnippetText(b("MercuryAttachmentSnippetType").STICKER, m, a)
            })
        }
        function v(a) {
            return l[0].share ? j.jsx(b("MercuryShareAttachmentSnippet.react"), {
                attachment: l[0].share,
                senderName: a,
                isViewerSender: m
            }) : y(b("MercuryAttachmentSnippetRenderer").renderAttachmentSnippetText(b("MercuryAttachmentSnippetType").SHARE, m, a))
        }
        function w(a) {
            return j.jsx("span", {
                children: b("MercuryAttachmentSnippetRenderer").renderAttachmentSnippetText(b("MercuryAttachmentSnippetType").GIFT, m, a)
            })
        }
        function x(a) {
            return j.jsx("span", {
                children: l.filter(function(a) {
                    return a.attach_type === "file" || a.attach_type === "photo" || a.attach_type === "video"
                }).map(function(a, b) {
                    return y(a.name, a.icon_type, b)
                })
            })
        }
        function y(a, c, d) {
            c = b("MercuryAttachment").getAttachIconClass(c || l[0].icon_type);
            c = b("joinClasses")(c, "uiIconText _3l6h");
            return j.jsxs("span", {
                children: [j.jsx("span", {
                    className: c,
                    children: j.jsx(b("Image.react"), {
                        src: i("86988")
                    })
                }), a]
            }, d)
        }
        function z(a) {
            a = b("MercuryAttachmentSnippetRenderer").renderAttachmentSnippetText(b("MercuryAttachmentSnippetType").ERROR, m, a);
            return y(a)
        }
        function A() {
            if (d == null || m)
                return null;
            var a = b("MessengerParticipants.re").getNow(d);
            if (!a)
                return null;
            var e = b("MercuryIDs").getUserIDFromParticipantID(d);
            e = c.custom_nickname && c.custom_nickname[e];
            e && (e = j.jsx(b("MessengerTextWithEmoticons.react"), {
                renderEmoticons: !0,
                renderEmoji: !0,
                text: e
            }));
            return e ? e : a.short_name
        }
    }
    function k(a, c) {
        return !!(a != null && b("MercuryIDs").getParticipantIDFromUserID(c) == a)
    }
}
), null);
__d("MercuryThreadSnippet.react", ["cx", "fbt", "MercuryAttachmentSnippet.react", "MercuryIDs", "MessengerTextWithEmoticons.react", "MNAdsLogMessageUtils", "React", "immutable", "prop-types"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.shouldComponentUpdate = function(a) {
            return this.props.shouldRenderYou !== a.shouldRenderYou || this.props.thread !== a.thread || this.props.viewer !== a.viewer || this.props.className !== a.className || !b("immutable").is(a.participants, this.props.participants)
        }
        ;
        d.render = function() {
            return i.jsxs("span", {
                className: this.props.className,
                children: [this.$1(), this.$2()]
            })
        }
        ;
        d.$1 = function() {
            return !this.props.thread.snippet || !l(this.props.thread) ? null : i.jsx("span", {
                className: "_j0r"
            })
        }
        ;
        d.$2 = function() {
            var a, c, d = this.props.thread, e = b("MercuryIDs").getParticipantIDFromUserID(this.props.viewer), f = d.snippet ? d.snippet.toString() : null, g = this.props.shouldRenderYou;
            if (d.snippetCount != null)
                return h._({
                    "*": "{number} k\u1ebft qu\u1ea3",
                    "_1": "1 k\u1ebft qu\u1ea3"
                }, [h._plural(d.snippetCount, "number")]);
            c = (c = d) != null ? (c = c.snippet_attachments) != null ? (c = c[0]) != null ? c.share : c : c : c;
            a = (a = c) != null ? (a = a.style_list) != null ? a[0] : a : a;
            c = (c = c) != null ? c.title : c;
            if ((a === "instant_games_leaderboard_update" || a === "instant_games_custom_update") && c)
                return c;
            a = o(d);
            if (a && a.length > 0 && a[0].attach_type !== "share" || !d.snippet_sender)
                return this.$3(f);
            if (m(d))
                return i.jsx(b("MercuryAttachmentSnippet.react"), {
                    thread: d,
                    viewer: this.props.viewer
                });
            c = this.$3(f);
            if (d.last_message_admin_text_type != null || d.last_message_unsendability_status === "deny_tombstone_message")
                return c;
            b("MNAdsLogMessageUtils").logAdsThreadListImpression(d);
            a = n(d);
            if (a)
                return h._("{name}: {conversation_snippet}", [h._param("name", a), h._param("conversation_snippet", c)]);
            if (d.snippet_sender === e)
                return !g ? c : h._("B\u1ea1n: {conversation_snippet}", [h._param("conversation_snippet", c)]);
            if (b("MercuryIDs").isCanonical(d.thread_id) && !this.props.shouldAlwaysRenderSender)
                return c;
            f = this.props.participants.get(d.snippet_sender);
            if (!f)
                return c;
            a = f.short_name || f.name;
            if (d) {
                e = d.custom_nickname ? d.custom_nickname : null;
                g = b("MercuryIDs").getUserIDFromParticipantID(f.id);
                e && g && e[g] && (a = i.jsx(b("MessengerTextWithEmoticons.react"), {
                    renderEmoticons: !0,
                    renderEmoji: !0,
                    text: e[g]
                }))
            }
            return !a ? c : h._("{name}: {conversation_snippet}", [h._param("name", a), h._param("conversation_snippet", c)])
        }
        ;
        d.$3 = function(a) {
            if (a && a.startsWith("?OTR"))
                return h._("[tin nh\u1eafn \u0111\u00e3 m\u00e3 h\u00f3a]");
            var c = this.props.thread;
            if (l(c))
                return i.jsx(b("MercuryAttachmentSnippet.react"), {
                    thread: c,
                    viewer: this.props.viewer
                });
            if (a)
                return i.jsx(b("MessengerTextWithEmoticons.react"), {
                    renderEmoticons: !0,
                    renderEmoji: !0,
                    text: a
                });
            return j(c) ? k(c) : null
        }
        ;
        return c
    }(i.Component);
    e.exports = a;
    a.propTypes = {
        participants: (c = b("prop-types")).instanceOf(b("immutable").Map).isRequired,
        shouldAlwaysRenderSender: c.bool,
        shouldRenderYou: c.bool,
        thread: c.object.isRequired,
        viewer: c.string.isRequired
    };
    function j(a) {
        var b;
        a = o(a);
        if (a.length !== 1)
            return !1;
        a = a[0];
        b = (b = a.share) == null ? void 0 : b.style_list;
        return a.attach_type === "share" && b != null && (b.includes("video_meetup_link") || b.includes("rooms_speakeasy_xma"))
    }
    function k(a) {
        a = o(a);
        if (a.length !== 1)
            return null;
        a = a[0].share;
        return (a == null ? void 0 : a.title) || (a == null ? void 0 : a.description) || null
    }
    function l(a) {
        a = o(a);
        return !!(a && a.length > 0 && !(a[0].attach_type === "share" && (!a[0].share || a[0].share.subattachments.length === 0)))
    }
    function m(a) {
        var b;
        a = o(a);
        return a && a.length === 1 && a[0].attach_type === "share" && ((b = a[0].share) == null ? void 0 : b.style_list) != null && (a[0].share.style_list.indexOf("message_location") >= 0 || a[0].share.style_list.indexOf("message_live_location") >= 0)
    }
    function n(a) {
        var b = o(a);
        return a && b && b[0] && b[0].share && b[0].share.target && b[0].share.target.genie_name ? b[0].share.target.genie_name : null
    }
    function o(a) {
        return (a = a == null ? void 0 : a.snippet_attachments) != null ? a : []
    }
}
), null);
__d("MercuryThreadTitleReact.re", ["bs_curry", "MercuryThreadTitleReact.bs", "ReasonReact.bs"], (function(a, b, c, d, e, f) {
    a = b("ReasonReact.bs").wrapReasonForJs(b("MercuryThreadTitleReact.bs").component, function(a) {
        return b("bs_curry").app(b("MercuryThreadTitleReact.bs").make, [a.className, a.maxTitle, a.thread, a.viewer, a.isNewThread, a.showUnreadCount, a.useShortName, a.useAndSeparator, a.children])
    });
    f.component = a;
    f["default"] = a
}
), null);
__d("makeMercuryThreadPayload", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = {
        admins: {},
        approval_mode: 0,
        approval_queue_ids: [],
        associated_object: null,
        can_reply: !0,
        cannot_reply_reason: null,
        can_viewer_report: !1,
        solid_color: null,
        header_color: null,
        footer_color: null,
        game_id: null,
        gradient_colors: [],
        group_thread_subtype: 0,
        theme_id: null,
        custom_like_icon: null,
        custom_nickname: null,
        customization_enabled: !0,
        description: null,
        ephemeral_ttl_mode: 0,
        folder: "inbox",
        has_email_participant: !1,
        has_montage: !1,
        image_src: null,
        square_image_src: null,
        is_archived: !1,
        is_business_page_active: !1,
        is_canonical_user: !1,
        is_canonical: !1,
        is_from_weak_entry_point: !1,
        is_page_follow_up: !1,
        is_page_unresponded_thread: !1,
        is_pinned: !1,
        is_pin_protected: !1,
        is_subscribed: !0,
        is_thread_queue_enabled: !0,
        joinable_link: null,
        joinable_mode: {
            link: "",
            mode: 0
        },
        last_message_id: null,
        last_message_timestamp: 0,
        last_message_type: null,
        last_read_timestamp: 0,
        linked_mentorship_programs: null,
        lightweight_event: null,
        lightweight_events: {},
        marketplace_thread_data: null,
        mentions_mute_mode: 0,
        message_count: 0,
        mute_until: null,
        name: "",
        object_association_type: null,
        other_user_fbid: null,
        page_unsubscribe_status: !1,
        page_thread_info: null,
        participant_add_mode: null,
        participants: [],
        participants_event_status: null,
        pinned_messages: [],
        reactions_mute_mode: 0,
        read_only: !1,
        recipients_loadable: !0,
        rtc_call_data: null,
        server_timestamp: 0,
        snippet_attachments: [],
        snippet_sender: null,
        snippet: null,
        thread_associated_job_applications: null,
        thread_associated_page_admin: null,
        thread_connectivity_data: null,
        thread_fbid: null,
        thread_id: "",
        thread_pin_timestamp: null,
        thread_type: 0,
        thread_unsendability_status: null,
        timestamp: 0,
        unread_count: 0,
        comm_status: null,
        comm_source_id: null,
        page_comm_item_id: null,
        subtitle: null,
        comm_item_owners: null,
        comm_icon_type: [],
        composer_input_disabled: !1,
        is_other_recipient_page: !1,
        is_canonical_neo_user: !1,
        group_approval_queue: null,
        admin_model_status: null,
        groups_sync_status: null,
        work_associated_group: null,
        graphql_token: null,
        conversion_detection_data: {
            is_eligible: !1,
            conversion_type: "",
            currency_code: null,
            currency_amount: 0,
            timestamp: 0,
            classifier: null,
            page_reply: null,
            icebreaker_key: null,
            icebreaker_message: null
        },
        suggested_reply_data: {
            suggestion_type: null,
            suggestion_content: null,
            triggered_timestamp: null
        }
    };
    function a(a) {
        a === void 0 && (a = {});
        return babelHelpers["extends"]({}, g, a)
    }
}
), null);
__d("MercuryThreadTitleSafe.react", ["MercuryThreadTitleReact.re", "React", "makeMercuryThreadPayload"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.thread;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["thread"]);
        a = babelHelpers["extends"]({}, a, {
            thread: b("makeMercuryThreadPayload")(c)
        });
        return g.jsx(b("MercuryThreadTitleReact.re").component, babelHelpers["extends"]({}, a))
    }
}
), null);
__d("MessengerBusinessCallToActionUtils", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {}
        var b = a.prototype;
        b.convertCTATypeToInt = function(a) {
            switch (a) {
            case "OPEN_NATIVE":
                return 1;
            case "OPEN_URL":
                return 2;
            case "POSTBACK":
                return 4;
            case "ACCOUNT_LINK":
                return 5;
            case "SHARE":
                return 7;
            case "PAYMENT":
                return 8;
            case "FACEBOOK_REPORT_A_PROBLEM":
                return 9;
            case "NAVIGATION":
                return 11;
            case "EXTENSIBLE_SHARE":
                return 12;
            case "OPEN_PAGE_ABOUT":
                return 14;
            case "OPEN_BRANDED_CAMERA":
                return 15;
            case "OPEN_THREAD":
                return 16;
            case "OPEN_MARKETPLACE_PROFILE_REPORT":
                return 17;
            case "OPEN_DIRECT_SEND_VIEW":
                return 18;
            case "BOOKING":
                return 19;
            case "BOOKING_ADD_TO_CALENDAR":
                return 20;
            case "ACCOUNT_UNLINK":
                return 21;
            case "SUBSCRIPTION_PRESELECT":
                return 10;
            case "OPEN_REACT_NATIVE_MINI_APP":
                return 13;
            case "OPEN_CANCEL_RIDE_MUTATION":
                return 3;
            case "MANAGE_MESSAGES":
                return 6;
            default:
                return -1
            }
        }
        ;
        return a
    }();
    b = new a();
    e.exports = b
}
), null);
__d("MessengerBusinessPersistentMenuUpdateSubscription", ["RelayFBEnvironment", "RelayModern", "MessengerBusinessPersistentMenuUpdateSubscription.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    f.subscribe = a;
    var g, h = g !== void 0 ? g : g = b("MessengerBusinessPersistentMenuUpdateSubscription.graphql");
    function a(a, c) {
        a = {
            input: {
                page_id: a
            }
        };
        return b("RelayModern").requestSubscription(b("RelayFBEnvironment"), {
            subscription: h,
            variables: a,
            updater: c
        })
    }
}
), null);
__d("MessengerBusinessPersistentMenuUpdateSubscriptionHandler.react", ["invariant", "MessengerBusinessCallToActionUtils", "MessengerBusinessPersistentMenuUpdateSubscription", "React", "RelayFBEnvironment", "RelayModern", "promiseDone", "MessengerBusinessPersistentMenuUpdateSubscriptionHandlerCustomUserSettingGKQuery.graphql"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = b("React");
    var i = h !== void 0 ? h : h = b("MessengerBusinessPersistentMenuUpdateSubscriptionHandlerCustomUserSettingGKQuery.graphql");
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            var a = this;
            b("promiseDone")(b("RelayModern").fetchQuery(b("RelayFBEnvironment"), i, {
                pageID: this.props.pageID
            }), function(c) {
                c.node.gk_check.passes_gk && (a.$1 = b("MessengerBusinessPersistentMenuUpdateSubscription").subscribe(a.props.pageID, function(c) {
                    c = c.getRootField("messenger_business_persistent_menu_update_subscribe");
                    if (c == null)
                        return;
                    c = c.getLinkedRecords("menu_items");
                    if (c == null)
                        return;
                    c = c.filter(Boolean).map(function(c) {
                        var d = c.getValue("action_link");
                        d === null || typeof d === "string" || g(0, 19527);
                        var e = c.getValue("action_type");
                        typeof e === "string" || g(0, 19528);
                        var f = c.getValue("id");
                        f === null || typeof f === "string" || g(0, 18995);
                        var h = c.getValue("is_disabled");
                        typeof h === "boolean" || g(0, 19525);
                        var i = c.getValue("is_mutable_by_server");
                        typeof i === "boolean" || g(0, 19532);
                        var j = c.getValue("logging_token");
                        j === null || typeof j === "string" || g(0, 19534);
                        var k = c.getValue("page_id");
                        typeof k === "string" || g(0, 19535);
                        var l = c.getValue("title");
                        l === null || typeof l === "string" || g(0, 1815);
                        return {
                            action_link: d,
                            action_type: b("MessengerBusinessCallToActionUtils").convertCTATypeToInt(e),
                            id: f,
                            is_disabled: h,
                            is_mutable_by_server: i,
                            logging_token: j,
                            page_id: k,
                            title: l,
                            webview_metadata: a.$2(c)
                        }
                    });
                    a.props.onUpdate(c)
                }))
            })
        }
        ;
        d.componentWillUnmount = function() {
            this.$1 && this.$1.dispose()
        }
        ;
        d.render = function() {
            return null
        }
        ;
        d.$2 = function(a) {
            if (!a)
                return {
                    fallback_url: null,
                    webview_height_ratio: null,
                    messenger_extensions: !1
                };
            var b = a.getValue("fallback_url");
            b === null || typeof b === "string" || g(0, 19538);
            var c = a.getValue("webview_height_ratio");
            c === null || typeof c === "number" || g(0, 19539);
            a = a.getValue("messenger_extensions");
            typeof a === "boolean" || g(0, 19543);
            return {
                fallback_url: b,
                webview_height_ratio: c,
                messenger_extensions: a
            }
        }
        ;
        return c
    }(a.Component);
    e.exports = c
}
), null);
__d("MessengerContextualDialog.react", ["cx", "AccessibleLayer", "ContextualLayerAutoFlipHorizontal", "ContextualLayerUpdateOnScroll", "LayerHideOnEscape", "ReactAbstractContextualDialog", "ReactLayer"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = 12;
    c = b("ReactLayer").createClass(b("ReactAbstractContextualDialog").createSpec({
        addedBehaviors: [b("ContextualLayerAutoFlipHorizontal"), b("ContextualLayerUpdateOnScroll"), b("LayerHideOnEscape"), b("AccessibleLayer")],
        displayName: "MessengerContextualDialog",
        shouldSetARIAProperties: !1,
        theme: {
            wrapperClassName: "_1r_9",
            arrowDimensions: {
                offset: a,
                length: 16
            }
        }
    }));
    d = c;
    e.exports = d
}
), null);
__d("MessengerBotMenuButton.react", ["AutoFocusableLink.react", "BootloadOnRender.react", "ChatFlyoutPlaceholder.react", "JSResource", "LazyComponent.react", "MessengerBotMenuDataFetcher", "MessengerBotsWebTypedLogger", "MessengerBusinessPersistentMenuUpdateSubscriptionHandler.react", "MessengerContextualDialog.react", "MessengerEnvironment", "React", "XUIContextualDialog.react", "prop-types"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = 302
      , i = 280;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$1 = !1,
            d.state = {
                flyoutOpen: !!d.props.clicked,
                isLoading: !1,
                menuItems: null
            },
            d.$3 = function() {
                d.setState({
                    flyoutOpen: !1
                })
            }
            ,
            d.$8 = function() {
                d.state.flyoutOpen && d.$3()
            }
            ,
            d.$5 = function() {
                d.$1 = d.state.flyoutOpen
            }
            ,
            d.$4 = function(a) {
                a.stopPropagation();
                if (d.state.flyoutOpen || d.$1)
                    return;
                d.state.menuItems === null && (d.setState({
                    isLoading: !0
                }),
                d.$2());
                d.setState({
                    flyoutOpen: !d.state.flyoutOpen
                })
            }
            ,
            d.$7 = function(a) {
                b("MessengerBotMenuDataFetcher").setMenuItemsCache(d.props.pageID, a),
                d.setState({
                    menuItems: a,
                    isLoading: !1
                })
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.UNSAFE_componentWillMount = function() {
            this.state.flyoutOpen && this.state.menuItems === null && (this.setState({
                isLoading: !0
            }),
            this.$2())
        }
        ;
        d.componentDidMount = function() {
            new (b("MessengerBotsWebTypedLogger"))().setEvent("bot_composer_menu_icon_displayed").setPageID(this.props.pageID).log()
        }
        ;
        d.componentWillUnmount = function() {
            this.state.flyoutOpen && this.$3()
        }
        ;
        d.render = function() {
            return g.jsxs("span", {
                children: [g.jsx(b("AutoFocusableLink.react"), {
                    autoFocus: this.props.autoFocus,
                    className: this.props.className,
                    href: "#",
                    onClick: this.$4,
                    onMouseDown: this.$5,
                    role: "button",
                    ref: "link"
                }), this.$6(), g.jsx(b("MessengerBusinessPersistentMenuUpdateSubscriptionHandler.react"), {
                    pageID: this.props.pageID,
                    onUpdate: this.$7
                })]
            })
        }
        ;
        d.$6 = function() {
            var a = this;
            if (!this.state.flyoutOpen)
                return null;
            var c = b("MessengerEnvironment").messengerui
              , d = c ? h : i;
            c = c ? b("MessengerContextualDialog.react") : b("XUIContextualDialog.react");
            return g.createElement(c, babelHelpers["extends"]({
                alignment: this.props.flyoutAlignment,
                width: d,
                position: "above",
                contextRef: function() {
                    return a.refs.link
                },
                onBeforeHide: this.$8,
                onBlur: this.$3,
                shown: this.state.flyoutOpen
            }, this.props, {
                key: "contextualDialog"
            }), g.jsx(b("BootloadOnRender.react"), {
                component: g.jsx(b("LazyComponent.react"), {
                    onEscKeyDown: this.$3,
                    shown: this.state.flyoutOpen,
                    isLoading: this.state.isLoading,
                    menuItems: this.state.menuItems,
                    pageID: this.props.pageID,
                    threadID: this.props.threadID,
                    onClick: this.$3
                }),
                loader: b("JSResource")("MessengerBotMenuDialog.react").__setRef("MessengerBotMenuButton.react"),
                placeholder: g.jsx(b("ChatFlyoutPlaceholder.react"), {})
            }))
        }
        ;
        d.$2 = function() {
            var a = this;
            b("MessengerBotMenuDataFetcher").getMenuItems(this.props.pageID, function(b) {
                a.setState({
                    menuItems: b,
                    isLoading: !1
                })
            }, function() {
                a.setState({
                    menuItems: [],
                    isLoading: !1
                })
            })
        }
        ;
        return c
    }(g.Component);
    e.exports = a;
    a.propTypes = {
        autoFocus: (c = b("prop-types")).bool,
        className: c.string,
        clicked: c.bool,
        flyoutAlignment: c.string.isRequired,
        threadID: c.string.isRequired,
        pageID: c.string.isRequired
    }
}
), null);
__d("MessengerUserInputAppDispatcher", ["ExplicitRegistrationDispatcher", "objectValues"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(b) {
            b = a.call(this, b) || this;
            babelHelpers.assertThisInitialized(b).dispatch = b.dispatch.bind(babelHelpers.assertThisInitialized(b));
            return b
        }
        var d = c.prototype;
        d.explicitlyRegisterStoresInMap = function(a) {
            this.explicitlyRegisterStores(b("objectValues")(a))
        }
        ;
        return c
    }(b("ExplicitRegistrationDispatcher"));
    c = new a({
        strict: !0
    });
    e.exports = c
}
), null);
__d("MessengerComposerInputStore", ["FluxStore", "MessengerUserInputAppDispatcher"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = 0;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c;
            c = a.call(this, b("MessengerUserInputAppDispatcher")) || this;
            c.$MessengerComposerInputStore1 = {
                isUserInputRequested: !1,
                requestNumResults: g,
                requestType: null
            };
            return c
        }
        var d = c.prototype;
        d.getState = function() {
            return this.$MessengerComposerInputStore1
        }
        ;
        d.__onDispatch = function(a) {
            var b = a.type;
            a = a.data;
            switch (b) {
            case "UPDATE_USER_INPUT_REQUESTED":
                this.$MessengerComposerInputStore1 = {
                    isUserInputRequested: a.isUserInputRequested,
                    requestNumResults: a.requestNumResults,
                    requestType: a.requestType
                };
                this.__emitChange();
                break
            }
        }
        ;
        return c
    }(b("FluxStore"));
    a.__moduleID = e.id;
    c = new a();
    e.exports = c
}
), null);
__d("MessengerSingleSectionContactList.react", ["cx", "MessengerContactAdapters", "MessengerContactList.react", "MessengerTypeaheadUtils", "React", "TypeaheadViewPropTypes", "joinClasses", "wrapNullableForReact"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props
              , c = a.entries;
            a = a.viewProps;
            var d = (c.length ? "" : "_599s") + " _29hl _8i1 _11_d _4p-s";
            return h.jsx(b("MessengerContactList.react"), {
                controlleeID: this.props.controlleeID,
                className: b("joinClasses")(this.props.className, d, a.className),
                contactAdapter: b("MessengerContactAdapters").fromSearchableEntry,
                hasHoverState: !0,
                highlightedEntry: b("wrapNullableForReact")(this.props.highlightedEntry),
                isLoading: !1,
                listSections: b("MessengerTypeaheadUtils").buildSingleSection(c),
                onRenderHighlight: this.props.onRenderHighlight,
                onHighlight: this.props.onHighlight,
                onScrollIntoView: this.props.onScrollIntoView,
                onSelect: this.props.onSelect,
                viewer: a.viewer
            })
        }
        ;
        return c
    }(h.PureComponent);
    e.exports = a;
    a.propTypes = b("TypeaheadViewPropTypes");
    a.defaultProps = {
        role: "listbox"
    }
}
), null);
__d("WorkGalahadChatPrefillMessageEventEmitter", ["EventEmitter"], (function(a, b, c, d, e, f) {
    "use strict";
    a = new (b("EventEmitter"))();
    e.exports = a
}
), null);
__d("FourLetterMentionsStrategy", ["DocumentMentionsRegex"], (function(a, b, c, d, e, f) {
    "use strict";
    f.findMentionableString = a;
    c = 3;
    d = "\\b[a-z][^\\s" + b("DocumentMentionsRegex").PUNCTUATION + "]";
    var g = new RegExp("(^|[^#])((?:" + d + "{" + c + ",})$)");
    e = "FourLetterMentionsStrategy";
    f.name = e;
    function a(a) {
        a = g.exec(a);
        return a !== null ? {
            matchingString: a[2],
            leadOffset: a[2].length
        } : null
    }
}
), null);
__d("XWorkChatMentionBotTypeaheadController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/work/chat/bot_typeahead/", {
        value: {
            type: "String",
            defaultValue: ""
        },
        thread_id: {
            type: "FBID",
            required: !0
        }
    })
}
), null);
__d("createMentionsSearchSourceFromParticipants", ["fbt", "ix", "AtSignAllowEmptyMentionsStrategy", "CapitalizedNameMentionsStrategy", "CompositeSearchSource", "DocumentCompositeMentionsSource", "DocumentMentionsSource", "FilteredSearchSource", "FourLetterMentionsStrategy", "LogHistory", "MercuryIDs", "SearchableEntry", "StaticSearchSource", "WebAsyncSearchSource", "XWorkChatMentionBotTypeaheadController", "filterCapitalizedNames", "gkx", "nullthrows"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i = b("LogHistory").getInstance("messenger_mentions")
      , j = h("91674").uri;
    function a(a, c, d, e) {
        if (!a || !c)
            return null;
        var f = []
          , g = []
          , h = c.length > 2;
        (h || b("gkx")("1101638")) && (f = c.reduce(function(c, e) {
            if (!e || e.fbid === a)
                return c;
            var f = d && d.custom_nickname && d.custom_nickname[e.fbid] ? d.custom_nickname[e.fbid] : "";
            c.push(new (b("SearchableEntry"))({
                uniqueID: e.fbid,
                type: "user",
                title: "@" + e.name,
                subtitle: f,
                photo: e.image_src,
                keywordString: f,
                auxiliaryData: {
                    workForeignEntityInfo: e.work_foreign_entity_info
                }
            }));
            return c
        }, []),
        g = [].concat(f),
        h && e && d && d.thread_fbid && (f.push(l(d.thread_fbid)),
        f.push(m(d.thread_fbid))));
        h = new (b("StaticSearchSource"))(f);
        e = new (b("StaticSearchSource"))(g);
        b("gkx")("846032") && (e = new (b("FilteredSearchSource"))(k("@"),e));
        f = h;
        b("gkx")("1497099") && d && (f = new (b("CompositeSearchSource"))([h, new (b("WebAsyncSearchSource"))({
            queryRequests: [{
                uri: b("XWorkChatMentionBotTypeaheadController").getURIBuilder().setFBID("thread_id", b("MercuryIDs").getThreadFBIDFromThreadID(d.thread_id)).getURI()
            }]
        })]));
        g = [new (b("DocumentMentionsSource"))(b("AtSignAllowEmptyMentionsStrategy"),f), new (b("DocumentMentionsSource"))(b("CapitalizedNameMentionsStrategy"),e), new (b("DocumentMentionsSource"))(b("FourLetterMentionsStrategy"),e)];
        i.debug("constructed_search_source", JSON.stringify({
            participants: c.map(function(a) {
                return a && a.fbid
            })
        }));
        return new (b("DocumentCompositeMentionsSource"))(g)
    }
    function k(a) {
        return function(c, d) {
            return b("filterCapitalizedNames")(c, d, a)
        }
    }
    function l(a) {
        var c = g._("m\u1ecdi ng\u01b0\u1eddi").toString()
          , d = g._("Nh\u1eafc \u0111\u1ebfn m\u1ecdi ng\u01b0\u1eddi trong cu\u1ed9c tr\u00f2 chuy\u1ec7n n\u00e0y").toString();
        return new (b("SearchableEntry"))({
            photo: j,
            title: "@" + c,
            uniqueID: b("nullthrows")(a),
            subtitle: d
        })
    }
    function m(a) {
        var c = g._("t\u1ea1i \u0111\u00e2y").toString()
          , d = g._("Nh\u1eafc \u0111\u1ebfn t\u1ea5t c\u1ea3 nh\u1eefng ng\u01b0\u1eddi \u0111ang ho\u1ea1t \u0111\u1ed9ng trong \u0111o\u1ea1n chat n\u00e0y").toString();
        return new (b("SearchableEntry"))({
            photo: j,
            title: "@" + c,
            uniqueID: b("nullthrows")(a) + "-active",
            subtitle: d
        })
    }
}
), null);
__d("createMessengerMentionTypeaheadDraftEntity", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, b) {
        return a.createEntity("ASSISTANT_TYPEAHEAD", "SEGMENTED", {
            mid: b.getUniqueID()
        })
    }
}
), null);
__d("MessengerComposerInput.react", ["cx", "fbt", "AutocompleteSearchSource", "AutocompleteStrategy", "Bootloader", "CompositeDraftDecorator", "ContentState", "CurrentUser", "DebouncedMentionsTextEditor.react", "DocumentCompositeMentionsSource", "DocumentMentionsSource", "DOMDimensions", "DraftModifier", "EditorState", "EmojiFormat.bs", "Event", "LogHistory", "MentionsLayer.react", "MercuryIDs", "MercuryThreadIDMap", "MercuryThreadSnippet.react", "MercuryThreadTitleSafe.react", "MercuryTimestamp", "MessengerActions", "MessengerBotMenuButton.react", "MessengerComposerInputStore", "MessengerConstants", "MessengerDomIDs.bs", "MessengerEditorStateManager", "MessengerEmojiSpan.react", "MessengerEmoticonSpan.react", "MessengerMentionsEntityDecorator.react", "MessengerMentionSource", "MessengerSingleSectionContactList.react", "MessengerTabIndices", "MessengerUploadFilesUtil.bs", "MessengerURLUploader", "MessengerUserInputAppDispatcher", "MessengerUserInputUtils", "React", "ReactDOM", "Run", "TypingDetectorController", "WorkGalahadChatPrefillMessageEventEmitter", "WorkGalahadSettings", "clearImmediate", "createMentionsSearchSourceFromParticipants", "createMessengerMentionDraftEntity", "createMessengerMentionTypeaheadDraftEntity", "debounce", "getEntityMatcher", "getProfileRangesForContentState", "getThreadTypeNameFromThreadType", "getVisibleValueForContentStateWithMessengerEmoji", "gkx", "handleBeforeInputForMessengerEmoji", "handleBeforeInputForMessengerEmoticon", "handleSoftNewlineForMessengerEmoticon", "immutable", "insertEmoticonIntoEditorState", "insertMessengerEmojiIntoContentState", "isSoftNewlineEvent", "joinClasses", "nullthrows", "prop-types", "qex", "replaceMentionedTextInEditorState", "requireCond", "setImmediate", "shouldNotRenderSegoe", "throttle", "withMessengerSource", "cr:1008504", "cr:1272653", "cr:1217281", "cr:1217282", "cr:1217283"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React")
      , j = 1
      , k = /^image\//
      , l = "handled"
      , m = 8
      , n = "not-handled"
      , o = b("LogHistory").getInstance("MessengerComposerInput")
      , p = {};
    p[b("MessengerConstants").NEW_THREAD_KEY] = {
        version: 0,
        editorState: b("EditorState").createEmpty()
    };
    function q(a, c) {
        var d = c.editorState
          , e = c.version;
        if (!a || a && e < p[a].version)
            return;
        p[a] = c;
        a !== b("MessengerConstants").NEW_THREAD_KEY && b("MessengerEditorStateManager").set(a, d)
    }
    function r(a) {
        p[a] || (p[a] = {
            version: 0,
            editorState: b("EditorState").createEmpty()
        });
        return p[a]
    }
    function s(a, b) {
        if (!a)
            return null;
        var c = r(a);
        c.editorState = b;
        p[a] = c;
        return c
    }
    function t(a, b) {
        if (a) {
            var c = r(a);
            c.version += 1;
            c.editorState = b;
            q(a, c)
        }
    }
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(c) {
            var d;
            d = a.call(this, c) || this;
            d.$11 = !1;
            d.$22 = function(a) {
                if (d.$11 && a !== d.state.editorState) {
                    d.setState({
                        editorState: a
                    });
                    a = s(d.props.threadID, a);
                    a && d.$6(d.props.threadID, a);
                    d.props.onResize && d.props.onResize()
                }
            }
            ;
            d.$23 = function(a, c) {
                if (b("isSoftNewlineEvent")(a)) {
                    a = b("handleSoftNewlineForMessengerEmoticon");
                    a = a(c);
                    d.setState({
                        editorState: a
                    });
                    s(d.props.threadID, a);
                    return l
                }
                d.setState({}, d.triggerSend);
                return l
            }
            ;
            d.getValue = function() {
                return b("getVisibleValueForContentStateWithMessengerEmoji")(d.state.editorState.getCurrentContent())
            }
            ;
            d.focus = function() {
                d.refs.input && d.refs.input.focus()
            }
            ;
            d.$33 = function(a, b) {
                d.props.onBeforeInput && d.props.onBeforeInput(a, b);
                var c = a == ". "
                  , e = d.$38(a, b);
                a = d.$39(a, b);
                return c || e || a ? l : n
            }
            ;
            d.$14 = function(a) {
                a = d.props.handleOnlyImageUploads ? a.filter(function(a) {
                    return a && k.test(a.type)
                }) : a;
                var c = d.$26();
                if (a.length) {
                    b("MessengerActions").prepareFilesForSend(c, a, "Copy");
                    return l
                }
                return n
            }
            ;
            d.$34 = function(a, c, e) {
                b("cr:1217283") != null && b("cr:1217283")(d.props.threadID, a);
                return !1
            }
            ;
            d.$19 = function() {
                var a = d.props.threadID;
                if (!a)
                    return;
                q(a, r(a))
            }
            ;
            d.$20 = function() {
                d.setState(d.$15(!0))
            }
            ;
            d.triggerSend = function() {
                d.$24() && d.$27();
                if (d.getValue().trim().length > 0 || d.$40())
                    if (d.props.thread) {
                        var a = d.getMentions(d.props.thread.thread_fbid);
                        d.$30(a)
                    } else
                        d.$30();
                d.$28()
            }
            ;
            d.$35 = function() {
                var a = (d.state.addedMentionsCount || 0) + 1;
                d.setState({
                    addedMentionsCount: a
                })
            }
            ;
            d.$36 = function(a, c) {
                a = (d.state.mentionsTriggeredCount || 0) + 1;
                a = {
                    mentionsTriggeredCount: a
                };
                d.state.mentionsTriggerSource || (a.mentionsTriggerSource = c === j ? b("MessengerMentionSource").ATSIGN : b("MessengerMentionSource").TYPEAHEAD);
                d.setState(a)
            }
            ;
            d.$14 = d.$14.bind(babelHelpers.assertThisInitialized(d));
            d.$12 = c;
            d.state = d.$15();
            d.$7 = b("debounce")(function(a) {
                d.$12 || (d.$12 = a),
                u(d.props, d.$12) && d.$16(),
                d.$12 = a
            }, 300);
            d.$8 = b("throttle")(function() {
                if (d.$11) {
                    var a = b("DOMDimensions").getElementDimensions(b("ReactDOM").findDOMNode(babelHelpers.assertThisInitialized(d))).height;
                    d.$1 !== a && (d.props.onResize && d.props.onResize());
                    d.$1 = a
                }
            }, 100);
            return d
        }
        var d = c.prototype;
        d.$15 = function(a) {
            var c;
            this.props.threadID === b("MessengerConstants").NEW_THREAD_KEY ? c = r(b("MessengerConstants").NEW_THREAD_KEY).editorState : c = b("MessengerEditorStateManager").get(this.props.threadID);
            c = this.$17(c, a);
            a = b("createMessengerMentionDraftEntity");
            return {
                editorState: c,
                mentionCreationForContentStateFn: a
            }
        }
        ;
        d.componentDidMount = function() {
            var a = this;
            this.$11 = !0;
            var c = b("gkx")("964442");
            c && b("MessengerUserInputAppDispatcher").explicitlyRegisterStore(b("MessengerComposerInputStore"));
            this.$1 = b("DOMDimensions").getElementDimensions(b("ReactDOM").findDOMNode(this)).height;
            this.$18();
            b("cr:1217282") == null && (this.$2 = new (b("MessengerURLUploader"))(this.getValue,b("ReactDOM").findDOMNode(this.refs.input),this.props.threadID));
            this.$4 = b("Run").onUnload(this.$19);
            this.$3 = b("Event").listen(window, "blur", this.$19);
            this.$5 = b("Event").listen(window, "focus", this.$20);
            this.$6 = b("debounce")(function(a, b) {
                q(a, b)
            }, 1e3);
            b("CurrentUser").isWorkUser() && (this.$13 = b("WorkGalahadChatPrefillMessageEventEmitter").addListener("prefillMessage", function(b) {
                a.insertPrefill(b)
            }))
        }
        ;
        d.componentDidUpdate = function(a, c) {
            this.$10 = b("setImmediate")(this.$8);
            if (c.editorState !== this.state.editorState) {
                this.props.onChange && this.props.onChange(this.getValue());
                c = b("gkx")("964442");
                c && this.$21(this.getValue())
            }
            this.props.threadID !== a.threadID ? this.$18() : this.$7(a)
        }
        ;
        d.componentWillUnmount = function() {
            var a = this.props.threadID;
            a && q(a, r(a));
            this.$11 = !1;
            this.$9 && this.$9.destroy();
            this.$10 && b("clearImmediate")(this.$10);
            this.$3 && this.$3.remove();
            this.$4 && this.$4.remove();
            this.$5 && this.$5.remove();
            this.$13 && this.$13.remove()
        }
        ;
        d.insertEmoticon = function(a) {
            a = b("insertEmoticonIntoEditorState")(a, this.state.editorState);
            a !== this.state.editorState && this.$22(a)
        }
        ;
        d.insertPrefill = function(a) {
            if (this.state.editorState.getCurrentContent().hasText())
                return;
            a = b("EditorState").createWithContent(b("ContentState").createFromText(a));
            a !== this.state.editorState && this.$22(a)
        }
        ;
        d.insertLink = function(a) {
            var c = this.state.editorState
              , d = c.getSelection();
            d = b("DraftModifier").replaceText(c.getCurrentContent(), d, a, c.getCurrentInlineStyle());
            c = b("EditorState").push(c, d, "insert-characters");
            c !== this.state.editorState && (this.$22(c),
            b("cr:1217283") != null && b("cr:1217283")(this.props.threadID, a))
        }
        ;
        d.insertEmoji = function(a) {
            var c = this.state.editorState;
            a = b("insertMessengerEmojiIntoContentState")(b("EmojiFormat.bs").codeArrayToCodeString(a), c.getCurrentContent(), c.getSelection(), c.getCurrentInlineStyle());
            c = b("EditorState").push(c, a, "insert-characters");
            c !== this.state.editorState && this.$22(b("EditorState").forceSelection(c, a.getSelectionAfter()))
        }
        ;
        d.$24 = function() {
            var a = this.props.fileUploader;
            return Boolean(a && a.get("uploadedFiles").size > 0)
        }
        ;
        d.$18 = function() {
            if (!this.$11)
                return;
            this.setState(this.$15(!1));
            this.$25();
            this.$2 && (this.$2.setThreadID(this.props.threadID),
            this.$2.clearShareData());
            this.$16()
        }
        ;
        d.$16 = function() {
            if (this.props.mentionsEnabled) {
                var a = this.props
                  , c = a.participants
                  , d = a.viewer;
                a = a.thread;
                this.setState({
                    isUserInputAutocomplete: !1,
                    mentionCreationForContentStateFn: b("createMessengerMentionDraftEntity"),
                    mentionsSource: b("createMentionsSearchSourceFromParticipants")(d, c && c.toArray(), a, b("gkx")("678578"))
                })
            }
        }
        ;
        d.$25 = function() {
            this.$9 && this.$9.destroy();
            this.$9 = null;
            var a = this.props.viewer;
            if (!a)
                return;
            var c = b("ReactDOM").findDOMNode(this.refs.input);
            this.props.threadID !== b("MessengerConstants").NEW_THREAD_KEY && c && (this.$9 = new (b("TypingDetectorController"))(this.props.thread,b("MercuryIDs").getUserIDFromThreadID(this.props.threadID),c,this.props.source,null,b("MercuryThreadIDMap").getForFBID(a).getServerIDFromClientIDNow(this.props.threadID),this.getValue))
        }
        ;
        d.$26 = function() {
            var a = this.props
              , c = a.threadID;
            a = a.thread;
            if (!b("MercuryIDs").isValidThreadID(c)) {
                if (a)
                    return a.thread_id;
                o.debug("Invalid threadID ", c)
            }
            return c
        }
        ;
        d.$21 = function(a) {
            if (!this.$11)
                return;
            a = b("MessengerComposerInputStore").getState();
            var c = a.requestNumResults
              , d = a.requestType;
            if (a.isUserInputRequested && c && d) {
                a = new (b("AutocompleteSearchSource"))(this.getValue(),c,d);
                c = new (b("DocumentMentionsSource"))(b("AutocompleteStrategy"),a);
                d = new (b("DocumentCompositeMentionsSource"))([c]);
                this.setState({
                    isUserInputAutocomplete: !0,
                    mentionCreationForContentStateFn: b("MessengerUserInputUtils"),
                    mentionsSource: d
                })
            } else if (this.state.isUserInputAutocomplete) {
                a = this.props;
                c = a.participants;
                d = a.viewer;
                a = a.thread;
                this.setState({
                    isUserInputAutocomplete: !1,
                    mentionCreationForContentStateFn: b("createMessengerMentionDraftEntity"),
                    mentionsSource: b("createMentionsSearchSourceFromParticipants")(d, c && c.toArray(), a, b("gkx")("678578"))
                })
            }
        }
        ;
        d.$27 = function() {
            var a = this.props.fileUploader
              , c = this.$26();
            a && (o.debug("Before send files to thread ", c),
            b("MessengerUploadFilesUtil.bs").sendAttchments(a, this.props.onFileUpload),
            o.debug("Before clean files for thread ", c),
            b("MessengerActions").cleanFiles(c))
        }
        ;
        d.$28 = function() {
            var a = this.props.onMessageSend;
            a != null && b("cr:1217281") != null && (this.$29() && b("nullthrows")(this.props.workChatContentApps).forEach(function(c, d) {
                var e = (d = c.payload) == null ? void 0 : d.shareData;
                if (e == null)
                    return;
                b("setImmediate")(function() {
                    return a("", {
                        shareable_attachment: e
                    })
                })
            }),
            b("cr:1217281").removeAllWorkContentApps(this.props.threadID))
        }
        ;
        d.$29 = function() {
            var a = this.props.workChatContentApps;
            return a != null && a.size > 0
        }
        ;
        d.$30 = function(a) {
            var c = this;
            if (this.props.onMessageSend && this.props.onMessageSend(this.getValue(), {
                shareable_attachment: this.getShareData(),
                profile_ranges: a
            }, function(d) {
                b("MessengerActions").removeSharePreview(c.props.threadID);
                if (d && c.props.mentionsEnabled && (a && a.length || c.state.addedMentionsCount || c.state.mentionsTriggeredCount || c.state.mentionsTriggerSource)) {
                    var e = c.state
                      , f = e.addedMentionsCount
                      , g = e.mentionsTriggeredCount
                      , h = e.mentionsTriggerSource;
                    e = c.props;
                    var i = e.thread
                      , j = e.participants
                      , k = d;
                    b("Bootloader").loadModules(["MessengerMentionsTypedLogger", "MessengerMentionsLoggerEvents"], function(c, d) {
                        new c().setEvent(d.MENTION).setGroupSize(j && j.size).setNumDelivered(a && a.length || 0).setNumSelects(f).setNumTriggers(g).setThreadid(i && i.thread_id).setThreadType(b("getThreadTypeNameFromThreadType")(i && i.thread_type)).setOfflineThreadid(k.offline_threading_id).updateExtraData({
                            source: h
                        }).log()
                    }, "MessengerComposerInput.react")
                }
            })) {
                var d = this.$17(b("EditorState").createEmpty());
                this.$2 && this.$2.clearShareData();
                this.setState({
                    editorState: d,
                    addedMentionsCount: 0,
                    mentionsTriggeredCount: 0,
                    mentionsTriggerSource: null
                });
                t(this.props.threadID, d);
                this.$9 && this.$9.resetState()
            }
        }
        ;
        d.getMentions = function(a) {
            return b("getProfileRangesForContentState")(this.state.editorState.getCurrentContent(), a)
        }
        ;
        d.getInput = function() {
            return this.refs.input
        }
        ;
        d.render = function() {
            var a = this
              , c = this.props
              , d = c.participants
              , e = c.thread;
            c = c.viewer;
            var f = null;
            d && e && c ? f = h._("Cu\u1ed9c tr\u00f2 chuy\u1ec7n v\u1edbi {participantListAsShownInThreadList}. \u0110\u00e3 c\u1eadp nh\u1eadt {lastUpdatedTime} theo {recentUpdateStringAsShownInThreadList}", [h._param("participantListAsShownInThreadList", this.$31(e, c)), h._param("lastUpdatedTime", b("MercuryTimestamp").getAbsoluteTimestamp(e.timestamp)), h._param("recentUpdateStringAsShownInThreadList", this.$32(d, e, c))]) : f = h._("So\u1ea1n tin nh\u1eafn m\u1edbi");
            d = null;
            this.props.threadID && this.props.pageID && (d = i.jsx("div", {
                ref: "botsMenuContainer",
                className: "_3km1",
                children: i.jsx(b("MessengerBotMenuButton.react"), {
                    flyoutAlignment: "left",
                    threadID: this.props.threadID,
                    pageID: this.props.pageID,
                    className: "_3km2"
                })
            }));
            e = "";
            this.props.disableInput ? e = h._("Tr\u00ecnh bi\u00ean so\u1ea1n b\u1ecb t\u1eaft cho cu\u1ed9c tr\u00f2 chuy\u1ec7n n\u00e0y.").toString() : !((c = this.props.thread) == null ? void 0 : c.is_canonical) || ((c = this.props.thread) == null ? void 0 : c.other_user_fbid) !== b("CurrentUser").getID() && b("gkx")("1101638") ? e = h._("Nh\u1eadp tin nh\u1eafn, \u0040name...").toString() : e = h._("Nh\u1eadp tin nh\u1eafn...").toString();
            c = b("gkx")("678612");
            var g = b("cr:1008504") !== null && b("CurrentUser").isWorkUser() ? b("cr:1008504") : b("DebouncedMentionsTextEditor.react");
            return i.jsxs("div", {
                className: b("joinClasses")("_kmc" + (!b("CurrentUser").isWorkUser() || b("gkx")("1072568") ? " _7kpg" : "") + (b("WorkGalahadSettings").isGalahadEnabled ? " _7cyx" : "") + (this.props.smallerEqual640 ? " _2swd" : "") + (b("shouldNotRenderSegoe")(this.state.editorState.getCurrentContent().getPlainText()) ? " _2por" : "") + " navigationFocus", this.props.className),
                onClick: this.focus,
                role: "presentation",
                children: [this.props.showMenu ? d : null, i.jsxs("div", {
                    className: b("joinClasses")((b("CurrentUser").isWorkUser() && !b("gkx")("1072568") ? "_3-8x" : "") + (b("WorkGalahadSettings").isGalahadEnabled ? " _7q9o" : "") + (this.props.showMenu ? " _3km3" : "") + (c ? "" : " _3oh-"), this.props.inputContainerClassName),
                    children: [i.jsx(g, {
                        autoHighlight: !0,
                        ariaControls: b("MessengerDomIDs.bs").ids.CONVERSATION,
                        ariaDescribedBy: b("MessengerDomIDs.bs").ids.COMPOSER_INPUT_DESCRIPTION,
                        ariaLabel: e,
                        editorState: this.state.editorState,
                        handleBeforeInput: this.$33,
                        handleContentReturn: this.$23,
                        handlePastedFiles: this.$14,
                        handlePastedText: this.$34,
                        handleReturn: this.$23,
                        maxResults: m,
                        readOnly: this.props.disableInput,
                        mentionCreationForContentStateFn: this.state.mentionCreationForContentStateFn,
                        mentionTypeaheadCreationForContentStateFn: b("createMessengerMentionTypeaheadDraftEntity"),
                        mentionResultsComponent: b("MentionsLayer.react"),
                        mentionResultsProps: {
                            typeaheadView: b("MessengerSingleSectionContactList.react"),
                            typeaheadViewProps: {
                                className: "_13iv",
                                viewer: this.props.viewer
                            },
                            position: "above",
                            autoflip: !0
                        },
                        mentionsSource: this.state.mentionsSource,
                        assistantTypeaheadSource: this.state.assistantTypeaheadSource,
                        onChange: this.$22,
                        placeholder: e,
                        ref: "input",
                        spellCheck: !0,
                        stripPastedStyles: !0,
                        tabIndex: this.props.threadID === b("MessengerConstants").NEW_THREAD_KEY ? b("MessengerTabIndices").COMPOSER_INPUT : 0,
                        textAlignment: "left",
                        threadID: this.$26(),
                        typingPerformanceID: "MessengerComposerInput",
                        onAddMention: this.$35,
                        onShowMentions: this.$36
                    }), this.props.threadID != null && b("cr:1217282") != null ? i.jsx(b("cr:1217282"), {
                        threadID: this.props.threadID,
                        workLinks: this.props.workChatContentApps,
                        files: this.props.fileUploader != null ? this.props.fileUploader.get("uploadedFiles") : null
                    }) : null, b("cr:1272653") !== null && (b("qex")._("1269717") || b("gkx")("1325997")) ? i.jsx(b("cr:1272653"), {
                        contextRef: function() {
                            return a.refs.input
                        }
                    }) : null, i.jsx("div", {
                        className: "_5ca7",
                        id: b("MessengerDomIDs.bs").ids.COMPOSER_INPUT_DESCRIPTION,
                        children: f
                    })]
                })]
            })
        }
        ;
        d.$31 = function(a, c) {
            return i.jsx(b("MercuryThreadTitleSafe.react"), {
                thread: a,
                viewer: c
            })
        }
        ;
        d.$32 = function(a, c, d) {
            return i.jsx(b("MercuryThreadSnippet.react"), {
                participants: a,
                shouldAlwaysRenderSender: !0,
                shouldRenderYou: !0,
                thread: c,
                viewer: d
            })
        }
        ;
        d.$17 = function(a, c) {
            var d = this.$37(a);
            a = b("EditorState").set(a, {
                decorator: d
            });
            return c || this.props.disableAutofocus ? a : b("EditorState").moveFocusToEnd(a)
        }
        ;
        d.$37 = function(a) {
            var c = b("MessengerEmoticonSpan.react");
            a = a.getCurrentContent();
            c = [{
                strategy: b("getEntityMatcher")(function(a) {
                    return a.getType() === "EMOTICON"
                }, a.getEntity),
                component: c
            }];
            c.push({
                strategy: b("getEntityMatcher")(function(a) {
                    return a.getType() === "EMOJI"
                }, a.getEntity),
                component: b("MessengerEmojiSpan.react")
            });
            c.push({
                strategy: b("getEntityMatcher")(function(a) {
                    return a.getType() === "MENTION"
                }, a.getEntity),
                component: b("MessengerMentionsEntityDecorator.react")
            });
            return new (b("CompositeDraftDecorator"))(c)
        }
        ;
        d.$38 = function(a, c) {
            a = b("handleBeforeInputForMessengerEmoticon")(c, a);
            if (a === c)
                return !1;
            this.setState({
                editorState: a
            });
            s(this.props.threadID, a);
            return !0
        }
        ;
        d.$39 = function(a, c) {
            a = b("handleBeforeInputForMessengerEmoji")(c, a);
            if (a === c)
                return !1;
            this.setState({
                editorState: a
            });
            s(this.props.threadID, a);
            return !0
        }
        ;
        d.handleTextDropped = function(a) {
            var c = this.state.editorState
              , d = c.getSelection();
            if (d.get("hasFocus"))
                return;
            d = b("DraftModifier").replaceText(c.getCurrentContent(), d, a, c.getCurrentInlineStyle());
            a = b("EditorState").push(c, d, "insert-fragment");
            this.$22(a)
        }
        ;
        d.getShareData = function() {
            var a = this.props.sharePreview;
            return a && a.type && a.params ? {
                share_type: a.type,
                share_params: a.params.get("data")
            } : null
        }
        ;
        d.exitCurrentMode = function() {
            this.refs.input && this.refs.input.exitCurrentMode()
        }
        ;
        d.$40 = function() {
            var a = this.props.sharePreview;
            return !!(a && a.params && a.type)
        }
        ;
        d.addMention = function(a) {
            a = b("replaceMentionedTextInEditorState")(a, this.state.editorState, 0, b("createMessengerMentionDraftEntity"));
            this.state.mentionsTriggerSource || this.setState({
                mentionsTriggerSource: b("MessengerMentionSource").REPLY
            });
            this.$22(a);
            this.$35()
        }
        ;
        return c
    }(i.PureComponent);
    a.propTypes = {
        disableAutofocus: (c = b("prop-types")).bool,
        fileUploader: c.object,
        workChatContentApps: c.instanceOf(b("immutable").OrderedMap),
        handleOnlyImageUploads: c.bool.isRequired,
        isComposing: c.bool,
        mentionsEnabled: c.bool,
        pageID: c.string,
        participants: c.instanceOf(b("immutable").Map),
        sharePreview: c.object,
        showMenu: c.bool,
        disableInput: c.bool,
        smallerEqual640: c.bool,
        thread: c.object,
        threadID: c.string,
        viewer: c.string,
        onBeforeInput: c.func,
        onChange: c.func,
        onFileUpload: c.func,
        onResize: c.func,
        onMessageSend: c.func
    };
    function u(a, b) {
        a = a.participants;
        b = b.participants;
        if (!a || !b)
            return !0;
        if (a === b)
            return !1;
        a = a.filter(Boolean);
        b = b.filter(Boolean);
        return a.size !== b.size || !a.equals(b)
    }
    d = b("withMessengerSource")(a, !0);
    e.exports = d
}
), null);
__d("MessengerComposerPendingActions.react", ["Bootloader", "CurrentUser", "JSResource", "MercuryIDs", "MercuryThreadActions", "MessageRequestUtils", "MessagingTag", "MessengerDialogs.bs", "MessengerMessageRequestsTypedLogger", "React", "lazyLoadComponent"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = b("lazyLoadComponent")(b("JSResource")("MessengerPendingActions.react").__setRef("MessengerComposerPendingActions.react"));
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.$1 = null,
            c.$2 = null,
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.componentWillUnmount = function() {
            this.$1 && this.$1.remove(),
            this.$2 && this.$2.remove()
        }
        ;
        d.render = function() {
            var a = this
              , c = this.props.thread
              , d = !!c && b("MessageRequestUtils").isFiltered(c);
            c = b("CurrentUser").getID();
            var e = b("MercuryIDs").getThreadKeyfromThreadIDUserID(this.props.threadID, c)
              , f = b("MercuryThreadActions").getForFBID(this.props.viewer);
            return g.jsx(g.Suspense, {
                fallback: g.jsx("div", {
                    style: {
                        height: 51
                    }
                }),
                children: g.jsx(h, {
                    folder: this.props.thread && this.props.thread.folder,
                    onAcceptClick: function() {
                        f.changeFolder(a.props.threadID, b("MessagingTag").INBOX),
                        new (b("MessengerMessageRequestsTypedLogger"))().setAction("message_requests_accept_request").setThreadID(b("MercuryIDs").getThreadFBIDFromThreadID(a.props.threadID)).setSurface("thread").setFolderType(d ? "other" : "pending").setThreadKey(e).setEntryPoint(null).log()
                    },
                    onDeclineClick: function() {
                        var c = b("MercuryIDs").isGroupChat(a.props.threadID);
                        a.$1 = b("Bootloader").loadModules(["MessengerDeclineDialogReact.bs"], function(d) {
                            var f = d.jsComponent;
                            b("MessengerDialogs.bs").showDialog(function() {
                                return g.jsx(f, {
                                    onBlock: a.props.onIgnoreBlock,
                                    onDelete: a.props.onDeleteDialogDeleteClick,
                                    onToggle: a.props.onDeleteDialogToggleClick,
                                    isGroupChat: c
                                })
                            });
                            new (b("MessengerMessageRequestsTypedLogger"))().setAction("message_requests_decline_attempt").setThreadID(b("MercuryIDs").getThreadFBIDFromThreadID(a.props.threadID)).setSurface("thread").setFolderType("pending").setThreadKey(e).setEntryPoint("inbox_banner").log()
                        }, "MessengerComposerPendingActions.react")
                    },
                    onDeleteClick: function() {
                        a.$2 = b("Bootloader").loadModules(["MessengerFilteredDeleteDialogReact.bs"], function(c) {
                            var d = c.jsComponent;
                            b("MessengerDialogs.bs").showDialog(function() {
                                return g.jsx(d, {
                                    onDelete: a.props.onDeleteDialogDeleteClick,
                                    onToggle: a.props.onDeleteDialogToggleClick
                                })
                            })
                        }, "MessengerComposerPendingActions.react"),
                        new (b("MessengerMessageRequestsTypedLogger"))().setAction("message_requests_decline_attempt").setThreadID(b("MercuryIDs").getThreadFBIDFromThreadID(a.props.threadID)).setSurface("thread").setFolderType("other").setThreadKey(e).setEntryPoint("inbox_banner").log()
                    }
                })
            })
        }
        ;
        return c
    }(g.Component);
    e.exports = a
}
), null);
__d("MessengerProfileLinkAction", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        CLICK: "click",
        HOVER: "hover"
    });
    e.exports = a
}
), null);
__d("MessengerProfileLinkDomain", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        MESSENGER_DOT_COM: "messenger_dot_com",
        FB_SLASH_MESSAGES: "fb_slash_messages",
        WORK_CHAT: "work_chat"
    });
    e.exports = a
}
), null);
__d("MessengerProfileLinkLogger.bs", ["MessengerProfileLinkTypedLogger"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a, c, d, e) {
        new (b("MessengerProfileLinkTypedLogger"))().setTargetID(a).setDomain(c).setLinkLocation(d).setAction(e).log();
        return 0
    }
    f.logItemImpression = a
}
), null);
__d("ProfileLinkReact.bs", ["ReasonReact.bs", "bs_js_null_undefined", "ProfileLink.react"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a, c, d, e, f, g, h, i) {
        var j;
        return b("ReasonReact.bs").wrapJsForReason(b("ProfileLink.react"), {
            className: (j = b("bs_js_null_undefined")).fromOption(a),
            href: j.fromOption(c),
            onClick: j.fromOption(d),
            onMouseEnter: j.fromOption(e),
            onMouseLeave: j.fromOption(f),
            target: j.fromOption(g),
            uid: h
        }, i)
    }
    f.make = a
}
), null);
__d("MessengerProfileLink.bs", ["cx", "URI", "bs_block", "bs_curry", "React", "Arbiter", "Link.react", "Badge.react", "bs_caml_option", "CurrentUser", "ReasonReact.bs", "ProfileLinkReact.bs", "isMessengerDotComURI", "MessengerProfileLinkAction", "MessengerProfileLinkDomain", "MessengerProfileLinkLogger.bs"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = b("React"), j = b("ReasonReact.bs").reducerComponent("MessengerProfileLink");
    function k(a, c, d, e, f, g, k) {
        var l = b("isMessengerDotComURI")(new (h || (h = b("URI")))(window.location.href))
          , m = b("CurrentUser").isWorkUser() ? b("MessengerProfileLinkDomain").WORK_CHAT : l ? b("MessengerProfileLinkDomain").MESSENGER_DOT_COM : b("MessengerProfileLinkDomain").FB_SLASH_MESSAGES
          , n = function(a) {
            return b("MessengerProfileLinkLogger.bs").logItemImpression(f, m, d, b("MessengerProfileLinkAction").HOVER)
        }
          , o = function(a) {
            return b("MessengerProfileLinkLogger.bs").logItemImpression(f, m, d, b("MessengerProfileLinkAction").CLICK)
        };
        return {
            debugName: j.debugName,
            reactClassInternal: j.reactClassInternal,
            handedOffState: j.handedOffState,
            getDerivedStateFromProps: j.getDerivedStateFromProps,
            didMount: function(a) {
                var c = b("Arbiter").subscribe("Hovercard/show", function(c, d) {
                    return b("bs_curry")._1(a.send, 0)
                })
                  , d = b("Arbiter").subscribe("Hovercard/hide", function(c, d) {
                    return b("bs_curry")._1(a.send, 1)
                });
                return b("bs_curry")._1(a.onUnmount, function(a) {
                    c.unsubscribe();
                    d.unsubscribe();
                    return 0
                })
            },
            didUpdate: j.didUpdate,
            willUnmount: j.willUnmount,
            shouldUpdate: j.shouldUpdate,
            render: function(d) {
                var h = i.jsxs("span", {
                    children: [e, g ? i.jsx(b("Badge.react"), {
                        size: "medium",
                        type: "verified"
                    }) : null]
                });
                return i.jsx("span", {
                    children: a !== void 0 ? l ? i.jsx(b("Link.react"), {
                        href: a,
                        onClick: function(a) {
                            d.state.isHovercardShown && n(0);
                            return o(0)
                        },
                        target: c,
                        children: h
                    }) : b("ReasonReact.bs").element(void 0, void 0, b("ProfileLinkReact.bs").make(void 0, void 0, function(a) {
                        return o(0)
                    }, void 0, function(a) {
                        if (d.state.isHovercardShown)
                            return n(0);
                        else
                            return 0
                    }, void 0, f, [h])) : h,
                    className: "_6ybk"
                })
            },
            initialState: function(a) {
                return {
                    isHovercardShown: !1
                }
            },
            retainedProps: j.retainedProps,
            reducer: function(a, c) {
                if (a)
                    return b("bs_block").__(0, [{
                        isHovercardShown: !1
                    }]);
                else
                    return b("bs_block").__(0, [{
                        isHovercardShown: !0
                    }])
            },
            jsElementWrapped: j.jsElementWrapped
        }
    }
    a = b("ReasonReact.bs").wrapReasonForJs(j, function(a) {
        return k(b("bs_caml_option").nullable_to_opt(a.href), a.target, a.location, a.name, a.uid, a.isVerified, [])
    });
    f.component = j;
    f.make = k;
    f.jsComponent = a
}
), null);
__d("TimeSpentRoomTypeEnum", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        GROUP: "GROUP",
        EVENT: "EVENT",
        LOCAL_COMMUNITY: "LOCAL_COMMUNITY"
    });
    e.exports = a
}
), null);
__d("TimeSpentRoomTypeEnum$FbtEnum", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({
        GROUP: "Group",
        EVENT: "Event"
    });
    e.exports = a
}
), null);
__d("MessengerContextBanner.react", ["cx", "fbt", "Badge.react", "CurrentUser", "Image.react", "ImageBlock.react", "Link.react", "MercuryParticipantsConstants", "MercuryParticipantsImage.react", "MercuryShareAttachmentRenderLocations", "MercuryThreadImage.react", "MessengerProfileLink.bs", "MessengerTextWithEmoticons.react", "React", "TimeSpentRoomTypeEnum", "TimeSpentRoomTypeEnum$FbtEnum", "immutable", "prop-types", "requireWeak"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React"), j;
    b("requireWeak")("MessengerThreadImageReact.bs", function(a) {
        j = a.jsComponent
    });
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = i.jsxs(b("ImageBlock.react"), {
                className: "_llj" + (this.props.location === b("MercuryShareAttachmentRenderLocations").MESSENGER ? " _2eu-" : "") + (this.props.location === b("MercuryShareAttachmentRenderLocations").CHAT ? " _2eu_" : ""),
                spacing: "large",
                style: this.props.style,
                children: [this.$1(), i.jsxs("div", {
                    className: "_lll",
                    children: [this.$2(), this.$3(), this.$4()]
                })]
            })
              , c = this.props.associatedObject;
            c && c.action_link && (a = i.jsx(b("Link.react"), {
                href: c.action_link,
                target: "_blank",
                style: {
                    textDecoration: "none"
                },
                children: a
            }));
            return a
        }
        ;
        d.$1 = function() {
            var a = this.props.location === b("MercuryShareAttachmentRenderLocations").MESSENGER
              , c = this.props.associatedObject
              , d = null;
            if (!this.props.contactName && c && a)
                d = i.jsx(b("Image.react"), {
                    className: "_4ld- _1wrc",
                    src: c.profile_picture
                });
            else if (this.props.thread) {
                c = j && a ? j : b("MercuryThreadImage.react");
                d = i.jsx(c, {
                    showBadge: !1,
                    participants: this.props.participants,
                    size: a ? 60 : null,
                    thread: this.props.thread,
                    viewer: this.props.viewer
                })
            } else
                this.props.participantIDs && (d = i.jsx(b("MercuryParticipantsImage.react"), {
                    participants: this.props.participantIDs,
                    size: b("MercuryParticipantsConstants").BIG_IMAGE_SIZE
                }));
            return i.jsx("div", {
                className: "_llk",
                children: d
            })
        }
        ;
        d.$2 = function() {
            if (this.props.location !== b("MercuryShareAttachmentRenderLocations").MESSENGER)
                return null;
            var a = this.props.isVerified ? i.jsx(b("Badge.react"), {
                size: "medium",
                type: "verified"
            }) : null
              , c = this.props.contactName;
            if (!c) {
                var d = this.props.associatedObject;
                c = d ? d.name : null
            }
            d = this.props.contactFBProfile;
            var e = this.props.contactID;
            return i.jsx("div", {
                className: "_llq",
                children: i.jsxs("span", {
                    className: "_3oh-",
                    children: [i.jsx(b("MessengerProfileLink.bs").jsComponent, {
                        href: d,
                        location: "context_banner",
                        name: c,
                        uid: e
                    }), a]
                })
            })
        }
        ;
        d.$3 = function() {
            return i.jsx("div", {
                className: "_1n-e _36zg",
                children: i.jsx(b("MessengerTextWithEmoticons.react"), {
                    text: this.props.connectionContext || "",
                    renderEmoticons: !1
                })
            })
        }
        ;
        d.$4 = function() {
            if (!this.props.contextItems.length) {
                var a = this.props.associatedObject;
                if (a) {
                    a = b("TimeSpentRoomTypeEnum")[a.room_type];
                    var c = b("CurrentUser").isWorkUser() ? "Workplace" : "Facebook";
                    return i.jsx("div", {
                        className: "_1n-e",
                        children: h._({
                            "GROUP": "Chuy\u1ec3n \u0111\u1ebfn nh\u00f3m {productName}",
                            "EVENT": "Chuy\u1ec3n \u0111\u1ebfn s\u1ef1 ki\u1ec7n {productName}"
                        }, [h._param("productName", c), h._enum(a, b("TimeSpentRoomTypeEnum$FbtEnum"))])
                    })
                }
                return null
            }
            return i.jsx("div", {
                children: this.props.contextItems.map(function(a, c) {
                    return i.jsx("div", {
                        className: "_1n-e",
                        children: i.jsx(b("MessengerTextWithEmoticons.react"), {
                            text: a || "",
                            renderEmoticons: !1
                        })
                    }, "item:" + c)
                })
            })
        }
        ;
        return c
    }(i.PureComponent);
    e.exports = a;
    a.propTypes = {
        contactFBProfile: (c = b("prop-types")).string,
        contactID: c.string,
        contactName: c.string,
        associatedObject: c.object,
        connectionContext: c.string,
        contextItems: c.arrayOf(c.string).isRequired,
        isVerified: c.bool,
        location: c.string.isRequired,
        participantIDs: c.arrayOf(c.string),
        participants: c.instanceOf(b("immutable").Map),
        thread: c.object,
        viewer: c.string.isRequired
    }
}
), null);
__d("XMessengerContextBannerController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/ajax/messenger/context_banner/", {
        profile_id: {
            type: "Int",
            required: !0
        },
        max_context_items: {
            type: "Int",
            defaultValue: 3
        }
    })
}
), null);
__d("MessengerContextInformationStore", ["AsyncRequest", "EventEmitter", "TimeSlice", "XMessengerContextBannerController"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = new Map()
      , h = new Map();
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$MessengerContextInformationStore1 = function(a) {
                if (h.get(a))
                    return;
                var c = b("XMessengerContextBannerController").getURIBuilder().setInt("profile_id", a).getURI();
                c = new (b("AsyncRequest"))().setAllowCrossPageTransition(!0).setURI(c).setHandler(d.$MessengerContextInformationStore2.bind(babelHelpers.assertThisInitialized(d), a));
                h.set(a, c);
                c.send()
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.getOrFetch = function(a) {
            var c = g.get(a);
            c || b("TimeSlice").guard(this.$MessengerContextInformationStore1, "Chat Tab Messenger Context Banner Fetch", {
                propagationType: b("TimeSlice").PropagationType.ORPHAN
            })(a);
            return c
        }
        ;
        d.$MessengerContextInformationStore2 = function(a, b) {
            g.set(a, {
                connectionContext: b.payload.connection_context || "",
                contextItems: b.payload.context_items || []
            }),
            h["delete"](a),
            this.emit("change")
        }
        ;
        return c
    }(b("EventEmitter"));
    c = new a();
    e.exports = c
}
), null);
__d("PagesMessengerContextBanner.react", ["cx", "MercuryThreadImage.react", "ProfileHeaderCoverPhoto.react", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React")
      , i = 83
      , j = 284
      , k = 60;
    function a(a) {
        var c = a.coverPhotoData ? h.jsx(b("ProfileHeaderCoverPhoto.react"), {
            coverPhotoData: a.coverPhotoData,
            height: i,
            width: j
        }) : null;
        return h.jsxs("div", {
            className: "_fj3",
            children: [c, h.jsxs("div", {
                className: "_2-0o",
                children: [h.jsx(b("MercuryThreadImage.react"), {
                    className: "_2gye",
                    size: k,
                    thread: a.thread,
                    viewer: a.viewer
                }), ")"]
            })]
        })
    }
}
), null);
__d("MessengerContextBannerContainer.react", ["DOMDimensions", "MercuryIDs", "MercuryShareAttachmentRenderLocations", "MessengerContextBanner.react", "MessengerContextInformationStore", "MessengerParticipants.bs", "PagesMessagingMercuryChatTabStore", "PagesMessengerContextBanner.react", "React", "ReactComponentWithPureRenderMixin", "ReactDOM", "StoreAndPropBasedStateMixin", "createReactClass_DEPRECATED", "immutable", "prop-types"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = b("createReactClass_DEPRECATED")({
        displayName: "MessengerContextBannerContainer",
        mixins: [b("ReactComponentWithPureRenderMixin"), b("StoreAndPropBasedStateMixin")(b("MessengerContextInformationStore"), b("PagesMessagingMercuryChatTabStore"))],
        propTypes: {
            location: (a = b("prop-types")).string.isRequired,
            onResize: a.func,
            otherUserFBIDs: a.arrayOf(a.string),
            thread: a.object,
            threadID: a.string,
            viewer: a.string.isRequired
        },
        statics: {
            calculateState: function(a) {
                var c = a.thread
                  , d = null;
                c ? d = c && c.participants : a.otherUserFBIDs && a.otherUserFBIDs.length === 1 && (d = a.otherUserFBIDs.map(function(a) {
                    return b("MessengerParticipants.bs").getIDFromVanityOrFBID(a)
                }));
                var e = b("immutable").Map();
                d && (e = e.withMutations(function(a) {
                    d && d.forEach(function(c) {
                        a.set(c, b("MessengerParticipants.bs").getNow(c))
                    })
                }));
                var f = null
                  , g = null;
                c ? (f = e.get(b("MercuryIDs").getParticipantIDFromFromThreadID(c.thread_id)),
                g = c.associated_object) : f = d && e.get(d[0]);
                c = b("PagesMessagingMercuryChatTabStore").getStateByThread(a.threadID);
                a = c.coverPhotoData;
                return babelHelpers["extends"]({
                    associatedObject: g,
                    contact: f,
                    coverPhotoData: a,
                    participantIDs: d,
                    participants: e
                }, h.getContextInformation(f && f.fbid && f.fbid.toString()))
            },
            getContextInformation: function(a) {
                var c;
                a && (c = b("MessengerContextInformationStore").getOrFetch(a.toString()));
                return c || {
                    connectionContext: "",
                    contextItems: []
                }
            }
        },
        componentDidUpdate: function() {
            var a = b("ReactDOM").findDOMNode(this);
            if (!a)
                return;
            a = b("DOMDimensions").getElementDimensions(a).height;
            this.props.onResize && this.props.onResize(a)
        },
        render: function() {
            if (!this.state.contact)
                return this.state.associatedObject && this.props.location == b("MercuryShareAttachmentRenderLocations").MESSENGER ? g.jsx(b("MessengerContextBanner.react"), {
                    associatedObject: this.state.associatedObject,
                    contextItems: this.state.contextItems,
                    location: this.props.location,
                    participantIDs: this.state.participantIDs,
                    participants: this.state.participants,
                    thread: this.props.thread,
                    viewer: this.props.viewer
                }) : null;
            if (this.state.contact.type === "page") {
                if (!this.state.connectionContext && !this.state.contextItems.length)
                    return null;
                if (this.props.location === b("MercuryShareAttachmentRenderLocations").CHAT && this.props.thread != null)
                    return g.jsx(b("PagesMessengerContextBanner.react"), {
                        coverPhotoData: this.state.coverPhotoData,
                        thread: this.props.thread,
                        viewer: this.props.viewer
                    })
            }
            return g.jsx(b("MessengerContextBanner.react"), {
                contactFBProfile: this.state.contact.href,
                contactID: this.state.contact.fbid,
                contactName: this.state.contact.name,
                connectionContext: this.state.connectionContext,
                contextItems: this.state.contextItems,
                isVerified: this.state.contact.verification_status === "BLUE_VERIFIED",
                location: this.props.location,
                participantIDs: this.state.participantIDs,
                participants: this.state.participants,
                thread: this.props.thread,
                viewer: this.props.viewer
            })
        }
    });
    c = h;
    e.exports = c
}
), null);
__d("MessageList.react", ["cx", "Actor", "CurrentUser", "MercuryIDs", "MercuryMessageGroup", "MercuryShareAttachmentRenderLocations", "MessengerDomIDs.bs", "MessengerLightweightActionUtils", "MessengerMessage.bs", "MessengerObjectAssociationType", "MessengerParticipantUtils.bs", "MessengerPresenceProvider.bs", "React", "ReactDOM", "gkx", "immutable", "nullthrows", "prop-types", "requireCond", "cr:832269", "cr:1140097"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = 2
      , j = 1e3 * 60 * 60
      , k = 6
      , l = function(a) {
        var b;
        b = (b = a) != null ? (b = b.log_message_data) != null ? b.message_type : b : b;
        switch (b) {
        case "group_poll":
            return (b = a) != null ? (b = b.log_message_data) != null ? (b = b.untypedData) != null ? b.question_id : b : b : b;
        case "instant_game_update":
            return (b = a) != null ? (b = b.log_message_data) != null ? (b = b.untypedData) != null ? b.game_id : b : b : b;
        case "lightweight_event_create":
        case "lightweight_event_update":
        case "lightweight_event_delete":
        case "lightweight_event_update_time":
        case "lightweight_event_update_title":
        case "lightweight_event_update_location":
        case "lightweight_event_notify_before_event":
        case "lightweight_event_notify":
        case "lightweight_event_rsvp":
            return (b = a) != null ? (b = b.log_message_data) != null ? (b = b.untypedData) != null ? b.event_id : b : b : b;
        case "confirm_friend_request":
            b = ((b = a) != null ? (b = b.log_message_data) != null ? (b = b.untypedData) != null ? b.friend_request_subtype : b : b : b) || ((b = a) != null ? (b = b.log_message_data) != null ? (b = b.untypedData) != null ? b.subtype : b : b : b);
            return !b || b.toLowerCase() !== "icebreaker" ? null : o(a);
        case "messenger_icebreaker_vote_cast":
            return o(a);
        default:
            return null
        }
    }
      , m = function(a) {
        return b("MessengerLightweightActionUtils").isLWAMessage(a) ? "lwa" : null
    };
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.state = {
                activeMessageID: null,
                messageGroups: [],
                prevMessages: null,
                newMessagesGroupIndex: Infinity,
                lastReadTimestamp: ((b = d.props.thread) == null ? void 0 : b.last_read_timestamp) || Infinity,
                newMessagesCountForDisplay: 0
            },
            d.$5 = function(a) {
                d.setState(function(b) {
                    return {
                        activeMessageID: b.activeMessageID === a ? null : b.activeMessageID
                    }
                })
            }
            ,
            d.$6 = function(a) {
                d.setState({
                    activeMessageID: a
                })
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        c.getDerivedStateFromProps = function(a, c) {
            if (c.prevMessages !== a.messages)
                if (b("cr:832269") != null) {
                    var d = c.lastReadTimestamp;
                    c = a.location;
                    var e = a.messages
                      , f = a.thread
                      , g = b("MercuryIDs").getParticipantIDFromUserID(a.viewer);
                    (f == null ? void 0 : f.snippet_sender) === g && (d = Infinity);
                    f = e.findLast(function(a) {
                        return a.author === g
                    });
                    f && f.timestamp > d && (d = f.timestamp);
                    f = a.messages.filter(function(a) {
                        return a.timestamp <= d
                    });
                    var h = a.messages.filter(function(a) {
                        return a.timestamp > d
                    });
                    f = b("MercuryMessageGroup").calculateMessageGroups(f, c);
                    c = b("MercuryMessageGroup").calculateMessageGroups(h, c);
                    h = h.filter(function(a) {
                        return a.log_message_type == null
                    }).size;
                    return {
                        messageGroups: [].concat(f, c),
                        prevMessages: e,
                        newMessagesGroupIndex: f.length,
                        newMessagesCountForDisplay: h,
                        lastReadTimestamp: d
                    }
                } else
                    return {
                        messageGroups: b("MercuryMessageGroup").calculateMessageGroups(a.messages, a.location),
                        prevMessages: a.messages
                    };
            else
                return null
        }
        ;
        var d = c.prototype;
        d.render = function() {
            var a = this
              , c = this.props
              , d = c.DateBreak
              , e = c.forGameChat
              , f = c.location
              , g = c.selectedMessageId
              , o = c.MessageGroup
              , p = c.CollapsedLogMessageGroup
              , u = []
              , v = [];
            c = this.props.thread && this.props.thread.solid_color;
            var w = c ? {
                backgroundColor: c
            } : null
              , x = this.state.activeMessageID
              , y = this.state.messageGroups
              , z = y.length
              , A = this.props.readReceipts;
            c = A.last();
            var B = c ? c.watermark : 0
              , C = b("MercuryIDs").getParticipantIDFromUserID(this.props.viewer)
              , D = {};
            for (var c = this.props.messages.size - 1; c >= 0; c--) {
                var E = this.props.messages.get(c)
                  , F = l(E) || m(E);
                F && !D[F] && (D[F] = E.message_id)
            }
            var G = function(l) {
                var G = l > 0 ? y[l - 1] : null;
                G = G && G.length > 0 ? G[G.length - 1] : null;
                var I = y[l]
                  , J = I[0]
                  , K = I[I.length - 1]
                  , L = !1;
                b("cr:832269") != null && l > 0 && l === a.state.newMessagesGroupIndex && a.state.newMessagesCountForDisplay > 0 && u.push(h.jsx("div", {
                    ref: "newMessageDivider",
                    children: h.jsx(b("cr:832269"), {
                        newMessagesCount: a.state.newMessagesCountForDisplay
                    })
                }, "new-message-divider"));
                if (!G || J.timestamp - G.timestamp > j) {
                    L = !0;
                    G = h.jsx(d, {
                        date: new Date(J.timestamp),
                        ref: "db:" + J.message_id
                    }, "db:" + J.message_id);
                    v.length === 0 && u.push(G)
                }
                G = m(J);
                if (G && D[G] !== J.message_id) {
                    G = a.$1(J, D);
                    u.push(G);
                    return "continue"
                }
                if (J.action_type == "ma-type:log-message") {
                    G = (F = J) != null ? (F = F.log_message_data) != null ? F.message_type : F : F;
                    var M = (E = J) != null ? (E = E.log_message_data) != null ? (E = E.untypedData) != null ? E.friend_request_subtype : E : E : E
                      , N = G === "parties_presence"
                      , O = G === "instant_game_update"
                      , P = G === "group_poll";
                    M = G === "messenger_icebreaker_vote_cast" || G === "confirm_friend_request" && M && M.toLowerCase() === "icebreaker";
                    var Q = ["lightweight_event_create", "lightweight_event_update", "lightweight_event_delete", "lightweight_event_update_time", "lightweight_event_update_title", "lightweight_event_update_location", "lightweight_event_notify_before_event", "lightweight_event_notify", "lightweight_event_rsvp"].includes(G);
                    if ((f === b("MercuryShareAttachmentRenderLocations").CHAT || f === b("MercuryShareAttachmentRenderLocations").MESSENGER) && (J.log_message_type === "log:video-call" || J.log_message_type === "log:phone-call" || G === "messenger_call_log")) {
                        G = a.$2(J, C, y, z, l, A, B, K, D, g);
                        u.push(G)
                    } else {
                        G = a.$3(J, D);
                        c = J.message_id;
                        !O && !P && !Q && !M && v.push(G);
                        if (N)
                            return "continue";
                        (v.length === I.length || O || P || Q || M) && (a.$4(v, u, c, w, p),
                        v = []);
                        (O || P || Q || M) && u.push(G)
                    }
                    return "continue"
                }
                I = b("immutable").List(I);
                var R = q(y, z, l, D)
                  , S = !s(A, I, R)
                  , T = r(B, K)
                  , U = t(a.props.deliveryTimestamp, K)
                  , V = I.first().author
                  , W = b("MessengerMessage.bs").getPersona(K)
                  , X = C === J.author;
                N = X ? 0 : k + i;
                var Y = a.props.maxBubbleWidth ? a.props.maxBubbleWidth - N : null;
                u.push(h.jsx(b("MessengerPresenceProvider.bs").jsComponent, {
                    subscribeToIDs: V ? [V] : null,
                    children: function(c) {
                        return h.jsx(o, {
                            activeMessageID: n(x, I),
                            author: V,
                            deliveryTimestamp: U,
                            forGameChat: e,
                            hasDateBreak: L,
                            isCanonical: a.props.isCanonical,
                            isFromViewer: X,
                            isPageMessage: a.props.isPageMessage,
                            isOnline: V ? b("MessengerParticipantUtils.bs").has(c, V) : !1,
                            lastReadTimestamp: T,
                            maxBubbleWidth: Y,
                            messages: I,
                            nextTimestamp: R,
                            onReactionSwap: a.props.onReactionSwap,
                            onAttachmentLoad: a.props.onAttachmentLoad,
                            onMessageDeselect: a.$5,
                            onMessageSelect: a.$6,
                            onStickerClick: a.props.onStickerClick,
                            onReplyToMessage: a.props.onReplyToMessage,
                            pageID: a.props.isPageMessage === !0 ? a.props.viewer : null,
                            persona: W,
                            readReceipts: S ? A : b("immutable").OrderedMap(),
                            ref: function(b) {
                                return a.refs["mg:" + J.message_id] = b
                            },
                            thread: a.props.thread,
                            threadID: a.props.threadID,
                            scrollToRepliedMessage: a.props.scrollToRepliedMessage,
                            selectedMessageId: g,
                            rolesIDWithColor: a.props.rolesIDWithColor
                        }, "mg:" + J.message_id)
                    }
                }, "pp:" + J.message_id))
            };
            for (var H = 0; H < z; H++) {
                var I = G(H);
                if (I === "continue")
                    continue
            }
            I = this.props.thread;
            G = this.props.threadID || (I == null ? void 0 : I.thread_id) || (I == null ? void 0 : I.thread_fbid);
            H = null;
            f === b("MercuryShareAttachmentRenderLocations").MESSENGER && G && !this.props.isPageMessage && b("cr:1140097") && !b("gkx")("1332693") && ((I == null ? void 0 : I.object_association_type) === b("MessengerObjectAssociationType").GENERAL_CHAT || (I == null ? void 0 : I.work_associated_group) != null) && (I == null ? void 0 : (G = I.participants) == null ? void 0 : G.length) === 1 && (H = h.jsx(b("cr:1140097"), {}));
            return h.jsx(b("Actor").ActorProvider, {
                initialActorID: b("CurrentUser").getID(),
                readonly: !0,
                children: h.jsxs("div", {
                    id: f === b("MercuryShareAttachmentRenderLocations").MESSENGER ? b("MessengerDomIDs.bs").ids.CONVERSATION : null,
                    children: [H, u]
                })
            })
        }
        ;
        d.getNewMessageDivider = function() {
            return this.refs.newMessageDivider
        }
        ;
        d.getMessageElement = function(a, c) {
            if (c === !0) {
                var d = this.refs["db:" + a];
                if (d)
                    return b("ReactDOM").findDOMNode(d)
            }
            d = this.$7(a);
            if (!d)
                return null;
            d = d[0].message_id;
            var e = this.refs["mg:" + d];
            if (!e)
                return null;
            return c === !0 && d === a ? b("ReactDOM").findDOMNode(e) : e.getMessageElement(a)
        }
        ;
        d.getMessageComponent = function(a) {
            var b = this.$7(a);
            if (!b)
                return null;
            b = b[0].message_id;
            b = this.refs["mg:" + b];
            return !b ? null : b.getMessage(a)
        }
        ;
        d.$7 = function(a) {
            return this.state.messageGroups.find(function(b) {
                return b.some(function(b) {
                    return b.message_id === a
                })
            })
        }
        ;
        d.$4 = function(a, b, c, d, e) {
            a.length !== 0 && (a.length > 1 ? b.push(h.jsx(e, {
                style: d,
                children: a
            }, "mg:" + c)) : b.push(h.jsx("div", {
                children: a
            }, "mg:" + c)))
        }
        ;
        d.$2 = function(a, c, d, e, f, g, i, j, k, l) {
            var m = this, n, o, p = this.props.MessageGroup;
            o = ((o = a) != null ? (o = o.log_message_data) != null ? o.untypedData : o : o) || {};
            n = (n = a) != null ? (n = n.log_message_data) != null ? n.message_type : n : n;
            if (n === "messenger_call_log") {
                n = {
                    message_type: "messenger_call_log",
                    call_capture_attachments: o.call_capture_attachments,
                    caller: b("MercuryIDs").getParticipantIDFromUserID(b("nullthrows")(o.caller_id, "caller id")),
                    callee: b("MercuryIDs").getParticipantIDFromUserID(b("nullthrows")(o.callee_id, "callee id")),
                    server_info_data: o.server_info,
                    thread_id: a.thread_fbid,
                    answered: o.event !== "missed_call",
                    log_message_type: o.video ? "log:video-call" : "log:phone-call",
                    event: o.event,
                    added_participants: null,
                    removed_participants: null,
                    untypedData: null,
                    image: null,
                    name: null
                };
                a = babelHelpers["extends"]({}, a, {
                    log_message_data: n
                })
            }
            o = {
                attach_type: "share",
                share: {
                    style_list: ["rtc_call_log", "fallback"],
                    log_message_body: a.log_message_body,
                    log_message_data: a.log_message_data,
                    log_message_type: a.log_message_type,
                    timestamp: a.timestamp
                }
            };
            n = babelHelpers["extends"]({}, a, {
                attachments: [o],
                body: ""
            });
            var u = b("immutable").List([n])
              , v = q(d, e, f, k)
              , w = !s(g, u, v)
              , x = r(i, j)
              , y = t(this.props.deliveryTimestamp, j)
              , z = u.first().author;
            return h.jsx(b("MessengerPresenceProvider.bs").jsComponent, {
                subscribeToIDs: z ? [z] : null,
                children: function(d) {
                    return h.jsx(p, {
                        author: u.first().author,
                        deliveryTimestamp: y,
                        forGameChat: m.props.forGameChat,
                        isCanonical: m.props.isCanonical,
                        isFromViewer: c === a.author,
                        isOnline: z ? b("MessengerParticipantUtils.bs").has(d, z) : !1,
                        isPageMessage: m.props.isPageMessage,
                        lastReadTimestamp: x,
                        maxBubbleWidth: m.props.maxBubbleWidth,
                        messages: u,
                        nextTimestamp: v,
                        onAttachmentLoad: m.props.onAttachmentLoad,
                        onMessageDeselect: m.$5,
                        onMessageSelect: m.$6,
                        onStickerClick: m.props.onStickerClick,
                        readReceipts: w ? g : b("immutable").OrderedMap(),
                        selectedMessageId: l,
                        thread: m.props.thread,
                        threadID: m.props.threadID
                    })
                }
            }, a.message_id)
        }
        ;
        d.$3 = function(a, c) {
            var d = this.props.LogMessage
              , e = l(a);
            c = e ? c[e] : null;
            return a.log_message_type !== "log:error-msg" ? h.jsx(d, {
                className: this.props.location === b("MercuryShareAttachmentRenderLocations").CHAT ? "_5w0o" : null,
                onLogMessageExpanded: this.props.onAttachmentLoad,
                loadMoreMessages: this.props.loadMoreMessages,
                message: a,
                onImageLoad: this.props.onAttachmentLoad,
                viewer: this.props.viewer,
                isPageMessage: this.props.isPageMessage,
                thread: this.props.thread,
                isLastOfType: c === a.message_id
            }, a.message_id) : null
        }
        ;
        d.$1 = function(a, c) {
            c = c[b("nullthrows")(m(a), "other group id first message")];
            var d = this.props.LogMessage;
            return h.jsx(d, {
                className: this.props.location === b("MercuryShareAttachmentRenderLocations").CHAT ? "_5w0o" : null,
                onLogMessageExpanded: this.props.onAttachmentLoad,
                loadMoreMessages: this.props.loadMoreMessages,
                message: a,
                onImageLoad: this.props.onAttachmentLoad,
                viewer: this.props.viewer,
                thread: this.props.thread,
                isLastOfType: c === a.message_id
            }, a.message_id)
        }
        ;
        return c
    }(h.PureComponent);
    e.exports = a;
    a.propTypes = {
        CollapsedLogMessageGroup: (c = b("prop-types")).func.isRequired,
        DateBreak: c.func.isRequired,
        deliveryTimestamp: c.number.isRequired,
        forGameChat: c.bool,
        isCanonical: c.bool,
        isPageMessage: c.bool,
        location: c.string.isRequired,
        LogMessage: c.func.isRequired,
        loadMoreMessages: c.func,
        MessageGroup: c.func.isRequired,
        messages: c.instanceOf(b("immutable").List).isRequired,
        onReactionSwap: c.func,
        onAttachmentLoad: c.func,
        onStickerClick: c.func,
        onReplyToMessage: c.func,
        readReceipts: c.instanceOf(b("immutable").OrderedMap).isRequired,
        viewer: c.string.isRequired,
        thread: c.object,
        threadID: c.string,
        scrollToRepliedMessage: c.func,
        rolesIDWithColor: c.any
    };
    function n(a, b) {
        return b.find(function(b) {
            return b.message_id === a
        }) ? a : null
    }
    function o(a) {
        return (a = a) != null ? (a = a.log_message_data) != null ? (a = a.untypedData) != null ? a.icebreaker_type : a : a : a
    }
    function p(a) {
        var b = (a == null ? void 0 : a.action_type) === "ma-type:log-message";
        a = (a == null ? void 0 : (a = a.log_message_data) == null ? void 0 : a.message_type) === "messenger_call_log";
        return b && !a
    }
    function q(a, b, c, d) {
        if (c >= b - 1)
            return Infinity;
        var e = a[c + 1][0]
          , f = m(e);
        if (f && d[f] !== e.message_id || p(e))
            return q(a, b, c + 1, d);
        else
            return e.timestamp
    }
    function r(a, b) {
        return b.timestamp > a ? a : Infinity
    }
    function s(a, b, c) {
        return b.isEmpty() || !a.isEmpty() && (a.last().action < b.first().timestamp || a.first().action >= c)
    }
    function t(a, b) {
        return b.timestamp > a ? a : Infinity
    }
}
), null);
__d("MessengerAdsMessageSeenThreadFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743992");
    c = b("FalcoLoggerInternal").create("messenger_ads_message_seen_thread", a);
    e.exports = c
}
), null);
__d("MessengerDateBreak_DEPRECATED.react", ["cx", "FBLogger", "React", "WorkChatRedesignedMessageListCheck.re", "formatDate", "joinClasses", "prop-types"], (function(a, b, c, d, e, f, g) {
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.shouldComponentUpdate = function(a) {
            return this.props.date.getTime() !== a.date.getTime()
        }
        ;
        d.render = function() {
            try {
                var a = b("formatDate")(this.props.date, {
                    future: "g:ia",
                    today: "g:ia",
                    withinWeek: "D g:ia",
                    thisYear: "M jS, g:ia",
                    older: "m/d/Y g:ia"
                });
                return h.jsx("h4", {
                    className: b("joinClasses")(this.props.className, "_497p" + (b("WorkChatRedesignedMessageListCheck.re").enabled ? " _7w5v" : "") + (b("WorkChatRedesignedMessageListCheck.re").enabled ? " _7w78" : "") + " _2lpt"),
                    children: h.jsx("time", {
                        className: "_3oh-",
                        children: a
                    })
                })
            } catch (a) {
                b("FBLogger")("messaging").mustfix("invalid timestamp: " + this.props.date.getTime());
                return null
            }
        }
        ;
        return c
    }(h.Component);
    e.exports = a;
    a.propTypes = {
        date: b("prop-types").instanceOf(Date).isRequired
    }
}
), null);
__d("MessengerFlexArea.react", ["cx", "CSS", "Event", "MessengerSignals.bs", "React", "ReactDOM", "ResponsiveBlock.react", "Style", "SubscriptionsHandler", "Vector", "clearTimeout", "createReactClass_DEPRECATED", "getElementRect", "getScrollPosition", "joinClasses", "prop-types", "setTimeoutAcrossTransitions", "throttle"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    c = b("createReactClass_DEPRECATED")({
        displayName: "MessengerFlexArea",
        propTypes: {
            limitCalculationToParent: (a = b("prop-types")).bool,
            beforeResize: a.func,
            onResize: a.func,
            bottomOffset: a.number,
            maxHeight: a.oneOfType([a.number, a.oneOf[void 0,
            null]])
        },
        _subscriptions: null,
        _onResizeTimeout: null,
        getInitialState: function() {
            return {
                height: 0
            }
        },
        componentDidMount: function() {
            var a = this
              , c = new (b("SubscriptionsHandler"))();
            c.addSubscriptions(b("Event").listen(window, "resize", b("throttle")(this.recalculateHeight, 51)), b("MessengerSignals.bs").onResize(function() {
                a.recalculateHeight()
            }));
            this._subscriptions = c;
            b("setTimeoutAcrossTransitions")(this.recalculateHeight, 0)
        },
        componentDidUpdate: function(a) {
            a.maxHeight !== this.props.maxHeight && this.recalculateHeight()
        },
        componentWillUnmount: function() {
            this._subscriptions && this._subscriptions.release(),
            b("clearTimeout")(this._onResizeTimeout)
        },
        render: function() {
            return h.jsx(b("ResponsiveBlock.react"), {
                className: b("joinClasses")(this.props.className, "_9hq"),
                onResize: this._handleResponsiveBlockResize,
                style: {
                    height: this.state.height + "px"
                },
                children: this.props.children
            })
        },
        recalculateHeight: function() {
            if (!this.isMounted())
                return;
            var a = b("ReactDOM").findDOMNode(this)
              , c = a.parentNode
              , d = this.state.height
              , e = b("Vector").getViewportDimensions().y
              , f = !1;
            c && b("Style").get(c, "display") === "none" && (b("Style").set(c, "display", "initial"),
            f = !0);
            var g = !1;
            c instanceof Element && b("CSS").hasClass(c, "hidden_elem") && (b("CSS").removeClass(c, "hidden_elem"),
            g = !0);
            if (this.props.limitCalculationToParent === !0 && c != null && c instanceof Element) {
                var h = c.getBoundingClientRect().height;
                this.setState({
                    height: h
                }, this.props.onResize);
                return
            }
            e -= b("Vector").getElementPosition(c || a).y;
            h = b("getScrollPosition")(window);
            e += h.y;
            this.props.bottomOffset && (e -= this.props.bottomOffset);
            c && (Array.from(c.childNodes).forEach(function(a) {
                if (a.nodeType === Node.COMMENT_NODE || b("Style").get(a, "position") === "absolute")
                    return;
                e -= b("getElementRect")(a).height
            }),
            e += b("getElementRect")(a).height);
            f && b("Style").set(c, "display", "");
            g && c instanceof Element && b("CSS").addClass(c, "hidden_elem");
            (isNaN(e) || e < 0) && (e = 0);
            this.props.maxHeight != null && (e = Math.min(this.props.maxHeight, e));
            e !== d && (this.props.beforeResize && this.props.beforeResize(),
            this.setState({
                height: e
            }, this.props.onResize))
        },
        _handleResponsiveBlockResize: b("throttle")(function(a, c) {
            if (!this.isMounted())
                return;
            c === this.state.height && (this.props.beforeResize && this.props.beforeResize(),
            b("clearTimeout")(this._onResizeTimeout),
            this.props.onResize && (this._onResizeTimeout = b("setTimeoutAcrossTransitions")(this.props.onResize, 0)))
        }, 51)
    });
    d = c;
    e.exports = d
}
), null);
__d("MessengerStickyVerticalScroller.react", ["invariant", "React", "nullthrows"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = 5
      , j = 20
      , k = {
        wrapper: {
            position: "relative"
        },
        detector: {
            position: "absolute",
            height: "100%",
            overflow: "auto",
            width: "1px",
            visibility: "hidden"
        },
        disabled: {
            display: "none"
        }
    }
      , l = function(a) {
        var c = a.children
          , d = a.style
          , e = a.onResize
          , f = a.enabled
          , i = h.useRef()
          , j = h.useRef()
          , l = h.useRef()
          , m = h.useRef();
        h.useEffect(function() {
            var a = b("nullthrows")(j.current)
              , c = b("nullthrows")(l.current)
              , d = b("nullthrows")(m.current)
              , e = document.createElement("div");
            e.style.width = "1px";
            a.appendChild(e);
            a = document.createElement("div");
            a.style.height = "200%";
            a.style.width = "1px";
            c.appendChild(a);
            i.current = d.clientHeight;
            o()
        }, []);
        h.useEffect(function() {
            f && o()
        }, [f]);
        function n(a) {
            var c = b("nullthrows")(m.current)
              , d = b("nullthrows")(i.current);
            d = c.clientHeight - d;
            a.stopPropagation();
            if (d === 0)
                return;
            i.current = c.clientHeight;
            o();
            e()
        }
        function o() {
            var a, c = (a = b("nullthrows"))(j.current), d = a(l.current), e = a(m.current);
            a = a(c.firstChild);
            a instanceof HTMLDivElement || g(0, 22392);
            a.style.height = e.clientHeight + 1 + "px";
            c.scrollTop = c.scrollHeight;
            d.scrollTop = d.scrollHeight
        }
        return h.jsxs("div", {
            style: babelHelpers["extends"]({}, d, k.wrapper),
            ref: m,
            children: [h.jsx("div", {
                style: babelHelpers["extends"]({}, k.detector, !f && k.disabled),
                onScroll: n,
                ref: j
            }), h.jsx("div", {
                style: babelHelpers["extends"]({}, k.detector, !f && k.disabled),
                onScroll: n,
                ref: l
            }), c]
        })
    }
      , m = {
        container: {
            height: "100%",
            overflowX: "hidden",
            overflowY: "auto"
        }
    };
    a = h.forwardRef(function(a, c) {
        var d = a.children
          , e = a.style
          , f = a.onScroll;
        a = a.initialAnchor;
        a = a === void 0 ? "bottom" : a;
        var g = h.useRef()
          , k = h.useRef(-1)
          , n = h.useRef(-1)
          , o = h.useRef(-1)
          , p = h.useState(a)
          , q = p[0]
          , r = p[1]
          , s = h.useRef(a);
        h.useImperativeHandle(c, function() {
            return {
                scrollToBottom: function() {
                    var a = b("nullthrows")(g.current);
                    t();
                    a.scrollTop = a.scrollHeight;
                    o.current = a.scrollTop;
                    r("bottom")
                },
                scrollToTop: function() {
                    var a = b("nullthrows")(g.current);
                    t();
                    a.scrollTop = 0;
                    o.current = a.scrollTop;
                    r("top")
                },
                getArea: function() {
                    return {
                        getScrollHeight: function() {
                            var a = b("nullthrows")(g.current);
                            return a.scrollHeight
                        },
                        getScrollTop: function() {
                            var a = b("nullthrows")(g.current);
                            return a.scrollTop
                        },
                        setScrollTop: function(a, c) {
                            c === void 0;
                            c = b("nullthrows")(g.current);
                            t();
                            c.scrollTop = a
                        },
                        getElement: function() {
                            return {
                                getBoundingClientRect: function() {
                                    var a = b("nullthrows")(g.current);
                                    return {
                                        height: a.clientHeight
                                    }
                                }
                            }
                        },
                        isScrolledToBottom: function() {
                            return q === "bottom"
                        }
                    }
                },
                scrollToPosition: function(a, c) {
                    c === void 0;
                    c = b("nullthrows")(g.current);
                    t();
                    c.scrollTop = a
                },
                isScrolledToBottom: function() {
                    return q === "bottom"
                },
                isScrolledToTop: function() {
                    var a = this.getArea();
                    return !a ? !0 : a.getScrollTop() <= j
                }
            }
        });
        h.useEffect(function() {
            var a = b("nullthrows")(g.current);
            n.current = a.clientHeight;
            k.current = a.scrollHeight;
            s.current === "bottom" && (a.scrollTop = a.scrollHeight);
            o.current = a.scrollTop
        }, []);
        function t() {
            var a = b("nullthrows")(g.current)
              , c = a.clientHeight - n.current
              , d = a.scrollHeight - k.current;
            if (q === "bottom") {
                d = o.current + d - c;
                c = a.scrollHeight - a.clientHeight - d < i;
                a.scrollTop = c ? a.scrollHeight : d
            }
            n.current = a.clientHeight;
            k.current = a.scrollHeight;
            o.current = a.scrollTop
        }
        function u(a) {
            a = a.target.scrollTop;
            var c = b("nullthrows")(g.current);
            a !== o.current && (o.current = a,
            n.current = c.clientHeight,
            r(k.current - n.current - o.current < i ? "bottom" : "top"),
            f != null && f());
            q === "top" && (o.current = a,
            k.current = c.scrollHeight)
        }
        return h.jsx(l, {
            onResize: t,
            enabled: q === "bottom",
            style: e,
            children: h.jsx("div", {
                style: m.container,
                ref: g,
                onScroll: u,
                children: h.jsx(l, {
                    onResize: t,
                    enabled: q === "bottom",
                    style: null,
                    children: d
                })
            })
        })
    });
    c = a;
    e.exports = c
}
), null);
__d("MessengerFlexScrollableArea.react", ["MessengerFlexArea.react", "MessengerScrollableArea.react", "MessengerStickyVerticalScroller.react", "React", "gkx", "prop-types"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = b("gkx")("1489717");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.state = {
                shouldTrackBottom: c.props.shouldStickToBottom
            },
            c.$2 = function() {
                c.props.onScroll && c.props.onScroll();
                if (!c.props.shouldStickToBottom)
                    return;
                c.$3()
            }
            ,
            c.$1 = function() {
                c.trackBottomIfRequired()
            }
            ,
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            this.props.onMount && this.props.onMount()
        }
        ;
        d.render = function() {
            return g.jsxs(b("MessengerFlexArea.react"), {
                className: this.props.className,
                onResize: this.$1,
                ref: "flexArea",
                maxHeight: this.props.maxHeight,
                limitCalculationToParent: this.props.limitCalculationToParent,
                bottomOffset: this.props.bottomOffset,
                children: [this.props.flexChildren, this.props.shouldStickToBottom && h ? g.jsx(b("MessengerStickyVerticalScroller.react"), {
                    style: {
                        height: "100%",
                        overflow: "hidden"
                    },
                    initialAnchor: "bottom",
                    ref: "scrollable",
                    onScroll: this.props.onScroll,
                    children: this.props.children
                }) : g.jsx(b("MessengerScrollableArea.react"), {
                    height: "100%",
                    needsFastScrollHandler: this.state.shouldTrackBottom,
                    onScroll: this.$2,
                    ref: "scrollable",
                    tabIndex: this.props.tabIndex,
                    children: this.props.children
                }), this.props.footerChildren]
            })
        }
        ;
        d.$3 = function() {
            this.isScrolledToBottom() ? this.setState({
                shouldTrackBottom: !0
            }) : this.setState({
                shouldTrackBottom: !1
            })
        }
        ;
        d.getArea = function() {
            return this.refs.scrollable && this.refs.scrollable.getArea()
        }
        ;
        d.handleResize = function() {
            this.refs.flexArea && this.refs.flexArea.recalculateHeight()
        }
        ;
        d.trackBottomIfRequired = function() {
            this.state.shouldTrackBottom && !h && this.scrollToBottom()
        }
        ;
        d.overrideTrackBottom = function(a) {
            this.setState({
                shouldTrackBottom: a
            })
        }
        ;
        d.scrollToBottom = function(a) {
            this.refs.scrollable && this.refs.scrollable.scrollToBottom(a)
        }
        ;
        d.scrollToTop = function(a) {
            this.refs.scrollable && this.refs.scrollable.scrollToTop(a)
        }
        ;
        d.scrollToPosition = function(a, b, c) {
            this.refs.scrollable && this.refs.scrollable.scrollToPosition(a, b, c)
        }
        ;
        d.isScrolledToBottom = function() {
            var a = this.refs.scrollable;
            return a ? a.isScrolledToBottom() : !0
        }
        ;
        d.isScrolledToBottomWithHeight = function(a) {
            return this.refs.scrollable.isScrolledToBottomWithHeight(a)
        }
        ;
        d.isScrolledToTop = function() {
            return this.refs.scrollable && this.refs.scrollable.isScrolledToTop()
        }
        ;
        d.getScrollTop = function() {
            return this.refs.scrollable && this.refs.scrollable.getScrollTop() || 0
        }
        ;
        return c
    }(g.Component);
    e.exports = a;
    a.propTypes = {
        flexChildren: (c = b("prop-types")).node,
        footerChildren: c.node,
        onMount: c.func,
        onScroll: c.func,
        shouldStickToBottom: c.bool,
        tabIndex: c.number,
        maxHeight: c.number,
        bottomOffset: c.number,
        limitCalculationToParent: c.bool
    }
}
), null);
__d("MessengerNewMessagesNoticeReact.bs", ["cx", "ix", "fbt", "React", "Link.react", "Image.react"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = b("React")
      , k = h("86939")
      , l = i._("Tin nh\u1eafn m\u1edbi");
    function a(a) {
        var c = a.isOpen
          , d = a.onClick;
        a = a.label;
        a = a !== void 0 ? a : l;
        return j.jsx("div", {
            children: j.jsxs(b("Link.react"), {
                className: "_5f0v _4wzs",
                onClick: d,
                tabIndex: c ? 0 : -1,
                children: [j.jsx(b("Image.react"), {
                    className: "_4wzt",
                    src: k
                }), j.jsx("div", {
                    children: a,
                    className: "_1bqr"
                })]
            }),
            "aria-hidden": !c,
            className: "_4wzq" + (c ? " _4wzr" : "") + (c ? "" : " _4-je")
        })
    }
    c = a;
    d = a;
    f.newMessageSrc = k;
    f.defaultLabel = l;
    f.make = c;
    f.jsComponent = d
}
), null);
__d("MercuryTypingAnimationReact.bs", ["cx", "React", "joinClasses"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function a(a) {
        a = a.className;
        return h.jsx("div", {
            children: h.jsxs("div", {
                children: [h.jsx("div", {
                    className: "_5pd7"
                }), h.jsx("div", {
                    className: "_5pd7"
                }), h.jsx("div", {
                    className: "_5pd7"
                })],
                className: "_4b0g"
            }),
            className: b("joinClasses")("_4a0v _1x3z", a !== void 0 ? a : "")
        })
    }
    c = a;
    f.make = c
}
), null);
__d("MessengerBubbleReact.re", ["MessengerBubble.react"], (function(a, b, c, d, e, f) {
    a = b("MessengerBubble.react");
    f.makeTypeChecked = a;
    c = a;
    f.make = c
}
), null);
__d("MessengerTypingIndicatorReact.bs", ["cx", "bs_block", "bs_curry", "React", "bs_js_dict", "bs_caml_obj", "immutable", "MercuryIDs", "bs_belt_Option", "bs_caml_option", "CurrentUser", "Image.react", "ReasonReact.bs", "MessengerPersonas.bs", "MessengerParticipants.bs", "WorkForeignEntityType", "MessengerBubbleReact.re", "MercuryTypingAnimationReact.bs", "MessengerProfileImageWrapperReact.bs"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = b("ReasonReact.bs").reducerComponent("MessengerTypingIndicatorReact");
    function a(a, c, d, e) {
        var f = function(c, a) {
            return b("bs_caml_option").nullable_to_opt(b("MessengerParticipants.bs").getMulti([a], function(d) {
                b("bs_curry")._1(c.send, b("bs_block").__(0, [b("bs_js_dict").get(d, a)]));
                return 0
            }))
        }
          , g = function(a) {
            if (c == null)
                return;
            else {
                a = b("MercuryIDs").getUserIDFromParticipantID(c);
                if (a == null)
                    return;
                else
                    return b("bs_caml_option").nullable_to_opt(b("MessengerPersonas.bs").getNow(a))
            }
        };
        return {
            debugName: i.debugName,
            reactClassInternal: i.reactClassInternal,
            handedOffState: i.handedOffState,
            getDerivedStateFromProps: i.getDerivedStateFromProps,
            didMount: function(a) {
                var d = a.state.author;
                if (d !== void 0 || c == null)
                    return 0;
                else {
                    d = b("MessengerParticipants.bs").getNow(c);
                    if (d == null)
                        return b("bs_curry")._1(a.send, b("bs_block").__(1, [f(a, c)]));
                    else
                        return b("bs_curry")._1(a.send, b("bs_block").__(0, [d == null ? void 0 : b("bs_caml_option").some(d)]))
                }
            },
            didUpdate: function(a) {
                a = a.newSelf;
                var d = a.state.subscription.contents
                  , e = a.state.author;
                if (d !== void 0)
                    return 0;
                else {
                    if (e !== void 0 && (c == null || b("bs_caml_obj").caml_equal(b("bs_caml_option").valFromOption(e).id, c)))
                        return 0;
                    if (c == null)
                        return 0;
                    else
                        return b("bs_curry")._1(a.send, b("bs_block").__(1, [f(a, c)]))
                }
            },
            willUnmount: function(a) {
                a = a.state.subscription.contents;
                if (a !== void 0)
                    return b("MessengerParticipants.bs").removeCallback(b("bs_caml_option").valFromOption(a));
                else
                    return 0
            },
            shouldUpdate: i.shouldUpdate,
            render: function(c) {
                var d = g(0);
                if (c.state.author === void 0 && d === void 0)
                    return null;
                else {
                    var e = c.state.author;
                    d = d !== void 0 ? d.profile_picture_url : e !== void 0 ? b("bs_caml_option").nullable_to_opt(b("bs_caml_option").valFromOption(e).image_src) : void 0;
                    e = b("bs_belt_Option").flatMap(b("bs_belt_Option").flatMap(c.state.author, function(a) {
                        return b("bs_caml_option").nullable_to_opt(a.work_foreign_entity_info)
                    }), function(a) {
                        return b("bs_caml_option").some(a.type)
                    });
                    e = e !== void 0 ? b("CurrentUser").isWorkUser() && b("bs_caml_obj").caml_equal(b("bs_caml_option").valFromOption(e), b("WorkForeignEntityType").FOREIGN) : !1;
                    c = c.state.author;
                    return h.jsxs("div", {
                        children: [h.jsx("div", {
                            children: h.createElement(b("MessengerProfileImageWrapperReact.bs").make, {
                                isMessengerUser: c !== void 0 ? b("bs_caml_option").valFromOption(c).is_messenger_user : !1,
                                size: 32,
                                className: "_1t_r",
                                showBadge: e,
                                children: d !== void 0 ? h.jsx(b("Image.react"), {
                                    alt: "",
                                    src: d,
                                    height: 32,
                                    width: 32
                                }) : h.jsx(b("Image.react"), {
                                    alt: "",
                                    height: 32,
                                    width: 32
                                })
                            }),
                            className: "_1t_q"
                        }), h.jsx("div", {
                            children: h.jsx("div", {
                                children: h.jsx(b("MessengerBubbleReact.re").make, {
                                    attachments: b("immutable").List([h.jsx(b("MercuryTypingAnimationReact.bs").make, {}, "animation")]),
                                    body: "",
                                    className: "_3058",
                                    ref: a
                                }),
                                className: "_o46 _3erg _29_7"
                            }),
                            className: "_41ud"
                        })],
                        className: "_1t_p _1hbw"
                    })
                }
            },
            initialState: function(a) {
                return {
                    author: c == null ? void 0 : b("bs_caml_option").nullable_to_opt(b("MessengerParticipants.bs").getNow(c)),
                    subscription: {
                        contents: void 0
                    }
                }
            },
            retainedProps: i.retainedProps,
            reducer: function(a, c) {
                if (a.tag) {
                    c.subscription.contents = a[0];
                    return 0
                } else {
                    c.subscription.contents = void 0;
                    return b("bs_block").__(0, [{
                        author: a[0],
                        subscription: c.subscription
                    }])
                }
            },
            jsElementWrapped: i.jsElementWrapped
        }
    }
    c = 32;
    f.component = i;
    f.cIMAGE_SIZE = c;
    f.make = a
}
), null);
__d("MessengerTypingIndicatorReact.re", ["bs_curry", "MessengerTypingIndicatorReact.bs", "ReasonReact.bs"], (function(a, b, c, d, e, f) {
    a = b("ReasonReact.bs").wrapReasonForJs(b("MessengerTypingIndicatorReact.bs").component, function(a) {
        return b("bs_curry")._4(b("MessengerTypingIndicatorReact.bs").make, a.setBubbleRef, a.userID, a.showName, a.children)
    });
    f.component = a;
    f["default"] = a
}
), null);
__d("MessengerUserInputActions", ["keyMirror"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("keyMirror")({
        UPDATE_USER_INPUT_REQUESTED: null
    });
    f.MessengerUserInputActions = a
}
), null);
__d("MessengerUserInputActionsHandler", ["MessengerUserInputActions", "MessengerUserInputAppDispatcher"], (function(a, b, c, d, e, f) {
    "use strict";
    f.updateUserInputRequested = a;
    function a(a, c, d) {
        b("MessengerUserInputAppDispatcher").dispatch({
            type: b("MessengerUserInputActions").MessengerUserInputActions.UPDATE_USER_INPUT_REQUESTED,
            data: {
                isUserInputRequested: a,
                requestNumResults: c,
                requestType: d
            }
        })
    }
}
), null);
__d("WorkGalahadScrollToMessageEventEmitter", ["EventEmitter"], (function(a, b, c, d, e, f) {
    "use strict";
    a = new (b("EventEmitter"))();
    e.exports = a
}
), null);
__d("MessengerConversation.react", ["ix", "csx", "cx", "fbt", "Bootloader", "BootloadOnRender.react", "ChatTypingIndicatorsWrapper.bs", "CSS", "CurrentUser", "DOM", "DOMDimensions", "ErrorBoundary.react", "Event", "FantaPageGreetingLoader.react", "Image.react", "ImmutableObject", "JSResource", "KeyEventController", "LazyComponent.react", "Link.react", "MercuryIDs", "MercuryShareAttachmentRenderLocations", "MessageList.react", "MessengerActions", "MessengerAttachmentRenderer", "MessengerBootloadedLogMessage.react", "MessengerButtonReact.re", "MessengerCollapsedLogMessageGroup.react", "MessengerContextBannerContainer.react", "MessengerDateBreak_DEPRECATED.react", "MessengerDialogs.re", "MessengerDotComAndInboxM4Check.bs", "MessengerFlexScrollableArea.react", "MessengerNewMessagesNoticeReact.bs", "MessengerQuickCamOrigins", "MessengerQuickReplyUtils", "MessengerReadReceipt.re", "MessengerSpinner.react", "MessengerThreadFetchLoggerUtil", "MessengerThreadSearchActions", "MessengerTypingIndicatorReact.re", "MessengerUserInputActionsHandler", "MessengerUserProfileLocationUtils", "MessengerVideoAutoplayActions", "MessengerVideoAutoplayStore", "MessengerViewerContactMethodsWebGraphQLQuery", "Parent", "React", "ReactDOM", "SubscriptionsHandler", "UserActivity", "WebGraphQL", "WebMessengerConstants", "WorkBotLandingPageHelper", "WorkChatRedesignedMessageListCheck.re", "WorkGalahadScrollToMessageEventEmitter", "asset", "emptyFunction", "getPageIDFromThreadID", "gkx", "ifRequired", "immutable", "joinClasses", "lazyLoadComponent", "nullthrows", "promiseDone", "prop-types", "requireCond", "setImmediate", "setTimeout", "throttle", "cr:1203488", "cr:1071079", "cr:1272775", "cr:1071080", "MessengerAdsMessageSeenThreadFalcoEvent"], (function(a, b, c, d, e, f, g, h, i, j) {
    "use strict";
    var k = b("React");
    b("immutable").OrderedMap;
    var l = 0
      , m = 20
      , n = 100
      , o = 1e3
      , p = 200
      , q = b("gkx")("833128")
      , r = b("gkx")("1489717")
      , s = b("lazyLoadComponent")(b("JSResource")("WorkChatBotConversationGreetingContainer.react").__setRef("MessengerConversation.react"))
      , t = b("lazyLoadComponent")(b("JSResource")("OmniMSuggestionsContainer.react").__setRef("MessengerConversation.react"));
    function u(a, c) {
        return !!(b("KeyEventController").filterEventTypes(a, c) && b("KeyEventController").filterEventModifiers(a, c) && a.target instanceof Element && b("Parent").bySelector(a.target, "._4_j4"))
    }
    var v = {};
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.state = {
                readReceipts: w(d.props),
                scrollingToUnreadMessage: !1,
                selectedMessageId: null,
                showUnreadNotice: !1,
                unreadCount: d.props.thread ? d.props.thread.unread_count : 0,
                width: 0,
                viewerEmail: null,
                viewerPhone: null,
                viewerState: null,
                viewerZipCode: null,
                shouldJumpToMessage: !1,
                isLandingPageDismissed: !1,
                renderScrollToBottom: !1
            },
            d.$1 = null,
            d.$2 = null,
            d.$3 = null,
            d.$4 = b("immutable").List(),
            d.$5 = [],
            d.$6 = {
                originalScrollHeight: 0,
                originalScrollTop: 0
            },
            d.$7 = function() {}
            ,
            d.$8 = function() {}
            ,
            d.$16 = function() {
                var a = d.$19();
                if (!d.refs || !a || d.props.isLoading) {
                    d.$5 = [];
                    return
                }
                var c = b("getPageIDFromThreadID")(d.props.threadID)
                  , e = d.refs.messageList;
                if (!e || !c) {
                    d.$5 = [];
                    return
                }
                var f = 10
                  , g = a.getElement().getBoundingClientRect()
                  , h = [];
                d.$4.forEach(function(a) {
                    var e = a.message_id
                      , i = d.refs.messageList.getMessageElement(e);
                    if (i) {
                        i = i.getBoundingClientRect();
                        i.top > g.top - f && i.bottom < g.bottom + f && (h.push(e),
                        d.$5.includes(e) || (b("gkx")("1181700") ? b("MessengerAdsMessageSeenThreadFalcoEvent").log(function() {
                            return {
                                message_id: e,
                                ad_client_token: a.ad_client_token,
                                ad_id: a.ad_id,
                                page_id: c
                            }
                        }) : b("Bootloader").loadModules(["MessengerAdsWebLogger", "MNAdsLoggerEventEnum"], function(b, d) {
                            b.log(a.ad_client_token, a.ad_id, d.MESSAGE_SEEN_THREAD, !0, e, c)
                        }, "MessengerConversation.react")))
                    }
                }, babelHelpers.assertThisInitialized(d));
                d.$5 = h
            }
            ,
            d.$20 = function() {
                b("MessengerThreadFetchLoggerUtil").markerEnd(d.props.threadID, 2),
                d.$20 = b("emptyFunction")
            }
            ,
            d.$41 = function() {
                var a;
                return ((a = d.props.contact) == null ? void 0 : a.user_type) === "page" && b("getPageIDFromThreadID")(d.props.threadID) !== null
            }
            ,
            d.$43 = function() {
                d.state.renderScrollToBottom ? (d.scrollToBottom(!0),
                d.setState({
                    renderScrollToBottom: !1
                })) : b("MessengerActions").changeMid(null)
            }
            ,
            d.$42 = function() {
                d.setState({
                    isLandingPageDismissed: !0
                })
            }
            ,
            d.$9 = function() {
                var a = d.$19();
                a && a.pageUp();
                return !1
            }
            ,
            d.$10 = function() {
                var a = d.$19();
                a && a.pageDown();
                return !1
            }
            ,
            d.$11 = function(a) {
                if (a.target === document.body) {
                    d.scrollToTop();
                    return !1
                }
                return null
            }
            ,
            d.$12 = function(a) {
                if (a.target === document.body) {
                    d.scrollToBottom();
                    return !1
                }
                return null
            }
            ,
            d.$15 = function() {
                if (!d.refs)
                    return;
                if (!d.refs.scrollable)
                    return;
                var a = d.$19()
                  , c = d.refs.quickReply;
                c && b("CSS").conditionClass(c, "_1mzg", !d.isScrolledToBottom());
                d.$13();
                d.$14();
                a && d.state.unreadCount && d.$26(a) && d.setState({
                    showUnreadNotice: !1,
                    unreadCount: 0
                });
                a && a.isScrolledToBottom() && d.setState({
                    renderScrollToBottom: !1
                });
                d.$46(a);
                d.$47(a);
                d.$8()
            }
            ,
            d.$45 = function(a) {
                a.preventDefault(),
                d.setState({
                    showUnreadNotice: !1
                }),
                d.$22(!0)
            }
            ,
            d.$14 = function() {
                if (d.props.messages.size === 0 || d.props.thread && d.props.thread.unread_count === 0 || !d.isScrolledToBottom())
                    return;
                b("UserActivity").isOnTab() && b("UserActivity").isActive() ? d.props.onRead(d.props.threadID) : d.$3 || (d.$3 = b("UserActivity").subscribe(function() {
                    b("UserActivity").isOnTab() && (d.$18(),
                    d.props.onRead(d.props.threadID))
                }))
            }
            ,
            d.handleResize = function() {
                if (!d.refs)
                    return;
                if (d.refs.scrollable) {
                    d.refs.scrollable.handleResize();
                    var a = b("DOMDimensions").getElementDimensions(b("ReactDOM").findDOMNode(d.refs.scrollable)).width;
                    a !== d.state.width && d.setState({
                        width: a
                    })
                }
                a = d.refs.quickReply;
                a && b("CSS").conditionClass(a, "_1mzg", !d.isScrolledToBottom());
                r || d.trackBottomIfRequired()
            }
            ,
            d.$17 = function(a) {
                d.props.messages.some(function(b) {
                    return b.message_id === a
                }) ? d.$24(a, !0, function() {
                    d.setState({
                        selectedMessageId: a
                    })
                }) : (d.setState({
                    selectedMessageId: null,
                    shouldJumpToMessage: !0
                }),
                b("MessengerActions").changeMid(a))
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            var a = this, c, d = new (b("SubscriptionsHandler"))();
            d.addSubscriptions(b("Event").listen(window, "resize", b("throttle")(this.handleResize, 50)), (c = b("KeyEventController")).registerKey("PAGE_UP", this.$9, u), c.registerKey("PAGE_DOWN", this.$10, u), c.registerKey("HOME", this.$11, u), c.registerKey("END", this.$12, u));
            this.$2 = d;
            this.$13();
            this.handleResize();
            this.$14();
            this.$7 = b("throttle")(this.$15, n);
            this.$8 = b("throttle")(this.$16, o);
            this.$4 = this.props.messages.filter(function(a) {
                return a.is_sponsored
            });
            this.$8();
            b("WorkGalahadScrollToMessageEventEmitter").addListener("scrollToMessage", function(b) {
                a.$17(b)
            })
        }
        ;
        d.UNSAFE_componentWillReceiveProps = function(a) {
            var b = a.threadID !== this.props.threadID;
            b && (this.$18(),
            this.setState({
                scrollingToUnreadMessage: !1,
                showUnreadNotice: !1,
                unreadCount: a.thread ? a.thread.unread_count : 0,
                isLandingPageDismissed: !1
            }));
            (b || a.messages !== this.props.messages) && (this.$4 = a.messages.filter(function(a) {
                return a.is_sponsored
            }));
            this.setState({
                readReceipts: w(a)
            })
        }
        ;
        d.componentWillUnmount = function() {
            this.$18(),
            this.$2 && this.$2.release(),
            this.$1 != null && window.clearTimeout(this.$1),
            b("WorkGalahadScrollToMessageEventEmitter").removeAllListeners("scrollToMessage")
        }
        ;
        d.UNSAFE_componentWillUpdate = function() {
            var a = this.$19();
            a ? this.$6 = {
                originalScrollHeight: a.getScrollHeight(),
                originalScrollTop: a.getScrollTop()
            } : this.$6 = {
                originalScrollHeight: 0,
                originalScrollTop: 0
            }
        }
        ;
        d.componentDidUpdate = function(a, c) {
            var d = this;
            if (!this.refs)
                return;
            if (!this.refs.scrollable)
                return;
            (!this.props.isLoading || !this.props.messages.isEmpty()) && this.$20();
            c = this.props.threadID !== a.threadID;
            if (c && !r || y(a, this.props))
                this.scrollToBottom(),
                this.$21();
            else if (!r || a.isLoading && !a.messages.isEmpty()) {
                c = this.$19();
                if (c) {
                    var e = c.getScrollHeight();
                    if (e !== this.$6.originalScrollHeight) {
                        e = c.getScrollHeight() - this.$6.originalScrollHeight + this.$6.originalScrollTop;
                        this.refs.scrollable.scrollToPosition(e)
                    } else
                        this.$21()
                }
            }
            this.props.messages !== a.messages && (this.$14(),
            this.state.scrollingToUnreadMessage && this.$22(!1),
            this.$23());
            c = this.props.selectedMessage;
            this.state.shouldJumpToMessage && c && this.$24(c, !0, function() {
                d.setState({
                    shouldJumpToMessage: !1
                })
            });
            this.$1 = b("setTimeout")(function() {
                var a = d.$19()
                  , c = d.state.unreadCount;
                d.trackBottomIfRequired();
                if (a && d.state.unreadCount && !d.state.scrollingToUnreadMessage && !d.props.isLoading && d.props.selectedMessage == null && !d.$25()) {
                    d.$26(a) ? d.setState({
                        showUnreadNotice: !1,
                        unreadCount: 0
                    }) : c == 1 && ((c = d.props.messages.last()) == null ? void 0 : c.log_message_type) !== null ? d.setState({
                        showUnreadNotice: !1,
                        unreadCount: 0
                    }) : d.setState({
                        showUnreadNotice: !0
                    })
                }
                d.$13();
                d.$8();
                b("setImmediate")(function() {
                    var c = d.props.selectedMessage;
                    a && c != null && !d.props.scrolledToMid && b("MessengerThreadSearchActions").scrollToMessage(c)
                })
            }, 0)
        }
        ;
        d.render = function() {
            var a = this, c;
            if (this.props.isLoading && this.props.messages.isEmpty())
                return this.$27();
            var d = this.props.messages.last()
              , e = b("MercuryIDs").getParticipantIDFromUserID(this.props.viewer);
            this.$28(d);
            var f = this.$29(d)
              , g = this.$30(d);
            this.$31(d);
            e = d && d.author !== e ? f || g : null;
            f = null;
            if (Array.isArray(e)) {
                g = e.every(function(b) {
                    return b.content_type === "user_email" && a.state.viewerEmail === null || b.content_type === "user_phone_number" && a.state.viewerPhone === null || b.content_type === "user_state" && a.state.viewerState === null || b.content_type === "user_zip_code" && a.state.viewerZipCode === null
                });
                if (!g) {
                    g = b("MessengerQuickReplyUtils").localizeTitleIfNecessary(e);
                    f = k.jsx(b("BootloadOnRender.react"), {
                        component: k.jsx(b("LazyComponent.react"), {
                            options: g,
                            threadID: d.thread_id,
                            onVoiceClipCreate: this.props.onVoiceClipCreate,
                            viewer: this.props.viewer,
                            quickCamOriginLocation: b("MessengerQuickCamOrigins").MESSENGER,
                            messageId: d.message_id,
                            pageId: b("MercuryIDs").getUserIDFromParticipantID(d.author),
                            isMessengerAdPreview: this.props.isMessengerAdPreview,
                            isSponsored: d.is_sponsored,
                            useM4QR: this.props.useM4QR,
                            viewerEmail: this.state.viewerEmail,
                            viewerPhone: this.state.viewerPhone,
                            viewerState: this.state.viewerState,
                            viewerZipCode: this.state.viewerZipCode
                        }),
                        loader: b("JSResource")("MessengerBotsQuickReplyButtonList.react").__setRef("MessengerConversation.react"),
                        placeholder: k.jsx("div", {})
                    })
                }
            }
            e = null;
            g = null;
            f && (e = k.jsx("div", {
                className: "_51op",
                children: k.jsx("div", {
                    className: "_51oq",
                    onResize: this.handleResize
                })
            }),
            g = k.jsx("div", {
                ref: "quickReply",
                className: "_1mzb",
                onResize: this.handleResize,
                children: f
            }, "quick_reply"));
            d = j._("Tin nh\u1eafn");
            f = j._("T\u1ea3i th\u00eam...");
            var h = this.$32()
              , i = null;
            if (b("cr:1071079") != null && b("cr:1071080") != null && b("cr:1071080").shouldRenderChatNullState(this.props.messages, this.props.threadID, (c = this.props.contact) == null ? void 0 : c.user_type, this.props.viewer)) {
                ((c = this.props.thread) == null ? void 0 : c.work_associated_group) != null && b("cr:1272775") != null ? i = k.jsx(b("cr:1272775"), {
                    group: this.props.thread.work_associated_group
                }, "work_teamwork_chat_nullstate") : i = k.jsx(b("cr:1071079"), {
                    messageType: b("nullthrows")(b("cr:1071080").getNullStateMessageType(this.props.threadID, this.props.viewer))
                }, "work_teamwork_chat_nullstate")
            }
            return k.jsxs(k.Fragment, {
                children: [k.jsx(b("MessengerFlexScrollableArea.react"), {
                    className: this.props.className,
                    flexChildren: this.$33(),
                    footerChildren: [g, i],
                    onMount: function() {
                        return b("setImmediate")(a.$14)
                    },
                    onScroll: this.props.useManualFetch ? void 0 : this.$7,
                    ref: "scrollable",
                    shouldStickToBottom: !0,
                    tabIndex: 0,
                    bottomOffset: this.props.bottomOffset,
                    children: k.jsxs("div", {
                        "aria-label": d,
                        className: b("joinClasses")("__i_" + (b("WorkChatRedesignedMessageListCheck.re").enabled ? " _7w74" : "") + (b("MessengerDotComAndInboxM4Check.bs").yes ? " _7i2k" : ""), this.props.innerClassName),
                        role: "region",
                        children: [k.jsx("h3", {
                            className: "accessible_elem",
                            children: d
                        }), this.$34(), this.props.useManualFetch && !this.props.upExhausted ? k.jsx("div", {
                            className: "_7fim",
                            children: k.jsx(b("MessengerButtonReact.re").make, {
                                className: "_41jf",
                                label: f,
                                onClick: function() {
                                    return a.props.fetchMessages(b("WebMessengerConstants").MORE_SEARCH_CONTEXT_UP, a.props.threadID)
                                },
                                type: "primary",
                                use: "default"
                            })
                        }) : null, this.$35(), this.$36() && k.jsx(b("FantaPageGreetingLoader.react"), {
                            thread: this.props.thread,
                            threadID: this.props.threadID
                        }), i ? null : h || k.jsx(b("MessageList.react"), {
                            DateBreak: b("MessengerDateBreak_DEPRECATED.react"),
                            deliveryTimestamp: this.props.deliveryTimestamp,
                            isCanonical: this.props.isCanonical,
                            LogMessage: b("MessengerBootloadedLogMessage.react"),
                            CollapsedLogMessageGroup: b("MessengerCollapsedLogMessageGroup.react"),
                            MessageGroup: b("cr:1203488"),
                            messages: this.props.messages,
                            onAttachmentLoad: this.$37(this.props.threadID),
                            onReactionSwap: this.$38,
                            onReplyToMessage: this.props.onReplyToMessage,
                            readReceipts: this.state.readReceipts,
                            ref: "messageList",
                            selectedMessageId: this.state.selectedMessageId,
                            location: b("MercuryShareAttachmentRenderLocations").MESSENGER,
                            viewer: this.props.viewer,
                            thread: this.props.thread,
                            scrollToRepliedMessage: this.$17
                        }), this.props.useManualFetch && !this.props.downExhausted ? k.jsx("div", {
                            className: "_7fim",
                            children: k.jsx(b("MessengerButtonReact.re").make, {
                                className: "_41jf",
                                label: f,
                                onClick: function() {
                                    return a.props.fetchMessages(b("WebMessengerConstants").MORE_SEARCH_CONTEXT_DOWN, a.props.threadID)
                                },
                                type: "primary",
                                use: "default"
                            })
                        }) : null, e, k.jsx(b("ChatTypingIndicatorsWrapper.bs").jsComponent, {
                            indicatorClass: b("MessengerTypingIndicatorReact.re").component,
                            indicatorsDidShow: function() {
                                a.trackBottomIfRequired()
                            },
                            rootClassName: "clearfix _17pz",
                            threadID: this.props.threadID,
                            viewer: this.props.viewer
                        }), b("gkx")("1501033") && k.jsx(b("ErrorBoundary.react"), {
                            context: {
                                project: "omnim"
                            },
                            children: k.jsx(k.Suspense, {
                                fallback: k.jsx("div", {}),
                                children: k.jsx(t, {
                                    threadID: this.props.threadID,
                                    lastMessage: this.props.messages.last(),
                                    trackBottom: function() {
                                        return a.trackBottomIfRequired()
                                    }
                                })
                            })
                        })]
                    })
                }), b("WorkChatRedesignedMessageListCheck.re").enabled ? this.$39() : this.$40()]
            })
        }
        ;
        d.$32 = function() {
            if (!b("CurrentUser").isWorkUser())
                return null;
            if (!this.$41())
                return null;
            if (this.state.isLandingPageDismissed === !0)
                return null;
            return this.props.contact && b("WorkBotLandingPageHelper").shouldShowBotLandingPage(this.props.messages) ? k.jsx(k.Suspense, {
                fallback: k.jsx(b("MessengerSpinner.react"), {}),
                children: k.jsx(s, {
                    contact: this.props.contact,
                    threadID: this.props.threadID,
                    onDismiss: this.$42
                })
            }) : null
        }
        ;
        d.$40 = function() {
            var a = this.$19();
            if (a) {
                a = a.getElement().getBoundingClientRect().height;
                a = {
                    top: a - 74 + "px"
                }
            } else
                a = {
                    bottom: "15%"
                };
            return this.props.useManualFetch && !this.props.isSearchResult || this.state.renderScrollToBottom ? k.jsx(b("Link.react"), {
                "aria-label": j._("Chuy\u1ec3n \u0111\u1ebfn tin nh\u1eafn g\u1ea7n \u0111\u00e2y nh\u1ea5t"),
                style: a,
                className: "_69xg",
                onClick: this.$43,
                children: k.jsx(b("Image.react"), {
                    className: "_69xi",
                    src: g("415099")
                })
            }) : null
        }
        ;
        d.$39 = function() {
            return this.props.useManualFetch && !this.props.isSearchResult || this.state.renderScrollToBottom ? k.jsx(b("Link.react"), {
                className: "_8wfp",
                onClick: this.$43,
                children: j._("Quay l\u1ea1i ph\u1ea7n Tin nh\u1eafn g\u1ea7n \u0111\u00e2y nh\u1ea5t")
            }) : null
        }
        ;
        d.$29 = function(a) {
            var b = null;
            a = a && a.platform_xmd && JSON.parse(a.platform_xmd);
            var c = a && a.message_classification === "ad_message";
            c && Array.isArray(a && a.quick_replies) && (b = a && a.quick_replies);
            return b
        }
        ;
        d.$30 = function(a) {
            a = a && a.platform_xmd && JSON.parse(a.platform_xmd);
            return Array.isArray(a && a.quick_replies) ? a && a.quick_replies : null
        }
        ;
        d.$44 = function(a) {
            a = a && a.platform_xmd && JSON.parse(a.platform_xmd);
            return a && a.user_input
        }
        ;
        d.$28 = function(a) {
            var c = b("gkx")("964442");
            if (c) {
                c = this.$44(a);
                if (!c) {
                    b("MessengerUserInputActionsHandler").updateUserInputRequested(!1, l);
                    return
                } else
                    c.type === "address_auto_complete" && b("MessengerUserInputActionsHandler").updateUserInputRequested(!0, c.data.num_results, c.type)
            }
            return
        }
        ;
        d.$13 = function() {
            if (this.props.useManualFetch)
                return;
            var a = this.$19();
            a && a.getScrollTop() < m && (this.props.fetchMessages(b("WebMessengerConstants").MORE_SEARCH_CONTEXT_UP, this.props.threadID),
            this.$23())
        }
        ;
        d.$31 = function(a) {
            var c = this;
            a = this.$30(a);
            if (!a)
                return;
            a.some(function(a) {
                return a.content_type === "user_state" || a.content_type === "user_zip_code"
            }) && (!this.state.viewerState || !this.state.viewerZipCode) && b("promiseDone")(b("MessengerUserProfileLocationUtils").FetchMessengerUserRegionAndPostalCode(), function(a) {
                var b = a == null ? void 0 : a.region;
                a = a == null ? void 0 : a.postal_code;
                c.setState({
                    viewerState: b,
                    viewerZipCode: a
                })
            });
            a.some(function(a) {
                return a.content_type === "user_email" || a.content_type === "user_phone_number"
            }) && b("promiseDone")(b("WebGraphQL").exec(new (b("MessengerViewerContactMethodsWebGraphQLQuery"))({})), function(a) {
                var b;
                b = (b = a) != null ? (b = b.viewer) != null ? (b = b.user) != null ? b.all_phones : b : b : b;
                a = (a = a) != null ? (a = a.viewer) != null ? a.all_emails : a : a;
                var d = b ? b.find(function(a) {
                    return a.is_preferred
                }) : null;
                !d && b && (d = b[0]);
                b = a ? a.find(function(a) {
                    return a.is_primary
                }) : null;
                c.setState({
                    viewerEmail: (a = b) != null ? a.display_email : a,
                    viewerPhone: (b = d) != null ? (b = b.phone_number) != null ? b.universal_number : b : b
                })
            })
        }
        ;
        d.isScrolledToBottom = function() {
            return !!(this.refs.scrollable && this.refs.scrollable.isScrolledToBottom())
        }
        ;
        d.isScrolledToBottomWithHeight = function(a) {
            return !!(this.refs.scrollable && this.refs.scrollable.isScrolledToBottomWithHeight(a))
        }
        ;
        d.$33 = function() {
            return k.jsx(b("MessengerNewMessagesNoticeReact.bs").jsComponent, {
                isOpen: this.state.showUnreadNotice,
                label: j._({
                    "*": "{number} tin nh\u1eafn ch\u01b0a \u0111\u1ecdc",
                    "_1": "1 tin nh\u1eafn ch\u01b0a \u0111\u1ecdc"
                }, [j._plural(this.state.unreadCount, "number")]),
                onClick: this.$45
            })
        }
        ;
        d.$34 = function() {
            return !this.props.isLoaded || this.props.hideContextBanner ? null : k.jsx(b("MessengerContextBannerContainer.react"), {
                location: b("MercuryShareAttachmentRenderLocations").MESSENGER,
                thread: this.props.thread,
                threadID: this.props.threadID,
                viewer: this.props.viewer
            })
        }
        ;
        d.$35 = function() {
            return this.props.isLoaded ? null : k.jsx("div", {
                className: "_2k8v",
                children: this.props.isLoading ? k.jsx(b("MessengerSpinner.react"), {}) : null
            })
        }
        ;
        d.$27 = function() {
            return k.jsx("div", {
                className: "_4xu0",
                children: k.jsx(b("MessengerSpinner.react"), {
                    className: "_4xu1",
                    size: b("MessengerSpinner.react").large_size
                })
            })
        }
        ;
        d.trackBottomIfRequired = function() {
            if (!this.refs)
                return;
            this.refs.scrollable && this.refs.scrollable.trackBottomIfRequired()
        }
        ;
        d.scrollToBottom = function(a) {
            if (!this.refs)
                return;
            this.refs.scrollable && this.refs.scrollable.scrollToBottom(a)
        }
        ;
        d.scrollToTop = function(a) {
            if (!this.refs)
                return;
            this.refs.scrollable && this.refs.scrollable.scrollToTop(a)
        }
        ;
        d.$37 = function(a) {
            var b = this;
            if (v[a])
                return v[a];
            var c = function() {
                if (b.props.threadID !== a || r)
                    return;
                b.trackBottomIfRequired()
            };
            v[a] = c;
            return c
        }
        ;
        d.$38 = function(a) {
            b("promiseDone")(b("JSResource")("MessengerSolidReactionDialogReact.re").__setRef("MessengerConversation.react").load().then(function(c) {
                var d = c.make;
                b("MessengerDialogs.re").showDialog(function() {
                    return k.jsx(d, {
                        isSolid: a
                    })
                })
            }))
        }
        ;
        d.$21 = function() {
            var a = this;
            b("DOM").scry(b("ReactDOM").findDOMNode(this), "img").forEach(function(c) {
                if (c.complete)
                    return;
                var d = a.props.threadID
                  , e = b("Event").listen(c, "load", function() {
                    (a.props.threadID === d || r) && a.trackBottomIfRequired(),
                    e.remove()
                })
            })
        }
        ;
        d.$48 = function() {
            var a = this.props.messages
              , b = this.state.unreadCount;
            return !b || b > a.size ? null : a.get(a.size - b)
        }
        ;
        d.$26 = function(a) {
            var b = this
              , c = this.props.messages
              , d = this.$48();
            if (!d)
                return !1;
            var e = a.getElement().getBoundingClientRect();
            return c.filter(function(a) {
                return a && a.timestamp <= d.timestamp
            }).some(function(a) {
                a = b.refs.messageList.getMessageElement(a.message_id);
                if (!a)
                    return !1;
                a = a.getBoundingClientRect();
                return a.bottom > e.top && a.top < e.bottom
            })
        }
        ;
        d.$25 = function() {
            if (q && this.state.unreadCount < p) {
                var a;
                this.refs.scrollable && this.refs.scrollable.overrideTrackBottom(!1);
                a = (a = this.refs.messageList) == null ? void 0 : a.getNewMessageDivider();
                var c = this.$19();
                if (!a || !c)
                    return !1;
                a = a.getBoundingClientRect().top;
                var d = b("ReactDOM").findDOMNode(this.refs.messageList).getBoundingClientRect().top
                  , e = c.getElement().getBoundingClientRect();
                if (a < e.top) {
                    a = a + Math.abs(d) - e.height * .2;
                    c.setScrollTop(a, !1);
                    this.setState({
                        renderScrollToBottom: !0,
                        unreadCount: 0
                    });
                    return !0
                }
            }
            return !1
        }
        ;
        d.$22 = function(a) {
            var b = this;
            if (!this.state.unreadCount)
                return;
            this.setState({
                scrollingToUnreadMessage: !0
            });
            var c = this.$48();
            if (!c) {
                this.scrollToTop(!1);
                return
            }
            this.$24(c.message_id, a, function() {
                b.setState({
                    scrollingToUnreadMessage: !1,
                    unreadCount: 0
                })
            })
        }
        ;
        d.$24 = function(a, c, d) {
            this.refs.scrollable && this.refs.scrollable.overrideTrackBottom(!1);
            a = this.refs.messageList.getMessageElement(a, !0);
            var e = this.$19();
            if (!a || !e)
                return;
            a = a.getBoundingClientRect().top;
            var f = b("ReactDOM").findDOMNode(this.refs.messageList).getBoundingClientRect().top
              , g = e.getElement().getBoundingClientRect().height;
            a = a + Math.abs(f) - g / 2;
            e.setScrollTop(a, c, {
                callback: d
            })
        }
        ;
        d.$19 = function() {
            if (!this.refs)
                return;
            return this.refs.scrollable && this.refs.scrollable.getArea()
        }
        ;
        d.$18 = function() {
            this.$3 && this.$3.unsubscribe(),
            this.$3 = null
        }
        ;
        d.$49 = function() {
            return this.props.messages.filter(function(a) {
                return b("MessengerAttachmentRenderer").isSingleVideoAttachment(a) || b("MessengerAttachmentRenderer").isSharedVideoAttachmentMessage(a)
            }).reverse().map(function(a) {
                return a.message_id
            })
        }
        ;
        d.$46 = function(a) {
            var c = this.refs.messageList;
            if (!c || !a)
                return;
            var d = [];
            a = a.getElement().getBoundingClientRect();
            var e = b("MessengerVideoAutoplayStore").getMessageIDs(this.props.threadID)
              , f = e || this.$49() || b("immutable").List();
            f.map(function(a) {
                var e = b("MessengerAttachmentRenderer").getVideoElem(a, c);
                e && d.push([a, e.getBoundingClientRect()])
            });
            d.length && b("MessengerVideoAutoplayActions").onScroll(this.props.threadID, e ? null : f, b("immutable").Map(d), a)
        }
        ;
        d.$50 = function() {
            return this.props.messages.filter(function(a) {
                return b("MessengerAttachmentRenderer").isSingleSphericalPhotoAttachment(a)
            }).map(function(a) {
                return a.message_id
            })
        }
        ;
        d.$47 = function(a) {
            var c = this;
            b("ifRequired")("MessengerSphericalRendererActions", function(d) {
                b("ifRequired")("MessengerSphericalRendererStore", function(e) {
                    var f = c.refs.messageList;
                    if (!f || !a)
                        return;
                    var g = []
                      , h = a.getElement().getBoundingClientRect();
                    e = e.getMessageIDs(c.props.threadID);
                    e = e || c.$50() || b("immutable").List();
                    e.map(function(a) {
                        var c = b("MessengerAttachmentRenderer").getSphericalPhotoElem(a, f);
                        c && g.push([a, c.getBoundingClientRect()])
                    });
                    g.length && d.onScroll(c.props.threadID, e, b("immutable").Map(g), h)
                }, function() {})
            }, function() {})
        }
        ;
        d.$23 = function() {
            var a = this;
            b("MessengerVideoAutoplayActions").updateStore(this.props.threadID, this.$49());
            var c = this.$50();
            c && c.count() !== 0 && b("ifRequired")("MessengerSphericalRendererActions", function(b) {
                b.updateStore(a.props.threadID, c)
            }, function() {
                b("Bootloader").loadModules(["MessengerSphericalRendererActions", "MessengerSphericalRendererStore"], function(b, d) {
                    b.updateStore(a.props.threadID, c)
                }, "MessengerConversation.react")
            })
        }
        ;
        d.$36 = function() {
            if (b("CurrentUser").isWorkUser())
                return !1;
            return this.props.messages.size !== 0 ? !1 : !0
        }
        ;
        return c
    }(k.PureComponent);
    e.exports = a;
    a.propTypes = {
        contact: (c = b("prop-types")).instanceOf(b("ImmutableObject")),
        deliveryTimestamp: c.number.isRequired,
        downExhausted: c.bool,
        fetchMessages: c.func.isRequired,
        hideContextBanner: c.bool,
        innerClassName: c.string,
        isCanonical: c.bool,
        isLoaded: c.bool,
        isLoading: c.bool,
        isMessengerAdPreview: c.bool,
        messages: c.instanceOf(b("immutable").List).isRequired,
        onVoiceClipCreate: c.func,
        onReplyToMessage: c.func,
        readReceipts: c.any,
        thread: c.object,
        threadID: c.string.isRequired,
        upExhausted: c.bool,
        useM4QR: c.bool,
        useManualFetch: c.bool,
        viewer: c.string.isRequired,
        selectedMessage: c.string,
        isSearchResult: c.bool
    };
    function w(a) {
        var c = b("MercuryIDs").getParticipantIDFromUserID(a.viewer)
          , d = b("MessengerReadReceipt.re").getSeenTimestamps(a.readReceipts, a.threadID)
          , e = new Set(a.thread ? a.thread.participants : d.keys());
        e["delete"](c);
        c = a.messages.findLast(function(a) {
            return (a == null ? void 0 : a.action_type) !== "ma-type:log-message" || (a == null ? void 0 : (a = a.log_message_data) == null ? void 0 : a.message_type) === "messenger_call_log"
        });
        var f = (c == null ? void 0 : c.timestamp) || Infinity;
        return d.withMutations(function(c) {
            b("immutable").Seq(a.messages).reverse().forEach(function(a) {
                if (e.size === 0)
                    return !1;
                if (!e.has(a.author))
                    return;
                if (a.action_type === "ma-type:log-message")
                    return;
                c.update(a.author, function(b) {
                    if (!b)
                        return b;
                    if (f < b.watermark)
                        return x(f);
                    else if (b.watermark <= a.timestamp)
                        return x(a.timestamp);
                    return b
                });
                e["delete"](a.author)
            })
        }).sortBy(function(a) {
            return a.watermark
        })
    }
    function x(a) {
        return {
            watermark: a,
            action: a
        }
    }
    function y(a, c) {
        var d = b("MercuryIDs").getParticipantIDFromUserID(c.viewer);
        return c.threadID === a.threadID && c.messages !== a.messages && !c.messages.isEmpty() && c.messages.last() !== a.messages.last() && c.messages.last().author === d && (!r || !a.isLoading)
    }
}
), null);
__d("MessengerRadioButtonReact.bs", ["cx", "React", "bs_caml_option", "XUIRadioInput.react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function a(a) {
        var c = {
            checked: a.checked,
            className: "__rm",
            disabled: a.disabled,
            name: a.name,
            onChange: a.onChange,
            value: a.value
        };
        a = b("bs_caml_option").undefined_to_opt(a.id);
        a !== void 0 && (c.id = b("bs_caml_option").valFromOption(a));
        return h.createElement(b("XUIRadioInput.react"), c)
    }
    f.make = a
}
), null);
__d("MessengerRadioList.react", ["invariant", "InputLabel_DEPRECATED.react", "InputLabelLabel_DEPRECATED.react", "MessengerRadioButtonReact.bs", "React", "prop-types"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.$1 = function(a) {
                a.target instanceof HTMLInputElement || g(0, 761),
                c.props.onSelect && c.props.onSelect(c.props.value)
            }
            ,
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.render = function() {
            return h.jsx("li", {
                className: this.props.className,
                children: h.jsxs(b("InputLabel_DEPRECATED.react"), {
                    display: "inline",
                    children: [h.jsx(b("MessengerRadioButtonReact.bs").make, {
                        checked: this.props.selectedValue === this.props.value,
                        disabled: !!this.props.disabled,
                        name: this.props.name,
                        onChange: this.$1,
                        value: this.props.value
                    }), h.jsx(b("InputLabelLabel_DEPRECATED.react"), {
                        children: this.props.children
                    })]
                })
            })
        }
        ;
        return c
    }(h.Component);
    a.propTypes = {
        disabled: (c = b("prop-types")).bool,
        name: c.string,
        onSelect: c.func,
        selectedValue: c.any,
        value: c.any
    };
    d = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        var c = b.prototype;
        c.render = function() {
            var a = h.Children.map(this.props.children, function(a) {
                return h.cloneElement(a, {
                    name: this.props.name,
                    onSelect: this.props.onValueChange,
                    selectedValue: this.props.selectedValue
                })
            }, this);
            return h.jsx("ul", babelHelpers["extends"]({}, this.props, {
                name: null,
                children: a
            }))
        }
        ;
        return b
    }(h.Component);
    e.exports = d;
    d.propTypes = {
        name: c.string,
        onValueChange: c.func,
        selectedValue: c.any
    };
    d.Item = a
}
), null);
__d("MessengerQuickCamButtonBootLoader.react", ["AutoFocusableLink.react", "JSResource", "LazyComponent.react", "MercuryBootloadOnInteraction.react", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props;
            return !a.htmlQC ? null : g.jsx(b("MercuryBootloadOnInteraction.react"), {
                component: g.jsx(b("LazyComponent.react"), babelHelpers["extends"]({}, a)),
                loader: b("JSResource")("MessengerQuickCamButtonHTML5.react").__setRef("MessengerQuickCamButtonBootLoader.react"),
                placeholder: a.placeholder || g.jsx(b("AutoFocusableLink.react"), {
                    label: "flyout button",
                    className: a.className
                })
            })
        }
        ;
        return c
    }(g.PureComponent);
    e.exports = a
}
), null);
__d("MercuryMessageBodyReact.bs", ["ReasonReact.bs", "MercuryMessageBody.react"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a, c) {
        return b("ReasonReact.bs").wrapJsForReason(b("MercuryMessageBody.react"), {
            body: a
        }, c)
    }
    f.make = a
}
), null);
__d("MessengerBarChartIconSVGM4React.bs", ["cx", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function a(a) {
        return h.jsx("svg", {
            children: h.jsx("g", {
                children: h.jsx("g", {
                    children: h.jsx("path", {
                        id: "Fill-1",
                        d: "M13,25.9966 L13,15.9966 C13,14.8921 12.1045,13.9966 11,13.9966 L9,13.9966 C7.8955,13.9966 7,14.8921 7,15.9966 L7,25.9966 C7,27.1011 7.8955,27.9966 9,27.9966 L11,27.9966 C12.1045,27.9966 13,27.1011 13,25.9966 M23,11.9966 L23,25.9966 C23,27.1011 23.8955,27.9966 25,27.9966 L27,27.9966 C28.1045,27.9966 29,27.1011 29,25.9966 L29,11.9966 C29,10.8921 28.1045,9.9966 27,9.9966 L25,9.9966 C23.8955,9.9966 23,10.8921 23,11.9966 M15,7.9966 L15,25.9966 C15,27.1011 15.8955,27.9966 17,27.9966 L19,27.9966 C20.1045,27.9966 21,27.1011 21,25.9966 L21,7.9966 C21,6.8921 20.1045,5.9966 19,5.9966 L17,5.9966 C15.8955,5.9966 15,6.8921 15,7.9966"
                    }),
                    id: "Group",
                    fill: a
                }),
                fill: "none",
                fillRule: "evenodd"
            }),
            className: "_7oal",
            height: "36px",
            width: "36px",
            viewBox: "0 0 36 36"
        })
    }
    f.make = a
}
), null);
__d("MessengerBlockDialogReact.bs", ["cx", "fbt", "bs_block", "bs_curry", "React", "Link.react", "bs_belt_Option", "bs_caml_option", "CurrentUser", "ReasonReact.bs", "MessengerDialog.react", "IgnoreMessagesTypedLogger", "MessengerDialogBody.react", "MessengerDialogHeaderReact.bs", "MessengerDialogButton.react", "MessengerDialogFooter.react", "MessengerDialogCancelButton.react"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React")
      , j = b("ReasonReact.bs").reducerComponent("MessengerBlockDialogReact");
    function k(a, c) {
        return i.jsx("div", {
            children: h._("N\u1ebfu mu\u1ed1n, b\u1ea1n c\u0169ng c\u00f3 th\u1ec3 {link}", [h._param("link", i.jsx(b("Link.react"), {
                href: c,
                target: "_blank",
                children: h._("ch\u1eb7n {short_name_or_description} tr\u00ean Facebook.", [h._param("short_name_or_description", b("bs_belt_Option").getWithDefault(a, h._("ng\u01b0\u1eddi n\u00e0y")))])
            }))]),
            className: "_1q73"
        })
    }
    function l(a, c, d, e) {
        return {
            debugName: j.debugName,
            reactClassInternal: j.reactClassInternal,
            handedOffState: j.handedOffState,
            getDerivedStateFromProps: j.getDerivedStateFromProps,
            didMount: j.didMount,
            didUpdate: j.didUpdate,
            willUnmount: j.willUnmount,
            shouldUpdate: j.shouldUpdate,
            render: function(a) {
                if (c !== void 0) {
                    var e = b("bs_caml_option").valFromOption(c);
                    e = [e.short_name, b("CurrentUser").isMessengerOnlyUser() || b("CurrentUser").isWorkUser() ? void 0 : b("bs_caml_option").nullable_to_opt(e.href)]
                } else
                    e = [void 0, void 0];
                var f = e[1];
                e = e[0];
                if (!(d == null)) {
                    var g = new (b("IgnoreMessagesTypedLogger"))().setEvent("block_clicked").setThreadID(d).setPlatform("messengerdotcom");
                    g.log()
                }
                g = b("CurrentUser").isWorkUser() ? "https://www.workplace.com/help/work/2201185726805642" : "https://www.facebook.com/help/389645087895231";
                return i.jsxs(b("MessengerDialog.react"), {
                    shown: a.state.shown,
                    children: [i.createElement(b("MessengerDialogHeaderReact.bs").make, {
                        children: h._("Ch\u1eb7n tin nh\u1eafn")
                    }), i.jsxs(b("MessengerDialogBody.react"), {
                        children: [i.jsx("div", {
                            children: h._({
                                "Workplace Chat": "Stop getting messages and calls from {short_name_or_description} in Workplace Chat.",
                                "Messenger": "D\u1eebng nh\u1eadn tin nh\u1eafn v\u00e0 cu\u1ed9c g\u1ecdi t\u1eeb {short_name_or_description} trong Messenger."
                            }, [h._param("short_name_or_description", b("bs_belt_Option").getWithDefault(e, h._("ng\u01b0\u1eddi n\u00e0y"))), h._enum(b("CurrentUser").isWorkUser() ? "Workplace Chat" : "Messenger", {
                                "Workplace Chat": "Workplace Chat",
                                Messenger: "Messenger"
                            })]),
                            className: "_1q73"
                        }), f !== void 0 ? k(e, f) : null, i.jsx("div", {
                            children: i.jsx(b("Link.react"), {
                                href: g,
                                target: "_blank",
                                children: h._("T\u00ecm hi\u1ec3u th\u00eam")
                            })
                        })]
                    }), i.jsxs(b("MessengerDialogFooter.react"), {
                        children: [i.jsx(b("MessengerDialogCancelButton.react"), {}), i.jsx(b("MessengerDialogButton.react"), {
                            label: h._("Ch\u1eb7n tin nh\u1eafn"),
                            onClick: function(c) {
                                return b("bs_curry")._1(a.send, 0)
                            },
                            type: "primary",
                            use: "danger"
                        })]
                    })]
                })
            },
            initialState: function(a) {
                return {
                    shown: !0
                }
            },
            retainedProps: j.retainedProps,
            reducer: function(c, d) {
                return b("bs_block").__(2, [{
                    shown: !1
                }, function(c) {
                    return b("bs_curry")._1(a, 0)
                }
                ])
            },
            jsElementWrapped: j.jsElementWrapped
        }
    }
    a = b("ReasonReact.bs").wrapReasonForJs(j, function(a) {
        return l(a.onBlock, b("bs_caml_option").nullable_to_opt(a.contact), a.threadID, [])
    });
    c = b("bs_belt_Option").getWithDefault;
    f.$pipe$question = c;
    f.component = j;
    f.renderBlockOnFacebook = k;
    f.make = l;
    f.jsComponent = a
}
), null);
__d("MNBotsLoggerEvents", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        BOT_COMPOSER_MENU_ICON_DISPLAYED: "bot_composer_menu_icon_displayed",
        BOT_COMPOSER_MENU_ICON_TAPPED: "bot_composer_menu_icon_tapped",
        BOT_COMPOSER_MENU_ITEM_DID_SELECT: "bot_composer_menu_item_did_select",
        BOT_COMPOSER_QUICK_REPLY_DISPLAYED: "bot_composer_quick_reply_displayed",
        BOT_COMPOSER_QUICK_REPLY_TAPPED: "bot_composer_quick_reply_tapped"
    });
    e.exports = a
}
), null);
__d("MessengerContextualDialogReact.bs", ["bs_curry", "ReasonReact.bs", "bs_js_null_undefined", "MessengerContextualDialog.react"], (function(a, b, c, d, e, f) {
    "use strict";
    function g(a) {
        if (a !== void 0)
            switch (a) {
            case 0:
                return "center";
            case 1:
                return "left";
            case 2:
                return "right"
            }
    }
    function a(a, c, d, e, f, h, i, j, k) {
        if (d !== void 0) {
            var l = d;
            d = function(a) {
                return b("bs_js_null_undefined").fromOption(b("bs_curry")._1(l, 0))
            }
        } else
            d = function(a) {
                return
            }
            ;
        return b("ReasonReact.bs").wrapJsForReason(b("MessengerContextualDialog.react"), {
            alignment: b("bs_js_null_undefined").fromOption(g(a)),
            className: b("bs_js_null_undefined").fromOption(c),
            contextRef: d,
            offsetY: b("bs_js_null_undefined").fromOption(f),
            onBlur: b("bs_js_null_undefined").fromOption(e),
            onToggle: h,
            shown: b("bs_js_null_undefined").fromOption(i),
            width: b("bs_js_null_undefined").fromOption(j)
        }, k)
    }
    f.stringOfAlignment = g;
    f.make = a
}
), null);
__d("MessengerFlyoutPlaceholderReact.bs", ["React", "XUISpinner.react"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a) {
        a = {
            padding: "30px",
            textAlign: "center"
        };
        return g.jsx("div", {
            children: g.jsx(b("XUISpinner.react"), {
                size: "large"
            }),
            style: a
        })
    }
    c = a;
    f.make = c
}
), null);
__d("MessengerFlyoutButtonReact.bs", ["cx", "bs_curry", "React", "bs_belt_Option", "bs_caml_option", "ReasonReact.bs", "joinClasses", "AutoFocusableLink.react", "MessengerContextualDialogReact.bs", "MessengerFlyoutPlaceholderReact.bs"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function a(a, c) {
        var d = a.className
          , e = a.createFlyout
          , f = a.dialogClassName
          , g = a.disabled
          , i = a.flyoutAlignment
          , j = a.flyoutWidth
          , k = a.getInput
          , l = a.icon
          , m = a.onClick
          , n = a.onHideFlyout
          , o = a.title;
        a = a.testid;
        c = c;
        g = g !== void 0 ? g : !1;
        var p = h.useRef(null)
          , q = h.useState(function() {
            return !1
        })
          , r = q[1]
          , s = q[0];
        q = h.useState(function() {
            return !1
        });
        var t = q[1]
          , u = q[0]
          , v = h.useCallback(function(a) {
            a = b("bs_curry")._1(k, 0);
            if (a == null)
                return 0;
            else
                return a.focus()
        }, [k])
          , w = h.useCallback(function(a) {
            b("bs_curry")._1(v, 0);
            b("bs_curry")._1(t, function(a) {
                return !1
            });
            if (n !== void 0)
                return b("bs_curry")._1(n, 0);
            else
                return 0
        }, [v, t, n]);
        h.useImperativeHandle(c, function() {
            return {
                hideFlyout: w
            }
        }, [w]);
        q = function(a) {
            a.stopPropagation();
            if (s)
                return b("bs_curry")._1(r, function(a) {
                    return !1
                });
            else {
                b("bs_curry")._1(t, function(a) {
                    return !a
                });
                if (m !== void 0)
                    return b("bs_curry")._1(m, a);
                else
                    return 0
            }
        }
        ;
        c = h.jsx(h.Suspense, {
            children: b("bs_curry")._2(e, w, u),
            fallback: h.jsx(b("MessengerFlyoutPlaceholderReact.bs").make, {})
        });
        e = u ? b("ReasonReact.bs").element("contextualDialog", void 0, b("MessengerContextualDialogReact.bs").make(i !== void 0 ? i : 1, b("bs_belt_Option").getWithDefault(f, ""), function(a) {
            return b("bs_belt_Option").map(b("bs_caml_option").nullable_to_opt(p.current), function(a) {
                return a
            })
        }, w, 10, function(a) {
            return b("bs_curry")._1(t, function(b) {
                return a
            })
        }, u, b("bs_belt_Option").getWithDefault(j, 278), c)) : null;
        if (g)
            return h.jsx("div", {
                children: l,
                className: d
            });
        else {
            i = {
                "aria-label": o,
                autoFocus: !1,
                children: h.jsxs(h.Fragment, {
                    children: [l, e]
                }),
                className: b("joinClasses")(d, u ? "open" : ""),
                href: "#",
                onMouseDown: function(a) {
                    return b("bs_curry")._1(r, function(a) {
                        return u
                    })
                },
                onClick: q,
                ref: p,
                role: "button",
                title: o
            };
            a !== void 0 && (i["data-testid"] = b("bs_caml_option").valFromOption(a));
            return h.jsx(b("AutoFocusableLink.react"), i)
        }
    }
    c = h.forwardRef(a);
    d = 278;
    f.cFLYOUT_WIDTH = d;
    f.make = c
}
), null);
__d("MessengerMoreIconSVGM4React.bs", ["cx", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function a(a) {
        return h.jsx("svg", {
            children: h.jsx("g", {
                children: h.jsxs("g", {
                    children: [h.jsx("polygon", {
                        points: "0 36 36 36 36 0 0 0"
                    }), h.jsx("path", {
                        d: "M7.5,9 L28.5,9 C29.3284271,9 30,9.67157288 30,10.5 C30,11.3284271 29.3284271,12 28.5,12 L7.5,12 C6.67157288,12 6,11.3284271 6,10.5 C6,9.67157288 6.67157288,9 7.5,9 Z M7.5,16.5 L28.5,16.5 C29.3284271,16.5 30,17.1715729 30,18 C30,18.8284271 29.3284271,19.5 28.5,19.5 L7.5,19.5 C6.67157288,19.5 6,18.8284271 6,18 C6,17.1715729 6.67157288,16.5 7.5,16.5 Z M7.5,24 L28.5,24 C29.3284271,24 30,24.6715729 30,25.5 C30,26.3284271 29.3284271,27 28.5,27 L7.5,27 C6.67157288,27 6,26.3284271 6,25.5 C6,24.6715729 6.67157288,24 7.5,24 Z",
                        fill: a
                    })]
                }),
                fill: "none",
                fillRule: "evenodd"
            }),
            className: "_7oal",
            height: "36px",
            width: "36px",
            viewBox: "0 0 36 36"
        })
    }
    f.make = a
}
), null);
__d("MessengerBotMenuButtonReact.bs", ["bs_curry", "React", "JSResource", "lazyLoadComponent", "MNBotsLoggerEvents", "MessengerFlyoutButtonReact.bs", "MessengerBotMenuDataFetcher", "MessengerBotsWebTypedLogger", "MessengerMoreIconSVGM4React.bs", "MessengerBusinessPersistentMenuUpdateSubscriptionHandler.react"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = b("lazyLoadComponent")(b("JSResource")("MessengerBotMenuDialog.react").__setRef("MessengerBotMenuButtonReact.bs"));
    function a(a) {
        var c = a.className
          , d = a.fill
          , e = a.flyoutAlignment
          , f = a.getInput
          , i = a.pageId
          , j = a.threadId;
        a = g.useState(function() {
            return !1
        });
        var k = a[1]
          , l = a[0];
        a = g.useState(function() {
            return
        });
        var m = a[1]
          , n = a[0];
        g.useEffect(function() {
            new (b("MessengerBotsWebTypedLogger"))().setEvent(b("MNBotsLoggerEvents").BOT_COMPOSER_MENU_ICON_DISPLAYED).setPageID(i).log();
            return
        }, [i]);
        a = function(a) {
            if (n !== void 0)
                return 0;
            else {
                b("bs_curry")._1(k, function(a) {
                    return !0
                });
                b("MessengerBotMenuDataFetcher").getMenuItems(i, function(a) {
                    b("bs_curry")._1(m, function(b) {
                        return a
                    });
                    return b("bs_curry")._1(k, function(a) {
                        return !1
                    })
                }, function(a) {
                    b("bs_curry")._1(m, function(a) {
                        return []
                    });
                    return b("bs_curry")._1(k, function(a) {
                        return !1
                    })
                });
                return 0
            }
        }
        ;
        var o = function(a) {
            b("MessengerBotMenuDataFetcher").setMenuItemsCache(i, a);
            b("bs_curry")._1(m, function(b) {
                return a
            });
            return b("bs_curry")._1(k, function(a) {
                return !1
            })
        }
          , p = function(a, b) {
            return g.createElement(h, {
                onEscKeyDown: a,
                shown: b,
                isLoading: l,
                menuItems: n,
                pageID: i,
                threadID: j,
                onClick: a
            })
        };
        return g.jsxs("div", {
            children: [g.jsx(b("MessengerFlyoutButtonReact.bs").make, {
                className: c,
                createFlyout: p,
                flyoutAlignment: e,
                getInput: f,
                icon: b("MessengerMoreIconSVGM4React.bs").make(d),
                onClick: a,
                title: "",
                ref: function(a) {
                    return {
                        contents: a
                    }
                }
            }), g.jsx(b("MessengerBusinessPersistentMenuUpdateSubscriptionHandler.react"), {
                pageID: i,
                onUpdate: o
            })]
        })
    }
    c = a;
    f.bootloadedBotMenuFlyout = h;
    f.make = c
}
), null);
__d("MessengerCameraIconSVGM4React.bs", ["cx", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function a(a) {
        return h.jsx("svg", {
            children: h.jsx("g", {
                children: h.jsxs("g", {
                    children: [h.jsx("polygon", {
                        points: "0 36 36 36 36 0 0 0"
                    }), h.jsx("path", {
                        d: "M18.01125,23.50245 C15.52875,23.50745 13.51225,21.49495 13.50775,19.00845 C13.50275,16.52145 15.51175,14.50195 17.99425,14.49695 C20.47675,14.49245 22.49325,16.50445 22.49775,18.99145 C22.50225,21.47795 20.49375,23.49745 18.01125,23.50245 M17.99825,12.49945 C14.40825,12.50695 11.50325,15.42245 11.51025,19.01245 C11.51675,22.60195 14.43275,25.50695 18.02275,25.49995 C21.61275,25.49295 24.51775,22.57745 24.51125,18.98795 C24.50425,15.39745 21.58825,12.49295 17.99825,12.49945 M26.50025,28.99995 L9.50025,28.99995 C7.29125,28.99995 5.50025,27.20895 5.50025,24.99995 L5.50025,13.99995 C5.50025,11.79095 7.29125,9.99995 9.50025,9.99995 L10.00025,9.99995 C10.96025,9.99995 11.88175,9.61845 12.56075,8.93945 L13.43925,8.06045 C14.11825,7.38195 15.03975,6.99995 16.00025,6.99995 L20.00025,6.99995 C20.96025,6.99995 21.88175,7.38195 22.56075,8.06045 L23.43925,8.93945 C24.11825,9.61845 25.03975,9.99995 26.00025,9.99995 L26.50025,9.99995 C28.70925,9.99995 30.50025,11.79095 30.50025,13.99995 L30.50025,24.99995 C30.50025,27.20895 28.70925,28.99995 26.50025,28.99995",
                        fill: a
                    })]
                }),
                fill: "none",
                fillRule: "evenodd"
            }),
            className: "_7oal",
            height: "36px",
            width: "36px",
            viewBox: "0 0 36 36"
        })
    }
    f.make = a
}
), null);
__d("MessengerConfirmBlockThreadDialogReact.bs", ["fbt", "React", "ReasonReact.bs", "MessengerDialogs.bs", "MessengerDialogReact.bs", "MessengerDialogBodyReact.bs", "MessengerDialogHeaderReact.bs"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function a(a) {
        a = a.participantName;
        var c = function(a) {
            if (a)
                return 0;
            else
                return b("MessengerDialogs.bs").removeDialog(void 0, 0)
        }
          , d = function(a) {
            return c(!1)
        };
        return b("ReasonReact.bs").element(void 0, void 0, b("MessengerDialogReact.bs").Dialog.make(void 0, void 0, c, void 0, void 0, void 0, void 0, void 0, void 0, void 0, [h.createElement(b("MessengerDialogHeaderReact.bs").make, {
            children: g._("B\u1ea1n \u0111\u00e3 ch\u1eb7n {sender name}", [g._param("sender name", a)])
        }), h.createElement(b("MessengerDialogBodyReact.bs").make, {
            children: g._("B\u1ea1n c\u00f3 th\u1ec3 ti\u1ebfp c\u1eadn nh\u1eefng ng\u01b0\u1eddi m\u00ecnh \u0111\u00e3 ch\u1eb7n b\u1eb1ng c\u00e1ch \u0111i t\u1edbi danh s\u00e1ch Tin nh\u1eafn \u0111\u00e3 l\u1ecdc.")
        }), b("ReasonReact.bs").element(void 0, void 0, b("MessengerDialogReact.bs").Footer.make(void 0, void 0, [b("ReasonReact.bs").element(void 0, void 0, b("MessengerDialogReact.bs").Button.make(void 0, g._("OK"), void 0, void 0, d, 1, void 0, void 0, void 0, []))]))]))
    }
    c = a;
    f.make = c
}
), null);
__d("MessengerMessageRequestsTypedLogger.bs", ["MessengerMessageRequestsTypedLogger"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a) {
        return new (b("MessengerMessageRequestsTypedLogger"))()
    }
    f.make = a
}
), null);
__d("MessengerComposerPendingActionsM4React.bs", ["React", "bs_caml_obj", "MercuryIDs", "bs_caml_option", "CurrentUser", "ReasonReact.bs", "MessengerActions", "MessengerDialogs.bs", "MessengerURIStore", "MessageRequestUtils", "MercuryThreadActions", "MessengerParticipants.bs", "MessengerBlockDialogReact.bs", "MessengerMessageRequestsTypedLogger.bs", "MessengerComposerPendingActions.react", "MessengerConfirmBlockThreadDialogReact.bs"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a) {
        return b("MercuryThreadActions").getForFBID(a)
    }
    function h(a, c, d) {
        b("MessengerDialogs.bs").showDialog(function(a) {
            return g.jsx(b("MessengerConfirmBlockThreadDialogReact.bs").make, {
                participantName: d
            })
        });
        var e = b("MercuryIDs").getThreadKeyfromThreadIDUserID(c, b("CurrentUser").getID());
        b("MessengerMessageRequestsTypedLogger.bs").make(0).setAction("message_requests_block_request").setThreadID(b("MercuryIDs").getThreadFBIDFromThreadID(c)).setSurface("thread").setFolderType(b("MessageRequestUtils").isFiltered(a) ? "other" : "pending").setThreadKey(e).setEntryPoint(void 0).log();
        return 0
    }
    function i(a, c, d, e) {
        var f = b("bs_caml_obj").caml_equal(b("MessengerURIStore").getState().activeThreadID, d);
        b("MercuryThreadActions").getForFBID(a).blockIgnoreOnMessengerDotCom(f, d, function(a) {
            return h(c, d, e)
        });
        return 0
    }
    function j(a, c, d, e) {
        b("MercuryThreadActions").getForFBID(a)["delete"](d, null);
        b("MessengerActions").selectThread(null, null);
        e = b("MercuryIDs").getThreadKeyfromThreadIDUserID(d, b("CurrentUser").getID());
        b("MessengerMessageRequestsTypedLogger.bs").make(0).setAction("message_requests_delete_request").setThreadID(b("MercuryIDs").getThreadFBIDFromThreadID(d)).setSurface("thread").setFolderType(b("MessageRequestUtils").isFiltered(c) ? "other" : "pending").setThreadKey(e).setEntryPoint("inbox_banner").log();
        return 0
    }
    function k(a, c, d) {
        if (d)
            return 0;
        else {
            d = b("MercuryIDs").getThreadKeyfromThreadIDUserID(c, b("CurrentUser").getID());
            b("MessengerMessageRequestsTypedLogger.bs").make(0).setAction("message_requests_decline_cancel").setThreadID(b("MercuryIDs").getThreadFBIDFromThreadID(c)).setSurface("thread").setFolderType(b("MessageRequestUtils").isFiltered(a) ? "other" : "pending").setThreadKey(d).setEntryPoint("inbox_banner").log();
            return 0
        }
    }
    function l(a, c, d) {
        b("MercuryThreadActions").getForFBID(a).changeFolder(c, "other");
        d = b("bs_caml_obj").caml_equal(b("MessengerURIStore").getState().activeThreadID, c);
        if (d) {
            b("MessengerActions").selectThread(null, null);
            return 0
        } else
            return 0
    }
    function m(a, c, d) {
        var e = c.thread_id;
        if (b("MercuryIDs").isGroupChat(e))
            return l(a, e, 0);
        else {
            d = c.other_user_fbid;
            if (d == null)
                return 0;
            else {
                var f = b("MessengerParticipants.bs").getNow(b("MercuryIDs").getParticipantIDFromUserID(d));
                if (f == null)
                    return 0;
                else
                    return b("MessengerDialogs.bs").showDialog(function(d) {
                        return b("ReasonReact.bs").element(void 0, void 0, b("MessengerBlockDialogReact.bs").make(function(b) {
                            return i(a, c, e, f.short_name)
                        }, b("bs_caml_option").some(f), null, []))
                    })
            }
        }
    }
    function c(a) {
        var c = a.thread
          , d = a.threadId
          , e = a.viewer;
        a = a.onAccept;
        return g.jsx(b("MessengerComposerPendingActions.react"), {
            thread: c,
            threadID: d,
            viewer: e,
            onAccept: a,
            onIgnoreBlock: function(a) {
                return m(e, c, a)
            },
            onDeleteDialogDeleteClick: function(a) {
                return j(e, c, d, a)
            },
            onDeleteDialogToggleClick: function(a) {
                return k(c, d, a)
            }
        })
    }
    d = c;
    f.getThreadActions = a;
    f.handleAfterBlock = h;
    f.handleConfirmBlock = i;
    f.handleDeleteDialogDeleteClick = j;
    f.handleDeleteDialogToggleClick = k;
    f.handleIgnore = l;
    f.handleIgnoreBlock = m;
    f.make = d
}
), null);
__d("MessengerCurrencyEURIconSVGM4React.bs", ["cx", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function a(a) {
        return h.jsx("svg", {
            children: h.jsxs("g", {
                children: [h.jsx("polygon", {
                    points: "0 36 36 36 36 0 0 0"
                }), h.jsx("path", {
                    d: "M30.5,17.5 L15.0175,17.5 C15.0075,17.6645 15,17.83 15,18 C15,18.17 15.0075,18.3355 15.0175,18.5 L30.5,18.5 C30.776,18.5 31,18.276 31,18 C31,17.724 30.776,17.5 30.5,17.5 Z M27,8 L9,8 C6.791,8 5,9.791 5,12 L5,15 C5,15.276 5.224,15.5 5.5,15.5 L12.787,15.5 C13.5795,12.2965 16.0515,10.25 20.5,10.25 C20.835,10.25 21.15,10.267 21.4265,10.291 C21.9925,10.3395 22.476,10.7855 22.499,11.3535 C22.5255,12.0045 21.9945,12.5305 21.3505,12.5065 C21.2395,12.5025 21.1225,12.5 21,12.5 C17.971,12.5 16.214,13.6625 15.454,15.5 L30.5,15.5 C30.776,15.5 31,15.276 31,15 L31,12 C31,9.791 29.209,8 27,8 Z M30.5,20.5 L15.454,20.5 C16.214,22.3375 17.971,23.5 21,23.5 C21.111,23.5 21.218,23.498 21.32,23.4945 C21.874,23.4755 22.391,23.8595 22.4835,24.4065 C22.594,25.0575 22.1335,25.644 21.5025,25.7025 C21.2085,25.7295 20.8665,25.75 20.5,25.75 C16.0515,25.75 13.5795,23.7035 12.787,20.5 L5.5,20.5 C5.224,20.5 5,20.724 5,21 L5,24 C5,26.209 6.791,28 9,28 L27,28 C29.209,28 31,26.209 31,24 L31,21 C31,20.724 30.776,20.5 30.5,20.5 Z M5.5,17.5 C5.224,17.5 5,17.724 5,18 C5,18.276 5.224,18.5 5.5,18.5 L12.5175,18.5 C12.5105,18.334 12.5,18.17 12.5,18 C12.5,17.83 12.5105,17.666 12.5175,17.5 L5.5,17.5 Z",
                    fill: a
                })],
                fill: "none",
                fillRule: "evenodd"
            }),
            className: "_7oal",
            height: "36px",
            width: "36px",
            viewBox: "0 0 36 36"
        })
    }
    f.make = a
}
), null);
__d("MessengerCurrencyGBPIconSVGM4React.bs", ["cx", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function a(a) {
        return h.jsx("svg", {
            children: h.jsxs("g", {
                children: [h.jsx("polygon", {
                    points: "0 36 36 36 36 0 0 0"
                }), h.jsx("path", {
                    d: "M27,8 L9,8 C6.791,8 5,9.791 5,12 L5,16.5 C5,16.776 5.224,17 5.5,17 L14.861,17 C14.661,16.204 14.4915,15.3075 14.4915,14.258 C14.4915,11.5845 16.4645,10 20,10 L21.9465,10 C22.4445,10 22.906,10.3405 22.9865,10.832 C23.088,11.4585 22.607,12 22,12 L20,12 C17.851,12 16.979,12.9685 16.979,14.478 C16.979,15.428 17.161,16.245 17.3695,17 L30.5,17 C30.776,17 31,16.776 31,16.5 L31,12 C31,9.791 29.209,8 27,8 M30.5,19 L17.895,19 C17.9505,19.2985 17.992,19.5965 17.992,19.898 C18.013,21.25 17.313,22.7855 16.085,23.488 L22.9355,23.488 C23.4355,23.488 23.899,23.83 23.979,24.3235 C24.0815,24.9525 23.5985,25.496 22.989,25.496 L13.511,25.496 C13.0015,25.496 12.5555,25.115 12.512,24.6075 C12.462,24.0215 12.7985,23.482 13.332,23.2585 C14.712,22.6805 15.5055,21.403 15.5145,19.9605 C15.5145,19.656 15.4615,19.3355 15.388,19 L5.5,19 C5.224,19 5,19.224 5,19.5 L5,24 C5,26.209 6.791,28 9,28 L27,28 C29.209,28 31,26.209 31,24 L31,19.5 C31,19.224 30.776,19 30.5,19",
                    fill: a
                })],
                fill: "none",
                fillRule: "evenodd"
            }),
            className: "_7oal",
            height: "36px",
            width: "36px",
            viewBox: "0 0 36 36"
        })
    }
    f.make = a
}
), null);
__d("MessengerCurrencyPENIconSVGM4React.bs", ["cx", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function a(a) {
        return h.jsx("svg", {
            children: h.jsx("g", {
                children: h.jsx("g", {
                    children: h.jsx("path", {
                        d: "M14.5,25.5 C11.638,25.5 10.3105,24.3635 9.6655,23.2965 C9.189,22.508 9.768,21.5 10.6895,21.5 C11.154,21.5 11.5605,21.765 11.806,22.1595 C12.2805,22.9205 13.185,23.484 14.605,23.484 C16.42,23.484 17.5,22.5775 17.5,21.2695 C17.5,20.204 16.7345,19.6445 15.2235,19.276 L12.9265,18.7165 C11.0375,18.284 9.4945,17.166 9.4945,14.803 C9.4945,12.312 11.442,10.5 14.5,10.5 C17.0295,10.5 18.65,11.5585 19.3465,12.84 C19.75,13.5815 19.17,14.4845 18.325,14.4845 C17.8545,14.4845 17.4335,14.218 17.2085,13.8045 C16.7965,13.049 15.897,12.5045 14.584,12.5045 C12.9895,12.5045 11.9815,13.3265 11.9815,14.603 C11.9815,15.5205 12.58,16.164 13.891,16.4695 L16.199,17.029 C18.34,17.525 19.9765,18.548 19.9765,21.048 C19.9765,23.594 18.0625,25.5 14.5,25.5 Z M9,8 L25.686,8 C25.938,8 26.1185,8.244 26.0445,8.4855 L20.1765,27.5585 C20.095,27.8215 19.853,28 19.5785,28 L9,28 C6.791,28 5,26.209 5,24 L5,12 C5,9.791 6.791,8 9,8 Z M28.4282,9.22705 C28.5762,8.74605 29.1507,8.62105 29.4862,8.88705 C30.4057,9.61705 31.0002,10.73455 31.0002,12.00005 L31.0002,24.00005 C31.0002,26.20905 29.2092,28.00005 27.0002,28.00005 L23.1602,28.00005 C22.9082,28.00005 22.7277,27.75605 22.8017,27.51455 L28.4282,9.22705 Z"
                    }),
                    fill: a
                }),
                fill: "none",
                fillRule: "evenodd"
            }),
            className: "_7oal",
            height: "36px",
            width: "36px",
            viewBox: "0 0 36 36"
        })
    }
    f.make = a
}
), null);
__d("MessengerCurrencyPHPIconSVGM4React.bs", ["cx", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function a(a) {
        return h.jsx("svg", {
            children: h.jsxs("g", {
                children: [h.jsx("polygon", {
                    points: "0 36 36 36 36 0 0 0"
                }), h.jsx("path", {
                    d: "M30.5,15.5 L23.483,15.5 C23.4915,15.664 23.5,15.829 23.5,16 C23.5,16.1715 23.4915,16.336 23.483,16.5 L30.5,16.5 C30.776,16.5 31,16.276 31,16 C31,15.724 30.776,15.5 30.5,15.5 Z M14.9935,19.004 L18.304,19.004 C19.3015,19.004 20.0505,18.685 20.5045,18 L14.9935,18 L14.9935,19.004 Z M27,8 L9,8 C6.791,8 5,9.791 5,12 L5,13.5 C5,13.776 5.224,14 5.5,14 L12.5,14 L12.5,11.75 C12.5,11.0595 13.0595,10.5 13.75,10.5 L18.5,10.5 C20.9585,10.5 22.646,11.7565 23.25,14 L30.5,14 C30.776,14 31,13.776 31,13.5 L31,12 C31,9.791 29.209,8 27,8 Z M14.9935,16.5 L20.9685,16.5 C20.9825,16.338 21,16.1795 21,16 C21,15.82 20.983,15.662 20.969,15.5 L14.9935,15.5 L14.9935,16.5 Z M30.5,18 L23.2515,18 C22.6485,20.25 20.96,21.5 18.5,21.5 L15,21.5 L15,24.25 C15,24.983 14.3695,25.5685 13.621,25.4935 C12.9705,25.4285 12.5,24.8325 12.5,24.1785 L12.5,18 L5.5,18 C5.224,18 5,18.2235 5,18.5 L5,24 C5,26.209 6.791,28 9,28 L27,28 C29.209,28 31,26.209 31,24 L31,18.5 C31,18.2235 30.776,18 30.5,18 Z M5.5,16.5 L12.5,16.5 L12.5,15.5 L5.5,15.5 C5.224,15.5 5,15.724 5,16 C5,16.276 5.224,16.5 5.5,16.5 Z M18.304,13.0005 L14.9935,13.0005 L14.9935,14 L20.512,14 C20.0585,13.311 19.306,13.0005 18.304,13.0005 Z",
                    fill: a
                })],
                fill: "none",
                fillRule: "evenodd"
            }),
            className: "_7oal",
            height: "36px",
            width: "36px",
            viewBox: "0 0 36 36"
        })
    }
    f.make = a
}
), null);
__d("MessengerCurrencyTHBIconSVGM4React.bs", ["cx", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function a(a) {
        return h.jsx("svg", {
            children: h.jsxs("g", {
                children: [h.jsx("polygon", {
                    points: "0 36 36 36 36 0 0 0"
                }), h.jsx("path", {
                    d: "M15.4915,16.74 L17,16.74 L17,12.754 L15.4915,12.754 L15.4915,16.74 Z M16.5,8 L9,8 C6.791,8 5,9.791 5,12 L5,24 C5,26.209 6.791,28 9,28 L16.5,28 C16.7765,28 17,27.776 17,27.5 L17,25.496 L14.2505,25.496 C13.56,25.496 13.0005,24.9365 13.0005,24.246 L13.0005,11.755 C13.0005,11.0645 13.56,10.505 14.2505,10.505 L17,10.505 L17,8.5 C17,8.224 16.7765,8 16.5,8 Z M27,8 L19.5,8 C19.2235,8 19,8.224 19,8.5 L19,10.505 L19.447,10.505 C22.0425,10.505 23.5045,11.8995 23.5045,14.195 C23.5045,15.9855 22.2515,17.296 20.7455,17.479 L20.7455,17.5995 C22.5765,17.8085 23.999,19.0495 23.999,21.268 C23.999,23.898 21.967,25.448 19,25.492 L19,27.5 C19,27.776 19.2235,28 19.5,28 L27,28 C29.209,28 31,26.209 31,24 L31,12 C31,9.791 29.209,8 27,8 Z M15.4915,23.231 L17,23.231 L17,18.7325 L15.4915,18.7325 L15.4915,23.231 Z M21.0125,14.7035 C21.0125,13.505 20.2875,12.834 19,12.7675 L19,16.6715 C20.391,16.481 21.0125,15.844 21.0125,14.7035 Z M21.492,21.011 C21.492,19.6165 20.6045,18.828 19,18.7485 L19,23.18 C20.7545,23 21.492,22.2955 21.492,21.011 Z",
                    fill: a
                })],
                fill: "none",
                fillRule: "evenodd"
            }),
            className: "_7oal",
            height: "36px",
            width: "36px",
            viewBox: "0 0 36 36"
        })
    }
    f.make = a
}
), null);
__d("MessengerCurrencyUSDIconSVGM4React.bs", ["cx", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function a(a) {
        return h.jsx("svg", {
            children: h.jsx("g", {
                children: h.jsxs("g", {
                    children: [h.jsx("polygon", {
                        points: "0 36 36 36 36 0 0 0"
                    }), h.jsx("path", {
                        d: "M19.5034,28 C19.2274,28 19.0034,27.776 19.0034,27.5 L19.0034,25.435 C21.7154,25.1145 23.4769,23.556 23.4769,21.048 C23.4769,18.548 21.8399,17.5245 19.6994,17.029 L17.3914,16.47 C16.0799,16.164 15.4814,15.5205 15.4814,14.603 C15.4814,13.3265 16.4894,12.5045 18.0839,12.5045 C19.3974,12.5045 20.2964,13.0485 20.7084,13.8045 C20.9334,14.2175 21.3544,14.4845 21.8254,14.4845 C22.6699,14.4845 23.2504,13.5815 22.8469,12.8395 C22.1499,11.5585 20.7184,10.7645 19.0034,10.5565 L19.0034,8.5 C19.0034,8.224 19.2274,8 19.5034,8 L26.9999,8 C29.2094,8 30.9999,9.791 30.9999,12 L30.9999,24 C30.9999,26.209 29.2094,28 26.9999,28 L19.5034,28 Z",
                        fill: a
                    }), h.jsx("path", {
                        d: "M9,28 C6.791,28 5,26.209 5,24 L5,12 C5,9.791 6.791,8 9,8 L16.5035,8 C16.7795,8 17.0035,8.224 17.0035,8.5 L17.0035,10.583 C14.7045,10.933 12.9945,12.4 12.9945,14.803 C12.9945,17.166 14.5375,18.284 16.4265,18.7165 L18.7235,19.2755 C20.2345,19.645 21,20.204 21,21.2695 C21,22.5775 19.92,23.4835 18.105,23.4835 C16.685,23.4835 15.7805,22.9205 15.306,22.1595 C15.0605,21.765 14.654,21.5 14.1895,21.5 C13.268,21.5 12.689,22.508 13.1655,23.296 C13.8105,24.363 14.9655,25.244 17.0035,25.449 L17.0035,27.5 C17.0035,27.776 16.7795,28 16.5035,28 L9,28 Z",
                        fill: a
                    })]
                }),
                fill: "none",
                fillRule: "evenodd"
            }),
            className: "_7oal",
            height: "36px",
            width: "36px",
            viewBox: "0 0 36 36"
        })
    }
    f.make = a
}
), null);
__d("MessengerEmojiButtonReact.bs", ["fbt", "bs_curry", "React", "JSResource", "bs_caml_option", "lazyLoadComponent", "MessengerFlyoutButtonReact.bs", "MessengerReactIconSVGM4React.bs"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = b("lazyLoadComponent")(b("JSResource")("ChatEmojiFlyout.react").__setRef("MessengerEmojiButtonReact.bs"));
    function a(a, c) {
        var d = a.className
          , e = a.fill
          , f = a.flyoutAlignment
          , j = a.getInput
          , k = a.onSelect
          , l = a.sendCustomEmoji
          , m = a.threadId;
        a = a.icon;
        c = c;
        var n = function(a) {
            a = b("bs_curry")._1(j, 0);
            if (a == null)
                return 0;
            else
                return a.focus()
        }
          , o = function(a) {
            return n(0)
        }
          , p = function(a, c) {
            return h.createElement(i, {
                onCategorySelect: n,
                onEscKeyDown: a,
                onSelect: k,
                sendCustomEmoji: l,
                threadID: m,
                width: b("MessengerFlyoutButtonReact.bs").cFLYOUT_WIDTH
            })
        }
          , q = g._("Ch\u1ecdn bi\u1ec3u t\u01b0\u1ee3ng c\u1ea3m x\u00fac");
        a = a !== void 0 ? b("bs_caml_option").valFromOption(a) : b("MessengerReactIconSVGM4React.bs").makeSolid(e);
        return h.jsx(b("MessengerFlyoutButtonReact.bs").make, {
            className: d,
            createFlyout: p,
            flyoutAlignment: f,
            getInput: j,
            icon: a,
            onClick: o,
            title: q,
            testid: "m4_emoji_button",
            ref: c
        })
    }
    c = h.forwardRef(a);
    f.bootloadedEmojiFlyout = i;
    f.make = c
}
), null);
__d("MessengerFileSizeErrorDialogReact.bs", ["fbt", "React", "FBLogger", "ReasonReact.bs", "MercuryConstants", "MessengerDialogReact.bs", "MessengerDialogBodyReact.bs", "MessengerDialogHeaderReact.bs"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function i(a) {
        switch (a) {
        case "attachment-limit":
            return 3;
        case "size-exceeded":
            return 1;
        case "wrong-type":
            return 0;
        default:
            return 2
        }
    }
    function j(a) {
        switch (a) {
        case 0:
            b("FBLogger")("messenger_upload_file").warn("Uploading file has wrong type");
            return g._("Lo\u1ea1i file b\u1ea1n \u0111ang c\u1ed1 g\u1eafng \u0111\u00ednh k\u00e8m kh\u00f4ng \u0111\u01b0\u1ee3c cho ph\u00e9p. Vui l\u00f2ng th\u1eed l\u1ea1i v\u1edbi \u0111\u1ecbnh d\u1ea1ng kh\u00e1c.");
        case 1:
            b("FBLogger")("messenger_upload_file").warn("Uploading file is too large");
            return g._("File b\u1ea1n \u0111\u00e3 ch\u1ecdn qu\u00e1 l\u1edbn. K\u00edch th\u01b0\u1edbc t\u1ed1i \u0111a l\u00e0 25MB.");
        case 2:
            return null;
        case 3:
            b("FBLogger")("messenger_upload_file").warn("Attachment Limit is reached");
            return g._("B\u1ea1n c\u00f3 th\u1ec3 g\u1eedi t\u1ed1i \u0111a {max number of files} file.", [g._param("max number of files", String(b("MercuryConstants").AttachmentMaxLimit))])
        }
    }
    function k(a) {
        a = a.error;
        return b("ReasonReact.bs").element(void 0, void 0, b("MessengerDialogReact.bs").Dialog.make(void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, [h.createElement(b("MessengerDialogHeaderReact.bs").make, {
            children: g._("Kh\u00f4ng t\u1ea3i t\u1ec7p l\u00ean \u0111\u01b0\u1ee3c")
        }), h.createElement(b("MessengerDialogBodyReact.bs").make, {
            children: j(a)
        }), b("ReasonReact.bs").element(void 0, void 0, b("MessengerDialogReact.bs").Footer.make(void 0, void 0, [b("ReasonReact.bs").element(void 0, void 0, b("MessengerDialogReact.bs").Button.make(0, g._("OK"), void 0, void 0, void 0, 0, void 0, void 0, void 0, []))]))]))
    }
    function a(a) {
        return k({
            error: i(a.error)
        })
    }
    c = k;
    f.errorOfString = i;
    f.renderDialogBody = j;
    f.make = c;
    f.jsComponent = a
}
), null);
__d("MessengerGamesIconSVGM4React.bs", ["cx", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function a(a) {
        return h.jsx("svg", {
            children: h.jsx("g", {
                children: h.jsxs("g", {
                    children: [h.jsx("polygon", {
                        points: "0 36 36 36 36 0 0 0"
                    }), h.jsx("path", {
                        d: "M28,14 C26.8955,14 26,14.8955 26,16 C26,17.1045 26.8955,18 28,18 C29.1045,18 30,17.1045 30,16 C30,14.8955 29.1045,14 28,14 M24,18 C22.8955,18 22,18.8955 22,20 C22,21.1045 22.8955,22 24,22 C25.104,22 26,21.1045 26,20 C26,18.8955 25.104,18 24,18 M13,17 L11,17 L11,15 C11,14.448 10.552,14 10,14 C9.448,14 9,14.448 9,15 L9,17 L7,17 C6.448,17 6,17.448 6,18 C6,18.552 6.448,19 7,19 L9,19 L9,21 C9,21.552 9.448,22 10,22 C10.552,22 11,21.552 11,21 L11,19 L13,19 C13.552,19 14,18.552 14,18 C14,17.448 13.552,17 13,17 M25,27 L11,27 C6.0295,27 2,22.9705 2,18 C2,13.0295 6.0295,9 11,9 L25,9 C29.97,9 34,13.0295 34,18 C34,22.9705 29.97,27 25,27",
                        fill: a
                    })]
                }),
                fill: "none",
                fillRule: "evenodd"
            }),
            className: "_7oal",
            height: "36px",
            width: "36px",
            viewBox: "0 0 36 36"
        })
    }
    f.make = a
}
), null);
__d("MessengerGamesButtonReact.bs", ["fbt", "React", "JSResource", "lazyLoadComponent", "BootloaderResource", "MessengerFlyoutButtonReact.bs", "MessengerGamesIconSVGM4React.bs", "MessengerFlyoutPlaceholderReact.bs"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = b("lazyLoadComponent")(b("JSResource")("MessengerGamesFlyout.react").__setRef("MessengerGamesButtonReact.bs"));
    function a(a) {
        var c = a.className
          , d = a.fill
          , e = a.flyoutAlignment
          , f = a.getInput
          , j = a.threadId;
        a = h.useState(function() {
            return b("BootloaderResource").read(b("JSResource")("GamesQuicksilverFunnelLogger").__setRef("MessengerGamesButtonReact.bs"))
        });
        var k = a[0];
        a = function(a) {
            return k.logGameListOpen(k.getDefaultFunnelName())
        }
        ;
        var l = function(a) {
            return k.logGameListDismiss(k.getDefaultFunnelName())
        }
          , m = function(a, c) {
            return h.createElement(i, {
                placeholder: h.jsx(b("MessengerFlyoutPlaceholderReact.bs").make, {}),
                threadID: j
            })
        }
          , n = g._("Ch\u01a1i tr\u00f2 ch\u01a1i");
        return h.jsx(b("MessengerFlyoutButtonReact.bs").make, {
            className: c,
            createFlyout: m,
            flyoutAlignment: e,
            getInput: f,
            icon: b("MessengerGamesIconSVGM4React.bs").make(d),
            onClick: a,
            onHideFlyout: l,
            title: n,
            ref: function(a) {
                return {
                    contents: a
                }
            }
        })
    }
    c = a;
    f.bootloadedGameFlyout = i;
    f.make = c
}
), null);
__d("MessengerGifIconSVGM4React.bs", ["cx", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function a(a) {
        a = a.fill;
        return h.jsx("svg", {
            children: h.jsxs("g", {
                children: [h.jsx("polygon", {
                    points: "0 36 36 36 36 0 0 0"
                }), h.jsx("path", {
                    d: "M27.002,13.5 L22.502,13.5 C21.95,13.5 21.502,13.948 21.502,14.5 L21.502,21.5 C21.502,22.052 21.95,22.5 22.502,22.5 C23.054,22.5 23.502,22.052 23.502,21.5 L23.502,19.5 L26.502,19.5 C27.054,19.5 27.502,19.052 27.502,18.5 C27.502,17.948 27.054,17.5 26.502,17.5 L23.502,17.5 L23.502,15.5 L27.002,15.5 C27.554,15.5 28.002,15.052 28.002,14.5 C28.002,13.948 27.554,13.5 27.002,13.5 Z M19.502,14.5 C19.502,13.948 19.054,13.5 18.502,13.5 C17.95,13.5 17.502,13.948 17.502,14.5 L17.502,21.5 C17.502,22.052 17.95,22.5 18.502,22.5 C19.054,22.5 19.502,22.052 19.502,21.5 L19.502,14.5 Z M14.963,16.9995 L12.502,17 C11.95,17 11.502,17.448 11.502,18 C11.502,18.552 11.95,19 12.502,19 L13.8855,19 C13.7835,20.1495 13.095,21 11.829,21 C10.3875,21 9.4925,19.725 9.4925,17.95 C9.4925,16.207 10.4655,14.9785 11.886,14.9785 C12.6395,14.9785 13.109,15.3665 13.4295,15.764 C13.6765,16.0695 14,16.229 14.353,16.229 C15.0175,16.229 15.574,15.5085 15.094,14.791 C14.471,13.859 13.335,13.25 11.8795,13.25 C9.179,13.25 7.502,15.2135 7.502,17.9735 C7.502,20.7655 9.071,22.75 11.798,22.75 C14.352,22.75 16.002,20.982 16.002,17.986 C16.002,17.441 15.5365,16.9995 14.963,16.9995 Z M27,30 L17,30 C15.811,30 14.7455,29.48 14.0135,28.656 C13.6395,28.235 13.1,28 12.537,28 L9,28 C6.791,28 5,26.209 5,24 L5,10 C5,7.791 6.791,6 9,6 L19,6 C20.189,6 21.2545,6.52 21.9865,7.3435 C22.3605,7.7645 22.9,8 23.463,8 L27,8 C29.209,8 31,9.791 31,12 L31,26 C31,28.209 29.209,30 27,30 Z",
                    fill: a
                })],
                fill: "none",
                fillRule: "evenodd"
            }),
            className: "_7oal",
            height: "36px",
            width: "36px",
            viewBox: "0 0 36 36"
        })
    }
    c = a;
    f.make = c
}
), null);
__d("MessengerGifButtonReact.bs", ["fbt", "bs_curry", "React", "JSResource", "lazyLoadComponent", "MessengerFlyoutButtonReact.bs", "MessengerGifIconSVGM4React.bs", "MercuryShareAttachmentRenderLocations.bs"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = b("lazyLoadComponent")(b("JSResource")("ChatContentSearchFlyout.react").__setRef("MessengerGifButtonReact.bs"));
    function a(a) {
        var c = a.className
          , d = a.disabled
          , e = a.fill
          , f = a.flyoutAlignment
          , j = a.getInput
          , k = a.location
          , l = a.onSelect;
        a = function(a, c) {
            return h.createElement(i, {
                location: b("MercuryShareAttachmentRenderLocations.bs").getValue(k),
                onEscKeyDown: a,
                onSelect: function(c) {
                    b("bs_curry")._1(l, c);
                    return b("bs_curry")._1(a, 0)
                }
            })
        }
        ;
        var m = g._("Ch\u1ecdn m\u1ed9t gif");
        return h.jsx(b("MessengerFlyoutButtonReact.bs").make, {
            className: c,
            createFlyout: a,
            disabled: d,
            flyoutAlignment: f,
            getInput: j,
            icon: h.jsx(b("MessengerGifIconSVGM4React.bs").make, {
                fill: e
            }),
            title: m
        })
    }
    c = a;
    f.bootloadedGifFlyout = i;
    f.make = c
}
), null);
__d("MessengerCreatePollFlyoutBootLoader.react", ["JSResource", "LazyComponent.react", "MessengerSpinner.react", "React", "ReasonBootloadOnRender.react", "ReasonResource"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            return g.jsx(b("ReasonBootloadOnRender.react"), {
                component: g.jsx(b("LazyComponent.react"), {
                    customColor: this.props.customColor,
                    threadFBID: this.props.threadFBID,
                    onHideDialog: this.props.hideFlyout
                }),
                loader: b("ReasonResource")(b("JSResource")("MessengerGroupPollingCreatePollFlyoutReact.bs").__setRef("MessengerCreatePollFlyoutBootLoader.react")),
                placeholder: g.jsx("div", {
                    style: {
                        padding: "15px",
                        textAlign: "center",
                        width: "125px"
                    },
                    children: g.jsx(b("MessengerSpinner.react"), {
                        color: "grey"
                    })
                })
            })
        }
        ;
        return c
    }(g.PureComponent);
    e.exports = a
}
), null);
__d("MessengerCreatePollFlyoutBootLoader.bs", ["ReasonReact.bs", "MessengerCreatePollFlyoutBootLoader.react"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a, c, d, e) {
        return b("ReasonReact.bs").wrapJsForReason(b("MessengerCreatePollFlyoutBootLoader.react"), {
            customColor: a,
            hideFlyout: c,
            threadFBID: d
        }, e)
    }
    f.make = a
}
), null);
__d("MessengerGroupPollingButtonM4React.bs", ["fbt", "React", "ReasonReact.bs", "MessengerFlyoutButtonReact.bs", "MessengerBarChartIconSVGM4React.bs", "MessengerCreatePollFlyoutBootLoader.bs"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function a(a) {
        var c = a.className
          , d = a.fill
          , e = a.flyoutAlignment
          , f = a.getInput
          , i = a.threadFbid;
        a = function(a, c) {
            return b("ReasonReact.bs").element(void 0, void 0, b("MessengerCreatePollFlyoutBootLoader.bs").make(d, a, i, []))
        }
        ;
        var j = g._("T\u1ea1o cu\u1ed9c th\u0103m d\u00f2 \u00fd ki\u1ebfn");
        return h.jsx(b("MessengerFlyoutButtonReact.bs").make, {
            className: c,
            createFlyout: a,
            flyoutAlignment: e,
            getInput: f,
            icon: b("MessengerBarChartIconSVGM4React.bs").make(d),
            title: j
        })
    }
    c = a;
    f.make = c
}
), null);
__d("MessengerPageUtils.bs", ["MercuryIDs", "bs_caml_option", "CurrentUser", "MercuryDispatcher", "MercuryThreadActions", "MessengerParticipants.bs", "MercuryParticipantTypes"], (function(a, b, c, d, e, f) {
    "use strict";
    function g(a) {
        if (a !== void 0)
            return b("bs_caml_option").valFromOption(a).user_type === b("MercuryParticipantTypes").PAGE;
        else
            return !1
    }
    function a(a) {
        a = a.other_user_fbid;
        if (a == null)
            return !1;
        else
            return g(b("bs_caml_option").nullable_to_opt(b("MessengerParticipants.bs").getNow(b("MercuryIDs").getParticipantIDFromUserID(a))))
    }
    function h(a, c, d) {
        c = b("MessengerParticipants.bs").getNow(c);
        if (c == null)
            return 0;
        else {
            c = Object.assign({}, c);
            b("MercuryDispatcher").getForFBID(d).handleUpdate(Object.assign({}, {
                participants: [Object.assign(c, {
                    is_messenger_blocked: a
                })],
                preprocessed: !0
            }));
            return 0
        }
    }
    function c(a, c) {
        var d = b("CurrentUser").getAccountID()
          , e = a.other_user_fbid;
        if (e == null)
            return 0;
        else if (c) {
            b("MercuryThreadActions").getForFBID(d).unblockOnMessengerDotCom(a.thread_id);
            return h(!1, b("MercuryIDs").getParticipantIDFromUserID(e), d)
        } else {
            b("MercuryThreadActions").getForFBID(d).blockOnMessengerDotCom(a.thread_id);
            return h(!0, b("MercuryIDs").getParticipantIDFromUserID(e), d)
        }
    }
    f.isPageParticipant = g;
    f.isPageThread = a;
    f.changeBlockedStatus = h;
    f.toggleBlock = c
}
), null);
__d("MessengerPlusCircleIconSVGM4React.bs", ["cx", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function a(a) {
        return h.jsx("svg", {
            children: h.jsxs("g", {
                children: [h.jsx("polygon", {
                    points: "-6,30 30,30 30,-6 -6,-6 "
                }), h.jsx("path", {
                    d: "m18,11l-5,0l0,-5c0,-0.552 -0.448,-1 -1,-1c-0.5525,0 -1,0.448 -1,1l0,5l-5,0c-0.5525,0 -1,0.448 -1,1c0,0.552 0.4475,1 1,1l5,0l0,5c0,0.552 0.4475,1 1,1c0.552,0 1,-0.448 1,-1l0,-5l5,0c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1m-6,13c-6.6275,0 -12,-5.3725 -12,-12c0,-6.6275 5.3725,-12 12,-12c6.627,0 12,5.3725 12,12c0,6.6275 -5.373,12 -12,12",
                    fill: a
                })],
                fill: "none",
                fillRule: "evenodd"
            }),
            className: "_7oal",
            height: "24",
            width: "24",
            viewBox: "0 0 24 24"
        })
    }
    function c(a) {
        return h.jsx("svg", {
            children: h.jsxs("g", {
                children: [h.jsx("polygon", {
                    points: "-6,30 30,30 30,-6 -6,-6 "
                }), h.jsx("path", {
                    style: a,
                    d: "m18,11l-5,0l0,-5c0,-0.552 -0.448,-1 -1,-1c-0.5525,0 -1,0.448 -1,1l0,5l-5,0c-0.5525,0 -1,0.448 -1,1c0,0.552 0.4475,1 1,1l5,0l0,5c0,0.552 0.4475,1 1,1c0.552,0 1,-0.448 1,-1l0,-5l5,0c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1m-6,13c-6.6275,0 -12,-5.3725 -12,-12c0,-6.6275 5.3725,-12 12,-12c6.627,0 12,5.3725 12,12c0,6.6275 -5.373,12 -12,12"
                })],
                fill: "none",
                fillRule: "evenodd"
            }),
            className: "_7oal",
            height: "24",
            width: "24",
            viewBox: "0 0 24 24"
        })
    }
    f.make = a;
    f.makeWithPathStyle = c
}
), null);
__d("MessengerQuickCamButtonBootLoader.bs", ["gkx", "bs_belt_Option", "ReasonReact.bs", "bs_js_null_undefined", "MessengerQuickCamButtonBootLoader.react"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("gkx")("678582");
    function a(a, c, d, e, f, h, i, j) {
        return b("ReasonReact.bs").wrapJsForReason(b("MessengerQuickCamButtonBootLoader.react"), {
            className: a,
            htmlQC: g,
            fill: b("bs_belt_Option").getWithDefault(c, ""),
            location: d,
            onSendButtonClick: e,
            placeholder: b("bs_js_null_undefined").fromOption(f),
            threadID: h,
            viewer: i
        }, j)
    }
    f.htmlQCGk = g;
    f.make = a
}
), null);
__d("MessengerSendIconSVGM4React.bs", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a) {
        return g.jsx("svg", {
            children: g.jsx("g", {
                children: g.jsxs("g", {
                    children: [g.jsx("polygon", {
                        points: "0 36 36 36 36 0 0 0"
                    }), g.jsx("path", {
                        d: "M31.1059281,19.4468693 L10.3449666,29.8224462 C8.94594087,30.5217547 7.49043432,29.0215929 8.17420251,27.6529892 C8.17420251,27.6529892 10.7473302,22.456697 11.4550902,21.0955966 C12.1628503,19.7344961 12.9730756,19.4988922 20.4970248,18.5264632 C20.7754304,18.4904474 21.0033531,18.2803547 21.0033531,17.9997309 C21.0033531,17.7196073 20.7754304,17.5095146 20.4970248,17.4734988 C12.9730756,16.5010698 12.1628503,16.2654659 11.4550902,14.9043654 C10.7473302,13.5437652 8.17420251,8.34697281 8.17420251,8.34697281 C7.49043432,6.9788693 8.94594087,5.47820732 10.3449666,6.1775158 L31.1059281,16.553593 C32.298024,17.1488555 32.298024,18.8511065 31.1059281,19.4468693",
                        fill: a
                    })]
                }),
                fill: "none",
                fillRule: "evenodd"
            }),
            height: "36px",
            width: "36px",
            viewBox: "0 0 36 36"
        })
    }
    f.make = a
}
), null);
__d("MessengerSendButtonReact.bs", ["fbt", "React", "Link.react", "bs_belt_Option", "bs_caml_option", "MessengerCustomColorUtils.bs", "MessengerSendIconSVGM4React.bs"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = g._("Nh\u1ea5n Enter \u0111\u1ec3 g\u1eedi") + ("\n" + g._("Nh\u1ea5n Shift+Enter \u0111\u1ec3 th\u00eam \u0111o\u1ea1n m\u1edbi"));
    function a(a) {
        var c = a.className
          , d = a.customColor
          , e = a.onClick;
        a = a.useIcon;
        var f = d !== void 0 ? {
            color: d
        } : void 0;
        a = b("bs_belt_Option").getWithDefault(a, !1);
        c = {
            "aria-label": g._("G\u1eedi"),
            "data-hover": "tooltip",
            "data-tooltip-content": i,
            className: c,
            onClick: e,
            role: "button",
            children: a ? b("MessengerSendIconSVGM4React.bs").make(b("bs_belt_Option").getWithDefault(d, b("MessengerCustomColorUtils.bs").defaultColor(0))) : g._("G\u1eedi")
        };
        f !== void 0 && (c.style = b("bs_caml_option").valFromOption(f));
        return h.jsx(b("Link.react"), c)
    }
    c = a;
    f.title = i;
    f.make = c
}
), null);
__d("MessengerStagedFilesPreviewM4React.bs", ["cx", "cssVar", "React", "immutable", "JSResource", "bs_belt_Option", "bs_caml_option", "MessengerActions", "XUISpinner.react", "bs_js_null_undefined", "lazyLoadComponent"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React")
      , j = b("lazyLoadComponent")(b("JSResource")("MercuryStageFilePreviewReactComponent").__setRef("MessengerStagedFilesPreviewM4React.bs"));
    function a(a) {
        var c = a.fileUploader
          , d = a.onResize
          , e = a.thread;
        a = a.threadId;
        c = c !== void 0 ? c.uploadedFiles : b("immutable").Map([]);
        if (c.size === 0)
            return null;
        else {
            e = e !== void 0 ? b("bs_belt_Option").getWithDefault(b("bs_caml_option").nullable_to_opt(b("bs_caml_option").valFromOption(e).footer_color), "#0084ff") : "#0084ff";
            return i.jsx(i.Suspense, {
                children: i.jsx("div", {
                    children: i.jsx(j, {
                        files: c,
                        small: !1,
                        threadCustomColor: e,
                        threadID: a,
                        onClick: function(a, c) {
                            b("MessengerActions").cancelFileUpload(a, c);
                            return 0
                        },
                        onResize: b("bs_js_null_undefined").fromOption(d)
                    }, "stage_file_preview"),
                    className: "_8rdt"
                }),
                fallback: i.jsx(b("XUISpinner.react"), {
                    className: "_2qf"
                })
            })
        }
    }
    c = a;
    f.bootloadedStageFilePreview = j;
    f.make = c
}
), null);
__d("MessengerStickerIconSVGM4React.bs", ["cx", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function a(a) {
        return h.jsx("svg", {
            children: h.jsxs("g", {
                children: [h.jsx("polygon", {
                    points: "0 36 36 36 36 0 0 0"
                }), h.jsx("path", {
                    d: "M22.5,18.5 L27.998,18.5 C28.8885,18.5 29.335,19.577 28.705,20.207 L20.207,28.705 C19.577,29.335 18.5,28.8885 18.5,27.9975 L18.5,22.5 C18.5,20.291 20.291,18.5 22.5,18.5 M16.5,22.5 L16.5,28 C16.5,28.552 16.052,29 15.5,29 L11,29 C8.791,29 7,27.209 7,25 L7,11 C7,8.791 8.791,7 11,7 L25,7 C27.209,7 29,8.791 29,11 L29,15.5 C29,16.052 28.552,16.5 28,16.5 L22.5,16.5 C19.1865,16.5 16.5,19.1865 16.5,22.5",
                    fill: a
                })],
                fill: "none",
                fillRule: "evenodd"
            }),
            className: "_7oal",
            height: "36px",
            width: "36px",
            viewBox: "0 0 36 36"
        })
    }
    f.make = a
}
), null);
__d("MessengerStickerButtonReact.bs", ["cx", "fbt", "bs_curry", "React", "JSResource", "lazyLoadComponent", "MessengerFlyoutButtonReact.bs", "MessengerStickerIconSVGM4React.bs"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React")
      , j = b("lazyLoadComponent")(b("JSResource")("StickersFlyout.react").__setRef("MessengerStickerButtonReact.bs"));
    function a(a) {
        var c = a.className
          , d = a.disabled
          , e = a.fill
          , f = a.flyoutAlignment
          , g = a.getInput
          , k = a.onSelect;
        a = function(a, c) {
            return i.createElement(j, {
                className: "_293j",
                onEscKeyDown: a,
                onStickerSelect: b("bs_curry").__3(k),
                shown: c
            })
        }
        ;
        var l = h._("Ch\u1ecdn nh\u00e3n d\u00e1n");
        return i.jsx(b("MessengerFlyoutButtonReact.bs").make, {
            className: c,
            createFlyout: a,
            dialogClassName: "_5e-r",
            disabled: d,
            flyoutAlignment: f,
            getInput: g,
            icon: b("MessengerStickerIconSVGM4React.bs").make(e),
            title: l,
            testid: "messenger_sticker_button"
        })
    }
    c = a;
    f.bootloadedStickerFlyout = j;
    f.make = c
}
), null);
__d("MessengerFRXBootloaderUtils", ["Bootloader"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        b("Bootloader").loadModules(["MessengerFRXUtils"], function(b) {
            b.openFRXDialog(a)
        }, "MessengerFRXBootloaderUtils")
    }
    ;
    f.bootloadFRXDialog = a;
    c = function(a) {
        b("Bootloader").loadModules(["MessengerFRXUtils"], function(b) {
            b.openEmptyThreadFRXDialog(a)
        }, "MessengerFRXBootloaderUtils")
    }
    ;
    f.bootloadEmptyThreadFRXDialog = c
}
), null);
__d("MessengerDeclineDialogReact.bs", ["fbt", "bs_curry", "React", "bs_caml_obj", "bs_caml_option", "CurrentUser", "ReasonReact.bs", "MessengerDialogs.bs", "MessengerDialogReact.bs", "MessengerDialogBodyReact.bs", "MessengerDialogHeaderReact.bs", "MessengerFRXBootloaderUtils"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function a(a) {
        b("MessengerFRXBootloaderUtils").bootloadFRXDialog(a.thread_id);
        return 0
    }
    function i(a) {
        var c = a.name
          , d = a.onBlock
          , e = a.onDelete
          , f = a.onToggle
          , i = a.isGroupChat
          , j = a.thread
          , k = function(a) {
            if (a)
                return 0;
            else {
                b("bs_curry")._1(f, a);
                return b("MessengerDialogs.bs").removeDialog(void 0, 0)
            }
        };
        a = function(a) {
            b("MessengerDialogs.bs").removeDialog(void 0, 0);
            return b("bs_curry")._1(d, a)
        }
        ;
        var l = function(a) {
            b("bs_curry")._1(e, 0);
            return b("MessengerDialogs.bs").removeDialog(void 0, 0)
        }
          , m = function(a) {
            return k(!1)
        }
          , n = function(a) {
            if (j !== void 0) {
                b("MessengerFRXBootloaderUtils").bootloadFRXDialog(b("bs_caml_option").valFromOption(j).thread_id);
                return 0
            } else
                return 0
        }
          , o = i ? g._("R\u1eddi kh\u1ecfi nh\u00f3m") : g._("Ch\u1eb7n")
          , p = j !== void 0 ? b("bs_caml_obj").caml_equal(b("bs_caml_option").valFromOption(j).other_user_fbid, b("CurrentUser").getID()) : !0
          , q = j !== void 0 ? b("bs_caml_option").valFromOption(j).message_count === 0 : !0
          , r = b("CurrentUser").isWorkUser()
          , s = b("CurrentUser").isWorkUser();
        return b("ReasonReact.bs").element(void 0, void 0, b("MessengerDialogReact.bs").Dialog.make(void 0, void 0, k, void 0, void 0, void 0, void 0, 440, void 0, void 0, [h.createElement(b("MessengerDialogHeaderReact.bs").make, {
            children: i || r || c === void 0 ? g._("T\u1eeb ch\u1ed1i cu\u1ed9c tr\u00f2 chuy\u1ec7n") : g._("B\u1ea1n kh\u00f4ng mu\u1ed1n nh\u1eadn tin nh\u1eafn c\u1ee7a {name}?", [g._param("name", c)])
        }), h.createElement(b("MessengerDialogBodyReact.bs").make, {
            children: i ? g._("B\u1ea1n mu\u1ed1n r\u1eddi kh\u1ecfi nh\u00f3m? C\u00e1c th\u00e0nh vi\u00ean nh\u00f3m s\u1ebd th\u1ea5y b\u1ea1n \u0111\u00e3 r\u1eddi \u0111i.") : c !== void 0 ? s ? g._("Tin nh\u1eafn \u0111ang ch\u1edd s\u1ebd b\u1ecb t\u1eeb ch\u1ed1i. B\u1ea1n c\u00f3 mu\u1ed1n ch\u1eb7n {name} trong Chat tr\u00ean Workplace ho\u1eb7c x\u00f3a c\u00e1c tin nh\u1eafn n\u00e0y kh\u00f4ng?", [g._param("name", c)]) : g._("B\u1ea1n c\u00f3 th\u1ec3 x\u00f3a v\u0129nh vi\u1ec5n cu\u1ed9c tr\u00f2 chuy\u1ec7n, ch\u1eb7n {name} nh\u1eafn tin cho b\u1ea1n ho\u1eb7c cho ch\u00fang t\u00f4i bi\u1ebft n\u1ebfu th\u1ea5y c\u00f3 g\u00ec kh\u00f4ng \u1ed5n. Ch\u00fang t\u00f4i s\u1ebd kh\u00f4ng ti\u1ebft l\u1ed9 v\u1edbi {name} r\u1eb1ng b\u1ea1n \u0111\u00e3 th\u1ef1c hi\u1ec7n nh\u1eefng h\u00e0nh \u0111\u1ed9ng n\u00e0y.", [g._param("name", c)]) : g._({
                "Workplace Chat": "Tin nh\u1eafn \u0111ang ch\u1edd s\u1ebd b\u1ecb t\u1eeb ch\u1ed1i. B\u1ea1n c\u00f3 mu\u1ed1n ch\u1eb7n ng\u01b0\u1eddi n\u00e0y trong Chat tr\u00ean Workplace ho\u1eb7c x\u00f3a c\u00e1c tin nh\u1eafn n\u00e0y kh\u00f4ng?",
                "Messenger": "Tin nh\u1eafn \u0111ang ch\u1edd s\u1ebd b\u1ecb t\u1eeb ch\u1ed1i. B\u1ea1n c\u00f3 mu\u1ed1n ch\u1eb7n ng\u01b0\u1eddi n\u00e0y tr\u00ean Messenger ho\u1eb7c x\u00f3a c\u00e1c tin nh\u1eafn n\u00e0y kh\u00f4ng?"
            }, [g._enum(s ? "Workplace Chat" : "Messenger", {
                "Workplace Chat": "Workplace Chat",
                Messenger: "Messenger"
            })])
        }), b("ReasonReact.bs").element(void 0, void 0, b("MessengerDialogReact.bs").Footer.make(void 0, void 0, [b("ReasonReact.bs").element(void 0, void 0, b("MessengerDialogReact.bs").CancelButton.make(m, [])), j !== void 0 && !(p || q || !b("bs_caml_option").valFromOption(j).can_viewer_report || b("CurrentUser").isWorkUser()) ? b("ReasonReact.bs").element(void 0, void 0, b("MessengerDialogReact.bs").Button.make(void 0, g._("C\u00f3 g\u00ec \u0111\u00f3 kh\u00f4ng \u1ed5n"), void 0, void 0, n, 0, void 0, void 0, void 0, [])) : null, b("ReasonReact.bs").element(void 0, void 0, b("MessengerDialogReact.bs").Button.make(void 0, g._("X\u00f3a"), void 0, "danger", l, 0, void 0, void 0, void 0, [])), b("ReasonReact.bs").element(void 0, void 0, b("MessengerDialogReact.bs").Button.make(void 0, o, void 0, "danger", a, 0, void 0, void 0, void 0, []))]))]))
    }
    function c(a) {
        var c = {
            onBlock: a.onBlock,
            onDelete: a.onDelete,
            onToggle: a.onToggle,
            isGroupChat: a.isGroupChat
        }
          , d = b("bs_caml_option").nullable_to_opt(a.name);
        d !== void 0 && (c.name = b("bs_caml_option").valFromOption(d));
        d = b("bs_caml_option").nullable_to_opt(a.thread);
        d !== void 0 && (c.thread = b("bs_caml_option").valFromOption(d));
        return i(c)
    }
    d = i;
    f.handleReportThread = a;
    f.make = d;
    f.jsComponent = c
}
), null);
__d("MessengerUnconnectedThreadInfoTextReact.bs", ["cx", "fbt", "React", "Link.react", "bs_caml_option", "MessengerDialogs.bs", "MessengerDeclineDialogReact.bs"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    function j(a, c, d, e, f) {
        return b("MessengerDialogs.bs").showDialog(function(g) {
            g = {
                name: c,
                onBlock: d,
                onDelete: e,
                onToggle: f,
                isGroupChat: !1
            };
            a !== void 0 && (g.thread = b("bs_caml_option").valFromOption(a));
            return i.createElement(b("MessengerDeclineDialogReact.bs").make, g)
        })
    }
    function a(a) {
        var c = a.name
          , d = a.onBlock
          , e = a.onDelete
          , f = a.onToggle
          , g = a.thread;
        return i.jsx("div", {
            children: i.jsxs("div", {
                children: [h._("N\u1ebfu b\u1ea1n tr\u1ea3 l\u1eddi, {name} s\u1ebd c\u00f3 th\u1ec3 g\u1ecdi \u0111i\u1ec7n cho b\u1ea1n v\u00e0 xem c\u00e1c th\u00f4ng tin nh\u01b0 Tr\u1ea1ng th\u00e1i ho\u1ea1t \u0111\u1ed9ng v\u00e0 th\u1eddi \u0111i\u1ec3m b\u1ea1n \u0111\u1ecdc tin nh\u1eafn.", [h._param("name", c)]), " ", i.jsx(b("Link.react"), {
                    className: "_74kv",
                    onClick: function(a) {
                        return j(g, c, d, e, f)
                    },
                    children: h._("T\u00f4i kh\u00f4ng mu\u1ed1n nh\u1eadn tin nh\u1eafn c\u1ee7a {name}", [h._param("name", c)])
                })]
            }),
            className: "_74ku"
        })
    }
    c = a;
    f.renderTDADialog = j;
    f.make = c
}
), null);
__d("MessengerMicrophoneIconSVGM4React.bs", ["cx", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function a(a) {
        return h.jsx("svg", {
            children: h.jsx("g", {
                children: h.jsxs("g", {
                    children: [h.jsx("polygon", {
                        points: "0 36 36 36 36 0 0 0"
                    }), h.jsx("path", {
                        d: "M14,28 L22,28 C22.552,28 23,28.448 23,29 C23,29.552 22.552,30 22,30 L14,30 C13.448,30 13,29.552 13,29 C13,28.448 13.448,28 14,28 M18,22.5 C15.239,22.5 13,20.2615 13,17.5 L13,11 C13,8.2385 15.239,6 18,6 C20.761,6 23,8.2385 23,11 L23,17.5 C23,20.2615 20.761,22.5 18,22.5 M18,26.5 C13.0295,26.5 9,22.4705 9,17.5 C9,16.948 9.448,16.5 10,16.5 C10.552,16.5 11,16.948 11,17.5 C11,21.366 14.134,24.5 18,24.5 C21.866,24.5 25.0005,21.366 25.0005,17.5 L25,17.5 C25,16.948 25.448,16.5 26,16.5 C26.552,16.5 27,16.948 27,17.5 C27,22.4705 22.9705,26.5 18,26.5",
                        fill: a
                    })]
                }),
                fill: "none",
                fillRule: "evenodd"
            }),
            className: "_7oal",
            height: "36px",
            width: "36px",
            viewBox: "0 0 36 36"
        })
    }
    f.make = a
}
), null);
__d("MessengerVoiceClipButtonReact.bs", ["fbt", "bs_curry", "React", "JSResource", "lazyLoadComponent", "MessengerFlyoutButtonReact.bs", "MessengerMicrophoneIconSVGM4React.bs"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = b("lazyLoadComponent")(b("JSResource")("MessengerVoiceClipFlyout.react").__setRef("MessengerVoiceClipButtonReact.bs"));
    function a(a) {
        var c = a.className
          , d = a.fill
          , e = a.flyoutAlignment
          , f = a.getInput
          , j = a.onVoiceClipCreate;
        a = function(a, c) {
            return h.createElement(i, {
                onCancel: a,
                onStopAndGetVoiceClip: function(c) {
                    b("bs_curry")._1(a, 0);
                    return b("bs_curry")._1(j, c)
                }
            })
        }
        ;
        var k = g._("G\u1eedi clip \u00e2m thanh");
        return h.jsx(b("MessengerFlyoutButtonReact.bs").make, {
            className: c,
            createFlyout: a,
            flyoutAlignment: e,
            flyoutWidth: 220,
            getInput: f,
            icon: b("MessengerMicrophoneIconSVGM4React.bs").make(d),
            title: k
        })
    }
    c = a;
    f.bootloadedVoiceClipFlyout = i;
    f.make = c
}
), null);
__d("P2PPaymentSupportedCurrency", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        USD: "USD",
        PEN: "PEN",
        PHP: "PHP",
        THB: "THB",
        VND: "VND",
        PLN: "PLN",
        NONE: "NONE"
    });
    e.exports = a
}
), null);
__d("P2PSendMoneyContainerBootloaderReact.bs", ["bs_belt_Option", "bs_caml_option", "ReasonReact.bs", "P2PPaymentConfig", "P2PSendMoneyContainerBootloader.react"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("P2PPaymentConfig").config;
    c = b("bs_belt_Option").map(g == null ? void 0 : b("bs_caml_option").some(g), function(a) {
        return a.currencyCode
    });
    function a(a, c, d, e, f, h, i, j, k, l) {
        return b("ReasonReact.bs").wrapJsForReason(b("P2PSendMoneyContainerBootloader.react"), {
            button: a,
            className: c,
            fromChatTab: b("bs_belt_Option").getWithDefault(d, !1),
            participantIDs: h,
            p2pPaymentConfig: b("bs_belt_Option").getWithDefault(f, g),
            flyoutAlignment: "left",
            referrer: i,
            thread: j,
            threadID: k,
            onTrigger: e
        }, l)
    }
    f.config = g;
    f.currencyCode = c;
    f.make = a
}
), null);
__d("ReplyingToMessageReact.bs", ["ix", "cx", "fbt", "Image.bs", "React", "asset", "bs_caml_option", "ReasonReact.bs", "XUICloseButtonReact.bs", "MercuryAttachmentType", "MercuryMessageBodyReact.bs"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = b("React");
    function k(a) {
        var c = a.name
          , d = a.body
          , e = a.attachments
          , f = a.onCancelReplyingToMessage;
        a = a.isChatTab;
        var h, k = 0;
        if (d !== void 0) {
            d = d;
            d === "" ? k = 1 : h = [b("ReasonReact.bs").element(void 0, void 0, b("MercuryMessageBodyReact.bs").make(d, [])), null]
        } else
            k = 1;
        if (k === 1) {
            if (e.length !== 1)
                d = [i._({
                    "*": "{number of attachments in message being replied to} t\u1ec7p \u0111\u00ednh k\u00e8m"
                }, [i._param("number of attachments in message being replied to", String(e.length)), i._plural(e.length)]), g("596865")];
            else {
                k = e[0];
                d = k.attach_type === b("MercuryAttachmentType").PHOTO ? [i._("\u1ea2nh"), g("596858")] : k.attach_type === b("MercuryAttachmentType").ANIMATED_IMAGE ? [i._("T\u1ec7p GIF"), g("596858")] : k.attach_type === b("MercuryAttachmentType").VIDEO ? [i._("Video"), g("596874")] : k.attach_type === b("MercuryAttachmentType").STICKER || k.attach_type === b("MercuryAttachmentType").THIRDPARTYSTICKER ? [i._("Nh\u00e3n d\u00e1n"), g("596858")] : [i._("T\u1ec7p \u0111\u00ednh k\u00e8m"), g("596852")]
            }
            h = [d[0], b("ReasonReact.bs").element(void 0, void 0, b("Image.bs").make("_6ees", void 0, void 0, void 0, d[1], void 0, void 0, void 0, void 0, []))]
        }
        return j.jsxs("div", {
            children: [b("ReasonReact.bs").element(void 0, void 0, b("XUICloseButtonReact.bs").make("_67tv", 1, a ? 1 : 2, f, void 0, [])), i._("\u0110ang ph\u1ea3n h\u1ed3i"), " ", j.jsx("strong", {
                children: i._("{name}", [i._param("name", c)])
            }), j.jsxs("div", {
                children: [h[0], h[1]],
                className: "_67tw _1nc6 ellipsis"
            })],
            className: (a ? "_692o" : "") + " _67tu"
        })
    }
    function a(a) {
        var c = {
            name: a.name,
            attachments: a.attachments,
            onCancelReplyingToMessage: a.onCancelReplyingToMessage,
            isChatTab: a.isChatTab
        };
        a = b("bs_caml_option").nullable_to_opt(a.body);
        a !== void 0 && (c.body = b("bs_caml_option").valFromOption(a));
        return k(c)
    }
    c = k;
    f.make = c;
    f.jsComponent = a
}
), null);
__d("OmniMSuggestions_OmniMActionType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        UNKNOWN_ACTION_TYPE: 0,
        CREATE_EVENT: 1,
        LOCATION: 2,
        PAYMENT: 3,
        POLL: 4,
        STICKER: 5,
        TEXT: 6,
        TRANSPORTATION: 7,
        ORDER_FOOD: 8,
        MAKE_RESERVATION: 9,
        SCHEDULE_CALL: 10,
        LIVE_LOCATION: 11,
        VIDEO_CALL: 12,
        VOICE_CALL: 13,
        SAVE_CONTENT: 14,
        PLAY_GAME: 15,
        SHARE_CONTACT: 16,
        SEND_PHOTO: 17,
        CREATE_REMINDER_DEPRECATED: 18,
        CREATE_REMINDER: 19,
        MARKETPLACE_SAFE_LOCATION: 20,
        VIEW_SAVED: 21,
        CHAT_EXTENSION: 22,
        DAY_CAMERA: 23,
        CALENDAR: 24,
        GIF: 25,
        PAGE_PROFILE: 26,
        FEEDBACK: 27,
        LOCAL_PAGES_PICKER: 28,
        CREATE_SOCIAL_REX_REQUEST: 29,
        ADD_SOCIAL_REX_RECOMMENDATION: 30,
        ENABLE_TRANSLATION: 31,
        CHECK_MARKETPLACE: 32,
        SERVICES_APPOINTMENT: 33,
        ADDRESS: 34,
        REQUEST_PAYMENT: 35,
        OFFER_PAYMENT: 36,
        PAGE_CREATE_APPOINTMENT: 37,
        ONE_CLICK_CREATE_APPOINTMENT: 38,
        ADD_TO_GROUP_CHAT: 39,
        VOICE_CLIP: 40,
        CREATE_PERSONAL_REMINDER: 41,
        WORK_APP_INTEGRATION: 42,
        SHARE_TO_FACEBOOK: 43,
        VOICE_ASSISTANT: 44,
        MARKETPLACE_MARK_AS_X: 45,
        SHARE_CONTACT_INFO: 46,
        REQUEST_APPOINTMENT: 47,
        MARKETPLACE_SAVE_TO_FAQ: 48,
        INTEGRITY_BLOCK: 49,
        SCHEDULE_PHONE_CALL: 50,
        SMART_REPLY: 51
    });
    e.exports = a
}
), null);
__d("WorkChatSuggestionButton.react", ["React", "Text.react", "WIGIcon.react", "WIGPressable.react", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.icon
          , d = a.label
          , e = a.onPress;
        a = a.isQuickReply;
        a = a === void 0 ? !1 : a;
        var f = g.useState(!0)
          , h = f[0]
          , i = f[1];
        f = function() {
            e ? e() : null,
            i(!1)
        }
        ;
        return h ? g.jsx("div", {
            className: "d3qy8rs6 kh1bt4hq thzm4xdn",
            children: g.jsx("span", {
                className: "c19r2vkt i2yem8cm snpb814a a1vt70ul nvb2uqik m4qils9p brrrwa7m t3k3x88u h4y7jwnr cz2zqk6i pf8t2of3 rr7cureg noe3hari ale2funn qctk5f2p",
                children: g.jsx(b("WIGPressable.react"), {
                    display: "inline",
                    onPress: f,
                    overlayDisabled: !0,
                    children: g.jsxs("div", {
                        className: "ta8eqm4s hx9ojghx aa5x7xvh i2yem8cm rec76pb8 s4cxp3c9 fl5mvqbf rql8hti4 sbqx1y7x besomprw nlygpylr hhvjwakb gekupxos j2l1er6b er4jod18 kwfg7mzh ahcads71 h4y7jwnr tp8s54bt t7ahbhdd c42t48hm",
                        children: [c ? g.jsx("div", {
                            className: a ? "co320n8y i29qrqi0 jh22n2fz i2yem8cm" : "co320n8y i29qrqi0",
                            children: g.jsx(b("WIGIcon.react"), {
                                color: "secondary",
                                icon: c
                            })
                        }) : null, d != null ? g.jsx(b("Text.react"), {
                            className: "snpb814a kh1bt4hq co320n8y aw1jpamg hkc3k1si p9p2bx6h",
                            children: d
                        }) : null]
                    })
                })
            })
        }) : null
    }
}
), null);
__d("WorkChatSmartReplies.react", ["ix", "CurrentUser", "MessengerState.re", "OmniMSuggestions_OmniMActionType", "React", "WorkChatSuggestionButton.react", "emptyObject", "fbicon", "gkx", "keyMirror", "stylex", "WorkChatSuggestionsTypedLogger"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React")
      , i = b("keyMirror")(b("OmniMSuggestions_OmniMActionType"));
    function j(a, c) {
        new (b("WorkChatSuggestionsTypedLogger"))().setSuggestionType(i.SMART_REPLY).setAppID(b("CurrentUser").getAppID()).setMessageID(c).setThreadID(a).log()
    }
    function a(a) {
        var c = a.threadID
          , d = a.onClick
          , e = a.onResize
          , f = b("MessengerState.re").getThreadMessagesRangeNow(b("CurrentUser").getID(), c, 0, 1)[0];
        a = h.useState(!0);
        var k = a[0]
          , l = a[1];
        h.useEffect(function() {
            e()
        }, [f, k, e]);
        if (f == null || !b("gkx")("1115706"))
            return null;
        a = f.m_suggestions;
        if (a == null)
            return null;
        a = a.filter(function(a) {
            return a.type === i.SMART_REPLY
        }).map(function(a, e) {
            return h.jsx(b("WorkChatSuggestionButton.react"), {
                icon: b("fbicon")._(g("788340"), 12),
                label: a.label,
                onPress: function() {
                    d(a.label, b("emptyObject")),
                    l(!1),
                    j(c, f.message_id)
                },
                isQuickReply: !0
            }, e)
        });
        return k && a.length > 0 ? h.jsxs("div", {
            className: "brrrwa7m h4y7jwnr",
            children: [" ", a, " "]
        }) : null
    }
}
), null);
__d("MessengerComposerM4React.bs", ["cx", "fbt", "cssVar", "invariant", "bs_curry", "React", "gkx", "bs_js_dict", "bs_caml_array", "MercuryIDs", "bs_belt_Option", "bs_caml_option", "CurrentUser", "P2PGKValues", "ReasonReact.bs", "AsyncRequest", "MercuryConfig", "MessengerView", "MessengerState.bs", "isWebGLEnabled", "bs_caml_exceptions", "MessengerDialogs.bs", "bs_js_null_undefined", "MercurySourceType", "MessengerPageUtils.bs", "MessageRequestUtils", "MessengerButtonReact.bs", "MercuryReadOnlyReason", "MessengerHotLikeUtils", "MessengerParticipants.bs", "WorkFileUploadsGating", "getPageIDFromThreadID", "requestAnimationFrame", "MessengerSettingsStore", "MessengerSourceContext.bs", "ReplyingToMessageReact.bs", "AutoFocusableLink.react", "ChatPhotoUploader.react", "MessengerGifButtonReact.bs", "MessengerQuickCamOrigins", "MessengerSendButtonReact.bs", "MessengerCustomColorUtils.bs", "MessengerEmojiButtonReact.bs", "MessengerGamesButtonReact.bs", "WorkChatSmartReplies.react", "MessengerBotMenuButtonReact.bs", "MessengerStickerButtonReact.bs", "P2PPaymentSupportedCurrency", "MessengerComposerInput.react", "MessengerGamesIconSVGM4React.bs", "MessengerHotLikeButton.react", "MessengerPhotoIconSVGM4React.bs", "MessengerCameraIconSVGM4React.bs", "MessengerVoiceClipButtonReact.bs", "MessengerThreadCannotReplyReason", "MercuryIgnoredBlockedParticipants.bs", "MessengerFileSizeErrorDialogReact.bs", "MessengerPlusCircleIconSVGM4React.bs", "MessengerQuickCamButtonBootLoader.bs", "MessengerCurrencyEURIconSVGM4React.bs", "MessengerCurrencyGBPIconSVGM4React.bs", "MessengerCurrencyPENIconSVGM4React.bs", "MessengerCurrencyPHPIconSVGM4React.bs", "MessengerCurrencyTHBIconSVGM4React.bs", "MessengerCurrencyUSDIconSVGM4React.bs", "MessengerGroupPollingButtonM4React.bs", "MessengerStagedFilesPreviewM4React.bs", "XMessagingUnblockMessagesController", "P2PSendMoneyContainerBootloaderReact.bs", "MessengerComposerPendingActionsM4React.bs", "MessengerUnconnectedThreadInfoTextReact.bs"], (function(a, b, c, d, e, f, g, h, aa, i) {
    "use strict";
    var j = b("React")
      , ba = b("bs_caml_exceptions").create("MessengerComposerM4React.TooManyIcons");
    function k(a, b) {
        var c = a ? 1150 : 650;
        a = a ? 1e3 : 500;
        switch (b) {
        case 0:
            b = c + 1 | 0;
            return "(min-width: " + (String(b) + "px)");
        case 1:
            b = a + 1 | 0;
            return "(min-width: " + (String(b) + ("px) and (max-width: " + (String(c) + "px)")));
        case 2:
            return "(max-width: " + (String(a) + "px)")
        }
    }
    function a(a) {
        return b("bs_caml_option").nullable_to_opt(a.current)
    }
    function l(a) {
        return j.jsx("div", {
            children: j.jsx("div", {
                children: h._("Ng\u01b0\u1eddi n\u00e0y hi\u1ec7n kh\u00f4ng c\u00f3 m\u1eb7t."),
                className: "_2wy4"
            }),
            className: "_4rv3"
        })
    }
    d = {
        make: l
    };
    function m(a, c, d, e) {
        new (b("AsyncRequest"))(b("XMessagingUnblockMessagesController").getURIBuilder().getURI()).setMethod("POST").setData({
            fbid: b("bs_caml_option").nullable_to_opt(b("MercuryIDs").getUserIDFromThreadID(b("bs_js_null_undefined").fromOption(a)))
        }).send();
        if (c)
            return b("MessengerPageUtils.bs").changeBlockedStatus(!1, d, e);
        else
            return 0
    }
    function ca(a) {
        var c = a.threadId
          , d = a.isPageChat
          , e = a.participantID
          , f = a.viewer;
        a = j.jsx(b("MessengerButtonReact.bs").make, {
            onClick: function(a) {
                return m(c, d, e, f)
            },
            label: h._("B\u1ecf ch\u1eb7n ngay"),
            type: 1
        });
        return j.jsx("div", {
            children: j.jsx("div", {
                children: d ? h._("B\u1ea1n \u0111\u00e3 ch\u1eb7n tin nh\u1eafn c\u1ee7a doanh nghi\u1ec7p n\u00e0y. {unblock_now_button}", [h._param("unblock_now_button", a)]) : h._("B\u1ea1n \u0111\u00e3 ch\u1eb7n tin nh\u1eafn t\u1eeb ng\u01b0\u1eddi n\u00e0y. {unblock_now_button}", [h._param("unblock_now_button", a)]),
                className: "_2wy4"
            }),
            className: "_4rv3"
        })
    }
    e = {
        handleUnblock: m,
        make: ca
    };
    function c(a, c) {
        var d = a.canReply
          , e = a.disableAutofocus
          , f = a.disableInput
          , g = a.fileUploader
          , aa = a.hideActions
          , m = a.mentionsEnabled
          , n = a.onCancelReplyingToMessage
          , da = a.onCustomLikeSelect
          , ea = a.onMessageSend
          , o = a.onPhotoUploadComplete
          , p = a.onPhotoUploadCancel
          , q = a.onPhotoUploadFail
          , r = a.onPhotoUploadSubmit
          , s = a.onResize
          , fa = a.onStickerSelect
          , t = a.onVoiceClipCreate
          , u = a.p2pPaymentConfig
          , v = a.participants
          , w = a.recipients
          , x = a.replyingToMessage
          , y = a.sharePreview
          , z = a.showBotMenu
          , A = a.thread
          , B = a.threadFbid
          , C = a.threadId
          , D = a.view
          , E = a.viewer;
        a = c;
        c = g == null ? void 0 : b("bs_caml_option").some(g);
        m = m == null ? void 0 : b("bs_caml_option").some(m);
        var ga = v == null ? void 0 : b("bs_caml_option").some(v)
          , F = w == null ? void 0 : b("bs_caml_option").some(w)
          , ha = y == null ? void 0 : b("bs_caml_option").some(y)
          , G = A == null ? void 0 : b("bs_caml_option").some(A)
          , H = B == null ? void 0 : b("bs_caml_option").some(B)
          , I = b("getPageIDFromThreadID")(C)
          , ia = I == null ? void 0 : b("bs_caml_option").some(I)
          , J = C == null ? void 0 : b("bs_caml_option").some(C);
        D = D == null ? void 0 : b("bs_caml_option").some(D);
        var K = j.useRef(null)
          , ja = j.useRef(null)
          , ka = j.useRef(null)
          , la = j.useRef(null)
          , ma = j.useRef(null)
          , L = K.current
          , na = b("bs_belt_Option").map(b("bs_caml_option").nullable_to_opt(ja.current), function(a) {
            return a
        })
          , oa = ka.current
          , pa = ma.current
          , M = j.useState(function() {
            return ""
        })
          , qa = M[1]
          , ra = M[0];
        M = j.useState(function() {
            return !1
        });
        var sa = M[1]
          , N = M[0];
        M = j.useState(function() {
            return !1
        });
        var ta = M[1]
          , O = j.useState(function() {
            return 0
        })
          , P = O[1];
        O = O[0];
        var ua = j.useState(function() {
            return !1
        })
          , va = ua[1]
          , wa = j.useState(function() {
            return {}
        })
          , xa = wa[1]
          , ya = j.useState(function() {
            return {}
        })
          , za = ya[1]
          , Q = j.useContext(b("MessengerSourceContext.bs").context)
          , Aa = la.current;
        j.useLayoutEffect(function() {
            var a = Aa == null ? 0 : Array.from(Aa.children).reduce(function(a, b) {
                return (a + b.clientWidth | 0) + 8 | 0
            }, 0);
            b("bs_curry")._1(xa, function(a) {
                return {
                    width: "0px"
                }
            });
            b("bs_curry")._1(za, function(b) {
                return {
                    width: "" + (String(a) + "px")
                }
            });
            return
        }, [J, Aa, F, xa, za]);
        j.useEffect(function() {
            s == null || b("bs_curry")._1(s, 0);
            return
        }, [d, N, x, ha, c, s]);
        F = s == null ? void 0 : b("bs_caml_option").some(s);
        var R = !b("MessengerSettingsStore").getSettings().info_sidebar_collapsed
          , Ba = Q === b("MercurySourceType").WORK_ROOM_INCALL_CHAT || Q === b("MercurySourceType").MESSENGER_ROOM_INCALL_CHAT;
        j.useEffect(function() {
            var a = k(R, 2)
              , c = window.matchMedia(a);
            a = k(R, 1);
            var d = window.matchMedia(a);
            a = k(R, 0);
            var e = window.matchMedia(a);
            b("bs_curry")._1(P, function(a) {
                if (Ba || c.matches)
                    return 2;
                else if (d.matches)
                    return 1;
                else
                    return 0
            });
            var f = function(a) {
                if (a.matches)
                    return b("bs_curry")._1(P, function(a) {
                        return 2
                    });
                else
                    return 0
            }
              , g = function(a) {
                if (a.matches)
                    return b("bs_curry")._1(P, function(a) {
                        return 1
                    });
                else
                    return 0
            }
              , h = function(a) {
                if (a.matches)
                    return b("bs_curry")._1(P, function(a) {
                        return 0
                    });
                else
                    return 0
            };
            if (Ba)
                return;
            else {
                c.addListener(f);
                d.addListener(g);
                e.addListener(h);
                return function(a) {
                    c.removeListener(f);
                    d.removeListener(g);
                    e.removeListener(h);
                    return 0
                }
            }
        }, [R, P]);
        var S = function(a) {
            return b("bs_belt_Option").flatMap(b("bs_caml_option").nullable_to_opt(a.author), function(a) {
                a = b("MessengerParticipants.bs").getNow(a);
                if (a == null)
                    return;
                else
                    return a.short_name
            })
        }
          , T = navigator.mediaDevices;
        T = (T == null ? !1 : !(T.getUserMedia == null)) || !(navigator.getUserMedia == null) || !(navigator.webkitGetUserMedia == null) || !(navigator.mozGetUserMedia == null) || !(navigator.msGetUserMedia == null);
        var U = D === b("MessengerView").DETAIL.COMPOSE;
        w = w == null ? !1 : w.count() > 0 && U;
        var Ca = ia !== void 0;
        w = J !== void 0 || w;
        y = y == null ? !1 : y.params !== null && y.type !== null;
        var Da = g == null ? !1 : g.uploadedFiles.size > 0;
        g = g == null ? !1 : g.uploadingFiles.size > 0;
        var Ea = function(a) {
            if (a == null)
                return !1;
            else
                return a
        };
        Da = ra.length !== 0 || Da || y;
        var Fa = function(a) {
            if (L == null)
                return 0;
            else
                return L.exitCurrentMode()
        }
          , V = function(a) {
            if (L == null)
                return 0;
            else
                return L.focus()
        };
        y = function(c) {
            if (c.platformFBID === b("MercuryConfig").MessengerAppID) {
                b("bs_curry")._1(fa, c.resultID);
                return 0
            } else if (oa == null)
                return 0;
            else {
                var a = b("bs_js_dict").get(c.media, "preview");
                if (a !== void 0)
                    a = a.url;
                else {
                    var d = b("bs_js_dict").get(c.media, "thumbnail");
                    a = d !== void 0 ? d.url : ""
                }
                return oa.uploadURL({
                    attribution_app_id: c.platformFBID,
                    external_image_url: c.source.url,
                    preview_url: a,
                    source: c.source
                })
            }
        }
        ;
        var Ga = function(a) {
            V(0);
            if (L == null)
                return 0;
            else
                return L.insertEmoji(a)
        }
          , Ha = function(a) {
            pa == null || pa.uploadFiles(a);
            return Fa(0)
        }
          , Ia = function(a) {
            b("bs_curry")._1(qa, function(b) {
                return a
            });
            if (a !== ra)
                return b("bs_curry")._1(sa, function(a) {
                    return !1
                });
            else
                return 0
        }
          , Ja = function(a) {
            a = K.current;
            if (a == null)
                return 0;
            else
                return a.triggerSend()
        }
          , Ka = function(a) {
            return 0
        };
        j.useImperativeHandle(a, function() {
            return {
                exitCurrentMode: Fa,
                focusInput: V,
                handleFileUpload: Ha,
                handleTextDropped: Ka
            }
        }, [Fa, V, Ha]);
        a = function(a) {
            return b("MessengerDialogs.bs").showDialog(function(c) {
                return j.jsx(b("MessengerFileSizeErrorDialogReact.bs").make, {
                    error: a == null ? 2 : b("MessengerFileSizeErrorDialogReact.bs").errorOfString(a.error)
                })
            })
        }
        ;
        var La;
        if (x == null)
            La = null;
        else {
            S = S(x);
            S = S !== void 0 ? S : b("MessengerParticipants.bs").getDefaultName(0);
            La = j.createElement(b("ReplyingToMessageReact.bs").make, {
                name: S,
                body: b("bs_belt_Option").getWithDefault(b("bs_caml_option").nullable_to_opt(x.body), ""),
                attachments: b("bs_belt_Option").getWithDefault(b("bs_caml_option").nullable_to_opt(x.attachments), []),
                onCancelReplyingToMessage: n,
                isChatTab: !1
            })
        }
        S = C == null ? null : j.jsx(b("MessengerStagedFilesPreviewM4React.bs").make, {
            fileUploader: c,
            onResize: F,
            thread: G,
            threadId: C
        });
        if (A == null || C == null || !b("MessageRequestUtils").shouldShowUnconnectedThreadInfoText(A))
            n = null;
        else {
            var W = A.other_user_fbid;
            if (W == null)
                n = null;
            else {
                W = b("MessengerParticipants.bs").getNow(b("MercuryIDs").getParticipantIDFromUserID(W));
                n = W == null ? null : j.jsx(j.Suspense, {
                    children: j.createElement(b("MessengerUnconnectedThreadInfoTextReact.bs").make, {
                        name: W.name,
                        onBlock: function(a) {
                            return b("MessengerComposerPendingActionsM4React.bs").handleIgnoreBlock(E, A, a)
                        },
                        onDelete: function(a) {
                            return b("MessengerComposerPendingActionsM4React.bs").handleDeleteDialogDeleteClick(E, A, C, a)
                        },
                        onToggle: function(a) {
                            return b("MessengerComposerPendingActionsM4React.bs").handleDeleteDialogToggleClick(A, C, a)
                        },
                        thread: A
                    }),
                    fallback: j.jsx("div", {})
                })
            }
        }
        if (A == null)
            W = b("MessengerCustomColorUtils.bs").defaultColor(0);
        else {
            var X = A.gradient_colors.length;
            if (X > 0)
                W = b("bs_caml_array").caml_array_get(A.gradient_colors, X - 1 | 0);
            else {
                X = A.solid_color;
                W = X == null ? b("MessengerCustomColorUtils.bs").defaultColor(0) : X
            }
        }
        X = "rgba(134, 142, 153, 0.75)";
        I = !(C == null) && !(I == null) && z ? j.jsx("div", {
            children: j.jsx(b("MessengerBotMenuButtonReact.bs").make, {
                className: "_30yy",
                fill: W,
                flyoutAlignment: 1,
                getInput: function(a) {
                    return K.current
                },
                pageId: I,
                threadId: C
            }),
            className: "_7mkk"
        }) : null;
        T = !T || U || Q === b("MercurySourceType").MESSENGER_ROOM_INCALL_CHAT ? null : j.jsx(b("MessengerVoiceClipButtonReact.bs").make, {
            className: "_30yy _7oam",
            fill: W,
            flyoutAlignment: 1,
            getInput: function(a) {
                return K.current
            },
            onVoiceClipCreate: t
        }, "voice_clip_button");
        if (!b("P2PGKValues").P2PVisible || Ca || u == null || v == null || C == null || v.size === 1)
            t = null;
        else {
            var Y = b("P2PSendMoneyContainerBootloaderReact.bs").currencyCode === b("bs_caml_option").some(b("P2PPaymentSupportedCurrency").PEN) ? b("MessengerCurrencyPENIconSVGM4React.bs").make(W) : b("P2PSendMoneyContainerBootloaderReact.bs").currencyCode === b("bs_caml_option").some(b("P2PPaymentSupportedCurrency").PHP) ? b("MessengerCurrencyPHPIconSVGM4React.bs").make(W) : b("P2PSendMoneyContainerBootloaderReact.bs").currencyCode === b("bs_caml_option").some(b("P2PPaymentSupportedCurrency").EUR) ? b("MessengerCurrencyEURIconSVGM4React.bs").make(W) : b("P2PSendMoneyContainerBootloaderReact.bs").currencyCode === b("bs_caml_option").some(b("P2PPaymentSupportedCurrency").GBP) ? b("MessengerCurrencyGBPIconSVGM4React.bs").make(W) : b("P2PSendMoneyContainerBootloaderReact.bs").currencyCode === b("bs_caml_option").some(b("P2PPaymentSupportedCurrency").THB) ? b("MessengerCurrencyTHBIconSVGM4React.bs").make(W) : b("MessengerCurrencyUSDIconSVGM4React.bs").make(W);
            t = j.jsx(j.Suspense, {
                children: b("ReasonReact.bs").element(void 0, void 0, b("P2PSendMoneyContainerBootloaderReact.bs").make(Y, "_30yy _7oam", void 0, void 0, b("bs_caml_option").some(u), v.reduce(function(a, b, c, d) {
                    a.push(b.id);
                    return a
                }, []), void 0, b("bs_js_null_undefined").fromOption(G), C, [])),
                fallback: j.jsx(b("AutoFocusableLink.react"), {
                    children: Y,
                    className: "_30yy _7oam",
                    role: "button"
                })
            }, "send_money_button")
        }
        u = !(A == null) && !(B == null) && !(A.is_canonical || U || b("gkx")("994335")) ? j.jsx(b("MessengerGroupPollingButtonM4React.bs").make, {
            className: "_30yy _7oam",
            fill: W,
            flyoutAlignment: 1,
            getInput: function(a) {
                return K.current
            },
            threadFbid: B
        }, "group_poll_button") : null;
        Y = b("gkx")("678262") && b("isWebGLEnabled")() && H !== void 0 && !Ca && Q !== b("MercurySourceType").MESSENGER_ROOM_INCALL_CHAT ? j.jsx(j.Suspense, {
            children: j.jsx(b("MessengerGamesButtonReact.bs").make, {
                className: "_30yy _7oam",
                fill: W,
                flyoutAlignment: 1,
                getInput: function(a) {
                    return K.current
                },
                threadId: J
            }),
            fallback: j.jsx(b("AutoFocusableLink.react"), {
                children: b("MessengerGamesIconSVGM4React.bs").make(W),
                className: "_30yy _7oam",
                role: "button"
            })
        }, "games_button") : null;
        B = !(C == null) && b("gkx")("678582") ? b("ReasonReact.bs").element("quickcam_button", void 0, b("MessengerQuickCamButtonBootLoader.bs").make("_7oam", W, b("MessengerQuickCamOrigins").MESSENGER, function(a) {
            return 0
        }, b("bs_caml_option").some(j.jsx(b("AutoFocusableLink.react"), {
            "aria-label": h._("Ch\u1ee5p \u1ea3nh b\u1eb1ng quick cam"),
            children: b("MessengerCameraIconSVGM4React.bs").make(W),
            className: "_30yy _7oam"
        }, "quickcam_button_placeholder")), C, E, [])) : null;
        H = b("CurrentUser").isWorkUser() && !b("WorkFileUploadsGating").canUploadFiles;
        Q = C == null ? j.jsx("div", {
            children: j.jsx(b("MessengerPhotoIconSVGM4React.bs").make, {
                size: 36,
                fill: X
            }),
            className: "_7oam"
        }, "attachment_button_disabled") : j.jsx("div", {
            children: j.createElement(b("ChatPhotoUploader.react"), {
                allowCrossPage: !0,
                className: "_7oan",
                customUI: !0,
                disabled: !1,
                fill: W,
                imageClassName: "hidden_elem",
                imagesOnly: H,
                focusInput: V,
                onAllUploadsComplete: o,
                onLastUploadFail: q,
                onLastUploadCancel: p,
                onSubmit: r,
                onUploadError: a,
                threadID: C,
                viewer: E,
                ref: function(a) {
                    ma.current = a;
                    return 0
                }
            }),
            className: "_30yy _7oam"
        }, "attachment_button");
        var Z = !w;
        Z = j.jsx(b("MessengerStickerButtonReact.bs").make, {
            className: (Z ? "" : "_30yy") + " _7oam",
            disabled: Z,
            fill: Z ? X : W,
            flyoutAlignment: 1,
            getInput: function(a) {
                return K.current
            },
            onSelect: function(a, c, d) {
                b("bs_curry")._1(fa, a);
                return 0
            }
        }, "sticker_button");
        var $ = !w;
        H = j.jsxs(j.Fragment, {
            children: [j.jsx("div", {
                children: j.createElement(b("ChatPhotoUploader.react"), {
                    allowCrossPage: !0,
                    disabled: $,
                    ref: function(a) {
                        ka.current = a;
                        return 0
                    },
                    imagesOnly: H,
                    focusInput: V,
                    onAllUploadsComplete: o,
                    onLastUploadFail: q,
                    onLastUploadCancel: p,
                    onSubmit: r,
                    onUploadError: a
                }),
                style: {
                    display: "none"
                }
            }, "gif_uploader"), j.jsx(b("MessengerGifButtonReact.bs").make, {
                className: "_30yy _7oam",
                disabled: $,
                fill: $ ? X : W,
                flyoutAlignment: 1,
                getInput: function(a) {
                    return K.current
                },
                location: 2,
                onSelect: y
            }, "gif_button")]
        }, "gif_button");
        o = [T, t, Y, B, u];
        var Ma = G === void 0 || !o.some(function(a) {
            return a !== null
        });
        q = function(a) {
            if (Ma)
                return 0;
            else {
                a.stopPropagation();
                N || b("bs_curry")._1(ta, function(a) {
                    return !0
                });
                return b("bs_curry")._1(sa, function(a) {
                    return !a
                })
            }
        }
        ;
        if (o.length > 6)
            throw [ba, "Animation Currently Supports <= 6 Icons to add support for more please add new CSS rules in messengerComposer.css (more details there at: .messengerComposer/moreIconsOpen )"];
        p = O !== 0 ? j.jsx(j.Fragment, {
            children: o
        }) : j.jsx(j.Fragment, {
            children: o.reverse()
        });
        r = {
            fill: N || Ma ? X : W
        };
        a = j.jsx("div", {
            children: j.jsx("div", {
                children: b("MessengerPlusCircleIconSVGM4React.bs").makeWithPathStyle(r),
                className: "_7mki" + (!Ma && N ? " _7mkj" : "") + (Ma ? " _7v3s" : ""),
                onTransitionEnd: function(a) {
                    if (N)
                        return 0;
                    else {
                        b("requestAnimationFrame")(function(a) {
                            b("requestAnimationFrame")(function(a) {
                                b("requestAnimationFrame")(function(a) {
                                    return b("bs_curry")._1(ta, function(a) {
                                        return !1
                                    })
                                });
                                return 0
                            });
                            return 0
                        });
                        return 0
                    }
                }
            }),
            className: "_7mkh" + (z ? " _3-9a" : ""),
            onClick: q
        });
        $ = [Q, Z, H];
        if (aa)
            y = null;
        else {
            var Na;
            switch (O) {
            case 0:
                Na = j.jsxs(j.Fragment, {
                    children: [j.jsx("div", {
                        children: p,
                        ref: la,
                        className: "_7mkk _7mkl" + (N ? " _7oul" : ""),
                        style: N ? ya[0] : wa[0]
                    }), j.jsx("div", {
                        children: $.reverse(),
                        className: "_7mkk"
                    })]
                });
                break;
            case 1:
                Na = j.jsx("div", {
                    children: $.reverse(),
                    className: "_7mkk"
                });
                break;
            case 2:
                Na = null;
                break
            }
            y = j.jsxs(j.Fragment, {
                children: [I, a, Na]
            })
        }
        T = j.jsxs("div", {
            children: [O === 2 ? j.jsx(j.Fragment, {
                children: $
            }) : null, p],
            className: "_7mkk _7t1o" + (N ? " _7t0e" : "") + (N ? "" : " _7t0j")
        });
        t = aa ? null : j.jsx(b("MessengerEmojiButtonReact.bs").make, {
            className: "_30yy _7odb",
            fill: W,
            flyoutAlignment: 2,
            getInput: function(a) {
                return K.current
            },
            onSelect: Ga,
            sendCustomEmoji: function(a, c, d) {
                b("bs_curry")._3(da, a, c, d);
                return 0
            },
            threadId: J,
            ref: ja
        });
        if (w && Da && !g)
            Y = j.jsx(b("MessengerSendButtonReact.bs").make, {
                className: (J !== void 0 ? "_30yy" : "") + " _38lh _7kpi",
                customColor: W,
                onClick: Ja,
                useIcon: !0
            });
        else {
            B = b("MessengerHotLikeUtils").getCustomEmojiFromThread(G);
            u = B == null ? void 0 : b("bs_caml_option").some(B);
            o = !w;
            Y = j.jsx(b("MessengerHotLikeButton.react"), {
                className: (o ? "" : "_30yy") + " _4rv9 _6ymq" + (u === void 0 ? " _7kpj" : "") + (u !== void 0 ? " _7v3t" : ""),
                customColor: o ? X : W,
                customLike: B,
                disabled: o,
                renderSize: 24,
                sendSticker: function(a) {
                    b("bs_curry")._1(fa, a);
                    return 0
                },
                sendCustomLike: function(a, c, d) {
                    b("bs_curry")._3(da, a, c, d);
                    return 0
                },
                threadID: J,
                thread: G
            })
        }
        r = j.jsx(b("WorkChatSmartReplies.react"), {
            threadID: J,
            onClick: ea,
            onResize: F
        });
        if (A == null || D === b("MessengerView").DETAIL.COMPOSE)
            z = null;
        else {
            q = A.cannot_reply_reason;
            Q = q == null ? !1 : q === b("MessengerThreadCannotReplyReason").BLOCKED;
            if (Q) {
                A.is_canonical || i(0, 4973);
                ga !== void 0 || i(0, 4974);
                A.other_user_fbid !== null || i(0, 4975);
                Z = A.other_user_fbid;
                if (Z == null)
                    z = j.jsx(l, {});
                else if (v == null)
                    z = j.jsx(l, {});
                else {
                    H = v.get(b("MercuryIDs").getParticipantIDFromUserID(Z));
                    (H == null ? void 0 : b("bs_caml_option").some(H)) !== void 0 || i(0, 4976);
                    var Oa = {
                        state: !1
                    };
                    b("MessengerState.bs").compute(E, function(a) {
                        Oa.state = b("MercuryIgnoredBlockedParticipants.bs").qualifiesAs(E, a.blocked_ids, A);
                        return 0
                    });
                    z = H == null ? j.jsx(l, {}) : Oa.state ? j.jsx(ca, {
                        threadId: J,
                        isPageChat: Ca,
                        participantID: H.id,
                        viewer: E
                    }) : j.jsx(l, {})
                }
            } else
                z = j.jsx("div", {
                    children: j.jsxs("div", {
                        children: [I, j.jsx("div", {
                            children: b("MercuryReadOnlyReason").getReason(A.has_email_participant),
                            className: "_2wy4"
                        })],
                        className: "_5irm"
                    }),
                    className: "_4rv3"
                })
        }
        if (d)
            return !(A == null) && !(C == null) && b("MessageRequestUtils").shouldShowComposerPendingActions(A) && !ua[0] ? j.jsx(b("MessengerComposerPendingActionsM4React.bs").make, {
                thread: A,
                threadId: C,
                viewer: E,
                onAccept: function(a) {
                    return b("bs_curry")._1(va, function(a) {
                        return !0
                    })
                }
            }) : j.jsxs("div", {
                children: [r, n, x !== null ? La : null, S, O !== 0 ? T : null, j.jsxs("div", {
                    children: [y, j.jsxs("div", {
                        children: [j.jsx(b("MessengerComposerInput.react"), {
                            disableAutofocus: e,
                            disableInput: Ea(f),
                            fileUploader: c,
                            workChatContentApps: null,
                            handleOnlyImageUploads: !1,
                            isComposing: U,
                            mentionsEnabled: m,
                            onBeforeInput: function(a, c) {
                                if (na !== void 0) {
                                    b("bs_caml_option").valFromOption(na).hideFlyout();
                                    return null
                                } else
                                    return null
                            },
                            onChange: Ia,
                            onFileUpload: Ha,
                            onMessageSend: ea,
                            onResize: F,
                            pageID: ia,
                            participants: ga,
                            ref: K,
                            smallerEqual640: !1,
                            sharePreview: ha,
                            showMenu: !1,
                            thread: G,
                            threadID: U ? "new" : J,
                            viewer: E
                        }), t],
                        className: "_7kpk" + (M[0] && O === 0 ? " _7u0c" : ""),
                        onClick: function(a) {
                            return b("bs_curry")._1(sa, function(a) {
                                return !1
                            })
                        }
                    }), Y],
                    className: "_5irm _7mkm"
                })],
                "aria-label": h._("Tin nh\u1eafn m\u1edbi"),
                className: "_4rv3 _7og6",
                role: "region"
            });
        else
            return z
    }
    g = j.forwardRef(c);
    f.TooManyIcons = ba;
    f.getBreakpointMediaQuery = k;
    f.deref = a;
    f.Blocked = d;
    f.BlockedOther = e;
    f.make = g
}
), null);
__d("MessengerComposerM4React.re", ["MessengerComposerM4React.bs"], (function(a, b, c, d, e, f) {
    (function(a) {
        return null
    }
    );
    a = b("MessengerComposerM4React.bs").make;
    f.make = a
}
), null);
__d("MessengerMuteDialogReact.bs", ["cx", "fbt", "bs_block", "bs_curry", "React", "ReasonReact.bs", "MessengerDomIDs.bs", "MessengerDialog.react", "MessengerRadioList.react", "MessengerDialogBody.react", "MessengerDialogHeaderReact.bs", "MessengerDialogButton.react", "MessengerDialogFooter.react", "MessengerDialogCancelButton.react"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    function j(a) {
        if (typeof a === "number")
            return -1;
        else if (a.tag)
            return a[0] * 3600;
        else
            return a[0] * 60
    }
    var k = (c = b("bs_block")).__(0, [15])
      , l = c.__(1, [1])
      , m = c.__(1, [8])
      , n = c.__(1, [24])
      , o = b("ReasonReact.bs").reducerComponent("MessengerMuteDialogReact");
    function a(a, c) {
        return {
            debugName: o.debugName,
            reactClassInternal: o.reactClassInternal,
            handedOffState: o.handedOffState,
            getDerivedStateFromProps: o.getDerivedStateFromProps,
            didMount: o.didMount,
            didUpdate: o.didUpdate,
            willUnmount: o.willUnmount,
            shouldUpdate: o.shouldUpdate,
            render: function(a) {
                var c, d = a.state;
                return i.jsxs(b("MessengerDialog.react"), {
                    shown: d.shown,
                    titleID: b("MessengerDomIDs.bs").ids.MUTE_DIALOG_TITLE,
                    children: [i.createElement(b("MessengerDialogHeaderReact.bs").make, {
                        children: h._("T\u1eaft cu\u1ed9c tr\u00f2 chuy\u1ec7n")
                    }), i.jsxs(b("MessengerDialogBody.react"), {
                        children: [i.jsx("div", {
                            children: h._("B\u1ea1n s\u1ebd ti\u1ebfp t\u1ee5c nh\u1eadn \u0111\u01b0\u1ee3c th\u00f4ng b\u00e1o \u0040mention khi t\u1eaft."),
                            className: "_3-96"
                        }), i.jsxs(c = b("MessengerRadioList.react"), {
                            name: "messengerMuteOptions",
                            onValueChange: function(c) {
                                return b("bs_curry")._1(a.send, [c])
                            },
                            selectedValue: d.muteSetting,
                            children: [i.jsx(c.Item, {
                                value: k,
                                children: h._("Trong 15 ph\u00fat")
                            }), i.jsx(c.Item, {
                                value: l,
                                children: h._("Trong 1 gi\u1edd")
                            }), i.jsx(c.Item, {
                                value: m,
                                children: h._("Trong 8 gi\u1edd")
                            }), i.jsx(c.Item, {
                                value: n,
                                children: h._("Trong 24 gi\u1edd")
                            }), i.jsx(c.Item, {
                                value: 0,
                                children: h._("\u0110\u1ebfn khi t\u00f4i b\u1eadt l\u1ea1i")
                            })]
                        })]
                    }), i.jsxs(b("MessengerDialogFooter.react"), {
                        children: [i.jsx(b("MessengerDialogCancelButton.react"), {}), i.jsx(b("MessengerDialogButton.react"), {
                            label: h._("T\u1eaft th\u00f4ng b\u00e1o"),
                            onClick: function(c) {
                                return b("bs_curry")._1(a.send, 0)
                            },
                            type: "primary"
                        })]
                    })]
                })
            },
            initialState: function(a) {
                return {
                    muteSetting: k,
                    shown: !0
                }
            },
            retainedProps: o.retainedProps,
            reducer: function(c, d) {
                if (c)
                    return b("bs_block").__(0, [{
                        muteSetting: c[0],
                        shown: d.shown
                    }]);
                else
                    return b("bs_block").__(2, [{
                        muteSetting: d.muteSetting,
                        shown: !1
                    }, function(c) {
                        return b("bs_curry")._1(a, j(c.state.muteSetting))
                    }
                    ])
            },
            jsElementWrapped: o.jsElementWrapped
        }
    }
    d = 0;
    f.convertMuteToSeconds = j;
    f.fifteenMinutes = k;
    f.oneHour = l;
    f.eightHours = m;
    f.twentyFourHours = n;
    f.always = d;
    f.component = o;
    f.make = a
}
), null);
__d("MNRTCCallabilityStore", ["MessengerDispatcher", "RTCCallabilityStore"], (function(a, b, c, d, e, f) {
    "use strict";
    a = new (b("RTCCallabilityStore"))(b("MessengerDispatcher"));
    e.exports = a
}
), null);
