__d("PageInsightsTableWithValidation", ["PageInsightsInsightsTable.react", "react", "usePageInsightsTableValidation"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = g || b("react");

	function a(a) {
		var c = a.validationProps;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["validationProps"]);
		b("usePageInsightsTableValidation")(c);
		return h.jsx(b("PageInsightsInsightsTable.react").PageInsightsInsightsTable, babelHelpers["extends"]({}, a))
	}
}), null);