__d("KeyframesDownloadTracker", ["NetworkStatus", "Promise", "XHRRequest", "setTimeout"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = 2,
		h = 250;

	function a(a) {
		return new(b("Promise"))(function(c, d) {
			var e = 0,
				f, i = function f() {
					e++, new(b("XHRRequest"))(a).setMethod("GET").setResponseType("arraybuffer").setErrorHandler(function(a) {
						var c = e <= g;
						c ? b("setTimeout")(f, h) : d(a)
					}).setAbortHandler(function(a) {
						d(a)
					}).setResponseHandler(function(a) {
						c(a)
					}).send()
				};
			if (b("NetworkStatus").isOnline()) i();
			else {
				var j = function(a) {
					a = a.online;
					a && (i(), f.remove())
				};
				f = b("NetworkStatus").onChange(j)
			}
		})
	}
}), null);