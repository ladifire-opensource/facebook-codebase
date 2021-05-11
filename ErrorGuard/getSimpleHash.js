__d("getSimpleHash", [], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = "abcdefghijklmnopqrstuvwxyz012345";

	function a() {
		var a = 0;
		for (var b = arguments.length, c = new Array(b), d = 0; d < b; d++) c[d] = arguments[d];
		for (var e = 0; e < c.length; e++) {
			var f = c[e];
			if (f != null) {
				var h = f.length;
				for (var i = 0; i < h; i++) a = (a << 5) - a + f.charCodeAt(i)
			}
		}
		var j = "";
		for (var k = 0; k < 6; k++) j = g.charAt(a & 31) + j, a >>= 5;
		return j
	}
}), null);