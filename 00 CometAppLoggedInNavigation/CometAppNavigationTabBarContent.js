__d("CometAppNavigationTabBarContent.react", ["CometAppNavigationTabBarContainer.react", 
	"CometContextualLayerAnchorRoot.react", "CometLoggedInTabsList", 
	"CometLoggedOutTabsList", "CometTooltipGroup.react", 
	"CometTopNav.react", "CometTopNavTab.react", 
	"FocusInertRegion.react", "React", "XCometHomeControllerRouteBuilder", 
	"getTopMostRouteInfo", "stylex", "useAppLastUsedTimestamps", "useCometRouterDispatcher", "useCometRouterState", "useShouldRenderFullTopNav"], (function (a, b, c, d, e, f) {
	"use strict";
	var g = b("React");

	function a(a) {
		a = a.inert;
		return g.jsx(b("FocusInertRegion.react"), {
			disabled: !a,
			children: g.jsx("div", {
				"aria-hidden": a,
				className: "kr520xx4 j9ispegn poy2od1o n7fi1qx3 tkr6xdv7",
				children: g.jsx(h, {})
			})
		})
	}
	var h = g.memo(c);

	function c() {
		var a = g.useState(null),
			c = a[0],
			d = a[1],
			e = g.useCallback(function (a, b) {
				d(a ? b : null)
			}, [d]);
		a = b("useShouldRenderFullTopNav")();
		a = a ? b("CometLoggedInTabsList") : b("CometLoggedOutTabsList");
		var f = b("useAppLastUsedTimestamps")(a);
		return g.jsx(b("CometAppNavigationTabBarContainer.react"), {
			children: g.jsx(b("CometContextualLayerAnchorRoot.react"), {
				children: g.jsx(b("CometTooltipGroup.react"), {
					children: g.jsx(b("CometTopNav.react"), {
						children: a.map(function (a, d) {
							var h = a.activeIcon,
								j = a.appID,
								k = a.badge,
								l = a.customIcon,
								m = a.hidden,
								n = a.icon,
								o = a.label,
								p = a.nuxConfig,
								q = a.prefetchQueriesEligible,
								r = a.preload,
								s = a.tabKey,
								t = a.testid;
							a = babelHelpers.objectWithoutPropertiesLoose(a, ["activeIcon", "appID", "badge", "customIcon", "hidden", "icon", "label", "nuxConfig", "prefetchQueriesEligible", "preload", "tabKey", "testid"]);
							if (m === !0) return null;
							m = {
								activeIcon: h,
								appID: j,
								badge: k,
								customIcon: l,
								icon: n,
								label: o,
								lastUsedTimestamp: j != null ? f[j] : null,
								nuxConfig: p,
								pendingTabKey: c,
								prefetchQueriesEligible: q,
								preload: r,
								setIsPendingTab: e,
								tabKey: s,
								testid: t
							};
							h = a.url;
							k = s === "more" ? i : b("CometTopNavTab.react");
							return g.jsx(k, babelHelpers["extends"]({
								passthroughProps: a.passthroughProps,
								position: d,
								responsiveStyle: !0,
								url: h
							}, m), h)
						}).filter(Boolean)
					})
				})
			})
		})
	}

	function i(a) {
		var c = b("useCometRouterState")(),
			d = b("useCometRouterDispatcher")(),
			e = c != null ? b("getTopMostRouteInfo")(c) : null;
		c = (e == null ? void 0 : (c = e.route) == null ? void 0 : c.tabKey) === "more";
		c = c && d ? {
			onPress: function () {
				var a;
				(e == null ? void 0 : (a = e.referrer) == null ? void 0 : a.navigationType) !== "initial" ? d.goBack(): d.go(b("XCometHomeControllerRouteBuilder").buildURL({}), {})
			},
			preventLocalNavigation: !0
		} : null;
		return g.jsx(b("CometTopNavTab.react"), babelHelpers["extends"]({}, c, a))
	}
	d = g.memo(a);
	e.exports = d
}), null);