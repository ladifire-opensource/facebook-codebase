__d("ErrorGlobalEventHandler", ["err", "getErrorSafe"], (function (a, b, c, d, e, f) {
	"use strict";
	f.setup = c;
	var g = typeof window === "undefined" ? "<self.onerror>" : "<window.onerror>",
		h;

	function i(a) {
		var c = a.error != null ? b("getErrorSafe")(a.error) : b("err")(a.message || "");
		c.fileName == null && a.filename != null && (c.fileName = a.filename);
		c.line == null && a.lineno != null && (c.line = a.lineno);
		c.column == null && a.colno != null && (c.column = a.colno);
		c.guardList = [g];
		c.loggingSource = "ONERROR";
		c.message.indexOf("ResizeObserver") >= 0 && (c.type = "warn");
		(a = h) == null ? void 0 : a.reportError(c)
	}

	function c(b) {
		if (typeof a.addEventListener !== "function") return;
		if (h != null) return;
		h = b;
		a.addEventListener("error", i)
	}
}), null);