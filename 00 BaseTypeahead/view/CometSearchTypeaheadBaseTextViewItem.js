__d("CometSearchTypeaheadBaseTextViewItem.react", ["CometSearchTypeaheadBaseViewItem.react", "React", 
	"TetraText.react"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.entry;
		a.queryString;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["entry", "queryString"]);
		return g.jsx(b("CometSearchTypeaheadBaseViewItem.react"), babelHelpers["extends"]({}, a, {
			entry: c,
			children: g.jsx(b("TetraText.react"), {
				type: "body3",
				children: c.getLabel()
			})
		}))
	}
}), null);