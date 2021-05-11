__d("FBLogger", ["ErrorMetadata", "FBLogMessage"], (function (a, b, c, d, e, f) {
	"use strict";
	a = function (a, c) {
		var d = new(b("FBLogMessage"))(a);
		return c != null ? d.event(a + "." + c) : d
	};
	a.addGlobalMetadata = function (a, c, d) {
		b("ErrorMetadata").addGlobalMetadata(a, c, d)
	};
	c = a;
	e.exports = c
}), null);