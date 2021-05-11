__d("once", [], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;

	function a(a) {
		var b = g(a);
		for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
		return b
	}

	function g(a) {
		var b = a,
			c;
		a = function () {
			if (b) {
				for (var a = arguments.length, d = new Array(a), e = 0; e < a; e++) d[e] = arguments[e];
				c = b.apply(this, d);
				b = null
			}
			return c
		};
		return a
	}
}), null);