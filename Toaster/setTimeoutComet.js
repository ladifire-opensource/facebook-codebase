__d("setTimeoutComet", ["JSScheduler", "setTimeoutCometInternals"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("JSScheduler").priorities.unstable_Low,
		h = b("JSScheduler").priorities.unstable_Idle;

	function a(a, c) {
		var d = b("JSScheduler").getCurrentPriorityLevel() === h ? h : g;
		for (var e = arguments.length, f = new Array(e > 2 ? e - 2 : 0), i = 2; i < e; i++) f[i - 2] = arguments[i];
		return b("setTimeoutCometInternals").setTimeoutAtPriority_DO_NOT_USE.apply(b("setTimeoutCometInternals"), [d, a, c].concat(f))
	}
}), null);