__d("CometFormTypeaheadLayoutContextualStrategy.react", ["CometFormInputWrapperHelperText.react", "CometSearchTypeaheadBaseProgressGlimmer.react", "CometSearchTypeaheadInternalLayoutContextualStrategy.react", "React", "stylex", "useCometSearchInternalTypeaheadFetch", "useCometSearchInternalTypeaheadState", "useCometSearchTypeaheadBaseInputRefs", "useCometSearchTypeaheadInternalLayoutContextualStrategyHandlers", "useSearchCometTypeaheadBaseLayoutStrategyARIAProps"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		h = {
			view: {
				borderTop: "l6v480f0",
				borderEnd: "maa8sdkg",
				borderBottom: "s1tcr66n",
				borderStart: "aypy0576",
				borderTopStartRadius: "ue3kfks5",
				borderTopEndRadius: "pw54ja7n",
				borderBottomEndRadius: "uo3d90p7",
				borderBottomStartRadius: "l82x9zwi",
				marginTop: "qjjbsfad"
			}
		};

	function a(a, c) {
		var d = a.extraLayoutProps;
		d = d === void 0 ? {} : d;
		var e = d.afterViewContent;
		d = d.beforeViewContent;
		var f = a.helperText;
		a.isDisabled;
		var i = a.label,
			j = a.onAbandonTypeahead_DO_NOT_USE,
			k = a.onBlur,
			l = a.onChange,
			m = a.onClick,
			n = a.onDownArrow,
			o = a.onEnter,
			p = a.onEscape,
			q = a.onHighlightEntry,
			r = a.onOutsideClick,
			s = a.onPressEntry,
			t = a.onShiftTab,
			u = a.onTab,
			v = a.onUpArrow,
			w = a.queryString,
			x = a.xstyles;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["extraLayoutProps", "helperText", "isDisabled", "label", "onAbandonTypeahead_DO_NOT_USE", "onBlur", "onChange", "onClick", "onDownArrow", "onEnter", "onEscape", "onHighlightEntry", "onOutsideClick", "onPressEntry", "onShiftTab", "onTab", "onUpArrow", "queryString", "xstyles"]);
		var y = x == null ? void 0 : x.viewXStyle;
		x = babelHelpers["extends"]({}, x, {
			viewXStyle: [y, h.view]
		});
		y = b("useCometSearchTypeaheadBaseInputRefs")(c);
		c = y.composedRef;
		y = y.inputRef;
		var z = b("useCometSearchInternalTypeaheadState")(),
			A = z.activeEntries,
			B = z.highlightedEntry;
		z = z.isOpened;
		var C = b("useCometSearchInternalTypeaheadFetch")();
		C = C.isLoading;
		y = b("useCometSearchTypeaheadInternalLayoutContextualStrategyHandlers")({
			inputRef: y,
			onAbandonTypeahead_DO_NOT_USE: j,
			onBlur: k,
			onChange: l,
			onClick: m,
			onDownArrow: n,
			onEnter: o,
			onEscape: p,
			onHighlightEntry: q,
			onOutsideClick: r,
			onPressEntry: s,
			onShiftTab: t,
			onTab: u,
			onUpArrow: v
		});
		j = b("useSearchCometTypeaheadBaseLayoutStrategyARIAProps")({
			activeEntries: A,
			helperText: f,
			highlightedEntry: B,
			inputLabel: i,
			isOpened: z
		});
		return g.jsx(b("CometSearchTypeaheadInternalLayoutContextualStrategy.react"), babelHelpers["extends"]({}, a, y, {
			extraLayoutProps: {
				afterViewContent: e,
				ariaProps: j,
				beforeViewContent: d,
				helperTextComponent: f != null ? g.jsx(b("CometFormInputWrapperHelperText.react"), {
					validationState: a == null ? void 0 : (k = a.inputExtraProps) == null ? void 0 : k.validationState,
					value: f
				}) : null,
				isOpened: z,
				loadingIndicator: C && A.length === 0 ? g.jsx(b("CometSearchTypeaheadBaseProgressGlimmer.react"), {}) : null
			},
			label: i,
			queryString: w,
			ref: c,
			xstyles: x
		}))
	}
	c = g.forwardRef(a);
	e.exports = c
}), null);