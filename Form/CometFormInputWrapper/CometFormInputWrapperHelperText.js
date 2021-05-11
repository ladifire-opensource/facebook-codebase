__d("CometFormInputWrapperHelperText.react", ["React", "TetraTextPairing.react"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.validationState;
		a = a.value;
		return g.jsx(b("TetraTextPairing.react"), {
			level: 4,
			meta: a,
			metaColor: c === "ERROR" ? "negative" : "secondary"
		})
	}
}), null);