__d("CometSearchTypeaheadInternalLayoutInlineStrategyWithScrollableView.react", ["CometScrollableArea.react", "CometSearchTypeaheadBaseViewStrategyEventListener.react", "React", "cometWithHighlightDropOnMouseLeave", "stylex", "useCometSearchInternalTypeaheadState", "useCometSearchTypeaheadBaseLayoutStrategyStyles", "useCometTypeaheadBaseKeyboardForScrollableArea"], (function (a, b, c, d, e, f) {
	"use strict";
	var g, h = b("React"),
		i = {
			helperText: {
				marginTop: "aov4n071"
			}
		};

	function a(a, c) {
		var d = a.extraLayoutProps,
			e = d.afterViewContent,
			f = d.ariaProps,
			j = f.ariaDescribedByProps,
			k = f.ariaInputProps,
			l = f.ariaViewProps;
		f = d.beforeViewContent;
		var m = d.helperTextComponent,
			n = d.loadingIndicator;
		d = a.inputStrategyRenderer;
		var o = a.label,
			p = a.onChange,
			q = a.queryString,
			r = a.viewStrategyRenderer,
			s = a.xstyles,
			t = babelHelpers.objectWithoutPropertiesLoose(a, ["extraLayoutProps", "inputStrategyRenderer", "label", "onChange", "queryString", "viewStrategyRenderer", "xstyles"]);
		a = b("useCometSearchInternalTypeaheadState")();
		var u = a.activeEntries,
			v = a.highlightedEntry;
		a = a.highlightedEntrySource;
		s = b("useCometSearchTypeaheadBaseLayoutStrategyStyles")({
			xstyles: s
		});
		var w = s.inputXStyle,
			x = s.layoutXStyle,
			y = s.viewXStyle,
			z = b("useCometTypeaheadBaseKeyboardForScrollableArea")(v);
		s = h.useCallback(function (a) {
			var b = z.current != null ? z.current.getDOMNode() : null;
			b != null && (b.scrollLeft = 0, b.scrollTop = 0);
			p && p(a)
		}, [p, z]);
		var A = h.useMemo(function () {
			return b("cometWithHighlightDropOnMouseLeave")(r)
		}, [r]);
		return h.jsxs("div", {
			className: (g || (g = b("stylex")))(x),
			children: [h.jsx("div", {
				className: g(w),
				children: h.jsx(d, babelHelpers["extends"]({}, k, {
					autoFocus: t.autoFocus,
					inputEndContent: t.inputEndContent,
					inputExtraProps: t.inputExtraProps,
					inputStartContent: t.inputStartContent,
					isDisabled: t.isDisabled,
					label: o,
					onBlur: t.onBlur,
					onChange: s,
					onClick: t.onClick,
					onFocus: t.onFocus,
					placeholder: t.placeholder,
					queryString: Boolean(t.shouldQueryStringFollowHighlightedEntry) && a === "keyboard" && v != null ? v.getLabel() : q,
					ref: c,
					testid: void 0
				}))
			}), m != null && h.jsx("div", babelHelpers["extends"]({
				className: (g || (g = b("stylex")))(i.helperText)
			}, j, {
				children: m
			})), f, h.jsx(b("CometSearchTypeaheadBaseViewStrategyEventListener.react"), {
				onOutsideClick: t.onOutsideClick,
				children: function (a) {
					return h.jsx("div", {
						ref: a,
						children: h.jsxs(b("CometScrollableArea.react"), babelHelpers["extends"]({}, l, {
							horizontal: !1,
							ref: z,
							xstyle: y,
							children: [h.jsx(A, {
								entries: u,
								extraViewProps: t.extraViewProps,
								highlightedEntry: v,
								onAbandonTypeahead_DO_NOT_USE: t.onAbandonTypeahead_DO_NOT_USE,
								onHighlightEntry: t.onHighlightEntry,
								onPressEntry: t.onPressEntry,
								queryString: q
							}), n]
						}))
					})
				}
			}), e]
		})
	}
	c = h.forwardRef(a);
	e.exports = c
}), null);