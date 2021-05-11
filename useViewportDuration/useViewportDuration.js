__d("useViewportDuration", ["CometViewportMarginsContext", "CometVisibilityUserActivityMonitor", "HiddenSubtreePassiveContext", "React", "Run", "getIntersectionMarginFromViewportMargin", "getStyleProperty", "gkx", "intersectionObserverEntryIsIntersecting", "useIntersectionObserver", "useLayoutEffect_SAFE_FOR_SSR"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React"),
		h = b("CometVisibilityUserActivityMonitor"),
		i = b("gkx")("1708607"),
		j = function (a) {
			if (a.target == null) return null;
			if (b("getStyleProperty")(a.target, "opacity") === "0") return "TARGET_TRANSPARENT";
			return b("getStyleProperty")(a.target, "visibility") === "hidden" ? "TARGET_HIDDEN" : null
		},
		k = function (a) {
			return a.boundingClientRect && (a.boundingClientRect.height === 0 || a.boundingClientRect.width === 0)
		};

	function a(a) {
		var c, d, e = a.onHidden,
			f = a.onIntersection,
			l = a.onVisibilityDurationUpdated,
			m = a.onVisible,
			n = a.options;
		n = n === void 0 ? {} : n;
		a = a.threshold;
		var o = (c = n.hiddenWhenZeroArea) != null ? c : !1,
			p = (c = n.hiddenWhenCSSStyleHidden) != null ? c : !1,
			q = (c = n.isEntryInViewport) != null ? c : b("intersectionObserverEntryIsIntersecting"),
			r = g.useRef(null),
			s = g.useRef(!1),
			t = g.useRef(null),
			u = g.useRef(null),
			v = g.useRef(null),
			w = g.useContext(b("HiddenSubtreePassiveContext")),
			x = n.activityMonitorOverride !== void 0 ? n.activityMonitorOverride : h,
			y = g.useCallback(function (a) {
				if (x && !x.isUserActive()) return "USER_INACTIVE";
				if (w.getCurrentState().hidden) return "PUSH_VIEW_HIDDEN";
				if (w.getCurrentState().backgrounded) return "BACKGROUNDED";
				if (s.current === !1) return "NOT_IN_VIEWPORT";
				if (o === !0 && k(a)) return "TARGET_SIZE_0";
				if (p === !0) {
					a = j(a);
					if (a !== null) return a
				}
				return null
			}, [x, w, p, o]),
			z = g.useCallback(function (a) {
				return y(a) === null
			}, [y]),
			A = g.useCallback(function (a, b, c) {
				var d = r.current != null;
				if (!d && c) {
					var f = Date.now();
					r.current = f;
					m != null && b != null && m({
						entry: b,
						visibleTime: f
					})
				} else if (d && !c) {
					d = (f = r.current) != null ? f : 0;
					c = Date.now();
					if (e != null) {
						f = a || b && y(b) || "UNKNOWN";
						e({
							entry: b,
							hiddenReason: f,
							hiddenTime: c,
							visibleDuration: c - d,
							visibleTime: d
						})
					}
					r.current = null
				}
			}, [y, e, l, m]),
			B = g.useRef(A);
		b("useLayoutEffect_SAFE_FOR_SSR")(function () {
			B.current = A
		}, [A]);
		g.useEffect(function () {
			return function () {
				B.current("COMPONENT_UNMOUNTED", null, !1), t.current != null && (t.current(), t.current = null), v.current != null && (v.current.remove(), v.current = null), u.current != null && (u.current.remove(), u.current = null)
			}
		}, []);
		c = g.useCallback(function (a) {
			var c = s.current = q(a);
			f && f({
				entry: a,
				isElementVisible: z(a)
			});
			t.current == null ? c && (t.current = x && x.subscribe(function (b) {
				return B.current("USER_INACTIVE", a, z(a))
			}), v.current = w.subscribeToChanges(function (b) {
				return B.current(b.hidden ? "PUSH_VIEW_HIDDEN" : "BACKGROUNDED", a, z(a))
			}), u.current = b("Run").onBeforeUnload(function (a) {
				B.current("PAGE_UNLOAD", null, !1)
			}, !1)) : c || (t.current != null && (t.current(), t.current = null), v.current && (v.current.remove(), v.current = null), u.current != null && (u.current.remove(), u.current = null));
			B.current(null, a, z(a))
		}, [z, x, w, q, f]);
		var C = g.useContext(b("CometViewportMarginsContext"));
		l = g.useMemo(function () {
			return {
				bottom: C.bottom + 1,
				left: C.left + 1,
				right: C.right + 1,
				top: C.top + 1
			}
		}, [C.bottom, C.left, C.right, C.top]);
		d = i ? (d = n.root) != null ? d : null : null;
		n = (n = n.rootMargin) != null ? n : b("getIntersectionMarginFromViewportMargin")(l);
		return b("useIntersectionObserver")(c, {
			root: d,
			rootMargin: n,
			threshold: a
		})
	}
}), null);