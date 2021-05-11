__d("AbstractMentionsTextEditor.react", ["requireCond", "cr:1600421", "DraftEditor.react", "Keys", "React", "TypeaheadNavigation", "clearImmediate", "getDefaultKeyBinding", "getOrCreateDOMID", "prop-types", "replaceMentionedTextInEditorState", "setImmediate", "uniqueID"], (function(a, b, c, d, e, f) {
	var g = b("React");
	a = 5;
	var h = "handled",
		i = "not-handled";
	c = function(a) {
		"use strict";
		babelHelpers.inheritsLoose(c, a);

		function c(c, d) {
			var e;
			e = a.call(this, c, d) || this;
			e.$1 = b("uniqueID")();
			e.$2 = !1;
			e.$3 = [];
			e.containerRef = g.createRef();
			e.abstractTextEditorRef = g.createRef();
			e.__onShowMentions = function(a, b, c, d) {
				d === void 0 && (d = !0);
				if (!e.$2) return;
				b = b || 0;
				if (!a || !a.length) {
					var f = e.state.mentionableEntries;
					if (f && f.length && f[0].getDataType() !== (c || "")) return;
					e.setState({
						highlightedMentionable: null,
						activeDescendantID: null,
						mentionableEntries: null,
						characterOffset: 0
					});
					return
				}
				f = e.props.typeaheadViewProps;
				c = a;
				f && f.mentionSortFn && c.sort(f.mentionSortFn);
				c = a.slice(0, e.props.maxResults);
				e.props.reverseOrder && (c = c.reverse());
				f = null;
				(e.props.autoHighlight || e.state.highlightedMentionable !== null) && (f = e.props.autoUpdateHighlight ? c[0] : e.state.highlightedMentionable);
				e.setState({
					highlightedMentionable: d ? f : null,
					mentionableEntries: c,
					characterOffset: b
				});
				e.props.onShowMentions && e.props.onShowMentions(c, b)
			};
			e.$13 = function(a) {
				var c;
				if (a.keyCode === b("Keys").TAB) return e.$6(a);
				if (a.keyCode === b("Keys").ESC) return e.$5(a);
				if (a.keyCode === b("Keys").UP) return e.$11(a);
				return a.keyCode === b("Keys").DOWN ? e.$4(a) : (c = e.props.keyBindingFn == null ? void 0 : e.props.keyBindingFn(a)) != null ? c : b("getDefaultKeyBinding")(a)
			};
			e.$8 = function(a) {
				e.setState(e.$12()), e.props.onBlur && e.props.onBlur(a)
			};
			e.$7 = function(a) {
				e.props.mentionsSource && e.props.mentionsSource.bootstrap(), e.props.onFocus && e.props.onFocus(a)
			};
			e.$14 = function(a, b) {
				if (e.state.highlightedMentionable) {
					e.$10(e.state.highlightedMentionable, a);
					return h
				} else if (e.props.handleContentReturn && e.props.handleContentReturn(a, b)) return h;
				return i
			};
			e.$6 = function(a) {
				var b = e.state.highlightedMentionable;
				b ? (a.preventDefault(), e.$10(b, a)) : e.props.onTab && e.props.onTab(a)
			};
			e.$5 = function(a) {
				e.props.onEscape && e.props.onEscape(a), e.state.mentionableEntries && (a.stopPropagation(), a.nativeEvent.composerPropagationStopped = !0, e.setState(e.$12()))
			};
			e.$11 = function(a) {
				var c = e.state.mentionableEntries;
				c ? (a.preventDefault(), b("TypeaheadNavigation").moveUp(c, e.state.highlightedMentionable, e.$9)) : e.props.onUpArrow && e.props.onUpArrow(a)
			};
			e.$4 = function(a) {
				var c = e.state.mentionableEntries;
				c ? (a.preventDefault(), b("TypeaheadNavigation").moveDown(c, e.state.highlightedMentionable, e.$9)) : e.props.onDownArrow && e.props.onDownArrow(a)
			};
			e.$9 = function(a) {
				e.setState({
					highlightedMentionable: a
				})
			};
			e.$15 = function(a) {
				a = b("getOrCreateDOMID")(a);
				e.setState({
					ariaActiveDescendantID: a
				})
			};
			e.$10 = function(a, c) {
				var d, f = a.getDataType(),
					g = e.props.mentionCreationForContentStateFn;
				f === "ASSISTANT_TYPEAHEAD" && e.props.mentionTypeaheadCreationForContentStateFn && (g = e.props.mentionTypeaheadCreationForContentStateFn);
				f = e.props.onMentionSelect;
				f == null ? d = b("replaceMentionedTextInEditorState")(a, e.props.editorState, e.state.characterOffset, g, e.props.overrideMentionGetEntryText) : d = f(a, e.props.editorState, e.state.characterOffset, g);
				e.props.onChange(d);
				e.setState(e.$12());
				f = e.props.onAddMention;
				g = e.state.mentionableEntries;
				if (f && g) {
					d = g.indexOf(a);
					f(a, d, c)
				}
			};
			e.$17 = null;
			e.$18 = function(a) {
				if (b("cr:1600421") == null) return;
				if (a != null && !b("cr:1600421").isRegistered(a)) {
					e.$17 && b("cr:1600421").unregister(e.$17);
					e.$17 = a;
					b("cr:1600421").registerForMeasurement(a, (a = e.props.typingPerformanceID) != null ? a : "AbstractMentionsTextEditor")
				}
			};
			e.__onShowMentions = e.__onShowMentions.bind(babelHelpers.assertThisInitialized(e));
			e.$4 = e.$4.bind(babelHelpers.assertThisInitialized(e));
			e.$5 = e.$5.bind(babelHelpers.assertThisInitialized(e));
			e.$6 = e.$6.bind(babelHelpers.assertThisInitialized(e));
			e.$7 = e.$7.bind(babelHelpers.assertThisInitialized(e));
			e.$8 = e.$8.bind(babelHelpers.assertThisInitialized(e));
			e.$9 = e.$9.bind(babelHelpers.assertThisInitialized(e));
			e.$10 = e.$10.bind(babelHelpers.assertThisInitialized(e));
			e.$11 = e.$11.bind(babelHelpers.assertThisInitialized(e));
			e.state = e.$12();
			return e
		}
		var d = c.prototype;
		d.componentDidMount = function() {
			this.$2 = !0
		};
		d.componentWillUnmount = function() {
			this.$2 = !1, this.$3.forEach(function(a) {
				return b("clearImmediate")(a)
			}), this.$3 = []
		};
		d.$12 = function() {
			return {
				highlightedMentionable: null,
				mentionableEntries: null,
				characterOffset: 0
			}
		};
		d.shouldComponentUpdate = function(a, b) {
			return this.props.editorState !== a.editorState || this.props.placeholder !== a.placeholder || this.props.readOnly !== a.readOnly || this.props.className !== a.className || this.state.mentionableEntries !== b.mentionableEntries || this.state.highlightedMentionable !== b.highlightedMentionable || this.state.ariaActiveDescendantID !== b.ariaActiveDescendantID
		};
		d.componentDidUpdate = function(a) {
			var c = this,
				d = this.props.editorState;
			if (d === a.editorState) return;
			var e = d.getSelection();
			if (e.getHasFocus() && e.isCollapsed()) {
				var f = d.getCurrentContent(),
					g = this.props.mentionsSource;
				g && this.$3.push(b("setImmediate")(function() {
					f.getBlockForKey(e.getAnchorKey()) != null && g.search(f, e, c.__onShowMentions)
				}));
				var h = this.props.assistantTypeaheadSource;
				h && this.$3.push(b("setImmediate")(function() {
					h.search(f, e, c.__onShowMentions)
				}))
			}
		};
		d.blur = function() {
			var a;
			(a = this.abstractTextEditorRef.current) == null ? void 0 : a.blur()
		};
		d.focus = function() {
			var a;
			(a = this.abstractTextEditorRef.current) == null ? void 0 : a.focus()
		};
		d.$16 = function() {
			var a = this.state.mentionableEntries;
			if (!a || !a.length) return null;
			var b = this.props.mentionResultsComponent;
			return g.jsx(b, babelHelpers["extends"]({}, this.props.mentionResultsProps, {
				viewID: this.$1,
				selection: this.props.editorState.getSelection(),
				contextComponent: this,
				characterOffset: this.state.characterOffset,
				mentionableEntries: a || [],
				highlightedMentionable: this.state.highlightedMentionable,
				onMentionSelect: this.$10,
				onMentionHighlight: this.$9,
				onMentionRenderHighlight: this.$15
			}))
		};
		d.exitCurrentMode = function() {
			var a;
			(a = this.abstractTextEditorRef.current) == null ? void 0 : a.exitCurrentMode()
		};
		d.render = function() {
			var a = this.state.mentionableEntries;
			a = !!(a && a.length);
			var c = this.props.readOnly ? null : "-1",
				d = this.props.role || "combobox",
				e = this.props.ariaAutoComplete || "list",
				f = this.props.ariaLabel,
				h = this.props;
			h.onTab;
			h.onUpArrow;
			h.onDownArrow;
			h.onEscape;
			h = babelHelpers.objectWithoutPropertiesLoose(h, ["onTab", "onUpArrow", "onDownArrow", "onEscape"]);
			return g.jsxs("div", {
				ref: this.containerRef,
				className: this.props.className,
				tabIndex: c,
				children: [g.jsx(b("DraftEditor.react"), babelHelpers["extends"]({}, h, {
					ref: this.abstractTextEditorRef,
					editorRef: this.$18,
					role: d,
					ariaActiveDescendantID: this.state.ariaActiveDescendantID,
					ariaAutoComplete: e,
					ariaControls: this.$1,
					ariaExpanded: a,
					ariaHasPopup: a,
					ariaLabel: f,
					editorState: this.props.editorState,
					onBlur: this.$8,
					onChange: this.props.onChange,
					onFocus: this.$7,
					handleReturn: this.$14,
					keyBindingFn: this.$13
				})), this.$16()]
			})
		};
		d.isShowingMentionables = function() {
			return !!this.state.mentionableEntries
		};
		return c
	}(g.Component);
	c.defaultProps = babelHelpers["extends"]({}, b("DraftEditor.react").defaultProps, {
		autoHighlight: !0,
		autoUpdateHighlight: !0,
		maxResults: a,
		reverseOrder: !1
	});
	c.propTypes = {
		mentionsSource: (d = b("prop-types")).object,
		assistantTypeaheadSource: d.object,
		mentionCreationForContentStateFn: d.func.isRequired,
		mentionTypeaheadCreationForContentStateFn: d.func,
		mentionResultsComponent: d.func.isRequired,
		mentionResultsProps: d.object,
		excludedEntries: d.object,
		handleContentReturn: d.func,
		onAddMention: d.func,
		onShowMentions: d.func,
		autoHighlight: d.bool,
		maxResults: d.number,
		webDriverTestID: d.string
	};
	e.exports = c
}), null);