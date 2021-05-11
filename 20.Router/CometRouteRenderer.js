__d("CometRouteRenderer.react", ["CometRouteActorProvider.react", 
	"CometRouterDispatcherContextFactory.react", "CometRouteRootRenderer.react", 
	"CometRouterRefreshKeyContext", "CometRouterRootContextFactory.react", "CometScrollAnchorContext", 
	"React"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c, d = a.children,
			e = a.renderType;
		a = a.routeInfo;
		var f = a.refreshKey,
			h = a.route,
			i = h.hostableView,
			j = h.refreshBehavior,
			k = h.rootView,
			l = h.tracePolicy,
			m = e === "main" ? "rootView" : e === "hosted" ? "hostedView" : "pushView",
			n = m === "hostedView" && i != null;
		i = n && i ? i : k;
		k = h.params;
		var o = (c = k == null ? void 0 : k.reply_comment_id) != null ? c : k == null ? void 0 : k.comment_id;
		c = g.useMemo(function () {
			return typeof o === "string" ? {
				key: "ufi-comment",
				value: o
			} : null
		}, [o]);
		return g.jsx(b("CometRouterRootContextFactory.react"), {
			renderType: e,
			routeInfo: a,
			children: g.jsx(b("CometRouterDispatcherContextFactory.react"), {
				from: n ? "hostedView" : m,
				tracePolicy: l,
				children: g.jsx(b("CometScrollAnchorContext").Provider, {
					value: c,
					children: g.jsx(b("CometRouterRefreshKeyContext").Provider, {
						value: (k = f) != null ? k : null,
						children: g.jsx(b("CometRouteActorProvider.react"), {
							route: h,
							children: g.jsx(b("CometRouteRootRenderer.react"), babelHelpers["extends"]({
								refreshBehavior: j
							}, i, {
								children: d
							}))
						})
					})
				})
			})
		})
	}
}), null);