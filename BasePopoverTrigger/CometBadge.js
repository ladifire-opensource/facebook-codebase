__d("CometBadge.react", ["CometVisualCompletionAttributes", "React", "getCometBadgeColorStyle", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = b("React"),
		i = {
			isNoneProfileBadge: {
				marginEnd: "oi9244e8"
			},
			noBorder: {
				borderTop: "qu0x051f",
				borderEnd: "esr5mh6w",
				borderBottom: "e9989ue4",
				borderStart: "r7d6kgcz"
			},
			normalBorderRadius: {
				borderTopStartRadius: "s45kfl79",
				borderTopEndRadius: "emlxlaya",
				borderBottomEndRadius: "bkmhp75w",
				borderBottomStartRadius: "spb7xbtv"
			},
			root: {
				display: "pq6dq46d"
			}
		},
		j = (c = {}, c[6] = {
			borderTop: "kwemeocd",
			borderEnd: "e0rrvugb",
			borderBottom: "lfmhomfa",
			borderStart: "adqv2e8f",
			borderTopStartRadius: "mvn70rh2",
			borderTopEndRadius: "r6rkryf2",
			borderBottomEndRadius: "cvi9pl0g",
			borderBottomStartRadius: "ksibw66d",
			height: "am38r5jf",
			width: "mx9os10e"
		}, c[7] = {
			borderTop: "iwuwq2lu",
			borderEnd: "g5oefq77",
			borderBottom: "oo8ov1ci",
			borderStart: "ce1xcart",
			borderTopStartRadius: "jie7ef34",
			borderTopEndRadius: "t8v3mibo",
			borderBottomEndRadius: "ldrydxgt",
			borderBottomStartRadius: "hrzhd2cr",
			height: "ooasylqa",
			width: "c0wkt4kp"
		}, c[8] = {
			borderTop: "iwuwq2lu",
			borderEnd: "g5oefq77",
			borderBottom: "oo8ov1ci",
			borderStart: "ce1xcart",
			borderTopStartRadius: "jk6sbkaj",
			borderTopEndRadius: "kdgqqoy6",
			borderBottomEndRadius: "ihh4hy1g",
			borderBottomStartRadius: "qttc61fc",
			height: "t6na6p9t",
			width: "c9rrlmt1"
		}, c[9] = {
			borderTop: "iwuwq2lu",
			borderEnd: "g5oefq77",
			borderBottom: "oo8ov1ci",
			borderStart: "ce1xcart",
			borderTopStartRadius: "kn8bj0zk",
			borderTopEndRadius: "lw3puv1o",
			borderBottomEndRadius: "f10nsz7o",
			borderBottomStartRadius: "qxnma5zn",
			height: "fz6q6hdd",
			width: "sx90ovx5"
		}, c[10] = {
			borderTop: "iwuwq2lu",
			borderEnd: "g5oefq77",
			borderBottom: "oo8ov1ci",
			borderStart: "ce1xcart",
			borderTopStartRadius: "dwerhba3",
			borderTopEndRadius: "kgjeooe1",
			borderBottomEndRadius: "kxcb68kb",
			borderBottomStartRadius: "mwvzfrdb",
			height: "bsodd3zb",
			width: "xthkpp0z"
		}, c[12] = {
			borderTop: "iwuwq2lu",
			borderEnd: "g5oefq77",
			borderBottom: "oo8ov1ci",
			borderStart: "ce1xcart",
			borderTopStartRadius: "beltcj47",
			borderTopEndRadius: "p86d2i9g",
			borderBottomEndRadius: "aot14ch1",
			borderBottomStartRadius: "kzx2olss",
			height: "cyypbtt7",
			width: "fwizqjfa"
		}, c[14] = {
			borderTop: "iwuwq2lu",
			borderEnd: "g5oefq77",
			borderBottom: "oo8ov1ci",
			borderStart: "ce1xcart",
			borderTopStartRadius: "h1ci2mql",
			borderTopEndRadius: "mjfe6jtr",
			borderBottomEndRadius: "c6w6u7b1",
			borderBottomStartRadius: "hc21y3pz",
			height: "i4qgphn6",
			width: "gab7stmx"
		}, c[15] = {
			borderTop: "iwuwq2lu",
			borderEnd: "g5oefq77",
			borderBottom: "oo8ov1ci",
			borderStart: "ce1xcart",
			borderTopStartRadius: "a6h7caso",
			borderTopEndRadius: "jz6j5rt1",
			borderBottomEndRadius: "mg230der",
			borderBottomStartRadius: "t7cfk15d",
			height: "ed3p1gfi",
			width: "fhvfysw3"
		}, c[18] = {
			borderTop: "iwuwq2lu",
			borderEnd: "g5oefq77",
			borderBottom: "oo8ov1ci",
			borderStart: "ce1xcart",
			borderTopStartRadius: "t0qjyqq4",
			borderTopEndRadius: "jos75b7i",
			borderBottomEndRadius: "j6sty90h",
			borderBottomStartRadius: "kv0toi1t",
			height: "hm271qws",
			width: "ov9facns"
		}, c[20] = {
			borderTop: "q7z2992y",
			borderEnd: "dlurong2",
			borderBottom: "t9auik0z",
			borderStart: "drr2qr4a",
			borderTopStartRadius: "fni8adji",
			borderTopEndRadius: "hgaippwi",
			borderBottomEndRadius: "fykbt5ly",
			borderBottomStartRadius: "ns4ygwem",
			height: "jnigpg78",
			width: "odw8uiq3"
		}, c[22] = {
			borderTop: "q7z2992y",
			borderEnd: "dlurong2",
			borderBottom: "t9auik0z",
			borderStart: "drr2qr4a",
			borderTopStartRadius: "qw6c0r16",
			borderTopEndRadius: "kb8x4rkr",
			borderBottomEndRadius: "ed597pkb",
			borderBottomStartRadius: "omcyoz59",
			height: "p1ueia1e",
			width: "pgctjfs5"
		}, c[24] = {
			borderTop: "q7z2992y",
			borderEnd: "dlurong2",
			borderBottom: "t9auik0z",
			borderStart: "drr2qr4a",
			borderTopStartRadius: "lit7pgxp",
			borderTopEndRadius: "o3c63hce",
			borderBottomEndRadius: "hqlzco19",
			borderBottomStartRadius: "lsl2245n",
			height: "rgmg9uty",
			width: "b73ngqbp"
		}, c[32] = {
			borderTop: "q7z2992y",
			borderEnd: "dlurong2",
			borderBottom: "t9auik0z",
			borderStart: "drr2qr4a",
			borderTopStartRadius: "emml16de",
			borderTopEndRadius: "gmcszhul",
			borderBottomEndRadius: "ols5edhi",
			borderBottomStartRadius: "gob819ct",
			height: "k7cz35w2",
			width: "bsnbvmp4"
		}, c[41] = {
			borderTop: "q7z2992y",
			borderEnd: "dlurong2",
			borderBottom: "t9auik0z",
			borderStart: "drr2qr4a",
			borderTopStartRadius: "dak3gjt0",
			borderTopEndRadius: "to9glu75",
			borderBottomEndRadius: "mck1p2ct",
			borderBottomStartRadius: "e1qes44r",
			height: "c9yomchb",
			width: "chsygg5i"
		}, c),
		k = (d = {}, d[6] = {
			marginStart: "hytbnt81",
			width: "sx90ovx5"
		}, d[7] = {
			marginStart: "prsu3qqj",
			width: "bva0e6vj"
		}, d[8] = {
			marginStart: "kkf49tns",
			width: "fwizqjfa"
		}, d[9] = {
			marginStart: "gz69kkbn",
			width: "rj2mll0v"
		}, d[10] = {
			marginStart: "hnxzwevs",
			width: "fhvfysw3"
		}, d[12] = {
			marginStart: "ggphbty4",
			width: "ov9facns"
		}, d[14] = {
			marginStart: "gtad4xkn",
			width: "rgehdy3i"
		}, d[15] = {
			marginStart: "sj14oj9x",
			width: "cd5o6m78"
		}, d[18] = {
			marginStart: "dowus26g",
			width: "dly845st"
		}, d[20] = {
			marginStart: "gu00c43d",
			width: "la0tivve"
		}, d[22] = {
			marginStart: "no6464jc",
			width: "qlvp1f9n"
		}, d[24] = {
			marginStart: "ozuftl9m",
			width: "thwo4zme"
		}, d[32] = {
			marginStart: "dhix69tm",
			width: "tmrshh9y"
		}, d[41] = {
			marginStart: "qcvgcmnn",
			width: "lss6uy5u"
		}, d),
		l = (f = {}, f[6] = {
			marginStart: "ggphbty4",
			width: "fwizqjfa"
		}, f[7] = {
			marginStart: "gtad4xkn",
			width: "gab7stmx"
		}, f[8] = {
			marginStart: "h676nmdw",
			width: "hhz5lgdu"
		}, f[9] = {
			marginStart: "dowus26g",
			width: "ov9facns"
		}, f[10] = {
			marginStart: "gu00c43d",
			width: "odw8uiq3"
		}, f[12] = {
			marginStart: "ozuftl9m",
			width: "b73ngqbp"
		}, f[14] = {
			marginStart: "mww98ynv",
			width: "ciadx1gn"
		}, f[15] = {
			marginStart: "aoep172s",
			width: "la0tivve"
		}, f[18] = {
			marginStart: "audrk5ec",
			width: "thwo4zme"
		}, f[20] = {
			marginStart: "i0u1bx94",
			width: "q676j6op"
		}, f[22] = {
			marginStart: "mgyel2x5",
			width: "eim337gk"
		}, f[24] = {
			marginStart: "frluczxc",
			width: "tmrshh9y"
		}, f[32] = {
			marginStart: "t7yuvbsa",
			width: "nxfmr2wi"
		}, f[41] = {
			marginStart: "slxrqx5u",
			width: "t7sz67dt"
		}, f);

	function a(a) {
		var c = a.border;
		c = c === void 0 ? "none" : c;
		var d = a.children,
			e = a.color;
		e = e === void 0 ? "blue" : e;
		var f = a.isProfileBadge;
		f = f === void 0 ? !1 : f;
		var m = a.label,
			n = a.role,
			o = a.size;
		o = o === void 0 ? 8 : o;
		var p = a.wide;
		p = p === void 0 ? "normal" : p;
		return h.jsx("span", babelHelpers["extends"]({
			"aria-label": m,
			className: (g || (g = b("stylex")))(i.root, !f && i.isNoneProfileBadge, (m = a.colorOverride) != null ? m : b("getCometBadgeColorStyle")(e), j[o], p === "wide" && k[o], p === "extraWide" && l[o], p === "normal" && i.normalBorderRadius, c === "none" && i.noBorder)
		}, b("CometVisualCompletionAttributes").IGNORE, {
			role: n,
			children: d
		}))
	}
}), null);