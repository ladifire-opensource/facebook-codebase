__d("CometKeyCommandWrapper.react", ["CometKeyCommandWidget", "React"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.children;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["children"]);
		return g.jsx(b("CometKeyCommandWidget").Wrapper, babelHelpers["extends"]({}, a, {
			children: c
		}))
	}
}), null);