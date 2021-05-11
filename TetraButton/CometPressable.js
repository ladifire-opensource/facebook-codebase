__d("CometPressable.react", ["BaseButton.react", 
	"BaseLink.react", 
	"CometCompositeFocusIndicatorContext", 
	"CometPressableOverlay.react", "React", "gkx", "stylex"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		h = b("gkx")("1721477"),
		i = {
			defaultCursor: {
				cursor: "bnpdmtie"
			},
			expanding: {
				display: "j83agx80"
			},
			focusOutline: {
				outline: "bflrbx36"
			},
			hideOutline: {
				outline: "lzcic4wl"
			},
			linkBase: {
				display: "q9uorilb"
			},
			nestedFocusOutline: {
				outline: "k4dzmu7c"
			},
			root: {
				display: "pq6dq46d",
				flexDirection: "btwxx1t3",
				userSelect: "abiwlrkh",
				":hover": {
					textDecoration: "p8dawk7l"
				}
			},
			root_DEPRECATED: {
				position: "l9j0dhe7",
				userSelect: "abiwlrkh",
				":hover": {
					textDecoration: "p8dawk7l"
				}
			}
		};

	function a(a, c) {
		var d = a.children,
			e = a.className_DEPRECATED,
			f = a.cursorDisabled;
		f = f === void 0 ? !1 : f;
		var j = a.xstyle,
			k = a.disabled;
		k = k === void 0 ? !1 : k;
		var l = a.display,
			m = a.expanding;
		m = m === void 0 ? l === "block" : m;
		var n = a.hideFocusOverlay;
		n = n === void 0 ? !1 : n;
		var o = a.hideHoverOverlay;
		o = o === void 0 ? !1 : o;
		var p = a.linkProps,
			q = a.onFocusChange,
			r = a.onFocusIn,
			s = a.onFocusOut,
			t = a.onFocusVisibleChange,
			u = a.onHoverChange,
			v = a.onHoverIn,
			w = a.onHoverOut,
			x = a.onPress,
			y = a.onPressChange,
			z = a.onPressIn,
			A = a.onPressOut,
			B = a.preventContextMenu,
			C = a.overlayDisabled;
		C = C === void 0 ? !1 : C;
		var D = a.overlayOffset,
			E = a.overlayFocusVisibleStyle,
			F = a.overlayHoveredStyle,
			G = a.overlayPressedStyle,
			H = a.overlayRadius,
			I = a.testOnly_pressed,
			J = I === void 0 ? !1 : I;
		I = a.testid;
		I = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "className_DEPRECATED", "cursorDisabled", "xstyle", "disabled", "display", "expanding", "hideFocusOverlay", "hideHoverOverlay", "linkProps", "onFocusChange", "onFocusIn", "onFocusOut", "onFocusVisibleChange", "onHoverChange", "onHoverIn", "onHoverOut", "onPress", "onPressChange", "onPressIn", "onPressOut", "preventContextMenu", "overlayDisabled", "overlayOffset", "overlayFocusVisibleStyle", "overlayHoveredStyle", "overlayPressedStyle", "overlayRadius", "testOnly_pressed", "testid"]);
		a = g.useState(J);
		var K = a[0],
			L = a[1];
		a = g.useState(!1);
		var M = a[0],
			N = a[1];
		a = g.useState(!1);
		var O = a[0],
			P = a[1];
		a = g.useState(!1);
		var Q = a[0],
			R = a[1];
		a = g.useCallback(function (a) {
			L(a || J), y && y(a)
		}, [y, J]);
		var S = g.useCallback(function (a) {
				N(a), q && q(a)
			}, [q]),
			T = g.useCallback(function (a) {
				P(a), t && t(a)
			}, [t]),
			U = g.useCallback(function (a) {
				R(a), u && u(a)
			}, [u]),
			V = g.useContext(b("CometCompositeFocusIndicatorContext"));
		V = V.horizontal === !0 || V.vertical === !0;
		var W = M && O && h;
		W = !C || W ? g.jsx(b("CometPressableOverlay.react"), {
			focusVisible: !n && !C && O,
			focusVisibleStyle: E,
			hovered: !o && !C && Q,
			hoveredStyle: F,
			offset: D,
			pressed: !C && K,
			pressedStyle: G,
			radius: H,
			showGridSignifiers: h && M && O && V
		}) : null;
		n = typeof d === "function" ? d({
			disabled: k,
			focusVisible: O,
			focused: M,
			hovered: Q,
			overlay: W,
			pressed: K
		}) : g.jsxs(g.Fragment, {
			children: [d, W]
		});
		E = typeof j === "function" ? j({
			disabled: k,
			focusVisible: O,
			focused: M,
			hovered: Q,
			pressed: K
		}) : j;
		o = V ? i.nestedFocusOutline : i.focusOutline;
		F = [l === "inline" ? i.root_DEPRECATED : i.root, f === !0 && i.defaultCursor, m && i.expanding, p != null && i.linkBase, (!O || h) && i.hideOutline, O && h && o, E];
		D = {
			onBlur: s,
			onClick: x,
			onFocus: r,
			onFocusChange: S,
			onFocusVisibleChange: T,
			onHoverChange: U,
			onHoverEnd: w,
			onHoverStart: v,
			onPressChange: a,
			onPressEnd: A,
			onPressStart: z
		};
		if (p != null) {
			C = p.url;
			G = babelHelpers.objectWithoutPropertiesLoose(p, ["url"]);
			H = babelHelpers["extends"]({}, G, {
				href: C
			});
			return g.jsx(b("BaseLink.react"), babelHelpers["extends"]({}, D, I, H, {
				className_DEPRECATED: e,
				disabled: k,
				display: l === "inline" ? l : "block",
				preventContextMenu: B,
				ref: c,
				testid: void 0,
				xstyle: F,
				children: n
			}))
		}
		return g.jsx(b("BaseButton.react"), babelHelpers["extends"]({}, D, I, {
			className_DEPRECATED: e,
			disabled: k,
			display: l === "inline" ? l : "block",
			preventContextMenu: B,
			ref: c,
			testid: void 0,
			xstyle: F,
			children: n
		}))
	}
	c = g.forwardRef(a);
	e.exports = c
}), null);