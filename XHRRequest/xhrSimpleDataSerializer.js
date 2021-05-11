__d("xhrSimpleDataSerializer", [], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;

	function a(a) {
		var b = [];
		for (var c in a) b.push(encodeURIComponent(c) + "=" + encodeURIComponent(a[c]));
		return b.join("&")
	}
}), null);