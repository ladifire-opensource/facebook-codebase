__d("useCometSearchTypeaheadBaseLayoutStrategyOnHighlightEntryHandler", ["React", 
	"useCometSearchInternalTypeaheadStateDispatcher"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.onHighlightEntry;
		a = b("useCometSearchInternalTypeaheadStateDispatcher")();
		var d = a.dispatchHighlightedEntry;
		return g.useCallback(function (a, b) {
			d({
				entry: a,
				source: b
			}), c && c(a, b)
		}, [d, c])
	}
}), null);