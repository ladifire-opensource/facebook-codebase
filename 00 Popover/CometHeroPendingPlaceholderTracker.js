__d("CometHeroPendingPlaceholderTracker", [], (function (a, b, c, d, e, f) {
	"use strict";
	f.addInteraction = a;
	f.addPlaceholder = b;
	f.dump = c;
	f.removeInteraction = d;
	f.removePlaceholder = e;
	var g = new Map();

	function a(a) {
		g.has(a) || g.set(a, new Map())
	}

	function b(a, b, c) {
		a = g.get(a);
		a && a.set(b, c)
	}

	function c(a) {
		a = g.get(a);
		var b = [];
		a && a.forEach(function (a) {
			return b.push(a)
		});
		return b
	}

	function d(a) {
		g["delete"](a)
	}

	function e(a, b) {
		a = g.get(a);
		a && a["delete"](b)
	}
}), null);