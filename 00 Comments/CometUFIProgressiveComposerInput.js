__d("CometUFIProgressiveComposerInput.react", ["Promise", "CometProgressivelyEnhancedComponent.react", 
	"FBLogger", "FocusRegion.react", "Keys", "requireDeferred", "React", "ReactDOMSelection", 
	"SubscriptionsHandler", "deferredLoadComponent", "clearTimeout", "emptyFunction", 
	"getPlainTextFromCometUFIInputState", "ifRequireable", "isSoftNewlineEvent", 
	"setTimeout", "stylex"], (function(a, b, c, d, e, f) {
	"use strict";
	var g, h = b("Keys").RETURN,
		i = b("React"),
		j = b("requireDeferred")("CometUFIRichComposerInput.react"),
		k = b("deferredLoadComponent")(j),
		l = b("requireDeferred")("getEditorStateFromUFI2ComposerState"),
		m = {
			disabledProxyInput: {
				cursor: "bnpdmtie"
			},
			emptyPlaceholder: {
				overflowX: "ni8dbmo4",
				overflowY: "stjgntxs",
				textOverflow: "ltmttdrg",
				whiteSpace: "mshkm1ct"
			},
			proxyInput: {
				backgroundColor: "g5ia77u1",
				borderTop: "qu0x051f",
				borderEnd: "esr5mh6w",
				borderBottom: "e9989ue4",
				borderStart: "r7d6kgcz",
				color: "oo9gr5id",
				height: "datstx6m",
				outline: "lzcic4wl",
				resize: "ieid39z1",
				wordBreak: "qv66sw1b",
				zIndex: "tkr6xdv7"
			},
			proxyInputPlaceholder: {
				bottom: "i09qtzwb",
				color: "m9osqain",
				end: "n7fi1qx3",
				overflowX: "ni8dbmo4",
				overflowY: "stjgntxs",
				pointerEvents: "hzruof5a",
				position: "pmk7jnqg",
				start: "j9ispegn",
				textOverflow: "ltmttdrg",
				top: "kr520xx4"
			},
			proxyInputPlaceholderForFocusedInput: {
				color: "pipptul6"
			},
			proxyInputWrapper: {
				height: "datstx6m",
				position: "l9j0dhe7"
			}
		};

	function n(a) {
		a = a.innerText || "";
		a.replace(/(\r\n|\r|\n)/g, "") === "" && (a = "");
		return a
	}

	function o() {
		return b("ifRequireable")("EditorState", function(a) {
			var b = j.getModuleIfRequireable();
			if (b != null) {
				var c = l.getModuleIfRequireable();
				if (c != null) return {
					CometUFIRichComposerInput: b,
					EditorState: a,
					getEditorStateFromUFI2ComposerState: c
				}
			}
		})
	}
	a = function(a) {
		babelHelpers.inheritsLoose(c, a);

		function c() {
			var c, d;
			for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++) f[g] = arguments[g];
			return (c = d = a.call.apply(a, [this].concat(f)) || this, d.$1 = null, d.$2 = !1, d.$3 = null, d.$4 = new(b("SubscriptionsHandler"))(), d.state = {
				proxyInputHasFocus: !1,
				proxyIsInCompositionMode: !1
			}, d.$7 = function(a) {
				d.setState({
					proxyIsInCompositionMode: !0
				})
			}, d.$8 = function(a) {
				d.setState({
					proxyIsInCompositionMode: !1
				})
			}, d.$9 = function(a) {
				d.$10(a.target)
			}, d.$11 = function(a) {
				document.activeElement === d.$3 && (d.$1 = d.$6(a)), d.$3 = a, d.props.onInputRefUpdated && d.props.onInputRefUpdated(a)
			}, d.$12 = function(a) {
				a.keyCode === h && !b("isSoftNewlineEvent")(a) && (a.preventDefault(), d.props.onCommit())
			}, d.$13 = function(a) {
				d.$2 = !0;
				var c = b("setTimeout")(function() {
					b("FBLogger")("ufi2").warn("_handleProxyMouseDown had no corresonding mouseup event for 30s.")
				}, 3e4);
				d.$4.addSubscriptions({
					remove: function() {
						b("clearTimeout")(c)
					}
				});
				var e = function() {
					var a = function() {
						b("clearTimeout")(c), d.$2 = !1, d.$4.releaseOne(e), d.$3 != null && d.$3 === document.activeElement && d.$5()
					};
					document.addEventListener("mouseup", a);
					return {
						remove: function() {
							document.removeEventListener("mouseup", a)
						}
					}
				}();
				d.$4.addSubscriptions(e)
			}, d.$14 = function(a) {
				var b = d.props.handlePastedFiles;
				if (b) {
					var c = a.clipboardData;
					c = c.items != null ? Array.from(c.items) : [];
					c = c.map(function(a) {
						return a.getAsFile()
					}).filter(Boolean);
					c.length && (b(c) === "handled" && a.preventDefault())
				}
			}, d.$16 = function(a) {
				d.setState({
					proxyInputHasFocus: !1
				})
			}, d.$17 = function(a) {
				var c = function() {
						d.$2 === !1 && d.$5()
					},
					e = o();
				e == null ? (j.loadImmediately(b("emptyFunction")), l.loadImmediately(function() {
					return c()
				})) : c();
				d.setState({
					proxyInputHasFocus: !0
				});
				d.props.onFocus && d.props.onFocus(a)
			}, c) || babelHelpers.assertThisInitialized(d)
		}
		c.createEmptyComposerState = function() {
			var a = o();
			a = a == null ? void 0 : a.EditorState;
			return a != null ? {
				__type: "editor-state-based",
				editorState: a.createEmpty()
			} : {
				__type: "plain-text",
				selectionOffsets: null,
				text: ""
			}
		};
		var d = c.prototype;
		d.$5 = function() {
			var a = this;
			if (this.state.proxyIsInCompositionMode === !0 || this.props.composerState.inputState.__type !== "plain-text") return;
			var c = o();
			if (c == null) return;
			this.props.onComposerStateChange(function(d) {
				var e, f = d.inputState;
				if (f.__type !== "plain-text") {
					b("FBLogger")("ufi2").warn("We were asked to commit the text and selection state of the proxy input, but the current input state is of type `%s` when we expected it to be of type `plain-text`. Investigate why a reference to the proxy input existed when the input state was of this type.", f.__type);
					return d
				}
				e = babelHelpers["extends"]({}, d, {
					inputState: babelHelpers["extends"]({}, f, {
						selectionOffsets: (e = (e = a.$1) != null ? e : a.$6()) != null ? e : f.selectionOffsets
					})
				});
				return babelHelpers["extends"]({}, d, {
					inputState: {
						__type: "editor-state-based",
						editorState: c.getEditorStateFromUFI2ComposerState(e)
					}
				})
			})
		};
		d.$10 = function(a) {
			var c = n(a);
			this.props.onComposerStateChange(function(a) {
				var d = a.inputState;
				if (d.__type !== "plain-text") {
					b("FBLogger")("ufi2").warn("We were asked to handle an input event for the proxy input, but the current input state is of type `%s` when we expected it to be of type `plain-text`. Investigate why a reference to the proxy input existed when the input state was of this type.", d.__type);
					return a
				}
				return babelHelpers["extends"]({}, a, {
					inputState: babelHelpers["extends"]({}, d, {
						text: c
					})
				})
			})
		};
		d.$6 = function(a) {
			a === void 0 && (a = this.$3);
			return a != null && document.activeElement === a ? b("ReactDOMSelection").getOffsets(a) : null
		};
		d.$15 = function(a) {
			if (a.composerState.inputState.__type !== "plain-text") return;
			var c = this.$3;
			if (c) {
				a = a.composerState.inputState;
				var d, e;
				switch (a.__type) {
					case "plain-text":
						d = a.text;
						e = a.selectionOffsets;
						break;
					case "editor-state-based":
					default:
						d = a.editorState.getCurrentContent().getBlockMap().map(function(a) {
							return a ? a.getText() : ""
						}).join("\n");
						b("FBLogger")("ufi2").warn("Unimplemented: tried to update the UFI2 proxy input's selection using an `EditorState` but we have not yet implemented a function that maps from an `EditorState` to selection offsets.");
						break
				}
				e == null && (e = document.activeElement === c ? b("ReactDOMSelection").getOffsets(c) : null);
				a = n(c);
				d !== a && (c.textContent = d, e != null && (d === "" ? (c.innerText = "\xa0", b("ReactDOMSelection").setOffsets(c, {
					end: 1,
					start: 1
				}), document.execCommand("delete", !1, null)) : b("ReactDOMSelection").setOffsets(c, e)))
			}
		};
		d.componentDidMount = function() {
			var a = this,
				b = this.props.composerState.inputState;
			this.$3 && b.__type === "plain-text" && this.$15(this.props);
			b = o();
			(b == null ? void 0 : b.CometUFIRichComposerInput) == null && this.$4.addSubscriptions(j.onReady(function(b) {
				a.props.composerState.inputState.__type === "editor-state-based" && a.forceUpdate()
			}))
		};
		d.componentDidUpdate = function() {
			this.props.composerState.inputState.__type === "plain-text" && this.$5(), this.$15(this.props)
		};
		d.componentWillUnmount = function() {
			this.$4.release()
		};
		d.execCommand = function(a) {
			this.props.handleCommand && (a.__type === "PrefillMention" && (j.loadImmediately(b("emptyFunction")), this.$5()), this.props.handleCommand(a))
		};
		d.render = function() {
			var a = this.props,
				c = a.xstyle;
			a = babelHelpers.objectWithoutPropertiesLoose(a, ["xstyle"]);
			var d = b("getPlainTextFromCometUFIInputState")(a.composerState.inputState).trim() !== "",
				e = a.depth ? "UFI2ComposerInput/reply" : "UFI2ComposerInput/comment",
				f = i.jsx("div", {
					className: (g || (g = b("stylex")))(c),
					onClick: a.onClick,
					role: "none",
					children: i.jsxs("div", {
						className: g(m.proxyInputWrapper),
						children: [i.jsx("div", {
							className: g(a.composerState.isLocked && m.disabledProxyInput, m.proxyInput),
							contentEditable: a.composerState.isLocked === !1,
							"data-testid": void 0,
							onBlur: this.$16,
							onCompositionEnd: this.$8,
							onCompositionStart: this.$7,
							onFocus: this.$17,
							onInput: this.$9,
							onKeyDown: this.$12,
							onMouseDown: this.$13,
							onPaste: this.$14,
							ref: this.$11,
							role: "textbox",
							tabIndex: 0
						}), d ? null : i.jsx("div", {
							className: (g || (g = b("stylex")))(m.proxyInputPlaceholder, this.state.proxyInputHasFocus && m.proxyInputPlaceholderForFocusedInput),
							children: a.placeholder
						})]
					})
				});
			return i.jsx(b("FocusRegion.react").FocusRegion, {
				recoverFocusQuery: null,
				children: i.jsxs(b("CometProgressivelyEnhancedComponent.react"), {
					fallback: f,
					forceFallback: this.state.proxyIsInCompositionMode,
					shouldStartEnhanced: !!j.getModuleIfRequireable(),
					children: [i.jsx(p, {
						shouldSuspend: this.state.proxyIsInCompositionMode
					}), i.jsx(k, babelHelpers["extends"]({}, a, {
						composerState: a.composerState,
						onClick: a.onClick,
						onCommit: a.onCommit,
						onComposerStateChange: a.onComposerStateChange,
						onInputRefUpdated: a.onInputRefUpdated,
						placeholder: a.placeholder,
						placeholderClassName: g(!d && m.emptyPlaceholder),
						webDriverTestID: e + ":rich-input",
						xstyle: c
					}))]
				})
			})
		};
		return c
	}(i.Component);
	e.exports = a;

	function p(a) {
		a = a.shouldSuspend;
		if (a) throw new(b("Promise"))(function() {});
		return null
	}
}), null);