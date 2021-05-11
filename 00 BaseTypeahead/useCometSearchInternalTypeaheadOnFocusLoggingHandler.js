__d("useCometSearchInternalTypeaheadOnFocusLoggingHandler", ["React", "useCometSearchInternalTypeaheadState"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.loggingProvider,
			d = a.onFocus,
			e = a.queryString;
		a = b("useCometSearchInternalTypeaheadState")();
		var f = a.activeEntries;
		return g.useCallback(function () {
			c != null && (c.startSession(), c.addEvent({
				action: "typeahead_appeared",
				entries: f,
				queryString: e
			})), d && d()
		}, [f, c, d, e])
	}
}), null);