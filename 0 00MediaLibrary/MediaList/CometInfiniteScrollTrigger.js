__d("CometInfiniteScrollTrigger.react", ["JSTracing", "React", "mergeRefs", "stylex", "useAfterPaint", "useVisibilityObserver"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = b("React");

	function a(a) {
		var c = a.children,
			d = a.hasMore,
			e = a.isLoading,
			f = a.onLoadMore,
			i = a.rootMargin;
		a = a.xstyle;
		var j = h.useRef(!1),
			k = h.useTransition(),
			l = k[0],
			m = h.useRef(null),
			n = h.useCallback(function() {
				l(function() {
					b("JSTracing").clear(function() {
						f(m)
					})
				})
			}, [f, l, m]);
		k = h.useCallback(function() {
			d && !e && j.current && n()
		}, [n, e, d]);
		b("useAfterPaint")(k);
		k = h.useCallback(function() {
			var a = j.current;
			j.current = !0;
			!a && d && !e && n()
		}, [d, e, n]);
		var o = h.useCallback(function() {
				j.current = !1
			}, []),
			p = b("useVisibilityObserver")({
				onHidden: o,
				onVisible: k,
				options: {
					rootMargin: (o = i) != null ? o : 0
				}
			});
		k = h.useMemo(function() {
			return b("mergeRefs")(p, m)
		}, [p, m]);
		return d || e ? h.jsx("div", {
			className: (g || (g = b("stylex")))(a),
			ref: k,
			children: c
		}) : null
	}
}), null);