__d("useCometSearchInternalTypeaheadFetchHandler", ["React", 
	"useCometSearchInternalTypeaheadFetch", 
	"useCometSearchInternalTypeaheadState"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.loggingProvider,
			d = a.queryString,
			e = a.traceProvider;
		a = b("useCometSearchInternalTypeaheadState")();
		var f = a.activeEntries,
			h = a.isOpened;
		a = b("useCometSearchInternalTypeaheadFetch")();
		var i = a.fetch;
		a = g.useCallback(function () {
			function a(a, b) {
				var d = null;
				c != null && (d = c.addEvent({
					action: "keystroke",
					entries: f,
					queryString: a
				}));
				d = d != null ? {
					loggingEventTrace: d,
					perfTraceAPI: b,
					query: a
				} : {
					perfTraceAPI: b,
					query: a
				};
				i(d)
			}
			var b = d.trimLeft();
			if (!h) return;
			e ? e.trace(function (c) {
				return a(b, c)
			}, b) : a(b)
		}, [f, i, h, c, d, e]);
		g.useEffect(a, [h, d])
	}
}), null);