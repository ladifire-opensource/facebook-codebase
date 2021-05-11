__d("BaseContextualLayer.react", [
	"BaseContextualLayerAnchorRoot.react", 
	"BaseContextualLayerAnchorRootContext", 
	"BaseContextualLayerContextSizeContext", 
	"BaseContextualLayerLayerAdjustmentContext", 
	"BaseContextualLayerOrientationContext", 
	"BaseLinkNestedPressableContext", 
	"BasePortal.react", 
	"BaseScrollableAreaContext", 
	"CometViewportMarginsContext", 
	"FocusRegion.react", 
	"HiddenSubtreeContext", 
	"LegacyHidden", 
	"Locale", "React", 
	"ReactDOMComet", 
	"TetraTextContext", 
	"focusScopeQueries", 
	"getBaseContextualLayerPositioningStyles_DEPRECATED", 
	"getComputedStyle", 
	"isElementFixedOrSticky", 
	"mergeRefs", "stylex", "testID", "useLayoutEffect_SAFE_FOR_SSR", "useResizeObserver"], (function (a, b, c, d, e, f) {
	"use strict";
	var g, h = b("React");

	function i(a) {
		a = a.getBoundingClientRect();
		return {
			bottom: a.bottom,
			left: a.left,
			right: a.right,
			top: a.top
		}
	}

	function j(a) {
		var c = b("getComputedStyle")(a);
		return c != null && c.getPropertyValue("position") !== "static" ? a : a instanceof HTMLElement && a.offsetParent || a.ownerDocument.documentElement
	}
	var k = 8;

	function l(a, b) {
		return a.bottom < b.top || b.bottom < a.top || a.right < b.left || b.right < b.left ? null : {
			bottom: Math.min(a.bottom, b.bottom),
			left: Math.max(a.left, b.left),
			right: Math.min(a.right, b.right),
			top: Math.max(a.top, b.top)
		}
	}
	var m = b("Locale").isRTL(),
		n = {
			root: {
				left: "j34wkznp",
				marginRight: "qp9yad78",
				position: "pmk7jnqg",
				top: "kr520xx4"
			}
		};

	function c(c, d) {
		var e = c.align,
			f = e === void 0 ? "start" : e;
		e = c.autoAlign;
		var o = e === void 0 ? !1 : e;
		e = c.children;
		var p = c.containFocus;
		p = p === void 0 ? !1 : p;
		var q = c.disablePositionAutoflip,
			r = q === void 0 ? !1 : q;
		q = c.hidden;
		q = q === void 0 ? !1 : q;
		var s = c.imperativeRef,
			t = c.onIndeterminatePosition,
			u = c.position,
			v = u === void 0 ? "below" : u;
		u = c.xstyle;
		var w = babelHelpers.objectWithoutPropertiesLoose(c, ["align", "autoAlign", "children", "containFocus", "disablePositionAutoflip", "hidden", "imperativeRef", "onIndeterminatePosition", "position", "xstyle"]),
			x = h.useRef(!1);
		c = h.useState(function () {
			return v
		});
		var y = c[0],
			z = c[1];
		c = h.useState(null);
		var A = c[0],
			B = c[1];
		c = h.useState(null);
		var C = c[0],
			D = c[1];
		c = h.useState(null);
		var E = c[0],
			F = c[1],
			G = h.useContext(b("BaseContextualLayerAnchorRootContext")),
			H = h.useContext(b("BaseScrollableAreaContext")),
			I = h.useContext(b("CometViewportMarginsContext"));
		c = h.useContext(b("HiddenSubtreeContext"));
		c = c.hidden;
		var J = c || q;
		c = h.useState(!1);
		var K = c[0],
			L = c[1],
			M = h.useRef(null),
			N = h.useRef(null),
			O = h.useCallback(function () {
				var a = M.current,
					b = document.documentElement,
					c = w.context_DEPRECATED;
				c == null && w.context_DEPRECATED == null && w.contextRef != null && (c = w.contextRef.current);
				if (a == null || c == null || r || b == null) return;
				c = i(c);
				a = i(a);
				b = {
					bottom: b.clientHeight - I.bottom - k,
					left: I.left + k,
					right: b.clientWidth - I.right - k,
					top: I.top + k
				};
				var d = a.bottom - a.top,
					e = a.right - a.left;
				N.current = {
					height: d,
					width: e
				};
				var f = m ? "start" : "end",
					g = m ? "end" : "start";
				y === "above" || y === "below" ? y === "above" && a.top !== 0 && a.top < b.top && c.bottom + d < b.bottom ? z("below") : y === "below" && a.bottom !== 0 && a.bottom > b.bottom && c.top - d > b.top && z("above") : (y === "start" || y === "end") && (y === g && a.left !== 0 && a.left < b.left && c.right + e < b.right ? z(f) : y === f && a.right !== 0 && a.right > b.right && c.left - e > b.left && z(g))
			}, [w.context_DEPRECATED, w.contextRef, r, y, I.bottom, I.left, I.right, I.top]),
			P = h.useCallback(function () {
				var a = document.documentElement,
					c = G.current;
				if (a == null || c == null) return;
				var d = j(c);
				if (d == null) return;
				var e = w.context_DEPRECATED;
				e == null && w.context_DEPRECATED == null && w.contextRef != null && (e = w.contextRef.current);
				if (e == null) return;
				c = b("isElementFixedOrSticky")(c);
				c = !c && b("isElementFixedOrSticky")(e);
				var g = H.map(function (a) {
					return a.getDOMNode()
				}).filter(Boolean).filter(function (a) {
					return d.contains(a)
				}).reduce(function (a, b) {
					return a != null ? l(a, i(b)) : null
				}, i(e));
				if (g == null || g.left === 0 && g.right === 0) {
					L(!0);
					t && t();
					return
				}
				e = c ? {
					bottom: a.clientHeight,
					left: 0,
					right: a.clientWidth,
					top: 0
				} : i(d);
				var h = null,
					n = N.current;
				if (x.current && n != null && o === !0) {
					a = {
						bottom: a.clientHeight - I.bottom - k,
						left: I.left + k,
						right: a.clientWidth - I.right - k,
						top: I.top + k
					};
					if (y === "start" || y === "end") {
						var p, q;
						if (f === "middle") {
							var r = (g.bottom + g.top) / 2;
							p = r - n.height / 2;
							q = r + n.height / 2
						} else f === "start" ? (p = g.top, q = g.top + n.height) : f === "end" && (p = g.bottom - n.height, q = g.bottom);
						p != null && q != null && (p < a.top ? h = a.top - p : q > a.bottom && (h = a.bottom - q))
					} else if (y === "above" || y === "below") {
						var s, u;
						r = m ? "start" : "end";
						var v = m ? "end" : "start";
						if (f === "middle") {
							var z = (g.right + g.left) / 2;
							s = z - n.width / 2;
							u = z + n.width / 2
						} else f === v ? (s = g.left, u = g.left + n.width) : f === r && (s = g.right - n.width, u = g.right);
						s != null && u != null && (s < a.left ? h = a.left - s : u > a.right && (h = a.right - u))
					}
				}
				z = b("getBaseContextualLayerPositioningStyles_DEPRECATED")({
					adjustment: h,
					align: f,
					contextRect: g,
					fixed: c,
					offsetRect: e,
					position: y
				});
				v = M.current;
				if (v != null) {
					r = Object.keys(z);
					for (var n = 0; n < r.length; n++) {
						a = r[n];
						c = z[a];
						c != null ? v.style.setProperty(a, c) : v.style.removeProperty(a)
					}
				}
				x.current = !0;
				b("ReactDOMComet").unstable_batchedUpdates(function () {
					L(!1), g != null && (B(g.bottom - g.top), D(g.right - g.left)), F(h)
				})
			}, [G, w.context_DEPRECATED, w.contextRef, H, o, f, y, t, I.bottom, I.left, I.right, I.top]);
		h.useImperativeHandle(s, function () {
			return {
				reposition: function (a) {
					a = a || {};
					a = a.autoflip;
					a = a === void 0 ? !1 : a;
					a && O();
					P()
				}
			}
		}, [P, O]);
		var Q = b("useResizeObserver")(function (a) {
				var b = a.height;
				a = a.width;
				N.current = {
					height: b,
					width: a
				}
			}),
			R = h.useRef(v);
		b("useLayoutEffect_SAFE_FOR_SSR")(function () {
			v !== R.current && (z(v), O(), P()), R.current = v
		}, [v, P, O]);
		var S = h.useCallback(function (a) {
			M.current = a, a != null && !J ? (x.current || P(), O(), P()) : a == null && (x.current = !1)
		}, [J, P, O]);
		h.useEffect(function () {
			if (J) return;
			var b = function () {
				O(), P()
			};
			a.addEventListener("resize", b);
			return function () {
				a.removeEventListener("resize", b)
			}
		}, [J, P, O]);
		h.useEffect(function () {
			if (J) return;
			var b = H.map(function (a) {
				return a.getDOMNode()
			}).filter(Boolean);
			if (b.length > 0) {
				b.forEach(function (a) {
					return a.addEventListener("scroll", P, {
						passive: !0
					})
				});
				return function () {
					b.forEach(function (a) {
						return a.removeEventListener("scroll", P, {
							passive: !0
						})
					})
				}
			}
			if (a.addEventListener == null) return;
			a.addEventListener("scroll", P, {
				passive: !0
			});
			return function () {
				a.removeEventListener("scroll", P, {
					passive: !0
				})
			}
		}, [J, P, H]);
		c = h.useMemo(function () {
			return b("mergeRefs")(S, Q, d)
		}, [S, Q, d]);
		s = h.useMemo(function () {
			return {
				align: f,
				position: y
			}
		}, [f, y]);
		var T = h.useMemo(function () {
				return A != null && C != null ? {
					height: A,
					width: C
				} : null
			}, [A, C]),
			U = q || K;
		return h.jsx(b("BasePortal.react"), {
			target: G.current,
			children: h.jsx(b("LegacyHidden"), {
				htmlAttributes: babelHelpers["extends"]({}, b("testID")("ContextualLayerRoot"), {
					className: (g || (g = b("stylex")))(n.root, u)
				}),
				mode: q || K ? "hidden" : "visible",
				ref: c,
				children: h.jsx(b("FocusRegion.react").FocusRegion, {
					autoFocusQuery: !U && p ? b("focusScopeQueries").headerFirstTabbableSecondScopeQuery : null,
					autoRestoreFocus: !U,
					containFocusQuery: !U && p ? b("focusScopeQueries").tabbableScopeQuery : null,
					recoverFocusQuery: U ? null : b("focusScopeQueries").headerFirstTabbableSecondScopeQuery,
					children: h.jsx(b("BaseContextualLayerAnchorRoot.react"), {
						children: h.jsx(b("BaseContextualLayerContextSizeContext").Provider, {
							value: T,
							children: h.jsx(b("BaseContextualLayerLayerAdjustmentContext").Provider, {
								value: E,
								children: h.jsx(b("BaseContextualLayerOrientationContext").Provider, {
									value: s,
									children: h.jsx(b("BaseLinkNestedPressableContext").Provider, {
										value: !1,
										children: h.jsx(b("TetraTextContext").Provider, {
											value: null,
											children: e
										})
									})
								})
							})
						})
					})
				})
			})
		})
	}
	d = h.forwardRef(c);
	e.exports = d
}), null);