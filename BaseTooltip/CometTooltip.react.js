__d("CometTooltip.react", ["BaseTooltip.react", "CometTooltipImpl.react", "React"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.delayMs;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["delayMs"]);
		return g.jsx(b("BaseTooltip.react"), babelHelpers["extends"]({}, a, {
			delayTooltipMs: c,
			tooltipImpl: b("CometTooltipImpl.react")
		}))
	}
}), null);