__d("LegacyHidden", ["React"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		h = g.unstable_LegacyHidden;

	function a(a, b) {
		var c = a.children,
			d = a.htmlAttributes,
			e = a.mode;
		a = a.suppressHydrationWarning;
		return g.jsx("div", babelHelpers["extends"]({}, d, {
			hidden: e === "hidden" ? !0 : void 0,
			ref: b,
			suppressHydrationWarning: a,
			children: g.jsx(h, {
				mode: e === "hidden" ? "unstable-defer-without-hiding" : e,
				children: c
			})
		}))
	}
	c = g.forwardRef(a);
	e.exports = c
}), null);