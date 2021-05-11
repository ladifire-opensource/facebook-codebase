__d("ReactEventHookPropagation", [], (function (a, b, c, d, e, f) {
	"use strict";
	f.hasEventHookPropagationStopped = a;
	f.stopEventHookPropagation = b;

	function a(a, b) {
		a = a._stopEventHookPropagation;
		return a !== void 0 && a[b]
	}

	function b(a, b) {
		var c = a._stopEventHookPropagation;
		c || (c = a._stopEventHookPropagation = {});
		c[b] = !0
	}
}), null);