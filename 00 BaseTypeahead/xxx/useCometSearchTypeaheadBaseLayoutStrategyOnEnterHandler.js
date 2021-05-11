__d("useCometSearchTypeaheadBaseLayoutStrategyOnEnterHandler", ["React", 
	"useCometSearchInternalTypeaheadState"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.inputRef,
			d = a.onEnter;
		a = b("useCometSearchInternalTypeaheadState")();
		var e = a.highlightedEntry,
			f = a.highlightedEntrySource,
			h = c.current;
		return g.useCallback(function () {
			var a;
			a = (a = h == null ? void 0 : h.value) != null ? a : "";
			var b = e != null && f === "keyboard";
			if (a.trim().length === 0 && !b) return;
			d && d()
		}, [h, e, f, d])
	}
}), null);