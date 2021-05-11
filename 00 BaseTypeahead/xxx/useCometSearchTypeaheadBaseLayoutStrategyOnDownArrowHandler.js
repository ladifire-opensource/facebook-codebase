__d("useCometSearchTypeaheadBaseLayoutStrategyOnDownArrowHandler", ["React", 
	"useCometSearchInternalTypeaheadKeyboardNavigation"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.onDownArrow,
			d = a.onHighlightEntry;
		a = b("useCometSearchInternalTypeaheadKeyboardNavigation")();
		var e = a.onKeyboardDownArrow;
		return g.useCallback(function () {
			e(d), c && c()
		}, [c, d, e])
	}
}), null);