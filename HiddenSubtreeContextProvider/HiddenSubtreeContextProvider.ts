__d("HiddenSubtreeContextProvider.react", ["HiddenSubtreeContext", "HiddenSubtreePassiveContext", "React", "removeFromArray", "useLayoutEffect_SAFE_FOR_SSR"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function h(a, b) {
		return a.backgrounded === b.backgrounded && a.hidden === b.hidden
	}

	function i(a, b) {
		var c = a.backgrounded || b.backgrounded;
		a = a.hidden || b.hidden;
		return {
			backgrounded: c,
			hidden: a,
			hiddenOrBackgrounded: c || a,
			hiddenOrBackgrounded_FIXME: c || a
		}
	}

	function a(a) {
		var c = a.children,
			d = a.ignoreParent,
			e = a.isBackgrounded,
			f = e === void 0 ? !1 : e,
			j = a.isHidden;
		e = g.useContext(b("HiddenSubtreeContext"));
		var k = g.useContext(b("HiddenSubtreePassiveContext")),
			l = g.useMemo(function () {
				return {
					backgrounded: f,
					hidden: j,
					hiddenOrBackgrounded: f || j,
					hiddenOrBackgrounded_FIXME: f || j
				}
			}, [f, j]),
			m = g.useRef(l),
			n = g.useRef(null),
			o = g.useRef([]),
			p = g.useCallback(function () {
				var a = d === !0 ? m.current : i(m.current, k.getCurrentState());
				if (n.current == null || !h(a, n.current)) {
					n.current = a;
					var b = Array.from(o.current);
					b.forEach(function (b) {
						b(a)
					})
				}
			}, [d, k]);
		b("useLayoutEffect_SAFE_FOR_SSR")(function () {
			m.current = l, p()
		}, [l, p]);
		g.useEffect(function () {
			if (d !== !0) {
				var a = k.subscribeToChanges(p);
				return function () {
					return a.remove()
				}
			}
		}, [d, p, k]);
		a = g.useMemo(function () {
			return {
				getCurrentState: function () {
					return d === !0 ? m.current : i(m.current, k.getCurrentState())
				},
				subscribeToChanges: function (a) {
					var c = o.current;
					c.push(a);
					return {
						remove: function () {
							b("removeFromArray")(c, a)
						}
					}
				}
			}
		}, [k, d]);
		var q = d === !0 ? l : i(l, e);
		e = g.useMemo(function () {
			return {
				backgrounded: q.backgrounded,
				hidden: q.hidden,
				hiddenOrBackgrounded: q.backgrounded || q.hidden,
				hiddenOrBackgrounded_FIXME: q.backgrounded || q.hidden
			}
		}, [q.backgrounded, q.hidden]);
		return g.jsx(b("HiddenSubtreeContext").Provider, {
			value: e,
			children: g.jsx(b("HiddenSubtreePassiveContext").Provider, {
				value: a,
				children: c
			})
		})
	}
}), null);