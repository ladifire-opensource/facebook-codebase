__d("useCometSearchTypeaheadBaseDataSourceFetchResolverCache", ["React"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var b = a.dataSource;
		return g.useCallback(function (a) {
			var c = a.onResolvePayload;
			a = a.requestParams;
			var d = a.perfTraceAPI;
			a = b.fetchCache(a);
			d && d.addMarkerPoint("cachedResponse", "AppTiming");
			c(a);
			return a
		}, [b])
	}
}), null);