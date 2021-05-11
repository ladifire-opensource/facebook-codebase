__d("ErrorGuardState", [], (function (a, b, c, d, e, f) {
	"use strict";
	f.pushGuard = a;
	f.popGuard = b;
	f.inGuard = c;
	f.cloneGuardList = d;
	f.findDeferredSource = e;
	var g = [];

	function a(a) {
		g.unshift(a)
	}

	function b() {
		g.shift()
	}

	function c() {
		return g.length !== 0
	}

	function d() {
		return g.map(function (a) {
			return a.name
		})
	}

	function e() {
		for (var a = 0; a < g.length; a++) {
			var b = g[a];
			if (b.deferredSource != null) return b.deferredSource
		}
	}
}), null);