if (self.CavalryLogger) {
    CavalryLogger.start_js(["l28ZV"]);
}

__d("LocalTriggerEventsTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:LocalTriggerEventsLoggerConfig", this.$1, b("Banzai").BASIC, a)
        }
        ;
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:LocalTriggerEventsLoggerConfig", this.$1, b("Banzai").VITAL, a)
        }
        ;
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:LocalTriggerEventsLoggerConfig", this.$1, {
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
        c.setAttachmentType = function(a) {
            this.$1.attachment_type = a;
            return this
        }
        ;
        c.setAuthorType = function(a) {
            this.$1.author_type = a;
            return this
        }
        ;
        c.setCategoryType = function(a) {
            this.$1.category_type = a;
            return this
        }
        ;
        c.setClickDestination = function(a) {
            this.$1.click_destination = a;
            return this
        }
        ;
        c.setEntryPoint = function(a) {
            this.$1.entry_point = a;
            return this
        }
        ;
        c.setEventName = function(a) {
            this.$1.event_name = a;
            return this
        }
        ;
        c.setExperimentCondition = function(a) {
            this.$1.experiment_condition = a;
            return this
        }
        ;
        c.setExperimentName = function(a) {
            this.$1.experiment_name = a;
            return this
        }
        ;
        c.setMInterface = function(a) {
            this.$1.m_interface = a;
            return this
        }
        ;
        c.setObjectType = function(a) {
            this.$1.object_type = a;
            return this
        }
        ;
        c.setPivotType = function(a) {
            this.$1.pivot_type = a;
            return this
        }
        ;
        c.setPlaceID = function(a) {
            this.$1.place_id = a;
            return this
        }
        ;
        c.setPosition = function(a) {
            this.$1.position = a;
            return this
        }
        ;
        c.setPostID = function(a) {
            this.$1.post_id = a;
            return this
        }
        ;
        c.setPostType = function(a) {
            this.$1.post_type = a;
            return this
        }
        ;
        c.setUnitDeliveryMechanism = function(a) {
            this.$1.unit_delivery_mechanism = a;
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
        attachment_type: !0,
        author_type: !0,
        category_type: !0,
        click_destination: !0,
        entry_point: !0,
        event_name: !0,
        experiment_condition: !0,
        experiment_name: !0,
        m_interface: !0,
        object_type: !0,
        pivot_type: !0,
        place_id: !0,
        position: !0,
        post_id: !0,
        post_type: !0,
        unit_delivery_mechanism: !0
    };
    e.exports = a
}
), null);
__d("LocationStoryTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:LocationStoryLoggerConfig", this.$1, b("Banzai").BASIC, a)
        }
        ;
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:LocationStoryLoggerConfig", this.$1, b("Banzai").VITAL, a)
        }
        ;
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:LocationStoryLoggerConfig", this.$1, {
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
        c.setAnalyticsEvent = function(a) {
            this.$1.analytics_event = a;
            return this
        }
        ;
        c.setAttachedStoryAttachmentType = function(a) {
            this.$1.attached_story_attachment_type = a;
            return this
        }
        ;
        c.setClickDestination = function(a) {
            this.$1.click_destination = a;
            return this
        }
        ;
        c.setClickTarget = function(a) {
            this.$1.click_target = a;
            return this
        }
        ;
        c.setComposerSource = function(a) {
            this.$1.composer_source = a;
            return this
        }
        ;
        c.setCtaType = function(a) {
            this.$1.cta_type = a;
            return this
        }
        ;
        c.setEvent = function(a) {
            this.$1.event = a;
            return this
        }
        ;
        c.setMInterface = function(a) {
            this.$1.m_interface = a;
            return this
        }
        ;
        c.setMessage = function(a) {
            this.$1.message = a;
            return this
        }
        ;
        c.setPlaceID = function(a) {
            this.$1.place_id = a;
            return this
        }
        ;
        c.setStoryAttachmentType = function(a) {
            this.$1.story_attachment_type = a;
            return this
        }
        ;
        c.setStoryAuthorID = function(a) {
            this.$1.story_author_id = a;
            return this
        }
        ;
        c.setStoryID = function(a) {
            this.$1.story_id = a;
            return this
        }
        ;
        c.setTargetID = function(a) {
            this.$1.target_id = a;
            return this
        }
        ;
        c.setTimeToLoad = function(a) {
            this.$1.time_to_load = a;
            return this
        }
        ;
        c.setViewDuration = function(a) {
            this.$1.view_duration = a;
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
        analytics_event: !0,
        attached_story_attachment_type: !0,
        click_destination: !0,
        click_target: !0,
        composer_source: !0,
        cta_type: !0,
        event: !0,
        m_interface: !0,
        message: !0,
        place_id: !0,
        story_attachment_type: !0,
        story_author_id: !0,
        story_id: !0,
        target_id: !0,
        time_to_load: !0,
        view_duration: !0
    };
    e.exports = a
}
), null);
__d("OrganicIntakeFormMutationUtilsMaybeTriggerFormMutation.graphql", [], (function(a, b, c, d, e, f) {
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
            concreteType: "MaybeTriggerOrganicIntakeFormResponsePayload",
            kind: "LinkedField",
            name: "maybe_trigger_organic_intake_form",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "success_create",
                storageKey: null
            }],
            storageKey: null
        }];
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "OrganicIntakeFormMutationUtilsMaybeTriggerFormMutation",
                selections: b,
                type: "Mutation",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "OrganicIntakeFormMutationUtilsMaybeTriggerFormMutation",
                selections: b
            },
            params: {
                id: "2637595426284729",
                metadata: {},
                name: "OrganicIntakeFormMutationUtilsMaybeTriggerFormMutation",
                operationKind: "mutation",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("OrganicIntakeFormMutationUtilsTriggerFormMutation.graphql", [], (function(a, b, c, d, e, f) {
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
            concreteType: "TriggerOrganicIntakeFormResponsePayload",
            kind: "LinkedField",
            name: "trigger_organic_intake_form",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "success_create",
                storageKey: null
            }],
            storageKey: null
        }];
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "OrganicIntakeFormMutationUtilsTriggerFormMutation",
                selections: b,
                type: "Mutation",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "OrganicIntakeFormMutationUtilsTriggerFormMutation",
                selections: b
            },
            params: {
                id: "2297975886984592",
                metadata: {},
                name: "OrganicIntakeFormMutationUtilsTriggerFormMutation",
                operationKind: "mutation",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("CustomCTALogger", ["Banzai", "gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        logVital: function(a) {
            if (b("gkx")("952891"))
                return;
            b("Banzai").post("page_custom_cta_logger", a, b("Banzai").VITAL)
        },
        log: function(a) {
            if (b("gkx")("952891"))
                return;
            b("Banzai").post("page_custom_cta_logger", a)
        }
    };
    e.exports = a
}
), null);
__d("PageCallToActionButton.react", ["cx", "PageCallToActionRef", "PagesButton.react", "React", "XUIButton.react", "joinClasses"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props.className
              , c = this.props.icon
              , d = this.props.label
              , e = this.props.testID;
            if (!d)
                return null;
            if (this.$1())
                return h.jsx("div", {
                    className: a,
                    "data-hovercard": this.props.hovercardURL,
                    "data-testid": void 0,
                    onClick: this.props.onClick,
                    onMouseEnter: this.props.onMouseEnter,
                    onMouseLeave: this.props.onMouseLeave,
                    ref: this.props.ref,
                    role: "button",
                    tabIndex: "0",
                    children: d
                });
            if (this.$2()) {
                return h.jsx(b("PagesButton.react"), {
                    className: a,
                    color: "fbblue",
                    "data-hovercard": this.props.hovercardURL,
                    "data-testid": void 0,
                    disabled: (e = (e = this.props) == null ? void 0 : e.disabled) != null ? e : !1,
                    fill: !0,
                    image: this.props.displayIconInPagesButton ? this.props.icon : void 0,
                    label: d,
                    onClick: this.props.onClick,
                    onMouseEnter: this.props.onMouseEnter,
                    onMouseLeave: this.props.onMouseLeave,
                    ref: this.props.ref,
                    slim: this.props.surface === b("PageCallToActionRef").PAGES_ACTIONS_UNIT_SURFACE
                })
            }
            this.$3() ? a = b("joinClasses")("_4jy3 _51sy", a) : this.props.surface === b("PageCallToActionRef").LED_FEED_UNIT ? a = b("joinClasses")("_4jy4 _51sy", a) : this.props.surface === b("PageCallToActionRef").PAGES_ACTION_BAR_CHANNEL && this.props.label === "Start Order" ? a = b("joinClasses")("_4jy4", a) : this.$4() || (a = b("joinClasses")("_4jy4 _9c6", a));
            if (this.props.surface === b("PageCallToActionRef").UNOWNED_PAGE_COVER) {
                a = b("joinClasses")("_2hqv", a);
                return h.jsx(b("XUIButton.react"), {
                    className: a,
                    "data-hovercard": this.props.hovercardURL,
                    "data-testid": void 0,
                    label: d,
                    onClick: this.props.onClick,
                    onMouseEnter: this.props.onMouseEnter,
                    onMouseLeave: this.props.onMouseLeave,
                    ref: this.props.ref,
                    use: "confirm"
                })
            }
            this.props.surface === b("PageCallToActionRef").PAGES_COVER_AREA_SURFACE && (c = null);
            if (this.props.surface === b("PageCallToActionRef").GROUPS_RHC) {
                a = b("joinClasses")("_39y5", a);
                return h.jsx(b("XUIButton.react"), {
                    className: a,
                    "data-hovercard": this.props.hovercardURL,
                    "data-testid": void 0,
                    image: c,
                    label: d,
                    onClick: this.props.onClick,
                    onMouseEnter: this.props.onMouseEnter,
                    onMouseLeave: this.props.onMouseLeave,
                    ref: this.props.ref,
                    use: "confirm"
                })
            }
            return h.jsx(b("XUIButton.react"), {
                className: a ? a : "",
                "data-hovercard": this.props.hovercardURL,
                "data-testid": void 0,
                image: c,
                label: d,
                onClick: this.props.onClick,
                onMouseEnter: this.props.onMouseEnter,
                onMouseLeave: this.props.onMouseLeave,
                ref: this.props.ref,
                size: "large"
            })
        }
        ;
        d.$4 = function() {
            return new Set([b("PageCallToActionRef").PAGES_ACTION_BAR_CHANNEL, b("PageCallToActionRef").PAGES_COVER_AREA_SURFACE, b("PageCallToActionRef").GROUPS_RHC]).has(this.props.surface)
        }
        ;
        d.$3 = function() {
            var a;
            return new Set([(a = b("PageCallToActionRef")).FEED_STORY_SEARCH, a.FEED_STORY_ATTACHMENT, a.HOVER_CARD_SURFACE, a.PAGE_PLUGIN_SURFACE, a.SERVICES_SEO_PAGES, a.SEARCH_ENTITY_CARD, a.PAGES_SAVED_SECTION, a.PAGES_SHARE_ATTACHMENT, a.PAGES_MINUTIAE_ATTACHMENT]).has(this.props.surface)
        }
        ;
        d.$1 = function() {
            return new Set([b("PageCallToActionRef").ADMIN_MENU_TEST_LINK]).has(this.props.surface)
        }
        ;
        d.$2 = function() {
            return new Set([b("PageCallToActionRef").PAGE_PRESENCE_LHS_CARD, b("PageCallToActionRef").PAGES_ACTIONS_UNIT_SURFACE, b("PageCallToActionRef").DYNAMIC_HOVER_CARD_SURFACE]).has(this.props.surface)
        }
        ;
        return c
    }(h.Component);
    e.exports = a
}
), null);
__d("PageCallToActionButtonActionTypes", ["keyMirrorRecursive"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("keyMirrorRecursive")({
        DISABLE_AUTO_OPEN: "",
        SET_LOADING_MODE: "",
        UNIT_DATA_LOADED: ""
    });
    c = a;
    e.exports = c
}
), null);
__d("PageCallToActionDispatcher", ["ExplicitRegistrationReactDispatcher"], (function(a, b, c, d, e, f) {
    "use strict";
    a = new (b("ExplicitRegistrationReactDispatcher"))({
        strict: !0
    });
    e.exports = a
}
), null);
__d("PageCallToActionButtonActions", ["PageCallToActionButtonActionTypes", "PageCallToActionDispatcher"], (function(a, b, c, d, e, f) {
    "use strict";
    f.disableAutoOpen = a;
    f.setLoadingMode = c;
    f.setUnitData = d;
    function a(a) {
        b("PageCallToActionDispatcher").dispatch({
            type: b("PageCallToActionButtonActionTypes").DISABLE_AUTO_OPEN,
            ctaID: a
        })
    }
    function c(a, c) {
        b("PageCallToActionDispatcher").dispatch({
            type: b("PageCallToActionButtonActionTypes").SET_LOADING_MODE,
            ctaID: a,
            data: {
                loading: c
            }
        })
    }
    function d(a, c) {
        b("PageCallToActionDispatcher").dispatch({
            type: b("PageCallToActionButtonActionTypes").UNIT_DATA_LOADED,
            ctaID: a,
            data: babelHelpers["extends"]({}, c)
        })
    }
}
), null);
__d("OrganicIntakeFormMutationUtils", ["Promise", "RelayFBEnvironment", "RelayModern", "OrganicIntakeFormMutationUtilsTriggerFormMutation.graphql", "OrganicIntakeFormMutationUtilsMaybeTriggerFormMutation.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    f.triggerOrganicIntakeForm = a;
    f.maybeTriggerOrganicIntakeForm = c;
    var g, h, i = g !== void 0 ? g : g = b("OrganicIntakeFormMutationUtilsTriggerFormMutation.graphql"), j = h !== void 0 ? h : h = b("OrganicIntakeFormMutationUtilsMaybeTriggerFormMutation.graphql");
    function a(a, c, d) {
        return new (b("Promise"))(function(a, e) {
            b("RelayModern").commitMutation(b("RelayFBEnvironment"), {
                mutation: i,
                variables: {
                    input: {
                        page_id: c,
                        referrer_ui_component: d
                    }
                },
                onCompleted: function(b, c) {
                    c ? e() : a()
                }
            })
        }
        )
    }
    function c(a, c) {
        return new (b("Promise"))(function(a, d) {
            b("RelayModern").commitMutation(b("RelayFBEnvironment"), {
                mutation: j,
                variables: {
                    input: {
                        page_id: c,
                        referrer_ui_component: "message"
                    }
                },
                onCompleted: function(b, c) {
                    c ? d() : a()
                }
            })
        }
        )
    }
}
), null);
__d("PagesLoggerTBLMigrationUtil", [], (function(a, b, c, d, e, f) {
    f.convertCTAToActionType = a;
    function a(a) {
        if (a === null || a === void 0)
            return null;
        switch (a) {
        case "BOOK_APPOINTMENT":
            return "legacy_cta_book_appointment";
        case "BOOK_NOW":
            return "legacy_cta_book_now";
        case "BUY_TICKETS":
            return "legacy_cta_buy_tickets";
        case "CALL_NOW":
            return "legacy_cta_call_now";
        case "CHARITY_DONATE":
            return "legacy_cta_charity_donate";
        case "CONTACT_US":
            return "legacy_cta_contact_us";
        case "DONATE_NOW":
            return "legacy_cta_donate_now";
        case "EMAIL":
            return "legacy_cta_email";
        case "GET_DIRECTIONS":
            return "legacy_cta_get_directions";
        case "GET_OFFER":
            return "legacy_cta_get_offer";
        case "GET_OFFER_VIEW":
            return "legacy_cta_get_offer_view";
        case "LEARN_MORE":
            return "legacy_cta_learn_more";
        case "LISTEN":
            return "legacy_cta_listen";
        case "MAKE_RESERVATION":
            return "legacy_cta_make_reservation";
        case "MESSAGE":
            return "legacy_cta_message";
        case "":
            return "legacy_cta_add_button";
        case "OPEN_APP":
            return "legacy_cta_open_app";
        case "ORDER_NOW":
            return "legacy_cta_order_now";
        case "PLAY_NOW":
            return "legacy_cta_play_now";
        case "READ_ARTICLES":
            return "legacy_cta_read_articles";
        case "REQUEST_APPOINTMENT":
            return "legacy_cta_request_appointment";
        case "REQUEST_QUOTE":
            return "legacy_cta_request_quote";
        case "SHOP_NOW":
            return "legacy_cta_shop_now";
        case "SIGN_UP":
            return "legacy_cta_sign_up";
        case "VIDEO_CALL":
            return "legacy_cta_video_call";
        case "VISIT_GROUP":
            return "legacy_cta_visit_group";
        case "WATCH_NOW":
            return "legacy_cta_watch_now";
        case "WHATSAPP_MESSAGE":
            return "legacy_cta_whatsapp_message";
        case "PLAY_MUSIC":
            return "legacy_cta_play_music";
        case "GET_EVENT_TICKETS":
            return "legacy_cta_get_event_tickets";
        case "SHOP_ON_FACEBOOK":
            return "legacy_cta_shop_on_facebook";
        case "LOCAL_DEV_PLATFORM":
            return "legacy_cta_local_dev_platform";
        case "INTERESTED":
            return "legacy_cta_interested"
        }
        return null
    }
}
), null);
__d("PagesPageActionClickFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744141");
    c = b("FalcoLoggerInternal").create("pages_page_action_click", a);
    e.exports = c
}
), null);
__d("PageCallToActionHovercard.react", ["cx", "fbt", "CustomCTALogger", "Image.react", "Layout.react", "Link.react", "PageCallToActionRef", "PagesLogger", "PagesLoggerEventEnum", "PagesLoggerEventTargetEnum", "PagesLoggerTBLMigrationUtil", "PagesPageActionClickFalcoEvent", "React"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("Layout.react").Column
      , j = b("Layout.react").FillColumn
      , k = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$1 = function() {
                b("PagesLogger").log(d.props.pageID, b("PagesLoggerEventEnum").CLICK, b("PagesLoggerEventTargetEnum").PAGES_PRIMARY_CTA_BUTTON, b("PageCallToActionRef").CTA_HOVER_CARD_SURFACE, null, {
                    cta_type: d.props.cctaType,
                    cta_id: d.props.cctaID,
                    cta_target_url: d.props.url
                });
                b("CustomCTALogger").log({
                    ccta_id: d.props.cctaID,
                    ccta_type: d.props.cctaType,
                    event_type: "custom_cta_click_viewer_unit",
                    surface: b("PageCallToActionRef").CTA_HOVER_CARD_SURFACE,
                    target_url: d.props.displayUrl
                });
                var a = d.props.pageID
                  , c = b("PagesLoggerTBLMigrationUtil").convertCTAToActionType(d.props.cctaType);
                a !== null && a !== void 0 && c !== null && b("PagesPageActionClickFalcoEvent").log(function() {
                    return {
                        event_location: "page__legacy_cta_button",
                        page_id: d.props.pageID,
                        referrer: null,
                        event_data: {
                            action_id: d.props.cctaID,
                            action_type: c,
                            is_primary: !0
                        }
                    }
                })
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.render = function() {
            return k.jsx(b("Link.react"), {
                onClick: this.$1,
                href: this.props.redirectUrl,
                type: "dark",
                target: "_blank",
                className: "_18tn",
                children: k.jsx("div", {
                    className: "_18tq",
                    children: k.jsxs(b("Layout.react"), {
                        children: [k.jsx(i, {
                            className: "_18tt",
                            children: k.jsx(b("Image.react"), {
                                width: 124,
                                height: 124,
                                src: this.props.imageSrc
                            })
                        }), k.jsxs(j, {
                            className: "_18tu",
                            children: [k.jsx("div", {
                                className: "_18to",
                                children: this.props.title
                            }), k.jsx("div", {
                                className: "_18tr",
                                children: this.props.description
                            }), k.jsx("div", {
                                className: "_18ts",
                                children: h._("Khi nh\u1ea5p, b\u1ea1n s\u1ebd truy c\u1eadp URL b\u00ean ngo\u00e0i: {url name}", [h._param("url name", k.jsx("div", {
                                    children: this.props.displayUrl
                                }))])
                            })]
                        })]
                    })
                })
            })
        }
        ;
        return c
    }(k.Component);
    e.exports = a
}
), null);
__d("CctaLabels", ["fbt", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.getDeleteCTALabel = a;
    f.getPromoteCTALabel = c;
    f.getEditCTALabel = d;
    f.getDisconnectLabel = e;
    a = b("React");
    c = g._("Trang web");
    f.WEBSITE_LABEL = c;
    d = g._("iPhone");
    f.IPHONE_LABEL = d;
    e = g._("Android");
    f.ANDROID_LABEL = e;
    b = "SHOW_FLYOUT";
    f.SHOW_FLYOUT = b;
    c = g._("Th\u1eed nghi\u1ec7m n\u00fat");
    f.TEST_LABEL = c;
    d = g._("Ch\u1ec9nh s\u1eeda n\u00fat");
    f.EDIT_LABEL = d;
    e = g._("X\u00f3a n\u00fat");
    f.DELETE_LABEL = e;
    b = g._("Y\u00eau c\u1ea7u li\u00ean h\u1ec7");
    f.CONTACT_US_REQUEST_LABEL = b;
    c = g._("Ch\u1ecdn n\u00fat");
    f.CTA_SELECTOR = c;
    d = g._("Trang web");
    f.SELECTOR_OPTION_WEBSITE = d;
    e = g._("\u1ee8ng d\u1ee5ng");
    f.SELECTOR_OPTION_APP = e;
    b = g._("THI\u1ebeT L\u1eacP ANDROID");
    f.ANDROID_SECTION = b;
    c = g._("C\u00c0I \u0110\u1eb6T IOS");
    f.IOS_SECTION = c;
    d = g._("Ch\u1ecdn n\u01a1i s\u1ebd chuy\u1ec3n m\u1ecdi ng\u01b0\u1eddi \u0111\u1ebfn tr\u00ean Android");
    f.ANDROID_SECTION_TITLE = d;
    e = g._("B\u1ea1n hi\u1ec7n \u0111\u00e3 th\u00eam n\u00fat n\u00e0y v\u00e0o Trang Facebook, b\u1ea1n c\u00f3 th\u1ec3 qu\u1ea3ng c\u00e1o n\u00fat.");
    f.CREATE_SUCCESS_DIALOG_BODY = e;
    b = g._("Th\u00eam n\u00fat v\u00e0o Trang");
    f.CREATE_CALL_TO_ACTION_WEBSITE = b;
    c = g._("Trang web");
    f.WEB_LINK_INPUT_LABEL = c;
    d = g._("V\u00ed d\u1ee5: {url}", [g._param("url", "http://www.mywebsite.com")]);
    f.WEB_LINK_INPUT_PLACEHOLDER = d;
    e = g._("Thi\u1ebft l\u1eadp li\u00ean k\u1ebft \u0111\u1ebfn \u1ee9ng d\u1ee5ng?");
    f.APP_TOGGLE_LABEL = e;
    b = g._("Kh\u00e1ch truy c\u1eadp \u0111ang s\u1eed d\u1ee5ng iOS s\u1ebd \u0111\u01b0\u1ee3c chuy\u1ec3n t\u1edbi tr\u00ean web tr\u00ean.");
    f.IOS_WEBSITE_DESTINATION_TOOLTIP = b;
    c = g._("Kh\u00e1ch truy c\u1eadp \u0111ang s\u1eed d\u1ee5ng Android s\u1ebd \u0111\u01b0\u1ee3c chuy\u1ec3n t\u1edbi trang web tr\u00ean.");
    f.ANDROID_WEBSITE_DESTINATION_TOOLTIP = c;
    d = g._("Kh\u00e1ch truy c\u1eadp s\u1eed d\u1ee5ng iOS s\u1ebd \u0111\u01b0\u1ee3c chuy\u1ec3n t\u1edbi li\u00ean k\u1ebft \u1ee9ng d\u1ee5ng \u0111\u01b0\u1ee3c nh\u1eadp b\u00ean d\u01b0\u1edbi.");
    f.IOS_APP_DESTINATION_TOOLTIP = d;
    e = g._("Kh\u00e1ch truy c\u1eadp \u0111ang s\u1eed d\u1ee5ng Android s\u1ebd \u0111\u01b0\u1ee3c chuy\u1ec3n t\u1edbi li\u00ean k\u1ebft \u1ee9ng d\u1ee5ng \u0111\u01b0\u1ee3c nh\u1eadp b\u00ean d\u01b0\u1edbi.");
    f.ANDROID_APP_DESTINATION_TOOLTIP = e;
    b = g._("Ch\u1ecdn n\u01a1i s\u1ebd chuy\u1ec3n m\u1ecdi ng\u01b0\u1eddi \u0111\u1ebfn tr\u00ean iOS");
    f.IOS_SECTION_TITLE = b;
    c = g._("Li\u00ean k\u1ebft s\u00e2u cho \u1ee9ng d\u1ee5ng tr\u00ean iOS");
    f.IOS_APP_LINK_INPUT_LABEL = c;
    d = g._("Li\u00ean k\u1ebft s\u00e2u cho \u1ee9ng d\u1ee5ng tr\u00ean Android");
    f.ANDROID_APP_LINK_INPUT_LABEL = d;
    e = g._("Li\u00ean k\u1ebft \u0111\u1ebfn trang web ho\u1eb7c App Store");
    f.IOS_BACKUP_INPUT_LABEL = e;
    b = g._("Li\u00ean k\u1ebft t\u1edbi trang web ho\u1eb7c C\u1eeda h\u00e0ng Play");
    f.ANDROID_BACKUP_INPUT_LABEL = b;
    c = g._("N\u1ebfu mu\u1ed1n, b\u1ea1n c\u00f3 th\u1ec3 thi\u1ebft l\u1eadp li\u00ean k\u1ebft s\u00e2u \u0111\u1ebfn \u1ee9ng d\u1ee5ng cho ng\u01b0\u1eddi d\u00f9ng iOS ho\u1eb7c Android. Vi\u1ec7c n\u00e0y ch\u1ec9 c\u1ea7n thi\u1ebft n\u1ebfu b\u1ea1n c\u00f3 \u1ee9ng d\u1ee5ng v\u00e0 mu\u1ed1n chuy\u1ec3n kh\u00e1ch truy c\u1eadp \u0111\u1ebfn \u0111\u00f3.");
    f.APP_LINK_NOTICE = c;
    d = g._("Th\u00eam m\u1ed9t n\u00fat v\u00e0o Trang \u0111\u1ec3 chuy\u1ec3n m\u1ecdi ng\u01b0\u1eddi tr\u1ef1c  ti\u1ebfp \u0111\u1ebfn trang web ho\u1eb7c \u1ee9ng d\u1ee5ng c\u1ee7a b\u1ea1n.");
    f.CREATE_DIALOG_BODY_MESSAGE = d;
    e = g._("Ch\u1ec9nh s\u1eeda qu\u1ea3ng c\u00e1o");
    f.EDIT_PROMOTION_LABEL = e;
    b = g._("Xem qu\u1ea3ng c\u00e1o");
    f.VIEW_PROMOTION_LABEL = b;
    c = g._("Qu\u1ea3ng c\u00e1o");
    f.PROMOTE_LABEL = c;
    d = g._("L\u00fac kh\u00e1c");
    f.NOT_NOW = d;
    e = g._("T\u00ecm hi\u1ec3u th\u00eam");
    f.DEEPLINK_LEARN_MORE_LABEL = e;
    b = g._("Li\u00ean k\u1ebft s\u00e2u");
    f.DEEP_LINK_INPUT_LABEL = b;
    c = g._("Ch\u00fang t\u00f4i s\u1ebd m\u1edf \u1ee9ng d\u1ee5ng \u0111\u01b0\u1ee3c ch\u1ecdn \u1edf tr\u00ean n\u1ebfu \u1ee9ng d\u1ee5ng \u0111\u00e3 \u0111\u01b0\u1ee3c c\u00e0i \u0111\u1eb7t");
    f.CREATE_IPHONE_DEEP_LINK_TEXT = c;
    d = g._("Nh\u1eefng ng\u01b0\u1eddi kh\u00f4ng c\u00f3 \u1ee9ng d\u1ee5ng c\u1ee7a b\u1ea1n s\u1ebd \u0111\u01b0\u1ee3c chuy\u1ec3n t\u1edbi \u0111\u00e2y.");
    f.CREATE_DIALOG_BACKUP_LINK_MESSAGE = d;
    e = g._("T\u00ean g\u00f3i");
    f.PACKAGE_NAME_LABEL = e;
    b = g._("Th\u00eam t\u00ean g\u00f3i Android c\u1ee7a \u1ee9ng d\u1ee5ng.");
    f.CREATE_DIALOG_PACKAGE_NAME_MESSAGE_ANDROID = b;
    c = g._("Chuy\u1ec3n m\u1ecdi ng\u01b0\u1eddi \u0111\u1ebfn m\u1ed9t v\u1ecb tr\u00ed c\u1ee5 th\u1ec3 b\u00ean trong \u1ee9ng d\u1ee5ng c\u1ee7a b\u1ea1n, ch\u1eb3ng h\u1ea1n nh\u01b0 trang s\u1ea3n ph\u1ea9m.");
    f.CREATE_DIALOG_APPLINK_MESSAGE = c;
    d = g._("Ch\u00fang t\u00f4i s\u1ebd m\u1edf \u1ee9ng d\u1ee5ng \u0111\u01b0\u1ee3c ch\u1ecdn \u1edf tr\u00ean n\u1ebfu \u1ee9ng d\u1ee5ng \u0111\u00e3 \u0111\u01b0\u1ee3c c\u00e0i \u0111\u1eb7t");
    f.CREATE_ANDROID_DEEP_LINK_TEXT = d;
    e = g._("Ch\u00fang t\u00f4i s\u1ebd s\u1eed d\u1ee5ng t\u00ean g\u00f3i t\u1eeb \u1ee9ng d\u1ee5ng \u0111\u00e3 ch\u1ecdn");
    f.CREATE_ANDROID_PACKAGE_NAME_TEXT = e;
    b = g._("B\u1ea1n c\u00f3 th\u1ef1c s\u1ef1 mu\u1ed1n x\u00f3a n\u00fat n\u00e0y kh\u1ecfi Trang Facebook kh\u00f4ng?");
    f.DELETE_DIALOG_MESSAGE = b;
    c = g._("Thao t\u00e1c n\u00e0y s\u1ebd g\u1ee1 n\u00fat Nh\u1eadn b\u00e1o gi\u00e1 kh\u1ecfi Trang c\u1ee7a b\u1ea1n. {new_line} Ngo\u00e0i ra, c\u00e2u h\u1ecfi t\u1ef1 \u0111\u1ed9ng s\u1ebd b\u1ecb t\u1eaft v\u00e0 kh\u00f4ng \u0111\u01b0\u1ee3c g\u1eedi \u0111\u1ebfn nh\u1eefng ng\u01b0\u1eddi nh\u1eafn tin cho b\u1ea1n n\u1eefa.", [g._param("new_line", a.jsx("div", {
        children: a.jsx("br", {})
    }))]);
    f.DELETE_GET_QUOTE_CTA_MESSAGE = c;
    d = g._("Th\u00eam n\u00fat");
    f.CREATE_LABEL = d;
    e = g._("Th\u00eam n\u00fat \u0111\u1ec3 khuy\u1ebfn kh\u00edch m\u1ecdi ng\u01b0\u1eddi th\u1ef1c hi\u1ec7n h\u00e0nh \u0111\u1ed9ng t\u1eeb Trang c\u1ee7a b\u1ea1n nh\u01b0 mua s\u1eafm ho\u1eb7c \u0111\u0103ng k\u00fd");
    f.CREATE_TOOLTIP = e;
    b = g._("H\u00e3y ho\u00e0n th\u00e0nh qu\u00e1 tr\u00ecnh thi\u1ebft l\u1eadp n\u00fat \u0111\u1ec3 m\u1ecdi ng\u01b0\u1eddi c\u00f3 th\u1ec3 th\u1ef1c hi\u1ec7n h\u00e0nh \u0111\u1ed9ng n\u00e0y t\u1eeb Trang c\u1ee7a b\u1ea1n.");
    f.CREATE_TOOLTIP_FOR_UNCONFIGURED_STATE = b;
    a = g._("Thay \u0111\u1ed5i n\u00fat s\u1ebd k\u1ebft th\u00fac qu\u1ea3ng c\u00e1o");
    f.UPDATE_DURING_PROMOTION_DIALOG_TITLE = a;
    c = g._("B\u1ea1n kh\u00f4ng th\u1ec3 thay \u0111\u1ed5i n\u00fat ngay l\u00fac n\u00e0y");
    f.CANNOT_UPDATE_DURING_PROMOTION_DIALOG_TITLE = c;
    d = g._("S\u1ed1 \u0111i\u1ec7n tho\u1ea1i");
    f.ENTER_PHONE_LABEL = d;
    e = g._("\u0110\u1ecba ch\u1ec9 email");
    f.ENTER_EMAIL_ADDRESS_LABEL = e;
    b = g._("V\u00ed d\u1ee5: 8005550199");
    f.ENTER_PHONE_PLACEHOLDER = b;
    a = g._("Th\u00eam \u0111\u1ecba ch\u1ec9 email");
    f.ENTER_EMAIL_ADDRESS_PLACEHOLDER = a;
    c = g._("Ng\u00e0y:");
    f.DATE_PICKER_TEXT = c;
    d = g._("Th\u1eddi gian:");
    f.TIME_PICKER_TEXT = d;
    e = g._("Quy m\u00f4 b\u1eefa ti\u1ec7c:");
    f.PARTY_PICKER_TEXT = e;
    b = g._("B\u1ea1n mu\u1ed1n thu th\u1eadp th\u00f4ng tin g\u00ec?");
    f.PHONE_EMAIL_PREFERENCE_SELECTOR_SECTION_TITLE = b;
    a = g._("M\u1ed9t s\u1ed1 v\u0103n b\u1ea3n t\u1ea1i \u0111\u00e2y gi\u1ea3i th\u00edch r\u1eb1ng th\u00f4ng tin li\u00ean h\u1ec7 n\u00e0y s\u1ebd h\u1ebft h\u1ea1n sau 90 ng\u00e0y sau khi th\u00f4ng tin n\u00e0y \u0111\u01b0\u1ee3c g\u1eedi.");
    f.PHONE_EMAIL_PREFERENCE_SELECTOR_SECTION_DESCRIPTION = a;
    c = g._("Th\u00eam li\u00ean k\u1ebft \u0111\u1ebfn Ch\u00ednh s\u00e1ch quy\u1ec1n ri\u00eang t\u01b0");
    f.CONTACT_US_PRIVACY_LINK_SECTION_TITLE = c;
    d = g._("Gi\u1ea3i th\u00edch \u0111\u00f4i ch\u00fat v\u1ec1 ch\u00ednh s\u00e1ch quy\u1ec1n ri\u00eang t\u01b0 c\u1ee7a b\u1ea1n v\u00e0 l\u00fd do c\u1ea7n c\u00f3 n\u00f3. H\u00e3y cho m\u1ecdi ng\u01b0\u1eddi bi\u1ebft v\u00ec sao \u0111i\u1ec1u n\u00e0y l\u1ea1i quan tr\u1ecdng.");
    f.CONTACT_US_PRIVACY_LINK_SECTION_DESCRIPTION = d;
    e = g._("S\u1ed1 \u0111i\u1ec7n tho\u1ea1i v\u00e0 email");
    f.PHONE_EMAIL_PREFERENCE_PHONE_AND_EMAIL_LABEL = e;
    b = g._("S\u1ed1 \u0111i\u1ec7n tho\u1ea1i");
    f.PHONE_EMAIL_PREFERENCE_PHONE_ONLY_LABEL = b;
    a = g._("Email");
    f.PHONE_EMAIL_PREFERENCE_EMAIL_ONLY_LABEL = a;
    c = g._("T\u00ednh n\u0103ng n\u00e0y \u0111\u01b0\u1ee3c thi\u1ebft k\u1ebf \u0111\u1ec3 cho ph\u00e9p ph\u1ea3n h\u1ed3i v\u1edbi c\u00e1c y\u00eau c\u1ea7u \u0111\u01b0\u1ee3c g\u1eedi \u0111\u1ebfn t\u1eeb c\u00e1c c\u00e1 nh\u00e2n. M\u1ed9t s\u1ed1 lo\u1ea1i li\u00ean h\u1ec7 nh\u1ea5t \u0111\u1ecbnh c\u00f3 th\u1ec3 y\u00eau c\u1ea7u c\u00f3 th\u00eam s\u1ef1 nh\u1ea5t tr\u00ed theo y\u00eau c\u1ea7u c\u1ee7a lu\u1eadt ph\u00e1p t\u00f9y theo qu\u1ed1c gia c\u1ee7a b\u1ea1n. B\u1ea1n \u0111\u1ed3ng \u00fd r\u1eb1ng m\u00ecnh ch\u1ecbu tr\u00e1ch nhi\u1ec7m c\u00f3 \u0111\u01b0\u1ee3c s\u1ef1 nh\u1ea5t tr\u00ed \u0111\u00f3 v\u00e0 tu\u00e2n th\u1ee7 v\u1edbi");
    f.CONTACT_US_TERM_BODY_MESSAGE = c;
    d = g._("Chuy\u1ec3n m\u1ecdi ng\u01b0\u1eddi t\u1edbi \u1ee9ng d\u1ee5ng ho\u1eb7c trang web");
    f.WEBSITE_DESTINATION_TYPE_TOGGLE_LABEL = d;
    e = g._("Th\u00eam b\u00ecnh lu\u1eadn");
    f.CONTACT_US_REASON_INPUT_PLACEHOLDER = e;
    b = g._("Nh\u1eadp t\u00ean b\u1ea1n");
    f.CONTACT_US_NAME_INPUT_PLACEHOLDER = b;
    a = g._("Nh\u1eadp email c\u1ee7a b\u1ea1n");
    f.CONTACT_US_EMAIL_INPUT_PLACEHOLDER = a;
    c = g._("S\u1ed1 \u0111i\u1ec7n tho\u1ea1i");
    f.CONTACT_US_PHONE_INPUT_PLACEHOLDER = c;
    d = g._("OK");
    f.CONTACT_US_INFO_SUBMIT_CONFIRMATION_LABEL = d;
    e = g._("C\u00f3");
    f.YES_LABEL = e;
    b = g._("Kh\u00f4ng");
    f.NO_LABEL = b;
    a = g._("B\u1eb1ng c\u00e1ch t\u1ea1o n\u00fat k\u00eau g\u1ecdi h\u00e0nh \u0111\u1ed9ng n\u00e0y, b\u1ea1n x\u00e1c nh\u1eadn r\u1eb1ng c\u1ea3 hai \u0111i\u1ec1u sau \u0111\u1ec1u \u0111\u00fang v\u00e0 ch\u00ednh x\u00e1c:");
    f.DONATE_NOW_LEGAL_CONTENT_ONE = a;
    c = g._("T\u1ed5 ch\u1ee9c c\u1ee7a b\u1ea1n ho\u1ea1t \u0111\u1ed9ng nh\u01b0 m\u1ed9t t\u1ed5 ch\u1ee9c t\u1eeb thi\u1ec7n theo lu\u1eadt hi\u1ec7n h\u00e0nh trong ph\u1ea1m vi quy\u1ec1n h\u1ea1n c\u1ee7a m\u00ecnh. T\u1ed5 ch\u1ee9c c\u00f3 tr\u1ee5 s\u1edf t\u1ea1i M\u1ef9 ph\u1ea3i \u0111\u01b0\u1ee3c t\u1ed5 ch\u1ee9c v\u00e0 ho\u1ea1t \u0111\u1ed9ng theo m\u1ee5c 501 (c)(3) c\u1ee7a Lu\u1eadt Thu\u1ebf V\u1ee5 Hoa K\u1ef3, ngay c\u1ea3 khi b\u1ea1n ch\u01b0a \u00e1p d\u1ee5ng.");
    f.DONATE_NOW_LEGAL_CONTENT_TWO = c;
    d = g._("T\u1ed5 ch\u1ee9c c\u1ee7a b\u1ea1n kh\u00f4ng can thi\u1ec7p tr\u1ef1c ti\u1ebfp hay gi\u00e1n ti\u1ebfp v\u00e0o b\u1ea5t k\u1ef3 chi\u1ebfn d\u1ecbch ch\u00ednh tr\u1ecb n\u00e0o thay cho ho\u1eb7c \u0111\u1ed1i l\u1eadp v\u1edbi b\u1ea5t c\u1ee9 \u1ee9ng c\u1eed vi\u00ean n\u00e0o cho ch\u1ee9c v\u1ee5 c\u00f4ng.");
    f.DONATE_NOW_LEGAL_CONTENT_THREE = d;
    e = g._("\u0110\u00e1nh d\u1ea5u l\u00e0 \u0111\u00e3 tr\u1ea3 l\u1eddi");
    f.MARK_AS_RESPONDED_LABEL = e;
    b = g._("C\u1ea5m tr\u00ean Trang");
    f.BAN_FROM_PAGE = b;
    a = g._("Mua ngay s\u1ebd li\u00ean k\u1ebft \u0111\u1ebfn ph\u1ea7n c\u1eeda h\u00e0ng c\u1ee7a Trang.");
    f.STORE_FRONT_DESCRIPTION = a;
    c = g._("Xem \u01b0u \u0111\u00e3i s\u1ebd li\u00ean k\u1ebft \u0111\u1ebfn ph\u1ea7n \u01b0u \u0111\u00e3i c\u1ee7a Trang.");
    f.OFFER_DESCRIPTION = c;
    d = g._("Cho ph\u00e9p m\u1ecdi ng\u01b0\u1eddi y\u00eau c\u1ea7u cu\u1ed9c h\u1eb9n m\u00e0 kh\u00f4ng ph\u1ea3i r\u1eddi kh\u1ecfi Trang c\u1ee7a b\u1ea1n.");
    f.REQUEST_APPOINTMENT_DESCRIPTION = d;
    e = g._("Gi\u00fap kh\u00e1ch h\u00e0ng mua v\u00e9 t\u1eeb Trang d\u1ec5 d\u00e0ng.");
    f.BUY_TICKETS_DESCRIPTION = e;
    b = g._("Mua v\u00e9 s\u1ebd li\u00ean k\u1ebft \u0111\u1ebfn ph\u1ea7n s\u1ef1 ki\u1ec7n tr\u00ean Trang c\u1ee7a b\u1ea1n.");
    f.GET_EVENTS_TICKETS_DESCRIPTION = b;
    a = g._("Quy\u00ean g\u00f3p cho ph\u00e9p nh\u1eefng ng\u01b0\u1eddi \u1ee7ng h\u1ed9 quy\u00ean g\u00f3p cho t\u1ed5 ch\u1ee9c c\u1ee7a b\u1ea1n ngay t\u1eeb Facebook.");
    f.CHARITY_DONATE_DESCRIPTION = a;
    c = g._("\u0110ang x\u1eed l\u00fd video...");
    f.NATIVE_VIDEO_POSTING = c;
    d = g._("Xem tr\u01b0\u1edbc");
    f.NATIVE_VIDEO_PREVIEW_LABEL = d;
    e = g._("\u0110ang t\u1ea3i video l\u00ean...");
    f.NATIVE_VIDEO_UPLOADING = e;
    b = g._("\u0110ang chu\u1ea9n b\u1ecb video...");
    f.NATIVE_VIDEO_UPLOAD_FINISHED = b;
    a = g._("\u0110\u00e1nh d\u1ea5u Ho\u00e0n t\u1ea5t");
    f.MARK_AS_COMPLETE_LABEL = a;
    c = g._("\u0110\u00e1nh d\u1ea5u l\u00e0 Ch\u01b0a ho\u00e0n t\u1ea5t");
    f.MARK_AS_INCOMPLETE_LABEL = c;
    d = g._("T\u1ef1 nhi\u00ean");
    f.LEGEND_KEY_ORGANIC = d;
    e = g._("Tr\u1ea3 ph\u00ed");
    f.LEGEND_KEY_PAID = e;
    b = g._("S\u1ed1 l\u1ea7n nh\u1ea5p trong tu\u1ea7n n\u00e0y");
    f.THIS_WEEK_CLICK_LABEL = b;
    a = g._("Ch\u1ec9nh s\u1eeda n\u00fat tr\u00ean Trang v\u1ecb tr\u00ed");
    f.CTA_PROPAGATION_SETTING = a;
    function a(a) {
        return g._("X\u00f3a n\u00fat {Page button label}", [g._param("Page button label", a)])
    }
    function c(a) {
        return g._("Qu\u1ea3ng c\u00e1o n\u00fat {Page button label}", [g._param("Page button label", a)])
    }
    function d(a) {
        return g._("Ch\u1ec9nh s\u1eeda n\u00fat {CTA label}", [g._param("CTA label", a)])
    }
    function e(a) {
        return g._("Ng\u1eaft k\u1ebft n\u1ed1i kh\u1ecfi \u1ee9ng d\u1ee5ng ({app id})", [g._param("app id", a)])
    }
}
), null);
__d("XCctaOpenTableController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/ccta/open_table/", {
        timestamp: {
            type: "Int",
            required: !0
        },
        party_size: {
            type: "Int",
            required: !0
        },
        page_id: {
            type: "Int",
            required: !0
        }
    })
}
), null);
__d("PageCallToActionOpenTableDialog.react", ["cx", "fbt", "AsyncRequest", "CctaLabels", "LayerHideOnBlur", "React", "XCctaOpenTableController", "ThisControllerNoLongerExists", "XUIButton.react", "XUIDatePicker.react", "XUIDialog.react", "XUIDialogBody.react", "XUIDialogCancelButton.react", "XUIDialogConfirmButton.react", "XUIDialogFooter.react", "XUISelector.react", "prop-types", "formatDate"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React")
      , j = b("XUISelector.react").Option
      , k = 20
      , l = 1e3
      , m = 30
      , n = 60
      , o = 48;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.state = {
                availableTimes: [],
                chosenTimestamp: 0,
                partySize: 1,
                selectedDate: d.props.openTableSpecs.startTimestamp * l,
                selectedTime: 0
            },
            d.$2 = function(a) {
                d.setState({
                    selectedDate: a.getTime()
                }),
                d.$3(a.getTime(), d.state.selectedTime, d.state.partySize)
            }
            ,
            d.$4 = function(a) {
                d.setState({
                    selectedTime: a.value
                }),
                d.$3(d.state.selectedDate, a.value, d.state.partySize)
            }
            ,
            d.$5 = function(a) {
                d.setState({
                    partySize: a.value
                }),
                d.$3(d.state.selectedDate, d.state.selectedTime, a.value)
            }
            ,
            d.$7 = function() {
                var a = d.state.selectedDate + d.state.selectedTime
                  , c = b("formatDate")(new Date(a), "m/d/y", {
                    utc: !0
                });
                a = b("formatDate")(new Date(a), "g:i A", {
                    utc: !0
                });
                return {
                    printDate: c,
                    printTime: a
                }
            }
            ,
            d.$8 = function() {
                return i.jsxs("div", {
                    children: [b("CctaLabels").DATE_PICKER_TEXT, i.jsx("span", {
                        className: "plm",
                        children: i.jsx(b("XUIDatePicker.react"), {
                            earliestTime: d.props.openTableSpecs.startTimestamp,
                            initialTime: d.state.selectedDate,
                            onCalendarSelectDateChange: d.$2
                        })
                    })]
                })
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.$1 = function() {
            this.props.onCancel(),
            this.setState({
                availableTimes: [],
                partySize: 1,
                selectedDate: this.props.openTableSpecs.startTimestamp * l,
                selectedTime: 0
            })
        }
        ;
        d.$6 = function(a) {
            this.setState({
                chosenTimestamp: a
            });
            a = b("ThisControllerNoLongerExists").__DEADURI__("dc0e6424");
            new (b("AsyncRequest"))().setURI(a).send()
        }
        ;
        d.$3 = function(a, c, d) {
            a = a + c;
            c = b("XCctaOpenTableController").getURIBuilder().setInt("party_size", d).setInt("page_id", this.props.pageID).setInt("timestamp", a / l).getURI();
            new (b("AsyncRequest"))().setURI(c).setHandler(function(a) {
                this.setState({
                    availableTimes: a.payload
                })
            }
            .bind(this)).send()
        }
        ;
        d.$9 = function() {
            var a = []
              , c = new Date();
            c.setSeconds(0);
            for (var d = 0; d < o; d++) {
                d % 2 ? (c.setHours((d - 1) / 2),
                c.setMinutes(30)) : (c.setHours(d / 2),
                c.setMinutes(0));
                var e = d * n * m * l;
                a.push(i.jsx(j, {
                    value: e,
                    children: b("formatDate")(c, "g:i A")
                }, e))
            }
            return i.jsxs("div", {
                children: [b("CctaLabels").TIME_PICKER_TEXT, i.jsx("span", {
                    className: "plm",
                    children: i.jsx(b("XUISelector.react"), {
                        className: "_5vu1",
                        onChange: this.$4,
                        value: this.state.selectedTime,
                        children: a
                    })
                })]
            })
        }
        ;
        d.$10 = function() {
            var a = [];
            for (var c = 1; c <= k; c++)
                a.push(i.jsx(j, {
                    value: c,
                    children: c
                }, c));
            return i.jsxs("div", {
                children: [b("CctaLabels").PARTY_PICKER_TEXT, i.jsx("span", {
                    className: "plm",
                    children: i.jsx(b("XUISelector.react"), {
                        className: "_5vu1",
                        onChange: this.$5,
                        value: this.state.partySize,
                        children: a
                    })
                })]
            })
        }
        ;
        d.$11 = function() {
            var a = this
              , c = i.jsx("div", {})
              , d = this.$7()
              , e = []
              , f = [];
            this.state.availableTimes.length || (c = i.jsx("div", {
                children: h._("Kh\u00f4ng c\u00f3 b\u1ea3ng n\u00e0o kh\u1edbp v\u1edbi t\u00ecm ki\u1ebfm")
            }));
            for (var g = 0; g < this.state.availableTimes.length; g++)
                f.push(g);
            e = f.map(function(c) {
                return i.jsx(b("XUIButton.react"), {
                    label: b("formatDate")(new Date(a.state.availableTimes[c] * l), "g:i A", {
                        utc: !0
                    }),
                    onClick: function() {
                        return a.$6(a.state.availableTimes[c])
                    }
                }, c)
            });
            return i.jsxs("span", {
                children: [i.jsx("div", {
                    children: h._("B\u00e0n d\u00e0nh cho {party size for reservation}, {date for reservation} trong kho\u1ea3ng {time for reservations}", [h._param("party size for reservation", this.state.partySize), h._param("date for reservation", d.printDate), h._param("time for reservations", d.printTime)])
                }), c, e]
            })
        }
        ;
        d.render = function() {
            return i.jsxs(b("XUIDialog.react"), {
                behaviors: {
                    LayerHideOnBlur: b("LayerHideOnBlur")
                },
                shown: !0,
                width: 400,
                children: [i.jsxs(b("XUIDialogBody.react"), {
                    children: [this.$11(), this.$8(), this.$9(), this.$10()]
                }), i.jsxs(b("XUIDialogFooter.react"), {
                    children: [i.jsx(b("XUIDialogCancelButton.react"), {
                        onClick: this.onCancel
                    }), i.jsx(b("XUIDialogConfirmButton.react"), {})]
                })]
            })
        }
        ;
        return c
    }(i.Component);
    a.propTypes = {
        onCancel: b("prop-types").func.isRequired,
        openTableSpecs: b("prop-types").object.isRequired,
        pageID: b("prop-types").string.isRequired
    };
    e.exports = a
}
), null);
__d("ServicesBookNowCTASubtype", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        BOOKER: "booker",
        BOOKING_BUG: "booking_bug",
        EXTERNAL_LINK: "external_link",
        FACEBOOK_APPOINTMENT: "facebook_appointment",
        FRONT_DESK: "front_desk",
        FUTURE_PARTNER_REQUEST: "future_partner_request",
        GOOGLE_CALENDAR: "google_calendar",
        HOME_ADVISOR: "home_advisor",
        LOCAL_DEV_PLATFORM: "local_dev_platform",
        MYTIME: "mytime",
        MICROSOFT_BOOKINGS: "microsoft_bookings",
        MINDBODY: "mindbody",
        SETSTER: "setster",
        SIMPLY_BOOK_ME: "simply_book_me",
        REQUEST_TIME: "request_time"
    });
    e.exports = a
}
), null);
__d("ServicesEventsLoggingHelper", ["Banzai", "BanzaiLogger"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {};
            return this
        }
        var c = a.prototype;
        c.log = function() {
            b("BanzaiLogger").log("ServicesEventsLoggerConfig", this.$1)
        }
        ;
        c.logVital = function() {
            b("BanzaiLogger").create(b("Banzai").VITAL).log("ServicesEventsLoggerConfig", this.$1)
        }
        ;
        c.setEvent = function(a) {
            this.$1.name = a;
            return this
        }
        ;
        c.setPageID = function(a) {
            this.$1.page_id = a;
            return this
        }
        ;
        c.setClientTime = function(a) {
            this.$1.client_time = a;
            return this
        }
        ;
        c.setConsumerID = function(a) {
            this.$1.consumer_id = a;
            return this
        }
        ;
        c.setAdditionalData = function(a) {
            this.$1.additional_data_prep = a;
            return this
        }
        ;
        c.setErrorMessage = function(a) {
            this.$1.error_message = a;
            return this
        }
        ;
        c.setErrorTrace = function(a) {
            this.$1.error_trace = a;
            return this
        }
        ;
        c.setReferrerUIComponent = function(a) {
            this.$1.referrer_ui_component = a;
            return this
        }
        ;
        c.setReferrerUISurface = function(a) {
            this.$1.referrer_ui_surface = a;
            return this
        }
        ;
        c.setRequestID = function(a) {
            this.$1.request_id = a;
            return this
        }
        ;
        c.setServicesFlowType = function(a) {
            this.$1.services_flow_type = a;
            return this
        }
        ;
        c.setSessionID = function(a) {
            this.$1.session_id = a;
            return this
        }
        ;
        c.setUIComponent = function(a) {
            this.$1.ui_component = a;
            return this
        }
        ;
        c.setUISurface = function(a) {
            this.$1.ui_surface = a;
            return this
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("ServicesEventsLogger", ["ServicesEventsLoggingHelper", "CurrentUser", "md5"], (function(a, b, c, d, e, f) {
    "use strict";
    f.logBookingFlow = a;
    f.log = c;
    f.generateSessionID = d;
    var g = 2147483647;
    function a(a, c, d, e, f, g, h, i, j, k) {
        h !== null && (j = babelHelpers["extends"]({}, j, {
            need_admin_approval: h
        }));
        i !== null && (j = babelHelpers["extends"]({}, j, {
            is_duration_varies: i
        }));
        h = new (b("ServicesEventsLoggingHelper"))().setPageID(d).setSessionID(c).setServicesFlowType(a).setEvent(e).setReferrerUIComponent(f).setReferrerUISurface(g).setAdditionalData(j);
        k ? h.logVital() : h.log()
    }
    function c(a, c, d, e, f) {
        var g, h, i, j;
        d && (g = d.uiComponent,
        h = d.uiSurface,
        i = d.referrerUIComponent,
        j = d.referrerUISurface);
        d = new (b("ServicesEventsLoggingHelper"))().setPageID(a).setEvent(c).setAdditionalData(e).setUIComponent(g).setUISurface(h).setReferrerUIComponent(i).setReferrerUISurface(j).setServicesFlowType(f).setConsumerID(e == null ? void 0 : e.consumer_id);
        d.log()
    }
    function d() {
        return b("md5")([b("CurrentUser").getID(), Math.floor(Date.now() / 1e3), Math.random() * g].join(":"))
    }
}
), null);
__d("ServicesOpenMessageThread", ["FantaTabActions", "MercuryIDs"], (function(a, b, c, d, e, f) {
    "use strict";
    f.openTab = a;
    function a(a) {
        a = b("MercuryIDs").getThreadIDFromUserID(a);
        b("FantaTabActions").openTab(a)
    }
}
), null);
__d("XCctaViewerClickButtonController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/ccta/viewer_click_button/", {
        page_id: {
            type: "FBID",
            required: !0
        }
    })
}
), null);
__d("XLoginController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/login/", {
        cuid: {
            type: "String"
        },
        app_id: {
            type: "Int"
        },
        api_key: {
            type: "String"
        },
        auth_token: {
            type: "String"
        },
        first_attempt: {
            type: "Exists",
            defaultValue: !1
        },
        friend_nonce: {
            type: "String"
        },
        social_plugin: {
            type: "String"
        },
        signed_next: {
            type: "Bool",
            defaultValue: !1
        },
        next: {
            type: "String"
        },
        email: {
            type: "String"
        },
        li: {
            type: "String"
        },
        lhsrc: {
            type: "String"
        },
        dcode: {
            type: "Int"
        },
        profile_sharer_id: {
            type: "Int"
        },
        ref: {
            type: "String"
        },
        try_number: {
            type: "Int"
        },
        one_time_password: {
            type: "Bool",
            defaultValue: !1
        },
        device_id: {
            type: "String"
        },
        ig_cp_login: {
            type: "Bool",
            defaultValue: !1
        },
        pl_dbl: {
            type: "Bool",
            defaultValue: !1
        },
        notif_src: {
            type: "String"
        },
        sk: {
            type: "String"
        },
        contact_point: {
            type: "String"
        },
        layout: {
            type: "String"
        },
        next_uri: {
            type: "String"
        },
        v: {
            type: "String"
        },
        return_session: {
            type: "String"
        },
        cancel: {
            type: "String"
        },
        cancel_url: {
            type: "String"
        },
        social_plugin_action: {
            type: "String"
        },
        page_id: {
            type: "String"
        },
        rcount: {
            type: "Int"
        },
        e: {
            type: "Int"
        },
        deact: {
            type: "String"
        },
        deact_messaging: {
            type: "Bool",
            defaultValue: !1
        },
        user_wants_http: {
            type: "Bool",
            defaultValue: !1
        },
        fbconnect: {
            type: "Exists",
            defaultValue: !1
        },
        canvas: {
            type: "Exists",
            defaultValue: !1
        },
        offline_access: {
            type: "Exists",
            defaultValue: !1
        },
        skip_api_login: {
            type: "Bool",
            defaultValue: !1
        },
        no_next_msg: {
            type: "Exists",
            defaultValue: !1
        },
        _fb_noscript: {
            type: "Exists",
            defaultValue: !1
        },
        nothacked: {
            type: "Bool",
            defaultValue: !1
        },
        isprivate: {
            type: "Bool",
            defaultValue: !1
        },
        fw2x: {
            type: "Bool",
            defaultValue: !1
        },
        uc_qa: {
            type: "Exists",
            defaultValue: !1
        },
        previous_locale: {
            type: "String"
        },
        fl: {
            type: "Exists",
            defaultValue: !1
        },
        show_profileshare_nativebanner: {
            type: "Exists",
            defaultValue: !1
        },
        crst: {
            type: "Bool",
            defaultValue: !1
        },
        from_contact_claiming: {
            type: "Bool",
            defaultValue: !1
        },
        login_try_number: {
            type: "Int"
        },
        kid_directed_site: {
            type: "Bool",
            defaultValue: !1
        },
        signup_uri: {
            type: "String"
        },
        sign_up: {
            type: "String"
        },
        rs: {
            type: "Enum",
            enumType: 0
        },
        delete_account: {
            type: "String"
        },
        rid: {
            type: "Int"
        },
        lrs: {
            type: "Enum",
            enumType: 0
        },
        lrid: {
            type: "Int"
        },
        greeting_text: {
            type: "String"
        },
        ref_param: {
            type: "String"
        },
        request_id: {
            type: "String"
        },
        chat_plugin_upgrade: {
            type: "Bool",
            defaultValue: !1
        },
        guest_access_token: {
            type: "String"
        },
        referer_uri: {
            type: "String"
        },
        switch_user: {
            type: "String"
        },
        guest_id: {
            type: "String"
        },
        prompt_type: {
            type: "String"
        },
        ps_nf_cuid: {
            type: "String"
        },
        campaign_id: {
            type: "Int"
        },
        session_id: {
            type: "String"
        },
        hide_upsell: {
            type: "Bool",
            defaultValue: !1
        },
        shbl: {
            type: "Bool",
            defaultValue: !1
        },
        src: {
            type: "String"
        },
        privacy_mutation_token: {
            type: "String"
        }
    })
}
), null);
__d("XPagesCallToActionRedirectController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/pages/call_to_action/redirect/", {
        cta_id: {
            type: "FBID",
            required: !0
        }
    })
}
), null);
__d("XPagesCallToActionSendToMobileController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/pages/call_to_action/send_to_mobile/", {
        action: {
            type: "String",
            required: !0
        },
        cta_id: {
            type: "FBID",
            required: !0
        }
    })
}
), null);
__d("XPagesCallToActionValidateController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/pages/call_to_action/validate/", {
        ccta_id: {
            type: "Int",
            required: !0
        },
        field: {
            type: "Enum",
            required: !0,
            enumType: 1
        },
        field_value: {
            type: "String"
        }
    })
}
), null);
__d("XPagesPlatformFirstPartyCTABootstrapController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/iw/{id}/", {
        id: {
            type: "FBID",
            defaultValue: 244258209243064
        },
        cta_id: {
            type: "FBID",
            defaultValue: 244258209243064
        },
        referrer: {
            type: "Enum",
            defaultValue: "page",
            enumType: 1
        },
        initial_input: {
            type: "String"
        },
        from_food_drink_service_provider: {
            type: "Bool",
            defaultValue: !1
        },
        __asyncDialog: {
            type: "Int"
        }
    })
}
), null);
__d("XServicesInstantBookingDialogController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/services_vertical/instant_booking/dialog/", {
        page_id: {
            type: "FBID",
            required: !0
        },
        referrer: {
            type: "Enum",
            required: !0,
            enumType: 1
        },
        referral_offer_id: {
            type: "FBID"
        },
        referrer_surface: {
            type: "Enum",
            enumType: 1
        },
        prior_referrer: {
            type: "Enum",
            enumType: 1
        },
        prior_referrer_surface: {
            type: "Enum",
            enumType: 1
        },
        redirect_uri: {
            type: "String"
        },
        required_contact_info: {
            type: "EnumSet",
            enumType: null
        },
        service_duration: {
            type: "Int"
        },
        service_id: {
            type: "FBID"
        },
        service_name: {
            type: "String"
        },
        start_time: {
            type: "Int"
        },
        selected_date: {
            type: "Int"
        },
        user_id: {
            type: "String"
        },
        visible_contact_info: {
            type: "EnumVector",
            enumType: {
                member: 1
            }
        },
        webhook_payload: {
            type: "String"
        },
        __asyncDialog: {
            type: "Int"
        }
    })
}
), null);
__d("PageCallToActionViewerUnitMixin", ["ix", "cx", "fbt", "invariant", "AsyncRequest", "Bootloader", "CustomCallToActionTypes", "CustomCTALogger", "DOM", "FBLogger", "LayerHideOnBlur", "LayerHideOnEscape", "OrganicIntakeFormMutationUtils", "PageCallToActionHovercard.react", "PageCallToActionOpenTableDialog.react", "PageCallToActionRef", "PageContentTabLoadingDialog", "PageTransitions", "React", "ReactDOM", "ReactLayeredComponentMixin_DEPRECATED", "ServicesBookNowCTASubtype", "ServicesEventsLogger", "ServicesOpenMessageThread", "ThisControllerNoLongerExists", "URI", "XCctaViewerClickButtonController", "XLoginController", "XPagesCallToActionRedirectController", "XPagesCallToActionSendToMobileController", "XPagesCallToActionValidateController", "XPagesPlatformFirstPartyCTABootstrapController", "XServicesInstantBookingDialogController", "XUIContextualDialog.react", "XUIContextualDialogBody.react", "XUIDialog.react", "XUIDialogBody.react", "XUIDialogButton.react", "XUIDialogCancelButton.react", "XUIDialogFooter.react", "XUIDialogTitle.react", "XUISpinner.react", "XUIText.react", "fbglyph", "goURI", "isFacebookURI", "prop-types"], (function(a, b, c, d, e, f, g, h, i, j) {
    "use strict";
    var k, l = b("CustomCallToActionTypes").TYPES, m = b("React"), n = 3e3, o = 240, p = g("122578");
    c = {
        mixins: [b("ReactLayeredComponentMixin_DEPRECATED")],
        propTypes: {
            callToActionType: (a = b("prop-types")).string.isRequired,
            cctaID: a.string.isRequired,
            foodAndDrinkLoggingParams: a.object,
            pageName: a.string.isRequired,
            redirect: a.bool.isRequired,
            url: a.string.isRequired
        },
        getInitialState: function() {
            return {
                buttonLabel: null,
                callNowPrompt: null,
                showConfirmDialog: !1,
                showOpenTableDialog: !1,
                autoOpened: !1
            }
        },
        renderLayers: function() {
            return !this.props.confirmDialog ? {} : {
                confirmDialog: m.jsxs(b("XUIDialog.react"), {
                    onToggle: this._onConfirmDialogToggle,
                    shown: this.state.showConfirmDialog,
                    width: 335,
                    children: [m.jsx(b("XUIDialogTitle.react"), {
                        children: this.props.confirmDialog.title
                    }), m.jsxs(b("XUIDialogBody.react"), {
                        children: [m.jsx("div", {
                            children: m.jsx(b("XUIText.react"), {
                                size: "xlarge_DEPRECATED",
                                children: this.props.confirmDialog.message
                            })
                        }), m.jsx("p", {}), m.jsx("div", {
                            children: m.jsx(b("XUIText.react"), {
                                size: "meta1",
                                children: this.props.confirmDialog.subMessage
                            })
                        })]
                    }), m.jsxs(b("XUIDialogFooter.react"), {
                        children: [m.jsx(b("XUIDialogCancelButton.react"), {}), m.jsx(b("XUIDialogButton.react"), {
                            action: "button",
                            label: this.props.confirmDialog.confirmButtonLabel ? this.props.confirmDialog.confirmButtonLabel : i._("Ti\u1ebfp t\u1ee5c"),
                            onClick: this._executeCallToAction,
                            use: "confirm"
                        })]
                    })]
                })
            }
        },
        _onClick: function() {
            this.props.confirmDialog ? this.setState({
                showConfirmDialog: !0
            }) : (this._onToggleOpenTable(),
            this._executeCallToAction())
        },
        _onMouseEnter: function() {
            if (this.props.callToActionType === l.CALL_NOW && this.props.surface !== b("PageCallToActionRef").ADMIN_MENU_TEST_LINK)
                this._showCallNowPrompt();
            else if (this.props.hovercardSpecs && this.props.hovercardSpecs.exp === "hover")
                this._renderHovercard();
            else
                return;
            b("CustomCTALogger").log({
                ccta_id: this.props.cctaID,
                ccta_type: this.props.callToActionType,
                event_type: "custom_cta_hover_viewer_unit",
                page_id: this.props.pageID,
                surface: this.props.surface,
                target_url: this.props.url,
                presence_cta: this.props.isPresenceCTA,
                ref: this.props.referrer
            })
        },
        _onMouseLeave: function() {
            this.props.callToActionType === l.CALL_NOW && this.props.surface !== b("PageCallToActionRef").ADMIN_MENU_TEST_LINK && this._renderCallNowDialog(null)
        },
        _renderHovercard: function() {
            var a = this;
            this._dialogAnchor || (this._dialogAnchor = b("DOM").create("div"));
            b("ReactDOM").render(m.jsx(b("XUIContextualDialog.react"), {
                alignment: "center",
                behaviors: {
                    LayerHideOnBlur: b("LayerHideOnBlur"),
                    LayerHideOnEscape: b("LayerHideOnEscape")
                },
                contextRef: function() {
                    return a.getViewerButtonRef()
                },
                position: "above",
                shown: !0,
                children: m.jsx("div", {
                    className: "_3mrx",
                    children: m.jsx(b("PageCallToActionHovercard.react"), {
                        cctaID: this.props.cctaID,
                        cctaType: this.props.callToActionType,
                        description: this.props.hovercardSpecs.description,
                        displayUrl: this.props.hovercardSpecs.displayUrl,
                        imageSrc: this.props.hovercardSpecs.imageSrc,
                        redirectUrl: this.props.url,
                        title: this.props.hovercardSpecs.title
                    })
                })
            }), this._dialogAnchor)
        },
        _showCallNowPrompt: function() {
            var a = this;
            this.state.callNowPrompt ? this._renderCallNowDialog(this.state.callNowPrompt) : this._sendToMobile("prompt", function(b) {
                a.setState({
                    callNowPrompt: m.jsxs("div", {
                        children: [b.payload.text, m.jsx("br", {}), b.payload.subtext]
                    })
                }, function() {
                    a._renderCallNowDialog(a.state.callNowPrompt)
                })
            })
        },
        _sendToMobile: function(a, c) {
            this._renderCallNowDialog(m.jsx(b("XUISpinner.react"), {}));
            a = b("XPagesCallToActionSendToMobileController").getURIBuilder().setFBID("cta_id", this.props.cctaID).setString("action", a).getURI();
            new (b("AsyncRequest"))(a).setHandler(c).send()
        },
        _renderCallNowDialog: function(a) {
            var c = this;
            this._phoneCallAnchor || (this._phoneCallAnchor = b("DOM").create("div"));
            b("ReactDOM").render(m.jsx(b("XUIContextualDialog.react"), {
                contextRef: function() {
                    return c.getViewerButtonRef()
                },
                position: "below",
                alignment: "center",
                behaviors: {
                    LayerHideOnBlur: b("LayerHideOnBlur"),
                    LayerHideOnEscape: b("LayerHideOnEscape")
                },
                shown: !!a,
                width: o,
                children: m.jsx(b("XUIContextualDialogBody.react"), {
                    children: m.jsx("div", {
                        className: "_2m80",
                        children: a
                    })
                })
            }), this._phoneCallAnchor)
        },
        _redirectLoggedOutUserToLoginPage: function(a) {
            this.props.userID === "0" && b("goURI")(b("XLoginController").getURIBuilder().setString("next", a).getURI())
        },
        _onToggleOpenTable: function() {
            this.setState({
                showOpenTableDialog: !this.state.showOpenTableDialog
            })
        },
        _onConfirmDialogToggle: function(a) {
            this.setState({
                showConfirmDialog: a
            })
        },
        _renderInstantBooking: function() {
            var a = b("XServicesInstantBookingDialogController").getURIBuilder().setFBID("page_id", this.props.pageID).setEnum("referrer", "page_cta").setEnum("referrer_surface", "page").getURI();
            new (b("AsyncRequest"))(a).send()
        },
        _renderComponentFlow: function() {
            !this.state.autoOpened && this.props.shouldAutoOpen && this.setState({
                autoOpened: !0
            });
            var a = this.props.pagesPlatformAppSpec;
            a = a || {};
            var c = a.food_drink_multiple_provider
              , d = a.is_web_app;
            a = a.url;
            if (c)
                return void new (b("AsyncRequest"))(b("ThisControllerNoLongerExists").__DEADURI__("0esnp78ce").toString()).send();
            else if (a)
                if (d)
                    return void window.open(a);
                else
                    return void new (b("AsyncRequest"))(new (k || (k = b("URI")))(a).toString()).send();
            else
                return void new (b("AsyncRequest"))(b("XPagesPlatformFirstPartyCTABootstrapController").getURIBuilder().setFBID("id", this.props.cctaID).setEnum("referrer", this._getComponentFlowReferrer()).getURI().toString()).send()
        },
        _getComponentFlowReferrer: function() {
            switch (this.props.surface) {
            case b("PageCallToActionRef").FEED_STORY_ATTACHMENT:
                return "feed_story_attachment";
            case b("PageCallToActionRef").PAGES_SAVED_SECTION:
                return "pages_saved_section";
            case b("PageCallToActionRef").PAGES_SHARE_ATTACHMENT:
                return "pages_share_attachment";
            case b("PageCallToActionRef").PAGES_MINUTIAE_ATTACHMENT:
                return "pages_minutiae_attachment";
            case b("PageCallToActionRef").HOVER_CARD_SURFACE:
                return "hover_card_surface";
            case b("PageCallToActionRef").SEARCH_ENTITY_CARD:
                return "search";
            case b("PageCallToActionRef").LED_FEED_UNIT:
                return "led_pivot_cards";
            default:
                return "unknown"
            }
        },
        _openChatTab: function() {
            var a = this
              , c = this.props.entrypoint;
            if (c === void 0)
                switch (this.props.surface) {
                case b("PageCallToActionRef").ADMIN_MENU_TEST_LINK:
                    c = "fb_page:admin_test_link";
                    break;
                default:
                    c = "fb_page:fb_page_cta_" + this.props.surface;
                    break
                }
            b("Bootloader").loadModules(["ChatOpenTabEventLogger", "FantaTabActions", "MercuryIDs"], function(b, d, e) {
                var f = a.props.pageID;
                e = e.getThreadIDFromUserID(f);
                d.openTab(e, [c]);
                b.logUserClickOpen(a.props.referrer, f)
            }, "PageCallToActionViewerUnitMixin")
        },
        _openInternalFlow: function() {
            this._redirectLoggedOutUserToLoginPage(this.props.pageUrl),
            b("PageContentTabLoadingDialog").show(),
            new (b("AsyncRequest"))(this.props.url).setFinallyHandler(function(a) {
                b("PageContentTabLoadingDialog").hide()
            }).send()
        },
        _executeCallToAction: function() {
            var a = this;
            this.setState({
                showConfirmDialog: !1
            });
            switch (this.props.destinationType) {
            case "MESSENGER":
                this._openChatTab();
                break;
            case "BECOME_SUPPORTER":
                if (this.props.isSupporterOfPage === !0) {
                    b("goURI")(this.props.url);
                    return
                }
                new (b("AsyncRequest"))().setURI(this.props.url).setMethod("POST").send();
                break;
            case "BECOME_A_VOLUNTEER":
                new (b("AsyncRequest"))().setURI(this.props.url).setMethod("POST").send();
                break;
            case "DONATE":
                this._openInternalFlow();
                break;
            case "LEAD_GEN":
                this.props.callToActionType === l.CONTACT_US && (this._redirectLoggedOutUserToLoginPage(this.props.pageUrl),
                this._renderComponentFlow());
                break;
            case "WEBSITE":
                if (this.props.userID !== "0") {
                    var c = b("XCctaViewerClickButtonController").getURIBuilder().setFBID("page_id", this.props.pageID).getURI();
                    new (b("AsyncRequest"))().setURI(c).send()
                }
                if (this.props.redirect) {
                    c = b("XPagesCallToActionRedirectController").getURIBuilder().setFBID("cta_id", this.props.cctaID).getURI();
                    new (b("AsyncRequest"))().setURI(c).setMethod("POST").send()
                } else {
                    b("isFacebookURI")(new (k || (k = b("URI")))(this.props.url)) || j(0, 4747, this.props.url);
                    this.props.hovercardSpecs && this.props.hovercardSpecs.exp === "click" ? this._renderHovercard() : window.open(this.props.url);
                    if (this.props.userID !== "0") {
                        c = b("XPagesCallToActionValidateController").getURIBuilder().setInt("ccta_id", this.props.cctaID).setEnum("field", "web_uri").setString("field_value", this.props.url).getURI();
                        new (b("AsyncRequest"))().setURI(c).setErrorHandler(function(a) {
                            b("FBLogger")("pages").catching(a.toError()).warn("Error sending async request for CTA validation")
                        }).send()
                    }
                }
                break;
            case "NATIVE_VIDEO":
                c = this.props.url.match(/videos\/([0-9]*)\//);
                c = c && c[1] || null;
                c || j(0, 4748);
                b("Bootloader").loadModules(["TahoeController"], function(c) {
                    return c.openFromVideoLink(new (k || (k = b("URI")))(a.props.url), {
                        caller: "channel_view_from_page_call_to_action",
                        channelID: a.props.pageID
                    })
                }, "PageCallToActionViewerUnitMixin");
                break;
            case "MINI_SHOP":
            case "OFFER":
            case "STORE_FRONT":
            case "EVENT_TICKET":
                b("PageTransitions").go(this.props.url, !0);
                break;
            case "OPEN_TABLE":
                this._dialogAnchor || (this._dialogAnchor = b("DOM").create("div"));
                this.state.showOpenTableDialog && b("ReactDOM").render(m.jsx(b("PageCallToActionOpenTableDialog.react"), {
                    onCancel: this._onToggleOpenTable,
                    openTableSpecs: this.props.openTableSpecs,
                    pageID: this.props.pageID
                }), this._dialogAnchor);
                break;
            case "PHONE_CALL":
                this._sendToMobile("send", function(b) {
                    a._renderCallNowDialog(m.jsxs("div", {
                        children: [b.payload.text, m.jsx("br", {}), b.payload.subtext]
                    }));
                    b = b.payload.label;
                    b && (a.setState({
                        buttonLabel: b.toString(),
                        buttonIcon: p
                    }),
                    window.setTimeout(function() {
                        a.setState({
                            buttonLabel: null,
                            buttonIcon: null
                        }),
                        a._renderCallNowDialog(null)
                    }, n))
                });
                break;
            case "EMAIL":
                window.open(this.props.url);
                break;
            case "GROUP":
                b("goURI")(this.props.url);
                break;
            case "SHOP_ON_FACEBOOK":
                b("goURI")(this.props.url);
                break;
            case "WHATSAPP_MESSAGE":
                window.open(this.props.url);
                break;
            case "VIDEO_CALL":
                b("Bootloader").loadModules(["OneVcFBRTCCore"], function(b) {
                    b.startOutgoingCall(a.props.pageID, "meeting_room_page_profile", !1, !0)
                }, "PageCallToActionViewerUnitMixin");
                break;
            case "FIRST_PARTY":
                c = this.props;
                var d = c.bookNowCTASubtype
                  , e = c.getQuoteCTASubtype;
                c = c.url;
                var f = b("ServicesBookNowCTASubtype").FACEBOOK_APPOINTMENT
                  , g = b("ServicesBookNowCTASubtype").GOOGLE_CALENDAR
                  , h = b("ServicesBookNowCTASubtype").REQUEST_TIME;
                if ([f, g, h].includes(d))
                    new (b("AsyncRequest"))(c).send();
                else if (e === "lead_gen")
                    new (b("AsyncRequest"))().setURI(c).send();
                else if (e === "organic_intake_form") {
                    f = {
                        referrerUIComponent: "get_quote_page_cta",
                        referrerUISurface: "page"
                    };
                    b("ServicesEventsLogger").log(this.props.pageID, "services_organic_intake_form_consumer_cta_click", f);
                    b("ServicesOpenMessageThread").openTab(this.props.pageID.toString());
                    b("OrganicIntakeFormMutationUtils").triggerOrganicIntakeForm(this.props.userID, this.props.pageID, "get_quote_page_cta")
                } else
                    this._renderComponentFlow();
                break;
            case "INSTANT_BOOKING":
                this._renderInstantBooking();
                break;
            case "CANVAS":
                break
            }
        }
    };
    e.exports = c
}
), null);
__d("ServicesFBAppointmentsUtils", ["DateStrings", "PageCallToActionRef"], (function(a, b, c, d, e, f) {
    "use strict";
    f.getWeekdayName = a;
    f.getCTAReferrerSurface = c;
    f.getCTAReferrer = d;
    function a(a) {
        a = (a + 1) % 7;
        return b("DateStrings").getWeekdayName(a)
    }
    function c(a) {
        switch (a) {
        case b("PageCallToActionRef").PAGES_ACTIONS_UNIT_SURFACE:
        case b("PageCallToActionRef").UNOWNED_PAGE_COVER:
        case b("PageCallToActionRef").PAGES_ACTION_BAR_CHANNEL:
            return "page";
        case b("PageCallToActionRef").SEARCH_ENTITY_CARD:
            return "search"
        }
        return null
    }
    function d(a) {
        switch (a) {
        case b("PageCallToActionRef").PAGES_ACTIONS_UNIT_SURFACE:
        case b("PageCallToActionRef").UNOWNED_PAGE_COVER:
        case b("PageCallToActionRef").PAGES_ACTION_BAR_CHANNEL:
        case b("PageCallToActionRef").SEARCH_ENTITY_CARD:
            return "primary_cta"
        }
        return null
    }
}
), null);
__d("XMessengerDotComMainController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/t/{?thread_key}/", {
        thread_key: {
            type: "String"
        },
        folder_key: {
            type: "String"
        },
        mid: {
            type: "String"
        },
        ref: {
            type: "String"
        },
        messaging_source: {
            type: "Enum",
            enumType: 1
        },
        game: {
            type: "String"
        },
        source: {
            type: "Enum",
            enumType: 1
        },
        source_id: {
            type: "String"
        },
        subchannel: {
            type: "String"
        },
        redirect_source: {
            type: "Enum",
            enumType: 1
        }
    })
}
), null);
__d("CustomCTAViewerUnit.react", ["ix", "cx", "AsyncRequest", "CustomCallToActionTypes", "CustomCTALogger", "Image.react", "LocalTriggerEventsTypedLogger", "LocationStoryTypedLogger", "PageCallToActionButton.react", "PageCallToActionButtonActions", "PageCallToActionIcon", "PageCallToActionRef", "PageCallToActionViewerUnitMixin", "PagesLogger", "PagesLoggerEventEnum", "PagesLoggerEventTargetEnum", "PagesLoggerTBLMigrationUtil", "PagesPageActionClickFalcoEvent", "React", "ServicesEventsLogger", "ServicesFBAppointmentsUtils", "XMessengerDotComMainController", "XPagesMessageCallToActionSendController", "asset", "createReactClass_DEPRECATED", "goURI", "prop-types", "qex", "setImmediate"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("CustomCallToActionTypes").LABELS
      , j = b("CustomCallToActionTypes").TYPES
      , k = b("React")
      , l = 16
      , m = 28;
    c = b("createReactClass_DEPRECATED")({
        displayName: "CustomCTAViewerUnit",
        mixins: [b("PageCallToActionViewerUnitMixin")],
        propTypes: {
            ctaButtonIcon: (a = b("prop-types")).string,
            buttonLabel: a.string,
            className: a.string,
            contactUsSpecs: a.object.isRequired,
            entrypoint: a.string,
            hovercardSpecs: a.object,
            iconName: a.string,
            openTableSpecs: a.object.isRequired,
            pageID: a.string.isRequired,
            pageUrl: a.string,
            refButton: a.object,
            referrer: a.string,
            shouldAutoOpen: a.bool,
            storyID: a.string,
            surface: a.string.isRequired,
            userID: a.string.isRequired,
            foodAndDrinkLoggingParams: a.object,
            servicesLoggingParams: a.object,
            ctaIconAsset: a.string,
            isSupporterOfPage: a.bool
        },
        componentDidMount: function() {
            var a = this;
            this.props.shouldAutoOpen && ["DONATE", "FIRST_PARTY", "LEAD_GEN", "MESSENGER", "NATIVE_VIDEO"].indexOf(this.props.destinationType) >= 0 && (this.onButtonClick(),
            b("setImmediate")(function() {
                b("PageCallToActionButtonActions").disableAutoOpen(a.props.cctaID)
            }));
            b("CustomCTALogger").log({
                ccta_id: this.props.cctaID,
                ccta_type: this.props.callToActionType,
                event_type: "custom_cta_show_viewer_unit",
                page_id: this.props.pageID,
                surface: this.props.surface,
                target_url: this.props.url,
                story_id: this.props.storyID
            });
            (this.props.callToActionType === j.BOOK_NOW || this.props.callToActionType === j.REQUEST_QUOTE) && this.logServicesCTAImpression()
        },
        logServicesCTAImpression: function() {
            var a = this.props
              , c = a.pageID
              , d = a.surface;
            a = a.servicesLoggingParams;
            var e = b("ServicesFBAppointmentsUtils").getCTAReferrer(d);
            d = b("ServicesFBAppointmentsUtils").getCTAReferrerSurface(d);
            if (!e || !d)
                return;
            a = a || {};
            var f = a.priorReferrer
              , g = a.priorReferrerSurface;
            a = a.externalReferrerURI;
            f = {
                referrer: e,
                referrer_surface: d,
                prior_referrer: f,
                prior_referrer_surface: g
            };
            a && (f = babelHelpers["extends"]({}, f, {
                external_referrer_uri: a
            }));
            g = {
                referrerUIComponent: e,
                referrerUISurface: d
            };
            a = this.props.callToActionType === j.BOOK_NOW ? "book_now_cta_impression" : "services_organic_intake_form_consumer_cta_impression";
            b("ServicesEventsLogger").log(c, a, g, f)
        },
        onButtonClick: function() {
            var a, c = this;
            this._onClick();
            var d = "custom_cta_click_viewer_unit";
            this.props.hovercardSpecs && this.props.hovercardSpecs.exp === "click" && this.props.surface !== b("PageCallToActionRef").CTA_HOVER_CARD_SURFACE && (d = "custom_cta_hover_viewer_unit");
            b("PagesLogger").log(this.props.pageID, b("PagesLoggerEventEnum").CLICK, b("PagesLoggerEventTargetEnum").PAGES_PRIMARY_CTA_BUTTON, this.props.surface, null, {
                cta_type: this.props.callToActionType,
                cta_id: this.props.cctaID,
                cta_target_url: this.props.url,
                cta_web_destination_type: (a = this.props.ctaWebDestinationType) != null ? a : null
            });
            b("CustomCTALogger").log({
                ccta_id: this.props.cctaID,
                ccta_type: this.props.callToActionType,
                event_type: d,
                page_id: this.props.pageID,
                surface: this.props.surface,
                target_url: this.props.url,
                ref: this.props.referrer,
                story_id: this.props.storyID
            });
            a = this.props.pageID;
            var e = b("PagesLoggerTBLMigrationUtil").convertCTAToActionType(this.props.callToActionType);
            a !== null && a !== void 0 && e !== null && b("PagesPageActionClickFalcoEvent").log(function() {
                return {
                    event_location: "page__legacy_cta_button",
                    page_id: c.props.pageID,
                    referrer: null,
                    event_data: {
                        action_id: c.props.cctaID,
                        action_type: e,
                        is_primary: !0
                    }
                }
            });
            this.props.surface === b("PageCallToActionRef").FEED_STORY_ATTACHMENT && this.logButtonClickToLocationStoryTable();
            this.props.surface === b("PageCallToActionRef").LED_FEED_UNIT && this.logButtonClickToLocalTriggerEventsTable();
            this.props.callToActionType === j.WOODHENGE_SUPPORT && this.props.destinationType === "BECOME_SUPPORTER" && this.props.url != null && b("goURI")(this.props.url);
            if (this.props.callToActionType === j.MESSAGE && (this.props.surface === b("PageCallToActionRef").PAGE_PLUGIN_SURFACE || this.props.surface === b("PageCallToActionRef").SERVICES_SEO_PAGES)) {
                d = b("XMessengerDotComMainController").getURIBuilder().setString("thread_key", this.props.pageID).setEnum("messaging_source", "source:pages:page_plugin_message").getURI().setDomain("www.messenger.com").setProtocol("https");
                window.open(d, "_blank")
            }
            if (this.props.callToActionType === "MESSAGE_PAGE" || this.props.callToActionType === j.MESSAGE) {
                d = (d = b("qex")._("1164632")) != null ? d : !1;
                if (d) {
                    d = b("XPagesMessageCallToActionSendController").getURIBuilder().setInt("page_id", a).getURI();
                    new (b("AsyncRequest"))().setMethod("POST").setURI(d).send()
                }
            }
        },
        logButtonClickToLocationStoryTable: function() {
            new (b("LocationStoryTypedLogger"))().setStoryID(parseInt(this.props.storyID, 10)).setPlaceID(parseInt(this.props.pageID, 10)).setAnalyticsEvent("checkin_cta_tap").setEvent("checkin_cta_tap").setCtaType(this.props.callToActionType).log()
        },
        logButtonClickToLocalTriggerEventsTable: function() {
            new (b("LocalTriggerEventsTypedLogger"))().setEventName(this.props.eventName).setPivotType(this.props.unitType).setObjectType(this.props.objectType).setPlaceID(this.props.pageID).setAttachmentType(this.props.attachmentType).setPostType(this.props.postType).setAuthorType(this.props.authorType).setEntryPoint(this.props.entryPoint).setExperimentName(this.props.experimentName).setExperimentCondition(this.props.experimentCondition).setPostID(this.props.postID).setPosition(this.props.position).updateExtraData(this.props.extraData).log()
        },
        getViewerButtonRef: function() {
            if (!this.props.refButton)
                return this.refs.CTAViewerButton;
            else
                return this.props.refButton
        },
        render: function() {
            var a = this.props
              , c = a.callToActionType;
            a = a.ctaIconAsset;
            c = c;
            var d = c ? i[c] : null;
            d = this.state.buttonLabel || this.props.buttonLabel || d;
            if (!d)
                return null;
            var e = null
              , f = this.props.iconName && this.props.surface === b("PageCallToActionRef").PAGES_ACTIONS_UNIT_SURFACE;
            f ? (this.props.iconName === "app-messenger" ? e = g("481156") : this.props.iconName === "app-whatsapp" ? e = g("482855") : this.props.iconName === "app-work-chat" && (e = g("701301")),
            e !== null && (d = k.jsx("span", {
                className: "_45ky",
                children: d
            }))) : e = c ? b("PageCallToActionIcon").get(c) : null;
            c = (c = (c = (c = a) != null ? c : this.state.buttonIcon) != null ? c : this.props.buttonIcon) != null ? c : e;
            e = a != null ? {
                height: l,
                width: l
            } : null;
            a = k.jsx(b("Image.react"), babelHelpers["extends"]({}, e, {
                src: c
            }));
            this.props.ctaButtonIcon === "play" && (a = k.jsx(b("Image.react"), {
                className: "ctaButtonIcon",
                src: g("497829")
            }),
            d = k.jsx("span", {
                className: "blueButtonLabel",
                children: d
            }),
            f = !0);
            this.props.surface === b("PageCallToActionRef").PAGES_ACTIONS_UNIT_SURFACE && a === null && (d = k.jsx("span", {
                className: "_1m46",
                children: d
            }));
            a != null && d.length > m && (a = null);
            return k.jsx(b("PageCallToActionButton.react"), {
                className: this.props.className,
                displayIconInPagesButton: f,
                icon: a,
                label: d,
                onClick: this.onButtonClick,
                onMouseEnter: this._onMouseEnter,
                onMouseLeave: this._onMouseLeave,
                ref: "CTAViewerButton",
                surface: this.props.surface
            })
        }
    });
    e.exports = c
}
), null);
__d("PageCallToActionButtonDataStore", ["FluxMapStore", "PageCallToActionButtonActionTypes", "PageCallToActionDispatcher"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.reduce = function(a, c) {
            var d = c.ctaID;
            switch (c.type) {
            case b("PageCallToActionButtonActionTypes").DISABLE_AUTO_OPEN:
                if (!this.has(d))
                    break;
                var e = this.at(d)
                  , f = e.unitData;
                if (!f)
                    break;
                f.shouldAutoOpen = !1;
                e.unitData = f;
                return a.set(d, e);
            case b("PageCallToActionButtonActionTypes").SET_LOADING_MODE:
                f = {
                    loading: c.data.loading,
                    unitData: null
                };
                this.has(d) && (f = this.at(d),
                f.loading = !1);
                return a.set(d, f);
            case b("PageCallToActionButtonActionTypes").UNIT_DATA_LOADED:
                return a.set(d, babelHelpers["extends"]({}, c.data));
            default:
                break
            }
            return a
        }
        ;
        return c
    }(b("FluxMapStore"));
    a.__moduleID = e.id;
    c = new a(b("PageCallToActionDispatcher"));
    e.exports = c
}
), null);
__d("CctaBaseDataLoader", ["Promise", "AsyncRequest"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {}
        var c = a.prototype;
        c.__getPromise = function(a, c) {
            return new (b("Promise"))(function(d, e) {
                new (b("AsyncRequest"))().setURI(a).setData(c).setHandler(function(a) {
                    a && a.payload ? d(a.payload) : e({
                        error: "no payload in response",
                        description: "no payload in response",
                        summary: "no payload in response"
                    })
                }).setAllowCrossPageTransition(!0).setErrorHandler(function(a) {
                    return e({
                        error: a.error,
                        description: a.errorDescription,
                        summary: a.errorSummary
                    })
                }).send()
            }
            )
        }
        ;
        return a
    }();
    e.exports = a
}
), null);
__d("XPagesCallToActionFetchDialogDataController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/pages/call_to_action/fetch_dialog_data/", {
        id: {
            type: "FBID",
            required: !0
        },
        surface: {
            type: "Enum",
            required: !0,
            enumType: 1
        },
        unit_type: {
            type: "Enum",
            enumType: 1
        },
        cta_type: {
            type: "String"
        }
    })
}
), null);
__d("PageCallToActionDialogDataLoader", ["CctaBaseDataLoader", "XPagesCallToActionFetchDialogDataController"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.promiseData = function(a, c, d, e, f) {
            f === void 0 && (f = {});
            return this.__getPromise(b("XPagesCallToActionFetchDialogDataController").getURIBuilder().setString("cta_type", e).setFBID("id", a).setEnum("surface", d).setEnum("unit_type", c).getURI().addQueryData(f), {})
        }
        ;
        return c
    }(b("CctaBaseDataLoader"));
    c = new a();
    d = c;
    e.exports = d
}
), null);
__d("PageCallToActionUnitBase.react", ["CustomCallToActionTypes", "Image.react", "PageCallToActionButton.react", "PageCallToActionIcon", "React", "XUISpinner.react"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("CustomCallToActionTypes").LABELS
      , h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            this.needToFetchData() && this.fetchData()
        }
        ;
        d.getCTAOrPageID = function() {
            return this.state.cta && this.state.cta.id ? this.state.cta.id : this.state.page && this.state.page.id
        }
        ;
        d.getTestID = function() {
            return null
        }
        ;
        d.calculateButtonData = function(a) {
            var c = a.cta && a.cta.type
              , d = a.cta && a.cta.label;
            if (!c)
                return null;
            var e = c && b("PageCallToActionIcon").get(c);
            e && (e = h.jsx(b("Image.react"), {
                src: e
            }));
            d = d || c && g[c];
            return !d ? null : {
                entrypoint: a.entrypoint,
                className: a.className || void 0,
                color: a.cta && a.cta.type && !a.cta.id ? "fbblue" : null,
                icon: e || void 0,
                label: d,
                onClick: this.onClick.bind(this),
                onMouseEnter: this.onMouseEnter.bind(this),
                onMouseLeave: this.onMouseLeave.bind(this),
                surface: a.surface,
                testID: this.getTestID()
            }
        }
        ;
        d.onClick = function() {}
        ;
        d.onMouseEnter = function() {
            this.needToFetchData() && this.fetchData()
        }
        ;
        d.onMouseLeave = function() {}
        ;
        d.renderButton = function() {
            var a = this.calculateButtonData(this.props);
            return h.jsx(b("PageCallToActionButton.react"), babelHelpers["extends"]({}, a))
        }
        ;
        d.renderUnit = function() {
            return null
        }
        ;
        d.render = function() {
            var a = this.renderUnit();
            a || (a = this.renderButton());
            !a && this.state.loading && (a = h.jsx(b("XUISpinner.react"), {}));
            return a
        }
        ;
        return c
    }(h.Component);
    e.exports = a
}
), null);
__d("PageCTAViewerUnitContainer.react", ["CustomCTAViewerUnit.react", "FluxContainer", "PageCallToActionButtonActions", "PageCallToActionButtonDataStore", "PageCallToActionDialogDataLoader", "PageCallToActionDispatcher", "PageCallToActionUnitBase.react", "React", "Tooltip.react", "promiseDone"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        c.getStores = function() {
            return [b("PageCallToActionButtonDataStore")]
        }
        ;
        c.calculateState = function(a, c) {
            a || (a = {
                className: c.className,
                cta: c.cta,
                entrypoint: c.entrypoint,
                loading: !1,
                page: c.page,
                surface: c.surface,
                unitData: c.unitData
            });
            c = c.cta;
            if (!c)
                return a;
            c = c.id;
            if (!c || !b("PageCallToActionButtonDataStore").has(c))
                return a;
            c = b("PageCallToActionButtonDataStore").at(c);
            return c.unitData ? babelHelpers["extends"]({}, a, {
                unitData: c.unitData
            }) : a
        }
        ;
        var d = c.prototype;
        d.UNSAFE_componentWillMount = function() {
            b("PageCallToActionDispatcher").explicitlyRegisterStores([b("PageCallToActionButtonDataStore")])
        }
        ;
        d.fetchData = function() {
            var a = this.getCTAOrPageID();
            if (!a || this.state.loading || this.state.unitData)
                return;
            b("PageCallToActionButtonActions").setLoadingMode(a, !0);
            b("promiseDone")(b("PageCallToActionDialogDataLoader").promiseData(a, "VIEWER", this.props.surface, void 0, this.props.foodAndDrinkExtraProps || {}), function(c) {
                b("PageCallToActionButtonActions").setUnitData(a, {
                    loading: !1,
                    unitData: babelHelpers["extends"]({}, c)
                })
            }, function(c) {
                b("PageCallToActionButtonActions").setLoadingMode(a, !1)
            })
        }
        ;
        d.needToFetchData = function() {
            return !this.state.unitData
        }
        ;
        d.renderUnit = function() {
            if (!this.state.unitData)
                return null;
            var a = g.jsx(b("CustomCTAViewerUnit.react"), babelHelpers["extends"]({}, this.props.extraProps, this.state.unitData, {
                className: this.props.className,
                ctaButtonIcon: this.props.ctaButtonIcon,
                ctaWebDestinationType: this.props.ctaWebDestinationType,
                entrypoint: this.props.entrypoint,
                surface: this.props.surface
            }));
            return this.state.unitData.tooltipText ? g.jsx(b("Tooltip.react"), {
                tooltip: this.state.unitData.tooltipText,
                display: "block",
                children: a
            }) : a
        }
        ;
        d.getTestID = function() {
            return "ccta_viewer_unit_testid"
        }
        ;
        return c
    }(b("PageCallToActionUnitBase.react"));
    c = b("FluxContainer").create(a, {
        withProps: !0
    });
    e.exports = c
}
), null);
