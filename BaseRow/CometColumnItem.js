__d("CometColumnItem.react", ["BaseView.react", 
	"CometColumnContext", 
	"CometErrorBoundary.react", 
	"CometPlaceholder.react", "React", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		h = {
			divider: {
				borderTopColor: "qbxu24ho",
				borderTopStyle: "goun2846",
				borderTopWidth: "frvqaej8",
				":first-child": {
					display: "jpp8pzdo"
				}
			},
			expanding: {
				flexBasis: "d8ncny3e",
				flexGrow: "buofh1pr",
				flexShrink: "g5gj957u",
				minHeight: "tgvbjcpo"
			},
			root: {
				display: "j83agx80",
				flexDirection: "cbu4d94t",
				flexShrink: "pfnyh3mw",
				maxWidth: "d2edcug0"
			}
		},
		i = {
			center: {
				alignItems: "bp9cbjyn"
			},
			end: {
				alignItems: "aovydwv3"
			},
			start: {
				alignItems: "ll8tlv6m"
			}
		},
		j = {
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
			},
			20: {
				paddingEnd: "gl4o1x5y",
				paddingStart: "lt9micmv"
			}
		},
		k = {
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
		l = {
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
		m = {
			4: {
				marginTop: "rs0gx3tq",
				marginBottom: "dicw6rsg"
			},
			8: {
				marginTop: "aahdfvyu",
				marginBottom: "tvmbv18p"
			},
			12: {
				marginTop: "qjjbsfad",
				marginBottom: "w0hvl6rk"
			},
			16: {
				marginTop: "aov4n071",
				marginBottom: "bi6gxh9e"
			},
			20: {
				marginTop: "ku2m03ct",
				marginBottom: "oud54xpy"
			}
		},
		n = {
			bottom: {
				justifyContent: "bkfpd7mw"
			},
			center: {
				justifyContent: "taijpn5t"
			},
			"space-between": {
				justifyContent: "i1fnvgqd"
			}
		},
		o = {
			4: {
				marginEnd: "cgat1ltu",
				marginStart: "kkf49tns"
			},
			8: {
				marginEnd: "oi9244e8",
				marginStart: "h676nmdw"
			},
			12: {
				marginEnd: "tvfksri0",
				marginStart: "ozuftl9m"
			},
			16: {
				marginEnd: "wkznzc2l",
				marginStart: "dhix69tm"
			},
			20: {
				marginEnd: "m8hsej2k",
				marginStart: "i0u1bx94"
			}
		};

	function a(a, c) {
		var d, e, f;
		d = (d = g.useContext(b("CometColumnContext"))) != null ? d : {};
		var q = a.align;
		e = q === void 0 ? (e = d.align) != null ? e : "stretch" : q;
		q = a.children;
		var r = a.expanding;
		r = r === void 0 ? !1 : r;
		var s = a.fallback,
			t = a.paddingHorizontal;
		f = t === void 0 ? (f = d.paddingHorizontal) != null ? f : 0 : t;
		t = a.paddingTop;
		var u = a.paddingVertical;
		u = u === void 0 ? 0 : u;
		var v = a.placeholder,
			w = a.verticalAlign;
		w = w === void 0 ? "top" : w;
		var x = babelHelpers.objectWithoutPropertiesLoose(a, ["align", "children", "expanding", "fallback", "paddingHorizontal", "paddingTop", "paddingVertical", "placeholder", "verticalAlign"]);
		if (v !== void 0) {
			a.placeholder;
			var y = babelHelpers.objectWithoutPropertiesLoose(a, ["placeholder"]);
			return g.jsx(b("CometPlaceholder.react"), {
				fallback: v != null ? g.jsx(p, babelHelpers["extends"]({}, y, {
					ref: c,
					children: v
				})) : null,
				children: g.jsx(p, babelHelpers["extends"]({}, y, {
					ref: c
				}))
			})
		}
		if (s !== void 0) {
			a.fallback;
			var z = babelHelpers.objectWithoutPropertiesLoose(a, ["fallback"]);
			return s === null ? g.jsx(b("CometErrorBoundary.react"), {
				children: g.jsx(p, babelHelpers["extends"]({}, z, {
					ref: c
				}))
			}) : g.jsx(b("CometErrorBoundary.react"), {
				fallback: function (a, b) {
					return g.jsx(p, babelHelpers["extends"]({}, z, {
						ref: c,
						children: typeof s === "function" ? s(a, b) : s
					}))
				},
				children: g.jsx(p, babelHelpers["extends"]({}, z, {
					ref: c
				}))
			})
		}
		return g.jsxs(g.Fragment, {
			children: [d.hasDividers === !0 && g.jsx(b("BaseView.react"), {
				role: "separator",
				xstyle: [h.divider, o[(v = d.paddingHorizontal) != null ? v : 0]]
			}), g.jsx(b("BaseView.react"), babelHelpers["extends"]({}, x, {
				ref: c,
				xstyle: [h.root, r && h.expanding, e !== "stretch" && i[e], w !== "top" && n[w], d.spacing != null && m[d.spacing], j[f], l[u], t != null && k[t], a.xstyle],
				children: g.jsx(b("CometColumnContext").Provider, {
					value: null,
					children: q
				})
			}))]
		})
	}
	var p = g.forwardRef(a);
	c = p;
	e.exports = c
}), null);