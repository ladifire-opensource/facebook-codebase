__d("FocusRegion.react", ["ActiveFocusRegionUtilsContext", "FocusManager", "FocusRegionType", "React", "ReactEventHookPropagation", "ReactFocusEvent.react", "ReactKeyboardEvent.react", "getTabbableNodes", "react", "setElementCanTab", "useLayoutEffect_SAFE_FOR_SSR"], (function (a, b, c, d, e, f) {
	f.FocusRegion = a;
	f.focusRegionById = c;
	var g, h = b("React"),
		i = g || (g = b("react"));

	function j(a, c, d) {
		var e = document.activeElement;
		window.requestAnimationFrame(function () {
			document.activeElement === e && b("FocusManager").focusElement(a, c, d)
		})
	}

	function k(a) {
		return a.offsetWidth === 0 && a.offsetHeight === 0
	}
	var l = i.unstable_Scope,
		m = new Map();

	function a(a) {
		var c = a.autoRestoreFocus,
			d = a.autoFocusQuery,
			e = a.children,
			f = a.containFocusQuery,
			g = a.forwardRef,
			p = a.id,
			q = a.recoverFocusStrategy,
			r = q === void 0 ? b("FocusRegionType").RecoverFocusStrategy.Nearest : q,
			s = a.recoverFocusQuery,
			t = h.useRef(null),
			u = h.useRef(null),
			v = h.useContext(b("ActiveFocusRegionUtilsContext")),
			w = h.useRef(v === null && c === !0 ? document.activeElement : null),
			x = h.useRef(null);
		x.current === null && (x.current = {
			lastFocused: null,
			scope: null,
			restorationFocusRegionItem: null,
			triggeredFocusRegionItems: new Set()
		});
		var y = h.useCallback(function () {
				if (v != null) {
					var a = v.getActiveFocusRegion(),
						b = x.current;
					if (a !== b) {
						var c;
						b.restorationFocusRegionItem !== a && !(a != null && a.lastFocused != null && ((c = t.current) == null ? void 0 : c.containsNode(a.lastFocused))) && (a != null && a.triggeredFocusRegionItems.add(b), b.restorationFocusRegionItem = a);
						(a === null || a != null && b != null && a.lastFocused !== b.lastFocused) && v.setActiveFocusRegion(b)
					}
				}
			}, [v]),
			z = h.useRef(null);
		q = h.useCallback(function (a) {
			t.current = a;
			x.current.scope = a;
			var b = z.current;
			g && (g.current = a);
			b !== null && b !== p && m["delete"](b);
			p != null && (a === null ? m["delete"](p) : (z.current = p, m.set(p, a)))
		}, [g, p]);
		q = b("ReactFocusEvent.react").useFocusWithin(q, h.useMemo(function () {
			return {
				onBeforeBlurWithin: function (a) {
					var c = t.current;
					if (c !== null && s !== void 0) {
						a.stopPropagation();
						if (s === null) return;
						a = a.target;
						c = b("FocusManager").getAllNodesFromOneOrManyQueries(s, c);
						if (c === null) return;
						var d = c.indexOf(a);
						a = a._tabIndexState;
						u.current = {
							detachedCanTab: a != null && a.canTab,
							recoveryIndex: d,
							recovery: c
						}
					}
				},
				onAfterBlurWithin: function () {
					var a = t.current,
						c = u.current;
					u.current = null;
					var d = document.activeElement;
					if (a !== null && s != null && c !== null && (d == null || d === document.body || !a.containsNode(d))) {
						d = !0;
						var e = !0,
							f = c.recovery,
							g = c.recoveryIndex,
							h = b("FocusManager").getAllNodesFromOneOrManyQueries(s, a);
						if (h !== null && f !== null) {
							if (r === b("FocusRegionType").RecoverFocusStrategy.Nearest) {
								var i = new Set(h),
									k = new Set(f);
								for (var l = g - 1; l >= 0; l--) {
									var m = f[l];
									if (i.has(m)) {
										var n = h.indexOf(m);
										n = n + 1;
										if (n < h.length) {
											n = h[n];
											if (!k.has(n)) {
												c.detachedCanTab && b("setElementCanTab")(n, !0);
												j(n, d, e);
												return
											}
										}
										c.detachedCanTab && b("setElementCanTab")(m, !0);
										j(m, d, e);
										return
									}
								}
								for (var n = g + 1; n < f.length; n++) {
									m = f[n];
									if (i.has(m)) {
										k = h.indexOf(m);
										l = k - 1;
										if (l >= 0) {
											g = h[l];
											c.detachedCanTab && b("setElementCanTab")(g, !0);
											j(g, d, e);
											return
										}
									}
								}
							}
							m = b("FocusManager").getFirstNodeFromOneOrManyQueries(s, a);
							m && (c.detachedCanTab && b("setElementCanTab")(m, !0), j(m, d, e))
						}
					}
				},
				onFocusWithin: function (a) {
					b("ReactEventHookPropagation").stopEventHookPropagation(a, "useFocusWithin"), x.current.lastFocused = a.target, y()
				}
			}
		}, [s, r, y]));
		b("ReactKeyboardEvent.react").useKeyboard(t, h.useMemo(function () {
			return {
				onKeyDown: function (a) {
					if (f == null || a.key !== "Tab" || a.isDefaultPrevented()) return;
					var b = t.current;
					b !== null && (a.shiftKey ? o(f, b, a, !0) : n(f, b, a, !0))
				}
			}
		}, [f]));
		a = h.useCallback(function () {
			var a = t.current,
				c = document.activeElement;
			if (d != null && a !== null && (!c || !a.containsNode(c))) {
				c = x.current.lastFocused;
				c != null && a.containsNode(c) && !k(c) ? b("FocusManager").focusElement(c, !0, !0) : b("FocusManager").focusFirst(d, a, !0)
			}
		}, [d]);
		b("useLayoutEffect_SAFE_FOR_SSR")(a, [a]);
		h.useEffect(a, [a]);
		b("useLayoutEffect_SAFE_FOR_SSR")(function () {
			var a = x.current;
			return function () {
				var d, e, f = t.current,
					g = document.activeElement,
					h = w.current;
				w.current = null;
				d = (d = a) == null ? void 0 : d.triggeredFocusRegionItems;
				var i = (e = a) == null ? void 0 : e.restorationFocusRegionItem;
				(d == null ? void 0 : d.size) && d.forEach(function (a) {
					return a.restorationFocusRegionItem = i
				});
				a != null && i != null && (i.triggeredFocusRegionItems["delete"](a), (d == null ? void 0 : d.size) && d.forEach(function (a) {
					i.triggeredFocusRegionItems.add(a)
				}));
				e = v == null ? void 0 : v.getActiveFocusRegion();
				var j = e != null ? e.restorationFocusRegionItem : {
					lastFocused: h
				};
				e === a && (v == null ? void 0 : v.setActiveFocusRegion(i));
				d = f !== null && g !== null && f.containsNode(g) || g == null || g === document.body;
				c === !0 && d ? window.requestAnimationFrame(function () {
					if ((j == null ? void 0 : j.lastFocused) != null) {
						var c = !0,
							d = !0,
							e = document.activeElement;
						(e === null || e === document.body) && b("FocusManager").focusElement(j.lastFocused, c, d)
					}
					a = null
				}) : a = null
			}
		}, [v, c]);
		return i.jsx(l, {
			ref: q,
			id: p,
			children: e
		})
	}

	function c(a, c, d) {
		a = m.get(a);
		if (a) {
			a = a.DO_NOT_USE_queryFirstNode(c);
			if (a !== null) {
				b("FocusManager").focusElement(a, d);
				return a
			}
		}
		return null
	}

	function n(a, c, d, e) {
		a = b("getTabbableNodes")(a, c);
		c = a[0];
		var f = a[1],
			g = a[2],
			h = a[3];
		a = a[4];
		if (a === null || c === null) return;
		a === g ? e === !0 && (b("FocusManager").focusElement(f), d.preventDefault(), d.stopPropagation()) : (b("FocusManager").focusElement(c[h + 1]), d.preventDefault(), d.stopPropagation())
	}

	function o(a, c, d, e) {
		a = b("getTabbableNodes")(a, c);
		c = a[0];
		var f = a[1],
			g = a[2],
			h = a[3];
		a = a[4];
		if (a === null || c === null) return;
		a === f ? e === !0 && (b("FocusManager").focusElement(g), d.preventDefault(), d.stopPropagation()) : (b("FocusManager").focusElement(c[h - 1]), d.preventDefault(), d.stopPropagation())
	}
}), null);