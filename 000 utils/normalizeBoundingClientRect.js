__d("normalizeBoundingClientRect", [], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;

	function a(a, b) {
		a = a.ownerDocument.documentElement;
		var c = a ? a.clientLeft : 0;
		a = a ? a.clientTop : 0;
		var d = Math.round(b.left) - c;
		c = Math.round(b.right) - c;
		var e = Math.round(b.top) - a;
		b = Math.round(b.bottom) - a;
		return {
			left: d,
			right: c,
			top: e,
			bottom: b,
			width: c - d,
			height: b - e
		}
	}
}), null);