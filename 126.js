if (self.CavalryLogger) {
    CavalryLogger.start_js(["aqvDd"]);
}

__d("BizInboxAppQuery.graphql", ["relay-runtime"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "page_id"
        }]
          , b = [{
            kind: "Variable",
            name: "page_id",
            variableName: "page_id"
        }];
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "BizInboxAppQuery",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: "BizInboxConfig",
                    kind: "LinkedField",
                    name: "biz_inbox_config",
                    plural: !1,
                    selections: [{
                        args: null,
                        kind: "FragmentSpread",
                        name: "BizInboxStateContextProvider_bizInboxConfig"
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
                name: "BizInboxAppQuery",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: "BizInboxConfig",
                    kind: "LinkedField",
                    name: "biz_inbox_config",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "page_id",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "page_name",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "ig_account_id",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "ig_account_igid",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "ig_mailbox_id",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "ig_profile_pic_uri",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "ig_oauth_nonce",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "ig_can_manage_comments",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "init_sync_sequence_id",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "default_currency",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "messenger_can_manage_comments",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "show_connect_button",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "BizInboxAdminPersona",
                        kind: "LinkedField",
                        name: "page_admins",
                        plural: !0,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "admin_id",
                            storageKey: null
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
                            name: "profile_pic_url",
                            storageKey: null
                        }],
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "jewel_init_data",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "is_delegate_page",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "show_ig_direct_product_picker",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "show_product_picker_modal_version",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "show_messenger_product_picker",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "show_pma_admin_composer",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "show_ldp_pma_admin_composer",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "show_commerce_invoice_button",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "show_request_payment",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "show_confirm_payment",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "show_payment_onboarding",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "show_commerce_invoice_button_pux",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "show_new_saved_reply_in_ig",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "show_new_saved_reply",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "creator_info",
                        storageKey: null
                    }],
                    storageKey: null
                }]
            },
            params: {
                id: "3421475654603890",
                metadata: {
                    relayPreloadable: !0
                },
                name: "BizInboxAppQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    a.params.id != null && b("relay-runtime").PreloadableQueryRegistry.set(a.params.id, a);
    e.exports = a
}
), null);
__d("BizInboxCommentThreadListContainerQuery.graphql", [], (function(a, b, c, d, e, f) {
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
            name: "filterIsReadStatus"
        }
          , d = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "filterOwnerID"
        }
          , e = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "filterStatus"
        }
          , f = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "isHighlightedComment"
        }
          , g = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "isStarsComment"
        }
          , h = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "pageID"
        }
          , i = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "platformFilter"
        }
          , j = [{
            kind: "Variable",
            name: "id",
            variableName: "pageID"
        }]
          , k = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        }
          , l = [{
            kind: "Variable",
            name: "after",
            variableName: "cursor"
        }, {
            kind: "Variable",
            name: "first",
            variableName: "count"
        }, {
            kind: "Variable",
            name: "is_highlighted_comment",
            variableName: "isHighlightedComment"
        }, {
            kind: "Variable",
            name: "is_stars_comment",
            variableName: "isStarsComment"
        }, {
            kind: "Variable",
            name: "with_comm_platform",
            variableName: "platformFilter"
        }, {
            kind: "Variable",
            name: "with_comm_status",
            variableName: "filterStatus"
        }, {
            kind: "Variable",
            name: "with_is_read",
            variableName: "filterIsReadStatus"
        }, {
            kind: "Variable",
            name: "with_owner_admin_id",
            variableName: "filterOwnerID"
        }]
          , m = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null
        }
          , n = [{
            kind: "Literal",
            name: "for_render_location",
            value: "INBOX"
        }]
          , o = [{
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null
        }]
          , p = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "length",
            storageKey: null
        }
          , q = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "offset",
            storageKey: null
        }
          , r = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "text",
            storageKey: null
        };
        return {
            fragment: {
                argumentDefinitions: [a, b, c, d, e, f, g, h, i],
                kind: "Fragment",
                metadata: null,
                name: "BizInboxCommentThreadListContainerQuery",
                selections: [{
                    alias: null,
                    args: j,
                    concreteType: "Page",
                    kind: "LinkedField",
                    name: "page",
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
                        }, {
                            kind: "Variable",
                            name: "filterIsReadStatus",
                            variableName: "filterIsReadStatus"
                        }, {
                            kind: "Variable",
                            name: "filterOwnerID",
                            variableName: "filterOwnerID"
                        }, {
                            kind: "Variable",
                            name: "filterStatus",
                            variableName: "filterStatus"
                        }, {
                            kind: "Variable",
                            name: "isHighlightedComment",
                            variableName: "isHighlightedComment"
                        }, {
                            kind: "Variable",
                            name: "isStarsComment",
                            variableName: "isStarsComment"
                        }, {
                            kind: "Variable",
                            name: "platformFilter",
                            variableName: "platformFilter"
                        }],
                        kind: "FragmentSpread",
                        name: "BizInboxCommentThreadList_Page"
                    }],
                    storageKey: null
                }],
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: [h, a, b, c, d, e, i, f, g],
                kind: "Operation",
                name: "BizInboxCommentThreadListContainerQuery",
                selections: [{
                    alias: null,
                    args: j,
                    concreteType: "Page",
                    kind: "LinkedField",
                    name: "page",
                    plural: !1,
                    selections: [k, {
                        alias: null,
                        args: l,
                        concreteType: "PageBusinessCommItemsConnection",
                        kind: "LinkedField",
                        name: "business_comm_items",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "PageBusinessCommItemsEdge",
                            kind: "LinkedField",
                            name: "edges",
                            plural: !0,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "node",
                                plural: !1,
                                selections: [m, k, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "comm_platform",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "comm_status",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: n,
                                    kind: "ScalarField",
                                    name: "comm_title",
                                    storageKey: 'comm_title(for_render_location:"INBOX")'
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "comm_type",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "is_read",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "last_modified_at",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: n,
                                    concreteType: "TextWithEntities",
                                    kind: "LinkedField",
                                    name: "snippet_with_entities",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "ImageAtRange",
                                        kind: "LinkedField",
                                        name: "image_ranges",
                                        plural: !0,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: null,
                                            kind: "LinkedField",
                                            name: "entity_with_image",
                                            plural: !1,
                                            selections: [m, {
                                                alias: null,
                                                args: null,
                                                concreteType: "Image",
                                                kind: "LinkedField",
                                                name: "image",
                                                plural: !1,
                                                selections: o,
                                                storageKey: null
                                            }, {
                                                kind: "InlineFragment",
                                                selections: [k],
                                                type: "Node",
                                                abstractKey: "__isNode"
                                            }],
                                            storageKey: null
                                        }, p, q],
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "InlineStyleAtRange",
                                        kind: "LinkedField",
                                        name: "inline_style_ranges",
                                        plural: !0,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "inline_style",
                                            storageKey: null
                                        }, p, q],
                                        storageKey: null
                                    }, r],
                                    storageKey: 'snippet_with_entities(for_render_location:"INBOX")'
                                }, {
                                    kind: "InlineFragment",
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "TextWithEntities",
                                        kind: "LinkedField",
                                        name: "ig_revamp_snippet_with_entities",
                                        plural: !1,
                                        selections: [r],
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: [{
                                            kind: "Literal",
                                            name: "height",
                                            value: 40
                                        }, {
                                            kind: "Literal",
                                            name: "width",
                                            value: 40
                                        }],
                                        concreteType: "Image",
                                        kind: "LinkedField",
                                        name: "thumbnail",
                                        plural: !1,
                                        selections: o,
                                        storageKey: "thumbnail(height:40,width:40)"
                                    }],
                                    type: "PageCommItem",
                                    abstractKey: null
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
                        args: l,
                        filters: ["with_comm_status", "with_comm_platform", "with_owner_admin_id"],
                        handle: "connection",
                        key: "BizInboxCommentThreadList_business_comm_items",
                        kind: "LinkedHandle",
                        name: "business_comm_items"
                    }],
                    storageKey: null
                }]
            },
            params: {
                id: "2985953281517543",
                metadata: {},
                name: "BizInboxCommentThreadListContainerQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("BizInboxCommentThreadListQuery.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = {
            defaultValue: 20,
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
            name: "filterIsReadStatus"
        }
          , d = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "filterOwnerID"
        }
          , e = {
            defaultValue: "TODO",
            kind: "LocalArgument",
            name: "filterStatus"
        }
          , f = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "id"
        }
          , g = {
            defaultValue: !1,
            kind: "LocalArgument",
            name: "isHighlightedComment"
        }
          , h = {
            defaultValue: !1,
            kind: "LocalArgument",
            name: "isStarsComment"
        }
          , i = {
            defaultValue: "MESSENGER",
            kind: "LocalArgument",
            name: "platformFilter"
        }
          , j = [{
            kind: "Variable",
            name: "id",
            variableName: "id"
        }]
          , k = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null
        }
          , l = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        }
          , m = [{
            kind: "Variable",
            name: "after",
            variableName: "cursor"
        }, {
            kind: "Variable",
            name: "first",
            variableName: "count"
        }, {
            kind: "Variable",
            name: "is_highlighted_comment",
            variableName: "isHighlightedComment"
        }, {
            kind: "Variable",
            name: "is_stars_comment",
            variableName: "isStarsComment"
        }, {
            kind: "Variable",
            name: "with_comm_platform",
            variableName: "platformFilter"
        }, {
            kind: "Variable",
            name: "with_comm_status",
            variableName: "filterStatus"
        }, {
            kind: "Variable",
            name: "with_is_read",
            variableName: "filterIsReadStatus"
        }, {
            kind: "Variable",
            name: "with_owner_admin_id",
            variableName: "filterOwnerID"
        }]
          , n = [{
            kind: "Literal",
            name: "for_render_location",
            value: "INBOX"
        }]
          , o = [{
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null
        }]
          , p = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "length",
            storageKey: null
        }
          , q = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "offset",
            storageKey: null
        }
          , r = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "text",
            storageKey: null
        };
        return {
            fragment: {
                argumentDefinitions: [a, b, c, d, e, f, g, h, i],
                kind: "Fragment",
                metadata: null,
                name: "BizInboxCommentThreadListQuery",
                selections: [{
                    alias: null,
                    args: j,
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
                        }, {
                            kind: "Variable",
                            name: "filterIsReadStatus",
                            variableName: "filterIsReadStatus"
                        }, {
                            kind: "Variable",
                            name: "filterOwnerID",
                            variableName: "filterOwnerID"
                        }, {
                            kind: "Variable",
                            name: "filterStatus",
                            variableName: "filterStatus"
                        }, {
                            kind: "Variable",
                            name: "isHighlightedComment",
                            variableName: "isHighlightedComment"
                        }, {
                            kind: "Variable",
                            name: "isStarsComment",
                            variableName: "isStarsComment"
                        }, {
                            kind: "Variable",
                            name: "platformFilter",
                            variableName: "platformFilter"
                        }],
                        kind: "FragmentSpread",
                        name: "BizInboxCommentThreadList_Page"
                    }],
                    storageKey: null
                }],
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: [a, b, c, d, e, g, h, i, f],
                kind: "Operation",
                name: "BizInboxCommentThreadListQuery",
                selections: [{
                    alias: null,
                    args: j,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "node",
                    plural: !1,
                    selections: [k, l, {
                        kind: "InlineFragment",
                        selections: [{
                            alias: null,
                            args: m,
                            concreteType: "PageBusinessCommItemsConnection",
                            kind: "LinkedField",
                            name: "business_comm_items",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "PageBusinessCommItemsEdge",
                                kind: "LinkedField",
                                name: "edges",
                                plural: !0,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "node",
                                    plural: !1,
                                    selections: [k, l, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "comm_platform",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "comm_status",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: n,
                                        kind: "ScalarField",
                                        name: "comm_title",
                                        storageKey: 'comm_title(for_render_location:"INBOX")'
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "comm_type",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "is_read",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "last_modified_at",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: n,
                                        concreteType: "TextWithEntities",
                                        kind: "LinkedField",
                                        name: "snippet_with_entities",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "ImageAtRange",
                                            kind: "LinkedField",
                                            name: "image_ranges",
                                            plural: !0,
                                            selections: [{
                                                alias: null,
                                                args: null,
                                                concreteType: null,
                                                kind: "LinkedField",
                                                name: "entity_with_image",
                                                plural: !1,
                                                selections: [k, {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "Image",
                                                    kind: "LinkedField",
                                                    name: "image",
                                                    plural: !1,
                                                    selections: o,
                                                    storageKey: null
                                                }, {
                                                    kind: "InlineFragment",
                                                    selections: [l],
                                                    type: "Node",
                                                    abstractKey: "__isNode"
                                                }],
                                                storageKey: null
                                            }, p, q],
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "InlineStyleAtRange",
                                            kind: "LinkedField",
                                            name: "inline_style_ranges",
                                            plural: !0,
                                            selections: [{
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "inline_style",
                                                storageKey: null
                                            }, p, q],
                                            storageKey: null
                                        }, r],
                                        storageKey: 'snippet_with_entities(for_render_location:"INBOX")'
                                    }, {
                                        kind: "InlineFragment",
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "TextWithEntities",
                                            kind: "LinkedField",
                                            name: "ig_revamp_snippet_with_entities",
                                            plural: !1,
                                            selections: [r],
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: [{
                                                kind: "Literal",
                                                name: "height",
                                                value: 40
                                            }, {
                                                kind: "Literal",
                                                name: "width",
                                                value: 40
                                            }],
                                            concreteType: "Image",
                                            kind: "LinkedField",
                                            name: "thumbnail",
                                            plural: !1,
                                            selections: o,
                                            storageKey: "thumbnail(height:40,width:40)"
                                        }],
                                        type: "PageCommItem",
                                        abstractKey: null
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
                            args: m,
                            filters: ["with_comm_status", "with_comm_platform", "with_owner_admin_id"],
                            handle: "connection",
                            key: "BizInboxCommentThreadList_business_comm_items",
                            kind: "LinkedHandle",
                            name: "business_comm_items"
                        }],
                        type: "Page",
                        abstractKey: null
                    }],
                    storageKey: null
                }]
            },
            params: {
                id: "3006198892781174",
                metadata: {},
                name: "BizInboxCommentThreadListQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("BizInboxCommentThreadList_Page.graphql", ["BizInboxCommentThreadListQuery.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = ["business_comm_items"]
          , c = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        }
          , d = [{
            kind: "Literal",
            name: "for_render_location",
            value: "INBOX"
        }]
          , e = [{
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null
        }]
          , f = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "length",
            storageKey: null
        }
          , g = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "offset",
            storageKey: null
        }
          , h = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "text",
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
            }, {
                defaultValue: null,
                kind: "LocalArgument",
                name: "filterIsReadStatus"
            }, {
                defaultValue: null,
                kind: "LocalArgument",
                name: "filterOwnerID"
            }, {
                defaultValue: "TODO",
                kind: "LocalArgument",
                name: "filterStatus"
            }, {
                defaultValue: !1,
                kind: "LocalArgument",
                name: "isHighlightedComment"
            }, {
                defaultValue: !1,
                kind: "LocalArgument",
                name: "isStarsComment"
            }, {
                defaultValue: "MESSENGER",
                kind: "LocalArgument",
                name: "platformFilter"
            }],
            kind: "Fragment",
            metadata: {
                connection: [{
                    count: "count",
                    cursor: "cursor",
                    direction: "forward",
                    path: a
                }],
                refetch: {
                    connection: {
                        forward: {
                            count: "count",
                            cursor: "cursor"
                        },
                        backward: null,
                        path: a
                    },
                    fragmentPathInResult: ["node"],
                    operation: b("BizInboxCommentThreadListQuery.graphql"),
                    identifierField: "id"
                }
            },
            name: "BizInboxCommentThreadList_Page",
            selections: [c, {
                alias: "business_comm_items",
                args: [{
                    kind: "Variable",
                    name: "with_comm_platform",
                    variableName: "platformFilter"
                }, {
                    kind: "Variable",
                    name: "with_comm_status",
                    variableName: "filterStatus"
                }, {
                    kind: "Variable",
                    name: "with_owner_admin_id",
                    variableName: "filterOwnerID"
                }],
                concreteType: "PageBusinessCommItemsConnection",
                kind: "LinkedField",
                name: "__BizInboxCommentThreadList_business_comm_items_connection",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "PageBusinessCommItemsEdge",
                    kind: "LinkedField",
                    name: "edges",
                    plural: !0,
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "node",
                        plural: !1,
                        selections: [c, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "comm_platform",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "comm_status",
                            storageKey: null
                        }, {
                            alias: null,
                            args: d,
                            kind: "ScalarField",
                            name: "comm_title",
                            storageKey: 'comm_title(for_render_location:"INBOX")'
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "comm_type",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "is_read",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "last_modified_at",
                            storageKey: null
                        }, {
                            alias: null,
                            args: d,
                            concreteType: "TextWithEntities",
                            kind: "LinkedField",
                            name: "snippet_with_entities",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "ImageAtRange",
                                kind: "LinkedField",
                                name: "image_ranges",
                                plural: !0,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "entity_with_image",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "Image",
                                        kind: "LinkedField",
                                        name: "image",
                                        plural: !1,
                                        selections: e,
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }, f, g],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "InlineStyleAtRange",
                                kind: "LinkedField",
                                name: "inline_style_ranges",
                                plural: !0,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "inline_style",
                                    storageKey: null
                                }, f, g],
                                storageKey: null
                            }, h],
                            storageKey: 'snippet_with_entities(for_render_location:"INBOX")'
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "__typename",
                            storageKey: null
                        }, {
                            kind: "InlineFragment",
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "TextWithEntities",
                                kind: "LinkedField",
                                name: "ig_revamp_snippet_with_entities",
                                plural: !1,
                                selections: [h],
                                storageKey: null
                            }, {
                                alias: null,
                                args: [{
                                    kind: "Literal",
                                    name: "height",
                                    value: 40
                                }, {
                                    kind: "Literal",
                                    name: "width",
                                    value: 40
                                }],
                                concreteType: "Image",
                                kind: "LinkedField",
                                name: "thumbnail",
                                plural: !1,
                                selections: e,
                                storageKey: "thumbnail(height:40,width:40)"
                            }],
                            type: "PageCommItem",
                            abstractKey: null
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
            }],
            type: "Page",
            abstractKey: null
        }
    }();
    e.exports = a
}
), null);
__d("BizInboxCustomerAndLabelSelectorContainerQuery.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "page_id"
        }]
          , b = [{
            kind: "Variable",
            name: "id",
            variableName: "page_id"
        }]
          , c = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        }
          , d = [{
            kind: "Literal",
            name: "first",
            value: 400
        }];
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "BizInboxCustomerAndLabelSelectorContainerQuery",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: "Page",
                    kind: "LinkedField",
                    name: "page",
                    plural: !1,
                    selections: [{
                        args: null,
                        kind: "FragmentSpread",
                        name: "BizInboxCustomerAndLabelSelector_labels"
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
                name: "BizInboxCustomerAndLabelSelectorContainerQuery",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: "Page",
                    kind: "LinkedField",
                    name: "page",
                    plural: !1,
                    selections: [c, {
                        alias: null,
                        args: d,
                        concreteType: "CustomLabelsConnection",
                        kind: "LinkedField",
                        name: "custom_labels",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "CustomLabelsEdge",
                            kind: "LinkedField",
                            name: "edges",
                            plural: !0,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "BusinessPresenceCustomLabel",
                                kind: "LinkedField",
                                name: "node",
                                plural: !1,
                                selections: [c, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "name",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "label_color",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "contact_count",
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
                        storageKey: "custom_labels(first:400)"
                    }, {
                        alias: null,
                        args: d,
                        filters: null,
                        handle: "connection",
                        key: "CRMContextCardLabelsSection_custom_labels",
                        kind: "LinkedHandle",
                        name: "custom_labels"
                    }],
                    storageKey: null
                }]
            },
            params: {
                id: "3421568254573015",
                metadata: {},
                name: "BizInboxCustomerAndLabelSelectorContainerQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("BizInboxCustomerAndLabelSelector_labels.graphql", [], (function(a, b, c, d, e, f) {
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
            metadata: {
                connection: [{
                    count: null,
                    cursor: null,
                    direction: "forward",
                    path: ["custom_labels"]
                }]
            },
            name: "BizInboxCustomerAndLabelSelector_labels",
            selections: [a, {
                alias: "custom_labels",
                args: null,
                concreteType: "CustomLabelsConnection",
                kind: "LinkedField",
                name: "__CRMContextCardLabelsSection_custom_labels_connection",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "CustomLabelsEdge",
                    kind: "LinkedField",
                    name: "edges",
                    plural: !0,
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: "BusinessPresenceCustomLabel",
                        kind: "LinkedField",
                        name: "node",
                        plural: !1,
                        selections: [a, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "name",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "label_color",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "contact_count",
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
            }],
            type: "Page",
            abstractKey: null
        }
    }();
    e.exports = a
}
), null);
__d("BizInboxSearchLabelResultContainerQuery.graphql", [], (function(a, b, c, d, e, f) {
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
            name: "labels"
        }]
          , b = [{
            kind: "Variable",
            name: "after",
            variableName: "cursor"
        }, {
            kind: "Variable",
            name: "first",
            variableName: "count"
        }, {
            kind: "Variable",
            name: "query_params",
            variableName: "labels"
        }];
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "BizInboxSearchLabelResultContainerQuery",
                selections: [{
                    args: [{
                        kind: "Variable",
                        name: "count",
                        variableName: "count"
                    }, {
                        kind: "Variable",
                        name: "cursor",
                        variableName: "cursor"
                    }, {
                        kind: "Variable",
                        name: "labels",
                        variableName: "labels"
                    }],
                    kind: "FragmentSpread",
                    name: "BizInboxSearchLabelResult_result"
                }],
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "BizInboxSearchLabelResultContainerQuery",
                selections: [{
                    alias: "search_result",
                    args: b,
                    concreteType: "PageUnifiedContactLabelSearchConnection",
                    kind: "LinkedField",
                    name: "page_unified_contact_label_search",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: "PageUnifiedContactLabelSearchEdge",
                        kind: "LinkedField",
                        name: "edges",
                        plural: !0,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "PageContact",
                            kind: "LinkedField",
                            name: "node",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "id",
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
                    alias: "search_result",
                    args: b,
                    filters: ["query_params"],
                    handle: "connection",
                    key: "BizInboxSearchLabelResult_search_result",
                    kind: "LinkedHandle",
                    name: "page_unified_contact_label_search"
                }]
            },
            params: {
                id: "3272690556102385",
                metadata: {},
                name: "BizInboxSearchLabelResultContainerQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("BizInboxSearchLabelResultQuery.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: 20,
            kind: "LocalArgument",
            name: "count"
        }, {
            defaultValue: null,
            kind: "LocalArgument",
            name: "cursor"
        }, {
            defaultValue: null,
            kind: "LocalArgument",
            name: "labels"
        }]
          , b = [{
            kind: "Variable",
            name: "after",
            variableName: "cursor"
        }, {
            kind: "Variable",
            name: "first",
            variableName: "count"
        }, {
            kind: "Variable",
            name: "query_params",
            variableName: "labels"
        }];
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "BizInboxSearchLabelResultQuery",
                selections: [{
                    args: [{
                        kind: "Variable",
                        name: "count",
                        variableName: "count"
                    }, {
                        kind: "Variable",
                        name: "cursor",
                        variableName: "cursor"
                    }, {
                        kind: "Variable",
                        name: "labels",
                        variableName: "labels"
                    }],
                    kind: "FragmentSpread",
                    name: "BizInboxSearchLabelResult_result"
                }],
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "BizInboxSearchLabelResultQuery",
                selections: [{
                    alias: "search_result",
                    args: b,
                    concreteType: "PageUnifiedContactLabelSearchConnection",
                    kind: "LinkedField",
                    name: "page_unified_contact_label_search",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: "PageUnifiedContactLabelSearchEdge",
                        kind: "LinkedField",
                        name: "edges",
                        plural: !0,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "PageContact",
                            kind: "LinkedField",
                            name: "node",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "id",
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
                    alias: "search_result",
                    args: b,
                    filters: ["query_params"],
                    handle: "connection",
                    key: "BizInboxSearchLabelResult_search_result",
                    kind: "LinkedHandle",
                    name: "page_unified_contact_label_search"
                }]
            },
            params: {
                id: "4281259788614270",
                metadata: {},
                name: "BizInboxSearchLabelResultQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("BizInboxSearchLabelResult_result.graphql", ["BizInboxSearchLabelResultQuery.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = ["search_result"];
        return {
            argumentDefinitions: [{
                defaultValue: 20,
                kind: "LocalArgument",
                name: "count"
            }, {
                defaultValue: null,
                kind: "LocalArgument",
                name: "cursor"
            }, {
                defaultValue: null,
                kind: "LocalArgument",
                name: "labels"
            }],
            kind: "Fragment",
            metadata: {
                connection: [{
                    count: "count",
                    cursor: "cursor",
                    direction: "forward",
                    path: a
                }],
                refetch: {
                    connection: {
                        forward: {
                            count: "count",
                            cursor: "cursor"
                        },
                        backward: null,
                        path: a
                    },
                    fragmentPathInResult: [],
                    operation: b("BizInboxSearchLabelResultQuery.graphql")
                }
            },
            name: "BizInboxSearchLabelResult_result",
            selections: [{
                alias: "search_result",
                args: [{
                    kind: "Variable",
                    name: "query_params",
                    variableName: "labels"
                }],
                concreteType: "PageUnifiedContactLabelSearchConnection",
                kind: "LinkedField",
                name: "__BizInboxSearchLabelResult_search_result_connection",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "PageUnifiedContactLabelSearchEdge",
                    kind: "LinkedField",
                    name: "edges",
                    plural: !0,
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: "PageContact",
                        kind: "LinkedField",
                        name: "node",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "id",
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
            }],
            type: "Query",
            abstractKey: null
        }
    }();
    e.exports = a
}
), null);
__d("BizInboxThreadListViewHeaderQuery.graphql", [], (function(a, b, c, d, e, f) {
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
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "away_toggle_expiration",
            storageKey: null
        }
          , d = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "away_time_range",
            storageKey: null
        }
          , e = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "away_time_zone",
            storageKey: null
        }
          , f = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_away_toggle_on",
            storageKey: null
        }
          , g = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "next_away_range",
            storageKey: null
        }
          , h = {
            alias: null,
            args: null,
            concreteType: "PageAdminInfo",
            kind: "LinkedField",
            name: "admin_info",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                concreteType: "PageSimpleSavedResponse",
                kind: "LinkedField",
                name: "away_response",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "platforms",
                    storageKey: null
                }],
                storageKey: null
            }],
            storageKey: null
        };
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "BizInboxThreadListViewHeaderQuery",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: "Page",
                    kind: "LinkedField",
                    name: "page",
                    plural: !1,
                    selections: [c, d, e, f, g, h],
                    storageKey: null
                }],
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "BizInboxThreadListViewHeaderQuery",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: "Page",
                    kind: "LinkedField",
                    name: "page",
                    plural: !1,
                    selections: [c, d, e, f, g, h, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    }],
                    storageKey: null
                }]
            },
            params: {
                id: "3397083840322407",
                metadata: {},
                name: "BizInboxThreadListViewHeaderQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("BizInboxStateContextProvider_bizInboxConfig.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "BizInboxStateContextProvider_bizInboxConfig",
        selections: [{
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "page_id",
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "page_name",
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "ig_account_id",
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "ig_account_igid",
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "ig_mailbox_id",
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "ig_profile_pic_uri",
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "ig_oauth_nonce",
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "ig_can_manage_comments",
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "init_sync_sequence_id",
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "default_currency",
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "messenger_can_manage_comments",
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "show_connect_button",
            storageKey: null
        }, {
            alias: null,
            args: null,
            concreteType: "BizInboxAdminPersona",
            kind: "LinkedField",
            name: "page_admins",
            plural: !0,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "admin_id",
                storageKey: null
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
                name: "profile_pic_url",
                storageKey: null
            }],
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "jewel_init_data",
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_delegate_page",
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "show_ig_direct_product_picker",
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "show_product_picker_modal_version",
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "show_messenger_product_picker",
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "show_pma_admin_composer",
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "show_ldp_pma_admin_composer",
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "show_commerce_invoice_button",
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "show_request_payment",
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "show_confirm_payment",
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "show_payment_onboarding",
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "show_commerce_invoice_button_pux",
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "show_new_saved_reply_in_ig",
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "show_new_saved_reply",
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "creator_info",
            storageKey: null
        }],
        type: "BizInboxConfig",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("BizInboxAwayToggleMutation.graphql", [], (function(a, b, c, d, e, f) {
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
            concreteType: "SetPageAwayToggleResponsePayload",
            kind: "LinkedField",
            name: "set_page_away_toggle",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                concreteType: "Page",
                kind: "LinkedField",
                name: "page",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "away_toggle_expiration",
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
                    name: "is_away_toggle_on",
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
                name: "BizInboxAwayToggleMutation",
                selections: b,
                type: "Mutation",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "BizInboxAwayToggleMutation",
                selections: b
            },
            params: {
                id: "3094243010638831",
                metadata: {},
                name: "BizInboxAwayToggleMutation",
                operationKind: "mutation",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("BizInboxCustomerRelaySearchSourceQuery.graphql", [], (function(a, b, c, d, e, f) {
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
            name: "pageID"
        }
          , d = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "searchTerm"
        }
          , e = [{
            kind: "Variable",
            name: "id",
            variableName: "pageID"
        }]
          , f = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        }
          , g = [{
            kind: "Variable",
            name: "after",
            variableName: "cursor"
        }, {
            kind: "Variable",
            name: "first",
            variableName: "count"
        }, {
            kind: "Variable",
            name: "search_name",
            variableName: "searchTerm"
        }]
          , h = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "name",
            storageKey: null
        }
          , i = {
            alias: null,
            args: null,
            concreteType: "PageContactIGProfileInfo",
            kind: "LinkedField",
            name: "ig_profile_info",
            plural: !1,
            selections: [h],
            storageKey: null
        }
          , j = {
            alias: null,
            args: null,
            concreteType: "PageContactProfilePhotoURI",
            kind: "LinkedField",
            name: "profile_photo_uris",
            plural: !0,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "uri",
                storageKey: null
            }],
            storageKey: null
        }
          , k = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null
        }
          , l = {
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
        };
        return {
            fragment: {
                argumentDefinitions: [a, b, c, d],
                kind: "Fragment",
                metadata: null,
                name: "BizInboxCustomerRelaySearchSourceQuery",
                selections: [{
                    alias: null,
                    args: e,
                    concreteType: "Page",
                    kind: "LinkedField",
                    name: "page",
                    plural: !1,
                    selections: [f, {
                        alias: null,
                        args: g,
                        concreteType: "PageUnifiedCustomerSearchConnection",
                        kind: "LinkedField",
                        name: "page_unified_customer_search",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "PageUnifiedCustomerSearchEdge",
                            kind: "LinkedField",
                            name: "edges",
                            plural: !0,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "node",
                                plural: !1,
                                selections: [f, h, i, j],
                                storageKey: null
                            }, k],
                            storageKey: null
                        }, l],
                        storageKey: null
                    }],
                    storageKey: null
                }],
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: [c, a, b, d],
                kind: "Operation",
                name: "BizInboxCustomerRelaySearchSourceQuery",
                selections: [{
                    alias: null,
                    args: e,
                    concreteType: "Page",
                    kind: "LinkedField",
                    name: "page",
                    plural: !1,
                    selections: [f, {
                        alias: null,
                        args: g,
                        concreteType: "PageUnifiedCustomerSearchConnection",
                        kind: "LinkedField",
                        name: "page_unified_customer_search",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "PageUnifiedCustomerSearchEdge",
                            kind: "LinkedField",
                            name: "edges",
                            plural: !0,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "node",
                                plural: !1,
                                selections: [k, f, h, i, j],
                                storageKey: null
                            }, k],
                            storageKey: null
                        }, l],
                        storageKey: null
                    }],
                    storageKey: null
                }]
            },
            params: {
                id: "3828722043810712",
                metadata: {},
                name: "BizInboxCustomerRelaySearchSourceQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("BizInboxAwayToggleSubscription.graphql", [], (function(a, b, c, d, e, f) {
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
            concreteType: "SetPageAwayToggleResponsePayload",
            kind: "LinkedField",
            name: "page_away_toggle_subscribe",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                concreteType: "Page",
                kind: "LinkedField",
                name: "page",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "id",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "is_away_toggle_on",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "away_toggle_expiration",
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
                name: "BizInboxAwayToggleSubscription",
                selections: b,
                type: "Subscription",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "BizInboxAwayToggleSubscription",
                selections: b
            },
            params: {
                id: "3289162591116672",
                metadata: {
                    subscriptionName: "page_away_toggle_subscribe"
                },
                name: "BizInboxAwayToggleSubscription",
                operationKind: "subscription",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("BizKitContextCardLabelsSection_contactLabels.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        }
          , b = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "name",
            storageKey: null
        };
        return {
            argumentDefinitions: [],
            kind: "Fragment",
            metadata: {
                connection: [{
                    count: null,
                    cursor: null,
                    direction: "forward",
                    path: ["business_attributes", "customer_labels", "label_list"]
                }]
            },
            name: "BizKitContextCardLabelsSection_contactLabels",
            selections: [{
                alias: null,
                args: null,
                concreteType: "BizCRMContactBusinessAttributes",
                kind: "LinkedField",
                name: "business_attributes",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "BizCRMContactMessageLabelAttribute",
                    kind: "LinkedField",
                    name: "customer_labels",
                    plural: !1,
                    selections: [{
                        alias: "label_list",
                        args: null,
                        concreteType: "BizCRMContactMessageLabelAttributeLabelListConnection",
                        kind: "LinkedField",
                        name: "__BizKitContextCardLabelsSection_label_list_connection",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "BizCRMContactMessageLabelAttributeLabelListEdge",
                            kind: "LinkedField",
                            name: "edges",
                            plural: !0,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "BusinessPresenceCustomLabel",
                                kind: "LinkedField",
                                name: "node",
                                plural: !1,
                                selections: [a, b, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "label_color",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "contact_count",
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
                        args: null,
                        concreteType: "BizCRMContactMessageLabelAttributeCustomerCustomTagsConnection",
                        kind: "LinkedField",
                        name: "customer_custom_tags",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "BizCRMContactMessageLabelAttributeCustomerCustomTagsEdge",
                            kind: "LinkedField",
                            name: "edges",
                            plural: !0,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "PageCustomTag",
                                kind: "LinkedField",
                                name: "node",
                                plural: !1,
                                selections: [a, b, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "color",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "thread_count",
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
            }],
            type: "BizCRMContact",
            abstractKey: null
        }
    }();
    e.exports = a
}
), null);
__d("BizKitContextCardMediaSection_media.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "BizKitContextCardMediaSection_media",
        selections: [{
            alias: null,
            args: null,
            concreteType: "BizCRMContactFBAttributes",
            kind: "LinkedField",
            name: "fb_attributes",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "user_id",
                storageKey: null
            }, {
                alias: null,
                args: null,
                concreteType: "BizCRMContactMessengerThreadAttribute",
                kind: "LinkedField",
                name: "messenger_thread",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "MessageThread",
                    kind: "LinkedField",
                    name: "one_to_one_thread",
                    plural: !1,
                    selections: [{
                        args: null,
                        kind: "FragmentSpread",
                        name: "BizKitContextCardSharedPhotos_messageThread"
                    }],
                    storageKey: null
                }],
                storageKey: null
            }],
            storageKey: null
        }],
        type: "BizCRMContact",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("BizKitContextCardSharedPhotosPaginationQuery.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: 4,
            kind: "LocalArgument",
            name: "count"
        }, {
            defaultValue: null,
            kind: "LocalArgument",
            name: "cursor"
        }, {
            defaultValue: null,
            kind: "LocalArgument",
            name: "id"
        }]
          , b = [{
            kind: "Variable",
            name: "id",
            variableName: "id"
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
            name: "after",
            variableName: "cursor"
        }, {
            kind: "Variable",
            name: "first",
            variableName: "count"
        }, {
            kind: "Literal",
            name: "message_shared_media_type",
            value: "PHOTO_AND_VIDEO"
        }]
          , f = {
            alias: "fbid",
            args: null,
            kind: "ScalarField",
            name: "legacy_attachment_id",
            storageKey: null
        }
          , g = {
            alias: null,
            args: [{
                kind: "Literal",
                name: "height",
                value: 250
            }, {
                kind: "Literal",
                name: "width",
                value: 250
            }],
            concreteType: "Image",
            kind: "LinkedField",
            name: "image",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "uri",
                storageKey: null
            }],
            storageKey: "image(height:250,width:250)"
        }
          , h = {
            alias: "dim",
            args: null,
            concreteType: "Vect2",
            kind: "LinkedField",
            name: "original_dimensions",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "x",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "y",
                storageKey: null
            }],
            storageKey: null
        };
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "BizKitContextCardSharedPhotosPaginationQuery",
                selections: [{
                    alias: null,
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
                        name: "BizKitContextCardSharedPhotos_messageThread"
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
                name: "BizKitContextCardSharedPhotosPaginationQuery",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "node",
                    plural: !1,
                    selections: [c, d, {
                        kind: "InlineFragment",
                        selections: [{
                            alias: "sharedMedia",
                            args: e,
                            concreteType: "MessageSharedMediaConnection",
                            kind: "LinkedField",
                            name: "message_shared_media",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "MessageSharedMediaEdge",
                                kind: "LinkedField",
                                name: "edges",
                                plural: !0,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "node",
                                    plural: !1,
                                    selections: [c, {
                                        kind: "InlineFragment",
                                        selections: [d],
                                        type: "Node",
                                        abstractKey: "__isNode"
                                    }, {
                                        kind: "InlineFragment",
                                        selections: [f, g, h],
                                        type: "MessageImage",
                                        abstractKey: null
                                    }, {
                                        kind: "InlineFragment",
                                        selections: [f, g, h, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "playable_url",
                                            storageKey: null
                                        }],
                                        type: "MessageVideo",
                                        abstractKey: null
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
                                    name: "has_next_page",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "end_cursor",
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            alias: "sharedMedia",
                            args: e,
                            filters: ["message_shared_media_type"],
                            handle: "connection",
                            key: "BizKitContextCardSharedPhotos_sharedMedia",
                            kind: "LinkedHandle",
                            name: "message_shared_media"
                        }],
                        type: "MessageThread",
                        abstractKey: null
                    }],
                    storageKey: null
                }]
            },
            params: {
                id: "3173443859409813",
                metadata: {},
                name: "BizKitContextCardSharedPhotosPaginationQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("BizKitContextCardSharedPhotos_messageThread.graphql", ["BizKitContextCardSharedPhotosPaginationQuery.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = ["sharedMedia"]
          , c = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        }
          , d = {
            alias: "fbid",
            args: null,
            kind: "ScalarField",
            name: "legacy_attachment_id",
            storageKey: null
        }
          , e = {
            alias: null,
            args: [{
                kind: "Literal",
                name: "height",
                value: 250
            }, {
                kind: "Literal",
                name: "width",
                value: 250
            }],
            concreteType: "Image",
            kind: "LinkedField",
            name: "image",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "uri",
                storageKey: null
            }],
            storageKey: "image(height:250,width:250)"
        }
          , f = {
            alias: "dim",
            args: null,
            concreteType: "Vect2",
            kind: "LinkedField",
            name: "original_dimensions",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "x",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "y",
                storageKey: null
            }],
            storageKey: null
        };
        return {
            argumentDefinitions: [{
                defaultValue: 4,
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
                    direction: "forward",
                    path: a
                }],
                refetch: {
                    connection: {
                        forward: {
                            count: "count",
                            cursor: "cursor"
                        },
                        backward: null,
                        path: a
                    },
                    fragmentPathInResult: ["node"],
                    operation: b("BizKitContextCardSharedPhotosPaginationQuery.graphql"),
                    identifierField: "id"
                }
            },
            name: "BizKitContextCardSharedPhotos_messageThread",
            selections: [{
                alias: "sharedMedia",
                args: [{
                    kind: "Literal",
                    name: "message_shared_media_type",
                    value: "PHOTO_AND_VIDEO"
                }],
                concreteType: "MessageSharedMediaConnection",
                kind: "LinkedField",
                name: "__BizKitContextCardSharedPhotos_sharedMedia_connection",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "MessageSharedMediaEdge",
                    kind: "LinkedField",
                    name: "edges",
                    plural: !0,
                    selections: [{
                        alias: null,
                        args: null,
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
                            kind: "InlineFragment",
                            selections: [c],
                            type: "Node",
                            abstractKey: "__isNode"
                        }, {
                            kind: "InlineFragment",
                            selections: [d, e, f],
                            type: "MessageImage",
                            abstractKey: null
                        }, {
                            kind: "InlineFragment",
                            selections: [d, e, f, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "playable_url",
                                storageKey: null
                            }],
                            type: "MessageVideo",
                            abstractKey: null
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
                        name: "has_next_page",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "end_cursor",
                        storageKey: null
                    }],
                    storageKey: null
                }],
                storageKey: '__BizKitContextCardSharedPhotos_sharedMedia_connection(message_shared_media_type:"PHOTO_AND_VIDEO")'
            }, c],
            type: "MessageThread",
            abstractKey: null
        }
    }();
    e.exports = a
}
), null);
__d("BizKitInboxViewQuery.graphql", ["relay-runtime"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "page_id"
        }]
          , b = [{
            kind: "Variable",
            name: "id",
            variableName: "page_id"
        }]
          , c = {
            kind: "InlineFragment",
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "name",
                storageKey: null
            }, {
                alias: null,
                args: null,
                concreteType: "Image",
                kind: "LinkedField",
                name: "topic_image",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "uri",
                    storageKey: null
                }],
                storageKey: null
            }],
            type: "Page",
            abstractKey: null
        };
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "BizKitInboxViewQuery",
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
                name: "BizKitInboxViewQuery",
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
                id: "2780251898767391",
                metadata: {
                    relayPreloadable: !0
                },
                name: "BizKitInboxViewQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    a.params.id != null && b("relay-runtime").PreloadableQueryRegistry.set(a.params.id, a);
    e.exports = a
}
), null);
__d("BizInboxThreadActionType", ["$InternalEnum"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("$InternalEnum").Mirrored(["MoveToMain", "MoveToDone", "MoveToSpam", "MarkRead", "MarkUnread", "Delete", "FollowUp", "UnfollowUp"]);
    c = a;
    e.exports = c
}
), null);
__d("BizInboxNavChannel", ["keyMirror"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("keyMirror")({
        ALL: null,
        FACEBOOK: null,
        MESSENGER: null,
        INSTAGRAM: null,
        INSTAGRAM_DIRECT: null,
        WEC: null,
        GROUP: null,
        MEDIA_MANAGER_FB_COMMS: null,
        MEDIA_MANAGER_PRIORITY: null,
        INBOX: null,
        AUTOMATED_RESPONSES: null,
        COMMERCE_EMAIL: null,
        EMAIL_CAMPAIGN: null,
        CONTACTS: null,
        LEAD_EMAIL: null
    });
    c = a;
    e.exports = c
}
), null);
__d("BizInboxFbtUtils", ["fbt", "BizInboxNavChannel", "BizInboxThreadActionType", "PageCommItemStatusUtil"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.escapeThreadTitle = a;
    f.getThreadlistHeaderCloseMenuLabel = c;
    f.getThreadlistHeaderFilterTooltipLabel = d;
    f.getOldActionLabel = e;
    f.getDetailViewHeaderActionUnitLabel = h;
    f.getThreadDeleteConfirmationDialogDeleteLabel = i;
    f.getThreadDeleteConfirmationDialogCancelLabel = j;
    f.getThreadDeleteConfirmationDialogHeader = k;
    f.getThreadDeleteConfirmationDialogIGDirectBody = l;
    f.getThreadDeleteConfirmationDialogMessengerBody = m;
    f.getMessengerComposerPlaceholder = n;
    f.getComposerStickerButtonLabel = o;
    f.getComposerSendButtonLabel = p;
    f.getIGDirectThreadLoadingErrorNotice = q;
    f.getMessengerComposerFileUploadButtonLabel = r;
    f.getIGDirectComposerPlaceholder = s;
    f.getIGDirectComposerHeartIconLabel = t;
    f.getIGDirectSeenStatusText = u;
    f.getIGDirectConnectionErrorMessage = v;
    f.getIGDirectBlockedContainerInfoText = w;
    f.getIGDirectBlockedContainerDeleteChatCTA = x;
    f.getIGDirectComposerPhotoUploadLabel = y;
    f.getIGPostPhotoLikeCountText = z;
    f.getIGCommentListLoadMoreCommentButtonLabel = A;
    f.getIGCommentRowActionMenuTooltipLabel = B;
    f.getIGCommentRowActionMenuDeleteLabel = C;
    f.getIGCommentComposerPlaceholderText = D;
    f.getIGCommentRepliesToggleRepliesButtonLabel = E;
    f.getIGCommentRowReplyButtonLabel = F;
    f.getIGConnectionTitle = G;
    f.getIGConnectionLearnMoreText = H;
    f.getIGConnectionUpsellText = I;
    f.getIGReconnectionUpsellText = J;
    f.getIGConnectButtonText = K;
    f.getRecipientBlockedWarningMessage = L;
    f.getBannedComposerToolTipMessage = M;
    function a(a) {
        return a.replace(/&#(\d+);/g, function(a, b) {
            return String.fromCharCode(b)
        })
    }
    function c() {
        return g._("Close")
    }
    function d() {
        return g._("Filter conversations")
    }
    function e(a) {
        return b("PageCommItemStatusUtil").getLabel(a)
    }
    function h(a) {
        switch (a) {
        case b("BizInboxThreadActionType").MoveToMain:
            return g._("Chuy\u1ec3n \u0111\u1ebfn th\u01b0 m\u1ee5c Ch\u00ednh");
        case b("BizInboxThreadActionType").MoveToDone:
            return g._("Chuy\u1ec3n \u0111\u1ebfn th\u01b0 m\u1ee5c Xong");
        case b("BizInboxThreadActionType").MoveToSpam:
            return g._("Chuy\u1ec3n \u0111\u1ebfn th\u01b0 m\u1ee5c Spam");
        case b("BizInboxThreadActionType").MarkRead:
            return g._("\u0110\u00e1nh d\u1ea5u l\u00e0 \u0111\u00e3 \u0111\u1ecdc");
        case b("BizInboxThreadActionType").MarkUnread:
            return g._("\u0110\u00e1nh d\u1ea5u l\u00e0 ch\u01b0a \u0111\u1ecdc");
        case b("BizInboxThreadActionType").Delete:
            return g._("X\u00f3a cu\u1ed9c tr\u00f2 chuy\u1ec7n");
        case b("BizInboxThreadActionType").FollowUp:
            return g._("\u0110\u00e1nh d\u1ea5u l\u00e0 theo d\u00f5i");
        case b("BizInboxThreadActionType").UnfollowUp:
            return g._("G\u1ee1 kh\u1ecfi m\u1ee5c Theo d\u00f5i")
        }
    }
    function i() {
        return g._("X\u00f3a")
    }
    function j() {
        return g._("H\u1ee7y")
    }
    function k() {
        return g._("X\u00f3a cu\u1ed9c tr\u00f2 chuy\u1ec7n")
    }
    function l() {
        return g._("N\u1ebfu b\u1ea1n ch\u1ecdn x\u00f3a th\u00ec cu\u1ed9c tr\u00f2 chuy\u1ec7n n\u00e0y s\u1ebd ch\u1ec9 b\u1ecb lo\u1ea1i kh\u1ecfi h\u1ed9p th\u01b0 c\u1ee7a m\u00ecnh b\u1ea1n th\u00f4i.")
    }
    function m() {
        return g._("H\u00e0nh \u0111\u1ed9ng n\u00e0y s\u1ebd x\u00f3a v\u0129nh vi\u1ec5n l\u1ecbch s\u1eed cu\u1ed9c tr\u00f2 chuy\u1ec7n.")
    }
    function n() {
        return g._("Vi\u1ebft tr\u1ea3 l\u1eddi...")
    }
    function o() {
        return g._("\u0110\u0103ng nh\u00e3n d\u00e1n")
    }
    function p() {
        return g._("G\u1eedi")
    }
    function q() {
        return g._("Kh\u00f4ng th\u1ec3 t\u1ea3i tin nh\u1eafn. Vui l\u00f2ng l\u00e0m m\u1edbi tr\u00ecnh duy\u1ec7t r\u1ed3i th\u1eed l\u1ea1i.")
    }
    function r() {
        return g._("\u0110\u00ednh k\u00e8m file")
    }
    function s() {
        return g._("Vi\u1ebft tin nh\u1eafn...")
    }
    function t() {
        return g._("G\u1eedi l\u01b0\u1ee3t th\u00edch")
    }
    function u() {
        return g._("\u0110\u00e3 xem")
    }
    function v(a) {
        return a ? g._("Ch\u01b0a g\u1eedi \u0111\u01b0\u1ee3c tin nh\u1eafn. H\u00e3y th\u1eed l\u1ea1i.") : g._("Ch\u01b0a g\u1eedi \u0111\u01b0\u1ee3c tin nh\u1eafn. H\u00e3y th\u1eed l\u1ea1i.")
    }
    function w(a) {
        return g._("B\u1ea1n \u0111\u00e3 ch\u1eb7n {username}.", [g._param("username", a)])
    }
    function x() {
        return g._("X\u00f3a \u0111o\u1ea1n chat.")
    }
    function y() {
        return g._("G\u1eedi \u1ea3nh")
    }
    function z(a) {
        return a != null ? g._({
            "*": "{number} l\u01b0\u1ee3t th\u00edch",
            "_1": "1 l\u01b0\u1ee3t th\u00edch"
        }, [g._plural(a, "number")]) : null
    }
    function A() {
        return g._("Xem th\u00eam b\u00ecnh lu\u1eadn")
    }
    function B() {
        return g._("T\u00f9y ch\u1ecdn")
    }
    function C() {
        return g._("X\u00f3a")
    }
    function D() {
        return g._("Th\u00eam b\u00ecnh lu\u1eadn...")
    }
    function E(a) {
        return a > 0 ? g._("Xem ph\u1ea3n h\u1ed3i ({reply count})", [g._param("reply count", a)]) : g._("\u1ea8n ph\u1ea3n h\u1ed3i")
    }
    function F() {
        return g._("Tr\u1ea3 l\u1eddi")
    }
    function G(a) {
        return a ? g._("Nh\u1eadn tin nh\u1eafn Instagram trong H\u1ed9p th\u01b0") : g._("K\u1ebft n\u1ed1i t\u00e0i kho\u1ea3n Instagram")
    }
    function H() {
        return g._("T\u00ecm hi\u1ec3u th\u00eam")
    }
    function I(a) {
        return a ? [g._("Khi b\u1ea1n k\u1ebft n\u1ed1i t\u00e0i kho\u1ea3n Instagram, qu\u1ea3n tr\u1ecb vi\u00ean, bi\u00ean t\u1eadp vi\u00ean v\u00e0 ng\u01b0\u1eddi ki\u1ec3m duy\u1ec7t tr\u00ean Trang c\u00f3 th\u1ec3 qu\u1ea3n l\u00fd b\u00ecnh lu\u1eadn v\u00e0 tin nh\u1eafn Direct ngay t\u1ea1i H\u1ed9p th\u01b0."), g._("Khi b\u1ea1n k\u1ebft n\u1ed1i t\u00e0i kho\u1ea3n Instagram, nh\u1eefng ng\u01b0\u1eddi kh\u00e1c qu\u1ea3n l\u00fd Trang c\u0169ng c\u00f3 th\u1ec3 \u0111\u0103ng v\u00e0 th\u1ef1c hi\u1ec7n c\u00e1c h\u00e0nh \u0111\u1ed9ng kh\u00e1c tr\u00ean t\u00e0i kho\u1ea3n n\u00e0y.")] : [g._("Qu\u1ea3n tr\u1ecb vi\u00ean ho\u1eb7c bi\u00ean t\u1eadp vi\u00ean c\u00f3 th\u1ec3 k\u1ebft n\u1ed1i t\u00e0i kho\u1ea3n Instagram v\u1edbi Trang. Khi \u0111\u00f3, qu\u1ea3n tr\u1ecb vi\u00ean, bi\u00ean t\u1eadp vi\u00ean v\u00e0 ng\u01b0\u1eddi ki\u1ec3m duy\u1ec7t tr\u00ean Trang s\u1ebd qu\u1ea3n l\u00fd \u0111\u01b0\u1ee3c b\u00ecnh lu\u1eadn v\u00e0 tin nh\u1eafn Direct ngay t\u1ea1i H\u1ed9p th\u01b0."), g._("Khi b\u1ea1n k\u1ebft n\u1ed1i t\u00e0i kho\u1ea3n Instagram, nh\u1eefng ng\u01b0\u1eddi kh\u00e1c qu\u1ea3n l\u00fd Trang c\u0169ng c\u00f3 th\u1ec3 \u0111\u0103ng v\u00e0 th\u1ef1c hi\u1ec7n c\u00e1c h\u00e0nh \u0111\u1ed9ng kh\u00e1c tr\u00ean t\u00e0i kho\u1ea3n n\u00e0y.")]
    }
    function J(a) {
        return a ? g._("K\u1ebft n\u1ed1i l\u1ea1i t\u00e0i kho\u1ea3n Instagram \u0111\u1ec3 qu\u1ea3n tr\u1ecb vi\u00ean, bi\u00ean t\u1eadp vi\u00ean v\u00e0 ng\u01b0\u1eddi ki\u1ec3m duy\u1ec7t c\u1ee7a Trang \u0111\u1ecdc v\u00e0 tr\u1ea3 l\u1eddi tin nh\u1eafn Direct trong H\u1ed9p th\u01b0.") : g._("Qu\u1ea3n tr\u1ecb vi\u00ean v\u00e0 bi\u00ean t\u1eadp vi\u00ean Trang c\u00f3 th\u1ec3 k\u1ebft n\u1ed1i l\u1ea1i t\u00e0i kho\u1ea3n Instagram c\u1ee7a b\u1ea1n, \u0111\u1ec3 nh\u1eefng ng\u01b0\u1eddi qu\u1ea3n l\u00fd Trang tr\u1ea3 l\u1eddi tin nh\u1eafn tr\u1ef1c ti\u1ebfp trong H\u1ed9p th\u01b0.")
    }
    function K(a, c) {
        switch (a) {
        case b("BizInboxNavChannel").INSTAGRAM:
            return g._("K\u1ebft n\u1ed1i t\u00e0i kho\u1ea3n");
        case b("BizInboxNavChannel").INSTAGRAM_DIRECT:
            return c ? g._("K\u1ebft n\u1ed1i l\u1ea1i t\u00e0i kho\u1ea3n") : g._("K\u1ebft n\u1ed1i t\u00e0i kho\u1ea3n");
        default:
            return null
        }
    }
    function L() {
        return g._("Trang c\u1ee7a b\u1ea1n kh\u00f4ng th\u1ec3 g\u1eedi tin nh\u1eafn cho ng\u01b0\u1eddi n\u00e0y n\u1eefa.")
    }
    function M() {
        return g._("Trang c\u00f3 th\u1ec3 kh\u00f4ng g\u1eedi \u0111\u01b0\u1ee3c tin nh\u1eafn cho ai \u0111\u00f3 n\u1ebfu h\u1ecd kh\u00f4ng c\u00f2n s\u1eed d\u1ee5ng Facebook, n\u1ebfu h\u1ecd g\u1eb7p r\u1ee7i ro b\u1ea3o m\u1eadt ho\u1eb7c h\u1ecd \u0111\u00e3 ch\u1ecdn kh\u00f4ng nh\u1eadn tin nh\u1eafn.")
    }
}
), null);
__d("BizInboxImageUtils", ["ix", "BizInboxComposerButtonType", "BizInboxThreadActionType", "BizInboxTypes", "asset"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.getDetailViewHeaderActionUnitIcon = a;
    f.getMessengerDetailViewComposerButtonIcon = c;
    f.getIGDirectDetailViewComposerButtonIcon = d;
    f.getDetailViewComposerAttachmentTypeIcon = e;
    f.getIGPostPhotoContainerButtonIcon = h;
    f.getBizInboxProfilePicBadgeIcon = i;
    function a(a) {
        switch (a) {
        case b("BizInboxThreadActionType").MoveToMain:
            return g("1329299");
        case b("BizInboxThreadActionType").FollowUp:
            return g("1330278");
        case b("BizInboxThreadActionType").UnfollowUp:
            return g("400768");
        case b("BizInboxThreadActionType").MoveToDone:
            return g("1266183");
        case b("BizInboxThreadActionType").MarkRead:
            return g("1330254");
        case b("BizInboxThreadActionType").MarkUnread:
            return g("1329299");
        case b("BizInboxThreadActionType").MoveToSpam:
            return g("1330266");
        case b("BizInboxThreadActionType").Delete:
            return g("1288367")
        }
    }
    function c(a, c) {
        switch (a) {
        case b("BizInboxComposerButtonType").BizInboxMessengerComposerButtonType.Appointment:
            return c ? g("505862") : g("477573");
        case b("BizInboxComposerButtonType").BizInboxMessengerComposerButtonType.Attachment:
            return c ? g("857028") : g("595818");
        case b("BizInboxComposerButtonType").BizInboxMessengerComposerButtonType.Commerce:
            break;
        case b("BizInboxComposerButtonType").BizInboxMessengerComposerButtonType.HotLike:
            return c ? g("857021") : g("552741");
        case b("BizInboxComposerButtonType").BizInboxMessengerComposerButtonType.ProductPicker:
            break;
        case b("BizInboxComposerButtonType").BizInboxMessengerComposerButtonType.SavedReplies:
            return c ? g("857004") : g("857005");
        case b("BizInboxComposerButtonType").BizInboxMessengerComposerButtonType.Send:
            break;
        case b("BizInboxComposerButtonType").BizInboxMessengerComposerButtonType.Sticker:
            return c ? g("857012") : g("615749")
        }
    }
    function d(a) {
        switch (a) {
        case b("BizInboxComposerButtonType").BizInboxIGDirectComposerButtonType.HeartLike:
            return g("560775");
        case b("BizInboxComposerButtonType").BizInboxIGDirectComposerButtonType.Send:
            break;
        case b("BizInboxComposerButtonType").BizInboxIGDirectComposerButtonType.SavedReplies:
            break;
        case b("BizInboxComposerButtonType").BizInboxIGDirectComposerButtonType.ProductPicker:
            break;
        case b("BizInboxComposerButtonType").BizInboxIGDirectComposerButtonType.UploadImage:
            return g("676607")
        }
    }
    function e(a) {
        switch (a) {
        case b("BizInboxTypes").AttachmentType.Image:
            return g("94995");
        case b("BizInboxTypes").AttachmentType.Video:
            return g("94998");
        case b("BizInboxTypes").AttachmentType.Audio:
            return g("94984");
        case b("BizInboxTypes").AttachmentType.Text:
            return g("94997");
        default:
            return g("94992")
        }
    }
    function h(a) {
        switch (a) {
        case "left":
            return g("1704319");
        case "right":
            return g("1704366");
        default:
            return null
        }
    }
    function i(a) {
        switch (a) {
        case "MESSENGER":
            return g("1349103");
        case "FACEBOOK":
            return g("94750");
        case "GROUP":
            return g("412879");
        case "INSTAGRAM_DIRECT":
        case "INSTAGRAM":
            return g("1333925");
        case "WEC":
            return g("872146");
        default:
            return null
        }
    }
}
), null);
__d("BizInboxFilterContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext(Object.freeze({}));
    d = c;
    e.exports = d
}
), null);
__d("BizInboxThreadDeleteConfirmationDialog.react", ["BIZInboxClientLogger", "BizInboxFbtUtils", "BizInboxFilterContext", "GeoButton.react", "GeoCancelButton.react", "GeoModal.react", "GeoModalFooter.react", "GeoModalHeader.react", "GeoSection.react", "PageCommItemStatus", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c, d = g.useContext(b("BizInboxFilterContext")), e = d.activeFolder;
        d = a.isShown;
        var f = a.onHide
          , h = a.onConfirm
          , i = a.commPlatform
          , j = a.pageID
          , k = a.threadID
          , l = a.commType;
        a = function() {
            h(),
            b("BIZInboxClientLogger").logHeaderButtonClick(j, i, k, e, b("PageCommItemStatus").DELETED, l, "show_p13n")
        }
        ;
        var m = function() {
            f(),
            b("BIZInboxClientLogger").logThreadDeleteHeaderButtonCancelFlow(j, i, k, e, e, l, "show_p13n")
        };
        return g.jsx(b("GeoModal.react"), {
            footer: g.jsx(b("GeoModalFooter.react"), {
                primaryButton: g.jsx(b("GeoButton.react"), {
                    label: (c = b("BizInboxFbtUtils")).getThreadDeleteConfirmationDialogDeleteLabel(),
                    onClick: a,
                    variant: "primary"
                }),
                secondaryButton: g.jsx(b("GeoCancelButton.react"), {
                    label: c.getThreadDeleteConfirmationDialogCancelLabel(),
                    onClick: m
                })
            }),
            header: g.jsx(b("GeoModalHeader.react"), {
                heading: c.getThreadDeleteConfirmationDialogHeader()
            }),
            isShown: d,
            label: c.getThreadDeleteConfirmationDialogHeader(),
            onHide: f,
            children: g.jsx(b("GeoSection.react"), {
                children: i !== "INSTAGRAM_DIRECT" ? b("BizInboxFbtUtils").getThreadDeleteConfirmationDialogMessengerBody() : b("BizInboxFbtUtils").getThreadDeleteConfirmationDialogIGDirectBody()
            })
        })
    }
}
), null);
__d("BizInboxStateContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext(Object.freeze({}));
    d = c;
    e.exports = d
}
), null);
__d("bizInboxStateThreadReducer", ["FBImmer", "HistoryManager", "URI"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = "mailbox_id", i = "selected_item_id", j = "platform";
    function a(a, c) {
        var d, e = (d = a.igMailboxID) != null ? d : a.pageID;
        d = b("FBImmer").produce(a, function(a) {
            switch (c.type) {
            case "thread.select":
                k(e, c.threadID);
                a.selectedThreadID = c.threadID;
                a.selectedThreadType = c.threadType;
                a.selectedThreadUserIsBlocked = !1;
                break;
            case "thread.userBlockedUpdate":
                a.selectedThreadUserIsBlocked = c.isUserBlocked;
                break
            }
        });
        return d
    }
    function k(a, c) {
        var d = new (g || (g = b("URI")))(window.location.href);
        c != null ? d.addQueryData(h, a).addQueryData(i, c).removeQueryData(j) : d.removeQueryData(i);
        b("HistoryManager").go(d.toString(), !1, !0)
    }
}
), null);
__d("BizInboxStateDispatcherContext", ["React", "emptyFunction"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext(b("emptyFunction"));
    d = c;
    e.exports = d
}
), null);
__d("BizInboxStateReducerContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext({
        current: new Map()
    });
    d = c;
    e.exports = d
}
), null);
__d("useBizInboxStateReducers", ["BizInboxStateDispatcherContext", "BizInboxStateReducerContext", "React", "useContextRef"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function h(a) {
        return b("useContextRef")(a, b("BizInboxStateReducerContext"))
    }
    function a(a) {
        a.forEach(h);
        return g.useContext(b("BizInboxStateDispatcherContext"))
    }
}
), null);
__d("BizInboxMessengerDetailViewComposer.react", ["ix", "cx", "BIZInboxClientLogger", "BizInboxDetailViewComposerAttachmentList.react", "BizInboxFbtUtils", "BizInboxMessengerComposerStickerButton.react", "BizInboxMessengerHotLikeButton.react", "BizInboxStateContext", "BizKitCurrentTabNameUtils", "Image.react", "JSResource", "MercuryConfig", "MercuryIDs", "PagesMessengerFileUploader.react", "PagesMessengerTextInput.react", "React", "RelayHooks", "Tooltip.react", "URI", "XUIButton.react", "asset", "lazyLoadComponent", "stylex"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i, j = b("React"), k = (c = b("lazyLoadComponent"))((d = b("JSResource"))("BizInboxMessengerSavedRepliesButtonContainer.react").__setRef("BizInboxMessengerDetailViewComposer.react")), l = c(d("CommerceInvoiceAdminButton.react").__setRef("BizInboxMessengerDetailViewComposer.react")), m = c(d("PagesManagerInboxComposerSendAvailabilityButton.react").__setRef("BizInboxMessengerDetailViewComposer.react")), n = c(d("PagesManagerInboxComposerCreateAppointmentButton.react").__setRef("BizInboxMessengerDetailViewComposer.react")), o = c(d("PagesManagerInboxProductPickerButton.react").__setRef("BizInboxMessengerDetailViewComposer.react"));
    function a(a) {
        var c = a.canViewerReply
          , d = a.attachments
          , e = a.defaultCurrency
          , f = a.message
          , h = a.pageID
          , p = a.savedRepliesPlaceholder
          , q = a.senderIconURI
          , r = a.showConfirmPayment
          , s = a.showCommerceInvoiceButton
          , t = a.showCommerceInvoiceButtonPUX
          , u = a.showLDPPMAAdminComposer
          , v = a.showMessengerProductPicker
          , w = a.showPaymentOnboarding
          , x = a.showPMAAdminComposer
          , y = a.showProductPickerModalVersion
          , z = a.showRequestPayment
          , A = a.threadID
          , B = a.uploadingAttachmentCount
          , C = a.onAttachmentDetach
          , D = a.onAttachmentUploadFinished
          , E = a.onFileUploaderMounted
          , F = a.onFileUploaderSubmit
          , G = a.onInputChange
          , H = a.onInputReady
          , I = a.onSavedRepliesSelected
          , J = a.onSavedRepliesInputChange
          , K = a.onSendMessage
          , L = a.onStickerSelected;
        a = j.useContext(b("BizInboxStateContext"));
        a = a.selectedThreadUserIsBlocked;
        var M = j.useRef()
          , N = b("RelayHooks").useRelayEnvironment()
          , O = b("BizKitCurrentTabNameUtils").useBizKitCurrentRouteName()
          , P = O !== "INBOX" ? "show_chat_head" : "show_p13n";
        j.useEffect(function() {
            b("BIZInboxClientLogger").logMessageComposerRender(h, "MESSENGER", A, "FB_MESSAGE", P)
        }, [h, A, P]);
        j.useEffect(function() {
            var a;
            (a = M.current) == null ? void 0 : a.focus()
        }, [A]);
        var Q = j.useRef(null)
          , R = new (i || (i = b("URI")))(b("MercuryConfig").upload_url).addQueryData("request_user_id", h).toString();
        function S() {
            return f.trim().length === 0 && d.length === 0
        }
        function T(a) {
            a.preventDefault();
            if (S() || B !== 0)
                return;
            K();
            (a = M.current) == null ? void 0 : a.focus()
        }
        function U() {
            var a = p || b("BizInboxFbtUtils").getMessengerComposerPlaceholder();
            return j.jsx("div", {
                className: "_4dv-",
                children: j.jsx(b("PagesMessengerTextInput.react"), {
                    className: "_1p7p _5id1 _4dv_",
                    onChange: G,
                    onInputReady: function(a) {
                        H(a),
                        a.focus(),
                        M.current = a
                    },
                    onNoShiftEnter: T,
                    placeholder: a,
                    value: f
                })
            })
        }
        function V() {
            return j.jsx(b("Image.react"), {
                className: "efq0p1lu e668ggz4 fbqq29mr dqiucr32 hcuj84z0 h2ta00k2 dp47wsg2 t859r28j",
                src: q
            })
        }
        function W() {
            return j.jsx(b("BizInboxMessengerComposerStickerButton.react"), {
                onStickerSelected: L
            })
        }
        function X() {
            return S() ? j.jsx(b("BizInboxMessengerHotLikeButton.react"), {
                onStickerSelected: L
            }) : null
        }
        function Y() {
            return S() ? null : j.jsx("div", {
                className: "_9ddz",
                children: j.jsx(b("XUIButton.react"), {
                    "data-testid": void 0,
                    disabled: B !== 0,
                    label: b("BizInboxFbtUtils").getComposerSendButtonLabel(),
                    onClick: T,
                    variant: "flat"
                })
            })
        }
        function Z() {
            return j.jsx("div", {
                className: "d7trcdtv de96p6db dbiqsd3u f7ebnjy3 o8r1ceta lfxdtrhj e668ggz4 l7j52awj",
                children: j.jsx(b("Tooltip.react"), {
                    tooltip: b("BizInboxFbtUtils").getMessengerComposerFileUploadButtonLabel(),
                    position: "above",
                    alignH: "center",
                    children: j.jsx(b("PagesMessengerFileUploader.react"), {
                        actionURI: R,
                        iconSize: "large",
                        supportMulti: !0,
                        onFileUploaderMounted: E,
                        onUploadFinished: D,
                        onSubmit: F
                    })
                })
            })
        }
        function $() {
            return v ? j.jsx(j.Suspense, {
                fallback: null,
                children: j.jsx("div", {
                    className: "d7trcdtv de96p6db dbiqsd3u f7ebnjy3 o8r1ceta lfxdtrhj e668ggz4 l7j52awj",
                    children: j.jsx(o, {
                        channel: "MESSENGER",
                        mailboxID: h,
                        recipientID: b("MercuryIDs").getThreadFBIDFromThreadID(A),
                        senderID: h,
                        shouldShowProductPickerModalVersion: y,
                        threadID: A,
                        isPlatformization: !0,
                        environment: N
                    })
                })
            }) : null
        }
        function aa() {
            return x ? j.jsx(j.Suspense, {
                fallback: null,
                children: j.jsx("div", {
                    className: "d7trcdtv de96p6db dbiqsd3u f7ebnjy3 o8r1ceta lfxdtrhj e668ggz4 l7j52awj",
                    children: j.jsx(n, {
                        creatorInfo: null,
                        pageID: h,
                        recipientID: b("MercuryIDs").getThreadFBIDFromThreadID(A),
                        showTooltip: !0,
                        threadID: A
                    })
                })
            }) : null
        }
        function ba() {
            return u ? j.jsx(j.Suspense, {
                fallback: null,
                children: j.jsx("div", {
                    className: "d7trcdtv de96p6db dbiqsd3u f7ebnjy3 o8r1ceta lfxdtrhj e668ggz4 l7j52awj",
                    children: j.jsx(m, {
                        pageID: h,
                        recipientID: b("MercuryIDs").getThreadFBIDFromThreadID(A),
                        showTooltip: !0,
                        threadID: A
                    })
                })
            }) : null
        }
        function ca() {
            return s ? j.jsx(j.Suspense, {
                fallback: null,
                children: j.jsx("div", {
                    className: "d7trcdtv de96p6db dbiqsd3u f7ebnjy3 o8r1ceta lfxdtrhj e668ggz4 l7j52awj",
                    children: j.jsx(l, {
                        defaultCurrency: e,
                        pageID: h,
                        recipientID: b("MercuryIDs").getThreadFBIDFromThreadID(A),
                        shouldShowConfirmPayment: r,
                        shouldShowPUX: t,
                        shouldShowPaymentOnboarding: w,
                        shouldShowRequestPayment: z,
                        shouldShowShippingNUX: !1,
                        shouldUseKbankOnboarding: !1
                    })
                })
            }) : null
        }
        function da() {
            return S() ? j.jsx(j.Suspense, {
                fallback: null,
                children: j.jsx("div", {
                    className: "d7trcdtv de96p6db dbiqsd3u f7ebnjy3 o8r1ceta lfxdtrhj e668ggz4 l7j52awj",
                    children: j.jsx(k, {
                        pageID: h,
                        threadID: A,
                        userID: b("MercuryIDs").getThreadFBIDFromThreadID(A),
                        platform: "MESSENGER",
                        onSavedRepliesInputChange: J,
                        inputBoxRef: M.current,
                        onInputChange: G,
                        onInputReady: H,
                        onSavedRepliesSelected: I
                    })
                })
            }) : null
        }
        function ea() {
            return j.jsxs("div", {
                className: "o0vkfkqq e668ggz4 mddzmzb1 asixov7e ogzuee0m hxwx4318 i0jzeac6 dqiucr32",
                children: [$(), Z(), W(), da(), aa(), ca(), ba(), j.jsx("span", {
                    ref: Q,
                    children: X()
                }), Y()]
            })
        }
        function fa() {
            return j.jsx(b("BizInboxDetailViewComposerAttachmentList.react"), {
                attachments: d,
                onAttachmentDetach: C
            })
        }
        function ga() {
            return j.jsxs("div", {
                className: "q1s5q2it dqh67phm ptawzf12 szxkbqsu m8poo2ga bnflzwvb h6swc0wa c4ucwr1s",
                children: [b("BizInboxFbtUtils").getRecipientBlockedWarningMessage(), j.jsx(b("Tooltip.react"), {
                    tooltip: b("BizInboxFbtUtils").getBannedComposerToolTipMessage(),
                    children: j.jsx("a", {
                        href: "https://www.facebook.com/help/307375982614147",
                        children: j.jsx(b("Image.react"), {
                            src: g("360712"),
                            style: {
                                verticalAlign: "-2px"
                            }
                        })
                    })
                })]
            })
        }
        if (a || !c)
            return ga();
        else
            return j.jsxs("div", {
                children: [j.jsxs("div", {
                    className: "hrdmje0l k3y9kuz2 d9fehgwv p9uboid1 mlg5n5bf",
                    children: [V(), U(), ea()]
                }), j.jsx("div", {
                    className: "ktotyoc7 t647m38b b3bz9o9y las6nvkk sgsj3rsc mlg5n5bf er0rly1v",
                    children: fa()
                })]
            })
    }
}
), null);
__d("BizInboxMessengerLogMessage.react", ["BizInboxStateContext", "MessengerLogMessage.react", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = g.useContext(b("BizInboxStateContext"));
        c = c.defaultCurrency;
        c == null && (c = "USD");
        return g.jsx(b("MessengerLogMessage.react"), babelHelpers["extends"]({
            defaultCurrency: c
        }, a))
    }
}
), null);
__d("BizInboxMessengerDetailViewMessageList.react", ["cx", "BIZInboxClientLogger", "BizInboxDetailViewConsts", "BizInboxDetailViewLoading.react", "BizInboxMessengerLogMessage.react", "BizInboxStateContext", "BizKitCurrentTabNameUtils", "DOM", "MercuryShareAttachmentRenderLocations", "MercuryThreadActions", "MessageList.react", "MessengerCollapsedLogMessageGroup.react", "MessengerDateBreak_DEPRECATED.react", "MessengerFlexScrollableArea.react", "MessengerMessageGroup.react", "MessengerSpinner.react", "QuickPerformanceLogger", "React", "ReactDOM", "UserActivityBlue", "immutable", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function a(a, c) {
        var d = a.composerHeight
          , e = a.deliveryTimeStamp
          , f = a.fetchMoreMessages
          , g = a.hasFetchedAll
          , i = a.height
          , j = a.isInitDone
          , k = a.isLoading
          , l = a.perfLogInstanceKey
          , m = a.messageList
          , n = a.readReceipts
          , o = a.thread
          , p = a.threadID
          , q = a.viewer
          , r = h.useContext(b("BizInboxStateContext"))
          , s = r.navChannel;
        r = h.useState({
            scrollHeight: 0,
            scrollTop: 0
        });
        var t = r[0]
          , u = r[1]
          , v = h.useRef()
          , w = h.useRef(null)
          , x = function() {
            var a;
            return (a = v.current) == null ? void 0 : a.scrollToBottom()
        };
        h.useImperativeHandle(c, function() {
            return {
                scrollToBottom: x
            }
        });
        var y = h.useCallback(function() {
            b("UserActivityBlue").isOnTab() && b("UserActivityBlue").isActive() ? b("MercuryThreadActions").getForFBID(q).markRead(p) : w.current != null && (w.current = b("UserActivityBlue").subscribe(function() {
                if (b("UserActivityBlue").isOnTab()) {
                    var a;
                    (a = w.current) == null ? void 0 : a.unsubscribe();
                    w.current = null;
                    b("MercuryThreadActions").getForFBID(q).markRead(p)
                }
            }))
        }, [p, q]);
        h.useEffect(function() {
            if (v.current == null || !j)
                return;
            var a = b("DOM").scry;
            a = a(b("ReactDOM").findDOMNode(v.current), "img");
            a.filter(function(a) {
                return !a.complete
            }).forEach(function(a) {
                a.addEventListener("load", x)
            });
            y();
            return a.forEach(function(a) {
                a.removeEventListener("load", x)
            })
        }, [v, j, y, a.threadID]);
        h.useEffect(function() {
            v.current != null && !v.current.isScrolledToBottom() && !k && x()
        }, [k]);
        h.useEffect(function() {
            var a;
            a = (a = v.current) == null ? void 0 : (a = a.getArea()) == null ? void 0 : a.getScrollHeight();
            if (!g && !k && a != null) {
                var b;
                a = a - t.scrollHeight + t.scrollTop;
                (b = v.current) == null ? void 0 : b.scrollToPosition(a)
            }
        }, [g, k, v, t]);
        h.useEffect(function() {
            var a;
            (a = v.current) == null ? void 0 : a.handleResize()
        }, [d]);
        function z() {
            var a, b;
            a = (a = v.current) == null ? void 0 : (a = a.getArea()) == null ? void 0 : a.getScrollTop();
            b = (b = v.current) == null ? void 0 : (b = b.getArea()) == null ? void 0 : b.getScrollHeight();
            if (a == null || b == null)
                return;
            !k && a === 0 && (u({
                scrollHeight: b,
                scrollTop: a
            }),
            f())
        }
        function A() {
            return !g && k ? h.jsx("div", {
                className: "nnjertdf ip7yc5sa f2129259 ogzuee0m fig0cxfd hd4ilxxj pixl6fl9",
                children: h.jsx(b("MessengerSpinner.react"), {})
            }) : null
        }
        var B = k && m.length === 0 || !j;
        r = b("BizKitCurrentTabNameUtils").useBizKitCurrentRouteName();
        var C = r !== "INBOX" ? "show_chat_head" : "show_p13n";
        h.useEffect(function() {
            if (!B && l != null) {
                var a;
                b("BIZInboxClientLogger").logMessageListRenderView(q, "MESSENGER", "", C);
                (a = b("QuickPerformanceLogger")).markerAnnotate(36241422, {
                    string: {
                        page_id: q,
                        p13n: "true"
                    }
                });
                a.markerEnd(36241422, 2, l);
                a.markerAnnotate(36247834, {
                    string: {
                        navChannel: s,
                        commType: "FB_MESSAGE",
                        pageID: q,
                        p13n: "true"
                    }
                });
                a.markerEnd(36247834, 2)
            }
        }, [B, q, l, s, C]);
        return B ? h.jsx(b("BizInboxDetailViewLoading.react"), {
            height: i
        }) : h.jsx(b("MessengerFlexScrollableArea.react"), {
            className: "mddzmzb1 b3bz9o9y ogzuee0m sgsj3rsc er0rly1v kerwu6uh",
            bottomOffset: b("BizInboxDetailViewConsts").DETAIL_VIEW_BOTTOM_OFFSET,
            onScroll: z,
            ref: v,
            shouldStickToBottom: !0,
            tabIndex: 0,
            children: h.jsxs("div", {
                className: "_9dmd",
                "data-testid": void 0,
                children: [A(), h.jsx(b("MessageList.react"), {
                    CollapsedLogMessageGroup: b("MessengerCollapsedLogMessageGroup.react"),
                    DateBreak: b("MessengerDateBreak_DEPRECATED.react"),
                    deliveryTimestamp: e,
                    isCanonical: !0,
                    isPageMessage: !0,
                    location: b("MercuryShareAttachmentRenderLocations").MESSENGER,
                    LogMessage: b("BizInboxMessengerLogMessage.react"),
                    MessageGroup: b("MessengerMessageGroup.react"),
                    messages: b("immutable").List(m),
                    onAttachmentLoad: x,
                    readReceipts: n,
                    threadID: p,
                    thread: o,
                    viewer: q
                })]
            })
        })
    }
    c = h.forwardRef(a);
    e.exports = c
}
), null);
__d("BizInboxMessengerDetailViewContainer.react", ["BizInboxDetailViewConsts", "BizInboxDetailViewLoading.react", "BizInboxMessengerDetailViewComposerContainer.react", "BizInboxMessengerDetailViewMessageList.react", "GeoSpinner.react", "MercuryIDs", "MercuryMessageStore", "MessengerConfig", "MessengerDeliveryReceipt.bs", "MessengerReadReceipt.re", "MessengerState.re", "QuickPerformanceLogger", "Random", "React", "ResponsiveBlock.react", "SubscriptionsHandler", "stylex", "useAutoSizer"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.creatorInfo
          , d = a.pageID
          , e = g.useState([])
          , f = e[0]
          , h = e[1]
          , i = g.useRef();
        e = g.useState(!1);
        var j = e[0]
          , k = e[1];
        e = g.useState(!0);
        var l = e[0]
          , m = e[1];
        e = g.useState(!1);
        var n = e[0]
          , o = e[1];
        e = b("useAutoSizer")();
        var p = e.Container
          , q = e.height;
        e = g.useState(b("BizInboxDetailViewConsts").COMPOSER_DEFAULT_HEIGHT);
        var r = e[0]
          , s = e[1];
        e = g.useState(null);
        var t = e[0]
          , u = e[1]
          , v = b("MercuryIDs").getThreadIDFromUserID((e = a.threadID) != null ? e : "")
          , w = g.useRef()
          , x = b("MessengerState.re").getThreadMetaNow(d, v)
          , y = x == null ? void 0 : x.thread_id;
        g.useEffect(function() {
            if (y != null) {
                var a = b("Random").uint32();
                u(a);
                b("QuickPerformanceLogger").markerStart(36241422, a)
            }
        }, [y, d]);
        g.useEffect(function() {
            m(!0);
            o(!1);
            w.current = new (b("MercuryMessageStore"))(v,b("MessengerConfig").MessageLoadCount,d);
            var a = new (b("SubscriptionsHandler"))();
            a.addSubscriptions(w.current.subscribe(function(a) {
                h(a.messages),
                m(!1),
                o(!0)
            }));
            return function() {
                w.current && w.current.destroy(),
                a && a.release(),
                k(!1),
                o(!1)
            }
        }, [v, d]);
        function z(a) {
            a = b("MessengerState.re").deliveryReceipts(a);
            return a ? b("MessengerDeliveryReceipt.bs").getDeliveryTimeOfThread(a, v) : 0
        }
        function A(a) {
            var c, e = b("MercuryIDs").getParticipantIDFromUserID(d);
            a = b("MessengerState.re").readReceiptsPerThread(a);
            a = b("MessengerReadReceipt.re").getSeenTimestamps(a, v);
            var g = new Set((c = x == null ? void 0 : x.participants) != null ? c : a.keys());
            g["delete"](e);
            return a.withMutations(function(a) {
                f.forEach(function(b) {
                    if (g.size === 0)
                        return !1;
                    if (!g.has(b.author))
                        return;
                    if (b.action_type === "ma-type:log-message")
                        return;
                    a.update(b.author, function(a) {
                        return a && a.watermark <= b.timestamp ? {
                            action: b.timestamp,
                            watermark: b.timestamp
                        } : a
                    });
                    g["delete"](b.author)
                })
            }).sortBy(function(a) {
                return a.watermark
            })
        }
        function B() {
            if (!j && !l) {
                var a;
                m(!0);
                a = Boolean((a = w.current) == null ? void 0 : a.fetchMoreMessages());
                a || (m(!1),
                k(!0))
            }
        }
        function C(b, a) {
            s(a)
        }
        function D() {
            i.current != null && i.current.scrollToBottom()
        }
        if (x == null)
            return g.jsx(b("BizInboxDetailViewLoading.react"), {
                height: q
            });
        function E() {
            return g.jsx(b("MessengerState.re").jsComponent, {
                fbid: d,
                children: function(a) {
                    return g.jsx(g.Suspense, {
                        fallback: g.jsx(b("GeoSpinner.react"), {}),
                        children: g.jsx(b("BizInboxMessengerDetailViewMessageList.react"), {
                            composerHeight: r,
                            deliveryTimeStamp: z(a),
                            fetchMoreMessages: B,
                            hasFetchedAll: j,
                            height: q - Math.max(r, b("BizInboxDetailViewConsts").COMPOSER_DEFAULT_HEIGHT),
                            isInitDone: n,
                            isLoading: l,
                            messageList: f,
                            perfLogInstanceKey: t,
                            readReceipts: A(a),
                            ref: i,
                            threadID: v,
                            viewer: d,
                            thread: x
                        })
                    })
                }
            })
        }
        function F() {
            return g.jsx(b("ResponsiveBlock.react"), {
                className: "hrjzkvuo dqh67phm",
                onResize: C,
                children: g.jsx(b("BizInboxMessengerDetailViewComposerContainer.react"), {
                    creatorInfo: c,
                    thread: x,
                    threadID: v,
                    pageID: d,
                    scrollMessageListToBottom: D
                })
            })
        }
        return g.jsx(p, {
            children: g.jsxs("div", {
                className: "kerwu6uh a7ki207s",
                children: [E(), F()]
            })
        })
    }
}
), null);
__d("BizInboxProfilePicConsts", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({
        THREADLIST_ROW_PROFILE_PIC_SIZE: 40,
        IG_THREADLIST_ROW_BADGE_SIZE: 16,
        THREADLIST_ROW_BADGE_SIZE: 14,
        IG_DIRECT_GROUP_PROFILE_RESIZE_FACTOR: 3 / 4,
        SEARCH_CUSTOMER_PROFILE_PIC_SIZE: 32,
        DEFAULT_ADMIN_PROFILE_PIC: "/images/icons/instagram/instagram_default_profile_pic.jpg",
        IG_COMMENT_ROW_PROFILE_PIC_SIZE: 24,
        IG_COMMENT_COMPOSER_SENDER_ICON_SIZE: 32
    });
    e.exports = a
}
), null);
__d("BizInboxProfilePic.react", ["BizInboxImageUtils", "BizInboxProfilePicConsts", "FBLoadShimmer.react", "Image.react", "React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c, d, e = a.commPlatform, f = a.imageURI, h = a.showPlaceholder, i = a.showPlatformBadge;
        function j() {
            var a = e === "INSTAGRAM" || e === "INSTAGRAM_DIRECT" ? b("BizInboxProfilePicConsts").IG_THREADLIST_ROW_BADGE_SIZE : b("BizInboxProfilePicConsts").THREADLIST_ROW_BADGE_SIZE;
            return i ? g.jsx("div", {
                className: "l4r7jweg ombajpry mv6jbsvj oa32sory eopy2srh q6p943cg mzg7rptu rg40d6lt p4aw5k4i kerh7qyq mr8qvzrv pbr7oyhs",
                style: {
                    height: a,
                    width: a
                },
                children: g.jsx(b("Image.react"), {
                    height: a,
                    src: b("BizInboxImageUtils").getBizInboxProfilePicBadgeIcon(e),
                    width: a
                })
            }) : null
        }
        function k(c) {
            var d = a.shape === "square" ? "5%" : "50%";
            if (f != null && f !== "")
                return g.jsx(b("Image.react"), {
                    style: {
                        borderRadius: d
                    },
                    height: c,
                    src: f,
                    width: c
                });
            return h ? g.jsx(b("FBLoadShimmer.react"), {
                height: c,
                style: {
                    borderRadius: d
                },
                width: c
            }) : null
        }
        c = (c = a.imageSize) != null ? c : b("BizInboxProfilePicConsts").THREADLIST_ROW_PROFILE_PIC_SIZE;
        return g.jsxs("div", {
            className: "qgkrvl8a",
            style: {
                width: c,
                height: c
            },
            children: [(d = a.profileElement) != null ? d : k(c), j()]
        })
    }
}
), null);
__d("BizInboxTimeUtils", ["BizInboxDetailViewConsts", "PagesTimeRangeEditorUtilities", "formatDate", "immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    f.getTimeRangesFromJson = a;
    f.getFormatedTime = c;
    f.isTimeInAwayTimeRange = d;
    f.getIsRequestTimeInAwayTimeRange = e;
    f.getTimezoneID = g;
    f.getFormatedDateFromTimestamp = h;
    b("immutable").List;
    function a(a) {
        return b("PagesTimeRangeEditorUtilities").getTimeRangesFromJson(a)
    }
    function c(a, c, d) {
        return b("PagesTimeRangeEditorUtilities").getFormatedTime(a, c, d)
    }
    function d(a, c, d) {
        return b("PagesTimeRangeEditorUtilities").isTimeInAwayTimeRange(a, c, d)
    }
    function e(a, c) {
        return b("PagesTimeRangeEditorUtilities").getIsRequestTimeInAwayTimeRange(a, c)
    }
    function g(a) {
        return b("PagesTimeRangeEditorUtilities").getTimezoneID(a)
    }
    function h(a) {
        return a != null ? b("formatDate")(new Date(a * b("BizInboxDetailViewConsts").MS_IN_S), {
            future: "g:ia",
            today: "g:ia",
            withinWeek: "D g:ia",
            thisYear: "M jS, g:ia",
            older: "m/d/Y g:ia"
        }).replace(/\,[^,]+$/, "") : null
    }
}
), null);
__d("PageCommItemType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        FB_MESSAGE: "FB_MESSAGE",
        FB_PAGE_POST: "FB_PAGE_POST",
        INSTAGRAM_POST: "INSTAGRAM_POST",
        FB_USER_POST: "FB_USER_POST",
        FB_REVIEW: "FB_REVIEW",
        FB_RECOMMENDATION: "FB_RECOMMENDATION",
        FB_PAGE_POST_COMMENT: "FB_PAGE_POST_COMMENT",
        FB_AD_POST: "FB_AD_POST",
        FB_AD_POST_COMMENT: "FB_AD_POST_COMMENT",
        FB_PAGE_POST_REACTION: "FB_PAGE_POST_REACTION",
        FB_USER_POST_REACTION: "FB_USER_POST_REACTION",
        FB_PAGE_POST_COMMENT_REACTION: "FB_PAGE_POST_COMMENT_REACTION",
        FB_USER_POST_COMMENT_REACTION: "FB_USER_POST_COMMENT_REACTION",
        FB_GROUP_POST: "FB_GROUP_POST",
        WEC_MESSAGE: "WEC_MESSAGE",
        IG_MESSAGE: "IG_MESSAGE"
    });
    e.exports = a
}
), null);
__d("BizInboxDetailViewContainer.react", ["BizInboxDetailViewLoading.react", "BizInboxIGDirectDetailViewContainer.react", "BizInboxMessengerDetailViewContainer.react", "BizInboxNavChannel", "BizInboxPostDetailViewContainer.react", "BizInboxStateContext", "CometPagelet.react", "JSResource", "React", "lazyLoadComponent"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React")
      , h = b("lazyLoadComponent")(b("JSResource")("BizInboxLeadEmailDetailViewContainer.react").__setRef("BizInboxDetailViewContainer.react"))
      , i = b("lazyLoadComponent")(b("JSResource")("BizInboxCommerceEmailDetailViewContainer.react").__setRef("BizInboxDetailViewContainer.react"))
      , j = b("lazyLoadComponent")(b("JSResource")("BizInboxAutomatedResponsesDetailContainer.react").__setRef("BizInboxDetailViewContainer.react"));
    function a(a) {
        a = g.useContext(b("BizInboxStateContext"));
        var c = a.creatorInfo
          , d = a.igAccountID
          , e = a.igMailboxID
          , f = a.navChannel
          , k = a.pageID
          , l = a.businessName
          , m = a.selectedThreadID;
        a = a.selectedThreadType;
        if (f === b("BizInboxNavChannel").LEAD_EMAIL)
            return g.jsx(h, {
                pageID: k,
                selectedThreadID: m
            });
        else if (f === b("BizInboxNavChannel").AUTOMATED_RESPONSES)
            return g.jsx(j, {
                businessName: l,
                igAccountID: d,
                pageID: k
            });
        else if (f === b("BizInboxNavChannel").COMMERCE_EMAIL)
            return g.jsx(b("CometPagelet.react").Placeholder, {
                fallback: g.jsx(b("BizInboxDetailViewLoading.react"), {
                    height: null
                }),
                name: "BizP13NInboxCommerceDetailView",
                children: g.jsx(i, {
                    pageID: k
                })
            });
        if (m == null)
            return null;
        if (a === "FB_MESSAGE")
            return g.jsx(b("BizInboxMessengerDetailViewContainer.react"), {
                creatorInfo: c,
                threadID: m,
                pageID: k
            });
        else if (a === "IG_MESSAGE" || f === b("BizInboxNavChannel").INSTAGRAM_DIRECT || f === b("BizInboxNavChannel").ALL)
            return g.jsx(b("BizInboxIGDirectDetailViewContainer.react"), {
                igAccountID: d,
                mailboxID: e,
                pageID: k,
                threadID: m
            });
        else if (a === "FB_PAGE_POST" || a === "INSTAGRAM_POST" || f === b("BizInboxNavChannel").FACEBOOK || f === b("BizInboxNavChannel").INSTAGRAM)
            return g.jsx(g.Suspense, {
                fallback: g.jsx(b("BizInboxDetailViewLoading.react"), {
                    height: null
                }),
                children: g.jsx(b("BizInboxPostDetailViewContainer.react"), {
                    commItemID: m,
                    pageID: k
                })
            });
        else
            return null
    }
}
), null);
__d("BizInboxDetailViewHeaderActionUnit.react", ["BizInboxFbtUtils", "BizInboxImageUtils", "CenteredContainer.react", "GeoButton.react", "Image.react", "React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.actionType;
        a = a.onClick;
        var d = b("BizInboxFbtUtils").getDetailViewHeaderActionUnitLabel(c);
        return g.jsx(b("CenteredContainer.react"), {
            className: "bulhdrbm htdzbb76 l7j52awj fqx7lvqr",
            fullHeight: !0,
            horizontal: !1,
            vertical: !0,
            children: g.jsx(b("GeoButton.react"), {
                icon: g.jsx(b("Image.react"), {
                    src: b("BizInboxImageUtils").getDetailViewHeaderActionUnitIcon(c)
                }),
                isLabelHidden: !0,
                label: d,
                onClick: a,
                tooltip: d
            })
        })
    }
}
), null);
__d("BizInboxDetailViewHeaderAction.react", ["BizInboxDetailViewHeaderActionUnit.react", "BizInboxThreadActionType", "BizInboxThreadDeleteConfirmationDialog.react", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.actionParam
          , d = a.onAction
          , e = a.commPlatform
          , f = a.pageID
          , h = a.threadID;
        a = a.commType;
        var i = g.useState(!1)
          , j = i[0]
          , k = i[1];
        function l(a) {
            var c = [];
            a.showDone && c.push({
                actionType: b("BizInboxThreadActionType").MoveToDone,
                onAction: function() {
                    return d(b("BizInboxThreadActionType").MoveToDone)
                }
            });
            a.showDelete && c.push({
                actionType: b("BizInboxThreadActionType").Delete,
                onAction: function() {
                    return k(!0)
                }
            });
            a.showSpam && c.push({
                actionType: b("BizInboxThreadActionType").MoveToSpam,
                onAction: function() {
                    return d(b("BizInboxThreadActionType").MoveToSpam)
                }
            });
            a.showMarkRead && c.push({
                actionType: b("BizInboxThreadActionType").MarkRead,
                onAction: function() {
                    return d(b("BizInboxThreadActionType").MarkRead)
                }
            });
            a.showMarkUnread && c.push({
                actionType: b("BizInboxThreadActionType").MarkUnread,
                onAction: function() {
                    return d(b("BizInboxThreadActionType").MarkUnread)
                }
            });
            a.showFollowUp && c.push({
                actionType: b("BizInboxThreadActionType").FollowUp,
                onAction: function() {
                    return d(b("BizInboxThreadActionType").FollowUp)
                }
            });
            a.showUnFollowup && c.push({
                actionType: b("BizInboxThreadActionType").UnfollowUp,
                onAction: function() {
                    return d(b("BizInboxThreadActionType").UnfollowUp)
                }
            });
            a.showInbox && c.push({
                actionType: b("BizInboxThreadActionType").MoveToMain,
                onAction: function() {
                    return d(b("BizInboxThreadActionType").MoveToMain)
                }
            });
            return c
        }
        i = l(c);
        return g.jsxs(g.Fragment, {
            children: [i.map(function(a) {
                var c = a.actionType;
                a = a.onAction;
                return g.jsx(b("BizInboxDetailViewHeaderActionUnit.react"), {
                    actionType: c,
                    onClick: a
                }, c)
            }), g.jsx(b("BizInboxThreadDeleteConfirmationDialog.react"), {
                commPlatform: e,
                isShown: j,
                onHide: function() {
                    return k(!1)
                },
                onConfirm: function() {
                    return d(b("BizInboxThreadActionType").Delete)
                },
                pageID: f,
                threadID: h,
                commType: a
            })]
        })
    }
}
), null);
__d("BizInboxThreadlistConsts", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({
        MESSAGE_THREAD_INIT_COUNT: 20,
        MESSAGE_THREAD_LOAD_MORE_COUNT: 20,
        COMMENT_THREAD_INIT_COUNT: 20,
        COMMENT_THREAD_LOAD_MORE_COUNT: 20,
        SEARCH_THREAD_INIT_COUNT: 20,
        SEARCH_THREAD_LOAD_MORE_COUNT: 20,
        COMMENT_THREAD_FALLBACK_TITLE: "Facebook User",
        MS_IN_S: 1e3,
        MAX_SEARCH_TOKEN_LENGTH_BEFORE_TRUNCATE: 29
    });
    e.exports = a
}
), null);
__d("BizInboxDetailViewHeaderLayout.react", ["CenteredContainer.react", "Layout.react", "LayoutColumn.react", "LayoutFillColumn.react", "React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        return g.jsxs(b("Layout.react"), {
            className: "q3n6uzp4 cbjrbuyd p1tdmthr h9qvemyd pbr7oyhs",
            children: [g.jsx(b("LayoutColumn.react"), {
                children: g.jsx(b("CenteredContainer.react"), {
                    className: "nt9q7nv0 izp82rkn",
                    fullHeight: !0,
                    horizontal: !1,
                    vertical: !0,
                    children: a.profilePicSection
                })
            }), g.jsx(b("LayoutFillColumn.react"), {
                children: g.jsxs(b("CenteredContainer.react"), {
                    className: "gycka5e1 hv5sxe7k",
                    fullHeight: !0,
                    horizontal: !1,
                    vertical: !0,
                    children: [a.titleSection, a.adminAssignerSection]
                })
            }), g.jsx(b("LayoutColumn.react"), {
                children: a.actionUnitsSection
            })]
        })
    }
}
), null);
__d("BizInboxCommentDetailViewHeader.react", ["BIZInboxClientLogger", "BizInboxCommentActionContainer.react", "BizInboxCommentDetailViewHeaderFacebookTitle.react", "BizInboxCommentDetailViewHeaderInstagramTitle.react", "BizInboxDetailViewHeaderAction.react", "BizInboxDetailViewHeaderLayout.react", "BizInboxProfilePic.react", "BoostedComponentAppID", "BoostedComponentDialogButtonV2Wrapper.react", "PageCommItemStatusUtil", "React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.activeFolder
          , d = a.commItemID
          , e = a.commPlatform
          , f = a.commTitle
          , h = a.commType
          , i = a.commStatus
          , j = a.commSourceID
          , k = a.isDelegatePage
          , l = a.isRead
          , m = a.pageID
          , n = a.targetID
          , o = a.thumbnailUri
          , p = a.onSelectThread;
        g.useEffect(function() {
            b("BIZInboxClientLogger").logHeaderViewRenderView(m, e, d, h, "show_p13n")
        }, [m, e, d, h]);
        function q() {
            if (e === "FACEBOOK")
                return g.jsx(b("BizInboxCommentDetailViewHeaderFacebookTitle.react"), {
                    commTitle: f,
                    postID: n
                });
            else if (e === "INSTAGRAM")
                return g.jsx(b("BizInboxCommentDetailViewHeaderInstagramTitle.react"), {
                    commTitle: f,
                    postID: j
                });
            return null
        }
        function r() {
            return e !== "FACEBOOK" ? null : g.jsx("div", {
                className: "htdzbb76 b69nj7vu",
                "data-testid": void 0,
                children: g.jsx(b("BoostedComponentDialogButtonV2Wrapper.react"), {
                    appID: b("BoostedComponentAppID").BOOSTED_POST,
                    pageID: m,
                    placement: "pages-inbox",
                    shouldAutoOpenCoBDialog: Boolean(k),
                    targetID: j
                })
            })
        }
        function s() {
            var a = b("PageCommItemStatusUtil").getActionParam(e, c, !1, {
                comm_status: i,
                is_read: l
            });
            return g.jsxs(g.Fragment, {
                children: [r(), g.jsx(b("BizInboxCommentActionContainer.react"), {
                    actionParam: a,
                    activeFolder: c,
                    pageID: m,
                    commItemID: d,
                    commPlatform: e,
                    commStatus: i,
                    childActionClass: b("BizInboxDetailViewHeaderAction.react"),
                    onSelectThread: p,
                    commType: h
                })]
            })
        }
        return g.jsx(b("BizInboxDetailViewHeaderLayout.react"), {
            profilePicSection: g.jsx(b("BizInboxProfilePic.react"), {
                commPlatform: e,
                imageURI: o,
                shape: "square",
                showPlaceholder: !0,
                showPlatformBadge: !1
            }),
            titleSection: q(),
            actionUnitsSection: s()
        })
    }
}
), null);
__d("BizInboxDetailViewHeaderLoading.react", ["React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a() {
        return g.jsx("div", {
            className: "dc28izrs qhea088j q3n6uzp4 cbjrbuyd p1tdmthr h9qvemyd pbr7oyhs",
            children: g.jsxs("div", {
                className: "qgkrvl8a b6h71609 h6swc0wa dc28izrs qhea088j bbzut9d9 kzpzqbg6 oozrexbl erqwis2y v8omg7ia",
                children: [g.jsx("div", {
                    className: "ombajpry qbql7dz2 ifvjsowe ftf5yv0w r407yoew tv8rbhd1 pbr7oyhs"
                }), g.jsx("div", {
                    className: "ombajpry ifvjsowe fpkgdl6c e3c08ntm jp298z0g pbr7oyhs"
                }), g.jsx("div", {
                    className: "ombajpry awqsf20y fpkgdl6c fals8mp6 g9ysj2a4 pbr7oyhs"
                }), g.jsx("div", {
                    className: "ombajpry i4390vme fpkgdl6c e3c08ntm rcxawlqe pbr7oyhs"
                }), g.jsx("div", {
                    className: "ombajpry dhb7ugix fpkgdl6c e3c08ntm rcxawlqe pbr7oyhs"
                }), g.jsx("div", {
                    className: "ombajpry edsi347r fpkgdl6c khgkq6dl fbqq29mr pbr7oyhs"
                })]
            })
        })
    }
}
), null);
__d("BizInboxProfilePicIGDirect.react", ["BizInboxProfilePic.react", "BizInboxProfilePicConsts", "Image.react", "React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c, d, e = a.thread;
        a = a.showPlatformBadge;
        c = (c = e == null ? void 0 : (c = e.thread_users) == null ? void 0 : c.nodes.length) != null ? c : 0;
        d = c >= 2 ? e == null ? void 0 : (d = e.thread_users) == null ? void 0 : (d = d.nodes[1].profile_picture) == null ? void 0 : d.uri : e == null ? void 0 : (d = e.thread_users) == null ? void 0 : (d = d.nodes[0].profile_picture) == null ? void 0 : d.uri;
        f = c > 2 ? f(d, e == null ? void 0 : (f = e.thread_users) == null ? void 0 : (e = f.nodes[c - 1].profile_picture) == null ? void 0 : e.uri) : null;
        function f(a, c) {
            var d = b("BizInboxProfilePicConsts").THREADLIST_ROW_PROFILE_PIC_SIZE * b("BizInboxProfilePicConsts").IG_DIRECT_GROUP_PROFILE_RESIZE_FACTOR;
            return g.jsx("div", {
                className: "qgkrvl8a",
                children: [g.jsx(b("Image.react"), {
                    className: "oa32sory eopy2srh q6p943cg mzg7rptu hcup6su4 ombajpry imu4621j",
                    height: d,
                    src: a,
                    width: d
                }, 0), g.jsx(b("Image.react"), {
                    className: "oa32sory eopy2srh q6p943cg mzg7rptu c10tu51q ombajpry mexpujpy bpicwl16 rdwpk2sy tinp4yrx mlr3vhe0",
                    height: d,
                    src: c,
                    width: d
                }, 1)]
            })
        }
        return g.jsx(b("BizInboxProfilePic.react"), {
            commPlatform: "INSTAGRAM_DIRECT",
            imageURI: d,
            profileElement: f,
            showPlaceholder: !0,
            showPlatformBadge: a
        })
    }
}
), null);
__d("BizInboxIGDirectDetailViewHeader.react", ["BIZInboxClientLogger", "BizInboxDetailViewHeaderAction.react", "BizInboxDetailViewHeaderLayout.react", "BizInboxDetailViewHeaderLoading.react", "BizInboxFilterContext", "BizInboxIGDirectActionContainer.react", "BizInboxIGDirectAdminAssignerContainer.react", "BizInboxProfilePicIGDirect.react", "BizInboxThreadActionType", "FluxHooks", "GeoHeading.react", "IGMessageDataMutateAction", "IGMessageInboxStore", "IGMessageServerActions", "LineClamp.react", "LoadObject", "PageCommItemFolder", "PageCommItemStatusUtil", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.threadID
          , d = a.mailboxID
          , e = a.onSelectThread;
        a = g.useContext(b("BizInboxFilterContext"));
        var f = a.activeFolder;
        a = b("FluxHooks").useFluxStore(b("IGMessageInboxStore"), g.useCallback(function(a) {
            if (d == null || d === "" || c == null)
                return {
                    threadLoadObject: b("LoadObject").empty()
                };
            a = a.getThread(d, c, 1, null, !1);
            return {
                threadLoadObject: a
            }
        }, [d, c]));
        a = a.threadLoadObject;
        var h = a.getValue()
          , i = h == null ? void 0 : h.thread_id;
        g.useEffect(function() {
            i != null && b("BIZInboxClientLogger").logHeaderViewRenderView(d, "INSTAGRAM_DIRECT", i, "IG_MESSAGE", "show_p13n")
        }, [i, d]);
        if (h == null)
            return g.jsx(b("BizInboxDetailViewHeaderLoading.react"), {});
        function j() {
            var a;
            a = (a = h == null ? void 0 : (a = h.thread_users) == null ? void 0 : a.nodes.length) != null ? a : 0;
            a = a > 2 ? h.thread_title : a == 2 ? h == null ? void 0 : (a = h.thread_users) == null ? void 0 : a.nodes[1].username : h == null ? void 0 : (a = h.thread_users) == null ? void 0 : a.nodes[0].username;
            return a == null ? null : g.jsx(b("LineClamp.react"), {
                lines: 1,
                children: g.jsx(b("GeoHeading.react"), {
                    level: 3,
                    children: a
                })
            })
        }
        function k() {
            if (d == null || c == null)
                return;
            var a = b("PageCommItemStatusUtil").getActionParam("INSTAGRAM_DIRECT", f, !0, h);
            return g.jsx(b("BizInboxIGDirectActionContainer.react"), {
                actionParam: a,
                activeFolder: f,
                mailboxID: d,
                threadID: c,
                childActionClass: b("BizInboxDetailViewHeaderAction.react"),
                onSelectThread: e
            })
        }
        function l() {
            return d == null || c == null ? null : g.jsx(b("BizInboxIGDirectAdminAssignerContainer.react"), {
                mailboxID: d,
                thread: h,
                threadID: c
            })
        }
        return g.jsx(b("BizInboxDetailViewHeaderLayout.react"), {
            profilePicSection: g.jsx(b("BizInboxProfilePicIGDirect.react"), {
                thread: h,
                showPlatformBadge: !1
            }),
            titleSection: j(),
            actionUnitsSection: k(),
            adminAssignerSection: l()
        })
    }
}
), null);
__d("BizInboxMessengerDetailViewHeader.react", ["BIZInboxClientLogger", "BizInboxDetailViewHeaderAction.react", "BizInboxDetailViewHeaderLayout.react", "BizInboxDetailViewHeaderLoading.react", "BizInboxFilterContext", "BizInboxMessengerActionContainer.react", "BizInboxMessengerAdminAssignerContainer.react", "BizInboxProfilePic.react", "LineClamp.react", "MercuryIDs", "MercuryThreadTitleSafe.react", "MessengerParticipantsImages.re", "PageCommItemStatusUtil", "React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = g.useState(null)
          , d = c[0]
          , e = c[1];
        c = g.useContext(b("BizInboxFilterContext"));
        var f = c.activeFolder
          , h = a.thread
          , i = a.pageID
          , j = a.onSelectThread;
        g.useEffect(function() {
            if (h != null) {
                var a = h.participants.filter(function(a) {
                    return b("MercuryIDs").getUserIDFromParticipantID(a) !== i
                });
                a.length === 0 && h.participants.length > 0 && (a = h.participants.slice(0, 1));
                b("MessengerParticipantsImages.re").getOrderedBigImageMulti(a, function(a) {
                    e(a[0])
                });
                b("BIZInboxClientLogger").logHeaderViewRenderView(i, "MESSENGER", h.thread_fbid, "FB_MESSAGE", "show_p13n")
            }
        }, [h, i]);
        if (h == null)
            return g.jsx(b("BizInboxDetailViewHeaderLoading.react"), {});
        function k() {
            var a = b("PageCommItemStatusUtil").getActionParam("MESSENGER", f, !0, h);
            return g.jsx(b("BizInboxMessengerActionContainer.react"), {
                actionParam: a,
                thread: h,
                pageID: i,
                onSelectThread: j,
                childActionClass: b("BizInboxDetailViewHeaderAction.react")
            })
        }
        function l() {
            return g.jsx(b("LineClamp.react"), {
                lines: 1,
                children: g.jsx(b("MercuryThreadTitleSafe.react"), {
                    className: "c04nxgez a2qhav0c clmv24zt ke516q2c llizwoc6 mlcdaenv",
                    thread: h,
                    viewer: i
                })
            })
        }
        function m() {
            return g.jsx(b("BizInboxMessengerAdminAssignerContainer.react"), {
                thread: h
            })
        }
        return g.jsx(b("BizInboxDetailViewHeaderLayout.react"), {
            profilePicSection: g.jsx(b("BizInboxProfilePic.react"), {
                commPlatform: "MESSENGER",
                imageURI: d,
                showPlaceholder: !0,
                showPlatformBadge: !1
            }),
            titleSection: l(),
            actionUnitsSection: k(),
            adminAssignerSection: m()
        })
    }
}
), null);
__d("BizInboxDetailViewHeader.react", ["BizInboxCommentDetailViewHeaderContainer.react", "BizInboxDetailViewHeaderLoading.react", "BizInboxFilterContext", "BizInboxIGDirectDetailViewHeader.react", "BizInboxMessengerDetailViewHeaderContainer.react", "BizInboxNavChannel", "BizInboxStateContext", "React", "bizInboxStateThreadReducer", "stylex", "useBizInboxStateReducers"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a() {
        var a = g.useContext(b("BizInboxStateContext"))
          , c = a.igMailboxID
          , d = a.isDelegatePage
          , e = a.navChannel
          , f = a.pageID
          , h = a.selectedThreadID;
        a = a.selectedThreadType;
        var i = g.useContext(b("BizInboxFilterContext"));
        i = i.activeFolder;
        var j = b("useBizInboxStateReducers")([b("bizInboxStateThreadReducer")]);
        if (h == null)
            return null;
        function k(a, b) {
            j({
                threadID: a,
                threadType: b,
                type: "thread.select"
            })
        }
        var l = null;
        a === "FB_MESSAGE" ? l = g.jsx(b("BizInboxMessengerDetailViewHeaderContainer.react"), {
            pageID: f,
            selectedThreadID: h,
            onSelectThread: k
        }) : a === "IG_MESSAGE" || e === b("BizInboxNavChannel").INSTAGRAM_DIRECT || e === b("BizInboxNavChannel").ALL ? l = g.jsx(b("BizInboxIGDirectDetailViewHeader.react"), {
            threadID: h,
            mailboxID: c,
            onSelectThread: k
        }) : (e === b("BizInboxNavChannel").FACEBOOK || e === b("BizInboxNavChannel").INSTAGRAM) && (l = g.jsx(g.Suspense, {
            fallback: g.jsx(b("BizInboxDetailViewHeaderLoading.react"), {}),
            children: g.jsx(b("BizInboxCommentDetailViewHeaderContainer.react"), {
                activeFolder: i,
                isDelegatePage: d,
                pageID: f,
                threadID: h,
                onSelectThread: k
            })
        }));
        return l == null ? null : g.jsxs("div", {
            className: "o5fgu4ws",
            children: [" ", l, " "]
        })
    }
}
), null);
__d("BizInboxFilterDispatcherContext", ["React", "emptyFunction"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext(b("emptyFunction"));
    d = c;
    e.exports = d
}
), null);
__d("BizInboxFilterReducerContext", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext({
        current: new Map()
    });
    d = c;
    e.exports = d
}
), null);
__d("bizInboxFilterCombinedReducer", [], (function(a, b, c, d, e, f) {
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
__d("BizInboxFilterContextProvider", ["BizInboxFilterContext", "BizInboxFilterDispatcherContext", "BizInboxFilterReducerContext", "PageCommItemFolder", "React", "bizInboxFilterCombinedReducer"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = {
            activeFolder: b("PageCommItemFolder").TODO,
            isFolderChangeActive: !1,
            isFilterChangeActive: !1,
            isSearchActive: !1,
            searchTerm: "",
            searchType: "CUSTOMER",
            selectedAdmin: {
                id: null,
                photoURL: null,
                name: null
            },
            selectedCustomerID: null,
            searchLabels: []
        }
          , d = g.useRef(new Map())
          , e = g.useMemo(function() {
            return b("bizInboxFilterCombinedReducer")(d)
        }, []);
        e = g.useReducer(e, c);
        c = e[0];
        e = e[1];
        return g.jsx(b("BizInboxFilterReducerContext").Provider, {
            value: d,
            children: g.jsx(b("BizInboxFilterContext").Provider, {
                value: c,
                children: g.jsx(b("BizInboxFilterDispatcherContext").Provider, {
                    value: e,
                    children: a.children
                })
            })
        })
    }
}
), null);
__d("BizInboxNavChannelUtils", ["BizInboxNavChannel"], (function(a, b, c, d, e, f) {
    "use strict";
    f.isMessagingChannel = a;
    function a(a) {
        return a === b("BizInboxNavChannel").ALL || a === b("BizInboxNavChannel").MESSENGER || a === b("BizInboxNavChannel").INSTAGRAM_DIRECT
    }
}
), null);
__d("BizInboxFolderUtils", ["PageCommItemFolder", "PageCommItemStatusUtil"], (function(a, b, c, d, e, f) {
    "use strict";
    f.getInboxFolders = a;
    f.getInboxFilters = c;
    f.getIsFilter = d;
    f.getLabel = e;
    f.getFolderImage = g;
    f.getFolderLabel = h;
    f.getFolderColor = i;
    f.getFolderStatus = j;
    f.getThreadsManagementStatus = k;
    f.convertToIGDirectFolder = l;
    f.getThreadListActionParam = m;
    function a() {
        var a = [b("PageCommItemFolder").TODO, b("PageCommItemFolder").DONE, b("PageCommItemFolder").SPAM];
        return a
    }
    function c() {
        var a = [b("PageCommItemFolder").FOLLOW_UP, b("PageCommItemFolder").UNREAD];
        return a
    }
    function d(a) {
        return b("PageCommItemStatusUtil").getIsFilter(a)
    }
    function e(a) {
        return b("PageCommItemStatusUtil").getLabel(a)
    }
    function g(a) {
        return b("PageCommItemStatusUtil").getFolderImage(a)
    }
    function h(a) {
        return b("PageCommItemStatusUtil").getLabel(a)
    }
    function i(a) {
        return b("PageCommItemStatusUtil").getFolderColor(a)
    }
    function j(a) {
        return b("PageCommItemStatusUtil").getFolderStatus(a)
    }
    function k(a) {
        return b("PageCommItemStatusUtil").getThreadsManagementStatus(a)
    }
    function l(a) {
        return b("PageCommItemStatusUtil").getIGDirectFolder(a)
    }
    a = function(a) {
        return a === "NONE" ? "0" : a
    }
    ;
    f.getIGDirectAdminID = a;
    function m(a, c) {
        var d = a === b("PageCommItemFolder").TODO || a === b("PageCommItemFolder").UNREAD || a === b("PageCommItemFolder").FOLLOW_UP
          , e = (a === b("PageCommItemFolder").TODO || a === b("PageCommItemFolder").UNREAD) && !c
          , f = c && (a === b("PageCommItemFolder").DONE || a === b("PageCommItemFolder").SPAM);
        c = c && a !== b("PageCommItemFolder").DONE && a !== b("PageCommItemFolder").SPAM;
        return {
            showDone: d,
            showFollowUp: e,
            showInbox: f,
            showUnFollowup: c,
            showMarkRead: !1,
            showMarkUnread: !1,
            showSpam: !1,
            showDelete: !1,
            showMore: !1
        }
    }
}
), null);
__d("bizInboxFilterFolderReducer", ["BizInboxFolderUtils", "BizInboxNavChannel", "BizInboxThreadlistConsts", "FBImmer", "IGMessageDataMutateAction", "PageCommItemFolder"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c) {
        a = b("FBImmer").produce(a, function(a) {
            var b;
            switch (c.type) {
            case "active_folder.update":
                a.activeFolder = c.activeFolder;
                g(c.activeFolder, c.igMailboxID, c.navChannel, null);
                break;
            case "is_folder_change_active.toggle":
                a.isFolderChangeActive = c.isFolderChangeActive;
                break;
            case "is_filter_change_active.toggle":
                a.isFilterChangeActive = c.isFilterChangeActive;
                break;
            case "search.update":
                if (((b = c.selectedAdmin) == null ? void 0 : b.id) !== a.selectedAdmin.id) {
                    g(a.activeFolder, c.igMailboxID, c.navChannel, (b = c.selectedAdmin) == null ? void 0 : b.id)
                }
                c.isSearchActive != null && (a.isSearchActive = c.isSearchActive);
                c.searchTerm != null && (a.searchTerm = c.searchTerm);
                c.searchType != null && (a.searchType = c.searchType);
                c.selectedAdmin != null && (a.selectedAdmin = c.selectedAdmin);
                break;
            case "search.clear":
                a.isSearchActive = !1;
                a.searchTerm = "";
                a.searchType = "LABEL";
                a.searchLabels = [];
                a.selectedAdmin = {
                    id: null,
                    name: null,
                    photoURL: null
                };
                a.selectedCustomerID = null;
                break;
            case "search.select_label":
                b = a.searchLabels.findIndex(function(a) {
                    return a.name === c.label.name
                });
                b < 0 && a.searchLabels.push(c.label);
                a.searchTerm = "";
                break;
            case "search.remove_label":
                b = a.searchLabels.findIndex(function(a) {
                    return a.name === c.label.name
                });
                b >= 0 && a.searchLabels.splice(b, 1);
                break;
            case "search.select_customer":
                a.selectedCustomerID = c.customerID;
                a.searchTerm = c.customerName;
                a.searchType = "CUSTOMER";
                break;
            case "search.select_messenger_content":
                a.searchType = "CONTENT"
            }
        });
        return a
    }
    function g(a, c, d, e) {
        c != null && (d === b("BizInboxNavChannel").INSTAGRAM_DIRECT || d === b("BizInboxNavChannel").ALL) && b("IGMessageDataMutateAction").forceFetchInbox(c, b("BizInboxThreadlistConsts").MESSAGE_THREAD_INIT_COUNT, b("BizInboxFolderUtils").convertToIGDirectFolder(a), a === b("PageCommItemFolder").FOLLOW_UP, a === b("PageCommItemFolder").UNREAD, b("BizInboxFolderUtils").getIGDirectAdminID(e))
    }
}
), null);
__d("bizInboxStateNavChannelReducer", ["FBImmer"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c) {
        a = b("FBImmer").produce(a, function(a) {
            switch (c.type) {
            case "nav_channel.update":
                a.navChannel = c.navChannel;
                a.selectedThreadID = null;
                a.selectedThreadType = null;
                break
            }
        });
        return a
    }
}
), null);
__d("useBizInboxFilterReducers", ["BizInboxFilterDispatcherContext", "BizInboxFilterReducerContext", "React", "useContextRef"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function h(a) {
        return b("useContextRef")(a, b("BizInboxFilterReducerContext"))
    }
    function a(a) {
        a.forEach(h);
        return g.useContext(b("BizInboxFilterDispatcherContext"))
    }
}
), null);
__d("BizInboxLayout.react", ["AdsInterfacesRouter", "BIZInboxClientLogger", "BizInboxNavChannel", "BizInboxNavChannelUtils", "BizInboxNuxContainerWrapper.react", "BizInboxStateContext", "BizKitErrorBoundary.react", "BizKitRouteContext", "BizKitUnifiedRoutingUtils", "GeoPage.react", "GeoPageCard.react", "GeoPageSection.react", "GeoPageTemplate.react", "Layout.react", "LayoutColumn.react", "LayoutFillColumn.react", "PageCommItemFolder", "React", "bizInboxFilterFolderReducer", "bizInboxStateNavChannelReducer", "nullthrows", "stylex", "useBizInboxFilterReducers", "useBizInboxStateReducers"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = g.useContext(b("BizKitRouteContext"))
          , d = c.routeName;
        c = g.useContext(b("BizInboxStateContext"));
        var e = c.pageID
          , f = c.igMailboxID;
        c = c.navChannel;
        var h = b("useBizInboxStateReducers")([b("bizInboxStateNavChannelReducer")])
          , i = b("useBizInboxFilterReducers")([b("bizInboxFilterFolderReducer")]);
        g.useEffect(function() {
            switch (d) {
            case b("BizInboxNavChannel").ALL:
            case b("BizInboxNavChannel").MESSENGER:
            case b("BizInboxNavChannel").INSTAGRAM_DIRECT:
            case b("BizInboxNavChannel").FACEBOOK:
            case b("BizInboxNavChannel").INSTAGRAM:
            case b("BizInboxNavChannel").AUTOMATED_RESPONSES:
            case b("BizInboxNavChannel").COMMERCE_EMAIL:
            case b("BizInboxNavChannel").EMAIL_CAMPAIGN:
            case b("BizInboxNavChannel").LEAD_EMAIL:
            case b("BizInboxNavChannel").CONTACTS:
                if (d != null) {
                    var a = b("BizInboxNavChannel")[d];
                    h({
                        navChannel: a,
                        type: "nav_channel.update"
                    });
                    i({
                        activeFolder: b("PageCommItemFolder").TODO,
                        igMailboxID: f,
                        navChannel: a,
                        type: "active_folder.update"
                    });
                    i({
                        type: "search.clear"
                    });
                    b("BIZInboxClientLogger").logPlatformClickP13N(e, d, "show_p13n")
                }
                break;
            case b("BizInboxNavChannel").INBOX:
                b("AdsInterfacesRouter").get().navigateTo(b("nullthrows")(b("BizKitUnifiedRoutingUtils").getBizKitUnifiedRouteName("ALL")));
                break
            }
        }, [e, h, d, f, i]);
        var j = b("BizInboxNavChannelUtils").isMessagingChannel(c)
          , k = null;
        switch (c) {
        case b("BizInboxNavChannel").ALL:
            k = "unified_thread_list";
            break;
        case b("BizInboxNavChannel").MESSENGER:
            k = "messenger_thread_list";
            break;
        case b("BizInboxNavChannel").INSTAGRAM_DIRECT:
            k = "ig_direct_thread_list";
            break;
        case b("BizInboxNavChannel").FACEBOOK:
        case b("BizInboxNavChannel").INSTAGRAM:
            k = "post_thread_list";
            break
        }
        return g.jsx(b("GeoPageTemplate.react"), {
            children: g.jsx(b("GeoPage.react"), {
                columns: 12,
                isFullwidth: !1,
                grow: "fill",
                header: g.jsx(b("BizKitErrorBoundary.react"), {
                    fallback: null,
                    children: g.jsx(g.Suspense, {
                        fallback: null,
                        children: g.jsx(b("BizInboxNuxContainerWrapper.react"), {
                            nuxName: "business_inbox_go_to_home_banner"
                        })
                    })
                }),
                children: g.jsxs(b("GeoPageSection.react"), {
                    grow: "fill",
                    children: [g.jsx(b("GeoPageCard.react"), {
                        columns: j ? 9 : 12,
                        children: g.jsxs(b("Layout.react"), {
                            className: "qgkrvl8a kerwu6uh",
                            children: [g.jsx(b("LayoutColumn.react"), {
                                className: "okoo9ckb kerwu6uh dx5kg9rc",
                                "data-testID": k,
                                children: a.listSection
                            }), g.jsxs(b("LayoutFillColumn.react"), {
                                className: "c9u42y9j kerwu6uh s9qjfyj3 szxkbqsu",
                                children: [g.jsx("div", {
                                    className: "mw5g1c1c hwr6m2s2 i4jjxjce",
                                    children: a.headerSection
                                }), g.jsx("div", {
                                    className: "a7ki207s mw5g1c1c ej07eepw l3jzd74o",
                                    children: a.detailSection
                                })]
                            })]
                        })
                    }), j ? g.jsx(b("GeoPageCard.react"), {
                        columns: 3,
                        children: g.jsx("div", {
                            align: "center",
                            className: "kerwu6uh ifvjsowe fpkgdl6c qgkrvl8a q995hi98 ohaildw4",
                            children: a.contextCardSection
                        })
                    }) : null]
                })
            })
        })
    }
}
), null);
/**
 * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
 */
__d("react-virtualized-auto-sizer-1.0.2", ["react-0.0.0"], (function(a, b, c, d, e, f) {
    "use strict";
    function c(a) {
        return a && typeof a === "object" && "default"in a ? a["default"] : a
    }
    var g = c(b("react-0.0.0"));
    f = {};
    var h = {
        exports: f
    };
    function i() {
        var b = g();
        function c(b) {
            var c;
            typeof window !== "undefined" ? c = window : typeof self !== "undefined" ? c = self : c = a;
            var d = typeof document !== "undefined" && document.attachEvent;
            if (!d) {
                var e = function() {
                    var a = c.requestAnimationFrame || c.mozRequestAnimationFrame || c.webkitRequestAnimationFrame || function(a) {
                        return c.setTimeout(a, 20)
                    }
                    ;
                    return function(b) {
                        return a(b)
                    }
                }(), f = function() {
                    var a = c.cancelAnimationFrame || c.mozCancelAnimationFrame || c.webkitCancelAnimationFrame || c.clearTimeout;
                    return function(b) {
                        return a(b)
                    }
                }(), g = function(a) {
                    a = a.__resizeTriggers__;
                    var b = a.firstElementChild;
                    a = a.lastElementChild;
                    var c = b.firstElementChild;
                    a.scrollLeft = a.scrollWidth;
                    a.scrollTop = a.scrollHeight;
                    c.style.width = b.offsetWidth + 1 + "px";
                    c.style.height = b.offsetHeight + 1 + "px";
                    b.scrollLeft = b.scrollWidth;
                    b.scrollTop = b.scrollHeight
                }, h = function(a) {
                    return a.offsetWidth != a.__resizeLast__.width || a.offsetHeight != a.__resizeLast__.height
                }, i = function(a) {
                    if (a.target.className.indexOf("contract-trigger") < 0 && a.target.className.indexOf("expand-trigger") < 0)
                        return;
                    var b = this;
                    g(this);
                    this.__resizeRAF__ && f(this.__resizeRAF__);
                    this.__resizeRAF__ = e(function() {
                        h(b) && (b.__resizeLast__.width = b.offsetWidth,
                        b.__resizeLast__.height = b.offsetHeight,
                        b.__resizeListeners__.forEach(function(c) {
                            c.call(b, a)
                        }))
                    })
                }, j = !1, k = "", l = "animationstart", m = "Webkit Moz O ms".split(" "), n = "webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "), o, p = document.createElement("fakeelement");
                p.style.animationName !== void 0 && (j = !0);
                if (j === !1)
                    for (var q = 0; q < m.length; q++)
                        if (p.style[m[q] + "AnimationName"] !== void 0) {
                            o = m[q];
                            k = "-" + o.toLowerCase() + "-";
                            l = n[q];
                            j = !0;
                            break
                        }
                var r = "resizeanim"
                  , s = "@" + k + "keyframes " + r + " { from { opacity: 0; } to { opacity: 0; } } "
                  , t = k + "animation: 1ms " + r + "; "
            }
            var u = function(a) {
                if (!a.getElementById("detectElementResize")) {
                    var c = (s ? s : "") + ".resize-triggers { " + (t ? t : "") + 'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }'
                      , d = a.head || a.getElementsByTagName("head")[0]
                      , e = a.createElement("style");
                    e.id = "detectElementResize";
                    e.type = "text/css";
                    b != null && e.setAttribute("nonce", b);
                    e.styleSheet ? e.styleSheet.cssText = c : e.appendChild(a.createTextNode(c));
                    d.appendChild(e)
                }
            };
            o = function(a, b) {
                if (d)
                    a.attachEvent("onresize", b);
                else {
                    if (!a.__resizeTriggers__) {
                        var e = a.ownerDocument
                          , f = c.getComputedStyle(a);
                        f && f.position == "static" && (a.style.position = "relative");
                        u(e);
                        a.__resizeLast__ = {};
                        a.__resizeListeners__ = [];
                        (a.__resizeTriggers__ = e.createElement("div")).className = "resize-triggers";
                        a.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>';
                        a.appendChild(a.__resizeTriggers__);
                        g(a);
                        a.addEventListener("scroll", i, !0);
                        l && (a.__resizeTriggers__.__animationListener__ = function(b) {
                            b.animationName == r && g(a)
                        }
                        ,
                        a.__resizeTriggers__.addEventListener(l, a.__resizeTriggers__.__animationListener__))
                    }
                    a.__resizeListeners__.push(b)
                }
            }
            ;
            j = function(a, b) {
                if (d)
                    a.detachEvent("onresize", b);
                else {
                    a.__resizeListeners__.splice(a.__resizeListeners__.indexOf(b), 1);
                    if (!a.__resizeListeners__.length) {
                        a.removeEventListener("scroll", i, !0);
                        a.__resizeTriggers__.__animationListener__ && (a.__resizeTriggers__.removeEventListener(l, a.__resizeTriggers__.__animationListener__),
                        a.__resizeTriggers__.__animationListener__ = null);
                        try {
                            a.__resizeTriggers__ = !a.removeChild(a.__resizeTriggers__)
                        } catch (a) {}
                    }
                }
            }
            ;
            return {
                addResizeListener: o,
                removeResizeListener: j
            }
        }
        var d = function(a, b) {
            if (!(a instanceof b))
                throw new TypeError("Cannot call a class as a function")
        }
          , e = function() {
            function a(a, b) {
                for (var c = 0; c < b.length; c++) {
                    var d = b[c];
                    d.enumerable = d.enumerable || !1;
                    d.configurable = !0;
                    "value"in d && (d.writable = !0);
                    Object.defineProperty(a, d.key, d)
                }
            }
            return function(b, c, d) {
                c && a(b.prototype, c);
                d && a(b, d);
                return b
            }
        }()
          , f = Object.assign || function(a) {
            for (var b = 1; b < arguments.length; b++) {
                var c = arguments[b];
                for (var d in c)
                    Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
            }
            return a
        }
          , i = function(a, b) {
            if (typeof b !== "function" && b !== null)
                throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            a.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: a,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            });
            b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
        }
          , j = function(a, b) {
            if (!a)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return b && (typeof b === "object" || typeof b === "function") ? b : a
        }
          , k = function(g) {
            i(a, g);
            function a() {
                var b, c, e, f;
                d(this, a);
                for (var g = arguments.length, h = Array(g), i = 0; i < g; i++)
                    h[i] = arguments[i];
                return f = (c = (e = j(this, (b = a.__proto__ || Object.getPrototypeOf(a)).call.apply(b, [this].concat(h))),
                e),
                e.state = {
                    height: e.props.defaultHeight || 0,
                    width: e.props.defaultWidth || 0
                },
                e._onResize = function() {
                    var a = e.props
                      , b = a.disableHeight
                      , c = a.disableWidth;
                    a = a.onResize;
                    if (e._parentNode) {
                        var d = e._parentNode.offsetHeight || 0
                          , f = e._parentNode.offsetWidth || 0
                          , g = window.getComputedStyle(e._parentNode) || {}
                          , h = parseInt(g.paddingLeft, 10) || 0
                          , i = parseInt(g.paddingRight, 10) || 0
                          , j = parseInt(g.paddingTop, 10) || 0;
                        g = parseInt(g.paddingBottom, 10) || 0;
                        var k = d - j - g
                          , l = f - h - i;
                        (!b && e.state.height !== k || !c && e.state.width !== l) && (e.setState({
                            height: d - j - g,
                            width: f - h - i
                        }),
                        a({
                            height: d,
                            width: f
                        }))
                    }
                }
                ,
                e._setRef = function(a) {
                    e._autoSizer = a
                }
                ,
                c),
                j(e, f)
            }
            e(a, [{
                key: "componentDidMount",
                value: function() {
                    var a = this.props.nonce;
                    this._autoSizer && this._autoSizer.parentNode && this._autoSizer.parentNode.ownerDocument && this._autoSizer.parentNode.ownerDocument.defaultView && this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement && (this._parentNode = this._autoSizer.parentNode,
                    this._detectElementResize = c(a),
                    this._detectElementResize.addResizeListener(this._parentNode, this._onResize),
                    this._onResize())
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this._detectElementResize && this._parentNode && this._detectElementResize.removeResizeListener(this._parentNode, this._onResize)
                }
            }, {
                key: "render",
                value: function() {
                    var a = this.props
                      , c = a.children
                      , d = a.className
                      , e = a.disableHeight
                      , g = a.disableWidth;
                    a = a.style;
                    var h = this.state
                      , i = h.height;
                    h = h.width;
                    var j = {
                        overflow: "visible"
                    }
                      , k = {}
                      , l = !1;
                    e || (i === 0 && (l = !0),
                    j.height = 0,
                    k.height = i);
                    g || (h === 0 && (l = !0),
                    j.width = 0,
                    k.width = h);
                    return b.createElement("div", {
                        className: d,
                        ref: this._setRef,
                        style: f({}, j, a)
                    }, !l && c(k))
                }
            }]);
            return a
        }(b.PureComponent);
        k.defaultProps = {
            onResize: function() {},
            disableHeight: !1,
            disableWidth: !1,
            style: {}
        };
        h.exports = k
    }
    var j = !1;
    function k() {
        j || (j = !0,
        i());
        return h.exports
    }
    function d(a) {
        switch (a) {
        case void 0:
            return k()
        }
    }
    e.exports = d
}
), null);
__d("react-virtualized-auto-sizer", ["react-virtualized-auto-sizer-1.0.2"], (function(a, b, c, d, e, f) {
    e.exports = b("react-virtualized-auto-sizer-1.0.2")()
}
), null);
__d("BizInboxLabelConsts", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({
        MAX_STRING_LENGTH: 12,
        MAX_LABEL_COUNT: 2,
        POPOVER_WIDTH: 100,
        ABBREVIATION_DOT: "..."
    });
    e.exports = a
}
), null);
__d("BizInboxThreadlistLabel.react", ["ix", "FlexLayout.react", "Image.react", "React", "Tooltip", "XUICard.react", "asset", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a(a) {
        var c = h.useState(!1)
          , d = c[0]
          , e = c[1];
        function f() {
            e(!0)
        }
        function i() {
            e(!1)
        }
        c = d && a.onRemove ? h.jsx(b("XUICard.react"), {
            className: "kwp11y93 iw8mtwi3 e9ws1cvw oa32sory eopy2srh q6p943cg mzg7rptu",
            style: {
                backgroundColor: "transparent",
                border: "none"
            },
            children: h.jsx(b("Image.react"), {
                onClick: a.onRemove,
                src: g("363583")
            })
        }) : h.jsx("div", {
            className: "kwp11y93 iw8mtwi3 e9ws1cvw oa32sory eopy2srh q6p943cg mzg7rptu",
            style: {
                backgroundColor: "#" + a.color.substring(2),
                border: "none"
            }
        });
        return a.onRemove ? h.jsxs("div", babelHelpers["extends"]({
            className: a.className,
            onMouseEnter: f,
            onMouseLeave: i,
            role: "button",
            tabIndex: "0"
        }, b("Tooltip").propsFor(a.toolTipString), {
            children: [c, a.name]
        })) : h.jsx(b("FlexLayout.react"), {
            align: "center",
            children: h.jsxs("div", babelHelpers["extends"]({
                className: a.className
            }, b("Tooltip").propsFor(a.toolTipString), {
                children: [c, a.name]
            }))
        })
    }
}
), null);
__d("BizInboxThreadlistLabelContainer.react", ["fbt", "BizInboxLabelConsts", "BizInboxThreadlistLabel.react", "GeoInfoTooltip.react", "React", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a(a) {
        var c = []
          , d = []
          , e = h.useRef(null)
          , f = !1;
        a.labels.forEach(function(i, j) {
            if (!i)
                return;
            var k = c;
            j >= b("BizInboxLabelConsts").MAX_LABEL_COUNT && (k = d,
            f || (f = !0,
            c.push(h.jsx("div", {
                className: "o0vkfkqq src66bjv t9ku4g7t gn69r9r7 h8zxt2bb dc28izrs qhea088j e0ypjyp4 dftopcs6 im9k47o1 me31rxa7 q1s5q2it ra6oydaf q1k9c523 szxkbqsu qpxoxizc qa7t2avw o7lfnw66 jnx77p5z ls41ssr7 o2s82znv abfur138 d0g2dnh5 fdlay9lm uwr7o3jg c4ucwr1s",
                children: g._("{number of labels on this thread that are not shown}+ nh\u00e3n kh\u00e1c", [g._param("number of labels on this thread that are not shown", a.labels.length - j)])
            }, a.labels.length), h.jsx("div", {
                className: "i0jzeac6 qgkrvl8a akcicxbm lfxdtrhj",
                ref: e
            }, j))));
            k.push(h.jsx(b("BizInboxThreadlistLabel.react"), {
                className: "o0vkfkqq src66bjv t9ku4g7t gn69r9r7 h8zxt2bb dc28izrs qhea088j e0ypjyp4 dftopcs6 im9k47o1 me31rxa7 q1s5q2it ra6oydaf q1k9c523 szxkbqsu qpxoxizc qa7t2avw o7lfnw66 jnx77p5z ls41ssr7 o2s82znv abfur138 d0g2dnh5 fdlay9lm uwr7o3jg c4ucwr1s",
                color: i.color,
                id: i.id,
                isToken: !1,
                name: i.name.length > b("BizInboxLabelConsts").MAX_STRING_LENGTH ? i.name.substring(0, b("BizInboxLabelConsts").MAX_STRING_LENGTH - 3) + b("BizInboxLabelConsts").ABBREVIATION_DOT : i.name,
                toolTipString: k !== d ? i.name : ""
            }, j))
        });
        return h.jsxs("div", {
            className: "szxkbqsu",
            children: [c, h.jsx(b("GeoInfoTooltip.react"), {
                title: "",
                content: d,
                triggerRef: e
            })]
        })
    }
}
), null);
__d("BizInboxThreadListRow.react", ["ix", "cx", "BizInboxProfilePicConsts", "BizInboxThreadlistLabelContainer.react", "BusinessInboxBizKitUtil", "Focus", "Image.react", "Layout.react", "LineClamp.react", "MercuryThreadTimestampReact.re", "MercuryTimestamp", "PageCommItemFolder", "PageCommItemStatus", "PageCommItemStatusUtil", "React", "Tooltip", "asset"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i = b("React")
      , j = b("Layout.react").Column
      , k = b("Layout.react").FillColumn
      , l = 18
      , m = 18;
    function a(a) {
        var c;
        function d() {
            return "_4k8w _8gcz _75ux" + (a.showActions ? " _5_n1" : "") + (a.isViewing ? " _2tms" : "") + (a.isRead ? "" : " _284c") + (a.shouldAnimate ? " _3_40" : "") + (a.commPlatform === "INSTAGRAM" ? " _5m16" : "") + (a.commPlatform === "FACEBOOK" || a.commPlatform === "MEDIA_MANAGER_FB_COMMS" ? " _5m15" : "") + (a.commPlatform === "MESSENGER" ? " _5m10" : "") + (a.commPlatform === "WEC" ? " _7r_8" : "") + (a.commPlatform === "INSTAGRAM_DIRECT" ? " _6wkq" : "")
        }
        function e() {
            return i.jsx(j, {
                className: "_11eh",
                children: a.profilePicElement
            })
        }
        function f() {
            var c, d;
            if (!a.hasMultipleAdmin)
                return null;
            c = (c = (c = a.messengerItem) == null ? void 0 : (c = c.thread_associated_page_admin) == null ? void 0 : (c = c.profile_picture) == null ? void 0 : c.uri) != null ? c : null;
            d = (d = (d = a.messengerItem) == null ? void 0 : (d = d.thread_associated_page_admin) == null ? void 0 : d.name) != null ? d : null;
            if (a.commPlatform === "INSTAGRAM_DIRECT") {
                var e;
                c = (e = a.igDirectItem) == null ? void 0 : (e = e.assigned_admin) == null ? void 0 : (e = e.profile_picture) == null ? void 0 : e.uri;
                d = (e = a.igDirectItem) == null ? void 0 : (e = e.assigned_admin) == null ? void 0 : e.name
            }
            return d != null ? i.jsxs("span", {
                className: "_4fyc",
                children: [i.jsx(b("Image.react"), babelHelpers["extends"]({
                    className: "_4fyd",
                    src: (e = c) != null ? e : b("BizInboxProfilePicConsts").DEFAULT_ADMIN_PROFILE_PIC
                }, b("Tooltip").propsFor(d))), i.jsx(b("Image.react"), {
                    className: "_4fye",
                    src: g("1216500")
                })]
            }) : null
        }
        function h() {
            var c = a.isRead ? b("BusinessInboxBizKitUtil").maybeApplyGeoTextStyle(a.titleElement) : b("BusinessInboxBizKitUtil").maybeApplyGeoTextBoldStyle(a.titleElement);
            return i.jsxs(k, {
                className: "_284g",
                children: [i.jsx("div", {
                    className: "_4k8x",
                    children: i.jsxs(b("LineClamp.react"), {
                        lineHeight: l,
                        lines: q ? 2 : 1,
                        children: [f(), c]
                    })
                }), i.jsx("div", {
                    className: "_4k8y",
                    children: i.jsx(b("LineClamp.react"), {
                        lineHeight: m,
                        lines: 1,
                        children: b("BusinessInboxBizKitUtil").maybeApplyGeoGreyTextStyle(a.snippetElement, a.isRead)
                    })
                })]
            })
        }
        function n() {
            var c;
            return i.jsxs(j, {
                className: "_11ei",
                children: [i.jsxs("div", {
                    className: "_4ugl",
                    children: [isNaN(a.timestampInMS) ? null : i.jsx("div", {
                        className: "_5hhj",
                        children: b("BusinessInboxBizKitUtil").maybeApplyGeoGreyTextStyle(i.jsx(b("MercuryThreadTimestampReact.re").make, {
                            text: b("MercuryTimestamp").getRelativeTimestamp(a.timestampInMS),
                            time: a.timestampInMS,
                            title: (c = b("MercuryTimestamp").getAbsoluteTimestamp(a.timestampInMS)) != null ? c : void 0
                        }))
                    }), o()]
                }), a.actionUnits]
            })
        }
        function o() {
            var c, d = a.activeFolder === b("PageCommItemFolder").SPAM || a.activeFolder === b("PageCommItemFolder").DONE, e = null;
            a.activeFolder === b("PageCommItemFolder").DONE || a.commStatus === b("PageCommItemStatus").DONE ? e = i.jsx("div", {
                className: "_za4"
            }) : (a.activeFolder === b("PageCommItemFolder").FOLLOW_UP || a.commStatus === b("PageCommItemStatus").FOLLOW_UP || ((c = a.igDirectItem) == null ? void 0 : c.is_follow_up) === !0 && !d) && (a.commPlatform === "MESSENGER" || a.commPlatform === "INSTAGRAM_DIRECT" ? e = i.jsx("div", {
                className: "_i65"
            }) : e = i.jsx("div", {
                className: "_4thl"
            }));
            return i.jsx("div", {
                className: "_za5",
                children: e
            })
        }
        function p() {
            var c;
            return (c = a.footerElement) != null ? c : i.jsx(b("BizInboxThreadlistLabelContainer.react"), {
                labels: a.labels
            })
        }
        var q = a.commType === "FB_GROUP_POST";
        c = "thread_list_row_" + ((c = a.rowIndex) != null ? c : "");
        return i.jsxs("div", {
            className: d(),
            "data-testid": void 0,
            onClick: a.onViewingListItem,
            onMouseDown: function(a) {
                return b("Focus").setWithoutOutline(a.target)
            },
            role: "presentation",
            children: [i.jsxs(b("Layout.react"), {
                className: "_6yv6",
                children: [e(), i.jsxs(k, {
                    children: [h(), n(), p()]
                })]
            }), a.isViewing ? i.jsx("div", {
                className: "_5z5s"
            }) : null, a.shouldAnimate ? i.jsx("div", {
                className: "_3_42",
                style: {
                    backgroundColor: a.commStatus ? b("PageCommItemStatusUtil").getColor(a.commStatus) : void 0
                }
            }) : null]
        })
    }
}
), null);
__d("BizInboxThreadListSpinner.react", ["CenteredContainer.react", "GeoSpinner.react", "React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a() {
        return g.jsx(b("CenteredContainer.react"), {
            className: "ktotyoc7 cai7nl9k",
            vertical: !0,
            children: g.jsx(b("GeoSpinner.react"), {})
        })
    }
}
), null);
__d("BizInboxThreadlistUtils", ["PageCommItemFolder"], (function(a, b, c, d, e, f) {
    "use strict";
    f.getUnifiedThreadList = a;
    f.largeNumberCompare = h;
    f.unescapeText = c;
    var g = "000";
    function a(a, c, d) {
        c = c.filter(function(a) {
            return d === b("PageCommItemFolder").FOLLOW_UP ? a.is_page_follow_up === !0 : !0
        }).map(function(a) {
            return {
                platform: "MESSENGER",
                instagramThread: null,
                messengerThread: a,
                timestamp: a.timestamp + g,
                threadID: (a = a.thread_fbid) != null ? a : ""
            }
        });
        a = ((a = a == null ? void 0 : a.nodes) != null ? a : []).map(function(a) {
            var b;
            return {
                platform: "INSTAGRAM_DIRECT",
                instagramThread: a,
                messengerThread: null,
                timestamp: (b = a.last_activity_at) != null ? b : "",
                threadID: (b = a.token) != null ? b : ""
            }
        });
        c = c.concat(a);
        c.sort(function(a, b) {
            return h(b.timestamp, a.timestamp)
        });
        return c
    }
    function h(a, b) {
        if (a.length > b.length)
            return 1;
        return a.length < b.length ? -1 : a === b ? 0 : a > b ? 1 : -1
    }
    function c(a) {
        return a.replace(/&#(\d+);/g, function(a, b) {
            return String.fromCharCode(b)
        })
    }
}
), null);
__d("BizInboxCommentThreadListRowContainer.react", ["BIZInboxClientLogger", "BizInboxCommentActionContainer.react", "BizInboxProfilePic.react", "BizInboxThreadlistConsts", "BizInboxThreadListRow.react", "BizInboxThreadListSpinner.react", "BizInboxThreadlistUtils", "BizInboxThreadListViewAction.react", "PageCommItemStatus", "PageCommItemStatusUtil", "PageCommItemType", "PageCommPlatform", "React", "TextWithEntities.react", "getJSEnumSafe"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.item
          , d = a.rowIndex
          , e = b("getJSEnumSafe")(b("PageCommPlatform"), c == null ? void 0 : c.comm_platform)
          , f = b("getJSEnumSafe")(b("PageCommItemStatus"), c == null ? void 0 : c.comm_status)
          , h = b("getJSEnumSafe")(b("PageCommItemType"), c == null ? void 0 : c.comm_type);
        if (c == null || e == null)
            return g.jsx(b("BizInboxThreadListSpinner.react"), {});
        var i = c.is_read
          , j = c.id
          , k = c.last_modified_at
          , l = c.snippet_with_entities
          , m = c.thumbnail
          , n = c.comm_title
          , o = c.comm_type
          , p = c.ig_revamp_snippet_with_entities;
        function q() {
            a.onSelectThread(j, o),
            b("BIZInboxClientLogger").logThreadClick(a.pageID, e, j, h, "show_p13n")
        }
        function r() {
            return g.jsx(b("BizInboxProfilePic.react"), {
                commPlatform: e,
                imageURI: m == null ? void 0 : m.uri,
                showPlaceholder: !0,
                showPlatformBadge: !0,
                shape: "square"
            })
        }
        function s() {
            var a = e === "FACEBOOK" ? l == null ? void 0 : l.text : p == null ? void 0 : p.text
              , c = e === "FACEBOOK" ? l == null ? void 0 : l.image_ranges : null
              , d = e === "FACEBOOK" ? l == null ? void 0 : l.inline_style_ranges : null;
            return a == null ? null : g.jsx(b("TextWithEntities.react"), {
                imageRanges: c,
                inlineStyleRanges: d,
                renderEmoji: !0,
                text: b("BizInboxThreadlistUtils").unescapeText(a)
            })
        }
        function t() {
            if (n != null && n !== "")
                return n;
            else
                return b("BizInboxThreadlistConsts").COMMENT_THREAD_FALLBACK_TITLE
        }
        function u() {
            if (j == null || f == null)
                return null;
            var c = b("PageCommItemStatusUtil").getActionParam(e, a.activeFolder, !1, {
                comm_status: f,
                is_read: i
            });
            return g.jsx(b("BizInboxCommentActionContainer.react"), {
                actionParam: c,
                activeFolder: a.activeFolder,
                pageID: a.pageID,
                commItemID: j,
                commPlatform: e,
                commStatus: f,
                childActionClass: b("BizInboxThreadListViewAction.react"),
                onSelectThread: a.onSelectThread,
                commType: h
            })
        }
        return g.jsx(b("BizInboxThreadListRow.react"), {
            actionUnits: u(),
            activeFolder: a.activeFolder,
            commPlatform: e,
            commStatus: f,
            commType: h,
            hasMultipleAdmin: !1,
            isRead: !!i,
            isViewing: j === a.selectedThreadID,
            labels: [],
            onViewingListItem: q,
            profilePicElement: r(),
            rowIndex: d,
            shouldAnimate: a.shouldAnimate,
            showActions: !0,
            snippetElement: s(),
            timestampInMS: (k || 0) * b("BizInboxThreadlistConsts").MS_IN_S,
            titleElement: t()
        }, j)
    }
}
), null);
__d("BizInboxThreadListEmptyState.react", ["fbt", "ix", "BizInboxNavChannel", "Image.react", "PageCommItemFolder", "React", "asset", "stylex"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i, j = b("React");
    function a(a) {
        function c() {
            switch (a.folder) {
            case b("PageCommItemFolder").DONE:
                return a.navChannel === b("BizInboxNavChannel").MESSENGER || a.navChannel === b("BizInboxNavChannel").INSTAGRAM_DIRECT ? g._("Kh\u00f4ng c\u00f3 tin nh\u1eafn n\u00e0o") : g._("Kh\u00f4ng c\u00f3 b\u00ecnh lu\u1eadn");
            case b("PageCommItemFolder").FOLLOW_UP:
                return a.navChannel === b("BizInboxNavChannel").MESSENGER || a.navChannel === b("BizInboxNavChannel").INSTAGRAM_DIRECT ? g._("Kh\u00f4ng c\u00f3 tin nh\u1eafn n\u00e0o") : g._("Kh\u00f4ng c\u00f3 b\u00ecnh lu\u1eadn");
            case b("PageCommItemFolder").TODO:
                switch (a.navChannel) {
                case b("BizInboxNavChannel").MESSENGER:
                    return g._("Kh\u00f4ng c\u00f3 tin nh\u1eafn n\u00e0o");
                case b("BizInboxNavChannel").INSTAGRAM_DIRECT:
                    return g._("Kh\u00f4ng c\u00f3 tin nh\u1eafn \u0111\u1ec3 hi\u1ec3n th\u1ecb");
                case b("BizInboxNavChannel").WEC:
                    return g._("No messages to show");
                case b("BizInboxNavChannel").FACEBOOK:
                    return g._("Kh\u00f4ng c\u00f3 b\u00ecnh lu\u1eadn");
                case b("BizInboxNavChannel").INSTAGRAM:
                    return g._("Kh\u00f4ng c\u00f3 b\u00ecnh lu\u1eadn n\u00e0o")
                }
                break;
            case b("PageCommItemFolder").SPAM:
                return a.navChannel === b("BizInboxNavChannel").INSTAGRAM || a.navChannel === b("BizInboxNavChannel").FACEBOOK ? g._("Kh\u00f4ng c\u00f3 b\u00ecnh lu\u1eadn n\u00e0o") : g._("Kh\u00f4ng c\u00f3 tin nh\u1eafn n\u00e0o");
            case b("PageCommItemFolder").UNREAD:
                switch (a.navChannel) {
                case b("BizInboxNavChannel").MESSENGER:
                case b("BizInboxNavChannel").INSTAGRAM_DIRECT:
                    return g._("Kh\u00f4ng c\u00f3 tin nh\u1eafn n\u00e0o");
                case b("BizInboxNavChannel").FACEBOOK:
                    return g._("Kh\u00f4ng c\u00f3 \u0111\u00e1nh gi\u00e1 ho\u1eb7c b\u00ecnh lu\u1eadn ch\u01b0a \u0111\u1ecdc \u0111\u1ec3 hi\u1ec3n th\u1ecb");
                case b("BizInboxNavChannel").INSTAGRAM:
                    return g._("Kh\u00f4ng c\u00f3 b\u00ecnh lu\u1eadn ch\u01b0a \u0111\u1ecdc tr\u00ean Instagram \u0111\u1ec3 hi\u1ec3n th\u1ecb")
                }
                break;
            case b("PageCommItemFolder").INSTAGRAM_THREADS:
            case b("PageCommItemFolder").MESSENGER_THREADS:
                return g._("Kh\u00f4ng c\u00f3 tin nh\u1eafn n\u00e0o");
            case b("PageCommItemFolder").EMAIL_THREADS:
                return g._("Ch\u01b0a c\u00f3 email n\u00e0o")
            }
            return null
        }
        function d() {
            switch (a.folder) {
            case b("PageCommItemFolder").DONE:
                switch (a.navChannel) {
                case b("BizInboxNavChannel").MESSENGER:
                case b("BizInboxNavChannel").INSTAGRAM_DIRECT:
                case b("BizInboxNavChannel").WEC:
                    return g._("B\u1ea1n c\u00f3 th\u1ec3 d\u00f9ng n\u00fat d\u1ea5u ki\u1ec3m \u0111\u1ec3 g\u1eedi nhanh tin nh\u1eafn v\u00e0o th\u01b0 m\u1ee5c \"Xong\".");
                case b("BizInboxNavChannel").FACEBOOK:
                case b("BizInboxNavChannel").INSTAGRAM:
                    return g._("B\u1ea1n c\u00f3 th\u1ec3 d\u00f9ng n\u00fat d\u1ea5u ki\u1ec3m \u0111\u1ec3 g\u1eedi nhanh b\u00ecnh lu\u1eadn v\u00e0o th\u01b0 m\u1ee5c \"Xong\".");
                default:
                    return null
                }
            case b("PageCommItemFolder").FOLLOW_UP:
                switch (a.navChannel) {
                case b("BizInboxNavChannel").MESSENGER:
                case b("BizInboxNavChannel").INSTAGRAM_DIRECT:
                case b("BizInboxNavChannel").WEC:
                    return g._("D\u00f9ng n\u00fat h\u00ecnh sao \u0111\u1ec3 \u0111\u00e1nh d\u1ea5u tin nh\u1eafn l\u00e0 Theo d\u00f5i th\u00eam.");
                case b("BizInboxNavChannel").FACEBOOK:
                case b("BizInboxNavChannel").INSTAGRAM:
                    return g._("D\u00f9ng n\u00fat h\u00ecnh sao \u0111\u1ec3 \u0111\u00e1nh d\u1ea5u b\u00ecnh lu\u1eadn l\u00e0 Theo d\u00f5i th\u00eam.");
                default:
                    return null
                }
            case b("PageCommItemFolder").TODO:
                switch (a.navChannel) {
                case b("BizInboxNavChannel").MESSENGER:
                    return g._("Tin nh\u1eafn g\u1eedi \u0111\u1ebfn Trang c\u1ee7a b\u1ea1n s\u1ebd xu\u1ea5t hi\u1ec7n \u1edf \u0111\u00e2y.");
                case b("BizInboxNavChannel").INSTAGRAM_DIRECT:
                    return g._("Tin nh\u1eafn Instagram Direct c\u1ee7a b\u1ea1n s\u1ebd xu\u1ea5t hi\u1ec7n \u1edf \u0111\u00e2y.");
                case b("BizInboxNavChannel").FACEBOOK:
                    return g._("\u0110\u00e1nh gi\u00e1 v\u00e0 b\u00ecnh lu\u1eadn v\u1ec1 b\u00e0i vi\u1ebft c\u1ee7a b\u1ea1n s\u1ebd xu\u1ea5t hi\u1ec7n \u1edf \u0111\u00e2y.");
                case b("BizInboxNavChannel").INSTAGRAM:
                    return g._("B\u00ecnh lu\u1eadn v\u1ec1 b\u00e0i vi\u1ebft c\u1ee7a b\u1ea1n tr\u00ean Instagram s\u1ebd xu\u1ea5t hi\u1ec7n \u1edf \u0111\u00e2y.")
                }
                break;
            case b("PageCommItemFolder").MEDIA_MANAGER_FB_COMMS:
                return g._("Tin t\u1ee9c v\u00e0 th\u00f4ng b\u00e1o c\u1ee7a Facebook s\u1ebd hi\u1ec3n th\u1ecb \u1edf \u0111\u00e2y.");
            case b("PageCommItemFolder").EMAIL_THREADS:
                return g._("Nh\u1eefng email b\u1ea1n \u0111\u00e3 g\u1eedi ho\u1eb7c nh\u1eadn \u0111\u01b0\u1ee3c s\u1ebd hi\u1ec3n th\u1ecb \u1edf \u0111\u00e2y.")
            }
            return null
        }
        function e() {
            var c = null;
            a.folder === b("PageCommItemFolder").DONE ? c = h("94968") : a.folder === b("PageCommItemFolder").DONE && (c = h("94970"));
            return c != null ? j.jsx(b("Image.react"), {
                className: "d0umdmoi",
                src: c
            }) : null
        }
        function f() {
            if (a.navChannel === b("BizInboxNavChannel").INSTAGRAM_DIRECT && a.folder === b("PageCommItemFolder").TODO)
                return h("583731");
            switch (a.folder) {
            case b("PageCommItemFolder").DONE:
                return h("497630");
            case b("PageCommItemFolder").FOLLOW_UP:
                return h("484107");
            default:
                return h("94969")
            }
        }
        return j.jsxs("div", {
            className: (i || (i = b("stylex"))).dedupe({
                "background-color-1": "dg72kig0",
                "color-1": "exla09j3",
                "padding-top-1": "mzg8e292",
                "text-align-1": "nnjertdf",
                "width-1": "ktotyoc7"
            }, a.folder === b("PageCommItemFolder").DONE ? {
                "color-1": "entfc68j"
            } : null),
            style: {
                height: a.height
            },
            children: [j.jsx(b("Image.react"), {
                src: f()
            }), j.jsx("div", {
                className: i.dedupe({
                    "font-size-1": "o8oc0g1i",
                    "font-weight-1": "a2qhav0c",
                    "margin-left-1": "o5r1bzxe",
                    "margin-right-1": "ipvj75f2",
                    "margin-top-1": "c40nnj9f",
                    "width-1": "m32m3x1x",
                    "word-wrap-1": "e4yim9dk"
                }, a.folder === b("PageCommItemFolder").TODO || a.folder === b("PageCommItemFolder").SPAM ? {
                    "margin-top-1": "eec5q4er"
                } : null),
                children: c()
            }), j.jsx("div", {
                className: "e4yim9dk m32m3x1x c40nnj9f ipvj75f2 o5r1bzxe o8oc0g1i",
                children: d()
            }), e()]
        })
    }
}
), null);
__d("BizInboxThreadListLoading.react", ["React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React")
      , h = 4;
    function a(a) {
        var b;
        function c(a) {
            return g.jsx("div", {
                className: "dc28izrs qhea088j sr2dro1g jaueedpx pbr7oyhs",
                children: g.jsxs("div", {
                    className: "kzpzqbg6 p1gc0552 erqwis2y g9wwtdk0 qgkrvl8a dc28izrs qhea088j b6h71609 h6swc0wa",
                    children: [g.jsx("div", {
                        className: "ombajpry a7ki207s qbql7dz2 ifvjsowe ftf5yv0w e3c08ntm tv8rbhd1"
                    }), g.jsx("div", {
                        className: "fpkgdl6c ombajpry a7ki207s ifvjsowe rpanvx9t g9ysj2a4"
                    }), g.jsx("div", {
                        className: "fpkgdl6c ombajpry mcpzgepm a7ki207s qwfjj69h fals8mp6"
                    }), g.jsx("div", {
                        className: "fpkgdl6c ombajpry a7ki207s b4syvjoh rpanvx9t e9ws1cvw"
                    }), g.jsx("div", {
                        className: "fpkgdl6c ombajpry a7ki207s edsi347r rpanvx9t rcxawlqe"
                    }), g.jsx("div", {
                        className: "fpkgdl6c ombajpry khgkq6dl a7ki207s iven62ae c8mffkil"
                    })]
                })
            }, "rowPlaceholder" + a)
        }
        b = (b = a.count) != null ? b : h;
        var d = [];
        for (var e = 0; e < b; e++)
            d.push(c(e));
        return g.jsx("div", {
            style: {
                height: a.height
            },
            children: d
        })
    }
}
), null);
__d("BizInboxCommentThreadList.react", ["cssVar", "BizInboxCommentThreadListRowContainer.react", "BizInboxThreadlistConsts", "BizInboxThreadListEmptyState.react", "BizInboxThreadListLoading.react", "BizInboxThreadListSpinner.react", "PagesSelectableSimpleList.react", "React", "RelayHooks", "BizInboxCommentThreadList_Page.graphql"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h, i = b("React"), j = h !== void 0 ? h : h = b("BizInboxCommentThreadList_Page.graphql");
    function a(a) {
        var c = b("RelayHooks").usePaginationFragment(j, babelHelpers["extends"]({}, a.page))
          , d = c.data
          , e = c.loadNext
          , f = c.hasNext
          , g = d == null ? void 0 : (c = d.business_comm_items) == null ? void 0 : c.edges
          , h = a.selectedThreadID
          , k = a.onSelectThread;
        i.useEffect(function() {
            if (h == null && g != null && g.length > 0) {
                var a, b = g[0].node;
                k((a = g[0].node) == null ? void 0 : a.id, b == null ? void 0 : b.comm_type)
            }
        }, [g, h, k]);
        if (g == null)
            return i.jsx(b("BizInboxThreadListLoading.react"), {
                height: a.height
            });
        if (g.length === 0)
            return i.jsx(b("BizInboxThreadListEmptyState.react"), {
                folder: a.activeFolder,
                height: a.height,
                navChannel: a.navChannel
            });
        function l(a) {
            var b;
            b = (b = g[a].node) == null ? void 0 : b.id;
            return (b = b) != null ? b : a.toString()
        }
        function m(c) {
            var d = g[c].node;
            return d == null ? null : i.jsx(b("BizInboxCommentThreadListRowContainer.react"), {
                activeFolder: a.activeFolder,
                item: d,
                pageID: a.pageID,
                rowIndex: c,
                shouldAnimate: !1,
                selectedThreadID: a.selectedThreadID,
                onSelectThread: a.onSelectThread
            }, c)
        }
        function n() {
            f && e(b("BizInboxThreadlistConsts").COMMENT_THREAD_LOAD_MORE_COUNT)
        }
        return i.jsx(b("PagesSelectableSimpleList.react"), {
            canLoadMoreRows: f,
            "data-testid": void 0,
            height: a.height,
            loadingIndicator: i.jsx(b("BizInboxThreadListSpinner.react"), {}),
            onRequestMoreRows: n,
            rowCount: g.length,
            rowHeight: parseInt("80px", 10),
            rowKeyGetter: l,
            rowRenderer: m,
            showHeader: !1
        })
    }
}
), null);
__d("BizInboxCommentThreadListContainer.react", ["BizInboxCommentThreadList.react", "BizInboxFolderUtils", "BizInboxNavChannel", "BizInboxThreadlistConsts", "BizInboxThreadListLoading.react", "PageCommItemFolder", "PageCommItemIsReadStatus", "PageCommPlatform", "React", "RelayHooks", "BizInboxCommentThreadListContainerQuery.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React"), i = g !== void 0 ? g : g = b("BizInboxCommentThreadListContainerQuery.graphql");
    function a(a) {
        var c = a.navChannel === b("BizInboxNavChannel").FACEBOOK ? "FACEBOOK" : a.navChannel === b("BizInboxNavChannel").INSTAGRAM ? "INSTAGRAM" : null
          , d = a.activeFolder === b("PageCommItemFolder").UNREAD ? b("PageCommItemIsReadStatus").UNREAD : null;
        d = {
            pageID: a.pageID,
            count: b("BizInboxThreadlistConsts").COMMENT_THREAD_INIT_COUNT,
            filterIsReadStatus: d,
            filterOwnerID: null,
            filterStatus: b("BizInboxFolderUtils").getFolderStatus(a.activeFolder),
            platformFilter: c,
            isHighlightedComment: a.activeFolder === b("PageCommItemFolder").PRIORITY,
            isStarsComment: a.activeFolder === b("PageCommItemFolder").MEDIA_MANAGER_STARS_COMMENT
        };
        c = b("RelayHooks").useLazyLoadQuery(i, d);
        return (c == null ? void 0 : c.page) == null ? h.jsx(b("BizInboxThreadListLoading.react"), {
            height: a.height
        }) : h.jsx(b("BizInboxCommentThreadList.react"), {
            activeFolder: a.activeFolder,
            height: a.height,
            navChannel: a.navChannel,
            page: c.page,
            pageID: a.pageID,
            selectedThreadID: a.selectedThreadID,
            onSelectThread: a.onSelectThread
        })
    }
}
), null);
__d("BizInboxIGDirectThreadListRowContainer.react", ["BIZInboxClientLogger", "BizInboxFilterContext", "BizInboxFolderUtils", "BizInboxIGDirectActionContainer.react", "BizInboxProfilePicIGDirect.react", "BizInboxStateContext", "BizInboxThreadListRow.react", "BizInboxThreadListSpinner.react", "BizInboxThreadListViewAction.react", "FluxHooks", "IGDirectMessageThreadPreviewContainer.react", "IGMessageInboxStore", "PageCommItemStatus", "React", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = g.useContext(b("BizInboxStateContext"))
          , d = c.pageAdmins
          , e = c.selectedThreadID;
        c = g.useContext(b("BizInboxFilterContext"));
        var f = c.activeFolder;
        c = b("FluxHooks").useFluxStore(b("IGMessageInboxStore"), g.useCallback(function(b) {
            b = b.getThread(a.mailboxID, a.token, 1, null, Boolean(a.fetchFromUser));
            return {
                threadLoadObject: b
            }
        }, [a.mailboxID, a.token, a.fetchFromUser]));
        c = c.threadLoadObject;
        function h() {
            a.onSelectThread(a.token, "IG_MESSAGE"),
            b("BIZInboxClientLogger").logThreadClick(a.mailboxID, "INSTAGRAM_DIRECT", e, "IG_MESSAGE", "show_p13n")
        }
        function i(c) {
            var d, e = "";
            d = (d = c) != null ? (d = d.thread_users) != null ? d.nodes : d : d;
            c = (c = c) != null ? (c = c.thread_items) != null ? (c = c.nodes) != null ? (c = c[0]) != null ? c.token : c : c : c : c;
            d !== null && d !== void 0 && c !== null && c !== void 0 && (e = g.jsx(b("IGDirectMessageThreadPreviewContainer.react"), {
                mailboxID: a.mailboxID,
                participants: d,
                token: c
            }));
            return e
        }
        function j(a) {
            a = b("nullthrows")(a.last_activity_at);
            return parseInt(a.slice(0, a.length - 3), 10)
        }
        function k(a) {
            var b;
            b = (b = (b = a) != null ? (b = b.thread_users) != null ? (b = b.nodes) != null ? b.length : b : b : b) != null ? b : 0;
            if (b >= 2)
                b = a.thread_title;
            else {
                b = (a = a) != null ? (a = a.thread_users) != null ? (a = a.nodes) != null ? (a = a[0]) != null ? a.username : a : a : a : a
            }
            return b
        }
        function l(a) {
            a = ((a = a.thread_labels) == null ? void 0 : a.nodes) || [];
            a = a.map(function(a) {
                var b = a.id
                  , c = a.label_color;
                a = a.name;
                return b != null && c != null && a != null ? {
                    id: b,
                    color: c,
                    name: a
                } : null
            }).filter(function(a) {
                return a != null
            });
            return a
        }
        var m = c.getValue();
        if (!m)
            return g.jsx(b("BizInboxThreadListSpinner.react"), {});
        function n() {
            var c = b("BizInboxFolderUtils").getThreadListActionParam(f, m.is_follow_up || !1);
            return g.jsx(b("BizInboxIGDirectActionContainer.react"), {
                actionParam: c,
                activeFolder: f,
                mailboxID: a.mailboxID,
                threadID: a.token,
                onSelectThread: a.onSelectThread,
                childActionClass: b("BizInboxThreadListViewAction.react")
            })
        }
        return g.jsx(b("BizInboxThreadListRow.react"), {
            actionUnits: n(),
            activeFolder: f,
            commPlatform: "INSTAGRAM_DIRECT",
            commStatus: b("PageCommItemStatus").TODO,
            commType: "IG_MESSAGE",
            hasMultipleAdmin: d.length > 1,
            isRead: !b("IGMessageInboxStore").isThreadUnread(a.mailboxID, m),
            isViewing: a.token === e,
            igDirectItem: m,
            labels: l(m),
            onViewingListItem: h,
            profilePicElement: g.jsx(b("BizInboxProfilePicIGDirect.react"), {
                thread: m,
                showPlatformBadge: !0
            }),
            rowIndex: a.rowIndex,
            shouldAnimate: !1,
            showActions: !0,
            snippetElement: i(m),
            timestampInMS: j(m),
            titleElement: k(m)
        }, m.token)
    }
}
), null);
__d("BizInboxIGDirectThreadList.react", ["cssVar", "BIZInboxClientLogger", "BizInboxIGDirectThreadListRowContainer.react", "BizInboxThreadListSpinner.react", "PagesSelectableSimpleList.react", "QuickPerformanceLogger", "React", "nullthrows"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a(a) {
        var c = a.threadList
          , d = a.selectedThreadID
          , e = a.onSelectThread;
        h.useEffect(function() {
            b("BIZInboxClientLogger").logThreadListRenderView(a.mailboxID, "INSTAGRAM_DIRECT", "show_p13n"),
            b("QuickPerformanceLogger").markerAnnotate(36241423, {
                string: {
                    p13n: "true",
                    mailbox_id: a.mailboxID
                }
            }),
            b("QuickPerformanceLogger").markerEnd(36241423, 2)
        }, [a.mailboxID]);
        h.useEffect(function() {
            d == null && c.length > 0 && e(c[0].token, "IG_MESSAGE")
        }, [c, d, e]);
        function f(c) {
            return b("nullthrows")(a.threadList[c].token)
        }
        function g(c) {
            var d = b("nullthrows")(a.threadList[c].token);
            return h.jsx(b("BizInboxIGDirectThreadListRowContainer.react"), {
                fetchFromUser: !1,
                mailboxID: a.mailboxID,
                rowIndex: c,
                token: d,
                onSelectThread: e
            }, c)
        }
        return h.jsx(b("PagesSelectableSimpleList.react"), {
            canLoadMoreRows: a.hasMoreRows,
            "data-testid": void 0,
            height: a.height,
            loadingIndicator: h.jsx(b("BizInboxThreadListSpinner.react"), {}),
            onRequestMoreRows: a.onLoadMore,
            rowCount: a.threadList.length,
            rowHeight: parseInt("80px", 10),
            rowKeyGetter: f,
            rowRenderer: g,
            showHeader: !1
        })
    }
}
), null);
__d("BizInboxIGDirectThreadListContainer.react", ["BizInboxFolderUtils", "BizInboxIGDirectThreadList.react", "BizInboxNavChannel", "BizInboxThreadlistConsts", "BizInboxThreadListEmptyState.react", "BizInboxThreadListLoading.react", "CometHeroHoldTrigger.react", "CometPagelet.react", "FluxHooks", "IGMessageConnectionUtils", "IGMessageInboxStore", "LoadObject", "QuickPerformanceLogger", "React", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        g.useEffect(function() {
            b("QuickPerformanceLogger").markerStart(36241423)
        }, []);
        var c = g.useState(b("BizInboxThreadlistConsts").MESSAGE_THREAD_INIT_COUNT)
          , d = c[0]
          , e = c[1]
          , f = a.activeFolder;
        c = a.height;
        var h = a.mailboxID
          , i = a.igAccountID
          , j = b("FluxHooks").useFluxStore(b("IGMessageInboxStore"), g.useCallback(function(c) {
            if (h == null || h === "")
                return {
                    inboxLoadObject: b("LoadObject").empty(),
                    isChangingFolder: !1
                };
            var a = c.getInbox(h, d, null, b("BizInboxFolderUtils").convertToIGDirectFolder(f), !1, !1)
              , e = a.getValue();
            i != null && b("IGMessageConnectionUtils").processInstagramMessageEventStream(i, h, e);
            return {
                inboxLoadObject: a,
                isChangingFolder: c.getIsInitLoading()
            }
        }, [f, h, i, d]))
          , k = j.inboxLoadObject;
        j = j.isChangingFolder;
        function l() {
            e(d + b("BizInboxThreadlistConsts").MESSAGE_THREAD_LOAD_MORE_COUNT)
        }
        k = k.getValue();
        if (j || !k)
            return g.jsxs(g.Fragment, {
                children: [g.jsx(b("CometHeroHoldTrigger.react"), {
                    description: "Biz P13N Inbox IG Direct Thread List Loading",
                    hold: !0
                }), g.jsx(b("BizInboxThreadListLoading.react"), {
                    height: c
                })]
            });
        j = !k.nodes || k.nodes.length === 0 ? g.jsx(b("BizInboxThreadListEmptyState.react"), {
            folder: a.activeFolder,
            height: c,
            navChannel: b("BizInboxNavChannel").INSTAGRAM_DIRECT
        }) : g.jsx(b("BizInboxIGDirectThreadList.react"), {
            hasMoreRows: b("nullthrows")(k.page_info).has_next_page === !0,
            height: c,
            mailboxID: h,
            selectedThreadID: a.selectedThreadID,
            threadList: b("nullthrows")(k.nodes),
            onLoadMore: l,
            onSelectThread: a.onSelectThread
        });
        return g.jsx(b("CometPagelet.react").Placeholder, {
            fallback: g.jsx(b("BizInboxThreadListLoading.react"), {
                height: a.height
            }),
            name: "BizP13NInboxIGDirectThreadListView",
            children: j
        })
    }
}
), null);
__d("BizInboxMessengerFetcher", ["invariant", "MercuryPageOrderedThreadlist", "MessengerState.bs", "PageCommItemFolder", "PagesManagerMessagingNavigationUnitKey", "idx", "nullthrows"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "OWNER_";
    a = function() {
        function a() {
            this.$2 = !0,
            this.$3 = new Map()
        }
        var c = a.prototype;
        c.fetchMessageList = function(a, b, c, d, e, f) {
            this.$2 = !0;
            var g = this.$4(a, b + c, d, e);
            g ? this.$5(this.hasMoreItem(d), d, f) : this.$6(a, b, c, d, e, f)
        }
        ;
        c.hasMoreItem = function(a) {
            return this.$3.has(a) ? b("nullthrows")(this.$3.get(a)) : !1
        }
        ;
        c.getMessageListForAdmin = function(a, c, d) {
            a = this.$7(a, d, c);
            d === b("PageCommItemFolder").FOLLOW_UP && (a = a.filter(function(a) {
                return a.comm_status && a.comm_status.toUpperCase() === b("PageCommItemFolder").FOLLOW_UP
            }));
            c === "NONE" ? a = a.filter(function(a) {
                return ((a = a.thread_associated_page_admin) == null ? void 0 : a.id) == null
            }) : c && (a = a.filter(function(a) {
                return a.thread_associated_page_admin && ((a = a.thread_associated_page_admin) == null ? void 0 : a.id) === c
            }));
            return a
        }
        ;
        c.$7 = function(a, c, d) {
            d = this.$8(a, c, d);
            c = this.$9(c);
            c = this.hasMoreItem(c) && d.length > 0 ? d.slice(0, d.length - 1) : d;
            var e = [];
            c.forEach(function(c) {
                c = b("MessengerState.bs").getThreadMetaNow(a, c);
                c && e.push(c)
            });
            return e
        }
        ;
        c.$10 = function(a, c) {
            return a.hasLoadedThreadlist(b("PagesManagerMessagingNavigationUnitKey").FOLDERS.ARCHIVED, c) || a.hasLoadedThreadlist(b("PagesManagerMessagingNavigationUnitKey").FOLDERS.PAGE_BACKGROUND, c)
        }
        ;
        c.$4 = function(a, c, d, e) {
            a = b("MercuryPageOrderedThreadlist").getForFBID(a);
            var f = this.$9(d)
              , g = this.$11(d, e);
            g = a.hasLoadedThreadlist(f, g);
            g = f === b("PagesManagerMessagingNavigationUnitKey").FOLDERS.ARCHIVED ? g && this.$10(a, d) : g;
            a = a.getThreadCount(f, this.$11(d, e)) >= c;
            return g && a
        }
        ;
        c.$6 = function(a, c, d, e, f, g) {
            var h = this
              , i = this.$9(e)
              , j = this.$11(e, f)
              , k = b("MercuryPageOrderedThreadlist").getForFBID(a);
            k.getFilteredThreadlist(c, d + 1, i, j, function(f) {
                if (i === b("PagesManagerMessagingNavigationUnitKey").FOLDERS.ARCHIVED)
                    k.getFilteredThreadlist(c, d + 1, b("PagesManagerMessagingNavigationUnitKey").FOLDERS.ARCHIVED, j, function(i) {
                        i = f.concat(i);
                        var c = i.length > d;
                        h.$1 = b("MessengerState.bs").getMultiThreadMeta(a, i, function(a) {
                            h.$5(c, e, g)
                        }, null)
                    }),
                    k.getFilteredThreadlist(c, d + 1, b("PagesManagerMessagingNavigationUnitKey").FOLDERS.PAGE_BACKGROUND, j, function(i) {
                        i = f.concat(i);
                        var c = i.length > d;
                        h.$1 = b("MessengerState.bs").getMultiThreadMeta(a, i, function(a) {
                            h.$5(c, e, g)
                        }, null)
                    });
                else {
                    var l = f.length > d;
                    h.$1 = b("MessengerState.bs").getMultiThreadMeta(a, f, function(a) {
                        h.$5(l, e, g)
                    }, null)
                }
            })
        }
        ;
        c.$8 = function(a, c, d) {
            a = b("MercuryPageOrderedThreadlist").getForFBID(a);
            var e = this.$9(c);
            c = this.$11(c, d);
            if (e === b("PagesManagerMessagingNavigationUnitKey").FOLDERS.ARCHIVED) {
                a.getThreadlistOrderMap(e, c).addResources(a.getThreadlistOrderMap(b("PagesManagerMessagingNavigationUnitKey").FOLDERS.PAGE_BACKGROUND, c).getAllResources());
                return a.getAvailableThreadlistNow(e, c)
            } else
                return a.getAvailableThreadlistNow(e, c)
        }
        ;
        c.$5 = function(a, b, c) {
            this.$2 = !1,
            this.$3.set(b, a),
            c()
        }
        ;
        c.$9 = function(a) {
            switch (a) {
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
        c.$11 = function(a, b) {
            return this.$12(b) || this.$13(a)
        }
        ;
        c.$12 = function(a) {
            return a == null ? null : h + String(a)
        }
        ;
        c.$13 = function(a) {
            switch (a) {
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
        return a
    }();
    c = new a();
    e.exports = c
}
), null);
__d("BizInboxMessengerThreadListRowContainer.react", ["BIZInboxClientLogger", "BizInboxFilterContext", "BizInboxFolderUtils", "BizInboxMessengerActionContainer.react", "BizInboxProfilePic.react", "BizInboxStateContext", "BizInboxThreadListRow.react", "BizInboxThreadListViewAction.react", "MercuryIDs", "MercuryThreadSnippet.react", "MercuryThreadTitleSafe.react", "MessengerParticipantsImages.re", "PageCommItemStatus", "React", "immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = g.useContext(b("BizInboxStateContext"))
          , d = c.pageAdmins
          , e = c.selectedThreadID;
        c = g.useContext(b("BizInboxFilterContext"));
        var f = c.activeFolder;
        function h() {
            a.onSelectThread(a.item.thread_fbid, "FB_MESSAGE"),
            b("BIZInboxClientLogger").logThreadClick(a.pageID, "MESSENGER", e, "FB_MESSAGE", "show_p13n")
        }
        c = g.useState(null);
        var i = c[0]
          , j = c[1];
        g.useEffect(function() {
            var c = a.item.participants.filter(function(c) {
                return b("MercuryIDs").getUserIDFromParticipantID(c) !== a.pageID
            });
            c.length === 0 && a.item.participants.length > 0 && (c = a.item.participants.slice(0, 1));
            b("MessengerParticipantsImages.re").getOrderedBigImageMulti(c, function(a) {
                j(a[0])
            })
        }, [a.item, a.pageID]);
        function k() {
            return g.jsx(b("BizInboxProfilePic.react"), {
                commPlatform: "MESSENGER",
                imageURI: i,
                showPlaceholder: !0,
                showPlatformBadge: !0
            })
        }
        function l() {
            var b, c;
            b = ((b = a.item.page_thread_info) == null ? void 0 : b.customLabels) || [];
            c = ((c = a.item.page_thread_info) == null ? void 0 : c.customTags) || [];
            var d = {}
              , e = [];
            for (var f = 0; f < b.length; f++) {
                var g;
                g = (g = b[f]) == null ? void 0 : g.name;
                g != null && d[g] !== !0 && (d[g] = !0,
                e[e.length] = b[f])
            }
            for (var g = 0; g < c.length; g++) {
                b = (f = c[g]) == null ? void 0 : f.name;
                b != null && d[b] !== !0 && (d[b] = !0,
                e[e.length] = c[g])
            }
            return e
        }
        function m() {
            var c = b("BizInboxFolderUtils").getThreadListActionParam(f, a.item.comm_status === b("PageCommItemStatus").FOLLOW_UP);
            return g.jsx(b("BizInboxMessengerActionContainer.react"), {
                actionParam: c,
                thread: a.item,
                pageID: a.pageID,
                onSelectThread: a.onSelectThread,
                childActionClass: b("BizInboxThreadListViewAction.react")
            })
        }
        return g.jsx(b("BizInboxThreadListRow.react"), {
            actionUnits: m(),
            activeFolder: f,
            commPlatform: "MESSENGER",
            commStatus: a.item.comm_status,
            commType: "FB_MESSAGE",
            hasMultipleAdmin: d.length > 1,
            isRead: a.item.unread_count === 0,
            isViewing: a.item.thread_fbid === e,
            labels: l(),
            messengerItem: a.item,
            onViewingListItem: h,
            profilePicElement: k(),
            rowIndex: a.rowIndex,
            shouldAnimate: a.shouldAnimate,
            showActions: !0,
            snippetElement: g.jsx(b("MercuryThreadSnippet.react"), {
                participants: b("immutable").Map({}),
                shouldRenderYou: !0,
                thread: a.item,
                viewer: a.pageID
            }),
            timestampInMS: a.item.timestamp,
            titleElement: g.jsx(b("MercuryThreadTitleSafe.react"), {
                thread: a.item,
                viewer: a.pageID
            })
        }, a.item.thread_fbid)
    }
}
), null);
__d("BizInboxMessengerThreadList.react", ["cssVar", "BIZInboxClientLogger", "BizInboxMessengerThreadListRowContainer.react", "BizInboxThreadListSpinner.react", "PagesSelectableSimpleList.react", "QuickPerformanceLogger", "React", "debounce"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a(a) {
        h.useEffect(function() {
            b("BIZInboxClientLogger").logThreadListRenderView(a.pageID, "MESSENGER", "show_p13n"),
            b("QuickPerformanceLogger").markerAnnotate(36241413, {
                string: {
                    p13n: "true",
                    page_id: a.pageID
                }
            }),
            b("QuickPerformanceLogger").markerEnd(36241413, 2)
        }, [a.pageID]);
        function c(b) {
            return a.threadList[b].thread_id
        }
        function d(c) {
            return h.jsx(b("BizInboxMessengerThreadListRowContainer.react"), {
                item: a.threadList[c],
                pageID: a.pageID,
                rowIndex: c,
                shouldAnimate: !1,
                onSelectThread: a.onSelectThread
            }, a.threadList[c].thread_id)
        }
        return h.jsx(b("PagesSelectableSimpleList.react"), {
            canLoadMoreRows: a.hasMoreRows,
            "data-testid": void 0,
            height: a.height,
            loadingIndicator: h.jsx(b("BizInboxThreadListSpinner.react"), {}),
            onRequestMoreRows: a.onLoadMore,
            rowCount: a.threadList.length,
            rowHeight: parseInt("80px", 10),
            rowKeyGetter: c,
            rowRenderer: d,
            showHeader: !1
        })
    }
}
), null);
__d("BizInboxMessengerThreadListContainer.react", ["BizInboxMessengerFetcher", "BizInboxMessengerThreadList.react", "BizInboxNavChannel", "BizInboxThreadlistConsts", "BizInboxThreadListEmptyState.react", "BizInboxThreadListLoading.react", "CometHeroHoldTrigger.react", "CometPagelet.react", "MercuryThreadInformer", "QuickPerformanceLogger", "React", "SubscriptionsHandler"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.activeFolder
          , d = a.height
          , e = a.pageID
          , f = a.selectedAdminID
          , h = a.selectedThreadID
          , i = a.onSelectThread
          , j = g.useState(!0)
          , k = j[0]
          , l = j[1];
        j = g.useState([]);
        var m = j[0]
          , n = j[1];
        j = g.useState(0);
        var o = j[0]
          , p = j[1];
        function q(c, a, g, j, d, e, f) {
            b("BizInboxMessengerFetcher").fetchMessageList(c, g, j, a, d, function() {
                var g = b("BizInboxMessengerFetcher").getMessageListForAdmin(c, d, a);
                n(g);
                l(!1);
                p(g.length);
                e == null && g.length > 0 && f(g[0].thread_fbid, "FB_MESSAGE")
            })
        }
        function r() {
            q(e, c, o, b("BizInboxThreadlistConsts").MESSAGE_THREAD_LOAD_MORE_COUNT, f, h, i)
        }
        g.useEffect(function() {
            b("QuickPerformanceLogger").markerStart(36241413)
        }, []);
        g.useEffect(function() {
            l(!0),
            q(e, c, 0, b("BizInboxThreadlistConsts").MESSAGE_THREAD_INIT_COUNT, f, h, i)
        }, [c, e, l, n, p, f, h, i]);
        var s = g.useRef();
        g.useEffect(function() {
            s.current = b("MercuryThreadInformer").getForFBID(e);
            var a = new (b("SubscriptionsHandler"))();
            a.addSubscriptions(s.current.subscribe("threadlist-updated", function(a, b) {
                b.length > 0 && q(e, c, 0, o, f, h, i)
            }));
            return function() {
                a && a.release()
            }
        }, [c, i, e, f]);
        if (k)
            return g.jsxs(g.Fragment, {
                children: [g.jsx(b("CometHeroHoldTrigger.react"), {
                    description: "P13N BizInbox Messenger Thread List Loading",
                    hold: !0
                }), g.jsx(b("BizInboxThreadListLoading.react"), {
                    height: a.height
                })]
            });
        j = b("BizInboxMessengerFetcher").hasMoreItem(a.activeFolder);
        k = m.length === 0 ? g.jsx(b("BizInboxThreadListEmptyState.react"), {
            folder: a.activeFolder,
            height: d,
            navChannel: b("BizInboxNavChannel").MESSENGER
        }) : g.jsx(b("BizInboxMessengerThreadList.react"), {
            hasMoreRows: j,
            height: d,
            pageID: e,
            threadList: m,
            onLoadMore: r,
            onSelectThread: i
        });
        return g.jsx(b("CometPagelet.react").Placeholder, {
            fallback: g.jsx(b("BizInboxThreadListLoading.react"), {
                height: a.height
            }),
            name: "BizP13NInboxMessengerThreadListView",
            children: k
        })
    }
}
), null);
__d("BizInboxAssignedAdminSelector.react", ["ix", "fbt", "BizInboxAdminSearchSource", "BizInboxProfilePicConsts", "Image.react", "React", "ScrollableArea.react", "ShimButton.react", "asset", "stylex"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i, j = b("React"), k = "ALL_CONVERSATIONS", l = "UNASSIGNED_CONVERSATIONS";
    function a(a) {
        var c = a.searchTerm
          , d = j.useRef(new (b("BizInboxAdminSearchSource"))(a.pageAdmins))
          , e = j.useState([])
          , f = e[0]
          , m = e[1];
        j.useEffect(function() {
            d.current != null && d.current.search(c, function(a) {
                m(a)
            }, {
                placeCurrentAdminOnTop: !0
            })
        }, [d, c]);
        function n(a, c, d, e, f) {
            return d == null ? null : j.jsx(b("ShimButton.react"), {
                className: (i || (i = b("stylex"))).dedupe({
                    "background-color-1": "pbr7oyhs",
                    "cursor-1": "fqx7lvqr",
                    "height-1": "q3n6uzp4",
                    "padding-left-1": "ba8nmgzr",
                    "padding-right-1": "ablh7bkb",
                    "background-color-8": "qcixwzj3"
                }, c ? {
                    "background-color-1": "h6swc0wa"
                } : null),
                onClick: f,
                children: j.jsxs("div", {
                    className: "kerwu6uh mlg5n5bf",
                    children: [j.jsx("div", {
                        className: "bulhdrbm a2qhav0c o8oc0g1i dqiucr32",
                        children: j.jsx(b("Image.react"), {
                            className: "o8r1ceta qb8mexw6 lfxdtrhj llizwoc6 oa32sory eopy2srh q6p943cg mzg7rptu",
                            src: (c = e) != null ? c : b("BizInboxProfilePicConsts").DEFAULT_ADMIN_PROFILE_PIC
                        })
                    }), j.jsx("div", {
                        className: "bulhdrbm a2qhav0c o8oc0g1i dqiucr32",
                        children: d
                    })]
                })
            }, "admin_" + a + d)
        }
        function o(a, c, d, e, f) {
            return j.jsx(b("ShimButton.react"), {
                className: (i || (i = b("stylex"))).dedupe({
                    "background-color-1": "pbr7oyhs",
                    "cursor-1": "fqx7lvqr",
                    "height-1": "q3n6uzp4",
                    "padding-left-1": "ba8nmgzr",
                    "padding-right-1": "ablh7bkb",
                    "background-color-8": "qcixwzj3"
                }, c ? {
                    "background-color-1": "h6swc0wa"
                } : null),
                onClick: f,
                children: j.jsxs("div", {
                    className: "kerwu6uh mlg5n5bf",
                    children: [j.jsx("div", {
                        className: "bulhdrbm a2qhav0c o8oc0g1i dqiucr32",
                        children: j.jsx(b("Image.react"), {
                            className: "o8r1ceta qb8mexw6 lfxdtrhj llizwoc6",
                            src: e
                        })
                    }), j.jsx("div", {
                        className: "bulhdrbm a2qhav0c o8oc0g1i dqiucr32",
                        children: d
                    })]
                })
            }, a)
        }
        function p() {
            var b = h._("T\u1ea5t c\u1ea3 c\u00e1c cu\u1ed9c tr\u00f2 chuy\u1ec7n")
              , c = g("487563")
              , d = function() {
                a.onSelectAdmin({
                    id: null,
                    photoURL: null,
                    name: null
                })
            };
            return o(k, a.selectedAdminID === null, b, c, d)
        }
        function q() {
            var b = h._("Cu\u1ed9c tr\u00f2 chuy\u1ec7n ch\u01b0a \u0111\u01b0\u1ee3c ch\u1ec9 \u0111\u1ecbnh")
              , c = g("664708")
              , d = function() {
                a.onSelectAdmin({
                    id: "NONE",
                    photoURL: null,
                    name: null
                })
            };
            return o(l, a.selectedAdminID === "NONE", b, c, d)
        }
        function r() {
            return j.jsx("div", {
                children: f.map(function(b, c) {
                    return n(c, a.selectedAdminID === b.getID(), b.getName(), b.getProfilePicUrl(), function() {
                        a.onSelectAdmin({
                            id: b.getID(),
                            photoURL: b.getProfilePicUrl(),
                            name: b.getName()
                        })
                    })
                })
            })
        }
        return j.jsxs(b("ScrollableArea.react"), {
            height: a.height,
            children: [p(), q(), r()]
        })
    }
}
), null);
__d("BizInboxAssignedAdminSelectorContainer.react", ["BizInboxAssignedAdminSelector.react", "BizInboxStateContext", "React", "bizInboxFilterFolderReducer", "useBizInboxFilterReducers"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = g.useContext(b("BizInboxStateContext"));
        c = c.pageAdmins;
        var d = b("useBizInboxFilterReducers")([b("bizInboxFilterFolderReducer")]);
        function e(b) {
            d({
                isSearchActive: !1,
                selectedAdmin: b,
                igMailboxID: a.igMailboxID,
                navChannel: a.navChannel,
                type: "search.update"
            })
        }
        return g.jsx(b("BizInboxAssignedAdminSelector.react"), {
            height: a.height,
            pageAdmins: c,
            searchTerm: a.searchTerm,
            selectedAdminID: a.selectedAdminID,
            onSelectAdmin: e
        })
    }
}
), null);
__d("BizInboxCustomerSearchableEntry", ["SearchableEntry"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b(b) {
            var c;
            c = a.call(this, {
                title: b.title,
                subtitle: b.subtitle,
                uniqueID: b.uniqueID,
                uri: b.uri
            }) || this;
            c.$BizInboxCustomerSearchableEntry1 = b.platform;
            return c
        }
        var c = b.prototype;
        c.getPlatform = function() {
            return this.$BizInboxCustomerSearchableEntry1
        }
        ;
        return b
    }(b("SearchableEntry"));
    e.exports = a
}
), null);
__d("BizInboxCustomerRelaySearchSource", ["AbstractRelaySearchSource", "BizInboxCustomerSearchableEntry", "RelayModern", "nullthrows", "BizInboxCustomerRelaySearchSourceQuery.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;
    function h(a, c, d) {
        var e = g !== void 0 ? g : g = b("BizInboxCustomerRelaySearchSourceQuery.graphql");
        return {
            query: e,
            variables: {
                searchTerm: c,
                count: d,
                pageID: a,
                cursor: null
            }
        }
    }
    function i(a) {
        a = (a = a) != null ? (a = a.page) != null ? (a = a.page_unified_customer_search) != null ? a.edges : a : a : a;
        return !a ? [] : a.map(function(a) {
            var c, d, e;
            a = b("nullthrows")(a.node);
            var f = b("nullthrows")(a.id);
            e = (e = (e = a) != null ? e.name : e) != null ? e : "";
            d = (d = (d = a) != null ? (d = d.ig_profile_info) != null ? d.name : d : d) != null ? d : "";
            c = (c = a) != null ? (c = c.profile_photo_uris) != null ? (c = c[0]) != null ? c.uri : c : c : c;
            a = a.ig_profile_info !== null ? "INSTAGRAM" : "FACEBOOK";
            return new (b("BizInboxCustomerSearchableEntry"))({
                title: e,
                subtitle: d,
                uniqueID: f,
                uri: c,
                platform: a
            })
        }).filter(function(a) {
            return a !== null
        })
    }
    function j(a, b) {
        return b(a)
    }
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b(b, c, d) {
            return a.call(this, b, {
                bootstrapRequests: [],
                queryRequests: [{
                    gen: function(a) {
                        return h(c, a, d)
                    }
                }],
                packageFn: i,
                getAllForEmptyQuery: !0
            }, j) || this
        }
        return b
    }(b("AbstractRelaySearchSource"));
    e.exports = a
}
), null);
__d("BizInboxCustomerSelectorItem.react", ["cx", "BizInboxCustomerSearchableEntry", "BizInboxProfilePicConsts", "Image.react", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function i(a) {
        var c = h.jsx(b("Image.react"), {
            className: "_4ul-",
            height: b("BizInboxProfilePicConsts").SEARCH_CUSTOMER_PROFILE_PIC_SIZE,
            src: a.entry.getURI(),
            width: b("BizInboxProfilePicConsts").SEARCH_CUSTOMER_PROFILE_PIC_SIZE
        });
        if (a.entry instanceof b("BizInboxCustomerSearchableEntry")) {
            a = a.entry.getPlatform();
            return h.jsxs("div", {
                className: "_7yyd" + (a === "FACEBOOK" ? " _5m15" : "") + (a === "INSTAGRAM" ? " _5m16" : ""),
                height: b("BizInboxProfilePicConsts").SEARCH_CUSTOMER_PROFILE_PIC_SIZE,
                width: b("BizInboxProfilePicConsts").SEARCH_CUSTOMER_PROFILE_PIC_SIZE,
                children: [c, h.jsx("div", {
                    className: "_5m17",
                    children: h.jsx("div", {
                        className: "_5m18"
                    })
                })]
            })
        }
        return c
    }
    function a(a) {
        var b = a.entry;
        return h.jsxs("li", {
            className: "_7znk",
            onMouseDown: function(c) {
                return a.onSelect(b, c)
            },
            children: [h.jsx(i, {
                entry: b
            }), h.jsxs("div", {
                className: "_7zlb",
                children: [a.renderHighlight(b.getTitle()), h.jsx("div", {
                    className: Boolean(b.getSubtitle()) ? "_7zlc" : "",
                    children: b.getSubtitle()
                })]
            })]
        }, b.getUniqueID())
    }
}
), null);
__d("BizInboxLabelSearchableEntry", ["SearchableEntry"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b(b) {
            var c;
            c = a.call(this, {
                uniqueID: b.id,
                title: b.name
            }) || this;
            c.$BizInboxLabelSearchableEntry1 = b;
            return c
        }
        var c = b.prototype;
        c.getColor = function() {
            return "#" + this.$BizInboxLabelSearchableEntry1.color.substring(2)
        }
        ;
        c.getFBID = function() {
            return this.$BizInboxLabelSearchableEntry1.id
        }
        ;
        c.getName = function() {
            return this.$BizInboxLabelSearchableEntry1.name
        }
        ;
        c.getData = function() {
            return this.$BizInboxLabelSearchableEntry1
        }
        ;
        return b
    }(b("SearchableEntry"));
    e.exports = a
}
), null);
__d("BizInboxLabelSearchSource", ["AbstractSearchSource", "BizInboxLabelSearchableEntry"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(b) {
            var c;
            c = a.call(this) || this;
            c.$BizInboxLabelSearchSource1 = b;
            return c
        }
        var d = c.prototype;
        d.searchImpl = function(a, c) {
            var d = [];
            if (a) {
                var e = a.toLowerCase();
                this.$BizInboxLabelSearchSource1.forEach(function(a) {
                    a.name.toLowerCase().indexOf(e) !== -1 && d.push(a)
                })
            }
            var f = [];
            d.forEach(function(a) {
                f.push(new (b("BizInboxLabelSearchableEntry"))(a))
            });
            c(f, a)
        }
        ;
        return c
    }(b("AbstractSearchSource"));
    e.exports = a
}
), null);
__d("BizInboxLabelSelectorItem.react", ["GeoBaseText.react", "Image.react", "React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React"), i = {
        card: {
            maxWidth: "ankoer8y",
            marginTop: "me31rxa7"
        },
        dropdownItem: {
            alignItems: "c4ucwr1s",
            borderTop: "fdlay9lm",
            borderEnd: "d0g2dnh5",
            borderBottom: "abfur138",
            borderStart: "o2s82znv",
            color: "ffee8pcu",
            display: "szxkbqsu",
            flexDirection: "q1k9c523",
            fontSize: "o8oc0g1i",
            height: "lfxdtrhj",
            paddingTop: "fig0cxfd",
            paddingEnd: "q2fp8h1w",
            paddingBottom: "f2129259",
            paddingStart: "s78vq961",
            ":hover": {
                backgroundColor: "oruickhc"
            }
        },
        postPhotoPreview: {
            borderTopStartRadius: "q0w8oia0",
            borderTopEndRadius: "a20q33gi",
            borderBottomEndRadius: "noh2zq8w",
            borderBottomStartRadius: "cznzmuul",
            marginRight: "nt9q7nv0",
            verticalAlign: "bulhdrbm"
        },
        selector: {
            borderTopStartRadius: "mzg7rptu",
            borderTopEndRadius: "q6p943cg",
            borderBottomEndRadius: "eopy2srh",
            borderBottomStartRadius: "oa32sory",
            height: "e9ws1cvw",
            marginRight: "iw8mtwi3",
            width: "kwp11y93"
        }
    }, j = 32;
    function a(a) {
        var c, d = a.entry, e = d.getData();
        return h.jsx("li", {
            className: (g || (g = b("stylex")))(i.dropdownItem),
            onMouseDown: function(b) {
                return a.onSelect(d, b)
            },
            children: e.ctm_ad_metadata == null ? h.jsxs(h.Fragment, {
                children: [h.jsx("div", {
                    className: (g || (g = b("stylex")))(i.selector),
                    style: {
                        backgroundColor: d.getColor()
                    }
                }), h.jsx("span", {
                    style: {
                        flex: 1
                    },
                    children: a.renderHighlight(d.getTitle())
                })]
            }) : h.jsxs(h.Fragment, {
                children: [h.jsx(b("Image.react"), {
                    className: (g || (g = b("stylex")))(i.postPhotoPreview),
                    height: j,
                    src: (c = e.ctm_ad_metadata) == null ? void 0 : c.ad_photo_uri,
                    width: j
                }), h.jsxs("span", {
                    children: [h.jsx("div", {
                        style: {
                            flex: 1
                        },
                        children: a.renderHighlight(d.getTitle())
                    }), h.jsx(b("GeoBaseText.react"), {
                        color: "headingDescription",
                        display: "truncate",
                        size: "valueDescription",
                        xstyle: i.card,
                        children: (c = e.ctm_ad_metadata) == null ? void 0 : c.ad_title
                    })]
                })]
            })
        }, d.getUniqueID())
    }
}
), null);
__d("BizInboxCustomerAndLabelSelector.react", ["ix", "fbt", "BizInboxCustomerRelaySearchSource", "BizInboxCustomerSearchableEntry", "BizInboxCustomerSelectorItem.react", "BizInboxLabelSearchableEntry", "BizInboxLabelSearchSource", "BizInboxLabelSelectorItem.react", "BizInboxNavChannel", "CompositeSearchSource", "Image.react", "React", "RelayHooks", "ScrollableArea.react", "ShimButton.react", "TextSearchUtil", "asset", "stylex", "BizInboxCustomerAndLabelSelector_labels.graphql"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i, j = b("React"), k = i !== void 0 ? i : i = b("BizInboxCustomerAndLabelSelector_labels.graphql");
    function a(a) {
        var c = b("RelayHooks").useFragment(k, a.page);
        c = ((c = c.custom_labels) == null ? void 0 : c.edges) || [];
        c = c.map(function(a) {
            var b, c, d;
            b = (b = a.node) == null ? void 0 : b.id;
            c = (c = a.node) == null ? void 0 : c.name;
            d = (d = a.node) == null ? void 0 : d.label_color;
            a = ((a = a.node) == null ? void 0 : a.contact_count) || 0;
            if (c != null && b != null && d != null)
                return {
                    name: c,
                    id: b,
                    color: d,
                    thread_count: a
                }
        });
        var d = j.useRef(new (b("CompositeSearchSource"))([new (b("BizInboxCustomerRelaySearchSource"))(b("RelayHooks").useRelayEnvironment(),a.pageID,5), new (b("BizInboxLabelSearchSource"))(Array.from(c.filter(Boolean)))]));
        c = j.useState([]);
        var e = c[0]
          , f = c[1];
        j.useEffect(function() {
            d.current != null && d.current.search(a.searchTerm, function(a) {
                f(a)
            })
        }, [d, a.searchTerm]);
        function i(c) {
            var d = c;
            a.searchTerm && (d = b("TextSearchUtil").getTokens(c, a.searchTerm).map(function(a, b) {
                return a.isHighlighted ? j.jsx("span", {
                    className: "a2qhav0c",
                    children: a.text
                }, b) : a.text
            }));
            return j.jsx("span", {
                children: d
            })
        }
        function l(b) {
            a.onSelectLabel(b.getData())
        }
        function m(b) {
            a.onSelectCustomer(b.getUniqueID(), b.getTitle())
        }
        var n = []
          , o = [];
        e.map(function(a) {
            a instanceof b("BizInboxCustomerSearchableEntry") && !!a.getURI() ? n.push(j.jsx(b("BizInboxCustomerSelectorItem.react"), {
                entry: a,
                onSelect: m,
                renderHighlight: i
            }, a.getUniqueID())) : a instanceof b("BizInboxLabelSearchableEntry") && o.push(j.jsx(b("BizInboxLabelSelectorItem.react"), {
                entry: a,
                onSelect: l,
                renderHighlight: i
            }, a.getUniqueID()))
        });
        c = a.searchTerm.length > 2 && a.navChannel === b("BizInboxNavChannel").ALL || a.navChannel === b("BizInboxNavChannel").MESSENGER ? j.jsx(b("ShimButton.react"), {
            onMouseDown: a.onSelectMessengerContent,
            children: j.jsxs("div", {
                className: "impm63y7 dlm9sex9 pjtllp8g aekvkoqt iohogpxf eq6etb5q o8oc0g1i szxkbqsu fqx7lvqr qpxoxizc er0rly1v abfur138 a7ki207s c4ucwr1s",
                children: [j.jsx("div", {
                    className: "qjgl3k4o nt9q7nv0 q1s5q2it ge78swo1 szxkbqsu oa32sory eopy2srh q6p943cg mzg7rptu me2exgnx c4ucwr1s",
                    children: j.jsx(b("Image.react"), {
                        src: g("515638")
                    })
                }), h._("T\u00ecm ki\u1ebfm trong cu\u1ed9c tr\u00f2 chuy\u1ec7n tr\u00ean Messenger")]
            })
        }) : null;
        e = n.length > 0 ? j.jsx("div", {
            className: "dlm9sex9 f2129259 aekvkoqt fig0cxfd a2qhav0c a667ho4n a7ki207s",
            children: h._("NG\u01af\u1edcI")
        }) : null;
        var p = o.length > 0 ? j.jsx("div", {
            className: "dlm9sex9 f2129259 aekvkoqt fig0cxfd a2qhav0c a667ho4n a7ki207s",
            children: h._("NH\u00c3N")
        }) : null;
        return j.jsx(b("ScrollableArea.react"), {
            maxHeight: a.height,
            children: j.jsxs("div", {
                className: "o0vkfkqq joyip5vg dc28izrs qhea088j jaueedpx o2s82znv d0g2dnh5 fdlay9lm a7ki207s",
                children: [c, j.jsx("span", {
                    className: "g38g56k5 llizwoc6 rxyo04oa"
                }), e, n, j.jsx("span", {
                    className: "g38g56k5 llizwoc6 rxyo04oa"
                }), p, o]
            })
        })
    }
}
), null);
__d("BizInboxSearchListSpinner.react", ["CenteredContainer.react", "GeoSpinner.react", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        return g.jsx("div", {
            style: {
                height: a.height
            },
            children: g.jsx(b("CenteredContainer.react"), {
                fullHeight: !0,
                vertical: !0,
                children: g.jsx(b("GeoSpinner.react"), {
                    size: "large"
                })
            })
        })
    }
}
), null);
__d("BizInboxCustomerAndLabelSelectorContainer.react", ["BIZInboxClientLogger", "BizInboxCustomerAndLabelSelector.react", "BizInboxSearchListSpinner.react", "React", "RelayHooks", "bizInboxFilterFolderReducer", "useBizInboxFilterReducers", "BizInboxCustomerAndLabelSelectorContainerQuery.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React"), i = g !== void 0 ? g : g = b("BizInboxCustomerAndLabelSelectorContainerQuery.graphql");
    function a(a) {
        var c = {
            page_id: a.pageID
        };
        c = b("RelayHooks").useLazyLoadQuery(i, c);
        var d = b("useBizInboxFilterReducers")([b("bizInboxFilterFolderReducer")]);
        function e(c) {
            d({
                label: c,
                type: "search.select_label"
            }),
            b("BIZInboxClientLogger").logDifferentSearchClick(a.pageID, "", "LABEL", "show_p13n")
        }
        function f(c, e) {
            d({
                customerID: c,
                customerName: e,
                type: "search.select_customer"
            }),
            b("BIZInboxClientLogger").logDifferentSearchClick(a.pageID, "", "CUSTOMER", "show_p13n")
        }
        function g() {
            d({
                type: "search.select_messenger_content"
            }),
            b("BIZInboxClientLogger").logDifferentSearchClick(a.pageID, "", "CONTENT", "show_p13n")
        }
        return c.page == null ? h.jsx(b("BizInboxSearchListSpinner.react"), {
            height: a.height
        }) : h.jsx(b("BizInboxCustomerAndLabelSelector.react"), {
            height: a.height,
            navChannel: a.navChannel,
            page: c.page,
            pageID: a.pageID,
            searchTerm: a.searchTerm,
            onSelectLabel: e,
            onSelectCustomer: f,
            onSelectMessengerContent: g
        })
    }
}
), null);
__d("BizInboxSearchLabelResult.react", ["cssVar", "BizInboxSearchResultListContainer.react", "BizInboxThreadlistConsts", "BizInboxThreadListSpinner.react", "PagesSelectableSimpleList.react", "React", "RelayHooks", "BizInboxSearchLabelResult_result.graphql"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h, i = b("React"), j = h !== void 0 ? h : h = b("BizInboxSearchLabelResult_result.graphql");
    function a(a) {
        var c = b("RelayHooks").usePaginationFragment(j, babelHelpers["extends"]({}, a.searchResult))
          , d = c.data
          , e = c.hasNext
          , f = c.loadNext
          , g = ((c = d.search_result) == null ? void 0 : c.edges) || [];
        if (g.length === 0)
            return i.jsx("div", {});
        function h(a) {
            var b;
            b = (b = g[a].node) == null ? void 0 : b.id;
            return (b = b) != null ? b : a.toString()
        }
        function k(a) {
            a = (a = g[a].node) == null ? void 0 : a.id;
            return a == null ? null : i.jsx(i.Suspense, {
                fallback: i.jsx("div", {}),
                children: i.jsx(b("BizInboxSearchResultListContainer.react"), {
                    contactID: a,
                    isCustomerSearch: !1
                })
            })
        }
        function l() {
            e && f(b("BizInboxThreadlistConsts").SEARCH_THREAD_LOAD_MORE_COUNT)
        }
        return i.jsx(b("PagesSelectableSimpleList.react"), {
            canLoadMoreRows: e,
            height: a.height,
            loadingIndicator: i.jsx(b("BizInboxThreadListSpinner.react"), {}),
            onRequestMoreRows: l,
            rowCount: g.length,
            rowHeight: parseInt("80px", 10),
            rowKeyGetter: h,
            rowRenderer: k,
            showHeader: !1
        })
    }
}
), null);
__d("BizInboxSearchLabelResultContainer.react", ["BizInboxSearchLabelResult.react", "BizInboxThreadlistConsts", "React", "RelayHooks", "BizInboxSearchLabelResultContainerQuery.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React"), i = g !== void 0 ? g : g = b("BizInboxSearchLabelResultContainerQuery.graphql");
    function a(a) {
        var c = {
            count: b("BizInboxThreadlistConsts").SEARCH_THREAD_INIT_COUNT,
            labels: {
                labels: a.searchLabels.map(function(a) {
                    return a.id
                })
            }
        };
        c = b("RelayHooks").useLazyLoadQuery(i, c);
        return h.jsx(b("BizInboxSearchLabelResult.react"), {
            height: a.height,
            searchResult: c
        })
    }
}
), null);
__d("BizInboxSearchList.react", ["BizInboxAssignedAdminSelectorContainer.react", "BizInboxCustomerAndLabelSelectorContainer.react", "BizInboxSearchEmptyState.react", "BizInboxSearchLabelResultContainer.react", "BizInboxSearchListSpinner.react", "BizInboxSearchMessengerContentResultContainer.react", "BizInboxSearchResultListContainer.react", "React", "ScrollableArea.react"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.height
          , d = a.igMailboxID
          , e = a.navChannel
          , f = a.pageID
          , h = a.searchTerm
          , i = a.searchType
          , j = a.selectedAdminID
          , k = a.selectedCustomerID
          , l = null;
        switch (i) {
        case "ADMIN":
            l = g.jsx(b("BizInboxAssignedAdminSelectorContainer.react"), {
                height: c,
                igMailboxID: d,
                navChannel: e,
                pageID: f,
                searchTerm: h,
                selectedAdminID: j
            });
            break;
        case "LABEL":
            a.searchLabels.length > 0 ? l = g.jsx(b("BizInboxSearchLabelResultContainer.react"), {
                height: c,
                searchLabels: a.searchLabels
            }) : h.length === 0 ? l = g.jsx(b("BizInboxSearchEmptyState.react"), {
                searchType: "LABEL"
            }) : l = g.jsx(b("BizInboxCustomerAndLabelSelectorContainer.react"), {
                height: c,
                navChannel: e,
                pageID: f,
                searchTerm: h
            });
            break;
        case "CUSTOMER":
            a.searchTerm !== "" && k != null && (l = g.jsx(b("ScrollableArea.react"), {
                height: a.height,
                children: g.jsx(b("BizInboxSearchResultListContainer.react"), {
                    contactID: k,
                    isCustomerSearch: !0
                })
            }));
            break;
        case "CONTENT":
            h.length === 0 ? l = g.jsx(b("BizInboxSearchEmptyState.react"), {
                searchType: "CONTENT"
            }) : h.length > 2 && (l = g.jsx(b("BizInboxSearchMessengerContentResultContainer.react"), {
                height: c,
                searchTerm: h
            }));
            break
        }
        return g.jsx(g.Suspense, {
            fallback: g.jsx(b("BizInboxSearchListSpinner.react"), {
                height: c
            }),
            children: l
        })
    }
}
), null);
__d("BizInboxUnifiedThreadList.react", ["cssVar", "BIZInboxClientLogger", "BizInboxIGDirectThreadListRowContainer.react", "BizInboxMessengerThreadListRowContainer.react", "BizInboxThreadListSpinner.react", "PagesSelectableSimpleList.react", "QuickPerformanceLogger", "React", "nullthrows"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a(a) {
        var c = a.threadList
          , d = a.selectedThreadID
          , e = a.onSelectThread;
        h.useEffect(function() {
            b("BIZInboxClientLogger").logThreadListRenderView(a.pageID, "ALL", "show_p13n"),
            b("QuickPerformanceLogger").markerAnnotate(36251818, {
                string: {
                    p13n: "true",
                    page_id: a.pageID
                }
            }),
            b("QuickPerformanceLogger").markerEnd(36251818, 2)
        }, [a.pageID]);
        h.useEffect(function() {
            var a = c.length > 0 ? c[0] : null;
            d == null && a != null && (a.platform === "MESSENGER" ? e(a.threadID, "FB_MESSAGE") : e(a.threadID, "IG_MESSAGE"))
        }, [c, d, e]);
        function f(c) {
            c = a.threadList[c];
            if (c.platform === "INSTAGRAM_DIRECT") {
                var d;
                return b("nullthrows")((d = c.instagramThread) == null ? void 0 : d.token)
            }
            return b("nullthrows")((d = c.messengerThread) == null ? void 0 : d.thread_id)
        }
        function g(c) {
            var d, e = a.threadList[c];
            switch (e.platform) {
            case "INSTAGRAM_DIRECT":
                return h.jsx(b("BizInboxIGDirectThreadListRowContainer.react"), {
                    fetchFromUser: !1,
                    mailboxID: b("nullthrows")(a.igMailboxID),
                    rowIndex: c,
                    token: b("nullthrows")((d = e.instagramThread) == null ? void 0 : d.token),
                    onSelectThread: a.onSelectThread
                }, c);
            case "MESSENGER":
                return h.jsx(b("BizInboxMessengerThreadListRowContainer.react"), {
                    item: b("nullthrows")(e.messengerThread),
                    pageID: a.pageID,
                    rowIndex: c,
                    shouldAnimate: !1,
                    onSelectThread: a.onSelectThread
                }, c);
            default:
                return null
            }
        }
        return h.jsx(b("PagesSelectableSimpleList.react"), {
            canLoadMoreRows: a.hasMoreRows,
            "data-testid": void 0,
            height: a.height,
            loadingIndicator: h.jsx(b("BizInboxThreadListSpinner.react"), {}),
            onRequestMoreRows: a.onLoadMore,
            rowCount: a.threadList.length,
            rowHeight: parseInt("80px", 10),
            rowKeyGetter: f,
            rowRenderer: g,
            showHeader: !1
        })
    }
}
), null);
__d("BizInboxUnifiedThreadListContainer.react", ["BizInboxFolderUtils", "BizInboxMessengerFetcher", "BizInboxNavChannel", "BizInboxThreadlistConsts", "BizInboxThreadListEmptyState.react", "BizInboxThreadListLoading.react", "BizInboxThreadlistUtils", "BizInboxUnifiedThreadList.react", "CometHeroHoldTrigger.react", "CometPagelet.react", "FluxHooks", "IGMessageConnectionUtils", "IGMessageInboxStore", "LoadObject", "MercuryThreadInformer", "QuickPerformanceLogger", "React", "SubscriptionsHandler"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        g.useEffect(function() {
            b("QuickPerformanceLogger").markerStart(36251818)
        }, []);
        var c = g.useState(b("BizInboxThreadlistConsts").MESSAGE_THREAD_INIT_COUNT)
          , d = c[0]
          , e = c[1]
          , f = a.activeFolder
          , h = a.pageID
          , i = a.igMailboxID
          , j = a.igAccountID
          , k = a.selectedAdminID;
        c = b("FluxHooks").useFluxStore(b("IGMessageInboxStore"), g.useCallback(function(a) {
            if (i == null || i === "")
                return {
                    igInboxLoadObject: b("LoadObject").empty(),
                    igIsLoading: !1
                };
            try {
                var c = a.getInbox(i, d, null, b("BizInboxFolderUtils").convertToIGDirectFolder(f), !1, !1)
                  , e = c.getValue();
                j != null && b("IGMessageConnectionUtils").processInstagramMessageEventStream(j, i, e);
                return {
                    igInboxLoadObject: c,
                    igIsLoading: a.getIsInitLoading()
                }
            } catch (a) {
                return {
                    igInboxLoadObject: b("LoadObject").empty(),
                    igIsLoading: !1
                }
            }
        }, [f, i, j, d]));
        var l = c.igInboxLoadObject;
        c = c.igIsLoading;
        var m = g.useState(!0)
          , n = m[0]
          , o = m[1];
        m = g.useState([]);
        var p = m[0]
          , q = m[1];
        m = g.useState(0);
        var r = m[0]
          , s = m[1];
        m = g.useState(b("BizInboxThreadlistConsts").MESSAGE_THREAD_INIT_COUNT);
        var t = m[0]
          , u = m[1];
        g.useEffect(function() {
            o(!0),
            w(h, f, 0, b("BizInboxThreadlistConsts").MESSAGE_THREAD_INIT_COUNT, k)
        }, [f, h, o, q, k]);
        var v = g.useRef();
        g.useEffect(function() {
            v.current = b("MercuryThreadInformer").getForFBID(h);
            var a = new (b("SubscriptionsHandler"))();
            a.addSubscriptions(v.current.subscribe("threadlist-updated", function(a, b) {
                b.length > 0 && w(h, f, 0, r, k)
            }));
            return function() {
                a && a.release()
            }
        }, [f, h, k]);
        function w(c, a, e, f, d) {
            b("BizInboxMessengerFetcher").fetchMessageList(c, e, f, a, d, function() {
                var e = b("BizInboxMessengerFetcher").getMessageListForAdmin(c, d, a);
                q(e);
                o(!1);
                s(e.length)
            })
        }
        function x() {
            return b("BizInboxMessengerFetcher").hasMoreItem(a.activeFolder)
        }
        function y() {
            var a = l.getValue();
            return (a == null ? void 0 : (a = a.page_info) == null ? void 0 : a.has_next_page) === !0
        }
        function z() {
            var a = b("BizInboxThreadlistConsts").MESSAGE_THREAD_LOAD_MORE_COUNT;
            x() && w(h, f, r, a, k);
            y() && e(d + a);
            u(t + a)
        }
        if (n || c)
            return g.jsxs(g.Fragment, {
                children: [g.jsx(b("CometHeroHoldTrigger.react"), {
                    description: "Biz Inbox Unified Thread List Loading",
                    hold: !0
                }), g.jsx(b("BizInboxThreadListLoading.react"), {
                    height: a.height
                })]
            });
        m = l.getValue();
        n = b("BizInboxThreadlistUtils").getUnifiedThreadList(m, p, f);
        c = x() || y() || t < n.length;
        m = n.length === 0 ? g.jsx(b("BizInboxThreadListEmptyState.react"), {
            folder: f,
            height: a.height,
            navChannel: b("BizInboxNavChannel").MESSENGER
        }) : g.jsx(b("BizInboxUnifiedThreadList.react"), {
            hasMoreRows: c,
            height: a.height,
            igMailboxID: i,
            pageID: h,
            selectedThreadID: a.selectedThreadID,
            threadList: n.slice(0, t),
            onLoadMore: z,
            onSelectThread: a.onSelectThread
        });
        return g.jsx(b("CometPagelet.react").Placeholder, {
            fallback: g.jsx(b("BizInboxThreadListLoading.react"), {
                height: a.height
            }),
            name: "BizP13NInboxUinifiedThreadListView",
            children: m
        })
    }
}
), null);
__d("BizInboxThreadListViewBody.react", ["BizInboxAccountConnection.react", "BizInboxCommentThreadListContainer.react", "BizInboxFilterContext", "BizInboxIGDirectThreadListContainer.react", "BizInboxMessengerThreadListContainer.react", "BizInboxNavChannel", "BizInboxSearchList.react", "BizInboxStateContext", "BizInboxThreadListLoading.react", "BizInboxUnifiedThreadListContainer.react", "CometPagelet.react", "React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = g.useContext(b("BizInboxStateContext"))
          , d = c.pageID
          , e = c.igAccountID
          , f = c.igMailboxID
          , h = c.navChannel;
        c = c.selectedThreadID;
        var i = g.useContext(b("BizInboxFilterContext"))
          , j = i.isSearchActive
          , k = i.searchTerm
          , l = i.searchType
          , m = i.selectedAdmin
          , n = i.selectedCustomerID;
        i = i.searchLabels;
        m = m.id;
        if (j)
            return g.jsx(b("BizInboxSearchList.react"), {
                height: a.height,
                igMailboxID: f,
                navChannel: h,
                pageID: d,
                selectedAdminID: m,
                selectedCustomerID: n,
                searchTerm: k,
                searchType: l,
                searchLabels: i
            });
        switch (a.navChannel) {
        case b("BizInboxNavChannel").ALL:
            return g.jsx(b("BizInboxUnifiedThreadListContainer.react"), {
                activeFolder: a.activeFolder,
                height: a.height,
                pageID: d,
                igAccountID: e,
                igMailboxID: f,
                selectedAdminID: m,
                selectedThreadID: c,
                onSelectThread: a.onSelectThread
            });
        case b("BizInboxNavChannel").MESSENGER:
            return g.jsx(b("BizInboxMessengerThreadListContainer.react"), {
                activeFolder: a.activeFolder,
                height: a.height,
                pageID: d,
                selectedAdminID: m,
                selectedThreadID: c,
                onSelectThread: a.onSelectThread
            });
        case b("BizInboxNavChannel").INSTAGRAM_DIRECT:
            return f == null || f === "" ? g.jsx("div", {
                className: "ombajpry kerwu6uh a7ki207s",
                children: g.jsx(b("BizInboxAccountConnection.react"), {
                    navChannel: b("BizInboxNavChannel").INSTAGRAM_DIRECT,
                    pageToken: ""
                })
            }) : g.jsx(b("BizInboxIGDirectThreadListContainer.react"), {
                activeFolder: a.activeFolder,
                height: a.height,
                igAccountID: e,
                mailboxID: f,
                selectedThreadID: c,
                onSelectThread: a.onSelectThread
            });
        case b("BizInboxNavChannel").FACEBOOK:
        case b("BizInboxNavChannel").INSTAGRAM:
            return (f == null || f === "") && a.navChannel === b("BizInboxNavChannel").INSTAGRAM ? g.jsx("div", {
                className: "ombajpry kerwu6uh a7ki207s",
                children: g.jsx(b("BizInboxAccountConnection.react"), {
                    navChannel: b("BizInboxNavChannel").INSTAGRAM,
                    pageToken: ""
                })
            }) : g.jsx(b("CometPagelet.react").Placeholder, {
                fallback: g.jsx(b("BizInboxThreadListLoading.react"), {
                    height: a.height
                }),
                name: "BizP13NInboxCommentListView",
                children: g.jsx(b("BizInboxCommentThreadListContainer.react"), {
                    activeFolder: a.activeFolder,
                    height: a.height,
                    navChannel: a.navChannel,
                    pageID: d,
                    selectedThreadID: c,
                    onSelectThread: a.onSelectThread
                })
            });
        default:
            return null
        }
    }
}
), null);
__d("BizInboxAwayInfo.react", ["fbt", "AdsInterfacesRouter", "BizInboxNavChannel", "BizInboxNavChannelUtils", "BizInboxTimeUtils", "BizKitUnifiedRoutingUtils", "DateTime", "FDSText.react", "Link.react", "React", "XPagesManagerInboxController", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a(a) {
        var c = a.awayTimeRanges
          , d = a.awayTimezone
          , e = a.expireTimestamp
          , f = a.isAway
          , i = a.navChannel;
        i = b("BizInboxNavChannelUtils").isMessagingChannel(i);
        if (!i || f !== !0 || c == null || d == null)
            return null;
        function j() {
            var a = h.jsx(b("Link.react"), {
                onClick: k,
                children: g._("Ch\u1ec9nh s\u1eeda")
            });
            if (e == null)
                return g._("B\u1ea1n \u0111\u00e3 l\u00ean l\u1ecbch \u0111\u1ec3 Trang lu\u00f4n v\u1eafng m\u1eb7t. H\u1ec7 th\u1ed1ng s\u1ebd g\u1eedi tin nh\u1eafn v\u1eafng m\u1eb7t. {linkToAwaySettings}", [g._param("linkToAwaySettings", a)]);
            var f = b("BizInboxTimeUtils").getIsRequestTimeInAwayTimeRange(d, b("BizInboxTimeUtils").getTimeRangesFromJson(c))
              , i = b("BizInboxTimeUtils").isTimeInAwayTimeRange(b("DateTime").create(e - 1, b("BizInboxTimeUtils").getTimezoneID(d)), d, b("BizInboxTimeUtils").getTimeRangesFromJson(c));
            return f && i ? g._("B\u1ea1n \u0111\u00e3 l\u00ean l\u1ecbch \u0111\u1ec3 Trang v\u1eafng m\u1eb7t v\u00e0o th\u1eddi \u0111i\u1ec3m n\u00e0y m\u1ed7i tu\u1ea7n. H\u1ec7 th\u1ed1ng s\u1ebd g\u1eedi tin nh\u1eafn v\u1eafng m\u1eb7t. {linkToAwaySettings}", [g._param("linkToAwaySettings", a)]) : null
        }
        function k() {
            var a = b("BizKitUnifiedRoutingUtils").getBizKitUnifiedRouteName("AUTOMATED_RESPONSES");
            a && b("AdsInterfacesRouter").get().navigateTo(a)
        }
        function l(a) {
            a = b("DateTime").localCreate(a);
            var c = b("DateTime").localNow();
            return b("BizInboxTimeUtils").getFormatedTime(a, c)
        }
        function m() {
            var b;
            e !== null && e !== void 0 && e !== 0 ? b = g._("{page name} v\u1eafng m\u1eb7t cho \u0111\u1ebfn {time}.", [g._param("page name", a.businessName), g._param("time", l(e))]) : b = g._("{page name} lu\u00f4n v\u1eafng m\u1eb7t.", [g._param("page name", a.businessName)]);
            return b
        }
        return h.jsxs("div", {
            className: "tqxp6lz2 kvv17p06 c04nxgez dlm9sex9 bws7fzug aekvkoqt c045mnpe fqx7lvqr fdlay9lm eahtk6vg skrmtq1g t8t4pgnf a7ki207s",
            children: [h.jsx(b("FDSText.react"), {
                color: "negative",
                size: "body1",
                children: m()
            }), h.jsx(b("FDSText.react"), {
                color: "placeholder",
                display: "block",
                size: "body3",
                children: j()
            })]
        })
    }
}
), null);
__d("BizInboxAwayToggleSubscription", ["RelayModern", "RelayRTIGraphQLSubscriptionTopicProvider", "BizInboxAwayToggleSubscription.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    f.subscribe = a;
    var g, h = g !== void 0 ? g : g = b("BizInboxAwayToggleSubscription.graphql");
    b("RelayRTIGraphQLSubscriptionTopicProvider").registerProviderForQuery(h, function(a) {
        a = a.input;
        a = a.page_id;
        return "gqls/page_away_toggle_subscribe/page_id_" + a
    });
    function a(a, c) {
        return b("RelayModern").requestSubscription(a, {
            subscription: h,
            variables: {
                input: c
            }
        })
    }
}
), null);
__d("BizInboxConfigUtils", ["BizInboxNavChannel"], (function(a, b, c, d, e, f) {
    "use strict";
    f.parseDefaultChannel = a;
    f.parseDefaultPlatform = c;
    function a(a) {
        switch (a) {
        case b("BizInboxNavChannel").ALL:
        case b("BizInboxNavChannel").INBOX:
            return b("BizInboxNavChannel").ALL;
        case b("BizInboxNavChannel").MESSENGER:
            return b("BizInboxNavChannel").MESSENGER;
        case b("BizInboxNavChannel").INSTAGRAM_DIRECT:
            return b("BizInboxNavChannel").INSTAGRAM_DIRECT;
        case b("BizInboxNavChannel").FACEBOOK:
            return b("BizInboxNavChannel").FACEBOOK;
        case b("BizInboxNavChannel").INSTAGRAM:
            return b("BizInboxNavChannel").INSTAGRAM;
        case b("BizInboxNavChannel").AUTOMATED_RESPONSES:
            return b("BizInboxNavChannel").AUTOMATED_RESPONSES;
        case b("BizInboxNavChannel").COMMERCE_EMAIL:
            return b("BizInboxNavChannel").COMMERCE_EMAIL;
        case b("BizInboxNavChannel").EMAIL_CAMPAIGN:
            return b("BizInboxNavChannel").EMAIL_CAMPAIGN;
        case b("BizInboxNavChannel").CONTACTS:
            return b("BizInboxNavChannel").CONTACTS;
        default:
            return b("BizInboxNavChannel").ALL
        }
    }
    function c(a) {
        switch (a) {
        case b("BizInboxNavChannel").ALL:
        case b("BizInboxNavChannel").INBOX:
            return "ALL";
        case b("BizInboxNavChannel").MESSENGER:
            return "MESSENGER";
        case b("BizInboxNavChannel").INSTAGRAM_DIRECT:
            return "INSTAGRAM_DIRECT";
        case b("BizInboxNavChannel").FACEBOOK:
            return "FACEBOOK";
        case b("BizInboxNavChannel").INSTAGRAM:
            return "INSTAGRAM";
        default:
            return null
        }
    }
}
), null);
__d("BizInboxFilterLabels.react", ["ix", "cssVar", "fbt", "BizInboxFolderUtils", "Image.react", "PageCommItemFolder", "React", "SUIBusinessThemeContainer.react", "SUIToken.react", "asset", "stylex"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    e.exports = a;
    var j = b("React");
    function a(a) {
        var c = b("BizInboxFolderUtils").getIsFilter(a.activeFolder)
          , d = a.selectedAdmin.id != null;
        if (!c && !d)
            return null;
        function e() {
            switch (a.activeFolder) {
            case b("PageCommItemFolder").FOLLOW_UP:
                return j.jsx(b("Image.react"), {
                    className: "kh2jv2wv",
                    src: g("1002993")
                });
            case b("PageCommItemFolder").UNREAD:
                return j.jsx(b("Image.react"), {
                    className: "kh2jv2wv",
                    src: g("795293")
                })
            }
        }
        function f() {
            a.onActiveFolderChange(b("PageCommItemFolder").TODO)
        }
        function h() {
            return !c ? null : j.jsx(b("SUIToken.react"), {
                icon: e(),
                label: b("BizInboxFolderUtils").getLabel(a.activeFolder),
                onRemove: f,
                style: {
                    color: "#606770",
                    paddingTop: "16px",
                    paddingBottom: "16px",
                    margin: "8px",
                    borderRadius: "4px",
                    fontWeight: "bold",
                    borderStyle: "unset"
                }
            })
        }
        function k() {
            var c;
            if (!d)
                return null;
            return a.selectedAdmin.id === "NONE" ? l() : j.jsx(b("SUIToken.react"), {
                icon: j.jsx(b("Image.react"), {
                    className: "ji4yul8v kh2jv2wv oa32sory eopy2srh q6p943cg mzg7rptu",
                    src: (c = a.selectedAdmin) == null ? void 0 : c.photoURL
                }),
                label: (c = a.selectedAdmin) == null ? void 0 : c.name,
                onRemove: a.onRemoveAssignedFilter,
                style: {
                    color: "#606770",
                    paddingTop: "16px",
                    paddingBottom: "16px",
                    margin: "8px",
                    borderRadius: "4px",
                    fontWeight: "bold",
                    borderStyle: "unset"
                }
            })
        }
        function l() {
            return j.jsx(b("SUIToken.react"), {
                icon: j.jsx(b("Image.react"), {
                    className: "kh2jv2wv",
                    src: g("1166631")
                }),
                label: i._("Cu\u1ed9c tr\u00f2 chuy\u1ec7n ch\u01b0a \u0111\u01b0\u1ee3c ch\u1ec9 \u0111\u1ecbnh"),
                onRemove: a.onRemoveAssignedFilter,
                style: {
                    color: "#606770",
                    paddingTop: "16px",
                    paddingBottom: "16px",
                    margin: "8px",
                    borderRadius: "4px",
                    fontWeight: "bold",
                    borderStyle: "unset"
                }
            })
        }
        return j.jsx("div", {
            className: "bp36yovu naxyqfrq szxkbqsu jaueedpx pbr7oyhs",
            children: j.jsxs(b("SUIBusinessThemeContainer.react"), {
                children: [h(), k()]
            })
        })
    }
}
), null);
__d("BizInboxThreadListViewHeaderFolderSelector.react", ["ix", "fbt", "BizInboxFolderUtils", "BizInboxNavChannel", "Image.react", "React", "asset", "stylex"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i = b("React");
    function a(a) {
        function c(b) {
            return i.jsxs("div", {
                className: "m2ug6lxg okoo9ckb ombajpry er0rly1v g4h15vx2 q5osuyrr pbr7oyhs",
                children: [b.map(function(b) {
                    return i.jsx("div", {
                        className: "qcixwzj3 ablh7bkb ba8nmgzr q3n6uzp4 fqx7lvqr" + (a.activeFolder === b ? " h6swc0wa" : ""),
                        onClick: function() {
                            return a.onActiveFolderChange(b)
                        },
                        role: "none",
                        children: d(b)
                    }, "item_" + b)
                }), e() ? f() : null]
            })
        }
        function d(a) {
            var c = b("BizInboxFolderUtils").getFolderImage(a);
            return i.jsxs("div", {
                className: "kerwu6uh mlg5n5bf",
                children: [i.jsx("div", {
                    className: "eitrnnnw bulhdrbm a2qhav0c o8oc0g1i dqiucr32",
                    children: i.jsx(b("Image.react"), {
                        className: "qb8mexw6 llizwoc6",
                        src: c
                    })
                }), i.jsx("div", {
                    className: "eitrnnnw bulhdrbm a2qhav0c o8oc0g1i dqiucr32",
                    style: {
                        color: b("BizInboxFolderUtils").getFolderColor(a)
                    },
                    children: b("BizInboxFolderUtils").getFolderLabel(a)
                })]
            })
        }
        function e() {
            var c = [b("BizInboxNavChannel").ALL, b("BizInboxNavChannel").MESSENGER, b("BizInboxNavChannel").INSTAGRAM_DIRECT];
            c = c.includes(a.navChannel);
            return c && a.isFilterChangeActive
        }
        function f() {
            return i.jsx("div", {
                className: "qcixwzj3 ablh7bkb ba8nmgzr q3n6uzp4 fqx7lvqr",
                onClick: a.onClickAssignedFilter,
                role: "none",
                children: i.jsxs("div", {
                    className: "kerwu6uh mlg5n5bf",
                    children: [i.jsx("div", {
                        className: "eitrnnnw bulhdrbm a2qhav0c o8oc0g1i dqiucr32",
                        children: i.jsx(b("Image.react"), {
                            className: "qb8mexw6 llizwoc6",
                            src: g("946924")
                        })
                    }), i.jsx("div", {
                        className: "eitrnnnw bulhdrbm a2qhav0c o8oc0g1i dqiucr32",
                        children: h._("Assigned")
                    })]
                })
            })
        }
        if (a.isFolderChangeActive) {
            var j = b("BizInboxFolderUtils").getInboxFolders();
            return c(j)
        } else if (a.isFilterChangeActive) {
            j = b("BizInboxFolderUtils").getInboxFilters();
            return c(j)
        }
        return i.jsx("div", {})
    }
}
), null);
__d("BizInboxSearchToken.react", ["BizInboxThreadlistLabel.react", "React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.entry.getData();
        function d() {
            a.onRemove(a.entry)
        }
        return g.jsx(b("BizInboxThreadlistLabel.react"), {
            className: "en7qvdmu lvmycag6 ixgcffqo qw3iel1b kh2jv2wv q1s5q2it ra6oydaf q1k9c523 szxkbqsu jz4162v5 qa7t2avw o7lfnw66 jnx77p5z ls41ssr7 o2s82znv abfur138 d0g2dnh5 fdlay9lm uwr7o3jg c4ucwr1s",
            color: c.color,
            id: c.id,
            isToken: !0,
            name: c.name,
            onRemove: d
        }, c.name)
    }
}
), null);
__d("BizInboxSearchBar.react", ["ix", "cx", "fbt", "BizInboxLabelSearchableEntry", "BizInboxSearchToken.react", "BizInboxThreadlistConsts", "DummySearchSource", "FreeformSearchSource", "Image", "Link.react", "React", "XUITokenizer.react", "asset", "stylex"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    e.exports = a;
    var j = b("React");
    function a(a) {
        function c(b) {
            a.onUpdateSearchTerm(b.target.value)
        }
        function d() {
            return i._("T\u00ecm ki\u1ebfm")
        }
        var e = j.useRef(new (b("FreeformSearchSource"))(new (b("DummySearchSource"))(),function(a) {
            return a
        }
        ,0))
          , f = a.searchLabels.map(function(a) {
            return new (b("BizInboxLabelSearchableEntry"))(a)
        });
        function h(a, b) {
            return a.length > b ? a.slice(0, b) + "..." : a
        }
        h = a.selectedCustomerID != null ? j.jsx("span", {
            className: "bp36yovu kerwu6uh q1k9c523 szxkbqsu c4ucwr1s",
            children: h(a.searchTerm, b("BizInboxThreadlistConsts").MAX_SEARCH_TOKEN_LENGTH_BEFORE_TRUNCATE)
        }) : j.jsx(b("XUITokenizer.react"), {
            className: "_2dua",
            entries: f,
            focusedOnInit: !0,
            hideViewWithEntries: !1,
            maxEntries: 5,
            onAddEntryAttempt: function() {},
            onChange: c,
            onEnterWithoutSelection: c,
            onQueryStringChange: c,
            onRemoveEntryAttempt: a.onRemoveLabel,
            placeholder: d(),
            presenter: {
                TokenRenderer: b("BizInboxSearchToken.react")
            },
            queryString: a.searchTerm,
            searchSource: e.current,
            showEntriesOnFocus: !0
        });
        return j.jsxs("div", {
            className: "g74ybd0t szxkbqsu c4ucwr1s",
            children: [j.jsx(b("Link.react"), {
                className: "a2qhav0c o8oc0g1i eitrnnnw",
                onClick: a.onCancelSearch,
                children: j.jsx(b("Image"), {
                    className: "bulhdrbm l7j52awj",
                    source: g("493879")
                })
            }), h]
        })
    }
}
), null);
__d("BizInboxSearchBarContainer.react", ["BIZInboxClientLogger", "BizInboxFilterContext", "BizInboxSearchBar.react", "React", "bizInboxFilterFolderReducer", "useBizInboxFilterReducers"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = g.useContext(b("BizInboxFilterContext"))
          , d = c.searchTerm
          , e = c.searchLabels;
        c = c.selectedCustomerID;
        var f = b("useBizInboxFilterReducers")([b("bizInboxFilterFolderReducer")]);
        function h() {
            f({
                type: "search.clear"
            }),
            b("BIZInboxClientLogger").logSearchCancelClick(a.pageID, "show_p13n")
        }
        function i(a) {
            f({
                searchTerm: a,
                type: "search.update"
            })
        }
        function j(a) {
            f({
                label: a.getData(),
                type: "search.remove_label"
            })
        }
        return g.jsx(b("BizInboxSearchBar.react"), {
            searchLabels: e,
            searchTerm: d,
            selectedCustomerID: c,
            onUpdateSearchTerm: i,
            onCancelSearch: h,
            onRemoveLabel: j
        })
    }
}
), null);
__d("BizInboxThreadListViewHeaderLeftContent.react", ["ix", "BizInboxFbtUtils", "BizInboxSearchBarContainer.react", "GeoText.react", "Image", "Link.react", "PageCommItemStatusUtil", "React", "asset", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function i(a) {
        return h.jsxs(b("Link.react"), {
            className: "a2qhav0c o8oc0g1i eitrnnnw",
            onClick: a.isFilterChangeActive ? a.toggleFilterSelector : a.toggleFolderSelector,
            children: [h.jsx(b("Image"), {
                className: "bulhdrbm a0bfl89b gycka5e1 l7j52awj",
                source: g("493879")
            }), h.jsx("span", {
                className: "bulhdrbm a0bfl89b gycka5e1 l7j52awj qupiiq8e",
                children: b("BizInboxFbtUtils").getThreadlistHeaderCloseMenuLabel()
            })]
        })
    }
    function j(a) {
        var c = b("PageCommItemStatusUtil").getLabel(b("PageCommItemStatusUtil").getThreadsManagementStatus(a.activeFolder));
        return h.jsx("div", {
            className: "cy7pp0ya gng4jb5z lvmycag6 j14zrrqg qw3iel1b r35jk0jx ktaznidv rab4pwmj rz7pphsr h6swc0wa",
            children: h.jsxs(b("Link.react"), {
                className: "a2qhav0c o8oc0g1i eitrnnnw",
                onClick: a.toggleFolderSelector,
                children: [h.jsx("span", {
                    className: "bulhdrbm a0bfl89b gycka5e1 l7j52awj",
                    children: h.jsx(b("GeoText.react"), {
                        children: c
                    })
                }), h.jsx(b("Image"), {
                    className: "bulhdrbm l7j52awj",
                    source: g("481884")
                })]
            })
        })
    }
    function k(a) {
        return h.jsx(b("BizInboxSearchBarContainer.react"), {
            pageID: a
        })
    }
    function a(a) {
        if (a.isSearchActive)
            return k(a.pageID);
        return a.isFolderChangeActive || a.isFilterChangeActive ? i(a) : j(a)
    }
}
), null);
__d("BizInboxAwayToggleAlwaysAwayDialog.react", ["fbt", "GeoBaseText.react", "GeoButton.react", "GeoCancelButton.react", "GeoModal.react", "GeoModalFooter.react", "GeoModalHeader.react", "GeoSection.react", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a(a) {
        return h.jsx(b("GeoModal.react"), {
            footer: h.jsx(b("GeoModalFooter.react"), {
                primaryButton: h.jsx(b("GeoButton.react"), {
                    label: g._("OK"),
                    onClick: a.onConfirmClick,
                    variant: "primary"
                }),
                secondaryButton: h.jsx(b("GeoCancelButton.react"), {})
            }),
            header: h.jsx(b("GeoModalHeader.react"), {
                heading: g._("Chuy\u1ec3n Trang sang ch\u1ebf \u0111\u1ed9 c\u00f3 m\u1eb7t?")
            }),
            isShown: a.isShown,
            onHide: a.onCancelClick,
            children: h.jsx(b("GeoSection.react"), {
                children: h.jsx(b("GeoBaseText.react"), {
                    color: "value",
                    size: "value",
                    children: g._("B\u1ea1n \u0111\u00e3 l\u00ean l\u1ecbch cho Trang c\u1ee7a m\u00ecnh l\u00e0 lu\u00f4n v\u1eafng m\u1eb7t n\u00ean n\u1ebfu gi\u1edd b\u1ea1n chuy\u1ec3n sang ch\u1ebf \u0111\u1ed9 c\u00f3 m\u1eb7t th\u00ec l\u1ecbch v\u1eafng m\u1eb7t kia s\u1ebd kh\u00f4ng c\u00f2n n\u1eefa. B\u1ea1n c\u00f3 th\u1ec3 l\u00ean l\u1ecbch v\u1eafng m\u1eb7t cho Trang trong tab Tin tr\u1ea3 l\u1eddi t\u1ef1 \u0111\u1ed9ng.")
                })
            })
        })
    }
}
), null);
__d("BizInboxAwayToggleAvailableSection.react", ["fbt", "FBCheckbox.react", "GeoBaseText.react", "React", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a(a) {
        if (a.getShouldShowIGDirectAutomatedResponse) {
            var c = g._("B\u1ea1n s\u1ebd nh\u1eadn \u0111\u01b0\u1ee3c th\u00f4ng b\u00e1o khi m\u1ecdi ng\u01b0\u1eddi g\u1eedi tin nh\u1eafn cho {page name} tr\u00ean Instagram v\u00e0 Messenger.", [g._param("page name", a.pageName)]);
            a.igDirectPlatformEnabled === !0 && a.messengerPlatformEnabled === !1 ? c = g._("B\u1ea1n s\u1ebd nh\u1eadn \u0111\u01b0\u1ee3c th\u00f4ng b\u00e1o khi m\u1ecdi ng\u01b0\u1eddi g\u1eedi tin nh\u1eafn cho {page name} tr\u00ean Instagram.", [g._param("page name", a.pageName)]) : (a.igDirectPlatformEnabled === !1 && a.messengerPlatformEnabled === !0 || a.isIGDirectConnected === !1) && (c = g._("B\u1ea1n s\u1ebd nh\u1eadn \u0111\u01b0\u1ee3c th\u00f4ng b\u00e1o khi m\u1ecdi ng\u01b0\u1eddi g\u1eedi tin nh\u1eafn cho {page name} trong Messenger.", [g._param("page name", a.pageName)]));
            return h.jsxs("div", {
                className: "kzpzqbg6 oozrexbl fjkh8qh2 f7ebnjy3 szxkbqsu",
                children: [h.jsx(b("FBCheckbox.react"), {
                    checked: a.isChecked,
                    onToggle: a.onToggle
                }), h.jsxs("div", {
                    className: "o1nw3vsw bp36yovu",
                    children: [h.jsx(b("GeoBaseText.react"), {
                        color: "success",
                        display: "block",
                        size: "value",
                        children: g._("\u0110ang c\u00f3 m\u1eb7t")
                    }), h.jsx(b("GeoBaseText.react"), {
                        color: "placeholder",
                        display: "block",
                        size: "value",
                        children: c
                    })]
                })]
            })
        }
        return h.jsxs("div", {
            className: "kzpzqbg6 oozrexbl fjkh8qh2 f7ebnjy3 szxkbqsu",
            children: [h.jsx(b("FBCheckbox.react"), {
                checked: a.isChecked,
                onToggle: a.onToggle
            }), h.jsxs("div", {
                className: "o1nw3vsw bp36yovu",
                children: [h.jsx(b("GeoBaseText.react"), {
                    color: "success",
                    display: "block",
                    size: "value",
                    children: g._("\u0110ang c\u00f3 m\u1eb7t")
                }), h.jsx(b("GeoBaseText.react"), {
                    color: "placeholder",
                    display: "block",
                    size: "value",
                    children: g._("B\u1ea1n s\u1ebd nh\u1eadn \u0111\u01b0\u1ee3c th\u00f4ng b\u00e1o khi m\u1ecdi ng\u01b0\u1eddi g\u1eedi tin nh\u1eafn cho {page name} trong Messenger.", [g._param("page name", a.pageName)])
                })]
            })]
        })
    }
}
), null);
__d("BizInboxAwayToggleAwaySection.react", ["fbt", "FBCheckbox.react", "GeoBaseText.react", "React", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a(a) {
        if (a.getShouldShowIGDirectAutomatedResponse) {
            var c = g._("{page name} s\u1ebd v\u1eafng m\u1eb7t trong 12 gi\u1edd ho\u1eb7c trong bao l\u00e2u t\u00f9y \u00fd b\u1ea1n \u0111\u1eb7t. Nh\u1eefng ng\u01b0\u1eddi nh\u1eafn tin cho b\u1ea1n tr\u00ean Instagram v\u00e0 Messenger s\u1ebd nh\u1eadn \u0111\u01b0\u1ee3c tin nh\u1eafn v\u1eafng m\u1eb7t. C\u00f2n b\u1ea1n s\u1ebd kh\u00f4ng nh\u1eadn \u0111\u01b0\u1ee3c th\u00f4ng b\u00e1o khi c\u00f3 tin nh\u1eafn. S\u1ed1 tin nh\u1eafn \u0111\u00e3 nh\u1eadn s\u1ebd kh\u00f4ng \u0111\u01b0\u1ee3c t\u00ednh v\u00e0o t\u1ef7 l\u1ec7 ph\u1ea3n h\u1ed3i v\u00e0 th\u1eddi gian ph\u1ea3n h\u1ed3i c\u1ee7a b\u1ea1n tr\u00ean Messenger.", [g._param("page name", a.pageName)]);
            a.igDirectPlatformEnabled === !0 && a.messengerPlatformEnabled === !1 ? c = g._("{page name} s\u1ebd v\u1eafng m\u1eb7t trong 12 gi\u1edd ho\u1eb7c trong bao l\u00e2u t\u00f9y \u00fd b\u1ea1n \u0111\u1eb7t. Nh\u1eefng ng\u01b0\u1eddi nh\u1eafn tin cho b\u1ea1n tr\u00ean Instagram s\u1ebd nh\u1eadn \u0111\u01b0\u1ee3c tin nh\u1eafn v\u1eafng m\u1eb7t. C\u00f2n b\u1ea1n s\u1ebd kh\u00f4ng nh\u1eadn \u0111\u01b0\u1ee3c th\u00f4ng b\u00e1o khi c\u00f3 tin nh\u1eafn.", [g._param("page name", a.pageName)]) : (a.igDirectPlatformEnabled === !1 && a.messengerPlatformEnabled === !0 || a.isIGDirectConnected === !1) && (c = g._("{page name} s\u1ebd v\u1eafng m\u1eb7t trong 12 gi\u1edd ho\u1eb7c trong bao l\u00e2u t\u00f9y \u00fd b\u1ea1n \u0111\u1eb7t. Nh\u1eefng ng\u01b0\u1eddi nh\u1eafn tin cho b\u1ea1n trong Messenger s\u1ebd nh\u1eadn \u0111\u01b0\u1ee3c tin nh\u1eafn v\u1eafng m\u1eb7t. C\u00f2n b\u1ea1n s\u1ebd kh\u00f4ng nh\u1eadn \u0111\u01b0\u1ee3c th\u00f4ng b\u00e1o khi c\u00f3 tin nh\u1eafn. S\u1ed1 tin nh\u1eafn \u0111\u00e3 nh\u1eadn s\u1ebd kh\u00f4ng \u0111\u01b0\u1ee3c t\u00ednh v\u00e0o t\u1ef7 l\u1ec7 ph\u1ea3n h\u1ed3i v\u00e0 th\u1eddi gian ph\u1ea3n h\u1ed3i c\u1ee7a Trang.", [g._param("page name", a.pageName)]));
            return h.jsxs("div", {
                className: "kzpzqbg6 oozrexbl fjkh8qh2 f7ebnjy3 szxkbqsu",
                children: [h.jsx(b("FBCheckbox.react"), {
                    checked: a.isChecked,
                    onToggle: a.onToggle
                }), h.jsxs("div", {
                    className: "o1nw3vsw bp36yovu",
                    children: [h.jsx(b("GeoBaseText.react"), {
                        color: "error",
                        display: "block",
                        size: "value",
                        children: g._("V\u1eafng m\u1eb7t")
                    }), h.jsx(b("GeoBaseText.react"), {
                        color: "placeholder",
                        display: "block",
                        size: "value",
                        children: c
                    })]
                })]
            })
        }
        return h.jsxs("div", {
            className: "kzpzqbg6 oozrexbl fjkh8qh2 f7ebnjy3 szxkbqsu",
            children: [h.jsx(b("FBCheckbox.react"), {
                checked: a.isChecked,
                onToggle: a.onToggle
            }), h.jsxs("div", {
                className: "o1nw3vsw bp36yovu",
                children: [h.jsx(b("GeoBaseText.react"), {
                    color: "error",
                    display: "block",
                    size: "value",
                    children: g._("V\u1eafng m\u1eb7t")
                }), h.jsxs(b("GeoBaseText.react"), {
                    color: "placeholder",
                    display: "block",
                    size: "value",
                    children: [a.isChecked ? null : g._("{page name} s\u1ebd v\u1eafng m\u1eb7t trong 12 gi\u1edd ho\u1eb7c trong bao l\u00e2u t\u00f9y \u00fd b\u1ea1n \u0111\u1eb7t.", [g._param("page name", a.pageName)]), " ", g._("Nh\u1eefng ng\u01b0\u1eddi nh\u1eafn tin cho {page name} s\u1ebd nh\u1eadn \u0111\u01b0\u1ee3c tin nh\u1eafn v\u1eafng m\u1eb7t, nh\u01b0ng b\u1ea1n s\u1ebd kh\u00f4ng \u0111\u01b0\u1ee3c th\u00f4ng b\u00e1o. Nh\u1eefng tin nh\u1eafn n\u00e0y c\u0169ng s\u1ebd kh\u00f4ng \u0111\u01b0\u1ee3c t\u00ednh v\u00e0o t\u1ef7 l\u1ec7 ph\u1ea3n h\u1ed3i ho\u1eb7c th\u1eddi gian ph\u1ea3n h\u1ed3i c\u1ee7a Trang.", [g._param("page name", a.pageName)])]
                })]
            })]
        })
    }
}
), null);
__d("BizInboxAwayToggleMutation", ["DateTime", "RelayModern", "BizInboxAwayToggleMutation.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    f.commit = a;
    var g, h = g !== void 0 ? g : g = b("BizInboxAwayToggleMutation.graphql");
    function a(a, c, d) {
        var e = {
            set_page_away_toggle: {
                page: {
                    away_toggle_expiration: c.isAway ? b("DateTime").localNow().addHours(12).getUnixTimestampSeconds() : null,
                    id: c.pageID,
                    is_away_toggle_on: c.isAway
                }
            }
        };
        return b("RelayModern").commitMutation(a, {
            mutation: h,
            optimisticResponse: e,
            variables: {
                input: {
                    is_away: c.isAway,
                    page_id: c.pageID
                }
            },
            onCompleted: d && d.onSuccess,
            onError: d && d.onFailure
        })
    }
}
), null);
__d("BizInboxAwayToggleScheduleSection.react", ["fbt", "BizInboxTimeUtils", "DateTime", "GeoBaseText.react", "GeoButton.react", "React", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a(a) {
        var c = h.jsx(b("GeoBaseText.react"), {
            color: "placeholder",
            display: "block",
            size: "value",
            children: g._("Khi ch\u1ec9nh s\u1eeda tin nh\u1eafn v\u1eafng m\u1eb7t, b\u1ea1n c\u0169ng c\u00f3 th\u1ec3 l\u00ean l\u1ecbch v\u1eafng m\u1eb7t c\u1ee7a Trang m\u1ed7i tu\u1ea7n.")
        });
        if (a.hasAwaySchedule) {
            var d = a.nextAwayBlock;
            if (d == null)
                c = h.jsx(b("GeoBaseText.react"), {
                    color: "placeholder",
                    display: "block",
                    size: "value",
                    children: g._("B\u1ea1n \u0111\u00e3 l\u00ean l\u1ecbch \u0111\u1ec3 Trang c\u1ee7a m\u00ecnh lu\u00f4n v\u1eafng m\u1eb7t.")
                });
            else {
                var e = b("DateTime").localCreate(d.from);
                d = b("DateTime").localCreate(d.to);
                var f = b("DateTime").localNow()
                  , i = e.getDayOfWeek() === d.getDayOfWeek();
                c = h.jsx(b("GeoBaseText.react"), {
                    color: "placeholder",
                    display: "block",
                    size: "value",
                    children: g._("B\u1ea1n \u0111\u00e3 \u0111\u1eb7t l\u1ecbch \u0111\u1ec3 Trang v\u1eafng m\u1eb7t t\u1eeb {nextAwayFrom} \u0111\u1ebfn {nextAwayTo} l\u1ea7n sau.", [g._param("nextAwayFrom", b("BizInboxTimeUtils").getFormatedTime(e, f, i)), g._param("nextAwayTo", b("BizInboxTimeUtils").getFormatedTime(d, f))])
                })
            }
        }
        return h.jsxs("div", {
            className: "dlm9sex9 f2129259 aekvkoqt fig0cxfd k3jmb7zj szxkbqsu h6swc0wa",
            children: [c, h.jsx(b("GeoButton.react"), {
                label: g._("Ch\u1ec9nh s\u1eeda tin nh\u1eafn v\u1eafng m\u1eb7t v\u00e0 l\u1ecbch tr\u00ecnh"),
                onClick: a.onChangeToAutomatedResponse,
                variant: "primary"
            })]
        })
    }
}
), null);
__d("BizInboxAwayToggle.react", ["ix", "fbt", "AdsInterfacesRouter", "BizInboxAwayToggleAlwaysAwayDialog.react", "BizInboxAwayToggleAvailableSection.react", "BizInboxAwayToggleAwaySection.react", "BizInboxAwayToggleMutation", "BizInboxAwayToggleScheduleSection.react", "BIZInboxClientLogger", "BizKitUnifiedRoutingUtils", "Image", "React", "RelayHooks", "SUIBusinessTheme", "SUIPopoverLayer.react", "Tooltip", "asset", "cxMargin", "nullthrows", "stylex"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i = b("React");
    function a(a) {
        var c = null
          , d = null;
        function e(a) {
            c = a
        }
        function f() {
            return c
        }
        function j(a) {
            d = a
        }
        function k(a) {
            a = a.target;
            d && a instanceof Node && !d.contains(a) && r(!1)
        }
        function l() {
            r(!q)
        }
        var m = b("RelayHooks").useRelayEnvironment();
        function n() {
            if (!a.awayTimeRanges.isEmpty() && a.expireTimestamp == null) {
                y(!0);
                return
            }
            b("BizInboxAwayToggleMutation").commit(m, {
                pageID: a.pageID,
                isAway: !1
            });
            r(!1);
            b("BIZInboxClientLogger").logStatusToggleClick(a.pageID, "available", "show_p13n")
        }
        function o() {
            b("BizInboxAwayToggleMutation").commit(m, {
                pageID: a.pageID,
                isAway: !0
            }),
            r(!1),
            b("BIZInboxClientLogger").logStatusToggleClick(a.pageID, "away", "show_p13n")
        }
        var p = i.useState(!1)
          , q = p[0]
          , r = p[1];
        i.useEffect(function() {
            document.addEventListener("mousedown", k);
            return function() {
                document.removeEventListener("mousedown", k)
            }
        });
        function s() {
            return i.jsx("div", {
                className: "cy7pp0ya qw3iel1b htdzbb76 bp36yovu lvmycag6 r35jk0jx ktaznidv rab4pwmj rz7pphsr h6swc0wa",
                children: i.jsxs("div", babelHelpers["extends"]({
                    className: "o8r1ceta l02vfxjb qgkrvl8a lfxdtrhj fqx7lvqr",
                    onClick: l,
                    ref: e,
                    role: "button",
                    tabIndex: "0"
                }, b("Tooltip").propsFor(a.isAway ? h._("V\u1eafng m\u1eb7t") : h._("\u0110ang c\u00f3 m\u1eb7t")), {
                    children: [i.jsx(b("Image"), {
                        className: "gycka5e1",
                        source: g("484755")
                    }), i.jsx(b("Image"), {
                        className: "kwp11y93 r6jp4r2f ombajpry oc0ob9b0 e9ws1cvw",
                        source: a.isAway ? g("911080") : g("780517")
                    })]
                }))
            })
        }
        function t() {
            return i.jsx(b("BizInboxAwayToggleAvailableSection.react"), {
                pageName: a.businessName,
                isChecked: !a.isAway,
                igDirectPlatformEnabled: a.igDirectPlatformEnabled,
                isIGDirectConnected: a.isIGDirectConnected,
                messengerPlatformEnabled: a.messengerPlatformEnabled,
                getShouldShowIGDirectAutomatedResponse: a.getShouldShowIGDirectAutomatedResponse,
                onToggle: n
            })
        }
        function u() {
            return i.jsx(b("BizInboxAwayToggleAwaySection.react"), {
                pageName: a.businessName,
                isChecked: a.isAway,
                igDirectPlatformEnabled: a.igDirectPlatformEnabled,
                isIGDirectConnected: a.isIGDirectConnected,
                messengerPlatformEnabled: a.messengerPlatformEnabled,
                getShouldShowIGDirectAutomatedResponse: a.getShouldShowIGDirectAutomatedResponse,
                onToggle: o
            })
        }
        function v() {
            b("AdsInterfacesRouter").get().navigateTo(b("nullthrows")(b("BizKitUnifiedRoutingUtils").getBizKitUnifiedRouteName("AUTOMATED_RESPONSES")))
        }
        function w() {
            var c = a.nextAwayRange != null ? JSON.parse(a.nextAwayRange) : null;
            return i.jsx(b("BizInboxAwayToggleScheduleSection.react"), {
                hasAwaySchedule: !a.awayTimeRanges.isEmpty(),
                nextAwayBlock: c,
                onChangeToAutomatedResponse: v
            })
        }
        p = i.useState(!1);
        var x = p[0]
          , y = p[1];
        function z() {
            y(!1),
            r(!1)
        }
        function A() {
            y(!1),
            b("BizInboxAwayToggleMutation").commit(m, {
                pageID: a.pageID,
                isAway: !1
            }),
            r(!1)
        }
        function B() {
            return i.jsx(b("BizInboxAwayToggleAlwaysAwayDialog.react"), {
                isShown: x,
                onCancelClick: z,
                onConfirmClick: A
            })
        }
        return i.jsxs("div", {
            children: [s(), q ? i.jsx(b("SUIPopoverLayer.react"), {
                content: i.jsxs("div", {
                    className: "nutwy7i6 fig0cxfd q1s5q2it k3jmb7zj szxkbqsu herejppa a7ki207s",
                    ref: j,
                    children: [t(), u(), w()]
                }),
                contextRef: f,
                margin: "_4jnw",
                offsetY: 8,
                position: "below",
                theme: b("SUIBusinessTheme")
            }) : null, B()]
        })
    }
}
), null);
__d("BizInboxAwayToggleContainer.react", ["BizInboxAwayToggle.react", "BizInboxNuxContainerWrapper.react", "BizInboxStateContext", "BizInboxTimeUtils", "PageCommPlatform", "ProfilePlusMessaging", "React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = g.useContext(b("BizInboxStateContext"))
          , d = c.pageID
          , e = c.businessName;
        c = c.igAccountID;
        var f = g.useRef(null)
          , h = a.awayTimeRanges
          , i = a.awayTimezone
          , j = a.expireTimestamp
          , k = a.isAway
          , l = a.enabledPlatforms;
        a = a.nextAwayRange;
        if (h == null || k == null || d == null || i == null)
            return null;
        if (b("ProfilePlusMessaging").shouldRedirectMessagesForAP || b("ProfilePlusMessaging").shouldArchiveInboxForProfessionalProfile && b("ProfilePlusMessaging").delegatePageID === d)
            return null;
        h = b("BizInboxTimeUtils").getTimeRangesFromJson(h);
        var m = l != null && l.includes("MESSENGER")
          , n = l != null && l.includes("INSTAGRAM_DIRECT")
          , o = c != null;
        l = l != null && c != null;
        return g.jsxs("div", {
            className: "bulhdrbm htdzbb76 l7j52awj fqx7lvqr",
            children: [g.jsx("div", {
                ref: f,
                children: g.jsx(b("BizInboxAwayToggle.react"), {
                    awayTimeRanges: h,
                    awayTimezone: i,
                    businessName: e,
                    expireTimestamp: j,
                    igDirectPlatformEnabled: n,
                    isAway: k,
                    messengerPlatformEnabled: m,
                    nextAwayRange: a,
                    pageID: d,
                    isIGDirectConnected: o,
                    getShouldShowIGDirectAutomatedResponse: l
                })
            }), g.jsx(b("BizInboxNuxContainerWrapper.react"), {
                htmlElementContextRef: function() {
                    return f.current
                },
                nuxName: "www_pages_new_away_toggle_nux"
            })]
        })
    }
}
), null);
__d("BizInboxThreadListViewHeaderRightContent.react", ["ix", "fbt", "BizInboxAwayToggleContainer.react", "BizInboxFbtUtils", "BizInboxFolderUtils", "ErrorBoundary.react", "GeoButton.react", "Image.react", "PageCommItemFolder", "PagesManagerInboxLogger", "React", "asset", "stylex"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i = b("React");
    function a(a) {
        if (a.isFolderChangeActive || a.isFilterChangeActive || a.isSearchActive)
            return null;
        function c() {
            if (b("BizInboxFolderUtils").getThreadsManagementStatus(a.activeFolder) === b("PageCommItemFolder").TODO)
                return i.jsx("div", {
                    className: "bulhdrbm htdzbb76 l7j52awj fqx7lvqr",
                    children: i.jsx(b("GeoButton.react"), {
                        icon: i.jsx(b("Image.react"), {
                            src: g("500221")
                        }),
                        isLabelHidden: !0,
                        label: "",
                        onClick: a.toggleFilterSelector,
                        tooltip: b("BizInboxFbtUtils").getThreadlistHeaderFilterTooltipLabel()
                    })
                });
            else
                return null
        }
        function d() {
            return i.jsx(b("BizInboxAwayToggleContainer.react"), {
                awayTimeRanges: a.awayTimeRanges,
                awayTimezone: a.awayTimezone,
                enabledPlatforms: a.enabledPlatforms,
                expireTimestamp: a.expireTimestamp,
                isAway: a.isAway,
                nextAwayRange: a.nextAwayRange
            })
        }
        function e() {
            return i.jsx(b("GeoButton.react"), {
                icon: i.jsx(b("Image.react"), {
                    src: g("491285")
                }),
                isLabelHidden: !0,
                label: "",
                onClick: a.onClickSearch,
                tooltip: h._("Search")
            })
        }
        return i.jsx(b("ErrorBoundary.react"), {
            onError: b("PagesManagerInboxLogger").logErrorJS,
            children: i.jsxs("div", {
                className: "mlg5n5bf",
                children: [d(), c(), e()]
            })
        })
    }
}
), null);
__d("BizInboxThreadListViewHeader.react", ["BizInboxAwayInfo.react", "BizInboxAwayToggleSubscription", "BIZInboxClientLogger", "BizInboxConfigUtils", "BizInboxFilterContext", "BizInboxFilterLabels.react", "BizInboxNavChannel", "BizInboxNuxContainerWrapper.react", "BizInboxStateContext", "BizInboxThreadListViewHeaderFolderSelector.react", "BizInboxThreadListViewHeaderLeftContent.react", "BizInboxThreadListViewHeaderRightContent.react", "CenteredContainer.react", "ErrorBoundary.react", "PagesManagerInboxLogger", "React", "RelayHooks", "bizInboxFilterFolderReducer", "stylex", "useBizInboxFilterReducers", "BizInboxThreadListViewHeaderQuery.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React"), i = g !== void 0 ? g : g = b("BizInboxThreadListViewHeaderQuery.graphql");
    function a(a) {
        var c, d = h.useContext(b("BizInboxStateContext")), e = d.pageID, f = d.businessName, g = d.messengerCanManageComments, j = d.selectedThreadType, k = d.showConnectButton, l = d.igOAuthNonce;
        d = b("RelayHooks").useLazyLoadQuery(i, {
            pageID: e
        });
        d = d.page;
        var m = b("RelayHooks").useRelayEnvironment();
        h.useEffect(function() {
            var a = b("BizInboxAwayToggleSubscription").subscribe(m, {
                page_id: e
            });
            return function() {
                a.dispose()
            }
        });
        var n = d == null ? void 0 : d.away_time_range
          , o = d == null ? void 0 : d.away_time_zone
          , p = d == null ? void 0 : d.away_toggle_expiration
          , q = d == null ? void 0 : d.is_away_toggle_on
          , r = d == null ? void 0 : (c = d.admin_info) == null ? void 0 : (c = c.away_response) == null ? void 0 : c.platforms
          , s = d == null ? void 0 : d.next_away_range;
        c = h.useContext(b("BizInboxFilterContext"));
        var t = c.isFolderChangeActive
          , u = c.isFilterChangeActive
          , v = c.isSearchActive
          , w = c.selectedAdmin
          , x = b("useBizInboxFilterReducers")([b("bizInboxFilterFolderReducer")]);
        function y() {
            x({
                isFolderChangeActive: !t,
                type: "is_folder_change_active.toggle"
            })
        }
        function z() {
            x({
                isFilterChangeActive: !u,
                type: "is_filter_change_active.toggle"
            })
        }
        function A() {
            x({
                isSearchActive: !0,
                searchType: "LABEL",
                type: "search.update"
            }),
            b("BIZInboxClientLogger").logSearchFocusClick(e, "", "show_p13n")
        }
        function B() {
            return h.jsx(b("CenteredContainer.react"), {
                className: "n49yjlik kerwu6uh gjvzw0zx dqiucr32",
                fullHeight: !0,
                horizontal: !1,
                vertical: !0,
                children: h.jsx(b("BizInboxThreadListViewHeaderLeftContent.react"), {
                    activeFolder: a.activeFolder,
                    isFolderChangeActive: t,
                    isFilterChangeActive: u,
                    isSearchActive: v,
                    pageID: e,
                    toggleFilterSelector: z,
                    toggleFolderSelector: y
                })
            })
        }
        function C() {
            return h.jsx(b("CenteredContainer.react"), {
                className: "qb8mexw6 kerwu6uh a18l8eu6 dqiucr32",
                fullHeight: !0,
                horizontal: !1,
                vertical: !0,
                children: h.jsx(b("BizInboxThreadListViewHeaderRightContent.react"), {
                    activeFolder: a.activeFolder,
                    awayTimeRanges: n,
                    awayTimezone: o,
                    enabledPlatforms: r,
                    expireTimestamp: p,
                    isAway: q,
                    isFolderChangeActive: t,
                    isFilterChangeActive: u,
                    isSearchActive: v,
                    nextAwayRange: s,
                    onClickSearch: A,
                    toggleFilterSelector: z
                })
            })
        }
        function D(c) {
            t && y();
            u && z();
            x({
                activeFolder: c,
                igMailboxID: a.igMailboxID,
                navChannel: a.navChannel,
                type: "active_folder.update"
            });
            a.onSelectThread(null, null);
            var d = b("BizInboxConfigUtils").parseDefaultPlatform(a.navChannel);
            d != null && b("BIZInboxClientLogger").logSwitchFolderClick(e, d, a.activeFolder, c, "show_p13n")
        }
        function E() {
            u && z(),
            x({
                isSearchActive: !0,
                searchType: "ADMIN",
                type: "search.update"
            })
        }
        function F() {
            u && z(),
            x({
                isSearchActive: !1,
                selectedAdmin: {
                    id: null,
                    name: null,
                    photoURL: null
                },
                igMailboxID: a.igMailboxID,
                navChannel: a.navChannel,
                type: "search.update"
            }),
            a.onSelectThread(null, null)
        }
        function G() {
            return !t && !u ? null : h.jsx(b("BizInboxThreadListViewHeaderFolderSelector.react"), {
                activeFolder: a.activeFolder,
                isFolderChangeActive: t,
                isFilterChangeActive: u,
                navChannel: a.navChannel,
                onActiveFolderChange: D,
                onClickAssignedFilter: E
            })
        }
        function H() {
            return v ? null : h.jsx(b("BizInboxAwayInfo.react"), {
                businessName: f,
                awayTimeRanges: n,
                awayTimezone: o,
                expireTimestamp: p,
                isAway: q,
                pageID: e,
                navChannel: a.navChannel
            })
        }
        function I() {
            return h.jsx(b("BizInboxFilterLabels.react"), {
                activeFolder: a.activeFolder,
                selectedAdmin: w,
                onActiveFolderChange: D,
                onRemoveAssignedFilter: F
            })
        }
        function J() {
            if (a.navChannel === b("BizInboxNavChannel").ALL) {
                var c = j === "IG_MESSAGE" ? g : !1;
                return h.jsx(b("BizInboxNuxContainerWrapper.react"), {
                    nuxName: "page_inbox_unified_thread_list_instagram_nux",
                    instagramCommentConnected: c,
                    showConnectButton: k,
                    igOAuthNonce: l,
                    pageID: e
                })
            }
            return null
        }
        function K() {
            return h.jsx(b("BizInboxNuxContainerWrapper.react"), {
                nuxName: "inbox_messenger_guest_chat",
                pageID: e,
                navChannel: a.navChannel
            })
        }
        function L() {
            return h.jsx(b("BizInboxNuxContainerWrapper.react"), {
                nuxName: "business_inbox_covid_automated_response"
            })
        }
        function M() {
            return a.navChannel === b("BizInboxNavChannel").ALL ? h.jsx(b("BizInboxNuxContainerWrapper.react"), {
                nuxName: "page_inbox_unified_thread_list_nux"
            }) : null
        }
        function N() {
            return h.jsx(b("BizInboxNuxContainerWrapper.react"), {
                nuxName: "page_inbox_instagram_direct_nux"
            })
        }
        return h.jsx(b("ErrorBoundary.react"), {
            onError: b("PagesManagerInboxLogger").logErrorJS,
            children: h.jsxs("div", {
                children: [h.jsxs("div", {
                    children: [h.jsxs("div", {
                        className: "et79b734 q3n6uzp4 jaueedpx",
                        children: [B(), C()]
                    }), G()]
                }), I(), H(), J(), K(), M(), L(), N()]
            })
        })
    }
}
), null);
__d("BizInboxThreadListView.react", ["BizInboxThreadListViewBody.react", "BizInboxThreadListViewHeader.react", "React", "bizInboxStateThreadReducer", "react-virtualized-auto-sizer", "stylex", "useBizInboxStateReducers"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = b("useBizInboxStateReducers")([b("bizInboxStateThreadReducer")]);
        function d(a, b) {
            c({
                threadID: a,
                threadType: b,
                type: "thread.select"
            })
        }
        return g.jsxs("div", {
            className: "kerwu6uh s9qjfyj3 szxkbqsu",
            children: [g.jsx("div", {
                className: "mw5g1c1c ej07eepw i4jjxjce",
                children: g.jsx(b("BizInboxThreadListViewHeader.react"), {
                    activeFolder: a.activeFolder,
                    igMailboxID: a.igMailboxID,
                    navChannel: a.navChannel,
                    onSelectThread: d
                })
            }), g.jsx("div", {
                className: "qgkrvl8a mw5g1c1c ej07eepw l3jzd74o h6swc0wa",
                children: g.jsx(b("react-virtualized-auto-sizer"), {
                    children: function(c) {
                        var e = c.height;
                        c = c.width;
                        return g.jsx("div", {
                            style: {
                                width: c
                            },
                            children: g.jsx(b("BizInboxThreadListViewBody.react"), {
                                activeFolder: a.activeFolder,
                                height: e,
                                navChannel: a.navChannel,
                                onSelectThread: d
                            })
                        })
                    }
                })
            })]
        })
    }
}
), null);
__d("BizInboxListView.react", ["BizInboxAutomatedResponsesListContainer.react", "BizInboxFilterContext", "BizInboxNavChannel", "BizInboxStateContext", "BizInboxThreadListView.react", "JSResource", "React", "lazyLoadComponent"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React")
      , h = b("lazyLoadComponent")(b("JSResource")("BizInboxCommerceEmailThreadListContainer.react").__setRef("BizInboxListView.react"))
      , i = b("lazyLoadComponent")(b("JSResource")("BizInboxLeadEmailThreadListContainer.react").__setRef("BizInboxListView.react"));
    function a(a) {
        a = g.useContext(b("BizInboxFilterContext"));
        a = a.activeFolder;
        var c = g.useContext(b("BizInboxStateContext"))
          , d = c.pageID
          , e = c.navChannel
          , f = c.igAccountID;
        c = c.igMailboxID;
        switch (e) {
        case b("BizInboxNavChannel").ALL:
        case b("BizInboxNavChannel").MESSENGER:
        case b("BizInboxNavChannel").INSTAGRAM_DIRECT:
        case b("BizInboxNavChannel").FACEBOOK:
        case b("BizInboxNavChannel").INSTAGRAM:
            return g.jsx(b("BizInboxThreadListView.react"), {
                activeFolder: a,
                igMailboxID: c,
                navChannel: e
            });
        case b("BizInboxNavChannel").AUTOMATED_RESPONSES:
            return g.jsx(b("BizInboxAutomatedResponsesListContainer.react"), {
                pageID: d,
                showSettingsRedesign: !1,
                igAccountID: f
            });
        case b("BizInboxNavChannel").COMMERCE_EMAIL:
            return g.jsx(h, {
                pageID: d
            });
        case b("BizInboxNavChannel").LEAD_EMAIL:
            return g.jsx(i, {
                pageID: d
            });
        default:
            return null
        }
    }
}
), null);
__d("useBizInboxInitEffect", ["Bootloader", "IGMessageDataDispatcher", "MercuryServerPayloadPreprocessor", "MercurySyncPageEnvironment", "React", "Timezone", "RulesTimezoneTransitionProvider", "TimezoneRulesFrom2009", "TimezoneNamesData"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a, c, d, e, f, h) {
        g.useEffect(function() {
            b("Timezone").registerRulesModule(b("RulesTimezoneTransitionProvider"), b("TimezoneRulesFrom2009")),
            b("Timezone").registerNamesModule(b("TimezoneNamesData"))
        }, []),
        g.useEffect(function() {
            e != null && f != null && (b("Bootloader").loadModules(["IGMessageInboxStore"], function(a) {
                b("IGMessageDataDispatcher").explicitlyRegisterStore(a),
                a.setInboxIGID(f),
                a.setInboxProfilePic(h)
            }, "useBizInboxInitEffect"),
            b("Bootloader").loadModules(["IGMessageConnectionStatusStore"], function(a) {
                b("IGMessageDataDispatcher").explicitlyRegisterStore(a)
            }, "useBizInboxInitEffect"));
            var g = b("MercuryServerPayloadPreprocessor").getForFBID(a);
            g.handleUpdate(babelHelpers["extends"]({}, c));
            g = {};
            if (g[a])
                return;
            g[a] = !0;
            b("MercurySyncPageEnvironment").setUp(a, d);
            return function() {
                b("MercurySyncPageEnvironment").tearDown(a)
            }
        }, [e, f, h, a, c, d])
    }
}
), null);
__d("BizInboxAppContainer.react", ["BizInboxDetailViewContainer.react", "BizInboxDetailViewHeader.react", "BizInboxFilterContextProvider", "BizInboxLayout.react", "BizInboxListView.react", "BizInboxNuxContainerWrapper.react", "BizInboxStateContext", "JSResource", "React", "lazyLoadComponent", "useBizInboxInitEffect"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React")
      , h = b("lazyLoadComponent")(b("JSResource")("BizKitContextCardInboxContainer.react").__setRef("BizInboxAppContainer.react"));
    function i() {
        return g.jsx(b("BizInboxDetailViewHeader.react"), {})
    }
    function j() {
        return g.jsx(b("BizInboxDetailViewContainer.react"), {})
    }
    function k() {
        return g.jsx(b("BizInboxListView.react"), {})
    }
    function a(a) {
        a = g.useContext(b("BizInboxStateContext"));
        var c = a.pageID
          , d = a.jewelInitData
          , e = a.initSyncSequenceID
          , f = a.igMailboxID
          , l = a.igAccountIGID;
        a = a.igProfilePicURI;
        b("useBizInboxInitEffect")(c, d, e, f, l, a);
        return g.jsxs(b("BizInboxFilterContextProvider"), {
            children: [g.jsx(b("BizInboxLayout.react"), {
                contextCardSection: g.jsx(h, {}),
                detailSection: j(),
                fullScreen: !0,
                headerSection: i(),
                listSection: k()
            }), g.jsx(b("BizInboxNuxContainerWrapper.react"), {
                nuxName: "pages_inbox_welcome_dialog"
            })]
        })
    }
}
), null);
__d("bizInboxStateCombinedReducer", [], (function(a, b, c, d, e, f) {
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
__d("BizInboxStateContextProvider", ["BizInboxConfigUtils", "BizInboxStateContext", "BizInboxStateDispatcherContext", "BizInboxStateReducerContext", "React", "RelayHooks", "bizInboxStateCombinedReducer", "BizInboxStateContextProvider_bizInboxConfig.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React");
    function a(a) {
        var c, d, e = b("RelayHooks").useFragment(g !== void 0 ? g : g = b("BizInboxStateContextProvider_bizInboxConfig.graphql"), a.bizInboxConfig);
        c = JSON.parse((c = e.jewel_init_data) != null ? c : "");
        d = JSON.parse((d = e.creator_info) != null ? d : "");
        var f = [];
        for (var i = e.page_admins, j = Array.isArray(i), k = 0, i = j ? i : i[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
            var l;
            if (j) {
                if (k >= i.length)
                    break;
                l = i[k++]
            } else {
                k = i.next();
                if (k.done)
                    break;
                l = k.value
            }
            l = l;
            l.admin_id != null && l.name != null && f.push({
                id: l.admin_id,
                name: l.name,
                profilePicUrl: l.profile_pic_url
            })
        }
        c = {
            navChannel: b("BizInboxConfigUtils").parseDefaultChannel(a.routeName),
            selectedThreadID: a.selectedThreadID,
            selectedThreadType: null,
            selectedThreadUserIsBlocked: !1,
            businessName: e.page_name || "",
            pageID: e.page_id || "",
            pageAdmins: f,
            igAccountID: e.ig_account_id,
            igAccountIGID: e.ig_account_igid,
            igOAuthNonce: e.ig_oauth_nonce || "",
            igMailboxID: e.ig_mailbox_id,
            igProfilePicURI: e.ig_profile_pic_uri,
            initSyncSequenceID: (l = e.init_sync_sequence_id) != null ? l : 0,
            jewelInitData: c,
            defaultCurrency: (k = e.default_currency) != null ? k : "USD",
            showConnectButton: (j = e.show_connect_button) != null ? j : !1,
            messengerCanManageComments: (i = e.messenger_can_manage_comments) != null ? i : !1,
            isDelegatePage: (f = e.is_delegate_page) != null ? f : !1,
            igCanManageComments: (l = e.ig_can_manage_comments) != null ? l : !1,
            showIGDirectProductPicker: (c = e.show_ig_direct_product_picker) != null ? c : !1,
            showProductPickerModalVersion: (k = e.show_product_picker_modal_version) != null ? k : !1,
            showMessengerProductPicker: (j = e.show_messenger_product_picker) != null ? j : !1,
            showPMAAdminComposer: (i = e.show_pma_admin_composer) != null ? i : !1,
            showLDPPMAAdminComposer: (f = e.show_ldp_pma_admin_composer) != null ? f : !1,
            showCommerceInvoiceButton: (l = e.show_commerce_invoice_button) != null ? l : !1,
            showRequestPayment: (c = e.show_request_payment) != null ? c : !1,
            showConfirmPayment: (k = e.show_confirm_payment) != null ? k : !1,
            showPaymentOnboarding: (j = e.show_payment_onboarding) != null ? j : !1,
            showCommerceInvoiceButtonPUX: (i = e.show_commerce_invoice_button_pux) != null ? i : !1,
            showNewSavedReplyInIg: (f = e.show_new_saved_reply_in_ig) != null ? f : !1,
            showNewSavedReply: (l = e.show_new_saved_reply) != null ? l : !1,
            creatorInfo: d
        };
        var m = h.useRef(new Map());
        k = h.useMemo(function() {
            return b("bizInboxStateCombinedReducer")(m)
        }, []);
        j = h.useReducer(k, c);
        i = j[0];
        f = j[1];
        return h.jsx(b("BizInboxStateReducerContext").Provider, {
            value: m,
            children: h.jsx(b("BizInboxStateContext").Provider, {
                value: i,
                children: h.jsx(b("BizInboxStateDispatcherContext").Provider, {
                    value: f,
                    children: a.children
                })
            })
        })
    }
}
), null);
__d("BizInboxApp.react", ["BizInboxAppContainer.react", "BizInboxAppLoading.react", "BIZInboxClientLogger", "BizInboxConfigUtils", "BizInboxErrorBoundary.react", "BizInboxStateContextProvider", "React", "RelayHooks", "BizInboxAppQuery.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React"), i = g !== void 0 ? g : g = b("BizInboxAppQuery.graphql");
    function a(a) {
        var c = b("RelayHooks").usePreloadedQuery(i, a.queryRef);
        c = c.biz_inbox_config;
        h.useEffect(function() {
            b("BIZInboxClientLogger").logInboxRootInitRender(a.pageID, b("BizInboxConfigUtils").parseDefaultPlatform(a.routeName), "biz_web", "show_p13n")
        }, [a.pageID]);
        return c == null ? h.jsx(b("BizInboxAppLoading.react"), {}) : h.jsx(b("BizInboxStateContextProvider"), {
            bizInboxConfig: c,
            routeName: a.routeName,
            selectedThreadID: a.selectedThreadID,
            children: h.jsx(b("BizInboxErrorBoundary.react"), {
                children: h.jsx(b("BizInboxAppContainer.react"), {})
            })
        })
    }
}
), null);
__d("BizKitContextCardMoreSection.react", ["ix", "fbt", "GeoLink.react", "Image.react", "React", "asset", "stylex"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i, j = b("React");
    (i || (i = b("stylex"))).inject(".h8lelt7y{margin-right:4px}", 1);
    function a(a) {
        var c = a.onClick;
        a = a.className;
        return j.jsx("div", {
            className: a,
            children: j.jsxs(b("GeoLink.react"), {
                onClick: c,
                showUnderline: "never",
                children: [j.jsx(b("Image.react"), {
                    className: "h8lelt7y",
                    src: g("598189")
                }), h._("Xem th\u00eam")]
            })
        })
    }
}
), null);
__d("BizKitContextCardLabel.react", ["ix", "ClickableArea.react", "FlexLayout.react", "GeoCheckboxInput.react", "Image.react", "React", "asset", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h, i = b("React");
    (h || (h = b("stylex"))).inject(".qmqpeqxj{border-top-left-radius:50%}", 1, ".qmqpeqxj{border-top-right-radius:50%}");
    h.inject(".e7u6y3za{border-top-right-radius:50%}", 1, ".e7u6y3za{border-top-left-radius:50%}");
    h.inject(".qwcclf47{border-bottom-right-radius:50%}", 1, ".qwcclf47{border-bottom-left-radius:50%}");
    h.inject(".nmlomj2f{border-bottom-left-radius:50%}", 1, ".nmlomj2f{border-bottom-right-radius:50%}");
    h.inject(".k250bvdn{height:12px}", 1);
    h.inject(".h8lelt7y{margin-right:4px}", 1);
    h.inject(".cv5aopd8{width:12px}", 1);
    h.inject(".f5m7p0br{border-top:none}", .3);
    h.inject(".iwso50tu{border-right:none}", .3, ".iwso50tu{border-left:none}");
    h.inject(".ggolc4ur{border-bottom:none}", .3);
    h.inject(".js4msrqk{border-left:none}", .3, ".js4msrqk{border-right:none}");
    h.inject(".i85zmo3j{align-items:center}", 1);
    h.inject(".no0rbi2p{background-color:rgba(233,235,238,.7)}", 1);
    h.inject(".f5m7p0br{border-top:none}", .3);
    h.inject(".iwso50tu{border-right:none}", .3, ".iwso50tu{border-left:none}");
    h.inject(".ggolc4ur{border-bottom:none}", .3);
    h.inject(".js4msrqk{border-left:none}", .3, ".js4msrqk{border-right:none}");
    h.inject(".dl2p71xr{border-top-left-radius:4px}", 1, ".dl2p71xr{border-top-right-radius:4px}");
    h.inject(".h0c7ht3v{border-top-right-radius:4px}", 1, ".h0c7ht3v{border-top-left-radius:4px}");
    h.inject(".j8nb7h05{border-bottom-right-radius:4px}", 1, ".j8nb7h05{border-bottom-left-radius:4px}");
    h.inject(".gffp4m6x{border-bottom-left-radius:4px}", 1, ".gffp4m6x{border-bottom-right-radius:4px}");
    h.inject(".zm6zxeuj{color:var(--fds-placeholder-text)}", 1);
    h.inject(".alzwoclg{display:flex}", 1);
    h.inject(".jl2a5g8c{flex-direction:row}", 1);
    h.inject(".gh55jysx{font-weight:normal}", 1);
    h.inject(".jcxyg2ei{justify-content:center}", 1);
    h.inject(".fzsidkae{margin-top:2px}", 1);
    h.inject(".lxowtz8q{margin-right:6px}", 1, ".lxowtz8q{margin-left:6px}");
    h.inject(".laatuukc{margin-bottom:4px}", 1);
    h.inject(".kmwttqpk{margin-left:0}", 1, ".kmwttqpk{margin-right:0}");
    h.inject(".lq84ybu9{overflow-x:hidden}", 1);
    h.inject(".hf30pyar{overflow-y:hidden}", 1);
    h.inject(".d2hqwtrz{padding-top:4px}", 1);
    h.inject(".fzd7ma4j{padding-right:4px}", 1, ".fzd7ma4j{padding-left:4px}");
    h.inject(".o9wcebwi{padding-bottom:4px}", 1);
    h.inject(".lcfup58g{padding-left:4px}", 1, ".lcfup58g{padding-right:4px}");
    h.inject(".qm54mken{white-space:nowrap}", 1);
    h.inject(".rkhfyajq{padding-right:5px}", 1);
    function a(a) {
        var c = i.useState(!1)
          , d = c[0]
          , e = c[1];
        c = i.useState(!1);
        var f = c[0]
          , h = c[1]
          , j = a.onRemoveLabel
          , k = a.id
          , l = a.name
          , m = a.color
          , n = a.createName
          , o = a.isSuggestedLabel
          , p = a.onAddorCreateLabel
          , q = a.onSelectLabel;
        c = function() {
            h(!0),
            p && n != null && p(n, null, m)
        }
        ;
        a = null;
        var r = function() {
            q && !o && q({
                id: k,
                color: m,
                name: l
            })
        };
        d && j ? d = i.jsx("div", {
            className: "js4msrqk ggolc4ur iwso50tu f5m7p0br cv5aopd8 h8lelt7y k250bvdn nmlomj2f qwcclf47 e7u6y3za qmqpeqxj",
            style: {
                backgroundColor: "transparent"
            },
            children: i.jsx(b("Image.react"), {
                onClick: function(a) {
                    j(k, l),
                    a.stopPropagation()
                },
                src: g("363583")
            })
        }) : d = i.jsx("div", {
            className: "js4msrqk ggolc4ur iwso50tu f5m7p0br cv5aopd8 h8lelt7y k250bvdn nmlomj2f qwcclf47 e7u6y3za qmqpeqxj",
            style: {
                backgroundColor: "#" + m.substring(2)
            }
        });
        o === !0 && (a = i.jsx("div", {
            className: "rkhfyajq",
            children: i.jsx(b("GeoCheckboxInput.react"), {
                value: f,
                label: "Hidden Label",
                isLabelHidden: !0,
                onChange: c
            })
        }));
        return i.jsxs(b("FlexLayout.react"), {
            align: "center",
            children: [a, i.jsx(b("ClickableArea.react"), {
                onClick: r,
                children: i.jsxs("div", {
                    className: "qm54mken lcfup58g o9wcebwi fzd7ma4j d2hqwtrz hf30pyar lq84ybu9 kmwttqpk laatuukc lxowtz8q fzsidkae jcxyg2ei gh55jysx jl2a5g8c alzwoclg zm6zxeuj gffp4m6x j8nb7h05 h0c7ht3v dl2p71xr js4msrqk ggolc4ur iwso50tu f5m7p0br no0rbi2p i85zmo3j",
                    onMouseEnter: function() {
                        return e(!0)
                    },
                    onMouseLeave: function() {
                        return e(!1)
                    },
                    children: [d, l]
                })
            })]
        })
    }
}
), null);
__d("ContextCardLabelUtils", ["BizKitContextCardCreateLabelMutation", "BizKitContextCardDeleteLabelMutation", "BizKitContextCardSetLabelMutation", "BizKitContextCardUnsetLabelMutation", "BizKitContextCardUpdateLabelColorMutation", "RelayRuntime"], (function(a, b, c, d, e, f) {
    "use strict";
    f.mergeContactAndCustomerLabels = a;
    var g = b("RelayRuntime").ConnectionHandler
      , h = "BizKitContextCardLabelsSection_custom_labels";
    c = 25;
    f.MAX_LABEL_NAME_LENGTH = c;
    d = 200;
    f.TAG_LIMIT = d;
    e = function(a, c, d, e, f, g) {
        c = {
            identity: c,
            id: d,
            labelName: e,
            labelEdgesGetter: f
        };
        b("BizKitContextCardUnsetLabelMutation").commit(a, c, g)
    }
    ;
    f.onUnsetLabel = e;
    a = function(a, c, d, e, f, g, h) {
        c = {
            identity: c,
            id: d,
            labelName: e,
            pageID: f,
            color: g,
            labelEdgesGetter: h
        };
        b("BizKitContextCardSetLabelMutation").commit(a, c)
    }
    ;
    f.onAddLabel = a;
    c = function(a, c, d, e, f) {
        c = {
            name: c,
            pageID: e,
            color: d,
            connectionName: h
        };
        b("BizKitContextCardCreateLabelMutation").commit(a, c, f)
    }
    ;
    f.onCreatePageLabel = c;
    d = function(a, c, d, e) {
        c = {
            id: c,
            pageID: d,
            connectionName: h
        };
        b("BizKitContextCardDeleteLabelMutation").commit(a, c, e)
    }
    ;
    f.onDeletePageLabel = d;
    e = function(a, c, d, e, f) {
        c = {
            id: c,
            color: d,
            name: e
        };
        b("BizKitContextCardUpdateLabelColorMutation").commit(a, c, f)
    }
    ;
    f.onUpdateLabel = e;
    a = function(a, b, c) {
        b = a.get(b);
        if (!b)
            return;
        b = g.getConnection(b, h);
        if (!b)
            return;
        a = g.createEdge(a, b, c, "CustomLabelsEdge");
        b && a && g.insertEdgeBefore(b, a)
    }
    ;
    f.createLabelUpdater = a;
    function a(a, b) {
        var c = {}
          , d = [];
        for (var e = 0; e < a.length; e++) {
            var f;
            f = (f = a[e].node) == null ? void 0 : f.name;
            f != null && c[f] !== !0 && (c[f] = !0,
            d[d.length] = a[e])
        }
        for (var f = 0; f < b.length; f++) {
            e = (a = b[f].node) == null ? void 0 : a.name;
            e != null && c[e] !== !0 && (c[e] = !0,
            d[d.length] = b[f])
        }
        return d
    }
}
), null);
__d("BizKitContextCardManageLabelsSection.react", ["fbt", "ContextCardLabelUtils", "PagesManagerInboxLabelsDialogLabelRecord.react", "PagesManagerInboxLabelsDialogNewLabelForm.react", "React", "ScrollableArea.react", "XUICard.react", "XUIDialog.react", "XUIDialogBody.react", "XUIDialogButton.react", "XUIDialogCancelButton.react", "XUIDialogFooter.react", "XUIDialogTitle.react", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h, i = b("React");
    (h || (h = b("stylex"))).inject(".rtxb060y{color:var(--secondary-text)}", 1);
    h.inject(".glosn74e{font-size:0.75rem}", 1);
    h.inject(".qjfq86k5{margin-bottom:12px}", 1);
    h.inject(".i0rxk2l3{margin-top:4px}", 1);
    h.inject(".raa1n8mv{border-top:1px solid var(--fds-divider-on-wash)}", .3);
    h.inject(".r6ydv39a{margin-top:16px}", 1);
    var j = 350
      , k = 500
      , l = 276
      , m = 5;
    function a(a) {
        var c = a.onCreateLabel
          , d = a.onDeleteLabel
          , e = a.onUpdateLabel
          , f = a.onRemoveLabelFromThread
          , h = a.labels
          , n = a.isShown;
        a = a.onToggle;
        var o = i.useState(!1)
          , p = o[0]
          , q = o[1];
        o = i.useState();
        var r = o[0]
          , s = o[1]
          , t = function(a, b) {
            c(a, b)
        }
          , u = function() {
            r && (d(r.id),
            f(r.id, r.name),
            s(null)),
            q(!1)
        }
          , v = function(a) {
            e(a.id, a.color, a.name)
        }
          , w = function(a) {
            if (h.has(a))
                return g._("T\u00ean nh\u00e3n ph\u1ea3i l\u00e0 duy nh\u1ea5t.");
            if (a.indexOf(":") !== -1)
                return g._("Label name can not contain ':'.");
            return h.size >= b("ContextCardLabelUtils").TAG_LIMIT ? g._("B\u1ea1n \u0111\u00e3 \u0111\u1ea1t \u0111\u1ebfn gi\u1edbi h\u1ea1n 200 nh\u00e3n. B\u1ea1n c\u00f3 th\u1ec3 x\u00f3a b\u1edbt \u0111\u1ec3 th\u00eam nh\u00e3n kh\u00e1c.") : null
        };
        o = function() {
            return i.jsx(b("PagesManagerInboxLabelsDialogNewLabelForm.react"), {
                hasErrorState: w,
                maxLength: b("ContextCardLabelUtils").MAX_LABEL_NAME_LENGTH,
                onAddLabel: t
            })
        }
        ;
        var x = function(a) {
            q(!0),
            s(a)
        }
          , y = function() {
            var a = i.jsx(b("XUICard.react"), {
                children: h.toArray().map(function(a) {
                    return i.jsx(b("PagesManagerInboxLabelsDialogLabelRecord.react"), {
                        hasErrorState: w,
                        label: a,
                        maxLength: b("ContextCardLabelUtils").MAX_LABEL_NAME_LENGTH,
                        onDelete: x,
                        onUpdate: v
                    }, a.id)
                })
            });
            return h.size > m ? i.jsx(b("ScrollableArea.react"), {
                className: "r6ydv39a raa1n8mv",
                maxHeight: l,
                children: a
            }) : a
        }
          , z = function() {
            if (r == null)
                return;
            return i.jsxs(b("XUIDialog.react"), {
                layerHideOnBlur: !1,
                onToggle: q,
                shown: p,
                width: j,
                children: [i.jsx(b("XUIDialogTitle.react"), {
                    showCloseButton: !1,
                    children: g._("X\u00f3a nh\u00e3n kh\u1ecfi Trang?")
                }), i.jsx(b("XUIDialogBody.react"), {
                    children: g._("Nh\u00e3n \u0111\u00e3 x\u00f3a s\u1ebd b\u1ecb g\u1ee1 b\u1ecf v\u00e0 kh\u00f4ng \u0111\u01b0\u1ee3c d\u00f9ng \u0111\u1ec3 m\u00f4 t\u1ea3 hay s\u1eafp x\u1ebfp b\u1ea5t k\u1ef3 ai tr\u00ean Trang c\u1ee7a b\u1ea1n n\u1eefa.")
                }), i.jsxs(b("XUIDialogFooter.react"), {
                    children: [i.jsx(b("XUIDialogCancelButton.react"), {}), i.jsx(b("XUIDialogButton.react"), {
                        action: "confirm",
                        label: g._("X\u00f3a nh\u00e3n"),
                        onClick: u,
                        use: "confirm"
                    })]
                })]
            })
        };
        return i.jsxs(b("XUIDialog.react"), {
            shown: n,
            width: k,
            onToggle: a,
            children: [i.jsx(b("XUIDialogTitle.react"), {
                children: g._("Qu\u1ea3n l\u00fd nh\u00e3n")
            }), i.jsxs(b("XUIDialogBody.react"), {
                children: [i.jsx("div", {
                    className: "i0rxk2l3 qjfq86k5 glosn74e rtxb060y",
                    children: g._("D\u00f9ng nh\u00e3n \u0111\u1ec3 m\u00f4 t\u1ea3 v\u00e0 s\u1eafp x\u1ebfp m\u1ecdi ng\u01b0\u1eddi theo b\u1ea5t k\u1ef3 c\u00e1ch n\u00e0o b\u1ea1n mu\u1ed1n, ch\u1eb3ng h\u1ea1n nh\u01b0 ki\u1ec3u kh\u00e1ch h\u00e0ng ho\u1eb7c c\u00e1c \u0111\u01a1n \u0111\u1eb7t h\u00e0ng tr\u01b0\u1edbc \u0111\u00f3. Ch\u1ec9 nh\u1eefng ng\u01b0\u1eddi qu\u1ea3n l\u00fd Trang c\u1ee7a b\u1ea1n m\u1edbi c\u00f3 th\u1ec3 nh\u00ecn th\u1ea5y nh\u00e3n.")
                }), o(), y(), z()]
            })]
        })
    }
}
), null);
__d("BizKitContextCardNewLabelSection.react", ["ix", "cx", "fbt", "ClickableArea.react", "ContextCardLabelUtils", "FlexLayout.react", "Image.react", "PageManagerInboxCustomLabelSearchSource", "PagesManagerInboxContextCardLabelsTypeaheadRenderer.react", "React", "XUITypeahead.react", "asset", "stylex"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    e.exports = a;
    var j, k = b("React");
    (j || (j = b("stylex"))).inject(".i85zmo3j{align-items:center}", 1);
    j.inject(".no0rbi2p{background-color:rgba(233,235,238,.7)}", 1);
    j.inject(".f5m7p0br{border-top:none}", .3);
    j.inject(".iwso50tu{border-right:none}", .3, ".iwso50tu{border-left:none}");
    j.inject(".ggolc4ur{border-bottom:none}", .3);
    j.inject(".js4msrqk{border-left:none}", .3, ".js4msrqk{border-right:none}");
    j.inject(".dl2p71xr{border-top-left-radius:4px}", 1, ".dl2p71xr{border-top-right-radius:4px}");
    j.inject(".h0c7ht3v{border-top-right-radius:4px}", 1, ".h0c7ht3v{border-top-left-radius:4px}");
    j.inject(".j8nb7h05{border-bottom-right-radius:4px}", 1, ".j8nb7h05{border-bottom-left-radius:4px}");
    j.inject(".gffp4m6x{border-bottom-left-radius:4px}", 1, ".gffp4m6x{border-bottom-right-radius:4px}");
    j.inject(".zm6zxeuj{color:var(--fds-placeholder-text)}", 1);
    j.inject(".alzwoclg{display:flex}", 1);
    j.inject(".jl2a5g8c{flex-direction:row}", 1);
    j.inject(".gh55jysx{font-weight:normal}", 1);
    j.inject(".jcxyg2ei{justify-content:center}", 1);
    j.inject(".fzsidkae{margin-top:2px}", 1);
    j.inject(".lxowtz8q{margin-right:6px}", 1, ".lxowtz8q{margin-left:6px}");
    j.inject(".laatuukc{margin-bottom:4px}", 1);
    j.inject(".kmwttqpk{margin-left:0}", 1, ".kmwttqpk{margin-right:0}");
    j.inject(".lq84ybu9{overflow-x:hidden}", 1);
    j.inject(".hf30pyar{overflow-y:hidden}", 1);
    j.inject(".d2hqwtrz{padding-top:4px}", 1);
    j.inject(".fzd7ma4j{padding-right:4px}", 1, ".fzd7ma4j{padding-left:4px}");
    j.inject(".o9wcebwi{padding-bottom:4px}", 1);
    j.inject(".lcfup58g{padding-left:4px}", 1, ".lcfup58g{padding-right:4px}");
    j.inject(".qm54mken{white-space:nowrap}", 1);
    var l = 3;
    function a(a) {
        var c = a.isAddLabelToggle
          , d = a.setIsAddLabelToggle
          , e = a.pageLabels
          , f = a.labels
          , h = a.onAddorCreateLabel
          , j = (f == null ? void 0 : (a = f.business_attributes) == null ? void 0 : (f = a.customer_labels) == null ? void 0 : (a = f.label_list) == null ? void 0 : a.edges) || [];
        f = e.toArray().filter(function(a) {
            return !j.find(function(b) {
                return ((b = b.node) == null ? void 0 : b.name) === a.name
            })
        });
        a = k.useState("");
        var n = a[0]
          , o = a[1];
        a = k.useState(null);
        var p = a[0]
          , q = a[1]
          , r = e.toArray().length;
        c ? a = k.jsx(b("Image.react"), {
            src: g("656611")
        }) : a = k.jsx(b("Image.react"), {
            src: g("497293")
        });
        e = i._("Th\u00eam nh\u00e3n");
        var s = i._("Th\u00eam nh\u00e3n...")
          , t = function() {
            r >= b("ContextCardLabelUtils").TAG_LIMIT ? q(i._("B\u1ea1n \u0111\u00e3 \u0111\u1ea1t \u0111\u1ebfn gi\u1edbi h\u1ea1n 200 nh\u00e3n. B\u1ea1n c\u00f3 th\u1ec3 x\u00f3a b\u1edbt \u0111\u1ec3 th\u00eam nh\u00e3n kh\u00e1c.")) : h(n),
            o("")
        }
          , u = function(a) {
            o("");
            q(null);
            var b = a.getData().id
              , c = a.getData().name;
            a = a.getData().color;
            h(c, b, a)
        };
        return k.jsxs("div", {
            children: [k.jsx(b("FlexLayout.react"), {
                align: "center",
                children: k.jsx(b("ClickableArea.react"), {
                    "data-testid": void 0,
                    onClick: function() {
                        d(!c)
                    },
                    children: k.jsxs("div", {
                        className: "qm54mken lcfup58g o9wcebwi fzd7ma4j d2hqwtrz hf30pyar lq84ybu9 kmwttqpk laatuukc lxowtz8q fzsidkae jcxyg2ei gh55jysx jl2a5g8c alzwoclg zm6zxeuj gffp4m6x j8nb7h05 h0c7ht3v dl2p71xr js4msrqk ggolc4ur iwso50tu f5m7p0br no0rbi2p i85zmo3j",
                        children: [a, "\xa0", e]
                    })
                })
            }), c && k.jsx("div", {
                className: "_ke1",
                children: k.jsx(b("XUITypeahead.react"), {
                    autoHighlight: !0,
                    queryString: n,
                    onChange: function(a) {
                        return o(a.target.value)
                    },
                    onBlur: function() {
                        return q(null)
                    },
                    searchSource: b("PageManagerInboxCustomLabelSearchSource").getInstance(f),
                    placeholder: s,
                    onSelectAttempt: u,
                    onEnterWithoutSelection: t,
                    presenter: m,
                    viewStyle: "rich",
                    maxEntries: l,
                    tallInput: !0,
                    maxLength: b("ContextCardLabelUtils").MAX_LABEL_NAME_LENGTH,
                    xuiError: p
                })
            })]
        })
    }
    var m = {
        useLayer: !0,
        ViewRenderer: b("PagesManagerInboxContextCardLabelsTypeaheadRenderer.react")
    }
}
), null);
__d("CRMContextCardSuggestedLabels", ["fbt", "formatDate"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = {
        GREY: "FF90949C",
        PURPLE: "FF8A73C9",
        RED: "FFF65569",
        BLUE: "FF5291FF",
        ORANGE: "FFFB9240",
        GREEN: "FF72A737"
    };
    c = new Date();
    d = g._("Kh\u00e1ch h\u00e0ng m\u1edbi");
    f = g._("Quan tr\u1ecdng");
    d = [{
        label_color: a.GREEN,
        name: d,
        create_name: d.toString(),
        type: "new_customer"
    }, {
        label_color: a.RED,
        name: f,
        create_name: f.toString(),
        type: "important"
    }, {
        label_color: a.BLUE,
        name: g._("Ng\u00e0y h\u00f4m nay ({date})", [g._param("date", b("formatDate")(c, "m/d") + ")")]),
        create_name: g._("{date}", [g._param("date", b("formatDate")(c, "M d"))]).toString(),
        type: "todays_date"
    }];
    f = d;
    e.exports = f
}
), null);
__d("BizKitContextCardSuggestedLabelsSection.react", ["fbt", "BizKitContextCardLabel.react", "CRMContextCardSuggestedLabels", "GeoText.react", "LeftRight.react", "React", "nullthrows", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h, i = b("React");
    (h || (h = b("stylex"))).inject(".aglvbi8b{display:inline-block}", 1);
    h.inject(".qjfq86k5{margin-bottom:12px}", 1);
    h.inject(".ihx95mk1{margin-top:12px}", 1);
    function a(a) {
        var c, d = a.labels, e = a.onCreateAndAddLabel;
        a = b("CRMContextCardSuggestedLabels");
        c = (d == null ? void 0 : (c = d.business_attributes) == null ? void 0 : (c = c.customer_labels) == null ? void 0 : (c = c.label_list) == null ? void 0 : c.edges) || [];
        d = (d == null ? void 0 : (d = d.business_attributes) == null ? void 0 : (d = d.customer_labels) == null ? void 0 : (d = d.customer_custom_tags) == null ? void 0 : d.edges) || [];
        var f = c.concat(d);
        a = a.filter(function(a) {
            return !f.find(function(b) {
                return ((b = b.node) == null ? void 0 : b.name.toLocaleLowerCase()) === a.create_name.toLocaleLowerCase()
            })
        });
        var h;
        a.length !== 0 && (h = a.map(function(a) {
            return a && i.jsx("div", {
                className: "aglvbi8b",
                children: i.jsx(b("BizKitContextCardLabel.react"), {
                    color: b("nullthrows")(a.label_color),
                    name: b("nullthrows")(a.name.toString()),
                    createName: b("nullthrows")(a.create_name),
                    id: "0",
                    isSuggestedLabel: !0,
                    onAddorCreateLabel: e
                })
            }, b("nullthrows")(a.name))
        }));
        return i.jsxs("div", {
            children: [i.jsx(b("LeftRight.react"), {
                children: i.jsx("div", {
                    className: "ihx95mk1 qjfq86k5",
                    children: i.jsx(b("GeoText.react"), {
                        children: g._("Nh\u00e3n g\u1ee3i \u00fd")
                    })
                })
            }), h]
        })
    }
}
), null);
__d("BizKitContextCardLabelsSection.react", ["fbt", "BizKitContextCardLabel.react", "BizKitContextCardManageLabelsSection.react", "BizKitContextCardNewLabelSection.react", "BizKitContextCardSuggestedLabelsSection.react", "ContextCardLabelUtils", "GeoHeading.react", "GeoLink.react", "LeftRight.react", "React", "RelayHooks", "RelayRuntime", "immutable", "nullthrows", "stylex", "BizKitContextCardLabelsSection_contactLabels.graphql", "BizKitContextCardLabelsSectionPageLabelsQuery.graphql"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h, i, j, k = b("React"), l = "BizKitContextCardLabelsSection_label_list";
    (j || (j = b("stylex"))).inject(".aglvbi8b{display:inline-block}", 1);
    j.inject(".ihx95mk1{margin-top:12px}", 1);
    var m = h !== void 0 ? h : h = b("BizKitContextCardLabelsSection_contactLabels.graphql")
      , n = i !== void 0 ? i : i = b("BizKitContextCardLabelsSectionPageLabelsQuery.graphql");
    function a(a) {
        var c = b("RelayHooks").useRelayEnvironment()
          , d = a.className
          , e = a.contactID
          , f = a.contactIdentity
          , h = a.contactLabels
          , i = a.pageID
          , j = a.onSelectLabel
          , o = b("RelayHooks").useFragment(m, h);
        a = b("RelayHooks").useLazyLoadQuery(n, {
            pageID: i
        });
        h = (h = a.page) == null ? void 0 : (a = h.custom_labels) == null ? void 0 : a.edges;
        a = (h == null ? void 0 : h.map(function(a) {
            var b, c, d;
            b = (b = a.node) == null ? void 0 : b.id;
            c = (c = a.node) == null ? void 0 : c.name;
            d = (d = a.node) == null ? void 0 : d.label_color;
            a = ((a = a.node) == null ? void 0 : a.contact_count) || 0;
            if (c != null && b != null && d != null)
                return [c, {
                    name: c,
                    id: b,
                    color: d,
                    thread_count: a
                }]
        })) || [];
        h = b("immutable").Map(a.filter(Boolean));
        a = k.useState(!1);
        var p = a[0];
        a = a[1];
        var q = k.useState(!1)
          , r = q[0]
          , s = q[1]
          , t = function(a) {
            a = a.get(e);
            if (a == null)
                return null;
            a = (a = a.getLinkedRecord("business_attributes")) == null ? void 0 : a.getLinkedRecord("customer_labels");
            return a == null ? null : b("RelayRuntime").ConnectionHandler.getConnection(a, l)
        }
          , u = function(a, d) {
            b("ContextCardLabelUtils").onUnsetLabel(c, f, a, d, t)
        };
        q = function(a, d, e) {
            b("ContextCardLabelUtils").onAddLabel(c, f, d, a, i, e, t)
        }
        ;
        var v = function(a, d) {
            b("ContextCardLabelUtils").onCreatePageLabel(c, a, d, i)
        }
          , w = function(a) {
            b("ContextCardLabelUtils").onDeletePageLabel(c, a, i)
        }
          , x = function(a, d, e) {
            b("ContextCardLabelUtils").onUpdateLabel(c, a, d, e)
        }
          , y = function() {
            var a, c;
            a = (o == null ? void 0 : (a = o.business_attributes) == null ? void 0 : (a = a.customer_labels) == null ? void 0 : (a = a.label_list) == null ? void 0 : a.edges) || [];
            c = (o == null ? void 0 : (c = o.business_attributes) == null ? void 0 : (c = c.customer_labels) == null ? void 0 : (c = c.customer_custom_tags) == null ? void 0 : c.edges) || [];
            a = b("ContextCardLabelUtils").mergeContactAndCustomerLabels(a, c);
            c = null;
            a && a.length > 0 && (c = a.map(function(a, c) {
                var d;
                return a && k.jsx("div", {
                    className: "aglvbi8b",
                    children: k.jsx(b("BizKitContextCardLabel.react"), {
                        color: b("nullthrows")(((d = a.node) == null ? void 0 : d.label_color) || ((d = a.node) == null ? void 0 : d.color)),
                        name: b("nullthrows")((d = a.node) == null ? void 0 : d.name),
                        id: b("nullthrows")((d = a.node) == null ? void 0 : d.id),
                        onRemoveLabel: u,
                        onSelectLabel: j,
                        isSuggestedLabel: !1
                    })
                }, b("nullthrows")((d = a.node) == null ? void 0 : d.id) + "_" + c)
            }));
            return k.jsx("div", {
                className: "ihx95mk1",
                "data-testid": void 0,
                children: c
            })
        };
        return k.jsxs("div", {
            className: d,
            "data-testid": void 0,
            children: [k.jsxs(b("LeftRight.react"), {
                children: [k.jsx(b("GeoHeading.react"), {
                    level: 3,
                    children: g._("Nh\u00e3n")
                }), k.jsx(b("GeoLink.react"), {
                    onClick: function() {
                        return s(!r)
                    },
                    children: g._("Qu\u1ea3n l\u00fd nh\u00e3n")
                })]
            }), y(), k.jsx(b("BizKitContextCardNewLabelSection.react"), {
                isAddLabelToggle: p,
                setIsAddLabelToggle: a,
                onAddorCreateLabel: q,
                pageLabels: h,
                labels: o
            }), k.jsx(b("BizKitContextCardSuggestedLabelsSection.react"), {
                pageID: i,
                labels: o,
                onCreateAndAddLabel: q
            }), k.jsx(b("BizKitContextCardManageLabelsSection.react"), {
                labels: h,
                onCreateLabel: v,
                onDeleteLabel: w,
                onUpdateLabel: x,
                onRemoveLabelFromThread: u,
                isShown: r,
                onToggle: s
            })]
        })
    }
}
), null);
__d("MercuryAttachmentViewer", ["Bootloader", "MessagesViewer", "React", "Run", "emptyFunction"], (function(a, b, c, d, e, f) {
    "use strict";
    f.renderVideo = a;
    f.bootstrapWithConfig = c;
    f.preload = d;
    var g = b("React");
    function a(a) {
        b("Bootloader").loadModules(["MessagingVideoViewer.react", "MessagingForwardAttachmentDialog.react"], function(c, d) {
            b("MessagesViewer").renderVideo(g.jsx(c, babelHelpers["extends"]({}, a, {
                forwardDialogComponent: d
            })))
        }, "MercuryAttachmentViewer")
    }
    function c(a, c) {
        b("Bootloader").loadModules(["SpotlightMessagesViewer", "MessagingForwardAttachmentDialog.react"], function(d, e) {
            b("MessagesViewer").renderSpotlight(a, c, d, e)
        }, "MercuryAttachmentViewer")
    }
    function d() {
        b("Run").onAfterLoad(function() {
            b("Bootloader").loadModules(["MessagingVideoViewer.react", "SpotlightMessagesViewer", "MessagingForwardAttachmentDialog.react"], b("emptyFunction"), "MercuryAttachmentViewer")
        })
    }
}
), null);
__d("ContextCardMediaUtils", ["ActorURI", "MercuryAttachmentViewer", "URI", "Vector", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    f.openFullView = a;
    f.getMediaType = j;
    f.getDimString = c;
    f.getSrcURI = d;
    var g, h;
    (g || b("stylex")).inject(".hynicr8k{background-color:rgba(0,0,0,.4)}", 1);
    var i = "/ajax/messaging/attachments/sharedphotos.php";
    function a(a, c, d) {
        switch (a.media_type) {
        case "video":
            var e = a.dim.split(",");
            b("MercuryAttachmentViewer").renderVideo({
                disableForward: !0,
                rootClassName: "hynicr8k",
                videoID: a.fbid,
                videoSize: new (b("Vector"))(e[0],e[1]),
                videoURI: a.src_uri,
                pageID: c
            });
            break;
        case "animated_image":
        case "photo":
            e = b("ActorURI").create(new (h || (h = b("URI")))(i).setQueryData({
                thread_id: d,
                image_id: a.fbid
            }), c);
            b("MercuryAttachmentViewer").bootstrapWithConfig({
                actorid: c,
                dimensions: a.dim,
                disableForward: !0,
                disablePaging: !0,
                endpoint: e,
                fbid: a.fbid,
                setID: "messages:view_all_in_thread",
                snapToPhoto: !0,
                src: a.src_uri
            });
            break
        }
    }
    function j(a) {
        a = ((a = a.node) == null ? void 0 : a.__typename) || "";
        if (a === "MessageImage")
            return "photo";
        else if (a === "MessageVideo")
            return "video";
        else
            return "error"
    }
    function c(a) {
        var b;
        b = (b = a.node) == null ? void 0 : (b = b.dim) == null ? void 0 : b.x;
        a = (a = a.node) == null ? void 0 : (a = a.dim) == null ? void 0 : a.y;
        return b !== null && b !== void 0 && b !== 0 && a !== null && a !== void 0 && a !== 0 ? b + "," + a : ""
    }
    function d(a) {
        var b;
        return j(a) === "video" ? ((b = a.node) == null ? void 0 : b.playable_url) || "" : ((b = a.node) == null ? void 0 : (a = b.image) == null ? void 0 : a.uri) || ""
    }
}
), null);
__d("BizKitContextCardSharedPhotos.react", ["fbt", "ix", "BackgroundImage.react", "BizKitContextCardMoreSection.react", "ContextCardMediaUtils", "GeoHeading.react", "GeoSpinner.react", "Grid.react", "Image.react", "React", "RelayHooks", "stylex", "BizKitContextCardSharedPhotos_messageThread.graphql"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i, j, k = b("React"), l = 104, m = 4;
    (j || (j = b("stylex"))).inject(".aqjawu3u{border-top:1px solid var(--fds-gray-20)}", .3);
    j.inject(".ocqzl5j7{margin-left:-16px}", 1);
    j.inject(".sbcbdo0p{margin-right:-16px}", 1);
    j.inject(".ihx95mk1{margin-top:12px}", 1);
    j.inject(".s1m0hq7j{padding-top:12px}", 1);
    j.inject(".hsphh064{text-align:center}", 1);
    j.inject(".mfn553m3{margin-bottom:8px}", 1);
    j.inject(".ihx95mk1{margin-top:12px}", 1);
    j.inject(".ngbj85sm{padding-top:2px}", 1);
    j.inject(".pdnn8mpk{padding-right:2px}", 1, ".pdnn8mpk{padding-left:2px}");
    j.inject(".rt9i6ysf{padding-bottom:2px}", 1);
    j.inject(".f1iqohp5{padding-left:2px}", 1, ".f1iqohp5{padding-right:2px}");
    j.inject(".fsf7x5fv{cursor:pointer}", 1);
    j.inject(".h55ihhoj{opacity:.7}", 1);
    j.inject(".beiy8v6c:hover{opacity:1}", 8);
    var n = i !== void 0 ? i : i = b("BizKitContextCardSharedPhotos_messageThread.graphql");
    function a(a) {
        var c = a.pageID
          , d = a.userID
          , e = a.className;
        a = a.messageThread;
        a = b("RelayHooks").usePaginationFragment(n, a);
        var f = a.data
          , i = a.loadNext
          , j = a.hasNext
          , o = a.isLoadingNext
          , p = function() {
            i(m)
        };
        a = function() {
            if (!j)
                return null;
            return o ? k.jsx("div", {
                className: "hsphh064 s1m0hq7j ihx95mk1 sbcbdo0p ocqzl5j7 aqjawu3u",
                children: k.jsx(b("GeoSpinner.react"), {})
            }) : k.jsx(b("BizKitContextCardMoreSection.react"), {
                className: "hsphh064 s1m0hq7j ihx95mk1 sbcbdo0p ocqzl5j7 aqjawu3u",
                onClick: p
            })
        }
        ;
        f = ((f = f.sharedMedia) == null ? void 0 : f.edges) || [];
        if (f.length === 0)
            return null;
        f = f.map(function(a) {
            var c;
            return {
                dim: b("ContextCardMediaUtils").getDimString(a),
                fbid: ((c = a.node) == null ? void 0 : c.fbid) || "",
                src_uri: b("ContextCardMediaUtils").getSrcURI(a),
                media_type: b("ContextCardMediaUtils").getMediaType(a),
                uri: ((c = a.node) == null ? void 0 : (a = c.image) == null ? void 0 : a.uri) || ""
            }
        });
        return k.jsxs("div", {
            className: e,
            children: [k.jsx(b("GeoHeading.react"), {
                level: 3,
                children: g._("\u1ea2nh \u0111\u01b0\u1ee3c chia s\u1ebb")
            }), k.jsx(b("Grid.react"), {
                className: "ihx95mk1 mfn553m3",
                cols: 2,
                spacing: "f1iqohp5 rt9i6ysf pdnn8mpk ngbj85sm",
                children: f.map(function(a) {
                    return k.jsx(b("BackgroundImage.react"), {
                        backgroundSize: "cover",
                        className: "fsf7x5fv",
                        height: l,
                        onClick: function() {
                            return b("ContextCardMediaUtils").openFullView(a, c, d)
                        },
                        src: a.uri,
                        width: l,
                        children: a.media_type === "video" ? k.jsx(b("Image.react"), {
                            className: "beiy8v6c h55ihhoj",
                            src: h("27983")
                        }) : null
                    }, a.fbid)
                })
            }), a()]
        })
    }
}
), null);
__d("BizKitContextCardMediaSection.react", ["BizKitContextCardSharedPhotos.react", "React", "RelayHooks", "RelayModern", "BizKitContextCardMediaSection_media.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React");
    function a(a) {
        var c, d = b("RelayHooks").useFragment(g !== void 0 ? g : g = b("BizKitContextCardMediaSection_media.graphql"), a.media);
        c = d == null ? void 0 : (c = d.fb_attributes) == null ? void 0 : c.user_id;
        d = d == null ? void 0 : (d = d.fb_attributes) == null ? void 0 : (d = d.messenger_thread) == null ? void 0 : d.one_to_one_thread;
        return c === null || c === void 0 || d === null || d === void 0 ? null : h.jsx(b("BizKitContextCardSharedPhotos.react"), {
            className: a.className,
            messageThread: d,
            pageID: a.pageID,
            userID: c
        })
    }
}
), null);
__d("BizKitContextCard.react", ["BizKitContextCardSectionWrapper.react", "React", "RelayHooks", "RelayModern", "ScrollableArea.react", "stylex", "BizKitContextCard_detail.graphql", "BizKitContextCard_config.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h, i, j = b("React");
    (i || (i = b("stylex"))).inject(".gkum2dnh{text-align:left}", 1);
    function a(a) {
        var c = b("RelayHooks").useFragment(g !== void 0 ? g : g = b("BizKitContextCard_detail.graphql"), a.contactDetails)
          , d = b("RelayHooks").useFragment(h !== void 0 ? h : h = b("BizKitContextCard_config.graphql"), a.contactConfig)
          , e = a.contactID
          , f = a.contactIdentity
          , i = a.pageID
          , k = a.platform
          , l = a.isInKBankRollout
          , m = a.onSelectLabel
          , n = a.activitiesQueryReference
          , o = a.onBanUser
          , p = a.isBlockedInIG;
        return j.jsx(b("ScrollableArea.react"), {
            className: "gkum2dnh",
            "data-testid": void 0,
            children: d == null ? void 0 : (a = d.sections) == null ? void 0 : a.map(function(a) {
                return j.jsx(b("BizKitContextCardSectionWrapper.react"), {
                    data: c,
                    sectionName: a,
                    platform: k,
                    pageID: i,
                    contactID: e,
                    contactIdentity: f,
                    onSelectLabel: m,
                    isInKBankRollout: l,
                    activitiesQueryReference: n,
                    onBanUser: o,
                    isBlockedInIG: p
                }, a)
            })
        })
    }
}
), null);
__d("BizKitContextCardContainer.react", ["BizKitContextCard.react", "BizKitContextCardActivitySectionQuery.graphql", "React", "RelayHooks", "gkx", "useDeepEqualMemo", "BizKitContextCardContainerDetailsQuery.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React"), i = b("gkx")("1626069"), j = g !== void 0 ? g : g = b("BizKitContextCardContainerDetailsQuery.graphql");
    function k(a) {
        var c, d = a.selectedThreadType, e = a.pageID, f = a.onSelectLabel, g = a.onBanUser, k = a.contactIdentity, l = a.detailsQueryReference, m = a.activitiesQueryReference;
        a = a.isBlockedInIG;
        l = b("RelayHooks").usePreloadedQuery(j, l);
        c = (c = l.retrieve_biz_crm_contact) == null ? void 0 : c.id;
        if (c == null)
            return null;
        var n = l.biz_crm_contact_card_config;
        return h.jsx(b("BizKitContextCard.react"), {
            contactDetails: l.retrieve_biz_crm_contact,
            contactConfig: n,
            contactIdentity: k,
            contactID: c,
            isInKBankRollout: i,
            pageID: e,
            platform: d,
            onSelectLabel: f,
            activitiesQueryReference: m,
            onBanUser: g,
            isBlockedInIG: a
        })
    }
    function a(a) {
        var c = a.contactIdentity
          , d = a.pageID
          , e = b("RelayHooks").useQueryLoader(j)
          , f = e[0]
          , g = e[1];
        e = b("RelayHooks").useQueryLoader(b("BizKitContextCardActivitySectionQuery.graphql"));
        var i = e[0]
          , l = e[1];
        h.useEffect(function() {
            g({
                identity: c
            }),
            l({
                identity: c
            })
        }, b("useDeepEqualMemo")([g, c, d, l]));
        return f == null || i == null ? h.jsx(h.Fragment, {}) : h.jsx(k, babelHelpers["extends"]({
            detailsQueryReference: f,
            activitiesQueryReference: i
        }, a))
    }
}
), null);
__d("XBizKitInboxController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/bizkit/inbox/config/{?selected_item_id}/", {
        selected_item_id: {
            type: "String"
        },
        mailbox_id: {
            type: "FBID"
        }
    })
}
), null);
__d("BizKitInboxView.react", ["invariant", "AdsInterfacesRouter", "AsyncTypedRequest", "BizInboxAppQuery.graphql", "BizInboxNuxConfigUpdater.react", "BizInboxNuxContextProvider", "BizKitActivitiesLoggingUtils", "BizKitErrorBoundary.react", "BusinessInboxBizKitUtil", "CometHeroHoldTrigger.react", "CometPagelet.react", "FlexLayout.react", "FlexLayoutItem.react", "GeoSpinner.react", "LWIBizWebButtonActionContextProvider.react", "PageCommItemFolder", "QE2Logger", "QuickPerformanceLogger", "React", "RelayHooks", "ScrollableLayout.react", "XBizKitInboxController", "isEmpty", "qex", "requireCond", "stylex", "useBizKitPage", "useBizKitTabTTIEnd", "cr:1754158", "cr:1754159", "BizKitInboxViewQuery.graphql"], (function(a, b, c, d, e, f, g) {
    e.exports = a;
    var h, i, j, k = b("React");
    (i || (i = b("stylex"))).inject(".mfclru0v{width:100%}", 1);
    i.inject(".g4tp4svg{z-index:0}", 1);
    i.inject(".aeinzg81{min-width:0}", 1);
    i.inject(".dnr7xe2t{min-height:0}", 1);
    var l = h !== void 0 ? h : h = b("BizKitInboxViewQuery.graphql");
    function a(a) {
        var c;
        b("QE2Logger").logExposureForUser("qe_biz_inbox_platformization");
        a = k.useState();
        var d = a[0]
          , e = a[1]
          , f = b("useBizKitPage")();
        b("useBizKitTabTTIEnd")();
        b("BizKitActivitiesLoggingUtils").useBizKitLogNotifItemTTIEnd("INBOX");
        a = b("RelayHooks").useLazyLoadQuery(l, {
            page_id: f
        });
        a = a.node;
        a != null || g(0, 20628);
        var h = (c = b("qex")._("1754160")) != null ? c : !1;
        c = b("RelayHooks").useQueryLoader(b("BizInboxAppQuery.graphql"));
        var i = c[0]
          , m = c[1];
        k.useEffect(function() {
            if (!h) {
                var a = b("XBizKitInboxController").getURIBuilder().setFBID("mailbox_id", f).getURI()
                  , c = new (b("AsyncTypedRequest"))(a).setHandler(function(a) {
                    e(a.payload)
                });
                c.send();
                return function() {
                    e(null),
                    c && c.abandon()
                }
            } else
                m({
                    page_id: f
                })
        }, [h, m, f]);
        k.useEffect(function() {
            b("QuickPerformanceLogger").markerStart(36247834)
        }, []);
        if ((j || (j = b("isEmpty")))(d) !== !0 && d != null || h) {
            c = b("AdsInterfacesRouter").get().getParams();
            var n = null
              , o = c.routeName
              , p = b("BusinessInboxBizKitUtil").routeNameToViewMode(o);
            if (o !== "ALL" && (c.selected_item_id != null || c.platform != null || c.folder != null) && p === "messages") {
                var q;
                n = {
                    id: c.selected_item_id != null ? String(c.selected_item_id) : null,
                    folder: (q = c.folder) != null ? q : b("PageCommItemFolder").TODO,
                    platform: (q = c.platform) != null ? q : o
                }
            }
            q = f + ((q = (q = n) == null ? void 0 : q.id) != null ? q : "");
            return k.jsx(b("LWIBizWebButtonActionContextProvider.react"), {
                children: k.jsx(b("FlexLayout.react"), {
                    align: "stretch",
                    direction: "horizontal-reverse",
                    children: k.jsx(b("BizKitErrorBoundary.react"), {
                        fallback: null,
                        children: k.jsx(b("FlexLayoutItem.react"), {
                            className: "g4tp4svg dnr7xe2t aeinzg81",
                            grow: 1,
                            shrink: 1,
                            children: k.jsxs(b("CometPagelet.react").Placeholder, {
                                className: "mfclru0v",
                                name: "BizWebInbox",
                                fallback: k.jsx(b("ScrollableLayout.react"), {
                                    className: "mfclru0v",
                                    children: k.jsx(b("GeoSpinner.react"), {
                                        center: !0
                                    })
                                }),
                                children: [h && b("cr:1754158") ? k.jsxs(b("BizInboxNuxContextProvider"), {
                                    children: [i && k.jsx(b("cr:1754158"), {
                                        pageID: f,
                                        routeName: o,
                                        selectedThreadID: c.selected_item_id,
                                        queryRef: i
                                    }), k.jsx(b("BizInboxNuxConfigUpdater.react"), {
                                        pageID: f
                                    })]
                                }) : null, !h && b("cr:1754159") && d ? k.jsx(b("cr:1754159"), {
                                    config: d,
                                    pageID: String(f),
                                    pageProfilePicURI: a == null ? void 0 : (o = a.topic_image) == null ? void 0 : o.uri,
                                    pageName: (c = a == null ? void 0 : a.name) != null ? c : "",
                                    section: p,
                                    selectedItem: n,
                                    automation: "instant_reply",
                                    isInBizKit: !0
                                }, q) : null]
                            })
                        })
                    })
                })
            })
        } else
            return k.jsx(b("FlexLayout.react"), {
                align: "stretch",
                direction: "horizontal-reverse",
                children: k.jsx(b("BizKitErrorBoundary.react"), {
                    fallback: null,
                    children: k.jsx(b("FlexLayoutItem.react"), {
                        className: "g4tp4svg dnr7xe2t aeinzg81",
                        grow: 1,
                        shrink: 1,
                        children: k.jsxs(b("ScrollableLayout.react"), {
                            className: "mfclru0v",
                            children: [k.jsx(b("CometHeroHoldTrigger.react"), {
                                hold: !0,
                                description: "Inbox PlacHolder when config did not load"
                            }), k.jsx(b("GeoSpinner.react"), {
                                center: !0
                            })]
                        })
                    })
                })
            })
    }
}
), null);
