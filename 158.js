if (self.CavalryLogger) {
    CavalryLogger.start_js(["bGHL8"]);
}

__d("AppCustomEventType", [], (function(a, b, c, d, e, f) {
    e.exports = {
        FB_MOBILE_ACTIVATE_APP: "fb_mobile_activate_app",
        FB_MOBILE_COMPLETE_REGISTRATION: "fb_mobile_complete_registration",
        FB_MOBILE_CONTACT: "Contact",
        FB_MOBILE_CONTENT_VIEW: "fb_mobile_content_view",
        FB_MOBILE_CUSTOMIZE_PRODUCT: "CustomizeProduct",
        FB_MOBILE_DONATE: "Donate",
        FB_MOBILE_FIND_LOCATION: "FindLocation",
        FB_MOBILE_RATE: "fb_mobile_rate",
        FB_MOBILE_SCHEDULE: "Schedule",
        FB_MOBILE_SEARCH: "fb_mobile_search",
        FB_MOBILE_START_TRIAL: "StartTrial",
        FB_MOBILE_SUBMIT_APPLICATION: "SubmitApplication",
        FB_MOBILE_SUBSCRIBE: "Subscribe",
        FB_MOBILE_TUTORIAL_COMPLETION: "fb_mobile_tutorial_completion",
        FB_MOBILE_AD_CLICK: "AdClick",
        FB_MOBILE_AD_IMPRESSION: "AdImpression",
        FB_MOBILE_ADD_TO_CART: "fb_mobile_add_to_cart",
        FB_MOBILE_ADD_TO_WISHLIST: "fb_mobile_add_to_wishlist",
        FB_MOBILE_INITIATED_CHECKOUT: "fb_mobile_initiated_checkout",
        FB_MOBILE_ADD_PAYMENT_INFO: "fb_mobile_add_payment_info",
        FB_MOBILE_PURCHASE: "fb_mobile_purchase",
        FB_MOBILE_LEVEL_ACHIEVED: "fb_mobile_level_achieved",
        FB_MOBILE_ACHIEVEMENT_UNLOCKED: "fb_mobile_achievement_unlocked",
        FB_MOBILE_SPENT_CREDITS: "fb_mobile_spent_credits",
        FB_DIRECT_INSTALL_SUCCESS: "fb_direct_install_success",
        APPMANAGER_CRASH_REPORT: "appmanager_crash_report",
        FB_MOBILE_D2_RETENTION: "fb_mobile_d2_retention",
        FB_MOBILE_D7_RETENTION: "fb_mobile_d7_retention",
        FB_PAGE_VIEW: "fb_page_view",
        FB_WEB_NEW_USER: "fb_web_new_user",
        FB_OTHER: "fb_other",
        FB_MESSENGER_BOT_NEW_USER: "fb_messenger_bot_new_user",
        FB_MESSENGER_BOT_MESSAGE_SENT: "fb_messenger_bot_message_sent",
        FB_MESSENGER_BOT_MESSAGE_RECEIVED: "fb_messenger_bot_message_received",
        FB_MESSENGER_BOT_THREAD_DELETED: "fb_messenger_bot_thread_deleted",
        FB_MESSENGER_BOT_STOPPED: "fb_messenger_bot_stopped",
        FB_MESSENGER_BOT_STARTED: "fb_messenger_bot_started",
        FB_MESSENGER_BOT_POSTBACK_CALLED: "fb_messenger_bot_postback_called",
        FB_INSTANT_EXPERIENCES_LAUNCH: "fb_instant_experiences_launch",
        FB_INSTANT_EXPERIENCES_NEW_USER: "fb_instant_experiences_new_user",
        FB_INSTANT_ARTICLES_CTA_SIGN_UP: "fb_instant_articles_cta_sign_up",
        FB_INSTANT_ARTICLES_CTA_IMPRESSION: "fb_instant_articles_cta_impression",
        FB_INSTANT_ARTICLES_NEW_USER: "fb_instant_articles_new_user",
        FB_INSTANT_ARTICLES_CLICK: "fb_instant_articles_click",
        FB_INSTANT_ARTICLES_PAYWALL_VIEW: "fb_instant_articles_paywall_view",
        FB_INSTANT_ARTICLES_OFFER_CLICK: "fb_instant_articles_offer_click",
        FB_INSTANT_GAMES_NEW_USER: "fb_instant_games_new_user",
        FB_INSTANT_GAMES_LAUNCH: "fb_instant_games_launch",
        FB_INSTANT_GAMES_UPDATE_SENT: "fb_instant_games_update_sent",
        FB_INSTANT_GAMES_UPDATE_CLICK: "fb_instant_games_update_click",
        FB_INSTANT_GAMES_BOT_MESSAGE_SEND: "fb_instant_games_bot_message_sent",
        FB_INSTANT_GAMES_BOT_MESSAGE_CLICK: "fb_instant_games_bot_message_click",
        FB_INSTANT_GAMES_SESSION_PLAY: "fb_instant_games_session_play",
        FB_INSTANT_GAMES_PLATFORM_EVENT: "fb_instant_games_platform_event",
        FB_INSTANT_GAMES_D7_PLAY: "fb_instant_games_d7_play",
        FB_GAME_APP_SHARE_EVENT: "fb_game_app_share_event",
        FB_GAME_APP_SHARE_SUCCESS_EVENT: "fb_game_app_share_success_event",
        FB_GAME_APP_SEND_FRIEND_INVITE_EVENT: "fb_game_app_send_friend_invite_event",
        FB_GAME_APP_POST_REACT_EVENT: "fb_game_app_post_react_event",
        FB_OFFLINE_PURCHASE: "fb_offline_purchase",
        FB_OFFLINE_NEW_USER: "fb_offline_new_user",
        FB_OFFLINE_LEAD: "fb_offline_lead",
        FB_PAGES_NEW_USER: "fb_pages_new_user",
        FB_PAGES_PAGE_CHECKIN: "fb_pages_page_checkin",
        FB_PAGES_PAGE_FOLLOW: "fb_pages_page_follow",
        FB_PAGES_PAGE_LIKE: "fb_pages_page_like",
        FB_PAGES_PAGE_UNFOLLOW: "fb_pages_page_unfollow",
        FB_PAGES_PAGE_UNLIKE: "fb_pages_page_unlike",
        FB_PAGES_PAGE_VIEW: "fb_pages_page_view",
        FB_PAGES_POST_ANSWER: "fb_pages_post_answer",
        FB_PAGES_POST_CLICK: "fb_pages_post_click",
        FB_PAGES_POST_COMMENT: "fb_pages_post_comment",
        FB_PAGES_POST_IMPRESSION: "fb_pages_post_impression",
        FB_PAGES_POST_PHOTO_VIEW_CLICK: "fb_pages_post_photo_view_click",
        FB_PAGES_POST_REACTION: "fb_pages_post_reaction",
        FB_PAGES_POST_RSVP: "fb_pages_post_rsvp",
        FB_PAGES_POST_SHARE: "fb_pages_post_share",
        FB_PAGES_POST_VIDEO_PLAY_CLICK: "fb_pages_post_video_play_click",
        FB_PAGES_VIDEO_VIEW: "fb_pages_video_view",
        FB_IG_ADS_POST_REACTION: "fb_ig_ads_post_reaction",
        FB_IG_ADS_POST_COMMENT: "fb_ig_ads_post_comment",
        FB_IG_ADS_POST_SAVE: "fb_ig_ads_post_save",
        FB_IG_NEW_USER: "fb_ig_new_user",
        FB_IG_POST_COMMENT: "fb_ig_post_comment",
        FB_IG_POST_IMPRESSION: "fb_ig_post_impression",
        FB_IG_POST_REACTION: "fb_ig_post_reaction",
        FB_IG_POST_SHARE: "fb_ig_post_share",
        FB_IG_POST_SAVE: "fb_ig_post_save",
        FB_IG_PROFILE_FOLLOW: "fb_ig_profile_follow",
        FB_IG_PROFILE_UNFOLLOW: "fb_ig_profile_unfollow",
        FB_IG_PROFILE_VIEW: "fb_ig_profile_view",
        FB_IG_SHOPPING_OUTBOUND_CLICK: "fb_ig_shopping_outbound_click",
        FB_IG_SHOPPING_PRODUCT_CLICK: "fb_ig_shopping_product_click",
        FB_IG_STORY_COMMENT: "fb_ig_story_comment",
        FB_IG_STORY_IMPRESSION: "fb_ig_story_impression",
        FB_IG_STORY_NAVIGATION: "fb_ig_story_navigation",
        FB_IG_STORY_PRESENT_BROWSER: "fb_ig_story_present_browser",
        FB_IG_STORY_REACTION: "fb_ig_story_reaction",
        FB_IG_STORY_SEND_MESSAGE: "fb_ig_story_send_message",
        FB_IG_VIDEO_VIEW: "fb_ig_video_view",
        FB_PAGES_MESSAGING_THREAD_READ: "fb_pages_messaging_thread_read",
        FB_PAGES_MESSAGING_MESSAGE_RECEIVED: "fb_pages_messaging_message_received",
        FB_PAGES_MESSAGING_MESSAGE_SENT: "fb_pages_messaging_message_sent",
        FB_PAGES_MESSAGING_BLOCK: "fb_pages_messaging_block",
        FB_PAGES_MESSAGING_DELETE_THREAD: "fb_pages_messaging_delete_thread",
        FB_PAGES_MESSAGING_MARK_SPAM: "fb_pages_messaging_mark_spam",
        FB_PAGES_MESSAGING_LABEL_ADDED: "fb_pages_messaging_label_added",
        FB_PAGES_MESSAGING_LABEL_REMOVED: "fb_pages_messaging_label_removed",
        FB_PAGES_MESSAGING_NEW_CONVERSATION: "fb_pages_messaging_new_conversation",
        FB_CAMERA_EFFECT_OPENED: "fb_camera_effect_opened",
        FB_CAMERA_EFFECT_SHARED: "fb_camera_effect_shared",
        FB_CAMERA_EFFECT_SHARE_IMPRESSION: "fb_camera_effect_share_impression",
        FB_CAMERA_EFFECT_TIME_SPENT: "fb_camera_effect_time_spent",
        FB_CAMERA_EFFECT_POST_IMPRESSION: "fb_camera_effect_post_impression",
        FB_CAMERA_EFFECT_CAMERA_CAPTURE: "fb_camera_effect_camera_capture",
        FB_VIDEO_ASSET_VIDEO_VIEW: "fb_video_asset_video_view",
        FB_VIDEO_ASSET_IMPRESSION: "fb_video_asset_impression",
        FB_VIDEO_ASSET_REACTION: "fb_video_asset_reaction",
        FB_VIDEO_ASSET_COMMENT: "fb_video_asset_comment",
        FB_VIDEO_ASSET_SHARE: "fb_video_asset_share",
        FB_VIDEO_POST_VIDEO_VIEW: "fb_video_post_video_view",
        FB_VIDEO_POST_IMPRESSION: "fb_video_post_impression",
        FB_VIDEO_POST_REACTION: "fb_video_post_reaction",
        FB_VIDEO_POST_COMMENT: "fb_video_post_comment",
        FB_VIDEO_POST_SHARE: "fb_video_post_share",
        FB_JOURNEY_4_HOUR: "fb_journey_4_hour",
        FB_JOURNEY_1_DAY: "fb_journey_1_day",
        FB_JOURNEY_3_DAY: "fb_journey_3_day",
        FB_JOURNEY_7_DAY: "fb_journey_7_day",
        FB_JOURNEY_14_DAY: "fb_journey_14_day",
        FB_JOURNEY_28_DAY: "fb_journey_28_day",
        FB_MOBILE_NEW_USER_EVENT: "fb_new_user_event",
        FB_MOBILE_INSTALL: "fb_mobile_first_app_launch",
        FB_MOBILE_DEACTIVATE_APP: "fb_mobile_deactivate_app",
        FB_BASE_EVENT: "fb_base_event",
        FB_NEW_USER: "fb_new_user",
        FB_USER_REACH: "fb_user_reach",
        FB_NEW_USER_REACH: "fb_new_user_reach",
        FB_PURCHASE: "fb_purchase",
        FB_PAGE_MESSAGING_ACTIVE_CONVERSATION: "fb_pages_messaging_active_conversation",
        FB_IMPRESSION: "fb_impression",
        FB_REACTION: "fb_reaction",
        FB_SHARE: "fb_share",
        FB_COMMENT: "fb_comment",
        FB_FOLLOW: "fb_follow",
        FB_UNFOLLOW: "fb_unfollow",
        FB_ENGAGEMENT: "fb_engagement",
        FB_PAYWALL_IMPRESSION: "fb_paywall_impression",
        FB_OFFER_CLICK: "fb_offer_click"
    }
}
), null);
__d("GeoScrollableArea.react", ["BaseScrollableArea.react", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a, c) {
        var d = a.isHorizontal;
        d = d === void 0 ? !0 : d;
        var e = a.id
          , f = a.isVertical;
        f = f === void 0 ? !0 : f;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["isHorizontal", "id", "isVertical"]);
        return g.jsx(b("BaseScrollableArea.react"), babelHelpers["extends"]({
            horizontal: d,
            id: e,
            vertical: f
        }, a, {
            ref: c,
            testid: void 0
        }))
    }
    c = g.forwardRef(a);
    e.exports = c
}
), null);
__d("P2PAmountUtils", [], (function(a, b, c, d, e, f) {
    f.isAmountOverLegalLimit = a;
    f.isAmountZero = b;
    f.isValidSendAmount = c;
    f.sanitizeAmount = d;
    var g = 1e4;
    function a(a) {
        return parseFloat(this.sanitizeAmount(a)) >= g
    }
    function b(a) {
        return parseFloat(this.sanitizeAmount(a)) === 0
    }
    function c(a) {
        return !this.isAmountOverLegalLimit(a) && !this.isAmountZero(a)
    }
    function d(a) {
        return a.replace(/[^0-9\.]+/g, "")
    }
}
), null);
__d("P2PButton.react", ["MessengerDialogButton.react", "MessengerEnvironment", "React", "XUIButton.react"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = b("MessengerEnvironment").messengerui
              , c = a ? b("MessengerDialogButton.react") : b("XUIButton.react")
              , d = this.props.type;
            d || (d = this.props.use === "confirm" ? "primary" : "secondary");
            a = a ? "default" : this.props.use;
            d = babelHelpers["extends"]({}, this.props, {
                type: d,
                use: a
            });
            return g.jsx(c, babelHelpers["extends"]({}, d, {
                children: this.props.children
            }))
        }
        ;
        return c
    }(g.Component);
    e.exports = a
}
), null);
__d("P2PDialog.react", ["LayerFadeOnHide", "MessengerDialog.react", "MessengerEnvironment", "React", "XUIDialog.react", "createReactClass_DEPRECATED", "emptyFunction", "prop-types"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    c = b("createReactClass_DEPRECATED")({
        displayName: "P2PDialog",
        propTypes: {
            onToggle: (a = b("prop-types")).func,
            shown: a.bool,
            width: a.number,
            useDefaultStyling: a.bool
        },
        getDefaultProps: function() {
            return {
                onToggle: b("emptyFunction"),
                repositionOnUpdate: !1,
                shown: !0,
                width: 400
            }
        },
        componentDidUpdate: function() {
            this.props.repositionOnUpdate && setTimeout(function() {
                this.isMounted() && this.refs.dialog && this.refs.dialog.layer && this.refs.dialog.layer.updatePosition()
            }
            .bind(this), 0)
        },
        render: function() {
            var a = b("MessengerEnvironment").messengerui;
            a = a ? b("MessengerDialog.react") : b("XUIDialog.react");
            return g.jsx(a, babelHelpers["extends"]({
                behaviors: {
                    LayerFadeOnHide: b("LayerFadeOnHide")
                }
            }, this.props, {
                hideOnEscape: !0,
                layerHideOnBlur: !0,
                ref: "dialog",
                children: this.props.children
            }))
        }
    });
    d = c;
    e.exports = d
}
), null);
__d("P2PDialogBody.react", ["MessengerDialogBody.react", "MessengerEnvironment", "React", "XUIDialogBody.react"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = b("MessengerEnvironment").messengerui;
            a = a ? b("MessengerDialogBody.react") : b("XUIDialogBody.react");
            return g.jsx(a, babelHelpers["extends"]({}, this.props, {
                children: this.props.children
            }))
        }
        ;
        return c
    }(g.Component);
    e.exports = a
}
), null);
__d("P2PDialogFooter.react", ["cx", "MessengerDialogFooter.react", "MessengerEnvironment", "React", "XUIDialogFooter.react", "joinClasses"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = b("MessengerEnvironment").messengerui, c = a ? b("MessengerDialogFooter.react") : b("XUIDialogFooter.react"), d, e = this.props.children;
            a && (d = h.Children.count(this.props.children),
            e = h.Children.map(this.props.children, function(a, c) {
                return !a ? null : h.cloneElement(a, {
                    className: b("joinClasses")(a.props.className, "_4ec0"),
                    type: c === 0 && d === 2 ? "secondary" : "primary"
                })
            }));
            return h.jsx(c, babelHelpers["extends"]({}, this.props, {
                children: e
            }))
        }
        ;
        return c
    }(h.Component);
    e.exports = a
}
), null);
__d("P2PDialogTitle.react", ["MessengerDialogHeaderReact.re", "MessengerEnvironment", "React", "XUIDialogTitle.react"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = b("MessengerEnvironment").messengerui;
            a = a ? b("MessengerDialogHeaderReact.re").make : b("XUIDialogTitle.react");
            return g.jsx(a, babelHelpers["extends"]({}, this.props, {
                children: this.props.children
            }))
        }
        ;
        return c
    }(g.Component);
    e.exports = a
}
), null);
__d("P2PText.react", ["React", "XUIGrayText.react", "prop-types"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props.type;
            a = babelHelpers["extends"]({}, this.props, {
                display: this.props.display || "block",
                shade: a === "primary" ? "dark" : "light",
                size: this.props.size || "small"
            });
            delete a.type;
            return g.jsx(b("XUIGrayText.react"), babelHelpers["extends"]({}, a, {
                children: this.props.children
            }))
        }
        ;
        return c
    }(g.Component);
    e.exports = a;
    a.propTypes = {
        type: b("prop-types").oneOf(["primary", "secondary"]).isRequired
    }
}
), null);
__d("moment", ["moment.instagram"], (function(a, b, c, d, e, f) {
    var g = b("moment.instagram");
    e.exports = g;
    e.exports.patch = function() {
        return g
    }
}
), null);
__d("WitHelpersShared", ["WitUnderscore"], (function(a, b, c, d, e, f) {
    e.exports = {
        str: function(a) {
            return a || ""
        },
        debounce: b("WitUnderscore").debounce
    }
}
), null);
__d("dataUriToBlob", [], (function(a, b, c, d, e, f) {
    e.exports = a;
    function a(a) {
        var b = a.split(",")[0].indexOf("base64") >= 0
          , c = a.split(",")[0].split(":")[1].split(";")[0];
        a = b ? atob(a.split(",")[1]) : decodeURIComponent(a.split(",")[1]);
        if (b) {
            b = new Uint8Array(a.length);
            for (var d = 0; d < a.length; d++)
                b[d] = a.charCodeAt(d);
            d = [b]
        } else
            d = [a];
        return new Blob(d,{
            type: c
        })
    }
}
), null);
__d("LeafletPath", ["areEqual", "partitionObjectByKey"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = function() {
        var a = new Set(["color", "dashArray", "fill", "fillColor", "fillOpacity", "lineCap", "lineJoin", "opacity", "stroke", "weight"]);
        return function(c) {
            return b("partitionObjectByKey")(c, a)
        }
    }();
    a = {
        mutateOptions: function(a, c, d) {
            c = h(c || {});
            var e = c[0];
            c = c[1];
            d = h(d || {});
            var f = d[0];
            d = d[1];
            if (!(g || (g = b("areEqual")))(c, d))
                return !1;
            (g || (g = b("areEqual")))(e, f) || a.setStyle(e);
            return !0
        }
    };
    e.exports = a
}
), null);
__d("LeafletPopup.react", ["GeoCoordinates", "LeafletUtils", "React", "ReactDOM", "areEqual", "leaflet", "prop-types"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        c.mutate = function(a, c, d) {
            if (!(g || (g = b("areEqual")))(c.options, d.options))
                return !1;
            c.coordinates !== d.coordinates && a.setLatLng(b("LeafletUtils").toLatLng(c.coordinates));
            d = a.getContent();
            c = h.Children.only(c.children);
            b("ReactDOM").render(c, d, function() {
                return a.update()
            });
            return !0
        }
        ;
        c.toLayer = function(a, c) {
            var d = b("leaflet").popup(a.options, c);
            a.coordinates && d.setLatLng(b("LeafletUtils").toLatLng(a.coordinates));
            c = h.Children.only(a.children);
            a = document.createElement("div");
            d.setContent(a);
            b("ReactDOM").render(c, a, function() {
                return d.update()
            });
            return d
        }
        ;
        var d = c.prototype;
        d.render = function() {
            return null
        }
        ;
        return c
    }(h.Component);
    a.propTypes = {
        options: b("prop-types").object,
        coordinates: b("prop-types").instanceOf(b("GeoCoordinates"))
    };
    e.exports = a
}
), null);
__d("Tween", ["cancelAnimationFrame", "emptyFunction", "requestAnimationFrame"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = null,
            this.$2 = null,
            this.$3 = 0,
            this.$4 = Date.now(),
            this.$5 = 0,
            this.$6 = b("emptyFunction"),
            this.$7 = Math.min
        }
        var c = a.prototype;
        c.start = function(a, c, d) {
            var e = this;
            this.$6 = a;
            this.$5 = c;
            this.$7 = d || Math.min;
            this.$3 = 0;
            this.$4 = Date.now();
            a = function a() {
                if (!e.$2) {
                    e.$4 = Date.now() - e.$3;
                    e.$1 = b("requestAnimationFrame")(a);
                    return
                }
                e.$3 = Date.now() - e.$4;
                e.$3 < e.$5 && (e.$1 = b("requestAnimationFrame")(a),
                e.$6(e.$7(e.$3 / e.$5), !1))
            }
            ;
            this.$1 = b("requestAnimationFrame")(a);
            this.$2 = setTimeout(function() {
                e.$6(e.$7(1), !0)
            }, this.$5)
        }
        ;
        c.stop = function() {
            b("cancelAnimationFrame")(this.$1),
            clearTimeout(this.$2),
            this.$1 = null,
            this.$2 = null
        }
        ;
        c.pause = function() {
            this.$2 && (clearTimeout(this.$2),
            this.$2 = null)
        }
        ;
        c.resume = function() {
            var a = this;
            this.$2 || (this.$2 = setTimeout(function() {
                a.$6(a.$7(1), !0)
            }, this.$5 - this.$3))
        }
        ;
        a.scale = function(a, b, c) {
            return (b - a) * c + a
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
