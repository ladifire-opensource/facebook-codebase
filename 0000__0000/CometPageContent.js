__d("CometSVGIcon.react", ["React", "stylex", "useCometUniqueID"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = b("React"),
		i = {
			icon: {
				display: "a8c37x1j",
				transitionDuration: "ms05siws",
				transitionProperty: "hwsy1cff",
				transitionTimingFunction: "b7h9ocf4"
			},
			inline: {
				display: "q9uorilb"
			},
			shadow: {
				filter: "kzkm17cn"
			}
		},
		j = (c = {}, c[8] = {
			height: "t6na6p9t",
			width: "c9rrlmt1"
		}, c[10] = {
			height: "bsodd3zb",
			width: "xthkpp0z"
		}, c[12] = {
			height: "cyypbtt7",
			width: "fwizqjfa"
		}, c[16] = {
			height: "gl3lb2sf",
			width: "hhz5lgdu"
		}, c[18] = {
			height: "hm271qws",
			width: "ov9facns"
		}, c[20] = {
			height: "jnigpg78",
			width: "odw8uiq3"
		}, c[24] = {
			height: "rgmg9uty",
			width: "b73ngqbp"
		}, c[28] = {
			height: "mudddibn",
			width: "ciadx1gn"
		}, c[30] = {
			height: "orb7ywq3",
			width: "la0tivve"
		}, c[32] = {
			height: "k7cz35w2",
			width: "bsnbvmp4"
		}, c[36] = {
			height: "tv7at329",
			width: "thwo4zme"
		}, c[40] = {
			height: "qypqp5cg",
			width: "q676j6op"
		}, c[48] = {
			height: "m7zwrmfr",
			width: "tmrshh9y"
		}, c[52] = {
			height: "pi1r6xr4",
			width: "i8j84fko"
		}, c[56] = {
			height: "e5d9fub0",
			width: "oeao4gh3"
		}, c[60] = {
			height: "cb02d2ww",
			width: "ljni7pan"
		}, c[72] = {
			height: "rdkrh8wx",
			width: "orwu60u2"
		}, c[112] = {
			height: "dqmwjwen",
			width: "ooia0uwo"
		}, c[132] = {
			height: "ijttq3ge",
			width: "qvlc8xm6"
		}, c),
		k = {
			"active-tab": {
				fill: "aaxa7vy3"
			},
			black: {
				fill: "tiu6v23u"
			},
			blueLink: {
				fill: "enejjlrx"
			},
			disabled: {
				fill: "crt8y2ji"
			},
			highlight: {
				fill: "eltiug27"
			},
			"inactive-tab": {
				fill: "em6zcovv"
			},
			negative: {
				fill: "qe9egaru"
			},
			positive: {
				fill: "p5kwug6e"
			},
			primary: {
				fill: "fzdkajry"
			},
			secondary: {
				fill: "em6zcovv"
			},
			tertiary: {
				fill: "m50y4xls"
			},
			warning: {
				fill: "o9pvk78o"
			},
			white: {
				fill: "p361ku9c"
			}
		};

	function a(a) {
		var c = b("useCometUniqueID")();
		if (a.viewBox === void 0) {
			a.alt;
			var d = a.color,
				e = a.component,
				f = a.inline;
			f = f === void 0 ? !1 : f;
			var l = a.shadow;
			l = l === void 0 ? !1 : l;
			var m = a.size;
			e = e;
			return h.jsx(e, {
				className: (g || (g = b("stylex")))([i.icon, f && i.inline, l && i.shadow, k[d], j[m]])
			})
		} else {
			e = a.children;
			f = a.color;
			l = a.inline;
			d = l === void 0 ? !1 : l;
			m = a.shadow;
			l = m === void 0 ? !1 : m;
			m = a.size;
			a = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "color", "inline", "shadow", "size"]);
			var n = [],
				o;
			f != null && typeof f !== "string" && h.isValidElement(f) && (n.push(h.cloneElement(f, {
				id: c,
				key: c,
				suppressHydrationWarning: !0
			})), o = "url(#" + c + ")");
			return h.jsxs("svg", babelHelpers["extends"]({}, a, {
				className: (g || (g = b("stylex")))([i.icon, d && i.inline, l && i.shadow, typeof f === "string" && f !== "black" && k[f]]),
				fill: o,
				height: m,
				suppressHydrationWarning: !0,
				width: m,
				children: [n.length > 0 ? h.jsx("defs", {
					children: n
				}) : void 0, e]
			}))
		}
	}
}), null);