__d("useCometSearchInternalTypeaheadOnEnterLoggingHandler", ["React", "useCometSearchInternalTypeaheadState"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.loggingProvider,
			d = a.onEnter,
			e = a.queryString;
		a = b("useCometSearchInternalTypeaheadState")();
		var f = a.activeEntries,
			h = a.highlightedEntry;
		return g.useCallback(function () {
			h != null && (c && c.addEvent({
				action: "click",
				entries: f,
				entry: h,
				queryString: e
			})), h == null && (c && c.addEvent({
				action: "enter",
				entries: f,
				queryString: e
			})), c && c.endSession(), d && d()
		}, [f, h, c, d, e])
	}
}), null);