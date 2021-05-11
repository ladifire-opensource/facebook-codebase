__d("TetraTextPairing.react", ["React", "TetraHeadlineWithAddOn.react", "TetraText.react", "getTetraTextHierarchyStyle", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = b("React"),
		i = {
			item: {
				marginBottom: "qzhwtbm6",
				marginTop: "knvmm38d"
			},
			root: {
				display: "j83agx80",
				flexDirection: "cbu4d94t",
				marginBottom: "ew0dbk1b",
				marginTop: "irj2b8pg"
			}
		},
		j = {
			1: {
				marginBottom: "q9se6cdp",
				marginTop: "p984guvr"
			},
			2: {
				marginBottom: "mysgfdmx",
				marginTop: "hddg9phg"
			},
			entityHeader1: {
				marginBottom: "obtkqiv7",
				marginTop: "sv5sfqaa"
			},
			entityHeader2: {
				marginBottom: "obtkqiv7",
				marginTop: "sv5sfqaa"
			}
		},
		k = {
			1: {
				marginBottom: "px9k8yfb",
				marginTop: "hk9dxy2p"
			},
			2: {
				marginBottom: "w0hvl6rk",
				marginTop: "qjjbsfad"
			},
			entityHeader1: {
				marginBottom: "bi6gxh9e",
				marginTop: "aov4n071"
			},
			entityHeader2: {
				marginBottom: "bi6gxh9e",
				marginTop: "aov4n071"
			}
		};

	function a(a) {
		var c = a.body,
			d = a.bodyColor;
		d = d === void 0 ? "primary" : d;
		var e = a.bodyLineLimit,
			f = a.bodyRef,
			l = a.headline,
			m = a.headlineAddOn,
			n = a.headlineColor;
		n = n === void 0 ? "primary" : n;
		var o = a.headlineLineLimit,
			p = a.headlineRef,
			q = a.isSemanticHeading,
			r = a.level,
			s = a.meta,
			t = a.metaColor;
		t = t === void 0 ? "secondary" : t;
		var u = a.metaLineLimit,
			v = a.metaLocation;
		v = v === void 0 ? "below" : v;
		var w = a.metaRef,
			x = a.reduceEmphasis;
		x = x === void 0 ? !1 : x;
		var y = a.testid;
		y = a.textAlign;
		a = y === void 0 ? "start" : y;
		y = b("getTetraTextHierarchyStyle")(r, x);
		x = y.bodyType;
		var z = y.headlineType;
		y = y.metaType;
		var A = (g || (g = b("stylex")))(i.item, k[r]);
		m = l != null && h.jsx("div", {
			className: A,
			children: m != null ? h.jsx(b("TetraHeadlineWithAddOn.react"), {
				addOn: m,
				color: n,
				headlineRef: p,
				isSemanticHeading: q,
				numberOfLines: o,
				type: z,
				children: l
			}) : h.jsx(b("TetraText.react"), {
				align: a,
				color: n,
				isSemanticHeading: q,
				numberOfLines: o,
				ref: p,
				type: z,
				children: l
			})
		});
		n = s != null && h.jsx("div", {
			className: A,
			children: h.jsx(b("TetraText.react"), {
				align: a,
				color: t,
				isSemanticHeading: q,
				numberOfLines: u,
				ref: w,
				type: y,
				children: s
			})
		});
		return h.jsxs("div", {
			className: g(i.root, j[r]),
			"data-testid": void 0,
			children: [v === "above" && n, m, c != null && h.jsx("div", {
				className: A,
				children: h.jsx(b("TetraText.react"), {
					align: a,
					color: d,
					isSemanticHeading: !1,
					numberOfLines: e,
					ref: f,
					type: x,
					children: c
				})
			}), v === "below" && n]
		})
	}
}), null);