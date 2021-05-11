__d("ReactFocusEvent.react", ["React", "ReactEventHelpers", "ReactEventHookPropagation", "ReactUseEvent.react", "checkPassiveEventsSupported", "useLayoutEffect_SAFE_FOR_SSR"], (function (a, b, c, d, e, f) {
	"use strict";
	f.useFocus = a;
	f.useFocusWithin = c;
	var g = b("React"),
		h = b("ReactEventHelpers").hasPointerEvents ? ["keydown", "pointermove", "pointerdown", "pointerup"] : ["keydown", "mousedown", "mousemove", "mouseup", "touchmove", "touchstart", "touchend"],
		i = {
			passive: !0
		},
		j = !0,
		k = !1;

	function l() {
		h.forEach(function (a) {
			window.addEventListener(a, o, b("checkPassiveEventsSupported") ? {
				capture: !0,
				passive: !0
			} : !0)
		})
	}

	function m(a) {
		var c = a.metaKey,
			d = a.altKey;
		a = a.ctrlKey;
		return !(c || !b("ReactEventHelpers").isMac && d || a)
	}

	function n(a) {
		var b = a.key;
		a = a.target;
		if (b === "Tab" || b === "Escape") return !1;
		b = a.isContentEditable;
		a = a.tagName;
		return a === "INPUT" || a === "TEXTAREA" || b
	}

	function o(a) {
		if (a.type === "keydown") m(a) && (j = !0);
		else {
			a = a.target.nodeName;
			if (a === "HTML") return;
			j = !1
		}
	}

	function p(a, b) {
		if (a.type === "keydown") {
			a = a.nativeEvent;
			m(a) && !n(a) && b(!0)
		} else j = !1, b(!1)
	}

	function q(a, b, c) {
		a.forEach(function (a) {
			a.setListener(b, function (a) {
				return p(a, c)
			})
		})
	}

	function r() {
		var a = b("ReactUseEvent.react")("mousedown", i),
			c = b("ReactUseEvent.react")(b("ReactEventHelpers").hasPointerEvents ? "pointerdown" : "touchstart", i),
			d = b("ReactUseEvent.react")("keydown", i);
		return g.useMemo(function () {
			return [a, c, d]
		}, [d, a, c])
	}

	function s() {
		g.useEffect(function () {
			k || (k = !0, l())
		}, [])
	}

	function a(a, c) {
		var d = c.disabled,
			e = c.onBlur,
			f = c.onFocus,
			h = c.onFocusChange,
			k = c.onFocusVisibleChange,
			l = g.useRef({
				isFocused: !1,
				isFocusVisible: !1
			}),
			m = b("ReactUseEvent.react")("focusin", i),
			n = b("ReactUseEvent.react")("focusout", i),
			o = r();
		b("useLayoutEffect_SAFE_FOR_SSR")(function () {
			var c = a.current,
				g = l.current;
			if (c !== null && c.nodeType === 1) {
				q(o, c, function (a) {
					g.isFocused && g.isFocusVisible !== a && (g.isFocusVisible = a, k && k(a))
				});
				var i = function (a) {
					g.isFocused && (g.isFocused = !1, e && e(a), h && h(!1), g.isFocusVisible && k && k(!1), g.isFocusVisible = j)
				};
				m.setListener(c, function (a) {
					if (d === !0) return;
					if (b("ReactEventHookPropagation").hasEventHookPropagationStopped(a, "useFocus")) return;
					b("ReactEventHookPropagation").stopEventHookPropagation(a, "useFocus");
					!g.isFocused && c === a.target && (g.isFocused = !0, g.isFocusVisible = j, f && f(a), h && h(!0), g.isFocusVisible && k && k(!0))
				});
				n.setListener(c, function (a) {
					if (d === !0) return;
					if (b("ReactEventHookPropagation").hasEventHookPropagationStopped(a, "useFocus")) return;
					b("ReactEventHookPropagation").stopEventHookPropagation(a, "useFocus");
					i(a)
				})
			}
		}, [n, d, m, a, o, e, f, h, k]);
		g.useEffect(function () {
			var b = a.current,
				c = l.current;
			return function () {
				if (a.current === null && c.isFocused) {
					c.isFocused = !1;
					var d = new window.FocusEvent("blur");
					Object.defineProperty(d, "target", {
						value: b
					});
					e && e(d);
					h && h(!1);
					c.isFocusVisible && k && k(!1);
					c.isFocusVisible = j
				}
			}
		});
		s()
	}

	function c(a, c) {
		var d = c.disabled,
			e = c.onAfterBlurWithin,
			f = c.onBeforeBlurWithin,
			h = c.onBlurWithin,
			k = c.onFocusWithin,
			l = c.onFocusWithinChange,
			m = c.onFocusWithinVisibleChange,
			n = g.useRef({
				isFocused: !1,
				isFocusVisible: !1
			}),
			o = (c = b("ReactUseEvent.react"))("focusin", i),
			p = c("focusout", i),
			t = c("afterblur", i),
			u = c("beforeblur", i),
			v = r();
		c = g.useCallback(function (c) {
			typeof a === "function" ? a(c) : a.current = c;
			var g = n.current;
			c !== null && g !== null && (q(v, c, function (a) {
				g.isFocused && g.isFocusVisible !== a && (g.isFocusVisible = a, m && m(a))
			}), o.setListener(c, function (a) {
				if (d === !0) return;
				if (b("ReactEventHookPropagation").hasEventHookPropagationStopped(a, "useFocusWithin")) return;
				g.isFocused || (g.isFocused = !0, g.isFocusVisible = j, l && l(!0), g.isFocusVisible && m && m(!0));
				!g.isFocusVisible && j && (g.isFocusVisible = j, m && m(!0));
				k && k(a)
			}), p.setListener(c, function (a) {
				if (d === !0) return;
				var e = a.nativeEvent.relatedTarget;
				if (b("ReactEventHookPropagation").hasEventHookPropagationStopped(a, "useFocusWithin")) return;
				g.isFocused && !b("ReactEventHelpers").isRelatedTargetWithin(c, e) ? (g.isFocused = !1, l && l(!1), g.isFocusVisible && m && m(!1), h && h(a)) : b("ReactEventHookPropagation").stopEventHookPropagation(a, "useFocusWithin")
			}), u.setListener(c, function (a) {
				if (d === !0) return;
				f && (f(a), t.setListener(document, function (a) {
					e && e(a), t.setListener(document, null)
				}))
			}))
		}, [t, u, p, d, o, v, a, e, f, h, k, l, m]);
		s();
		return c
	}
}), null);