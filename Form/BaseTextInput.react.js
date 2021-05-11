__d("BaseTextInput.react", ["BaseFocusRing.react", "BaseInput.react", "React"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React");

	function a(a, c) {
		var d = a.suppressFocusRing,
			e = a.xstyle,
			f = babelHelpers.objectWithoutPropertiesLoose(a, ["suppressFocusRing", "xstyle"]);
		return g.jsx(b("BaseFocusRing.react"), {
			suppressFocusRing: d,
			children: function (a) {
				return g.jsx(b("BaseInput.react"), babelHelpers["extends"]({}, f, {
					ref: c,
					xstyle: [a, e]
				}))
			}
		})
	}
	c = g.memo(g.forwardRef(a));
	e.exports = c
}), null);