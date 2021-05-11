__d("TetraCircleButton.react", ["CometPressable.react", 
	"CometPressableOverlay.react", 
	"React", "TetraIcon.react", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		h = {
			pressableOverlayPressed: {
				backgroundColor: "sx5rzos5"
			},
			pressed: {
				transform: "mtfd0dr2"
			},
			root: {
				alignItems: "bp9cbjyn",
				borderTopStartRadius: "s45kfl79",
				borderTopEndRadius: "emlxlaya",
				borderBottomEndRadius: "bkmhp75w",
				borderBottomStartRadius: "spb7xbtv",
				borderTopWidth: "rt8b4zig",
				borderEndWidth: "n8ej3o3l",
				borderBottomWidth: "agehan2d",
				borderStartWidth: "sk4xxmp2",
				boxSizing: "rq0escxv",
				display: "j83agx80",
				justifyContent: "taijpn5t",
				paddingTop: "jb3vyjys",
				paddingEnd: "rz4wbd8a",
				paddingBottom: "qt6c0cv9",
				paddingStart: "a8nywdso",
				position: "l9j0dhe7"
			}
		},
		i = (c = {}, c[24] = {
			height: "rgmg9uty",
			width: "b73ngqbp"
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
		}, c),
		j = {
			"dark-overlay": {
				backgroundColor: "d6rk862h",
				color: "ljqsnud1"
			},
			deemphasized: {
				backgroundColor: "g5ia77u1"
			},
			"deemphasized-overlay": {
				backgroundColor: "oo1teu6h"
			},
			normal: {
				backgroundColor: "tdjehn4e"
			},
			overlay: {
				backgroundColor: "hn33210v",
				boxShadow: "m7msyxje",
				color: "m9osqain"
			},
			overlayRaised: {
				boxShadow: "eh3q2ans"
			},
			"primary-background-overlay": {
				backgroundColor: "s1i5eluu"
			}
		},
		k = {
			"dark-overlay": {
				backgroundColor: "g5ia77u1",
				boxShadow: "t8kjxa8s",
				color: "pipptul6",
				opacity: "l8rlqa9s"
			},
			deemphasized: {
				backgroundColor: "g5ia77u1"
			},
			"deemphasized-overlay": {
				backgroundColor: "cubx1xtm"
			},
			normal: {
				backgroundColor: "c98fg2ug"
			},
			overlay: {
				backgroundColor: "gx53z0jk",
				borderTopWidth: "rt8b4zig",
				borderEndWidth: "n8ej3o3l",
				borderBottomWidth: "agehan2d",
				borderStartWidth: "sk4xxmp2",
				boxShadow: "t8kjxa8s",
				color: "erlsw9ld"
			},
			"primary-background-overlay": {
				backgroundColor: "s1i5eluu"
			}
		},
		l = (d = {}, d[24] = 12, d[32] = 16, d[36] = 20, d[40] = 20, d[48] = 24, d);

	function a(a, c) {
		var d = a.color,
			e = a.dataAttributes,
			f = a.disabled,
			n = f === void 0 ? !1 : f;
		f = a.focusable;
		var o = a.icon,
			p = a.label,
			q = a.linkProps,
			r = a.onFocusIn,
			s = a.onFocusOut,
			t = a.onHoverIn,
			u = a.onHoverOut,
			v = a.onPress,
			w = a.onPressIn,
			x = a.onPressOut,
			y = a.overlayHoveredStyle,
			z = a.size,
			A = a.testid;
		A = a.testOnly_pressed;
		a = a.type;
		var B = a === void 0 ? "normal" : a;
		a = e != null ? Object.keys(e).reduce(function (a, b) {
			a != null && b != null && (a["data-" + b] = e[b]);
			return a
		}, {}) : null;
		f = g.jsx(b("CometPressable.react"), {
			"aria-label": p,
			disabled: n,
			display: "inline",
			focusable: f,
			linkProps: q,
			onFocusIn: r,
			onFocusOut: s,
			onHoverIn: t,
			onHoverOut: u,
			onPress: v,
			onPressIn: w,
			onPressOut: x,
			overlayHoveredStyle: y,
			overlayPressedStyle: h.pressableOverlayPressed,
			overlayRadius: "50%",
			ref: c,
			testOnly_pressed: A,
			testid: void 0,
			xstyle: function (a) {
				a = a.pressed;
				return [h.root, i[z], j[B === "overlay-raised" ? "overlay" : B], n && k[B === "overlay-raised" ? "overlay" : B], B === "overlay-raised" && j.overlayRaised, a && h.pressed]
			},
			children: g.jsx(b("TetraIcon.react"), {
				color: n ? "disabled" : (p = d) != null ? p : m(B),
				icon: o,
				size: l[z]
			})
		});
		return a != null ? g.jsx("div", babelHelpers["extends"]({}, a, {
			children: f
		})) : f
	}

	function m(a) {
		switch (a) {
			case "dark-overlay":
				return "white";
			case "deemphasized-overlay":
				return "highlight";
			default:
				return "primary"
		}
	}
	f = g.forwardRef(a);
	e.exports = f
}), null);