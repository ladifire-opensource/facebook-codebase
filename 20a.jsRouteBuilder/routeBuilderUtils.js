__d("routeBuilderUtils", [], (function (a, b, c, d, e, f) {
	"use strict";
	f.getPathParts = a;

	function a(a) {
		a = a.split("/");
		return a.filter(function (a) {
			return a !== ""
		}).map(function (a) {
			var b = a.split(/{|}/);
			if (b.length < 3) return {
				isToken: !1,
				part: a
			};
			else {
				a = b[0];
				var c = b[1];
				b = b[2];
				var d = c[0] === "?",
					e = c[d ? 1 : 0] === "*";
				c = c.substring((d ? 1 : 0) + (e ? 1 : 0));
				return {
					isToken: !0,
					optional: d,
					prefix: a,
					suffix: b,
					token: c
				}
			}
		})
	}
}), null);