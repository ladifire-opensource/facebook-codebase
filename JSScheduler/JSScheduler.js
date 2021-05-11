__d("JSScheduler", ["SchedulerFb-Internals_DO_NOT_USE"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = {
			unstable_Immediate: (c = b("SchedulerFb-Internals_DO_NOT_USE")).unstable_ImmediatePriority,
			unstable_UserBlocking: c.unstable_UserBlockingPriority,
			unstable_Normal: c.unstable_NormalPriority,
			unstable_Low: c.unstable_LowPriority,
			unstable_Idle: c.unstable_IdlePriority
		},
		h = !1,
		i = c.unstable_scheduleCallback,
		j = c.unstable_cancelCallback;
	a.__fbNativeSetTimeout || a.setTimeout;
	a.__fbNativeClearTimeout || a.clearTimeout;
	var k = {
		priorities: g,
		shouldYield: b("SchedulerFb-Internals_DO_NOT_USE").unstable_shouldYield,
		getCurrentPriorityLevel: b("SchedulerFb-Internals_DO_NOT_USE").unstable_getCurrentPriorityLevel,
		runWithPriority: b("SchedulerFb-Internals_DO_NOT_USE").unstable_runWithPriority,
		defer: function (a) {
			var b = k.getCurrentPriorityLevel();
			return i(b, a)
		},
		next: function (a) {
			return b("SchedulerFb-Internals_DO_NOT_USE").unstable_next(a)
		},
		next_DO_NOT_USE: function (a) {
			return b("SchedulerFb-Internals_DO_NOT_USE").unstable_next_DO_NOT_USE(a)
		},
		getCallbackScheduler: function () {
			var a = k.getCurrentPriorityLevel();
			return function (b) {
				return i(a, b)
			}
		},
		getUserBlockingRunAtCurrentPriCallbackScheduler_DO_NOT_USE: function () {
			var a = k.getCurrentPriorityLevel();
			return function (c) {
				return i(g.unstable_UserBlocking, function () {
					b("SchedulerFb-Internals_DO_NOT_USE").unstable_runWithPriority(a, c)
				})
			}
		},
		deferUserBlockingRunAtCurrentPri_DO_NOT_USE: function (a) {
			var c = k.getCurrentPriorityLevel();
			return i(g.unstable_UserBlocking, function () {
				b("SchedulerFb-Internals_DO_NOT_USE").unstable_runWithPriority(c, a)
			})
		},
		scheduleNormalPriCallback: function (a) {
			return i(g.unstable_Normal, a)
		},
		scheduleLoggingPriCallback: function (a) {
			return i(g.unstable_Low, a)
		},
		scheduleSpeculativeCallback: function (a) {
			return i(g.unstable_Idle, a)
		},
		cancelCallback: function (a) {
			j(a)
		},
		scheduleDelayedCallback_DO_NOT_USE: function (a, b, c) {
			a = i(a, c, {
				delay: b
			});
			return a
		},
		cancelDelayedCallback_DO_NOT_USE: function (a) {
			a = a;
			return j(a)
		},
		startEventProfiling: function () {
			var a;
			a = (a = b("SchedulerFb-Internals_DO_NOT_USE").unstable_Profiling) == null ? void 0 : a.startLoggingProfilingEvents;
			typeof a == "function" && a()
		},
		stopEventProfiling: function () {
			var a;
			a = (a = b("SchedulerFb-Internals_DO_NOT_USE").unstable_Profiling) == null ? void 0 : a.stopLoggingProfilingEvents;
			return typeof a == "function" ? a() : null
		},
		makeSchedulerGlobalEntry: function (c, d) {
			c === void 0 && (c = null), d === void 0 && (d = !1), c !== null && c !== void 0 && b("SchedulerFb-Internals_DO_NOT_USE").unstable_forceFrameRate(c), d && k.startEventProfiling(), a.ScheduleJSWork = function (a) {
				return function () {
					for (var b = arguments.length, c = new Array(b), d = 0; d < b; d++) c[d] = arguments[d];
					h ? a.apply(void 0, c) : k.deferUserBlockingRunAtCurrentPri_DO_NOT_USE(function () {
						h = !0;
						try {
							a.apply(void 0, c)
						} finally {
							h = !1
						}
					})
				}
			}
		}
	};
	e.exports = k
}), null);