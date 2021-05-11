__d("ResourceHasher", ["invariant"], (function (a, b, c, d, e, f, g) {
	"use strict";
	f.getAsyncHash = a;
	f.createExternalJSHash = b;
	f.getValidResourceHash = c;
	var h = 0;

	function a(a) {
		return "async:" + a
	}

	function b() {
		return "ejs:" + h++
	}

	function c(a) {
		typeof a === "string" || g(0, 19551, a);
		return a
	}
}), null);