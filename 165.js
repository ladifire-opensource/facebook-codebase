if (self.CavalryLogger) {
    CavalryLogger.start_js(["Gn75e"]);
}

__d("VideoComposerCaptionCorrectorListGenerator_node.graphql", [], (function(a, b, c, d, e, f) {
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
            name: "confidence",
            storageKey: null
        };
        return {
            argumentDefinitions: [],
            kind: "Fragment",
            metadata: null,
            name: "VideoComposerCaptionCorrectorListGenerator_node",
            selections: [a, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "locale",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "process_status",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "review_expire_time",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "video_id",
                storageKey: null
            }, {
                alias: null,
                args: [{
                    kind: "Literal",
                    name: "first",
                    value: 3e3
                }, {
                    kind: "Literal",
                    name: "orderby",
                    value: ["chronological"]
                }],
                concreteType: "VideoSubtitleCaptionsConnection",
                kind: "LinkedField",
                name: "captions",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "VideoSubtitleCaptionsEdge",
                    kind: "LinkedField",
                    name: "edges",
                    plural: !0,
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: "VideoSubtitleCaption",
                        kind: "LinkedField",
                        name: "node",
                        plural: !1,
                        selections: [a, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "text",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "start_time_in_ms",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "duration_in_ms",
                            storageKey: null
                        }, b, {
                            alias: null,
                            args: null,
                            concreteType: "VideoSubtitleCaptionTokenConfidence",
                            kind: "LinkedField",
                            name: "tokens",
                            plural: !0,
                            selections: [{
                                alias: null,
                                args: null,
                                kind: "ScalarField",
                                name: "token",
                                storageKey: null
                            }, b],
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    storageKey: null
                }],
                storageKey: 'captions(first:3000,orderby:["chronological"])'
            }],
            type: "VideoSubtitle",
            abstractKey: null
        }
    }();
    e.exports = a
}
), null);
__d("VideoComposerCaptionEditorRichTextEditItem.react", ["CompositeDraftDecorator", "DraftEditor.react", "DraftModifier", "EditorState", "FDSText.react", "React", "SelectionState", "TimeFormatUtil"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = b("EditorState").createWithText(a.captionData.node.text)
          , d = c.getCurrentContent().getBlocksAsArray()
          , e = 0;
        for (var d = d, f = Array.isArray(d), h = 0, d = f ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
            var i;
            if (f) {
                if (h >= d.length)
                    break;
                i = d[h++]
            } else {
                h = d.next();
                if (h.done)
                    break;
                i = h.value
            }
            i = i;
            var j = i.getText().split(" ")
              , k = j.map(function(b, c) {
                var d = a.captionData.node.tokens;
                return !d ? [b, 1] : [b, d[c + e].confidence]
            });
            e += j.length;
            j = 0;
            for (var k = k, l = Array.isArray(k), m = 0, k = l ? k : k[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
                var n;
                if (l) {
                    if (m >= k.length)
                        break;
                    n = k[m++]
                } else {
                    m = k.next();
                    if (m.done)
                        break;
                    n = m.value
                }
                n = n;
                var o = n[0];
                n = n[1];
                if (n >= .25) {
                    j += o.length + 1;
                    continue
                }
                n = c.getCurrentContent();
                var p = n.createEntity("TOKEN", "IMMUTABLE", {
                    token: o,
                    range: [j, j + o.length]
                });
                n = n.getLastCreatedEntityKey();
                var q = b("SelectionState").createEmpty(i.getKey()).merge({
                    anchorOffset: j,
                    focusOffset: j + o.length
                });
                p = b("DraftModifier").applyEntity(p, q, n);
                c = b("EditorState").push(c, p, "apply-entity");
                j += o.length + 1
            }
        }
        q = g.useState(b("EditorState").createWithContent(c.getCurrentContent(), new (b("CompositeDraftDecorator"))([{
            strategy: function(a, b, c) {
                a.findEntityRanges(function(a) {
                    a = a.getEntity();
                    return typeof a === "string" && c.getEntity(a).getType() === "TOKEN"
                }, b)
            },
            component: function(a) {
                return g.jsx("span", babelHelpers["extends"]({}, a, {
                    style: {
                        borderBottom: "3px dotted var(--fds-blue-80)"
                    },
                    children: a.children
                }))
            }
        }])));
        n = q[0];
        p = q[1];
        return g.jsxs("div", {
            style: {
                display: "flex",
                flexDirection: "column"
            },
            children: [g.jsxs("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "row",
                    width: "calc(100% - 8px)",
                    color: "var(fds-unified-blue-45)",
                    cursor: "pointer"
                },
                children: [g.jsx("div", {
                    onClick: function() {
                        var b;
                        if (a.minTime === void 0 && a.maxTime === void 0)
                            return;
                        a.onTimingPress(((b = (b = a.minTime) != null ? b : a.maxTime) != null ? b : 0) / 1e3)
                    },
                    role: "link",
                    tabIndex: "0",
                    children: g.jsxs(b("FDSText.react"), {
                        display: "inline",
                        size: "header4",
                        weight: "bold",
                        textAlign: "left",
                        children: [b("TimeFormatUtil").getMMSS((o = a.minTime) != null ? o : 0), " -", " ", b("TimeFormatUtil").getMMSS((m = a.maxTime) != null ? m : 0)]
                    })
                }), g.jsx("div", {
                    children: g.jsx(b("FDSText.react"), {
                        display: "inline",
                        size: "header4",
                        weight: "bold",
                        textAlign: "right",
                        children: "Adjust time"
                    })
                })]
            }), g.jsx("div", {
                style: {
                    lineHeight: "20px",
                    backgroundColor: "#F0F2F5",
                    border: "1px solid #C9CCD1",
                    borderRadius: 8,
                    marginRight: 8,
                    marginBottom: 8,
                    padding: "8px 12px",
                    width: "calc(100%-16px)"
                },
                children: g.jsx(b("DraftEditor.react"), {
                    editorState: n,
                    onChange: p
                })
            })]
        })
    }
}
), null);
__d("VideoComposerCaptionEditorEditCaptionsHeader.react", ["ix", "FDSText.react", "FlexLayout.react", "Image.react", "React", "VideoComposerStores", "asset"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a(a) {
        return h.jsxs(b("FlexLayout.react"), {
            direction: "horizontal",
            children: [h.jsxs(b("FlexLayout.react"), {
                direction: "vertical",
                children: [h.jsx(b("FDSText.react"), {
                    display: "block",
                    size: "header2",
                    weight: "bold",
                    textAlign: "left",
                    children: b("VideoComposerStores").getCaptionEditorStore(a.videoComposerID).getLanguage()
                }), h.jsx(b("FDSText.react"), {
                    display: "block",
                    size: "meta1",
                    textAlign: "left",
                    children: "Auto Generated"
                })]
            }), h.jsxs(b("FlexLayout.react"), {
                direction: "horizontal",
                style: {
                    margin: "20px",
                    alignItems: "flex-end"
                },
                children: [h.jsx("div", {
                    style: {
                        borderRadius: "32px",
                        padding: "8px",
                        background: "#E4E6EB",
                        marginRight: "8px",
                        lineHeight: "0"
                    },
                    children: h.jsx(b("Image.react"), {
                        src: g("488810")
                    })
                }), h.jsx("div", {
                    style: {
                        borderRadius: "32px",
                        padding: "8px",
                        background: "#E4E6EB",
                        lineHeight: "0"
                    },
                    children: h.jsx(b("Image.react"), {
                        src: g("488811")
                    })
                })]
            })]
        })
    }
}
), null);
__d("MediaManagerClipsLibraryTab", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        CLIPS_BY_STREAM: "clips_by_stream",
        ALL_CLIPS: "all_clips",
        HIGHLIGHT_VIDEOS: "highlight_videos"
    });
    e.exports = a
}
), null);
__d("VideoComposerCaptionCorrectorListGenerator.react", ["React", "RelayModern", "VideoComposerCaptionCorrectorListSectionContainer.react", "VideoComposerCaptionEditorActions", "VideoComposerCaptionsTabActions", "VideoComposerDialogCaptionEditorConstants", "immutable", "VideoComposerCaptionCorrectorListGenerator_node.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.UNSAFE_componentWillMount = function() {
            this.$1()
        }
        ;
        d.UNSAFE_componentWillReceiveProps = function(a) {
            (this.props.id !== a.id || JSON.stringify(this.props.node) !== JSON.stringify(a.node)) && this.$1()
        }
        ;
        d.$2 = function(a) {
            var c = this
              , d = []
              , e = [];
            a = a.reduce(function(a, f) {
                if (!f.node)
                    return a;
                f = f.node;
                var g = f.start_time_in_ms || 0
                  , h = f.duration_in_ms || 0;
                if (h === 0 || g < c.props.videoStartTimeInMs || g + h > c.props.videoEndTimeInMs) {
                    e.push({
                        node: {
                            id: f.id
                        }
                    });
                    return a
                }
                g -= c.props.videoStartTimeInMs;
                f = {
                    node: {
                        id: f.id,
                        text: f.text,
                        start_time_in_ms: g,
                        duration_in_ms: h,
                        confidence: f.confidence,
                        left: g * b("VideoComposerDialogCaptionEditorConstants").SMALLEST_UNIT,
                        width: h * b("VideoComposerDialogCaptionEditorConstants").SMALLEST_UNIT
                    }
                };
                a.push(f);
                d.push(f);
                return a
            }, []);
            b("VideoComposerCaptionEditorActions").setCaptions(this.props.videoComposerID, b("immutable").List(a), b("immutable").List(d.concat(e)), this.props.node.id, this.props.node.locale, this.props.node.video_id, null, 2);
            b("VideoComposerCaptionsTabActions").captionHasTrimmed(this.props.videoComposerID)
        }
        ;
        d.$1 = function() {
            var a;
            a = (a = this.props) != null ? (a = a.node) != null ? a.captions : a : a;
            if (a && a.edges)
                if (this.props.shouldTrimCaptions)
                    this.$2(a.edges);
                else {
                    a = a.edges.map(function(a) {
                        if (a.node) {
                            a = {
                                node: {
                                    id: a.node.id,
                                    text: a.node.text,
                                    start_time_in_ms: a.node.start_time_in_ms,
                                    duration_in_ms: a.node.duration_in_ms,
                                    confidence: a.node.confidence,
                                    left: (a.node.start_time_in_ms ? a.node.start_time_in_ms : 0) * b("VideoComposerDialogCaptionEditorConstants").SMALLEST_UNIT,
                                    width: (a.node.duration_in_ms ? a.node.duration_in_ms : 0) * b("VideoComposerDialogCaptionEditorConstants").SMALLEST_UNIT,
                                    tokens: a.node.tokens
                                }
                            };
                            return a
                        }
                        return {}
                    });
                    b("VideoComposerCaptionEditorActions").setCaptions(this.props.videoComposerID, b("immutable").List(a), b("immutable").List(new Array(a.length)), this.props.node.id, this.props.node.locale, this.props.node.video_id, null, 2)
                }
        }
        ;
        d.render = function() {
            return h.jsx(b("VideoComposerCaptionCorrectorListSectionContainer.react"), {
                videoComposerID: this.props.videoComposerID
            })
        }
        ;
        return c
    }(h.Component);
    c = b("RelayModern").createFragmentContainer(a, {
        node: g !== void 0 ? g : g = b("VideoComposerCaptionCorrectorListGenerator_node.graphql")
    });
    e.exports = c
}
), null);
__d("VideoComposerCaptionCorrectorListSectionContainer.react", ["cx", "DateConsts", "FluxContainer", "React", "ScrollableArea.react", "VideoComposerCaptionEditorActions", "VideoComposerCaptionEditorEditItemContainer.react", "VideoComposerDialogCaptionEditorConstants", "VideoComposerStores", "immutable"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        c.getStores = function(a) {
            return [b("VideoComposerStores").getCaptionEditorStore(a.videoComposerID)]
        }
        ;
        c.calculateState = function(a, c) {
            return {
                captions: (a = b("VideoComposerStores")).getCaptionEditorStore(c.videoComposerID).getCaptions(),
                vpc: a.getCaptionEditorStore(c.videoComposerID).getVPC(),
                captionSelected: a.getCaptionEditorStore(c.videoComposerID).getState().captionSelected,
                videoDuration: a.getCaptionEditorStore(c.videoComposerID).getState().videoDuration
            }
        }
        ;
        var d = c.prototype;
        d.$1 = function(a) {
            var b;
            (b = this.refs.ScrollableArea) == null ? void 0 : (b = b.getArea()) == null ? void 0 : b.scrollIntoView(a)
        }
        ;
        d.$2 = function(a, c, d, e) {
            if (d < b("VideoComposerDialogCaptionEditorConstants").START_TIME_OFFSET_IN_MS)
                return;
            e = {
                node: {
                    id: "",
                    text: e,
                    start_time_in_ms: c + b("VideoComposerDialogCaptionEditorConstants").START_TIME_OFFSET_IN_MS,
                    duration_in_ms: Math.min(d, b("VideoComposerDialogCaptionEditorConstants").DURATION_TIME_IN_MS) - b("VideoComposerDialogCaptionEditorConstants").START_TIME_OFFSET_IN_MS,
                    confidence: 1,
                    left: (c + b("VideoComposerDialogCaptionEditorConstants").START_TIME_OFFSET_IN_MS) * b("VideoComposerDialogCaptionEditorConstants").SMALLEST_UNIT,
                    width: (Math.min(d, b("VideoComposerDialogCaptionEditorConstants").DURATION_TIME_IN_MS) - b("VideoComposerDialogCaptionEditorConstants").START_TIME_OFFSET_IN_MS) * b("VideoComposerDialogCaptionEditorConstants").SMALLEST_UNIT
                }
            };
            b("VideoComposerCaptionEditorActions").addCaptionEntry(this.props.videoComposerID, a, e);
            b("VideoComposerCaptionEditorActions").setPreviewEntry(this.props.videoComposerID, a)
        }
        ;
        d.$3 = function() {
            var a = this
              , c = this.state.captions;
            return c.size > 0 ? c.map(function(d, e) {
                return h.jsx(b("VideoComposerCaptionEditorEditItemContainer.react"), {
                    videoComposerID: a.props.videoComposerID,
                    index: e,
                    captionData: d,
                    vpc: a.state.vpc,
                    isSelected: e === a.state.captionSelected,
                    maxTime: c.size > 0 && e < c.size - 1 ? c.get(e + 1).node.start_time_in_ms : a.state.videoDuration * b("DateConsts").MS_PER_SEC,
                    minTime: c.size > 0 && e > 0 ? c.get(e - 1).node.start_time_in_ms + c.get(e - 1).node.duration_in_ms : 0,
                    onClick: function() {
                        return b("VideoComposerCaptionEditorActions").playPreviewEntry(a.props.videoComposerID, e)
                    },
                    onScrollIntoView: function(b) {
                        return a.$1(b)
                    },
                    onInsert: function(c, d) {
                        return a.$2(e + 1, c, d, b("VideoComposerDialogCaptionEditorConstants").EMPTY_CAPTION_TEXT)
                    }
                }, e)
            }) : b("immutable").List()
        }
        ;
        d.render = function() {
            return h.jsx(b("ScrollableArea.react"), {
                ref: "ScrollableArea",
                style: {
                    backgroundColor: "var(--fds-white)"
                },
                children: this.$3()
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
__d("AdCampaignDestination", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        UNDEFINED: "UNDEFINED",
        WEBSITE: "WEBSITE",
        APP: "APP",
        MESSENGER: "MESSENGER",
        APPLINKS_AUTOMATIC: "APPLINKS_AUTOMATIC",
        WHATSAPP: "WHATSAPP",
        INSTAGRAM_DIRECT: "INSTAGRAM_DIRECT",
        FACEBOOK: "FACEBOOK",
        MESSAGING_MESSENGER_WHATSAPP: "MESSAGING_MESSENGER_WHATSAPP",
        SHOP: "SHOP",
        MESSAGING_INSTAGRAM_DIRECT_MESSENGER: "MESSAGING_INSTAGRAM_DIRECT_MESSENGER",
        MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP: "MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP",
        MESSAGING_INSTAGRAM_DIRECT_WHATSAPP: "MESSAGING_INSTAGRAM_DIRECT_WHATSAPP",
        SHOP_AUTOMATIC: "SHOP_AUTOMATIC",
        PHONE_CALL: "PHONE_CALL"
    })
}
), null);
__d("AdsAPIBillingEvents", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        APP_INSTALLS: "APP_INSTALLS",
        CLICKS: "CLICKS",
        IMPRESSIONS: "IMPRESSIONS",
        LINK_CLICKS: "LINK_CLICKS",
        NONE: "NONE",
        OFFER_CLAIMS: "OFFER_CLAIMS",
        PAGE_LIKES: "PAGE_LIKES",
        POST_ENGAGEMENT: "POST_ENGAGEMENT",
        VIDEO_VIEWS: "VIDEO_VIEWS",
        TWO_SECOND_CONTINUOUS_VIDEO_VIEWS: "TWO_SECOND_CONTINUOUS_VIDEO_VIEWS",
        COMPLETED_VIDEO_VIEWS: "COMPLETED_VIDEO_VIEWS",
        THRUPLAY: "THRUPLAY"
    })
}
), null);
__d("AdDraftFragmentValidationStatus", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        VALIDATED: "VALIDATED",
        NEEDS_VALIDATION: "NEEDS_VALIDATION",
        HAS_ERRORS: "HAS_ERRORS"
    })
}
), null);
__d("AdsAPIBidConstraints", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        ROAS_AVERAGE_FLOOR: "roas_average_floor"
    })
}
), null);
__d("AdDraftOwnership", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        USER: "USER",
        AD_ACCOUNT: "AD_ACCOUNT",
        USER_MULTIPLE: "USER_MULTIPLE",
        AD_WORKSPACE: "AD_WORKSPACE"
    })
}
), null);
__d("AdsAPIDevicePlatform", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        MOBILE: "mobile",
        DESKTOP: "desktop"
    })
}
), null);
__d("AdsAttributionSpecSystemDefault", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        L4_ATT_DEFAULT_CT_WINDOW: 28,
        L4_ATT_DEFAULT_VT_WINDOW: 1
    })
}
), null);
__d("AYMTClientSideChannelNames", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        AYMT_CAMPAIGN_MANAGER_MEGAPHONE_CHANNEL: "AYMTCampaignManagerMegaphoneChannel",
        AYMT_PROMOTIONS_HUB_NEEDS_ATTENTION_CHANNEL: "AYMTPromotionsHubNeedsAttentionChannel",
        AYMT_WWW_ADS_DELIVERY_CHANNEL: "AYMTWWWAdsDeliveryChannel",
        AYMT_WWW_GROUPS_INSIGHTS_CHANNEL: "AYMTWWWGroupsInsightsChannel",
        AYMT_WWW_GROUPS_MALL_RHC_CHANNEL: "AYMTWWWGroupsRHCChannel",
        AYMT_CREATOR_STUDIO_TOP_PRIORITY_CHANNEL: "AYMTCreatorStudioTopPriorityChannel",
        AYMT_CREATOR_STUDIO_FUNSIGHTS_CHANNEL: "AYMTCreatorStudioInsightsChannel",
        AYMT_EVENTS_MANAGER_PIXEL_CHANNEL: "AYMTEventsManagerPixelChannel",
        AYMT_EVENTS_MANAGER_APP_CHANNEL: "AYMTEventsManagerAppChannel",
        AYMT_EVENTS_MANAGER_OFFLINE_DS_CHANNEL: "AYMTEventsManagerOfflineDSChannel",
        AYMT_EVENTS_MANAGER_DS_LISTING_SCREEN_CHANNEL: "AYMTEventsManagerDSListingScreenChannel",
        AYMT_CREATOR_STUDIO_ANNOUNCEMENT_CARD_CHANNEL: "AYMTCreatorStudioAnnouncementCardChannel",
        AYMT_ASSET_LIBRARY_CHANNEL: "AYMTAssetLibraryChannel",
        AYMT_BUSINESS_MANAGER_CHANNEL: "AYMTBusinessManagerChannel",
        AYMT_CREATOR_MONETIZATION_CHANNEL: "AYMTCreatorMonetizationChannel",
        AYMT_CREATOR_STUDIO_MONETIZATION_HOME_CHANNEL: "AYMTCreatorStudioMonetizationHomeChannel",
        AYMT_CREATOR_STUDIO_STARS_TAB_CHANNEL: "AYMTCreatorStudioStarsTabChannel",
        AYMT_JOB_MANAGER_CHANNEL: "AYMTJobManagerChannel",
        AYMT_AM_START_YOUR_DAY_ALERTS_CHANNEL: "AYMTAMStartYourDayAlertsChannel"
    })
}
), null);
__d("AdContentFeedbackTypes", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        UNKNOWN: 0,
        APPROVE: 1,
        NEED_MANUAL_REVIEW: 2,
        REJECT: 3
    })
}
), null);
__d("AdsAPIObjectivesSupportingPages", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        exports: {
            editable_page_enabled_objectives: ["REACH", "PAGE_LIKES", "LEAD_GENERATION"],
            page_enabled_objectives: ["REACH", "PAGE_LIKES", "LEAD_GENERATION", "STORE_VISITS"]
        }
    })
}
), null);
__d("AdsAdgroupFieldSetMap", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        all_cheap: {
            account_id: null,
            adset_id: null,
            campaign_id: null,
            creative: null,
            effective_status: null,
            id: null,
            name: null,
            status: null,
            ad_review_feedback: null,
            bid_amount: null,
            bid_info: null,
            bid_type: null,
            adset: null,
            conversion_specs: null,
            created_time: null,
            creative_history: null,
            creative_link_url: null,
            demolink_hash: null,
            display_sequence: null,
            engagement_audience: null,
            priority: null,
            source_app_id: null,
            tracking_and_conversion_with_defaults: null,
            tracking_specs: null,
            updated_time: null,
            view_tags: null,
            can_aggregate_social_feedback_on_edit: null
        },
        cheap_tier1: {
            account_id: null,
            adset_id: null,
            campaign_id: null,
            creative: null,
            effective_status: null,
            id: null,
            name: null,
            status: null
        },
        cheap_tier2: {
            ad_review_feedback: null,
            bid_amount: null,
            bid_info: null,
            bid_type: null,
            adset: null,
            conversion_specs: null,
            created_time: null,
            creative_history: null,
            creative_link_url: null,
            demolink_hash: null,
            display_sequence: null,
            engagement_audience: null,
            priority: null,
            source_app_id: null,
            tracking_and_conversion_with_defaults: null,
            tracking_specs: null,
            updated_time: null,
            view_tags: null,
            can_aggregate_social_feedback_on_edit: null
        }
    })
}
), null);
__d("AdsDynamicURLParameterTypes", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        AD_NAME: "{{ad.name}}",
        ADSET_NAME: "{{adset.name}}",
        CAMPAIGN_NAME: "{{campaign.name}}",
        AD_ID: "{{ad.id}}",
        ADSET_ID: "{{adset.id}}",
        CAMPAIGN_ID: "{{campaign.id}}",
        IMPRESSION_TOKEN: "{{impression.token}}",
        SITE_SOURCE_NAME: "{{site_source_name}}",
        SITE_SOURCE_NAME_ALT: "[SITE_SOURCE_NAME]",
        PLACEMENT: "{{placement}}"
    })
}
), null);
