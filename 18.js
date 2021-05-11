if (self.CavalryLogger) {
    CavalryLogger.start_js(["yAZlk"]);
}

__d("XCometCreateAdControllerRouteBuilder", ["jsRouteBuilder"], (function(a, b, c, d, e, f) {
    a = b("jsRouteBuilder")("/ads/create/", Object.freeze({}), void 0);
    c = a;
    e.exports = c
}
), null);
__d("XCometPrivacyCheckupControllerRouteBuilder", ["jsRouteBuilder"], (function(a, b, c, d, e, f) {
    a = b("jsRouteBuilder")("/privacy/checkup/", Object.freeze({
        source: "unknown"
    }), void 0);
    c = a;
    e.exports = c
}
), null);
__d("XLogoutControllerRouteBuilder", ["jsRouteBuilder"], (function(a, b, c, d, e, f) {
    a = b("jsRouteBuilder")("/logout.php", Object.freeze({}), void 0);
    c = a;
    e.exports = c
}
), null);
__d("AppLastUsedTimestampsFetcherQuery.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "bookmarkIDs"
        }]
          , b = [{
            kind: "Variable",
            name: "bookmark_ids",
            variableName: "bookmarkIDs"
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
            name: "last_used_timestamp",
            storageKey: null
        };
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "AppLastUsedTimestampsFetcherQuery",
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
                                    selections: [c],
                                    storageKey: null
                                }, d],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
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
                name: "AppLastUsedTimestampsFetcherQuery",
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
                                    }, c],
                                    storageKey: null
                                }, d, c],
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
                id: "4663858110298582",
                metadata: {},
                name: "AppLastUsedTimestampsFetcherQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("CometLogoutHandlerQuery.graphql", ["relay-runtime"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "logout_whitelist",
            storageKey: null
        }
          , b = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "logout_hash",
            storageKey: null
        }
          , c = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "has_confirmed_contactpoints",
            storageKey: null
        }
          , d = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null
        }
          , e = [d]
          , f = {
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
                name: "CometLogoutHandlerQuery",
                selections: [a, {
                    alias: null,
                    args: null,
                    concreteType: "Viewer",
                    kind: "LinkedField",
                    name: "viewer",
                    plural: !1,
                    selections: [b, {
                        alias: null,
                        args: null,
                        concreteType: "User",
                        kind: "LinkedField",
                        name: "account_user",
                        plural: !1,
                        selections: [c, {
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: "LinkedField",
                            name: "pending_contactpoints",
                            plural: !0,
                            selections: [{
                                kind: "InlineFragment",
                                selections: e,
                                type: "PendingEmail",
                                abstractKey: null
                            }, {
                                kind: "InlineFragment",
                                selections: e,
                                type: "PhoneNumber",
                                abstractKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
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
                name: "CometLogoutHandlerQuery",
                selections: [a, {
                    alias: null,
                    args: null,
                    concreteType: "Viewer",
                    kind: "LinkedField",
                    name: "viewer",
                    plural: !1,
                    selections: [b, {
                        alias: null,
                        args: null,
                        concreteType: "User",
                        kind: "LinkedField",
                        name: "account_user",
                        plural: !1,
                        selections: [c, {
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: "LinkedField",
                            name: "pending_contactpoints",
                            plural: !0,
                            selections: [d, {
                                kind: "InlineFragment",
                                selections: [f],
                                type: "Node",
                                abstractKey: "__isNode"
                            }],
                            storageKey: null
                        }, f],
                        storageKey: null
                    }],
                    storageKey: null
                }]
            },
            params: {
                id: "3683275191691115",
                metadata: {
                    relayPreloadable: !0
                },
                name: "CometLogoutHandlerQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    a.params.id != null && b("relay-runtime").PreloadableQueryRegistry.set(a.params.id, a);
    e.exports = a
}
), null);
__d("CometLoggedInAccountSwitcherPopoverMenuQuery$Parameters", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        kind: "PreloadableConcreteRequest",
        params: {
            id: "2641526332535377",
            metadata: {
                relayPreloadable: !0
            },
            name: "CometLoggedInAccountSwitcherPopoverMenuQuery",
            operationKind: "query",
            text: null
        }
    };
    e.exports = a
}
), null);
__d("CometLoggedInAccountSwitcher_query.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "CometLoggedInAccountSwitcher_query",
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
                kind: "ScalarField",
                name: "logout_hash",
                storageKey: null
            }, {
                alias: null,
                args: null,
                concreteType: "User",
                kind: "LinkedField",
                name: "account_user",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "short_name",
                    storageKey: null
                }],
                storageKey: null
            }, {
                alias: null,
                args: null,
                concreteType: "LoggedInAccountSwitcherAccount",
                kind: "LinkedField",
                name: "device_switchable_accounts",
                plural: !0,
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "User",
                    kind: "LinkedField",
                    name: "user",
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
                    args: null,
                    kind: "FragmentSpread",
                    name: "CometLoggedInAccountSwitcherRow_account"
                }, {
                    args: null,
                    kind: "FragmentSpread",
                    name: "CometLoggedInAccountSwitcherRowWithUpdateText_account"
                }],
                storageKey: null
            }],
            storageKey: null
        }, {
            args: null,
            kind: "FragmentSpread",
            name: "useCometLoggedInAccountSwitcherSubmitForm_query"
        }, {
            args: null,
            kind: "FragmentSpread",
            name: "CometLoggedInAccountSwitcherRow_query"
        }, {
            args: null,
            kind: "FragmentSpread",
            name: "CometLoggedInAccountSwitcherRowWithUpdateText_query"
        }],
        type: "Query",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("CometProfileSwitcherPagePublishingAuthorizationCard_query.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "CometProfileSwitcherPagePublishingAuthorizationCard_query",
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
                    kind: "InlineFragment",
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
                        name: "page_publishing_authorization_hub_action_url",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "TextWithEntities",
                        kind: "LinkedField",
                        name: "page_publishing_authorization_admin_notice",
                        plural: !1,
                        selections: [{
                            args: null,
                            kind: "FragmentSpread",
                            name: "CometTextWithEntitiesRelay_textWithEntities"
                        }],
                        storageKey: null
                    }],
                    type: "User",
                    abstractKey: null
                }],
                storageKey: null
            }],
            storageKey: null
        }],
        type: "Query",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("CometProfileSwitcher_query.graphql", [], (function(a, b, c, d, e, f) {
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
        }
          , c = {
            alias: null,
            args: [{
                kind: "Literal",
                name: "height",
                value: 40
            }, {
                kind: "Variable",
                name: "scale",
                variableName: "scale"
            }, {
                kind: "Literal",
                name: "width",
                value: 40
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
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "width",
                storageKey: null
            }, {
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
            }],
            storageKey: null
        }
          , d = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "unseen_update_count",
            storageKey: null
        };
        return {
            argumentDefinitions: [{
                kind: "RootArgument",
                name: "scale"
            }],
            kind: "Fragment",
            metadata: null,
            name: "CometProfileSwitcher_query",
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
                        kind: "InlineFragment",
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "UserProfileSwitcherEligibleProfilesConnection",
                            kind: "LinkedField",
                            name: "profile_switcher_eligible_profiles",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "ProfileSwitcherEligibleProfile",
                                kind: "LinkedField",
                                name: "nodes",
                                plural: !0,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "should_open_express_onboarding",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "User",
                                    kind: "LinkedField",
                                    name: "profile",
                                    plural: !1,
                                    selections: [a, b, c, d, {
                                        alias: null,
                                        args: [{
                                            kind: "Literal",
                                            name: "context_item_types",
                                            value: "FOLLOWER_COUNT"
                                        }, {
                                            kind: "Literal",
                                            name: "render_location",
                                            value: "PROFILE_PLUS_PREVIEW"
                                        }],
                                        concreteType: "TimelineContextListItemsConnection",
                                        kind: "LinkedField",
                                        name: "timeline_context_items",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "TimelineContextListItem",
                                            kind: "LinkedField",
                                            name: "nodes",
                                            plural: !0,
                                            selections: [{
                                                alias: null,
                                                args: null,
                                                concreteType: "TextWithEntities",
                                                kind: "LinkedField",
                                                name: "title",
                                                plural: !1,
                                                selections: [{
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "text",
                                                    storageKey: null
                                                }],
                                                storageKey: null
                                            }],
                                            storageKey: null
                                        }],
                                        storageKey: 'timeline_context_items(context_item_types:"FOLLOWER_COUNT",render_location:"PROFILE_PLUS_PREVIEW")'
                                    }],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }, a, b, c, d, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "is_failing_page_publishing_authorization",
                            storageKey: null
                        }],
                        type: "User",
                        abstractKey: null
                    }],
                    storageKey: null
                }],
                storageKey: null
            }, {
                args: null,
                kind: "FragmentSpread",
                name: "useProfileCometSwitcherCleanUpOnSwap_query"
            }, {
                args: null,
                kind: "FragmentSpread",
                name: "CometProfileSwitcherPagePublishingAuthorizationCard_query"
            }],
            type: "Query",
            abstractKey: null
        }
    }();
    e.exports = a
}
), null);
__d("CometSettingsDropdownHeader_viewer.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [{
            kind: "RootArgument",
            name: "scale"
        }],
        kind: "Fragment",
        metadata: null,
        name: "CometSettingsDropdownHeader_viewer",
        selections: [{
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "actor",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "name",
                storageKey: null
            }, {
                alias: "settings_dropdown_profile_picture",
                args: [{
                    kind: "Literal",
                    name: "height",
                    value: 60
                }, {
                    kind: "Variable",
                    name: "scale",
                    variableName: "scale"
                }, {
                    kind: "Literal",
                    name: "width",
                    value: 60
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
                storageKey: null
            }, {
                kind: "InlineFragment",
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "should_use_page_rename",
                    storageKey: null
                }, {
                    alias: "profileSwitcherEligibleProfiles",
                    args: null,
                    concreteType: "UserProfileSwitcherEligibleProfilesConnection",
                    kind: "LinkedField",
                    name: "profile_switcher_eligible_profiles",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "count",
                        storageKey: null
                    }],
                    storageKey: null
                }],
                type: "User",
                abstractKey: null
            }],
            storageKey: null
        }],
        type: "Viewer",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("CometSettingsDropdownListQuery.graphql", ["relay-runtime"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "inProfileSwitcherEntry"
        }
          , b = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "scale"
        }
          , c = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "count",
            storageKey: null
        }
          , d = {
            alias: "profileSwitcherEligibleProfiles",
            args: null,
            concreteType: "UserProfileSwitcherEligibleProfilesConnection",
            kind: "LinkedField",
            name: "profile_switcher_eligible_profiles",
            plural: !1,
            selections: [c],
            storageKey: null
        }
          , e = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "logout_whitelist",
            storageKey: null
        }
          , f = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null
        }
          , g = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        }
          , h = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "name",
            storageKey: null
        }
          , i = {
            kind: "Variable",
            name: "scale",
            variableName: "scale"
        }
          , j = [{
            kind: "Literal",
            name: "height",
            value: 60
        }, i, {
            kind: "Literal",
            name: "width",
            value: 60
        }]
          , k = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null
        }
          , l = [{
            kind: "Literal",
            name: "height",
            value: 36
        }, i, {
            kind: "Literal",
            name: "width",
            value: 36
        }]
          , m = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "width",
            storageKey: null
        }
          , n = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "height",
            storageKey: null
        }
          , o = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "scale",
            storageKey: null
        }
          , p = [k, m, n, o]
          , q = {
            alias: null,
            args: l,
            concreteType: "Image",
            kind: "LinkedField",
            name: "profile_picture",
            plural: !1,
            selections: p,
            storageKey: null
        }
          , r = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "unseen_update_count",
            storageKey: null
        }
          , s = [{
            kind: "Literal",
            name: "height",
            value: 40
        }, i, {
            kind: "Literal",
            name: "width",
            value: 40
        }]
          , t = {
            alias: null,
            args: s,
            concreteType: "Image",
            kind: "LinkedField",
            name: "profile_picture",
            plural: !1,
            selections: p,
            storageKey: null
        }
          , u = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "text",
            storageKey: null
        }
          , v = {
            alias: null,
            args: [{
                kind: "Literal",
                name: "context_item_types",
                value: "FOLLOWER_COUNT"
            }, {
                kind: "Literal",
                name: "render_location",
                value: "PROFILE_PLUS_PREVIEW"
            }],
            concreteType: "TimelineContextListItemsConnection",
            kind: "LinkedField",
            name: "timeline_context_items",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                concreteType: "TimelineContextListItem",
                kind: "LinkedField",
                name: "nodes",
                plural: !0,
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "TextWithEntities",
                    kind: "LinkedField",
                    name: "title",
                    plural: !1,
                    selections: [u],
                    storageKey: null
                }],
                storageKey: null
            }],
            storageKey: 'timeline_context_items(context_item_types:"FOLLOWER_COUNT",render_location:"PROFILE_PLUS_PREVIEW")'
        }
          , w = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "should_open_express_onboarding",
            storageKey: null
        }
          , x = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "length",
            storageKey: null
        }
          , y = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "offset",
            storageKey: null
        }
          , z = [{
            kind: "Literal",
            name: "delight_surface",
            value: "COMMENT"
        }]
          , A = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "value",
            storageKey: null
        }
          , B = {
            kind: "InlineFragment",
            selections: [g],
            type: "Node",
            abstractKey: "__isNode"
        }
          , C = {
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
        }
          , D = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "unread_notification_count",
            storageKey: null
        }
          , E = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "short_name",
            storageKey: null
        }
          , F = {
            alias: null,
            args: null,
            concreteType: "LoggedInAccountSwitcherAccountForm",
            kind: "LinkedField",
            name: "form",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "action",
                storageKey: null
            }, {
                alias: null,
                args: null,
                concreteType: "LoggedInAccountSwitcherAccountFormField",
                kind: "LinkedField",
                name: "inputs",
                plural: !0,
                selections: [h, A],
                storageKey: null
            }],
            storageKey: null
        }
          , G = [{
            kind: "Literal",
            name: "first",
            value: 1
        }];
        return {
            fragment: {
                argumentDefinitions: [a, b],
                kind: "Fragment",
                metadata: null,
                name: "CometSettingsDropdownListQuery",
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
                            kind: "InlineFragment",
                            selections: [d],
                            type: "User",
                            abstractKey: null
                        }],
                        storageKey: null
                    }, {
                        args: null,
                        kind: "FragmentSpread",
                        name: "CometSettingsDropdownHeader_viewer"
                    }, {
                        args: null,
                        kind: "FragmentSpread",
                        name: "CometSettingsDropdownSettingsAndPrivacy_viewer"
                    }, {
                        args: null,
                        kind: "FragmentSpread",
                        name: "CometSettingsDropdownInternationalization_viewer"
                    }],
                    storageKey: null
                }, e, {
                    args: null,
                    kind: "FragmentSpread",
                    name: "useCometCombinedProfileAccountSwitcherListCell_query"
                }, {
                    condition: "inProfileSwitcherEntry",
                    kind: "Condition",
                    passingValue: !0,
                    selections: [{
                        args: null,
                        kind: "FragmentSpread",
                        name: "useCometSettingsDropdownAdditionalProfileListCell_query"
                    }]
                }],
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: [b, a],
                kind: "Operation",
                name: "CometSettingsDropdownListQuery",
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
                        selections: [f, g, h, {
                            alias: "settings_dropdown_profile_picture",
                            args: j,
                            concreteType: "Image",
                            kind: "LinkedField",
                            name: "profile_picture",
                            plural: !1,
                            selections: [k],
                            storageKey: null
                        }, {
                            kind: "InlineFragment",
                            selections: [d, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "should_use_page_rename",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "username",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "PolyglotUserProgress",
                                kind: "LinkedField",
                                name: "polyglot_user_progress",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "inline_mode",
                                    storageKey: null
                                }, g],
                                storageKey: null
                            }, {
                                alias: "first_profiles",
                                args: [{
                                    kind: "Literal",
                                    name: "first",
                                    value: 2
                                }],
                                concreteType: "UserProfileSwitcherEligibleProfilesConnection",
                                kind: "LinkedField",
                                name: "profile_switcher_eligible_profiles",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "ProfileSwitcherEligibleProfile",
                                    kind: "LinkedField",
                                    name: "nodes",
                                    plural: !0,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "User",
                                        kind: "LinkedField",
                                        name: "profile",
                                        plural: !1,
                                        selections: [q, g],
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }],
                                storageKey: "profile_switcher_eligible_profiles(first:2)"
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "UserProfileSwitcherEligibleProfilesConnection",
                                kind: "LinkedField",
                                name: "profile_switcher_eligible_profiles",
                                plural: !1,
                                selections: [c, {
                                    alias: null,
                                    args: null,
                                    concreteType: "ProfileSwitcherEligibleProfile",
                                    kind: "LinkedField",
                                    name: "nodes",
                                    plural: !0,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "User",
                                        kind: "LinkedField",
                                        name: "profile",
                                        plural: !1,
                                        selections: [r, g, h, t, v],
                                        storageKey: null
                                    }, w],
                                    storageKey: null
                                }],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "page_publishing_authorization_hub_action_url",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "TextWithEntities",
                                kind: "LinkedField",
                                name: "page_publishing_authorization_admin_notice",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "DelightAtRange",
                                    kind: "LinkedField",
                                    name: "delight_ranges",
                                    plural: !0,
                                    selections: [x, y, {
                                        alias: null,
                                        args: null,
                                        concreteType: "TextDelightCampaign",
                                        kind: "LinkedField",
                                        name: "campaign",
                                        plural: !1,
                                        selections: [f, {
                                            alias: null,
                                            args: z,
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
                                            }, A],
                                            storageKey: 'delight_styles(delight_surface:"COMMENT")'
                                        }, {
                                            alias: null,
                                            args: z,
                                            concreteType: "DelightsAnimation",
                                            kind: "LinkedField",
                                            name: "delight_asset",
                                            plural: !1,
                                            selections: [g, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "animation_uri",
                                                storageKey: null
                                            }],
                                            storageKey: 'delight_asset(delight_surface:"COMMENT")'
                                        }, g],
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
                                    selections: [x, y, {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: "LinkedField",
                                        name: "entity_with_image",
                                        plural: !1,
                                        selections: [f, {
                                            alias: null,
                                            args: [i],
                                            concreteType: "Image",
                                            kind: "LinkedField",
                                            name: "image",
                                            plural: !1,
                                            selections: [n, o, k, m],
                                            storageKey: null
                                        }, B],
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
                                    selections: [x, y, {
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
                                    selections: [x, y, c, {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: "LinkedField",
                                        name: "sample_entities",
                                        plural: !0,
                                        selections: [f, {
                                            kind: "InlineFragment",
                                            selections: [g, h],
                                            type: "User",
                                            abstractKey: null
                                        }, B],
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
                                        selections: [f, {
                                            kind: "TypeDiscriminator",
                                            abstractKey: "__isEntity"
                                        }, {
                                            alias: null,
                                            args: [{
                                                kind: "Literal",
                                                name: "site",
                                                value: "comet"
                                            }],
                                            kind: "ScalarField",
                                            name: "url",
                                            storageKey: 'url(site:"comet")'
                                        }, {
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
                                            selections: [g, {
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
                                            }, g, {
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
                                                selections: [f, {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "url",
                                                    storageKey: null
                                                }, {
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
                                            selections: [C, {
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
                                            selections: [C, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "work_official_status",
                                                storageKey: null
                                            }],
                                            type: "Group",
                                            abstractKey: null
                                        }, B],
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "entity_is_weak_reference",
                                        storageKey: null
                                    }, x, y],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "ColorAtRange",
                                    kind: "LinkedField",
                                    name: "color_ranges",
                                    plural: !0,
                                    selections: [x, y, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "hex_rgb_color_with_pound_key",
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }, u],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "is_failing_page_publishing_authorization",
                                storageKey: null
                            }, t, r],
                            type: "User",
                            abstractKey: null
                        }],
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "is_eligible_for_account_level_settings",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "LoggedInAccountSwitcherAccount",
                        kind: "LinkedField",
                        name: "device_switchable_accounts",
                        plural: !0,
                        selections: [D, {
                            alias: null,
                            args: null,
                            concreteType: "User",
                            kind: "LinkedField",
                            name: "user",
                            plural: !1,
                            selections: [g, E, h, {
                                alias: null,
                                args: j,
                                concreteType: "Image",
                                kind: "LinkedField",
                                name: "profile_picture",
                                plural: !1,
                                selections: p,
                                storageKey: null
                            }, {
                                alias: "switcher_profile_picture",
                                args: s,
                                concreteType: "Image",
                                kind: "LinkedField",
                                name: "profile_picture",
                                plural: !1,
                                selections: p,
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "nonce",
                            storageKey: null
                        }, F],
                        storageKey: null
                    }, {
                        alias: "first_account",
                        args: G,
                        concreteType: "LoggedInAccountSwitcherAccount",
                        kind: "LinkedField",
                        name: "device_switchable_accounts",
                        plural: !0,
                        selections: [D, {
                            alias: null,
                            args: null,
                            concreteType: "User",
                            kind: "LinkedField",
                            name: "user",
                            plural: !1,
                            selections: [g, h, {
                                alias: null,
                                args: l,
                                concreteType: "Image",
                                kind: "LinkedField",
                                name: "profile_picture",
                                plural: !1,
                                selections: [o, n, m, k],
                                storageKey: null
                            }],
                            storageKey: null
                        }, F],
                        storageKey: "device_switchable_accounts(first:1)"
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "logout_hash",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "User",
                        kind: "LinkedField",
                        name: "account_user",
                        plural: !1,
                        selections: [E, g],
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "device_switchable_account_has_notification",
                        storageKey: null
                    }],
                    storageKey: null
                }, e, {
                    condition: "inProfileSwitcherEntry",
                    kind: "Condition",
                    passingValue: !0,
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
                                kind: "InlineFragment",
                                selections: [{
                                    alias: "first_profile",
                                    args: G,
                                    concreteType: "UserProfileSwitcherEligibleProfilesConnection",
                                    kind: "LinkedField",
                                    name: "profile_switcher_eligible_profiles",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "ProfileSwitcherEligibleProfile",
                                        kind: "LinkedField",
                                        name: "nodes",
                                        plural: !0,
                                        selections: [w, {
                                            alias: null,
                                            args: null,
                                            concreteType: "User",
                                            kind: "LinkedField",
                                            name: "profile",
                                            plural: !1,
                                            selections: [g, h, q, r, v],
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }],
                                    storageKey: "profile_switcher_eligible_profiles(first:1)"
                                }],
                                type: "User",
                                abstractKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }]
                }]
            },
            params: {
                id: "3114557815333936",
                metadata: {
                    relayPreloadable: !0
                },
                name: "CometSettingsDropdownListQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    a.params.id != null && b("relay-runtime").PreloadableQueryRegistry.set(a.params.id, a);
    e.exports = a
}
), null);
__d("CometSettingsDropdownQuickHelpQuery.graphql", ["relay-runtime"], (function(a, b, c, d, e, f) {
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
                concreteType: "User",
                kind: "LinkedField",
                name: "account_user",
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
        }];
        return {
            fragment: {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "CometSettingsDropdownQuickHelpQuery",
                selections: a,
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: [],
                kind: "Operation",
                name: "CometSettingsDropdownQuickHelpQuery",
                selections: a
            },
            params: {
                id: "2775132975915116",
                metadata: {
                    relayPreloadable: !0
                },
                name: "CometSettingsDropdownQuickHelpQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    a.params.id != null && b("relay-runtime").PreloadableQueryRegistry.set(a.params.id, a);
    e.exports = a
}
), null);
__d("CometSettingsDropdownSettingsAndPrivacy_viewer.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "CometSettingsDropdownSettingsAndPrivacy_viewer",
        selections: [{
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "actor",
            plural: !1,
            selections: [{
                kind: "InlineFragment",
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
                    name: "username",
                    storageKey: null
                }],
                type: "User",
                abstractKey: null
            }],
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_eligible_for_account_level_settings",
            storageKey: null
        }],
        type: "Viewer",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("CometLoggedInAccountSwitcherAccountForm_form.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "CometLoggedInAccountSwitcherAccountForm_form",
        selections: [{
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "action",
            storageKey: null
        }, {
            alias: null,
            args: null,
            concreteType: "LoggedInAccountSwitcherAccountFormField",
            kind: "LinkedField",
            name: "inputs",
            plural: !0,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "name",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "value",
                storageKey: null
            }],
            storageKey: null
        }],
        type: "LoggedInAccountSwitcherAccountForm",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("CometLoggedInAccountSwitcherRemoveAccountMutation.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "id"
        }, {
            defaultValue: null,
            kind: "LocalArgument",
            name: "nonce"
        }]
          , b = [{
            alias: null,
            args: [{
                kind: "Variable",
                name: "account_id",
                variableName: "id"
            }, {
                kind: "Variable",
                name: "nonce",
                variableName: "nonce"
            }],
            concreteType: "RemoveAccountFromLoggedInAccountSwitcherResponsePayload",
            kind: "LinkedField",
            name: "remove_account_from_logged_in_account_switcher",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "__typename",
                storageKey: null
            }],
            storageKey: null
        }];
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "CometLoggedInAccountSwitcherRemoveAccountMutation",
                selections: b,
                type: "Mutation",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "CometLoggedInAccountSwitcherRemoveAccountMutation",
                selections: b
            },
            params: {
                id: "2760827663935516",
                metadata: {},
                name: "CometLoggedInAccountSwitcherRemoveAccountMutation",
                operationKind: "mutation",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("CometLoggedInAccountSwitcherRow_account.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [{
            kind: "RootArgument",
            name: "scale"
        }],
        kind: "Fragment",
        metadata: null,
        name: "CometLoggedInAccountSwitcherRow_account",
        selections: [{
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "unread_notification_count",
            storageKey: null
        }, {
            alias: null,
            args: null,
            concreteType: "LoggedInAccountSwitcherAccountForm",
            kind: "LinkedField",
            name: "form",
            plural: !1,
            selections: [{
                args: null,
                kind: "FragmentSpread",
                name: "CometLoggedInAccountSwitcherAccountForm_form"
            }],
            storageKey: null
        }, {
            alias: null,
            args: null,
            concreteType: "User",
            kind: "LinkedField",
            name: "user",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "name",
                storageKey: null
            }, {
                alias: null,
                args: [{
                    kind: "Literal",
                    name: "height",
                    value: 60
                }, {
                    kind: "Variable",
                    name: "scale",
                    variableName: "scale"
                }, {
                    kind: "Literal",
                    name: "width",
                    value: 60
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
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "width",
                    storageKey: null
                }, {
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
                }],
                storageKey: null
            }],
            storageKey: null
        }, {
            args: null,
            kind: "FragmentSpread",
            name: "useCometLoggedInAccountSwitcherRemoveAccount_account"
        }],
        type: "LoggedInAccountSwitcherAccount",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("CometLoggedInAccountSwitcherRow_query.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "CometLoggedInAccountSwitcherRow_query",
        selections: [{
            args: null,
            kind: "FragmentSpread",
            name: "useCometLoggedInAccountSwitcherSubmitForm_query"
        }],
        type: "Query",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("useCometLoggedInAccountSwitcherListCell_query.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "unread_notification_count",
            storageKey: null
        };
        return {
            argumentDefinitions: [{
                kind: "RootArgument",
                name: "scale"
            }],
            kind: "Fragment",
            metadata: null,
            name: "useCometLoggedInAccountSwitcherListCell_query",
            selections: [{
                alias: null,
                args: null,
                concreteType: "Viewer",
                kind: "LinkedField",
                name: "viewer",
                plural: !1,
                selections: [{
                    alias: "first_account",
                    args: [{
                        kind: "Literal",
                        name: "first",
                        value: 1
                    }],
                    concreteType: "LoggedInAccountSwitcherAccount",
                    kind: "LinkedField",
                    name: "device_switchable_accounts",
                    plural: !0,
                    selections: [a, {
                        alias: null,
                        args: null,
                        concreteType: "LoggedInAccountSwitcherAccountForm",
                        kind: "LinkedField",
                        name: "form",
                        plural: !1,
                        selections: [{
                            args: null,
                            kind: "FragmentSpread",
                            name: "CometLoggedInAccountSwitcherAccountForm_form"
                        }],
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "User",
                        kind: "LinkedField",
                        name: "user",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "name",
                            storageKey: null
                        }, {
                            alias: null,
                            args: [{
                                kind: "Literal",
                                name: "height",
                                value: 36
                            }, {
                                kind: "Variable",
                                name: "scale",
                                variableName: "scale"
                            }, {
                                kind: "Literal",
                                name: "width",
                                value: 36
                            }],
                            concreteType: "Image",
                            kind: "LinkedField",
                            name: "profile_picture",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "scale",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "height",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "width",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "uri",
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    storageKey: "device_switchable_accounts(first:1)"
                }, {
                    alias: null,
                    args: null,
                    concreteType: "LoggedInAccountSwitcherAccount",
                    kind: "LinkedField",
                    name: "device_switchable_accounts",
                    plural: !0,
                    selections: [a],
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "device_switchable_account_has_notification",
                    storageKey: null
                }],
                storageKey: null
            }, {
                args: null,
                kind: "FragmentSpread",
                name: "useCometLoggedInAccountSwitcherSubmitForm_query"
            }, {
                args: null,
                kind: "FragmentSpread",
                name: "CometLoggedInAccountSwitcher_query"
            }],
            type: "Query",
            abstractKey: null
        }
    }();
    e.exports = a
}
), null);
__d("CometLoggedInAccountSwitcherRowWithUpdateText_account.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [{
            kind: "RootArgument",
            name: "scale"
        }],
        kind: "Fragment",
        metadata: null,
        name: "CometLoggedInAccountSwitcherRowWithUpdateText_account",
        selections: [{
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "unread_notification_count",
            storageKey: null
        }, {
            alias: null,
            args: null,
            concreteType: "LoggedInAccountSwitcherAccountForm",
            kind: "LinkedField",
            name: "form",
            plural: !1,
            selections: [{
                args: null,
                kind: "FragmentSpread",
                name: "CometLoggedInAccountSwitcherAccountForm_form"
            }],
            storageKey: null
        }, {
            alias: null,
            args: null,
            concreteType: "User",
            kind: "LinkedField",
            name: "user",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "name",
                storageKey: null
            }, {
                alias: "switcher_profile_picture",
                args: [{
                    kind: "Literal",
                    name: "height",
                    value: 40
                }, {
                    kind: "Variable",
                    name: "scale",
                    variableName: "scale"
                }, {
                    kind: "Literal",
                    name: "width",
                    value: 40
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
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "width",
                    storageKey: null
                }, {
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
                }],
                storageKey: null
            }],
            storageKey: null
        }, {
            args: null,
            kind: "FragmentSpread",
            name: "useCometLoggedInAccountSwitcherRemoveAccount_account"
        }],
        type: "LoggedInAccountSwitcherAccount",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("CometLoggedInAccountSwitcherRowWithUpdateText_query.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "CometLoggedInAccountSwitcherRowWithUpdateText_query",
        selections: [{
            args: null,
            kind: "FragmentSpread",
            name: "useCometLoggedInAccountSwitcherSubmitForm_query"
        }],
        type: "Query",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("CometProfileAndAccountSwitcher_query.graphql", [], (function(a, b, c, d, e, f) {
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
        }
          , c = {
            args: null,
            kind: "FragmentSpread",
            name: "CometProfileSwitcherListCell_profile"
        }
          , d = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "unread_notification_count",
            storageKey: null
        };
        return {
            argumentDefinitions: [{
                kind: "RootArgument",
                name: "scale"
            }],
            kind: "Fragment",
            metadata: null,
            name: "CometProfileAndAccountSwitcher_query",
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
                        kind: "InlineFragment",
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "UserProfileSwitcherEligibleProfilesConnection",
                            kind: "LinkedField",
                            name: "profile_switcher_eligible_profiles",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "ProfileSwitcherEligibleProfile",
                                kind: "LinkedField",
                                name: "nodes",
                                plural: !0,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "should_open_express_onboarding",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "User",
                                    kind: "LinkedField",
                                    name: "profile",
                                    plural: !1,
                                    selections: [a, b, {
                                        alias: null,
                                        args: [{
                                            kind: "Literal",
                                            name: "context_item_types",
                                            value: "FOLLOWER_COUNT"
                                        }, {
                                            kind: "Literal",
                                            name: "render_location",
                                            value: "PROFILE_PLUS_PREVIEW"
                                        }],
                                        concreteType: "TimelineContextListItemsConnection",
                                        kind: "LinkedField",
                                        name: "timeline_context_items",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "TimelineContextListItem",
                                            kind: "LinkedField",
                                            name: "nodes",
                                            plural: !0,
                                            selections: [{
                                                alias: null,
                                                args: null,
                                                concreteType: "TextWithEntities",
                                                kind: "LinkedField",
                                                name: "title",
                                                plural: !1,
                                                selections: [{
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "text",
                                                    storageKey: null
                                                }],
                                                storageKey: null
                                            }],
                                            storageKey: null
                                        }],
                                        storageKey: 'timeline_context_items(context_item_types:"FOLLOWER_COUNT",render_location:"PROFILE_PLUS_PREVIEW")'
                                    }, c],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }, a, b, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "is_failing_page_publishing_authorization",
                            storageKey: null
                        }, c],
                        type: "User",
                        abstractKey: null
                    }],
                    storageKey: null
                }, {
                    alias: "first_account",
                    args: [{
                        kind: "Literal",
                        name: "first",
                        value: 1
                    }],
                    concreteType: "LoggedInAccountSwitcherAccount",
                    kind: "LinkedField",
                    name: "device_switchable_accounts",
                    plural: !0,
                    selections: [d, {
                        alias: null,
                        args: null,
                        concreteType: "User",
                        kind: "LinkedField",
                        name: "user",
                        plural: !1,
                        selections: [a, b, {
                            alias: null,
                            args: [{
                                kind: "Literal",
                                name: "height",
                                value: 36
                            }, {
                                kind: "Variable",
                                name: "scale",
                                variableName: "scale"
                            }, {
                                kind: "Literal",
                                name: "width",
                                value: 36
                            }],
                            concreteType: "Image",
                            kind: "LinkedField",
                            name: "profile_picture",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "scale",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "height",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "width",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "uri",
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    storageKey: "device_switchable_accounts(first:1)"
                }, {
                    alias: null,
                    args: null,
                    concreteType: "LoggedInAccountSwitcherAccount",
                    kind: "LinkedField",
                    name: "device_switchable_accounts",
                    plural: !0,
                    selections: [d],
                    storageKey: null
                }],
                storageKey: null
            }, {
                args: null,
                kind: "FragmentSpread",
                name: "useProfileCometSwitcherCleanUpOnSwap_query"
            }, {
                args: null,
                kind: "FragmentSpread",
                name: "CometProfileSwitcherPagePublishingAuthorizationCard_query"
            }, {
                args: null,
                kind: "FragmentSpread",
                name: "CometLoggedInAccountSwitcher_query"
            }],
            type: "Query",
            abstractKey: null
        }
    }();
    e.exports = a
}
), null);
__d("CometProfileSwitcherListCell_profile.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [{
            kind: "RootArgument",
            name: "scale"
        }],
        kind: "Fragment",
        metadata: null,
        name: "CometProfileSwitcherListCell_profile",
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
            name: "name",
            storageKey: null
        }, {
            alias: null,
            args: [{
                kind: "Literal",
                name: "height",
                value: 40
            }, {
                kind: "Variable",
                name: "scale",
                variableName: "scale"
            }, {
                kind: "Literal",
                name: "width",
                value: 40
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
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "width",
                storageKey: null
            }, {
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
            }],
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "unseen_update_count",
            storageKey: null
        }],
        type: "User",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("useCometCombinedProfileAccountSwitcherListCell_query.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [{
            kind: "RootArgument",
            name: "scale"
        }],
        kind: "Fragment",
        metadata: null,
        name: "useCometCombinedProfileAccountSwitcherListCell_query",
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
                    kind: "InlineFragment",
                    selections: [{
                        alias: "first_profiles",
                        args: [{
                            kind: "Literal",
                            name: "first",
                            value: 2
                        }],
                        concreteType: "UserProfileSwitcherEligibleProfilesConnection",
                        kind: "LinkedField",
                        name: "profile_switcher_eligible_profiles",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "ProfileSwitcherEligibleProfile",
                            kind: "LinkedField",
                            name: "nodes",
                            plural: !0,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "User",
                                kind: "LinkedField",
                                name: "profile",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: [{
                                        kind: "Literal",
                                        name: "height",
                                        value: 36
                                    }, {
                                        kind: "Variable",
                                        name: "scale",
                                        variableName: "scale"
                                    }, {
                                        kind: "Literal",
                                        name: "width",
                                        value: 36
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
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "width",
                                        storageKey: null
                                    }, {
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
                                    }],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: "profile_switcher_eligible_profiles(first:2)"
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "UserProfileSwitcherEligibleProfilesConnection",
                        kind: "LinkedField",
                        name: "profile_switcher_eligible_profiles",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "count",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "ProfileSwitcherEligibleProfile",
                            kind: "LinkedField",
                            name: "nodes",
                            plural: !0,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "User",
                                kind: "LinkedField",
                                name: "profile",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "unseen_update_count",
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    type: "User",
                    abstractKey: null
                }],
                storageKey: null
            }, {
                alias: null,
                args: null,
                concreteType: "LoggedInAccountSwitcherAccount",
                kind: "LinkedField",
                name: "device_switchable_accounts",
                plural: !0,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "unread_notification_count",
                    storageKey: null
                }],
                storageKey: null
            }],
            storageKey: null
        }, {
            args: null,
            kind: "FragmentSpread",
            name: "CometProfileAndAccountSwitcher_query"
        }, {
            args: null,
            kind: "FragmentSpread",
            name: "CometProfileSwitcher_query"
        }, {
            args: null,
            kind: "FragmentSpread",
            name: "useCometLoggedInAccountSwitcherListCell_query"
        }],
        type: "Query",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("CometRecordProductUsageMutationMutation.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "productID"
        }]
          , b = [{
            kind: "Literal",
            name: "app_id",
            value: 2220391788200892
        }, {
            kind: "Variable",
            name: "product_id",
            variableName: "productID"
        }]
          , c = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "product_id",
            storageKey: null
        }
          , d = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "last_used_time",
            storageKey: null
        };
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "CometRecordProductUsageMutationMutation",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: "ProductUsageRecord",
                    kind: "LinkedField",
                    name: "update_last_used_time_for_product",
                    plural: !1,
                    selections: [c, d],
                    storageKey: null
                }],
                type: "Mutation",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "CometRecordProductUsageMutationMutation",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: "ProductUsageRecord",
                    kind: "LinkedField",
                    name: "update_last_used_time_for_product",
                    plural: !1,
                    selections: [c, d, {
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
                id: "3470690602991665",
                metadata: {},
                name: "CometRecordProductUsageMutationMutation",
                operationKind: "mutation",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("GroupsCometCreateDialogQuery$Parameters", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        kind: "PreloadableConcreteRequest",
        params: {
            id: "3522470884477162",
            metadata: {
                relayPreloadable: !0
            },
            name: "GroupsCometCreateDialogQuery",
            operationKind: "query",
            text: null
        }
    };
    e.exports = a
}
), null);
__d("CometHomeCreateMenuQuery.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "should_use_page_rename",
            storageKey: null
        }
          , b = {
            alias: null,
            args: null,
            concreteType: "JobSearchSettings",
            kind: "LinkedField",
            name: "job_search_settings",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "can_viewer_create_any_job",
                storageKey: null
            }],
            storageKey: null
        }
          , c = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "can_create_page",
            storageKey: null
        }
          , d = {
            alias: null,
            args: null,
            concreteType: "LWIAPI",
            kind: "LinkedField",
            name: "lwi",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "should_direct_to_lwi",
                storageKey: null
            }],
            storageKey: null
        };
        return {
            fragment: {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "CometHomeCreateMenuQuery",
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
                        concreteType: "User",
                        kind: "LinkedField",
                        name: "account_user",
                        plural: !1,
                        selections: [a],
                        storageKey: null
                    }, b, c],
                    storageKey: null
                }, d],
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: [],
                kind: "Operation",
                name: "CometHomeCreateMenuQuery",
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
                        concreteType: "User",
                        kind: "LinkedField",
                        name: "account_user",
                        plural: !1,
                        selections: [a, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "id",
                            storageKey: null
                        }],
                        storageKey: null
                    }, b, c],
                    storageKey: null
                }, d]
            },
            params: {
                id: "3104045929705490",
                metadata: {},
                name: "CometHomeCreateMenuQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("CometSetupNotificationStoreSubscriptionNewNotificationQuery.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "scale"
        }]
          , b = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null
        }
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
            name: "length",
            storageKey: null
        }
          , e = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "offset",
            storageKey: null
        }
          , f = [{
            kind: "Literal",
            name: "delight_surface",
            value: "COMMENT"
        }]
          , g = {
            kind: "Variable",
            name: "scale",
            variableName: "scale"
        }
          , h = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null
        }
          , i = {
            kind: "InlineFragment",
            selections: [c],
            type: "Node",
            abstractKey: "__isNode"
        }
          , j = [c, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "name",
            storageKey: null
        }]
          , k = {
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
          , l = {
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
                name: "CometSetupNotificationStoreSubscriptionNewNotificationQuery",
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
                        name: "CometSetupNotificationStoreSubscriptionNewNotification_data"
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
                name: "CometSetupNotificationStoreSubscriptionNewNotificationQuery",
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
                        selections: [b, c, {
                            kind: "TypeDiscriminator",
                            abstractKey: "__isActor"
                        }],
                        storageKey: null
                    }, {
                        kind: "ClientExtension",
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "Notification",
                            kind: "LinkedField",
                            name: "new_notification",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "notif_id",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "notif_type",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "seen_state",
                                storageKey: null
                            }, c, {
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
                                                        selections: [b, {
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
                                selections: [b, {
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
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "text",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "DelightAtRange",
                                    kind: "LinkedField",
                                    name: "delight_ranges",
                                    plural: !0,
                                    selections: [d, e, {
                                        alias: null,
                                        args: null,
                                        concreteType: "TextDelightCampaign",
                                        kind: "LinkedField",
                                        name: "campaign",
                                        plural: !1,
                                        selections: [b, {
                                            alias: null,
                                            args: f,
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
                                            args: f,
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
                                    selections: [d, e, {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: "LinkedField",
                                        name: "entity_with_image",
                                        plural: !1,
                                        selections: [b, {
                                            alias: null,
                                            args: [g],
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
                                            }, h, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "width",
                                                storageKey: null
                                            }],
                                            storageKey: null
                                        }, i],
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
                                    selections: [d, e, {
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
                                    selections: [d, e, {
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
                                        selections: [b, {
                                            kind: "InlineFragment",
                                            selections: j,
                                            type: "User",
                                            abstractKey: null
                                        }, i],
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
                                        selections: [b, {
                                            kind: "TypeDiscriminator",
                                            abstractKey: "__isEntity"
                                        }, k, {
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
                                                selections: [b, {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "url",
                                                    storageKey: null
                                                }, {
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
                                            selections: [l, {
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
                                            selections: [l, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "work_official_status",
                                                storageKey: null
                                            }],
                                            type: "Group",
                                            abstractKey: null
                                        }, i],
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "entity_is_weak_reference",
                                        storageKey: null
                                    }, d, e],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "ColorAtRange",
                                    kind: "LinkedField",
                                    name: "color_ranges",
                                    plural: !0,
                                    selections: [d, e, {
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
                                }, g, {
                                    kind: "Literal",
                                    name: "width",
                                    value: 56
                                }],
                                concreteType: "Image",
                                kind: "LinkedField",
                                name: "notif_image",
                                plural: !1,
                                selections: [h],
                                storageKey: null
                            }, k, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "www_url_should_open_in_blank_target",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "is_hidden",
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
                                    selections: j,
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "target_viewer_type",
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }]
                    }],
                    storageKey: null
                }]
            },
            params: {
                id: "3324549667560004",
                metadata: {},
                name: "CometSetupNotificationStoreSubscriptionNewNotificationQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("CometSetupNotificationStoreSubscriptionNewNotification_data.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "CometSetupNotificationStoreSubscriptionNewNotification_data",
        selections: [{
            alias: null,
            args: null,
            concreteType: null,
            kind: "LinkedField",
            name: "actor",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "id",
                storageKey: null
            }, {
                args: null,
                kind: "FragmentSpread",
                name: "CometToastNotification_actor"
            }],
            storageKey: null
        }, {
            kind: "ClientExtension",
            selections: [{
                alias: null,
                args: null,
                concreteType: "Notification",
                kind: "LinkedField",
                name: "new_notification",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "notif_id",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "notif_type",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "seen_state",
                    storageKey: null
                }, {
                    args: null,
                    kind: "FragmentSpread",
                    name: "CometToastNotification_notification"
                }],
                storageKey: null
            }]
        }],
        type: "Viewer",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("CometProfilePlusExpressOnboardingDialogQuery$Parameters", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        kind: "PreloadableConcreteRequest",
        params: {
            id: "3016398475095537",
            metadata: {
                relayPreloadable: !0
            },
            name: "CometProfilePlusExpressOnboardingDialogQuery",
            operationKind: "query",
            text: null
        }
    };
    e.exports = a
}
), null);
__d("PresenceStatusProviderSubscriptionComponentQuery.graphql", ["relay-runtime"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "scale"
        }]
          , b = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "status",
            storageKey: null
        }
          , c = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "buddy_id",
            storageKey: null
        }
          , d = {
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
                name: "PresenceStatusProviderSubscriptionComponentQuery",
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
                        concreteType: "ChatSidebarRankedContact",
                        kind: "LinkedField",
                        name: "chat_sidebar_contact_rankings",
                        plural: !0,
                        selections: [{
                            kind: "InlineDataFragmentSpread",
                            name: "PresenceStatusProviderSubscription_rankings",
                            selections: [b, c, {
                                alias: null,
                                args: null,
                                concreteType: "User",
                                kind: "LinkedField",
                                name: "user",
                                plural: !1,
                                selections: [d, {
                                    args: null,
                                    kind: "FragmentSpread",
                                    name: "MWChatContact_profile"
                                }],
                                storageKey: null
                            }]
                        }],
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
                name: "PresenceStatusProviderSubscriptionComponentQuery",
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
                        concreteType: "ChatSidebarRankedContact",
                        kind: "LinkedField",
                        name: "chat_sidebar_contact_rankings",
                        plural: !0,
                        selections: [b, c, {
                            alias: null,
                            args: null,
                            concreteType: "User",
                            kind: "LinkedField",
                            name: "user",
                            plural: !1,
                            selections: [d, {
                                kind: "InlineFragment",
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "name",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: [{
                                        kind: "Literal",
                                        name: "height",
                                        value: 36
                                    }, {
                                        kind: "Variable",
                                        name: "scale",
                                        variableName: "scale"
                                    }, {
                                        kind: "Literal",
                                        name: "width",
                                        value: 36
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
                                    storageKey: null
                                }, {
                                    kind: "InlineFragment",
                                    selections: [{
                                        kind: "ClientExtension",
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "availability",
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            kind: "ScalarField",
                                            name: "last_active_time",
                                            storageKey: null
                                        }]
                                    }],
                                    type: "User",
                                    abstractKey: null
                                }],
                                type: "Profile",
                                abstractKey: "__isProfile"
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    storageKey: null
                }]
            },
            params: {
                id: "3061548450534867",
                metadata: {
                    relayPreloadable: !0
                },
                name: "PresenceStatusProviderSubscriptionComponentQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    a.params.id != null && b("relay-runtime").PreloadableQueryRegistry.set(a.params.id, a);
    e.exports = a
}
), null);
__d("PresenceStatusProviderSubscription_ContactProfilesQuery.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "ids"
        }, {
            defaultValue: null,
            kind: "LocalArgument",
            name: "scale"
        }]
          , b = [{
            kind: "Variable",
            name: "ids",
            variableName: "ids"
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
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "name",
                storageKey: null
            }, {
                alias: null,
                args: [{
                    kind: "Literal",
                    name: "height",
                    value: 36
                }, {
                    kind: "Variable",
                    name: "scale",
                    variableName: "scale"
                }, {
                    kind: "Literal",
                    name: "width",
                    value: 36
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
                storageKey: null
            }],
            type: "Profile",
            abstractKey: "__isProfile"
        };
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "PresenceStatusProviderSubscription_ContactProfilesQuery",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "nodes",
                    plural: !0,
                    selections: [c, d],
                    storageKey: null
                }],
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "PresenceStatusProviderSubscription_ContactProfilesQuery",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "nodes",
                    plural: !0,
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "__typename",
                        storageKey: null
                    }, c, d],
                    storageKey: null
                }]
            },
            params: {
                id: "3164765546918963",
                metadata: {},
                name: "PresenceStatusProviderSubscription_ContactProfilesQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("PresenceStatusProviderSubscription_PresenceStatusChatVisibilityQuery.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "chat_visibility",
            storageKey: null
        }
          , b = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "has_converted_to_view_side_settings",
            storageKey: null
        };
        return {
            fragment: {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "PresenceStatusProviderSubscription_PresenceStatusChatVisibilityQuery",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "Viewer",
                    kind: "LinkedField",
                    name: "viewer",
                    plural: !1,
                    selections: [a, {
                        alias: null,
                        args: null,
                        concreteType: "PresenceViewerBasedSettings",
                        kind: "LinkedField",
                        name: "presence_view_side_settings",
                        plural: !1,
                        selections: [b],
                        storageKey: null
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
                name: "PresenceStatusProviderSubscription_PresenceStatusChatVisibilityQuery",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "Viewer",
                    kind: "LinkedField",
                    name: "viewer",
                    plural: !1,
                    selections: [a, {
                        alias: null,
                        args: null,
                        concreteType: "PresenceViewerBasedSettings",
                        kind: "LinkedField",
                        name: "presence_view_side_settings",
                        plural: !1,
                        selections: [b, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "id",
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    storageKey: null
                }]
            },
            params: {
                id: "2607318959337318",
                metadata: {},
                name: "PresenceStatusProviderSubscription_PresenceStatusChatVisibilityQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("PresenceStatusProviderSubscription_rankings.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        kind: "InlineDataFragment",
        name: "PresenceStatusProviderSubscription_rankings"
    };
    e.exports = a
}
), null);
__d("RTWebCallBlockSettingHooksQuery.graphql", ["relay-runtime"], (function(a, b, c, d, e, f) {
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
                name: "call_blocked_until",
                storageKey: null
            }],
            storageKey: null
        }];
        return {
            fragment: {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "RTWebCallBlockSettingHooksQuery",
                selections: a,
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: [],
                kind: "Operation",
                name: "RTWebCallBlockSettingHooksQuery",
                selections: a
            },
            params: {
                id: "2591667614255718",
                metadata: {
                    relayPreloadable: !0
                },
                name: "RTWebCallBlockSettingHooksQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    a.params.id != null && b("relay-runtime").PreloadableQueryRegistry.set(a.params.id, a);
    e.exports = a
}
), null);
__d("RTWebCometRoomIncomingCallDialog_DisclaimerQuery$Parameters", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        kind: "PreloadableConcreteRequest",
        params: {
            id: "3161478997284719",
            metadata: {
                relayPreloadable: !0
            },
            name: "RTWebCometRoomIncomingCallDialog_DisclaimerQuery",
            operationKind: "query",
            text: null
        }
    };
    e.exports = a
}
), null);
__d("CometWatchAndScrollContainer_video.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "CometWatchAndScrollContainer_video",
        selections: [{
            args: null,
            kind: "FragmentSpread",
            name: "useVideoOriginalDimensionsRelay_video"
        }],
        type: "Video",
        abstractKey: null
    };
    e.exports = a
}
), null);
__d("CometWatchAndScrollVideoQuery.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "videoID"
        }]
          , b = [{
            kind: "Variable",
            name: "id",
            variableName: "videoID"
        }]
          , c = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "url",
            storageKey: null
        }
          , d = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "id",
            storageKey: null
        }
          , e = [c, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "start",
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "end",
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "representation_id",
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "mime_codec",
            storageKey: null
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "segment_type",
            storageKey: null
        }];
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "CometWatchAndScrollVideoQuery",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: "Video",
                    kind: "LinkedField",
                    name: "video",
                    plural: !1,
                    selections: [c, {
                        args: null,
                        kind: "FragmentSpread",
                        name: "CometWatchAndScrollContainer_video"
                    }, {
                        args: null,
                        kind: "FragmentSpread",
                        name: "VideoPlayerRelay_video"
                    }, {
                        args: null,
                        kind: "FragmentSpread",
                        name: "VideoPlayerWithLiveVideoIndicator_video"
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
                name: "CometWatchAndScrollVideoQuery",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: "Video",
                    kind: "LinkedField",
                    name: "video",
                    plural: !1,
                    selections: [c, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "original_width",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "original_height",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "original_rotation",
                        storageKey: null
                    }, d, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "broadcaster_origin",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "broadcast_id",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "broadcast_status",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "is_live_streaming",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "is_live_trace_enabled",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "is_looping",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "is_video_broadcast",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "loop_count",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "is_spherical",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "permalink_url",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "captions_url",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "dash_prefetch_experimental",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "VideoCaptionLocale",
                        kind: "LinkedField",
                        name: "video_available_captions_locales",
                        plural: !0,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "localized_creation_method",
                            storageKey: null
                        }],
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "VideoPrefetchResources",
                        kind: "LinkedField",
                        name: "dash_prefetch_resources",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "VideoPrefetchResource",
                            kind: "LinkedField",
                            name: "audio",
                            plural: !0,
                            selections: e,
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "VideoPrefetchResource",
                            kind: "LinkedField",
                            name: "video",
                            plural: !0,
                            selections: e,
                            storageKey: null
                        }],
                        storageKey: null
                    }, {
                        alias: null,
                        args: [{
                            kind: "Literal",
                            name: "context",
                            value: "DEFAULT"
                        }, {
                            kind: "Literal",
                            name: "supported",
                            value: ["CometVideoPlayerOzImplementation", "CometVideoPlayerShakaImplementation", "CometVideoPlayerProgressiveImplementation"]
                        }],
                        concreteType: null,
                        kind: "LinkedField",
                        name: "comet_video_player_implementations",
                        plural: !0,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "__typename",
                            storageKey: null
                        }, {
                            kind: "InlineFragment",
                            selections: [{
                                documentName: "useRelay3DVideoImplementations_video",
                                fragmentName: "useRelay3DOzImplementation_implementation",
                                fragmentPropName: "implementation",
                                kind: "ModuleImport"
                            }],
                            type: "CometVideoPlayerOzImplementation",
                            abstractKey: null
                        }, {
                            kind: "InlineFragment",
                            selections: [{
                                documentName: "useRelay3DVideoImplementations_video",
                                fragmentName: "useRelay3DShakaImplementation_implementation",
                                fragmentPropName: "implementation",
                                kind: "ModuleImport"
                            }],
                            type: "CometVideoPlayerShakaImplementation",
                            abstractKey: null
                        }, {
                            kind: "InlineFragment",
                            selections: [{
                                documentName: "useRelay3DVideoImplementations_video",
                                fragmentName: "useRelay3DProgressiveImplementation_implementation",
                                fragmentPropName: "implementation",
                                kind: "ModuleImport"
                            }],
                            type: "CometVideoPlayerProgressiveImplementation",
                            abstractKey: null
                        }],
                        storageKey: 'comet_video_player_implementations(context:"DEFAULT",supported:["CometVideoPlayerOzImplementation","CometVideoPlayerShakaImplementation","CometVideoPlayerProgressiveImplementation"])'
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "can_use_oz",
                        storageKey: null
                    }, {
                        alias: "playable_url_dash",
                        args: [{
                            kind: "Literal",
                            name: "scrubbing_preference",
                            value: "MPEG_DASH"
                        }],
                        kind: "ScalarField",
                        name: "playable_url",
                        storageKey: 'playable_url(scrubbing_preference:"MPEG_DASH")'
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "dash_manifest",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "min_quality_preference",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "VideoPlayerShakaLiveP2PInit",
                        kind: "LinkedField",
                        name: "video_player_shaka_live_p2p_init",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "json_encoded_video_data",
                            storageKey: null
                        }],
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "playable_url",
                        storageKey: null
                    }, {
                        alias: "playable_url_quality_hd",
                        args: [{
                            kind: "Literal",
                            name: "quality",
                            value: "HD"
                        }],
                        kind: "ScalarField",
                        name: "playable_url",
                        storageKey: 'playable_url(quality:"HD")'
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "SphericalVideoFallbackUrls",
                        kind: "LinkedField",
                        name: "spherical_video_fallback_urls",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "hd",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "sd",
                            storageKey: null
                        }],
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "comet_video_player_static_config",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "comet_video_player_context_sensitive_config",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "VideoPlayerShakaPerformanceLoggerInit",
                        kind: "LinkedField",
                        name: "video_player_shaka_performance_logger_init",
                        plural: !1,
                        selections: [{
                            documentName: "useVideoPlayerShakaPerformanceLoggerRelay_video",
                            fragmentName: "useVideoPlayerShakaPerformanceLoggerRelay_init",
                            fragmentPropName: "init",
                            kind: "ModuleImport"
                        }],
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "autoplay_gating_result",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "viewer_autoplay_setting",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "can_autoplay",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "drm_info",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "AudioSettings",
                        kind: "LinkedField",
                        name: "audio_settings",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "video_volume_setting",
                            storageKey: null
                        }, d],
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "CaptionsSettings",
                        kind: "LinkedField",
                        name: "captions_settings",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "always_show_captions",
                            storageKey: null
                        }, d],
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "VideoBroadcastLowLatencyConfig",
                        kind: "LinkedField",
                        name: "broadcast_low_latency_config",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "ll_desired_latency_ms",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "ll_latency_tolerance_ms",
                            storageKey: null
                        }],
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "audio_availability",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "VideoMutedSegment",
                        kind: "LinkedField",
                        name: "muted_segments",
                        plural: !0,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "mute_start_time_in_sec",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "mute_end_time_in_sec",
                            storageKey: null
                        }],
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "SphericalVideoRenderer",
                        kind: "LinkedField",
                        name: "spherical_video_renderer",
                        plural: !1,
                        selections: [{
                            documentName: "VideoPlayerRelay_video_spherical_video_renderer",
                            fragmentName: "VideoPlayerSphericalRelay_sphericalVideoRenderer",
                            fragmentPropName: "sphericalVideoRenderer",
                            kind: "ModuleImport"
                        }],
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "InstreamVideoAdBreaks",
                        kind: "LinkedField",
                        name: "instream_video_ad_breaks_comet",
                        plural: !1,
                        selections: [{
                            documentName: "VideoPlayerRelay_video_instream_video_ad_breaks_comet",
                            fragmentName: "InstreamVideoAdBreaksPlayer_adBreaks",
                            fragmentPropName: "adBreaks",
                            kind: "ModuleImport"
                        }],
                        storageKey: null
                    }, {
                        alias: "breakingStatus",
                        args: null,
                        kind: "ScalarField",
                        name: "breaking_status",
                        storageKey: null
                    }, {
                        alias: "videoId",
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    }, {
                        alias: "isPremiere",
                        args: null,
                        kind: "ScalarField",
                        name: "is_premiere",
                        storageKey: null
                    }, {
                        alias: "liveViewerCount",
                        args: null,
                        kind: "ScalarField",
                        name: "live_viewer_count_read_only",
                        storageKey: null
                    }, {
                        alias: "rehearsalInfo",
                        args: null,
                        concreteType: "LiveVideoRehearsalInfo",
                        kind: "LinkedField",
                        name: "rehearsal_info",
                        plural: !1,
                        selections: [{
                            alias: "typeName",
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
                        name: "is_gaming_video",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "publish_time",
                        storageKey: null
                    }],
                    storageKey: null
                }]
            },
            params: {
                id: "3653181891391297",
                metadata: {},
                name: "CometWatchAndScrollVideoQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("AppLastUsedTimestampsFetcher", ["CometRelay", "AppLastUsedTimestampsFetcherQuery.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;
    function a(a, c, d) {
        return b("CometRelay").fetchQuery(a, g !== void 0 ? g : g = b("AppLastUsedTimestampsFetcherQuery.graphql"), {
            bookmarkIDs: c
        }).subscribe({
            next: function(a) {
                a = a.viewer.bookmarks.edges.reduce(function(a, b) {
                    b = b.node;
                    var c = b.bookmarked_node;
                    b = b.last_used_timestamp;
                    if (c == null)
                        return a;
                    c = c.id;
                    if (c == null || b == null)
                        return a;
                    a[c] = b;
                    return a
                }, {});
                d(a)
            }
        })
    }
    c = {
        fetch: a
    };
    d = c;
    e.exports = d
}
), null);
__d("useCometLogoutWithPendingContactpointConfirmationDialog.react", ["fbt", "React", "useCometConfirmationDialog"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a(a, c) {
        var d = b("useCometConfirmationDialog")()
          , e = d[0];
        d = h.useCallback(function() {
            var b = g._("\u0110\u0103ng xu\u1ea5t kh\u1ecfi Facebook?")
              , d = a === "PhoneNumber" ? g._("B\u1ea1n c\u00f3 ch\u1eafc ch\u1eafn mu\u1ed1n \u0111\u0103ng xu\u1ea5t kh\u1ecfi Facebook tr\u01b0\u1edbc khi x\u00e1c nh\u1eadn s\u1ed1 di \u0111\u1ed9ng kh\u00f4ng? Vi\u1ec7c x\u00e1c nh\u1eadn s\u1ed1 di \u0111\u1ed9ng tr\u00ean t\u00e0i kho\u1ea3n \u0111\u1ea3m b\u1ea3o r\u1eb1ng b\u1ea1n s\u1ebd c\u00f3 th\u1ec3 \u0111\u0103ng nh\u1eadp l\u1ea1i.") : g._("B\u1ea1n c\u00f3 ch\u1eafc ch\u1eafn mu\u1ed1n \u0111\u0103ng xu\u1ea5t kh\u1ecfi Facebook tr\u01b0\u1edbc khi x\u00e1c nh\u1eadn email kh\u00f4ng? Vi\u1ec7c x\u00e1c nh\u1eadn email tr\u00ean t\u00e0i kho\u1ea3n \u0111\u1ea3m b\u1ea3o r\u1eb1ng b\u1ea1n s\u1ebd c\u00f3 th\u1ec3 \u0111\u0103ng nh\u1eadp l\u1ea1i.")
              , f = g._("X\u00e1c nh\u1eadn t\u00e0i kho\u1ea3n")
              , h = g._("\u0110\u0103ng xu\u1ea5t");
            e({
                body: d,
                cancel: f,
                confirm: h,
                title: b
            }, c)
        }, [a, c, e]);
        return a === "PendingEmail" || a === "PhoneNumber" ? d : null
    }
}
), null);
__d("CometLogoutHandler.react", ["Banzai", "CometRelay", "React", "ServiceWorkerLoginAndLogout", "WebStorageMonster", "XLogoutControllerRouteBuilder", "recoverableViolation", "useCometLogoutWithPendingContactpointConfirmationDialog.react", "CometLogoutHandlerQuery.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React");
    a = h.forwardRef(function(a, c) {
        var d, e, f = a.shouldInitiateLogout, i = h.useRef(!1);
        a = b("CometRelay").useLazyLoadQuery(g !== void 0 ? g : g = b("CometLogoutHandlerQuery.graphql"), {});
        var j = a.logout_whitelist;
        a = a.viewer;
        var k = h.useRef()
          , l = h.useCallback(function() {
            if (i.current)
                return;
            i.current = !0;
            var a = k.current;
            if (a == null) {
                b("recoverableViolation")("Unable to get logout form ref to submit", "comet_ui");
                return
            }
            b("WebStorageMonster").cleanOnLogout([].concat(j));
            b("ServiceWorkerLoginAndLogout").logout();
            b("Banzai").flush();
            a.submit()
        }, [k, j]);
        d = a == null ? void 0 : (d = a.account_user) == null ? void 0 : d.has_confirmed_contactpoints;
        e = a == null ? void 0 : (e = a.account_user) == null ? void 0 : (e = e.pending_contactpoints) == null ? void 0 : (e = e[0]) == null ? void 0 : e.__typename;
        var m = b("useCometLogoutWithPendingContactpointConfirmationDialog.react")(d !== !0 ? e : null, l)
          , n = h.useCallback(function() {
            m ? m() : l()
        }, [l, m]);
        h.useImperativeHandle(c, function() {
            return {
                logout: n
            }
        });
        h.useEffect(function() {
            k.current == null ? b("recoverableViolation")("Expected logout form ref to be valid", "comet_ui") : f === !0 && n()
        }, [n, f]);
        d = b("XLogoutControllerRouteBuilder").buildURL({
            button_location: "settings",
            button_name: "logout"
        });
        return h.jsxs("form", {
            action: d,
            method: "POST",
            ref: k,
            children: [h.jsx("input", {
                name: "h",
                type: "hidden",
                value: a == null ? void 0 : a.logout_hash
            }), h.jsx("input", {
                name: "ref",
                type: "hidden",
                value: "mb"
            })]
        })
    });
    c = a;
    e.exports = c
}
), null);
__d("useVCRapidFeedbackSurveyForCometInteractions", ["CometVCTracker", "React", "emptyFunction", "useRainbowNativeSurveyDialog.react"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React")
      , h = b("CometVCTracker").CometVisualCompletionTraceObserver;
    function i(a) {
        return [{
            context_key: "traceId",
            context_value: a.traceId
        }, {
            context_key: "visuallyComplete",
            context_value: a.visuallyComplete.toString()
        }]
    }
    function a() {
        var a, c = (a = b("useRainbowNativeSurveyDialog.react"))("764267101074679", []), d = a("2660557544218200", []), e = a("3905166686177022", []), f = a("692417014950876", []), j = g.useRef(!1), k = g.useRef(!1), l = g.useRef(!1), m = g.useRef(!1);
        g.useEffect(function() {
            var a = function(a) {
                if (a)
                    switch (a.tracePolicy) {
                    case "comet.home":
                        if (!j.current && a.interactionType === "INITIAL_LOAD") {
                            j.current = !0;
                            var g = i(a);
                            c(b("emptyFunction"), b("emptyFunction"), g)
                        }
                        break;
                    case "comet.groups.feed":
                        if (!k.current) {
                            k.current = !0;
                            g = i(a);
                            d(b("emptyFunction"), b("emptyFunction"), g)
                        }
                        break;
                    case "comet.watch.feed":
                        if (!l.current) {
                            l.current = !0;
                            g = i(a);
                            e(b("emptyFunction"), b("emptyFunction"), g)
                        }
                        break;
                    case "comet.stories.viewer":
                        if (!m.current) {
                            m.current = !0;
                            g = i(a);
                            f(b("emptyFunction"), b("emptyFunction"), g)
                        }
                        break;
                    default:
                        break
                    }
            };
            h.subscribe(a);
            return function() {
                h.unsubscribe(a)
            }
        }, [c, d, e, f])
    }
}
), null);
__d("CometVCRapidFeedbackSurveyForCometInteractions.react", ["useVCRapidFeedbackSurveyForCometInteractions"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a() {
        b("useVCRapidFeedbackSurveyForCometInteractions")();
        return null
    }
}
), null);
__d("CometLoggedInAccountSwitcherAccountForm.react", ["CometRelay", "React", "CometLoggedInAccountSwitcherAccountForm_form.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React");
    function a(a) {
        var c = b("CometRelay").useFragment(g !== void 0 ? g : g = b("CometLoggedInAccountSwitcherAccountForm_form.graphql"), a.form)
          , d = c.action;
        c = c.inputs;
        return h.jsx("form", {
            action: d,
            method: "POST",
            ref: a.formRef,
            children: c.map(function(a) {
                var b = a.name;
                a = a.value;
                return h.jsx("input", {
                    name: b,
                    type: "hidden",
                    value: a
                }, b)
            })
        })
    }
}
), null);
__d("CometLoggedInAccountSwitcherRow.react", ["ix", "fbt", "CometLoggedInAccountSwitcherAccountForm.react", "CometRelay", "React", "TetraListCell.react", "WebPixelRatio", "fbicon", "recoverableViolation", "useCometLoggedInAccountSwitcherRemoveAccount", "useCometLoggedInAccountSwitcherSubmitForm", "useProfileEngagementClickCallback", "CometLoggedInAccountSwitcherRow_query.graphql", "CometLoggedInAccountSwitcherRow_account.graphql"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i, j, k = b("React");
    function a(a) {
        var c = b("CometRelay").useFragment(i !== void 0 ? i : i = b("CometLoggedInAccountSwitcherRow_query.graphql"), a.query);
        a = b("CometRelay").useFragment(j !== void 0 ? j : j = b("CometLoggedInAccountSwitcherRow_account.graphql"), a.account);
        var d = a.form
          , e = a.unread_notification_count
          , f = a.user
          , l = k.useRef(null)
          , m = b("useCometLoggedInAccountSwitcherSubmitForm")(c, l)
          , n = b("useCometLoggedInAccountSwitcherRemoveAccount")(a);
        c = {
            product_bucket: "account_switcher",
            subsurface: "switch_account_menu",
            surface: "navigation"
        };
        var o = b("useProfileEngagementClickCallback")(babelHelpers["extends"]({}, c, {
            item_type: "account"
        }))
          , p = b("useProfileEngagementClickCallback")(babelHelpers["extends"]({}, c, {
            item_type: "remove"
        }));
        if (f == null) {
            b("recoverableViolation")("A user is required to render a CometLoggedInAccountSwitcherRow", "comet_ui");
            return null
        }
        if (d == null) {
            b("recoverableViolation")("A form is required to render a CometLoggedInAccountSwitcherRow", "comet_ui");
            return null
        }
        e == null && b("recoverableViolation")("We should have an unread_notification_count but we don't", "comet_ui");
        return k.jsx(b("TetraListCell.react"), {
            addOnPrimary: {
                addOnTopEnd: ((a = e) != null ? a : 0) > 0 ? {
                    number: (c = e) != null ? c : 0,
                    type: "notificationBadge"
                } : void 0,
                shape: "circle",
                size: 60,
                source: {
                    height: (e = f == null ? void 0 : (a = f.profile_picture) == null ? void 0 : a.height) != null ? e : 60,
                    scale: (a = f == null ? void 0 : (c = f.profile_picture) == null ? void 0 : c.scale) != null ? a : b("WebPixelRatio").get(),
                    uri: (c = f == null ? void 0 : (e = f.profile_picture) == null ? void 0 : e.uri) != null ? c : "",
                    width: (e = f == null ? void 0 : (a = f.profile_picture) == null ? void 0 : a.width) != null ? e : 60
                },
                type: "profile-photo"
            },
            addOnSecondary: {
                "aria-label": h._("G\u1ee1 t\u00e0i kho\u1ea3n"),
                color: "secondary",
                icon: b("fbicon")._(g("478234"), 24),
                onPress: function() {
                    p(),
                    n()
                },
                type: "icon"
            },
            headline: k.jsxs(k.Fragment, {
                children: [f == null ? void 0 : f.name, k.jsx(b("CometLoggedInAccountSwitcherAccountForm.react"), {
                    form: d,
                    formRef: l
                })]
            }),
            onPress: function() {
                o(),
                m()
            }
        })
    }
}
), null);
__d("useProfileSwitcherEngagementClickCallback", ["React", "recoverableViolation", "requireDeferred"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React")
      , h = b("requireDeferred")("ProfileEngagementTypedLoggerLite")
      , i = "2220391788200892";
    function a(a, c) {
        var d = g.useMemo(function() {
            return babelHelpers["extends"]({
                appid: i,
                engagement_type: "click"
            }, a)
        }, [a]);
        d.product_bucket == null && (b("recoverableViolation")("product_bucket is a required field for profile engagement logging", "profile_comet"),
        d = babelHelpers["extends"]({}, d, {
            product_bucket: "unknown"
        }));
        var e = g.useCallback(function(a) {
            h.onReady(function(a) {
                a = a.log;
                a(d)
            }),
            c && c(a)
        }, [c, d]);
        return e
    }
}
), null);
__d("CometLoggedInAccountSwitcherRowWithUpdateText.react", ["ix", "fbt", "CometBadge.react", "CometLoggedInAccountSwitcherAccountForm.react", "CometRelay", "React", "TetraListCell.react", "WebPixelRatio", "fbicon", "recoverableViolation", "useCometLoggedInAccountSwitcherRemoveAccount", "useCometLoggedInAccountSwitcherSubmitForm", "useProfileSwitcherEngagementClickCallback", "CometLoggedInAccountSwitcherRowWithUpdateText_query.graphql", "CometLoggedInAccountSwitcherRowWithUpdateText_account.graphql"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i, j, k = b("React");
    function a(a) {
        var c = b("CometRelay").useFragment(i !== void 0 ? i : i = b("CometLoggedInAccountSwitcherRowWithUpdateText_query.graphql"), a.query);
        a = b("CometRelay").useFragment(j !== void 0 ? j : j = b("CometLoggedInAccountSwitcherRowWithUpdateText_account.graphql"), a.account);
        var d = a.form
          , e = a.unread_notification_count
          , f = a.user
          , l = k.useRef(null)
          , m = b("useCometLoggedInAccountSwitcherSubmitForm")(c, l)
          , n = b("useCometLoggedInAccountSwitcherRemoveAccount")(a);
        c = {
            product_bucket: "profile_account_switcher",
            subsurface: "switch_account_menu",
            surface: "navigation"
        };
        var o = b("useProfileSwitcherEngagementClickCallback")(babelHelpers["extends"]({}, c, {
            item_type: "account"
        }))
          , p = b("useProfileSwitcherEngagementClickCallback")(babelHelpers["extends"]({}, c, {
            item_type: "remove"
        }));
        if (f == null) {
            b("recoverableViolation")("A user is required to render a CometLoggedInAccountSwitcherRowWithUpdateText", "comet_ui");
            return null
        }
        if (d == null) {
            b("recoverableViolation")("A form is required to render a CometLoggedInAccountSwitcherRowWithUpdateText", "comet_ui");
            return null
        }
        e == null && b("recoverableViolation")("We should have an unread_notification_count but we don't", "comet_ui");
        return k.jsx(b("TetraListCell.react"), {
            addOnPrimary: {
                shape: "circle",
                size: 40,
                source: {
                    height: (c = f == null ? void 0 : (a = f.switcher_profile_picture) == null ? void 0 : a.height) != null ? c : 40,
                    scale: (c = f == null ? void 0 : (a = f.switcher_profile_picture) == null ? void 0 : a.scale) != null ? c : b("WebPixelRatio").get(),
                    uri: (c = f == null ? void 0 : (a = f.switcher_profile_picture) == null ? void 0 : a.uri) != null ? c : "",
                    width: (c = f == null ? void 0 : (a = f.switcher_profile_picture) == null ? void 0 : a.width) != null ? c : 40
                },
                type: "profile-photo"
            },
            addOnSecondary: {
                "aria-label": h._("G\u1ee1 t\u00e0i kho\u1ea3n"),
                color: "secondary",
                icon: b("fbicon")._(g("478234"), 24),
                onPress: function() {
                    p(),
                    n()
                },
                type: "icon"
            },
            body: e !== null && e !== 0 ? k.jsxs(k.Fragment, {
                children: [k.jsx(b("CometBadge.react"), {}), h._({
                    "*": "{number} th\u00f4ng tin m\u1edbi",
                    "_1": "1 th\u00f4ng tin m\u1edbi"
                }, [h._plural(e || 0, "number")])]
            }) : null,
            headline: k.jsxs(k.Fragment, {
                children: [f == null ? void 0 : f.name, k.jsx(b("CometLoggedInAccountSwitcherAccountForm.react"), {
                    form: d,
                    formRef: l
                })]
            }),
            level: 4,
            onPress: function() {
                o(),
                m()
            }
        })
    }
}
), null);
__d("CometLoggedInAccountSwitcher.react", ["ix", "fbt", "CometListItemSeparator.react", "CometLoggedInAccountSwitcherRow.react", "CometLoggedInAccountSwitcherRowWithUpdateText.react", "Locale", "React", "RelayHooks", "TetraIcon.react", "TetraList.react", "TetraListCell.react", "TetraText.react", "XLoginController", "XLogoutController", "fbicon", "gkx", "stylex", "useCometLoggedInAccountSwitcherSubmitForm", "useProfileSwitcherEngagementClickCallback", "CometLoggedInAccountSwitcher_query.graphql"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i, j = b("React"), k = b("Locale").isRTL();
    function l(a) {
        if (b("gkx")("1475594"))
            return h._("B\u1ea1n s\u1ebd \u0111\u01b0\u1ee3c \u0111\u0103ng xu\u1ea5t tr\u01b0\u1edbc. Sau \u0111\u00f3, ng\u01b0\u1eddi kh\u00e1c c\u00f3 th\u1ec3 \u0111\u0103ng nh\u1eadp ho\u1eb7c th\u00eam t\u00e0i kho\u1ea3n c\u1ee7a h\u1ecd");
        return a == null ? h._("D\u1ec5 d\u00e0ng \u0111\u0103ng nh\u1eadp v\u00e0o t\u00e0i kho\u1ea3n kh\u00e1c. B\u1ea1n s\u1ebd \u0111\u01b0\u1ee3c \u0111\u0103ng xu\u1ea5t.") : h._("D\u1ec5 d\u00e0ng \u0111\u0103ng nh\u1eadp v\u00e0o t\u00e0i kho\u1ea3n kh\u00e1c. {name} s\u1ebd \u0111\u01b0\u1ee3c \u0111\u0103ng xu\u1ea5t.", [h._param("name", a)])
    }
    function a(a) {
        var c = a.onReturn;
        a = a.query;
        var d = b("RelayHooks").useFragment(i !== void 0 ? i : i = b("CometLoggedInAccountSwitcher_query.graphql"), a);
        a = j.useRef(null);
        var e = b("useCometLoggedInAccountSwitcherSubmitForm")(d, a)
          , f = b("XLoginController").getURIBuilder().setString("ref", "www_account_switcher").getURI().toString()
          , m = b("XLogoutController").getURIBuilder().setString("next", f.toString()).setString("button_name", "switch_accounts").setString("button_location", "settings").getURI().toString()
          , n = b("gkx")("1475594")
          , o = {
            product_bucket: b("gkx")("1475594") ? "profile_account_switcher" : "account_switcher",
            subsurface: "switch_account_menu",
            surface: "navigation"
        }
          , p = b("useProfileSwitcherEngagementClickCallback")(babelHelpers["extends"]({}, o, {
            item_type: "back"
        }))
          , q = b("useProfileSwitcherEngagementClickCallback")(babelHelpers["extends"]({}, o, {
            item_type: "add"
        }));
        return j.jsxs("div", {
            className: "cbu4d94t j83agx80",
            children: [j.jsxs("div", {
                className: "dati1w0a sj5x9vvc hv4rvrfc discj3wi btwxx1t3 j83agx80",
                children: [j.jsx("div", {
                    className: "scb9dxdr sj5x9vvc dflh9lhu cxgpxx05",
                    children: j.jsx(b("TetraIcon.react"), {
                        "aria-label": h._("Quay l\u1ea1i"),
                        icon: k ? b("fbicon")._(g("514454"), 20) : b("fbicon")._(g("512647"), 20),
                        onPress: function() {
                            p(),
                            c()
                        }
                    })
                }), j.jsx("div", {
                    className: "h4z51re5 j83agx80 bp9cbjyn",
                    children: j.jsx(b("TetraText.react"), {
                        type: "headlineEmphasized1",
                        children: n ? h._("Chuy\u1ec3n t\u00e0i kho\u1ea3n") : h._("Chuy\u1ec3n t\u00e0i kho\u1ea3n")
                    })
                })]
            }), j.jsxs("div", {
                className: "a8nywdso jbae33se rz4wbd8a cxgpxx05",
                children: [j.jsxs(b("TetraList.react"), {
                    children: [j.jsx(b("TetraListCell.react"), {
                        body: l(d == null ? void 0 : (o = d.viewer) == null ? void 0 : (o = o.account_user) == null ? void 0 : o.short_name),
                        bodyColor: "secondary"
                    }), ((o = d == null ? void 0 : (o = d.viewer) == null ? void 0 : o.device_switchable_accounts) != null ? o : []).map(function(a) {
                        var c;
                        return n ? j.jsx(b("CometLoggedInAccountSwitcherRowWithUpdateText.react"), {
                            account: a,
                            query: d
                        }, (c = a == null ? void 0 : (c = a.user) == null ? void 0 : c.id) != null ? c : void 0) : j.jsx(b("CometLoggedInAccountSwitcherRow.react"), {
                            account: a,
                            query: d
                        }, (a = a == null ? void 0 : (c = a.user) == null ? void 0 : c.id) != null ? a : void 0)
                    }), j.jsx(b("CometListItemSeparator.react"), {}), j.jsx(b("TetraListCell.react"), {
                        addOnPrimary: {
                            icon: b("fbicon")._(g("487087"), 20),
                            size: 36,
                            type: "contained-icon"
                        },
                        headline: h._("\u0110\u0103ng nh\u1eadp b\u1eb1ng t\u00e0i kho\u1ea3n kh\u00e1c"),
                        level: 4,
                        onPress: function() {
                            q(),
                            e()
                        }
                    })]
                }), j.jsxs("form", {
                    action: m,
                    method: "POST",
                    ref: a,
                    children: [j.jsx("input", {
                        name: "h",
                        type: "hidden",
                        value: d == null ? void 0 : (o = d.viewer) == null ? void 0 : o.logout_hash
                    }), j.jsx("input", {
                        name: "ref",
                        type: "hidden",
                        value: "mb"
                    }), j.jsx("input", {
                        name: "next",
                        type: "hidden",
                        value: f
                    })]
                })]
            })]
        })
    }
}
), null);
__d("CometProfilePlusExpressOnboardingDialog.entrypoint", ["JSResourceForInteraction", "CometProfilePlusExpressOnboardingDialogQuery$Parameters"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        getPreloadProps: function() {
            return {
                queries: {
                    cometProfilePlusExpressOnboardingQueryReference: {
                        parameters: b("CometProfilePlusExpressOnboardingDialogQuery$Parameters"),
                        variables: {}
                    }
                }
            }
        },
        root: b("JSResourceForInteraction")("CometProfilePlusExpressOnboardingDialog.react").__setRef("CometProfilePlusExpressOnboardingDialog.entrypoint")
    };
    e.exports = a
}
), null);
__d("CometProfileSwitcherPagePublishingAuthorizationCard.react", ["ix", "fbt", "CometImage.react", "CometTextWithEntitiesRelay.react", "PagesIntegrityEventTypedLoggerLite", "React", "RelayHooks", "TetraButton.react", "TetraText.react", "asset", "stylex", "CometProfileSwitcherPagePublishingAuthorizationCard_query.graphql"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i, j = b("React"), k = b("PagesIntegrityEventTypedLoggerLite").log;
    function a(a) {
        var c, d;
        a = a.query;
        a = b("RelayHooks").useFragment(i !== void 0 ? i : i = b("CometProfileSwitcherPagePublishingAuthorizationCard_query.graphql"), a);
        c = a == null ? void 0 : (c = a.viewer) == null ? void 0 : (c = c.actor) == null ? void 0 : c.id;
        var e = a == null ? void 0 : (d = a.viewer) == null ? void 0 : (d = d.actor) == null ? void 0 : d.page_publishing_authorization_admin_notice;
        d = a == null ? void 0 : (d = a.viewer) == null ? void 0 : (a = d.actor) == null ? void 0 : a.page_publishing_authorization_hub_action_url;
        j.useEffect(function() {
            e != null && k({
                event: "view",
                event_callsite: "profile_plus_switcher",
                event_target: "profile_plus_switcher_banner",
                extra_data: {
                    is_comet_render: "true"
                }
            })
        }, [e]);
        return c == null || e == null || d == null ? null : j.jsx("div", {
            className: "dati1w0a hv4rvrfc sj5x9vvc",
            children: j.jsxs("div", {
                className: "dati1w0a hv4rvrfc sj5x9vvc qsy8amke",
                children: [j.jsxs("div", {
                    className: "discj3wi scb9dxdr dflh9lhu sj5x9vvc btwxx1t3 j83agx80",
                    children: [j.jsx("div", {
                        children: j.jsx(b("CometImage.react"), {
                            src: g("489662")
                        })
                    }), j.jsx("div", {
                        className: "tw6a2znq lrazzd5p jq4qci2q j83agx80 bp9cbjyn",
                        children: j.jsx(b("TetraText.react"), {
                            type: "headlineEmphasized4",
                            children: j.jsx(b("CometTextWithEntitiesRelay.react"), {
                                textWithEntities: e
                            })
                        })
                    })]
                }), j.jsx("div", {
                    className: "discj3wi dati1w0a hv4rvrfc ihqw7lf3 bp9cbjyn",
                    children: j.jsx(b("TetraButton.react"), {
                        label: h._("B\u1eaft \u0111\u1ea7u"),
                        linkProps: {
                            target: "_blank",
                            url: d
                        },
                        onPress: function() {
                            return k({
                                event: "click",
                                event_callsite: "profile_plus_switcher",
                                event_target: "get_started_button",
                                extra_data: {
                                    is_comet_render: "true"
                                }
                            })
                        },
                        padding: "wide"
                    })
                })]
            })
        })
    }
}
), null);
__d("CometProfileSwitcher.react", ["ix", "fbt", "CometBadge.react", "CometProfilePlusExpressOnboardingDialog.entrypoint", "CometProfileSwitcherPagePublishingAuthorizationCard.react", "Locale", "React", "RelayHooks", "TetraIcon.react", "TetraList.react", "TetraListCell.react", "TetraText.react", "WebPixelRatio", "fbicon", "goForceFullPageRedirectTo", "promiseDone", "stylex", "JSResource", "useCometEntryPointDialog", "useProfileSwitcherEngagementClickCallback", "CometRelay", "useCodedErrorDialog", "useIsMountedRef", "useProfileCometSwitcherCleanUpOnSwap", "CometProfileSwitcher_query.graphql"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i, j = b("React"), k = b("Locale").isRTL(), l = b("JSResource")("CometProfileSwitchMutation").__setRef("CometProfileSwitcher.react");
    function a(a) {
        var c, d, e, f = a.onClose, m = a.onReturn;
        a = a.query;
        a = b("RelayHooks").useFragment(i !== void 0 ? i : i = b("CometProfileSwitcher_query.graphql"), a);
        c = {
            profile: a == null ? void 0 : (c = a.viewer) == null ? void 0 : c.actor,
            should_open_express_onboarding: !1
        } || {};
        d = (d = a == null ? void 0 : (d = a.viewer) == null ? void 0 : (d = d.actor) == null ? void 0 : (d = d.profile_switcher_eligible_profiles) == null ? void 0 : d.nodes) != null ? d : [];
        e = j.useState(a == null ? void 0 : (e = a.viewer) == null ? void 0 : (e = e.actor) == null ? void 0 : e.id);
        var n = e[0]
          , o = e[1]
          , p = (e = a == null ? void 0 : (e = a.viewer) == null ? void 0 : (e = e.actor) == null ? void 0 : e.is_failing_page_publishing_authorization) != null ? e : !1
          , q = b("useProfileSwitcherEngagementClickCallback")({
            item_type: "profile",
            product_bucket: "profile_account_switcher",
            subsurface: "switch_profile_menu",
            surface: "navigation"
        })
          , r = b("useProfileCometSwitcherCleanUpOnSwap")(a)
          , s = b("CometRelay").useRelayEnvironment()
          , t = b("useIsMountedRef")();
        e = b("useCodedErrorDialog")(h._("Kh\u00f4ng th\u1ec3 chuy\u1ec3n trang c\u00e1 nh\u00e2n"));
        var u = e[0]
          , v = function(a) {
            b("promiseDone")(l.load().then(function(c) {
                c = c.switchProfile;
                c(s, {
                    profileId: a
                }, {
                    onCompleted: function() {
                        t.current && f(),
                        r(),
                        b("goForceFullPageRedirectTo")("/")
                    },
                    onError: function(a) {
                        f(),
                        u(a)
                    }
                })
            }))
        };
        e = b("useCometEntryPointDialog")(b("CometProfilePlusExpressOnboardingDialog.entrypoint"), {});
        var w = e[0];
        return j.jsxs("div", {
            className: "cbu4d94t j83agx80",
            children: [j.jsxs("div", {
                className: "discj3wi dati1w0a hv4rvrfc sj5x9vvc btwxx1t3 j83agx80",
                children: [j.jsx("div", {
                    className: "scb9dxdr sj5x9vvc dflh9lhu cxgpxx05",
                    children: j.jsx(b("TetraIcon.react"), {
                        "aria-label": h._("Quay l\u1ea1i"),
                        icon: k ? b("fbicon")._(g("514454"), 20) : b("fbicon")._(g("512647"), 20),
                        onPress: m
                    })
                }), j.jsx("div", {
                    className: "tw6a2znq j83agx80 bp9cbjyn",
                    children: j.jsx(b("TetraText.react"), {
                        type: "headlineEmphasized1",
                        children: h._("Ch\u1ecdn trang c\u00e1 nh\u00e2n")
                    })
                })]
            }), j.jsx(b("CometProfileSwitcherPagePublishingAuthorizationCard.react"), {
                query: a
            }), j.jsx("div", {
                className: "cxgpxx05 jbae33se",
                children: j.jsx(b("TetraList.react"), {
                    children: [c].concat(d).map(function(a) {
                        var c = a.profile
                          , d = a.should_open_express_onboarding;
                        return c != null ? j.jsx(b("TetraListCell.react"), {
                            addOnPrimary: {
                                shape: "circle",
                                size: 40,
                                source: {
                                    height: (a = c == null ? void 0 : (a = c.profile_picture) == null ? void 0 : a.height) != null ? a : 40,
                                    scale: (a = c == null ? void 0 : (a = c.profile_picture) == null ? void 0 : a.scale) != null ? a : b("WebPixelRatio").get(),
                                    uri: (a = c == null ? void 0 : (a = c.profile_picture) == null ? void 0 : a.uri) != null ? a : "",
                                    width: (a = c == null ? void 0 : (a = c.profile_picture) == null ? void 0 : a.width) != null ? a : 40
                                },
                                type: "profile-photo"
                            },
                            addOnSecondary: {
                                on: n === c.id,
                                type: "radio"
                            },
                            addOnSecondaryVerticalAlign: "center",
                            body: p && n !== c.id ? j.jsxs(j.Fragment, {
                                children: [j.jsx(b("CometBadge.react"), {
                                    color: "red"
                                }), h._("T\u1ea1m th\u1eddi b\u1ecb h\u1ea1n ch\u1ebf")]
                            }) : c.unseen_update_count !== null && c.unseen_update_count !== 0 ? j.jsxs(j.Fragment, {
                                children: [j.jsx(b("CometBadge.react"), {}), h._({
                                    "*": "{number} th\u00f4ng tin m\u1edbi",
                                    "_1": "1 th\u00f4ng tin m\u1edbi"
                                }, [h._plural(c.unseen_update_count || 0, "number")])]
                            }) : null,
                            disabled: p && n !== c.id,
                            headline: c.name,
                            level: 4,
                            onPress: function() {
                                o(c.id);
                                q();
                                if (d === !0) {
                                    var a;
                                    f();
                                    w({
                                        followerString: c.timeline_context_items && ((a = c.timeline_context_items) == null ? void 0 : (a = a.nodes[0]) == null ? void 0 : (a = a.title) == null ? void 0 : a.text),
                                        profileID: c.id,
                                        profileName: c.name
                                    })
                                } else
                                    v(c.id)
                            },
                            testid: void 0
                        }, c.id) : null
                    })
                })
            })]
        })
    }
}
), null);
__d("CometSettingsDropdownAccessibility.react", ["ix", "fbt", "CometDarkModeContext", "Locale", "React", "TetraIcon.react", "TetraList.react", "TetraListCell.react", "TetraText.react", "fbicon", "gkx", "stylex", "useShouldRenderFullTopNav"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i = b("React")
      , j = b("Locale").isRTL();
    function a(a) {
        var c = a.onClose;
        a = a.onReturn;
        var d = i.useContext(b("CometDarkModeContext"))
          , e = d.isDarkModeEnabled;
        d = d.onDarkModeToggle;
        var f = b("useShouldRenderFullTopNav")();
        e = [{
            cellProps: {
                addOnPrimary: {
                    icon: b("fbicon")._(g("832941"), 20),
                    size: 36,
                    type: "contained-icon"
                },
                addOnSecondary: {
                    type: "switch",
                    value: e
                },
                headline: h._("Ch\u1ebf \u0111\u1ed9 t\u1ed1i"),
                level: 4,
                onPress: d
            },
            itemKey: "dark-mode",
            render: b("gkx")("919810") && f && !b("gkx")("1721831")
        }, {
            cellProps: {
                addOnPrimary: {
                    icon: b("fbicon")._(g("1252034"), 20),
                    size: 36,
                    type: "contained-icon"
                },
                headline: h._("C\u1ee1 ch\u1eef"),
                level: 4,
                linkProps: {
                    target: "_blank",
                    url: "/"
                },
                onPress: c
            },
            itemKey: "font-size",
            render: !0
        }, {
            cellProps: {
                addOnPrimary: {
                    icon: b("fbicon")._(g("577844"), 20),
                    size: 36,
                    type: "contained-icon"
                },
                headline: h._("Ph\u00edm t\u1eaft b\u00e0n ph\u00edm"),
                level: 4,
                linkProps: {
                    target: "_blank",
                    url: "/"
                },
                onPress: c
            },
            itemKey: "keyboard-shortcuts",
            render: !0
        }, {
            cellProps: {
                addOnPrimary: {
                    icon: b("fbicon")._(g("1279095"), 20),
                    size: 36,
                    type: "contained-icon"
                },
                headline: h._("\u0110\u1ed9 t\u01b0\u01a1ng ph\u1ea3n"),
                level: 4,
                linkProps: {
                    target: "_blank",
                    url: "/"
                },
                onPress: c
            },
            itemKey: "contrast",
            render: !0
        }, {
            cellProps: {
                addOnPrimary: {
                    icon: b("fbicon")._(g("662652"), 20),
                    size: 36,
                    type: "contained-icon"
                },
                headline: h._("Ch\u00fa th\u00edch"),
                level: 4,
                linkProps: {
                    target: "_blank",
                    url: "/"
                },
                onPress: c
            },
            itemKey: "captions-settings",
            render: !0
        }, {
            cellProps: {
                addOnPrimary: {
                    icon: b("fbicon")._(g("508554"), 20),
                    size: 36,
                    type: "contained-icon"
                },
                headline: h._("C\u00e0i \u0111\u1eb7t ph\u1ea7n v\u0103n b\u1ea3n thay th\u1ebf"),
                level: 4,
                linkProps: {
                    target: "_blank",
                    url: "/"
                },
                onPress: c
            },
            itemKey: "alt-settings",
            render: !0
        }].filter(function(a) {
            return a.render
        });
        return i.jsxs("div", {
            className: "cbu4d94t j83agx80",
            children: [i.jsxs("div", {
                className: "dati1w0a sj5x9vvc hv4rvrfc discj3wi btwxx1t3 j83agx80",
                children: [i.jsx("div", {
                    className: "scb9dxdr sj5x9vvc dflh9lhu cxgpxx05",
                    children: i.jsx(b("TetraIcon.react"), {
                        "aria-label": h._("Quay l\u1ea1i"),
                        icon: j ? b("fbicon")._(g("514454"), 20) : b("fbicon")._(g("512647"), 20),
                        onPress: a
                    })
                }), i.jsx("div", {
                    className: "h4z51re5 j83agx80 bp9cbjyn",
                    children: i.jsx(b("TetraText.react"), {
                        type: "headlineEmphasized1",
                        children: h._("Kh\u1ea3 n\u0103ng truy c\u1eadp & t\u00f9y ch\u1ecdn")
                    })
                })]
            }), i.jsx("div", {
                className: "a8nywdso jbae33se rz4wbd8a cxgpxx05",
                children: i.jsx(b("TetraList.react"), {
                    items: e,
                    children: function(a) {
                        var c = a.item.cellProps;
                        a = a.props;
                        return i.createElement(b("TetraListCell.react"), babelHelpers["extends"]({}, c, {
                            key: a.key
                        }))
                    }
                })
            })]
        })
    }
}
), null);
__d("CometSettingsDropdownAppearance.react", ["ix", "fbt", "CometDarkModeContext", "CometDensityModeContext", "Locale", "React", "TetraIcon.react", "TetraList.react", "TetraListCell.react", "TetraText.react", "fbicon", "stylex", "useTopNavigationLogging"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i, j = b("React"), k = b("Locale").isRTL(), l = {
        header: {
            display: "j83agx80",
            flexDirection: "btwxx1t3",
            paddingTop: "discj3wi",
            paddingEnd: "hv4rvrfc",
            paddingBottom: "sj5x9vvc",
            paddingStart: "dati1w0a"
        },
        icon: {
            paddingTop: "cxgpxx05",
            paddingEnd: "dflh9lhu",
            paddingBottom: "sj5x9vvc",
            paddingStart: "scb9dxdr"
        },
        list: {
            paddingTop: "cxgpxx05",
            paddingEnd: "rz4wbd8a",
            paddingBottom: "jbae33se",
            paddingStart: "a8nywdso"
        },
        root: {
            display: "j83agx80",
            flexDirection: "cbu4d94t"
        },
        spacer: {
            width: "thwo4zme"
        },
        title: {
            alignItems: "bp9cbjyn",
            display: "j83agx80",
            paddingStart: "h4z51re5"
        }
    }, m = {
        component: j.jsx("div", {
            className: (i || (i = b("stylex")))(l.spacer)
        }),
        type: "group_member_profile_primary_addon"
    };
    function a(a) {
        a = a.onReturn;
        var c = j.useContext(b("CometDarkModeContext"))
          , d = c.isDarkModeEnabled
          , e = c.setDarkModePreference;
        c = j.useContext(b("CometDensityModeContext"));
        var f = c[0]
          , n = c[1];
        c = b("useTopNavigationLogging").useSettingsItemLoggingCallbacks("dark-mode", 1, d);
        var o = c[0];
        c = c[1];
        var p = b("useTopNavigationLogging").useSettingsItemLoggingCallbacks("compact-mode", 2, f)
          , q = p[0];
        p = p[1];
        return j.jsxs("div", {
            className: (i || (i = b("stylex")))(l.root),
            children: [j.jsxs("div", {
                className: i(l.header),
                children: [j.jsx("div", {
                    className: i(l.icon),
                    children: j.jsx(b("TetraIcon.react"), {
                        "aria-label": h._("Quay l\u1ea1i"),
                        icon: k ? b("fbicon")._(g("514454"), 20) : b("fbicon")._(g("512647"), 20),
                        onPress: a
                    })
                }), j.jsx("div", {
                    className: i(l.title),
                    children: j.jsx(b("TetraText.react"), {
                        isSemanticHeading: !0,
                        type: "headlineEmphasized1",
                        children: h._("Hi\u1ec3n th\u1ecb t\u00f9y ch\u1ecdn")
                    })
                })]
            }), j.jsx("div", {
                className: i(l.list),
                children: j.jsxs(b("TetraList.react"), {
                    children: [j.jsx(b("TetraListCell.react"), {
                        addOnPrimary: {
                            icon: b("fbicon")._(g("832941"), 20),
                            size: 36,
                            type: "contained-icon"
                        },
                        emphasized: !0,
                        headline: h._("Giao di\u1ec7n")
                    }), j.jsx(b("TetraListCell.react"), {
                        addOnPrimary: m,
                        addOnSecondary: {
                            on: !d,
                            type: "radio"
                        },
                        headline: h._("Ch\u1ebf \u0111\u1ed9 s\u00e1ng"),
                        level: 4,
                        onPress: d ? function() {
                            o(),
                            e(!1)
                        }
                        : void 0,
                        ref: d ? c : void 0
                    }), j.jsx(b("TetraListCell.react"), {
                        addOnPrimary: m,
                        addOnSecondary: {
                            on: d,
                            type: "radio"
                        },
                        headline: h._("Ch\u1ebf \u0111\u1ed9 t\u1ed1i"),
                        level: 4,
                        onPress: d ? void 0 : function() {
                            o(),
                            e(!0)
                        }
                        ,
                        ref: d ? void 0 : c
                    }), j.jsx(b("TetraListCell.react"), {
                        addOnPrimary: {
                            icon: b("fbicon")._(g("1252034"), 20),
                            size: 36,
                            type: "contained-icon"
                        },
                        emphasized: !0,
                        headline: h._("M\u1eadt \u0111\u1ed9")
                    }), j.jsx(b("TetraListCell.react"), {
                        addOnPrimary: m,
                        addOnSecondary: {
                            on: !f,
                            type: "radio"
                        },
                        headline: h._("Ti\u00eau chu\u1ea9n"),
                        level: 4,
                        onPress: f ? function() {
                            q(),
                            n(!1)
                        }
                        : void 0,
                        ref: f ? p : void 0
                    }), j.jsx(b("TetraListCell.react"), {
                        addOnPrimary: m,
                        addOnSecondary: {
                            on: f,
                            type: "radio"
                        },
                        headline: h._("Cao"),
                        level: 4,
                        onPress: f ? void 0 : function() {
                            q(),
                            n(!0)
                        }
                        ,
                        ref: f ? void 0 : p
                    })]
                })
            })]
        })
    }
    c = a;
    e.exports = c
}
), null);
__d("CometSettingsDropdownHeader.react", ["fbt", "CometRelay", "React", "TetraListCell.react", "XCometMeControllerRouteBuilder", "gkx", "useTopNavigationLogging", "CometSettingsDropdownHeader_viewer.graphql"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h, i = b("React"), j = b("XCometMeControllerRouteBuilder").buildURL({});
    function a(a) {
        var c, d, e, f = a.onClick, k = a.selected;
        a = a.viewer;
        a = b("CometRelay").useFragment(h !== void 0 ? h : h = b("CometSettingsDropdownHeader_viewer.graphql"), a);
        c = a == null ? void 0 : (c = a.actor) == null ? void 0 : c.name;
        d = a == null ? void 0 : (d = a.actor) == null ? void 0 : (d = d.settings_dropdown_profile_picture) == null ? void 0 : d.uri;
        var l = b("useTopNavigationLogging").useSettingsItemLoggingCallbacks("profile", 0, !1)
          , m = l[0];
        l = l[1];
        e = ((a == null ? void 0 : (e = a.actor) == null ? void 0 : (e = e.profileSwitcherEligibleProfiles) == null ? void 0 : e.count) || 0) > 0;
        e = b("gkx")("1663500") && e;
        var n = e ? 36 : 60;
        return c == null ? null : i.jsx(b("TetraListCell.react"), {
            addOnPrimary: d == null ? void 0 : {
                shape: "circle",
                size: n,
                source: {
                    height: n,
                    uri: d,
                    width: n
                },
                type: "profile-photo"
            },
            addOnPrimaryVerticalAlign: "center",
            addOnSecondary: k != null && e ? {
                on: k,
                type: "radio"
            } : null,
            addOnSecondaryVerticalAlign: "center",
            body: (a == null ? void 0 : (d = a.actor) == null ? void 0 : d.should_use_page_rename) === !0 ? g._("Xem Trang c\u1ee7a b\u1ea1n") : g._("Xem trang c\u00e1 nh\u00e2n c\u1ee7a b\u1ea1n"),
            emphasized: !0,
            headline: c,
            level: e ? 4 : 3,
            linkProps: {
                routeTarget: "self",
                url: j
            },
            onPress: function(a) {
                f && f(a),
                m()
            },
            ref: l
        })
    }
}
), null);
__d("CometSettingsDropdownListItem.react", ["React", "TetraListCell.react", "useTopNavigationLogging"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.cellProps
          , d = a.itemKey
          , e = a.position;
        a = a.selected;
        var f = c.onPress;
        d = b("useTopNavigationLogging").useSettingsItemLoggingCallbacks(d, e, a);
        var h = d[0];
        e = d[1];
        a = g.useCallback(function(a) {
            h(),
            f && f(a)
        }, [h, f]);
        return g.jsx(b("TetraListCell.react"), babelHelpers["extends"]({}, c, {
            onPress: a,
            ref: e
        }))
    }
}
), null);
__d("CometSettingsDropdownQuickHelp.react", ["ix", "fbt", "CometFRX.entrypoint", "CometRelay", "Locale", "React", "TetraIcon.react", "TetraList.react", "TetraListCell.react", "TetraText.react", "XCometPrivacyCheckupControllerRouteBuilder", "fbicon", "gkx", "stylex", "useCometEntryPointDialog", "useCometReportBug", "useNullthrowsViolation", "useShouldRenderFullTopNav", "CometSettingsDropdownQuickHelpQuery.graphql"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i, j = b("React"), k = b("Locale").isRTL();
    function a(a) {
        var c = a.onClose;
        a = a.onReturn;
        var d = b("CometRelay").useLazyLoadQuery(i !== void 0 ? i : i = b("CometSettingsDropdownQuickHelpQuery.graphql"), {});
        d = b("useNullthrowsViolation")((d = d.viewer) == null ? void 0 : (d = d.account_user) == null ? void 0 : d.id);
        var e = b("useCometReportBug")()
          , f = e[0];
        e = b("useCometEntryPointDialog")(b("CometFRX.entrypoint"), {
            entryPoint: "STRUCTURED_REPORT_BUTTON",
            id: d,
            location: "help_and_support"
        });
        var l = e[0];
        d = b("useShouldRenderFullTopNav")();
        e = [{
            cellProps: {
                addOnPrimary: {
                    icon: b("fbicon")._(g("496951"), 20),
                    size: 36,
                    type: "contained-icon"
                },
                headline: h._("Trung t\u00e2m tr\u1ee3 gi\u00fap"),
                level: 4,
                linkProps: {
                    target: "_blank",
                    url: "https://www.facebook.com/help/"
                },
                onPress: c
            },
            render: !0
        }, {
            cellProps: {
                addOnPrimary: {
                    icon: b("fbicon")._(g("497245"), 20),
                    size: 36,
                    type: "contained-icon"
                },
                headline: h._("Ki\u1ec3m tra quy\u1ec1n ri\u00eang t\u01b0"),
                level: 4,
                linkProps: {
                    url: b("XCometPrivacyCheckupControllerRouteBuilder").buildURL({
                        source: "quick_help"
                    })
                },
                onPress: c
            },
            render: !1
        }, {
            cellProps: {
                addOnPrimary: {
                    icon: b("fbicon")._(g("497567"), 20),
                    size: 36,
                    type: "contained-icon"
                },
                headline: h._("L\u1ed1i t\u1eaft quy\u1ec1n ri\u00eang t\u01b0"),
                level: 4,
                linkProps: {
                    url: "/privacy/"
                },
                onPress: c
            },
            render: !1
        }, {
            cellProps: {
                addOnPrimary: {
                    icon: b("fbicon")._(g("508554"), 20),
                    size: 36,
                    type: "contained-icon"
                },
                headline: h._("C\u1ed9ng \u0111\u1ed3ng Tr\u1ee3 gi\u00fap"),
                level: 4,
                linkProps: {
                    target: "_blank",
                    url: "https://www.facebook.com/help/community/"
                },
                onPress: c
            },
            render: !0
        }, {
            cellProps: {
                addOnPrimary: {
                    icon: b("fbicon")._(g("495079"), 20),
                    size: 36,
                    type: "contained-icon"
                },
                headline: h._("B\u00e1o c\u00e1o h\u00e0nh vi can thi\u1ec7p \u0111\u1ebfn c\u1eed tri ho\u1eb7c d\u00e2n s\u1ed1"),
                level: 4,
                onPress: function() {
                    l({}),
                    c()
                }
            },
            render: b("gkx")("1300497")
        }, {
            cellProps: {
                addOnPrimary: {
                    icon: b("fbicon")._(g("495079"), 20),
                    size: 36,
                    type: "contained-icon"
                },
                headline: h._("H\u1ed9p th\u01b0 h\u1ed7 tr\u1ee3"),
                level: 4,
                linkProps: {
                    url: "/support?ref=contextual"
                },
                onPress: c
            },
            render: d
        }, {
            cellProps: {
                addOnPrimary: {
                    icon: b("fbicon")._(g("490580"), 20),
                    size: 36,
                    type: "contained-icon"
                },
                headline: h._("B\u00e1o c\u00e1o s\u1ef1 c\u1ed1"),
                level: 4,
                onPress: function() {
                    f(),
                    c()
                }
            },
            render: !0
        }].filter(function(a) {
            return a.render
        });
        return j.jsxs("div", {
            className: "cbu4d94t j83agx80",
            children: [j.jsxs("div", {
                className: "dati1w0a sj5x9vvc hv4rvrfc discj3wi btwxx1t3 j83agx80",
                children: [j.jsx("div", {
                    className: "scb9dxdr sj5x9vvc dflh9lhu cxgpxx05",
                    children: j.jsx(b("TetraIcon.react"), {
                        "aria-label": h._("Quay l\u1ea1i"),
                        icon: k ? b("fbicon")._(g("514454"), 20) : b("fbicon")._(g("512647"), 20),
                        onPress: a
                    })
                }), j.jsx("div", {
                    className: "h4z51re5 j83agx80 bp9cbjyn",
                    children: j.jsx(b("TetraText.react"), {
                        isSemanticHeading: !0,
                        type: "headlineEmphasized1",
                        children: h._("Tr\u1ee3 gi\u00fap & h\u1ed7 tr\u1ee3")
                    })
                })]
            }), j.jsx("div", {
                className: "a8nywdso jbae33se rz4wbd8a cxgpxx05",
                children: j.jsx(b("TetraList.react"), {
                    items: e,
                    children: function(a) {
                        var c = a.item.cellProps;
                        a = a.props;
                        return j.createElement(b("TetraListCell.react"), babelHelpers["extends"]({}, c, {
                            key: a.key
                        }))
                    }
                })
            })]
        })
    }
}
), null);
__d("CometSettingsDropdownSettingsAndPrivacy.react", ["ix", "fbt", "CometRelay", "CometSettingsDropdownListItem.react", "Locale", "React", "TetraIcon.react", "TetraList.react", "TetraText.react", "XCometActivityLogControllerRouteBuilder", "XCometPrivacyCheckupControllerRouteBuilder", "fbicon", "gkx", "recoverableViolation", "requireCond", "stylex", "useCometFeedPreferencesDialog", "useCometInteractionTracing", "useShouldRenderFullTopNav", "cr:1571188", "CometSettingsDropdownSettingsAndPrivacy_viewer.graphql"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i, j = b("React"), k = (c = b("cr:1571188")) != null ? c : function() {
        return null
    }
    , l = b("Locale").isRTL();
    function a(a) {
        var c, d, e = a.onClose, f = a.onReturn;
        a = a.viewer;
        a = b("CometRelay").useFragment(i !== void 0 ? i : i = b("CometSettingsDropdownSettingsAndPrivacy_viewer.graphql"), a);
        var m = k();
        c = a == null ? void 0 : (c = a.actor) == null ? void 0 : c.username;
        d = a == null ? void 0 : (d = a.actor) == null ? void 0 : d.id;
        d = c == null || c === "" ? d : c;
        c = d == null || d === "" ? null : b("XCometActivityLogControllerRouteBuilder").buildURL({
            vanity: d
        });
        c == null && b("recoverableViolation")("Was not able to get activity log uri for settings menu", "comet_ui");
        d = (a == null ? void 0 : a.is_eligible_for_account_level_settings) === !0;
        a = d && !b("gkx")("1545458");
        var n = b("useCometFeedPreferencesDialog")()
          , o = n[0];
        n = n[1];
        var p = b("useCometInteractionTracing")(30605385, "responsive", "INTERACTION")
          , q = b("useShouldRenderFullTopNav")();
        a = [{
            cellProps: {
                addOnPrimary: {
                    icon: b("fbicon")._(g("497567"), 20),
                    size: 36,
                    type: "contained-icon"
                },
                headline: h._("C\u00e0i \u0111\u1eb7t"),
                level: 4,
                linkProps: {
                    url: "/settings"
                },
                onPress: e,
                testid: "CometSettingsButton"
            },
            itemKey: "settings-privacy",
            render: q
        }, d === !1 ? null : {
            cellProps: {
                addOnPrimary: {
                    icon: b("fbicon")._(g("789724"), 20),
                    size: 36,
                    type: "contained-icon"
                },
                headline: h._("Ki\u1ec3m tra quy\u1ec1n ri\u00eang t\u01b0"),
                level: 4,
                linkProps: {
                    url: b("XCometPrivacyCheckupControllerRouteBuilder").buildURL({
                        source: "settings_and_privacy"
                    })
                },
                onPress: e,
                testid: "CometSettingsDropdownPrivacyCheckup"
            },
            itemKey: "privacy-checkup",
            render: q
        }, a === !1 ? null : {
            cellProps: {
                addOnPrimary: {
                    icon: b("fbicon")._(g("497245"), 20),
                    size: 36,
                    type: "contained-icon"
                },
                headline: h._("L\u00f4\u0301i t\u1eaft quy\u1ec1n ri\u00eang t\u01b0"),
                level: 4,
                linkProps: {
                    url: "/privacy/"
                },
                onPress: e
            },
            itemKey: "privacy",
            render: q
        }, c == null ? null : {
            cellProps: {
                addOnPrimary: {
                    icon: b("fbicon")._(g("486354"), 20),
                    size: 36,
                    type: "contained-icon"
                },
                headline: h._("Nh\u1eadt k\u00fd ho\u1ea1t \u0111\u1ed9ng"),
                level: 4,
                linkProps: {
                    url: c
                },
                onPress: e
            },
            itemKey: "activity-log",
            render: q
        }, {
            cellProps: {
                addOnPrimary: {
                    icon: b("fbicon")._(g("607148"), 20),
                    size: 36,
                    type: "contained-icon"
                },
                headline: h._("T\u00f9y ch\u1ecdn B\u1ea3ng tin"),
                level: 4,
                onPress: function() {
                    p(function(a) {
                        a.addMetadata("SurfaceType", "Comet"),
                        o()
                    }),
                    e()
                },
                onPressIn: n,
                testid: "CometNewsFeedPreferencesButton"
            },
            itemKey: "news-feed-preferences",
            render: q
        }, d === !1 ? null : {
            cellProps: {
                addOnPrimary: {
                    icon: b("fbicon")._(g("487622"), 20),
                    size: 36,
                    type: "contained-icon"
                },
                headline: h._("Ng\u00f4n ng\u1eef"),
                level: 4,
                linkProps: {
                    url: "/settings?tab=language"
                },
                onPress: e,
                testid: "CometSettingsButton"
            },
            itemKey: "language",
            render: q
        }, m].filter(Boolean).filter(function(a) {
            return a.render
        });
        return j.jsxs("div", {
            className: "cbu4d94t j83agx80",
            children: [j.jsxs("div", {
                className: "dati1w0a sj5x9vvc hv4rvrfc discj3wi btwxx1t3 j83agx80",
                children: [j.jsx("div", {
                    className: "scb9dxdr sj5x9vvc dflh9lhu cxgpxx05",
                    children: j.jsx(b("TetraIcon.react"), {
                        "aria-label": h._("Quay l\u1ea1i"),
                        icon: l ? b("fbicon")._(g("514454"), 20) : b("fbicon")._(g("512647"), 20),
                        onPress: f
                    })
                }), j.jsx("div", {
                    className: "h4z51re5 j83agx80 bp9cbjyn",
                    children: j.jsx(b("TetraText.react"), {
                        isSemanticHeading: !0,
                        type: "headlineEmphasized1",
                        children: h._("C\u00e0i \u0111\u1eb7t & quy\u1ec1n ri\u00eang t\u01b0")
                    })
                })]
            }), j.jsx("div", {
                className: "a8nywdso jbae33se rz4wbd8a cxgpxx05",
                children: j.jsx(b("TetraList.react"), {
                    items: a,
                    children: function(a) {
                        var c, d = a.item, e = d.cellProps;
                        d = d.itemKey;
                        a = a.props;
                        var f = e.addOnSecondary;
                        c = (c = a.key) != null ? c : -1;
                        f = f != null && f.value != null ? f.value : !1;
                        return j.jsx(b("CometSettingsDropdownListItem.react"), {
                            cellProps: e,
                            itemKey: d,
                            position: c,
                            selected: f
                        }, a.key)
                    }
                })
            })]
        })
    }
}
), null);
__d("getProfileSwitcherListCellProps", ["fbt", "CometBadge.react", "React", "TetraListCell.react", "WebPixelRatio"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a(a) {
        var c, d = a.isFailingPagePublishingAuthorization;
        d = d === void 0 ? !1 : d;
        var e = a.onPress;
        e = e === void 0 ? function() {}
        : e;
        var f = a.user
          , i = a.selected;
        i = i === void 0 ? !1 : i;
        var j = a.size;
        j = j === void 0 ? 40 : j;
        a = a.testid;
        return {
            addOnPrimary: {
                shape: "circle",
                size: j,
                source: {
                    height: (c = f == null ? void 0 : (c = f.profile_picture) == null ? void 0 : c.height) != null ? c : j,
                    scale: (c = f == null ? void 0 : (c = f.profile_picture) == null ? void 0 : c.scale) != null ? c : b("WebPixelRatio").get(),
                    uri: (c = f == null ? void 0 : (c = f.profile_picture) == null ? void 0 : c.uri) != null ? c : "",
                    width: (c = f == null ? void 0 : (c = f.profile_picture) == null ? void 0 : c.width) != null ? c : j
                },
                type: "profile-photo"
            },
            addOnSecondary: {
                on: i,
                type: "radio"
            },
            addOnSecondaryVerticalAlign: "center",
            body: d && !i ? h.jsxs(h.Fragment, {
                children: [h.jsx(b("CometBadge.react"), {
                    color: "red"
                }), g._("T\u1ea1m th\u1eddi b\u1ecb h\u1ea1n ch\u1ebf")]
            }) : (f == null ? void 0 : f.unseen_update_count) !== null && (f == null ? void 0 : f.unseen_update_count) !== 0 ? h.jsxs(h.Fragment, {
                children: [h.jsx(b("CometBadge.react"), {}), g._({
                    "*": "{number} th\u00f4ng b\u00e1o m\u1edbi",
                    "_1": "1 th\u00f4ng b\u00e1o m\u1edbi"
                }, [g._plural((f == null ? void 0 : f.unseen_update_count) || 0, "number")])]
            }) : null,
            disabled: d && !i,
            headline: f == null ? void 0 : f.name,
            level: 4,
            onPress: e,
            testid: a
        }
    }
}
), null);
__d("CometProfileSwitcherListCell.react", ["CometRelay", "React", "TetraListCell.react", "getProfileSwitcherListCellProps", "useProfileSwitcherEngagementClickCallback", "CometProfileSwitcherListCell_profile.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React");
    function a(a) {
        var c, d = a.isFailingPagePublishingAuthorization;
        d = d === void 0 ? !1 : d;
        var e = a.loggerData
          , f = a.onClick
          , i = a.profile;
        a = a.selected;
        a = a === void 0 ? !1 : a;
        i = b("CometRelay").useFragment(g !== void 0 ? g : g = b("CometProfileSwitcherListCell_profile.graphql"), i);
        var j = b("useProfileSwitcherEngagementClickCallback")((c = e) != null ? c : {});
        d = b("getProfileSwitcherListCellProps")({
            isFailingPagePublishingAuthorization: d,
            onPress: function() {
                e != null && j(),
                f && f()
            },
            selected: a,
            size: 40,
            user: {
                id: i == null ? void 0 : i.id,
                name: i == null ? void 0 : i.name,
                profile_picture: {
                    height: i == null ? void 0 : (c = i.profile_picture) == null ? void 0 : c.height,
                    scale: i == null ? void 0 : (d = i.profile_picture) == null ? void 0 : d.scale,
                    uri: i == null ? void 0 : (a = i.profile_picture) == null ? void 0 : a.uri,
                    width: i == null ? void 0 : (c = i.profile_picture) == null ? void 0 : c.width
                },
                unseen_update_count: i == null ? void 0 : i.unseen_update_count
            }
        });
        return h.jsx(b("TetraListCell.react"), babelHelpers["extends"]({}, d))
    }
}
), null);
__d("CometProfileAndAccountSwitcher.react", ["ix", "fbt", "CometBadge.react", "CometListItemSeparator.react", "CometLoggedInAccountSwitcher.react", "CometProfilePlusExpressOnboardingDialog.entrypoint", "CometProfileSwitcherListCell.react", "CometProfileSwitcherPagePublishingAuthorizationCard.react", "Locale", "React", "RelayHooks", "TetraIcon.react", "TetraList.react", "TetraListCell.react", "TetraText.react", "WebPixelRatio", "fbicon", "goForceFullPageRedirectTo", "orEmptyArray", "promiseDone", "stylex", "JSResource", "CometRelay", "useCodedErrorDialog", "useCometEntryPointDialog", "useIsMountedRef", "useProfileCometSwitcherCleanUpOnSwap", "useProfileSwitcherEngagementClickCallback", "CometProfileAndAccountSwitcher_query.graphql"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i, j = b("React"), k = b("Locale").isRTL(), l = b("JSResource")("CometProfileSwitchMutation").__setRef("CometProfileAndAccountSwitcher.react"), m = 40;
    function a(a) {
        var c, d, e, f = a.onClose, n = a.onReturn, o = a.pushPage;
        a = a.query;
        var p = b("RelayHooks").useFragment(i !== void 0 ? i : i = b("CometProfileAndAccountSwitcher_query.graphql"), a);
        a = {
            profile: p == null ? void 0 : (a = p.viewer) == null ? void 0 : a.actor,
            should_open_express_onboarding: !1
        } || {};
        c = (c = p == null ? void 0 : (c = p.viewer) == null ? void 0 : (c = c.actor) == null ? void 0 : (c = c.profile_switcher_eligible_profiles) == null ? void 0 : c.nodes) != null ? c : [];
        var q = (d = p == null ? void 0 : (d = p.viewer) == null ? void 0 : (d = d.actor) == null ? void 0 : d.is_failing_page_publishing_authorization) != null ? d : !1;
        d = j.useState(p == null ? void 0 : (d = p.viewer) == null ? void 0 : (d = d.actor) == null ? void 0 : d.id);
        var r = d[0]
          , s = d[1]
          , t = {
            product_bucket: "profile_account_switcher",
            subsurface: "switch_profile_menu",
            surface: "navigation"
        }
          , u = b("useProfileSwitcherEngagementClickCallback")(babelHelpers["extends"]({}, t, {
            item_type: "more"
        }))
          , v = b("useProfileSwitcherEngagementClickCallback")(babelHelpers["extends"]({}, t, {
            item_type: "back"
        }))
          , w = b("useProfileCometSwitcherCleanUpOnSwap")(p)
          , x = b("CometRelay").useRelayEnvironment()
          , y = b("useIsMountedRef")();
        d = b("useCodedErrorDialog")(h._("Kh\u00f4ng th\u1ec3 chuy\u1ec3n trang c\u00e1 nh\u00e2n"));
        var z = d[0]
          , A = function(a) {
            b("promiseDone")(l.load().then(function(c) {
                c = c.switchProfile;
                c(x, {
                    profileId: a
                }, {
                    onCompleted: function() {
                        y.current && f(),
                        w(),
                        b("goForceFullPageRedirectTo")("/")
                    },
                    onError: function(a) {
                        f(),
                        z(a)
                    }
                })
            }))
        };
        d = p == null ? void 0 : (d = p.viewer) == null ? void 0 : d.first_account[0];
        e = b("orEmptyArray")(p == null ? void 0 : (e = p.viewer) == null ? void 0 : e.device_switchable_accounts);
        var B = 0;
        e.forEach(function(a) {
            B += a.unread_notification_count || 0
        });
        e = b("useCometEntryPointDialog")(b("CometProfilePlusExpressOnboardingDialog.entrypoint"), {});
        var C = e[0];
        return j.jsxs("div", {
            className: "cbu4d94t j83agx80",
            children: [j.jsxs("div", {
                className: "discj3wi dati1w0a hv4rvrfc sj5x9vvc btwxx1t3 j83agx80",
                children: [j.jsx("div", {
                    className: "scb9dxdr sj5x9vvc dflh9lhu cxgpxx05",
                    children: j.jsx(b("TetraIcon.react"), {
                        "aria-label": h._("Quay l\u1ea1i"),
                        icon: k ? b("fbicon")._(g("514454"), 20) : b("fbicon")._(g("512647"), 20),
                        onPress: function() {
                            v(),
                            n()
                        }
                    })
                }), j.jsx("div", {
                    className: "tw6a2znq j83agx80 bp9cbjyn",
                    children: j.jsx(b("TetraText.react"), {
                        type: "headlineEmphasized1",
                        children: h._("Chuy\u1ec3n trang c\u00e1 nh\u00e2n")
                    })
                })]
            }), j.jsx(b("CometProfileSwitcherPagePublishingAuthorizationCard.react"), {
                query: p
            }), j.jsx("div", {
                className: "cxgpxx05 jbae33se",
                children: j.jsxs(b("TetraList.react"), {
                    children: [[a].concat(c).map(function(a) {
                        var c = a.profile
                          , d = a.should_open_express_onboarding;
                        return j.jsx(b("CometProfileSwitcherListCell.react"), {
                            isFailingPagePublishingAuthorization: q,
                            loggerData: babelHelpers["extends"]({}, t, {
                                item_type: "profile",
                                profile_id_dummy: c == null ? void 0 : c.id
                            }),
                            onClick: function() {
                                s(c == null ? void 0 : c.id);
                                if (d === !0) {
                                    var a;
                                    f();
                                    C({
                                        followerString: (c == null ? void 0 : c.timeline_context_items) && ((a = c.timeline_context_items) == null ? void 0 : (a = a.nodes[0]) == null ? void 0 : (a = a.title) == null ? void 0 : a.text),
                                        profileID: c == null ? void 0 : c.id,
                                        profileName: c == null ? void 0 : c.name
                                    })
                                } else
                                    A(c == null ? void 0 : c.id)
                            },
                            profile: c,
                            selected: r === (c == null ? void 0 : c.id)
                        }, c == null ? void 0 : c.id)
                    }), j.jsx(b("CometListItemSeparator.react"), {}), j.jsx(b("TetraListCell.react"), {
                        addOnPrimary: {
                            shape: "circle",
                            size: m,
                            source: {
                                height: (c = d == null ? void 0 : (e = d.user) == null ? void 0 : (a = e.profile_picture) == null ? void 0 : a.height) != null ? c : m,
                                scale: (c = d == null ? void 0 : (e = d.user) == null ? void 0 : (a = e.profile_picture) == null ? void 0 : a.scale) != null ? c : b("WebPixelRatio").get(),
                                uri: (c = d == null ? void 0 : (e = d.user) == null ? void 0 : (a = e.profile_picture) == null ? void 0 : a.uri) != null ? c : "",
                                width: (c = d == null ? void 0 : (e = d.user) == null ? void 0 : (a = e.profile_picture) == null ? void 0 : a.width) != null ? c : m
                            },
                            type: "profile-photo"
                        },
                        addOnSecondary: {
                            color: "secondary",
                            icon: b("fbicon")._(g("492539"), 24),
                            type: "icon"
                        },
                        body: B > 0 ? j.jsxs(j.Fragment, {
                            children: [j.jsx(b("CometBadge.react"), {}), h._({
                                "*": "{number} th\u00f4ng tin m\u1edbi",
                                "_1": "1 th\u00f4ng tin m\u1edbi"
                            }, [h._plural(B || 0, "number")])]
                        }) : null,
                        headline: h._("Chuy\u1ec3n t\u00e0i kho\u1ea3n"),
                        level: 4,
                        onPress: function() {
                            return o(function(a) {
                                a = a.onReturn;
                                u();
                                return j.jsx(b("CometLoggedInAccountSwitcher.react"), {
                                    onClose: f,
                                    onReturn: a,
                                    query: p
                                })
                            })
                        }
                    }, d == null ? void 0 : (e = d.user) == null ? void 0 : e.id)]
                })
            })]
        })
    }
}
), null);
__d("CometLoggedInAccountSwitcherPopoverMenu.entrypoint", ["CometLoggedInAccountSwitcherPopoverMenuQuery$Parameters", "JSResource"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        getPreloadProps: function() {
            return {
                queries: {
                    root: {
                        parameters: b("CometLoggedInAccountSwitcherPopoverMenuQuery$Parameters"),
                        variables: {}
                    }
                }
            }
        },
        root: b("JSResource")("CometLoggedInAccountSwitcherPopoverMenu.react").__setRef("CometLoggedInAccountSwitcherPopoverMenu.entrypoint")
    };
    e.exports = a
}
), null);
__d("useCometLoggedInAccountSwitcherListCell", ["ix", "fbt", "CometBadge.react", "CometEntryPointPopoverTrigger.react", "CometLoggedInAccountSwitcher.react", "CometLoggedInAccountSwitcherAccountForm.react", "CometPopoverLoadingState.react", "CometRelay", "React", "TetraIcon.react", "WebPixelRatio", "fbicon", "gkx", "orEmptyArray", "stylex", "useCometLoggedInAccountSwitcherSubmitForm", "useProfileSwitcherEngagementClickCallback", "useCometLoggedInAccountSwitcherListCell_query.graphql", "CometLoggedInAccountSwitcherPopoverMenu.entrypoint"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i, j = b("React"), k = 36, l = 20;
    (l - k) / 2;
    function a(a, c, d) {
        var e, f, m = b("CometRelay").useFragment(i !== void 0 ? i : i = b("useCometLoggedInAccountSwitcherListCell_query.graphql"), a);
        a = j.useRef(null);
        var n = b("useCometLoggedInAccountSwitcherSubmitForm")(m, a);
        e = b("orEmptyArray")(m == null ? void 0 : (e = m.viewer) == null ? void 0 : e.device_switchable_accounts);
        var o = 0;
        e.forEach(function(a) {
            o += a.unread_notification_count || 0
        });
        e = {
            product_bucket: b("gkx")("1475594") ? "profile_account_switcher" : "account_switcher",
            subsurface: "settings_menu",
            surface: "navigation"
        };
        var p = b("useProfileSwitcherEngagementClickCallback")(babelHelpers["extends"]({}, e, {
            item_type: "account"
        }))
          , q = b("useProfileSwitcherEngagementClickCallback")(babelHelpers["extends"]({}, e, {
            item_type: "more"
        }));
        e = m == null ? void 0 : (e = m.viewer) == null ? void 0 : (e = e.first_account) == null ? void 0 : e[0];
        var r = e == null ? void 0 : e.user;
        if ((m == null ? void 0 : (f = m.viewer) == null ? void 0 : (f = f.device_switchable_accounts) == null ? void 0 : f.length) === 1 && e != null) {
            f = e.form;
            e = e.unread_notification_count;
            if (f != null) {
                var s;
                return {
                    cellProps: {
                        addOnPrimary: {
                            addOnTopEnd: ((s = e) != null ? s : 0) > 0 ? {
                                number: (s = e) != null ? s : 0,
                                type: "notificationBadge"
                            } : void 0,
                            shape: "circle",
                            size: 36,
                            source: {
                                height: (s = r == null ? void 0 : (e = r.profile_picture) == null ? void 0 : e.height) != null ? s : 36,
                                scale: (s = r == null ? void 0 : (e = r.profile_picture) == null ? void 0 : e.scale) != null ? s : b("WebPixelRatio").get(),
                                uri: (s = r == null ? void 0 : (e = r.profile_picture) == null ? void 0 : e.uri) != null ? s : "",
                                width: (s = r == null ? void 0 : (e = r.profile_picture) == null ? void 0 : e.width) != null ? s : 36
                            },
                            type: "profile-photo"
                        },
                        addOnSecondary: {
                            addOn: j.jsx(b("CometEntryPointPopoverTrigger.react"), {
                                align: "end",
                                autoAlign: !0,
                                entryPointParams: {},
                                fallback: j.jsx(b("CometPopoverLoadingState.react"), {}),
                                otherProps: {},
                                popoverEntryPoint: b("CometLoggedInAccountSwitcherPopoverMenu.entrypoint"),
                                popoverType: "menu",
                                children: function(a, c) {
                                    return j.jsx(b("TetraIcon.react"), {
                                        "aria-label": h._("Menu"),
                                        color: "secondary",
                                        icon: b("fbicon")._(g("484388"), 24),
                                        onPress: c,
                                        ref: a
                                    })
                                }
                            }),
                            type: "body"
                        },
                        body: j.jsxs(j.Fragment, {
                            children: [h._("\u0110\u0103ng nh\u1eadp d\u01b0\u1edbi t\u00ean {name}", [h._param("name", r == null ? void 0 : r.name)]), j.jsx(b("CometLoggedInAccountSwitcherAccountForm.react"), {
                                form: f,
                                formRef: a
                            })]
                        }),
                        headline: h._("Chuy\u1ec3n t\u00e0i kho\u1ea3n"),
                        level: 4,
                        onPress: function() {
                            p(),
                            n()
                        }
                    },
                    itemKey: "account-switcher",
                    render: !0
                }
            }
        }
        e = {
            addOnTopEnd: o > 0 ? {
                number: o,
                type: "notificationBadge"
            } : void 0,
            shape: "circle",
            size: 36,
            source: {
                height: (s = r == null ? void 0 : (e = r.profile_picture) == null ? void 0 : e.height) != null ? s : 36,
                scale: (a = r == null ? void 0 : (f = r.profile_picture) == null ? void 0 : f.scale) != null ? a : b("WebPixelRatio").get(),
                uri: (s = r == null ? void 0 : (e = r.profile_picture) == null ? void 0 : e.uri) != null ? s : "",
                width: (a = r == null ? void 0 : (f = r.profile_picture) == null ? void 0 : f.width) != null ? a : 36
            },
            type: "profile-photo"
        };
        return {
            cellProps: {
                addOnPrimary: b("gkx")("1475594") ? e : {
                    icon: function() {
                        var a;
                        return j.jsxs("div", {
                            className: "l9j0dhe7",
                            children: [(m == null ? void 0 : (a = m.viewer) == null ? void 0 : a.device_switchable_account_has_notification) ? j.jsx("div", {
                                className: "tkr6xdv7 nezaghv5 pmk7jnqg e712q9ov pq6dq46d",
                                children: j.jsx(b("CometBadge.react"), {
                                    color: "red",
                                    isProfileBadge: !0,
                                    size: 10
                                })
                            }) : null, j.jsx(b("TetraIcon.react"), {
                                color: "secondary",
                                icon: b("fbicon")._(g("622241"), 20),
                                size: l
                            })]
                        })
                    },
                    size: k,
                    type: "contained-icon"
                },
                addOnSecondary: {
                    color: "secondary",
                    icon: b("fbicon")._(g("492539"), 24),
                    type: "icon"
                },
                headline: h._("Chuy\u1ec3n t\u00e0i kho\u1ea3n"),
                level: 4,
                onPress: function() {
                    c(function(a) {
                        a = a.onReturn;
                        if (b("CometLoggedInAccountSwitcher.react") == null)
                            return;
                        q();
                        return j.jsx(b("CometLoggedInAccountSwitcher.react"), {
                            onClose: d,
                            onReturn: a,
                            query: m
                        })
                    })
                }
            },
            itemKey: "account-switcher",
            render: ((f = m == null ? void 0 : (s = m.viewer) == null ? void 0 : (r = s.device_switchable_accounts) == null ? void 0 : r.length) != null ? f : 0) > 0
        }
    }
}
), null);
__d("useCometCombinedProfileAccountSwitcherListCell.react", ["ix", "fbt", "CometProfileAndAccountSwitcher.react", "CometProfileSwitcher.react", "CometRelay", "React", "WebPixelRatio", "fbicon", "gkx", "orEmptyArray", "useCometLoggedInAccountSwitcherListCell", "useProfileSwitcherEngagementClickCallback", "useCometCombinedProfileAccountSwitcherListCell_query.graphql"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i, j = b("React");
    function a(a, c, d) {
        var e, f, k, l = b("CometRelay").useFragment(i !== void 0 ? i : i = b("useCometCombinedProfileAccountSwitcherListCell_query.graphql"), a);
        a = b("useCometLoggedInAccountSwitcherListCell")(l, c, d);
        e = (l == null ? void 0 : (e = l.viewer) == null ? void 0 : (e = e.actor) == null ? void 0 : (e = e.profile_switcher_eligible_profiles) == null ? void 0 : e.nodes) || [];
        f = b("orEmptyArray")(l == null ? void 0 : (f = l.viewer) == null ? void 0 : f.device_switchable_accounts);
        var m = b("useProfileSwitcherEngagementClickCallback")({
            item_type: "more",
            product_bucket: "profile_account_switcher",
            subsurface: "settings_menu",
            surface: "navigation"
        });
        k = (l == null ? void 0 : (k = l.viewer) == null ? void 0 : (k = k.actor) == null ? void 0 : (k = k.profile_switcher_eligible_profiles) == null ? void 0 : k.count) || 0;
        var n = f.length || 0
          , o = 0;
        e.forEach(function(a) {
            o += a.unseen_update_count || 0
        });
        f.forEach(function(a) {
            o += a.unread_notification_count || 0
        });
        e = b("gkx")("1663500") && ((l == null ? void 0 : (e = l.viewer) == null ? void 0 : (f = e.actor) == null ? void 0 : (e = f.first_profiles) == null ? void 0 : (f = e.nodes) == null ? void 0 : f.length) || 0) > 1;
        f = (l == null ? void 0 : (f = l.viewer) == null ? void 0 : (f = f.actor) == null ? void 0 : (f = f.first_profiles) == null ? void 0 : f.nodes.length) ? l == null ? void 0 : (f = l.viewer) == null ? void 0 : (f = f.actor) == null ? void 0 : (f = f.first_profiles) == null ? void 0 : f.nodes[e ? 1 : 0].profile : null;
        var p = (f == null ? void 0 : f.profile_picture) || {}
          , q = p.height
          , r = p.scale
          , s = p.uri;
        p = p.width;
        if (k !== 0) {
            return {
                cellProps: {
                    addOnPrimary: f ? {
                        addOnTopEnd: o > 0 ? {
                            number: o,
                            type: "notificationBadge"
                        } : void 0,
                        shape: "circle",
                        size: 36,
                        source: {
                            height: (k = q) != null ? k : 36,
                            scale: (f = r) != null ? f : b("WebPixelRatio").get(),
                            uri: (q = s) != null ? q : "",
                            width: (k = p) != null ? k : 36
                        },
                        type: "profile-photo"
                    } : null,
                    addOnSecondary: {
                        color: "secondary",
                        icon: b("fbicon")._(g("492539"), 24),
                        type: "icon"
                    },
                    headline: n > 0 ? e ? h._("T\u1ea5t c\u1ea3 trang c\u00e1 nh\u00e2n v\u00e0 t\u00e0i kho\u1ea3n") : h._("Chuy\u1ec3n trang c\u00e1 nh\u00e2n ho\u1eb7c t\u00e0i kho\u1ea3n") : e ? h._("T\u1ea5t c\u1ea3 trang c\u00e1 nh\u00e2n") : h._("Chuy\u1ec3n trang c\u00e1 nh\u00e2n"),
                    level: 4,
                    onPress: function() {
                        n > 0 ? c(function(a) {
                            a = a.onReturn;
                            if (b("CometProfileAndAccountSwitcher.react") == null)
                                return;
                            m();
                            return j.jsx(b("CometProfileAndAccountSwitcher.react"), {
                                onClose: d,
                                onReturn: a,
                                pushPage: c,
                                query: l
                            })
                        }) : c(function(a) {
                            a = a.onReturn;
                            if (b("CometProfileSwitcher.react") == null)
                                return;
                            m();
                            return j.jsx(b("CometProfileSwitcher.react"), {
                                onClose: d,
                                onReturn: a,
                                query: l
                            })
                        })
                    },
                    testid: "CometSettingsCombinedProfileAccountSwitcher"
                },
                itemKey: "profile-account-switcher",
                render: !0
            }
        }
        return a
    }
}
), null);
__d("CometSettingsDropdownList.react", ["ix", "fbt", "CometDarkModeContext", "CometLegalFooter.react", "CometMenuSeparator.react", "CometOptOutStrings", "CometRelay", "CometSettingsDropdownAccessibility.react", "CometSettingsDropdownAppearance.react", "CometSettingsDropdownHeader.react", "CometSettingsDropdownListItem.react", "CometSettingsDropdownQuickHelp.react", "CometSettingsDropdownSettingsAndPrivacy.react", "CometTrialProgramGating", "Locale", "React", "TetraList.react", "TetraListCell.react", "WebPixelRatio", "fbicon", "gkx", "qex", "requireCond", "stylex", "useCometCombinedProfileAccountSwitcherListCell.react", "useCometLogout", "useCometReportBug", "useCometTriggerOptOut", "useShouldRenderFullTopNav", "cr:1205224", "cr:1673052", "CometSettingsDropdownListQuery.graphql"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i, j = b("React"), k = b("Locale").isRTL(), l = b("gkx")("1663500"), m = (c = b("cr:1673052")) != null ? c : function() {
        for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++)
            b[c] = arguments[c];
        return {
            args: b,
            cellProps: {},
            itemKey: "profile-account-switcher",
            render: !1
        }
    }
    ;
    function a(a) {
        var c = a.onClose
          , d = a.pushPage;
        a = b("useCometReportBug")();
        var e = a[0];
        a = j.useContext(b("CometDarkModeContext"));
        var f = a.isDarkModeEnabled;
        a = a.onDarkModeToggle;
        var n = b("useShouldRenderFullTopNav")()
          , o = b("CometRelay").useLazyLoadQuery(i !== void 0 ? i : i = b("CometSettingsDropdownListQuery.graphql"), {
            inProfileSwitcherEntry: l,
            scale: b("WebPixelRatio").get()
        })
          , p = b("useCometLogout").useCometLogout()
          , q = j.useState(!1)
          , r = q[0]
          , s = q[1];
        q = j.useCallback(function(a) {
            return s(!0)
        }, [s]);
        q = m(o, c, q, r);
        var t = b("useCometCombinedProfileAccountSwitcherListCell.react")(o, d, c)
          , u = o.viewer
          , v = b("useCometTriggerOptOut")("SETTINGS_MENU");
        o = (u == null ? void 0 : (o = u.actor) == null ? void 0 : (o = o.profileSwitcherEligibleProfiles) == null ? void 0 : o.count) || 0;
        f = [l ? null : t, {
            cellProps: {
                addOnPrimary: {
                    icon: b("fbicon")._(g("497567"), 20),
                    size: 36,
                    type: "contained-icon"
                },
                addOnSecondary: {
                    color: "secondary",
                    icon: k ? b("fbicon")._(g("492491"), 24) : b("fbicon")._(g("492539"), 24),
                    type: "icon"
                },
                headline: h._("C\u00e0i \u0111\u1eb7t & quy\u1ec1n ri\u00eang t\u01b0"),
                level: 4,
                onPress: function() {
                    d(function(a) {
                        a = a.onReturn;
                        return j.jsx(b("CometSettingsDropdownSettingsAndPrivacy.react"), {
                            onClose: c,
                            onReturn: a,
                            viewer: u
                        })
                    })
                },
                testid: "CometSettingsDropdownSettingsAndPrivacy"
            },
            itemKey: "settings-privacy-folder",
            render: n
        }, {
            cellProps: {
                addOnPrimary: {
                    icon: b("fbicon")._(g("496951"), 20),
                    size: 36,
                    type: "contained-icon"
                },
                addOnSecondary: {
                    color: "secondary",
                    icon: k ? b("fbicon")._(g("492491"), 24) : b("fbicon")._(g("492539"), 24),
                    type: "icon"
                },
                headline: h._("Tr\u1ee3 gi\u00fap & h\u1ed7 tr\u1ee3"),
                level: 4,
                onPress: function() {
                    d(function(a) {
                        a = a.onReturn;
                        return j.jsx(b("CometSettingsDropdownQuickHelp.react"), {
                            onClose: c,
                            onReturn: a
                        })
                    })
                }
            },
            itemKey: "help-support",
            render: n
        }, {
            cellProps: {
                addOnPrimary: {
                    icon: b("fbicon")._(g("832941"), 20),
                    size: 36,
                    type: "contained-icon"
                },
                addOnSecondary: {
                    type: "switch",
                    value: f
                },
                headline: h._("Ch\u1ebf \u0111\u1ed9 t\u1ed1i"),
                level: 4,
                onPress: a
            },
            itemKey: "dark-mode",
            render: n && !b("qex")._("1402375") && !b("gkx")("1721831")
        }, {
            cellProps: {
                addOnPrimary: {
                    icon: b("fbicon")._(g("832941"), 20),
                    size: 36,
                    type: "contained-icon"
                },
                addOnSecondary: {
                    color: "secondary",
                    icon: k ? b("fbicon")._(g("492491"), 24) : b("fbicon")._(g("492539"), 24),
                    type: "icon"
                },
                headline: h._("Hi\u1ec3n th\u1ecb t\u00f9y ch\u1ecdn"),
                level: 4,
                onPress: function() {
                    d(function(a) {
                        a = a.onReturn;
                        return j.jsx(b("CometSettingsDropdownAppearance.react"), {
                            onReturn: a
                        })
                    })
                }
            },
            itemKey: "dark-mode",
            render: n && !b("gkx")("1721831") && b("qex")._("1402375") === !0
        }, {
            cellProps: {
                addOnPrimary: {
                    icon: b("fbicon")._(g("1243988"), 20),
                    size: 36,
                    type: "contained-icon"
                },
                addOnSecondary: {
                    color: "secondary",
                    icon: k ? b("fbicon")._(g("492491"), 24) : b("fbicon")._(g("492539"), 24),
                    type: "icon"
                },
                headline: h._("Kh\u1ea3 n\u0103ng truy c\u1eadp & t\u00f9y ch\u1ecdn"),
                level: 4,
                onPress: function() {
                    d(function(a) {
                        a = a.onReturn;
                        return j.jsx(b("CometSettingsDropdownAccessibility.react"), {
                            onClose: c,
                            onReturn: a
                        })
                    })
                }
            },
            itemKey: "accessibility-settings",
            render: b("gkx")("1279132")
        }, {
            cellProps: {
                addOnPrimary: {
                    icon: b("fbicon")._(g("641698"), 20),
                    size: 36,
                    type: "contained-icon"
                },
                body: b("CometOptOutStrings").getOptOutSettingsMenuItemBody(),
                headline: b("CometOptOutStrings").getOptOutSettingsMenuItemHeader(),
                level: 4,
                onPress: function() {
                    v(),
                    c()
                }
            },
            itemKey: "switch-to-classic-facebook",
            render: n && b("CometTrialProgramGating").canOptOutFromSettingsMenu
        }, {
            cellProps: {
                addOnPrimary: {
                    icon: b("fbicon")._(g("1107405"), 20),
                    size: 36,
                    type: "contained-icon"
                },
                addOnSecondary: {
                    color: "secondary",
                    icon: k ? b("fbicon")._(g("492491"), 24) : b("fbicon")._(g("492539"), 24),
                    type: "icon"
                },
                headline: h._("B\u1ea3n d\u1ecbch"),
                level: 4,
                onPress: function() {
                    d(function(a) {
                        a = a.onReturn;
                        return j.jsx(b("cr:1205224"), {
                            onClose: c,
                            onReturn: a,
                            viewer: u
                        })
                    })
                }
            },
            itemKey: "internationalization",
            render: n && b("cr:1205224") != null
        }, {
            cellProps: {
                addOnPrimary: {
                    icon: b("fbicon")._(g("951888"), 20),
                    size: 36,
                    type: "contained-icon"
                },
                dataAttributes: {
                    nocookies: "true"
                },
                headline: h._("\u0110\u0103ng xu\u1ea5t"),
                level: 4,
                onPress: function() {
                    p(),
                    c()
                },
                testid: "CometLogoutButton"
            },
            itemKey: "log-out",
            render: !0
        }].filter(function(a) {
            return a == null ? void 0 : a.render
        }).filter(Boolean);
        return j.jsxs("div", {
            className: "aov4n071",
            children: [n ? j.jsxs(j.Fragment, {
                children: [j.jsx(b("CometSettingsDropdownHeader.react"), {
                    onClick: c,
                    selected: !r && o > 0,
                    viewer: u
                }), l && o > 1 ? j.jsx(b("CometSettingsDropdownListItem.react"), {
                    cellProps: q.cellProps,
                    itemKey: q.itemKey,
                    position: 0,
                    selected: r
                }) : null, l && o > 0 ? j.jsx(b("CometSettingsDropdownListItem.react"), {
                    cellProps: t.cellProps,
                    itemKey: t.itemKey,
                    position: o > 1 ? 1 : 0,
                    selected: !1
                }) : null, j.jsx(b("CometMenuSeparator.react"), {}), j.jsx(b("CometSettingsDropdownListItem.react"), {
                    cellProps: {
                        addOnPrimary: {
                            icon: b("gkx")("678680") ? b("fbicon")._(g("530509"), 20) : b("fbicon")._(g("693172"), 20),
                            shape: "circle",
                            size: 36,
                            type: "contained-icon"
                        },
                        body: h._("G\u00f3p ph\u1ea7n c\u1ea3i thi\u1ec7n phi\u00ean b\u1ea3n Facebook m\u1edbi."),
                        headline: b("gkx")("678680") ? h._("B\u00e1o c\u00e1o s\u1ef1 c\u1ed1") : h._("\u0110\u00f3ng g\u00f3p \u00fd ki\u1ebfn"),
                        level: 4,
                        onPress: function() {
                            c(),
                            e()
                        }
                    },
                    itemKey: "give-feedback",
                    position: l ? o > 1 ? 2 : 1 : 0,
                    selected: !1
                }), j.jsx(b("CometMenuSeparator.react"), {})]
            }) : null, j.jsx("div", {
                className: "a8nywdso sj5x9vvc rz4wbd8a ecm0bbzt",
                children: j.jsx(b("TetraList.react"), {
                    items: f,
                    children: function(a) {
                        var c, d = a.item, e = d.cellProps;
                        d = d.itemKey;
                        a = a.props;
                        var f = e.addOnSecondary;
                        c = (c = a.key) != null ? c : -1;
                        f = f != null && f.value != null ? f.value : !1;
                        return j.jsx(b("CometSettingsDropdownListItem.react"), {
                            cellProps: e,
                            itemKey: d,
                            position: c,
                            selected: f
                        }, a.key)
                    }
                })
            }), j.jsx("div", {
                className: "dati1w0a ihqw7lf3 hv4rvrfc discj3wi",
                children: j.jsx(b("CometLegalFooter.react"), {})
            })]
        })
    }
}
), null);
__d("CometSettingsDropdown.react", ["fbt", "BaseMultiStepContainer.react", "CometPopover.react", "CometScrollableArea.react", "CometSettingsDropdownList.react", "React", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h, i = b("React"), j = {
        card: {
            maxHeight: "t1wsaese",
            maxWidth: "h77mwsce",
            width: "o36gj0jk"
        },
        root: {
            marginTop: "knvmm38d"
        }
    };
    function a(a) {
        var c = a.onClose;
        return i.jsx("div", {
            className: (h || (h = b("stylex")))(j.root),
            children: i.jsx(b("CometPopover.react"), {
                label: g._("T\u00e0i kho\u1ea3n"),
                children: i.jsx(b("CometScrollableArea.react"), {
                    xstyle: j.card,
                    children: i.jsx("div", {
                        children: i.jsx(b("BaseMultiStepContainer.react"), {
                            children: function(a) {
                                return i.jsx(b("CometSettingsDropdownList.react"), {
                                    onClose: c,
                                    pushPage: a
                                })
                            }
                        })
                    })
                })
            })
        })
    }
}
), null);
__d("CometLoggedInAccountSwitcherRemoveAccountMutation", ["CometRelay", "CometLoggedInAccountSwitcherRemoveAccountMutation.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    f.commit = a;
    var g;
    function a(a, c) {
        var d = c.id;
        c = c.nonce;
        function e(a) {
            a = a.getRoot().getLinkedRecord("viewer");
            if (a == null)
                return;
            var b = a.getLinkedRecords("device_switchable_accounts");
            if (b == null)
                return;
            b = b.filter(function(a) {
                if (a == null)
                    return a;
                var b = a.getLinkedRecord("user");
                return b == null ? a : b.getValue("id") !== d
            });
            a.setLinkedRecords(b, "device_switchable_accounts");
            b = b.find(function(a) {
                if (a == null)
                    return !1;
                a = a.getValue("unread_notification_count");
                return typeof a !== "number" ? !1 : a > 0
            });
            a.setValue(Boolean(b), "device_switchable_account_has_notification")
        }
        return b("CometRelay").commitMutation(a, {
            mutation: g !== void 0 ? g : g = b("CometLoggedInAccountSwitcherRemoveAccountMutation.graphql"),
            optimisticUpdater: e,
            updater: e,
            variables: {
                id: d,
                nonce: c
            }
        })
    }
}
), null);
__d("BrowserPushCommands", [], (function(a, b, c, d, e, f) {
    a = "browser_push_ack";
    b = "browser_push_redirect";
    c = "browser_push_window_visible";
    d = {
        ACK: a,
        REDIRECT: b,
        WINDOW_VISIBLE: c
    };
    e.exports = d
}
), null);
__d("BrowserPushMessageRedirectUtil", ["Bootloader"], (function(a, b, c, d, e, f) {
    e.exports = a;
    function a(a) {
        var c = "(messages)(.*?)(?:(tid=))([^&]*)";
        a = a.match(c);
        if (!a)
            return !0;
        var d = a.pop();
        b("Bootloader").loadModules(["FantaTabActions"], function(a) {
            a.openTab(d)
        }, "BrowserPushMessageRedirectUtil");
        return !1
    }
}
), null);
__d("BrowserPushMessageHandler", ["BrowserPushCommands", "BrowserPushMessageRedirectUtil", "EventListener", "URI", "URISchemes", "isFacebookURI"], (function(a, b, c, d, e, f) {
    var g, h;
    function i(a) {
        if (a.data.command && a.data.command === b("BrowserPushCommands").REDIRECT) {
            if (typeof window.onbeforeunload === "function" && window.onbeforeunload() === void 0)
                a.ports[0].postMessage({
                    command: b("BrowserPushCommands").ACK,
                    success: !0
                });
            else {
                a.ports[0].postMessage({
                    command: b("BrowserPushCommands").ACK,
                    success: !1
                });
                return
            }
            a = a.data.uri;
            if (/^([^.:/?#]+):/.test(a) && !(g || (g = b("URISchemes"))).isAllowed(/^([^.:/?#]+):/.exec(a)[1]) || !b("isFacebookURI")(new (h || (h = b("URI")))(a)))
                throw new Error("goURI: URI scheme rejected, URI: " + a);
            b("BrowserPushMessageRedirectUtil")(a) && (window.location.href = a)
        }
    }
    a = {
        registerRedirectHandler: function() {
            b("EventListener").listen(window, "message", function(a) {
                a.origin === "" && i(a)
            }),
            navigator.serviceWorker && navigator.serviceWorker.addEventListener && navigator.serviceWorker.addEventListener("message", function(a) {
                (navigator.serviceWorker && navigator.serviceWorker.controller && a.target && a.target.controller && a.target.controller === navigator.serviceWorker.controller || new RegExp("^" + window.location.protocol + "//" + window.location.host + "$").test(a.origin)) && i(a)
            })
        }
    };
    c = a;
    e.exports = c
}
), null);
__d("BrowserPushVisibilityChanger", ["BrowserPushCommands", "ClientServiceWorkerMessage", "Visibility"], (function(a, b, c, d, e, f) {
    function g() {
        new (b("ClientServiceWorkerMessage"))(b("BrowserPushCommands").WINDOW_VISIBLE,null).sendViaController()
    }
    a = {
        listenForVisibility: function() {
            b("Visibility").isHidden() || g(),
            b("Visibility").addListener(b("Visibility").VISIBLE, g)
        }
    };
    c = a;
    e.exports = c
}
), null);
__d("MPushPermissionUtil", ["BanzaiLogger", "gkx"], (function(a, b, c, d, e, f) {
    f.logEvent = a;
    function a(a, c) {
        c === void 0 && (c = !1);
        var d = b("gkx")("910664");
        d && b("BanzaiLogger").log("ChromePushPermissionEventsLoggerConfig", {
            event: a
        });
        if (c) {
            d = null;
            c = "step";
            a === "allow" ? (d = "allow",
            c = "conversion") : a === "deny" ? d = "deny" : a === "install_ignore" ? d = "ignore" : a === "turn_on_attempt" && (d = "show_browser_dialog");
            d !== null && b("BanzaiLogger").log("NUXWizardLoggerConfig", {
                event: d,
                event_type: c,
                platform: "mobile",
                step: "turn_on_notification"
            })
        }
    }
}
), null);
__d("PushRegistrationUtils", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.normalizeSubscriptionEndpoint = g;
    f.setupPushRegistrationData = a;
    function g(a) {
        var b = a.endpoint;
        "subscriptionId"in a && !new RegExp("/" + a.subscriptionId + "$").test(b) && (b += "/" + a.subscriptionId);
        return b
    }
    function a(a, b) {
        var c = g(a)
          , d = null;
        a.toJSON ? d = a.toJSON().keys : a.keys && (d = a.keys);
        return {
            app_id: b,
            push_endpoint: c,
            subscription_keys: JSON.stringify(d)
        }
    }
}
), null);
__d("XAsyncPushMuteController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/notifications/settings/push/mute/", {
        appid: {
            type: "Int",
            required: !0
        },
        push_endpoint: {
            type: "String",
            required: !0
        },
        mute_for: {
            type: "Enum",
            enumType: 0
        }
    })
}
), null);
__d("XAsyncPushMuteStateController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/notifications/settings/push/mute/state/", {
        appid: {
            type: "Int",
            required: !0
        },
        push_endpoint: {
            type: "String",
            required: !0
        }
    })
}
), null);
__d("PushRegistration", ["Promise", "BrowserPushMessageHandler", "BrowserPushPubKey", "BrowserPushVisibilityChanger", "MPushPermissionUtil", "PushRegistrationUtils", "ServiceWorkerRegistration", "XAsyncPushMuteController", "XAsyncPushMuteStateController", "emptyFunction", "gkx", "promiseDone"], (function(a, b, c, d, e, f) {
    var g = window.Notification
      , h = new Map();
    a = function() {
        "use strict";
        a.get = function(b, c) {
            if (h.has(c))
                return h.get(c);
            b = new a(b,c);
            h.set(c, b);
            return b
        }
        ;
        function a(b, c) {
            this.$3 = b,
            this.appID = c,
            !a.$1 && !a.$2 && (a.$1 = !1,
            a.$2 = !1)
        }
        var c = a.prototype;
        c.getPushSubscription = function() {
            var c = this;
            return new (b("Promise"))(function(d, e) {
                a.pushPermissionIsDenied() && (b("MPushPermissionUtil").logEvent("permission_denied_or_blocked"),
                e(new Error("No permission or not supported"))),
                b("ServiceWorkerRegistration").getWorkerRegistration(c.$3).then(function(a) {
                    if (!a) {
                        d(null);
                        return
                    }
                    a.pushManager.getSubscription().then(function(a) {
                        d(a)
                    })["catch"](e)
                })["catch"](e)
            }
            )
        }
        ;
        c.$4 = function(a, c, d) {
            a = a.getURIBuilder().getURI();
            c = new c(a);
            c.setData(b("PushRegistrationUtils").setupPushRegistrationData(d, this.appID));
            c.setMethod("post");
            c.send()
        }
        ;
        c.getMutedUntilInServer = function(a) {
            var c = this;
            return new (b("Promise"))(function(d, e) {
                c.getPushSubscription().then(function(f) {
                    if (f) {
                        f = b("PushRegistrationUtils").normalizeSubscriptionEndpoint(f);
                        f = b("XAsyncPushMuteStateController").getURIBuilder().setString("push_endpoint", f).setInt("appid", c.appID).getURI();
                        f = new a(f);
                        f.listen("done", function(a) {
                            d(a.payload.muteUntilTimestampSec)
                        });
                        f.send()
                    } else
                        e("cannot check mute status for unsubscribed endpoint")
                })["catch"](e)
            }
            )
        }
        ;
        c.muteNotifications = function(a, c) {
            var d = this;
            return new (b("Promise"))(function(e, f) {
                d.getPushSubscription().then(function(g) {
                    if (g) {
                        g = b("PushRegistrationUtils").normalizeSubscriptionEndpoint(g);
                        g = b("XAsyncPushMuteController").getURIBuilder().setEnum("mute_for", a).setString("push_endpoint", g).setInt("appid", d.appID).getURI();
                        g = new c(g);
                        g.setMethod("POST");
                        g.listen("done", function(b) {
                            a !== 0 && b.payload.muteUntilTimestampSec === 0 ? f("operation failed in server") : e(b.payload.muteUntilTimestampSec)
                        });
                        g.send()
                    } else
                        f("no subscription found")
                })["catch"](f)
            }
            )
        }
        ;
        c.getSubscription = function() {
            var a = this;
            return new (b("Promise"))(function(c, d) {
                a.getPushSubscription().then(function(a) {
                    a ? c(b("PushRegistrationUtils").normalizeSubscriptionEndpoint(a)) : c(null)
                })["catch"](d)
            }
            )
        }
        ;
        c.maybeRegisterPushAgain = function(a, c) {
            var d = this;
            return new (b("Promise"))(function(e, f) {
                d.getPushSubscription().then(function(f) {
                    f ? (d.$4(a, c, f),
                    e(b("PushRegistrationUtils").normalizeSubscriptionEndpoint(f))) : e(null)
                })["catch"](function() {
                    e(null)
                })
            }
            )
        }
        ;
        c.$5 = function(c, d, e) {
            var f = this;
            return new (b("Promise"))(function(b, g) {
                if (a.$2 && !e) {
                    g(new Error("sending disable info already"));
                    return
                }
                a.$2 = !0;
                var h = c.getURIBuilder().getURI();
                h = new d(h.toString());
                h.setData({
                    appid: f.appID,
                    from_browser_settings: e
                });
                h.setMethod("post");
                h.listen ? (h.listen("finally", b),
                h.listen("fail", function() {
                    a.$2 = !1,
                    g()
                })) : h.setErrorHandler && h.setHandler ? (h.setErrorHandler(function() {
                    a.$2 = !1,
                    g()
                }),
                h.setHandler(b)) : b();
                h.send()
            }
            )
        }
        ;
        c.isPushRegistered = function(c, d, e, f, g, h) {
            var i = this;
            g === void 0 && (g = !1);
            h === void 0 && (h = !1);
            b("BrowserPushMessageHandler").registerRedirectHandler();
            return new (b("Promise"))(function(j, k) {
                i.getPushSubscription().then(function(k) {
                    j(!!k || c && !a.pushPermissionIsPending()),
                    k ? g ? i.$4(d, f, k) : b("BrowserPushVisibilityChanger").listenForVisibility() : !k && c && (a.pushPermissionIsOn() ? i.registerPush(d, f, h)["catch"](function() {}) : i.$5(e, f, !1))
                })["catch"](function() {
                    c && i.$5(e, f, !1),
                    h && b("ServiceWorkerRegistration").unregisterControllingWorker(),
                    k()
                })
            }
            )
        }
        ;
        c.$6 = function() {
            return new (b("Promise"))(function(a, b) {
                g.requestPermission(a)
            }
            )
        }
        ;
        c.registerPushAndWaitForEndpoint = function(a, c, d) {
            var e = this;
            d === void 0 && (d = !1);
            return new (b("Promise"))(function(b, f) {
                e.$7(a, c, !0, null, d).then(function(a) {
                    if (typeof a !== "string") {
                        f(new Error("registerPushImpl did not return an endpoint"));
                        return
                    }
                    b(a)
                })["catch"](f)
            }
            )
        }
        ;
        c.registerPushOnKaiOS = function(a, c, d) {
            var e = this;
            return new (b("Promise"))(function(f, g) {
                d.waitForKaiOS().done(function() {
                    d.registerPush(function(d) {
                        d = JSON.parse(d.get("push_endpoint"));
                        e.$4(a, c, d);
                        f(b("PushRegistrationUtils").normalizeSubscriptionEndpoint(d))
                    })
                })
            }
            )
        }
        ;
        c.registerPush = function(a, c, d, e) {
            d === void 0 && (d = !1);
            e === void 0 && (e = b("emptyFunction"));
            return this.registerPushWithFinishedCallBack(a, c, e, d)
        }
        ;
        c.registerPushWithFinishedCallBack = function(a, c, d, e) {
            var f = this;
            e === void 0 && (e = !1);
            return new (b("Promise"))(function(b, g) {
                f.$7(a, c, !1, d, e).then(function(a) {
                    if (typeof a !== "boolean") {
                        g(new Error("registerPushImpl did not return a boolean"));
                        return
                    }
                    b(a)
                })["catch"](g)
            }
            )
        }
        ;
        c.$7 = function(c, d, e, f, g) {
            var h = this;
            if (a.$1)
                return new (b("Promise"))(function(a, b) {
                    b(new Error("registering already"))
                }
                );
            if (!self.PushManager)
                return b("Promise").reject(new Error("PushManager not found."));
            a.$1 = !0;
            return new (b("Promise"))(function(i, j) {
                var k = b("ServiceWorkerRegistration").registerWorkerIfUnregistered(h.$3)
                  , l = h.$6();
                b("Promise").all([k, l]).then(function(k) {
                    var l = k[0];
                    if (!a.pushPermissionIsOn()) {
                        g && l.unregister();
                        throw new Error("Push permission was denied")
                    }
                    e || i(!0);
                    k = b("BrowserPushPubKey").appServerKey;
                    var m = b("gkx")("1511920") && k != null && k != "";
                    m = m ? {
                        userVisibleOnly: !0,
                        applicationServerKey: k
                    } : {
                        userVisibleOnly: !0
                    };
                    l.pushManager.subscribe(m).then(function(a) {
                        e && i(b("PushRegistrationUtils").normalizeSubscriptionEndpoint(a)),
                        h.$4(c, d, a),
                        f && f(),
                        b("BrowserPushVisibilityChanger").listenForVisibility()
                    })["catch"](function(b) {
                        a.$1 = !1,
                        g && l.unregister(),
                        j(b)
                    })
                })["catch"](function(b) {
                    a.$1 = !1,
                    j(b)
                })
            }
            )
        }
        ;
        c.unregisterPushAndSWOnKaiOS = function(a, c, d, e) {
            var f = this;
            return new (b("Promise"))(function(b, g) {
                f.$5(a, c, e).then(function() {
                    d.unregisterPush(),
                    b()
                })["catch"](g)
            }
            )
        }
        ;
        c.unregisterPushAndSW = function(a, c) {
            var d = this;
            return new (b("Promise"))(function(e, f) {
                d.$5(a, c, !0).then(function() {
                    b("promiseDone")(b("ServiceWorkerRegistration").unregisterControllingWorker(), e)
                })["catch"](f)
            }
            )
        }
        ;
        c.unregisterPushOnly = function(a, c) {
            var d = this;
            return new (b("Promise"))(function(b, e) {
                d.getPushSubscription().then(function(f) {
                    f ? f.unsubscribe().then(d.$5(a, c, !0)).then(function() {
                        b(!0)
                    })["catch"](e) : e()
                })["catch"](e)
            }
            )
        }
        ;
        a.pushPermissionIsPending = function() {
            return window.Notification && window.Notification.permission === "default"
        }
        ;
        a.pushPermissionIsOn = function() {
            return window.Notification && window.Notification.permission === "granted"
        }
        ;
        a.pushPermissionIsDenied = function() {
            return window.Notification && window.Notification.permission === "denied"
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("XBrowserPushDisabledController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/notifications/client/push/disabled/", {})
}
), null);
__d("XBrowserPushXOutController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/notifications/client/push/xout/", {})
}
), null);
__d("XPushRegisterServiceWorkerController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/push/register/service_worker/", {})
}
), null);
__d("incognito", ["regeneratorRuntime", "Promise", "UserAgent", "WebStorage", "gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g;
    function a() {
        var a;
        return b("regeneratorRuntime").async(function(c) {
            while (1)
                switch (c.prev = c.next) {
                case 0:
                    a = window.RequestFileSystem || window.webkitRequestFileSystem;
                    if (!a) {
                        c.next = 3;
                        break
                    }
                    return c.abrupt("return", new (b("Promise"))(function(b) {
                        return a(window.TEMPORARY, 10, function() {
                            return b(!1)
                        }, function() {
                            return b(!0)
                        })
                    }
                    ));
                case 3:
                    if (!(b("UserAgent").isBrowser("IE >= 10") || b("UserAgent").isBrowser("Edge"))) {
                        c.next = 5;
                        break
                    }
                    return c.abrupt("return", !window.indexedDB);
                case 5:
                    if (!b("UserAgent").isBrowser("Firefox >= 16")) {
                        c.next = 7;
                        break
                    }
                    return c.abrupt("return", new (b("Promise"))(function(a) {
                        var b = window.indexedDB.open("__test__");
                        b.onsuccess = function() {
                            return a(!1)
                        }
                        ;
                        b.onerror = function(b) {
                            b.preventDefault(),
                            a(!0)
                        }
                    }
                    ));
                case 7:
                    if (!(b("gkx")("676917") && (b("UserAgent").isPlatform("iOS") && b("UserAgent").isBrowser("Safari >= 10.3") || b("UserAgent").isPlatform("Mac OS X") && b("UserAgent").isBrowser("Safari >= 11.1")))) {
                        c.next = 18;
                        break
                    }
                    c.prev = 8;
                    window.openDatabase("sid", "1.0", "", 0);
                    c.next = 16;
                    break;
                case 12:
                    c.prev = 12;
                    c.t0 = c["catch"](8);
                    if (!(c.t0.name === "SecurityError")) {
                        c.next = 16;
                        break
                    }
                    return c.abrupt("return", !0);
                case 16:
                    c.next = 20;
                    break;
                case 18:
                    if (!b("UserAgent").isBrowser("Safari")) {
                        c.next = 20;
                        break
                    }
                    return c.abrupt("return", !(g || (g = b("WebStorage"))).getLocalStorage());
                case 20:
                    return c.abrupt("return", !1);
                case 21:
                case "end":
                    return c.stop()
                }
        }, null, this, [[8, 12]])
    }
}
), null);
__d("BrowserPushDirectPromptInstallerComet", ["Promise", "AsyncRequest", "BanzaiLogger", "PushNotificationsEventEmitter", "PushRegistration", "QE2Logger", "XBrowserPushDisabledController", "XBrowserPushXOutController", "XPushRegisterServiceWorkerController", "incognito"], (function(a, b, c, d, e, f) {
    "use strict";
    f.genEnableNotifications = l;
    f.installPush = a;
    f.setLogExtraData = c;
    f.setQEUniverseName = d;
    var g, h;
    function i(a, c, d) {
        d === void 0 && (d = "prompt");
        c = babelHelpers["extends"]({
            appID: c,
            event: a,
            surface: d
        }, g);
        b("BanzaiLogger").log("BrowserPushLoggerConfig", c)
    }
    function j() {
        g != null && g.xout_count === 0 && h && b("QE2Logger").logExposureForUser(h)
    }
    function k(a) {
        var c = b("XBrowserPushXOutController").getURIBuilder().getURI();
        new (b("AsyncRequest"))().setURI(c).setMethod("POST").send();
        i("xout", a)
    }
    function l(a, c, d, e) {
        a = b("PushRegistration").get(a, c);
        i("turn_on", c);
        return a.registerPushWithFinishedCallBack(b("XPushRegisterServiceWorkerController"), b("AsyncRequest"), function() {}, e).then(function() {
            b("PushNotificationsEventEmitter").emit("closeInstallPush"),
            i("install", c)
        })["catch"](function(a) {
            b("PushNotificationsEventEmitter").emit("closeInstallPush"),
            b("PushRegistration").pushPermissionIsDenied() ? (b("PushNotificationsEventEmitter").emit("openPushBlockedNotice", d),
            i("deny", c)) : i("install_ignore", c),
            k(c)
        })
    }
    function a(a, c, d, e, f, g, h, i) {
        var k = b("PushRegistration").get(a, c);
        k = k.isPushRegistered(d, b("XPushRegisterServiceWorkerController"), b("XBrowserPushDisabledController"), b("AsyncRequest"), !!f, h);
        b("Promise").all([k, b("incognito")()]).then(function(d) {
            var f = d[0];
            d = d[1];
            if (f || d)
                return;
            j();
            if (b("PushRegistration").pushPermissionIsPending()) {
                if (!i || e)
                    return;
                b("PushNotificationsEventEmitter").emit("openInstallPush", {
                    appID: c,
                    browserName: g,
                    path: a,
                    workerIsForPushOnly: h
                })
            } else
                e || l(a, c, g, h)
        })["catch"](function() {
            b("PushRegistration").pushPermissionIsDenied() && j()
        })
    }
    function c(a) {
        g = a
    }
    function d(a) {
        h = a
    }
}
), null);
__d("NotificationPermissionNoticeComet.react", ["fbt", "Locale", "React", "stylex", "useCometCallout"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h, i = b("React"), j = {
        calloutMaxWidth: {
            maxWidth: "nqmqzb3c"
        },
        root: {
            left: "tkt9xfrv",
            maxWidth: "nqmqzb3c",
            position: "poy2od1o",
            top: "kr520xx4"
        }
    };
    function a(a) {
        var c = a.shortText ? g._("Nh\u1ea5p v\u00e0o kh\u00f3a \u0111\u1ec3 cho ph\u00e9p {browser_name} g\u1eedi cho b\u1ea1n th\u00f4ng b\u00e1o tr\u00ean m\u00e1y t\u00ednh.", [g._param("browser_name", a.browserName)]) : g._("N\u1ebfu b\u1ea1n thay \u0111\u1ed5i \u00fd \u0111\u1ecbnh, h\u00e3y nh\u1ea5p v\u00e0o kh\u00f3a \u0111\u1ec3 cho ph\u00e9p {browser_name} g\u1eedi cho b\u1ea1n th\u00f4ng b\u00e1o tr\u00ean m\u00e1y t\u00ednh.", [g._param("browser_name", a.browserName)])
          , d = b("Locale").isRTL();
        d = d ? "end" : "start";
        d = {
            align: d,
            arrowStyle: "inset",
            autoAlign: !0,
            label: c,
            onHide: a.onHide,
            position: "below",
            type: "accent",
            xstyle: j.calloutMaxWidth
        };
        c = b("useCometCallout")(d, !0);
        return i.jsx("div", {
            className: (h || (h = b("stylex")))(j.root),
            ref: c
        })
    }
}
), null);
__d("NotificationPermissionRequestComet.react", ["fbt", "BaseAccessibleElement_DEPRECATED.react", "BaseModal.react", "CometHideLayerOnEscape.react", "CometVisualCompletion", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a(a) {
        h.useEffect(function() {
            window.addEventListener("mousedown", a.onClick);
            b("CometVisualCompletion").addAnnotation("pushRequestOverlay", 1);
            return function() {
                window.removeEventListener("mousedown", a.onClick)
            }
        }, [a.onClick]);
        return h.jsx(b("BaseModal.react"), {
            stackingBehavior: "above-everything",
            children: h.jsx(b("CometHideLayerOnEscape.react"), {
                onHide: a.onClick,
                children: h.jsx(b("BaseAccessibleElement_DEPRECATED.react"), {
                    children: h.jsxs("div", {
                        "aria-label": g._("Y\u00eau c\u1ea7u th\u00f4ng b\u00e1o \u0111\u1ea9y"),
                        "aria-modal": "true",
                        role: "alertdialog",
                        children: [g._("B\u1ea1n c\u00f3 th\u1ec3 \u0111i \u0111\u1ebfn ph\u1ea7n c\u00e0i \u0111\u1eb7t tr\u00ecnh duy\u1ec7t \u0111\u1ec3 cho ph\u00e9p ho\u1eb7c ch\u1eb7n th\u00f4ng b\u00e1o Facebook tr\u00ean tr\u00ecnh duy\u1ec7t."), h.jsx("button", {
                            onClick: a.onClick,
                            children: g._("\u0110\u00f3ng")
                        })]
                    })
                })
            })
        })
    }
}
), null);
__d("CometRecordProductUsageMutation", ["CometRelay", "CometRelayErrorHandling", "JSScheduler", "CometRecordProductUsageMutationMutation.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = g !== void 0 ? g : g = b("CometRecordProductUsageMutationMutation.graphql");
    function a(a, c) {
        b("JSScheduler").scheduleLoggingPriCallback(function() {
            b("CometRelay").commitMutation(a, {
                mutation: h,
                onError: function(a) {
                    b("CometRelayErrorHandling").markErrorAsHandled(a)
                },
                variables: {
                    productID: c
                }
            })
        })
    }
    c = {
        updateProductUsage: a
    };
    d = c;
    e.exports = d
}
), null);
__d("GroupsCometCreateDialog.entrypoint", ["JSResourceForInteraction", "WebPixelRatio", "GroupsCometCreateDialogQuery$Parameters"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        getPreloadProps: function(a) {
            a = a.pageID;
            return {
                queries: {
                    groupCreateDialogQueryReference: {
                        parameters: b("GroupsCometCreateDialogQuery$Parameters"),
                        variables: {
                            isG4P: a != null,
                            pageID: (a = a) != null ? a : "",
                            scale: b("WebPixelRatio").get()
                        }
                    }
                }
            }
        },
        root: b("JSResourceForInteraction")("GroupsCometCreateDialog.react").__setRef("GroupsCometCreateDialog.entrypoint")
    };
    e.exports = a
}
), null);
__d("CometHomeCreateMenu.react", ["ix", "fbt", "CometLeftRailHeader.react", "CometMenuSeparator.react", "CometRelay", "CometScrollableArea.react", "CometTopNavListDropdown.react", "FundraiserCreateUrlUtils", "GroupsCometCreateDialog.entrypoint", "React", "StoriesGating", "TetraListCell.react", "XCometCreateAdControllerRouteBuilder", "XCometEventCreateControllerRouteBuilder", "XCometGroupsTabControllerRouteBuilder", "XCometJobsComposerControllerRouteBuilder", "XCometMarketplaceComposerControllerRouteBuilder", "XCometPageCreationControllerRouteBuilder", "emptyFunction", "fbicon", "gkx", "logCometFunnelEvent", "qex", "recoverableViolation", "requireCond", "requireDeferred", "stylex", "useCometEntryPointDialog", "useLifeEventsComposerDialog", "useTopNavigationLogging", "cr:1705275", "CometHomeCreateMenuQuery.graphql"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i, j, k = b("React"), l = b("requireDeferred")("CometMarketplaceLogger");
    function m(a) {
        if (a !== "group")
            return;
        b("logCometFunnelEvent").logCometFunnelEvent("GroupsCometFeedWebFunnelDefinition", "[click][lhc][create menu][group]")
    }
    function n(a) {
        var c = a.item
          , d = a.onClose;
        a = a.position;
        a = b("useTopNavigationLogging").useCreateItemLoggingCallbacks(c.itemKey, a);
        var e = a[0];
        a = a[1];
        var f = k.useCallback(function(a) {
            d();
            if (c.type === "item") {
                var b = c.cellProps != null ? c.cellProps.onPress : null;
                b && b(a)
            }
            e();
            m(c.itemKey)
        }, [c, e, d]);
        return c.type === "separator" ? k.jsx(b("CometMenuSeparator.react"), {}) : k.jsx(b("TetraListCell.react"), babelHelpers["extends"]({}, c.cellProps, {
            level: 4,
            onPress: f,
            ref: a
        }))
    }
    var o = {
        root: {
            paddingTop: "ecm0bbzt",
            paddingEnd: "rz4wbd8a",
            paddingBottom: "sj5x9vvc",
            paddingStart: "a8nywdso"
        },
        scrollableArea: {
            maxHeight: "t1wsaese",
            maxWidth: "h77mwsce"
        },
        scrollableAreaWidth: {
            width: "o36gj0jk"
        }
    };
    function a(a) {
        var c = a.onClose
          , d = a.showComposerDialog;
        a = b("useCometEntryPointDialog")(b("GroupsCometCreateDialog.entrypoint"), {});
        a = a[0];
        b("logCometFunnelEvent").useLogCometFunnelImpressionEvent("GroupsCometFeedWebFunnelDefinition", "[impression][lhc][create menu][group]");
        var e = b("useLifeEventsComposerDialog")("COMPOSER")
          , f = e[0]
          , m = b("CometRelay").useLazyLoadQuery(i !== void 0 ? i : i = b("CometHomeCreateMenuQuery.graphql"), {});
        e = k.useMemo(function() {
            var a, e, i, j;
            a = (a = m == null ? void 0 : (a = m.viewer) == null ? void 0 : a.can_create_page) != null ? a : !1;
            e = (m == null ? void 0 : (e = m.viewer) == null ? void 0 : (e = e.account_user) == null ? void 0 : e.should_use_page_rename) === !0;
            var o = b("FundraiserCreateUrlUtils").getCreateFundraiserUrl(null, "blue_bar_create_menu")
              , p = o != null
              , q = b("gkx")("699938");
            i = Boolean(m == null ? void 0 : (i = m.viewer) == null ? void 0 : (i = i.job_search_settings) == null ? void 0 : i.can_viewer_create_any_job) && !q && !p && b("qex")._("1758234");
            var r = "";
            Boolean(i) && (r = b("XCometJobsComposerControllerRouteBuilder").buildURL({
                job_opening_create_surface: "JOBS",
                source: "comet_create_entrypoint"
            }));
            j = (j = m.lwi) == null ? void 0 : j.should_direct_to_lwi;
            j == null && (b("recoverableViolation")("shouldDirectToLWI is null", "pages_lwi"),
            j = !1);
            return [{
                cellProps: {
                    addOnPrimary: {
                        icon: b("fbicon")._(g("507172"), 20),
                        size: 36,
                        type: "contained-icon"
                    },
                    body: h._("Chia s\u1ebb b\u00e0i vi\u1ebft tr\u00ean B\u1ea3ng tin."),
                    headline: h._("\u0110\u0103ng"),
                    onPress: function() {
                        d()
                    }
                },
                itemKey: "post",
                render: !0,
                type: "item"
            }, {
                cellProps: {
                    addOnPrimary: {
                        icon: b("fbicon")._(g("1160717"), 20),
                        size: 36,
                        type: "contained-icon"
                    },
                    body: b("StoriesGating").getCreationDescription(),
                    headline: h._("Tin"),
                    linkProps: {
                        passthroughProps: {
                            entryPoint: "add_to_story_homebase_shortcut",
                            sourceSurface: "home_screen_shortcut"
                        },
                        target: "_self",
                        url: b("StoriesGating").isAddToStoryEnabled() ? b("cr:1705275") == null ? void 0 : b("cr:1705275").buildURL({}) : void 0
                    }
                },
                itemKey: "story",
                render: b("StoriesGating").isAddToStoryEnabled(),
                type: "item"
            }, {
                cellProps: {
                    addOnPrimary: {
                        icon: b("fbicon")._(g("481240"), 20),
                        size: 36,
                        type: "contained-icon"
                    },
                    body: e ? h._("Th\u00eam s\u1ef1 ki\u1ec7n trong \u0111\u1eddi v\u00e0o Trang.") : h._("Th\u00eam s\u1ef1 ki\u1ec7n trong \u0111\u1eddi v\u00e0o trang c\u00e1 nh\u00e2n."),
                    headline: h._("S\u1ef1 ki\u1ec7n trong \u0111\u1eddi"),
                    onPress: function() {
                        f()
                    }
                },
                itemKey: "life-event",
                render: !0,
                type: "item"
            }, {
                itemKey: "separator",
                render: !0,
                type: "separator"
            }, {
                cellProps: {
                    addOnPrimary: {
                        icon: b("fbicon")._(g("490492"), 20),
                        size: 36,
                        type: "contained-icon"
                    },
                    body: h._("K\u1ebft n\u1ed1i v\u00e0 chia s\u1ebb v\u1edbi kh\u00e1ch h\u00e0ng ho\u1eb7c fan."),
                    headline: h._("Trang"),
                    linkProps: {
                        target: "_self",
                        url: b("XCometPageCreationControllerRouteBuilder").buildURL({
                            ref_type: "comet_home"
                        })
                    }
                },
                itemKey: "page",
                render: a,
                type: "item"
            }, {
                cellProps: {
                    addOnPrimary: {
                        icon: b("fbicon")._(g("534262"), 20),
                        size: 36,
                        type: "contained-icon"
                    },
                    body: h._("Qu\u1ea3ng c\u00e1o doanh nghi\u1ec7p, th\u01b0\u01a1ng hi\u1ec7u ho\u1eb7c t\u1ed5 ch\u1ee9c c\u1ee7a b\u1ea1n."),
                    headline: h._("Qu\u1ea3ng c\u00e1o"),
                    linkProps: {
                        rel: "noopener",
                        target: j && b("gkx")("1626296") ? "_self" : "_blank",
                        url: b("XCometCreateAdControllerRouteBuilder").buildURL({})
                    }
                },
                itemKey: "ad",
                render: !0,
                type: "item"
            }, {
                cellProps: {
                    addOnPrimary: {
                        icon: b("fbicon")._(g("510947"), 20),
                        size: 36,
                        type: "contained-icon"
                    },
                    body: b("gkx")("1099151") ? h._("K\u1ebft n\u1ed1i v\u1edbi nh\u1eefng ng\u01b0\u1eddi c\u00f9ng chung s\u1edf th\u00edch.") : h._("T\u00ecm ng\u01b0\u1eddi c\u00f3 chung s\u1edf th\u00edch."),
                    headline: h._("Nh\u00f3m"),
                    linkProps: {
                        preventLocalNavigation: !1,
                        target: "_self",
                        url: b("XCometGroupsTabControllerRouteBuilder").buildURL({
                            category: "create"
                        })
                    },
                    onPress: function(a) {
                        a.type !== "press" && a.preventDefault()
                    }
                },
                itemKey: "group",
                render: !0,
                type: "item"
            }, {
                cellProps: {
                    addOnPrimary: {
                        icon: b("fbicon")._(g("640913"), 20),
                        size: 36,
                        type: "contained-icon"
                    },
                    body: h._("G\u1eafn k\u1ebft m\u1ecdi ng\u01b0\u1eddi th\u00f4ng qua s\u1ef1 ki\u1ec7n ri\u00eang t\u01b0 ho\u1eb7c c\u00f4ng khai."),
                    headline: h._("S\u1ef1 ki\u1ec7n"),
                    linkProps: {
                        url: b("XCometEventCreateControllerRouteBuilder").buildURL({
                            acontext: JSON.stringify({
                                event_action_history: [{
                                    mechanism: "surface",
                                    surface: "home"
                                }]
                            })
                        })
                    }
                },
                itemKey: "event",
                render: !0,
                type: "item"
            }, {
                cellProps: {
                    addOnPrimary: {
                        icon: b("fbicon")._(g("556467"), 20),
                        size: 36,
                        type: "contained-icon"
                    },
                    body: h._("B\u00e1n h\u00e0ng cho ng\u01b0\u1eddi trong c\u1ed9ng \u0111\u1ed3ng c\u1ee7a b\u1ea1n."),
                    headline: h._("B\u00e0i ni\u00eam y\u1ebft tr\u00ean Marketplace"),
                    linkProps: {
                        url: b("XCometMarketplaceComposerControllerRouteBuilder").buildURL({
                            listing_type: "item"
                        })
                    },
                    onPress: function() {
                        l.load().then(function(a) {
                            a.logClick("create_menu", null, null, {
                                composerEntrypoint: "create_menu",
                                composerMode: "create"
                            })
                        })["catch"](b("emptyFunction"))
                    }
                },
                itemKey: "marketplace-listing",
                render: q,
                type: "item"
            }, {
                cellProps: {
                    addOnPrimary: {
                        icon: b("fbicon")._(g("510954"), 20),
                        size: 36,
                        type: "contained-icon"
                    },
                    body: h._("Quy\u00ean ti\u1ec1n cho m\u1ee5c \u0111\u00edch x\u00e3 h\u1ed9i m\u00e0 b\u1ea1n quan t\u00e2m."),
                    headline: h._("Chi\u1ebfn d\u1ecbch g\u00e2y qu\u1ef9"),
                    linkProps: {
                        target: "_self",
                        url: (e = o) != null ? e : ""
                    }
                },
                itemKey: "fundraiser",
                render: p,
                type: "item"
            }, {
                cellProps: {
                    addOnPrimary: {
                        icon: b("fbicon")._(g("481905"), 20),
                        size: 36,
                        type: "contained-icon"
                    },
                    body: h._("Post a job and reach nearby applicants for free."),
                    headline: h._("Vi\u1ec7c l\u00e0m"),
                    linkProps: {
                        target: "_self",
                        url: r
                    }
                },
                itemKey: "job",
                render: Boolean(i),
                type: "item"
            }].filter(function(a) {
                return a == null ? void 0 : a.render
            }).map(function(a, b) {
                return k.jsx(n, {
                    item: a,
                    onClose: c,
                    position: b
                }, a.itemKey)
            })
        }, [m, c, d, f, a]);
        return k.jsx(b("CometTopNavListDropdown.react"), {
            label: h._("T\u1ea1o"),
            name: "CreateMenu",
            children: k.jsx(b("CometTopNavListDropdown.react").Card, {
                testid: void 0,
                children: k.jsxs(b("CometScrollableArea.react"), {
                    xstyle: [o.scrollableArea, o.scrollableAreaWidth],
                    children: [k.jsx(b("CometLeftRailHeader.react"), {
                        title: h._("T\u1ea1o")
                    }), k.jsx("div", {
                        className: (j || (j = b("stylex")))(o.root),
                        children: e
                    })]
                })
            })
        })
    }
}
), null);
__d("CometSetupNotificationStoreSubscription", ["CometNotificationsReceiveSubscription", "CometRelay", "JSResource", "React", "WebPixelRatio", "promiseDone", "relay-runtime", "requireDeferred", "CometSetupNotificationStoreSubscriptionNewNotification_data.graphql", "CometSetupNotificationStoreSubscriptionNewNotificationQuery.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h, i = b("React"), j = b("requireDeferred")("Banzai"), k = b("JSResource")("CometToastNotification.react").__setRef("CometSetupNotificationStoreSubscription"), l = {
        data: g !== void 0 ? g : g = b("CometSetupNotificationStoreSubscriptionNewNotification_data.graphql")
    };
    h !== void 0 ? h : h = b("CometSetupNotificationStoreSubscriptionNewNotificationQuery.graphql");
    var m = "notif_beeper_drop";
    function a(a, c) {
        var d = l.data;
        if (d == null)
            return;
        d = b("relay-runtime").getFragment(d);
        var e = {
            input: {
                client_subscription_id: "notifications:receive:subscription"
            },
            scale: b("WebPixelRatio").get()
        }
          , f = b("relay-runtime").createOperationDescriptor(b("relay-runtime").getRequest(b("CometNotificationsReceiveSubscription").NotificationsReceiveSubscription), e);
        d = c.lookup(b("relay-runtime").createReaderSelector(d, "client:root:viewer", e, f.request));
        var g;
        e = function(a) {
            g = a
        }
        ;
        var h = {};
        f = c.subscribe(d, function(c) {
            if (c.isMissingData)
                return;
            c = c.data;
            var d = c.actor
              , e = c.new_notification;
            if (d == null || e == null)
                return;
            c = a.getState();
            e.seen_state !== "UNSEEN_AND_UNREAD" && e.notif_id in h && ((c = c[h[e.notif_id]]) == null ? void 0 : c.shown) !== !0 && (a["delete"](h[e.notif_id]),
            delete h[e.notif_id]);
            b("promiseDone")(k.load().then(function(b) {
                if (g !== !0 && e.seen_state === "UNSEEN_AND_UNREAD" && h[e.notif_id] == null) {
                    var c = a.push(i.jsx(b, {
                        actor: d,
                        notification: e,
                        onCloseClick: function() {
                            return a.expire(c)
                        }
                    }), 5e3);
                    h[e.notif_id] = c
                } else
                    j.onReady(function(a) {
                        var b = e.notif_id
                          , c = e.notif_type;
                        a.post(m, {
                            notification_data: {
                                alert_id: b,
                                logger_context: "beeper",
                                notif_type: c,
                                user_id: d == null ? void 0 : d.id
                            },
                            ref: "www_tab"
                        })
                    })
            }))
        });
        return {
            disposable: f,
            setFilter: e
        }
    }
}
), null);
__d("MWMSJewelThreadlistFetcher.bs", ["MWMSJewelThreadlistFetcher"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a, c, d) {
        b("MWMSJewelThreadlistFetcher").preloadItems(a, c, d);
        return 0
    }
    f.preloadItems = a
}
), null);
__d("MWUIJewelThreadlistFetcher.bs", ["requireCond", "cr:1758812"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("cr:1758812").preloadItems;
    f.preloadItems = a
}
), null);
__d("MWUIJewelThreadlistFetcher.re", ["bs_curry", "MWUIJewelThreadlistFetcher.bs"], (function(a, b, c, d, e, f) {
    a = function(a, c, d) {
        a = b("bs_curry")._3(b("MWUIJewelThreadlistFetcher.bs").preloadItems, a, c, d);
        return a
    }
    ;
    f.preloadItems = a
}
), null);
__d("MWChatSubscribeToThreadRead", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a, b) {
        var c = a.subscribe("thread-read-changed", function(a, c) {
            a = 0;
            for (var d in c)
                c[d].mark_as_read && c[d].timestamp > a && (a = c[d].timestamp);
            a > 0 && b(null, a)
        });
        return function() {
            a.unsubscribe(c)
        }
    }
    ;
    f.subscribe = a
}
), null);
__d("MWChatSubscribeToThreadReadCond", ["requireCond", "cr:1273135"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("cr:1273135") == null ? function() {
        return function() {}
    }
    : b("cr:1273135").subscribe;
    f.subscribe = a
}
), null);
__d("MWChatTabPolicy.bs", ["bs_curry", "MWCount.bs", "bs_caml_obj", "MercuryIDs", "bs_belt_Option", "bs_caml_option", "CurrentUser", "MercuryViewer", "killswitch", "requireDeferred", "MessengerMessage.bs", "bs_js_null_undefined", "MercuryActionType", "MercuryThreadInfo", "MessengerWebEvent", "MWChatSettingsQuery", "MessengerWebStgTypedLoggerLite.bs"], (function(a, b, c, d, e, f) {
    "use strict";
    function g(a, c, d) {
        if (d === 0)
            return b("bs_curry")._1(a, c);
        else
            return 0
    }
    var h = b("requireDeferred")("MessengerState.bs");
    function a(a, c, d) {
        var e = function(a) {
            return b("MessengerWebStgTypedLoggerLite.bs").log({
                event_name: b("MessengerWebEvent").SUPPRESS_NEW_MESSAGE,
                extra_data: {
                    reason: a
                }
            })
        }
          , f = function(a) {
            if (b("killswitch")("MESSENGER_WEB_STOP_AUTOMATIC_CHAT_TAB_RAISING")) {
                b("bs_curry")._1(b("MWCount.bs").Comet.NewMessage.reject, 0);
                return b("bs_curry")._1(a, 1)
            } else
                return b("bs_curry")._1(a, 0)
        }
          , i = function(a) {
            if (b("MessengerMessage.bs").isOutbound(c)) {
                e("message_outgoing");
                b("bs_curry")._1(b("MWCount.bs").Comet.NewMessage.reject, 0);
                return b("bs_curry")._1(a, 1)
            } else
                return b("bs_curry")._1(a, 0)
        }
          , j = function(a) {
            b("MWChatSettingsQuery").areChatTabsTurnedOff(function(c) {
                if (!(c == null) && c) {
                    e("turn_off_chat_tab");
                    b("bs_curry")._1(b("MWCount.bs").Comet.NewMessage.reject, 0);
                    return b("bs_curry")._1(a, 1)
                } else
                    return b("bs_curry")._1(a, 0)
            });
            return 0
        }
          , k = function(d) {
            if (b("MercuryThreadInfo").isMuted(a))
                if (b("MercuryThreadInfo").areMentionsMuted(a)) {
                    e("mention_muted");
                    b("bs_curry")._1(b("MWCount.bs").Comet.NewMessage.reject, 0);
                    return b("bs_curry")._1(d, 1)
                } else {
                    var f = b("bs_js_null_undefined").fromOption(b("bs_belt_Option").map(b("bs_caml_option").nullable_to_opt(b("MercuryIDs").getUserIDFromParticipantID(b("MercuryViewer").getID())), function(a) {
                        return a
                    }))
                      , g = c.profile_ranges;
                    g = g == null ? [] : g;
                    if (g.some(function(a) {
                        return b("bs_caml_obj").caml_equal(a.id, f)
                    }))
                        return b("bs_curry")._1(d, 0);
                    else {
                        e("message_thread_muted");
                        b("bs_curry")._1(b("MWCount.bs").Comet.NewMessage.reject, 0);
                        return b("bs_curry")._1(d, 1)
                    }
                }
            else
                return b("bs_curry")._1(d, 0)
        }
          , l = function(a) {
            if (c.action_type !== b("MercuryActionType").USER_GENERATED_MESSAGE) {
                e("message_non_user_generated");
                b("bs_curry")._1(b("MWCount.bs").Comet.NewMessage.reject, 0);
                return b("bs_curry")._1(a, 1)
            } else
                return b("bs_curry")._1(a, 0)
        }
          , m = function(c) {
            if (a.folder === "inbox")
                return b("bs_curry")._1(c, 0);
            else {
                e("message_no_inbox");
                b("bs_curry")._1(b("MWCount.bs").Comet.NewMessage.reject, 0);
                return b("bs_curry")._1(c, 1)
            }
        }
          , n = function(c) {
            var d = b("CurrentUser").getID();
            h.onReady(function(f) {
                return b("bs_curry")._2(f.compute, d, function(f) {
                    return b("requireDeferred")("MercuryIgnoredBlockedParticipants.bs").onReady(function(g) {
                        if (g.isPresentInGroupThread(d, f.blocked_ids, a)) {
                            e("message_blocked_participants");
                            b("bs_curry")._1(b("MWCount.bs").Comet.NewMessage.reject, 0);
                            return b("bs_curry")._1(c, 1)
                        } else
                            return b("bs_curry")._1(c, 0)
                    })
                })
            });
            return 0
        }
          , o = function(c) {
            if (a.is_canonical && a.other_user_fbid === null)
                return b("requireDeferred")("BanzaiODS").onReady(function(a) {
                    a.bumpEntityKey("messenger-chat-tab-policy", "message_canonical_contact");
                    e("message_canonical_contact");
                    b("bs_curry")._1(b("MWCount.bs").Comet.NewMessage.reject, 0);
                    return b("bs_curry")._1(c, 1)
                });
            else
                return b("bs_curry")._1(c, 0)
        };
        f = [f, [i, [j, [k, [l, [m, [n, [o, 0]]]]]]]];
        if (f) {
            i = function a(c) {
                if (c) {
                    var e = c[0]
                      , f = a(c[1]);
                    return function(a) {
                        return g(e, f, a)
                    }
                } else
                    return function(a) {
                        return g(function(a) {
                            return b("bs_curry")._1(d, 0)
                        }, function(a) {
                            return 0
                        }, a)
                    }
            }
            ;
            return b("bs_curry")._1(f[0], i(f[1]))
        } else
            return 0
    }
    f.proceedIfAllow = g;
    f.$MessengerState$Deferred = h;
    f.shouldMessageBeAllowed = a
}
), null);
__d("MercuryNotificationRenderer", ["fbt", "CurrentUser", "MercuryAssert", "MercuryIDs", "MercuryViewer", "MessengerParticipants.bs", "MessengerState.bs"], (function(a, b, c, d, e, f, g) {
    f.renderDocumentTitle = a;
    var h = "source:messenger_growth:event_upcoming_bump";
    function a(a, c) {
        b("MercuryAssert").isThreadID(a),
        b("MessengerState.bs").getThreadMeta(b("CurrentUser").getID(), a, function(d) {
            b("MessengerState.bs").getThreadMessagesRange(b("CurrentUser").getID(), a, 0, 1, function(e) {
                e = e.length && e[e.length - 1];
                var f = [];
                e.tags !== void 0 && (f = f.concat(e.tags));
                e.log_message_data && (e.log_message_data.message_type == "confirm_friend_request" || e.log_message_data.message_type == "work_invite_claimed") ? c(g._("\u0110\u00e3 th\u00eam ng\u01b0\u1eddi li\u00ean h\u1ec7 m\u1edbi")) : f.indexOf(h) !== -1 ? c(g._("B\u1ea1n c\u00f3 m\u1ed9t s\u1ef1 ki\u1ec7n s\u1eafp t\u1edbi.")) : e && e.author != b("MercuryViewer").getID() && e.author != null ? b("MessengerParticipants.bs").get(e.author, function(e) {
                    var f = e.short_name
                      , h = d.custom_nickname;
                    if (h) {
                        e = b("MercuryIDs").getUserIDFromParticipantID(e.id);
                        h[e] && (f = h[e])
                    }
                    d.name ? c(g._("{senderName} \u0111\u00e3 nh\u1eafn tin {groupName}", [g._param("senderName", f), g._param("groupName", d.name)])) : b("MercuryIDs").isGroupChat(a) ? c(g._("{name} \u0111\u00e3 nh\u1eafn tin cho nh\u00f3m c\u1ee7a b\u1ea1n", [g._param("name", f)])) : c(g._("{name} \u0111\u00e3 nh\u1eafn tin cho b\u1ea1n", [g._param("name", f)]))
                }) : c(g._("Tin nh\u1eafn m\u1edbi"))
            })
        })
    }
}
), null);
__d("MWChatChatPopperUpper.bs", ["FBID.bs", "bs_curry", "React", "MWCount.bs", "MercuryIDs", "CurrentUser", "MWChatConfig.bs", "MWChatTabPolicy.bs", "requireDeferred", "MessengerMessage.bs", "MWChatSettingsQuery", "recoverableViolation", "MercuryThreadInformer", "MWChatThreadPingCounter.bs", "MercuryNotificationRenderer", "MWChatSubscribeToThreadReadCond"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = b("requireDeferred")("Sound");
    function i(a) {
        var c = b("MessengerMessage.bs").isInbound(a);
        if (c)
            return h.onReady(function(c) {
                c.play([b("MWChatConfig.bs").soundNotifOggUrl, b("MWChatConfig.bs").soundNotifMp3Url], a.timestamp, !1);
                return 0
            });
        else
            return 0
    }
    var j = b("requireDeferred")("MessengerState.bs");
    function k(a, c, d, e, f) {
        j.onReady(function(g) {
            b("bs_curry")._4(g.getThreadMeta, b("CurrentUser").getID(), c, function(g) {
                return b("MWChatTabPolicy.bs").shouldMessageBeAllowed(g, d, function(h) {
                    b("bs_curry")._1(b("MWCount.bs").Comet.NewMessage.lift, 0);
                    b("bs_curry")._1(a, b("bs_curry")._1(f, g));
                    b("MercuryNotificationRenderer").renderDocumentTitle(c, function(a) {
                        return b("bs_curry")._2(e, a, d.timestamp)
                    });
                    if (b("MWChatThreadPingCounter.bs").getCount(c) < 3) {
                        b("MWChatThreadPingCounter.bs").incrementCount(c);
                        b("MWChatSettingsQuery").areChatTabsSoundsOn(function(a) {
                            if (!(a == null) && a)
                                return i(d);
                            else
                                return 0
                        });
                        return 0
                    } else
                        return 0
                })
            }, null);
            return 0
        });
        return 0
    }
    function l(a, c, d) {
        var e = b("MercuryThreadInformer").getForFBID(b("CurrentUser").getID())
          , f = e.subscribe("new-message", function(a, e) {
            b("bs_curry")._1(b("MWCount.bs").Comet.NewMessage.$$process, 0);
            if (e == null)
                return 0;
            else {
                a = e.threadID;
                e = e.message;
                a = b("MercuryIDs").tokenize(a);
                var f = b("FBID.bs").ofStringExn(a.value)
                  , g = a.type;
                switch (g) {
                case "thread":
                    return k(c, b("MercuryIDs").getThreadIDFromThreadFBID(f), e, d, function(a) {
                        return [757211935, f]
                    });
                case "user":
                    return k(c, b("MercuryIDs").getThreadIDFromUserID(f), e, d, function(a) {
                        if (a.is_other_recipient_page)
                            return [892012143, f];
                        else
                            return [948354667, f]
                    });
                default:
                    b("bs_curry")._1(b("MWCount.bs").Comet.NewMessage.reject, 0);
                    b("recoverableViolation")("Unknown id type " + a.type, "messenger_comet");
                    return 0
                }
            }
        })
          , g = b("MWChatSubscribeToThreadReadCond").subscribe(e, d);
        a.current = function(a) {
            e.unsubscribe(f);
            b("bs_curry")._1(g, 0);
            return 0
        }
        ;
        return 0
    }
    function a(a, c) {
        var d = g.useRef(void 0);
        g.useEffect(function() {
            l(d, c, a);
            return function(a) {
                a = d.current;
                if (a !== void 0)
                    return b("bs_curry")._1(a, 0);
                else
                    return 0
            }
        }, [a, c]);
        return 0
    }
    c = 3;
    f.pingsMaxCount = c;
    f.soundDeferred = h;
    f.playSound = i;
    f.$MessengerState$Deferred = j;
    f.dispatchOpenTab = k;
    f.sub = l;
    f.usePopperUpper = a
}
), null);
__d("AvailableListState", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        OFFLINE: 0,
        IDLE: 1,
        ACTIVE: 2,
        MOBILE: 3
    });
    e.exports = a
}
), null);
__d("PresenceStatusProviderSubscription", ["AvailableListState", "CometHomeContactsConfig", "CometRelay", "CurrentUser", "WebPixelRatio", "promiseDone", "recoverableViolation", "relay-runtime", "requireDeferred", "PresenceStatusProviderSubscription_PresenceStatusChatVisibilityQuery.graphql", "PresenceStatusProviderSubscription_ContactProfilesQuery.graphql", "PresenceStatusProviderSubscription_rankings.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i, j = b("requireDeferred")("FBMqttChannel"), k = b("requireDeferred")("MessengerMQTTPresence"), l = Object.assign.apply(Object, [{}].concat(Object.entries(b("AvailableListState")).map(function(a) {
        var b, c = a[0];
        a = a[1];
        return b = {},
        b[String(a)] = c,
        b
    }))), m = g !== void 0 ? g : g = b("PresenceStatusProviderSubscription_PresenceStatusChatVisibilityQuery.graphql"), n = h !== void 0 ? h : h = b("PresenceStatusProviderSubscription_ContactProfilesQuery.graphql");
    function o(a) {
        var b = null
          , c = j.onReady(function(c) {
            c.subscribe("/legacy_web", function(b) {
                var c = JSON.parse(b);
                c.type === "privacy_changed" && a.commitUpdate(function(a) {
                    a = a.getRoot();
                    if (a == null)
                        return;
                    a = a.getLinkedRecord("viewer");
                    if (a == null)
                        return;
                    a.setValue(((a = c.data) == null ? void 0 : a.visibility) === !0, "chat_visibility")
                })
            }),
            b = function() {
                return c.unsubscribeAll("/legacy_web")
            }
        });
        return {
            remove: function() {
                c.remove(),
                b != null && b()
            }
        }
    }
    function p(a, b, c, d, e) {
        var f = null
          , g = k.onReady(function(g) {
            g.subscribe({
                reset: function() {
                    var f = b.current
                      , g = {};
                    Object.keys(f).forEach(function(a) {
                        delete g[a]
                    });
                    b.current = g;
                    v(a, b.current, c, d, e)
                },
                setMultiFromMQTT: function(f) {
                    var g = b.current
                      , h = babelHelpers["extends"]({}, g);
                    f.forEach(function(a) {
                        h[a.u] = {
                            last_active_time: a.l,
                            status: a.p
                        }
                    });
                    b.current = h;
                    v(a, b.current, c, d, e)
                }
            }),
            f = function() {
                return g.unsubscribe()
            }
        });
        return {
            remove: function() {
                g.remove(),
                f != null && f()
            }
        }
    }
    function q(a, c, d, e, f) {
        var g, h = b("relay-runtime").getRequest(m);
        h = b("relay-runtime").createOperationDescriptor(h, {});
        h = a.lookup(h.fragment);
        g = (g = h.data) == null ? void 0 : g.viewer;
        var i = typeof g === "object" ? g == null ? void 0 : g.chat_visibility : null;
        e.current = !!i;
        g = a.subscribe(h, function(b) {
            b = b.data;
            b = b == null ? void 0 : b.viewer;
            if (typeof b !== "object" || b == null)
                return;
            var g = b == null ? void 0 : b.presence_view_side_settings;
            if (typeof g === "object" && g != null && g.has_converted_to_view_side_settings === !0)
                return;
            g = b.chat_visibility;
            i != null && g !== i && v(a, c.current, d, e, f);
            i = g
        });
        return g
    }
    var r = {
        height: 36,
        scale: b("WebPixelRatio").get(),
        width: 36
    }
      , s = function(a, c, d) {
        if (c.size === 0)
            return;
        b("promiseDone")(b("CometRelay").fetchQuery(d, n, {
            ids: Array.from(c),
            scale: b("WebPixelRatio").get()
        }).toPromise().then(function(c) {
            var e = (c == null ? void 0 : c.nodes) || [];
            d.commitUpdate(function(c) {
                e.forEach(function(d) {
                    var e, f = d == null ? void 0 : d.id;
                    if (f == null)
                        return;
                    var g = c.get(f);
                    g == null && (g = c.create(f, "User"));
                    var h = d == null ? void 0 : d.name;
                    if (h == null)
                        return b("recoverableViolation")("ContactProfilesQuery return empty name for user " + f, "messenger_comet");
                    g.setValue(h, "name");
                    h = g.getOrCreateLinkedRecord("profile_picture", "Image", r);
                    e = d == null ? void 0 : (e = d.profile_picture) == null ? void 0 : e.uri;
                    if (e == null)
                        return b("recoverableViolation")("ContactProfilesQuery return empty profileUri for user " + f, "messenger_comet");
                    h.setValue(d == null ? void 0 : (e = d.profile_picture) == null ? void 0 : e.uri, "uri");
                    g.setLinkedRecord(h, "profile_picture", r);
                    a.push(g)
                }),
                u(c, a)
            })
        }))
    }
      , t = function(a, c, d, e) {
        a.commitUpdate(function(f) {
            if (d == null)
                return;
            var g = new Set(Object.keys(c).filter(function(a) {
                return b("CurrentUser").getID() !== a && ((a = c[a]) == null ? void 0 : a.status) === 2
            }))
              , h = d.filter(function(a) {
                var b = a.buddy_id;
                a = a.status;
                return a == null || b == null ? !1 : ((b = e.current ? (b = c[b]) == null ? void 0 : b.status : 0) != null ? b : 0) === a
            }).map(function(a) {
                a = (a = a.user) == null ? void 0 : a.id;
                if (a == null)
                    return null;
                g["delete"](a);
                return f.get(a)
            }).filter(Boolean);
            g.size > 0 && (g.forEach(function(a) {
                var b = f.get(a);
                if (b != null && b.getValue("name") != null) {
                    var c = b.getLinkedRecord("profile_picture", r);
                    c != null && c.getValue("uri") != null && (h.push(b),
                    g["delete"](a))
                }
            }),
            s(h, g, a));
            u(f, h)
        })
    };
    function u(a, c) {
        a = a.getRoot().getLinkedRecord("viewer");
        if (a == null) {
            b("recoverableViolation")("Viewer should not be null here, something has gone horribly wrong", "messenger_web_product");
            return
        }
        a.setLinkedRecords(c, "chat_sidebar_contacts", {
            count: b("CometHomeContactsConfig").numContactsToFetch
        })
    }
    function v(a, b, c, d, e) {
        a.commitUpdate(function(a) {
            var e = a.getRoot();
            if (e == null)
                return;
            e = e.getLinkedRecord("viewer");
            if (e == null)
                return;
            var f = e.getLinkedRecord("presence_view_side_settings")
              , g = f != null && f.getValue("has_converted_to_view_side_settings") === !0 || e.getValue("chat_visibility") === !0;
            f = e.getLinkedRecord("actor");
            f != null && g ? f.setValue("ACTIVE", "availability") : f != null && f.setValue("OFFLINE", "availability");
            d.current = g;
            e = Object.keys(b);
            e.forEach(function(c) {
                var d, e;
                d = (d = b[c]) == null ? void 0 : d.status;
                e = (e = b[c]) == null ? void 0 : e.last_active_time;
                d = d == null ? null : l[String(d)];
                var f = a.get(c);
                f == null && d === "ACTIVE" && (f = a.create(c, "User"));
                f != null && (f.setValue(d === "ACTIVE" && g ? d : null, "availability"),
                !g ? f.setValue(null, "last_active_time") : e !== 0 && e != null && f.setValue(e, "last_active_time"))
            });
            c()
        }),
        t(a, b, e, d)
    }
    a = {
        init: function(a, c, d, e, f) {
            f = f != null ? f.map(function(a) {
                return b("CometRelay").readInlineData(i !== void 0 ? i : i = b("PresenceStatusProviderSubscription_rankings.graphql"), a)
            }) : null;
            var g = o(a)
              , h = p(a, c, d, e, f)
              , j = q(a, c, d, e, f);
            return {
                remove: function() {
                    h.remove(),
                    g.remove(),
                    j.dispose()
                }
            }
        }
    };
    e.exports = a
}
), null);
__d("PresenceStatusProviderSubscriptionComponent.react", ["CometRelay", "PresenceStatusProviderSubscription", "React", "WebPixelRatio", "PresenceStatusProviderSubscriptionComponentQuery.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React"), i = function() {
        return b("CometRelay").useLazyLoadQuery(g !== void 0 ? g : g = b("PresenceStatusProviderSubscriptionComponentQuery.graphql"), {
            scale: b("WebPixelRatio").get()
        })
    };
    function a(a) {
        var c = i()
          , d = (c = c == null ? void 0 : (c = c.viewer) == null ? void 0 : c.chat_sidebar_contact_rankings) != null ? c : null
          , e = b("CometRelay").useRelayEnvironment();
        h.useEffect(function() {
            var c = b("PresenceStatusProviderSubscription").init(e, a.presenceMap, a.presenceInformer, a.chatVisibilityRef, d);
            return function() {
                c.remove()
            }
        }, [e, a.presenceInformer, a.presenceMap, d, a.chatVisibilityRef]);
        return null
    }
}
), null);
__d("RTWebCallBlockSettingHooks", ["CometRelay", "DateConsts", "React", "RTWebCallBlockedSettingSubscription", "RTWebPreCallContext", "ServerTime", "promiseDone", "RTWebCallBlockSettingHooksQuery.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    f.useCallBlockSettingValue = m;
    f.useHasCallsBlocked = n;
    f.useCallBlockSetting = a;
    var g, h = b("React"), i = 6e4, j = g !== void 0 ? g : g = b("RTWebCallBlockSettingHooksQuery.graphql"), k = function(a, b) {
        return function(c) {
            c = c.getRoot();
            if (c == null)
                return;
            c = c.getLinkedRecord("viewer");
            if (c == null)
                return;
            c.setValue(b, a)
        }
    };
    function l(a) {
        return a === -1 ? a : (a || 0) * b("DateConsts").MS_PER_SEC
    }
    function m() {
        var a = b("CometRelay").useRelayEnvironment()
          , c = b("CometRelay").getActorID(a)
          , d = h.useState(-1)
          , e = d[0]
          , f = d[1];
        h.useEffect(function() {
            var d = b("CometRelay").fetchQuery(a, j, {}).toPromise().then(function(a) {
                a = a == null ? void 0 : a.viewer;
                a != null && f(l(a.call_blocked_until))
            });
            b("promiseDone")(d);
            var e = b("RTWebCallBlockedSettingSubscription").subscribe(a, {
                viewer_id: c
            }, function(b) {
                b = b == null ? void 0 : b.rtweb_call_blocked_setting_subscribe;
                b != null && (f(l(b.call_blocked_until)),
                a.commitUpdate(k("call_blocked_until", b.call_blocked_until)))
            });
            return function() {
                e.dispose()
            }
        }, [a, c]);
        return e
    }
    function n() {
        var a = m()
          , c = b("ServerTime").getMillis()
          , d = a < 0
          , e = a > c;
        c = h.useState(d || e);
        var f = c[0]
          , g = c[1];
        (d || e) !== f && g(d || e);
        h.useEffect(function() {
            if (e) {
                var c = window.setInterval(function() {
                    a <= b("ServerTime").getMillis() && (g(!1),
                    window.clearInterval(c))
                }, i);
                return function() {
                    window.clearInterval(c)
                }
            }
        }, [a, e]);
        return f
    }
    function a() {
        var a = h.useContext(b("RTWebPreCallContext"))
          , c = n();
        h.useEffect(function() {
            a != null && a.callInviteModel.startListening({
                callsBlocked: c
            })
        }, [a, c])
    }
}
), null);
__d("showDesktopNotification", ["MessengerDesktopNotificationPermissions", "MessengerDesktopNotifications", "ZenonUserActionLogger"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = 8e3;
    function a() {
        return function(a) {
            var c = a.acceptCall
              , d = a.body
              , e = a.icon;
            a = a.title;
            var f = {
                body: d,
                closeTime: g,
                icon: e,
                onClick: function() {
                    b("ZenonUserActionLogger").logClick({
                        component: "browser_notification",
                        surface: "desktop_notification"
                    }),
                    window.focus(),
                    c({
                        trigger: "desktop_notification"
                    })
                },
                onShow: function() {
                    b("ZenonUserActionLogger").logImpression({
                        component: "browser_notification",
                        surface: "desktop_notification"
                    })
                },
                title: a
            };
            if (b("MessengerDesktopNotifications").checkPermission() === b("MessengerDesktopNotificationPermissions").DEFAULT) {
                b("MessengerDesktopNotifications").requestPermission(function() {
                    b("MessengerDesktopNotifications").showNotification(f)
                });
                return
            }
            b("MessengerDesktopNotifications").showNotification(f)
        }
    }
}
), null);
__d("RTWebCallInviteDesktopNotification.react", ["fbt", "React", "RTWebPreCallHooks", "ZenonUsersHooks", "showDesktopNotification", "usePrevious"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a(a) {
        a = a.invite;
        return (a == null ? void 0 : a.type) === "ringing" ? h.jsx(i, {
            invite: a
        }) : null
    }
    function i(a) {
        a = a.invite;
        var c = b("showDesktopNotification")()
          , d = b("usePrevious")(a.ringID)
          , e = b("RTWebPreCallHooks").useAcceptCallCallback()
          , f = b("ZenonUsersHooks").useZenonUser(a.inviterID)
          , g = a.requestingVideo
          , h = a.participants.length > 1;
        if (d !== a.ringID && f != null) {
            c({
                acceptCall: e,
                body: k(f.shortName),
                icon: (d = f.profilePictureUrl) != null ? d : null,
                title: j(g, h)
            })
        }
        return null
    }
    function j(a, b) {
        if (!b)
            return a ? g._("\u0110ang m\u1eddi chat video") : g._("Cu\u1ed9c g\u1ecdi \u0111\u1ebfn");
        else
            return a ? g._("\u0110ang m\u1eddi tham gia nh\u00f3m chat video") : g._("Cu\u1ed9c g\u1ecdi nh\u00f3m \u0111\u1ebfn")
    }
    function k(a) {
        return g._("{caller name} \u0111ang g\u1ecdi b\u1ea1n. H\u00e3y nh\u1ea5p \u0111\u1ec3 tr\u1ea3 l\u1eddi.", [g._param("caller name", a)])
    }
}
), null);
__d("StartVideoChatLinkCall", ["FBLogger", "RelayFBDefaultEnvironment", "RTWebPreCallContextSingleton", "URI", "XGroupCallController", "randomZenonCallID", "randomZenonNonce", "gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    f.startCall = a;
    f._tryGetVCLHash = c;
    f._createGroupCallURL = d;
    var g, h = b("RTWebPreCallContextSingleton").create({
        relayEnvironment: b("RelayFBDefaultEnvironment")
    });
    function a(a, c, d, e) {
        c === void 0 && (c = !1);
        d === void 0 && (d = !1);
        e === void 0 && (e = "");
        if (h) {
            var f = h.callWindowController
              , g = h.incomingRingSDK
              , i = ""
              , j = a
              , k = b("randomZenonCallID")();
            if (c) {
                c = this._tryGetVCLHash(a);
                i = b("randomZenonNonce")();
                j = this._createGroupCallURL(c, e, i, d)
            }
            a = f.initCall({
                context: {
                    callID: k,
                    intent: "start or join",
                    invitees: [],
                    existingCall: null
                },
                mediaType: "video",
                nonce: i,
                joinContext: {
                    linkUrl: j,
                    type: "link"
                }
            });
            c = a[0];
            a[1];
            g.startCallIntent(i, {
                callID: k,
                callTrigger: "meetup_join",
                isPopupBlocked: c === null,
                isVideo: !0,
                peerID: "MW_PEER_ID",
                protocol: "mw"
            });
            return c
        } else
            return null
    }
    function c(a) {
        var c = new (g || (g = b("URI")))(a)
          , d = c.getDomain();
        c = c.stripTrailingSlash().getPath();
        if (d === "msngr.com")
            return c.substring(1);
        if (d === "m.me" && /^\/v(id)?\//.test(c))
            return c.replace(/^\/v(id)?\//, "");
        b("FBLogger")("rtc_www").mustfix('Could not extract LinkHash from Video Chat Link. Link = "%s"', a);
        return null
    }
    function d(a, c, d, e) {
        a = b("XGroupCallController").getURIBuilder().setString("call_context", "LINK:" + a).setString("funnel_session_id", c).setString("nonce", d).setBool("auto_join", e ? !0 : null).getURI().getQualifiedURI();
        b("gkx")("1710383") || a.setDomain(a.getDomain().replace(/\w+\.com/, "messenger.com"));
        return a.toString()
    }
}
), null);
__d("ZenonDialogContext", ["React", "emptyFunction"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    d = a.createContext({
        hide: c = b("emptyFunction"),
        hideAll: c,
        hideByID: c,
        show: c,
        showByID: c,
        toggle: c
    });
    f = d;
    e.exports = f
}
), null);
__d("useRTWebIncomingCallDialog", ["ix", "fbt", "React", "RTWebPreCallContext", "ZenonDialogContext", "ZenonUserActionLogger", "deferredLoadComponent", "emptyFunction", "fbicon", "requireCond", "requireDeferred", "cr:1568669"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i = b("React")
      , j = b("deferredLoadComponent")(b("requireDeferred")("RTWebCometIncomingCallContent.react"))
      , k = b("deferredLoadComponent")(b("requireDeferred")("RTWebCometCallDialog.react"))
      , l = b("cr:1568669") ? b("cr:1568669").addPoint : b("emptyFunction");
    function a() {
        var a = i.useContext(b("ZenonDialogContext"))
          , c = a.hide
          , d = a.show;
        a = i.useContext(b("RTWebPreCallContext"));
        var e = a ? a.callInviteModel : null;
        return i.useCallback(function(a) {
            var f, n = a.inviterID, o = a.isVideoCall, p = a.onAccept, q = a.onDecline;
            a = a.participantIDs;
            b("ZenonUserActionLogger").logImpression({
                surface: "incoming_call_dialog"
            });
            l(64225282, "render_dialog", {
                instanceKey: +(e == null ? void 0 : (f = e.getCurrentInvite()) == null ? void 0 : f.ringID)
            });
            d(i.jsx(k, {
                acceptIcon: o ? b("fbicon")._(g("493173"), 16) : b("fbicon")._(g("558160"), 16),
                acceptLabel: h._("Ch\u1ea5p nh\u1eadn"),
                acceptTestid: "answerCallButton",
                body: i.jsx(j, {
                    inviterID: n,
                    isVideoCall: o,
                    participantIDs: a
                }),
                declineLabel: h._("T\u1eeb ch\u1ed1i"),
                onClose: function(a) {
                    b("ZenonUserActionLogger").logClick({
                        component: a ? "accept_button" : "decline_button",
                        surface: "incoming_call_dialog"
                    });
                    c();
                    return a ? p() : q()
                },
                title: m(o, a.length > 1)
            }));
            return {
                dismiss: c
            }
        }, [e, c, d])
    }
    function m(a, b) {
        if (!b)
            return a ? h._("L\u1ea7n chat video \u0111\u1ebfn") : h._("Cu\u1ed9c g\u1ecdi \u0111\u1ebfn");
        else
            return a ? h._("Nh\u00f3m chat video \u0111\u1ebfn") : h._("Cu\u1ed9c g\u1ecdi nh\u00f3m \u0111\u1ebfn")
    }
}
), null);
__d("useRTWebIncomingUnsupportedBrowserDialog", ["fbt", "CometCardedDialogLoadingState.react", "CometPlaceholder.react", "JSResource", "MessengerDesktopUpsellLinks", "React", "TetraContextRowExternalLink.react", "ZenonDialogContext", "ZenonUserActionLogger", "lazyLoadComponent", "requireCond", "cr:1453546"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React")
      , i = b("lazyLoadComponent")(b("JSResource")("RTWebCometUnsupportedBrowserContent.react").__setRef("useRTWebIncomingUnsupportedBrowserDialog"))
      , j = b("lazyLoadComponent")(b("JSResource")("RTWebCometCallDialog.react").__setRef("useRTWebIncomingUnsupportedBrowserDialog"));
    function k(a) {
        var c = a.hide
          , d = a.inviterID
          , e = a.isVideoCall
          , f = a.onClose
          , k = a.participantIDs;
        a = a.threadType;
        var n = b("MessengerDesktopUpsellLinks").getDesktopUpsellLinkIfEnabledForCalls();
        return n != null && b("cr:1453546") != null ? h.jsx(b("cr:1453546"), {
            desktopAppstoreLink: n,
            hideDialog: function() {
                c(),
                f()
            },
            incomingUserID: d,
            isGroupCall: a === 2,
            onUnmount: function(a) {
                a || (c(),
                f())
            }
        }) : h.jsx(b("CometPlaceholder.react"), {
            fallback: h.jsx(b("CometCardedDialogLoadingState.react"), {}),
            children: h.jsx(j, {
                acceptLabel: g._("C\u00e0i \u0111\u1eb7t Chrome"),
                body: h.jsx(i, {
                    inviterID: d,
                    mainMessage: g._("T\u1ea3i Chrome \u0111\u1ec3 tham gia"),
                    participantIDs: k,
                    subMessage: g._("Tr\u00ecnh duy\u1ec7t c\u1ee7a b\u1ea1n kh\u00f4ng h\u1ed7 tr\u1ee3 t\u00ednh n\u0103ng n\u00e0y. H\u00e3y c\u00e0i \u0111\u1eb7t {link to install chrome} \u0111\u1ec3 s\u1eed d\u1ee5ng tr\u1ecdn v\u1eb9n t\u00ednh n\u0103ng g\u1ecdi tho\u1ea1i v\u00e0 chat video c\u1ee7a Messenger.", [g._param("link to install chrome", l(f))])
                }),
                declineLabel: g._("L\u00fac kh\u00e1c"),
                onClose: function(a) {
                    a && window.open("https://www.google.com/chrome/index.html", "_blank"),
                    c(),
                    f()
                },
                title: g._("\u0110ang m\u1eddi {Unsupported feature name}", [g._param("Unsupported feature name", m(a, e))])
            })
        })
    }
    function a() {
        var a = h.useContext(b("ZenonDialogContext"))
          , c = a.hide
          , d = a.show;
        return h.useCallback(function(a) {
            b("ZenonUserActionLogger").logImpression({
                surface: "unsupported_browser_dialog"
            });
            a = babelHelpers["extends"]({}, a, {
                hide: c
            });
            d(h.jsx(k, babelHelpers["extends"]({}, a)));
            return {
                dismiss: c
            }
        }, [c, d])
    }
    function l(a) {
        return h.jsx(b("TetraContextRowExternalLink.react"), {
            linkProps: {
                target: "_blank",
                url: "https://www.google.com/chrome/index.html"
            },
            onPress: a,
            children: g._("Chrome")
        })
    }
    function m(a, b) {
        if (a === 2)
            return b ? "Group Video Chat" : "Group Audio Call";
        else
            return b ? "Video Chat" : "Audio Call"
    }
}
), null);
__d("useRTWebMissedCallDialog", ["ix", "fbt", "CometCardedDialogLoadingState.react", "CometPlaceholder.react", "JSResource", "React", "ZenonDialogContext", "ZenonUserActionLogger", "lazyLoadComponent", "fbicon"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i = b("React")
      , j = b("lazyLoadComponent")(b("JSResource")("RTWebCometMissedCallContent.react").__setRef("useRTWebMissedCallDialog"))
      , k = b("lazyLoadComponent")(b("JSResource")("RTWebCometCallDialog.react").__setRef("useRTWebMissedCallDialog"));
    function a() {
        var a = i.useContext(b("ZenonDialogContext"))
          , c = a.hide
          , d = a.show;
        return i.useCallback(function(a) {
            var e = a.inviterID
              , f = a.isVideoCall
              , m = a.onCallback
              , n = a.participantIDs;
            a = a.timeMissed;
            b("ZenonUserActionLogger").logImpression({
                surface: "missed_call_dialog"
            });
            d(i.jsx(b("CometPlaceholder.react"), {
                fallback: i.jsx(b("CometCardedDialogLoadingState.react"), {}),
                children: i.jsx(k, {
                    acceptIcon: f ? b("fbicon")._(g("493173"), 16) : b("fbicon")._(g("558160"), 16),
                    acceptLabel: h._("G\u1ecdi l\u1ea1i"),
                    body: i.jsx(j, {
                        inviterID: e,
                        isVideoCall: f,
                        participantIDs: n,
                        timeMissed: a
                    }),
                    declineLabel: h._("\u0110\u00f3ng"),
                    onClose: function(a) {
                        b("ZenonUserActionLogger").logClick({
                            component: a ? "call_back" : "close_dialog",
                            surface: "missed_call_dialog"
                        });
                        a && b("ZenonUserActionLogger").logClick({
                            component: "start_call_button",
                            surface: "missed_call_dialog"
                        });
                        c();
                        return a ? m() : void 0
                    },
                    title: l(f, n.length > 1)
                })
            }));
            return {
                dismiss: c
            }
        }, [c, d])
    }
    function l(a, b) {
        if (!b)
            return a ? h._("\u0110o\u1ea1n chat video \u0111\u00e3 b\u1ecf l\u1ee1") : h._("Cu\u1ed9c g\u1ecdi nh\u1ee1");
        else
            return a ? h._("Cu\u1ed9c g\u1ecdi video nh\u00f3m b\u1ecb nh\u1ee1") : h._("Cu\u1ed9c g\u1ecdi nh\u1ee1 trong nh\u00f3m")
    }
}
), null);
__d("RTWebCometRoomIncomingCallDialog.entrypoint", ["JSResourceForInteraction", "RTWebCometRoomIncomingCallDialog_DisclaimerQuery$Parameters"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        getPreloadProps: function() {
            return {
                queries: {
                    queryReference: {
                        parameters: b("RTWebCometRoomIncomingCallDialog_DisclaimerQuery$Parameters"),
                        variables: {
                            nuxID: 8259
                        }
                    }
                }
            }
        },
        root: b("JSResourceForInteraction")("RTWebCometRoomIncomingCallDialogContainer.react").__setRef("RTWebCometRoomIncomingCallDialog.entrypoint")
    };
    e.exports = a
}
), null);
__d("useRoomIncomingCallDialog", ["CometPlaceholder.react", "CometRelay", "React", "RTWebCometRoomIncomingCallDialog.entrypoint", "VideoChatLinksUserActionsMultiplexLogger", "ZenonDialogContext", "useCometRelayEntrypointContextualEnvironmentProvider"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a() {
        var a = g.useContext(b("ZenonDialogContext"))
          , c = a.hide
          , d = a.show
          , e = b("useCometRelayEntrypointContextualEnvironmentProvider")();
        return g.useCallback(function(a) {
            var f = a.inviterID
              , h = a.linkUrl
              , i = a.onAccept
              , j = a.onDecline
              , k = a.roomName;
            a = a.sender;
            new (b("VideoChatLinksUserActionsMultiplexLogger"))().setSurface("vcl_meetups_notification").setEvent("room_ringback_received").setVideoCallLinkURLRaw(h).log();
            var l = b("CometRelay").loadEntryPoint(e, b("RTWebCometRoomIncomingCallDialog.entrypoint"), {});
            d(g.jsx(b("CometPlaceholder.react"), {
                fallback: null,
                children: g.jsx(b("CometRelay").EntryPointContainer, {
                    entryPointReference: l,
                    props: {
                        inviterID: f,
                        linkUrl: h,
                        onAccept: i,
                        onDecline: j,
                        roomName: k,
                        sender: a
                    }
                })
            }));
            return {
                dismiss: c
            }
        }, [e, c, d])
    }
}
), null);
__d("useZenonDialogController", ["React", "usePrevious"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a, c) {
        var d = g.useState(null)
          , e = d[0]
          , f = d[1]
          , h = b("usePrevious")(a);
        g.useEffect(function() {
            if ((a == null ? void 0 : a.ringID) === (h == null ? void 0 : h.ringID) && (a == null ? void 0 : a.type) === (h == null ? void 0 : h.type))
                return;
            e && (e.dismiss(),
            f(null));
            if (a === null)
                return;
            f(c())
        }, [e, a, h, c]);
        return e
    }
}
), null);
__d("RTWebCometCallInviteDialogs.react", ["Actor", "React", "RTWebPreCallContext", "RTWebPreCallHooks", "ServerTime", "StartVideoChatLinkCall", "ZenonCallsModelTypes", "useRoomIncomingCallDialog", "useRTWebIncomingCallDialog", "useRTWebIncomingUnsupportedBrowserDialog", "useRTWebMissedCallDialog", "useZenonDialogController"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.invite;
        a = b("Actor").useActor();
        var d = a[0];
        a = g.useContext(b("RTWebPreCallContext"));
        var e = b("useRTWebIncomingCallDialog")()
          , f = b("useRoomIncomingCallDialog")()
          , h = b("useRTWebMissedCallDialog")()
          , i = b("useRTWebIncomingUnsupportedBrowserDialog")()
          , j = b("RTWebPreCallHooks").useAcceptCallCallback()
          , k = b("RTWebPreCallHooks").useStartCallCallback()
          , l = a ? a.callInviteModel : null;
        b("useZenonDialogController")(c, function() {
            if (c === null || l == null)
                return null;
            if (c.context.type === "room") {
                var a = c.context.room;
                return f({
                    inviterID: c.inviterID,
                    linkUrl: a.linkHash,
                    onAccept: function() {
                        b("StartVideoChatLinkCall").startCall(a.linkHash, !0, !0)
                    },
                    onDecline: function() {
                        l.decline(b("ZenonCallsModelTypes").ZenonEndCallReason.IgnoreCall)
                    },
                    roomName: a.roomName,
                    sender: c.context.room.sender
                })
            }
            switch (c.type) {
            case "ringing":
                return e({
                    inviterID: c.inviterID,
                    isVideoCall: c.requestingVideo,
                    onAccept: function() {
                        j({
                            trigger: "comet_incoming_dialog_accept_button"
                        })
                    },
                    onDecline: function() {
                        l.decline(b("ZenonCallsModelTypes").ZenonEndCallReason.IgnoreCall)
                    },
                    participantIDs: c.participants
                });
            case "missed":
                if (c.context.type === "thread") {
                    var g = c.context.thread;
                    return h({
                        inviterID: c.inviterID,
                        isVideoCall: c.requestingVideo,
                        onCallback: function() {
                            k({
                                existingCall: null,
                                invitees: [c.inviterID].concat(c.participants.filter(function(a) {
                                    return a !== d
                                })),
                                mediaType: c.requestingVideo ? "video" : "audio",
                                thread: g,
                                trigger: "comet_missed_call_dialog"
                            }),
                            l.dismiss()
                        },
                        participantIDs: c.participants,
                        timeMissed: new Date(b("ServerTime").getMillis())
                    })
                }
                return null;
            case "unsupported_browser":
                return i({
                    inviterID: c.inviterID,
                    isVideoCall: c.requestingVideo,
                    onClose: function() {
                        l.dismiss()
                    },
                    participantIDs: c.participants,
                    threadType: c.context.type === "thread" ? c.context.thread.type : 2
                });
            default:
                return null
            }
        });
        return null
    }
}
), null);
__d("SoundPlayer", ["BanzaiODS", "URI", "createArrayFromMixed"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = new Map();
    function i(a) {
        var c = new (g || (g = b("URI")))(a);
        return c.getDomain() ? a : new (g || (g = b("URI")))(window.location.href).setPath(c.getPath()).toString()
    }
    function j(a) {
        a = new (g || (g = b("URI")))(a).getPath();
        if (/\.mp3$/.test(a))
            return "audio/mpeg";
        return /\.og[ga]$/.test(a) ? "audio/ogg" : ""
    }
    var k = function(a, c) {
        for (var a = b("createArrayFromMixed")(a), d = Array.isArray(a), e = 0, a = d ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
            var f;
            if (d) {
                if (e >= a.length)
                    break;
                f = a[e++]
            } else {
                e = a.next();
                if (e.done)
                    break;
                f = e.value
            }
            f = f;
            if (h.has(f))
                return;
            var g = document.createElement("audio");
            if (!g || !g.canPlayType || !g.canPlayType(j(f)))
                continue;
            g.preload = "auto";
            g.src = i(f);
            document.body && document.body.appendChild(g);
            h.set(f, g);
            (c == null ? void 0 : c.onPreload) != null && c.onPreload(g);
            return
        }
    };
    f.preload = k;
    a = function(a, c) {
        c === void 0 && (c = {});
        for (var a = b("createArrayFromMixed")(a), d = Array.isArray(a), e = 0, a = d ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
            var f;
            if (d) {
                if (e >= a.length)
                    break;
                f = a[e++]
            } else {
                e = a.next();
                if (e.done)
                    break;
                f = e.value
            }
            f = f;
            h.has(f) || k(f, c.callbacks);
            f = h.get(f);
            if (!f)
                continue;
            c.loop && f.setAttribute("loop", "");
            c.volume && (f.volume = c.volume);
            f = f.play();
            f != null && typeof f.then === "function" ? f.then(function(a) {
                b("BanzaiODS").bumpEntityKey(2966, "sound_player", "play.success")
            })["catch"](function(a) {
                b("BanzaiODS").bumpEntityKey(2966, "sound_player", "play.error")
            }) : b("BanzaiODS").bumpEntityKey(2966, "sound_player", "non_promise");
            return
        }
    }
    ;
    f.play = a;
    c = function(a) {
        for (var a = b("createArrayFromMixed")(a), c = Array.isArray(a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
            var e;
            if (c) {
                if (d >= a.length)
                    break;
                e = a[d++]
            } else {
                d = a.next();
                if (d.done)
                    break;
                e = d.value
            }
            e = e;
            e = h.get(e);
            if (e) {
                e.pause();
                return
            }
        }
    }
    ;
    f.pause = c;
    d = function(a) {
        for (var a = b("createArrayFromMixed")(a), c = Array.isArray(a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
            var e;
            if (c) {
                if (d >= a.length)
                    break;
                e = a[d++]
            } else {
                d = a.next();
                if (d.done)
                    break;
                e = d.value
            }
            e = e;
            var f = h.get(e);
            f && (f.pause(),
            f.removeAttribute("src"),
            f.src = i(e))
        }
    }
    ;
    f.stop = d
}
), null);
__d("SoundSynchronizer", ["SoundPlayer", "WebStorage", "createArrayFromMixed"], (function(a, b, c, d, e, f) {
    var g, h = "fb_sounds_playing3";
    function i() {
        var a = (g || (g = b("WebStorage"))).getLocalStorage();
        if (a)
            try {
                a = a[h];
                if (a) {
                    a = JSON.parse(a);
                    if (Array.isArray(a))
                        return a
                }
            } catch (a) {}
        return []
    }
    function j(a) {
        var c = (g || (g = b("WebStorage"))).getLocalStorage();
        if (c) {
            var d = i();
            d.push(a);
            while (d.length > 5)
                d.shift();
            try {
                c[h] = JSON.stringify(d)
            } catch (a) {}
        }
    }
    function k(a) {
        return i().some(function(b) {
            return b === a
        })
    }
    a = {
        play: function(a, c, d, e) {
            a = b("createArrayFromMixed")(a);
            c = c || a[0] + Math.floor(Date.now() / 1e3);
            if (k(c))
                return;
            b("SoundPlayer").play(a, {
                loop: !!d,
                callbacks: e
            });
            j(c)
        },
        isSupported: function() {
            return !!(g || (g = b("WebStorage"))).getLocalStorage()
        }
    };
    e.exports = a
}
), null);
__d("SoundRPC", ["FBJSON", "SecurePostMessage", "SoundSynchronizer", "requireCond", "cr:950105"], (function(a, b, c, d, e, f) {
    f.playLocal = g;
    f.playRemote = a;
    f.supportsRPC = c;
    f._listen = d;
    function g(a, c, d, e) {
        b("SoundSynchronizer").play(a, c, d, e)
    }
    function a(a, c, d, e) {
        c = {
            name: "SoundRPC",
            data: {
                paths: c,
                sync: d,
                loop: e
            }
        };
        b("SecurePostMessage").sendMessageAllowAnyOrigin_UNSAFE(a, b("FBJSON").stringify(c))
    }
    function c() {
        return !!window.postMessage
    }
    function d() {
        var a = function(a) {
            if (!/\.facebook.com$/.test(a.origin))
                return;
            var c = {};
            try {
                a = a.data;
                typeof a === "string" && (c = b("FBJSON").parse(a))
            } catch (a) {}
            a = c;
            c = a.name;
            a = a.data;
            c === "SoundRPC" && a != null && typeof a === "object" && g(a.paths, a.sync, a.loop)
        };
        b("cr:950105") != null ? b("cr:950105").listen(window, "message", a) : window.addEventListener("message", a)
    }
}
), null);
__d("Sound", ["SoundInitialData", "SoundPlayer", "SoundRPC", "SoundSynchronizer", "URI", "UserAgent_DEPRECATED", "Visibility", "isFacebookURI"], (function(a, b, c, d, e, f) {
    f.init = a;
    f.play = c;
    f.hasPlayedSoundBefore = d;
    f.playOnlyIfImmediate = e;
    f.stop = j;
    var g, h = null, i = !1;
    function a(a) {}
    function c(a, c, d, e) {
        h ? b("SoundRPC").playRemote(h.contentWindow, a, c, !1) : b("SoundRPC").playLocal(a, c, d, e),
        i = !0
    }
    function d() {
        return i
    }
    function e(a, c, d) {
        if (!i && b("Visibility").isHidden())
            return;
        this.play(a, c, d)
    }
    function j(a) {
        h || b("SoundPlayer").stop(a)
    }
    a = new (g || b("URI"))(location.href);
    a.getSubdomain() && a.getSubdomain() !== "comet" && a.getSubdomain() !== "www" && a.setSubdomain("www");
    c = a.getDomain();
    function k() {
        if (b("UserAgent_DEPRECATED").ie() < 9)
            return !1;
        return b("SoundInitialData").RPC_DISABLED ? !1 : b("SoundSynchronizer").isSupported() && b("SoundRPC").supportsRPC()
    }
    b("isFacebookURI")(a) && location.host !== c && k() && (h = document.createElement("iframe"),
    h.setAttribute("src", "//" + c + "/sound_iframe.php"),
    h.style.display = "none",
    document.body && document.body.appendChild(h))
}
), null);
__d("useRingTone", ["React", "RTCConfig", "Sound"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React")
      , h = [b("RTCConfig").ringtone_mp3_url, b("RTCConfig").ringtone_ogg_url];
    function a(a) {
        a === void 0 && (a = !1),
        g.useEffect(function() {
            if (a) {
                b("Sound").play(h, null, !0);
                return function() {
                    b("Sound").stop(h)
                }
            }
        }, [a])
    }
}
), null);
__d("ZenonCallInviteRingtone.react", ["useRingTone"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        a = a.invite;
        b("useRingTone")((a == null ? void 0 : a.type) === "ringing");
        return null
    }
}
), null);
__d("useDocumentTitleBlink", ["DocumentTitle", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        g.useEffect(function() {
            if (a == null)
                return;
            var c = b("DocumentTitle").blink(a);
            return function() {
                c.stop()
            }
        }, [a])
    }
}
), null);
__d("ZenonCallInviteTitleBlinking.react", ["fbt", "React", "ZenonUsersHooks", "useDocumentTitleBlink"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a(a) {
        a = a.invite;
        return a !== null && a.type === "ringing" && a.inviterID != null ? h.jsx(i, {
            inviterID: a.inviterID
        }) : null
    }
    function i(a) {
        a = a.inviterID;
        a = b("ZenonUsersHooks").useZenonUser(a);
        b("useDocumentTitleBlink")(a ? g._("{name} \u0111ang g\u1ecdi", [g._param("name", a.shortName)]) : null);
        return null
    }
}
), null);
__d("useZenonDialogSetters", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a, b) {
        return g.useMemo(function() {
            return {
                hide: function() {
                    a(null)
                },
                hideAll: function() {
                    a(null),
                    b([])
                },
                hideByID: function(a) {
                    b(function(b) {
                        return b.filter(function(b) {
                            return b.key !== a
                        })
                    })
                },
                show: a,
                showByID: function(a, c) {
                    b(function(b) {
                        var d = b.findIndex(function(b) {
                            return b.key === a
                        })
                          , e = {
                            key: a,
                            node: c
                        };
                        if (d === -1)
                            return [].concat(b, [e]);
                        else
                            return [].concat(b.slice(0, d), b.slice(d + 1), [e])
                    })
                },
                toggle: function(b) {
                    b === void 0 && (b = !1),
                    b || a(null)
                }
            }
        }, [a, b])
    }
}
), null);
__d("ZenonDialogProvider.react", ["React", "ZenonDialogContext", "useZenonDialogSetters"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        a = a.children;
        var c = g.useState(null)
          , d = c[0];
        c = c[1];
        var e = g.useState([])
          , f = e[0];
        e = e[1];
        c = b("useZenonDialogSetters")(c, e);
        return g.jsxs(b("ZenonDialogContext").Provider, {
            value: c,
            children: [a, d, f.map(function(a) {
                a = a.node;
                return a
            })]
        })
    }
}
), null);
__d("RTWebCometCallInviteController.react", ["React", "RTWebCallBlockSettingHooks", "RTWebCallInviteDesktopNotification.react", "RTWebCometCallInviteDialogs.react", "RTWebPreCallHooks", "ZenonCallInviteRingtone.react", "ZenonCallInviteTitleBlinking.react", "ZenonDialogProvider.react", "requireDeferred"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    c = b("requireDeferred")("FBRTCCallSummaryUploader");
    c.onReady(function(a) {
        a.init()
    });
    function a() {
        b("RTWebCallBlockSettingHooks").useCallBlockSetting();
        b("RTWebPreCallHooks").useNoAnswerTimeout();
        var a = b("RTWebPreCallHooks").useCallInvite();
        return g.jsxs(b("ZenonDialogProvider.react"), {
            children: [g.jsx(b("RTWebCometCallInviteDialogs.react"), {
                invite: a
            }), g.jsx(b("RTWebCallInviteDesktopNotification.react"), {
                invite: a
            }), g.jsx(b("ZenonCallInviteRingtone.react"), {
                invite: a
            }), g.jsx(b("ZenonCallInviteTitleBlinking.react"), {
                invite: a
            })]
        })
    }
}
), null);
__d("RTWebCallWindowOpener", ["requireCond", "cr:1099565"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("cr:1099565")
}
), null);
__d("RTWebCometIncomingCallContent.react", ["fbt", "CometProgressIndicator.react", "React", "RTWebCometCallMessageLayout.react", "ZenonUsersHooks", "emptyFunction", "gkx", "requireCond", "cr:1568669", "cr:1568670"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React")
      , i = b("cr:1568669") ? b("cr:1568669").addPoint : b("emptyFunction")
      , j = b("cr:1568670") ? b("cr:1568670").useCallInvite : b("emptyFunction")
      , k = b("gkx")("1536863") ? c : b("emptyFunction");
    function a(a) {
        var c = a.inviterID
          , d = a.isVideoCall;
        a = a.participantIDs;
        c = b("ZenonUsersHooks").useZenonUser(c);
        var e = b("ZenonUsersHooks").useZenonUsers(a).valueSeq().toArray();
        k(e, a, 64225282);
        a = a.length > 1;
        var f = a ? d ? g._("{caller name} \u0111\u00e3 m\u1eddi b\u1ea1n tham gia m\u1ed9t nh\u00f3m chat video.", [g._param("caller name", c == null ? void 0 : c.name)]) : g._("{caller name} \u0111\u00e3 m\u1eddi b\u1ea1n tham gia m\u1ed9t cu\u1ed9c g\u1ecdi nh\u00f3m.", [g._param("caller name", c == null ? void 0 : c.name)]) : g._("{caller name} \u0111ang g\u1ecdi cho b\u1ea1n.", [g._param("caller name", c == null ? void 0 : c.name)]);
        a = a ? d ? g._("Video c\u1ee7a b\u1ea1n s\u1ebd \u0111\u01b0\u1ee3c chia s\u1ebb ngay khi b\u1ea1n tr\u1ea3 l\u1eddi") : g._("Cu\u1ed9c g\u1ecdi s\u1ebd b\u1eaft \u0111\u1ea7u ngay khi b\u1ea1n tr\u1ea3 l\u1eddi.") : g._("Cu\u1ed9c g\u1ecdi s\u1ebd b\u1eaft \u0111\u1ea7u ngay khi b\u1ea1n tr\u1ea3 l\u1eddi.");
        return c === null ? h.jsx(b("CometProgressIndicator.react"), {}) : h.jsx(b("RTWebCometCallMessageLayout.react"), {
            caller: c,
            mainMessage: f,
            participants: e,
            subMessage: a
        })
    }
    function c(a, b, c) {
        var d = l();
        h.useEffect(function() {
            a.length === 0 && i(c, "fetching_participants", {
                instanceKey: d
            }),
            a.length === b.length && i(c, "fetched_participants", {
                instanceKey: d
            })
        }, [d, b.length, a, c])
    }
    function l() {
        var a = j();
        return (a = +(a == null ? void 0 : a.ringID)) != null ? a : 0
    }
}
), null);
__d("ZenonCallInviteModelTypes", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        missed: "missed",
        ringing: "ringing",
        unsupported_browser: "unsupported_browser"
    };
    f.CallInviteModelType = a
}
), null);
__d("ZenonCallInviteModel", ["BaseEventEmitter", "FBLogger", "ZenonCallInviteModelTypes", "ZenonCallsModelTypes", "ZenonIncomingRingSDKTypes", "gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(c) {
            var d;
            d = a.call(this) || this;
            d.$ZenonCallInviteModel3 = function(a) {
                b("FBLogger")("rtc_www").info("Received cancel for: ", a.ringID);
                if (d.__currentRequest && d.__currentRequest.model && d.__currentRequest.model.ringID === a.ringID)
                    switch (a.reason) {
                    case b("ZenonIncomingRingSDKTypes").ZenonCancelReason.Hangup:
                        a = ((a = d.__currentRequest) == null ? void 0 : (a = a.model) == null ? void 0 : a.type) !== b("ZenonCallInviteModelTypes").CallInviteModelType.unsupported_browser;
                        d.__currentRequest.model = babelHelpers["extends"]({}, d.__currentRequest.model, {
                            type: "missed"
                        });
                        a && d.emit("callInvite", d.__currentRequest.model);
                        break;
                    case b("ZenonIncomingRingSDKTypes").ZenonCancelReason.OtherDismiss:
                        d.dismiss();
                        break
                    }
            }
            ;
            d.$ZenonCallInviteModel2 = function(a) {
                var c;
                b("FBLogger")("rtc_www").info("Receiving ring: ", a.ringID);
                if (((c = d.__currentRequest) == null ? void 0 : (c = c.model) == null ? void 0 : c.type) === "ringing") {
                    if (((c = d.__currentRequest) == null ? void 0 : (c = c.model) == null ? void 0 : c.ringID) !== a.ringID && b("gkx")("1434282")) {
                        a.onDecline(b("ZenonCallsModelTypes").ZenonEndCallReason.InAnotherCall);
                        b("FBLogger")("rtc_www").info("Sending InAnotherCall to ring: ", a.ringID, "Current ring: ", (c = d.__currentRequest) == null ? void 0 : (c = c.model) == null ? void 0 : c.ringID)
                    }
                } else
                    d.__currentRequest = {
                        model: {
                            context: a.context,
                            controllerParams: a.controllerParams,
                            inviterID: a.inviterID,
                            participants: a.otherParticipants,
                            requestingVideo: a.requestingVideo,
                            ringID: a.ringID,
                            type: a.isClientPermissableRing ? "ringing" : "unsupported_browser"
                        },
                        ringPayload: a
                    },
                    d.emit("callInvite", d.__currentRequest.model),
                    a.isClientPermissableRing || a.onDecline(b("ZenonCallsModelTypes").ZenonEndCallReason.VersionUnsupported)
            }
            ;
            d.__eventSource = c;
            d.__currentRequest = null;
            return d
        }
        var d = c.prototype;
        d.getCurrentInvite = function() {
            var a;
            return (a = (a = this.__currentRequest) == null ? void 0 : a.model) != null ? a : null
        }
        ;
        d.startListening = function(a) {
            a = a.callsBlocked;
            this.__currentRequest && this.dismiss();
            this.stopListening();
            a ? this.__eventSource.addListener("incomingRing", this.$ZenonCallInviteModel1) : (this.__eventSource.addListener("incomingRing", this.$ZenonCallInviteModel2),
            this.__eventSource.addListener("ringCancel", this.$ZenonCallInviteModel3))
        }
        ;
        d.stopListening = function() {
            this.__eventSource.removeAllListeners("incomingRing"),
            this.__eventSource.removeAllListeners("ringCancel"),
            this.__currentRequest = null
        }
        ;
        d.dismiss = function() {
            var a;
            b("FBLogger")("rtc_www").info("Dismissing ring: ", (a = this.__currentRequest) == null ? void 0 : (a = a.model) == null ? void 0 : a.ringID);
            this.__currentRequest = null;
            this.emit("callInvite", Object.freeze(null))
        }
        ;
        d.accept = function(a, c) {
            var d = this.__currentRequest;
            if (d) {
                var e;
                b("FBLogger")("rtc_www").info("Accepting ring: ", (e = d.model) == null ? void 0 : e.ringID);
                ((e = d.model) == null ? void 0 : e.type) === "ringing" && d.ringPayload.onAccept(a, c);
                this.dismiss()
            }
        }
        ;
        d.decline = function(a, c) {
            a === void 0 && (a = b("ZenonCallsModelTypes").ZenonEndCallReason.IgnoreCall);
            var d = this.__currentRequest;
            if (d) {
                var e;
                b("FBLogger")("rtc_www").info("Declining ring: ", (e = d.model) == null ? void 0 : e.ringID);
                d.ringPayload.onDecline(a, c);
                this.dismiss();
                return
            }
        }
        ;
        d.$ZenonCallInviteModel1 = function(a) {
            b("FBLogger")("rtc_www").info("Blocking ring: ", a.ringID),
            a.onDecline(b("ZenonCallsModelTypes").ZenonEndCallReason.IgnoreCall, b("ZenonCallsModelTypes").ZenonEndCallSubreason.CallsBlocked)
        }
        ;
        return c
    }(b("BaseEventEmitter"));
    e.exports = a
}
), null);
__d("delegateZenonCallInviteModel", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, b) {
        a.getCurrentInvite = b.getCurrentInvite.bind(b),
        a.startListening = b.startListening.bind(b),
        a.stopListening = b.stopListening.bind(b),
        a.dismiss = b.dismiss.bind(b),
        a.accept = b.accept.bind(b),
        a.decline = b.decline.bind(b),
        b.addListener("callInvite", function(b) {
            a.emit("callInvite", b)
        })
    }
}
), null);
__d("ZenonCallWindowController", ["Promise", "FBLogger", "ZenonCallWindowErrors"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, b) {
            var c = b.callWindowInitializerResource
              , d = b.callWindowOpener;
            b = b.uriBuilderResource;
            this.$2 = null;
            this.$3 = !1;
            this.$5 = null;
            this.$1 = a;
            this.$7 = b;
            this.$4 = c;
            this.$6 = d
        }
        var c = a.prototype;
        c.initCall = function(a) {
            var c = this;
            if (this.$3)
                throw new (b("ZenonCallWindowErrors").OpeningAnotherCallError)();
            try {
                if (this.$2 && !this.$2.closed && a.joinContext.type === "thread" && this.$2.inCallWith === a.joinContext.thread.id) {
                    this.$2.focus();
                    return [this.$2, b("Promise").resolve({
                        alohaEscalatedMW: !1
                    })]
                }
            } catch (a) {
                b("FBLogger")("rtc_www").catching(a).warn("Failed to access inCallWith on call window")
            }
            var d = this.$6.openWindow(a);
            try {
                this.$2 && (this.$2.closed || this.$2.close(),
                this.$2 = null)
            } catch (a) {
                b("FBLogger")("rtc_www").catching(a).warn("Failed to access close on call window")
            }
            this.$2 = d;
            this.$3 = !0;
            return [d, b("Promise").all([this.$7.load(), this.$4.load()]).then(function(b) {
                var d = b[0];
                b = b[1];
                c.$5 === null && (c.$5 = new b(c.$1,new d(c.$1)));
                return c.$5.initCall(c.$2, a)
            })["finally"](function() {
                c.$3 = !1
            })]
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("ZenonCallWindowOpener_Popup", ["ZenonUserActionLogger", "qex"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = 1280
      , h = {
        LargeForGroup: {
            height: 772,
            width: 1100
        },
        LargeForP2P: {
            height: 720,
            width: 1280
        },
        Small: {
            height: 540,
            width: 960
        }
    }
      , i = ["menubar=no", "location=no", "scrollbars=no", "status=no", "personalbar=no"];
    a = function() {
        function a() {}
        var c = a.prototype;
        c.openWindow = function(a) {
            a = this.$1(a.joinContext);
            var c = this.$2(a)
              , d = c.left;
            c = c.top;
            b("ZenonUserActionLogger").logCheckpoint({
                checkpoint: "Opening_Popup: left=" + d + ",top=" + c + ",width=" + a.width + ",height=" + a.height
            });
            return window.open("", "", [].concat(i, ["height=" + a.height, "width=" + a.width, "left=" + d, "top=" + c]).join(","))
        }
        ;
        c.$1 = function(a) {
            if (screen && screen.width > g)
                if (a.type === "link" || a.thread.type === 2) {
                    a = b("qex")._("1704108");
                    return {
                        height: a != null && a > 0 ? a : h.LargeForGroup.height,
                        width: h.LargeForGroup.width
                    }
                } else {
                    a = b("qex")._("1704109");
                    var c = b("qex")._("1704110");
                    return {
                        height: a != null && a > 0 ? a : h.LargeForP2P.height,
                        width: c != null && c > 0 ? c : h.LargeForP2P.width
                    }
                }
            else {
                a = b("qex")._("1704111");
                c = b("qex")._("1704112");
                return {
                    height: a != null && a > 0 ? a : h.Small.height,
                    width: c != null && c > 0 ? c : h.Small.width
                }
            }
        }
        ;
        c.$2 = function(a) {
            var b = a.height;
            a = a.width;
            return {
                left: Math.floor(window.innerWidth / 2 - a / 2 + ((a = window.screenLeft) != null ? a : window.screenX)),
                top: Math.floor(window.innerHeight / 2 - b / 2 + ((a = window.screenTop) != null ? a : window.screenY))
            }
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("CometWatchAndScroll.react", ["CometObjectFitContainer.react", "CometRelay", "CometRouterPushViewStackContext", "CometSetWatchAndScrollVideoContext", "CometWatchAndScrollVideoContext", "Locale", "MWChatOpenTabCount.re", "React", "VideoAutoplayLocalScopeProvider.react", "VideoPlayerAutoplayRulesProvider", "VideoPlayerDefaultControls.react", "VideoPlayerHooks", "VideoPlayerRelay.react", "VideoPlayerSurface.react", "VideoPlayerWithLiveVideoIndicator.react", "isRouteTransparent", "requireCond", "stylex", "useVideoOriginalDimensionsRelay", "useVideoPlayerDefaultControlsVisibility", "cr:1767237", "cr:1767238", "CometWatchAndScrollVideoQuery.graphql", "CometWatchAndScrollContainer_video.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h, i = b("React"), j = b("VideoPlayerAutoplayRulesProvider").provideAutoplayRules("wns");
    function k() {
        var a = b("MWChatOpenTabCount.re").useHook();
        a = a[0];
        var c = 338
          , d = 80;
        a = a * c + d;
        return a
    }
    function a() {
        var a = i.useContext(b("CometRouterPushViewStackContext"))
          , c = i.useContext(b("CometWatchAndScrollVideoContext"))
          , d = i.useContext(b("CometSetWatchAndScrollVideoContext"))
          , e = (a || []).some(function(a) {
            a = a.route;
            return !b("isRouteTransparent")(a)
        });
        a = c == null ? void 0 : c.portableVideoID;
        var f = c == null ? void 0 : c.routeTracePolicy
          , g = c == null ? void 0 : c.subOrigin
          , h = c == null ? void 0 : c.videoID;
        i.useEffect(function() {
            e && h != null && d(null)
        }, [e, d, h]);
        if (h != null && g != null && f != null)
            return i.jsx(l, {
                portableVideoID: a,
                routeTracePolicy: f,
                subOrigin: g,
                videoID: h
            });
        else
            return null
    }
    function l(a) {
        var c = a.portableVideoID
          , d = a.routeTracePolicy
          , e = a.subOrigin;
        a = a.videoID;
        a = b("CometRelay").useLazyLoadQuery(g !== void 0 ? g : g = b("CometWatchAndScrollVideoQuery.graphql"), {
            videoID: a
        });
        a = a.video;
        return a == null ? null : i.jsx(b("VideoAutoplayLocalScopeProvider.react"), {
            autoplayLocalRules: j,
            children: i.jsx(m, {
                video: a,
                children: i.jsx(b("VideoPlayerRelay.react"), {
                    initialTracePolicy: d,
                    playerFormat: "watch_scroll",
                    portalingEnabled: !0,
                    portalingFromVideoID: c,
                    portalingPlaceMetaData: {
                        placeDescription: "watch_and_scroll"
                    },
                    subOrigin: e,
                    video: a,
                    children: i.jsx(o, {
                        video: a
                    })
                })
            })
        })
    }
    function m(a) {
        var c = a.children;
        a = a.video;
        a = b("CometRelay").useFragment(h !== void 0 ? h : h = b("CometWatchAndScrollContainer_video.graphql"), a);
        a = b("useVideoOriginalDimensionsRelay")(a);
        a = a.originalAspectRatio;
        var d = k();
        return i.jsx("div", {
            className: "a9ndjppc poy2od1o k3cnv2bo esma6hys j83agx80 h0eh6jkb k01i5q8h tqsryivl",
            style: b("Locale").isRTL() ? {
                left: d
            } : {
                right: d
            },
            children: i.jsx(b("CometObjectFitContainer.react"), {
                contentAspectRatio: a,
                maxHeight: 300,
                objectFitMode: "CONTAINER_WIDTH_BASED_ASPECT_RATIO",
                children: c
            })
        })
    }
    function n() {
        var a = i.useRef(!0)
          , c = b("VideoPlayerHooks").useController()
          , d = b("VideoPlayerHooks").usePaused()
          , e = b("VideoPlayerHooks").useMuted()
          , f = i.useContext(b("CometRouterPushViewStackContext"))
          , g = (f || []).some(function(a) {
            a = a.route;
            return a.preferDialog !== !0
        });
        i.useEffect(function() {
            a.current && (d && !g && c.play("user_initiated"),
            a.current = !1)
        }, [c, g, d, e])
    }
    function o(a) {
        a = a.video;
        n();
        var c = b("useVideoPlayerDefaultControlsVisibility")();
        c = c.isControlsVisible;
        return i.jsxs(b("VideoPlayerSurface.react"), {
            children: [b("cr:1767238") && i.jsx(b("cr:1767238"), {}), i.jsx("div", {
                className: (c ? "" : "kr9hpln1") + " k4urcfbm ocubwz8y datstx6m d6rk862h"
            }), i.jsx(b("VideoPlayerDefaultControls.react"), {
                shouldRenderNavigateToTahoeControl: !0,
                subOrigin: "watch_scroll",
                videoTahoeUrl: a.url
            }), b("cr:1767237") && i.jsx(b("cr:1767237"), {}), i.jsx(b("VideoPlayerWithLiveVideoIndicator.react"), {
                hasCometNavOverlay: !1,
                video: a
            })]
        })
    }
}
), null);
__d("FBRTCExperiment", ["FBRTCExperimentsConfig", "QE2Logger"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        a.gen = function(c) {
            var d = {
                params: {},
                auto_exposure: !1,
                in_experiment: !1
            };
            d = b("FBRTCExperimentsConfig")[c] || d;
            c = new a(c,d);
            return c
        }
        ;
        a.getIncomingCallExperiments = function() {
            return a.gen("rtweb_incoming_call_experiments")
        }
        ;
        a.getMediaQualityExperiments = function() {
            return a.gen("rtc_www_media_quality_h2_2018")
        }
        ;
        a.getUpsellMessengerDesktopUnsupportedBrowser = function() {
            return a.gen("upsell_messenger_desktop_unsupported_browser_universe")
        }
        ;
        function a(a, b) {
            this.$1 = a,
            this.$2 = b
        }
        var c = a.prototype;
        c.$3 = function() {
            this.$2.auto_exposure && this.logExposure()
        }
        ;
        c.logExposure = function() {
            this.$2.in_experiment && b("QE2Logger").logExposureForUser(this.$1)
        }
        ;
        c.getParam = function(a, b) {
            if (this.$2.in_experiment) {
                this.$3();
                a = this.$2.params[a];
                if (a !== void 0)
                    return String(a)
            }
            return b
        }
        ;
        c.getInt = function(a, b) {
            if (this.$2.in_experiment) {
                this.$3();
                if (this.$2.params[a] !== void 0)
                    return parseInt(this.$2.params[a], 10)
            }
            return b
        }
        ;
        c.getBool = function(a, b, c) {
            c === void 0 && (c = !0);
            var d = this.$2.params;
            if (this.$2.in_experiment) {
                c && this.$3();
                if (d[a] !== void 0)
                    return d[a] === "1" || d[a] === 1 || d[a] === "true" || d[a] === !0
            }
            return b
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("FBRTCIceStatsParser", [], (function(a, b, c, d, e, f) {
    var g = null;
    a = function() {
        function a() {}
        a.getInstance = function() {
            g || (g = new a());
            return g
        }
        ;
        var b = a.prototype;
        b.extractIceInfo = function(a) {
            var b = [];
            a = a.split("\r\n");
            for (var c = 0; c < a.length; c++) {
                var d = a[c];
                this.$1(d) && b.push({
                    gen: this.$2(d),
                    type: this.$3(d)
                })
            }
            return b
        }
        ;
        b.$1 = function(a) {
            return a.indexOf("candidate:") > -1
        }
        ;
        b.$2 = function(a) {
            var b = 0;
            a = a.match(/generation (\d+)/);
            a && (b = parseInt(a[1], 10));
            return b
        }
        ;
        b.$3 = function(a) {
            a = a.match(/typ (host|relay|srflx|prflx)/);
            if (a)
                return a[1];
            else
                return "unknown"
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("FBRTCLocalUploadLogLevel", ["CurrentUser", "FBRTCConstants"], (function(a, b, c, d, e, f) {
    "use strict";
    f.getUploadLogLevel = a;
    f.getLocalUploadLogLevel = g;
    function a(a) {
        return Math.max(g(), a)
    }
    function g() {
        return b("CurrentUser").isEmployee() || b("CurrentUser").isTestUser() ? b("FBRTCConstants").UploadLogLevel.LL_DEBUG : b("FBRTCConstants").UploadLogLevel.LL_NIL
    }
}
), null);
__d("FBRTCMediaMetricTracker", ["performanceNow"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = {
        count: 0,
        current: -1,
        first: -1,
        min: -1,
        max: -1,
        mean: -1,
        median: -1,
        startedTime: -1,
        total: -1,
        updatedTime: -1
    };
    a = function() {
        function a() {
            this.$2 = {},
            this.$3 = {},
            this.$4 = {},
            this.$1 = {},
            this.$5 = null
        }
        var c = a.prototype;
        c.updateVideoSender = function(a, b, c) {
            if (b === "video" && this.$5 !== null && this.$5 !== c && this.$4[a]) {
                b = a + ((b = this.$5) != null ? b : "");
                this.$4[b] = babelHelpers["extends"]({}, this.$4[a]);
                delete this.$4[a]
            }
            this.$5 = c
        }
        ;
        c.getVideoStreamReportKeys = function() {
            return Object.keys(this.$4)
        }
        ;
        c.getJitterStreamReportKey = function() {
            return Object.keys(this.$2)
        }
        ;
        c.getAudioStreamReportKeys = function() {
            return Object.keys(this.$3)
        }
        ;
        c.addJitterBufferDelay = function(a, b) {
            b !== null && b !== void 0 && (this.$2[a] || (this.$2[a] = []),
            this.$2[a].push(b))
        }
        ;
        c.setHistResScale = function(a, b, c) {
            this.$1[a] || (this.$1[a] = {
                contentType: b,
                histogram: []
            }),
            this.$1[a] = {
                contentType: b,
                histogram: c
            }
        }
        ;
        c.getHistResScale = function(a) {
            return this.$1[a] ? {
                contentType: this.$1[a].contentType,
                histogram: this.$1[a].histogram
            } : null
        }
        ;
        c.setVideoContentType = function(a, b) {
            this.$4[a] || (this.$4[a] = {}),
            this.$4[a].contentType = b
        }
        ;
        c.getVideoContentType = function(a) {
            return this.$4[a].contentType
        }
        ;
        c.setVideoMetric = function(a, b, c) {
            c !== null && c !== void 0 && (this.$4[a] || (this.$4[a] = {}),
            this.$4[a][b] = this.$6(this.$4[a][b], c))
        }
        ;
        c.$6 = function(a, c) {
            if (a !== null && a !== void 0) {
                a.current = c;
                a.updatedTime = (g || (g = b("performanceNow")))();
                a.total += c;
                a.count += 1;
                a.min = Math.min(a.min, c);
                a.max = Math.max(a.max, c);
                a.mean = a.total / a.count;
                return a
            } else
                return {
                    min: c,
                    max: c,
                    total: c,
                    count: 1,
                    mean: c,
                    first: c,
                    startedTime: (g || (g = b("performanceNow")))(),
                    current: c,
                    updatedTime: g()
                }
        }
        ;
        c.getVideoStreamDuration = function(a, b) {
            return this.$4[a] != null && this.$4[a][b] != null ? this.$4[a][b].count : 0
        }
        ;
        c.getAudioStreamDuration = function(a, b) {
            return this.$3[a] != null && this.$3[a][b] != null ? this.$3[a][b].count : 0
        }
        ;
        c.getVideoMetric = function(a, b) {
            return this.$4[a] ? this.$4[a][b] : null
        }
        ;
        c.addMetricStat = function(a, b, c) {
            c !== null && c !== void 0 && (this.$3[a] || (this.$3[a] = {}),
            this.$3[a][b] = this.$6(this.$3[a][b], c))
        }
        ;
        c.getMetricStats = function(a, b) {
            return !this.$3[a] ? null : this.$3[a][b]
        }
        ;
        c.getJitterBufferStats = function(a) {
            if (!this.$2[a])
                return h;
            var b = this.$2[a].length;
            if (b === 0)
                return h;
            this.$2[a].sort(function(a, b) {
                return a - b
            });
            var c = this.$2[a].reduce(function(a, b) {
                return a + b
            });
            if (b % 2 === 0) {
                var d = Math.floor((b - 1) / 2)
                  , e = Math.ceil((b - 1) / 2);
                d = (this.$2[a][d] + this.$2[a][e]) / 2
            } else
                d = this.$2[a][(b - 1) / 2];
            return {
                max: this.$2[a][b - 1],
                min: this.$2[a][0],
                mean: c / b,
                median: d,
                total: c,
                count: b,
                first: -1,
                startedTime: -1,
                current: -1,
                updatedTime: -1
            }
        }
        ;
        c.toJsonString = function() {
            return JSON.stringify({
                stats: this.$3,
                jitterBufferDelays: this.$2,
                videoMetric: this.$4,
                histResScale: this.$1
            })
        }
        ;
        a.getPercentMediaKey = function(a, b, c) {
            return a.concat("_", b, "_p", String(c))
        }
        ;
        a.getAvgMediaKey = function(a, b) {
            return a.concat("_", b, "_avg")
        }
        ;
        a.fromJsonString = function(b) {
            var c = new a();
            try {
                b = JSON.parse(b),
                b = b
            } catch (a) {
                return c
            }
            b.stats && (c.$3 = b.stats);
            b.jitterBufferDelays && (c.$2 = b.jitterBufferDelays);
            b.videoMetric && (c.$4 = b.videoMetric);
            b.histResScale && (c.$1 = b.histResScale);
            return c
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("FBRTCMediaMetricsConst", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = "jitter";
    f.JITTER = a;
    b = "accelerate_rate";
    f.ACCELERATE_RATE = b;
    c = "decoding_cng";
    f.DECODING_CNG = c;
    d = "decoding_normal";
    f.DECODING_NORMAL = d;
    e = "decoding_plc";
    f.DECODING_PLC = e;
    a = "decoding_plc_cng";
    f.DECODING_PLC_CNG = a;
    b = "decoding_neteq_call";
    f.DECODING_NETEQ_CALL = b;
    c = "discard_rate";
    f.DISCARD_RATE = c;
    d = "expand_rate";
    f.EXPAND_RATE = d;
    e = "speech_expand_rate";
    f.SPEECH_EXPAND_RATE = e;
    a = "preemptive_rate";
    f.PREEMPTIVE_RATE = a;
    b = "audio_send_total_energy";
    f.AUDIO_SEND_TOTAL_ENERGY = b;
    c = "audio_receive_total_energy";
    f.AUDIO_RECEIVE_TOTAL_ENERGY = c;
    d = "audio_send_log_level";
    f.AUDIO_SEND_LOG_LEVEL = d;
    e = "audio_send_log_level_count";
    f.AUDIO_SEND_LOG_LEVEL_COUNT = e;
    a = "audio_receive_log_level";
    f.AUDIO_RECEIVE_LOG_LEVEL = a;
    b = "audio_receive_log_level_count";
    f.AUDIO_RECEIVE_LOG_LEVEL_COUNT = b;
    c = "audio_packets_received";
    f.AUDIO_PACKETS_RECEIVED = c;
    d = "audio_fec_packets_received";
    f.AUDIO_FEC_PACKETS_RECEIVED = d;
    e = "audio_fec_packets_discarded";
    f.AUDIO_FEC_PACKETS_DISCARDED = e;
    a = "audio_packets_received_lost";
    f.AUDIO_PACKETS_RECEIVED_LOST = a;
    b = "audio_packets_sent";
    f.AUDIO_PACKETS_SENT = b;
    c = "audio_packets_sent_lost";
    f.AUDIO_PACKETS_SENT_LOST = c;
    d = "video_bytes_received";
    f.VIDEO_BYTES_RECEIVED = d;
    e = "video_bytes_sent";
    f.VIDEO_BYTES_SENT = e;
    a = "inbound_qp";
    f.INBOUND_QP = a;
    b = "outbound_qp";
    f.OUTBOUND_QP = b;
    c = "frames_encoded";
    f.FRAMES_ENCODED = c;
    d = "frames_decoded";
    f.FRAMES_DECODED = d;
    e = "frames_received";
    f.FRAMES_RECEIVED = e;
    a = "frames_sent";
    f.FRAMES_SENT = a;
    b = "keyframes_decoded";
    f.KEYFRAMES_DECODED = b;
    c = "picture_less_indication_received";
    f.PICTURE_LOSS_INDICAION_RECEIVED = c;
    d = "full_intra_request_received";
    f.FULL_INTRA_REQUEST_RECEIVED = d;
    e = "videobwe_send_bandwidth";
    f.VIDEOBWE_SEND_BANDWIDTH = e;
    a = "videobwe_transmit_bitrate";
    f.VIDEOBWE_TRANSMIT_BITRATE = a;
    b = "videobwe_retransmit_bitrate";
    f.VIDEOBWE_RETRANSMIT_BITRATE = b;
    c = "audio_bytes_sent";
    f.AUDIO_BYTES_SENT = c;
    d = "audio_bytes_received";
    f.AUDIO_BYTES_RECEIVED = d;
    e = "video_pkts_sent";
    f.VIDEO_PKTS_SENT = e;
    a = "video_pkts_send_lost";
    f.VIDEO_PKTS_SEND_LOST = a;
    b = "video_pkts_received";
    f.VIDEO_PKTS_RECEIVED = b;
    c = "video_fec_pkts_received";
    f.VIDEO_FEC_PKTS_RECEIVED = c;
    d = "video_fec_pkts_discarded";
    f.VIDEO_FEC_PKTS_DISCARDED = d;
    e = "video_pkts_receive_lost";
    f.VIDEO_PKTS_RECV_LOST = e;
    a = "audio_rtt_received";
    f.AUDIO_RTT_RECEIVED = a;
    b = "audio_rtt_sent";
    f.AUDIO_RTT_SENT = b;
    c = "audio_dev_rec_stalls";
    f.AUDIO_DEV_REC_STALLS = c;
    d = "audio_dev_total_stalls";
    f.AUDIO_DEV_TOTAL_STALLS = d;
    e = "audio_dev_is_stalled";
    f.AUDIO_DEV_IS_STALLED = e;
    a = "audio_dev_stall_duration";
    f.AUDIO_DEV_STALL_DURATION = a;
    b = "video_freeze_cnt";
    f.VIDEO_FREEZE_COUNT = b;
    c = "video_freeze_duration";
    f.VIDEO_FREEZE_DURATION = c;
    d = "video_pause_cnt";
    f.VIDEO_PAUSE_COUNT = d;
    e = "video_pause_duration";
    f.VIDEO_PAUSE_DURATION = e;
    a = "video_capture_width";
    f.VIDEO_CAPTURE_WIDTH = a;
    b = "video_capture_height";
    f.VIDEO_CAPTURE_HEIGHT = b;
    c = "video_sum_capture_pixel";
    f.VIDEO_SUM_CAPTURE_PIXEL = c;
    d = "video_capture_frame_count";
    f.VIDEO_CAPTURE_FRAME_COUNT = d;
    e = "video_decoded_width";
    f.VIDEO_DECODED_WIDTH = e;
    a = "video_decoded_height";
    f.VIDEO_DECODED_HEIGHT = a;
    b = "video_encoded_width";
    f.VIDEO_ENCODED_WIDTH = b;
    c = "video_encoded_height";
    f.VIDEO_ENCODED_HEIGHT = c;
    d = "audio_total_packet_send_delay";
    f.AUDIO_TOTAL_PACKET_SEND_DELAY = d;
    e = "video_total_packet_send_delay";
    f.VIDEO_TOTAL_PACKET_SEND_DELAY = e;
    a = "audio_total_encode_time";
    f.AUDIO_TOTAL_ENCODE_TIME = a;
    b = "video_total_encode_time";
    f.VIDEO_TOTAL_ENCODE_TIME = b;
    c = "audio_total_decode_time";
    f.AUDIO_TOTAL_DECODE_TIME = c;
    d = "video_total_decode_time";
    f.VIDEO_TOTAL_DECODE_TIME = d;
    e = "audio_jitter_buffer_delay";
    f.AUDIO_JITTER_BUFFER_DELAY = e;
    a = "video_jitter_buffer_delay";
    f.VIDEO_JITTER_BUFFER_DELAY = a;
    b = "audio_jitter_buffer_emitted_count";
    f.AUDIO_JITTER_BUFFER_EMITTED_COUNT = b;
    c = "video_jitter_buffer_emitted_count";
    f.VIDEO_JITTER_BUFFER_EMITTED_COUNT = c;
    d = "audio_e2e_latency";
    f.AUDIO_E2E_LATENCY = d;
    e = "video_e2e_latency";
    f.VIDEO_E2E_LATENCY = e;
    a = "av_sync";
    f.AV_SYNC = a;
    b = "av_sync_abs";
    f.AV_SYNC_ABS = b;
    c = "av_sync_count";
    f.AV_SYNC_COUNT = c;
    d = "av_sync_oob";
    f.AV_SYNC_OOB = d;
    e = "video_sum_decoded_pixel";
    f.VIDEO_SUM_DECODED_PIXEL = e;
    a = "video_sum_encoded_pixel";
    f.VIDEO_SUM_ENCODED_PIXEL = a;
    b = "video_debugFPS";
    f.VIDEO_DEBUGFPS = b;
    c = "video_debuglastUpdate";
    f.VIDEO_DEBUGLASTUPDATE = c;
    d = "video_debugtracktimestamp";
    f.VIDEO_DEBUGTRACKTIMESTAMP = d;
    e = "audio_neteq_wait_time";
    f.AUDIO_NETEQ_WAIT_TIME = e;
    a = "audio_packet_loss_rate";
    f.AUDIO_PACKET_LOSS_RATE = a;
    b = "audio_plc_cng_rate";
    f.AUDIO_PLC_CNG_RATE = b;
    c = "audio_plc_rate";
    f.AUDIO_PLC_RATE = c;
    d = "global_audio_bitrate";
    f.GLOBAL_AUDIO_BITRATE = d;
    e = "global_battery_usage";
    f.GLOBAL_BATTERY_USAGE = e;
    a = "global_cpu_usage";
    f.GLOBAL_CPU_USAGE = a;
    b = "global_video_bitrate";
    f.GLOBAL_VIDEO_BITRATE = b;
    c = "video_av_sync_abs";
    f.VIDEO_AV_SYNC_ABS = c;
    d = "video_av_sync_oob";
    f.VIDEO_AV_SYNC_OOB = d;
    e = "video_frame_rate";
    f.VIDEO_FRAME_RATE = e;
    a = "video_freeze_count_per_min";
    f.VIDEO_FREEZE_COUNT_PER_MIN = a;
    b = "video_freeze_duration_per_min";
    f.VIDEO_FREEZE_DURATION_PER_MIN = b;
    c = "video_neteq_wait_time";
    f.VIDEO_NETEQ_WAIT_TIME = c;
    d = "video_packet_loss_rate";
    f.VIDEO_PACKET_LOSS_RATE = d;
    e = "video_render_scale_ratio";
    f.VIDEO_RENDER_SCALE_RATIO = e;
    a = "video_cropping_ratio";
    f.VIDEO_CROPPING_RATIO = a;
    b = "video_rtt_received";
    f.VIDEO_RTT_RECEIVED = b;
    c = "video_rtt_sent";
    f.VIDEO_RTT_SENT = c;
    d = "simulcast_layer_changes";
    f.SIMULCAST_LAYER_CHANGES = d;
    e = "video_quality_sent";
    f.VIDEO_QUALITY_SENT = e;
    a = "video_encoded_frame_rate";
    f.VIDEO_ENCODED_FRAME_RATE = a;
    b = "video_qp_sent";
    f.VIDEO_QP_SENT = b;
    c = "video_decode_time";
    f.VIDEO_DECODE_TIME = c
}
), null);
__d("FBRTCCallSummary", ["ChannelClientID", "ErrorMetadata", "FBRTCConstants", "FBRTCExperiment", "FBRTCIceStatsParser", "FBRTCLocalUploadLogLevel", "FBRTCLogger", "FBRTCMediaMetricsConst", "FBRTCMediaMetricTracker", "SiteData", "URI", "UserAgentData", "WebPerformanceDeviceInfo", "gkx", "performanceNow", "requireCond", "uuid", "cr:1440831"], (function(a, b, c, d, e, f) {
    var g, h, i = 5 * 60 * 1e3, j = 1e5, k = [5, 50, 95], l = {
        CALL_STARTED: "started",
        SENT_OFFER: "s_o",
        RECV_OFFER: "r_o",
        SENT_OFFER_ACK: "s_oack",
        RECV_OFFER_ACK: "r_oack",
        SENT_RETRIED_OFFER: "s_o2",
        RECV_RETRIED_OFFER: "r_o2",
        SENT_RETRIED_OFFER_ACK: "s_oack2",
        RECV_RETRIED_OFFER_ACK: "r_oack2",
        SENT_PRANSWER: "s_pr",
        RECV_PRANSWER: "r_pr",
        NETWORK_READY: "network_ready",
        SENT_ANSWER: "s_a",
        RECV_ANSWER: "r_a",
        SENT_ANSWER_ACK: "s_aack",
        RECV_ANSWER_ACK: "r_aack",
        SENT_RETRIED_ANSWER: "s_a2",
        RECV_RETRIED_ANSWER: "r_a2",
        SENT_RETRIED_ANSWER_ACK: "s_aack2",
        RECV_RETRIED_ANSWER_ACK: "r_aack2",
        SENT_OK: "s_ok",
        RECV_OK: "r_ok",
        CALL_CONNECTED: "connected",
        CALL_ENDED: "ended",
        SENT_JOIN_REQUEST: "s_jreq",
        RECV_JOIN_RESPONSE: "r_jresp",
        PROC_JOIN_RESPONSE: "p_jresp",
        RECV_RING_REQUEST: "r_rreq",
        SENT_RING_RESPONSE: "s_rresp"
    }, m = {
        FELLBACK_TO_AUDIO: "f_a",
        MEDIA_REQUESTED: "m_r",
        MEDIA_SUCCEEDED: "m_s",
        POPUP_OPENED: "opened",
        PRESSED_ANSWER: "p_a"
    }, n = {
        ESCALATION_IS_AVAILABLE: "esc_available",
        USER_INITIATED_REQUEST: "out_started",
        RECEIVED_INCOMING_REQUEST: "inc_started",
        REJECTED_INVALID_P2P_STATE: "rej_invalid_state",
        CONNECTING_TO_MULTIWAY: "u_connecting_mw",
        CONNECTED_TO_MULTIWAY: "u_connected_mw",
        PEER_CONNECTING_TO_MULTIWAY: "p_connecting_mw",
        PEER_CONNECTED_TO_MULTIWAY: "p_connected_mw",
        READY_TO_ESCALATE: "ready_esc",
        PEER_FAILED_TO_CONNECT_TO_MULTIWAY: "p_fail_conn",
        MULTIWAY_CALL_ENDED: "mw_call_ended",
        TIMED_OUT: "timed_out",
        PEER_ABORTED: "p_aborted",
        INTERNAL_ERROR: "internal_err"
    }, o = {
        ESCALATION_INITIATION_BUTTON_CLICKED: "esc_init_button",
        ESCALATION_APPROVED_BUTTON_CLICKED: "esc_appr_button",
        ESCALATION_DECLINED_BUTTON_CLICKED: "esc_decl_button",
        USERMEDIA_REQUEST: "media_req",
        USERMEDIA_SUCCESS: "media_success",
        USERMEDIA_FAILURE: "media_fail",
        SENT_ESC_REQUEST: "s_esc_req",
        RECV_ESC_REQUEST: "r_esc_req",
        SENT_ESC_REQUEST_ACK: "s_esc_req_ack",
        RECV_ESC_REQUEST_ACK: "s_esc_req_ack",
        SENT_ESC_RESPONSE: "s_esc_rep",
        RECV_ESC_ACCEPT: "r_esc_accept",
        RECV_ESC_DECLINE: "r_esc_decl",
        RECV_ESC_TIMEOUT: "r_esc_timeout"
    }, p = [(a = b("FBRTCMediaMetricsConst")).ACCELERATE_RATE, a.DISCARD_RATE, a.EXPAND_RATE, a.PREEMPTIVE_RATE, a.SPEECH_EXPAND_RATE], q = [{
        key: a.AUDIO_NETEQ_WAIT_TIME,
        field: "nwt",
        scale: 1
    }, {
        key: a.AUDIO_PACKET_LOSS_RATE,
        field: "plr",
        scale: 1e4
    }, {
        key: a.AUDIO_PLC_CNG_RATE,
        field: "plccngr",
        scale: 1e4
    }, {
        key: a.AUDIO_PLC_RATE,
        field: "plcr",
        scale: 1e4
    }], r = [{
        key: a.VIDEO_AV_SYNC_ABS,
        field: "avabs",
        scale: 1
    }, {
        key: a.VIDEO_FRAME_RATE,
        field: "fr",
        scale: 1
    }, {
        key: a.VIDEO_NETEQ_WAIT_TIME,
        field: "nwt",
        scale: 1
    }, {
        key: a.VIDEO_PACKET_LOSS_RATE,
        field: "plr",
        scale: 1e4
    }, {
        key: a.VIDEO_RENDER_SCALE_RATIO,
        field: "rsr",
        scale: 100
    }, {
        key: a.VIDEO_CROPPING_RATIO,
        field: "cr",
        scale: 100
    }], s = [{
        key: a.VIDEO_FREEZE_COUNT_PER_MIN,
        field: "vfmin",
        scale: 1
    }, {
        key: a.VIDEO_FREEZE_DURATION_PER_MIN,
        field: "vfdur",
        scale: 1
    }, {
        key: a.VIDEO_AV_SYNC_OOB,
        field: "avoob",
        scale: 1e4
    }], t = [{
        key: a.GLOBAL_CPU_USAGE,
        field: "proc",
        scale: 100
    }, {
        key: a.GLOBAL_BATTERY_USAGE,
        field: "bat",
        scale: 1
    }, {
        key: a.GLOBAL_AUDIO_BITRATE,
        field: "tadb",
        scale: 1
    }, {
        key: a.GLOBAL_VIDEO_BITRATE,
        field: "tvdb",
        scale: 1
    }], u = [{
        key: a.AUDIO_RTT_SENT,
        field: "artt",
        scale: 1
    }], v = [{
        key: a.VIDEO_RTT_SENT,
        field: "vrtt",
        scale: 1
    }, {
        key: a.VIDEO_QUALITY_SENT,
        field: "vqs",
        scale: 1
    }, {
        key: a.VIDEO_ENCODED_FRAME_RATE,
        field: "efr",
        scale: 1
    }, {
        key: a.VIDEO_QP_SENT,
        field: "qp",
        scale: 1
    }], w = "globalStatsTrackId", x = "grid", y = "pinned", z = "thumbnail", A = "pinnedAudioStatsTrackId", B = "pinnedVideoStatsTrackId", C = "outboundAudioStatsTrackId", D = "outboundScreenStatsTrackId", E = "outboundVideoStatsTrackId";
    function F(a) {
        var c = new (g || (g = b("URI")))(window.location).getPath().includes("/videocall/");
        if (a === "MW_PEER_ID" && !c) {
            a = b("FBRTCExperiment").gen("rtweb_zenon_platform");
            c = a.getBool("use_zenon_platform", !1, !1);
            a = b("FBRTCExperiment").gen("rpweb_zenon_platform_workplace");
            a = a.getBool("use_zenon_platform_wp", !1, !1);
            c = c || a;
            if (c)
                return "ZenonPlatform"
        }
        a = b("gkx")("1341692");
        c = b("gkx")("1680228");
        return !a && !c ? "ZenonScotch" : "Old Codebase"
    }
    c = function() {
        a.nullSummary = function() {
            return new a({
                peerID: "0",
                callID: "0",
                isCaller: !1,
                callTrigger: "NULL_SUMMARY"
            })
        }
        ;
        function a(c) {
            var d;
            this.$41 = {};
            this.peerID = String(c.peerID);
            this.callID = String(c.callID);
            this.localCallID = (d = c.localCallID) != null ? d : b("uuid")();
            this.deviceID = b("ChannelClientID").getID();
            this.$2 = c.isCaller;
            this.$1 = c.version || a.CURRENT_SUMMARY_VERSION;
            this.$3 = b("FBRTCLocalUploadLogLevel").getLocalUploadLogLevel();
            this.$15 = new Date().valueOf();
            this.$43 = {};
            this.$4 = c.callTrigger || null;
            this.$6 = {};
            this.$8 = {};
            this.$9 = {};
            this.$14 = {};
            this.$34 = null;
            this.$35 = null;
            this.$36 = null;
            this.$17 = 0;
            this.$18 = 0;
            this.$33 = !1;
            this.$10 = {};
            this.$11 = {};
            this.$12 = {};
            this.$13 = {};
            this.$39 = null;
            this.$38 = null;
            this.$37 = null;
            this.$5 = F(this.peerID);
            this.$20 = (h || (h = b("performanceNow")))();
            this.$16 = 0;
            this.$7 = {};
            this.$19 = this.$20;
            this.$21 = 0;
            this.$22 = {};
            this.addExtraInfo(b("FBRTCLogger").Key.DEVICE_INFO, this.$54());
            this.$55();
            this.$56();
            this.$57();
            this.$58();
            this.$24 = b("FBRTCIceStatsParser").getInstance();
            this.$49 = new (b("FBRTCMediaMetricTracker"))();
            this.$23 = b("FBRTCLogger").getInstance()
        }
        var c = a.prototype;
        c.toJsonString = function() {
            this.$18 = new Date().valueOf();
            return JSON.stringify({
                version: this.$1,
                peerID: this.peerID,
                callID: this.callID,
                localCallID: this.localCallID,
                deviceID: this.deviceID,
                isCaller: this.$2,
                uploadLogLevel: this.$3,
                callType: this.$29,
                conferenceName: this.$26,
                joinWithSID: this.$27,
                activeConn: this.$25,
                escP2PCallID: this.$28,
                serverInfoData: this.$30,
                localVideoDuration: this.$31,
                remoteVideoDuration: this.$32,
                startTime: this.$15,
                trigger: this.$4,
                signalingTime: this.$6,
                escStateTimes: this.$8,
                applicationEventTime: this.$9,
                videoEscTimes: this.$14,
                endCallReason: this.$34,
                endCallSubreason: this.$35,
                isRemoteEnded: this.$36,
                lastUpdatedTime: this.$17,
                lastSerializedTime: this.$18,
                unsetOnRetrieve: this.$33,
                openCount: this.$21,
                extraInfo: this.$22,
                gen0IceSentCount: this.$10,
                gen0IceReceivedCount: this.$11,
                iceSentCount: this.$12,
                iceReceivedCount: this.$13,
                connectionType: this.$39,
                mediaMetricStats: this.$49.toJsonString(),
                newSignalingTime: this.$7,
                accumulatedCallTime: this.$59(),
                deviceCharged: this.$42,
                ehist: this.getEhist(),
                videoReceivedCodec: this.$44,
                videoSentCodec: this.$45,
                videoDevice: this.$46,
                audioDevice: this.$47,
                audioSentCodec: this.$48,
                relayIP: this.$40,
                clientVersion: this.$5,
                pcConnectionStates: this.$41,
                pcIsConnected: this.$37,
                endIsConnected: this.$38,
                maxTotalDecodeTime: this.$50,
                totalDecodeTime: this.$51,
                totalEncodeTime: this.$52,
                keyFramesEncoded: this.$53
            })
        }
        ;
        a.fromJsonString = function(c) {
            var d;
            try {
                c = JSON.parse(c)
            } catch (a) {
                return null
            }
            if (c.version < a.OLDEST_SUPPORTED_SUMMARY_VERSION)
                return null;
            if (!Object.prototype.hasOwnProperty.call(c, "peerID") || !Object.prototype.hasOwnProperty.call(c, "callID") || !Object.prototype.hasOwnProperty.call(c, "isCaller") || !Object.prototype.hasOwnProperty.call(c, "startTime") || !Object.prototype.hasOwnProperty.call(c, "trigger") || !Object.prototype.hasOwnProperty.call(c, "signalingTime") || !Object.prototype.hasOwnProperty.call(c, "endCallReason") || !Object.prototype.hasOwnProperty.call(c, "isRemoteEnded") || !Object.prototype.hasOwnProperty.call(c, "lastUpdatedTime") || !Object.prototype.hasOwnProperty.call(c, "lastSerializedTime"))
                return null;
            var e = new a({
                peerID: c.peerID,
                callID: c.callID,
                isCaller: c.isCaller,
                localCallID: c.localCallID
            });
            e.deviceID = c.deviceID;
            e.$1 = c.version;
            e.$3 = c.uploadLogLevel;
            e.$15 = c.startTime;
            e.$4 = c.trigger;
            e.$5 = c.clientVersion;
            e.$6 = c.signalingTime;
            e.$34 = c.endCallReason;
            e.$35 = c.endCallSubreason;
            e.$36 = c.isRemoteEnded;
            e.$17 = c.lastUpdatedTime;
            e.$18 = c.lastSerializedTime;
            e.$27 = c.joinWithSID;
            e.$38 = (d = c.endIsConnected) != null ? d : null;
            e.$37 = (d = c.pcIsConnected) != null ? d : null;
            c.callType && (e.$29 = c.callType);
            c.conferenceName && (e.$26 = c.conferenceName);
            c.escP2PCallID && (e.$28 = c.escP2PCallID);
            c.activeConn && (e.$25 = c.activeConn);
            c.serverInfoData && (e.$30 = c.serverInfoData);
            c.localVideoDuration && (e.$31 = c.localVideoDuration);
            c.remoteVideoDuration && (e.$32 = c.remoteVideoDuration);
            c.unsetOnRetrieve && (e.$33 = c.unsetOnRetrieve);
            c.openCount && (e.$21 = c.openCount);
            c.extraInfo && (e.$22 = c.extraInfo);
            c.gen0IceSentCount && (e.$10 = c.gen0IceSentCount);
            c.gen0IceReceivedCount && (e.$11 = c.gen0IceReceivedCount);
            c.iceSentCount && (e.$12 = c.iceSentCount);
            c.iceReceivedCount && (e.$13 = c.iceReceivedCount);
            c.newSignalingTime && (e.$7 = c.newSignalingTime);
            c.pcConnectionStates && (e.$41 = c.pcConnectionStates);
            c.accumulatedCallTime && (e.$16 = c.accumulatedCallTime);
            c.escStateTimes && (e.$8 = c.escStateTimes);
            c.applicationEventTime && (e.$9 = c.applicationEventTime);
            c.videoEscTimes && (e.$14 = c.videoEscTimes);
            c.mediaMetricStats && (e.$49 = b("FBRTCMediaMetricTracker").fromJsonString(c.mediaMetricStats));
            c.connectionType && (e.$39 = c.connectionType);
            c.deviceCharged && (e.$42 = c.deviceCharged);
            c.ehist !== null && (e.$43 = c.ehist);
            c.videoReceivedCodec !== null && (e.$44 = c.videoReceivedCodec);
            c.videoSentCodec !== null && (e.$45 = c.videoSentCodec);
            c.videoDevice !== null && (e.$46 = c.videoDevice);
            c.audioDevice !== null && (e.$47 = c.audioDevice);
            c.audioSentCodec !== null && (e.$48 = c.audioSentCodec);
            c.relayIP !== null && c.relayIP !== void 0 && (e.$40 = c.relayIP);
            c.maxTotalDecodeTime !== null && c.maxTotalDecodeTime !== void 0 && (e.$50 = c.maxTotalDecodeTime);
            c.totalDecodeTime != null && (e.$51 = c.totalDecodeTime);
            c.totalEncodeTime != null && (e.$52 = c.totalEncodeTime);
            c.keyFramesEncoded != null && (e.$53 = c.keyFramesEncoded);
            return e
        }
        ;
        a.restoreOrInitialize = function(c, d, e, f, g, h) {
            d = String(d);
            e = String(e);
            c = c.retrieveCallSummary(d, e);
            !c ? (c = new a({
                peerID: d,
                callID: e,
                isCaller: f
            }),
            g ? (c.onFullMessageReceived({
                msg: g
            }),
            c.onOfferAckSent(g)) : c.onCallStarted(h || b("FBRTCLogger").Trigger.UNKNOWN),
            h !== b("FBRTCLogger").Trigger.REDIAL_BUTTON && b("FBRTCLogger").getInstance().logError(d, e, "Missing call summary from storage")) : c.$33 && (c.$38 = null,
            c.$34 = null,
            c.$35 = null,
            c.$36 = null,
            delete c.$6[l.CALL_ENDED],
            delete c.$7[l.CALL_ENDED],
            c.$20 = 0,
            c.$33 = null);
            return c
        }
        ;
        a.logSavedSummaries = function(a) {
            var c = a.getLoggableSummaries()
              , d = c.length;
            if (d <= 0)
                return;
            var e = b("FBRTCLogger").getInstance()
              , f = [];
            for (var g = 0; g < d; g++) {
                var h = c[g];
                e.logEndCallSummary(h);
                f.push({
                    peerID: h.peerID,
                    callID: h.callID
                })
            }
            a.removeCallSummaries(f);
            e.logToConsole("Logged pending summaries: " + d)
        }
        ;
        c.logThisSummary = function(a, c) {
            c === void 0 && (c = !1);
            var d = b("FBRTCLogger").getInstance();
            a.retrieveCallSummary(this.peerID, this.callID) != null && (d.logEndCallSummary(this, c),
            a.removeCallSummary(this.peerID, this.callID),
            d.logToConsole("Logged active summary"))
        }
        ;
        c.isNull = function() {
            var b = a.CANONICAL_NULL_SUMMARY;
            return this.peerID === b.peerID && this.callID === b.callID && this.isCaller() === b.isCaller() && this.getCallTrigger() === b.getCallTrigger()
        }
        ;
        c.save = function(a) {
            var c = (h || (h = b("performanceNow")))()
              , d = c - this.$19;
            if (d > i) {
                this.$23.logInfo(this.peerID, this.callID, "Summary too old: " + d);
                return
            }
            b("cr:1440831") && b("cr:1440831").logCallSummaryHeartbeat(this, "interval");
            a.storeCallSummary(this.peerID, this.callID, this);
            this.$19 = c
        }
        ;
        c.getVersion = function() {
            return this.$1
        }
        ;
        c.getLastUpdatedTime = function() {
            return this.$17
        }
        ;
        c.setLastUpdatedTime = function(a) {
            this.$17 = a
        }
        ;
        c.getExtraInfo = function() {
            return this.$22
        }
        ;
        c.getCallTrigger = function() {
            return this.$4
        }
        ;
        c.addExtraInfo = function(a, b) {
            this.$22[a] = b,
            this.$58()
        }
        ;
        c.isCaller = function() {
            return this.$2
        }
        ;
        c.isNetworkReady = function() {
            if (this.$6[l.NETWORK_READY])
                return !0;
            else
                return !1
        }
        ;
        c.isAnswerReceived = function() {
            if (this.$6[l.RECV_ANSWER])
                return !0;
            else
                return !1
        }
        ;
        c.onCallStarted = function(a) {
            this.$4 = a,
            this.$60(l.CALL_STARTED),
            this.$58(),
            b("ErrorMetadata").addGlobalMetadata("RT_WEB", "TYPE", "CallStarted")
        }
        ;
        c.setCallTrigger = function(a) {
            this.$4 = a,
            this.$58()
        }
        ;
        c.setPCIsConnected = function(a) {
            this.$37 !== a && (this.$37 = a,
            this.$41[this.$59()] = a)
        }
        ;
        c.onPopupOpened = function() {
            this.deviceID = b("ChannelClientID").getID(),
            this.$61(m.POPUP_OPENED),
            this.$21++,
            this.$58()
        }
        ;
        c.onPressedAnswer = function() {
            this.$61(m.PRESSED_ANSWER),
            this.$58()
        }
        ;
        c.onMediaRequested = function() {
            this.$61(m.MEDIA_REQUESTED),
            this.$58()
        }
        ;
        c.onMediaSucceeded = function() {
            this.$61(m.MEDIA_SUCCEEDED),
            this.$58()
        }
        ;
        c.onFellbackToAudio = function() {
            this.$61(m.FELLBACK_TO_AUDIO),
            this.$58()
        }
        ;
        c.setConnectionType = function(a) {
            this.$39 = a,
            this.$58()
        }
        ;
        c.setUploadLogLevel = function(a) {
            this.$3 = a,
            this.$58()
        }
        ;
        c.getCallType = function() {
            return this.$29
        }
        ;
        c.setCallType = function(a) {
            this.$29 = a,
            this.addExtraInfo(b("FBRTCLogger").Key.CALL_TYPE, a),
            this.$58()
        }
        ;
        c.setVideoDurations = function(a, b) {
            this.$31 = a,
            this.$32 = b,
            this.$58()
        }
        ;
        c.setAudioDevice = function(a) {
            this.$47 = a
        }
        ;
        c.setVideoDevice = function(a) {
            this.$46 = a
        }
        ;
        c.setScreenDuration = function(a) {
            this.addExtraInfo(b("FBRTCLogger").Key.SCREEN_DURATION, a)
        }
        ;
        c.setConferenceName = function(a) {
            this.$26 = a,
            this.$58()
        }
        ;
        c.setTotalVideoFilterDuration = function(a) {
            this.addExtraInfo(b("FBRTCLogger").Key.VIDEO_DURATION_WITH_FILTER, Math.ceil(a).toString())
        }
        ;
        c.setCoExperienceEffectDuration = function(a) {
            this.addExtraInfo(b("FBRTCLogger").Key.EFFECT_TOTAL_DURATION, Math.ceil(a).toString())
        }
        ;
        c.setEffectCount = function(a) {
            this.addExtraInfo(b("FBRTCLogger").Key.EFFECT_COUNT, a.toString())
        }
        ;
        c.setJoinWithSID = function(a) {
            this.$27 = a,
            this.$58()
        }
        ;
        c.setServerInfoData = function(a) {
            this.$30 = a,
            this.$58()
        }
        ;
        c.setActiveConnection = function(a) {
            this.$25 = a,
            this.$58()
        }
        ;
        c.setEscalationP2PCallID = function(a) {
            this.$28 = a,
            this.$58()
        }
        ;
        c.onOfferAckSent = function(a) {
            this.onMessageSent({
                type: b("FBRTCConstants").PayloadType.OFFER_ACK,
                flag: a.flag
            })
        }
        ;
        c.onMessageSent = function(a) {
            var c = a.flag === 1;
            switch (a.type) {
            case b("FBRTCConstants").PayloadType.OFFER:
                this.$62(c, l.SENT_OFFER, l.SENT_RETRIED_OFFER);
                this.$63(a, this.$10, this.$12);
                break;
            case b("FBRTCConstants").PayloadType.ANSWER:
                this.$62(c, l.SENT_ANSWER, l.SENT_RETRIED_ANSWER);
                this.$63(a, this.$10, this.$12);
                break;
            case b("FBRTCConstants").PayloadType.OK:
                this.$60(l.SENT_OK);
                break;
            case b("FBRTCConstants").PayloadType.PRANSWER:
                this.$60(l.SENT_PRANSWER);
                break;
            case b("FBRTCConstants").PayloadType.OFFER_ACK:
                this.$62(c, l.SENT_OFFER_ACK, l.SENT_RETRIED_OFFER_ACK);
                break;
            case b("FBRTCConstants").PayloadType.ANSWER_ACK:
                this.$62(c, l.SENT_ANSWER_ACK, l.SENT_RETRIED_ANSWER_ACK);
                break;
            case b("FBRTCConstants").PayloadType.ICE_CANDIDATE:
                this.$63(a, this.$10, this.$12);
                break;
            case b("FBRTCConstants").PayloadType.ACK:
                a.ack_type === b("FBRTCConstants").PayloadType.VIDEO_REQUEST && this.$64(o.SENT_ESC_REQUEST_ACK);
                break;
            case b("FBRTCConstants").PayloadType.VIDEO_REQUEST:
                a.ack_id ? this.$64(o.SENT_ESC_RESPONSE) : this.$64(o.SENT_ESC_REQUEST);
                break;
            default:
            }
            this.$58()
        }
        ;
        c.$63 = function(a, b, c) {
            var d, e = null;
            a = this.$24.extractIceInfo(a.sdp);
            for (var f = 0; f < a.length; f++)
                d = a[f].gen,
                e = a[f].type,
                d === 0 && this.$65(b, e),
                this.$65(c, e)
        }
        ;
        c.$65 = function(a, b) {
            !a[b] ? a[b] = 1 : a[b] += 1
        }
        ;
        c.$66 = function(a) {
            this.addExtraInfo(b("FBRTCLogger").Key.PEER_IS_MOBILE, a.isFromMobile() ? "1" : "0")
        }
        ;
        c.onFullMessageReceived = function(a) {
            var c = a.msg
              , d = c.flag === 1;
            switch (c.type) {
            case b("FBRTCConstants").PayloadType.OFFER:
                this.$66(a);
                this.$62(d, l.RECV_OFFER, l.RECV_RETRIED_OFFER);
                this.$63(c, this.$11, this.$13);
                break;
            case b("FBRTCConstants").PayloadType.ANSWER:
                this.$66(a);
                this.$62(d, l.RECV_ANSWER, l.RECV_RETRIED_ANSWER);
                this.$63(c, this.$11, this.$13);
                break;
            case b("FBRTCConstants").PayloadType.OK:
                this.$60(l.RECV_OK);
                break;
            case b("FBRTCConstants").PayloadType.PRANSWER:
                this.$60(l.RECV_PRANSWER);
                break;
            case b("FBRTCConstants").PayloadType.OFFER_ACK:
                this.$62(d, l.RECV_OFFER_ACK, l.RECV_RETRIED_OFFER_ACK);
                break;
            case b("FBRTCConstants").PayloadType.ANSWER_ACK:
                this.$62(d, l.RECV_ANSWER_ACK, l.RECV_RETRIED_ANSWER_ACK);
                break;
            case b("FBRTCConstants").PayloadType.ICE_CANDIDATE:
                this.$63(c, this.$11, this.$13);
                break;
            case b("FBRTCConstants").PayloadType.ACK:
                c.ack_type === b("FBRTCConstants").PayloadType.VIDEO_REQUEST && this.$64(o.RECV_ESC_REQUEST_ACK);
                break;
            case b("FBRTCConstants").PayloadType.VIDEO_REQUEST:
                c.ack_id ? c.videoon || c.reqVideoOn ? this.$64(o.RECV_ESC_ACCEPT) : this.$64(o.RECV_ESC_DECLINE) : c.videoon || c.reqVideoOn ? this.$64(o.RECV_ESC_REQUEST) : this.$64(o.RECV_ESC_TIMEOUT);
                break;
            default:
            }
            this.$58()
        }
        ;
        c.onMsgAckReceived = function(a, b) {
            a = a.msg.flag === 1;
            b ? this.$62(a, l.RECV_OFFER_ACK, l.RECV_RETRIED_OFFER_ACK) : this.$62(a, l.RECV_ANSWER_ACK, l.RECV_RETRIED_ANSWER_ACK)
        }
        ;
        c.onNetworkReady = function() {
            this.$60(l.NETWORK_READY),
            this.$58()
        }
        ;
        c.onCallConnected = function() {
            this.$60(l.CALL_CONNECTED),
            this.$58()
        }
        ;
        c.onCallEnded = function(a, b, c, d) {
            this.$33 = c,
            this.$34 = a,
            this.$35 = d,
            this.$36 = b,
            this.$38 === null && (this.$38 = this.$37),
            this.$60(l.CALL_ENDED),
            this.$58()
        }
        ;
        c.setOfferSentTime = function() {
            this.$60(l.SENT_OFFER)
        }
        ;
        c.setOfferAckReceivedTime = function() {
            this.$60(l.RECV_OFFER_ACK)
        }
        ;
        c.setAnswerSentTime = function() {
            this.$60(l.SENT_ANSWER)
        }
        ;
        c.setAnswerReceivedTime = function() {
            this.$60(l.RECV_ANSWER)
        }
        ;
        c.setJoinRequestSent = function() {
            this.$60(l.SENT_JOIN_REQUEST),
            this.$58()
        }
        ;
        c.setJoinResponseReceived = function() {
            this.$60(l.RECV_JOIN_RESPONSE),
            this.$58()
        }
        ;
        c.setJoinResponseProcessed = function() {
            this.$60(l.PROC_JOIN_RESPONSE),
            this.$58()
        }
        ;
        c.setRingRequestReceived = function() {
            this.$60(l.RECV_RING_REQUEST),
            this.$58()
        }
        ;
        c.setRingResponseSent = function() {
            this.$60(l.SENT_RING_RESPONSE),
            this.$58()
        }
        ;
        c.setEscalationAvailable = function() {
            this.$67(n.ESCALATION_IS_AVAILABLE)
        }
        ;
        c.setEscalationInitiated = function() {
            this.$67(n.USER_INITIATED_REQUEST)
        }
        ;
        c.setReceivedEscalationRequest = function() {
            this.$67(n.RECEIVED_INCOMING_REQUEST)
        }
        ;
        c.setInvalidP2PEscalationState = function() {
            this.$67(n.REJECTED_INVALID_P2P_STATE)
        }
        ;
        c.setEscalationConnectingToMultiway = function() {
            this.$67(n.CONNECTING_TO_MULTIWAY)
        }
        ;
        c.setEscalationConnectedToMultiway = function() {
            this.$67(n.CONNECTED_TO_MULTIWAY)
        }
        ;
        c.setEscalationPeerConnectingToMultiway = function() {
            this.$67(n.PEER_CONNECTING_TO_MULTIWAY)
        }
        ;
        c.setEscalationPeerConnectedToMultiway = function() {
            this.$67(n.PEER_CONNECTED_TO_MULTIWAY)
        }
        ;
        c.setReadyToEscalate = function() {
            this.$67(n.READY_TO_ESCALATE)
        }
        ;
        c.setEscalationPeerFailedToConnectToMultiway = function() {
            this.$67(n.PEER_FAILED_TO_CONNECT_TO_MULTIWAY)
        }
        ;
        c.setEscalationTimedOut = function() {
            this.$67(n.TIMED_OUT)
        }
        ;
        c.setVidEscalationInitClick = function() {
            this.$64(o.ESCALATION_INITIATION_BUTTON_CLICKED)
        }
        ;
        c.setVidEscalationAcceptedClick = function() {
            this.$64(o.ESCALATION_APPROVED_BUTTON_CLICKED)
        }
        ;
        c.setVidEscalationDeclinedClick = function() {
            this.$64(o.ESCALATION_DECLINED_BUTTON_CLICKED)
        }
        ;
        c.setVidEscalationMediaRequested = function() {
            this.$64(o.USERMEDIA_REQUEST)
        }
        ;
        c.setVidEscalationMediaSuccess = function() {
            this.$64(o.USERMEDIA_SUCCESS)
        }
        ;
        c.setVidEscalationMediaFailed = function() {
            this.$64(o.USERMEDIA_FAILURE)
        }
        ;
        c.setVideoCapabilities = function(a) {
            this.addExtraInfo(b("FBRTCLogger").Key.VIDEO_CAPABILITIES, a)
        }
        ;
        c.setMediaInputs = function(a) {
            this.addExtraInfo(b("FBRTCLogger").Key.MEDIA_INPUTS, a)
        }
        ;
        c.getVideoReceivedCodec = function() {
            return this.$44
        }
        ;
        c.setVideoReceivedCodec = function(a) {
            this.$44 = a
        }
        ;
        c.getVideoSentCodec = function() {
            return this.$45
        }
        ;
        c.setVideoSentCodec = function(a) {
            this.$45 = a
        }
        ;
        c.getEhist = function() {
            return this.$43
        }
        ;
        c.setEhist = function(a) {
            this.$43 = a
        }
        ;
        c.getAudioSentCodec = function() {
            return this.$48
        }
        ;
        c.setAudioSentCodec = function(a) {
            this.$48 = a
        }
        ;
        c.setVideoMaxTotalDecodeTime = function(a) {
            this.$50 = a
        }
        ;
        c.getTotalDecodeTime = function() {
            return this.$51
        }
        ;
        c.setTotalDecodeTime = function(a) {
            this.$51 = a
        }
        ;
        c.getTotalEncodeTime = function() {
            return this.$52
        }
        ;
        c.setTotalEncodeTime = function(a) {
            this.$52 = a
        }
        ;
        c.getKeyFramesEncoded = function() {
            return this.$53
        }
        ;
        c.setKeyFramesEncoded = function(a) {
            this.$53 = a
        }
        ;
        c.toString = function() {
            var a = {};
            a.core_metrics = this.$68();
            a.time_series = null;
            return JSON.stringify(a)
        }
        ;
        c.$68 = function() {
            var a = {};
            a.ver = this.$1;
            a.log_level = b("FBRTCConstants").uploadLogLevelString(this.$3);
            a.caller = this.$2;
            a.call_type = this.$29;
            a.active_conn = this.$25;
            a.app_event_times = this.$9;
            a.conf_name = this.$26;
            a.CoreAudioMetrics = this.$69();
            a.join_with_sid = this.$27;
            a.esc_p2p_call_id = this.$28;
            a.esc_state_times = this.$8;
            a.vid_esc_times = this.$14;
            a.serv_info = this.$30;
            a.conn = this.$70();
            a.peer_id = this.peerID;
            a.has_video = !0;
            a.open_count = this.$21;
            a.signaling = this.$71();
            a.sender = this.$72();
            a.receiver = this.$73();
            a.end = this.$74();
            a.video = this.$75();
            a.push_phase = b("SiteData").push_phase;
            a.DebugAudioMetrics = this.$76();
            a.device_charged = this.$42;
            a.client_version = this.$5;
            a.perf = this.$77();
            a.grid = this.$78();
            a.pinned = this.$79();
            a.thumbnail = this.$80();
            a.sys_pct = this.$81();
            a.sender_pct = this.$82();
            return a
        }
        ;
        c.$76 = function() {
            return {
                NetworkReceive: {
                    jb_nm: this.$83()
                }
            }
        }
        ;
        c.$84 = function(a, b, c) {
            var d = this
              , e = 0
              , f = 0;
            b == null && (b = 1);
            var g = this.$49.getVideoStreamReportKeys();
            g.forEach(function(b) {
                if (c == null || d.$49.getVideoContentType(b) === c) {
                    b = d.$49.getVideoMetric(b, a);
                    b && (e += b.total,
                    f += b.count)
                }
            });
            return f === 0 ? null : Math.round(e * b / f)
        }
        ;
        c.$85 = function(a, b, c) {
            var d = this
              , e = 0
              , f = 0;
            b == null && (b = 1);
            var g = this.$49.getVideoStreamReportKeys();
            g.forEach(function(b) {
                if (c == null || d.$49.getVideoContentType(b) === c) {
                    b = d.$49.getVideoMetric(b, a);
                    b && (e += b.current,
                    f += 1)
                }
            });
            return f === 0 ? null : Math.round(e * b)
        }
        ;
        c.$86 = function(a, b) {
            var c = this
              , d = 0
              , e = 0
              , f = this.$49.getVideoStreamReportKeys();
            f.forEach(function(f) {
                if (b == null || c.$49.getVideoContentType(f) === b) {
                    f = c.$49.getVideoMetric(f, a);
                    f && e === 0 && (d = f.current,
                    e++)
                }
            });
            return e === 0 ? null : d
        }
        ;
        c.$87 = function(a, b) {
            var c = this
              , d = 0
              , e = 0;
            b == null && (b = 1);
            var f = this.$49.getAudioStreamReportKeys();
            f.forEach(function(b) {
                b = c.$49.getMetricStats(b, a);
                b && (d += b.current,
                e += 1)
            });
            return e === 0 ? null : Math.round(d * b)
        }
        ;
        c.$83 = function() {
            var a = this
              , b = {}
              , c = this.$49.getAudioStreamReportKeys();
            if (c.length < 1)
                return b;
            p.forEach(function(d) {
                var e = 0
                  , f = 0
                  , g = -Infinity
                  , h = Infinity;
                c.forEach(function(b) {
                    b = a.$49.getMetricStats(b, d);
                    b != null && b.mean != null && (e += b.count,
                    f += b.count * b.mean,
                    g = Math.max(g, b.max),
                    h = Math.min(h, b.min))
                });
                e > 0 && (b[d] = {
                    m: Math.round(1e4 * h),
                    M: Math.round(1e4 * g),
                    avg: Math.round(f * 1e4 / e)
                })
            });
            b.neteq = {
                meanWait: this.$88()
            };
            return b
        }
        ;
        c.$88 = function() {
            var a = this.$87(b("FBRTCMediaMetricsConst").AUDIO_JITTER_BUFFER_DELAY)
              , c = this.$87(b("FBRTCMediaMetricsConst").AUDIO_JITTER_BUFFER_EMITTED_COUNT);
            return a != null && c != null && c > 0 ? Math.round(a * 1e3 / c) : -1
        }
        ;
        c.$69 = function() {
            var a = this
              , c = this.$49.getAudioStreamReportKeys();
            c = c.reduce(function(c, d) {
                d = a.$49.getMetricStats(d, b("FBRTCMediaMetricsConst").AUDIO_DEV_IS_STALLED);
                return !d || d.updatedTime == null || d.current == null ? c : d.updatedTime > c.timeStamp ? {
                    val: d.current,
                    timeStamp: d.updatedTime
                } : c
            }, {
                val: -1,
                timeStamp: -Infinity
            }).val > 0 ? 1 : 0;
            var d = this.$87(b("FBRTCMediaMetricsConst").AUDIO_DEV_REC_STALLS)
              , e = this.$87(b("FBRTCMediaMetricsConst").AUDIO_DEV_TOTAL_STALLS)
              , f = this.$87(b("FBRTCMediaMetricsConst").AUDIO_DEV_STALL_DURATION)
              , g = this.$89();
            g = g.count === 0 ? 0 : Math.round(g.levelSum / g.count);
            e = {
                astall: e,
                audio_device: this.$47,
                isstall: c,
                rstall: d,
                rx_chan_proc_lvl: g,
                sdur: f
            };
            return e
        }
        ;
        c.$70 = function() {
            var a = {
                dtls: 1
            }
              , b = this.$72();
            b.avgrtt && (a.avgrtt = b.avgrtt,
            a.maxrtt = b.maxrtt,
            a.minrtt = b.minrtt);
            this.$40 !== null && (a.relay_ip = this.$40);
            a.ctd = this.$41;
            return a
        }
        ;
        c.$71 = function() {
            var a = {};
            this.$4 && (a.trigger = this.$4);
            a.start_time = this.$15;
            a.time_from_start = this.$6;
            a.new_time_from_start = this.$7;
            var b = this.$90();
            b > 0 && (a.duration = b);
            return a
        }
        ;
        c.$90 = function(a) {
            var b = this.$7[l.CALL_CONNECTED] || this.$7[l.NETWORK_READY];
            if (!b)
                return 0;
            a = this.$7[l.CALL_ENDED] || !(a == null ? void 0 : a.assumeOngoing) && this.$16 || this.$59();
            return Math.max(0, a - b)
        }
        ;
        c.$72 = function() {
            var a = this
              , c = {}
              , d = this.$49.getAudioStreamReportKeys()
              , e = 0
              , f = 0
              , g = 0;
            d.forEach(function(c) {
                c = a.$49.getMetricStats(c, b("FBRTCMediaMetricsConst").AUDIO_BYTES_SENT);
                c != null && (e += c.current,
                f += c.current - c.first,
                g += c.updatedTime - c.startedTime)
            });
            g > 0 && (c.ube_avg = Math.round(f * 8e3 / g));
            c.bytes = e;
            c.plost = this.$87(b("FBRTCMediaMetricsConst").AUDIO_PACKETS_SENT_LOST);
            c.psent = this.$87(b("FBRTCMediaMetricsConst").AUDIO_PACKETS_SENT);
            var h = 0
              , i = 0
              , j = null
              , k = null;
            d.forEach(function(c) {
                c = a.$49.getMetricStats(c, b("FBRTCMediaMetricsConst").AUDIO_RTT_SENT);
                c && (i += c.count,
                h += c.total,
                j = j == null ? c.min : Math.min(j, c.min),
                k = k == null ? c.max : Math.max(k, c.max))
            });
            i > 0 && (c.avgrtt = Math.round(h / i),
            c.maxrtt = k,
            c.minrtt = j);
            this.$10 && (c.ice_g0 = this.$10);
            this.$12 && (c.ice = this.$12);
            this.$48 != null && this.$48 !== "" && (c.codec = {
                www: this.$48
            });
            return c
        }
        ;
        c.$73 = function() {
            var a = this, c, d = {}, e = this.$49.getAudioStreamReportKeys();
            d.jbd = this.$87((c = b("FBRTCMediaMetricsConst")).AUDIO_JITTER_BUFFER_DELAY, 1e3);
            d.jbec = this.$87(c.AUDIO_JITTER_BUFFER_EMITTED_COUNT);
            var f = 0
              , g = 0
              , h = 0
              , i = 0
              , k = 0;
            e.forEach(function(d) {
                var c, e = a.$49.getMetricStats(d, (c = b("FBRTCMediaMetricsConst")).DECODING_PLC), j = a.$49.getMetricStats(d, c.DECODING_PLC_CNG), l = a.$49.getMetricStats(d, c.DECODING_CNG), m = a.$49.getMetricStats(d, c.DECODING_NORMAL);
                d = a.$49.getMetricStats(d, c.DECODING_NETEQ_CALL);
                l != null && m != null && e != null && j != null && d != null && (f += e.current,
                g += j.current,
                h += l.current,
                i += m.current,
                k += d.current)
            });
            d.dec_plc = f;
            d.dec_plc_cng = g;
            d.dec_cng = h;
            d.dec_normal = i;
            d.neteq_calls = k;
            var l = this.$89();
            d.rx_sum_lvl = Math.round(l.levelSum);
            d.taulc = Math.round(l.count);
            d.fecpd = this.$87(c.AUDIO_FEC_PACKETS_DISCARDED);
            d.fecpr = this.$87(c.AUDIO_FEC_PACKETS_RECEIVED);
            var m = 0;
            e.forEach(function(c) {
                c = a.$49.getMetricStats(c, b("FBRTCMediaMetricsConst").AUDIO_BYTES_RECEIVED);
                c && (m += c.current)
            });
            d.bytes = m;
            var n = 0
              , o = 0;
            e.forEach(function(c) {
                c = a.$49.getMetricStats(c, b("FBRTCMediaMetricsConst").AUDIO_BYTES_RECEIVED);
                if (c) {
                    var d = c.updatedTime - c.startedTime;
                    d > 0 && (n += c.current - c.first,
                    o += d)
                }
            });
            o > 0 && (d.dbe_avg = Math.round(n * 8e3 / o));
            var p = 0;
            e.forEach(function(c) {
                c = a.$49.getMetricStats(c, b("FBRTCMediaMetricsConst").AUDIO_PACKETS_RECEIVED_LOST);
                c && (p += c.current)
            });
            d.plost = p;
            var q = 0, r, s, t, u = 0, v = 0;
            e.forEach(function(c) {
                var d = a.$49.getMetricStats(c, b("FBRTCMediaMetricsConst").AUDIO_PACKETS_RECEIVED)
                  , e = a.$49.getMetricStats(c, b("FBRTCMediaMetricsConst").AUDIO_RTT_RECEIVED);
                c = a.$49.getMetricStats(c, b("FBRTCMediaMetricsConst").AUDIO_RECEIVE_TOTAL_ENERGY);
                c != null && (u += c.current,
                v += c.updatedTime - c.startedTime);
                d != null && (q += d.current,
                e != null && e.mean != null && (r = r == null ? d.current * e.mean : r + d.current * e.mean,
                t = t == null ? e.max : Math.max(t, e.max),
                s = s == null ? e.min : Math.min(s, e.min)))
            });
            d.taue = Math.round(u * j);
            d.taut = Math.round(v);
            q > 0 && r != null && (d.avgrtt = Math.round(r / q),
            d.maxrtt = t,
            d.minrtt = s);
            d.precv = q;
            this.$11 && (d.ice_g0 = this.$11);
            this.$13 && (d.ice = this.$13);
            return d
        }
        ;
        c.$74 = function() {
            var a = {};
            this.$34 != null && (a.end_call_reason_string = b("FBRTCConstants").callEndReasonString(this.$34),
            this.$35 !== null && (a.end_call_subreason_string = this.$35),
            a.remote_ended = this.$36,
            a.end_ctd = this.$38);
            this.$39 && (a.conn_type = this.$39);
            return a
        }
        ;
        c.$75 = function() {
            var a;
            a = {
                ch: null,
                cw: null,
                ah: null,
                aw: null,
                ehist: this.getEhist(),
                eipxl: null,
                ename: this.$45,
                eopxl: null,
                fcap: this.$85((a = b("FBRTCMediaMetricsConst")).VIDEO_CAPTURE_FRAME_COUNT),
                eqps: this.$85(a.OUTBOUND_QP),
                frames: this.$85(a.FRAMES_ENCODED),
                kframes: this.$53,
                fcsn: this.$85(a.FRAMES_SENT),
                histResScale: null,
                psent: this.$85(a.VIDEO_PKTS_SENT),
                plost: this.$85(a.VIDEO_PKTS_SEND_LOST),
                ss: {
                    avbr: null,
                    avbw: this.$84(a.VIDEOBWE_SEND_BANDWIDTH, 1, "screen"),
                    debug: {
                        debugFPS: null,
                        debuglastUpdate: null,
                        debugtracktimestamp: null
                    },
                    dur: null,
                    eiframes: null,
                    eipxl: null,
                    eopxl: null,
                    eqps: this.$85(a.OUTBOUND_QP, 1, "screen"),
                    frames: this.$85(a.FRAMES_ENCODED, 1, "screen")
                },
                sim_l_chg: this.$85(a.SIMULCAST_LAYER_CHANGES, 1),
                tet: this.$85(a.VIDEO_TOTAL_ENCODE_TIME, 1e3),
                tpsd: this.$85(a.VIDEO_TOTAL_PACKET_SEND_DELAY, 1e3),
                video_device: this.$46
            };
            return {
                sender: this.$91(a),
                receiver: this.$92(),
                ld: this.$31,
                rd: this.$32,
                bwe: this.$93()
            }
        }
        ;
        c.$77 = function() {
            var a, b = this.$90() / 1e3;
            if (b <= 0)
                return;
            a = ((a = this.$51) != null ? a : 0) + ((a = this.$52) != null ? a : 0);
            a = Math.round(100 * (a / b));
            return {
                cpu: {
                    proc: {
                        avg: a
                    }
                }
            }
        }
        ;
        c.$89 = function() {
            var a = this
              , c = this.$49.getAudioStreamReportKeys();
            c = c.reduce(function(c, d) {
                var e = a.$49.getMetricStats(d, b("FBRTCMediaMetricsConst").AUDIO_RECEIVE_LOG_LEVEL);
                d = a.$49.getMetricStats(d, b("FBRTCMediaMetricsConst").AUDIO_RECEIVE_LOG_LEVEL_COUNT);
                return !e || !d ? c : {
                    count: c.count + d.current,
                    levelSum: c.levelSum + e.current
                }
            }, {
                count: 0,
                levelSum: 0
            });
            return c
        }
        ;
        c.$93 = function() {
            var a = this
              , c = {
                avg_enc_bitrate: this.$94(),
                avg_send_bw: this.$95(),
                avg_trans_bitrate: null,
                avg_retrans_bitrate: null
            }
              , d = this.$49.getVideoStreamReportKeys();
            d.some(function(d) {
                var e = a.$49.getVideoMetric(d, b("FBRTCMediaMetricsConst").VIDEOBWE_TRANSMIT_BITRATE);
                d = a.$49.getVideoMetric(d, b("FBRTCMediaMetricsConst").VIDEOBWE_RETRANSMIT_BITRATE);
                if (e && d) {
                    c.avg_trans_bitrate = e.mean;
                    c.avg_retrans_bitrate = d.mean;
                    return !0
                }
                return !1
            });
            return c
        }
        ;
        c.$94 = function() {
            var a = this
              , c = this.$49.getVideoStreamReportKeys()
              , d = null;
            c.some(function(c) {
                c = a.$49.getVideoMetric(c, b("FBRTCMediaMetricsConst").VIDEO_BYTES_SENT);
                if (c) {
                    var e = c.current - c.first;
                    c = c.updatedTime - c.startedTime;
                    if (c > 0) {
                        d = e * 8 / c * 1e3;
                        return !0
                    }
                }
                return !1
            });
            return d
        }
        ;
        c.$95 = function() {
            var a = this
              , c = this.$49.getVideoStreamReportKeys()
              , d = null;
            c.some(function(c) {
                d = a.$49.getVideoMetric(c, b("FBRTCMediaMetricsConst").VIDEOBWE_SEND_BANDWIDTH);
                return d ? !0 : !1
            });
            d && (d = d.mean);
            return d
        }
        ;
        c.$82 = function() {
            var a = this.$96(u, C, x)
              , b = this.$97(v, D, x)
              , c = this.$97(v, E, x);
            return {
                audio: a,
                screen: b,
                video: c
            }
        }
        ;
        c.$96 = function(a, c, d) {
            var e = this
              , f = {};
            a.forEach(function(a) {
                var g, h = a.field, i = a.key;
                a = a.scale;
                var j = [];
                g = (g = e.$49.getMetricStats(c, b("FBRTCMediaMetricTracker").getAvgMediaKey(i, d))) == null ? void 0 : g.current;
                k.forEach(function(a) {
                    a = (a = (a = e.$49.getMetricStats(c, b("FBRTCMediaMetricTracker").getPercentMediaKey(i, d, a))) == null ? void 0 : a.current) != null ? a : 0;
                    j.push(a)
                });
                g != null && (f[h] = e.$98(g, j, a, k))
            });
            return Object.keys(f).length > 0 ? f : null
        }
        ;
        c.$97 = function(a, c, d) {
            var e = this
              , f = {};
            a.forEach(function(a) {
                var g, h = a.field, i = a.key;
                a = a.scale;
                var j = [];
                g = (g = e.$49.getVideoMetric(c, b("FBRTCMediaMetricTracker").getAvgMediaKey(i, d))) == null ? void 0 : g.current;
                k.forEach(function(a) {
                    a = (a = (a = e.$49.getVideoMetric(c, b("FBRTCMediaMetricTracker").getPercentMediaKey(i, d, a))) == null ? void 0 : a.current) != null ? a : 0;
                    j.push(a)
                });
                g != null && (f[h] = e.$98(g, j, a, k))
            });
            return Object.keys(f).length > 0 ? f : null
        }
        ;
        c.$81 = function() {
            return this.$96(t, w, x)
        }
        ;
        c.$78 = function() {
            var a = this
              , b = {
                audio: {
                    avg: {},
                    max: {},
                    min: {}
                },
                video: {
                    avg: {},
                    max: {},
                    min: {}
                }
            }
              , c = this.$49.getAudioStreamReportKeys()
              , d = this.$49.getVideoStreamReportKeys();
            q.forEach(function(d) {
                var e = d.field
                  , f = d.key;
                d = d.scale;
                f = a.$99(f, c, d, !0, k);
                f != null && (b.audio.avg[e] = f.avg,
                b.audio.max[e] = f.max,
                b.audio.min[e] = f.min)
            });
            r.forEach(function(c) {
                var e = c.field
                  , f = c.key;
                c = c.scale;
                f = a.$99(f, d, c, !1, k);
                f != null && (b.video.avg[e] = f.avg,
                b.video.max[e] = f.max,
                b.video.min[e] = f.min)
            });
            s.forEach(function(c) {
                var e = c.field
                  , f = c.key;
                c = c.scale;
                f = a.$99(f, d, c, !1, []);
                f != null && (b.video.avg[e] = f.avg.avg,
                b.video.max[e] = f.max.avg,
                b.video.min[e] = f.min.avg)
            });
            return b
        }
        ;
        c.$100 = function(a, c, d, e, f) {
            var g = this
              , h = 0
              , i = new Array(f.length).fill(0)
              , j = 0
              , k = 0;
            c.forEach(function(c) {
                var d = null
                  , l = [];
                if (e) {
                    var m;
                    j = g.$49.getAudioStreamDuration(c, b("FBRTCMediaMetricTracker").getAvgMediaKey(a, z));
                    d = (m = g.$49.getMetricStats(c, b("FBRTCMediaMetricTracker").getAvgMediaKey(a, z))) == null ? void 0 : m.current;
                    f.forEach(function(d) {
                        d = (d = g.$49.getMetricStats(c, b("FBRTCMediaMetricTracker").getPercentMediaKey(a, z, d))) == null ? void 0 : d.current;
                        l.push(d)
                    })
                } else {
                    j = g.$49.getVideoStreamDuration(c, b("FBRTCMediaMetricTracker").getAvgMediaKey(a, z));
                    d = (m = g.$49.getVideoMetric(c, b("FBRTCMediaMetricTracker").getAvgMediaKey(a, z))) == null ? void 0 : m.current;
                    f.forEach(function(d) {
                        d = (d = g.$49.getVideoMetric(c, b("FBRTCMediaMetricTracker").getPercentMediaKey(a, z, d))) == null ? void 0 : d.current;
                        l.push(d)
                    })
                }
                d != null && (h += d * j,
                i = l.map(function(a, b) {
                    return a != null ? a * j + i[b] : i[b]
                }),
                k += j)
            });
            if (k === 0)
                return null;
            c = h / k;
            var l = i.map(function(a) {
                return a / k
            });
            return this.$98(c, l, d, f)
        }
        ;
        c.$99 = function(a, c, d, e, f) {
            var g = this
              , h = 0
              , i = new Array(f.length).fill(0)
              , j = 0
              , k = new Array(f.length).fill(0)
              , l = 0
              , m = new Array(f.length).fill(0)
              , n = 0
              , o = 0;
            c.forEach(function(c) {
                var d = null
                  , p = [];
                if (e) {
                    var q;
                    n = g.$49.getAudioStreamDuration(c, b("FBRTCMediaMetricTracker").getAvgMediaKey(a, x));
                    d = (q = g.$49.getMetricStats(c, b("FBRTCMediaMetricTracker").getAvgMediaKey(a, x))) == null ? void 0 : q.current;
                    f.forEach(function(d) {
                        d = (d = g.$49.getMetricStats(c, b("FBRTCMediaMetricTracker").getPercentMediaKey(a, x, d))) == null ? void 0 : d.current;
                        p.push(d)
                    })
                } else {
                    n = g.$49.getVideoStreamDuration(c, b("FBRTCMediaMetricTracker").getAvgMediaKey(a, x));
                    d = (q = g.$49.getVideoMetric(c, b("FBRTCMediaMetricTracker").getAvgMediaKey(a, x))) == null ? void 0 : q.current;
                    f.forEach(function(d) {
                        d = (d = g.$49.getVideoMetric(c, b("FBRTCMediaMetricTracker").getPercentMediaKey(a, x, d))) == null ? void 0 : d.current;
                        p.push(d)
                    })
                }
                d != null && n > 0 && (h += d * n,
                i = p.map(function(a, b) {
                    return a != null ? a * n + i[b] : i[b]
                }),
                o === 0 ? (j = d,
                l = d,
                k = p,
                m = p) : d > j ? (j = d,
                k = p) : d < l && (l = d,
                m = p),
                o += n)
            });
            if (o === 0)
                return null;
            c = h / o;
            var p = i.map(function(a) {
                return a / o
            });
            c = {
                avg: this.$98(c, p, d, f),
                min: this.$98(l, m, d, f),
                max: this.$98(j, k, d, f)
            };
            return c
        }
        ;
        c.$98 = function(a, b, c, d) {
            var e = {};
            e.avg = Math.round(a * c);
            d.forEach(function(a, d) {
                a = "p".concat(String(a));
                e[a] = Math.round(b[d] * c)
            });
            return e
        }
        ;
        c.$80 = function() {
            var a = this
              , b = {
                audio: {},
                video: {}
            }
              , c = this.$49.getAudioStreamReportKeys()
              , d = this.$49.getVideoStreamReportKeys()
              , e = !1;
            q.forEach(function(d) {
                var f = d.field
                  , g = d.key;
                d = d.scale;
                g = a.$100(g, c, d, !0, k);
                g != null && (b.audio[f] = g,
                e = !0)
            });
            r.forEach(function(c) {
                var f = c.field
                  , g = c.key;
                c = c.scale;
                g = a.$100(g, d, c, !1, k);
                g != null && (b.video[f] = g,
                e = !0)
            });
            s.forEach(function(c) {
                var f = c.field
                  , g = c.key;
                c = c.scale;
                g = a.$100(g, d, c, !1, []);
                g != null && (b.video[f] = g.avg,
                e = !0)
            });
            return !e ? null : b
        }
        ;
        c.$79 = function() {
            var a = this
              , c = this.$49.getAudioStreamReportKeys()
              , d = this.$49.getVideoStreamReportKeys();
            if (!c.includes(A) && !d.includes(B))
                return null;
            var e = {
                audio: {},
                video: {}
            };
            q.forEach(function(c) {
                var d, f = c.field, g = c.key;
                c = c.scale;
                var h = [];
                d = (d = a.$49.getMetricStats(A, b("FBRTCMediaMetricTracker").getAvgMediaKey(g, y))) == null ? void 0 : d.current;
                k.forEach(function(c) {
                    c = (c = (c = a.$49.getMetricStats(A, b("FBRTCMediaMetricTracker").getPercentMediaKey(g, y, c))) == null ? void 0 : c.current) != null ? c : 0;
                    h.push(c)
                });
                d != null && (e.audio[f] = a.$98(d, h, c, k))
            });
            r.forEach(function(c) {
                var d, f = c.field, g = c.key;
                c = c.scale;
                var h = [];
                d = (d = a.$49.getVideoMetric(B, b("FBRTCMediaMetricTracker").getAvgMediaKey(g, y))) == null ? void 0 : d.current;
                k.forEach(function(c) {
                    c = (c = (c = a.$49.getVideoMetric(B, b("FBRTCMediaMetricTracker").getPercentMediaKey(g, y, c))) == null ? void 0 : c.current) != null ? c : 0;
                    h.push(c)
                });
                d != null && (e.video[f] = a.$98(d, h, c, k))
            });
            s.forEach(function(c) {
                var d = c.field
                  , f = c.key;
                c = c.scale;
                var g = [];
                f = (f = a.$49.getVideoMetric(B, b("FBRTCMediaMetricTracker").getAvgMediaKey(f, y))) == null ? void 0 : f.current;
                f != null && (e.video[d] = a.$98(f, g, c, []).avg)
            });
            return e
        }
        ;
        c.$91 = function(a) {
            var c = this
              , d = this.$49.getVideoStreamReportKeys()
              , e = new Array(5).fill(0)
              , f = 0;
            d.forEach(function(a) {
                a = c.$49.getHistResScale(a);
                a && (f += 1,
                a.histogram.forEach(function(a, b) {
                    e[b] += a
                }))
            });
            a.histResScale = f === 0 ? null : e;
            d.reverse().some(function(d) {
                var e, f = c.$49.getVideoMetric(d, (e = b("FBRTCMediaMetricsConst")).VIDEO_CAPTURE_WIDTH), g = c.$49.getVideoMetric(d, e.VIDEO_CAPTURE_HEIGHT), h = c.$49.getVideoMetric(d, e.VIDEO_ENCODED_WIDTH);
                d = c.$49.getVideoMetric(d, e.VIDEO_ENCODED_HEIGHT);
                f && g && (a.cw = f.current,
                a.ch = g.current);
                if (h && d) {
                    a.aw = h.current;
                    a.ah = d.current;
                    return !0
                }
                return !1
            });
            this.$22[b("FBRTCLogger").Key.SCREEN_DURATION] != null && typeof this.$22[b("FBRTCLogger").Key.SCREEN_DURATION] === "number" && (a.ss.dur = this.$22[b("FBRTCLogger").Key.SCREEN_DURATION]);
            d = this.$85(b("FBRTCMediaMetricsConst").VIDEO_BYTES_SENT, 1, "screen");
            d != null && a.ss.dur != null && a.ss.dur > 0 && (a.ss.avbr = Math.round(1e3 * 8 * d / a.ss.dur));
            d = this.$85(b("FBRTCMediaMetricsConst").VIDEO_SUM_ENCODED_PIXEL, 1, "screen");
            var g = this.$85(b("FBRTCMediaMetricsConst").FRAMES_ENCODED, 1, "screen");
            d != null && g != null && g > 0 && (a.ss.eopxl = Math.round(d / g));
            d = this.$85(b("FBRTCMediaMetricsConst").VIDEO_SUM_CAPTURE_PIXEL, 1, "screen");
            g = this.$85(b("FBRTCMediaMetricsConst").VIDEO_CAPTURE_FRAME_COUNT, 1, "screen");
            d != null && g != null && g > 0 && (a.ss.eiframes = g,
            a.ss.eipxl = Math.round(d / g));
            d = this.$86(b("FBRTCMediaMetricsConst").VIDEO_DEBUGFPS, "screen");
            d != null && (a.ss.debug.debugFPS = d);
            g = this.$86(b("FBRTCMediaMetricsConst").VIDEO_DEBUGLASTUPDATE, "screen");
            g != null && (a.ss.debug.debuglastUpdate = g);
            d = this.$86(b("FBRTCMediaMetricsConst").VIDEO_DEBUGTRACKTIMESTAMP, "screen");
            d != null && (a.ss.debug.debugtracktimestamp = d);
            g = this.$85(b("FBRTCMediaMetricsConst").VIDEO_SUM_ENCODED_PIXEL, 1);
            d = this.$85(b("FBRTCMediaMetricsConst").FRAMES_ENCODED, 1);
            g != null && d != null && d > 0 && (a.eopxl = Math.round(g / d));
            g = this.$85(b("FBRTCMediaMetricsConst").VIDEO_SUM_CAPTURE_PIXEL, 1);
            d = this.$85(b("FBRTCMediaMetricsConst").VIDEO_CAPTURE_FRAME_COUNT, 1);
            g != null && d != null && d > 0 && (a.eipxl = Math.round(g / d));
            return a
        }
        ;
        c.$92 = function() {
            var a = this
              , c = this.$49.getVideoStreamReportKeys()
              , d = 0
              , e = 0
              , f = 0
              , g = 0
              , h = 0
              , i = 0
              , j = 0
              , k = 0;
            c.forEach(function(c) {
                var l = a.$49.getVideoMetric(c, b("FBRTCMediaMetricsConst").VIDEO_PKTS_RECEIVED)
                  , m = a.$49.getVideoMetric(c, b("FBRTCMediaMetricsConst").VIDEO_PKTS_RECV_LOST);
                l && m && (f += l.current,
                g += m.current);
                l = a.$49.getVideoMetric(c, b("FBRTCMediaMetricsConst").VIDEO_BYTES_RECEIVED);
                l && (d += l.current - l.first);
                m = a.$49.getVideoMetric(c, b("FBRTCMediaMetricsConst").FRAMES_DECODED);
                m && (h += m.current);
                l = a.$49.getVideoMetric(c, b("FBRTCMediaMetricsConst").KEYFRAMES_DECODED);
                l && (i += l.current);
                m = a.$49.getVideoMetric(c, b("FBRTCMediaMetricsConst").PICTURE_LOSS_INDICAION_RECEIVED);
                m && (j += m.current);
                l = a.$49.getVideoMetric(c, b("FBRTCMediaMetricsConst").FULL_INTRA_REQUEST_RECEIVED);
                l && (k += l.current);
                m = a.$49.getVideoMetric(c, b("FBRTCMediaMetricsConst").VIDEO_DECODE_TIME);
                m && (e += m.current)
            });
            var l = {
                jtkey: i,
                pli: j,
                fir: k,
                dec_bytes: d,
                dec_frame: h,
                dec_time: this.$50 ? Math.round(this.$50) : null,
                dec_time_all_streams: Math.round(e),
                dname: this.$44,
                dpxl: null,
                frd: h,
                frcnt: null,
                jtasb: null,
                precv: f,
                plost: g,
                qps: this.$85(b("FBRTCMediaMetricsConst").INBOUND_QP),
                rh: null,
                rw: null,
                tdt: this.$85(b("FBRTCMediaMetricsConst").VIDEO_TOTAL_DECODE_TIME, 1e3),
                jbd: null,
                jbec: null,
                recjbl: null,
                e2el: null,
                av: null,
                avabs: null,
                avoob: null
            }
              , m = this.$85(b("FBRTCMediaMetricsConst").VIDEO_JITTER_BUFFER_DELAY, 1e3)
              , n = this.$85(b("FBRTCMediaMetricsConst").VIDEO_JITTER_BUFFER_EMITTED_COUNT);
            l.jbd = m;
            l.jbec = n;
            m != null && n != null && n > 0 && (l.recjbl = Math.round(m / n));
            var o = 0
              , p = 0
              , q = 0
              , r = 0
              , s = 0;
            c.forEach(function(c) {
                var d, e = a.$49.getVideoMetric(c, (d = b("FBRTCMediaMetricsConst")).AV_SYNC), f = a.$49.getVideoMetric(c, d.AV_SYNC_ABS), g = a.$49.getVideoMetric(c, d.AV_SYNC_OOB), h = a.$49.getVideoMetric(c, d.AV_SYNC_COUNT);
                c = a.$49.getVideoMetric(c, d.FRAMES_DECODED);
                c != null && e != null && f != null && e.mean != null && f.mean != null && (q += c.current,
                o += e.mean * c.current,
                p += f.mean * c.current);
                g != null && h != null && (s += h.current,
                r += g.current)
            });
            q > 0 && (l.av = Math.round(o / q),
            l.avabs = Math.round(p / q));
            s > 0 && (l.avoob = Math.round(r * 1e4 / s));
            var t = 0
              , u = 0;
            c.forEach(function(c) {
                var d = a.$49.getVideoMetric(c, b("FBRTCMediaMetricsConst").VIDEO_E2E_LATENCY);
                c = a.$49.getVideoMetric(c, b("FBRTCMediaMetricsConst").FRAMES_DECODED);
                d != null && d.mean != null && c != null && (t += c.current,
                u += d.mean * c.current)
            });
            t > 0 && (l.e2el = Math.round(u / t));
            l.frcnt = c.reduce(function(c, d) {
                d = a.$49.getVideoMetric(d, b("FBRTCMediaMetricsConst").VIDEO_FREEZE_COUNT);
                return c + (d ? d.current : 0)
            }, 0);
            l.frdur = c.reduce(function(c, d) {
                d = a.$49.getVideoMetric(d, b("FBRTCMediaMetricsConst").VIDEO_FREEZE_DURATION);
                return c + (d ? d.current : 0)
            }, 0);
            l.frdur = Math.round(l.frdur);
            l.pact = c.reduce(function(c, d) {
                d = a.$49.getVideoMetric(d, b("FBRTCMediaMetricsConst").VIDEO_PAUSE_COUNT);
                return c + (d ? d.current : 0)
            }, 0);
            l.padur = c.reduce(function(c, d) {
                d = a.$49.getVideoMetric(d, b("FBRTCMediaMetricsConst").VIDEO_PAUSE_DURATION);
                return c + (d ? d.current : 0)
            }, 0);
            l.padur = Math.round(l.padur);
            var v = 0;
            c.forEach(function(c) {
                var d = a.$49.getVideoMetric(c, b("FBRTCMediaMetricsConst").VIDEO_DECODED_HEIGHT);
                c = a.$49.getVideoMetric(c, b("FBRTCMediaMetricsConst").VIDEO_DECODED_WIDTH);
                c && d && c.updatedTime > v && (l.rw = c.current,
                l.rh = d.current,
                v = c.updatedTime)
            });
            l.jtasb = c.reduce(function(c, d) {
                d = a.$49.getVideoMetric(d, b("FBRTCMediaMetricsConst").FRAMES_RECEIVED);
                return c + (d ? d.current : 0)
            }, 0);
            m = this.$85(b("FBRTCMediaMetricsConst").VIDEO_SUM_DECODED_PIXEL, 1);
            n = this.$85(b("FBRTCMediaMetricsConst").FRAMES_DECODED, 1);
            m != null && n != null && n > 0 && (l.dpxl = Math.round(m / n));
            return l
        }
        ;
        c.$101 = function() {
            return new Date().valueOf() - this.$15
        }
        ;
        c.$59 = function() {
            var a = (h || (h = b("performanceNow")))() - this.$20;
            return Math.floor(this.$16 + a)
        }
        ;
        c.$60 = function(a) {
            if (this.$6[a])
                return;
            this.$6[a] = this.$101();
            this.$7[a] = this.$59()
        }
        ;
        c.$67 = function(a) {
            if (this.$8[a])
                return;
            this.$8[a] = this.$101()
        }
        ;
        c.$61 = function(a) {
            if (this.$9[a])
                return;
            this.$9[a] = this.$101()
        }
        ;
        c.$64 = function(a) {
            if (this.$14[a])
                return;
            this.$14[a] = this.$101()
        }
        ;
        c.setDeviceCharged = function(a) {
            this.$42 !== !0 && (this.$42 = a)
        }
        ;
        c.$62 = function(a, b, c) {
            a ? this.$60(c) : this.$60(b)
        }
        ;
        c.$58 = function() {
            this.$17 = new Date().valueOf()
        }
        ;
        c.$54 = function() {
            var a = b("UserAgentData").browserName
              , c = b("UserAgentData").platformName;
            window.navigator.userAgent.toLowerCase().includes("mobile") && (c += " Mobile",
            a === "Chrome" && (a = "Mobile " + a));
            return {
                device: b("UserAgentData").deviceName,
                os: c,
                os_version: b("UserAgentData").platformFullVersion,
                browser: a,
                browser_version: b("UserAgentData").browserFullVersion,
                screen_height: window.screen.availHeight,
                screen_width: window.screen.availWidth,
                user_agent: window.navigator.userAgent
            }
        }
        ;
        c.$55 = function() {
            window.navigator.connection != null && window.navigator.connection.effectiveType != null && this.addExtraInfo(b("FBRTCLogger").Key.CONNECTION_EFFECTIVE_TYPE, window.navigator.connection.effectiveType)
        }
        ;
        c.$57 = function() {
            var a = b("WebPerformanceDeviceInfo").getMobileYearClass();
            a != null && a > 0 ? this.addExtraInfo(b("FBRTCLogger").Key.YEAR_CLASS, a) : this.addExtraInfo(b("FBRTCLogger").Key.DESKTOP_DEVICE_CLASS, b("WebPerformanceDeviceInfo").getDeviceLevel())
        }
        ;
        c.$56 = function() {
            navigator.hardwareConcurrency != null && this.addExtraInfo(b("FBRTCLogger").Key.CPU_CORES, navigator.hardwareConcurrency),
            window.navigator.deviceMemory != null && this.addExtraInfo(b("FBRTCLogger").Key.DEVICE_MEMORY, window.navigator.deviceMemory),
            this.addExtraInfo(b("FBRTCLogger").Key.DEVICE_PIXEL_RATIO, window.devicePixelRatio)
        }
        ;
        c.getCallDuration = function() {
            var a = b("gkx")("707989");
            return this.$90({
                assumeOngoing: a
            })
        }
        ;
        c.getConnectedStartTime = function() {
            return this.$6[l.CALL_CONNECTED] ? this.$6[l.CALL_CONNECTED] + this.$15 : 0
        }
        ;
        c.getCurrentTimeFromCallConnected = function() {
            var a = this.$7[l.CALL_CONNECTED];
            return this.$59() - a
        }
        ;
        c.getMediaMetricTracker = function() {
            return this.$49
        }
        ;
        c.getEndCallReason = function() {
            return this.$34 != null ? b("FBRTCConstants").callEndReasonString(this.$34) : "Unknown"
        }
        ;
        c.getRelayIP = function() {
            return this.$40
        }
        ;
        c.setRelayIP = function(a) {
            this.$40 = a
        }
        ;
        c.getClientVersion = function() {
            return this.$5
        }
        ;
        c.getHeartbeatData = function() {
            return this.$68()
        }
        ;
        c.wasCallEnded = function() {
            return this.$6[l.CALL_ENDED] != null
        }
        ;
        return a
    }();
    e.exports = c;
    c.CANONICAL_NULL_SUMMARY = Object.freeze(c.nullSummary());
    c.OLDEST_SUPPORTED_SUMMARY_VERSION = 19;
    c.CURRENT_SUMMARY_VERSION = 24;
    c.REPORT_KEY = "reportID"
}
), null);
__d("FBRTCCallSummaryStore", ["CacheStorage", "FBLogger", "FBRTCCallSummary", "FBRTCLogger", "RTWebUserActionLogger", "areEqual", "setTimeout"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = "localstorage", i = "RTC_CALL_SUMMARY_", j = "summary", k = 2e3, l = 3, m = 3 * 60 * 1e3, n = null;
    a = function() {
        a.getInstance = function() {
            n || (n = new a());
            return n
        }
        ;
        function a() {
            this.$1 = new (b("CacheStorage"))(h,i),
            this.$2 = b("FBRTCLogger").getInstance()
        }
        var c = a.prototype;
        c.storeCallSummary = function(a, c, d) {
            if (d.isNull()) {
                b("RTWebUserActionLogger").logError({
                    errorDomain: "FBRTCCallSummaryStore_storeCallSummary",
                    errorType: "FBRTCCallSummaryStore Storing invalid FBRTCCallSummary!",
                    callID: c,
                    userID: a
                });
                b("FBLogger")("rtweb").mustfix("Storing invalid FBRTCCallSummary!");
                return
            }
            var e = this;
            this.$3(function(b) {
                b[a] || (b[a] = {});
                var f = b[a][c];
                if (f) {
                    f = e.$4(f);
                    if (f && f.getLastUpdatedTime() > d.getLastUpdatedTime()) {
                        e.$2.logToConsole("Outdated summaries");
                        return null
                    }
                }
                b[a][c] = e.$5(d);
                return b
            }, e.$2.logError.bind(e.$2, a, c))
        }
        ;
        c.retrieveCallSummary = function(a, b) {
            var c = this.getCallSummaries()
              , d = null;
            c[a] && (d = c[a][b]);
            if (d)
                return this.$4(d);
            else
                return null
        }
        ;
        c.removeCallSummary = function(a, b) {
            this.removeCallSummaries([{
                peerID: a,
                callID: b
            }])
        }
        ;
        c.removeCallSummaries = function(a) {
            var b = this;
            this.$3(function(c) {
                var d = a.length;
                for (var e = 0; e < d; e++) {
                    var f = a[e].peerID
                      , g = a[e].callID;
                    c[f] && c[f][g] && (delete c[f][g],
                    b.$6(c[f]) && delete c[f])
                }
                return c
            }, this.$2.logError.bind(this.$2, null, null))
        }
        ;
        c.getLoggableSummaries = function() {
            var a = this.getCallSummaries()
              , b = [];
            for (var c in a)
                if (Object.prototype.hasOwnProperty.call(a, c))
                    for (var d in a[c])
                        if (Object.prototype.hasOwnProperty.call(a[c], d)) {
                            var e = this.$4(a[c][d], m);
                            e && b.push(e)
                        }
            return b
        }
        ;
        c.$6 = function(a) {
            for (var b in a)
                if (Object.prototype.hasOwnProperty.call(a, b))
                    return !1;
            return !0
        }
        ;
        c.$5 = function(a) {
            a = {
                __t: Date.now(),
                __d: a.toJsonString()
            };
            return a
        }
        ;
        c.$4 = function(a, c) {
            return a && (!c || Date.now() - a.__t >= c) ? b("FBRTCCallSummary").fromJsonString(a.__d) : null
        }
        ;
        c.getCallSummaries = function() {
            var a = this.$1.get(j) || {};
            return a
        }
        ;
        c.$3 = function(a, c, d, e) {
            d === void 0 && (d = l);
            (d === void 0 || d === null) && (d = l);
            var f = this.getCallSummaries()
              , h = this.getCallSummaries();
            f = a(f);
            if (f === null)
                return;
            var i = this.getCallSummaries();
            if ((g || (g = b("areEqual")))(h, i))
                this.$1.set(j, f);
            else if (d > 0) {
                c("Retry lock");
                if (e) {
                    var m = this;
                    b("setTimeout")(function() {
                        m.$3(a, c, d - 1, !0)
                    }, k)
                } else
                    this.$3(a, c, d - 1, !0)
            } else
                c("Failed to lock")
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("ZenonDeviceInfoHelper", ["regeneratorRuntime"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = -1
      , h = !1
      , i = {
        getBatteryStats: function() {
            var a, c;
            return b("regeneratorRuntime").async(function(d) {
                while (1)
                    switch (d.prev = d.next) {
                    case 0:
                        d.next = 2;
                        return b("regeneratorRuntime").awrap(i.internalGetWindow().navigator.getBattery);
                    case 2:
                        a = d.sent;
                        if (!(typeof a !== "function")) {
                            d.next = 5;
                            break
                        }
                        return d.abrupt("return", {
                            level: g,
                            placeholder: !0,
                            wasCharged: !1
                        });
                    case 5:
                        d.next = 7;
                        return b("regeneratorRuntime").awrap(a.call(navigator));
                    case 7:
                        c = d.sent;
                        c.charging ? h = !0 : c.onchargingchange = function(a) {
                            a.target.charging && (h = !0),
                            a.target.onchargingchange = null
                        }
                        ;
                        return d.abrupt("return", {
                            level: c.level * 100,
                            placeholder: !1,
                            wasCharged: h
                        });
                    case 10:
                    case "end":
                        return d.stop()
                    }
            }, null, this)
        },
        internalGetWindow: function() {
            return window
        }
    };
    a = i;
    e.exports = a
}
), null);
__d("ZenonDeviceInfoUtils", ["UserAgentData"], (function(a, b, c, d, e, f) {
    "use strict";
    f.getDeviceSoftwareInfo = a;
    function a() {
        var a = b("UserAgentData").browserName
          , c = b("UserAgentData").platformName;
        window.navigator.userAgent.toLowerCase().includes("mobile") && (c += " Mobile",
        a === "Chrome" && (a = "Mobile " + a));
        window.external && window.external.pinPage && (a === "Chrome" && (a += " Edge"));
        return {
            browser: a,
            browser_version: b("UserAgentData").browserFullVersion,
            device: b("UserAgentData").deviceName,
            os: c,
            os_version: b("UserAgentData").platformFullVersion,
            screen_height: window.screen.availHeight,
            screen_width: window.screen.availWidth,
            user_agent: window.navigator.userAgent
        }
    }
}
), null);
__d("ZenonVCSTypes", ["$InternalEnum"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("$InternalEnum")({
        DIRECT_VIDEO: "direct_video",
        ESCALATED: "escalated",
        ESCALATION_DECLINED: "escalation_declined",
        MWS: "mws",
        VOIP: "voip"
    });
    f.ZenonCallType = a;
    c = b("$InternalEnum")({
        LL_BASIC: 1,
        LL_DEBUG: 2,
        LL_INFO: 4,
        LL_NIL: 0,
        LL_VERBOSE: 5,
        LL_WARNING: 3
    });
    f.ZenonUploadLogLevel = c
}
), null);
__d("ZenonCallSummary", ["regeneratorRuntime", "ChannelClientID", "FBRTCExperiment", "FBRTCLocalUploadLogLevel", "SiteData", "WebPerformanceDeviceInfo", "ZenonCallSummaryStore", "ZenonCallSummaryUploader", "ZenonDeviceInfoHelper", "ZenonDeviceInfoUtils", "ZenonDismissReason", "ZenonVCSTypes", "gkx", "performanceNow", "uuid"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = {
        PRESSED_ANSWER: "p_a"
    };
    function i(a) {
        var c = b("FBRTCExperiment").gen("rtweb_zenon_platform");
        c = c.getBool("use_zenon_platform", !1, !1);
        var d = b("FBRTCExperiment").gen("rpweb_zenon_platform_workplace");
        d = d.getBool("use_zenon_platform_wp", !1, !1);
        c = c || d;
        if ((a === "mw" || a === "mw++") && c)
            return "ZenonPlatform";
        d = b("gkx")("1341692");
        a = b("gkx")("1680228");
        return !d && !a ? "ZenonScotch" : "Old Codebase"
    }
    var j = 19
      , k = 24
      , l = {
        CALL_CONNECTED: "connected",
        CALL_ENDED: "ended",
        CALL_STARTED: "started",
        NETWORK_READY: "network_ready",
        PROC_JOIN_RESPONSE: "p_jresp",
        RECV_ANSWER: "r_a",
        RECV_ANSWER_ACK: "r_aack",
        RECV_JOIN_RESPONSE: "r_jresp",
        RECV_OFFER: "r_o",
        RECV_OFFER_ACK: "r_oack",
        RECV_OK: "r_ok",
        RECV_PRANSWER: "r_pr",
        RECV_RETRIED_ANSWER: "r_a2",
        RECV_RETRIED_ANSWER_ACK: "r_aack2",
        RECV_RETRIED_OFFER: "r_o2",
        RECV_RETRIED_OFFER_ACK: "r_oack2",
        RECV_RING_REQUEST: "r_rreq",
        SENT_ANSWER: "s_a",
        SENT_ANSWER_ACK: "s_aack",
        SENT_JOIN_REQUEST: "s_jreq",
        SENT_OFFER: "s_o",
        SENT_OFFER_ACK: "s_oack",
        SENT_OK: "s_ok",
        SENT_PRANSWER: "s_pr",
        SENT_RETRIED_ANSWER: "s_a2",
        SENT_RETRIED_ANSWER_ACK: "s_aack2",
        SENT_RETRIED_OFFER: "s_o2",
        SENT_RETRIED_OFFER_ACK: "s_oack2",
        SENT_RING_RESPONSE: "s_rresp"
    }
      , m = {
        BATTERY_END: "battery_end",
        BATTERY_START: "battery_start",
        DESKTOP_DEVICE_CLASS: "desktop_device_class",
        DEVICE_INFO: "device_info",
        INITIATED_BY_APP_ID: "initiated_by_app_id",
        INITIATED_BY_PAGE_ID: "initiated_by_page_id",
        MAX_CONCURRENT_CONNECTED_PARTICIPANTS: "max_concurrent_connected_participants",
        PEER_IS_MOBILE: "peer_is_mobile",
        RATING: "rating5",
        RATING_SHOWN: "rating_shown",
        SURVEY_CHOICE: "survey_choice",
        SURVEY_DETAILS: "survey_details",
        SURVEY_SHOWN: "survey_shown",
        YEAR_CLASS: "year_class"
    };
    a = function() {
        function a(a) {
            var c = a.callID
              , d = a.callTrigger
              , e = a.isCaller
              , f = a.isVideo
              , h = a.localCallID
              , j = a.peerID
              , l = a.protocol;
            a = a.uploadLogLevel;
            this.$25 = 0;
            this.$26 = 0;
            this.$31 = {};
            this.$32 = {};
            this.$33 = {};
            this.$34 = {};
            this.$35 = !1;
            this.$37 = 0;
            this.$38 = !1;
            this.$39 = {};
            this.$40 = {};
            this.$41 = {};
            this.$42 = {};
            this.$48 = {
                CoreAudioMetrics: {},
                DebugAudioMetrics: {
                    NetworkReceive: {}
                },
                extraInfo: {},
                receiver: {},
                sender: {},
                video: {}
            };
            this.$50 = {};
            this.$51 = {};
            this.$52 = "sfu";
            this.$54 = {};
            this.$1 = j;
            this.$2 = c;
            this.localCallID = (j = h) != null ? j : b("uuid")();
            this.$3 = b("ChannelClientID").getID();
            this.$5 = e;
            this.$4 = k;
            this.$8 = i(l);
            this.$6 = (c = a) != null ? c : b("FBRTCLocalUploadLogLevel").getLocalUploadLogLevel();
            this.$7 = d;
            this.$28 = new Date().valueOf();
            this.$9 = l !== "p2p" ? "mws" : l;
            this.$21 = null;
            this.$20 = null;
            this.$36 = this.$1 === "MW_PEER_ID";
            this.$16 = b("SiteData").push_phase;
            this.$9 === "p2p" ? this.setCallType(f ? b("ZenonVCSTypes").ZenonCallType.DIRECT_VIDEO : b("ZenonVCSTypes").ZenonCallType.VOIP) : this.setCallType(b("ZenonVCSTypes").ZenonCallType.MWS);
            this.$30 = (g || (g = b("performanceNow")))();
            this.$29 = 0;
            this.$27 = this.$30;
            this.$53 = 0;
            this.$54[m.DEVICE_INFO] = b("ZenonDeviceInfoUtils").getDeviceSoftwareInfo();
            this.updateBatteryStart();
            this.$56();
            this.$57()
        }
        a.$58 = function(a) {
            try {
                return JSON.parse(a)
            } catch (a) {
                return null
            }
        }
        ;
        a.fromJsonString = function(c) {
            var d;
            c = this.$58(c);
            if (c == null)
                return null;
            if (c.version < j)
                return null;
            if (!Object.prototype.hasOwnProperty.call(c, "peerID") || !Object.prototype.hasOwnProperty.call(c, "callID") || !Object.prototype.hasOwnProperty.call(c, "isCaller") || !Object.prototype.hasOwnProperty.call(c, "startTime") || !Object.prototype.hasOwnProperty.call(c, "trigger") || !Object.prototype.hasOwnProperty.call(c, "signalingTime") || !Object.prototype.hasOwnProperty.call(c, "lastUpdatedTime") || !Object.prototype.hasOwnProperty.call(c, "lastSerializedTime"))
                return null;
            var e = c.activeConn === "p2p" ? c.activeConn : "mw";
            e = new a({
                callID: c.callID,
                isCaller: c.isCaller,
                isVideo: c.callType === b("ZenonVCSTypes").ZenonCallType.DIRECT_VIDEO,
                localCallID: c.localCallID,
                peerID: c.peerID,
                protocol: e
            });
            e.$3 = c.deviceID;
            e.$4 = c.version;
            e.$6 = c.uploadLogLevel;
            e.$28 = c.startTime;
            e.$7 = c.trigger;
            e.$52 = c.mediaMode;
            e.$36 = c.isUsingMultiway;
            e.$35 = c.hasOfferInRingRequest;
            e.$37 = (d = c.renegotiationCmuRequestSent) != null ? d : 0;
            e.$8 = c.clientVersion;
            e.$31 = c.signalingTime;
            e.$17 = c.endCallReason;
            e.$18 = c.endCallSubreason;
            e.$19 = c.isRemoteEnded;
            e.$25 = c.lastUpdatedTime;
            e.$26 = c.lastSerializedTime;
            e.$11 = c.joinWithSID;
            e.$21 = (d = c.endIsConnected) != null ? d : null;
            e.$20 = (d = c.pcIsConnected) != null ? d : null;
            e.$38 = c.hasAnswerInJoinResponse;
            c.conferenceName != null && (e.$10 = c.conferenceName);
            c.escP2PCallID != null && (e.$12 = c.escP2PCallID);
            c.activeConn != null && (e.$9 = c.activeConn);
            c.serverInfoData != null && (e.$14 = c.serverInfoData);
            c.localVideoDuration != null && (e.$43 = c.localVideoDuration);
            c.remoteVideoDuration != null && (e.$44 = c.remoteVideoDuration);
            c.unsetOnRetrieve != null && (e.$24 = c.unsetOnRetrieve);
            c.openCount != null && (e.$53 = c.openCount);
            c.extraInfo && (e.$54 = c.extraInfo);
            c.gen0IceSentCount && (e.$39 = c.gen0IceSentCount);
            c.gen0IceReceivedCount && (e.$40 = c.gen0IceReceivedCount);
            c.iceConnections && (e.$50 = c.iceConnections);
            c.iceSentCount && (e.$41 = c.iceSentCount);
            c.iceReceivedCount && (e.$42 = c.iceReceivedCount);
            c.pcConnectionStates && (e.$51 = c.pcConnectionStates);
            c.accumulatedCallTime != null && (e.$29 = c.accumulatedCallTime);
            c.escStateTimes && (e.$32 = c.escStateTimes);
            c.applicationEventTime && (e.$33 = c.applicationEventTime);
            c.videoEscTimes && (e.$34 = c.videoEscTimes);
            c.mediaStats && (e.$48 = c.mediaStats);
            c.connectionType !== void 0 && (e.$22 = c.connectionType);
            c.deviceCharged != null && (e.$55 = c.deviceCharged);
            c.videoReceivedCodec !== null && (e.$45 = c.videoReceivedCodec);
            c.videoSentCodec !== null && (e.$46 = c.videoSentCodec);
            c.audioSentCodec !== null && (e.$47 = c.audioSentCodec);
            c.relayIP !== null && c.relayIP !== void 0 && (e.$23 = c.relayIP);
            c.startReach != null && (e.$49 = c.startReach);
            c.sdpFormat != null && (e.$15 = c.sdpFormat);
            return e
        }
        ;
        var c = a.prototype;
        c.toJsonString = function() {
            var a;
            this.$26 = new Date().valueOf();
            a = {
                accumulatedCallTime: this.$59(),
                activeConn: (a = this.$9) != null ? a : "p2p",
                applicationEventTime: this.$33,
                audioSentCodec: this.$47,
                callID: this.$2,
                callType: this.$13,
                clientVersion: this.$8,
                conferenceName: this.$10,
                connectionType: this.$22,
                deviceCharged: this.$55,
                deviceID: this.$3,
                endCallReason: this.$17,
                endCallSubreason: this.$18,
                endIsConnected: this.$21,
                escP2PCallID: this.$12,
                escStateTimes: this.$32,
                extraInfo: this.$54,
                gen0IceReceivedCount: this.$40,
                gen0IceSentCount: this.$39,
                hasAnswerInJoinResponse: this.$38,
                hasOfferInRingRequest: this.$35,
                iceConnections: this.$50,
                iceReceivedCount: this.$42,
                iceSentCount: this.$41,
                isCaller: this.$5,
                isRemoteEnded: this.$19,
                isUsingMultiway: this.$36,
                joinWithSID: this.$11,
                lastSerializedTime: this.$26,
                lastUpdatedTime: this.$25,
                localCallID: this.localCallID,
                localVideoDuration: this.$43,
                mediaMode: this.$52,
                mediaStats: this.$48,
                pcConnectionStates: this.$51,
                pcIsConnected: this.$20,
                peerID: this.$1,
                relayIP: this.$23,
                remoteVideoDuration: this.$44,
                renegotiationCmuRequestSent: this.$37,
                sdpFormat: this.$15,
                serverInfoData: this.$14,
                signalingTime: this.$31,
                startReach: this.$49,
                startTime: this.$28,
                trigger: this.$7,
                unsetOnRetrieve: this.$24,
                uploadLogLevel: this.$6,
                version: this.$4,
                videoEscTimes: this.$34,
                videoReceivedCodec: this.$45,
                videoSentCodec: this.$46
            };
            return JSON.stringify(a)
        }
        ;
        c.unsetEndCallFields = function() {
            this.$17 = null,
            this.$18 = null,
            this.$19 = null,
            delete this.$31[l.CALL_ENDED],
            this.$30 = 0,
            this.$24 = null
        }
        ;
        c.isNull = function() {
            return this.$1 === "0" && this.$2 === "0" && !this.$5 && this.$7 === "NULL_SUMMARY"
        }
        ;
        c.getExtraInfo = function() {
            return this.$54
        }
        ;
        c.getLastUpdatedTime = function() {
            return this.$25
        }
        ;
        c.getDeviceID = function() {
            return this.$3
        }
        ;
        c.setDeviceID = function(a) {
            this.$3 = a
        }
        ;
        c.getSdpFormat = function() {
            return this.$15
        }
        ;
        c.setSdpFormat = function(a) {
            this.$15 = a
        }
        ;
        c.getLoggingArgs = function() {
            var a;
            return {
                call_id: this.$2,
                conf_name: (a = this.$10) != null ? a : "",
                peer_id: isNaN(this.$1) ? null : this.$1,
                serv_info: (a = this.$14) != null ? a : "",
                web_device_id: this.$3
            }
        }
        ;
        c.getDeviceCharged = function() {
            return this.$55
        }
        ;
        c.setDeviceCharged = function(a) {
            this.$55 !== !0 && (this.$55 = a)
        }
        ;
        c.save = function(a) {
            a.storeCallSummary(this.$1, this.$2, this),
            this.$27 = (g || (g = b("performanceNow")))()
        }
        ;
        c.onCallAccepted = function(a) {
            this.$33[h.PRESSED_ANSWER] = this.$59(),
            this.$7 = a,
            this.$57()
        }
        ;
        c.onCallJoinRequest = function(a) {
            this.$35 = a,
            this.$36 = this.$1 === "MW_PEER_ID",
            this.$57()
        }
        ;
        c.onCallConnected = function(a) {
            this.$60(l.CALL_CONNECTED),
            this.$52 = a,
            this.$57()
        }
        ;
        c.onCallEscalated = function(a) {
            this.$52 === "p2p" && a === "sfu" ? this.$52 = "p2p_sfu_escalated" : this.$52 = a,
            this.$37 = this.$59(),
            this.$57()
        }
        ;
        c.onCallEnded = function(a, b, c, d) {
            this.$24 = c,
            this.$17 = a,
            this.$18 = d,
            this.$19 = b,
            this.$60(l.CALL_ENDED),
            this.$21 === null && (this.$21 = this.$20),
            this.$57()
        }
        ;
        c.setPCIsConnected = function(a) {
            this.$20 !== a && (this.$20 = a,
            this.$51[this.$59()] = a)
        }
        ;
        c.onInviteResponded = function() {
            var a = this.$9 === "p2p" ? l.SENT_OFFER_ACK : l.SENT_RING_RESPONSE;
            this.$60(a);
            this.$57()
        }
        ;
        c.onInviteReceived = function() {
            var a = this.$9 === "p2p" ? l.RECV_OFFER : l.RECV_RING_REQUEST;
            this.$60(a);
            this.$57()
        }
        ;
        c.onInviteSent = function() {
            this.$60(l.SENT_JOIN_REQUEST),
            this.$57()
        }
        ;
        c.onInviteResponseReceived = function() {
            this.$60(l.RECV_JOIN_RESPONSE),
            this.$57()
        }
        ;
        c.onInviteResponseProcessed = function() {
            this.$60(l.PROC_JOIN_RESPONSE),
            this.$57()
        }
        ;
        c.onMediaConnected = function() {
            this.$60(l.NETWORK_READY),
            this.$57()
        }
        ;
        c.setIsPeerMobile = function(a) {
            this.$54[m.PEER_IS_MOBILE] = a ? "1" : "0",
            this.$57()
        }
        ;
        c.setCallType = function(a) {
            this.$13 = a,
            this.$57()
        }
        ;
        c.setConferenceName = function(a) {
            this.$10 = a,
            this.$57()
        }
        ;
        c.setConnectionType = function(a) {
            this.$22 = a,
            this.$57()
        }
        ;
        c.setInitByPageID = function(a) {
            this.$54[m.INITIATED_BY_PAGE_ID] = a,
            this.$57()
        }
        ;
        c.setInitByAppID = function(a) {
            a != null && (this.$54[m.INITIATED_BY_APP_ID] = a,
            this.$57())
        }
        ;
        c.setJoinWithSID = function(a) {
            this.$11 = a,
            this.$57()
        }
        ;
        c.setMediaStats = function(a) {
            this.$48 = a;
            this.$39 && (this.$48.sender.ice_g0 = this.$39);
            this.$41 && (this.$48.sender.ice = this.$41);
            this.$40 && (this.$48.receiver.ice_g0 = this.$40);
            this.$42 && (this.$48.receiver.ice = this.$42);
            a = a.extraInfo;
            var b = a.localIceCandidate;
            a = a.remoteIceCandidate;
            if (b) {
                (this.$49 == null || this.$49 === "") && (this.$49 = b.networkType);
                if (a) {
                    var c = b.candidateType;
                    b = b.protocol;
                    var d = a.candidateType;
                    a = a.protocol;
                    if (c != null && b != null && d != null && a != null) {
                        c = "l:" + c + "-" + b + ";r:" + d + "-" + a;
                        this.$50[c] == null && (this.$50[c] = this.$59())
                    }
                }
            }
            this.updateBatteryEnd();
            this.$57()
        }
        ;
        c.setServerInfoData = function(a) {
            this.$14 = a,
            this.$57()
        }
        ;
        c.setRating = function(a) {
            this.$54[m.RATING] = a,
            this.$57()
        }
        ;
        c.setFeedback = function(a) {
            this.$54[m.SURVEY_DETAILS] = a,
            this.$57()
        }
        ;
        c.setSurveyChoice = function(a) {
            this.$54[m.SURVEY_CHOICE] = a,
            this.$57()
        }
        ;
        c.setMaxConnectedParticipants = function(a) {
            this.$54[m.MAX_CONCURRENT_CONNECTED_PARTICIPANTS] = a,
            this.$57()
        }
        ;
        c.setHasAnswerInJoinResponse = function(a) {
            this.$38 = a,
            this.$57()
        }
        ;
        c.$60 = function(a) {
            if (this.$31[a] != null)
                return;
            this.$31[a] = this.$59()
        }
        ;
        c.$59 = function() {
            var a = (g || (g = b("performanceNow")))() - this.$30;
            return Math.floor(this.$29 + a)
        }
        ;
        c.$57 = function() {
            this.$25 = new Date().valueOf()
        }
        ;
        c.$56 = function() {
            var a = b("WebPerformanceDeviceInfo").getMobileYearClass();
            a != null && a > 0 ? this.$54[m.YEAR_CLASS] = a : this.$54[m.DESKTOP_DEVICE_CLASS] = b("WebPerformanceDeviceInfo").getDeviceLevel()
        }
        ;
        c.updateBatteryStart = function() {
            var a, c, d;
            return b("regeneratorRuntime").async(function(e) {
                while (1)
                    switch (e.prev = e.next) {
                    case 0:
                        e.next = 2;
                        return b("regeneratorRuntime").awrap(b("ZenonDeviceInfoHelper").getBatteryStats());
                    case 2:
                        a = e.sent,
                        c = a.level,
                        d = a.placeholder,
                        d !== !0 && (this.$54[m.BATTERY_START] = c);
                    case 6:
                    case "end":
                        return e.stop()
                    }
            }, null, this)
        }
        ;
        c.updateBatteryEnd = function() {
            var a, c, d, e;
            return b("regeneratorRuntime").async(function(f) {
                while (1)
                    switch (f.prev = f.next) {
                    case 0:
                        f.next = 2;
                        return b("regeneratorRuntime").awrap(b("ZenonDeviceInfoHelper").getBatteryStats());
                    case 2:
                        a = f.sent,
                        c = a.level,
                        d = a.placeholder,
                        e = a.wasCharged,
                        d !== !0 && (this.$54[m.BATTERY_END] = c,
                        this.setDeviceCharged(e));
                    case 7:
                    case "end":
                        return f.stop()
                    }
            }, null, this)
        }
        ;
        c.toString = function() {
            var a = {
                core_metrics: this.$61(),
                time_series: null
            };
            return JSON.stringify(a)
        }
        ;
        c.$61 = function() {
            return {
                CoreAudioMetrics: this.$48.CoreAudioMetrics,
                DebugAudioMetrics: this.$48.DebugAudioMetrics,
                active_conn: this.$9,
                answer_in_join_resp: this.$38,
                app_event_times: this.$33,
                call_type: this.$13,
                caller: this.$5,
                client_version: this.$8,
                conf_name: this.$10,
                conn: this.$62(),
                device_charged: this.$55,
                end: this.$63(),
                esc_p2p_call_id: this.$12,
                esc_state_times: this.$32,
                is_using_multiway: this.$36,
                join_with_sid: this.$11,
                log_level: this.$64(b("ZenonVCSTypes").ZenonUploadLogLevel.cast(this.$6)),
                offer_in_ring_req: this.$35,
                open_count: this.$53,
                peer_id: isNaN(this.$1) ? null : this.$1,
                perf: this.$65(),
                push_phase: this.$16,
                receiver: this.$48.receiver,
                sdp_reneg_times: [{
                    crs: this.$37
                }],
                sender: this.$48.sender,
                serv_info: this.$14,
                signaling: this.$66(),
                ver: this.$4,
                vid_esc_times: this.$34,
                video: this.$48.video
            }
        }
        ;
        c.$64 = function(a) {
            if (a == null)
                return "";
            switch (a) {
            case b("ZenonVCSTypes").ZenonUploadLogLevel.LL_BASIC:
                return "basic";
            case b("ZenonVCSTypes").ZenonUploadLogLevel.LL_DEBUG:
                return "debug";
            case b("ZenonVCSTypes").ZenonUploadLogLevel.LL_WARNING:
                return "warning";
            case b("ZenonVCSTypes").ZenonUploadLogLevel.LL_INFO:
                return "info";
            case b("ZenonVCSTypes").ZenonUploadLogLevel.LL_VERBOSE:
                return "verbose";
            default:
                return ""
            }
        }
        ;
        c.$62 = function() {
            var a = {}
              , b = this.$48.sender
              , c = b.avgrtt
              , d = b.maxrtt;
            b = b.minrtt;
            c != null && (a.avgrtt = c,
            a.maxrtt = d,
            a.minrtt = b);
            this.$23 != null && (a.relay_ip = this.$23);
            this.$49 != null && this.$49 !== "" && (a.start_reach = this.$49);
            var e = {};
            Object.entries(this.$50).forEach(function(a) {
                var b = a[0];
                a = a[1];
                typeof a === "number" && (e[a] = b)
            });
            a.types = e;
            a.ctd = this.$51;
            return a
        }
        ;
        c.$66 = function() {
            var a = {
                start_time: this.$28,
                time_from_start: this.$31
            };
            this.$7 != null && (a.trigger = this.$7);
            var b = this.$67();
            b > 0 && (a.duration = b);
            return a
        }
        ;
        c.$67 = function(a) {
            var b = this.$31[l.CALL_CONNECTED] || this.$31[l.NETWORK_READY];
            if (!b)
                return 0;
            a = this.$31[l.CALL_ENDED] || !(a == null ? void 0 : a.assumeOngoing) && this.$29 || this.$59();
            return Math.max(0, a - b)
        }
        ;
        c.$63 = function() {
            var a, c = {};
            this.$17 != null && (c.end_call_reason_string = b("ZenonDismissReason").dismissToEndCallReason(this.$17),
            this.$18 !== null && (c.end_call_subreason_string = this.$18),
            c.remote_ended = this.$19,
            c.end_ctd = this.$21);
            this.$22 != null && (c.conn_type = this.$22);
            a = (a = this.$48.extraInfo) != null ? a : {};
            a = a.localIceCandidate;
            a && a.networkType !== "" && (c.reach = a.networkType);
            return c
        }
        ;
        c.$65 = function() {
            var a, b, c = this.$67();
            if (c <= 0)
                return;
            a = (a = (a = this.$48.video.receiver) == null ? void 0 : a.tdt) != null ? a : 0;
            b = (b = (b = this.$48.video.sender) == null ? void 0 : b.tet) != null ? b : 0;
            a = a + b;
            b = Math.round(100 * (a / c));
            return {
                cpu: {
                    proc: {
                        avg: b
                    }
                }
            }
        }
        ;
        c.uploadLog = function() {
            b("ZenonCallSummaryUploader").logCallSummary({
                callID: this.$2,
                callSummary: this,
                peerID: this.$1
            })
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("ZenonGenericCallSummaryStore", ["CacheStorage", "areEqual", "setTimeout"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = 2e3, i = 3;
    a = function() {
        function a(a, c, d) {
            this.$1 = a,
            this.$2 = new (b("CacheStorage"))(c,d)
        }
        var c = a.prototype;
        c.getCallSummaries = function() {
            return this.$2.get(this.$1) || {}
        }
        ;
        c.removeCallSummaries = function(a) {
            this.mutateCallSummaries(function(b) {
                a.forEach(function(a) {
                    var c = a.callID;
                    a = a.peerID;
                    b[a] && b[a][c] && (delete b[a][c],
                    Object.entries(b[a]).length === 0 && delete b[a])
                });
                return b
            })
        }
        ;
        c.mutateCallSummaries = function(a, c, d) {
            var e = this;
            c === void 0 && (c = i);
            d === void 0 && (d = !1);
            var f = this.getCallSummaries()
              , j = this.getCallSummaries();
            f = a(f);
            var k = this.getCallSummaries();
            (g || (g = b("areEqual")))(j, k) ? this.$2.set(this.$1, f) : c > 0 && (d ? b("setTimeout")(function() {
                e.mutateCallSummaries(a, c - 1, !0)
            }, h) : this.mutateCallSummaries(a, c - 1, !0))
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("ZenonCallSummaryStore", ["FBLogger", "ZenonCallSummary", "ZenonGenericCallSummaryStore"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = "localstorage"
      , h = "RTC_CALL_SUMMARY_"
      , i = "summary";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.call(this, i, g, h) || this
        }
        var d = c.prototype;
        d.retrieveCallSummary = function(a, c) {
            var d = this.getCallSummaries();
            d = d[a] ? d[a][c] : null;
            if (d)
                return b("ZenonCallSummary").fromJsonString(d.__d);
            else
                return null
        }
        ;
        d.storeCallSummary = function(a, c, d) {
            if (d.isNull()) {
                b("FBLogger")("rtweb").mustfix("Storing invalid ZenonCallSummary!");
                return
            }
            this.mutateCallSummaries(function(b) {
                b[a] || (b[a] = {});
                b[a][c] = {
                    __d: d.toJsonString(),
                    __t: Date.now(),
                    __z: !0
                };
                return b
            })
        }
        ;
        return c
    }(b("ZenonGenericCallSummaryStore"));
    c = new a();
    f.ZenonCallSummaryStoreInstance = c
}
), null);
__d("ZenonCallSummaryUploader", ["MarauderLogger", "ZenonCallSummary", "ZenonCallSummaryStore"], (function(a, b, c, d, e, f) {
    "use strict";
    f.getLoggableSummaries = k;
    f.logCallSummaries = a;
    f.logCallSummary = c;
    var g = 3 * 60 * 1e3
      , h = "rtc_client_call_summary"
      , i = "webrtc";
    function j(a) {
        var c = a.callID
          , d = a.callSummary;
        a = a.peerID;
        a = isNaN(a) ? null : a;
        c = babelHelpers["extends"]({
            call_id: c,
            channel_session_id: d.getDeviceID(),
            content: d.toString(),
            local_call_id: d.localCallID,
            peer_id: a,
            tag: "endcallstats"
        }, d.getExtraInfo());
        b("MarauderLogger").log(h, i, c, void 0, void 0, void 0, void 0, "vital")
    }
    function k() {
        var a = b("ZenonCallSummaryStore").ZenonCallSummaryStoreInstance.getCallSummaries()
          , c = [];
        for (var d in a)
            for (var e in a[d]) {
                var f = a[d][e];
                if (f.__z) {
                    var h = f.__t;
                    if (Date.now() - h > g) {
                        h = b("ZenonCallSummary").fromJsonString(f.__d);
                        h && c.push({
                            callID: e,
                            callSummary: h,
                            peerID: d
                        })
                    }
                }
            }
        return c
    }
    function a() {
        var a = k()
          , c = [];
        a.forEach(function(a) {
            var b = a.callID
              , d = a.callSummary;
            a = a.peerID;
            j({
                callID: b,
                callSummary: d,
                peerID: a
            });
            c.push({
                callID: b,
                peerID: a
            })
        });
        b("ZenonCallSummaryStore").ZenonCallSummaryStoreInstance.removeCallSummaries(c)
    }
    function c(a) {
        var c = a.callID
          , d = a.callSummary;
        a = a.peerID;
        j({
            callID: c,
            callSummary: d,
            peerID: a
        });
        b("ZenonCallSummaryStore").ZenonCallSummaryStoreInstance.removeCallSummaries([{
            callID: c,
            peerID: a
        }])
    }
}
), null);
__d("FBRTCCallSummaryUploader", ["Banzai", "FBRTCCallSummary", "FBRTCCallSummaryStore", "ZenonCallSummaryUploader", "requireCond", "cr:1645710"], (function(a, b, c, d, e, f) {
    f.init = a;
    function a() {
        var a = b("FBRTCCallSummaryStore").getInstance();
        b("Banzai").subscribe(b("Banzai").SEND, function() {
            b("ZenonCallSummaryUploader").logCallSummaries(),
            b("cr:1645710") == null ? void 0 : b("cr:1645710").logCallSummaries(),
            b("FBRTCCallSummary").logSavedSummaries(a)
        })
    }
}
), null);
__d("ZenonCallLogger", ["ScotchRTWebUserActionLogger", "uuid"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = new Set(["setMediaStats", "infraAction"]);
    a = function() {
        function a(a, c) {
            var d, e = this;
            this.$1 = [];
            this.$2 = {
                localCallID: b("uuid")(),
                peerID: a.peerID,
                sharedCallID: (d = a.serverInfoData) != null ? d : a.callID
            };
            c.forEach(function(b) {
                return e.$1.push(new b(a,function(a) {
                    Object.assign(e.$2, a)
                }
                ))
            })
        }
        var c = a.prototype;
        c.log = function(a) {
            g.has(a.name) || b("ScotchRTWebUserActionLogger").logCheckpoint({
                checkpoint: "[ZP] ZenonCallLogger event: " + a.name
            }),
            this.$1.forEach(function(b) {
                b.processEvent(a)
            })
        }
        ;
        c.getLogIdentifiers = function() {
            return this.$2
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("ZenonParentCallSummaryLogProcessor", ["CurrentUser", "FBRTCCallSummaryStore", "ZenonCallSummary", "ZenonDismissReason", "gkx", "pageID"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, c) {
            this.$2 = b("FBRTCCallSummaryStore").getInstance(),
            this.$3 = a.protocol,
            this.$3 === "mw" && (a.peerID = "MW_PEER_ID"),
            this.$1 = new (b("ZenonCallSummary"))(a),
            c && c({
                localCallID: this.$1.localCallID
            })
        }
        var c = a.prototype;
        c.$4 = function(a) {
            if (a != null) {
                a = a.deviceID;
                a = a === "mobile";
                this.$1.setIsPeerMobile(a)
            }
        }
        ;
        c.processEvent = function(a) {
            switch (a.name) {
            case "inviteResponded":
                this.$1.onInviteResponded();
                break;
            case "inviteReceived":
                this.$1.onInviteReceived();
                this.$4(a.remoteDeviceInfo);
                break;
            case "callEnded":
                this.$5(a);
                break;
            case "callAccepted":
                this.$1.onCallAccepted(a.trigger);
                this.$1.save(this.$2);
                break;
            case "popupOpened":
                this.$6(a);
                this.$1.save(this.$2);
                break
            }
        }
        ;
        c.$6 = function(a) {
            this.$1.setInitByPageID(b("pageID")),
            this.$1.setInitByAppID(b("CurrentUser").getAppID()),
            this.$1.onCallEnded(b("ZenonDismissReason").ZenonDismissReason.ClientError, !1, !0, a.isPopupBlocked ? "PopupBlocked" : "PopupPending"),
            this.$1.save(this.$2)
        }
        ;
        c.$5 = function(a) {
            if (this.$3 === "mw" && a.isRemoteEnded)
                return;
            var c = a.endCallReason
              , d = a.endCallSubreason;
            a = a.isRemoteEnded;
            var e = b("gkx")("1148995");
            if (!e && c === b("ZenonDismissReason").ZenonDismissReason.OtherInstanceHandled && a)
                return;
            this.$1.onCallEnded(c, a, !1, d);
            this.$1.save(this.$2)
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("ZenonParentQPLLogProcessor", ["QPLUserFlow"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            this.$1 = a.callID
        }
        var c = a.prototype;
        c.processEvent = function(a) {
            switch (a.name) {
            case "inviteReceived":
                b("QPLUserFlow").start(64225282, {
                    instanceKey: +this.$1
                });
                break;
            case "callEnded":
                b("QPLUserFlow").endCancel(64225282, {
                    instanceKey: +this.$1
                });
                break;
            case "callAccepted":
                b("QPLUserFlow").addPoint(64225282, "call_accepted", {
                    instanceKey: +this.$1
                });
                break;
            case "inviteResponded":
                b("QPLUserFlow").addPoint(64225282, "invite_responded", {
                    instanceKey: +this.$1
                });
                break;
            case "popupOpened":
                b("QPLUserFlow").endSuccess(64225282, {
                    instanceKey: +this.$1
                });
                break
            }
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("ZenonCollisionContext", [], (function(a, b, c, d, e, f) {
    "use strict";
    "use strict";
    f.getThreadIDAndTypeFromCollisionContext = a;
    function a(a) {
        var b = null;
        a.groupThreadID != null ? b = {
            id: a.groupThreadID,
            type: 2
        } : a.peerID != null && (b = {
            id: a.peerID,
            type: 1
        });
        return b
    }
}
), null);
__d("LazyLoadInstance", ["promiseDone"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {
        LOADING: 1,
        NOT_READY: 0,
        READY: 2
    };
    a = function() {
        function a(a, b) {
            this.$1 = {
                instantiate: b,
                moduleReference: a,
                stage: g.NOT_READY
            }
        }
        var c = a.prototype;
        c.get = function(a) {
            switch (this.$1.stage) {
            case g.NOT_READY:
                b("promiseDone")(this.$2(this.$1), a);
                break;
            case g.LOADING:
                b("promiseDone")(this.$1.instancePromise, a);
                break;
            case g.READY:
                a(this.$1.instance);
                break
            }
        }
        ;
        c.getNow = function() {
            return this.$1.stage === g.READY ? this.$1.instance : null
        }
        ;
        c.preload = function() {
            this.$1.stage === g.NOT_READY && this.$2(this.$1)
        }
        ;
        c.$2 = function(a) {
            var b = this
              , c = a.instantiate;
            a = a.moduleReference;
            a = a.load().then(function(a) {
                a = c(a);
                b.$1 = {
                    instance: a,
                    stage: g.READY
                };
                return a
            });
            this.$1 = {
                instancePromise: a,
                stage: g.LOADING
            };
            return a
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("ZenonParentSignalingClient", ["ZenonDebugLogger", "ZenonSignalingTypes", "recoverableViolation", "unrecoverableViolation"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, c, d, e) {
            var f = this;
            this.remoteSignalingID = null;
            this.$4 = "init";
            this.$6 = null;
            this.$7 = null;
            this.$8 = function() {}
            ;
            this.$9 = function(a, c, d) {
                b("ZenonDebugLogger").getInstance().logStateMachine("ParentSignalingClient", f.$4, "received " + a.eventName, f.$1.getSignalingID());
                switch (a.eventName) {
                case "inviteRequest":
                    f.$11(a, c, d);
                    break;
                case "remoteSdpRequest":
                    f.$12(a, c);
                    break;
                case "terminateRequest":
                    f.$13(a, c, d);
                    break
                }
            }
            ;
            this.$1 = a;
            this.$3 = d;
            this.$5 = e;
            this.$2 = c;
            c.setReceiver(this.$9);
            b("ZenonDebugLogger").getInstance().startQPL(64234815, +a.getSignalingID())
        }
        var c = a.prototype;
        c.setSignalingEventHandlers = function(a) {
            if (this.$6 != null) {
                b("recoverableViolation")("setSignalingEventHandlers should only be called once, to avoid accidentally losing handlers.", "rtc_www");
                return
            }
            this.$6 = a
        }
        ;
        c.setLoggingEventHandler = function(a) {
            this.$8 = a
        }
        ;
        c.getSignalingModel = function() {
            return this.$1
        }
        ;
        c.sendDismiss = function(a) {
            this.$4 = "terminated";
            a = {
                eventName: "terminateRequest",
                fromJoinResponse: !1,
                reason: a,
                shouldInformPeer: !0
            };
            this.$10(a)
        }
        ;
        c.receiveMessage = function(a) {
            this.$2.receiveMessage(a)
        }
        ;
        c.isTerminated = function() {
            return this.$4 === "terminated"
        }
        ;
        c.sendAnswerIntent = function() {
            if (this.$4 === "inviteAcknowledged") {
                this.$4 = "answered";
                var a = {
                    eventName: "answerIntentRequest"
                };
                this.$10(a)
            } else
                throw b("unrecoverableViolation")("sendAnswerIntent called in unexpected state " + this.$4, "rtc_www")
        }
        ;
        c.respondToInvite = function(a) {
            if (this.$4 === "inviteReceived") {
                if (this.$7 == null)
                    throw b("unrecoverableViolation")("respondToInvite called without inviteMessageId being populated first", "rtc_www");
                this.$4 = "inviteAcknowledged";
                a = {
                    ackMessageId: this.$7,
                    eventName: "inviteResponse",
                    status: a
                };
                this.$10(a)
            } else
                throw b("unrecoverableViolation")("respondToInvite called in unexpected state " + this.$4, "rtc_www")
        }
        ;
        c.sendClientEvent = function(a) {
            throw b("unrecoverableViolation")("sendClientEvent called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?", "rtc_www")
        }
        ;
        c.sendInvite = function(a, c) {
            throw b("unrecoverableViolation")("sendInvite called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?", "rtc_www")
        }
        ;
        c.sendSdp = function(a, c) {
            throw b("unrecoverableViolation")("sendSdp called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?", "rtc_www")
        }
        ;
        c.sendIceCandidate = function(a) {
            throw b("unrecoverableViolation")("sendIceCandidate called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?", "rtc_www")
        }
        ;
        c.sendMediaUpdate = function(a) {
            throw b("unrecoverableViolation")("sendMediaUpdate called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?", "rtc_www")
        }
        ;
        c.sendAddParticipantsMessage = function(a) {
            throw b("unrecoverableViolation")("sendAddParticipantsMessage called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?", "rtc_www")
        }
        ;
        c.sendRemoveParticipantsRequest = function(a) {
            throw b("unrecoverableViolation")("sendRemoveParticipantsRequest called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?", "rtc_www")
        }
        ;
        c.sendUsersApprovalRequest = function(a, c) {
            throw b("unrecoverableViolation")("sendUsersApprovalRequest called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?", "rtc_www")
        }
        ;
        c.sendStateSyncUnsubscribe = function(a) {
            throw b("unrecoverableViolation")("sendStateSyncUnsubscribe called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?", "rtc_www")
        }
        ;
        c.sendStateSyncUpdate = function(a, c) {
            throw b("unrecoverableViolation")("sendStateSyncUpdate called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?", "rtc_www")
        }
        ;
        c.sendSubscriptionRequest = function(a) {
            throw b("unrecoverableViolation")("sendSubscriptionRequest called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?", "rtc_www")
        }
        ;
        c.sendClientInfo = function(a) {
            throw b("unrecoverableViolation")("sendClientInfo called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?", "rtc_www")
        }
        ;
        c.sendGenericDataMessage = function(a, c, d) {
            throw b("unrecoverableViolation")("sendGenericDataMessage called on ZenonParentSignalingClient. Did you mean to use ZenonSignalingClient instead?", "rtc_www")
        }
        ;
        c.$10 = function(a) {
            b("ZenonDebugLogger").getInstance().logStateMachine("ParentSignalingClient", this.$4, "sending " + a.eventName, this.$1.getSignalingID()),
            this.$3.sendEvent(a)
        }
        ;
        c.$11 = function(a, b, c) {
            this.$4 === "init" && (this.$4 = "inviteReceived",
            this.$7 = b,
            this.$5(a, c, this))
        }
        ;
        c.$13 = function(a, b, c) {
            if (this.$4 !== "terminated") {
                this.$4 = "terminated";
                c = {
                    ackMessageId: b,
                    eventName: "dismissResponse"
                };
                this.$3.sendEvent(c);
                this.$6 && this.$6.onDismissReceived && this.$6.onDismissReceived(this.$1.getSignalingID(), a.reason)
            }
        }
        ;
        c.$12 = function(a, c) {
            c = {
                ackMessageId: c,
                acknowledgedVersion: a.sdp.version,
                eventName: "remoteSdpResponse",
                negotiateType: a.negotiateType,
                status: b("ZenonSignalingTypes").ZenonRemoteSdpResponseStatus.OK,
                type: a.sdp.type
            };
            this.$3.sendEvent(c)
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("ZenonParentCallsManager", ["regeneratorRuntime", "BaseEventEmitter", "JSResource", "LazyLoadInstance", "ZenonCallLogger", "ZenonCallsModelTypes", "ZenonCollisionContext", "ZenonDismissReason", "ZenonParentCallSummaryLogProcessor", "ZenonParentQPLLogProcessor", "ZenonParentSignalingClient", "gkx", "recoverableViolation"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(c) {
            var d;
            d = a.call(this) || this;
            d.$ZenonParentCallsManager4 = new Map();
            d.$ZenonParentCallsManager5 = new Set();
            d.onInviteReceived = function(a, c, e) {
                var f, g = e.getSignalingModel().getSignalingID();
                e.setSignalingEventHandlers({
                    onDismissReceived: d.onDismissReceived
                });
                var h = a.inviterID
                  , i = a.otherParticipants
                  , j = a.requestingVideo;
                a = a.roomInfo;
                var k = "zenon_incoming_call_dialog"
                  , l = d.$ZenonParentCallsManager6({
                    callID: g,
                    callTrigger: k,
                    isCaller: !1,
                    isVideo: j,
                    peerID: h,
                    protocol: c
                });
                l.log({
                    name: "inviteReceived"
                });
                k = d.$ZenonParentCallsManager3.isSupportedClientForProtocol(c);
                var m = k ? "OK" : "NOT_SUPPORTED";
                e.respondToInvite(m);
                l.log({
                    name: "inviteResponded"
                });
                m = {
                    thread: {
                        id: "0",
                        type: 2
                    },
                    type: "thread"
                };
                if (((f = a.context) == null ? void 0 : f.groupThreadID) || ((f = a.context) == null ? void 0 : f.peerID)) {
                    m = {
                        thread: (f = b("ZenonCollisionContext").getThreadIDAndTypeFromCollisionContext(a.context)) != null ? f : m.thread,
                        type: "thread"
                    }
                } else
                    ((f = a.room) == null ? void 0 : f.linkHash) != null && ((f = a.room) == null ? void 0 : f.roomName) != null && (m = {
                        room: a.room,
                        type: "room"
                    });
                a = {
                    context: m,
                    controllerParams: {
                        callContext: a.name,
                        callID: g,
                        configuration: c,
                        serverInfoData: (m = (f = a.context) == null ? void 0 : f.serverInfoData) != null ? m : null
                    },
                    inviterID: h,
                    isClientPermissableRing: k,
                    onAccept: function(a, b) {
                        var f = b.isPopupBlocked;
                        b = b.trigger;
                        l.log({
                            name: "callAccepted",
                            trigger: b
                        });
                        c === "p2p" && d.$ZenonParentCallsManager2.get(function(a) {
                            a.storeOfferForBackwardsCompat(h, g)
                        });
                        e.sendAnswerIntent();
                        d.$ZenonParentCallsManager7(a, {
                            callID: g,
                            callTrigger: b,
                            isPopupBlocked: f,
                            isVideo: j,
                            peerID: h,
                            protocol: c
                        })
                    },
                    onDecline: function(a, b) {
                        b === void 0 && (b = null),
                        d.onDecline(g, l, a, b)
                    },
                    otherParticipants: i,
                    requestingVideo: j,
                    ringID: g
                };
                d.emit("incomingRing", a)
            }
            ;
            d.onDismissReceived = function(a, c) {
                var e = b("ZenonDismissReason").dismissReasonToCancelReason(c);
                e = {
                    reason: e,
                    ringID: a
                };
                d.emit("ringCancel", e);
                e = d.$ZenonParentCallsManager4.get(a);
                e != null && (e.log({
                    name: "dismissRecv"
                }),
                e.log({
                    endCallReason: c,
                    isRemoteEnded: !0,
                    name: "callEnded"
                }))
            }
            ;
            d.$ZenonParentCallsManager3 = c;
            d.$ZenonParentCallsManager2 = new (b("LazyLoadInstance"))(b("JSResource")("ZenonSignalingParentTransport").__setRef("ZenonParentCallsManager"),function(a) {
                return new a()
            }
            );
            d.$ZenonParentCallsManager1 = new (b("LazyLoadInstance"))(b("JSResource")("ZenonSignalingClientManager").__setRef("ZenonParentCallsManager"),function(a) {
                return new a(b("ZenonParentSignalingClient"),d.onInviteReceived)
            }
            );
            return d
        }
        var d = c.prototype;
        d.startOutgoingCallIntent = function(a, b) {
            var c = b.callID
              , d = b.callTrigger
              , e = b.isVideo
              , f = b.peerID
              , g = b.protocol;
            this.$ZenonParentCallsManager6({
                callID: c,
                callTrigger: d,
                isCaller: !0,
                isVideo: e,
                peerID: f,
                protocol: g
            });
            this.$ZenonParentCallsManager7(a, b)
        }
        ;
        d.$ZenonParentCallsManager6 = function(a) {
            var c = a.callID
              , d = a.callTrigger
              , e = a.isCaller
              , f = a.isVideo
              , g = a.peerID;
            a = a.protocol;
            var h = this.$ZenonParentCallsManager4.get(c);
            !h ? (h = new (b("ZenonCallLogger"))({
                callID: c,
                callTrigger: d,
                isCaller: e,
                isVideo: f,
                peerID: g,
                protocol: a
            },b("gkx")("1536863") ? [b("ZenonParentCallSummaryLogProcessor"), b("ZenonParentQPLLogProcessor")] : [b("ZenonParentCallSummaryLogProcessor")]),
            this.$ZenonParentCallsManager4.set(c, h)) : b("recoverableViolation")("Call logger key collision in parentCallsManager for callID: " + c, "rtc_www");
            return h
        }
        ;
        d.$ZenonParentCallsManager7 = function(a, c) {
            var d, e, f, g, h;
            return b("regeneratorRuntime").async(function(i) {
                while (1)
                    switch (i.prev = i.next) {
                    case 0:
                        d = c.alohaEscalatedMW,
                        e = c.callID,
                        f = c.isPopupBlocked;
                        this.$ZenonParentCallsManager2.get(function(b) {
                            b.verificationNonce = a
                        });
                        this.$ZenonParentCallsManager5.add(e);
                        g = this.$ZenonParentCallsManager4.get(e);
                        if (!(g != null)) {
                            i.next = 11;
                            break
                        }
                        g.log({
                            isPopupBlocked: f,
                            name: "popupOpened"
                        });
                        if (!(d != null)) {
                            i.next = 11;
                            break
                        }
                        i.next = 9;
                        return b("regeneratorRuntime").awrap(d);
                    case 9:
                        h = i.sent,
                        h && g.log({
                            endCallReason: b("ZenonDismissReason").ZenonDismissReason.OtherInstanceHandled,
                            endCallSubreason: "forceP2POverMWForAloha",
                            isRemoteEnded: !1,
                            name: "callEnded"
                        });
                    case 11:
                    case "end":
                        return i.stop()
                    }
            }, null, this)
        }
        ;
        d.initListeners = function(a) {
            var b = this;
            for (var a = a, c = Array.isArray(a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                var e;
                if (c) {
                    if (d >= a.length)
                        break;
                    e = a[d++]
                } else {
                    d = a.next();
                    if (d.done)
                        break;
                    e = d.value
                }
                e = e;
                e.subscribe(function(a) {
                    return b.onMessageReceived(a)
                }, function(a) {
                    return b.onRawP2PMessageReceived(a)
                }, function(a) {
                    return b.onRawMWMessageReceived(a)
                })
            }
        }
        ;
        d.onMessageReceived = function(a) {
            var b = a.getHeader().signalingID;
            if (b != null && this.$ZenonParentCallsManager5.has(b))
                return;
            this.$ZenonParentCallsManager1.get(function(b) {
                b.receiveMessage(a)
            })
        }
        ;
        d.onRawP2PMessageReceived = function(a) {
            this.$ZenonParentCallsManager2.get(function(b) {
                b.enqueueRawP2PMessage(a)
            })
        }
        ;
        d.onRawMWMessageReceived = function(a) {
            this.$ZenonParentCallsManager2.get(function(b) {
                b.enqueueRawMWMessage(a)
            })
        }
        ;
        d.onDecline = function(a, c, d, e) {
            e === void 0 && (e = null),
            this.$ZenonParentCallsManager1.get(function(f) {
                f = f.getSignalingClient(a);
                if (f) {
                    var g = b("ZenonDismissReason").endCallToDismissReason(d);
                    d !== b("ZenonCallsModelTypes").ZenonEndCallReason.NoAnswerTimeout && d !== b("ZenonCallsModelTypes").ZenonEndCallReason.VersionUnsupported && e !== b("ZenonCallsModelTypes").ZenonEndCallSubreason.CallsBlocked && f.sendDismiss(g);
                    c.log({
                        endCallReason: g,
                        endCallSubreason: e == null ? null : e,
                        isRemoteEnded: !1,
                        name: "callEnded"
                    })
                } else
                    b("recoverableViolation")("signaling client should be defined", "rtc_www")
            })
        }
        ;
        d.removeListeners = function(a) {
            for (var a = a, b = Array.isArray(a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                var d;
                if (b) {
                    if (c >= a.length)
                        break;
                    d = a[c++]
                } else {
                    c = a.next();
                    if (c.done)
                        break;
                    d = c.value
                }
                d = d;
                d.unsubscribe()
            }
        }
        ;
        return c
    }(b("BaseEventEmitter"));
    e.exports = a
}
), null);
__d("ZenonP2PMessageValidator", ["CurrentUser", "ZenonP2PMessageTypes", "err"], (function(a, b, c, d, e, f) {
    "use strict";
    f.getValidP2PMessage = a;
    f.transformP2PMessage = c;
    function a(a) {
        a = JSON.parse(a);
        var c = a.call_id
          , d = a.from
          , e = a.id
          , f = a.msg_type
          , g = a.payload
          , h = a.source
          , i = a.to;
        a = a.type;
        if (i != null && i !== b("CurrentUser").getID())
            throw b("err")("P2P message.to field " + i + " does not match logged in user ID " + b("CurrentUser").getID() + " for msg_type " + f);
        if (d && c && g) {
            i = {
                call_id: c,
                from: d,
                id: e,
                msg_type: f,
                payload: g,
                source: h,
                type: a
            };
            return i
        } else
            throw b("err")("P2P message does not have valid from, call_id, and payload fields")
    }
    function c(a) {
        if (a) {
            var c = a.msg_type;
            switch (c) {
            case b("ZenonP2PMessageTypes").ZenonP2PSignalingPayloadType.OFFER:
                return h(a);
            case b("ZenonP2PMessageTypes").ZenonP2PSignalingPayloadType.HANG_UP:
                return i(a);
            case b("ZenonP2PMessageTypes").ZenonP2PSignalingPayloadType.ICE_CANDIDATE:
                return g(a);
            case b("ZenonP2PMessageTypes").ZenonP2PSignalingPayloadType.OTHER_DISMISS:
                return j(a)
            }
        }
        return null
    }
    function g(a) {
        var c = a.from
          , d = a.payload;
        a = a.source;
        d = JSON.parse(d);
        var e = d.call_id
          , f = d.capability
          , g = d.label
          , h = d.msg_id
          , i = d.sdp
          , j = d.sdp_line_idx
          , k = d.sdp_mid;
        d = d.version;
        e = {
            call_id: e,
            capability: f,
            from: c,
            label: g,
            msg_id: h,
            sdp: i,
            sdp_line_idx: j,
            sdp_mid: k,
            source: a,
            type: b("ZenonP2PMessageTypes").ZenonP2PSignalingPayloadType.ICE_CANDIDATE,
            version: d
        };
        return e
    }
    function h(a) {
        var c, d, e, f, g = a.from, h = a.payload;
        a = a.source;
        h = JSON.parse(h);
        var i = h.call_id
          , j = h.calltype
          , k = h.capability;
        c = (c = h.escalation_conference_name) != null ? c : null;
        d = (d = h.experiments) != null ? d : [];
        e = (e = h.extraParams) != null ? e : [];
        f = (f = h.fbexp) != null ? f : "";
        var l = h.handlescollision !== void 0 ? h.handlescollision : !1
          , m = h.offer_escalation_support !== void 0 ? h.offer_escalation_support : !1
          , n = h.msg_id
          , o = h.sdp;
        h = h.videoon;
        i = {
            call_id: i,
            calltype: j,
            capability: k,
            escalation_conference_name: c,
            experiments: d,
            extraParams: e,
            fbexp: f,
            from: g,
            handlescollision: l,
            msg_id: n,
            offer_escalation_support: m,
            sdp: o,
            source: a,
            type: b("ZenonP2PMessageTypes").ZenonP2PSignalingPayloadType.OFFER,
            videoon: h
        };
        return i
    }
    function i(a) {
        var c = a.from
          , d = a.payload;
        a = a.source;
        d = JSON.parse(d);
        var e = d.call_id
          , f = d.capability
          , g = d.msg_id
          , h = d.reason;
        d = d.subreason;
        e = {
            call_id: e,
            capability: f,
            from: c,
            msg_id: g,
            reason: h,
            source: a,
            subreason: d,
            type: b("ZenonP2PMessageTypes").ZenonP2PSignalingPayloadType.HANG_UP
        };
        return e
    }
    function j(a) {
        var c = a.from
          , d = a.payload;
        a = a.source;
        d = JSON.parse(d);
        var e = d.call_id
          , f = d.capability;
        d = d.msg_id;
        e = {
            call_id: e,
            capability: f,
            from: c,
            msg_id: d,
            source: a,
            type: b("ZenonP2PMessageTypes").ZenonP2PSignalingPayloadType.OTHER_DISMISS
        };
        return e
    }
}
), null);
__d("RTWebSignalingListener", ["FBMqttChannel", "ZenonDebugLogger", "ZenonMWMessageTranslator", "ZenonMWMessageTypes", "ZenonP2PMessageTranslator", "ZenonP2PMessageValidator", "gkx", "recoverableViolation"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {}
        var c = a.prototype;
        c.subscribe = function(a, c, d) {
            var e = this;
            b("FBMqttChannel").subscribe("/webrtc", function(d) {
                var f = b("ZenonDebugLogger").getInstance()
                  , g = b("ZenonP2PMessageValidator").getValidP2PMessage(d)
                  , h = b("ZenonP2PMessageValidator").transformP2PMessage(g);
                e.$1(d, c);
                if (h) {
                    d = b("ZenonP2PMessageTranslator").toSignalingMessage(h);
                    d && (f.logP2PMessageReceived(g),
                    a(d),
                    f.logP2PMessageProcessed(g))
                }
            });
            b("FBMqttChannel").subscribe("/rtc_multi", function(c) {
                var f = JSON.parse(c)
                  , g = b("ZenonDebugLogger").getInstance();
                g.logMWMessage("RECEIVED [MQTT]", f);
                var h = b("ZenonMWMessageTranslator").toSignalingMessage(f);
                if (h) {
                    var i = f.jsonPayload.header.type === b("ZenonMWMessageTypes").ZenonMWSignalingPayloadType.JOIN
                      , j = b("gkx")("1767633");
                    if (i && j)
                        return;
                    g.logReceivingMultiwayMessage(f);
                    a(h);
                    d && e.$2(c, d);
                    g.logProcessingMultiwayMessage(f)
                }
            })
        }
        ;
        c.unsubscribe = function() {
            b("FBMqttChannel").unsubscribeAll("/webrtc"),
            b("FBMqttChannel").unsubscribeAll("/rtc_multi")
        }
        ;
        c.$1 = function(a, c) {
            try {
                a = JSON.parse(a);
                c(a)
            } catch (a) {
                b("recoverableViolation")("Signaling messages should be json parsable. error:" + a, "rtweb")
            }
        }
        ;
        c.$2 = function(a, c) {
            try {
                a = JSON.parse(a);
                c(a)
            } catch (a) {
                b("recoverableViolation")("Signaling messages should be json parsable. error:" + a, "rtweb")
            }
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("MercurySyncResnapshot", ["Promise", "Bootloader", "MercurySingletonProvider"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            this.$2 = a
        }
        a.getForFBID = function(a) {
            return g.getForFBID(a)
        }
        ;
        a.get = function() {
            return g.get()
        }
        ;
        var c = a.prototype;
        c.resnapshot = function() {
            var a = this;
            this.$1 || (this.$1 = new (b("Promise"))(function(c, d) {
                b("Bootloader").loadModules(["MercurySyncDeltaHandler"], function(b) {
                    b.getForFBID(a.$2).emergencyDFF(function(b) {
                        c(b),
                        a.$1 = null
                    }, function() {
                        d(),
                        a.$1 = null
                    })
                }, "MercurySyncResnapshot")
            }
            ));
            return this.$1
        }
        ;
        return a
    }();
    e.exports = a;
    var g = new (b("MercurySingletonProvider"))(a)
}
), null);
__d("WaterfallMessageLifetimeTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:WaterfallMessageLifetimeLoggerConfig", this.$1, b("Banzai").BASIC, a)
        }
        ;
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:WaterfallMessageLifetimeLoggerConfig", this.$1, b("Banzai").VITAL, a)
        }
        ;
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:WaterfallMessageLifetimeLoggerConfig", this.$1, {
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
        c.setAttemptID = function(a) {
            this.$1.attempt_id = a;
            return this
        }
        ;
        c.setDestService = function(a) {
            this.$1.dest_service = a;
            return this
        }
        ;
        c.setDeviceID = function(a) {
            this.$1.device_id = a;
            return this
        }
        ;
        c.setEventType = function(a) {
            this.$1.event_type = a;
            return this
        }
        ;
        c.setIsBatch = function(a) {
            this.$1.is_batch = a;
            return this
        }
        ;
        c.setIsGroup = function(a) {
            this.$1.is_group = a;
            return this
        }
        ;
        c.setMessageID = function(a) {
            this.$1.message_id = a;
            return this
        }
        ;
        c.setOfflineThreadingID = function(a) {
            this.$1.offline_threading_id = a;
            return this
        }
        ;
        c.setPageID = function(a) {
            this.$1.page_id = a;
            return this
        }
        ;
        c.setPushNotifID = function(a) {
            this.$1.push_notif_id = a;
            return this
        }
        ;
        c.setReceiptID = function(a) {
            this.$1.receipt_id = a;
            return this
        }
        ;
        c.setSenderID = function(a) {
            this.$1.sender_id = a;
            return this
        }
        ;
        c.setServiceName = function(a) {
            this.$1.service_name = a;
            return this
        }
        ;
        c.setSrcService = function(a) {
            this.$1.src_service = a;
            return this
        }
        ;
        c.setThreadID = function(a) {
            this.$1.thread_id = a;
            return this
        }
        ;
        c.setTimeStamp = function(a) {
            this.$1.time_stamp = a;
            return this
        }
        ;
        c.setTopic = function(a) {
            this.$1.topic = a;
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
        attempt_id: !0,
        dest_service: !0,
        device_id: !0,
        event_type: !0,
        is_batch: !0,
        is_group: !0,
        message_id: !0,
        offline_threading_id: !0,
        page_id: !0,
        push_notif_id: !0,
        receipt_id: !0,
        sender_id: !0,
        service_name: !0,
        src_service: !0,
        thread_id: !0,
        time_stamp: !0,
        topic: !0
    };
    e.exports = a
}
), null);
__d("MessageWaterfallLogger", ["MqttEnv", "WaterfallMessageLifetimeTypedLogger"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("MqttEnv").Env
      , h = b("MqttEnv").MqttGkNames;
    a = {
        logNewMessageToWaterfall: function(a) {
            var c = a.senderID
              , d = a.receiptID
              , e = a.messageID
              , f = a.offlineThreadingID
              , i = a.threadID
              , j = a.irisSeqId;
            a = a.isGroup;
            if (!g.genGk(h.mqtt_waterfall_log_client_sampling))
                return;
            new (b("WaterfallMessageLifetimeTypedLogger"))().setEventType("message_receive_ws").setServiceName("web").setSrcService("mqtt").setDestService("webclient").setSenderID(c).setReceiptID(d).setMessageID(e).setOfflineThreadingID(f).setThreadID(i).setIsGroup(a ? 1 : 0).addToExtraData("sync_seq_id", j).log()
        }
    };
    e.exports = a
}
), null);
__d("MessengerMQTTPayloadPreprocessor", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.process = a;
    function a(a, b, c) {
        var d = parseInt(c.irisSeqId.toString(), 10);
        return {
            seqID: d,
            obj: {
                queue: a,
                iseq: d,
                delta: c,
                seqID: d,
                type: b
            }
        }
    }
}
), null);
__d("MessengerMQTTPresenceReporting", ["BanzaiODS", "FBMqttChannel", "InstantGamesPresenceProperties", "MercuryConfig", "gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    f.init = a;
    f.reportForegroundState = c;
    f.reportChatVisibility = d;
    f.reportWorkchatDesktopCapability = r;
    f.reportInstantGamesPresence = s;
    f.onUserActivity = t;
    var g = "mqtt_web.presence"
      , h = "/foreground_state"
      , i = "/set_client_settings"
      , j = "/send_endpoint_capabilities"
      , k = 16384
      , l = 2097152
      , m = b("MercuryConfig").idle_limit || 18e5;
    a = b("MercuryConfig").idle_poll_interval || 3e5;
    c = 60 * 1e3;
    var n = b("gkx")("1166607") ? !1 : document.hasFocus(), o, p = Date.now(), q = !1;
    function a() {}
    function c(a, c) {
        (n !== a || c) && (n = a,
        b("FBMqttChannel").setForegroundState(a),
        b("FBMqttChannel").publish(h, JSON.stringify({
            foreground: a
        })),
        b("BanzaiODS").bumpEntityKey(2966, g, a ? "report.foregrounded" : "report.backgrounded"))
    }
    function d(a) {
        (o === void 0 || o != a) && (o = a,
        b("FBMqttChannel").setChatVisibility(a),
        b("FBMqttChannel").publish(i, JSON.stringify({
            make_user_available_when_in_foreground: a
        })),
        b("BanzaiODS").bumpEntityKey(2966, g, a ? "report.chat_visibility.on" : "report.chat_visibility.off"))
    }
    function r() {
        var a = b("FBMqttChannel").getEndpointCapabilities();
        a |= k;
        b("FBMqttChannel").setEndpointCapabilities(a);
        b("FBMqttChannel").publish(j, JSON.stringify({
            endpoint_capabilities: a
        }))
    }
    function s(a) {
        var c = b("FBMqttChannel").getEndpointCapabilities();
        a ? c |= l : c &= ~l;
        b("FBMqttChannel").setEndpointCapabilities(c);
        b("FBMqttChannel").publish(j, JSON.stringify({
            endpoint_capabilities: c
        }))
    }
    function t() {
        p = Date.now(),
        e.exports.reportForegroundState(!0, !1)
    }
    window.setInterval(function() {
        !document.hasFocus() && Date.now() - p > m && e.exports.reportForegroundState(!1, !0)
    }, a);
    window.setInterval(function() {
        var a = b("InstantGamesPresenceProperties").isActiveGamePresence();
        q !== a && (e.exports.reportInstantGamesPresence(a),
        q = a)
    }, c)
}
), null);
__d("MessengerMQTTPresenceActivity", ["CurrentUser", "Event", "MessengerMQTTPresenceReporting", "Run", "UserActivity"], (function(a, b, c, d, e, f) {
    f.init = a;
    function a() {
        b("Event").listen(window, "focus", function() {
            b("MessengerMQTTPresenceReporting").onUserActivity()
        }),
        b("Event").listen(window, "blur", function() {
            b("MessengerMQTTPresenceReporting").reportForegroundState(!1, !1)
        }),
        b("Run").onBeforeUnload(function() {
            b("MessengerMQTTPresenceReporting").reportForegroundState(!1, !0)
        }, !1),
        b("UserActivity").subscribe(function() {
            b("MessengerMQTTPresenceReporting").onUserActivity()
        }),
        b("CurrentUser").isWorkUser() && d(["WorkplaceChatHelper"], function(a) {
            a.isDesktopChatApp() && b("MessengerMQTTPresenceReporting").reportWorkchatDesktopCapability()
        })
    }
}
), null);
__d("MessengerMQTTTypingDataPreProcessor", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.process = a;
    function a(a, b) {
        var c = b.thread;
        a = c == null ? {
            from: b.sender_fbid,
            st: b.state,
            to: a,
            type: "typ"
        } : {
            from: b.sender_fbid,
            st: b.state,
            thread: c,
            thread_fbid: c,
            type: "ttyp"
        };
        return {
            obj: a
        }
    }
}
), null);
__d("SyncProtocolConstants", [], (function(a, b, c, d, e, f) {
    a = "IRIS_CURSOR_LIMIT";
    f.IRIS_CURSOR_LIMIT = a;
    b = "SNAPSHOT_FAILURE";
    f.SNAPSHOT_FAILURE = b
}
), null);
__d("SyncProtocolClient", ["Int64", "MercurySingletonProvider", "MqttEnv", "SyncProtocolConstants", "exponentialBackoff"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("MqttEnv").Env;
    a = function() {
        a.getForFBID = function(a) {
            return h.getForFBID(a)
        }
        ;
        function a(a) {
            var c = this;
            this.$1 = a;
            this.$2 = [];
            this.$5 = g.getLoggerInstance();
            this.$10 = new (b("exponentialBackoff"))(function() {
                return c.$11()
            }
            ,this)
        }
        var c = a.prototype;
        c.getPublishMessages = function() {
            return this.$12()
        }
        ;
        c.init = function(a, c, d, e) {
            var f = this;
            if (!c && !e) {
                this.$5.bumpCounter("sp_init_invalid_parameter");
                return this
            }
            this.$9 = a;
            this.$8 = !0;
            this.$3 = c ? b("Int64").fromString(c) : null;
            this.$6 = d;
            this.$7 = e;
            this.$4 = null;
            this.$9.subscribe("/t_ms", function(a) {
                return f.$13(a)
            });
            this.$9.subscribe("/thread_typing", function(a) {
                f.$14(a)
            });
            this.$9.subscribe("/orca_typing_notifications", function(a) {
                f.$14(a)
            });
            this.$9.subscribe("/notify_disconnect", function(a) {
                return f.$15(a)
            });
            this.connectToIris();
            return this
        }
        ;
        c.connectToIris = function(a) {
            a === void 0 && (a = null),
            a !== null && (this.$3 = b("Int64").fromString(a)),
            this.$8 = !0,
            this.$9.registerExtraConnectPayloadProvider(this)
        }
        ;
        c.$12 = function() {
            var a;
            if (this.$4) {
                if (!this.$3) {
                    this.$5.bumpCounter("connect_payload_iris_no_seq_id");
                    return []
                }
                a = this.$16()
            } else
                a = this.$17();
            this.$5.debugTrace("Sending request with MQTT Connect", JSON.stringify({
                topic: a.topic,
                payload: a.payload
            }));
            return [a]
        }
        ;
        c.$11 = function() {
            var a;
            if (this.$4) {
                if (!this.$3) {
                    this.$5.bumpCounter("subscribe_to_iris_no_seq_id");
                    return
                }
                a = this.$16()
            } else
                a = this.$17();
            this.$5.debugTrace("Sending request", JSON.stringify({
                topic: a.topic,
                payload: a.payload
            }));
            this.$9.publish(a.topic, a.payload, {
                qos: 1,
                skipBuffer: !0
            })
        }
        ;
        c.$18 = function(a) {
            var b = null;
            try {
                b = JSON.parse(a)
            } catch (a) {
                this.$5.logError(a, "Unable to process data")
            }
            return b
        }
        ;
        c.$14 = function(a) {
            var b = this.$18(a);
            if (b == null) {
                this.$5.logWarn("_processTypingData", "Unable to process typing data");
                return
            }
            this.$2.forEach(function(a) {
                typeof a.onTypingReceived === "function" && a.onTypingReceived(b)
            })
        }
        ;
        c.addDeltaStreamListener = function(a) {
            this.$2.push(a)
        }
        ;
        c.$15 = function(a) {
            this.$5.logWarn("_handleNotifyDisconnect", "Disconnecting reason: " + a),
            this.$5.bumpCounter("notify_disconnect_" + a),
            a === b("SyncProtocolConstants").IRIS_CURSOR_LIMIT && this.$19(a)
        }
        ;
        c.$19 = function(a) {
            this.$5.bumpCounter(a + "_request"),
            this.$4 = null,
            this.$8 = !1,
            this.$9.unregisterExtraConnectPayloadProvider(this),
            this.$2.forEach(function(b) {
                return b.onStreamDisconnect(a)
            })
        }
        ;
        c.$13 = function(a) {
            a = this.$18(a);
            if (a == null) {
                this.$5.logWarn("_processDeltas", "Unable to process delta");
                return
            }
            var b = {
                syncToken: a.syncToken,
                entityId: a.queueEntityId,
                errorCode: a.errorCode,
                firstSeqId: a.firstDeltaSeqId,
                lastSeqId: a.lastIssuedSeqId
            };
            this.$5.debugTrace("Sync data received", JSON.stringify(b));
            b = this.$1;
            a.queueEntityId != null && a.queueEntityId != b ? this.$5.bumpCounter("delta_for_other_fbid") : a.syncToken ? this.$20(a) : a.queueEntityId == null ? this.$5.bumpCounter("no_fbid") : a.errorCode ? this.$21(a.errorCode) : this.$22(a)
        }
        ;
        c.$21 = function(a) {
            this.$5.bumpCounter("iris_queue_error." + a),
            this.$5.logWarn("_handleIrisError", "Recevied an error code from sync protocol " + a),
            a === "ERROR_QUEUE_TEMPORARY_NOT_AVAILABLE" ? this.$10() : this.$19(a)
        }
        ;
        c.$20 = function(a) {
            var c = this
              , d = b("Int64").fromString(a.firstDeltaSeqId.toString());
            (this.$3 === null || this.$3 != null && !this.$3.equals(d)) && this.$5.bumpCounter("initial_sequence_id_mismatch");
            this.$4 = a.syncToken;
            this.$3 = d;
            this.$5.debugTrace("Sync token received", JSON.stringify({
                token: this.$4
            }));
            this.$9.subscribeChannelEvents({
                onMQTTStateChanged: function(a) {
                    a === "Connected" && c.$10.reset()
                }
            })
        }
        ;
        c.$22 = function(a) {
            var c = a.deltas
              , d = this.$3;
            if (c && d) {
                var e = b("Int64").fromString(a.firstDeltaSeqId.toString());
                a = b("Int64").fromString(a.lastIssuedSeqId.toString());
                e.equals(d.add(b("Int64").ONE)) ? this.$23(e, a, c) : e.compare(d) < 0 ? (this.$5.bumpCounter("delta_batch_in_middle"),
                a.compare(d) > 0 && this.$23(d.add(b("Int64").ONE), a, c)) : (this.$5.bumpCounter("missing_deltas_get_diffs"),
                this.$11())
            } else
                this.$5.bumpCounter("process_deltas_invalid_state")
        }
        ;
        c.$23 = function(a, c, d) {
            a = a;
            for (var e = 0; e < d.length; e++) {
                var f = d[e]
                  , g = f["class"] || "Missing"
                  , h = {
                    seqId: a.toString(),
                    type: g,
                    status: ""
                }
                  , i = 1;
                if (g != "Missing")
                    try {
                        i = this.$24(f, g, a, h)
                    } catch (a) {
                        h.status = "err:" + a.message
                    }
                else
                    h.status = "no type",
                    this.$5.bumpCounter("missing_delta_type");
                this.$5.debugTrace("onDeltaReceived", JSON.stringify(h));
                a = a.add(b("Int64").fromInt(i))
            }
            this.$3 = c
        }
        ;
        c.$24 = function(a, c, d, e) {
            var f = 1
              , g = "";
            c === "NoOp" && (f = a.numNoOps || f,
            g += "n:" + f);
            a.irisSeqId || (a.irisSeqId = d.toString(),
            g += "missing seq id");
            var h = b("Int64").fromString(a.irisSeqId.toString()) || d;
            h.equals(d) ? g += " seqId match" : (g += " seqId mismatch",
            this.$5.bumpCounter("seq_id_running_id_mismatch"));
            var i = {
                type: c,
                payload: a
            };
            this.$2.forEach(function(a) {
                return a.onDeltaReceived(i)
            });
            e.status = g;
            return f
        }
        ;
        c.$17 = function() {
            var a = {
                sync_api_version: 10,
                max_deltas_able_to_process: 1e3,
                delta_batch_size: 500,
                encoding: "JSON",
                entity_fbid: this.$1,
                initial_titan_sequence_id: this.$3 && this.$3.toString(),
                device_params: this.$6,
                queue_position: this.$7
            };
            return {
                topic: "/messenger_sync_create_queue",
                payload: JSON.stringify(a),
                qos: 1
            }
        }
        ;
        c.$16 = function() {
            var a = {
                sync_token: this.$4,
                sync_api_version: 10,
                max_deltas_able_to_process: 1e3,
                delta_batch_size: 500,
                encoding: "JSON",
                entity_fbid: this.$1,
                last_seq_id: this.$3 && this.$3.toString()
            };
            return {
                topic: "/messenger_sync_get_diffs",
                payload: JSON.stringify(a),
                qos: 1
            }
        }
        ;
        return a
    }();
    var h = new (b("MercurySingletonProvider"))(a);
    e.exports = a
}
), null);
__d("MessengerMQTTConnection", ["Arbiter", "CurrentUser", "FBMqttChannel", "MercurySingletonProvider", "MercurySyncResnapshot", "MessageWaterfallLogger", "MessengerMQTTConnectionEvents", "MessengerMQTTPayloadPreprocessor", "MessengerMQTTTypingDataPreProcessor", "MqttLogger", "PresenceStatus", "SyncProtocolClient", "SyncProtocolConstants", "promiseDone", "requireCond", "cr:1177633"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        a.getForFBID = function(a) {
            return g.getForFBID(a)
        }
        ;
        a.get = function() {
            return g.get()
        }
        ;
        function a(a) {
            this.$1 = a,
            this.$2 = b("MqttLogger").getInstance()
        }
        a.setUp = function(c) {
            var e = c.fbid
              , f = c.irisSeqID;
            c.appID;
            c.endpoint;
            if (!e || !f)
                return;
            var g = b("MqttLogger").getInstance();
            if (!b("CurrentUser").isLoggedInNow()) {
                g.debugTrace("run", "User not logged in");
                g.bumpCounter("user_not_loggged_in");
                return
            }
            var h = a.getForFBID(e);
            a.addDeltaStream({
                fbid: e,
                irisSeqID: f
            });
            h.$3(b("FBMqttChannel").getConnectionState(), b("FBMqttChannel").getLongPollingStatus());
            b("FBMqttChannel").subscribeChannelEvents({
                onMQTTStateChanged: function(a) {
                    h.$3(a, b("FBMqttChannel").getLongPollingStatus())
                },
                onJSError: function(a) {
                    g.bumpCounter("mqtt_js_error")
                }
            });
            b("cr:1177633") != null && b("cr:1177633").subscribe(b("PresenceStatus"));
            d(["MessengerMQTTPresenceActivity"], function(a) {
                a.init()
            })
        }
        ;
        a.addDeltaStream = function(c) {
            var d = c.fbid;
            c = c.irisSeqID;
            var e = a.getForFBID(d)
              , f = null;
            b("SyncProtocolClient").getForFBID(d).init(b("FBMqttChannel"), c, f).addDeltaStreamListener(e)
        }
        ;
        var c = a.prototype;
        c.onDeltaReceived = function(a) {
            var c = a.type;
            a = a.payload;
            try {
                c == "NewMessage" && b("MessageWaterfallLogger").logNewMessageToWaterfall({
                    senderID: a.messageMetadata.actorFbId,
                    receiptID: this.$1,
                    messageID: a.messageMetadata.messageId,
                    offlineThreadingID: a.messageMetadata.offlineThreadingId,
                    threadID: a.messageMetadata.threadKey.threadFbId != null ? a.messageMetadata.threadKey.threadFbId : "",
                    irisSeqId: a.irisSeqId,
                    isGroup: a.messageMetadata.threadKey.threadFbId != null
                })
            } catch (a) {
                this.$2.logError(a, "Unable to log to waterfall")
            }
            c = b("MessengerMQTTPayloadPreprocessor").process(this.$1, c, a);
            b("Arbiter").inform(b("MessengerMQTTConnectionEvents").DELTA_EVENT, c)
        }
        ;
        c.onStreamDisconnect = function(a) {
            var c = this;
            if (a === "ERROR_QUEUE_LOST" || a === "ERROR_QUEUE_NOT_FOUND" || a === "ERROR_QUEUE_EXCEEDS_MAX_DELTAS" || a === "ERROR_QUEUE_UNDERFLOW" || a === "ERROR_QUEUE_OVERFLOW") {
                b("promiseDone")(b("MercurySyncResnapshot").getForFBID(this.$1).resnapshot().then(function(a) {
                    if (a)
                        b("SyncProtocolClient").getForFBID(c.$1).connectToIris(a.toString());
                    else
                        throw new Error("No seqID returned from resnapshot")
                }), null, function() {
                    b("Arbiter").inform(b("MessengerMQTTConnectionEvents").STREAM_DISCONNECT, b("SyncProtocolConstants").SNAPSHOT_FAILURE)
                });
                return
            }
            a !== b("SyncProtocolConstants").IRIS_CURSOR_LIMIT && this.$2.bumpCounter("unhandled_iris_error." + a);
            b("Arbiter").inform(b("MessengerMQTTConnectionEvents").STREAM_DISCONNECT, a)
        }
        ;
        c.onTypingReceived = function(a) {
            a = b("MessengerMQTTTypingDataPreProcessor").process(this.$1, a);
            b("Arbiter").inform(b("MessengerMQTTConnectionEvents").TYP, a)
        }
        ;
        c.$3 = function(a, c) {
            if (a == "Connected" || c == "LPActive") {
                b("Arbiter").inform(b("MessengerMQTTConnectionEvents").STREAM_CONNECT);
                return
            }
            switch (a) {
            case b("MessengerMQTTConnectionEvents").STATE_CONNECTING:
                b("Arbiter").inform(b("MessengerMQTTConnectionEvents").STREAM_CONNECTING);
                break;
            case b("MessengerMQTTConnectionEvents").STATE_DISCONNECTED:
                b("Arbiter").inform(b("MessengerMQTTConnectionEvents").STREAM_DISCONNECT);
                break
            }
        }
        ;
        return a
    }();
    e.exports = a;
    var g = new (b("MercurySingletonProvider"))(a)
}
), null);
