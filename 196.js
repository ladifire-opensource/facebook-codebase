if (self.CavalryLogger) {
    CavalryLogger.start_js(["8ktsF"]);
}

__d("UFICommentActionType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        CHANGE_REACTION: "comment_change_reaction",
        CHANGE_REACTION_FAILURE: "comment_change_reaction_failure",
        CHANGE_REACTION_SUCCESS: "comment_change_reaction_success",
        CHANGE_VISIBILITY: "comment_change_visibility",
        CHANGE_VOTE: "comment_change_vote",
        CHANGE_VOTE_FAILURE: "comment_change_vote_failure",
        CHANGE_VOTE_SUCCESS: "comment_change_vote_success",
        EDIT: "comment_edit",
        EMBED: "embed",
        DELETE_COMMENT_AND_REMOVE_COMMENTER: "comment_delete_and_commenter_remove",
        DELETE_COMMENT_WITH_FEEDBACK: "comment_delete_with_feedback",
        MANAGE_CONSTITUENT_BADGE: "comment_manage_constituent_badge",
        MOUNTED: "comment_mounted",
        MUTE_MEMBER: "commenter_muted",
        REMOVE: "comment_remove",
        REMOVE_AND_BLOCK: "comment_remove_and_block",
        REMOVE_PREVIEW: "comment_remove_preview",
        TOGGLE_INLINE_BAN: "comment_toggle_inline_ban",
        TOGGLE_INLINE_STREAM_BAN: "comment_toggle_inline_stream_ban",
        TOGGLE_INLINE_SUSPENSION: "comment_toggle_inline_suspension",
        TOGGLE_LIKE: "comment_toggle_like",
        TOGGLE_MARK_AS_SPAM: "comment_toggle_mark_as_spam",
        TOGGLE_KEEP_SPAM: "comment_toggle_keep_spam",
        TOGGLE_APPEAL_SPAM: "comment_toggle_appeal_spam",
        TOGGLE_SECURE_ACCOUNT: "comment_toggle_secure_account",
        TOGGLE_TEXT_DELIGHTS: "comment_toggle_text_delights",
        TRANSLATE: "comment_translate",
        TRANSLATE_ARRAY: "comment_translate_array",
        UNMOUNTED: "comment_unmounted",
        UPDATE_VOTE_COUNT_AND_STATE: "comment_update_vote_count_and_state",
        CHANGE_PIN_BY_AUTHOR: "comment_change_author_pin"
    });
    e.exports = a
}
), null);
__d("UFIDispatcherBase", ["invariant", "ReactDispatcher_DEPRECATED", "UFICommentActionType", "dangerouslyBypassDispatchError"], (function(a, b, c, d, e, f, g) {
    "use strict";
    function h(a, b) {
        return Object.values(b).indexOf(a) >= 0
    }
    function i(a, b, c) {
        a[b] || g(0, 2123, a.type, b, c)
    }
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.dispatch = function(c) {
            var d = this;
            i(c, "instanceID", "contextArgs.instanceid");
            i(c, "ftentidentifier", "contextArgs.ftentidentifier");
            h(c.type, b("UFICommentActionType")) && i(c, "fbid", "comment.fbid");
            try {
                a.prototype.dispatch.call(this, c)
            } catch (e) {
                b("dangerouslyBypassDispatchError")(function() {
                    return a.prototype.dispatch.call(d, c)
                })
            }
        }
        ;
        return c
    }(b("ReactDispatcher_DEPRECATED"));
    c = new a();
    e.exports = c
}
), null);
__d("UFIKeyValueStore", ["FluxReduceStore", "abstractMethod"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.getInitialState = function() {
            return {}
        }
        ;
        d.getValueFor = function(a) {
            return this.getState()[a] || null
        }
        ;
        d.getStateKey = function(a) {
            return a.instanceID
        }
        ;
        d.getStateValue = function(a) {
            return b("abstractMethod")("UFIKeyValueStore", "getStateValue")
        }
        ;
        d.reduce = function(a, b) {
            var c = this.getStateKey(b);
            b = this.getStateValue(b);
            if (b !== null) {
                var d;
                return babelHelpers["extends"]({}, a, (d = {},
                d[c] = b,
                d))
            }
            return a
        }
        ;
        return c
    }(b("FluxReduceStore"));
    e.exports = a;
    a.__moduleID = e.id
}
), null);
__d("UFIComposerIsTypingStore", ["UFIDispatcherBase", "UFIKeyValueStore"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        var c = b.prototype;
        c.getStateKey = function(a) {
            return a.ftentidentifier
        }
        ;
        c.getStateValue = function(a) {
            switch (a.type) {
            case "add_comment_submit_edit":
                return !1;
            case "add_comment_submit_new":
                return !1;
            case "add_comment_change_content":
                a = a.text.trim().length;
                return a > 0
            }
            return null
        }
        ;
        return b
    }(b("UFIKeyValueStore"));
    c = new a(b("UFIDispatcherBase"));
    e.exports = c
}
), null);
__d("VideoDuration.react", ["cx", "fbt", "ix", "DurationFormatter", "FlexLayout.react", "Image.react", "React"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = null;
            this.props.isSpherical && (a = j.jsx(b("Image.react"), {
                className: "__lq",
                src: i("501720")
            }));
            if (this.props.isLive)
                return this.props.liveViewerCount ? j.jsxs(b("FlexLayout.react"), {
                    className: "_7p9t",
                    children: [j.jsx(b("FlexLayout.react"), {
                        className: "_7p9w",
                        align: "center",
                        children: h._("TR\u1ef0C TI\u1ebeP")
                    }), j.jsx(b("FlexLayout.react"), {
                        align: "center",
                        className: "_7p9y",
                        children: j.jsx("span", {
                            children: this.props.liveViewerCount
                        })
                    })]
                }) : j.jsxs(b("FlexLayout.react"), {
                    className: "_2pq9",
                    align: "center",
                    children: [a, h._("TR\u1ef0C TI\u1ebeP")]
                });
            return this.props.duration ? j.jsxs(b("FlexLayout.react"), {
                className: "_2pq8",
                align: "center",
                children: [a, j.jsx("span", {
                    children: b("DurationFormatter").formatShort(this.props.duration)
                })]
            }) : null
        }
        ;
        return c
    }(j.Component);
    e.exports = a
}
), null);
__d("TahoeEndScreenProgressCircle.react", ["cx", "React", "ReactDOM", "Style", "clearInterval", "prop-types", "setInterval"], (function(a, b, c, d, e, f, g) {
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.$1 = null,
            c.$2 = 0,
            c.$3 = 0,
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            this.$3 = this.$2,
            this.drawProgressCircle(this.props)
        }
        ;
        d.componentWillUnmount = function() {
            b("clearInterval")(this.$1)
        }
        ;
        d.UNSAFE_componentWillReceiveProps = function(a) {
            (a.makeProgress !== this.props.makeProgress || a.timeoutSec !== this.props.timeoutSec) && this.drawProgressCircle(a)
        }
        ;
        d.drawProgressCircle = function(a) {
            var c = this;
            b("clearInterval")(this.$1);
            var d = b("ReactDOM").findDOMNode(this.refs.progressCircle);
            if (!d)
                return;
            if (a.timeoutSec === 0) {
                b("Style").set(d, "stroke-dashoffset", this.$2 + "px");
                return
            }
            var e = this.$2 / 100;
            b("Style").set(d, "stroke-dashoffset", this.$3 + "px");
            a.makeProgress && (this.$1 = b("setInterval")(function() {
                c.$3 -= e,
                b("Style").set(d, "stroke-dashoffset", c.$3 + "px"),
                c.$3 <= 0 && (b("clearInterval")(c.$1),
                b("Style").set(d, "stroke-dashoffset", "0px"),
                a.onProgressDone && a.onProgressDone())
            }, a.timeoutSec * 10))
        }
        ;
        d.render = function() {
            var a = this.props
              , b = a.circleDiameter
              , c = a.strokeWidth;
            a = a.inlineBlock;
            var d = b / 2
              , e = d - c / 2;
            this.$2 = e * 2 * Math.PI;
            return h.jsxs("div", {
                className: "_3was",
                children: [h.jsxs("svg", {
                    className: "_4bcw" + (a ? " _7cis" : ""),
                    style: {
                        height: b,
                        width: b
                    },
                    children: [h.jsx("circle", {
                        cx: d,
                        cy: d,
                        r: d,
                        fill: this.props.ringColor
                    }), h.jsx("circle", {
                        ref: "progressCircle",
                        cx: d,
                        cy: d,
                        r: e,
                        fill: this.props.circleColor,
                        stroke: this.props.ringProgressColor,
                        strokeWidth: c,
                        strokeDasharray: this.$2
                    })]
                }), this.props.children]
            })
        }
        ;
        return c
    }(h.Component);
    e.exports = a;
    a.propTypes = {
        children: (c = b("prop-types")).element,
        makeProgress: c.bool.isRequired,
        onProgressDone: c.func,
        timeoutSec: c.number.isRequired
    };
    a.defaultProps = {
        circleDiameter: 48,
        circleColor: "transparent",
        inlineBlock: !1,
        ringColor: "rgba(0, 0, 0, 0.3)",
        ringProgressColor: "#ffffff",
        strokeWidth: 4
    }
}
), null);
__d("VideoChainingCaller", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        INTERNAL: "internal",
        WWW_FEED_PIVOTS: "www_feed_pivots",
        WWW_FEED_SNOWLIFT: "www_feed_snowlift",
        MISC_PHOTO_SET: "misc_photo_set",
        MOBILE: "mobile",
        SEARCH: "search",
        WWW_FEED_RHC: "www_feed_rhc",
        WWW_NOTIFICATION: "www_notification",
        WWW_PERMALINK: "www_permalink",
        WWW_PERMALINK_RHC: "www_permalink_rhc",
        WWW_PERMALINK_RHC_FROM_NOTIFICATION: "www_permalink_rhc_from_notification",
        MY_VIDEO_CHANNELS_ENT_QUERY: "my_video_channels_ent_query",
        TOP_FOLLOWED_VIDEO_CHANNELS_ENT_QUERY: "top_followed_video_channels_ent_query",
        BADGE: "badge",
        PAGINATION: "pagination",
        SUBTITLE: "subtitle",
        CHANNEL_VIEW_FROM_UNKNOWN: "channel_view_from_unknown",
        CHANNEL_VIEW_FROM_NEWSFEED: "channel_view_from_newsfeed",
        CHANNEL_VIEW_FROM_EXPLOREFEED: "channel_view_from_explorefeed",
        LIVE_INDEXER_FROM_EXPLOREFEED: "live_indexer_from_explorefeed",
        LIVE_INDEXER_FROM_NEWSFEED: "live_indexer_from_newsfeed",
        NN_INDEXER_FROM_NEWSFEED: "nn_indexer_from_newsfeed",
        CHANNEL_VIEW_FROM_SEARCH: "channel_view_from_search",
        CHANNEL_VIEW_FROM_NEWSFEED_PIVOT: "channel_view_from_newsfeed_pivot",
        NEWSFEED_PIVOT_INLINE: "newsfeed_pivot_inline",
        MOBILE_NEWSFEED_PIVOT_INLINE: "mobile_newsfeed_pivot_inline",
        CHANNEL_VIEW_FROM_PAGE_CALL_TO_ACTION: "channel_view_from_page_call_to_action",
        CHANNEL_VIEW_FROM_PAGE_TIMELINE: "channel_view_from_page_timeline",
        CHANNEL_VIEW_FROM_PAGE_TIMELINE_FEATURED: "channel_view_from_page_timeline_featured",
        CHANNEL_VIEW_FROM_PAGE_VIDEO_TAB: "channel_view_from_page_video_tab",
        CHANNEL_VIEW_FROM_PAGE_HOME_HERO: "channel_view_from_page_home_hero",
        CHANNEL_VIEW_FROM_USER_TIMELINE: "channel_view_from_user_timeline",
        CHANNEL_VIEW_FROM_USER_VIDEO_TAB: "channel_view_from_user_video_tab",
        CHANNEL_VIEW_FROM_GROUP_TIMELINE: "channel_view_from_group_timeline",
        CHANNEL_VIEW_FROM_GROUP_VIDEO_TAB: "channel_view_from_group_video_tab",
        CHANNEL_VIEW_FROM_VIDEO_PAGE_SPOTLIGHT: "channel_view_from_video_page_spotlight",
        CHANNEL_VIEW_FROM_VIDEO_PAGE_VIDEO_LIST: "channel_view_from_video_page_video_list",
        CHANNEL_VIEW_FROM_VIDEO_PAGE_VIDEO_TAB: "channel_view_from_video_page_video_tab",
        CHANNEL_VIEW_FROM_CHANNEL_TAB: "channel_view_from_channel_tab",
        CHANNEL_VIEW_FROM_PMV_UNIT: "channel_view_from_pmv_unit",
        CHANNEL_VIEW_FROM_SAVED_STORY: "channel_view_from_saved_story",
        SAVED_STORY_INLINE: "saved_story_inline",
        CHANNEL_VIEW_FROM_SHARED_WITH_YOU_STORY: "channel_view_from_shared_with_you_story",
        SHARED_WITH_YOU_STORY_INLINE: "shared_with_you_story_inline",
        CHANNEL_VIEW_FROM_LATEST_FROM_YOUR_CHANNELS_STORY: "channel_view_from_latest_from_your_channels_story",
        LATEST_FROM_YOUR_CHANNELS_STORY_INLINE: "latest_from_your_channels_story_inline",
        CHANNEL_VIEW_FROM_CHANNEL_PIVOT: "channel_view_from_channel_pivot",
        CHANNEL_PIVOT_INLINE: "channel_pivot_inine",
        CHANNEL_VIEW_FROM_CHANNEL_RECOMMENDED_CHANNEL_STORY: "channel_view_from_recommended_channel_story",
        RECOMMENDED_CHANNEL_STORY_INLINE: "recommended_channel_story_inline",
        CHANNEL_VIEW_FROM_VIDEO_HOME: "channel_view_from_video_home",
        VIDEO_HOME_INLINE: "video_home_inline",
        VIDEO_HOME_CHANNEL_SEE_ALL: "video_home_channel_see_all",
        SOCIAL_PLAYER_UP_NEXT: "social_player_up_next",
        CHANNEL_VIEW_FROM_CASTING: "channel_view_from_casting",
        CHANNEL_VIEW_FROM_TV_CANDY_SHELF: "channel_view_from_tv_candy_shelf",
        CHANNEL_VIEW_FROM_END_CARD: "channel_view_from_end_card",
        CONNECTED_TV: "connected_tv",
        CONNECTED_TV_DISCOVERY: "connected_tv_discovery",
        CONNECTED_TV_PLAYER: "connected_tv_player",
        CONNECTED_TV_PROFILE: "connected_tv_profile",
        VIDEO_HOME_FEED: "video_home_feed",
        VIDEO_HOME_HERO: "video_home_hero",
        FEED_SURVEY_SWIPE: "feed_survey_swipe",
        FEED_PIVOTS_INLINE: "feed_pivots_inline",
        CHANNEL_VIEW_FROM_FEED_PIVOTS: "channel_view_from_feed_pivots",
        VIDEO_SETS_CACHE_REFRESH: "video_sets_cache_refresh",
        VIDEO_SETS_CACHE_CHECK: "video_sets_cache_check",
        DUMMY_STORY_RECOMMENDED_VIDEOS: "dummy_story_recommended_videos",
        DUMMY_STORY_FRIENDS_ENJOYING: "dummy_story_friends_enjoying",
        LIVE_EVENT_VIDEO_SET: "live_event_video_set",
        LIVE_VIDEOS_SET: "live_videos_set",
        SINGLE_CREATOR_VIDEO_SET: "single_creator_video_set",
        FRT_TOOL: "frt_tool",
        DUMMY_STORY_FRIENDS_ENJOYING_NOW: "dummy_story_friends_enjoying_now",
        DUMMY_STORY_DUMMY_ACTION: "dummy_story_dummy_action",
        OCULUS_VIDEO: "oculus_video",
        TRENDING_DEMOGRAPHICS_LIVE: "trending_demographics_live",
        LIVE_MAP: "live_map",
        UNCONNECTED_LIVE_VIDEO: "unconnected_live_video",
        PROFILE_VIDEO_GALLERY: "profile_video_gallery",
        CHANNEL_VIEW_FROM_PLAYLIST: "channel_view_from_playlist",
        OCULUS_SOCIAL_HUB: "oculus_social_hub",
        AKIRA: "akira",
        IS_LIVE_VIDEO_CHAINING: "is_live_video_chaining",
        IS_LIVE_VIDEO_CHAINING_OTHERS: "is_live_video_chaining_others",
        VIDEO_CREATOR_CHAINING: "video_creator_chaining",
        TAHOE: "tahoe",
        LIVING_ROOM: "living_room",
        SHOWS_COVER_TRAILER: "shows_cover_trailer",
        SHOWS_EPISODES_TAB: "shows_episodes_tab",
        SHOWS_PLAYLISTS_TAB: "shows_playlists_tab",
        SHOWS_HOME_TAB: "shows_home_tab",
        SHOWS_MORE_VIDEOS_TAB: "shows_more_videos_tab",
        SHOW_EPISODE_FEED_RECOMMENDATIONS: "show_episode_feed_recommendations",
        PARENT_PAGE_TIMELINE: "parent_page_timeline",
        WATCH_WATCHLIST_TAB: "watch_watchlist_tab",
        WATCH_FEED_TAB: "watch_feed_tab",
        WATCH_INJECTION: "watch_injection",
        WATCH_TOPIC_FEED: "watch_topic_feed",
        WATCH_TOPIC_CHANNEL_FEED: "watch_topic_channel_feed",
        WATCH_SUBTOPIC_CHANNEL_FEED: "watch_subtopic_channel_feed",
        WATCH_SUBTOPIC_AGGREGATION: "watch_subtopic_aggregation",
        WATCH_SUBTOPIC_LIVE_FEED: "watch_subtopic_live_feed",
        LIVE_CATEGORY_QUERY: "live_category_query",
        WATCH_SECTION_SEE_ALL: "watch_section_see_all",
        SOCIAL_PLAYER_FROM_VIDEO_HOME: "social_player_from_video_home",
        WATCH_CUSTOM_ADS: "watch_custom_ads",
        WATCH_EMBEDDED_ENDSCREEN: "watch_embedded_endscreen",
        WNS: "wns",
        EXPLORE_FEED_DEEP_DIVE: "explore_feed_deep_dive",
        VOYAGER: "voyager",
        GAMES_VIDEO_CHANNEL: "games_video_channel",
        GAMES_TAB_CHAINING_CHANNEL: "games_tab_chaining_channel",
        GAMES_TAB_PATHING_ONLY_LIVE: "games_tab_pathing_only_live",
        GAMES_COMET_CHAINING: "games_comet_chaining",
        LOL_VIDEO_FEED: "lol_video_feed",
        AVD_VIDEO: "avd",
        LIVE_CHAINING: "live_chaining",
        LIVE_TAB: "live_tab",
        LIVING_ROOM_CHAINING: "living_room_chaining",
        FBLITE_TRENDING_VIDEO: "fblite_trending_video",
        PORTAL: "portal",
        LASSO: "lasso",
        WATCH_SOCIAL: "watch_social",
        MESSENGER: "messenger",
        CHAINING_GAMING_PROMOTION: "chaining_gaming_promotion",
        CHAINING_GAMING_ONLY: "chaining_gaming_only",
        CRICKET_VIDEOS: "cricket_videos",
        PREMIUM_MUSIC_VIDEO: "premium_music_video",
        MUSIC_CHANNEL_VIEW_FROM_MUSIC_HOME: "music_channel_view_from_music_home",
        MUSIC_CHANNEL_VIEW_FROM_VIDEO_HOME: "music_channel_view_from_video_home",
        MUSIC_CHANNEL_VIEW_FROM_NEWSFEED: "music_channel_view_from_newsfeed",
        MUSIC_CHANNEL_VIEW_FROM_SEARCH: "music_channel_view_from_search",
        MUSIC_CHANNEL_VIEW_FROM_PAGE: "music_channel_view_from_page",
        CHANNEL_VIEW_FROM_VIDEO_PAGE_PMV_MUSIC_FEATURING_ARTIST_LIST: "channel_view_from_video_page_pmv_music_featuring_artist_list",
        WATCH_LAIDBACK_CONSUMPTION: "watch_laidback_consumption",
        WATCH_NF_LAIDBACK_CONSUMPTION: "watch_nf_laidback_consumption",
        CHANNEL_VIEW_FROM_NEWSFEED_RELATED: "channel_view_from_newsfeed_related",
        CHANNEL_VIEW_FROM_VIDEO_HOME_RELATED: "channel_view_from_video_home_related",
        FEED_SHORT_VIDEO: "feed_short_video",
        PHOTO_CHAINING: "photo_chaining",
        YOUTUBE_SHARE: "youtube_share",
        WATCH_RAINBOW_QP: "watch_rainbow_qp",
        PLAZA_WATCH_RICH_BOOKMARK_TILE: "plaza_watch_rich_bookmark_tile",
        INTEREST_DESTINATION: "interest_destination",
        CO_WATCH: "co_watch",
        LIVE_NOW: "live_now",
        LIVE_TAB_PREFETCH: "live_tab_prefetch",
        LIVE_LOGOUT_USER: "live_logout_user",
        FB_LITE: "fb_lite",
        LIVE_DESTINATION_WWW: "live_destination_www",
        TEST: "test",
        UNKNOWN: "unknown"
    });
    e.exports = a
}
), null);
