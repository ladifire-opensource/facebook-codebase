__d("useCometPrerendererImpl", ["React", "emptyFunction", "useCometPreloader"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React");
	a = function (a, c, d, e, f) {
		var h = g.useState(!1),
			i = h[0],
			j = h[1];
		h = g.useState(!1);
		var k = h[0],
			l = h[1];
		h = b("useCometPreloader")(a, d, e, f);
		var m = h[0],
			n = h[1],
			o = h[2],
			p = h[3];
		d = g.useCallback(function (b) {
			var c = function () {
				a === "tooltip" && j(!0)
			};
			m(b, c)
		}, [m, a]);
		e = g.useCallback(function () {
			n(), j(!1)
		}, [n]);
		f = g.useCallback(function (b) {
			o(b), (a === "button" || a === "button_aggressive") && j(!0)
		}, [o, a]);
		h = g.useCallback(function (a) {
			p(a), l(a)
		}, [p]);
		if (a == null) {
			var q;
			return [{
				isVisible: c,
				shouldPrerender: !1
			}, q = b("emptyFunction"), q, q, q]
		}
		q = {
			isVisible: c,
			shouldPrerender: i || k
		};
		return [q, d, e, f, h]
	};
	c = a;
	e.exports = c
}), null);