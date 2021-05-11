if (self.CavalryLogger) {
    CavalryLogger.start_js(["3X7wV"]);
}

__d("BoostedComponentDialogButtonV2Wrapper.react", ["AdsLWIProductUtils", "AsyncRequest", "FBLogger", "FDSSpinner.react", "JSResource", "React", "XBoostedComponentFetchButtonDataController", "lazyLoadComponent", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = b("lazyLoadComponent")(b("JSResource")("AdsLWIDialogButtonContainer.react").__setRef("BoostedComponentDialogButtonV2Wrapper.react"));
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(b) {
            var c;
            c = a.call(this, b) || this;
            c.state = {
                buttonData: null
            };
            c.$1 = null;
            c.$2(b);
            return c
        }
        var d = c.prototype;
        d.componentDidUpdate = function(a) {
            (a.targetID !== this.props.targetID || a.product !== this.props.product) && this.$2(this.props)
        }
        ;
        d.componentWillUnmount = function() {
            this.$1 != null && (this.$1.abort(),
            this.$1 = null)
        }
        ;
        d.$2 = function(a) {
            var c, d = this;
            this.state.buttonData && this.setState({
                buttonData: null
            });
            this.$1 != null && this.$1.abort();
            var e = a.appID
              , f = a.onButtonDataLoaded;
            e = e != null && b("AdsLWIProductUtils").convertAppIDToProduct(e);
            c = b("nullthrows")((c = a.product) != null ? c : e);
            e = b("XBoostedComponentFetchButtonDataController").getURIBuilder().setEnum("product", c).setInt("page_id", a.pageID).setInt("post_id", a.targetID).setString("ref", a.placement).setBool("permanent_create_mode", a.permanentCreateMode).setFBID("boost_id", a.boostID).setString("entry_point_details", a.entryPointDetails).getURI();
            c = new (b("AsyncRequest"))(e).setHandler(function(a) {
                d.setState({
                    buttonData: a.payload
                }),
                f && f(a.payload)
            }).setErrorHandler(function(a) {
                a = a.getErrorSummary();
                b("FBLogger")("boosted_component").mustfix("Unable to fetch button data: %s", a != null ? a.toString() : "Empty")
            });
            this.$1 = c;
            c.send()
        }
        ;
        d.render = function() {
            var a;
            a = (a = this.props.loadingComponent) != null ? a : g.jsx(b("FDSSpinner.react"), {
                size: "small"
            });
            var c = this.state.buttonData;
            return !c ? a : g.jsx(g.Suspense, {
                fallback: a,
                children: g.jsx(h, {
                    autoOpenDialog: this.props.autoOpenDialog,
                    buttonLabel: this.props.buttonLabel,
                    buttonUse: this.props.buttonUse,
                    configData: c.configData,
                    customComponent: this.props.customComponent,
                    customComponentForBoostAgain: this.props.customComponentForBoostAgain,
                    inline: this.props.inline,
                    instanceData: c.instanceData,
                    instanceID: this.props.instanceID || c.instanceID,
                    permanentCreateMode: this.props.permanentCreateMode,
                    shouldAutoOpenCoBDialog: this.props.shouldAutoOpenCoBDialog,
                    size: this.props.buttonSize,
                    stopPropagation: this.props.stopPropagation,
                    onClick: this.props.onClick
                })
            })
        }
        ;
        return c
    }(g.PureComponent);
    e.exports = a
}
), null);
__d("XPageLinkInstagramAccountOAuthUpdateController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/page/instagram/oauthlink/update/", {
        privacy_mutation_token: {
            type: "String"
        }
    })
}
), null);
__d("BasePageLinkInstagramAccountOAuthLogin.react", ["AsyncRequest", "InstagramAuthenticationErrorMessages", "React", "SecureMessageListener", "SUIBusinessTheme", "SUINotice.react", "XPageLinkInstagramAccountOAuthUpdateController", "XUINoticeGroup.react", "cxMargin"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.state = {
                messages: []
            },
            d.$1 = null,
            d.$3 = function(a) {
                if (!a.data.isFromOAuth)
                    return;
                if (d.props.listenerID != null && d.props.listenerID != a.data.listenerID)
                    return;
                !a.data.code ? d.setState({
                    messages: [b("InstagramAuthenticationErrorMessages").getMessage()]
                }) : d.$4(a.data.code)
            }
            ,
            d.$6 = function(a) {
                if (!a.payload.instagram_account_id) {
                    var c = !0;
                    d.props.customErrorHandler && (c = d.props.customErrorHandler(a));
                    if (c === !0) {
                        c = a.payload.error_messages || [];
                        a.payload.error_code && c.push(b("InstagramAuthenticationErrorMessages").getMessage(a.payload.error_code));
                        c.length === 0 && c.push(b("InstagramAuthenticationErrorMessages").getMessage());
                        d.setState({
                            messages: c
                        })
                    }
                } else
                    d.props.responseHandler(a)
            }
            ,
            d.$7 = function() {
                d.setState({
                    messages: [b("InstagramAuthenticationErrorMessages").getMessage()]
                })
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            var a;
            this.$2();
            (a = this.$1) == null ? void 0 : a.beginListening()
        }
        ;
        d.componentWillUnmount = function() {
            var a;
            (a = this.$1) == null ? void 0 : a.stopListening()
        }
        ;
        d.$2 = function() {
            this.$1 === null && (this.$1 = new (b("SecureMessageListener"))(window).setEventHandler(this.$3))
        }
        ;
        d.render = function() {
            return g.jsx("div", {
                children: this.$5()
            })
        }
        ;
        d.$5 = function() {
            return this.state.messages.length === 0 ? null : g.jsx(b("XUINoticeGroup.react"), {
                className: "_3-8y",
                children: this.state.messages.map(function(a, c) {
                    return g.jsx(b("SUINotice.react"), {
                        style: {
                            marginTop: "4px"
                        },
                        theme: b("SUIBusinessTheme"),
                        type: "error",
                        children: a
                    }, c)
                })
            })
        }
        ;
        d.$4 = function(a) {
            a = {
                code: a,
                page_id: this.props.pageID,
                link_to_page: this.props.linkToPage,
                permissions: this.props.permissions,
                allow_override_link: this.props.allowOverrideLink,
                is_ig_link_confirmation_flow: this.props.isLinkConfirmationFlow,
                terms_of_service: this.props.termsOfService,
                link_flow_source: this.props.linkFlowSource,
                entry_point: this.props.entryPoint,
                override_all_ig_links: this.props.overrideAllIGLinks
            };
            var c = b("XPageLinkInstagramAccountOAuthUpdateController").getURIBuilder().getURI();
            new (b("AsyncRequest"))().setAllowCrossOrigin(!0).setURI(c).setMethod("POST").setData(a).setHandler(this.$6).setErrorHandler(this.$7).send()
        }
        ;
        return c
    }(g.Component);
    e.exports = a
}
), null);
__d("AdsMessengerVisualEditorLoggerEvents", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({
        CTM_VISUAL_EDITOR_RENDER: "ctm_visual_editor_render",
        CTM_EDIT_PAGE_WELCOME_MESSAGE: "ctm_edit_page_welcome_message",
        CTM_STANDARD_EDITING_DIALOG_OPEN: "ctm_standard_editing_dialog_open",
        CTM_CUSTOM_EDITING_DIALOG_OPEN: "ctm_custom_editing_dialog_open",
        CTM_CREATE_CUSTOM_TEMPLATE_SUCCESS: "create_custom_template_success",
        CTM_DUPLICATE_CUSTOM_TEMPLATE: "ctm_duplicate_custom_template",
        CTM_DUPLICATE_CTM_LEAD_GEN: "ctm_duplicate_ctm_lead_gen",
        CTM_CHANGE_STANDARD_TEMPLATE: "ctm_change_standard_template",
        CTM_CREATE_CUSTOM_TEMPLATE_FAIL: "create_custom_template_fail",
        CTM_PREVIEW_MESSAGE_SUCCESS: "ctm_preview_message_success",
        CTM_PREVIEW_MESSAGE_FAILED: "ctm_preview_message_failed",
        CTM_CHANGE_STANDARD_TEMPLATE_ICEBREAKER: "ctm_change_standard_template_icebreaker",
        CTM_SELECT_CUSTOM_WELCOME_MESSAGE: "ctm_select_custom_welcome_message",
        CTM_CREATE_NEW_TEMPLATE_FAIL: "ctm_create_new_template_fail",
        CTM_CREATE_NEW_TEMPLATE_SUCCESS: "ctm_create_new_template_success",
        CTM_EDIT_TEMPLATE_FAIL: "ctm_edit_template_fail",
        CTM_EDIT_TEMPLATE_SUCCESS: "ctm_edit_template_success",
        CTM_DELETE_TEMPLATE: "ctm_delete_template",
        CTM_FINISH_WITHOUT_SAVING: "ctm_finish_without_saving",
        CTM_ADVANCED_JSON_SETUP: "ctm_advanced_json_setup",
        CTM_INSERT_EMOJI: "ctm_insert_emoji",
        CTM_PERSONALIZE_SAVED_RESPONSE: "ctm_personalize_saved_response",
        CTM_RENDER_EMOJI_BUTTON: "ctm_render_emoji_button",
        CTM_CLICK_EMOJI_BUTTON: "ctm_click_emoji_button",
        CTM_CLICK_EDIT: "ctm_click_edit",
        CTM_EP_CLICK_EDIT: "ctm_ep_click_edit",
        CTM_EP_CLICK_JSON: "ctm_ep_click_json",
        CTM_EP_FINISH_WITHOUT_SAVING: "ctm_ep_finish_without_saving",
        CTM_EP_SAVE_TEMPLATE: "ctm_ep_save_template",
        CTM_EP_VE_RENDERED: "ctm_ep_ve_rendered",
        CTM_VE_RENDERED: "ctm_ve_rendered",
        CTM_EP_CLOSE_DIALOG: "ctm_ep_close_dialog",
        CTM_CLOSE_DIALOG: "ctm_close_dialog",
        CTM_RENDER_JSON_PREVIEW: "ctm_render_json_preview",
        CTM_RENDER_GET_STARTED_PREVIEW: "ctm_render_get_started_preview",
        CTM_SAVE_QR_NULL_TEXT_RESPONSE: "ctm_save_qr_null_text_response",
        CTM_SAVE_QR_TEXT_RESPONSE: "ctm_save_qr_text_response",
        CTM_SAVE_QR_BOT_RESPONSE: "ctm_save_qr_bot_response",
        CTM_SAVE_QR_NONE_RESPONSE: "ctm_save_qr_none_response",
        CTM_SELECT_CREATE_NEW_TAB: "ctm_select_create_new_tab",
        CTM_SELECT_USE_EXISTING_TAB: "ctm_select_existing_tab",
        CTM_SELECT_EXISTING_TEMPLATE_LEAD_GEN: "ctm_select_existing_lead_gen",
        CTM_SELECT_EXISTING_TEMPLATE_START_CONVERSATION_WELCOME: "ctm_select_existing_start_conversation_welcome",
        CTM_SELECT_EXISTING_TEMPLATE_PRE_REG: "ctm_select_existing_template_pre_reg",
        CTM_SELECT_EXISTING_TEMPLATE_GET_STARTED: "ctm_select_existing_template_get_started",
        CTM_SELECT_EXISTING_TEMPLATE_BOT_DEEPLINK: "ctm_select_existing_template_bot_deeplink",
        CTM_SELECT_EXISTING_TEMPLATE_UNKNOWN: "ctm_select_existing_template_unknown",
        CTM_CANCEL_LEAD_GEN_DIALOG: "ctm_cancel_lead_gen_dialog",
        CTM_CLICK_LEAD_GEN_CREATE_CHAT: "ctm_click_lead_gen_create_chat",
        CTM_FINISH_LEAD_GEN_DIALOG: "ctm_finish_lead_gen_dialog",
        CTM_LEAD_GEN_EMPTY_PRIVACY_LINK: "ctm_lead_gen_empty_privacy_link",
        CTM_LEAD_GEN_EXISTING_PRIVACY_LINK: "ctm_lead_gen_existing_privacy_link",
        CTM_LEAD_GEN_INVALID_PRIVACY_LINK: "ctm_lead_gen_invalid_privacy_link",
        CTM_LEAD_GEN_INSERT_EMOJI: "ctm_lead_gen_insert_emoji",
        CTM_LEAD_GEN_PERSONALIZE_QUESTION: "ctm_lead_gen_personalize_question",
        CTM_SELECT_FOLLOW_UP: "ctm_select_follow_up",
        CTM_SELECT_LEAD_GEN: "ctm_select_lead_gen",
        CTM_CHANGE_OPTIMIZATION_GOAL: "ctm_change_optimization_goal",
        CTM_LEAD_GEN_CREATION_DATA_ACTION_INTRO: "ctm_lead_gen_creation_data_action_intro",
        CTM_LEAD_GEN_CREATION_DATA_ACTION_CONFIRMATION: "ctm_lead_gen_creation_data_action_confirmation",
        CTM_LEAD_GEN_CREATION_DATA_ACTION_DISQUALIFY: "ctm_lead_gen_creation_data_action_disqualify",
        CTM_LEAD_GEN_CREATION_DATA_ACTION_FOLLOW_UP: "ctm_lead_gen_creation_data_action_follow_up",
        CTM_LEAD_GEN_CREATION_DATA_ACTION_PRIVACY_POLICY: "ctm_lead_gen_creation_data_action_privacy_policy",
        CTM_LEAD_GEN_CREATION_DATA_ACTION_QUESTION: "ctm_lead_gen_creation_data_action_question",
        CTM_LEAD_GEN_CREATION_DATA_ACTION_QUESTION_ADD: "ctm_lead_gen_creation_data_action_question_add",
        CTM_LEAD_GEN_CREATION_DATA_ACTION_QUESTION_REMOVE: "ctm_lead_gen_creation_data_action_question_remove",
        CTM_LEAD_GEN_CREATION_DATA_ACTION_QUESTION_REORDER: "ctm_lead_gen_creation_data_action_question_reorder",
        CTM_LEAD_GEN_CREATION_DATA_ACTION_REMINDER: "ctm_lead_gen_creation_data_action_reminder",
        CTM_LEAD_GEN_CREATION_DATA_ACTION_STOP_MESSAGE: "ctm_lead_gen_creation_data_action_stop_message",
        CTM_LEAD_GEN_CREATION_DATA_ACTION_HOP: "ctm_lead_gen_creation_data_action_hop",
        CTM_LEAD_GEN_CREATION_PREVIEW_BUTTON_CLICKED: "ctm_lead_gen_creation_preview_button_clicked",
        CTM_LEAD_GEN_CREATION_VALIDATION_SUCCESS: "ctm_lead_gen_creation_validation_success",
        CTM_LEAD_GEN_CREATION_VALIDATION_FAIL: "ctm_lead_gen_creation_validation_fail",
        CTM_LEAD_GEN_SELECT_LEAD_FORM: "ctm_lead_gen_select_lead_form",
        CTM_LEAD_GEN_SELECT_MESSENGER: "ctm_lead_gen_select_messenger",
        CTM_LEAD_GEN_FORMAT_SELECTOR_RENDER: "ctm_lead_gen_format_selector_render",
        CTM_LEAD_GEN_SHOW_ONBOARDING_INTRO: "ctm_lead_gen_show_onboarding_intro",
        CTM_LEAD_GEN_SHOW_ONBOARDING_OPTIONS: "ctm_lead_gen_show_onboarding_options",
        CTM_LEAD_GEN_SHOW_ONBOARDING_DISQ: "ctm_lead_gen_show_onboarding_disq",
        CTM_LEAD_GEN_SHOW_ONBOARDING_CONF: "ctm_lead_gen_show_onboarding_conf"
    });
    e.exports = a
}
), null);
__d("BoostedPostStrings", ["fbt"], (function(a, b, c, d, e, f, g) {
    a = g._("Qu\u1ea3ng c\u00e1o b\u00e0i vi\u1ebft");
    f.DEFAULT_BUTTON_LABEL = a;
    b = g._("Qu\u1ea3ng c\u00e1o tin tuy\u1ec3n d\u1ee5ng");
    f.JOB_OPENING_DIALOG_TITLE = b;
    c = g._("Qu\u1ea3ng c\u00e1o nh\u00f3m");
    f.PROMOTE_GROUP_DIALOG_TITLE = c;
    d = g._("Chia s\u1ebb v\u00e0 qu\u1ea3ng c\u00e1o b\u00e0i vi\u1ebft");
    f.SHARE_AND_BOOST_TITLE = d;
    e = g._("Qu\u1ea3ng c\u00e1o b\u00e0i vi\u1ebft");
    f.DIRECT_BOOST_TITLE = e;
    a = g._("Qu\u1ea3ng c\u00e1o s\u1ef1 ki\u1ec7n");
    f.EVENT_BUTTON_LABEL = a;
    b = g._("Qu\u1ea3ng c\u00e1o nh\u00f3m");
    f.GROUP_BUTTON_LABEL = b;
    c = {
        LOCATION: g._("V\u1ecb tr\u00ed"),
        AGE: g._("\u0110\u1ed9 tu\u1ed5i"),
        GENDER: g._("Gi\u1edbi t\u00ednh"),
        LANGUAGES: g._("Ng\u00f4n ng\u1eef"),
        INTERESTS: g._("S\u1edf th\u00edch"),
        ADD_REGION_PLACEHOLDER: g._("Th\u00eam ti\u1ec3u bang\/t\u1ec9nh..."),
        ADD_CITY_PLACEHOLDER: g._("Th\u00eam th\u00e0nh ph\u1ed1..."),
        COUNTRY: g._("Qu\u1ed1c gia")
    };
    f.TARGETING_LABELS = c
}
), null);
__d("DevappSwitchButton.react", ["cx", "fbt", "React", "guid", "prop-types"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    a = "yesno";
    var j = "customized"
      , k = "onoff"
      , l = "io"
      , m = "yes"
      , n = "no";
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.$1 = function(a) {
            switch (this.props.labels) {
            case k:
                return a == m ? h._("B\u1eacT") : h._("T\u1eaeT");
            case l:
                return a == m ? "I" : "O";
            case j:
                if (this.props.yesLabel && this.props.noLabel)
                    return a == m ? this.props.yesLabel : this.props.noLabel;
            default:
                return a == m ? h._("C\u00d3") : h._("KH\u00d4NG")
            }
        }
        ;
        d.render = function() {
            var a = b("guid")()
              , c = i.jsx("input", babelHelpers["extends"]({}, this.props, {
                type: "checkbox",
                id: a,
                defaultValue: "1"
            }));
            return i.jsxs("div", {
                className: "_59fh" + (this.props.size == "small" ? " _5a89" : "") + (this.props.size == "x-small" ? " _2lrd" : "") + (this.props.use == "blue" ? " _2lrc" : ""),
                children: [c, i.jsxs("label", {
                    htmlFor: a,
                    children: [i.jsx("div", {
                        className: "_59fi",
                        children: this.$1(m)
                    }), i.jsx("div", {
                        className: "_59fj"
                    }), i.jsx("div", {
                        className: "_59fk",
                        children: this.$1(n)
                    })]
                })]
            })
        }
        ;
        return c
    }(i.Component);
    e.exports = c;
    c.propTypes = {
        labels: (d = b("prop-types")).oneOf([a, k, l, j]),
        size: d.oneOf(["normal", "small", "x-small"]),
        use: d.oneOf(["default", "blue"]),
        checked: d.bool,
        disabled: d.bool,
        onChange: d.func,
        onClick: d.func,
        yesLabel: d.string,
        noLabel: d.string
    }
}
), null);
__d("MacroInput.react", ["cx", "DraftEditor.react", "EditorState", "React", "joinClasses", "prop-types"], (function(a, b, c, d, e, f, g) {
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.blur = function() {
                c.refs.abstractTextEditor && c.refs.abstractTextEditor.blur()
            }
            ,
            c.focus = function() {
                c.refs.abstractTextEditor && c.refs.abstractTextEditor.focus()
            }
            ,
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.render = function() {
            var a = b("joinClasses")(this.props.className, this.props.isAdsInterfaceSource ? "_4n-0" + (this.props.readOnly ? " _43rs" : "") : "_38bx" + (this.props.readOnly ? " _43rs" : ""));
            return h.jsx("div", {
                className: a,
                onClick: this.focus,
                onFocus: this.focus,
                role: "presentation",
                children: h.jsx("div", {
                    className: "_18_r",
                    children: h.jsx(b("DraftEditor.react"), babelHelpers["extends"]({}, this.props, {
                        ref: "abstractTextEditor"
                    }))
                })
            })
        }
        ;
        return c
    }(h.Component);
    e.exports = a;
    a.propTypes = {
        autoflip: (c = b("prop-types")).bool,
        editorState: c.instanceOf(b("EditorState")).isRequired,
        isAdsInterfaceSource: c.bool,
        onChange: c.func.isRequired,
        placeholder: c.string,
        readOnly: c.bool.isRequired,
        spellCheck: c.bool
    };
    a.defaultProps = b("DraftEditor.react").defaultProps
}
), null);
__d("PagesReplyComposerEditorView.react", ["cx", "MacroInput.react", "React", "XUISpinner.react", "getDefaultKeyBinding", "joinClasses", "removeEmojiFromEditorState"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = 8
      , j = 46
      , k = Object.freeze({
        EMOJI_BACKSPACE: "emojiBackspace",
        EMOJI_DELETE: "emojiDelete"
    });
    function l(a) {
        if (a.keyCode === i)
            return k.EMOJI_BACKSPACE;
        else if (a.keyCode === j)
            return k.EMOJI_DELETE;
        return b("getDefaultKeyBinding")(a)
    }
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$1 = function(a, c, e) {
                var f;
                switch (a) {
                case "emojiBackspace":
                    f = "backspace";
                    break;
                case "emojiDelete":
                    f = "delete";
                    break
                }
                if (f) {
                    e = b("removeEmojiFromEditorState")(f, c);
                    if (d.props.composerState.currentContent !== e) {
                        d.props.onReplyChange(e);
                        return "handled"
                    }
                }
                return "not-handled"
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.render = function() {
            return h.jsxs("div", {
                className: this.props.config.isAdsInterfaceSource === !0 ? b("joinClasses")(this.props.className, "_1hot" + (this.props.isSideToolbar === !0 ? " _93cc" : "")) : b("joinClasses")(this.props.className, "_-x3"),
                children: [h.jsx("div", {
                    className: "_-x4" + (this.props.composerState.isInitialized ? " hidden_elem" : ""),
                    children: h.jsx("div", {
                        className: "_-x5",
                        children: h.jsx(b("XUISpinner.react"), {
                            size: "large"
                        })
                    })
                }), h.jsx(b("MacroInput.react"), {
                    className: this.props.config.isAdsInterfaceSource === !0 ? "_2ph-" + (this.props.isEditDisabled !== !0 ? " _1hou" : "") + (this.props.isEditDisabled === !0 ? " _7vfc" : "") + (this.props.isCTMLeadGen === !0 ? " _8-l_" : "") : this.props.config.isInboxCombinedCustomQuestionTest === !0 ? b("joinClasses")(this.props.inputClassName, "_8hq-") : b("joinClasses")(this.props.inputClassName, "_-x6"),
                    editorState: this.props.composerState.currentContent,
                    handleKeyCommand: this.$1,
                    isAdsInterfaceSource: this.props.config.isAdsInterfaceSource,
                    keyBindingFn: l,
                    onChange: this.props.onReplyChange,
                    placeholder: this.props.config.placeholderText,
                    readOnly: this.props.composerState.disabled || this.props.isEditDisabled === !0
                })]
            })
        }
        ;
        return c
    }(h.PureComponent);
    e.exports = a
}
), null);
__d("PagesReplyComposerEmojiButton.react", ["AdsInterfacesLogger", "AdsMessengerVisualEditorLoggerEvents", "EmojiInputButton.react", "React", "addEmojiToEditorState"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$2 = function(a) {
                var c = d.props.composerState.currentContent;
                if (c === null)
                    return;
                b("addEmojiToEditorState")(a, c, d.props.onReplyChange);
                b("AdsInterfacesLogger").log({
                    eventName: d.props.isCTMLeadGen ? b("AdsMessengerVisualEditorLoggerEvents").CTM_LEAD_GEN_INSERT_EMOJI : b("AdsMessengerVisualEditorLoggerEvents").CTM_INSERT_EMOJI
                })
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            b("AdsInterfacesLogger").log({
                eventName: b("AdsMessengerVisualEditorLoggerEvents").CTM_RENDER_EMOJI_BUTTON
            })
        }
        ;
        d.$1 = function() {
            b("AdsInterfacesLogger").log({
                eventName: b("AdsMessengerVisualEditorLoggerEvents").CTM_CLICK_EMOJI_BUTTON
            })
        }
        ;
        d.render = function() {
            return g.jsx(b("EmojiInputButton.react"), {
                buttonClassName: this.props.buttonClassName,
                iconActiveClassName: this.props.iconActiveClassName,
                iconClassName: this.props.iconClassName,
                onClick: this.$1,
                onSelect: this.$2,
                padPicker: !0,
                position: "below"
            })
        }
        ;
        return c
    }(g.PureComponent);
    e.exports = a
}
), null);
__d("PagesReplyComposerEditorContainer.react", ["ix", "cx", "fbt", "FDSButton.react", "FileInput.react", "Layout.react", "ContentState", "EditorState", "FluxContainer", "Image.react", "PagesReplyComposerActions", "PagesReplyComposerDispatcher", "PagesReplyComposerEditorView.react", "PagesReplyComposerEmojiButton.react", "PagesReplyComposerStore", "React", "asset", "isNullish", "isStringNullOrEmpty", "XUIError.react"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = b("Layout.react").Column
      , k = b("Layout.react").FillColumn
      , l = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        c.getStores = function(a) {
            return [b("PagesReplyComposerStore").getByKey(a.config.composerKey)]
        }
        ;
        c.calculateState = function(a, c) {
            a = b("PagesReplyComposerStore").getByKey(c.config.composerKey).getState();
            return {
                composerState: a
            }
        }
        ;
        function c(c) {
            var d;
            d = a.call(this, c) || this;
            d.$3 = function(a) {
                d.$1.notifyContentChange(a)
            }
            ;
            d.$1 = b("PagesReplyComposerActions").getActionsByKey(c.config.composerKey);
            return d
        }
        var d = c.prototype;
        d.componentDidUpdate = function(a, c) {
            var d, e = this.state.composerState.currentContent.getCurrentContent().getPlainText().trim(), f = c.composerState.currentContent.getCurrentContent().getPlainText().trim();
            d = (d = this.props.welcomeString) == null ? void 0 : d.toString();
            var g = this.props.onReplyChange;
            c.composerState.currentContent !== this.state.composerState.currentContent && (g && g(e));
            this.props.config.isAdsInterfaceSource === !0 && f === e && !b("isStringNullOrEmpty")(d) && d !== e && this.$2();
            a.config.automationID !== this.props.config.automationID && this.$1.initializeStoreWithConfig(this.props.config)
        }
        ;
        d.$2 = function() {
            b("PagesReplyComposerDispatcher").getByKey(this.props.config.composerKey).explicitlyRegisterStores([b("PagesReplyComposerStore").getByKey(this.props.config.composerKey)]),
            this.$1.initializeStoreWithConfig(this.props.config),
            this.props.config.isAdsInterfaceSource === !0 && this.$3 && this.$3(b("EditorState").createWithContent(b("ContentState").createFromText(this.props.welcomeString != null ? this.props.welcomeString.toString() : "")))
        }
        ;
        d.UNSAFE_componentWillMount = function() {
            this.$2()
        }
        ;
        d.render = function() {
            var a = i._("Th\u00eam h\u00ecnh \u1ea3nh")
              , c = i._("Th\u00eam video");
            return l.jsxs(b("Layout.react"), {
                children: [l.jsx(k, {
                    children: l.jsx(b("PagesReplyComposerEditorView.react"), {
                        className: this.props.className,
                        composerState: this.state.composerState,
                        config: this.props.config,
                        inputClassName: this.props.inputClassName,
                        isCTMLeadGen: this.props.isCTMLeadGen,
                        isEditDisabled: this.props.isEditDisabled,
                        isSideToolbar: this.props.isSideToolbar,
                        onReplyChange: this.$3
                    })
                }), this.props.isEditDisabled !== !0 && l.jsxs(l.Fragment, {
                    children: [l.jsx(j, {
                        className: (this.props.isSideToolbar === !0 && this.props.isCondensedCQ ? "_9a4z" : "") + (this.props.isSideToolbar === !0 && !this.props.isCondensedCQ ? " _9a4-" : "") + (this.props.isSideToolbar ? "" : " _84sp"),
                        children: l.jsx(b("PagesReplyComposerEmojiButton.react"), {
                            buttonClassName: "_84s8",
                            composerState: this.state.composerState,
                            iconActiveClassName: "_84s9 _9a4_",
                            iconClassName: (this.props.isCondensedCQ !== !0 ? "_84sa" : "") + (this.props.isCondensedCQ ? " _9abb" : "") + (this.props.isSideToolbar === !0 && !this.props.isFocused === !0 && !this.props.isHovered === !0 ? " _9a50" : ""),
                            isCTMLeadGen: this.props.isCTMLeadGen || !1,
                            onReplyChange: this.$3
                        })
                    }), this.props.isCondensedCQ === !0 && this.props.showMediaIcons === !0 && l.jsxs(l.Fragment, {
                        children: [l.jsx(j, {
                            className: "_9a62",
                            children: l.jsx(b("FDSButton.react"), {
                                icon: l.jsx(b("Image.react"), {
                                    src: g("784857")
                                }),
                                label: "Image",
                                labelIsHidden: !0,
                                onClick: this.props.onImageIconSelect,
                                style: {
                                    visibility: this.props.isFocused === !0 || this.props.isHovered === !0 ? "visible" : "hidden",
                                    height: 16,
                                    padding: 0
                                },
                                tooltip: a
                            })
                        }), l.jsx(j, {
                            className: "_9a65",
                            children: l.jsx("div", {
                                className: "_9cs4",
                                children: l.jsx(b("XUIError.react"), {
                                    xuiError: this.props.videoError,
                                    children: l.jsx("div", {
                                        children: l.jsx(b("FileInput.react"), {
                                            accept: "video/*",
                                            name: "file",
                                            onChange: this.props.onVideoIconSelect,
                                            children: l.jsx(b("FDSButton.react"), {
                                                href: {
                                                    url: "#"
                                                },
                                                icon: b("isNullish")(this.props.videoError) ? l.jsx(b("Image.react"), {
                                                    src: g("1102366")
                                                }) : l.jsx(b("Image.react"), {
                                                    src: g("1620191")
                                                }),
                                                label: "Image",
                                                labelIsHidden: !0,
                                                style: {
                                                    visibility: this.props.isFocused === !0 || this.props.isHovered === !0 || !b("isNullish")(this.props.videoError) ? "visible" : "hidden",
                                                    height: 16,
                                                    padding: 0
                                                },
                                                tooltip: c
                                            })
                                        })
                                    })
                                })
                            })
                        })]
                    })]
                })]
            })
        }
        ;
        return c
    }(l.PureComponent);
    c = b("FluxContainer").create(a, {
        withProps: !0,
        pure: !0
    });
    e.exports = c
}
), null);
__d("PagesReplyComposerMacroView.react", ["cx", "React", "prop-types"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.$1 = function() {
                c.props.onSelected(c.props.macro)
            }
            ,
            b) || babelHelpers.assertThisInitialized(c)
        }
        var c = b.prototype;
        c.render = function() {
            return h.jsx("div", {
                className: "_q2m",
                onClick: this.$1,
                children: h.jsx("div", {
                    className: this.props.isAdsInterfaceSource === !0 ? "_2ph- _63ig" : "_q2n",
                    children: this.props.macro.title
                })
            })
        }
        ;
        return b
    }(h.Component);
    e.exports = a;
    a.propTypes = {
        isAdsInterfaceSource: b("prop-types").bool
    }
}
), null);
__d("PagesReplyComposerMacroBrowserView.react", ["cx", "PagesReplyComposerMacroView.react", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a(a) {
        function c(c) {
            return h.jsx(b("PagesReplyComposerMacroView.react"), {
                isAdsInterfaceSource: a.isAdsInterfaceSource,
                macro: c,
                onSelected: a.onMacroSelected
            }, c.key)
        }
        var d = a.composerState.supportedMacros.filter(function(a) {
            return a.key === "user_first_name" || a.key === "user_last_name" || a.key === "user_full_name"
        });
        return h.jsx("div", {
            className: "_518s",
            children: a.isAdsInterfaceSource === !0 ? d.map(function(a) {
                return c(a)
            }) : a.composerState.supportedMacros.map(function(a) {
                return c(a)
            })
        })
    }
}
), null);
__d("PagesReplyComposerMacroBrowserContainer.react", ["FluxContainer", "PagesReplyComposerActionKeys", "PagesReplyComposerActions", "PagesReplyComposerDispatcher", "PagesReplyComposerMacroBrowserView.react", "PagesReplyComposerStore", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        c.getStores = function(a) {
            return [b("PagesReplyComposerStore").getByKey(a.config.composerKey)]
        }
        ;
        c.calculateState = function(a, c) {
            return {
                composerState: b("PagesReplyComposerStore").getByKey(c.config.composerKey).getState()
            }
        }
        ;
        function c(c) {
            var d;
            d = a.call(this, c) || this;
            d.$2 = function(a) {
                d.$1.notifyToggleOff(b("PagesReplyComposerActionKeys").TOGGLE_PERSONALIZATION),
                d.$1.notifyInsertMacro(a)
            }
            ;
            d.$1 = b("PagesReplyComposerActions").getActionsByKey(d.props.config.composerKey);
            return d
        }
        var d = c.prototype;
        d.UNSAFE_componentWillMount = function() {
            b("PagesReplyComposerDispatcher").getByKey(this.props.config.composerKey).explicitlyRegisterStores([b("PagesReplyComposerStore").getByKey(this.props.config.composerKey)])
        }
        ;
        d.render = function() {
            return g.jsx(b("PagesReplyComposerMacroBrowserView.react"), {
                className: this.props.className,
                composerState: this.state.composerState,
                isAdsInterfaceSource: this.props.config.isAdsInterfaceSource,
                onMacroSelected: this.$2
            })
        }
        ;
        return c
    }(g.Component);
    c = b("FluxContainer").create(a, {
        withProps: !0,
        pure: !0
    });
    e.exports = c
}
), null);
__d("PagesReplyComposerToolbarItem.react", ["ix", "cx", "fbt", "Alignment", "ContextualLayerAutoFlip", "ContextualLayerHideOnScroll", "FDSButton.react", "Image.react", "LayerHideOnBlur", "Link.react", "React", "ReactLayeredComponentMixin_DEPRECATED", "XUIContextualDialog.react", "asset", "classWithMixins", "cxMargin", "emptyFunction", "joinClasses", "mixin"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.$PagesReplyComposerToolbarItem1 = function(a) {
                a || c.props.onFlyoutDisappear()
            }
            ,
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.render = function() {
            var a = i._("Th\u00eam n\u00e9t ri\u00eang")
              , c = b("joinClasses")(this.props.className, this.props.isFeatureVisible ? "" : "hidden_elem");
            return this.props.disabled ? j.jsx("span", {
                className: b("joinClasses")(c, "_owf"),
                children: this.props.title
            }) : j.jsx(b("Link.react"), {
                className: this.props.isAdsInterfaceSource ? "_63i9" : b("joinClasses")(c, "_owg"),
                href: "#",
                onClick: this.props.isSideToolbar ? b("emptyFunction") : this.props.onClick,
                ref: "root",
                children: this.props.isSideToolbar ? this.props.isCondensedCQ ? j.jsx(b("FDSButton.react"), {
                    icon: j.jsx(b("Image.react"), {
                        src: g("590307")
                    }),
                    label: this.props.title,
                    labelIsHidden: !0,
                    margin: "_3-8_",
                    style: {
                        visibility: this.props.isFocused || this.props.isHovered || this.props.showPopover ? "visible" : "hidden",
                        height: 18,
                        padding: 0
                    },
                    tooltip: a,
                    use: "flatWhite"
                }) : j.jsx(b("FDSButton.react"), {
                    icon: j.jsx(b("Image.react"), {
                        src: g("483768")
                    }),
                    label: this.props.title,
                    labelIsHidden: !0,
                    style: {
                        visibility: this.props.isFocused || this.props.isHovered || this.props.showPopover ? "visible" : "hidden"
                    }
                }) : this.props.title
            })
        }
        ;
        d.renderLayers = function() {
            var a = this;
            return {
                contextualDialog: j.jsx(b("XUIContextualDialog.react"), {
                    alignment: b("Alignment").CENTER,
                    contextRef: function() {
                        return a.refs.root
                    },
                    position: "above",
                    shown: this.props.showPopover,
                    behaviors: {
                        ContextualLayerAutoFlip: b("ContextualLayerAutoFlip"),
                        LayerHideOnBlur: b("LayerHideOnBlur"),
                        ContextualLayerHideOnScroll: b("ContextualLayerHideOnScroll")
                    },
                    onToggle: this.$PagesReplyComposerToolbarItem1,
                    children: this.props.popover
                })
            }
        }
        ;
        return c
    }(b("classWithMixins")(j.Component, b("mixin")(b("ReactLayeredComponentMixin_DEPRECATED"))));
    e.exports = a
}
), null);
__d("PagesReplyComposerToolbarView.react", ["cx", "fbt", "PagesReplyComposerActionKeys", "PagesReplyComposerMacroBrowserContainer.react", "PagesReplyComposerToolbarItem.react", "React", "emptyFunction", "joinClasses"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i = b("React");
    function a(a) {
        function c() {
            a.onToolItemClicked(b("PagesReplyComposerActionKeys").TOGGLE_PERSONALIZATION)
        }
        function d(d, e, f, g, h, j) {
            function k() {
                a.onToolItemPopoverDisappear(g)
            }
            return i.jsx(b("PagesReplyComposerToolbarItem.react"), {
                actionKey: g,
                className: "_5li7",
                disabled: a.composerState.disabled,
                isAdsInterfaceSource: a.config.isAdsInterfaceSource,
                isCondensedCQ: e,
                isFeatureVisible: f,
                isFocused: a.isFocused,
                isHovered: a.isHovered,
                isSideToolbar: a.isSideToolbar,
                onClick: c,
                onFlyoutDisappear: k,
                popover: h,
                showPopover: j,
                title: d
            })
        }
        function e() {
            var c = i.jsx(b("PagesReplyComposerMacroBrowserContainer.react"), {
                config: a.config
            });
            return d(a.isMessengerVERedesign === !0 ? h._("+ Th\u00eam t\u00ean kh\u00e1ch h\u00e0ng") : h._("T\u00f9y ch\u1ec9nh tin tr\u1ea3 l\u1eddi"), a.isCondensedCQ, a.composerState.featureMap.macroBrowse, b("PagesReplyComposerActionKeys").TOGGLE_PERSONALIZATION, c, a.composerState.shouldShowMacroBrowser)
        }
        var f = b("joinClasses")("_1rdk", a.className);
        a.isFocused !== null && a.isFocused === !0 && (f = b("joinClasses")(f, "_85cm"));
        var g = "_9a4y";
        return i.jsx("div", {
            className: a.isSideToolbar === !0 ? g : f,
            onClick: a.isSideToolbar === !0 ? c : b("emptyFunction"),
            children: e()
        })
    }
}
), null);
__d("PagesReplyComposerToolbarContainer.react", ["FluxContainer", "PagesReplyComposerActions", "PagesReplyComposerDispatcher", "PagesReplyComposerStore", "PagesReplyComposerToolbarView.react", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        c.getStores = function(a) {
            return [b("PagesReplyComposerStore").getByKey(a.config.composerKey)]
        }
        ;
        c.calculateState = function(a, c) {
            return {
                composerState: b("PagesReplyComposerStore").getByKey(c.config.composerKey).getState()
            }
        }
        ;
        function c(c) {
            var d;
            d = a.call(this, c) || this;
            d.$2 = function(a) {
                d.$1.notifyToggleOff(a)
            }
            ;
            d.$3 = function(a) {
                d.$1.notifyToggleOn(a),
                d.props.onToolItemClicked && d.props.onToolItemClicked()
            }
            ;
            d.$1 = b("PagesReplyComposerActions").getActionsByKey(d.props.config.composerKey);
            return d
        }
        var d = c.prototype;
        d.UNSAFE_componentWillMount = function() {
            b("PagesReplyComposerDispatcher").getByKey(this.props.config.composerKey).explicitlyRegisterStores([b("PagesReplyComposerStore").getByKey(this.props.config.composerKey)])
        }
        ;
        d.render = function() {
            return g.jsx(b("PagesReplyComposerToolbarView.react"), {
                className: this.props.className,
                composerState: this.state.composerState,
                config: this.props.config,
                isCondensedCQ: this.props.isCondensedCQ === !0,
                isFocused: this.props.isFocused,
                isHovered: this.props.isHovered,
                isMessengerVERedesign: this.props.isMessengerVERedesign,
                isSideToolbar: this.props.isSideToolbar === !0,
                onToolItemClicked: this.$3,
                onToolItemPopoverDisappear: this.$2
            })
        }
        ;
        return c
    }(g.PureComponent);
    c = b("FluxContainer").create(a, {
        withProps: !0,
        pure: !0
    });
    e.exports = c
}
), null);
__d("ServicesMessengerAppointmentNUXActionTypes", ["keyMirror"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("keyMirror")({
        MESSENGER_APPOINTMENT_NUX_REGISTER_THREAD_INTENT: null,
        MESSENGER_APPOINTMENT_NUX_REGISTER_APPOINTMENT_BUBBLE: null,
        MESSENGER_APPOINTMENT_NUX_SELECT_THREAD_INTENT: null,
        MESSENGER_APPOINTMENT_NUX_SELECT_APPOINTMENT_BUBBLE: null,
        MESSENGER_APPOINTMENT_NUX_LOADING_ELIGIBILITY: null,
        MESSENGER_APPOINTMENT_NUX_LOADED_ELIGIBILITY: null,
        MESSENGER_APPOINTMENT_NUX_SHOW_NUX: null,
        MESSENGER_APPOINTMENT_NUX_CLOSE_NUX: null
    });
    c = a;
    e.exports = c
}
), null);
__d("ServicesMessengerAppointmentNUXIDEnum", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        APPOINTMENT_BUBBLE_NUX_ID: 5290,
        THREAD_INTENT_NUX_ID: 5291,
        COMPOSER_NUX_ID: 5292,
        BOOK_NOW_UNIFICATION_NUX_ID: 5257
    });
    e.exports = a
}
), null);
__d("ServicesMessengerAppointmentNUXStore", ["FluxReduceStore", "ServicesCTAUnificationDispatcher", "ServicesMessengerAppointmentNUXActionTypes", "ServicesMessengerAppointmentNUXIDEnum", "immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = (a = b("ServicesMessengerAppointmentNUXActionTypes")).MESSENGER_APPOINTMENT_NUX_CLOSE_NUX
      , h = a.MESSENGER_APPOINTMENT_NUX_LOADED_ELIGIBILITY
      , i = a.MESSENGER_APPOINTMENT_NUX_LOADING_ELIGIBILITY
      , j = a.MESSENGER_APPOINTMENT_NUX_REGISTER_APPOINTMENT_BUBBLE
      , k = a.MESSENGER_APPOINTMENT_NUX_REGISTER_THREAD_INTENT
      , l = a.MESSENGER_APPOINTMENT_NUX_SELECT_APPOINTMENT_BUBBLE
      , m = a.MESSENGER_APPOINTMENT_NUX_SELECT_THREAD_INTENT
      , n = a.MESSENGER_APPOINTMENT_NUX_SHOW_NUX
      , o = (c = b("ServicesMessengerAppointmentNUXIDEnum")).APPOINTMENT_BUBBLE_NUX_ID
      , p = c.BOOK_NOW_UNIFICATION_NUX_ID
      , q = c.COMPOSER_NUX_ID
      , r = c.THREAD_INTENT_NUX_ID
      , s = function(b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
            return b.apply(this, arguments) || this
        }
        return a
    }(b("immutable").Record({
        eligibilityLoaded: !1,
        loadingEligibility: !1,
        registeredAppointmentBubbleIDs: b("immutable").List([]),
        registeredThreadIntentIDs: b("immutable").List([]),
        selectedAppointmentBubbleID: null,
        selectedThreadIntentID: null,
        showAppointmentBubbleNUX: !1,
        showBookNowUnificationNUX: !1,
        showComposerNUX: !1,
        showThreadIntentNUX: !1
    }));
    d = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        var c = b.prototype;
        c.getInitialState = function() {
            return new s()
        }
        ;
        c.reduce = function(a, b) {
            var c = b.type;
            b = b.payload;
            switch (c) {
            case k:
                if (!this.isThreadIntentEligible())
                    return a;
                c = a.get("registeredThreadIntentIDs");
                return a.set("registeredThreadIntentIDs", c.push(b.id));
            case j:
                if (!this.isAppointmentBubbleEligible())
                    return a;
                c = a.get("registeredAppointmentBubbleIDs");
                return a.set("registeredAppointmentBubbleIDs", c.push(b.id));
            case m:
                if (this.isComposerEligible() || this.isAppointmentBubbleSelected())
                    return a;
                c = a.get("registeredThreadIntentIDs");
                c = c.reduce(function(a, b) {
                    return Math.max(a, b)
                }, 0) || null;
                return a.set("selectedThreadIntentID", c);
            case l:
                if (this.isComposerEligible() || this.isThreadIntentSelected())
                    return a;
                c = a.get("registeredAppointmentBubbleIDs");
                c = c.reduce(function(a, b) {
                    return Math.max(a, b)
                }, 0) || null;
                return a.set("selectedAppointmentBubbleID", c);
            case i:
                return a.set("loadingEligibility", !0);
            case h:
                return a.set("showAppointmentBubbleNUX", b.showAppointmentBubbleNUX).set("showBookNowUnificationNUX", b.showBookNowUnificationNUX).set("showComposerNUX", b.showComposerNUX).set("showThreadIntentNUX", b.showThreadIntentNUX).set("loadingEligibility", !1).set("eligibilityLoaded", !0);
            case g:
                if (b.id === r)
                    return a.set("showThreadIntentNUX", !1).set("selectedThreadIntentID", null);
                else if (b.id === o)
                    return a.set("showAppointmentBubbleNUX", !1).set("selectedAppointmentBubbleID", null);
                else if (b.id === q)
                    return a.set("showComposerNUX", !1);
                else if (b.id === p)
                    return a.set("showBookNowUnificationNUX", !1);
                return a;
            case n:
            default:
                return a
            }
        }
        ;
        c.isAppointmentBubbleEligible = function() {
            return this.getState().showAppointmentBubbleNUX
        }
        ;
        c.isBookNowUnificationEligible = function() {
            return this.getState().showBookNowUnificationNUX
        }
        ;
        c.isThreadIntentEligible = function() {
            return this.getState().showThreadIntentNUX
        }
        ;
        c.isComposerEligible = function() {
            return this.getState().showComposerNUX
        }
        ;
        c.isThreadIntentSelected = function() {
            return this.getState().selectedThreadIntentID !== null
        }
        ;
        c.isAppointmentBubbleSelected = function() {
            return this.getState().selectedAppointmentBubbleID !== null
        }
        ;
        c.isLoadingEligibility = function() {
            return this.getState().loadingEligibility
        }
        ;
        c.isEligibilityLoaded = function() {
            return this.getState().eligibilityLoaded
        }
        ;
        return b
    }(b("FluxReduceStore"));
    d.__moduleID = e.id;
    f = new d(b("ServicesCTAUnificationDispatcher"));
    e.exports = f
}
), null);
__d("XServicesMessengerAppointmentNUXController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/services_vertical/messenger_appointment_nux/", {})
}
), null);
__d("ServicesMessengerAppointmentNUXActions", ["AsyncRequest", "ServicesCTAUnificationDispatcher", "ServicesMessengerAppointmentNUXActionTypes", "ServicesMessengerAppointmentNUXStore", "XBasicFBNuxDismissController", "XBasicFBNuxViewController", "XServicesMessengerAppointmentNUXController"], (function(a, b, c, d, e, f) {
    "use strict";
    f.registerThreadIntent = a;
    f._selectThreadIntent = q;
    f.registerAppointmentBubble = c;
    f._selectAppointmentBubble = r;
    f.loadNUXEligibility = d;
    f.showNUX = e;
    f.closeNUX = s;
    var g = (a = b("ServicesMessengerAppointmentNUXActionTypes")).MESSENGER_APPOINTMENT_NUX_CLOSE_NUX, h = a.MESSENGER_APPOINTMENT_NUX_LOADED_ELIGIBILITY, i = a.MESSENGER_APPOINTMENT_NUX_LOADING_ELIGIBILITY, j = a.MESSENGER_APPOINTMENT_NUX_REGISTER_APPOINTMENT_BUBBLE, k = a.MESSENGER_APPOINTMENT_NUX_REGISTER_THREAD_INTENT, l = a.MESSENGER_APPOINTMENT_NUX_SELECT_APPOINTMENT_BUBBLE, m = a.MESSENGER_APPOINTMENT_NUX_SELECT_THREAD_INTENT, n = 300, o, p;
    function a(a) {
        if (!b("ServicesMessengerAppointmentNUXStore").isThreadIntentEligible() || b("ServicesMessengerAppointmentNUXStore").isThreadIntentSelected())
            return;
        b("ServicesCTAUnificationDispatcher").dispatch({
            type: k,
            payload: {
                id: a
            }
        });
        o && (clearTimeout(o),
        o = null);
        o = setTimeout(q, n)
    }
    function q() {
        b("ServicesCTAUnificationDispatcher").dispatch({
            type: m
        })
    }
    function c(a) {
        if (!b("ServicesMessengerAppointmentNUXStore").isAppointmentBubbleEligible() || b("ServicesMessengerAppointmentNUXStore").isAppointmentBubbleSelected())
            return;
        b("ServicesCTAUnificationDispatcher").dispatch({
            type: j,
            payload: {
                id: a
            }
        });
        p && (clearTimeout(p),
        p = null);
        p = setTimeout(r, n)
    }
    function r() {
        b("ServicesCTAUnificationDispatcher").dispatch({
            type: l
        })
    }
    function d() {
        if (b("ServicesMessengerAppointmentNUXStore").isLoadingEligibility() || b("ServicesMessengerAppointmentNUXStore").isEligibilityLoaded())
            return;
        b("ServicesCTAUnificationDispatcher").dispatch({
            type: i
        });
        var a = b("XServicesMessengerAppointmentNUXController").getURIBuilder().getURI();
        new (b("AsyncRequest"))().setURI(a).setHandler(function(a) {
            a && b("ServicesCTAUnificationDispatcher").dispatch({
                type: h,
                payload: a.payload
            })
        }).send()
    }
    function e(a) {
        a = b("XBasicFBNuxViewController").getURIBuilder().setInt("nux_id", a).getURI();
        new (b("AsyncRequest"))().setURI(a).send()
    }
    function s(a) {
        var c = b("XBasicFBNuxDismissController").getURIBuilder().setInt("nux_id", a).getURI();
        new (b("AsyncRequest"))().setURI(c).send();
        b("ServicesCTAUnificationDispatcher").dispatch({
            type: g,
            payload: {
                id: a
            }
        })
    }
}
), null);
__d("ServicesDurationUnit", ["keyMirror"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("keyMirror")({
        SECONDS: null,
        MINUTES: null,
        HOURS: null,
        DAYS: null,
        WEEKS: null,
        MONTHS: null,
        YEARS: null
    });
    c = a;
    e.exports = c
}
), null);
__d("ServicesTimeDurationSelector.react", ["fbt", "DateConsts", "React", "ServicesDurationUnit", "XUISingleSelector.react", "XUITextInput.react", "isNumberLike"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = b("XUISingleSelector.react").Option
      , j = {
        SECONDS: 1,
        MINUTES: (a = b("DateConsts")).SEC_PER_MIN,
        HOURS: a.SEC_PER_HOUR,
        DAYS: a.SEC_PER_DAY,
        WEEKS: a.SEC_PER_WEEK,
        MONTHS: 30 * a.SEC_PER_DAY,
        YEARS: 365 * a.SEC_PER_DAY
    };
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(c) {
            var d;
            d = a.call(this, c) || this;
            d.onChange = function() {
                d.props.onChange(d.getScheduleInSecond())
            }
            ;
            d.onTextChange = function(a) {
                if (a.target instanceof HTMLInputElement) {
                    a = a.target.value;
                    if (a === null || !d.props.allowZero && a === "0")
                        return;
                    if (!b("isNumberLike")(a) && a !== "")
                        return;
                    if (d.allowFloatInput()) {
                        var c = !(parseFloat(a) * 100 % 1);
                        if (!c)
                            return;
                        c = a
                    } else
                        c = a ? String(parseInt(a, 10)) : null;
                    if (c != null && parseFloat(c) < 0)
                        return;
                    d.setState({
                        quantity: c != null && c !== "" ? c : null
                    }, d.onChange)
                }
            }
            ;
            d.onUnitChange = function(a) {
                var b = d.state.quantity;
                d.allowFloatInput() && (b = b != null && b !== "" ? String(parseInt(b, 10)) || null : null);
                d.setState({
                    quantity: b,
                    unit: a.value
                }, d.onChange)
            }
            ;
            d.state = d.initState(c);
            return d
        }
        var d = c.prototype;
        d.UNSAFE_componentWillReceiveProps = function(a) {
            this.props.value === null && a.value !== null && this.setState(this.initState(a))
        }
        ;
        d.initState = function(a) {
            var b, c = a.value, d = this.getUnits(), e = c;
            b = ((b = this) != null ? (b = b.state) != null ? b.unit : b : b) || d[0];
            c != null && c > 0 ? (d = d.slice().sort(function(a, b) {
                return j[b] - j[a]
            }),
            d.some(function(a) {
                if (c % j[a] === 0) {
                    e = c / j[a];
                    b = a;
                    return !0
                }
                return !1
            }),
            e = String(e)) : c === 0 && a.allowZero ? e = "0" : e = null;
            return {
                quantity: e,
                unit: b
            }
        }
        ;
        d.allowFloatInput = function() {
            return this.props.allowDecimals && this.state.unit === b("ServicesDurationUnit").HOURS
        }
        ;
        d.getScheduleInSecond = function() {
            var a = this.state
              , b = a.quantity;
            a = a.unit;
            return b == null ? null : Math.round(parseFloat(b) * j[a])
        }
        ;
        d.componentDidMount = function() {
            this.props.onChange(this.getScheduleInSecond())
        }
        ;
        d.getUnits = function() {
            var a = this.props.durationUnits || [b("ServicesDurationUnit").SECONDS, b("ServicesDurationUnit").MINUTES, b("ServicesDurationUnit").HOURS, b("ServicesDurationUnit").DAYS, b("ServicesDurationUnit").WEEKS, b("ServicesDurationUnit").MONTHS, b("ServicesDurationUnit").YEARS];
            return a.length > 0 ? a : [b("ServicesDurationUnit").SECONDS]
        }
        ;
        d.getUnitLabels = function(a, c) {
            return a.map(function(a) {
                if (a === b("ServicesDurationUnit").SECONDS)
                    return g._({
                        "*": "gi\u00e2y"
                    }, [g._plural(c)]);
                else if (a === b("ServicesDurationUnit").MINUTES)
                    return g._({
                        "*": "ph\u00fat"
                    }, [g._plural(c)]);
                else if (a === b("ServicesDurationUnit").HOURS)
                    return g._({
                        "*": "gi\u1edd"
                    }, [g._plural(c)]);
                else if (a === b("ServicesDurationUnit").DAYS)
                    return g._({
                        "*": "ng\u00e0y"
                    }, [g._plural(c)]);
                else if (a === b("ServicesDurationUnit").WEEKS)
                    return g._({
                        "*": "tu\u1ea7n"
                    }, [g._plural(c)]);
                else if (a === b("ServicesDurationUnit").MONTHS)
                    return g._({
                        "*": "th\u00e1ng"
                    }, [g._plural(c)]);
                else if (a === b("ServicesDurationUnit").YEARS)
                    return g._({
                        "*": "n\u0103m"
                    }, [g._plural(c)]);
                return ""
            })
        }
        ;
        d.render = function() {
            var a = this.state.quantity
              , c = this.getUnits()
              , d = this.getUnitLabels(c, parseFloat(a) || 0);
            return h.jsx("div", {
                className: this.props.className,
                children: g._("{The duration value input} {The duration unit selector}", [g._param("The duration value input", h.jsx(b("XUITextInput.react"), {
                    disabled: this.props.isDisabled,
                    maxLength: 5,
                    onBlur: this.props.onBlur,
                    onChange: this.onTextChange,
                    size: "7",
                    value: a === null ? "" : a,
                    xuiError: this.props.errorMsg,
                    type: "number"
                })), g._param("The duration unit selector", h.jsx(b("XUISingleSelector.react"), {
                    disabled: this.props.isDisabled,
                    name: "unit",
                    onChange: this.onUnitChange,
                    value: this.state.unit,
                    children: c.map(function(a, b) {
                        return h.jsx(i, {
                            value: a,
                            children: d[b]
                        }, b)
                    })
                }))])
            })
        }
        ;
        return c
    }(h.Component);
    e.exports = c;
    c.defaultProps = {
        allowDecimals: !0,
        allowZero: !1,
        isDisabled: !1
    }
}
), null);
__d("SUITypeaheadViewRenderer.react", ["cx", "React", "ReactDOM", "SearchableEntry", "SUIHighlightedText.react", "SUITheme", "TypeaheadViewPropTypes", "joinClasses", "prop-types", "withSUITheme"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = {
        role: "listbox"
    };
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this
              , c = b("SUITheme").get(this).SUITypeahead
              , d = b("joinClasses")("_36g5", this.props.className);
            c = babelHelpers["extends"]({}, this.props.style, {
                backgroundColor: c.dropdown.backgroundColor,
                border: "solid 1px " + c.dropdown.borderColor,
                boxShadow: c.dropdown.boxShadow
            });
            var e = this.props.renderers || {}
              , f = e.ContainerRenderer || "ul";
            return h.jsx(f, {
                className: d,
                id: this.props.controlleeID,
                role: this.props.role,
                style: c,
                children: this.props.entries.map(function(b) {
                    return h.jsx(i, {
                        entry: b,
                        highlighted: b === a.props.highlightedEntry,
                        onHighlight: a.props.onHighlight,
                        onRenderHighlight: a.props.onRenderHighlight,
                        onSelect: a.props.onSelect,
                        queryString: a.props.queryString,
                        renderer: e.ItemRenderer
                    }, b.getUniqueID())
                })
            })
        }
        ;
        return c
    }(h.PureComponent);
    c.propTypes = babelHelpers["extends"]({}, b("TypeaheadViewPropTypes"), {
        style: (d = b("prop-types")).object
    });
    c.defaultProps = a;
    f = {
        role: "option"
    };
    g = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.$1 = function(a) {
                c.props.onHighlight(c.props.entry, a)
            }
            ,
            c.$2 = function(a) {
                c.props.onSelect(c.props.entry, a)
            }
            ,
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            this.props.highlighted && this.props.onRenderHighlight(b("ReactDOM").findDOMNode(this))
        }
        ;
        d.componentDidUpdate = function() {
            this.props.highlighted && this.props.onRenderHighlight(b("ReactDOM").findDOMNode(this))
        }
        ;
        d.render = function() {
            var a = b("SUITheme").get(this).SUITypeahead
              , c = b("joinClasses")("ellipsis", this.props.className)
              , d = this.props.entry.getTitle()
              , e = a.dropdown.itemPadding
              , f = e.bottom
              , g = e.left
              , i = e.right;
            e = e.top;
            a = {
                backgroundColor: this.props.highlighted && a.highlight.backgroundColor,
                paddingBottom: f,
                paddingLeft: g,
                paddingRight: i,
                paddingTop: e
            };
            f = this.props.renderer;
            g = f ? h.jsx(f, babelHelpers["extends"]({}, this.props)) : h.jsx(b("SUIHighlightedText.react"), {
                "data-testid": void 0,
                highlight: this.props.queryString,
                text: d
            });
            return h.jsx("li", {
                "aria-label": d,
                "aria-selected": this.props.highlighted,
                className: c,
                "data-testid": void 0,
                onMouseDown: this.$2,
                onMouseEnter: this.$1,
                role: this.props.role,
                style: a,
                title: d,
                children: g
            }, this.props.entry.getUniqueID())
        }
        ;
        return c
    }(h.PureComponent);
    g.propTypes = {
        entry: d.instanceOf(b("SearchableEntry")),
        highlighted: d.bool,
        onHighlight: d.func,
        onRenderHighlight: d.func,
        onSelect: d.func,
        renderer: d.any,
        role: d.string,
        queryString: d.string
    };
    g.defaultProps = f;
    g.displayName = "SUITypeaheadViewItem";
    var i = b("withSUITheme")(g);
    a = b("withSUITheme")(c);
    e.exports = a
}
), null);
__d("SUITypeahead.react", ["cx", "AbstractSearchSource", "AbstractTypeahead.react", "React", "SideEnum", "SUIBorderUtils", "SUIErrorComponentUtil", "SUIInternalDisplay", "SUITheme", "SUITypeaheadViewRenderer.react", "joinClasses", "prop-types", "withSUITheme"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = babelHelpers["extends"]({}, b("SUIErrorComponentUtil").defaultProps, {
        autoHighlight: !0,
        borderedSides: b("SideEnum").values,
        display: "inline",
        showEntriesOnFocus: !1
    });
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.state = {
                isFocused: !1
            },
            c.$2 = function(a) {
                c.setState({
                    isFocused: !1
                }),
                c.props.onBlur && c.props.onBlur(a)
            }
            ,
            c.$3 = function(a) {
                a = a.target.value;
                c.props.onChange(a)
            }
            ,
            c.$4 = function(a) {
                c.setState({
                    isFocused: !0
                })
            }
            ,
            c.$5 = function(a) {
                c.$1 = a
            }
            ,
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.blurInput = function() {
            this.$1 && this.$1.blurInput()
        }
        ;
        d.focusInput = function() {
            this.$1 && this.$1.focusInput()
        }
        ;
        d.search = function() {
            this.$1 && this.$1.search(this.props.queryString)
        }
        ;
        d.$6 = function(a) {
            return this.props.disabled === !0 ? {
                backgroundColor: a.disabled.backgroundColor,
                borderColor: a.disabled.borderColor,
                color: a.disabled.color
            } : {
                backgroundColor: a.input.backgroundColor,
                borderColor: a.input.borderColor
            }
        }
        ;
        d.render = function() {
            var a = this.props
              , c = a.rightContent
              , d = a.display;
            a.theme;
            var e = a.width;
            a = babelHelpers.objectWithoutPropertiesLoose(a, ["rightContent", "display", "theme", "width"]);
            var f = b("SUITheme").get(this)
              , g = f.SUITypeahead
              , i = this.$6(g)
              , j = babelHelpers["extends"]({}, g.input.typeStyle);
            this.props.disabled === !0 && (j.color = i.color);
            j = babelHelpers["extends"]({}, j, this.props.inputStyle);
            var k = this.state.isFocused ? g.input.focusedBorderColor : null;
            b("SUIErrorComponentUtil").hasError(this.props);
            k = k != null ? k : b("SUIErrorComponentUtil").getErrorBorderColor(this.props, f) || i.borderColor;
            f = this.props.presenter || {};
            f = babelHelpers["extends"]({
                ViewRenderer: b("SUITypeaheadViewRenderer.react")
            }, f, {
                extraRendererProps: babelHelpers["extends"]({
                    style: this.props.viewStyle,
                    theme: b("SUITheme").get(this)
                }, f.extraRendererProps),
                maxEntries: this.props.maxEntries,
                useRootAsContext: !0,
                useLayer: !0
            });
            var l = b("SUIBorderUtils").getBorderWidthStyles(this.props.borderedSides)
              , m = b("SUIErrorComponentUtil").getErrorIcon(this.props, b("SUITheme").get(this), "_39ae");
            return h.jsx(b("AbstractTypeahead.react"), babelHelpers["extends"]({}, a, b("SUIErrorComponentUtil").getErrorTooltipProps(this.props), {
                additionalElements: c != null ? h.jsxs(h.Fragment, {
                    children: [c, m]
                }) : m,
                autoHighlight: this.props.autoHighlight,
                className: b("joinClasses")("_36g4", b("SUIInternalDisplay").getFlex(d), this.props.className, this.props.margin),
                inputStyle: j,
                onBlur: this.$2,
                onChange: this.$3,
                onEnterWithoutSelection: this.props.onEnterWithoutSelection,
                onFocus: this.$4,
                presenter: f,
                ref: this.$5,
                showEntriesOnFocus: this.props.showEntriesOnFocus,
                style: babelHelpers["extends"]({
                    backgroundColor: i.backgroundColor,
                    borderColor: k,
                    borderRadius: g.input.borderRadius
                }, l, {
                    height: j && "height"in j ? void 0 : g.input.height,
                    width: e
                })
            }))
        }
        ;
        return c
    }(h.PureComponent);
    c.propTypes = babelHelpers["extends"]({}, b("SUIErrorComponentUtil").propTypes, {
        rightContent: (d = b("prop-types")).node,
        borderedSides: d.arrayOf(b("SideEnum").propType).isRequired,
        display: b("SUIInternalDisplay").propType.isRequired,
        inputStyle: d.object,
        margin: d.string,
        autoHighlight: d.bool,
        maxEntries: d.number,
        onBlur: d.func,
        onChange: d.func.isRequired,
        onSelectAttempt: d.func.isRequired,
        onEnterWithoutSelection: d.func,
        onEntriesFound: d.func,
        onNoEntriesFound: d.func,
        presenter: d.object,
        queryString: d.string,
        searchSource: d.instanceOf(b("AbstractSearchSource")).isRequired,
        showEntriesOnFocus: d.bool,
        theme: d.instanceOf(b("SUITheme")),
        viewStyle: d.object
    });
    c.defaultProps = a;
    f = b("withSUITheme")(c);
    e.exports = f
}
), null);
__d("AddressTypeaheadWebGraphQLQuery", ["WebGraphQLQueryBase"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        b.__getDocID = function() {
            return "2264128877006330"
        }
        ;
        b.getQueryID = function() {
            return "1529221910536355"
        }
        ;
        return b
    }(b("WebGraphQLQueryBase"))
}
), null);
__d("AddressTypeaheadGraphQLSearchSource", ["AbstractAsyncSearchSource", "AddressTypeaheadWebGraphQLQuery", "AsyncRequest", "SearchableEntry"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = "/images/tiles/typeahead_default.png"
      , h = function(b) {
        babelHelpers.inheritsLoose(a, b);
        function a(a, c) {
            return b.call(this, {
                bootstrapRequests: [{
                    createQuery: function(b) {
                        return j(b, a)
                    }
                }],
                queryRequests: [{
                    createQuery: function(b) {
                        return j(b, a)
                    }
                }],
                packageFn: c || function(b) {
                    return k(b, a)
                }
                ,
                getAllForEmptyQuery: !0
            }, i, l) || this
        }
        a.getUniqueID = function(a) {
            var b = a.place_name;
            a = a.single_line_address;
            return b + "_" + a
        }
        ;
        return a
    }(b("AbstractAsyncSearchSource"));
    e.exports = h;
    function i(a, c, d, e) {
        c = c.createQuery(a, c);
        new (b("AsyncRequest"))(c).setHandler(function(b) {
            return d(b.payload[a.value || ""])
        }).setErrorHandler(e).send()
    }
    function j(a, c) {
        return b("AddressTypeaheadWebGraphQLQuery").getLegacyURI({
            query_params: {
                query: a.value,
                viewer_coordinates: {
                    latitude: c.latitude || void 0,
                    longitude: c.longitude || void 0
                },
                provider: c.provider,
                search_type: c.search_type,
                integration_strategy: c.integration_strategy,
                result_ordering: c.display_order,
                caller: c.caller,
                country_filter: c.country_filter || void 0,
                page_category: c.page_category || void 0,
                radius: c.radius_in_meters || void 0,
                geocode_fallback: c.geocode_fallback || !1
            },
            max_results: c.num_results,
            photo_width: c.photo_width,
            photo_height: c.photo_height
        })
    }
    function k(a, c) {
        a = a && a.street_results && a.street_results.edges;
        return !a ? [] : a.map(function(a, d) {
            a = a.node;
            return new (b("SearchableEntry"))({
                auxiliaryData: {
                    latitude: a.location.latitude,
                    longitude: a.location.longitude,
                    locationID: a.page ? a.page.id : a.city ? a.city.id : 0,
                    resultType: a.page ? "place" : "street",
                    freeformEntry: !1,
                    full_address: a.single_line_address,
                    multi_line_address: a.multi_line_address,
                    city_name: a.city ? a.city.name : null,
                    city_id: a.city ? a.city.id : null,
                    standard_name_trimmed: a.standard_name_trimmed
                },
                photo: c.show_photo && a.page && a.page.page_logo ? a.page.page_logo.uri : g,
                title: a.title,
                subtitle: a.subtitle,
                uniqueID: h.getUniqueID(a),
                order: d
            })
        })
    }
    function l(a, b) {
        return b(a)
    }
}
), null);
__d("AddressTypeaheadSearchSourceConfig", ["ImmutableObject"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = 10
      , h = 50
      , i = 50;
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b(b, c, d, e, f, j, k, l, m, n, o, p, q, r, s) {
            b === void 0 && (b = null);
            c === void 0 && (c = null);
            d === void 0 && (d = "here_thrift");
            e === void 0 && (e = "street_place_typeahead");
            f === void 0 && (f = "string_match");
            j === void 0 && (j = "interleave");
            k === void 0 && (k = g);
            l === void 0 && (l = "graphql");
            m === void 0 && (m = null);
            n === void 0 && (n = null);
            o === void 0 && (o = null);
            p === void 0 && (p = !1);
            q === void 0 && (q = !0);
            r === void 0 && (r = h);
            s === void 0 && (s = i);
            return a.call(this, {
                latitude: b,
                longitude: c,
                provider: d,
                search_type: e,
                integration_strategy: f,
                display_order: j,
                num_results: k,
                caller: l,
                country_filter: m,
                page_category: n,
                radius_in_meters: o,
                geocode_fallback: p,
                show_photo: q,
                photo_width: r,
                photo_height: s
            }) || this
        }
        var c = b.prototype;
        c.equals = function(a) {
            return this === a || this.latitude === a.latitude && this.longitude === a.longitude && this.provider === a.provider && this.search_type === a.search_type && this.integration_strategy === a.integration_strategy && this.display_order === a.display_order && this.num_results === a.num_results && this.caller === a.caller && (this.country_filter === a.country_filter || !!this.country_filter && !!a.country_filter && this.country_filter.toString() === a.country_filter.toString()) && (this.page_category === a.page_category || !!this.page_category && !!a.page_category && this.page_category.toString() === a.page_category.toString()) && this.radius_in_meters === a.radius_in_meters && this.geocode_fallback === a.geocode_fallback && this.show_photo === a.show_photo && this.photo_width === a.photo_width && this.photo_height === a.photo_height
        }
        ;
        return b
    }(b("ImmutableObject"));
    e.exports = a
}
), null);
__d("XPageLinkInstagramAccountOAuthController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/page/instagram/oauthlink/", {
        code: {
            type: "String"
        },
        page_id: {
            type: "FBID"
        },
        state: {
            type: "String"
        }
    })
}
), null);
