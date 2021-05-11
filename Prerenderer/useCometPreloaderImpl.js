__d("useCometPreloaderImpl", ["CometMouseActivity", "JSScheduler", "React", "clearTimeout", "ifRequired", "setTimeout"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function h(a) {
		return a.pointerType === "mouse"
	}

	function i(a) {
		a && (typeof a === "function" ? a() : a.preload())
	}
	var j = 50;

	function a(a, c, d, e) {
		var f = g.useRef(null),
			k = g.useRef(null),
			l = g.useRef(null),
			m = function (a) {
				b("ifRequired")("setTimeoutCometInternals", function (c) {
					f.current = c.setTimeoutAtPriority_DO_NOT_USE(b("JSScheduler").priorities.unstable_UserBlocking, a, j)
				}, function () {
					f.current = b("setTimeout")(a, j)
				})
			},
			n = g.useCallback(function (e, f) {
				if (a === "tooltip" || (a === "button" || a === "button_aggressive") && c != null) {
					e = function () {
						a === "tooltip" ? (i(d), i(c)) : (a === "button" || a === "button_aggressive") && i(c), f && f()
					};
					m(e)
				}
				if (a === "button_aggressive") {
					e = function () {
						i(d)
					};
					l.current != null && (l.current(), l.current = null);
					l.current = b("CometMouseActivity").addOnMouseStopCallback(e)
				}
			}, [d, c, a]),
			o = g.useCallback(function () {
				b("clearTimeout")(f.current), f.current = null, e && e(), k.current != null && k.current(), l.current != null && l.current()
			}, [e]),
			p = g.useCallback(function (b) {
				if (!h(b)) return;
				(a === "button" || a === "button_aggressive") && i(d)
			}, [d, a]),
			q = g.useCallback(function (a) {
				b("JSScheduler").scheduleSpeculativeCallback(function () {
					a === !0 && (i(d), i(c))
				})
			}, [d, c]);
		g.useEffect(function () {
			return function () {
				k.current != null && k.current(), l.current != null && l.current(), b("clearTimeout")(f.current)
			}
		}, []);
		return [n, o, p, q]
	}
}), null);