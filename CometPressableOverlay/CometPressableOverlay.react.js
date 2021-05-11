__d("CometPressableOverlay.react", ["CometCompositeItemFocusIndicator.react", "CometVisualCompletionAttributes", "React", "stylex"], (function (a, b, c, d, e, f) {
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
			defaultHoveredStyle: {
				backgroundColor: "rnr61an3"
			},
			defaultPressedStyle: {
				backgroundColor: "k19f6yf2"
			},
			overlay: {
				borderTopStartRadius: "n00je7tq",
				borderTopEndRadius: "arfg74bv",
				borderBottomEndRadius: "qs9ysxi8",
				borderBottomStartRadius: "k77z8yql",
				bottom: "i09qtzwb",
				end: "n7fi1qx3",
				opacity: "b5wmifdl",
				pointerEvents: "hzruof5a",
				position: "pmk7jnqg",
				start: "j9ispegn",
				top: "kr520xx4",
				transitionDuration: "c5ndavph",
				transitionProperty: "art1omkt",
				transitionTimingFunction: "ot9fgl3s"
			},
			overlayVisible: {
				opacity: "pedkr2u6",
				transitionDuration: "akwz6i9j"
			}
		};

	function a(a) {
		var c = a.focusVisible;
		c = c === void 0 ? !1 : c;
		var d = a.hovered;
		d = d === void 0 ? !1 : d;
		var e = a.hoveredStyle;
		e = e === void 0 ? i.defaultHoveredStyle : e;
		var f = a.offset,
			j = a.pressed;
		j = j === void 0 ? !1 : j;
		var k = a.pressedStyle;
		k = k === void 0 ? i.defaultPressedStyle : k;
		var l = a.radius,
			m = a.focusVisibleStyle;
		m = m === void 0 ? e : m;
		a = a.showGridSignifiers;
		a = a === void 0 ? !1 : a;
		var n = h.useState(),
			o = n[0];
		n = n[1];
		j ? o !== "pressed" && n("pressed") : c ? o !== "focused" && n("focused") : d && (o !== "hovered" && n("hovered"));
		var p, q, r, s;
		f != null && (typeof f === "number" ? (p = -f, q = -f, r = -f, s = -f) : (p = -f.bottom, q = -f.left, r = -f.right, s = -f.top));
		return h.jsx("div", babelHelpers["extends"]({
			className: (g || (g = b("stylex")))(i.overlay, (j || c || d || a) && i.overlayVisible, o === "pressed" && k, o === "focused" && m, o === "hovered" && e, l === "50%" && i.circle)
		}, b("CometVisualCompletionAttributes").IGNORE, {
			style: {
				borderRadius: typeof l === "number" ? l : void 0,
				bottom: p,
				left: q,
				right: r,
				top: s
			},
			children: a ? h.jsx(b("CometCompositeItemFocusIndicator.react"), {}) : null
		}))
	}
}), null);