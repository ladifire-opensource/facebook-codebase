__d("CometSearchInternalTypeaheadStateProvider", ["CometSearchInternalTypeaheadStateContext",
 "CometSearchInternalTypeaheadStateDispatcherContext", "React"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("CometSearchInternalTypeaheadStateContext").Provider,
		h = b("CometSearchInternalTypeaheadStateDispatcherContext").Provider,
		i = b("React"),
		j = [];

	function a(a) {
		var b = a.children,
			c = a.emptyEntries_DO_NOT_USE,
			d = c === void 0 ? j : c,
			e = a.onClose,
			f = a.onOpen;
		c = i.useState(!1);
		var k = c[0],
			l = c[1];
		a = i.useState(null);
		var m = a[0],
			n = a[1];
		c = i.useState(null);
		var o = c[0],
			p = c[1];
		a = i.useState(d);
		var q = a[0],
			r = a[1],
			s = i.useRef(d);
		i.useEffect(function () {
			if (s.current === d) return;
			s.current = d;
			r(function (a) {
				return a.length ? a : d
			})
		}, [r, s, d]);
		var t = i.useCallback(function (a) {
				r(function (b) {
					b = Array.isArray(a) ? a : a(b);
					return b.length > 0 ? b : s.current
				})
			}, [r, s]),
			u = i.useCallback(function (a) {
				var b = a.entry;
				a = a.source;
				n(b);
				p(a)
			}, []),
			v = i.useCallback(function (a) {
				if (a === k) return;
				l(a);
				a ? f && f() : e && e()
			}, [k, e, f]);
		c = i.useMemo(function () {
			return {
				dispatchActiveEntries: t,
				dispatchHighlightedEntry: u,
				dispatchIsOpened: v
			}
		}, [t, u, v]);
		a = i.useMemo(function () {
			return {
				activeEntries: q,
				highlightedEntry: m,
				highlightedEntrySource: o,
				isOpened: k
			}
		}, [q, m, o, k]);
		return i.jsx(h, {
			value: c,
			children: i.jsx(g, {
				value: a,
				children: b
			})
		})
	}
}), null);