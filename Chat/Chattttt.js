if (self.CavalryLogger) {
    CavalryLogger.start_js(["3oM54"]);
}

__d("SearchCoronavirusGlobalTypeaheadStrings", ["fbt"], (function(a, b, c, d, e, f, g) {
    e.exports = {
        GLOBAL_TYPEAHEAD_ENTRY: g._("th\u00f4ng tin m\u1edbi v\u1ec1 virus corona"),
        GLOBAL_TYPEAHEAD_SECTION_HEADER: g._("Th\u00f4ng tin m\u1edbi v\u1ec1 COVID-19")
    }
}
), null);
__d("useFriendingCometFriendRequestBadgeCountQuery.graphql", ["relay-runtime"], (function(a, b, c, d, e, f) {
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
            name: "__typename",
            storageKey: null
        }, a];
        return {
            fragment: {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "useFriendingCometFriendRequestBadgeCountQuery",
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
                        concreteType: null,
                        kind: "LinkedField",
                        name: "actor",
                        plural: !1,
                        selections: [a],
                        storageKey: null
                    }, {
                        args: [{
                            kind: "Literal",
                            name: "bookmarkID",
                            value: "2356318349"
                        }],
                        kind: "FragmentSpread",
                        name: "useTopTabBadgeCount_viewer"
                    }],
                    storageKey: null
                }],
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: [],
                kind: "Operation",
                name: "useFriendingCometFriendRequestBadgeCountQuery",
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
                        concreteType: null,
                        kind: "LinkedField",
                        name: "actor",
                        plural: !1,
                        selections: b,
                        storageKey: null
                    }, {
                        alias: null,
                        args: [{
                            items: [{
                                kind: "Literal",
                                name: "bookmark_ids.0",
                                value: "2356318349"
                            }],
                            kind: "ListValue",
                            name: "bookmark_ids"
                        }, {
                            kind: "Literal",
                            name: "environment",
                            value: "COMET"
                        }, {
                            kind: "Literal",
                            name: "folder_id",
                            value: "PRODUCT"
                        }, {
                            kind: "Literal",
                            name: "sections",
                            value: ["FACEBOOK_APP"]
                        }],
                        concreteType: "BookmarksConnection",
                        kind: "LinkedField",
                        name: "bookmarks",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "BookmarksEdge",
                            kind: "LinkedField",
                            name: "edges",
                            plural: !0,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "Bookmark",
                                kind: "LinkedField",
                                name: "node",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "bookmarked_node",
                                    plural: !1,
                                    selections: b,
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: [{
                                        kind: "Literal",
                                        name: "bookmark_render_location",
                                        value: "COMET_TOP_TAB"
                                    }],
                                    kind: "ScalarField",
                                    name: "unread_count",
                                    storageKey: 'unread_count(bookmark_render_location:"COMET_TOP_TAB")'
                                }, a],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: 'bookmarks(bookmark_ids:["2356318349"],environment:"COMET",folder_id:"PRODUCT",sections:["FACEBOOK_APP"])'
                    }],
                    storageKey: null
                }]
            },
            params: {
                id: "4398071206877554",
                metadata: {
                    relayPreloadable: !0
                },
                name: "useFriendingCometFriendRequestBadgeCountQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    a.params.id != null && b("relay-runtime").PreloadableQueryRegistry.set(a.params.id, a);
    e.exports = a
}
), null);
__d("FriendingCometFriendRequestConfirmSubscription.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "input"
        }, {
            defaultValue: null,
            kind: "LocalArgument",
            name: "scale"
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
            name: "notif_id",
            storageKey: null
        }
          , d = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        }
          , e = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "seen_state",
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
            kind: "ScalarField",
            name: "time_confirmed",
            storageKey: null
        }
          , h = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null
        }
          , i = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "name",
            storageKey: null
        }
          , j = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "url",
            storageKey: null
        }
          , k = {
            kind: "Variable",
            name: "scale",
            variableName: "scale"
        }
          , l = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null
        }
          , m = [l]
          , n = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "length",
            storageKey: null
        }
          , o = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "offset",
            storageKey: null
        }
          , p = [{
            kind: "Literal",
            name: "delight_surface",
            value: "COMMENT"
        }]
          , q = {
            kind: "InlineFragment",
            selections: [d],
            type: "Node",
            abstractKey: "__isNode"
        }
          , r = [d, i]
          , s = {
            alias: null,
            args: [{
                kind: "Literal",
                name: "site",
                value: "comet"
            }],
            kind: "ScalarField",
            name: "url",
            storageKey: 'url(site:"comet")'
        }
          , t = {
            alias: null,
            args: null,
            concreteType: "WorkForeignEntityInfo",
            kind: "LinkedField",
            name: "work_foreign_entity_info",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "type",
                storageKey: null
            }],
            storageKey: null
        };
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "FriendingCometFriendRequestConfirmSubscription",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: "FriendRequestConfirmSubscribeResponsePayload",
                    kind: "LinkedField",
                    name: "friend_request_confirm_subscribe",
                    plural: !1,
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
                            concreteType: null,
                            kind: "LinkedField",
                            name: "actor",
                            plural: !1,
                            selections: [{
                                args: null,
                                kind: "FragmentSpread",
                                name: "CometNotificationsListItem_actor"
                            }],
                            storageKey: null
                        }, {
                            args: [{
                                kind: "Literal",
                                name: "bookmarkID",
                                value: "2356318349"
                            }],
                            kind: "FragmentSpread",
                            name: "useTopTabBadgeCount_viewer"
                        }],
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "User",
                        kind: "LinkedField",
                        name: "new_friend",
                        plural: !1,
                        selections: [{
                            args: null,
                            kind: "FragmentSpread",
                            name: "FriendingCometAcceptedFriendRequestsPanel_user"
                        }],
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "Notification",
                        kind: "LinkedField",
                        name: "notif",
                        plural: !1,
                        selections: [c, d, e, {
                            alias: null,
                            args: null,
                            concreteType: "TextWithEntities",
                            kind: "LinkedField",
                            name: "body",
                            plural: !1,
                            selections: [f],
                            storageKey: null
                        }, {
                            args: [{
                                kind: "Literal",
                                name: "isToast",
                                value: !0
                            }],
                            kind: "FragmentSpread",
                            name: "CometNotificationsListItem_notification"
                        }],
                        storageKey: null
                    }, g],
                    storageKey: null
                }],
                type: "Subscription",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "FriendingCometFriendRequestConfirmSubscription",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: "FriendRequestConfirmSubscribeResponsePayload",
                    kind: "LinkedField",
                    name: "friend_request_confirm_subscribe",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: "Viewer",
                        kind: "LinkedField",
                        name: "viewer",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: [{
                                items: [{
                                    kind: "Literal",
                                    name: "bookmark_ids.0",
                                    value: "2356318349"
                                }],
                                kind: "ListValue",
                                name: "bookmark_ids"
                            }, {
                                kind: "Literal",
                                name: "environment",
                                value: "COMET"
                            }, {
                                kind: "Literal",
                                name: "folder_id",
                                value: "PRODUCT"
                            }, {
                                kind: "Literal",
                                name: "sections",
                                value: ["FACEBOOK_APP"]
                            }],
                            concreteType: "BookmarksConnection",
                            kind: "LinkedField",
                            name: "bookmarks",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "BookmarksEdge",
                                kind: "LinkedField",
                                name: "edges",
                                plural: !0,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "Bookmark",
                                    kind: "LinkedField",
                                    name: "node",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: "LinkedField",
                                        name: "bookmarked_node",
                                        plural: !1,
                                        selections: [h, d],
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: [{
                                            kind: "Literal",
                                            name: "bookmark_render_location",
                                            value: "COMET_TOP_TAB"
                                        }],
                                        kind: "ScalarField",
                                        name: "unread_count",
                                        storageKey: 'unread_count(bookmark_render_location:"COMET_TOP_TAB")'
                                    }, d],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: 'bookmarks(bookmark_ids:["2356318349"],environment:"COMET",folder_id:"PRODUCT",sections:["FACEBOOK_APP"])'
                        }, {
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: "LinkedField",
                            name: "actor",
                            plural: !1,
                            selections: [h, {
                                kind: "TypeDiscriminator",
                                abstractKey: "__isActor"
                            }, d],
                            storageKey: null
                        }],
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "User",
                        kind: "LinkedField",
                        name: "new_friend",
                        plural: !1,
                        selections: [i, j, {
                            alias: null,
                            args: [{
                                kind: "Literal",
                                name: "height",
                                value: 60
                            }, k, {
                                kind: "Literal",
                                name: "width",
                                value: 60
                            }],
                            concreteType: "Image",
                            kind: "LinkedField",
                            name: "profile_picture",
                            plural: !1,
                            selections: m,
                            storageKey: null
                        }, d],
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "Notification",
                        kind: "LinkedField",
                        name: "notif",
                        plural: !1,
                        selections: [d, c, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "notif_type",
                            storageKey: null
                        }, e, {
                            alias: null,
                            args: [{
                                kind: "Literal",
                                name: "notif_option_set_context",
                                value: {
                                    client_action_types: ["HIDE", "UNSUB", "TOGGLE_ACTIVE", "OPEN_IN_INSPECTOR", "REPORT_BUG", "OPEN_PCU_REMINDERS_DIALOG"],
                                    environment: "MAIN_SURFACE",
                                    is_comet: !0,
                                    supported_display_styles: [{
                                        option_display_styles: ["CHEVRON_MENU_OPTION"],
                                        option_set_display_style: "CHEVRON_MENU"
                                    }]
                                }
                            }],
                            concreteType: "NotificationOptionSetsConnection",
                            kind: "LinkedField",
                            name: "notif_option_sets",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "NotificationOptionSetsEdge",
                                kind: "LinkedField",
                                name: "edges",
                                plural: !0,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "NotifOptionSet",
                                    kind: "LinkedField",
                                    name: "node",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "NotifOptionSetOptionsConnection",
                                        kind: "LinkedField",
                                        name: "notif_options",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "NotifOptionSetOptionsEdge",
                                            kind: "LinkedField",
                                            name: "edges",
                                            plural: !0,
                                            selections: [{
                                                alias: null,
                                                args: null,
                                                concreteType: "NotifOption",
                                                kind: "LinkedField",
                                                name: "node",
                                                plural: !1,
                                                selections: [d, {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: null,
                                                    kind: "LinkedField",
                                                    name: "notif_option_renderer",
                                                    plural: !1,
                                                    selections: [h, {
                                                        kind: "InlineFragment",
                                                        selections: [{
                                                            documentName: "CometNotificationsDropdownMenu_notification",
                                                            fragmentName: "CometNotificationsDropdownHideMenuItem_notifOptionRenderer",
                                                            fragmentPropName: "notifOptionRenderer",
                                                            kind: "ModuleImport"
                                                        }],
                                                        type: "NotifOptionHideRenderer",
                                                        abstractKey: null
                                                    }, {
                                                        kind: "InlineFragment",
                                                        selections: [{
                                                            documentName: "CometNotificationsDropdownMenu_notification",
                                                            fragmentName: "CometNotificationsDropdownDefaultMenuItem_notifOptionRenderer",
                                                            fragmentPropName: "notifOptionRenderer",
                                                            kind: "ModuleImport"
                                                        }],
                                                        type: "NotifOptionDefaultRenderer",
                                                        abstractKey: null
                                                    }, {
                                                        kind: "InlineFragment",
                                                        selections: [{
                                                            documentName: "CometNotificationsDropdownMenu_notification",
                                                            fragmentName: "CometNotificationsDropdownDialogMenuItem_notifOptionRenderer",
                                                            fragmentPropName: "notifOptionRenderer",
                                                            kind: "ModuleImport"
                                                        }],
                                                        type: "NotifOptionDialogRenderer",
                                                        abstractKey: null
                                                    }],
                                                    storageKey: null
                                                }],
                                                storageKey: null
                                            }],
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }, d],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: 'notif_option_sets(notif_option_set_context:{"client_action_types":["HIDE","UNSUB","TOGGLE_ACTIVE","OPEN_IN_INSPECTOR","REPORT_BUG","OPEN_PCU_REMINDERS_DIALOG"],"environment":"MAIN_SURFACE","is_comet":true,"supported_display_styles":[{"option_display_styles":["CHEVRON_MENU_OPTION"],"option_set_display_style":"CHEVRON_MENU"}]})'
                        }, {
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: "LinkedField",
                            name: "notif_attachments",
                            plural: !0,
                            selections: [h, {
                                kind: "InlineFragment",
                                selections: [{
                                    documentName: "CometNotificationsListItemAttachment_notification",
                                    fragmentName: "CometNotificationsListItemFriendRequestAttachment_notifAttachments",
                                    fragmentPropName: "notifAttachments",
                                    kind: "ModuleImport"
                                }],
                                type: "FriendRequestNotifAttachment",
                                abstractKey: null
                            }, {
                                kind: "InlineFragment",
                                selections: [{
                                    documentName: "CometNotificationsListItemAttachment_notification",
                                    fragmentName: "CometNotificationsListItemLiveVideoAttachment_attachment",
                                    fragmentPropName: "attachment",
                                    kind: "ModuleImport"
                                }],
                                type: "LiveVideoNotificationAttachment",
                                abstractKey: null
                            }, {
                                kind: "InlineFragment",
                                selections: [{
                                    documentName: "CometNotificationsListItemAttachment_notification",
                                    fragmentName: "CometNotificationsListItemPageInviteAttachment_notifAttachments",
                                    fragmentPropName: "notifAttachments",
                                    kind: "ModuleImport"
                                }],
                                type: "PageInviteNotifAttachment",
                                abstractKey: null
                            }, {
                                kind: "InlineFragment",
                                selections: [{
                                    documentName: "CometNotificationsListItemAttachment_notification",
                                    fragmentName: "CometNotificationsListItemQuickPromotionAttachment_notifAttachments",
                                    fragmentPropName: "notifAttachments",
                                    kind: "ModuleImport"
                                }],
                                type: "QuickPromotionNotifAttachment",
                                abstractKey: null
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "TextWithEntities",
                            kind: "LinkedField",
                            name: "body",
                            plural: !1,
                            selections: [f, {
                                alias: null,
                                args: null,
                                concreteType: "DelightAtRange",
                                kind: "LinkedField",
                                name: "delight_ranges",
                                plural: !0,
                                selections: [n, o, {
                                    alias: null,
                                    args: null,
                                    concreteType: "TextDelightCampaign",
                                    kind: "LinkedField",
                                    name: "campaign",
                                    plural: !1,
                                    selections: [h, {
                                        alias: null,
                                        args: p,
                                        concreteType: "TextDelightStylePair",
                                        kind: "LinkedField",
                                        name: "delight_styles",
                                        plural: !0,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "style",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "value",
                                            storageKey: null
                                        }],
                                        storageKey: 'delight_styles(delight_surface:"COMMENT")'
                                    }, {
                                        alias: null,
                                        args: p,
                                        concreteType: "DelightsAnimation",
                                        kind: "LinkedField",
                                        name: "delight_asset",
                                        plural: !1,
                                        selections: [d, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "animation_uri",
                                            storageKey: null
                                        }],
                                        storageKey: 'delight_asset(delight_surface:"COMMENT")'
                                    }, d],
                                    storageKey: null
                                }],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "ImageAtRange",
                                kind: "LinkedField",
                                name: "image_ranges",
                                plural: !0,
                                selections: [n, o, {
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "entity_with_image",
                                    plural: !1,
                                    selections: [h, {
                                        alias: null,
                                        args: [k],
                                        concreteType: "Image",
                                        kind: "LinkedField",
                                        name: "image",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "height",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "scale",
                                            storageKey: null
                                        }, l, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "width",
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }, q],
                                    storageKey: null
                                }],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "InlineStyleAtRange",
                                kind: "LinkedField",
                                name: "inline_style_ranges",
                                plural: !0,
                                selections: [n, o, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "inline_style",
                                    storageKey: null
                                }],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "AggregatedEntitiesAtRange",
                                kind: "LinkedField",
                                name: "aggregated_ranges",
                                plural: !0,
                                selections: [n, o, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "count",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "sample_entities",
                                    plural: !0,
                                    selections: [h, {
                                        kind: "InlineFragment",
                                        selections: r,
                                        type: "User",
                                        abstractKey: null
                                    }, q],
                                    storageKey: null
                                }],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "EntityAtRange",
                                kind: "LinkedField",
                                name: "ranges",
                                plural: !0,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "entity",
                                    plural: !1,
                                    selections: [h, {
                                        kind: "TypeDiscriminator",
                                        abstractKey: "__isEntity"
                                    }, s, {
                                        alias: "mobileUrl",
                                        args: [{
                                            kind: "Literal",
                                            name: "site",
                                            value: "mobile"
                                        }],
                                        kind: "ScalarField",
                                        name: "url",
                                        storageKey: 'url(site:"mobile")'
                                    }, {
                                        kind: "InlineFragment",
                                        selections: [d, {
                                            kind: "InlineFragment",
                                            selections: [{
                                                alias: "profile_url",
                                                args: null,
                                                kind: "ScalarField",
                                                name: "url",
                                                storageKey: null
                                            }],
                                            type: "Entity",
                                            abstractKey: "__isEntity"
                                        }],
                                        type: "Actor",
                                        abstractKey: "__isActor"
                                    }, {
                                        kind: "InlineFragment",
                                        selections: [{
                                            documentName: "CometTextWithEntitiesRelay_textWithEntities",
                                            fragmentName: "GroupsCometHashtagsStoryMessageHashtagLink_hashtag",
                                            fragmentPropName: "hashtag",
                                            kind: "ModuleImport"
                                        }],
                                        type: "GroupHashtag",
                                        abstractKey: null
                                    }, {
                                        kind: "InlineFragment",
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "category_type",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "verification_status",
                                            storageKey: null
                                        }, d, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "is_verified",
                                            storageKey: null
                                        }, {
                                            documentName: "CometTextWithEntitiesRelay_textWithEntities",
                                            fragmentName: "PagesCometPageLink_page",
                                            fragmentPropName: "page",
                                            kind: "ModuleImport"
                                        }],
                                        type: "Page",
                                        abstractKey: null
                                    }, {
                                        kind: "InlineFragment",
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "external_url",
                                            storageKey: null
                                        }],
                                        type: "ExternalUrl",
                                        abstractKey: null
                                    }, {
                                        kind: "InlineFragment",
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "time_index",
                                            storageKey: null
                                        }],
                                        type: "VideoTimeIndex",
                                        abstractKey: null
                                    }, {
                                        kind: "InlineFragment",
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: null,
                                            kind: "LinkedField",
                                            name: "web_link",
                                            plural: !1,
                                            selections: [h, j, {
                                                kind: "InlineFragment",
                                                selections: [{
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "fbclid",
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "lynx_mode",
                                                    storageKey: null
                                                }],
                                                type: "ExternalWebLink",
                                                abstractKey: null
                                            }],
                                            storageKey: null
                                        }],
                                        type: "WebLinkable",
                                        abstractKey: "__isWebLinkable"
                                    }, {
                                        kind: "InlineFragment",
                                        selections: [t, {
                                            alias: null,
                                            args: null,
                                            concreteType: "WorkUserInfo",
                                            kind: "LinkedField",
                                            name: "work_info",
                                            plural: !1,
                                            selections: [{
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "is_active_account",
                                                storageKey: null
                                            }],
                                            storageKey: null
                                        }],
                                        type: "User",
                                        abstractKey: null
                                    }, {
                                        kind: "InlineFragment",
                                        selections: [t, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "work_official_status",
                                            storageKey: null
                                        }],
                                        type: "Group",
                                        abstractKey: null
                                    }, q],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "entity_is_weak_reference",
                                    storageKey: null
                                }, n, o],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "ColorAtRange",
                                kind: "LinkedField",
                                name: "color_ranges",
                                plural: !0,
                                selections: [n, o, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "hex_rgb_color_with_pound_key",
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: [{
                                kind: "Literal",
                                name: "height",
                                value: 56
                            }, k, {
                                kind: "Literal",
                                name: "width",
                                value: 56
                            }],
                            concreteType: "Image",
                            kind: "LinkedField",
                            name: "notif_image",
                            plural: !1,
                            selections: m,
                            storageKey: null
                        }, s, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "www_url_should_open_in_blank_target",
                            storageKey: null
                        }, {
                            alias: "creation_time",
                            args: null,
                            concreteType: "CreationTimeWithRelativeText",
                            kind: "LinkedField",
                            name: "creation_time_with_relative_text",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "timestamp",
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "GlyphIconData",
                            kind: "LinkedField",
                            name: "icon_data",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "reaction_type",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "glyph_name",
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "tracking",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "NotifNavigationEndpoint",
                            kind: "LinkedField",
                            name: "navigation_endpoint",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "User",
                                kind: "LinkedField",
                                name: "target_viewer",
                                plural: !1,
                                selections: r,
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "target_viewer_type",
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            kind: "ClientExtension",
                            selections: [{
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "is_hidden",
                                storageKey: null
                            }]
                        }],
                        storageKey: null
                    }, g],
                    storageKey: null
                }]
            },
            params: {
                id: "4081652361850914",
                metadata: {
                    subscriptionName: "friend_request_confirm_subscribe"
                },
                name: "FriendingCometFriendRequestConfirmSubscription",
                operationKind: "subscription",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("FriendingCometFriendRequestReceiveSubscription.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "input"
        }, {
            defaultValue: null,
            kind: "LocalArgument",
            name: "scale"
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
            kind: "ScalarField",
            name: "friendship_status",
            storageKey: null
        }
          , e = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "time_received",
            storageKey: null
        }
          , f = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "notif_id",
            storageKey: null
        }
          , g = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "seen_state",
            storageKey: null
        }
          , h = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "text",
            storageKey: null
        }
          , i = [h]
          , j = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null
        }
          , k = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "name",
            storageKey: null
        }
          , l = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "url",
            storageKey: null
        }
          , m = {
            kind: "Variable",
            name: "scale",
            variableName: "scale"
        }
          , n = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null
        }
          , o = [n]
          , p = {
            alias: null,
            args: [{
                kind: "Literal",
                name: "site",
                value: "comet"
            }],
            kind: "ScalarField",
            name: "url",
            storageKey: 'url(site:"comet")'
        }
          , q = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "length",
            storageKey: null
        }
          , r = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "offset",
            storageKey: null
        }
          , s = [{
            kind: "Literal",
            name: "delight_surface",
            value: "COMMENT"
        }]
          , t = {
            kind: "InlineFragment",
            selections: [c],
            type: "Node",
            abstractKey: "__isNode"
        }
          , u = [c, k]
          , v = {
            alias: null,
            args: null,
            concreteType: "WorkForeignEntityInfo",
            kind: "LinkedField",
            name: "work_foreign_entity_info",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "type",
                storageKey: null
            }],
            storageKey: null
        };
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "FriendingCometFriendRequestReceiveSubscription",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: "FriendRequestReceiveSubscribeResponsePayload",
                    kind: "LinkedField",
                    name: "friend_request_receive_subscribe",
                    plural: !1,
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
                            concreteType: null,
                            kind: "LinkedField",
                            name: "actor",
                            plural: !1,
                            selections: [{
                                args: null,
                                kind: "FragmentSpread",
                                name: "CometNotificationsListItem_actor"
                            }],
                            storageKey: null
                        }, {
                            args: [{
                                kind: "Literal",
                                name: "bookmarkID",
                                value: "2356318349"
                            }],
                            kind: "FragmentSpread",
                            name: "useTopTabBadgeCount_viewer"
                        }],
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "User",
                        kind: "LinkedField",
                        name: "sender",
                        plural: !1,
                        selections: [c, d, {
                            args: null,
                            kind: "FragmentSpread",
                            name: "FriendingCometFriendRequestsListItem_user"
                        }],
                        storageKey: null
                    }, e, {
                        alias: null,
                        args: null,
                        concreteType: "Notification",
                        kind: "LinkedField",
                        name: "notif",
                        plural: !1,
                        selections: [f, c, g, {
                            alias: null,
                            args: null,
                            concreteType: "TextWithEntities",
                            kind: "LinkedField",
                            name: "body",
                            plural: !1,
                            selections: i,
                            storageKey: null
                        }, {
                            args: [{
                                kind: "Literal",
                                name: "isToast",
                                value: !0
                            }],
                            kind: "FragmentSpread",
                            name: "CometNotificationsListItem_notification"
                        }],
                        storageKey: null
                    }],
                    storageKey: null
                }],
                type: "Subscription",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "FriendingCometFriendRequestReceiveSubscription",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: "FriendRequestReceiveSubscribeResponsePayload",
                    kind: "LinkedField",
                    name: "friend_request_receive_subscribe",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: "Viewer",
                        kind: "LinkedField",
                        name: "viewer",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: [{
                                items: [{
                                    kind: "Literal",
                                    name: "bookmark_ids.0",
                                    value: "2356318349"
                                }],
                                kind: "ListValue",
                                name: "bookmark_ids"
                            }, {
                                kind: "Literal",
                                name: "environment",
                                value: "COMET"
                            }, {
                                kind: "Literal",
                                name: "folder_id",
                                value: "PRODUCT"
                            }, {
                                kind: "Literal",
                                name: "sections",
                                value: ["FACEBOOK_APP"]
                            }],
                            concreteType: "BookmarksConnection",
                            kind: "LinkedField",
                            name: "bookmarks",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "BookmarksEdge",
                                kind: "LinkedField",
                                name: "edges",
                                plural: !0,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "Bookmark",
                                    kind: "LinkedField",
                                    name: "node",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: "LinkedField",
                                        name: "bookmarked_node",
                                        plural: !1,
                                        selections: [j, c],
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: [{
                                            kind: "Literal",
                                            name: "bookmark_render_location",
                                            value: "COMET_TOP_TAB"
                                        }],
                                        kind: "ScalarField",
                                        name: "unread_count",
                                        storageKey: 'unread_count(bookmark_render_location:"COMET_TOP_TAB")'
                                    }, c],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: 'bookmarks(bookmark_ids:["2356318349"],environment:"COMET",folder_id:"PRODUCT",sections:["FACEBOOK_APP"])'
                        }, {
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: "LinkedField",
                            name: "actor",
                            plural: !1,
                            selections: [j, {
                                kind: "TypeDiscriminator",
                                abstractKey: "__isActor"
                            }, c],
                            storageKey: null
                        }],
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "User",
                        kind: "LinkedField",
                        name: "sender",
                        plural: !1,
                        selections: [c, d, k, l, {
                            alias: null,
                            args: [{
                                kind: "Literal",
                                name: "height",
                                value: 60
                            }, m, {
                                kind: "Literal",
                                name: "width",
                                value: 60
                            }],
                            concreteType: "Image",
                            kind: "LinkedField",
                            name: "profile_picture",
                            plural: !1,
                            selections: o,
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "gender",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "short_name",
                            storageKey: null
                        }, {
                            kind: "InlineFragment",
                            selections: [{
                                kind: "InlineFragment",
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "TextWithEntities",
                                    kind: "LinkedField",
                                    name: "social_context",
                                    plural: !1,
                                    selections: i,
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "User",
                                    kind: "LinkedField",
                                    name: "social_context_top_mutual_friends",
                                    plural: !0,
                                    selections: [c, k, p, {
                                        alias: null,
                                        args: [{
                                            kind: "Literal",
                                            name: "height",
                                            value: 20
                                        }, m, {
                                            kind: "Literal",
                                            name: "width",
                                            value: 20
                                        }],
                                        concreteType: "Image",
                                        kind: "LinkedField",
                                        name: "profile_picture",
                                        plural: !1,
                                        selections: o,
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }],
                                type: "User",
                                abstractKey: null
                            }],
                            type: "FriendNode",
                            abstractKey: "__isFriendNode"
                        }],
                        storageKey: null
                    }, e, {
                        alias: null,
                        args: null,
                        concreteType: "Notification",
                        kind: "LinkedField",
                        name: "notif",
                        plural: !1,
                        selections: [c, f, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "notif_type",
                            storageKey: null
                        }, g, {
                            alias: null,
                            args: [{
                                kind: "Literal",
                                name: "notif_option_set_context",
                                value: {
                                    client_action_types: ["HIDE", "UNSUB", "TOGGLE_ACTIVE", "OPEN_IN_INSPECTOR", "REPORT_BUG", "OPEN_PCU_REMINDERS_DIALOG"],
                                    environment: "MAIN_SURFACE",
                                    is_comet: !0,
                                    supported_display_styles: [{
                                        option_display_styles: ["CHEVRON_MENU_OPTION"],
                                        option_set_display_style: "CHEVRON_MENU"
                                    }]
                                }
                            }],
                            concreteType: "NotificationOptionSetsConnection",
                            kind: "LinkedField",
                            name: "notif_option_sets",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "NotificationOptionSetsEdge",
                                kind: "LinkedField",
                                name: "edges",
                                plural: !0,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "NotifOptionSet",
                                    kind: "LinkedField",
                                    name: "node",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "NotifOptionSetOptionsConnection",
                                        kind: "LinkedField",
                                        name: "notif_options",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "NotifOptionSetOptionsEdge",
                                            kind: "LinkedField",
                                            name: "edges",
                                            plural: !0,
                                            selections: [{
                                                alias: null,
                                                args: null,
                                                concreteType: "NotifOption",
                                                kind: "LinkedField",
                                                name: "node",
                                                plural: !1,
                                                selections: [c, {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: null,
                                                    kind: "LinkedField",
                                                    name: "notif_option_renderer",
                                                    plural: !1,
                                                    selections: [j, {
                                                        kind: "InlineFragment",
                                                        selections: [{
                                                            documentName: "CometNotificationsDropdownMenu_notification",
                                                            fragmentName: "CometNotificationsDropdownHideMenuItem_notifOptionRenderer",
                                                            fragmentPropName: "notifOptionRenderer",
                                                            kind: "ModuleImport"
                                                        }],
                                                        type: "NotifOptionHideRenderer",
                                                        abstractKey: null
                                                    }, {
                                                        kind: "InlineFragment",
                                                        selections: [{
                                                            documentName: "CometNotificationsDropdownMenu_notification",
                                                            fragmentName: "CometNotificationsDropdownDefaultMenuItem_notifOptionRenderer",
                                                            fragmentPropName: "notifOptionRenderer",
                                                            kind: "ModuleImport"
                                                        }],
                                                        type: "NotifOptionDefaultRenderer",
                                                        abstractKey: null
                                                    }, {
                                                        kind: "InlineFragment",
                                                        selections: [{
                                                            documentName: "CometNotificationsDropdownMenu_notification",
                                                            fragmentName: "CometNotificationsDropdownDialogMenuItem_notifOptionRenderer",
                                                            fragmentPropName: "notifOptionRenderer",
                                                            kind: "ModuleImport"
                                                        }],
                                                        type: "NotifOptionDialogRenderer",
                                                        abstractKey: null
                                                    }],
                                                    storageKey: null
                                                }],
                                                storageKey: null
                                            }],
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }, c],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: 'notif_option_sets(notif_option_set_context:{"client_action_types":["HIDE","UNSUB","TOGGLE_ACTIVE","OPEN_IN_INSPECTOR","REPORT_BUG","OPEN_PCU_REMINDERS_DIALOG"],"environment":"MAIN_SURFACE","is_comet":true,"supported_display_styles":[{"option_display_styles":["CHEVRON_MENU_OPTION"],"option_set_display_style":"CHEVRON_MENU"}]})'
                        }, {
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: "LinkedField",
                            name: "notif_attachments",
                            plural: !0,
                            selections: [j, {
                                kind: "InlineFragment",
                                selections: [{
                                    documentName: "CometNotificationsListItemAttachment_notification",
                                    fragmentName: "CometNotificationsListItemFriendRequestAttachment_notifAttachments",
                                    fragmentPropName: "notifAttachments",
                                    kind: "ModuleImport"
                                }],
                                type: "FriendRequestNotifAttachment",
                                abstractKey: null
                            }, {
                                kind: "InlineFragment",
                                selections: [{
                                    documentName: "CometNotificationsListItemAttachment_notification",
                                    fragmentName: "CometNotificationsListItemLiveVideoAttachment_attachment",
                                    fragmentPropName: "attachment",
                                    kind: "ModuleImport"
                                }],
                                type: "LiveVideoNotificationAttachment",
                                abstractKey: null
                            }, {
                                kind: "InlineFragment",
                                selections: [{
                                    documentName: "CometNotificationsListItemAttachment_notification",
                                    fragmentName: "CometNotificationsListItemPageInviteAttachment_notifAttachments",
                                    fragmentPropName: "notifAttachments",
                                    kind: "ModuleImport"
                                }],
                                type: "PageInviteNotifAttachment",
                                abstractKey: null
                            }, {
                                kind: "InlineFragment",
                                selections: [{
                                    documentName: "CometNotificationsListItemAttachment_notification",
                                    fragmentName: "CometNotificationsListItemQuickPromotionAttachment_notifAttachments",
                                    fragmentPropName: "notifAttachments",
                                    kind: "ModuleImport"
                                }],
                                type: "QuickPromotionNotifAttachment",
                                abstractKey: null
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "TextWithEntities",
                            kind: "LinkedField",
                            name: "body",
                            plural: !1,
                            selections: [h, {
                                alias: null,
                                args: null,
                                concreteType: "DelightAtRange",
                                kind: "LinkedField",
                                name: "delight_ranges",
                                plural: !0,
                                selections: [q, r, {
                                    alias: null,
                                    args: null,
                                    concreteType: "TextDelightCampaign",
                                    kind: "LinkedField",
                                    name: "campaign",
                                    plural: !1,
                                    selections: [j, {
                                        alias: null,
                                        args: s,
                                        concreteType: "TextDelightStylePair",
                                        kind: "LinkedField",
                                        name: "delight_styles",
                                        plural: !0,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "style",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "value",
                                            storageKey: null
                                        }],
                                        storageKey: 'delight_styles(delight_surface:"COMMENT")'
                                    }, {
                                        alias: null,
                                        args: s,
                                        concreteType: "DelightsAnimation",
                                        kind: "LinkedField",
                                        name: "delight_asset",
                                        plural: !1,
                                        selections: [c, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "animation_uri",
                                            storageKey: null
                                        }],
                                        storageKey: 'delight_asset(delight_surface:"COMMENT")'
                                    }, c],
                                    storageKey: null
                                }],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "ImageAtRange",
                                kind: "LinkedField",
                                name: "image_ranges",
                                plural: !0,
                                selections: [q, r, {
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "entity_with_image",
                                    plural: !1,
                                    selections: [j, {
                                        alias: null,
                                        args: [m],
                                        concreteType: "Image",
                                        kind: "LinkedField",
                                        name: "image",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "height",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "scale",
                                            storageKey: null
                                        }, n, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "width",
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }, t],
                                    storageKey: null
                                }],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "InlineStyleAtRange",
                                kind: "LinkedField",
                                name: "inline_style_ranges",
                                plural: !0,
                                selections: [q, r, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "inline_style",
                                    storageKey: null
                                }],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "AggregatedEntitiesAtRange",
                                kind: "LinkedField",
                                name: "aggregated_ranges",
                                plural: !0,
                                selections: [q, r, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "count",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "sample_entities",
                                    plural: !0,
                                    selections: [j, {
                                        kind: "InlineFragment",
                                        selections: u,
                                        type: "User",
                                        abstractKey: null
                                    }, t],
                                    storageKey: null
                                }],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "EntityAtRange",
                                kind: "LinkedField",
                                name: "ranges",
                                plural: !0,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "entity",
                                    plural: !1,
                                    selections: [j, {
                                        kind: "TypeDiscriminator",
                                        abstractKey: "__isEntity"
                                    }, p, {
                                        alias: "mobileUrl",
                                        args: [{
                                            kind: "Literal",
                                            name: "site",
                                            value: "mobile"
                                        }],
                                        kind: "ScalarField",
                                        name: "url",
                                        storageKey: 'url(site:"mobile")'
                                    }, {
                                        kind: "InlineFragment",
                                        selections: [c, {
                                            kind: "InlineFragment",
                                            selections: [{
                                                alias: "profile_url",
                                                args: null,
                                                kind: "ScalarField",
                                                name: "url",
                                                storageKey: null
                                            }],
                                            type: "Entity",
                                            abstractKey: "__isEntity"
                                        }],
                                        type: "Actor",
                                        abstractKey: "__isActor"
                                    }, {
                                        kind: "InlineFragment",
                                        selections: [{
                                            documentName: "CometTextWithEntitiesRelay_textWithEntities",
                                            fragmentName: "GroupsCometHashtagsStoryMessageHashtagLink_hashtag",
                                            fragmentPropName: "hashtag",
                                            kind: "ModuleImport"
                                        }],
                                        type: "GroupHashtag",
                                        abstractKey: null
                                    }, {
                                        kind: "InlineFragment",
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "category_type",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "verification_status",
                                            storageKey: null
                                        }, c, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "is_verified",
                                            storageKey: null
                                        }, {
                                            documentName: "CometTextWithEntitiesRelay_textWithEntities",
                                            fragmentName: "PagesCometPageLink_page",
                                            fragmentPropName: "page",
                                            kind: "ModuleImport"
                                        }],
                                        type: "Page",
                                        abstractKey: null
                                    }, {
                                        kind: "InlineFragment",
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "external_url",
                                            storageKey: null
                                        }],
                                        type: "ExternalUrl",
                                        abstractKey: null
                                    }, {
                                        kind: "InlineFragment",
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "time_index",
                                            storageKey: null
                                        }],
                                        type: "VideoTimeIndex",
                                        abstractKey: null
                                    }, {
                                        kind: "InlineFragment",
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: null,
                                            kind: "LinkedField",
                                            name: "web_link",
                                            plural: !1,
                                            selections: [j, l, {
                                                kind: "InlineFragment",
                                                selections: [{
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "fbclid",
                                                    storageKey: null
                                                }, {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "lynx_mode",
                                                    storageKey: null
                                                }],
                                                type: "ExternalWebLink",
                                                abstractKey: null
                                            }],
                                            storageKey: null
                                        }],
                                        type: "WebLinkable",
                                        abstractKey: "__isWebLinkable"
                                    }, {
                                        kind: "InlineFragment",
                                        selections: [v, {
                                            alias: null,
                                            args: null,
                                            concreteType: "WorkUserInfo",
                                            kind: "LinkedField",
                                            name: "work_info",
                                            plural: !1,
                                            selections: [{
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "is_active_account",
                                                storageKey: null
                                            }],
                                            storageKey: null
                                        }],
                                        type: "User",
                                        abstractKey: null
                                    }, {
                                        kind: "InlineFragment",
                                        selections: [v, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "work_official_status",
                                            storageKey: null
                                        }],
                                        type: "Group",
                                        abstractKey: null
                                    }, t],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "entity_is_weak_reference",
                                    storageKey: null
                                }, q, r],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "ColorAtRange",
                                kind: "LinkedField",
                                name: "color_ranges",
                                plural: !0,
                                selections: [q, r, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "hex_rgb_color_with_pound_key",
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: [{
                                kind: "Literal",
                                name: "height",
                                value: 56
                            }, m, {
                                kind: "Literal",
                                name: "width",
                                value: 56
                            }],
                            concreteType: "Image",
                            kind: "LinkedField",
                            name: "notif_image",
                            plural: !1,
                            selections: o,
                            storageKey: null
                        }, p, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "www_url_should_open_in_blank_target",
                            storageKey: null
                        }, {
                            alias: "creation_time",
                            args: null,
                            concreteType: "CreationTimeWithRelativeText",
                            kind: "LinkedField",
                            name: "creation_time_with_relative_text",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "timestamp",
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "GlyphIconData",
                            kind: "LinkedField",
                            name: "icon_data",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "reaction_type",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "glyph_name",
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "tracking",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "NotifNavigationEndpoint",
                            kind: "LinkedField",
                            name: "navigation_endpoint",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "User",
                                kind: "LinkedField",
                                name: "target_viewer",
                                plural: !1,
                                selections: u,
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "target_viewer_type",
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            kind: "ClientExtension",
                            selections: [{
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "is_hidden",
                                storageKey: null
                            }]
                        }],
                        storageKey: null
                    }],
                    storageKey: null
                }]
            },
            params: {
                id: "4005813339429911",
                metadata: {
                    subscriptionName: "friend_request_receive_subscribe"
                },
                name: "FriendingCometFriendRequestReceiveSubscription",
                operationKind: "subscription",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("CometGamingBadgeCountQuery.graphql", ["relay-runtime"], (function(a, b, c, d, e, f) {
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
            fragment: {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "CometGamingBadgeCountQuery",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "Viewer",
                    kind: "LinkedField",
                    name: "viewer",
                    plural: !1,
                    selections: [{
                        args: [{
                            kind: "Literal",
                            name: "bookmarkID",
                            value: "285571681929755"
                        }],
                        kind: "FragmentSpread",
                        name: "useTopTabBadgeCount_viewer"
                    }],
                    storageKey: null
                }],
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: [],
                kind: "Operation",
                name: "CometGamingBadgeCountQuery",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "Viewer",
                    kind: "LinkedField",
                    name: "viewer",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: [{
                            items: [{
                                kind: "Literal",
                                name: "bookmark_ids.0",
                                value: "285571681929755"
                            }],
                            kind: "ListValue",
                            name: "bookmark_ids"
                        }, {
                            kind: "Literal",
                            name: "environment",
                            value: "COMET"
                        }, {
                            kind: "Literal",
                            name: "folder_id",
                            value: "PRODUCT"
                        }, {
                            kind: "Literal",
                            name: "sections",
                            value: ["FACEBOOK_APP"]
                        }],
                        concreteType: "BookmarksConnection",
                        kind: "LinkedField",
                        name: "bookmarks",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "BookmarksEdge",
                            kind: "LinkedField",
                            name: "edges",
                            plural: !0,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "Bookmark",
                                kind: "LinkedField",
                                name: "node",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "bookmarked_node",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "__typename",
                                        storageKey: null
                                    }, a],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: [{
                                        kind: "Literal",
                                        name: "bookmark_render_location",
                                        value: "COMET_TOP_TAB"
                                    }],
                                    kind: "ScalarField",
                                    name: "unread_count",
                                    storageKey: 'unread_count(bookmark_render_location:"COMET_TOP_TAB")'
                                }, a],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: 'bookmarks(bookmark_ids:["285571681929755"],environment:"COMET",folder_id:"PRODUCT",sections:["FACEBOOK_APP"])'
                    }],
                    storageKey: null
                }]
            },
            params: {
                id: "4100796293327970",
                metadata: {
                    relayPreloadable: !0
                },
                name: "CometGamingBadgeCountQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    a.params.id != null && b("relay-runtime").PreloadableQueryRegistry.set(a.params.id, a);
    e.exports = a
}
), null);
__d("useGroupsCometTabBadgeCountQuery.graphql", ["relay-runtime"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "find"
        }]
          , b = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        };
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "useGroupsCometTabBadgeCountQuery",
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
                            name: "bookmarkID",
                            variableName: "find"
                        }],
                        kind: "FragmentSpread",
                        name: "useTopTabBadgeCount_viewer"
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
                name: "useGroupsCometTabBadgeCountQuery",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "Viewer",
                    kind: "LinkedField",
                    name: "viewer",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: [{
                            items: [{
                                kind: "Variable",
                                name: "bookmark_ids.0",
                                variableName: "find"
                            }],
                            kind: "ListValue",
                            name: "bookmark_ids"
                        }, {
                            kind: "Literal",
                            name: "environment",
                            value: "COMET"
                        }, {
                            kind: "Literal",
                            name: "folder_id",
                            value: "PRODUCT"
                        }, {
                            kind: "Literal",
                            name: "sections",
                            value: ["FACEBOOK_APP"]
                        }],
                        concreteType: "BookmarksConnection",
                        kind: "LinkedField",
                        name: "bookmarks",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "BookmarksEdge",
                            kind: "LinkedField",
                            name: "edges",
                            plural: !0,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "Bookmark",
                                kind: "LinkedField",
                                name: "node",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "bookmarked_node",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "__typename",
                                        storageKey: null
                                    }, b],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: [{
                                        kind: "Literal",
                                        name: "bookmark_render_location",
                                        value: "COMET_TOP_TAB"
                                    }],
                                    kind: "ScalarField",
                                    name: "unread_count",
                                    storageKey: 'unread_count(bookmark_render_location:"COMET_TOP_TAB")'
                                }, b],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    storageKey: null
                }]
            },
            params: {
                id: "3176011502485440",
                metadata: {
                    relayPreloadable: !0
                },
                name: "useGroupsCometTabBadgeCountQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    a.params.id != null && b("relay-runtime").PreloadableQueryRegistry.set(a.params.id, a);
    e.exports = a
}
), null);
__d("MWChatSolidReactionSettingSubscription.graphql", [], (function(a, b, c, d, e, f) {
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
            concreteType: "MessengerChatSolidReactionSettingSubscribeResponsePayload",
            kind: "LinkedField",
            name: "messenger_chat_solid_reaction_setting_subscribe",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "solid_reaction_enabled",
                storageKey: null
            }],
            storageKey: null
        }];
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "MWChatSolidReactionSettingSubscription",
                selections: b,
                type: "Subscription",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "MWChatSolidReactionSettingSubscription",
                selections: b
            },
            params: {
                id: "2612414222197749",
                metadata: {
                    subscriptionName: "messenger_chat_solid_reaction_setting_subscribe"
                },
                name: "MWChatSolidReactionSettingSubscription",
                operationKind: "subscription",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("useTopTabBadgeCount_viewer.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "bookmarkID"
        }],
        kind: "Fragment",
        metadata: null,
        name: "useTopTabBadgeCount_viewer",
        selections: [{
            alias: null,
            args: [{
                items: [{
                    kind: "Variable",
                    name: "bookmark_ids.0",
                    variableName: "bookmarkID"
                }],
                kind: "ListValue",
                name: "bookmark_ids"
            }, {
                kind: "Literal",
                name: "environment",
                value: "COMET"
            }, {
                kind: "Literal",
                name: "folder_id",
                value: "PRODUCT"
            }, {
                kind: "Literal",
                name: "sections",
                value: ["FACEBOOK_APP"]
            }],
            concreteType: "BookmarksConnection",
            kind: "LinkedField",
            name: "bookmarks",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                concreteType: "BookmarksEdge",
                kind: "LinkedField",
                name: "edges",
                plural: !0,
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "Bookmark",
                    kind: "LinkedField",
                    name: "node",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "bookmarked_node",
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
                        args: [{
                            kind: "Literal",
                            name: "bookmark_render_location",
                            value: "COMET_TOP_TAB"
                        }],
                        kind: "ScalarField",
                        name: "unread_count",
                        storageKey: 'unread_count(bookmark_render_location:"COMET_TOP_TAB")'
                    }],
                    storageKey: null
                }],
                storageKey: null
            }],
            storageKey: null
        }],
        type: "Viewer",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("useCometMarketplaceBadgeCountFragment_viewer.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "useCometMarketplaceBadgeCountFragment_viewer",
        selections: [{
            args: [{
                kind: "Literal",
                name: "bookmarkID",
                value: "1606854132932955"
            }],
            kind: "FragmentSpread",
            name: "useTopTabBadgeCount_viewer"
        }],
        type: "Viewer",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("useCometMarketplaceBadgeCountQuery.graphql", ["relay-runtime"], (function(a, b, c, d, e, f) {
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
            fragment: {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "useCometMarketplaceBadgeCountQuery",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "Viewer",
                    kind: "LinkedField",
                    name: "viewer",
                    plural: !1,
                    selections: [{
                        args: [{
                            kind: "Literal",
                            name: "bookmarkID",
                            value: "1606854132932955"
                        }],
                        kind: "FragmentSpread",
                        name: "useTopTabBadgeCount_viewer"
                    }],
                    storageKey: null
                }],
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: [],
                kind: "Operation",
                name: "useCometMarketplaceBadgeCountQuery",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "Viewer",
                    kind: "LinkedField",
                    name: "viewer",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: [{
                            items: [{
                                kind: "Literal",
                                name: "bookmark_ids.0",
                                value: "1606854132932955"
                            }],
                            kind: "ListValue",
                            name: "bookmark_ids"
                        }, {
                            kind: "Literal",
                            name: "environment",
                            value: "COMET"
                        }, {
                            kind: "Literal",
                            name: "folder_id",
                            value: "PRODUCT"
                        }, {
                            kind: "Literal",
                            name: "sections",
                            value: ["FACEBOOK_APP"]
                        }],
                        concreteType: "BookmarksConnection",
                        kind: "LinkedField",
                        name: "bookmarks",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "BookmarksEdge",
                            kind: "LinkedField",
                            name: "edges",
                            plural: !0,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "Bookmark",
                                kind: "LinkedField",
                                name: "node",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "bookmarked_node",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "__typename",
                                        storageKey: null
                                    }, a],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: [{
                                        kind: "Literal",
                                        name: "bookmark_render_location",
                                        value: "COMET_TOP_TAB"
                                    }],
                                    kind: "ScalarField",
                                    name: "unread_count",
                                    storageKey: 'unread_count(bookmark_render_location:"COMET_TOP_TAB")'
                                }, a],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: 'bookmarks(bookmark_ids:["1606854132932955"],environment:"COMET",folder_id:"PRODUCT",sections:["FACEBOOK_APP"])'
                    }],
                    storageKey: null
                }]
            },
            params: {
                id: "4089516081122659",
                metadata: {
                    relayPreloadable: !0
                },
                name: "useCometMarketplaceBadgeCountQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    a.params.id != null && b("relay-runtime").PreloadableQueryRegistry.set(a.params.id, a);
    e.exports = a
}
), null);
__d("CometNotificationsBadgeCountFragment_viewer.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [{
            kind: "RootArgument",
            name: "environment"
        }],
        kind: "Fragment",
        metadata: null,
        name: "CometNotificationsBadgeCountFragment_viewer",
        selections: [{
            alias: null,
            args: [{
                kind: "Variable",
                name: "environment",
                variableName: "environment"
            }],
            kind: "ScalarField",
            name: "notifications_unseen_count",
            storageKey: null
        }],
        type: "Viewer",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("CometNotificationsBadgeCountQuery.graphql", ["relay-runtime"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "environment"
        }];
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "CometNotificationsBadgeCountQuery",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "Viewer",
                    kind: "LinkedField",
                    name: "viewer",
                    plural: !1,
                    selections: [{
                        args: null,
                        kind: "FragmentSpread",
                        name: "CometNotificationsBadgeCountFragment_viewer"
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
                name: "CometNotificationsBadgeCountQuery",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "Viewer",
                    kind: "LinkedField",
                    name: "viewer",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: [{
                            kind: "Variable",
                            name: "environment",
                            variableName: "environment"
                        }],
                        kind: "ScalarField",
                        name: "notifications_unseen_count",
                        storageKey: null
                    }],
                    storageKey: null
                }]
            },
            params: {
                id: "3410744965662225",
                metadata: {
                    relayPreloadable: !0
                },
                name: "CometNotificationsBadgeCountQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    a.params.id != null && b("relay-runtime").PreloadableQueryRegistry.set(a.params.id, a);
    e.exports = a
}
), null);
__d("useCometPagesBadgeCountQuery.graphql", ["relay-runtime"], (function(a, b, c, d, e, f) {
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
            fragment: {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "useCometPagesBadgeCountQuery",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "Viewer",
                    kind: "LinkedField",
                    name: "viewer",
                    plural: !1,
                    selections: [{
                        args: [{
                            kind: "Literal",
                            name: "bookmarkID",
                            value: "250100865708545"
                        }],
                        kind: "FragmentSpread",
                        name: "useTopTabBadgeCount_viewer"
                    }],
                    storageKey: null
                }],
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: [],
                kind: "Operation",
                name: "useCometPagesBadgeCountQuery",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "Viewer",
                    kind: "LinkedField",
                    name: "viewer",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: [{
                            items: [{
                                kind: "Literal",
                                name: "bookmark_ids.0",
                                value: "250100865708545"
                            }],
                            kind: "ListValue",
                            name: "bookmark_ids"
                        }, {
                            kind: "Literal",
                            name: "environment",
                            value: "COMET"
                        }, {
                            kind: "Literal",
                            name: "folder_id",
                            value: "PRODUCT"
                        }, {
                            kind: "Literal",
                            name: "sections",
                            value: ["FACEBOOK_APP"]
                        }],
                        concreteType: "BookmarksConnection",
                        kind: "LinkedField",
                        name: "bookmarks",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "BookmarksEdge",
                            kind: "LinkedField",
                            name: "edges",
                            plural: !0,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "Bookmark",
                                kind: "LinkedField",
                                name: "node",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "bookmarked_node",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "__typename",
                                        storageKey: null
                                    }, a],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: [{
                                        kind: "Literal",
                                        name: "bookmark_render_location",
                                        value: "COMET_TOP_TAB"
                                    }],
                                    kind: "ScalarField",
                                    name: "unread_count",
                                    storageKey: 'unread_count(bookmark_render_location:"COMET_TOP_TAB")'
                                }, a],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: 'bookmarks(bookmark_ids:["250100865708545"],environment:"COMET",folder_id:"PRODUCT",sections:["FACEBOOK_APP"])'
                    }],
                    storageKey: null
                }]
            },
            params: {
                id: "3125837897504293",
                metadata: {
                    relayPreloadable: !0
                },
                name: "useCometPagesBadgeCountQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    a.params.id != null && b("relay-runtime").PreloadableQueryRegistry.set(a.params.id, a);
    e.exports = a
}
), null);
__d("MWChatBlockListQuery.graphql", ["relay-runtime"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            alias: null,
            args: null,
            concreteType: "Viewer",
            kind: "LinkedField",
            name: "viewer",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "blockee_ids",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "message_blockee_ids",
                storageKey: null
            }],
            storageKey: null
        }];
        return {
            fragment: {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "MWChatBlockListQuery",
                selections: a,
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: [],
                kind: "Operation",
                name: "MWChatBlockListQuery",
                selections: a
            },
            params: {
                id: "2502740699819425",
                metadata: {
                    relayPreloadable: !0
                },
                name: "MWChatBlockListQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    a.params.id != null && b("relay-runtime").PreloadableQueryRegistry.set(a.params.id, a);
    e.exports = a
}
), null);
__d("MWChatHeadContactsQuery.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "numContactsToFetch"
        }]
          , b = [{
            kind: "Variable",
            name: "count",
            variableName: "numContactsToFetch"
        }]
          , c = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        }
          , d = {
            kind: "InlineFragment",
            selections: [{
                kind: "ClientExtension",
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "availability",
                    storageKey: null
                }]
            }],
            type: "User",
            abstractKey: null
        };
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "MWChatHeadContactsQuery",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "Viewer",
                    kind: "LinkedField",
                    name: "viewer",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: b,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "chat_sidebar_contacts",
                        plural: !0,
                        selections: [c, d],
                        storageKey: null
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
                name: "MWChatHeadContactsQuery",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "Viewer",
                    kind: "LinkedField",
                    name: "viewer",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: b,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "chat_sidebar_contacts",
                        plural: !0,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "__typename",
                            storageKey: null
                        }, c, {
                            kind: "TypeDiscriminator",
                            abstractKey: "__isProfile"
                        }, d],
                        storageKey: null
                    }],
                    storageKey: null
                }]
            },
            params: {
                id: "2838671786243895",
                metadata: {},
                name: "MWChatHeadContactsQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("MWChatBadgeCountQuery.graphql", ["relay-runtime"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            alias: null,
            args: null,
            concreteType: "Viewer",
            kind: "LinkedField",
            name: "viewer",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                concreteType: "ViewerMessageThreadsConnection",
                kind: "LinkedField",
                name: "message_threads",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "unseen_count",
                    storageKey: null
                }],
                storageKey: null
            }],
            storageKey: null
        }];
        return {
            fragment: {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "MWChatBadgeCountQuery",
                selections: a,
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: [],
                kind: "Operation",
                name: "MWChatBadgeCountQuery",
                selections: a
            },
            params: {
                id: "2624866337557498",
                metadata: {
                    relayPreloadable: !0
                },
                name: "MWChatBadgeCountQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    a.params.id != null && b("relay-runtime").PreloadableQueryRegistry.set(a.params.id, a);
    e.exports = a
}
), null);
__d("MWChatSyncEnvironmentQuery.graphql", ["relay-runtime"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            alias: null,
            args: null,
            concreteType: "Viewer",
            kind: "LinkedField",
            name: "viewer",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                concreteType: "MessengerWebMQTTConnectionParams",
                kind: "LinkedField",
                name: "messenger_web_mqtt_connection_params",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "app_id",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "endpoint",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "iris_seq_id",
                    storageKey: null
                }],
                storageKey: null
            }],
            storageKey: null
        }];
        return {
            fragment: {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "MWChatSyncEnvironmentQuery",
                selections: a,
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: [],
                kind: "Operation",
                name: "MWChatSyncEnvironmentQuery",
                selections: a
            },
            params: {
                id: "2450076258362322",
                metadata: {
                    relayPreloadable: !0
                },
                name: "MWChatSyncEnvironmentQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    a.params.id != null && b("relay-runtime").PreloadableQueryRegistry.set(a.params.id, a);
    e.exports = a
}
), null);
__d("CometSearchBootstrapKeywordsDataSourceQuery.graphql", ["relay-runtime"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "first"
        }]
          , b = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "link_url",
            storageKey: null
        }
          , c = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "snippet",
            storageKey: null
        }
          , d = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "title",
            storageKey: null
        }
          , e = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "text",
            storageKey: null
        };
        c = [{
            alias: null,
            args: null,
            concreteType: "Viewer",
            kind: "LinkedField",
            name: "viewer",
            plural: !1,
            selections: [{
                alias: null,
                args: [{
                    kind: "Variable",
                    name: "first",
                    variableName: "first"
                }],
                concreteType: "BootstrapKeywordsConnection",
                kind: "LinkedField",
                name: "bootstrap_keywords",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "BootstrapKeywordsEdge",
                    kind: "LinkedField",
                    name: "edges",
                    plural: !0,
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: "BootstrapResult",
                        kind: "LinkedField",
                        name: "node",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "keyword_text",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "item_logging_id",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "item_logging_info",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "StructuredTypeaheadInfo",
                            kind: "LinkedField",
                            name: "sts_info",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "STSDirectNavResult",
                                kind: "LinkedField",
                                name: "direct_nav_result",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "img_url",
                                    storageKey: null
                                }, b, c, d],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "STSHighConfidenceResult",
                                kind: "LinkedField",
                                name: "high_confidence_result",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "hcm_id",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "picture_url",
                                    storageKey: null
                                }, c, e],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "STSDisambiguationResult",
                                kind: "LinkedField",
                                name: "disambiguation_result",
                                plural: !1,
                                selections: [d, {
                                    alias: null,
                                    args: null,
                                    concreteType: "STSDisambiguationInfo",
                                    kind: "LinkedField",
                                    name: "disambiguation_info_list",
                                    plural: !0,
                                    selections: [e, b],
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
            storageKey: null
        }];
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "CometSearchBootstrapKeywordsDataSourceQuery",
                selections: c,
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "CometSearchBootstrapKeywordsDataSourceQuery",
                selections: c
            },
            params: {
                id: "3612299668800665",
                metadata: {
                    relayPreloadable: !0
                },
                name: "CometSearchBootstrapKeywordsDataSourceQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    a.params.id != null && b("relay-runtime").PreloadableQueryRegistry.set(a.params.id, a);
    e.exports = a
}
), null);
__d("useIsCurrentRouteMediaViewer", ["useCometRouterState"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a() {
        var a = b("useCometRouterState")();
        if (a == null)
            return !1;
        var c = a.main;
        a = a.pushViewStack;
        a = a && a.length > 0 ? a[a.length - 1] : c;
        c = a.route;
        return c.routeType === "media_viewer"
    }
}
), null);
__d("CometTopNavTabBadge.react", ["CometBadge.react", "CometNumberedBadge.react", "QE2Logger", "React", "qex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React")
      , h = (c = b("qex")._("1493007")) != null ? c : "red_numbered_badge"
      , i = function() {
        switch (h) {
        case "blue_numbered_badge":
        case "blue_badge":
            return "blue";
        default:
            return "red"
        }
    }();
    function a(a) {
        var c = a.isBadgeHidden
          , d = a.isTab
          , e = a.overflow
          , f = a.setBadgeCount
          , j = a.testid
          , k = a.value;
        j = babelHelpers.objectWithoutPropertiesLoose(a, ["isBadgeHidden", "isTab", "overflow", "setBadgeCount", "testid", "value"]);
        g.useEffect(function() {
            f && f(k)
        }, [k, f]);
        a = (h === "blue_badge" || h === "red_bottom_badge") && d === !0;
        if (c === !0 || k === 0)
            return null;
        if (d === !0) {
            b("QE2Logger").logExposureForUser("comet_tab_badge_design_experiment");
            if (h === "no_badge")
                return null
        }
        c = d === !0 ? i : void 0;
        return a ? g.jsx(b("CometBadge.react"), babelHelpers["extends"]({}, j, {
            color: c,
            size: 6
        })) : g.jsx(b("CometNumberedBadge.react"), babelHelpers["extends"]({}, j, {
            color: c,
            overflow: e,
            testid: void 0,
            value: k
        }))
    }
}
), null);
__d("FriendingCometFriendRequestConfirmSubscription", ["CometRelay", "CurrentUser", "RelayRTIGraphQLSubscriptionTopicProvider", "WebPixelRatio", "relay-runtime", "requireCond", "cr:1723177", "FriendingCometFriendRequestConfirmSubscription.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    f.subscribe = a;
    var g, h = g !== void 0 ? g : g = b("FriendingCometFriendRequestConfirmSubscription.graphql"), i = {};
    function a(a, c, d, e, f, g) {
        var j = function(a) {
            var c = a.getRootField("friend_request_confirm_subscribe");
            if (c == null)
                return;
            var d = a.get(b("relay-runtime").VIEWER_ID);
            if (d == null)
                return;
            var e = c.getLinkedRecord("new_friend");
            if (e == null)
                return;
            c = c.getValue("time_confirmed");
            d = b("relay-runtime").ConnectionHandler.getConnection(d, "FriendingCometAcceptedFriendRequestsPanel_friend_confirmed_notifications");
            if (d == null)
                return;
            a = b("relay-runtime").ConnectionHandler.createEdge(a, d, e, "FriendConfirmedNotificationsEdge");
            a.setValue(c, "time_sent");
            b("relay-runtime").ConnectionHandler.insertEdgeBefore(d, a);
            e = parseInt(d.getValue("count"), 0);
            d.setValue(e + 1, "count")
        }
          , k = b("relay-runtime").getRequest(h);
        k = k.params.id;
        k !== null && !i[k] && (b("RelayRTIGraphQLSubscriptionTopicProvider").registerProvider(k, function() {
            return "gqls/friend_request_confirm_subscribe/requester_id_" + b("CurrentUser").getID()
        }),
        i[k] = !0);
        k = function(a) {
            a != null && b("cr:1723177") != null && e !== !0 && b("cr:1723177").pushFriendingConfirmedCometToast(a, d)
        }
        ;
        return b("CometRelay").requestSubscription(c, {
            onCompleted: f,
            onError: g,
            onNext: k,
            subscription: h,
            updater: j,
            variables: {
                input: {
                    requester_id: a
                },
                scale: b("WebPixelRatio").get()
            }
        })
    }
}
), null);
__d("FriendingCometFriendRequestReceiveSubscription", ["CometRelay", "CurrentUser", "RelayRTIGraphQLSubscriptionTopicProvider", "WebPixelRatio", "relay-runtime", "requireCond", "cr:1723177", "FriendingCometFriendRequestReceiveSubscription.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    f.subscribe = a;
    var g, h = g !== void 0 ? g : g = b("FriendingCometFriendRequestReceiveSubscription.graphql"), i = {};
    function a(a, c, d, e, f, g) {
        var j = function(a) {
            var c = a.getRootField("friend_request_receive_subscribe");
            if (c == null)
                return;
            var d = a.get(b("relay-runtime").VIEWER_ID);
            if (d == null)
                return;
            var e = c.getLinkedRecord("sender");
            if (e == null)
                return;
            c = c.getValue("time_received");
            d = b("relay-runtime").ConnectionHandler.getConnection(d, "FriendingCometFriendRequestsPanel_friending_possibilities", {
                friending_channel: "REQUESTS_JEWEL"
            });
            if (d == null)
                return;
            var f = d.getLinkedRecords("edges");
            if (f != null) {
                f = f == null ? void 0 : f.filter(function(a) {
                    a = a == null ? void 0 : a.getLinkedRecord("node");
                    return (a == null ? void 0 : a.getValue("id")) !== e.getValue("id")
                });
                d.setLinkedRecords(f, "edges");
                d.setValue(f.length, "count")
            }
            f = b("relay-runtime").ConnectionHandler.createEdge(a, d, e, "FriendingPossibilitiesEdge");
            f.setValue(c, "time");
            f.setValue(!1, "is_seen");
            b("relay-runtime").ConnectionHandler.insertEdgeBefore(d, f);
            a = parseInt(d.getValue("count"), 10);
            d.setValue(a + 1, "count")
        }
          , k = function(a) {
            a != null && b("cr:1723177") != null && e !== !0 && b("cr:1723177").pushFriendingCometToast(a, d)
        }
          , l = b("relay-runtime").getRequest(h);
        l = l.params.id;
        l !== null && !i[l] && (b("RelayRTIGraphQLSubscriptionTopicProvider").registerProvider(l, function() {
            return "gqls/friend_request_receive_subscribe/receiver_id_" + b("CurrentUser").getID()
        }),
        i[l] = !0);
        return b("CometRelay").requestSubscription(c, {
            onCompleted: f,
            onError: g,
            onNext: k,
            subscription: h,
            updater: j,
            variables: {
                input: {
                    receiver_id: a
                },
                scale: b("WebPixelRatio").get()
            }
        })
    }
}
), null);
__d("FriendingCometFriendRequestSubscriptionHelper", ["FriendingCometFriendRequestConfirmSubscription", "FriendingCometFriendRequestReceiveSubscription"], (function(a, b, c, d, e, f) {
    "use strict";
    f.setupFriendingSubscription = a;
    function a(a, c, d, e) {
        var f = b("FriendingCometFriendRequestReceiveSubscription").subscribe(a, c, d, e)
          , g = b("FriendingCometFriendRequestConfirmSubscription").subscribe(a, c, d, e);
        return function() {
            f.dispose(),
            g.dispose()
        }
    }
}
), null);
__d("useTopTabBadgeCount", ["CometRelay", "useTopTabBadgeCount_viewer.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g;
    function a(a) {
        a = b("CometRelay").useFragment(g !== void 0 ? g : g = b("useTopTabBadgeCount_viewer.graphql"), a);
        a = (a = a == null ? void 0 : (a = a.bookmarks) == null ? void 0 : (a = a.edges[0]) == null ? void 0 : (a = a.node) == null ? void 0 : a.unread_count) != null ? a : 0;
        return a
    }
}
), null);
__d("useFriendingCometFriendRequestBadgeCount", ["CometRelay", "FriendingCometFriendRequestSubscriptionHelper", "React", "useHideNotificationsToasts", "useToasterStateManager", "useTopTabBadgeCount", "useFriendingCometFriendRequestBadgeCountQuery.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React");
    function a() {
        var a, c = b("CometRelay").useLazyLoadQuery(g !== void 0 ? g : g = b("useFriendingCometFriendRequestBadgeCountQuery.graphql"), {}), d = (a = (a = c.viewer) == null ? void 0 : (a = a.actor) == null ? void 0 : a.id) != null ? a : "", e = b("CometRelay").useRelayEnvironment(), f = b("useToasterStateManager")(), i = b("useHideNotificationsToasts")();
        h.useEffect(function() {
            return b("FriendingCometFriendRequestSubscriptionHelper").setupFriendingSubscription(d, e, f, i)
        }, [d, e, i, f]);
        return b("useTopTabBadgeCount")(c == null ? void 0 : c.viewer)
    }
}
), null);
__d("FriendingCometFriendRequestBadgeCount.react", ["CometPlaceholder.react", "CometTopNavTabBadge.react", "React", "useFriendingCometFriendRequestBadgeCount"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function h(a) {
        var c = b("useFriendingCometFriendRequestBadgeCount")();
        return g.jsx(b("CometTopNavTabBadge.react"), babelHelpers["extends"]({}, a, {
            testid: void 0,
            value: c
        }))
    }
    function a(a) {
        return g.jsx(b("CometPlaceholder.react"), {
            fallback: null,
            children: g.jsx(h, babelHelpers["extends"]({}, a))
        })
    }
}
), null);
__d("CometGamingBadgeCount.react", ["CometPlaceholder.react", "CometRelay", "CometTopNavTabBadge.react", "React", "useTopTabBadgeCount", "CometGamingBadgeCountQuery.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React");
    function i(a) {
        var c = b("CometRelay").useLazyLoadQuery(g !== void 0 ? g : g = b("CometGamingBadgeCountQuery.graphql"), {});
        c = b("useTopTabBadgeCount")(c == null ? void 0 : c.viewer);
        return h.jsx(b("CometTopNavTabBadge.react"), babelHelpers["extends"]({}, a, {
            value: c
        }))
    }
    function a(a) {
        return h.jsx(b("CometPlaceholder.react"), {
            fallback: null,
            children: h.jsx(i, babelHelpers["extends"]({}, a))
        })
    }
}
), null);
__d("useGroupsCometTabBadgeCount", ["CometHomeBookmarkHelper", "CometRelay", "useTopTabBadgeCount", "useGroupsCometTabBadgeCountQuery.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("CometHomeBookmarkHelper").isMobileBookmarkRankingEnabled() ? "2361831622" : "1434659290104689";
    function a() {
        var a = b("CometRelay").useLazyLoadQuery(g !== void 0 ? g : g = b("useGroupsCometTabBadgeCountQuery.graphql"), {
            find: h
        });
        return b("useTopTabBadgeCount")(a == null ? void 0 : a.viewer)
    }
    c = a;
    d = c;
    e.exports = d
}
), null);
__d("GroupsCometTabBadgeCount.react", ["CometPlaceholder.react", "CometTopNavTabBadge.react", "React", "useGroupsCometTabBadgeCount"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = b("useGroupsCometTabBadgeCount")();
        return g.jsx(b("CometPlaceholder.react"), {
            fallback: g.jsx("span", {}),
            children: g.jsx(b("CometTopNavTabBadge.react"), babelHelpers["extends"]({}, a, {
                testid: void 0,
                value: c
            }))
        })
    }
}
), null);
__d("MWChatSolidReactionSettingSubscription", ["CometRelay", "CurrentUser", "RelayRTIGraphQLSubscriptionTopicProvider", "relay-runtime", "MWChatSolidReactionSettingSubscription.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    f.subscribe = a;
    var g, h = g !== void 0 ? g : g = b("MWChatSolidReactionSettingSubscription.graphql");
    c = b("relay-runtime").getRequest(h);
    d = c.params.id;
    d != null && b("RelayRTIGraphQLSubscriptionTopicProvider").registerProvider(d, function() {
        return "gqls/messenger_chat_solid_reaction_setting_subscribe/viewer_id_" + b("CurrentUser").getID()
    });
    function a(a, c) {
        return b("CometRelay").requestSubscription(a, {
            onNext: c,
            subscription: h,
            variables: {
                input: {}
            }
        })
    }
}
), null);
__d("useCometMarketplaceBadgeCount", ["CometRelay", "gkx", "useTopTabBadgeCount", "useCometMarketplaceBadgeCountFragment_viewer.graphql", "useCometMarketplaceBadgeCountQuery.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h;
    g !== void 0 ? g : g = b("useCometMarketplaceBadgeCountFragment_viewer.graphql");
    var i = h !== void 0 ? h : h = b("useCometMarketplaceBadgeCountQuery.graphql");
    function a() {
        var a = b("CometRelay").useLazyLoadQuery(i, {});
        return b("useTopTabBadgeCount")(a == null ? void 0 : a.viewer)
    }
    c = b("gkx")("1273808") ? a : function() {
        return 0
    }
    ;
    e.exports = c
}
), null);
__d("CometMarketplaceBadgeCount.react", ["CometPlaceholder.react", "CometTopNavTabBadge.react", "React", "useCometMarketplaceBadgeCount"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = b("useCometMarketplaceBadgeCount")();
        return g.jsx(b("CometPlaceholder.react"), {
            fallback: g.jsx("span", {}),
            children: g.jsx(b("CometTopNavTabBadge.react"), babelHelpers["extends"]({}, a, {
                value: c
            }))
        })
    }
}
), null);
__d("CometNotificationsBadgeCount.react", ["CometNumberedBadge.react", "CometPlaceholder.react", "CometRelay", "React", "setupNotificationsSubscription", "unrecoverableViolation", "useCometDisplayTimingTracker", "CometNotificationsBadgeCountQuery.graphql", "CometNotificationsBadgeCountFragment_viewer.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h, i = b("React");
    function a(a) {
        var c = b("CometRelay").useLazyLoadQuery(g !== void 0 ? g : g = b("CometNotificationsBadgeCountQuery.graphql"), {
            environment: "MAIN_SURFACE"
        });
        c = c.viewer;
        if (c == null)
            throw b("unrecoverableViolation")("The viewer recieving these notifications cannot be null", "comet_feed");
        c = b("CometRelay").useFragment(h !== void 0 ? h : h = b("CometNotificationsBadgeCountFragment_viewer.graphql"), c);
        var d = (c = c == null ? void 0 : c.notifications_unseen_count) != null ? c : 0;
        c = a.isBadgeHidden;
        var e = a.setBadgeCount
          , f = b("CometRelay").useRelayEnvironment();
        i.useEffect(function() {
            var a = b("setupNotificationsSubscription")(f);
            return function() {
                return a.dispose()
            }
        }, [f]);
        i.useEffect(function() {
            e && e(d)
        }, [d, e]);
        a = b("useCometDisplayTimingTracker")("NotificationsBadge", "NotificationsBadge");
        return i.jsx(b("CometPlaceholder.react"), {
            fallback: i.jsx("span", {}),
            children: c !== !0 && d > 0 ? i.jsx(b("CometNumberedBadge.react"), {
                ref: a,
                testid: void 0,
                value: d
            }) : null
        })
    }
}
), null);
__d("useCometPagesBadgeCount", ["CometRelay", "useTopTabBadgeCount", "useCometPagesBadgeCountQuery.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;
    function a() {
        var a = b("CometRelay").useLazyLoadQuery(g !== void 0 ? g : g = b("useCometPagesBadgeCountQuery.graphql"), {});
        return b("useTopTabBadgeCount")(a == null ? void 0 : a.viewer)
    }
    c = a;
    e.exports = c
}
), null);
__d("CometPagesBadgeCount.react", ["CometPlaceholder.react", "CometTopNavTabBadge.react", "React", "useCometPagesBadgeCount"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function h(a) {
        var c = b("useCometPagesBadgeCount")();
        return g.jsx(b("CometTopNavTabBadge.react"), babelHelpers["extends"]({}, a, {
            value: c
        }))
    }
    function a(a) {
        return g.jsx(b("CometPlaceholder.react"), {
            fallback: null,
            children: g.jsx(h, babelHelpers["extends"]({}, a))
        })
    }
}
), null);
__d("MWChatBlockList", ["Actor", "CometRelay", "MercuryIDs", "React", "recoverableViolation", "requireDeferred", "MWChatBlockListQuery.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    f.useHook = a;
    var g, h = b("React"), i = b("requireDeferred")("MercuryDispatcher");
    function a() {
        var a = b("Actor").useActor()
          , c = a[0]
          , d = b("CometRelay").useLazyLoadQuery(g !== void 0 ? g : g = b("MWChatBlockListQuery.graphql"), {});
        h.useEffect(function() {
            if (d.viewer) {
                var a, e = new Set((a = d.viewer) == null ? void 0 : a.message_blockee_ids);
                d.viewer.blockee_ids.forEach(function(a) {
                    return e.add(a)
                });
                var f = Array.from(e);
                i.onReady(function(a) {
                    a.getForFBID(c).handleUpdate({
                        from_client: !0,
                        message_blocked_ids: f.map(b("MercuryIDs").getParticipantIDFromUserID),
                        message_unblocked_ids: []
                    })
                })
            } else
                b("recoverableViolation")("Failed to load list of block users", "messenger_comet")
        }, [d, c])
    }
}
), null);
__d("MWChatHeadError.bs", ["ix", "fbt", "React", "fbicon", "stylex", "TetraIcon.react", "CometTooltip.react", "CometPressable.react"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React")
      , j = {
        compose: {
            alignItems: "bp9cbjyn",
            backgroundColor: "nred35xi",
            borderTopStartRadius: "s45kfl79",
            borderTopEndRadius: "emlxlaya",
            borderBottomEndRadius: "bkmhp75w",
            borderBottomStartRadius: "spb7xbtv",
            display: "j83agx80",
            height: "m7zwrmfr",
            justifyContent: "taijpn5t",
            position: "l9j0dhe7",
            width: "tmrshh9y"
        },
        dropShadow: {
            boxShadow: "akv41dx8",
            ":hover": {
                boxShadow: "eb3gnj61"
            }
        }
    };
    function a(a) {
        return i.jsx(b("CometTooltip.react"), {
            tooltip: h._("\u0110\u00e3 x\u1ea3y ra l\u1ed7i khi t\u1ea3i \u0111o\u1ea1n chat"),
            align: "end",
            position: "above",
            children: i.jsx(b("CometPressable.react"), {
                "aria-label": h._("\u0110\u00e3 x\u1ea3y ra l\u1ed7i khi t\u1ea3i \u0111o\u1ea1n chat"),
                disabled: !0,
                display: "inline",
                xstyle: function(a) {
                    return [j.compose, j.dropShadow]
                },
                children: i.jsx(b("TetraIcon.react"), {
                    icon: b("fbicon")._(g("502063"), 24)
                })
            })
        })
    }
    c = a;
    f.styles = j;
    f.make = c
}
), null);
__d("MWChatDisabled.bs", ["React", "stylex", "MWChatHeadError.bs", "useShouldShowMessagingEntrypointInCometRoot"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React"), i = {
        dockedToBottomRight: {
            bottom: "lfi1tu6t",
            end: "cypi58rs",
            position: "pmk7jnqg"
        },
        root: {
            position: "poy2od1o",
            bottom: "i09qtzwb",
            end: "n7fi1qx3"
        }
    };
    function a(a) {
        a = b("useShouldShowMessagingEntrypointInCometRoot")("CHAT");
        if (a)
            return h.jsx("div", {
                children: h.jsx("div", {
                    children: h.jsx(b("MWChatHeadError.bs").make, {}),
                    className: (g || (g = b("stylex")))(i.dockedToBottomRight)
                }),
                className: g(i.root)
            });
        else
            return null
    }
    c = a;
    f.styles = i;
    f.make = c
}
), null);
__d("MWChatDisabled.re", ["MWChatDisabled.bs"], (function(a, b, c, d, e, f) {
    (function(a) {
        return null
    }
    );
    a = b("MWChatDisabled.bs").make;
    f.make = a
}
), null);
__d("CometContextualLayerAnchorRoot.re", ["CometContextualLayerAnchorRoot.react"], (function(a, b, c, d, e, f) {
    a = b("CometContextualLayerAnchorRoot.react");
    f.makeTypeChecked = a;
    c = a;
    f.make = c
}
), null);
__d("IsMWIsOnPushView", ["CometRouterPushViewStackContext", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a() {
        var a = g.useContext(b("CometRouterPushViewStackContext"));
        a = a != null && a[a.length - 1] != null;
        return a
    }
}
), null);
__d("MWChatHeadComposeIcon.bs", ["ix", "React", "fbicon", "stylex", "TetraIcon.react", "MWChatHeadsShared.bs", "CometPressable.react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = b("React");
    function a(a) {
        var c = a.label
          , d = a.onHoverIn
          , e = a.onHoverOut
          , f = a.onPress;
        a = a.xstyle;
        return i.jsx(b("CometPressable.react"), {
            "aria-label": c,
            testid: "chat_compose_button",
            onHoverIn: d,
            onHoverOut: e,
            onPress: f,
            overlayOffset: 0,
            overlayRadius: "50%",
            xstyle: a,
            children: i.jsx("div", {
                children: i.jsx(b("TetraIcon.react"), {
                    icon: b("fbicon")._(g("507172"), 20)
                }),
                className: (h || (h = b("stylex")))(b("MWChatHeadsShared.bs").styles.chatHeadTarget)
            })
        })
    }
    c = b("MWChatHeadsShared.bs").styles;
    d = a;
    f.headStyles = c;
    f.make = d
}
), null);
__d("MWChatHeadContacts.react", ["ix", "fbt", "CometHomeContactsConfig", "CometPlaceholder.react", "CometPressable.react", "CometRelay", "CometTooltip.react", "MWChatActivePill.react", "MWChatFilterContacts", "React", "TetraIcon.react", "fbicon", "stylex", "MWChatHeadContactsQuery.graphql"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i, j, k = b("React"), l = {
        badgeContainer: {
            bottom: "d2iitwg3",
            position: "pmk7jnqg"
        },
        badgeContainerDefault: {
            end: "pphx12oy"
        },
        badgeContainerSingleDigit: {
            end: "oqnctjl6"
        },
        chatHeadTarget: {
            alignItems: "bp9cbjyn",
            backgroundColor: "g5ia77u1",
            display: "j83agx80",
            height: "j0lfo8lj",
            justifyContent: "taijpn5t",
            marginStart: "ocgrx2df",
            marginTop: "irj2b8pg",
            width: "etr7akla"
        },
        pressable: {
            backgroundColor: "ovq5dppa"
        }
    };
    function a(a) {
        var c = a.onHoverChange
          , d = a.onPress
          , e = a.xstyle;
        a = b("CometRelay").useLazyLoadQuery(i !== void 0 ? i : i = b("MWChatHeadContactsQuery.graphql"), {
            numContactsToFetch: b("CometHomeContactsConfig").numContactsToFetch
        });
        a = a.viewer;
        var f = a ? b("MWChatFilterContacts").filter(a.chat_sidebar_contacts).activeCount : 0
          , m = String(f).length;
        a = h._("Ng\u01b0\u1eddi li\u00ean h\u1ec7 ho\u1ea1t \u0111\u1ed9ng ({number_of_contacts})", [h._param("number_of_contacts", f)]);
        return k.jsx(b("CometTooltip.react"), {
            align: "middle",
            position: "start",
            tooltip: a,
            children: k.jsx(b("CometPressable.react"), {
                "aria-label": a,
                onHoverChange: c,
                onPress: d,
                overlayOffset: 0,
                overlayRadius: "50%",
                testid: void 0,
                xstyle: function(a) {
                    return [e(a), l.pressable]
                },
                children: function(a) {
                    var c = a.overlay;
                    a = a.pressed;
                    return k.jsxs("div", {
                        className: (j || (j = b("stylex")))(l.chatHeadTarget),
                        children: [k.jsx(b("TetraIcon.react"), {
                            icon: b("fbicon")._(g("487559"), 24)
                        }), k.jsx(b("CometPlaceholder.react"), {
                            fallback: null,
                            children: k.jsx("div", {
                                className: j(l.badgeContainer, m === 1 ? l.badgeContainerSingleDigit : l.badgeContainerDefault),
                                children: k.jsx(b("MWChatActivePill.react"), {
                                    border: "secondary-button-background-floating",
                                    pressed: a,
                                    children: f
                                })
                            })
                        }), c]
                    })
                }
            })
        })
    }
}
), null);
__d("MWChatTabContainerNewPreload.bs", ["useMWChatTabContainerNewPreload"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a) {
        return b("useMWChatTabContainerNewPreload")()
    }
    f.useHook = a
}
), null);
__d("MWChatMultitabHeadsCompose_DEPRECATED.bs", ["fbt", "bs_curry", "React", "stylex", "MWChatOpenNewTab.bs", "MWChatCloseNewTab.bs", "CometTooltip.react", "useMWIsCometHomePage", "MWChatHeadComposeIcon.bs", "MessengerWebEntryPoint", "MWChatMultitabStateHook.bs", "MWChatHeadContacts.react", "MWChatTabContainerNewPreload.bs"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = {
        compose: {
            backgroundColor: "ovq5dppa",
            borderTopStartRadius: "s45kfl79",
            borderTopEndRadius: "emlxlaya",
            borderBottomEndRadius: "bkmhp75w",
            borderBottomStartRadius: "spb7xbtv",
            display: "q9uorilb",
            height: "m7zwrmfr",
            position: "l9j0dhe7",
            width: "tmrshh9y"
        },
        dropShadow: {
            boxShadow: "akv41dx8",
            ":hover": {
                boxShadow: "eb3gnj61"
            }
        }
    };
    function a(a) {
        var c = a.setIsSomeHeadHovered
          , d = b("MWChatOpenNewTab.bs").useHook(b("MessengerWebEntryPoint").NEW_MESSAGE_BUTTON)
          , e = b("MWChatCloseNewTab.bs").useHook(b("MessengerWebEntryPoint").NEW_MESSAGE_BUTTON);
        a = b("MWChatMultitabStateHook.bs").useHook_DEPRECATED(0);
        var f = a.openTabsState.map(function(a) {
            return a.threadID
        });
        a = a.openTabsState;
        var j = a.length !== 0 ? a.some(function(a) {
            return a.isSearchView
        }) : !1
          , k = f.length !== 0 ? f.some(function(a) {
            if (a)
                return !1;
            else
                return !0
        }) : !1;
        a = b("MWChatTabContainerNewPreload.bs").useHook(0);
        var l = a[1]
          , m = a[0];
        f = h.useCallback(function(a) {
            if (k && !j)
                return b("bs_curry")._1(e, 0);
            else
                return b("bs_curry")._1(d, void 0)
        }, [d, e, k, j]);
        a = function(a) {
            return [i.compose, i.dropShadow]
        }
        ;
        var n = b("useMWIsCometHomePage")();
        if (n) {
            n = g._("Tin nh\u1eafn m\u1edbi");
            return h.jsx(b("CometTooltip.react"), {
                tooltip: n.toString(),
                align: "middle",
                position: "start",
                children: h.jsx(b("MWChatHeadComposeIcon.bs").make, {
                    label: n,
                    onHoverIn: function(a) {
                        b("bs_curry")._1(m, 0);
                        return b("bs_curry")._1(c, function(a) {
                            return !0
                        })
                    },
                    onHoverOut: function(a) {
                        b("bs_curry")._1(l, 0);
                        return b("bs_curry")._1(c, function(a) {
                            return !1
                        })
                    },
                    onPress: f,
                    xstyle: a
                })
            })
        } else
            return h.jsx(b("MWChatHeadContacts.react"), {
                onPress: f,
                onHoverChange: function(a) {
                    return b("bs_curry")._1(c, function(b) {
                        return a
                    })
                },
                xstyle: a
            })
    }
    c = a;
    f.styles = i;
    f.make = c
}
), null);
__d("MWChatMultitabHeadsContainer.bs", ["React", "gkx", "JSResource", "stylex", "BootloaderResource", "CometPlaceholder.react", "MWChatMultitabVisibleChatHeads.bs", "MWChatMultitabHeadsCompose_DEPRECATED.bs", "useCometDisplayTimingTrackerForInteraction"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React"), i = {
        chatHeads: {
            alignItems: "bp9cbjyn",
            bottom: "cij46092",
            display: "j83agx80",
            flexDirection: "cbu4d94t",
            position: "l9j0dhe7"
        },
        dockedToBottomRight: {
            bottom: "lfi1tu6t",
            end: "cypi58rs",
            position: "pmk7jnqg",
            width: "tmrshh9y",
            height: "m7zwrmfr"
        }
    }, j = b("JSResource")("MWChatMultiTabHeads_COMMON.bs").__setRef("MWChatMultitabHeadsContainer.bs");
    function a(a, b) {
        return {
            setIsSomeHeadHovered: a
        }
    }
    function k(a) {
        return h.createElement(b("BootloaderResource").read(j).make, a)
    }
    e = {
        reasonResource: j,
        makeProps: a,
        make: k
    };
    var l = b("JSResource")("MWChatSettingsHead.bs").__setRef("MWChatMultitabHeadsContainer.bs");
    function c(a, b) {
        return {
            isSomeHeadHovered: a
        }
    }
    function m(a) {
        return h.createElement(b("BootloaderResource").read(l).make, a)
    }
    a = {
        reasonResource: l,
        makeProps: c,
        make: m
    };
    function d(a) {
        a = b("MWChatMultitabVisibleChatHeads.bs").useHook(0);
        var c = b("useCometDisplayTimingTrackerForInteraction")("ChatHead", !1)
          , d = h.useState(function() {
            return !1
        })
          , e = d[1];
        return h.jsxs("div", {
            children: [h.jsxs("ul", {
                children: [b("gkx")("1729565") ? h.jsx(b("CometPlaceholder.react"), {
                    children: h.jsx(m, {
                        isSomeHeadHovered: d[0]
                    }),
                    fallback: null
                }) : null, a.length !== 0 ? h.jsx(b("CometPlaceholder.react"), {
                    children: h.jsx(k, {
                        setIsSomeHeadHovered: e
                    }),
                    fallback: null
                }) : null],
                className: (g || (g = b("stylex")))(i.chatHeads)
            }), h.jsx(b("MWChatMultitabHeadsCompose_DEPRECATED.bs").make, {
                setIsSomeHeadHovered: e
            })],
            ref: c,
            className: g(i.dockedToBottomRight)
        })
    }
    c = d;
    f.styles = i;
    f.LazyMWChatMultitabHeads = e;
    f.LazyMWChatSettingsHead = a;
    f.make = c
}
), null);
__d("useWindowSize", ["throttle", "useSubscriptionValue"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function g() {
        return {
            innerHeight: window.innerHeight,
            innerWidth: window.innerWidth,
            outerHeight: window.outerHeight,
            outerWidth: window.outerWidth
        }
    }
    function h(a) {
        var c = b("throttle")(a, 500);
        window.addEventListener("resize", c);
        return function() {
            window.removeEventListener("resize", c)
        }
    }
    function a() {
        return b("useSubscriptionValue")({
            getCurrentValue: g,
            subscribe: h
        })
    }
}
), null);
__d("MWChatMultitabResize.bs", ["React", "useWindowSize", "MWChatMultitabContext.bs", "MWChatMultitabDispatcher.bs", "useIsCurrentRouteMediaViewer"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a) {
        a = b("useWindowSize")();
        var c = g.useContext(b("MWChatMultitabContext.bs").context)
          , d = b("useIsCurrentRouteMediaViewer")();
        g.useEffect(function() {
            c !== void 0 && (d || b("MWChatMultitabDispatcher.bs").dispatch(void 0, c, 6));
            return
        }, [c, a.innerWidth, d]);
        return 0
    }
    f.useHook = a
}
), null);
__d("MWChatMultitabSync.bs", ["React", "MWChatMultitabContext.bs", "MWChatMultitabDispatcher.bs"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a) {
        var c = g.useContext(b("MWChatMultitabContext.bs").context);
        g.useEffect(function() {
            if (c !== void 0)
                return b("MWChatMultitabDispatcher.bs").subscribe(c)
        }, [c]);
        return 0
    }
    f.useHook = a
}
), null);
__d("MWChatMultitabHeadsArrow.bs", [], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a) {
        return null
    }
    b = a;
    f.make = b
}
), null);
__d("MWChatTabContainerLoading.bs", ["fbt", "bs_curry", "React", "qex", "stylex", "MWChatCloseNewTab.bs", "MWChatCollapseTab.bs", "CometPressable.react", "MessengerWebEntryPoint", "MWChatMultitabHeadsArrow.bs", "MWChatTabContainerShared.bs", "useCometLoadingStateTracker"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = b("React"), j = {
        chatTabContainer: {
            position: "pmk7jnqg",
            bottom: "lfi1tu6t",
            end: "esma6hys",
            display: "j83agx80"
        }
    };
    function a(a) {
        var c = a.isMultitab
          , d = a.threadID;
        a = a.useSidebarChatStyles;
        c = c !== void 0 ? c : !1;
        a = a !== void 0 ? a : !1;
        var e = b("MWChatCollapseTab.bs").useHook(b("MessengerWebEntryPoint").UNKNOWN)
          , f = b("MWChatCloseNewTab.bs").useHook(b("MessengerWebEntryPoint").UNKNOWN)
          , k = b("useCometLoadingStateTracker")();
        return i.jsxs("div", {
            children: [i.jsx("div", {
                children: i.jsx("div", {
                    children: i.jsx(b("CometPressable.react"), {
                        "aria-label": g._("Thu nh\u1ecf tab"),
                        onPress: function(a) {
                            if (d !== void 0)
                                return b("bs_curry")._1(e, d);
                            else
                                return b("bs_curry")._1(f, 0)
                        },
                        xstyle: function(a) {
                            return [b("MWChatTabContainerShared.bs").styles.header]
                        }
                    }),
                    className: (h || (h = b("stylex")))(b("MWChatTabContainerShared.bs").styles.chatTab, a ? b("MWChatTabContainerShared.bs").styles.sidebarChatOverrides : !1, c ? b("MWChatTabContainerShared.bs").styles.chatTabNoBottomRadius : !1, b("qex")._("1586109") ? b("MWChatTabContainerShared.bs").styles.chatTabThin : !1)
                })
            }), c ? null : i.jsx(b("MWChatMultitabHeadsArrow.bs").make, {})],
            ref: k[1],
            "aria-busy": !0,
            className: h(a ? !1 : j.chatTabContainer, c ? b("MWChatTabContainerShared.bs").styles.chatTabContainerBottom : !1)
        })
    }
    c = b("MWChatTabContainerShared.bs").styles;
    d = a;
    f.shareStyles = c;
    f.styles = j;
    f.make = d
}
), null);
__d("MWMSLoadThread.bs", ["bs_curry", "React", "ifRequired", "CurrentUser", "MWChatThreadId.bs", "MWThread_DEPRECATED.bs"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function h(a) {
        b("ifRequired")("MessengerState.bs", function(c) {
            var d = b("CurrentUser").isWorkUser() ? 20 : 10;
            b("bs_curry")._4(c.getThreadMeta, b("CurrentUser").getID(), a, function(a) {
                return 0
            }, null);
            b("bs_curry")._7(c.fetchMoreMessages, b("CurrentUser").getID(), a, 0, d, function(a) {
                return 0
            }, null, "mercury");
            return 0
        }, function(a) {
            return 0
        });
        return 0
    }
    function a(a) {
        a = b("MWThread_DEPRECATED.bs").useIdExn(0);
        var c = b("MWChatThreadId.bs").getMercuryID(a);
        g.useEffect(function() {
            h(c);
            return
        }, [c]);
        return 0
    }
    f.loadMessages = h;
    f.useLoadMessages = a
}
), null);
__d("MWChatTabContainerWithEarlierLoading.bs", ["React", "JSResource", "bs_caml_option", "MWMSLoadThread.bs", "BootloaderResource"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = b("JSResource")("MWChatTabContainerCommon.bs").__setRef("MWChatTabContainerWithEarlierLoading.bs");
    function i(a, c, d, e, f, g, h) {
        h = {
            isTabFocused: a,
            hasContent: c,
            useSidebarChatStyles: e
        };
        d !== void 0 && (h.isMultitab = b("bs_caml_option").valFromOption(d));
        f !== void 0 && (h.searchResultMessages = b("bs_caml_option").valFromOption(f));
        g !== void 0 && (h.isMainRegion = b("bs_caml_option").valFromOption(g));
        return h
    }
    function j(a) {
        return g.createElement(b("BootloaderResource").read(h).make, a)
    }
    c = {
        reasonResource: h,
        makeProps: i,
        make: j
    };
    function a(a) {
        var c = a.isTabFocused
          , d = a.hasContent
          , e = a.isMultitab;
        a = a.useSidebarChatStyles;
        b("MWMSLoadThread.bs").useLoadMessages(0);
        return g.jsx(j, i(c, d, e, a, void 0, void 0, 0))
    }
    d = a;
    f.LazyMWChatTabContainer = c;
    f.make = d
}
), null);
__d("MWChatMultitabTabsContainer.bs", ["React", "JSResource", "stylex", "bs_caml_option", "MWThreadKey.bs", "MWChatThreadId.bs", "MWUIChatTabState.bs", "MWChatInteraction.bs", "MWChatStateThread.bs", "BootloaderResource", "MWThread_DEPRECATED.bs", "CometErrorBoundary.re", "CometPlaceholder.react", "MWChatMultitabStateHook.bs", "MWChatTabContainerShared.bs", "MWChatTabContainerLoading.bs", "CometContextualLayerAnchorRoot.re", "CometHeroInteractionWithDiv.react", "CometTransientDialogProvider.react", "MWChatTabContainerWithEarlierLoading.bs", "useCometDisplayTimingTrackerForInteraction"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React"), i = {
        tray: {
            display: "j83agx80",
            position: "l9j0dhe7",
            zIndex: "du4w35lb",
            alignItems: "aovydwv3",
            height: "do00u71z"
        },
        aboveChatHeads: {
            position: "l9j0dhe7",
            zIndex: "tkr6xdv7"
        }
    }, j = b("JSResource")("MWChatTabContainerNew.bs").__setRef("MWChatMultitabTabsContainer.bs");
    function k(a, c, d, e, f, g, h) {
        h = {
            hasContent: a,
            isSearchView: d,
            isTabFocused: e,
            searchInitialParticipant: g
        };
        c !== void 0 && (h.isMultitab = b("bs_caml_option").valFromOption(c));
        f !== void 0 && (h.useSidebarChatStyles = b("bs_caml_option").valFromOption(f));
        return h
    }
    function l(a) {
        return h.createElement(b("BootloaderResource").read(j).make, a)
    }
    c = {
        reasonResource: j,
        makeProps: k,
        make: l
    };
    function a(a) {
        a = b("MWChatMultitabStateHook.bs").useHook_DEPRECATED(0);
        var c = b("useCometDisplayTimingTrackerForInteraction")("ChatMain", !0);
        return h.jsx("div", {
            children: h.jsx(b("CometContextualLayerAnchorRoot.re").make, {
                children: h.jsx("div", {
                    children: a.openTabsState.map(function(a) {
                        var d = a.hasContent
                          , e = a.isTabFocused
                          , f = a.threadID;
                        if (f) {
                            var g = f[0];
                            g = {
                                children: h.jsx(b("MWThread_DEPRECATED.bs").make, {
                                    id: g,
                                    children: h.jsx(b("MWThreadKey.bs").make, {
                                        id: b("MWThread_DEPRECATED.bs").toThreadKey(g),
                                        children: h.jsx(b("MWUIChatTabState.bs").Provider.make, {
                                            tab: [g],
                                            children: h.jsx(b("CometTransientDialogProvider.react"), {
                                                children: h.jsx(b("CometErrorBoundary.re").make, {
                                                    fallback: function(a) {
                                                        return null
                                                    },
                                                    children: h.jsx(b("MWChatTabContainerWithEarlierLoading.bs").make, {
                                                        isTabFocused: e,
                                                        hasContent: d,
                                                        isMultitab: !0,
                                                        useSidebarChatStyles: !1
                                                    }, b("MWChatThreadId.bs").getMercuryID(g))
                                                })
                                            })
                                        })
                                    })
                                }, b("MWThread_DEPRECATED.bs").key(g))
                            };
                            g["data-visualcompletion"] = "ignore-dynamic";
                            g = h.jsx("div", g)
                        } else
                            g = h.jsx(l, k(d, !0, a.isSearchView, e, void 0, a.searchInitialParticipant, 0), "local");
                        return h.jsx(b("CometPlaceholder.react"), {
                            children: h.jsx(b("CometHeroInteractionWithDiv.react"), {
                                children: g,
                                interactionUUID: b("MWChatInteraction.bs").get(b("MWChatStateThread.bs").toString(f)),
                                interactionDesc: "MULTI_CHAT_TAB",
                                pageletName: "ChatTab",
                                excludeFromMainVC: !0,
                                ref: c,
                                xstyle: [b("MWChatTabContainerShared.bs").styles.chatTabContainer, b("MWChatTabContainerShared.bs").styles.chatTabContainerBottom]
                            }),
                            fallback: h.jsx(b("MWChatTabContainerLoading.bs").make, {
                                isMultitab: !0,
                                threadID: f ? f[0] : void 0
                            })
                        }, f ? b("MWChatThreadId.bs").serializeFuture(f[0]) : "search")
                    }),
                    className: (g || (g = b("stylex")))(i.tray)
                })
            }),
            className: g(i.aboveChatHeads)
        })
    }
    d = b("MWChatTabContainerShared.bs").styles;
    e = a;
    f.shareStyles = d;
    f.styles = i;
    f.LazyMWChatTabContainerNew = c;
    f.make = e
}
), null);
__d("MWChatSolidReactionSettingSync", ["CometRelay", "MWChatSolidReactionSettingSubscription", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    f.useHook = a;
    var g = b("React")
      , h = function(a, b) {
        return function(c) {
            c = c.getRoot();
            if (c == null)
                return;
            c = c.getLinkedRecord("viewer");
            if (c == null)
                return;
            c.setValue(b, a)
        }
    }
      , i = function(a) {
        return "boolean" === typeof a
    }
      , j = "solid_reaction_enabled";
    function a() {
        var a = b("CometRelay").useRelayEnvironment();
        g.useEffect(function() {
            var c = b("MWChatSolidReactionSettingSubscription").subscribe(a, function(b) {
                b = b == null ? void 0 : (b = b.messenger_chat_solid_reaction_setting_subscribe) == null ? void 0 : b.solid_reaction_enabled;
                i(b) && a.commitUpdate(h(j, b))
            });
            return function() {
                return c.dispose()
            }
        }, [a])
    }
}
), null);
__d("MWChatSolidReactionSettingSync.bs", ["qex", "MWChatSolidReactionSettingSync"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a) {
        return 0
    }
    c = b("qex")._("1415783") ? function(a) {
        b("MWChatSolidReactionSettingSync").useHook();
        return 0
    }
    : a;
    f.noop = a;
    f.useHook = c
}
), null);
__d("useMWIsTopLevelRouteMediaViewerExperiment", ["mediaViewerExperimentRoutes", "useCometRouterState"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a() {
        var a = b("useCometRouterState")();
        if (a == null)
            return !1;
        var c = a.main;
        a = a.pushViewStack;
        a = a && a.length > 0 ? a[a.length - 1] : c;
        return b("mediaViewerExperimentRoutes").ROUTES.has((a = (c = a.route) == null ? void 0 : c.tracePolicy) != null ? a : "")
    }
}
), null);
__d("MWChatMultitabMain.bs", ["bs_curry", "React", "stylex", "requireCond", 
    "IsMWIsOnPushView", "MWChatMultitabSync.bs", "MWChatMultitabResize.bs", 
    "MWChatTabContainerShared.bs", "MWChatMultitabTabsContainer.bs", 
    "MWChatMultitabHeadsContainer.bs", 
    "MWChatSolidReactionSettingSync.bs", 
    "CometContextualLayerAnchorRoot.re", 
    "MWChatOnMediaVisibilityOverrideContext", 
    "useMWIsTopLevelRouteMediaViewerExperiment", 
    "useShouldShowMessagingEntrypointInCometRoot", "cr:1504998"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React"), i = {
        root: {
            position: "poy2od1o",
            bottom: "i09qtzwb",
            end: "n7fi1qx3"
        },
        chatAbovePushView: {
            zIndex: "tkr6xdv7"
        },
        hidden: {
            display: "mkhogb32"
        },
        container: {
            position: "l9j0dhe7",
            transform: "fh5enmmv"
        }
    };
    function a(a) {
        b("bs_curry")._1(b("cr:1504998").useHook, 0);
        b("MWChatMultitabSync.bs").useHook(0);
        b("MWChatMultitabResize.bs").useHook(0);
        b("MWChatSolidReactionSettingSync.bs").useHook(0);
        a = b("useMWIsTopLevelRouteMediaViewerExperiment")();
        a = b("MWChatOnMediaVisibilityOverrideContext").useMWChatOnMediaVisibilityOverride(a);
        a = b("useShouldShowMessagingEntrypointInCometRoot")("CHAT") && a;
        var c = b("IsMWIsOnPushView")();
        return h.jsx("div", {
            children: h.jsx(b("CometContextualLayerAnchorRoot.re").make, {
                children: h.jsxs("div", {
                    children: [h.jsx(b("MWChatMultitabTabsContainer.bs").make, {}), h.jsx(b("MWChatMultitabHeadsContainer.bs").make, {})],
                    className: (g || (g = b("stylex")))(i.container)
                })
            }),
            className: g(i.root, c ? i.chatAbovePushView : !1, a ? !1 : i.hidden)
        })
    }
    c = b("MWChatTabContainerShared.bs").styles;
    d = a;
    f.styles = i;
    f.shareStyles = c;
    f.$MWLSChatInit$OR$MWMSChatInit$requireCond = b("cr:1504998");
    f.make = d
}
), null);
__d("MWChatMultitabMain.re", ["MWChatMultitabMain.bs"], (function(a, b, c, d, e, f) {
    (function(a) {
        return null
    }
    );
    a = b("MWChatMultitabMain.bs").make;
    f.make = a
}
), null);
__d("MWChat.react", ["CometErrorBoundary.react", "MWChatDisabled.re", 
    "MWChatMultitabMain.re", "React", "gkx", "killswitch", "requireCond", "cr:1619039"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    b("cr:1619039");
    function a(a) {
        return !b("gkx")("1673554") || b("killswitch")("COMET_CHAT") ? g.jsx(b("MWChatDisabled.re").make, {}) : g.jsx(b("CometErrorBoundary.react"), {
            fallback: function(a) {
                return g.jsx(b("MWChatDisabled.re").make, {})
            },
            children: g.jsx(b("MWChatMultitabMain.re").make, {})
        })
    }
}
), null);
__d("MWChatPopper.bs", ["bs_curry", "React", "bs_caml_option", "setInterval", "requireDeferred", "ClearInterval.re", "MessengerWebEntryPoint", "useGlobalEventListener", "MWChatThreadPingCounter.bs", "MWChatOpenTabFromNewMessage.bs", "CometSetBlinkingTitleMessageContext"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = b("requireDeferred")("MWChatChatPopperUpper.bs");
    function a(a) {
        var c = g.useContext(b("CometSetBlinkingTitleMessageContext"))
          , d = b("MWChatOpenTabFromNewMessage.bs").useHook(b("MessengerWebEntryPoint").MESSAGE_RECEIVED)
          , e = g.useRef(void 0);
        g.useEffect(function() {
            h.onReady(function(a) {
                return b("bs_curry")._3(a.sub, e, d, c)
            });
            return function(a) {
                a = e.current;
                if (a !== void 0)
                    return b("bs_curry")._1(a, 0);
                else
                    return 0
            }
        }, [c, d]);
        var f = g.useRef(void 0)
          , i = function(a) {
            a = f.current;
            if (a !== void 0) {
                b("ClearInterval.re").clearInterval(b("bs_caml_option").valFromOption(a));
                return 0
            } else
                return 0
        };
        a = function(a) {
            i(0);
            f.current = b("bs_caml_option").some(b("setInterval")(function(a) {
                return b("MWChatThreadPingCounter.bs").clear(0)
            }, 6e5));
            return 0
        }
        ;
        var j = function(a) {
            b("MWChatThreadPingCounter.bs").clear(0);
            return i(0)
        };
        b("useGlobalEventListener")("blur", a, {});
        b("useGlobalEventListener")("focus", j, {});
        g.useEffect(function() {
            return function(a) {
                return i(0)
            }
        }, []);
        return 0
    }
    c = 6e5;
    f.pingCounterResetTime = c;
    f.$MWChatChatPopperUpper$Deferred = h;
    f.useHook = a
}
), null);
__d("MWChatSyncEnvironment", ["Actor", "Arbiter", "CometRelay", "React", "recoverableViolation", "requireDeferred", "MWChatSyncEnvironmentQuery.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    f.useHook = a;
    var g, h = b("React"), i = b("requireDeferred")("MercurySyncDeltaHandler"), j = b("requireDeferred")("MessengerMQTTConnection");
    function a() {
        var a = b("Actor").useActor()
          , c = a[0]
          , d = b("CometRelay").useLazyLoadQuery(g !== void 0 ? g : g = b("MWChatSyncEnvironmentQuery.graphql"), {});
        h.useEffect(function() {
            if (d.viewer) {
                var a = d.viewer.messenger_web_mqtt_connection_params;
                j.onReady(function(b) {
                    return b.setUp({
                        appID: parseInt(a == null ? void 0 : a.app_id, 10),
                        endpoint: (a == null ? void 0 : a.endpoint) || "",
                        fbid: c,
                        irisSeqID: a == null ? void 0 : a.iris_seq_id
                    })
                });
                i.onReady(function(d) {
                    d.get(),
                    b("Arbiter").inform("MercurySyncDeltaHandler/initSeqID", {
                        fbid: c,
                        seqID: a == null ? void 0 : a.iris_seq_id
                    })
                })
            } else
                b("recoverableViolation")("Failed to setup sync environment", "messenger_comet")
        }, [c, d])
    }
}
), null);
__d("MWMSChatInit.bs", ["MWChatPopper.bs", "MWChatBlockList", "MWChatSyncEnvironment"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a) {
        b("MWChatBlockList").useHook();
        b("MWChatSyncEnvironment").useHook();
        return b("MWChatPopper.bs").useHook(0)
    }
    f.useHook = a
}
), null);
__d("MWChatBadgeCount.react", ["CometNumberedBadge.react", "CometPlaceholder.react", "CometRelay", "React", "recoverableViolation", "requireCond", "MWChatBadgeCountQuery.graphql", "cr:1512756"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React"), i = g !== void 0 ? g : g = b("MWChatBadgeCountQuery.graphql"), j = b("cr:1512756").useBadgeCountUpdates;
    function k(a) {
        var c = a.setBadgeCount;
        a = function() {
            b("CometRelay").fetchQuery(f, i, {}, {
                fetchPolicy: "network-only",
                networkCacheConfig: {
                    force: !0
                }
            }).subscribe({})
        }
        ;
        var d = b("CometRelay").useLazyLoadQuery(i, {});
        d = (d = d.viewer) == null ? void 0 : d.message_threads;
        a = j(a);
        var e = a != null ? a : d != null && d.unseen_count != null && d.unseen_count > 0 ? d.unseen_count : 0
          , f = b("CometRelay").useRelayEnvironment();
        h.useEffect(function() {
            f.commitUpdate(function(a) {
                a = a.getRoot();
                if (a == null) {
                    b("recoverableViolation")("A store root must be present to move forward.", "messenger_comet");
                    return
                }
                a = a.getLinkedRecord("viewer");
                if (a == null) {
                    b("recoverableViolation")("A viewer record does not exist.", "messenger_comet");
                    return
                }
                a = a.getLinkedRecord("message_threads");
                if (a == null) {
                    b("recoverableViolation")("A message_threads record does not exist.", "messenger_comet");
                    return
                }
                var c = a.getValue("unseen_count");
                if (c == null) {
                    b("recoverableViolation")("An unseen_count value from the record does not exist.", "messenger_comet");
                    return
                }
                c !== e && a.setValue(e, "unseen_count")
            }),
            c && c(e)
        }, [e, f, c]);
        return e > 0 ? h.jsx(b("CometNumberedBadge.react"), {
            testid: void 0,
            value: e
        }) : null
    }
    function a(a) {
        a = a.setBadgeCount;
        return h.jsx(b("CometPlaceholder.react"), {
            fallback: h.jsx("span", {}),
            children: h.jsx(k, {
                setBadgeCount: a
            })
        })
    }
}
), null);
__d("MWMSChatBadgeCountUpdates", ["CurrentUser", "React", "requireDeferred"], (function(a, b, c, d, e, f) {
    "use strict";
    f.useBadgeCountUpdates = a;
    var g = b("React")
      , h = b("requireDeferred")("MercuryThreadInformer")
      , i = b("requireDeferred")("MessengerState.re");
    function a(a) {
        a = g.useState(null);
        var c = a[0]
          , d = a[1];
        a = g.useState(null);
        var e = a[0]
          , f = a[1];
        g.useEffect(function() {
            if (c == null) {
                var a = h.onReady(function(a) {
                    return d(a.getForFBID(b("CurrentUser").getID()))
                });
                return function() {
                    return a.remove()
                }
            } else {
                var e = new Set()
                  , g = function() {
                    var a = i.onReady(function(c) {
                        c = c.getUnseenCount(b("CurrentUser").getID());
                        f(c);
                        a.remove();
                        e["delete"](a)
                    });
                    e.add(a)
                }
                  , j = [c.subscribe("unseen-updated", g), c.subscribe("unseen-timestamp-updated", g), c.subscribe("unread-updated", g)];
                return function() {
                    j.forEach(function(a) {
                        return c.unsubscribe(a)
                    }),
                    e.forEach(function(a) {
                        return a.remove()
                    })
                }
            }
        }, [c]);
        return e
    }
}
), null);
__d("CometSearchTypeaheadBaseTraceProvider", ["CometHeroLogging", "performanceNow"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;
    a = function() {
        function a(a) {
            var b = a.loggingProvider
              , c = a.trace;
            a = a.vcTrackerRef;
            this.$5 = !1;
            this.$7 = null;
            this.$1 = c;
            this.$2 = b;
            this.$6 = a;
            this.$3 = "unknown"
        }
        var c = a.prototype;
        c.getInteractionUUID = function() {
            return this.$4
        }
        ;
        c.getVCTrackerRef = function() {
            return this.$6
        }
        ;
        c.isResolved = function() {
            return this.$5
        }
        ;
        c.resolve = function() {
            this.$5 = !0,
            this.$7 = null
        }
        ;
        c.setEventStartTime = function(a) {
            this.$7 = a
        }
        ;
        c.setEndReason = function(a) {
            this.$3 = a
        }
        ;
        c.getEndReason = function() {
            return this.$3
        }
        ;
        c.getEntriesCountForVisualComplete = function() {
            return 8
        }
        ;
        c.trace = function(a, c) {
            var d = this;
            this.setEndReason("continued_typing");
            this.$5 = !1;
            var e = void 0
              , f = void 0;
            this.$7 != null && (f = this.$7,
            e = (g || (g = b("performanceNow")))() - f);
            return this.$1(function(e) {
                var f = b("CometHeroLogging").genCometHeroInteractionUUIDAndMarkStart(e.getTraceId());
                d.$4 = f;
                e.addMetadata("entry_point_surface", d.$2.getContext());
                e.addMetadata("current_text_length", c.length);
                f = d.$2.getSessionID();
                f != null && e.addMetadata("typeahead_sid", f);
                e.onComplete(function() {
                    e.addMetadata("end_reason", d.getEndReason())
                });
                a(e)
            }, f, e)
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("searchCometTypeaheadODSLogFocusEvent", ["requireDeferred"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("requireDeferred")("BanzaiODS");
    function a(a, b, c) {
        b === void 0 && (b = !0);
        c === void 0 && (c = 1);
        if (!b)
            return;
        g.onReady(function(b) {
            b.bumpEntityKey(354, a, "focused", c)
        })
    }
}
), null);
__d("CometSearchBootstrapKeywordsDataSource.query", ["CometRelay", "CometTypeaheadDataEntryWithMetaData", "filterNulls", "recoverableViolation", "CometSearchBootstrapKeywordsDataSourceQuery.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    f.normalize = a;
    var g;
    c = g !== void 0 ? g : g = b("CometSearchBootstrapKeywordsDataSourceQuery.graphql");
    f.query = c;
    function a(a) {
        if (!a)
            return [];
        a = a.viewer;
        a = ((a = a == null ? void 0 : (a = a.bootstrap_keywords) == null ? void 0 : a.edges) != null ? a : []).map(function(a) {
            return a.node
        }).filter(Boolean);
        a = b("filterNulls")(a.map(function(a) {
            var c = a.item_logging_id
              , d = a.item_logging_info
              , e = a.keyword_text;
            a = a.sts_info;
            if (e == null) {
                b("recoverableViolation")("Cannot have TA bootstrap entry without keyword_text", "search");
                return null
            }
            var f = a == null ? void 0 : a.direct_nav_result
              , g = a == null ? void 0 : a.high_confidence_result
              , h = a == null ? void 0 : a.disambiguation_result
              , i = null
              , j = ["bootstrap", "keyword"]
              , k = null;
            if (a) {
                i = (a = f == null ? void 0 : f.title) != null ? a : g == null ? void 0 : g.text;
                f != null ? j = [].concat(j, ["direct_nav"]) : g != null ? j = [].concat(j, ["high_confidence"]) : h != null && (j = [].concat(j, ["disambiguation"]),
                i = ((h == null ? void 0 : h.title) || "") + "_disambiguation_result")
            }
            (f != null || g != null || h != null) && (k = {},
            f != null && (k.direct_nav_result = {
                img_url: f == null ? void 0 : f.img_url,
                link_url: f == null ? void 0 : f.link_url,
                snippet: f == null ? void 0 : f.snippet,
                title: f == null ? void 0 : f.title
            }),
            g != null && (k.high_confidence_result = {
                id: g == null ? void 0 : g.hcm_id,
                picture_url: g == null ? void 0 : g.picture_url,
                snippet: g == null ? void 0 : g.snippet,
                text: g == null ? void 0 : g.text
            }),
            h != null && (k.disambiguation_result = {
                disambiguation_info_list: h == null ? void 0 : h.disambiguation_info_list,
                title: h == null ? void 0 : h.title
            }));
            i == null && (i = e);
            return new (b("CometTypeaheadDataEntryWithMetaData"))({
                key: i,
                label: e,
                metaData: {
                    logging: {
                        loggingID: (a = c) != null ? a : "",
                        loggingInfo: d
                    },
                    markers: new Set(j)
                },
                rawData: {
                    structuredInfo: k,
                    type: "bootstrap"
                }
            })
        }));
        return a
    }
}
), null);
__d("CometSearchBootstrapKeywordsDataSource", ["CometRelay", "CometSearchBootstrapKeywordsDataSource.query", "CometSearchTypeaheadBaseDataCacheProvider", "CometSearchTypeaheadBaseInMemoryMapDataCache", "cometSearchTypeaheadBaseStartsWithMatchBuilder", "cometSearchTypeaheadPayloadDecoratorAddLimit", "promiseDone"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            var c = a.limit
              , d = a.queryVariables;
            a = a.relayEnvironment;
            this.$1 = new (b("CometSearchTypeaheadBaseDataCacheProvider"))({
                cache: new (b("CometSearchTypeaheadBaseInMemoryMapDataCache"))(),
                matchBuilder: b("cometSearchTypeaheadBaseStartsWithMatchBuilder")
            });
            this.$3 = c;
            this.$2 = d;
            this.$4 = a
        }
        var c = a.prototype;
        c.bootstrap = function() {
            var a = this;
            b("promiseDone")(b("CometRelay").fetchQuery(this.$4, b("CometSearchBootstrapKeywordsDataSource.query").query, this.$2).toPromise().then(function(a) {
                return b("CometSearchBootstrapKeywordsDataSource.query").normalize(a)
            }).then(function(b) {
                a.$1.add(b, null)
            }))
        }
        ;
        c.fetchCache = function(a) {
            var c = a.query;
            c = this.$1.match(c);
            var d = b("cometSearchTypeaheadPayloadDecoratorAddLimit")(this.$3);
            return d({
                entries: c,
                params: a
            })
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("withSearchCometTypeaheadTraceEndReasonDecorator", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        return g.forwardRef(function(b, c) {
            var d = b.onPressEntry
              , e = b.traceProvider;
            b = babelHelpers.objectWithoutPropertiesLoose(b, ["onPressEntry", "traceProvider"]);
            var f = g.useCallback(function(a) {
                e && e.setEndReason("successful_user_action"),
                d && d(a)
            }, [d, e]);
            return g.jsx(a, babelHelpers["extends"]({}, b, {
                onPressEntry: f,
                ref: c,
                traceProvider: e
            }))
        })
    }
}
), null);
__d("useCometSearchTypeaheadTraceProvider", ["CometSearchTypeaheadBaseTraceProvider", "React", "useCometDisplayTimingTrackerForInteraction", "useCometInteractionTracing"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = b("useCometInteractionTracing")(30605354, "contingent", "INTERACTION")
          , d = b("useCometDisplayTimingTrackerForInteraction")("SearchTypeaheadLayout")
          , e = g.useMemo(function() {
            return new (b("CometSearchTypeaheadBaseTraceProvider"))({
                loggingProvider: a,
                trace: c,
                vcTrackerRef: d
            })
        }, [a, c, d]);
        return e
    }
}
), null);
__d("CometSearchTypeaheadRecentEntityViewItem.react", ["CometSearchTypeaheadBaseEntityViewItem.react", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c, d = a.entry;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["entry"]);
        var e = d.getRawData();
        c = e == null ? void 0 : (c = e.profile) == null ? void 0 : c.pictureUrl;
        return g.jsx(b("CometSearchTypeaheadBaseEntityViewItem.react"), babelHelpers["extends"]({}, a, {
            entry: d,
            linkProps: {
                preventLocalNavigation: !0,
                url: e == null ? void 0 : (a = e.profile) == null ? void 0 : a.url
            },
            pictureUrl: c,
            size: 36
        }))
    }
}
), null);
__d("cometSearchTypeaheadRecentEntityViewItem.resolver", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        a = a.getMetaData();
        a = a.markers;
        return a.has("entity") && a.has("recent")
    }
}
), null);
__d("CometSearchTypeaheadBaseSurfaceRecentEntityViewItem.react", ["CometSearchTypeaheadBaseFocusLockRegion.react", "CometSearchTypeaheadBaseSurfaceRecentViewItemRemoveButton.react", "CometSearchTypeaheadRecentEntityViewItem.react", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.entry;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["entry"]);
        return g.jsx(b("CometSearchTypeaheadRecentEntityViewItem.react"), babelHelpers["extends"]({}, a, {
            entry: c,
            itemEndContent: g.jsx(b("CometSearchTypeaheadBaseFocusLockRegion.react"), {
                children: g.jsx(b("CometSearchTypeaheadBaseSurfaceRecentViewItemRemoveButton.react"), {
                    entry: c
                })
            })
        }))
    }
}
), null);
__d("cometSearchTypeaheadDirectNavigationShortcutsDedupEntries", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, b, c) {
        var d = new Set(a.map(function(a) {
            return c(a)
        }));
        a = b.filter(function(a) {
            return d.has(c(a))
        });
        var e = new Set();
        b = b.filter(function(a) {
            a = c(a);
            if (!e.has(a)) {
                e.add(a);
                return !d.has(a)
            }
            return !1
        });
        return [].concat(a, b)
    }
}
), null);
__d("SearchCometGlobalTypeaheadDataSource", ["CometSearchBootstrapKeywordsDataSource", "CometSearchKeywordDataSource", "CometSearchRecentDataSource", "cometSearchDataEntryBaseKeyBuilder", "cometSearchTypeaheadBaseDedupEntries", "cometSearchTypeaheadDecorateMixedPayload", "cometSearchTypeaheadDecorateRecentPayload", "cometSearchTypeaheadDirectNavigationShortcutsDedupEntries", "qex"], (function(a, b, c, d, e, f) {
    "use strict";
    function g(a, c) {
        a === void 0 && (a = []);
        c === void 0 && (c = []);
        var d = b("qex")._("1734201") || !1;
        if (d)
            return b("cometSearchTypeaheadDirectNavigationShortcutsDedupEntries")(a, c, b("cometSearchDataEntryBaseKeyBuilder"));
        else
            return b("cometSearchTypeaheadBaseDedupEntries")(a, c, b("cometSearchDataEntryBaseKeyBuilder"))
    }
    a = function() {
        function a(a, c, d) {
            var e = a.dataSources
              , f = e.bootstrapKeywordsDataSourceParams
              , g = e.keywordDataSourceParams;
            e = e.recentDataSourceParams;
            var h = a.logging.sessionContext;
            a = a.view.renderLimit;
            this.$5 = a;
            this.$4 = h;
            this.$1 = new (b("CometSearchBootstrapKeywordsDataSource"))(babelHelpers["extends"]({}, f, {
                limit: a,
                relayEnvironment: d
            }));
            this.$2 = new (b("CometSearchKeywordDataSource"))(babelHelpers["extends"]({}, g, {
                limit: a,
                relayEnvironment: d
            }));
            this.$3 = new (b("CometSearchRecentDataSource"))(babelHelpers["extends"]({}, e, {
                actorID: c,
                limit: a,
                relayEnvironment: d
            }))
        }
        var c = a.prototype;
        c.bootstrap = function() {
            this.$1.bootstrap(),
            this.$3.bootstrap()
        }
        ;
        c.addRecentEntry = function(a, b) {
            this.$3.add(a, this.$4, b)
        }
        ;
        c.fetchCache = function(a) {
            var c = a.query;
            if (c === "") {
                c = this.$3.fetchCache(a);
                return b("cometSearchTypeaheadDecorateRecentPayload")(c, {
                    limit: this.$5
                })
            }
            c = this.$1.fetchCache(a);
            var d = c.entries;
            if (d.length >= this.$5)
                return this.$6(c);
            c = this.$2.fetchCache(a);
            a = c.entries;
            c = c.params;
            d = g(d, a);
            return this.$6({
                entries: d,
                params: c
            })
        }
        ;
        c.fetchNetwork = function(a) {
            var c = this
              , d = a.query;
            return d === "" ? this.$3.fetchNetwork(a).then(function(a) {
                return b("cometSearchTypeaheadDecorateRecentPayload")(a, {
                    limit: c.$5
                })
            }) : this.$2.fetchNetwork(a).then(function(b) {
                var d = c.$1.fetchCache(a);
                d = d.entries;
                var e = b.entries;
                b = b.params;
                d = g(d, e);
                return c.$6({
                    entries: d,
                    params: b
                })
            })
        }
        ;
        c.removeRecentEntry = function(a, b) {
            this.$3.remove(a, b)
        }
        ;
        c.$6 = function(a) {
            var c = a.entries;
            a = a.params;
            var d = this.$3.fetchCache(a);
            d = d.entries;
            return b("cometSearchTypeaheadDecorateMixedPayload")({
                entries: c,
                params: a
            }, {
                limit: this.$5,
                recentEntries: d
            })
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("SearchCometGlobalTypeaheadDataSourceWithCoronaVirusAlert", ["CometTypeaheadDataEntryWithMetaData", "SearchCometGlobalTypeaheadDataSource", "SearchCoronavirusGlobalTypeaheadStrings", "cometUniqueID"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b(b, c, d) {
            return a.call(this, b, c, d) || this
        }
        var c = b.prototype;
        c.fetchCache = function(b) {
            var c = b.query;
            return c === "" ? g(a.prototype.fetchCache.call(this, b)) : a.prototype.fetchCache.call(this, b)
        }
        ;
        c.fetchNetwork = function(b) {
            var c = b.query;
            return c === "" ? a.prototype.fetchNetwork.call(this, b).then(function(a) {
                return g(a)
            }) : a.prototype.fetchNetwork.call(this, b)
        }
        ;
        return b
    }(b("SearchCometGlobalTypeaheadDataSource"));
    e.exports = a;
    function g(a) {
        var c = a.entries;
        a = a.params;
        return {
            entries: [new (b("CometTypeaheadDataEntryWithMetaData"))({
                key: b("cometUniqueID")(),
                label: String(b("SearchCoronavirusGlobalTypeaheadStrings").GLOBAL_TYPEAHEAD_ENTRY),
                metaData: {
                    markers: new Set(["keyword", "alert_coronavirus"])
                },
                rawData: {
                    type: "temp"
                }
            })].concat(c),
            params: a
        }
    }
}
), null);
__d("SearchCometGlobalTypeaheadInputStrategy.react", ["CometSearchEventEmitterContext", "CometSearchTypeaheadBaseInputRoundedStrategy.react", "React", "useCometSearchTypeaheadBaseInputRefs"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a, c) {
        var d = a.onChange;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["onChange"]);
        var e = g.useContext(b("CometSearchEventEmitterContext"))
          , f = e.subscribeToGlobalTypeaheadFocus;
        e = b("useCometSearchTypeaheadBaseInputRefs")(c);
        c = e.composedRef;
        e = e.inputRef;
        var h = e.current;
        g.useEffect(function() {
            var a = f(function() {
                if (h == null)
                    return;
                h.value = "";
                h.focus();
                d("")
            });
            return a
        }, [h, d, f]);
        return g.jsx(b("CometSearchTypeaheadBaseInputRoundedStrategy.react"), babelHelpers["extends"]({}, a, {
            onChange: d,
            ref: c
        }))
    }
    c = g.forwardRef(a);
    e.exports = c
}
), null);
__d("SearchCometGlobalTypeaheadLayoutContextualStrategy.react", ["CometSearchTypeaheadBaseProgressGlimmer.react", "CometSearchTypeaheadInternalLayoutInlineStrategy.react", "React", "useCometSearchInternalTypeaheadFetch", "useCometSearchInternalTypeaheadState", "useCometSearchTypeaheadBaseInputRefs", "useCometSearchTypeaheadInternalLayoutContextualStrategyHandlers", "useSearchCometGlobalTypeaheadStyles", "useSearchCometTypeaheadBaseLayoutStrategyARIAProps"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a, c) {
        var d = a.extraLayoutProps;
        d = d === void 0 ? {} : d;
        var e = d.afterViewContent;
        d = d.beforeViewContent;
        var f = a.helperText
          , h = a.label
          , i = a.onAbandonTypeahead_DO_NOT_USE
          , j = a.onBlur
          , k = a.onChange
          , l = a.onClick
          , m = a.onDownArrow
          , n = a.onEnter
          , o = a.onEscape
          , p = a.onHighlightEntry
          , q = a.onOutsideClick
          , r = a.onPressEntry
          , s = a.onShiftTab
          , t = a.onTab
          , u = a.onUpArrow
          , v = a.xstyles;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["extraLayoutProps", "helperText", "label", "onAbandonTypeahead_DO_NOT_USE", "onBlur", "onChange", "onClick", "onDownArrow", "onEnter", "onEscape", "onHighlightEntry", "onOutsideClick", "onPressEntry", "onShiftTab", "onTab", "onUpArrow", "xstyles"]);
        var w = b("useCometSearchInternalTypeaheadState")()
          , x = w.activeEntries
          , y = w.highlightedEntry;
        w = w.isOpened;
        var z = b("useCometSearchInternalTypeaheadFetch")();
        z = z.isLoading;
        c = b("useCometSearchTypeaheadBaseInputRefs")(c);
        var A = c.composedRef;
        c = c.inputRef;
        v = (v = v) != null ? v : b("useSearchCometGlobalTypeaheadStyles")();
        c = b("useCometSearchTypeaheadInternalLayoutContextualStrategyHandlers")({
            inputRef: c,
            onAbandonTypeahead_DO_NOT_USE: i,
            onBlur: j,
            onChange: k,
            onClick: l,
            onDownArrow: m,
            onEnter: n,
            onEscape: o,
            onHighlightEntry: p,
            onOutsideClick: q,
            onPressEntry: r,
            onShiftTab: s,
            onTab: t,
            onUpArrow: u
        });
        i = b("useSearchCometTypeaheadBaseLayoutStrategyARIAProps")({
            activeEntries: x,
            helperText: f,
            highlightedEntry: y,
            inputLabel: h,
            isOpened: w
        });
        return g.jsx(b("CometSearchTypeaheadInternalLayoutInlineStrategy.react"), babelHelpers["extends"]({}, a, c, {
            extraLayoutProps: {
                afterViewContent: e,
                ariaProps: i,
                beforeViewContent: d,
                helperTextComponent: null,
                isOpened: w,
                loadingIndicator: z && x.length === 0 ? g.jsx(b("CometSearchTypeaheadBaseProgressGlimmer.react"), {}) : null
            },
            ref: A,
            xstyles: v
        }))
    }
    c = g.forwardRef(a);
    e.exports = c
}
), null);
__d("CometSearchTypeaheadBaseStructuredDirectNavKeywordViewItem.react", ["CometImageIcon.react", "CometSearchTypeaheadBaseHighlight.react", "CometSearchTypeaheadBaseViewItem.react", "React", "TetraTextPairing.react"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c, d = a.entry, e = a.isActive, f = a.queryString;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["entry", "isActive", "queryString"]);
        var h = (c = d.getRawData().structuredInfo) == null ? void 0 : c.direct_nav_result;
        return g.jsx(b("CometSearchTypeaheadBaseViewItem.react"), babelHelpers["extends"]({}, a, {
            entry: d,
            isActive: e,
            itemStartContent: g.jsx(b("CometImageIcon.react"), {
                size: 36,
                src: (c = h == null ? void 0 : h.img_url) != null ? c : ""
            }),
            children: g.jsx(b("CometSearchTypeaheadBaseHighlight.react"), {
                content: (a = h == null ? void 0 : h.title) != null ? a : "",
                query: f,
                strategy: "non-match",
                children: function(a) {
                    return g.jsx(b("TetraTextPairing.react"), {
                        body: a,
                        level: 3,
                        meta: h == null ? void 0 : h.snippet
                    })
                }
            })
        }))
    }
}
), null);
__d("CometSearchTypeaheadBaseStructuredDisambiguationKeywordViewItem.react", ["ix", "CometSearchTypeaheadBaseHighlight.react", "CometSearchTypeaheadBaseViewItem.react", "React", "TetraIcon.react", "TetraTextPairing.react", "fbicon", "recoverableViolation", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h, i = b("React");
    function a(a) {
        var c, d, e = a.entry, f = a.isActive, j = a.queryString;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["entry", "isActive", "queryString"]);
        c = (c = e.getRawData().structuredInfo) == null ? void 0 : c.disambiguation_result;
        d = c == null ? void 0 : (d = c.disambiguation_info_list) == null ? void 0 : d[0];
        var k = c == null ? void 0 : c.title
          , l = d == null ? void 0 : d.text;
        (c == null || l == null) && b("recoverableViolation")("We were trying to show disambiguation result, but had missing data", "search");
        return i.jsx(b("CometSearchTypeaheadBaseViewItem.react"), babelHelpers["extends"]({}, a, {
            entry: e,
            isActive: f,
            itemStartContent: i.jsx("div", {
                className: (h || (h = b("stylex"))).dedupe({
                    "align-items-1": "bp9cbjyn",
                    "background-color-1": "qsy8amke",
                    "border-top-start-radius-1": "n00je7tq",
                    "border-top-end-radius-1": "arfg74bv",
                    "border-bottom-end-radius-1": "qs9ysxi8",
                    "border-bottom-start-radius-1": "k77z8yql",
                    "display-1": "j83agx80",
                    "height-1": "tv7at329",
                    "justify-content-1": "taijpn5t",
                    "width-1": "thwo4zme"
                }, f ? {
                    "background-color-1": "cwj9ozl2"
                } : null),
                children: i.jsx(b("TetraIcon.react"), {
                    color: "secondary",
                    icon: b("fbicon")._(g("491282"), 16),
                    size: 16
                })
            }),
            children: i.jsx(b("CometSearchTypeaheadBaseHighlight.react"), {
                content: k,
                query: j,
                strategy: "non-match",
                children: function(a) {
                    return i.jsx(b("TetraTextPairing.react"), {
                        body: a,
                        level: 3,
                        meta: l
                    })
                }
            })
        }))
    }
}
), null);
__d("CometSearchTypeaheadBaseStructuredHighConfidenceKeywordViewItem.react", ["ix", "CometImageIcon.react", "CometSearchTypeaheadBaseHighlight.react", "CometSearchTypeaheadBaseViewItem.react", "React", "TetraIcon.react", "TetraTextPairing.react", "fbicon", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h, i = b("React"), j = !0;
    function a(a) {
        var c, d = a.entry, e = a.isActive, f = a.queryString;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["entry", "isActive", "queryString"]);
        var k = (c = d.getRawData().structuredInfo) == null ? void 0 : c.high_confidence_result;
        return i.jsx(b("CometSearchTypeaheadBaseViewItem.react"), babelHelpers["extends"]({}, a, {
            entry: d,
            isActive: e,
            itemEndContent: j ? i.jsx(b("CometImageIcon.react"), {
                size: 36,
                src: (c = k == null ? void 0 : k.picture_url) != null ? c : "",
                style: "roundedRect"
            }) : null,
            itemStartContent: j ? i.jsx("div", {
                className: (h || (h = b("stylex"))).dedupe({
                    "align-items-1": "bp9cbjyn",
                    "background-color-1": "qsy8amke",
                    "border-top-start-radius-1": "n00je7tq",
                    "border-top-end-radius-1": "arfg74bv",
                    "border-bottom-end-radius-1": "qs9ysxi8",
                    "border-bottom-start-radius-1": "k77z8yql",
                    "display-1": "j83agx80",
                    "height-1": "tv7at329",
                    "justify-content-1": "taijpn5t",
                    "width-1": "thwo4zme"
                }, e ? {
                    "background-color-1": "cwj9ozl2"
                } : null),
                children: i.jsx(b("TetraIcon.react"), {
                    color: "secondary",
                    icon: b("fbicon")._(g("491282"), 16),
                    size: 16
                })
            }) : i.jsx(b("CometImageIcon.react"), {
                size: 36,
                src: (a = k == null ? void 0 : k.picture_url) != null ? a : ""
            }),
            children: i.jsx(b("CometSearchTypeaheadBaseHighlight.react"), {
                content: (d = k == null ? void 0 : k.text) != null ? d : "",
                query: f,
                strategy: "non-match",
                children: function(a) {
                    return i.jsx(b("TetraTextPairing.react"), {
                        body: a,
                        level: 3,
                        meta: k == null ? void 0 : k.snippet
                    })
                }
            })
        }))
    }
}
), null);
__d("SearchCometHashtagExperiments", ["gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    f.hasTypeaheadRedirection = a;
    function a() {
        return b("gkx")("1570865")
    }
}
), null);
__d("useSearchCometGlobalTypeaheadURLBuilderForKeywordEntry", ["SearchCometHashtagExperiments", "SearchCometHashtagUtil", "gkx", "useSearchCometGlobalSERPRouteUrlBuilder", "useSearchCometGlobalTypeaheadEntityBootstrap", "useSearchCometHashtagRouteUrlBuilder"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        var c = a.shouldGenerateBootstrapEntityModuleParamsForQuery
          , d = b("useSearchCometGlobalSERPRouteUrlBuilder")()
          , e = b("useSearchCometHashtagRouteUrlBuilder")();
        a = b("useSearchCometGlobalTypeaheadEntityBootstrap")();
        var f = a.getParamsForQuery;
        return function(a) {
            var g = a.entry
              , h = a.queryString;
            a = a.typeaheadSessionID;
            var i = g.getLabel()
              , j = g.getMetaData();
            j = j == null ? void 0 : j.markers;
            var k = j != null && j.has("entity")
              , l = b("SearchCometHashtagUtil").getHashtagTag(i);
            if (b("SearchCometHashtagExperiments").hasTypeaheadRedirection() && l != null && !j.has("see_all"))
                return e({
                    entryPointAction: "SEARCH_BOX",
                    exploreEntryPoint: h === "" ? 3 : 4,
                    hashtag: l,
                    typeaheadSessionID: a
                });
            else {
                l = c && !k ? (h = f(i)) != null ? h : {} : {};
                k = l.highConfidenceResult;
                h = l.preloadedEntityIDs;
                l = l.preloadedEntityType;
                k = k;
                if (b("gkx")("1737296")) {
                    g = g.getRawData();
                    if (g.type === "keyword" && j.has("high_confidence")) {
                        j = (j = g.structuredInfo) == null ? void 0 : (g = j.high_confidence_result) == null ? void 0 : g.id;
                        j != null && (k = {
                            id: j,
                            source: "TYPEAHEAD_PAGE_MARKER"
                        })
                    }
                }
                return d({
                    entryPointAction: "SEARCH_BOX",
                    highConfidenceResult: k,
                    preloadedEntityIDs: h,
                    preloadedEntityType: l,
                    query: i,
                    typeaheadSessionID: a
                })
            }
        }
    }
}
), null);
__d("useSearchCometGlobalTypeaheadKeywordViewItemLinkProps", ["React", "useSearchCometGlobalTypeaheadURLBuilderForKeywordEntry"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.entry
          , d = a.queryString
          , e = b("useSearchCometGlobalTypeaheadURLBuilderForKeywordEntry")({
            shouldGenerateBootstrapEntityModuleParamsForQuery: !1
        });
        return g.useMemo(function() {
            return {
                preventLocalNavigation: !0,
                url: e({
                    entry: c,
                    queryString: d
                })
            }
        }, [e, c, d])
    }
}
), null);
__d("SearchCometGlobalTypeaheadEchoViewItem.react", ["CometSearchTypeaheadBaseEchoViewItem.react", "React", "useSearchCometGlobalTypeaheadKeywordViewItemLinkProps"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.entry
          , d = a.queryString;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["entry", "queryString"]);
        var e = b("useSearchCometGlobalTypeaheadKeywordViewItemLinkProps")({
            entry: c,
            queryString: d
        });
        return g.jsx(b("CometSearchTypeaheadBaseEchoViewItem.react"), babelHelpers["extends"]({}, a, {
            entry: c,
            linkProps: e,
            queryString: d
        }))
    }
}
), null);
__d("SearchCometGlobalTypeaheadNullstateKeywordViewItem.react", ["CometSearchTypeaheadBaseSurfaceRecentViewItem.react", "React", "useSearchCometGlobalTypeaheadKeywordViewItemLinkProps"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.entry
          , d = a.queryString;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["entry", "queryString"]);
        var e = b("useSearchCometGlobalTypeaheadKeywordViewItemLinkProps")({
            entry: c,
            queryString: d
        });
        return g.jsx(b("CometSearchTypeaheadBaseSurfaceRecentViewItem.react"), babelHelpers["extends"]({}, a, {
            entry: c,
            linkProps: e,
            queryString: d
        }))
    }
}
), null);
__d("SearchCometGlobalTypeaheadSeeAllViewItem.react", ["CometSearchTypeaheadBaseSeeAllViewItem.react", "React", "useSearchCometGlobalTypeaheadKeywordViewItemLinkProps"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.entry
          , d = a.queryString;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["entry", "queryString"]);
        var e = b("useSearchCometGlobalTypeaheadKeywordViewItemLinkProps")({
            entry: c,
            queryString: d
        });
        return g.jsx(b("CometSearchTypeaheadBaseSeeAllViewItem.react"), babelHelpers["extends"]({}, a, {
            entry: c,
            linkProps: e,
            queryString: d
        }))
    }
}
), null);
__d("SearchCometGlobalTypeaheadTypedKeywordViewItem.react", ["CometSearchTypeaheadBaseKeywordViewItem.react", "React", "useSearchCometGlobalTypeaheadKeywordViewItemLinkProps"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.entry
          , d = a.queryString;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["entry", "queryString"]);
        var e = b("useSearchCometGlobalTypeaheadKeywordViewItemLinkProps")({
            entry: c,
            queryString: d
        });
        return g.jsx(b("CometSearchTypeaheadBaseKeywordViewItem.react"), babelHelpers["extends"]({}, a, {
            entry: c,
            linkProps: e,
            queryString: d
        }))
    }
}
), null);
__d("SearchCometGlobalTypeaheadTypedRecentKeywordViewItem.react", ["CometSearchTypeaheadBaseRecentViewItem.react", "React", "useSearchCometGlobalTypeaheadKeywordViewItemLinkProps"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.entry
          , d = a.queryString;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["entry", "queryString"]);
        var e = b("useSearchCometGlobalTypeaheadKeywordViewItemLinkProps")({
            entry: c,
            queryString: d
        });
        return g.jsx(b("CometSearchTypeaheadBaseRecentViewItem.react"), babelHelpers["extends"]({}, a, {
            entry: c,
            linkProps: e,
            queryString: d
        }))
    }
}
), null);
__d("cometSearchTypeaheadStructuredDirectNavKeywordViewItem.resolver", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        a = a.getMetaData();
        a = a.markers;
        return a.has("keyword") && a.has("direct_nav")
    }
}
), null);
__d("cometSearchTypeaheadStructuredDisambiguationKeywordViewItem.resolver", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        a = a.getMetaData();
        a = a.markers;
        return a.has("keyword") && a.has("disambiguation")
    }
}
), null);
__d("cometSearchTypeaheadStructuredHighConfidenceKeywordViewItem.resolver", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        a = a.getMetaData();
        a = a.markers;
        return a.has("keyword") && a.has("high_confidence")
    }
}
), null);
__d("SearchCometGlobalTypeaheadViewItemResolver.react", ["fbt", "CometSearchTypeaheadBaseStructuredDirectNavKeywordViewItem.react", "CometSearchTypeaheadBaseStructuredDisambiguationKeywordViewItem.react", "CometSearchTypeaheadBaseStructuredHighConfidenceKeywordViewItem.react", "CometSearchTypeaheadBaseSurfaceRecentEntityViewItem.react", "CometSearchTypeaheadBaseViewItemResolver.react", "React", "SearchCometGlobalTypeaheadEchoViewItem.react", "SearchCometGlobalTypeaheadNullstateKeywordViewItem.react", "SearchCometGlobalTypeaheadSeeAllViewItem.react", "SearchCometGlobalTypeaheadTypedKeywordViewItem.react", "SearchCometGlobalTypeaheadTypedRecentKeywordViewItem.react", "cometSearchTypeaheadEchoViewItem.resolver", "cometSearchTypeaheadKeywordViewItem.resolver", "cometSearchTypeaheadRecentEntityViewItem.resolver", "cometSearchTypeaheadRecentKeywordViewItem.resolver", "cometSearchTypeaheadRecentViewItem.resolver", "cometSearchTypeaheadSeeAllViewItem.resolver", "cometSearchTypeaheadStructuredDirectNavKeywordViewItem.resolver", "cometSearchTypeaheadStructuredDisambiguationKeywordViewItem.resolver", "cometSearchTypeaheadStructuredHighConfidenceKeywordViewItem.resolver", "qex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a(a) {
        var c = a.children;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["children"]);
        var d = h.useMemo(function() {
            return i()
        }, []);
        return h.jsx(b("CometSearchTypeaheadBaseViewItemResolver.react"), babelHelpers["extends"]({}, a, {
            entryMappings: d,
            children: c
        }))
    }
    function i() {
        var a = b("qex")._("1734201") || !1
          , c = b("qex")._("1734202") || !1
          , d = b("qex")._("1747778") || !1;
        return [a ? {
            resolver: b("cometSearchTypeaheadStructuredDirectNavKeywordViewItem.resolver"),
            viewItem: function(a) {
                var c = a.entry;
                a = babelHelpers.objectWithoutPropertiesLoose(a, ["entry"]);
                return b("CometSearchTypeaheadBaseStructuredDirectNavKeywordViewItem.react")(babelHelpers["extends"]({
                    entry: c
                }, a))
            }
        } : null, c ? {
            resolver: b("cometSearchTypeaheadStructuredHighConfidenceKeywordViewItem.resolver"),
            viewItem: function(a) {
                var c = a.entry;
                a = babelHelpers.objectWithoutPropertiesLoose(a, ["entry"]);
                return b("CometSearchTypeaheadBaseStructuredHighConfidenceKeywordViewItem.react")(babelHelpers["extends"]({
                    entry: c
                }, a))
            }
        } : null, d ? {
            resolver: b("cometSearchTypeaheadStructuredDisambiguationKeywordViewItem.resolver"),
            viewItem: function(a) {
                var c = a.entry;
                a = babelHelpers.objectWithoutPropertiesLoose(a, ["entry"]);
                return b("CometSearchTypeaheadBaseStructuredDisambiguationKeywordViewItem.react")(babelHelpers["extends"]({
                    entry: c
                }, a))
            }
        } : null, {
            resolver: b("cometSearchTypeaheadEchoViewItem.resolver"),
            viewItem: b("SearchCometGlobalTypeaheadEchoViewItem.react")
        }, {
            resolver: b("cometSearchTypeaheadSeeAllViewItem.resolver"),
            viewItem: b("SearchCometGlobalTypeaheadSeeAllViewItem.react"),
            viewItemProps: {
                placeholderBuilder: j
            }
        }, {
            resolver: b("cometSearchTypeaheadRecentKeywordViewItem.resolver"),
            viewItem: b("SearchCometGlobalTypeaheadTypedRecentKeywordViewItem.react")
        }, {
            resolver: b("cometSearchTypeaheadRecentEntityViewItem.resolver"),
            viewItem: function(a) {
                var c, d = a.entry;
                a = babelHelpers.objectWithoutPropertiesLoose(a, ["entry"]);
                return ((c = d.getRawData()) == null ? void 0 : c.type) === "recent" ? b("CometSearchTypeaheadBaseSurfaceRecentEntityViewItem.react")(babelHelpers["extends"]({
                    entry: d
                }, a)) : null
            }
        }, {
            resolver: b("cometSearchTypeaheadRecentViewItem.resolver"),
            viewItem: b("SearchCometGlobalTypeaheadNullstateKeywordViewItem.react")
        }, {
            resolver: b("cometSearchTypeaheadKeywordViewItem.resolver"),
            viewItem: b("SearchCometGlobalTypeaheadTypedKeywordViewItem.react")
        }].filter(Boolean)
    }
    function j(a) {
        return g._("T\u00ecm ki\u1ebfm {=[query]}", [g._param("=[query]", h.jsx("strong", {
            children: g._("{query}", [g._param("query", a)])
        }))])
    }
}
), null);
__d("SearchCometGlobalTypeaheadViewItem.react", ["React", "SearchCometGlobalTypeaheadViewItemResolver.react"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.entry
          , d = babelHelpers.objectWithoutPropertiesLoose(a, ["entry"]);
        return g.jsx(b("SearchCometGlobalTypeaheadViewItemResolver.react"), {
            entry: c,
            children: function(a) {
                return g.jsx(a, babelHelpers["extends"]({}, d, {
                    entry: c
                }))
            }
        })
    }
}
), null);
__d("SearchCometGlobalTypeaheadViewStrategy.react", ["fbt", "CometSearchTypeaheadBaseViewList.react", "CometSearchTypeaheadBaseViewRecentEmptyState.react", "FocusInertRegion.react", "React", "SearchCometGlobalTypeaheadViewItem.react", "SearchCoronavirusGlobalTypeaheadStrings", "TetraUnitHeader.react", "focusScopeQueries", "gkx", "stylex", "XCometActivityLogControllerRouteBuilder"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a(a) {
        var c = a.entries;
        a.extraViewProps;
        var d = a.highlightedEntry
          , e = a.onAbandonTypeahead_DO_NOT_USE
          , f = a.queryString
          , i = babelHelpers.objectWithoutPropertiesLoose(a, ["entries", "extraViewProps", "highlightedEntry", "onAbandonTypeahead_DO_NOT_USE", "queryString"]);
        a = b("XCometActivityLogControllerRouteBuilder");
        a = a.buildURL({
            category_key: "SEARCH",
            log_filter: "search",
            vanity: "me"
        });
        var j = f === "" && c.length > 0
          , k = c.some(function(a) {
            return a.getMetaData().markers.has("alert_coronavirus")
        })
          , l = null
          , m = [].concat(c);
        b("gkx")("1351659") && f === "" && k && (l = m.shift());
        return h.jsxs(b("FocusInertRegion.react"), {
            focusQuery: b("focusScopeQueries").tabbableScopeQuery,
            children: [l && h.jsxs(h.Fragment, {
                children: [h.jsx("div", {
                    className: "h676nmdw oi9244e8 bi6gxh9e",
                    children: h.jsx(b("TetraUnitHeader.react"), {
                        headline: b("SearchCoronavirusGlobalTypeaheadStrings").GLOBAL_TYPEAHEAD_SECTION_HEADER,
                        level: 3,
                        onActionPressIn: e,
                        paddingHorizontal: 0
                    })
                }), h.jsx(b("CometSearchTypeaheadBaseViewList.react"), {
                    entries: l ? [l] : [],
                    highlightedEntry: d,
                    children: function(a, c) {
                        return h.createElement(b("SearchCometGlobalTypeaheadViewItem.react"), babelHelpers["extends"]({}, i, {
                            entry: a,
                            isActive: c,
                            key: a.getKey(),
                            queryString: f
                        }))
                    }
                })]
            }), j && m.length > 0 ? h.jsx("div", {
                className: "h676nmdw oi9244e8 bi6gxh9e",
                children: h.jsx(b("TetraUnitHeader.react"), {
                    action: g._("Ch\u1ec9nh s\u1eeda"),
                    actionLinkProps: {
                        url: a
                    },
                    headline: g._("T\u00ecm ki\u1ebfm g\u1ea7n \u0111\u00e2y"),
                    level: 3,
                    onActionPress: e,
                    paddingHorizontal: 0
                })
            }) : null, h.jsx(b("CometSearchTypeaheadBaseViewList.react"), {
                entries: m,
                highlightedEntry: d,
                children: function(a, c) {
                    return h.createElement(b("SearchCometGlobalTypeaheadViewItem.react"), babelHelpers["extends"]({}, i, {
                        entry: a,
                        isActive: c,
                        key: a.getKey(),
                        queryString: f
                    }))
                }
            }), c.length === 0 && h.jsx(b("CometSearchTypeaheadBaseViewRecentEmptyState.react"), {})]
        })
    }
}
), null);
__d("withSearchCometGlobalTypeaheadCleanStateOnEntrySelection", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        return g.forwardRef(function(b, c) {
            var d = b.onChange
              , e = b.onPressEntry
              , f = b.shouldQueryStringUpdateFromSelectedEntryOnClick;
            f = f === void 0 ? !1 : f;
            b = babelHelpers.objectWithoutPropertiesLoose(b, ["onChange", "onPressEntry", "shouldQueryStringUpdateFromSelectedEntryOnClick"]);
            var h = g.useCallback(function(a) {
                var b = a.getRawData();
                b = b.type;
                var c = a.getMetaData();
                c = c.markers;
                b = b === "recent" && c.has("entity") || c.has("direct_nav");
                d(b ? "" : a.getLabel());
                e && e(a)
            }, [d, e]);
            return g.jsx(a, babelHelpers["extends"]({}, b, {
                onChange: d,
                onPressEntry: h,
                ref: c,
                shouldQueryStringUpdateFromSelectedEntryOnClick: f
            }))
        })
    }
}
), null);
__d("withSearchCometGlobalTypeaheadFocusKeyboardShortcut", ["React", "cometGetKeyCommandConfig", "useCometSearchInternalTypeaheadStateDispatcher", "useCometSearchTypeaheadBaseInputRefs", "useGlobalKeyCommands"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        return g.forwardRef(function(c, d) {
            c = babelHelpers["extends"]({}, c);
            d = b("useCometSearchTypeaheadBaseInputRefs")(d);
            var e = d.composedRef
              , f = d.inputRef;
            d = b("useCometSearchInternalTypeaheadStateDispatcher")();
            var h = d.dispatchIsOpened
              , i = g.useCallback(function() {
                f.current != null && (f.current.focus(),
                h(!0))
            }, [f, h]);
            d = g.useMemo(function() {
                return [b("cometGetKeyCommandConfig")("global", "search", i)]
            }, [i]);
            b("useGlobalKeyCommands")(d);
            return g.jsx(a, babelHelpers["extends"]({}, c, {
                ref: e
            }))
        })
    }
}
), null);
__d("SearchCometGlobalTypeahead.react", ["fbt", "Actor", "CometErrorBoundary.react", "CometRelay", "CometSearchTypeaheadBaseErrorFallback.react", "CometTypeahead.react", "Random", "React", "SearchCometGlobalTypeaheadDataSource", "SearchCometGlobalTypeaheadDataSourceWithCoronaVirusAlert", "SearchCometGlobalTypeaheadInputStrategy.react", "SearchCometGlobalTypeaheadLayoutContextualStrategy.react", "SearchCometGlobalTypeaheadViewStrategy.react", "SearchCometHashtagExperiments", "SearchCometHashtagUtil", "SearchCometResultsForcedOptInEventLogger", "gkx", "requireCond", "searchCometTypeaheadODSLogFocusEvent", "useCometSearchRecentDataSourceContextDecorator", "useCometSearchTypeaheadBaseNavigate", "useCometSearchTypeaheadLoggingProvider", "useCometSearchTypeaheadTraceProvider", "useCometTypeaheadBaseStateQueryString", "useSearchCometGlobalSERPRouteUrlBuilder", "useSearchCometGlobalTypeaheadEntityBootstrap", "useSearchCometGlobalTypeaheadURLBuilderForKeywordEntry", "useSearchCometHashtagRouteUrlBuilder", "useStable", "withSearchCometGlobalTypeaheadCleanStateOnEntrySelection", "withSearchCometGlobalTypeaheadFocusKeyboardShortcut", "withSearchCometTypeaheadBaseNavigationDecorator", "withSearchCometTypeaheadTraceEndReasonDecorator", "cr:1655034"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a(a) {
        var c = a.inputXStyle
          , d = a.onFocus
          , e = a.queryString;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["inputXStyle", "onFocus", "queryString"]);
        e = b("useCometTypeaheadBaseStateQueryString")(e);
        var f = e[0];
        e = e[1];
        var j = b("useSearchCometGlobalTypeaheadURLBuilderForKeywordEntry")({
            shouldGenerateBootstrapEntityModuleParamsForQuery: !0
        })
          , k = b("useSearchCometGlobalSERPRouteUrlBuilder")()
          , l = b("useSearchCometHashtagRouteUrlBuilder")()
          , m = b("useCometSearchTypeaheadBaseNavigate")()
          , n = b("Actor").useActor()
          , o = n[0]
          , p = b("useCometSearchTypeaheadLoggingProvider")("search_global");
        n = b("useCometSearchTypeaheadTraceProvider")(p);
        var q = b("CometRelay").useRelayEnvironment()
          , r = h.useMemo(function() {
            return b("gkx")("1351659") ? new (b("SearchCometGlobalTypeaheadDataSourceWithCoronaVirusAlert"))(b("cr:1655034"),o,q) : new (b("SearchCometGlobalTypeaheadDataSource"))(b("cr:1655034"),o,q)
        }, [o, q])
          , s = b("useSearchCometGlobalTypeaheadEntityBootstrap")()
          , t = s.getParamsForQuery
          , u = s.load
          , v = s.logLoadStatus
          , w = b("useCometSearchRecentDataSourceContextDecorator")(r);
        s = h.useMemo(function() {
            return [w, {
                decorate: b("withSearchCometGlobalTypeaheadFocusKeyboardShortcut")
            }]
        }, [w]);
        h.useEffect(function() {
            r.bootstrap()
        }, [r]);
        var x = h.useCallback(function() {
            var a = 2;
            b("Random").coinflip(a) && b("searchCometTypeaheadODSLogFocusEvent")("comet.ta_global_event_focus", !0, a);
            b("SearchCometResultsForcedOptInEventLogger").log("ta_focus", !0);
            u();
            d && d()
        }, [u, d])
          , y = h.useCallback(function(a) {
            b("SearchCometResultsForcedOptInEventLogger").log("ta_click", !0);
            var c = a.getMetaData();
            c = c == null ? void 0 : c.markers;
            var d = c != null && c.has("entity");
            c = c != null && c.has("direct_nav");
            v();
            var e = j({
                entry: a,
                queryString: f,
                typeaheadSessionID: p.getSessionID()
            });
            a = i(a, e, d, c);
            m(a, d ? "pushview" : "tabview")
        }, [v, p, m, f, j])
          , z = h.useCallback(function(a) {
            var c;
            b("SearchCometResultsForcedOptInEventLogger").log("ta_click", !0);
            c = (c = t(a)) != null ? c : {};
            var d = c.preloadedEntityIDs;
            c = c.preloadedEntityType;
            v();
            var e = b("SearchCometHashtagUtil").getHashtagTag(a);
            b("SearchCometHashtagExperiments").hasTypeaheadRedirection() && e != null ? e = l({
                entryPointAction: "SEARCH_BOX",
                exploreEntryPoint: f === "" ? 3 : 4,
                hashtag: e,
                typeaheadSessionID: p.getSessionID()
            }) : e = k({
                entryPointAction: "SEARCH_BOX",
                preloadedEntityIDs: d,
                preloadedEntityType: c,
                query: a,
                typeaheadSessionID: p.getSessionID()
            });
            m(e)
        }, [t, l, v, p, m, f, k])
          , A = b("useStable")(function() {
            return b("withSearchCometTypeaheadTraceEndReasonDecorator")(b("withSearchCometGlobalTypeaheadCleanStateOnEntrySelection")(b("withSearchCometTypeaheadBaseNavigationDecorator")(b("CometTypeahead.react"))))
        });
        return h.jsx(b("CometErrorBoundary.react"), {
            fallback: function() {
                return h.jsx(b("CometSearchTypeaheadBaseErrorFallback.react"), {})
            },
            children: h.jsx(A, babelHelpers["extends"]({}, a, {
                dataSource: r,
                decorators: s,
                inputExtraProps: {
                    hideIconOnFocus: !0,
                    size: "large",
                    xstyle: c
                },
                inputStartContent: a.inputStartContent,
                inputStrategyRenderer: b("SearchCometGlobalTypeaheadInputStrategy.react"),
                label: g._("T\u00ecm ki\u1ebfm tr\u00ean Facebook"),
                layoutStrategyRenderer: b("SearchCometGlobalTypeaheadLayoutContextualStrategy.react"),
                loggingProvider: p,
                onChange: e,
                onFocus: x,
                onPressEntry: y,
                onSelectFreeformQuery: z,
                placeholder: g._("T\u00ecm ki\u1ebfm tr\u00ean Facebook"),
                queryString: f,
                testid: void 0,
                traceProvider: n,
                viewStrategyRenderer: b("SearchCometGlobalTypeaheadViewStrategy.react")
            }))
        })
    }
    function i(a, b, c, d) {
        a = a.getRawData();
        var e;
        if (a != null && a.type === "recent" && c) {
            e = a == null ? void 0 : (c = a.profile) == null ? void 0 : c.url
        }
        if (a != null && a.type === "keyword" && d) {
            e = a == null ? void 0 : (c = a.structuredInfo) == null ? void 0 : (d = c.direct_nav_result) == null ? void 0 : d.link_url
        }
        return (a = e) != null ? a : b
    }
}
), null);
