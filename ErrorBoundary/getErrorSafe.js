__d("getErrorSafe", ["TAALOpcodes", "err"], (function (a, b, c, d, e, f) {
	"use strict";

	function c(a) {
		var c = null;
		a == null || typeof a !== "object" ? c = b("err")("Non-object thrown: %s", String(a)) : typeof a.message !== "string" ? c = b("err")("Non-error thrown: %s, keys: %s", String(a), JSON.stringify(Object.keys(a).sort())) : Object.isExtensible && !Object.isExtensible(a) && (c = b("err")("Non-extensible thrown: %s", String(a.message)));
		if (c != null) {
			c.taalOpcodes = c.taalOpcodes || [];
			c.taalOpcodes.push(b("TAALOpcodes").PREVIOUS_FRAME);
			return c
		}
		return a
	}
	e.exports = a.getErrorSafe = c
}), 3);