__d("useCometSearchTypeaheadBaseLayoutStrategyOnChangeHandler", ["React", 
	"useCometSearchInternalTypeaheadState"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.onChange,
			d = a.onHighlightEntry;
		a = b("useCometSearchInternalTypeaheadState")();
		var e = a.highlightedEntry;
		return g.useCallback(function (a, b) {
			e != null && d(null, "keyboard"), c && c(a, b)
		}, [e, c, d])
	}
}), null);