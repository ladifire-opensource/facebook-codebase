__d("CometFeedInfiniteScrollSuspenseList.react", ["CometEventListener", "CometFeedGlimmer.react", 
	"CometFeedTailLoadBufferHeight", "CometInfiniteScrollSuspenseList.react", 
	"CometInteractionSourceContext", "FBLogger", "QuickPerformanceLogger", "React", 
	"WebConnectionClassServerGuess", "requireCond", "useVisibilityObserver", "cr:1603779"], (function(a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.children,
			d = a.hasMore,
			e = a.incrementalRendering;
		e = e === void 0 ? !0 : e;
		var f = a.incrementalRenderingPageSizes,
			h = a.interactionSource,
			i = a.isLoading,
			j = a.onLoadMore,
			k = a.revealOrder,
			l = a.waitOnScrollIntent;
		a = a.pageletName;
		var m = g.useState(!1),
			n = m[0],
			o = m[1];
		g.useEffect(function() {
			if (!n) {
				var a = window.scrollY,
					c = b("CometEventListener").capture(window, "scroll", function(b) {
						b.target === window.document && window.scrollY !== a && o(!0)
					});
				return function() {
					c.remove()
				}
			}
		}, [n]);
		m = g.useMemo(function() {
			return {
				onVisible: function() {
					b("QuickPerformanceLogger").markEvent(655653, "collision_happened", 7, {
						annotations: {
							bool: {
								had_demonstrated_scroll_intent: n
							},
							"int": {
								interaction_source: h
							}
						}
					})
				}
			}
		}, [h, n]);
		m = b("useVisibilityObserver")(m);
		var p = g.useMemo(function() {
			var a;
			if (l === !0 && !n) return 0;
			var c;
			switch (b("WebConnectionClassServerGuess").connectionClass) {
				case "UNKNOWN":
				case "EXCELLENT":
				default:
					c = b("CometFeedTailLoadBufferHeight").EXCELLENT;
					break;
				case "GOOD":
					c = b("CometFeedTailLoadBufferHeight").GOOD;
					break;
				case "MODERATE":
					c = b("CometFeedTailLoadBufferHeight").MODERATE;
					break;
				case "POOR":
					c = b("CometFeedTailLoadBufferHeight").POOR;
					break
			}
			c == null && (b("FBLogger")("comet_feed").mustfix("Found no tail load buffer height value for the connection class `%s`. Falling back to 2500px.", b("WebConnectionClassServerGuess").connectionClass), c = 2500);
			return a = {}, a[k === "backwards" ? "top" : "bottom"] = c, a
		}, [k, n, l]);
		m = {
			endGlimmerRef: m,
			hasMore: d,
			isLoading: i,
			listGlimmer: g.jsx(b("CometFeedGlimmer.react"), {}),
			onLoadMore: j,
			pageletName: a,
			revealOrder: k,
			rootMargin: p
		};
		if (b("cr:1603779") && e && (k == null || k === "forwards")) return g.jsx(b("CometInteractionSourceContext").Provider, {
			value: h,
			children: g.jsx(b("cr:1603779"), babelHelpers["extends"]({
				pageSizes: f
			}, m, {
				children: c
			}))
		});
		else return g.jsx(b("CometInteractionSourceContext").Provider, {
			value: h,
			children: g.jsx(b("CometInfiniteScrollSuspenseList.react"), babelHelpers["extends"]({}, m, {
				children: c
			}))
		})
	}
}), null);