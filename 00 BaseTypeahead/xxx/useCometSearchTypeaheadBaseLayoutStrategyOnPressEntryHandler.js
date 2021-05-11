__d("useCometSearchTypeaheadBaseLayoutStrategyOnPressEntryHandler", ["React"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var b = a.onPressEntry;
		return g.useCallback(function (a, c) {
			b(a, c)
		}, [b])
	}
}), null);