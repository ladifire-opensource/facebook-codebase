if (self.CavalryLogger) {
    CavalryLogger.start_js(["UmuKB"]);
}

__d("FBEmojiAliases", [], (function(a, b, c, d, e, f) {
    e.exports = {}
}
), null);
__d("MessengerEmojiConfig", [], (function(a, b, c, d, e, f) {
    e.exports = {
        emoji_colors: [0, 127995, 127996, 127997, 127998, 127999]
    }
}
), null);
__d("MessengerFormattingConfig", [], (function(a, b, c, d, e, f) {
    e.exports = {
        boldConfig: {
            pattern: "([\\s_~'\"(]|^)\\*(\\S(?:.*?\\S)??)\\*(?=[\\s_~,.;:!?'\")]|$)",
            nonCapturingPattern: "(?:[\\s_~'\"(]|^)\\*(?:\\S(?:.*?\\S)??)\\*(?=[\\s_~,.;:!?'\")]|$)"
        },
        italicConfig: {
            pattern: "([\\s*~'\"(]|^)_(\\S(?:.*?\\S)??)_(?=[\\s*~,.;:!?'\")]|$)",
            nonCapturingPattern: "(?:[\\s*~'\"(]|^)_(?:\\S(?:.*?\\S)??)_(?=[\\s*~,.;:!?'\")]|$)"
        },
        strikethroughConfig: {
            pattern: "([\\s*_'\"(]|^)~(\\S(?:.*?\\S)??)~(?=[\\s*_,.;:!?'\")]|$)",
            nonCapturingPattern: "(?:[\\s*_'\"(]|^)~(?:\\S(?:.*?\\S)??)~(?=[\\s*_,.;:!?'\")]|$)"
        },
        codeConfig: {
            pattern: "([\\s*_~'\"(]|^)`([^`\\r\\n](?:.*?[^`\\r\\n])??)`(?=[\\s\\w*_~,.;:!?'\")]|$)",
            nonCapturingPattern: "(?:[\\s*_~'\"(]|^)`(?:[^`\\r\\n](?:.*?[^`\\r\\n])??)`(?=[\\s\\w*_~,.;:!?'\")]|$)"
        },
        codeBlockConfig: {
            pattern: "(```)([\\s\\S]+?)```",
            nonCapturingPattern: "(```)([\\s\\S]+?)```"
        },
        codeBlockV2Config: {
            pattern: "(`{3,})(?:(?:((.*?)(?:\\r\\n?|\\n))([\\s\\S]*?))|(.+?))\\1\\s*?(?:\\r\\n?|\\n|$)",
            nonCapturingPattern: "(`{3,})([\\s\\S]+?)\\1\\s*((\\r\\n)|\\r|\\n|$)"
        },
        blockQuoteConfig: {
            pattern: "(^>>> ?)((.|(\\r\\n)|\\r|\\n)*?\\S(.|(\\r\\n)|\\r|\\n)*?)^<<<\\s*?((\\r\\n)|\\r|\\n|$)",
            nonCapturingPattern: "(^>>> ?)((.|(\\r\\n)|\\r|\\n)*?\\S(.|(\\r\\n)|\\r|\\n)*?)^<<<\\s*((\\r\\n)|\\r|\\n|$)"
        },
        multipleInlineBlockQuoteConfig: {
            pattern: "((^> )(.*\\S.*)((\\r\\n)|\\r|\\n)?)(^> ?(.*)((\\r\\n)|\\r|\\n)?)*",
            nonCapturingPattern: "(^> (.*\\S.*)((\\r\\n)|\\r|\\n)?)(^> ?(.*)((\\r\\n)|\\r|\\n)?)*"
        },
        singleInlineBlockQuoteConfig: {
            pattern: "(^> ?)(.*?$)",
            nonCapturingPattern: "^> ?(.*?$)"
        }
    }
}
), null);
__d("MNCommercePageSetting", [], (function(a, b, c, d, e, f) {
    e.exports = {
        COMMERCE_FAQ_ENABLED: "COMMERCE_FAQ_ENABLED",
        IN_MESSENGER_SHOPPING_ENABLED: "IN_MESSENGER_SHOPPING_ENABLED",
        COMMERCE_NUX_ENABLED: "COMMERCE_NUX_ENABLED",
        NULL_STATE_CTA_BUTTON_ALWAYS_ENABLED: "NULL_STATE_CTA_BUTTON_ALWAYS_ENABLED",
        STRUCTURED_MENU_ENABLED: "STRUCTURED_MENU_ENABLED",
        USER_CONTROL_TOPIC_MANAGE_ENABLED: "USER_CONTROL_TOPIC_MANAGE_ENABLED",
        COMPOSER_INPUT_DISABLED: "COMPOSER_INPUT_DISABLED"
    }
}
), null);
__d("IgnoreMessagesTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:IgnoreMessagesLoggerConfig", this.$1, b("Banzai").BASIC, a)
        }
        ;
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:IgnoreMessagesLoggerConfig", this.$1, b("Banzai").VITAL, a)
        }
        ;
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:IgnoreMessagesLoggerConfig", this.$1, {
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
        c.setEvent = function(a) {
            this.$1.event = a;
            return this
        }
        ;
        c.setPlatform = function(a) {
            this.$1.platform = a;
            return this
        }
        ;
        c.setThreadID = function(a) {
            this.$1.thread_id = a;
            return this
        }
        ;
        return a
    }();
    c = {
        event: !0,
        platform: !0,
        thread_id: !0
    };
    e.exports = a
}
), null);
__d("MessengerMessageActionsTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:MessengerMessageActionsLoggerConfig", this.$1, b("Banzai").BASIC, a)
        }
        ;
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:MessengerMessageActionsLoggerConfig", this.$1, b("Banzai").VITAL, a)
        }
        ;
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:MessengerMessageActionsLoggerConfig", this.$1, {
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
        c.setAction = function(a) {
            this.$1.action = a;
            return this
        }
        ;
        c.setAppID = function(a) {
            this.$1.appid = a;
            return this
        }
        ;
        c.setAppversion = function(a) {
            this.$1.appversion = a;
            return this
        }
        ;
        c.setClienttime = function(a) {
            this.$1.clienttime = a;
            return this
        }
        ;
        c.setContainermodule = function(a) {
            this.$1.containermodule = a;
            return this
        }
        ;
        c.setCountry = function(a) {
            this.$1.country = a;
            return this
        }
        ;
        c.setEntryPoint = function(a) {
            this.$1.entry_point = a;
            return this
        }
        ;
        c.setErrorText = function(a) {
            this.$1.error_text = a;
            return this
        }
        ;
        c.setExtra = function(a) {
            this.$1.extra = b("GeneratedLoggerUtils").serializeMap(a);
            return this
        }
        ;
        c.setGroupSize = function(a) {
            this.$1.group_size = a;
            return this
        }
        ;
        c.setMessageType = function(a) {
            this.$1.message_type = a;
            return this
        }
        ;
        c.setMid = function(a) {
            this.$1.mid = a;
            return this
        }
        ;
        c.setName = function(a) {
            this.$1.name = a;
            return this
        }
        ;
        c.setOfflineThreadid = function(a) {
            this.$1.offline_threadid = a;
            return this
        }
        ;
        c.setPreviousReaction = function(a) {
            this.$1.previous_reaction = a;
            return this
        }
        ;
        c.setReaction = function(a) {
            this.$1.reaction = a;
            return this
        }
        ;
        c.setRecipientID = function(a) {
            this.$1.recipient_id = a;
            return this
        }
        ;
        c.setThreadType = function(a) {
            this.$1.thread_type = a;
            return this
        }
        ;
        c.setThreadid = function(a) {
            this.$1.threadid = a;
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
        action: !0,
        appid: !0,
        appversion: !0,
        clienttime: !0,
        containermodule: !0,
        country: !0,
        entry_point: !0,
        error_text: !0,
        extra: !0,
        group_size: !0,
        message_type: !0,
        mid: !0,
        name: !0,
        offline_threadid: !0,
        previous_reaction: !0,
        reaction: !0,
        recipient_id: !0,
        thread_type: !0,
        threadid: !0
    };
    e.exports = a
}
), null);
__d("MessengerMessageRequestsTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:MessengerMessageRequestsLoggerConfig", this.$1, b("Banzai").BASIC, a)
        }
        ;
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:MessengerMessageRequestsLoggerConfig", this.$1, b("Banzai").VITAL, a)
        }
        ;
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:MessengerMessageRequestsLoggerConfig", this.$1, {
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
        c.setAction = function(a) {
            this.$1.action = a;
            return this
        }
        ;
        c.setAppID = function(a) {
            this.$1.appid = a;
            return this
        }
        ;
        c.setAppversion = function(a) {
            this.$1.appversion = a;
            return this
        }
        ;
        c.setClienttime = function(a) {
            this.$1.clienttime = a;
            return this
        }
        ;
        c.setContainermodule = function(a) {
            this.$1.containermodule = a;
            return this
        }
        ;
        c.setCountry = function(a) {
            this.$1.country = a;
            return this
        }
        ;
        c.setEntryPoint = function(a) {
            this.$1.entry_point = a;
            return this
        }
        ;
        c.setExtraClientData = function(a) {
            this.$1.extra_client_data = a;
            return this
        }
        ;
        c.setFolderType = function(a) {
            this.$1.folder_type = a;
            return this
        }
        ;
        c.setName = function(a) {
            this.$1.name = a;
            return this
        }
        ;
        c.setSurface = function(a) {
            this.$1.surface = a;
            return this
        }
        ;
        c.setThreadID = function(a) {
            this.$1.thread_id = a;
            return this
        }
        ;
        c.setThreadKey = function(a) {
            this.$1.thread_key = a;
            return this
        }
        ;
        c.setThreadKeyList = function(a) {
            this.$1.thread_key_list = a;
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
        action: !0,
        appid: !0,
        appversion: !0,
        clienttime: !0,
        containermodule: !0,
        country: !0,
        entry_point: !0,
        extra_client_data: !0,
        folder_type: !0,
        name: !0,
        surface: !0,
        thread_id: !0,
        thread_key: !0,
        thread_key_list: !0
    };
    e.exports = a
}
), null);
__d("MessengerWebViewReactionsTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:MessengerWebViewReactionsLoggerConfig", this.$1, b("Banzai").BASIC, a)
        }
        ;
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:MessengerWebViewReactionsLoggerConfig", this.$1, b("Banzai").VITAL, a)
        }
        ;
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:MessengerWebViewReactionsLoggerConfig", this.$1, {
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
        c.setEmojiGroup = function(a) {
            this.$1.emoji_group = a;
            return this
        }
        ;
        c.setEmojiGroupCount = function(a) {
            this.$1.emoji_group_count = a;
            return this
        }
        ;
        c.setEvent = function(a) {
            this.$1.event = a;
            return this
        }
        ;
        c.setMid = function(a) {
            this.$1.mid = a;
            return this
        }
        ;
        c.setSenderID = function(a) {
            this.$1.sender_id = a;
            return this
        }
        ;
        return a
    }();
    c = {
        emoji_group: !0,
        emoji_group_count: !0,
        event: !0,
        mid: !0,
        sender_id: !0
    };
    e.exports = a
}
), null);
__d("WorkChatBulkUpdatePinnedThreadsMutation.graphql", [], (function(a, b, c, d, e, f) {
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
            concreteType: "ThreadBatchUpdatePinStatusResponsePayload",
            kind: "LinkedField",
            name: "thread_batch_update_pin_status",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "client_subscription_id",
                storageKey: null
            }],
            storageKey: null
        }];
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "WorkChatBulkUpdatePinnedThreadsMutation",
                selections: b,
                type: "Mutation",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "WorkChatBulkUpdatePinnedThreadsMutation",
                selections: b
            },
            params: {
                id: "1320325544758295",
                metadata: {},
                name: "WorkChatBulkUpdatePinnedThreadsMutation",
                operationKind: "mutation",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("MessengerUserProfileLocationUtilsQuery.graphql", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = {
            alias: null,
            args: null,
            concreteType: "StreetAddress",
            kind: "LinkedField",
            name: "address",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "postal_code",
                storageKey: null
            }, {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "region",
                storageKey: null
            }],
            storageKey: null
        };
        return {
            fragment: {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "MessengerUserProfileLocationUtilsQuery",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "Viewer",
                    kind: "LinkedField",
                    name: "viewer",
                    plural: !1,
                    selections: [{
                        alias: "user",
                        args: null,
                        concreteType: "User",
                        kind: "LinkedField",
                        name: "account_user",
                        plural: !1,
                        selections: [a],
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
                name: "MessengerUserProfileLocationUtilsQuery",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "Viewer",
                    kind: "LinkedField",
                    name: "viewer",
                    plural: !1,
                    selections: [{
                        alias: "user",
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
                    }],
                    storageKey: null
                }]
            },
            params: {
                id: "2746984198655487",
                metadata: {},
                name: "MessengerUserProfileLocationUtilsQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    e.exports = a
}
), null);
__d("ChatOpenTab", ["csx", "Bootloader", "ContextualThing", "CurrentUser", "Event", "MercuryIDs", "Parent", "WorkGalahadSettings", "requireWeak"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = null;
    b("requireWeak")("FantaTabsReactApp", function(a) {
        return h = a
    });
    b("requireWeak")("FantaTabsSlimApp", function(a) {
        return h = a
    });
    function i(a, c, d, e) {
        b("Event").listen(a, "click", function(f) {
            (b("WorkGalahadSettings").isGalahadEnabled || l.canOpenTab()) && (e(c, d),
            a.removeAttribute("ajaxify"),
            a.removeAttribute("rel"),
            f.preventDefault())
        })
    }
    function j(a, c, d, e) {
        b("Event").listen(a, "click", function(a) {
            l.canOpenTab() && e(c, d)
        })
    }
    function k(a) {
        a = b("ContextualThing").getContext(a);
        return a && b("Parent").bySelector(a, "._3qw") !== null
    }
    var l = {
        canOpenTab: function() {
            return h && !h.isHidden()
        },
        listenOpenEmptyTabDEPRECATED: function(a, b) {
            i(a, null, b, this._loadAndOpenEmptyFantaTab)
        },
        listenOpenThreadDEPRECATED: function(a, b, c) {
            var d = this;
            i(a, b, c, function(a, b) {
                return d.loadAndOpenFantaTab(a, b, c)
            })
        },
        listenOpenUserTabDEPRECATED: function(a, b, c) {
            var d = this;
            k(a) || i(a, b, c, function(a) {
                return d.loadAndOpenFantaTab(a, "user", c)
            })
        },
        listenOpenUserTabPersistentEventDEPRECATED: function(a, b, c) {
            var d = this;
            k(a) || j(a, b, c, function(a) {
                return d.loadAndOpenFantaTab(a, "user", c)
            })
        },
        listenOpenPageTabDEPRECATED: function(a, b, c, d) {
            var e = this;
            k(a) || i(a, b, d, function(a) {
                return e.loadAndOpenFantaTab(a, "page", d)
            })
        },
        listenOpenPageTabPersistentEventDEPRECATED: function(a, b, c, d) {
            var e = this;
            k(a) || j(a, b, d, function(a) {
                return e.loadAndOpenFantaTab(a, "page", d)
            })
        },
        loadAndOpenFantaTab: function(a, c, d) {
            b("Bootloader").loadModules(["ChatOpenTabEventLogger", "FantaTabActions"], function(e, f) {
                if (c === "user" || c === "page") {
                    var g = b("MercuryIDs").getThreadIDFromUserID(a);
                    f.openTab(g, [d]);
                    e.logUserClickOpen(d, a)
                } else
                    f.openTab(a, [d]),
                    e.logClickOpen(d, a)
            }, "ChatOpenTab")
        },
        _loadAndOpenEmptyFantaTab: function() {
            b("Bootloader").loadModules(["ChatOpenTabEventLogger", "FantaTabActions", "MessengerState.bs"], function(a, c, d) {
                d = d.createNewLocalThreadGenerateID(b("CurrentUser").getID());
                c.openNewMessageTab(d, "jewel_new_message");
                a.logClickOpen("EmptyTab")
            }, "ChatOpenTab")
        }
    };
    e.exports = l
}
), null);
__d("TypingDetector", ["ArbiterMixin", "Event", "Input", "Run", "SubscriptionsHandler", "TypingStates", "createObjectFrom", "emptyFunction"], (function(a, b, c, d, e, f) {
    function a(a, b) {
        this._input = a,
        this._ignoreKeys = {},
        this._getValueFn = b
    }
    Object.assign(a.prototype, b("ArbiterMixin"), {
        _timeout: 7e3,
        _currentState: b("TypingStates").INACTIVE,
        init: function() {
            this.init = b("emptyFunction"),
            this.reset(),
            this._subscriptions = new (b("SubscriptionsHandler"))(),
            this._subscriptions.addSubscriptions(b("Event").listen(this._input, "keyup", this._update.bind(this)), b("Run").onUnload(this._onunload.bind(this)))
        },
        reset: function() {
            clearTimeout(this._checkTimer),
            this._checkTimer = null,
            this._lastKeystrokeAt = null,
            this._currentState = b("TypingStates").INACTIVE
        },
        setIgnoreKeys: function(a) {
            this._ignoreKeys = b("createObjectFrom")(a)
        },
        destroy: function() {
            this._subscriptions.release()
        },
        _onunload: function() {
            this._currentState == b("TypingStates").TYPING && this._transition(b("TypingStates").QUITTING)
        },
        _update: function(a) {
            a = b("Event").getKeyCode(a);
            var c = this._currentState;
            if (!this._ignoreKeys[a]) {
                a = this._getValueFn ? this._getValueFn() : b("Input").getValue(this._input);
                a.trim().length === 0 ? c == b("TypingStates").TYPING && this._transition(b("TypingStates").INACTIVE) : c == b("TypingStates").TYPING ? this._recordKeystroke() : c == b("TypingStates").INACTIVE && (this._transition(b("TypingStates").TYPING),
                this._recordKeystroke())
            }
        },
        _transition: function(a) {
            this.reset(),
            this._currentState = a,
            this.inform("change", a)
        },
        _recordKeystroke: function() {
            this._lastKeystrokeTime = Date.now(),
            this._checkTimer || (this._checkTimer = setTimeout(this._checkTyping.bind(this), this._timeout))
        },
        _checkTyping: function() {
            var a = this._lastKeystrokeTime + this._timeout
              , c = Date.now();
            c > a ? this._transition(b("TypingStates").INACTIVE) : (clearTimeout(this._checkTimer),
            this._checkTimer = setTimeout(this._checkTyping.bind(this), a - c + 10))
        }
    });
    e.exports = a
}
), null);
__d("TypingDetectorController", ["ActorURI", "AsyncRequest", "AvailableList", "AvailableListConstants", "ChatVisibility", "Keys", "MercuryServerRequestsConfig", "MessageRequestUtils", "TypingDetector", "TypingStates", "clearTimeout", "emptyFunction", "ifRequired", "setTimeoutAcrossTransitions", "shield"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = "/ajax/messaging/typ.php";
    a = function() {
        function a(a, c, d, e, f, g, h, i) {
            var j = this;
            this._notifyState = function(a, c) {
                if (!j.userID && !j.threadID || j.thread && !j.pageID && !b("MessageRequestUtils").shouldSendTypingIndicators(j.thread) || !b("ChatVisibility").isOnline() || a === j.remoteState || b("ifRequired")("ChannelConnection", function(a) {
                    return a.disconnected()
                }, function() {
                    return !0
                }))
                    return;
                j._sendRequest(a, j.userID, c)
            }
            ;
            if (!d)
                return;
            this.thread = a;
            this.userID = c;
            this.input = d;
            this.source = e;
            this.threadID = g;
            this.pageID = i;
            this.remoteState = b("TypingStates").INACTIVE;
            this.notifyTimer = null;
            f = f || {};
            this.notifyDelay = f.notifyDelay || this.notifyDelay;
            this._typingDetector = new (b("TypingDetector"))(d,h);
            this._typingDetector.init(f);
            this._typingDetector.subscribe("change", this._stateChange.bind(this))
        }
        var c = a.prototype;
        c.setUserAndThread = function(a, b) {
            (this.userID !== a || this.threadID !== b) && (this.resetState(),
            this.userID = a,
            this.threadID = b)
        }
        ;
        c.setIgnoreEnter = function(a) {
            a = a ? [b("Keys").RETURN] : [];
            this._typingDetector.setIgnoreKeys(a)
        }
        ;
        c.resetState = function() {
            this._notifyState(b("TypingStates").INACTIVE),
            this.remoteState = b("TypingStates").INACTIVE,
            this._typingDetector.reset(),
            b("clearTimeout")(this.notifyTimer),
            this.notifyTimer = null
        }
        ;
        c.destroy = function() {
            this.resetState(),
            this._typingDetector.destroy()
        }
        ;
        c._stateChange = function(a, c) {
            c != b("TypingStates").QUITTING ? (b("clearTimeout")(this.notifyTimer),
            this.notifyTimer = b("setTimeoutAcrossTransitions")(b("shield")(this._notifyState, this, c), this.notifyDelay)) : this._notifyState(c, !0)
        }
        ;
        c._sendRequest = function(a, c, d) {
            this.remoteState = a;
            a = {
                typ: a,
                to: c,
                source: this.source,
                thread: this.threadID
            };
            var e = this.pageID ? b("ActorURI").create(g, this.pageID) : g;
            c = new (b("AsyncRequest"))().setHandler(this._onTypResponse.bind(this, c)).setErrorHandler(b("emptyFunction")).setData(a).setURI(e).setAllowCrossPageTransition(!0).setOption("asynchronous_DEPRECATED", !d);
            b("MercuryServerRequestsConfig").msgrRegion && c.setRequestHeader("X-MSGR-Region", b("MercuryServerRequestsConfig").msgrRegion);
            c.send()
        }
        ;
        c._onTypResponse = function(a, c) {
            c = c.getPayload() || {};
            c.offline && b("AvailableList").set(a, b("AvailableListConstants").OFFLINE, "typing_response")
        }
        ;
        return a
    }();
    Object.assign(a.prototype, {
        notifyDelay: 1e3
    });
    e.exports = a
}
), null);
__d("MWCount.bs", ["gkx", "BanzaiODS"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
        return 0
    }
    function c(a, c) {
        b("BanzaiODS").bumpEntityKey(3185, a, c);
        return 0
    }
    var g = b("gkx")("1430416") ? c : a;
    function d(a) {
        return g("fanta.load", "total")
    }
    function e(a) {
        return g("fanta.new_message", "process")
    }
    function h(a) {
        g("fanta.new_message", "process");
        return g("fanta.new_message", "process_new")
    }
    function i(a) {
        g("fanta.new_message", "process");
        return g("fanta.new_message", "process_log")
    }
    function j(a) {
        g("fanta.new_message", "process");
        return g("fanta.new_message", "process_messages_received")
    }
    h = {
        newMessage: h,
        logMessage: i,
        messagesReceived: j
    };
    function k(a) {
        return g("fanta.new_message", "reject")
    }
    function l(a) {
        g("fanta.new_message", "reject");
        return g("fanta.new_message", "reject_old")
    }
    function m(a) {
        g("fanta.new_message", "reject");
        return g("fanta.new_message", "reject_supress")
    }
    i = {
        old: l,
        suppress: m
    };
    function n(a) {
        return g("fanta.new_message", "lift")
    }
    j = {
        $$process: e,
        Process: h,
        reject: k,
        Reject: i,
        lift: n
    };
    function o(a) {
        return g("fanta.cookie.lift", "none")
    }
    function p(a) {
        return g("fanta.cookie.lift", "some")
    }
    function q(a) {
        g("fanta.cookie.lift", "some");
        return g("fanta.cookie.lift", "one")
    }
    function r(a) {
        g("fanta.cookie.lift", "some");
        return g("fanta.cookie.lift", "many")
    }
    l = {
        none: o,
        some: p,
        one: q,
        many: r
    };
    function s(a) {
        return g("fanta.cookie.show", "none")
    }
    function t(a) {
        return g("fanta.cookie.show", "some")
    }
    function u(a) {
        g("fanta.cookie.show", "some");
        return g("fanta.cookie.show", "one")
    }
    function v(a) {
        g("fanta.cookie.show", "some");
        return g("fanta.cookie.show", "many")
    }
    m = {
        none: s,
        some: t,
        one: u,
        many: v
    };
    e = {
        Lift: l,
        Show: m
    };
    h = {
        load: d,
        NewMessage: j,
        Cookie: e
    };
    function w(a) {
        return g("mwchat.load", "total")
    }
    function x(a) {
        return g("mwchat.new_message", "process")
    }
    function y(a) {
        return g("mwchat.new_message", "reject")
    }
    function z(a) {
        return g("mwchat.new_message", "lift")
    }
    k = {
        $$process: x,
        reject: y,
        lift: z
    };
    function A(a) {
        return g("mwchat.cookie.lift", "none")
    }
    function B(a) {
        return g("mwchat.cookie.lift", "some")
    }
    function C(a) {
        g("mwchat.cookie.lift", "some");
        return g("mwchat.cookie.lift", "one")
    }
    function D(a) {
        g("mwchat.cookie.lift", "some");
        return g("mwchat.cookie.lift", "many")
    }
    i = {
        none: A,
        some: B,
        one: C,
        many: D
    };
    function E(a) {
        return g("mwchat.cookie.show", "none")
    }
    function F(a) {
        return g("mwchat.cookie.show", "some")
    }
    function G(a) {
        g("mwchat.cookie.show", "some");
        return g("mwchat.cookie.show", "one")
    }
    function H(a) {
        g("mwchat.cookie.show", "some");
        return g("mwchat.cookie.show", "many")
    }
    n = {
        none: E,
        some: F,
        one: G,
        many: H
    };
    o = {
        Lift: i,
        Show: n
    };
    p = {
        load: w,
        NewMessage: k,
        Cookie: o
    };
    f.noop = a;
    f.log = c;
    f.bump = g;
    f.Blue = h;
    f.Comet = p
}
), null);
__d("MWCount.re", ["MWCount.bs"], (function(a, b, c, d, e, f) {
    c = (a = b("MWCount.bs")).Blue.load;
    f.Blue_load = c;
    d = a.Blue.NewMessage.Process.newMessage;
    f.Blue_NewMessage_Process_newMessage = d;
    e = a.Blue.NewMessage.Process.logMessage;
    f.Blue_NewMessage_Process_logMessage = e;
    b = a.Blue.NewMessage.Process.messagesReceived;
    f.Blue_NewMessage_Process_messagesReceived = b;
    c = a.Blue.NewMessage.reject;
    f.Blue_NewMessage_reject = c;
    d = a.Blue.NewMessage.Reject.old;
    f.Blue_NewMessage_Reject_old = d;
    e = a.Blue.NewMessage.Reject.suppress;
    f.Blue_NewMessage_Reject_suppress = e;
    b = a.Blue.NewMessage.lift;
    f.Blue_NewMessage_lift = b;
    c = a.Blue.Cookie.Lift.none;
    f.Blue_Cookie_Lift_none = c;
    d = a.Blue.Cookie.Lift.some;
    f.Blue_Cookie_Lift_some = d;
    e = a.Blue.Cookie.Lift.many;
    f.Blue_Cookie_Lift_many = e;
    b = a.Blue.Cookie.Show.none;
    f.Blue_Cookie_Show_none = b;
    c = a.Blue.Cookie.Show.one;
    f.Blue_Cookie_Show_one = c;
    d = a.Blue.Cookie.Show.many;
    f.Blue_Cookie_Show_many = d;
    e = a.Blue;
    f.Blue = e
}
), null);
__d("EmoticonEmojiList", [], (function(a, b, c, d, e, f) {
    a = {
        ":)": "slightsmile",
        ":-)": "slightsmile",
        ":]": "slightsmile",
        "=)": "smile",
        "(:": "slightsmile",
        "(=": "smile",
        ":(": "frown",
        ":-(": "frown",
        ":[": "frown",
        "=(": "frown",
        ")=": "frown",
        ";-P": "winktongue",
        ";P": "winktongue",
        ";-p": "winktongue",
        ";p": "winktongue",
        ":dog:": "dog",
        ":poop:": "poop",
        ":trans:": "transflag",
        ":P": "tongue",
        ":-P": "tongue",
        ":-p": "tongue",
        ":p": "tongue",
        "=P": "tongue",
        "=p": "tongue",
        "=D": "grin",
        ":-D": "slightgrin",
        ":D": "slightgrin",
        ":o": "gasp",
        ":-O": "gasp",
        ":O": "gasp",
        ":-o": "gasp",
        ";)": "wink",
        ";-)": "wink",
        "8-)": "glasses",
        "8)": "glasses",
        "B-)": "glasses",
        "B)": "glasses",
        ">:(": "grumpy",
        ">:-(": "grumpy",
        ":/": "unsure",
        ":-/": "unsure",
        ":\\": "unsure",
        ":-\\": "unsure",
        "=/": "unsure",
        "=\\": "unsure",
        ":'(": "cry",
        ":'-(": "cry",
        ":\u2019(": "cry",
        ":\u2019-(": "cry",
        "3:)": "devil",
        "3:-)": "devil",
        "O:)": "angel",
        "O:-)": "angel",
        "0:)": "angel",
        "0:-)": "angel",
        ":*": "kiss",
        ":-*": "kiss",
        ";-*": "winkkiss",
        ";*": "winkkiss",
        "<3": "heart",
        "&lt;3": "heart",
        "\u2665": "heart",
        "^_^": "kiki",
        "^~^": "kiki",
        "-_-": "expressionless",
        ":-|": "squint",
        ":|": "squint",
        ">:o": "upset",
        ">:O": "upset",
        ">:-O": "upset",
        ">:-o": "upset",
        ">_<": "persevere",
        ">.<": "persevere",
        '<(")': "penguin",
        O_O: "flushface",
        o_o: "flushface",
        "0_0": "flushface",
        T_T: "crying",
        "T-T": "crying",
        ToT: "crying",
        "T.T": "crying",
        "-3-": "flushkiss",
        "'-_-": "sweating",
        "\u2019-_-": "sweating",
        "(y)": "like",
        ":like:": "like",
        "(Y)": "like",
        "(n)": "dislike",
        "(N)": "dislike"
    };
    f.names = a;
    b = {
        slightsmile: "1f642",
        smile: "1f60a",
        frown: "1f61e",
        winktongue: "1f61c",
        dog: "1f436",
        poop: "1f4a9",
        transflag: "1f3f3_200d_26a7",
        tongue: "1f61b",
        slightgrin: "1f600",
        grin: "1f603",
        gasp: "1f62e",
        wink: "1f609",
        glasses: "1f60e",
        grumpy: "1f620",
        unsure: "1f615",
        cry: "1f622",
        devil: "1f608",
        angel: "1f607",
        kiss: "1f617",
        winkkiss: "1f618",
        heart: "2764",
        kiki: "1f60a",
        expressionless: "1f611",
        squint: "1f610",
        upset: "1f620",
        persevere: "1f623",
        penguin: "1f427",
        flushface: "1f633",
        crying: "1f62d",
        flushkiss: "1f61a",
        sweating: "1f613",
        like: "f0000",
        dislike: "1f44e"
    };
    f.emote2emojis = b;
    c = {
        slightsmile: ":)",
        smile: "=)",
        frown: ":(",
        winktongue: ";-P",
        dog: ":dog:",
        poop: ":poop:",
        transflag: ":trans:",
        tongue: ":P",
        slightgrin: ":D",
        grin: "=D",
        gasp: ":o",
        wink: ";)",
        glasses: "8-)",
        grumpy: ">:(",
        unsure: ":/",
        cry: ":'(",
        devil: "3:)",
        angel: "O:)",
        kiss: ":*",
        winkkiss: ";*",
        heart: "<3",
        kiki: "^_^",
        expressionless: "-_-",
        squint: ":-|",
        upset: ">:o",
        persevere: ">_<",
        penguin: '<(")',
        flushface: "O_O",
        crying: "T_T",
        flushkiss: "-3-",
        sweating: "'-_-",
        like: "(y)",
        dislike: "(n)"
    };
    f.symbols = c;
    d = /(^|[\s\'\".])(:\)(?!\))|:\-\)(?!\))|:\]|=\)(?!\))|\(:|\(=|:\(|:\-\(|:\[|=\(|\)=|;P|;\-P|;\-p|;p|:dog:|:poop:|:trans:|:P|:\-P|:\-p|:p|=P|=p|=D|:\-D|:D|:o|:\-O|:O|:\-o|;\)(?!\))|;\-\)(?!\))|8\-\)(?!\))|B\-\)(?!\))|B\)(?!\))|8\)(?!\))|>:\(|>:\-\(|:\/|:\-\/|:\\|:\-\\|=\/|=\\|:\'\(|:\'\-\(|:\u2019\(|:\u2019\-\(|3:\)(?!\))|3:\-\)(?!\))|O:\)(?!\))|O:\-\)(?!\))|0:\)(?!\))|0:\-\)(?!\))|:\*|:\-\*|;\*|;\-\*|<3|&lt;3|\u2665|\^_\^|\^~\^|\-_\-|:\-\||:\||>:o|>:O|>:\-O|>:\-o|>_<|>\.<|<\(\"\)(?!\))|O_O|o_o|0_0|T_T|T\-T|ToT|T\.T|\-3\-|\'\-_\-|\u2019\-_\-|\(y\)(?!\))|:like:|\(Y\)(?!\))|\(n\)(?!\))|\(N\)(?!\)))([\s\'\".,!?]|<br>|$)/;
    f.regexp = d;
    e = /(?:^|[\s\'\".])(:\)(?!\))|:\-\)(?!\))|:\]|=\)(?!\))|\(:|\(=|:\(|:\-\(|:\[|=\(|\)=|;P|;\-P|;\-p|;p|:dog:|:poop:|:trans:|:P|:\-P|:\-p|:p|=P|=p|=D|:\-D|:D|:o|:\-O|:O|:\-o|;\)(?!\))|;\-\)(?!\))|8\-\)(?!\))|B\-\)(?!\))|B\)(?!\))|8\)(?!\))|>:\(|>:\-\(|:\/|:\-\/|:\\|:\-\\|=\/|=\\|:\'\(|:\'\-\(|:\u2019\(|:\u2019\-\(|3:\)(?!\))|3:\-\)(?!\))|O:\)(?!\))|O:\-\)(?!\))|0:\)(?!\))|0:\-\)(?!\))|:\*|:\-\*|;\*|;\-\*|<3|&lt;3|\u2665|\^_\^|\^~\^|\-_\-|:\-\||:\||>:o|>:O|>:\-O|>:\-o|>_<|>\.<|<\(\"\)(?!\))|O_O|o_o|0_0|T_T|T\-T|ToT|T\.T|\-3\-|\'\-_\-|\u2019\-_\-|\(y\)(?!\))|:like:|\(Y\)(?!\))|\(n\)(?!\))|\(N\)(?!\)))(?:[\s\'\".,!?]|<br>|$)/;
    f.noncapturingRegexp = e
}
), null);
__d("MercuryMessageRenderLocations", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({
        CHAT: "chat",
        MESSENGER: "messenger",
        PAGES: "pages"
    });
    e.exports = a
}
), null);
__d("MessengerFormattingUtils", ["cx", "CurrentUser", "JSResource", "MessengerFormattingConfig", "Newline.react", "React", "UnicodeUtils", "lazyLoadComponent", "nullthrows"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.hasMatch = e;
    f.getRanges = q;
    var h, i = b("React"), j = b("lazyLoadComponent")(b("JSResource")("MessengerCodeBlock.react").__setRef("MessengerFormattingUtils"));
    function a(a) {
        return {
            offset: a[1].length,
            length: (h || (h = b("UnicodeUtils"))).strlen(a[2]) + 2,
            innerOffset: 1,
            innerText: a[2]
        }
    }
    function c(a) {
        return {
            offset: a[1].length,
            length: (h || (h = b("UnicodeUtils"))).strlen(a[2]) + 2,
            innerOffset: 1,
            innerText: a[2].replace(/\s\s+/g, " ").trim()
        }
    }
    function d(a) {
        return {
            offset: 0,
            length: (h || (h = b("UnicodeUtils"))).strlen(a[0]),
            innerOffset: h.strlen(a[1]),
            innerText: a[2]
        }
    }
    g = b("MessengerFormattingConfig");
    e = {
        pattern: new RegExp(g.boldConfig.pattern,"g"),
        nonCapturingPattern: new RegExp(g.boldConfig.nonCapturingPattern),
        formatter: function(a) {
            a = a.children;
            return i.jsx("b", {
                children: a
            })
        },
        getRangeInMatch: a,
        recursivelyFormat: !0
    };
    var k = {
        pattern: new RegExp(g.italicConfig.pattern,"g"),
        nonCapturingPattern: new RegExp(g.italicConfig.nonCapturingPattern),
        formatter: function(a) {
            a = a.children;
            return i.jsx("i", {
                children: a
            })
        },
        getRangeInMatch: a,
        recursivelyFormat: !0
    };
    a = {
        pattern: new RegExp(g.strikethroughConfig.pattern,"g"),
        nonCapturingPattern: new RegExp(g.strikethroughConfig.nonCapturingPattern),
        formatter: function(a) {
            a = a.children;
            return i.jsx("s", {
                children: a
            })
        },
        getRangeInMatch: a,
        recursivelyFormat: !0
    };
    c = {
        pattern: new RegExp(g.codeConfig.pattern,"g"),
        nonCapturingPattern: new RegExp(g.codeConfig.nonCapturingPattern),
        formatter: function(a) {
            a = a.children;
            return i.jsx("code", {
                className: b("CurrentUser").isWorkUser() ? "_7ilw" : "",
                children: a
            })
        },
        getRangeInMatch: c,
        recursivelyFormat: !1
    };
    var l = function(a) {
        var c = a.children;
        a = a.range;
        return i.jsxs(i.Fragment, {
            children: [i.jsx(i.Suspense, {
                fallback: i.jsx("div", {
                    className: "_7mv7",
                    children: c
                }),
                children: i.jsx(j, {
                    range: a,
                    children: c
                })
            }), i.jsx(b("Newline.react"), {})]
        })
    }
      , m = {
        pattern: new RegExp(g.codeBlockConfig.pattern,"g"),
        nonCapturingPattern: new RegExp(g.codeBlockConfig.nonCapturingPattern),
        formatter: function(a) {
            a = a.children;
            return i.jsx("code", {
                children: a
            })
        },
        getRangeInMatch: d,
        recursivelyFormat: !1
    };
    l = {
        pattern: new RegExp(g.codeBlockV2Config.pattern,"g"),
        nonCapturingPattern: new RegExp(g.codeBlockV2Config.nonCapturingPattern),
        formatter: l,
        getRangeInMatch: function(a) {
            var c = a[3] || ""
              , d = a[4] !== void 0 ? a[4] : a[5]
              , e = a[1] || ""
              , f = a[2] || "";
            return {
                offset: 0,
                length: (h || (h = b("UnicodeUtils"))).strlen(a[0]),
                innerOffset: h.strlen(e) + h.strlen(f),
                innerText: d,
                codeBlockLanguage: c
            }
        },
        recursivelyFormat: !1
    };
    var n = function(a) {
        a = a.children;
        return i.jsxs(i.Fragment, {
            children: [i.jsxs("blockquote", {
                className: "_pye" + (b("CurrentUser").isWorkUser() ? " _7ilx" : ""),
                children: [i.jsx("div", {
                    className: "_pyf"
                }), a]
            }), i.jsx(b("Newline.react"), {})]
        })
    };
    d = {
        pattern: new RegExp(g.blockQuoteConfig.pattern,"gm"),
        nonCapturingPattern: new RegExp(g.blockQuoteConfig.nonCapturingPattern,"m"),
        formatter: n,
        getRangeInMatch: d,
        recursivelyFormat: !0
    };
    n = {
        pattern: new RegExp(g.multipleInlineBlockQuoteConfig.pattern,"gm"),
        nonCapturingPattern: new RegExp(g.multipleInlineBlockQuoteConfig.nonCapturingPattern,"m"),
        formatter: n,
        getRangeInMatch: function(a) {
            var c = a[0]
              , d = (h || (h = b("UnicodeUtils"))).strlen(c);
            a = h.strlen(a[2]);
            return {
                offset: 0,
                length: d,
                innerOffset: a,
                innerText: h.substring(c, a, d)
            }
        },
        recursivelyFormat: !0,
        getAdditionalInnerRanges: function(a) {
            return q(a.innerText, [o]).map(function(b) {
                return babelHelpers["extends"]({}, b, {
                    offset: b.offset + a.innerOffset,
                    innerOffset: b.innerOffset + a.innerOffset
                })
            })
        }
    };
    var o = {
        pattern: new RegExp(g.singleInlineBlockQuoteConfig.pattern,"gm"),
        nonCapturingPattern: new RegExp(g.singleInlineBlockQuoteConfig.nonCapturingPattern,"m"),
        formatter: function(a) {
            a = a.children;
            return a
        },
        getRangeInMatch: function(a) {
            return {
                offset: 0,
                length: (h || (h = b("UnicodeUtils"))).strlen(a[0]),
                innerOffset: h.strlen(a[1]),
                innerText: a[2]
            }
        },
        recursivelyFormat: !0
    }
      , p = [d, e, k, a, c, n];
    f.defaultFormatConfigs = p;
    p.push(b("CurrentUser").isWorkUser() ? l : m);
    function e(a, b) {
        b === void 0 && (b = p);
        for (var c = 0; c < b.length; c++) {
            var d = b[c].nonCapturingPattern;
            if (d.test(a))
                return !0
        }
        return !1
    }
    function q(a, c) {
        c === void 0 && (c = p);
        var d = [];
        for (var e = 0; e < c.length; e++) {
            var f = c[e];
            f.pattern.lastIndex = 0;
            var g = void 0;
            while ((g = f.pattern.exec(a)) != null) {
                g = b("nullthrows")(g);
                var i = f.getRangeInMatch(g)
                  , j = a.substr(0, g.index + i.offset);
                j = (h || (h = b("UnicodeUtils"))).strlen(j);
                j = {
                    offset: j,
                    length: i.length,
                    innerText: i.innerText,
                    innerOffset: j + i.innerOffset,
                    formatter: f.formatter,
                    recursivelyFormat: f.recursivelyFormat,
                    codeBlockLanguage: i.codeBlockLanguage
                };
                i = f.getAdditionalInnerRanges ? f.getAdditionalInnerRanges(j) : [];
                d.push(j);
                d = d.concat(i)
            }
        }
        return d
    }
    g = {
        bold: e,
        italic: k,
        strikethrough: a,
        blockcode: m,
        codeblockV2: l,
        code: c,
        blockquote: d,
        multipleInlineBlockquote: n,
        singleInlineBlockquote: o
    };
    f.formatConfigs = g
}
), null);
__d("MessengerMathUtils", ["UnicodeUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    f.isMathBlock = a;
    f.getMathBlockInner = c;
    f.hasInlineMath = d;
    f.getInlineMathRanges = e;
    f.getMaxBraceDepth = k;
    var g, h = 2;
    f.MATH_DELIMITER_LENGTH = h;
    var i = /^(?:\$\$|\\\[)[\s\S]*?\S[\s\S]*?(?:\$\$|\\\])$/
      , j = /\\\([\s\S]*?\S[\s\S]*?\\\)/g;
    function a(a) {
        return i.test(a)
    }
    function c(a) {
        return a.substring(h, a.length - h)
    }
    function d(a) {
        j.lastIndex = 0;
        return j.test(a)
    }
    function e(a, c) {
        c === void 0;
        c = [];
        j.lastIndex = 0;
        var d;
        while ((d = j.exec(a)) !== null) {
            d = b("nullthrows")(d);
            var e = a.substring(0, d.index);
            e = (g || (g = b("UnicodeUtils"))).strlen(e);
            c.push({
                offset: e,
                length: g.strlen(d[0]),
                math: !0
            })
        }
        return c
    }
    function k(a) {
        var b = a.length
          , c = 0
          , d = 0;
        for (var e = 0; e < b; e++)
            a[e] === "\\" ? a.slice(e, e + 6) === "\\begin" ? (c += 2,
            d = Math.max(d, c)) : a.slice(e, e + 4) === "\\end" ? c -= 2 : e++ : a[e] === "{" ? (c++,
            d = Math.max(d, c)) : a[e] === "}" && c--;
        return d
    }
}
), null);
__d("SkinToneEmoji.bs", ["bs_caml_array", "EmojiFormat.bs", "MessengerEmojiConfig"], (function(a, b, c, d, e, f) {
    "use strict";
    function g(a) {
        switch (a) {
        case "1f385":
        case "1f3c3":
        case "1f3c4":
        case "1f3ca":
        case "1f3cb":
        case "1f442":
        case "1f443":
        case "1f446":
        case "1f447":
        case "1f448":
        case "1f449":
        case "1f44a":
        case "1f44b":
        case "1f44c":
        case "1f44d":
        case "1f44e":
        case "1f44f":
        case "1f450":
        case "1f466":
        case "1f467":
        case "1f468":
        case "1f469":
        case "1f46e":
        case "1f470":
        case "1f471":
        case "1f472":
        case "1f473":
        case "1f474":
        case "1f475":
        case "1f476":
        case "1f477":
        case "1f478":
        case "1f47c":
        case "1f481":
        case "1f482":
        case "1f483":
        case "1f485":
        case "1f486":
        case "1f487":
        case "1f4aa":
        case "1f575":
        case "1f590":
        case "1f595":
        case "1f596":
        case "1f645":
        case "1f646":
        case "1f647":
        case "1f64b":
        case "1f64c":
        case "1f64d":
        case "1f64e":
        case "1f64f":
        case "1f6a3":
        case "1f6b4":
        case "1f6b5":
        case "1f6b6":
        case "1f6c0":
        case "1f918":
        case "261d":
        case "26f9":
        case "270a":
        case "270b":
        case "270c":
        case "270d":
            return !0;
        default:
            return !1
        }
    }
    function h(a) {
        if (b("bs_caml_array").caml_array_get(a, a.length - 1 | 0) === 65039)
            return b("bs_caml_array").caml_array_get(a, a.length - 1 | 0);
        else
            return 0
    }
    function i(a) {
        if (b("bs_caml_array").caml_array_get(a, a.length - 1 | 0) === 65039)
            return a;
        else {
            a = a.slice(0);
            return a.concat([65039])
        }
    }
    function j(a) {
        if (h(a) === 0)
            return a;
        else
            return a.slice(0, a.length - 1 | 0)
    }
    function k(a) {
        var c = b("MessengerEmojiConfig").emoji_colors;
        c = c.filter(function(b) {
            return b === a
        });
        return c.length !== 0
    }
    function l(a) {
        a = j(a);
        if (a.length <= 1 || !k(b("bs_caml_array").caml_array_get(a, a.length - 1 | 0)))
            return 0;
        else
            return b("bs_caml_array").caml_array_get(a, a.length - 1 | 0)
    }
    function m(a) {
        var b = h(a)
          , c = b === 0 ? l(a) : l(a.slice(0, a.length - 1 | 0));
        if (c !== 0)
            if (b === 0)
                return a.slice(0, a.length - 1 | 0);
            else
                return i(a.slice(0, a.length - 2 | 0));
        else
            return a
    }
    function a(a, b) {
        if (b !== 0) {
            var c = h(a)
              , d = c === 0 ? a.slice(0) : a.slice(0, a.length - 1 | 0)
              , e = l(d);
            if (e !== 0)
                return a;
            else {
                e = d.concat([b]);
                if (c === 0)
                    return e;
                else
                    return e.concat([c])
            }
        } else
            return a
    }
    function c(a) {
        return m(j(a))
    }
    function d(a) {
        return g(b("EmojiFormat.bs").codeArrayToCodeString(m(j(a))))
    }
    e = 65039;
    f.emoji_modifier_code = e;
    f.emoji = g;
    f.getEmojiModifier = h;
    f.addEmojiModifier = i;
    f.removeEmojiModifier = j;
    f.isToneModifier = k;
    f.getTone = l;
    f.removeTone = m;
    f.applyTone = a;
    f.removeAllModifiers = c;
    f.hasVariations = d
}
), null);
__d("MessengerEmojiTransitionMapping.bs", ["bs_caml_array", "EmojiFormat.bs", "SkinToneEmoji.bs"], (function(a, b, c, d, e, f) {
    "use strict";
    function g(a) {
        switch (a) {
        case "1f3c3":
        case "1f3c4":
        case "1f3ca":
        case "1f3cb":
        case "1f3cc":
        case "1f46e":
        case "1f46f":
        case "1f471":
        case "1f473":
        case "1f477":
        case "1f481":
        case "1f482":
        case "1f486":
        case "1f487":
        case "1f575":
        case "1f645":
        case "1f646":
        case "1f647":
        case "1f64b":
        case "1f64d":
        case "1f64e":
        case "1f6a3":
        case "1f6b4":
        case "1f6b5":
        case "1f6b6":
        case "26f9":
            return !0;
        default:
            return !1
        }
    }
    function h(a) {
        if (b("bs_caml_array").caml_array_get(a, a.length - 1 | 0) === 65039)
            return b("bs_caml_array").caml_array_get(a, a.length - 1 | 0);
        else
            return 0
    }
    function i(a) {
        if (b("bs_caml_array").caml_array_get(a, a.length - 1 | 0) === 65039)
            return a;
        else {
            a = a.slice(0);
            return a.concat([65039])
        }
    }
    function j(a) {
        if (h(a) === 0)
            return a;
        else
            return a.slice(0, a.length - 1 | 0)
    }
    function k(a) {
        if (a === 9792)
            return !0;
        else
            return a === 9794
    }
    function l(a) {
        a = j(a);
        if (a.length <= 1 || !k(b("bs_caml_array").caml_array_get(a, a.length - 1 | 0)))
            return 0;
        else
            return b("bs_caml_array").caml_array_get(a, a.length - 1 | 0)
    }
    function m(a) {
        var b = h(a)
          , c = b === 0 ? l(a) : l(a.slice(0, a.length - 1 | 0));
        if (c !== 0)
            if (b === 0)
                return a.slice(0, a.length - 2 | 0);
            else
                return i(a.slice(0, a.length - 3 | 0));
        else
            return a
    }
    function n(a, b) {
        if (b !== 0) {
            var c = h(a)
              , d = c === 0 ? a.slice(0) : a.slice(0, a.length - 1 | 0)
              , e = l(d);
            if (e !== 0)
                return a;
            else {
                e = d.concat([8205, b]);
                if (c === 0)
                    return e;
                else
                    return e.concat([c])
            }
        } else
            return a
    }
    function a(a) {
        return n(a, 9792)
    }
    function c(a) {
        return m(b("SkinToneEmoji.bs").removeTone(a))
    }
    function d(a) {
        return g(b("EmojiFormat.bs").codeArrayToCodeString(m(b("SkinToneEmoji.bs").removeTone(a))))
    }
    function e(a) {
        a = b("EmojiFormat.bs").codeArrayToCodeString(m(b("SkinToneEmoji.bs").removeTone(a)));
        switch (a) {
        case "1f46a":
        case "1f48f":
        case "1f491":
            return !0;
        default:
            return !1
        }
    }
    var o = 65039
      , p = 9792
      , q = 9794
      , r = 8205;
    f.emoji_modifier_code = o;
    f.gender_female = p;
    f.gender_male = q;
    f.zero_join = r;
    f.emoji = g;
    f.getEmojiModifier = h;
    f.addEmojiModifier = i;
    f.removeEmojiModifier = j;
    f.isGenderModifier = k;
    f.getGender = l;
    f.removeGender = m;
    f.applyGender = n;
    f.makeFemale = a;
    f.removeAllModifiers = c;
    f.hasGender = d;
    f.isBlacklisted = e
}
), null);
__d("MessengerHotlikeEmoji.bs", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = "f0000";
    function a(a) {
        return a === g
    }
    f.hotlike_key = g;
    f.isMessengerHotlike = a
}
), null);
__d("Utf16", [], (function(a, b, c, d, e, f) {
    f.decode = a;
    f.encode = b;
    function a(a) {
        switch (a.length) {
        case 1:
            return a.charCodeAt(0);
        case 2:
            return 65536 | (a.charCodeAt(0) - 55296) * 1024 | a.charCodeAt(1) - 56320;
        default:
            return null
        }
    }
    function b(a) {
        if (a < 65536)
            return String.fromCharCode(a);
        else
            return String.fromCharCode(55296 + (a - 65536 >> 10)) + String.fromCharCode(56320 + a % 1024)
    }
}
), null);
__d("MessengerSupportedEmojiUtils", ["cx", "EmojiImageURL", "EmojiLikeConstants", "EmojiRenderer", "EmoticonEmojiList", "FBEmojiAliases", "FBEmojiResource", "Image.react", "MessengerEmojiTransitionMapping.bs", "MessengerHotlikeEmoji.bs", "MessengerSupportedEmoji", "React", "SupportedEmoji3", "SupportedFacebookEmoji", "Utf16", "joinClasses"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.getSupportedEmojiKey = a;
    f.isSupportedEmoji = c;
    f.isSupportedEmojiKey = d;
    f.isMessengerSupportedEmojiKey = e;
    f.getSupportedEmojiCodesArray = g;
    f.getEmojiKeyFromCodes = k;
    f.getClassSizeMap = l;
    f.getEmojiMatchObj = m;
    f.getNewEmojiData = n;
    f.getHotLikeEmojiDataTransition = o;
    f.getHotLikeEmojiData = p;
    f.getEmojiOnlyContents = q;
    f.getUrl = r;
    f.containsEmoji = s;
    f.parse = t;
    f.transferSize = u;
    var h = b("React")
      , i = /_fe0f/g
      , j = new RegExp("(\r\n|[ \r\n]|\\s)");
    function a(a) {
        if (!a)
            return null;
        var c = null
          , d = this.parse(a);
        if (d.length === 1 && d[0].length === a.length) {
            a = d[0].emoji.map(function(a) {
                return b("Utf16").decode(a)
            });
            c = a.map(function(a) {
                return a.toString(16)
            }).join("_").replace(i, "")
        }
        if (c) {
            d = b("FBEmojiAliases")[c];
            d && (c = d.replace(i, ""))
        }
        return this.isSupportedEmojiKey(c) ? c : null
    }
    function c(a) {
        return !!this.getSupportedEmojiKey(a)
    }
    function d(a) {
        if (!a)
            return !1;
        if (!b("MessengerHotlikeEmoji.bs").isMessengerHotlike(a)) {
            var c = function(a) {
                var c = b("FBEmojiAliases")[a];
                return c ? c.replace(i, "") : a
            }(a);
            return !!b("SupportedFacebookEmoji")[c] || !!b("SupportedEmoji3")[c]
        }
        return !!b("MessengerSupportedEmoji").emoji[a]
    }
    function e(a) {
        return !!(a && b("MessengerSupportedEmoji").emoji[a])
    }
    function g(a) {
        if (!a)
            return null;
        var c = this.parse(a);
        if (c.length === 1 && c[0].length === a.length) {
            a = c[0].emoji.map(function(a) {
                return b("Utf16").decode(a)
            });
            c = a.map(function(a) {
                return a.toString(16)
            }).join("_").replace(i, "");
            if (this.isSupportedEmojiKey(c))
                return a
        }
        return null
    }
    function k(a) {
        a = a.map(function(a) {
            return a.toString(16)
        }).join("_").replace(i, "");
        var c = b("FBEmojiAliases")[a];
        return c ? c.replace(i, "") : a
    }
    function l() {
        var a, c = b("EmojiLikeConstants").size;
        return a = {},
        a[c.XSMALL] = "_2560",
        a[c.SMALL] = "_1ifu",
        a[c.MEDIUM] = "_19_r",
        a[c.LARGE] = "_19_s",
        a
    }
    function m(a) {
        a = this.parse(a, 1);
        if (a.length !== 1)
            return null;
        var c = a[0].emoji
          , d = a[0].emoji.map(function(a) {
            return b("Utf16").decode(a)
        });
        b("MessengerEmojiTransitionMapping.bs").hasGender(d) && !b("MessengerEmojiTransitionMapping.bs").getGender(d) && (d = b("MessengerEmojiTransitionMapping.bs").makeFemale(d));
        d = d.map(function(a) {
            return a.toString(16)
        }).join("_").replace(i, "");
        return {
            emoji_key: d,
            emoji_str: c.join(""),
            is_supported: this.isSupportedEmojiKey(d),
            offset: a[0].offset,
            length: a[0].length
        }
    }
    function n(a, c) {
        if (!a)
            return null;
        a = this.getSupportedEmojiKey(a);
        if (!a)
            return null;
        var d = this.getClassSizeMap();
        c = this.transferSize(c);
        b("EmojiLikeConstants").sizeMap[c] || (c = b("EmojiLikeConstants").size.XSMALL);
        d = b("joinClasses")(d[c], "_1ift");
        c = b("EmojiLikeConstants").sizeMap[c];
        c = b("MessengerHotlikeEmoji.bs").isMessengerHotlike(a) ? b("EmojiImageURL").getMessengerURL(a, c) : new (b("FBEmojiResource"))(a).getImageURL(c);
        return c == null ? null : {
            emoji: h.jsx(b("Image.react"), {
                className: d,
                src: c
            }),
            emoji_key: a,
            url: c
        }
    }
    function o(a, c) {
        if (!a)
            return null;
        a = this.getSupportedEmojiKey(a, !0);
        if (!a)
            return null;
        var d = this.getClassSizeMap();
        c = this.transferSize(c);
        var e = c === b("EmojiLikeConstants").size.MEDIUM ? b("EmojiLikeConstants").size.LARGE : c;
        b("EmojiLikeConstants").sizeMap[c] || (c = b("EmojiLikeConstants").size.XSMALL);
        d = b("joinClasses")(d[c], "_1ift");
        c = b("EmojiLikeConstants").sizeMap[e];
        e = b("MessengerHotlikeEmoji.bs").isMessengerHotlike(a) ? b("EmojiImageURL").getMessengerURL(a, c) : new (b("FBEmojiResource"))(a).getImageURL(c);
        return e == null ? null : {
            emoji: h.jsx(b("Image.react"), {
                className: d,
                src: e
            }),
            emoji_key: a,
            url: e
        }
    }
    function p(a, c) {
        if (!a)
            return null;
        a = this.getSupportedEmojiKey(a);
        if (!a)
            return null;
        var d = this.getClassSizeMap();
        c = this.transferSize(c);
        var e = c === b("EmojiLikeConstants").size.MEDIUM ? b("EmojiLikeConstants").size.LARGE : c;
        b("EmojiLikeConstants").sizeMap[c] || (c = b("EmojiLikeConstants").size.XSMALL);
        d = b("joinClasses")(d[c], "_1ift");
        c = b("EmojiLikeConstants").sizeMap[e];
        e = b("MessengerHotlikeEmoji.bs").isMessengerHotlike(a) ? b("EmojiImageURL").getMessengerURL(a, c) : new (b("FBEmojiResource"))(a).getImageURL(c);
        return e == null ? null : {
            emoji: h.jsx(b("Image.react"), {
                className: d,
                src: e
            }),
            emoji_key: a,
            url: e
        }
    }
    function q(a) {
        a = a || "";
        var c = []
          , d = function(a) {
            var b = j.exec(a)
              , d = "";
            while (b && b.length && b.index === 0)
                d += b[0],
                a = a.replace(j, ""),
                b = j.exec(a);
            d.length > 0 && c.push({
                text: d
            });
            return a
        };
        while (!0) {
            a = d(a);
            var e = b("EmoticonEmojiList").noncapturingRegexp.exec(a);
            if (e && e.index === 0) {
                var f = b("EmoticonEmojiList").names[e[1]];
                f = b("EmoticonEmojiList").emote2emojis[f];
                c.push({
                    emojiKey: f,
                    text: e[1]
                });
                a = a.replace(e[1], "")
            } else
                break
        }
        while (a.length > 0 && a.trim().length > 0) {
            a = d(a);
            f = this.getEmojiMatchObj(a);
            if (f && f.is_supported)
                c.push({
                    emojiKey: f.emoji_key,
                    text: f.emoji_str
                }),
                a = a.replace(f.emoji_str, "");
            else
                return null
        }
        return c
    }
    function r(a, c) {
        a = a.replace(i, "");
        c = this.transferSize(c);
        if (!b("MessengerHotlikeEmoji.bs").isMessengerHotlike(a)) {
            var d = b("FBEmojiAliases")[a];
            d && (a = d.replace(i, ""));
            return !this.isSupportedEmojiKey(a) ? null : new (b("FBEmojiResource"))(a).getImageURL(b("EmojiLikeConstants").sizeMap[c])
        }
        return !b("MessengerSupportedEmoji").emoji[a] ? null : b("EmojiImageURL").getMessengerURL(a, b("EmojiLikeConstants").sizeMap[c])
    }
    function s(a) {
        return this.parse(a, 1).length === 1
    }
    function t(a, c) {
        return b("EmojiRenderer").parse(a, c)
    }
    function u(a) {
        return b("EmojiLikeConstants").sizeMapTransfer[a] || a
    }
}
), null);
__d("MessengerHotlikeEmoji.re", ["MessengerHotlikeEmoji.bs"], (function(a, b, c, d, e, f) {
    a = b("MessengerHotlikeEmoji.bs").isMessengerHotlike;
    f.isMessengerHotlike = a
}
), null);
__d("messengerIterateEmoji", ["MessengerSupportedEmoji", "ifRequired"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c, d, e) {
        var f = String(a);
        while (f) {
            a = b("ifRequired")("MessengerSupportedEmojiUtils", function(a) {
                return a.getEmojiMatchObj(f)
            }, function() {
                return b("MessengerSupportedEmoji").getEmojiMatchObj(f)
            });
            if (a) {
                var g = a.offset + a.length
                  , h = f.substr(0, a.is_supported ? a.offset : g);
                d(h);
                a.is_supported && c(a.emoji_str, a.emoji_key, e);
                h = f.substr(g);
                f = h
            } else
                break
        }
        d(f)
    }
}
), null);
__d("messengerIterateEmoticons", ["EmoticonEmojiList"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c, d, e) {
        var f, g, h;
        a = String(a);
        while (a) {
            g = b("EmoticonEmojiList").regexp.exec(a);
            if (g)
                f = g.index + g[1].length,
                h = a.substr(0, f),
                g = g[2],
                f = a.substr(f + g.length),
                d(h),
                c(g, b("EmoticonEmojiList").names[g], e),
                a = f;
            else
                break
        }
        d(a)
    }
}
), null);
__d("MessengerTextWithEmoticons.react", ["cx", "fbt", "BaseTextWithDecoration.react", "EmojiImageURL", "EmoticonEmojiList", "FBEmojiResource", "Image.react", "MessengerHotlikeEmoji.re", "React", "messengerIterateEmoji", "messengerIterateEmoticons"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    function j(a, c, d, e, f) {
        var g = e === !0 ? 128 : 16;
        f = f != null ? f : !a && !b("MessengerHotlikeEmoji.re").isMessengerHotlike(d) ? new (b("FBEmojiResource"))(d).getImageURL(g) : b("EmojiImageURL").getMessengerURL(d, g);
        a = e === !0 ? "_1ift _5m3a" : "_1ift _2560";
        return i.jsx(b("Image.react"), {
            alt: c,
            className: a,
            src: f
        })
    }
    function k(a, c, d) {
        var e = d === !0 ? 128 : 16
          , f = b("EmoticonEmojiList").emote2emojis[c]
          , g = f ? b("MessengerHotlikeEmoji.re").isMessengerHotlike(f) ? b("EmojiImageURL").getMessengerURL(f, e) : new (b("FBEmojiResource"))(f).getImageURL(e) : null;
        if (g != null && g !== "") {
            f = String.fromCodePoint(parseInt(f, e));
            e = d === !0 ? "_1ift _5m3a" : "_1ift _2560";
            return i.jsx(b("Image.react"), {
                alt: f,
                className: e,
                src: g
            })
        }
        d = h._("Bi\u1ec3u t\u01b0\u1ee3ng c\u1ea3m x\u00fac {emoticonName}", [h._param("emoticonName", c)]);
        return i.jsx("span", {
            "aria-label": d,
            children: a
        })
    }
    function l(a, b, c) {
        return function(d, e, f) {
            var g = function(c, d, a) {
                e(b(c, d, a))
            };
            a(String(d), g, f, c)
        }
    }
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.shouldComponentUpdate = function(a) {
            return a.text !== this.props.text
        }
        ;
        d.render = function() {
            var a = [l(b("messengerIterateEmoji"), j.bind(null, !!this.props.forceMessengerEmoji), this.props.customSize), l(b("messengerIterateEmoticons"), k, this.props.customSize)];
            return i.jsx(b("BaseTextWithDecoration.react"), babelHelpers["extends"]({}, this.props, {
                text: this.props.text,
                decorators: a
            }))
        }
        ;
        return c
    }(i.Component);
    e.exports = a;
    a.renderEmoji = j
}
), null);
__d("MessengerTextWithEntities.react", ["BaseTextWithEntities.react", "Link.react", "MessengerTextWithEmoticons.react", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function h(a) {
        return a.replace(/<3\b|&hearts;/g, "\u2665")
    }
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), i = 0; i < e; i++)
                f[i] = arguments[i];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$1 = function(a) {
                if (d.props.renderEmoticons || d.props.renderEmoji)
                    return g.jsx(b("MessengerTextWithEmoticons.react"), {
                        text: a,
                        customSize: d.props.customSize,
                        renderEmoticons: d.props.renderEmoticons,
                        renderEmoji: d.props.renderEmoji
                    });
                else
                    return h(a)
            }
            ,
            d.$2 = function(a, c) {
                if (d.props.interpolator)
                    return d.props.interpolator(a, c);
                else
                    return g.jsx(b("Link.react"), {
                        href: c.entity,
                        children: a
                    })
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.render = function() {
            return g.jsx(b("BaseTextWithEntities.react"), babelHelpers["extends"]({}, this.props, {
                aggregatedRanges: this.props.aggregatedRanges,
                imageRanges: this.props.imageRanges,
                metaRanges: this.props.metaRanges,
                rangeRenderer: this.$2,
                ranges: this.props.ranges,
                text: this.props.text,
                textRenderer: this.$1
            }))
        }
        ;
        return c
    }(g.Component);
    e.exports = a
}
), null);
__d("P2PTriggersUtils", ["P2PGKValues"], (function(a, b, c, d, e, f) {
    f.canSeeTriggers = a;
    f.getMatches = c;
    var g = /\$((\d{1,3}(,\d{3})*)|\d+)(\.\d{1,2})?(?=\s|\.\s|\,\s|$|\.$|\,$|\?|\!|\")/;
    function a(a) {
        return !b("P2PGKValues").P2PEnabled ? !1 : !0
    }
    function c(a) {
        return a.match(g)
    }
}
), null);
__d("RedditLinkMatcher", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.match = a;
    f.isMatch = b;
    var g = new RegExp("(^|\\s)(\\/?[ru]\\/\\w{1,21})(?:\\b)","i");
    function a(a) {
        a = g.exec(a);
        return a === null ? null : {
            lnk: a[2],
            idx: a.index + a[1].length
        }
    }
    function b(a) {
        return g.exec(a) !== null
    }
}
), null);
__d("RedditLinkRanges", ["RedditLinkMatcher", "UnicodeUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    f.get = a;
    var g;
    c = "https://reddit.com";
    f.REDDIT_PREFIX = c;
    function a(a, c) {
        c === void 0 && (c = 0);
        c = c;
        var d = a.substr(c)
          , e = b("RedditLinkMatcher").match(d);
        if (!e)
            return [];
        var f = e.lnk;
        e = e.idx;
        d = (g || (g = b("UnicodeUtils"))).strlen(d.substr(0, e));
        c += d;
        e = "";
        switch (f[1].toLowerCase()) {
        case "r":
            e = this.REDDIT_PREFIX + f;
            break;
        case "u":
            e = this.REDDIT_PREFIX + f;
            break;
        default:
            switch (f[0].toLowerCase()) {
            case "r":
                e = this.REDDIT_PREFIX + "/" + f;
                break;
            case "u":
                e = this.REDDIT_PREFIX + "/" + f;
                break;
            default:
                return []
            }
        }
        d = f.length;
        f = [{
            offset: c,
            length: d,
            entity: {
                url: e
            }
        }];
        return f.concat(this.get(a, c + d))
    }
}
), null);
__d("TextWithEntitiesMetadataType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        NONE: 0,
        CONCEPT: 1,
        INTENT: 2
    });
    e.exports = a
}
), null);
__d("shouldAddMRefParam", ["isFacebookURI"], (function(a, b, c, d, e, f) {
    e.exports = a;
    function a(a) {
        if (!b("isFacebookURI")(a) || a.getFragment())
            return !1;
        return /^\/events\//.test(a.getPath()) ? !0 : !1
    }
}
), null);
__d("MercuryMessageBody.react", ["cx", "fbt", "BootloadedComponent.react", "CurrentUser", "EmojiRenderer", "EmoticonEmojiList", "EmoticonsList", "JSResource", "Link.react", "LinkRanges", "MercuryIDs", "MercuryMessageRenderLocations", "MessengerFormattingUtils", "MessengerMathUtils", "MessengerSupportedEmojiUtils", "MessengerTextWithEntities.react", "P2PTriggersUtils", "React", "RedditLinkMatcher", "RedditLinkRanges", "TextWithEntities.react", "TextWithEntitiesMetadataType", "UnicodeUtils", "URI", "URLMatcher", "emptyFunction", "getURLRanges", "gkx", "ifRequired", "prop-types", "shouldAddMRefParam"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i, j, k = b("LinkRanges").module, l = b("React"), m = function() {
        m = b("emptyFunction"),
        b("ifRequired")("ChatAppActions", function(a) {
            a.setInitialDisplayDone()
        })
    };
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(c) {
            var d;
            d = a.call(this, c) || this;
            d.interpolator = function(a, c) {
                if (c.className)
                    return l.jsx("span", {
                        className: c.className,
                        children: a
                    });
                if (c.math)
                    return l.jsx(b("BootloadedComponent.react"), {
                        bootloadLoader: b("JSResource")("MessengerMath.react").__setRef("MercuryMessageBody.react"),
                        bootloadPlaceholder: l.jsx("span", {
                            children: a
                        }),
                        body: d.$4(a),
                        fallbackBody: a,
                        inline: !0,
                        stripDelimiters: !0,
                        className: "_1e4d _1e4e"
                    });
                if (c.id) {
                    var e = {};
                    !b("CurrentUser").isWorkUser() && !d.props.isFromViewer && d.props.threadCustomColor && (e.color = d.props.threadCustomColor);
                    var f = d.props.onContactSelect
                      , g = d.props.threadID ? b("MercuryIDs").getThreadFBIDFromThreadID(d.props.threadID) === c.id : !1
                      , h = new (i || (i = b("URI")))("/ajax/hovercard/user.php").setQueryData({
                        id: c.id
                    })
                      , j = b("gkx")("678279");
                    h = l.jsx(b("Link.react"), {
                        className: "_ih-" + (b("CurrentUser").isWorkUser() && c.id === b("CurrentUser").getID() ? " _1zle" : ""),
                        href: g ? "#" : c.url,
                        "data-hovercard": j ? h : null,
                        style: e,
                        onClick: f && !g ? function(a) {
                            d.$3(f, c, a)
                        }
                        : b("emptyFunction"),
                        children: a
                    });
                    !g && f && !j && (typeof a === "string" && (c.contactName = a && a.replace("@", "")),
                    h = l.jsx(b("BootloadedComponent.react"), {
                        bootloadLoader: b("JSResource")("MessengerAvatarActions.react").__setRef("MercuryMessageBody.react"),
                        bootloadPlaceholder: h,
                        avatar: h,
                        contact: c,
                        showSendMessageItem: !0,
                        onAction: d.props.onContactSelect
                    }));
                    return h
                }
                if (c.formatter) {
                    e = c.formatter;
                    g = c.recursivelyFormat ? d.renderBody(c.innerText, !0, c.innerOffset) : c.innerText;
                    return l.jsx(e, {
                        range: c,
                        children: g
                    })
                }
                if (c.entity && c.entity.url)
                    if ((i || (i = b("URI"))).isValidURI(c.entity.url)) {
                        j = new (i || (i = b("URI")))(c.entity.url.replace(/#+$/, ""));
                        b("shouldAddMRefParam")(j) && j.addQueryData({
                            __mref: "mb"
                        });
                        h = j.toString();
                        return l.jsx(b("Link.react"), {
                            href: {
                                url: h,
                                shimhash: c.entity.shimhash
                            },
                            s: c.entity.s,
                            target: "_blank",
                            children: a
                        })
                    } else
                        return a;
                if (!c.entity && c.id === void 0) {
                    e = typeof c.type === "number" ? c.type : b("TextWithEntitiesMetadataType")[c.type];
                    switch (e) {
                    case 0:
                        return l.jsx("span", {
                            className: "_2y9",
                            title: JSON.stringify(c.data),
                            children: a
                        });
                    case 1:
                        return d.renderConceptMetadata(a, c.data);
                    case 2:
                        return d.renderIntentMetadata(a, c.data);
                    default:
                        return a
                    }
                }
                return a
            }
            ;
            d.state = d.parseMessageBody(c);
            return d
        }
        var d = c.prototype;
        d.UNSAFE_componentWillReceiveProps = function(a) {
            (this.props.body !== a.body || this.props.metaRanges !== a.metaRanges || this.props.ranges !== a.ranges) && this.setState(this.parseMessageBody(a))
        }
        ;
        d.parseMessageBody = function(a) {
            var c = (a.body || "").replace(/\s+$/, "")
              , d = this.$1(a.metaRanges || []);
            d = {
                normalizedBody: c,
                isEncrypted: !1,
                isMathBlock: !1,
                isRichText: !1,
                ranges: [],
                filteredMetaRanges: d
            };
            if (c.length === 0)
                return d;
            if (c.startsWith("?OTR")) {
                d.isEncrypted = !0;
                return d
            }
            if (b("MessengerMathUtils").isMathBlock(c)) {
                d.isMathBlock = !0;
                return d
            }
            var e = a.ranges
              , f = a.metaRanges;
            f = e && e.length || 
            f && f.length || 
            b("EmoticonsList").noncapturingRegexp.test(c) || 
            b("EmojiRenderer").containsEmoji(c) || 
            b("URLMatcher").match(c) || 
            k && k.hasMatch(c) || 
            b("RedditLinkMatcher").isMatch(c) || 
            this.$2(c, a) || 
            b("MessengerSupportedEmojiUtils").containsEmoji(c) || 
            b("EmoticonEmojiList").noncapturingRegexp.test(c) || 
            b("MessengerFormattingUtils").hasMatch(c) || 
            b("MessengerMathUtils").hasInlineMath(c);
            if (!f)
                return d;
            d.isRichText = !0;
            e && e.length === 1 && e[0].className === "__in" && (e = b("getURLRanges")(c).concat(e));
            e = e || [];
            e.forEach(function(a) {
                if (a.id) {
                    var d = c.substring(0, a.offset);
                    a.offset = (j || (j = b("UnicodeUtils"))).strlen(d)
                }
            });
            e = e.concat(b("getURLRanges")(c));
            k && (e = e.concat(k.get(c)));
            e = e.concat(b("RedditLinkRanges").get(c));
            e = e.concat(b("MessengerFormattingUtils").getRanges(c));
            e = e.concat(b("MessengerMathUtils").getInlineMathRanges(c));
            d.ranges = e.filter(function(a) {
                return a != void 0
            });
            return d
        }
        ;
        d.hasFormatting = function() {
            return this.state.isRichText || this.state.isMathBlock || this.state.isEncrypted
        }
        ;
        d.$3 = function(a, b, c) {
            c.preventDefault()
        }
        ;
        d.$4 = function(a) {
            if (this.props.isFromViewer)
                return "\\color{#fff}{" + b("MessengerMathUtils").getMathBlockInner(a) + "}";
            else
                return b("MessengerMathUtils").getMathBlockInner(a)
        }
        ;
        d.renderConceptMetadata = function(a, b) {
            if (!b)
                return a;
            return b.intent_name || b.name ? this.renderIntentMetadata(a, b) : a
        }
        ;
        d.renderIntentMetadata = function(a, c) {
            if (!c)
                return a;
            var d = c.intent_name || c.name;
            switch (d) {
            case "request_time":
                return l.jsx(b("BootloadedComponent.react"), {
                    bootloadLoader: b("JSResource")("ServicesVerticalRequestTimeTriggers.react").__setRef("MercuryMessageBody.react"),
                    bootloadPlaceholder: l.jsx("span", {
                        children: a
                    }),
                    data: c,
                    text: a,
                    threadID: this.props.threadID
                });
            default:
                return a
            }
        }
        ;
        d.renderBody = function(a, c, d) {
            c === void 0 && (c = !1);
            d === void 0 && (d = 0);
            var e = this.state
              , f = e.isRichText
              , g = e.ranges;
            e = e.filteredMetaRanges;
            var h = (j || (j = b("UnicodeUtils"))).strlen(a);
            if (!f)
                return l.jsx("span", {
                    className: this.props.className,
                    children: a
                });
            c && (g = g.filter(function(a) {
                return a.offset >= d && a.offset + a.length <= d + h
            }).map(function(a) {
                return babelHelpers["extends"]({}, a, {
                    offset: a.offset - d
                })
            }),
            e = e.filter(function(a) {
                return a.offset >= d && a.offset + a.length <= d + h
            }).map(function(a) {
                return babelHelpers["extends"]({}, a, {
                    offset: a.offset - d
                })
            }));
            f = {
                className: this.props.className,
                interpolator: this.interpolator,
                metaRanges: e,
                ranges: g,
                renderEmoji: !0,
                renderEmoticons: !0,
                text: a
            };
            if (this.$2(a)) {
                c = l.jsx(b("TextWithEntities.react"), babelHelpers["extends"]({}, f));
                return l.jsx(b("BootloadedComponent.react"), babelHelpers["extends"]({
                    bootloadPlaceholder: c,
                    bootloadLoader: b("JSResource")("TextWithEntitiesAndP2P.react").__setRef("MercuryMessageBody.react")
                }, f, {
                    getMessengerEmote: this.$5,
                    isSupportedEmoji: this.$6,
                    threadID: this.props.threadID
                }))
            }
            e = l.jsx(b("MessengerTextWithEntities.react"), babelHelpers["extends"]({}, f));
            return e
        }
        ;
        d.render = function() {
            var a = this.state
              , c = a.normalizedBody
              , d = a.isEncrypted;
            a = a.isMathBlock;
            if (c.length === 0)
                return null;
            m();
            if (this.props.plainText)
                return l.jsx("span", {
                    children: c
                });
            else if (d)
                return l.jsx("span", {
                    className: "_89h",
                    children: h._("[tin nh\u1eafn \u0111\u00e3 m\u00e3 h\u00f3a]")
                });
            else if (a)
                return l.jsx(b("BootloadedComponent.react"), {
                    bootloadLoader: b("JSResource")("MessengerMath.react").__setRef("MercuryMessageBody.react"),
                    bootloadPlaceholder: l.jsx("div", {
                        children: c
                    }),
                    body: this.$4(c),
                    fallbackBody: c,
                    stripDelimiters: !0,
                    className: "_1e4d"
                });
            else
                return this.renderBody(c)
        }
        ;
        d.$6 = function(a) {
            return b("MessengerSupportedEmojiUtils").isSupportedEmojiKey(a)
        }
        ;
        d.$5 = function(a) {
            a = b("EmoticonEmojiList").emote2emojis[a];
            return b("MessengerSupportedEmojiUtils").isSupportedEmojiKey(a) ? a : null
        }
        ;
        d.$1 = function(a) {
            var b = a.filter(function(a) {
                return a.data && (a.data.intent_name === "create_event" || a.data.name === "create_event")
            });
            return b.length !== 0 ? b : a
        }
        ;
        d.$2 = function(a, c) {
            c === void 0 && (c = this.props);
            return !!(c.threadID && b("P2PTriggersUtils").canSeeTriggers(c.threadID) && b("P2PTriggersUtils").getMatches(a))
        }
        ;
        return c
    }(l.PureComponent);
    e.exports = a;
    a.propTypes = {
        body: (c = b("prop-types")).string,
        customLike: c.object,
        isFromViewer: c.bool,
        metaRanges: c.array,
        ranges: c.array,
        threadCustomColor: c.string,
        threadID: c.string,
        onContactSelect: c.func,
        renderLocation: c.oneOf([b("MercuryMessageRenderLocations").CHAT, b("MercuryMessageRenderLocations").MESSENGER, b("MercuryMessageRenderLocations").PAGES])
    }
}
), null);
__d("MercuryErrorInfo", ["fbt", "MessengerMessage.bs"], (function(a, b, c, d, e, f, g) {
    f.getMessage = a;
    f.isConnectionError = h;
    f.isTransient = i;
    f.isPermanent = c;
    f.hasErrorStatus = d;
    function a(a) {
        var b = "";
        h(a) ? (b = g._("Kh\u00f4ng th\u1ec3 g\u1eedi tin nh\u1eafn n\u00e0y.").toString(),
        i(a) && (b = g._("{message} H\u00e3y ki\u1ec3m tra k\u1ebft n\u1ed1i internet c\u1ee7a b\u1ea1n v\u00e0 nh\u1ea5p \u0111\u1ec3 th\u1eed l\u1ea1i.", [g._param("message", b)]).toString())) : (a && a.description ? b = a.description : b = g._("Tin nh\u1eafn n\u00e0y kh\u00f4ng g\u1eedi \u0111\u01b0\u1ee3c.").toString(),
        i(a) && (b = g._("{message} Nh\u1ea5p \u0111\u1ec3 g\u1eedi l\u1ea1i.", [g._param("message", b)]).toString()));
        return b
    }
    function h(a) {
        return a && a.type == 2 ? a.code === 1001 || a.code === 1004 || a.code === 1006 : !1
    }
    function i(a) {
        return a && a.is_transient
    }
    function c(a) {
        return a ? !this.isTransient(a) : !1
    }
    function d(a) {
        return b("MessengerMessage.bs").hasError(a)
    }
}
), null);
__d("MercurySendMessageFields", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        AUTO_RETRY_CNT: "auto_retry_cnt",
        MANUAL_RETRY_CNT: "manual_retry_cnt"
    });
    e.exports = a
}
), null);
__d("MercuryMessageObject", ["BanzaiODS", "MercuryIDs", "MercuryLocalIDs", "MercuryMessageClientState", "MercurySendMessageFields", "MercurySingletonProvider", "MessengerObjectAssociationType", "MessengerState.bs", "RepliedToMessageStatusForGraphQL", "SiteData", "md5"], (function(a, b, c, d, e, f) {
    a = function() {
        a.getForFBID = function(a) {
            return i.getForFBID(a)
        }
        ;
        a.get = function() {
            return i.get()
        }
        ;
        function a(a) {
            this.$1 = a
        }
        var c = a.prototype;
        c.constructHotLikeObject = function(a, c, d, e, f) {
            c = g(this.$1, "ma-type:user-generated-message", c, d);
            d = {
                body: a,
                has_attachment: !1,
                html_body: !1,
                attachments: [],
                specific_to_list: [],
                participants_to_hash: [],
                creator_info: void 0,
                tags: e || [],
                signatureID: f,
                ui_push_phase: b("SiteData").push_phase
            };
            return babelHelpers["extends"]({}, c, d)
        }
        ;
        c.constructPhotoMessageObject = function(a, c, d, e, f) {
            c = g(this.$1, "ma-type:user-generated-message", c, d, a);
            d = {
                has_attachment: !1,
                html_body: !1,
                attachments: [],
                specific_to_list: [],
                participants_to_hash: [],
                creator_info: void 0,
                tags: e || [],
                signatureID: f,
                ui_push_phase: b("SiteData").push_phase
            };
            return babelHelpers["extends"]({}, c, d)
        }
        ;
        c.constructTextMessageObject = function(a, c, d, e, f, h, i, j, k, l) {
            h = g(this.$1, "ma-type:user-generated-message", h, i, d);
            i = f.params && f.type;
            d = c.length > 0;
            a = {
                body: typeof a === "string" ? a.replace(/^\s+/, "").replace(/\s+$/, "") : "",
                has_attachment: i || d,
                raw_attachments: d ? c : void 0,
                shareable_attachment: i ? {
                    share_params: f.params.get("data"),
                    share_type: f.type
                } : void 0,
                profile_ranges: e,
                profile_xmd: e,
                verse_group_role_xmd: l,
                mib_direct_message_data: null,
                html_body: !1,
                attachments: [],
                specific_to_list: [],
                participants_to_hash: [],
                creator_info: void 0,
                tags: j || [],
                signatureID: k,
                ui_push_phase: b("SiteData").push_phase
            };
            return babelHelpers["extends"]({}, h, a)
        }
        ;
        c.constructUserGeneratedMessageObject = function(a, b, c, d, e, f, h) {
            b = g(this.$1, "ma-type:user-generated-message", b, c, h);
            c = {
                body: typeof a === "string" ? a.replace(/^\s+/, "").replace(/\s+$/, "") : "",
                has_attachment: !1,
                html_body: !1,
                attachments: [],
                specific_to_list: d || [],
                participants_to_hash: [],
                creator_info: e,
                tags: f || []
            };
            return babelHelpers["extends"]({}, b, c)
        }
        ;
        c.constructStickerMessageObject = function(a, c, d, e, f, h) {
            c = g(this.$1, "ma-type:user-generated-message", c, d, h);
            d = {
                has_attachment: !0,
                html_body: !1,
                attachments: [],
                sticker_id: a,
                specific_to_list: [],
                participants_to_hash: [],
                tags: e || [],
                signatureID: f,
                ui_push_phase: b("SiteData").push_phase
            };
            return babelHelpers["extends"]({}, c, d)
        }
        ;
        c.constructAttachmentMessageObject = function(a, b, c) {
            a = g(this.$1, "ma-type:user-generated-message", a, b, c);
            b = {
                attachments: [],
                specific_to_list: [],
                participants_to_hash: []
            };
            return babelHelpers["extends"]({}, a, b, {
                tags: []
            })
        }
        ;
        c.constructLogMessageObject = function(a, b, c, d) {
            a = g(this.$1, "ma-type:log-message", a, b);
            b = {
                log_message_type: c,
                log_message_data: d,
                ephemeral_ttl_mode: d && d.untypedData && d.untypedData.ttl
            };
            return babelHelpers["extends"]({}, a, b)
        }
        ;
        c.constructCTAConfirmationMessageObject = function(a, b, c, d, e, f) {
            a = this.constructUserGeneratedMessageObject(a, b, c, null, null, e, null);
            b = d ? {
                quick_replies: d,
                ignore_for_webhook: !1
            } : {
                ignore_for_webhook: !0
            };
            f && (b.postback_data = JSON.stringify(f));
            return babelHelpers["extends"]({}, a, {
                platform_xmd: JSON.stringify(b)
            })
        }
        ;
        c.normalizeNewMessage = function(a) {
            a.status === void 0 && (a.status = 0);
            a.offline_threading_id = a.offline_threading_id || b("MercuryLocalIDs").generateOfflineThreadingID(a.timestamp);
            a.offline_threading_id || b("BanzaiODS").bumpEntityKey(3303, "chat.web", "invalid_otid_generated");
            a.message_id = a.message_id || a.offline_threading_id;
            var c = b("MercuryIDs").getParticipantIDFromUserID(this.$1);
            a.specific_to_list = a.specific_to_list || [];
            a.participants_to_hash = a.participants_to_hash || [];
            a.specific_to_list.length && a.specific_to_list.indexOf(c) === -1 && a.specific_to_list.push(c);
            a.participants_to_hash.length && a.participants_to_hash.indexOf(c) === -1 && a.participants_to_hash.push(c);
            var d = !1;
            if (!a.thread_id)
                a.thread_id = "root:" + a.offline_threading_id;
            else {
                var e, f = b("MessengerState.bs").getThreadMetaNow(this.$1, a.thread_id);
                f && f.ephemeral_ttl_mode !== null && a.ephemeral_ttl_mode === void 0 && (a.ephemeral_ttl_mode = f.ephemeral_ttl_mode);
                ((e = f) != null ? (e = e.associated_object) != null ? e.name : e : e) && ((e = f) != null ? e.object_association_type : e) === b("MessengerObjectAssociationType").GENERAL_CHAT && (d = !0)
            }
            if (!d)
                if (a.specific_to_list.length == 1)
                    a.thread_id = "user:" + this.$1;
                else if (a.specific_to_list.length == 2) {
                    f = a.specific_to_list[0] == c ? a.specific_to_list[1] : a.specific_to_list[0];
                    a.thread_id = b("MercuryIDs").getThreadIDFromParticipantID(f)
                }
            if (!a.specific_to_list.length) {
                e = b("MercuryIDs").tokenize(a.thread_id);
                d = e.type;
                f = e.value;
                d == "user" && (a.specific_to_list = ["fbid:" + f, c])
            }
            a.to_list_md5 = this.sortAndHash(a.participants_to_hash);
            a[b("MercurySendMessageFields").MANUAL_RETRY_CNT] || (a[b("MercurySendMessageFields").MANUAL_RETRY_CNT] = 0)
        }
        ;
        c.sortAndHash = function(a) {
            if (!a || a.length === 0)
                return null;
            a = a.map(function(a) {
                return b("MercuryIDs").getUserIDFromParticipantID(a)
            });
            return a.some(function(a) {
                return a == null
            }) ? null : b("md5")(a.sort(function(a, b) {
                if (a == null || b == null)
                    throw new Error("invalid participant id in to_list_md5 creation");
                if (a.length < b.length)
                    return -1;
                return a.length > b.length ? 1 : a.localeCompare(b)
            }).join(":"))
        }
        ;
        c.normalizeResendMessage = function(a) {
            a.status = 7,
            a.timestamp = Date.now(),
            a[b("MercurySendMessageFields").MANUAL_RETRY_CNT] += 1
        }
        ;
        c.normalizeAddAttachmentPlaceholder = function(a, c, d) {
            d.preview_attachments.length > 0 && (a.has_attachment = !0,
            a.preview_attachments = d.preview_attachments),
            a.client_state = b("MercuryMessageClientState").DO_NOT_SEND_TO_SERVER,
            a.status = 7,
            a.upload_id = c
        }
        ;
        return a
    }();
    e.exports = a;
    function g(a, c, d, e, f) {
        var g = h(d) ? ["source:chat"] : []
          , i = Date.now();
        c = {
            action_type: c,
            thread_id: e,
            author: b("MercuryIDs").getParticipantIDFromUserID(a),
            author_email: null,
            timestamp: i,
            is_unread: !1,
            is_filtered_content: !1,
            is_filtered_content_bh: !1,
            is_filtered_content_account: !1,
            is_filtered_content_quasar: !1,
            is_filtered_content_invalid_app: !1,
            is_spoof_warning: !1,
            source: d,
            source_tags: g,
            replied_to_message: f ? {
                message: f,
                status: b("RepliedToMessageStatusForGraphQL").VALID
            } : void 0
        };
        return c
    }
    function h(a) {
        switch (a) {
        case "source:chat:web":
        case "source:chat:jabber":
        case "source:chat:iphone":
        case "source:chat:meebo":
        case "source:chat:orca":
        case "source:chat:test":
        case "source:chat":
            return !0;
        default:
            return !1
        }
    }
    var i = new (b("MercurySingletonProvider"))(a)
}
), null);
__d("MercuryMessageActions", ["AsyncRequest", "Bootloader", "CurrentUser", "MercuryDispatcher", "MercuryMessageObject", "MercuryServerRequests", "MercurySingletonMixin", "MessengerState.bs", "WorkChatSavedMessagesOnHeaderMenuNux"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            this.$1 = a,
            this.$2 = b("MercuryMessageObject").getForFBID(this.$1),
            this.__serverRequests = b("MercuryServerRequests").getForFBID(this.$1),
            this.__dispatcher = b("MercuryDispatcher").getForFBID(this.$1)
        }
        var c = a.prototype;
        c.send = function(a, b, c) {
            this.$2.normalizeNewMessage(a),
            this.__dispatcher.handleUpdate(this.__constructClientSingleMessagePayload(babelHelpers["extends"]({}, a), "client_send_message")),
            this.__serverRequests.sendNewMessage(a, c),
            b != null && b(a.thread_id)
        }
        ;
        c.resend = function(a, b) {
            a = babelHelpers["extends"]({}, a);
            this.$2.normalizeResendMessage(a);
            this.send(a, void 0, b)
        }
        ;
        c.addAttachmentPlaceholder = function(a, b, c) {
            this.$2.normalizeAddAttachmentPlaceholder(a, b, c),
            this.$2.normalizeNewMessage(a),
            this.__dispatcher.handleUpdate(this.__constructClientSingleMessagePayload(babelHelpers["extends"]({}, a), "client_send_message"))
        }
        ;
        c.cancelAttachmentPlaceholder = function(a, b) {
            this.__dispatcher.handleUpdate(this.__constructClientSingleMessagePayload({
                upload_id: a,
                upload_data: b,
                action_type: "ma-type:cancel-attachment-placeholder"
            }, "client_send_message"))
        }
        ;
        c.confirmAttachmentPlaceholder = function(a, b) {
            this.__dispatcher.handleUpdate(this.__constructClientSingleMessagePayload({
                upload_id: a,
                upload_data: b,
                action_type: "ma-type:confirm-attachment-placeholder"
            }, "client_send_message"))
        }
        ;
        c["delete"] = function(a, b, c) {
            this.__dispatcher.handleUpdate(this.$3(a, b, "ma-type:delete-messages", c || "client_delete_messages"))
        }
        ;
        c.changeSaveStatus = function(a, c, d) {
            var e = b("MessengerState.bs").getServerMessageID(b("CurrentUser").getID(), a.message_id);
            this.__dispatcher.handleUpdate(this.__constructClientSingleMessagePayload({
                thread_id: a.thread_id,
                messageId: e,
                tags_to_add: c ? ["message:save"] : [],
                tags_to_delete: c ? [] : ["message:save"],
                action_type: "ma-type:mutate_tags"
            }, d || "client_update_saved_message_status"));
            b("Bootloader").loadModules(["XMessengerDotComSaveController", "SavedStateActions", "CollectionsDisplaySurface", "CollectionCurationMechanisms", "WorkChatSavedMessagesTypedLogger", "SavedMessagesEvent", "useWorkGalahadEventEmitter"], function(d, f, g, h, i, j, k) {
                new (b("AsyncRequest"))().setURI(d.getURIBuilder().getURI()).setData({
                    action: c ? f.SAVE : f.UNSAVE,
                    surface: g.MESSENGER_DOT_COM_MESSAGE,
                    mechanism: h.RIGHT_CLICK,
                    message_id: e
                }).setHandler(function() {
                    if (c && b("WorkChatSavedMessagesOnHeaderMenuNux").shouldShowNux) {
                        var d = k(["toggleNavHeaderMenu", "showSavedMessageNux"]);
                        d[0];
                        d = d[1];
                        d()
                    }
                    new i().setEvent(c ? j.SAVE : j.UNSAVE).setThreadID(a.thread_id).setMessageID(e).log()
                }).send()
            }, "MercuryMessageActions")
        }
        ;
        c.__constructClientSingleMessagePayload = function(a, b) {
            return {
                actions: [a],
                from_client: !0,
                payload_source: b
            }
        }
        ;
        c.$3 = function(a, b, c, d) {
            return {
                actions: [{
                    action_type: c,
                    thread_id: a,
                    message_ids: b
                }],
                from_client: !0,
                payload_source: d
            }
        }
        ;
        return a
    }();
    c = Object.assign(a, b("MercurySingletonMixin"), {
        _instances: {}
    });
    d = c;
    e.exports = d
}
), null);
__d("MercuryMessageError.react", ["cx", "CurrentUser", "Link.react", "MercuryErrorInfo", "MercuryMessageActions", "React", "ServerHTML.react", "joinClasses", "prop-types"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.messageResend = function(a) {
                a.stopPropagation();
                a = d.props.message;
                a = a.error_data;
                b("MercuryErrorInfo").isTransient(a) && b("MercuryMessageActions").getForFBID(d.props.authorFBID).resend(d.props.message)
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props.message
              , c = a.error_data;
            return h.jsxs(b("Link.react"), babelHelpers["extends"]({}, this.props, {
                href: "#",
                className: b("joinClasses")(this.props.className, this.$1(a)),
                tabIndex: b("MercuryErrorInfo").isTransient(c) ? 0 : null,
                onClick: this.messageResend,
                children: [h.jsx("i", {
                    className: "_2fs1"
                }), h.jsx(b("ServerHTML.react"), {
                    className: "_61ag",
                    blob: this.$2(a)
                })]
            }))
        }
        ;
        d.$1 = function(a) {
            if (b("MercuryErrorInfo").hasErrorStatus(a))
                return "_2fs2 _2fs3" + (b("MercuryErrorInfo").isTransient(a.error_data) ? " _2fs4" : "") + (b("MercuryErrorInfo").isPermanent(a.error_data) ? " _2fs5" : "");
            else
                return "_2fs6 _2fs2"
        }
        ;
        d.$2 = function(a) {
            var c = ""
              , d = a.error_data;
            if (b("MercuryErrorInfo").hasErrorStatus(a)) {
                a = b("MercuryErrorInfo").getMessage(d);
                a && (c = a)
            }
            return c
        }
        ;
        return c
    }(h.Component);
    e.exports = a;
    a.propTypes = {
        authorFBID: b("prop-types").string,
        message: b("prop-types").object.isRequired
    };
    a.defaultProps = {
        authorFBID: b("CurrentUser").getID()
    }
}
), null);
__d("EmojiOnlyMessage.react", ["cx", "EmojiImageURL", "EmojiLikeConstants", "FBEmojiResource", "Image.react", "MessengerHotlikeEmoji.bs", "React", "prop-types"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = "_1ift _1ifu"
              , c = 0
              , d = this.props.contents.map(function(d) {
                c++;
                var e = d.emojiKey;
                if (e) {
                    e = b("MessengerHotlikeEmoji.bs").isMessengerHotlike(e) ? b("EmojiImageURL").getMessengerURL(e, b("EmojiLikeConstants").sizeMap.dp32) : new (b("FBEmojiResource"))(e).getImageURL(b("EmojiLikeConstants").sizeMap.dp32);
                    return h.jsx(b("Image.react"), {
                        alt: d.text,
                        className: a,
                        src: e
                    }, c)
                } else
                    return h.jsx("span", {
                        children: d.text
                    }, c)
            });
            return h.jsx("div", {
                tabIndex: "0",
                children: d
            })
        }
        ;
        return c
    }(h.Component);
    e.exports = a;
    a.propTypes = {
        contents: (c = b("prop-types")).arrayOf(c.shape({
            emojiKey: c.string,
            text: c.string.isRequired
        })).isRequired
    }
}
), null);
__d("MercuryAttachmentLayoutTypeHelper", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.isAdminType = a;
    function a(a) {
        var b;
        return (a == null ? void 0 : (b = a.xma_layout_info) == null ? void 0 : b.layout_type) === "ADMIN" || (a == null ? void 0 : (b = a.share) == null ? void 0 : (a = b.xma_layout_info) == null ? void 0 : a.layout_type) === "ADMIN"
    }
}
), null);
__d("MessengerBotComposerWebGraphQLQuery", ["WebGraphQLQueryBase"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        b.__getDocID = function() {
            return "1193572474099061"
        }
        ;
        b.getQueryID = function() {
            return "1132183563559860"
        }
        ;
        return b
    }(b("WebGraphQLQueryBase"))
}
), null);
__d("XMessengerBotsMenuController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/messenger/commerce/bots/menu/", {
        page_id: {
            type: "String",
            required: !0
        },
        should_flatten: {
            type: "Bool",
            defaultValue: !1
        }
    })
}
), null);
__d("MessengerBotMenuDataFetcher", ["AsyncRequest", "Cache", "MessengerBotComposerWebGraphQLQuery", "XMessengerBotsMenuController"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = new (b("Cache"))(),
            this.$2 = new (b("Cache"))()
        }
        var c = a.prototype;
        c.setMenuItemsCache = function(a, b) {
            this.$1.set(a, b)
        }
        ;
        c.getMenuItems = function(a, c, d) {
            var e = this;
            if (this.$1.has(a)) {
                c(this.$1.get(a));
                return
            }
            var f = b("XMessengerBotsMenuController").getURIBuilder().setString("page_id", a).getURI();
            new (b("AsyncRequest"))().setURI(f).setHandler(function(b) {
                b = b.payload.menu;
                e.$1.set(a, b);
                c(b)
            }).setErrorHandler(function(a) {
                d()
            }).send()
        }
        ;
        c.getHasPageSetting = function(a, c, d, e) {
            var f = this;
            if (!this.$2.has(a)) {
                var g = b("MessengerBotComposerWebGraphQLQuery").getURI({
                    node_id: a
                });
                new (b("AsyncRequest"))().setURI(g).setHandler(function(b) {
                    b = b.payload.data.node;
                    b = b && b.commerce_page_settings || [];
                    f.$2.set(a, b);
                    c(b.indexOf(e) !== -1)
                }).setErrorHandler(function(b) {
                    f.$2.set(a, []),
                    d()
                }).setAllowCrossPageTransition(!0).send()
            }
            g = this.$2.get(a) || [];
            c(g.indexOf(e) !== -1);
            return g.indexOf(e) !== -1
        }
        ;
        return a
    }();
    c = new a();
    e.exports = c
}
), null);
__d("isMessengerMessageRemoved", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        return a.removed_timestamp !== null && a.removed_timestamp !== void 0 && a.removed_timestamp !== 0 || a.attachments != null && a.attachments.length > 0 && !!a.attachments[0].share && !!a.attachments[0].share.style_list && a.attachments[0].share.style_list.length > 0 && a.attachments[0].share.style_list[0] === "globally_deleted_message_placeholder"
    }
}
), null);
__d("MessageReplyPermissions", ["MercuryAttachmentLayoutTypeHelper", "MercuryConfig", "MessagingTag", "MessengerBotMenuDataFetcher", "MNCommercePageSetting", "RepliedToMessageStatusForGraphQL", "emptyFunction", "getPageIDFromThreadID", "isMessengerMessageRemoved"], (function(a, b, c, d, e, f) {
    "use strict";
    f.canReplyToMessage = a;
    f.bubbleContainsRepliedToMessage = c;
    f.isRepliableMessage = d;
    f._canRenderM3RedesignReply = e;
    function a(a) {
        var c = b("getPageIDFromThreadID")(a.thread_id);
        if (c != null) {
            c = b("MessengerBotMenuDataFetcher").getHasPageSetting(c, b("emptyFunction"), b("emptyFunction"), b("MNCommercePageSetting").COMPOSER_INPUT_DISABLED);
            if (c)
                return !1
        }
        if (a.folder === b("MessagingTag").PENDING || a.folder === b("MessagingTag").OTHER)
            return !1;
        return b("isMessengerMessageRemoved")(a) ? !1 : this.isRepliableMessage(a) || this._canRenderM3RedesignReply(a)
    }
    function c(a, b) {
        return !b && this._canRenderM3RedesignReply(a)
    }
    function d(a) {
        var c, d = a.log_message_type === "log:video-call" || a.log_message_type === "log:phone-call";
        if (d)
            return !1;
        d = a.attachments && a.attachments.length > 0 ? a.attachments[0] : null;
        if (b("MercuryAttachmentLayoutTypeHelper").isAdminType(d))
            return !1;
        if (d !== null && ((c = d.share) == null ? void 0 : c.style_list[0]) === "rtc_call_log")
            return !1;
        c = d == null ? void 0 : d.attach_type;
        return !!a.body || c === "photo" || c === "video" || c === "sticker" || c === "third_party_sticker" || c === "animated_image" || a.attachments && a.attachments.length >= 1
    }
    function e(a) {
        if (!b("MercuryConfig").SM3BD)
            return !1;
        if (a.status !== b("RepliedToMessageStatusForGraphQL").VALID)
            return !0;
        a = a.message;
        var c = a.attachments && a.attachments.length === 1 && a.attachments[0].attach_type;
        return !!a.body || b("MercuryConfig").RTPE && c === "photo" || b("MercuryConfig").RTVE && c === "video" || b("MercuryConfig").RTSE && (c === "sticker" || c === "third_party_sticker") || b("MercuryConfig").RTGE && c === "animated_image" || b("MercuryConfig").RTOAE && a.attachments && a.attachments.length >= 1
    }
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
__d("AutoFocusableLink.react", ["Link.react", "ReactDOM"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            this.props.autoFocus && b("ReactDOM").findDOMNode(this).focus()
        }
        ;
        return c
    }(b("Link.react"));
    e.exports = a
}
), null);
__d("MercuryTimestamp", ["fbt", "formatDate"], (function(a, b, c, d, e, f, g) {
    a = 864e5;
    var h = 6 * a
      , i = {
        getFormatedTimestamp: function(a) {
            var b = a / 1e3;
            return i.getFormattedTimestampByBucket(b, this.getTimeBucket(a))
        },
        getAbsoluteTimestamp: function(a) {
            if (a == null)
                return null;
            else {
                a = i.getFormatedTimestamp(a);
                return a.absolute
            }
        },
        getRelativeTimestamp: function(a) {
            a = i.getFormatedTimestamp(a);
            return a.relative
        },
        getFormattedTimestampByBucket: function(a, c) {
            switch (c) {
            case 0:
                return {
                    absolute: g._("H\u00f4m nay").toString(),
                    relative: b("formatDate")(a, "g:ia")
                };
            case 1:
                return {
                    absolute: b("formatDate")(a, "l"),
                    relative: b("formatDate")(a, "D")
                };
            case 3:
                return {
                    absolute: b("formatDate")(a, "F j"),
                    relative: b("formatDate")(a, "M j")
                };
            default:
                return {
                    absolute: b("formatDate")(a, "F j, Y"),
                    relative: b("formatDate")(a, "n/j/y")
                }
            }
        },
        getTimeBucket: function(a) {
            a = new Date(a);
            var b = new Date();
            b = new Date(b.getFullYear(),b.getMonth(),b.getDate());
            if (b < a)
                return 0;
            else if (b - h < a)
                return 1;
            else if (b.getFullYear() === a.getFullYear())
                return 3;
            else
                return 4
        },
        getPreciseTimestamp: function(a) {
            return b("formatDate")(new Date(a), i.getPreciseFormat(a))
        },
        getPreciseFormat: function(a) {
            a = i.getTimeBucket(a);
            switch (a) {
            case 0:
                return "g:ia";
            case 1:
                return "l g:ia";
            case 3:
                return "F jS, g:ia";
            case 4:
            default:
                return "F j, Y g:i a"
            }
        }
    };
    e.exports = i
}
), null);
__d("FantaMessageActions", ["Bootloader", "CurrentUser", "FantaDispatcher", "MercuryIDs", "MercuryLocalIDs", "MercuryViewer", "MessengerState.bs", "MWCount.re", "emptyFunction", "ifRequired", "keyMirror", "requireWeak", "setImmediate"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;
    b("requireWeak")("FantaAppStore", function(a) {
        return g = a
    });
    var h = b("keyMirror")({
        ADD_GROUP_PARTICIPANTS: null,
        ADD_GROUP_PARTICIPANTS_AS_OPEN_TAB: null,
        ADD_GROUP_PARTICIPANTS_AS_REPLACE_TAB: null,
        CANCEL_FILE_UPLOAD: null,
        CANCEL_REPLY_TO_MESSAGE: null,
        COMPOSER_TEXT_UPDATE: null,
        LINK_PREVIEW: null,
        LOADED_SHARE_DATA: null,
        LOADING_SHARE_DATA: null,
        PREPARE_FILES_FOR_SEND: null,
        RECEIVED_NEW_MESSAGE: null,
        REMOVE_SHARE_PREVIEW: null,
        REPLY_TO_MESSAGE: null,
        SEND_GIF: null,
        SEND_HOT_LIKE: null,
        SEND_MESSAGE: null,
        SEND_PHOTO: null,
        SEND_STICKER: null,
        SET_NEW_GROUP_NAME_LOCALLY: null,
        UPDATE_GROUP_NAME: null,
        UPDATE_USER_INPUT_REQUESTED: null
    });
    function i(a) {
        var c = b("MercuryViewer").getID();
        if (!a.length)
            return null;
        a = a.filter(function(a) {
            return a !== c
        });
        var d;
        if (a.length === 0)
            return null;
        else
            a.length === 1 ? d = b("MercuryIDs").getThreadIDFromParticipantID(a[0]) : (d = b("MercuryLocalIDs").generateThreadID(),
            a.unshift(c),
            b("MessengerState.bs").createNewLocalThread(b("CurrentUser").getID(), d, a));
        return d
    }
    a = {
        Types: h,
        prepareFilesForSend: function(a, c, d, e) {
            var f = {
                type: h.PREPARE_FILES_FOR_SEND,
                tabID: a,
                files: c,
                composer: d
            };
            this.dispatchOrBootloadUploader(function() {
                b("FantaDispatcher").dispatch(f),
                e && e()
            })
        },
        replyToMessage: function(a, c) {
            b("FantaDispatcher").dispatch({
                type: h.REPLY_TO_MESSAGE,
                threadID: c,
                message: a
            })
        },
        cancelReplyToMessage: function(a) {
            b("FantaDispatcher").dispatch({
                type: h.CANCEL_REPLY_TO_MESSAGE,
                threadID: a
            })
        },
        cancelFileUpload: function(a, c) {
            var d = {
                type: h.CANCEL_FILE_UPLOAD,
                tabID: a,
                uploadID: c
            };
            this.dispatchOrBootloadUploader(function() {
                b("FantaDispatcher").dispatch(d)
            })
        },
        linkPreview: function(a, c) {
            this.dispatchOrBootloadSharePreview(function() {
                b("FantaDispatcher").dispatch({
                    type: h.LINK_PREVIEW,
                    tabID: a,
                    uri: c
                })
            })
        },
        loadedShareData: function(a, c, d) {
            this.dispatchOrBootloadSharePreview(function() {
                b("FantaDispatcher").dispatch({
                    type: h.LOADED_SHARE_DATA,
                    tabID: a,
                    attachmentData: c,
                    composer: d
                })
            })
        },
        loadingShareData: function(a, c) {
            this.dispatchOrBootloadSharePreview(function() {
                b("FantaDispatcher").dispatch({
                    type: h.LOADING_SHARE_DATA,
                    composer: c,
                    tabID: a
                })
            })
        },
        removeSharePreview: function(a, c) {
            this.dispatchOrBootloadSharePreview(function() {
                b("FantaDispatcher").dispatch({
                    type: h.REMOVE_SHARE_PREVIEW,
                    tabID: a,
                    composer: c
                })
            })
        },
        receivedNewMessage: function(a, c) {
            b("MWCount.re").Blue.NewMessage.lift(),
            b("FantaDispatcher").dispatch({
                type: h.RECEIVED_NEW_MESSAGE,
                tabID: a,
                message: c
            })
        },
        updateGroupName: function(a, c) {
            this.dispatchOrBootloadSendMessages(function() {
                b("FantaDispatcher").dispatch({
                    type: h.UPDATE_GROUP_NAME,
                    threadID: a,
                    newName: c
                })
            })
        },
        setNewGroupNameLocally: function(a, c) {
            this.dispatchOrBootloadSendMessages(function() {
                b("FantaDispatcher").dispatch({
                    type: h.SET_NEW_GROUP_NAME_LOCALLY,
                    threadID: a,
                    newName: c
                })
            })
        },
        addParticipants: function(a, c) {
            var d = this;
            b("ifRequired")("FantaAppStore", function(e) {
                e = e.getState().mercury.tabContents.get(a);
                if (!e)
                    return;
                var f = e.thread;
                e = e.typeahead;
                if (!e || !f)
                    return;
                var h = b("MessengerState.bs").isEmptyLocalThread(b("CurrentUser").getID(), a);
                if (f.is_canonical_user || h) {
                    h = e.getSelectedParticipantIDs();
                    e = f.participants;
                    e = i(e.concat(h));
                    e ? f.is_canonical_user ? d.addGroupParticipantsAsOpenTab(e, a, c) : d.addGroupParticipantsAsReplaceTab(e, a, c) : d.addGroupParticipant(a, c)
                } else
                    d.addGroupParticipant(a, c)
            })
        },
        addGroupParticipant: function(a, c) {
            this.dispatchOrBootloadSendMessages(function() {
                b("FantaDispatcher").dispatch({
                    type: h.ADD_GROUP_PARTICIPANTS,
                    threadID: a,
                    onSendSuccess: c
                })
            })
        },
        addGroupParticipantsAsOpenTab: function(a, c, d) {
            this.dispatchOrBootloadSendMessages(function() {
                b("FantaDispatcher").dispatch({
                    type: h.ADD_GROUP_PARTICIPANTS_AS_OPEN_TAB,
                    fromTabID: c,
                    onSendSuccess: d,
                    tabID: a
                })
            })
        },
        addGroupParticipantsAsReplaceTab: function(a, c, d) {
            this.dispatchOrBootloadSendMessages(function() {
                b("FantaDispatcher").dispatch({
                    type: h.ADD_GROUP_PARTICIPANTS_AS_REPLACE_TAB,
                    newTabID: a,
                    onSendSuccess: d,
                    tabID: c
                })
            })
        },
        sendMessage: function(a, c, d, e) {
            this.dispatchOrBootloadSendMessages(function() {
                var f = {
                    type: h.SEND_MESSAGE,
                    threadID: a,
                    message: c,
                    composer: d,
                    onSendSuccess: e
                };
                b("FantaDispatcher").dispatch(f)
            })
        },
        sendPhoto: function(a, c, d) {
            this.dispatchOrBootloadSendMessages(function() {
                var e = {
                    type: h.SEND_PHOTO,
                    clearComposerOnSend: !0,
                    onSendSuccess: d,
                    photoData: c,
                    threadID: a
                };
                b("FantaDispatcher").dispatch(e)
            })
        },
        sendGif: function(a, c, d) {
            this.dispatchOrBootloadSendMessages(function() {
                var e = {
                    type: h.SEND_GIF,
                    clearComposerOnSend: !1,
                    onSendSuccess: d,
                    photoData: c,
                    threadID: a
                };
                b("FantaDispatcher").dispatch(e)
            })
        },
        sendHotLike: function(a, c, d, e, f) {
            this.dispatchOrBootloadSendMessages(function() {
                var g = {
                    type: h.SEND_HOT_LIKE,
                    emoji: c,
                    onSendSuccess: f,
                    size: d,
                    source: e,
                    threadID: a
                };
                b("FantaDispatcher").dispatch(g)
            })
        },
        sendSticker: function(a, c, d) {
            this.dispatchOrBootloadSendMessages(function() {
                var e = {
                    type: h.SEND_STICKER,
                    threadID: a,
                    stickerID: c,
                    onSendSuccess: d
                };
                b("FantaDispatcher").dispatch(e)
            })
        },
        composerTextUpdate: function(a, c, d) {
            var e = this;
            c.length > 0 && b("ifRequired")("FantaReducersSendMessages", b("emptyFunction"), function() {
                return e.dispatchOrBootloadSendMessages(b("emptyFunction"))
            });
            this.dispatchOrBootloadSharePreview(function() {
                b("FantaDispatcher").dispatch({
                    type: h.COMPOSER_TEXT_UPDATE,
                    composer: d,
                    message: c,
                    threadID: a
                })
            })
        },
        dispatchOrBootloadMessages: function(a) {
            b("ifRequired")("FantaReducersMessages", function() {
                b("setImmediate")(a)
            }, function() {
                b("Bootloader").loadModules(["FantaReducersMessages"], function(c) {
                    g && (g.addReducers(c),
                    b("setImmediate")(a))
                }, "FantaMessageActions")
            })
        },
        dispatchOrBootloadSendMessages: function(a) {
            b("ifRequired")("FantaReducersSendMessages", function() {
                b("setImmediate")(a)
            }, function() {
                b("Bootloader").loadModules(["FantaReducersSendMessages"], function(c) {
                    g && (g.addReducers(c),
                    b("setImmediate")(a))
                }, "FantaMessageActions")
            })
        },
        dispatchOrBootloadUploader: function(a) {
            b("ifRequired")("FantaReducersFileUploader", function() {
                a()
            }, function() {
                b("Bootloader").loadModules(["FantaReducersFileUploader"], function(b) {
                    g && (g.addReducers(b),
                    a())
                }, "FantaMessageActions")
            })
        },
        dispatchOrBootloadSharePreview: function(a) {
            b("ifRequired")("FantaReducersSharePreview", function() {
                a()
            }, function() {
                b("Bootloader").loadModules(["FantaReducersSharePreview"], function(b) {
                    g && (g.addReducers(b),
                    a())
                }, "FantaMessageActions")
            })
        },
        updateUserInputRequested: function(a, c, d) {
            this.dispatchOrBootloadMessages(function() {
                b("FantaDispatcher").dispatch({
                    type: h.UPDATE_USER_INPUT_REQUESTED,
                    isUserInputRequested: a,
                    requestNumResults: c,
                    requestType: d
                })
            })
        }
    };
    e.exports = a
}
), null);
__d("MessengerDecoratorUtil", ["invariant", "MercuryAttachment", "MercuryAttachmentLayoutTypeHelper", "MercuryConfig", "QE2Logger", "gkx", "isMessengerMessageRemoved"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(a) {
        return a === Object(a)
    };
    function i(a) {
        a = a.attachments && a.attachments.length === 1 && a.attachments[0] && a.attachments[0].attach_type !== "sticker" && !p.isP2PAttachment(a);
        return !!a
    }
    function a(a) {
        return i(a) && b("MercuryAttachment").isLightweightActionAttachment(a.attachments[0])
    }
    function c(a) {
        var b;
        if ((a == null ? void 0 : (b = a.attachments) == null ? void 0 : b.length) > 0 && ((b = a.attachments[0].share) == null ? void 0 : b.style_list) != null) {
            return ((b = a.attachments[0].share) == null ? void 0 : b.style_list[0]) === "wec_message"
        } else
            return !1
    }
    function d(a) {
        return b("gkx")("843916") && !n(a)
    }
    function f(a) {
        if (k(a) || l(a) || b("isMessengerMessageRemoved")(a) || m(a))
            return !1;
        var c = j(a);
        a || g(0, 1760);
        if (!c)
            return !1;
        if (p.isCarouselAttachment(c))
            return !1;
        if (b("MercuryAttachment").isPhotoGroupAttachment(c))
            return !0;
        if (p.isUrlCtaOnlyBusinessAttachment(c))
            return !0;
        if (p.isNewForwardEntrypoint(c))
            return !0;
        return b("MercuryAttachment").isFileAttachment(c) && c.message_file_fbid ? !0 : !1
    }
    function j(a) {
        var b = a.attachments && a.attachments.length === 1;
        return b ? a.attachments[0] : null
    }
    function k(a) {
        return ((a = a) != null ? (a = a.attachments) != null ? (a = a[0]) != null ? (a = a.share) != null ? (a = a.style_list) != null ? a[0] : a : a : a : a : a) === "montage_direct"
    }
    function l(a) {
        return b("gkx")("1019832") && ((a = a) != null ? (a = a.attachments) != null ? (a = a[0]) != null ? (a = a.share) != null ? (a = a.style_list) != null ? a[0] : a : a : a : a : a) === "montage_share"
    }
    function m(a) {
        return (a = a && a.attachments && a.attachments.length > 0 && b("MercuryAttachmentLayoutTypeHelper").isAdminType(a.attachments[0])) != null ? a : !1
    }
    function n(a) {
        var b;
        a = j(a);
        if (!a)
            return !1;
        if (((b = a.share) == null ? void 0 : b.style_list) != null) {
            return ((b = a.share) == null ? void 0 : b.style_list[0]) === "rtc_call_log"
        } else
            return !1
    }
    function o(a) {
        var c = []
          , d = [];
        a.attachments.forEach(function(a) {
            a.metadata && a.metadata.fbid ? (c.push(a.metadata.fbid.toString()),
            d.push(a.attach_type.toString())) : a.share && a.share.share_id && (c.push(a.share.share_id),
            d.push(a.attach_type)),
            b("MercuryAttachment").isFileAttachment(a) && a.message_file_fbid && (c.push(a.message_file_fbid),
            d.push(a.attach_type))
        });
        return {
            ids: c,
            types: d
        }
    }
    var p = {
        isEventAttachment: function(a) {
            return this._isStoryBased(a) && a.share.style_list.indexOf("event_reminder") > -1
        },
        isOfferAttachment: function(a) {
            return this._isStoryBased(a) && a.share.style_list.indexOf("fbpay_offer") > -1
        },
        isApplicationShareReferral: function(a) {
            return this._isStoryBased(a) && a.share.style_list.indexOf("application_share_referral") > -1
        },
        isLocationAttachment: function(a) {
            return this._isStoryBased(a) && (a.share.style_list.indexOf("message_location") > -1 || a.share.style_list.indexOf("message_live_location") > -1 || a.share.style_list.indexOf("message_multiple_locations") > -1)
        },
        isOrderUpdateXMAAttachment: function(a) {
            return this._isStoryBased(a) && (a.share.style_list.indexOf("shop_order_updates") > -1 || a.share.style_list.indexOf("shop_order_updates_collapsed") > -1)
        },
        isCarouselAttachment: function(a) {
            a = a == null ? void 0 : (a = a.share) == null ? void 0 : a.subattachments;
            return a != null && a.length > 1 ? !0 : !1
        },
        isUrlCtaOnlyBusinessAttachment: function(a) {
            var b, c, d = this;
            b = (b = a.share) == null ? void 0 : b.style_list;
            c = (c = a.share) == null ? void 0 : c.target;
            a = a.attach_type === "share" && b instanceof Array && b.indexOf("business_message_items") > -1;
            if (a && c != null) {
                b = this.hasNonWebUrlCTABusinessAttachmentItem(c);
                if (b)
                    return !1;
                if (c.items != null && c.items.length > 0) {
                    a = c.items.find(function(a) {
                        return d.hasNonWebUrlCTABusinessAttachmentItem(a)
                    });
                    if (a != void 0)
                        return !1
                }
                return !0
            }
            return !1
        },
        hasNonWebUrlCTABusinessAttachmentItem: function(a) {
            if (a.call_to_actions != null && a.call_to_actions.length > 0) {
                a = a.call_to_actions.find(function(a) {
                    return a.action_type != 2 && a.action_type != 1
                });
                if (a != void 0)
                    return !0
            }
            return !1
        },
        isBusinessMessageAttachment: function(a) {
            var b;
            b = (b = a.share) == null ? void 0 : b.style_list;
            return a.attach_type === "share" && b instanceof Array && b.indexOf("business_message_items") > -1
        },
        isP2PAttachment: function(a) {
            var c = this;
            a = b("MercuryAttachment").get(a).filter(function(a) {
                return h(a) && c.isP2P(a)
            });
            return !!a.length
        },
        isP2P: function(a) {
            return !!(this._isStoryBased(a) && (a.share.style_list.indexOf("orion") > -1 || a.share.style_list.indexOf("orion_request") > -1))
        },
        isNewForwardEntrypoint: function(a) {
            var c;
            c = ((c = a) != null ? (c = c.share) != null ? (c = c.style_list) != null ? c[0] : c : c : c) === "montage_direct";
            c = b("MercuryAttachment").isShareAttachment(a) && a.share != null && a.share.share_id && !p.isP2P(a) && !p.isOfferAttachment(a) && !p.isApplicationShareReferral(a) && !p.isEventAttachment(a) && !p.isLocationAttachment(a) && !p.isOrderUpdateXMAAttachment(a) && !p.isBusinessMessageAttachment(a) && !c && (!a.share.target || !a.share.target.lwa_type);
            if (!c)
                return !1;
            b("QE2Logger").logExposureForUser("messenger_growth_www_share_flow");
            return b("MercuryConfig").MNFWD
        },
        _isStoryBased: function(a) {
            return !!(a.attach_type === "share" && a.share && a.share.style_list)
        },
        isAttachment: i,
        hasLWA: a,
        isWECMessage: c,
        allowForward: f,
        maybeGetMessageAttachment: j,
        isMontageDirect: k,
        isMontageShare: l,
        isAdminLayoutType: m,
        isRTCShareMessage: n,
        getAttachments: o,
        allowSave: d
    };
    e.exports = p
}
), null);
__d("MessengerReactionStaticEmoji.react", ["MessengerTextWithEmoticons.react", "React", "gkx", "requireCond", "cr:1536284"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React");
    function a(a) {
        var c = a.reaction
          , d = a.isDefaultReaction;
        a = a.uri;
        return b("gkx")("1536285") && b("cr:1536284") != null ? g.jsx(b("cr:1536284"), {
            reaction: c
        }) : a != null ? b("MessengerTextWithEmoticons.react").renderEmoji(!1, c, c, !0, a) : g.jsx(b("MessengerTextWithEmoticons.react"), {
            customSize: !0,
            forceMessengerEmoji: d,
            renderEmoticons: !0,
            renderEmoji: !0,
            text: c
        })
    }
}
), null);
__d("MessengerDotComAndInboxM4Check.bs", ["gkx", "CurrentUser", "MessengerEnvironment"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("gkx")("686397") && !b("CurrentUser").isWorkUser() && b("MessengerEnvironment").messengerui;
    f.yes = a
}
), null);
__d("MessengerDotComAndInboxM4Check.re", ["MessengerDotComAndInboxM4Check.bs"], (function(a, b, c, d, e, f) {
    a = b("MessengerDotComAndInboxM4Check.bs").yes;
    f.yes = a
}
), null);
__d("MessengerReactIconSVGM4React.bs", ["React", "bs_belt_Option"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a, c) {
        c = String(b("bs_belt_Option").getWithDefault(c, 22)) + "px";
        return g.jsx("svg", {
            children: g.jsxs("g", {
                children: [g.jsx("polygon", {
                    points: "0 36 36 36 36 0 0 0"
                }), g.jsx("path", {
                    d: "M14.4951,17.5 C13.5576,17.5 12.9951,16.75 12.9951,15.5 C12.9951,14.25 13.5576,13.5 14.4951,13.5 C15.4326,13.5 15.9951,14.25 15.9951,15.5 C15.9951,16.75 15.4326,17.5 14.4951,17.5 M21.4951,17.5 C20.5576,17.5 19.9951,16.75 19.9951,15.5 C19.9951,14.25 20.5576,13.5 21.4951,13.5 C22.4326,13.5 22.9951,14.25 22.9951,15.5 C22.9951,16.75 22.4326,17.5 21.4951,17.5 M18.0071,25.0055 C15.7176,25.0055 13.5461,23.9185 12.1981,22.0985 C11.8691,21.6545 11.9626,21.028 12.4061,20.6985 C12.8491,20.369 13.4756,20.4625 13.8041,20.9065 C14.7766,22.2195 16.3481,23.004 18.0071,23.004 C19.6666,23.004 21.2376,22.2195 22.2101,20.9065 C22.5386,20.4625 23.1656,20.3695 23.6086,20.698 C24.0516,21.0275 24.1451,21.6545 23.8166,22.0985 C22.4686,23.9185 20.2971,25.0055 18.0071,25.0055 M18.0001,8 C12.4771,8 8.0001,12.477 8.0001,18 C8.0001,23.523 12.4771,28 18.0001,28 C23.5231,28 28.0001,23.523 28.0001,18 C28.0001,12.477 23.5231,8 18.0001,8 M18.0001,30 C11.3726,30 6.0001,24.6275 6.0001,18 C6.0001,11.3725 11.3726,6 18.0001,6 C24.6276,6 30.0001,11.3725 30.0001,18 C30.0001,24.6275 24.6276,30 18.0001,30",
                    fill: a
                })],
                fill: "none",
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: "1"
            }),
            height: c,
            width: c,
            viewBox: "0 0 36 36"
        })
    }
    function c(a) {
        return g.jsx("svg", {
            children: g.jsxs("g", {
                children: [g.jsx("polygon", {
                    points: "0,26 26,26 26,0 0,0 "
                }), g.jsx("path", {
                    d: "m19.1311,16.73095c-0.4325,-0.3545 -1.0775,-0.302 -1.441,0.122c-1.171,1.3615 -2.883,2.142 -4.697,2.142c-1.8135,0 -3.526,-0.7805 -4.697,-2.142c-0.363,-0.4225 -1.008,-0.4765 -1.441,-0.122c-0.432,0.355 -0.488,0.986 -0.1245,1.408c1.5605,1.8145 3.8435,2.855 6.2625,2.855c2.4195,0 4.702,-1.0405 6.2625,-2.855c0.3635,-0.422 0.3075,-1.053 -0.1245,-1.408m-2.1355,-7.731c-0.9375,0 -1.5,0.75 -1.5,2c0,1.25 0.5625,2 1.5,2c0.9375,0 1.5,-0.75 1.5,-2c0,-1.25 -0.5625,-2 -1.5,-2m-8,0c-0.9375,0 -1.5,0.75 -1.5,2c0,1.25 0.5625,2 1.5,2c0.9375,0 1.5,-0.75 1.5,-2c0,-1.25 -0.5625,-2 -1.5,-2m4.0045,16c-6.6275,0 -12,-5.3725 -12,-12c0,-6.6275 5.3725,-12 12,-12c6.6275,0 12,5.3725 12,12c0,6.6275 -5.3725,12 -12,12",
                    fill: a
                })],
                fill: "none",
                fillRule: "evenodd"
            }),
            height: "24px",
            width: "24px",
            viewBox: "0 0 26 26"
        })
    }
    f.make = a;
    f.makeSolid = c
}
), null);
__d("MessengerReactIconSVGM4React.re", ["bs_curry", "MessengerReactIconSVGM4React.bs"], (function(a, b, c, d, e, f) {
    a = function(a, c) {
        a = b("bs_curry")._2(b("MessengerReactIconSVGM4React.bs").make, a, c == null ? void 0 : c);
        return a
    }
    ;
    f.make = a;
    c = function(a) {
        a = b("MessengerReactIconSVGM4React.bs").makeSolid(a.fill);
        return a
    }
    ;
    f.makeSolid = c
}
), null);
__d("EmojiFormat.re", ["EmojiFormat.bs"], (function(a, b, c, d, e, f) {
    c = (a = b("EmojiFormat.bs")).codeStringToCodeArray;
    f.codeStringToCodeArray = c;
    d = a.codeArrayToCodeString;
    f.codeArrayToCodeString = d;
    e = a.codeArrayToUnicode;
    f.codeArrayToUnicode = e;
    b = a.codeStringToUnicode;
    f.codeStringToUnicode = b
}
), null);
__d("LongpressHook.bs", ["bs_curry", "React", "setTimeout", "bs_caml_option", "clearTimeout"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a, c, d) {
        var e = g.useRef(void 0)
          , f = g.useCallback(function(a) {
            a = e.current;
            a !== void 0 && b("clearTimeout")(b("bs_caml_option").valFromOption(a));
            e.current = void 0;
            return 0
        }, [e])
          , h = g.useCallback(function(a) {
            a = b("setTimeout")(function(a) {
                b("bs_curry")._1(f, 0);
                return b("bs_curry")._1(c, 0)
            }, d);
            e.current = b("bs_caml_option").some(a);
            return 0
        }, [e, f, c, d])
          , i = g.useCallback(function(c) {
            c = e.current;
            if (c !== void 0) {
                b("bs_curry")._1(f, 0);
                return b("bs_curry")._1(a, 0)
            } else
                return 0
        }, [f, a]);
        g.useEffect(function() {
            return function(a) {
                return b("bs_curry")._1(f, 0)
            }
        }, [f]);
        return [h, i, f]
    }
    f.useLongPress = a
}
), null);
__d("LongpressHook.re", ["bs_curry", "LongpressHook.bs"], (function(a, b, c, d, e, f) {
    a = function(a) {
        a = b("bs_curry")._3(b("LongpressHook.bs").useLongPress, a.onClick, a.onLongPress, a.ms);
        return a
    }
    ;
    f.useLongPress = a
}
), null);
__d("MessengerThreadThemeUpdateWebGraphQLMutation", ["WebGraphQLMutationBase"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        b.__getDocID = function() {
            return "1727493033983591"
        }
        ;
        b.getQueryID = function() {
            return "643682629309288"
        }
        ;
        return b
    }(b("WebGraphQLMutationBase"))
}
), null);
__d("WorkChatBulkUpdatePinnedThreadsMutation", ["ClientIDs", "CurrentUser", "MercuryIDs", "RelayFBEnvironment", "RelayModern", "Timezone", "TimezoneNamesData", "WorkChatBulkUpdatePinnedThreadsMutation.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    f.commit = a;
    var g;
    b("Timezone").registerNamesModule(b("TimezoneNamesData"));
    var h = g !== void 0 ? g : g = b("WorkChatBulkUpdatePinnedThreadsMutation.graphql");
    function a(a) {
        var c = a.threadIDs
          , d = a.source
          , e = a.onCompleted;
        a = a.onError;
        c = c.map(function(a) {
            return {
                thread_fbid: b("MercuryIDs").getThreadFBIDFromThreadID(a),
                update_type: "MARK_PINNED"
            }
        });
        return b("RelayModern").commitMutation(b("RelayFBEnvironment"), {
            mutation: h,
            variables: {
                input: {
                    client_mutation_id: b("ClientIDs").getNewClientID(),
                    actor_id: b("CurrentUser").getID(),
                    threads_pin_status: c,
                    source: d
                }
            },
            onCompleted: e,
            onError: a
        })
    }
}
), null);
__d("XChatRemoveParticipantAsyncController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/chat/remove_participants/", {
        elem_id: {
            type: "String"
        },
        uid: {
            type: "Int"
        },
        tid: {
            type: "String"
        }
    })
}
), null);
__d("XGroupsJoinChatController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/groups/join_chat/", {
        link_hash: {
            type: "String"
        }
    })
}
), null);
__d("XMessagingBlockMessagesController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/messaging/block_messages/", {
        privacy_mutation_token: {
            type: "String"
        }
    })
}
), null);
__d("XMessagingGroupJoinThroughHashController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/messaging/join_through_hash/", {
        link_hash: {
            type: "String"
        }
    })
}
), null);
__d("XMessagingGroupJoinThroughPrivateLinkController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/messaging/join_through_invite/", {
        link_hash: {
            type: "String"
        }
    })
}
), null);
__d("XMessagingGroupJoinableAcceptController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/messaging/joinable_accept/", {
        thread_fbid: {
            type: "String"
        },
        user_id: {
            type: "Int"
        }
    })
}
), null);
__d("XMessagingGroupJoinableRejectController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/messaging/joinable_reject/", {
        thread_fbid: {
            type: "String"
        },
        user_id: {
            type: "Int"
        }
    })
}
), null);
__d("XMessagingGroupSetApprovalController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/messaging/set_approval_mode/", {
        set_mode: {
            type: "Enum",
            enumType: 0
        },
        thread_fbid: {
            type: "String"
        }
    })
}
), null);
__d("XMessagingJoinableLinkController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/messaging/joinable_link_action/", {
        action: {
            type: "Enum",
            required: !0,
            enumType: 1
        }
    })
}
), null);
__d("XMessagingSaveAdminsController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/messaging/save_admins/", {
        thread_fbid: {
            type: "String"
        },
        admin_ids: {
            type: "FBIDSet"
        },
        add: {
            type: "Bool",
            defaultValue: !1
        }
    })
}
), null);
__d("XMessagingSaveGroupThreadDescriptionController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/messaging/save_group_thread_description/", {
        source: {
            type: "Enum",
            required: !0,
            enumType: 1
        }
    })
}
), null);
__d("XMessagingSaveNicknameController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/messaging/save_thread_nickname/", {
        source: {
            type: "Enum",
            required: !0,
            enumType: 1
        }
    })
}
), null);
__d("XMessagingSaveThreadColorController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/messaging/save_thread_color/", {
        source: {
            type: "Enum",
            required: !0,
            enumType: 1
        }
    })
}
), null);
__d("XMessagingSaveThreadEmojiController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/messaging/save_thread_emoji/", {
        source: {
            type: "Enum",
            required: !0,
            enumType: 1
        }
    })
}
), null);
__d("XMessagingSetThreadNameController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/messaging/set_thread_name/", {})
}
), null);
__d("XMessagingUnblockMessagesController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/messaging/unblock_messages/", {})
}
), null);
__d("XNFXIgnoreMessagesActionController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/nfx/ignore_messages/", {
        thread_fbid: {
            type: "Int",
            required: !0
        },
        location: {
            type: "Enum",
            required: !0,
            enumType: 1
        },
        frx_context: {
            type: "String"
        },
        __asyncDialog: {
            type: "Int"
        }
    })
}
), null);
__d("XNFXMessengerBlockActionController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/nfx/block_messages/", {
        thread_fbid: {
            type: "Int",
            required: !0
        },
        responsible_id: {
            type: "Int"
        },
        location: {
            type: "Enum",
            required: !0,
            enumType: 1
        },
        frx_context: {
            type: "String"
        },
        entry_point: {
            type: "Enum",
            required: !0,
            enumType: 1
        },
        __asyncDialog: {
            type: "Int"
        }
    })
}
), null);
__d("MercuryThreadActions", ["codedError", "cssVar", "fbt", "invariant", "AsyncDialog", "AsyncRequest", "AsyncResponse", "Bootloader", "CurrentUser", "EmojiLikeConstants", "IgnoreMessagesTypedLogger", "JSResource", "MercuryAPIArgsSource", "MercuryDispatcher", "MercuryIDs", "MercuryMessageActions", "MercuryMessageObject", "MercuryMessengerBlockingUtils", "MercuryServerPayloadPreprocessor", "MercuryServerRequests", "MercurySingletonProvider", "MercuryThreadIDMap", "MercuryThreadlistConstants", "MercuryViewer", "MessagingTag", "MessengerConfig", "MessengerEmojiTransitionMapping.bs", "MessengerParticipants.bs", "MessengerState.re", "MessengerThreadThemeUpdateWebGraphQLMutation", "NFXContextFactory", "PageCommItemStatus", "React", "ReloadPage", "URI", "WebGraphQL", "WorkChatBulkUpdatePinnedThreadsMutation", "XChatRemoveParticipantAsyncController", "XGroupsJoinChatController", "XMessagingBlockMessagesController", "XMessagingGroupJoinableAcceptController", "XMessagingGroupJoinableRejectController", "XMessagingGroupJoinThroughHashController", "XMessagingGroupJoinThroughPrivateLinkController", "XMessagingGroupSetApprovalController", "XMessagingJoinableLinkController", "XMessagingSaveAdminsController", "XMessagingSaveGroupThreadDescriptionController", "XMessagingSaveNicknameController", "XMessagingSaveThreadColorController", "XMessagingSaveThreadEmojiController", "XMessagingSetThreadNameController", "XMessagingUnblockMessagesController", "XNFXIgnoreMessagesActionController", "XNFXMessengerBlockActionController", "ex", "lazyLoadComponent"], (function(a, b, c, d, e, f, g, h, i, j) {
    "use strict";
    var k, l = b("React"), m = b("lazyLoadComponent")(b("JSResource")("MessengerSimpleDialogReact").__setRef("MercuryThreadActions"));
    a = function() {
        function a(a) {
            this.$1 = a,
            this.__serverRequests = b("MercuryServerRequests").getForFBID(this.$1),
            this.__dispatcher = b("MercuryDispatcher").getForFBID(this.$1),
            this.__payloadPreprocessor = b("MercuryServerPayloadPreprocessor").getForFBID(this.$1),
            this.__mercuryThreadIDMap = b("MercuryThreadIDMap").getForFBID(this.$1),
            this.__messageActions = b("MercuryMessageActions").getForFBID(this.$1),
            this.__messageObject = b("MercuryMessageObject").getForFBID(this.$1)
        }
        a.getForFBID = function(a) {
            return n.getForFBID(a)
        }
        ;
        a.get = function() {
            return n.get()
        }
        ;
        var c = a.prototype;
        c.markRead = function(a, b) {
            this.batchMarkRead([a], b)
        }
        ;
        c.batchMarkRead = function(a, b) {
            this.__dispatcher.handleUpdate(this.$2(a, !0, b))
        }
        ;
        c.markUnread = function(a, b) {
            this.batchMarkUnread([a], b)
        }
        ;
        c.batchMarkUnread = function(a, b) {
            this.__dispatcher.handleUpdate(this.$2(a, !1, b))
        }
        ;
        c.markSeen = function(a, b) {
            this.__dispatcher.handleUpdate(this.__constructClientPayload([a], "ma-type:mark_thread_seen", "client_mark_thread_seen", {
                persistent: b
            }))
        }
        ;
        c.archive = function(a, b) {
            this.batchArchive([a], b)
        }
        ;
        c.batchArchive = function(a, b) {
            var c = this;
            a.forEach(function(a) {
                c.__serverRequests.changeThreadArchivedStatus(a, !0, b)
            });
            this.__dispatcher.handleUpdate(this.$3(a, !0))
        }
        ;
        c.unarchive = function(a, b) {
            this.batchUnarchive([a], b)
        }
        ;
        c.batchUnarchive = function(a, b) {
            var c = this;
            a.forEach(function(a) {
                c.__serverRequests.changeThreadArchivedStatus(a, !1, b)
            });
            this.__dispatcher.handleUpdate(this.$3(a, !1))
        }
        ;
        c.pin = function(a, c, d) {
            var e = b("MessengerState.re").getPinnedThreadlist(b("CurrentUser").getID())
              , f = b("CurrentUser").isWorkUser()
              , h = f ? b("MercuryThreadlistConstants").MAX_PINNED_THREADS : b("MessengerConfig").MPT;
            e = e.length >= h;
            if (e) {
                e = g._(1545078, function(a) {
                    return a._("Kh\u00f4ng th\u1ec3 ghim \u0111o\u1ea1n chat")
                }, function(a, b) {
                    return a._("B\u1ea1n c\u00f3 th\u1ec3 ghim t\u1ed1i \u0111a {max_threads} \u0111o\u1ea1n chat. H\u00e3y b\u1ecf ghim \u0111o\u1ea1n chat kh\u00e1c r\u1ed3i th\u1eed ghim l\u1ea1i \u0111o\u1ea1n n\u00e0y.", [a._param("max_threads", b.max_threads)])
                }, {
                    max_threads: h
                });
                var j = f ? i._("B\u1ea1n kh\u00f4ng th\u1ec3 ghim th\u00eam b\u1ea5t k\u1ef3 cu\u1ed9c tr\u00f2 chuy\u1ec7n n\u00e0o kh\u00e1c") : e.summary
                  , k = f ? i._("B\u1ea1n kh\u00f4ng th\u1ec3 ghim qu\u00e1 15 cu\u1ed9c tr\u00f2 chuy\u1ec7n tr\u00ean Workplace. \u0110\u1ec3 ghim cu\u1ed9c tr\u00f2 chuy\u1ec7n n\u00e0y, h\u00e3y th\u1eed b\u1ecf ghim m\u1ed9t cu\u1ed9c tr\u00f2 chuy\u1ec7n kh\u00e1c.") : e.description;
                b("Bootloader").loadModules(["MessengerDialogs.bs"], function(a) {
                    a.showDialog(function() {
                        return l.jsx(l.Suspense, {
                            fallback: l.jsx("div", {}),
                            children: l.jsx(m, {
                                title: j,
                                body: k
                            })
                        })
                    })
                }, "MercuryThreadActions")
            } else
                this.batchPin([a], d),
                this.$4(a, !0, c)
        }
        ;
        c.batchPin = function(a, b) {
            var c = this;
            a.forEach(function(a) {
                c.__serverRequests.changeThreadPinnedStatus(a, !0, b)
            });
            this.__dispatcher.handleUpdate(this.$5(a, !0))
        }
        ;
        c.unpin = function(a, b, c) {
            b === void 0 && (b = null),
            this.batchUnpin([a], c),
            this.$4(a, !1, b)
        }
        ;
        c.batchUnpin = function(a, b) {
            var c = this;
            a.forEach(function(a) {
                c.__serverRequests.changeThreadPinnedStatus(a, !1, b)
            });
            this.__dispatcher.handleUpdate(this.$5(a, !1))
        }
        ;
        c.bulkPinThreadsUpdate = function(a, c) {
            b("WorkChatBulkUpdatePinnedThreadsMutation").commit({
                threadIDs: a,
                source: c
            }),
            this.__dispatcher.handleUpdate(this.$5(a, !0))
        }
        ;
        c.pinMessage = function(a, b) {
            this.__dispatcher.handleUpdate(this.$6(a, b))
        }
        ;
        c.unpinMessage = function(a, b) {
            this.__dispatcher.handleUpdate(this.$7(a, b))
        }
        ;
        c.markPageFollowUp = function(a, b) {
            this.batchMarkPageFollowUp([a], b)
        }
        ;
        c.batchMarkPageFollowUp = function(a, b) {
            var c = this;
            a.forEach(function(a) {
                c.__serverRequests.changeThreadPageFollowUpStatus(a, !0, b)
            });
            this.__dispatcher.handleUpdate(this.$8(a, !0))
        }
        ;
        c.unmarkPageFollowUp = function(a, b) {
            this.batchUnmarkPageFollowUp([a], b)
        }
        ;
        c.batchUnmarkPageFollowUp = function(a, b) {
            var c = this;
            a.forEach(function(a) {
                c.__serverRequests.changeThreadPageFollowUpStatus(a, !1, b)
            });
            this.__dispatcher.handleUpdate(this.$8(a, !1))
        }
        ;
        c.markSpam = function(a, b) {
            this.batchMarkSpam([a], b)
        }
        ;
        c.batchMarkSpam = function(a, c) {
            var d = this;
            a.forEach(function(a) {
                d.__serverRequests.markThreadSpam(a, c)
            });
            this.__dispatcher.handleUpdate(this.$9(a, b("MessagingTag").SPAM))
        }
        ;
        c.unmarkSpam = function(a, b) {
            this.batchUnmarkSpam([a], b)
        }
        ;
        c.batchUnmarkSpam = function(a, c) {
            var d = this;
            a.forEach(function(a) {
                d.__serverRequests.unmarkThreadSpam(a, c)
            });
            this.__dispatcher.handleUpdate(this.$9(a, b("MessagingTag").INBOX))
        }
        ;
        c.changeFolder = function(a, b) {
            this.batchChangeFolder([a], b)
        }
        ;
        c.batchChangeFolder = function(a, b) {
            var c = this;
            a.forEach(function(a) {
                c.__serverRequests.changeThreadFolder(a, b)
            });
            this.__dispatcher.handleUpdate(this.$9(a, b))
        }
        ;
        c["delete"] = function(a, b) {
            this.batchDelete([a], b)
        }
        ;
        c.batchDelete = function(a, b) {
            this.__serverRequests.deleteThreads(a, b),
            this.__dispatcher.handleUpdate(this.__constructClientPayload(a, "ma-type:delete-thread", "client_delete_thread"))
        }
        ;
        c.unmute = function(a) {
            this.updateMuteSetting(a, 0)
        }
        ;
        c.updateMuteSetting = function(a, b) {
            this.__serverRequests.changeMutingOnThread(a, b),
            this.__dispatcher.handleUpdate(this.__constructClientPayload([a], "ma-type:change-mute-settings", "client_change_mute_settings", {
                mute_until: b
            }))
        }
        ;
        c.updateMentionsMuteSetting = function(a, b) {
            b = b ? 1 : 0;
            this.__serverRequests.changeMentionsMutingOnThread(a, b);
            this.__dispatcher.handleUpdate(this.__constructClientPayload([a], "ma-type:change-mute-settings", "client_change_mute_settings", {
                mentions_mute_mode: b
            }))
        }
        ;
        c.updateReactionsMuteSetting = function(a, b) {
            b = b ? 1 : 0;
            this.__serverRequests.changeReactionsMutingOnThread(a, b);
            this.__dispatcher.handleUpdate(this.__constructClientPayload([a], "ma-type:change-mute-settings", "client_change_mute_settings", {
                reactions_mute_mode: b
            }))
        }
        ;
        c.blockMessagesForGroupThread = function(a, c, d, e) {
            var f = b("MercuryIDs").getUserIDFromParticipantID(c);
            this.__mercuryThreadIDMap.getServerIDFromClientID(a, function(a) {
                a = b("XNFXMessengerBlockActionController").getURIBuilder().setEnum("entry_point", d).setEnum("location", "www_chat_head").setInt("thread_fbid", a).setInt("responsible_id", f).getURI();
                b("AsyncDialog").send(new (b("AsyncRequest"))(a).setRelativeTo(e), function(a) {
                    a.subscribe("confirm", function() {
                        a.hide()
                    })
                })
            })
        }
        ;
        c.blockMessages = function(a, c, d) {
            var e = this
              , f = ""
              , g = b("MercuryIDs").getUserIDFromThreadID(a);
            g != null || j(0, 400);
            var h = b("MessengerParticipants.bs").getNow(b("MercuryIDs").getParticipantIDFromUserID(g));
            f = h && h.short_name;
            h = b("XNFXMessengerBlockActionController").getURIBuilder().setInt("thread_fbid", g).setEnum("entry_point", c).setEnum("location", "www_chat_head").getURI();
            b("AsyncDialog").send(new (b("AsyncRequest"))(h), function(c) {
                c.subscribe("confirm", function() {
                    c.hide(),
                    d && d(f),
                    e.changeFolder(a, b("MessagingTag").OTHER)
                })
            })
        }
        ;
        c.unblockMessages = function(a, c) {
            var d = this;
            c == null && (c = b("MercuryIDs").getUserIDFromThreadID(a));
            if (c === null)
                throw new Error(b("ex")("Expected user ID to unblock messages for, got null"));
            c = b("NFXContextFactory").withEntReportable({
                reportable_ent_token: c,
                story_location: "messenger",
                initial_action_name: b("MercuryMessengerBlockingUtils").block_messages
            });
            new (b("AsyncRequest"))(new (k || (k = b("URI")))("/ajax/nfx/messenger_undo_block").addQueryData({
                context: c
            })).setHandler(function() {
                return d.changeFolder(a, b("MessagingTag").INBOX)
            }).send()
        }
        ;
        c.ignoreMessages = function(a) {
            a = b("XNFXIgnoreMessagesActionController").getURIBuilder().setInt("thread_fbid", a).setEnum("location", "www_chat_head").getURI();
            b("AsyncDialog").send(new (b("AsyncRequest"))(a))
        }
        ;
        c.blockOnMessengerDotCom = function(a) {
            var c = b("XMessagingBlockMessagesController").getURIBuilder().getURI();
            new (b("IgnoreMessagesTypedLogger"))().setEvent("block_confirmed").setThreadID(b("MercuryIDs").getThreadFBIDFromThreadID(a)).setPlatform("messengerdotcom").log();
            new (b("AsyncRequest"))(c).setMethod("POST").setData({
                fbid: b("MercuryIDs").getUserIDFromThreadID(a)
            }).send()
        }
        ;
        c.blockIgnoreOnMessengerDotCom = function(a, c, d) {
            var e = this;
            b("Bootloader").loadModules(["MessengerActions"], function(b) {
                a && b.selectThread(c),
                e.blockOnMessengerDotCom(c),
                d && d()
            }, "MercuryThreadActions")
        }
        ;
        c.unblockOnMessengerDotCom = function(a) {
            var c = this
              , d = b("XMessagingUnblockMessagesController").getURIBuilder().getURI();
            new (b("AsyncRequest"))(d).setMethod("POST").setData({
                fbid: b("MercuryIDs").getUserIDFromThreadID(a)
            }).setHandler(function() {
                return c.changeFolder(a, b("MessagingTag").INBOX)
            }).send()
        }
        ;
        c.leaveGroup = function(a) {
            this.__messageActions.send(this.__messageObject.constructLogMessageObject("source:titan:web", a, "log:unsubscribe", {
                removed_participants: [b("MercuryViewer").getID()]
            }), null, b("MercuryAPIArgsSource").WEBMESSENGER)
        }
        ;
        c.removeFromGroup = function(a, c) {
            var d = b("XChatRemoveParticipantAsyncController").getURIBuilder().getURI();
            a = {
                request_user_id: this.$1,
                tid: a,
                uid: c
            };
            new (b("AsyncRequest"))(d).setMethod("POST").setData(a).send()
        }
        ;
        c.changeThreadTheme = function(a, c, d) {
            var e = this;
            this.__mercuryThreadIDMap.getServerIDFromClientID(a, function(a) {
                b("WebGraphQL").exec(new (b("MessengerThreadThemeUpdateWebGraphQLMutation"))({
                    data: {
                        client_mutation_id: "0",
                        actor_id: e.$1,
                        thread_id: a,
                        theme_id: c,
                        source: d
                    }
                }))
            })
        }
        ;
        c.changeThreadColor = function(a, c, d) {
            var e = this;
            this.__mercuryThreadIDMap.getServerIDFromClientID(a, function(a) {
                a = {
                    request_user_id: e.$1,
                    thread_or_other_fbid: a,
                    color_choice: c != "#0084ff" ? c : null
                };
                var f = b("XMessagingSaveThreadColorController").getURIBuilder().setEnum("source", d).getURI();
                new (b("AsyncRequest"))(f).setMethod("POST").setData(a).send()
            })
        }
        ;
        c.changeThreadEmoji = function(a, c, d) {
            var e = this;
            this.__mercuryThreadIDMap.getServerIDFromClientID(a, function(a) {
                a = {
                    request_user_id: e.$1,
                    thread_or_other_fbid: a,
                    emoji_choice: void 0
                };
                var f = String.fromCodePoint.apply(String, c);
                b("MessengerEmojiTransitionMapping.bs").hasGender(c) && (f = String.fromCodePoint.apply(String, b("MessengerEmojiTransitionMapping.bs").removeAllModifiers(c)));
                f !== String.fromCodePoint.apply(String, b("EmojiLikeConstants").FB_THUMBS_UP_EMOJI) && f !== String.fromCodePoint.apply(String, b("EmojiLikeConstants").THUMBS_UP_EMOJI_CODES) && (a.emoji_choice = f);
                f = b("XMessagingSaveThreadEmojiController").getURIBuilder().setEnum("source", d).getURI();
                new (b("AsyncRequest"))(f).setMethod("POST").setData(a).send()
            })
        }
        ;
        c.changeThreadNicknames = function(a, c, d, e) {
            var f = this;
            this.__mercuryThreadIDMap.getServerIDFromClientID(a, function(a) {
                a = {
                    request_user_id: f.$1,
                    thread_or_other_fbid: a,
                    participant_id: c,
                    nickname: d
                };
                var g = b("XMessagingSaveNicknameController").getURIBuilder().setEnum("source", e).getURI();
                new (b("AsyncRequest"))(g).setMethod("POST").setData(a).send()
            })
        }
        ;
        c.changeGroupThreadDescription = function(a, c, d) {
            var e = this;
            this.__mercuryThreadIDMap.getServerIDFromClientID(a, function(a) {
                a = {
                    request_user_id: e.$1,
                    thread_fbid: a,
                    description: c
                };
                var f = b("XMessagingSaveGroupThreadDescriptionController").getURIBuilder().setEnum("source", d).getURI();
                new (b("AsyncRequest"))(f).setMethod("POST").setData(a).send()
            })
        }
        ;
        c.changeGroupThreadName = function(a, c) {
            var d = this;
            this.__mercuryThreadIDMap.getServerIDFromClientID(a, function(a) {
                a = {
                    request_user_id: d.$1,
                    thread_id: a,
                    thread_name: c
                };
                var e = b("XMessagingSetThreadNameController").getURIBuilder().getURI();
                new (b("AsyncRequest"))(e).setMethod("POST").setData(a).send()
            })
        }
        ;
        c.setApprovalMode = function(a, c) {
            var d = b("XMessagingGroupSetApprovalController").getURIBuilder().getURI();
            new (b("AsyncRequest"))(d).setMethod("POST").setData({
                request_user_id: this.$1,
                set_mode: a,
                thread_fbid: c.thread_fbid
            }).send()
        }
        ;
        c.changeGroupAdmins = function(a, c, d) {
            a = {
                request_user_id: this.$1,
                thread_fbid: a,
                admin_ids: c,
                add: d
            };
            c = b("XMessagingSaveAdminsController").getURIBuilder().getURI();
            new (b("AsyncRequest"))(c).setMethod("POST").setData(a).send()
        }
        ;
        c.joinThroughHash = function(a, c, d) {
            a = {
                request_user_id: this.$1,
                link_hash: a
            };
            var e = b("XMessagingGroupJoinThroughHashController").getURIBuilder().getURI();
            new (b("AsyncRequest"))(e).setMethod("POST").setData(a).setHandler(function() {
                return c()
            }).setErrorHandler(function(a) {
                d() || b("AsyncResponse").defaultErrorHandler(a)
            }).setTransportErrorHandler(function() {
                d()
            }).send()
        }
        ;
        c.joinThroughPrivateLink = function(a) {
            a = {
                request_user_id: this.$1,
                link_hash: a
            };
            var c = b("XMessagingGroupJoinThroughPrivateLinkController").getURIBuilder().getURI();
            new (b("AsyncRequest"))(c).setMethod("POST").setData(a).send()
        }
        ;
        c.chatJoinThroughHash = function(a, c) {
            a = {
                request_user_id: this.$1,
                link_hash: a
            };
            var d = b("XGroupsJoinChatController").getURIBuilder().getURI()
              , e = function() {
                return b("ReloadPage").now()
            };
            new (b("AsyncRequest"))(d).setMethod("POST").setData(a).setHandler(c && typeof c === "function" ? c : e).send()
        }
        ;
        c.createJoinableLink = function(a, c) {
            var d = this;
            if (b("MessengerState.re").isEmptyLocalThread(b("CurrentUser").getID(), a))
                return;
            this.__mercuryThreadIDMap.getServerIDFromClientID(a, function(a) {
                a = {
                    request_user_id: d.$1,
                    thread_fbid: a
                };
                var e = b("XMessagingJoinableLinkController").getURIBuilder().setEnum("action", "create_link").getURI();
                new (b("AsyncRequest"))(e).setMethod("POST").setData(a).setHandler(function(a) {
                    a = a.getPayload();
                    a && c(a)
                }).send()
            })
        }
        ;
        c.revokeAndRegenerateJoinableLink = function(a, c) {
            var d = this;
            if (b("MessengerState.re").isEmptyLocalThread(b("CurrentUser").getID(), a))
                return;
            this.__mercuryThreadIDMap.getServerIDFromClientID(a, function(e) {
                e = {
                    request_user_id: d.$1,
                    thread_fbid: e
                };
                var f = b("XMessagingJoinableLinkController").getURIBuilder().setEnum("action", "revoke_link").getURI();
                new (b("AsyncRequest"))(f).setMethod("POST").setData(e).setHandler(function(b) {
                    return d.createJoinableLink(a, c)
                }).send()
            })
        }
        ;
        c.acceptToJoinableGroup = function(a, c) {
            a = {
                request_user_id: this.$1,
                thread_fbid: a,
                user_id: c
            };
            c = b("XMessagingGroupJoinableAcceptController").getURIBuilder().getURI();
            new (b("AsyncRequest"))(c).setMethod("POST").setData(a).send()
        }
        ;
        c.rejectToJoinableGroup = function(a, c) {
            a = {
                request_user_id: this.$1,
                thread_fbid: a,
                user_id: c
            };
            c = b("XMessagingGroupJoinableRejectController").getURIBuilder().getURI();
            new (b("AsyncRequest"))(c).setMethod("POST").setData(a).send()
        }
        ;
        c.addParticipants = function(a, b) {
            this.__dispatcher.handleUpdate(this.__constructClientPayload([a], "ma-type:add-participants", "client_add_participants", {
                participants: b
            }))
        }
        ;
        c.movePendingToInbox = function(a) {
            this.__dispatcher.handleUpdate(this.__constructClientPayload([a], "ma-type:move_pending_to_inbox", "client_move_pending_to_inbox"))
        }
        ;
        c.updateCommStatus = function(a, c) {
            this.__dispatcher.handleUpdate(this.$10(a, c));
            c = c === b("PageCommItemStatus").DONE;
            this.__dispatcher.handleUpdate(this.$3(a, c))
        }
        ;
        c.updateCommItemOwner = function(a, b, c, d) {
            this.__dispatcher.handleUpdate(this.$11(a, b, c, d))
        }
        ;
        c.$2 = function(a, b, c) {
            return this.__constructClientPayload(a, "ma-type:change_read_status", "client_change_read_status", {
                mark_as_read: b,
                source: c,
                timestamp: 0
            })
        }
        ;
        c.$11 = function(a, b, c, d) {
            return this.__constructClientPayload(a, "ma-type:update-comm-item-owner", "client_update_comm_item_owner", {
                id: c,
                name: b,
                profile_pic_uri: d
            })
        }
        ;
        c.$3 = function(a, b) {
            return this.__constructClientPayload(a, "ma-type:change-archived-status", "client_change-archived_status", {
                archived: b
            })
        }
        ;
        c.$5 = function(a, b) {
            return this.__constructClientPayload(a, "ma-type:change-pinned-status", "client_change-pinned_status", {
                is_pinned: b,
                thread_pin_timestamp: Math.floor(Date.now() / 1e3)
            })
        }
        ;
        c.$6 = function(a, b) {
            return this.__constructClientPayload([a], "ma-type:pin-message", "server_change-pinned_messages", {
                pin_message_action: {
                    message: b
                }
            })
        }
        ;
        c.$7 = function(a, b) {
            return this.__constructClientPayload([a], "ma-type:unpin-message", "server_change-pinned_messages", {
                unpin_message_action: {
                    message_id: b
                }
            })
        }
        ;
        c.$8 = function(a, b) {
            return this.__constructClientPayload(a, "ma-type:change-page-follow-up-status", "client_change_page_follow_up_status", {
                is_page_follow_up: b
            })
        }
        ;
        c.$10 = function(a, b) {
            return this.__constructClientPayload(a, "ma-type:update-comm-status", "client_update_comm_status", {
                comm_status: b
            })
        }
        ;
        c.$9 = function(a, b) {
            return this.__constructClientPayload(a, "ma-type:change-folder", "client_change_folder", {
                new_folder: b
            })
        }
        ;
        c.__constructClientPayload = function(a, b, c, d) {
            return {
                actions: a.map(function(a) {
                    return babelHelpers["extends"]({
                        action_type: b,
                        thread_id: a
                    }, d)
                }),
                from_client: !0,
                payload_source: c
            }
        }
        ;
        c.$4 = function(a, c, d) {
            b("Bootloader").loadModules(["ChatPinnedThreadsTypedLogger", "ChatPinnedThreadsEvent"], function(e, f) {
                new e().setEvent(c ? f.PIN_THREAD : f.UNPIN_THREAD).setIsWorkplace(b("CurrentUser").isWorkUser()).setThreadID(a).setEntryPoint(d).log()
            }, "MercuryThreadActions")
        }
        ;
        return a
    }();
    e.exports = a;
    var n = new (b("MercurySingletonProvider"))(a)
}
), null);
__d("MessageReactionMutationWebGraphQLMutation", ["WebGraphQLMutationBase"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        b.__getDocID = function() {
            return "1491398900900362"
        }
        ;
        b.getQueryID = function() {
            return "254517288326467"
        }
        ;
        return b
    }(b("WebGraphQLMutationBase"))
}
), null);
__d("ContextualLayerAutoFlipHorizontal", ["ContextualLayerAutoFlip"], (function(a, b, c, d, e, f) {
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        var c = b.prototype;
        c.getValidPositions = function(a) {
            return [a.getPosition()]
        }
        ;
        return b
    }(b("ContextualLayerAutoFlip"));
    e.exports = a
}
), null);
__d("MessengerReactionsContextualDialog.react", ["cx", "AccessibleLayer", "ContextualLayerAutoFlipHorizontal", "ContextualLayerHideOnScrollOut", "ContextualLayerUpdateOnScroll", "LayerHideOnEscape", "ReactAbstractContextualDialog", "ReactLayer"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = b("ReactLayer").createClass(b("ReactAbstractContextualDialog").createSpec({
        addedBehaviors: [b("ContextualLayerAutoFlipHorizontal"), b("ContextualLayerHideOnScrollOut"), b("ContextualLayerUpdateOnScroll"), b("LayerHideOnEscape"), b("AccessibleLayer")],
        displayName: "MessengerReactionsContextualDialog",
        shouldSetARIAProperties: !1,
        theme: {
            wrapperClassName: "_4owc"
        }
    }));
    c = a;
    e.exports = c
}
), null);
__d("MessengerReactionsFlyoutButtonBootloader.react", ["AutoFocusableLink.react", "JSResource", "React", "lazyLoadComponent"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React")
      , h = b("lazyLoadComponent")(b("JSResource")("MessengerReactionsFlyoutButton.react").__setRef("MessengerReactionsFlyoutButtonBootloader.react"));
    function a(a) {
        var c = g.jsx(g.Suspense, {
            fallback: g.jsx(b("AutoFocusableLink.react"), {
                label: "flyout button",
                className: a.iconClassName
            }),
            children: g.jsx(h, babelHelpers["extends"]({}, a, {
                className: a.iconClassName
            }))
        });
        return g.jsxs("li", {
            className: a.interactionClassName,
            children: [" ", c, " "]
        })
    }
}
), null);
__d("MessengerReactionNames", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        LOVE: "love",
        HAHA: "haha",
        WOW: "wow",
        SAD: "sad",
        ANGRY: "angry",
        THUMBSUP: "thumbsup",
        THUMBSDOWN: "thumbsdown"
    });
    e.exports = a
}
), null);
__d("MessengerReactionsUtil.bs", ["gkx", "bs_js_dict", "bs_caml_obj", "EmojiFormat.bs", "MessengerReactionNames"], (function(a, b, c, d, e, f) {
    "use strict";
    c = b("gkx")("1333897") ? 10084 : 128525;
    d = b("gkx")("1536285") ? [{
        name: b("MessengerReactionNames").THUMBSUP,
        emojis: [128077]
    }, {
        name: b("MessengerReactionNames").LOVE,
        emojis: [10084]
    }, {
        name: b("MessengerReactionNames").HAHA,
        emojis: [128518]
    }, {
        name: b("MessengerReactionNames").WOW,
        emojis: [128558]
    }, {
        name: b("MessengerReactionNames").SAD,
        emojis: [128546]
    }, {
        name: b("MessengerReactionNames").ANGRY,
        emojis: [128544]
    }] : [{
        name: b("MessengerReactionNames").LOVE,
        emojis: [c]
    }, {
        name: b("MessengerReactionNames").HAHA,
        emojis: [128518]
    }, {
        name: b("MessengerReactionNames").WOW,
        emojis: [128558]
    }, {
        name: b("MessengerReactionNames").SAD,
        emojis: [128546]
    }, {
        name: b("MessengerReactionNames").ANGRY,
        emojis: [128544]
    }, {
        name: b("MessengerReactionNames").THUMBSUP,
        emojis: [128077]
    }, {
        name: b("MessengerReactionNames").THUMBSDOWN,
        emojis: [128078]
    }];
    var g = {};
    d.forEach(function(a, c) {
        g[b("EmojiFormat.bs").codeArrayToUnicode(a.emojis)] = c + 1 | 0;
        return 0
    });
    function a(a, c) {
        a = b("bs_js_dict").get(g, a);
        c = b("bs_js_dict").get(g, c);
        if (a !== void 0)
            if (c !== void 0)
                return a - c | 0;
            else
                return -1;
        else if (c !== void 0)
            return 1;
        else
            return 0
    }
    e = d.map(function(a) {
        return b("EmojiFormat.bs").codeArrayToUnicode(a.emojis)
    });
    var h = d.map(function(a) {
        var c = a.name;
        return b("EmojiFormat.bs").codeArrayToUnicode(b("bs_caml_obj").caml_equal(c, b("MessengerReactionNames").LOVE) ? [128151] : a.emojis)
    })
      , i = d.findIndex(function(a) {
        return a.name === b("MessengerReactionNames").LOVE
    })
      , j = 128151;
    f.loveEmojiCode = c;
    f.growingHeartEmojiCode = j;
    f.reactionsSortOrder = d;
    f.orderMap = g;
    f.sortFunction = a;
    f.defaultReactions = e;
    f.solidReactions = h;
    f.loveEmojiIndex = i
}
), null);
__d("MessengerReactionsUtil.re", ["bs_curry", "MessengerReactionsUtil.bs"], (function(a, b, c, d, e, f) {
    c = (a = b("MessengerReactionsUtil.bs")).reactionsSortOrder;
    f.reactionsSortOrder = c;
    d = function(a, c) {
        a = b("bs_curry")._2(b("MessengerReactionsUtil.bs").sortFunction, a, c);
        return a
    }
    ;
    f.sortFunction = d;
    e = a.defaultReactions;
    f.defaultReactions = e;
    c = a.solidReactions;
    f.solidReactions = c;
    d = a.loveEmojiIndex;
    f.loveEmojiIndex = d
}
), null);
__d("MessengerViewer", ["CurrentUser", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext(b("CurrentUser").getID());
    e.exports = c
}
), null);
__d("getThreadTypeNameFromThreadType", ["MessagingThreadType"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        for (var c in b("MessagingThreadType"))
            if (b("MessagingThreadType")[c] === a)
                return c;
        return ""
    }
}
), null);
__d("MessengerReactionsMenu.react", ["cx", "fbt", "DOMContainer.react", "EmojiFormat.re", "Keys", "MercuryIDs", "MercuryThreadActions", "MessageReactionMutationWebGraphQLMutation", "MessengerMessageActionsTypedLogger", "LongpressHook.re", "MessengerReactionsContextualDialog.react", "MessengerReactionsFlyoutButtonBootloader.react", "MessengerReactionStaticEmoji.react", "MessengerReactionsUtil.re", "MessengerState.re", "MessengerSupportedEmojiUtils", "MessengerViewer", "React", "XAsyncRequest", "emptyFunction", "getThreadTypeNameFromThreadType", "objectValues", "qex"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("MercuryThreadActions").get()
      , j = b("React")
      , k = function(a) {
        var b = a.reaction
          , c = a.isCurrent;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["reaction", "isCurrent"]);
        return j.jsx("span", babelHelpers["extends"]({
            role: "option",
            tabIndex: "0",
            className: "_1z8r" + (c ? " _5-2b" : ""),
            "aria-selected": c,
            "aria-label": b,
            id: b
        }, a))
    }
      , l = function(a) {
        var c = a.onClick
          , d = a.onLongPress;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["onClick", "onLongPress"]);
        c = b("LongpressHook.re").useLongPress({
            onClick: c,
            onLongPress: d,
            ms: 750
        });
        d = c[0];
        var e = c[1];
        c = c[2];
        return j.jsx(k, babelHelpers["extends"]({
            onTouchStart: d,
            onMouseDown: d,
            onMouseUp: e,
            onTouchEnd: e,
            onMouseLeave: c
        }, a))
    };
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.state = {
                animations: {},
                reactions: b("MessengerReactionsUtil.re").defaultReactions.map(function(a) {
                    return {
                        name: a
                    }
                })
            },
            d.$6 = function() {
                d.props.setUseSolidReaction && d.props.setUseSolidReaction(!!d.props.isSolidReaction)
            }
            ,
            d.$4 = function(a) {
                a || d.props.onHide()
            }
            ,
            d.$7 = function(a) {
                return function(c) {
                    c = c.charCode;
                    c === b("Keys").RETURN && d.$5(a)
                }
            }
            ,
            d.$10 = function(a) {
                d.$5(b("EmojiFormat.re").codeArrayToUnicode(a))
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            this.$2()
        }
        ;
        d.UNSAFE_componentWillReceiveProps = function() {
            this.$2()
        }
        ;
        d.componentWillUnmount = function() {
            b("objectValues")(this.state.animations).forEach(function(a) {
                a.renderer && typeof a.renderer.pause === "function" && a.renderer.pause()
            }),
            this.$1 && this.$1.cancel()
        }
        ;
        d.$2 = function() {
            var a = b("MessengerState.re").getThreadMetaNow(this.context, this.props.message.thread_id);
            a = a == null ? void 0 : a.reactions;
            if (a) {
                this.setState({
                    reactions: a.map(function(a) {
                        return {
                            name: a.reactionEmoji,
                            uri: a.staticAssetUri
                        }
                    })
                });
                return
            }
            a = this.$3().slice();
            var c = this.props.message.reactions;
            c = c && c[this.context];
            b("qex")._("705431") && c != null && c != "" && !a.includes(c) && a.push(c);
            this.setState({
                reactions: a.map(function(a) {
                    return {
                        name: a
                    }
                })
            })
        }
        ;
        d.render = function() {
            var a = this
              , c = this.context
              , d = this.props.message.reactions && this.props.message.reactions[c];
            c = b("MessengerState.re").getThreadMetaNow(this.context, this.props.message.thread_id);
            var e = (c == null ? void 0 : c.theme_id) || "";
            return j.jsx(b("MessengerReactionsContextualDialog.react"), {
                alignment: "center",
                contextRef: this.props.refProp,
                "data-testid": void 0,
                shown: !0,
                onBlur: this.props.onHide,
                onToggle: this.$4,
                children: j.jsxs("div", {
                    role: "listbox",
                    "aria-orientation": "horizontal",
                    className: "_1z8q _fy2",
                    children: [this.state.reactions.map(function(c, f) {
                        var g = c.name
                          , h = e + g
                          , i = a.$3().includes(g)
                          , m = function() {
                            return a.$5(g)
                        };
                        f = !!(f === b("MessengerReactionsUtil.re").loveEmojiIndex && b("qex")._("1415783"));
                        h = a.state.animations[h] ? j.jsx(b("DOMContainer.react"), {
                            children: a.state.animations[h].element
                        }) : j.jsx(b("MessengerReactionStaticEmoji.react"), {
                            reaction: g,
                            isDefaultReaction: i,
                            uri: c.uri
                        });
                        return f ? j.jsx(l, {
                            reaction: g,
                            isCurrent: g === d,
                            onClick: m,
                            onLongPress: a.$6,
                            onKeyPress: a.$7(g),
                            children: h
                        }, g) : j.jsx(k, {
                            reaction: g,
                            isCurrent: g === d,
                            onClick: m,
                            onKeyPress: a.$7(g),
                            children: h
                        }, g)
                    }), this.$8()]
                })
            })
        }
        ;
        d.$3 = function() {
            return this.props.isSolidReaction === !0 ? b("MessengerReactionsUtil.re").solidReactions : b("MessengerReactionsUtil.re").defaultReactions
        }
        ;
        d.$9 = function(a) {
            return !this.$3().includes(a) ? b("MessengerSupportedEmojiUtils").getSupportedEmojiKey(a) : a
        }
        ;
        d.$8 = function() {
            var a = this.props.message
              , c = {
                onSelect: this.$10,
                getInput: b("emptyFunction")
            };
            a = a.thread_id;
            var d = this.state.reactions.length !== b("MessengerReactionsUtil.re").defaultReactions.length;
            return b("qex")._("705431") && !d ? j.jsx(b("MessengerReactionsFlyoutButtonBootloader.react"), {
                contextRef: this.props.refProp,
                dialogProps: {
                    offsetX: 140,
                    offsetY: 53
                },
                flyoutAlignment: "right",
                flyoutProps: c,
                iconClassName: "_70b-",
                interactionClassName: "_1z8r",
                threadID: a,
                title: h._("Ch\u1ecdn bi\u1ec3u t\u01b0\u1ee3ng c\u1ea3m x\u00fac")
            }, "emojireact") : null
        }
        ;
        d.$11 = function() {
            i.markRead(this.props.message.thread_id),
            i.markSeen(this.props.message.thread_id)
        }
        ;
        d.$5 = function(a) {
            var c = this
              , d = this.props
              , e = d.message
              , f = d.entryPoint
              , g = this.context
              , h = e.reactions && e.reactions[g]
              , i = b("MessengerState.re").getServerMessageID(g, e.message_id);
            d = b("MessageReactionMutationWebGraphQLMutation").getURI({
                action: a === h ? "REMOVE_REACTION" : "ADD_REACTION",
                message_id: i,
                actor_id: g,
                reaction: a
            });
            var j = function(d) {
                var j = e.other_user_fbid || e.thread_fbid
                  , k = b("MessengerState.re").getThreadMetaNow(g, e.thread_id)
                  , l = k && k.participants ? k.participants.length : 0;
                k = b("getThreadTypeNameFromThreadType")(k && k.thread_type);
                var m = e.attachments[0];
                l = new (b("MessengerMessageActionsTypedLogger"))().setAction("reaction").setOfflineThreadid(e.offline_threading_id).setMid(i).setRecipientID(b("MercuryIDs").getUserIDFromParticipantID(e.author)).setEntryPoint(f).setReaction(c.$9(a)).setPreviousReaction(c.$9(h)).setGroupSize(l).setThreadType(k).setThreadid(j);
                d.errorSummary != null && (l = l.setErrorText(d.errorSummary.toString()));
                m != null && (l = l.setMessageType(m.attach_type));
                l.log();
                c.$11()
            };
            new (b("XAsyncRequest"))(d).setMethod("POST").setHandler(j).send();
            this.props.onHide()
        }
        ;
        return c
    }(j.Component);
    e.exports = a;
    a.contextType = b("MessengerViewer")
}
), null);
__d("WorkChatRedesignedMessageListCheck.bs", ["gkx", "CurrentUser", "MessengerEnvironment"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("gkx")("895574") && b("CurrentUser").isWorkUser() && b("MessengerEnvironment").messengerui;
    f.enabled = a
}
), null);
__d("WorkChatRedesignedMessageListCheck.re", ["WorkChatRedesignedMessageListCheck.bs"], (function(a, b, c, d, e, f) {
    a = b("WorkChatRedesignedMessageListCheck.bs").enabled;
    f.enabled = a
}
), null);
__d("MessengerReactionsPrompt.react", ["cssVar", "cx", "fbt", "ix", "ChatOptions", "ChatSidebarDropdownConstants", "CurrentUser", "Image.react", "MessengerDotComAndInboxM4Check.re", "MessengerReactIconSVGM4React.re", "MessengerReactionsMenu.react", "React", "WorkChatRedesignedMessageListCheck.re", "asset", "tooltipPropsFor"], (function(a, b, c, d, e, f, g, h, i, j) {
    "use strict";
    var k = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.state = {
                hover: !1,
                open: !1
            },
            c.$3 = function(a) {
                c.props.onReactionSwap && (c.props.onReactionSwap(a),
                c.$4())
            }
            ,
            c.$2 = function(a) {
                a.stopPropagation(),
                c.setState({
                    open: !0
                }, function() {
                    return c.props.onShowMenu && c.props.onShowMenu(c.state.open)
                }),
                c.props.setReactionsPromptShown && c.props.setReactionsPromptShown(!0)
            }
            ,
            c.$4 = function() {
                c.setState({
                    open: !1
                }, function() {
                    return c.props.onShowMenu && c.props.onShowMenu(c.state.open)
                }),
                c.props.setReactionsPromptShown && c.props.setReactionsPromptShown(!1)
            }
            ,
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.render = function() {
            var a = this;
            if (this.props.isActive !== !0 && !this.state.open)
                return null;
            var c = null;
            if (this.props.isEdit === !0 && b("WorkChatRedesignedMessageListCheck.re").enabled) {
                var d = this.state.hover || this.state.open ? j("559624") : j("559623");
                c = k.jsx(b("Image.react"), {
                    src: d
                })
            } else if (b("WorkChatRedesignedMessageListCheck.re").enabled) {
                d = this.state.hover || this.state.open ? j("895450") : j("895449");
                c = k.jsx(b("Image.react"), {
                    src: d
                })
            } else if (this.props.isQuickAdd) {
                d = j("278123");
                c = k.jsx(b("Image.react"), {
                    src: d
                })
            } else if (b("CurrentUser").isWorkUser()) {
                d = this.state.open ? j("559649") : j("559648");
                c = k.jsx(b("Image.react"), {
                    src: d
                })
            } else if (b("MessengerDotComAndInboxM4Check.re").yes)
                c = b("MessengerReactIconSVGM4React.re").make(this.state.hover ? "black" : "rgba(0, 0, 0, 0.34)");
            else {
                d = this.state.open ? j("559646") : j("559647");
                c = k.jsx(b("Image.react"), {
                    src: d
                })
            }
            d = i._("B\u00e0y t\u1ecf c\u1ea3m x\u00fac");
            var e = b("tooltipPropsFor")(d, "above", b("WorkChatRedesignedMessageListCheck.re").enabled ? "right" : "center");
            return k.jsxs("button", babelHelpers["extends"]({}, e, {
                className: "_8sop" + (this.props.isQuickAdd ? "" : " _5zvq") + (b("MessengerDotComAndInboxM4Check.re").yes && !this.props.isQuickAdd ? " _7i2o" : "") + (this.props.isQuickAdd ? " _yav" : ""),
                onClick: this.state.open ? this.$1 : this.$2,
                onMouseEnter: function(b) {
                    return a.setState({
                        hover: !0
                    })
                },
                onMouseLeave: function(b) {
                    return a.setState({
                        hover: !1
                    })
                },
                "aria-hidden": "true",
                tabIndex: -1,
                "aria-label": d,
                "data-testid": void 0,
                ref: "button",
                children: [c, this.renderMenu()]
            }))
        }
        ;
        d.renderMenu = function() {
            var a = this;
            return !this.state.open ? null : k.jsx(b("MessengerReactionsMenu.react"), {
                entryPoint: "awareness_plus",
                setUseSolidReaction: this.props.onReactionSwap && this.$3,
                isSolidReaction: b("ChatOptions").getSetting(b("ChatSidebarDropdownConstants").SOLID_REACTION),
                message: this.props.message,
                onHide: this.$4,
                refProp: function() {
                    return a.refs.button
                }
            })
        }
        ;
        d.$1 = function(a) {
            a.stopPropagation()
        }
        ;
        return c
    }(k.Component);
    e.exports = a
}
), null);
__d("MessengerReactions.react", ["cx", "fbt", "Bootloader", "CurrentUser", "MercuryConfig", "MercuryIDs", "MessengerEnvironment", "MessengerParticipants.bs", "MessengerReactionsPrompt.react", "MessengerReactionStaticEmoji.react", "MessengerReactionsUtil.bs", "MessengerState.re", "MessengerWebViewReactionsTypedLogger", "React", "ShimButton.react", "TooltipData", "WorkChatRedesignedMessageListCheck.re", "prop-types"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React")
      , j = "ALL"
      , k = b("CurrentUser").getID()
      , l = 3
      , m = 9;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.state = {
                reactionsPromptShown: !1
            },
            d.$1 = function(a) {
                d.setState({
                    reactionsPromptShown: a
                })
            }
            ,
            d.$3 = function() {
                var a = b("MessengerEnvironment").messengerui
                  , c = d.props
                  , e = c.isFromViewer
                  , f = c.message
                  , g = c.participants;
                c = f.reactions;
                new (b("MessengerWebViewReactionsTypedLogger"))().setEvent("open_details").setMid(f.message_id).setSenderID(f.author).setEmojiGroup(j).setEmojiGroupCount(Object.values(c).length).log();
                a ? b("Bootloader").loadModules(["MessengerDialogs.bs", "MessengerReactionsDialogReact.bs"], function(a, b) {
                    var c = b.jsComponent;
                    a.showDialog(function() {
                        return i.jsx(c, {
                            isFromViewer: e,
                            participants: g,
                            message: f
                        })
                    })
                }, "MessengerReactions.react") : b("Bootloader").loadModules(["ChatReactionsDialog"], function(a) {
                    a.show(f, g, e)
                }, "MessengerReactions.react")
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props
              , c = a.message
              , d = a.participants
              , e = a.hovered;
            a = a.renderQuickAdd;
            var f = c.reactions
              , g = c.attachments
              , j = g && g.length === 1 && b("MercuryConfig").MNFWD && f && Object.keys(f).length === 0;
            if (j && g[0].attach_type === "sticker")
                return null;
            if (!this.state.reactionsPromptShown && !e && j && g[0].attach_type === "share")
                return null;
            if (g[0] && g[0].attach_type === "share" && !g[0].share)
                return null;
            if (((e = g[0]) != null ? (e = e.share) != null ? (e = e.style_list) != null ? e[0] : e : e : e) === "montage_direct")
                return null;
            if ((!f || !d) && !a)
                return null;
            var m = {}
              , n = 0;
            j = !1;
            Object.entries(f || {}).forEach(function(a) {
                var b = a[0];
                a = a[1];
                typeof a === "string" && (b === k && (j = !0),
                m[a] || (m[a] = 0),
                m[a]++,
                n++)
            });
            if (b("WorkChatRedesignedMessageListCheck.re").enabled && n === 0)
                return null;
            var o = (g = b("MessengerState.re").getThreadMetaNow(k, this.props.message.thread_id)) == null ? void 0 : g.reactions;
            e = Object.keys(m).sort(b("MessengerReactionsUtil.bs").sortFunction).slice(0, l).map(function(c, d, a) {
                var e, f = b("MessengerReactionsUtil.bs").defaultReactions.includes(c);
                e = o == null ? void 0 : (e = o.find(function(a) {
                    return a.reactionEmoji === c
                })) == null ? void 0 : e.staticAssetUri;
                return i.jsx("span", {
                    className: "_4kf5",
                    "data-testid": void 0,
                    style: {
                        zIndex: a.length - d,
                        marginLeft: d === 0 ? 0 : "-4px"
                    },
                    children: i.jsx(b("MessengerReactionStaticEmoji.react"), {
                        reaction: c,
                        isDefaultReaction: f,
                        uri: e
                    })
                }, c)
            });
            d = n > 0 ? i.jsx("span", {
                className: "_4kf5 _4kf6" + (j ? " _fy2" : ""),
                children: n
            }) : null;
            f = a && !j || b("WorkChatRedesignedMessageListCheck.re").enabled ? i.jsx("div", {
                className: "_aou _aov" + (b("WorkChatRedesignedMessageListCheck.re").enabled && j ? " _7w5w" : ""),
                children: i.jsx("span", {
                    className: "_aow",
                    children: i.jsx(b("MessengerReactionsPrompt.react"), {
                        message: c,
                        isActive: !0,
                        isEdit: j,
                        isQuickAdd: !0,
                        setReactionsPromptShown: this.$1
                    })
                })
            }) : null;
            g = b("TooltipData").propsFor(this.$2());
            return i.jsx("div", {
                className: "_8rnv preview",
                children: i.jsxs("div", babelHelpers["extends"]({}, b("WorkChatRedesignedMessageListCheck.re").enabled ? {} : g, {
                    className: "_7ef9",
                    children: [i.jsxs(b("ShimButton.react"), babelHelpers["extends"]({
                        "aria-label": h._("Xem c\u1ea3m x\u00fac v\u1ec1 tin nh\u1eafn")
                    }, b("WorkChatRedesignedMessageListCheck.re").enabled ? g : {}, {
                        className: "_aou",
                        onClick: this.$3,
                        children: [e, d]
                    })), f]
                }))
            })
        }
        ;
        d.$2 = function() {
            var a = this.props.message.reactions
              , c = this.props.participants;
            if (!a || !c)
                return "";
            a = Object.keys(a);
            var d = a.reduce(function(a, d) {
                if (a.length >= m + 1)
                    return a;
                d = b("MercuryIDs").getParticipantIDFromUserID(d);
                d = c.get(d) || b("MessengerParticipants.bs").getNow(d);
                d = d && d.name;
                d && a.push(d);
                return a
            }, [])
              , e = d.length
              , f = d.join("\n");
            if (a.length > e) {
                d.pop();
                e = h._("v\u00e0 {count} ng\u01b0\u1eddi kh\u00e1c", [h._param("count", a.length - d.length)]);
                f = d.join("\n") + "\n" + e.toString()
            }
            return f
        }
        ;
        return c
    }(i.Component);
    e.exports = a;
    a.propTypes = {
        isFromViewer: (c = b("prop-types")).bool.isRequired,
        message: c.object.isRequired,
        participants: c.object,
        renderQuickAdd: c.bool,
        hovered: c.bool
    }
}
), null);
__d("MessengerDecorator", ["cx", "BootloadedComponent.react", "BootloaderResource", "CurrentUser", "FantaMessageActions", "JSResource", "MercuryConfig", "MessageReplyPermissions", "MessagingTag", "MessengerDecoratorUtil", "MessengerEnvironment", "MessengerReactions.react", "MessengerState.re", "QE2Logger", "React", "WorkChatRedesignedMessageListCheck.re", "gkx", "isMessengerMessageRemoved", "lazyLoadComponent", "nullthrows", "requireCond", "cr:1415252", "cr:1415253"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.getBeforeDecorators = a;
    f.getAfterDecorators = c;
    f.getInnerDecorators = d;
    var h = b("React")
      , i = (e = b("lazyLoadComponent"))((g = b("JSResource"))("MessengerMessageActionItemList").__setRef("MessengerDecorator"))
      , j = e(g("MessengerRemovedTombstoneActionItemList").__setRef("MessengerDecorator"))
      , k = e(g("MessengerSavedMessageActionItemList").__setRef("MessengerDecorator"))
      , l = e(g("WorkChatMessageSavedDecorator.react").__setRef("MessengerDecorator"))
      , m = e(g("WorkChatMessageSaveAction.react").__setRef("MessengerDecorator"))
      , n = [{
        name: "Saved",
        check: function(a, c) {
            return b("gkx")("843916") && a.tags != null && a.tags.includes("message:save")
        },
        render: function(a, b, c, d) {
            return h.jsx(h.Suspense, {
                fallback: h.jsx("div", {}),
                children: h.jsx(l, {})
            }, "saved:" + a.message_id)
        },
        getAdditionalClassNames: function() {
            return "_5z-5"
        }
    }, {
        name: "Pinned",
        check: function(a, c) {
            if (!b("CurrentUser").isWorkUser())
                return !1;
            c = a.thread_id;
            if (c == null || b("cr:1415253") == null)
                return !1;
            c = b("MessengerState.re").getThreadMetaNow(b("CurrentUser").getID(), c);
            return c == null || c.thread_fbid == null ? !1 : b("cr:1415253").isMessagePinned(a, c)
        },
        render: function(a, c, d, e) {
            d = (c = b("nullthrows"))(b("cr:1415252"));
            e = c(a.thread_id);
            e = c(b("MessengerState.re").getThreadMetaNow(b("CurrentUser").getID(), e));
            c = c(e.thread_fbid);
            return h.jsx(h.Suspense, {
                fallback: h.jsx("div", {}),
                children: h.jsx(d, {
                    messageID: a.message_id,
                    thread: e,
                    threadFBID: c
                })
            }, "pinned:" + a.message_id)
        },
        getAdditionalClassNames: function() {
            return "_5z-5"
        }
    }, {
        name: "Reactions",
        check: function(a, c) {
            if (b("MessengerDecoratorUtil").isMontageDirect(a) || b("MessengerDecoratorUtil").isMontageShare(a) || b("MessengerDecoratorUtil").isAdminLayoutType(a))
                return !1;
            var d = !!(a.reactions && Object.keys(a.reactions).length > 0);
            b("QE2Logger").logExposureForUser("messenger_growth_www_share_flow");
            c = !!(!c && (b("WorkChatRedesignedMessageListCheck.re").enabled || b("MessengerDecoratorUtil").allowForward(a) || b("MessengerDecoratorUtil").isAttachment(a) && b("MercuryConfig").MNFWD));
            return (d || c) && !b("MessengerDecoratorUtil").hasLWA(a) && !b("MessengerDecoratorUtil").isWECMessage(a)
        },
        render: function(a, c, d, e) {
            var f = b("MessengerDecoratorUtil").allowForward(a) || b("MessengerDecoratorUtil").isAttachment(a) && b("MercuryConfig").MNFWD;
            return h.jsx(b("MessengerReactions.react"), {
                isFromViewer: c,
                message: a,
                renderQuickAdd: f && !c,
                hovered: e,
                participants: d && d.participants
            }, a.message_id + "-reactions")
        },
        getAdditionalClassNames: function() {
            return "_5z-5"
        }
    }]
      , o = [{
        name: "MontageReply",
        check: function(a) {
            if (!b("MercuryConfig").MontageThreadViewer || b("MessengerDecoratorUtil").isAdminLayoutType(a))
                return !1;
            a = a.montage_reply_data && a.montage_reply_data.message_id;
            return !!a
        },
        render: function(a, c, d) {
            d = a.montage_reply_data && a.montage_reply_data.message_id;
            var e = a.montage_reply_data && a.montage_reply_data.reply_action
              , f = a.montage_reply_data && a.montage_reply_data.snippet;
            return h.jsx(b("BootloadedComponent.react"), {
                bootloadPlaceholder: h.jsx("div", {}),
                bootloadLoader: b("gkx")("1031642") ? b("JSResource")("MercuryMontageReplyStoryQueryContainer.react").__setRef("MessengerDecorator") : b("JSResource")("MontageReplyDecoratorContainer.react").__setRef("MessengerDecorator"),
                isFromViewer: c,
                messageID: d,
                replyAction: e,
                replyAuthorID: a.author,
                replySnippet: f,
                threadID: a.thread_id
            }, "montagereply:" + a.message_id)
        },
        getAdditionalClassNames: function() {
            return null
        }
    }, {
        name: "MessageReply",
        check: function(a) {
            return !a.replied_to_message || b("MessengerDecoratorUtil").isAdminLayoutType(a) ? !1 : b("gkx")("678600") || b("MercuryConfig").M3CRE
        },
        render: function(a, c, d) {
            return h.jsx(b("BootloadedComponent.react"), {
                bootloadPlaceholder: h.jsx("div", {}),
                bootloadLoader: b("JSResource")("MessageReplyDecoratorContainer.react").__setRef("MessengerDecorator"),
                isFromViewer: c,
                authorID: a.author,
                repliedToMessage: a.replied_to_message,
                threadID: a.thread_id,
                scrollToRepliedMessage: d && d.scrollToRepliedMessage,
                customColor: d && d.customColor,
                gradientColors: d && d.gradientColors,
                solidColor: d && d.solidColor,
                nicknames: d && d.nicknames,
                messageBody: a.body
            }, "messagereply:" + a.message_id)
        },
        getAdditionalClassNames: function() {
            return null
        }
    }, {
        name: "MessageForward",
        check: function(a) {
            return !b("MessengerEnvironment").messengerui || !a.is_forwarded || b("MessengerDecoratorUtil").isAdminLayoutType(a) ? !1 : b("gkx")("974812")
        },
        render: function(a, c, d) {
            var e = a.attachments.length > 0 ? a.attachments[0].attach_type : "unknown";
            return h.jsx(b("BootloadedComponent.react"), {
                bootloadPlaceholder: h.jsx("div", {}),
                bootloadLoader: b("JSResource")("MessengerForwardDecoratorContainer.react").__setRef("MessengerDecorator"),
                isFromViewer: c,
                authorID: a.author,
                threadID: a.thread_id,
                customColor: d && d.customColor,
                messageBody: a.body,
                attachmentType: e
            }, "messageforward:" + a.message_id)
        },
        getAdditionalClassNames: function() {
            return null
        }
    }]
      , p = [{
        name: "ForwardImages",
        isAlwaysVisible: !0,
        check: function(a) {
            return b("MessengerDecoratorUtil").allowForward(a)
        },
        render: function(a, c) {
            var d = b("MessengerDecoratorUtil").getAttachments(a)
              , e = d.ids;
            d = d.types;
            return h.jsx(b("BootloadedComponent.react"), {
                bootloadPlaceholder: h.jsx("div", {}),
                bootloadLoader: b("MessengerEnvironment").messengerui ? b("JSResource")("MessengerPhotoForwardButton.react").__setRef("MessengerDecorator") : b("JSResource")("ChatPhotoForwardButton.react").__setRef("MessengerDecorator"),
                attachmentIDs: e,
                attachmentTypes: d,
                isFromViewer: c
            }, "forwardimages:" + a.message_id)
        },
        getAdditionalClassNames: function() {
            return "_ylc"
        }
    }, {
        name: "ReactionPrompt",
        check: function(a) {
            return b("MessengerDecoratorUtil").isMontageDirect(a) || b("MessengerDecoratorUtil").isMontageShare(a) || b("isMessengerMessageRemoved")(a) || b("MessengerDecoratorUtil").isAdminLayoutType(a) ? !1 : !b("MessengerDecoratorUtil").allowForward(a) && !b("MessengerDecoratorUtil").hasLWA(a)
        },
        render: function(a, c, d) {
            c = b("MercuryConfig").MNFWD && b("MessengerDecoratorUtil").isAttachment(a);
            return h.jsx(b("BootloadedComponent.react"), {
                bootloadPlaceholder: h.jsx("div", {}),
                bootloadLoader: b("JSResource")("MessengerReactionsPrompt.react").__setRef("MessengerDecorator"),
                message: a,
                isActive: !c && (!a.folder || a.folder === b("MessagingTag").INBOX),
                onReactionSwap: d && d.onReactionSwap,
                onShowMenu: d && d.onShowMenu
            }, "reactionprompt:" + a.message_id)
        },
        getAdditionalClassNames: function() {
            return null
        }
    }, {
        name: "MessengerSaveAction",
        check: function(a) {
            return b("MessengerDecoratorUtil").allowSave(a)
        },
        render: function(a) {
            return h.jsx(h.Suspense, {
                fallback: h.jsx("div", {}),
                children: h.jsx(m, {
                    isActive: !b("isMessengerMessageRemoved")(a),
                    message: a
                })
            }, "messagesaveicon:" + a.message_id)
        },
        getAdditionalClassNames: function() {
            return null
        }
    }, {
        name: "MessengerUIReplyAction",
        check: function(a) {
            if (b("MessengerDecoratorUtil").isMontageShare(a))
                return !1;
            return b("MessageReplyPermissions").canReplyToMessage(a) ? b("MessengerEnvironment").messengerui : !1
        },
        render: function(a, c, d) {
            return h.jsx(b("BootloadedComponent.react"), {
                bootloadPlaceholder: h.jsx("div", {}),
                bootloadLoader: b("JSResource")("MessengerMessageReplyAction.react").__setRef("MessengerDecorator"),
                message: a,
                onReplyToMessage: d && d.onReplyToMessage
            }, "messagereplyaction:" + a.message_id)
        },
        getAdditionalClassNames: function() {
            return null
        }
    }, {
        name: "MessageActions",
        check: function(a) {
            return b("MessengerDecoratorUtil").isMontageDirect(a) || b("MessengerDecoratorUtil").isMontageShare(a) || b("MessengerDecoratorUtil").isAdminLayoutType(a) ? !1 : !0
        },
        render: function(a, c, d) {
            var e = b("MessengerDecoratorUtil").isMontageDirect(a) || b("MessengerDecoratorUtil").isMontageShare(a) ? !1 : (b("MessengerDecoratorUtil").allowForward(a) || b("MessengerDecoratorUtil").isAttachment(a) && b("MercuryConfig").MNFWD) && !b("MessengerDecoratorUtil").hasLWA(a)
              , f = b("MessengerEnvironment").messengerui || (d == null ? void 0 : d.onReplyToMessage) != null ? d == null ? void 0 : d.onReplyToMessage : function() {
                return b("FantaMessageActions").replyToMessage(a, a.thread_id)
            }
            ;
            b("BootloaderResource").preload(b("JSResource")("MessengerMessageActionItemList").__setRef("MessengerDecorator"));
            b("BootloaderResource").preload(b("JSResource")("MessengerRemovedTombstoneActionItemList").__setRef("MessengerDecorator"));
            b("BootloaderResource").preload(b("JSResource")("MessengerSavedMessageActionItemList").__setRef("MessengerDecorator"));
            return h.jsx(b("BootloadedComponent.react"), {
                bootloadPlaceholder: h.jsx("div", {}),
                bootloadLoader: b("JSResource")("MessengerMessageActions.react").__setRef("MessengerDecorator"),
                message: a,
                isActive: !0,
                onShowMenu: d && d.onShowMenu,
                isFromViewer: c,
                includeReactions: e,
                isShowingOriginal: d && d.isShowingOriginal,
                hasFormatting: d && d.hasFormatting,
                onToggleOriginal: d && d.handleToggleOriginal,
                onReplyToMessage: f,
                isSavedView: d && d.isSavedView,
                renderActionItems: function(g) {
                    var l = g.closeActionList;
                    g = g.openReactionsPopover;
                    if (d == null ? void 0 : d.isSavedView)
                        return h.jsx(h.Suspense, {
                            fallback: h.jsx("div", {}),
                            children: h.jsx(k, {
                                closeActionList: l
                            })
                        }, "MessengerSavedMessageActionItemList");
                    else if (b("isMessengerMessageRemoved")(a))
                        return h.jsx(h.Suspense, {
                            fallback: h.jsx("div", {}),
                            children: h.jsx(j, {
                                closeActionList: l,
                                isFromViewer: c,
                                message: a
                            })
                        }, "MessengerRemovedTombstoneActionItemList");
                    else
                        return h.jsx(h.Suspense, {
                            fallback: h.jsx("div", {}),
                            children: h.jsx(i, {
                                closeActionList: l,
                                hasFormatting: d && d.hasFormatting,
                                includeReactions: e,
                                isFromViewer: c,
                                isShowingOriginal: d && d.isShowingOriginal,
                                message: a,
                                onReplyToMessage: f,
                                onToggleOriginal: d && d.handleToggleOriginal,
                                openReactionsPopover: g
                            })
                        }, "MessengerMessageActionItemList")
                }
            }, "messageactions:" + a.message_id)
        },
        getAdditionalClassNames: function() {
            return null
        }
    }];
    function a() {
        return o
    }
    function c() {
        return n
    }
    function d() {
        return p
    }
}
), null);
__d("MessengerDecoratorHideable.react", ["cx", "React", "gkx"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a(a) {
        var c = a.isActive;
        a = a.children;
        var d = b("gkx")("1221668");
        return h.jsx("span", {
            className: (!Boolean(c) && !d ? "_8sow" : "") + (!Boolean(c) && d ? " _8tab" : ""),
            children: a
        })
    }
}
), null);
__d("MessengerInnerDecorators.react", ["cx", "Locale", "MessengerDecorator", "MessengerDecoratorHideable.react", "MessengerDotComAndInboxM4Check.bs", "React", "WorkChatRedesignedMessageListCheck.re", "joinClasses"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.state = {
                shown: !1
            },
            c.$1 = function(a) {
                c.setState({
                    shown: a
                })
            }
            ,
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.render = function() {
            var a = this
              , c = this.props.decorators || b("MessengerDecorator").getInnerDecorators();
            if (this.props.isSavedView === !0)
                return null;
            c = c.map(function(c) {
                return c.check(a.props.message) ? h.jsx(b("MessengerDecoratorHideable.react"), {
                    isActive: a.state.shown || c.isAlwaysVisible || a.props.hovered,
                    children: c.render(a.props.message, a.props.isFromViewer, babelHelpers["extends"]({}, a.props.messageProps, {
                        onReactionSwap: a.props.onReactionSwap,
                        messageIsSelected: a.props.hovered || a.state.shown,
                        onShowMenu: a.$1,
                        isSavedView: !1
                    }))
                }, c.name) : null
            }).filter(Boolean);
            return h.jsx("span", {
                className: (b("WorkChatRedesignedMessageListCheck.re").enabled ? "" : "_40fu") + (b("Locale").isRTL() || this.props.forGameChat ? " _64wc" : ""),
                "data-hover": "none",
                children: h.jsx("span", {
                    className: b("joinClasses")(this.props.className, "_2u_d" + (b("MessengerDotComAndInboxM4Check.bs").yes ? " _7i2j" : "")),
                    children: c
                })
            })
        }
        ;
        return c
    }(h.Component);
    e.exports = a
}
), null);
__d("MessengerFluxReduceDispatcher", ["ExplicitRegistrationReactDispatcher"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        return b
    }(b("ExplicitRegistrationReactDispatcher"));
    c = new a({
        strict: !1
    });
    e.exports = c
}
), null);
__d("MessengerVideoAutoplayActions", ["MessengerFluxReduceDispatcher", "keyMirror"], (function(a, b, c, d, e, f) {
    "use strict";
    f.onScroll = a;
    f.updateStore = c;
    f.deleteThread = d;
    f.deleteAllThreads = e;
    var g = "messenger_video";
    f.Namespace = g;
    var h = b("keyMirror")({
        DESTROY: null,
        DSTROY_ALL: null,
        SCROLL: null,
        UPDATE: null
    });
    f.Types = h;
    function a(a, c, d, e) {
        b("MessengerFluxReduceDispatcher").dispatch({
            type: h.SCROLL,
            namespace: g,
            threadID: a,
            messageIDs: c,
            messageRectMap: d,
            viewportRect: e
        })
    }
    function c(a, c) {
        b("MessengerFluxReduceDispatcher").dispatch({
            type: h.UPDATE,
            namespace: g,
            threadID: a,
            messageIDs: c
        })
    }
    function d(a) {
        b("MessengerFluxReduceDispatcher").dispatch({
            type: h.DESTROY,
            namespace: g,
            threadID: a
        })
    }
    function e() {
        b("MessengerFluxReduceDispatcher").dispatch({
            type: h.DESTROY_ALL,
            namespace: g
        })
    }
}
), null);
__d("MessengerVideoAutoplayStore", ["FluxReduceStore", "MessengerVideoAutoplayActions", "immutable", "MessengerFluxReduceDispatcher"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("MessengerVideoAutoplayActions").Types
      , h = function(b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
            return b.apply(this, arguments) || this
        }
        return a
    }(b("immutable").Record({
        currentVideoMessageID: null,
        lastVideoMessageID: null,
        messageIDs: null,
        videoVisibilityMap: null
    }));
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.getInitialState = function() {
            return b("immutable").Map()
        }
        ;
        d.reduce = function(a, c) {
            if (c.namespace !== b("MessengerVideoAutoplayActions").Namespace)
                return a;
            switch (c.type) {
            case g.SCROLL:
                c.messageIDs && (a = this.$MessengerVideoAutoplayStore1(a, c.threadID, c.messageIDs));
                return this.$MessengerVideoAutoplayStore2(a, c.threadID, c.messageRectMap, c.viewportRect);
            case g.UPDATE:
                return this.$MessengerVideoAutoplayStore1(a, c.threadID, c.messageIDs);
            case g.DESTROY:
                return this.$MessengerVideoAutoplayStore3(a, c.threadID);
            case g.DESTROY_ALL:
                return a.clear()
            }
            return a
        }
        ;
        d.$MessengerVideoAutoplayStore1 = function(a, b, c) {
            return !c ? a["delete"](b) : a.set(b, new h({
                currentVideoMessageID: null,
                lastVideoMessageID: c.first(),
                messageIDs: c,
                videoVisibilityMap: null
            }))
        }
        ;
        d.$MessengerVideoAutoplayStore3 = function(a, b) {
            return a["delete"](b)
        }
        ;
        d.$MessengerVideoAutoplayStore4 = function(a, b, c, d, e) {
            var f = this
              , g = null;
            c = c.map(function(a) {
                if (g)
                    return [a, !1];
                else {
                    var b = f.$MessengerVideoAutoplayStore5(a, d, e);
                    b && (g = a);
                    return [a, b]
                }
            }).fromEntrySeq().toOrderedMap();
            return a.mergeIn([b], {
                currentVideoMessageID: g,
                videoVisibilityMap: c
            })
        }
        ;
        d.$MessengerVideoAutoplayStore2 = function(a, b, c, d) {
            var e = a.getIn([b, "messageIDs"]);
            if (!e || !c || !d)
                return a;
            if (!a.getIn([b, "currentVideoMessageID"]))
                return this.$MessengerVideoAutoplayStore4(a, b, e, c, d);
            else {
                var f = a.getIn([b, "videoVisibilityMap"])
                  , g = a.getIn([b, "lastVideoMessageID"])
                  , h = a.getIn([b, "currentVideoMessageID"]);
                if (this.$MessengerVideoAutoplayStore5(g, c, d)) {
                    if (f && f.first())
                        return a
                } else if (this.$MessengerVideoAutoplayStore5(h, c, d))
                    return a;
                a = a.setIn([b, "currentVideoMessageID"], null);
                return this.$MessengerVideoAutoplayStore4(a, b, e, c, d)
            }
        }
        ;
        d.$MessengerVideoAutoplayStore6 = function(a, b) {
            return !a ? !1 : a.top > b.top && a.bottom < b.bottom
        }
        ;
        d.$MessengerVideoAutoplayStore5 = function(a, b, c) {
            b = b.get(a);
            return this.$MessengerVideoAutoplayStore6(b, c)
        }
        ;
        d.getVideoVisibilityMap = function(a) {
            return this.getState().getIn([a, "videoVisibilityMap"])
        }
        ;
        d.getMessageIDs = function(a) {
            return this.getState().getIn([a, "messageIDs"])
        }
        ;
        d.isVisible = function(a, b) {
            return !!this.getState().getIn([a, "videoVisibilityMap", b])
        }
        ;
        return c
    }(b("FluxReduceStore"));
    a.__moduleID = e.id;
    c = new a(b("MessengerFluxReduceDispatcher"));
    e.exports = c
}
), null);
__d("LazyWorkMultiCompanyChatTooltip.react", ["JSResource", "lazyLoadComponent", "react"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = g || b("react"), i = b("lazyLoadComponent")(b("JSResource")("WorkMultiCompanyChatTooltip.react").__setRef("LazyWorkMultiCompanyChatTooltip.react"));
    function a(a) {
        return h.jsx(h.Suspense, {
            fallback: a.children,
            children: h.jsx(i, {
                children: a.children
            })
        })
    }
}
), null);
__d("MercuryShareAttachmentRenderLocations", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.getValues = a;
    f.isPreview = b;
    var g = "chat";
    f.CHAT = g;
    var h = "chat_preview";
    f.CHAT_PREVIEW = h;
    var i = "ufi_composer";
    f.COMPOSER = i;
    var j = "messenger";
    f.MESSENGER = j;
    var k = "pages_inbox";
    f.PAGES_INBOX = k;
    function a() {
        return [g, h, i, j, k]
    }
    function b(a) {
        return a === h
    }
}
), null);
__d("MessengerLightweightActionUtils", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.isLWAAttachment = g;
    f.isLWAMessage = a;
    f.getCollapsedLWAText = b;
    f.getLWASnippetText = c;
    function g(a) {
        return !!(a && a.attach_type === "share" && a.share && a.share.target && a.share.target.lwa_type)
    }
    function a(a) {
        a = a == null ? void 0 : a.attachments;
        return !!(a && a.length === 1 && g(a[0]))
    }
    function b(a) {
        return a.attachments[0].share.title
    }
    function c(a) {
        return a[0].share.title
    }
}
), null);
__d("MercuryMessageGroup", ["MercuryAttachmentLayoutTypeHelper", "MercuryShareAttachmentRenderLocations", "MercuryThreadlistConstants", "MessengerLightweightActionUtils", "MessengerMessage.bs", "enumerate"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {
        calculateMessageGroups: function(a, c) {
            var d = []
              , e = null
              , f = {
                value: null
            };
            a = b("enumerate")(a);
            var h;
            while (!(h = a.next()).done) {
                var i = g.canAppendMessageToLastGroup(f.value, h.value, c);
                i || (e = [],
                d.push(e));
                e.push(h.value);
                f = h
            }
            return d
        },
        canAppendMessageToLastGroup: function(a, c, d) {
            var e = b("MercuryThreadlistConstants").GROUPING_THRESHOLD;
            if (!a || h(a, d) || h(c, d) || a.author != c.author || a.timestamp < c.timestamp - e || a.is_spoof_warning !== c.is_spoof_warning || a.page_admin_notes || c.replied_to_message || c.is_forwarded)
                return !1;
            d = b("MessengerMessage.bs").getPersona(a);
            e = b("MessengerMessage.bs").getPersona(c);
            return !d && !e ? !0 : d === null || e === null ? !1 : d.id === e.id
        }
    };
    function h(a, c) {
        var d = a.has_attachment;
        d && (c === b("MercuryShareAttachmentRenderLocations").MESSENGER || c === b("MercuryShareAttachmentRenderLocations").CHAT) && (d = i(a));
        return !!(b("MessengerLightweightActionUtils").isLWAMessage(a) || a.action_type == "ma-type:log-message" || d || a.html_body || a.body && a.body.length > b("MercuryThreadlistConstants").MAX_CHARS_BEFORE_BREAK)
    }
    function i(a) {
        a = a.attachments[0];
        return !a || a.attach_type === "sticker" || a.attach_type === "animated_image" || b("MercuryAttachmentLayoutTypeHelper").isAdminType(a)
    }
    e.exports = g
}
), null);
__d("MessengerDomIDs.bs", ["uniqueID"], (function(a, b, c, d, e, f) {
    "use strict";
    c = {
        COMPOSER_INPUT_DESCRIPTION: (a = b("uniqueID"))(),
        CONVERSATION: a(),
        MAIN_LABEL: a(),
        MUTE_DIALOG_TITLE: a(),
        THREAD_INFO_PANEL: a(),
        THREAD_TITLE: a()
    };
    f.ids = c
}
), null);
__d("MessengerParticipantUtils.bs", ["bs_belt_Set", "bs_caml_obj", "MercuryIDs"], (function(a, b, c, d, e, f) {
    "use strict";
    function g(a, c, d) {
        var e = b("MercuryIDs").getParticipantIDFromUserID(a);
        a = d.participants.filter(function(a) {
            return b("bs_caml_obj").caml_notequal(a, e)
        });
        return a.filter(function(a) {
            return b("bs_belt_Set").has(c, a)
        })
    }
    d = b("bs_belt_Set").has;
    function h(a, b, c) {
        if (c.is_canonical)
            return [];
        else
            return g(a, b, c)
    }
    function a(a, b, c) {
        return h(a, b, c).length > 0
    }
    function c(a, b, c) {
        return g(a, b, c).length > 0
    }
    f.findIntersection = g;
    f.has = d;
    f.participantsInGroupThread = h;
    f.areParticipantsInGroupThread = a;
    f.areParticipantsInThread = c
}
), null);
__d("MessengerPersistantViewerKeyedSubscriptionComponent.bs", ["bs_curry", "React", "bs_js_dict", "bs_caml_option", "CurrentUser", "RemoteAction.bs"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a) {
        var c = {
            contents: 0
        }
          , d = {}
          , e = function(a, c) {
            a = a !== void 0 ? b("bs_caml_option").valFromOption(a) : b("CurrentUser").getID();
            var e = b("bs_js_dict").get(d, a);
            if (e !== void 0)
                return b("RemoteAction.bs").send(e.remoteAction, c);
            else {
                e = f(a, void 0, 0);
                return b("RemoteAction.bs").send(e.remoteAction, c)
            }
        }
          , f = function(f, h, i) {
            i = h !== void 0 ? b("bs_caml_option").valFromOption(h) : b("RemoteAction.bs").create(0);
            var j = new Set()
              , k = {
                contents: b("bs_curry")._1(a.initialState, f)
            };
            b("RemoteAction.bs").subscribe(function(c) {
                var d = k.contents;
                k.contents = b("bs_curry")._2(a.reducer, c, d);
                if (k.contents !== d) {
                    j.forEach(function(a) {
                        return b("bs_curry")._1(a.fn, 0)
                    });
                    return 0
                } else
                    return 0
            }, i);
            h = function(a, d) {
                var e = g.useState(function() {
                    return k.contents
                })
                  , f = e[1]
                  , h = e[0]
                  , l = g.useCallback(function(c) {
                    if (a !== void 0)
                        if (b("bs_curry")._2(a, h, k.contents))
                            return b("bs_curry")._1(f, function(a) {
                                return k.contents
                            });
                        else
                            return 0;
                    else
                        return b("bs_curry")._1(f, function(a) {
                            return k.contents
                        })
                }, [a, h, k.contents]);
                g.useEffect(function() {
                    c.contents = c.contents + 1 | 0;
                    var a = c.contents
                      , d = {
                        id: a,
                        fn: l
                    };
                    j.add(d);
                    b("bs_curry")._1(l, 0);
                    return function(a) {
                        j["delete"](d);
                        return 0
                    }
                }, [l]);
                return b("bs_curry")._1(d, h)
            }
            ;
            i = {
                remoteAction: i,
                componentFunction: h
            };
            d[f] = i;
            var l = b("bs_caml_option").some(f);
            b("bs_curry")._2(a.onFirstMount, f, function(a) {
                return e(l, a)
            });
            return i
        }
          , h = function(a) {
            var c = a.shouldUpdate
              , e = a.remoteAction
              , g = a.fbid;
            a = a.children;
            g = g !== void 0 ? b("bs_caml_option").valFromOption(g) : b("CurrentUser").getID();
            var h = b("bs_js_dict").get(d, g);
            if (h !== void 0)
                return b("bs_curry")._2(h.componentFunction, c, a);
            else
                return b("bs_curry")._2(f(g, e, 0).componentFunction, c, a)
        };
        h.displayName = "MessengerPersistantViewerKeyedSubscriptionComponent(" + (a.displayName + ")");
        return {
            make: h,
            send: e
        }
    }
    f.Make = a
}
), null);
__d("OnlineUserIds.bs", ["bs_belt_Set", "ParticipantId.bs"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a) {
        return b("bs_belt_Set").make(b("ParticipantId.bs"))
    }
    function c(a) {
        return b("bs_belt_Set").fromArray(a, b("ParticipantId.bs"))
    }
    f.make = a;
    f.fromArray = c
}
), null);
__d("MessengerPresenceProvider.bs", ["FBID.bs", "bs_curry", "React", "Arbiter", "bs_belt_Set", "bs_caml_obj", "bs_belt_Array", "MercuryIDs", "bs_belt_Option", "bs_caml_option", "OnlineUserIds.bs", "ParticipantId.bs", "PresenceStatus", "PresencePrivacy", "AvailableListConstants", "MessengerPersistantViewerKeyedSubscriptionComponent.bs"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React")
      , h = ["privacy-changed", "privacy-availability-changed", "privacy-user-presence-response"];
    function a(a) {
        return b("OnlineUserIds.bs").make(0)
    }
    function c(a, c) {
        if (a) {
            a = a[0];
            var d = b("bs_caml_obj").caml_equal(b("PresenceStatus").get(a), b("AvailableListConstants").ACTIVE);
            if (d)
                return b("bs_belt_Set").add(c, b("MercuryIDs").getParticipantIDFromUserID(a));
            else
                return b("bs_belt_Set").remove(c, b("MercuryIDs").getParticipantIDFromUserID(a))
        } else
            return b("bs_belt_Set").fromArray(b("bs_belt_Array").map(b("PresenceStatus").getOnlineIDs(), function(a) {
                return b("MercuryIDs").getParticipantIDFromUserID(a)
            }), b("ParticipantId.bs"))
    }
    function d(a, c) {
        b("PresencePrivacy").subscribe(h, function(a) {
            return b("bs_curry")._1(c, 0)
        });
        b("bs_curry")._1(c, 0);
        b("Arbiter").subscribe(b("AvailableListConstants").ON_AVAILABILITY_CHANGED, function(a, d) {
            if (d == null)
                return 0;
            else {
                a = b("FBID.bs").ofStringExn(d);
                return b("bs_curry")._1(c, [a])
            }
        });
        return 0
    }
    a = b("MessengerPersistantViewerKeyedSubscriptionComponent.bs").Make({
        initialState: a,
        reducer: c,
        onFirstMount: d,
        displayName: "MessengerPresenceProvider"
    });
    var i = a.make;
    function j(a, c, d, e, f) {
        f = {
            children: e
        };
        a !== void 0 && (f.shouldUpdate = b("bs_caml_option").valFromOption(a));
        c !== void 0 && (f.remoteAction = b("bs_caml_option").valFromOption(c));
        d !== void 0 && (f.fbid = b("bs_caml_option").valFromOption(d));
        return f
    }
    function k(a) {
        var c = a.subscribeToIDs
          , d = a.remoteAction
          , e = a.fbid;
        a = a.children;
        d = j(function(a, d) {
            if (c !== void 0) {
                var e;
                d = (e = b("bs_belt_Set")).union(e.diff(a, d), e.diff(d, a));
                return !e.isEmpty(e.intersect(d, b("bs_caml_option").valFromOption(c)))
            } else
                return !1
        }, d, e, a, 0);
        return g.createElement(i, d)
    }
    function e(a) {
        var c = b("ParticipantId.bs")
          , d = {
            children: a.children
        }
          , e = b("bs_belt_Option").map(b("bs_caml_option").nullable_to_opt(a.subscribeToIDs), function(a) {
            return b("bs_belt_Set").fromArray(a, c)
        });
        e !== void 0 && (d.subscribeToIDs = b("bs_caml_option").valFromOption(e));
        e = b("bs_caml_option").nullable_to_opt(a.fbid);
        e !== void 0 && (d.fbid = b("bs_caml_option").valFromOption(e));
        return k(d)
    }
    c = a.send;
    d = k;
    f.privacyEvents = h;
    f.send = c;
    f.makePropsOriginal = j;
    f.make = d;
    f.jsComponent = e
}
), null);
__d("PagesMessagingMercuryChatTabActionKeys", ["keyMirror"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("keyMirror")({
        REQUEST_GREETING_CONFIG: null,
        NOTIFY_GREETING_CONFIG_RECEIVED: null
    });
    e.exports = a
}
), null);
__d("PagesMessagingMercuryChatTabDispatcher", ["ExplicitRegistrationDispatcher"], (function(a, b, c, d, e, f) {
    "use strict";
    a = new (b("ExplicitRegistrationDispatcher"))({
        strict: !1
    });
    e.exports = a
}
), null);
__d("PagesMessagingMercuryChatTabActions", ["PagesMessagingMercuryChatTabActionKeys", "PagesMessagingMercuryChatTabDispatcher"], (function(a, b, c, d, e, f) {
    "use strict";
    f.requestGreetingConfig = a;
    f.notifyGreetingConfigReceived = c;
    function a(a) {
        b("PagesMessagingMercuryChatTabDispatcher").dispatch({
            actionType: b("PagesMessagingMercuryChatTabActionKeys").REQUEST_GREETING_CONFIG,
            threadID: a
        })
    }
    function c(a, c) {
        b("PagesMessagingMercuryChatTabDispatcher").dispatch({
            actionType: b("PagesMessagingMercuryChatTabActionKeys").NOTIFY_GREETING_CONFIG_RECEIVED,
            threadID: a,
            payload: c
        })
    }
}
), null);
__d("MessengerDiscoveryEntryPoint", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        UFI: "UFI",
        UFI_SEND_MESSAGE_BUTTON: "UFI:send_message_button",
        UFI_REACTIONS_AUXILIARY_REPLY_ACTION_NEWS_FEED: "UFI:reactions_auxiliary_reply_action_news_feed",
        UFI_REACTIONS_AUXILIARY_REPLY_ACTION_PHOTO_STORY: "UFI:reactions_auxiliary_reply_action_photo_story",
        UFI_REACTIONS_AUXILIARY_REPLY_ACTION_GROUPS: "UFI:reactions_auxiliary_reply_action_groups",
        UFI_REACTIONS_AUXILIARY_REPLY_ACTION_TIMELINE: "UFI:reactions_auxiliary_reply_action_timeline",
        UFI_REACTIONS_AUXILIARY_REPLY_ACTION_PHOTO_VIEWER: "UFI:reactions_auxiliary_reply_action_photo_viewer",
        ADMIN_MESSAGES: "admin_messages",
        ANONYMOUS_MESSAGING: "anonymous_messaging",
        APP_INSIGHTS: "app_insights",
        BEGIN_SHARE_FLOW: "begin_share_flow",
        BRANDED_CAMERA: "branded_camera",
        BROADCAST: "broadcast",
        BROWSER_PROFILE_ICON: "browser_profile_icon",
        BUSINESS_ON_MESSENGER: "business_on_messenger",
        BUSINESS_TAB_M4: "business_tab_m4",
        BUSINESS_TAB_M4_BUSINESS_INBOX: "business_tab_m4:business_inbox",
        BUSINESS_TAB_M4_RECOMMENDATION_CARD: "business_tab_m4:recommendation_card",
        BUSINESS_TAB_M4_RECOMMENDATION_DETAILS: "business_tab_m4:recommendation_details",
        BYMM_NULL_STATE: "bymm_null_state",
        CAMPUS: "campus",
        CAMPUS_COMPOSER: "campus:composer",
        CHECKBOX_PLUGIN: "checkbox_plugin",
        CLICK_TO_MESSENGER_AD: "click_to_messenger_ad",
        CLICK_TO_MESSENGER_AD_MESSENGER_DEEPLINK_ADS: "click_to_messenger_ad:messenger_deeplink_ads",
        CLICK_TO_MESSENGER_AD_ADS_WELCOME_ADMIN: "click_to_messenger_ad:ads_welcome_admin",
        CLICK_TO_MESSENGER_AD_USER_SENT: "click_to_messenger_ad:user_sent",
        CLICK_TO_MESSENGER_AD_PARTIAL_AUTOMATED: "click_to_messenger_ad:partial_automated",
        CLICK_TO_MESSENGER_AD_FB_P2B_DEEPLINK: "click_to_messenger_ad:fb_p2b_deeplink",
        CLICK_TO_MESSENGER_AD_SEND_MESSAGE_CTA: "click_to_messenger_ad:send_message_cta",
        CLICK_TO_MESSENGER_AD_ON_FEED_MESSAGES_REGULAR_MESSAGE: "click_to_messenger_ad:on_feed_messages_regular_message",
        CUSTOMER_CHAT_PLUGIN: "customer_chat_plugin",
        CUSTOMER_CHAT_PLUGIN_MOBILE_REDIRECT: "customer_chat_plugin:mobile_redirect",
        CUSTOMER_CHAT_PLUGIN_UPGRADE_FLOW: "customer_chat_plugin:upgrade_flow",
        CUSTOMER_MATCHING: "customer_matching",
        CUSTOMER_MATCHING_PHONE_NUMBER: "customer_matching:phone_number",
        DEPRECATED: "deprecated",
        DEPRECATED_BUSINESS_ON_MESSENGER: "deprecated:business_on_messenger",
        DEPRECATED_ADMIN_MESSAGES: "deprecated:admin_messages",
        DEPRECATED_PIXEL_EVENT: "deprecated:pixel_event",
        DEPRECATED_NULL_STATE_CTA: "deprecated:null_state_cta",
        DEPRECATED_SUBSCRIPTIONS: "deprecated:subscriptions",
        DISCOVER_TAB: "discover_tab",
        DISCOVER_TAB_M4: "discover_tab:m4",
        DISCOVER_TAB_M3: "discover_tab:m3",
        DONOR_SUPPORT: "donor_support",
        DONOR_SUPPORT_REACTIVE_MORE_MENU: "donor_support:reactive_more_menu",
        DONOR_SUPPORT_REACTIVE_FAQ: "donor_support:reactive_faq",
        DONOR_SUPPORT_PROACTIVE: "donor_support:proactive",
        DONOR_SUPPORT_CHECKLIST: "donor_support:checklist",
        DYNAMIC_LOCAL_ADS: "dynamic_local_ads",
        FACEBOOKPAY_SUPPORT: "facebookpay_support",
        FACEBOOKPAY_SUPPORT_PAYMENT_HISTORY: "facebookpay_support:payment_history",
        FB_BROADCAST_FLOW_VIEW: "fb_broadcast_flow_view ",
        FB_EVENT: "fb_event",
        FB_EVENT_MESSAGE_HOST: "fb_event:message_host",
        FB_FEED: "fb_feed",
        FB_FEED_PYMM_RHC: "fb_feed:pymm_rhc",
        FB_FEED_PAGE_HOVER_CARD: "fb_feed:page_hover_card",
        FB_FEED_ADMIN: "fb_feed:admin",
        FB_FEED_ORGANIC_POST: "fb_feed:organic_post",
        FB_FEED_BCF: "fb_feed:bcf",
        FB_FEED_BCF_OPEN_CHAT_BUTTON: "fb_feed:bcf_open_chat_button",
        FB_FEED_COMMENT_PIVOT_VIEW_BUTTON: "fb_feed:comment_pivot_view_button",
        FB_FEED_REACTORS_LIST_MESSAGE_BUTTON: "fb_feed:reactors_list_message_button",
        FB_FEED_POST_HEADER_MESSAGE_BUTTON: "fb_feed:post_header_message_button",
        FB_FEED_POST_MESSAGE_SELLER_BUTTON: "fb_feed:post_message_seller_button",
        FB_FEED_COMMENT_UFI: "fb_feed:comment_ufi",
        FB_FEED_REPLY_TO_POST: "fb_feed:reply_to_post",
        FB_FEED_GO_TO_CHAT: "fb_feed:go_to_chat",
        FB_FEED_SEND_IN_UFI: "fb_feed:send_in_ufi",
        FB_FEED_SHARESHEET: "fb_feed:sharesheet",
        FB_FEED_VIEW_AND_MESSAGE: "fb_feed:view_and_message",
        FB_GROUPS: "fb_groups",
        FB_GROUPS_PICKER_EXISTING_CHAT: "fb_groups:picker_existing_chat",
        FB_GROUPS_PICKER_JOIN_CHAT: "fb_groups:picker_join_chat",
        FB_GROUPS_PICKER_CREATE_CHAT: "fb_groups:picker_create_chat",
        FB_GROUPS_MALL_CHATS_TAB: "fb_groups:mall_chats_tab",
        FB_GROUPS_ADMIN_REPORT: "fb_groups:admin_report",
        FB_GROUPS_CREATION: "fb_groups:creation",
        FB_GROUPS_INBOX: "fb_groups:inbox",
        FB_GROUPS_PUSH_NOTIFICATION: "fb_groups:push_notification",
        FB_GROUPS_JEWEL_NOTIFICATION: "fb_groups:jewel_notification",
        FB_GROUPS_MALL_CHATS_ROOMS_TRAY: "fb_groups:mall_chats_rooms_tray",
        FB_GROUPS_MALL_CHATS_ROOMS_PROMO_QP: "fb_groups:mall_chats_rooms_promo_qp",
        FB_GROUPS_SUGGESTION_QP: "fb_groups:suggestion_qp",
        FB_GROUPS_NULLSTATE_INBOX: "fb_groups:nullstate_inbox",
        FB_GROUPS_CROSS_GROUP_INBOX: "fb_groups:cross_group_inbox",
        FB_GROUPS_CROSS_GROUP_NULLSTATE_INBOX: "fb_groups:cross_group_nullstate_inbox",
        FB_GROUPS_CROSS_GROUP_NULLSTATE_ROOM_ONLY_INBOX: "fb_groups:cross_group_nullstate_room_only_inbox",
        FB_GROUPS_CROSS_GROUP_NULLSTATE_CHAT_ONLY_INBOX: "fb_groups:cross_group_nullstate_chat_only_inbox",
        FB_GROUPS_CROSS_GROUP_NULLSTATE_DISABLED_INBOX: "fb_groups:cross_group_nullstate_disabled_inbox",
        FB_GROUPS_INBOX_SUGGESTION: "fb_groups:inbox_suggestion",
        FB_GROUPS_COMPOSER: "fb_groups:composer",
        FB_GROUPS_UNKNOWN: "fb_groups:unknown",
        FB_HEADER_DOCK: "fb_header_dock",
        FB_HEADER_DOCK_LOADED_FROM_BROWSER_COOKIE: "fb_header_dock:loaded_from_browser_cookie",
        FB_HEADER_DOCK_JEWEL_THREAD: "fb_header_dock:jewel_thread",
        FB_HEADER_DOCK_JEWEL_SEE_ALL_MESSAGES: "fb_header_dock:jewel_see_all_messages",
        FB_INLINE_SHARE_SHEET_SEND_BUTTON: "fb_inline_share_sheet_send_button",
        FB_JOB: "fb_job",
        FB_JOB_JOB_APPLICATION: "fb_job:job_application",
        FB_JOINABLE_VIDEO_CHATS: "fb_joinable_video_chats",
        FB_JOINABLE_VIDEO_CHATS_SEND_INVITE_BUTTON: "fb_joinable_video_chats:send_invite_button",
        FB_LOGIN_ALERTS: "fb_login_alerts",
        FB_NOTIFICATIONS: "fb_notifications",
        FB_OFFER: "fb_offer",
        FB_OFFER_OFFER_DETAILS_VIEW: "fb_offer:offer_details_view",
        FB_PAGE: "fb_page",
        FB_PAGE_ICEBREAKER_RHC: "fb_page:icebreaker_rhc",
        FB_PAGE_SEND_AND_POST_FROM_COMPOSER: "fb_page:send_and_post_from_composer",
        FB_PAGE_ADMIN_TEST_LINK: "fb_page:admin_test_link",
        FB_PAGE_SHOP_PDP: "fb_page:shop_pdp",
        FB_PAGE_FREQUENTLY_ASKED_QUESTION_CARD: "fb_page:frequently_asked_question_card",
        FB_PAGE_ABOUT_CARD_DETAIL_VIEW: "fb_page:about_card_detail_view",
        FB_PAGE_RESPONSIVENESS_CONTEXT_CARD: "fb_page:responsiveness_context_card",
        FB_PAGE_ABOUT_CARD: "fb_page:about_card",
        FB_PAGE_ABOUT_CARD_PQI_MESSAGE_UPSELL: "fb_page:about_card_pqi_message_upsell",
        FB_PAGE_PAGE_HEADER: "fb_page:page_header",
        FB_PAGE_PRIMARY_MESSAGE_BUTTON: "fb_page:primary_message_button",
        FB_PAGE_SECONDARY_MESSAGE_BUTTON: "fb_page:secondary_message_button",
        FB_PAGE_FB_PAGE_CTA_PAGES_ACTIONS_UNIT: "fb_page:fb_page_cta_pages_actions_unit",
        FB_PAGE_JEWEL_THREAD: "fb_page:jewel_thread",
        FB_PAGE_USER_MESSAGE_PROMPT: "fb_page:user_message_prompt",
        FB_PAGE_PAGES_INFO: "fb_page:pages_info",
        FB_PAGE_LOADED_FROM_DATA: "fb_page:loaded_from_data",
        FB_PAGE_CHAT_SIDEBAR_TYPEAHEAD: "fb_page:chat_sidebar_typeahead",
        FB_PAGE_DYNAMICHOVERCARD: "fb_page:dynamicHoverCard",
        FB_PAGE_ABOUT_ROW: "fb_page:about_row",
        FB_PAGE_PYMM_RHC: "fb_page:pymm_rhc",
        FB_PAGE_GROUPS_RHC: "fb_page:groups_rhc",
        FB_PAGE_CONTEXT_CARD: "fb_page:context_card",
        FB_PAGE_CONTEXTUAL_RECOMMENDATIONS: "fb_page:contextual_recommendations",
        FB_PAGE_SEARCHENTITYCARD: "fb_page:searchEntityCard",
        FB_PAGE_MESSAGE_RECEIVED: "fb_page:message_received",
        FB_PAGE_PAGE_HOVERCARD: "fb_page:page_hovercard",
        FB_PAGE_QUESTION_TRIGGERED_CONVO: "fb_page:question_triggered_convo",
        FB_PAGE_DEFAULT_NATIVE_TEMPLATES_CTA: "fb_page:default_native_templates_cta",
        FB_PAGE_LAUNCHPAD_MORE_DRAWER: "fb_page:launchpad_more_drawer",
        FB_PAGE_LAUNCHPAD_HEADER: "fb_page:launchpad_header",
        FB_PAGE_LAUNCHPAD_FOOTER: "fb_page:launchpad_footer",
        FB_PAGE_REPLY_TRIGGERED_CONVO: "fb_page:reply_triggered_convo",
        FB_PAGE_LOCATIONS_CHILD_PAGE_MESSAGE_CTA: "fb_page:locations_child_page_message_cta",
        FB_PAGE_SHOP_PDP_P2B_MESSAGE_BUTTON: "fb_page:shop_pdp_p2b_message_button",
        FB_PLATFORM_LOGIN: "fb_platform_login",
        FB_PROFILE: "fb_profile",
        FB_PROFILE_MESSAGE_BUTTON: "fb_profile:message_button",
        FB_PROFILE_FRIEND_REQUEST_OPEN_MESSENGER_BUTTON: "fb_profile:friend_request_open_messenger_button",
        FB_PROFILE_AUDIO_CALL_BUTTON: "fb_profile:audio_call_button",
        FB_PROFILE_VIDEO_CALL_BUTTON: "fb_profile:video_call_button",
        FB_PROFILE_PROFILE_HEADER_COMPOSER: "fb_profile:profile_header_composer",
        FB_SEARCH: "fb_search",
        FB_SEARCH_CHAT_SIDEBAR_TYPEAHEAD: "fb_search:chat_sidebar_typeahead",
        FB_SEARCH_SEARCH_ENTITY_CARD: "fb_search:search_entity_card",
        FB_SEARCH_HIGH_CONFIDENCE_CARD: "fb_search:high_confidence_card",
        FB_SHORTS: "fb_shorts",
        FB_SHORTS_PROFILE: "fb_shorts:profile",
        FB_STORY: "fb_story",
        FB_STORY_VIEWER_SHEET_ROW: "fb_story:viewer_sheet_row",
        FB_STORY_VIEWER_SHEET_MENU: "fb_story:viewer_sheet_menu",
        FB_STORY_THREAD_VIEW_HEADER: "fb_story:thread_view_header",
        FB_STORY_THREAD_VIEW_FOOTER: "fb_story:thread_view_footer",
        FB_STORY_SHARESHEET: "fb_story:sharesheet",
        FB_STORY_STORIES_PUSH_NOTIFICATION: "fb_story:stories_push_notification",
        FB_STORY_STORIES_JEWEL_NOTIFICATION: "fb_story:stories_jewel_notification",
        FB_STORY_STORIES_VIEWER_CONSUMER_REPLY: "fb_story:stories_viewer_consumer_reply",
        FB_STORY_STORIES_VIEWER_CONSUMER_ARTIFACT: "fb_story:stories_viewer_consumer_artifact",
        FB_STORY_STORIES_PAGE_STORY_CONVERSATIONS: "fb_story:stories_page_story_conversations",
        FB_STORY_STORIES_PAGE_STORY_ADMIN_CONVERSATIONS: "fb_story:stories_page_story_admin_conversations",
        FB_STORY_QUESTION_TRIGGERED_MENTION_UPSELL: "fb_story:question_triggered_mention_upsell",
        FB_STORY_PAGE_STORIES_COMMENT_STICKER_CONVERSATIONS: "fb_story:page_stories_comment_sticker_conversations",
        FB_STORY_SOCIAL_CONTEXT_CONVERSATIONS: "fb_story:social_context_conversations",
        FB_STORY_STORIES_MULTI_AUTHOR_STORY_CONVERSATIONS: "fb_story:stories_multi_author_story_conversations",
        FB_STORY_SELF_STORY_SEND: "fb_story:self_story_send",
        FB_TOP_OF_FEED_UNIT: "fb_top_of_feed_unit",
        FIRST_PARTY_BOT: "first_party_bot",
        FIRST_PARTY_BOT_RECRUITING_BOT: "first_party_bot:recruiting_bot",
        FIRST_PARTY_BOT_MESSENGER_BOT: "first_party_bot:messenger_bot",
        FIRST_PARTY_BOT_WORKPLACE_APP: "first_party_bot:workplace_app",
        FIRST_PARTY_BOT_REPORT_SPAM: "first_party_bot:report_spam",
        FIRST_PARTY_BOT_MOBILE_BUILDS_BOT: "first_party_bot:mobile_builds_bot",
        FIRST_PARTY_BOT_FB_TEST_PAGE: "first_party_bot:fb_test_page",
        FIRST_PARTY_BOT_CALENDAR_BOT: "first_party_bot:calendar_bot",
        FIRST_PARTY_BOT_ORDER_FOOD: "first_party_bot:order_food",
        FIRST_PARTY_BOT_BUSINESS_ASSISTANT: "first_party_bot:business_assistant",
        FIRST_PARTY_BOT_MOBILE_FINANCIAL_SERVICE: "first_party_bot:mobile_financial_service",
        FIRST_PARTY_BOT_FACEBOOK_BUSINESS: "first_party_bot:facebook_business",
        FIRST_PARTY_BOT_LEAD_GEN: "first_party_bot:lead_gen",
        FIRST_PARTY_BOT_MARKETPLACE: "first_party_bot:marketplace",
        FIRST_PARTY_BOT_INSTANT_EXPERIENCES: "first_party_bot:instant_experiences",
        FIRST_PARTY_BOT_PRODUCT_SUPPORT_TOOL: "first_party_bot:product_support_tool",
        FIRST_PARTY_BOT_CTA_ADS: "first_party_bot:cta_ads",
        FIRST_PARTY_BOT_FB_LOGIN_ALERTS: "first_party_bot:fb_login_alerts",
        FIRST_PARTY_BOT_M: "first_party_bot:m",
        FIRST_PARTY_BOT_TOGETHER: "first_party_bot:together",
        FIRST_PARTY_BOT_MPP_SUPPORT: "first_party_bot:mpp_support",
        FRIENDS_HOME: "friends_home",
        FRIENDS_HOME_ACTIVE_NOW: "friends_home:active_now",
        FRIENDS_HOME_POST_ACCEPT_MESSAGING: "friends_home:post_accept_messaging",
        FRIENDS_HOME_MESSAGE_NEW_FRIENDS: "friends_home:message_new_friends",
        FRIENDS_HOME_SENDER_POST_ACCEPT_WAVE: "friends_home:sender_post_accept_wave",
        FUNDRAISER_SUPPORT: "fundraiser_support",
        FUNDRAISER_SUPPORT_REACTIVE_MORE_MENU: "fundraiser_support:reactive_more_menu",
        FUNDRAISER_SUPPORT_REACTIVE_FAQ: "fundraiser_support:reactive_faq",
        FUNDRAISER_SUPPORT_PROACTIVE: "fundraiser_support:proactive",
        FUNDRAISER_SUPPORT_CHECKLIST: "fundraiser_support:checklist",
        FUNDRAISER_SUPPORT_FACEBOOK_PAY_HANDOVER: "fundraiser_support:facebook_pay_handover",
        GEMSTONE: "gemstone",
        GEMSTONE_MESSAGE_INBOX: "gemstone:message_inbox",
        IG_FEED: "ig_feed",
        IG_FEED_ORGANIC_POST: "ig_feed:organic_post",
        IN_APP_BROWSER: "in_app_browser",
        IN_APP_BROWSER_SEND_MESSAGE_CTA: "in_app_browser:send_message_cta",
        INSTANT_ARTICLE: "instant_article",
        INSTANT_ARTICLE_CTA: "instant_article:cta",
        INSTANT_ARTICLE_OVERFLOW_MENU: "instant_article:overflow_menu",
        INSTANT_ARTICLE_TOOLKIT_DISCUSS: "instant_article:toolkit_discuss",
        INSTANT_GAMES: "instant_games",
        INSTANT_GAMES_ADMIN_INTRO: "instant_games:admin_intro",
        JOBS_ATS: "jobs_ats",
        LEAD_GEN_MESSAGING: "lead_gen_messaging",
        LEAD_GEN_MESSAGING_PRE_SUBMISSION: "lead_gen_messaging:pre_submission",
        LEAD_GEN_MESSAGING_POST_SUBMISSION: "lead_gen_messaging:post_submission",
        LIVE_VIDEO: "live_video",
        LIVE_VIDEO_FORECAST_SHARESHEET: "live_video:forecast_sharesheet",
        LOCAL_COMMUNITIES: "local_communities",
        LOCAL_COMMUNITIES_FEED: "local_communities:feed",
        LOCAL_COMMUNITIES_NEIGHBORHOOD_INBOX: "local_communities:neighborhood_inbox",
        LOCAL_COMMUNITIES_PERSONAL_INBOX: "local_communities:personal_inbox",
        LOCAL_COMMUNITIES_NOTIFICATION: "local_communities:notification",
        LOCAL_DEV_PLATFORM: "local_dev_platform",
        LOCAL_DEV_PLATFORM_SEND_AVAILABILITY: "local_dev_platform:send_availability",
        M: "m",
        MARKETPLACE: "marketplace",
        MARKETPLACE_BSG_POST_MESSAGE_SELLER_BUTTON: "marketplace:bsg_post_message_seller_button",
        MARKETPLACE_INBOX: "marketplace_inbox",
        MARKETPLACE_PDP: "marketplace_pdp",
        MARKETPLACE_PDP_INLINE_MESSAGING: "marketplace_pdp:inline_messaging",
        MDOTME: "mdotme",
        MEET_NEW_FRIENDS: "meet_new_friends",
        MESSAGING_IN_BLUE: "messaging_in_blue",
        MESSAGING_IN_BLUE_THREAD_DETAILS_VIEW: "messaging_in_blue:thread_details_view",
        MESSAGING_IN_BLUE_THREAD_VIEW_HEADER: "messaging_in_blue:thread_view_header",
        MESSAGING_IN_BLUE_GROUPS_CHAT_THREAD_VIEW_HEADER: "messaging_in_blue:groups_chat_thread_view_header",
        MESSAGING_INBOX_IN_BLUE: "messaging_inbox_in_blue",
        MESSAGING_INBOX_IN_BLUE_THREAD_LIST: "messaging_inbox_in_blue:thread_list",
        MESSAGING_INBOX_IN_BLUE_PEOPLE_PICKER: "messaging_inbox_in_blue:people_picker",
        MESSAGING_INBOX_IN_BLUE_INBOX_ICON: "messaging_inbox_in_blue:inbox_icon",
        MESSAGING_INBOX_IN_BLUE_SWIPE_FROM_RIGHT: "messaging_inbox_in_blue:swipe_from_right",
        MESSAGING_INBOX_IN_BLUE_MIB_NOTIFICATION: "messaging_inbox_in_blue:mib_notification",
        MESSAGING_INBOX_IN_BLUE_ACTIVE_NOW: "messaging_inbox_in_blue:active_now",
        MESSAGING_INBOX_IN_BLUE_SUGGESTED_CHATS: "messaging_inbox_in_blue:suggested_chats",
        MESSAGING_INBOX_IN_BLUE_CHAT_PREVIEW_BANNER: "messaging_inbox_in_blue:chat_preview_banner",
        MESSAGING_INBOX_IN_BLUE_INBOX_QP: "messaging_inbox_in_blue:inbox_qp",
        MESSAGING_INBOX_IN_BLUE_THREAD_VIEW_CORE_NULL_STATE: "messaging_inbox_in_blue:thread_view_core_null_state",
        MESSENGER_BUSINESS_SOLUTIONS: "messenger_business_solutions",
        MESSENGER_INBOX: "messenger_inbox",
        MESSENGER_INBOX_THREAD_LIST: "messenger_inbox:thread_list",
        MESSENGER_INBOX_IN_THREAD: "messenger_inbox:in_thread",
        MESSENGER_INBOX_NESTED_FOLDER: "messenger_inbox:nested_folder",
        MESSENGER_RTC: "messenger_rtc",
        MESSENGER_RTC_PHOTO_CAPTURE: "messenger_rtc:photo_capture",
        MESSENGER_SEARCH: "messenger_search",
        MESSENGER_SEARCH_HOME: "messenger_search:home",
        MESSENGER_SEARCH_PEOPLE: "messenger_search:people",
        MESSENGER_SEARCH_GAMES: "messenger_search:games",
        MESSENGER_SEARCH_DISCOVER: "messenger_search:discover",
        MESSENGER_SEARCH_NULL_STATE: "messenger_search:null_state",
        MESSENGER_SEARCH_M3: "messenger_search:m3",
        MESSENGER_SEARCH_M4: "messenger_search:m4",
        MESSENGER_SHOPS: "messenger_shops",
        MESSENGER_SHOPS_PDP: "messenger_shops:pdp",
        MESSENGER_SHOPS_ORDER_UPDATE_XMA: "messenger_shops:order_update_xma",
        MESSENGERDOTCOM: "messengerdotcom",
        MESSENGERDOTCOM_WEB_SEARCH: "messengerdotcom:web_search",
        MESSENGERDOTCOM_PAGES_PLUGIN: "messengerdotcom:pages_plugin",
        MIB_NOTIFICATION: "mib_notification",
        MIB_NOTIFICATION_DIRECT_PUSH_NOTIF: "mib_notification:direct_push_notif",
        MIB_NOTIFICATION_DIRECT_JEWEL_NOTIF: "mib_notification:direct_jewel_notif",
        MIB_NOTIFICATION_SUBSEQUENT_PUSH_NOTIF: "mib_notification:subsequent_push_notif",
        MIB_NOTIFICATION_SUBSEQUENT_JEWEL_NOTIF: "mib_notification:subsequent_jewel_notif",
        NEARBY__HOME: "nearby__home",
        NEARBY__HOME_DASH_LIST: "nearby__home:dash_list",
        NEARBY__HOME_DASH_MAP: "nearby__home:dash_map",
        NEARBY__HOME_DASH_WAVE: "nearby__home:dash_wave",
        NEARBY__HOME_WAVE_INT: "nearby__home:wave_int",
        NEARBY__HOME_FEED: "nearby__home:feed",
        NEARBY__HOME_SHARE_LIVE_LOC: "nearby__home:share_live_loc",
        NEARBY_FRIENDS: "nearby_friends",
        NEARBY_FRIENDS_DASH_LIST: "nearby_friends:dash_list",
        NEARBY_FRIENDS_DASH_MAP: "nearby_friends:dash_map",
        NEARBY_FRIENDS_DASH_WAVE: "nearby_friends:dash_wave",
        NEARBY_FRIENDS_WAVE_INT: "nearby_friends:wave_int",
        NEARBY_FRIENDS_FEED: "nearby_friends:feed",
        NEARBY_FRIENDS_SHARE_LIVE_LOC: "nearby_friends:share_live_loc",
        NONPROFIT_SUPPORT: "nonprofit_support",
        NONPROFIT_SUPPORT_REACTIVE_MORE_MENU: "nonprofit_support:reactive_more_menu",
        NONPROFIT_SUPPORT_REACTIVE_FAQ: "nonprofit_support:reactive_faq",
        NONPROFIT_SUPPORT_PROACTIVE: "nonprofit_support:proactive",
        NONPROFIT_SUPPORT_CHECKLIST: "nonprofit_support:checklist",
        NPX_ICE_BREAKER: "npx_ice_breaker",
        NULL_STATE_CTA: "null_state_cta",
        ONE_TIME_NOTIF: "one_time_notif",
        PAGES_COMMS_AUTOMATED_RESPONSES: "pages_comms_automated_responses",
        PAGES_COMMS_AUTOMATED_RESPONSES_PREVIEW: "pages_comms_automated_responses:preview",
        PAGES_COMMS_AUTOMATED_RESPONSES_RECOMMENDATIONS: "pages_comms_automated_responses:recommendations",
        PAGES_COMMS_AUTOMATED_RESPONSES_JOB_APPLICATION: "pages_comms_automated_responses:job_application",
        PAGES_COMMS_AUTOMATED_RESPONSES_SMART_REPLY_LOCATION: "pages_comms_automated_responses:smart_reply_location",
        PAGES_COMMS_AUTOMATED_RESPONSES_SMART_REPLY_CONTACT: "pages_comms_automated_responses:smart_reply_contact",
        PAGES_COMMS_AUTOMATED_RESPONSES_SMART_REPLY_HOURS: "pages_comms_automated_responses:smart_reply_hours",
        PAGES_COMMS_AUTOMATED_RESPONSES_SMART_REPLY_POSITIVE_FEEDBACK: "pages_comms_automated_responses:smart_reply_positive_feedback",
        PAGES_COMMS_AUTOMATED_RESPONSES_SMART_REPLY_NEGATIVE_FEEDBACK: "pages_comms_automated_responses:smart_reply_negative_feedback",
        PAGES_COMMS_AUTOMATED_RESPONSES_INSTANT_REPLIES: "pages_comms_automated_responses:instant_replies",
        PAGES_COMMS_AUTOMATED_RESPONSES_AWAY_MESSAGE: "pages_comms_automated_responses:away_message",
        PAGES_COMMS_AUTOMATED_RESPONSES_APPOINTMENT_REMINDER: "pages_comms_automated_responses:appointment_reminder",
        PAGES_COMMS_AUTOMATED_RESPONSES_APPOINTMENT_FOLLOWUP: "pages_comms_automated_responses:appointment_followup",
        PAGES_COMMS_AUTOMATED_RESPONSES_ORGANIC_INTAKE_FORM: "pages_comms_automated_responses:organic_intake_form",
        PAGES_COMMS_AUTOMATED_RESPONSES_WELCOME_MESSAGE: "pages_comms_automated_responses:welcome_message",
        PAGES_MANAGER_APP: "pages_manager_app",
        PAGES_MANAGER_APP_NOTIFICATION_DIRECT_REPLY_TEXT: "pages_manager_app:notification_direct_reply_text",
        PAGES_MANAGER_APP_NOTIFICATION_DIRECT_REPLY_LIKE: "pages_manager_app:notification_direct_reply_like",
        PAGES_MANAGER_APP_CRM_SCHEDULED_MESSAGES: "pages_manager_app:crm_scheduled_messages",
        PAGES_PLUGIN: "pages_plugin",
        PAGES_PLUGIN_MESSAGE_TAB: "pages_plugin:message_tab",
        PRIVATE_REPLY: "private_reply",
        PRIVATE_REPLY_ADMIN: "private_reply:admin",
        PRIVATE_REPLY_RICH_POST_REPLY: "private_reply:rich_post_reply",
        PRIVATE_REPLY_RICH_COMMENT_REPLY: "private_reply:rich_comment_reply",
        PRIVATE_REPLY_RICH_VIDEO_TEXT_QUESTION_RESPONSE_REPLY: "private_reply:rich_video_text_question_response_reply",
        SAMPLE_BOTS: "sample_bots",
        SEND_TO_MESSENGER_PLUGIN: "send_to_messenger_plugin",
        SHARESHEET: "sharesheet",
        SHARESHEET_SHOP_COLLECTION_P2P_SHARE: "sharesheet:shop_collection_p2p_share",
        SHARESHEET_SHOP_STOREFRONT_P2P_SHARE: "sharesheet:shop_storefront_p2p_share",
        SPONSORED_MESSAGES_ADS: "sponsored_messages_ads",
        UNKNOWN: "unknown",
        UNKNOWN_BNP_PSID: "unknown:bnp_psid",
        UNKNOWN_ORGANIC_POST: "unknown:organic_post",
        VERSE: "verse",
        VERTICAL_SERVICES: "vertical_services",
        VERTICAL_SERVICES_GET_QUOTE: "vertical_services:get_quote",
        WATCH_SHARESHEET: "watch_sharesheet",
        WATCH_SHARESHEET_SEE_CHAT_BUTTON: "watch_sharesheet:see_chat_button",
        WORK_CHAT: "work_chat",
        WORK_CHAT_WORK_IDS: "work_chat:work_ids",
        WORK_CHAT_EMAIL: "work_chat:email"
    });
    e.exports = a
}
), null);
__d("PagesMessagingMercuryChatTabState", ["immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        return b
    }(b("immutable").Record({
        pagesGreetingShouldShow: !1,
        pagesGreetingContent: null,
        pageResponsiveness: null,
        coverPhotoData: null,
        connectionContext: null,
        pageOnlineMessage: null,
        icebreakers: null,
        showOrganicIntakeForm: !1,
        icebreakerTextForOrganicIntakeForm: null,
        icebreakerCtas: null
    }));
    e.exports = a
}
), null);
__d("XMercuryChatTabPagesNullStateConfigController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/pages/messaging/mercury/greeting/", {
        entry_point: {
            type: "Enum",
            enumType: 1
        }
    })
}
), null);
__d("PagesMessagingMercuryChatTabStore", ["invariant", "AsyncRequest", "FluxStore", "MercuryIDs", "MessengerDiscoveryEntryPoint", "PagesMessagingMercuryChatTabActionKeys", "PagesMessagingMercuryChatTabActions", "PagesMessagingMercuryChatTabDispatcher", "PagesMessagingMercuryChatTabState", "XMercuryChatTabPagesNullStateConfigController", "ifRequired"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c;
            c = a.call(this, b("PagesMessagingMercuryChatTabDispatcher")) || this;
            c.$PagesMessagingMercuryChatTabStore1 = new Map();
            return c
        }
        var d = c.prototype;
        d.getStateByThread = function(a) {
            this.$PagesMessagingMercuryChatTabStore1.has(a) || this.$PagesMessagingMercuryChatTabStore1.set(a, new (b("PagesMessagingMercuryChatTabState"))());
            a = this.$PagesMessagingMercuryChatTabStore1.get(a);
            a || g(0, 2437);
            return a
        }
        ;
        d.__onDispatch = function(a) {
            var c = a.actionType
              , d = a.payload;
            a = a.threadID;
            var e = this.getStateByThread(a);
            e || g(0, 2438);
            switch (c) {
            case b("PagesMessagingMercuryChatTabActionKeys").REQUEST_GREETING_CONFIG:
                this.$PagesMessagingMercuryChatTabStore2(a);
                break;
            case b("PagesMessagingMercuryChatTabActionKeys").NOTIFY_GREETING_CONFIG_RECEIVED:
                this.$PagesMessagingMercuryChatTabStore3(a, this.$PagesMessagingMercuryChatTabStore4(d, e));
                break
            }
        }
        ;
        d.$PagesMessagingMercuryChatTabStore2 = function(a) {
            var c = "unknown";
            b("ifRequired")("FantaAppStore", function(d) {
                d = d.getState().tabGroup.tabs.get(a);
                d && d.entryPoint && d.entryPoint[0] && Object.values(b("MessengerDiscoveryEntryPoint")).indexOf(d.entryPoint[0]) !== -1 && (c = d.entryPoint[0])
            });
            var d = b("XMercuryChatTabPagesNullStateConfigController").getURIBuilder().getURI();
            new (b("AsyncRequest"))().setURI(d).setMethod("POST").setData({
                page_id: b("MercuryIDs").getUserIDFromThreadID(a),
                entry_point: c
            }).setHandler(function(c) {
                return b("PagesMessagingMercuryChatTabActions").notifyGreetingConfigReceived(a, c.payload)
            }).send()
        }
        ;
        d.$PagesMessagingMercuryChatTabStore3 = function(a, b) {
            this.$PagesMessagingMercuryChatTabStore1.set(a, b),
            this.__emitChange()
        }
        ;
        d.$PagesMessagingMercuryChatTabStore4 = function(a, b) {
            var c = b.set("pagesGreetingShouldShow", a.pagesGreetingShouldShow).set("pagesGreetingContent", a.pagesGreetingContent).set("pageResponsiveness", a.pageResponsiveness).set("coverPhotoData", a.coverPhotoData).set("connectionContext", a.connectionContext).set("pageOnlineMessage", a.pageOnlineMessage).set("showOrganicIntakeForm", a.showOrganicIntakeForm).set("icebreakerTextForOrganicIntakeForm", a.icebreakerTextForOrganicIntakeForm);
            (b.icebreakers === null || b.icebreakers === void 0 || Object.keys(b.icebreakers).length === 0) && (c = c.set("icebreakers", a.icebreakers));
            (b.icebreakerCtas === null || b.icebreakerCtas === void 0 || b.icebreakerCtas.length === 0) && (c = c.set("icebreakerCtas", a.icebreakerCtas));
            return c
        }
        ;
        return c
    }(b("FluxStore"));
    a.__moduleID = e.id;
    c = new a();
    e.exports = c
}
), null);
__d("MessageThreadAssociatedObjectUtils", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.shouldRender = a;
    f.isLinkedToGroupChat = b;
    function a(a) {
        return a && a.room_type === "GROUP" && !a.is_workplace_community
    }
    function b(a) {
        return a && a.room_type === "GROUP" && !a.is_workplace_community
    }
}
), null);
__d("MessengerAdminGroupUtils", ["fbt", "CurrentUser", "MercuryConfig", "MercuryIDs", "MessageRequestUtils", "MessageThreadAssociatedObjectUtils", "QE2Logger", "gkx"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "messenger_use_new_group_participant_suggestion_ranking"
      , i = "show_nullstate_chat_tab_group_chat"
      , j = {
        isJoinableAndOpenThread: function(a) {
            return this.isJoinableThread(a) && this.isApprovalOpenThread(a)
        },
        isJoinableAndApprovalRequiredThread: function(a) {
            return !!(this.isJoinableThread(a) && a && a.approval_mode === 1)
        },
        isWorkSyncedGroupChat: function(a) {
            return !!(a == null ? void 0 : a.work_associated_group)
        },
        isWorkFroup: function(a) {
            return !!(b("gkx")("678597") && a && a.is_thread_queue_enabled === !0 && a.joinable_mode && a.joinable_mode.mode === 1 && b("MessageThreadAssociatedObjectUtils").isLinkedToGroupChat(a.associated_object))
        },
        isWorkSyncedChatThreadCreationMessage: function(a) {
            return !!(a.log_message_data && a.log_message_data.name != null && a.tags && (a.tags.indexOf("source:work:groupchat:creation") !== -1 || a.tags.indexOf("source:work:defaultgroupchat:creation") !== -1))
        },
        isWorkSyncedChatThreadMemberSyncMessage: function(a) {
            return !!(a.tags && a.tags.indexOf("source:work:groupchat:member_sync") !== -1)
        },
        shouldAddToApprovalQueue: function(a, b) {
            return !!(this.isJoinableAndApprovalRequiredThread(a) && a && !j.isAdmin(a.admins, b))
        },
        isJoinableThread: function(a) {
            return !!(b("gkx")("678598") && a && a.is_thread_queue_enabled === !0 && a.joinable_mode && a.joinable_mode.mode === 1)
        },
        isGroupChat: function(a) {
            return !!(a && b("MessageThreadAssociatedObjectUtils").isLinkedToGroupChat(a.associated_object))
        },
        shouldInvite: function(a) {
            return !!(b("gkx")("678598") && a && a.participant_add_mode === "INVITE")
        },
        isApprovalOpenThread: function(a) {
            return !!((b("CurrentUser").isWorkUser() || b("gkx")("678598")) && a && a.approval_mode === 0)
        },
        isAdminRequired: function(a) {
            return !!(a && a.admin_model_status === "required")
        },
        isOwner: function(a, b) {
            return a && (this.isJoinableThread(b) || this.isAdminRequired(b))
        },
        canSeeJoinableGroupOptions: function(a, c) {
            var d = b("CurrentUser").isWorkUser()
              , e = j.showJoinableApprovalToggle(a, c);
            c = j.showApprovalQueue(a, c);
            return !d && this.isJoinableThread(a) && (c || e)
        },
        canSeeGroupOptionsSection: function(a, c) {
            c = this.isAdmin(a.admins, c);
            var d = b("MessageRequestUtils").isMessageRequest(a);
            return c && this.isAdminRequired(a) && !d
        },
        canSeeBotsInGroupTypeahead: function() {
            return b("CurrentUser").isWorkUser()
        },
        canMakeOthersAdmins: function(a, b, c) {
            return this.isOwner(a, c) && !b
        },
        canMakeSelfAdmin: function(a, b) {
            return (this.isJoinableThread(b) || this.isAdminRequired(b)) && Object.keys(b.admins).length === 0 && a
        },
        canRemoveAdmin: function(a, b, c, d) {
            if (this.isAdminRequired(d) && Object.keys(d.admins).length === 1)
                return !1;
            switch (c) {
            case 2:
                return !1;
            default:
                return this.isOwner(a, d) && b
            }
        },
        canRemoveFromGroup: function(a, b, c) {
            switch (b) {
            case 2:
                return !1;
            default:
                return this.isAdminRequired(c) || this.isWorkFroup(c) ? a : this.isOwner(a, c) || !this.isJoinableThread(c)
            }
        },
        showGroupOptionsSection: function(a) {
            return a.group_thread_subtype !== 14
        },
        showJoinableApprovalToggle: function(a, b) {
            if (a.associated_object && !a.associated_object.approval_mode_toggleable)
                return !1;
            b = j.isAdmin(a.admins, b);
            return j.isOwner(b, a)
        },
        showApprovalQueue: function(a, b) {
            b = j.isAdmin(a.admins, b);
            b = j.isOwner(b, a);
            var c = this.getPendingRequestNumber(a);
            if (a && this.isAdminRequired(a))
                return this.isAdminRequired(a) && b && c > 0;
            else {
                a = j.isJoinableAndApprovalRequiredThread(a);
                return a && b && c > 0
            }
        },
        showParticipantsModal: function(a, b, c) {
            return this.isJoinableThread(c) && !a && !b
        },
        useNewGroupMemberSuggestionRanking: function() {
            b("QE2Logger").logExposureForUser(h);
            return b("MercuryConfig").MNGPS
        },
        showDefaultListForNewPersonAddChatTab: function() {
            b("QE2Logger").logExposureForUser(i);
            return b("MercuryConfig").ChatGroupChat
        },
        showDefaultListForNewChatTab: function() {
            return b("MercuryConfig").ChatComposer
        },
        canUpdateThreadCustomization: function(a, c) {
            var d = j.isJoinableThread(a);
            c = j.isAdmin(a.admins, c);
            var e = b("MessageRequestUtils").isMessageRequest(a);
            return a.is_subscribed && !e && (!d || c)
        },
        canUpdateThreadDescription: function(a, c) {
            var d = j.isJoinableThread(a);
            c = j.isAdmin(a.admins, c);
            var e = j.isWorkSyncedGroupChat(a);
            if (e)
                return c;
            e = b("MessageRequestUtils").isMessageRequest(a);
            return a.is_subscribed && !e && (!d || c)
        },
        isAdmin: function(a, c) {
            if (!a)
                return !1;
            if (b("MercuryIDs").isValid(c)) {
                var d = b("MercuryIDs").getUserIDFromParticipantID(c);
                return d != null && a[d] !== void 0
            }
            return a[c] !== void 0
        },
        getLeaveGroupBodyText: function(a, b) {
            a = this.isOwner(a, b);
            var c = j.isWorkSyncedGroupChat(b);
            return !c ? a ? g._("R\u1eddi kh\u1ecfi nh\u00f3m n\u00e0y s\u1ebd x\u00f3a b\u1ea1n kh\u1ecfi t\u01b0 c\u00e1ch ch\u1ee7 s\u1edf h\u1eefu v\u00e0 cho ph\u00e9p c\u00e1c th\u00e0nh vi\u00ean kh\u00e1c qu\u1ea3n l\u00fd nh\u00f3m. B\u1ea1n s\u1ebd kh\u00f4ng th\u1ec3 g\u1eedi ho\u1eb7c nh\u1eadn tin nh\u1eafn m\u1edbi n\u1eefa.") : g._("B\u1ea1n s\u1ebd ng\u1eebng nh\u1eadn tin nh\u1eafn t\u1eeb cu\u1ed9c tr\u00f2 chuy\u1ec7n n\u00e0y v\u00e0 m\u1ecdi ng\u01b0\u1eddi s\u1ebd th\u1ea5y b\u1ea1n \u0111\u00e3 r\u1eddi \u0111i.") : a ? b.participants.length === 1 ? g._("B\u1ea1n c\u00f3 ch\u1eafc ch\u1eafn mu\u1ed1n r\u1eddi kh\u1ecfi nh\u00f3m n\u00e0y kh\u00f4ng? V\u00ec b\u1ea1n l\u00e0 th\u00e0nh vi\u00ean cu\u1ed1i c\u00f9ng n\u00ean n\u1ebfu r\u1eddi kh\u1ecfi b\u00e2y gi\u1edd th\u00ec nh\u00f3m s\u1ebd kh\u00f4ng c\u00f2n n\u1eefa.") : g._("Khi r\u1eddi kh\u1ecfi nh\u00f3m n\u00e0y, b\u1ea1n s\u1ebd b\u1ecb x\u00f3a t\u01b0 c\u00e1ch ch\u1ee7 s\u1edf h\u1eefu v\u00e0 nh\u1eefng ng\u01b0\u1eddi kh\u00e1c c\u00f3 th\u1ec3 qu\u1ea3n l\u00fd cu\u1ed9c tr\u00f2 chuy\u1ec7n. B\u1ea1n s\u1ebd kh\u00f4ng th\u1ec3 g\u1eedi ho\u1eb7c nh\u1eadn tin nh\u1eafn m\u1edbi n\u1eefa. B\u1ea1n c\u0169ng s\u1ebd b\u1ecb x\u00f3a kh\u1ecfi nh\u00f3m.") : g._("B\u1ea1n s\u1ebd kh\u00f4ng nh\u1eadn \u0111\u01b0\u1ee3c tin nh\u1eafn t\u1eeb cu\u1ed9c tr\u00f2 chuy\u1ec7n n\u00e0y v\u00e0 m\u1ecdi ng\u01b0\u1eddi s\u1ebd bi\u1ebft b\u1ea1n \u0111\u00e3 r\u1eddi \u0111i. B\u1ea1n c\u0169ng s\u1ebd b\u1ecb x\u00f3a kh\u1ecfi nh\u00f3m.")
        },
        getLeaveGroupTitleText: function(a, b) {
            return j.isWorkSyncedGroupChat(b) ? b.participants.length === 1 ? g._("X\u00f3a nh\u00f3m v\u00e0 \u0111o\u1ea1n chat?") : g._("R\u1eddi kh\u1ecfi nh\u00f3m v\u00e0 \u0111o\u1ea1n chat?") : this.isOwner(a, b) ? g._("R\u1eddi kh\u1ecfi cu\u1ed9c tr\u00f2 chuy\u1ec7n n\u00e0y?") : g._("R\u1eddi kh\u1ecfi cu\u1ed9c tr\u00f2 chuy\u1ec7n?")
        },
        getLeaveGroupButtonText: function(a, b) {
            return this.isOwner(a, b) ? b.participants.length === 1 ? g._("R\u1eddi kh\u1ecfi v\u00e0 x\u00f3a nh\u00f3m") : g._("R\u1eddi kh\u1ecfi cu\u1ed9c tr\u00f2 chuy\u1ec7n") : g._("R\u1eddi kh\u1ecfi")
        },
        getMakeOwnerBodyText: function(a, b, c) {
            if (a)
                return b ? g._("L\u00e0 qu\u1ea3n tr\u1ecb vi\u00ean nh\u00f3m, b\u1ea1n qu\u1ea3n l\u00fd \u0111\u01b0\u1ee3c ng\u01b0\u1eddi c\u00f3 th\u1ec3 tham gia v\u00e0 t\u00f9y ch\u1ec9nh cu\u1ed9c tr\u00f2 chuy\u1ec7n n\u00e0y.") : g._("L\u00e0 qu\u1ea3n tr\u1ecb vi\u00ean nh\u00f3m, \"{owner's name}\" c\u00f3 th\u1ec3 qu\u1ea3n l\u00fd ng\u01b0\u1eddi c\u00f3 th\u1ec3 tham gia v\u00e0 t\u00f9y ch\u1ec9nh cu\u1ed9c tr\u00f2 chuy\u1ec7n n\u00e0y.", [g._param("owner's name", c)]);
            else
                return b ? g._("V\u1edbi t\u01b0 c\u00e1ch l\u00e0 ch\u1ee7 s\u1edf h\u1eefu nh\u00f3m, b\u1ea1n c\u00f3 th\u1ec3 qu\u1ea3n l\u00fd quy\u1ec1n s\u1edf h\u1eefu nh\u00f3m v\u00e0 x\u00f3a th\u00e0nh vi\u00ean kh\u1ecfi cu\u1ed9c tr\u00f2 chuy\u1ec7n. Ch\u1ec9 ch\u1ee7 s\u1edf h\u1eefu m\u1edbi c\u00f3 th\u1ec3 th\u00eam c\u00e1c ch\u1ee7 s\u1edf h\u1eefu kh\u00e1c.") : g._("V\u1edbi t\u01b0 c\u00e1ch l\u00e0 ch\u1ee7 s\u1edf h\u1eefu nh\u00f3m, \"{owner's name}\" c\u00f3 th\u1ec3 qu\u1ea3n l\u00fd quy\u1ec1n s\u1edf h\u1eefu nh\u00f3m v\u00e0 x\u00f3a th\u00e0nh vi\u00ean kh\u1ecfi cu\u1ed9c tr\u00f2 chuy\u1ec7n. H\u1ecd c\u00f3 th\u1ec3 g\u1ee1 quy\u1ec1n s\u1edf h\u1eefu kh\u1ecfi c\u00e1c ch\u1ee7 s\u1edf h\u1eefu kh\u00e1c.", [g._param("owner's name", c)])
        },
        getMakeOwnerTitleText: function(a, b) {
            if (a)
                return b ? g._("Tr\u1edf th\u00e0nh qu\u1ea3n tr\u1ecb vi\u00ean nh\u00f3m?") : g._("Th\u00eam qu\u1ea3n tr\u1ecb vi\u00ean nh\u00f3m?");
            else
                return b ? g._("Tr\u1edf th\u00e0nh ch\u1ee7 s\u1edf h\u1eefu nh\u00f3m?") : g._("Th\u00eam ch\u1ee7 s\u1edf h\u1eefu nh\u00f3m?")
        },
        getMakeOwnerButtonText: function(a, b) {
            if (a)
                return b ? g._("Tr\u1edf th\u00e0nh qu\u1ea3n tr\u1ecb vi\u00ean") : g._("Ch\u1ec9 \u0111\u1ecbnh l\u00e0m qu\u1ea3n tr\u1ecb vi\u00ean");
            else
                return b ? g._("Tr\u1edf th\u00e0nh ch\u1ee7 s\u1edf h\u1eefu") : g._("\u0110\u1eb7t l\u00e0m ch\u1ee7 s\u1edf h\u1eefu")
        },
        getRemoveOwnerBodyText: function(a, b, c, d) {
            if (b && c)
                return a ? null : g._("B\u1ea1n s\u1ebd kh\u00f4ng th\u1ec3 qu\u1ea3n l\u00fd quy\u1ec1n s\u1edf h\u1eefu nh\u00f3m v\u00e0 x\u00f3a th\u00e0nh vi\u00ean kh\u1ecfi cu\u1ed9c tr\u00f2 chuy\u1ec7n n\u00e0y n\u1eefa. B\u1ea1n v\u1eabn s\u1ebd l\u00e0 ng\u01b0\u1eddi tham gia nh\u00f3m. B\u1ea5t k\u1ef3 th\u00e0nh vi\u00ean n\u00e0o kh\u00e1c \u0111\u1ec1u c\u00f3 th\u1ec3 s\u1edf h\u1eefu nh\u00f3m.");
            else if (b && !c)
                return a ? g._("B\u1ea1n s\u1ebd qu\u1ea3n l\u00fd \u0111\u01b0\u1ee3c ng\u01b0\u1eddi c\u00f3 th\u1ec3 tham gia v\u00e0 t\u00f9y ch\u1ec9nh cu\u1ed9c tr\u00f2 chuy\u1ec7n n\u00e0y n\u1eefa.") : g._("B\u1ea1n s\u1ebd kh\u00f4ng th\u1ec3 qu\u1ea3n l\u00fd quy\u1ec1n s\u1edf h\u1eefu nh\u00f3m v\u00e0 x\u00f3a th\u00e0nh vi\u00ean kh\u1ecfi cu\u1ed9c tr\u00f2 chuy\u1ec7n n\u00e0y n\u1eefa. B\u1ea1n v\u1eabn s\u1ebd l\u00e0 ng\u01b0\u1eddi tham gia nh\u00f3m.");
            else
                return a ? g._("\"{owner's name}\" s\u1ebd kh\u00f4ng qu\u1ea3n l\u00fd \u0111\u01b0\u1ee3c ng\u01b0\u1eddi c\u00f3 th\u1ec3 tham gia v\u00e0 t\u00f9y ch\u1ec9nh cu\u1ed9c tr\u00f2 chuy\u1ec7n n\u00e0y n\u1eefa.", [g._param("owner's name", d)]) : g._("\"{owner's name}\" s\u1ebd kh\u00f4ng th\u1ec3 qu\u1ea3n l\u00fd quy\u1ec1n s\u1edf h\u1eefu nh\u00f3m v\u00e0 x\u00f3a th\u00e0nh vi\u00ean kh\u1ecfi cu\u1ed9c tr\u00f2 chuy\u1ec7n n\u1eefa. H\u1ecd v\u1eabn s\u1ebd l\u00e0 ng\u01b0\u1eddi tham gia nh\u00f3m.", [g._param("owner's name", d)])
        },
        getRemoveOwnerTitleText: function(a) {
            return a ? g._("G\u1ee1 vai tr\u00f2 qu\u1ea3n tr\u1ecb vi\u00ean nh\u00f3m?") : g._("G\u1ee1 vai tr\u00f2 ch\u1ee7 s\u1edf h\u1eefu nh\u00f3m?")
        },
        getRemoveOwnerButtonText: function(a) {
            return a ? g._("X\u00f3a") : g._("X\u00f3a ch\u1ee7 s\u1edf h\u1eefu")
        },
        getPendingRequestNumber: function(a) {
            if (a && a.approval_queue_ids && a.approval_queue_ids.length)
                return a.approval_queue_ids.length;
            else if (a && this.isAdminRequired(a) && a.group_approval_queue && a.group_approval_queue.length)
                return a.group_approval_queue.length;
            return 0
        }
    };
    e.exports = j
}
), null);
__d("MessengerReadReceipt.bs", ["bs_array", "Utils.bs", "immutable", "bs_caml_option", "bs_belt_MapString", "MercuryActionStatus"], (function(a, b, c, d, e, f) {
    "use strict";
    function g(a, c, d, e) {
        c = c >= a.timestamp;
        var f = a.status;
        e = !e || d !== a.author;
        if (c)
            if (f == null)
                if (e)
                    return !0;
                else
                    return !1;
            else if (e)
                return f === b("MercuryActionStatus").SUCCESS;
            else
                return !1;
        else
            return !1
    }
    function a(a, c, d) {
        if (c == null)
            return [];
        else {
            a = b("bs_belt_MapString").get(a, c.thread_id);
            if (a !== void 0)
                return b("bs_caml_option").valFromOption(a).reduce(function(a, e, f, h) {
                    if (g(c, e.watermark, f, b("Utils.bs").isTruthy(d)))
                        return b("bs_array").append(a, [f]);
                    else
                        return a
                }, []);
            else
                return []
        }
    }
    function c(a, c) {
        a = b("bs_belt_MapString").get(a, c.thread_id);
        if (a !== void 0)
            return b("bs_caml_option").valFromOption(a).reduce(function(a, b, d, e) {
                if (a)
                    return g(c, b.watermark, d, !1);
                else
                    return !1
            }, !0);
        else
            return !1
    }
    function d(a) {
        return !b("bs_belt_MapString").isEmpty(a)
    }
    function e(a, c) {
        if (b("bs_belt_MapString").isEmpty(a))
            return b("immutable").OrderedMap();
        else {
            a = b("bs_belt_MapString").get(a, c);
            if (a !== void 0)
                return b("bs_caml_option").valFromOption(a);
            else
                return b("immutable").OrderedMap()
        }
    }
    function h(a, c, d) {
        a = b("bs_belt_MapString").get(a, c);
        if (a !== void 0) {
            c = b("bs_caml_option").valFromOption(a).get(d);
            if (c == null)
                return null;
            else
                return c
        } else
            return null
    }
    var i = null;
    f.emptyReadReceipts = i;
    f.wasSeen = g;
    f.getSeenBy = a;
    f.wasSeenByAll = c;
    f.hasReadReceipts = d;
    f.getSeenTimestamps = e;
    f.getSeenTimestamp = h
}
), null);
__d("MessengerBusinessAutoCompleteQueryWebGraphQLQuery", ["WebGraphQLQueryBase"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        b.__getDocID = function() {
            return "2397726383591642"
        }
        ;
        b.getQueryID = function() {
            return "1369134433234452"
        }
        ;
        return b
    }(b("WebGraphQLQueryBase"))
}
), null);
__d("AutocompleteSearchSource", ["AbstractSearchSource", "MessengerBusinessAutoCompleteQueryWebGraphQLQuery", "SearchableEntry", "WebGraphQL", "promiseDone"], (function(a, b, c, d, e, f) {
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(b, c, d) {
            b = a.call(this) || this;
            b.numResults = c;
            b.requestType = d;
            return b
        }
        var d = c.prototype;
        d.searchImpl = function(a, c, d) {
            if (!a) {
                c([], a);
                return
            }
            d = {
                num_results: this.numResults,
                query: a,
                search_type: this.requestType
            };
            b("promiseDone")(b("WebGraphQL").exec(new (b("MessengerBusinessAutoCompleteQueryWebGraphQLQuery"))({
                query_params: d
            })), function(d) {
                d = d.in_thread_auto_complete_search.map(function(a) {
                    return new (b("SearchableEntry"))({
                        title: String(a.title),
                        uniqueID: String(a.title)
                    })
                });
                c(d, a)
            })
        }
        ;
        return c
    }(b("AbstractSearchSource"));
    e.exports = a
}
), null);
__d("AutocompleteStrategy", [], (function(a, b, c, d, e, f) {
    a = {
        name: "AutocompleteStrategy",
        findMentionableString: function(a) {
            return {
                matchingString: a,
                leadOffset: a.length
            }
        }
    };
    b = a;
    e.exports = b
}
), null);
__d("MercuryCanonicalGroupThreadManager", ["Bootloader", "KeyedCallbackManager", "MercuryIDs", "MercuryServerDispatcher", "MercuryServerPayloadPreprocessor", "MercurySingletonProvider", "MessengerServerPayloadTransformer.bs", "SubscriptionsHandler"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            this.$1 = a,
            this.$2 = new (b("KeyedCallbackManager"))(),
            this.$3 = b("MercuryServerPayloadPreprocessor").getForFBID(this.$1),
            this.$4 = {},
            this.$7(),
            this.$8(),
            this.$6 = {}
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
        c.getCanonicalGroupThreadIDForParticipants = function(a, b) {
            a = this.$9(a);
            var c = this.$10(a);
            c = this.$2.executeOrEnqueue(c, b);
            this.$11(a);
            return c
        }
        ;
        c.unsubscribe = function(a) {
            a && this.$2.unsubscribe(a)
        }
        ;
        c.$10 = function(a) {
            return a.sort().join(",")
        }
        ;
        c.$12 = function(a, c) {
            c = b("MercuryIDs").getThreadIDFromThreadFBID(c);
            this.$2.setResource(a, c);
            this.$4[c] = a
        }
        ;
        c.$11 = function(a) {
            var c = this.$10(a);
            c = {
                canonical_group_key: c,
                participants: a
            };
            b("MercuryServerDispatcher").trySend("/ajax/mercury/search_canonical_groups.php", c, null, this.$1)
        }
        ;
        c.$7 = function() {
            var a = this;
            b("MercuryServerDispatcher").registerEndpoints({
                "/ajax/mercury/search_canonical_groups.php": {
                    request_user_id: this.$1,
                    mode: b("MercuryServerDispatcher").IMMEDIATE,
                    handler: function(b) {
                        a.handleUpdate(b)
                    }
                }
            })
        }
        ;
        c.$9 = function(a) {
            a.indexOf(this.$1) === -1 && a.push(this.$1);
            return a
        }
        ;
        c.handleUpdate = function(a) {
            if (a.graphql_payload) {
                var c = b("MessengerServerPayloadTransformer.bs").transformThread(a.viewer, a.graphql_payload, a.for_page);
                this.$3.handleUpdate({
                    threads: [c],
                    payload_source: "server_search"
                })
            }
            c = a.canonical_group;
            if (c)
                for (var d in c)
                    this.$12(d, c[d])
        }
        ;
        c.getNow = function(a) {
            a = this.$10(this.$9(a));
            return this.$2.getResource(a)
        }
        ;
        c.$8 = function() {
            var a = this;
            b("Bootloader").loadModules(["MercuryThreadInformer"], function(c) {
                c = c.getForFBID(a.$1);
                var d = new (b("SubscriptionsHandler"))();
                d.addSubscriptions(c.subscribe("threads-deleted", function(b, c) {
                    for (var d in c)
                        a.$4[d] && (a.$2.setResource(a.$4[d], void 0),
                        delete a.$4[d])
                }));
                a.$5 = d
            }, "MercuryCanonicalGroupThreadManager")
        }
        ;
        return a
    }();
    e.exports = a;
    var g = new (b("MercurySingletonProvider"))(a)
}
), null);
__d("FantaTypeFileUploader", ["immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({
        ANIMATED_IMAGE: "animated_image",
        AUDIO: "audio",
        FILE: "file",
        GENERIC_ATTACHMENT: "generic_attachment",
        IMAGE: "image",
        VIDEO: "video"
    });
    c = {
        uploadedFiles: b("immutable").Map(),
        uploadingFiles: b("immutable").Map()
    };
    d = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        var c = b.prototype;
        c.getTypeIDs = function(a) {
            return this.uploadedFiles.reduce(function(b, c) {
                c.type === a && c.uploadedID && (b = b.concat(c.uploadedID));
                return b
            }, [])
        }
        ;
        return b
    }(b("immutable").Record(c));
    e.exports = d;
    d.fileTypes = a
}
), null);
__d("MercuryIgnoredBlockedParticipants.bs", ["bs_belt_Set", "bs_caml_obj", "MercuryIDs", "bs_caml_option", "CurrentUser", "ParticipantId.bs", "WorkForeignEntityInfo.bs"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a) {
        return b("bs_belt_Set").fromArray(a, b("ParticipantId.bs"))
    }
    function g(a, c, d) {
        d = d.participants.filter(function(c) {
            return c !== b("MercuryIDs").getParticipantIDFromUserID(a)
        });
        return d.filter(function(a) {
            return b("bs_belt_Set").has(c, a) !== !1
        })
    }
    function c(a, b, c) {
        if (c.is_canonical)
            return !1;
        else
            return g(a, b, c).length > 0
    }
    function d(a, b, c) {
        if (c.is_canonical)
            return [];
        else
            return g(a, b, c)
    }
    function e(a, c, d) {
        if (d.is_canonical) {
            d = d.participants.filter(function(c) {
                return b("bs_caml_obj").caml_notequal(c, b("MercuryIDs").getParticipantIDFromUserID(a))
            });
            return !d.every(function(a) {
                return !b("bs_belt_Set").has(c, a)
            })
        } else
            return !1
    }
    var h = b("bs_belt_Set").has;
    function i(a, c, d) {
        if (!a.is_canonical || b("bs_caml_option").nullable_to_opt(a.other_user_fbid) === b("bs_caml_option").some(c))
            return !1;
        else if (!b("CurrentUser").isWorkUser() || d == null)
            return !0;
        else if (d == null)
            return !1;
        else
            return !b("WorkForeignEntityInfo.bs").isCoworker(d)
    }
    f.fromIds = a;
    f.findIntersection = g;
    f.isPresentInGroupThread = c;
    f.participantsInGroupThread = d;
    f.qualifiesAs = e;
    f.isInSet = h;
    f.shouldShowBlock = i
}
), null);
__d("MessengerSecondarySearchFunnelConstants", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({
        MESSENGER_DOT_COM: "messenger_dot_com",
        WWW: "www"
    });
    b = Object.freeze({
        ABANDON: "abandon",
        CREATE_GROUP: "create_group",
        ENTER_THREAD: "enter_thread",
        RESULT_SELECTED: "result_selected",
        SEND: "send",
        SINGLE_RESULT_SELECTED: "single_result_selected"
    });
    c = Object.freeze({
        ACTION: "action"
    });
    d = Object.freeze({
        EXISTING_TAB: "existing_tab",
        JEWEL: "jewel",
        SIDEBAR: "sidebar",
        COMPOSER: "composer"
    });
    f = Object.freeze({
        END: "end",
        IMPRESSIONS: "impressions",
        MICRO_SESSION_ENDED: "micro_session_ended",
        MICRO_SESSION_STARTED: "micro_session_started",
        QUERY_CHANGED: "query_changed",
        RESULT_SELECTED: "result_selected",
        REENTER_OMNIPICKER: "reentered_omnipicker",
        SOURCE_ENDED: "source_ended",
        SOURCE_STARTED: "source_started",
        START: "start",
        TOKEN_REMOVED: "token_removed",
        CLICK_OTHER_THREAD: "clicked_on_other_thread"
    });
    var g = Object.freeze({
        BROADCAST: "broadcast",
        GROUP_CREATION: "group_creation",
        OMNIPICKER: "omnipicker",
        SHARE: "share"
    })
      , h = Object.freeze({
        DIRECT_SEND: "direct_send",
        ADD: "add"
    })
      , i = Object.freeze({
        FINISHED: "finished",
        FAILED: "failed"
    })
      , j = Object.freeze({
        BROADCAST: 9500,
        GROUP_CREATE: 9501,
        M_APP_COMPOSER: 9502
    })
      , k = Object.freeze({
        QUERY: "query",
        NO_QUERY: "no_query"
    })
      , l = Object.freeze({
        BOOTSTRAP: "bootstrap",
        LOCAL: "local",
        LOCAL_AND_SERVER: "local_and_server",
        LOCAL_CONTACTS: "local_contacts",
        ORDERED_GCF_FRIENDLIST: "local_ordered_gcf_friendlist",
        QUERY_CACHE: "query_cache",
        SERVER: "server",
        SHORT_PROFILES: "local_short_profiles",
        SUGGESTED_RECIPIENTS: "local_suggested_recipients"
    });
    e.exports = {
        FUNNEL_NAME: "MESSENGER_SECONDARY_SEARCH_FUNNEL",
        CLIENTS: a,
        END_ACTIONS: b,
        END_REASONS: c,
        ENTRY_SURFACES: d,
        EVENTS: f,
        SEARCH_SURFACES: g,
        SELECTION_TYPES: h,
        SOURCE_STATUSES: i,
        LOGGING_IDS: j,
        MICRO_SESSION_TYPES: k,
        SOURCES: l
    }
}
), null);
__d("MessengerEmojiSpan.react", ["cx", "EmojiLikeConstants", "MessengerSupportedEmojiUtils", "React", "cssURL", "prop-types"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            if (this.props.entityKey == null)
                return null;
            var a = this.props.contentState.getEntity(this.props.entityKey);
            a = a.getData();
            a = a.type;
            a = b("MessengerSupportedEmojiUtils").getUrl(a, b("EmojiLikeConstants").size.SMALL);
            a = a ? a : "";
            return h.jsx("span", {
                className: "_21wj",
                style: {
                    backgroundImage: b("cssURL")(a)
                },
                "data-offset-key": this.props.offsetKey,
                children: h.jsx("span", {
                    className: "_7464",
                    children: this.props.children
                })
            })
        }
        ;
        return c
    }(h.PureComponent);
    e.exports = a;
    a.propTypes = {
        children: (c = b("prop-types")).arrayOf(c.object),
        contentState: c.object.isRequired,
        entityKey: c.string,
        offsetKey: c.string
    }
}
), null);
__d("MessengerEmoticonSpan.react", ["cx", "EmojiLikeConstants", "EmoticonEmojiList", "MessengerSupportedEmojiUtils", "React", "cssURL", "prop-types"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            if (this.props.entityKey == null)
                return null;
            var a = this.props.contentState.getEntity(this.props.entityKey);
            a = a.getData();
            a = a.type;
            a = b("EmoticonEmojiList").emote2emojis[a];
            a = b("MessengerSupportedEmojiUtils").getUrl(a, b("EmojiLikeConstants").size.XSMALL);
            a = a ? a : "";
            return h.jsx("span", {
                className: "_21wj",
                style: {
                    backgroundImage: b("cssURL")(a)
                },
                "data-offset-key": this.props.offsetKey,
                children: h.jsx("span", {
                    className: "_7464",
                    children: this.props.children
                })
            })
        }
        ;
        return c
    }(h.PureComponent);
    e.exports = a;
    a.propTypes = {
        children: (c = b("prop-types")).arrayOf(c.object),
        contentState: c.object.isRequired,
        entityKey: c.string,
        offsetKey: c.string
    }
}
), null);
__d("MessengerMentionSource", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({
        REPLY: "reply",
        ATSIGN: "@",
        TYPEAHEAD: "typeahead"
    });
    b = a;
    e.exports = b
}
), null);
__d("MessengerMentionsEntityDecorator.react", ["cx", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        var c = b.prototype;
        c.render = function() {
            return h.jsx("span", {
                className: "_fy2",
                children: this.props.children
            })
        }
        ;
        return b
    }(h.PureComponent);
    e.exports = a
}
), null);
__d("MessengerUploadFilesUtil.bs", ["bs_curry", "FantaTypeFileUploader"], (function(a, b, c, d, e, f) {
    "use strict";
    e = (d = {},
    d[(e = b("FantaTypeFileUploader")).fileTypes.ANIMATED_IMAGE] = "gif_ids",
    d[e.fileTypes.AUDIO] = "audio_ids",
    d[e.fileTypes.FILE] = "file_ids",
    d[e.fileTypes.GENERIC_ATTACHMENT] = "generic_attachment_ids",
    d[e.fileTypes.IMAGE] = "image_ids",
    d[e.fileTypes.VIDEO] = "video_ids",
    d);
    function a(a, b) {
        if (a == null)
            return null;
        else {
            a = a.getTypeIDs(b);
            if (a.length > 0)
                return a;
            else
                return null
        }
    }
    function g(a) {
        if (a == null)
            return;
        else {
            a = a.get("uploadedFiles");
            var b = []
              , c = [];
            a.forEach(function(a, d, e) {
                d = a.file;
                if (d.type.startsWith("image/")) {
                    b.push(d);
                    return 0
                } else {
                    c.push(d);
                    return 0
                }
            });
            return {
                photos: b,
                otherFiles: c
            }
        }
    }
    function h(a, c) {
        if (c.length > 0)
            return b("bs_curry")._1(a, c);
        else
            return 0
    }
    function c(a, b) {
        if (a == null || b == null)
            return 0;
        else {
            a = g(a);
            if (a !== void 0) {
                a = a;
                h(b, a.photos);
                a.otherFiles.forEach(function(a) {
                    return h(b, [a])
                });
                return 0
            } else
                return 0
        }
    }
    f.supportAttachments = e;
    f.getAttachmentIDs = a;
    f.getAttachments = g;
    f.sendAttchment = h;
    f.sendAttchments = c
}
), null);
__d("MessengerUserInputUtils", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, b) {
        return a.createEntity("AUTOCOMPLETE", "MUTABLE", {
            mid: b.getUniqueID()
        })
    }
}
), null);
__d("createMessengerMentionDraftEntity", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, b) {
        return a.createEntity("MENTION", "SEGMENTED", {
            mid: b.getUniqueID()
        })
    }
}
), null);
__d("getProfileRangesForContentState", ["emptyFunction"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("emptyFunction").thatReturnsTrue;
    function a(a, b) {
        var c = []
          , d = 0;
        a.getBlockMap().forEach(function(e) {
            var f = e.getText();
            e.findEntityRanges(g, function(f, g) {
                var h = e.getEntityAt(f);
                if (h) {
                    h = a.getEntity(h);
                    if (h.getType() === "MENTION") {
                        var i = f + d;
                        h = h.getData().mid;
                        var j = null;
                        b && h === b ? j = "t" : b && h === b + "-active" ? (h = b,
                        j = "a") : /^\d+$/.test(h) && (j = "p");
                        j !== null && c.push({
                            id: h,
                            offset: i,
                            length: g - f,
                            type: j
                        })
                    }
                }
            });
            d += f.length + 1
        });
        return c
    }
}
), null);
__d("getVisibleValueForContentStateWithMessengerEmoji", ["EmojiFormat.bs", "emptyFunction"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        var c = a.getBlockMap().map(function(c) {
            var d = c.getText()
              , e = "";
            c.findEntityRanges(b("emptyFunction").thatReturnsTrue, function(f, g) {
                var h = c.getEntityAt(f);
                if (!h)
                    e += d.slice(f, g);
                else {
                    h = a.getEntity(h);
                    if (h.getType() === "EMOTICON")
                        e += h.getData().originalEmoticon;
                    else if (h.getType() === "EMOJI") {
                        h = h.getData().type;
                        h = b("EmojiFormat.bs").codeStringToCodeArray(h);
                        e += String.fromCodePoint.apply(String, h)
                    } else
                        e += d.slice(f, g)
                }
            });
            return e
        });
        return c.join("\n")
    }
}
), null);
__d("insertMessengerEmojiIntoContentState", ["DraftModifier", "EmojiFormat.bs"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c, d, e) {
        var f = c.createEntity("EMOJI", "IMMUTABLE", {
            type: a
        });
        f = f.getLastCreatedEntityKey();
        var g = d.isCollapsed();
        if (g)
            return b("DraftModifier").insertText(c, d, b("EmojiFormat.bs").codeStringToUnicode(a), e, f);
        else
            return b("DraftModifier").replaceText(c, d, b("EmojiFormat.bs").codeStringToUnicode(a), e, f)
    }
}
), null);
__d("handleBeforeInputForMessengerEmoji", ["EditorState", "MessengerSupportedEmojiUtils", "insertMessengerEmojiIntoContentState"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c) {
        var d = a.getSelection();
        if (!d.isCollapsed() || !c)
            return a;
        c = b("MessengerSupportedEmojiUtils").getEmojiMatchObj(c);
        if (!c || !c.is_supported)
            return a;
        c = b("insertMessengerEmojiIntoContentState")(c.emoji_key, a.getCurrentContent(), d, a.getCurrentInlineStyle());
        return b("EditorState").push(a, c, "insert-characters")
    }
}
), null);
__d("applyMessengerEmoticonToContentBlock", ["CharacterMetadata", "EmoticonEmojiList"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c, d, e) {
        if (!b("EmoticonEmojiList").names[d])
            return c;
        var f = c.getCharacterList()
          , g = a.createEntity("EMOTICON", "IMMUTABLE", {
            type: b("EmoticonEmojiList").names[d],
            originalEmoticon: d
        }).getLastCreatedEntityKey();
        return c.merge({
            characterList: f.slice(0, e).concat(f.slice(e, e + d.length).map(function(a) {
                return b("CharacterMetadata").applyEntity(a, g)
            }), f.slice(e + d.length))
        })
    }
}
), null);
__d("getTextAfterNearestEntity", [], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a, b) {
        var c = b;
        while (c > 0 && a.getEntityAt(c - 1) === null)
            c--;
        return a.getText().slice(c, b)
    }
    e.exports = a
}
), null);
__d("applyMessengerEmoticonToContentState", ["EmoticonEmojiList", "applyMessengerEmoticonToContentBlock", "getTextAfterNearestEntity"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c) {
        var d = c.getAnchorKey()
          , e = c.getAnchorOffset()
          , f = a.getBlockForKey(d)
          , g = b("getTextAfterNearestEntity")(f, e)
          , h = b("EmoticonEmojiList").regexp.exec(g);
        if (!h)
            return a;
        var i = h[1];
        if (!i && e !== g.length)
            return a;
        i = h[2];
        g = e - g.length;
        g = g + h.index + h[1].length;
        h = a.getBlockMap().set(d, b("applyMessengerEmoticonToContentBlock")(a, f, i, g));
        return a.merge({
            blockMap: h,
            selectionBefore: c,
            selectionAfter: c.merge({
                anchorOffset: e,
                focusOffset: e
            })
        })
    }
}
), null);
__d("handleBeforeInputForMessengerEmoticon", ["DraftModifier", "EditorState", "applyMessengerEmoticonToContentState"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = new RegExp(/[\s\'\".,!?]/);
    function a(a, c) {
        var d = a.getSelection();
        if (!d.isCollapsed() || !c || !g.test(c))
            return a;
        var e = a.getCurrentContent();
        d = b("applyMessengerEmoticonToContentState")(e, d);
        if (d === e)
            return a;
        e = b("DraftModifier").insertText(d, d.getSelectionAfter(), c);
        return b("EditorState").push(a, e, "insert-characters")
    }
}
), null);
__d("handleSoftNewlineForMessengerEmoticon", ["DraftModifier", "EditorState", "applyMessengerEmoticonToContentState"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a) {
        var c = a.getCurrentContent()
          , d = a.getSelection()
          , e = b("applyMessengerEmoticonToContentState")(c, d);
        c = b("DraftModifier").splitBlock(e, c === e ? d : e.getSelectionAfter());
        return b("EditorState").push(a, c, "split-block")
    }
}
), null);
__d("applyEmoticonToContentBlock", ["CharacterMetadata", "EmoticonsList", "immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("immutable").List
      , h = "\u3000";
    function a(a, c, d, e) {
        if (!b("EmoticonsList").emotes[c])
            return a;
        e = e.createEntity("EMOTICON", "IMMUTABLE", {
            type: b("EmoticonsList").emotes[c],
            originalEmoticon: c
        });
        e = e.getLastCreatedEntityKey();
        var f = a.getText()
          , i = a.getCharacterList();
        c = c.length;
        var j = i.get(d);
        return a.merge({
            text: f.slice(0, d) + h + f.slice(d + c),
            characterList: i.slice(0, d).concat(g.of(b("CharacterMetadata").applyEntity(j, e)), i.slice(d + c))
        })
    }
}
), null);
__d("insertEmoticonIntoContentState", ["DraftModifier", "applyEmoticonToContentBlock"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    function a(a, c, d) {
        var e = b("DraftModifier").replaceText(c, d, a)
          , f = d.getAnchorKey()
          , g = d.getAnchorOffset()
          , h = e.getBlockForKey(f);
        e = e.getBlockMap().set(f, b("applyEmoticonToContentBlock")(h, a, g, c));
        g++;
        return c.merge({
            blockMap: e,
            selectionBefore: d,
            selectionAfter: d.merge({
                anchorOffset: g,
                focusOffset: g
            })
        })
    }
}
), null);
__d("insertEmoticonIntoEditorState", ["DraftModifier", "EditorState", "insertEmoticonIntoContentState"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = " ";
    function a(a, c) {
        var d = c.getSelection()
          , e = c.getCurrentContent()
          , f = d.getStartOffset()
          , h = d.getEndOffset()
          , i = e.getBlockForKey(d.getStartKey()).getText()
          , j = e.getBlockForKey(d.getEndKey()).getText()
          , k = "";
        h <= j.length && j[h] !== g && (k = g);
        f > 0 && i[f - 1] !== g && (e = b("DraftModifier").insertText(e, d, g),
        d = e.getSelectionAfter());
        j = b("insertEmoticonIntoContentState")(a, e, d);
        e = b("DraftModifier").insertText(j, j.getSelectionAfter(), k);
        return b("EditorState").push(c, e, "insert-characters")
    }
}
), null);
__d("M4IconSVG.bs", ["React"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a) {
        var b = a.size;
        a = a.children;
        b = b !== void 0 ? b : "16px";
        a = g.Children.toArray(a);
        return g.jsx("svg", {
            children: a,
            className: "svgIcon",
            height: b,
            width: b,
            version: "1.1",
            viewBox: "0 0 16 16",
            x: "0px",
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            xmlSpace: "preserve",
            y: "0px"
        }, "svg")
    }
    c = a;
    f.make = c
}
), null);
__d("M4IconPhoto.bs", ["React", "M4IconSVG.bs"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a) {
        var c = a.filled;
        a = a.color;
        c = c !== void 0 ? c : !0;
        a = a !== void 0 ? a : "blue";
        var d = {
            fill: "none",
            stroke: a,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10"
        };
        return g.jsxs(b("M4IconSVG.bs").make, {
            children: [c ? g.jsxs("g", {
                children: [g.jsx("path", {
                    d: "M1.3,13.1L2,1.7c0-0.1,0-0.2,0-0.4L1.2,1.4C0.5,1.5,0,2.4,0,3.4l0.6,10.9c0,0.5,0.2,0.9,0.4,1.3C1.4,15.8,1.7,16,1.9,16 c0,0,0.1,0,0.1,0l0.3,0C1.7,15.4,1.2,14.3,1.3,13.1z",
                    fill: a
                }, "bg"), g.jsx("path", {
                    d: "M13,6.2c-0.2-0.2-0.6-0.3-0.8-0.1L9.4,8.5c-0.2,0.1-0.2,0.4,0,0.6L10,9.8c0.2,0.2,0.2,0.6-0.1,0.8c-0.1,0.1-0.2,0.1-0.4,0.1 c-0.2,0-0.3-0.1-0.4-0.2L7.3,8.3C7.1,8.1,6.7,8,6.5,8.2l-2.6,2l-0.4,3.1c0,0.5,0.2,1.6,0.7,1.7l8.8,0.6c0.2,0,0.5,0,0.7-0.2 c0.2-0.2,0.5-0.7,0.6-0.9l0.6-5.9L13,6.2z",
                    fill: a
                }, "hills"), g.jsx("path", {
                    style: d,
                    d: "M12.9,15.5l-8.2-0.7C4,14.7,3.4,14,3.4,13.2l1-11.4C4.5,1,5.2,0.5,6,0.5l8.2,0.7C15,1.3,15.5,2,15.5,2.8 l-1,11.4C14.4,15,13.7,15.6,12.9,15.5z"
                }, "frame")]
            }, "filled") : g.jsxs("g", {
                children: [g.jsx("path", {
                    d: "M2.1,14.7c-0.1-0.1-0.2-0.3-0.2-0.5l0-0.1c-0.1-0.3-0.1-0.7-0.1-1.1l0-0.1L1,3.3c0-0.5,0.3-0.9,0.8-0.9l1-0.1l0.1-0.7\n              c0-0.1,0-0.2,0.1-0.4L1.7,1.4c-1,0.1-1.8,1-1.7,2l0.9,10.9c0,0.5,0.3,0.9,0.7,1.3C1.9,15.8,2.3,16,2.8,16c0.1,0,0.1,0,0.2,0l0.5,0\n              C2.8,15.7,2.4,15.2,2.1,14.7z",
                    fill: a
                }, "bg"), g.jsx("path", {
                    style: d,
                    d: "M12.9,15.5l-8.3-0.7c-0.8-0.1-1.4-0.8-1.3-1.6l1-11.4C4.3,1,5.1,0.4,5.8,0.5l8.3,0.7C15,1.3,15.5,2,15.5,2.8 l-1,11.4C14.4,15,13.7,15.6,12.9,15.5z"
                }, "frame"), g.jsx("polyline", {
                    style: d,
                    points: "3.5,11 6.9,8.6 9.2,11.3 "
                }, "left-hill"), g.jsx("polyline", {
                    style: d,
                    points: "14.6,9 12.5,6.5 8.3,10 "
                }, "right-hill")]
            }, "outline"), g.jsx("circle", {
                cx: "7.5",
                cy: "4.5",
                fill: a,
                r: "1.5"
            }, "sun")]
        })
    }
    c = a;
    f.make = c
}
), null);
__d("M4IconPhoto.re", ["M4IconPhoto.bs"], (function(a, b, c, d, e, f) {
    (function(a) {
        return null
    }
    );
    a = b("M4IconPhoto.bs").make;
    f.make = a
}
), null);
__d("MessengerCustomColorUtils.re", ["MessengerCustomColorUtils.bs"], (function(a, b, c, d, e, f) {
    a = b("MessengerCustomColorUtils.bs").defaultColor;
    f.defaultColor = a;
    c = b("MessengerCustomColorUtils.bs").customColorOrBlue;
    f.customColorOrBlue = c
}
), null);
__d("MessengerPaperclipIconSVGM4React.bs", ["cx", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function a(a) {
        return h.jsx("svg", {
            children: h.jsxs("g", {
                children: [h.jsx("polygon", {
                    points: "0 36 36 36 36 0 0 0"
                }), h.jsx("path", {
                    d: "M18,31 C13.5815,31 10,27.4185 10,23 L10,11 C10,7.6865 12.6865,5 16,5 C19.3135,5 22,7.6865 22,11 L22,21 C22,23.209 20.209,25 18,25 C15.791,25 14,23.209 14,21 L14,14.5 C14,13.6715 14.6715,13 15.5,13 C16.3285,13 17,13.6715 17,14.5 L17,21 C17,21.552 17.448,22 18,22 C18.552,22 19,21.552 19,21 L19,11 C19,9.3435 17.6565,8 16,8 C14.3435,8 13,9.3435 13,11 L13,23 C13,25.761 15.239,28 18,28 C20.761,28 23,25.761 23,23 L23,14.5 C23,13.6715 23.6715,13 24.5,13 C25.3285,13 26,13.6715 26,14.5 L26,23 C26,27.4185 22.4185,31 18,31",
                    fill: a
                })],
                fill: "none",
                fillRule: "evenodd"
            }),
            className: "_7oal",
            height: "36px",
            width: "36px",
            viewBox: "0 0 36 36"
        })
    }
    f.make = a
}
), null);
__d("MessengerPaperclipIconSVGM4React.re", ["MessengerPaperclipIconSVGM4React.bs"], (function(a, b, c, d, e, f) {
    a = function(a) {
        a = b("MessengerPaperclipIconSVGM4React.bs").make(a.fill);
        return a
    }
    ;
    f.make = a
}
), null);
__d("MessengerPhotoIconSVGM4React.bs", ["cx", "React"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    function a(a) {
        var b = a.size;
        a = a.fill;
        b = b !== void 0 ? b : 36;
        return h.jsx("svg", {
            children: h.jsx("g", {
                children: h.jsxs("g", {
                    children: [h.jsx("polygon", {
                        points: "0 36 36 36 36 0 0 0"
                    }), h.jsx("path", {
                        d: "M13.5,11 C12.1195,11 11,12.119 11,13.5 C11,14.881 12.1195,16 13.5,16 C14.8805,16 16,14.881 16,13.5 C16,12.119 14.8805,11 13.5,11 M26.638,21.467 L21.2375,18.767 C19.199,17.7485 16.801,17.7485 14.7625,18.767 L9.362,21.467 C9.1955,21.55 9,21.429 9,21.243 L9,11 C9,9.8955 9.8955,9 11,9 L25,9 C26.1045,9 27,9.8955 27,11 L27,21.243 C27,21.429 26.8045,21.55 26.638,21.467 M25,7 L11,7 C8.7905,7 7,8.791 7,11 L7,25 C7,27.209 8.7905,29 11,29 L25,29 C27.209,29 29,27.209 29,25 L29,11 C29,8.791 27.209,7 25,7",
                        fill: a
                    })],
                    id: "Group"
                }),
                fill: "none",
                fillRule: "evenodd"
            }),
            className: "_7oal",
            height: String(b) + "px",
            width: String(b) + "px",
            viewBox: "0 0 36 36"
        })
    }
    c = a;
    f.make = c
}
), null);
__d("MessengerPhotoIconSVGM4React.re", ["MessengerPhotoIconSVGM4React.bs"], (function(a, b, c, d, e, f) {
    (function(a) {
        return null
    }
    );
    a = b("MessengerPhotoIconSVGM4React.bs").make;
    f.make = a
}
), null);
__d("MessengerSurfaceType.bs", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = "MESSENGER";
    b = "WORK_QUIKCHAT";
    c = "WORK_CHAT";
    f.messenger = a;
    f.workQuickchat = b;
    f.workChat = c
}
), null);
__d("MessengerSurfaceContext.bs", ["React", "MessengerSurfaceType.bs"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = a.createContext(b("MessengerSurfaceType.bs").messenger);
    d = b("MessengerSurfaceType.bs").messenger;
    f.defaultValue = d;
    f.context = c
}
), null);
__d("MessengerSurfaceQuickChat.bs", ["React", "MessengerSurfaceType.bs", "MessengerSurfaceContext.bs"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a) {
        a = g.useContext(b("MessengerSurfaceContext.bs").context);
        return a === b("MessengerSurfaceType.bs").workQuickchat
    }
    f.useIsQuickChatSurface = a
}
), null);
__d("MessengerSurfaceQuickChat.re", ["MessengerSurfaceQuickChat.bs"], (function(a, b, c, d, e, f) {
    a = b("MessengerSurfaceQuickChat.bs").useIsQuickChatSurface;
    f.useIsQuickChatSurface = a
}
), null);
__d("ChatPhotoUploaderIcon.react", ["ix", "fbt", "ChatConfig", "CurrentUser", "Image", "M4IconPhoto.re", "MessengerCustomColorUtils.re", "MessengerDotComAndInboxM4Check.re", "MessengerEnvironment", "MessengerPaperclipIconSVGM4React.re", "MessengerPhotoIconSVGM4React.re", "MessengerSurfaceQuickChat.re", "React", "asset", "gkx"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i = b("React");
    function a(a) {
        var c = b("MessengerSurfaceQuickChat.re").useIsQuickChatSurface()
          , d = a.fill != null ? a.fill : b("MessengerCustomColorUtils.re").defaultColor();
        if (b("gkx")("1192386"))
            return i.jsx(b("Image"), {
                source: g("1180209")
            });
        else if (b("MessengerDotComAndInboxM4Check.re").yes)
            return b("MessengerPhotoIconSVGM4React.re").make({
                fill: d
            });
        else if (!b("MessengerEnvironment").messengerui && b("ChatConfig").get("single_line_composer"))
            return i.jsx(b("M4IconPhoto.re").make, {
                filled: !1,
                color: a.color == null ? void 0 : a.color
            });
        else if (b("MessengerEnvironment").messengerui && b("CurrentUser").isWorkUser() && b("gkx")("1072568") && !c)
            return a.imagesOnly ? b("MessengerPhotoIconSVGM4React.re").make({
                fill: d
            }) : b("MessengerPaperclipIconSVGM4React.re").make({
                fill: d
            });
        return i.jsx("i", {
            className: a.imageClassName,
            alt: h._("Camera")
        })
    }
}
), null);
__d("ChatPhotoUploader.react", ["cssVar", "cx", "fbt", "Promise", "Bootloader", "ChatConfig", "ChatPhotoUploaderIcon.react", "Keys", "MercuryConfig", "MessengerEnvironment", "React", "ReactDOM", "SubscriptionsHandler", "TooltipData", "emptyFunction", "ifRequired", "joinClasses", "promiseDone"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = b("Keys").RETURN
      , k = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(c) {
            var d;
            d = a.call(this, c) || this;
            d.$2 = !1;
            d.$6 = !1;
            d.$15 = function(a, b) {
                d.props.onSubmit && d.props.onSubmit(a, b),
                d.$16("show_file_placeholder")
            }
            ;
            d.$17 = function(a, b) {
                d.props.onAllUploadsComplete && d.props.onAllUploadsComplete(a, b),
                d.$16("upload_files_complete"),
                d.$6 || d.$11()
            }
            ;
            d.$18 = function(a, b) {
                d.props.onLastUploadFail && d.props.onLastUploadFail(a, b),
                d.$6 || d.$11()
            }
            ;
            d.$19 = function(a, b) {
                d.props.onLastUploadCancel && d.props.onLastUploadCancel(a, b),
                d.$6 || d.$11()
            }
            ;
            d.$20 = function(a, b) {
                d.props.onUploadError && d.props.onUploadError(b),
                d.$16("upload_file_failed"),
                d.$6 || d.$11()
            }
            ;
            d.$21 = function() {
                d.$3 || (d.$2 = !0,
                d.$3 = new (b("Promise"))(function(a) {
                    d.$5.addSubscriptions(b("Bootloader").loadModules(["ChatAutoSendPhotoUploader"], function(c) {
                        b("promiseDone")(d.$4, function(e) {
                            d.$2 = !1;
                            if (!d.$7) {
                                a(null);
                                return
                            }
                            e = new c(b("ReactDOM").findDOMNode(d.$7),b("ReactDOM").findDOMNode(d.$9),b("ReactDOM").findDOMNode(d.$10),b("MercuryConfig").msgr_region);
                            e.setAllowCrossPage(d.props.allowCrossPage);
                            d.$5.addSubscriptions(e.subscribe("submit", d.$15), e.subscribe("all-uploads-completed", d.$17), e.subscribe("last-upload-failed", d.$18), e.subscribe("last-upload-canceled", d.$19), e.subscribe("file-upload-error", d.$20));
                            d.$1 = e;
                            a(d.$1)
                        })
                    }, "ChatPhotoUploader.react"))
                }
                ));
                return d.$3
            }
            ;
            d.$4 = new (b("Promise"))(function(a, b) {
                d.$8 = a
            }
            );
            d.$5 = new (b("SubscriptionsHandler"))();
            return d
        }
        var d = c.prototype;
        d.shouldComponentUpdate = function(a) {
            return a.actionURI != this.props.actionURI || a.disabled !== this.props.disabled || a.threadID !== this.props.threadID || a.color !== this.props.color || a.fill !== this.props.fill
        }
        ;
        d.componentDidMount = function() {
            this.$6 = !0,
            typeof this.props.onMount === "function" && this.props.onMount(this),
            this.$5.addSubscriptions(b("MessengerEnvironment").messengerui ? b("Bootloader").loadModules(["MessengerActions"], b("emptyFunction"), "ChatPhotoUploader.react") : b("Bootloader").loadModules(["FantaMessageActions"], b("emptyFunction"), "ChatPhotoUploader.react"))
        }
        ;
        d.componentDidUpdate = function() {
            this.$1 && this.$1.setAllowCrossPage(this.props.allowCrossPage)
        }
        ;
        d.componentWillUnmount = function() {
            (!this.isUploading() || !this.props.allowCrossPage) && this.$11(),
            this.$6 = !1
        }
        ;
        d.$12 = function(a) {
            a.keyCode === j && this.$9 != null && this.$9.click()
        }
        ;
        d.render = function() {
            var a = this
              , c = b("ChatConfig").get("single_line_composer") && !b("MessengerEnvironment").messengerui ? i._("Th\u00eam \u1ea3nh, video v\u00e0 file") : ""
              , d = this.props.imagesOnly ? i._("Th\u00eam \u1ea3nh") : i._("Th\u00eam file")
              , e = b("joinClasses")("_4q61" + (this.props.customUI ? "" : " _5f0v") + (this.props.customUI ? "" : " _509v"), this.props.linkClassName)
              , f = this.props.threadID;
            return k.jsxs("form", babelHelpers["extends"]({
                action: this.props.actionURI,
                className: "_vzk _4uld",
                title: d
            }, b("TooltipData").propsFor(c), {
                method: "post",
                onClick: function(b) {
                    b.stopPropagation(),
                    a.props.disabled && b.preventDefault(),
                    a.$13()
                },
                ref: function(b) {
                    return b && a.$8(a.$7 = b)
                },
                children: [k.jsx("input", {
                    type: "hidden",
                    name: "attach_id",
                    ref: function(b) {
                        return a.$10 = b
                    }
                }), k.jsx("input", {
                    type: "hidden",
                    name: "images_only",
                    value: this.props.imagesOnly
                }), k.jsx("div", {
                    tabIndex: 0,
                    onKeyDown: function(b) {
                        a.$12(b)
                    },
                    role: "button",
                    className: b("joinClasses")(this.props.className, "_m _6a _4q60 _3rzn"),
                    "data-testid": void 0,
                    children: k.jsxs("span", {
                        className: e,
                        children: [k.jsx(b("ChatPhotoUploaderIcon.react"), {
                            color: this.props.color,
                            fill: this.props.fill,
                            imagesOnly: this.props.imagesOnly === !0,
                            imageClassName: this.props.imageClassName
                        }), k.jsx("input", {
                            disabled: this.props.disabled,
                            type: "file",
                            className: b("joinClasses")(this.props.inputClassname, "_n _2__f _4e5e"),
                            "data-testid": void 0,
                            name: "attachment[]",
                            multiple: !0,
                            accept: this.props.imagesOnly ? "image/*" : "*",
                            ref: function(b) {
                                return a.$9 = b
                            },
                            title: d,
                            onChange: function(b) {
                                a.$14(b, f)
                            }
                        })]
                    })
                })]
            }))
        }
        ;
        d.$13 = function() {
            var a = this.props.imagesOnly;
            b("Bootloader").loadModules(["M4ComposerTypedLogger", "M4ComposerLoggerEvents"], function(b, c) {
                new b().setEvent(a ? c.CLICK_PHOTO_UPLOADER : c.CLICK_FILE_UPLOADER).log()
            }, "ChatPhotoUploader.react")
        }
        ;
        d.$14 = function(a, c) {
            var d = this
              , e = a.target.files
              , f = function() {
                d.$9 && (d.$9.value = "")
            };
            b("MessengerEnvironment").messengerui ? b("ifRequired")("MessengerActions", function(a) {
                a.prepareFilesForSend(c, e, "ComposerIcons"),
                f()
            }, function() {
                d.$5.addSubscriptions(b("Bootloader").loadModules(["MessengerActions"], function(a) {
                    a.prepareFilesForSend(c, e, "ComposerIcons"),
                    f()
                }, "ChatPhotoUploader.react"))
            }) : b("ifRequired")("FantaMessageActions", function(a) {
                d.props.composer && a.prepareFilesForSend(c, e, d.props.composer, f)
            }, function() {
                d.$5.addSubscriptions(b("Bootloader").loadModules(["FantaMessageActions"], function(a) {
                    d.props.composer && a.prepareFilesForSend(c, e, d.props.composer, f)
                }, "ChatPhotoUploader.react"))
            });
            this.props.focusInput && this.props.focusInput()
        }
        ;
        d.$16 = function(a) {
            var c = this.props.threadID;
            if (!c)
                return;
            this.$5.addSubscriptions(b("Bootloader").loadModules(["MessengerShareFilePreviewFunnelLogger", "MessengerShareFilePreviewFunnelLoggerConstants"], function(d, e) {
                d.appendAction(!b("MessengerEnvironment").messengerui, a, c),
                a === e.UPLOAD_FILES_COMPLETE && d.endFunnel(c)
            }, "ChatPhotoUploader.react"))
        }
        ;
        d.isUploading = function() {
            return this.$1 && this.$1.isUploading() || !!this.$2
        }
        ;
        d.uploadFiles = function(a) {
            b("promiseDone")(this.$21(), function(b) {
                b == null ? void 0 : b.uploadFiles(a)
            })
        }
        ;
        d.uploadURL = function(a) {
            b("promiseDone")(this.$21(), function(b) {
                b == null ? void 0 : b.uploadURL(a)
            })
        }
        ;
        d.$11 = function() {
            this.$5.release(),
            this.$1 && this.$1.destroy()
        }
        ;
        return c
    }(k.Component);
    e.exports = a;
    a.defaultProps = {
        actionURI: b("MercuryConfig").upload_url,
        allowCrossPage: !0,
        customUI: !1,
        disabled: !1,
        imageClassName: "_509w",
        imagesOnly: !0,
        linkClassName: "",
        onSubmit: c = b("emptyFunction"),
        onAllUploadsComplete: c,
        onLastUploadFail: c,
        onLastUploadCancel: c,
        color: "#0084ff"
    }
}
), null);
__d("CustomColorHighlighting.react", ["cssVar", "csx", "cx", "React", "UserAgent", "guid", "joinClasses", "prop-types"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = b("React");
    a = "._fy2";
    c = "._43by";
    d = "._mh6";
    f = b("UserAgent").isEngine("Gecko") ? "._mh6 *::-moz-selection" : "._mh6 ::selection";
    g = b("UserAgent").isEngine("Gecko") ? "._43by *::-moz-selection" : "._43by ::selection";
    var k = a + a
      , l = c + c
      , m = d + f
      , n = d + d
      , o = c + g
      , p = "rgba(255, 255, 255, 0.3)";
    h = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(c) {
            c = a.call(this, c) || this;
            c.state = {
                id: "cch_" + b("guid")()
            };
            return c
        }
        var d = c.prototype;
        d.UNSAFE_componentWillMount = function() {
            this.$1()
        }
        ;
        d.componentWillUnmount = function() {
            this.$2(),
            this.state.styleTag && document.head.removeChild(this.state.styleTag)
        }
        ;
        d.UNSAFE_componentWillReceiveProps = function(a) {
            this.props.customColor && !a.customColor ? this.$2() : a.customColor !== this.props.customColor && this.$3(a.customColor)
        }
        ;
        d.render = function() {
            return j.jsx("span", {
                className: b("joinClasses")("_mh6", this.props.className),
                id: this.state.id,
                children: this.props.children
            })
        }
        ;
        d.$1 = function() {
            var a = this
              , b = document.createElement("style");
            b.appendChild(document.createTextNode(""));
            document.head.appendChild(b);
            this.setState({
                styleSheet: b.sheet,
                styleTag: b
            }, function() {
                return a.$3(a.props.customColor)
            })
        }
        ;
        d.$4 = function(a, b, c) {
            try {
                a.insertRule ? a.insertRule(b + "{" + c + "}", 0) : a.addRule && a.addRule(b, c, 0)
            } catch (a) {}
        }
        ;
        d.$5 = function(a) {
            "removeRule"in a ? a.removeRule(0) : "deleteRule"in a && a.deleteRule(0)
        }
        ;
        d.$2 = function() {
            if (this.state.styleSheet) {
                if (this.state.styleSheet.rules)
                    while (this.state.styleSheet.rules.length)
                        this.$5(this.state.styleSheet);
                if (this.state.styleSheet.cssRules)
                    while (this.state.styleSheet.cssRules.length)
                        this.$5(this.state.styleSheet)
            }
        }
        ;
        d.$6 = function(a) {
            a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
            var b = parseInt(a[1], 16)
              , c = parseInt(a[2], 16);
            a = parseInt(a[3], 16);
            return "rgba(" + b + "," + c + "," + a + ",0.2)"
        }
        ;
        d.$3 = function(a) {
            this.$2();
            a = a || this.props.customColor;
            if (a) {
                var b = this.$6(a);
                b = "background: " + b;
                this.$4(this.state.styleSheet, "#" + this.state.id + m, b);
                this.$4(this.state.styleSheet, "#" + this.state.id + " " + k, "color: " + a);
                this.$4(this.state.styleSheet, "#" + this.state.id + " " + l, "background-color: " + a);
                this.$4(this.state.styleSheet, "#" + this.state.id + n + " " + o, "background-color: " + p)
            }
        }
        ;
        return c
    }(j.PureComponent);
    e.exports = h;
    h.propTypes = {
        className: b("prop-types").string,
        customColor: b("prop-types").string
    }
}
), null);
__d("MessengerHotLikeOutlineSVG.react", ["cssVar", "fbt", "CurrentUser", "MercuryShareAttachmentRenderLocations", "React", "uniqueID"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React")
      , j = "transparent"
      , k = h._("D\u1ea5u hi\u1ec7u gi\u01a1 ng\u00f3n c\u00e1i");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.state = {
                titleId: b("uniqueID")()
            },
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.render = function() {
            var a, c;
            a = (a = this.props.color) != null ? a : b("CurrentUser").isWorkUser() ? "#373e4c" : "#0084ff";
            c = {
                height: (c = this.props.height) != null ? c : "85%",
                width: this.props.width
            };
            if (this.props.location !== b("MercuryShareAttachmentRenderLocations").CHAT && this.props.location !== b("MercuryShareAttachmentRenderLocations").PAGES_INBOX) {
                var d;
                c.width = (d = this.props.width) != null ? d : "66%"
            }
            return i.jsxs("svg", {
                "aria-labelledby": this.state.titleId,
                version: "1.1",
                viewBox: "0 0 40.16 42.24",
                preserveAspectRatio: "xMinYMax meet",
                style: c,
                children: [i.jsx("title", {
                    id: this.state.titleId,
                    children: k
                }), i.jsx("path", {
                    d: "M935.36,1582.44a0,0,0,0,0,0,.06,3.59,3.59,0,0,1-.72,6.53,0,0,0,0,0,0,0,3.56,3.56,0,0,1,.71,2.13,3.6,3.6,0,0,1-3,3.54, 0,0,0,0,0,0,.05,3.56,3.56,0,0,1,.38,1.61,3.61,3.61,0,0,1-3.42,3.6H910v-19.6l5.27-7.9a4,4,0,0,0,.66-2.31l-0.1-4c-0.22-2.4-.09-2.06, 1.13-2.37,2-.51,7.16,1.59,5.13,12.17h11.06A3.59,3.59,0,0,1,935.36,1582.44ZM899,1581h7v22h-7v-22Z",
                    transform: "translate(-898.5 -1563.26)",
                    fill: j,
                    fillRule: "evenodd",
                    stroke: a,
                    strokeLinecap: "round",
                    strokeWidth: "5%"
                })]
            })
        }
        ;
        return c
    }(i.Component);
    e.exports = a
}
), null);
__d("MessengerHotLikeButtonInnerIcon.react", ["cssVar", "CurrentUser", "EmojiLikeConstants", "Image.react", "MessengerCustomColorUtils.bs", "MessengerHotLikeIconSVGM4React.bs", "MessengerHotLikeOutlineSVG.react", "MessengerSupportedEmojiUtils", "React", "gkx"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a(a) {
        var c = a.CustomRenderer
          , d = a.customLike
          , e = a.customColor
          , f = a.location
          , g = a.disabled
          , i = a.renderSize;
        i = i === void 0 ? 16 : i;
        a = a.thread;
        var j = null
          , k = {};
        if (d && d.emoji) {
            d = d.emoji;
            d = b("MessengerSupportedEmojiUtils").getNewEmojiData(d, b("EmojiLikeConstants").size.SMALL);
            k.background = "none";
            j = h.jsx(b("Image.react"), {
                src: d && d.url,
                style: {
                    padding: i == 16 ? 0 : 3,
                    display: "block",
                    height: i,
                    width: i
                }
            })
        } else if (c)
            j = h.jsx(c, {
                color: e,
                location: f,
                renderSize: i
            });
        else if (e)
            if (!b("CurrentUser").isWorkUser() || b("gkx")("1072568")) {
                k = a && a.gradient_colors && a.gradient_colors.length ? a.gradient_colors[a.gradient_colors.length - 1] : e;
                j = h.jsx(b("MessengerHotLikeIconSVGM4React.bs").make, {
                    color: k
                })
            } else
                j = h.jsx(b("MessengerHotLikeOutlineSVG.react"), {
                    color: e,
                    location: f
                });
        else if (!b("CurrentUser").isWorkUser()) {
            d = g ? "rgba(0, 0, 0, 0.12)" : b("MessengerCustomColorUtils.bs").defaultColor();
            j = h.jsx(b("MessengerHotLikeIconSVGM4React.bs").make, {
                color: d
            })
        }
        return j
    }
}
), null);
__d("MessengerHotLikePreviewEvents", ["mixInEventEmitter"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        START: "start",
        STOP: "stop",
        STOP_EMOJI: "stop_emoji",
        POP: "pop",
        REMOVE: "remove",
        FINISH_ANIMATION: "finish_animation",
        FINISH_EMOJI_ANIMATION: "finish_emoji_animation"
    };
    b("mixInEventEmitter")(a, {
        start: !0,
        stop: !0,
        stop_emoji: !0,
        pop: !0,
        remove: "remove",
        finish_animation: "finish_animation",
        finish_emoji_animation: "finish_emoji_animation"
    });
    e.exports = a
}
), null);
__d("XStickerAssetController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/stickers/asset/", {
        sticker_id: {
            type: "Int",
            required: !0
        },
        image_type: {
            type: "Enum",
            defaultValue: "BestEffortImage",
            enumType: 1
        }
    })
}
), null);
__d("MessengerHotLikeUtils", ["EmojiLikeConstants", "StickerConstants", "XStickerAssetController"], (function(a, b, c, d, e, f) {
    "use strict";
    f.getStickerIDForTime = a;
    f.getEmojiSizeForTime = c;
    f.getMetadataForHotLike = d;
    f.getPreviewURI = e;
    f.getURIWithID = g;
    f.getCustomEmojiFromThread = h;
    a = {
        small: 1e3,
        medium: 2e3,
        large: 3e3
    };
    f.SizeTimes = a;
    function a(a) {
        var c = b("StickerConstants").HOT_LIKE_SMALL_STICKER_ID;
        switch (!0) {
        case a < this.SizeTimes.small:
            c = b("StickerConstants").HOT_LIKE_SMALL_STICKER_ID;
            break;
        case a < this.SizeTimes.medium:
            c = b("StickerConstants").HOT_LIKE_MEDIUM_STICKER_ID;
            break;
        case a < this.SizeTimes.large:
            c = b("StickerConstants").HOT_LIKE_LARGE_STICKER_ID;
            break
        }
        return c
    }
    function c(a) {
        var c = b("EmojiLikeConstants").size.SMALL;
        a < this.SizeTimes.small ? c = b("EmojiLikeConstants").size.SMALL : a < this.SizeTimes.medium ? c = b("EmojiLikeConstants").size.MEDIUM : a < this.SizeTimes.large && (c = b("EmojiLikeConstants").size.LARGE);
        return c
    }
    function d(a) {
        var c;
        switch (a) {
        case b("StickerConstants").HOT_LIKE_LARGE_STICKER_ID:
            c = 120;
            break;
        case b("StickerConstants").HOT_LIKE_MEDIUM_STICKER_ID:
            c = 84;
            break;
        case b("StickerConstants").HOT_LIKE_SMALL_STICKER_ID:
            c = 35;
            break;
        case b("EmojiLikeConstants").size.LARGE:
            c = 64;
            break;
        case b("EmojiLikeConstants").size.MEDIUM:
            c = 64;
            break;
        case b("EmojiLikeConstants").size.SMALL:
            c = 32;
            break
        }
        return c ? {
            height: c,
            width: c
        } : void 0
    }
    function e() {
        return b("XStickerAssetController").getURIBuilder().setInt("sticker_id", b("StickerConstants").HOT_LIKE_LARGE_STICKER_ID).setEnum("image_type", "BestEffortImage").getURI().toString()
    }
    function g(a) {
        return b("XStickerAssetController").getURIBuilder().setInt("sticker_id", a).setEnum("image_type", "BestEffortImage").getURI().toString()
    }
    function h(a) {
        return a && a.custom_like_icon
    }
}
), null);
__d("MessengerSurfaceContext.re", ["MessengerSurfaceContext.bs"], (function(a, b, c, d, e, f) {
    a = b("MessengerSurfaceContext.bs").context;
    f.context = a
}
), null);
__d("MessengerSurfaceType.re", ["MessengerSurfaceType.bs"], (function(a, b, c, d, e, f) {
    a = b("MessengerSurfaceType.bs").messenger;
    f.messenger = a;
    c = b("MessengerSurfaceType.bs").workQuickchat;
    f.workQuickchat = c;
    d = b("MessengerSurfaceType.bs").workChat;
    f.workChat = d
}
), null);
__d("WorkQuickchatHotLikeInnerButton.react", ["cssVar", "cx", "EmojiLikeConstants", "Image.react", "MessengerCustomColorUtils.bs", "MessengerDotComAndInboxM4Check.bs", "MessengerHotLikeIconSVGM4React.bs", "MessengerHotLikeOutlineSVG.react", "MessengerSupportedEmojiUtils", "React"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    e.exports = a;
    var i = b("React");
    function a(a) {
        var c = a.CustomRenderer
          , d = a.customLike
          , e = a.customColor
          , f = a.location
          , g = a.disabled
          , h = a.renderSize;
        a = a.thread;
        var j = null;
        if (d && d.emoji) {
            d = d.emoji;
            d = b("MessengerSupportedEmojiUtils").getNewEmojiData(d, b("EmojiLikeConstants").size.SMALL);
            j = i.jsx(b("Image.react"), {
                className: "_7rpg",
                src: d && d.url
            })
        } else if (c) {
            d = this.props.CustomRenderer;
            j = i.jsx(d, {
                color: e,
                location: f,
                renderSize: h
            })
        } else if (e)
            if (b("MessengerDotComAndInboxM4Check.bs").yes) {
                c = a && a.gradient_colors && a.gradient_colors.length ? a.gradient_colors[a.gradient_colors.length - 1] : e;
                j = i.jsx(b("MessengerHotLikeIconSVGM4React.bs").make, {
                    color: c
                })
            } else
                j = i.jsx(b("MessengerHotLikeOutlineSVG.react"), {
                    height: "100%",
                    width: "100%",
                    color: e,
                    location: f
                });
        else
            b("MessengerDotComAndInboxM4Check.bs").yes && (j = b("MessengerHotLikeIconSVGM4React.bs").make.make(g ? "rgba(0, 0, 0, 0.12)" : b("MessengerCustomColorUtils.bs").defaultColor()));
        return j
    }
}
), null);
__d("MercuryTriodeSourceUtil", ["MessengerEnvironment"], (function(a, b, c, d, e, f) {
    "use strict";
    f.getMercuryTriodeSource = a;
    function a() {
        return b("MessengerEnvironment").messengerdotcom ? "source:messenger:web" : "source:titan:web"
    }
}
), null);
__d("MessengerSourceContext.bs", ["React", "MercuryTriodeSourceUtil"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("React");
    c = b("MercuryTriodeSourceUtil").getMercuryTriodeSource();
    d = a.createContext(c);
    f.defaultContextValue = c;
    f.context = d
}
), null);
__d("MessengerSourceContext.re", ["MessengerSourceContext.bs"], (function(a, b, c, d, e, f) {
    a = b("MessengerSourceContext.bs").context;
    f.context = a
}
), null);
__d("withMessengerSource", ["MessengerSourceContext.re", "React"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = b("React")
      , h = g.useContext;
    function a(a, c) {
        var d;
        c === !0 ? c = g.forwardRef(function(c, d) {
            var e = h(b("MessengerSourceContext.re").context);
            return g.jsx(a, babelHelpers["extends"]({}, c, {
                ref: d,
                source: e
            }))
        }) : c = function(c) {
            var d = h(b("MessengerSourceContext.re").context);
            return g.jsx(a, babelHelpers["extends"]({}, c, {
                source: d
            }))
        }
        ;
        c.displayName = ((d = (d = a.displayName) != null ? d : a.name) != null ? d : "Component") + "WithMessengerSource";
        return c
    }
}
), null);
__d("MessengerHotLikeButton.react", ["cx", "fbt", "Bootloader", "EmojiLikeConstants", "ImmutableObject", "Keys", "KeyStatus", "Link.react", "MercuryMessageObject", "MessengerEnvironment", "MessengerHotLikeButtonInnerIcon.react", "MessengerHotLikePreviewEvents", "MessengerHotLikeUtils", "MessengerSurfaceType.re", "MessengerSurfaceContext.re", "prop-types", "React", "StickerConstants", "WorkQuickchatHotLikeInnerButton.react", "clearInterval", "clearTimeout", "ifRequired", "joinClasses", "setIntervalAcrossTransitions", "setTimeoutAcrossTransitions", "withMessengerSource"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("MercuryMessageObject").get()
      , j = b("React")
      , k = j.useContext
      , l = function(c) {
        babelHelpers.inheritsLoose(a, c);
        function a() {
            var a, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (a = d = c.call.apply(c, [this].concat(f)) || this,
            d.$1 = null,
            d.$2 = null,
            d.$3 = null,
            d.$4 = null,
            d.$6 = function(a) {
                (d.props.disabled || d.$3) && (a.preventDefault(),
                a.stopPropagation());
                if (d.props.disabled || a.button !== 0)
                    return;
                d.props.onMouseDown && d.props.onMouseDown();
                d.$3 = Date.now();
                d.$9();
                d.$10()
            }
            ,
            d.$8 = function() {
                if (!(d.props.threadID && d.$3))
                    return;
                d.$3 = 0;
                d.$11();
                d.$12()
            }
            ,
            d.$14 = function() {
                if (!d.props.threadID)
                    return;
                b("MessengerHotLikePreviewEvents").emit(b("MessengerHotLikePreviewEvents").POP, d.props.threadID)
            }
            ,
            d.$7 = function() {
                d.$3 && (d.$3 = 0,
                d.$11(),
                d.$14())
            }
            ,
            d.$5 = function(a) {
                a.stopPropagation();
                if (d.props.disabled)
                    return;
                if (b("KeyStatus").getKeyDownCode() === b("Keys").RETURN || !d.props.threadID) {
                    a = d.props.sendCustomLike;
                    d.props.customLike && a ? a(d.props.customLike, b("MessengerHotLikeUtils").getEmojiSizeForTime(1)) : d.props.sendSticker(b("MessengerHotLikeUtils").getStickerIDForTime(1))
                }
            }
            ,
            a) || babelHelpers.assertThisInitialized(d)
        }
        var d = a.prototype;
        d.componentDidMount = function() {
            var a = this;
            this.$4 = b("MessengerHotLikePreviewEvents").addListener(b("MessengerHotLikePreviewEvents").FINISH_ANIMATION, function(c, d, e) {
                c === a.props.threadID && (a.props.forGameChat && b("Bootloader").loadModules(["GamesQuicksilverFunnelLogger"], function(a) {
                    a.logGameChatSendHotLike(a.getDefaultFunnelName())
                }, "MessengerHotLikeButton.react"),
                e && a.props.customLike && a.props.sendCustomLike ? a.props.sendCustomLike(a.props.customLike, e, b("EmojiLikeConstants").source.HOT_LIKE) : a.props.forGameChat || a.props.sendSticker(d))
            })
        }
        ;
        d.componentWillUnmount = function() {
            this.$4 && this.$4.remove()
        }
        ;
        d.render = function() {
            var a = h._("G\u1eedi l\u01b0\u1ee3t th\u00edch")
              , c = {};
            this.props.customLike && this.props.customLike.emoji && (c.background = "none");
            var d = this.props.surface === b("MessengerSurfaceType.re").workQuickchat ? b("WorkQuickchatHotLikeInnerButton.react") : b("MessengerHotLikeButtonInnerIcon.react");
            return j.jsx(b("Link.react"), {
                "aria-label": a,
                className: b("joinClasses")(this.props.customColor || this.props.CustomRenderer ? "_5j_u" : "", this.props.className),
                "data-testid": void 0,
                disabled: this.props.disabled,
                href: "#",
                onClick: this.$5,
                onDragStart: function(a) {
                    return a.preventDefault()
                },
                onMouseDown: this.$6,
                onMouseLeave: this.$7,
                onMouseUp: this.$8,
                role: "button",
                style: c,
                title: a,
                children: j.jsx(d, {
                    CustomRenderer: this.props.CustomRenderer,
                    customLike: this.props.customLike,
                    customColor: this.props.customColor,
                    location: this.props.location,
                    disabled: this.props.disabled,
                    renderSize: this.props.renderSize,
                    thread: this.props.thread
                })
            })
        }
        ;
        d.$9 = function() {
            if (!this.props.threadID)
                return;
            b("MessengerHotLikePreviewEvents").emit(b("MessengerHotLikePreviewEvents").START, this.$13(), this.props.threadID)
        }
        ;
        d.$12 = function() {
            var a = this;
            if (!this.props.threadID)
                return;
            !b("MessengerEnvironment").messengerui ? b("ifRequired")("MessengerHotLikePreview.react", function() {
                b("MessengerHotLikePreviewEvents").emit(b("MessengerHotLikePreviewEvents").STOP, a.props.threadID)
            }, function() {
                if (a.$1 !== null)
                    return;
                a.$1 = b("setIntervalAcrossTransitions")(function() {
                    b("ifRequired")("MessengerHotLikePreview.react", function() {
                        a.$1 !== null && (b("clearInterval")(a.$1),
                        a.$1 = null),
                        b("MessengerHotLikePreviewEvents").emit(b("MessengerHotLikePreviewEvents").STOP, a.props.threadID)
                    })
                }, 100)
            }) : b("MessengerHotLikePreviewEvents").emit(b("MessengerHotLikePreviewEvents").STOP, this.props.threadID)
        }
        ;
        d.$13 = function() {
            var a = this.props.threadID;
            if (!a)
                return null;
            a = i.constructStickerMessageObject(b("StickerConstants").HOT_LIKE_SMALL_STICKER_ID, this.props.source, a);
            i.normalizeNewMessage(a);
            a.is_like_preview = !0;
            a.like_preview_since = this.$3;
            a.customLike = this.props.customLike && this.props.customLike.emoji ? this.props.customLike : null;
            a.body = "";
            return new (b("ImmutableObject"))(a)
        }
        ;
        d.$10 = function() {
            this.$11(),
            this.$2 = b("setTimeoutAcrossTransitions")(this.$14, b("MessengerHotLikeUtils").SizeTimes.large)
        }
        ;
        d.$11 = function() {
            b("clearTimeout")(this.$2)
        }
        ;
        return a
    }(j.PureComponent);
    l.propTypes = {
        CustomRenderer: (c = b("prop-types")).func,
        onMouseDown: c.func,
        customLike: c.object,
        customColor: c.string,
        forGameChat: c.bool,
        location: c.string,
        sendSticker: c.func.isRequired,
        sendCustomLike: c.func,
        threadID: c.string,
        disabled: c.bool,
        renderSize: c.number,
        thread: c.object,
        surface: c.string.isRequired
    };
    function a(a) {
        var c = k(b("MessengerSurfaceContext.re").context);
        return j.jsx(l, babelHelpers["extends"]({}, a, {
            surface: c
        }))
    }
    d = b("withMessengerSource")(a);
    e.exports = d
}
), null);
__d("MessengerQuickCamOrigins", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.getValues = a;
    var g = "chat tab";
    f.CHAT_TAB = g;
    var h = "messenger";
    f.MESSENGER = h;
    function a() {
        return [g, h]
    }
}
), null);
__d("P2PAbstractSendMoneyButton.react", ["cx", "fbt", "React", "TooltipLink.react", "joinClasses"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.$1 = !1,
            c.$3 = function() {
                c.props.onMouseDown && c.props.onMouseDown(),
                c.$1 = c.props.isActive
            }
            ,
            c.$2 = function(a) {
                a.stopPropagation();
                if (c.$1) {
                    c.$1 = !1;
                    return
                }
                c.props.onClick()
            }
            ,
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.render = function() {
            return i.jsx(b("TooltipLink.react"), {
                alignH: "center",
                className: b("joinClasses")(this.props.className, (this.props.isActive ? "open" : "") + (this.props.isDisabled ? " disabled" : "") + (this.props.isActive ? " _10gz" : "") + (this.props.isDisabled ? " _10g-" : "") + (!this.props.isMessenger && !this.props.className ? " _5uqy" : "") + (this.props.isMessenger ? " _3ggc" : "")),
                href: "#",
                onClick: this.$2,
                onMouseDown: this.$3,
                onMouseOver: this.props.onMouseOver,
                position: "above",
                role: "button",
                title: this.$4(),
                children: this.getButton()
            })
        }
        ;
        d.getButton = function() {
            return this.props.button ? this.props.button : i.jsx("i", {
                className: "_5s8l"
            })
        }
        ;
        d.$4 = function() {
            return this.props.isDisabled ? null : h._("G\u1eedi ti\u1ec1n")
        }
        ;
        return c
    }(i.Component);
    e.exports = a
}
), null);
__d("P2PActionConstants", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({
        PAYMENT_METHODS_UPDATED: "credit_cards_updated",
        PAYMENT_METHODS_UPDATED_ERROR: "credit_cards_updated_error",
        CHANNEL_EVENTS_ALLOWED: "channel_events_allowed",
        CHANNEL_EVENTS_IGNORED: "channel_events_ignored",
        PAYMENT_METHOD_SAVING: "credit_card_saving",
        PAYMENT_METHOD_ADDED: "credit_card_added",
        PAYMENT_METHOD_ADDED_ERROR: "credit_card_added_error",
        PAYMENT_METHOD_DELETED: "credit_card_deleted",
        PAYMENT_METHOD_DELETED_ERROR: "credit_card_deleted_error",
        PAYMENT_METHOD_UPDATED: "credit_card_updated",
        PAYMENT_METHOD_UPDATED_ERROR: "credit_card_updated_error",
        PRESET_PAYMENT_METHOD_UPDATED: "preset_credit_card_updated",
        PRESET_PAYMENT_METHOD_UPDATED_ERROR: "preset_credit_card_updated_error",
        PAYMENT_METHOD_VERIFIED: "credit_card_verified",
        PAYMENT_METHOD_VERIFIED_ERROR: "credit_card_verified_error",
        TRANSFERS_UPDATED: "transfers_updated",
        TRANSFERS_UPDATED_ERROR: "transfers_updated_error",
        NUX_TRANSFERS_UPDATED: "nux_transfers_updated",
        TRANSFER_ADDED: "transfer_added",
        TRANSFER_ADDED_ERROR: "transfer_added_error",
        TRANSFER_UPDATED: "transfer_updated",
        TRANSFER_UPDATED_ERROR: "transfer_updated_error",
        TRANSFER_ACCEPTED: "transfer_accepted",
        TRANSFER_DECLINED: "transfer_declined",
        CHAT_SEND_VIEW_OPENED: "chat_send_view_opened",
        CHAT_SEND_VIEW_CLOSED: "chat_send_view_closed",
        BIN_NUMBER_VALIDATED: "bin_number_validated",
        BIN_NUMBER_VALIDATED_ERROR: "bin_number_validated_error",
        USER_ELIGIBILITY_UDPATED: "user_eligibility_updated",
        FRIENDS_LIST_UPDATED: "friends_list_updated",
        DIALOG_SHOWN: "dialog_shown",
        DIALOG_CLOSED: "dialog_closed",
        BANNER_STATES_UPDATED: "banner_states_updated",
        BANNER_DISMISSED: "banner_dismissed",
        BANNER_VIEWED: "banner_viewed",
        BANNER_COMPLETED: "banner_completed",
        PLATFORM_CONTEXT_ADDED: "platform_context_added",
        PLATFORM_CONTEXT_BANNER_DISMISSED: "platform_context_banner_dismissed",
        PLATFORM_CONTEXT_PRODUCT_ITEM_SOLD: "platform_context_product_item_sold",
        PLATFORM_CONTEXT_CHANGED: "platform_context_changed",
        EXTENSIVE_TRANSFER_DETAILS_UPDATED: "extensive_transfer_details_updated",
        PAYMENT_REQUEST_INITIATED: "payment_request_initiated",
        PAYMENT_REQUEST_INITIATED_COMPLETE: "payment_request_initiated_completed",
        PAYMENT_REQUEST_CREATED: "payment_request_created",
        PAYMENT_REQUEST_CREATED_ERROR: "payment_request_created_error",
        PAYMENT_REQUEST_UPDATED: "payment_request_updated",
        PAYMENT_REQUEST_DECLINE_INITIATED: "payment_request_decline_initiated",
        PAYMENT_REQUEST_DECLINED: "payment_request_declined",
        PAYMENT_REQUEST_DECLINE_ERROR: "payment_request_decline_error",
        PAYMENT_REQUESTS_FETCHED: "payment_requests_fetched",
        PAYMENT_REQUEST_CANCEL_INITIATED: "payment_request_cancel_initiated",
        PAYMENT_REQUEST_CANCELED: "payment_request_canceled",
        PAYMENT_REQUEST_CANCEL_ERROR: "payment_request_cancel_error"
    });
    e.exports = a
}
), null);
__d("P2PDispatcher", ["ExplicitRegistrationReactDispatcher"], (function(a, b, c, d, e, f) {
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
        strict: !1
    });
    e.exports = c
}
), null);
__d("P2PActions", ["ChatOpenTab", "ChatOpenTabEventLogger", "FantaTabActions", "MessengerEnvironment", "P2PActionConstants", "P2PDispatcher", "ifRequired", "setImmediate"], (function(a, b, c, d, e, f) {
    "use strict";
    f.updateCreditCards = a;
    f.updateCreditCardsError = c;
    f.ignoreCreditCardChannelEvents = d;
    f.allowCreditCardChannelEvents = e;
    f.creditCardSaving = g;
    f.addCreditCard = h;
    f.addCreditCardError = i;
    f.updatePresetCreditCard = j;
    f.updatePresetCreditCardError = k;
    f.updateCreditCard = l;
    f.updateCreditCardError = m;
    f.deleteCreditCard = n;
    f.deleteCreditCardError = o;
    f.verifyCreditCard = p;
    f.verifyCreditCardError = q;
    f.updateTransfers = r;
    f.updateTransfersError = s;
    f.updateNUXTransfers = t;
    f.transferAdded = u;
    f.transferAddedError = v;
    f.transferUpdated = w;
    f.transferUpdatedError = x;
    f.transferAccepted = y;
    f.transferDeclined = z;
    f.chatSendViewOpened = A;
    f.chatSendViewClosed = B;
    f.binNumberValidated = C;
    f.binNumberValidatedError = D;
    f.friendsListUpdated = E;
    f.userEligibilityUpdated = F;
    f.showDialog = G;
    f.hideDialog = H;
    f.bannerStatesUpdated = I;
    f.bannerDismissed = J;
    f.bannerCompleted = K;
    f.addPlatformContext = L;
    f.platformContextBannerDismissed = M;
    f.platformContextProductItemSold = N;
    f.platformContextChanged = O;
    f.extensiveTransferDetailsLoaded = P;
    f.paymentRequestInitiated = Q;
    f.paymentRequestInitiatedComplete = R;
    f.paymentRequestCreated = S;
    f.paymentRequestCreatedError = T;
    f.paymentRequestUpdated = U;
    f.paymentRequestDeclineInitiated = V;
    f.paymentRequestDeclined = W;
    f.paymentRequestDeclineError = X;
    f.paymentRequestCancelInitiated = Y;
    f.paymentRequestCanceled = Z;
    f.paymentRequestCancelError = $;
    f.paymentRequestsFetched = aa;
    function a(a) {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").PAYMENT_METHODS_UPDATED,
            data: a
        })
    }
    function c() {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").PAYMENT_METHODS_UPDATED_ERROR
        })
    }
    function d() {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").CHANNEL_EVENTS_IGNORED
        })
    }
    function e() {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").CHANNEL_EVENTS_ALLOWED
        })
    }
    function g() {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").PAYMENT_METHOD_SAVING
        })
    }
    function h(a) {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").PAYMENT_METHOD_ADDED,
            data: a
        })
    }
    function i(a) {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").PAYMENT_METHOD_ADDED_ERROR,
            data: a
        })
    }
    function j(a) {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").PRESET_PAYMENT_METHOD_UPDATED,
            data: a
        })
    }
    function k(a) {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").PRESET_PAYMENT_METHOD_UPDATED_ERROR,
            data: a
        })
    }
    function l(a) {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").PAYMENT_METHOD_UPDATED,
            data: a
        })
    }
    function m(a) {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").PAYMENT_METHOD_UPDATED_ERROR,
            data: a
        })
    }
    function n(a) {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").PAYMENT_METHOD_DELETED,
            data: a
        })
    }
    function o(a) {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").PAYMENT_METHOD_DELETED_ERROR,
            data: a
        })
    }
    function p(a) {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").PAYMENT_METHOD_VERIFIED,
            data: a
        })
    }
    function q(a) {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").PAYMENT_METHOD_VERIFIED_ERROR,
            data: a
        })
    }
    function r(a) {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").TRANSFERS_UPDATED,
            data: a
        })
    }
    function s(a) {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").TRANSFERS_UPDATED_ERROR,
            data: a
        })
    }
    function t(a) {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").NUX_TRANSFERS_UPDATED,
            data: a
        })
    }
    function u(a) {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").TRANSFER_ADDED,
            data: a
        })
    }
    function v(a) {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").TRANSFER_ADDED_ERROR,
            data: a
        })
    }
    function w(a) {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").TRANSFER_UPDATED,
            data: a
        })
    }
    function x(a) {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").TRANSFER_UPDATED_ERROR,
            data: a
        })
    }
    function y() {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").TRANSFER_ACCEPTED
        })
    }
    function z(a) {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").TRANSFER_DECLINED,
            data: a
        })
    }
    function A(a) {
        function c() {
            b("P2PDispatcher").dispatch({
                type: b("P2PActionConstants").CHAT_SEND_VIEW_OPENED,
                data: a
            })
        }
        b("ChatOpenTab").canOpenTab() && !a.fromChatTab ? (a.fromChatTab || (b("FantaTabActions").openTab(a.threadID),
        b("ChatOpenTabEventLogger").logAutoOpen("p2pAction", a.threadID)),
        c()) : (b("MessengerEnvironment").roomschatui || b("ifRequired")("MessengerActions", function(c) {
            b("setImmediate")(function() {
                c.selectThread(a.threadID)
            })
        }),
        c())
    }
    function B(a) {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").CHAT_SEND_VIEW_CLOSED,
            data: a
        })
    }
    function C(a) {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").BIN_NUMBER_VALIDATED,
            data: a
        })
    }
    function D(a) {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").BIN_NUMBER_VALIDATED_ERROR,
            data: a
        })
    }
    function E(a) {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").FRIENDS_LIST_UPDATED,
            data: a
        })
    }
    function F(a) {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").USER_ELIGIBILITY_UDPATED,
            data: a
        })
    }
    function G(a, c) {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").DIALOG_SHOWN,
            data: {
                dialogClass: a,
                dialogProps: c
            }
        })
    }
    function H() {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").DIALOG_CLOSED
        })
    }
    function I(a) {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").BANNER_STATES_UPDATED,
            data: a
        })
    }
    function J(a) {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").BANNER_DISMISSED,
            data: a
        })
    }
    function K(a) {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").BANNER_COMPLETED,
            data: a
        })
    }
    function L(a) {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").PLATFORM_CONTEXT_ADDED,
            data: a
        })
    }
    function M(a) {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").PLATFORM_CONTEXT_BANNER_DISMISSED,
            data: a
        })
    }
    function N(a) {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").PLATFORM_CONTEXT_PRODUCT_ITEM_SOLD,
            data: a
        })
    }
    function O(a) {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").PLATFORM_CONTEXT_CHANGED,
            data: a
        })
    }
    function P(a) {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").EXTENSIVE_TRANSFER_DETAILS_UPDATED,
            data: a
        })
    }
    function Q() {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").PAYMENT_REQUEST_INITIATED
        })
    }
    function R() {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").PAYMENT_REQUEST_INITIATED_COMPLETE
        })
    }
    function S(a) {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").PAYMENT_REQUEST_CREATED,
            data: a
        })
    }
    function T(a) {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").PAYMENT_REQUEST_CREATED_ERROR,
            data: a
        })
    }
    function U(a) {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").PAYMENT_REQUEST_UPDATED,
            data: a
        })
    }
    function V() {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").PAYMENT_REQUEST_DECLINE_INITIATED
        })
    }
    function W(a) {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").PAYMENT_REQUEST_DECLINED,
            data: a
        })
    }
    function X(a) {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").PAYMENT_REQUEST_DECLINE_ERROR,
            data: a
        })
    }
    function Y() {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").PAYMENT_REQUEST_CANCEL_INITIATED
        })
    }
    function Z(a) {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").PAYMENT_REQUEST_CANCELED,
            data: a
        })
    }
    function $(a) {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").PAYMENT_REQUEST_CANCEL_ERROR,
            data: a
        })
    }
    function aa(a) {
        b("P2PDispatcher").dispatch({
            type: b("P2PActionConstants").PAYMENT_REQUESTS_FETCHED,
            data: a
        })
    }
}
), null);
__d("P2PLoadingMask.react", ["cx", "React", "XUISpinner.react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.render = function() {
            var a = this.props.visible;
            a = a === void 0 ? !1 : a;
            return !Boolean(a) ? null : h.jsxs("div", {
                className: "_3de",
                children: [h.jsx(b("XUISpinner.react"), {
                    background: "dark",
                    size: "large",
                    className: "_3df"
                }), h.jsx("div", {
                    className: "_3dg"
                })]
            })
        }
        ;
        return c
    }(h.Component);
    e.exports = a
}
), null);
__d("P2PLogger", ["BanzaiLogger"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = "P2PPaymentLoggerConfig";
    a = {
        log: function(a, c) {
            c = babelHelpers["extends"]({
                event: a
            }, c),
            b("BanzaiLogger").log(g, c)
        }
    };
    e.exports = a
}
), null);
__d("CreditCardFormParam", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        ACCOUNT_ID: "account_id",
        ACCOUNT_COUNTRY_CODE: "account_country_code",
        APP_ID: "app_id",
        CARD_EXPIRATION: "exp",
        CARD_FBID: "cc_fbid",
        CARD_ID: "cc_id",
        CARD_TYPE: "cardType",
        CITY: "city",
        CONTEXT_ID: "context_id",
        COUNTRY: "country",
        CSC_LENGTH: "csc_length",
        EMAIL: "email",
        FIRST_NAME: "firstName",
        TRACKING_ID: "tracking_id",
        JSFAIL_SOURCE: "jsfail_source",
        KEYPRESS_TIMES: "kpts",
        LAST_NAME: "lastName",
        MONTH: "month",
        STATE: "state",
        STREET: "street",
        STREET_2: "street2",
        VALIDATE_ADDRESS: "validate_address",
        VALIDATE_NAME: "validate_name",
        VALIDATE_ZIP: "validate_zip",
        YEAR: "year",
        ZIP: "zip",
        CARD_HOLDER_NAME: "card_holder_name",
        VALIDATOR_CHECKS: "checks",
        CARD_NUMBER: "creditCardNumber",
        CSC: "csc",
        CARD_NUMBER_FIRST_6: "creditCardNumber_first6",
        CARD_NUMBER_LAST_4: "creditCardNumber_last4",
        CARD_NUMBER_TOKEN: "creditCardNumber_token",
        CSC_TOKEN: "csc_token",
        AUTH_LEVEL_FLAG: "auth_level",
        AUTH_AMOUNT: "auth_amount",
        AUTH_CURRENCY: "auth_currency",
        AUTO_EXPAND_AUTH_LEVEL_FLAG: "auto_expand_auth_level",
        PAYMENT_ITEM_TYPE: "payment_item_type",
        COMBINED_PAYMENT_TYPE: "combined_payment_type",
        RECEIVER_ID: "receiver_id",
        CREDENTIAL_ID: "credential_id",
        IS_STORED_BALANCE: "is_stored_balance",
        IS_CHECKOUT_ELIGIBLE: "is_checkout_eligible",
        CHECKOUT_SAVE_CC_WITH_AUTH: "checkout_save_cc_with_auth",
        CHECKOUT_FUND_AMOUNT: "checkout_fund_amount",
        FLOW_PLACEMENT: "flow_placement",
        FLOW_TYPE: "flow_type",
        STORED_BALANCE_STATUS: "stored_balance_status",
        SESSION_ID: "session_id",
        LOGGING_ID: "logging_id",
        IS_FROM_SUPPORT: "is_from_support",
        SOURCE_SUPPORT_FORM_ID: "source_support_form_id",
        GEO_COUNTRY: "geo_country"
    });
    e.exports = a
}
), null);
__d("P2PAPIUtils", ["fbt", "CreditCardFormParam", "guid"], (function(a, b, c, d, e, f, g) {
    var h = [1001, 1004, 1006, 1002]
      , i = {
        getRandomDigits: function(a) {
            return Math.random().toString().slice(2, 2 + a)
        },
        genRequestID: function() {
            return "id:" + b("guid")() + ":" + Date.now()
        },
        genOfflineThreadingID: function() {
            return Date.now() + "" + i.getRandomDigits(6)
        },
        getUncaughtErrorMessage: function(a) {
            return a && h.indexOf(a) !== -1 ? g._("R\u1ea5t ti\u1ebfc, ch\u00fang t\u00f4i kh\u00f4ng th\u1ec3 ho\u00e0n t\u1ea5t y\u00eau c\u1ea7u c\u1ee7a b\u1ea1n. Vui l\u00f2ng ki\u1ec3m tra r\u1eb1ng b\u1ea1n \u0111\u00e3 k\u1ebft n\u1ed1i internet ho\u1eb7c l\u00e0m m\u1edbi trang n\u00e0y v\u00e0 th\u1eed l\u1ea1i.") : g._("R\u1ea5t ti\u1ebfc, \u0111\u00e3 x\u1ea3y ra l\u1ed7i. Vui l\u00f2ng th\u1eed l\u1ea1i sau.")
        },
        prepareCardMutationData: function(a) {
            var c = {}
              , d = a[b("CreditCardFormParam").CARD_NUMBER].replace(/ /g, "");
            c[b("CreditCardFormParam").CARD_NUMBER] = d;
            if (typeof a[b("CreditCardFormParam").CARD_EXPIRATION] === "string") {
                var e = a[(d = b("CreditCardFormParam")).CARD_EXPIRATION].split("/");
                c[d.MONTH] = e[0];
                c[d.YEAR] = e[1];
                c[d.CARD_EXPIRATION] = {};
                c[d.CARD_EXPIRATION][d.MONTH] = c[d.MONTH];
                c[d.CARD_EXPIRATION][d.YEAR] = c[d.YEAR]
            } else {
                c[(d = b("CreditCardFormParam")).MONTH] = a[d.CARD_EXPIRATION][d.MONTH];
                c[d.YEAR] = a[d.CARD_EXPIRATION][d.YEAR]
            }
            return babelHelpers["extends"]({}, a, c)
        }
    };
    e.exports = i
}
), null);
__d("P2PSendMoneyDialogStore", ["EventEmitter", "P2PActionConstants", "P2PAPIUtils", "P2PDispatcher"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = 36, h;
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c;
            c = a.call(this) || this;
            h = new Map();
            b("P2PDispatcher").register(c.onEventDispatched.bind(babelHelpers.assertThisInitialized(c)));
            return c
        }
        var d = c.prototype;
        d.onEventDispatched = function(a) {
            var c = a.data;
            a = a.type;
            switch (a) {
            case b("P2PActionConstants").CHAT_SEND_VIEW_OPENED:
                this.handleChatSendViewOpened(c);
                this.emit("change");
                break;
            case b("P2PActionConstants").CHAT_SEND_VIEW_CLOSED:
                this.handleChatSendViewClosed(c);
                this.emit("change");
                break
            }
        }
        ;
        d.getStateByThreadID = function(a) {
            return h.get(a)
        }
        ;
        d.handleChatSendViewOpened = function(a) {
            h.set(a.threadID, {
                amount: a.amount,
                groupSendRecipientUserIDs: a.groupSendRecipientUserIDs,
                groupSendReceiptDetails: a.groupSendReceiptDetails,
                groupThreadFBID: a.groupThreadFBID,
                onCompletion: a.onCompletion,
                openRequestTab: a.openRequestTab,
                memoText: a.memoText && a.memoText.substr(0, g),
                platformData: a.platformData,
                referrer: a.referrer,
                paymentRequestID: a.paymentRequestID,
                sendMoneyDialogShown: !0,
                sendMoneyNUXDismissed: a.sendMoneyNUXDismissed,
                useModal: a.useModal,
                offlineThreadingID: b("P2PAPIUtils").genOfflineThreadingID()
            })
        }
        ;
        d.handleChatSendViewClosed = function(a) {
            h.set(a.threadID, {
                amount: "",
                groupSendRecipientUserIDs: [],
                groupSendReceiptDetails: null,
                groupThreadFBID: "",
                onCompletion: null,
                openRequestTab: !1,
                memoText: null,
                platformData: null,
                referrer: null,
                paymentRequestID: null,
                sendMoneyDialogShown: !1,
                sendMoneyNUXDismissed: !1,
                useModal: !1,
                offlineThreadingID: null
            })
        }
        ;
        d.isAnyChatSendViewOpen = function() {
            for (var a = h.values(), b = Array.isArray(a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"](); ; ) {
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
                if (d.sendMoneyDialogShown)
                    return !0
            }
            return !1
        }
        ;
        return c
    }(b("EventEmitter"));
    c = new a();
    e.exports = c
}
), null);
__d("P2PSendMoneyContainerBootloader.react", ["cx", "Bootloader", "DeferredComponent.react", "MercuryIDs", "MessengerEnvironment", "P2PAbstractSendMoneyButton.react", "P2PActions", "P2PLoadingMask.react", "P2PLogger", "P2PSendMoneyDialogStore", "React", "ReactLayeredComponentMixin_DEPRECATED", "XUIContextualDialog.react", "createReactClass_DEPRECATED", "emptyFunction", "getPageIDFromThreadID", "prop-types"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = b("MessengerEnvironment").messengerui
      , j = i ? 282 : 260;
    a = b("createReactClass_DEPRECATED")({
        displayName: "P2PSendMoneyContainerBootloader",
        propTypes: {
            button: b("prop-types").node,
            className: b("prop-types").string,
            ContextualDialog: b("prop-types").func,
            flyoutAlignment: b("prop-types").oneOf(["left", "center", "right"]),
            fromChatTab: b("prop-types").bool,
            onTrigger: b("prop-types").func,
            participantIDs: b("prop-types").array,
            referrer: b("prop-types").string,
            threadID: b("prop-types").string
        },
        refs_dialog: null,
        refs_placeholderButton: null,
        getInitialState: function() {
            return {
                showPlaceholderDialog: !1,
                shouldBootloadImmediately: b("P2PSendMoneyDialogStore").isAnyChatSendViewOpen()
            }
        },
        mixins: [b("ReactLayeredComponentMixin_DEPRECATED")],
        _clicked: !1,
        _onComponentLoad: b("emptyFunction"),
        _bootloadCalled: !1,
        _sendMoneyDialogStoreSub: null,
        log: function(a, c) {
            b("P2PLogger").log(a, babelHelpers["extends"]({
                www_event_referrer: this.props.referrer,
                www_event_flow: "UI_Flow_P2P_Send"
            }, c))
        },
        componentWillUnmount: function() {
            this.removeDialogStoreSub()
        },
        onDialogStoreChange: function() {
            this._bootloadComponentNow(),
            this.removeDialogStoreSub()
        },
        removeDialogStoreSub: function() {
            this._sendMoneyDialogStoreSub && (this._sendMoneyDialogStoreSub.remove(),
            this._sendMoneyDialogStoreSub = null)
        },
        onPlaceholderClick: function() {
            var a = this.props.threadID ? b("MercuryIDs").tokenize(this.props.threadID).value : null;
            this._handleDialogVisibility(!this.state.showPlaceholderDialog);
            this.log("UI_Actn_Send_Money_Button_Placeholder_Clicked", {
                object_id: a
            });
            this._bootloadComponentNow();
            this._clicked = !1
        },
        _handleDialogVisibility: function(a) {
            !a ? b("P2PActions").chatSendViewClosed({
                threadID: this.props.threadID
            }) : b("P2PActions").chatSendViewOpened({
                referrer: this.props.referrer,
                threadID: this.props.threadID,
                fromChatTab: this.props.fromChatTab
            }),
            this.setState({
                showPlaceholderDialog: a
            })
        },
        renderLayers: function() {
            var a = this
              , c = {};
            if (this.state.showPlaceholderDialog) {
                var d = this.props.ContextualDialog || b("XUIContextualDialog.react");
                c.placeholderDialog = h.jsx(d, {
                    alignment: this.props.flyoutAlignment ? this.props.flyoutAlignment : i ? "right" : "left",
                    contextRef: function() {
                        return a.refs_placeholderButton
                    },
                    onBlur: function() {
                        a._clicked || a._handleDialogVisibility(!1),
                        a._clicked = !1
                    },
                    ref: function(b) {
                        return a.refs_dialog = b
                    },
                    shown: !0,
                    width: j,
                    position: "above",
                    children: h.jsx("div", {
                        className: "_c_5",
                        children: h.jsx(b("P2PLoadingMask.react"), {
                            visible: !0
                        })
                    })
                })
            }
            return c
        },
        render: function() {
            return this._isPageChat() ? null : h.jsx(b("DeferredComponent.react"), babelHelpers["extends"]({
                deferredComponent: this._bootloadComponent,
                deferredPlaceholder: this._renderPlaceholder()
            }, this.props))
        },
        _renderPlaceholder: function() {
            var a = this;
            return h.jsx(b("P2PAbstractSendMoneyButton.react"), {
                button: this.props.button,
                className: this.props.className,
                isActive: !1,
                isDisabled: !1,
                isMessenger: i,
                onClick: this.onPlaceholderClick,
                onMouseDown: function() {
                    a._clicked = !0
                },
                onMouseOver: this._bootloadComponentNow,
                ref: function(b) {
                    return a.refs_placeholderButton = b
                }
            })
        },
        _bootloadComponent: function(a) {
            this._onComponentLoad = a.bind(this),
            this.state.shouldBootloadImmediately ? this._bootloadComponentNow() : this._sendMoneyDialogStoreSub = b("P2PSendMoneyDialogStore").addListener("change", this.onDialogStoreChange)
        },
        _bootloadComponentNow: function() {
            var a = this;
            if (this._bootloadCalled)
                return;
            this._bootloadCalled = !0;
            b("Bootloader").loadModules(["P2PSendMoneyContainer.react"], function(b) {
                a.removeDialogStoreSub(),
                a._onComponentLoad(b),
                a.setState({
                    showPlaceholderDialog: !1
                })
            }, "P2PSendMoneyContainerBootloader.react")
        },
        _isPageChat: function() {
            return !!this._getPageID()
        },
        _getPageID: function() {
            return b("getPageIDFromThreadID")(this.props.threadID)
        }
    });
    c = a;
    e.exports = c
}
), null);
__d("ReasonBootloadOnRender.react", ["LoadOnRender.react", "React", "promiseDone"], (function(a, b, c, d, e, f) {
    var g = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.$1 = function(a) {
                b("promiseDone")(d.props.loader.load(), a)
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.render = function() {
            return g.jsx(b("LoadOnRender.react"), {
                placeholder: this.props.placeholder,
                loader: this.$1,
                component: this.props.component
            })
        }
        ;
        return c
    }(g.Component);
    e.exports = a
}
), null);
__d("ReasonResource", ["Promise", "JSResourceReference", "promiseDone"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = function(c) {
        babelHelpers.inheritsLoose(a, c);
        function a() {
            return c.apply(this, arguments) || this
        }
        var d = a.prototype;
        d.load = function() {
            var a = this;
            return new (b("Promise"))(function(c) {
                b("promiseDone")(a.getFullComponent(), function(a) {
                    c(a.jsComponent)
                })
            }
            )
        }
        ;
        d.getFullComponent = function() {
            return this.__reference.load()
        }
        ;
        d.setResourceReference = function(a) {
            this.__reference = a;
            return this
        }
        ;
        return a
    }(b("JSResourceReference"));
    function a(a) {
        return new g(a.getModuleId()).setResourceReference(a)
    }
}
), null);
__d("ReasonReact.bs", ["bs_curry", "React", "bs_caml_builtin_exceptions", "createReactClass_DEPRECATED"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function h(a) {
        return 0
    }
    function i(a) {
        return 0
    }
    function j(a) {
        return !0
    }
    function k(a) {
        return "RenderNotImplemented"
    }
    function l(a) {
        return 0
    }
    function m(a) {
        return a
    }
    function n(a, b) {
        return 0
    }
    function o(a, c, d) {
        var e = a.reasonProps;
        if (e == null)
            if (c !== void 0)
                return [b("bs_curry")._1(c, a)];
            else
                throw [b("bs_caml_builtin_exceptions").invalid_argument, "A JS component called the Reason component " + (d + " which didn't implement the JS->Reason React props conversion.")];
        else
            return e
    }
    function p(a) {
        return b("createReactClass_DEPRECATED")({
            displayName: a,
            subscriptions: null,
            statics: {
                jsPropsToReason: void 0,
                getDerivedStateFromProps: function(c, d) {
                    var e = this;
                    e = e == null ? void 0 : e.jsPropsToReason;
                    c = o(c, e, a);
                    e = c[0];
                    if (e.getDerivedStateFromProps !== m) {
                        c = d.reasonState;
                        e = b("bs_curry")._1(e.getDerivedStateFromProps, c);
                        if (e === c)
                            return null;
                        else
                            return {
                                reasonState: e,
                                reasonStateVersion: d.reasonStateVersion + 1 | 0,
                                reasonStateVersionUsedToComputeSubelements: d.reasonStateVersionUsedToComputeSubelements
                            }
                    } else
                        return null
                }
            },
            self: function(a, b) {
                var c = this;
                return {
                    handle: c.handleMethod,
                    state: a,
                    retainedProps: b,
                    send: c.sendMethod,
                    onUnmount: c.onUnmountMethod
                }
            },
            getInitialState: function() {
                var c = this;
                c = o(c.props, c.jsPropsToReason, a);
                return {
                    reasonState: b("bs_curry")._1(c[0].initialState, 0)
                }
            },
            componentDidMount: function() {
                var c = this
                  , d = this
                  , e = o(d.props, d.jsPropsToReason, a);
                e = e[0];
                if (e.didMount !== i) {
                    d = d.state;
                    d = d.reasonState;
                    return b("bs_curry")._1(e.didMount, c.self(d, e.retainedProps))
                } else
                    return 0
            },
            componentDidUpdate: function(c, d) {
                var e = this
                  , f = this
                  , g = f.state;
                g = g.reasonState;
                var i = f.props
                  , j = o(i, f.jsPropsToReason, a)
                  , k = j[0];
                if (k.didUpdate !== h) {
                    i = c === i ? j : o(c, f.jsPropsToReason, a);
                    j = d.reasonState;
                    c = e.self(g, k.retainedProps);
                    f = c.handle;
                    d = i[0].retainedProps;
                    e = c.send;
                    g = c.onUnmount;
                    i = {
                        handle: f,
                        state: j,
                        retainedProps: d,
                        send: e,
                        onUnmount: g
                    };
                    return b("bs_curry")._1(k.didUpdate, {
                        oldSelf: i,
                        newSelf: c
                    })
                } else
                    return 0
            },
            componentWillUnmount: function() {
                var c = this
                  , d = this
                  , e = o(d.props, d.jsPropsToReason, a);
                e = e[0];
                d = d.state;
                d = d.reasonState;
                e.willUnmount !== i && b("bs_curry")._1(e.willUnmount, c.self(d, e.retainedProps));
                d = c.subscriptions;
                if (d !== null) {
                    d.forEach(function(a) {
                        return b("bs_curry")._1(a, 0)
                    });
                    return 0
                } else
                    return 0
            },
            shouldComponentUpdate: function(c, d, e) {
                e = this;
                var f = this
                  , g = f.props
                  , h = o(f.props, f.jsPropsToReason, a);
                g = c === g ? h : o(c, f.jsPropsToReason, a);
                c = g[0];
                g = d.reasonState;
                d = e.self(g, c.retainedProps);
                if (c.shouldUpdate !== j) {
                    e = f.state;
                    g = e.reasonState;
                    f = d.handle;
                    e = h[0].retainedProps;
                    h = d.send;
                    var i = d.onUnmount;
                    f = {
                        handle: f,
                        state: g,
                        retainedProps: e,
                        send: h,
                        onUnmount: i
                    };
                    return b("bs_curry")._1(c.shouldUpdate, {
                        oldSelf: f,
                        newSelf: d
                    })
                } else
                    return !0
            },
            onUnmountMethod: function(a) {
                var b = this
                  , c = b.subscriptions;
                if (c !== null) {
                    c.push(a);
                    return 0
                } else {
                    b.subscriptions = [a];
                    return 0
                }
            },
            handleMethod: function(c) {
                var d = this
                  , e = this;
                return function(f) {
                    var g = e.state;
                    g = g.reasonState;
                    var h = o(e.props, e.jsPropsToReason, a);
                    return b("bs_curry")._2(c, f, d.self(g, h[0].retainedProps))
                }
            },
            sendMethod: function(c) {
                var d = this
                  , e = this
                  , f = o(e.props, e.jsPropsToReason, a);
                f = f[0];
                if (f.reducer !== n) {
                    var g = {
                        contents: function(a) {
                            return 0
                        }
                    }
                      , h = b("bs_curry")._1(f.reducer, c);
                    return e.setState(function(a, c) {
                        c = a.reasonState;
                        c = b("bs_curry")._1(h, c);
                        if (c === 0)
                            return null;
                        else {
                            var d;
                            if (typeof c === "number")
                                d = a;
                            else
                                switch (c.tag | 0) {
                                case 0:
                                    d = {
                                        reasonState: c[0]
                                    };
                                    break;
                                case 1:
                                    g.contents = c[0];
                                    d = a;
                                    break;
                                case 2:
                                    g.contents = c[1];
                                    d = {
                                        reasonState: c[0]
                                    };
                                    break
                                }
                            if (d !== a)
                                return d;
                            else
                                return null
                        }
                    }, d.handleMethod(function(a, c) {
                        return b("bs_curry")._1(g.contents, c)
                    }))
                } else
                    return 0
            },
            render: function() {
                var c = this
                  , d = this
                  , e = o(d.props, d.jsPropsToReason, a);
                e = e[0];
                d = d.state;
                d = d.reasonState;
                return b("bs_curry")._1(e.render, c.self(d, e.retainedProps))
            }
        })
    }
    function a(a) {
        return {
            debugName: a,
            reactClassInternal: p(a),
            handedOffState: {
                contents: void 0
            },
            getDerivedStateFromProps: m,
            didMount: i,
            didUpdate: h,
            willUnmount: i,
            shouldUpdate: j,
            render: k,
            initialState: l,
            retainedProps: 0,
            reducer: n,
            jsElementWrapped: void 0
        }
    }
    var q = a
      , r = a;
    function c(a, c, d) {
        a = a !== void 0 ? a : void 0;
        c = c !== void 0 ? c : void 0;
        var e = [d]
          , f = d.jsElementWrapped;
        if (f !== void 0)
            return b("bs_curry")._2(f, a, c);
        else
            return g.createElement(d.reactClassInternal, {
                key: a,
                ref: c,
                reasonProps: e
            })
    }
    function d(a, b) {
        a.reactClassInternal.prototype.jsPropsToReason = b;
        a.reactClassInternal.getDerivedStateFromProps = a.reactClassInternal.getDerivedStateFromProps.bind({
            jsPropsToReason: b
        });
        return a.reactClassInternal
    }
    var s = a("interop");
    function e(a, b, c) {
        var d = function(d, e) {
            var f = a
              , h = b
              , i = c;
            d = d;
            e = e;
            h = Object.assign(Object.assign({}, h), {
                ref: e,
                key: d
            });
            e = [f, h].concat(i);
            return g.createElement.apply(null, e)
        };
        return {
            debugName: s.debugName,
            reactClassInternal: s.reactClassInternal,
            handedOffState: s.handedOffState,
            getDerivedStateFromProps: s.getDerivedStateFromProps,
            didMount: s.didMount,
            didUpdate: s.didUpdate,
            willUnmount: s.willUnmount,
            shouldUpdate: s.shouldUpdate,
            render: s.render,
            initialState: s.initialState,
            retainedProps: s.retainedProps,
            reducer: s.reducer,
            jsElementWrapped: d
        }
    }
    function t(a, c) {
        var d = a !== void 0 ? a : function(a, b) {
            return a === b
        }
          , e = {
            contents: void 0
        };
        return function(a) {
            var f = e.contents;
            if (f !== void 0) {
                f = f;
                if (b("bs_curry")._2(d, f[0], a))
                    return f[1]
            }
            f = b("bs_curry")._1(c, a);
            e.contents = [a, f];
            return f
        }
    }
    function u(a) {
        var b = {
            contents: a
        };
        return function(a) {
            var c = b.contents;
            b.contents = a;
            return c
        }
    }
    a = {
        memoize: t,
        prev: u
    };
    f.reducerComponent = q;
    f.reducerComponentWithRetainedProps = r;
    f.element = c;
    f.wrapReasonForJs = d;
    f.wrapJsForReason = e;
    f.Props = a
}
), null);
__d("XUICloseButtonReact.bs", ["ReasonReact.bs", "bs_js_null_undefined", "XUICloseButton.react"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a, c, d, e, f, g) {
        var h;
        switch (d) {
        case 0:
            h = "small";
            break;
        case 1:
            h = "medium";
            break;
        case 2:
            h = "large";
            break
        }
        return b("ReasonReact.bs").wrapJsForReason(b("XUICloseButton.react"), {
            className: b("bs_js_null_undefined").fromOption(a),
            onClick: e,
            tooltip: b("bs_js_null_undefined").fromOption(f),
            shade: c ? "dark" : "light",
            size: h
        }, g)
    }
    f.make = a
}
), null);
__d("StickersDispatcher", ["ExplicitRegistrationDispatcher"], (function(a, b, c, d, e, f) {
    "use strict";
    a = new (b("ExplicitRegistrationDispatcher"))({
        strict: !1
    });
    e.exports = a
}
), null);
__d("StickersActions", ["StickersDispatcher", "keyMirror"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("keyMirror")({
        ADD_RECENT_STICKER: null,
        HIDE_FLYOUT: null,
        LOAD_CUSTOM_STICKER_PACK: null,
        LOAD_RECENT_STICKERS: null,
        SELECT_STORE_PACK: null,
        SELECT_TRAY_PACK: null,
        SHOW_FLYOUT: null,
        TRAY_LOADED: null
    });
    a = {
        Types: g,
        addRecentSticker: function(a) {
            b("StickersDispatcher").dispatch({
                type: g.ADD_RECENT_STICKER,
                sticker: a
            })
        },
        hideStickerFlyout: function() {
            b("StickersDispatcher").dispatch({
                type: g.HIDE_FLYOUT
            })
        },
        loadCustomStickerPack: function(a, c) {
            b("StickersDispatcher").dispatch({
                type: g.LOAD_CUSTOM_STICKER_PACK,
                pack: a,
                nuxContent: c
            })
        },
        loadRecentStickers: function(a) {
            b("StickersDispatcher").dispatch({
                type: g.LOAD_RECENT_STICKERS,
                stickers: a
            })
        },
        selectStorePack: function(a) {
            b("StickersDispatcher").dispatch({
                type: g.SELECT_STORE_PACK,
                packID: a
            })
        },
        selectTrayPack: function(a) {
            b("StickersDispatcher").dispatch({
                type: g.SELECT_TRAY_PACK,
                packID: a
            })
        },
        showStickerFlyout: function(a) {
            b("StickersDispatcher").dispatch({
                type: g.SHOW_FLYOUT,
                threadID: a
            })
        },
        trayLoaded: function() {
            b("StickersDispatcher").dispatch({
                type: g.TRAY_LOADED
            })
        }
    };
    e.exports = a
}
), null);
__d("WorkChatExtensionsDrawersQueryWebGraphQLQuery", ["WebGraphQLQueryBase"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        b.__getDocID = function() {
            return "1696600907120234"
        }
        ;
        b.getQueryID = function() {
            return "148385269340310"
        }
        ;
        return b
    }(b("WebGraphQLQueryBase"))
}
), null);
__d("WorkChatExtensionAvailabilityFetcher", ["Promise", "WebGraphQL", "WebStorage", "WorkChatExtensionsDrawersQueryWebGraphQLQuery"], (function(a, b, c, d, e, f) {
    "use strict";
    f.setChatExtensionAvailability = i;
    f.checkHasChatExtension = a;
    var g, h = 36e5;
    function i(a) {
        (g || (g = b("WebStorage"))).setItemGuarded(g.getLocalStorage(), "hasWorkChatExtension", a.toString()),
        g.setItemGuarded(g.getLocalStorage(), "hasWorkChatExtensionFetchTime", Date.now().toString())
    }
    function a() {
        return new (b("Promise"))(function(a, c) {
            c = (g || (g = b("WebStorage"))).getLocalStorageForRead();
            var d = c ? c.getItem("hasWorkChatExtension") : null;
            c = c ? c.getItem("hasWorkChatExtensionFetchTime") || 0 : 0;
            return d === "true" && Date.now() - parseInt(c, 10) < h ? a(!0) : b("WebGraphQL").exec(new (b("WorkChatExtensionsDrawersQueryWebGraphQLQuery"))({})).then(function(a) {
                a = ((a = a) != null ? (a = a.viewer) != null ? (a = a.messenger_platform_drawers_info) != null ? (a = a[0]) != null ? a.drawer_elements : a : a : a : a) || [];
                a = a.length > 0;
                i(a);
                return a
            })
        }
        )
    }
}
), null);
__d("isWebGLEnabled", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = null;
    function h() {
        try {
            var a = document.createElement("canvas");
            return Boolean(window.WebGLRenderingContext) && Boolean(a.getContext("webgl") || a.getContext("experimental-webgl"))
        } catch (a) {
            return !1
        }
    }
    function a() {
        g === null && (g = h());
        return g
    }
}
), null);
__d("FantaFRXUtil", ["AsyncRequest", "FRXURI", "MercuryIDs", "MercuryThreadIDMap"], (function(a, b, c, d, e, f) {
    "use strict";
    f.isFRXEligible = a;
    f.isEmptyThread = c;
    f.FRXClicked = d;
    f.FRXClickedForEmptyThread = e;
    var g = b("MercuryThreadIDMap").get();
    function a(a, c) {
        return b("MercuryIDs").isLocalThread(c) ? !1 : a != null && a.thread_fbid !== null && a.message_count > 0
    }
    function c(a) {
        return a != null && a.thread_id !== null && g.getServerIDFromClientIDNow(a.thread_id) == null
    }
    function d(a, c, d, e) {
        e === void 0 && (e = "report_button");
        var f = b("MercuryIDs").getUserIDFromThreadID(a) || ""
          , h = btoa("EntMessengerViewer1To1Thread:" + f)
          , i = "messenger_direct_thread_details";
        if (Boolean(c)) {
            c = b("MercuryIDs").isLocalThread(a);
            c = c ? g.getServerIDFromClientIDNow(a) : b("MercuryIDs").getThreadFBIDFromThreadID(a);
            c != null && (h = btoa("EntMessengerViewerGroupThread:" + c),
            i = "messenger_group_thread_details");
            d != null && (f = b("MercuryIDs").getUserIDFromParticipantID(d),
            i = "messenger_group_thread_members_list")
        }
        a = b("FRXURI").withEntMessageThread({
            reportable_ent_token: h,
            story_location: i,
            entry_point: e,
            responsible_id: f
        });
        new (b("AsyncRequest"))(a).send()
    }
    function e(a, c) {
        c === void 0 && (c = "report_button");
        a = b("MercuryIDs").getUserIDFromThreadID(a) || "";
        var d = "messenger_empty_direct_thread";
        d = b("FRXURI").withEntMessageThread({
            reportable_ent_token: a,
            story_location: d,
            entry_point: c,
            responsible_id: a
        });
        new (b("AsyncRequest"))(d).send()
    }
}
), null);
__d("MercuryReadOnlyReason", ["fbt", "Link.react", "MercuryConfig", "React", "URI"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.getReason = a;
    var h, i = b("React");
    function a(a) {
        a === void 0 && (a = !1);
        if (a) {
            a = b("MercuryConfig").DYIDeepLink;
            return g._("R\u1ea5t ti\u1ebfc, cu\u1ed9c tr\u00f2 chuy\u1ec7n n\u00e0y kh\u00f4ng ho\u1ea1t \u0111\u1ed9ng n\u1eefa v\u00ec kh\u00f4ng th\u1ec3 g\u1eedi tin nh\u1eafn \u0111\u1ebfn c\u00e1c \u0111\u1ecba ch\u1ec9 email n\u1eefa. Sau ng\u00e0y 1 th\u00e1ng 5 n\u0103m 2016, c\u00e1c cu\u1ed9c tr\u00f2 chuy\u1ec7n c\u00f3 \u0111\u1ecba ch\u1ec9 email s\u1ebd ch\u1ec9 c\u00f3 trong b\u1ea3n sao d\u1eef li\u1ec7u Facebook c\u1ee7a b\u1ea1n. {download your information}", [g._param("download your information", i.jsx("a", {
                href: a,
                children: g._("T\u00ecm hi\u1ec3u th\u00eam")
            }))])
        } else if (b("MercuryConfig").ViewerIsReadOnly)
            return g._("B\u1ea1n t\u1ea1m th\u1eddi b\u1ecb ch\u1eb7n g\u1eedi tin nh\u1eafn. {learn more about blocks}", [g._param("learn more about blocks", i.jsx(b("Link.react"), {
                href: new (h || (h = b("URI")))("https://www.facebook.com/help/181183045316843"),
                target: "_blank",
                children: "Learn more"
            }))]);
        else if (b("MercuryConfig").ColdOpenBlock)
            return g._("B\u1ea1n \u0111ang t\u1ea1m th\u1eddi b\u1ecb ch\u1eb7n, kh\u00f4ng th\u1ec3 b\u1eaft \u0111\u1ea7u cu\u1ed9c tr\u00f2 chuy\u1ec7n m\u1edbi. {learn more about blocks}", [g._param("learn more about blocks", i.jsx(b("Link.react"), {
                href: new (h || (h = b("URI")))("https://www.facebook.com/help/181183045316843"),
                target: "_blank",
                children: "Learn more"
            }))]);
        else
            return g._("B\u1ea1n kh\u00f4ng th\u1ec3 tr\u1ea3 l\u1eddi cu\u1ed9c tr\u00f2 chuy\u1ec7n n\u00e0y")
    }
}
), null);
__d("ChatTypingIndicator.react", ["cx", "fbt", "Image.react", "MercuryIDs", "MercuryTypingAnimation_DEPRECATED.react", "MessengerParticipants.bs", "MessengerPersonas.bs", "QE2Logger", "React", "ReactComponentWithPureRenderMixin", "createReactClass_DEPRECATED", "prop-types"], (function(a, b, c, d, e, f, g, h) {
    var i = b("React");
    c = b("createReactClass_DEPRECATED")({
        displayName: "ChatTypingIndicator",
        mixins: [b("ReactComponentWithPureRenderMixin")],
        propTypes: {
            setBubbleRef: (a = b("prop-types")).func,
            isOnline: a.bool,
            userID: a.string,
            showName: a.bool
        },
        componentDidMount: function() {
            b("QE2Logger").logExposureForUser("messenger_growth_tombstone")
        },
        render: function() {
            var a, c = this.getPersona();
            this.props.userID && (a = b("MessengerParticipants.bs").getNow(this.props.userID));
            return !a && !c ? null : i.jsxs("div", {
                className: "_4tdt",
                children: [j(a, c), this._renderBubble()]
            })
        },
        getPersona: function() {
            var a = this.props.userID;
            return !a ? null : b("MessengerPersonas.bs").getNow(b("MercuryIDs").getUserIDFromParticipantID(a))
        },
        _renderBubble: function() {
            var a = this.props
              , c = a.setBubbleRef;
            a = a.showName;
            return i.jsx("div", {
                className: "_4tdv",
                children: i.jsx("div", {
                    className: "_5wd4 _1nc7 _2cnu" + (a ? " _5ysy" : ""),
                    children: i.jsx("div", {
                        className: "_5wd9 _n4o",
                        children: i.jsx("div", {
                            className: "_5w1r _5wdf _3_om",
                            children: i.jsx(b("MercuryTypingAnimation_DEPRECATED.react"), {
                                className: "_5x7x",
                                ref: c
                            })
                        })
                    })
                })
            })
        }
    });
    function j(a, c) {
        var d = c ? c.name : a ? a.name : null;
        c = c ? c.profile_picture_url : a ? a.image_src : null;
        a = a ? a.href : null;
        d = h._("{name}", [h._param("name", d)]);
        return i.jsx("div", {
            className: "_31o4 _3njy",
            children: i.jsx("a", {
                "aria-label": d,
                className: "_4tdw",
                "data-hover": "tooltip",
                "data-tooltip-content": d,
                "data-tooltip-position": "left",
                href: a || "#",
                ref: "link",
                children: i.jsx(b("Image.react"), {
                    src: c,
                    ref: "image"
                })
            })
        })
    }
    d = c;
    e.exports = d
}
), null);
__d("MessengerTypingUtils.bs", ["bs_belt_Map", "bs_caml_option"], (function(a, b, c, d, e, f) {
    "use strict";
    function a(a) {
        if (a !== void 0)
            return b("bs_belt_Map").keysToArray(b("bs_caml_option").valFromOption(a));
        else
            return []
    }
    f.getTypingUserIDs = a
}
), null);
__d("ChatTypingIndicators.react", ["cx", "fbt", "ChatConfig", "ChatTypingIndicator.react", "CurrentUser", "DOM", "MercuryIDs", "MessengerEnvironment", "MessengerParticipants.bs", "MessengerPersonas.bs", "MessengerState.bs", "MessengerTypingUtils.bs", "React", "ReactDOM", "TooltipData", "emptyFunction"], (function(a, b, c, d, e, f, g, h) {
    var i = b("React");
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++)
                e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this,
            c.$1 = !1,
            c.bubbleRefs = {},
            b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.componentDidMount = function() {
            this.$1 = !0
        }
        ;
        d.componentWillUnmount = function() {
            this.$1 = !1
        }
        ;
        d.shouldComponentUpdate = function(a) {
            return a.threadID !== this.props.threadID || a.viewer !== this.props.viewer || a.rootClassName !== this.props.rootClassName || a.typingUserIDs !== this.props.typingUserIDs
        }
        ;
        d.componentDidUpdate = function() {
            var a = this
              , c = b("MessengerTypingUtils.bs").getTypingUserIDs(this.props.typingUserIDs);
            c.length > 0 ? this.props.indicatorsDidShow() : this.props.indicatorsDidHide();
            b("MessengerParticipants.bs").getMulti(c, function(d) {
                a.$1 && c.forEach(function(c) {
                    var e = d[c]
                      , f = a.bubbleRefs[c];
                    if (f && e) {
                        c = b("MessengerPersonas.bs").getNow(b("MercuryIDs").getUserIDFromParticipantID(c));
                        c = c ? c.name : e.short_name;
                        b("TooltipData").set(b("ReactDOM").findDOMNode(f), a.renderTooltip(c), "above", "left")
                    }
                })
            })
        }
        ;
        d.$2 = function() {
            var a = this
              , c = b("MercuryIDs").isGroupChat(this.props.threadID);
            return i.jsx("div", {
                className: this.props.rootClassName,
                children: b("MessengerTypingUtils.bs").getTypingUserIDs(this.props.typingUserIDs).sort().map(function(b) {
                    return a.$3(b, !!c)
                })
            })
        }
        ;
        d.render = function() {
            if (!b("MercuryIDs").isValid(this.props.threadID))
                return null;
            var a = b("MessengerState.bs").getThreadMetaNow(b("CurrentUser").getID(), this.props.threadID);
            if (a && !a.is_subscribed)
                return null;
            if (b("CurrentUser").isWorkUser() && a != null && a.participants.length === 1)
                return null;
            a = b("CurrentUser").isWorkUser() && b("MessengerEnvironment").messengerui;
            if (!a && b("ChatConfig").getBool("chat_tab_has_gradients"))
                return i.jsx("div", {
                    className: "_4gd0",
                    children: this.$2()
                });
            else
                return this.$2()
        }
        ;
        d.$3 = function(a, b) {
            var c = this
              , d = this.props.indicatorClass;
            return i.jsx(d, {
                setBubbleRef: function(b) {
                    c.bubbleRefs[a] = b
                },
                showName: b,
                userID: a
            }, a)
        }
        ;
        d.renderTooltip = function(a) {
            var c = b("DOM").create("span");
            b("ReactDOM").render(i.jsx("span", {
                children: h._("{name} \u0111ang nh\u1eadp...", [h._param("name", a)])
            }), c);
            return c
        }
        ;
        return c
    }(i.Component);
    e.exports = a;
    a.defaultProps = {
        indicatorClass: b("ChatTypingIndicator.react"),
        indicatorsDidShow: b("emptyFunction"),
        indicatorsDidHide: b("emptyFunction")
    }
}
), null);
__d("WorkUserEmojiWithTooltipBootloader.react", ["JSResource", "gkx", "lazyLoadComponent", "react"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = g || b("react"), i = b("lazyLoadComponent")(b("JSResource")("WorkUserEmojiWithTooltip.react").__setRef("WorkUserEmojiWithTooltipBootloader.react")), j = b("lazyLoadComponent")(b("JSResource")("ChatLSGeminiUserEmojiWithTooltip.react").__setRef("WorkUserEmojiWithTooltipBootloader.react"));
    function a(a) {
        return h.jsx(h.Suspense, {
            fallback: null,
            children: b("gkx")("1630108") ? h.jsx(j, babelHelpers["extends"]({}, a)) : h.jsx(i, babelHelpers["extends"]({}, a))
        })
    }
}
), null);
__d("MercuryThreadTitleReact.bs", ["fbt", "bs_block", "bs_curry", "React", "bs_js_dict", "bs_caml_obj", "MercuryIDs", "Badge.react", "bs_belt_Option", "bs_caml_option", "CurrentUser", "ReasonReact.bs", "bs_js_null_undefined", "MessengerParticipants.bs", "MercuryParticipantListRenderer", "MessengerTextWithEmoticons.react", "WorkUserEmojiWithTooltipBootloader.react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = b("ReasonReact.bs").reducerComponent("MercuryThreadTitleReact");
    function j(a, b) {
        return g._("{conversation-title} ({unread-count})", [g._param("conversation-title", a), g._param("unread-count", String(b))])
    }
    function a(a, c, d, e, f, g, k, l, m) {
        var n = f !== void 0 ? f : !1
          , o = g !== void 0 ? g : !1
          , p = k !== void 0 ? k : !1
          , q = l !== void 0 ? l : !1
          , r = function(a) {
            if (d.name === "") {
                b("bs_curry")._1(a.send, [""]);
                var c = b("MercuryIDs").getParticipantIDFromUserID(e)
                  , f = d.participants.length > 1 ? d.participants.filter(function(a) {
                    return a !== c
                }) : d.participants;
                b("MessengerParticipants.bs").getMulti(f, function(c) {
                    if (a.state.isMounted.contents) {
                        var e = [];
                        f.forEach(function(a) {
                            a = b("bs_js_dict").get(c, a);
                            if (a !== void 0) {
                                e.push(b("bs_caml_option").valFromOption(a));
                                return 0
                            } else
                                return 0
                        });
                        var g = b("bs_js_null_undefined").bind(d.custom_nickname, function(a) {
                            var c = {};
                            b("bs_js_dict").entries(a).forEach(function(a) {
                                c[a[0]] = h.jsx(b("MessengerTextWithEmoticons.react"), {
                                    renderEmoji: !0,
                                    renderEmoticons: !0,
                                    text: a[1]
                                });
                                return 0
                            });
                            return c
                        });
                        g = new (b("MercuryParticipantListRenderer"))().setUseShortName(p).setUseAndSeparator(q).setIsNewThread(n).setNickname(g).renderParticipantList(e);
                        g = o && d.unread_count > 0 ? j(g, d.unread_count) : g;
                        return b("bs_curry")._1(a.send, [g])
                    } else
                        return 0
                });
                return 0
            } else
                return 0
        }
          , s = function(a) {
            if (c !== void 0) {
                a = c;
                a = a === 0 || a >= d.name.length ? d.name : d.name.slice(0, a) + "..."
            } else
                a = d.name;
            a = h.jsx(b("MessengerTextWithEmoticons.react"), {
                renderEmoji: !0,
                renderEmoticons: !0,
                text: a
            });
            if (d.unread_count === 0 || !o)
                return a;
            else
                return j(a, d.unread_count)
        };
        return {
            debugName: i.debugName,
            reactClassInternal: i.reactClassInternal,
            handedOffState: i.handedOffState,
            getDerivedStateFromProps: i.getDerivedStateFromProps,
            didMount: function(a) {
                a.state.isMounted.contents = !0;
                return r(a)
            },
            didUpdate: function(a) {
                a = a.newSelf;
                if (a.state.retainedThread.contents !== d) {
                    a.state.retainedThread.contents = d;
                    return r(a)
                } else
                    return 0
            },
            willUnmount: function(a) {
                a.state.isMounted.contents = !1;
                return 0
            },
            shouldUpdate: i.shouldUpdate,
            render: function(c) {
                c = d.name !== "" ? s(0) : c.state.participantNames;
                var e = d.other_user_fbid;
                e = e == null ? void 0 : b("bs_caml_option").some(e);
                e = b("CurrentUser").isWorkUser() && e !== void 0 ? h.createElement(b("WorkUserEmojiWithTooltipBootloader.react"), {
                    userID: b("bs_belt_Option").getExn(e),
                    withSpace: !0
                }) : null;
                var f = b("bs_belt_Option").flatMap(b("bs_caml_option").nullable_to_opt(b("MercuryIDs").getParticipantIDFromFromThreadID(d.thread_id)), function(a) {
                    return b("bs_caml_option").nullable_to_opt(b("MessengerParticipants.bs").getNow(a))
                });
                f = f !== void 0 && b("bs_caml_obj").caml_equal(b("bs_caml_option").nullable_to_opt(b("bs_caml_option").valFromOption(f).verification_status), "BLUE_VERIFIED") ? h.jsx(b("Badge.react"), {
                    size: "medium",
                    type: "verified"
                }) : null;
                c = {
                    children: [c, e, f, m]
                };
                a !== void 0 && (c.className = b("bs_caml_option").valFromOption(a));
                return h.jsxs("span", c)
            },
            initialState: function(a) {
                return {
                    retainedThread: {
                        contents: d
                    },
                    participantNames: "",
                    isMounted: {
                        contents: !1
                    }
                }
            },
            retainedProps: i.retainedProps,
            reducer: function(a, c) {
                return b("bs_block").__(0, [{
                    retainedThread: c.retainedThread,
                    participantNames: a[0],
                    isMounted: c.isMounted
                }])
            },
            jsElementWrapped: i.jsElementWrapped
        }
    }
    f.component = i;
    f.renderTitleWithUnreadCount = j;
    f.make = a
}
), null);
__d("ChatTypingIndicatorsWrapper.bs", ["React", "bs_belt_MapString", "MessengerState.bs", "ChatTypingIndicators.react"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("React");
    function a(a) {
        var c = a.indicatorClass
          , d = a.indicatorsDidHide
          , e = a.indicatorsDidShow
          , f = a.viewer
          , h = a.rootClassName
          , i = a.threadID;
        return g.jsx(b("MessengerState.bs").Provider.make, {
            fbid: f,
            children: function(a) {
                return g.jsx(b("ChatTypingIndicators.react"), {
                    indicatorClass: c,
                    indicatorsDidShow: e,
                    indicatorsDidHide: d,
                    rootClassName: h,
                    threadID: i,
                    viewer: f,
                    typingUserIDs: b("bs_belt_MapString").get(a.typing, i)
                }, i)
            }
        })
    }
    c = a;
    d = a;
    f.make = c;
    f.jsComponent = d
}
), null);
__d("FantaPageGreetingLoader.react", ["cx", "BootloadOnRender.react", "JSResource", "LazyComponent.react", "React", "getPageIDFromThreadID"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;
    var h = b("React");
    function a(a) {
        var c = a.thread;
        a = a.threadID;
        if (c != null) {
            c = ((c = c) != null ? c.is_canonical_neo_user : c) || !1;
            if (c)
                return null
        } else
            return null;
        return b("getPageIDFromThreadID")(a) ? h.jsx("div", {
            className: "_7bl4",
            children: h.jsx(b("BootloadOnRender.react"), {
                loader: b("JSResource")("MercuryPagesGreetingContainer.react").__setRef("FantaPageGreetingLoader.react"),
                placeholder: h.jsx("div", {}),
                component: h.jsx(b("LazyComponent.react"), {
                    threadID: a
                })
            })
        }) : null
    }
}
), null);
__d("XWorkplaceMarketingDefaultController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/{?*path}/", {
        path: {
            type: "String",
            defaultValue: ""
        },
        ref: {
            type: "String"
        },
        r: {
            type: "String"
        }
    })
}
), null);
__d("MessengerQuickReplyUtils", ["fbt"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.localizeTitleIfNecessary = a;
    function a(a) {
        return a.map(function(a) {
            return a.content_type === "location" ? Object.assign(a, {
                title: g._("G\u1eedi v\u1ecb tr\u00ed")
            }) : a
        })
    }
}
), null);
__d("MessengerBusinessQuickReplyLocationQueryWebGraphQLQuery", ["WebGraphQLQueryBase"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        b.__getDocID = function() {
            return "2269337216466106"
        }
        ;
        b.getQueryID = function() {
            return "489792994894664"
        }
        ;
        return b
    }(b("WebGraphQLQueryBase"))
}
), null);
__d("MessengerUserProfileLocationUtils", ["MessengerBusinessQuickReplyLocationQueryWebGraphQLQuery", "RelayFBEnvironment", "RelayHooks", "WebGraphQL", "MessengerUserProfileLocationUtilsQuery.graphql"], (function(a, b, c, d, e, f) {
    "use strict";
    f.FetchMessengerUserRegionAndPostalCode = a;
    var g;
    function h() {
        return b("RelayHooks").fetchQuery(b("RelayFBEnvironment"), g !== void 0 ? g : g = b("MessengerUserProfileLocationUtilsQuery.graphql"), {}).toPromise()
    }
    function a() {
        return h().then(function(a) {
            var c = null
              , d = null;
            a = a == null ? void 0 : (a = a.viewer) == null ? void 0 : (a = a.user) == null ? void 0 : a.address;
            a !== null && (c = (a == null ? void 0 : a.region) === "" ? null : a == null ? void 0 : a.region,
            d = (a == null ? void 0 : a.postal_code) === "" ? null : a == null ? void 0 : a.postal_code);
            if (c !== null && d !== null)
                return {
                    region: c,
                    postal_code: d
                };
            else
                return b("WebGraphQL").exec(new (b("MessengerBusinessQuickReplyLocationQueryWebGraphQLQuery"))({})).then(function(a) {
                    a = (a = a) != null ? a.in_thread_user_fuzzy_location_search : a;
                    if (a !== null) {
                        var b;
                        c = c === null ? (b = a) != null ? b.state : b : c;
                        d = d === null ? (b = a) != null ? b.zip_code : b : d
                    }
                    return {
                        region: c,
                        postal_code: d
                    }
                })
        })
    }
}
), null);
__d("MessengerViewerContactMethodsWebGraphQLQuery", ["WebGraphQLQueryBase"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = function(a) {
        babelHelpers.inheritsLoose(b, a);
        function b() {
            return a.apply(this, arguments) || this
        }
        b.__getDocID = function() {
            return "1868889766468115"
        }
        ;
        b.getQueryID = function() {
            return "177554543035925"
        }
        ;
        return b
    }(b("WebGraphQLQueryBase"))
}
), null);
__d("WorkBotLandingPageHelper", ["immutable"], (function(a, b, c, d, e, f) {
    "use strict";
    f.shouldShowBotLandingPageArray = a;
    f.shouldShowBotLandingPage = c;
    b("immutable").List;
    function a(a) {
        var b;
        if (a.length === 0)
            return !0;
        if (a.length > 1)
            return !1;
        a = a[a.length - 1];
        b = (b = a) != null ? (b = b.log_message_data) != null ? b.message_type : b : b;
        if (b === "work_bot_installed") {
            a = (b = a) != null ? (b = b.log_message_data) != null ? (b = b.untypedData) != null ? b.show_landing_page : b : b : b;
            return a === !0
        }
        return !1
    }
    function c(a) {
        var b;
        if (a.size === 0)
            return !0;
        if (a.size > 1)
            return !1;
        a = a.last();
        b = (b = a) != null ? (b = b.log_message_data) != null ? b.message_type : b : b;
        if (b === "work_bot_installed") {
            a = (b = a) != null ? (b = b.log_message_data) != null ? (b = b.untypedData) != null ? b.show_landing_page : b : b : b;
            return a === !0
        }
        return !1
    }
}
), null);
__d("CoworkerThreadContextBanner.react", ["ix", "cx", "fbt", "FlexLayout.react", "Image.react", "MessengerEnvironment", "React", "XUIText.react", "asset"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    e.exports = a;
    var j = b("React");
    function a(a) {
        a = b("MessengerEnvironment").messengerui;
        return j.jsx("div", {
            className: (a ? "" : "_80n8") + (a ? " _1li-" : ""),
            children: j.jsxs(b("FlexLayout.react"), {
                className: (a ? "" : "_80n9") + (a ? " _80nc" : ""),
                align: "center",
                children: [j.jsx("div", {
                    className: "_80nd" + (a ? "" : " _80ne") + (a ? " _80nf" : ""),
                    children: j.jsx(b("Image.react"), {
                        src: g("558200")
                    })
                }), j.jsxs("div", {
                    className: "_80ng",
                    children: [j.jsx(b("XUIText.react"), {
                        className: "_80nh",
                        children: i._("Th\u00e0nh vi\u00ean Nh\u00f3m \u0111\u1ed3ng nghi\u1ec7p")
                    }), j.jsx(b("XUIText.react"), {
                        className: "_80ni",
                        children: i._("Cu\u1ed9c tr\u00f2 chuy\u1ec7n v\u1edbi \u0111\u1ed3ng nghi\u1ec7p")
                    })]
                })]
            })
        })
    }
}
), null);
__d("HotLikeSound", ["MercurySoundsConfig", "SoundPlayer", "StickerConstants"], (function(a, b, c, d, e, f) {
    "use strict";
    f.setCheckSoundEnabledFunc = a;
    f.start = c;
    f.stop = d;
    f.pop = e;
    f.snap = m;
    f._play = n;
    var g = [(a = b("MercurySoundsConfig")).hot_like_grow_mp3_url, a.hot_like_grow_ogg_url]
      , h = [a.hot_like_pop_mp3_url, a.hot_like_pop_ogg_url]
      , i = [a.hot_like_outgoing_small_mp3_url, a.hot_like_outgoing_small_ogg_url]
      , j = [a.hot_like_outgoing_medium_mp3_url, a.hot_like_outgoing_medium_ogg_url]
      , k = [a.hot_like_outgoing_large_mp3_url, a.hot_like_outgoing_large_ogg_url]
      , l = function() {
        return !1
    };
    function a(a) {
        l = a
    }
    function c() {
        this._play(g)
    }
    function d() {
        b("SoundPlayer").stop(g)
    }
    function e() {
        this.stop(),
        this._play(h)
    }
    function m(a) {
        this.stop(),
        a === b("StickerConstants").HOT_LIKE_SMALL_STICKER_ID && this._play(i),
        a === b("StickerConstants").HOT_LIKE_MEDIUM_STICKER_ID && this._play(j),
        a === b("StickerConstants").HOT_LIKE_LARGE_STICKER_ID && this._play(k)
    }
    function n(a) {
        l() && b("SoundPlayer").play(a)
    }
}
), null);
__d("MercuryDeliveryState", ["MercuryIDs", "MercuryServerRequests", "MercurySingletonProvider", "MercuryThreadIDMap", "MercuryThreadInformer", "UserActivity", "debounceAcrossTransitions"], (function(a, b, c, d, e, f) {
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
            var c = this;
            this.$8 = function() {
                if (c.$5.length === 0 && Object.keys(c.$6).length === 0)
                    return;
                var a = c.$5.map(function(a) {
                    return a.message_id
                });
                a && c.$2.sendDeliveryReceipts(a, c.$6);
                c.$6 = {};
                c.$5 = []
            }
            ;
            this.$1 = a;
            this.$2 = b("MercuryServerRequests").getForFBID(this.$1);
            this.$3 = b("MercuryThreadInformer").getForFBID(this.$1);
            this.$4 = b("MercuryThreadIDMap").getForFBID(this.$1);
            this.$5 = [];
            this.$6 = {};
            this.$3.subscribe("messages-received", this.$7.bind(this));
            b("UserActivity").subscribe(b("debounceAcrossTransitions")(this.$8, 300, this))
        }
        var c = a.prototype;
        c.$7 = function(a, b) {
            var c = this;
            for (var d in b) {
                a = b[d];
                a.forEach(function(a) {
                    c.$9(a) && (c.$5.push(a),
                    c.$4.getServerIDFromClientID(d, function(b) {
                        c.$6[b] || (c.$6[b] = []),
                        c.$6[b].push(a.message_id)
                    }))
                })
            }
            this.$8()
        }
        ;
        c.$9 = function(a) {
            var c = a.author ? b("MercuryIDs").getUserIDFromParticipantID(a.author) : null;
            if (c === this.$1)
                return !1;
            return !a.is_unread ? !1 : !0
        }
        ;
        return a
    }();
    e.exports = a;
    var g = new (b("MercurySingletonProvider"))(a)
}
), null);
__d("MercurySyncEnvironment", ["Arbiter", "ChannelInitialData", "CurrentUser", "MercurySyncDeltaHandler"], (function(a, b, c, d, e, f) {
    "use strict";
    f.setUp = a;
    function a() {
        if (!b("ChannelInitialData").channelConfig)
            return;
        b("MercurySyncDeltaHandler").get();
        b("Arbiter").inform("MercurySyncDeltaHandler/initSeqID", {
            fbid: b("CurrentUser").getAccountID(),
            seqID: b("ChannelInitialData").channelConfig ? b("ChannelInitialData").channelConfig.sequenceId : 0
        })
    }
}
), null);
