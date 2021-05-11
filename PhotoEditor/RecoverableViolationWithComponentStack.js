__d("RecoverableViolationWithComponentStack.react", ["CometErrorBoundary.react", "React"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function h(a) {
		a = a.errorMessage;
		throw new Error(a)
	}

	function a(a) {
		var c = a.errorMessage,
			d = a.fallback;
		a = a.projectName;
		return g.jsx(b("CometErrorBoundary.react"), {
			context: {
				project: a,
				type: "error"
			},
			fallback: function () {
				var a;
				return (a = d) != null ? a : null
			},
			children: g.jsx(h, {
				errorMessage: c
			})
		})
	}
}), null);