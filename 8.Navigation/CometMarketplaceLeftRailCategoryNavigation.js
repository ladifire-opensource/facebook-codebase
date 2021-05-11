__d("CometMarketplaceLeftRailCategoryNavigation.react", ["fbt", 
	"CometMarketplaceGroupsNavigationItem.react", "CometMarketplaceLeftRailCategoryNavigationItem.react", 
	"CometRelay", "CometRouteParams", "React", "TetraUnitHeader.react", "qex",
	 "CometMarketplaceLeftRailCategoryNavigation_viewer.graphql"], (function (a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h, i = b("React");

	function a(a) {
		var c = a.showHeader;
		c = c === void 0 ? !0 : c;
		a = babelHelpers.objectWithoutPropertiesLoose(a, ["showHeader"]);
		var d = {
			ALL_TOP: 3,
			CATEGORY_THIRD: 2,
			CATEGORY_TOP: 1,
			CONTROL: 0
		};
		a = b("CometRelay").useFragment(h !== void 0 ? h : h = b("CometMarketplaceLeftRailCategoryNavigation_viewer.graphql"), a.viewer);
		var e = b("CometRouteParams").useRouteParams();
		a = (a == null ? void 0 : a.marketplace_ranked_categories) || {};
		var f = a.categories_virtual_taxonomy,
			j = a.prediction_id,
			k = String(e.query);
		if (f == null) return null;
		a = f.map(function (a) {
			return a
		}).sort(function (a, b) {
			var c, d, e, f;
			c = (c = a == null ? void 0 : a.name) != null ? c : "";
			d = (d = b == null ? void 0 : b.name) != null ? d : "";
			e = (e = a == null ? void 0 : (e = a.seo_info) == null ? void 0 : e.seo_url) != null ? e : "";
			f = (f = b == null ? void 0 : (f = b.seo_info) == null ? void 0 : f.seo_url) != null ? f : "";
			if (c === d || e === f || a === b) return 0;
			if (e === "vehicles") return -1;
			if (f === "vehicles") return 1;
			if (e === "propertyrentals") return -1;
			return f === "propertyrentals" ? 1 : c > d ? 1 : -1
		});
		var l = a.map(function (a) {
			a = a.id;
			return a
		});
		e = a.map(function (a) {
			var c;
			return i.jsx(b("CometMarketplaceLeftRailCategoryNavigationItem.react"), {
				category: a,
				categoryRankingPredictionID: (c = j) != null ? c : void 0,
				query: k,
				siblingCategoryIds: (c = l) != null ? c : []
			}, a.id)
		});
		f = b("qex")._("1710235");
		switch (f) {
			case d.CATEGORY_TOP:
				e.unshift(i.jsx(b("CometMarketplaceGroupsNavigationItem.react"), {}, "groups"));
				break;
			case d.CATEGORY_THIRD:
				e.splice(2, 0, i.jsx(b("CometMarketplaceGroupsNavigationItem.react"), {}, "groups"));
				break;
			case d.ALL_TOP:
				break;
			default:
				e.push(i.jsx(b("CometMarketplaceGroupsNavigationItem.react"), {}, "groups"))
		}
		return i.jsxs(i.Fragment, {
			children: [c && i.jsx(b("TetraUnitHeader.react"), {
				hasTopDivider: !0,
				headline: g._("H\u1ea1ng m\u1ee5c"),
				level: 3
			}), e]
		})
	}
}), null);