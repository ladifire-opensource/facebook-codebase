__d("CometSSRSuspendOnServer.react", ["Promise", "ExecutionEnvironment", "React"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	b("React");

	function a(a) {
		a = a.children;
		if (b("ExecutionEnvironment").canUseDOM) return a;
		throw new(b("Promise"))(function () {})
	}
}), null);