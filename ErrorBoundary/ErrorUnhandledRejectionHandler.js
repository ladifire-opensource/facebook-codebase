__d("ErrorUnhandledRejectionHandler", ["ErrorNormalizeUtils", "err", "getErrorSafe"], (function (a, b, c, d, e, f) {
	"use strict";
	f.onunhandledrejection = i;
	f.setup = c;
	var g = null,
		h = !1;

	function i(a) {
		if (!g) return;
		var c = a.reason;
		if (c != null && typeof c === "object" && (c.name == null || c.name === "" || c.message == null || c.message === "")) try {
			var d = b("err")("UnhandledRejection: %s", JSON.stringify(c));
			d = b("ErrorNormalizeUtils").normalizeError(d)
		} catch (a) {
			var e = b("err")("UnhandledRejection: (circular) %s", Object.keys(c).join(","));
			d = b("ErrorNormalizeUtils").normalizeError(e)
		} else d = b("ErrorNormalizeUtils").normalizeError(b("getErrorSafe")(c));
		d.loggingSource || (d.loggingSource = "ONUNHANDLEDREJECTION");
		g.reportNormalizedError(d);
		a.preventDefault()
	}

	function c(b) {
		g = b, typeof a.addEventListener === "function" && !h && (h = !0, a.addEventListener("unhandledrejection", i))
	}
}), null);