__d("useCometSearchInternalTypeaheadOnAbandonLoggingHandler", ["React", 
	"useCometSearchInternalTypeaheadState"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.callback,
			d = a.loggingProvider,
			e = a.queryString;
		a = b("useCometSearchInternalTypeaheadState")();
		var f = a.activeEntries;
		return g.useCallback(function () {
			d != null && d.isSessionActive() && (d.addEvent({
				action: "abandon",
				entries: f,
				queryString: e
			}), d.endSession()), c && c()
		}, [f, d, c, e])
	}
}), null);