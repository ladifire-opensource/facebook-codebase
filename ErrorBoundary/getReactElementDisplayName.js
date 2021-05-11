__d("getReactElementDisplayName", ["getReactComponentDisplayName"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;

	function a(a) {
		if (a == null) return "#empty";
		if (typeof a === "string" || typeof a === "number" || typeof a === "boolean") return "#text";
		a = a.type;
		if (a == null) return "ReactComponent";
		return typeof a === "string" ? a : b("getReactComponentDisplayName")(a)
	}
}), null);