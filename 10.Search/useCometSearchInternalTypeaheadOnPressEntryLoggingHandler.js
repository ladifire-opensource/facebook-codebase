__d("useCometSearchInternalTypeaheadOnPressEntryLoggingHandler", ["React",
 "useCometSearchInternalTypeaheadState"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.loggingProvider,
			d = a.onPressEntry,
			e = a.queryString;
		a = b("useCometSearchInternalTypeaheadState")();
		var f = a.activeEntries;
		return g.useCallback(function (a, b) {
			c != null && (c.addEvent({
				action: "click",
				entries: f,
				entry: a,
				queryString: e
			}), c.endSession()), d && d(a, b)
		}, [f, c, d, e])
	}
}), null);