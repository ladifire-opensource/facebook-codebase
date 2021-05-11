__d("setTimeoutCometInternals", ["JSScheduler"], (function (a, b, c, d, e, f) {
	"use strict";
	f.clearInterval_DO_NOT_USE = a;
	f.clearTimeout_DO_NOT_USE = c;
	f.setIntervalAtPriority_DO_NOT_USE = d;
	f.setTimeoutAtPriority_DO_NOT_USE = e;
	var g = new Map(),
		h = 0;

	function a(a) {
		if (a !== void 0 && a !== null) {
			var c = g.get(a);
			c !== void 0 && (g["delete"](a), b("JSScheduler").cancelDelayedCallback_DO_NOT_USE(c))
		}
	}

	function c(a) {
		if (a !== void 0 && a !== null) {
			var c = g.get(a);
			c !== void 0 && (g["delete"](a), b("JSScheduler").cancelDelayedCallback_DO_NOT_USE(c))
		}
	}

	function d(a, c, d) {
		for (var e = arguments.length, f = new Array(e > 3 ? e - 3 : 0), i = 3; i < e; i++) f[i - 3] = arguments[i];
		var j = h;
		h += 1;
		if (typeof c !== "function") return j;
		var k = function e() {
				var h = b("JSScheduler").scheduleDelayedCallback_DO_NOT_USE(a, d, e);
				g.set(j, h);
				c.apply(void 0, f)
			},
			l = b("JSScheduler").scheduleDelayedCallback_DO_NOT_USE(a, d, k);
		g.set(j, l);
		return j
	}

	function e(a, c, d) {
		for (var e = arguments.length, f = new Array(e > 3 ? e - 3 : 0), i = 3; i < e; i++) f[i - 3] = arguments[i];
		var j = h;
		h += 1;
		if (typeof c !== "function") return j;
		var k = b("JSScheduler").scheduleDelayedCallback_DO_NOT_USE(a, d, function () {
			g["delete"](j), c.apply(void 0, f)
		});
		g.set(j, k);
		return j
	}
}), null);