__d("useFadeEffect", ["React", "clearTimeout", "setTimeout", "useLayoutEffect_SAFE_FOR_SSR"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React"),
		h = 1e3;

	function i(a, b) {
		switch (b.type) {
			case "start":
				return {
					isTransitioning: !0,
					shouldBeVisible: b.shouldBeVisible
				};
			case "finish":
				return {
					isTransitioning: !1,
					shouldBeVisible: a.shouldBeVisible
				};
			default:
				return a
		}
	}

	function a(a) {
		var c = g.useRef(null),
			d = g.useReducer(i, {
				isTransitioning: !1,
				shouldBeVisible: !1
			}),
			e = d[0],
			f = e.isTransitioning;
		e = e.shouldBeVisible;
		var j = d[1],
			k = g.useRef(null),
			l = g.useRef(null);
		g.useEffect(function () {
			return function () {
				k.current != null && b("clearTimeout")(k.current), l.current != null && window.cancelAnimationFrame(l.current)
			}
		}, []);
		var m = g.useCallback(function () {
				j({
					type: "finish"
				}), k.current != null && b("clearTimeout")(k.current), k.current = null
			}, []),
			n = g.useCallback(function (a) {
				l.current != null && window.cancelAnimationFrame(l.current), l.current = window.requestAnimationFrame(function () {
					j({
						shouldBeVisible: a,
						type: "start"
					}), l.current = null, k.current != null && b("clearTimeout")(k.current), k.current = b("setTimeout")(m, h)
				})
			}, [m]),
			o = g.useRef(!1);
		b("useLayoutEffect_SAFE_FOR_SSR")(function () {
			o.current !== a && (!a || c.current != null) && n(a), o.current = a
		}, [a, n]);
		d = g.useCallback(function (a) {
			var b = c.current;
			c.current = a;
			a != null ? (a.addEventListener != null && (a.addEventListener("transitionend", m), a.addEventListener("webkitTransitionEnd", m)), o.current === !0 && n(!0)) : b != null && b.removeEventListener != null && (b.removeEventListener("transitionend", m), b.removeEventListener("webkitTransitionEnd", m))
		}, [m, n]);
		f = f || e || a;
		return [f, e, d]
	}
}), null);