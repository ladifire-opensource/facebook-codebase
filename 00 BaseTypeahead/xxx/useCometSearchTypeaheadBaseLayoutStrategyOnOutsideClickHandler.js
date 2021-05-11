__d("useCometSearchTypeaheadBaseLayoutStrategyOnOutsideClickHandler", ["React"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var b = a.inputRef,
			c = a.onOutsideClick;
		return g.useCallback(function () {
			if (b.current === document.activeElement) return;
			c && c()
		}, [b, c])
	}
}), null);