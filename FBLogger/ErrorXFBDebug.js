__d("ErrorXFBDebug", [], (function (a, b, c, d, e, f) {
	"use strict";
	f.addFromXHR = a;
	f.add = i;
	f.getAll = b;
	var g = 5,
		h = [];

	function a(a) {
		var b = a.getAllResponseHeaders();
		if (b != null && b.indexOf("X-FB-Debug") >= 0) {
			b = a.getResponseHeader("X-FB-Debug");
			b && i(b)
		}
	}

	function i(a) {
		h.push(a), h.length > g && h.shift()
	}

	function b() {
		return h
	}
}), null);