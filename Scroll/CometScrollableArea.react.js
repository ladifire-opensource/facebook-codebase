__d("CometScrollableArea.react", ["BaseScrollableArea.react", "React"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React");

	function a(a, c) {
		var d = a.horizontal;
		d = d === void 0 ? !0 : d;
		var e = a.id,
			f = a.vertical;
		f = f === void 0 ? !0 : f;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["horizontal", "id", "vertical"]);
		return g.jsx(b("BaseScrollableArea.react"), babelHelpers["extends"]({}, a, {
			horizontal: d,
			id: e,
			ref: c,
			vertical: f
		}))
	}
	c = g.forwardRef(a);
	e.exports = c
}), null);