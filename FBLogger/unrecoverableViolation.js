__d("unrecoverableViolation", ["ErrorSerializer", "FBLogger", "TAALOpcodes", "err"], (function (a, b, c, d, e, f) {
	"use strict";

	function a(a, c, d) {
		d = d === void 0 ? {} : d;
		d = d.error;
		c = b("FBLogger")(c);
		var e;
		d ? (e = d, c = c.catching(d), b("ErrorSerializer").aggregateError(d, {
			messageFormat: a
		})) : (e = b("err")(a), e.taalOpcodes = e.taalOpcodes || [], e.taalOpcodes.push(b("TAALOpcodes").PREVIOUS_FRAME), c = c.blameToPreviousFrame());
		c.mustfix(a);
		throw e
	}
	e.exports = a
}), null);