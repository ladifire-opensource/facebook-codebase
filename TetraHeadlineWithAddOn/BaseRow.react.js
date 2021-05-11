__d("BaseRow.react", ["React", "BaseRowContext", "BaseView.react", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		h = {
			expanding: {
				flexBasis: "rj1gh0hx",
				flexGrow: "buofh1pr",
				flexShrink: "g5gj957u",
				minWidth: "hpfvmrgz"
			},
			row: {
				display: "j83agx80",
				flexShrink: "pfnyh3mw"
			}
		},
		i = {
			center: {
				justifyContent: "taijpn5t"
			},
			end: {
				justifyContent: "bkfpd7mw"
			},
			justify: {
				justifyContent: "i1fnvgqd"
			},
			start: {
				justifyContent: "jifvfom9"
			}
		},
		j = {
			center: {
				alignItems: "bp9cbjyn"
			},
			end: {
				alignItems: "aovydwv3"
			},
			start: {
				alignItems: "ll8tlv6m"
			},
			stretch: {
				alignItems: "gs1a9yip"
			}
		},
		k = {
			backward: {
				flexDirection: "rl25f0pe"
			},
			forward: {
				flexDirection: "btwxx1t3"
			}
		},
		l = {
			backward: {
				flexWrap: "kbz25j0m"
			},
			forward: {
				flexWrap: "lhclo0ds"
			},
			none: {
				flexWrap: "owycx6da"
			}
		},
		m = {
			end: "start",
			start: "end"
		};

	function a(a, c) {
		var d = a.align;
		d = d === void 0 ? "justify" : d;
		var e = a.children,
			f = a.columns,
			n = f === void 0 ? 0 : f;
		f = a.direction;
		f = f === void 0 ? "forward" : f;
		var o = a.expanding;
		o = o === void 0 ? !1 : o;
		var p = a.verticalAlign;
		p = p === void 0 ? "stretch" : p;
		var q = a.wrap,
			r = q === void 0 ? "none" : q;
		q = a.xstyle;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["align", "children", "columns", "direction", "expanding", "verticalAlign", "wrap", "xstyle"]);
		var s = g.useMemo(function () {
			return {
				columns: n,
				wrap: r
			}
		}, [n, r]);
		return g.jsx(b("BaseView.react"), babelHelpers["extends"]({}, a, {
			ref: c,
			xstyle: [h.row, o && h.expanding, i[f === "backward" && (d === "start" || d === "end") ? m[d] : d], j[p], l[r], k[f], q],
			children: g.jsx(b("BaseRowContext").Provider, {
				value: s,
				children: e
			})
		}))
	}
	c = g.forwardRef(a);
	e.exports = c
}), null);