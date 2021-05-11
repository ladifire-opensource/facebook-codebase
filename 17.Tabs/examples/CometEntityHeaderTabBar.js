__d("CometEntityHeaderTabBar.react", ["React", "TetraishEntityHeaderTabs.react"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g = b("React");

	function a(a) {
		var c = a.maxTabs,
			d = a.tabs;
		a = a.tabsRouteTarget;
		var e = a === void 0 ? "self" : a,
			f = d.findIndex(function (a) {
				return a.isActive()
			});
		a = d.map(function (a, b) {
			a.isActive;
			var c = a.linkProps;
			a = babelHelpers.objectWithoutPropertiesLoose(a, ["isActive", "linkProps"]);
			return c ? babelHelpers["extends"]({}, a, {
				linkProps: babelHelpers["extends"]({}, c, {
					routeTarget: e
				}),
				selected: b === f
			}) : babelHelpers["extends"]({}, a, {
				selected: b === f
			})
		});
		return g.jsx(b("TetraishEntityHeaderTabs.react"), {
			maxTabs: c,
			tabs: a
		})
	}
}), null);