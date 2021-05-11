__d("CometVisualCompletion", ["CometVCTracker", "JSScheduler", "gkx", "performanceAbsoluteNow"], (function (a, b, c, d, e, f) {
	"use strict";
	var g, h = b("CometVCTracker").CometVisualCompletionTraceForNavigation,
		i = {
			defer_expensive_calculation: function (a) {
				b("JSScheduler").scheduleLoggingPriCallback(a)
			},
			enable_image_logging: b("gkx")("1690028"),
			filter_ignore_dynamic_on_interaction: b("gkx")("1824839"),
			retain_element_reference: b("gkx")("950768") || b("gkx")("1293035") || b("gkx")("1537962")
		},
		j = 0,
		k = null,
		l = new Map(),
		m = 4,
		n;
	a = {
		addAnnotation: function (a, b) {
			k != null && k.addAnnotation(a, b)
		},
		addFirstMarkerPoint: function (a, c, d) {
			c === void 0 && (c = (g || (g = b("performanceAbsoluteNow")))()), d === void 0 && (d = {}), k != null && c != null && c > 0 && k.addFirstMarkerPoint(a, c, d)
		},
		addMarkerPoint: function (a, c, d) {
			c === void 0 && (c = (g || (g = b("performanceAbsoluteNow")))()), d === void 0 && (d = {}), k != null && c != null && c > 0 && k.addMarkerPoint(a, c, d)
		},
		addTag: function (a, b) {
			k != null && k.addTag(a, b)
		},
		addTracedInteraction: function (a, c, d) {
			var e = 1,
				f = null;
			l.get(a) && (e = l.get(a) + 1);
			l.set(a, e);
			if (k != null) {
				if (e >= m) return function () {};
				f = k.traceID;
				k.addMarkerPoint(a + "_" + e + "_start", (g || (g = b("performanceAbsoluteNow")))(), {
					interactionId: c,
					qplEvent: d
				})
			}
			return function () {
				k != null && k.traceID === f && k.addMarkerPoint(a + "_" + e + "_end", (g || (g = b("performanceAbsoluteNow")))())
			}
		},
		addVisualElement: function (a, c, d) {
			d === void 0 && (d = (g || (g = b("performanceAbsoluteNow")))()), k != null && a != null && (k.mutationSeq++, k.addVisualElement(k.mutationSeq, a, c, d))
		},
		dumpLocks: function () {
			if (k != null) return k.dumpLocks()
		},
		excludeElement: function (a) {
			k != null && n == null && k.excludeElement(a)
		},
		getCurrentNavigationTrace: function () {
			return k
		},
		getReport: function () {
			return n
		},
		holdTrigger: function (a) {
			if (k != null) return k.lock(a);
			else return function () {}
		},
		observeMutation: function (a) {
			k != null && k.observeMutation(a)
		},
		resumeTrigger: function (a) {
			k != null && k.unlock(a)
		},
		setInitialScrollY: function (a) {
			k != null && k.setInitialScrollY(a)
		},
		setRoute: function (a) {
			k != null && a != null && k.setTracePolicy(a)
		},
		traceNavigation: function (a, b, c) {
			k = new h(b, ++j, a, c, i);
			k.onComplete(function (a) {
				n = a
			});
			k.lock(a);
			n = null;
			l.clear();
			return k
		},
		trackLoadingState: function (a) {
			if (k != null) return k.waitLoadingState(a);
			else return function () {}
		}
	};
	c = a;
	e.exports = c
}), null);