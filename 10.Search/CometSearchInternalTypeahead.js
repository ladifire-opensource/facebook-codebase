__d("CometSearchInternalTypeahead.react", ["React", "emptyFunction", 
	"searchCometTypeaheadMouseUtils", "useCometSearchInternalTypeaheadFetchHandler", 
	"useCometSearchInternalTypeaheadOnAbandonLoggingHandler", 
	"useCometSearchInternalTypeaheadOnEnterLoggingHandler",
	 "useCometSearchInternalTypeaheadOnFocusLoggingHandler", 
	 "useCometSearchInternalTypeaheadOnPressEntryLoggingHandler", 
	 "useCometSearchInternalTypeaheadState", "useCometSearchTypeaheadBaseInputRefs"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React");

	function a(a, c) {
		var d = a.layoutStrategyRenderer,
			e = a.loggingProvider,
			f = a.onEnter,
			h = a.onFocus,
			i = a.onPressEntry,
			j = a.onSelectFreeformQuery,
			k = a.onShiftTab,
			l = a.onTab,
			m = a.queryString,
			n = a.shouldQueryStringFollowHighlightedEntry;
		n = n === void 0 ? !0 : n;
		var o = a.traceProvider;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["layoutStrategyRenderer", "loggingProvider", "onEnter", "onFocus", "onPressEntry", "onSelectFreeformQuery", "onShiftTab", "onTab", "queryString", "shouldQueryStringFollowHighlightedEntry", "traceProvider"]);
		c = b("useCometSearchTypeaheadBaseInputRefs")(c);
		var p = c.composedRef,
			q = c.inputRef;
		c = b("useCometSearchInternalTypeaheadState")();
		var r = c.highlightedEntry;
		b("useCometSearchInternalTypeaheadFetchHandler")({
			loggingProvider: e,
			queryString: m,
			traceProvider: o
		});
		c = b("useCometSearchInternalTypeaheadOnEnterLoggingHandler")({
			loggingProvider: e,
			onEnter: g.useCallback(function () {
				r != null ? i && i(r) : j && j(m), f && f()
			}, [r, f, i, j, m]),
			queryString: m
		});
		h = b("useCometSearchInternalTypeaheadOnFocusLoggingHandler")({
			loggingProvider: e,
			onFocus: h,
			queryString: m
		});
		var s = b("useCometSearchInternalTypeaheadOnPressEntryLoggingHandler")({
			loggingProvider: e,
			onPressEntry: g.useCallback(function (a, c) {
				if (b("searchCometTypeaheadMouseUtils").hasModifierKeyPressed(c)) {
					q.current && q.current.focus();
					return
				}
				i && i(a)
			}, [q, i]),
			queryString: m
		});
		k = b("useCometSearchInternalTypeaheadOnAbandonLoggingHandler")({
			callback: k,
			loggingProvider: e,
			queryString: m
		});
		l = b("useCometSearchInternalTypeaheadOnAbandonLoggingHandler")({
			callback: l,
			loggingProvider: e,
			queryString: m
		});
		var t = b("useCometSearchInternalTypeaheadOnAbandonLoggingHandler")({
			callback: b("emptyFunction"),
			loggingProvider: e,
			queryString: m
		});
		e = b("useCometSearchInternalTypeaheadOnAbandonLoggingHandler")({
			callback: b("emptyFunction"),
			loggingProvider: e,
			queryString: m
		});
		return g.jsx(d, babelHelpers["extends"]({}, a, {
			onAbandonTypeahead_DO_NOT_USE: e,
			onClick: b("emptyFunction"),
			onEnter: c,
			onFocus: h,
			onHighlightEntry: a.onHighlightEntry,
			onOutsideClick: t,
			onPressEntry: s,
			onShiftTab: k,
			onTab: l,
			queryString: m,
			ref: p,
			shouldQueryStringFollowHighlightedEntry: n,
			traceProvider: o,
			xstyles: a.xstyles
		}))
	}
	c = g.forwardRef(a);
	e.exports = c
}), null);