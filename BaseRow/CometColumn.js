__d("CometColumn.react", ["BaseView.react", "CometColumnContext", 
	"CometColumnItem.react", "React", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		h = {
			expanding: {
				flexBasis: "d8ncny3e",
				flexGrow: "buofh1pr",
				flexShrink: "g5gj957u",
				minHeight: "tgvbjcpo"
			},
			inner: {
				display: "j83agx80",
				flexDirection: "cbu4d94t",
				flexGrow: "buofh1pr",
				minHeight: "tgvbjcpo"
			},
			root: {
				display: "j83agx80",
				flexDirection: "cbu4d94t",
				flexShrink: "pfnyh3mw"
			}
		},
		i = {
			4: {
				marginTop: "hop8lmos",
				marginBottom: "scwd0bx6"
			},
			8: {
				marginTop: "muag1w35",
				marginBottom: "enqfppq2"
			},
			12: {
				marginTop: "hddg9phg",
				marginBottom: "mysgfdmx"
			},
			16: {
				marginTop: "sv5sfqaa",
				marginBottom: "obtkqiv7"
			},
			20: {
				marginTop: "o7xrwllt",
				marginBottom: "quq7zyon"
			}
		},
		j = {
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
			},
			20: {
				paddingTop: "aodizinl"
			}
		},
		k = {
			4: {
				paddingTop: "ecm0bbzt",
				paddingBottom: "e5nlhep0"
			},
			8: {
				paddingTop: "cxgpxx05",
				paddingBottom: "sj5x9vvc"
			},
			12: {
				paddingTop: "pybr56ya",
				paddingBottom: "f10w8fjw"
			},
			16: {
				paddingTop: "discj3wi",
				paddingBottom: "ihqw7lf3"
			},
			20: {
				paddingTop: "aodizinl",
				paddingBottom: "ofv0k9yr"
			}
		},
		l = {
			bottom: {
				justifyContent: "bkfpd7mw"
			},
			center: {
				justifyContent: "taijpn5t"
			},
			"space-between": {
				justifyContent: "i1fnvgqd"
			}
		};

	function a(a, c) {
		var d = a.align,
			e = d === void 0 ? null : d;
		d = a.children;
		var f = a.expanding;
		f = f === void 0 ? !1 : f;
		var m = a.hasDividers,
			n = m === void 0 ? !1 : m;
		m = a.paddingHorizontal;
		var o = m === void 0 ? null : m;
		m = a.paddingTop;
		var p = a.paddingVertical;
		p = p === void 0 ? 0 : p;
		var q = a.spacing,
			r = q === void 0 ? null : q;
		q = a.verticalAlign;
		q = q === void 0 ? "top" : q;
		var s = a.xstyle;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["align", "children", "expanding", "hasDividers", "paddingHorizontal", "paddingTop", "paddingVertical", "spacing", "verticalAlign", "xstyle"]);
		var t = g.useContext(b("CometColumnContext")),
			u = g.useMemo(function () {
				return {
					align: e,
					hasDividers: n,
					paddingHorizontal: o,
					spacing: r
				}
			}, [e, n, o, r]);
		a = g.jsx(b("BaseView.react"), babelHelpers["extends"]({}, a, {
			ref: c,
			xstyle: [h.root, f && h.expanding, k[p], m != null && j[m], s],
			children: g.jsx(b("BaseView.react"), {
				xstyle: [h.inner, i[r], q !== "top" && l[q]],
				children: g.jsx(b("CometColumnContext").Provider, {
					value: u,
					children: d
				})
			})
		}));
		return t != null ? g.jsx(b("CometColumnItem.react"), {
			expanding: f,
			children: a
		}) : a
	}
	c = g.forwardRef(a);
	d = c;
	e.exports = d
}), null);