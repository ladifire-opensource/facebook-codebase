__d("CometRowItem.react", ["BaseRowItem.react", 
	"CometErrorBoundary.react", "CometPlaceholder.react", 
	"CometRowContext", "React", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		h = {
			4: {
				paddingEnd: "n8tt0mok",
				paddingStart: "hyh9befq"
			},
			8: {
				paddingEnd: "ph5uu5jm",
				paddingStart: "b3onmgus"
			},
			12: {
				paddingEnd: "p8fzw8mz",
				paddingStart: "pcp91wgn"
			},
			16: {
				paddingEnd: "dflh9lhu",
				paddingStart: "scb9dxdr"
			}
		},
		i = {
			4: {
				paddingBottom: "r8blr3vg",
				paddingTop: "jwdofwj8"
			},
			8: {
				paddingBottom: "e5nlhep0",
				paddingTop: "ecm0bbzt"
			},
			12: {
				paddingBottom: "iuny7tx3",
				paddingTop: "ipjc6fyt"
			},
			16: {
				paddingBottom: "sj5x9vvc",
				paddingTop: "cxgpxx05"
			}
		};

	function a(a, c) {
		var d;
		d = (d = g.useContext(b("CometRowContext"))) != null ? d : {};
		var e = d.spacingHorizontal;
		d = d.spacingVertical;
		var f = a.fallback,
			k = a.placeholder,
			l = babelHelpers.objectWithoutPropertiesLoose(a, ["fallback", "placeholder"]);
		if (k !== void 0) {
			a.placeholder;
			var m = babelHelpers.objectWithoutPropertiesLoose(a, ["placeholder"]);
			return g.jsx(b("CometPlaceholder.react"), {
				fallback: k != null ? g.jsx(j, babelHelpers["extends"]({}, m, {
					ref: c,
					children: k
				})) : null,
				children: g.jsx(j, babelHelpers["extends"]({}, m, {
					ref: c
				}))
			})
		}
		if (f !== void 0) {
			a.fallback;
			var n = babelHelpers.objectWithoutPropertiesLoose(a, ["fallback"]);
			return f === null ? g.jsx(b("CometErrorBoundary.react"), {
				children: g.jsx(j, babelHelpers["extends"]({}, n, {
					ref: c
				}))
			}) : g.jsx(b("CometErrorBoundary.react"), {
				fallback: function (a, b) {
					return g.jsx(j, babelHelpers["extends"]({}, n, {
						ref: c,
						children: typeof f === "function" ? f(a, b) : f
					}))
				},
				children: g.jsx(j, babelHelpers["extends"]({}, n, {
					ref: c
				}))
			})
		}
		return g.jsx(b("BaseRowItem.react"), babelHelpers["extends"]({}, l, {
			ref: c,
			useDeprecatedStyles: l.useDeprecatedStyles,
			xstyle: [h[e], i[d], l.xstyle],
			children: g.jsx(b("CometRowContext").Provider, {
				value: null,
				children: l.children
			})
		}))
	}
	var j = g.forwardRef(a);
	c = j;
	e.exports = c
}), null);