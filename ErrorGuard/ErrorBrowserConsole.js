__d("ErrorBrowserConsole", [], (function (a, b, c, d, e, f) {
	"use strict";
	f.errorListener = b;
	var g = !1,
		h = a.console;

	function b(a) {
		var b = h[a.type] ? a.type : "error";
		if (a.type === "fatal" || b === "error" && !g) {
			b = a.message;
			h.error("ErrorUtils caught an error:\n\n" + b + "\n\nSubsequent non-fatal errors won't be logged; see https://fburl.com/debugjs.");
			g = !0
		}
	}
}), null);