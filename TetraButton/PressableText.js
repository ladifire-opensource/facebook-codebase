__d("PressableText.react", ["Pressability", 
	"React", "RecoverableViolationWithComponentStack.react", 
	"joinClasses", "stylex", "useCometErrorProject"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = b("React"),
		i = {
			article: "article",
			banner: "header",
			complementary: "aside",
			contentinfo: "footer",
			figure: "figure",
			form: "form",
			heading: "h1",
			label: "label",
			link: "a",
			list: "ul",
			listitem: "li",
			main: "main",
			navigation: "nav",
			none: "div",
			region: "section"
		};

	function j(a, b) {
		var c = "div";
		if ((b == null ? void 0 : b.url) != null && (b == null ? void 0 : b.url) !== "#" || a === "menuitem" && (b == null ? void 0 : b.url) != null) c = "a";
		else if (a != null) {
			b = i[a];
			b != null && (c = b)
		}
		return c
	}
	var k = function(a) {
		var b = a.target,
			c = b.tagName;
		c = b.isContentEditable || c === "A" && b.href != null || c === "BUTTON" || c === "INPUT" || c === "SELECT" || c === "TEXTAREA";
		if (b.tabIndex === 0 && !c) {
			c = a.key;
			if (c === "Enter") return !0;
			a = b.getAttribute("role");
			if ((c === " " || c === "Spacebar") && (a === "button" || a === "menuitem" || a === "menuitemradio" || a === "option")) return !0
		}
		return !1
	};

	function l(a) {
		a = a;
		while (a != null) {
			if (a.tagName === "A" && a.href != null) return !0;
			a = a.parentNode
		}
		return !1
	}

	function m(a, b) {
		var c = a.altKey,
			d = a.ctrlKey,
			e = a.metaKey,
			f = a.shiftKey;
		a = a.target;
		a = l(a);
		c = c || d || e || f;
		return b !== !1 && a && !c
	}

	function a(a) {
		var c = h.useRef(null),
			d = h.useState(!1),
			e = d[0];
		d = d[1];
		var f = h.useState(!1),
			i = f[0];
		f = f[1];
		var l = h.useState(!1),
			p = l[0];
		l = l[1];
		var q = h.useState(!1),
			r = q[0];
		q = q[1];
		var s = a.accessibilityLabel,
			t = a.accessibilityRelationship,
			u = a.accessibilityRole,
			v = a.accessibilityState,
			w = a.children,
			x = a.className_DEPRECATED,
			y = a.direction,
			z = a.disabled,
			A = a.focusable,
			B = a.forwardedRef,
			C = a.link,
			D = a.nativeID,
			E = a.onBlur,
			F = a.onContextMenu,
			G = a.onFocus,
			H = a.onFocusChange,
			I = a.onFocusVisibleChange,
			J = a.onHoverChange,
			K = a.onHoverEnd,
			L = a.onHoverMove,
			M = a.onHoverStart,
			N = a.onPress,
			O = a.onPressChange,
			P = a.onPressEnd,
			Q = a.onPressMove,
			R = a.onPressStart,
			aa = a.preventContextMenu,
			S = a.preventDefault,
			ba = a.selectable,
			T = a.style,
			U = a.testID;
		U = a.testOnly_state;
		var V = a.xstyle;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["accessibilityLabel", "accessibilityRelationship", "accessibilityRole", "accessibilityState", "children", "className_DEPRECATED", "direction", "disabled", "focusable", "forwardedRef", "link", "nativeID", "onBlur", "onContextMenu", "onFocus", "onFocusChange", "onFocusVisibleChange", "onHoverChange", "onHoverEnd", "onHoverMove", "onHoverStart", "onPress", "onPressChange", "onPressEnd", "onPressMove", "onPressStart", "preventContextMenu", "preventDefault", "selectable", "style", "testID", "testOnly_state", "xstyle"]);
		var W = j(u, C);
		z = z === !0 || (v == null ? void 0 : v.disabled) === !0;
		var X = v == null ? void 0 : v.hidden,
			Y = W === "a" && z !== !0;
		i = {
			disabled: z === !0 || (U == null ? void 0 : U.disabled) === !0 || !1,
			focusVisible: i || (U == null ? void 0 : U.focusVisible) === !0,
			focused: e || (U == null ? void 0 : U.focused) === !0,
			hovered: p || (U == null ? void 0 : U.hovered) === !0,
			pressed: r || (U == null ? void 0 : U.pressed) === !0
		};
		e = typeof w === "function" ? w(i) : w;
		p = typeof x === "function" ? x(i) : x;
		r = typeof T === "function" ? T(i) : T;
		U = typeof V === "function" ? V(i) : V;
		b("Pressability").usePressability(c, {
			disabled: z,
			onBlur: E,
			onContextMenu: F,
			onFocus: G,
			onFocusChange: n(d, H),
			onFocusVisibleChange: n(f, I),
			onHoverChange: n(l, J),
			onHoverEnd: K,
			onHoverMove: L,
			onHoverStart: M,
			onPressChange: n(q, O),
			onPressEnd: P,
			onPressMove: Q,
			onPressStart: R,
			preventContextMenu: aa,
			preventDefault: S == null ? !0 : S
		});
		w = h.useCallback(function(a) {
			N && N(a), (N || C != null) && a.stopPropagation(), m(a, S) && a.nativeEvent.preventDefault()
		}, [C, N, S]);
		x = h.useCallback(function(a) {
			if (k(a)) {
				var b = a.key;
				(b === " " || b === "Spacebar") && a.preventDefault();
				N && (N(a), a.stopPropagation())
			}
		}, [N]);
		var ca, Z;
		switch (y) {
			case "none":
				break;
			default:
				y != null && (Z = y);
				break
		}
		T = h.useCallback(function(a) {
			c.current = a, typeof B === "function" ? B(a) : B != null && (B.current = a)
		}, [B]);
		var $;
		V = W === "a" || u === "button";
		V ? z === !0 || X === !0 || A === !1 ? $ = -1 : $ = 0 : z !== !0 && X !== !0 && A !== !1 && u !== "none" && ($ = 0);
		E = C == null ? void 0 : C.download;
		F = (E === !0 || typeof E === "string") && Y;
		G = h.jsx(W, babelHelpers["extends"]({}, a, {
			"aria-activedescendant": t == null ? void 0 : t.activedescendant,
			"aria-busy": v == null ? void 0 : v.busy,
			"aria-checked": v == null ? void 0 : v.checked,
			"aria-controls": t == null ? void 0 : t.controls,
			"aria-current": t == null ? void 0 : t.current,
			"aria-describedby": t == null ? void 0 : t.describedby,
			"aria-details": t == null ? void 0 : t.details,
			"aria-disabled": z === !0 ? z : void 0,
			"aria-expanded": v == null ? void 0 : v.expanded,
			"aria-haspopup": t == null ? void 0 : t.haspopup,
			"aria-hidden": X,
			"aria-invalid": v == null ? void 0 : v.invalid,
			"aria-label": s,
			"aria-labelledby": t == null ? void 0 : t.labelledby,
			"aria-owns": t == null ? void 0 : t.owns,
			"aria-pressed": v == null ? void 0 : v.pressed,
			"aria-readonly": v == null ? void 0 : v.readonly,
			"aria-required": v == null ? void 0 : v.required,
			"aria-selected": v == null ? void 0 : v.selected,
			children: e,
			className: b("joinClasses")((g || (g = b("stylex")))(o.root, ba === !1 && o.notSelectable, i.disabled && o.disabled, !i.focusVisible && o.focusNotVisible, U), p),
			"data-testid": void 0,
			dir: Z,
			download: F ? E : void 0,
			href: Y ? C == null ? void 0 : C.url : void 0,
			id: D,
			onClick: z ? void 0 : w,
			onKeyDown: z ? void 0 : x,
			ref: T,
			rel: Y ? C == null ? void 0 : C.rel : void 0,
			role: u === "none" ? "presentation" : u,
			style: r,
			tabIndex: $,
			target: Y ? C == null ? void 0 : C.target : void 0
		}));
		return G
	}

	function n(a, b) {
		return h.useCallback(function(c) {
			a(c), b && b(c)
		}, [b, a])
	}
	var o = {
		disabled: {
			cursor: "rj84mg9z"
		},
		focusNotVisible: {
			outline: "lzcic4wl"
		},
		notSelectable: {
			userSelect: "abiwlrkh"
		},
		root: {
			WebkitTapHighlightColor: "oajrlxb2",
			backgroundColor: "g5ia77u1",
			borderTop: "qu0x051f",
			borderEnd: "esr5mh6w",
			borderBottom: "e9989ue4",
			borderStart: "r7d6kgcz",
			boxSizing: "rq0escxv",
			cursor: "nhd2j8a9",
			display: "nc684nl6",
			listStyle: "p7hjln8o",
			marginTop: "kvgmc6g5",
			marginEnd: "cxmmr5t8",
			marginBottom: "oygrvhab",
			marginStart: "hcukyx3x",
			paddingTop: "jb3vyjys",
			paddingEnd: "rz4wbd8a",
			paddingBottom: "qt6c0cv9",
			paddingStart: "a8nywdso",
			textAlign: "i1ao9s8h",
			textDecoration: "esuyzwwr",
			touchAction: "f1sip0of"
		}
	}
}), null);