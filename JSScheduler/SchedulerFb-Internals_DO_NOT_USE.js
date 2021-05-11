__d("SchedulerFb-Internals_DO_NOT_USE", [
	"ifRequireable", 
	"qex", 
	"requestAnimationFramePolyfill", 
	"SchedulerPostTask-dev.classic", 
	"SchedulerPostTask-prod.classic", 
	"Scheduler-dev.classic", 
	"Scheduler-profiling.classic"
	], (function (a, b, c, d, e, f) {
	"use strict";
	a.requestAnimationFrame === void 0 && (a.requestAnimationFrame = b("requestAnimationFramePolyfill"));
	var g = a.scheduler !== void 0 && a.scheduler.postTask !== void 0,
		h = !1,
		i = b("qex")._("1768468")/*false*/,
		j;
	g && i ? j = b("SchedulerPostTask-prod.classic") : j = b("Scheduler-profiling.classic");
	e.exports = {
		unstable_ImmediatePriority: j.unstable_ImmediatePriority,
		unstable_UserBlockingPriority: j.unstable_UserBlockingPriority,
		unstable_NormalPriority: j.unstable_NormalPriority,
		unstable_LowPriority: j.unstable_LowPriority,
		unstable_IdlePriority: j.unstable_IdlePriority,
		unstable_getCurrentPriorityLevel: j.unstable_getCurrentPriorityLevel,
		unstable_runWithPriority: j.unstable_runWithPriority,
		unstable_next_DO_NOT_USE: j.unstable_next,
		unstable_next: function (a) {
			return b("ifRequireable")("React", function (c) {
				return b("qex")._("1764704") ? c.startTransition(a) : j.unstable_next(a)
			}, function () {
				return j.unstable_next(a)
			})
		},
		unstable_now: j.unstable_now,
		unstable_scheduleCallback: function (a, c, d) {
			var e = b("ifRequireable")("TimeSlice", function (a) {
				return a.guard(c, "unstable_scheduleCallback", {
					propagationType: a.PropagationType.CONTINUATION,
					registerCallStack: !0
				})
			}, function () {
				return c
			});
			i && !g && !h ? b("ifRequireable")("BanzaiODS", function (a) {
				h = !0, a.bumpEntityKey(3980, "react_comet", "scheduler_mismatch")
			}, function () {}) : !i && g && !h && b("ifRequireable")("BanzaiODS", function (a) {
				h = !0, a.bumpEntityKey(3980, "react_comet", "scheduler_present")
			}, function () {});
			a = j.unstable_scheduleCallback(a, e, d);
			return a
		},
		unstable_cancelCallback: function (a) {
			return j.unstable_cancelCallback(a)
		},
		unstable_wrapCallback: function (a) {
			var c = b("ifRequireable")("TimeSlice", function (b) {
				return b.guard(a, "unstable_wrapCallback", {
					propagationType: b.PropagationType.CONTINUATION,
					registerCallStack: !0
				})
			}, function () {
				return a
			});
			return j.unstable_wrapCallback(c)
		},
		unstable_pauseExecution: function () {
			return j.unstable_pauseExecution()
		},
		unstable_continueExecution: function () {
			return j.unstable_continueExecution()
		},
		unstable_shouldYield: j.unstable_shouldYield,
		unstable_forceFrameRate: j.unstable_forceFrameRate,
		unstable_Profiling: j.unstable_Profiling
	}
}), null);