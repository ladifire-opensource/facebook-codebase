__d("TetraishSkittleIcon.react", ["React", "TetraIcon.react", "profilePhotoUtils", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = b("React"),
		i = {
			circle: {
				borderTopStartRadius: "s45kfl79",
				borderTopEndRadius: "emlxlaya",
				borderBottomEndRadius: "bkmhp75w",
				borderBottomStartRadius: "spb7xbtv"
			},
			iconBadge: {
				alignItems: "bp9cbjyn",
				backgroundColor: "is6700om",
				borderTopColor: "np69z8it",
				borderEndColor: "et4y5ytx",
				borderBottomColor: "j7g94pet",
				borderStartColor: "b74d5cxt",
				borderTopStartRadius: "s45kfl79",
				borderTopEndRadius: "emlxlaya",
				borderBottomEndRadius: "bkmhp75w",
				borderBottomStartRadius: "spb7xbtv",
				borderTopStyle: "goun2846",
				borderEndStyle: "ccm00jje",
				borderBottomStyle: "s44p3ltw",
				borderStartStyle: "mk2mc5f4",
				borderTopWidth: "qxh1up0x",
				borderEndWidth: "qtyiw8t4",
				borderBottomWidth: "tpcyxxvw",
				borderStartWidth: "k0bpgpbk",
				display: "j83agx80",
				justifyContent: "taijpn5t",
				overflowX: "ni8dbmo4",
				overflowY: "stjgntxs",
				paddingTop: "jwdofwj8",
				paddingEnd: "n8tt0mok",
				paddingBottom: "r8blr3vg",
				paddingStart: "hyh9befq",
				position: "pmk7jnqg"
			},
			roundedRect: {
				borderTopStartRadius: "ue3kfks5",
				borderTopEndRadius: "pw54ja7n",
				borderBottomEndRadius: "uo3d90p7",
				borderBottomStartRadius: "l82x9zwi"
			},
			skittle: {
				alignItems: "bp9cbjyn",
				borderTopWidth: "rt8b4zig",
				borderEndWidth: "n8ej3o3l",
				borderBottomWidth: "agehan2d",
				borderStartWidth: "sk4xxmp2",
				boxSizing: "rq0escxv",
				display: "pq6dq46d",
				justifyContent: "taijpn5t",
				position: "l9j0dhe7"
			}
		},
		j = {
			accent: {
				backgroundColor: "is6700om"
			},
			blue: {
				backgroundColor: "nfl8ryma"
			},
			cherry: {
				backgroundColor: "cvgnql8j"
			},
			grape: {
				backgroundColor: "oxqh0ovx"
			},
			gray: {
				backgroundColor: "tdjehn4e"
			},
			green: {
				backgroundColor: "jllm4f4h"
			},
			lemon: {
				backgroundColor: "tutozmqo"
			},
			lightblue: {
				backgroundColor: "oo1teu6h"
			},
			lime: {
				backgroundColor: "x2my2bqz"
			},
			pink: {
				backgroundColor: "g1i5egrt"
			},
			red: {
				backgroundColor: "l44iypv3"
			},
			seafoam: {
				backgroundColor: "p43b5e0k"
			},
			teal: {
				backgroundColor: "gbrvaats"
			},
			tomato: {
				backgroundColor: "d8rukodm"
			},
			white: {
				backgroundColor: "q2y6ezfg"
			}
		},
		k = {
			36: {
				height: "tv7at329",
				width: "thwo4zme"
			},
			40: {
				height: "qypqp5cg",
				width: "q676j6op"
			},
			48: {
				height: "m7zwrmfr",
				width: "tmrshh9y"
			},
			56: {
				height: "e5d9fub0",
				width: "oeao4gh3"
			},
			60: {
				height: "cb02d2ww",
				width: "ljni7pan"
			}
		},
		l = (c = {}, c[36] = 20, c[40] = 24, c[48] = 24, c[56] = 24, c[60] = 24, c);

	function m(a) {
		switch (a) {
			case "gray":
				return "primary";
			case "white":
				return "primary";
			case "lightblue":
				return "highlight";
			default:
				return "white"
		}
	}

	function a(a) {
		var c = a.color,
			d = a.disabled;
		d = d === void 0 ? !1 : d;
		var e = a.icon,
			f = a.iconAria,
			n = a.iconBadge,
			o = a.iconBadgeAria,
			p = a.shape;
		p = p === void 0 ? "circle" : p;
		a = a.size;
		return h.jsxs("div", {
			className: (g || (g = b("stylex")))(p === "circle" && i.circle, p === "roundedRect" && i.roundedRect, i.skittle, j[c], k[a]),
			children: [h.jsx(b("TetraIcon.react"), babelHelpers["extends"]({}, f, {
				color: d ? "disabled" : m(c),
				icon: e,
				size: l[a]
			})), n && h.jsx("div", {
				className: (g || (g = b("stylex")))(i.iconBadge),
				style: b("profilePhotoUtils").getBadgePosition(a / 2),
				children: h.jsx(b("TetraIcon.react"), babelHelpers["extends"]({}, o, {
					color: "white",
					icon: n,
					size: 8
				}))
			})]
		})
	}
}), null);