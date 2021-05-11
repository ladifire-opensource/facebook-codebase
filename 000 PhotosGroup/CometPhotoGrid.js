__d("CometPhotoGrid.react", ["CometAspectRatioContainer.react", "React", "stylex"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = b("React");

	function i(a, b) {
		return a < 2 && b % 3 === 2
	}

	function a(a) {
		var c = a.spacing,
			d = c === void 0 ? "narrow" : c;
		c = babelHelpers.objectWithoutPropertiesLoose(a, ["spacing"]);
		a = h.Children.toArray(c.children);
		var e = a.length;
		return h.jsx("div", {
			className: (g || (g = b("stylex"))).dedupe({
				"display-1": "j83agx80",
				"flex-direction-1": "btwxx1t3",
				"flex-wrap-1": "lhclo0ds"
			}, d === "narrow" ? {
				"margin-top-1": "hop8lmos",
				"margin-end-1": "nkwizq5d",
				"margin-bottom-1": "scwd0bx6",
				"margin-start-1": "roh60bw9"
			} : null, d === "wide" ? {
				"margin-top-1": "s89635nw",
				"margin-end-1": "c4xchbtz",
				"margin-bottom-1": "dco85op0",
				"margin-start-1": "by2jbhx6"
			} : null),
			children: h.Children.map(a, function(a, c) {
				return h.jsx("div", {
					className: (g || (g = b("stylex"))).dedupe({
						"box-sizing-1": "rq0escxv",
						"flex-basis-1": "kuivcneq"
					}, d === "wide" ? {
						"padding-top-1": "linoseic",
						"padding-end-1": "ihtri3yf",
						"padding-bottom-1": "pby63qed",
						"padding-start-1": "e9o6kcyi"
					} : null, d === "narrow" ? {
						"padding-top-1": "jwdofwj8",
						"padding-end-1": "n8tt0mok",
						"padding-bottom-1": "r8blr3vg",
						"padding-start-1": "hyh9befq"
					} : null, i(c, e) ? {
						"flex-basis-1": "hkbzh7o3"
					} : null),
					children: h.jsx(b("CometAspectRatioContainer.react"), {
						aspectRatio: 1,
						children: a
					})
				})
			})
		})
	}
}), null);