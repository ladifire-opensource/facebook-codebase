__d("useVisibilityObserver", ["useViewportDuration"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	c = 0;
	d = [0, .25, .5, .75, 1];
	f = [0, .05, .1, .15, .2, .25, .3, .35, .4, .45, .5, .55, .6, .65, .7, .75, .8, .85, .9, .95, 1];
	var g = {
		EXPENSIVE: f,
		LITE: c,
		MODERATE: d
	};

	function a(a) {
		var c = a.onHidden,
			d = a.onIntersection,
			e = a.onVisibilityDurationUpdated,
			f = a.onVisible;
		a = a.options;
		return b("useViewportDuration")({
			onHidden: c,
			onIntersection: d,
			onVisibilityDurationUpdated: e,
			onVisible: f,
			options: a,
			threshold: g[(c = a == null ? void 0 : a.thresholdOverride) != null ? c : "LITE"]
		})
	}
}), null);