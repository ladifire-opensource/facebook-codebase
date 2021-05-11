__d("useCometSearchTypeaheadBaseLayoutStrategyOnBlurHandler", ["React", 
	"useCometSearchInternalTypeaheadStateDispatcher"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.onBlur;
		a = b("useCometSearchInternalTypeaheadStateDispatcher")();
		var d = a.dispatchHighlightedEntry;
		return g.useCallback(function () {
			d({
				entry: null,
				source: null
			}), c && c()
		}, [d, c])
	}
}), null);