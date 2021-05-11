__d("TetraTextTypography", ["cx", "UserAgent", "stylex"], (function (a, b, c, d, e, f, g) {
	"use strict";
	var h = {
			apple: {
				MozOsxFontSmoothing: "oi732d6d",
				WebkitFontSmoothing: "ik7dh3pa",
				fontFamily: "fgxwclzu"
			},
			"default": {
				fontFamily: "gk29lw5a"
			},
			segoe: {
				fontFamily: "rrkovp55"
			}
		},
		i = {
			body1: {
				fontFamily: h["default"],
				fontSize: 20,
				fontWeight: "normal",
				lineHeight: 24,
				offsets: [4, 5]
			},
			body2: {
				fontFamily: h["default"],
				fontSize: 17,
				fontWeight: "normal",
				lineHeight: 20,
				offsets: [3, 5]
			},
			body3: {
				fontFamily: h["default"],
				fontSize: 15,
				fontWeight: "normal",
				lineHeight: 20,
				offsets: [4, 5]
			},
			body4: {
				fontFamily: h["default"],
				fontSize: 13,
				fontWeight: "normal",
				lineHeight: 16,
				offsets: [3, 4]
			},
			bodyLink1: {
				fontFamily: h["default"],
				fontSize: 20,
				fontWeight: "semibold",
				lineHeight: 24,
				offsets: [4, 5]
			},
			bodyLink2: {
				fontFamily: h["default"],
				fontSize: 17,
				fontWeight: "semibold",
				lineHeight: 20,
				offsets: [3, 5]
			},
			bodyLink3: {
				fontFamily: h["default"],
				fontSize: 15,
				fontWeight: "semibold",
				lineHeight: 20,
				offsets: [4, 5]
			},
			bodyLink4: {
				fontFamily: h["default"],
				fontSize: 13,
				fontWeight: "semibold",
				lineHeight: 16,
				offsets: [3, 4]
			},
			button1: {
				fontFamily: h["default"],
				fontSize: 17,
				fontWeight: "semibold",
				lineHeight: 20,
				offsets: [3, 5]
			},
			button2: {
				fontFamily: h["default"],
				fontSize: 15,
				fontWeight: "semibold",
				lineHeight: 20,
				offsets: [4, 5]
			},
			entityHeaderHeadline1: {
				fontFamily: h["default"],
				fontSize: 32,
				fontWeight: "bold",
				lineHeight: 38,
				offsets: [7, 8]
			},
			entityHeaderHeadline2: {
				fontFamily: h["default"],
				fontSize: 28,
				fontWeight: "bold",
				lineHeight: 32,
				offsets: [5, 7]
			},
			entityHeaderMeta1: {
				defaultColor: "secondary",
				fontFamily: h["default"],
				fontSize: 15,
				fontWeight: "bold",
				lineHeight: 20,
				offsets: [4, 5]
			},
			entityHeaderMeta2: {
				defaultColor: "secondary",
				fontFamily: h["default"],
				fontSize: 15,
				fontWeight: "bold",
				lineHeight: 20,
				offsets: [4, 5]
			},
			headline3: {
				fontFamily: h["default"],
				fontSize: 17,
				fontWeight: "medium",
				lineHeight: 20,
				offsets: [3, 5]
			},
			headline4: {
				fontFamily: h["default"],
				fontSize: 15,
				fontWeight: "medium",
				lineHeight: 20,
				offsets: [4, 5]
			},
			headlineEmphasized1: {
				fontFamily: h["default"],
				fontSize: 24,
				fontWeight: "bold",
				lineHeight: 28,
				offsets: [5, 6]
			},
			headlineEmphasized2: {
				fontFamily: h["default"],
				fontSize: 20,
				fontWeight: "bold",
				lineHeight: 24,
				offsets: [4, 5]
			},
			headlineEmphasized3: {
				fontFamily: h["default"],
				fontSize: 17,
				fontWeight: "semibold",
				lineHeight: 20,
				offsets: [3, 4]
			},
			headlineEmphasized4: {
				fontFamily: h["default"],
				fontSize: 15,
				fontWeight: "semibold",
				lineHeight: 20,
				offsets: [4, 5]
			},
			meta1: {
				defaultColor: "secondary",
				fontFamily: h["default"],
				fontSize: 13,
				fontWeight: "semibold",
				lineHeight: 16,
				offsets: [3, 4]
			},
			meta2: {
				defaultColor: "secondary",
				fontFamily: h["default"],
				fontSize: 13,
				fontWeight: "semibold",
				lineHeight: 16,
				offsets: [3, 4]
			},
			meta3: {
				defaultColor: "secondary",
				fontFamily: h["default"],
				fontSize: 13,
				fontWeight: "normal",
				lineHeight: 16,
				offsets: [3, 4]
			},
			meta4: {
				defaultColor: "secondary",
				fontFamily: h["default"],
				fontSize: 12,
				fontWeight: "normal",
				lineHeight: 16,
				offsets: [3, 4]
			}
		},
		j = [
			["body1", [5, 5]],
			["body2", [4, 4]],
			["body3", [4, 4]],
			["body4", [4, 3]],
			["bodyLink1", [5, 5]],
			["bodyLink2", [4, 4]],
			["bodyLink3", [4, 4]],
			["bodyLink4", [4, 3]],
			["button1", [4, 4]],
			["button2", [4, 4]],
			["entityHeaderHeadline1", [8, 7]],
			["entityHeaderHeadline2", [6, 6]],
			["entityHeaderMeta1", [4, 4]],
			["entityHeaderMeta2", [4, 4]],
			["headline3", [4, 4]],
			["headline4", [4, 4]],
			["headlineEmphasized1", [6, 5]],
			["headlineEmphasized2", [5, 5]],
			["headlineEmphasized3", [4, 4]],
			["headlineEmphasized4", [4, 4]],
			["meta1", [4, 3]],
			["meta2", [4, 3]],
			["meta3", [4, 3]],
			["meta4", [3, 3]]
		],
		k = [
			["body1", [5, 5]],
			["body2", [4, 4]],
			["body3", [5, 4]],
			["body4", [4, 3]],
			["bodyLink1", [6, 4]],
			["bodyLink2", [4, 3]],
			["bodyLink3", [5, 4]],
			["bodyLink4", [4, 3]],
			["button1", [4, 3]],
			["button2", [5, 4]],
			["entityHeaderHeadline1", [8, 7]],
			["entityHeaderHeadline2", [7, 5]],
			["entityHeaderMeta1", [5, 4]],
			["entityHeaderMeta2", [5, 4]],
			["headline3", [5, 3]],
			["headline4", [5, 4]],
			["headlineEmphasized1", [6, 5]],
			["headlineEmphasized2", [6, 4]],
			["headlineEmphasized3", [4, 3]],
			["headlineEmphasized4", [5, 4]],
			["meta1", [4, 3]],
			["meta2", [4, 3]],
			["meta3", [4, 3]],
			["meta4", [4, 3]]
		],
		l = [
			["body1", [6, 4, 1]],
			["body2", [5, 3, 1]],
			["body3", [5, 4]],
			["body4", [4, 3, 1]],
			["bodyLink1", [6, 4, 1]],
			["bodyLink2", [5, 3, 1]],
			["bodyLink3", [5, 4]],
			["bodyLink4", [4, 3, 1]],
			["button1", [5, 3, 1]],
			["button2", [5, 4]],
			["entityHeaderHeadline1", [10, 6, 2]],
			["entityHeaderHeadline2", [8, 5, 3]],
			["entityHeaderMeta1", [5, 4, 1]],
			["entityHeaderMeta2", [5, 4, 1]],
			["headline3", [5, 3, 1]],
			["headline4", [5, 4]],
			["headlineEmphasized1", [7, 4, 2]],
			["headlineEmphasized2", [6, 4, 2]],
			["headlineEmphasized3", [5, 3, 1]],
			["headlineEmphasized4", [5, 4]],
			["meta1", [4, 3, 1]],
			["meta2", [4, 3, 1]],
			["meta3", [4, 3, 1]],
			["meta4", [4, 3]]
		];

	function m() {
		if (b("UserAgent").isPlatform("Windows >= 6")) return {
			fontFamily: h.segoe,
			offsets: l
		};
		return b("UserAgent").isPlatform("Mac OS X >= 10.11") && !b("UserAgent").isBrowser("Firefox < 55") || b("UserAgent").isPlatform("iOS >= 9") ? {
			fontFamily: h.apple,
			offsets: b("UserAgent").isEngine("Gecko") ? k : j
		} : null
	}

	function a() {
		var a = m();
		if (a != null) {
			var b = a.fontFamily;
			a = a.offsets;
			a = new Map(a);
			var c = babelHelpers["extends"]({}, i);
			a.forEach(function (a, d) {
				c[d] = babelHelpers["extends"]({}, c[d], {
					fontFamily: b,
					offsets: a
				})
			});
			return c
		}
		return i
	}
	c = a();
	e.exports = c
}), null);