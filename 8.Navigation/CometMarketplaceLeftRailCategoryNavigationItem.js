__d("CometMarketplaceLeftRailCategoryNavigationItem.react", [
	"CometMarketplaceCategoryIcons", "CometMarketplaceClickableListItem_DEPRECATED.react",
	 "CometMarketplaceNavLink.react", "CometRelay", "CometRouteParams", "React",
	  "TetraText.react", "stylex", "useCategoryRouteUrlBuilder", "useCategoryRouteUrlBuilderWithoutParams",
	   "useIsSearchRouteActive", "useLabelCategoryPrediction", 
	   "CometMarketplaceLeftRailCategoryNavigationItem_category.graphql"], (function (a, b, c, d, e, f) {
	"use strict";
	e.exports = a;
	var g, h = b("React"),
		i = function (a) {
			if (a == null || a.id == null) return [];
			var b = [a.id];
			a = (a == null ? void 0 : a.pivots_for_location) || [];
			for (var a = a, c = Array.isArray(a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
				var e;
				if (c) {
					if (d >= a.length) break;
					e = a[d++]
				} else {
					d = a.next();
					if (d.done) break;
					e = d.value
				}
				e = e;
				e = e == null ? void 0 : e.id;
				e != null && b.push(e)
			}
			return b
		};

	function a(a) {
		var c = b("CometRelay").useFragment(g !== void 0 ? g : g = b("CometMarketplaceLeftRailCategoryNavigationItem_category.graphql"), a.category),
			d = b("CometRouteParams").useRouteParams(),
			e = b("useCategoryRouteUrlBuilderWithoutParams")(),
			f = b("useCategoryRouteUrlBuilder")(),
			j = b("useIsSearchRouteActive")(),
			k = a.categoryRankingPredictionID,
			l = a.siblingCategoryIds;
		a = b("useLabelCategoryPrediction")(k, c == null ? void 0 : c.id);
		k = c.name;
		var m = c.seo_info,
			n = c.virtual_taxonomy_publish_state;
		m = m == null ? void 0 : m.seo_url;
		if (n !== "PUBLISHED" || m == null || k == null) return null;
		var o = i(c);
		n = e({
			slug: m
		});
		if (n == null) return null;
		var p = !1;
		e = !1;
		var q = d.category_ids;
		j && Array.isArray(q) ? (p = q.filter(function (a) {
			return o.includes(a)
		}).length === o.length, e = q.filter(function (a) {
			return o.includes(a)
		}).length > 0) : (p = d.category_id === m, e = p);
		m = c.pivots_for_location;
		var r = p || m && m.some(function (a) {
			var b;
			b = a == null ? void 0 : (b = a.seo_info) == null ? void 0 : b.seo_url;
			var c = a == null ? void 0 : a.id;
			if (b == null || c == null) return !1;
			if (j && Array.isArray(q)) return q.includes(c);
			else return d.category_id === b && !l.some(function (a) {
				return a === c
			})
		});
		m = m.map(function (a) {
			return a
		}).sort(function (a, b) {
			var c, d;
			c = (c = a == null ? void 0 : a.name) != null ? c : "";
			d = (d = b == null ? void 0 : b.name) != null ? d : "";
			return c === d || a === b ? 0 : c > d ? 1 : -1
		});
		return h.jsxs("div", {
			"data-testid": void 0,
			children: [h.jsx(b("CometMarketplaceNavLink.react"), {
				icon: b("CometMarketplaceCategoryIcons").getIcon(c.icon_name).asset,
				isActive: e || r,
				onClick: a,
				title: k,
				url: n
			}), r === !0 ? m && m.map(function (a) {
				var c, e = a == null ? void 0 : a.name;
				c = a == null ? void 0 : (c = a.seo_info) == null ? void 0 : c.seo_url;
				var g = a == null ? void 0 : a.id,
					i = !1;
				if ((a == null ? void 0 : a.virtual_taxonomy_publish_state) !== "PUBLISHED" || c == null) return null;
				var k = f({
					slug: c
				});
				if (k == null) return null;
				j && Array.isArray(q) ? i = q.includes(g) : i = d.category_id === c;
				return h.jsx(b("CometMarketplaceClickableListItem_DEPRECATED.react"), {
					href: k,
					indented: !0,
					selected: i && !p,
					title: h.jsx(b("TetraText.react"), {
						type: "headline4",
						children: h.jsx("span", {
							className: "fjf4s8hc",
							"data-testid": void 0,
							children: e
						})
					})
				}, a == null ? void 0 : a.id)
			}) : null]
		}, c.id)
	}
}), null);