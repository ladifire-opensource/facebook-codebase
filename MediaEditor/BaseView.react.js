__d("BaseView.react", ["LegacyHidden", "React", "stylex", "testID"], (function (a, b, c, d, e, f) {
	"use strict";
	var g, h = b("React"),
		i = {
			hidden: {
				display: "mkhogb32"
			},
			root: {
				boxSizing: "rq0escxv",
				position: "l9j0dhe7",
				zIndex: "du4w35lb"
			}
		};

	function a(a, c) {
		var d = a.children,
			e = a.suppressHydrationWarning,
			f = a.testid,
			j = a.xstyle;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "suppressHydrationWarning", "testid", "xstyle"]);
		var k = a.hidden === !0;
		return h.jsx(b("LegacyHidden"), {
			htmlAttributes: babelHelpers["extends"]({}, a, b("testID")(f), {
				className: (g || (g = b("stylex")))(i.root, j, k && i.hidden)
			}),
			mode: k ? "hidden" : "visible",
			ref: c,
			suppressHydrationWarning: e,
			children: d
		})
	}
	c = h.forwardRef(a);
	e.exports = c
}), null);