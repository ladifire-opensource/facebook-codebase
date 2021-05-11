__d("CometEventTimings", ["performanceNavigationStart", "performanceNow"], (function (a, b, c, d, e, f) {
	"use strict";
	f.getCurrentQueueTime = a;
	var g;

	function a(a) {
		var c = (g || (g = b("performanceNow")))(),
			d = null,
			e = document.createEvent("MouseEvent").timeStamp < b("performanceNavigationStart")();
		e && a != null && a < c && (d = c - a, c = a);
		return [c, d]
	}
}), null);