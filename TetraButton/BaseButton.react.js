__d("BaseButton.react", ["BaseButtonPopoverContext", 
	"Pressable.react", "PressableText.react", "React", 
	"useFeedPressEventHandler"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React");

	function a(a, c) {
		var d = a["aria-activedescendant"],
			e = a["aria-checked"],
			f = a["aria-controls"],
			h = a["aria-describedby"],
			i = a["aria-expanded"],
			j = a["aria-haspopup"],
			k = a["aria-hidden"],
			l = a["aria-invalid"],
			m = a["aria-label"],
			n = a["aria-labelledby"],
			o = a["aria-pressed"],
			p = a["aria-selected"],
			q = a.children,
			r = a.className_DEPRECATED,
			s = a.disabled;
		s = s === void 0 ? !1 : s;
		var t = a.display;
		t = t === void 0 ? "inline" : t;
		var u = a.focusable,
			v = a.id,
			w = a.label,
			x = a.onBlur,
			y = a.onClick,
			z = a.onContextMenu,
			A = a.onFocus,
			B = a.onFocusChange,
			C = a.onFocusVisibleChange,
			D = a.onHoverChange,
			E = a.onHoverEnd,
			F = a.onHoverStart,
			G = a.onPressChange,
			H = a.onPressEnd,
			I = a.onPressStart,
			J = a.role,
			K = a.preventContextMenu,
			L = a.style,
			M = a.suppressHydrationWarning,
			N = a.testid,
			O = a.testOnly_pressed;
		O = O === void 0 ? !1 : O;
		a = a.xstyle;
		J = J === "presentation" ? "none" : J;
		m = J !== "none" ? (m = m) != null ? m : w : void 0;
		w = c;
		c = y;
		var P = I,
			Q = z;
		c = b("useFeedPressEventHandler")(y);
		P = b("useFeedPressEventHandler")(I);
		Q = b("useFeedPressEventHandler")(z);
		y = g.useContext(b("BaseButtonPopoverContext"));
		I = {
			accessibilityLabel: m,
			accessibilityRelationship: {
				activedescendant: d,
				controls: f,
				describedby: h,
				haspopup: y != null && j == null ? y.haspopup : j,
				labelledby: n
			},
			accessibilityState: {
				checked: e,
				disabled: s,
				expanded: y != null && i == null ? y.expanded : i,
				hidden: k,
				invalid: l,
				pressed: o,
				selected: p
			},
			className_DEPRECATED: r,
			disabled: s,
			focusable: u,
			forwardedRef: w,
			nativeID: v,
			onBlur: x,
			onContextMenu: Q,
			onFocus: A,
			onFocusChange: B,
			onFocusVisibleChange: C,
			onHoverChange: D,
			onHoverEnd: E,
			onHoverStart: F,
			onPress: c,
			onPressChange: G,
			onPressEnd: H,
			onPressStart: P,
			preventContextMenu: K,
			style: L,
			testID: N,
			testOnly_state: {
				disabled: !1,
				focusVisible: !1,
				focused: !1,
				hovered: !1,
				pressed: O
			},
			xstyle: a
		};
		if (t === "block") {
			z = J === "menuitem" || J === "none" || J === "gridcell" || J === "switch" || J === "combobox" || J === "checkbox" || J === "tab" || J === "radio" ? J : "button";
			return g.jsx(b("Pressable.react"), babelHelpers["extends"]({}, I, {
				accessibilityRole: z,
				children: q
			}))
		} else {
			m = J === "menuitem" || J === "menuitemcheckbox" || J === "menuitemradio" || J === "option" || J === "none" || J === "tab" ? J : "button";
			return g.jsx(b("PressableText.react"), babelHelpers["extends"]({}, I, {
				accessibilityRole: m,
				direction: "none",
				suppressHydrationWarning: M,
				children: q
			}))
		}
	}
	c = g.forwardRef(a);
	e.exports = c
}), null);