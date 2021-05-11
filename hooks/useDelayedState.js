__d("useDelayedState", ["React", "clearTimeout", "emptyFunction", "setTimeout"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		a = g.useState(a);
		var c = a[0],
			d = a[1],
			e = g.useRef(null);
		g.useEffect(function () {
			return function () {
				return b("clearTimeout")(e.current)
			}
		}, []);
		a = g.useCallback(function (a, c, f) {
			c === void 0 && (c = 0), f === void 0 && (f = b("emptyFunction")), b("clearTimeout")(e.current), e.current = null, c === 0 ? (d(a), f(a)) : e.current = b("setTimeout")(function () {
				d(a), f(a), e.current = null
			}, c)
		}, []);
		return [c, a]
	}
}), null);