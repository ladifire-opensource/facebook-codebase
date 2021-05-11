__d("ErrorPubSub", ["ErrorBrowserConsole", "ErrorGlobalEventHandler", "ErrorGuardState", "ErrorNormalizeUtils", 
	"ErrorUnhandledRejectionHandler", "removeFromArray"], (function (a, b, c, d, e, f) {
	"use strict";
	var g, h = "<global.react>",
		i = [],
		j = [],
		k = 50,
		l = !1,
		m = {
			history: j,
			addListener: function (a, b) {
				b === void 0 && (b = !1), i.push(a), b || j.forEach(function (b) {
					return a(b, (b = b.loggingSource) != null ? b : "DEPRECATED")
				})
			},
			unshiftListener: function (a) {
				i.unshift(a)
			},
			removeListener: function (a) {
				b("removeFromArray")(i, a)
			},
			reportError: function (a) {
				a = b("ErrorNormalizeUtils").normalizeError(a);
				m.reportNormalizedError(a)
			},
			reportNormalizedError: function (a) {
				if (l) return !1;
				var c = (g || (g = b("ErrorGuardState"))).cloneGuardList();
				a.componentStackFrames && c.unshift(h);
				c.length > 0 && (a.guardList = c);
				if (a.deferredSource == null) {
					c = (g || (g = b("ErrorGuardState"))).findDeferredSource();
					c != null && (a.deferredSource = b("ErrorNormalizeUtils").normalizeError(c))
				}
				j.length > k && j.splice(k / 2, 1);
				j.push(a);
				l = !0;
				for (var c = 0; c < i.length; c++) try {
					var d;
					i[c](a, (d = a.loggingSource) != null ? d : "DEPRECATED")
				} catch (a) {}
				l = !1;
				return !0
			}
		};
	m.addListener(b("ErrorBrowserConsole").errorListener);
	b("ErrorGlobalEventHandler").setup(m);
	b("ErrorUnhandledRejectionHandler").setup(m);
	a = m;
	e.exports = a
}), 3);