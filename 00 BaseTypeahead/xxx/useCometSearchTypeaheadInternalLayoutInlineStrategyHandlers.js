__d("useCometSearchTypeaheadInternalLayoutInlineStrategyHandlers", ["React", 
	"useCometSearchTypeaheadBaseLayoutStrategyOnBlurHandler", 
	"useCometSearchTypeaheadBaseLayoutStrategyOnChangeHandler", 
	"useCometSearchTypeaheadBaseLayoutStrategyOnDownArrowHandler",
	 "useCometSearchTypeaheadBaseLayoutStrategyOnEnterHandler",
	  "useCometSearchTypeaheadBaseLayoutStrategyOnHighlightEntryHandler", 
	  "useCometSearchTypeaheadBaseLayoutStrategyOnOutsideClickHandler", 
	  "useCometSearchTypeaheadBaseLayoutStrategyOnPressEntryHandler", 
	  "useCometSearchTypeaheadBaseLayoutStrategyOnUpArrowHandler"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.inputRef,
			d = a.onBlur,
			e = a.onChange,
			f = a.onDownArrow,
			h = a.onEnter,
			i = a.onEscape,
			j = a.onHighlightEntry,
			k = a.onOutsideClick,
			l = a.onPressEntry;
		a = a.onUpArrow;
		j = b("useCometSearchTypeaheadBaseLayoutStrategyOnHighlightEntryHandler")({
			onHighlightEntry: j
		});
		d = b("useCometSearchTypeaheadBaseLayoutStrategyOnBlurHandler")({
			onBlur: d
		});
		var m = b("useCometSearchTypeaheadBaseLayoutStrategyOnChangeHandler")({
			onChange: e,
			onHighlightEntry: j
		});
		e = b("useCometSearchTypeaheadBaseLayoutStrategyOnEnterHandler")({
			inputRef: c,
			onEnter: h
		});
		h = g.useCallback(function () {
			m(""), i && i()
		}, [m, i]);
		f = b("useCometSearchTypeaheadBaseLayoutStrategyOnDownArrowHandler")({
			onDownArrow: f,
			onHighlightEntry: j
		});
		a = b("useCometSearchTypeaheadBaseLayoutStrategyOnUpArrowHandler")({
			onHighlightEntry: j,
			onUpArrow: a
		});
		l = b("useCometSearchTypeaheadBaseLayoutStrategyOnPressEntryHandler")({
			onPressEntry: l
		});
		c = b("useCometSearchTypeaheadBaseLayoutStrategyOnOutsideClickHandler")({
			inputRef: c,
			onOutsideClick: k
		});
		return {
			onBlur: d,
			onChange: m,
			onDownArrow: f,
			onEnter: e,
			onEscape: h,
			onHighlightEntry: j,
			onOutsideClick: c,
			onPressEntry: l,
			onUpArrow: a
		}
	}
}), null);