__d("MemoizationInstrumentation", ["invariant"], (function (a, b, c, d, e, f, g) {
	"use strict";
	f.inject = a;
	f.onFunctionCall = b;
	var h = null;

	function a(a) {
		h == null || g(0, 2221), h = a
	}

	function b(a, b) {
		return h ? h.functionCall(a, b) : null
	}
}), null);