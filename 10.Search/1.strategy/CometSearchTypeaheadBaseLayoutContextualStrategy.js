__d("CometSearchTypeaheadBaseLayoutContextualStrategy.react", [
	"CometSearchTypeaheadBaseHelperText.react", "CometSearchTypeaheadBaseProgressGlimmer.react",
	 "CometSearchTypeaheadInternalLayoutContextualStrategy.react", "React",
	  "useCometSearchInternalTypeaheadFetch", "useCometSearchInternalTypeaheadState",
	   "useCometSearchTypeaheadBaseInputRefs", 
	   "useCometSearchTypeaheadInternalLayoutContextualStrategyHandlers",
	    "useSearchCometTypeaheadBaseLayoutStrategyARIAProps"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React");

	function a(a, c) {
		var d = a.extraLayoutProps;
		d = d === void 0 ? {} : d;
		var e = d.afterViewContent;
		d = d.beforeViewContent;
		var f = a.helperText,
			h = a.label,
			i = a.onAbandonTypeahead_DO_NOT_USE,
			j = a.onBlur,
			k = a.onChange,
			l = a.onClick,
			m = a.onDownArrow,
			n = a.onEnter,
			o = a.onEscape,
			p = a.onHighlightEntry,
			q = a.onOutsideClick,
			r = a.onPressEntry,
			s = a.onShiftTab,
			t = a.onTab,
			u = a.onUpArrow;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["extraLayoutProps", "helperText", "label", "onAbandonTypeahead_DO_NOT_USE", "onBlur", "onChange", "onClick", "onDownArrow", "onEnter", "onEscape", "onHighlightEntry", "onOutsideClick", "onPressEntry", "onShiftTab", "onTab", "onUpArrow"]);
		var v = b("useCometSearchInternalTypeaheadFetch")();
		v = v.isLoading;
		var w = b("useCometSearchInternalTypeaheadState")(),
			x = w.activeEntries,
			y = w.highlightedEntry;
		w = w.isOpened;
		c = b("useCometSearchTypeaheadBaseInputRefs")(c);
		var z = c.composedRef;
		c = c.inputRef;
		c = b("useCometSearchTypeaheadInternalLayoutContextualStrategyHandlers")({
			inputRef: c,
			onAbandonTypeahead_DO_NOT_USE: i,
			onBlur: j,
			onChange: k,
			onClick: l,
			onDownArrow: m,
			onEnter: n,
			onEscape: o,
			onHighlightEntry: p,
			onOutsideClick: q,
			onPressEntry: r,
			onShiftTab: s,
			onTab: t,
			onUpArrow: u
		});
		i = b("useSearchCometTypeaheadBaseLayoutStrategyARIAProps")({
			activeEntries: x,
			helperText: f,
			highlightedEntry: y,
			inputLabel: h,
			isOpened: w
		});
		return g.jsx(b("CometSearchTypeaheadInternalLayoutContextualStrategy.react"), babelHelpers["extends"]({}, a, c, {
			extraLayoutProps: {
				afterViewContent: e,
				ariaProps: i,
				beforeViewContent: d,
				helperTextComponent: f != null ? g.jsx(b("CometSearchTypeaheadBaseHelperText.react"), {
					text: f
				}) : null,
				isOpened: w,
				loadingIndicator: v && x.length === 0 ? g.jsx(b("CometSearchTypeaheadBaseProgressGlimmer.react"), {}) : null
			},
			helperText: f,
			label: h,
			ref: z
		}))
	}
	c = g.forwardRef(a);
	e.exports = c
}), null);