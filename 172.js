if (self.CavalryLogger) {
    CavalryLogger.start_js(["YHzqa"]);
}

__d("MessengerGenericQuickBannerViewQuery.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "extra_data"
        }
          , b = {
            defaultValue: null,
            kind: "LocalArgument",
            name: "type"
        }
          , c = [{
            kind: "Variable",
            name: "extra_data",
            variableName: "extra_data"
        }, {
            kind: "Variable",
            name: "type",
            variableName: "type"
        }]
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
        }
          , f = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "url",
            storageKey: null
        }
          , g = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "length",
            storageKey: null
        }
          , h = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "offset",
            storageKey: null
        }
          , i = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "should_show_cta_buttons",
            storageKey: null
        }
          , j = {
            alias: null,
            args: null,
            concreteType: "MessengerGenericQuickBannerButton",
            kind: "LinkedField",
            name: "cta_buttons",
            plural: !0,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "action_type",
                storageKey: null
            }, e],
            storageKey: null
        }
          , k = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "xout_button_action_type",
            storageKey: null
        }
          , l = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "icon_image",
            storageKey: null
        }
          , m = {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "icon_background",
            storageKey: null
        };
        return {
            fragment: {
                argumentDefinitions: [a, b],
                kind: "Fragment",
                metadata: null,
                name: "MessengerGenericQuickBannerViewQuery",
                selections: [{
                    alias: null,
                    args: c,
                    concreteType: "MessengerGenericQuickBannerQueryResult",
                    kind: "LinkedField",
                    name: "generic_quick_banner_details",
                    plural: !1,
                    selections: [d, {
                        alias: null,
                        args: null,
                        concreteType: "TextWithEntities",
                        kind: "LinkedField",
                        name: "content",
                        plural: !1,
                        selections: [e, {
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
                                selections: [f],
                                storageKey: null
                            }, g, h],
                            storageKey: null
                        }],
                        storageKey: null
                    }, i, j, k, l, m],
                    storageKey: null
                }],
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: [b, a],
                kind: "Operation",
                name: "MessengerGenericQuickBannerViewQuery",
                selections: [{
                    alias: null,
                    args: c,
                    concreteType: "MessengerGenericQuickBannerQueryResult",
                    kind: "LinkedField",
                    name: "generic_quick_banner_details",
                    plural: !1,
                    selections: [d, {
                        alias: null,
                        args: null,
                        concreteType: "TextWithEntities",
                        kind: "LinkedField",
                        name: "content",
                        plural: !1,
                        selections: [e, {
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
                                selections: [{
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "__typename",
                                    storageKey: null
                                }, f, {
                                    kind: "InlineFragment",
                                    selections: [{
                                        alias: null,
                                        args: null,
                                        kind: "ScalarField",
                                        name: "id",
                                        storageKey: null
                                    }],
                                    type: "Node",
                                    abstractKey: "__isNode"
                                }],
                                storageKey: null
                            }, g, h],
                            storageKey: null
                        }],
                        storageKey: null
                    }, i, j, k, l, m],
                    storageKey: null
                }]
            },
            params: {
                id: "3404554162916020",
                metadata: {},
                name: "MessengerGenericQuickBannerViewQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("MessengerGenericQuickBannerView.react", ["ix", "cx", "fbt", "FBLogger", "FDSText.react", "FlexLayout.react", "Image.react", "MessengerAdsConversionFunnelTypedLogger", "MessengerAdsGenericBannerType", "MessengerConversionEvent", "QE2Logger", "React", "RelayFBEnvironment", "RelayModern", "ServicesEventsLogger", "SUIBusinessTheme", "SUIButton.react", "TetraCircleButton.react", "TextWithEntities.react", "curry", "fbicon", "joinClasses", "MessengerGenericQuickBannerViewQuery.graphql"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j, k = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.state = {
                content: null,
                icon_background: null,
                icon_image: null,
                cta_buttons: null,
                should_show_cta_buttons: null,
                xout_button_action_type: null,
                title: null
            },
            c.$1 = !1,
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            this.$1 = !0;
            if (!this.props.conversionData.is_eligible)
                return;
            this.$2();
            this.$3();
            this.$4()
        }
        ;
        d.componentWillUnmount = function() {
            this.$1 = !1
        }
        ;
        d.componentDidUpdate = function(a) {
            if (!this.props.conversionData.is_eligible)
                return;
            this.$2();
            (this.props.conversionData.generic_quick_banner_type !== a.conversionData.generic_quick_banner_type || this.props.conversionData.generic_quick_banner_extra_data !== a.conversionData.generic_quick_banner_extra_data) && this.$4()
        }
        ;
        d.$5 = function() {
            var a = this;
            if (this.state.should_show_cta_buttons === !1)
                return;
            var c = this.state.cta_buttons
              , d = 260
              , e = d / c.length;
            d = c.map(function(d, f) {
                return k.jsx("div", {
                    className: "_7zgr _3-90",
                    children: k.jsx(b("SUIButton.react"), {
                        width: e,
                        label: d.text,
                        onClick: b("curry")(a.props.onButtonClick, a.props.conversionData.generic_quick_banner_type, d.action_type),
                        theme: b("SUIBusinessTheme"),
                        use: f === c.length - 1 ? "confirm" : "default"
                    })
                })
            });
            return k.jsx(b("FlexLayout.react"), {
                className: "_7zk6",
                align: "center",
                children: d
            })
        }
        ;
        d.render = function() {
            if (this.props.conversionData.is_eligible && this.$6(this.state)) {
                this.props.conversionData.conversion_type === "CONSUMER_QUESTION" && b("ServicesEventsLogger").log(this.props.pageID, "services_organic_intake_form_automated_response_upsell_impression", {
                    referrerUIComponent: "qp",
                    referrerUISurface: "inbox"
                }, {
                    consumer_id: this.props.consumerID,
                    referrer_surface: "message"
                });
                return k.jsx("div", {
                    className: "_7zk4",
                    style: {
                        top: "-" + this.props.topPosition + "px"
                    },
                    children: k.jsxs(b("FlexLayout.react"), {
                        align: "center",
                        direction: "vertical",
                        children: [k.jsxs(b("FlexLayout.react"), {
                            align: "center",
                            children: [k.jsx("div", {
                                className: b("joinClasses")("_7zvz", this.state.icon_background),
                                children: k.jsx(b("Image.react"), {
                                    className: b("joinClasses")("_7zgm", this.state.icon_background),
                                    src: this.state.icon_image
                                })
                            }), k.jsxs(b("FlexLayout.react"), {
                                align: "stretch",
                                className: "_7zv-",
                                direction: "vertical",
                                children: [k.jsxs(b("FlexLayout.react"), {
                                    justify: "all",
                                    children: [k.jsx(b("FDSText.react"), {
                                        display: "block",
                                        size: "header4",
                                        weight: "bold",
                                        children: this.state.title
                                    }), !!this.state.xout_button_action_type && k.jsx(b("FlexLayout.react"), {
                                        className: "_3-9b",
                                        children: k.jsx(b("TetraCircleButton.react"), {
                                            icon: b("fbicon")._(g("478231"), 12),
                                            label: i._("N\u00fat \u0111\u1ec3 b\u1ecf qua g\u1ee3i \u00fd"),
                                            onPress: b("curry")(this.props.onButtonClick, this.props.conversionData.generic_quick_banner_type, this.state.xout_button_action_type),
                                            size: 24
                                        })
                                    })]
                                }), k.jsx(b("FlexLayout.react"), {
                                    className: "_3-8w _7_pu",
                                    children: k.jsx(b("FDSText.react"), {
                                        color: "secondary",
                                        display: "block",
                                        children: k.jsx(b("TextWithEntities.react"), {
                                            text: this.state.content.text,
                                            ranges: this.state.content.ranges
                                        })
                                    })
                                })]
                            })]
                        }), this.$5()]
                    })
                })
            } else
                return null
        }
        ;
        d.$3 = function() {
            this.props.conversionData.generic_quick_banner_type === "LEAD_QUALITY_SIGNAL" && b("QE2Logger").logExposureForPage("ctm_lead_gen_quality_signal_collection_universe", this.props.pageID)
        }
        ;
        d.$2 = function() {
            new (b("MessengerAdsConversionFunnelTypedLogger"))().setName(b("MessengerConversionEvent").CONVERSION_QUICK_PROMOTION_IMPRESSION).setConversionType(this.props.conversionData.generic_quick_banner_type).setPageID(this.props.pageID).setConsumerID(this.props.consumerID).updateExtraData({
                trigger_id: this.props.conversionData.trigger_id
            }).log()
        }
        ;
        d.$4 = function() {
            var a = this;
            if (this.props.conversionData.generic_quick_banner_type === null || this.props.conversionData.generic_quick_banner_type === void 0)
                return;
            var c = this.$7(this.props.conversionData.generic_quick_banner_type, this.props.conversionData.generic_quick_banner_extra_data);
            c.then(function(c) {
                a.$1 && (c.generic_quick_banner_details ? a.setState(c.generic_quick_banner_details, a.props.onInformationFetched) : b("FBLogger")("Generic Quick Banner").warn("Failed when fetching banner information: Empty Response"))
            })["catch"](function(a) {
                b("FBLogger")("Generic Quick Banner").warn("Failed when fetching banner information: %s", a)
            })
        }
        ;
        d.$7 = function(a, c) {
            return b("RelayModern").fetchQuery(b("RelayFBEnvironment"), j !== void 0 ? j : j = b("MessengerGenericQuickBannerViewQuery.graphql"), {
                type: a,
                extra_data: c
            })
        }
        ;
        d.$6 = function(a) {
            return a.title !== null && a.content !== null && a.should_show_cta_buttons !== null && a.icon_image !== null && a.icon_background !== null
        }
        ;
        return c
    }(k.PureComponent);
    e.exports = a
}
), null);
__d("MessengerMSuggestionButton.react", ["cx", "ix", "Image.react", "React", "SUIAtlasTheme", "SUIBusinessTheme", "SUIButton.react", "SUISpinner.react", "joinClasses"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.getAssetURL = function() {
            var a = null;
            switch (this.props.suggestionType) {
            case "create_appointment_direct":
                a = h("558659");
                break;
            case "create_appointment_different_time":
                a = h("558660");
                break;
            case "schedule_appointment":
                a = h("562338");
                break;
            case "send_availability":
                if (this.props.partnerAppLogo) {
                    a = this.props.partnerAppLogo;
                    return i.jsx(b("Image.react"), {
                        className: "_8dpp",
                        src: a
                    })
                }
            }
            return i.jsx(b("Image.react"), {
                className: "_4i-r",
                src: a
            })
        }
        ;
        d.renderSpinner = function() {
            return !this.props.showSpinner ? null : i.jsx("span", {
                className: "_3hxf",
                children: i.jsx(b("SUISpinner.react"), {
                    background: "dark",
                    theme: b("SUIBusinessTheme")
                })
            })
        }
        ;
        d.render = function() {
            var a = this.props.suggestionType !== "suggested_reply_location" && this.props.suggestionType !== "suggested_reply_user_faq" && this.props.suggestionType !== "suggested_reply_user_faq_saved_reply" ? i.jsx("div", {
                children: i.jsx("div", {
                    className: "_4i-n",
                    children: this.getAssetURL()
                })
            }) : null;
            a = i.jsx(b("SUIButton.react"), {
                icon: a,
                label: this.props.title,
                onClick: this.props.onClick,
                style: {
                    borderRadius: "36px",
                    boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 7px 0px"
                },
                theme: b("SUIAtlasTheme"),
                uniformOverride: {
                    padding: {
                        normal: {
                            button: "10px"
                        }
                    }
                },
                width: "100%"
            });
            return i.jsxs("div", {
                className: b("joinClasses")("messengerMSuggestionButton/root", this.props.className),
                style: {
                    position: "relative"
                },
                children: [this.renderSpinner(), a]
            })
        }
        ;
        return c
    }(i.PureComponent);
    e.exports = a;
    a.defaultProps = {
        showSpinner: !1
    }
}
), null);
__d("MessengerMSuggestionView.react", ["cx", "ix", "AdsArrowedCarouselEnhanced.react", "Image.react", "Link.react", "MessengerMSuggestionButton.react", "React", "joinClasses"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.state = {
                updatingSuggestionType: null
            },
            c.onClickDismiss = function() {
                c.props.onClickDismiss && c.props.onClickDismiss()
            }
            ,
            b) || babelHelpers.assertThisInitialized(c)
        }
        c.getDerivedStateFromProps = function(a, b) {
            return babelHelpers["extends"]({}, b, {
                updatingSuggestionType: a.isUpdating ? b.updatingSuggestionType : null
            })
        }
        ;
        var d = c.prototype;
        d.onClick = function(a, b) {
            this.setState({
                updatingSuggestionType: a
            }),
            this.props.onClick(a, b)
        }
        ;
        d.renderDismissButton = function() {
            return i.jsx(b("Link.react"), {
                className: "_1cso _3-8r _3-94",
                onClick: this.onClickDismiss,
                children: i.jsx(b("Image.react"), {
                    src: h("588640")
                })
            })
        }
        ;
        d.renderSuggestionButton = function(a, c, d) {
            var e = this
              , f = this.state.updatingSuggestionType === a;
            return i.jsx(b("MessengerMSuggestionButton.react"), {
                className: "_3-8r _3-94",
                onClick: function() {
                    return e.onClick(a, c)
                },
                showSpinner: f,
                suggestionType: a,
                title: c,
                partnerAppLogo: this.props.partnerAppLogo
            }, d)
        }
        ;
        d.renderSuggestionsAsButtons = function(a) {
            var b = this;
            return Object.keys(a).reduce(function(c, d, e) {
                d = b.renderSuggestionButton(d, a[d], e);
                c.push(d);
                return c
            }, [])
        }
        ;
        d.render = function() {
            var a = this.props.suggestions;
            return !a ? null : i.jsx("div", {
                className: b("joinClasses")("_2pi7", this.props.className),
                children: i.jsxs(b("AdsArrowedCarouselEnhanced.react"), {
                    children: [this.renderSuggestionsAsButtons(a), this.renderDismissButton()]
                })
            })
        }
        ;
        return c
    }(i.PureComponent);
    e.exports = a
}
), null);
__d("XMessengerAdsLeadQualitySignalController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/commerce/messenger_monetization/lead_quality_signal/", {
        page_id: {
            type: "FBID",
            required: !0
        },
        user_id: {
            type: "FBID",
            required: !0
        },
        signal_type: {
            type: "Enum",
            required: !0,
            enumType: 1
        }
    })
}
), null);
__d("XMessengerAdDismissUpsellBannerController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/commerce/messenger_monetization/dismiss_upsell_banner/", {
        page_id: {
            type: "FBID",
            required: !0
        },
        corresponding_question: {
            type: "String"
        },
        conversion_type: {
            type: "Enum",
            required: !0,
            enumType: 1
        }
    })
}
), null);
__d("PagesManagerMessagingMSuggestionView.react", ["cx", "AsyncRequest", "BusinessSuggestedReplyActionFalcoEvent", "BusinessSuggestedReplyImpressionFalcoEvent", "CommerceInvoiceAdminActions", "FBLogger", "JSResource", "LDPSendAvailabilityDialogRoot.react", "MessengerAdsConversionExperimentTypedLogger", "MessengerAdsConversionFunnelTypedLogger", "MessengerConversionEvent", "MessengerGenericQuickBannerView.react", "MessengerMSuggestionView.react", "PagesCreateSavedResponseMutation", "PagesManagerMessagingComposerActions", "PagesManagerOmniMActions", "PagesManagerOmniMUtils", "PagesMarketingAutomationActions", "PagesMarketingAutomationContentView.react", "PagesMarketingAutomationStore", "PagesMarketingAutomationUtils", "PagesMessagingInboxActionLogger", "PagesPlatformBookingMessageViewer", "PageUpdateCustomIcebreakersMutation", "React", "ServicesAppointmentManagementDialogEnum", "ServicesEventsLogger", "ServicesMessengerAppointmentActions", "ServicesWordingUtils", "SimpleXUIDialog", "URI", "XBasicFBNuxViewController", "XMessengerAdDismissUpsellBannerController", "XPagesAutomatedResponsesController", "lazyLoadComponent", "mapArrayAtIndex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = b("React"), j = b("lazyLoadComponent")(b("JSResource")("ServicesAppointmentDialogRoot.react").__setRef("PagesManagerMessagingMSuggestionView.react")), k = 20, l = 60, m = "FAQ", n = 7543;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.state = {
                clickedSuggestionType: null,
                showCreateScheduleDialog: !1,
                isUpdating: !1,
                startTime: d.props.startTime,
                showSendAvailDialog: !1,
                suggestionHeight: 0
            },
            d.$2 = i.createRef(),
            d.$3 = function() {
                if (d.$2.current !== null && d.$2.current !== void 0) {
                    var a = d.$2.current.getBoundingClientRect().height;
                    b("PagesManagerOmniMActions").setSuggestionSpacerHeight(a + k);
                    d.setState({
                        suggestionHeight: a
                    })
                }
            }
            ,
            d.onQuickScheduleCompleted = function(a, c) {
                d.setState({
                    clickedSuggestionType: null,
                    isUpdating: !1
                }),
                c ? b("SimpleXUIDialog").show(b("ServicesWordingUtils").ERROR_TEXT, b("ServicesWordingUtils").ERROR_TITLE, function() {
                    return b("PagesManagerOmniMActions").dismissSuggestionBar()
                }) : b("PagesManagerOmniMActions").dismissSuggestionBar()
            }
            ,
            d.onDialogUpdateCompleted = function(a, c) {
                d.setState({
                    clickedSuggestionType: null,
                    isUpdating: !1
                }),
                a && b("PagesManagerOmniMActions").dismissSuggestionBar()
            }
            ,
            d.onClick = function(a, b) {
                switch (a) {
                case "create_appointment_direct":
                case "create_appointment_different_time":
                case "schedule_appointment":
                    d.onClickBookTime(a);
                    break;
                case "send_availability":
                    d.onClickSendAvailability(a);
                    break;
                case "suggested_reply_location":
                case "suggested_reply_user_faq":
                case "suggested_reply_user_faq_saved_reply":
                    d.onClickSendMessage(a, b);
                    break
                }
            }
            ,
            d.onClickDismiss = function() {
                var a;
                if (d.state.isUpdating)
                    return;
                d.log("booking_admin_intent_suggestion_bar_dismissed");
                d.setState({
                    isUpdating: !1
                });
                b("PagesManagerOmniMActions").dismissSuggestionBar();
                a = (a = d.props.conversionData) == null ? void 0 : a.conversion_type;
                b("PagesManagerOmniMUtils").isMessengerBusinessSuggestedReplyType(d.props.suggestions) && (a = b("PagesManagerOmniMUtils").convertServicesAdminMOptionsToSuggestedReplyType(Object.keys(d.props.suggestions)[0]),
                a != null && d.logSuggestedRepliesAction(a, "dismiss"));
                b("PagesManagerOmniMActions").clearMessengerConversionSuggestion(d.props.pageID, d.props.recipientID, a, d.props.messageID, d.props.senderID, null)
            }
            ,
            d.onToggleCreateScheduleDialog = function(a) {
                d.setState({
                    showCreateScheduleDialog: a
                })
            }
            ,
            d.onClickGenericQuickBannerButton = function(a, c) {
                new (b("MessengerAdsConversionFunnelTypedLogger"))().setName(b("MessengerConversionEvent").CONVERSION_QUICK_PROMOTION_CLICK).setEventSubtype(d.eventSubtypeForGenericQuickBannerButtonType(c)).setConversionType(a).setPageID(d.props.pageID).setConsumerID(d.props.recipientID).updateExtraData({
                    trigger_id: (a = d.props.conversionData) == null ? void 0 : a.trigger_id
                }).log();
                d.takeActionForGenericQuickBannerButtonType(c)
            }
            ,
            d.onToggleSendAvaililityDialog = function(a) {
                d.setState({
                    showSendAvailDialog: a
                })
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            this.$1();
            for (var a in this.props.suggestions)
                switch (a) {
                case "create_appointment_direct":
                    this.log("booking_admin_suggestion_instant_book_impression");
                    break;
                case "create_appointment_different_time":
                    this.log("booking_admin_suggestion_book_impression");
                    break;
                case "schedule_appointment":
                    this.log("booking_admin_suggestion_schedule_appointment_impression");
                    break;
                case "send_availability":
                    this.log("booking_admin_suggestion_send_availability_impression");
                    break;
                case "suggested_reply_location":
                    this.logSuggestedReplies("metaranges_suggested_reply_seen", "suggested_reply_location");
                    this.logSuggestedRepliesImpression("LOCATION");
                    break;
                case "suggested_reply_user_faq":
                    this.logSuggestedReplies("metaranges_suggested_reply_seen", "suggested_reply_user_faq");
                    this.logSuggestedRepliesImpression("USER_FAQ");
                    break;
                case "suggested_reply_user_faq_saved_reply":
                    this.logSuggestedReplies("metaranges_suggested_reply_seen", "suggested_reply_user_faq_saved_reply");
                    this.logSuggestedRepliesImpression("USER_FAQ_SAVED_REPLY");
                    break;
                case "messenger_detected_conversion":
                    this.props.suggestions.messenger_detected_conversion === "APPOINTMENT" && this.log("booking_admin_quick_promotion_suggestion_schedule_appointment_impression", "conversions_quick_promotion");
                    break
                }
        }
        ;
        d.componentDidUpdate = function() {
            this.$1()
        }
        ;
        d.$1 = function() {
            var a;
            !b("PagesManagerOmniMUtils").isMessengerQuickBannerType(this.props.suggestions) ? b("PagesManagerOmniMActions").setSuggestionSpacerHeight(l) : this.props.conversionData !== null && ((a = this.props.conversionData) == null ? void 0 : a.conversion_type) !== "GENERIC" && this.$3()
        }
        ;
        d.log = function(a, c) {
            b("ServicesEventsLogger").log(this.props.pageID, a, {
                referrerUIComponent: (a = c) != null ? a : "suggestion_bar",
                referrerUISurface: "message"
            }, {
                consumer_id: this.props.recipientID,
                referrer_surface: "message"
            })
        }
        ;
        d.logIntakeFormEvent = function(a) {
            b("ServicesEventsLogger").log(this.props.pageID, a, {
                referrerUIComponent: "qp",
                referrerUISurface: "inbox"
            }, {
                consumer_id: this.props.recipientID
            })
        }
        ;
        d.logSuggestedReplies = function(a, c) {
            new (b("MessengerAdsConversionExperimentTypedLogger"))().setName(c).setEvent(a).setMessageKey(this.props.messageID).setPageID(this.props.pageID).setReceiverID(this.props.recipientID).log()
        }
        ;
        d.logSuggestedRepliesImpression = function(a) {
            var c = this;
            b("BusinessSuggestedReplyImpressionFalcoEvent").log(function() {
                return {
                    suggestion_type: a,
                    consumer_id: c.props.recipientID,
                    page_id: c.props.pageID
                }
            })
        }
        ;
        d.logSuggestedRepliesAction = function(a, c) {
            var d = this;
            b("BusinessSuggestedReplyActionFalcoEvent").log(function() {
                return {
                    suggestion_type: a,
                    consumer_id: d.props.recipientID,
                    page_id: d.props.pageID,
                    event_subtype: c
                }
            })
        }
        ;
        d.onClickBookTime = function(a) {
            if (this.state.isUpdating)
                return;
            this.setState({
                clickedSuggestionType: a,
                isUpdating: !1
            });
            this.onToggleCreateScheduleDialog(!0)
        }
        ;
        d.onClickSendAvailability = function(a) {
            if (this.state.isUpdating)
                return;
            this.setState({
                clickedSuggestionType: a,
                isUpdating: !1
            });
            this.onToggleSendAvaililityDialog(!0)
        }
        ;
        d.onClickSendMessage = function(a, c) {
            if (this.state.isUpdating)
                return;
            var d = this.props.pageID;
            this.logSuggestedReplies("metaranges_suggested_reply_clicked", a);
            var e = b("PagesManagerOmniMUtils").convertServicesAdminMOptionsToSuggestedReplyType(a);
            e != null && this.logSuggestedRepliesAction(e, "confirm");
            b("PagesManagerOmniMActions").sendMessageWithSuggestedReply(a, d, c, this.props.threadID, this.onQuickScheduleCompleted);
            b("PagesManagerOmniMActions").clearMessengerConversionSuggestion(this.props.pageID, this.props.recipientID, e, this.props.messageID, this.props.senderID, null)
        }
        ;
        d.onClickPurchaseConfirmationButton = function() {
            var a;
            b("CommerceInvoiceAdminActions").toggleActionsDialog(!0, null, "confirm_payment", "quick_promotion_map");
            this.dismissQuickBanner((a = this.props.conversionData) == null ? void 0 : a.conversion_type, null)
        }
        ;
        d.onClickAppointmentBookingButton = function() {
            var a;
            a = (a = this.props.conversionData) == null ? void 0 : a.timestamp;
            a !== null && this.setState({
                startTime: a
            });
            b("ServicesMessengerAppointmentActions").toggleDialog(!0, this.state.clickedSuggestionType ? {
                m_suggestion_type: this.state.clickedSuggestionType
            } : null, {
                referrerUIComponent: "conversions_quick_promotion",
                referrerUISurface: "message"
            }, this.state.startTime, this.onDialogUpdateCompleted);
            this.dismissQuickBanner((a = this.props.conversionData) == null ? void 0 : a.conversion_type, null)
        }
        ;
        d.onClickMarkLeadAsGood = function() {
            b("PagesManagerOmniMActions").messengerConversionQPMarkLeadQuality(this.props.pageID, this.props.recipientID, "GOOD_LEAD"),
            this.dismissQuickBanner("LEAD_QUALITY_SIGNAL", null)
        }
        ;
        d.onClickMarkLeadAsBad = function() {
            b("PagesManagerOmniMActions").messengerConversionQPMarkLeadQuality(this.props.pageID, this.props.recipientID, "BAD_LEAD"),
            this.dismissQuickBanner("LEAD_QUALITY_SIGNAL", null)
        }
        ;
        d.onClickMarkLeadXOutButton = function() {
            b("PagesManagerOmniMActions").messengerConversionQPMarkLeadQuality(this.props.pageID, this.props.recipientID, "DISMISS"),
            this.dismissQuickBanner("LEAD_QUALITY_SIGNAL", null)
        }
        ;
        d.updateIcebreakers = function(a, c) {
            var d = b("PagesMarketingAutomationStore").getIcebreakers();
            if (d.every(function(b) {
                return b.custom_question !== a
            })) {
                var e = {
                    custom_question: a,
                    response_ctas: [],
                    response_media_attachment: null,
                    saved_response: c,
                    should_show_in_menu: d.length < 4
                };
                e = d.concat(e)
            } else {
                var f = d.findIndex(function(b) {
                    return b.custom_question === a
                });
                e = b("mapArrayAtIndex")(d, f, function(b) {
                    return {
                        custom_question: a,
                        response_ctas: b.response_ctas,
                        response_media_attachment: b.response_media_attachment,
                        saved_response: c,
                        should_show_in_menu: (b = b.should_show_in_menu) != null ? b : !1
                    }
                })
            }
            d = b("PagesMarketingAutomationUtils").shuffleDemoIcebreakers(e);
            b("PagesMarketingAutomationActions").updateIcebreakerDemoIndices(d);
            b("PagesMarketingAutomationActions").updateIcebreakers(e);
            f = {
                icebreaker_question_answer_pairs: e
            };
            b("PageUpdateCustomIcebreakersMutation").commit({
                data: f
            })
        }
        ;
        d.onClickAutomatedResponseUpsellSavingButton = function() {
            var a, c = this, d = (a = this.props.conversionData) == null ? void 0 : (a = a.upsell_specific_data) == null ? void 0 : a.icebreaker_message, e = (a = this.props.conversionData) == null ? void 0 : (a = a.upsell_specific_data) == null ? void 0 : a.page_reply;
            !!e && !!d && (b("PagesMarketingAutomationContentView.react").fetchAndStoreIcebreakers(this.props.pageID, function() {
                c.updateIcebreakers(d, e)
            }),
            b("PagesManagerMessagingComposerActions").setShouldShowAutomatedResponseUpsellToast(!0));
            this.dismissQuickBanner((a = this.props.conversionData) == null ? void 0 : a.conversion_type, null)
        }
        ;
        d.onClickAutomatedResponseUpsellNotNowButton = function() {
            var a;
            a = b("XMessengerAdDismissUpsellBannerController").getURIBuilder().setFBID("page_id", this.props.pageID).setString("corresponding_question", (a = this.props.conversionData) == null ? void 0 : (a = a.upsell_specific_data) == null ? void 0 : a.icebreaker_message).setEnum("conversion_type", (a = this.props.conversionData) == null ? void 0 : a.conversion_type).getURI();
            new (b("AsyncRequest"))().setURI(a).send();
            this.dismissQuickBanner((a = this.props.conversionData) == null ? void 0 : a.conversion_type, null)
        }
        ;
        d.onClickSavedRepliesUpsellSavingButton = function() {
            var a, c;
            a = (a = this.props.conversionData) == null ? void 0 : (a = a.upsell_specific_data) == null ? void 0 : a.page_reply;
            c = (c = this.props.conversionData) == null ? void 0 : (c = c.upsell_specific_data) == null ? void 0 : c.icebreaker_message;
            !!a && !!c && (b("PagesCreateSavedResponseMutation").commit(this.props.pageID, "", a, null, c, "UPSELL_QP", function() {}, function() {}),
            b("PagesManagerMessagingComposerActions").setShouldShowSavedReplyUpsellNUX(!0),
            b("PagesManagerMessagingComposerActions").setShouldShowSavedReplyUpsellToast(!0),
            b("PagesMessagingInboxActionLogger").logUpdateSavedReply(null, a, null, m, null, null, c));
            b("PagesManagerOmniMActions").dismissSuggestionBar()
        }
        ;
        d.onClickSavedRepliesUpsellEditingButton = function() {
            !!this.props.conversionData && !!this.props.conversionData.upsell_specific_data && b("PagesManagerOmniMActions").triggerSavedRepliesUpsell(this.props.conversionData.upsell_specific_data),
            b("PagesManagerOmniMActions").dismissSuggestionBar()
        }
        ;
        d.onClickSavedRepliesUpsellXoutButton = function() {
            var a;
            a = b("XMessengerAdDismissUpsellBannerController").getURIBuilder().setFBID("page_id", this.props.pageID).setString("corresponding_question", (a = this.props.conversionData) == null ? void 0 : (a = a.upsell_specific_data) == null ? void 0 : a.icebreaker_message).setEnum("conversion_type", (a = this.props.conversionData) == null ? void 0 : a.conversion_type).getURI();
            new (b("AsyncRequest"))().setURI(a).send();
            this.dismissQuickBanner((a = this.props.conversionData) == null ? void 0 : a.conversion_type, null)
        }
        ;
        d.onClickConfirmOrderPrimaryButton = function() {
            var a, c = this;
            this.dismissQuickBanner((a = this.props.conversionData) == null ? void 0 : a.conversion_type, function() {
                b("PagesManagerOmniMActions").messengerConversionQPConfirmOrder(c.props.pageID, c.props.recipientID)
            })
        }
        ;
        d.onClickMarkAsOrderAdsInsightsXOutButton = function() {
            var a = b("XBasicFBNuxViewController").getURIBuilder().setInt("nux_id", n).getURI();
            new (b("AsyncRequest"))().setURI(a).send();
            this.dismissQuickBanner((a = this.props.conversionData) == null ? void 0 : a.conversion_type, null)
        }
        ;
        d.onClickConsumerQuestionGetStartedButton = function() {
            var a;
            this.logIntakeFormEvent("services_organic_intake_form_setup_enter_flow");
            (h || (h = b("URI"))).goURIOnNewWindow(b("XPagesAutomatedResponsesController").getURIBuilder().setString("page_token", this.props.pageID).setEnum("automation", "organic_intake_form").setEnum("services_referrer", "qp").setEnum("services_referrer_surface", "inbox").setBool("use_intake_form_setup_experience", !0).getURI());
            this.dismissQuickBanner((a = this.props.conversionData) == null ? void 0 : a.conversion_type, null)
        }
        ;
        d.eventSubtypeForGenericQuickBannerButtonType = function(a) {
            switch (a) {
            case "BUSINESS_PURCHASE_CONFIRM":
            case "APPOINTMENT_BOOK":
            case "CONFIRM_ORDER_CONFIRM":
            case "AUTOMATED_RESPONSE_UPSELL_SAVE":
            case "SAVED_REPLIES_UPSELL_SAVE":
            case "CONSUMER_QUESTION_GET_STARTED":
                return "confirm";
            case "SAVED_REPLIES_UPSELL_EDIT":
                return "edit";
            case "DISMISS":
            case "AUTOMATED_RESPONSE_UPSELL_NOT_NOW":
            case "ADS_INSIGHTS_MARK_AS_ORDER_DISMISS":
            case "SAVED_REPLIES_UPSELL_XOUT":
                return "dismiss";
            default:
                return ""
            }
        }
        ;
        d.takeActionForGenericQuickBannerButtonType = function(a) {
            switch (a) {
            case "BUSINESS_PURCHASE_CONFIRM":
                this.onClickPurchaseConfirmationButton();
                break;
            case "APPOINTMENT_BOOK":
                this.onClickAppointmentBookingButton();
                break;
            case "CONFIRM_ORDER_CONFIRM":
                this.onClickConfirmOrderPrimaryButton();
                break;
            case "ADS_INSIGHTS_MARK_AS_ORDER_DISMISS":
                this.onClickMarkAsOrderAdsInsightsXOutButton();
                break;
            case "CONSUMER_QUESTION_GET_STARTED":
                this.onClickConsumerQuestionGetStartedButton();
                break;
            case "AUTOMATED_RESPONSE_UPSELL_SAVE":
                this.onClickAutomatedResponseUpsellSavingButton();
                break;
            case "AUTOMATED_RESPONSE_UPSELL_NOT_NOW":
                this.onClickAutomatedResponseUpsellNotNowButton();
                break;
            case "SAVED_REPLIES_UPSELL_SAVE":
                this.onClickSavedRepliesUpsellSavingButton();
                break;
            case "SAVED_REPLIES_UPSELL_EDIT":
                this.onClickSavedRepliesUpsellEditingButton();
                break;
            case "SAVED_REPLIES_UPSELL_XOUT":
                this.onClickSavedRepliesUpsellXoutButton();
                break;
            case "LEAD_QUALITY_SIGNAL_GOOD_LEAD":
                this.onClickMarkLeadAsGood();
                break;
            case "LEAD_QUALITY_SIGNAL_BAD_LEAD":
                this.onClickMarkLeadAsBad();
                break;
            case "LEAD_QUALITY_SIGNAL_XOUT":
                this.onClickMarkLeadXOutButton();
                break;
            case "DISMISS":
            default:
                this.dismissQuickBanner((a = this.props.conversionData) == null ? void 0 : a.conversion_type, null)
            }
        }
        ;
        d.dismissQuickBanner = function(a, c) {
            var d;
            ((d = this.props.conversionData) == null ? void 0 : d.conversion_type) === "CONSUMER_QUESTION" && this.log("services_organic_intake_form_qp_cancel");
            b("PagesManagerOmniMActions").dismissSuggestionBar();
            b("PagesManagerOmniMActions").clearMessengerConversionSuggestion(this.props.pageID, this.props.recipientID, a, this.props.messageID, this.props.senderID, c)
        }
        ;
        d.showSendAvailabilityDialog = function() {
            var a = this;
            return !this.state.showSendAvailDialog ? null : i.jsx(i.Suspense, {
                fallback: null,
                children: i.jsx(b("LDPSendAvailabilityDialogRoot.react"), {
                    causalElementRef: function() {
                        return a
                    },
                    onSubmitCompleted: this.onDialogUpdateCompleted,
                    onToggle: this.onToggleSendAvaililityDialog,
                    pageID: this.props.pageID,
                    referrer: "Send Availability MSuggestion",
                    shown: this.state.showSendAvailDialog,
                    userID: this.props.recipientID
                })
            })
        }
        ;
        d.renderCreateScheduleDialog = function() {
            var a = this;
            if (!this.state.showCreateScheduleDialog)
                return null;
            var c = this.state.clickedSuggestionType ? {
                m_suggestion_type: this.state.clickedSuggestionType
            } : null;
            return i.jsx(i.Suspense, {
                fallback: null,
                children: i.jsx(j, {
                    additionalLoggingData: c,
                    causalElementRef: function() {
                        return a
                    },
                    dialogType: b("ServicesAppointmentManagementDialogEnum").CREATE_ANOTHER_APPOINTMENT,
                    jobSearchSurface: "messenger",
                    onToggle: this.onToggleCreateScheduleDialog,
                    onUpdateCompleted: this.onDialogUpdateCompleted,
                    pageID: this.props.pageID,
                    referrerData: {
                        referrerUIComponent: "suggestion_bar_book_bubble",
                        referrerUISurface: "message"
                    },
                    showMessengerButton: !1,
                    shown: this.state.showCreateScheduleDialog,
                    startTime: this.state.startTime,
                    userID: this.props.recipientID,
                    viewer: b("PagesPlatformBookingMessageViewer").ADMIN
                })
            })
        }
        ;
        d.render = function() {
            var a = b("PagesManagerOmniMUtils").isMessengerQuickBannerType(this.props.suggestions);
            if (a) {
                a = this.props.conversionData;
                if (a != null && (a == null ? void 0 : a.conversion_type) !== null) {
                    a = a.conversion_type === "GENERIC" ? i.jsx(b("MessengerGenericQuickBannerView.react"), {
                        consumerID: this.props.recipientID,
                        conversionData: a,
                        onButtonClick: this.onClickGenericQuickBannerButton,
                        onInformationFetched: this.$3,
                        pageID: this.props.pageID,
                        topPosition: this.state.suggestionHeight + k
                    }) : null;
                    if (a === null) {
                        var c;
                        new (b("MessengerAdsConversionExperimentTypedLogger"))().setName("mark_as_order_banner_debugging").setErrorReason((c = this.props.conversionData) == null ? void 0 : c.conversion_type).log()
                    }
                    return i.jsxs("div", {
                        className: this.props.className,
                        "data-testid": void 0,
                        ref: this.$2,
                        children: [this.renderCreateScheduleDialog(), a]
                    })
                } else {
                    b("FBLogger")("click_to_messenger_ads").mustfix("Invalid Messenger conversion data.");
                    return i.jsx("div", {})
                }
            }
            return i.jsxs("div", {
                className: this.props.className,
                children: [this.renderCreateScheduleDialog(), this.showSendAvailabilityDialog(), i.jsx(b("MessengerMSuggestionView.react"), {
                    className: "_4-2j",
                    isUpdating: this.state.isUpdating,
                    onClick: this.onClick,
                    onClickDismiss: this.onClickDismiss,
                    partnerAppLogo: this.props.partnerAppLogo,
                    suggestions: this.props.suggestions
                })]
            })
        }
        ;
        return c
    }(i.PureComponent);
    e.exports = a
}
), null);
