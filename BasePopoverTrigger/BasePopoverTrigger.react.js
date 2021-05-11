__d("BasePopoverTrigger.react", ["BaseButtonPopoverContext",
 "BaseContextualLayer.react", 
 "BaseScrollableAreaContext", 
 "CometErrorBoundary.react", "CometEventTimings", 
 "CometHeroInteractionContextPassthrough.react", 
 "CometHeroInteractionWithDiv.react", 
 "CometHeroLogging", 
 "CometHideLayerOnEscape.react", 
 "CometMenuContext", 
 "CometPlaceholder.react", 
 "CometPrerenderer.react",
  "React", "clearTimeout", "requireCond", 
  "setTimeout", "useCometPrerenderer", 
  "useLayoutEffect_SAFE_FOR_SSR", "useMergeRefs", 
  "useOnOutsideClick", "useVisibilityObserver", "cr:1791018"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function h(a) {
		var b = a.contextualLayerRef;
		g.useLayoutEffect(function () {
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
			f = a.fallback,
			i = a.interactionTracker;
		d = a.onHighIntentPreload;
		var j = a.onVisibilityChange,
			k = a.popover,
			l = a.popoverPreloadResource,
			m = a.popoverProps,
			n = a.popoverType,
			o = n === void 0 ? "dialog" : n;
		n = a.preloadTrigger;
		a.tracePolicy;
		var p = a.visibleOnLoad,
			q = p === void 0 ? !1 : p,
			r = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "doNotCloseOnOutsideClick", "fallback", "interactionTracker", "onHighIntentPreload", "onVisibilityChange", "popover", "popoverPreloadResource", "popoverProps", "popoverType", "preloadTrigger", "tracePolicy", "visibleOnLoad"]),
			s = g.useRef(!1);
		p = g.useState(!1);
		var t = p[0],
			u = p[1];
		a = g.useState(null);
		var v = a[0],
			w = a[1],
			x = g.useRef(null),
			y = g.useCallback(function (a) {
				u(a), j && j(a)
			}, [j]),
			z = g.useCallback(function () {
				y(!1), w(null)
			}, [y]),
			A = g.useCallback(function (a) {
				if (!t)
					if (i == null) y(!0);
					else {
						a = b("CometEventTimings").getCurrentQueueTime(a == null ? void 0 : a.timeStamp);
						var c = a[0];
						a = a[1];
						i(function (a) {
							y(!0), w(b("CometHeroLogging").genCometHeroInteractionUUIDAndMarkStart(a.getTraceId()))
						}, c, a)
					}
			}, [t, i, y]);
		p = g.useCallback(function (a) {
			b("cr:1791018") && a != null && v != null && b("cr:1791018").addMutationRootForTraceId(v, a)
		}, [v]);
		var B = g.useRef(null);
		a = b("useCometPrerenderer")(n, t, l, d);
		n = a[0];
		d = a[1];
		var C = a[2],
			D = a[3];
		a = a[4];
		b("useLayoutEffect_SAFE_FOR_SSR")(function () {
			q === !0 && s.current === !1 && (s.current = !0, A())
		}, [A, q]);
		var E = g.useContext(b("BaseScrollableAreaContext")),
			F = b("useVisibilityObserver")({
				onHidden: g.useCallback(function (a) {
					a = a.hiddenReason;
					if (a === "COMPONENT_UNMOUNTED") return;
					a = E[E.length - 1];
					a != null && z()
				}, [z, E])
			}),
			G = g.useMemo(function () {
				switch (o) {
					case "menu":
						return {
							expanded: t,
							haspopup: "menu"
						};
					case "dialog":
					default:
						return null
				}
			}, [t, o]),
			H = g.useCallback(function (a) {
				x.current = a != null ? a : null, F(a)
			}, [F]),
			I = g.useRef(!1);
		g.useEffect(function () {
			var a = null;
			t && e !== !0 ? a = b("setTimeout")(function () {
				I.current = !0
			}, 150) : I.current = !1;
			return function () {
				a && b("clearTimeout")(a)
			}
		}, [t, e]);
		var J = g.useCallback(function () {
			I.current && z()
		}, [z]);
		J = b("useOnOutsideClick")(J);
		var K = b("useMergeRefs")(J, p),
			L = g.useMemo(function () {
				return {
					onClose: z
				}
			}, [z]);
		return g.jsxs(g.Fragment, {
			children: [g.jsx(b("BaseButtonPopoverContext").Provider, {
				value: G,
				children: c(H, A, z, d, C, D, a)
			}), g.jsx(b("CometErrorBoundary.react"), {
				children: g.jsx(b("CometPrerenderer.react"), {
					prerenderingProps: n,
					children: function (a) {
						return g.jsx(b("BaseContextualLayer.react"), babelHelpers["extends"]({}, a, r, {
							containFocus: !0,
							contextRef: x,
							imperativeRef: B,
							ref: K,
							children: g.jsx(b("CometHideLayerOnEscape.react"), {
								onHide: z,
								children: g.jsx(b("CometMenuContext").Provider, {
									value: L,
									children: g.jsx(b("CometHeroInteractionContextPassthrough.react"), {
										clear: !0,
										children: g.jsx(b("CometHeroInteractionWithDiv.react"), {
											interactionDesc: "popover_" + (l != null ? l.getModuleId() : "Unknown"),
											interactionUUID: v,
											children: g.jsxs(b("CometPlaceholder.react"), {
												fallback: (a = f) != null ? a : null,
												children: [g.jsx(h, {
													contextualLayerRef: B
												}), g.jsx(k, babelHelpers["extends"]({}, m, {
													onClose: z
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