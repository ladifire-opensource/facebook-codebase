__d("BaseLink.react", ["BanzaiODS", "BaseLinkEndpointModifierContext", 
	"BaseLinkNestedPressableContext", "BaseNestedPressableHack_DO_NOT_USE.react", 
	"CometLinkShimUtils", "CometLinkTrackingUtils", "CometProductAttributionContext", 
	"CometTrackingCodeContext", "CometTrackingNodesContext", "JSScheduler", "JSTracing", 
	"Pressable.react", "PressableText.react", "React", "ReactDOMComet", 
	"RecoverableViolationWithComponentStack.react", "clearTimeout", "gkx", 
	"isCometRouterUrl", "mergeRefs", "recoverableViolation", "requireDeferred",
	 "setTimeout", "useCometErrorProject", "useCometPreloader", "useCometRoute", 
	 "useCometRouterDispatcher", "useCurrentRoute", "useFeedPressEventHandler"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React"),
		aa = b("requireDeferred")("LynxAsyncCallbackFalcoEvent"),
		ba = /async(?:-post)?|dialog(?:-post)?|theater|toggle/,
		ca = 30 * 1e3;

	function h(a, c) {
		return c == null ? null : a.reduce(function (a, c) {
			c = c(a);
			if (!b("isCometRouterUrl")(c)) {
				b("recoverableViolation")("Endpoint modifier returned a non-router URL, ignoring.", "comet_infra");
				return a
			}
			return c
		}, c)
	}

	function i(a) {
		a = a.children;
		return g.jsx(b("BaseLinkNestedPressableContext").Provider, {
			value: !0,
			children: a
		})
	}

	function a(a, c) {
		var d = a["aria-activedescendant"],
			e = a["aria-checked"],
			f = a["aria-controls"],
			j = a["aria-current"],
			ea = a["aria-describedby"],
			fa = a["aria-expanded"],
			ga = a["aria-haspopup"],
			ha = a["aria-hidden"],
			ia = a["aria-invalid"],
			k = a["aria-label"],
			ja = a["aria-labelledby"],
			ka = a["aria-owns"],
			l = a.children,
			la = a.className_DEPRECATED,
			ma = a.disabled,
			m = a.display;
		m = m === void 0 ? "inline" : m;
		var n = a.download,
			na = a.fbclid,
			oa = a.focusable,
			o = a.href,
			pa = a.id,
			p = a.label,
			qa = a.lynxMode,
			ra = a.onBlur,
			q = a.onClick,
			r = a.onContextMenu,
			sa = a.onFocus,
			ta = a.onFocusChange,
			ua = a.onFocusVisibleChange,
			va = a.onHoverChange,
			wa = a.onHoverEnd,
			xa = a.onHoverStart,
			ya = a.onNavigate,
			za = a.onPressChange,
			Aa = a.onPressEnd,
			s = a.onPressStart,
			t = a.passthroughProps,
			u = a.prefetchQueries,
			Ba = a.prefetchQueriesOnHover,
			Ca = a.preload,
			Da = a.preventContextMenu,
			Ea = a.preventLocalNavigation,
			Fa = a.productAttribution,
			v = a.rel,
			w = a.replace,
			x = a.role,
			y = a.routeTarget,
			Ga = a.style,
			Ha = a.suppressHydrationWarning,
			z = a.target,
			Ia = a.testid,
			A = a.testOnly_pressed;
		A = A === void 0 ? !1 : A;
		var B = a.traceParams;
		a = a.xstyle;
		var C = b("useCometRouterDispatcher")(),
			D = g.useRef(null),
			E = g.useContext(b("BaseLinkEndpointModifierContext")),
			F = g.useRef(null),
			G = g.useRef(null),
			Ja = g.useRef(null),
			H = g.useContext(b("CometTrackingNodesContext")),
			I = g.useTransition(),
			Ka = I[0];
		I = g.useContext(b("CometTrackingCodeContext"));
		var La = I.click_tracking_linkshim_cb,
			J = I.encrypted_click_tracking,
			K = g.useRef(null),
			L = u === !0 ? "button_aggressive" : "button",
			Ma = g.useContext(b("CometProductAttributionContext")),
			Na = o != null && b("isCometRouterUrl")(o),
			M = g.useMemo(function () {
				var a = Na ? b("CometLinkTrackingUtils").decorateHrefWithTrackingInfo(h(E, o), H, J) : null;
				return a
			}, [J, Na, E, o, H]),
			N = b("useCometRoute")(M),
			Oa = n === !0 || typeof n === "string";
		I = g.useMemo(function () {
			if (Oa) return {
				href: o,
				isRouterLink: !1,
				shimmed: !1,
				unshimmedHref: null
			};
			if (M != null) {
				var a = N && N.canonicalUrl != null ? b("CometLinkTrackingUtils").decorateHrefWithTrackingInfo(h(E, N.canonicalUrl), H, J) : M;
				return {
					href: a,
					isRouterLink: !0,
					shimmed: !1,
					unshimmedHref: null
				}
			}
			a = b("CometLinkShimUtils").getLinkShimInfo(o, La, H, na);
			var c = a.shimmed ? a.href : b("CometLinkTrackingUtils").decorateHrefWithTrackingInfo(a.href, H, J);
			return {
				href: c,
				isRouterLink: !1,
				shimmed: a.shimmed,
				unshimmedHref: a.shimmed ? a.unshimmedHref : null
			}
		}, [La, J, na, Oa, E, o, N, M, H]);
		var O = I.href,
			P = I.isRouterLink,
			Q = I.shimmed,
			R = I.unshimmedHref;
		u = !1;
		I = !1;
		var S = z;
		if (Q) {
			u = !0;
			S = (z = S) != null ? z : "_blank";
			I = !!b("CometLinkShimUtils").use_rel_no_opener && S === "_blank"
		}
		var T = Array.isArray(v) ? v.join(" ") : v;
		u && (T == null || T.indexOf("nofollow") < 0) && (T = T != null ? T + " nofollow" : "nofollow");
		I && (T == null || T.indexOf("noopener") < 0) && (T = T != null ? T + " noopener" : "noopener");
		var U = g.useCallback(function () {
				var a = G.current;
				a && (Ka(function () {
					a.cancel()
				}), G.current = null)
			}, []),
			Pa = g.useCallback(function () {
				K.current = b("setTimeout")(function () {
					K.current = null, U(), b("BanzaiODS").bumpFraction(2994, "comet_preloading", "prefetch_route_queries." + L + ".usage", 0, 1)
				}, ca)
			}, [U]);
		g.useEffect(function () {
			P && C != null && O != null && (Ca === !0 && b("JSTracing").clear(function () {
				C.preloadRoute(O, y), F.current = O
			}))
		}, [C, O, P, t, Ca, w, y, B]);
		z = g.useContext(b("BaseLinkNestedPressableContext"));
		v = x === "presentation" ? "none" : x;
		u = p != null && v !== "none" ? p : k;
		var Qa = c,
			V = q,
			W = s,
			X = r;
		V = b("useFeedPressEventHandler")(q, O);
		W = b("useFeedPressEventHandler")(s, O);
		X = b("useFeedPressEventHandler")(r, O);
		I = g.useState(!1);
		var Y = I[0],
			Z = I[1];
		x = g.useMemo(function () {
			return b("mergeRefs")(Qa, D)
		}, [Qa, D]);
		p = function (a) {
			X && X(a), Y && b("ReactDOMComet").flushSync(function () {
				Z(!1)
			})
		};
		var $ = g.useMemo(function () {
			var a = S == null || S === "_self";
			return P && Ea !== !0 && a
		}, [P, Ea, S]);
		k = g.useCallback(function () {
			O != null && F.current !== O && $ && b("JSTracing").clear(function () {
				b("JSScheduler").scheduleSpeculativeCallback(function () {
					C != null && (F.current = O, C.preloadRoute(O, y), Ja.current = null)
				})
			})
		}, [C, O, y, $]);
		var Ra = g.useCallback(function () {
			C != null && O != null && $ && G.current == null && (G.current = C.prefetchRouteQueries(O, {
				passthroughProps: t,
				replace: w,
				target: y,
				traceParams: B
			}), Pa())
		}, [C, O, $, t, w, y, B, Pa]);
		c = b("useCometPreloader")(L, k, Ra, U);
		var Sa = c[0],
			Ta = c[1],
			Ua = c[2];
		q = function (a) {
			W && W(a), Ua(a)
		};
		s = function (a) {
			V && V(a);
			qa === "ASYNCLAZY" && O != null && R != null && b("gkx")("1642984") ? (Y || b("ReactDOMComet").flushSync(function () {
				Z(!0)
			}), aa.onReadyImmediately(function (a) {
				a.log(function () {
					return {
						lynx_uri: O,
						next_uri: R
					}
				})
			})) : Y && b("ReactDOMComet").flushSync(function () {
				Z(!1)
			});
			var c = !(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey);
			if (c && $)
				if (C) {
					if (O != null) {
						c = !b("gkx")("708253") && T != null && T.match(ba) != null;
						c || (C.go(O, {
							eventTimestamp: a.timeStamp,
							linkRef: D,
							onNavigate: ya,
							passthroughProps: t,
							prefetcher: G.current,
							productAttributionUpdateProps: {
								fromLink: Fa,
								linkContext: Ma
							},
							replace: w,
							target: y,
							traceParams: B
						}), G.current = null, K.current != null && (b("clearTimeout")(K.current), b("BanzaiODS").bumpFraction(2994, "comet_preloading", "prefetch_route_queries." + L + ".usage", 1, 1)))
					}
				} else b("gkx")("708253") && b("recoverableViolation")("A comet router link must exist in a CometRouterProvider to be clicked", "comet_infra")
		};
		r = function (a) {
			xa && xa(a);
			Q && Z(!0);
			if (!P) return;
			Sa(a, function () {
				Ba === !0 && Ra()
			})
		};
		I = function (a) {
			wa && wa(a), Ta()
		};
		k = Y && Q ? R : O;
		c = P && S !== "_blank" && C != null || k == null || k === "#";
		u = {
			accessibilityLabel: u,
			accessibilityRelationship: {
				activedescendant: d,
				controls: f,
				current: j,
				describedby: ea,
				haspopup: ga,
				labelledby: ja,
				owns: ka
			},
			accessibilityState: {
				checked: e,
				disabled: ma,
				expanded: fa,
				hidden: ha,
				invalid: ia
			},
			className_DEPRECATED: la,
			disabled: ma,
			focusable: oa,
			forwardedRef: x,
			link: {
				download: n,
				rel: T,
				target: S,
				url: (k = Y && Q ? R : O) != null ? k : "#"
			},
			nativeID: pa,
			onBlur: ra,
			onContextMenu: p,
			onFocus: sa,
			onFocusChange: ta,
			onFocusVisibleChange: ua,
			onHoverChange: va,
			onHoverEnd: I,
			onHoverStart: r,
			onPress: s,
			onPressChange: za,
			onPressEnd: Aa,
			onPressStart: q,
			preventContextMenu: Da,
			preventDefault: c,
			style: Ga,
			testID: Ia,
			testOnly_state: {
				disabled: !1,
				focusVisible: !1,
				focused: !1,
				hovered: !1,
				pressed: A
			},
			xstyle: a
		};
		if (m === "block") {
			d = v === "button" || v === "menuitem" || v === "none" || v === "switch" || v === "checkbox" || v === "article" || v === "radio" || v === "tab" ? v : "link";
			f = g.jsx(b("Pressable.react"), babelHelpers["extends"]({}, u, {
				accessibilityRole: d,
				children: g.jsx(i, {
					children: l
				})
			}))
		} else {
			j = v === "button" || v === "menuitem" || v === "menuitemradio" || v === "none" || v === "tab" ? v : "link";
			f = g.jsx(b("PressableText.react"), babelHelpers["extends"]({}, u, {
				accessibilityRole: j,
				direction: "none",
				suppressHydrationWarning: Ha,
				children: g.jsx(i, {
					children: l
				})
			}))
		}
		return g.jsxs(g.Fragment, {
			children: [y === "content" && g.jsx(da, {}), z ? g.jsx(b("BaseNestedPressableHack_DO_NOT_USE.react"), {
				children: f
			}) : f]
		})
	}

	function da() {
		var a = b("useCurrentRoute")(),
			c = b("useCometErrorProject")();
		return a != null && a.isCometRootContainer !== !0 && g.jsx(b("RecoverableViolationWithComponentStack.react"), {
			errorMessage: "A link with target=content was rendered in a non-tab-container",
			projectName: (a = c) != null ? a : "comet_infra"
		})
	}
	c = g.forwardRef(a);
	e.exports = c
}), null);