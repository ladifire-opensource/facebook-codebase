__d("SearchCometGlobalTypeaheadViewStrategy.react", ["fbt", 
	"CometSearchTypeaheadBaseViewList.react", 
	"CometSearchTypeaheadBaseViewRecentEmptyState.react", 
	"FocusInertRegion.react", "React", 
	"SearchCometGlobalTypeaheadViewItem.react",
	 "SearchCoronavirusGlobalTypeaheadStrings", 
	 "TetraUnitHeader.react", 
	 "focusScopeQueries", "gkx", 
	 "stylex", "XCometActivityLogControllerRouteBuilder"], (function (a, b, c, d, e, f, g) {
	"use strict";
	e.exports = a;
	var h = b("React");

	function a(a) {
		var c = a.entries;
		a.extraViewProps;
		var d = a.highlightedEntry,
			e = a.onAbandonTypeahead_DO_NOT_USE,
			f = a.queryString,
			i = babelHelpers.objectWithoutPropertiesLoose(a, ["entries", "extraViewProps", "highlightedEntry", "onAbandonTypeahead_DO_NOT_USE", "queryString"]);
		a = b("XCometActivityLogControllerRouteBuilder");
		a = a.buildURL({
			category_key: "SEARCH",
			log_filter: "search",
			vanity: "me"
		});
		var j = f === "" && c.length > 0,
			k = c.some(function (a) {
				return a.getMetaData().markers.has("alert_coronavirus")
			}),
			l = null,
			m = [].concat(c);
		b("gkx")("1351659") && f === "" && k && (l = m.shift());
		return h.jsxs(b("FocusInertRegion.react"), {
			focusQuery: b("focusScopeQueries").tabbableScopeQuery,
			children: [l && h.jsxs(h.Fragment, {
				children: [h.jsx("div", {
					className: "h676nmdw oi9244e8 bi6gxh9e",
					children: h.jsx(b("TetraUnitHeader.react"), {
						headline: b("SearchCoronavirusGlobalTypeaheadStrings").GLOBAL_TYPEAHEAD_SECTION_HEADER,
						level: 3,
						onActionPressIn: e,
						paddingHorizontal: 0
					})
				}), h.jsx(b("CometSearchTypeaheadBaseViewList.react"), {
					entries: l ? [l] : [],
					highlightedEntry: d,
					children: function (a, c) {
						return h.createElement(b("SearchCometGlobalTypeaheadViewItem.react"), babelHelpers["extends"]({}, i, {
							entry: a,
							isActive: c,
							key: a.getKey(),
							queryString: f
						}))
					}
				})]
			}), j && m.length > 0 ? h.jsx("div", {
				className: "h676nmdw oi9244e8 bi6gxh9e",
				children: h.jsx(b("TetraUnitHeader.react"), {
					action: g._("Ch\u1ec9nh s\u1eeda"),
					actionLinkProps: {
						url: a
					},
					headline: g._("T\u00ecm ki\u1ebfm g\u1ea7n \u0111\u00e2y"),
					level: 3,
					onActionPress: e,
					paddingHorizontal: 0
				})
			}) : null, h.jsx(b("CometSearchTypeaheadBaseViewList.react"), {
				entries: m,
				highlightedEntry: d,
				children: function (a, c) {
					return h.createElement(b("SearchCometGlobalTypeaheadViewItem.react"), babelHelpers["extends"]({}, i, {
						entry: a,
						isActive: c,
						key: a.getKey(),
						queryString: f
					}))
				}
			}), c.length === 0 && h.jsx(b("CometSearchTypeaheadBaseViewRecentEmptyState.react"), {})]
		})
	}
}), null);