__d("Pressable.react", ["Pressability", "React", "joinClasses", "recoverableViolation", "stylex"], (function (a, b, c, d, e, f) {
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
		if (["menuitem", "none"].includes(a) && b != null && b.url != null) c = "a";
		else if (a != null) {
			b = i[a];
			b != null && (c = b)
		}
		return c
	}

	function k(a) {
		switch (a) {
			case "none":
				return "presentation";
			case "label":
				return void 0;
			default:
				return a
		}
	}
	var l = function (a) {
		var b = a.target,
			c = b.tagName;
		c = b.isContentEditable || c === "A" && b.href != null || c === "BUTTON" || c === "INPUT" || c === "SELECT" || c === "TEXTAREA";
		if (b.tabIndex === 0 && !c) {
			c = a.key;
			if (c === "Enter") return !0;
			a = b.getAttribute("role");
			if ((c === " " || c === "Spacebar") && (a === "button" || a === "checkbox" || a === "menuitem" || a === "menuitemcheckbox" || a === "menuitemradio" || a === "option" || a === "radio" || a === "switch")) return !0
		}
		return !1
	};

	function m(a) {
		a = a;
		while (a != null) {
			if (a.tagName === "A" && a.href != null) return !0;
			a = a.parentNode
		}
		return !1
	}

	function n(a, b) {
		var c = a.altKey,
			d = a.ctrlKey,
			e = a.metaKey,
			f = a.shiftKey;
		a = a.target;
		a = m(a);
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
		var m = h.useState(!1),
			q = m[0];
		m = m[1];
		var r = h.useState(!1),
			s = r[0];
		r = r[1];
		var t = a.accessibilityLabel,
			u = a.accessibilityRelationship,
			v = a.accessibilityRole,
			w = a.accessibilityState,
			x = a.accessibilityValue,
			y = a.children,
			z = a.className_DEPRECATED,
			A = a.disabled,
			B = a.focusable,
			C = a.forwardedRef,
			D = a.link,
			E = a.nativeID,
			F = a.onBlur,
			G = a.onContextMenu,
			H = a.onFocus,
			I = a.onFocusChange,
			J = a.onFocusVisibleChange,
			K = a.onHoverChange,
			L = a.onHoverEnd,
			M = a.onHoverMove,
			N = a.onHoverStart,
			O = a.onPress,
			P = a.onPressChange,
			Q = a.onPressEnd,
			R = a.onPressMove,
			S = a.onPressStart,
			T = a.preventContextMenu,
			U = a.preventDefault,
			V = a.style,
			W = a.testID;
		W = a.testOnly_state;
		var X = a.xstyle;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["accessibilityLabel", "accessibilityRelationship", "accessibilityRole", "accessibilityState", "accessibilityValue", "children", "className_DEPRECATED", "disabled", "focusable", "forwardedRef", "link", "nativeID", "onBlur", "onContextMenu", "onFocus", "onFocusChange", "onFocusVisibleChange", "onHoverChange", "onHoverEnd", "onHoverMove", "onHoverStart", "onPress", "onPressChange", "onPressEnd", "onPressMove", "onPressStart", "preventContextMenu", "preventDefault", "style", "testID", "testOnly_state", "xstyle"]);
		var Y = j(v, D);
		A = A === !0 || (w == null ? void 0 : w.disabled) === !0;
		var Z = w == null ? void 0 : w.hidden,
			$ = Y === "a" && A !== !0;
		i = {
			disabled: A === !0 || (W == null ? void 0 : W.disabled) === !0 || !1,
			focusVisible: i || (W == null ? void 0 : W.focusVisible) === !0,
			focused: e || (W == null ? void 0 : W.focused) === !0,
			hovered: q || (W == null ? void 0 : W.hovered) === !0,
			pressed: s || (W == null ? void 0 : W.pressed) === !0
		};
		e = typeof y === "function" ? y(i) : y;
		q = typeof z === "function" ? z(i) : z;
		s = typeof V === "function" ? V(i) : V;
		W = typeof X === "function" ? X(i) : X;
		b("Pressability").usePressability(c, {
			disabled: A,
			onBlur: F,
			onContextMenu: G,
			onFocus: H,
			onFocusChange: o(d, I),
			onFocusVisibleChange: o(f, J),
			onHoverChange: o(m, K),
			onHoverEnd: L,
			onHoverMove: M,
			onHoverStart: N,
			onPressChange: o(r, P),
			onPressEnd: Q,
			onPressMove: R,
			onPressStart: S,
			preventContextMenu: T,
			preventDefault: U == null ? !0 : U
		});
		y = h.useCallback(function (a) {
			O && O(a), (O || D != null) && a.stopPropagation(), n(a, U) && a.nativeEvent.preventDefault()
		}, [D, O, U]);
		z = h.useCallback(function (a) {
			if (l(a)) {
				var b = a.key;
				(b === " " || b === "Spacebar") && a.preventDefault();
				O && (O(a), a.stopPropagation())
			}
		}, [O]);
		V = h.useCallback(function (a) {
			c.current = a, typeof C === "function" ? C(a) : C != null && (C.current = a)
		}, [C]);
		X = -1;
		A !== !0 && Z !== !0 && (B !== !1 && (X = 0));
		return h.jsx(Y, babelHelpers["extends"]({}, a, {
			"aria-activedescendant": u == null ? void 0 : u.activedescendant,
			"aria-busy": w == null ? void 0 : w.busy,
			"aria-checked": w == null ? void 0 : w.checked,
			"aria-controls": u == null ? void 0 : u.controls,
			"aria-current": u == null ? void 0 : u.current,
			"aria-describedby": u == null ? void 0 : u.describedby,
			"aria-details": u == null ? void 0 : u.details,
			"aria-disabled": A === !0 ? A : void 0,
			"aria-expanded": w == null ? void 0 : w.expanded,
			"aria-haspopup": u == null ? void 0 : u.haspopup,
			"aria-hidden": Z,
			"aria-label": t,
			"aria-labelledby": u == null ? void 0 : u.labelledby,
			"aria-modal": w == null ? void 0 : w.modal,
			"aria-orientation": w == null ? void 0 : w.orientation,
			"aria-owns": u == null ? void 0 : u.owns,
			"aria-pressed": w == null ? void 0 : w.pressed,
			"aria-readonly": w == null ? void 0 : w.readonly,
			"aria-required": w == null ? void 0 : w.required,
			"aria-selected": w == null ? void 0 : w.selected,
			"aria-valuemax": x == null ? void 0 : x.max,
			"aria-valuemin": x == null ? void 0 : x.min,
			"aria-valuenow": x == null ? void 0 : x.now,
			"aria-valuetext": x == null ? void 0 : x.text,
			children: e,
			className: b("joinClasses")((g || (g = b("stylex")))(p.root, i.disabled && p.disabled, !i.focusVisible && p.focusNotVisible, W), q),
			"data-testid": void 0,
			href: $ ? D == null ? void 0 : D.url : void 0,
			id: E,
			onClick: A ? void 0 : y,
			onKeyDown: A ? void 0 : z,
			ref: V,
			rel: $ ? D == null ? void 0 : D.rel : void 0,
			role: k(v),
			style: s,
			tabIndex: X,
			target: $ ? D == null ? void 0 : D.target : void 0
		}))
	}

	function o(a, b) {
		return h.useCallback(function (c) {
			a(c), b && b(c)
		}, [b, a])
	}
	var p = {
		disabled: {
			cursor: "rj84mg9z"
		},
		focusNotVisible: {
			outline: "lzcic4wl"
		},
		root: {
			WebkitTapHighlightColor: "oajrlxb2",
			alignItems: "gs1a9yip",
			backgroundColor: "g5ia77u1",
			borderTopColor: "mtkw9kbi",
			borderEndColor: "tlpljxtp",
			borderBottomColor: "qensuy8j",
			borderStartColor: "ppp5ayq2",
			borderTopStyle: "goun2846",
			borderEndStyle: "ccm00jje",
			borderBottomStyle: "s44p3ltw",
			borderStartStyle: "mk2mc5f4",
			borderTopWidth: "rt8b4zig",
			borderEndWidth: "n8ej3o3l",
			borderBottomWidth: "agehan2d",
			borderStartWidth: "sk4xxmp2",
			boxSizing: "rq0escxv",
			cursor: "nhd2j8a9",
			display: "j83agx80",
			flexBasis: "mg4g778l",
			flexDirection: "cbu4d94t",
			flexShrink: "pfnyh3mw",
			listStyle: "p7hjln8o",
			marginTop: "kvgmc6g5",
			marginEnd: "cxmmr5t8",
			marginBottom: "oygrvhab",
			marginStart: "hcukyx3x",
			minHeight: "tgvbjcpo",
			minWidth: "hpfvmrgz",
			paddingTop: "jb3vyjys",
			paddingEnd: "rz4wbd8a",
			paddingBottom: "qt6c0cv9",
			paddingStart: "a8nywdso",
			position: "l9j0dhe7",
			textAlign: "i1ao9s8h",
			textDecoration: "esuyzwwr",
			touchAction: "f1sip0of",
			zIndex: "du4w35lb"
		}
	}
}), null);