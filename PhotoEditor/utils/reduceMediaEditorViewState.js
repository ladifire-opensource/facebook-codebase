__d("reduceMediaEditorViewState", [], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;

	function a(a, b, c) {
		b = b;
		a = a.current.keys();
		for (var a = a, d = Array.isArray(a), e = 0, a = d ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
			var f;
			if (d) {
				if (e >= a.length) break;
				f = a[e++]
			} else {
				e = a.next();
				if (e.done) break;
				f = e.value
			}
			f = f;
			b = f(b, c)
		}
		return b
	}
}), null);