__d("CometHeroInteractionWithDiv.react", ["LegacyHidden", "React", "requireCond", "stylex", "cr:1011783"], (function (a, b, c, d, e, f) {
	"use strict";
	var g, h = b("React");
	a = function (a, c) {
		var d = a.children,
			e = a.hidden,
			f = a.pageletAriaProps;
		a = a.xstyle;
		return h.jsx(b("LegacyHidden"), {
			htmlAttributes: babelHelpers["extends"]({
				className: (g || (g = b("stylex")))(a)
			}, f),
			mode: e === !0 ? "hidden" : "visible",
			ref: c,
			children: d
		})
	};
	d = (c = b("cr:1011783")) != null ? c : h.forwardRef(a);
	e.exports = d
}), null);