https://github.com/facebook/react-native/blob/master/packages/polyfills/error-guard.js


__d("ErrorGuard", ["Env", 
	"ErrorGuardState", 
	"ErrorNormalizeUtils", 
	"ErrorPubSub", 
	"ErrorSerializer", "getErrorSafe"], (function (a, b, c, d, e, f) {
	"use strict";
	var g, h, i, j = "<anonymous guard>";
	b("getErrorSafe");
	b("ErrorSerializer");
	g || (g = b("ErrorGuardState"));
	b("ErrorNormalizeUtils");
	h || (h = b("ErrorPubSub"));
	var k = {
		applyWithGuard: function (a, c, d, e) {
			(g || (g = b("ErrorGuardState"))).pushGuard({
				name: (e == null ? void 0 : e.name) || (a.name ? "func_name:" + a.name : null) || j,
				deferredSource: e == null ? void 0 : e.deferredSource
			});
			if ((i || (i = b("Env"))).nocatch) try {
				return a.apply(c, d)
			} finally {
				(g || (g = b("ErrorGuardState"))).popGuard()
			}
			try {
				return Function.prototype.apply.call(a, c, d)
			} catch (i) {
				c = (c = e) != null ? c : {};
				var f = c.deferredSource,
					k = c.onError;
				c = c.onNormalizedError;
				var l = b("getErrorSafe")(i);
				b("ErrorSerializer").aggregateError(l, {
					deferredSource: f,
					project: (f = e == null ? void 0 : e.project) != null ? f : "ErrorGuard",
					type: (f = e == null ? void 0 : e.errorType) != null ? f : "fatal"
				});
				e = b("ErrorNormalizeUtils").normalizeError(l);
				e.loggingSource = "GUARDED";
				if (l == null && a) try {
					e.extra[a.toString().substring(0, 100)] = "function", d != null && d.length && (e.extra[Array.from(d).toString().substring(0, 100)] = "args")
				} catch (a) {}
				e.guardList = (g || (g = b("ErrorGuardState"))).cloneGuardList();
				k && k(l);
				c && c(e);
				(h || (h = b("ErrorPubSub"))).reportNormalizedError(e)
			} finally {
				(g || (g = b("ErrorGuardState"))).popGuard()
			}
		},
		guard: function (a, b) {
			function c() {
				for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++) d[e] = arguments[e];
				return k.applyWithGuard(a, this, d, b)
			}
			a.__SMmeta && (c.__SMmeta = a.__SMmeta);
			return c
		},
		inGuard: function () {
			return (g || (g = b("ErrorGuardState"))).inGuard()
		}
	};
	e.exports = a.ErrorGuard = k
}), 3);