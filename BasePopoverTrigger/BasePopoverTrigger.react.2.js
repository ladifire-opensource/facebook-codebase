__d("BasePopoverTrigger.react", ["BaseButtonPopoverContext", 
	"BaseContextualLayer.react", "BaseScrollableAreaContext", 
	"CometErrorBoundary.react", "CometEventTimings", 
	"CometHeroInteractionContextPassthrough.react", 
	"CometHeroInteractionWithDiv.react", "CometHeroLogging", 
	"CometHideLayerOnEscape.react", "CometMenuContext", 
	"CometPlaceholder.react", "HiddenSubtreePassiveContext", 
	"React", "clearTimeout", "emptyFunction", "requireCond", 
	"setTimeout", "useCometPrerenderer", 
	"useLayoutEffect_SAFE_FOR_SSR", "useMergeRefs",
	 "useOnOutsideClick", "useVisibilityObserver", 
	 "cr:1791018", "cr:1802022", "cr:1802023"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function h(a) {
		var c = a.children;
		a = a.onLayerDetached;
		var d = a === void 0 ? b("emptyFunction") : a;
		a = g.useContext(b("HiddenSubtreePassiveContext"));
		var e = a.getCurrentState,
			f = a.subscribeToChanges,
			h = g.useRef(!e().hiddenOrBackgrounded);
		g.useEffect(function() {
			var a = f(function(a) {
				a = a.hiddenOrBackgrounded;
				a = !a;
				h.current !== a && !a && d()
			});
			return function() {
				a.remove()
			}
		}, [d, f]);
		var i = g.useRef(d);
		g.useEffect(function() {
			i.current = d
		}, [d]);
		g.useEffect(function() {
			return function() {
				i.current()
			}
		}, []);
		return c
	}

	function i(a) {
		var b = a.contextualLayerRef;
		g.useLayoutEffect(function() {
			var a = b.current;
			a && a.reposition({
				autoflip: !0
			})
		}, [b]);
		return null
	}

	function a(a) {
		var c = a.children,
			d = a.doNotCloseOnOutsideClick,
			e = d === void 0 ? !1 : d,
			f = a.fallback;
		d = a.imperativeRef;
		var j = a.interactionTracker,
			k = a.onHighIntentPreload,
			l = a.onLayerDetached,
			m = a.onVisibilityChange,
			n = a.popover,
			o = a.popoverPreloadResource,
			p = a.popoverProps,
			q = a.popoverType,
			r = q === void 0 ? "dialog" : q;
		q = a.preloadTrigger;
		a.tracePolicy;
		var s = a.visibleOnLoad,
			t = s === void 0 ? !1 : s,
			u = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "doNotCloseOnOutsideClick", "fallback", "imperativeRef", "interactionTracker", "onHighIntentPreload", "onLayerDetached", "onVisibilityChange", "popover", "popoverPreloadResource", "popoverProps", "popoverType", "preloadTrigger", "tracePolicy", "visibleOnLoad"]),
			v = g.useRef(!1);
		s = g.useState(!1);
		var w = s[0],
			x = s[1];
		a = g.useState(null);
		var y = a[0],
			z = a[1],
			A = g.useRef(null),
			B = g.useCallback(function(a) {
				x(a), m && m(a)
			}, [m]),
			C = g.useCallback(function() {
				B(!1), z(null)
			}, [B]),
			D = g.useCallback(function(a) {
				if (!w)
					if (j == null) B(!0);
					else {
						a = b("CometEventTimings").getCurrentQueueTime(a == null ? void 0 : a.timeStamp);
						var c = a[0];
						a = a[1];
						j(function(a) {
							B(!0), z(b("CometHeroLogging").genCometHeroInteractionUUIDAndMarkStart(a.getTraceId()))
						}, c, a)
					}
			}, [w, j, B]);
		g.useImperativeHandle(d, function() {
			return {
				show: function() {
					D()
				}
			}
		}, [D]);
		s = g.useCallback(function(a) {
			b("cr:1791018") && a != null && y != null && b("cr:1791018").addMutationRootForTraceId(y, a)
		}, [y]);
		var E = g.useRef(null);
		a = b("useCometPrerenderer")(q, w, o, k);
		d = a[0];
		q = a[1];
		k = a[2];
		var F = a[3];
		a = a[4];
		b("useLayoutEffect_SAFE_FOR_SSR")(function() {
			t === !0 && v.current === !1 && (v.current = !0, D())
		}, [D, t]);
		var G = g.useContext(b("BaseScrollableAreaContext")),
			H = b("useVisibilityObserver")({
				onHidden: g.useCallback(function(a) {
					a = a.hiddenReason;
					if (a === "COMPONENT_UNMOUNTED") return;
					a = G[G.length - 1];
					a != null && C()
				}, [C, G])
			}),
			I = g.useMemo(function() {
				switch (r) {
					case "menu":
						return {
							expanded: w, haspopup: "menu"
						};
					case "dialog":
					default:
						return null
				}
			}, [w, r]),
			J = g.useCallback(function(a) {
				A.current = a != null ? a : null, H(a)
			}, [H]),
			K = g.useRef(!1);
		g.useEffect(function() {
			var a = null;
			w && e !== !0 ? a = b("setTimeout")(function() {
				K.current = !0
			}, 150) : K.current = !1;
			return function() {
				a && b("clearTimeout")(a)
			}
		}, [w, e]);
		var L = g.useCallback(function() {
			K.current && C()
		}, [C]);
		L = b("useOnOutsideClick")(w ? L : null);
		var M = b("useMergeRefs")(L, s),
			N = g.useMemo(function() {
				return {
					onClose: C
				}
			}, [C]);
		return g.jsxs(g.Fragment, {
			children: [g.jsx(b("BaseButtonPopoverContext").Provider, {
				value: I,
				children: c(J, D, C, q, k, F, a)
			}), g.jsx(b("CometErrorBoundary.react"), {
				children: g.jsx(b("cr:1802022"), {
					prerenderingProps: d,
					children: function(a) {
						return g.createElement(b("BaseContextualLayer.react"), babelHelpers["extends"]({}, a, u, {
							containFocus: !0,
							contextRef: A,
							customContainer: b("cr:1802023"),
							imperativeRef: E,
							key: "popover",
							ref: M
						}), g.jsx(b("CometHideLayerOnEscape.react"), {
							onHide: C,
							children: g.jsx(b("CometMenuContext").Provider, {
								value: N,
								children: g.jsx(b("CometHeroInteractionContextPassthrough.react"), {
									clear: !0,
									children: g.jsx(b("CometHeroInteractionWithDiv.react"), {
										interactionDesc: "popover_" + (o != null ? o.getModuleId() : "Unknown"),
										interactionUUID: y,
										children: g.jsx(h, {
											onLayerDetached: l,
											children: g.jsxs(b("CometPlaceholder.react"), {
												fallback: (a = f) != null ? a : null,
												children: [g.jsx(i, {
													contextualLayerRef: E
												}), g.jsx(n, babelHelpers["extends"]({}, p, {
													onClose: C
												}))]
											})
										})
									})
								})
							})
						}))
					}
				})
			})]
		})
	}
}), null);