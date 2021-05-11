__d("CometInteractionVC", ["CometVCTracker", "InteractionTracingMetrics", "JSScheduler", "gkx"], (function (a, b, c, d, e, f) {
	"use strict";
	f.addMountPointMetaData = a;
	f.addMutationRootForTraceId = c;
	f.addMutationRootForTraceType = d;
	f.holdVCTrace = e;
	f.observeMutation = i;
	f.resumeVCTrace = j;
	f.startVisualCompletionTrace = k;
	f.trackLoadingState = l;
	var g = b("CometVCTracker").CometVisualCompletionTraceForInteraction,
		h = {
			defer_expensive_calculation: function (a) {
				b("JSScheduler").scheduleLoggingPriCallback(a)
			},
			filter_ignore_dynamic_on_interaction: b("gkx")("1824839"),
			retain_element_reference: !1
		};

	function a(a, c, d) {
		a = b("InteractionTracingMetrics").get(a);
		a = a && a.vcTracker;
		a && a.addMountPointMetadata(c, d)
	}

	function c(a, c) {
		a = b("InteractionTracingMetrics").get(a);
		a = a && a.vcTracker;
		a && a.addMutationRoot(c)
	}

	function d(a, c) {
		var d = b("InteractionTracingMetrics").currentInteractionLogger();
		d.forEach(function (b) {
			var d = b && b.vcTracker;
			d && b.type === c && d.addMutationRoot(a)
		})
	}

	function e(a, c) {
		a = b("InteractionTracingMetrics").get(a);
		a && a.type === "INTERACTION" && a.vcTracker && a.vcTracker.lock(c)
	}

	function i(a, c) {
		a = b("InteractionTracingMetrics").get(a);
		a && a.vcTracker && a.vcTracker.observeMutation(c)
	}

	function j(a, c) {
		a = b("InteractionTracingMetrics").get(a);
		a && a.vcTracker && a.vcTracker.unlock(c)
	}

	function k(a, b, c) {
		return new g(b, 0, a, c, h)
	}

	function l(a) {
		var c = [];
		b("InteractionTracingMetrics").currentInteractionLogger().forEach(function (b) {
			b.vcTracker && c.push(b.vcTracker.waitLoadingState(a))
		});
		return c
	}
}), null);