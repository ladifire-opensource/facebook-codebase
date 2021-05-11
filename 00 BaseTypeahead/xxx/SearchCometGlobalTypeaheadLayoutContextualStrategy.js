__d("SearchCometGlobalTypeaheadLayoutContextualStrategy.react", [
	"CometSearchTypeaheadBaseProgressGlimmer.react", 
	"CometSearchTypeaheadInternalLayoutInlineStrategy.react", "React", 
	"useCometSearchInternalTypeaheadFetch", "useCometSearchInternalTypeaheadState",
	 "useCometSearchTypeaheadBaseInputRefs", 
	 "useCometSearchTypeaheadInternalLayoutContextualStrategyHandlers", 
	 "useSearchCometGlobalTypeaheadStyles", "useSearchCometTypeaheadBaseLayoutStrategyARIAProps"], (function (a, b, c, d, e, f) {
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
			u = a.onUpArrow,
			v = a.xstyles;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["extraLayoutProps", "helperText", "label", "onAbandonTypeahead_DO_NOT_USE", "onBlur", "onChange", "onClick", "onDownArrow", "onEnter", "onEscape", "onHighlightEntry", "onOutsideClick", "onPressEntry", "onShiftTab", "onTab", "onUpArrow", "xstyles"]);
		var w = b("useCometSearchInternalTypeaheadState")(),
			x = w.activeEntries,
			y = w.highlightedEntry;
		w = w.isOpened;
		var z = b("useCometSearchInternalTypeaheadFetch")();
		z = z.isLoading;
		c = b("useCometSearchTypeaheadBaseInputRefs")(c);
		var A = c.composedRef;
		c = c.inputRef;
		v = (v = v) != null ? v : b("useSearchCometGlobalTypeaheadStyles")();
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
		return g.jsx(b("CometSearchTypeaheadInternalLayoutInlineStrategy.react"), babelHelpers["extends"]({}, a, c, {
			extraLayoutProps: {
				afterViewContent: e,
				ariaProps: i,
				beforeViewContent: d,
				helperTextComponent: null,
				isOpened: w,
				loadingIndicator: z && x.length === 0 ? g.jsx(b("CometSearchTypeaheadBaseProgressGlimmer.react"), {}) : null
			},
			ref: A,
			xstyles: v
		}))
	}
	c = g.forwardRef(a);
	e.exports = c
}), null);