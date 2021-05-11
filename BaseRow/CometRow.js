__d("CometRow.react", ["BaseRow.react", 
	"CometColumnContext", 
	"CometColumnItem.react", 
	"CometRowContext", 
	"CometRowItem.react", 
	"React", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		h = {
			4: {
				paddingEnd: "ph5uu5jm",
				paddingStart: "b3onmgus"
			},
			8: {
				paddingEnd: "dflh9lhu",
				paddingStart: "scb9dxdr"
			},
			12: {
				paddingEnd: "d1544ag0",
				paddingStart: "tw6a2znq"
			},
			16: {
				paddingEnd: "hv4rvrfc",
				paddingStart: "dati1w0a"
			}
		},
		i = {
			0: {
				paddingTop: "jb3vyjys"
			},
			4: {
				paddingTop: "ecm0bbzt"
			},
			8: {
				paddingTop: "cxgpxx05"
			},
			12: {
				paddingTop: "pybr56ya"
			},
			16: {
				paddingTop: "discj3wi"
			}
		},
		j = {
			4: {
				paddingBottom: "e5nlhep0",
				paddingTop: "ecm0bbzt"
			},
			8: {
				paddingBottom: "sj5x9vvc",
				paddingTop: "cxgpxx05"
			},
			12: {
				paddingBottom: "f10w8fjw",
				paddingTop: "pybr56ya"
			},
			16: {
				paddingBottom: "ihqw7lf3",
				paddingTop: "discj3wi"
			}
		},
		k = {
			4: {
				marginEnd: "nkwizq5d",
				marginStart: "roh60bw9"
			},
			8: {
				marginEnd: "dlv3wnog",
				marginStart: "rl04r1d5"
			},
			12: {
				marginEnd: "b5q2rw42",
				marginStart: "lq239pai"
			},
			16: {
				marginEnd: "o22cckgh",
				marginStart: "fop5sh7t"
			}
		},
		l = {
			4: {
				marginBottom: "scwd0bx6",
				marginTop: "hop8lmos"
			},
			8: {
				marginBottom: "enqfppq2",
				marginTop: "muag1w35"
			},
			12: {
				marginBottom: "mysgfdmx",
				marginTop: "hddg9phg"
			},
			16: {
				marginBottom: "obtkqiv7",
				marginTop: "sv5sfqaa"
			}
		};

	function a(a, c) {
		var d = g.useContext(b("CometColumnContext")),
			e = g.useContext(b("CometRowContext")),
			f = (d == null ? void 0 : d.paddingHorizontal) != null ? 0 : 12,
			m = (d == null ? void 0 : d.spacing) != null ? 0 : 16,
			n = a.children,
			o = a.paddingHorizontal;
		f = o === void 0 ? f : o;
		o = a.paddingVertical;
		o = o === void 0 ? 0 : o;
		var p = a.paddingTop;
		m = p === void 0 ? a.paddingVertical == null ? m : null : p;
		p = a.spacing;
		p = p === void 0 ? 12 : p;
		var q = a.spacingHorizontal,
			r = q === void 0 ? p : q;
		q = a.spacingVertical;
		var s = q === void 0 ? p : q;
		p = a.xstyle;
		q = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "paddingHorizontal", "paddingVertical", "paddingTop", "spacing", "spacingHorizontal", "spacingVertical", "xstyle"]);
		a = g.useMemo(function () {
			return {
				spacingHorizontal: r,
				spacingVertical: s
			}
		}, [r, s]);
		c = g.jsx(b("BaseRow.react"), babelHelpers["extends"]({}, q, {
			ref: c,
			xstyle: [h[f], j[o], m != null && i[m], k[r], l[s], p],
			children: g.jsx(b("CometRowContext").Provider, {
				value: a,
				children: n
			})
		}));
		if (e != null) return g.jsx(b("CometRowItem.react"), {
			expanding: q.expanding,
			children: c
		});
		return d != null ? g.jsx(b("CometColumnItem.react"), {
			expanding: q.expanding,
			children: c
		}) : c
	}
	c = g.forwardRef(a);
	d = c;
	e.exports = d
}), null);