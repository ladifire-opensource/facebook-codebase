__d("PromiseAnnotate", [], (function (a, b, c, d, e, f) {
	"use strict";
	f.setDisplayName = a;
	f.getDisplayName = b;

	function a(a, b) {
		a.displayName = b;
		return a
	}

	function b(a) {
		a = a.displayName;
		if (typeof a === "string") return a;
		else return null
	}
}), null);