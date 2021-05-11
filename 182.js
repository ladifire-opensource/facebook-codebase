if (self.CavalryLogger) {
    CavalryLogger.start_js(["W1B1s"]);
}

__d("PagesManagerInboxTypeaheadSuggestionNuxContainer.react", ["fbt", "PagesManagerInboxNUX", "PagesManagerInboxNUXAction", "PagesManagerInboxStore", "React", "XUIAmbientNUX.react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("React")
      , i = "pages_smart_compose_nux";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++)
                f[g] = arguments[g];
            return (c = d = a.call.apply(a, [this].concat(f)) || this,
            d.state = {
                shouldShowTypeaheadSuggestionNUX: d.$1()
            },
            d.$3 = function() {
                b("PagesManagerInboxNUXAction").dismiss(d.$2()),
                d.setState({
                    shouldShowTypeaheadSuggestionNUX: !1
                })
            }
            ,
            c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.$1 = function() {
            var a = this.props.hasTypeahead || b("PagesManagerInboxStore").shouldShowNUX(i);
            a && b("PagesManagerInboxNUXAction").viewNux(this.$2());
            return a
        }
        ;
        d.$2 = function() {
            return b("PagesManagerInboxNUX")[i]
        }
        ;
        d.render = function() {
            var a = g._("Predictive text suggestions will appear as you type. Just hit the tab or right arrow key to use the suggested phrase. Suggestions are generated on our servers based on what you type.");
            return h.jsx(b("XUIAmbientNUX.react"), {
                contextRef: this.props.contextRef,
                onCloseButtonClick: this.$3,
                position: "above",
                shown: this.state.shouldShowTypeaheadSuggestionNUX,
                width: "wide",
                children: a
            })
        }
        ;
        return c
    }(h.PureComponent);
    e.exports = a
}
), null);
__d("PagesTypeaheadSuggestionInput.react", ["cx", "AbstractMentionsTextEditor.react", "DebouncedMentionsTextEditor.react", "DraftEditor.react", "DraftModifier", "EditorState", "MercuryIDs", "PagesManagerInboxTypeaheadSuggestionNuxContainer.react", "React", "RelayFBEnvironment", "SmartComposeTypeaheadHelper"], (function(a, b, c, d, e, f, g) {
    var h = b("React")
      , i = "not-handled"
      , j = {
        GHOST: {
            visibility: "hidden"
        }
    };
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(c) {
            var d;
            d = a.call(this, c) || this;
            d.state = {
                typeahead: ""
            };
            d.$3 = function(a) {
                d.props.onChange(a);
                a = a.getCurrentContent().getPlainText();
                d.$1.updateTypeSpeed();
                d.$1.setEnteredText(a);
                d.$1.setCursorAtEnd(d.$2())
            }
            ;
            d.$4 = function(a) {
                !d.insertTypeahead(a) && d.props.onTab && d.props.onTab(a)
            }
            ;
            d.$5 = function(a) {
                !d.insertTypeahead(a) && d.props.onRightArrow && d.props.onRightArrow(a)
            }
            ;
            d.$6 = function(a, b) {
                d.setState({
                    typeahead: ""
                });
                return d.props.handleContentReturn != null ? d.props.handleContentReturn(a, b) : i
            }
            ;
            d.$1 = new (b("SmartComposeTypeaheadHelper"))("p2b_messaging",b("RelayFBEnvironment"),b("MercuryIDs").isValidThreadID(d.props.threadID) ? b("MercuryIDs").getThreadFBIDFromThreadID(d.props.threadID) : "");
            d.$1.onSuggestionChange(function(a) {
                return d.setState({
                    typeahead: a
                })
            });
            return d
        }
        var d = c.prototype;
        d.$2 = function() {
            var a = this.props.editorState;
            if (a == null)
                return !1;
            var b = a.getSelection();
            a = a.getCurrentContent();
            var c = b.getAnchorKey();
            c = a.getBlockForKey(c);
            var d = b.getStartOffset();
            b = b.getEndOffset();
            a = c === a.getLastBlock() && d === b && d === c.getText().length;
            return a
        }
        ;
        d.insertTypeahead = function(a) {
            var c = this.state.typeahead;
            if (c == "")
                return !1;
            this.$1.logSuggestionInserted();
            a.preventDefault();
            a = this.props.editorState;
            var d = a.getCurrentContent().getPlainText();
            a = b("EditorState").push(a, b("DraftModifier").insertText(a.getCurrentContent(), a.getSelection(), c), "insert-characters");
            a = b("EditorState").forceSelection(a, a.getCurrentContent().getSelectionAfter());
            this.props.onChange(a);
            this.$1.setEnteredText(d + c);
            return !0
        }
        ;
        d.exitCurrentMode = function() {
            this.refs.foreground && this.refs.foreground.exitCurrentMode()
        }
        ;
        d.focus = function() {
            this.refs.foreground && this.refs.foreground.focus()
        }
        ;
        d.$7 = function() {
            var a = this.props.editorState
              , c = a.getSelection()
              , d = a.getCurrentContent();
            if (!this.$2() || this.state.typeahead == "")
                return null;
            var e = a.getSelection().merge({
                anchorKey: d.getFirstBlock().getKey(),
                anchorOffset: 0,
                focusOffset: d.getLastBlock().getText().length,
                focusKey: d.getLastBlock().getKey()
            });
            d = b("DraftModifier").applyInlineStyle(d, e, "GHOST");
            e = b("EditorState").createWithContent(b("DraftModifier").insertText(d, c, this.state.typeahead), a.getDecorator());
            return h.jsx(b("DebouncedMentionsTextEditor.react"), babelHelpers["extends"]({}, this.props, {
                className: "_8voz",
                readOnly: !0,
                editorState: e,
                placeholder: "",
                customStyleMap: j
            }))
        }
        ;
        d.render = function() {
            var a = this;
            return h.jsxs("div", {
                className: "_899m",
                children: [this.$7(), h.jsx(b("DebouncedMentionsTextEditor.react"), babelHelpers["extends"]({}, this.props, {
                    ref: "foreground",
                    handleContentReturn: this.$6,
                    onChange: this.$3,
                    onTab: this.$4,
                    onRightArrow: this.$5,
                    placeholder: this.state.typeahead === "" ? this.props.placeholder : ""
                })), h.jsx(b("PagesManagerInboxTypeaheadSuggestionNuxContainer.react"), {
                    contextRef: function() {
                        return a.refs.foreground
                    },
                    hasTypeahead: this.state.typeahead !== ""
                })]
            })
        }
        ;
        return c
    }(h.Component);
    e.exports = a;
    a.defaultProps = babelHelpers["extends"]({}, b("DraftEditor.react").defaultProps, {
        autoHighlight: !0,
        autoUpdateHighlight: !0,
        reverseOrder: !1,
        threadID: ""
    })
}
), null);
__d("PagesInterfaceTypeaheadSuggestion.react", ["cx", "fbt", "CompositeDraftDecorator", "EditorState", "MentionsLayer.react", "MessengerConstants", "MessengerEditorStateManager", "PagesTypeaheadSuggestionInput.react", "React", "createMessengerMentionDraftEntity", "handleSoftNewlineForMessengerEmoticon", "isSoftNewlineEvent"], (function(a, b, c, d, e, f, g, h) {
    var i = b("React")
      , j = "handled"
      , k = {};
    k[b("MessengerConstants").NEW_THREAD_KEY] = {
        editorState: b("EditorState").createEmpty()
    };
    function l(a, c) {
        if (!a)
            return;
        a !== b("MessengerConstants").NEW_THREAD_KEY && b("MessengerEditorStateManager").set(a, c)
    }
    function m(a) {
        k[a] || (k[a] = {
            editorState: b("EditorState").createEmpty()
        });
        return k[a].editorState
    }
    function n(a, b) {
        if (!a)
            return null;
        k[a].editorState = b;
        return b
    }
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);
        function c(c) {
            var d;
            d = a.call(this, c) || this;
            d.$1 = !1;
            d.$6 = function(a) {
                if (!d.$1 || a === d.props.editorState)
                    return;
                if (d.$1 && a !== d.props.editorState) {
                    d.props.setEditorState(a);
                    var b = n(d.props.threadID, a);
                    b && l(d.props.threadID, b)
                }
                b = a.getCurrentContent().getPlainText();
                d.props.onChange(b)
            }
            ;
            d.$7 = function(a, c) {
                if (b("isSoftNewlineEvent")(a)) {
                    a = b("handleSoftNewlineForMessengerEmoticon");
                    a = a(c);
                    d.props.setEditorState(a);
                    n(d.props.threadID, a);
                    return j
                }
                d.setState({}, d.$4);
                return j
            }
            ;
            d.$4 = function(a) {
                d.props.handleReturn(a);
                a = d.$5(b("EditorState").createEmpty());
                d.props.setEditorState(a);
                l(d.props.threadID, a)
            }
            ;
            d.$2 = c;
            d.state = d.$3();
            d.$4 = d.$4.bind(babelHelpers.assertThisInitialized(d));
            return d
        }
        var d = c.prototype;
        d.$3 = function() {
            var a;
            this.props.threadID ? a = m(this.props.threadID) : a = m(b("MessengerConstants").NEW_THREAD_KEY);
            a = this.$5(a);
            var c = b("createMessengerMentionDraftEntity");
            return {
                editorState: a,
                mentionCreationForContentStateFn: c
            }
        }
        ;
        d.$5 = function(a) {
            var c = [];
            c = new (b("CompositeDraftDecorator"))(c);
            a = b("EditorState").set(a, {
                decorator: c
            });
            return a
        }
        ;
        d.componentDidMount = function() {
            this.$1 = !0,
            (function(a, b) {
                l(a, b)
            }
            )
        }
        ;
        d.render = function() {
            var a = h._("Vi\u1ebft tr\u1ea3 l\u1eddi...");
            return i.jsx("div", {
                className: "_9h6r",
                children: i.jsx(b("PagesTypeaheadSuggestionInput.react"), {
                    assistantTypeaheadSource: this.state.assistantTypeaheadSource,
                    autoHighlight: !0,
                    ariaLabel: a.toString(),
                    editorState: this.props.editorState,
                    handleContentReturn: this.$7,
                    handleReturn: this.$7,
                    onChange: this.$6,
                    maxResults: 5,
                    readOnly: !1,
                    mentionCreationForContentStateFn: this.state.mentionCreationForContentStateFn,
                    mentionResultsComponent: b("MentionsLayer.react"),
                    placeholder: a.toString(),
                    textAlignment: "left",
                    ref: "input",
                    spellCheck: !0,
                    stripPastedStyles: !0
                })
            })
        }
        ;
        return c
    }(i.Component);
    e.exports = a
}
), null);
__d("BusinessInboxMessageComposerRenderViewFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1755874");
    c = b("FalcoLoggerInternal").create("business_inbox_message_composer_render_view", a);
    e.exports = c
}
), null);
