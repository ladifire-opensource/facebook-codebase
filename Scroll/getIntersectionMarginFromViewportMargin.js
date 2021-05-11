__d("getIntersectionMarginFromViewportMargin", [], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = new Map();

	function a(a) {
		var b = "bottom:" + a.bottom + "|top:" + a.top + "|left:" + a.left + "|right:" + a.right,
			c = g.get(b);
		c == null && (c = {
			bottom: a.bottom * -1,
			left: a.left * -1,
			right: a.right * -1,
			top: a.top * -1
		}, g.set(b, c));
		return c
	}
}), null);