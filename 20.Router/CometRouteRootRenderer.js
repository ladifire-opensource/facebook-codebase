__d("CometRouteRootRenderer.react", ["BootloaderResource", 
	"CometRelay", "CometRouteParams", "CometRouterFocusRegion.react", 
	"CometRouterRefreshKeyContext", "CometRouterRouteInfoContext", "React", "gkx", 
	"relay-experimental/LazyLoadEntryPointContainer_DEPRECATED.react", "requireCond", 
	"useCometRelayEntrypointContextualEnvironmentProvider", "useCometRouteTimeSpentMetaData", 
	"useRoutePassthroughProps", "cr:1434325"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React");

	function h(a, b) {
		return babelHelpers["extends"]({}, a, {
			getPreloadProps: function (c) {
				var d = a.getPreloadProps(c);
				if (d.queries == null) return d;
				var e = {};
				if (d.entryPoints) {
					var f = d.entryPoints;
					Object.keys(f).forEach(function (a) {
						var c;
						((c = f[a]) == null ? void 0 : c.entryPoint) ? e[a] = babelHelpers["extends"]({}, f[a], {
							entryPoint: h(f[a].entryPoint, b)
						}): e[a] = f[a]
					})
				}
				var g = {};
				d.queries && Object.keys(d.queries).forEach(function (a) {
					var c;
					g[a] = babelHelpers["extends"]({}, (c = d.queries) == null ? void 0 : c[a], {
						options: babelHelpers["extends"]({}, (c = d.queries) == null ? void 0 : c[a].options, {
							fetchKey: b,
							fetchPolicy: "network-only"
						})
					})
				});
				return babelHelpers["extends"]({}, d, {
					entryPoints: e,
					queries: g
				})
			}
		})
	}

	function i(a) {
		var c = a.children,
			d = a.entryPoint,
			e = a.refreshBehavior,
			f = a.resource,
			i = a.routeProps,
			j = b("useCometRelayEntrypointContextualEnvironmentProvider")(),
			k = b("CometRouteParams").useRouteParams(),
			l = b("useRoutePassthroughProps")(),
			m = b("useCometRouteTimeSpentMetaData")();
		a = g.useContext(b("CometRouterRouteInfoContext"));
		var n = g.useMemo(function () {
				return {
					passthroughProps: l,
					routeParams: k,
					routeProps: i,
					timeSpentMetaData: m
				}
			}, [l, k, i, m]),
			o = g.useMemo(function () {
				return {
					children: c,
					routeProps: i,
					timeSpentMetaData: m
				}
			}, [c, i]),
			p = g.useContext(b("CometRouterRefreshKeyContext")),
			q = a == null ? void 0 : a.entryPointContainer;
		g.useEffect(function () {
			if (b("gkx")("1621604") && q != null) return function () {
				q == null ? void 0 : q.dispose()
			}
		}, [q]);
		return g.useMemo(function () {
			if (d) {
				if (b("gkx")("1621604") && q != null) {
					var a = q.readOrSuspend();
					return g.jsx(b("CometRelay").EntryPointContainer, {
						entryPointReference: a,
						props: o
					})
				}
				a = b("BootloaderResource").read(d);
				return g.jsx(b("relay-experimental/LazyLoadEntryPointContainer_DEPRECATED.react"), {
					entryPoint: e === "none" || p == null || !b("gkx")("1352928") ? a : h(a, p),
					entryPointParams: n,
					environmentProvider: j,
					props: o
				})
			} else {
				a = b("BootloaderResource").read(f);
				return g.jsx(a, {
					children: c,
					routeProps: i
				})
			}
		}, [c, o, d, q, n, j, e, p, f, i])
	}

	function a(a) {
		return g.jsx(b("cr:1434325"), {
			children: g.jsx(b("CometRouterFocusRegion.react"), {
				children: g.jsx(i, babelHelpers["extends"]({}, a, {
					routeProps: a.props
				}))
			})
		})
	}
	c = g.memo(a);
	e.exports = c
}), null);