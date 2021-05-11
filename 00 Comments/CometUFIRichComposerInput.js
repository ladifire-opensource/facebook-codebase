__d("CometUFIRichComposerInput.react", ["CometVisualCompletionAttributes", "DraftEditor.react", 
	"Keys", "requireCond", "cr:1600421", "React", "getDefaultKeyBinding", 
	"getEditorStateFromUFI2ComposerState", "isSoftNewlineEvent", "stylex"], (function(a, b, c, d, e, f) {
	"use strict";
	var g, h = b("Keys").RETURN,
		i = b("React"),
		j = {
			disabled: {
				cursor: "bnpdmtie"
			},
			root: {
				color: "oo9gr5id"
			}
		};
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			var c, d;
			for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++) f[g] = arguments[g];
			return (c = d = a.call.apply(a, [this].concat(f)) || this, d.$1 = function(a) {
				d.props.onComposerStateChange(function(b) {
					return babelHelpers["extends"]({}, b, {
						inputState: b.inputState.__type === "editor-state-based" ? babelHelpers["extends"]({}, b.inputState, {
							editorState: a
						}) : {
							__type: "editor-state-based",
							editorState: a
						}
					})
				})
			}, d.$2 = function(a, b) {
				return d.props.handleBeforeInput ? d.props.handleBeforeInput(a, b) : "not-handled"
			}, d.$3 = function(a, b) {
				if (d.props.handleKeyCommand && d.props.handleKeyCommand(a, b) === "handled") return "handled";
				if (a === "ufi-commit") {
					d.props.onCommit();
					return "handled"
				}
				return "not-handled"
			}, d.$4 = function(a) {
				if (d.props.keyBindingFn) {
					var c = d.props.keyBindingFn(a);
					if (c != null) return c
				}
				return a.keyCode === h && !b("isSoftNewlineEvent")(a) ? "ufi-commit" : b("getDefaultKeyBinding")(a)
			}, c) || babelHelpers.assertThisInitialized(d)
		}
		var d = c.prototype;
		d.componentWillUnmount = function() {
			var a = this.lastEditorRef;
			a && b("cr:1600421") && b("cr:1600421").unregister(a)
		};
		d.execCommand = function(a) {
			this.props.handleCommand && this.props.handleCommand(a)
		};
		d.render = function() {
			var a = this,
				c = this.props.composerState.ariaInputs;
			return i.jsx("div", babelHelpers["extends"]({
				className: (g || (g = b("stylex")))(j.root, this.props.composerState.isLocked && j.disabled, this.props.xstyle)
			}, b("CometVisualCompletionAttributes").IGNORE, {
				onClick: this.props.onClick,
				children: i.jsx(b("DraftEditor.react"), {
					ariaActiveDescendantID: c ? c["aria-activedescendant"] : void 0,
					ariaControls: c ? c["aria-controls"] : void 0,
					ariaDescribedBy: this.props.ariaDescribedBy,
					ariaLabel: String((c = this.props.ariaLabel) != null ? c : this.props.placeholder),
					editorRef: function(c) {
						var d = a.props.onInputRefUpdated;
						d && d(c);
						if (b("cr:1600421") === null) return;
						d = a.lastEditorRef;
						if (d === c || c === null) return;
						c !== null && !b("cr:1600421").isRegistered(c) && (d && b("cr:1600421").unregister(d), a.lastEditorRef = c, b("cr:1600421").registerForMeasurement(c, "UFI2RichComposerInput"))
					},
					editorState: b("getEditorStateFromUFI2ComposerState")(this.props.composerState),
					handleBeforeInput: this.$2,
					handleKeyCommand: this.$3,
					handlePastedFiles: this.props.handlePastedFiles,
					keyBindingFn: this.$4,
					onBlur: this.props.onBlur,
					onChange: this.$1,
					onFocus: this.props.onFocus,
					placeholder: String(this.props.placeholder),
					placeholderClassName: this.props.placeholderClassName,
					preventScroll: !0,
					readOnly: this.props.composerState.isLocked,
					spellCheck: !0,
					stripPastedStyles: !0,
					webDriverTestID: this.props.webDriverTestID
				})
			}))
		};
		return c
	}(i.PureComponent);
	e.exports = a
}), null);
__d("ReactBrowserEventEmitter_DO_NOT_USE", ["ReactDOM"], (function(a, b, c, d, e, f) {
	"use strict";
	a = b("ReactDOM").__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
	e.exports = a.ReactBrowserEventEmitter
}), null);