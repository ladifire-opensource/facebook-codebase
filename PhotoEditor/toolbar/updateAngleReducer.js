__d("updateAngleReducer", ["getNewAngle"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;

	function a(a, c) {
		switch (c.type) {
			case "ROTATE":
				return babelHelpers["extends"]({}, a, {
					angle: b("getNewAngle")((c = a.angle) != null ? c : 0)
				});
			case "RESET":
				return babelHelpers["extends"]({}, a, {
					angle: 0
				})
		}
		return a
	}
}), null);