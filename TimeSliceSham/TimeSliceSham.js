__d("TimeSliceSham", ["Env", "ErrorGuard", "IntervalTrackingBoundedBuffer"], (function (a, b, c, d, e, f) {
	var g, h;
	c = (g || (g = b("Env"))).timesliceBufferSize;
	c == null && (c = 5e3);
	var i = new(b("IntervalTrackingBoundedBuffer"))(c);
	d = {
		PropagationType: {
			CONTINUATION: 0,
			EXECUTION: 1,
			ORPHAN: 2
		},
		guard: function (a, c, d) {
			var e, f;
			e = (e = (g || (g = b("Env"))).deferred_stack_trace_rate) != null ? e : 0;
			(d == null ? void 0 : d.registerCallStack) && e > 0 && Math.random() < 1 / e && (f = new Error("deferred execution source"));
			return (h || (h = b("ErrorGuard"))).guard(a, {
				deferredSource: f,
				name: "TimeSlice" + (c ? ": " + c : "")
			})
		},
		copyGuardForWrapper: function (a, b) {
			return a
		},
		checkCoverage: function () {},
		setLogging: function (a, b) {},
		getContext: function () {
			return null
		},
		getGuardedContinuation: function (a) {
			function a(a) {
				for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
				return a.apply(this, c)
			}
			return a
		},
		getReusableContinuation: function (a) {
			return this.getPlaceholderReusableContinuation()
		},
		getPlaceholderReusableContinuation: function () {
			var a = function (a) {
				return a()
			};
			a.last = a;
			return a
		},
		getGuardNameStack: function () {
			return []
		},
		registerExecutionContextObserver: function (a) {},
		catchUpOnDemandExecutionContextObservers: function (a) {},
		getBuffer: function () {
			return i
		}
	};
	a.TimeSlice = d;
	e.exports = d
}), 6);