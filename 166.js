if (self.CavalryLogger) {
    CavalryLogger.start_js(["4oe4u"]);
}

__d("useJoinableVideoChatsDidViewEducationalQPMutation.graphql", [], (function(a, b, c, d, e, f) {
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
            concreteType: "JoinableVideoChatsDidViewEducationalQpResponsePayload",
            kind: "LinkedField",
            name: "joinable_video_chats_did_view_educational_qp",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "client_mutation_id",
                storageKey: null
            }],
            storageKey: null
        }];
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "useJoinableVideoChatsDidViewEducationalQPMutation",
                selections: b,
                type: "Mutation",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "useJoinableVideoChatsDidViewEducationalQPMutation",
                selections: b
            },
            params: {
                id: "2786793821356319",
                metadata: {},
                name: "useJoinableVideoChatsDidViewEducationalQPMutation",
                operationKind: "mutation",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("VideoChatHomeContainerCometQuery$Parameters", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        kind: "PreloadableConcreteRequest",
        params: {
            id: "3229521773842254",
            metadata: {
                relayPreloadable: !0
            },
            name: "VideoChatHomeContainerCometQuery",
            operationKind: "query",
            text: null
        }
    };
    e.exports = a
}
), null);
__d("VideoChatHomeContainerCometQuery.graphql", ["relay-runtime"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "enableMultipleRooms"
        }
          , b = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "scale"
        }
          , c = {
            defaultValue: !1,
            kind: "LocalArgument",
            name: "show_with_active_room"
        }
          , d = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "should_show_educational_qp",
            storageKey: null
        }
          , e = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "should_collapse_tray",
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
            kind: "Literal",
            name: "supported",
            value: ["MessengerRoomsStatusTrayRenderingStrategy"]
        }]
          , h = {
            kind: "InlineFragment",
            selections: [{
                documentName: "VideoChatHomeContainerCometQuery",
                fragmentName: "RoomsTrayRoot_messengeTrayRenderingStrategy",
                fragmentPropName: "messengeTrayRenderingStrategy",
                kind: "ModuleImport"
            }],
            type: "MessengerRoomsStatusTrayRenderingStrategy",
            abstractKey: null
        }
          , i = [{
            kind: "Literal",
            name: "supported",
            value: ["MessengerRoomsStatusOptInPromotionRenderingStrategy"]
        }]
          , j = {
            kind: "InlineFragment",
            selections: [{
                documentName: "VideoChatHomeContainerCometQuery_2",
                fragmentName: "RoomsQuickPromotionComet_messengerRoomsStatusOptInPromotionRenderingStrategy",
                fragmentPropName: "messengerRoomsStatusOptInPromotionRenderingStrategy",
                kind: "ModuleImport"
            }],
            type: "MessengerRoomsStatusOptInPromotionRenderingStrategy",
            abstractKey: null
        }
          , k = [{
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "text",
            storageKey: null
        }]
          , l = {
            alias: "promotion_title",
            args: [{
                kind: "Literal",
                name: "type",
                value: "FEED_UPSELL_TITLE"
            }],
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "joinable_video_chats_string",
            plural: !1,
            selections: k,
            storageKey: 'joinable_video_chats_string(type:"FEED_UPSELL_TITLE")'
        }
          , m = {
            alias: "promotion_content",
            args: [{
                kind: "Literal",
                name: "type",
                value: "FEED_UPSELL_CONTENT"
            }],
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "joinable_video_chats_string",
            plural: !1,
            selections: k,
            storageKey: 'joinable_video_chats_string(type:"FEED_UPSELL_CONTENT")'
        }
          , n = {
            alias: "promotion_primary_button_text",
            args: [{
                kind: "Literal",
                name: "type",
                value: "FEED_UPSELL_BUTTON_STRING"
            }],
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "joinable_video_chats_string",
            plural: !1,
            selections: k,
            storageKey: 'joinable_video_chats_string(type:"FEED_UPSELL_BUTTON_STRING")'
        }
          , o = {
            alias: "promotion_secondary_button_text",
            args: [{
                kind: "Literal",
                name: "type",
                value: "FEED_UPSELL_SECONDARY_BUTTON_STRING"
            }],
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "joinable_video_chats_string",
            plural: !1,
            selections: k,
            storageKey: 'joinable_video_chats_string(type:"FEED_UPSELL_SECONDARY_BUTTON_STRING")'
        }
          , p = {
            alias: "rooms_currently_not_available_title",
            args: [{
                kind: "Literal",
                name: "type",
                value: "ROOMS_CURRENTLY_NOT_AVAILABLE_TITLE"
            }],
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "joinable_video_chats_string",
            plural: !1,
            selections: k,
            storageKey: 'joinable_video_chats_string(type:"ROOMS_CURRENTLY_NOT_AVAILABLE_TITLE")'
        };
        k = {
            alias: "rooms_currently_not_available_description",
            args: [{
                kind: "Literal",
                name: "type",
                value: "ROOMS_CURRENTLY_NOT_AVAILABLE_DESCRIPTION"
            }],
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "joinable_video_chats_string",
            plural: !1,
            selections: k,
            storageKey: 'joinable_video_chats_string(type:"ROOMS_CURRENTLY_NOT_AVAILABLE_DESCRIPTION")'
        };
        var q = {
            condition: "show_with_active_room",
            kind: "Condition",
            passingValue: !0,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "has_active_rooms",
                storageKey: null
            }]
        }
          , r = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null
        }
          , s = [{
            kind: "Literal",
            name: "first",
            value: 50
        }]
          , t = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "link_hash",
            storageKey: null
        }
          , u = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_published",
            storageKey: null
        }
          , v = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "active_call_participant_count",
            storageKey: null
        }
          , w = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "link_url",
            storageKey: null
        }
          , x = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__id",
            storageKey: null
        }
          , y = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "name",
            storageKey: null
        }
          , z = [{
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri",
            storageKey: null
        }]
          , A = {
            alias: null,
            args: [{
                kind: "Literal",
                name: "height",
                value: 160
            }, {
                kind: "Variable",
                name: "scale",
                variableName: "scale"
            }, {
                kind: "Literal",
                name: "width",
                value: 160
            }],
            concreteType: "Image",
            kind: "LinkedField",
            name: "profile_picture",
            plural: !1,
            selections: z,
            storageKey: null
        }
          , B = [A];
        return {
            fragment: {
                argumentDefinitions: [a, b, c],
                kind: "Fragment",
                metadata: null,
                name: "VideoChatHomeContainerCometQuery",
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
                        concreteType: "JoinableVideoChatsViewerFields",
                        kind: "LinkedField",
                        name: "joinable_video_chats",
                        plural: !1,
                        selections: [d, e, {
                            alias: null,
                            args: null,
                            concreteType: "MessengerRoomsSection",
                            kind: "LinkedField",
                            name: "messenger_rooms_section",
                            plural: !1,
                            selections: [f, {
                                alias: "tray_section",
                                args: g,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "status_renderer_strategies",
                                plural: !1,
                                selections: [h],
                                storageKey: 'status_renderer_strategies(supported:["MessengerRoomsStatusTrayRenderingStrategy"])'
                            }, {
                                alias: "qp_section",
                                args: i,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "status_renderer_strategies",
                                plural: !1,
                                selections: [j],
                                storageKey: 'status_renderer_strategies(supported:["MessengerRoomsStatusOptInPromotionRenderingStrategy"])'
                            }],
                            storageKey: null
                        }, l, m, n, o, p, k, q],
                        storageKey: null
                    }, {
                        args: null,
                        kind: "FragmentSpread",
                        name: "RoomsTrayRoot_viewer"
                    }],
                    storageKey: null
                }],
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: [b, a, c],
                kind: "Operation",
                name: "VideoChatHomeContainerCometQuery",
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
                        concreteType: "JoinableVideoChatsViewerFields",
                        kind: "LinkedField",
                        name: "joinable_video_chats",
                        plural: !1,
                        selections: [d, e, {
                            alias: null,
                            args: null,
                            concreteType: "MessengerRoomsSection",
                            kind: "LinkedField",
                            name: "messenger_rooms_section",
                            plural: !1,
                            selections: [f, {
                                alias: "tray_section",
                                args: g,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "status_renderer_strategies",
                                plural: !1,
                                selections: [r, h],
                                storageKey: 'status_renderer_strategies(supported:["MessengerRoomsStatusTrayRenderingStrategy"])'
                            }, {
                                alias: "qp_section",
                                args: i,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "status_renderer_strategies",
                                plural: !1,
                                selections: [r, j],
                                storageKey: 'status_renderer_strategies(supported:["MessengerRoomsStatusOptInPromotionRenderingStrategy"])'
                            }],
                            storageKey: null
                        }, l, m, n, o, p, k, {
                            condition: "enableMultipleRooms",
                            kind: "Condition",
                            passingValue: !0,
                            selections: [{
                                alias: "self_rooms",
                                args: null,
                                concreteType: "JoinableVideoChatsViewerFieldsPublishedSelfRoomCardsConnection",
                                kind: "LinkedField",
                                name: "published_self_room_cards",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "count",
                                    storageKey: null
                                }],
                                storageKey: null
                            }, {
                                alias: null,
                                args: s,
                                concreteType: "JoinableVideoChatsViewerFieldsPublishedSelfRoomCardsConnection",
                                kind: "LinkedField",
                                name: "published_self_room_cards",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "nodes",
                                    plural: !0,
                                    selections: [r, f, {
                                        kind: "InlineFragment",
                                        selections: [t, u, v, w, {
                                            kind: "ClientExtension",
                                            selections: [x]
                                        }],
                                        type: "MessengerCallInviteLink",
                                        abstractKey: null
                                    }],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "JoinableVideoChatsViewerFieldsPublishedSelfRoomCardsEdge",
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
                                        selections: [r, f, {
                                            kind: "InlineFragment",
                                            selections: [v, t, w, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "lock_status",
                                                storageKey: null
                                            }, u, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "emoji",
                                                storageKey: null
                                            }, y, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "link_surface",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                concreteType: null,
                                                kind: "LinkedField",
                                                name: "link_owner",
                                                plural: !1,
                                                selections: [r, f, {
                                                    kind: "InlineFragment",
                                                    selections: [y, A, {
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
                                                }],
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                concreteType: null,
                                                kind: "LinkedField",
                                                name: "link_container",
                                                plural: !1,
                                                selections: [r, {
                                                    kind: "InlineFragment",
                                                    selections: [f, {
                                                        alias: null,
                                                        args: null,
                                                        kind: "ScalarField",
                                                        name: "full_name",
                                                        storageKey: null
                                                    }, {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "Image",
                                                        kind: "LinkedField",
                                                        name: "profile_picture",
                                                        plural: !1,
                                                        selections: z,
                                                        storageKey: null
                                                    }],
                                                    type: "Group",
                                                    abstractKey: null
                                                }, {
                                                    kind: "InlineFragment",
                                                    selections: [f],
                                                    type: "Node",
                                                    abstractKey: "__isNode"
                                                }],
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "expected_call_start_time",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "is_owner_in_call",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "should_allow_guests",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                concreteType: "MessengerCallRoom",
                                                kind: "LinkedField",
                                                name: "messenger_call_room",
                                                plural: !1,
                                                selections: [{
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "MessengerCall",
                                                    kind: "LinkedField",
                                                    name: "maybe_stale_active_call",
                                                    plural: !1,
                                                    selections: [{
                                                        alias: null,
                                                        args: [{
                                                            kind: "Literal",
                                                            name: "should_fetch_only_in_call_participants",
                                                            value: !0
                                                        }],
                                                        concreteType: "MessengerCallToCallParticipantsConnection",
                                                        kind: "LinkedField",
                                                        name: "call_participants",
                                                        plural: !1,
                                                        selections: [{
                                                            alias: null,
                                                            args: null,
                                                            concreteType: null,
                                                            kind: "LinkedField",
                                                            name: "nodes",
                                                            plural: !0,
                                                            selections: [r, f, {
                                                                kind: "InlineFragment",
                                                                selections: B,
                                                                type: "User",
                                                                abstractKey: null
                                                            }, {
                                                                kind: "InlineFragment",
                                                                selections: B,
                                                                type: "MessengerCallGuestUser",
                                                                abstractKey: null
                                                            }],
                                                            storageKey: null
                                                        }],
                                                        storageKey: "call_participants(should_fetch_only_in_call_participants:true)"
                                                    }, f],
                                                    storageKey: null
                                                }, f],
                                                storageKey: null
                                            }, {
                                                kind: "ClientExtension",
                                                selections: [x, {
                                                    alias: null,
                                                    args: null,
                                                    kind: "ScalarField",
                                                    name: "is_ending",
                                                    storageKey: null
                                                }]
                                            }],
                                            type: "MessengerCallInviteLink",
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
                                storageKey: "published_self_room_cards(first:50)"
                            }, {
                                alias: null,
                                args: s,
                                filters: null,
                                handle: "connection",
                                key: "VideoChatTray_published_self_room_cards",
                                kind: "LinkedHandle",
                                name: "published_self_room_cards"
                            }]
                        }, q],
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "actor",
                        plural: !1,
                        selections: [r, f, {
                            kind: "InlineFragment",
                            selections: [{
                                condition: "enableMultipleRooms",
                                kind: "Condition",
                                passingValue: !1,
                                selections: [{
                                    alias: null,
                                    args: [{
                                        kind: "Literal",
                                        name: "render_location",
                                        value: "NEWSFEED"
                                    }],
                                    concreteType: "ProfileActiveMessengerRoom",
                                    kind: "LinkedField",
                                    name: "profile_active_messenger_room",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "MessengerCallInviteLink",
                                        kind: "LinkedField",
                                        name: "room",
                                        plural: !1,
                                        selections: [u, f, t],
                                        storageKey: null
                                    }],
                                    storageKey: 'profile_active_messenger_room(render_location:"NEWSFEED")'
                                }]
                            }],
                            type: "User",
                            abstractKey: null
                        }],
                        storageKey: null
                    }, {
                        alias: null,
                        args: [{
                            kind: "Literal",
                            name: "surface_nux_id",
                            value: 8001
                        }],
                        concreteType: "ViewerEligibleQuickPromotionsConnection",
                        kind: "LinkedField",
                        name: "eligible_promotions",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "ViewerEligibleQuickPromotionsEdge",
                            kind: "LinkedField",
                            name: "edges",
                            plural: !0,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "QuickPromotion",
                                kind: "LinkedField",
                                name: "node",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "CometQuickPromotionSections",
                                    kind: "LinkedField",
                                    name: "comet_qp_sections",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: [{
                                            kind: "Literal",
                                            name: "supported",
                                            value: ["CometQuickPromotionRoomsTrayWideCardRendererStrategy", "CometQuickPromotionRoomsTrayCardRendererStrategy", "CometQuickPromotionRoomsTrayCardSocialNormsRendererStrategy", "CometQuickPromotionRoomsTrayCardSocialNormsWideRendererStrategy", "CometQuickPromotionRoomsTraySocialNormsHappyHourRendererStrategy", "CometQuickPromotionRoomsTraySocialNormsHappyHourWideRendererStrategy", "CometQuickPromotionRoomsTraySocialNormsWideTemplateRendererStrategy", "CometQuickPromotionRoomsTraySocialNormsTemplateRendererStrategy"]
                                        }],
                                        concreteType: null,
                                        kind: "LinkedField",
                                        name: "renderer_strategy",
                                        plural: !1,
                                        selections: [r, {
                                            kind: "InlineFragment",
                                            selections: [{
                                                documentName: "useRoomsTrayQuickPromotion_viewer",
                                                fragmentName: "VideoChatTrayWideEduTile_quickPromotion",
                                                fragmentPropName: "quickPromotion",
                                                kind: "ModuleImport"
                                            }],
                                            type: "CometQuickPromotionRoomsTrayWideCardRendererStrategy",
                                            abstractKey: null
                                        }, {
                                            kind: "InlineFragment",
                                            selections: [{
                                                documentName: "useRoomsTrayQuickPromotion_viewer",
                                                fragmentName: "VideoChatTrayEduTile_quickPromotion",
                                                fragmentPropName: "quickPromotion",
                                                kind: "ModuleImport"
                                            }],
                                            type: "CometQuickPromotionRoomsTrayCardRendererStrategy",
                                            abstractKey: null
                                        }, {
                                            kind: "InlineFragment",
                                            selections: [{
                                                documentName: "useRoomsTrayQuickPromotion_viewer",
                                                fragmentName: "RoomsTrayQuickPromotionEidRoomTileCard_quickPromotion",
                                                fragmentPropName: "quickPromotion",
                                                kind: "ModuleImport"
                                            }],
                                            type: "CometQuickPromotionRoomsTrayCardSocialNormsRendererStrategy",
                                            abstractKey: null
                                        }, {
                                            kind: "InlineFragment",
                                            selections: [{
                                                documentName: "useRoomsTrayQuickPromotion_viewer",
                                                fragmentName: "RoomsTrayQuickPromotionEidRoomWideTileCard_quickPromotion",
                                                fragmentPropName: "quickPromotion",
                                                kind: "ModuleImport"
                                            }],
                                            type: "CometQuickPromotionRoomsTrayCardSocialNormsWideRendererStrategy",
                                            abstractKey: null
                                        }, {
                                            kind: "InlineFragment",
                                            selections: [{
                                                documentName: "useRoomsTrayQuickPromotion_viewer",
                                                fragmentName: "RoomsTrayQuickPromotionHappyHourTileCard_quickPromotion",
                                                fragmentPropName: "quickPromotion",
                                                kind: "ModuleImport"
                                            }],
                                            type: "CometQuickPromotionRoomsTraySocialNormsHappyHourRendererStrategy",
                                            abstractKey: null
                                        }, {
                                            kind: "InlineFragment",
                                            selections: [{
                                                documentName: "useRoomsTrayQuickPromotion_viewer",
                                                fragmentName: "RoomsTrayQuickPromotionHappyHourWideTileCard_quickPromotion",
                                                fragmentPropName: "quickPromotion",
                                                kind: "ModuleImport"
                                            }],
                                            type: "CometQuickPromotionRoomsTraySocialNormsHappyHourWideRendererStrategy",
                                            abstractKey: null
                                        }, {
                                            kind: "InlineFragment",
                                            selections: [{
                                                documentName: "useRoomsTrayQuickPromotion_viewer",
                                                fragmentName: "RoomsTrayQuickPromotionSocialNormsWideTemplateTileCard_quickPromotion",
                                                fragmentPropName: "quickPromotion",
                                                kind: "ModuleImport"
                                            }],
                                            type: "CometQuickPromotionRoomsTraySocialNormsWideTemplateRendererStrategy",
                                            abstractKey: null
                                        }, {
                                            kind: "InlineFragment",
                                            selections: [{
                                                documentName: "useRoomsTrayQuickPromotion_viewer",
                                                fragmentName: "RoomsTrayQuickPromotionSocialNormsTemplateTileCard_quickPromotion",
                                                fragmentPropName: "quickPromotion",
                                                kind: "ModuleImport"
                                            }],
                                            type: "CometQuickPromotionRoomsTraySocialNormsTemplateRendererStrategy",
                                            abstractKey: null
                                        }],
                                        storageKey: 'renderer_strategy(supported:["CometQuickPromotionRoomsTrayWideCardRendererStrategy","CometQuickPromotionRoomsTrayCardRendererStrategy","CometQuickPromotionRoomsTrayCardSocialNormsRendererStrategy","CometQuickPromotionRoomsTrayCardSocialNormsWideRendererStrategy","CometQuickPromotionRoomsTraySocialNormsHappyHourRendererStrategy","CometQuickPromotionRoomsTraySocialNormsHappyHourWideRendererStrategy","CometQuickPromotionRoomsTraySocialNormsWideTemplateRendererStrategy","CometQuickPromotionRoomsTraySocialNormsTemplateRendererStrategy"])'
                                    }, {
                                        alias: "rendererStrategyTypeName",
                                        args: [{
                                            kind: "Literal",
                                            name: "supported",
                                            value: ["CometQuickPromotionRoomsTrayCardRendererStrategy", "CometQuickPromotionRoomsTrayWideCardRendererStrategy", "CometQuickPromotionRoomsTrayCardSocialNormsRendererStrategy", "CometQuickPromotionRoomsTrayCardSocialNormsWideRendererStrategy", "CometQuickPromotionRoomsTraySocialNormsHappyHourRendererStrategy", "CometQuickPromotionRoomsTraySocialNormsHappyHourWideRendererStrategy", "CometQuickPromotionRoomsTraySocialNormsTemplateRendererStrategy", "CometQuickPromotionRoomsTraySocialNormsWideTemplateRendererStrategy"]
                                        }],
                                        concreteType: null,
                                        kind: "LinkedField",
                                        name: "renderer_strategy",
                                        plural: !1,
                                        selections: [r],
                                        storageKey: 'renderer_strategy(supported:["CometQuickPromotionRoomsTrayCardRendererStrategy","CometQuickPromotionRoomsTrayWideCardRendererStrategy","CometQuickPromotionRoomsTrayCardSocialNormsRendererStrategy","CometQuickPromotionRoomsTrayCardSocialNormsWideRendererStrategy","CometQuickPromotionRoomsTraySocialNormsHappyHourRendererStrategy","CometQuickPromotionRoomsTraySocialNormsHappyHourWideRendererStrategy","CometQuickPromotionRoomsTraySocialNormsTemplateRendererStrategy","CometQuickPromotionRoomsTraySocialNormsWideTemplateRendererStrategy"])'
                                    }],
                                    storageKey: null
                                }, f],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: "eligible_promotions(surface_nux_id:8001)"
                    }],
                    storageKey: null
                }]
            },
            params: {
                id: "3229521773842254",
                metadata: {
                    relayPreloadable: !0
                },
                name: "VideoChatHomeContainerCometQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    a.params.id != null && b("relay-runtime").PreloadableQueryRegistry.set(a.params.id, a);
    e.exports = a
}
), null);
__d("CometSuspenseList.react", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.SuspenseList;
    e.exports = c
}
), null);
__d("CometSVGIcon.react", ["React", "stylex", "useCometUniqueID"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React"), i = {
        icon: {
            display: "a8c37x1j",
            transitionDuration: "ms05siws",
            transitionProperty: "hwsy1cff",
            transitionTimingFunction: "b7h9ocf4"
        },
        inline: {
            display: "q9uorilb"
        },
        shadow: {
            filter: "p7y8hdfn"
        }
    }, j = {
        "active-tab": {
            fill: "aaxa7vy3"
        },
        black: {
            fill: "tiu6v23u"
        },
        blueLink: {
            fill: "enejjlrx"
        },
        disabled: {
            fill: "crt8y2ji"
        },
        highlight: {
            fill: "eltiug27"
        },
        "inactive-tab": {
            fill: "em6zcovv"
        },
        negative: {
            fill: "qe9egaru"
        },
        positive: {
            fill: "p5kwug6e"
        },
        primary: {
            fill: "fzdkajry"
        },
        secondary: {
            fill: "em6zcovv"
        },
        tertiary: {
            fill: "m50y4xls"
        },
        warning: {
            fill: "o9pvk78o"
        },
        white: {
            fill: "p361ku9c"
        }
    };
    function a(a) {
        var c = a.children
          , d = a.color
          , e = a.inline;
        e = e === void 0 ? !1 : e;
        var f = a.shadow;
        f = f === void 0 ? !1 : f;
        var k = a.size;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "color", "inline", "shadow", "size"]);
        var l = b("useCometUniqueID")(), m = [], n;
        d != null && typeof d !== "string" && h.isValidElement(d) && (m.push(h.cloneElement(d, {
            id: l,
            key: l,
            suppressHydrationWarning: !0
        })),
        n = "url(#" + l + ")");
        return h.jsxs("svg", babelHelpers["extends"]({}, a, {
            className: (g || (g = b("stylex")))([i.icon, e && i.inline, f && i.shadow, typeof d === "string" && d !== "black" && j[d]]),
            fill: n,
            height: k,
            suppressHydrationWarning: !0,
            width: k,
            children: [m.length > 0 ? h.jsx("defs", {
                children: m
            }) : void 0, c]
        }))
    }
}
), null);
__d("CometIconAppFacebookCircleFilled.react", ["CometSVGIcon.react", "React", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        return g.jsxs(b("CometSVGIcon.react"), babelHelpers["extends"]({}, a, {
            viewBox: "0 0 36 36",
            children: [g.jsx("path", {
                d: "M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"
            }), g.jsx("path", {
                className: "p361ku9c",
                d: "M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
            })]
        }))
    }
}
), null);
__d("CometIconLogoFlat.react", ["React", "requireCond", "cr:1242743"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        a.color;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["color"]);
        return g.jsx(b("cr:1242743"), babelHelpers["extends"]({}, a, {
            color: "active-tab"
        }))
    }
}
), null);
__d("TetraButtonGroup.react", ["CometFocusTableContext", "CometRow.react", "CometRowItem.react", "React", "TetraButton.react", "stylex"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React"), i = {
        hiddenButton: {
            height: "do00u71z",
            visibility: "kr9hpln1"
        },
        resetFlexBasis: {
            flexBasis: "mg4g778l"
        }
    };
    function j(a) {
        var c = h.useContext(b("CometFocusTableContext"));
        c = c.FocusCell;
        a = a.children;
        return c != null ? h.jsx(c, {
            children: a
        }) : a
    }
    function a(a) {
        var c = a.align
          , d = c === void 0 ? "justify" : c;
        c = a.direction;
        c = c === void 0 ? "forward" : c;
        var e = a.paddingHorizontal
          , f = a.paddingTop
          , k = a.primary
          , l = a.secondary
          , m = a.size
          , n = a.wrap;
        n = n === void 0 ? "none" : n;
        var o = []
          , p = []
          , q = k.ref
          , r = k.testid;
        r = babelHelpers.objectWithoutPropertiesLoose(k, ["ref", "testid"]);
        k = h.jsx(j, {
            children: h.jsx(b("TetraButton.react"), babelHelpers["extends"]({}, r, {
                ref: q,
                size: m,
                testid: void 0
            }))
        });
        o.push({
            hidden: h.jsx(b("TetraButton.react"), babelHelpers["extends"]({}, r, {
                disabled: !0,
                padding: "normal",
                size: m
            })),
            visible: k
        });
        if (l != null) {
            q = l.ref;
            r = l.testid;
            r = babelHelpers.objectWithoutPropertiesLoose(l, ["ref", "testid"]);
            o.push({
                hidden: h.jsx(b("TetraButton.react"), babelHelpers["extends"]({}, r, {
                    disabled: !0,
                    padding: "normal",
                    size: m,
                    type: "secondary"
                })),
                visible: h.jsx(j, {
                    children: h.jsx(b("TetraButton.react"), babelHelpers["extends"]({}, r, {
                        ref: q,
                        size: m,
                        testid: void 0,
                        type: "secondary"
                    }))
                })
            })
        } else if (a.secondaryIcon != null)
            p.push(h.jsx(b("CometRowItem.react"), {
                children: h.jsx(j, {
                    children: h.jsx(b("TetraButton.react"), babelHelpers["extends"]({}, a.secondaryIcon, {
                        labelIsHidden: !0,
                        size: m,
                        type: "secondary"
                    }))
                })
            }, "secondary-icon"));
        else if (a.secondaryIconGroup != null) {
            l = a.secondaryIconGroup;
            r = l.primaryIcon;
            q = l.secondaryIcon;
            p.push(h.jsx(b("CometRowItem.react"), {
                children: h.jsx(j, {
                    children: h.jsx(b("TetraButton.react"), babelHelpers["extends"]({}, r, {
                        labelIsHidden: !0,
                        size: m,
                        type: "secondary"
                    }))
                })
            }, "secondary-icon-1"), h.jsx(b("CometRowItem.react"), {
                children: h.jsx(j, {
                    children: h.jsx(b("TetraButton.react"), babelHelpers["extends"]({}, q, {
                        labelIsHidden: !0,
                        size: m,
                        type: "secondary"
                    }))
                })
            }, "secondary-icon-2"))
        }
        a = o.map(function(a, c) {
            return h.jsx(b("CometRowItem.react"), {
                expanding: d === "justify",
                xstyle: i.resetFlexBasis,
                children: o.map(function(a, d) {
                    return h.jsx(h.Fragment, {
                        children: c !== d ? h.jsx("div", {
                            "aria-hidden": !0,
                            className: (g || (g = b("stylex")))(i.hiddenButton),
                            children: a.hidden
                        }) : a.visible
                    }, d)
                })
            }, c)
        });
        l = [h.jsx(b("CometRowItem.react"), {
            expanding: d === "justify",
            xstyle: i.resetFlexBasis,
            children: k
        }, "primary")].concat(p);
        r = o.length === 2;
        return h.jsx(b("CometRow.react"), {
            align: d,
            direction: c,
            paddingHorizontal: e,
            paddingTop: f,
            spacing: 8,
            wrap: n,
            children: r ? a : l
        })
    }
}
), null);
__d("CometPagelet.react", ["CometBackupPlaceholder.react", "CometPlaceholder.react", "CometSuspenseList.react", "LegacyHidden", "React", "requireCond", "cr:1191379"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React");
    e = h.forwardRef(function(a, b) {
        a = a.children;
        return h.jsxs(h.Fragment, {
            children: [" ", a(b, function() {
                return null
            }), " "]
        })
    });
    var i = (g = b("cr:1191379")) != null ? g : e;
    function a(a, c) {
        var d = a.children
          , e = a.className
          , f = a.fallback
          , g = a.hidden
          , j = a.name
          , k = a.position
          , l = a.unstable_expectedLoadTime
          , m = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "className", "fallback", "hidden", "name", "position", "unstable_expectedLoadTime"])
          , n = j;
        k != null && k < 2 ? n += "_" + k : k != null && (n += "_{n}");
        return h.jsx(i, babelHelpers["extends"]({}, m, {
            name: n,
            pageletName: j,
            position: k,
            ref: c,
            children: function(a, c) {
                return h.jsxs(b("CometPlaceholder.react"), {
                    fallback: f,
                    unstable_expectedLoadTime: l,
                    children: [h.jsx(c, {}), h.jsx(b("LegacyHidden"), {
                        htmlAttributes: babelHelpers["extends"]({
                            className: e,
                            "data-pagelet": n
                        }, m.pageletAriaProps),
                        mode: g === !0 ? "hidden" : "visible",
                        ref: a,
                        children: d
                    })]
                })
            }
        }))
    }
    function c(a, c) {
        var d = a.children
          , e = a.className
          , f = a.fallback
          , g = a.hidden
          , j = a.name
          , k = a.position
          , l = a.unstable_expectedLoadTime
          , m = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "className", "fallback", "hidden", "name", "position", "unstable_expectedLoadTime"])
          , n = j;
        k != null && k < 2 ? n += "_" + k : k != null && (n += "_{n}");
        return h.jsx(i, babelHelpers["extends"]({}, m, {
            name: n,
            position: k,
            ref: c,
            children: function(a, c) {
                return h.jsxs(b("CometBackupPlaceholder.react"), {
                    fallback: f,
                    unstable_expectedLoadTime: l,
                    children: [h.jsx(c, {}), h.jsx(b("LegacyHidden"), {
                        htmlAttributes: babelHelpers["extends"]({
                            className: e,
                            "data-pagelet": n
                        }, m.pageletAriaProps),
                        mode: g === !0 ? "hidden" : "visible",
                        ref: a,
                        children: d
                    })]
                })
            }
        }))
    }
    function d(a, c) {
        var d = a.children
          , e = a.className
          , f = a.hidden
          , g = a.name
          , j = a.position
          , k = a.revealOrder
          , l = a.tail
          , m = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "className", "hidden", "name", "position", "revealOrder", "tail"])
          , n = g;
        j != null && j < 2 ? n += "_" + j : j != null && (n += "_{n}");
        return h.jsx(i, babelHelpers["extends"]({}, m, {
            name: n,
            position: j,
            ref: c,
            children: function(a, c) {
                return h.jsxs(b("LegacyHidden"), {
                    htmlAttributes: babelHelpers["extends"]({
                        className: e,
                        "data-pagelet": n
                    }, m.pageletAriaProps),
                    mode: f === !0 ? "hidden" : "visible",
                    ref: a,
                    children: [h.jsx(c, {}), h.jsx(b("CometSuspenseList.react"), {
                        revealOrder: k,
                        tail: l,
                        children: d
                    })]
                })
            }
        }))
    }
    g = h.forwardRef(c);
    f.BackupPlaceholder = g;
    e = h.forwardRef(a);
    f.Placeholder = e;
    c = h.forwardRef(d);
    f.SuspenseList = c
}
), null);
__d("createUseMutation_DEPRECATED", ["Promise", "CometRelay", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a, c, d, e) {
        return function() {
            var f = b("CometRelay").useRelayEnvironment();
            return g.useCallback(function(g, h, i) {
                return new (b("Promise"))(function(j, k) {
                    return b("CometRelay").enqueueMutation(f, {
                        mutation: a,
                        onCompleted: function(a, b) {
                            b && b.length ? k(b) : j(a)
                        },
                        onError: function(a) {
                            return k([a])
                        },
                        optimisticResponse: c ? c(g, h, i) : null,
                        optimisticUpdater: d ? d(g, h, i) : null,
                        updater: e ? e(g, h, i) : null,
                        variables: babelHelpers["extends"]({
                            input: g
                        }, h)
                    })
                }
                )
            }, [f])
        }
    }
}
), null);
__d("useJoinableVideoChatsDidViewEducationalQPMutation", ["CometRelay", "createUseMutation_DEPRECATED", "useJoinableVideoChatsDidViewEducationalQPMutation.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;
    a = g !== void 0 ? g : g = b("useJoinableVideoChatsDidViewEducationalQPMutation.graphql");
    c = b("createUseMutation_DEPRECATED")(a);
    e.exports = c
}
), null);
__d("RoomsQuickPromotionPlaceholder.react", ["ix", "fbt", "CometAspectRatioContainer.react", "CometCard.react", "CometIconLogoFlat.react", "React", "TetraButtonGroup.react", "TetraCircleButton.react", "TetraText.react", "fbicon", "stylex"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i = b("React");
    function j(a, b) {
        a = a;
        b = b;
        return a / b
    }
    function a(a) {
        var c = a.content
          , d = a.primaryButtonTitle
          , e = a.secondaryButtonTitle;
        a = a.title;
        var f = 500
          , k = 218;
        return i.jsx("div", {
            className: "k4urcfbm sjgh65i0",
            children: i.jsxs(b("CometCard.react"), {
                background: "white",
                dropShadow: 1,
                children: [i.jsxs("div", {
                    className: "l9j0dhe7 eg9m0zos d76ob5m9 g6srhlxm",
                    children: [i.jsx(b("CometAspectRatioContainer.react"), {
                        aspectRatio: j(f, k)
                    }), i.jsxs("div", {
                        className: "kr520xx4 j9ispegn pmk7jnqg n7fi1qx3 rq0escxv i09qtzwb",
                        children: [i.jsx("div", {
                            className: "j9ispegn pmk7jnqg dati1w0a f10w8fjw rz4wbd8a pybr56ya",
                            children: i.jsx(b("CometIconLogoFlat.react"), {
                                size: 32
                            })
                        }), i.jsx("span", {
                            className: "pmk7jnqg hv4rvrfc a8nywdso f10w8fjw pybr56ya n7fi1qx3",
                            children: i.jsx(b("TetraCircleButton.react"), {
                                color: "white",
                                icon: b("fbicon")._(g("478233"), 20),
                                label: h._("\u0110\u00f3ng"),
                                size: 32,
                                type: "dark-overlay"
                            })
                        })]
                    })]
                }), i.jsx("div", {
                    className: "dhix69tm oygrvhab wkznzc2l tr9rh885 cbu4d94t j83agx80",
                    children: i.jsxs("div", {
                        children: [i.jsx("div", {
                            className: "f10w8fjw",
                            children: i.jsx(b("TetraText.react"), {
                                type: "headlineEmphasized2",
                                children: a
                            })
                        }), i.jsx(b("TetraText.react"), {
                            type: "body3",
                            children: c
                        })]
                    })
                }), i.jsx("div", {
                    className: "f10w8fjw",
                    children: i.jsx(b("TetraButtonGroup.react"), {
                        direction: "backward",
                        primary: {
                            label: d,
                            reduceEmphasis: !0
                        },
                        secondary: {
                            label: e
                        }
                    })
                })]
            })
        })
    }
}
), null);
__d("VideoChatHomeContainerBlue.entrypoint", ["JSResource", "VideoChatHomeContainerCometQuery$Parameters", "WebPixelRatio", "qex"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        getPreloadProps: function() {
            var a;
            return {
                queries: {
                    queryReference: {
                        parameters: b("VideoChatHomeContainerCometQuery$Parameters"),
                        variables: {
                            enableMultipleRooms: (a = b("qex")._("1624805")) != null ? a : !1,
                            scale: b("WebPixelRatio").get()
                        }
                    }
                }
            }
        },
        root: b("JSResource")("VideoChatHomeContainerBlue.react").__setRef("VideoChatHomeContainerBlue.entrypoint")
    };
    e.exports = a
}
), null);
__d("useRoomsTofuTrayMaxWidth", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a() {
        var a = 562;
        return a
    }
}
), null);
__d("VideoChatTrayPlaceholder.react", ["BaseLoadingStateElement.react", "CometCard.react", "React", "VideoChatTrayTilePlaceholder.react", "gkx", "requireCond", "stylex", "useRoomsTofuTrayMaxWidth", "cr:1750417"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React"), i = {
        cardContainer: {
            alignItems: "gs1a9yip",
            boxSizing: "rq0escxv",
            display: "j83agx80",
            flexGrow: "buofh1pr",
            flexShrink: "pfnyh3mw",
            marginEnd: "cgat1ltu",
            marginStart: "kkf49tns"
        },
        container: {
            display: "j83agx80",
            flexDirection: "btwxx1t3",
            justifyContent: "i1fnvgqd",
            paddingTop: "pybr56ya",
            paddingEnd: "d1544ag0",
            paddingBottom: "f10w8fjw",
            paddingStart: "tw6a2znq",
            width: "g2wf7z4h"
        },
        marginBottom10: {
            marginBottom: "oud54xpy"
        },
        root: {
            alignItems: "bp9cbjyn",
            display: "j83agx80",
            flexDirection: "cbu4d94t",
            justifyContent: "jifvfom9",
            marginBottom: "sjgh65i0",
            overflowX: "ni8dbmo4",
            overflowY: "stjgntxs",
            width: "k4urcfbm"
        }
    }, j = (c = {},
    c[0] = {
        width: "sb3ic3sl",
        "@media (max-width: 299px)": {
            width: "tfksjxg8"
        }
    },
    c[404] = {
        width: "gppcmqpj",
        "@media (min-width: 404px) and (max-width: 561px)": {
            width: "g5egk45q"
        }
    },
    c[562] = {
        width: "exqoj0th",
        "@media (min-width: 562px) and (max-width: 719px)": {
            width: "m8vaowjb"
        }
    },
    c[720] = {
        width: "tsqz73po",
        "@media (min-width: 720px) and (max-width: 877px)": {
            width: "jcu8m7xq"
        }
    },
    c);
    function a(a, c) {
        var d = b("useRoomsTofuTrayMaxWidth")();
        a = b("gkx")("708253");
        var e = Object.keys(j).filter(function(a) {
            return a <= d
        }).map(function(a) {
            return j[a]
        })
          , f = 5;
        return h.jsx("div", {
            role: "article",
            children: h.jsx(b("BaseLoadingStateElement.react"), {
                ref: c,
                xstyle: [i.root, a === !1 && i.marginBottom10],
                children: h.jsxs(b("CometCard.react"), {
                    background: "white",
                    dropShadow: 1,
                    children: [b("cr:1750417") != null && h.jsx(b("cr:1750417"), {}), h.jsx("div", {
                        className: (g || (g = b("stylex")))(i.container),
                        children: Array(f).fill().map(function(a, c) {
                            return h.jsx("div", {
                                className: (g || (g = b("stylex")))([i.cardContainer].concat(e)),
                                children: h.jsx(b("VideoChatTrayTilePlaceholder.react"), {}, c)
                            }, c)
                        })
                    })]
                })
            })
        })
    }
    d = h.forwardRef(a);
    e.exports = d
}
), null);
__d("VideoChatHomeContainerComet.react", ["CometErrorBoundary.react", "CometPagelet.react", "CometRelay", "CometThrottle", "JSResource", "React", "RoomCollapsedTrayPlaceholder.react", "RoomsQuickPromotionPlaceholder.react", "VideoChatTrayPlaceholder.react", "promiseDone", "unrecoverableViolation", "useCometLazyDialog", "useJoinableVideoChatsDidViewEducationalQPMutation", "VideoChatHomeContainerCometQuery.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("React"), i = b("JSResource")("RoomsNotAvailableErrorStateDialog.react").__setRef("VideoChatHomeContainerComet.react"), j = g !== void 0 ? g : g = b("VideoChatHomeContainerCometQuery.graphql"), k = !1;
    function a(a) {
        var c, d, e, f, g, l, m, n = a.joinableVideoChatsQueryReference, o = a.showCollapsedTray, p = a.showPromotionalUnit;
        a = a.showWithActiveRoom;
        var q = b("CometRelay").useQueryLoader(j)
          , r = q[0]
          , s = q[1]
          , t = (q = r) != null ? q : n;
        r = b("CometRelay").usePreloadedQuery(j, t);
        var u = r == null ? void 0 : (q = r.viewer) == null ? void 0 : (n = q.joinable_video_chats) == null ? void 0 : n.should_show_educational_qp;
        q = r == null ? void 0 : (q = r.viewer) == null ? void 0 : (n = q.joinable_video_chats) == null ? void 0 : n.should_collapse_tray;
        n = r == null ? void 0 : (n = r.viewer) == null ? void 0 : (n = n.joinable_video_chats) == null ? void 0 : (n = n.messenger_rooms_section) == null ? void 0 : n.id;
        c = r == null ? void 0 : (c = r.viewer) == null ? void 0 : (c = c.joinable_video_chats) == null ? void 0 : c.has_active_rooms;
        if (n == null)
            throw b("unrecoverableViolation")("Expected ID of the room settings object to be non-null", "rooms");
        var v = function() {
            return s(t.variables, {
                fetchPolicy: "network-only"
            })
        }
          , w = b("useJoinableVideoChatsDidViewEducationalQPMutation")();
        h.useEffect(function() {
            if (k || u === !1)
                return;
            var a = b("CometThrottle")(function() {
                var a = w({});
                if (a == null)
                    return;
                b("promiseDone")(a, function() {
                    k = !0
                })
            }, 1e3, {
                leading: !0
            });
            a()
        }, [w, u]);
        b("CometRelay").useSubscribeToInvalidationState([n], function() {
            v()
        });
        var x = b("useCometLazyDialog")(i)
          , y = x[0];
        x = x[1];
        d = r == null ? void 0 : (d = r.viewer) == null ? void 0 : d.joinable_video_chats;
        e = (e = d == null ? void 0 : (e = d.promotion_title) == null ? void 0 : e.text) != null ? e : "Video Chat in Messenger Rooms";
        f = (f = d == null ? void 0 : (f = d.promotion_content) == null ? void 0 : f.text) != null ? f : "Create a room to hang out with people on video.";
        g = (g = d == null ? void 0 : (g = d.promotion_primary_button_text) == null ? void 0 : g.text) != null ? g : "Create Room";
        l = (l = d == null ? void 0 : (l = d.promotion_secondary_button_text) == null ? void 0 : l.text) != null ? l : "Learn More";
        var z = (m = d == null ? void 0 : (m = d.rooms_currently_not_available_title) == null ? void 0 : m.text) != null ? m : "Rooms Isn't Available Right Now"
          , A = (d = d == null ? void 0 : (m = d.rooms_currently_not_available_description) == null ? void 0 : m.text) != null ? d : "This may be because of a technical error we're working to fix.";
        p = (d = (m = p) != null ? m : u) != null ? d : !1;
        o = (d = (m = o) != null ? m : q) != null ? d : !1;
        m = h.useState(!1);
        q = m[0];
        var B = m[1];
        return a === !0 && c === !1 ? null : h.jsx("div", {
            ref: x,
            children: h.jsx(b("CometErrorBoundary.react"), {
                context: {
                    project: "rooms"
                },
                fallback: function(a) {
                    y({
                        body: A,
                        title: z
                    }, void 0);
                    return null
                },
                children: h.jsx(b("CometPagelet.react").Placeholder, {
                    fallback: p ? h.jsx(b("RoomsQuickPromotionPlaceholder.react"), {
                        content: f,
                        primaryButtonTitle: g,
                        secondaryButtonTitle: l,
                        title: e
                    }) : o === !0 ? h.jsx(b("RoomCollapsedTrayPlaceholder.react"), {}) : h.jsx(b("VideoChatTrayPlaceholder.react"), {}),
                    name: "VideoChatHomeUnit",
                    children: h.jsx(b("CometRelay").MatchContainer, {
                        match: p && !q ? r == null ? void 0 : (d = r.viewer) == null ? void 0 : (m = d.joinable_video_chats) == null ? void 0 : (a = m.messenger_rooms_section) == null ? void 0 : a.qp_section : r == null ? void 0 : (c = r.viewer) == null ? void 0 : (x = c.joinable_video_chats) == null ? void 0 : (f = x.messenger_rooms_section) == null ? void 0 : f.tray_section,
                        props: {
                            onDismiss: function() {
                                B(!0)
                            },
                            shouldShowCollapsedTray: o,
                            viewerRef: r == null ? void 0 : r.viewer
                        }
                    })
                })
            }, n)
        })
    }
}
), null);
__d("VideoChatHomeContainerBlue.react", ["React", "VideoChatHomeContainerComet.react"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.props;
        a = a.queries;
        return g.jsx(b("VideoChatHomeContainerComet.react"), {
            joinableVideoChatsQueryReference: a.queryReference,
            showCollapsedTray: c.showCollapsedTray,
            showPromotionalUnit: c.showPromotionalUnit
        })
    }
}
), null);
__d("VideoChatHomeContainerBlueRoot.react", ["CometBlueBridge.react", "CometErrorBoundary.react", "CometPlaceholder.react", "CometRelay", "React", "RelayFBDefaultEnvironment", "relay-experimental/LazyLoadEntryPointContainer_DEPRECATED.react", "requireCond", "cr:1374862", "VideoChatHomeContainerBlue.react", "VideoChatHomeContainerBlue.entrypoint"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    b("VideoChatHomeContainerBlue.react");
    function a(a) {
        var c = a.showCollapsedTray;
        a = a.showPromotionalUnit;
        return g.jsx(b("CometRelay").RelayEnvironmentProvider, {
            environment: b("RelayFBDefaultEnvironment"),
            children: g.jsx(b("cr:1374862"), {
                children: g.jsx(b("CometBlueBridge.react"), {
                    children: g.jsx(b("CometErrorBoundary.react"), {
                        children: g.jsx(b("CometPlaceholder.react"), {
                            fallback: null,
                            children: g.jsx(b("relay-experimental/LazyLoadEntryPointContainer_DEPRECATED.react"), {
                                entryPoint: b("VideoChatHomeContainerBlue.entrypoint"),
                                entryPointParams: {},
                                props: {
                                    showCollapsedTray: c,
                                    showPromotionalUnit: a
                                }
                            })
                        })
                    })
                })
            })
        })
    }
}
), null);
