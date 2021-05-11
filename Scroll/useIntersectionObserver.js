__d("useIntersectionObserver", ["DOMRectReadOnly", "ExecutionEnvironment", 
	"JSScheduler", "React", "observeIntersection", "useDynamicCallbackDANGEROUS"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		h = {
			bottom: 0,
			left: 0,
			right: 0,
			top: 0
		},
		i = b("DOMRectReadOnly").fromRect(),
		j = {
			bottom: 0,
			height: 0,
			left: 0,
			right: 0,
			top: 0,
			width: 0,
			x: 0,
			y: 0
		};

	function k(a) {
		var b;
		if (a == null) b = h;
		else if (typeof a === "string") return a;
		else typeof a === "number" ? b = {
			bottom: a,
			left: a,
			right: a,
			top: a
		} : b = babelHelpers["extends"]({}, h, a);
		a = b;
		b = a.bottom;
		var c = a.left,
			d = a.right;
		a = a.top;
		return a + "px " + d + "px " + b + "px " + c + "px"
	}

	function l(a, c, d, e) {
		var f = c.root,
			g = c.rootMargin,
			h = c.threshold;
		f = f === null ? null : f();
		var i = a == null || a.element !== d || a.onIntersect !== e || a.observedRoot !== f || a.rootMargin !== g || a.threshold !== h;
		if (i) {
			a && a.subscription.remove();
			i = b("observeIntersection")(d, e, {
				root: f,
				rootMargin: k(g),
				threshold: h
			});
			return babelHelpers["extends"]({}, c, {
				element: d,
				observedRoot: f,
				onIntersect: e,
				subscription: i
			})
		}
		return a
	}

	function a(a, c) {
		var d = c.root,
			e = c.rootMargin,
			f = c.threshold,
			h = g.useRef(null),
			k = g.useRef(null),
			m = g.useRef(null),
			n = g.useRef(null),
			o = g.useRef(!1),
			p = b("useDynamicCallbackDANGEROUS")(a);
		c = g.useCallback(function (a) {
			if (h.current === a) return;
			if (h.current != null && a == null) {
				n.current != null && b("JSScheduler").cancelCallback(n.current);
				var c = h.current;
				b("JSScheduler").runWithPriority(b("JSScheduler").priorities.unstable_Immediate, function () {
					n.current = b("JSScheduler").defer(function () {
						h.current === null && o.current === !1 && p({
							boundingClientRect: j,
							intersectionRatio: 0,
							intersectionRect: j,
							isIntersecting: !1,
							isVisible: !1,
							rootBounds: i,
							target: c,
							time: Date.now()
						}), n.current = null
					})
				})
			}
			h.current = a;
			k.current != null && (k.current.subscription.remove(), k.current = null);
			b("JSScheduler").runWithPriority(b("JSScheduler").priorities.unstable_Immediate, function () {
				m.current != null && b("JSScheduler").cancelCallback(m.current), m.current = b("JSScheduler").defer(function () {
					h.current != null && (k.current = l(k.current, {
						root: d,
						rootMargin: e,
						threshold: f
					}, h.current, p)), m.current = null
				})
			})
		}, [p, d, e, f]);
		g.useLayoutEffect(function () {
			b("JSScheduler").runWithPriority(b("JSScheduler").priorities.unstable_Immediate, function () {
				m.current != null && b("JSScheduler").cancelCallback(m.current), m.current = b("JSScheduler").defer(function () {
					h.current != null && (k.current = l(k.current, {
						root: d,
						rootMargin: e,
						threshold: f
					}, h.current, p)), m.current = null
				})
			});
			return function () {
				k.current != null && (k.current.subscription.remove(), k.current = null), m.current != null && (b("JSScheduler").cancelCallback(m.current), m.current = null)
			}
		}, [p, d, e, f]);
		g.useLayoutEffect(function () {
			o.current = !1;
			return function () {
				o.current = !0
			}
		}, []);
		return c
	}

	function c(a, b, c) {
		return function (a) {}
	}
	d = b("ExecutionEnvironment").canUseDOM ? a : c;
	e.exports = d
}), null);