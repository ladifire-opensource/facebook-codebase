__d("CometIconLogo.react", ["CometIconAppFacebookCircleFilled.react", "React"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.color;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["color"]);
		return g.jsx(b("CometIconAppFacebookCircleFilled.react"), babelHelpers["extends"]({}, a, {
			color: (a = c) != null ? a : g.jsxs("linearGradient", {
				x1: "50%",
				x2: "50%",
				y1: "97.0782153%",
				y2: "0%",
				children: [g.jsx("stop", {
					offset: "0%",
					stopColor: "#0062E0"
				}), g.jsx("stop", {
					offset: "100%",
					stopColor: "#19AFFF"
				})]
			})
		}))
	}
}), null);