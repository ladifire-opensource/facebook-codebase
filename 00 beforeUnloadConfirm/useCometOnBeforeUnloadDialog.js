__d("buildCometRouterStateProvider", ["CometRouterDispatcherContext", "CometRouterLoadingContext", 
	"CometRouterMaintainedRoutesStateContext", "CometRouterPushViewStackContext", 
	"CometRouterRouteTopNavTypeContext", "CometRouterStateContext", "CometRouteStoreContext", 
	"React", "ReactDOMComet", "getTopMostRoute", "useCometOnBeforeUnloadDialog"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React"),
		h = [];

	function a(a) {
		return function (c) {
			var d = g.useState(function () {
					return a.getCurrentRouterState()
				}),
				e = d[0],
				f = d[1];
			d = g.useState(function () {
				return a.getIsLoading()
			});
			var i = d[0],
				j = d[1];
			d = g.useState(function () {
				return a.getMaintainedRouteState()
			});
			var k = d[0],
				l = d[1];
			d = b("useCometOnBeforeUnloadDialog")();
			var m = d[0];
			g.useEffect(function () {
				var c = a.getCurrentRouterState(),
					d = a.getIsLoading(),
					e = a.getMaintainedRouteState();
				b("ReactDOMComet").unstable_batchedUpdates(function () {
					f(c), j(d), l(e)
				});
				var g = a.listen(function () {
						var c = a.getCurrentRouterState(),
							d = a.getIsLoading(),
							e = a.getMaintainedRouteState();
						b("ReactDOMComet").unstable_batchedUpdates(function () {
							f(c), j(d), l(e)
						})
					}),
					h = a.setUnloadListener(function (a, b, c, d, e, f, g) {
						m({
							body: f,
							cancel: c,
							confirm: a,
							onCloseButtonPress: g,
							primaryAction: b,
							secondaryAction: d,
							title: e
						})
					});
				return function () {
					g.cancel(), h.cancel()
				}
			}, []);
			d = c.children;
			return g.jsx(b("CometRouterDispatcherContext").Provider, {
				value: a.dispatcher,
				children: g.jsx(b("CometRouterLoadingContext").Provider, {
					value: i,
					children: g.jsx(b("CometRouterStateContext").Provider, {
						value: e,
						children: g.jsx(b("CometRouterMaintainedRoutesStateContext").Provider, {
							value: k,
							children: g.jsx(b("CometRouterPushViewStackContext").Provider, {
								value: (c = e.pushViewStack) != null ? c : h,
								children: g.jsx(b("CometRouteStoreContext").Provider, {
									value: a.store,
									children: g.jsx(b("CometRouterRouteTopNavTypeContext").Provider, {
										value: (i = b("getTopMostRoute")(e).topNavType) != null ? i : "default",
										children: typeof d === "function" ? d(e) : d
									})
								})
							})
						})
					})
				})
			})
		}
	}
}), null);