__d("coerceImageishURL", [], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;

	function a(a) {
		if (a && typeof a === "object" && a.sprited === !1 && typeof a.uri === "string" && a.width !== void 0 && a.height !== void 0) return a;
		else return null
	}
}), null);