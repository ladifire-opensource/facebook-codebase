__d("useCometSearchTypeaheadBaseLayoutStrategyOnUpArrowHandler", ["React",
 "useCometSearchInternalTypeaheadKeyboardNavigation"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.onHighlightEntry,
			d = a.onUpArrow;
		a = b("useCometSearchInternalTypeaheadKeyboardNavigation")();
		var e = a.onKeyboardUpArrow;
		return g.useCallback(function () {
			e(c), d && d()
		}, [c, e, d])
	}
}), null);