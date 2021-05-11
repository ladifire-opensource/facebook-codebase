if (self.CavalryLogger) {
    CavalryLogger.start_js(["6pmtA"]);
}

__d("GamesVideoStreamerDashboardProfileQuery.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "profileID"
        }]
          , b = [{
            kind: "Variable",
            name: "id",
            variableName: "profileID"
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
            name: "name",
            storageKey: null
        }
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
            concreteType: "Image",
            kind: "LinkedField",
            name: "profile_picture",
            plural: !1,
            selections: e,
            storageKey: null
        }
          , g = {
            kind: "InlineFragment",
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "username",
                storageKey: null
            }],
            type: "User",
            abstractKey: null
        }
          , h = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "category_id",
            storageKey: null
        }
          , i = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "uri_token",
            storageKey: null
        }
          , j = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "profile_plus_id_for_delegate_page",
            storageKey: null
        }
          , k = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "follower_count",
            storageKey: null
        }
          , l = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "supporter_count",
            storageKey: null
        }
          , m = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "fan_support_enabled",
            storageKey: null
        }
          , n = {
            alias: null,
            args: null,
            concreteType: "FanSupportPageSettings",
            kind: "LinkedField",
            name: "fan_support_settings",
            plural: !1,
            selections: [c, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "level_up_terms_accepted",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "mixer_bonus_terms_accepted",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "pay_sub_terms_accepted",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "payment_subscription_enabled",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "stars_minimum_amount",
                storageKey: null
            }],
            storageKey: null
        }
          , o = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "games_scaled_partnership_status",
            storageKey: null
        }
          , p = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "woodhenge_page_vertical",
            storageKey: null
        }
          , q = {
            alias: null,
            args: null,
            concreteType: "WoodhengeOnboardingInfo",
            kind: "LinkedField",
            name: "woodhenge_onboarding_info",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "can_onboard_stickers",
                storageKey: null
            }, {
                alias: null,
                args: null,
                concreteType: "StickerPack",
                kind: "LinkedField",
                name: "sticker_pack",
                plural: !1,
                selections: [c],
                storageKey: null
            }],
            storageKey: null
        }
          , r = [{
            kind: "Literal",
            name: "product",
            value: "STARS"
        }]
          , s = {
            alias: "stars_tos_accepted",
            args: r,
            kind: "ScalarField",
            name: "cm_tos_accepted",
            storageKey: 'cm_tos_accepted(product:"STARS")'
        };
        r = {
            alias: "stars_onboarded",
            args: r,
            kind: "ScalarField",
            name: "cm_product_onboarded",
            storageKey: 'cm_product_onboarded(product:"STARS")'
        };
        var t = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "can_sign_up_gaming_incentives",
            storageKey: null
        }
          , u = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "chat_commands_enabled",
            storageKey: null
        }
          , v = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "stay_live_enabled",
            storageKey: null
        }
          , w = {
            alias: null,
            args: null,
            concreteType: "GamingVideoCreatorGoalsSettingsToGoalsConnection",
            kind: "LinkedField",
            name: "gaming_video_goals",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                concreteType: "GamingVideoCreatorGoalsSettingsToGoalsEdge",
                kind: "LinkedField",
                name: "edges",
                plural: !0,
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "GamingVideoGoal",
                    kind: "LinkedField",
                    name: "node",
                    plural: !1,
                    selections: [c, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "title_string",
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
                        name: "gaming_video_goal_type",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "gaming_video_goal_status",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "value_at_creation",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "current_goal_value",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "target_value",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "is_incremental",
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
                        name: "end_time",
                        storageKey: null
                    }],
                    storageKey: null
                }],
                storageKey: null
            }],
            storageKey: null
        }
          , x = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_eligible",
            storageKey: null
        }
          , y = {
            alias: null,
            args: null,
            concreteType: "LevelUpEligibility",
            kind: "LinkedField",
            name: "level_up_eligibility",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "meets_days_requirement",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "meets_followers_requirement",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "meets_gvc_requirement",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "meets_hours_requirement",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "meets_standards_requirement",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "meets_country_rollout_requirement",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "meets_payments_enabled_requirement",
                storageKey: null
            }, x],
            storageKey: null
        };
        x = {
            alias: null,
            args: null,
            concreteType: "GamesCreatorFanSubscriptionsEligibility",
            kind: "LinkedField",
            name: "game_creator_fan_subscriptions_eligibility",
            plural: !1,
            selections: [x],
            storageKey: null
        };
        var z = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "free_stars_tier",
            storageKey: null
        }
          , A = {
            alias: "broadcast_hours_1d",
            args: [{
                kind: "Literal",
                name: "days_ago",
                value: 1
            }],
            kind: "ScalarField",
            name: "broadcast_hours",
            storageKey: "broadcast_hours(days_ago:1)"
        }
          , B = {
            alias: "broadcast_hours_2d",
            args: [{
                kind: "Literal",
                name: "days_ago",
                value: 2
            }],
            kind: "ScalarField",
            name: "broadcast_hours",
            storageKey: "broadcast_hours(days_ago:2)"
        }
          , C = {
            alias: "broadcast_hours_7d",
            args: [{
                kind: "Literal",
                name: "days_ago",
                value: 7
            }],
            kind: "ScalarField",
            name: "broadcast_hours",
            storageKey: "broadcast_hours(days_ago:7)"
        }
          , D = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "type",
            storageKey: null
        }
          , E = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "score",
            storageKey: null
        }
          , F = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "rank",
            storageKey: null
        }
          , G = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "average_score",
            storageKey: null
        }
          , H = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "has_dcp_payout_hold",
            storageKey: null
        }
          , I = {
            alias: null,
            args: null,
            concreteType: "GamesStreamerMetrics",
            kind: "LinkedField",
            name: "games_streamer_metrics",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "broadcast_30d_avg_h",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "time_spent_30d_avg_h",
                storageKey: null
            }],
            storageKey: null
        }
          , J = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "live_v2_ad_break_cohort",
            storageKey: null
        }
          , K = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "stars_strike_text",
            storageKey: null
        }
          , L = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "gaming_video_strike_text",
            storageKey: null
        };
        e = [c, {
            alias: null,
            args: null,
            concreteType: "Image",
            kind: "LinkedField",
            name: "image",
            plural: !1,
            selections: e,
            storageKey: null
        }, {
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
        }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "created_time",
            storageKey: null
        }];
        var M = {
            alias: null,
            args: null,
            concreteType: "GamesViolatingVideoData",
            kind: "LinkedField",
            name: "games_content_violating_videos",
            plural: !0,
            selections: [{
                alias: null,
                args: null,
                concreteType: "Video",
                kind: "LinkedField",
                name: "video",
                plural: !1,
                selections: e,
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "violation_timestamp",
                storageKey: null
            }],
            storageKey: null
        };
        e = {
            alias: null,
            args: null,
            concreteType: "GamesAdsClipsData",
            kind: "LinkedField",
            name: "games_ads_clips_data",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                concreteType: "Video",
                kind: "LinkedField",
                name: "clips",
                plural: !0,
                selections: e,
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "timeout_timestamp",
                storageKey: null
            }],
            storageKey: null
        };
        var N = [{
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "passes_gk",
            storageKey: null
        }]
          , O = {
            alias: "moderation_settings_page_enabled",
            args: [{
                kind: "Literal",
                name: "gk_name",
                value: "gvx_community_moderation_settings_page"
            }],
            concreteType: "EntGKCheck",
            kind: "LinkedField",
            name: "gk_check",
            plural: !1,
            selections: N,
            storageKey: 'gk_check(gk_name:"gvx_community_moderation_settings_page")'
        }
          , P = {
            alias: "moderation_info_module_enabled",
            args: [{
                kind: "Literal",
                name: "gk_name",
                value: "gaming_video_moderation_info_module_page_gk"
            }],
            concreteType: "EntGKCheck",
            kind: "LinkedField",
            name: "gk_check",
            plural: !1,
            selections: N,
            storageKey: 'gk_check(gk_name:"gaming_video_moderation_info_module_page_gk")'
        };
        N = {
            alias: "chatbot_settings_page_enabled",
            args: [{
                kind: "Literal",
                name: "gk_name",
                value: "gvx_chatbot_settings_page_enabled"
            }],
            concreteType: "EntGKCheck",
            kind: "LinkedField",
            name: "gk_check",
            plural: !1,
            selections: N,
            storageKey: 'gk_check(gk_name:"gvx_chatbot_settings_page_enabled")'
        };
        var Q = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "blocks_raids",
            storageKey: null
        }
          , R = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "whitelisted_stream_chaining_page_ids",
            storageKey: null
        }
          , S = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "blacklisted_stream_chaining_page_ids",
            storageKey: null
        }
          , T = {
            alias: null,
            args: null,
            concreteType: "LiveGamingAdsCreatorBrandSafetyInfo",
            kind: "LinkedField",
            name: "live_gaming_ads_creator_brand_safety_info",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "status",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "end_enforcement_timestamp",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "latest_appeal_status",
                storageKey: null
            }],
            storageKey: null
        }
          , U = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "auto_squeezeback_enabled",
            storageKey: null
        }
          , V = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "should_show_auto_squeezeback_banner",
            storageKey: null
        }
          , W = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "l30_live_earnings",
            storageKey: null
        }
          , X = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "should_show_custom_creator_message_ui",
            storageKey: null
        }
          , Y = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_onboarded_to_other_monetization_products",
            storageKey: null
        }
          , Z = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_passing_mes_ongoing_check",
            storageKey: null
        }
          , $ = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_gaming_page",
            storageKey: null
        }
          , aa = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_eligible_for_mixer_bonus",
            storageKey: null
        }
          , ba = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "live_monetization_default_state",
            storageKey: null
        }
          , ca = {
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
                name: "GamesVideoStreamerDashboardProfileQuery",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "profile",
                    plural: !1,
                    selections: [c, d, f, g, {
                        kind: "InlineFragment",
                        selections: [h, i, j, k, l, m, n, o, {
                            alias: null,
                            args: null,
                            concreteType: "WoodhengeCreator",
                            kind: "LinkedField",
                            name: "woodhenge_creator",
                            plural: !1,
                            selections: [p],
                            storageKey: null
                        }, q, s, r, t, {
                            alias: null,
                            args: null,
                            concreteType: "GamingVideoCreatorSettings",
                            kind: "LinkedField",
                            name: "gaming_video_creator_settings",
                            plural: !1,
                            selections: [u, v, {
                                alias: null,
                                args: null,
                                concreteType: "GamingVideoCreatorGoalsSettings",
                                kind: "LinkedField",
                                name: "goals_settings",
                                plural: !1,
                                selections: [w],
                                storageKey: null
                            }],
                            storageKey: null
                        }, y, x, z, A, B, C, {
                            alias: null,
                            args: null,
                            concreteType: "GamesVideoLeaderboardStats",
                            kind: "LinkedField",
                            name: "games_video_leaderboards",
                            plural: !0,
                            selections: [D, E, F, G, {
                                alias: null,
                                args: null,
                                concreteType: "GamesVideoLeaderboardScoreData",
                                kind: "LinkedField",
                                name: "top_score_data",
                                plural: !0,
                                selections: [E, {
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "scorer",
                                    plural: !1,
                                    selections: [c, d, f],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }, H, I, {
                            alias: null,
                            args: null,
                            concreteType: "VideoMonetizationCreator",
                            kind: "LinkedField",
                            name: "video_monetization_creator",
                            plural: !1,
                            selections: [J],
                            storageKey: null
                        }, K, L, M, e, O, P, N, Q, R, S, T, U, V, W, X, Y, Z, $, aa, ba],
                        type: "Page",
                        abstractKey: null
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
                name: "GamesVideoStreamerDashboardProfileQuery",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "profile",
                    plural: !1,
                    selections: [ca, c, d, f, g, {
                        kind: "InlineFragment",
                        selections: [h, i, j, k, l, m, n, o, {
                            alias: null,
                            args: null,
                            concreteType: "WoodhengeCreator",
                            kind: "LinkedField",
                            name: "woodhenge_creator",
                            plural: !1,
                            selections: [p, c],
                            storageKey: null
                        }, q, s, r, t, {
                            alias: null,
                            args: null,
                            concreteType: "GamingVideoCreatorSettings",
                            kind: "LinkedField",
                            name: "gaming_video_creator_settings",
                            plural: !1,
                            selections: [u, v, {
                                alias: null,
                                args: null,
                                concreteType: "GamingVideoCreatorGoalsSettings",
                                kind: "LinkedField",
                                name: "goals_settings",
                                plural: !1,
                                selections: [w, c],
                                storageKey: null
                            }, c],
                            storageKey: null
                        }, y, x, z, A, B, C, {
                            alias: null,
                            args: null,
                            concreteType: "GamesVideoLeaderboardStats",
                            kind: "LinkedField",
                            name: "games_video_leaderboards",
                            plural: !0,
                            selections: [D, E, F, G, {
                                alias: null,
                                args: null,
                                concreteType: "GamesVideoLeaderboardScoreData",
                                kind: "LinkedField",
                                name: "top_score_data",
                                plural: !0,
                                selections: [E, {
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "scorer",
                                    plural: !1,
                                    selections: [ca, c, d, f],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }, H, I, {
                            alias: null,
                            args: null,
                            concreteType: "VideoMonetizationCreator",
                            kind: "LinkedField",
                            name: "video_monetization_creator",
                            plural: !1,
                            selections: [J, c],
                            storageKey: null
                        }, K, L, M, e, O, P, N, Q, R, S, T, U, V, W, X, Y, Z, $, aa, ba],
                        type: "Page",
                        abstractKey: null
                    }],
                    storageKey: null
                }]
            },
            params: {
                id: "3067782673322118",
                metadata: {},
                name: "GamesVideoStreamerDashboardProfileQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("GamesVideoStreamerDashboardVideoQuery.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
            defaultValue: null,
            kind: "LocalArgument",
            name: "account_id"
        }, {
            defaultValue: null,
            kind: "LocalArgument",
            name: "page_id"
        }]
          , b = [{
            kind: "Variable",
            name: "find",
            variableName: "page_id"
        }, {
            kind: "Literal",
            name: "is_published",
            value: !0
        }, {
            kind: "Literal",
            name: "viewer_has_page_permission",
            value: "ADMINISTER"
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
            name: "name",
            storageKey: null
        }
          , e = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "category_id",
            storageKey: null
        }
          , f = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "profile_plus_id_for_delegate_page",
            storageKey: null
        }
          , g = [{
            kind: "Literal",
            name: "first",
            value: 1
        }, {
            kind: "Literal",
            name: "orderby",
            value: "publish_time_desc"
        }, {
            kind: "Literal",
            name: "status",
            value: ["PREVIEW", "LIVE", "LIVE_STOPPED", "VOD_READY", "SEAL_STARTED", "PRE_LIVE"]
        }]
          , h = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "broadcast_id",
            storageKey: null
        }
          , i = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "can_viewer_edit",
            storageKey: null
        }
          , j = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "instagram_broadcast_id",
            storageKey: null
        }
          , k = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "can_crosspost_to_instagram",
            storageKey: null
        }
          , l = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "instagram_crosspost_check_failure",
            storageKey: null
        }
          , m = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "broadcast_start_time",
            storageKey: null
        }
          , n = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "copyrights_check_state",
            storageKey: null
        }
          , o = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "publish_time",
            storageKey: null
        }
          , p = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "live_badge_text",
            storageKey: null
        }
          , q = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "broadcast_status",
            storageKey: null
        }
          , r = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "can_viewer_see_live_event_log",
            storageKey: null
        }
          , s = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "latest_stream_video_asset_earnings",
            storageKey: null
        }
          , t = [{
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "count",
            storageKey: null
        }]
          , u = {
            alias: null,
            args: null,
            concreteType: "ReactorsOfContentConnection",
            kind: "LinkedField",
            name: "reactors",
            plural: !1,
            selections: t,
            storageKey: null
        }
          , v = {
            alias: null,
            args: null,
            concreteType: "ResharesOfContentConnection",
            kind: "LinkedField",
            name: "reshares",
            plural: !1,
            selections: t,
            storageKey: null
        }
          , w = {
            alias: null,
            args: null,
            concreteType: "TopLevelCommentsConnection",
            kind: "LinkedField",
            name: "top_level_comments",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "total_count",
                storageKey: null
            }],
            storageKey: null
        }
          , x = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "can_viewer_pin_live_comments",
            storageKey: null
        }
          , y = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_author_banned_by_content_owner",
            storageKey: null
        }
          , z = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_author_pinned",
            storageKey: null
        }
          , A = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "created_time",
            storageKey: null
        }
          , B = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "legacy_fbid",
            storageKey: null
        }
          , C = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "legacy_token",
            storageKey: null
        }
          , D = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "does_mention_parent_feedback_author",
            storageKey: null
        }
          , E = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "text",
            storageKey: null
        }
          , F = {
            alias: null,
            args: null,
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "body",
            plural: !1,
            selections: [E, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "translation_type",
                storageKey: null
            }],
            storageKey: null
        }
          , G = [{
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "key",
            storageKey: null
        }];
        t = {
            alias: null,
            args: null,
            concreteType: "Feedback",
            kind: "LinkedField",
            name: "feedback",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "reaction_count_reduced",
                storageKey: null
            }, u, {
                alias: null,
                args: null,
                concreteType: "FeedbackReactorsPerReaction",
                kind: "LinkedField",
                name: "reactions_summary",
                plural: !0,
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "FeedbackReaction",
                    kind: "LinkedField",
                    name: "feedback_reaction",
                    plural: !1,
                    selections: G,
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    concreteType: "PerReactionReactorsOfContentConnection",
                    kind: "LinkedField",
                    name: "reactors",
                    plural: !1,
                    selections: t,
                    storageKey: null
                }],
                storageKey: null
            }, {
                alias: null,
                args: null,
                concreteType: "FeedbackReaction",
                kind: "LinkedField",
                name: "supported_reactions",
                plural: !0,
                selections: G,
                storageKey: null
            }, c, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "viewer_feedback_reaction_key",
                storageKey: null
            }],
            storageKey: null
        };
        G = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "feedback_id",
            storageKey: null
        };
        var H = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "video_bitrate_bps",
            storageKey: null
        }
          , I = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "audio_bitrate_bps",
            storageKey: null
        }
          , J = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "framerate_per_sec",
            storageKey: null
        }
          , K = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "video_height_px",
            storageKey: null
        }
          , L = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "video_width_px",
            storageKey: null
        }
          , M = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "latest_update_timestamp",
            storageKey: null
        }
          , N = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "video_gop_size",
            storageKey: null
        }
          , O = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_live_streaming",
            storageKey: null
        }
          , P = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "live_comment_moderation_settings",
            storageKey: null
        }
          , Q = {
            alias: null,
            args: null,
            concreteType: "LiveVideoStreamConfig",
            kind: "LinkedField",
            name: "live_stream_config",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "max_supported_resolution",
                storageKey: null
            }],
            storageKey: null
        }
          , R = {
            alias: null,
            args: null,
            concreteType: "LiveVideoAutoSqueezeBackStatuses",
            kind: "LinkedField",
            name: "live_video_auto_squeeze_back_status",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "status",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "timestamp",
                storageKey: null
            }],
            storageKey: null
        }
          , S = {
            alias: null,
            args: null,
            concreteType: "LiveVideoExtendedBreakMetadata",
            kind: "LinkedField",
            name: "live_video_latest_extended_break_metadata",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "video_timestamp_start",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "video_timestamp_end",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "break_length",
                storageKey: null
            }],
            storageKey: null
        }
          , T = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "live_video_broadcast_time",
            storageKey: null
        }
          , U = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "live_viewer_count_read_only",
            storageKey: null
        }
          , V = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "connected_live_viewer_count",
            storageKey: null
        }
          , W = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "is_enabled_for_fan_support_packs",
            storageKey: null
        }
          , X = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "__typename",
            storageKey: null
        }
          , Y = [{
            kind: "Literal",
            name: "last",
            value: 1
        }]
          , Z = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "question_text",
            storageKey: null
        }
          , $ = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "total_votes",
            storageKey: null
        }
          , aa = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "option_text",
            storageKey: null
        }
          , ba = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "num_votes",
            storageKey: null
        };
        E = [E];
        var ca = {
            alias: null,
            args: null,
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "message",
            plural: !1,
            selections: E,
            storageKey: null
        };
        E = {
            alias: null,
            args: null,
            concreteType: "TextWithEntities",
            kind: "LinkedField",
            name: "title",
            plural: !1,
            selections: E,
            storageKey: null
        };
        var da = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "url",
            storageKey: null
        }
          , ea = {
            alias: null,
            args: null,
            concreteType: "Game",
            kind: "LinkedField",
            name: "attributed_game",
            plural: !1,
            selections: [c, d, {
                alias: null,
                args: null,
                concreteType: "Image",
                kind: "LinkedField",
                name: "game_image",
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
            storageKey: null
        }
          , fa = {
            alias: null,
            args: null,
            concreteType: "LiveVideoRehearsalInfo",
            kind: "LinkedField",
            name: "rehearsal_info",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "rehearsal_text",
                storageKey: null
            }],
            storageKey: null
        }
          , ga = {
            alias: null,
            args: null,
            concreteType: "VideoTaggedPagesConnection",
            kind: "LinkedField",
            name: "tagged_pages",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                concreteType: "Page",
                kind: "LinkedField",
                name: "nodes",
                plural: !0,
                selections: [c],
                storageKey: null
            }],
            storageKey: null
        }
          , ha = {
            alias: null,
            args: g,
            concreteType: "LiveVideosConnection",
            kind: "LinkedField",
            name: "live_videos",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                concreteType: "Video",
                kind: "LinkedField",
                name: "nodes",
                plural: !0,
                selections: [h, i, j, k, l, m, n, o, p, q, r, s, {
                    alias: null,
                    args: null,
                    concreteType: "Feedback",
                    kind: "LinkedField",
                    name: "feedback",
                    plural: !1,
                    selections: [c, u, v, w, x, {
                        alias: null,
                        args: null,
                        concreteType: "BroadcastPinnedCommentEvent",
                        kind: "LinkedField",
                        name: "latest_pinned_comment_event",
                        plural: !1,
                        selections: [c, {
                            alias: null,
                            args: null,
                            concreteType: "Comment",
                            kind: "LinkedField",
                            name: "pinned_comment",
                            plural: !1,
                            selections: [c, y, z, A, B, C, D, F, {
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "author",
                                plural: !1,
                                selections: [c, d],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "Comment",
                                kind: "LinkedField",
                                name: "comment_parent",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "author",
                                    plural: !1,
                                    selections: [d],
                                    storageKey: null
                                }],
                                storageKey: null
                            }, t],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    storageKey: null
                }, G, c, {
                    alias: null,
                    args: null,
                    concreteType: "LiveVideoInputStreamsConnection",
                    kind: "LinkedField",
                    name: "input_streams",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: "LiveVideoInputStream",
                        kind: "LinkedField",
                        name: "nodes",
                        plural: !0,
                        selections: [c, {
                            alias: null,
                            args: null,
                            concreteType: "LiveVideoInputStreamHealth",
                            kind: "LinkedField",
                            name: "stream_info",
                            plural: !1,
                            selections: [H, I, J, K, L, M, N],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    storageKey: null
                }, O, P, Q, R, S, T, U, V, W, {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "owner",
                    plural: !1,
                    selections: [X, c, {
                        kind: "InlineFragment",
                        selections: [{
                            alias: null,
                            args: Y,
                            concreteType: "UserToVideoPollsConnection",
                            kind: "LinkedField",
                            name: "video_polls",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "nodes",
                                plural: !0,
                                selections: [Z, $, {
                                    alias: null,
                                    args: null,
                                    concreteType: "VideoGenericPollToOptionsConnection",
                                    kind: "LinkedField",
                                    name: "video_poll_options",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "VideoPollOption",
                                        kind: "LinkedField",
                                        name: "nodes",
                                        plural: !0,
                                        selections: [aa, ba],
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: "video_polls(last:1)"
                        }],
                        type: "VideoPollOwner",
                        abstractKey: "__isVideoPollOwner"
                    }],
                    storageKey: null
                }, ca, E, da, ea, fa, ga],
                storageKey: null
            }],
            storageKey: 'live_videos(first:1,orderby:"publish_time_desc",status:["PREVIEW","LIVE","LIVE_STOPPED","VOD_READY","SEAL_STARTED","PRE_LIVE"])'
        }
          , ia = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "follower_count",
            storageKey: null
        }
          , ja = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "supporter_count",
            storageKey: null
        }
          , ka = {
            alias: null,
            args: null,
            concreteType: "GamingVideoCreatorGoalsSettingsToGoalsConnection",
            kind: "LinkedField",
            name: "gaming_video_goals",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                concreteType: "GamingVideoCreatorGoalsSettingsToGoalsEdge",
                kind: "LinkedField",
                name: "edges",
                plural: !0,
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "GamingVideoGoal",
                    kind: "LinkedField",
                    name: "node",
                    plural: !1,
                    selections: [c, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "title_string",
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
                        name: "gaming_video_goal_type",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "gaming_video_goal_status",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "value_at_creation",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "current_goal_value",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "target_value",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "is_incremental",
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
                        name: "end_time",
                        storageKey: null
                    }],
                    storageKey: null
                }],
                storageKey: null
            }],
            storageKey: null
        }
          , la = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "stars_strike_text",
            storageKey: null
        }
          , ma = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "gaming_video_strike_text",
            storageKey: null
        }
          , na = [{
            kind: "Variable",
            name: "id",
            variableName: "account_id"
        }];
        g = {
            alias: null,
            args: g,
            concreteType: "LiveVideosConnection",
            kind: "LinkedField",
            name: "live_videos",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                concreteType: "Video",
                kind: "LinkedField",
                name: "nodes",
                plural: !0,
                selections: [h, i, j, k, l, m, n, o, p, q, r, s, {
                    alias: null,
                    args: null,
                    concreteType: "Feedback",
                    kind: "LinkedField",
                    name: "feedback",
                    plural: !1,
                    selections: [c, u, v, w, x, {
                        alias: null,
                        args: null,
                        concreteType: "BroadcastPinnedCommentEvent",
                        kind: "LinkedField",
                        name: "latest_pinned_comment_event",
                        plural: !1,
                        selections: [c, {
                            alias: null,
                            args: null,
                            concreteType: "Comment",
                            kind: "LinkedField",
                            name: "pinned_comment",
                            plural: !1,
                            selections: [c, y, z, A, B, C, D, F, {
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "author",
                                plural: !1,
                                selections: [X, c, d],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "Comment",
                                kind: "LinkedField",
                                name: "comment_parent",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "author",
                                    plural: !1,
                                    selections: [X, d, c],
                                    storageKey: null
                                }, c],
                                storageKey: null
                            }, t],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    storageKey: null
                }, G, c, {
                    alias: null,
                    args: null,
                    concreteType: "LiveVideoInputStreamsConnection",
                    kind: "LinkedField",
                    name: "input_streams",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: "LiveVideoInputStream",
                        kind: "LinkedField",
                        name: "nodes",
                        plural: !0,
                        selections: [c, {
                            alias: null,
                            args: null,
                            concreteType: "LiveVideoInputStreamHealth",
                            kind: "LinkedField",
                            name: "stream_info",
                            plural: !1,
                            selections: [H, I, J, K, L, M, N, c],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    storageKey: null
                }, O, P, Q, R, S, T, U, V, W, {
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "owner",
                    plural: !1,
                    selections: [X, c, {
                        kind: "InlineFragment",
                        selections: [{
                            alias: null,
                            args: Y,
                            concreteType: "UserToVideoPollsConnection",
                            kind: "LinkedField",
                            name: "video_polls",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "nodes",
                                plural: !0,
                                selections: [X, Z, $, {
                                    alias: null,
                                    args: null,
                                    concreteType: "VideoGenericPollToOptionsConnection",
                                    kind: "LinkedField",
                                    name: "video_poll_options",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: "VideoPollOption",
                                        kind: "LinkedField",
                                        name: "nodes",
                                        plural: !0,
                                        selections: [aa, ba, c],
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }, c],
                                storageKey: null
                            }],
                            storageKey: "video_polls(last:1)"
                        }],
                        type: "VideoPollOwner",
                        abstractKey: "__isVideoPollOwner"
                    }],
                    storageKey: null
                }, ca, E, da, ea, fa, ga],
                storageKey: null
            }],
            storageKey: 'live_videos(first:1,orderby:"publish_time_desc",status:["PREVIEW","LIVE","LIVE_STOPPED","VOD_READY","SEAL_STARTED","PRE_LIVE"])'
        };
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "GamesVideoStreamerDashboardVideoQuery",
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
                        concreteType: "AdminedPagesConnection",
                        kind: "LinkedField",
                        name: "admined_pages",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "Page",
                            kind: "LinkedField",
                            name: "nodes",
                            plural: !0,
                            selections: [c, d, e, f, ha, ia, ja, {
                                alias: null,
                                args: null,
                                concreteType: "GamingVideoCreatorSettings",
                                kind: "LinkedField",
                                name: "gaming_video_creator_settings",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "GamingVideoCreatorGoalsSettings",
                                    kind: "LinkedField",
                                    name: "goals_settings",
                                    plural: !1,
                                    selections: [ka],
                                    storageKey: null
                                }],
                                storageKey: null
                            }, la, ma],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    storageKey: null
                }, {
                    alias: null,
                    args: na,
                    concreteType: "User",
                    kind: "LinkedField",
                    name: "user",
                    plural: !1,
                    selections: [c, d, ha],
                    storageKey: null
                }],
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "GamesVideoStreamerDashboardVideoQuery",
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
                        concreteType: "AdminedPagesConnection",
                        kind: "LinkedField",
                        name: "admined_pages",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "Page",
                            kind: "LinkedField",
                            name: "nodes",
                            plural: !0,
                            selections: [c, d, e, f, g, ia, ja, {
                                alias: null,
                                args: null,
                                concreteType: "GamingVideoCreatorSettings",
                                kind: "LinkedField",
                                name: "gaming_video_creator_settings",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "GamingVideoCreatorGoalsSettings",
                                    kind: "LinkedField",
                                    name: "goals_settings",
                                    plural: !1,
                                    selections: [ka, c],
                                    storageKey: null
                                }, c],
                                storageKey: null
                            }, la, ma],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    storageKey: null
                }, {
                    alias: null,
                    args: na,
                    concreteType: "User",
                    kind: "LinkedField",
                    name: "user",
                    plural: !1,
                    selections: [c, d, g],
                    storageKey: null
                }]
            },
            params: {
                id: "4477341149005206",
                metadata: {},
                name: "GamesVideoStreamerDashboardVideoQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("GamesVideoStreamerDashboardVideoQuery_page.graphql", [], (function(a, b, c, d, e, f) {
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
          , c = [{
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "count",
            storageKey: null
        }]
          , d = {
            alias: null,
            args: null,
            concreteType: "ReactorsOfContentConnection",
            kind: "LinkedField",
            name: "reactors",
            plural: !1,
            selections: c,
            storageKey: null
        }
          , e = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "text",
            storageKey: null
        }
          , f = [{
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "key",
            storageKey: null
        }]
          , g = [e];
        return {
            argumentDefinitions: [],
            kind: "Fragment",
            metadata: null,
            name: "GamesVideoStreamerDashboardVideoQuery_page",
            selections: [a, b, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "category_id",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "profile_plus_id_for_delegate_page",
                storageKey: null
            }, {
                alias: null,
                args: [{
                    kind: "Literal",
                    name: "first",
                    value: 1
                }, {
                    kind: "Literal",
                    name: "orderby",
                    value: "publish_time_desc"
                }, {
                    kind: "Literal",
                    name: "status",
                    value: ["PREVIEW", "LIVE", "LIVE_STOPPED", "VOD_READY", "SEAL_STARTED", "PRE_LIVE"]
                }],
                concreteType: "LiveVideosConnection",
                kind: "LinkedField",
                name: "live_videos",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "Video",
                    kind: "LinkedField",
                    name: "nodes",
                    plural: !0,
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "broadcast_id",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "can_viewer_edit",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "instagram_broadcast_id",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "can_crosspost_to_instagram",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "instagram_crosspost_check_failure",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "broadcast_start_time",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "copyrights_check_state",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "publish_time",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "live_badge_text",
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
                        name: "can_viewer_see_live_event_log",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "latest_stream_video_asset_earnings",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "Feedback",
                        kind: "LinkedField",
                        name: "feedback",
                        plural: !1,
                        selections: [a, d, {
                            alias: null,
                            args: null,
                            concreteType: "ResharesOfContentConnection",
                            kind: "LinkedField",
                            name: "reshares",
                            plural: !1,
                            selections: c,
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "TopLevelCommentsConnection",
                            kind: "LinkedField",
                            name: "top_level_comments",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "total_count",
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "can_viewer_pin_live_comments",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "BroadcastPinnedCommentEvent",
                            kind: "LinkedField",
                            name: "latest_pinned_comment_event",
                            plural: !1,
                            selections: [a, {
                                alias: null,
                                args: null,
                                concreteType: "Comment",
                                kind: "LinkedField",
                                name: "pinned_comment",
                                plural: !1,
                                selections: [a, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "is_author_banned_by_content_owner",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "is_author_pinned",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "created_time",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "legacy_fbid",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "legacy_token",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "does_mention_parent_feedback_author",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "TextWithEntities",
                                    kind: "LinkedField",
                                    name: "body",
                                    plural: !1,
                                    selections: [e, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "translation_type",
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "author",
                                    plural: !1,
                                    selections: [a, b],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "Comment",
                                    kind: "LinkedField",
                                    name: "comment_parent",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: "LinkedField",
                                        name: "author",
                                        plural: !1,
                                        selections: [b],
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "Feedback",
                                    kind: "LinkedField",
                                    name: "feedback",
                                    plural: !1,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "reaction_count_reduced",
                                        storageKey: null
                                    }, d, {
                                        alias: null,
                                        args: null,
                                        concreteType: "FeedbackReactorsPerReaction",
                                        kind: "LinkedField",
                                        name: "reactions_summary",
                                        plural: !0,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "FeedbackReaction",
                                            kind: "LinkedField",
                                            name: "feedback_reaction",
                                            plural: !1,
                                            selections: f,
                                            storageKey: null
                                        }, {
                                            alias: null,
                                            args: null,
                                            concreteType: "PerReactionReactorsOfContentConnection",
                                            kind: "LinkedField",
                                            name: "reactors",
                                            plural: !1,
                                            selections: c,
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "FeedbackReaction",
                                        kind: "LinkedField",
                                        name: "supported_reactions",
                                        plural: !0,
                                        selections: f,
                                        storageKey: null
                                    }, a, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "viewer_feedback_reaction_key",
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "feedback_id",
                        storageKey: null
                    }, a, {
                        alias: null,
                        args: null,
                        concreteType: "LiveVideoInputStreamsConnection",
                        kind: "LinkedField",
                        name: "input_streams",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "LiveVideoInputStream",
                            kind: "LinkedField",
                            name: "nodes",
                            plural: !0,
                            selections: [a, {
                                alias: null,
                                args: null,
                                concreteType: "LiveVideoInputStreamHealth",
                                kind: "LinkedField",
                                name: "stream_info",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "video_bitrate_bps",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "audio_bitrate_bps",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "framerate_per_sec",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "video_height_px",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "video_width_px",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "latest_update_timestamp",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "video_gop_size",
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
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
                        name: "live_comment_moderation_settings",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "LiveVideoStreamConfig",
                        kind: "LinkedField",
                        name: "live_stream_config",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "max_supported_resolution",
                            storageKey: null
                        }],
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "LiveVideoAutoSqueezeBackStatuses",
                        kind: "LinkedField",
                        name: "live_video_auto_squeeze_back_status",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "status",
                            storageKey: null
                        }, {
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
                        concreteType: "LiveVideoExtendedBreakMetadata",
                        kind: "LinkedField",
                        name: "live_video_latest_extended_break_metadata",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "video_timestamp_start",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "video_timestamp_end",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "break_length",
                            storageKey: null
                        }],
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "live_video_broadcast_time",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "live_viewer_count_read_only",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "connected_live_viewer_count",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "is_enabled_for_fan_support_packs",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "owner",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "__typename",
                            storageKey: null
                        }, a, {
                            kind: "InlineFragment",
                            selections: [{
                                alias: null,
                                args: [{
                                    kind: "Literal",
                                    name: "last",
                                    value: 1
                                }],
                                concreteType: "UserToVideoPollsConnection",
                                kind: "LinkedField",
                                name: "video_polls",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "nodes",
                                    plural: !0,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "question_text",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "total_votes",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        concreteType: "VideoGenericPollToOptionsConnection",
                                        kind: "LinkedField",
                                        name: "video_poll_options",
                                        plural: !1,
                                        selections: [{
                                            alias: null,
                                            args: null,
                                            concreteType: "VideoPollOption",
                                            kind: "LinkedField",
                                            name: "nodes",
                                            plural: !0,
                                            selections: [{
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "option_text",
                                                storageKey: null
                                            }, {
                                                alias: null,
                                                args: null,
                                                kind: "ScalarField",
                                                name: "num_votes",
                                                storageKey: null
                                            }],
                                            storageKey: null
                                        }],
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }],
                                storageKey: "video_polls(last:1)"
                            }],
                            type: "VideoPollOwner",
                            abstractKey: "__isVideoPollOwner"
                        }],
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "TextWithEntities",
                        kind: "LinkedField",
                        name: "message",
                        plural: !1,
                        selections: g,
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "TextWithEntities",
                        kind: "LinkedField",
                        name: "title",
                        plural: !1,
                        selections: g,
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "url",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "Game",
                        kind: "LinkedField",
                        name: "attributed_game",
                        plural: !1,
                        selections: [a, b, {
                            alias: null,
                            args: null,
                            concreteType: "Image",
                            kind: "LinkedField",
                            name: "game_image",
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
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "LiveVideoRehearsalInfo",
                        kind: "LinkedField",
                        name: "rehearsal_info",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "rehearsal_text",
                            storageKey: null
                        }],
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "VideoTaggedPagesConnection",
                        kind: "LinkedField",
                        name: "tagged_pages",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "Page",
                            kind: "LinkedField",
                            name: "nodes",
                            plural: !0,
                            selections: [a],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    storageKey: null
                }],
                storageKey: 'live_videos(first:1,orderby:"publish_time_desc",status:["PREVIEW","LIVE","LIVE_STOPPED","VOD_READY","SEAL_STARTED","PRE_LIVE"])'
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "follower_count",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "supporter_count",
                storageKey: null
            }, {
                alias: null,
                args: null,
                concreteType: "GamingVideoCreatorSettings",
                kind: "LinkedField",
                name: "gaming_video_creator_settings",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "GamingVideoCreatorGoalsSettings",
                    kind: "LinkedField",
                    name: "goals_settings",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: "GamingVideoCreatorGoalsSettingsToGoalsConnection",
                        kind: "LinkedField",
                        name: "gaming_video_goals",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: "GamingVideoCreatorGoalsSettingsToGoalsEdge",
                            kind: "LinkedField",
                            name: "edges",
                            plural: !0,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: "GamingVideoGoal",
                                kind: "LinkedField",
                                name: "node",
                                plural: !1,
                                selections: [a, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "title_string",
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
                                    name: "gaming_video_goal_type",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "gaming_video_goal_status",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "value_at_creation",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "current_goal_value",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "target_value",
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "is_incremental",
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
                                    name: "end_time",
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
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "stars_strike_text",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "gaming_video_strike_text",
                storageKey: null
            }],
            type: "Page",
            abstractKey: null
        }
    }();
    e.exports = a
}
), null);
__d("GamesVideoStreamerDashboardVideoQuery_video.graphql", [], (function(a, b, c, d, e, f) {
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
            name: "count",
            storageKey: null
        }]
          , c = {
            alias: null,
            args: null,
            concreteType: "ReactorsOfContentConnection",
            kind: "LinkedField",
            name: "reactors",
            plural: !1,
            selections: b,
            storageKey: null
        }
          , d = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "text",
            storageKey: null
        }
          , e = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "name",
            storageKey: null
        }
          , f = [{
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "key",
            storageKey: null
        }]
          , g = [d];
        return {
            argumentDefinitions: [],
            kind: "Fragment",
            metadata: null,
            name: "GamesVideoStreamerDashboardVideoQuery_video",
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "broadcast_id",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "can_viewer_edit",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "instagram_broadcast_id",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "can_crosspost_to_instagram",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "instagram_crosspost_check_failure",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "broadcast_start_time",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "copyrights_check_state",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "publish_time",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "live_badge_text",
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
                name: "can_viewer_see_live_event_log",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "latest_stream_video_asset_earnings",
                storageKey: null
            }, {
                alias: null,
                args: null,
                concreteType: "Feedback",
                kind: "LinkedField",
                name: "feedback",
                plural: !1,
                selections: [a, c, {
                    alias: null,
                    args: null,
                    concreteType: "ResharesOfContentConnection",
                    kind: "LinkedField",
                    name: "reshares",
                    plural: !1,
                    selections: b,
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    concreteType: "TopLevelCommentsConnection",
                    kind: "LinkedField",
                    name: "top_level_comments",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "total_count",
                        storageKey: null
                    }],
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "can_viewer_pin_live_comments",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    concreteType: "BroadcastPinnedCommentEvent",
                    kind: "LinkedField",
                    name: "latest_pinned_comment_event",
                    plural: !1,
                    selections: [a, {
                        alias: null,
                        args: null,
                        concreteType: "Comment",
                        kind: "LinkedField",
                        name: "pinned_comment",
                        plural: !1,
                        selections: [a, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "is_author_banned_by_content_owner",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "is_author_pinned",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "created_time",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "legacy_fbid",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "legacy_token",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "does_mention_parent_feedback_author",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "TextWithEntities",
                            kind: "LinkedField",
                            name: "body",
                            plural: !1,
                            selections: [d, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "translation_type",
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: "LinkedField",
                            name: "author",
                            plural: !1,
                            selections: [a, e],
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "Comment",
                            kind: "LinkedField",
                            name: "comment_parent",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "author",
                                plural: !1,
                                selections: [e],
                                storageKey: null
                            }],
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "Feedback",
                            kind: "LinkedField",
                            name: "feedback",
                            plural: !1,
                            selections: [{
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "reaction_count_reduced",
                                storageKey: null
                            }, c, {
                                alias: null,
                                args: null,
                                concreteType: "FeedbackReactorsPerReaction",
                                kind: "LinkedField",
                                name: "reactions_summary",
                                plural: !0,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "FeedbackReaction",
                                    kind: "LinkedField",
                                    name: "feedback_reaction",
                                    plural: !1,
                                    selections: f,
                                    storageKey: null
                                }, {
                                    alias: null,
                                    args: null,
                                    concreteType: "PerReactionReactorsOfContentConnection",
                                    kind: "LinkedField",
                                    name: "reactors",
                                    plural: !1,
                                    selections: b,
                                    storageKey: null
                                }],
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "FeedbackReaction",
                                kind: "LinkedField",
                                name: "supported_reactions",
                                plural: !0,
                                selections: f,
                                storageKey: null
                            }, a, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "viewer_feedback_reaction_key",
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    storageKey: null
                }],
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "feedback_id",
                storageKey: null
            }, a, {
                alias: null,
                args: null,
                concreteType: "LiveVideoInputStreamsConnection",
                kind: "LinkedField",
                name: "input_streams",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "LiveVideoInputStream",
                    kind: "LinkedField",
                    name: "nodes",
                    plural: !0,
                    selections: [a, {
                        alias: null,
                        args: null,
                        concreteType: "LiveVideoInputStreamHealth",
                        kind: "LinkedField",
                        name: "stream_info",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "video_bitrate_bps",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "audio_bitrate_bps",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "framerate_per_sec",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "video_height_px",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "video_width_px",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "latest_update_timestamp",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "video_gop_size",
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    storageKey: null
                }],
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
                name: "live_comment_moderation_settings",
                storageKey: null
            }, {
                alias: null,
                args: null,
                concreteType: "LiveVideoStreamConfig",
                kind: "LinkedField",
                name: "live_stream_config",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "max_supported_resolution",
                    storageKey: null
                }],
                storageKey: null
            }, {
                alias: null,
                args: null,
                concreteType: "LiveVideoAutoSqueezeBackStatuses",
                kind: "LinkedField",
                name: "live_video_auto_squeeze_back_status",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "status",
                    storageKey: null
                }, {
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
                concreteType: "LiveVideoExtendedBreakMetadata",
                kind: "LinkedField",
                name: "live_video_latest_extended_break_metadata",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "video_timestamp_start",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "video_timestamp_end",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "break_length",
                    storageKey: null
                }],
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "live_video_broadcast_time",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "live_viewer_count_read_only",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "connected_live_viewer_count",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_enabled_for_fan_support_packs",
                storageKey: null
            }, {
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "owner",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "__typename",
                    storageKey: null
                }, a, {
                    kind: "InlineFragment",
                    selections: [{
                        alias: null,
                        args: [{
                            kind: "Literal",
                            name: "last",
                            value: 1
                        }],
                        concreteType: "UserToVideoPollsConnection",
                        kind: "LinkedField",
                        name: "video_polls",
                        plural: !1,
                        selections: [{
                            alias: null,
                            args: null,
                            concreteType: null,
                            kind: "LinkedField",
                            name: "nodes",
                            plural: !0,
                            selections: [{
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "question_text",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "total_votes",
                                storageKey: null
                            }, {
                                alias: null,
                                args: null,
                                concreteType: "VideoGenericPollToOptionsConnection",
                                kind: "LinkedField",
                                name: "video_poll_options",
                                plural: !1,
                                selections: [{
                                    alias: null,
                                    args: null,
                                    concreteType: "VideoPollOption",
                                    kind: "LinkedField",
                                    name: "nodes",
                                    plural: !0,
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "option_text",
                                        storageKey: null
                                    }, {
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "num_votes",
                                        storageKey: null
                                    }],
                                    storageKey: null
                                }],
                                storageKey: null
                            }],
                            storageKey: null
                        }],
                        storageKey: "video_polls(last:1)"
                    }],
                    type: "VideoPollOwner",
                    abstractKey: "__isVideoPollOwner"
                }],
                storageKey: null
            }, {
                alias: null,
                args: null,
                concreteType: "TextWithEntities",
                kind: "LinkedField",
                name: "message",
                plural: !1,
                selections: g,
                storageKey: null
            }, {
                alias: null,
                args: null,
                concreteType: "TextWithEntities",
                kind: "LinkedField",
                name: "title",
                plural: !1,
                selections: g,
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "url",
                storageKey: null
            }, {
                alias: null,
                args: null,
                concreteType: "Game",
                kind: "LinkedField",
                name: "attributed_game",
                plural: !1,
                selections: [a, e, {
                    alias: null,
                    args: null,
                    concreteType: "Image",
                    kind: "LinkedField",
                    name: "game_image",
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
                storageKey: null
            }, {
                alias: null,
                args: null,
                concreteType: "LiveVideoRehearsalInfo",
                kind: "LinkedField",
                name: "rehearsal_info",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "rehearsal_text",
                    storageKey: null
                }],
                storageKey: null
            }, {
                alias: null,
                args: null,
                concreteType: "VideoTaggedPagesConnection",
                kind: "LinkedField",
                name: "tagged_pages",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "Page",
                    kind: "LinkedField",
                    name: "nodes",
                    plural: !0,
                    selections: [a],
                    storageKey: null
                }],
                storageKey: null
            }],
            type: "Video",
            abstractKey: null
        }
    }();
    e.exports = a
}
), null);
__d("FDSProgressBar.react", ["cx", "ErrorMarker.react", "LoadingMarker.react", "Locale", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = b("Locale").isRTL();
    function a(a) {
        var b = a["data-testid"];
        b = a.background;
        b = b === void 0 ? "default" : b;
        var c = a.describedBy
          , d = a.roundedBorder;
        d = d === void 0 ? !0 : d;
        var e = a.height;
        e = e === void 0 ? "medium" : e;
        var f = a.progress;
        f = f === void 0 ? 100 : f;
        var g = a.type;
        g = g === void 0 ? "buffering" : g;
        a = a.width;
        a = a === void 0 ? "100%" : a;
        var j = g === "loading";
        return h.jsx("div", {
            "aria-describedby": c ? c.join(" ") : void 0,
            "aria-valuemax": 100,
            "aria-valuemin": 0,
            "aria-valuenow": j ? f : void 0,
            className: "_6i-p" + (b === "transparent" ? " _6i-q" : "") + (e === "small" ? " _6i-r" : "") + (i ? " _6i-s" : "") + (d ? "" : " _6i-t"),
            "data-testid": void 0,
            role: "progressbar",
            style: {
                width: a
            },
            children: h.jsx(k, {
                type: g,
                children: h.jsx("div", {
                    className: "_6i-u" + (g === "buffering" ? " _6i-v" : "") + (g === "error" ? " _6i-w" : "") + (g === "success" ? " _6i-x" : "") + (g === "warning" ? " _7xbo" : ""),
                    style: {
                        width: String(f) + "%"
                    }
                })
            })
        })
    }
    function j(a) {
        switch (a.type) {
        case "loading":
            return h.jsx(b("LoadingMarker.react"), {
                children: a.children
            });
        case "error":
            return h.jsx(b("ErrorMarker.react"), {
                name: "FDSProgressBar",
                children: a.children
            });
        default:
            return null
        }
    }
    function k(a) {
        var b = a.children;
        a = a.type;
        return h.jsxs(h.Fragment, {
            children: [b, h.jsx(j, {
                type: a,
                children: h.jsx("div", {
                    style: {
                        height: "100%",
                        width: "100%",
                        position: "absolute"
                    }
                })
            })]
        })
    }
    c = a;
    e.exports = c
}
), null);
__d("GamesVideoStreamerDashboardProfileQuery", ["RelayFBEnvironment", "RelayModern", "GamesVideoStreamerDashboardProfileQuery.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    f.fetch = a;
    var g, h = g !== void 0 ? g : g = b("GamesVideoStreamerDashboardProfileQuery.graphql");
    function a(a) {
        return b("RelayModern").fetchQuery(b("RelayFBEnvironment"), h, {
            profileID: a
        }, {
            force: !0
        })
    }
}
), null);
__d("GamesVideoStreamerDashboardUtils", ["fbt", "React", "URI", "WebStorage", "isBusinessURI"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.move = a;
    f.reorder = c;
    f.useStateMaybeWithLocalStorage = d;
    f.getQualifiedURLWithoutBusinessSubdomain = e;
    f.formatNumberWithSeparators = l;
    var h, i, j = b("React");
    function k(a, b) {
        a = a.reduce(function(a, c, d) {
            c = b[c];
            c && a.push(d);
            return a
        }, []);
        var c = a[a.length - 1];
        a.push(c != null ? c + 1 : 0);
        return a
    }
    function a(a, b, c, d, e) {
        a = [].concat(a);
        b = [].concat(b);
        e = k(b, e);
        c = a.splice(c.index, 1)[0];
        b.splice(e[d.index], 0, c);
        return [a, b]
    }
    function c(a, b, c) {
        a = [].concat(a);
        b = a.splice(b, 1)[0];
        a.splice(c, 0, b);
        return a
    }
    function d(a, c) {
        c = j.useState(c);
        var d = c[0]
          , e = c[1];
        j.useLayoutEffect(function() {
            if (a == null)
                return;
            var c = (h || (h = b("WebStorage"))).getLocalStorage();
            if (c != null) {
                c = c.getItem(a);
                c != null && c !== "" && e(JSON.parse(c))
            }
        }, [a]);
        c = j.useCallback(function(c) {
            if (a != null) {
                var d = (h || (h = b("WebStorage"))).getLocalStorage();
                if (d != null)
                    try {
                        var f = JSON.stringify(c);
                        f != null && d.setItem(a, f)
                    } catch (a) {
                        a.code === 22 && d.clear()
                    }
            }
            e(c)
        }, [a]);
        return [d, c]
    }
    function e(a) {
        a = new (i || (i = b("URI")))(a).getQualifiedURI();
        return b("isBusinessURI")(a) ? a.setSubdomain("www").toString() : a.toString()
    }
    function l(a) {
        a = typeof a === "string" ? parseFloat(a) : a;
        isNaN(a) && (a = 0);
        return g._({
            "*": "{number}"
        }, [g._param("number", a, [0])])
    }
}
), null);
__d("GamesVideoStreamerDashboardConstants", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = 10;
    f.STARS_MIN_DEFAULT = a
}
), null);
__d("GamesVideoStreamerDashboardDispatcher", ["ExplicitRegistrationReactDispatcher"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b(b) {
            b = a.call(this, b) || this;
            babelHelpers.assertThisInitialized(b).dispatch = b.dispatch.bind(babelHelpers.assertThisInitialized(b));
            return b
        }
        return b
    }(b("ExplicitRegistrationReactDispatcher"));
    c = new a({
        strict: !0
    });
    e.exports = c
}
), null);
__d("GamesVideoStreamerDashboardVideoQuery", ["RelayFBEnvironment", "RelayModern", "GamesVideoStreamerDashboardVideoQuery_video.graphql", "GamesVideoStreamerDashboardVideoQuery_page.graphql", "GamesVideoStreamerDashboardVideoQuery.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    f.fetch = a;
    var g, h, i;
    g !== void 0 ? g : g = b("GamesVideoStreamerDashboardVideoQuery_video.graphql");
    h !== void 0 ? h : h = b("GamesVideoStreamerDashboardVideoQuery_page.graphql");
    var j = i !== void 0 ? i : i = b("GamesVideoStreamerDashboardVideoQuery.graphql");
    function a(a, c) {
        return b("RelayModern").fetchQuery(b("RelayFBEnvironment"), j, {
            account_id: a,
            page_id: c
        }, {
            force: !0
        })
    }
}
), null);
__d("GamesVideoStreamerDashboardVideoDataModel", ["CurrentUser", "FBLogger", "GamesVideoStreamerDashboardConstants", "GamesVideoStreamerDashboardDispatcher", "GamesVideoStreamerDashboardProfileQuery", "GamesVideoStreamerDashboardVideoQuery", "nullthrows", "promiseDone", "requireCond", "cr:1606639"], (function(a, b, c, d, e, f) {
    "use strict";
    f.fetchLatestVideo = a;
    f.fetchPage = c;
    f.fetchVideo = d;
    f.readPollDataResponse = e;
    f.readPagePollDataResponse = h;
    f.readPageDataResponse = i;
    f.parseGoal = j;
    f._formatVotingPollData = k;
    f.readVideoPollDataResponse = l;
    f.readFanSupportPageSettingsResponse = m;
    f.readPaymentSubscriptionPageSettingsResponse = n;
    f.readAcceptLevelUpTermsMutationResponse = o;
    f.readAcceptMixerBonusTermsMutationResponse = p;
    f.readStarsFSMResponse = q;
    var g = "games_video_streamer_dashboard";
    function a(a, c, d, e) {
        var f = this;
        if (b("cr:1606639") && d != null) {
            b("promiseDone")(b("cr:1606639").fetch(d, e), function(b) {
                b = f.readPollDataResponse(b.page);
                if (!b) {
                    a(null, null);
                    return
                }
                var c = b[0];
                b = b[1];
                b.sort(function(a, b) {
                    return b.created_time - a.created_time
                });
                b = b[0];
                b && (b.owner.id = c.id);
                a(b, c)
            });
            return
        }
        b("promiseDone")(b("GamesVideoStreamerDashboardVideoQuery").fetch(c, d), function(c) {
            var d, e = [], g = [], h = {};
            d = ((d = c) != null ? (d = d.viewer) != null ? (d = d.admined_pages) != null ? d.nodes : d : d : d) || [];
            for (var d = d, i = Array.isArray(d), j = 0, d = i ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                var k;
                if (i) {
                    if (j >= d.length)
                        break;
                    k = d[j++]
                } else {
                    j = d.next();
                    if (j.done)
                        break;
                    k = j.value
                }
                k = k;
                k = f.readPollDataResponse(k);
                if (!k)
                    continue;
                var l = k[0];
                k = k[1];
                h[l.id] = l;
                g.push(l);
                e = e.concat(k)
            }
            l = g.filter(function(a) {
                return a.category_id === "1350536325044173"
            });
            e.sort(function(a, b) {
                return b.created_time - a.created_time
            });
            for (var k = e, j = Array.isArray(k), i = 0, k = j ? k : k[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                if (j) {
                    if (i >= k.length)
                        break;
                    d = k[i++]
                } else {
                    i = k.next();
                    if (i.done)
                        break;
                    d = i.value
                }
                d = d;
                for (var m = l, n = Array.isArray(m), o = 0, m = n ? m : m[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                    var p;
                    if (n) {
                        if (o >= m.length)
                            break;
                        p = m[o++]
                    } else {
                        o = m.next();
                        if (o.done)
                            break;
                        p = o.value
                    }
                    p = p;
                    if (d.owner.id === p.id) {
                        a(d, p);
                        return
                    }
                }
            }
            if (e.length > 0) {
                a(e[0], h[e[0].owner.id]);
                return
            }
            if (l.length > 0) {
                a(null, l[0]);
                return
            }
            if (g.length > 0) {
                a(null, g[0]);
                return
            }
            p = c == null ? void 0 : c.user;
            if (p) {
                n = p == null ? void 0 : (o = p.live_videos) == null ? void 0 : o.nodes;
                m = n != null && n.length > 0 ? f.readVideoPollDataResponse(n[0]) : null;
                d = {
                    id: b("nullthrows")(p.id),
                    name: b("nullthrows")(p.name),
                    category_id: "0",
                    follower_count: 0,
                    supporter_count: 0,
                    active_goals: [],
                    completed_goals: [],
                    stars_strike_text: null,
                    gaming_video_strike_text: null,
                    is_personal_profile: !0,
                    profile_plus_id_for_delegate_page: null
                };
                a(m, d);
                return
            }
            a(null, null)
        }, function(a) {
            a = a instanceof Error ? new Error(JSON.stringify(a.message)) : new Error(JSON.stringify(a));
            b("FBLogger")(g).catching(a).mustfix("Error fetching latest video")
        })
    }
    function c(a, c) {
        var d = this;
        b("promiseDone")(b("GamesVideoStreamerDashboardProfileQuery").fetch(a), function(a) {
            a = d.readPageDataResponse(a);
            a != null && b("GamesVideoStreamerDashboardDispatcher").dispatch({
                type: "pageData/load",
                pageID: a.id,
                payload: a
            });
            c(a)
        })
    }
    function d(a, b) {
        b(babelHelpers["extends"]({}, a))
    }
    function e(a) {
        var b = this
          , c = this.readPagePollDataResponse(a);
        if (!c)
            return null;
        var d = [];
        (((a = a) != null ? (a = a.live_videos) != null ? a.nodes : a : a) || []).forEach(function(a) {
            a = b.readVideoPollDataResponse(a);
            a && d.push(a)
        });
        return [c, d]
    }
    function h(a) {
        try {
            var c, d = [], e = [];
            c = (c = (c = a.gaming_video_creator_settings) == null ? void 0 : (c = c.goals_settings) == null ? void 0 : (c = c.gaming_video_goals) == null ? void 0 : c.edges) != null ? c : [];
            for (var c = c, f = Array.isArray(c), h = 0, c = f ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                var i;
                if (f) {
                    if (h >= c.length)
                        break;
                    i = c[h++]
                } else {
                    h = c.next();
                    if (h.done)
                        break;
                    i = h.value
                }
                i = i;
                i = this.parseGoal(i.node);
                if (i)
                    switch (i.status) {
                    case "IN_PROGRESS":
                        d.push(i);
                        break;
                    case "COMPLETED":
                        e.push(i);
                        break
                    }
            }
            return {
                id: b("nullthrows")(a.id),
                name: b("nullthrows")(a.name),
                category_id: b("nullthrows")(a.category_id),
                follower_count: (i = a.follower_count) != null ? i : 0,
                supporter_count: (h = a.supporter_count) != null ? h : 0,
                active_goals: d,
                completed_goals: e,
                stars_strike_text: a.stars_strike_text,
                gaming_video_strike_text: a.gaming_video_strike_text,
                is_personal_profile: !1,
                profile_plus_id_for_delegate_page: a.profile_plus_id_for_delegate_page
            }
        } catch (c) {
            b("FBLogger")(g).catching(c).mustfix("Invalid GamesPagePollData object from GraphQL response: %s", JSON.stringify(a));
            return null
        }
    }
    function i(a) {
        var c = this
          , d = a.profile;
        if (d == null)
            return null;
        var e = d.id === b("CurrentUser").getAccountID();
        try {
            var f, h, i, j, k, l, o, p, r;
            f = {
                meets_days_requirement: !e && b("nullthrows")((f = d.level_up_eligibility) == null ? void 0 : f.meets_days_requirement),
                meets_followers_requirement: !e && b("nullthrows")((f = d.level_up_eligibility) == null ? void 0 : f.meets_followers_requirement),
                meets_gvc_requirement: !e && b("nullthrows")((f = d.level_up_eligibility) == null ? void 0 : f.meets_gvc_requirement),
                meets_hours_requirement: !e && b("nullthrows")((f = d.level_up_eligibility) == null ? void 0 : f.meets_hours_requirement),
                meets_standards_requirement: !e && b("nullthrows")((f = d.level_up_eligibility) == null ? void 0 : f.meets_standards_requirement),
                meets_country_rollout_requirement: !e && b("nullthrows")((f = d.level_up_eligibility) == null ? void 0 : f.meets_country_rollout_requirement),
                meets_payments_enabled_requirement: !e && b("nullthrows")((f = d.level_up_eligibility) == null ? void 0 : f.meets_payments_enabled_requirement),
                is_eligible: !e && b("nullthrows")((f = d.level_up_eligibility) == null ? void 0 : f.is_eligible)
            };
            h = {
                is_eligible: !e && b("nullthrows")((h = d.game_creator_fan_subscriptions_eligibility) == null ? void 0 : h.is_eligible)
            };
            var s = d.free_stars_tier
              , t = d.broadcast_hours_7d;
            i = (i = d.broadcast_hours_1d) != null ? i : 0;
            j = ((j = d == null ? void 0 : d.broadcast_hours_2d) != null ? j : 0) - i;
            var u = m(a)
              , v = n(d.fan_support_settings)
              , w = q(a)
              , x = d == null ? void 0 : d.blocks_raids
              , y = d == null ? void 0 : d.whitelisted_stream_chaining_page_ids
              , z = d == null ? void 0 : d.blacklisted_stream_chaining_page_ids
              , A = []
              , B = [];
            ((k = (k = a.profile) == null ? void 0 : (k = k.gaming_video_creator_settings) == null ? void 0 : (k = k.goals_settings) == null ? void 0 : (k = k.gaming_video_goals) == null ? void 0 : k.edges) != null ? k : []).forEach(function(a) {
                a = c.parseGoal(a.node);
                if (a)
                    switch (a.status) {
                    case "IN_PROGRESS":
                        A.push(a);
                        break;
                    case "COMPLETED":
                        B.push(a);
                        break
                    }
            });
            var C = [];
            k = (k = a.profile) == null ? void 0 : k.games_content_violating_videos;
            k != null && k.forEach(function(a) {
                var b = a.video;
                if (b == null || b.id == null)
                    return;
                C.push(babelHelpers["extends"]({}, b, {
                    violation_timestamp: a.violation_timestamp
                }))
            });
            k = (k = (k = a.profile) == null ? void 0 : (k = k.gaming_video_creator_settings) == null ? void 0 : k.chat_commands_enabled) != null ? k : !0;
            l = ((l = a.profile) == null ? void 0 : (l = l.moderation_settings_page_enabled) == null ? void 0 : l.passes_gk) === !0;
            o = ((o = a.profile) == null ? void 0 : (o = o.moderation_info_module_enabled) == null ? void 0 : o.passes_gk) === !0;
            p = ((p = a.profile) == null ? void 0 : (p = p.chatbot_settings_page_enabled) == null ? void 0 : p.passes_gk) === !0;
            return {
                id: b("nullthrows")((r = a.profile) == null ? void 0 : r.id),
                name: b("nullthrows")((r = a.profile) == null ? void 0 : r.name),
                category_id: e ? "0" : b("nullthrows")((r = a.profile) == null ? void 0 : r.category_id),
                active_goals: A,
                completed_goals: B,
                uri_token: b("nullthrows")(e ? (r = a.profile) == null ? void 0 : r.username : (r = a.profile) == null ? void 0 : r.uri_token),
                follower_count: (r = (r = a.profile) == null ? void 0 : r.follower_count) != null ? r : 0,
                supporter_count: (r = (r = a.profile) == null ? void 0 : r.supporter_count) != null ? r : 0,
                is_personal_profile: e,
                profile_plus_id_for_delegate_page: (r = a.profile) == null ? void 0 : r.profile_plus_id_for_delegate_page,
                level_up_eligibility: f,
                fan_subscriptions_eligibility: h,
                free_stars_tier: s,
                broadcast_hours_7d: t || 0,
                broadcast_hours_today: i || 0,
                broadcast_hours_yesterday: j || 0,
                leaderboards: (f = (r = a.profile) == null ? void 0 : r.games_video_leaderboards) != null ? f : [],
                games_streamer_metrics: {
                    broadcast_30d_avg_h: (h = a) != null ? (h = h.profile) != null ? (h = h.games_streamer_metrics) != null ? h.broadcast_30d_avg_h : h : h : h,
                    time_spent_30d_avg_h: (s = a) != null ? (s = s.profile) != null ? (s = s.games_streamer_metrics) != null ? s.time_spent_30d_avg_h : s : s : s
                },
                has_dcp_payout_hold: !e && b("nullthrows")((t = a.profile) == null ? void 0 : t.has_dcp_payout_hold),
                fan_support_page_settings_data: u,
                scaled_partnership_status: (i = d == null ? void 0 : d.games_scaled_partnership_status) != null ? i : "NOT_ELIGIBLE",
                payment_subscription_page_settings_data: v,
                woodhenge_creator: (j = a.profile) == null ? void 0 : j.woodhenge_creator,
                woodhenge_onboarding_info: (r = a.profile) == null ? void 0 : r.woodhenge_onboarding_info,
                stars_state_data: w,
                can_sign_up_gaming_incentives: (f = d == null ? void 0 : d.can_sign_up_gaming_incentives) != null ? f : !1,
                profile_picture: a == null ? void 0 : a.profile.profile_picture,
                video_monetization_creator: {
                    live_v2_ad_break_cohort: (h = a) != null ? (h = h.profile) != null ? (h = h.video_monetization_creator) != null ? h.live_v2_ad_break_cohort : h : h : h
                },
                stars_strike_text: (s = a.profile) == null ? void 0 : s.stars_strike_text,
                gaming_video_strike_text: d == null ? void 0 : d.gaming_video_strike_text,
                blocks_raids: x,
                chat_commands_enabled: k,
                moderation_settings_page_enabled: l,
                moderation_info_module_enabled: o,
                chatbot_settings_page_enabled: p,
                whitelisted_page_ids: y || [],
                blacklisted_page_ids: z || [],
                content_violating_videos: C,
                ads_clips_data: (e = a.profile) == null ? void 0 : e.games_ads_clips_data,
                live_gaming_ads_creator_brand_safety_info: {
                    status: (t = a) != null ? (t = t.profile) != null ? (t = t.live_gaming_ads_creator_brand_safety_info) != null ? t.status : t : t : t,
                    end_enforcement_timestamp: (u = a) != null ? (u = u.profile) != null ? (u = u.live_gaming_ads_creator_brand_safety_info) != null ? u.end_enforcement_timestamp : u : u : u,
                    latest_appeal_status: (i = a) != null ? (i = i.profile) != null ? (i = i.live_gaming_ads_creator_brand_safety_info) != null ? i.latest_appeal_status : i : i : i
                },
                auto_squeezeback_enabled: (j = (v = a.profile) == null ? void 0 : v.auto_squeezeback_enabled) != null ? j : !1,
                should_show_auto_squeezeback_banner: (w = (r = a.profile) == null ? void 0 : r.should_show_auto_squeezeback_banner) != null ? w : !1,
                l30_live_earnings: (f = a.profile) == null ? void 0 : f.l30_live_earnings,
                should_show_custom_creator_message_ui: (s = (h = a.profile) == null ? void 0 : h.should_show_custom_creator_message_ui) != null ? s : !1,
                is_onboarded_to_other_monetization_products: (x = (d = a.profile) == null ? void 0 : d.is_onboarded_to_other_monetization_products) != null ? x : !1,
                is_passing_mes_ongoing_check: (l = (k = a.profile) == null ? void 0 : k.is_passing_mes_ongoing_check) != null ? l : !1,
                is_gaming_page: (p = (o = a.profile) == null ? void 0 : o.is_gaming_page) != null ? p : !1,
                is_eligible_for_mixer_bonus: (z = (y = a.profile) == null ? void 0 : y.is_eligible_for_mixer_bonus) != null ? z : !1,
                live_monetization_default_state: (t = (e = a.profile) == null ? void 0 : e.live_monetization_default_state) != null ? t : "DISABLED"
            }
        } catch (c) {
            b("FBLogger")(g).catching(c).mustfix("Invalid GamesPageData object from GraphQL response: %s", JSON.stringify(a));
            return null
        }
    }
    function j(a) {
        try {
            return {
                id: a.id,
                title: a.title_string,
                description: a.description,
                type: a.gaming_video_goal_type,
                status: a.gaming_video_goal_status,
                value_at_creation: a.value_at_creation,
                current_value: a.current_goal_value,
                target_value: a.target_value,
                is_incremental: a.is_incremental,
                creation_time: a.creation_time,
                end_time: a.end_time
            }
        } catch (c) {
            b("FBLogger")(g).catching(c).mustfix("Invalid GamingVideoGoalData object from GraphQL response: %s", JSON.stringify(a));
            return null
        }
    }
    function k(a) {
        a = (a = a.owner) == null ? void 0 : a.video_polls;
        if (!a)
            return [];
        var b = a.nodes[0];
        a = b == null ? void 0 : b.video_poll_options;
        if (!a)
            return [];
        var c = a.nodes.map(function(a) {
            return {
                text: a.option_text || ""
            }
        })
          , d = a.nodes.map(function(a) {
            return a.num_votes || 0
        });
        a = a.nodes.map(function(a) {
            var c = b.total_votes || 0;
            a = a.num_votes || 0;
            a = c > 0 ? a * 100 / c : 0;
            return Math.round(a)
        });
        return [{
            options: c,
            results: {
                option_votes: d,
                option_percentages: a
            },
            question_text: b.question_text || ""
        }]
    }
    function l(a) {
        try {
            var c;
            return {
                broadcast_id: (c = b("nullthrows"))(a.broadcast_id),
                can_viewer_edit: c(a.can_viewer_edit),
                instagram_broadcast_id: a.instagram_broadcast_id,
                can_crosspost_to_instagram: a.can_crosspost_to_instagram,
                instagram_crosspost_check_failure: a.instagram_crosspost_check_failure,
                broadcast_start_time: Number(a.broadcast_start_time),
                copyrights_check_state: a.copyrights_check_state,
                publish_time: Number(c(a.publish_time)),
                can_viewer_see_live_event_log: !!a.can_viewer_see_live_event_log,
                live_badge_text: a.live_badge_text,
                broadcast_status: a.broadcast_status,
                latest_stream_video_asset_earnings: a.latest_stream_video_asset_earnings,
                feedback: {
                    id: c((c = a.feedback) == null ? void 0 : c.id),
                    reactors: {
                        count: b("nullthrows")((c = a.feedback) == null ? void 0 : (c = c.reactors) == null ? void 0 : c.count)
                    },
                    reshares: {
                        count: b("nullthrows")((c = a.feedback) == null ? void 0 : (c = c.reshares) == null ? void 0 : c.count)
                    },
                    top_level_comments: {
                        total_count: b("nullthrows")((c = a.feedback) == null ? void 0 : (c = c.top_level_comments) == null ? void 0 : c.total_count)
                    }
                },
                feedback_id: b("nullthrows")(a.feedback_id),
                id: b("nullthrows")(a.id),
                input_streams: a.input_streams && a.input_streams.nodes && a.input_streams.nodes[0] ? {
                    nodes: {
                        stream_info: a.input_streams.nodes[0].stream_info ? {
                            video_bitrate_bps: a.input_streams.nodes[0].stream_info.video_bitrate_bps,
                            audio_bitrate_bps: a.input_streams.nodes[0].stream_info.audio_bitrate_bps,
                            framerate_per_sec: a.input_streams.nodes[0].stream_info.framerate_per_sec,
                            video_height_px: a.input_streams.nodes[0].stream_info.video_height_px,
                            video_width_px: a.input_streams.nodes[0].stream_info.video_width_px,
                            video_gop_size: a.input_streams.nodes[0].stream_info.video_gop_size,
                            latest_update_timestamp: a.input_streams.nodes[0].stream_info.latest_update_timestamp != null ? Number(a.input_streams.nodes[0].stream_info.latest_update_timestamp) : null
                        } : null,
                        id: b("nullthrows")(a.input_streams.nodes[0].id)
                    }
                } : null,
                is_live_streaming: b("nullthrows")(a.is_live_streaming),
                live_comment_moderation_settings: b("nullthrows")(a.live_comment_moderation_settings),
                live_stream_config: {
                    max_supported_resolution: b("nullthrows")((c = a.live_stream_config) == null ? void 0 : c.max_supported_resolution)
                },
                live_video_auto_squeeze_back_status: a.live_video_auto_squeeze_back_status ? {
                    status: a.live_video_auto_squeeze_back_status.status,
                    timestamp: a.live_video_auto_squeeze_back_status.timestamp
                } : null,
                latest_live_video_extended_break_metadata: a.live_video_latest_extended_break_metadata ? {
                    video_timestamp_start: a.live_video_latest_extended_break_metadata.video_timestamp_start,
                    video_timestamp_end: a.live_video_latest_extended_break_metadata.video_timestamp_end,
                    break_length: a.live_video_latest_extended_break_metadata.break_length
                } : null,
                live_viewer_count_read_only: b("nullthrows")(a.live_viewer_count_read_only),
                polls: this._formatVotingPollData(a),
                is_enabled_for_fan_support_packs: b("nullthrows")(a.is_enabled_for_fan_support_packs),
                title: {
                    text: b("nullthrows")((c = a.title) == null ? void 0 : c.text)
                },
                message: {
                    text: b("nullthrows")((c = a.message) == null ? void 0 : c.text)
                },
                url: b("nullthrows")(a.url),
                owner: {
                    id: b("nullthrows")((c = a.owner) == null ? void 0 : c.id)
                },
                attributed_game: a.attributed_game ? {
                    id: b("nullthrows")((c = a.attributed_game) == null ? void 0 : c.id),
                    name: b("nullthrows")((c = a.attributed_game) == null ? void 0 : c.name),
                    game_image: {
                        uri: ((c = a.attributed_game) == null ? void 0 : (c = c.game_image) == null ? void 0 : c.uri) || ""
                    }
                } : null,
                rehearsal_info: a.rehearsal_info ? {
                    rehearsal_text: a.rehearsal_info.rehearsal_text || ""
                } : null,
                live_video_broadcast_time: a.live_video_broadcast_time,
                connected_live_viewer_count: (c = a.connected_live_viewer_count) != null ? c : 0,
                tagged_pages: a.tagged_pages
            }
        } catch (c) {
            b("FBLogger")(g).catching(c).mustfix("Invalid GamesVideoPollData object from GraphQL response: %s", JSON.stringify(a));
            return null
        }
    }
    function m(a) {
        try {
            var c, d, e, f;
            f = (f = a) != null ? (f = f.profile) != null ? (f = f.fan_support_settings) != null ? f.id : f : f : f;
            if (f == null)
                return null;
            e = b("nullthrows")((e = a) != null ? (e = e.profile) != null ? (e = e.fan_support_settings) != null ? e.level_up_terms_accepted : e : e : e);
            d = b("nullthrows")((d = a) != null ? (d = d.profile) != null ? (d = d.fan_support_settings) != null ? d.mixer_bonus_terms_accepted : d : d : d);
            c = (c = a) != null ? (c = c.profile) != null ? (c = c.fan_support_settings) != null ? c.stars_minimum_amount : c : c : c;
            return {
                fanSupportPageSettingsID: f,
                pageAcceptedLevelUpTOS: e,
                pageAcceptedMixerBonusTOS: d,
                starsMinimumAmount: c != null ? c : b("GamesVideoStreamerDashboardConstants").STARS_MIN_DEFAULT
            }
        } catch (c) {
            b("FBLogger")(g).catching(c).mustfix("Invalid FanSupportPageSettingsData object from GraphQL response: %s", JSON.stringify(a));
            return null
        }
    }
    function n(a) {
        if (a == null)
            return null;
        try {
            var c, d, e;
            e = (e = a) != null ? e.id : e;
            if (e == null)
                return null;
            d = b("nullthrows")((d = a) != null ? d.pay_sub_terms_accepted : d);
            c = (c = a) != null ? c.payment_subscription_enabled : c;
            return {
                fanSupportPageSettingsID: e,
                pageAcceptedPaySubTerms: d != null ? d : !1,
                pagePaySubEnabled: c != null ? c : !1
            }
        } catch (c) {
            b("FBLogger")(g).catching(c).mustfix("Invalid PaymentSubscriptionPageSettingsData object from GraphQL response: %s", JSON.stringify(a));
            return null
        }
    }
    function o(a) {
        try {
            var c, d, e;
            e = b("nullthrows")((e = a) != null ? (e = e.accept_level_up_terms_fan_support_page_settings) != null ? (e = e.fan_support_page_settings) != null ? e.id : e : e : e);
            d = b("nullthrows")((d = a) != null ? (d = d.accept_level_up_terms_fan_support_page_settings) != null ? (d = d.fan_support_page_settings) != null ? d.level_up_terms_accepted : d : d : d);
            c = b("nullthrows")((c = a) != null ? (c = c.accept_level_up_terms_fan_support_page_settings) != null ? (c = c.fan_support_page_settings) != null ? c.mixer_bonus_terms_accepted : c : c : c);
            return {
                fanSupportPageSettingsID: e,
                pageAcceptedLevelUpTOS: d,
                pageAcceptedMixerBonusTOS: c
            }
        } catch (c) {
            b("FBLogger")(g).catching(c).mustfix("Invalid FanSupportPageSettingsData object from GraphQL AcceptLevelUpTermsMutation response: %s", JSON.stringify(a));
            return null
        }
    }
    function p(a) {
        try {
            var c, d, e;
            e = b("nullthrows")((e = a) != null ? (e = e.accept_mixer_bonus_terms_fan_support_page_settings) != null ? (e = e.fan_support_page_settings) != null ? e.id : e : e : e);
            d = b("nullthrows")((d = a) != null ? (d = d.accept_mixer_bonus_terms_fan_support_page_settings) != null ? (d = d.fan_support_page_settings) != null ? d.level_up_terms_accepted : d : d : d);
            c = b("nullthrows")((c = a) != null ? (c = c.accept_mixer_bonus_terms_fan_support_page_settings) != null ? (c = c.fan_support_page_settings) != null ? c.mixer_bonus_terms_accepted : c : c : c);
            return {
                fanSupportPageSettingsID: e,
                pageAcceptedLevelUpTOS: d,
                pageAcceptedMixerBonusTOS: c
            }
        } catch (c) {
            b("FBLogger")(g).catching(c).mustfix("Invalid FanSupportPageSettingsData object from GraphQL AcceptMixerBonusTermsMutation response: %s", JSON.stringify(a));
            return null
        }
    }
    function q(a) {
        try {
            var c, d;
            d = b("nullthrows")((d = a) != null ? (d = d.profile) != null ? d.stars_tos_accepted : d : d);
            c = b("nullthrows")((c = a) != null ? (c = c.profile) != null ? c.stars_onboarded : c : c);
            return {
                tosAccepted: d,
                onboarded: c
            }
        } catch (c) {
            b("FBLogger")(g).catching(c).mustfix("Invalid Stars FSM object from GraphQL response: %s", JSON.stringify(a));
            return null
        }
    }
}
), null);
__d("StaticContainer.react", ["React"], (function(a, b, c, d, e, f) {
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        var c = b.prototype;
        c.shouldComponentUpdate = function(a) {
            return !!a.shouldUpdate
        }
        ;
        c.render = function() {
            var a = this.props.children;
            return a === null || a === !1 ? null : g.Children.only(a)
        }
        ;
        return b
    }(g.Component);
    e.exports = a
}
), null);
/**
 * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
 */
__d("invariant-2.2.4", [], (function(a, b, c, d, e, f) {
    "use strict";
    b = {};
    var g = {
        exports: b
    };
    function h() {
        var a = "production"
          , b = function(b, c, d, e, f, g, h, i) {
            if (a !== "production" && c === void 0)
                throw new Error("invariant requires an error message argument");
            if (!b) {
                if (c === void 0)
                    b = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var j = [d, e, f, g, h, i]
                      , k = 0;
                    b = new Error(c.replace(/%s/g, function() {
                        return j[k++]
                    }));
                    b.name = "Invariant Violation"
                }
                b.framesToPop = 1;
                throw b
            }
        };
        g.exports = b
    }
    var i = !1;
    function j() {
        i || (i = !0,
        h());
        return g.exports
    }
    function a(a) {
        switch (a) {
        case void 0:
            return j()
        }
    }
    e.exports = a
}
), null);
/**
 * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
 */
__d("object-assign-4.1.1", [], (function(a, b, c, d, e, f) {
    "use strict";
    b = {};
    var g = {
        exports: b
    };
    function h() {
        var a = Object.getOwnPropertySymbols
          , b = Object.prototype.hasOwnProperty
          , c = Object.prototype.propertyIsEnumerable;
        function d(a) {
            if (a === null || a === void 0)
                throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(a)
        }
        function e() {
            try {
                if (!Object.assign)
                    return !1;
                var a = new String("abc");
                a[5] = "de";
                if (Object.getOwnPropertyNames(a)[0] === "5")
                    return !1;
                var b = {};
                for (var a = 0; a < 10; a++)
                    b["_" + String.fromCharCode(a)] = a;
                a = Object.getOwnPropertyNames(b).map(function(a) {
                    return b[a]
                });
                if (a.join("") !== "0123456789")
                    return !1;
                var c = {};
                "abcdefghijklmnopqrst".split("").forEach(function(a) {
                    c[a] = a
                });
                return Object.keys(Object.assign({}, c)).join("") !== "abcdefghijklmnopqrst" ? !1 : !0
            } catch (a) {
                return !1
            }
        }
        g.exports = e() ? Object.assign : function(e, f) {
            var g, h = d(e), i;
            for (var j = 1; j < arguments.length; j++) {
                g = Object(arguments[j]);
                for (var k in g)
                    b.call(g, k) && (h[k] = g[k]);
                if (a) {
                    i = a(g);
                    for (var l = 0; l < i.length; l++)
                        c.call(g, i[l]) && (h[i[l]] = g[i[l]])
                }
            }
            return h
        }
    }
    var i = !1;
    function j() {
        i || (i = !0,
        h());
        return g.exports
    }
    function a(a) {
        switch (a) {
        case void 0:
            return j()
        }
    }
    e.exports = a
}
), null);
/**
 * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
 */
__d("react-is-16.8.6", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {}
      , h = {
        exports: g
    };
    function i() {
        Object.defineProperty(g, "__esModule", {
            value: !0
        });
        var a = "function" === typeof Symbol && Symbol["for"]
          , b = a ? Symbol["for"]("react.element") : 60103
          , c = a ? Symbol["for"]("react.portal") : 60106
          , d = a ? Symbol["for"]("react.fragment") : 60107
          , e = a ? Symbol["for"]("react.strict_mode") : 60108
          , f = a ? Symbol["for"]("react.profiler") : 60114
          , h = a ? Symbol["for"]("react.provider") : 60109
          , i = a ? Symbol["for"]("react.context") : 60110
          , j = a ? Symbol["for"]("react.async_mode") : 60111
          , k = a ? Symbol["for"]("react.concurrent_mode") : 60111
          , l = a ? Symbol["for"]("react.forward_ref") : 60112
          , m = a ? Symbol["for"]("react.suspense") : 60113
          , n = a ? Symbol["for"]("react.memo") : 60115
          , o = a ? Symbol["for"]("react.lazy") : 60116;
        function p(a) {
            if ("object" === typeof a && null !== a) {
                var g = a.$$typeof;
                switch (g) {
                case b:
                    switch (a = a.type,
                    a) {
                    case j:
                    case k:
                    case d:
                    case f:
                    case e:
                    case m:
                        return a;
                    default:
                        switch (a = a && a.$$typeof,
                        a) {
                        case i:
                        case l:
                        case h:
                            return a;
                        default:
                            return g
                        }
                    }
                case o:
                case n:
                case c:
                    return g
                }
            }
        }
        function q(a) {
            return p(a) === k
        }
        g.typeOf = p;
        g.AsyncMode = j;
        g.ConcurrentMode = k;
        g.ContextConsumer = i;
        g.ContextProvider = h;
        g.Element = b;
        g.ForwardRef = l;
        g.Fragment = d;
        g.Lazy = o;
        g.Memo = n;
        g.Portal = c;
        g.Profiler = f;
        g.StrictMode = e;
        g.Suspense = m;
        g.isValidElementType = function(a) {
            return "string" === typeof a || "function" === typeof a || a === d || a === k || a === f || a === e || a === m || "object" === typeof a && null !== a && (a.$$typeof === o || a.$$typeof === n || a.$$typeof === h || a.$$typeof === i || a.$$typeof === l)
        }
        ;
        g.isAsyncMode = function(a) {
            return q(a) || p(a) === j
        }
        ;
        g.isConcurrentMode = q;
        g.isContextConsumer = function(a) {
            return p(a) === i
        }
        ;
        g.isContextProvider = function(a) {
            return p(a) === h
        }
        ;
        g.isElement = function(a) {
            return "object" === typeof a && null !== a && a.$$typeof === b
        }
        ;
        g.isForwardRef = function(a) {
            return p(a) === l
        }
        ;
        g.isFragment = function(a) {
            return p(a) === d
        }
        ;
        g.isLazy = function(a) {
            return p(a) === o
        }
        ;
        g.isMemo = function(a) {
            return p(a) === n
        }
        ;
        g.isPortal = function(a) {
            return p(a) === c
        }
        ;
        g.isProfiler = function(a) {
            return p(a) === f
        }
        ;
        g.isStrictMode = function(a) {
            return p(a) === e
        }
        ;
        g.isSuspense = function(a) {
            return p(a) === m
        }
    }
    var j = !1;
    function k() {
        j || (j = !0,
        i());
        return h.exports
    }
    b = {};
    var l = {
        exports: b
    };
    function m() {
        l.exports = k()
    }
    var n = !1;
    function o() {
        n || (n = !0,
        m());
        return l.exports
    }
    function a(a) {
        switch (a) {
        case void 0:
            return o()
        }
    }
    e.exports = a
}
), null);
/**
 * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
 */
__d("prop-types-15.7.2", ["react-is-16.8.6", "object-assign-4.1.1"], (function(a, b, c, d, e, f) {
    "use strict";
    b("react-is-16.8.6");
    b("object-assign-4.1.1");
    c = {};
    var g = {
        exports: c
    };
    function h() {
        var a = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
        g.exports = a
    }
    var i = !1;
    function j() {
        i || (i = !0,
        h());
        return g.exports
    }
    d = {};
    var k = {
        exports: d
    };
    function l() {
        function a(a, b, c, d, e) {}
        a.resetWarningCache = function() {}
        ;
        k.exports = a
    }
    var m = !1;
    function n() {
        m || (m = !0,
        l());
        return k.exports
    }
    f = {};
    var o = {
        exports: f
    };
    function p() {
        var a = j();
        function b() {}
        function c() {}
        c.resetWarningCache = b;
        o.exports = function() {
            function d(b, c, d, e, f, g) {
                if (g === a)
                    return;
                b = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                b.name = "Invariant Violation";
                throw b
            }
            d.isRequired = d;
            function e() {
                return d
            }
            e = {
                array: d,
                bool: d,
                func: d,
                number: d,
                object: d,
                string: d,
                symbol: d,
                any: d,
                arrayOf: e,
                element: d,
                elementType: d,
                instanceOf: e,
                node: d,
                objectOf: e,
                oneOf: e,
                oneOfType: e,
                shape: e,
                exact: e,
                checkPropTypes: c,
                resetWarningCache: b
            };
            e.PropTypes = e;
            return e
        }
    }
    var q = !1;
    function r() {
        q || (q = !0,
        p());
        return o.exports
    }
    b = {};
    var s = {
        exports: b
    };
    function t() {
        s.exports = r()()
    }
    var u = !1;
    function v() {
        u || (u = !0,
        t());
        return s.exports
    }
    function a(a) {
        switch (a) {
        case void 0:
            return v();
        case "/checkPropTypes":
            return n()
        }
    }
    e.exports = a
}
), null);
/**
 * License: https://www.facebook.com/legal/license/V9vdYColc4k/
 */
__d("react-dom-comet-0.0.0", ["ReactDOMComet"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a) {
        return a && typeof a === "object" && "default"in a ? a["default"] : a
    }
    var g = a(b("ReactDOMComet"));
    d = {};
    var h = {
        exports: d
    };
    function i() {
        h.exports = g
    }
    var j = !1;
    function k() {
        j || (j = !0,
        i());
        return h.exports
    }
    function c(a) {
        switch (a) {
        case void 0:
            return k()
        }
    }
    e.exports = c
}
), null);
/**
 * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
 */
__d("regenerator-runtime-0.13.2", [], (function(a, b, c, d, e, f) {
    "use strict";
    b = {};
    var g = {
        exports: b
    };
    function h() {
        var a = function(a) {
            var b = Object.prototype, c = b.hasOwnProperty, d, e = typeof Symbol === "function" ? Symbol : {}, g = e.iterator || "@@iterator", h = e.asyncIterator || "@@asyncIterator", i = e.toStringTag || "@@toStringTag";
            function j(a, b, c, d) {
                b = b && b.prototype instanceof q ? b : q;
                b = Object.create(b.prototype);
                d = new B(d || []);
                b._invoke = x(a, c, d);
                return b
            }
            a.wrap = j;
            function k(a, b, c) {
                try {
                    return {
                        type: "normal",
                        arg: a.call(b, c)
                    }
                } catch (a) {
                    return {
                        type: "throw",
                        arg: a
                    }
                }
            }
            var l = "suspendedStart"
              , m = "suspendedYield"
              , n = "executing"
              , o = "completed"
              , p = {};
            function q() {}
            function r() {}
            function s() {}
            e = {};
            e[g] = function() {
                return this
            }
            ;
            var t = Object.getPrototypeOf;
            t = t && t(t(C([])));
            t && t !== b && c.call(t, g) && (e = t);
            var u = s.prototype = q.prototype = Object.create(e);
            r.prototype = u.constructor = s;
            s.constructor = r;
            s[i] = r.displayName = "GeneratorFunction";
            function v(a) {
                ["next", "throw", "return"].forEach(function(b) {
                    a[b] = function(a) {
                        return this._invoke(b, a)
                    }
                })
            }
            a.isGeneratorFunction = function(a) {
                a = typeof a === "function" && a.constructor;
                return a ? a === r || (a.displayName || a.name) === "GeneratorFunction" : !1
            }
            ;
            a.mark = function(a) {
                Object.setPrototypeOf ? Object.setPrototypeOf(a, s) : (a.__proto__ = s,
                i in a || (a[i] = "GeneratorFunction"));
                a.prototype = Object.create(u);
                return a
            }
            ;
            a.awrap = function(a) {
                return {
                    __await: a
                }
            }
            ;
            function w(a) {
                function b(d, e, f, g) {
                    d = k(a[d], a, e);
                    if (d.type === "throw")
                        g(d.arg);
                    else {
                        var h = d.arg;
                        e = h.value;
                        return e && typeof e === "object" && c.call(e, "__await") ? Promise.resolve(e.__await).then(function(a) {
                            b("next", a, f, g)
                        }, function(a) {
                            b("throw", a, f, g)
                        }) : Promise.resolve(e).then(function(a) {
                            h.value = a,
                            f(h)
                        }, function(a) {
                            return b("throw", a, f, g)
                        })
                    }
                }
                var d;
                function e(a, c) {
                    function e() {
                        return new Promise(function(d, e) {
                            b(a, c, d, e)
                        }
                        )
                    }
                    return d = d ? d.then(e, e) : e()
                }
                this._invoke = e
            }
            v(w.prototype);
            w.prototype[h] = function() {
                return this
            }
            ;
            a.AsyncIterator = w;
            a.async = function(b, c, d, e) {
                var f = new w(j(b, c, d, e));
                return a.isGeneratorFunction(c) ? f : f.next().then(function(a) {
                    return a.done ? a.value : f.next()
                })
            }
            ;
            function x(a, b, c) {
                var d = l;
                return function(e, f) {
                    if (d === n)
                        throw new Error("Generator is already running");
                    if (d === o) {
                        if (e === "throw")
                            throw f;
                        return D()
                    }
                    c.method = e;
                    c.arg = f;
                    while (!0) {
                        e = c.delegate;
                        if (e) {
                            f = y(e, c);
                            if (f) {
                                if (f === p)
                                    continue;
                                return f
                            }
                        }
                        if (c.method === "next")
                            c.sent = c._sent = c.arg;
                        else if (c.method === "throw") {
                            if (d === l) {
                                d = o;
                                throw c.arg
                            }
                            c.dispatchException(c.arg)
                        } else
                            c.method === "return" && c.abrupt("return", c.arg);
                        d = n;
                        e = k(a, b, c);
                        if (e.type === "normal") {
                            d = c.done ? o : m;
                            if (e.arg === p)
                                continue;
                            return {
                                value: e.arg,
                                done: c.done
                            }
                        } else
                            e.type === "throw" && (d = o,
                            c.method = "throw",
                            c.arg = e.arg)
                    }
                }
            }
            function y(a, b) {
                var c = a.iterator[b.method];
                if (c === void 0) {
                    b.delegate = null;
                    if (b.method === "throw") {
                        if (a.iterator["return"]) {
                            b.method = "return";
                            b.arg = void 0;
                            y(a, b);
                            if (b.method === "throw")
                                return p
                        }
                        b.method = "throw";
                        b.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return p
                }
                c = k(c, a.iterator, b.arg);
                if (c.type === "throw") {
                    b.method = "throw";
                    b.arg = c.arg;
                    b.delegate = null;
                    return p
                }
                c = c.arg;
                if (!c) {
                    b.method = "throw";
                    b.arg = new TypeError("iterator result is not an object");
                    b.delegate = null;
                    return p
                }
                if (c.done)
                    b[a.resultName] = c.value,
                    b.next = a.nextLoc,
                    b.method !== "return" && (b.method = "next",
                    b.arg = void 0);
                else
                    return c;
                b.delegate = null;
                return p
            }
            v(u);
            u[i] = "Generator";
            u[g] = function() {
                return this
            }
            ;
            u.toString = function() {
                return "[object Generator]"
            }
            ;
            function z(a) {
                var b = {
                    tryLoc: a[0]
                };
                1 in a && (b.catchLoc = a[1]);
                2 in a && (b.finallyLoc = a[2],
                b.afterLoc = a[3]);
                this.tryEntries.push(b)
            }
            function A(a) {
                var b = a.completion || {};
                b.type = "normal";
                delete b.arg;
                a.completion = b
            }
            function B(a) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                a.forEach(z, this),
                this.reset(!0)
            }
            a.keys = function(a) {
                var b = [];
                for (var c in a)
                    b.push(c);
                b.reverse();
                return function c() {
                    while (b.length) {
                        var d = b.pop();
                        if (d in a) {
                            c.value = d;
                            c.done = !1;
                            return c
                        }
                    }
                    c.done = !0;
                    return c
                }
            }
            ;
            function C(a) {
                if (a) {
                    var b = a[g];
                    if (b)
                        return b.call(a);
                    if (typeof a.next === "function")
                        return a;
                    if (!isNaN(a.length)) {
                        var d = -1;
                        b = function b() {
                            while (++d < a.length)
                                if (c.call(a, d)) {
                                    b.value = a[d];
                                    b.done = !1;
                                    return b
                                }
                            b.value = void 0;
                            b.done = !0;
                            return b
                        }
                        ;
                        return b.next = b
                    }
                }
                return {
                    next: D
                }
            }
            a.values = C;
            function D() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            B.prototype = {
                constructor: B,
                reset: function(a) {
                    this.prev = 0;
                    this.next = 0;
                    this.sent = this._sent = void 0;
                    this.done = !1;
                    this.delegate = null;
                    this.method = "next";
                    this.arg = void 0;
                    this.tryEntries.forEach(A);
                    if (!a)
                        for (var b in this)
                            b.charAt(0) === "t" && c.call(this, b) && !isNaN(+b.slice(1)) && (this[b] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var a = this.tryEntries[0];
                    a = a.completion;
                    if (a.type === "throw")
                        throw a.arg;
                    return this.rval
                },
                dispatchException: function(a) {
                    if (this.done)
                        throw a;
                    var b = this;
                    function d(c, d) {
                        g.type = "throw";
                        g.arg = a;
                        b.next = c;
                        d && (b.method = "next",
                        b.arg = void 0);
                        return !!d
                    }
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var f = this.tryEntries[e]
                          , g = f.completion;
                        if (f.tryLoc === "root")
                            return d("end");
                        if (f.tryLoc <= this.prev) {
                            var h = c.call(f, "catchLoc")
                              , i = c.call(f, "finallyLoc");
                            if (h && i) {
                                if (this.prev < f.catchLoc)
                                    return d(f.catchLoc, !0);
                                else if (this.prev < f.finallyLoc)
                                    return d(f.finallyLoc)
                            } else if (h) {
                                if (this.prev < f.catchLoc)
                                    return d(f.catchLoc, !0)
                            } else if (i) {
                                if (this.prev < f.finallyLoc)
                                    return d(f.finallyLoc)
                            } else
                                throw new Error("try statement without catch or finally")
                        }
                    }
                },
                abrupt: function(a, b) {
                    for (var d = this.tryEntries.length - 1; d >= 0; --d) {
                        var e = this.tryEntries[d];
                        if (e.tryLoc <= this.prev && c.call(e, "finallyLoc") && this.prev < e.finallyLoc) {
                            var f = e;
                            break
                        }
                    }
                    f && (a === "break" || a === "continue") && f.tryLoc <= b && b <= f.finallyLoc && (f = null);
                    e = f ? f.completion : {};
                    e.type = a;
                    e.arg = b;
                    if (f) {
                        this.method = "next";
                        this.next = f.finallyLoc;
                        return p
                    }
                    return this.complete(e)
                },
                complete: function(a, b) {
                    if (a.type === "throw")
                        throw a.arg;
                    a.type === "break" || a.type === "continue" ? this.next = a.arg : a.type === "return" ? (this.rval = this.arg = a.arg,
                    this.method = "return",
                    this.next = "end") : a.type === "normal" && b && (this.next = b);
                    return p
                },
                finish: function(a) {
                    for (var b = this.tryEntries.length - 1; b >= 0; --b) {
                        var c = this.tryEntries[b];
                        if (c.finallyLoc === a) {
                            this.complete(c.completion, c.afterLoc);
                            A(c);
                            return p
                        }
                    }
                },
                "catch": function(a) {
                    for (var b = this.tryEntries.length - 1; b >= 0; --b) {
                        var c = this.tryEntries[b];
                        if (c.tryLoc === a) {
                            var d = c.completion;
                            if (d.type === "throw") {
                                var e = d.arg;
                                A(c)
                            }
                            return e
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(a, b, c) {
                    this.delegate = {
                        iterator: C(a),
                        resultName: b,
                        nextLoc: c
                    };
                    this.method === "next" && (this.arg = void 0);
                    return p
                }
            };
            return a
        }(typeof g === "object" ? g.exports : {});
        try {
            regeneratorRuntime = a
        } catch (b) {
            Function("r", "regeneratorRuntime = r")(a)
        }
    }
    var i = !1;
    function j() {
        i || (i = !0,
        h());
        return g.exports
    }
    function a(a) {
        switch (a) {
        case void 0:
            return j();
        case "/runtime":
            return j()
        }
    }
    e.exports = a
}
), null);
/**
 * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
 */
__d("react-redux-7.1.1", ["babel-runtime-7.6.0", "react-0.0.0", "prop-types-15.7.2", "hoist-non-react-statics-3.3.0", "invariant-2.2.4", "react-is-16.9.0", "redux-4.0.4", "react-dom-comet-0.0.0"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a) {
        return a && typeof a === "object" && "default"in a ? a["default"] : a
    }
    var g = a(b("babel-runtime-7.6.0"))
      , h = a(b("react-0.0.0"))
      , i = a(b("prop-types-15.7.2"))
      , j = a(b("hoist-non-react-statics-3.3.0"))
      , k = a(b("invariant-2.2.4"))
      , l = a(b("react-is-16.9.0"))
      , m = a(b("redux-4.0.4"))
      , n = a(b("react-dom-comet-0.0.0"))
      , o = {}
      , p = {
        exports: o
    };
    function q() {
        var a = g("/helpers/interopRequireDefault");
        o.__esModule = !0;
        o["default"] = o.ReactReduxContext = void 0;
        a = a(h());
        a = a["default"].createContext(null);
        o.ReactReduxContext = a;
        a = a;
        o["default"] = a
    }
    var r = !1;
    function s() {
        r || (r = !0,
        q());
        return p.exports
    }
    var t = {}
      , u = {
        exports: t
    };
    function v() {
        t.__esModule = !0;
        t.getBatch = t.setBatch = void 0;
        function a(a) {
            a()
        }
        var b = a;
        a = function(a) {
            return b = a
        }
        ;
        t.setBatch = a;
        a = function() {
            return b
        }
        ;
        t.getBatch = a
    }
    var w = !1;
    function x() {
        w || (w = !0,
        v());
        return u.exports
    }
    var y = {}
      , z = {
        exports: y
    };
    function A() {
        y.__esModule = !0;
        y["default"] = void 0;
        var a = x()
          , b = null
          , c = {
            notify: function() {}
        };
        function d() {
            var c = a.getBatch()
              , d = []
              , e = [];
            return {
                clear: function() {
                    e = b,
                    d = b
                },
                notify: function() {
                    var a = d = e;
                    c(function() {
                        for (var b = 0; b < a.length; b++)
                            a[b]()
                    })
                },
                get: function() {
                    return e
                },
                subscribe: function(a) {
                    var c = !0;
                    e === d && (e = d.slice());
                    e.push(a);
                    return function() {
                        if (!c || d === b)
                            return;
                        c = !1;
                        e === d && (e = d.slice());
                        e.splice(e.indexOf(a), 1)
                    }
                }
            }
        }
        var e = function() {
            function a(a, b) {
                this.store = a,
                this.parentSub = b,
                this.unsubscribe = null,
                this.listeners = c,
                this.handleChangeWrapper = this.handleChangeWrapper.bind(this)
            }
            var b = a.prototype;
            b.addNestedSub = function(a) {
                this.trySubscribe();
                return this.listeners.subscribe(a)
            }
            ;
            b.notifyNestedSubs = function() {
                this.listeners.notify()
            }
            ;
            b.handleChangeWrapper = function() {
                this.onStateChange && this.onStateChange()
            }
            ;
            b.isSubscribed = function() {
                return Boolean(this.unsubscribe)
            }
            ;
            b.trySubscribe = function() {
                this.unsubscribe || (this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper),
                this.listeners = d())
            }
            ;
            b.tryUnsubscribe = function() {
                this.unsubscribe && (this.unsubscribe(),
                this.unsubscribe = null,
                this.listeners.clear(),
                this.listeners = c)
            }
            ;
            return a
        }();
        y["default"] = e
    }
    var B = !1;
    function C() {
        B || (B = !0,
        A());
        return z.exports
    }
    var D = {}
      , E = {
        exports: D
    };
    function F() {
        var a = g("/helpers/interopRequireDefault")
          , b = g("/helpers/interopRequireWildcard");
        D.__esModule = !0;
        D["default"] = void 0;
        var c = b(h());
        b = a(i());
        var d = s()
          , e = a(C());
        function f(a) {
            var b = a.store
              , f = a.context;
            a = a.children;
            var g = c.useMemo(function() {
                var a = new e["default"](b);
                a.onStateChange = a.notifyNestedSubs;
                return {
                    store: b,
                    subscription: a
                }
            }, [b])
              , h = c.useMemo(function() {
                return b.getState()
            }, [b]);
            c.useEffect(function() {
                var a = g.subscription;
                a.trySubscribe();
                h !== b.getState() && a.notifyNestedSubs();
                return function() {
                    a.tryUnsubscribe(),
                    a.onStateChange = null
                }
            }, [g, h]);
            f = f || d.ReactReduxContext;
            return c["default"].createElement(f.Provider, {
                value: g
            }, a)
        }
        f.propTypes = {
            store: b["default"].shape({
                subscribe: b["default"].func.isRequired,
                dispatch: b["default"].func.isRequired,
                getState: b["default"].func.isRequired
            }),
            context: b["default"].object,
            children: b["default"].any
        };
        a = f;
        D["default"] = a
    }
    var G = !1;
    function H() {
        G || (G = !0,
        F());
        return E.exports
    }
    var I = {}
      , J = {
        exports: I
    };
    function K() {
        var a = g("/helpers/interopRequireWildcard")
          , b = g("/helpers/interopRequireDefault");
        I.__esModule = !0;
        I["default"] = v;
        var c = b(g("/helpers/extends"))
          , d = b(g("/helpers/objectWithoutPropertiesLoose"))
          , e = b(j())
          , f = b(k())
          , i = a(h())
          , m = l()
          , n = b(C())
          , o = s()
          , p = []
          , q = [null, null];
        function r(a, b) {
            a = a[1];
            return [b.payload, a + 1]
        }
        var t = function() {
            return [null, 0]
        }
          , u = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined" ? i.useLayoutEffect : i.useEffect;
        function v(a, b) {
            b === void 0 && (b = {});
            b = b;
            var g = b.getDisplayName
              , h = g === void 0 ? function(a) {
                return "ConnectAdvanced(" + a + ")"
            }
            : g;
            g = b.methodName;
            var j = g === void 0 ? "connectAdvanced" : g;
            g = b.renderCountProp;
            var k = g === void 0 ? void 0 : g;
            g = b.shouldHandleStateChanges;
            var l = g === void 0 ? !0 : g;
            g = b.storeKey;
            var s = g === void 0 ? "store" : g;
            g = b.withRef;
            g = g === void 0 ? !1 : g;
            var v = b.forwardRef
              , w = v === void 0 ? !1 : v;
            v = b.context;
            v = v === void 0 ? o.ReactReduxContext : v;
            var x = d["default"](b, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]);
            f["default"](k === void 0, "renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension");
            f["default"](!g, "withRef is removed. To access the wrapped instance, use a ref on the connected component");
            b = "To use a custom Redux store for specific components, create a custom React context with React.createContext(), and pass the context object to React Redux's Provider and specific components like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. You may also pass a {context : MyContext} option to connect";
            f["default"](s === "store", "storeKey has been removed and does not do anything. " + b);
            var y = v;
            return function(b) {
                var g = b.displayName || b.name || "Component"
                  , o = h(g)
                  , v = c["default"]({}, x, {
                    getDisplayName: h,
                    methodName: j,
                    renderCountProp: k,
                    shouldHandleStateChanges: l,
                    storeKey: s,
                    displayName: o,
                    wrappedComponentName: g,
                    WrappedComponent: b
                });
                g = x.pure;
                function z(b) {
                    return a(b.dispatch, v)
                }
                var A = g ? i.useMemo : function(a) {
                    return a()
                }
                ;
                function B(a) {
                    var e = i.useMemo(function() {
                        var b = a.forwardedRef
                          , c = d["default"](a, ["forwardedRef"]);
                        return [a.context, b, c]
                    }, [a])
                      , g = e[0]
                      , h = e[1]
                      , j = e[2]
                      , k = i.useMemo(function() {
                        return g && g.Consumer && m.isContextConsumer(i["default"].createElement(g.Consumer, null)) ? g : y
                    }, [g, y])
                      , s = i.useContext(k)
                      , v = Boolean(a.store);
                    e = Boolean(s) && Boolean(s.store);
                    f["default"](v || e, 'Could not find "store" in the context of ' + ('"' + o + '". Either wrap the root component in a <Provider>, ') + "or pass a custom React context provider to <Provider> and the corresponding " + ("React context consumer to " + o + " in connect options."));
                    var w = a.store || s.store
                      , x = i.useMemo(function() {
                        return z(w)
                    }, [w]);
                    e = i.useMemo(function() {
                        if (!l)
                            return q;
                        var a = new n["default"](w,v ? null : s.subscription)
                          , b = a.notifyNestedSubs.bind(a);
                        return [a, b]
                    }, [w, v, s]);
                    var B = e[0]
                      , C = e[1]
                      , D = i.useMemo(function() {
                        return v ? s : c["default"]({}, s, {
                            subscription: B
                        })
                    }, [v, s, B]);
                    e = i.useReducer(r, p, t);
                    var E = e[0];
                    E = E[0];
                    var F = e[1];
                    if (E && E.error)
                        throw E.error;
                    var G = i.useRef()
                      , H = i.useRef(j)
                      , I = i.useRef()
                      , J = i.useRef(!1)
                      , K = A(function() {
                        return I.current && j === H.current ? I.current : x(w.getState(), j)
                    }, [w, E, j]);
                    u(function() {
                        H.current = j,
                        G.current = K,
                        J.current = !1,
                        I.current && (I.current = null,
                        C())
                    });
                    u(function() {
                        if (!l)
                            return;
                        var a = !1
                          , b = null
                          , c = function() {
                            if (a)
                                return;
                            var c = w.getState(), d, e;
                            try {
                                d = x(c, H.current)
                            } catch (a) {
                                e = a,
                                b = a
                            }
                            e || (b = null);
                            d === G.current ? J.current || C() : (G.current = d,
                            I.current = d,
                            J.current = !0,
                            F({
                                type: "STORE_UPDATED",
                                payload: {
                                    latestStoreState: c,
                                    error: e
                                }
                            }))
                        };
                        B.onStateChange = c;
                        B.trySubscribe();
                        c();
                        c = function() {
                            a = !0;
                            B.tryUnsubscribe();
                            B.onStateChange = null;
                            if (b)
                                throw b
                        }
                        ;
                        return c
                    }, [w, B, x]);
                    var L = i.useMemo(function() {
                        return i["default"].createElement(b, c["default"]({}, K, {
                            ref: h
                        }))
                    }, [h, b, K]);
                    e = i.useMemo(function() {
                        return l ? i["default"].createElement(k.Provider, {
                            value: D
                        }, L) : L
                    }, [k, L, D]);
                    return e
                }
                var C = g ? i["default"].memo(B) : B;
                C.WrappedComponent = b;
                C.displayName = o;
                if (w) {
                    g = i["default"].forwardRef(function(a, b) {
                        return i["default"].createElement(C, c["default"]({}, a, {
                            forwardedRef: b
                        }))
                    });
                    g.displayName = o;
                    g.WrappedComponent = b;
                    return e["default"](g, b)
                }
                return e["default"](C, b)
            }
        }
    }
    var L = !1;
    function aa() {
        L || (L = !0,
        K());
        return J.exports
    }
    var M = {}
      , ba = {
        exports: M
    };
    function ca() {
        M.__esModule = !0;
        M["default"] = c;
        var a = Object.prototype.hasOwnProperty;
        function b(a, b) {
            if (a === b)
                return a !== 0 || b !== 0 || 1 / a === 1 / b;
            else
                return a !== a && b !== b
        }
        function c(c, d) {
            if (b(c, d))
                return !0;
            if (typeof c !== "object" || c === null || typeof d !== "object" || d === null)
                return !1;
            var e = Object.keys(c)
              , f = Object.keys(d);
            if (e.length !== f.length)
                return !1;
            for (var f = 0; f < e.length; f++)
                if (!a.call(d, e[f]) || !b(c[e[f]], d[e[f]]))
                    return !1;
            return !0
        }
    }
    var da = !1;
    function ea() {
        da || (da = !0,
        ca());
        return ba.exports
    }
    var N = {}
      , fa = {
        exports: N
    };
    function ga() {
        N.__esModule = !0;
        N["default"] = a;
        function a(a) {
            if (typeof a !== "object" || a === null)
                return !1;
            a = Object.getPrototypeOf(a);
            if (a === null)
                return !0;
            var b = a;
            while (Object.getPrototypeOf(b) !== null)
                b = Object.getPrototypeOf(b);
            return a === b
        }
    }
    var ha = !1;
    function ia() {
        ha || (ha = !0,
        ga());
        return fa.exports
    }
    var O = {}
      , ja = {
        exports: O
    };
    function ka() {
        O.__esModule = !0;
        O["default"] = a;
        function a(a) {
            typeof console !== "undefined" && typeof emptyFunction === "function";
            try {
                throw new Error(a)
            } catch (a) {}
        }
    }
    var la = !1;
    function ma() {
        la || (la = !0,
        ka());
        return ja.exports
    }
    var P = {}
      , na = {
        exports: P
    };
    function oa() {
        var a = g("/helpers/interopRequireDefault");
        P.__esModule = !0;
        P["default"] = d;
        var b = a(ia())
          , c = a(ma());
        function d(a, d, e) {
            b["default"](a) || c["default"](e + "() in " + d + " must return a plain object. Instead received " + a + ".")
        }
    }
    var pa = !1;
    function qa() {
        pa || (pa = !0,
        oa());
        return na.exports
    }
    var Q = {}
      , ra = {
        exports: Q
    };
    function sa() {
        var a = g("/helpers/interopRequireDefault");
        Q.__esModule = !0;
        Q.wrapMapToPropsConstant = b;
        Q.getDependsOnOwnProps = c;
        Q.wrapMapToPropsFunc = d;
        a(qa());
        function b(a) {
            return function(b, c) {
                var d = a(b, c);
                function e() {
                    return d
                }
                e.dependsOnOwnProps = !1;
                return e
            }
        }
        function c(a) {
            return a.dependsOnOwnProps !== null && a.dependsOnOwnProps !== void 0 ? Boolean(a.dependsOnOwnProps) : a.length !== 1
        }
        function d(a, b) {
            return function(b, d) {
                d.displayName;
                var e = function(a, b) {
                    return e.dependsOnOwnProps ? e.mapToProps(a, b) : e.mapToProps(a)
                };
                e.dependsOnOwnProps = !0;
                e.mapToProps = function(b, d) {
                    e.mapToProps = a;
                    e.dependsOnOwnProps = c(a);
                    var f = e(b, d);
                    typeof f === "function" && (e.mapToProps = f,
                    e.dependsOnOwnProps = c(f),
                    f = e(b, d));
                    return f
                }
                ;
                return e
            }
        }
    }
    var ta = !1;
    function ua() {
        ta || (ta = !0,
        sa());
        return ra.exports
    }
    var R = {}
      , va = {
        exports: R
    };
    function wa() {
        R.__esModule = !0;
        R.whenMapDispatchToPropsIsFunction = c;
        R.whenMapDispatchToPropsIsMissing = d;
        R.whenMapDispatchToPropsIsObject = e;
        R["default"] = void 0;
        var a = m()
          , b = ua();
        function c(a) {
            return typeof a === "function" ? b.wrapMapToPropsFunc(a, "mapDispatchToProps") : void 0
        }
        function d(a) {
            return a ? void 0 : b.wrapMapToPropsConstant(function(a) {
                return {
                    dispatch: a
                }
            })
        }
        function e(c) {
            return c && typeof c === "object" ? b.wrapMapToPropsConstant(function(b) {
                return a.bindActionCreators(c, b)
            }) : void 0
        }
        c = [c, d, e];
        R["default"] = c
    }
    var xa = !1;
    function ya() {
        xa || (xa = !0,
        wa());
        return va.exports
    }
    var S = {}
      , za = {
        exports: S
    };
    function Aa() {
        S.__esModule = !0;
        S.whenMapStateToPropsIsFunction = b;
        S.whenMapStateToPropsIsMissing = c;
        S["default"] = void 0;
        var a = ua();
        function b(b) {
            return typeof b === "function" ? a.wrapMapToPropsFunc(b, "mapStateToProps") : void 0
        }
        function c(b) {
            return b ? void 0 : a.wrapMapToPropsConstant(function() {
                return {}
            })
        }
        b = [b, c];
        S["default"] = b
    }
    var Ba = !1;
    function Ca() {
        Ba || (Ba = !0,
        Aa());
        return za.exports
    }
    var T = {}
      , Da = {
        exports: T
    };
    function Ea() {
        var a = g("/helpers/interopRequireDefault");
        T.__esModule = !0;
        T.defaultMergeProps = c;
        T.wrapMergePropsFunc = d;
        T.whenMergePropsIsFunction = e;
        T.whenMergePropsIsOmitted = f;
        T["default"] = void 0;
        var b = a(g("/helpers/extends"));
        a(qa());
        function c(a, c, d) {
            return b["default"]({}, d, {}, a, {}, c)
        }
        function d(a) {
            return function(b, c) {
                c.displayName;
                var d = c.pure, e = c.areMergedPropsEqual, f = !1, g;
                return function(b, c, h) {
                    b = a(b, c, h);
                    f ? (!d || !e(b, g)) && (g = b) : (f = !0,
                    g = b);
                    return g
                }
            }
        }
        function e(a) {
            return typeof a === "function" ? d(a) : void 0
        }
        function f(a) {
            return a ? void 0 : function() {
                return c
            }
        }
        a = [e, f];
        T["default"] = a
    }
    var Fa = !1;
    function Ga() {
        Fa || (Fa = !0,
        Ea());
        return Da.exports
    }
    var Ha = {}
      , Ia = {
        exports: Ha
    };
    function Ja() {
        var a = g("/helpers/interopRequireDefault");
        Ha.__esModule = !0;
        Ha["default"] = d;
        var b = a(ma());
        function c(a, c, d) {
            if (!a)
                throw new Error("Unexpected value for " + c + " in " + d + ".");
            else
                (c === "mapStateToProps" || c === "mapDispatchToProps") && (Object.prototype.hasOwnProperty.call(a, "dependsOnOwnProps") || b["default"]("The selector for " + c + " of " + d + " did not specify a value for dependsOnOwnProps."))
        }
        function d(a, b, d, e) {
            c(a, "mapStateToProps", e),
            c(b, "mapDispatchToProps", e),
            c(d, "mergeProps", e)
        }
    }
    var Ka = !1;
    function La() {
        Ka || (Ka = !0,
        Ja());
        return Ia.exports
    }
    var U = {}
      , Ma = {
        exports: U
    };
    function Na() {
        var a = g("/helpers/interopRequireDefault");
        U.__esModule = !0;
        U.impureFinalPropsSelectorFactory = c;
        U.pureFinalPropsSelectorFactory = d;
        U["default"] = e;
        var b = a(g("/helpers/objectWithoutPropertiesLoose"));
        a(La());
        function c(a, b, c, d) {
            return function(e, f) {
                return c(a(e, f), b(d, f), f)
            }
        }
        function d(a, b, c, d, e) {
            var f = e.areStatesEqual, g = e.areOwnPropsEqual, h = e.areStatePropsEqual, i = !1, j, k, l, m, n;
            function o(e, f) {
                j = e;
                k = f;
                l = a(j, k);
                m = b(d, k);
                n = c(l, m, k);
                i = !0;
                return n
            }
            function p() {
                l = a(j, k);
                b.dependsOnOwnProps && (m = b(d, k));
                n = c(l, m, k);
                return n
            }
            function q() {
                a.dependsOnOwnProps && (l = a(j, k));
                b.dependsOnOwnProps && (m = b(d, k));
                n = c(l, m, k);
                return n
            }
            function r() {
                var b = a(j, k)
                  , d = !h(b, l);
                l = b;
                d && (n = c(l, m, k));
                return n
            }
            function s(a, b) {
                var c = !g(b, k)
                  , d = !f(a, j);
                j = a;
                k = b;
                if (c && d)
                    return p();
                if (c)
                    return q();
                return d ? r() : n
            }
            return function(a, b) {
                return i ? s(a, b) : o(a, b)
            }
        }
        function e(a, e) {
            var f = e.initMapStateToProps
              , g = e.initMapDispatchToProps
              , h = e.initMergeProps;
            e = b["default"](e, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);
            f = f(a, e);
            g = g(a, e);
            h = h(a, e);
            var i = e.pure ? d : c;
            return i(f, g, h, a, e)
        }
    }
    var Oa = !1;
    function Pa() {
        Oa || (Oa = !0,
        Na());
        return Ma.exports
    }
    var V = {}
      , Qa = {
        exports: V
    };
    function Ra() {
        var a = g("/helpers/interopRequireDefault");
        V.__esModule = !0;
        V.createConnect = m;
        V["default"] = void 0;
        var b = a(g("/helpers/extends"))
          , c = a(g("/helpers/objectWithoutPropertiesLoose"))
          , d = a(aa())
          , e = a(ea())
          , f = a(ya())
          , h = a(Ca())
          , i = a(Ga())
          , j = a(Pa());
        function k(a, b, c) {
            for (var d = b.length - 1; d >= 0; d--) {
                var e = b[d](a);
                if (e)
                    return e
            }
            return function(b, d) {
                throw new Error("Invalid value of type " + typeof a + " for " + c + " argument when connecting component " + d.wrappedComponentName + ".")
            }
        }
        function l(a, b) {
            return a === b
        }
        function m(a) {
            a = a === void 0 ? {} : a;
            var g = a.connectHOC
              , m = g === void 0 ? d["default"] : g;
            g = a.mapStateToPropsFactories;
            var n = g === void 0 ? h["default"] : g;
            g = a.mapDispatchToPropsFactories;
            var o = g === void 0 ? f["default"] : g;
            g = a.mergePropsFactories;
            var p = g === void 0 ? i["default"] : g;
            g = a.selectorFactory;
            var q = g === void 0 ? j["default"] : g;
            return function(a, d, f, g) {
                g === void 0 && (g = {});
                g = g;
                var h = g.pure;
                h = h === void 0 ? !0 : h;
                var i = g.areStatesEqual;
                i = i === void 0 ? l : i;
                var j = g.areOwnPropsEqual;
                j = j === void 0 ? e["default"] : j;
                var r = g.areStatePropsEqual;
                r = r === void 0 ? e["default"] : r;
                var s = g.areMergedPropsEqual;
                s = s === void 0 ? e["default"] : s;
                g = c["default"](g, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);
                var t = k(a, n, "mapStateToProps");
                d = k(d, o, "mapDispatchToProps");
                f = k(f, p, "mergeProps");
                return m(q, b["default"]({
                    methodName: "connect",
                    getDisplayName: function(a) {
                        return "Connect(" + a + ")"
                    },
                    shouldHandleStateChanges: Boolean(a),
                    initMapStateToProps: t,
                    initMapDispatchToProps: d,
                    initMergeProps: f,
                    pure: h,
                    areStatesEqual: i,
                    areOwnPropsEqual: j,
                    areStatePropsEqual: r,
                    areMergedPropsEqual: s
                }, g))
            }
        }
        a = m();
        V["default"] = a
    }
    var Sa = !1;
    function Ta() {
        Sa || (Sa = !0,
        Ra());
        return Qa.exports
    }
    var Ua = {}
      , Va = {
        exports: Ua
    };
    function Wa() {
        var a = g("/helpers/interopRequireDefault");
        Ua.__esModule = !0;
        Ua.useReduxContext = e;
        var b = h()
          , c = a(k())
          , d = s();
        function e() {
            var a = b.useContext(d.ReactReduxContext);
            c["default"](a, "could not find react-redux context value; please ensure the component is wrapped in a <Provider>");
            return a
        }
    }
    var Xa = !1;
    function Ya() {
        Xa || (Xa = !0,
        Wa());
        return Va.exports
    }
    var W = {}
      , Za = {
        exports: W
    };
    function $a() {
        W.__esModule = !0;
        W.createStoreHook = d;
        W.useStore = void 0;
        var a = h()
          , b = s()
          , c = Ya();
        function d(d) {
            d === void 0 && (d = b.ReactReduxContext);
            var e = d === b.ReactReduxContext ? c.useReduxContext : function() {
                return a.useContext(d)
            }
            ;
            return function() {
                var a = e();
                a = a.store;
                return a
            }
        }
        d = d();
        W.useStore = d
    }
    var ab = !1;
    function bb() {
        ab || (ab = !0,
        $a());
        return Za.exports
    }
    var X = {}
      , cb = {
        exports: X
    };
    function db() {
        X.__esModule = !0;
        X.createDispatchHook = c;
        X.useDispatch = void 0;
        var a = s()
          , b = bb();
        function c(c) {
            c === void 0 && (c = a.ReactReduxContext);
            var d = c === a.ReactReduxContext ? b.useStore : b.createStoreHook(c);
            return function() {
                var a = d();
                return a.dispatch
            }
        }
        c = c();
        X.useDispatch = c
    }
    var eb = !1;
    function fb() {
        eb || (eb = !0,
        db());
        return cb.exports
    }
    var Y = {}
      , gb = {
        exports: Y
    };
    function hb() {
        var a = g("/helpers/interopRequireDefault");
        Y.__esModule = !0;
        Y.createSelectorHook = m;
        Y.useSelector = void 0;
        var b = h()
          , c = a(k())
          , d = Ya()
          , e = a(C())
          , f = s()
          , i = typeof window !== "undefined" ? b.useLayoutEffect : b.useEffect
          , j = function(a, b) {
            return a === b
        };
        function l(a, c, d, f) {
            var g = b.useReducer(function(a) {
                return a + 1
            }, 0), h = g[1], j = b.useMemo(function() {
                return new e["default"](d,f)
            }, [d, f]), k = b.useRef(), l = b.useRef(), m = b.useRef(), n;
            try {
                a !== l.current || k.current ? n = a(d.getState()) : n = m.current
            } catch (a) {
                g = "An error occured while selecting the store state: " + a.message + ".";
                k.current && (g += "\nThe error may be correlated with this previous error:\n" + k.current.stack + "\n\nOriginal stack trace:");
                throw new Error(g)
            }
            i(function() {
                l.current = a,
                m.current = n,
                k.current = void 0
            });
            i(function() {
                function a() {
                    try {
                        var a = l.current(d.getState());
                        if (c(a, m.current))
                            return;
                        m.current = a
                    } catch (a) {
                        k.current = a
                    }
                    h({})
                }
                j.onStateChange = a;
                j.trySubscribe();
                a();
                return function() {
                    return j.tryUnsubscribe()
                }
            }, [d, j]);
            return n
        }
        function m(a) {
            a === void 0 && (a = f.ReactReduxContext);
            var e = a === f.ReactReduxContext ? d.useReduxContext : function() {
                return b.useContext(a)
            }
            ;
            return function(a, b) {
                b === void 0 && (b = j);
                c["default"](a, "You must pass a selector to useSelectors");
                var d = e()
                  , f = d.store;
                d = d.subscription;
                return l(a, b, f, d)
            }
        }
        a = m();
        Y.useSelector = a
    }
    var ib = !1;
    function jb() {
        ib || (ib = !0,
        hb());
        return gb.exports
    }
    var Z = {}
      , kb = {
        exports: Z
    };
    function lb() {
        Z.__esModule = !0;
        Z.unstable_batchedUpdates = void 0;
        var a = n();
        Z.unstable_batchedUpdates = a.unstable_batchedUpdates
    }
    var mb = !1;
    function nb() {
        mb || (mb = !0,
        lb());
        return kb.exports
    }
    var $ = {}
      , ob = {
        exports: $
    };
    function pb() {
        var a = g("/helpers/interopRequireDefault");
        $.__esModule = !0;
        var b = a(H());
        $.Provider = b["default"];
        b = a(aa());
        $.connectAdvanced = b["default"];
        b = s();
        $.ReactReduxContext = b.ReactReduxContext;
        b = a(Ta());
        $.connect = b["default"];
        b = fb();
        $.useDispatch = b.useDispatch;
        $.createDispatchHook = b.createDispatchHook;
        b = jb();
        $.useSelector = b.useSelector;
        $.createSelectorHook = b.createSelectorHook;
        b = bb();
        $.useStore = b.useStore;
        $.createStoreHook = b.createStoreHook;
        b = x();
        var c = nb();
        $.batch = c.unstable_batchedUpdates;
        a = a(ea());
        $.shallowEqual = a["default"];
        b.setBatch(c.unstable_batchedUpdates)
    }
    var qb = !1;
    function rb() {
        qb || (qb = !0,
        pb());
        return ob.exports
    }
    function c(a) {
        switch (a) {
        case void 0:
            return rb()
        }
    }
    e.exports = c
}
), null);
/**
 * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
 */
__d("tiny-invariant-1.0.6", [], (function(a, b, c, d, e, f) {
    "use strict";
    b = {};
    var g = {
        exports: b
    };
    function h() {
        var a = !0
          , b = "Invariant failed";
        function c(c, d) {
            if (c)
                return;
            if (a)
                throw new Error(b);
            else
                throw new Error(b + ": " + (d || ""))
        }
        g.exports = c
    }
    var i = !1;
    function j() {
        i || (i = !0,
        h());
        return g.exports
    }
    function a(a) {
        switch (a) {
        case void 0:
            return j()
        }
    }
    e.exports = a
}
), null);
/**
 * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
 */
__d("use-memo-one-1.1.1", ["react-0.0.0"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a) {
        return a && typeof a === "object" && "default"in a ? a["default"] : a
    }
    var g = a(b("react-0.0.0"))
      , h = {}
      , i = {
        exports: h
    };
    function j() {
        Object.defineProperty(h, "__esModule", {
            value: !0
        });
        var a = g();
        function b(a, b) {
            if (a.length !== b.length)
                return !1;
            for (var c = 0; c < a.length; c++)
                if (a[c] !== b[c])
                    return !1;
            return !0
        }
        function c(c, d) {
            var e = a.useState(function() {
                return {
                    inputs: d,
                    result: c()
                }
            })[0]
              , f = a.useRef(e);
            e = Boolean(d && f.current.inputs && b(d, f.current.inputs));
            var g = e ? f.current : {
                inputs: d,
                result: c()
            };
            a.useEffect(function() {
                f.current = g
            }, [g]);
            return g.result
        }
        function d(a, b) {
            return c(function() {
                return a
            }, b)
        }
        var e = c
          , f = d;
        h.useCallback = f;
        h.useCallbackOne = d;
        h.useMemo = e;
        h.useMemoOne = c
    }
    var k = !1;
    function l() {
        k || (k = !0,
        j());
        return i.exports
    }
    function c(a) {
        switch (a) {
        case void 0:
            return l()
        }
    }
    e.exports = c
}
), null);
__d("XCommerceProductItemsDialogController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/commerce/products/{item_id}/_dialog/", {
        rid: {
            type: "Int"
        },
        rt: {
            type: "Enum",
            enumType: 0
        },
        location: {
            type: "Enum",
            enumType: 1
        },
        share_id: {
            type: "Int"
        },
        surface: {
            type: "String"
        },
        ref: {
            type: "String"
        },
        referral_story_type: {
            type: "Enum",
            enumType: 1
        },
        referral_code: {
            type: "String"
        },
        marketplace_initial_tracking: {
            type: "String"
        },
        marketplace_referral_story_type: {
            type: "Enum",
            enumType: 1
        },
        marketplace_tracking: {
            type: "String"
        },
        item_id: {
            type: "Int",
            required: !0
        },
        is_sponsored: {
            type: "Int"
        },
        preview_image_id: {
            type: "Int"
        },
        ad_id: {
            type: "String"
        }
    })
}
), null);
