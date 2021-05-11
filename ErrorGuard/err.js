__d("err", ["TAALOpcodes"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;

	function a(a) {
		var c = new Error(a);
		if (c.stack === void 0) try {
			throw c
		} catch (a) {}
		c.messageFormat = a;
		for (var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++) e[f - 1] = arguments[f];
		c.messageParams = e.map(function (a) {
			return String(a)
		});
		c.taalOpcodes = [b("TAALOpcodes").PREVIOUS_FRAME];
		return c
	}
}), null);