__d("CometCard.react", ["BaseView.react", "React", "requireCond", "stylex", "cr:1393064"], (function (a, b, c, d, e, f) {
	"use strict";
	var g, h = b("React"),
		i = {
			"base-wash": {
				backgroundColor: "g6srhlxm"
			},
			"dark-wash": {
				backgroundColor: "ora8z2hr"
			},
			error: {
				backgroundColor: "l44iypv3"
			},
			highlight: {
				backgroundColor: "is6700om"
			},
			"light-wash": {
				backgroundColor: "qsy8amke"
			},
			transparent: {
				backgroundColor: "g5ia77u1"
			},
			white: {
				backgroundColor: "hybvsw6c"
			}
		},
		j = {
			borderHighlightAnimationOverlay: {
				animationDuration: "r8dsh44q",
				animationFillMode: "ev399l9o",
				animationName: "eu5xx32y",
				animationTimingFunction: "dq96nytm",
				borderTop: "iv6tldhd",
				borderEnd: "cg3hf2bh",
				borderBottom: "t4dffd6c",
				borderStart: "j130xd0i",
				borderTopStartRadius: "fni8adji",
				borderTopEndRadius: "hgaippwi",
				borderBottomEndRadius: "fykbt5ly",
				borderBottomStartRadius: "ns4ygwem",
				bottom: "eh5mwn1z",
				end: "s95d9cuy",
				pointerEvents: "hzruof5a",
				position: "pmk7jnqg",
				start: "pjqm3aaw",
				top: "ormqv51v",
				zIndex: "tkr6xdv7"
			},
			borderInset: {
				bottom: "i09qtzwb",
				boxSizing: "rq0escxv",
				end: "n7fi1qx3",
				position: "pmk7jnqg",
				start: "j9ispegn",
				top: "kr520xx4",
				borderTopStartRadius: "ue3kfks5",
				borderTopEndRadius: "pw54ja7n",
				borderBottomEndRadius: "uo3d90p7",
				borderBottomStartRadius: "l82x9zwi",
				boxShadow: "oaz4zybt",
				pointerEvents: "hzruof5a"
			},
			borderOnWash: {
				borderTopColor: "qbxu24ho",
				borderEndColor: "bxzzcbxg",
				borderBottomColor: "lxuwth05",
				borderStartColor: "h2mp5456"
			},
			borderOnWhite: {
				borderTopColor: "qbxu24ho",
				borderEndColor: "bxzzcbxg",
				borderBottomColor: "lxuwth05",
				borderStartColor: "h2mp5456"
			},
			borderSolid: {
				borderTopStyle: "goun2846",
				borderEndStyle: "ccm00jje",
				borderBottomStyle: "s44p3ltw",
				borderStartStyle: "mk2mc5f4",
				borderTopWidth: "frvqaej8",
				borderEndWidth: "ed0hlay0",
				borderBottomWidth: "afxsp9o4",
				borderStartWidth: "jcgfde61"
			},
			container: {
				display: "j83agx80",
				position: "l9j0dhe7",
				width: "k4urcfbm"
			},
			expanding: {
				flexGrow: "buofh1pr"
			},
			root: {
				borderTopStartRadius: "ue3kfks5",
				borderTopEndRadius: "pw54ja7n",
				borderBottomEndRadius: "uo3d90p7",
				borderBottomStartRadius: "l82x9zwi",
				overflowX: "ni8dbmo4",
				overflowY: "stjgntxs",
				width: "k4urcfbm"
			}
		},
		k = (c = {}, c[1] = {
			boxShadow: "sbcfpzgs"
		}, c[2] = {
			boxShadow: "kmp5kqmu"
		}, c);

	function a(a, c) {
		var d = a.background;
		d = d === void 0 ? "transparent" : d;
		var e = a.border;
		e = e === void 0 ? "none" : e;
		var f = a.borderHighlightAnimation;
		f = f === void 0 ? !1 : f;
		var l = a.children,
			m = a.dropShadow;
		m = m === void 0 ? 0 : m;
		var n = a.expanding;
		n = n === void 0 ? !1 : n;
		a = a.xstyle;
		m = k[m];
		return h.jsxs("div", {
			className: (g || (g = b("stylex")))(j.container, n && j.expanding),
			children: [h.jsx(b("BaseView.react"), {
				ref: c,
				style: {
					borderRadius: "max(0px, min(8px, calc((100vw - 4px - 100%) * 9999))) / 8px"
				},
				xstyle: [i[d], e === "solid" && d !== "white" && j.borderOnWash, e === "solid" && d === "white" && j.borderOnWhite, e === "solid" && j.borderSolid, j.root, m, a],
				children: l
			}), e === "inset" ? h.jsx("div", {
				className: (g || (g = b("stylex")))(j.borderInset)
			}) : null, f ? h.jsx("div", {
				className: (g || (g = b("stylex")))(j.borderHighlightAnimationOverlay)
			}) : null]
		})
	}
	f = (d = b("cr:1393064")/*NULL*/) != null ? d : h.forwardRef(a);
	e.exports = f
}), null);