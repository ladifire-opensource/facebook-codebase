__d("useCometSearchTypeaheadBaseDataSourceFetchResolverNetwork", ["React", "promiseDone"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.dataSource;
		a = g.useState(!1);
		var d = a[0],
			e = a[1],
			f = g.useRef(0),
			h = g.useRef(!1);
		g.useEffect(function () {
			return function () {
				h.current = !0
			}
		}, []);
		a = g.useCallback(function (a) {
			var d = a.onResolvePayload;
			a = a.requestParams;
			f.current++;
			var g = f.current,
				i = a.perfTraceAPI;
			e(!0);
			b("promiseDone")(c.fetchNetwork(a).then(function (a) {
				!h.current && g === f.current && (d(a), i && i.addMarkerPoint("networkResponse", "AppTiming"))
			})["finally"](function () {
				!h.current && g === f.current && (f.current = 0, e(!1))
			}))
		}, [c]);
		return [{
			isLoading: d
		}, a]
	}
}), null);