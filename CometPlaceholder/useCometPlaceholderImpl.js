__d("useCometPlaceholderImpl", [
	"CometHeroFallbackTracker.react", 
	"CometHeroInteractionContext", 
	"CometHeroInteractionIDContext",
	 "CometHeroLogging",
	  "CometSSRHydrationMarkerUtils",/// NULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
	   "CometSuspenseHUD.react", /// NULLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
	    "ExecutionEnvironment",
	     "React", "gkx", 
	     "useLayoutEffect_SAFE_FOR_SSR",
	      "useStable"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = c;
	var g = b("React");
	d = function (a) {
		a = a.children;
		return a
	};

	function h(a) {
		var c = a.cb;
		b("useLayoutEffect_SAFE_FOR_SSR")(function () {
			c()
		}, [c]);
		return null
	}

	function c(c) {
		var d = c.children,
			e = c.fallback,
			f = c.name,
			i = c.unstable_expectedLoadTime,
			j = g.useContext(b("CometHeroInteractionContext").Context),
			k = g.useContext(b("CometHeroInteractionIDContext")),
			l = b("useStable")(b("CometHeroLogging").getSimpleUUID),
			m = b("useStable")(b("CometHeroLogging").getSimpleUUID),
			n = g.useRef(!1),
			o = b("useStable")(function () {
				return b("CometSuspenseHUD.react") && b("ExecutionEnvironment").canUseDOM ? a.document.createElement("div") : null
			});
		d = d;
		e = e;
		b("CometSSRHydrationMarkerUtils").addMarkersToChildren != null && b("CometSSRHydrationMarkerUtils").addMarkersToFallback != null && (d = b("CometSSRHydrationMarkerUtils").addMarkersToChildren(d), e = b("CometSSRHydrationMarkerUtils").addMarkersToFallback(e));
		var p = g.useCallback(function (a) {
				k != null && j.suspenseCallback(k, l, j.pageletStack, a, f);
				if (o != null) {
					o.textContent = (a = b("CometHeroLogging").createThenableDescription(a)) != null ? a : ""
				}
			}, [j, k, l, o, f]),
			q = null;
		o != null && b("CometSuspenseHUD.react") != null && (q = g.jsx(b("CometSuspenseHUD.react"), {
			desc: o
		}));
		b("useLayoutEffect_SAFE_FOR_SSR")(function () {
			if (b("ExecutionEnvironment").canUseDOM && n.current === !1 && k != null && k != null) {
				j.hold(k, j.pageletStack, "Hydration", m, f);
				return function () {
					return j.unhold(k, m)
				}
			}
		}, [j, k, f, m]);
		var r = function () {
			n.current = !0, k != null && j.unhold(k, m)
		};
		return g.jsxs(g.Suspense, {
			fallback: g.jsxs(g.Fragment, {
				children: [e, g.jsx(h, {
					cb: r
				}), g.jsx(b("CometHeroFallbackTracker.react"), {
					uuid: l
				}), q]
			}),
			suspenseCallback: p,
			unstable_avoidThisFallback: c.unstable_avoidThisFallback,
			unstable_expectedLoadTime: b("gkx")("1748426") ? i : void 0,
			children: [g.jsx(h, {
				cb: r
			}), d]
		})
	}
}), null);