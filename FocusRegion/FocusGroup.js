__d("FocusGroup.react", ["FocusManager", "Locale", "React", "ReactKeyboardEvent.react", "focusKeyboardEventPropagation", "react", "setElementCanTab"], (function (a, b, c, d, e, f) {
	f.createFocusGroup = a;
	var g, h = b("React"),
		i = g || (g = b("react")),
		j = 5;

	function k(a) {
		return a.length === 1
	}

	function l(a, c, d, e) {
		b("focusKeyboardEventPropagation").stopFocusKeyboardEventPropagation(d);
		c = c.DO_NOT_USE_queryFirstNode(a);
		c !== null && (b("setElementCanTab")(c, !0), b("FocusManager").focusElement(c, e), d.preventDefault())
	}

	function m(a, b, c, d, e, f) {
		b = b.onNavigate;
		if (b && d) {
			var g = !1,
				h = n(d, e);
			e = {
				currentIndex: h,
				event: c,
				focusItem: function (a, b) {
					a = a.scopeRef.current;
					a && l(b || f, a, c)
				},
				getItem: function (a) {
					return r(d, a)
				},
				getItemByTag: function (a) {
					var b = d.length,
						c = h + 1;
					while (!0) {
						if (c === h) return null;
						if (c > b - 1) {
							c = 0;
							continue
						}
						var e = d[c];
						if (e) {
							var f = e.disabled,
								g = e.scopeRef,
								i = e.tag;
							g = g.current;
							if (g && f !== !0 && i === a) return e
						}
						c++
					}
					return null
				},
				preventDefault: function () {
					g = !0
				},
				type: a
			};
			b(e);
			if (g) return !0
		}
		return !1
	}

	function n(a, b) {
		for (var c = 0; c < a.length; c++) {
			var d = a[c];
			if (d && d.scopeRef.current === b) return c
		}
		return -1
	}

	function o(a, b, c) {
		var d = a.scopeRef.current;
		if (d === null) return null;
		if (c !== null) {
			d = n(c, b);
			b = a.wrap;
			a = s(c, d - 1);
			return !a && b === !0 ? s(c, c.length - 1) : a
		}
		return null
	}

	function p(a, b, c) {
		var d = a.scopeRef.current;
		if (d === null) return null;
		if (c.length > 0) {
			d = n(c, b);
			b = a.wrap;
			a = q(c, d + 1);
			return !a && b === !0 ? q(c, 0) : a
		}
		return null
	}

	function q(a, b) {
		var c = a.length;
		if (b > c) return null;
		b = b;
		while (b < c) {
			var d = a[b];
			if (d !== null && d.disabled !== !0) return d.scopeRef.current;
			b++
		}
		return null
	}

	function r(a, b) {
		b = b;
		while (b >= 0) {
			var c = a[b];
			if (c !== null && c.disabled !== !0) return c;
			b--
		}
		return null
	}

	function s(a, b) {
		a = r(a, b);
		return a ? a.scopeRef.current : null
	}

	function t(a) {
		var b = a.altKey,
			c = a.ctrlKey,
			d = a.metaKey;
		a = a.shiftKey;
		return b === !0 || c === !0 || d === !0 || a === !0
	}

	function a(a) {
		var c = i.unstable_Scope,
			d = i.createContext(null),
			e = i.createContext(null);

		function f(a) {
			var b = a.children,
				e = a.orientation,
				f = a.wrap,
				g = a.tabScopeQuery,
				k = a.allowModifiers,
				l = a.preventScrollOnFocus,
				m = l === void 0 ? !1 : l;
			l = a.pageJumpSize;
			var n = l === void 0 ? j : l,
				o = a.onNavigate,
				p = h.useRef(null);
			l = h.useMemo(function () {
				return {
					scopeRef: p,
					orientation: e,
					wrap: f,
					tabScopeQuery: g,
					allowModifiers: k,
					pageJumpSize: n,
					preventScrollOnFocus: m,
					onNavigate: o
				}
			}, [e, f, g, k, n, m, o]);
			return i.jsx(d.Provider, {
				value: l,
				children: i.jsx(c, {
					ref: p,
					children: b
				})
			})
		}

		function g(f) {
			var g = f.children,
				j = f.disabled;
			f = f.tag;
			var r = h.useRef(null),
				u = h.useContext(d);
			b("ReactKeyboardEvent.react").useKeyboard(r, h.useMemo(function () {
				return {
					onKeyDown: function (c) {
						if (b("focusKeyboardEventPropagation").hasFocusKeyboardEventPropagationStopped(c)) return;
						var d = r.current;
						if (d !== null && u !== null) {
							var f = u.orientation === "vertical" || u.orientation === "both",
								g = u.orientation === "horizontal" || u.orientation === "both",
								h = u.scopeRef.current,
								i = c.key,
								j = u.preventScrollOnFocus;
							if (i === "Tab" && h !== null) {
								var v = u.tabScopeQuery;
								if (v) {
									if (u.onNavigate) {
										var w = h.getChildContextValues(e);
										if (m("TAB", u, c, w, d, v)) return
									}
									w = document.activeElement;
									v = h.DO_NOT_USE_queryAllNodes(v);
									if (v !== null)
										for (var x = 0; x < v.length; x++) {
											var y = v[x];
											y !== w ? b("setElementCanTab")(y, !1) : b("setElementCanTab")(y, !0)
										}
								}
								return
							}
							if (t(c)) {
								y = u.allowModifiers;
								if (y !== !0) return
							}
							if (h === null) return;
							w = i;
							b("Locale").isRTL() && (i === "ArrowRight" ? w = "ArrowLeft" : i === "ArrowLeft" && (w = "ArrowRight"));
							switch (w) {
								case "Home":
									x = h.getChildContextValues(e);
									if (m("HOME", u, c, x, d, a)) return;
									v = q(x, 0);
									if (v) {
										l(a, v, c, j);
										return
									}
									break;
								case "End":
									y = h.getChildContextValues(e);
									if (m("END", u, c, y, d, a)) return;
									w = s(y, y.length - 1);
									if (w) {
										l(a, w, c, j);
										return
									}
									break;
								case "PageUp":
									x = h.getChildContextValues(e);
									if (m("PAGE_UP", u, c, x, d, a)) return;
									v = u.pageJumpSize;
									y = n(x, d);
									w = q(x, Math.max(0, y - v));
									if (w) {
										l(a, w, c, j);
										return
									}
									break;
								case "PageDown":
									x = h.getChildContextValues(e);
									if (m("PAGE_DOWN", u, c, x, d, a)) return;
									y = u.pageJumpSize;
									v = n(x, d);
									w = s(x, Math.min(x.length - 1, v + y));
									if (w) {
										l(a, w, c, j);
										return
									}
									break;
								case "ArrowUp":
									if (f) {
										x = h.getChildContextValues(e);
										if (m("PREV_ITEM", u, c, x, d, a)) return;
										v = c.metaKey || c.ctrlKey ? q(x, 0) : o(u, d, x);
										if (v) {
											l(a, v, c, j);
											return
										}
									}
									break;
								case "ArrowDown":
									if (f) {
										y = h.getChildContextValues(e);
										if (m("NEXT_ITEM", u, c, y, d, a)) return;
										w = c.metaKey || c.ctrlKey ? s(y, y.length - 1) : p(u, d, y);
										if (w) {
											l(a, w, c, j);
											return
										}
									}
									break;
								case "ArrowLeft":
									if (g) {
										x = h.getChildContextValues(e);
										if (m("PREV_ITEM", u, c, x, d, a)) return;
										v = c.metaKey || c.ctrlKey ? q(x, 0) : o(u, d, x);
										if (v) {
											l(a, v, c, j);
											return
										}
									}
									break;
								case "ArrowRight":
									if (g) {
										f = h.getChildContextValues(e);
										if (m("NEXT_ITEM", u, c, f, d, a)) return;
										y = c.metaKey || c.ctrlKey ? s(f, f.length - 1) : p(u, d, f);
										y && l(a, y, c, j)
									}
									break;
								default:
									if (k(i) && u.onNavigate) {
										w = h.getChildContextValues(e);
										m("PRINT_CHAR", u, c, w, d, a)
									}
							}
						}
					}
				}
			}, [u]));
			j = {
				scopeRef: r,
				disabled: j,
				tag: f
			};
			return i.jsx(e.Provider, {
				value: j,
				children: i.jsx(c, {
					ref: r,
					children: g
				})
			})
		}
		return [f, g]
	}
}), null);