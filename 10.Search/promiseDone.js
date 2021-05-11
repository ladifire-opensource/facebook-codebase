__d("promiseDone", ["Env", "ErrorPubSub", "getErrorSafe"], (function (a, b, c, d, e, f) {
	var g, h;

	function a(a, c, d) {
		var e, f = (e = (g || (g = b("Env"))).deferred_stack_trace_rate) != null ? e : 0,
			i = null;
		f >= 1 && Math.random() < 1 / f && (i = new Error(""));
		var j = function () {
				i = null
			},
			k = arguments.length > 1 ? a.then(c, d) : a;
		k.then(j, function (a) {
			a = b("getErrorSafe")(a);
			a.deferredSource = i;
			a.loggingSource = "PROMISE_DONE";
			(h || (h = b("ErrorPubSub"))).reportError(a);
			j()
		})
	}
	e.exports = a
}), null);