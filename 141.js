if (self.CavalryLogger) {
    CavalryLogger.start_js(["8ZJVn"]);
}

__d("PagesManagerInboxNUX", [], (function(a, b, c, d, e, f) {
    e.exports = {
        bizweb_inbox_message_ads_upsell: 8336,
        pages_inbox_welcome_dialog: 4622,
        page_inbox_unified_thread_list_instagram_nux: 7319,
        page_inbox_unified_thread_list_nux: 7318,
        bizweb_inbox_upsell_nux: 7762,
        page_inbox_marketing_email_nux: 7423,
        leads_center_segmentation_inbox_upsell_nux: 7984,
        pages_smart_compose_nux: 7676,
        page_inbox_utl_enable_messenger_nux: 7320,
        page_inbox_instagram_direct_nux: 6967,
        www_return_to_send_message_nux: 7504,
        page_inbox_ig_comment_new_experience: 7344,
        pages_comms_new_automated_responses: 6645,
        www_pages_new_away_toggle_nux: 5345,
        www_pages_inbox_new_folder: 7376,
        pages_inbox_admin_assign: 5144,
        page_inbox_saved_reply_nux: 7191,
        pages_inbox_bulk_actions: -1,
        page_inbox_saved_reply_for_ig_direct_nux: 7422,
        pages_inbox_auto_response_faq: 7434,
        saved_responses_to_automated_responses: 6862,
        business_inbox_ig_direct_automated_response: 7538,
        business_inbox_product_picker_nux: 7616,
        business_inbox_product_picker_igd_nux: 8431,
        business_inbox_covid_automated_response: 7852,
        business_inbox_ig_direct_multi_admin_assignment: 7552,
        www_page_messaging_persona_entrybutton: 6242,
        inbox_messenger_guest_chat: 8019,
        business_inbox_guest_chat_and_upgrade: 8136,
        business_inbox_guest_upgrade: 8138,
        page_inbox_saved_reply_upsell_nux: 7452,
        www_page_inbox_order_details_nux: 7798,
        business_inbox_go_to_home_banner: 8013,
        page_inbox_instagram_direct_upsell: 6773
    }
}
), null);
__d("PagesManagerInboxTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:PagesManagerInboxLoggerConfig", this.$1, b("Banzai").BASIC, a)
        }
        ;
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:PagesManagerInboxLoggerConfig", this.$1, b("Banzai").VITAL, a)
        }
        ;
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:PagesManagerInboxLoggerConfig", this.$1, {
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
        c.setAutomatedResponseTriggerType = function(a) {
            this.$1.automated_response_trigger_type = a;
            return this
        }
        ;
        c.setBroadcastAudience = function(a) {
            this.$1.broadcast_audience = a;
            return this
        }
        ;
        c.setBroadcastMessageFormat = function(a) {
            this.$1.broadcast_message_format = a;
            return this
        }
        ;
        c.setEventName = function(a) {
            this.$1.event_name = a;
            return this
        }
        ;
        c.setFirstPayloadTime = function(a) {
            this.$1.first_payload_time = a;
            return this
        }
        ;
        c.setFolder = function(a) {
            this.$1.folder = a;
            return this
        }
        ;
        c.setHadError = function(a) {
            this.$1.had_error = a;
            return this
        }
        ;
        c.setHref = function(a) {
            this.$1.href = a;
            return this
        }
        ;
        c.setIsCached = function(a) {
            this.$1.is_cached = a;
            return this
        }
        ;
        c.setIsInboxRedesignWithSideNav = function(a) {
            this.$1.is_inbox_redesign_with_side_nav = a;
            return this
        }
        ;
        c.setItemsCount = function(a) {
            this.$1.items_count = a;
            return this
        }
        ;
        c.setLoadTime = function(a) {
            this.$1.load_time = a;
            return this
        }
        ;
        c.setMessage = function(a) {
            this.$1.message = a;
            return this
        }
        ;
        c.setModuleName = function(a) {
            this.$1.module_name = a;
            return this
        }
        ;
        c.setNuxID = function(a) {
            this.$1.nux_id = a;
            return this
        }
        ;
        c.setPageCommItemID = function(a) {
            this.$1.page_comm_item_id = a;
            return this
        }
        ;
        c.setPageCommItemStatus = function(a) {
            this.$1.page_comm_item_status = a;
            return this
        }
        ;
        c.setPageCommSearch = function(a) {
            this.$1.page_comm_search = a;
            return this
        }
        ;
        c.setPageCommSearchType = function(a) {
            this.$1.page_comm_search_type = a;
            return this
        }
        ;
        c.setPageID = function(a) {
            this.$1.page_id = a;
            return this
        }
        ;
        c.setPlatform = function(a) {
            this.$1.platform = a;
            return this
        }
        ;
        c.setScreenHeight = function(a) {
            this.$1.screen_height = a;
            return this
        }
        ;
        c.setScreenWidth = function(a) {
            this.$1.screen_width = a;
            return this
        }
        ;
        c.setStackTrace = function(a) {
            this.$1.stack_trace = a;
            return this
        }
        ;
        c.setThreadToken = function(a) {
            this.$1.thread_token = a;
            return this
        }
        ;
        c.setTimeSinceLoad = function(a) {
            this.$1.time_since_load = a;
            return this
        }
        ;
        c.setTraceID = function(a) {
            this.$1.trace_id = a;
            return this
        }
        ;
        c.setUsesStreamingPagination = function(a) {
            this.$1.uses_streaming_pagination = a;
            return this
        }
        ;
        c.setViewMode = function(a) {
            this.$1.view_mode = a;
            return this
        }
        ;
        return a
    }();
    c = {
        automated_response_trigger_type: !0,
        broadcast_audience: !0,
        broadcast_message_format: !0,
        event_name: !0,
        first_payload_time: !0,
        folder: !0,
        had_error: !0,
        href: !0,
        is_cached: !0,
        is_inbox_redesign_with_side_nav: !0,
        items_count: !0,
        load_time: !0,
        message: !0,
        module_name: !0,
        nux_id: !0,
        page_comm_item_id: !0,
        page_comm_item_status: !0,
        page_comm_search: !0,
        page_comm_search_type: !0,
        page_id: !0,
        platform: !0,
        screen_height: !0,
        screen_width: !0,
        stack_trace: !0,
        thread_token: !0,
        time_since_load: !0,
        trace_id: !0,
        uses_streaming_pagination: !0,
        view_mode: !0
    };
    e.exports = a
}
), null);
__d("PagesMessagingInboxActionsTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:PagesMessagingInboxActionsLoggerConfig", this.$1, b("Banzai").BASIC, a)
        }
        ;
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:PagesMessagingInboxActionsLoggerConfig", this.$1, b("Banzai").VITAL, a)
        }
        ;
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:PagesMessagingInboxActionsLoggerConfig", this.$1, {
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
        c.setInboxAction = function(a) {
            this.$1.inbox_action = a;
            return this
        }
        ;
        c.setPageCommSearchType = function(a) {
            this.$1.page_comm_search_type = a;
            return this
        }
        ;
        c.setPlatform = function(a) {
            this.$1.platform = a;
            return this
        }
        ;
        c.updateExtraData = function(a) {
            a = b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));
            b("GeneratedLoggerUtils").checkExtraDataFieldNames(a, g);
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        }
        ;
        c.addToExtraData = function(a, b) {
            var c = {};
            c[a] = b;
            return this.updateExtraData(c)
        }
        ;
        return a
    }();
    var g = {
        inbox_action: !0,
        page_comm_search_type: !0,
        platform: !0
    };
    e.exports = a
}
), null);
__d("PagesManagerInboxInstagramCommentRowContainer_item.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        };
        return {
            argumentDefinitions: [],
            kind: "Fragment",
            metadata: null,
            name: "PagesManagerInboxInstagramCommentRowContainer_item",
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "has_biz_liked_comment",
                storageKey: null
            }, a, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "text",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "creation_time",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "like_count",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "reply_count",
                storageKey: null
            }, {
                alias: null,
                args: null,
                concreteType: "InstagramUserV2",
                kind: "LinkedField",
                name: "instagram_actor",
                plural: !1,
                selections: [a, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "username",
                    storageKey: null
                }, {
                    alias: "profile_picture_24",
                    args: [{
                        kind: "Literal",
                        name: "height",
                        value: 24
                    }, {
                        kind: "Literal",
                        name: "width",
                        value: 24
                    }],
                    concreteType: "Image",
                    kind: "LinkedField",
                    name: "profile_picture",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "uri",
                        storageKey: null
                    }],
                    storageKey: "profile_picture(height:24,width:24)"
                }],
                storageKey: null
            }],
            type: "InstagramComment",
            abstractKey: null
        }
    }();
    e.exports = a
}
), null);
__d("PagesManagerInboxInstagramCommentsContainerPaginationQuery.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "count"
        }
          , b = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "cursor"
        }
          , c = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "instagramMediaID"
        }
          , d = [{
            kind: "Variable",
            name: "id",
            variableName: "instagramMediaID"
        }]
          , e = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null
        }
          , f = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        }
          , g = [{
            kind: "Variable",
            name: "before",
            variableName: "cursor"
        }, {
            kind: "Variable",
            name: "last",
            variableName: "count"
        }]
          , h = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "creation_time",
            storageKey: null
        }
          , i = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "username",
            storageKey: null
        }
          , j = {
            alias: "profile_picture_24",
            args: [{
                kind: "Literal",
                name: "height",
                value: 24
            }, {
                kind: "Literal",
                name: "width",
                value: 24
            }],
            concreteType: "Image",
            kind: "LinkedField",
            name: "profile_picture",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "uri",
                storageKey: null
            }],
            storageKey: "profile_picture(height:24,width:24)"
        };
        return {
            fragment: {
                argumentDefinitions: [a, b, c],
                kind: "Fragment",
                metadata: null,
                name: "PagesManagerInboxInstagramCommentsContainerPaginationQuery",
                selections: [{
                    alias: null,
                    args: d,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "node",
                    plural: !1,
                    selections: [{
                        args: [{
                            kind: "Variable",
                            name: "count",
                            variableName: "count"
                        }, {
                            kind: "Variable",
                            name: "cursor",
                            variableName: "cursor"
                        }],
                        kind: "FragmentSpread",
                        name: "PagesManagerInboxInstagramCommentsContainer_igPost"
                    }],
                    storageKey: null
                }],
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: [c, a, b],
                kind: "Operation",
                name: "PagesManagerInboxInstagramCommentsContainerPaginationQuery",
                selections: [{
                    alias: null,
                    args: d,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "node",
                    plural: !1,
                    selections: [e, f, {
                        kind: "InlineFragment",
                        selections: [{
                            alias: null,
                            args: g,
                            concreteType: "InstagramMediaV2IgCommentsConnection",
                            kind: "LinkedField",
                            name: "ig_comments",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "InstagramMediaV2IgCommentsEdge",
                                kind: "LinkedField",
                                name: "edges",
                                plural: !0,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "InstagramComment",
                                    kind: "LinkedField",
                                    name: "node",
                                    plural: !1,
                                    selections: [f, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "has_biz_liked_comment",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "text",
                                        storageKey: null
                                    }, h, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "like_count",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "reply_count",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "InstagramUserV2",
                                        kind: "LinkedField",
                                        name: "instagram_actor",
                                        plural: !1,
                                        selections: [f, i, j],
                                        storageKey: null
                                    }, e],
                                    storageKey: null
                                }, {
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
                                    name: "start_cursor",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "has_previous_page",
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: g,
                            filters: null,
                            handle: "connection",
                            key: "PagesManagerInboxInstagramCommentsContainer_ig_comments",
                            kind: "LinkedHandle",
                            name: "ig_comments"
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "caption_text",
                            storageKey: null
                        }, h, {
                            alias: null,
                            args: null,
                            concreteType: "InstagramUserV2",
                            kind: "LinkedField",
                            name: "instagram_actor",
                            plural: !1,
                            selections: [i, j, f],
                            storageKey: null
                        }],
                        type: "InstagramMediaV2",
                        abstractKey: null
                    }],
                    storageKey: null
                }]
            },
            params: {
                id: "3230955056986052",
                metadata: {},
                name: "PagesManagerInboxInstagramCommentsContainerPaginationQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("PagesManagerInboxInstagramCommentsContainer_igPost.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        };
        return {
            argumentDefinitions: [{
                defaultValue: 20,
                kind: "LocalArgument",
                name: "count"
            }, {
                defaultValue: null,
                kind: "LocalArgument",
                name: "cursor"
            }],
            kind: "Fragment",
            metadata: {
                connection: [{
                    count: "count",
                    cursor: "cursor",
                    direction: "backward",
                    path: ["ig_comments"]
                }]
            },
            name: "PagesManagerInboxInstagramCommentsContainer_igPost",
            selections: [a, {
                alias: "ig_comments",
                args: null,
                concreteType: "InstagramMediaV2IgCommentsConnection",
                kind: "LinkedField",
                name: "__PagesManagerInboxInstagramCommentsContainer_ig_comments_connection",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "InstagramMediaV2IgCommentsEdge",
                    kind: "LinkedField",
                    name: "edges",
                    plural: !0,
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: "InstagramComment",
                        kind: "LinkedField",
                        name: "node",
                        plural: !1,
                        selections: [a, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "__typename",
                            storageKey: null
                        }, {
                            args: null,
                            kind: "FragmentSpread",
                            name: "PagesManagerInboxInstagramCommentRowContainer_item"
                        }],
                        storageKey: null
                    }, {
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
                        name: "start_cursor",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "has_previous_page",
                        storageKey: null
                    }],
                    storageKey: null
                }],
                storageKey: null
            }, {
                args: null,
                kind: "FragmentSpread",
                name: "PagesManagerInboxInstagramPostCaptionContainer_igPost"
            }],
            type: "InstagramMediaV2",
            abstractKey: null
        }
    }();
    e.exports = a
}
), null);
__d("PagesManagerInboxInstagramPostComposerContainer_igPost.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        }
          , b = [{
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null
        }];
        return {
            argumentDefinitions: [],
            kind: "Fragment",
            metadata: null,
            name: "PagesManagerInboxInstagramPostComposerContainer_igPost",
            selections: [a, {
                alias: null,
                args: null,
                concreteType: "InstagramUserV2",
                kind: "LinkedField",
                name: "instagram_actor",
                plural: !1,
                selections: [a, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "username",
                    storageKey: null
                }, {
                    alias: "profile_picture_24",
                    args: [{
                        kind: "Literal",
                        name: "height",
                        value: 24
                    }, {
                        kind: "Literal",
                        name: "width",
                        value: 24
                    }],
                    concreteType: "Image",
                    kind: "LinkedField",
                    name: "profile_picture",
                    plural: !1,
                    selections: b,
                    storageKey: "profile_picture(height:24,width:24)"
                }, {
                    alias: "profile_picture_32",
                    args: [{
                        kind: "Literal",
                        name: "height",
                        value: 32
                    }, {
                        kind: "Literal",
                        name: "width",
                        value: 32
                    }],
                    concreteType: "Image",
                    kind: "LinkedField",
                    name: "profile_picture",
                    plural: !1,
                    selections: b,
                    storageKey: "profile_picture(height:32,width:32)"
                }],
                storageKey: null
            }],
            type: "InstagramMediaV2",
            abstractKey: null
        }
    }();
    e.exports = a
}
), null);
__d("PagesManagerInboxInstagramRepliesFluxContainerQuery.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "count"
        }, {
            defaultValue: null,
            kind: "LocalArgument",
            name: "cursor"
        }, {
            defaultValue: null,
            kind: "LocalArgument",
            name: "instagramCommentID"
        }]
          , b = [{
            kind: "Variable",
            name: "id",
            variableName: "instagramCommentID"
        }]
          , c = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null
        }
          , d = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        }
          , e = [{
            kind: "Variable",
            name: "before",
            variableName: "cursor"
        }, {
            kind: "Variable",
            name: "last",
            variableName: "count"
        }];
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "PagesManagerInboxInstagramRepliesFluxContainerQuery",
                selections: [{
                    alias: "item",
                    args: b,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "node",
                    plural: !1,
                    selections: [{
                        args: [{
                            kind: "Variable",
                            name: "count",
                            variableName: "count"
                        }, {
                            kind: "Variable",
                            name: "cursor",
                            variableName: "cursor"
                        }],
                        kind: "FragmentSpread",
                        name: "PagesManagerInboxInstagramRepliesContainer_item"
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
                name: "PagesManagerInboxInstagramRepliesFluxContainerQuery",
                selections: [{
                    alias: "item",
                    args: b,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "node",
                    plural: !1,
                    selections: [c, d, {
                        kind: "InlineFragment",
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "reply_count",
                            storageKey: null
                        }, {
                            alias: null,
                            args: e,
                            concreteType: "InstagramCommentInstagramRepliesConnection",
                            kind: "LinkedField",
                            name: "instagram_replies",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "InstagramCommentInstagramRepliesEdge",
                                kind: "LinkedField",
                                name: "edges",
                                plural: !0,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "InstagramComment",
                                    kind: "LinkedField",
                                    name: "node",
                                    plural: !1,
                                    selections: [d, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "has_biz_liked_comment",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "text",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "creation_time",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "like_count",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "InstagramUserV2",
                                        kind: "LinkedField",
                                        name: "instagram_actor",
                                        plural: !1,
                                        selections: [d, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "username",
                                            storageKey: null
                                        }, {
                                            alias: "profile_picture_24",
                                            args: [{
                                                kind: "Literal",
                                                name: "height",
                                                value: 24
                                            }, {
                                                kind: "Literal",
                                                name: "width",
                                                value: 24
                                            }],
                                            concreteType: "Image",
                                            kind: "LinkedField",
                                            name: "profile_picture",
                                            plural: !1,
                                            selections: [{
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "uri",
                                                storageKey: null
                                            }],
                                            storageKey: "profile_picture(height:24,width:24)"
                                        }],
                                        storageKey: null
                                    }, c],
                                    storageKey: null
                                }, {
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
                                    name: "start_cursor",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "has_previous_page",
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: e,
                            filters: null,
                            handle: "connection",
                            key: "PagesManagerInboxInstagramRepliesContainer_instagram_replies",
                            kind: "LinkedHandle",
                            name: "instagram_replies"
                        }],
                        type: "InstagramComment",
                        abstractKey: null
                    }],
                    storageKey: null
                }]
            },
            params: {
                id: "3062819473845421",
                metadata: {},
                name: "PagesManagerInboxInstagramRepliesFluxContainerQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("PagesManagerInboxInstagramCommentCreateMutation.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "input"
        }]
          , b = [{
            kind: "Variable",
            name: "data",
            variableName: "input"
        }]
          , c = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        }
          , d = {
            alias: null,
            args: null,
            concreteType: "InstagramMediaV2",
            kind: "LinkedField",
            name: "instagram_media",
            plural: !1,
            selections: [c],
            storageKey: null
        }
          , e = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "creation_time",
            storageKey: null
        }
          , f = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "text",
            storageKey: null
        }
          , g = {
            alias: null,
            args: null,
            concreteType: "InstagramUserV2",
            kind: "LinkedField",
            name: "instagram_actor",
            plural: !1,
            selections: [c, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "username",
                storageKey: null
            }],
            storageKey: null
        };
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "PagesManagerInboxInstagramCommentCreateMutation",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: "InstagramCommentCreateResponsePayload",
                    kind: "LinkedField",
                    name: "instagram_comment_create",
                    plural: !1,
                    selections: [d, {
                        alias: null,
                        args: null,
                        concreteType: "InstagramMediaToInstagramCommentEdge",
                        kind: "LinkedField",
                        name: "instagram_media_comment_edge",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "InstagramComment",
                            kind: "LinkedField",
                            name: "node",
                            plural: !1,
                            selections: [e, f, g],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    storageKey: null
                }],
                type: "Mutation",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "PagesManagerInboxInstagramCommentCreateMutation",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: "InstagramCommentCreateResponsePayload",
                    kind: "LinkedField",
                    name: "instagram_comment_create",
                    plural: !1,
                    selections: [d, {
                        alias: null,
                        args: null,
                        concreteType: "InstagramMediaToInstagramCommentEdge",
                        kind: "LinkedField",
                        name: "instagram_media_comment_edge",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "InstagramComment",
                            kind: "LinkedField",
                            name: "node",
                            plural: !1,
                            selections: [e, f, g, c],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    storageKey: null
                }]
            },
            params: {
                id: "1574255349283686",
                metadata: {},
                name: "PagesManagerInboxInstagramCommentCreateMutation",
                operationKind: "mutation",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("PagesManagerInboxInstagramCommentDeleteMutation.graphql", [], (function(a, b, c, d, e, f) {
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
            concreteType: "InstagramCommentDeleteResponsePayload",
            kind: "LinkedField",
            name: "instagram_comment_delete",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                concreteType: "InstagramMediaV2",
                kind: "LinkedField",
                name: "instagram_media",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "id",
                    storageKey: null
                }],
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "deleted_instagram_comment_id",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "parent_instagram_comment_id",
                storageKey: null
            }],
            storageKey: null
        }];
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "PagesManagerInboxInstagramCommentDeleteMutation",
                selections: b,
                type: "Mutation",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "PagesManagerInboxInstagramCommentDeleteMutation",
                selections: b
            },
            params: {
                id: "2383825581703012",
                metadata: {},
                name: "PagesManagerInboxInstagramCommentDeleteMutation",
                operationKind: "mutation",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("PagesManagerInboxInstagramReplyCreateMutation.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "input"
        }]
          , b = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        };
        b = [{
            alias: null,
            args: [{
                kind: "Variable",
                name: "data",
                variableName: "input"
            }],
            concreteType: "InstagramReplyCreateResponsePayload",
            kind: "LinkedField",
            name: "instagram_reply_create",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                concreteType: "InstagramComment",
                kind: "LinkedField",
                name: "instagram_reply",
                plural: !1,
                selections: [b, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "text",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "creation_time",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "like_count",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "parent_comment_id",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    concreteType: "InstagramUserV2",
                    kind: "LinkedField",
                    name: "instagram_actor",
                    plural: !1,
                    selections: [b, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "username",
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
                name: "PagesManagerInboxInstagramReplyCreateMutation",
                selections: b,
                type: "Mutation",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "PagesManagerInboxInstagramReplyCreateMutation",
                selections: b
            },
            params: {
                id: "2867765086630547",
                metadata: {},
                name: "PagesManagerInboxInstagramReplyCreateMutation",
                operationKind: "mutation",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("PagesManagerInboxInstagramRepliesContainerPaginationQuery.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "count"
        }
          , b = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "cursor"
        }
          , c = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "instagramCommentID"
        }
          , d = [{
            kind: "Variable",
            name: "id",
            variableName: "instagramCommentID"
        }]
          , e = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null
        }
          , f = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        }
          , g = [{
            kind: "Variable",
            name: "before",
            variableName: "cursor"
        }, {
            kind: "Variable",
            name: "last",
            variableName: "count"
        }];
        return {
            fragment: {
                argumentDefinitions: [a, b, c],
                kind: "Fragment",
                metadata: null,
                name: "PagesManagerInboxInstagramRepliesContainerPaginationQuery",
                selections: [{
                    alias: null,
                    args: d,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "node",
                    plural: !1,
                    selections: [{
                        args: [{
                            kind: "Variable",
                            name: "count",
                            variableName: "count"
                        }, {
                            kind: "Variable",
                            name: "cursor",
                            variableName: "cursor"
                        }],
                        kind: "FragmentSpread",
                        name: "PagesManagerInboxInstagramRepliesContainer_item"
                    }],
                    storageKey: null
                }],
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: [c, a, b],
                kind: "Operation",
                name: "PagesManagerInboxInstagramRepliesContainerPaginationQuery",
                selections: [{
                    alias: null,
                    args: d,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "node",
                    plural: !1,
                    selections: [e, f, {
                        kind: "InlineFragment",
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "reply_count",
                            storageKey: null
                        }, {
                            alias: null,
                            args: g,
                            concreteType: "InstagramCommentInstagramRepliesConnection",
                            kind: "LinkedField",
                            name: "instagram_replies",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "InstagramCommentInstagramRepliesEdge",
                                kind: "LinkedField",
                                name: "edges",
                                plural: !0,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "InstagramComment",
                                    kind: "LinkedField",
                                    name: "node",
                                    plural: !1,
                                    selections: [f, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "has_biz_liked_comment",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "text",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "creation_time",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "like_count",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "InstagramUserV2",
                                        kind: "LinkedField",
                                        name: "instagram_actor",
                                        plural: !1,
                                        selections: [f, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "username",
                                            storageKey: null
                                        }, {
                                            alias: "profile_picture_24",
                                            args: [{
                                                kind: "Literal",
                                                name: "height",
                                                value: 24
                                            }, {
                                                kind: "Literal",
                                                name: "width",
                                                value: 24
                                            }],
                                            concreteType: "Image",
                                            kind: "LinkedField",
                                            name: "profile_picture",
                                            plural: !1,
                                            selections: [{
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "uri",
                                                storageKey: null
                                            }],
                                            storageKey: "profile_picture(height:24,width:24)"
                                        }],
                                        storageKey: null
                                    }, e],
                                    storageKey: null
                                }, {
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
                                    name: "start_cursor",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "has_previous_page",
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: g,
                            filters: null,
                            handle: "connection",
                            key: "PagesManagerInboxInstagramRepliesContainer_instagram_replies",
                            kind: "LinkedHandle",
                            name: "instagram_replies"
                        }],
                        type: "InstagramComment",
                        abstractKey: null
                    }],
                    storageKey: null
                }]
            },
            params: {
                id: "3340395889357968",
                metadata: {},
                name: "PagesManagerInboxInstagramRepliesContainerPaginationQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("PagesManagerInboxInstagramRepliesContainer_item.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        };
        return {
            argumentDefinitions: [{
                defaultValue: 3,
                kind: "LocalArgument",
                name: "count"
            }, {
                defaultValue: null,
                kind: "LocalArgument",
                name: "cursor"
            }],
            kind: "Fragment",
            metadata: {
                connection: [{
                    count: "count",
                    cursor: "cursor",
                    direction: "backward",
                    path: ["instagram_replies"]
                }]
            },
            name: "PagesManagerInboxInstagramRepliesContainer_item",
            selections: [a, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "reply_count",
                storageKey: null
            }, {
                alias: "instagram_replies",
                args: null,
                concreteType: "InstagramCommentInstagramRepliesConnection",
                kind: "LinkedField",
                name: "__PagesManagerInboxInstagramRepliesContainer_instagram_replies_connection",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "InstagramCommentInstagramRepliesEdge",
                    kind: "LinkedField",
                    name: "edges",
                    plural: !0,
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: "InstagramComment",
                        kind: "LinkedField",
                        name: "node",
                        plural: !1,
                        selections: [a, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "has_biz_liked_comment",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "text",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "creation_time",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "like_count",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "InstagramUserV2",
                            kind: "LinkedField",
                            name: "instagram_actor",
                            plural: !1,
                            selections: [a, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "username",
                                storageKey: null
                            }, {
                                alias: "profile_picture_24",
                                args: [{
                                    kind: "Literal",
                                    name: "height",
                                    value: 24
                                }, {
                                    kind: "Literal",
                                    name: "width",
                                    value: 24
                                }],
                                concreteType: "Image",
                                kind: "LinkedField",
                                name: "profile_picture",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "uri",
                                    storageKey: null
                                }],
                                storageKey: "profile_picture(height:24,width:24)"
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "__typename",
                            storageKey: null
                        }],
                        storageKey: null
                    }, {
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
                        name: "start_cursor",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "has_previous_page",
                        storageKey: null
                    }],
                    storageKey: null
                }],
                storageKey: null
            }],
            type: "InstagramComment",
            abstractKey: null
        }
    }();
    e.exports = a
}
), null);
__d("BizKitInboxConstants", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = "business_inbox_go_to_home_banner";
    f.BIZ_INBOX_GO_TO_HOME_BANNER = a
}
), null);
__d("IGMessageDataDispatcher", ["ExplicitRegistrationReactDispatcher"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        return b
    }(b("ExplicitRegistrationReactDispatcher"));
    c = new a({
        strict: !0
    });
    e.exports = c
}
), null);
__d("IGMessageDataMutateActionTypes", ["keyMirror"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("keyMirror")({
        FORCE_FETCH: "",
        CREATING: "",
        CREATE: "",
        UPDATING: "",
        UPDATE: "",
        DELETING: "",
        DELETE: ""
    });
    e.exports = a
}
), null);
__d("InstagramMessageThreadItemWebGraphQLQuery", ["WebGraphQLQueryBase"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        b.__getDocID = function() {
            return "3455749674436770"
        }
        ;
        b.getQueryID = function() {
            return "304235497674292"
        }
        ;
        return b
    }(b("WebGraphQLQueryBase"))
}
), null);
__d("InstagramMessageGraphQLThreadItemFetcher", ["Promise", "BanzaiODS", "InstagramMessageThreadItemWebGraphQLQuery", "WebGraphQL", "promiseDone"], (function(a, b, c, d, e, f) {
    "use strict";
    f.fetch = a;
    function a(a, c) {
        return new (b("Promise"))(function(d, e) {
            b("promiseDone")(b("WebGraphQL").exec(new (b("InstagramMessageThreadItemWebGraphQLQuery"))(c), {
                actorID: a,
                batchName: "InstagramMessageGraphQLThreadItemFetcher"
            }), function(a) {
                b("BanzaiODS").bumpEntityKey(2966, "Instagram_message_webgraphql", "InstagramMessageGraphQLThreadItemFetcher.success"),
                d(a)
            }, function(a) {
                a = a.errors;
                b("BanzaiODS").bumpEntityKey(2966, "Instagram_message_webgraphql", "InstagramMessageGraphQLThreadItemFetcher.failure");
                e(a)
            })
        }
        )
    }
}
), null);
__d("InstagramMessageThreadItemsWebGraphQLQuery", ["WebGraphQLQueryBase"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        b.__getDocID = function() {
            return "3361221260609443"
        }
        ;
        b.getQueryID = function() {
            return "280439943217954"
        }
        ;
        return b
    }(b("WebGraphQLQueryBase"))
}
), null);
__d("InstagramMessageGraphQLThreadItemsFetcher", ["Promise", "BanzaiODS", "InstagramMessageThreadItemsWebGraphQLQuery", "WebGraphQL", "promiseDone"], (function(a, b, c, d, e, f) {
    "use strict";
    f.fetch = a;
    f.fetchFromUser = c;
    function a(a, c) {
        return new (b("Promise"))(function(d, e) {
            b("promiseDone")(b("WebGraphQL").exec(new (b("InstagramMessageThreadItemsWebGraphQLQuery"))(c), {
                actorID: a,
                batchName: "InstagramMessageGraphQLThreadItemsFetcher"
            }), function(a) {
                b("BanzaiODS").bumpEntityKey(2966, "instagram_message_webgraphql", "InstagramMessageGraphQLThreadItemsFetcher.success"),
                d(a)
            }, function(a) {
                a = a.errors;
                b("BanzaiODS").bumpEntityKey(2966, "instagram_message_webgraphql", "InstagramMessageGraphQLThreadItemsFetcher.failure");
                e(a)
            })
        }
        )
    }
    function c(a) {
        return new (b("Promise"))(function(c, d) {
            b("promiseDone")(b("WebGraphQL").exec(new (b("InstagramMessageThreadItemsWebGraphQLQuery"))(a)), function(a) {
                b("BanzaiODS").bumpEntityKey(2966, "instagram_message_webgraphql", "InstagramMessageGraphQLThreadItemsFetcher.success"),
                c(a)
            }, function(a) {
                a = a.errors;
                b("BanzaiODS").bumpEntityKey(2966, "instagram_message_webgraphql", "InstagramMessageGraphQLThreadItemsFetcher.failure");
                d(a)
            })
        }
        )
    }
}
), null);
__d("InstagramBusinessMessageInboxQueryWebGraphQLQuery", ["WebGraphQLQueryBase"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        b.__getDocID = function() {
            return "2562177080536219"
        }
        ;
        b.getQueryID = function() {
            return "398982634310744"
        }
        ;
        return b
    }(b("WebGraphQLQueryBase"))
}
), null);
__d("InstagramMessageThreadsWebGraphQLQuery", ["WebGraphQLQueryBase"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        b.__getDocID = function() {
            return "2742565699100943"
        }
        ;
        b.getQueryID = function() {
            return "1199894503543494"
        }
        ;
        return b
    }(b("WebGraphQLQueryBase"))
}
), null);
__d("InstagramMessageGraphQLThreadsFetcher", ["Promise", "BanzaiODS", "InstagramBusinessMessageInboxQueryWebGraphQLQuery", "InstagramMessageThreadsWebGraphQLQuery", "WebGraphQL", "promiseDone"], (function(a, b, c, d, e, f) {
    "use strict";
    f.fetch = a;
    f.fetchFromUser = c;
    function a(a, c) {
        return new (b("Promise"))(function(d, e) {
            b("promiseDone")(b("WebGraphQL").exec(new (b("InstagramMessageThreadsWebGraphQLQuery"))(c), {
                actorID: a,
                batchName: "InstagramMessageGraphQLThreadsFetcher"
            }), function(a) {
                b("BanzaiODS").bumpEntityKey(2966, "instagram_message_webgraphql", "InstagramMessageGraphQLThreadsFetcher.success"),
                d(a)
            }, function(a) {
                a = a.errors;
                b("BanzaiODS").bumpEntityKey(2966, "instagram_message_webgraphql", "InstagramMessageGraphQLThreadsFetcher.failure");
                e(a)
            })
        }
        )
    }
    function c(a, c) {
        return new (b("Promise"))(function(d, e) {
            b("promiseDone")(b("WebGraphQL").exec(new (b("InstagramBusinessMessageInboxQueryWebGraphQLQuery"))({
                inbox_id: a,
                limit: c.limit,
                after: c.after,
                folder: c.folder,
                is_follow_up: c.is_follow_up,
                is_unread: c.is_unread,
                loadThreads: c.loadThreads,
                assigned_admin_id: c.assigned_admin_id
            })), function(a) {
                var c;
                b("BanzaiODS").bumpEntityKey(2966, "instagram_message_webgraphql", "InstagramDirectMessageGraphQLThreadsFetcher.success");
                d({
                    viewer: {
                        instagram_message_threads: {
                            sync_sequence_id: (c = a.instagram_business_message_inbox) == null ? void 0 : c.sync_sequence_id,
                            unseen_count: (c = a.instagram_business_message_inbox) == null ? void 0 : c.unseen_count,
                            nodes: (c = a.instagram_business_message_inbox) == null ? void 0 : (a = c.instagram_direct_message_threads) == null ? void 0 : a.nodes,
                            ig_user: {
                                instagram_user_id: "",
                                profile_picture: {
                                    uri: ""
                                }
                            }
                        }
                    }
                })
            }, function(a) {
                a = a.errors;
                b("BanzaiODS").bumpEntityKey(2966, "instagram_message_webgraphql", "InstagramDirectMessageGraphQLThreadsFetcher.failure");
                e(a)
            })
        }
        )
    }
}
), null);
__d("PagesManagerActionType", ["ImmutableObject", "keyMirrorRecursive"], (function(a, b, c, d, e, f) {
    "use strict";
    a = new (b("ImmutableObject"))(b("keyMirrorRecursive")({
        LIST: {
            FETCH: "",
            FETCHED: "",
            UPDATED: "",
            LOAD_MORE: "",
            LOADING: "",
            PREVENT_SCROLL: "",
            SELECT: "",
            DESELECT_ALL: "",
            VIEW: "",
            INITIAL_VIEW: "",
            CLEAR_INITIAL_VIEW: "",
            SET_RESPONSE_DATA: "",
            CONTENT_SEARCH_SELECTED_INDEX: "",
            ITEM_FOLDER_CHANGE: "",
            TOGGLE_FOLDER_SELECTOR: "",
            TOGGLE_FILTER_SELECTOR: "",
            REMOVE_ITEM_FOLDER_CHANGE: "",
            BAN_STATUS_CHANGE: "",
            REMOVE_BAN_NOTICE: "",
            SET_THREAD_LABELS: "",
            SELECT_THREAD: "",
            BULK_SELECTION_TOGGLE: "",
            CLEAR_BULK_SELECTION: "",
            BULK_ACTION_RESULT: "",
            REMOVE_BULK_ACTION_RESULT: "",
            SET_INSTAGRAM_INBOX: "",
            LOADING_INSTAGRAM_INBOX: "",
            SET_INSTAGRAM_LOADING_ERROR: "",
            SET_CREATOR_STUDIO_INBOX_MESSENGER_RANKED_USERS_DATA: "",
            SET_CREATOR_STUDIO_INBOX_MESSENGER_RANKED_USERS_ERROR: "",
            TOGGLE_SEGMENTATION_CARDS_LIST: ""
        },
        NAVIGATION_UNIT: {
            CHANGE: "",
            CHANGE_PLATFORM: "",
            CHANGE_UTL_FOLDER: "",
            NOTIFICATION_COUNT_CHANGE: ""
        },
        FILTER_PANEL: {
            TOGGLE_PANEL: ""
        },
        LAYOUT: {
            HEIGHT_CHANGE: "",
            LIST_HEIGHT_CHANGE: "",
            FOOTER_HEIGHT_CHANGE: "",
            HEADER_HEIGHT_CHANGE: "",
            LIST_HEADER_HEIGHT_CHANGE: ""
        },
        SEARCH: {
            TOGGLE: "",
            CHANGE_TYPE: "",
            CHANGE_SEARCH_TERM: "",
            IS_SEARCHING_CHANGED: "",
            ADD_SEARCH_CUSTOM_TAG: "",
            REMOVE_SEARCH_CUSTOM_TAG: "",
            FETCH_CUSTOM_TAG_THREAD_COUNTS: "",
            UPDATE_CUSTOM_TAG_THREAD_COUNTS: "",
            SELECT_CUSTOMER: "",
            CLEAR: "",
            CUSTOMER_SEARCH_DONE: "",
            LABEL: "",
            SELECT_CMT_SEGMENTATION: ""
        },
        CTA: {
            CTA_ID_FETCH_SUCCESS: "",
            CTA_ID_FETCH_ERROR: ""
        },
        COMMENTS: {
            CHANGE_TAB: "",
            MARK_ALL_ITEMS_AS_READ: ""
        }
    }));
    c = a;
    e.exports = c
}
), null);
__d("PagesManagerDispatcher", ["ReactDispatcher_DEPRECATED"], (function(a, b, c, d, e, f) {
    "use strict";
    a = new (b("ReactDispatcher_DEPRECATED"))();
    e.exports = a
}
), null);
__d("PagesManagerInboxUnifiedThreadlistAction", ["PagesManagerActionType", "PagesManagerDispatcher"], (function(a, b, c, d, e, f) {
    "use strict";
    f.setInstagramInbox = a;
    f.setIsLoadingInbox = c;
    f.setInstagramLoadingError = d;
    function a(a) {
        b("PagesManagerDispatcher").dispatch({
            type: b("PagesManagerActionType").LIST.SET_INSTAGRAM_INBOX,
            instagramInbox: a
        })
    }
    function c(a) {
        b("PagesManagerDispatcher").dispatch({
            type: b("PagesManagerActionType").LIST.LOADING_INSTAGRAM_INBOX,
            isLoadingInbox: a
        })
    }
    function d(a) {
        b("PagesManagerDispatcher").dispatch({
            type: b("PagesManagerActionType").LIST.SET_INSTAGRAM_LOADING_ERROR,
            hasError: a
        })
    }
}
), null);
__d("IGMessageInboxStore", ["invariant", "FBLogger", "FluxLoadObjectStore", "IGMessageDataDispatcher", "IGMessageDataMutateActionTypes", "InstagramMessageGraphQLThreadItemFetcher", "InstagramMessageGraphQLThreadItemsFetcher", "InstagramMessageGraphQLThreadsFetcher", "LoadObject", "PagesManagerInboxUnifiedThreadlistAction", "QuickPerformanceLogger", "Random", "immutable", "keyMirror", "nullthrows"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "1"
      , i = "IGMessageID"
      , j = {
        INBOX: "INBOX",
        THREAD: "THREAD",
        ITEM: "ITEM"
    }
      , k = b("keyMirror")({
        LOADED: ""
    });
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.$IGMessageInboxStore1 = new Map(),
            c.$IGMessageInboxStore2 = new Map(),
            c.$IGMessageInboxStore3 = !0,
            c.$IGMessageInboxStore4 = null,
            c.$IGMessageInboxStore5 = null,
            c.$IGMessageInboxStore6 = null,
            c.$IGMessageInboxStore7 = null,
            c.$IGMessageInboxStore8 = void 0,
            c.$IGMessageInboxStore9 = void 0,
            c.$IGMessageInboxStore10 = null,
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.getItemToken = function(a, b, c) {
            a = [h, i, a, b, c];
            return a.join(":")
        }
        ;
        d.getInboxFromUser = function(a, b, c, d, e, f, g) {
            return this.getInbox(a, b, c, d, e, f, g, !0)
        }
        ;
        d.getInbox = function(a, c, d, e, f, h, i, k) {
            var l, m;
            k === void 0 && (k = !1);
            if (!a) {
                b("PagesManagerInboxUnifiedThreadlistAction").setInstagramInbox(null);
                return b("LoadObject").empty()
            }
            this.$IGMessageInboxStore3 === !1 && b("PagesManagerInboxUnifiedThreadlistAction").setIsLoadingInbox(!1);
            l = (l = c) != null ? l : 1;
            l >= 1 || g(0, 11872);
            var n = this.$IGMessageInboxStore11({
                type: j.INBOX,
                inboxID: a,
                limit: l,
                cursor: d,
                folder: e,
                is_follow_up: f,
                is_unread: h,
                assigned_admin_id: i,
                fetch_from_user: k
            });
            this.$IGMessageInboxStore5 = a;
            this.$IGMessageInboxStore6 = c;
            this.$IGMessageInboxStore7 = e;
            this.$IGMessageInboxStore8 = f;
            this.$IGMessageInboxStore9 = h;
            c = this.get(n);
            if (c.isDeleting()) {
                b("PagesManagerInboxUnifiedThreadlistAction").setInstagramInbox(null);
                return b("LoadObject").deleting()
            } else if (!c.hasValue()) {
                if (c.hasError()) {
                    b("FBLogger")("pages_messaging_www").mustfix("Encounter error when loading IG inbox: %s", a);
                    this.$IGMessageInboxStore12(this.$IGMessageInboxStore11({
                        type: j.INBOX,
                        inboxID: a,
                        limit: l,
                        folder: e,
                        is_follow_up: f,
                        is_unread: h,
                        assigned_admin_id: i,
                        fetch_from_user: k
                    }));
                    b("PagesManagerInboxUnifiedThreadlistAction").setInstagramInbox(null);
                    b("PagesManagerInboxUnifiedThreadlistAction").setInstagramLoadingError(!0);
                    return b("LoadObject").loading().setError(c.getError())
                }
                d && g(0, 3361);
                b("PagesManagerInboxUnifiedThreadlistAction").setInstagramInbox(null);
                return b("LoadObject").loading()
            }
            m = (m = c.value) != null ? m : {};
            m = m.inbox;
            if (m === null || m === void 0) {
                b("PagesManagerInboxUnifiedThreadlistAction").setInstagramInbox(null);
                return b("LoadObject").withValue(null)
            }
            var o = this.$IGMessageInboxStore1.get(n);
            if (o && o.stateData.inbox === m) {
                o.isLoading !== c.isLoading() && (o = {
                    stateData: b("nullthrows")(c.value),
                    returnedData: o.returnedData,
                    isLoading: c.isLoading(),
                    error: c.getError()
                },
                this.$IGMessageInboxStore1.set(n, o));
                if (o.isLoading) {
                    b("PagesManagerInboxUnifiedThreadlistAction").setInstagramInbox(o.returnedData.inbox);
                    return b("LoadObject").withValue(o.returnedData.inbox).loading().setError(o.error)
                } else if (!(o.error instanceof Error)) {
                    b("PagesManagerInboxUnifiedThreadlistAction").setInstagramInbox(o.returnedData.inbox);
                    return b("LoadObject").withValue(o.returnedData.inbox)
                }
            }
            o = (o = m.nodes) != null ? o : [];
            var p = 0;
            if (d !== null && d !== void 0) {
                var q = -1;
                for (var r = o.length - 1; r >= 0; r--)
                    if (o[r].token === d.lastEntityToken) {
                        q = r;
                        break
                    } else if (this.largeNumberCompare(d.lastEntityTime, b("nullthrows")(o[r].last_activity_at)) === -1)
                        break;
                if (q === -1) {
                    b("PagesManagerInboxUnifiedThreadlistAction").setInstagramInbox(null);
                    return b("LoadObject").withValue(null)
                }
                p = q + 1
            }
            d = Object.assign({}, m);
            r = !1;
            if (p + l <= o.length)
                d.nodes = o.slice(p, p + l),
                d.page_info = {
                    has_next_page: p + l < o.length || m.page_info && m.page_info.has_next_page
                };
            else if (!m.page_info && !m.nodes)
                this.$IGMessageInboxStore12(this.$IGMessageInboxStore11({
                    type: j.INBOX,
                    inboxID: a,
                    limit: l,
                    folder: e,
                    is_follow_up: f,
                    is_unread: h,
                    assigned_admin_id: i,
                    fetch_from_user: k
                })),
                r = !0;
            else if (!m.page_info || !b("nullthrows")(m.page_info).has_next_page)
                d.nodes = o.slice(p, o.length),
                d.page_info = {
                    has_next_page: !1
                };
            else {
                q = null;
                o.length > 0 && (q = {
                    lastEntityTime: b("nullthrows")(o[o.length - 1].last_activity_at),
                    lastEntityToken: b("nullthrows")(o[o.length - 1].token)
                });
                this.$IGMessageInboxStore12(this.$IGMessageInboxStore11({
                    type: j.INBOX,
                    inboxID: a,
                    limit: p + l - o.length,
                    cursor: q,
                    folder: e,
                    is_follow_up: f,
                    is_unread: h,
                    assigned_admin_id: i,
                    graphqlCursor: b("nullthrows")(m.page_info).end_cursor,
                    fetch_from_user: k
                }));
                d.nodes = o.slice(p, o.length);
                d.page_info = {
                    has_next_page: !0
                };
                r = !0
            }
            this.$IGMessageInboxStore1.set(n, {
                stateData: b("nullthrows")(c.value),
                returnedData: {
                    inbox: d
                },
                isLoading: r,
                error: c.getError()
            });
            if (r) {
                b("PagesManagerInboxUnifiedThreadlistAction").setInstagramInbox(d);
                return b("LoadObject").withValue(d).loading().setError(c.getError())
            } else {
                b("PagesManagerInboxUnifiedThreadlistAction").setInstagramInbox(d);
                return b("LoadObject").withValue(d).setError(c.getError())
            }
        }
        ;
        d.getThreadFromUser = function(a, b, c, d) {
            return this.getThread(a, b, c, d, !0)
        }
        ;
        d.getThread = function(a, c, d, e, f) {
            var h, i;
            f === void 0 && (f = !1);
            if (c === "" || !a)
                return b("LoadObject").empty();
            d = (d = d) != null ? d : 1;
            d >= 1 || g(0, 11872);
            var k = this.$IGMessageInboxStore11({
                type: j.THREAD,
                inboxID: a,
                token: c,
                limit: d,
                cursor: e,
                fetch_from_user: f
            })
              , l = this.get(k);
            if (l.isDeleting())
                return b("LoadObject").deleting();
            else if (!l.hasValue()) {
                if (l.hasError()) {
                    b("FBLogger")("pages_messaging_www").mustfix("Encounter error when loading IG thread: %s, $s", a, c);
                    return b("LoadObject").empty().setError(l.getError())
                }
                e && g(0, 3361);
                return b("LoadObject").loading()
            }
            h = (h = l.value) != null ? h : {};
            h = h.thread;
            if (h === null || h === void 0)
                return b("LoadObject").withValue(null);
            var m = this.$IGMessageInboxStore1.get(k);
            if (m && m.stateData.thread === h) {
                m.isLoading !== l.isLoading() && (m = {
                    stateData: b("nullthrows")(l.value),
                    returnedData: m.returnedData,
                    isLoading: l.isLoading(),
                    error: l.getError()
                },
                this.$IGMessageInboxStore1.set(k, m));
                if (m.isLoading)
                    return b("LoadObject").withValue(m.returnedData.thread).loading().setError(m.error);
                else if (!(m.error instanceof Error))
                    return b("LoadObject").withValue(m.returnedData.thread)
            }
            m = (m = h.thread_items) != null ? m : {};
            i = (i = m.nodes) != null ? i : [];
            var n = 0;
            if (e !== null && e !== void 0) {
                var o = -1;
                for (var p = i.length - 1; p >= 0; p--)
                    if (i[p].token === e.lastEntityToken) {
                        o = p;
                        break
                    } else if (this.largeNumberCompare(e.lastEntityTime, b("nullthrows")(i[p].time_stamp)) === -1)
                        break;
                if (o === -1)
                    return b("LoadObject").withValue(null);
                n = o + 1
            }
            e = Object.assign({}, h);
            p = Object.assign({}, m);
            o = !1;
            e.thread_items = p;
            if (n + d <= i.length)
                p.nodes = i.slice(n, n + d),
                p.page_info = {
                    has_next_page: n + d < i.length || m.page_info && m.page_info.has_next_page
                };
            else if (!m.page_info && !m.nodes)
                this.$IGMessageInboxStore12(this.$IGMessageInboxStore11({
                    type: j.THREAD,
                    inboxID: a,
                    token: c,
                    limit: d,
                    fetch_from_user: f
                })),
                o = !0;
            else if (!m.page_info || !b("nullthrows")(m.page_info).has_next_page)
                p.nodes = i.slice(n, i.length),
                p.page_info = {
                    has_next_page: !1
                };
            else {
                h = null;
                i.length > 0 && (h = {
                    lastEntityTime: b("nullthrows")(i[i.length - 1].time_stamp),
                    lastEntityToken: b("nullthrows")(i[i.length - 1].token)
                });
                this.$IGMessageInboxStore12(this.$IGMessageInboxStore11({
                    type: j.THREAD,
                    inboxID: b("nullthrows")(a),
                    token: c,
                    limit: n + d - i.length,
                    cursor: h,
                    graphqlCursor: b("nullthrows")(m.page_info).end_cursor,
                    fetch_from_user: f
                }));
                p.nodes = i.slice(n, i.length);
                p.page_info = {
                    has_next_page: !0
                };
                o = !0
            }
            this.$IGMessageInboxStore1.set(k, {
                stateData: b("nullthrows")(l.value),
                returnedData: {
                    thread: e
                },
                isLoading: o,
                error: l.getError()
            });
            if (o)
                return b("LoadObject").withValue(e).loading().setError(l.getError());
            else
                return b("LoadObject").withValue(e).setError(l.getError())
        }
        ;
        d.getThreadItem = function(a, c) {
            if (!a || c === "")
                return b("LoadObject").empty();
            a = this.get(this.$IGMessageInboxStore11({
                type: j.ITEM,
                inboxID: a,
                token: c
            }));
            if (a.isDeleting())
                return b("LoadObject").deleting();
            else if (!a.hasValue())
                return b("LoadObject").loading();
            else if (a.isCreating())
                return b("LoadObject").withValue(a.getValueEnforcing().item).creating();
            return b("LoadObject").withValue(a.getValueEnforcing().item)
        }
        ;
        d.__load = function(a) {
            a = this.$IGMessageInboxStore13(a);
            switch (a.type) {
            case j.INBOX:
                this.$IGMessageInboxStore14(a);
                break;
            case j.THREAD:
                this.$IGMessageInboxStore15(a);
                break;
            case j.ITEM:
                this.$IGMessageInboxStore16(a);
                break
            }
        }
        ;
        d.$IGMessageInboxStore14 = function(a) {
            var c = b("Random").uint32();
            Boolean(a.fetch_from_user) ? (b("QuickPerformanceLogger").markerStart(36250226, c),
            b("InstagramMessageGraphQLThreadsFetcher").fetchFromUser(a.inboxID, {
                limit: a.limit,
                folder: a.folder,
                is_follow_up: a.is_follow_up,
                is_unread: a.is_unread,
                assigned_admin_id: a.assigned_admin_id,
                after: a.graphqlCursor,
                loadThreads: !0
            }).then(function(d) {
                b("QuickPerformanceLogger").markerEnd(36250226, 2, c),
                b("IGMessageDataDispatcher").dispatch({
                    request: a,
                    payload: {
                        inbox: d
                    },
                    type: k.LOADED
                })
            })["catch"](function(d) {
                b("QuickPerformanceLogger").markerEnd(36250226, 3, c),
                b("IGMessageDataDispatcher").dispatch({
                    request: a,
                    payload: new Error(d),
                    type: k.LOADED
                })
            })) : (b("QuickPerformanceLogger").markerStart(36247076, c),
            b("InstagramMessageGraphQLThreadsFetcher").fetch(a.inboxID, {
                limit: a.limit,
                folder: a.folder,
                is_follow_up: a.is_follow_up,
                is_unread: a.is_unread,
                assigned_admin_id: a.assigned_admin_id,
                after: a.graphqlCursor,
                loadThreads: !0
            }).then(function(d) {
                b("QuickPerformanceLogger").markerEnd(36247076, 2, c),
                b("IGMessageDataDispatcher").dispatch({
                    request: a,
                    payload: {
                        inbox: d
                    },
                    type: k.LOADED
                })
            })["catch"](function(d) {
                b("QuickPerformanceLogger").markerEnd(36247076, 3, c),
                b("IGMessageDataDispatcher").dispatch({
                    request: a,
                    payload: new Error(d),
                    type: k.LOADED
                })
            }))
        }
        ;
        d.$IGMessageInboxStore15 = function(a) {
            var c = b("Random").uint32();
            Boolean(a.fetch_from_user) ? (b("QuickPerformanceLogger").markerStart(36244063, c),
            b("InstagramMessageGraphQLThreadItemsFetcher").fetchFromUser({
                token: b("nullthrows")(a.token),
                instagram_user_id: a.inboxID,
                item_limit: a.limit,
                item_after: a.graphqlCursor,
                load_items: !0,
                width: 480,
                height: 480
            }).then(function(d) {
                d.instagram_message_thread === null ? b("IGMessageDataDispatcher").dispatch({
                    request: a,
                    payload: new Error("Failed to fetch thread"),
                    type: k.LOADED
                }) : (b("QuickPerformanceLogger").markerEnd(36244063, 2, c),
                b("IGMessageDataDispatcher").dispatch({
                    request: a,
                    payload: {
                        thread: d
                    },
                    type: k.LOADED
                }))
            })["catch"](function(d) {
                b("QuickPerformanceLogger").markerEnd(36244063, 3, c),
                b("IGMessageDataDispatcher").dispatch({
                    request: a,
                    payload: new Error(d),
                    type: k.LOADED
                })
            })) : (b("QuickPerformanceLogger").markerStart(36256069, c),
            b("InstagramMessageGraphQLThreadItemsFetcher").fetch(a.inboxID, {
                token: b("nullthrows")(a.token),
                item_limit: a.limit,
                item_after: a.graphqlCursor,
                load_items: !0,
                width: 480,
                height: 480
            }).then(function(d) {
                d.instagram_message_thread === null ? b("IGMessageDataDispatcher").dispatch({
                    request: a,
                    payload: new Error("Failed to fetch thread"),
                    type: k.LOADED
                }) : (b("QuickPerformanceLogger").markerEnd(36256069, 2, c),
                b("IGMessageDataDispatcher").dispatch({
                    request: a,
                    payload: {
                        thread: d
                    },
                    type: k.LOADED
                }))
            })["catch"](function(d) {
                b("QuickPerformanceLogger").markerEnd(36256069, 3, c),
                b("IGMessageDataDispatcher").dispatch({
                    request: a,
                    payload: new Error(d),
                    type: k.LOADED
                })
            }))
        }
        ;
        d.$IGMessageInboxStore16 = function(a) {
            var c = b("Random").uint32();
            b("QuickPerformanceLogger").markerStart(36243184, c);
            b("InstagramMessageGraphQLThreadItemFetcher").fetch(a.inboxID, {
                token: b("nullthrows")(a.token),
                width: 480,
                height: 480
            }).then(function(d) {
                b("QuickPerformanceLogger").markerEnd(36243184, 2, c),
                b("IGMessageDataDispatcher").dispatch({
                    request: a,
                    payload: {
                        item: d
                    },
                    type: k.LOADED
                })
            })["catch"](function(d) {
                b("QuickPerformanceLogger").markerEnd(36243184, 3, c),
                b("IGMessageDataDispatcher").dispatch({
                    request: a,
                    payload: new Error(d),
                    type: k.LOADED
                })
            })
        }
        ;
        d.__getActionTypes = function() {
            var a;
            return [this.getActionTypeStartLoad(), k.LOADED, (a = b("IGMessageDataMutateActionTypes")).CREATE, a.CREATING, a.DELETE, a.DELETING, a.FORCE_FETCH, a.UPDATE]
        }
        ;
        d.reduce = function(a, c) {
            var d;
            switch (c.type) {
            case k.LOADED:
                var e = c.payload;
                this.$IGMessageInboxStore2.set(this.$IGMessageInboxStore11(c.request), !1);
                if (e instanceof Error)
                    return this.$IGMessageInboxStore17(a, c.request, e);
                switch (c.request.type) {
                case j.INBOX:
                    this.$IGMessageInboxStore3 = !1;
                    b("PagesManagerInboxUnifiedThreadlistAction").setIsLoadingInbox(!1);
                    return this.$IGMessageInboxStore18(a, c.request, b("nullthrows")(e.inbox));
                case j.THREAD:
                    return this.$IGMessageInboxStore19(a, c.request, b("nullthrows")(e.thread));
                case j.ITEM:
                    return this.$IGMessageInboxStore20(a, c.request, b("nullthrows")(e.item))
                }
                return a;
            case b("IGMessageDataMutateActionTypes").FORCE_FETCH:
                switch (c.request.type) {
                case j.INBOX:
                    b("PagesManagerInboxUnifiedThreadlistAction").setIsLoadingInbox(!0),
                    this.$IGMessageInboxStore3 = !0
                }
                this.$IGMessageInboxStore12(this.$IGMessageInboxStore11(c.request));
                return a;
            case b("IGMessageDataMutateActionTypes").DELETING:
                return this.__setDeleting(a, b("immutable").List.of(this.$IGMessageInboxStore21(c.request)));
            case b("IGMessageDataMutateActionTypes").DELETE:
                e = a;
                switch (c.request.type) {
                case j.THREAD:
                    e = this.$IGMessageInboxStore22(a, c.request.inboxID, b("nullthrows")(c.request.token));
                    break;
                case j.ITEM:
                    e = this.$IGMessageInboxStore23(a, c.request.inboxID, b("nullthrows")((d = c) != null ? (d = d.extraData) != null ? d.threadToken : d : d), b("nullthrows")(c.request.token));
                    break
                }
                return this.__setEmpty(e, b("immutable").List.of(this.$IGMessageInboxStore21(c.request)));
            case b("IGMessageDataMutateActionTypes").CREATING:
                if (c.request.type === j.ITEM) {
                    var f, g, h;
                    e = b("nullthrows")((d = c) != null ? (d = d.payload) != null ? d.item : d : d);
                    d = b("nullthrows")(e.client_context);
                    e = Object.assign({}, e, {
                        token: d
                    });
                    h = b("nullthrows")((h = c) != null ? (h = h.extraData) != null ? h.threadToken : h : h);
                    var i = this.$IGMessageInboxStore24(a, c.request.inboxID, h, null, e)
                      , l = this.$IGMessageInboxStore21({
                        type: j.THREAD,
                        inboxID: c.request.inboxID,
                        token: h
                    })
                      , m = this.$IGMessageInboxStore25(i, l);
                    m = (m = m) != null ? (m = m.value) != null ? m.thread : m : m;
                    g = ((g = e) != null ? g.time_stamp : g) || this.getNowTimestamp();
                    f = (f = (f = m) != null ? f.last_activity_at : f) != null ? f : g;
                    i = this.$IGMessageInboxStore26(i, c.request.inboxID, h, {
                        token: h,
                        last_activity_at: f
                    }, 0);
                    var n = this.getInboxIGID();
                    h = (((h = m) != null ? h.last_seen_at : h) || []).find(function(a) {
                        return a.user_id == n
                    });
                    if (this.largeNumberCompare(((h = h) != null ? h.timestamp : h) || "0", g) == -1) {
                        g = (((h = m) != null ? h.last_seen_at : h) || []).filter(function(a) {
                            return a.user_id !== n
                        });
                        g.push({
                            item_id: d,
                            timestamp: e.time_stamp,
                            user_id: n
                        });
                        h = Object.assign({}, m, {
                            last_seen_at: g,
                            last_activity_at: f
                        });
                        i = this.$IGMessageInboxStore27(i, l, {
                            thread: h
                        })
                    }
                    return i.set(this.$IGMessageInboxStore21({
                        type: j.ITEM,
                        inboxID: c.request.inboxID,
                        token: d
                    }), b("LoadObject").withValue({
                        item: e
                    }).creating())
                }
                return a;
            case b("IGMessageDataMutateActionTypes").CREATE:
                switch (c.request.type) {
                case j.THREAD:
                    g = b("nullthrows")((m = c) != null ? (m = m.payload) != null ? m.thread : m : m);
                    f = this.$IGMessageInboxStore26(a, c.request.inboxID, null, {
                        token: b("nullthrows")(g.token),
                        last_activity_at: b("nullthrows")(g.last_activity_at)
                    }, 0);
                    i = (h = (l = g) != null ? (l = l.thread_items) != null ? l.nodes : l : l) != null ? h : [];
                    d = i.map(function(a) {
                        return {
                            token: a.token,
                            time_stamp: a.time_stamp
                        }
                    });
                    e = Object.assign({}, g.thread_items, {
                        nodes: d
                    });
                    m = Object.assign({}, g, {
                        thread_items: e
                    });
                    return this.$IGMessageInboxStore27(f, this.$IGMessageInboxStore21({
                        type: j.THREAD,
                        inboxID: c.request.inboxID,
                        token: b("nullthrows")(g.token)
                    }), {
                        thread: m
                    });
                case j.ITEM:
                    h = b("nullthrows")((l = c) != null ? (l = l.payload) != null ? l.item : l : l);
                    i = this.$IGMessageInboxStore21({
                        type: j.ITEM,
                        inboxID: c.request.inboxID,
                        token: b("nullthrows")(h.token)
                    });
                    if (!this.$IGMessageInboxStore25(a, i).isEmpty())
                        return a;
                    e = b("nullthrows")((d = c) != null ? (d = d.extraData) != null ? d.threadToken : d : d);
                    f = this.$IGMessageInboxStore24(a, c.request.inboxID, e, h.client_context, h);
                    g = this.$IGMessageInboxStore21({
                        type: j.THREAD,
                        inboxID: c.request.inboxID,
                        token: e
                    });
                    m = this.$IGMessageInboxStore25(f, g);
                    i = (l = m) != null ? (l = l.value) != null ? l.thread : l : l;
                    m = (f = (d = i) != null ? d.last_activity_at : d) != null ? f : h.time_stamp;
                    l = 0;
                    d = a;
                    if (i !== null && i !== void 0) {
                        var o = this.getInboxIGID();
                        f = (((f = i) != null ? f.last_seen_at : f) || []).find(function(a) {
                            return a.user_id == o
                        });
                        var p = {};
                        if (f !== null && f !== void 0 && (f.item_id === h.client_context || h.sender_id === o)) {
                            f = (((f = i) != null ? f.last_seen_at : f) || []).filter(function(a) {
                                return a.user_id !== o
                            });
                            f.push({
                                item_id: h.token,
                                timestamp: h.time_stamp,
                                user_id: o
                            });
                            p.last_seen_at = f
                        }
                        if (h.ig_item_type === "raven_media" && h.sender_id !== o) {
                            f = (f = (f = i) != null ? (f = f.direct_story) != null ? f.unseen_count : f : f) != null ? f : 0;
                            p.direct_story = {
                                unseen_count: f + 1,
                                media_type: (f = h) != null ? (f = f.raven_media) != null ? f.media_type : f : f
                            }
                        }
                        p.last_activity_at = h.sender_id !== this.getInboxIGID() ? h.time_stamp : (f = (f = i) != null ? f.last_activity_at : f) != null ? f : h.time_stamp;
                        f = Object.assign({}, i, p);
                        if (h.sender_id !== this.getInboxIGID()) {
                            p = (i = this.$IGMessageInboxStore25(a, g)) != null ? (i = i.value) != null ? i.thread : i : i;
                            l = this.getUnseenCountDelta(c.request.inboxID, p, f)
                        }
                        d = this.$IGMessageInboxStore27(d, g, {
                            thread: f
                        })
                    } else
                        h.sender_id !== this.getInboxIGID() && (l = 1);
                    d = this.$IGMessageInboxStore26(d, c.request.inboxID, e, {
                        token: e,
                        last_activity_at: m
                    }, l);
                    return this.$IGMessageInboxStore28(d, c.request.inboxID, h.client_context, h)
                }
                return a;
            case b("IGMessageDataMutateActionTypes").UPDATE:
                switch (c.request.type) {
                case j.INBOX:
                    p = b("nullthrows")((i = c) != null ? (i = i.payload) != null ? i.inbox : i : i);
                    g = this.$IGMessageInboxStore21(c.request);
                    f = this.$IGMessageInboxStore25(a, g);
                    m = (e = f) != null ? (e = e.value) != null ? e.inbox : e : e;
                    if (m === null || m === void 0)
                        return a;
                    l = Object.assign({}, m, p);
                    return this.$IGMessageInboxStore27(a, g, {
                        inbox: l
                    });
                case j.THREAD:
                    h = b("nullthrows")((d = c) != null ? (d = d.payload) != null ? d.thread : d : d);
                    i = this.$IGMessageInboxStore21(c.request);
                    f = this.$IGMessageInboxStore25(a, i);
                    m = (e = f) != null ? (e = e.value) != null ? e.thread : e : e;
                    if (m === null || m === void 0)
                        return a;
                    p = Object.assign({}, m, h);
                    var q = h.last_seen_at || [];
                    if (q.length > 0) {
                        var r = q.slice();
                        (m.last_seen_at || []).map(function(a) {
                            q.find(function(b) {
                                return b.user_id === a.user_id
                            }) || r.push(a)
                        });
                        p.last_seen_at = r
                    } else
                        p.last_seen_at = m.last_seen_at;
                    p.is_read = (l = (g = c.payload.thread) == null ? void 0 : g.is_read) != null ? l : m.is_read;
                    d = this.$IGMessageInboxStore27(a, i, {
                        thread: p
                    });
                    f = this.getUnseenCountDelta(c.request.inboxID, m, p);
                    if (f !== 0) {
                        e = this.$IGMessageInboxStore21({
                            type: j.INBOX,
                            inboxID: c.request.inboxID
                        });
                        g = (h = this.$IGMessageInboxStore25(d, e)) != null ? (h = h.value) != null ? h.inbox : h : h;
                        i = (l = g == null ? void 0 : g.unseen_count) != null ? l : 0;
                        m = Object.assign({}, g, {
                            unseen_count: i + f
                        });
                        return this.$IGMessageInboxStore27(d, e, {
                            inbox: m
                        })
                    }
                    return d;
                case j.ITEM:
                    h = b("nullthrows")((p = c) != null ? (p = p.payload) != null ? p.item : p : p);
                    l = this.$IGMessageInboxStore21(c.request);
                    g = this.$IGMessageInboxStore25(a, l);
                    f = (i = g) != null ? (i = i.value) != null ? i.item : i : i;
                    if (f === null || f === void 0)
                        return a;
                    e = Object.assign({}, f, h);
                    if (e.time_stamp === f.time_stamp && e.raven_media === f.raven_media)
                        return this.$IGMessageInboxStore27(a, l, {
                            item: e
                        });
                    d = b("nullthrows")((m = c) != null ? (m = m.extraData) != null ? m.threadToken : m : m);
                    p = this.$IGMessageInboxStore24(a, c.request.inboxID, d, e.token, e, f);
                    g = this.$IGMessageInboxStore25(a, this.$IGMessageInboxStore21({
                        type: j.THREAD,
                        inboxID: c.request.inboxID,
                        token: d
                    })).getValue();
                    i = this.$IGMessageInboxStore25(p, this.$IGMessageInboxStore21({
                        type: j.THREAD,
                        inboxID: c.request.inboxID,
                        token: d
                    })).getValue();
                    m = (h = i) != null ? (h = h.thread) != null ? h.last_activity_at : h : h;
                    f = this.getUnseenCountDelta(c.request.inboxID, g == null ? void 0 : g.thread, i == null ? void 0 : i.thread);
                    h = this.$IGMessageInboxStore26(p, c.request.inboxID, d, {
                        token: d,
                        last_activity_at: m
                    }, f);
                    return this.$IGMessageInboxStore27(h, l, {
                        item: e
                    })
                }
                return a;
            default:
                return a
            }
        }
        ;
        d.$IGMessageInboxStore18 = function(a, c, d) {
            var e = this;
            d = (d = d.viewer) != null ? d : {};
            d = d.instagram_message_threads;
            if (!d)
                return this.$IGMessageInboxStore17(a, c, {
                    inbox: null
                });
            var f = Object.assign({}, d)
              , g = a
              , h = d.nodes;
            if (h) {
                var i = new Map()
                  , k = c.cursor;
                if (!k)
                    f.nodes = h.filter(function(a) {
                        return a.token !== null && a.token !== void 0
                    }).map(function(d) {
                        var a = b("nullthrows")(d.token);
                        a = e.$IGMessageInboxStore11({
                            type: j.THREAD,
                            inboxID: c.inboxID,
                            token: a
                        });
                        i.set(a, {
                            thread: Object.assign({}, d)
                        });
                        return {
                            token: d.token,
                            last_activity_at: d.last_activity_at
                        }
                    });
                else {
                    var l, m, n;
                    m = (m = this.$IGMessageInboxStore25(a, this.$IGMessageInboxStore21(c)).value) != null ? m : {};
                    m = (m = m.inbox) != null ? m : {};
                    n = (n = m.nodes) != null ? n : [];
                    var o = -1;
                    if (b("nullthrows")(c.graphqlCursor) === ((l = m) != null ? (l = l.page_info) != null ? l.end_cursor : l : l))
                        o = n.length - 1;
                    else
                        for (var l = n.length - 1; l >= 0; l--) {
                            var p = this.largeNumberCompare(k.lastEntityTime, b("nullthrows")(n[l].last_activity_at));
                            if (p === 0) {
                                o = l;
                                break
                            } else if (p === -1)
                                break
                        }
                    if (o === -1)
                        return a;
                    p = o + 1;
                    k = 0;
                    l = m.page_info;
                    o = n.slice(0, p);
                    while (k < h.length && p < n.length) {
                        m = h[k];
                        var q = m.token;
                        if (q === null || q === void 0) {
                            k++;
                            continue
                        }
                        var r = n[p];
                        q === r.token ? (o.push(r),
                        p++,
                        k++) : this.largeNumberCompare(b("nullthrows")(r.last_activity_at), b("nullthrows")(m.last_activity_at)) === 1 ? p++ : k++
                    }
                    if (k < h.length) {
                        l = d.page_info;
                        while (k < h.length) {
                            q = h[k];
                            r = q.token;
                            if (r === null || r === void 0) {
                                k++;
                                continue
                            }
                            m = this.$IGMessageInboxStore11({
                                type: j.THREAD,
                                inboxID: c.inboxID,
                                token: r
                            });
                            p = this.$IGMessageInboxStore25(a, m);
                            p.hasValue() || i.set(m, {
                                thread: Object.assign({}, q)
                            });
                            o.push({
                                token: q.token,
                                last_activity_at: q.last_activity_at
                            });
                            k++
                        }
                    }
                    f = Object.assign({}, d, {
                        nodes: o,
                        page_info: l
                    })
                }
                g = this.__handleMap(a, i)
            }
            return this.$IGMessageInboxStore17(g, c, {
                inbox: f
            })
        }
        ;
        d.$IGMessageInboxStore19 = function(a, c, d) {
            var e = this;
            d = d.instagram_message_thread;
            if (!d)
                return this.$IGMessageInboxStore17(a, c, {
                    thread: null
                });
            var f = Object.assign({}, d)
              , g = this.$IGMessageInboxStore21({
                type: j.THREAD,
                inboxID: c.inboxID,
                token: c.token
            });
            g = (g = this.$IGMessageInboxStore25(a, g)) != null ? (g = g.value) != null ? g.thread : g : g;
            g && (f.is_read = g.is_read);
            g = a;
            d = d.thread_items;
            if (d) {
                var h = Object.assign({}, d)
                  , i = new Map()
                  , k = c.cursor;
                if (!k)
                    h.nodes = d.nodes.map(function(d) {
                        var b = d.token;
                        if (b !== null && b !== void 0) {
                            b = e.$IGMessageInboxStore11({
                                type: j.ITEM,
                                inboxID: c.inboxID,
                                token: b
                            });
                            var f = e.$IGMessageInboxStore25(a, b);
                            f.hasValue() || i.set(b, {
                                item: Object.assign({}, d)
                            })
                        }
                        return {
                            token: d.token,
                            time_stamp: d.time_stamp
                        }
                    });
                else {
                    var l, m, n;
                    m = (m = this.$IGMessageInboxStore25(a, this.$IGMessageInboxStore21(c)).value) != null ? m : {};
                    m = (m = m.thread) != null ? m : {};
                    m = (m = m.thread_items) != null ? m : {};
                    var o = d.nodes;
                    n = (n = m.nodes) != null ? n : [];
                    var p = -1;
                    if (b("nullthrows")(c.graphqlCursor) === ((l = m) != null ? (l = l.page_info) != null ? l.end_cursor : l : l))
                        p = n.length - 1;
                    else
                        for (var l = n.length - 1; l >= 0; l--) {
                            var q = this.largeNumberCompare(k.lastEntityTime, b("nullthrows")(n[l].time_stamp));
                            if (q === 0) {
                                p = l;
                                break
                            } else if (q === -1)
                                break
                        }
                    if (p === -1)
                        return a;
                    q = p + 1;
                    k = 0;
                    l = m.page_info;
                    p = n.slice(0, q);
                    while (k < o.length && q < n.length) {
                        m = o[k];
                        var r = m.token;
                        if (r === null || r === void 0) {
                            k++;
                            continue
                        }
                        var s = n[q];
                        r === s.token ? (p.push(s),
                        q++,
                        k++) : this.largeNumberCompare(b("nullthrows")(s.time_stamp), b("nullthrows")(m.time_stamp)) === 1 ? q++ : k++
                    }
                    if (k < o.length) {
                        l = d.page_info;
                        while (k < o.length) {
                            r = o[k];
                            s = r.token;
                            if (s === null || s === void 0) {
                                k++;
                                continue
                            }
                            m = this.$IGMessageInboxStore11({
                                type: j.ITEM,
                                inboxID: c.inboxID,
                                token: s
                            });
                            q = this.$IGMessageInboxStore25(a, m);
                            q.hasValue() || i.set(m, {
                                item: Object.assign({}, r)
                            });
                            p.push({
                                token: r.token,
                                time_stamp: r.time_stamp
                            });
                            k++
                        }
                    }
                    h = Object.assign({}, d, {
                        nodes: p,
                        page_info: l
                    })
                }
                f.thread_items = h;
                g = this.__handleMap(a, i)
            }
            return this.$IGMessageInboxStore17(g, c, {
                thread: f
            })
        }
        ;
        d.$IGMessageInboxStore20 = function(a, b, c) {
            return this.$IGMessageInboxStore17(a, b, {
                item: c.instagram_message_thread_item
            })
        }
        ;
        d.$IGMessageInboxStore22 = function(a, b, c, d) {
            var e;
            d === void 0 && (d = j.INBOX);
            d = this.$IGMessageInboxStore21({
                type: d,
                inboxID: b
            });
            var f = this.$IGMessageInboxStore25(a, d);
            f = (f = f) != null ? (f = f.value) != null ? f.inbox : f : f;
            if (f === null || f === void 0)
                return a;
            e = (e = f.nodes) != null ? e : [];
            if (e.length > 0 && e.find(function(a) {
                return a.token === c
            })) {
                var g, h = this.$IGMessageInboxStore21({
                    type: j.THREAD,
                    inboxID: b,
                    token: c
                });
                h = (h = this.$IGMessageInboxStore25(a, h)) != null ? (h = h.value) != null ? h.thread : h : h;
                g = (g = (g = f) != null ? g.unseen_count : g) != null ? g : 0;
                b = this.isThreadUnread(b, h);
                b && g > 0 && (g -= 1);
                h = Object.assign({}, f, {
                    nodes: e.filter(function(a) {
                        return a.token !== c
                    }),
                    unseen_count: g
                });
                return this.$IGMessageInboxStore27(a, d, {
                    inbox: h
                })
            }
            return a
        }
        ;
        d.$IGMessageInboxStore23 = function(a, b, c, d) {
            var e;
            b = this.$IGMessageInboxStore21({
                type: j.THREAD,
                inboxID: b,
                token: c
            });
            c = this.$IGMessageInboxStore25(a, b);
            c = (c = c) != null ? (c = c.value) != null ? c.thread : c : c;
            if (c === null || c === void 0)
                return a;
            e = (e = (e = c) != null ? (e = e.thread_items) != null ? e.nodes : e : e) != null ? e : [];
            if (e.length > 0 && e.find(function(a) {
                return a.token === d
            })) {
                e = Object.assign({}, c.thread_items, {
                    nodes: e.filter(function(a) {
                        return a.token !== d
                    })
                });
                c = Object.assign({}, c, {
                    thread_items: e
                });
                return this.$IGMessageInboxStore27(a, b, {
                    thread: c
                })
            }
            return a
        }
        ;
        d.$IGMessageInboxStore26 = function(a, c, d, e, f, g) {
            var h;
            g === void 0 && (g = j.INBOX);
            g = this.$IGMessageInboxStore21({
                type: g,
                inboxID: c
            });
            c = this.$IGMessageInboxStore25(a, g);
            c = (c = c) != null ? (c = c.value) != null ? c.inbox : c : c;
            if (c === null || c === void 0)
                return a;
            h = (h = c.nodes) != null ? h : [];
            if (d === e.token) {
                var i = h.find(function(a) {
                    return a.token === d
                });
                if (i !== null && i !== void 0 && i.last_activity_at === e.last_activity_at && f === 0)
                    return a
            }
            i = d !== null && d !== void 0 ? h.filter(function(a) {
                return d !== a.token
            }) : h;
            for (h = 0; h < i.length; h++)
                if (this.largeNumberCompare(b("nullthrows")(e.last_activity_at), b("nullthrows")(i[h].last_activity_at)) !== -1)
                    break;
            var k = i.slice(0, h);
            k.push({
                token: e.token,
                last_activity_at: e.last_activity_at
            });
            e = (e = c.unseen_count) != null ? e : 0;
            c = Object.assign({}, c, {
                nodes: k.concat(i.slice(h)),
                unseen_count: e + f
            });
            return this.$IGMessageInboxStore27(a, g, {
                inbox: c
            })
        }
        ;
        d.$IGMessageInboxStore24 = function(a, c, d, e, f, g) {
            var h, i, k;
            c = this.$IGMessageInboxStore21({
                type: j.THREAD,
                inboxID: c,
                token: d
            });
            d = this.$IGMessageInboxStore25(a, c);
            d = (d = d) != null ? (d = d.value) != null ? d.thread : d : d;
            if (d === null || d === void 0)
                return a;
            k = (k = (k = d) != null ? (k = k.thread_items) != null ? k.nodes : k : k) != null ? k : [];
            k = e !== null && e !== void 0 ? k.filter(function(a) {
                return e !== a.token
            }) : k;
            var l;
            for (l = 0; l < k.length; l++)
                if (this.largeNumberCompare(b("nullthrows")(f.time_stamp), b("nullthrows")(k[l].time_stamp)) !== -1)
                    break;
            var m = k.slice(0, l);
            i = (i = (i = d) != null ? (i = i.direct_story) != null ? i.unseen_count : i : i) != null ? i : 0;
            h = (h = d) != null ? h.direct_story : h;
            var n = this.getInboxIGID();
            if (f.ig_item_type === "RAVEN_MEDIA" && n !== f.sender_id) {
                var o;
                g = g != null ? this.isRavenSeenByInbox(g, (g = (g = d) != null ? g.is_group : g) != null ? g : !1, n) : !1;
                o = this.isRavenSeenByInbox(f, (o = (o = d) != null ? o.is_group : o) != null ? o : !1, n);
                if (g !== o)
                    if (g) {
                        h = {
                            unseen_count: i - 1,
                            media_type: (n = f) != null ? (n = n.raven_media) != null ? n.media_type : n : n
                        }
                    } else {
                        h = {
                            unseen_count: i + 1,
                            media_type: (o = f) != null ? (o = o.raven_media) != null ? o.media_type : o : o
                        }
                    }
            }
            m.push({
                token: f.token,
                time_stamp: f.time_stamp
            });
            g = Object.assign({}, d.thread_items, {
                nodes: m.concat(k.slice(l))
            });
            n = Object.assign({}, d, {
                thread_items: g,
                last_activity_at: g.nodes[0].time_stamp,
                direct_story: h
            });
            return this.$IGMessageInboxStore27(a, c, {
                thread: n
            })
        }
        ;
        d.$IGMessageInboxStore28 = function(a, c, d, e) {
            var f = this.$IGMessageInboxStore21({
                type: j.ITEM,
                inboxID: c,
                token: b("nullthrows")(e.token)
            });
            if (d === null || d === void 0)
                return this.$IGMessageInboxStore27(a, f, {
                    item: e
                });
            c = this.$IGMessageInboxStore21({
                type: j.ITEM,
                inboxID: c,
                token: d
            });
            d = this.$IGMessageInboxStore25(a, c);
            e = b("LoadObject").withValue({
                item: e
            });
            d.isDeleting() && (e = e.deleting());
            d = this.__setEmpty(a, b("immutable").List.of(c));
            return d.set(f, e)
        }
        ;
        d.getCached = function(b) {
            return a.prototype.getCached.call(this, this.$IGMessageInboxStore21(this.$IGMessageInboxStore13(b)))
        }
        ;
        d.$IGMessageInboxStore25 = function(a, c) {
            return a.get(c) || b("LoadObject").empty()
        }
        ;
        d.__setLoading = function(b, c) {
            var d = [];
            for (var c = c, e = Array.isArray(c), f = 0, c = e ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                var g;
                if (e) {
                    if (f >= c.length)
                        break;
                    g = c[f++]
                } else {
                    f = c.next();
                    if (f.done)
                        break;
                    g = f.value
                }
                g = g;
                d.push(this.$IGMessageInboxStore21(this.$IGMessageInboxStore13(g)))
            }
            return a.prototype.__setLoading.call(this, b, d)
        }
        ;
        d.$IGMessageInboxStore17 = function(a, b, c) {
            b = this.$IGMessageInboxStore21(b);
            return this.$IGMessageInboxStore27(a, b, c)
        }
        ;
        d.$IGMessageInboxStore27 = function(c, d, e) {
            var f = a.prototype.getCached.call(this, d);
            if (e instanceof Error)
                return c.set(d, f.setError(e).done());
            else {
                e.inbox && (b("PagesManagerInboxUnifiedThreadlistAction").setInstagramInbox(e.inbox),
                b("PagesManagerInboxUnifiedThreadlistAction").setInstagramLoadingError(!1));
                return c.set(d, f.setValue(e).removeError().done())
            }
        }
        ;
        d.$IGMessageInboxStore11 = function(a) {
            return JSON.stringify(a)
        }
        ;
        d.$IGMessageInboxStore21 = function(a) {
            return JSON.stringify({
                type: a.type,
                inboxID: a.inboxID,
                token: a.token
            })
        }
        ;
        d.$IGMessageInboxStore13 = function(a) {
            return JSON.parse(a)
        }
        ;
        d.getIsInitLoading = function() {
            return this.$IGMessageInboxStore3
        }
        ;
        d.largeNumberCompare = function(a, b) {
            if (a.length > b.length)
                return 1;
            return a.length < b.length ? -1 : a === b ? 0 : a > b ? 1 : -1
        }
        ;
        d.convertTimestamp = function(a) {
            return parseInt(a.slice(0, a.length - 3), 10)
        }
        ;
        d.getNowTimestamp = function() {
            return Date.now().toString() + "000"
        }
        ;
        d.setInboxIGID = function(a) {
            this.$IGMessageInboxStore4 = a
        }
        ;
        d.getInboxIGID = function() {
            return this.$IGMessageInboxStore4
        }
        ;
        d.getInboxID = function() {
            return this.$IGMessageInboxStore5
        }
        ;
        d.setInboxProfilePic = function(a) {
            this.$IGMessageInboxStore10 = a
        }
        ;
        d.getInboxProfilePic = function() {
            return this.$IGMessageInboxStore10
        }
        ;
        d.getItemType = function(a, b) {
            a = this.getThreadItem(a, b).getValue();
            return (b = a) != null ? b.ig_item_type : b
        }
        ;
        d.$IGMessageInboxStore12 = function(a) {
            this.$IGMessageInboxStore2.get(a) || (this.$IGMessageInboxStore2.set(a, !0),
            this.__queueLoadAll(b("immutable").List.of(a)))
        }
        ;
        d.isMessageExpired = function(a) {
            a = this.largeNumberCompare(a + "000", Date.now().toString());
            return a < 0 ? !0 : !1
        }
        ;
        d.getUnseenCountDelta = function(a, b, c) {
            b = this.isThreadUnread(a, b);
            a = this.isThreadUnread(a, c);
            if (b === a)
                return 0;
            return b ? -1 : 1
        }
        ;
        d.isThreadUnread = function(a, b) {
            return !b ? !1 : this.hasUnseenMessage(a, b) || this.hasUnseenEphemeral(b) || this.hasMarkedUnread(b)
        }
        ;
        d.hasUnseenMessage = function(a, c) {
            var d = this.getInboxIGID();
            if (d === null || d === void 0)
                return !1;
            a = c.last_seen_at.find(function(a) {
                return a.user_id === d
            });
            if (a === null || a === void 0)
                return !0;
            c = b("nullthrows")((c = c) != null ? c.last_activity_at : c);
            return this.largeNumberCompare(c, b("nullthrows")(a.timestamp)) === 1
        }
        ;
        d.hasUnseenEphemeral = function(a) {
            a = (a = a) != null ? (a = a.direct_story) != null ? a.unseen_count : a : a;
            return a === null || a === void 0 || a === 0 ? !1 : !0
        }
        ;
        d.hasMarkedUnread = function(a) {
            a = (a = a) != null ? a.is_read : a;
            return a === null || a === void 0 || a === !1 ? !0 : !1
        }
        ;
        d.isRavenSeenByInbox = function(a, b, c) {
            var d;
            if (c === null || c === void 0)
                return !1;
            d = (d = (d = a) != null ? (d = d.raven_media) != null ? d.seen_count : d : d) != null ? d : 0;
            a = (a = (a = a) != null ? (a = a.raven_media) != null ? a.seen_user_ids : a : a) != null ? a : [];
            if (b)
                return a.some(function(a) {
                    return a === c
                });
            else
                return d > 0
        }
        ;
        d.getLocallyUpdatedUnreadCount = function(a) {
            a === void 0 && (a = !1);
            if (this.$IGMessageInboxStore5 == null)
                return null;
            var c = b("LoadObject").empty()
              , d = Boolean(this.$IGMessageInboxStore8)
              , e = Boolean(this.$IGMessageInboxStore9);
            c = this.getInbox(b("nullthrows")(this.$IGMessageInboxStore5), this.$IGMessageInboxStore6, null, this.$IGMessageInboxStore7, d, e, null, a);
            if (c.hasValue()) {
                return (d = c.getValue()) != null ? d.unseen_count : d
            }
            a = c.hasError() ? (e = c.getError()) != null ? e.message : e : null;
            b("PagesManagerInboxUnifiedThreadlistAction").setInstagramLoadingError(c.hasError());
            a != null && b("FBLogger")("pages_messaging_www").warn("Encounter error when loading IG inbox for updating unread count: %s", a);
            return null
        }
        ;
        return c
    }(b("FluxLoadObjectStore"));
    a.__moduleID = e.id;
    c = new a(b("IGMessageDataDispatcher"));
    b("IGMessageDataDispatcher").explicitlyRegisterStore(c);
    d = c;
    e.exports = d
}
), null);
__d("IGMessageDataMutateAction", ["invariant", "IGMessageDataDispatcher", "IGMessageDataMutateActionTypes", "IGMessageInboxStore"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.forceFetchInbox = a;
    f.forceFetchThread = c;
    f.forceFetchThreadItem = d;
    f.markThreadAsDeleting = e;
    f.markThreadItemAsDeleting = j;
    f.deleteThread = k;
    f.deleteThreadItem = l;
    f.markThreadItemAsCreating = m;
    f.createThread = n;
    f.createThreadItem = o;
    f.updateInbox = p;
    f.updateThread = q;
    f.updateThreadItem = r;
    f.markThreadAsSeen = s;
    f.markRavenAsSeen = t;
    f.updateThreadFollowUpStatus = u;
    f.updateThreadReadStatus = v;
    f.updateThreadAdminStatus = w;
    f.likeThreadItem = x;
    f.unlikeThreadItem = y;
    var h = {
        INBOX: "INBOX",
        THREAD: "THREAD",
        ITEM: "ITEM"
    }
      , i = "TODO";
    function a(a, c, d, e, f, j, k) {
        var l;
        d === void 0 && (d = i);
        k === void 0 && (k = !1);
        l = (l = c) != null ? l : 1;
        l >= 1 || g(0, 11872);
        b("IGMessageDataDispatcher").dispatch({
            request: {
                type: h.INBOX,
                inboxID: a,
                limit: c,
                folder: d,
                is_follow_up: e,
                is_unread: f,
                assigned_admin_id: j,
                fetch_from_user: k
            },
            type: b("IGMessageDataMutateActionTypes").FORCE_FETCH
        })
    }
    function c(a, c, d, e) {
        e === void 0 && (e = !1);
        d = (d = d) != null ? d : 1;
        d >= 1 || g(0, 11872);
        b("IGMessageDataDispatcher").dispatch({
            request: {
                type: h.THREAD,
                inboxID: a,
                token: c,
                limit: d,
                fetch_from_user: e
            },
            type: b("IGMessageDataMutateActionTypes").FORCE_FETCH
        })
    }
    function d(a, c, d) {
        b("IGMessageDataDispatcher").dispatch({
            request: {
                type: h.ITEM,
                inboxID: a,
                token: c,
                limit: d
            },
            type: b("IGMessageDataMutateActionTypes").FORCE_FETCH
        })
    }
    function e(a, c) {
        b("IGMessageDataDispatcher").dispatch({
            request: {
                type: h.THREAD,
                inboxID: a,
                token: c
            },
            type: b("IGMessageDataMutateActionTypes").DELETING
        })
    }
    function j(a, c) {
        b("IGMessageDataDispatcher").dispatch({
            request: {
                type: h.ITEM,
                inboxID: a,
                token: c
            },
            type: b("IGMessageDataMutateActionTypes").DELETING
        })
    }
    function k(a, c) {
        b("IGMessageDataDispatcher").dispatch({
            request: {
                type: h.THREAD,
                inboxID: a,
                token: c
            },
            type: b("IGMessageDataMutateActionTypes").DELETE
        })
    }
    function l(a, c, d) {
        b("IGMessageDataDispatcher").dispatch({
            request: {
                type: h.ITEM,
                inboxID: a,
                token: d
            },
            type: b("IGMessageDataMutateActionTypes").DELETE,
            extraData: {
                threadToken: c
            }
        })
    }
    function m(a, c, d) {
        b("IGMessageDataDispatcher").dispatch({
            request: {
                type: h.ITEM,
                inboxID: a
            },
            type: b("IGMessageDataMutateActionTypes").CREATING,
            payload: {
                item: d
            },
            extraData: {
                threadToken: c
            }
        })
    }
    function n(a, c) {
        b("IGMessageDataDispatcher").dispatch({
            request: {
                type: h.THREAD,
                inboxID: a
            },
            type: b("IGMessageDataMutateActionTypes").CREATE,
            payload: {
                thread: c
            }
        })
    }
    function o(a, c, d) {
        b("IGMessageDataDispatcher").dispatch({
            request: {
                type: h.ITEM,
                inboxID: a
            },
            type: b("IGMessageDataMutateActionTypes").CREATE,
            payload: {
                item: d
            },
            extraData: {
                threadToken: c
            }
        })
    }
    function p(a, c, d) {
        d === void 0 && (d = !1),
        b("IGMessageDataDispatcher").dispatch({
            request: {
                type: h.INBOX,
                inboxID: a,
                fetch_from_user: d
            },
            type: b("IGMessageDataMutateActionTypes").UPDATE,
            payload: {
                inbox: c
            }
        })
    }
    function q(a, c, d, e) {
        e === void 0 && (e = !1),
        b("IGMessageDataDispatcher").dispatch({
            request: {
                type: h.THREAD,
                inboxID: a,
                token: c,
                fetch_from_user: e
            },
            type: b("IGMessageDataMutateActionTypes").UPDATE,
            payload: {
                thread: d
            }
        })
    }
    function r(a, c, d, e) {
        b("IGMessageDataDispatcher").dispatch({
            request: {
                type: h.ITEM,
                inboxID: a,
                token: d
            },
            type: b("IGMessageDataMutateActionTypes").UPDATE,
            payload: {
                item: e
            },
            extraData: {
                threadToken: c
            }
        })
    }
    function s(a, c, d, e, f) {
        var g = b("IGMessageInboxStore").getThread(a, c).getValue()
          , h = f === null || f === void 0 ? b("IGMessageInboxStore").getInboxIGID() : f;
        g = (((f = g) != null ? f.last_seen_at : f) || []).filter(function(a) {
            return a.user_id !== h
        });
        g.push({
            item_id: d,
            timestamp: e,
            user_id: h
        });
        this.updateThread(a, c, {
            last_seen_at: g
        })
    }
    function t(a, c, d, e) {
        var f = b("IGMessageInboxStore").getThread(a, c).getValue()
          , g = b("IGMessageInboxStore").getInboxIGID();
        f = (((f = f) != null ? f.last_seen_at : f) || []).filter(function(a) {
            return a.user_id !== g
        });
        f.push({
            item_id: d,
            timestamp: e,
            user_id: g
        });
        this.updateThread(a, c, {
            last_seen_at: f
        })
    }
    function u(a, b, c) {
        this.updateThread(a, b, {
            is_follow_up: c
        })
    }
    function v(a, b, c) {
        this.updateThread(a, b, {
            is_read: c
        })
    }
    function w(a, b, c, d, e) {
        this.updateThread(a, b, {
            assigned_admin: {
                id: c,
                name: d,
                profile_picture: {
                    uri: e
                }
            }
        })
    }
    function x(a, c, d, e) {
        var f, g = b("IGMessageInboxStore").getThreadItem(a, d).getValue(), h = b("IGMessageInboxStore").getInboxIGID(), i = b("IGMessageInboxStore").getInboxProfilePic();
        f = ((f = g) != null ? (f = f.ig_reaction) != null ? f.likes : f : f) || [];
        if (f.find(function(a) {
            return a.instagram_user_id === h
        }))
            return;
        f = f.filter(function(a) {
            return a.instagram_user_id !== h
        });
        f.push({
            instagram_user_id: h,
            profile_picture: {
                uri: i
            }
        });
        e = {
            time_stamp: e,
            ig_reaction: {
                likes_count: (((i = g) != null ? (i = i.ig_reaction) != null ? i.likes_count : i : i) || 0) + 1,
                likes: f
            }
        };
        (e.time_stamp === null || e.time_stamp === void 0 || e.time_stamp === "") && delete e.time_stamp;
        this.updateThreadItem(a, c, d, e)
    }
    function y(a, c, d) {
        var e, f = b("IGMessageInboxStore").getThreadItem(a, d).getValue(), g = b("IGMessageInboxStore").getInboxIGID();
        e = ((e = f) != null ? (e = e.ig_reaction) != null ? e.likes : e : e) || [];
        if (!e.find(function(a) {
            return a.instagram_user_id === g
        }))
            return;
        e = e.filter(function(a) {
            return a.instagram_user_id !== g
        });
        f = (((f = f) != null ? (f = f.ig_reaction) != null ? f.likes_count : f : f) || 0) - 1;
        f < 0 && (f = 0);
        this.updateThreadItem(a, c, d, {
            ig_reaction: {
                likes_count: f,
                likes: e
            }
        })
    }
}
), null);
__d("PagesManagerAction", ["PagesManagerActionType", "PagesManagerDispatcher"], (function(a, b, c, d, e, f) {
    "use strict";
    f.viewListItem = a;
    f.clearViewListItem = c;
    f.setInitialViewItem = d;
    f.clearInitialViewItem = e;
    f.setLayoutHeight = g;
    f.setListNavigationHeight = h;
    f.setFooterHeight = i;
    f.setHeaderHeight = j;
    f.setListHeaderHeight = k;
    f.handleSelectionChange = l;
    f.handleSelectionMapChange = m;
    f.deselectAll = n;
    f.toggleBulkSelectionMode = o;
    f.setThreadLabels = p;
    f.handleThreadSelectionChange = q;
    f.clearBulkSelection = r;
    f.setBulkActionResult = s;
    f.removeLastBulkActionResult = t;
    function a(a) {
        b("PagesManagerDispatcher").dispatch({
            type: b("PagesManagerActionType").LIST.VIEW,
            listItem: a
        })
    }
    function c() {
        b("PagesManagerDispatcher").dispatch({
            type: b("PagesManagerActionType").LIST.VIEW,
            listItem: null
        })
    }
    function d(a) {
        b("PagesManagerDispatcher").dispatch({
            type: b("PagesManagerActionType").LIST.INITIAL_VIEW,
            item: a
        })
    }
    function e() {
        b("PagesManagerDispatcher").dispatch({
            type: b("PagesManagerActionType").LIST.CLEAR_INITIAL_VIEW
        })
    }
    function g(a) {
        b("PagesManagerDispatcher").dispatch({
            type: b("PagesManagerActionType").LAYOUT.HEIGHT_CHANGE,
            layoutHeight: a
        })
    }
    function h(a) {
        b("PagesManagerDispatcher").dispatch({
            type: b("PagesManagerActionType").LAYOUT.LIST_HEIGHT_CHANGE,
            height: a
        })
    }
    function i(a) {
        b("PagesManagerDispatcher").dispatch({
            type: b("PagesManagerActionType").LAYOUT.FOOTER_HEIGHT_CHANGE,
            height: a
        })
    }
    function j(a) {
        b("PagesManagerDispatcher").dispatch({
            type: b("PagesManagerActionType").LAYOUT.HEADER_HEIGHT_CHANGE,
            height: a
        })
    }
    function k(a) {
        b("PagesManagerDispatcher").dispatch({
            type: b("PagesManagerActionType").LAYOUT.LIST_HEADER_HEIGHT_CHANGE,
            height: a
        })
    }
    function l(a, c, d) {
        b("PagesManagerDispatcher").dispatch({
            type: b("PagesManagerActionType").LIST.SELECT,
            rowsAdded: a,
            rowsRemoved: c,
            selectedRows: d
        })
    }
    function m(a) {
        b("PagesManagerDispatcher").dispatch({
            type: b("PagesManagerActionType").LIST.SELECT,
            selectedRowsMap: a
        })
    }
    function n() {
        b("PagesManagerDispatcher").dispatch({
            type: b("PagesManagerActionType").LIST.DESELECT_ALL
        })
    }
    function o() {
        b("PagesManagerDispatcher").dispatch({
            type: b("PagesManagerActionType").LIST.BULK_SELECTION_TOGGLE
        })
    }
    function p(a, c) {
        b("PagesManagerDispatcher").dispatch({
            selectedThreadLabels: a,
            currentThreadID: c,
            type: b("PagesManagerActionType").LIST.SET_THREAD_LABELS
        })
    }
    function q(a, c) {
        b("PagesManagerDispatcher").dispatch({
            type: b("PagesManagerActionType").LIST.SELECT_THREAD,
            threadID: a,
            toggle: c
        })
    }
    function r() {
        b("PagesManagerDispatcher").dispatch({
            type: b("PagesManagerActionType").LIST.CLEAR_BULK_SELECTION
        })
    }
    function s(a) {
        b("PagesManagerDispatcher").dispatch({
            type: b("PagesManagerActionType").LIST.BULK_ACTION_RESULT,
            result: a
        })
    }
    function t() {
        b("PagesManagerDispatcher").dispatch({
            type: b("PagesManagerActionType").LIST.REMOVE_BULK_ACTION_RESULT
        })
    }
}
), null);
__d("PagesManagerStore", ["FluxStore", "PagesManagerActionType", "PagesManagerDispatcher", "PagesManagerInboxStore", "immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(c) {
            c = a.call(this, b("PagesManagerDispatcher")) || this;
            c.$PagesManagerStore6 = null;
            c.$PagesManagerStore1 = 0;
            c.$PagesManagerStore2 = 0;
            c.$PagesManagerStore3 = 0;
            c.$PagesManagerStore4 = [];
            c.$PagesManagerStore5 = new Map();
            c.$PagesManagerStore8 = 0;
            c.$PagesManagerStore9 = 0;
            c.$PagesManagerStore10 = 0;
            c.$PagesManagerStore11 = null;
            c.$PagesManagerStore12 = b("immutable").Set();
            c.$PagesManagerStore13 = !1;
            c.$PagesManagerStore14 = null;
            return c
        }
        var d = c.prototype;
        d.__onDispatch = function(a) {
            switch (a.type) {
            case b("PagesManagerActionType").LIST.VIEW:
                this.$PagesManagerStore6 = a.listItem;
                this.__emitChange();
                break;
            case b("PagesManagerActionType").LIST.SELECT:
                this.$PagesManagerStore15(a);
                this.__emitChange();
                break;
            case b("PagesManagerActionType").LAYOUT.HEIGHT_CHANGE:
                this.$PagesManagerStore2 = a.layoutHeight;
                this.__emitChange();
                break;
            case b("PagesManagerActionType").LAYOUT.LIST_HEIGHT_CHANGE:
                this.$PagesManagerStore3 = a.height;
                this.__emitChange();
                break;
            case b("PagesManagerActionType").LAYOUT.FOOTER_HEIGHT_CHANGE:
                this.$PagesManagerStore8 = a.height;
                this.__emitChange();
                break;
            case b("PagesManagerActionType").LAYOUT.HEADER_HEIGHT_CHANGE:
                this.$PagesManagerStore9 = a.height;
                this.__emitChange();
                break;
            case b("PagesManagerActionType").LAYOUT.LIST_HEADER_HEIGHT_CHANGE:
                this.$PagesManagerStore10 = a.height;
                this.__emitChange();
                break;
            case b("PagesManagerActionType").LIST.DESELECT_ALL:
                this.$PagesManagerStore15({
                    selectedRowsMap: new Map()
                });
                this.__emitChange();
                break;
            case b("PagesManagerActionType").LIST.INITIAL_VIEW:
                this.$PagesManagerStore16(a.item);
                break;
            case b("PagesManagerActionType").LIST.CLEAR_INITIAL_VIEW:
                this.$PagesManagerStore7 = null;
                break;
            case b("PagesManagerActionType").LIST.SET_THREAD_LABELS:
                var c = a.currentThreadID ? a.currentThreadID : this.$PagesManagerStore6;
                if (c !== null && c !== void 0)
                    if (this.$PagesManagerStore11)
                        this.$PagesManagerStore11 = this.$PagesManagerStore11.set(c, a.selectedThreadLabels);
                    else {
                        var d = {};
                        d[c] = a.selectedThreadLabels;
                        this.$PagesManagerStore11 = b("immutable").Map(d)
                    }
                this.__emitChange();
                break;
            case b("PagesManagerActionType").LIST.SELECT_THREAD:
                this.$PagesManagerStore17(a.threadID, a.toggle) && this.__emitChange();
                break;
            case b("PagesManagerActionType").LIST.BULK_SELECTION_TOGGLE:
                this.$PagesManagerStore18();
                this.__emitChange();
                break;
            case b("PagesManagerActionType").LIST.CLEAR_BULK_SELECTION:
                this.$PagesManagerStore19() && this.__emitChange();
                break;
            case b("PagesManagerActionType").LIST.BULK_ACTION_RESULT:
                this.$PagesManagerStore20(a.result);
                this.__emitChange();
                break;
            case b("PagesManagerActionType").LIST.REMOVE_BULK_ACTION_RESULT:
                this.$PagesManagerStore21() && this.__emitChange();
                break;
            default:
                return
            }
        }
        ;
        d.$PagesManagerStore16 = function(a) {
            this.$PagesManagerStore7 = a,
            this.$PagesManagerStore6 = a
        }
        ;
        d.$PagesManagerStore15 = function(a) {
            var b = this;
            if (Object.prototype.hasOwnProperty.call(a, "selectedRowsMap")) {
                this.$PagesManagerStore5 = a.selectedRowsMap;
                this.$PagesManagerStore4 = Array.from(this.$PagesManagerStore5.keys());
                return
            }
            this.$PagesManagerStore4 = a.selectedRows;
            a.rowsAdded.forEach(function(a) {
                b.$PagesManagerStore5.set(a, !0)
            });
            a.rowsRemoved.forEach(function(a) {
                b.$PagesManagerStore5.set(a, !1)
            })
        }
        ;
        d.$PagesManagerStore17 = function(a, b) {
            if (this.$PagesManagerStore12.has(a) !== b) {
                this.$PagesManagerStore12 = b ? this.$PagesManagerStore12.add(a) : this.$PagesManagerStore12.remove(a);
                return !0
            }
            return !1
        }
        ;
        d.$PagesManagerStore19 = function() {
            if (!this.$PagesManagerStore12.isEmpty()) {
                this.$PagesManagerStore12 = this.$PagesManagerStore12.clear();
                return !0
            }
            return !1
        }
        ;
        d.$PagesManagerStore18 = function() {
            this.$PagesManagerStore13 = !this.$PagesManagerStore13,
            this.$PagesManagerStore13 || (this.$PagesManagerStore12 = b("immutable").Set())
        }
        ;
        d.$PagesManagerStore20 = function(a) {
            this.$PagesManagerStore14 = a
        }
        ;
        d.$PagesManagerStore21 = function() {
            this.$PagesManagerStore14 = null
        }
        ;
        d.getLastBulkActionResult = function() {
            return this.$PagesManagerStore14
        }
        ;
        d.isBulkSelectionMode = function() {
            return this.$PagesManagerStore13
        }
        ;
        d.isThreadSelected = function(a) {
            return this.$PagesManagerStore12.has(a)
        }
        ;
        d.getSelectedThreads = function() {
            return !b("PagesManagerInboxStore").shouldShowBulkActions() ? b("immutable").Set() : this.$PagesManagerStore12
        }
        ;
        d.getThreadLabelMap = function() {
            return this.$PagesManagerStore11
        }
        ;
        d.getViewingListItem = function() {
            return this.$PagesManagerStore6
        }
        ;
        d.getInitialViewingItem = function() {
            return this.$PagesManagerStore7
        }
        ;
        d.getLayoutHeight = function() {
            return this.$PagesManagerStore2
        }
        ;
        d.getListNavigationHeight = function() {
            return this.$PagesManagerStore3
        }
        ;
        d.getFooterHeight = function() {
            return this.$PagesManagerStore8
        }
        ;
        d.getHeaderHeight = function() {
            return this.$PagesManagerStore9
        }
        ;
        d.getListHeaderHeight = function() {
            return this.$PagesManagerStore10
        }
        ;
        d.getIsRowSelected = function(a) {
            return this.$PagesManagerStore5.has(a) ? this.$PagesManagerStore5.get(a) : !1
        }
        ;
        d.getSelectedRows = function() {
            return this.$PagesManagerStore4
        }
        ;
        d.isSelectionMode = function() {
            return this.$PagesManagerStore4.length !== 0
        }
        ;
        return c
    }(b("FluxStore"));
    a.__moduleID = e.id;
    c = new a(b("PagesManagerDispatcher"));
    e.exports = c
}
), null);
__d("PagesManagerInboxActionType", ["ImmutableObject", "keyMirrorRecursive"], (function(a, b, c, d, e, f) {
    "use strict";
    a = new (b("ImmutableObject"))(b("keyMirrorRecursive")({
        COMMENT: "",
        CONFIG_SET: "",
        FACEBOOK_POST: {
            LOADED: ""
        },
        LIST: {
            MORE_LOADED: ""
        },
        NUX: {
            DISMISS: "",
            HIDE: "",
            VIEW: "",
            CONFIG_SET: ""
        },
        IG_COMMENT: {
            DELETE_REPLY: "",
            REPLY: ""
        },
        SWITCH_INTERFACE: {
            SWITCH_TO_OLD: ""
        },
        CHANGE_NAV_MODE: "",
        IS_BIZ_KIT: "",
        CMT_SEGMENTATION: {
            PERMANENT_DISMISS: "",
            DIMISSED_ALL: ""
        },
        WEC: {
            START_NEW_THREAD: ""
        }
    }));
    c = a;
    e.exports = c
}
), null);
__d("MediaManagerInboxQEUtils", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        return !1
    }
    ;
    f.shouldShowCommentRanking = a;
    b = function() {
        return !1
    }
    ;
    f.shouldShowMessengerRanking = b
}
), null);
__d("MediaManagerInboxUtils", ["MediaManagerInboxQEUtils", "PageCommItemFolder"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        return a !== null && a !== void 0 ? a : 0
    }
    ;
    f.FormatInitialCount = a;
    c = function() {
        return "inbox_plus"
    }
    ;
    f.InboxTabType = c;
    var g = function(a) {
        switch (a) {
        case "FACEBOOK":
            return b("MediaManagerInboxQEUtils").shouldShowCommentRanking() ? [b("PageCommItemFolder").PRIORITY] : [];
        case "MESSENGER":
            return b("MediaManagerInboxQEUtils").shouldShowMessengerRanking() ? [b("PageCommItemFolder").PRIORITY] : [];
        default:
            return []
        }
    };
    f.MediaManagerInboxSpecificFolders = g;
    var h = function(a, c) {
        if (!g(a).includes(b("PageCommItemFolder").PRIORITY))
            return !1;
        var d = !0;
        c != null && c[a] != null && (d = c[a] > 0);
        return d
    };
    f.ShouldPriorityAsDefault = h;
    d = function(a, c) {
        return a === "MEDIA_MANAGER_PRIORITY" ? b("PageCommItemFolder").MEDIA_MANAGER_ALL_TOP_PRIORITY : h(a, c) ? b("PageCommItemFolder").PRIORITY : b("PageCommItemFolder").TODO
    }
    ;
    f.getDefaultFilter = d
}
), null);
__d("PagesManagerInboxCustomLabelSearchableEntry", ["SearchableEntry"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b(b) {
            var c;
            c = a.call(this, {
                uniqueID: b.id,
                title: b.name
            }) || this;
            c.$PagesManagerInboxCustomLabelSearchableEntry1 = b;
            return c
        }
        var c = b.prototype;
        c.getColor = function() {
            return "#" + this.$PagesManagerInboxCustomLabelSearchableEntry1.color.substring(2)
        }
        ;
        c.getFBID = function() {
            return this.$PagesManagerInboxCustomLabelSearchableEntry1.id
        }
        ;
        c.getName = function() {
            return this.$PagesManagerInboxCustomLabelSearchableEntry1.name
        }
        ;
        c.getData = function() {
            return this.$PagesManagerInboxCustomLabelSearchableEntry1
        }
        ;
        return b
    }(b("SearchableEntry"));
    e.exports = a
}
), null);
__d("PagesInboxImpressionFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744136");
    c = b("FalcoLoggerInternal").create("pages_inbox_impression", a);
    e.exports = c
}
), null);
__d("PagesManagerMessagingLogger", ["invariant", "PageCommItemFolder", "PagesEventObserver", "PagesInboxImpressionFalcoEvent"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.logMessagesSectionViewEvent = a;
    f.logPageViewFolderEventForInbox = c;
    var h = "MESSENGER"
      , i = "inbox"
      , j = ":";
    function a(a, c, d) {
        c = c || i;
        var e;
        c.indexOf(":") && (e = c.split(j),
        c = e[e.length - 1]);
        b("PagesEventObserver").notify("view_messages", a, {
            section: d || h,
            subsection: c
        })
    }
    function c(a, c, d) {
        var e = "";
        switch (c) {
        case b("PageCommItemFolder").TODO:
        case b("PageCommItemFolder").FOLLOW_UP:
        case b("PageCommItemFolder").UNREAD:
        case b("PageCommItemFolder").MESSENGER_THREADS:
        case b("PageCommItemFolder").INSTAGRAM_THREADS:
        case b("PageCommItemFolder").PRIORITY:
        case b("PageCommItemFolder").MEDIA_MANAGER_ALL_TOP_PRIORITY:
            e = "messages_view_inbox";
            break;
        case b("PageCommItemFolder").DONE:
            e = "messages_view_archived";
            break;
        case b("PageCommItemFolder").SPAM:
            e = "messages_view_spam";
            break;
        default:
            g(0, 6258)
        }
        b("PagesEventObserver").notify(e, a, {
            source: d
        });
        e === "messages_view_inbox" && b("PagesInboxImpressionFalcoEvent").log(function() {
            return {
                event_location: "page__inbox",
                page_id: a,
                referrer: d,
                event_data: {
                    num_threads_viewed: null
                }
            }
        })
    }
}
), null);
__d("PagesManagerMessagingNavigationUnitKey", ["MercuryFilters.bs", "MessagingTag"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        ALL: b("MercuryFilters.bs").all,
        UNREAD: b("MercuryFilters.bs").unread,
        FLAGGED: "flag",
        PRIORITY: "important"
    };
    f.FILTERS = a;
    d = {
        INBOX: (c = b("MessagingTag")).INBOX,
        ARCHIVED: c.ACTION_ARCHIVED,
        PAGE_BACKGROUND: c.PAGE_BACKGROUND,
        SPAM: c.OTHER
    };
    f.FOLDERS = d
}
), null);
__d("PagesManagerInboxFilterStore", ["invariant", "FluxStore", "MediaManagerInboxUtils", "MediaManagerUtils", "PageCommItemFolder", "PagesManagerActionType", "PagesManagerDispatcher", "PagesManagerInboxCustomLabelSearchableEntry", "PagesManagerMessagingLogger", "PagesManagerMessagingNavigationUnitKey", "QE2Logger"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "unified_inbox_instagram_comments_revamp"
      , i = "CUSTOM_TAG_"
      , j = "OWNER_";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c;
            c = a.call(this, b("PagesManagerDispatcher")) || this;
            c.$PagesManagerInboxFilterStore1 = b("PageCommItemFolder").TODO;
            c.$PagesManagerInboxFilterStore2 = "ALL";
            c.$PagesManagerInboxFilterStore3 = {
                id: null,
                photoURL: null,
                name: null
            };
            c.$PagesManagerInboxFilterStore4 = "MESSENGER";
            c.$PagesManagerInboxFilterStore5 = !1;
            c.$PagesManagerInboxFilterStore6 = !1;
            c.$PagesManagerInboxFilterStore7 = !1;
            c.$PagesManagerInboxFilterStore8 = "";
            c.$PagesManagerInboxFilterStore9 = "CUSTOMER";
            c.$PagesManagerInboxFilterStore10 = null;
            c.$PagesManagerInboxFilterStore11 = [];
            c.$PagesManagerInboxFilterStore12 = new Map();
            c.$PagesManagerInboxFilterStore13 = !1;
            c.$PagesManagerInboxFilterStore14 = "all";
            c.$PagesManagerInboxFilterStore15 = !1;
            c.$PagesManagerInboxFilterStore16 = !1;
            c.$PagesManagerInboxFilterStore17 = null;
            return c
        }
        var d = c.prototype;
        d.__onDispatch = function(a) {
            switch (a.type) {
            case b("PagesManagerActionType").NAVIGATION_UNIT.CHANGE:
                var c = !1
                  , d = !1;
                this.$PagesManagerInboxFilterStore4 !== a.activeTypeFilter && a.activeTypeFilter && (c = !0);
                this.$PagesManagerInboxFilterStore4 === "MESSENGER" && a.activeFolderFilter && this.$PagesManagerInboxFilterStore1 !== a.activeFolderFilter && (d = !0);
                c && (b("PagesManagerMessagingLogger").logMessagesSectionViewEvent(a.pageID, null, a.activeTypeFilter),
                a.activeTypeFilter === "INSTAGRAM" && b("QE2Logger").logExposureForPage(h, a.pageID));
                d && a.activeFolderFilter !== b("PageCommItemFolder").FOLLOW_UP && b("PagesManagerMessagingLogger").logPageViewFolderEventForInbox(a.pageID, a.activeFolderFilter, "new_message_tab");
                a.activeFolderFilter || a.activeTypeFilter || a.activeOwnerFilter || g(0, 6210);
                a.activeFolderFilter && (this.$PagesManagerInboxFilterStore1 = a.activeFolderFilter,
                this.$PagesManagerInboxFilterStore4 === "WEC" && this.$PagesManagerInboxFilterStore1 !== b("PageCommItemFolder").TODO && (this.$PagesManagerInboxFilterStore4 = "MESSENGER"));
                a.activeTypeFilter && (this.$PagesManagerInboxFilterStore4 = a.activeTypeFilter);
                a.activeOwnerFilter && (this.$PagesManagerInboxFilterStore3 = a.activeOwnerFilter);
                this.__emitChange();
                break;
            case b("PagesManagerActionType").NAVIGATION_UNIT.CHANGE_PLATFORM:
                c = a.activeTypeFilter;
                c != null && a.activeFolderFilter !== this.$PagesManagerInboxFilterStore4 && (this.$PagesManagerInboxFilterStore4 = c,
                b("MediaManagerUtils").isMediaManagerApp() && this.$PagesManagerInboxFilterStore1 === b("PageCommItemFolder").PRIORITY && !b("MediaManagerInboxUtils").MediaManagerInboxSpecificFolders(c).includes(b("PageCommItemFolder").PRIORITY) && (this.$PagesManagerInboxFilterStore1 = b("PageCommItemFolder").TODO));
                this.__emitChange();
                break;
            case b("PagesManagerActionType").NAVIGATION_UNIT.CHANGE_UTL_FOLDER:
                this.$PagesManagerInboxFilterStore2 = a.activeUTLFolder;
                this.__emitChange();
                break;
            case b("PagesManagerActionType").SEARCH.CHANGE_SEARCH_TERM:
                this.$PagesManagerInboxFilterStore8 = a.searchTerm;
                this.$PagesManagerInboxFilterStore15 = !0;
                this.__emitChange();
                break;
            case b("PagesManagerActionType").SEARCH.CUSTOMER_SEARCH_DONE:
                this.$PagesManagerInboxFilterStore15 = !1;
                this.__emitChange();
                break;
            case b("PagesManagerActionType").SEARCH.SELECT_CUSTOMER:
                this.$PagesManagerInboxFilterStore10 = a.pageCustomerID;
                this.__emitChange();
                break;
            case b("PagesManagerActionType").SEARCH.CLEAR:
                this.$PagesManagerInboxFilterStore8 = "";
                this.$PagesManagerInboxFilterStore10 = null;
                this.$PagesManagerInboxFilterStore9 = "CUSTOMER";
                this.$PagesManagerInboxFilterStore3 = {
                    id: null,
                    photoURL: null,
                    name: null
                };
                this.$PagesManagerInboxFilterStore11 = [];
                this.__emitChange();
                break;
            case b("PagesManagerActionType").SEARCH.TOGGLE:
                this.$PagesManagerInboxFilterStore5 = a.targetStatus;
                this.__emitChange();
                break;
            case b("PagesManagerActionType").SEARCH.CHANGE_TYPE:
                a.searchType !== "ADMIN" && (this.$PagesManagerInboxFilterStore3 = {
                    id: null,
                    photoURL: null,
                    name: null
                });
                this.$PagesManagerInboxFilterStore9 = a.searchType;
                this.__emitChange();
                break;
            case b("PagesManagerActionType").SEARCH.ADD_SEARCH_CUSTOM_TAG:
                this.$PagesManagerInboxFilterStore8 = "";
                d = this.$PagesManagerInboxFilterStore11.findIndex(function(b) {
                    return b.name === a.label.name
                });
                d === -1 && this.$PagesManagerInboxFilterStore11.push(a.label);
                this.__emitChange();
                break;
            case b("PagesManagerActionType").SEARCH.REMOVE_SEARCH_CUSTOM_TAG:
                c = this.$PagesManagerInboxFilterStore11.findIndex(function(b) {
                    return b.name === a.label.name
                });
                c !== -1 && (this.$PagesManagerInboxFilterStore11.splice(c, 1),
                this.__emitChange());
                break;
            case b("PagesManagerActionType").LIST.TOGGLE_FOLDER_SELECTOR:
                this.$PagesManagerInboxFilterStore6 = a.isFolderChangeActive;
                this.__emitChange();
                break;
            case b("PagesManagerActionType").LIST.TOGGLE_FILTER_SELECTOR:
                this.$PagesManagerInboxFilterStore7 = a.isFilterChangeActive;
                this.__emitChange();
                break;
            case b("PagesManagerActionType").LIST.TOGGLE_SEGMENTATION_CARDS_LIST:
                this.$PagesManagerInboxFilterStore16 = a.isShowingSegmentationCardsList;
                this.__emitChange();
                break;
            case b("PagesManagerActionType").COMMENTS.CHANGE_TAB:
                this.$PagesManagerInboxFilterStore14 = a.tab;
                this.__emitChange();
                break;
            case b("PagesManagerActionType").COMMENTS.MARK_ALL_ITEMS_AS_READ:
                this.$PagesManagerInboxFilterStore12.set(this.$PagesManagerInboxFilterStore4, a.commentsLastMarkAsReadTimeStamp);
                this.__emitChange();
                break;
            case b("PagesManagerActionType").SEARCH.SELECT_CMT_SEGMENTATION:
                this.$PagesManagerInboxFilterStore17 = a.cmtSegmentationType;
                this.__emitChange();
                break
            }
        }
        ;
        d.setIsNewFolder = function(a) {
            this.$PagesManagerInboxFilterStore13 = a
        }
        ;
        d.getCurrentSearchCustomLabels = function() {
            return this.$PagesManagerInboxFilterStore11.map(function(a) {
                return new (b("PagesManagerInboxCustomLabelSearchableEntry"))(a)
            })
        }
        ;
        d.getIsFolderChangeActive = function() {
            return this.$PagesManagerInboxFilterStore6
        }
        ;
        d.getIsFilterChangeActive = function() {
            return this.$PagesManagerInboxFilterStore7
        }
        ;
        d.getActiveType = function() {
            return this.$PagesManagerInboxFilterStore4
        }
        ;
        d.getActiveFolder = function() {
            return this.$PagesManagerInboxFilterStore1
        }
        ;
        d.getActiveUTLFolder = function() {
            return this.$PagesManagerInboxFilterStore2
        }
        ;
        d.getActiveOwner = function() {
            return this.$PagesManagerInboxFilterStore3
        }
        ;
        d.getIsPeopleSearchLoading = function() {
            return this.$PagesManagerInboxFilterStore15
        }
        ;
        d.getActiveMessageFolder = function() {
            switch (this.$PagesManagerInboxFilterStore1) {
            case b("PageCommItemFolder").FOLLOW_UP:
            case b("PageCommItemFolder").TODO:
            case b("PageCommItemFolder").UNREAD:
            case b("PageCommItemFolder").MESSENGER_THREADS:
            case b("PageCommItemFolder").INSTAGRAM_THREADS:
            case b("PageCommItemFolder").PRIORITY:
            case b("PageCommItemFolder").MEDIA_MANAGER_TOP_COMMENT:
            case b("PageCommItemFolder").MEDIA_MANAGER_TOP_MESSAGE:
            case b("PageCommItemFolder").MEDIA_MANAGER_ALL_TOP_PRIORITY:
            case b("PageCommItemFolder").MEDIA_MANAGER_STARS_COMMENT:
            case b("PageCommItemFolder").MEDIA_MANAGER_ALL_SECONDARY_FOLDER:
                return b("PagesManagerMessagingNavigationUnitKey").FOLDERS.INBOX;
            case b("PageCommItemFolder").SPAM:
                return b("PagesManagerMessagingNavigationUnitKey").FOLDERS.SPAM;
            case b("PageCommItemFolder").DONE:
                return b("PagesManagerMessagingNavigationUnitKey").FOLDERS.ARCHIVED;
            default:
                g(0, 6211)
            }
        }
        ;
        d.getActiveMessageFilter = function() {
            switch (this.$PagesManagerInboxFilterStore1) {
            case b("PageCommItemFolder").TODO:
            case b("PageCommItemFolder").SPAM:
            case b("PageCommItemFolder").DONE:
            case b("PageCommItemFolder").FOLLOW_UP:
            case b("PageCommItemFolder").MESSENGER_THREADS:
            case b("PageCommItemFolder").INSTAGRAM_THREADS:
            case b("PageCommItemFolder").PRIORITY:
            case b("PageCommItemFolder").MEDIA_MANAGER_TOP_COMMENT:
            case b("PageCommItemFolder").MEDIA_MANAGER_TOP_MESSAGE:
            case b("PageCommItemFolder").MEDIA_MANAGER_ALL_TOP_PRIORITY:
            case b("PageCommItemFolder").MEDIA_MANAGER_STARS_COMMENT:
            case b("PageCommItemFolder").MEDIA_MANAGER_ALL_SECONDARY_FOLDER:
                return b("PagesManagerMessagingNavigationUnitKey").FILTERS.ALL;
            case b("PageCommItemFolder").UNREAD:
                return b("PagesManagerMessagingNavigationUnitKey").FILTERS.UNREAD;
            default:
                g(0, 6211)
            }
        }
        ;
        d.$PagesManagerInboxFilterStore18 = function() {
            return this.$PagesManagerInboxFilterStore11.length === 0 ? null : i + JSON.stringify(this.$PagesManagerInboxFilterStore11.map(function(a) {
                return a.name
            }).sort())
        }
        ;
        d.$PagesManagerInboxFilterStore19 = function() {
            return this.$PagesManagerInboxFilterStore3.id === null ? null : j + String(this.$PagesManagerInboxFilterStore3.id)
        }
        ;
        d.getActiveFilter = function() {
            return this.$PagesManagerInboxFilterStore19() || this.$PagesManagerInboxFilterStore18() || this.getActiveMessageFilter()
        }
        ;
        d.getSearchTerm = function() {
            return this.$PagesManagerInboxFilterStore8
        }
        ;
        d.getPageCustomerID = function() {
            return this.$PagesManagerInboxFilterStore10
        }
        ;
        d.getIsSearchActive = function() {
            return this.$PagesManagerInboxFilterStore5
        }
        ;
        d.getSearchType = function() {
            return this.$PagesManagerInboxFilterStore9
        }
        ;
        d.getIsNewFolder = function() {
            return this.$PagesManagerInboxFilterStore13
        }
        ;
        d.getCommentsTab = function() {
            return this.$PagesManagerInboxFilterStore14
        }
        ;
        d.getLastMarkedAsReadTimestamp = function() {
            var a;
            return (a = this.$PagesManagerInboxFilterStore12.get(this.$PagesManagerInboxFilterStore4)) != null ? a : 0
        }
        ;
        d.getIsShowingSegmentationCardsList = function() {
            return this.$PagesManagerInboxFilterStore16
        }
        ;
        d.getCMTSegmentationType = function() {
            return this.$PagesManagerInboxFilterStore17
        }
        ;
        return c
    }(b("FluxStore"));
    a.__moduleID = e.id;
    c = new a();
    e.exports = c
}
), null);
__d("PagesManagerInboxStore", ["invariant", "FluxStore", "HistoryManager", "PagesManagerActionType", "PagesManagerDispatcher", "PagesManagerInboxActionType", "PagesManagerInboxFilterStore", "PagesManagerInboxNUX", "PagesManagerStore", "URI"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = "selected_item_id", j = "mailbox_id", k = "platform", l = "page_inbox_instagram_direct_upsell";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c;
            c = a.call(this, b("PagesManagerDispatcher")) || this;
            c.$PagesManagerInboxStore4 = {};
            c.$PagesManagerInboxStore5 = 0;
            c.$PagesManagerInboxStore6 = !1;
            c.$PagesManagerInboxStore7 = "messages";
            c.$PagesManagerInboxStore8 = !1;
            c.$PagesManagerInboxStore9 = new Set();
            c.$PagesManagerInboxStore10 = !1;
            return c
        }
        var d = c.prototype;
        d.__onDispatch = function(a) {
            switch (a.type) {
            case b("PagesManagerInboxActionType").CONFIG_SET:
                this.$PagesManagerInboxStore1 = a.config;
                this.$PagesManagerInboxStore2 = a.businessInboxConfig;
                this.__emitChange();
                break;
            case b("PagesManagerInboxActionType").NUX.CONFIG_SET:
                this.$PagesManagerInboxStore11 = this.$PagesManagerInboxStore12(a.config);
                this.__emitChange();
                break;
            case b("PagesManagerInboxActionType").NUX.VIEW:
                a.nuxID !== b("PagesManagerInboxNUX")[l] && (this.$PagesManagerInboxStore3 = a.nuxID);
                this.__emitChange();
                break;
            case b("PagesManagerInboxActionType").NUX.DISMISS:
                this.$PagesManagerInboxStore4[a.nuxID] = !0;
                this.$PagesManagerInboxStore3 === a.nuxID && (this.$PagesManagerInboxStore5++,
                this.$PagesManagerInboxStore3 = null);
                this.__emitChange();
                break;
            case b("PagesManagerInboxActionType").NUX.HIDE:
                this.$PagesManagerInboxStore3 = null;
                this.$PagesManagerInboxStore5++;
                this.__emitChange();
                break;
            case b("PagesManagerActionType").LIST.VIEW:
                b("PagesManagerDispatcher").waitFor([b("PagesManagerStore").getDispatchToken()]);
                this.$PagesManagerInboxStore13(a.listItem);
                break;
            case b("PagesManagerInboxActionType").COMMENT:
                this.$PagesManagerInboxStore6 = !0;
                this.__emitChange();
                break;
            case b("PagesManagerInboxActionType").CHANGE_NAV_MODE:
                this.$PagesManagerInboxStore7 = a.navMode;
                this.__emitChange();
                break;
            case b("PagesManagerInboxActionType").IS_BIZ_KIT:
                this.$PagesManagerInboxStore8 = a.isInBizKit;
                this.__emitChange();
                break;
            case b("PagesManagerInboxActionType").CMT_SEGMENTATION.PERMANENT_DISMISS:
                this.$PagesManagerInboxStore9.add(a.segmentationType);
                this.__emitChange();
                break;
            case b("PagesManagerInboxActionType").CMT_SEGMENTATION.DISMISSED_ALL:
                this.$PagesManagerInboxStore10 = !0;
                this.__emitChange();
                break
            }
        }
        ;
        d.getCurrentNavMode = function() {
            return this.$PagesManagerInboxStore7
        }
        ;
        d.hasCommented = function() {
            return this.$PagesManagerInboxStore6
        }
        ;
        d.getIsMultiAdminEnabled = function() {
            var a = this.getBusinessInboxAppConfig();
            if (a == null)
                return this.getConfig().platformConfigs.MESSENGER.admins.length > 1;
            a = (a = this.getBusinessInboxAppConfig()) == null ? void 0 : a.pageConfig;
            return a == null ? !1 : a.admins.length > 1
        }
        ;
        d.getPageID = function() {
            var a = this.getBusinessInboxAppConfig();
            if (a == null)
                return this.getConfig().pageID;
            else {
                return (a = a.pageConfig) == null ? void 0 : a.pageID
            }
        }
        ;
        d.getMailboxID = function(a) {
            a === void 0 && (a = "MESSENGER");
            var b = this.getBusinessInboxAppConfig();
            if (b != null) {
                var c = null;
                switch (a) {
                case "INSTAGRAM":
                    c = b.instagramConfig;
                    break;
                case "INSTAGRAM_DIRECT":
                    c = b.instagramDirectConfig;
                    break;
                case "MESSENGER":
                case "FACEBOOK":
                    c = b.messengerConfig;
                    break;
                case "WEC":
                    c = b.wecConfig;
                    break
                }
                c != null || g(0, 19861, a);
                return c.mailboxID
            } else
                return this.getConfig().platformConfigs[a].mailboxID
        }
        ;
        d.getConfig = function() {
            this.$PagesManagerInboxStore1 || g(0, 5991);
            return this.$PagesManagerInboxStore1
        }
        ;
        d.getBusinessInboxAppConfig = function() {
            return this.$PagesManagerInboxStore2
        }
        ;
        d.getBusinessInboxAppConfigNonNull = function() {
            this.$PagesManagerInboxStore2 != null || g(0, 5991);
            return this.$PagesManagerInboxStore2
        }
        ;
        d.isInBizKit = function() {
            return Boolean(this.$PagesManagerInboxStore8)
        }
        ;
        d.shouldShowBulkActions = function() {
            var a = this.getBusinessInboxAppConfig();
            if (a != null) {
                return Boolean((a = a.messengerConfig) == null ? void 0 : (a = a.commerceConfig) == null ? void 0 : a.shouldShowBulkSelection)
            } else {
                a = (a = this.$PagesManagerInboxStore1) == null ? void 0 : a.platformConfigs.MESSENGER;
                return Boolean(a == null ? void 0 : a.showBulkSelection)
            }
        }
        ;
        d.shouldAllowBulkDelete = function() {
            var a;
            a = (a = this.$PagesManagerInboxStore1) == null ? void 0 : a.platformConfigs.MESSENGER;
            return Boolean(a == null ? void 0 : a.shouldAllowBulkDelete)
        }
        ;
        d.shouldShowNUX = function(a) {
            var c = b("PagesManagerInboxNUX")[a];
            c || g(0, 5992, a);
            if (this.$PagesManagerInboxStore4[c] || this.$PagesManagerInboxStore3 && this.$PagesManagerInboxStore3 !== c)
                return !1;
            if (this.$PagesManagerInboxStore11 != null)
                return a in this.$PagesManagerInboxStore11 ? this.$PagesManagerInboxStore11[a] : !1;
            c = this.getBusinessInboxAppConfig();
            return c != null ? c.nuxConfig == null ? !1 : c.nuxConfig[a] : this.getConfig().nuxConfig[a]
        }
        ;
        d.getBadgeCounts = function() {
            var a = this.getBusinessInboxAppConfig();
            if (a != null) {
                var b = a.validPlatformTypes
                  , c = {};
                b.forEach(function(b) {
                    switch (b) {
                    case "MESSENGER":
                        c.MESSENGER = (b = (b = a.messengerConfig) == null ? void 0 : b.badgeCount) != null ? b : 0;
                        break;
                    case "FACEBOOK":
                        c.FACEBOOK = (b = (b = a.facebookConfig) == null ? void 0 : b.badgeCount) != null ? b : 0;
                        break;
                    case "INSTAGRAM":
                        c.INSTAGRAM = (b = (b = a.instagramConfig) == null ? void 0 : b.badgeCount) != null ? b : 0;
                        break;
                    case "INSTAGRAM_DIRECT":
                        c.INSTAGRAM_DIRECT = (b = (b = a.instagramDirectConfig) == null ? void 0 : b.badgeCount) != null ? b : 0;
                        break;
                    case "WEC":
                        c.WEC = (b = (b = a.wecConfig) == null ? void 0 : b.badgeCount) != null ? b : 0;
                        break
                    }
                });
                return c
            } else
                return this.getConfig().badgeCounts
        }
        ;
        d.$PagesManagerInboxStore13 = function(a) {
            var c = new (h || (h = b("URI")))(window.location.href);
            if (a) {
                b("PagesManagerDispatcher").waitFor([b("PagesManagerInboxFilterStore").getDispatchToken()]);
                var d = b("PagesManagerInboxFilterStore").getActiveType();
                d = this.getMailboxID(d);
                c.addQueryData(j, d).addQueryData(i, a).removeQueryData(k)
            } else
                c.removeQueryData(i);
            b("HistoryManager").go(c.toString(), !1, !0)
        }
        ;
        d.getPageAdmins = function() {
            var a = this.getBusinessInboxAppConfig();
            if (a == null)
                return this.getConfig().platformConfigs.MESSENGER.admins;
            else {
                a = a.pageConfig;
                return a == null ? void 0 : a.admins
            }
        }
        ;
        d.getPageName = function() {
            var a = this.getBusinessInboxAppConfig();
            if (a == null)
                return this.getConfig().pageName;
            else {
                return (a = a.pageConfig) == null ? void 0 : a.pageName
            }
        }
        ;
        d.getValidPlatformTypes = function() {
            var a = this.getBusinessInboxAppConfig();
            return a == null ? this.getConfig().validPlatformTypes : a.validPlatformTypes
        }
        ;
        d.getPlatformConfig = function(a) {
            var b = this.getBusinessInboxAppConfig();
            if (b == null)
                return this.getConfig().platformConfigs[a];
            else
                switch (a) {
                case "MESSENGER":
                    return b.messengerConfig;
                case "INSTAGRAM":
                    return b.instagramConfig;
                case "INSTAGRAM_DIRECT":
                    return b.instagramDirectConfig;
                case "FACEBOOK":
                    return b.facebookConfig;
                case "WEC":
                    return b.wecConfig
                }
        }
        ;
        d.getDismissedSegmentationCards = function() {
            return this.$PagesManagerInboxStore9
        }
        ;
        d.hasDismissedAllSegmentation = function() {
            return this.$PagesManagerInboxStore10
        }
        ;
        d.$PagesManagerInboxStore12 = function(a) {
            return {
                pages_inbox_welcome_dialog: a.should_show_page_inbox_welcome_dialog,
                page_inbox_unified_thread_list_nux: a.should_show_page_inbox_unified_thread_list_nux,
                page_inbox_unified_thread_list_instagram_nux: a.should_show_page_inbox_unified_thread_list_instagram,
                business_inbox_product_picker_nux: a.should_show_business_inbox_product_picker_nux,
                business_inbox_product_picker_igd_nux: a.should_show_business_inbox_product_picker_igd_nux,
                page_inbox_instagram_direct_upsell: a.should_show_page_inbox_instagram_direct_upsell,
                bizweb_inbox_upsell_nux: a.should_show_bizweb_inbox_upsell_nux,
                page_inbox_saved_reply_upsell_nux: a.should_show_page_inbox_saved_reply_upsell_nux,
                business_inbox_go_to_home_banner: a.should_show_business_inbox_go_to_home_banner,
                www_page_inbox_order_details_nux: a.should_show_www_page_inbox_order_details_nux,
                inbox_messenger_guest_chat: a.should_show_inbox_messenger_guest_chat,
                page_inbox_instagram_direct_nux: a.should_show_page_inbox_instagram_direct_nux,
                www_return_to_send_message_nux: a.should_show_www_return_to_send_message_nux,
                business_inbox_covid_automated_response: a.should_show_business_inbox_covid_automated_response,
                www_pages_new_away_toggle_nux: a.should_show_www_pages_new_away_toggle_nux,
                leads_center_segmentation_inbox_upsell_nux: a.should_show_leads_center_segmentation_inbox_upsell_nux
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
__d("PageCommItemActionType", ["keyMirror"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("keyMirror")({
        DONE: null,
        FOLLOW_UP: null,
        UN_FOLLOW_UP: null,
        INBOX: null,
        MARK_READ: null,
        MARK_UNREAD: null,
        SPAM: null,
        DELETE: null,
        MORE: null
    });
    e.exports = a
}
), null);
__d("PagesManagerInboxCometUtil", ["cx", "fbt", "Env", "React"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    f.cometBadgeCountText = a;
    f.showCometBadgeCountText = k;
    var i, j = b("React");
    c = function() {
        return (i || (i = b("Env"))).isCQuick
    }
    ;
    f.shouldShowCometNewDesign = c;
    d = function() {
        return (i || (i = b("Env"))).isCQuick ? 54 : 0
    }
    ;
    f.cometSearchInputHeight = d;
    function a(a, b, c) {
        var d = "";
        a != null && (b === "MESSENGER" || b === "INSTAGRAM_DIRECT" ? d = h._({
            "*": "{number} messages",
            "_1": "1 message"
        }, [h._plural(a, "number")]) : (b === "FACEBOOK" || b === "INSTAGRAM") && (d = h._({
            "*": "{number} comments",
            "_1": "1 comment"
        }, [h._plural(a, "number")])));
        return k(d, c)
    }
    function k(a, b) {
        return j.jsxs("div", {
            className: "_8fgz",
            children: [j.jsx("div", {
                className: "_8fg5"
            }), j.jsx("div", {
                className: "_8fg6",
                "data-testid": void 0,
                children: a
            })]
        })
    }
}
), null);
__d("PagesManagerInboxUnifiedThreadlistUtil", ["MediaManagerUtils", "PagesManagerInboxStore"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = b("PagesManagerInboxStore").getBusinessInboxAppConfig();
        if (a != null) {
            a = (a = (a = a.inboxRedesignConfig) == null ? void 0 : a.shouldShowUnifiedThreadlist) != null ? a : !1;
            return a && !b("MediaManagerUtils").isMediaManagerApp()
        } else {
            var c;
            a = (c = b("PagesManagerInboxStore").getConfig().inboxRedesignConfig.shouldShowUnifiedThreadlist) != null ? c : !1
        }
        return a && !b("MediaManagerUtils").isMediaManagerApp()
    }
    ;
    f.shouldShowUnifiedThreadlist = a;
    c = function() {
        var a = b("PagesManagerInboxStore").getBusinessInboxAppConfig();
        if (a != null) {
            a = (a = (a = a.inboxRedesignConfig) == null ? void 0 : a.shouldShowUnifiedThreadlistSeparatedTab) != null ? a : !1;
            return a && !b("MediaManagerUtils").isMediaManagerApp()
        } else {
            var c;
            a = (c = b("PagesManagerInboxStore").getConfig().inboxRedesignConfig.shouldShowUnifiedThreadlistSeparatedTab) != null ? c : !1
        }
        return a && !b("MediaManagerUtils").isMediaManagerApp()
    }
    ;
    f.shouldShowUnifiedThreadlistSeparatedTab = c
}
), null);
__d("PageCommItemStatusUtil", ["ix", "cssVar", "fbt", "invariant", "PageCommItemActionType", "PageCommItemFolder", "PageCommItemStatus", "PagesManagerInboxCometUtil", "PagesManagerInboxUnifiedThreadlistUtil", "asset", "fbglyph"], (function(a, b, c, d, e, f, g, h, i, j) {
    "use strict";
    f.getFolders = a;
    f.getInboxFolders = c;
    f.getFilters = d;
    f.getLabel = e;
    f.getMenuLabel = h;
    f.getToolTipLabel = m;
    f.getStarLabel = n;
    f.getColor = o;
    f.getFolderStatus = p;
    f.getIGDirectFolder = q;
    f.getThreadsManagementStatus = r;
    f.getIsFilter = s;
    f.getActionParam = t;
    f.getUnreadStatusForMutation = u;
    f.getFollowUpStatusForMutation = v;
    f.getFolderColor = w;
    f.getIGDStatus = x;
    f.getFolderImage = y;
    f.getMediaManagerFolderImage = z;
    var k = "ARCHIVED"
      , l = (a = {},
    a[(c = b("PageCommItemFolder")).TODO] = i._("Ch\u00ednh"),
    a[c.FOLLOW_UP] = i._("Theo d\u00f5i"),
    a[c.DONE] = i._("Xong"),
    a[c.SPAM] = i._("Spam"),
    a[c.UNREAD] = i._("Ch\u01b0a \u0111\u1ecdc"),
    a[c.MESSENGER_THREADS] = i._("Messenger"),
    a[c.INSTAGRAM_THREADS] = i._("Instagram Direct"),
    a[c.PRIORITY] = i._("M\u1ee9c \u0111\u1ed9 \u01b0u ti\u00ean"),
    a);
    f.PageCommItemFolderLabelConfig = l;
    function a(a) {
        var c;
        c = [(c = b("PageCommItemFolder")).TODO, c.FOLLOW_UP, c.DONE, c.SPAM];
        a === b("PageCommItemFolder").UNREAD ? c.splice(0, 0, b("PageCommItemFolder").UNREAD) : c.splice(1, 0, b("PageCommItemFolder").UNREAD);
        return c
    }
    function c(a) {
        a = [b("PageCommItemFolder").TODO, b("PageCommItemFolder").DONE, b("PageCommItemFolder").SPAM];
        return a
    }
    function d(a) {
        var c = [b("PageCommItemFolder").FOLLOW_UP];
        a === b("PageCommItemFolder").UNREAD ? c.splice(0, 0, b("PageCommItemFolder").UNREAD) : c.splice(1, 0, b("PageCommItemFolder").UNREAD);
        a = b("PagesManagerInboxUnifiedThreadlistUtil").shouldShowUnifiedThreadlist();
        var d = b("PagesManagerInboxUnifiedThreadlistUtil").shouldShowUnifiedThreadlistSeparatedTab();
        a && !d && c.unshift(b("PageCommItemFolder").MESSENGER_THREADS, b("PageCommItemFolder").INSTAGRAM_THREADS);
        return c
    }
    function e(a) {
        return l[a]
    }
    function h(a) {
        switch (a) {
        case "DELETE":
            return i._("X\u00f3a cu\u1ed9c tr\u00f2 chuy\u1ec7n");
        case "SPAM":
            return m(b("PageCommItemStatus").SPAM);
        case "BAN":
            return i._("C\u1ea5m tr\u00ean Trang");
        case "UNBAN":
            return i._("Cho ho\u1ea1t \u0111\u1ed9ng l\u1ea1i tr\u00ean Trang?");
        default:
            j(0, 25940, a)
        }
    }
    function m(a) {
        switch (a) {
        case b("PageCommItemFolder").TODO:
            return i._("Chuy\u1ec3n \u0111\u1ebfn th\u01b0 m\u1ee5c Ch\u00ednh");
        case b("PageCommItemFolder").FOLLOW_UP:
            return i._("\u0110\u00e1nh d\u1ea5u l\u00e0 theo d\u00f5i");
        case b("PageCommItemFolder").DONE:
            return i._("Chuy\u1ec3n \u0111\u1ebfn th\u01b0 m\u1ee5c Xong");
        case b("PageCommItemFolder").SPAM:
            return i._("Chuy\u1ec3n \u0111\u1ebfn th\u01b0 m\u1ee5c Spam");
        default:
            j(0, 1566, a)
        }
    }
    function n(a) {
        switch (a) {
        case b("PageCommItemStatus").FOLLOW_UP:
            return i._("\u0110\u00e1nh d\u1ea5u l\u00e0 theo d\u00f5i");
        case b("PageCommItemStatus").TODO:
            return i._("G\u1ee1 kh\u1ecfi m\u1ee5c Theo d\u00f5i");
        default:
            j(0, 1567, a)
        }
    }
    function o(a) {
        switch (a) {
        case b("PageCommItemStatus").FOLLOW_UP:
            return "#000000";
        case b("PageCommItemStatus").TODO:
        case b("PageCommItemStatus").DONE:
        case b("PageCommItemStatus").SPAM:
            return "#000000";
        case b("PageCommItemStatus").UNREAD:
            return "#000000";
        default:
            j(0, 1568, a)
        }
    }
    function p(a) {
        switch (a) {
        case b("PageCommItemFolder").TODO:
        case b("PageCommItemFolder").UNREAD:
        case b("PageCommItemFolder").MESSENGER_THREADS:
        case b("PageCommItemFolder").INSTAGRAM_THREADS:
        case b("PageCommItemFolder").PRIORITY:
        case b("PageCommItemFolder").MEDIA_MANAGER_TOP_COMMENT:
        case b("PageCommItemFolder").MEDIA_MANAGER_TOP_MESSAGE:
        case b("PageCommItemFolder").MEDIA_MANAGER_ALL_TOP_PRIORITY:
        case b("PageCommItemFolder").MEDIA_MANAGER_STARS_COMMENT:
        case b("PageCommItemFolder").MEDIA_MANAGER_ALL_SECONDARY_FOLDER:
            return b("PageCommItemStatus").TODO;
        case b("PageCommItemFolder").FOLLOW_UP:
            return b("PageCommItemStatus").FOLLOW_UP;
        case b("PageCommItemFolder").DONE:
            return b("PageCommItemStatus").DONE;
        case b("PageCommItemFolder").SPAM:
            return b("PageCommItemStatus").SPAM;
        default:
            j(0, 1568, status)
        }
    }
    function q(a, c) {
        var d = null;
        a === b("PageCommItemFolder").SPAM ? d = b("PageCommItemFolder").SPAM : a === b("PageCommItemFolder").DONE ? d = k : a === b("PageCommItemFolder").TODO && (c === b("PageCommItemFolder").SPAM || c === b("PageCommItemFolder").DONE) && (d = b("PageCommItemFolder").TODO);
        return d
    }
    function r(a) {
        return this.getIsFilter(a) ? b("PageCommItemFolder").TODO : a
    }
    function s(a) {
        return a === b("PageCommItemFolder").UNREAD || a === b("PageCommItemFolder").FOLLOW_UP || a === b("PageCommItemFolder").MESSENGER_THREADS || a === b("PageCommItemFolder").INSTAGRAM_THREADS
    }
    function t(a, c, d, e) {
        d === void 0 && (d = !0);
        var f = a === "INSTAGRAM_DIRECT"
          , g = (a === "FACEBOOK" || a === "MESSENGER" || a === "INSTAGRAM" || a === "INSTAGRAM_DIRECT") && c !== b("PageCommItemFolder").SPAM
          , h = e && (e.is_read === !1 || e.unread_count > 0);
        e = e && (e.comm_status === b("PageCommItemFolder").FOLLOW_UP || e.is_follow_up);
        g = c !== b("PageCommItemFolder").DONE && g;
        var i = c === b("PageCommItemFolder").UNREAD;
        f = b("PagesManagerInboxCometUtil").shouldShowCometNewDesign() && (f || a === "MESSENGER");
        return {
            showDone: g,
            showFollowUp: c !== b("PageCommItemFolder").FOLLOW_UP && g && !e,
            showInbox: c === b("PageCommItemFolder").SPAM || c === b("PageCommItemFolder").DONE,
            showMarkRead: h != null ? h && g : i && g,
            showMarkUnread: h != null ? !h && g : !i && g,
            showSpam: g,
            showUnFollowup: e != null && g ? e : !1,
            showDelete: d,
            showMore: f
        }
    }
    function u(a, c, d) {
        if (!c)
            return null;
        if (a === b("PageCommItemFolder").UNREAD || a === b("PageCommItemActionType").MARK_UNREAD)
            return !1;
        else if ((a === b("PageCommItemFolder").TODO || a === b("PageCommItemActionType").MARK_READ) && c.is_read === !1 && d !== b("PageCommItemFolder").SPAM && d !== b("PageCommItemFolder").DONE)
            return !0;
        else
            return null
    }
    function v(a, c, d) {
        if (!c)
            return null;
        if (a === b("PageCommItemFolder").FOLLOW_UP)
            return !0;
        else if (a === b("PageCommItemFolder").TODO && c.is_follow_up === !0 && d !== b("PageCommItemFolder").SPAM && d !== b("PageCommItemFolder").DONE)
            return !1;
        else
            return null
    }
    function w(a) {
        return o(p(a))
    }
    function x(a) {
        switch (a) {
        case b("PageCommItemFolder").TODO:
        case b("PageCommItemFolder").UNREAD:
        case b("PageCommItemFolder").MESSENGER_THREADS:
        case b("PageCommItemFolder").INSTAGRAM_THREADS:
        case b("PageCommItemFolder").PRIORITY:
            return b("PageCommItemStatus").TODO;
        case b("PageCommItemFolder").FOLLOW_UP:
            return b("PageCommItemStatus").FOLLOW_UP;
        case b("PageCommItemFolder").DONE:
            return b("PageCommItemStatus").DONE;
        case b("PageCommItemFolder").SPAM:
            return b("PageCommItemStatus").SPAM;
        default:
            return b("PageCommItemStatus").TODO
        }
    }
    function y(a) {
        var c;
        switch (a) {
        case b("PageCommItemFolder").TODO:
            c = g("982942");
            break;
        case b("PageCommItemFolder").FOLLOW_UP:
            c = g("982961");
            break;
        case b("PageCommItemFolder").DONE:
            c = g("786413");
            break;
        case b("PageCommItemFolder").SPAM:
            c = g("982949");
            break;
        case b("PageCommItemFolder").UNREAD:
            c = g("982928");
            break;
        case b("PageCommItemFolder").MESSENGER_THREADS:
            c = g("1104734");
            break;
        case b("PageCommItemFolder").INSTAGRAM_THREADS:
            c = g("1104724");
            break
        }
        return c
    }
    function z(a) {
        var c;
        switch (a) {
        case b("PageCommItemFolder").TODO:
            c = g("686001");
            break;
        case b("PageCommItemFolder").FOLLOW_UP:
            c = g("479365");
            break;
        case b("PageCommItemFolder").DONE:
            c = g("124181");
            break;
        case b("PageCommItemFolder").SPAM:
            c = g("585265");
            break;
        case b("PageCommItemFolder").UNREAD:
            c = g("483099");
            break;
        case b("PageCommItemFolder").PRIORITY:
            c = g("880209");
            break
        }
        return c
    }
}
), null);
__d("PagesManagerMessagingActionType", ["PagesManagerActionType", "keyMirrorRecursive"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("keyMirrorRecursive")({
        THREAD_LEVEL: {
            READ_STATUS: "",
            ARCHIVE_STATUS: "",
            SPAM_STATUS: "",
            UPDATE_THREAD: ""
        },
        SET_SCROLL_HEIGHT: null,
        SET_APPOINTMENT_BANNER_HEIGHT: null,
        AWAY_STATE: {
            UPDATE: null,
            FETCH: null,
            SET: null
        },
        SET_IS_CONTEXT_CARD_HIDDEN: null,
        MESSAGE_SEARCH: {
            NAME_SEARCH_UPDATE: null,
            SNIPPET_SEARCH_UPDATE: null,
            LOAD_MORE_NAME_RESULT: null,
            LOAD_MORE_SNIPPET_RESULT: null
        },
        HOT_LIKE: {
            END: null,
            START: null
        },
        BAN: {
            RESET: null,
            UPDATE: null
        },
        CLASSIFIER: {
            INITIALIZE_STORE: null,
            CHECK_FOR_INTENT: null,
            NOTIFY_INTENT_CLASSIFIED: null,
            THREAD_INTENT_UPDATED: null,
            VERIFY_INTENT: null
        }
    });
    Object.assign(a, b("PagesManagerActionType"));
    c = a;
    e.exports = c
}
), null);
__d("PagesMessagingSearchMode", ["keyMirrorRecursive"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("keyMirrorRecursive")({
        ALL: "",
        NAME_SEARCH: "",
        KEYWORD_SEARCH: "",
        MESSAGE_SEARCH: "",
        NONE: ""
    });
    c = a;
    e.exports = c
}
), null);
__d("PagesManagerMessagingThreadlistAction", ["MercuryThreadlistConstants", "PagesManagerDispatcher", "PagesManagerMessagingActionType", "PagesMessagingSearchMode"], (function(a, b, c, d, e, f) {
    "use strict";
    f.initThreadlist = a;
    f.fetchThreadlist = c;
    f.updateThreadlist = d;
    f.changeSearchTerm = g;
    f.changeIsSearchingNameStatus = e;
    f.changeIsSearchingSnippetStatus = h;
    f.loadMoreNameResult = i;
    f.loadMoreSnippetResult = j;
    f.resetSearch = k;
    f.searchNameResult = l;
    f.searchMessageResult = m;
    function a(a) {
        this.fetchThreadlist(a, 0, b("MercuryThreadlistConstants").WEBMESSENGER_THREAD_COUNT)
    }
    function c(a, c, d) {
        b("PagesManagerDispatcher").dispatch({
            offset: c,
            limit: d,
            pageID: a,
            type: b("PagesManagerMessagingActionType").LIST.FETCH
        })
    }
    function d(a) {
        b("PagesManagerDispatcher").dispatch({
            pageID: a,
            type: b("PagesManagerMessagingActionType").LIST.UPDATED
        })
    }
    function g(a, c, d, e) {
        b("PagesManagerDispatcher").dispatch({
            type: b("PagesManagerMessagingActionType").SEARCH.CHANGE_SEARCH_TERM,
            searchTerm: c,
            pageID: a,
            activeFolder: d,
            searchMode: e
        })
    }
    function e(a) {
        b("PagesManagerDispatcher").dispatch({
            type: b("PagesManagerMessagingActionType").MESSAGE_SEARCH.NAME_SEARCH_UPDATE,
            isSearching: a
        })
    }
    function h(a) {
        b("PagesManagerDispatcher").dispatch({
            type: b("PagesManagerMessagingActionType").MESSAGE_SEARCH.SNIPPET_SEARCH_UPDATE,
            isSearching: a
        })
    }
    function i(a, c, d) {
        b("PagesManagerDispatcher").dispatch({
            type: b("PagesManagerMessagingActionType").MESSAGE_SEARCH.LOAD_MORE_NAME_RESULT,
            searchTerm: c,
            pageID: a,
            activeFolder: d
        })
    }
    function j(a, c, d) {
        b("PagesManagerDispatcher").dispatch({
            type: b("PagesManagerMessagingActionType").MESSAGE_SEARCH.LOAD_MORE_SNIPPET_RESULT,
            searchTerm: c,
            pageID: a,
            activeFolder: d
        })
    }
    function k(a) {
        g(a, "", "", b("PagesMessagingSearchMode").NONE)
    }
    function l(a, c, d) {
        b("PagesManagerDispatcher").dispatch({
            type: b("PagesManagerMessagingActionType").MESSAGE_SEARCH.CHANGE_NAME_SEARCH_TERM,
            searchTerm: c,
            pageID: a,
            activeFolder: d
        })
    }
    function m(a, c, d) {
        b("PagesManagerDispatcher").dispatch({
            type: b("PagesManagerMessagingActionType").MESSAGE_SEARCH.CHANGE_MESSAGE_SEARCH_TERM,
            searchTerm: c,
            pageID: a,
            activeFolder: d
        })
    }
}
), null);
__d("PagesManagerInboxFilterAction", ["IGMessageDataMutateAction", "PageCommItemFolder", "PageCommItemStatusUtil", "PagesManagerActionType", "PagesManagerDispatcher", "PagesManagerMessagingThreadlistAction"], (function(a, b, c, d, e, f) {
    "use strict";
    f.changeFolder = a;
    f.changeOwner = c;
    f.changeType = d;
    f.changeSearchTerm = e;
    f.selectCustomer = g;
    f.changePlatform = h;
    f.changeActiveUTLFolder = i;
    f.clearSearch = j;
    f.toggleSearch = k;
    f.changeSearchType = l;
    f.addCustomLabel = m;
    f.removeCustomLabel = n;
    f.toggleFolderSelector = o;
    f.toggleFilterSelector = p;
    f.toggleSegmentationCardsList = q;
    f.updateCommentsTab = r;
    f.setMarkAllCommentsAsReadTimestamp = s;
    f.setPeopleSearchLoaded = t;
    f.selectCMTSegmentation = u;
    function a(a, c, d) {
        c !== b("PageCommItemFolder").INSTAGRAM_THREADS && c !== b("PageCommItemFolder").MESSENGER_THREADS && d === "INSTAGRAM_DIRECT" && b("IGMessageDataMutateAction").forceFetchInbox(a, 20, b("PageCommItemStatusUtil").getIGDirectFolder(c), !1, !1, null),
        b("PagesManagerDispatcher").dispatch({
            activeFolderFilter: c,
            pageID: a,
            type: b("PagesManagerActionType").NAVIGATION_UNIT.CHANGE
        }),
        b("PagesManagerMessagingThreadlistAction").resetSearch(a)
    }
    function c(a, c, d, e) {
        b("PagesManagerDispatcher").dispatch({
            activeOwnerFilter: {
                id: c,
                photoURL: d,
                name: e
            },
            pageID: a,
            type: b("PagesManagerActionType").NAVIGATION_UNIT.CHANGE
        }),
        b("PagesManagerMessagingThreadlistAction").resetSearch(a)
    }
    function d(a, c) {
        b("PagesManagerDispatcher").dispatch({
            activeTypeFilter: c,
            pageID: a,
            type: b("PagesManagerActionType").NAVIGATION_UNIT.CHANGE
        }),
        b("PagesManagerMessagingThreadlistAction").resetSearch(a)
    }
    function e(a) {
        b("PagesManagerDispatcher").dispatch({
            searchTerm: a,
            type: b("PagesManagerActionType").SEARCH.CHANGE_SEARCH_TERM
        })
    }
    function g(a) {
        b("PagesManagerDispatcher").dispatch({
            pageCustomerID: a,
            type: b("PagesManagerActionType").SEARCH.SELECT_CUSTOMER
        })
    }
    function h(a, c) {
        a !== b("PageCommItemFolder").INSTAGRAM_THREADS && a !== b("PageCommItemFolder").MESSENGER_THREADS && a === "INSTAGRAM_DIRECT" && c != null && b("IGMessageDataMutateAction").forceFetchInbox(c, 20, b("PageCommItemFolder").TODO, !1, !1, null),
        b("PagesManagerDispatcher").dispatch({
            activeTypeFilter: a,
            type: b("PagesManagerActionType").NAVIGATION_UNIT.CHANGE_PLATFORM
        })
    }
    function i(a) {
        b("PagesManagerDispatcher").dispatch({
            activeUTLFolder: a,
            type: b("PagesManagerActionType").NAVIGATION_UNIT.CHANGE_UTL_FOLDER
        })
    }
    function j() {
        b("PagesManagerDispatcher").dispatch({
            type: b("PagesManagerActionType").SEARCH.CLEAR
        })
    }
    function k(a) {
        b("PagesManagerDispatcher").dispatch({
            targetStatus: a,
            type: b("PagesManagerActionType").SEARCH.TOGGLE
        })
    }
    function l(a) {
        b("PagesManagerDispatcher").dispatch({
            searchType: a,
            type: b("PagesManagerActionType").SEARCH.CHANGE_TYPE
        })
    }
    function m(a, c) {
        b("PagesManagerDispatcher").dispatch({
            label: a,
            pageID: c,
            type: b("PagesManagerActionType").SEARCH.ADD_SEARCH_CUSTOM_TAG
        })
    }
    function n(a, c) {
        b("PagesManagerDispatcher").dispatch({
            label: a,
            pageID: c,
            type: b("PagesManagerActionType").SEARCH.REMOVE_SEARCH_CUSTOM_TAG
        })
    }
    function o(a) {
        b("PagesManagerDispatcher").dispatch({
            isFolderChangeActive: a,
            type: b("PagesManagerActionType").LIST.TOGGLE_FOLDER_SELECTOR
        })
    }
    function p(a) {
        b("PagesManagerDispatcher").dispatch({
            isFilterChangeActive: a,
            type: b("PagesManagerActionType").LIST.TOGGLE_FILTER_SELECTOR
        })
    }
    function q(a) {
        b("PagesManagerDispatcher").dispatch({
            isShowingSegmentationCardsList: a,
            type: b("PagesManagerActionType").LIST.TOGGLE_SEGMENTATION_CARDS_LIST
        })
    }
    function r(a) {
        b("PagesManagerDispatcher").dispatch({
            tab: a,
            type: b("PagesManagerActionType").COMMENTS.CHANGE_TAB
        })
    }
    function s(a) {
        b("PagesManagerDispatcher").dispatch({
            commentsLastMarkAsReadTimeStamp: a,
            type: b("PagesManagerActionType").COMMENTS.MARK_ALL_ITEMS_AS_READ
        })
    }
    function t() {
        b("PagesManagerDispatcher").dispatch({
            type: b("PagesManagerActionType").SEARCH.CUSTOMER_SEARCH_DONE
        })
    }
    function u(a) {
        b("PagesManagerDispatcher").dispatch({
            cmtSegmentationType: a,
            type: b("PagesManagerActionType").SEARCH.SELECT_CMT_SEGMENTATION
        })
    }
}
), null);
__d("PagesManagerInboxAction", ["PagesManagerInboxFilterStore", "PagesManagerInboxStore", "PagesManagerStore", "MediaManagerInboxQEUtils", "MediaManagerUtils", "PageCommItemFolder", "PagesManagerAction", "PagesManagerDispatcher", "PagesManagerInboxActionType", "PagesManagerInboxFilterAction"], (function(a, b, c, d, e, f) {
    "use strict";
    f.initialConfig = a;
    f.initialNuxConfig = c;
    f.comment = d;
    f.setNavMode = e;
    f.setIsInBizKit = g;
    f.startNewWECThread = h;
    b("PagesManagerInboxFilterStore");
    b("PagesManagerInboxStore");
    b("PagesManagerStore");
    function a(a, c, d, e) {
        b("PagesManagerDispatcher").dispatch({
            config: c,
            businessInboxConfig: d,
            type: b("PagesManagerInboxActionType").CONFIG_SET
        }),
        e ? (b("PagesManagerInboxFilterAction").changeType(a, e.platform),
        b("PagesManagerInboxFilterAction").changeFolder(a, e.folder),
        b("PagesManagerAction").viewListItem(e.id)) : b("MediaManagerUtils").isMediaManagerApp() ? b("MediaManagerInboxQEUtils").shouldShowMessengerRanking() && c.priorityBadgeCounts != null && c.priorityBadgeCounts.MESSENGER > 0 ? b("PagesManagerInboxFilterAction").changeFolder(a, b("PageCommItemFolder").PRIORITY) : b("PagesManagerInboxFilterAction").changeFolder(a, b("PageCommItemFolder").TODO) : c.platformConfigs[c.defaultPlatform].defaultFolder === b("PageCommItemFolder").UNREAD && b("PagesManagerInboxFilterAction").changeFolder(a, b("PageCommItemFolder").UNREAD)
    }
    function c(a) {
        b("PagesManagerDispatcher").dispatch({
            config: a,
            type: b("PagesManagerInboxActionType").NUX.CONFIG_SET
        })
    }
    function d() {
        b("PagesManagerDispatcher").dispatch({
            type: b("PagesManagerInboxActionType").COMMENT
        })
    }
    function e(a) {
        b("PagesManagerDispatcher").dispatch({
            type: b("PagesManagerInboxActionType").CHANGE_NAV_MODE,
            navMode: a
        })
    }
    function g(a) {
        b("PagesManagerDispatcher").dispatch({
            type: b("PagesManagerInboxActionType").IS_BIZ_KIT,
            isInBizKit: a
        })
    }
    function h(a, c) {
        b("PagesManagerDispatcher").dispatch({
            type: b("PagesManagerInboxActionType").WEC.START_NEW_THREAD,
            phoneCode: a,
            phoneNumber: c
        })
    }
}
), null);
__d("PagesManagerInboxIGCommentAction", ["PagesManagerDispatcher", "PagesManagerInboxActionType"], (function(a, b, c, d, e, f) {
    "use strict";
    f.deleteReply = a;
    f.reply = c;
    function a(a) {
        b("PagesManagerDispatcher").dispatch({
            type: b("PagesManagerInboxActionType").IG_COMMENT.DELETE_REPLY,
            parentCommentID: a
        })
    }
    function c(a) {
        b("PagesManagerDispatcher").dispatch({
            type: b("PagesManagerInboxActionType").IG_COMMENT.REPLY,
            parentCommentID: a
        })
    }
}
), null);
__d("PagesManagerInboxIGCommentStore", ["FluxStore", "PagesManagerDispatcher", "PagesManagerInboxActionType"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c;
            c = a.call(this, b("PagesManagerDispatcher")) || this;
            c.$PagesManagerInboxIGCommentStore1 = new Map();
            c.$PagesManagerInboxIGCommentStore2 = null;
            return c
        }
        var d = c.prototype;
        d.__onDispatch = function(a) {
            switch (a.type) {
            case b("PagesManagerInboxActionType").IG_COMMENT.REPLY:
                this.updateStore(a);
                this.__emitChange();
                break;
            case b("PagesManagerInboxActionType").IG_COMMENT.DELETE_REPLY:
                this.updateStore(a);
                this.__emitChange();
                break
            }
        }
        ;
        d.updateStore = function(a) {
            var c, d = this.$PagesManagerInboxIGCommentStore1.get(a.parentCommentID);
            c = (c = d == null ? void 0 : d.numRepliesLoaded) != null ? c : 0;
            d = (d = d == null ? void 0 : d.numRepliesShowing) != null ? d : 0;
            var e = {};
            switch (a.type) {
            case b("PagesManagerInboxActionType").IG_COMMENT.REPLY:
                e = {
                    numRepliesLoaded: c + 1,
                    numRepliesShowing: d + 1
                };
                break;
            case b("PagesManagerInboxActionType").IG_COMMENT.DELETE_REPLY:
                e = {
                    numRepliesLoaded: c - 1,
                    numRepliesShowing: d - 1
                };
                break
            }
            this.setReplyInfo(a.parentCommentID, e);
            this.setUpdatedCommentID(a.parentCommentID)
        }
        ;
        d.getReplyInfo = function(a) {
            return this.$PagesManagerInboxIGCommentStore1.get(a)
        }
        ;
        d.setReplyInfo = function(a, b) {
            this.$PagesManagerInboxIGCommentStore1.set(a, b)
        }
        ;
        d.getUpdatedCommentID = function() {
            return this.$PagesManagerInboxIGCommentStore2
        }
        ;
        d.setUpdatedCommentID = function(a) {
            this.$PagesManagerInboxIGCommentStore2 = a
        }
        ;
        return c
    }(b("FluxStore"));
    a.__moduleID = e.id;
    c = new a();
    e.exports = c
}
), null);
__d("PagesManagerInboxInstagramPostComposerActionTypes", ["keyMirrorRecursive"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("keyMirrorRecursive")({
        MESSAGE: {
            SET: "message/set",
            LINK_REPLY: "message/link_reply",
            CLEAR: "message/clear"
        }
    });
    c = a;
    e.exports = c
}
), null);
__d("PagesManagerInboxInstagramPostComposerActions", ["PagesManagerDispatcher", "PagesManagerInboxInstagramPostComposerActionTypes"], (function(a, b, c, d, e, f) {
    "use strict";
    f.setMessage = a;
    f.linkReply = c;
    f.clearMessage = d;
    function a(a) {
        b("PagesManagerDispatcher").dispatch({
            actionType: b("PagesManagerInboxInstagramPostComposerActionTypes").MESSAGE.SET,
            message: a
        })
    }
    function c(a) {
        b("PagesManagerDispatcher").dispatch({
            actionType: b("PagesManagerInboxInstagramPostComposerActionTypes").MESSAGE.LINK_REPLY,
            replyMetadata: a
        })
    }
    function d() {
        b("PagesManagerDispatcher").dispatch({
            actionType: b("PagesManagerInboxInstagramPostComposerActionTypes").MESSAGE.CLEAR
        })
    }
}
), null);
__d("PagesManagerInboxInstagramPostComposerStore.react", ["FluxStore", "PagesManagerDispatcher", "PagesManagerInboxInstagramPostComposerActionTypes"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c;
            c = a.call(this, b("PagesManagerDispatcher")) || this;
            c.$PagesManagerInboxInstagramPostComposerStore1 = "";
            c.$PagesManagerInboxInstagramPostComposerStore2 = null;
            return c
        }
        var d = c.prototype;
        d.__onDispatch = function(a) {
            switch (a.actionType) {
            case b("PagesManagerInboxInstagramPostComposerActionTypes").MESSAGE.SET:
                this.$PagesManagerInboxInstagramPostComposerStore3(a.message);
                this.__emitChange();
                break;
            case b("PagesManagerInboxInstagramPostComposerActionTypes").MESSAGE.LINK_REPLY:
                this.$PagesManagerInboxInstagramPostComposerStore4(a.replyMetadata.username);
                this.$PagesManagerInboxInstagramPostComposerStore5(a.replyMetadata.parent_comment_id);
                this.__emitChange();
                break;
            case b("PagesManagerInboxInstagramPostComposerActionTypes").MESSAGE.CLEAR:
                this.$PagesManagerInboxInstagramPostComposerStore1 = "";
                this.$PagesManagerInboxInstagramPostComposerStore5(null);
                this.__emitChange();
                break
            }
        }
        ;
        d.getMessage = function() {
            return this.$PagesManagerInboxInstagramPostComposerStore1
        }
        ;
        d.$PagesManagerInboxInstagramPostComposerStore3 = function(a) {
            this.$PagesManagerInboxInstagramPostComposerStore1 = a
        }
        ;
        d.getParentCommentID = function() {
            return this.$PagesManagerInboxInstagramPostComposerStore2
        }
        ;
        d.$PagesManagerInboxInstagramPostComposerStore5 = function(a) {
            this.$PagesManagerInboxInstagramPostComposerStore2 = a
        }
        ;
        d.$PagesManagerInboxInstagramPostComposerStore4 = function(a) {
            this.$PagesManagerInboxInstagramPostComposerStore1 = "@".concat(a).concat(" ")
        }
        ;
        return c
    }(b("FluxStore"));
    a.__moduleID = e.id;
    c = new a();
    e.exports = c
}
), null);
__d("BusinessInboxContentSearchClickFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743212");
    c = b("FalcoLoggerInternal").create("business_inbox_content_search_click", a);
    e.exports = c
}
), null);
__d("BusinessInboxContentSearchResultRenderViewFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743214");
    c = b("FalcoLoggerInternal").create("business_inbox_content_search_result_render_view", a);
    e.exports = c
}
), null);
__d("BusinessInboxLabelSearchClickFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743220");
    c = b("FalcoLoggerInternal").create("business_inbox_label_search_click", a);
    e.exports = c
}
), null);
__d("BusinessInboxMessageClickFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743224");
    c = b("FalcoLoggerInternal").create("business_inbox_message_click", a);
    e.exports = c
}
), null);
__d("BusinessInboxMessageComposerFocusAcquiredFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743225");
    c = b("FalcoLoggerInternal").create("business_inbox_message_composer_focus_acquired", a);
    e.exports = c
}
), null);
__d("BusinessInboxMessageListRenderViewFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743226");
    c = b("FalcoLoggerInternal").create("business_inbox_message_list_render_view", a);
    e.exports = c
}
), null);
__d("BusinessInboxMessageRenderViewFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743227");
    c = b("FalcoLoggerInternal").create("business_inbox_message_render_view", a);
    e.exports = c
}
), null);
__d("BusinessInboxMessageSendRequestFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743228");
    c = b("FalcoLoggerInternal").create("business_inbox_message_send_request", a);
    e.exports = c
}
), null);
__d("BusinessInboxMultiAdminAssignmentUpdateFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743229");
    c = b("FalcoLoggerInternal").create("business_inbox_multi_admin_assignment_update", a);
    e.exports = c
}
), null);
__d("BusinessInboxPeopleSearchClickFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743232");
    c = b("FalcoLoggerInternal").create("business_inbox_people_search_click", a);
    e.exports = c
}
), null);
__d("BusinessInboxPlatformClickFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743235");
    c = b("FalcoLoggerInternal").create("business_inbox_platform_click", a);
    e.exports = c
}
), null);
__d("BusinessInboxPostFolderUpdateFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743236");
    c = b("FalcoLoggerInternal").create("business_inbox_post_folder_update", a);
    e.exports = c
}
), null);
__d("BusinessInboxSavedReplySendResponseFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743241");
    c = b("FalcoLoggerInternal").create("business_inbox_saved_reply_send_response", a);
    e.exports = c
}
), null);
__d("BusinessInboxSearchCancelClickFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743242");
    c = b("FalcoLoggerInternal").create("business_inbox_search_cancel_click", a);
    e.exports = c
}
), null);
__d("BusinessInboxSearchFocusClickFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743243");
    c = b("FalcoLoggerInternal").create("business_inbox_search_focus_click", a);
    e.exports = c
}
), null);
__d("BusinessInboxSearchResultRenderViewFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743244");
    c = b("FalcoLoggerInternal").create("business_inbox_search_result_render_view", a);
    e.exports = c
}
), null);
__d("BusinessInboxSuggestedLabelClickFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743246");
    c = b("FalcoLoggerInternal").create("business_inbox_suggested_label_click", a);
    e.exports = c
}
), null);
__d("BusinessInboxSuggestedLabelImpressionFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743247");
    c = b("FalcoLoggerInternal").create("business_inbox_suggested_label_impression", a);
    e.exports = c
}
), null);
__d("BusinessInboxSwitchFolderClickFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743248");
    c = b("FalcoLoggerInternal").create("business_inbox_switch_folder_click", a);
    e.exports = c
}
), null);
__d("BusinessInboxThreadClickFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743252");
    c = b("FalcoLoggerInternal").create("business_inbox_thread_click", a);
    e.exports = c
}
), null);
__d("BusinessInboxThreadFolderUpdateFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743256");
    c = b("FalcoLoggerInternal").create("business_inbox_thread_folder_update", a);
    e.exports = c
}
), null);
__d("BusinessInboxThreadListRenderViewFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1743258");
    c = b("FalcoLoggerInternal").create("business_inbox_thread_list_render_view", a);
    e.exports = c
}
), null);
__d("PagesMessagingPerfTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:PagesMessagingPerfLoggerConfig", this.$1, b("Banzai").BASIC, a)
        }
        ;
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:PagesMessagingPerfLoggerConfig", this.$1, b("Banzai").VITAL, a)
        }
        ;
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:PagesMessagingPerfLoggerConfig", this.$1, {
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
        c.setEventName = function(a) {
            this.$1.event_name = a;
            return this
        }
        ;
        c.setExceptionCode = function(a) {
            this.$1.exception_code = a;
            return this
        }
        ;
        c.setExceptionMessage = function(a) {
            this.$1.exception_message = a;
            return this
        }
        ;
        c.setPageID = function(a) {
            this.$1.page_id = a;
            return this
        }
        ;
        c.setPerfTime = function(a) {
            this.$1.perf_time = a;
            return this
        }
        ;
        c.setPlatform = function(a) {
            this.$1.platform = a;
            return this
        }
        ;
        c.setStack = function(a) {
            this.$1.stack = a;
            return this
        }
        ;
        c.setThreadID = function(a) {
            this.$1.thread_id = a;
            return this
        }
        ;
        c.setThreadOffset = function(a) {
            this.$1.thread_offset = a;
            return this
        }
        ;
        return a
    }();
    c = {
        event_name: !0,
        exception_code: !0,
        exception_message: !0,
        page_id: !0,
        perf_time: !0,
        platform: !0,
        stack: !0,
        thread_id: !0,
        thread_offset: !0
    };
    e.exports = a
}
), null);
__d("BIZInboxClientLogger", ["BizInboxThreadActionType", "BusinessInboxBizKitUtil", "BusinessInboxCommentReactionListClickFalcoEvent", "BusinessInboxCommentReactionListImpressionFalcoEvent", "BusinessInboxCommentReplyClickFalcoEvent", "BusinessInboxCommentSubmitFalcoEvent", "BusinessInboxContentSearchClickFalcoEvent", "BusinessInboxContentSearchResultRenderViewFalcoEvent", "BusinessInboxDeleteCommentClickFalcoEvent", "BusinessInboxHeaderViewRenderViewFalcoEvent", "BusinessInboxInboxRootInitRenderFalcoEvent", "BusinessInboxJsErrorDebugFalcoEvent", "BusinessInboxLabelSearchClickFalcoEvent", "BusinessInboxMessageClickFalcoEvent", "BusinessInboxMessageComposerFocusAcquiredFalcoEvent", "BusinessInboxMessageComposerRenderViewFalcoEvent", "BusinessInboxMessageListRenderViewFalcoEvent", "BusinessInboxMessageRenderViewFalcoEvent", "BusinessInboxMessageSendRequestFalcoEvent", "BusinessInboxMultiAdminAssignmentUpdateFalcoEvent", "BusinessInboxPeopleSearchClickFalcoEvent", "BusinessInboxPlatformClickFalcoEvent", "BusinessInboxPostFolderUpdateFalcoEvent", "BusinessInboxSavedReplySendResponseFalcoEvent", "BusinessInboxSearchCancelClickFalcoEvent", "BusinessInboxSearchFocusClickFalcoEvent", "BusinessInboxSearchResultRenderViewFalcoEvent", "BusinessInboxStatusToggleClickFalcoEvent", "BusinessInboxSuggestedLabelClickFalcoEvent", "BusinessInboxSuggestedLabelImpressionFalcoEvent", "BusinessInboxSwitchFolderClickFalcoEvent", "BusinessInboxThreadClickFalcoEvent", "BusinessInboxThreadDeleteHeaderButtonCancelFlowFalcoEvent", "BusinessInboxThreadDeleteHeaderButtonClickFalcoEvent", "BusinessInboxThreadDeleteHeaderButtonSubmitFlowFalcoEvent", "BusinessInboxThreadFolderUpdateFalcoEvent", "BusinessInboxThreadFollowupHeaderButtonClickFalcoEvent", "BusinessInboxThreadListRenderViewFalcoEvent", "BusinessInboxThreadListUpdateFalcoEvent", "BusinessInboxThreadMarkFollowupThreadButtonClickFalcoEvent", "BusinessInboxThreadMarkReadUnreadHeaderButtonClickFalcoEvent", "BusinessInboxThreadMoveToDoneHeaderButtonClickFalcoEvent", "BusinessInboxThreadMoveToDoneThreadButtonClickFalcoEvent", "BusinessInboxThreadMoveToMainHeaderButtonClickFalcoEvent", "BusinessInboxThreadMoveToMainThreadButtonClickFalcoEvent", "BusinessInboxThreadMoveToSpamHeaderButtonClickFalcoEvent", "CurrentUser", "PageCommItemActionType", "PageCommItemFolder", "PageCommItemStatus", "PageCommPlatform", "PagesMessagingPerfTypedLogger", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    f.getInboxPlatformAndUserType = g;
    f.getClientExperimentData = h;
    f.logThreadListRenderView = a;
    f.processThreadID = i;
    f.logMessageListRenderView = c;
    f.logMessageSend = d;
    f.logPlatformClick = e;
    f.logPlatformClickP13N = j;
    f.logSuggestedLabelImpression = k;
    f.logSuggestedLabelClick = l;
    f.logSavedReplyClick = m;
    f.logSearchFocusClick = n;
    f.logSearchCancelClick = o;
    f.logSearchResultRenderView = p;
    f.logDifferentSearchClick = q;
    f.logDifferentSearchResultRenderView = r;
    f.logSwitchFolderClick = s;
    f.logFolderUpdate = t;
    f.logThreadlistInfiniteLoad = u;
    f.logThreadClick = v;
    f.logMessageComposerFocus = w;
    f.logMessageComposerRender = x;
    f.logMessageRenderView = y;
    f.logMessageClick = z;
    f.logInboxRootInitRender = A;
    f.logStatusToggleClick = B;
    f.logHeaderButtonClick = C;
    f.logThreadButtonClick = D;
    f.logThreadDeleteHeaderButtonCancelFlow = E;
    f.logMultiAdminAssignment = F;
    f.logHeaderViewRenderView = G;
    f.logCommentReactionListImpression = H;
    f.logCommentReactionListClick = I;
    f.logCommentSubmit = J;
    f.logDeleteCommentClick = K;
    f.logCommentReplyClick = L;
    f.logThreadListUpdate = M;
    f.logJSError = N;
    function g(a) {
        var b = "unknown", c = "unknown", d;
        a === "ALL" ? (b = "unified_threads",
        c = "facebook",
        d = "FB_MESSAGE") : a === "INSTAGRAM_DIRECT" ? (b = "instagram_direct",
        c = "instagram",
        d = "IG_MESSAGE") : a === "INSTAGRAM" ? (b = "instagram",
        c = "instagram",
        d = "INSTAGRAM_POST") : a === "MESSENGER" ? (b = "messenger",
        c = "facebook",
        d = "FB_MESSAGE") : a === "FACEBOOK" && (b = "facebook",
        c = "facebook",
        d = "FB_PAGE_POST");
        return {
            inboxPlatform: b,
            userType: c,
            commType: d
        }
    }
    function h(a) {
        return (a = a) != null ? a : b("BusinessInboxBizKitUtil").isInBizKit() ? "show_bizweb" : "page_inbox"
    }
    function a(a, c, d) {
        var e = g(c);
        if (e.userType === "unknown")
            return;
        b("BusinessInboxThreadListRenderViewFalcoEvent").log(function() {
            return {
                event_location: "www_client",
                page_id: a,
                inbox_platform: e.inboxPlatform,
                event_data: {
                    platform: e.inboxPlatform
                },
                ig_account_id: null,
                business_presence_node_id: null,
                logged_in_user_id: b("CurrentUser").getID(),
                logged_in_user_type: e.userType,
                client_timestamp_ms: Date.now(),
                thread_id: null,
                consumer_id: null,
                referrer: window.location.href,
                client_experiment_data: h(d)
            }
        })
    }
    function i(a) {
        return a.replace("user:", "")
    }
    function c(a, c, d, e) {
        if (d == null)
            return;
        var f = i(d)
          , j = g(c);
        if (j.userType === "unknown")
            return;
        b("BusinessInboxMessageListRenderViewFalcoEvent").log(function() {
            return {
                event_location: "www_client",
                page_id: a,
                inbox_platform: j.inboxPlatform,
                event_data: {
                    thread_id: f
                },
                ig_account_id: null,
                business_presence_node_id: null,
                logged_in_user_id: b("CurrentUser").getID(),
                logged_in_user_type: j.userType,
                client_timestamp_ms: Date.now(),
                thread_id: f,
                consumer_id: null,
                referrer: window.location.href,
                client_experiment_data: h(e)
            }
        })
    }
    function d(a, c, d, e, f, j) {
        if (a == null || d == null)
            return;
        var k = i(d)
          , l = g(c);
        if (l.userType === "unknown")
            return;
        b("BusinessInboxMessageSendRequestFalcoEvent").log(function() {
            return {
                event_location: "www_client",
                page_id: a,
                inbox_platform: l.inboxPlatform,
                event_data: {
                    message_type: e,
                    thread_id: k,
                    comm_type: f
                },
                ig_account_id: null,
                business_presence_node_id: null,
                logged_in_user_id: b("CurrentUser").getID(),
                logged_in_user_type: l.userType,
                client_timestamp_ms: Date.now(),
                thread_id: k,
                consumer_id: null,
                referrer: window.location.href,
                client_experiment_data: h(j)
            }
        })
    }
    function e(a, c, d, e, f, i) {
        if (c == null || e !== "messages" || f !== "messages")
            return;
        var j = g(c);
        if (j.userType === "unknown")
            return;
        b("BusinessInboxPlatformClickFalcoEvent").log(function() {
            return {
                event_location: "www_client",
                page_id: a,
                inbox_platform: j.inboxPlatform,
                event_data: {
                    source: c,
                    target: d
                },
                ig_account_id: null,
                business_presence_node_id: null,
                logged_in_user_id: b("CurrentUser").getID(),
                logged_in_user_type: j.userType,
                client_timestamp_ms: Date.now(),
                thread_id: null,
                consumer_id: null,
                referrer: window.location.href,
                client_experiment_data: h(i)
            }
        })
    }
    function j(a, c, d) {
        if (a == null)
            return;
        var e = b("PageCommPlatform")[c]
          , f = g(e);
        b("BusinessInboxPlatformClickFalcoEvent").log(function() {
            return {
                event_location: "www_client",
                page_id: a,
                inbox_platform: f.inboxPlatform,
                event_data: {
                    source: "",
                    target: c
                },
                ig_account_id: null,
                business_presence_node_id: null,
                logged_in_user_id: b("CurrentUser").getID(),
                logged_in_user_type: f.userType,
                client_timestamp_ms: Date.now(),
                thread_id: null,
                consumer_id: null,
                referrer: window.location.href,
                client_experiment_data: h(d)
            }
        })
    }
    function k(a, c, d, e, f, i) {
        if (a == null || c == null || f == null)
            return;
        var j = g(c);
        if (j.userType === "unknown")
            return;
        b("BusinessInboxSuggestedLabelImpressionFalcoEvent").log(function() {
            return {
                event_location: "www_client",
                page_id: a,
                inbox_platform: j.inboxPlatform,
                event_data: {
                    label_color: d,
                    label_name: e,
                    suggested_label_type: f
                },
                ig_account_id: null,
                business_presence_node_id: null,
                logged_in_user_id: b("CurrentUser").getID(),
                logged_in_user_type: j.userType,
                client_timestamp_ms: Date.now(),
                consumer_id: null,
                referrer: window.location.href,
                client_experiment_data: h(i)
            }
        })
    }
    function l(a, c, d, e, f, i) {
        if (a == null || c == null || f == null)
            return;
        var j = g(c);
        if (j.userType === "unknown")
            return;
        b("BusinessInboxSuggestedLabelClickFalcoEvent").log(function() {
            return {
                event_location: "www_client",
                page_id: a,
                inbox_platform: j.inboxPlatform,
                event_data: {
                    label_color: d,
                    label_name: e,
                    suggested_label_type: f
                },
                ig_account_id: null,
                business_presence_node_id: null,
                logged_in_user_id: b("CurrentUser").getID(),
                logged_in_user_type: j.userType,
                client_timestamp_ms: Date.now(),
                consumer_id: null,
                referrer: window.location.href,
                client_experiment_data: h(i)
            }
        })
    }
    function m(a, c, d, e, f) {
        var i = g(c);
        if (i.userType === "unknown")
            return;
        b("BusinessInboxSavedReplySendResponseFalcoEvent").log(function() {
            return {
                event_location: "www_client",
                page_id: a,
                inbox_platform: i.inboxPlatform,
                event_data: {
                    saved_reply_id: d,
                    saved_reply_text: e
                },
                ig_account_id: null,
                business_presence_node_id: null,
                logged_in_user_id: b("CurrentUser").getID(),
                logged_in_user_type: i.userType,
                client_timestamp_ms: Date.now(),
                consumer_id: null,
                referrer: window.location.href,
                client_experiment_data: h(f)
            }
        })
    }
    function n(a, c, d) {
        b("BusinessInboxSearchFocusClickFalcoEvent").log(function() {
            return {
                event_location: "www_client",
                page_id: a,
                inbox_platform: "unknown",
                event_data: {
                    search_word: c
                },
                ig_account_id: null,
                business_presence_node_id: null,
                logged_in_user_id: b("CurrentUser").getID(),
                logged_in_user_type: "facebook",
                client_timestamp_ms: Date.now(),
                consumer_id: null,
                referrer: window.location.href,
                client_experiment_data: h(d)
            }
        })
    }
    function o(a, c) {
        b("BusinessInboxSearchCancelClickFalcoEvent").log(function() {
            return {
                event_location: "www_client",
                page_id: a,
                inbox_platform: "unknown",
                event_data: {},
                ig_account_id: null,
                business_presence_node_id: null,
                logged_in_user_id: b("CurrentUser").getID(),
                logged_in_user_type: "facebook",
                client_timestamp_ms: Date.now(),
                consumer_id: null,
                referrer: window.location.href,
                client_experiment_data: h(c)
            }
        })
    }
    function p(a, c) {
        if (a == null)
            return;
        b("BusinessInboxSearchResultRenderViewFalcoEvent").log(function() {
            return {
                event_location: "www_client",
                page_id: a,
                inbox_platform: "unknown",
                event_data: {},
                ig_account_id: null,
                business_presence_node_id: null,
                logged_in_user_id: b("CurrentUser").getID(),
                logged_in_user_type: "facebook",
                client_timestamp_ms: Date.now(),
                consumer_id: null,
                referrer: window.location.href,
                client_experiment_data: h(c)
            }
        })
    }
    function q(a, c, d, e) {
        if (a == null)
            return;
        var f = {
            event_location: "www_client",
            page_id: a,
            inbox_platform: "unknown",
            event_data: {
                search_word: c
            },
            ig_account_id: null,
            business_presence_node_id: null,
            logged_in_user_id: b("CurrentUser").getID(),
            logged_in_user_type: "facebook",
            client_timestamp_ms: Date.now(),
            consumer_id: null,
            referrer: window.location.href,
            client_experiment_data: h(e)
        };
        switch (d) {
        case "CONTENT":
            b("BusinessInboxContentSearchClickFalcoEvent").log(function() {
                return f
            });
            break;
        case "LABEL":
            b("BusinessInboxLabelSearchClickFalcoEvent").log(function() {
                return f
            });
            break;
        case "CUSTOMER":
            b("BusinessInboxPeopleSearchClickFalcoEvent").log(function() {
                return f
            });
            break;
        default:
            break
        }
    }
    function r(a, c, d, e) {
        if (a == null)
            return;
        var f = {
            event_location: "www_client",
            page_id: a,
            inbox_platform: "unknown",
            event_data: {
                search_word: c
            },
            ig_account_id: null,
            business_presence_node_id: null,
            logged_in_user_id: b("CurrentUser").getID(),
            logged_in_user_type: "facebook",
            client_timestamp_ms: Date.now(),
            consumer_id: null,
            referrer: window.location.href,
            client_experiment_data: h(e)
        };
        switch (d) {
        case "CONTENT":
            b("BusinessInboxContentSearchResultRenderViewFalcoEvent").log(function() {
                return f
            });
            break;
        default:
            break
        }
    }
    function s(a, c, d, e, f) {
        var i = g(c);
        if (i.userType === "unknown")
            return;
        b("BusinessInboxSwitchFolderClickFalcoEvent").log(function() {
            return {
                event_location: "www_client",
                page_id: a,
                inbox_platform: i.inboxPlatform,
                event_data: {
                    source_folder: d,
                    target_folder: e
                },
                ig_account_id: null,
                business_presence_node_id: null,
                logged_in_user_id: b("CurrentUser").getID(),
                logged_in_user_type: i.userType,
                client_timestamp_ms: Date.now(),
                consumer_id: null,
                referrer: window.location.href,
                client_experiment_data: h(f)
            }
        })
    }
    function t(a, c, d, e, f) {
        if (a == null || d == null)
            return;
        var i = g(c);
        if (i.userType === "unknown")
            return;
        var j = {
            event_location: "www_client",
            page_id: a,
            inbox_platform: i.inboxPlatform,
            event_data: {
                source_folder: d,
                target_folder: e
            },
            ig_account_id: null,
            business_presence_node_id: null,
            logged_in_user_id: b("CurrentUser").getID(),
            logged_in_user_type: i.userType,
            client_timestamp_ms: Date.now(),
            consumer_id: null,
            referrer: window.location.href,
            client_experiment_data: h(f)
        };
        c === "FACEBOOK" || c === "INSTAGRAM" ? b("BusinessInboxPostFolderUpdateFalcoEvent").log(function() {
            return j
        }) : (c === "MESSENGER" || c === "INSTAGRAM_DIRECT") && b("BusinessInboxThreadFolderUpdateFalcoEvent").log(function() {
            return j
        })
    }
    function u(a, c, d) {
        var e = 10 * 1e3;
        c > e && new (b("PagesMessagingPerfTypedLogger"))().setPageID(a).setEventName("threadlist_infinite_load").setPlatform(d).setPerfTime(c).log()
    }
    function v(a, c, d, e, f) {
        if (d == null)
            return;
        var j = i(d)
          , k = g(c);
        if (k.userType === "unknown")
            return;
        b("BusinessInboxThreadClickFalcoEvent").log(function() {
            return {
                event_location: "www_client",
                page_id: a,
                inbox_platform: k.inboxPlatform,
                event_data: {
                    thread_id: j,
                    comm_type: e
                },
                ig_account_id: null,
                business_presence_node_id: null,
                logged_in_user_id: b("CurrentUser").getID(),
                logged_in_user_type: k.userType,
                client_timestamp_ms: Date.now(),
                consumer_id: null,
                referrer: window.location.href,
                client_experiment_data: h(f)
            }
        })
    }
    function w(a, c, d) {
        if (a == null)
            return;
        var e = g(c);
        if (e.userType === "unknown")
            return;
        b("BusinessInboxMessageComposerFocusAcquiredFalcoEvent").log(function() {
            return {
                event_location: "www_client",
                page_id: a,
                inbox_platform: e.inboxPlatform,
                event_data: {},
                ig_account_id: null,
                business_presence_node_id: null,
                logged_in_user_id: b("CurrentUser").getID(),
                logged_in_user_type: e.userType,
                client_timestamp_ms: Date.now(),
                consumer_id: null,
                referrer: window.location.href,
                client_experiment_data: h(d)
            }
        })
    }
    function x(a, c, d, e, f) {
        if (a == null || d == null)
            return;
        var j = i(d)
          , k = g(c);
        if (k.userType === "unknown")
            return;
        b("BusinessInboxMessageComposerRenderViewFalcoEvent").log(function() {
            return {
                event_location: "www_client",
                page_id: a,
                inbox_platform: k.inboxPlatform,
                event_data: {
                    thread_id: j,
                    comm_type: e
                },
                ig_account_id: null,
                business_presence_node_id: null,
                logged_in_user_id: b("CurrentUser").getID(),
                logged_in_user_type: k.userType,
                client_timestamp_ms: Date.now(),
                consumer_id: null,
                referrer: window.location.href,
                client_experiment_data: h(f)
            }
        })
    }
    function y(a, c, d, e, f, j, k) {
        if (a == null && c == null || e == null)
            return;
        var l = i(e)
          , m = g(d);
        if (m.userType === "unknown")
            return;
        b("BusinessInboxMessageRenderViewFalcoEvent").log(function() {
            return {
                event_location: "www_client",
                page_id: a,
                inbox_platform: m.inboxPlatform,
                event_data: {
                    message_id: f,
                    message_type: j
                },
                ig_account_id: c,
                business_presence_node_id: null,
                logged_in_user_id: b("CurrentUser").getID(),
                logged_in_user_type: m.userType,
                client_timestamp_ms: Date.now(),
                thread_id: l,
                consumer_id: null,
                referrer: window.location.href,
                client_experiment_data: h(k)
            }
        })
    }
    function z(a, c, d, e, f, j, k) {
        if (a == null && c == null || e == null)
            return;
        var l = i(e)
          , m = g(d);
        if (m.userType === "unknown")
            return;
        b("BusinessInboxMessageClickFalcoEvent").log(function() {
            return {
                event_location: "www_client",
                page_id: a,
                inbox_platform: m.inboxPlatform,
                event_data: {
                    message_id: f,
                    message_type: j
                },
                ig_account_id: c,
                business_presence_node_id: null,
                logged_in_user_id: b("CurrentUser").getID(),
                logged_in_user_type: m.userType,
                client_timestamp_ms: Date.now(),
                thread_id: l,
                consumer_id: null,
                referrer: window.location.href,
                client_experiment_data: h(k)
            }
        })
    }
    function A(a, c, d, e) {
        var f = g(c);
        b("BusinessInboxInboxRootInitRenderFalcoEvent").log(function() {
            return {
                event_location: "www_client",
                page_id: a,
                inbox_platform: f.inboxPlatform,
                event_data: {
                    entry_point: d
                },
                ig_account_id: null,
                business_presence_node_id: null,
                logged_in_user_id: b("CurrentUser").getID(),
                logged_in_user_type: f.userType,
                client_timestamp_ms: Date.now(),
                thread_id: null,
                consumer_id: null,
                referrer: window.location.href,
                client_experiment_data: h(e)
            }
        })
    }
    function B(a, c, d) {
        if (a == null)
            return;
        b("BusinessInboxStatusToggleClickFalcoEvent").log(function() {
            return {
                event_location: "www_client",
                page_id: a,
                inbox_platform: "unknown",
                event_data: {
                    status: c
                },
                ig_account_id: null,
                business_presence_node_id: null,
                logged_in_user_id: b("CurrentUser").getID(),
                logged_in_user_type: null,
                client_timestamp_ms: Date.now(),
                thread_id: null,
                consumer_id: null,
                referrer: window.location.href,
                client_experiment_data: h(d)
            }
        })
    }
    function C(a, c, d, e, f, j, k) {
        if (a == null || j == null)
            return;
        var l = null;
        d != null && (l = i(d));
        d = g(c);
        var m = {
            event_location: "www_client",
            page_id: a,
            inbox_platform: d.inboxPlatform,
            event_data: {
                source_folder: e,
                target_folder: f,
                comm_type: j
            },
            ig_account_id: null,
            business_presence_node_id: null,
            logged_in_user_id: b("CurrentUser").getID(),
            logged_in_user_type: d.userType,
            client_timestamp_ms: Date.now(),
            thread_id: l,
            consumer_id: null,
            referrer: window.location.href,
            client_experiment_data: h(k)
        };
        switch (f) {
        case b("PageCommItemStatus").DONE:
        case String(b("BizInboxThreadActionType").MoveToDone):
            b("BusinessInboxThreadMoveToDoneHeaderButtonClickFalcoEvent").log(function() {
                return m
            });
            break;
        case b("PageCommItemStatus").TODO:
        case String(b("BizInboxThreadActionType").MoveToMain):
            b("BusinessInboxThreadMoveToMainHeaderButtonClickFalcoEvent").log(function() {
                return m
            });
            break;
        case b("PageCommItemActionType").FOLLOW_UP:
        case b("PageCommItemActionType").UN_FOLLOW_UP:
        case String(b("BizInboxThreadActionType").FollowUp):
        case String(b("BizInboxThreadActionType").UnfollowUp):
            b("BusinessInboxThreadFollowupHeaderButtonClickFalcoEvent").log(function() {
                return m
            });
            break;
        case b("PageCommItemStatus").SPAM:
        case String(b("BizInboxThreadActionType").MoveToSpam):
            b("BusinessInboxThreadMoveToSpamHeaderButtonClickFalcoEvent").log(function() {
                return m
            });
            break;
        case b("PageCommItemActionType").DELETE:
        case String(b("BizInboxThreadActionType").Delete):
            b("BusinessInboxThreadDeleteHeaderButtonClickFalcoEvent").log(function() {
                return m
            });
            break;
        case b("PageCommItemStatus").DELETED:
            b("BusinessInboxThreadDeleteHeaderButtonSubmitFlowFalcoEvent").log(function() {
                return m
            });
            break;
        case b("PageCommItemActionType").MARK_READ:
        case b("PageCommItemActionType").MARK_UNREAD:
        case b("PageCommItemFolder").UNREAD:
        case String(b("BizInboxThreadActionType").MarkRead):
        case String(b("BizInboxThreadActionType").MarkUnread):
            b("BusinessInboxThreadMarkReadUnreadHeaderButtonClickFalcoEvent").log(function() {
                return m
            });
            break;
        default:
            break
        }
    }
    function D(a, c, d, e, f, j, k) {
        if (a == null || j == null)
            return;
        var l = null;
        d != null && (l = i(d));
        d = g(c);
        var m = {
            event_location: "www_client",
            page_id: a,
            inbox_platform: d.inboxPlatform,
            event_data: {
                source_folder: e,
                target_folder: f,
                comm_type: j
            },
            ig_account_id: null,
            business_presence_node_id: null,
            logged_in_user_id: b("CurrentUser").getID(),
            logged_in_user_type: d.userType,
            client_timestamp_ms: Date.now(),
            thread_id: l,
            consumer_id: null,
            referrer: window.location.href,
            client_experiment_data: h(k)
        };
        switch (f) {
        case b("PageCommItemStatus").DONE:
        case String(b("BizInboxThreadActionType").MoveToDone):
            b("BusinessInboxThreadMoveToDoneThreadButtonClickFalcoEvent").log(function() {
                return m
            });
            break;
        case b("PageCommItemStatus").TODO:
        case String(b("BizInboxThreadActionType").MoveToMain):
            b("BusinessInboxThreadMoveToMainThreadButtonClickFalcoEvent").log(function() {
                return m
            });
            break;
        case b("PageCommItemActionType").FOLLOW_UP:
        case b("PageCommItemActionType").UN_FOLLOW_UP:
        case String(b("BizInboxThreadActionType").FollowUp):
        case String(b("BizInboxThreadActionType").UnfollowUp):
            b("BusinessInboxThreadMarkFollowupThreadButtonClickFalcoEvent").log(function() {
                return m
            });
            break;
        default:
            break
        }
    }
    function E(a, c, d, e, f, j, k) {
        if (a == null || j == null)
            return;
        var l = null;
        d != null && (l = i(d));
        var m = g(c);
        b("BusinessInboxThreadDeleteHeaderButtonCancelFlowFalcoEvent").log(function() {
            return {
                event_location: "www_client",
                page_id: a,
                inbox_platform: m.inboxPlatform,
                event_data: {
                    source_folder: e,
                    target_folder: f,
                    comm_type: j
                },
                ig_account_id: null,
                business_presence_node_id: null,
                logged_in_user_id: b("CurrentUser").getID(),
                logged_in_user_type: m.userType,
                client_timestamp_ms: Date.now(),
                thread_id: l,
                consumer_id: null,
                referrer: window.location.href,
                client_experiment_data: h(k)
            }
        })
    }
    function F(a, c, d, e, f, j, k) {
        if (a == null)
            return;
        var l = null;
        d != null && (l = i(d));
        var m = g(c);
        b("BusinessInboxMultiAdminAssignmentUpdateFalcoEvent").log(function() {
            return {
                event_location: "www_client",
                page_id: a,
                inbox_platform: m.inboxPlatform,
                event_data: {
                    action: e,
                    tag: f,
                    assigned_to: j
                },
                ig_account_id: null,
                business_presence_node_id: null,
                logged_in_user_id: b("CurrentUser").getID(),
                logged_in_user_type: m.userType,
                client_timestamp_ms: Date.now(),
                thread_id: l,
                consumer_id: null,
                referrer: window.location.href,
                client_experiment_data: h(k)
            }
        })
    }
    function G(a, c, d, e, f) {
        if (a == null || e == null || d == null)
            return;
        var j = i(d)
          , k = g(c);
        if (k.userType === "unknown")
            return;
        b("BusinessInboxHeaderViewRenderViewFalcoEvent").log(function() {
            return {
                event_location: "www_client",
                page_id: a,
                inbox_platform: k.inboxPlatform,
                event_data: {
                    comm_type: e
                },
                ig_account_id: null,
                business_presence_node_id: null,
                logged_in_user_id: b("CurrentUser").getID(),
                logged_in_user_type: k.userType,
                client_timestamp_ms: Date.now(),
                thread_id: j,
                consumer_id: null,
                referrer: window.location.href,
                client_experiment_data: h(f)
            }
        })
    }
    function H(a, c, d, e, f) {
        if (a == null)
            return;
        var i = g(c);
        b("BusinessInboxCommentReactionListImpressionFalcoEvent").log(function() {
            var c;
            return {
                event_location: "www_client",
                page_id: a,
                inbox_platform: i.inboxPlatform,
                event_data: {
                    comment_fbid: d,
                    entry_point: (c = e) != null ? c : "inbox"
                },
                ig_account_id: null,
                business_presence_node_id: null,
                logged_in_user_id: b("CurrentUser").getID(),
                logged_in_user_type: i.userType,
                client_timestamp_ms: Date.now(),
                consumer_id: null,
                referrer: window.location.href,
                client_experiment_data: h(f)
            }
        })
    }
    function I(a, c, d, e, f) {
        if (a == null)
            return;
        var i = g(c);
        b("BusinessInboxCommentReactionListClickFalcoEvent").log(function() {
            var c;
            return {
                event_location: "www_client",
                page_id: a,
                inbox_platform: i.inboxPlatform,
                event_data: {
                    comment_fbid: d,
                    entry_point: (c = e) != null ? c : "inbox"
                },
                ig_account_id: null,
                business_presence_node_id: null,
                logged_in_user_id: b("CurrentUser").getID(),
                logged_in_user_type: i.userType,
                client_timestamp_ms: Date.now(),
                consumer_id: null,
                referrer: window.location.href,
                client_experiment_data: h(f)
            }
        })
    }
    function J(a, c, d, e, f, j) {
        var k = i(e)
          , l = g(d);
        if (l.commType == null || l.userType === "unknown")
            return;
        b("BusinessInboxCommentSubmitFalcoEvent").log(function() {
            return {
                event_location: "www_client",
                page_id: a,
                inbox_platform: l.inboxPlatform,
                event_data: {
                    comm_type: b("nullthrows")(l.commType),
                    post_id: f
                },
                ig_account_id: c,
                business_presence_node_id: null,
                logged_in_user_id: b("CurrentUser").getID(),
                logged_in_user_type: l.userType,
                client_timestamp_ms: Date.now(),
                thread_id: k,
                consumer_id: null,
                referrer: window.location.href,
                client_experiment_data: h(j)
            }
        })
    }
    function K(a, c, d, e, f, j) {
        var k = i(e)
          , l = g(d);
        if (l.commType == null || l.userType === "unknown")
            return;
        b("BusinessInboxDeleteCommentClickFalcoEvent").log(function() {
            return {
                event_location: "www_client",
                page_id: a,
                inbox_platform: l.inboxPlatform,
                event_data: {
                    comment_id: f,
                    comm_type: b("nullthrows")(l.commType)
                },
                ig_account_id: c,
                business_presence_node_id: null,
                logged_in_user_id: b("CurrentUser").getID(),
                logged_in_user_type: l.userType,
                client_timestamp_ms: Date.now(),
                thread_id: k,
                consumer_id: null,
                referrer: window.location.href,
                client_experiment_data: h(j)
            }
        })
    }
    function L(a, c, d, e, f, j) {
        var k = i(e)
          , l = g(d);
        if (l.commType == null || l.userType === "unknown")
            return;
        b("BusinessInboxCommentReplyClickFalcoEvent").log(function() {
            return {
                event_location: "www_client",
                page_id: a,
                inbox_platform: l.inboxPlatform,
                event_data: {
                    comment_id: f,
                    comm_type: b("nullthrows")(l.commType)
                },
                ig_account_id: c,
                business_presence_node_id: null,
                logged_in_user_id: b("CurrentUser").getID(),
                logged_in_user_type: l.userType,
                client_timestamp_ms: Date.now(),
                thread_id: k,
                consumer_id: null,
                referrer: window.location.href,
                client_experiment_data: h(j)
            }
        })
    }
    function M(a, c, d, e) {
        if (a == null || d == null)
            return;
        var f = g(d);
        if (f.commType == null || f.userType === "unknown")
            return;
        b("BusinessInboxThreadListUpdateFalcoEvent").log(function() {
            return {
                event_location: "www_client",
                page_id: a,
                inbox_platform: f.inboxPlatform,
                event_data: {
                    platform: f.inboxPlatform
                },
                ig_account_id: c,
                business_presence_node_id: null,
                logged_in_user_id: b("CurrentUser").getID(),
                logged_in_user_type: f.userType,
                client_timestamp_ms: Date.now(),
                thread_id: null,
                consumer_id: null,
                referrer: window.location.href,
                client_experiment_data: h(e)
            }
        })
    }
    function N(a, c, d, e, f, i) {
        if (d == null)
            return;
        var j = g(e);
        b("BusinessInboxJsErrorDebugFalcoEvent").log(function() {
            return {
                event_location: "www_client",
                page_id: d,
                inbox_platform: j.inboxPlatform,
                event_data: {
                    error_message: a.message,
                    error_stack: a.stack
                },
                ig_account_id: c,
                business_presence_node_id: null,
                logged_in_user_id: b("CurrentUser").getID(),
                logged_in_user_type: j.userType,
                client_timestamp_ms: Date.now(),
                thread_id: f,
                consumer_id: null,
                referrer: window.location.href,
                client_experiment_data: h(i)
            }
        })
    }
}
), null);
__d("PagesManagerInboxInstagramCommentDeleteMutation", ["PagesManagerInboxIGCommentAction", "RelayFBEnvironment", "RelayModern", "RelayRuntime", "PagesManagerInboxInstagramCommentDeleteMutation.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    f.commit = a;
    var g, h = b("RelayRuntime").ConnectionHandler, i = g !== void 0 ? g : g = b("PagesManagerInboxInstagramCommentDeleteMutation.graphql");
    function a(a, c) {
        var d = function(c, d) {
            c = c.get(a.instagram_media_id);
            if (!c)
                return;
            var e = h.getConnection(c, "PagesManagerInboxInstagramPostCommentsContainer_instagram_comments");
            c = h.getConnection(c, "PagesManagerInboxInstagramCommentsContainer_ig_comments");
            e && h.deleteNode(e, a.instagram_comment_id);
            c && h.deleteNode(c, a.instagram_comment_id);
            c = d == null ? void 0 : (e = d.instagram_comment_delete) == null ? void 0 : e.parent_instagram_comment_id;
            c != null && b("PagesManagerInboxIGCommentAction").deleteReply(c)
        };
        return b("RelayModern").commitMutation(b("RelayFBEnvironment"), {
            mutation: i,
            optimisticUpdater: d,
            updater: d,
            variables: {
                input: {
                    actor_id: a.actor_id,
                    instagram_comment_id: a.instagram_comment_id
                }
            },
            onCompleted: c && c.onSuccess,
            onError: c && c.onFailure
        })
    }
}
), null);
__d("PagesManagerInboxInstagramUserPhotoContainer.react", ["cx", "Image.react", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = "_2q1j" + (this.props.shape === "circle" ? " _kpb" : "");
            return h.jsx(b("Image.react"), {
                className: a,
                height: this.props.imageSize,
                src: this.props.imageURI,
                width: this.props.imageSize
            })
        }
        ;
        return c
    }(h.PureComponent);
    e.exports = a;
    a.defaultProps = {
        shape: "square"
    }
}
), null);
__d("PagesManagerInboxInstagramCommentRow.react", ["cx", "fbt", "BIZInboxClientLogger", "BusinessContentManagerGating", "ContextualDialogArrow", "JSResource", "Layout.react", "LayoutColumn.react", "LayoutFillColumn.react", "Link.react", "PagesManagerInboxInstagramCommentDeleteMutation", "PagesManagerInboxInstagramPostComposerActions", "PagesManagerInboxInstagramUserPhotoContainer.react", "PopoverMenu.react", "React", "ReactXUIMenu", "TextWithEntities.react", "Timestamp.react", "XUICard.react", "XUIDotsButton.react", "XUIText.react", "lazyLoadComponent", "nullthrows"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React")
      , j = b("ReactXUIMenu").Item
      , k = b("lazyLoadComponent")(b("JSResource")("PagesManagerInboxInstagramCommentLikeCount.react").__setRef("PagesManagerInboxInstagramCommentRow.react"))
      , l = b("lazyLoadComponent")(b("JSResource")("PagesManagerInboxInstagramCommentLikeIcon.react").__setRef("PagesManagerInboxInstagramCommentRow.react"));
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$2 = function() {
                if (d.props.commentID === null || d.props.commentID === void 0)
                    return;
                b("PagesManagerInboxInstagramCommentDeleteMutation").commit({
                    actor_id: d.props.pageID,
                    instagram_comment_id: d.props.commentID,
                    instagram_media_id: d.props.igMediaID
                });
                b("BIZInboxClientLogger").logDeleteCommentClick(d.props.pageID, d.props.igAccountID, "INSTAGRAM", d.props.igMediaID, b("nullthrows")(d.props.commentID))
            }
            ,
            d.$4 = function() {
                if (d.props.igUsername === null || d.props.igUsername === void 0 || d.props.commentID === null)
                    return;
                b("PagesManagerInboxInstagramPostComposerActions").linkReply({
                    username: d.props.igUsername,
                    parent_comment_id: d.props.commentID
                });
                b("BIZInboxClientLogger").logCommentReplyClick(d.props.pageID, d.props.igAccountID, "INSTAGRAM", d.props.igMediaID, b("nullthrows")(d.props.commentID))
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.$1 = function() {
            var a = i.jsx(b("ReactXUIMenu"), {
                children: i.jsx(j, {
                    onClick: this.$2,
                    children: h._("X\u00f3a")
                })
            });
            return i.jsx(b("PopoverMenu.react"), {
                alignv: "middle",
                layerBehaviors: [b("ContextualDialogArrow")],
                menu: a,
                children: i.jsx(b("XUIDotsButton.react"), {
                    className: "_88me",
                    size: "medium",
                    tooltip: h._("T\u00f9y ch\u1ecdn")
                })
            })
        }
        ;
        d.$3 = function() {
            return i.jsxs("div", {
                className: "_88mf",
                children: [i.jsx("div", {
                    className: "_88mg",
                    children: i.jsx(b("Timestamp.react"), {
                        minimize: !0,
                        time: Number(this.props.creationTime),
                        useLargerTimeUnits: !0
                    })
                }), i.jsx(i.Suspense, {
                    fallback: null,
                    children: i.jsx(k, {
                        commentID: this.props.commentID,
                        entryPoint: this.props.entryPoint,
                        likeCount: this.props.likeCount,
                        pageID: this.props.pageID
                    })
                }), i.jsx(b("Link.react"), {
                    className: "_88mm",
                    onClick: this.$4,
                    children: h._("Tr\u1ea3 l\u1eddi")
                })]
            })
        }
        ;
        d.render = function() {
            return i.jsx(b("XUICard.react"), {
                className: "_88mn",
                "data-testid": void 0,
                children: i.jsxs(b("Layout.react"), {
                    className: "_88mo",
                    children: [i.jsx(b("LayoutColumn.react"), {
                        children: i.jsx("div", {
                            className: "_8b8t",
                            children: i.jsx(b("PagesManagerInboxInstagramUserPhotoContainer.react"), {
                                imageSize: this.props.profilePhotoSize,
                                imageURI: this.props.profilePictureURI,
                                shape: "circle"
                            })
                        })
                    }), i.jsxs(b("LayoutColumn.react"), {
                        className: "_8ax9",
                        children: [i.jsxs(b("XUIText.react"), {
                            className: "_8b8s",
                            children: [i.jsx("span", {
                                className: "_88mq",
                                children: this.props.igUsername
                            }), i.jsx(b("TextWithEntities.react"), {
                                renderEmoji: !0,
                                text: this.props.message
                            })]
                        }), this.$3()]
                    }), i.jsx(b("LayoutFillColumn.react"), {
                        children: this.$1()
                    }), b("BusinessContentManagerGating").SHOULD_SHOW_IG_LIKE_ACTION && this.props.commentID != null && i.jsx(i.Suspense, {
                        fallback: null,
                        children: i.jsx(l, {
                            commentID: this.props.commentID,
                            entryPoint: this.props.entryPoint,
                            hasViewerLikedComment: this.props.hasViewerLikedComment,
                            pageID: this.props.pageID
                        })
                    })]
                })
            })
        }
        ;
        return c
    }(i.PureComponent);
    e.exports = a
}
), null);
__d("PagesManagerInboxInstagramRepliesContainer.react", ["cx", "fbt", "PagesManagerInboxIGCommentStore", "PagesManagerInboxInstagramCommentRow.react", "React", "RelayModern", "XUIButton.react", "XUICard.react", "PagesManagerInboxInstagramRepliesContainer_item.graphql", "PagesManagerInboxInstagramRepliesContainerPaginationQuery.graphql"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i, j, k = b("React"), l = 3;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.state = {
                numRepliesShowing: c.props.numRepliesShowingInitially
            },
            c.$1 = function() {
                var a;
                a = (a = (a = c.props.item) == null ? void 0 : (a = a.instagram_replies) == null ? void 0 : (a = a.edges) == null ? void 0 : a.length) != null ? a : 0;
                c.state.numRepliesShowing < a ? c.setState({
                    numRepliesShowing: a
                }) : c.$2()
            }
            ,
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            var a = b("PagesManagerInboxIGCommentStore").getReplyInfo(this.props.parentCommentID);
            if (a == null) {
                a = ((a = this.props.item) == null ? void 0 : (a = a.instagram_replies) == null ? void 0 : a.edges) || [];
                b("PagesManagerInboxIGCommentStore").setReplyInfo(this.props.parentCommentID, {
                    numRepliesLoaded: a.length,
                    numRepliesShowing: 0
                })
            }
        }
        ;
        d.componentDidUpdate = function() {
            var a;
            a = (a = (a = this.props.item) == null ? void 0 : (a = a.instagram_replies) == null ? void 0 : (a = a.edges) == null ? void 0 : a.length) != null ? a : 0;
            var c = b("PagesManagerInboxIGCommentStore").getReplyInfo(this.props.parentCommentID);
            c != null && b("PagesManagerInboxIGCommentStore").setReplyInfo(this.props.parentCommentID, {
                numRepliesLoaded: a,
                numRepliesShowing: this.state.numRepliesShowing
            })
        }
        ;
        d.$2 = function() {
            this.$3() ? this.$4() : this.$5()
        }
        ;
        d.$3 = function() {
            return this.props.relay.hasMore()
        }
        ;
        d.$4 = function() {
            var a = this;
            this.props.relay.loadMore(l, function() {
                var b;
                b = (b = (b = a.props.item) == null ? void 0 : (b = b.instagram_replies) == null ? void 0 : (b = b.edges) == null ? void 0 : b.length) != null ? b : 0;
                a.setState({
                    numRepliesShowing: b
                })
            })
        }
        ;
        d.$5 = function() {
            this.setState({
                numRepliesShowing: 0
            })
        }
        ;
        d.render = function() {
            var a, c, d = this;
            a = ((a = this.props.item) == null ? void 0 : a.reply_count) || 0;
            c = ((c = this.props.item) == null ? void 0 : (c = c.instagram_replies) == null ? void 0 : c.edges) || [];
            if (a === 0)
                return null;
            c = this.state.numRepliesShowing > 0 ? c.slice(-this.state.numRepliesShowing).map(function(a) {
                var c;
                return k.jsx(b("PagesManagerInboxInstagramCommentRow.react"), {
                    commentID: (c = a.node) == null ? void 0 : c.id,
                    creationTime: (c = a.node) == null ? void 0 : c.creation_time,
                    entryPoint: d.props.entryPoint,
                    hasViewerLikedComment: (c = (c = a.node) == null ? void 0 : c.has_biz_liked_comment) != null ? c : !1,
                    igAccountID: (c = a.node) == null ? void 0 : (c = c.instagram_actor) == null ? void 0 : c.id,
                    igMediaID: d.props.igMediaID,
                    igUsername: (c = a.node) == null ? void 0 : (c = c.instagram_actor) == null ? void 0 : c.username,
                    likeCount: (c = a.node) == null ? void 0 : c.like_count,
                    message: (c = a.node) == null ? void 0 : c.text,
                    pageID: d.props.pageID,
                    profilePhotoSize: d.props.profilePhotoSize,
                    profilePictureURI: (c = a.node) == null ? void 0 : (c = c.instagram_actor) == null ? void 0 : (c = c.profile_picture_24) == null ? void 0 : c.uri
                }, (c = a.node) == null ? void 0 : c.id)
            }) : null;
            if (this.state.numRepliesShowing < a) {
                a = a - this.state.numRepliesShowing;
                a = h._("Xem ph\u1ea3n h\u1ed3i ({reply count})", [h._param("reply count", a)])
            } else
                a = h._("\u1ea8n ph\u1ea3n h\u1ed3i");
            return k.jsx(b("XUICard.react"), {
                className: "_8e5p",
                children: k.jsxs("div", {
                    className: "_8e3n",
                    children: [k.jsx(b("XUIButton.react"), {
                        className: "_8e3o",
                        image: k.jsx("div", {
                            className: "_8e3p"
                        }),
                        label: a,
                        onClick: this.$1,
                        use: "default"
                    }), c]
                })
            })
        }
        ;
        return c
    }(k.PureComponent);
    c = b("RelayModern").createPaginationContainer(a, {
        item: i !== void 0 ? i : i = b("PagesManagerInboxInstagramRepliesContainer_item.graphql")
    }, {
        direction: "backward",
        getConnectionFromProps: function(a) {
            return a == null ? void 0 : (a = a.item) == null ? void 0 : a.instagram_replies
        },
        getFragmentVariables: function(a, b) {
            return babelHelpers["extends"]({}, a, {
                count: b
            })
        },
        getVariables: function(a, b) {
            var c = b.count;
            b = b.cursor;
            return {
                count: c,
                cursor: b,
                instagramCommentID: a.item.id
            }
        },
        query: j !== void 0 ? j : j = b("PagesManagerInboxInstagramRepliesContainerPaginationQuery.graphql")
    });
    e.exports = c
}
), null);
__d("PagesManagerInboxLogger", ["PagesManagerInboxTypedLogger", "PagesMessagingInboxActionsTypedLogger", "PagesMessagingPerfTypedLogger", "keyMirror"], (function(a, b, c, d, e, f) {
    "use strict";
    f.init = a;
    f.logInitialListRendered = c;
    f.create = l;
    f.logErrorJS = d;
    f.logErrorGraphQL = e;
    f.startLoadingItem = m;
    f.itemInitialDataLoaded = n;
    f.startLoadingItemDetails = o;
    f.itemDetailsLoaded = p;
    f.startLoadingThread = q;
    f.threadDetailsLoaded = r;
    f.itemRendered = s;
    f.logBroadcastMessageFormat = t;
    f.itemStatusChanged = u;
    f.itemStatusChangedInThread = v;
    f.itemStatusChangedInHeader = w;
    f.logFolderChangeClick = x;
    f.logPlatformChangedClicked = y;
    f.logSendComment = z;
    f.logMarkAsUnread = A;
    f.logCommentReaction = B;
    f.logSendMessage = C;
    f.logReceiveMessage = D;
    f.logSearchClick = E;
    f.logContentSearchClicked = F;
    f.logBroadcastButtonRendered = G;
    f.logBroadcastButtonClicked = H;
    f.logBroadcastSendButtonClicked = I;
    f.logBroadcastConfirmationButtonClicked = J;
    f.logBroadcastHistoryRowClicked = K;
    f.logAutomatedResponsesRendered = L;
    f.logAutomatedResponsesEnabled = M;
    f.logAutomatedResponsesDisabled = N;
    f.logAutomatedResponsesSaveClicked = O;
    var g = b("keyMirror")({
        ERROR_GRAPH_QL: null,
        ERROR_JS: null,
        INITIAL_DATA_LOADED: null,
        INITIAL_LIST_RENDERED: null,
        INITIAL_LOAD: null,
        ITEM_DETAILS_LOADED: null,
        ITEM_LOADED: null,
        START_LOADING_ITEM_DETAILS: null,
        START_LOADING_ITEM: null,
        BROADCAST_MESSAGE_FORMAT: null,
        ITEM_STATUS_CHANGED: null,
        ITEM_STATUS_CHANGED_THREAD: null,
        ITEM_STATUS_CHANGED_HEADER: null,
        FOLDER_CHANGE_CLICKED: null,
        PLATFORM_CHANGE_TAB_CLICKED: null,
        SEND_COMMENT: null,
        SEND_MESSAGE: null,
        SEARCH_CLICKED: null,
        CONTENT_SEARCH_CLICKED: null,
        CREATE_BROADCAST_BUTTON_RENDERED: null,
        CREATE_BROADCAST_BUTTON_CLICKED: null,
        SEND_BROADCAST_BUTTON_CLICKED: null,
        SEND_BROADCAST_CONFIRM_BUTTON_CLICKED: null,
        BROADCAST_HISTORY_ROW_CLICK: null,
        AUTOMATED_RESPONSES_ENTRYPOINT_RENDERED: null,
        AUTOMATION_ENABLED: null,
        AUTOMATION_DISABLED: null,
        AUTOMATED_RESPONSES_SAVE_CLICK: null
    }), h, i, j = !0, k;
    function a(a) {
        h = a,
        i = Date.now(),
        l(g.INITIAL_LOAD).setScreenHeight(screen.height).setScreenWidth(screen.width).log()
    }
    function c(a, b) {
        if (!j)
            return;
        j = !1;
        l(g.INITIAL_LIST_RENDERED).setTimeSinceLoad(Date.now() - i).setPlatform(a).log()
    }
    function l(a) {
        return new (b("PagesManagerInboxTypedLogger"))().setEventName(a).setPageID(h).setHref(window.location.href)
    }
    function d(a, b) {
        l(g.ERROR_JS).setMessage(a.message).setStackTrace(a.stack).setModuleName(b).log()
    }
    function e(a) {
        l(g.ERROR_GRAPH_QL).setMessage(a.message).setStackTrace(a.stack).log()
    }
    function m(a, b) {
        if (k && k.commItemID === a)
            return;
        k = {
            commItemID: a,
            isCached: !0,
            startTimestamp: Date.now()
        };
        l(g.START_LOADING_ITEM).setPageCommItemID(a).setFolder(b).log()
    }
    function n(a) {
        if (!k || k.commItemID !== a)
            return;
        l(g.INITIAL_DATA_LOADED).setPageCommItemID(a).setLoadTime(Date.now() - k.startTimestamp).log()
    }
    function o(a, b) {
        if (!k || k.commItemID !== a)
            return;
        k.platform = b;
        k.isCached = !1;
        l(g.START_LOADING_ITEM_DETAILS).setPageCommItemID(a).setPlatform(b).setLoadTime(Date.now() - k.startTimestamp).log()
    }
    function p(a, b) {
        if (!k || k.commItemID !== a)
            return;
        l(g.ITEM_DETAILS_LOADED).setPageCommItemID(a).setPlatform(b).setLoadTime(Date.now() - k.startTimestamp).log()
    }
    function q(a, c) {
        if (k && k.commItemID === a)
            return;
        k = {
            commItemID: a,
            isCached: !0,
            startTimestamp: Date.now()
        };
        l(g.START_LOADING_ITEM).setThreadToken(a).setPlatform(c).log();
        new (b("PagesMessagingPerfTypedLogger"))().setPageID(h).setThreadID(a).setPlatform(c).setEventName("messages_messagelist_load_start").log()
    }
    function r(a, c) {
        if (!k || k.commItemID !== a)
            return;
        var d = Date.now() - k.startTimestamp;
        l(g.ITEM_DETAILS_LOADED).setThreadToken(a).setPlatform(c).setLoadTime(d).log();
        new (b("PagesMessagingPerfTypedLogger"))().setPageID(h).setThreadID(a).setPlatform(c).setEventName("messages_messagelist_load_end").setPerfTime(d).log();
        k = null
    }
    function s(a) {
        if (!k || k.commItemID !== a)
            return;
        l(g.ITEM_LOADED).setIsCached(k.isCached).setPageCommItemID(a).setLoadTime(Date.now() - k.startTimestamp).setPlatform(k.platform).log();
        k = null
    }
    function t(a) {
        l(g.BROADCAST_MESSAGE_FORMAT).setBroadcastMessageFormat(a).log()
    }
    function u(a, b, c, d) {
        d = d || null;
        l(g.ITEM_STATUS_CHANGED).setPageCommItemID(a).setPageCommItemStatus(c).setPlatform(b).setPageCommSearchType(d).log()
    }
    function v(a, b, c, d, e) {
        e = e || null;
        l(g.ITEM_STATUS_CHANGED_THREAD).setFolder(d).setPageCommItemID(a).setPageCommItemStatus(c).setPlatform(b).setPageCommSearchType(e).log()
    }
    function w(a, b, c, d) {
        l(g.ITEM_STATUS_CHANGED_HEADER).setFolder(d).setPageCommItemID(a).setPageCommItemStatus(c).setPlatform(b).log()
    }
    function x(a, b) {
        l(g.FOLDER_CHANGE_CLICKED).setFolder(b).setPlatform(a).log()
    }
    function y(a, b) {
        l(g.PLATFORM_CHANGE_TAB_CLICKED).setPlatform(a).setViewMode(b).log()
    }
    function z(a, c, d, e) {
        d === void 0 && (d = null),
        e === void 0 && (e = null),
        new (b("PagesMessagingInboxActionsTypedLogger"))().setInboxAction("send_comment").setPlatform(a).addToExtraData("page_id", c).addToExtraData("comment_fbid", d).addToExtraData("post_fbid", e).log(),
        l(g.SEND_COMMENT).setPlatform(a).log()
    }
    function A(a, c) {
        new (b("PagesMessagingInboxActionsTypedLogger"))().setPlatform(a).setInboxAction("mark_as_unread").addToExtraData("page_id", c).log()
    }
    function B(a, c, d, e, f) {
        new (b("PagesMessagingInboxActionsTypedLogger"))().setInboxAction("reaction").setPlatform(a).addToExtraData("page_id", c).addToExtraData("comment_fbid", d).addToExtraData("post_fbid", e).addToExtraData("reaction_type", f).log()
    }
    function C(a, c, d, e) {
        new (b("PagesMessagingInboxActionsTypedLogger"))().setInboxAction("send_message").setPlatform(a).addToExtraData("page_id", c).addToExtraData("enter_to_send_enabled", d.toString()).log(),
        l(g.SEND_MESSAGE).setPlatform(a).setFolder(e).log()
    }
    function D(a, c) {
        new (b("PagesMessagingInboxActionsTypedLogger"))().setInboxAction("receive_message").setPlatform(a).addToExtraData("page_id", c).log()
    }
    function E(a, b) {
        l(g.SEARCH_CLICKED).setPageCommSearch(a).setPlatform(b).log()
    }
    function F(a, b) {
        l(g.CONTENT_SEARCH_CLICKED).setPageCommSearchType(a).setPageCommSearch(b).log()
    }
    function G() {
        l(g.CREATE_BROADCAST_BUTTON_RENDERED).log()
    }
    function H() {
        l(g.CREATE_BROADCAST_BUTTON_CLICKED).log()
    }
    function I(a) {
        l(g.SEND_BROADCAST_BUTTON_CLICKED).setBroadcastAudience(a).log()
    }
    function J() {
        l(g.SEND_BROADCAST_CONFIRM_BUTTON_CLICKED).log()
    }
    function K() {
        l(g.BROADCAST_HISTORY_ROW_CLICK).log()
    }
    function L() {
        l(g.AUTOMATED_RESPONSES_ENTRYPOINT_RENDERED).log()
    }
    function M(a) {
        l(g.AUTOMATION_ENABLED).setAutomatedResponseTriggerType(a).log()
    }
    function N(a) {
        l(g.AUTOMATION_DISABLED).setAutomatedResponseTriggerType(a).log()
    }
    function O(a, b) {
        l(g.AUTOMATED_RESPONSES_SAVE_CLICK).setAutomatedResponseTriggerType(a).setHadError(b).log()
    }
}
), null);
__d("PagesManagerInboxQueryRenderer.react", ["invariant", "ErrorBoundary.react", "PagesManagerInboxLogger", "React", "RelayFBEnvironment", "RelayFBLiveEnvironment", "RelayModern"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this;
            return h.jsx(b("ErrorBoundary.react"), {
                onError: this.$1,
                children: h.jsx(b("RelayModern").QueryRenderer, babelHelpers["extends"]({
                    cacheConfig: {
                        force: !1
                    },
                    environment: this.props.isLiveQuery === !0 ? b("RelayFBLiveEnvironment") : b("RelayFBEnvironment")
                }, this.props, {
                    render: function(b) {
                        return a.$2(b)
                    }
                }))
            })
        }
        ;
        d.$1 = function(a, c) {
            b("PagesManagerInboxLogger").logErrorJS(a, c)
        }
        ;
        d.$2 = function(a) {
            a.error && b("PagesManagerInboxLogger").logErrorGraphQL(a.error);
            var c = this.props.render;
            c || g(0, 2743);
            return c(a)
        }
        ;
        return c
    }(h.PureComponent);
    e.exports = a
}
), null);
__d("PagesManagerInboxInstagramRepliesFluxContainer.react", ["FluxContainer", "PagesManagerInboxIGCommentStore", "PagesManagerInboxInstagramRepliesContainer.react", "PagesManagerInboxQueryRenderer.react", "React", "RelayModern", "PagesManagerInboxInstagramRepliesFluxContainerQuery.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React"), i = 3, j = g !== void 0 ? g : g = b("PagesManagerInboxInstagramRepliesFluxContainerQuery.graphql");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        c.getStores = function() {
            return [b("PagesManagerInboxIGCommentStore")]
        }
        ;
        c.calculateState = function(a, c) {
            var d = b("PagesManagerInboxIGCommentStore").getUpdatedCommentID()
              , e = b("PagesManagerInboxIGCommentStore").getReplyInfo(c.parentCommentID)
              , f = {
                numRepliesToLoad: Math.min(c.replyCount, i),
                numRepliesToShow: 0
            };
            if (e == null || c.parentCommentID !== d) {
                return (c = a) != null ? c : f
            }
            return {
                numRepliesToLoad: e.numRepliesLoaded,
                numRepliesToShow: e.numRepliesShowing
            }
        }
        ;
        var d = c.prototype;
        d.render = function() {
            var a = this;
            return h.jsx(b("PagesManagerInboxQueryRenderer.react"), {
                query: j,
                render: function(c) {
                    c.error;
                    c = c.props;
                    return c ? h.jsx(b("PagesManagerInboxInstagramRepliesContainer.react"), {
                        entryPoint: a.props.entryPoint,
                        igMediaID: a.props.igMediaID,
                        item: c.item,
                        numRepliesShowingInitially: a.state.numRepliesToShow,
                        pageID: a.props.pageID,
                        parentCommentID: a.props.parentCommentID,
                        profilePhotoSize: a.props.profilePhotoSize
                    }) : null
                },
                variables: {
                    count: this.state.numRepliesToLoad,
                    instagramCommentID: this.props.parentCommentID
                }
            })
        }
        ;
        return c
    }(h.PureComponent);
    c = b("FluxContainer").create(a, {
        withProps: !0
    });
    e.exports = c
}
), null);
__d("PagesManagerInboxInstagramCommentRowContainer.react", ["PagesManagerInboxInstagramCommentRow.react", "PagesManagerInboxInstagramRepliesFluxContainer.react", "React", "RelayModern", "PagesManagerInboxInstagramCommentRowContainer_item.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React"), i = 24;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a, c = this.props.item.id || "", d = this.props.item.reply_count || 0;
            return h.jsxs("div", {
                children: [h.jsx(b("PagesManagerInboxInstagramCommentRow.react"), {
                    commentID: this.props.item.id,
                    creationTime: this.props.item.creation_time,
                    entryPoint: this.props.entryPoint,
                    hasViewerLikedComment: (a = this.props.item.has_biz_liked_comment) != null ? a : !1,
                    igAccountID: (a = this.props.item.instagram_actor) == null ? void 0 : a.id,
                    igMediaID: this.props.igMediaID,
                    igUsername: (a = this.props.item.instagram_actor) == null ? void 0 : a.username,
                    likeCount: this.props.item.like_count,
                    message: this.props.item.text,
                    pageID: this.props.pageID,
                    profilePhotoSize: i,
                    profilePictureURI: (a = this.props.item.instagram_actor) == null ? void 0 : (a = a.profile_picture_24) == null ? void 0 : a.uri
                }), h.jsx(b("PagesManagerInboxInstagramRepliesFluxContainer.react"), {
                    entryPoint: this.props.entryPoint,
                    igMediaID: this.props.igMediaID,
                    pageID: this.props.pageID,
                    parentCommentID: c,
                    profilePhotoSize: i,
                    replyCount: d
                })]
            })
        }
        ;
        return c
    }(h.PureComponent);
    c = b("RelayModern").createFragmentContainer(a, {
        item: g !== void 0 ? g : g = b("PagesManagerInboxInstagramCommentRowContainer_item.graphql")
    });
    e.exports = c
}
), null);
__d("PagesManagerInboxInstagramCommentsContainer.react", ["cx", "fbt", "List.react", "PagesManagerInboxInstagramCommentRowContainer.react", "PagesManagerInboxLogger", "React", "RelayModern", "XUIButton.react", "PagesManagerInboxInstagramCommentsContainer_igPost.graphql", "PagesManagerInboxInstagramCommentsContainerPaginationQuery.graphql"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i, j, k = b("React"), l = 10;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.$1 = function() {
                c.props.relay.loadMore(l)
            }
            ,
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            var a = this.props.commItemID || "";
            b("PagesManagerInboxLogger").itemRendered(a);
            this.props.onInitialLoad && this.props.onInitialLoad()
        }
        ;
        d.$2 = function() {
            return this.props.relay.hasMore()
        }
        ;
        d.$3 = function() {
            return !this.$2() ? null : k.jsx("div", {
                className: "_8b4-",
                children: k.jsx(b("XUIButton.react"), {
                    className: "_8ax7",
                    image: k.jsx("div", {
                        className: "_8ax8"
                    }),
                    label: h._("Xem th\u00eam b\u00ecnh lu\u1eadn"),
                    onClick: this.$1,
                    use: "default"
                })
            })
        }
        ;
        d.render = function() {
            var a, c = this;
            a = ((a = this.props.igPost.ig_comments) == null ? void 0 : a.edges) || [];
            var d = this.props.igPost.id || "";
            return k.jsxs("div", {
                "data-testid": void 0,
                children: [this.$3(), k.jsx(b("List.react"), {
                    children: a.map(function(a) {
                        return a.node !== null && a.node !== void 0 && a.node.id !== null && a.node.id !== void 0 ? k.jsx(b("PagesManagerInboxInstagramCommentRowContainer.react"), {
                            entryPoint: c.props.entryPoint,
                            igMediaID: d,
                            item: a.node,
                            pageID: c.props.pageID
                        }, a.node.id) : null
                    })
                })]
            })
        }
        ;
        return c
    }(k.PureComponent);
    c = b("RelayModern").createPaginationContainer(a, {
        igPost: i !== void 0 ? i : i = b("PagesManagerInboxInstagramCommentsContainer_igPost.graphql")
    }, {
        direction: "backward",
        getConnectionFromProps: function(a) {
            return a == null ? void 0 : (a = a.igPost) == null ? void 0 : a.ig_comments
        },
        getFragmentVariables: function(a, b) {
            return babelHelpers["extends"]({}, a, {
                count: b
            })
        },
        getVariables: function(a, b) {
            var c = b.count;
            b = b.cursor;
            return {
                cursor: b,
                count: c,
                instagramMediaID: a.igPost.id
            }
        },
        query: j !== void 0 ? j : j = b("PagesManagerInboxInstagramCommentsContainerPaginationQuery.graphql")
    });
    e.exports = c
}
), null);
__d("PagesManagerInboxInstagramCommentCreateMutation", ["ClientIDs", "RelayFBEnvironment", "RelayModern", "RelayRuntime", "PagesManagerInboxInstagramCommentCreateMutation.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    f.commit = a;
    var g, h = b("RelayRuntime").ConnectionHandler, i = g !== void 0 ? g : g = b("PagesManagerInboxInstagramCommentCreateMutation.graphql");
    function a(a, c) {
        var d = function(b) {
            var c = b.get(a.instagram_media.id);
            if (!c)
                return;
            var d = h.getConnection(c, "PagesManagerInboxInstagramPostCommentsContainer_instagram_comments");
            c = h.getConnection(c, "PagesManagerInboxInstagramCommentsContainer_ig_comments");
            b = b.getRootField("instagram_comment_create");
            if (!b)
                return;
            b = b.getLinkedRecord("instagram_media_comment_edge");
            d && b && h.insertEdgeAfter(d, b);
            c && b && h.insertEdgeAfter(c, b)
        }
          , e = function() {
            var c = a.instagram_media.instagram_actor;
            return {
                instagram_comment_create: {
                    instagram_media_comment_edge: {
                        node: {
                            id: b("ClientIDs").getNewClientID(),
                            creation_time: Math.round(Date.now() / 1e3),
                            text: a.text,
                            instagram_actor: {
                                id: c.id,
                                username: c.username,
                                profile_picture: {
                                    uri: c.profile_picture_24.uri
                                }
                            }
                        }
                    }
                }
            }
        };
        return b("RelayModern").commitMutation(b("RelayFBEnvironment"), {
            mutation: i,
            optimisticResponse: e,
            optimisticUpdater: d,
            updater: d,
            variables: {
                input: {
                    actor_id: a.actor_id,
                    instagram_media_id: a.instagram_media.id,
                    text: a.text
                }
            },
            onCompleted: c && c.onSuccess,
            onError: c && c.onFailure
        })
    }
}
), null);
__d("PagesManagerInboxInstagramPostComposer.react", ["cx", "fbt", "BIZInboxClientLogger", "CenteredContainer.react", "Layout.react", "PagesManagerInboxInstagramUserPhotoContainer.react", "React", "ShimButton.react", "XUITextInput.react", "setImmediate"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React")
      , j = b("Layout.react").Column
      , k = b("Layout.react").FillColumn
      , l = 32;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$2 = function() {
                b("BIZInboxClientLogger").logMessageComposerFocus(d.props.pageID, "INSTAGRAM")
            }
            ,
            d.$3 = function() {
                d.props.comment.trim().length !== 0 && d.props.handleComment()
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.UNSAFE_componentWillReceiveProps = function(a) {
            if (a.comment !== this.props.comment && a.comment !== "") {
                var c = this.$1;
                c && b("setImmediate")(function() {
                    return c.focusInput()
                })
            }
        }
        ;
        d.$4 = function() {
            var a = this.props.comment.trim() === ""
              , c = i.jsx("div", {
                className: "_1fn8" + (a ? " _45df" : "") + (a ? "" : " _45dg")
            });
            a || (c = i.jsx(b("ShimButton.react"), {
                onClick: this.$3,
                children: c
            }));
            return i.jsx(b("CenteredContainer.react"), {
                className: a ? "" : "_45d5",
                fullHeight: !0,
                horizontal: !1,
                vertical: !0,
                children: c
            })
        }
        ;
        d.render = function() {
            var a = this, c;
            c = (c = this.props.igUser) != null ? (c = c.profile_picture_32) != null ? c.uri : c : c;
            return i.jsxs(b("Layout.react"), {
                className: "_1fn3",
                children: [i.jsx(j, {
                    className: "_1fn4",
                    children: i.jsx(b("CenteredContainer.react"), {
                        fullHeight: !0,
                        horizontal: !1,
                        vertical: !0,
                        children: i.jsx(b("PagesManagerInboxInstagramUserPhotoContainer.react"), {
                            imageSize: l,
                            imageURI: c
                        })
                    })
                }), i.jsx(k, {
                    children: i.jsx(b("CenteredContainer.react"), {
                        fullHeight: !0,
                        horizontal: !1,
                        vertical: !0,
                        children: i.jsx(b("XUITextInput.react"), {
                            className: "_1fn5",
                            onChange: this.props.onCommentChange,
                            onEnter: this.$3,
                            onFocus: this.$2,
                            placeholder: h._("Th\u00eam b\u00ecnh lu\u1eadn..."),
                            ref: function(b) {
                                return a.$1 = b
                            },
                            value: this.props.comment
                        })
                    })
                }), i.jsx(j, {
                    children: i.jsx("div", {
                        className: "_45d7",
                        children: i.jsx("div", {
                            className: "_45d8"
                        })
                    })
                }), i.jsx(j, {
                    children: this.$4()
                })]
            })
        }
        ;
        return c
    }(i.Component);
    e.exports = a
}
), null);
__d("PagesManagerInboxInstagramReplyCreateMutation", ["PagesManagerInboxIGCommentAction", "RelayFBEnvironment", "RelayModern", "RelayRuntime", "PagesManagerInboxInstagramReplyCreateMutation.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    f.commit = a;
    var g, h = b("RelayRuntime").ConnectionHandler, i = g !== void 0 ? g : g = b("PagesManagerInboxInstagramReplyCreateMutation.graphql");
    function a(a, c) {
        var d = function(a, c) {
            var d;
            d = (d = c.instagram_reply_create) == null ? void 0 : (d = d.instagram_reply) == null ? void 0 : d.id;
            c = (c = c.instagram_reply_create) == null ? void 0 : (c = c.instagram_reply) == null ? void 0 : c.parent_comment_id;
            if (!d || !c)
                return;
            d = a.get(d);
            var e = a.get(c);
            if (!d || !e)
                return;
            e = h.getConnection(e, "PagesManagerInboxInstagramRepliesContainer_instagram_replies");
            if (!e)
                return;
            a = h.createEdge(a, e, d, "InstagramCommentInstagramRepliesEdge");
            e && a && h.insertEdgeAfter(e, a);
            b("PagesManagerInboxIGCommentAction").reply(c)
        }
          , e = function() {
            var b = a.instagram_media.instagram_actor;
            return {
                instagram_reply_create: {
                    instagram_reply: {
                        id: a.actor_id,
                        text: a.text,
                        creation_time: Math.round(Date.now() / 1e3),
                        like_count: 0,
                        instagram_actor: {
                            id: b.id,
                            username: b.username,
                            profile_picture: {
                                uri: b.profile_picture_24.uri
                            }
                        }
                    }
                }
            }
        };
        return b("RelayModern").commitMutation(b("RelayFBEnvironment"), {
            mutation: i,
            optimisticResponse: e,
            optimisticUpdater: d,
            updater: d,
            variables: {
                input: {
                    actor_id: a.actor_id,
                    instagram_media_id: a.instagram_media.id,
                    text: a.text,
                    parent_comment_id: a.parent_comment_id
                }
            },
            onCompleted: c && c.onSuccess,
            onError: c && c.onFailure
        })
    }
}
), null);
__d("PagesManagerInboxInstagramPostComposerContainer.react", ["BIZInboxClientLogger", "FluxContainer", "PagesManagerInboxAction", "PagesManagerInboxFilterStore", "PagesManagerInboxInstagramCommentCreateMutation", "PagesManagerInboxInstagramPostComposer.react", "PagesManagerInboxInstagramPostComposerActions", "PagesManagerInboxInstagramPostComposerStore.react", "PagesManagerInboxInstagramReplyCreateMutation", "PagesManagerInboxLogger", "PagesManagerInboxStore", "React", "RelayModern", "PagesManagerInboxInstagramPostComposerContainer_igPost.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.state = {
                comment: "",
                parent_comment_id: null
            },
            d.$1 = function() {
                var a = d.props.shouldShowReplies || b("PagesManagerInboxStore").getConfig().platformConfigs[b("PagesManagerInboxFilterStore").getActiveType()].shouldShowIGRevampComments;
                !!d.state.parent_comment_id && !!a ? b("PagesManagerInboxInstagramReplyCreateMutation").commit({
                    actor_id: d.props.pageID,
                    instagram_media: d.props.igPost,
                    text: d.state.comment,
                    parent_comment_id: d.state.parent_comment_id
                }) : b("PagesManagerInboxInstagramCommentCreateMutation").commit({
                    actor_id: d.props.pageID,
                    instagram_media: d.props.igPost,
                    text: d.state.comment
                });
                b("PagesManagerInboxInstagramPostComposerActions").clearMessage();
                b("PagesManagerInboxAction").comment();
                b("PagesManagerInboxLogger").logSendComment("INSTAGRAM", d.props.pageID);
                d.props.onSendCommentCallback && d.props.onSendCommentCallback();
                d.props.onCreateComment();
                b("BIZInboxClientLogger").logCommentSubmit(d.props.pageID, d.props.igPost.instagram_actor.id, "INSTAGRAM", d.props.igPost.id, d.props.igPost.id)
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        c.getStores = function() {
            return [b("PagesManagerInboxInstagramPostComposerStore.react")]
        }
        ;
        c.calculateState = function(a) {
            return {
                comment: b("PagesManagerInboxInstagramPostComposerStore.react").getMessage(),
                parent_comment_id: b("PagesManagerInboxInstagramPostComposerStore.react").getParentCommentID()
            }
        }
        ;
        var d = c.prototype;
        d.render = function() {
            return h.jsx(b("PagesManagerInboxInstagramPostComposer.react"), {
                comment: this.state.comment,
                handleComment: this.$1,
                igUser: this.props.igPost.instagram_actor,
                onCommentChange: c.$2,
                pageID: this.props.pageID
            })
        }
        ;
        return c
    }(h.PureComponent);
    a.$2 = function(a) {
        b("PagesManagerInboxInstagramPostComposerActions").setMessage(a.target.value)
    }
    ;
    c = b("RelayModern").createFragmentContainer(b("FluxContainer").create(a), {
        igPost: g !== void 0 ? g : g = b("PagesManagerInboxInstagramPostComposerContainer_igPost.graphql")
    });
    e.exports = c
}
), null);
