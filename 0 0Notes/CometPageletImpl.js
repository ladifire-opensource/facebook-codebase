__d("CometPageletImpl.react", ["CometHeroInteractionContext", 
	"CometHeroInteractionIDContext", "CometProfiler.react", 
	"CometRelay", "InteractionTracingMetrics", "React", 
	"mergeRefs", "performanceAbsoluteNow", "performanceNavigationStart", 
	"performanceNow", "useCometPageletVCTracker", "useCometTailLoadPageletTracker"], (function(a, b, c, d, e, f) {
	"use strict";
	var g, h, i = b("React");

	function j(a, b) {
		return babelHelpers["extends"]({}, a, {
			pageletStack: [].concat(a.pageletStack, [b])
		})
	}

	function a(a, c) {
		var d = a.children,
			e = a.excludeFromMainVC,
			f = a.isMutationRoot,
			k = a.name,
			l = a.pageletName,
			m = a.pageletType,
			n = a.position;
		a = a.trackTailLoad;
		var o = i.useContext(b("CometHeroInteractionContext").Context),
			p = i.useContext(b("CometHeroInteractionIDContext")),
			q = i.useMemo(function() {
				var a = j(o, k),
					b = a.getRelayProfilerContext(a.pageletStack);
				return [a, b]
			}, [o, k]),
			r = q[0];
		q = q[1];
		var s = i.useMemo(function() {
				return (g || (g = b("performanceNow")))()
			}, [p]),
			t = i.useCallback(function() {
				if (p != null) {
					var a = b("InteractionTracingMetrics").get(p);
					if (a && a.vcTracker) {
						a = a.vcTracker;
						a.addFirstMarkerPoint("Queue_" + k, s + b("performanceNavigationStart")());
						a.addFirstMarkerPoint("Render_" + k, (h || (h = b("performanceAbsoluteNow")))())
					}
				}
				return null
			}, [p, k, s]),
			u = i.useCallback(function(a, b) {
				p != null && r.logPageletVC(p, s, a, b, r.pageletStack)
			}, [p, r, s]),
			v = b("useCometPageletVCTracker")({
				excludeFromMainVC: e,
				interactionUUID: p,
				isMutationRoot: f,
				pageletName: k,
				pageletType: m,
				vcCallback: u
			}),
			w = b("useCometTailLoadPageletTracker")(l, n, a);
		e = i.useMemo(function() {
			return b("mergeRefs")(c, v, w)
		}, [c, v, w]);
		return i.jsx(b("CometHeroInteractionContext").Context.Provider, {
			value: r,
			children: i.jsx(b("CometRelay").ProfilerContext.Provider, {
				value: q,
				children: i.jsx(b("CometProfiler.react"), {
					id: k,
					isPagelet: !0,
					children: d(e, t)
				})
			})
		})
	}
	a.displayName = "CometPageletImpl";
	c = i.forwardRef(a);
	e.exports = c
}), null);