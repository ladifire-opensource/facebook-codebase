if (self.CavalryLogger) {
    CavalryLogger.start_js(["RSZwU"]);
}

__d("GeoPrivateIcon.react", ["CancelablePromise", "GeoPrivateIconUtils", "GeoPrivateMakeComponent", "GeoPrivateWebCSSTintedIcon.react", "Image.react", "React", "isTruthy", "stylex", "useGeoIconStyle", "useLayoutEffect_SAFE_FOR_SSR", "useUniqueID"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React"), i = {
        root: {
            display: "if5qj5rh"
        },
        svgMask: {
            fill: "s8tfe65r"
        },
        fill: {
            fill: "a3uy0v0r"
        }
    };
    function a(a, c) {
        var d = a["data-testid"];
        d = a.description;
        var e = a.color;
        e = e === void 0 ? "default" : e;
        var f = a.icon
          , l = a.isDisabled;
        l = l === void 0 ? !1 : l;
        a = a.xstyle;
        e = b("useGeoIconStyle")({
            color: e,
            isDisabled: l
        });
        l = b("GeoPrivateIconUtils").getSupportsCSSMask() ? h.jsx(j, {
            icon: f
        }) : h.jsx(k, {
            icon: f
        });
        return h.jsx("div", {
            "aria-label": d,
            className: (g || (g = b("stylex")))(i.root, e, a),
            "data-testid": void 0,
            ref: c,
            role: b("isTruthy")(d) ? "img" : "presentation",
            children: l
        })
    }
    function j(a) {
        a = a.icon;
        return h.jsx(b("GeoPrivateWebCSSTintedIcon.react"), {
            fallback: h.jsx(b("Image.react"), {
                src: a.src
            }),
            icon: a
        })
    }
    function k(a) {
        a = a.icon;
        var c = l(a)
          , d = b("useUniqueID")()
          , e = b("useUniqueID")();
        return c instanceof Error ? h.jsx(b("Image.react"), {
            src: a.src
        }) : h.jsxs("svg", {
            className: (g || (g = b("stylex")))(i.svgMask),
            height: a.size,
            viewBox: "0 0 " + a.size + " " + a.size,
            width: a.size,
            children: [h.jsxs("defs", {
                children: [h.jsx("mask", {
                    id: e,
                    children: h.jsx("image", {
                        filter: "url(#" + d + ")",
                        height: a.size,
                        width: a.size,
                        x: 0,
                        xlinkHref: c,
                        y: 0
                    })
                }), h.jsxs("filter", {
                    id: d,
                    children: [h.jsx("feFlood", {
                        floodColor: "white"
                    }), h.jsx("feComposite", {
                        in2: "SourceAlpha",
                        operator: "in"
                    })]
                })]
            }), h.jsx("rect", {
                className: g(i.fill),
                height: a.size,
                mask: "url(#" + e + ")",
                width: a.size
            })]
        }, c)
    }
    function l(a) {
        var c = b("GeoPrivateIconUtils").getSrcFromIcon(a)
          , d = b("GeoPrivateIconUtils").getSprited(a)
          , e = h.useState(d ? null : c)
          , f = e[0]
          , g = e[1];
        b("useLayoutEffect_SAFE_FOR_SSR")(function() {
            if (c == null)
                return g(null);
            if (!d)
                return g(c);
            var e = new (b("CancelablePromise"))(b("GeoPrivateIconUtils").genImage(c, !0));
            e.getPromise().then(function(c) {
                var d, e, f = b("GeoPrivateIconUtils").getSizeFromIcon(a), h = b("GeoPrivateIconUtils").getPositionFromIcon(a);
                d = (d = f == null ? void 0 : f.width) != null ? d : c.naturalWidth;
                f = (f = f == null ? void 0 : f.height) != null ? f : c.naturalHeight;
                e = (e = h == null ? void 0 : h.x) != null ? e : 0;
                h = (h = h == null ? void 0 : h.y) != null ? h : 0;
                var i = document.createElement("canvas");
                i.width = a.size;
                i.height = a.size;
                var j = i.getContext("2d");
                j.drawImage(c, e, h, d, f);
                g(i.toDataURL("image/png"))
            })["catch"](function() {
                g(new Error())
            });
            return function() {
                return e.cancel()
            }
        }, [a, d, c]);
        return f
    }
    c = b("GeoPrivateMakeComponent").makeGeoComponent("GeoPrivateIcon", h.forwardRef(a));
    e.exports = c
}
), null);
__d("ArtilleryCategory", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        UNKNOWN: 0,
        SERVER: 1,
        SERVER_WAIT: 2,
        NETWORK: 3,
        CLIENT: 4,
        CLIENT_WAIT: 6,
        RESOURCE_WAIT: 7,
        NETWORK_WAIT: 8,
        SERVICEWORKER: 9,
        SERVICEWORKER_WAIT: 10
    })
}
), null);
__d("ArtillerySequenceType", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        SEQUENCE_UNKNOWN: 0,
        SEQUENCE_SERVER: 1,
        SEQUENCE_CLIENT: 2
    })
}
), null);
__d("MediaManagerABTestingComposerEntrypointChecklistBannerContent.react", ["ix", "fbt", "CreatorStudioComposerActions", "CreatorStudioLoggerStoreUtils", "FlexLayout.react", "GeoBaseText.react", "GeoIcon.react", "GeoLink.react", "MediaManagerABTestingGating", "MediaManagerGlobalActions", "React", "cxMargin", "fbicon", "qex", "stylex"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i = b("React");
    function a() {
        var a = function() {
            b("CreatorStudioComposerActions").closeTrayAttempt(),
            b("MediaManagerGlobalActions").selectTab("post_tests", "ab_testing_composer_banner_step_two")
        }
          , c = function() {
            b("CreatorStudioLoggerStoreUtils").creatorStudioSafelyLogEvent("REDIRECT_TO_HELP_CENTER", "ab_testing_composer_banner_step_two")
        };
        return !b("MediaManagerABTestingGating").enable_ab_test_tab ? null : b("qex")._("1757033") ? i.jsxs(b("FlexLayout.react"), {
            className: "cbxuxmzm t8aqdow6 hdkuaane ctdki5lu",
            direction: "vertical",
            children: [i.jsx("div", {
                className: "nfkivdas ptn8p3e7 kdt8u20f nhbekb9h gorjilip aflm09c1 qeuguiog j1zblrgk tb2mzrle",
                children: i.jsxs(b("FlexLayout.react"), {
                    align: "center",
                    className: "d3j6rnzx k12e6gi8 r76d8z5r ccitnfmk",
                    justify: "center",
                    children: [i.jsx("div", {
                        className: "pxwvbm6m lr6pqyb7 m0z8hgm2 nofg79o1 tup21i44 mjf8okdy obrqnunp r141t0kf ert7pw7r oef7mfvp h8tjaa8c",
                        children: i.jsx(b("GeoIcon.react"), {
                            color: "inverted",
                            icon: b("fbicon")._(g("562421"), 16)
                        })
                    }), i.jsx("div", {
                        className: "alvzm5ur",
                        children: i.jsx(b("GeoBaseText.react"), {
                            color: "value",
                            size: "valueDescription",
                            children: h._("Ch\u1ecdn ra phi\u00ean b\u1ea3n t\u1ed1t nh\u1ea5t cho ti\u00eau \u0111\u1ec1 video, ph\u1ea7n m\u00f4 t\u1ea3 v\u00e0 h\u01a1n th\u1ebf n\u1eefa nh\u1edd t\u00ednh n\u0103ng {=Post Testing}.", [h._param("=Post Testing", i.jsx(b("GeoLink.react"), {
                                onClick: a,
                                children: h._("Th\u1eed nghi\u1ec7m b\u00e0i vi\u1ebft")
                            }))])
                        })
                    })]
                })
            }), i.jsxs("div", {
                className: "fl1uwitz fcqsxvkt ct0j6u2s onhytkde hc1roczl obrqnunp",
                children: [h._("T\u1ed1i \u01b0u h\u00f3a n\u1ed9i dung xoay quanh nh\u1eefng g\u00ec m\u00e0 \u0111\u1ed1i t\u01b0\u1ee3ng mong mu\u1ed1n v\u00e0 ch\u1eafc ch\u1eafn l\u00e0 b\u1ea1n \u0111ang \u0111\u0103ng l\u1ef1a ch\u1ecdn t\u1ed1t nh\u1ea5t."), i.jsx(b("GeoLink.react"), {
                    href: "https://www.facebook.com/business/help/942567712892076?id=203539221057259&locale=en_US",
                    margin: "_3-99",
                    target: "_blank",
                    onClick: c,
                    children: i.jsx(b("GeoBaseText.react"), {
                        color: "link",
                        size: "valueDescription",
                        children: h._("T\u00ecm hi\u1ec3u th\u00eam")
                    })
                })]
            })]
        }) : null
    }
}
), null);
__d("AdsAPIOptimizationGoals", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        NONE: "NONE",
        APP_INSTALLS: "APP_INSTALLS",
        BRAND_AWARENESS: "BRAND_AWARENESS",
        AD_RECALL_LIFT: "AD_RECALL_LIFT",
        CLICKS: "CLICKS",
        ENGAGED_USERS: "ENGAGED_USERS",
        DWELLS: "DWELLS",
        EVENT_RESPONSES: "EVENT_RESPONSES",
        IMPRESSIONS: "IMPRESSIONS",
        LEAD_GENERATION: "LEAD_GENERATION",
        QUALITY_LEAD: "QUALITY_LEAD",
        LINK_CLICKS: "LINK_CLICKS",
        MEDIA_DOWNLOADS: "MEDIA_DOWNLOADS",
        OFFER_CLAIMS: "OFFER_CLAIMS",
        OFFSITE_CONVERSIONS: "OFFSITE_CONVERSIONS",
        PAGE_ENGAGEMENT: "PAGE_ENGAGEMENT",
        PAGE_LIKES: "PAGE_LIKES",
        PAGE_FOLLOWS: "PAGE_FOLLOWS",
        POST_ENGAGEMENT: "POST_ENGAGEMENT",
        REACH: "REACH",
        RESEARCH_POLL_RESPONSES: "RESEARCH_POLL_RESPONSES",
        RETENTION: "RETENTION",
        RETURN_ON_AD_SPEND: "RETURN_ON_AD_SPEND",
        SOCIAL_IMPRESSIONS: "SOCIAL_IMPRESSIONS",
        STORE_VISITS: "STORE_VISITS",
        VIDEO_VIEWS: "VIDEO_VIEWS",
        ENGAGED_REACH: "ENGAGED_REACH",
        APP_DOWNLOADS: "APP_DOWNLOADS",
        VIDEO_LONG_VIEWS: "VIDEO_LONG_VIEWS",
        TWO_SECOND_CONTINUOUS_VIDEO_VIEWS: "TWO_SECOND_CONTINUOUS_VIDEO_VIEWS",
        OFFLINE_CONVERSIONS: "OFFLINE_CONVERSIONS",
        LANDING_PAGE_VIEWS: "LANDING_PAGE_VIEWS",
        VISIT_INSTAGRAM_PROFILE: "VISIT_INSTAGRAM_PROFILE",
        VALUE: "VALUE",
        COMPLETED_VIDEO_VIEWS: "COMPLETED_VIDEO_VIEWS",
        THRUPLAY: "THRUPLAY",
        REPLIES: "REPLIES",
        ONSITE_CONVERSIONS: "ONSITE_CONVERSIONS",
        DERIVED_EVENTS: "DERIVED_EVENTS",
        INCREMENTAL_OFFSITE_CONVERSIONS: "INCREMENTAL_OFFSITE_CONVERSIONS",
        APP_INSTALLS_AND_OFFSITE_CONVERSIONS: "APP_INSTALLS_AND_OFFSITE_CONVERSIONS",
        CONVERSATIONS: "CONVERSATIONS",
        EXTERNAL: "EXTERNAL"
    })
}
), null);
__d("ApiAdObjectTypes", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        APPLICATION: "APPLICATION",
        DOMAIN: "DOMAIN",
        EVENT: "EVENT",
        OFFER: "OFFER",
        PAGE: "PAGE",
        PHOTO: "PHOTO",
        SHARE: "SHARE",
        STATUS: "STATUS",
        STORE_ITEM: "STORE_ITEM",
        VIDEO: "VIDEO",
        INVALID: "INVALID",
        PRIVACY_CHECK_FAIL: "PRIVACY_CHECK_FAIL",
        POST_DELETED: "POST_DELETED"
    })
}
), null);
__d("AdsObjectTypes", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        BUSINESS_ACCOUNT: "BUSINESS_ACCOUNT",
        ACCOUNT: "ACCOUNT",
        CAMPAIGN_GROUP: "CAMPAIGN_GROUP",
        CAMPAIGN: "CAMPAIGN",
        CREATIVE: "CREATIVE",
        ADGROUP: "ADGROUP",
        OPPORTUNITIES: "OPPORTUNITIES",
        TRANSACTION: "TRANSACTION",
        PIXEL: "PIXEL",
        AUDIENCE: "AUDIENCE",
        HISTORY: "HISTORY"
    })
}
), null);
__d("AdsPromotedObjectTypes", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        CANVAS_APP: "CANVAS_APP",
        IN_STORE_PICKUP: "IN_STORE_PICKUP",
        MESSENGER: "MESSENGER",
        MOBILE_APP: "MOBILE_APP",
        NONE: "NONE",
        OFFLINE_EVENT_SET: "OFFLINE_EVENT_SET",
        OMNI_CHANNEL: "OMNI_CHANNEL",
        ONSITE: "ONSITE",
        PIXEL: "PIXEL",
        PLACE_PAGE_SET_ID: "PLACE_PAGE_SET_ID",
        PRODUCT_SET: "PRODUCT_SET",
        SHOP: "SHOP",
        SPONSORED_MESSAGES: "SPONSORED_MESSAGES",
        WEBSITE: "WEBSITE",
        WHATSAPP: "WHATSAPP",
        INSTAGRAM: "INSTAGRAM"
    })
}
), null);
__d("AdsShopConstants", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        SHOPS_LINK: "https://fb.com/shop"
    })
}
), null);
__d("AdsPEImportExportConstants", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        Bid: {
            ABSOLUTE_OCPM: "multi absolute",
            CPC: "cpc",
            CPM: "cpm",
            CPA: "cpa",
            MULTI_PREMIUM: "multi",
            FIXED_CPM: "cpm fixed"
        },
        OS: {
            ALL: "All",
            IOS: "iOS",
            ANDROID: "Android",
            FEATURE_DEPRECATED: "feature_phones",
            FEATURE: "Feature_Phone",
            FB_CANVAS: "fb_canvas",
            WINDOWS: "Windows"
        },
        ObjectType: {
            OFFER: "Offer Page Post Ad",
            PHOTO: "Photo Page Post Ad",
            SHARE: "Link Page Post Ad",
            STATUS: "Status Page Post Ad",
            VIDEO: "Video Page Post Ad",
            PAGE: "Fan",
            DOMAIN: "Standard"
        },
        PlacementAssetCustomizationConstants: {
            DEFAULT_PLACEMENT_RULE: "Default"
        }
    })
}
), null);
__d("AdsOffsiteConversionConstants", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        pixelTOS: "/customaudiences/app/tos",
        pixelNameMaxLength: 100,
        statuses: {
            UNVERIFIED: "Unverified",
            ACTIVE: "Active",
            INACTIVE: "Inactive",
            DELETED: "Deleted"
        },
        statusOrdering: {
            Active: 0,
            Inactive: 1,
            Unverified: 2
        },
        tags: ["checkout", "registration", "lead", "key_page_view", "add_to_cart", "other"],
        tagOrdering: {
            checkout: 0,
            registration: 1,
            lead: 2,
            key_page_view: 3,
            add_to_cart: 4,
            other: 5
        },
        tosProjectName: "offsite_conversion",
        emailSources: {
            ADS_MANAGER: "ads_manager",
            AYMT: "aymt",
            CREATE_FLOW: "create_flow",
            POWER_EDITOR: "power_editor"
        },
        uris: {
            HELP_PAGE_URL: "/help/435189689870514"
        },
        jsPixelFields: {
            PIXEL_ID: "id",
            NAME: "name",
            TAG: "tag",
            CREATED_BY: "created_by",
            CREATE_TIME: "create_time",
            STATUS: "status",
            OWNER_ADMARKET_ID: "owner_admarket_id",
            OWNER_ADACCOUNT_ID: "owner_adaccount_id",
            CREATOR_NAME: "creator_name",
            SHARERS_NAMES: "sharers_names",
            HAS_WRITE_PERMISSION: "has_write_permission",
            LAST_FIRING_TIME: "last_firing_time"
        }
    })
}
), null);
__d("ApiDynamicCreativeOptimizationTypes", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        REGULAR: "REGULAR",
        LANGUAGE: "LANGUAGE",
        PLACEMENT: "PLACEMENT",
        VIDEO_BANDWIDTH: "VIDEO_BANDWIDTH",
        BRAND: "BRAND",
        ASSET_CUSTOMIZATION: "ASSET_CUSTOMIZATION",
        DCO_PARITY: "DCO_PARITY",
        PREVIEW_DYNAMIC_RENDERING: "PREVIEW_DYNAMIC_RENDERING",
        LOCALIZED_PLACEMENTS: "LOCALIZED_PLACEMENTS",
        DEGREES_OF_FREEDOM: "DEGREES_OF_FREEDOM",
        FORMAT_AUTOMATION: "FORMAT_AUTOMATION",
        DOF_WITH_IMAGE_CROP: "DOF_WITH_IMAGE_CROP",
        DOF_MESSAGING_DESTINATION: "DOF_MESSAGING_DESTINATION",
        ACO_AUTOFLOW: "ACO_AUTOFLOW"
    })
}
), null);
__d("AdsValidationConsts", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        maxAge: 65,
        maxAdgroupNameLength: 400,
        maxFriendlyNameLength: 128,
        maxURLLength: 1024,
        minAge: 13,
        minAgeDefault: 18,
        minMessagingDestinationAge: 18,
        minLeadGenerationAge: 18,
        nameMaxLength: 400,
        maxAdObjectNameLength: 400
    })
}
), null);
__d("MediaManagerABTestingComposerEntrypointBannerContainer.react", ["FluxContainer", "MediaManagerABTestingComposerEntrypointBanner.react", "MediaManagerABTestingGating", "React", "SimpleNUXMessage", "VideoComposerStores", "VideoComposerUtils", "qex"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        c.getStores = function(a) {
            return [b("VideoComposerStores").getBasicStore(a.videoComposerID), b("VideoComposerStores").getMetadataStore(a.videoComposerID)]
        }
        ;
        c.calculateState = function(a, c) {
            a = b("VideoComposerStores").getBasicStore(c.videoComposerID).getState();
            c = b("VideoComposerStores").getMetadataStore(c.videoComposerID).getState();
            return {
                isABTestingBannerVisible: !b("SimpleNUXMessage").hasUserSeenMessage("422682312030131"),
                composerEntryPointRef: c.composerEntryPointRef,
                dialogMode: c.dialogMode,
                showVUExperimentBanner: a.showVUExperimentBanner,
                vuExperimentOptOut: a.vuExperimentOptOut,
                isVUExperimentBannerVisible: !b("SimpleNUXMessage").hasUserSeenMessage("834148360454487")
            }
        }
        ;
        var d = c.prototype;
        d.render = function() {
            var a = this
              , c = this.state.showVUExperimentBanner && this.state.isVUExperimentBannerVisible && !this.state.vuExperimentOptOut;
            return !this.state.isABTestingBannerVisible || !b("VideoComposerUtils").isFromCreatorStudioUploadVideoEntryPoint(this.state.composerEntryPointRef) || !this.state.dialogMode === "video_upload" || c || !b("MediaManagerABTestingGating").enable_ab_test_tab ? null : b("qex")._("1755707") ? g.jsx(b("MediaManagerABTestingComposerEntrypointBanner.react"), {
                onCloseClick: function() {
                    a.setState({
                        isABTestingBannerVisible: !1
                    })
                }
            }) : null
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
__d("AdsLeadGenFormConstants", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        MAX_NUM_APPOINTMENT_SCHEDULING_QUESTIONS: 1,
        MAX_NUM_CONDITIONAL_QUESTION_GROUPS: 1,
        MAX_NUM_CUSTOM_QUESTIONS: 15,
        MAX_NUM_STORE_LOOKUP_QUESTIONS: 1,
        MAX_TRACKING_PARAMETER_LENGTH: 256,
        MIN_NUM_SELECTOR_OPTIONS: 2
    })
}
), null);
